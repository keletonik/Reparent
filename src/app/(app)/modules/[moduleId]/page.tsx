'use client'

import { use } from 'react'
import Link from 'next/link'
import { useAppStore } from '@/lib/store'
import { getModuleById, isSessionUnlocked } from '@/lib/modules-data'
import { ModuleIcon, CheckIcon, LockIcon, ChevronRightIcon, ArrowLeftIcon } from '@/components/ui/Icons'
import { cn } from '@/lib/utils'

export default function ModuleDetailPage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = use(params)
  const mod = getModuleById(moduleId)
  const { completedSessions } = useAppStore((s) => s.progress)

  if (!mod) {
    return (
      <div className="page-width py-12 text-center">
        <h1 className="text-2xl font-serif font-bold text-calm-900">Module Not Found</h1>
        <Link href="/modules" className="btn-primary mt-4">Back to Modules</Link>
      </div>
    )
  }

  return (
    <div className="page-width py-6 sm:py-8 space-y-6">
      <Link href="/modules" className="btn-ghost gap-1 -ml-2">
        <ArrowLeftIcon size={16} />
        All Modules
      </Link>

      <div className="card-elevated p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center shrink-0">
            <ModuleIcon icon={mod.icon} size={28} className="text-brand-600" />
          </div>
          <div>
            <p className="text-xs font-medium text-brand-600 uppercase tracking-wide">Module {mod.order}</p>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-calm-900 mt-1">{mod.title}</h1>
            <p className="mt-2 text-calm-600">{mod.description}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-calm-900">Sessions</h2>
        {mod.sessions.map((session, index) => {
          const isCompleted = completedSessions.includes(session.id)
          const unlocked = isSessionUnlocked(session.id, completedSessions)

          return (
            <Link
              key={session.id}
              href={unlocked ? `/modules/${mod.id}/${session.id}` : '#'}
              className={cn(
                'card p-5 flex items-center gap-4 transition-all',
                unlocked ? 'hover:shadow-md cursor-pointer' : 'opacity-50 cursor-not-allowed'
              )}
              aria-disabled={!unlocked}
              tabIndex={unlocked ? 0 : -1}
              onClick={(e) => { if (!unlocked) e.preventDefault() }}
            >
              <div className={cn(
                'w-10 h-10 rounded-xl flex items-center justify-center shrink-0',
                isCompleted ? 'bg-brand-100' : unlocked ? 'bg-calm-50' : 'bg-calm-100'
              )}>
                {isCompleted ? (
                  <CheckIcon size={18} className="text-brand-600" />
                ) : unlocked ? (
                  <span className="text-sm font-bold text-calm-500">{index + 1}</span>
                ) : (
                  <LockIcon size={16} className="text-calm-300" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-calm-900 text-sm">{session.title}</h3>
                <p className="text-xs text-calm-500 mt-0.5 truncate">{session.description}</p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-xs text-calm-400">{session.estimatedMinutes} min</span>
                  <span className="text-xs text-calm-400">{session.segments.length} segments</span>
                  {isCompleted && <span className="badge bg-brand-50 text-brand-600 text-xs">Complete</span>}
                </div>
              </div>
              {unlocked && <ChevronRightIcon size={18} className="text-calm-300 shrink-0" />}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
