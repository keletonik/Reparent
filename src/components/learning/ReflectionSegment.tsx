'use client'

import { useState } from 'react'
import type { Segment, ReflectionContent } from '@/lib/types'
import { SparklesIcon } from '@/components/ui/Icons'
import { useAppStore } from '@/lib/store'
import { generateId } from '@/lib/utils'

export function ReflectionSegment({
  segment,
  onComplete,
}: {
  segment: Segment
  onComplete: () => void
}) {
  const content = segment.content as ReflectionContent
  const [responses, setResponses] = useState<string[]>(content.prompts.map(() => ''))
  const { addJournalEntry } = useAppStore()

  const handleChange = (index: number, value: string) => {
    const newResponses = [...responses]
    newResponses[index] = value
    setResponses(newResponses)
  }

  const handleComplete = () => {
    const hasContent = responses.some((r) => r.trim().length > 0)
    if (hasContent) {
      addJournalEntry({
        id: generateId(),
        sessionId: segment.id,
        date: new Date().toISOString(),
        prompts: content.prompts,
        responses,
        isPrivate: true,
      })
    }
    onComplete()
  }

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-warmth-50 flex items-center justify-center">
          <SparklesIcon size={20} className="text-warmth-600" />
        </div>
        <h2 className="text-lg font-semibold text-calm-900">{segment.title}</h2>
      </div>

      <div className="space-y-5">
        {content.prompts.map((prompt, i) => (
          <div key={i}>
            <label className="block text-sm font-medium text-calm-800 mb-2">{prompt}</label>
            <textarea
              value={responses[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              className="textarea-field"
              rows={3}
              placeholder="Take a moment to reflect..."
            />
          </div>
        ))}
      </div>

      <p className="text-xs text-calm-500 mt-4">Your reflections will be saved to your private journal.</p>

      <button onClick={handleComplete} className="btn-primary mt-4">
        Complete
      </button>
    </div>
  )
}
