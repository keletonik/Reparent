'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import type { Segment, BreathingContent } from '@/lib/types'

type Phase = 'inhale' | 'hold' | 'exhale' | 'holdAfter' | 'idle'

export function BreathingSegment({
  segment,
  onComplete,
}: {
  segment: Segment
  onComplete: () => void
}) {
  const content = segment.content as BreathingContent
  const { pattern, durationSeconds } = content
  const [phase, setPhase] = useState<Phase>('idle')
  const [phaseTime, setPhaseTime] = useState(0)
  const [totalElapsed, setTotalElapsed] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const getPhaseLabel = (p: Phase) => {
    switch (p) {
      case 'inhale': return 'Breathe In'
      case 'hold': return 'Hold'
      case 'exhale': return 'Breathe Out'
      case 'holdAfter': return 'Hold'
      case 'idle': return 'Ready'
    }
  }

  const getPhaseDuration = useCallback((p: Phase) => {
    switch (p) {
      case 'inhale': return pattern.inhale
      case 'hold': return pattern.hold
      case 'exhale': return pattern.exhale
      case 'holdAfter': return pattern.holdAfter || 0
      default: return 0
    }
  }, [pattern])

  const getNextPhase = useCallback((p: Phase): Phase => {
    switch (p) {
      case 'inhale': return pattern.hold > 0 ? 'hold' : 'exhale'
      case 'hold': return 'exhale'
      case 'exhale': return (pattern.holdAfter && pattern.holdAfter > 0) ? 'holdAfter' : 'inhale'
      case 'holdAfter': return 'inhale'
      default: return 'inhale'
    }
  }, [pattern])

  const getCircleScale = () => {
    if (!isActive || phase === 'idle') return 1
    const dur = getPhaseDuration(phase)
    if (dur === 0) return 1
    const progress = phaseTime / dur

    switch (phase) {
      case 'inhale': return 1 + 0.3 * progress
      case 'hold': return 1.3
      case 'exhale': return 1.3 - 0.3 * progress
      case 'holdAfter': return 1
      default: return 1
    }
  }

  useEffect(() => {
    if (!isActive) return

    intervalRef.current = setInterval(() => {
      setPhaseTime((prev) => {
        const dur = getPhaseDuration(phase)
        if (prev >= dur && dur > 0) {
          const next = getNextPhase(phase)
          setPhase(next)
          return 0
        }
        return prev + 0.1
      })
      setTotalElapsed((prev) => {
        if (prev >= durationSeconds) {
          setIsActive(false)
          setIsComplete(true)
          return durationSeconds
        }
        return prev + 0.1
      })
    }, 100)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isActive, phase, getPhaseDuration, getNextPhase, durationSeconds])

  const handleStart = () => {
    setIsActive(true)
    setPhase('inhale')
    setPhaseTime(0)
    setTotalElapsed(0)
    setIsComplete(false)
  }

  const handleStop = () => {
    setIsActive(false)
    setPhase('idle')
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const progressPct = Math.min(100, (totalElapsed / durationSeconds) * 100)

  return (
    <div className="card p-6 sm:p-8 text-center">
      <h2 className="text-lg font-semibold text-calm-900 mb-2">{segment.title}</h2>
      <p className="text-sm text-calm-600 mb-8">{content.instruction}</p>

      {/* Breathing circle */}
      <div className="flex items-center justify-center my-8">
        <div className="relative">
          <div
            className="breathing-circle flex items-center justify-center transition-transform"
            style={{
              transform: `scale(${getCircleScale()})`,
              transitionDuration: isActive ? `${getPhaseDuration(phase)}s` : '0.3s',
              transitionTimingFunction: 'ease-in-out',
            }}
          >
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-brand-700">
                {getPhaseLabel(phase)}
              </p>
              {isActive && (
                <p className="text-sm text-brand-500 mt-1">
                  {Math.ceil(getPhaseDuration(phase) - phaseTime)}s
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Progress */}
      {isActive && (
        <div className="max-w-xs mx-auto mb-6">
          <div className="w-full h-2 bg-calm-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-400 rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="text-xs text-calm-400 mt-2">
            {Math.ceil(durationSeconds - totalElapsed)}s remaining
          </p>
        </div>
      )}

      {/* Controls */}
      <div className="flex gap-3 justify-center">
        {!isActive && !isComplete && (
          <button onClick={handleStart} className="btn-primary">
            Begin Breathing Exercise
          </button>
        )}
        {isActive && (
          <button onClick={handleStop} className="btn-secondary">
            Pause
          </button>
        )}
        {isComplete && (
          <button onClick={onComplete} className="btn-primary">
            Continue
          </button>
        )}
        {!isActive && !isComplete && (
          <button onClick={onComplete} className="btn-ghost text-sm">
            Skip
          </button>
        )}
      </div>
    </div>
  )
}
