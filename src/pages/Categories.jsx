import { Link } from 'react-router-dom'
import { exercises } from '../data/exercises'
import { isDailyChallengeCompleted } from '../utils/exerciseEngine'
import CategoryCard from '../components/CategoryCard'
import './Categories.css'

function Categories({ stats }) {
  const dailyDone = isDailyChallengeCompleted(stats.dailyChallengeLastDate)
  const categoryIds = Object.keys(exercises)

  return (
    <div className="categories-page">
      <div className="container">
        <div className="categories-header">
          <h1 className="categories-title">Exercices</h1>
          <p className="categories-subtitle">Apprenez les règles, puis pratiquez !</p>
        </div>

        <Link
          to="/exercise/daily"
          className={`daily-challenge-card ${dailyDone ? 'daily-challenge-card--completed' : ''}`}
        >
          <div className="daily-challenge__icon">
            {dailyDone ? '✅' : '🔥'}
          </div>
          <div className="daily-challenge__content">
            <h3 className="daily-challenge__title">Défi du jour</h3>
            <p className="daily-challenge__description">
              {dailyDone
                ? 'Complété ! Revenez demain'
                : '10 questions pour garder votre série'}
            </p>
          </div>
          <div className="daily-challenge__arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </Link>

        <div className="categories-list">
          {categoryIds.map((catId, index) => {
            const cat = exercises[catId]
            return (
              <div
                key={catId}
                className="categories-list__item"
                style={{ animationDelay: `${(index + 1) * 80}ms` }}
              >
                <div className="category-wrapper">
                  <CategoryCard
                    id={catId}
                    title={cat.title}
                    icon={cat.icon}
                    color={cat.color}
                    description={cat.description}
                    questionsCount={cat.questions.length}
                  />
                  <div className="category-actions">
                    <Link to={`/lesson/${catId}`} className="category-action-btn category-action-btn--lesson">
                      📖 Leçon
                    </Link>
                    <Link to={`/exercise/${catId}`} className="category-action-btn category-action-btn--exercise">
                      ✏️ Exercice
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Categories
