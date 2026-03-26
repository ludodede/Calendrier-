import { Routes, Route, useLocation } from 'react-router-dom'
import { useLocalStorage } from './hooks/useLocalStorage'
import Header from './components/Header'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Exercise from './pages/Exercise'
import Results from './pages/Results'
import Dashboard from './pages/Dashboard'

const defaultStats = {
  totalPoints: 0,
  streak: 0,
  longestStreak: 0,
  lastPlayDate: null,
  exercisesCompleted: 0,
  correctAnswers: 0,
  totalAnswers: 0,
  dailyChallengeLastDate: null,
}

function App() {
  const [stats, setStats] = useLocalStorage('maplume-stats', defaultStats)
  const [history, setHistory] = useLocalStorage('maplume-history', [])

  const updateStreak = () => {
    const today = new Date().toISOString().slice(0, 10)
    if (stats.lastPlayDate === today) return stats

    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
    const isConsecutive = stats.lastPlayDate === yesterday
    const newStreak = isConsecutive ? stats.streak + 1 : 1
    const newStats = {
      ...stats,
      streak: newStreak,
      longestStreak: Math.max(stats.longestStreak, newStreak),
      lastPlayDate: today,
    }
    setStats(newStats)
    return newStats
  }

  const addSessionResult = (categoryId, score, total, pointsEarned) => {
    const currentStats = updateStreak()
    setStats({
      ...currentStats,
      totalPoints: currentStats.totalPoints + pointsEarned,
      exercisesCompleted: currentStats.exercisesCompleted + 1,
      correctAnswers: currentStats.correctAnswers + score,
      totalAnswers: currentStats.totalAnswers + total,
    })
    setHistory(prev => [
      { date: new Date().toISOString(), categoryId, score, total, pointsEarned },
      ...prev,
    ].slice(0, 50))
  }

  const completeDailyChallenge = () => {
    const today = new Date().toISOString().slice(0, 10)
    setStats(prev => ({ ...prev, dailyChallengeLastDate: today }))
  }

  const location = useLocation()
  const hideHeader = ['/', '/results'].includes(location.pathname) || location.pathname.startsWith('/exercise')

  return (
    <div className={hideHeader ? '' : 'app'}>
      <Routes>
        <Route path="/" element={<Home stats={stats} />} />
        <Route
          path="/categories"
          element={<Categories stats={stats} />}
        />
        <Route
          path="/exercise/:categoryId"
          element={
            <Exercise
              stats={stats}
              addSessionResult={addSessionResult}
              completeDailyChallenge={completeDailyChallenge}
            />
          }
        />
        <Route
          path="/results"
          element={<Results stats={stats} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard stats={stats} history={history} />}
        />
      </Routes>
      {!hideHeader && <Header stats={stats} />}
    </div>
  )
}

export default App
