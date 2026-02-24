'use client'

import { useState } from 'react'
import { useAppStore } from '@/lib/store'
import { PenIcon, ShieldIcon, HeartIcon, SparklesIcon, BrainIcon } from '@/components/ui/Icons'
import { formatDate } from '@/lib/utils'
import { JOURNALING_PROMPTS } from '@/lib/therapist-prompt'

const promptCategories = [
  { id: 'selfCompassion', label: 'Self-Compassion', icon: HeartIcon, color: 'brand' },
  { id: 'attachmentHealing', label: 'Attachment', icon: SparklesIcon, color: 'warmth' },
  { id: 'emotionalProcessing', label: 'Emotional Processing', icon: BrainIcon, color: 'calm' },
  { id: 'growth', label: 'Growth', icon: PenIcon, color: 'brand' },
] as const

export default function JournalPage() {
  const entries = useAppStore((s) => s.progress.journalEntries)
  const addJournalEntry = useAppStore((s) => s.addJournalEntry)
  const [expandedEntry, setExpandedEntry] = useState<string | null>(null)
  const [showPrompts, setShowPrompts] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('selfCompassion')
  const [activePrompt, setActivePrompt] = useState<string | null>(null)
  const [journalText, setJournalText] = useState('')

  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const currentPrompts = JOURNALING_PROMPTS[selectedCategory as keyof typeof JOURNALING_PROMPTS] || []

  const handleSaveEntry = () => {
    if (!journalText.trim() || !activePrompt) return
    addJournalEntry({
      id: `journal-${Date.now()}`,
      sessionId: 'free-write',
      date: new Date().toISOString(),
      prompts: [activePrompt],
      responses: [journalText],
      isPrivate: true,
    })
    setJournalText('')
    setActivePrompt(null)
    setShowPrompts(false)
  }

  return (
    <div className="page-width py-6 sm:py-8 space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-calm-900">Your Journal</h1>
          <p className="mt-2 text-calm-600">
            A private space for your reflections. All entries are stored on your device.
          </p>
        </div>
        <button
          onClick={() => setShowPrompts(!showPrompts)}
          className="btn-primary gap-2 shrink-0"
        >
          <PenIcon size={18} />
          {showPrompts ? 'Close Prompts' : 'New Entry'}
        </button>
      </div>

      {/* Privacy notice */}
      <div className="bg-brand-50/50 border border-brand-200/50 rounded-2xl p-4 flex items-start gap-3 backdrop-blur-sm">
        <ShieldIcon size={18} className="text-brand-600 shrink-0 mt-0.5" />
        <p className="text-sm text-brand-700">
          Your journal entries are stored locally in your browser. They are not sent to any server.
          Clearing your browser data will remove them. Consider saving important reflections elsewhere.
        </p>
      </div>

      {/* Writing area with prompts */}
      {showPrompts && (
        <div className="card-elevated p-6 sm:p-8 space-y-6 animate-fade-in-up">
          <div>
            <h3 className="text-lg font-serif font-bold text-calm-900">Choose a journaling prompt</h3>
            <p className="text-sm text-calm-500 mt-1">Select a category and then a prompt to guide your reflection.</p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {promptCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setSelectedCategory(cat.id); setActivePrompt(null) }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-calm-50 text-calm-600 hover:bg-calm-100 border border-calm-200/50'
                }`}
              >
                <cat.icon size={16} />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Prompts list */}
          {!activePrompt && (
            <div className="grid gap-3">
              {currentPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => setActivePrompt(prompt)}
                  className="text-left p-4 rounded-xl border border-calm-200/50 bg-white/50 hover:bg-brand-50/50 hover:border-brand-200 transition-all duration-200"
                >
                  <p className="text-sm text-calm-800 leading-relaxed">{prompt}</p>
                </button>
              ))}
            </div>
          )}

          {/* Writing area */}
          {activePrompt && (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-brand-50/30 rounded-xl p-4 border border-brand-100/50">
                <p className="text-sm font-medium text-brand-700 italic">&ldquo;{activePrompt}&rdquo;</p>
              </div>
              <textarea
                value={journalText}
                onChange={(e) => setJournalText(e.target.value)}
                placeholder="Begin writing here... Take your time. There are no wrong answers."
                className="textarea-field min-h-[200px] text-calm-800 leading-relaxed"
                autoFocus
              />
              <div className="flex items-center justify-between">
                <button
                  onClick={() => { setActivePrompt(null); setJournalText('') }}
                  className="btn-ghost text-sm"
                >
                  Choose different prompt
                </button>
                <button
                  onClick={handleSaveEntry}
                  disabled={!journalText.trim()}
                  className="btn-primary text-sm"
                >
                  Save Entry
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Entries list */}
      {sortedEntries.length === 0 && !showPrompts ? (
        <div className="card p-12 text-center">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-calm-100 to-calm-50 rounded-2xl flex items-center justify-center mb-4">
            <PenIcon size={32} className="text-calm-300" />
          </div>
          <h3 className="text-lg font-serif font-bold text-calm-700">No Entries Yet</h3>
          <p className="text-sm text-calm-500 mt-2 max-w-sm mx-auto">
            Journal entries will appear here as you complete sessions or write free reflections using the prompts above.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {sortedEntries.map((entry) => (
            <div key={entry.id} className="card overflow-hidden">
              <button
                onClick={() => setExpandedEntry(expandedEntry === entry.id ? null : entry.id)}
                className="w-full text-left p-5 flex items-center justify-between hover:bg-calm-50/50 transition-colors"
              >
                <div>
                  <p className="text-xs text-calm-400 font-medium">{formatDate(entry.date)}</p>
                  <p className="text-sm font-medium text-calm-900 mt-1">
                    {entry.prompts?.[0] || 'Journal entry'}
                  </p>
                </div>
                <div className={`transform transition-transform duration-200 ${expandedEntry === entry.id ? 'rotate-90' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-calm-400">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </button>
              {expandedEntry === entry.id && (
                <div className="px-5 pb-5 space-y-4 border-t border-calm-100/50 pt-4 animate-fade-in">
                  {(entry.prompts || []).map((prompt, i) => (
                    <div key={i}>
                      <p className="text-xs font-medium text-calm-500 mb-1.5">{prompt}</p>
                      <p className="text-sm text-calm-800 whitespace-pre-wrap leading-relaxed">
                        {entry.responses?.[i] || <span className="text-calm-400 italic">No response</span>}
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
