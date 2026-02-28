'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTED_STARTERS = [
  'I struggle with anxious attachment — what does that mean?',
  'Why do I keep going back to people who hurt me?',
  'How do I start setting boundaries without feeling guilty?',
  'I feel like I lost myself in my relationship',
  'What is the window of tolerance?',
  'How do I calm my nervous system when I feel triggered?',
]

export function TherapeuticChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: content.trim(),
    }

    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        if (data?.fallback) {
          throw new Error(data.error)
        }
        throw new Error('Failed to get response')
      }

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: '',
      }
      setMessages((prev) => [...prev, assistantMessage])

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (reader) {
        let fullContent = ''
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value, { stream: true })
          const lines = chunk.split('\n')

          for (const line of lines) {
            if (line.startsWith('0:')) {
              try {
                const text = JSON.parse(line.slice(2))
                fullContent += text
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantMessage.id ? { ...m, content: fullContent } : m
                  )
                )
              } catch {
                // skip unparseable chunks
              }
            }
          }
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-brand-600 hover:bg-brand-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Open therapeutic companion chat"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-calm-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Talk to our Healing Companion
        </span>
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[420px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-4rem)] bg-white rounded-2xl shadow-2xl border border-calm-200 flex flex-col overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="bg-brand-600 text-white px-5 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-sm">Healing Companion</h3>
            <p className="text-xs text-white/70">Attachment-informed support</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white/80 hover:text-white p-1"
          aria-label="Close chat"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Disclaimer */}
      <div className="bg-warmth-50 px-4 py-2 text-xs text-calm-500 border-b border-calm-100 shrink-0">
        Educational companion, not therapy. In crisis? Use the{' '}
        <span className="font-medium text-safety-600">Need Help Now</span> button.
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.length === 0 && (
          <div className="space-y-4">
            <div className="bg-brand-50 rounded-xl p-4">
              <p className="text-sm text-calm-700 leading-relaxed">
                Welcome. I&apos;m here to help you explore attachment patterns, understand your
                nervous system, and build skills for healthier relationships. What&apos;s on
                your mind?
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-calm-400 font-medium uppercase tracking-wide">Try asking:</p>
              {SUGGESTED_STARTERS.map((starter) => (
                <button
                  key={starter}
                  onClick={() => sendMessage(starter)}
                  className="block w-full text-left text-sm text-calm-600 hover:text-brand-700 bg-calm-50 hover:bg-brand-50 rounded-lg px-3 py-2 transition-colors"
                >
                  {starter}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                message.role === 'user'
                  ? 'bg-brand-600 text-white'
                  : 'bg-calm-50 text-calm-800'
              }`}
            >
              <div className="whitespace-pre-wrap">{message.content}</div>
            </div>
          </div>
        ))}

        {isLoading && messages[messages.length - 1]?.role === 'user' && (
          <div className="flex justify-start">
            <div className="bg-calm-50 rounded-xl px-4 py-3">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-calm-300 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-calm-300 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-calm-300 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-warmth-50 border border-warmth-200 rounded-xl px-4 py-3 text-sm text-warmth-700">
            {error}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t border-calm-100 px-4 py-3 shrink-0">
        <div className="flex gap-2 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Share what's on your mind..."
            rows={1}
            className="flex-1 resize-none rounded-xl border border-calm-200 px-4 py-2.5 text-sm text-calm-800 placeholder:text-calm-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent max-h-24"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-brand-600 hover:bg-brand-700 disabled:bg-calm-200 disabled:cursor-not-allowed text-white rounded-xl p-2.5 transition-colors shrink-0"
            aria-label="Send message"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}
