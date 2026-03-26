import { getLevelForPoints, getProgressToNextLevel, levels } from '../data/levels'
import StatsCard from '../components/StatsCard'
import './Dashboard.css'

function Dashboard({ stats, history }) {
  const {
    totalPoints = 0,
    streak = 0,
    exercisesCompleted = 0,
    correctAnswers = 0,
    totalAnswers = 0,
  } = stats || {}

  const successRate =
    totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0

  const currentLevel = getLevelForPoints(totalPoints)
  const progress = getProgressToNextLevel(totalPoints)
  const isMaxLevel = currentLevel.level === levels[levels.length - 1].level

  const currentIndex = levels.findIndex((l) => l.level === currentLevel.level)
  const nextLevel = currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null
  const pointsToNext = nextLevel ? nextLevel.minPoints - totalPoints : 0

  const recentHistory = (history || []).slice(0, 10)

  const formatDate = (dateStr) => {
    try {
      const d = new Date(dateStr)
      return d.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'short',
      })
    } catch {
      return ''
    }
  }

  const formatPoints = (n) => {
    if (n >= 1000) return `${(n / 1000).toFixed(1).replace('.0', '')}k`
    return String(n)
  }

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Ma progression</h1>

      <div className="dashboard__stats-grid">
        <StatsCard
          icon={'\u2B50'}
          value={formatPoints(totalPoints)}
          label="Points totaux"
          color="#FFD700"
        />
        <StatsCard
          icon={'\u{1F525}'}
          value={String(streak)}
          label="Streak actuel"
          color="#FF9600"
        />
        <StatsCard
          icon={'\u{1F4DD}'}
          value={String(exercisesCompleted)}
          label="Exercices compl\u00E9t\u00E9s"
          color="#1CB0F6"
        />
        <StatsCard
          icon={'\u{1F3AF}'}
          value={`${successRate}%`}
          label="Taux de r\u00E9ussite"
          color="#CE82FF"
        />
      </div>

      <div className="dashboard__level">
        <div className="dashboard__level-header">
          <span className="dashboard__level-icon">{currentLevel.icon}</span>
          <div className="dashboard__level-info">
            <h3 className="dashboard__level-title">{currentLevel.title}</h3>
            <span className="dashboard__level-number">
              Niveau {currentLevel.level}
            </span>
          </div>
        </div>
        <div className="dashboard__level-bar-bg">
          <div
            className="dashboard__level-bar-fill"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        {!isMaxLevel && nextLevel ? (
          <p className="dashboard__level-hint">
            <strong>{pointsToNext} points</strong> avant le niveau suivant
          </p>
        ) : (
          <p className="dashboard__level-hint">
            Niveau maximum atteint !
          </p>
        )}
      </div>

      <div className="dashboard__history">
        <h2 className="dashboard__section-title">Historique r\u00E9cent</h2>

        {recentHistory.length === 0 ? (
          <div className="dashboard__history-empty">
            Aucun exercice compl\u00E9t\u00E9. Commencez maintenant !
          </div>
        ) : (
          <ul className="dashboard__history-list">
            {recentHistory.map((entry, i) => (
              <li key={i} className="dashboard__history-item">
                <div className="dashboard__history-left">
                  <span className="dashboard__history-category">
                    {entry.categoryId || 'Exercice'}
                  </span>
                  <span className="dashboard__history-date">
                    {formatDate(entry.date)}
                  </span>
                </div>
                <div className="dashboard__history-right">
                  <span className="dashboard__history-score">
                    {entry.score}/{entry.total}
                  </span>
                  <span className="dashboard__history-points">
                    +{entry.pointsEarned}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Dashboard
