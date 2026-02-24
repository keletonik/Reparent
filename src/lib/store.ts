'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserProgress, Badge, JournalEntry, ActionPlan, ActivationEntry, ConsentRecord } from './types'

const defaultProgress: UserProgress = {
  completedSessions: [],
  completedModules: [],
  currentStreak: 0,
  longestStreak: 0,
  lastActivityDate: null,
  badges: [],
  journalEntries: [],
  quizScores: {},
  actionPlans: [],
  activationHistory: [],
  safetyPlanCompleted: false,
  onboardingCompleted: false,
  consentGiven: {
    accountCreation: false,
    journalStorage: false,
    analytics: false,
    dateGiven: '',
  },
  goals: [],
}

interface AppState {
  // User progress
  progress: UserProgress

  // UI state
  crisisMode: boolean
  quickExitActive: boolean
  sidebarOpen: boolean
  currentActivation: number

  // Actions - Progress
  completeSession: (sessionId: string) => void
  completeModule: (moduleId: string) => void
  updateStreak: () => void
  addBadge: (badge: Badge) => void
  addJournalEntry: (entry: JournalEntry) => void
  saveQuizScore: (sessionId: string, score: number) => void
  addActionPlan: (plan: ActionPlan) => void
  completeActionPlan: (planId: string) => void
  recordActivation: (entry: ActivationEntry) => void
  completeSafetyPlan: () => void
  completeOnboarding: () => void
  setConsent: (consent: ConsentRecord) => void
  setGoals: (goals: string[]) => void

  // Actions - UI
  enterCrisisMode: () => void
  exitCrisisMode: () => void
  triggerQuickExit: () => void
  clearQuickExit: () => void
  toggleSidebar: () => void
  setActivation: (level: number) => void

  // Reset
  resetProgress: () => void
}

function isSameDay(d1: string, d2: string): boolean {
  return d1.slice(0, 10) === d2.slice(0, 10)
}

function isConsecutiveDay(prev: string, current: string): boolean {
  const p = new Date(prev)
  const c = new Date(current)
  const diff = Math.floor((c.getTime() - p.getTime()) / (1000 * 60 * 60 * 24))
  return diff === 1
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      progress: defaultProgress,
      crisisMode: false,
      quickExitActive: false,
      sidebarOpen: false,
      currentActivation: 0,

      completeSession: (sessionId: string) => {
        set((state) => {
          if (state.progress.completedSessions.includes(sessionId)) return state
          const newCompleted = [...state.progress.completedSessions, sessionId]
          return {
            progress: { ...state.progress, completedSessions: newCompleted },
          }
        })
        get().updateStreak()
      },

      completeModule: (moduleId: string) => {
        set((state) => {
          if (state.progress.completedModules.includes(moduleId)) return state
          const newCompleted = [...state.progress.completedModules, moduleId]
          const newBadges = [...state.progress.badges]
          const milestoneCount = newCompleted.length
          if (milestoneCount === 1) {
            newBadges.push({
              id: `module-first`,
              title: 'First Steps',
              description: 'Completed your first module',
              icon: 'footprints',
              earnedDate: new Date().toISOString(),
              category: 'milestone',
            })
          }
          if (milestoneCount === 6) {
            newBadges.push({
              id: `module-halfway`,
              title: 'Halfway There',
              description: 'Completed 6 modules',
              icon: 'mountain',
              earnedDate: new Date().toISOString(),
              category: 'milestone',
            })
          }
          if (milestoneCount === 13) {
            newBadges.push({
              id: `module-complete`,
              title: 'Journey Complete',
              description: 'Completed all 13 core modules',
              icon: 'trophy',
              earnedDate: new Date().toISOString(),
              category: 'milestone',
            })
          }
          return {
            progress: {
              ...state.progress,
              completedModules: newCompleted,
              badges: newBadges,
            },
          }
        })
      },

      updateStreak: () => {
        set((state) => {
          const today = new Date().toISOString()
          const last = state.progress.lastActivityDate
          let newStreak = state.progress.currentStreak
          if (!last || !isSameDay(last, today)) {
            if (last && isConsecutiveDay(last, today)) {
              newStreak += 1
            } else if (!last) {
              newStreak = 1
            } else {
              // Streak forgiveness: allow 1 day gap
              const prev = new Date(last)
              const curr = new Date(today)
              const diff = Math.floor((curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24))
              if (diff <= 2) {
                newStreak += 1
              } else {
                newStreak = 1
              }
            }
          }
          const newBadges = [...state.progress.badges]
          if (newStreak >= 7 && !newBadges.find((b) => b.id === 'streak-7')) {
            newBadges.push({
              id: 'streak-7',
              title: 'Week Warrior',
              description: '7-day learning streak',
              icon: 'flame',
              earnedDate: today,
              category: 'streak',
            })
          }
          if (newStreak >= 30 && !newBadges.find((b) => b.id === 'streak-30')) {
            newBadges.push({
              id: 'streak-30',
              title: 'Steady Growth',
              description: '30-day learning streak',
              icon: 'sparkles',
              earnedDate: today,
              category: 'streak',
            })
          }
          return {
            progress: {
              ...state.progress,
              currentStreak: newStreak,
              longestStreak: Math.max(newStreak, state.progress.longestStreak),
              lastActivityDate: today,
              badges: newBadges,
            },
          }
        })
      },

      addBadge: (badge: Badge) => {
        set((state) => {
          if (state.progress.badges.find((b) => b.id === badge.id)) return state
          return {
            progress: {
              ...state.progress,
              badges: [...state.progress.badges, badge],
            },
          }
        })
      },

      addJournalEntry: (entry: JournalEntry) => {
        set((state) => ({
          progress: {
            ...state.progress,
            journalEntries: [...state.progress.journalEntries, entry],
          },
        }))
      },

      saveQuizScore: (sessionId: string, score: number) => {
        set((state) => ({
          progress: {
            ...state.progress,
            quizScores: { ...state.progress.quizScores, [sessionId]: score },
          },
        }))
      },

      addActionPlan: (plan: ActionPlan) => {
        set((state) => ({
          progress: {
            ...state.progress,
            actionPlans: [...state.progress.actionPlans, plan],
          },
        }))
      },

      completeActionPlan: (planId: string) => {
        set((state) => ({
          progress: {
            ...state.progress,
            actionPlans: state.progress.actionPlans.map((p) =>
              p.id === planId ? { ...p, completed: true, completedDate: new Date().toISOString() } : p
            ),
          },
        }))
      },

      recordActivation: (entry: ActivationEntry) => {
        set((state) => ({
          progress: {
            ...state.progress,
            activationHistory: [...state.progress.activationHistory, entry],
          },
        }))
      },

      completeSafetyPlan: () => {
        set((state) => ({
          progress: { ...state.progress, safetyPlanCompleted: true },
        }))
      },

      completeOnboarding: () => {
        set((state) => ({
          progress: { ...state.progress, onboardingCompleted: true },
        }))
      },

      setConsent: (consent: ConsentRecord) => {
        set((state) => ({
          progress: { ...state.progress, consentGiven: consent },
        }))
      },

      setGoals: (goals: string[]) => {
        set((state) => ({
          progress: { ...state.progress, goals },
        }))
      },

      enterCrisisMode: () => set({ crisisMode: true }),
      exitCrisisMode: () => set({ crisisMode: false }),
      triggerQuickExit: () => set({ quickExitActive: true }),
      clearQuickExit: () => set({ quickExitActive: false }),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setActivation: (level: number) => set({ currentActivation: level }),

      resetProgress: () => set({ progress: defaultProgress }),
    }),
    {
      name: 'reparent-storage',
      partialize: (state) => ({ progress: state.progress }),
    }
  )
)
