'use client'

import { useAppStore } from '@/lib/store'
import { modules } from '@/lib/modules-data'
import { FlameIcon, TrophyIcon, BarChartIcon, ModuleIcon, CheckIcon } from '@/components/ui/Icons'
import { cn, getProgressPercentage, pluralise, formatDate } from '@/lib/utils'

function OverallProgress() {
  const { completedSessions, completedModules } = useAppStore((s) => s.progress)
  const totalSessions = modules.reduce((sum, m) => sum + m.sessions.length, 0)
  const pct = getProgressPercentage(completedSessions.length, totalSessions)

  const radius = 52
  const circumference = 2 * Math.PI * radius

  return (
    <div className="card-elevated p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-brand-50 to-transparent rounded-bl-full" />
      <div className="relative">
        <h2 className="text-xl font-serif font-bold text-calm-900 mb-6">Overall Progress</h2>
        <div className="flex items-center gap-8">
          <div className="relative w-28 h-28">
            <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="8" />
              <circle
                cx="60" cy="60" r={radius} fill="none"
                stroke="url(#progressGradient2)" strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - pct / 100)}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="progressGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3a8968" />
                  <stop offset="100%" stopColor="#d88133" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold gradient-text">{pct}%</span>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-3xl font-bold text-calm-900">{completedSessions.length}</p>
              <p className="text-sm text-calm-500">{pluralise(completedSessions.length, 'session')} completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-calm-900">{completedModules.length}</p>
              <p className="text-sm text-calm-500">{pluralise(completedModules.length, 'module')} completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StreakCard() {
  const { currentStreak, longestStreak, lastActivityDate } = useAppStore((s) => s.progress)

  return (
    <div className="card p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className={cn(
          'w-10 h-10 rounded-xl flex items-center justify-center',
          currentStreak > 0 ? 'bg-gradient-to-br from-warmth-100 to-warmth-50' : 'bg-calm-100'
        )}>
          <FlameIcon size={22} className={currentStreak > 0 ? 'text-warmth-500' : 'text-calm-400'} />
        </div>
        <h2 className="text-xl font-serif font-bold text-calm-900">Learning Streak</h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-4xl font-bold text-calm-900">{currentStreak}</p>
          <p className="text-sm text-calm-500 mt-1">Current streak</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-calm-900">{longestStreak}</p>
          <p className="text-sm text-calm-500 mt-1">Best streak</p>
        </div>
      </div>
      {lastActivityDate && (
        <p className="text-xs text-calm-400 mt-4">
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

  const categoryGradients: Record<string, string> = {
    skill: 'from-brand-500 to-brand-600',
    milestone: 'from-warmth-500 to-warmth-600',
    streak: 'from-safety-500 to-safety-600',
    courage: 'from-calm-500 to-calm-600',
  }

  return (
    <div className="card p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center">
          <TrophyIcon size={22} className="text-brand-600" />
        </div>
        <h2 className="text-xl font-serif font-bold text-calm-900">Badges Earned</h2>
      </div>
      {badges.length === 0 ? (
        <div className="text-center py-6">
          <p className="text-sm text-calm-500">Complete sessions to earn badges recognising your growth and courage.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {badges.map((badge) => (
            <div key={badge.id} className="bg-calm-50/50 rounded-xl p-4 border border-calm-100/50">
              <div className="flex items-center gap-2 mb-2">
                <div className={cn(
                  'w-6 h-6 rounded-full bg-gradient-to-br flex items-center justify-center',
                  categoryGradients[badge.category] || 'from-calm-400 to-calm-500'
                )}>
                  <TrophyIcon size={12} className="text-white" />
                </div>
                <span className="text-xs font-medium text-calm-500">
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
    <div className="card p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-calm-100 to-calm-50 flex items-center justify-center">
          <BarChartIcon size={22} className="text-calm-600" />
        </div>
        <h2 className="text-xl font-serif font-bold text-calm-900">Module Progress</h2>
      </div>
      <div className="space-y-4">
        {modules.map((mod) => {
          const completed = mod.sessions.filter((s) => completedSessions.includes(s.id)).length
          const total = mod.sessions.length
          const pct = getProgressPercentage(completed, total)

          return (
            <div key={mod.id} className="flex items-center gap-3">
              <div className={cn(
                'w-8 h-8 rounded-lg flex items-center justify-center shrink-0',
                completed === total ? 'bg-gradient-to-br from-brand-500 to-brand-600' : 'bg-calm-50'
              )}>
                {completed === total ? (
                  <CheckIcon size={14} className="text-white" />
                ) : (
                  <ModuleIcon icon={mod.icon} size={16} className="text-calm-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-xs font-medium text-calm-700 truncate">{mod.title}</p>
                  <span className="text-xs text-calm-400 shrink-0 ml-2">{completed}/{total}</span>
                </div>
                <div className="h-2 bg-calm-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${pct}%`,
                      background: completed === total
                        ? 'linear-gradient(90deg, #3a8968, #56a480)'
                        : 'linear-gradient(90deg, #85c2a5, #b5dbc7)'
                    }}
                  />
                </div>
              </div>
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
    <div className="card p-8">
      <h2 className="text-xl font-serif font-bold text-calm-900 mb-4">Active Commitments</h2>
      <div className="space-y-3">
        {activePlans.map((plan) => (
          <div key={plan.id} className="flex items-center gap-3 p-4 bg-brand-50/50 rounded-xl border border-brand-100/50">
            <button
              onClick={() => completeActionPlan(plan.id)}
              className="w-7 h-7 rounded-full border-2 border-brand-400 flex items-center justify-center shrink-0 hover:bg-brand-100 transition-colors"
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
    <div className="page-width py-6 sm:py-8 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-calm-900">Your Progress</h1>
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
