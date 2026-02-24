'use client'

import { useState } from 'react'
import { HeartIcon, ShieldIcon, CompassIcon, SparklesIcon, FlowerIcon, AnchorIcon, BrainIcon } from '@/components/ui/Icons'
import { TherapeuticChat } from '@/components/healing/TherapeuticChat'
import { HEALING_PROGRAM_PHASES, GUIDED_MEDITATIONS, BREATHING_EXERCISES } from '@/lib/therapist-prompt'
import { cn } from '@/lib/utils'

type Tab = 'chat' | 'program' | 'meditations' | 'breathing'

const phaseIcons: Record<string, typeof HeartIcon> = {
  shield: ShieldIcon,
  compass: CompassIcon,
  heart: HeartIcon,
  sparkles: SparklesIcon,
}

const phaseColors: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  brand: { bg: 'bg-brand-50', text: 'text-brand-700', border: 'border-brand-200', gradient: 'from-brand-500 to-brand-600' },
  calm: { bg: 'bg-calm-50', text: 'text-calm-700', border: 'border-calm-200', gradient: 'from-calm-500 to-calm-600' },
  warmth: { bg: 'bg-warmth-50', text: 'text-warmth-700', border: 'border-warmth-200', gradient: 'from-warmth-500 to-warmth-600' },
}

function BreathingExercise({ exercise }: { exercise: typeof BREATHING_EXERCISES[0] }) {
  const [active, setActive] = useState(false)
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'holdAfter'>('inhale')
  const [count, setCount] = useState(0)
  const [round, setRound] = useState(1)

  const startBreathing = () => {
    setActive(true)
    setPhase('inhale')
    setCount(exercise.pattern.inhale)
    setRound(1)

    const runCycle = (currentRound: number) => {
      let delay = 0
      const steps: { p: typeof phase; d: number }[] = [
        { p: 'inhale', d: exercise.pattern.inhale },
        { p: 'hold', d: exercise.pattern.hold },
        { p: 'exhale', d: exercise.pattern.exhale },
      ]
      if (exercise.pattern.holdAfter) {
        steps.push({ p: 'holdAfter', d: exercise.pattern.holdAfter })
      }

      steps.forEach((step) => {
        if (step.d > 0) {
          setTimeout(() => {
            setPhase(step.p)
            setCount(step.d)
          }, delay * 1000)

          for (let i = step.d; i > 0; i--) {
            setTimeout(() => setCount(i), (delay + (step.d - i)) * 1000)
          }
          delay += step.d
        }
      })

      if (currentRound < exercise.rounds) {
        setTimeout(() => runCycle(currentRound + 1), delay * 1000)
        setTimeout(() => setRound(currentRound + 1), delay * 1000)
      } else {
        setTimeout(() => setActive(false), delay * 1000)
      }
    }

    runCycle(1)
  }

  const phaseLabels: Record<string, string> = {
    inhale: 'Breathe In',
    hold: 'Hold',
    exhale: 'Breathe Out',
    holdAfter: 'Hold',
  }

  const phaseScale: Record<string, string> = {
    inhale: 'scale-110',
    hold: 'scale-110',
    exhale: 'scale-100',
    holdAfter: 'scale-100',
  }

  return (
    <div className="card p-6 sm:p-8">
      <h3 className="text-lg font-serif font-bold text-calm-900">{exercise.title}</h3>
      <p className="text-sm text-calm-600 mt-1">{exercise.description}</p>

      {active ? (
        <div className="mt-8 flex flex-col items-center">
          {/* Breathing circle */}
          <div className={`relative w-48 h-48 flex items-center justify-center transition-transform duration-1000 ease-in-out ${phaseScale[phase]}`}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-200 to-brand-100 opacity-30 animate-breathe" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-brand-300 to-brand-200 opacity-40" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-300 opacity-30" />
            <div className="relative text-center">
              <p className="text-3xl font-bold text-brand-700">{count}</p>
              <p className="text-sm font-medium text-brand-600 mt-1">{phaseLabels[phase]}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-calm-500">Round {round} of {exercise.rounds}</p>
        </div>
      ) : (
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-4 text-sm text-calm-500">
            <span>In: {exercise.pattern.inhale}s</span>
            <span>Hold: {exercise.pattern.hold}s</span>
            <span>Out: {exercise.pattern.exhale}s</span>
            {exercise.pattern.holdAfter ? <span>Hold: {exercise.pattern.holdAfter}s</span> : null}
          </div>
          <button onClick={startBreathing} className="btn-primary text-sm">
            Begin
          </button>
        </div>
      )}
    </div>
  )
}

function MeditationCard({ meditation }: { meditation: typeof GUIDED_MEDITATIONS[0] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 hover:bg-calm-50/50 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-serif font-bold text-calm-900">{meditation.title}</h3>
            <p className="text-sm text-calm-600 mt-1">{meditation.description}</p>
            <span className="inline-block mt-2 text-xs text-calm-400 bg-calm-50 px-2.5 py-1 rounded-full">{meditation.duration}</span>
          </div>
          <div className={`transform transition-transform duration-200 shrink-0 mt-1 ${expanded ? 'rotate-90' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-calm-400">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </button>
      {expanded && (
        <div className="px-6 pb-6 border-t border-calm-100/50 pt-4 animate-fade-in">
          <div className="bg-brand-50/30 rounded-xl p-6 border border-brand-100/30">
            <div className="prose prose-sm text-calm-700 leading-relaxed whitespace-pre-line">
              {meditation.script}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ProgramPhaseCard({ phase }: { phase: typeof HEALING_PROGRAM_PHASES[0] }) {
  const [expanded, setExpanded] = useState(false)
  const PhaseIcon = phaseIcons[phase.icon] || HeartIcon
  const colors = phaseColors[phase.color] || phaseColors.brand

  const sessionTypeStyles: Record<string, string> = {
    guided: 'session-badge-guided',
    interactive: 'session-badge-interactive',
    visualization: 'session-badge-visualization',
    somatic: 'session-badge-somatic',
    psychoeducation: 'session-badge-psychoeducation',
  }

  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 sm:p-8 hover:bg-calm-50/30 transition-colors"
      >
        <div className="flex items-start gap-5">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shrink-0 shadow-sm`}>
            <PhaseIcon size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-calm-400 uppercase tracking-wider">{phase.subtitle}</p>
            <h3 className="text-xl font-serif font-bold text-calm-900 mt-1">{phase.title}</h3>
            <p className="text-sm text-calm-600 mt-2 leading-relaxed">{phase.description}</p>
            <div className="mt-3 flex items-center gap-3 text-xs text-calm-400">
              <span>{phase.sessions.length} sessions</span>
              <span className="w-1 h-1 bg-calm-300 rounded-full" />
              <span>{phase.duration}</span>
            </div>
          </div>
          <div className={`transform transition-transform duration-200 shrink-0 mt-2 ${expanded ? 'rotate-90' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-calm-400">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </button>
      {expanded && (
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-calm-100/50 pt-4 animate-fade-in">
          <div className="space-y-3">
            {phase.sessions.map((session, i) => (
              <div
                key={session.id}
                className="flex items-start gap-4 p-4 rounded-xl bg-calm-50/50 border border-calm-100/30 hover:bg-calm-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-calm-200/50 flex items-center justify-center shrink-0 text-xs font-bold text-calm-400">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-calm-900 text-sm">{session.title}</p>
                  <p className="text-xs text-calm-500 mt-0.5">{session.description}</p>
                  <span className={cn(
                    'inline-block mt-2 text-xs px-2 py-0.5 rounded-full border',
                    sessionTypeStyles[session.type] || 'bg-calm-50 text-calm-600 border-calm-200'
                  )}>
                    {session.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function HealingPage() {
  const [activeTab, setActiveTab] = useState<Tab>('chat')

  const tabs = [
    { id: 'chat' as Tab, label: 'Therapeutic Chat', icon: HeartIcon },
    { id: 'program' as Tab, label: 'Healing Program', icon: SparklesIcon },
    { id: 'meditations' as Tab, label: 'Guided Meditations', icon: FlowerIcon },
    { id: 'breathing' as Tab, label: 'Breathing', icon: AnchorIcon },
  ]

  return (
    <div className="page-width py-6 sm:py-8 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-calm-900 to-warmth-900 p-8 sm:p-10 text-white">
        <div className="absolute inset-0 bg-mesh-dark opacity-60" />
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-warmth-500/15 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <HeartIcon size={18} className="text-brand-300" />
            <span className="text-xs font-semibold text-brand-300 uppercase tracking-wider">Immersive Healing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold">Your Healing Space</h1>
          <p className="mt-2 text-calm-300 max-w-xl">
            A deeply attuned space integrating 12+ evidence-based modalities. Chat with your therapeutic guide,
            follow the structured healing program, or explore guided meditations and breathing exercises.
          </p>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap',
              activeTab === tab.id
                ? 'bg-brand-600 text-white shadow-sm'
                : 'bg-white/60 backdrop-blur-sm text-calm-600 hover:bg-white hover:text-calm-800 border border-calm-200/50'
            )}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'chat' && (
        <div className="animate-fade-in">
          <TherapeuticChat />
        </div>
      )}

      {activeTab === 'program' && (
        <div className="space-y-6 animate-fade-in">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-calm-900">The Healing Program</h2>
            <p className="mt-2 text-calm-600">
              A 4-phase, 26-session structured healing journey designed to take you from stabilization
              through deep processing to integration and growth.
            </p>
          </div>

          {/* Timeline visualization */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-7 top-10 bottom-10 w-px bg-gradient-to-b from-brand-300 via-calm-300 to-warmth-300 hidden sm:block" />

            <div className="space-y-6">
              {HEALING_PROGRAM_PHASES.map((phase) => (
                <ProgramPhaseCard key={phase.id} phase={phase} />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'meditations' && (
        <div className="space-y-6 animate-fade-in">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-calm-900">Guided Meditations</h2>
            <p className="mt-2 text-calm-600">
              Immersive, therapeutic-grade visualizations designed to reach the places where healing lives.
              Find a quiet space, settle in, and let the words guide you.
            </p>
          </div>
          <div className="space-y-4">
            {GUIDED_MEDITATIONS.map((meditation) => (
              <MeditationCard key={meditation.id} meditation={meditation} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'breathing' && (
        <div className="space-y-6 animate-fade-in">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-calm-900">Breathing Exercises</h2>
            <p className="mt-2 text-calm-600">
              Your breath is the fastest pathway to your nervous system. These exercises are designed
              to help you regulate, calm, and ground yourself in moments of activation.
            </p>
          </div>

          <div className="bg-brand-50/30 border border-brand-100/50 rounded-xl p-5 text-center">
            <BrainIcon size={20} className="text-brand-600 mx-auto mb-2" />
            <p className="text-sm text-brand-700">
              <strong>Tip:</strong> Extended exhales activate your parasympathetic nervous system.
              If you only do one thing, make your exhale longer than your inhale.
            </p>
          </div>

          <div className="grid gap-4">
            {BREATHING_EXERCISES.map((exercise) => (
              <BreathingExercise key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
