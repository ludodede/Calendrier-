import { useLocation, Link } from 'react-router-dom'
import './Results.css'

function Results() {
  const location = useLocation()
  const {
    score = 0,
    total = 10,
    points = 0,
    categoryId = '',
    answers = [],
    isDaily = false,
  } = location.state || {}

  const percentage = total > 0 ? score / total : 0
  const circumference = 2 * Math.PI * 75
  const dashArray = `${circumference * percentage} ${circumference * (1 - percentage)}`

  const ringColor =
    percentage >= 0.8
      ? 'var(--green)'
      : percentage >= 0.5
        ? 'var(--orange)'
        : 'var(--red)'

  const isPerfect = score === total && total > 0

  let message
  if (isPerfect) {
    message = 'Parfait ! \u{1F389}'
  } else if (score >= total * 0.8) {
    message = 'Excellent travail ! \u{1F4AA}'
  } else if (score >= total * 0.5) {
    message = 'Pas mal, continuez ! \u{1F4DA}'
  } else {
    message = 'Courage, vous progressez ! \u{1F331}'
  }

  return (
    <div className={`results${isPerfect ? ' results--perfect' : ''}`}>
      {isPerfect && (
        <div className="confetti-container">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="confetti-piece" />
          ))}
        </div>
      )}

      <div className="results__score-container">
        <svg className="results__score-svg" viewBox="0 0 180 180">
          <circle
            className="results__score-bg"
            cx="90"
            cy="90"
            r="75"
          />
          <circle
            className="results__score-ring"
            cx="90"
            cy="90"
            r="75"
            stroke={ringColor}
            strokeDasharray={dashArray}
          />
        </svg>
        <div className="results__score-text">
          <div className="results__score-value">
            {score}/{total}
          </div>
          <div className="results__score-label">Score</div>
        </div>
      </div>

      <div className="results__points">
        <span className="results__points-icon">{'\u2B50'}</span>
        +{points} points
      </div>

      <div className="results__message">{message}</div>

      {isDaily && (
        <div className="results__daily">
          {'\u{1F525}'} D\u00E9fi du jour compl\u00E9t\u00E9 ! {'\u{1F525}'}
        </div>
      )}

      <div className="results__actions">
        <Link
          to={`/exercise/${categoryId}`}
          className="results__btn results__btn--primary"
        >
          Recommencer
        </Link>
        <Link
          to="/categories"
          className="results__btn results__btn--outlined"
        >
          Voir les cat\u00E9gories
        </Link>
      </div>
    </div>
  )
}

export default Results
