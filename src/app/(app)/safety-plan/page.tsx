'use client'

import { useState, useEffect } from 'react'
import { useAppStore } from '@/lib/store'
import { safetyPlanTemplate } from '@/lib/crisis-data'
import { ShieldIcon, CheckIcon, AlertTriangleIcon } from '@/components/ui/Icons'
import type { SafetyPlanStep } from '@/lib/types'

export default function SafetyPlanPage() {
  const { completeSafetyPlan } = useAppStore()
  const safetyPlanCompleted = useAppStore((s) => s.progress.safetyPlanCompleted)
  const [steps, setSteps] = useState<SafetyPlanStep[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('reparent-safety-plan')
      if (saved) return JSON.parse(saved)
    }
    return safetyPlanTemplate
  })
  const [newItems, setNewItems] = useState<Record<string, string>>({})

  useEffect(() => {
    localStorage.setItem('reparent-safety-plan', JSON.stringify(steps))
  }, [steps])

  const addItem = (stepId: string) => {
    const text = newItems[stepId]?.trim()
    if (!text) return
    setSteps((prev) =>
      prev.map((s) => (s.id === stepId ? { ...s, items: [...s.items, text] } : s))
    )
    setNewItems((prev) => ({ ...prev, [stepId]: '' }))
  }

  const removeItem = (stepId: string, index: number) => {
    setSteps((prev) =>
      prev.map((s) =>
        s.id === stepId ? { ...s, items: s.items.filter((_, i) => i !== index) } : s
      )
    )
  }

  const hasContent = steps.some((s) => s.items.length > 0)

  const handleComplete = () => {
    completeSafetyPlan()
  }

  return (
    <div className="page-width py-6 sm:py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold text-calm-900">Safety Plan</h1>
        <p className="mt-2 text-calm-600">
          Based on the Stanley-Brown Safety Planning Intervention. This is a tool for you to use
          during difficult moments — not a substitute for professional crisis care.
        </p>
      </div>

      <div className="bg-warmth-50 border border-warmth-200 rounded-xl p-4 flex items-start gap-3">
        <AlertTriangleIcon size={18} className="text-warmth-600 shrink-0 mt-0.5" />
        <div className="text-sm text-warmth-700">
          <p className="font-medium">Important</p>
          <p className="mt-1">
            This safety plan is stored only on your device. It is designed as a self-help tool
            and is most effective when developed with a mental health professional. If you are
            in immediate danger, call emergency services.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {steps.map((step, stepIndex) => (
          <div key={step.id} className="card p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-brand-700">{stepIndex + 1}</span>
              </div>
              <div>
                <h2 className="text-base font-semibold text-calm-900">{step.title}</h2>
                <p className="text-sm text-calm-600 mt-0.5">{step.description}</p>
              </div>
            </div>

            {step.items.length > 0 && (
              <ul className="space-y-2 mb-4 ml-11">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-calm-800 bg-calm-50 rounded-lg px-3 py-2">
                    <CheckIcon size={14} className="text-brand-500 shrink-0" />
                    <span className="flex-1">{item}</span>
                    <button
                      onClick={() => removeItem(step.id, i)}
                      className="text-calm-400 hover:text-safety-500 text-xs shrink-0"
                      aria-label={`Remove ${item}`}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="ml-11 flex gap-2">
              <input
                type="text"
                className="input-field flex-1 text-sm"
                placeholder="Add an item..."
                value={newItems[step.id] || ''}
                onChange={(e) => setNewItems({ ...newItems, [step.id]: e.target.value })}
                onKeyDown={(e) => { if (e.key === 'Enter') addItem(step.id) }}
              />
              <button
                onClick={() => addItem(step.id)}
                className="btn-secondary text-sm shrink-0"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>

      {hasContent && !safetyPlanCompleted && (
        <div className="text-center">
          <button onClick={handleComplete} className="btn-primary gap-2">
            <ShieldIcon size={16} />
            Save My Safety Plan
          </button>
        </div>
      )}

      {safetyPlanCompleted && (
        <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 text-center">
          <p className="text-sm text-brand-700 font-medium">
            Your safety plan is saved. You can update it at any time.
          </p>
        </div>
      )}
    </div>
  )
}
