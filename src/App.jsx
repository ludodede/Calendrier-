import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import Header from './components/Header'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Lesson from './pages/Lesson'
import Exercise from './pages/Exercise'
import Results from './pages/Results'
import Dashboard from './pages/Dashboard'
import BadgePopup from './components/BadgePopup'
import LevelUpPopup from './components/LevelUpPopup'
import { getNewBadges } from './data/badges'
import { getLevelForPoints } from './data/levels'

const defaultStats = {
  totalPoints: 0,
  streak: 0,
  longestStreak: 0,
  lastPlayDate: null,
  exercisesCompleted: 0,
  correctAnswers: 0,
  totalAnswers: 0,
  dailyChallengeLastDate: null,
  hasPerfectScore: false,
  unlockedBadgeIds: [],
}

function App() {
  const [stats, setStats] = useLocalStorage('maplume-stats', defaultStats)
  const [history, setHistory] = useLocalStorage('maplume-history', [])
  const [newBadge, setNewBadge] = useState(null)
  const [levelUp, setLevelUp] = useState(null)

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

  const checkBadgesAndLevel = (oldStats, newStats) => {
    // Check for new badges
    const newBadges = getNewBadges(newStats, oldStats.unlockedBadgeIds || [])
    if (newBadges.length > 0) {
      const allBadgeIds = [...(oldStats.unlockedBadgeIds || []), ...newBadges.map(b => b.id)]
      newStats.unlockedBadgeIds = allBadgeIds
      // Show the first new badge (queue others if needed)
      setTimeout(() => setNewBadge(newBadges[0]), 500)
    }

    // Check for level up
    const oldLevel = getLevelForPoints(oldStats.totalPoints)
    const newLevel = getLevelForPoints(newStats.totalPoints)
    if (newLevel.level > oldLevel.level) {
      setTimeout(() => setLevelUp(newLevel), newBadges.length > 0 ? 2500 : 500)
    }

    return newStats
  }

  const addSessionResult = (categoryId, score, total, pointsEarned) => {
    const currentStats = updateStreak()
    const isPerfect = score === total
    let newStats = {
      ...currentStats,
      totalPoints: currentStats.totalPoints + pointsEarned,
      exercisesCompleted: currentStats.exercisesCompleted + 1,
      correctAnswers: currentStats.correctAnswers + score,
      totalAnswers: currentStats.totalAnswers + total,
      hasPerfectScore: currentStats.hasPerfectScore || isPerfect,
    }
    newStats = checkBadgesAndLevel(currentStats, newStats)
    setStats(newStats)
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
  const hideHeader = ['/', '/results'].includes(location.pathname)
    || location.pathname.startsWith('/exercise')
    || location.pathname.startsWith('/lesson')

  return (
    <div className={hideHeader ? '' : 'app'}>
      <Routes>
        <Route path="/" element={<Home stats={stats} />} />
        <Route path="/categories" element={<Categories stats={stats} />} />
        <Route path="/lesson/:categoryId" element={<Lesson />} />
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
        <Route path="/results" element={<Results stats={stats} />} />
        <Route path="/dashboard" element={<Dashboard stats={stats} history={history} />} />
      </Routes>
      {!hideHeader && <Header stats={stats} />}

      {newBadge && (
        <BadgePopup badge={newBadge} onClose={() => setNewBadge(null)} />
      )}
      {levelUp && (
        <LevelUpPopup level={levelUp} onClose={() => setLevelUp(null)} />
      )}
    </div>
  )
}

export default App
