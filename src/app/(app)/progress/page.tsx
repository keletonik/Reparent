'use client'

import { useAppStore } from '@/lib/store'
import { modules } from '@/lib/modules-data'
import { FlameIcon, TrophyIcon, BarChartIcon, ModuleIcon, CheckIcon } from '@/components/ui/Icons'
import { cn, getProgressPercentage, pluralise, formatDate } from '@/lib/utils'

function OverallProgress() {
  const { completedSessions, completedModules } = useAppStore((s) => s.progress)
  const totalSessions = modules.reduce((sum, m) => sum + m.sessions.length, 0)
  const pct = getProgressPercentage(completedSessions.length, totalSessions)

  return (
    <div className="card-elevated p-6">
      <h2 className="text-lg font-semibold text-calm-900 mb-4">Overall Progress</h2>
      <div className="flex items-center gap-6">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="8" />
            <circle
              cx="50" cy="50" r="40" fill="none" stroke="#3a8968" strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - pct / 100)}`}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-calm-900">{pct}%</span>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-2xl font-bold text-calm-900">{completedSessions.length}</p>
            <p className="text-sm text-calm-500">{pluralise(completedSessions.length, 'session')} completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-calm-900">{completedModules.length}</p>
            <p className="text-sm text-calm-500">{pluralise(completedModules.length, 'module')} completed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function StreakCard() {
  const { currentStreak, longestStreak, lastActivityDate } = useAppStore((s) => s.progress)

  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-4">
        <FlameIcon size={24} className={currentStreak > 0 ? 'text-warmth-500' : 'text-calm-400'} />
        <h2 className="text-lg font-semibold text-calm-900">Learning Streak</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-3xl font-bold text-calm-900">{currentStreak}</p>
          <p className="text-sm text-calm-500">Current streak</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-calm-900">{longestStreak}</p>
          <p className="text-sm text-calm-500">Best streak</p>
        </div>
      </div>
      {lastActivityDate && (
        <p className="text-xs text-calm-400 mt-3">
          Last activity: {formatDate(lastActivityDate)}
        </p>
      )}
      <p className="text-xs text-calm-400 mt-1">
        Streak forgiveness: you can miss a day and keep your streak
      </p>
    </div>
  )
}

function BadgesGrid() {
  const badges = useAppStore((s) => s.progress.badges)

  const categoryLabels: Record<string, string> = {
    skill: 'Skill',
    milestone: 'Milestone',
    streak: 'Streak',
    courage: 'Courage',
  }

  const categoryColors: Record<string, string> = {
    skill: 'bg-brand-100 text-brand-700',
    milestone: 'bg-warmth-100 text-warmth-700',
    streak: 'bg-safety-100 text-safety-700',
    courage: 'bg-calm-100 text-calm-700',
  }

  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-4">
        <TrophyIcon size={24} className="text-brand-600" />
        <h2 className="text-lg font-semibold text-calm-900">Badges Earned</h2>
      </div>
      {badges.length === 0 ? (
        <p className="text-sm text-calm-500">Complete sessions to earn badges recognising your growth and courage.</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {badges.map((badge) => (
            <div key={badge.id} className="bg-calm-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className={cn('badge text-xs', categoryColors[badge.category] || 'bg-calm-100 text-calm-600')}>
                  {categoryLabels[badge.category] || badge.category}
                </span>
              </div>
              <p className="font-medium text-calm-900 text-sm">{badge.title}</p>
              <p className="text-xs text-calm-500 mt-0.5">{badge.description}</p>
              <p className="text-xs text-calm-400 mt-1">{formatDate(badge.earnedDate)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function ModuleProgress() {
  const { completedSessions } = useAppStore((s) => s.progress)

  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-4">
        <BarChartIcon size={24} className="text-calm-600" />
        <h2 className="text-lg font-semibold text-calm-900">Module Progress</h2>
      </div>
      <div className="space-y-3">
        {modules.map((mod) => {
          const completed = mod.sessions.filter((s) => completedSessions.includes(s.id)).length
          const total = mod.sessions.length
          const pct = getProgressPercentage(completed, total)

          return (
            <div key={mod.id} className="flex items-center gap-3">
              <ModuleIcon icon={mod.icon} size={18} className={completed === total ? 'text-brand-600' : 'text-calm-400'} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-medium text-calm-700 truncate">{mod.title}</p>
                  <span className="text-xs text-calm-400 shrink-0 ml-2">{completed}/{total}</span>
                </div>
                <div className="h-1.5 bg-calm-100 rounded-full overflow-hidden">
                  <div
                    className={cn('h-full rounded-full transition-all', completed === total ? 'bg-brand-500' : 'bg-brand-300')}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
              {completed === total && <CheckIcon size={14} className="text-brand-500 shrink-0" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ActionPlansWidget() {
  const { actionPlans } = useAppStore((s) => s.progress)
  const { completeActionPlan } = useAppStore()
  const activePlans = actionPlans.filter((p) => !p.completed)

  if (activePlans.length === 0) return null

  return (
    <div className="card p-6">
      <h2 className="text-lg font-semibold text-calm-900 mb-4">Active Commitments</h2>
      <div className="space-y-3">
        {activePlans.map((plan) => (
          <div key={plan.id} className="flex items-center gap-3 p-3 bg-brand-50 rounded-xl">
            <button
              onClick={() => completeActionPlan(plan.id)}
              className="w-6 h-6 rounded-full border-2 border-brand-400 flex items-center justify-center shrink-0 hover:bg-brand-100"
              aria-label="Mark commitment complete"
            >
              <CheckIcon size={12} className="text-brand-500 opacity-0 hover:opacity-100" />
            </button>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-brand-800 font-medium">{plan.selectedAction}</p>
              <p className="text-xs text-brand-600">Committed {formatDate(plan.commitDate)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProgressPage() {
  return (
    <div className="page-width py-6 sm:py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold text-calm-900">Your Progress</h1>
        <p className="mt-2 text-calm-600">
          Track your learning journey, celebrate your growth, and stay committed to your goals.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <OverallProgress />
        <StreakCard />
      </div>

      <ActionPlansWidget />
      <BadgesGrid />
      <ModuleProgress />
    </div>
  )
}
