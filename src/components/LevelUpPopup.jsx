import { useEffect, useState } from 'react'
import './LevelUpPopup.css'

function LevelUpPopup({ level, title, icon, onClose }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const colors = ['#FFD700', '#FF6B6B', '#1CB0F6', '#CE82FF', '#58CC02', '#FF9600']
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.8,
      duration: 1.5 + Math.random() * 1.5,
      size: 6 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="levelup-popup__overlay" onClick={onClose}>
      <div className="levelup-popup__particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="levelup-popup__particle"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
            }}
          />
        ))}
      </div>
      <div className="levelup-popup__card" onClick={(e) => e.stopPropagation()}>
        <h2 className="levelup-popup__header">Niveau sup&eacute;rieur !</h2>
        <div className="levelup-popup__icon-wrapper">
          <span className="levelup-popup__icon">{icon}</span>
        </div>
        <h3 className="levelup-popup__title">{title}</h3>
        <span className="levelup-popup__level">Niveau {level}</span>
        <button className="levelup-popup__button" onClick={onClose}>
          Continuer
        </button>
      </div>
    </div>
  )
}

export default LevelUpPopup
