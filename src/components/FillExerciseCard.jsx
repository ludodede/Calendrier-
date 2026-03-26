import { useState, useRef, useEffect } from 'react'
import './FillExerciseCard.css'

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function FillExerciseCard({ question, hint, onAnswer, answered, isCorrect, userAnswer, correctAnswer }) {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)

  // Focus input on mount and when question changes
  useEffect(() => {
    setInputValue('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [question])

  const handleSubmit = (e) => {
    if (e) e.preventDefault()
    if (answered || inputValue.trim() === '') return
    onAnswer(inputValue.trim())
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const inputClass = answered
    ? isCorrect
      ? 'fill-card-input fill-card-input--correct'
      : 'fill-card-input fill-card-input--wrong'
    : 'fill-card-input'

  return (
    <div className="fill-card">
      <h2 className="fill-card-question">{question}</h2>

      {hint && <p className="fill-card-hint">{hint}</p>}

      <div className="fill-card-form">
        <div className="fill-card-input-wrapper">
          <input
            ref={inputRef}
            type="text"
            className={inputClass}
            value={answered ? (userAnswer || inputValue) : inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Tapez votre réponse..."
            disabled={answered}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
          {answered && (
            <span className={`fill-card-input-icon ${isCorrect ? 'fill-card-input-icon--correct' : 'fill-card-input-icon--wrong'}`}>
              {isCorrect ? <CheckIcon /> : <XIcon />}
            </span>
          )}
        </div>

        {!answered && (
          <button
            type="button"
            className="fill-card-submit"
            onClick={handleSubmit}
            disabled={inputValue.trim() === ''}
          >
            Valider
          </button>
        )}

        {answered && !isCorrect && (
          <div className="fill-card-correct-answer">
            Bonne réponse : <span>{correctAnswer}</span>
          </div>
        )}
      </div>
    </div>
  )
}
