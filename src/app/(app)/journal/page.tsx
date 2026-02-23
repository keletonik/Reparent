'use client'

import { useState } from 'react'
import { useAppStore } from '@/lib/store'
import { PenIcon, ShieldIcon } from '@/components/ui/Icons'
import { formatDate } from '@/lib/utils'

export default function JournalPage() {
  const entries = useAppStore((s) => s.progress.journalEntries)
  const [expandedEntry, setExpandedEntry] = useState<string | null>(null)

  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="page-width py-6 sm:py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold text-calm-900">Your Journal</h1>
        <p className="mt-2 text-calm-600">
          A private space for your reflections. All entries are stored on your device.
        </p>
      </div>

      <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 flex items-start gap-3">
        <ShieldIcon size={18} className="text-brand-600 shrink-0 mt-0.5" />
        <p className="text-sm text-brand-700">
          Your journal entries are stored locally in your browser. They are not sent to any server.
          Clearing your browser data will remove them. Consider saving important reflections elsewhere.
        </p>
      </div>

      {sortedEntries.length === 0 ? (
        <div className="card p-12 text-center">
          <PenIcon size={48} className="text-calm-300 mx-auto" />
          <h3 className="text-lg font-semibold text-calm-700 mt-4">No Entries Yet</h3>
          <p className="text-sm text-calm-500 mt-2">
            Journal entries will appear here as you complete sessions with journaling prompts.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {sortedEntries.map((entry) => (
            <div key={entry.id} className="card overflow-hidden">
              <button
                onClick={() => setExpandedEntry(expandedEntry === entry.id ? null : entry.id)}
                className="w-full text-left p-5 flex items-center justify-between hover:bg-calm-50 transition-colors"
              >
                <div>
                  <p className="text-xs text-calm-400 font-medium">{formatDate(entry.date)}</p>
                  <p className="text-sm font-medium text-calm-900 mt-1">
                    {entry.prompts[0]}
                  </p>
                </div>
                <div className={`transform transition-transform ${expandedEntry === entry.id ? 'rotate-90' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-calm-400">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </button>
              {expandedEntry === entry.id && (
                <div className="px-5 pb-5 space-y-4 border-t border-calm-100 pt-4">
                  {entry.prompts.map((prompt, i) => (
                    <div key={i}>
                      <p className="text-xs font-medium text-calm-500 mb-1">{prompt}</p>
                      <p className="text-sm text-calm-800 whitespace-pre-wrap">
                        {entry.responses[i] || <span className="text-calm-400 italic">No response</span>}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
