'use client'

import { useState } from 'react'
import { useAppStore } from '@/lib/store'
import type { Segment, QuizContent } from '@/lib/types'
import { CheckIcon, XIcon } from '@/components/ui/Icons'
import { cn } from '@/lib/utils'

export function QuizSegment({
  segment,
  onComplete,
}: {
  segment: Segment
  onComplete: () => void
}) {
  const content = segment.content as QuizContent
  const { saveQuizScore } = useAppStore()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const question = content.items[currentQuestion]

  const handleSelect = (index: number) => {
    if (showExplanation) return
    setSelectedAnswer(index)
    setShowExplanation(true)
    if (index === question.correctIndex) {
      setCorrectCount((c) => c + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < content.items.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      const finalScore = Math.round((correctCount / content.items.length) * 100)
      saveQuizScore(segment.id, finalScore)
      setQuizComplete(true)
    }
  }

  if (quizComplete) {
    const score = Math.round((correctCount / content.items.length) * 100)

    return (
      <div className="card p-6 sm:p-8 text-center">
        <div className={cn(
          'w-16 h-16 rounded-2xl flex items-center justify-center mx-auto',
          score >= 70 ? 'bg-brand-100' : 'bg-warmth-100'
        )}>
          {score >= 70 ? (
            <CheckIcon size={32} className="text-brand-600" />
          ) : (
            <span className="text-2xl font-bold text-warmth-600">{score}%</span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-calm-900 mt-4">
          {score >= 70 ? 'Great Understanding!' : 'Keep Learning'}
        </h3>
        <p className="text-sm text-calm-600 mt-2">
          You got {correctCount} out of {content.items.length} correct.
          {score < 70 && ' Consider revisiting the material above.'}
        </p>
        <button onClick={onComplete} className="btn-primary mt-6">
          Continue
        </button>
      </div>
    )
  }

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-calm-900">{segment.title}</h2>
        <span className="text-xs text-calm-400">
          {currentQuestion + 1} of {content.items.length}
        </span>
      </div>

      <p className="text-calm-800 font-medium mb-4">{question.question}</p>

      <div className="space-y-3">
        {question.options.map((option, i) => {
          const isSelected = selectedAnswer === i
          const isCorrect = i === question.correctIndex
          const showResult = showExplanation

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showExplanation}
              className={cn(
                'w-full text-left p-4 rounded-xl border-2 transition-all',
                showResult && isCorrect
                  ? 'border-brand-400 bg-brand-50'
                  : showResult && isSelected && !isCorrect
                  ? 'border-safety-300 bg-safety-50'
                  : isSelected
                  ? 'border-brand-400 bg-brand-50'
                  : 'border-calm-200 bg-white hover:border-calm-300',
                showExplanation && 'cursor-default'
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0',
                  showResult && isCorrect
                    ? 'bg-brand-500 text-white'
                    : showResult && isSelected && !isCorrect
                    ? 'bg-safety-400 text-white'
                    : isSelected
                    ? 'bg-brand-500 text-white'
                    : 'bg-calm-100 text-calm-600'
                )}>
                  {showResult && isCorrect ? (
                    <CheckIcon size={14} />
                  ) : showResult && isSelected && !isCorrect ? (
                    <XIcon size={14} />
                  ) : (
                    String.fromCharCode(65 + i)
                  )}
                </div>
                <span className="text-sm text-calm-800">{option}</span>
              </div>
            </button>
          )
        })}
      </div>

      {showExplanation && (
        <div className={cn(
          'mt-4 rounded-xl p-4',
          selectedAnswer === question.correctIndex
            ? 'bg-brand-50 border border-brand-200'
            : 'bg-warmth-50 border border-warmth-200'
        )}>
          <p className={cn(
            'text-sm font-medium',
            selectedAnswer === question.correctIndex ? 'text-brand-800' : 'text-warmth-800'
          )}>
            {selectedAnswer === question.correctIndex ? 'Correct!' : 'Not quite.'}
          </p>
          <p className={cn(
            'text-sm mt-1',
            selectedAnswer === question.correctIndex ? 'text-brand-700' : 'text-warmth-700'
          )}>
            {question.explanation}
          </p>
        </div>
      )}

      {showExplanation && (
        <button onClick={handleNext} className="btn-primary mt-4">
          {currentQuestion < content.items.length - 1 ? 'Next Question' : 'See Results'}
        </button>
      )}
    </div>
  )
}
