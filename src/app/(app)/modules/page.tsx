'use client'

import Link from 'next/link'
import { useAppStore } from '@/lib/store'
import { modules } from '@/lib/modules-data'
import { isModuleUnlocked } from '@/lib/modules-data'
import { ModuleIcon, LockIcon, CheckIcon, ChevronRightIcon } from '@/components/ui/Icons'
import { cn, getProgressPercentage } from '@/lib/utils'

const categoryLabels: Record<string, string> = {
  foundation: 'Foundation',
  skills: 'Skills Building',
  growth: 'Growth & Connection',
  integration: 'Integration',
}

const categoryColors: Record<string, string> = {
  foundation: 'bg-calm-100 text-calm-700 border-calm-200',
  skills: 'bg-brand-50 text-brand-700 border-brand-200',
  growth: 'bg-warmth-50 text-warmth-700 border-warmth-200',
  integration: 'bg-brand-50 text-brand-700 border-brand-200',
}

const categoryGradients: Record<string, string> = {
  foundation: 'from-calm-500 to-calm-600',
  skills: 'from-brand-500 to-brand-600',
  growth: 'from-warmth-500 to-warmth-600',
  integration: 'from-brand-500 to-brand-600',
}

export default function ModulesPage() {
  const { completedSessions, completedModules } = useAppStore((s) => s.progress)

  const groupedModules = modules.reduce((acc, mod) => {
    const cat = mod.category
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(mod)
    return acc
  }, {} as Record<string, typeof modules>)

  const totalSessions = modules.reduce((sum, m) => sum + m.sessions.length, 0)
  const pct = getProgressPercentage(completedSessions.length, totalSessions)

  return (
    <div className="page-width py-6 sm:py-8 space-y-8 animate-fade-in">
      {/* Header with overall progress */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-calm-900">Learning Modules</h1>
          <p className="mt-2 text-calm-600">
            12 evidence-based modules covering attachment science, emotion regulation,
            cognitive skills, and relationship building.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-calm-100/50 shrink-0">
          <div className="w-full sm:w-32 h-2 bg-calm-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: `${pct}%`,
                background: 'linear-gradient(90deg, #3a8968, #d88133)'
              }}
            />
          </div>
          <span className="text-sm font-semibold text-calm-700 whitespace-nowrap">{pct}% complete</span>
        </div>
      </div>

      {Object.entries(groupedModules).map(([category, mods]) => (
        <section key={category}>
          <div className="flex items-center gap-3 mb-5">
            <span className={cn('badge text-xs border', categoryColors[category])}>
              {categoryLabels[category]}
            </span>
            <div className="flex-1 h-px bg-calm-200/50" />
          </div>

          <div className="grid gap-4">
            {mods.map((mod) => {
              const unlocked = isModuleUnlocked(mod.id, completedModules)
              const isComplete = completedModules.includes(mod.id)
              const sessionsCompleted = mod.sessions.filter((s) => completedSessions.includes(s.id)).length
              const totalSessions = mod.sessions.length
              const modPct = getProgressPercentage(sessionsCompleted, totalSessions)

              return (
                <Link
                  key={mod.id}
                  href={unlocked ? `/modules/${mod.id}` : '#'}
                  className={cn(
                    'card p-6 transition-all duration-300',
                    unlocked ? 'hover-lift cursor-pointer' : 'opacity-50 cursor-not-allowed'
                  )}
                  aria-disabled={!unlocked}
                  tabIndex={unlocked ? 0 : -1}
                  onClick={(e) => { if (!unlocked) e.preventDefault() }}
                >
                  <div className="flex items-start gap-5">
                    <div className={cn(
                      'w-14 h-14 rounded-2xl flex items-center justify-center shrink-0',
                      isComplete
                        ? `bg-gradient-to-br ${categoryGradients[category]} shadow-sm`
                        : unlocked
                          ? 'bg-calm-50 border border-calm-200/50'
                          : 'bg-calm-100'
                    )}>
                      {!unlocked ? (
                        <LockIcon size={24} className="text-calm-300" />
                      ) : isComplete ? (
                        <CheckIcon size={24} className="text-white" />
                      ) : (
                        <ModuleIcon icon={mod.icon} size={24} className="text-calm-500" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-calm-400 font-medium">Module {mod.order}</span>
                        {isComplete && (
                          <span className="badge bg-brand-50 text-brand-600 text-xs border border-brand-100">Complete</span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-calm-900 mt-1">{mod.title}</h3>
                      <p className="text-sm text-calm-600 mt-1 line-clamp-2">{mod.description}</p>

                      {unlocked && (
                        <div className="mt-4 flex items-center gap-3">
                          <div className="flex-1 h-2 bg-calm-100 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${modPct}%`,
                                background: isComplete
                                  ? 'linear-gradient(90deg, #3a8968, #56a480)'
                                  : 'linear-gradient(90deg, #56a480, #85c2a5)'
                              }}
                            />
                          </div>
                          <span className="text-xs text-calm-400 shrink-0 font-medium">
                            {sessionsCompleted}/{totalSessions} sessions
                          </span>
                          <ChevronRightIcon size={16} className="text-calm-300 shrink-0" />
                        </div>
                      )}

                      {!unlocked && (
                        <p className="text-xs text-calm-400 mt-2">
                          Complete prerequisite modules to unlock
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
