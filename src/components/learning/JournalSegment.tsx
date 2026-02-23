'use client'

import { useState } from 'react'
import { useAppStore } from '@/lib/store'
import { generateId } from '@/lib/utils'
import type { Segment, JournalContent } from '@/lib/types'
import { PenIcon, ShieldIcon } from '@/components/ui/Icons'

export function JournalSegment({
  segment,
  onComplete,
}: {
  segment: Segment
  onComplete: () => void
}) {
  const content = segment.content as JournalContent
  const { addJournalEntry } = useAppStore()
  const [responses, setResponses] = useState<string[]>(content.prompts.map(() => ''))

  const handleChange = (index: number, value: string) => {
    const newResponses = [...responses]
    newResponses[index] = value
    setResponses(newResponses)
  }

  const handleSave = () => {
    const hasContent = responses.some((r) => r.trim().length > 0)
    if (hasContent) {
      addJournalEntry({
        id: generateId(),
        sessionId: segment.id,
        date: new Date().toISOString(),
        prompts: content.prompts,
        responses: responses.filter((r) => r.trim().length > 0),
        isPrivate: true,
      })
    }
    onComplete()
  }

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-warmth-50 flex items-center justify-center">
          <PenIcon size={20} className="text-warmth-600" />
        </div>
        <h2 className="text-lg font-semibold text-calm-900">{segment.title}</h2>
      </div>

      <div className="bg-calm-50 border border-calm-200 rounded-xl p-3 mb-6 flex items-start gap-2">
        <ShieldIcon size={16} className="text-calm-500 shrink-0 mt-0.5" />
        <p className="text-xs text-calm-600">{content.privacyNote}</p>
      </div>

      <div className="space-y-5">
        {content.prompts.map((prompt, i) => (
          <div key={i}>
            <label className="block text-sm font-medium text-calm-800 mb-2">
              {prompt}
            </label>
            <textarea
              value={responses[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              className="textarea-field"
              rows={4}
              placeholder="Write freely — this is for you..."
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button onClick={handleSave} className="btn-primary">
          Save & Continue
        </button>
        <button onClick={onComplete} className="btn-ghost text-sm">
          Skip for now
        </button>
      </div>
    </div>
  )
}
