import './BadgePopup.css'

function BadgePopup({ badge, onClose }) {
  if (!badge) return null

  return (
    <div className="badge-popup__overlay" onClick={onClose}>
      <div className="badge-popup__card" onClick={(e) => e.stopPropagation()}>
        <h2 className="badge-popup__header">Nouveau badge !</h2>
        <div className="badge-popup__icon-wrapper">
          <span className="badge-popup__icon">{badge.icon}</span>
          <div className="badge-popup__glow" />
        </div>
        <h3 className="badge-popup__title">{badge.title}</h3>
        <p className="badge-popup__description">{badge.description}</p>
        <button className="badge-popup__button" onClick={onClose}>
          Super !
        </button>
      </div>
    </div>
  )
}

export default BadgePopup
