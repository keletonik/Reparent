'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/lib/store'
import { useHydrated } from '@/lib/useHydration'
import { ShieldIcon, HeartIcon, BrainIcon, AnchorIcon, CheckIcon, PhoneIcon, SparklesIcon, ReparentLogo, ReparentWordmark } from '@/components/ui/Icons'
import { CrisisModal } from '@/components/safety/CrisisModal'
import { QuickExit } from '@/components/safety/QuickExit'

const features = [
  { icon: ShieldIcon, title: 'Safety First', description: 'Built-in crisis resources, grounding tools, and quick exit. Your safety is never behind a paywall.' },
  { icon: HeartIcon, title: 'Attachment Science', description: 'Understand your attachment patterns using the latest research. Not a "type" — a spectrum you can shift.' },
  { icon: BrainIcon, title: 'CBT & DBT Skills', description: 'Evidence-based techniques from Cognitive Behavioural Therapy and Dialectical Behaviour Therapy.' },
  { icon: AnchorIcon, title: 'Grounding Tools', description: 'Breathing exercises, body scans, and somatic techniques for when emotions feel overwhelming.' },
  { icon: SparklesIcon, title: 'Self-Compassion', description: 'Replace self-criticism with self-kindness. Build a relationship with yourself that supports growth.' },
  { icon: PhoneIcon, title: 'Crisis Support', description: 'One-click access to crisis services in Australia, UK, US, Canada, and New Zealand.' },
]

const disclaimers = [
  'This is an educational program, not therapy or diagnosis',
  'It does not replace professional mental health care',
  'No EMDR or trauma processing is delivered through this app',
  'If you are in crisis, use the crisis support button',
  'Your journal data stays on your device by default',
  'If you are currently working with a therapist, we encourage you to share this program with them',
  'This program is not suitable for active psychosis, severe dissociative disorders, or acute suicidality — please seek professional support for these concerns',
]

export default function LandingPage() {
  const router = useRouter()
  const hydrated = useHydrated()
  const progress = useAppStore((s) => s.progress)
  const [consentChecked, setConsentChecked] = useState(false)

  useEffect(() => {
    if (hydrated && progress.onboardingCompleted) {
      router.push('/dashboard')
    }
  }, [hydrated, progress.onboardingCompleted, router])

  // Show a minimal loading state while store hydrates
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

  // Redirect is happening
  if (progress.onboardingCompleted) {
    return (
      <div className="min-h-screen bg-warmth-50 flex items-center justify-center">
        <div className="text-center">
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
      <div className="min-h-screen bg-warmth-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur border-b border-calm-100 sticky top-0 z-30">
          <div className="page-width py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ReparentLogo size={32} />
              <ReparentWordmark className="text-xl" />
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => useAppStore.getState().enterCrisisMode()}
                className="btn-safety gap-2 text-sm"
              >
                <PhoneIcon size={16} />
                <span className="hidden sm:inline">Need Help Now</span>
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="page-width py-16 sm:py-24 text-center relative overflow-hidden">
          {/* Subtle breathing circle background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] breathing-circle opacity-30 pointer-events-none" aria-hidden="true" />
          <div className="max-w-3xl mx-auto animate-fade-in relative">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-100 rounded-full">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse-gentle" />
              <span className="text-sm text-brand-700 font-medium">Evidence-Based &middot; Trauma-Informed &middot; Private by Default</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-calm-900 leading-tight">
              Healing Attachment.
              <br />
              <span className="text-brand-600">Finding Home.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-calm-600 max-w-2xl mx-auto leading-relaxed">
              An evidence-based learning program that teaches skills from attachment science,
              CBT, and DBT to help you understand your patterns, regulate your emotions,
              and build healthier relationships — starting with yourself.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="page-width py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-6 animate-slide-up">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-calm-900">{title}</h3>
                <p className="mt-2 text-calm-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What This Program Is Not */}
        <section className="page-width py-12">
          <div className="card-elevated p-8 max-w-2xl mx-auto">
            <h2 className="section-heading text-center">Before You Begin</h2>
            <p className="text-calm-600 mt-3 text-center">
              Please read and understand these important boundaries:
            </p>
            <ul className="mt-6 space-y-3">
              {disclaimers.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckIcon size={18} className="text-brand-500 mt-0.5 shrink-0" />
                  <span className="text-calm-700 text-sm">{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-calm-100 pt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  className="mt-1 w-5 h-5 rounded border-calm-300 text-brand-600 focus:ring-brand-500"
                />
                <span className="text-sm text-calm-700">
                  I understand that Reparent is an educational learning tool, not a substitute
                  for therapy, diagnosis, or crisis intervention. I agree to seek professional
                  help if I need clinical support.
                </span>
              </label>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/onboarding"
                className={`btn-primary text-lg px-8 py-4 ${!consentChecked ? 'opacity-50 pointer-events-none' : ''}`}
                aria-disabled={!consentChecked}
                tabIndex={consentChecked ? 0 : -1}
              >
                Begin Your Journey
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-calm-100 mt-12 bg-white/50">
          <div className="page-width py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <ReparentLogo size={20} />
                <span className="text-sm font-medium text-calm-700">Reparent</span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/resources" className="text-calm-500 hover:text-brand-600 transition-colors">Resources</Link>
                <Link href="/safety-plan" className="text-calm-500 hover:text-brand-600 transition-colors">Safety Plan</Link>
                <button
                  onClick={() => useAppStore.getState().enterCrisisMode()}
                  className="text-safety-600 hover:text-safety-700 transition-colors font-medium"
                >
                  Crisis Help
                </button>
              </div>
            </div>
            <p className="mt-4 text-xs text-calm-400 text-center sm:text-left">
              Reparent is an educational program grounded in attachment theory, CBT, DBT,
              and trauma-informed care. It is not a medical device, diagnostic tool, or therapy platform.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
