'use client'

import type { Segment, PsychoeducationContent } from '@/lib/types'
import { BookOpenIcon, CheckIcon } from '@/components/ui/Icons'

export function PsychoeducationSegment({
  segment,
  onComplete,
}: {
  segment: Segment
  onComplete: () => void
}) {
  const content = segment.content as PsychoeducationContent

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-calm-50 flex items-center justify-center">
          <BookOpenIcon size={20} className="text-calm-600" />
        </div>
        <h2 className="text-lg font-semibold text-calm-900">{segment.title}</h2>
      </div>

      <div className="space-y-6">
        {content.sections.map((section, i) => (
          <div key={i} className="space-y-3">
            {section.heading && (
              <h3 className="text-base font-semibold text-calm-900">{section.heading}</h3>
            )}
            <p className="text-calm-700 leading-relaxed text-sm">{section.text}</p>
            {section.keyIdeas && section.keyIdeas.length > 0 && (
              <div className="bg-brand-50 rounded-xl p-4 space-y-2">
                <p className="text-xs font-semibold text-brand-700 uppercase tracking-wide">Key Ideas</p>
                {section.keyIdeas.map((idea, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <CheckIcon size={14} className="text-brand-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-brand-800">{idea}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button onClick={onComplete} className="btn-primary mt-6">
        Continue
      </button>
    </div>
  )
}
