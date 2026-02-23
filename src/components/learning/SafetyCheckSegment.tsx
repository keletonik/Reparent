'use client'

import { useState } from 'react'
import { useAppStore } from '@/lib/store'
import type { Segment, SafetyCheckContent } from '@/lib/types'
import { ShieldIcon, AlertTriangleIcon } from '@/components/ui/Icons'

export function SafetyCheckSegment({
  segment,
  onComplete,
}: {
  segment: Segment
  onComplete: () => void
}) {
  const content = segment.content as SafetyCheckContent
  const [selected, setSelected] = useState<number | null>(null)
  const { setActivation, enterCrisisMode, recordActivation } = useAppStore()

  const handleSelect = (value: number) => {
    setSelected(value)
    setActivation(value)
    recordActivation({
      date: new Date().toISOString(),
      level: value,
    })
  }

  const handleContinue = () => {
    if (selected !== null && selected >= 9) {
      enterCrisisMode()
    } else {
      onComplete()
    }
  }

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
          <ShieldIcon size={20} className="text-brand-600" />
        </div>
        <h2 className="text-lg font-semibold text-calm-900">{segment.title}</h2>
      </div>

      <p className="text-calm-700 mb-6">{content.question}</p>

      <div className="space-y-3">
        {content.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
              selected === opt.value
                ? opt.value >= 7
                  ? 'border-warmth-400 bg-warmth-50'
                  : 'border-brand-400 bg-brand-50'
                : 'border-calm-200 bg-white hover:border-calm-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full border-2 ${
                selected === opt.value
                  ? opt.value >= 7
                    ? 'border-warmth-500 bg-warmth-500'
                    : 'border-brand-500 bg-brand-500'
                  : 'border-calm-300'
              }`} />
              <span className="text-sm text-calm-800">{opt.label}</span>
            </div>
          </button>
        ))}
      </div>

      {selected !== null && selected >= 7 && (
        <div className="mt-4 bg-warmth-50 border border-warmth-200 rounded-xl p-4">
          <div className="flex items-start gap-2">
            <AlertTriangleIcon size={18} className="text-warmth-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-warmth-800 font-medium">
                It sounds like you are feeling quite distressed right now.
              </p>
              <p className="text-sm text-warmth-700 mt-1">
                You can continue if you feel safe to do so, or access crisis support.
                There is no pressure to continue — you can always come back.
              </p>
            </div>
          </div>
        </div>
      )}

      {selected !== null && (
        <div className="mt-6 flex gap-3">
          <button onClick={handleContinue} className="btn-primary">
            {selected >= 9 ? 'Get Support' : 'Continue'}
          </button>
          {selected >= 5 && selected < 9 && (
            <button onClick={() => enterCrisisMode()} className="btn-secondary text-sm">
              I need help first
            </button>
          )}
        </div>
      )}
    </div>
  )
}
