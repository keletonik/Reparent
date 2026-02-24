'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/lib/store'
import { useHydrated } from '@/lib/useHydration'
import { ChevronRightIcon, ChevronLeftIcon, CheckIcon, ShieldIcon, ReparentLogo } from '@/components/ui/Icons'
import { CrisisModal } from '@/components/safety/CrisisModal'
import { QuickExit } from '@/components/safety/QuickExit'

const goalOptions = [
  { id: 'attachment', label: 'Understand my attachment patterns', description: 'Learn why I react the way I do in relationships' },
  { id: 'anxiety', label: 'Reduce relationship anxiety', description: 'Stop the spiral of panic, texting, and reassurance seeking' },
  { id: 'trauma', label: 'Heal from past relationship trauma', description: 'Process what happened and build resilience' },
  { id: 'boundaries', label: 'Build better boundaries', description: 'Learn to say no and stand by my needs' },
  { id: 'self-compassion', label: 'Develop self-compassion', description: 'Stop being so hard on myself' },
  { id: 'healthy-relating', label: 'Build healthier relationships', description: 'Learn secure communication and repair skills' },
  { id: 'trauma-bond', label: 'Understand trauma bonding', description: 'Recognise and break free from unhealthy attachment patterns' },
  { id: 'regulation', label: 'Regulate my emotions better', description: 'Stop emotional flooding and shutdown' },
]

export default function OnboardingPage() {
  const router = useRouter()
  const hydrated = useHydrated()
  const { setGoals, setConsent, completeOnboarding } = useAppStore()
  const [step, setStep] = useState(0)
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [consents, setConsents] = useState({
    accountCreation: false,
    journalStorage: false,
    analytics: false,
  })

  const toggleGoal = (id: string) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    )
  }

  const handleComplete = () => {
    setGoals(selectedGoals)
    setConsent({
      ...consents,
      dateGiven: new Date().toISOString(),
    })
    completeOnboarding()
    router.push('/dashboard')
  }

  if (!hydrated) {
    return (
      <div className="min-h-screen bg-warmth-50 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <ReparentLogo size={48} className="mx-auto" />
          <p className="mt-4 text-calm-500 text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <QuickExit />
      <CrisisModal />
      <div className="min-h-screen bg-warmth-50 flex items-center justify-center p-4">
        <div className="card-elevated max-w-xl w-full">
          {/* Progress bar */}
          <div className="px-6 pt-6">
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i <= step ? 'bg-brand-500' : 'bg-calm-200'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Step 0: Goals */}
            {step === 0 && (
              <div className="animate-fade-in">
                <h1 className="text-2xl font-serif font-bold text-calm-900">
                  What brings you here?
                </h1>
                <p className="mt-2 text-calm-600">
                  Select the goals that matter most to you. This helps us personalise your learning path.
                </p>
                <div className="mt-6 grid gap-3">
                  {goalOptions.map(({ id, label, description }) => (
                    <button
                      key={id}
                      onClick={() => toggleGoal(id)}
                      className={`text-left p-4 rounded-xl border-2 transition-all ${
                        selectedGoals.includes(id)
                          ? 'border-brand-400 bg-brand-50'
                          : 'border-calm-200 bg-white hover:border-calm-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                          selectedGoals.includes(id)
                            ? 'border-brand-500 bg-brand-500'
                            : 'border-calm-300'
                        }`}>
                          {selectedGoals.includes(id) && <CheckIcon size={12} className="text-white" />}
                        </div>
                        <div>
                          <p className="font-medium text-calm-900 text-sm">{label}</p>
                          <p className="text-xs text-calm-500 mt-0.5">{description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Privacy & Consent */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-serif font-bold text-calm-900">
                  Your Privacy Matters
                </h2>
                <p className="mt-2 text-calm-600">
                  We take your privacy seriously. You are in control of your data.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="bg-brand-50 border border-brand-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <ShieldIcon size={20} className="text-brand-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-brand-800">Default Private</p>
                        <p className="text-sm text-brand-600 mt-1">
                          Your journal entries are stored only on your device. Nothing is sent to our servers
                          unless you explicitly choose to enable cloud sync.
                        </p>
                      </div>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 p-4 rounded-xl border border-calm-200 bg-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consents.journalStorage}
                      onChange={(e) => setConsents({ ...consents, journalStorage: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded border-calm-300 text-brand-600 focus:ring-brand-500"
                    />
                    <div>
                      <p className="font-medium text-calm-900 text-sm">Enable cloud journal backup</p>
                      <p className="text-xs text-calm-500 mt-0.5">Optional. Your journal entries will be encrypted and stored securely.</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-4 rounded-xl border border-calm-200 bg-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consents.analytics}
                      onChange={(e) => setConsents({ ...consents, analytics: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded border-calm-300 text-brand-600 focus:ring-brand-500"
                    />
                    <div>
                      <p className="font-medium text-calm-900 text-sm">Allow anonymous usage analytics</p>
                      <p className="text-xs text-calm-500 mt-0.5">Optional. Helps us improve the program. No personal data is shared.</p>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Step 2: Safety Setup */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-serif font-bold text-calm-900">
                  Safety Tools
                </h2>
                <p className="mt-2 text-calm-600">
                  Before we begin, here are the safety features available to you at all times:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="bg-safety-50 border border-safety-200 rounded-xl p-4">
                    <p className="font-medium text-safety-800">Crisis Button</p>
                    <p className="text-sm text-safety-600 mt-1">
                      The &quot;Need Help Now&quot; button is always visible. It connects you to crisis
                      services, safety planning, and grounding exercises.
                    </p>
                  </div>
                  <div className="bg-warmth-50 border border-warmth-200 rounded-xl p-4">
                    <p className="font-medium text-warmth-800">Quick Exit</p>
                    <p className="text-sm text-warmth-600 mt-1">
                      Press <strong>Shift + Escape</strong> at any time to immediately hide the app
                      with a blank screen. This is especially important if someone monitors your device.
                    </p>
                  </div>
                  <div className="bg-brand-50 border border-brand-200 rounded-xl p-4">
                    <p className="font-medium text-brand-800">Pause Anytime</p>
                    <p className="text-sm text-brand-600 mt-1">
                      Every session has pause points, grounding options, and the ability to exit.
                      You are never locked into content that feels too much.
                    </p>
                  </div>
                  <div className="bg-calm-50 border border-calm-200 rounded-xl p-4">
                    <p className="font-medium text-calm-800">Your Pace</p>
                    <p className="text-sm text-calm-600 mt-1">
                      There are no time pressures. Move through content at whatever speed feels
                      right for you. The program will be here when you are ready.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex items-center justify-between">
            {step > 0 ? (
              <button onClick={() => setStep(step - 1)} className="btn-ghost gap-1">
                <ChevronLeftIcon size={18} />
                Back
              </button>
            ) : (
              <div />
            )}
            {step < 2 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={step === 0 && selectedGoals.length === 0}
                className="btn-primary gap-1"
              >
                Continue
                <ChevronRightIcon size={18} />
              </button>
            ) : (
              <button onClick={handleComplete} className="btn-primary gap-1">
                Start Learning
                <ChevronRightIcon size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
