'use client'

import { useEffect } from 'react'
import { useAppStore } from '@/lib/store'

export function QuickExit() {
  const quickExitActive = useAppStore((s) => s.quickExitActive)
  const triggerQuickExit = useAppStore((s) => s.triggerQuickExit)
  const clearQuickExit = useAppStore((s) => s.clearQuickExit)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && e.shiftKey) {
        triggerQuickExit()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [triggerQuickExit])

  if (quickExitActive) {
    return (
      <div className="quick-exit-active flex items-center justify-center" role="alert">
        <div className="text-center">
          <p className="text-calm-400 text-sm mb-4">This page is blank for your safety.</p>
          <button
            onClick={clearQuickExit}
            className="text-calm-300 text-xs underline hover:text-calm-500"
          >
            Return to app
          </button>
        </div>
      </div>
    )
  }

  return null
}
