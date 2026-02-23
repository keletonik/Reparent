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

// Thought Record (CBT)
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

// Attachment Reflection (Dimensional Model)
function AttachmentReflection({ onComplete }: { onComplete: () => void }) {
  const questions = [
    { id: 'abandon', text: 'I worry that my partner will stop loving me or leave', dimension: 'anxiety' as const },
    { id: 'reassurance', text: 'I need a lot of reassurance that I am loved', dimension: 'anxiety' as const },
    { id: 'preoccupied', text: 'I think about my relationships a lot more than other things', dimension: 'anxiety' as const },
    { id: 'independent', text: 'I prefer not to depend on my partner emotionally', dimension: 'avoidance' as const },
    { id: 'closeness', text: 'I feel uncomfortable when a partner wants to be very close', dimension: 'avoidance' as const },
    { id: 'selfsufficient', text: 'I try to handle things on my own rather than asking for help', dimension: 'avoidance' as const },
  ]
  const labels = ['Not at all', 'A little', 'Moderately', 'Quite a bit', 'Very much']
  const [scores, setScores] = useState<Record<string, number>>({})

  const allAnswered = questions.every((q) => scores[q.id] !== undefined)

  const anxietyAvg = allAnswered
    ? questions.filter((q) => q.dimension === 'anxiety').reduce((sum, q) => sum + (scores[q.id] || 0), 0) / 3
    : 0
  const avoidanceAvg = allAnswered
    ? questions.filter((q) => q.dimension === 'avoidance').reduce((sum, q) => sum + (scores[q.id] || 0), 0) / 3
    : 0

  return (
    <div className="space-y-5">
      <p className="text-sm text-calm-600">Rate how much each statement describes you in close relationships. Remember: this is a reflection tool, not a diagnosis. Patterns exist on a spectrum and can change.</p>
      {questions.map((q) => (
        <div key={q.id} className="bg-calm-50 rounded-xl p-4">
          <p className="text-sm font-medium text-calm-800 mb-3">{q.text}</p>
          <div className="flex flex-wrap gap-2">
            {labels.map((label, i) => (
              <button
                key={i}
                onClick={() => setScores({ ...scores, [q.id]: i })}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                  scores[q.id] === i ? 'bg-brand-600 text-white' : 'bg-white text-calm-600 hover:bg-calm-100 border border-calm-200'
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ))}
      {allAnswered && (
        <div className="bg-brand-50 rounded-xl p-5 space-y-3">
          <h4 className="text-sm font-semibold text-brand-900">Your Reflection</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-brand-700 font-medium mb-1">Attachment Anxiety</p>
              <div className="h-3 bg-brand-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-500 rounded-full transition-all" style={{ width: `${(anxietyAvg / 4) * 100}%` }} />
              </div>
              <p className="text-xs text-brand-600 mt-1">{anxietyAvg < 2 ? 'Lower anxiety — you tend to feel relatively secure' : anxietyAvg < 3 ? 'Moderate anxiety — some fear of abandonment' : 'Higher anxiety — significant concern about rejection/loss'}</p>
            </div>
            <div>
              <p className="text-xs text-brand-700 font-medium mb-1">Attachment Avoidance</p>
              <div className="h-3 bg-brand-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-500 rounded-full transition-all" style={{ width: `${(avoidanceAvg / 4) * 100}%` }} />
              </div>
              <p className="text-xs text-brand-600 mt-1">{avoidanceAvg < 2 ? 'Lower avoidance — you are comfortable with closeness' : avoidanceAvg < 3 ? 'Moderate avoidance — some discomfort with dependence' : 'Higher avoidance — preference for emotional independence'}</p>
            </div>
          </div>
          <p className="text-xs text-brand-700 mt-2">These patterns are not fixed. Through this program, you will learn skills to move toward greater security on both dimensions.</p>
        </div>
      )}
      <button onClick={onComplete} className={cn('btn-primary', !allAnswered && 'opacity-50')} disabled={!allAnswered}>
        Continue
      </button>
    </div>
  )
}

// Trigger Mapper
function TriggerMapper({ onComplete }: { onComplete: () => void }) {
  const [triggers, setTriggers] = useState([
    { trigger: '', emotion: '', urge: '', usualAction: '', preferredAction: '' },
  ])

  const addRow = () => {
    setTriggers([...triggers, { trigger: '', emotion: '', urge: '', usualAction: '', preferredAction: '' }])
  }

  const update = (index: number, field: string, value: string) => {
    const updated = [...triggers]
    updated[index] = { ...updated[index], [field]: value }
    setTriggers(updated)
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-calm-600">Map your common attachment triggers. For each one, trace the chain from trigger to behaviour, then identify what you would prefer to do instead.</p>
      {triggers.map((t, i) => (
        <div key={i} className="bg-calm-50 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-calm-500">Trigger {i + 1}</span>
            {triggers.length > 1 && (
              <button onClick={() => setTriggers(triggers.filter((_, j) => j !== i))} className="text-xs text-calm-400 hover:text-safety-500">Remove</button>
            )}
          </div>
          <input className="input-field text-sm" placeholder="What triggers you? (e.g., partner not texting back)" value={t.trigger} onChange={(e) => update(i, 'trigger', e.target.value)} />
          <div className="grid sm:grid-cols-2 gap-3">
            <input className="input-field text-sm" placeholder="What emotion comes up?" value={t.emotion} onChange={(e) => update(i, 'emotion', e.target.value)} />
            <input className="input-field text-sm" placeholder="What urge do you feel?" value={t.urge} onChange={(e) => update(i, 'urge', e.target.value)} />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-calm-500 mb-1">What I usually do</label>
              <input className="input-field text-sm" placeholder="e.g., check their social media" value={t.usualAction} onChange={(e) => update(i, 'usualAction', e.target.value)} />
            </div>
            <div>
              <label className="block text-xs text-brand-600 mb-1">What I would prefer to do</label>
              <input className="input-field text-sm" placeholder="e.g., go for a walk, call a friend" value={t.preferredAction} onChange={(e) => update(i, 'preferredAction', e.target.value)} />
            </div>
          </div>
        </div>
      ))}
      <div className="flex gap-3">
        <button onClick={addRow} className="btn-ghost text-sm">+ Add another trigger</button>
        <button onClick={onComplete} className="btn-primary">Save & Continue</button>
      </div>
    </div>
  )
}

// Emotion Labeller
function EmotionLabeller({ onComplete }: { onComplete: () => void }) {
  const scenarios = [
    { situation: 'Your partner mentions a new coworker they have been spending time with at work.', surfaceEmotion: 'Jealousy / Anger', primaryEmotion: 'Fear of being replaced; insecurity about your worth' },
    { situation: 'You send a heartfelt message and get a one-word reply hours later.', surfaceEmotion: 'Anger / Frustration', primaryEmotion: 'Hurt; fear of being unimportant or invisible' },
    { situation: 'Your partner wants a night out with friends without you.', surfaceEmotion: 'Anxiety / Resentment', primaryEmotion: 'Fear of abandonment; loneliness; need for reassurance' },
    { situation: 'Someone you are dating starts pulling away after a period of closeness.', surfaceEmotion: 'Panic / Desperation', primaryEmotion: 'Core fear of abandonment; grief for the closeness being lost' },
  ]
  const [current, setCurrent] = useState(0)
  const [guesses, setGuesses] = useState<string[]>([])
  const [revealed, setRevealed] = useState(false)

  const scenario = scenarios[current]

  const handleReveal = () => {
    setRevealed(true)
  }

  const handleNext = () => {
    if (current < scenarios.length - 1) {
      setCurrent(current + 1)
      setRevealed(false)
      setGuesses([...guesses, ''])
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2 mb-2">
        {scenarios.map((_, i) => (
          <div key={i} className={cn('flex-1 h-1.5 rounded-full', i <= current ? 'bg-brand-500' : 'bg-calm-200')} />
        ))}
      </div>
      <div className="bg-warmth-50 rounded-xl p-5">
        <p className="text-xs text-warmth-600 font-medium mb-2">Scenario {current + 1} of {scenarios.length}</p>
        <p className="text-sm text-warmth-900 leading-relaxed">{scenario.situation}</p>
      </div>
      <div>
        <p className="text-xs font-medium text-calm-500 mb-1">The surface emotion most people notice:</p>
        <p className="text-sm font-semibold text-calm-800 bg-calm-50 p-3 rounded-lg">{scenario.surfaceEmotion}</p>
      </div>
      <div>
        <p className="text-xs font-medium text-calm-500 mb-1">What do you think the primary (deeper) emotion is?</p>
        <textarea
          className="textarea-field"
          rows={2}
          placeholder="What might be underneath the surface emotion?"
          value={guesses[current] || ''}
          onChange={(e) => {
            const newGuesses = [...guesses]
            newGuesses[current] = e.target.value
            setGuesses(newGuesses)
          }}
        />
      </div>
      {!revealed ? (
        <button onClick={handleReveal} className="btn-secondary text-sm">Reveal the primary emotion</button>
      ) : (
        <div className="bg-brand-50 rounded-xl p-4">
          <p className="text-xs font-medium text-brand-700 mb-1">The primary emotion underneath:</p>
          <p className="text-sm text-brand-900 font-medium">{scenario.primaryEmotion}</p>
          <p className="text-xs text-brand-600 mt-2">When you can name the primary emotion, you can address the real need instead of reacting to the surface feeling.</p>
        </div>
      )}
      <div className="flex gap-3 pt-2">
        {revealed && current < scenarios.length - 1 && (
          <button onClick={handleNext} className="btn-primary text-sm">Next Scenario</button>
        )}
        {revealed && current === scenarios.length - 1 && (
          <button onClick={onComplete} className="btn-primary">Complete</button>
        )}
      </div>
    </div>
  )
}

// Compassionate Letter Writer
function CompassionateLetter({ onComplete }: { onComplete: () => void }) {
  const [letter, setLetter] = useState('')
  const prompts = [
    'Imagine a deeply wise, caring friend who knows everything about your life and struggles.',
    'This friend has no judgement — only understanding and warmth.',
    'What would they say to you right now about what you have been going through?',
    'What would they want you to know about your worth, your pain, and your courage?',
  ]

  return (
    <div className="space-y-4">
      <div className="bg-warmth-50 rounded-xl p-4 space-y-2">
        {prompts.map((p, i) => (
          <p key={i} className="text-sm text-warmth-800 leading-relaxed">{p}</p>
        ))}
      </div>
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-2">Your compassionate letter:</label>
        <textarea
          className="textarea-field"
          rows={8}
          placeholder="Dear [your name],&#10;&#10;I want you to know that..."
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
        />
      </div>
      <p className="text-xs text-calm-500">This letter is private to you. Consider saving it somewhere you can re-read it on difficult days.</p>
      <button onClick={onComplete} className="btn-primary">
        Save & Continue
      </button>
    </div>
  )
}

// DEAR MAN Builder (DBT Interpersonal Effectiveness)
function DearManBuilder({ onComplete }: { onComplete: () => void }) {
  const steps = [
    { letter: 'D', label: 'Describe', placeholder: 'Describe the situation factually, without judgement. (e.g., "When you cancel plans last minute...")' },
    { letter: 'E', label: 'Express', placeholder: 'Express how you feel using "I" statements. (e.g., "I feel hurt and unimportant...")' },
    { letter: 'A', label: 'Assert', placeholder: 'Assert what you need clearly. (e.g., "I need 24 hours notice if plans change...")' },
    { letter: 'R', label: 'Reinforce', placeholder: 'Reinforce why this matters. (e.g., "This would help me feel respected and secure...")' },
    { letter: 'M', label: 'stay Mindful', placeholder: 'How will you stay focused on your goal? (e.g., "I will not get sidetracked by past arguments...")' },
    { letter: 'A', label: 'Appear confident', placeholder: 'How will you show confidence? (e.g., "I will use a calm, steady voice and maintain eye contact...")' },
    { letter: 'N', label: 'Negotiate', placeholder: 'Where can you be flexible? (e.g., "I am open to texting instead of calling if that is easier...")' },
  ]
  const [responses, setResponses] = useState<string[]>(steps.map(() => ''))
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="space-y-4">
      <div className="flex gap-1 mb-2">
        {steps.map((s, i) => (
          <div key={i} className={cn('flex-1 h-2 rounded-full transition-colors', i < currentStep ? 'bg-brand-500' : i === currentStep ? 'bg-brand-300' : 'bg-calm-200')} />
        ))}
      </div>
      <div className="bg-brand-50 rounded-xl p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-brand-600 flex items-center justify-center">
            <span className="text-lg font-bold text-white">{steps[currentStep].letter}</span>
          </div>
          <h4 className="text-base font-semibold text-brand-900">{steps[currentStep].label}</h4>
        </div>
        <textarea
          className="textarea-field"
          rows={3}
          placeholder={steps[currentStep].placeholder}
          value={responses[currentStep]}
          onChange={(e) => {
            const updated = [...responses]
            updated[currentStep] = e.target.value
            setResponses(updated)
          }}
        />
      </div>
      <div className="flex gap-3">
        {currentStep > 0 && (
          <button onClick={() => setCurrentStep(currentStep - 1)} className="btn-ghost text-sm">Previous</button>
        )}
        {currentStep < steps.length - 1 ? (
          <button onClick={() => setCurrentStep(currentStep + 1)} className="btn-primary text-sm">Next: {steps[currentStep + 1].label}</button>
        ) : (
          <button onClick={onComplete} className="btn-primary">Save My DEAR MAN Script</button>
        )}
      </div>
    </div>
  )
}

// Repair Builder
function RepairBuilder({ onComplete }: { onComplete: () => void }) {
  const [fields, setFields] = useState({
    rupture: '',
    responsibility: '',
    underlyingNeed: '',
    commitment: '',
  })

  return (
    <div className="space-y-4">
      <p className="text-sm text-calm-600">Think of a recent conflict or disconnection. Use this template to build a repair statement. You do not need to share it — but having the words ready makes repair more likely.</p>
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-1">1. Acknowledge the rupture</label>
        <textarea className="textarea-field" rows={2} placeholder='"I know that when I [specific behaviour], it hurt you..."' value={fields.rupture} onChange={(e) => setFields({ ...fields, rupture: e.target.value })} />
      </div>
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-1">2. Take responsibility for your part</label>
        <textarea className="textarea-field" rows={2} placeholder='"That was my anxiety/fear driving my behaviour, and I take responsibility for..."' value={fields.responsibility} onChange={(e) => setFields({ ...fields, responsibility: e.target.value })} />
      </div>
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-1">3. Express the underlying need</label>
        <textarea className="textarea-field" rows={2} placeholder='"What I was really feeling underneath was... and what I needed was..."' value={fields.underlyingNeed} onChange={(e) => setFields({ ...fields, underlyingNeed: e.target.value })} />
      </div>
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-1">4. Make a specific commitment</label>
        <textarea className="textarea-field" rows={2} placeholder='"Next time, I will try to... instead of..."' value={fields.commitment} onChange={(e) => setFields({ ...fields, commitment: e.target.value })} />
      </div>
      {fields.rupture && fields.responsibility && fields.underlyingNeed && fields.commitment && (
        <div className="bg-brand-50 rounded-xl p-4">
          <p className="text-xs font-medium text-brand-700 mb-2">Your repair statement:</p>
          <p className="text-sm text-brand-900 leading-relaxed italic">
            &ldquo;{fields.rupture} {fields.responsibility} {fields.underlyingNeed} {fields.commitment}&rdquo;
          </p>
        </div>
      )}
      <button onClick={onComplete} className="btn-primary">Save & Continue</button>
    </div>
  )
}

// Maintenance Plan Builder
function MaintenancePlanBuilder({ onComplete }: { onComplete: () => void }) {
  const [plan, setPlan] = useState({
    daily: [''],
    weekly: [''],
    monthly: [''],
    warningSignals: [''],
    emergencyPlan: '',
  })

  const addItem = (section: 'daily' | 'weekly' | 'monthly' | 'warningSignals') => {
    setPlan({ ...plan, [section]: [...plan[section], ''] })
  }

  const updateItem = (section: 'daily' | 'weekly' | 'monthly' | 'warningSignals', index: number, value: string) => {
    const updated = [...plan[section]]
    updated[index] = value
    setPlan({ ...plan, [section]: updated })
  }

  const sections: { key: 'daily' | 'weekly' | 'monthly' | 'warningSignals'; title: string; placeholder: string; description: string }[] = [
    { key: 'daily', title: 'Daily Practices', placeholder: 'e.g., 5-minute grounding breath, emotion check-in', description: 'Small, consistent habits that keep you regulated' },
    { key: 'weekly', title: 'Weekly Practices', placeholder: 'e.g., journal review, therapy session, support group', description: 'Deeper practices that maintain your growth' },
    { key: 'monthly', title: 'Monthly Check-Ins', placeholder: 'e.g., review progress, update safety plan, revisit a module', description: 'Bigger-picture reflections and adjustments' },
    { key: 'warningSignals', title: 'My Early Warning Signals', placeholder: 'e.g., increased phone checking, isolating, skipping meals', description: 'Signs that old patterns may be returning' },
  ]

  return (
    <div className="space-y-5">
      {sections.map((section) => (
        <div key={section.key} className="bg-calm-50 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-calm-800">{section.title}</h4>
          <p className="text-xs text-calm-500 mb-3">{section.description}</p>
          {plan[section.key].map((item, i) => (
            <input
              key={i}
              className="input-field text-sm mb-2"
              placeholder={section.placeholder}
              value={item}
              onChange={(e) => updateItem(section.key, i, e.target.value)}
            />
          ))}
          <button onClick={() => addItem(section.key)} className="text-xs text-brand-600 hover:text-brand-700 font-medium">+ Add another</button>
        </div>
      ))}
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-1">My Emergency Plan</label>
        <p className="text-xs text-calm-500 mb-2">When I notice warning signals, I will:</p>
        <textarea
          className="textarea-field"
          rows={3}
          placeholder="e.g., Call my therapist, use STOP skill, re-read my compassionate letter, reach out to [specific person]"
          value={plan.emergencyPlan}
          onChange={(e) => setPlan({ ...plan, emergencyPlan: e.target.value })}
        />
      </div>
      <button onClick={onComplete} className="btn-primary">Save My Maintenance Plan</button>
    </div>
  )
}

// Codependency Reflection
function CodependencyReflection({ onComplete }: { onComplete: () => void }) {
  const patterns = [
    { id: 'responsible', text: 'I feel responsible for other people\'s feelings and problems' },
    { id: 'guilty', text: 'I feel guilty when I prioritise my own needs' },
    { id: 'worth', text: 'My sense of worth depends on being needed by others' },
    { id: 'boundaries', text: 'I have difficulty saying no, even when I want to' },
    { id: 'anticipate', text: 'I anticipate other people\'s needs before they express them' },
    { id: 'opinion', text: 'I often do not know what I want or how I feel until someone else reacts' },
    { id: 'tolerate', text: 'I tolerate treatment from others that I would tell a friend not to accept' },
    { id: 'control', text: 'I try to control outcomes by managing other people\'s behaviour or feelings' },
    { id: 'identity', text: 'I lose myself in relationships — my hobbies, friends, and interests fade' },
    { id: 'fear', text: 'I stay in unhealthy situations because being alone feels worse' },
  ]
  const labels = ['Not me', 'Sometimes', 'Often', 'Very much me']
  const [scores, setScores] = useState<Record<string, number>>({})

  const allAnswered = patterns.every((p) => scores[p.id] !== undefined)
  const total = Object.values(scores).reduce((sum, v) => sum + v, 0)

  return (
    <div className="space-y-4">
      <p className="text-sm text-calm-600">Read each statement and choose how much it resonates with you. Be honest — there is no judgement here, only self-awareness.</p>
      {patterns.map((p) => (
        <div key={p.id} className="bg-calm-50 rounded-xl p-4">
          <p className="text-sm text-calm-800 mb-2">{p.text}</p>
          <div className="flex flex-wrap gap-2">
            {labels.map((label, i) => (
              <button
                key={i}
                onClick={() => setScores({ ...scores, [p.id]: i })}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                  scores[p.id] === i ? 'bg-brand-600 text-white' : 'bg-white text-calm-600 hover:bg-calm-100 border border-calm-200'
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ))}
      {allAnswered && (
        <div className="bg-brand-50 rounded-xl p-5">
          <h4 className="text-sm font-semibold text-brand-900 mb-2">Your Reflection</h4>
          <p className="text-sm text-brand-800">
            {total <= 10
              ? 'You show fewer codependent patterns. You likely have a good sense of your own boundaries and identity in relationships.'
              : total <= 20
              ? 'You show some codependent tendencies. This is very common, especially for people with anxious attachment patterns. The skills in this module will help you strengthen your sense of self.'
              : 'You identify strongly with codependent patterns. This is not a failing — it is a survival strategy you learned. The good news is these patterns can change with awareness and practice.'}
          </p>
          <p className="text-xs text-brand-600 mt-2">Remember: this is a reflection, not a diagnosis. All patterns exist on a spectrum and can shift.</p>
        </div>
      )}
      <button onClick={onComplete} className={cn('btn-primary', !allAnswered && 'opacity-50')} disabled={!allAnswered}>
        Continue
      </button>
    </div>
  )
}

// Generic Interactive Container (fallback)
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
      case 'AttachmentReflection':
        return <AttachmentReflection onComplete={onComplete} />
      case 'TriggerMapper':
        return <TriggerMapper onComplete={onComplete} />
      case 'EmotionLabeller':
        return <EmotionLabeller onComplete={onComplete} />
      case 'CompassionateLetter':
        return <CompassionateLetter onComplete={onComplete} />
      case 'DearManBuilder':
        return <DearManBuilder onComplete={onComplete} />
      case 'RepairBuilder':
        return <RepairBuilder onComplete={onComplete} />
      case 'MaintenancePlanBuilder':
        return <MaintenancePlanBuilder onComplete={onComplete} />
      case 'CodependencyReflection':
        return <CodependencyReflection onComplete={onComplete} />
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
