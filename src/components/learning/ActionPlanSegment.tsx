'use client'

import { useState } from 'react'
import { useAppStore } from '@/lib/store'
import { generateId } from '@/lib/utils'
import type { Segment, ActionPlanContent } from '@/lib/types'
import { CheckIcon } from '@/components/ui/Icons'
import { cn } from '@/lib/utils'

export function ActionPlanSegment({
  segment,
  onComplete,
}: {
  segment: Segment
  onComplete: () => void
}) {
  const content = segment.content as ActionPlanContent
  const { addActionPlan, addBadge } = useAppStore()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleCommit = () => {
    if (selectedOption) {
      addActionPlan({
        id: generateId(),
        sessionId: segment.id,
        selectedAction: selectedOption,
        commitDate: new Date().toISOString(),
        completed: false,
      })

      addBadge({
        id: `commitment-${segment.id}`,
        title: 'Made a Commitment',
        description: 'Chose a values-aligned action plan',
        icon: 'sparkles',
        earnedDate: new Date().toISOString(),
        category: 'courage',
      })
    }
    onComplete()
  }

  return (
    <div className="card p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-calm-900 mb-2">{segment.title}</h2>
      <p className="text-calm-700 mb-6">{content.prompt}</p>

      <div className="space-y-3">
        {content.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setSelectedOption(opt.id)}
            className={cn(
              'w-full text-left p-4 rounded-xl border-2 transition-all',
              selectedOption === opt.id
                ? 'border-brand-400 bg-brand-50'
                : 'border-calm-200 bg-white hover:border-calm-300'
            )}
          >
            <div className="flex items-start gap-3">
              <div className={cn(
                'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5',
                selectedOption === opt.id
                  ? 'border-brand-500 bg-brand-500'
                  : 'border-calm-300'
              )}>
                {selectedOption === opt.id && <CheckIcon size={12} className="text-white" />}
              </div>
              <div>
                <p className="font-medium text-calm-900 text-sm">{opt.label}</p>
                <p className="text-xs text-calm-500 mt-0.5">{opt.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedOption && (
        <div className="mt-4 bg-brand-50 border border-brand-200 rounded-xl p-4">
          <p className="text-sm text-brand-700">
            You are committing to this for the next {content.timeHorizonDays} days.
            This is a micro-commitment — small and achievable. You can do this.
          </p>
        </div>
      )}

      <div className="mt-6 flex gap-3">
        <button
          onClick={handleCommit}
          disabled={!selectedOption}
          className="btn-primary disabled:opacity-50"
        >
          I Commit
        </button>
        <button onClick={onComplete} className="btn-ghost text-sm">
          Skip for now
        </button>
      </div>
    </div>
  )
}
