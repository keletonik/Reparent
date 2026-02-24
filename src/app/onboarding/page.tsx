'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/lib/store'
import { useHydrated } from '@/lib/useHydration'
import { ChevronRightIcon, ChevronLeftIcon, CheckIcon, ShieldIcon, ReparentLogo, HeartIcon, SparklesIcon } from '@/components/ui/Icons'
import { CrisisModal } from '@/components/safety/CrisisModal'
import { QuickExit } from '@/components/safety/QuickExit'

const goalOptions = [
  { id: 'attachment', label: 'Understand my attachment patterns', description: 'Learn why I react the way I do in relationships', icon: HeartIcon },
  { id: 'anxiety', label: 'Reduce relationship anxiety', description: 'Stop the spiral of panic, texting, and reassurance seeking', icon: HeartIcon },
  { id: 'trauma', label: 'Heal from past relationship trauma', description: 'Process what happened and build resilience', icon: ShieldIcon },
  { id: 'boundaries', label: 'Build better boundaries', description: 'Learn to say no and stand by my needs', icon: ShieldIcon },
  { id: 'self-compassion', label: 'Develop self-compassion', description: 'Stop being so hard on myself', icon: SparklesIcon },
  { id: 'healthy-relating', label: 'Build healthier relationships', description: 'Learn secure communication and repair skills', icon: HeartIcon },
  { id: 'trauma-bond', label: 'Understand trauma bonding', description: 'Recognise and break free from unhealthy attachment patterns', icon: ShieldIcon },
  { id: 'regulation', label: 'Regulate my emotions better', description: 'Stop emotional flooding and shutdown', icon: SparklesIcon },
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
          <ReparentLogo size={48} className="mx-auto animate-pulse-gentle" />
          <p className="mt-4 text-calm-500 text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <QuickExit />
      <CrisisModal />
      <div className="min-h-screen bg-warmth-50 bg-mesh-soft flex items-center justify-center p-4">
        <div className="card-elevated max-w-xl w-full relative overflow-hidden">
          {/* Decorative orbs */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-warmth-500/10 rounded-full blur-2xl" />

          {/* Progress bar */}
          <div className="px-6 pt-6 relative z-10">
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                    i <= step
                      ? 'bg-gradient-to-r from-brand-500 to-brand-400'
                      : 'bg-calm-200'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-calm-400 mt-2">Step {step + 1} of 3</p>
          </div>

          <div className="p-6 sm:p-8 relative z-10">
            {/* Step 0: Goals */}
            {step === 0 && (
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-3 mb-2">
                  <HeartIcon size={20} className="text-brand-500" />
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">Your Intentions</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-calm-900">
                  What brings you here?
                </h1>
                <p className="mt-2 text-calm-600">
                  Select the goals that matter most to you. This helps personalise your healing path.
                </p>
                <div className="mt-6 grid gap-3">
                  {goalOptions.map(({ id, label, description, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => toggleGoal(id)}
                      className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedGoals.includes(id)
                          ? 'border-brand-400 bg-brand-50/50 shadow-sm'
                          : 'border-calm-200/80 bg-white/50 hover:border-calm-300 hover:bg-white/80'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${
                          selectedGoals.includes(id)
                            ? 'border-brand-500 bg-brand-500'
                            : 'border-calm-300'
                        }`}>
                          {selectedGoals.includes(id) && <CheckIcon size={12} className="text-white" />}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-calm-900 text-sm">{label}</p>
                          <p className="text-xs text-calm-500 mt-0.5">{description}</p>
                        </div>
                        <Icon size={16} className={selectedGoals.includes(id) ? 'text-brand-400' : 'text-calm-300'} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Privacy & Consent */}
            {step === 1 && (
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldIcon size={20} className="text-brand-500" />
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">Your Privacy</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-calm-900">
                  Your Privacy Matters
                </h2>
                <p className="mt-2 text-calm-600">
                  We take your privacy seriously. You are in control of your data.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="bg-brand-50/50 border border-brand-200/50 rounded-xl p-4 flex items-start gap-3">
                    <ShieldIcon size={20} className="text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-brand-800">Default Private</p>
                      <p className="text-sm text-brand-600 mt-1">
                        Your journal entries are stored only on your device. Nothing is sent to our servers
                        unless you explicitly choose to enable cloud sync.
                      </p>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 p-4 rounded-xl border border-calm-200/80 bg-white/50 cursor-pointer hover:bg-white/80 transition-colors">
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

                  <label className="flex items-start gap-3 p-4 rounded-xl border border-calm-200/80 bg-white/50 cursor-pointer hover:bg-white/80 transition-colors">
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
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-3 mb-2">
                  <SparklesIcon size={20} className="text-brand-500" />
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">Your Safety</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-calm-900">
                  Safety Tools
                </h2>
                <p className="mt-2 text-calm-600">
                  Before we begin, here are the safety features available to you at all times:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="bg-safety-50/50 border border-safety-200/50 rounded-xl p-4">
                    <p className="font-medium text-safety-800">Crisis Button</p>
                    <p className="text-sm text-safety-600 mt-1">
                      The &quot;Need Help Now&quot; button is always visible. It connects you to crisis
                      services, safety planning, and grounding exercises.
                    </p>
                  </div>
                  <div className="bg-warmth-50/50 border border-warmth-200/50 rounded-xl p-4">
                    <p className="font-medium text-warmth-800">Quick Exit</p>
                    <p className="text-sm text-warmth-600 mt-1">
                      Press <strong>Shift + Escape</strong> at any time to immediately hide the app
                      with a blank screen. This is especially important if someone monitors your device.
                    </p>
                  </div>
                  <div className="bg-brand-50/50 border border-brand-200/50 rounded-xl p-4">
                    <p className="font-medium text-brand-800">Pause Anytime</p>
                    <p className="text-sm text-brand-600 mt-1">
                      Every session has pause points, grounding options, and the ability to exit.
                      You are never locked into content that feels too much.
                    </p>
                  </div>
                  <div className="bg-calm-50/50 border border-calm-200/50 rounded-xl p-4">
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
          <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex items-center justify-between relative z-10">
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
              <button onClick={handleComplete} className="btn-glow gap-1 text-base">
                Start Healing
                <ChevronRightIcon size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
