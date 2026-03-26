import './StatsCard.css'

function StatsCard({ icon, value, label, color }) {
  return (
    <div className="stats-card">
      <div
        className="stats-card__icon"
        style={{ backgroundColor: `${color}20` }}
      >
        {icon}
      </div>
      <span className="stats-card__value">{value}</span>
      <span className="stats-card__label">{label}</span>
    </div>
  )
}

export default StatsCard
