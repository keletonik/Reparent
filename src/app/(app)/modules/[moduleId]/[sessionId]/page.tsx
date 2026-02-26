'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/lib/store'
import { getSessionById, getModuleById, getNextSession } from '@/lib/modules-data'
import type { Badge, Segment } from '@/lib/types'
import { ArrowLeftIcon, ChevronRightIcon, ChevronLeftIcon, CheckIcon } from '@/components/ui/Icons'
import { SafetyCheckSegment } from '@/components/learning/SafetyCheckSegment'
import { PsychoeducationSegment } from '@/components/learning/PsychoeducationSegment'
import { JournalSegment } from '@/components/learning/JournalSegment'
import { QuizSegment } from '@/components/learning/QuizSegment'
import { BreathingSegment } from '@/components/learning/BreathingSegment'
import { ActionPlanSegment } from '@/components/learning/ActionPlanSegment'
import { InteractiveSegment } from '@/components/learning/InteractiveSegment'
import { ReflectionSegment } from '@/components/learning/ReflectionSegment'

function SegmentRenderer({ segment, onComplete }: { segment: Segment; onComplete: () => void }) {
  switch (segment.type) {
    case 'safety-check':
      return <SafetyCheckSegment segment={segment} onComplete={onComplete} />
    case 'psychoeducation':
      return <PsychoeducationSegment segment={segment} onComplete={onComplete} />
    case 'journal':
      return <JournalSegment segment={segment} onComplete={onComplete} />
    case 'quiz':
      return <QuizSegment segment={segment} onComplete={onComplete} />
    case 'breathing':
      return <BreathingSegment segment={segment} onComplete={onComplete} />
    case 'action-plan':
      return <ActionPlanSegment segment={segment} onComplete={onComplete} />
    case 'interactive':
      return <InteractiveSegment segment={segment} onComplete={onComplete} />
    case 'reflection':
      return <ReflectionSegment segment={segment} onComplete={onComplete} />
    default:
      return (
        <div className="text-center py-8">
          <p className="text-calm-600">This segment type is not yet available.</p>
          <button onClick={onComplete} className="btn-primary mt-4">Continue</button>
        </div>
      )
  }
}

export default function SessionPlayerPage({
  params,
}: {
  params: { moduleId: string; sessionId: string }
}) {
  const { moduleId, sessionId } = params
  const router = useRouter()
  const session = getSessionById(moduleId, sessionId)
  const mod = getModuleById(moduleId)
  const { completeSession, addBadge, updateStreak } = useAppStore()
  const completedSessions = useAppStore((s) => s.progress.completedSessions)

  const [currentSegment, setCurrentSegment] = useState(0)
  const [completedSegments, setCompletedSegments] = useState<Set<number>>(new Set())
  const [sessionComplete, setSessionComplete] = useState(false)

  if (!session || !mod) {
    return (
      <div className="page-width py-12 text-center">
        <h1 className="text-2xl font-serif font-bold text-calm-900">Session Not Found</h1>
        <Link href="/modules" className="btn-primary mt-4">Back to Modules</Link>
      </div>
    )
  }

  const totalSegments = session.segments.length
  const safeIndex = Math.min(currentSegment, totalSegments - 1)
  const segment = session.segments[safeIndex]
  const progressPct = Math.round(((completedSegments.size) / totalSegments) * 100)
  const isAlreadyComplete = completedSessions.includes(sessionId)

  const handleSegmentComplete = () => {
    const newCompleted = new Set(completedSegments)
    newCompleted.add(currentSegment)
    setCompletedSegments(newCompleted)

    if (currentSegment < totalSegments - 1) {
      setCurrentSegment(currentSegment + 1)
    } else {
      // Session complete
      setSessionComplete(true)
      if (!isAlreadyComplete) {
        completeSession(sessionId)
        updateStreak()

        // Check for special badges
        const badgeMap: Record<string, { title: string; description: string; category: Badge['category'] }> = {
          'stop-skill': { title: 'Paused the Spiral', description: 'Completed the STOP skill session', category: 'skill' },
          'naming-emotions': { title: 'Emotion Detective', description: 'Learned to name and understand emotions', category: 'skill' },
          'thought-records': { title: 'Thought Challenger', description: 'Completed your first thought record', category: 'skill' },
          'bond-vs-love': { title: 'Eyes Wide Open', description: 'Learned to distinguish bonds from love', category: 'courage' },
          'codependency-understanding': { title: 'Breaking Free', description: 'Began understanding your codependent patterns', category: 'courage' },
          'reclaiming-self': { title: 'Reclaimed', description: 'Started rebuilding your sense of self', category: 'courage' },
          'inner-critic': { title: 'Self-Compassion Pioneer', description: 'Began meeting your inner critic with kindness', category: 'courage' },
          'boundary-basics': { title: 'Boundary Builder', description: 'Learned to set and hold healthy boundaries', category: 'skill' },
          'repair-skills': { title: 'Repair Apprentice', description: 'Learned the art of relationship repair', category: 'skill' },
          'maintenance-plan': { title: 'Journey Architect', description: 'Built your maintenance and relapse prevention plan', category: 'milestone' },
        }

        const badgeInfo = badgeMap[sessionId]
        if (badgeInfo) {
          addBadge({
            id: `session-${sessionId}`,
            title: badgeInfo.title,
            description: badgeInfo.description,
            icon: 'sparkles',
            earnedDate: new Date().toISOString(),
            category: badgeInfo.category,
          })
        }

        // Check if module is complete
        const allSessionsComplete = mod.sessions.every(
          (s) => s.id === sessionId || completedSessions.includes(s.id)
        )
        if (allSessionsComplete) {
          useAppStore.getState().completeModule(moduleId)
        }
      }
    }
  }

  const goToPrevSegment = () => {
    if (currentSegment > 0) {
      setCurrentSegment(currentSegment - 1)
    }
  }

  if (sessionComplete) {
    const next = getNextSession(moduleId, sessionId)

    return (
      <div className="content-width py-8 sm:py-12 animate-fade-in">
        <div className="card-elevated p-8 text-center">
          <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto">
            <CheckIcon size={32} className="text-brand-600" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-calm-900 mt-4">Session Complete</h1>
          <p className="mt-2 text-calm-600">{session.title}</p>
          <p className="mt-4 text-sm text-calm-500">
            Well done. Every session you complete builds your skills and strengthens your foundation.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            {next && (
              <Link href={`/modules/${next.moduleId}/${next.session.id}`} className="btn-primary gap-2">
                Next: {next.session.title}
                <ChevronRightIcon size={16} />
              </Link>
            )}
            <Link href={`/modules/${moduleId}`} className="btn-secondary">
              Back to Module
            </Link>
            <Link href="/dashboard" className="btn-ghost">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="content-width py-6 sm:py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button onClick={() => router.push(`/modules/${moduleId}`)} className="btn-ghost gap-1 -ml-2 text-sm">
          <ArrowLeftIcon size={16} />
          Exit Session
        </button>
        <div className="flex items-center gap-3">
          <span className="text-xs text-calm-400">
            {currentSegment + 1} / {totalSegments}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex gap-1">
          {session.segments.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                completedSegments.has(i) ? 'bg-brand-500' : i === currentSegment ? 'bg-brand-300' : 'bg-calm-200'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-serif font-bold text-calm-900">{session.title}</h1>
          <span className="text-xs text-calm-400">{session.estimatedMinutes} min total</span>
        </div>
      </div>

      {/* Contraindication warning */}
      {session.contraindications.length > 0 && currentSegment === 0 && (
        <div className="bg-warmth-50 border border-warmth-200 rounded-xl p-4">
          <p className="text-sm text-warmth-700">
            <strong>Note:</strong> {session.contraindications[0]}
          </p>
        </div>
      )}

      {/* Segment content */}
      <div className="animate-fade-in" key={currentSegment}>
        <SegmentRenderer segment={segment} onComplete={handleSegmentComplete} />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-calm-100">
        <button
          onClick={goToPrevSegment}
          disabled={currentSegment === 0}
          className="btn-ghost gap-1 disabled:opacity-30"
        >
          <ChevronLeftIcon size={16} />
          Previous
        </button>
        <div className="text-xs text-calm-400">{segment.title}</div>
      </div>
    </div>
  )
}
