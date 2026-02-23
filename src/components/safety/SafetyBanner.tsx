'use client'

import { useState } from 'react'
import { XIcon, AlertTriangleIcon } from '@/components/ui/Icons'

export function SafetyBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div
      className="bg-warmth-100 border-b border-warmth-200 px-4 py-2"
      role="banner"
      aria-label="Safety notice"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm text-warmth-800">
          <AlertTriangleIcon size={16} className="text-warmth-600 shrink-0" />
          <span>
            This is an educational tool, not a substitute for therapy.
            <span className="hidden sm:inline"> If you are in crisis, use the &quot;Need Help Now&quot; button.</span>
          </span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 p-1 text-warmth-500 hover:text-warmth-700 rounded"
          aria-label="Dismiss safety notice"
        >
          <XIcon size={16} />
        </button>
      </div>
    </div>
  )
}
