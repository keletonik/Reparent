'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/lib/store'
import { SettingsIcon, ShieldIcon, AlertTriangleIcon } from '@/components/ui/Icons'

export default function SettingsPage() {
  const router = useRouter()
  const progress = useAppStore((s) => s.progress)
  const { setConsent, resetProgress } = useAppStore()
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const [resetText, setResetText] = useState('')

  const consent = progress.consentGiven || { accountCreation: false, journalStorage: false, analytics: false, dateGiven: '' }

  const handleConsentToggle = (key: 'journalStorage' | 'analytics', value: boolean) => {
    setConsent({
      ...consent,
      [key]: value,
      dateGiven: consent.dateGiven,
    })
  }

  const handleReset = () => {
    if (resetText === 'RESET') {
      resetProgress()
      router.push('/')
    }
  }

  return (
    <div className="page-width py-6 sm:py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-calm-900">Settings</h1>
        <p className="mt-2 text-calm-600">Manage your privacy, data, and preferences.</p>
      </div>

      {/* Privacy Settings */}
      <section className="card p-6">
        <div className="flex items-center gap-3 mb-4">
          <ShieldIcon size={20} className="text-brand-600" />
          <h2 className="text-lg font-semibold text-calm-900">Privacy & Data</h2>
        </div>

        <div className="space-y-4">
          <label className="flex items-start gap-3 p-4 rounded-xl border border-calm-200 cursor-pointer hover:bg-calm-50">
            <input
              type="checkbox"
              checked={consent.journalStorage}
              onChange={(e) => handleConsentToggle('journalStorage', e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-calm-300 text-brand-600 focus:ring-brand-500"
            />
            <div>
              <p className="font-medium text-calm-900 text-sm">Cloud journal backup</p>
              <p className="text-xs text-calm-500 mt-0.5">
                When enabled, journal entries are encrypted and stored in the cloud.
                When disabled, entries are stored only in your browser.
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 p-4 rounded-xl border border-calm-200 cursor-pointer hover:bg-calm-50">
            <input
              type="checkbox"
              checked={consent.analytics}
              onChange={(e) => handleConsentToggle('analytics', e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-calm-300 text-brand-600 focus:ring-brand-500"
            />
            <div>
              <p className="font-medium text-calm-900 text-sm">Anonymous usage analytics</p>
              <p className="text-xs text-calm-500 mt-0.5">
                Helps improve the program. No personal data is shared.
              </p>
            </div>
          </label>
        </div>

        <div className="mt-4 bg-calm-50 rounded-xl p-4">
          <p className="text-xs text-calm-600">
            <strong>Your data:</strong> All progress and journal data is stored in your browser
            using local storage. Clearing your browser data will remove it. We recommend exporting
            important journal entries separately.
          </p>
        </div>
      </section>

      {/* Safety Settings */}
      <section className="card p-6">
        <div className="flex items-center gap-3 mb-4">
          <SettingsIcon size={20} className="text-calm-600" />
          <h2 className="text-lg font-semibold text-calm-900">Safety Features</h2>
        </div>
        <div className="space-y-3 text-sm text-calm-700">
          <div className="p-3 bg-calm-50 rounded-lg">
            <p className="font-medium text-calm-800">Quick Exit</p>
            <p className="text-xs text-calm-500 mt-0.5">
              Press <strong>Shift + Escape</strong> at any time to immediately hide the app.
            </p>
          </div>
          <div className="p-3 bg-calm-50 rounded-lg">
            <p className="font-medium text-calm-800">Crisis Button</p>
            <p className="text-xs text-calm-500 mt-0.5">
              The &quot;Need Help Now&quot; button is always visible in the top navigation bar.
            </p>
          </div>
          <div className="p-3 bg-calm-50 rounded-lg">
            <p className="font-medium text-calm-800">Content Pacing</p>
            <p className="text-xs text-calm-500 mt-0.5">
              Every session includes safety checks and you can pause or exit at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Danger Zone */}
      <section className="card p-6 border-safety-200">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangleIcon size={20} className="text-safety-600" />
          <h2 className="text-lg font-semibold text-calm-900">Reset Data</h2>
        </div>
        <p className="text-sm text-calm-600 mb-4">
          This will permanently delete all your progress, journal entries, badges, and settings.
          This action cannot be undone.
        </p>
        {!showResetConfirm ? (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="px-4 py-2 text-sm font-medium text-safety-600 border border-safety-300 rounded-xl hover:bg-safety-50 transition-colors"
          >
            Reset All Data
          </button>
        ) : (
          <div className="bg-safety-50 border border-safety-200 rounded-xl p-4">
            <p className="text-sm text-safety-800 font-medium mb-3">
              Type RESET to confirm:
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                className="input-field flex-1"
                value={resetText}
                onChange={(e) => setResetText(e.target.value)}
                placeholder="Type RESET"
              />
              <button
                onClick={handleReset}
                disabled={resetText !== 'RESET'}
                className="btn-safety disabled:opacity-50"
              >
                Confirm Reset
              </button>
              <button onClick={() => setShowResetConfirm(false)} className="btn-ghost">
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
