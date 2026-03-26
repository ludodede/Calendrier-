import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { lessons } from '../data/lessons'
import './Lesson.css'

export default function Lesson() {
  const { categoryId } = useParams()
  const lesson = lessons[categoryId]
  const [openSections, setOpenSections] = useState({0: true})

  if (!lesson) {
    return (
      <div className="lesson-page">
        <div className="lesson-error">
          <p>Leçon introuvable.</p>
          <Link to="/categories" className="lesson-back-btn">Retour</Link>
        </div>
      </div>
    )
  }

  const toggleSection = (index) => {
    setOpenSections(prev => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <div className="lesson-page">
      <div className="lesson-top-bar">
        <Link to="/categories" className="lesson-close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </Link>
        <span className="lesson-top-title">{lesson.icon} {lesson.title}</span>
        <div style={{width: 24}} />
      </div>

      <div className="lesson-content">
        <div className="lesson-intro">
          <p>{lesson.intro}</p>
        </div>

        {lesson.sections.map((section, index) => {
          const isOpen = openSections[index]
          return (
            <div key={index} className={`lesson-section ${isOpen ? 'lesson-section--open' : ''}`} style={{animationDelay: `${index * 80}ms`}}>
              <button className="lesson-section-header" onClick={() => toggleSection(index)}>
                <h3>{section.title}</h3>
                <span className={`lesson-chevron ${isOpen ? 'lesson-chevron--open' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="lesson-section-body">
                  <div className="lesson-rule" style={{borderColor: lesson.color}}>
                    <strong>Règle :</strong> {section.rule}
                  </div>

                  <div className="lesson-tip">
                    {section.tip}
                  </div>

                  <div className="lesson-examples">
                    <strong>Exemples :</strong>
                    {section.examples.map((ex, i) => (
                      <div key={i} className="lesson-example">
                        <span className="lesson-example-sentence" dangerouslySetInnerHTML={{__html: ex.sentence.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}} />
                        <span className="lesson-example-note">{ex.note}</span>
                      </div>
                    ))}
                  </div>

                  {section.mistakes && section.mistakes.length > 0 && (
                    <div className="lesson-mistakes">
                      <strong>Erreurs fréquentes :</strong>
                      {section.mistakes.map((m, i) => (
                        <span key={i} className="lesson-mistake">{m}</span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}

        <div className="lesson-bottom">
          <Link to={`/exercise/${categoryId}`} className="lesson-cta">
            Passer aux exercices
          </Link>
          <Link to="/categories" className="lesson-back-link">
            Retour aux catégories
          </Link>
        </div>
      </div>
    </div>
  )
}
