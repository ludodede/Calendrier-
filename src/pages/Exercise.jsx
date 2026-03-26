import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { exercises } from '../data/exercises'
import { createSession, getDailyChallenge } from '../utils/exerciseEngine'
import { calculateSessionPoints } from '../utils/scoring'
import ProgressBar from '../components/ProgressBar'
import ExerciseCard from '../components/ExerciseCard'
import FillExerciseCard from '../components/FillExerciseCard'
import ResultFeedback from '../components/ResultFeedback'
import './Exercise.css'

export default function Exercise({ stats, addSessionResult, completeDailyChallenge }) {
  const { categoryId } = useParams()
  const navigate = useNavigate()

  const [session, setSession] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const [error, setError] = useState(null)
  const [fillAnswer, setFillAnswer] = useState(null)
  const [fillCorrect, setFillCorrect] = useState(false)

  useEffect(() => {
    try {
      let sessionQuestions

      if (categoryId === 'daily') {
        // Build flat array of all questions for daily challenge
        const allQuestions = Object.values(exercises).flatMap(
          (cat) => cat.questions
        )
        sessionQuestions = getDailyChallenge(allQuestions)
      } else {
        const category = exercises[categoryId]
        if (!category) {
          setError('Cat\u00e9gorie "' + categoryId + '" introuvable.')
          return
        }
        sessionQuestions = createSession(category.questions, 10)
      }

      setSession(sessionQuestions)
      setCurrentIndex(0)
      setAnswers([])
      setSelectedIndex(null)
      setShowFeedback(false)
      setAnimKey(0)
      setFillAnswer(null)
      setFillCorrect(false)
    } catch (e) {
      setError('Erreur lors du chargement des exercices.')
    }
  }, [categoryId])

  const handleAnswer = (index) => {
    if (showFeedback || !session) return

    const currentQuestion = session[currentIndex]
    const correctIdx = currentQuestion.correct
    const isCorrect = index === correctIdx

    setSelectedIndex(index)
    setShowFeedback(true)
    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selected: index,
        correct: isCorrect,
        firstTry: true,
      },
    ])
  }

  const handleFillAnswer = (typedAnswer) => {
    if (showFeedback || !session) return

    const currentQuestion = session[currentIndex]
    const normalizedInput = typedAnswer.trim().toLowerCase()
    const isCorrect = currentQuestion.acceptedAnswers.some(
      (accepted) => accepted.trim().toLowerCase() === normalizedInput
    )

    setFillAnswer(typedAnswer)
    setFillCorrect(isCorrect)
    setShowFeedback(true)
    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selected: typedAnswer,
        correct: isCorrect,
        firstTry: true,
      },
    ])
  }

  const handleNext = () => {
    const nextIndex = currentIndex + 1

    if (nextIndex >= session.length) {
      // Session complete - calculate results and navigate
      const finalAnswers = [...answers]
      const score = finalAnswers.filter((a) => a.correct).length
      const total = finalAnswers.length
      const { totalPoints } = calculateSessionPoints(finalAnswers)

      // Update stats
      addSessionResult(categoryId, score, total, totalPoints)

      // Complete daily challenge if applicable
      if (categoryId === 'daily') {
        completeDailyChallenge()
      }

      // Navigate to results
      navigate('/results', {
        state: {
          score,
          total,
          points: totalPoints,
          categoryId,
          answers: finalAnswers,
        },
      })
      return
    }

    // Move to next question
    setCurrentIndex(nextIndex)
    setSelectedIndex(null)
    setShowFeedback(false)
    setFillAnswer(null)
    setFillCorrect(false)
    setAnimKey((prev) => prev + 1)
  }

  // Error state
  if (error) {
    return (
      <div className="exercise-page">
        <div className="exercise-page-inner">
          <div className="exercise-error">
            <div className="exercise-error-title">Oups !</div>
            <p className="exercise-error-text">{error}</p>
            <button
              className="exercise-error-btn"
              onClick={() => navigate('/categories')}
            >
              Retour aux cat\u00e9gories
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Loading state
  if (!session) {
    return (
      <div className="exercise-page">
        <div className="exercise-page-inner">
          <div className="exercise-loading">Chargement...</div>
        </div>
      </div>
    )
  }

  const currentQuestion = session[currentIndex]
  const isFill = currentQuestion.type === 'fill'
  const isCorrect = isFill
    ? fillCorrect
    : selectedIndex !== null && selectedIndex === currentQuestion.correct

  return (
    <div className="exercise-page">
      <div className="exercise-page-inner">
        <ProgressBar current={currentIndex + 1} total={session.length} />

        <div className="exercise-question-number">
          Question {currentIndex + 1}/{session.length}
        </div>

        <div className="exercise-card-wrapper exercise-card-wrapper--entering" key={animKey}>
          {isFill ? (
            <FillExerciseCard
              question={currentQuestion.question}
              hint={currentQuestion.hint}
              onAnswer={handleFillAnswer}
              answered={showFeedback}
              isCorrect={fillCorrect}
              userAnswer={fillAnswer}
              correctAnswer={currentQuestion.answer}
            />
          ) : (
            <ExerciseCard
              question={currentQuestion.question}
              options={currentQuestion.options}
              onAnswer={handleAnswer}
              answered={showFeedback}
              selectedIndex={selectedIndex}
              correctIndex={currentQuestion.correct}
            />
          )}
        </div>
      </div>

      <ResultFeedback
        isCorrect={isCorrect}
        explanation={showFeedback ? currentQuestion.explanation : undefined}
        onNext={handleNext}
      />
    </div>
  )
}
