'use client'

import Link from 'next/link'
import { useAppStore } from '@/lib/store'
import { modules } from '@/lib/modules-data'
import { isModuleUnlocked } from '@/lib/modules-data'
import { ModuleIcon, LockIcon, CheckIcon, ChevronRightIcon, CompassIcon } from '@/components/ui/Icons'
import { cn, getProgressPercentage } from '@/lib/utils'

const relationshipModules = modules.filter((m) => m.category === 'relationships')

export default function ThreePercentManPage() {
  const { completedSessions, completedModules } = useAppStore((s) => s.progress)

  const totalSessions = relationshipModules.reduce((acc, mod) => acc + mod.sessions.length, 0)
  const completedCount = relationshipModules.reduce(
    (acc, mod) => acc + mod.sessions.filter((s) => completedSessions.includes(s.id)).length,
    0
  )
  const overallPct = getProgressPercentage(completedCount, totalSessions)

  return (
    <div className="page-width py-6 sm:py-8 space-y-8">
      {/* Hero Section */}
      <div className="card p-8 bg-gradient-to-br from-warmth-50 to-calm-50">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-warmth-100 flex items-center justify-center shrink-0">
            <CompassIcon size={32} className="text-warmth-600" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-serif font-bold text-calm-900">The 3% Man</h1>
            <p className="text-sm text-calm-500 mt-1">Based on &ldquo;How to Be a 3% Man&rdquo; by Corey Wayne</p>
            <p className="mt-3 text-calm-700 leading-relaxed">
              Master the principles of attraction, confidence, purpose, and healthy relationships.
              This section covers the core teachings and includes a comprehensive study guide
              for deep practice and real-world application.
            </p>

            {/* Overall Progress */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 h-2.5 bg-calm-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-warmth-500 rounded-full transition-all"
                  style={{ width: `${overallPct}%` }}
                />
              </div>
              <span className="text-sm text-calm-500 font-medium shrink-0">
                {completedCount}/{totalSessions} sessions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Topics */}
      <div>
        <h2 className="text-lg font-semibold text-calm-800 mb-3">What You Will Learn</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: 'Self-Worth & Confidence', icon: '💪' },
            { label: 'Understanding Attraction', icon: '🧲' },
            { label: 'Purpose & Mission', icon: '🎯' },
            { label: 'Dating Fundamentals', icon: '📅' },
            { label: 'Handling Rejection', icon: '🛡️' },
            { label: 'Long-Term Relationships', icon: '❤️' },
            { label: 'Communication & Frame', icon: '🗣️' },
            { label: 'Red Flags & Standards', icon: '🚩' },
            { label: 'Real-World Practice', icon: '🌍' },
          ].map((topic) => (
            <div key={topic.label} className="card p-3 text-center">
              <span className="text-2xl">{topic.icon}</span>
              <p className="text-xs text-calm-600 mt-1 font-medium">{topic.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Module Cards */}
      <div>
        <h2 className="text-lg font-semibold text-calm-800 mb-4">Modules</h2>
        <div className="grid gap-4">
          {relationshipModules.map((mod) => {
            const unlocked = isModuleUnlocked(mod.id, completedModules)
            const isComplete = completedModules.includes(mod.id)
            const sessionsCompleted = mod.sessions.filter((s) => completedSessions.includes(s.id)).length
            const total = mod.sessions.length
            const pct = getProgressPercentage(sessionsCompleted, total)

            return (
              <Link
                key={mod.id}
                href={unlocked ? `/modules/${mod.id}` : '#'}
                className={cn(
                  'card p-6 transition-all',
                  unlocked ? 'hover:shadow-md cursor-pointer' : 'opacity-60 cursor-not-allowed'
                )}
                aria-disabled={!unlocked}
                tabIndex={unlocked ? 0 : -1}
                onClick={(e) => { if (!unlocked) e.preventDefault() }}
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    'w-14 h-14 rounded-2xl flex items-center justify-center shrink-0',
                    isComplete ? 'bg-warmth-100' : unlocked ? 'bg-calm-50' : 'bg-calm-100'
                  )}>
                    {!unlocked ? (
                      <LockIcon size={24} className="text-calm-300" />
                    ) : isComplete ? (
                      <CheckIcon size={24} className="text-warmth-600" />
                    ) : (
                      <ModuleIcon icon={mod.icon} size={24} className="text-calm-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {isComplete && (
                        <span className="badge bg-warmth-50 text-warmth-600 text-xs">Complete</span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-calm-900 mt-1">{mod.title}</h3>
                    <p className="text-sm text-calm-600 mt-1 line-clamp-2">{mod.description}</p>

                    {unlocked && (
                      <div className="mt-3 flex items-center gap-3">
                        <div className="flex-1 h-2 bg-calm-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-warmth-400 rounded-full transition-all"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-xs text-calm-400 shrink-0 font-medium">
                          {sessionsCompleted}/{total} sessions
                        </span>
                        <ChevronRightIcon size={16} className="text-calm-300 shrink-0" />
                      </div>
                    )}

                    {!unlocked && (
                      <p className="text-xs text-calm-400 mt-2">
                        Complete the Core Principles module to unlock
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Reading Reminder */}
      <div className="card p-6 bg-calm-50 border-calm-200">
        <h3 className="text-md font-semibold text-calm-800">Corey Wayne&apos;s Reading Recommendation</h3>
        <p className="text-sm text-calm-600 mt-2 leading-relaxed">
          Corey Wayne recommends reading &ldquo;How to Be a 3% Man&rdquo; 10-15 times.
          Each re-read reveals new insights as your real-world experience grows.
          These modules distil the key principles, but returning to the source
          material regularly will deepen your understanding and accelerate your growth.
        </p>
      </div>
    </div>
  )
}
