import './ResultFeedback.css'

export default function ResultFeedback({ isCorrect, explanation, onNext }) {
  const visible = explanation !== undefined
  const variant = isCorrect ? 'correct' : 'wrong'

  return (
    <div className={`result-feedback-overlay ${visible ? 'result-feedback-overlay--visible' : ''}`}>
      <div
        className={`result-feedback result-feedback--${variant} ${
          visible ? 'result-feedback--visible' : ''
        }`}
      >
        <div className="result-feedback-title">
          <span className="result-feedback-title-icon">
            {isCorrect ? '\u2705' : '\u274C'}
          </span>
          {isCorrect ? 'Bonne r\u00e9ponse !' : 'Pas tout \u00e0 fait...'}
        </div>

        {explanation && (
          <p className="result-feedback-explanation">{explanation}</p>
        )}

        <button className="result-feedback-btn" onClick={onNext}>
          Continuer
        </button>
      </div>
    </div>
  )
}
