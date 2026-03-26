import { Link } from 'react-router-dom'
import './ProgressBar.css'

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 4L4 12M4 4L12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function ProgressBar({ current, total }) {
  const percent = total > 0 ? (current / total) * 100 : 0

  return (
    <div className="progress-bar-container">
      <Link to="/categories" className="progress-bar-close" aria-label="Quitter l'exercice">
        <CloseIcon />
      </Link>

      <div className="progress-bar-track-wrapper">
        <span className="progress-bar-label">{current}/{total}</span>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  )
}
