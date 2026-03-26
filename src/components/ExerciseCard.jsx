import './ExerciseCard.css'

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

function getOptionClass(index, answered, selectedIndex, correctIndex) {
  if (!answered) return ''
  if (index === correctIndex) return 'exercise-card-option--correct'
  if (index === selectedIndex) return 'exercise-card-option--wrong'
  return 'exercise-card-option--dimmed'
}

function getOptionIcon(index, answered, selectedIndex, correctIndex) {
  if (!answered) return null
  if (index === correctIndex) return <CheckIcon />
  if (index === selectedIndex) return <XIcon />
  return null
}

const optionLabels = ['A', 'B', 'C', 'D']

export default function ExerciseCard({ question, options, onAnswer, answered, selectedIndex, correctIndex }) {
  return (
    <div className="exercise-card">
      <h2 className="exercise-card-question">{question}</h2>

      <div className="exercise-card-options">
        {options.map((option, index) => {
          const stateClass = getOptionClass(index, answered, selectedIndex, correctIndex)
          const icon = getOptionIcon(index, answered, selectedIndex, correctIndex)

          return (
            <button
              key={index}
              className={`exercise-card-option ${stateClass}`}
              onClick={() => onAnswer(index)}
              disabled={answered}
            >
              <span className="exercise-card-option-number">
                {optionLabels[index]}
              </span>
              <span className="exercise-card-option-text">{option}</span>
              {icon && (
                <span className="exercise-card-option-icon">{icon}</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
