'use client'

import { useState } from 'react'
import type { Segment, InteractiveContent } from '@/lib/types'
import { SparklesIcon, CheckIcon } from '@/components/ui/Icons'
import { cn } from '@/lib/utils'

// Coping Menu Builder
function CopingMenuBuilder({ onComplete }: { onComplete: () => void }) {
  const categories = ['Grounding', 'Movement', 'Connection', 'Comfort', 'Distraction']
  const suggestions: Record<string, string[]> = {
    Grounding: ['5-4-3-2-1 senses exercise', 'Hold ice cubes', 'Splash cold water on face', 'Name 5 things you can see', 'Press feet into the floor'],
    Movement: ['Go for a short walk', 'Stretch for 5 minutes', 'Dance to a song', 'Do 10 jumping jacks', 'Yoga poses'],
    Connection: ['Call a trusted friend', 'Text someone you care about', 'Pet an animal', 'Write a letter', 'Visit a public space'],
    Comfort: ['Make a warm drink', 'Wrap in a blanket', 'Listen to calming music', 'Take a warm shower', 'Use a weighted blanket'],
    Distraction: ['Watch a favourite show', 'Play a puzzle game', 'Organise a drawer', 'Cook a meal', 'Read a book'],
  }
  const [selected, setSelected] = useState<Record<string, string[]>>({})

  const toggleItem = (category: string, item: string) => {
    setSelected((prev) => {
      const cat = prev[category] || []
      if (cat.includes(item)) {
        return { ...prev, [category]: cat.filter((i) => i !== item) }
      }
      return { ...prev, [category]: [...cat, item] }
    })
  }

  const totalSelected = Object.values(selected).reduce((sum, arr) => sum + arr.length, 0)

  return (
    <div className="space-y-4">
      {categories.map((cat) => (
        <div key={cat}>
          <h4 className="text-sm font-semibold text-calm-800 mb-2">{cat}</h4>
          <div className="flex flex-wrap gap-2">
            {suggestions[cat].map((item) => {
              const isSelected = (selected[cat] || []).includes(item)
              return (
                <button
                  key={item}
                  onClick={() => toggleItem(cat, item)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                    isSelected
                      ? 'bg-brand-600 text-white'
                      : 'bg-calm-50 text-calm-600 hover:bg-calm-100'
                  )}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between pt-4">
        <p className="text-xs text-calm-400">{totalSelected} items in your coping menu</p>
        <button onClick={onComplete} className="btn-primary">
          Save My Menu
        </button>
      </div>
    </div>
  )
}

// STOP Stepper
function StopStepper({ onComplete }: { onComplete: () => void }) {
  const steps = [
    { letter: 'S', label: 'Stop', prompt: 'Physically stop what you are doing. Put the phone down. Step back from the screen.', action: 'Take a moment to be completely still.' },
    { letter: 'T', label: 'Take a breath', prompt: 'Do 6 slow breaths. Inhale for 4 counts, exhale for 6 counts.', action: 'Focus only on your breathing for the next 30 seconds.' },
    { letter: 'O', label: 'Observe', prompt: 'Name what you are feeling. Notice what is happening in your body. Identify the thought driving the urge.', action: 'Say to yourself: "I notice I am feeling..." and "The thought I am having is..."' },
    { letter: 'P', label: 'Proceed mindfully', prompt: 'Choose one action that aligns with your values, not your panic. Ask: "What would the secure version of me do right now?"', action: 'Commit to one values-aligned action.' },
  ]
  const [currentStep, setCurrentStep] = useState(0)
  const [completed, setCompleted] = useState<Set<number>>(new Set())

  const markDone = () => {
    const newCompleted = new Set(completed)
    newCompleted.add(currentStep)
    setCompleted(newCompleted)
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2 mb-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className={cn(
              'flex-1 h-2 rounded-full transition-colors',
              completed.has(i) ? 'bg-brand-500' : i === currentStep ? 'bg-brand-300' : 'bg-calm-200'
            )}
          />
        ))}
      </div>
      <div className="bg-brand-50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{steps[currentStep].letter}</span>
          </div>
          <h4 className="text-lg font-semibold text-brand-900">{steps[currentStep].label}</h4>
        </div>
        <p className="text-brand-800 text-sm leading-relaxed">{steps[currentStep].prompt}</p>
        <div className="mt-3 bg-brand-100 rounded-lg p-3">
          <p className="text-xs text-brand-700 font-medium">{steps[currentStep].action}</p>
        </div>
      </div>
      <div className="flex gap-3">
        {currentStep > 0 && (
          <button onClick={() => setCurrentStep(currentStep - 1)} className="btn-ghost text-sm">
            Previous
          </button>
        )}
        {completed.has(currentStep) ? (
          currentStep < steps.length - 1 ? (
            <button onClick={() => setCurrentStep(currentStep + 1)} className="btn-primary text-sm">
              Next Step
            </button>
          ) : (
            <button onClick={onComplete} className="btn-primary">
              Complete STOP Practice
            </button>
          )
        ) : (
          <button onClick={markDone} className="btn-primary text-sm">
            I Have Done This
          </button>
        )}
      </div>
    </div>
  )
}

// Thought Record
function ThoughtRecord({ onComplete }: { onComplete: () => void }) {
  const [fields, setFields] = useState({
    trigger: '',
    thought: '',
    feeling: '',
    evidenceFor: '',
    evidenceAgainst: '',
    balanced: '',
  })

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-1">Trigger / Situation</label>
        <input className="input-field" placeholder="What happened?" value={fields.trigger} onChange={(e) => setFields({ ...fields, trigger: e.target.value })} />
      </div>
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-1">Automatic Thought</label>
        <input className="input-field" placeholder="What went through your mind?" value={fields.thought} onChange={(e) => setFields({ ...fields, thought: e.target.value })} />
      </div>
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-1">Feeling & Intensity (0-100)</label>
        <input className="input-field" placeholder="e.g., Anxiety 80, Sadness 60" value={fields.feeling} onChange={(e) => setFields({ ...fields, feeling: e.target.value })} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-calm-800 mb-1">Evidence For</label>
          <textarea className="textarea-field" rows={3} placeholder="What supports this thought?" value={fields.evidenceFor} onChange={(e) => setFields({ ...fields, evidenceFor: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-calm-800 mb-1">Evidence Against</label>
          <textarea className="textarea-field" rows={3} placeholder="What contradicts this thought?" value={fields.evidenceAgainst} onChange={(e) => setFields({ ...fields, evidenceAgainst: e.target.value })} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-1">Balanced Thought</label>
        <textarea className="textarea-field" rows={2} placeholder="A more balanced, realistic perspective..." value={fields.balanced} onChange={(e) => setFields({ ...fields, balanced: e.target.value })} />
      </div>
      <button onClick={onComplete} className="btn-primary">
        Save & Continue
      </button>
    </div>
  )
}

// Generic Interactive Container
function GenericInteractive({ instructions, onComplete }: { instructions: string; onComplete: () => void }) {
  const [responses, setResponses] = useState<string[]>([''])

  const addField = () => setResponses([...responses, ''])

  return (
    <div className="space-y-4">
      <p className="text-sm text-calm-700">{instructions}</p>
      {responses.map((r, i) => (
        <textarea
          key={i}
          className="textarea-field"
          rows={3}
          placeholder={`Your response ${i + 1}...`}
          value={r}
          onChange={(e) => {
            const newR = [...responses]
            newR[i] = e.target.value
            setResponses(newR)
          }}
        />
      ))}
      <div className="flex gap-3">
        <button onClick={addField} className="btn-ghost text-sm">
          + Add another response
        </button>
        <button onClick={onComplete} className="btn-primary">
          Continue
        </button>
      </div>
    </div>
  )
}

export function InteractiveSegment({
  segment,
  onComplete,
}: {
  segment: Segment
  onComplete: () => void
}) {
  const content = segment.content as InteractiveContent

  const renderComponent = () => {
    switch (content.component) {
      case 'CopingMenuBuilder':
        return <CopingMenuBuilder onComplete={onComplete} />
      case 'StopStepper':
        return <StopStepper onComplete={onComplete} />
      case 'ThoughtRecord':
        return <ThoughtRecord onComplete={onComplete} />
      default:
        return <GenericInteractive instructions={content.instructions} onComplete={onComplete} />
    }
  }

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
          <SparklesIcon size={20} className="text-brand-600" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-calm-900">{segment.title}</h2>
          <p className="text-xs text-calm-500">{content.instructions}</p>
        </div>
      </div>
      {renderComponent()}
    </div>
  )
}
