'use client'

import Link from 'next/link'
import { useAppStore } from '@/lib/store'
import { modules } from '@/lib/modules-data'
import { ModuleIcon, FlameIcon, TrophyIcon, ChevronRightIcon } from '@/components/ui/Icons'
import { cn, getProgressPercentage, pluralise } from '@/lib/utils'

function StreakWidget() {
  const { currentStreak, longestStreak } = useAppStore((s) => s.progress)
  return (
    <div className="card p-5">
      <div className="flex items-center gap-3">
        <div className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center',
          currentStreak > 0 ? 'bg-warmth-100' : 'bg-calm-100'
        )}>
          <FlameIcon size={24} className={currentStreak > 0 ? 'text-warmth-500' : 'text-calm-400'} />
        </div>
        <div>
          <p className="text-2xl font-bold text-calm-900">{currentStreak}</p>
          <p className="text-sm text-calm-500">{pluralise(currentStreak, 'day')} streak</p>
        </div>
      </div>
      {longestStreak > 0 && (
        <p className="mt-2 text-xs text-calm-400">Best: {pluralise(longestStreak, 'day')}</p>
      )}
    </div>
  )
}

function BadgesWidget() {
  const badges = useAppStore((s) => s.progress.badges)
  return (
    <div className="card p-5">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
          <TrophyIcon size={24} className="text-brand-600" />
        </div>
        <div>
          <p className="text-2xl font-bold text-calm-900">{badges.length}</p>
          <p className="text-sm text-calm-500">{pluralise(badges.length, 'badge')} earned</p>
        </div>
      </div>
      {badges.length > 0 && (
        <div className="mt-3 flex gap-1 flex-wrap">
          {badges.slice(-3).map((b) => (
            <span key={b.id} className="badge bg-brand-50 text-brand-700 text-xs">
              {b.title}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function ProgressWidget() {
  const completedSessions = useAppStore((s) => s.progress.completedSessions)
  const totalSessions = modules.reduce((sum, m) => sum + m.sessions.length, 0)
  const pct = getProgressPercentage(completedSessions.length, totalSessions)

  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-calm-700">Overall Progress</p>
        <p className="text-sm font-bold text-brand-600">{pct}%</p>
      </div>
      <div className="w-full h-3 bg-calm-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-500 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <p className="mt-2 text-xs text-calm-400">
        {completedSessions.length} of {totalSessions} sessions completed
      </p>
    </div>
  )
}

function NextSessionCard() {
  const completedSessions = useAppStore((s) => s.progress.completedSessions)

  // Find the next uncompleted session
  for (const mod of modules) {
    for (const session of mod.sessions) {
      if (!completedSessions.includes(session.id)) {
        return (
          <div className="card-elevated p-6 border-l-4 border-l-brand-500">
            <p className="text-xs font-medium text-brand-600 uppercase tracking-wide">Continue Learning</p>
            <h3 className="mt-2 text-lg font-semibold text-calm-900">{session.title}</h3>
            <p className="mt-1 text-sm text-calm-600">{session.description}</p>
            <div className="mt-3 flex items-center gap-4">
              <span className="text-xs text-calm-400">{session.estimatedMinutes} min</span>
              <span className="text-xs text-calm-400">{mod.title}</span>
            </div>
            <Link
              href={`/modules/${mod.id}/${session.id}`}
              className="btn-primary mt-4 gap-2"
            >
              Start Session
              <ChevronRightIcon size={16} />
            </Link>
          </div>
        )
      }
    }
  }

  return (
    <div className="card-elevated p-6 text-center">
      <TrophyIcon size={48} className="text-brand-500 mx-auto" />
      <h3 className="mt-3 text-lg font-semibold text-calm-900">All Sessions Complete!</h3>
      <p className="mt-1 text-sm text-calm-600">You have completed all available sessions. Incredible work.</p>
    </div>
  )
}

function ModuleList() {
  const { completedSessions, completedModules } = useAppStore((s) => s.progress)

  return (
    <div className="space-y-3">
      <h2 className="section-heading">Your Learning Path</h2>
      <div className="grid gap-3">
        {modules.map((mod) => {
          const sessionsCompleted = mod.sessions.filter((s) => completedSessions.includes(s.id)).length
          const totalSessions = mod.sessions.length
          const isComplete = completedModules.includes(mod.id)
          const pct = getProgressPercentage(sessionsCompleted, totalSessions)

          return (
            <Link
              key={mod.id}
              href={`/modules/${mod.id}`}
              className="card p-4 flex items-center gap-4 hover:shadow-md transition-shadow group"
            >
              <div className={cn(
                'w-12 h-12 rounded-xl flex items-center justify-center shrink-0',
                isComplete ? 'bg-brand-100' : 'bg-calm-50'
              )}>
                <ModuleIcon icon={mod.icon} size={22} className={isComplete ? 'text-brand-600' : 'text-calm-400'} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-calm-900 text-sm group-hover:text-brand-700 transition-colors truncate">
                  {mod.title}
                </p>
                <div className="mt-1.5 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-calm-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-400 rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-calm-400 shrink-0">{sessionsCompleted}/{totalSessions}</span>
                </div>
              </div>
              <ChevronRightIcon size={18} className="text-calm-300 shrink-0" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good Morning'
  if (hour < 17) return 'Good Afternoon'
  return 'Good Evening'
}

export default function DashboardPage() {
  const goals = useAppStore((s) => s.progress.goals)
  const { currentStreak } = useAppStore((s) => s.progress)

  return (
    <div className="page-width py-6 sm:py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-calm-900">{getGreeting()}</h1>
        {currentStreak > 0 && (
          <p className="mt-1 text-brand-600 text-sm font-medium">
            {currentStreak} day streak &mdash; keep going!
          </p>
        )}
        {goals.length > 0 && (
          <p className="mt-1 text-calm-600">
            Working on: {goals.slice(0, 2).join(', ')}{goals.length > 2 ? ` +${goals.length - 2} more` : ''}
          </p>
        )}
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <StreakWidget />
        <BadgesWidget />
        <ProgressWidget />
      </div>

      {/* Next Session */}
      <NextSessionCard />

      {/* Module List */}
      <ModuleList />
    </div>
  )
}
