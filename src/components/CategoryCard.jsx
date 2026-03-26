import { Link } from 'react-router-dom'
import './CategoryCard.css'

function CategoryCard({ id, title, icon, color, description, questionsCount }) {
  return (
    <Link to={`/exercise/${id}`} className="category-card" style={{ borderLeftColor: color }}>
      <div className="category-card__icon" style={{ backgroundColor: `${color}20` }}>
        <span className="category-card__emoji">{icon}</span>
      </div>
      <div className="category-card__content">
        <h3 className="category-card__title">{title}</h3>
        <p className="category-card__description">{description}</p>
        <span className="category-card__badge" style={{ backgroundColor: `${color}18`, color }}>
          {questionsCount} questions
        </span>
      </div>
      <div className="category-card__arrow" style={{ color }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </Link>
  )
}

export default CategoryCard
