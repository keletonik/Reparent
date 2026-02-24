'use client'

import Link from 'next/link'
import { useAppStore } from '@/lib/store'
import { modules } from '@/lib/modules-data'
import { ModuleIcon, FlameIcon, TrophyIcon, ChevronRightIcon, HeartIcon, SparklesIcon, BookOpenIcon } from '@/components/ui/Icons'
import { cn, getProgressPercentage, pluralise } from '@/lib/utils'

function WelcomeHero() {
  const goals = useAppStore((s) => s.progress.goals)
  const { currentStreak } = useAppStore((s) => s.progress)

  const greeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-calm-900 via-calm-800 to-brand-900 p-8 sm:p-10 text-white">
      <div className="absolute inset-0 bg-mesh-dark opacity-50" />
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-warmth-500/15 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <p className="text-brand-300 text-sm font-medium">{greeting()}</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold mt-1">Welcome Back</h1>
            {goals.length > 0 && (
              <p className="mt-2 text-calm-300 text-sm max-w-md">
                Working on: {goals.slice(0, 2).join(', ')}{goals.length > 2 ? ` +${goals.length - 2} more` : ''}
              </p>
            )}
          </div>
          {currentStreak > 0 && (
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10">
              <FlameIcon size={20} className="text-warmth-400" />
              <span className="font-bold text-lg">{currentStreak}</span>
              <span className="text-calm-300 text-sm">day streak</span>
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center gap-3 text-sm text-calm-300">
          <HeartIcon size={16} className="text-brand-300" />
          <span className="italic">&ldquo;Healing is not linear. Every step counts, even the small ones.&rdquo;</span>
        </div>
      </div>
    </div>
  )
}

function StreakWidget() {
  const { currentStreak, longestStreak } = useAppStore((s) => s.progress)
  return (
    <div className="card p-6 hover-lift">
      <div className="flex items-center gap-4">
        <div className={cn(
          'w-14 h-14 rounded-2xl flex items-center justify-center',
          currentStreak > 0 ? 'bg-gradient-to-br from-warmth-100 to-warmth-50' : 'bg-calm-100'
        )}>
          <FlameIcon size={26} className={currentStreak > 0 ? 'text-warmth-500' : 'text-calm-400'} />
        </div>
        <div>
          <p className="text-3xl font-bold text-calm-900">{currentStreak}</p>
          <p className="text-sm text-calm-500">{pluralise(currentStreak, 'day')} streak</p>
        </div>
      </div>
      {longestStreak > 0 && (
        <p className="mt-3 text-xs text-calm-400">Personal best: {pluralise(longestStreak, 'day')}</p>
      )}
    </div>
  )
}

function BadgesWidget() {
  const badges = useAppStore((s) => s.progress.badges)
  return (
    <div className="card p-6 hover-lift">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center">
          <TrophyIcon size={26} className="text-brand-600" />
        </div>
        <div>
          <p className="text-3xl font-bold text-calm-900">{badges.length}</p>
          <p className="text-sm text-calm-500">{pluralise(badges.length, 'badge')} earned</p>
        </div>
      </div>
      {badges.length > 0 && (
        <div className="mt-3 flex gap-1.5 flex-wrap">
          {badges.slice(-3).map((b) => (
            <span key={b.id} className="badge bg-brand-50 text-brand-700 text-xs border border-brand-100">
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

  const radius = 36
  const circumference = 2 * Math.PI * radius
  const dashoffset = circumference * (1 - pct / 100)

  return (
    <div className="card p-6 hover-lift">
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14">
          <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="5" />
            <circle
              cx="40" cy="40" r={radius} fill="none"
              stroke="url(#progressGradient)" strokeWidth="5"
              strokeDasharray={circumference}
              strokeDashoffset={dashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3a8968" />
                <stop offset="100%" stopColor="#d88133" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-calm-900">{pct}%</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-calm-700">Overall Progress</p>
          <p className="text-xs text-calm-400 mt-0.5">
            {completedSessions.length} of {totalSessions} sessions
          </p>
        </div>
      </div>
    </div>
  )
}

function NextSessionCard() {
  const completedSessions = useAppStore((s) => s.progress.completedSessions)

  for (const mod of modules) {
    for (const session of mod.sessions) {
      if (!completedSessions.includes(session.id)) {
        return (
          <div className="card-glow p-7 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-50 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <SparklesIcon size={16} className="text-brand-500" />
                <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider">Continue Your Healing</p>
              </div>
              <h3 className="text-xl font-serif font-bold text-calm-900">{session.title}</h3>
              <p className="mt-2 text-sm text-calm-600 leading-relaxed">{session.description}</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-xs text-calm-500 bg-calm-50 px-2.5 py-1 rounded-full">{session.estimatedMinutes} min</span>
                <span className="text-xs text-calm-500 bg-calm-50 px-2.5 py-1 rounded-full">{mod.title}</span>
              </div>
              <Link
                href={`/modules/${mod.id}/${session.id}`}
                className="btn-primary mt-5 gap-2"
              >
                Start Session
                <ChevronRightIcon size={16} />
              </Link>
            </div>
          </div>
        )
      }
    }
  }

  return (
    <div className="card-elevated p-8 text-center">
      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-brand-100 to-warmth-100 rounded-2xl flex items-center justify-center mb-4">
        <TrophyIcon size={32} className="text-brand-500" />
      </div>
      <h3 className="text-xl font-serif font-bold text-calm-900">All Sessions Complete!</h3>
      <p className="mt-2 text-sm text-calm-600">You have completed all available sessions. Incredible work.</p>
    </div>
  )
}

function QuickActions() {
  const actions = [
    { href: '/healing', label: 'Healing Program', icon: HeartIcon, gradient: 'from-brand-500 to-brand-600', desc: 'Immersive healing' },
    { href: '/journal', label: 'Journal', icon: BookOpenIcon, gradient: 'from-warmth-500 to-warmth-600', desc: 'Write & reflect' },
    { href: '/modules', label: 'All Modules', icon: SparklesIcon, gradient: 'from-calm-500 to-calm-600', desc: 'Browse path' },
  ]

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {actions.map((action) => (
        <Link
          key={action.href}
          href={action.href}
          className={`p-5 rounded-2xl bg-gradient-to-br ${action.gradient} text-white hover-lift transition-all duration-300`}
        >
          <action.icon size={24} className="mb-3 opacity-90" />
          <p className="font-semibold text-sm">{action.label}</p>
          <p className="text-xs opacity-75 mt-0.5">{action.desc}</p>
        </Link>
      ))}
    </div>
  )
}

function ModuleList() {
  const { completedSessions, completedModules } = useAppStore((s) => s.progress)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="section-heading">Your Learning Path</h2>
        <Link href="/modules" className="text-sm text-brand-600 hover:text-brand-700 font-medium transition-colors">
          View all
        </Link>
      </div>
      <div className="grid gap-3">
        {modules.slice(0, 6).map((mod) => {
          const sessionsCompleted = mod.sessions.filter((s) => completedSessions.includes(s.id)).length
          const totalSessions = mod.sessions.length
          const isComplete = completedModules.includes(mod.id)
          const pct = getProgressPercentage(sessionsCompleted, totalSessions)

          return (
            <Link
              key={mod.id}
              href={`/modules/${mod.id}`}
              className="card p-5 flex items-center gap-4 group"
            >
              <div className={cn(
                'w-12 h-12 rounded-xl flex items-center justify-center shrink-0',
                isComplete ? 'bg-gradient-to-br from-brand-100 to-brand-50' : 'bg-calm-50'
              )}>
                <ModuleIcon icon={mod.icon} size={22} className={isComplete ? 'text-brand-600' : 'text-calm-400'} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-calm-900 text-sm group-hover:text-brand-700 transition-colors truncate">
                  {mod.title}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-calm-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${pct}%`,
                        background: isComplete
                          ? 'linear-gradient(90deg, #3a8968, #56a480)'
                          : 'linear-gradient(90deg, #56a480, #85c2a5)'
                      }}
                    />
                  </div>
                  <span className="text-xs text-calm-400 shrink-0 font-medium">{sessionsCompleted}/{totalSessions}</span>
                </div>
              </div>
              <ChevronRightIcon size={18} className="text-calm-300 shrink-0 group-hover:text-brand-500 transition-colors" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="page-width py-6 sm:py-8 space-y-8 animate-fade-in">
      <WelcomeHero />
      <div className="grid sm:grid-cols-3 gap-4">
        <StreakWidget />
        <BadgesWidget />
        <ProgressWidget />
      </div>
      <QuickActions />
      <NextSessionCard />
      <ModuleList />
    </div>
  )
}
