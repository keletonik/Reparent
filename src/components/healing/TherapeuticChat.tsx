'use client'

import { useState, useRef, useEffect } from 'react'
import { HeartIcon, SparklesIcon } from '@/components/ui/Icons'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: 'welcome',
    role: 'assistant',
    content: `Welcome. I am glad you are here.

Before we begin, I want you to know something: this space is yours. There are no wrong answers, no wrong emotions, and no wrong pace. Whatever you bring here — grief, anger, confusion, numbness, hope — all of it is welcome.

I am trained in attachment theory, Internal Family Systems, somatic experiencing, and several other evidence-based approaches. But more than any technique, I am here to listen. Truly listen.

How are you arriving today? If you could give your nervous system a number from 0 to 10 — where 0 is completely calm and 10 is extremely activated — where would you place yourself right now?`,
    timestamp: new Date(),
  },
]

function TypingIndicator() {
  return (
    <div className="flex items-center gap-3 px-5 py-4">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-200 to-brand-100 flex items-center justify-center shrink-0">
        <HeartIcon size={14} className="text-brand-600" />
      </div>
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white border border-calm-100/50 rounded-2xl rounded-bl-md shadow-soft">
        <div className="typing-dot" />
        <div className="typing-dot" />
        <div className="typing-dot" />
      </div>
    </div>
  )
}

export function TherapeuticChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const generateResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase()

    // Crisis detection
    if (lower.includes('suicide') || lower.includes('kill myself') || lower.includes('end my life') || lower.includes('want to die')) {
      return `I hear you, and I want you to know that what you are feeling right now is real and it matters. You matter.

Please reach out to a crisis service right now:
- Australia: Lifeline 13 11 14
- UK: Samaritans 116 123
- US: 988 Suicide & Crisis Lifeline
- Canada: 988 Suicide Crisis Helpline

You can also click the "Need Help Now" button at the top of this page.

If you are in immediate danger, please call emergency services (000 / 999 / 911).

I am here with you. You do not have to go through this alone.`
    }

    // Self-harm detection
    if (lower.includes('hurt myself') || lower.includes('self-harm') || lower.includes('cutting')) {
      return `Thank you for trusting me with that. It takes real courage to say that out loud.

Self-harm is often a way of coping with pain that feels unbearable. The urge makes sense — it is your nervous system trying to find relief. But there are other ways to get that relief.

Right now, try the TIPP skill:
- **T**emperature: Hold something cold (ice cube, cold water on your wrists)
- **I**ntense exercise: 60 seconds of jumping jacks or running in place
- **P**aced breathing: Inhale for 4, hold for 4, exhale for 8
- **P**aired muscle relaxation: Tense and release each muscle group

If you are actively harming yourself or have the urge to, please use the crisis button above.

Can you tell me what you are feeling right now? I am here to listen.`
    }

    // High activation
    if (lower.match(/\b([7-9]|10)\b/) && (lower.includes('activation') || lower.includes('number') || lower.includes('distress') || lower.includes('anxious') || lower.includes('panic'))) {
      return `I hear that you are quite activated right now. That is important information — thank you for sharing it.

Let's pause the deeper work and focus on bringing your nervous system back into its window of tolerance.

**Let's do a grounding exercise together:**

Can you name for me:
- 5 things you can **see** right now
- 4 things you can **touch**
- 3 things you can **hear**
- 2 things you can **smell**
- 1 thing you can **taste**

Take your time. There is no rush. I will be right here.

If this feels like too much, we can try something simpler — like just focusing on the feeling of your feet against the floor. What feels most manageable right now?`
    }

    // Low activation — good for deeper work
    if (lower.match(/\b[0-3]\b/) && (lower.includes('calm') || lower.includes('grounded') || lower.includes('activation') || lower.includes('good') || lower.includes('okay'))) {
      return `That is a really good place to be. When your nervous system is settled like this, it means you have more capacity for exploration — if that feels right today.

I am curious about something. You chose to come here, to this program. Something is calling you toward healing.

What is the thing you most want to understand about yourself? Or, said another way: if you could change one pattern in your relationships or your inner world, what would it be?

Take a moment before you answer. Notice what comes up in your body first, before your mind starts analyzing.`
    }

    // Attachment-related
    if (lower.includes('attachment') || lower.includes('anxious') && lower.includes('relationship') || lower.includes('avoidant') || lower.includes('partner') || lower.includes('relationship')) {
      return `Thank you for sharing that. Attachment patterns are among the most powerful forces in our lives — they shape how we love, how we fight, how we seek comfort, and how we run from it.

Here is something important: your attachment style is not a permanent label. It is a pattern that developed for very good reasons, usually in childhood. It was your nervous system's best strategy for getting love and safety in the environment you were in.

I am curious: when you think about your closest relationships — past or present — what is the feeling that shows up most often? Is it...
- A fear of being abandoned or left?
- A need to keep distance and protect yourself?
- A confusing mix of wanting closeness and being terrified of it?
- Something else entirely?

Whatever it is, there is no wrong answer. I am just trying to understand your inner world.`
    }

    // Inner child / childhood
    if (lower.includes('child') || lower.includes('childhood') || lower.includes('parent') || lower.includes('family') || lower.includes('growing up') || lower.includes('young')) {
      return `You are touching on something really important here. Our early experiences — especially with caregivers — quite literally wire our nervous systems and shape our core beliefs about ourselves and others.

I want to be gentle with this, because these memories can carry a lot of charge.

Before we go deeper, let me ask: on that 0-10 scale, where is your activation right now? I want to make sure we stay within your window of tolerance.

If you feel grounded enough, I would like to ask you this: when you were young and you felt scared, sad, or overwhelmed, who did you go to? And what happened when you went to them?

Take your time. And know that whatever your answer is — even if the answer is "no one" — that tells us something valuable about the patterns you are carrying today.`
    }

    // Emotions / feelings
    if (lower.includes('angry') || lower.includes('anger') || lower.includes('rage') || lower.includes('frustrated')) {
      return `Anger. Let me say something that might surprise you: anger is one of the most important emotions we have. It is the emotion that says: "A boundary has been crossed. Something is not right."

Many people — especially those who grew up in environments where anger was not safe — learn to suppress it, turn it inward, or express it in ways that scare them. But the anger itself is not the problem. It is a signal.

I am curious: when you feel that anger, where does it live in your body? Does it have a temperature? A texture? A shape?

And if that anger could speak — if it had words — what would it want to say? To whom?

You do not need to act on anger to honor it. Sometimes just witnessing it, naming it, and understanding what it is protecting is enough.`
    }

    if (lower.includes('sad') || lower.includes('grief') || lower.includes('loss') || lower.includes('cry') || lower.includes('crying')) {
      return `There is such tenderness in what you are sharing. Grief and sadness are some of the most sacred emotions we carry — they are the price of having loved, of having hoped, of having deserved more than we received.

I am not going to rush you past this. This culture tends to treat sadness as a problem to solve, but sometimes the most healing thing we can do is simply sit with it. To let it be.

Can you tell me more about what the sadness is connected to? Is it about something recent, or does it feel older — like it has been waiting a long time to be felt?

There is no wrong answer. And if tears come, let them. Tears are the body's way of processing. They literally contain stress hormones. Your body knows what it is doing.`
    }

    if (lower.includes('numb') || lower.includes('nothing') || lower.includes('empty') || lower.includes('feel nothing') || lower.includes('disconnected') || lower.includes('shut down')) {
      return `Numbness. That is actually a very meaningful response — not the absence of feeling, but a protective state your nervous system enters when feeling becomes too much.

In polyvagal terms, this is often the dorsal vagal response — a kind of shutdown that happens when fight-or-flight was not safe or possible. It is your body saying: "If I cannot fight and I cannot run, I will go still."

This was brilliantly adaptive when you needed it. But now, it may be getting in the way of the life you want.

Here is something we can try together, very gently: can you place one hand on your chest and one on your belly? Just notice the rise and fall of your breath. You do not need to change it — just notice it.

Now, very slowly, can you scan your body and tell me: is there anywhere — even a tiny spot — where you feel something? Warmth, tingling, tightness, heaviness? Even numbness in a specific location counts as a sensation.

We are not trying to force feeling. We are just listening to your body.`
    }

    // Default response — therapeutic and deepening
    return `Thank you for sharing that with me. I want to make sure I am hearing you fully.

What I notice is that there is something important beneath the surface of what you are describing. I do not want to assume — I want to check.

Let me reflect back what I am hearing, and you tell me if it lands:

It sounds like there is a part of you that is carrying something — maybe a belief, a memory, a feeling — that is shaping how you experience things. And another part of you that brought you here, that knows something different is possible.

Is that close? What would you add or change?

And as you consider that question, notice what is happening in your body right now. Sometimes the body tells us things before the mind can articulate them.`
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate thoughtful response time
    const responseTime = 1500 + Math.random() * 2000
    setTimeout(() => {
      const response = generateResponse(userMessage.content)
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, responseTime)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] max-h-[700px] bg-white/50 backdrop-blur-sm rounded-2xl border border-calm-100/50 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-calm-100/50 bg-white/80 backdrop-blur-sm flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-200 to-warmth-200 flex items-center justify-center">
          <HeartIcon size={18} className="text-brand-600" />
        </div>
        <div>
          <p className="font-semibold text-calm-900 text-sm">Reparent Therapeutic Guide</p>
          <p className="text-xs text-calm-500">Attachment-Informed Healing Companion</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse-gentle" />
          <span className="text-xs text-calm-400">Active</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-200 to-brand-100 flex items-center justify-center shrink-0 mt-1">
                <HeartIcon size={14} className="text-brand-600" />
              </div>
            )}
            <div className={`max-w-[80%] ${
              msg.role === 'user' ? 'chat-bubble-user px-5 py-3' : 'chat-bubble-ai px-5 py-4'
            }`}>
              <div className="text-sm text-calm-800 leading-relaxed whitespace-pre-wrap">
                {msg.content.split('**').map((part, i) =>
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                )}
              </div>
            </div>
          </div>
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-4 border-t border-calm-100/50 bg-white/80 backdrop-blur-sm">
        <div className="flex items-end gap-3">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Share what is on your mind... (Enter to send, Shift+Enter for new line)"
              rows={1}
              className="textarea-field pr-4 min-h-[44px] max-h-[120px] text-sm"
              style={{ resize: 'none' }}
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="btn-primary px-4 py-3 shrink-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-calm-400 mt-2 text-center">
          This is an AI healing companion, not a replacement for professional therapy. If you are in crisis, use the crisis button above.
        </p>
      </div>
    </div>
  )
}
