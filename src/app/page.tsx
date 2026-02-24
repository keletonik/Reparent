'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/lib/store'
import { useHydrated } from '@/lib/useHydration'
import { ShieldIcon, HeartIcon, BrainIcon, AnchorIcon, CheckIcon, PhoneIcon, SparklesIcon, ReparentLogo, ReparentWordmark, CompassIcon, FlowerIcon } from '@/components/ui/Icons'
import { CrisisModal } from '@/components/safety/CrisisModal'
import { QuickExit } from '@/components/safety/QuickExit'

const features = [
  { icon: ShieldIcon, title: 'Safety First', description: 'Built-in crisis resources, grounding tools, and quick exit. Your safety is never behind a paywall.' },
  { icon: HeartIcon, title: 'Attachment Science', description: 'Understand your attachment patterns using the latest research. Not a "type" — a spectrum you can shift.' },
  { icon: BrainIcon, title: 'CBT & DBT Skills', description: 'Evidence-based techniques from Cognitive Behavioural Therapy and Dialectical Behaviour Therapy.' },
  { icon: AnchorIcon, title: 'Somatic Healing', description: 'Body-based approaches including breathing, grounding, and bilateral processing for deep nervous system regulation.' },
  { icon: SparklesIcon, title: 'Self-Compassion', description: 'Replace self-criticism with self-kindness. Build a relationship with yourself that supports growth.' },
  { icon: PhoneIcon, title: 'Crisis Support', description: 'One-click access to crisis services in Australia, UK, US, Canada, and New Zealand.' },
]

const healingModalities = [
  { name: 'Internal Family Systems', abbr: 'IFS' },
  { name: 'Somatic Experiencing', abbr: 'SE' },
  { name: 'Polyvagal Theory', abbr: 'PVT' },
  { name: 'Schema Therapy', abbr: 'ST' },
  { name: 'Compassion-Focused', abbr: 'CFT' },
  { name: 'Narrative Therapy', abbr: 'NT' },
]

const testimonialQuotes = [
  { text: 'I finally understand why I react the way I do in relationships. This program gave me the map I never had.', attribution: 'Attachment healing participant' },
  { text: 'The inner child work changed everything. For the first time, I could be gentle with the parts of me I used to hate.', attribution: 'Parts work participant' },
  { text: 'Learning about my nervous system was like getting the user manual for my body that no one ever gave me.', attribution: 'Somatic healing participant' },
]

const phases = [
  { num: '01', title: 'Safety & Stabilization', desc: 'Build your foundation of resources, grounding skills, and a personalized safety plan.', icon: ShieldIcon, color: 'brand' as const },
  { num: '02', title: 'Understanding & Mapping', desc: 'Illuminate the patterns, beliefs, and survival strategies that shaped who you are.', icon: CompassIcon, color: 'calm' as const },
  { num: '03', title: 'Processing & Healing', desc: 'Gently process stuck emotions through parts work, somatic experiencing, and compassion.', icon: HeartIcon, color: 'warmth' as const },
  { num: '04', title: 'Integration & Growth', desc: 'Build secure relating skills, author your new narrative, and step into your becoming.', icon: FlowerIcon, color: 'brand' as const },
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

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="orb orb-brand w-96 h-96 -top-48 -right-24 animate-pulse-slow" />
      <div className="orb orb-warmth w-80 h-80 top-1/3 -left-20 animate-float" />
      <div className="orb orb-calm w-72 h-72 bottom-20 right-10 animate-float-delayed" />
    </div>
  )
}

function HeroSection() {
  const [visibleWords, setVisibleWords] = useState(0)
  const words = ['Healing', 'Attachment.', 'Finding', 'Home.']

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleWords(prev => prev < words.length ? prev + 1 : prev)
    }, 300)
    return () => clearInterval(timer)
  }, [words.length])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <FloatingOrbs />
      <div className="bg-mesh-hero absolute inset-0" />

      <div className="relative z-10 page-width py-20 sm:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Modality pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
            {healingModalities.map((mod) => (
              <span
                key={mod.abbr}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white/60 backdrop-blur-sm border border-calm-200/50 text-calm-600"
              >
                {mod.name}
              </span>
            ))}
          </div>

          {/* Main heading with animated words */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-tight tracking-tight">
            <span className="block text-calm-900">
              {words.slice(0, 2).map((word, i) => (
                <span
                  key={i}
                  className={`inline-block transition-all duration-700 ${
                    i < visibleWords ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } ${i === 0 ? 'mr-4' : ''}`}
                >
                  {word}
                </span>
              ))}
            </span>
            <span className="block mt-2">
              {words.slice(2).map((word, i) => (
                <span
                  key={i + 2}
                  className={`inline-block transition-all duration-700 gradient-text ${
                    i + 2 < visibleWords ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } ${i === 0 ? 'mr-4' : ''}`}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-calm-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
            A deeply immersive healing program integrating attachment science, Internal Family Systems,
            somatic experiencing, and 10+ evidence-based modalities to help you heal from the inside out.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
            <a href="#begin" className="btn-glow group">
              Begin Your Healing
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <a href="#how-it-works" className="btn-secondary gap-2">
              <CompassIcon size={18} />
              How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '1.8s', animationFillMode: 'both' }}>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">12+</p>
              <p className="text-sm text-calm-500 mt-1">Modalities</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">26</p>
              <p className="text-sm text-calm-500 mt-1">Sessions</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">4</p>
              <p className="text-sm text-calm-500 mt-1">Phases</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-calm-300 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-calm-400 rounded-full animate-pulse-gentle" />
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="bg-mesh-soft absolute inset-0" />
      <div className="relative page-width">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-brand-600 bg-brand-50 rounded-full mb-4">
            The Healing Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-calm-900">
            Four Phases of <span className="gradient-text">Transformation</span>
          </h2>
          <p className="mt-4 text-calm-600 text-lg">
            A carefully structured path that meets you where you are and guides you toward earned security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {phases.map((phase) => (
            <div
              key={phase.num}
              className="card-glass p-8 relative overflow-hidden hover-lift"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-[0.07] ${
                phase.color === 'brand' ? 'bg-brand-500' :
                phase.color === 'calm' ? 'bg-calm-500' : 'bg-warmth-500'
              }`} />

              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`text-sm font-bold tracking-wider ${
                    phase.color === 'brand' ? 'text-brand-400' :
                    phase.color === 'calm' ? 'text-calm-400' : 'text-warmth-400'
                  }`}>
                    PHASE {phase.num}
                  </span>
                  <div className="h-px flex-1 bg-calm-200/50" />
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    phase.color === 'brand' ? 'bg-brand-50' :
                    phase.color === 'calm' ? 'bg-calm-50' : 'bg-warmth-50'
                  }`}>
                    <phase.icon size={20} className={
                      phase.color === 'brand' ? 'text-brand-600' :
                      phase.color === 'calm' ? 'text-calm-600' : 'text-warmth-600'
                    } />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-calm-900">{phase.title}</h3>
                <p className="mt-2 text-calm-600 leading-relaxed">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32 bg-white/50">
      <div className="page-width">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-warmth-600 bg-warmth-50 rounded-full mb-4">
            Built for Healing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-calm-900">
            Everything You Need to <span className="gradient-text">Heal</span>
          </h2>
          <p className="mt-4 text-calm-600 text-lg">
            Grounded in science. Designed with compassion. Built for real transformation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="card p-7 hover-lift">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-50 to-warmth-50 rounded-2xl flex items-center justify-center mb-5 shadow-inner-glow">
                <Icon size={26} className="text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-calm-900">{title}</h3>
              <p className="mt-2 text-calm-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="bg-mesh-hero absolute inset-0" />
      <div className="relative page-width">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-calm-600 bg-calm-50 rounded-full mb-4">
            Voices of Healing
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-calm-900">
            Real Stories of <span className="gradient-text">Transformation</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonialQuotes.map((quote, i) => (
            <div key={i} className="card-glass p-8 hover-lift">
              <div className="text-brand-200 text-6xl font-serif leading-none mb-4">&ldquo;</div>
              <p className="text-calm-700 italic leading-relaxed">{quote.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-200 to-warmth-200" />
                <p className="text-sm text-calm-500">{quote.attribution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ImmersiveExperienceSection() {
  return (
    <section className="py-24 sm:py-32 bg-calm-950 text-white relative overflow-hidden">
      <div className="bg-mesh-dark absolute inset-0" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="particle w-2 h-2 bg-brand-400 top-[20%] left-[15%] animate-float" />
        <div className="particle w-1.5 h-1.5 bg-warmth-400 top-[40%] right-[20%] animate-float-delayed" />
        <div className="particle w-2.5 h-2.5 bg-brand-300 bottom-[30%] left-[40%] animate-pulse-slow" />
        <div className="particle w-1 h-1 bg-warmth-300 top-[60%] left-[70%] animate-float" />
      </div>

      <div className="relative page-width">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-brand-300 bg-brand-900/50 rounded-full mb-6 border border-brand-800/50">
            The Deep Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
            An Immersive Healing Experience{' '}
            <span className="bg-gradient-to-r from-brand-300 to-warmth-400 bg-clip-text text-transparent">
              Like Nothing Else
            </span>
          </h2>
          <p className="mt-6 text-calm-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Guided visualizations. Inner child work. Parts dialogues. Somatic processing.
            Body scans. Grief rituals. Future self meetings. This is not a course.
            This is an experience designed to reach the places where healing actually lives.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-4 text-left">
            {[
              { title: 'Inner Child Meeting', desc: 'Connect with the younger version of you who still needs your love.' },
              { title: 'Parts Dialogue', desc: 'Speak with the protectors who have been working so hard to keep you safe.' },
              { title: 'Emotional Alchemy', desc: 'Transform stuck emotions through somatic and imaginative processing.' },
              { title: 'Future Self Vision', desc: 'Meet the person you are becoming and receive their wisdom.' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-calm-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ConsentSection() {
  const [consentChecked, setConsentChecked] = useState(false)

  return (
    <section id="begin" className="py-24 sm:py-32">
      <div className="page-width">
        <div className="card-elevated p-8 sm:p-12 max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-brand-50 to-transparent rounded-bl-full" />

          <div className="relative">
            <div className="text-center">
              <ReparentLogo size={48} className="mx-auto" />
              <h2 className="mt-4 text-2xl sm:text-3xl font-serif font-bold text-calm-900">Before You Begin</h2>
              <p className="text-calm-600 mt-3">
                Please read and understand these important boundaries:
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {disclaimers.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon size={12} className="text-brand-500" />
                  </div>
                  <span className="text-calm-700 text-sm">{d}</span>
                </li>
              ))}
            </ul>

            <div className="divider-gradient my-8" />

            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-calm-300 text-brand-600 focus:ring-brand-500"
              />
              <span className="text-sm text-calm-700 group-hover:text-calm-900 transition-colors">
                I understand that Reparent is an educational healing tool, not a substitute
                for therapy, diagnosis, or crisis intervention. I agree to seek professional
                help if I need clinical support.
              </span>
            </label>

            <div className="mt-8 text-center">
              <Link
                href="/onboarding"
                className={`btn-glow ${!consentChecked ? 'opacity-40 pointer-events-none saturate-0' : ''}`}
                aria-disabled={!consentChecked}
                tabIndex={consentChecked ? 0 : -1}
              >
                Begin Your Healing Journey
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function LandingPage() {
  const router = useRouter()
  const hydrated = useHydrated()
  const progress = useAppStore((s) => s.progress)

  useEffect(() => {
    if (hydrated && progress.onboardingCompleted) {
      router.push('/dashboard')
    }
  }, [hydrated, progress.onboardingCompleted, router])

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

  if (progress.onboardingCompleted) {
    return (
      <div className="min-h-screen bg-warmth-50 flex items-center justify-center">
        <div className="text-center">
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
      <div className="min-h-screen bg-warmth-50">
        {/* Header */}
        <header className="bg-white/60 backdrop-blur-md border-b border-calm-100/50 sticky top-0 z-30">
          <div className="page-width py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ReparentLogo size={32} />
              <ReparentWordmark className="text-xl" />
            </div>
            <div className="flex items-center gap-3">
              <Link href="/login" className="btn-ghost text-sm">
                Log In
              </Link>
              <Link href="/signup" className="btn-primary text-sm py-2">
                Sign Up
              </Link>
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

        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ImmersiveExperienceSection />
        <TestimonialsSection />
        <ConsentSection />

        {/* Footer */}
        <footer className="border-t border-calm-100/50 bg-white/30 backdrop-blur-sm">
          <div className="page-width py-12">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2.5">
                <ReparentLogo size={28} />
                <ReparentWordmark className="text-lg" />
              </div>
              <p className="text-sm text-calm-400 text-center max-w-lg">
                Reparent is an educational program grounded in attachment theory, IFS, somatic experiencing,
                CBT, DBT, and trauma-informed care. It is not a medical device, diagnostic tool, or therapy platform.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/resources" className="text-calm-500 hover:text-brand-600 transition-colors">Resources</Link>
                <div className="w-1 h-1 bg-calm-300 rounded-full" />
                <Link href="/safety-plan" className="text-calm-500 hover:text-brand-600 transition-colors">Safety Plan</Link>
                <div className="w-1 h-1 bg-calm-300 rounded-full" />
                <button
                  onClick={() => useAppStore.getState().enterCrisisMode()}
                  className="text-safety-500 hover:text-safety-600 transition-colors font-medium"
                >
                  Crisis Support
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
