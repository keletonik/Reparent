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
    reRating: '',
  })

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-1">1. Trigger / Situation</label>
        <input className="input-field" placeholder="What happened? Be specific about the situation." value={fields.trigger} onChange={(e) => setFields({ ...fields, trigger: e.target.value })} />
      </div>
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-1">2. Automatic Thought</label>
        <input className="input-field" placeholder="What went through your mind? (e.g., 'They don't care about me')" value={fields.thought} onChange={(e) => setFields({ ...fields, thought: e.target.value })} />
      </div>
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-1">3. Feeling & Intensity (0-100)</label>
        <input className="input-field" placeholder="e.g., Anxiety 80, Sadness 60, Anger 40" value={fields.feeling} onChange={(e) => setFields({ ...fields, feeling: e.target.value })} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-calm-800 mb-1">4. Evidence For This Thought</label>
          <textarea className="textarea-field" rows={3} placeholder="What facts support this thought? (Not feelings — actual evidence)" value={fields.evidenceFor} onChange={(e) => setFields({ ...fields, evidenceFor: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-calm-800 mb-1">5. Evidence Against This Thought</label>
          <textarea className="textarea-field" rows={3} placeholder="What facts contradict it? What would a friend say? What have you overlooked?" value={fields.evidenceAgainst} onChange={(e) => setFields({ ...fields, evidenceAgainst: e.target.value })} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-1">6. Balanced Thought</label>
        <textarea className="textarea-field" rows={2} placeholder="A more balanced perspective that accounts for both sides of the evidence..." value={fields.balanced} onChange={(e) => setFields({ ...fields, balanced: e.target.value })} />
      </div>
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-1">7. Re-Rate Your Feeling Now (0-100)</label>
        <input className="input-field" placeholder="How intense is the feeling now? (e.g., Anxiety 45, Sadness 30)" value={fields.reRating} onChange={(e) => setFields({ ...fields, reRating: e.target.value })} />
        <p className="text-xs text-calm-500 mt-1">It is okay if it has not changed much — awareness itself is progress. The goal is not zero distress.</p>
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
    { trigger: '', bodySensation: '', emotion: '', urge: '', usualAction: '', preferredAction: '' },
  ])

  const addRow = () => {
    setTriggers([...triggers, { trigger: '', bodySensation: '', emotion: '', urge: '', usualAction: '', preferredAction: '' }])
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
          <input className="input-field text-sm" placeholder="Where do you feel it in your body? (e.g., tight chest, churning stomach, clenched jaw)" value={t.bodySensation} onChange={(e) => update(i, 'bodySensation', e.target.value)} />
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
    { situation: 'You open up about something vulnerable and your partner changes the subject or makes a joke.', surfaceEmotion: 'Anger / Shutdown', primaryEmotion: 'Shame about your vulnerability; hurt from feeling unseen; fear that your emotional needs are "too much"' },
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

// Values Card Sort
function ValuesCardSort({ onComplete }: { onComplete: () => void }) {
  const allValues = ['Honesty', 'Safety', 'Growth', 'Loyalty', 'Independence', 'Compassion', 'Respect', 'Trust', 'Adventure', 'Stability', 'Creativity', 'Family', 'Freedom', 'Justice', 'Health', 'Humor', 'Spirituality', 'Courage', 'Authenticity', 'Generosity', 'Connection', 'Knowledge', 'Peace', 'Purpose']
  const [selected, setSelected] = useState<string[]>([])
  const [phase, setPhase] = useState<'select' | 'rank' | 'done'>('select')

  const toggle = (v: string) => {
    if (phase !== 'select') return
    setSelected((prev) => prev.includes(v) ? prev.filter((x) => x !== v) : prev.length < 7 ? [...prev, v] : prev)
  }
  const moveUp = (i: number) => {
    if (i === 0) return
    const arr = [...selected]; [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; setSelected(arr)
  }
  const moveDown = (i: number) => {
    if (i === selected.length - 1) return
    const arr = [...selected]; [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; setSelected(arr)
  }

  if (phase === 'done') {
    return (
      <div className="space-y-4">
        <div className="bg-brand-50 rounded-xl p-5">
          <h4 className="text-sm font-semibold text-brand-900 mb-3">Your Core Values</h4>
          {selected.slice(0, 5).map((v, i) => (
            <div key={v} className="flex items-center gap-3 py-2 border-b border-brand-100 last:border-0">
              <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center"><span className="text-white text-sm font-bold">{i + 1}</span></div>
              <span className="text-brand-800 font-medium">{v}</span>
            </div>
          ))}
          <p className="text-xs text-brand-600 mt-3">These values are your compass. When you face a difficult choice in relationships, ask: &ldquo;Does this align with my top values?&rdquo;</p>
        </div>
        <button onClick={onComplete} className="btn-primary">Continue</button>
      </div>
    )
  }

  if (phase === 'rank') {
    return (
      <div className="space-y-4">
        <p className="text-sm text-calm-600">Now rank your selected values from most to least important. Use the arrows to reorder.</p>
        <div className="space-y-2">
          {selected.map((v, i) => (
            <div key={v} className="flex items-center gap-2 bg-calm-50 rounded-lg p-3">
              <span className="text-xs font-bold text-calm-500 w-6">{i + 1}.</span>
              <span className="flex-1 text-sm font-medium text-calm-800">{v}</span>
              <button onClick={() => moveUp(i)} className="text-calm-400 hover:text-brand-600 text-xs px-1" disabled={i === 0}>Up</button>
              <button onClick={() => moveDown(i)} className="text-calm-400 hover:text-brand-600 text-xs px-1" disabled={i === selected.length - 1}>Down</button>
            </div>
          ))}
        </div>
        <button onClick={() => setPhase('done')} className="btn-primary">Confirm My Values</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-calm-600">Select up to 7 values that matter most to you. We will narrow them down next.</p>
      <div className="flex flex-wrap gap-2">
        {allValues.map((v) => (
          <button key={v} onClick={() => toggle(v)} className={cn('px-3 py-1.5 rounded-lg text-xs font-medium transition-colors', selected.includes(v) ? 'bg-brand-600 text-white' : 'bg-calm-50 text-calm-600 hover:bg-calm-100')}>{v}</button>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2">
        <p className="text-xs text-calm-400">{selected.length}/7 selected</p>
        <button onClick={() => setPhase('rank')} className={cn('btn-primary', selected.length < 3 && 'opacity-50')} disabled={selected.length < 3}>Rank My Values</button>
      </div>
    </div>
  )
}

// Window of Tolerance Tracker
function WindowOfToleranceTracker({ onComplete }: { onComplete: () => void }) {
  const [level, setLevel] = useState(5)
  const [zones, setZones] = useState({ hyper: { sensations: '', emotions: '', thoughts: '' }, window: { sensations: '', emotions: '', thoughts: '' }, hypo: { sensations: '', emotions: '', thoughts: '' } })
  const [step, setStep] = useState(0)
  const zoneNames = ['hyper', 'window', 'hypo'] as const
  const zoneLabels = { hyper: 'Hyperarousal (Fight/Flight)', window: 'Window of Tolerance', hypo: 'Hypoarousal (Freeze/Shutdown)' }
  const zoneColors = { hyper: 'bg-warmth-50 border-warmth-200', window: 'bg-brand-50 border-brand-200', hypo: 'bg-calm-100 border-calm-300' }

  if (step === 0) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-calm-600">Where are you right now on the arousal scale? Drag the slider.</p>
        <div className="relative h-64 bg-gradient-to-b from-warmth-100 via-brand-50 to-calm-200 rounded-xl p-4 flex flex-col justify-between">
          <p className="text-xs font-semibold text-warmth-700">HYPERAROUSAL</p>
          <p className="text-xs font-semibold text-brand-700 text-center">WINDOW OF TOLERANCE</p>
          <p className="text-xs font-semibold text-calm-600">HYPOAROUSAL</p>
          <div className="absolute left-1/2 -translate-x-1/2" style={{ top: `${(10 - level) * 10}%` }}>
            <div className="w-8 h-8 rounded-full bg-brand-600 border-4 border-white shadow-lg flex items-center justify-center"><span className="text-white text-xs font-bold">{level}</span></div>
          </div>
        </div>
        <input type="range" min="0" max="10" value={level} onChange={(e) => setLevel(Number(e.target.value))} className="w-full" />
        <p className="text-xs text-calm-500 text-center">{level <= 3 ? 'Below window — hypoarousal zone' : level <= 7 ? 'Inside your window of tolerance' : 'Above window — hyperarousal zone'}</p>
        <button onClick={() => setStep(1)} className="btn-primary">Map My Zones</button>
      </div>
    )
  }

  if (step <= 3) {
    const zone = zoneNames[step - 1]
    return (
      <div className="space-y-4">
        <div className={cn('rounded-xl p-4 border', zoneColors[zone])}>
          <h4 className="text-sm font-semibold text-calm-900 mb-3">{zoneLabels[zone]}</h4>
          <div className="space-y-3">
            <div><label className="block text-xs font-medium text-calm-700 mb-1">Physical sensations</label><input className="input-field text-sm" placeholder="e.g., racing heart, tight chest, numb..." value={zones[zone].sensations} onChange={(e) => setZones({ ...zones, [zone]: { ...zones[zone], sensations: e.target.value } })} /></div>
            <div><label className="block text-xs font-medium text-calm-700 mb-1">Emotions</label><input className="input-field text-sm" placeholder="e.g., panic, calm, empty..." value={zones[zone].emotions} onChange={(e) => setZones({ ...zones, [zone]: { ...zones[zone], emotions: e.target.value } })} /></div>
            <div><label className="block text-xs font-medium text-calm-700 mb-1">Thoughts</label><input className="input-field text-sm" placeholder="e.g., I need to act NOW, I can think clearly, I can't think..." value={zones[zone].thoughts} onChange={(e) => setZones({ ...zones, [zone]: { ...zones[zone], thoughts: e.target.value } })} /></div>
          </div>
        </div>
        <div className="flex gap-3">
          {step > 1 && <button onClick={() => setStep(step - 1)} className="btn-ghost text-sm">Previous</button>}
          <button onClick={() => setStep(step + 1)} className="btn-primary text-sm">{step < 3 ? 'Next Zone' : 'See My Map'}</button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-calm-900">Your Window of Tolerance Map</h4>
      {zoneNames.map((zone) => (
        <div key={zone} className={cn('rounded-xl p-4 border', zoneColors[zone])}>
          <p className="text-xs font-semibold text-calm-700 mb-2">{zoneLabels[zone]}</p>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div><p className="font-medium text-calm-600">Body</p><p className="text-calm-800">{zones[zone].sensations || '—'}</p></div>
            <div><p className="font-medium text-calm-600">Emotions</p><p className="text-calm-800">{zones[zone].emotions || '—'}</p></div>
            <div><p className="font-medium text-calm-600">Thoughts</p><p className="text-calm-800">{zones[zone].thoughts || '—'}</p></div>
          </div>
        </div>
      ))}
      <p className="text-xs text-calm-500">Knowing your signals in each zone helps you catch dysregulation early and use the right skill.</p>
      <button onClick={onComplete} className="btn-primary">Continue</button>
    </div>
  )
}

// Body Scan Exercise
function BodyScanExercise({ onComplete }: { onComplete: () => void }) {
  const regions = [
    { name: 'Feet & Ankles', prompt: 'Bring attention to your feet. Notice any sensations — warmth, tingling, pressure.' },
    { name: 'Legs & Knees', prompt: 'Move your awareness up to your legs. Notice any tightness, heaviness, or ease.' },
    { name: 'Stomach & Gut', prompt: 'Focus on your stomach area. This is where many people hold anxiety. What do you notice?' },
    { name: 'Chest & Heart', prompt: 'Bring attention to your chest. Notice your breathing, your heartbeat, any tightness or openness.' },
    { name: 'Hands & Wrists', prompt: 'Notice your hands. Are they clenched or relaxed? Warm or cool?' },
    { name: 'Arms & Elbows', prompt: 'Scan up through your arms. Notice any tension you might be holding.' },
    { name: 'Shoulders & Neck', prompt: 'Many people carry stress here. What do you notice in your shoulders and neck?' },
    { name: 'Head & Face', prompt: 'Finally, notice your forehead, jaw, and scalp. Where is there tension?' },
  ]
  const [current, setCurrent] = useState(0)
  const [ratings, setRatings] = useState<{ tension: number; note: string }[]>(regions.map(() => ({ tension: 5, note: '' })))

  if (current >= regions.length) {
    const highTension = ratings.map((r, i) => ({ ...r, region: regions[i].name })).filter((r) => r.tension >= 7).sort((a, b) => b.tension - a.tension)
    return (
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-calm-900">Your Body Map Summary</h4>
        <div className="grid grid-cols-2 gap-2">
          {regions.map((r, i) => (
            <div key={i} className={cn('rounded-lg p-3', ratings[i].tension >= 7 ? 'bg-warmth-50' : ratings[i].tension >= 4 ? 'bg-calm-50' : 'bg-brand-50')}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-calm-800">{r.name}</span>
                <span className={cn('text-xs font-bold', ratings[i].tension >= 7 ? 'text-warmth-600' : 'text-calm-500')}>{ratings[i].tension}/10</span>
              </div>
              {ratings[i].note && <p className="text-xs text-calm-600">{ratings[i].note}</p>}
            </div>
          ))}
        </div>
        {highTension.length > 0 && (
          <div className="bg-warmth-50 rounded-xl p-4">
            <p className="text-xs font-medium text-warmth-700">Areas of high tension: {highTension.map((h) => h.region).join(', ')}. Consider giving these areas extra attention with gentle stretching or warmth.</p>
          </div>
        )}
        <button onClick={onComplete} className="btn-primary">Continue</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-1 mb-2">{regions.map((_, i) => (<div key={i} className={cn('flex-1 h-1.5 rounded-full', i < current ? 'bg-brand-500' : i === current ? 'bg-brand-300' : 'bg-calm-200')} />))}</div>
      <div className="bg-calm-50 rounded-xl p-5">
        <p className="text-xs text-calm-500 mb-1">Region {current + 1} of {regions.length}</p>
        <h4 className="text-base font-semibold text-calm-900 mb-2">{regions[current].name}</h4>
        <p className="text-sm text-calm-700">{regions[current].prompt}</p>
      </div>
      <div>
        <label className="block text-xs font-medium text-calm-700 mb-2">Tension level: {ratings[current].tension}/10</label>
        <input type="range" min="0" max="10" value={ratings[current].tension} onChange={(e) => { const r = [...ratings]; r[current] = { ...r[current], tension: Number(e.target.value) }; setRatings(r) }} className="w-full" />
        <div className="flex justify-between text-xs text-calm-400"><span>Relaxed</span><span>Very tense</span></div>
      </div>
      <div>
        <label className="block text-xs font-medium text-calm-700 mb-1">What do you notice?</label>
        <input className="input-field text-sm" placeholder="Any sensations, temperature, tightness..." value={ratings[current].note} onChange={(e) => { const r = [...ratings]; r[current] = { ...r[current], note: e.target.value }; setRatings(r) }} />
      </div>
      <button onClick={() => setCurrent(current + 1)} className="btn-primary text-sm">{current < regions.length - 1 ? 'Next Region' : 'See Summary'}</button>
    </div>
  )
}

// Emotion Wheel Explorer
function EmotionWheelExplorer({ onComplete }: { onComplete: () => void }) {
  const emotions: Record<string, { secondary: string[]; description: string }> = {
    Joy: { secondary: ['Serenity', 'Ecstasy', 'Optimism', 'Love', 'Pride', 'Cheerfulness'], description: 'Joy signals that something is going well. In attachment, joy comes from feeling connected, seen, and safe.' },
    Trust: { secondary: ['Acceptance', 'Admiration', 'Openness', 'Tolerance', 'Faith', 'Loyalty'], description: 'Trust is the foundation of secure attachment. It builds slowly through consistent, safe behaviour.' },
    Fear: { secondary: ['Apprehension', 'Terror', 'Anxiety', 'Insecurity', 'Dread', 'Panic'], description: 'Fear alerts you to danger. In attachment, fear of abandonment is the core anxiety that drives seeking behaviour.' },
    Surprise: { secondary: ['Amazement', 'Distraction', 'Confusion', 'Shock', 'Bewilderment', 'Astonishment'], description: 'Surprise is a brief emotion that prepares you to process unexpected information.' },
    Sadness: { secondary: ['Pensiveness', 'Grief', 'Loneliness', 'Despair', 'Disappointment', 'Shame'], description: 'Sadness signals loss. In attachment, sadness often comes from unmet needs or disconnection from loved ones.' },
    Disgust: { secondary: ['Boredom', 'Loathing', 'Contempt', 'Revulsion', 'Aversion', 'Disapproval'], description: 'Disgust protects you from harmful things. In relationships, contempt is what Gottman identified as the strongest predictor of divorce.' },
    Anger: { secondary: ['Annoyance', 'Rage', 'Frustration', 'Resentment', 'Hostility', 'Irritability'], description: 'Anger signals a boundary violation or injustice. In attachment, anger often masks deeper hurt or fear.' },
    Anticipation: { secondary: ['Interest', 'Vigilance', 'Eagerness', 'Anxiety', 'Hope', 'Excitement'], description: 'Anticipation prepares you for what is coming. In anxious attachment, it can become hypervigilance.' },
  }
  const [selectedPrimary, setSelectedPrimary] = useState<string | null>(null)
  const [selectedSecondary, setSelectedSecondary] = useState<string | null>(null)
  const primaryColors: Record<string, string> = { Joy: 'bg-yellow-100 text-yellow-800', Trust: 'bg-green-100 text-green-800', Fear: 'bg-emerald-100 text-emerald-800', Surprise: 'bg-cyan-100 text-cyan-800', Sadness: 'bg-blue-100 text-blue-800', Disgust: 'bg-purple-100 text-purple-800', Anger: 'bg-red-100 text-red-800', Anticipation: 'bg-orange-100 text-orange-800' }

  return (
    <div className="space-y-4">
      <p className="text-sm text-calm-600">Explore Plutchik&apos;s emotion wheel. Tap a primary emotion to see its family of related feelings.</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {Object.keys(emotions).map((e) => (
          <button key={e} onClick={() => { setSelectedPrimary(e); setSelectedSecondary(null) }} className={cn('px-4 py-2 rounded-xl text-sm font-medium transition-all', selectedPrimary === e ? primaryColors[e] + ' ring-2 ring-offset-1 ring-brand-400' : primaryColors[e] + ' opacity-70 hover:opacity-100')}>{e}</button>
        ))}
      </div>
      {selectedPrimary && (
        <div className="bg-calm-50 rounded-xl p-4 space-y-3">
          <p className="text-sm text-calm-800 font-medium">{selectedPrimary}</p>
          <p className="text-xs text-calm-600">{emotions[selectedPrimary].description}</p>
          <div className="flex flex-wrap gap-2">
            {emotions[selectedPrimary].secondary.map((s) => (
              <button key={s} onClick={() => setSelectedSecondary(s)} className={cn('px-3 py-1 rounded-lg text-xs font-medium transition-colors', selectedSecondary === s ? 'bg-brand-600 text-white' : 'bg-white text-calm-600 border border-calm-200 hover:bg-calm-100')}>{s}</button>
            ))}
          </div>
          {selectedSecondary && (
            <div className="bg-brand-50 rounded-lg p-3">
              <p className="text-xs text-brand-800">You selected <strong>{selectedSecondary}</strong> — a more specific form of {selectedPrimary.toLowerCase()}. Being able to name this precise emotion gives you more power over it. &ldquo;Name it to tame it.&rdquo;</p>
            </div>
          )}
        </div>
      )}
      <button onClick={onComplete} className={cn('btn-primary', !selectedPrimary && 'opacity-50')} disabled={!selectedPrimary}>Continue</button>
    </div>
  )
}

// Relationship Pattern Quiz
function RelationshipPatternQuiz({ onComplete }: { onComplete: () => void }) {
  const scenarios = [
    { q: 'Your partner is 30 minutes late and has not texted. You:', options: [{ text: 'Feel concerned but trust they have a reason', style: 'secure' }, { text: 'Call and text repeatedly, feeling rising panic', style: 'anxious' }, { text: 'Feel annoyed but say nothing when they arrive', style: 'avoidant' }, { text: 'Swing between panic and wanting to punish them', style: 'disorganized' }] },
    { q: 'After a disagreement, you typically:', options: [{ text: 'Want to talk it through and reconnect', style: 'secure' }, { text: 'Worry they will leave and seek reassurance urgently', style: 'anxious' }, { text: 'Need space and withdraw', style: 'avoidant' }, { text: 'Feel both desperate to reconnect and wanting to push away', style: 'disorganized' }] },
    { q: 'When your partner gets close emotionally, you:', options: [{ text: 'Feel warm and enjoy the intimacy', style: 'secure' }, { text: 'Finally feel safe but worry it will not last', style: 'anxious' }, { text: 'Feel slightly suffocated and need to create distance', style: 'avoidant' }, { text: 'Feel both relief and an urge to sabotage it', style: 'disorganized' }] },
    { q: 'Your partner mentions an attractive coworker. You:', options: [{ text: 'Feel a twinge of jealousy but trust your partner', style: 'secure' }, { text: 'Feel intense jealousy and need immediate reassurance', style: 'anxious' }, { text: 'Act like you do not care, but feel threatened', style: 'avoidant' }, { text: 'Feel threatened, then angry at yourself for caring', style: 'disorganized' }] },
    { q: 'When you need emotional support, you:', options: [{ text: 'Ask for it directly and feel comfortable being vulnerable', style: 'secure' }, { text: 'Drop hints and feel hurt when they do not notice', style: 'anxious' }, { text: 'Handle it yourself — you do not like relying on others', style: 'avoidant' }, { text: 'Want support but feel unsafe asking for it', style: 'disorganized' }] },
    { q: 'Your love interest does not text for a full day. You:', options: [{ text: 'Assume they are busy and carry on with your day', style: 'secure' }, { text: 'Check your phone constantly and catastrophize', style: 'anxious' }, { text: 'Pull back yourself to match their energy', style: 'avoidant' }, { text: 'Feel abandoned, then tell yourself you do not care', style: 'disorganized' }] },
  ]
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])

  if (current >= scenarios.length) {
    const counts = { secure: 0, anxious: 0, avoidant: 0, disorganized: 0 }
    answers.forEach((a) => { counts[a as keyof typeof counts]++ })
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])
    const descriptions: Record<string, string> = {
      secure: 'You show secure tendencies — you are comfortable with closeness and trust. This is your goal to build toward.',
      anxious: 'You show anxious-preoccupied tendencies — you crave closeness but fear abandonment. The skills in this program will help you build internal security.',
      avoidant: 'You show dismissive-avoidant tendencies — you value independence and may suppress attachment needs. Learning to let others in safely is part of your growth.',
      disorganized: 'You show fearful-avoidant (disorganized) tendencies — you want closeness but fear it. This often relates to early experiences where caregivers were both a source of comfort and fear.',
    }
    return (
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-calm-900">Your Relationship Patterns</h4>
        <div className="space-y-2">
          {sorted.map(([style, count]) => (
            <div key={style} className="bg-calm-50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-calm-800 capitalize">{style}</span>
                <span className="text-xs text-calm-500">{count}/{scenarios.length}</span>
              </div>
              <div className="h-2 bg-calm-200 rounded-full overflow-hidden"><div className="h-full bg-brand-500 rounded-full" style={{ width: `${(count / scenarios.length) * 100}%` }} /></div>
            </div>
          ))}
        </div>
        <div className="bg-brand-50 rounded-xl p-4">
          <p className="text-sm text-brand-800">{descriptions[sorted[0][0]]}</p>
          <p className="text-xs text-brand-600 mt-2">Remember: these are tendencies on a spectrum, not fixed categories. They can and do change.</p>
        </div>
        <button onClick={onComplete} className="btn-primary">Continue</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-1 mb-2">{scenarios.map((_, i) => (<div key={i} className={cn('flex-1 h-1.5 rounded-full', i < current ? 'bg-brand-500' : i === current ? 'bg-brand-300' : 'bg-calm-200')} />))}</div>
      <p className="text-sm font-medium text-calm-800">{scenarios[current].q}</p>
      <div className="space-y-2">
        {scenarios[current].options.map((opt, i) => (
          <button key={i} onClick={() => { setAnswers([...answers, opt.style]); setCurrent(current + 1) }} className="w-full text-left p-3 rounded-xl border-2 border-calm-200 hover:border-brand-300 transition-all text-sm text-calm-700">{opt.text}</button>
        ))}
      </div>
    </div>
  )
}

// Inner Child Letter
function InnerChildLetter({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0)
  const [memory, setMemory] = useState('')
  const [feelings, setFeelings] = useState('')
  const [letter, setLetter] = useState('')
  const steps = [
    { title: 'Remember', desc: 'Think of a moment from childhood when you felt alone, scared, or unworthy of love. You do not need to choose the worst memory — any moment of emotional pain will work.' },
    { title: 'Feel', desc: 'What was that child feeling? What did they need that they did not get? Describe the emotions and unmet needs of that younger you.' },
    { title: 'Write', desc: 'Now write a letter FROM your wise, compassionate adult self TO that child. Give them what they needed to hear.' },
  ]

  if (step === 3) {
    return (
      <div className="space-y-4">
        <div className="bg-warmth-50 rounded-xl p-5">
          <h4 className="text-sm font-semibold text-warmth-900 mb-2">Your Letter to Your Inner Child</h4>
          <p className="text-sm text-warmth-800 whitespace-pre-wrap italic">{letter}</p>
        </div>
        <p className="text-xs text-calm-500">Consider saving this letter somewhere you can re-read it on difficult days. You can be the safe adult your inner child needed.</p>
        <button onClick={onComplete} className="btn-primary">Continue</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-1 mb-2">{steps.map((_, i) => (<div key={i} className={cn('flex-1 h-1.5 rounded-full', i < step ? 'bg-warmth-500' : i === step ? 'bg-warmth-300' : 'bg-calm-200')} />))}</div>
      <div className="bg-warmth-50 rounded-xl p-4">
        <h4 className="text-sm font-semibold text-warmth-900">{steps[step].title}</h4>
        <p className="text-sm text-warmth-700 mt-1">{steps[step].desc}</p>
      </div>
      <textarea className="textarea-field" rows={step === 2 ? 8 : 4} placeholder={step === 0 ? 'Describe the memory briefly...' : step === 1 ? 'What was the child feeling? What did they need?' : 'Dear little one, I want you to know...'} value={step === 0 ? memory : step === 1 ? feelings : letter} onChange={(e) => step === 0 ? setMemory(e.target.value) : step === 1 ? setFeelings(e.target.value) : setLetter(e.target.value)} />
      <div className="flex gap-3">
        {step > 0 && <button onClick={() => setStep(step - 1)} className="btn-ghost text-sm">Back</button>}
        <button onClick={() => setStep(step + 1)} className="btn-primary text-sm">{step < 2 ? 'Next' : 'Save My Letter'}</button>
      </div>
    </div>
  )
}

// Needs Inventory
function NeedsInventory({ onComplete }: { onComplete: () => void }) {
  const needs = ['Safety', 'Validation', 'Autonomy', 'Belonging', 'Appreciation', 'Understanding', 'Affection', 'Consistency', 'Honesty', 'Respect', 'Space', 'Support', 'Acceptance', 'Predictability', 'Equality', 'Fun', 'Meaning', 'Growth']
  const [ratings, setRatings] = useState<Record<string, number>>({})
  const allRated = needs.every((n) => ratings[n] !== undefined)

  if (allRated) {
    const unmet = needs.filter((n) => (ratings[n] || 0) <= 2).sort((a, b) => (ratings[a] || 0) - (ratings[b] || 0))
    const met = needs.filter((n) => (ratings[n] || 0) >= 4).sort((a, b) => (ratings[b] || 0) - (ratings[a] || 0))
    return (
      <div className="space-y-4">
        {unmet.length > 0 && (
          <div className="bg-warmth-50 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-warmth-900 mb-2">Your Top Unmet Needs</h4>
            <div className="flex flex-wrap gap-2">{unmet.slice(0, 5).map((n) => (<span key={n} className="px-3 py-1 rounded-lg bg-warmth-100 text-warmth-800 text-xs font-medium">{n} ({ratings[n]}/5)</span>))}</div>
            <p className="text-xs text-warmth-600 mt-2">These unmet needs often drive attachment-seeking behaviour. Naming them is the first step to meeting them in healthy ways.</p>
          </div>
        )}
        {met.length > 0 && (
          <div className="bg-brand-50 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-brand-900 mb-2">Needs Being Well Met</h4>
            <div className="flex flex-wrap gap-2">{met.slice(0, 5).map((n) => (<span key={n} className="px-3 py-1 rounded-lg bg-brand-100 text-brand-800 text-xs font-medium">{n} ({ratings[n]}/5)</span>))}</div>
          </div>
        )}
        <button onClick={onComplete} className="btn-primary">Continue</button>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-calm-600">Rate how well each emotional need is currently being met in your life (0 = not at all, 5 = fully met).</p>
      {needs.map((need) => (
        <div key={need} className="flex items-center gap-3 py-1">
          <span className="text-sm text-calm-800 w-28 shrink-0">{need}</span>
          <div className="flex gap-1">{[0, 1, 2, 3, 4, 5].map((v) => (<button key={v} onClick={() => setRatings({ ...ratings, [need]: v })} className={cn('w-8 h-8 rounded-lg text-xs font-bold transition-colors', ratings[need] === v ? 'bg-brand-600 text-white' : 'bg-calm-50 text-calm-500 hover:bg-calm-100')}>{v}</button>))}</div>
        </div>
      ))}
    </div>
  )
}

// Boundary Scenario Builder
function BoundaryScenarioBuilder({ onComplete }: { onComplete: () => void }) {
  const scenarios = [
    { situation: 'A friend keeps making critical comments about your appearance.', model: 'I value our friendship, and I need you to know that comments about my appearance are hurtful. If they continue, I will need to limit our time together.' },
    { situation: 'Your partner dismisses your feelings when you try to express them.', model: 'When I share my feelings and they are dismissed, I feel unseen and unimportant. I need you to listen without minimising, even if you see it differently. If I feel dismissed, I will take space to regulate before continuing.' },
    { situation: 'A family member guilt-trips you for not visiting more often.', model: 'I love you, and I visit when I can. When guilt is used to pressure me, it makes me want to withdraw more, not less. I will visit on a schedule that works for me.' },
    { situation: 'A coworker keeps asking you to take on their tasks.', model: 'I want to be helpful, but I cannot take on additional work right now without compromising my own responsibilities. I am going to say no to this request.' },
    { situation: 'Someone you are dating pressures you for more intimacy than you are ready for.', model: 'I care about you and I am not ready for that yet. My pace is not a reflection of how I feel about you. If my boundaries are not respected, I will need to reconsider this relationship.' },
  ]
  const [current, setCurrent] = useState(0)
  const [responses, setResponses] = useState<string[]>(scenarios.map(() => ''))
  const [showModel, setShowModel] = useState(false)

  if (current >= scenarios.length) {
    return (
      <div className="space-y-4">
        <div className="bg-brand-50 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-brand-900 mb-2">Practice Complete</h4>
          <p className="text-sm text-brand-700">You practised setting boundaries for {scenarios.length} different situations. Remember: boundaries are self-care, not punishment. They protect your energy and your relationships.</p>
        </div>
        <button onClick={onComplete} className="btn-primary">Continue</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-1 mb-2">{scenarios.map((_, i) => (<div key={i} className={cn('flex-1 h-1.5 rounded-full', i < current ? 'bg-brand-500' : i === current ? 'bg-brand-300' : 'bg-calm-200')} />))}</div>
      <div className="bg-warmth-50 rounded-xl p-4">
        <p className="text-xs text-warmth-600 font-medium mb-1">Scenario {current + 1}</p>
        <p className="text-sm text-warmth-900">{scenarios[current].situation}</p>
      </div>
      <div>
        <label className="block text-xs font-medium text-calm-700 mb-1">Write your boundary statement:</label>
        <textarea className="textarea-field" rows={3} placeholder="I feel... I need... If... I will..." value={responses[current]} onChange={(e) => { const r = [...responses]; r[current] = e.target.value; setResponses(r) }} />
      </div>
      {!showModel ? (
        <button onClick={() => setShowModel(true)} className="btn-secondary text-sm">Show Model Answer</button>
      ) : (
        <div className="bg-brand-50 rounded-xl p-4">
          <p className="text-xs font-medium text-brand-700 mb-1">Model boundary statement:</p>
          <p className="text-sm text-brand-900 italic">&ldquo;{scenarios[current].model}&rdquo;</p>
        </div>
      )}
      <button onClick={() => { setCurrent(current + 1); setShowModel(false) }} className="btn-primary text-sm">{current < scenarios.length - 1 ? 'Next Scenario' : 'Complete'}</button>
    </div>
  )
}

// Conflict Style Assessment (Thomas-Kilmann)
function ConflictStyleAssessment({ onComplete }: { onComplete: () => void }) {
  const questions = [
    { a: { text: 'I try to find a position between mine and the other person\'s', style: 'compromising' }, b: { text: 'I try to deal with all concerns — theirs and mine', style: 'collaborating' } },
    { a: { text: 'I give in to the other person\'s wishes', style: 'accommodating' }, b: { text: 'I try to find a fair combination of gains and losses', style: 'compromising' } },
    { a: { text: 'I am firm in pursuing my goals', style: 'competing' }, b: { text: 'I try to soothe the other person\'s feelings to preserve the relationship', style: 'accommodating' } },
    { a: { text: 'I try to avoid creating unpleasantness', style: 'avoiding' }, b: { text: 'I try to win my position', style: 'competing' } },
    { a: { text: 'I try to find a mutually satisfying solution', style: 'collaborating' }, b: { text: 'I let the other person have their way', style: 'accommodating' } },
    { a: { text: 'I try to postpone the issue until later', style: 'avoiding' }, b: { text: 'I give up some points in exchange for others', style: 'compromising' } },
    { a: { text: 'I press to get my point across', style: 'competing' }, b: { text: 'I try to find a solution that satisfies both of us', style: 'collaborating' } },
    { a: { text: 'I avoid taking positions that create controversy', style: 'avoiding' }, b: { text: 'I assert my wishes firmly', style: 'competing' } },
  ]
  const [current, setCurrent] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({ competing: 0, collaborating: 0, compromising: 0, avoiding: 0, accommodating: 0 })

  if (current >= questions.length) {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1])
    const descriptions: Record<string, string> = {
      competing: 'You tend toward asserting your own needs. In attachment, this may show up as pursuing, demanding, or controlling during conflict.',
      collaborating: 'You seek win-win solutions. This is often the healthiest approach and aligns with secure attachment behaviours.',
      compromising: 'You look for middle ground. This can be effective but sometimes means neither person\'s needs are fully met.',
      avoiding: 'You tend to sidestep conflict. In attachment, this may show up as withdrawing, stonewalling, or suppressing needs.',
      accommodating: 'You prioritise the other person\'s needs over your own. In attachment, this connects to fawning and codependent patterns.',
    }
    return (
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-calm-900">Your Conflict Style Profile</h4>
        {sorted.map(([style, count]) => (
          <div key={style} className="bg-calm-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-calm-800 capitalize">{style}</span>
              <span className="text-xs text-calm-500">{count}/{questions.length}</span>
            </div>
            <div className="h-2 bg-calm-200 rounded-full overflow-hidden mb-2"><div className="h-full bg-brand-500 rounded-full" style={{ width: `${(count / questions.length) * 100}%` }} /></div>
            {sorted[0][0] === style && <p className="text-xs text-calm-600">{descriptions[style]}</p>}
          </div>
        ))}
        <p className="text-xs text-calm-500">No style is always right or wrong — flexibility matters. The goal is to expand your range so you can choose the best approach for each situation.</p>
        <button onClick={onComplete} className="btn-primary">Continue</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-1 mb-2">{questions.map((_, i) => (<div key={i} className={cn('flex-1 h-1.5 rounded-full', i < current ? 'bg-brand-500' : i === current ? 'bg-brand-300' : 'bg-calm-200')} />))}</div>
      <p className="text-sm text-calm-700 font-medium">When in a disagreement, which is more like you?</p>
      <button onClick={() => { setScores({ ...scores, [questions[current].a.style]: scores[questions[current].a.style] + 1 }); setCurrent(current + 1) }} className="w-full text-left p-4 rounded-xl border-2 border-calm-200 hover:border-brand-300 transition-all text-sm text-calm-700">{questions[current].a.text}</button>
      <button onClick={() => { setScores({ ...scores, [questions[current].b.style]: scores[questions[current].b.style] + 1 }); setCurrent(current + 1) }} className="w-full text-left p-4 rounded-xl border-2 border-calm-200 hover:border-brand-300 transition-all text-sm text-calm-700">{questions[current].b.text}</button>
    </div>
  )
}

// Gratitude Journal Builder
function GratitudeJournalBuilder({ onComplete }: { onComplete: () => void }) {
  const [goodThings, setGoodThings] = useState(['', '', ''])
  const [person, setPerson] = useState('')
  const [personWhy, setPersonWhy] = useState('')
  const [strength, setStrength] = useState('')

  return (
    <div className="space-y-5">
      <div className="bg-warmth-50 rounded-xl p-4">
        <h4 className="text-sm font-semibold text-warmth-900 mb-3">Three Good Things Today</h4>
        {goodThings.map((g, i) => (
          <input key={i} className="input-field text-sm mb-2" placeholder={`Good thing ${i + 1}...`} value={g} onChange={(e) => { const arr = [...goodThings]; arr[i] = e.target.value; setGoodThings(arr) }} />
        ))}
      </div>
      <div className="bg-brand-50 rounded-xl p-4">
        <h4 className="text-sm font-semibold text-brand-900 mb-3">Someone I Am Grateful For</h4>
        <input className="input-field text-sm mb-2" placeholder="Who?" value={person} onChange={(e) => setPerson(e.target.value)} />
        <textarea className="textarea-field text-sm" rows={2} placeholder="Why are you grateful for them?" value={personWhy} onChange={(e) => setPersonWhy(e.target.value)} />
      </div>
      <div className="bg-calm-50 rounded-xl p-4">
        <h4 className="text-sm font-semibold text-calm-900 mb-3">A Strength I Used Today</h4>
        <input className="input-field text-sm" placeholder="e.g., I set a boundary, I asked for help, I was patient with myself..." value={strength} onChange={(e) => setStrength(e.target.value)} />
      </div>
      <button onClick={onComplete} className="btn-primary">Save & Continue</button>
    </div>
  )
}

// Self-Soothing Kit
function SelfSoothingKit({ onComplete }: { onComplete: () => void }) {
  const senses = [
    { name: 'Sight', suggestions: ['Look at nature photos', 'Watch a candle flame', 'Gaze at the sky', 'Look at art you love', 'Watch water flowing', 'Tidy a small space'] },
    { name: 'Sound', suggestions: ['Listen to calming music', 'Rain sounds', 'Birdsong recordings', 'A favourite podcast', 'Sing or hum', 'Wind chimes'] },
    { name: 'Touch', suggestions: ['Wrap in a soft blanket', 'Hold a warm mug', 'Stroke a pet', 'Use a stress ball', 'Take a warm bath', 'Weighted blanket'] },
    { name: 'Taste', suggestions: ['Sip herbal tea', 'Eat chocolate mindfully', 'Suck on a mint', 'Chew gum', 'Eat something crunchy', 'Drink cold water'] },
    { name: 'Smell', suggestions: ['Light a scented candle', 'Essential oils (lavender)', 'Fresh coffee', 'Flowers', 'Fresh laundry', 'Bake something'] },
  ]
  const [selected, setSelected] = useState<Record<string, string[]>>({})
  const [custom, setCustom] = useState<Record<string, string>>({})

  const toggle = (sense: string, item: string) => {
    setSelected((prev) => {
      const items = prev[sense] || []
      return { ...prev, [sense]: items.includes(item) ? items.filter((i) => i !== item) : [...items, item] }
    })
  }
  const addCustom = (sense: string) => {
    if (!custom[sense]?.trim()) return
    setSelected((prev) => ({ ...prev, [sense]: [...(prev[sense] || []), custom[sense].trim()] }))
    setCustom((prev) => ({ ...prev, [sense]: '' }))
  }
  const total = Object.values(selected).reduce((sum, arr) => sum + arr.length, 0)

  return (
    <div className="space-y-4">
      {senses.map((sense) => (
        <div key={sense.name} className="bg-calm-50 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-calm-800 mb-2">{sense.name}</h4>
          <div className="flex flex-wrap gap-2 mb-2">
            {sense.suggestions.map((s) => (<button key={s} onClick={() => toggle(sense.name, s)} className={cn('px-3 py-1.5 rounded-lg text-xs font-medium transition-colors', (selected[sense.name] || []).includes(s) ? 'bg-brand-600 text-white' : 'bg-white text-calm-600 hover:bg-calm-100 border border-calm-200')}>{s}</button>))}
          </div>
          <div className="flex gap-2">
            <input className="input-field text-xs flex-1" placeholder="Add your own..." value={custom[sense.name] || ''} onChange={(e) => setCustom({ ...custom, [sense.name]: e.target.value })} onKeyDown={(e) => { if (e.key === 'Enter') addCustom(sense.name) }} />
            <button onClick={() => addCustom(sense.name)} className="btn-ghost text-xs">Add</button>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between pt-2">
        <p className="text-xs text-calm-400">{total} items in your kit</p>
        <button onClick={onComplete} className="btn-primary">Save My Kit</button>
      </div>
    </div>
  )
}

// Fear Ladder Builder
function FearLadderBuilder({ onComplete }: { onComplete: () => void }) {
  const [fear, setFear] = useState('')
  const [steps, setSteps] = useState([{ action: '', suds: 50 }])

  const addStep = () => setSteps([...steps, { action: '', suds: 50 }])
  const updateStep = (i: number, field: 'action' | 'suds', value: string | number) => {
    const updated = [...steps]; updated[i] = { ...updated[i], [field]: value }; setSteps(updated)
  }
  const sorted = [...steps].filter((s) => s.action.trim()).sort((a, b) => a.suds - b.suds)

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-calm-800 mb-1">What fear or avoidance pattern are you working on?</label>
        <input className="input-field" placeholder="e.g., Fear of being alone, fear of confrontation, fear of vulnerability..." value={fear} onChange={(e) => setFear(e.target.value)} />
      </div>
      <p className="text-sm text-calm-600">Build a ladder of steps from least to most anxiety-provoking. Rate each step 0-100 (SUDS — Subjective Units of Distress).</p>
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-2 bg-calm-50 rounded-lg p-3">
          <span className="text-xs font-bold text-calm-500 w-6">{i + 1}.</span>
          <input className="input-field text-sm flex-1" placeholder="Step description..." value={s.action} onChange={(e) => updateStep(i, 'action', e.target.value)} />
          <div className="flex items-center gap-1 shrink-0">
            <input type="range" min="0" max="100" value={s.suds} onChange={(e) => updateStep(i, 'suds', Number(e.target.value))} className="w-20" />
            <span className="text-xs font-bold text-calm-600 w-8">{s.suds}</span>
          </div>
        </div>
      ))}
      <button onClick={addStep} className="btn-ghost text-sm">+ Add step</button>
      {sorted.length > 0 && (
        <div className="bg-brand-50 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-brand-900 mb-2">Your Fear Ladder</h4>
          {sorted.map((s, i) => (
            <div key={i} className="flex items-center gap-2 py-1.5 border-b border-brand-100 last:border-0">
              <div className="w-10 h-2 bg-brand-100 rounded-full overflow-hidden"><div className="h-full bg-brand-500 rounded-full" style={{ width: `${s.suds}%` }} /></div>
              <span className="text-xs text-brand-800 flex-1">{s.action}</span>
              <span className="text-xs font-bold text-brand-600">{s.suds}</span>
            </div>
          ))}
          <p className="text-xs text-brand-600 mt-2">Start at the bottom of your ladder. Each step you take builds confidence for the next.</p>
        </div>
      )}
      <button onClick={onComplete} className="btn-primary">Save & Continue</button>
    </div>
  )
}

// Cognitive Distortion Spotter
function CognitiveDistortionSpotter({ onComplete }: { onComplete: () => void }) {
  const items = [
    { thought: 'They did not reply in an hour — they must be losing interest in me.', distortion: 'Mind Reading', explanation: 'You are assuming you know what the other person is thinking without evidence. There are many possible reasons for a delayed reply.' },
    { thought: 'If this relationship ends, I will never find anyone else.', distortion: 'Catastrophizing', explanation: 'You are jumping to the worst possible outcome and treating it as certain. Painful relationships ending often leads to better ones.' },
    { thought: 'I feel unlovable, so I must be unlovable.', distortion: 'Emotional Reasoning', explanation: 'You are treating a feeling as proof of a fact. Feeling unlovable does not make it true — feelings are data, not truth.' },
    { thought: 'They seem quiet today — I must have done something wrong.', distortion: 'Personalization', explanation: 'You are assuming their mood is about you when it could be about anything in their life.' },
    { thought: 'They should know what I need without me having to ask.', distortion: 'Should Statements', explanation: 'Expecting someone to read your mind sets you both up for disappointment. Even loving partners need clear communication.' },
    { thought: 'We had one bad fight. This whole relationship is doomed.', distortion: 'All-or-Nothing Thinking', explanation: 'One conflict does not define an entire relationship. Healthy relationships include rupture AND repair.' },
    { thought: 'They said something nice but they probably did not mean it.', distortion: 'Discounting the Positive', explanation: 'You are dismissing positive evidence. Anxious attachment makes it hard to take in good things — but the good things are still real.' },
    { thought: 'I just know they are going to leave me eventually.', distortion: 'Fortune Telling', explanation: 'You are predicting the future as though you can see it. This prediction is based on fear, not facts.' },
  ]
  const [current, setCurrent] = useState(0)
  const [guess, setGuess] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)
  const distortions = ['Mind Reading', 'Catastrophizing', 'Emotional Reasoning', 'Personalization', 'Should Statements', 'All-or-Nothing Thinking', 'Discounting the Positive', 'Fortune Telling']

  if (current >= items.length) {
    return (
      <div className="space-y-4">
        <div className={cn('rounded-xl p-5 text-center', score >= 6 ? 'bg-brand-50' : 'bg-warmth-50')}>
          <p className="text-2xl font-bold text-calm-900">{score}/{items.length}</p>
          <p className="text-sm text-calm-600 mt-1">{score >= 6 ? 'Excellent distortion detection!' : 'Good effort — recognizing these gets easier with practice.'}</p>
        </div>
        <button onClick={onComplete} className="btn-primary">Continue</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-1 mb-2">{items.map((_, i) => (<div key={i} className={cn('flex-1 h-1.5 rounded-full', i < current ? 'bg-brand-500' : i === current ? 'bg-brand-300' : 'bg-calm-200')} />))}</div>
      <div className="bg-warmth-50 rounded-xl p-4">
        <p className="text-xs text-warmth-600 font-medium mb-1">Thought {current + 1}</p>
        <p className="text-sm text-warmth-900 italic">&ldquo;{items[current].thought}&rdquo;</p>
      </div>
      {!revealed ? (
        <>
          <p className="text-xs font-medium text-calm-700">Which cognitive distortion is this?</p>
          <div className="grid grid-cols-2 gap-2">
            {distortions.map((d) => (
              <button key={d} onClick={() => { setGuess(d); setRevealed(true); if (d === items[current].distortion) setScore(score + 1) }} className="text-left p-3 rounded-xl border-2 border-calm-200 hover:border-brand-300 transition-all text-xs text-calm-700">{d}</button>
            ))}
          </div>
        </>
      ) : (
        <div className={cn('rounded-xl p-4', guess === items[current].distortion ? 'bg-brand-50 border border-brand-200' : 'bg-warmth-50 border border-warmth-200')}>
          <p className={cn('text-sm font-medium', guess === items[current].distortion ? 'text-brand-800' : 'text-warmth-800')}>{guess === items[current].distortion ? 'Correct!' : `Not quite — it's ${items[current].distortion}`}</p>
          <p className="text-xs text-calm-700 mt-1">{items[current].explanation}</p>
          <button onClick={() => { setCurrent(current + 1); setRevealed(false); setGuess('') }} className="btn-primary text-sm mt-3">{current < items.length - 1 ? 'Next' : 'See Results'}</button>
        </div>
      )}
    </div>
  )
}

// Safe Person Mapper
function SafePersonMapper({ onComplete }: { onComplete: () => void }) {
  const categories = [
    { id: 'emotional', label: 'Emotional Support', description: 'Someone who listens without judgement', placeholder: 'Who can you talk to when you are struggling?' },
    { id: 'practical', label: 'Practical Help', description: 'Someone who can help with tangible needs', placeholder: 'Who can you call for practical assistance?' },
    { id: 'crisis', label: 'Crisis Contact', description: 'Someone available in an emergency', placeholder: 'Who would you call at 3am?' },
    { id: 'fun', label: 'Fun & Play', description: 'Someone who lifts your spirits', placeholder: 'Who makes you laugh and feel light?' },
    { id: 'accountability', label: 'Accountability', description: 'Someone who holds you to your commitments', placeholder: 'Who can you be honest with about your patterns?' },
  ]
  const [people, setPeople] = useState<Record<string, { name: string; quality: number }>>({})

  const allFilled = categories.some((c) => people[c.id]?.name?.trim())

  return (
    <div className="space-y-4">
      <p className="text-sm text-calm-600">Map the safe people in your life. You do not need to fill every category — but notice where the gaps are.</p>
      {categories.map((cat) => (
        <div key={cat.id} className="bg-calm-50 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-calm-800">{cat.label}</h4>
          <p className="text-xs text-calm-500 mb-2">{cat.description}</p>
          <input className="input-field text-sm mb-2" placeholder={cat.placeholder} value={people[cat.id]?.name || ''} onChange={(e) => setPeople({ ...people, [cat.id]: { ...people[cat.id], name: e.target.value, quality: people[cat.id]?.quality || 3 } })} />
          {people[cat.id]?.name && (
            <div>
              <label className="block text-xs text-calm-500 mb-1">How safe do you feel with this person? (1-5)</label>
              <div className="flex gap-1">{[1, 2, 3, 4, 5].map((v) => (<button key={v} onClick={() => setPeople({ ...people, [cat.id]: { ...people[cat.id], quality: v } })} className={cn('w-8 h-8 rounded-lg text-xs font-bold', people[cat.id]?.quality === v ? 'bg-brand-600 text-white' : 'bg-white text-calm-500 border border-calm-200')}>{v}</button>))}</div>
            </div>
          )}
        </div>
      ))}
      {!allFilled && <p className="text-xs text-warmth-600">If you cannot name anyone for most categories, building your support network is an important next step. Consider this a gap to address, not a personal failing.</p>}
      <button onClick={onComplete} className="btn-primary">Save & Continue</button>
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
      case 'ValuesCardSort':
        return <ValuesCardSort onComplete={onComplete} />
      case 'WindowOfToleranceTracker':
        return <WindowOfToleranceTracker onComplete={onComplete} />
      case 'BodyScanExercise':
        return <BodyScanExercise onComplete={onComplete} />
      case 'EmotionWheelExplorer':
        return <EmotionWheelExplorer onComplete={onComplete} />
      case 'RelationshipPatternQuiz':
        return <RelationshipPatternQuiz onComplete={onComplete} />
      case 'InnerChildLetter':
        return <InnerChildLetter onComplete={onComplete} />
      case 'NeedsInventory':
        return <NeedsInventory onComplete={onComplete} />
      case 'BoundaryScenarioBuilder':
        return <BoundaryScenarioBuilder onComplete={onComplete} />
      case 'ConflictStyleAssessment':
        return <ConflictStyleAssessment onComplete={onComplete} />
      case 'GratitudeJournalBuilder':
        return <GratitudeJournalBuilder onComplete={onComplete} />
      case 'SelfSoothingKit':
        return <SelfSoothingKit onComplete={onComplete} />
      case 'FearLadderBuilder':
        return <FearLadderBuilder onComplete={onComplete} />
      case 'CognitiveDistortionSpotter':
        return <CognitiveDistortionSpotter onComplete={onComplete} />
      case 'SafePersonMapper':
        return <SafePersonMapper onComplete={onComplete} />
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
