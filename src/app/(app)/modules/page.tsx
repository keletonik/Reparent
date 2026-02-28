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
  relationships: 'Relationships — 3% Man',
}

const categoryColors: Record<string, string> = {
  foundation: 'bg-calm-100 text-calm-700',
  skills: 'bg-brand-100 text-brand-700',
  growth: 'bg-warmth-100 text-warmth-700',
  integration: 'bg-brand-100 text-brand-700',
  relationships: 'bg-warmth-100 text-warmth-700',
}

export default function ModulesPage() {
  const { completedSessions, completedModules } = useAppStore((s) => s.progress)

  const groupedModules = modules.reduce((acc, mod) => {
    const cat = mod.category
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(mod)
    return acc
  }, {} as Record<string, typeof modules>)

  return (
    <div className="page-width py-6 sm:py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-calm-900">Learning Modules</h1>
        <p className="mt-2 text-calm-600">
          12 evidence-based modules covering attachment science, emotion regulation,
          cognitive skills, and relationship building.
        </p>
      </div>

      {Object.entries(groupedModules).map(([category, mods]) => (
        <section key={category}>
          <div className="flex items-center gap-3 mb-4">
            <span className={cn('badge text-xs', categoryColors[category])}>
              {categoryLabels[category]}
            </span>
          </div>

          <div className="grid gap-4">
            {mods.map((mod) => {
              const unlocked = isModuleUnlocked(mod.id, completedModules)
              const isComplete = completedModules.includes(mod.id)
              const sessionsCompleted = mod.sessions.filter((s) => completedSessions.includes(s.id)).length
              const totalSessions = mod.sessions.length
              const pct = getProgressPercentage(sessionsCompleted, totalSessions)

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
                      isComplete ? 'bg-brand-100' : unlocked ? 'bg-calm-50' : 'bg-calm-100'
                    )}>
                      {!unlocked ? (
                        <LockIcon size={24} className="text-calm-300" />
                      ) : isComplete ? (
                        <CheckIcon size={24} className="text-brand-600" />
                      ) : (
                        <ModuleIcon icon={mod.icon} size={24} className="text-calm-500" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-calm-400 font-medium">Module {mod.order}</span>
                        {isComplete && (
                          <span className="badge bg-brand-50 text-brand-600 text-xs">Complete</span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-calm-900 mt-1">{mod.title}</h3>
                      <p className="text-sm text-calm-600 mt-1 line-clamp-2">{mod.description}</p>

                      {unlocked && (
                        <div className="mt-3 flex items-center gap-3">
                          <div className="flex-1 h-2 bg-calm-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-brand-400 rounded-full transition-all"
                              style={{ width: `${pct}%` }}
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
