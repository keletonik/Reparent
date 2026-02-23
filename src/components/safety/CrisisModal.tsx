'use client'

import { useState } from 'react'
import { useAppStore } from '@/lib/store'
import { crisisContacts, groundingExercises } from '@/lib/crisis-data'
import { XIcon, PhoneIcon, ExternalLinkIcon, AlertTriangleIcon } from '@/components/ui/Icons'

type CrisisStep = 'triage' | 'immediate' | 'suicidal' | 'dv' | 'grounding' | 'contacts'

export function CrisisModal() {
  const crisisMode = useAppStore((s) => s.crisisMode)
  const exitCrisisMode = useAppStore((s) => s.exitCrisisMode)
  const [step, setStep] = useState<CrisisStep>('triage')
  const [selectedCountry, setSelectedCountry] = useState('Australia')
  const [groundingStep, setGroundingStep] = useState(0)
  const [selectedExercise, setSelectedExercise] = useState(0)

  if (!crisisMode) return null

  const countryContacts = crisisContacts.find((c) => c.country === selectedCountry)
  const exercise = groundingExercises[selectedExercise]

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Crisis support"
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-calm-100 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-lg font-semibold text-calm-900">
            {step === 'triage' && 'Are You Safe Right Now?'}
            {step === 'immediate' && 'Immediate Help'}
            {step === 'suicidal' && 'You Are Not Alone'}
            {step === 'dv' && 'Safety Resources'}
            {step === 'grounding' && 'Grounding Exercise'}
            {step === 'contacts' && 'Crisis Contacts'}
          </h2>
          <button
            onClick={() => { exitCrisisMode(); setStep('triage') }}
            className="p-2 text-calm-400 hover:text-calm-600 rounded-lg"
            aria-label="Close crisis support"
          >
            <XIcon size={20} />
          </button>
        </div>

        <div className="px-6 py-6">
          {step === 'triage' && (
            <div className="space-y-4">
              <p className="text-calm-700">
                Take a moment. We are here to help you find the right support.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => setStep('immediate')}
                  className="w-full text-left p-4 rounded-xl border-2 border-safety-200 hover:border-safety-400 bg-safety-50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangleIcon size={20} className="text-safety-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-safety-800">I am in immediate danger</p>
                      <p className="text-sm text-safety-600 mt-1">Someone is hurting me or I am at immediate risk</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => setStep('suicidal')}
                  className="w-full text-left p-4 rounded-xl border-2 border-warmth-200 hover:border-warmth-400 bg-warmth-50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <PhoneIcon size={20} className="text-warmth-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-warmth-800">I am having thoughts of suicide or self-harm</p>
                      <p className="text-sm text-warmth-600 mt-1">I need to talk to someone who can help</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => setStep('dv')}
                  className="w-full text-left p-4 rounded-xl border-2 border-calm-200 hover:border-calm-400 bg-calm-50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <ExternalLinkIcon size={20} className="text-calm-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-calm-800">I am experiencing domestic violence</p>
                      <p className="text-sm text-calm-600 mt-1">I need DV-specific support and safety planning</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => setStep('grounding')}
                  className="w-full text-left p-4 rounded-xl border-2 border-brand-200 hover:border-brand-400 bg-brand-50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-200 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-brand-800">I need help grounding myself</p>
                      <p className="text-sm text-brand-600 mt-1">I am distressed but not in immediate danger</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 'immediate' && (
            <div className="space-y-4">
              <div className="bg-safety-50 border border-safety-200 rounded-xl p-4">
                <p className="font-semibold text-safety-800 text-lg">Call emergency services now</p>
                <p className="text-safety-700 mt-2">
                  If you are in immediate physical danger, call your local emergency number:
                </p>
                <div className="mt-3 space-y-2">
                  <p className="font-mono text-2xl text-safety-800">000 (Australia)</p>
                  <p className="font-mono text-2xl text-safety-800">999 / 112 (UK)</p>
                  <p className="font-mono text-2xl text-safety-800">911 (US / Canada)</p>
                  <p className="font-mono text-2xl text-safety-800">111 (New Zealand)</p>
                </div>
              </div>
              <p className="text-sm text-calm-600">
                If you are worried about device safety, pressing Shift+Escape will quickly hide this app.
              </p>
              <button onClick={() => setStep('contacts')} className="btn-secondary w-full">
                View other crisis contacts
              </button>
              <button onClick={() => setStep('triage')} className="btn-ghost w-full">
                Back
              </button>
            </div>
          )}

          {step === 'suicidal' && (
            <div className="space-y-4">
              <p className="text-calm-700">
                What you are feeling is temporary, even when it does not feel that way.
                Please reach out to a crisis service — they are free, confidential, and available now.
              </p>
              <div className="space-y-3">
                {crisisContacts.map((country) => {
                  const suicideService = country.services.find((s) => s.type === 'suicide' || s.type === 'general')
                  if (!suicideService) return null
                  return (
                    <div key={country.country} className="bg-warmth-50 border border-warmth-200 rounded-xl p-4">
                      <p className="text-sm text-warmth-600 font-medium">{country.country}</p>
                      <p className="font-semibold text-warmth-900 text-lg">{suicideService.name}</p>
                      <p className="font-mono text-xl text-warmth-800 mt-1">{suicideService.phone}</p>
                      <p className="text-sm text-warmth-600 mt-1">{suicideService.description}</p>
                    </div>
                  )
                })}
              </div>
              <div className="bg-calm-50 border border-calm-200 rounded-xl p-4">
                <p className="text-sm text-calm-700">
                  <strong>Safety Planning:</strong> If you have a safety plan, now is the time to use it.
                  If you do not, consider creating one with a mental health professional.
                </p>
              </div>
              <button onClick={() => setStep('triage')} className="btn-ghost w-full">
                Back
              </button>
            </div>
          )}

          {step === 'dv' && (
            <div className="space-y-4">
              <div className="bg-calm-50 border border-calm-200 rounded-xl p-4">
                <p className="text-sm text-calm-700">
                  <strong>Device Safety:</strong> If someone monitors your phone or computer,
                  consider calling from a safe phone. Press <strong>Shift+Escape</strong> to quickly hide this app.
                  You may also want to clear your browser history after visiting this page.
                </p>
              </div>
              <div className="space-y-3">
                {crisisContacts.map((country) => {
                  const dvService = country.services.find((s) => s.type === 'dv')
                  if (!dvService) return null
                  return (
                    <div key={country.country} className="bg-white border border-calm-200 rounded-xl p-4">
                      <p className="text-sm text-calm-500 font-medium">{country.country}</p>
                      <p className="font-semibold text-calm-900">{dvService.name}</p>
                      <p className="font-mono text-lg text-calm-800 mt-1">{dvService.phone}</p>
                      <p className="text-sm text-calm-600 mt-1">{dvService.description}</p>
                      {dvService.url && (
                        <a
                          href={dvService.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-brand-600 hover:text-brand-700 mt-2"
                        >
                          Visit website <ExternalLinkIcon size={14} />
                        </a>
                      )}
                    </div>
                  )
                })}
              </div>
              <button onClick={() => setStep('triage')} className="btn-ghost w-full">
                Back
              </button>
            </div>
          )}

          {step === 'grounding' && (
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                {groundingExercises.map((ex, i) => (
                  <button
                    key={ex.id}
                    onClick={() => { setSelectedExercise(i); setGroundingStep(0) }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedExercise === i
                        ? 'bg-brand-600 text-white'
                        : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
                    }`}
                  >
                    {ex.title}
                  </button>
                ))}
              </div>
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-6">
                <h3 className="font-semibold text-brand-900 text-lg">{exercise.title}</h3>
                <p className="text-brand-700 mt-1 text-sm">{exercise.description}</p>
                <div className="mt-4 space-y-3">
                  {exercise.steps.map((s, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                        i === groundingStep
                          ? 'bg-brand-100 border border-brand-300'
                          : i < groundingStep
                          ? 'opacity-50'
                          : 'opacity-70'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        i <= groundingStep ? 'bg-brand-600 text-white' : 'bg-brand-200 text-brand-600'
                      }`}>
                        {i + 1}
                      </div>
                      <p className="text-brand-800 text-sm">{s}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  {groundingStep > 0 && (
                    <button
                      onClick={() => setGroundingStep(groundingStep - 1)}
                      className="btn-ghost text-sm"
                    >
                      Previous
                    </button>
                  )}
                  {groundingStep < exercise.steps.length - 1 && (
                    <button
                      onClick={() => setGroundingStep(groundingStep + 1)}
                      className="btn-primary text-sm"
                    >
                      Next Step
                    </button>
                  )}
                  {groundingStep === exercise.steps.length - 1 && (
                    <button
                      onClick={() => { exitCrisisMode(); setStep('triage') }}
                      className="btn-primary text-sm"
                    >
                      I Feel Better
                    </button>
                  )}
                </div>
              </div>
              <button onClick={() => setStep('contacts')} className="btn-secondary w-full text-sm">
                I still need help — show me crisis contacts
              </button>
              <button onClick={() => setStep('triage')} className="btn-ghost w-full text-sm">
                Back
              </button>
            </div>
          )}

          {step === 'contacts' && (
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                {crisisContacts.map((c) => (
                  <button
                    key={c.country}
                    onClick={() => setSelectedCountry(c.country)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedCountry === c.country
                        ? 'bg-brand-600 text-white'
                        : 'bg-calm-50 text-calm-700 hover:bg-calm-100'
                    }`}
                  >
                    {c.country}
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                {countryContacts?.services.map((service) => (
                  <div key={service.name} className="bg-white border border-calm-200 rounded-xl p-4">
                    <div className="flex items-center gap-2">
                      <span className={`badge text-xs ${
                        service.type === 'dv' ? 'bg-safety-100 text-safety-700' :
                        service.type === 'suicide' ? 'bg-warmth-100 text-warmth-700' :
                        service.type === 'youth' ? 'bg-brand-100 text-brand-700' :
                        'bg-calm-100 text-calm-700'
                      }`}>
                        {service.type === 'dv' ? 'DV Support' :
                         service.type === 'suicide' ? 'Crisis' :
                         service.type === 'youth' ? 'Youth' :
                         'General'}
                      </span>
                    </div>
                    <p className="font-semibold text-calm-900 mt-2">{service.name}</p>
                    <p className="font-mono text-lg text-calm-800 mt-1">{service.phone}</p>
                    <p className="text-sm text-calm-600 mt-1">{service.description}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => setStep('triage')} className="btn-ghost w-full">
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
