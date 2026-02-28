export interface Module {
  id: string
  title: string
  description: string
  icon: string
  sessions: Session[]
  prerequisites: string[]
  order: number
  category: 'foundation' | 'skills' | 'growth' | 'integration' | 'relationships'
}

export interface Session {
  id: string
  moduleId: string
  title: string
  description: string
  estimatedMinutes: number
  learningObjectives: string[]
  segments: Segment[]
  prerequisites: string[]
  contraindications: string[]
}

export type SegmentType = 'safety-check' | 'psychoeducation' | 'interactive' | 'journal' | 'quiz' | 'action-plan' | 'breathing' | 'reflection'

export interface Segment {
  id: string
  type: SegmentType
  title: string
  content: SegmentContent
  estimatedMinutes: number
}

export type SegmentContent =
  | SafetyCheckContent
  | PsychoeducationContent
  | InteractiveContent
  | JournalContent
  | QuizContent
  | ActionPlanContent
  | BreathingContent
  | ReflectionContent

export interface SafetyCheckContent {
  type: 'safety-check'
  question: string
  options: { label: string; value: number }[]
}

export interface PsychoeducationContent {
  type: 'psychoeducation'
  sections: {
    heading?: string
    text: string
    keyIdeas?: string[]
  }[]
}

export interface InteractiveContent {
  type: 'interactive'
  component: string
  config: Record<string, unknown>
  instructions: string
}

export interface JournalContent {
  type: 'journal'
  prompts: string[]
  privacyNote: string
}

export interface QuizContent {
  type: 'quiz'
  items: QuizItem[]
}

export interface QuizItem {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface ActionPlanContent {
  type: 'action-plan'
  prompt: string
  options: { id: string; label: string; description: string }[]
  timeHorizonDays: number
}

export interface BreathingContent {
  type: 'breathing'
  pattern: { inhale: number; hold: number; exhale: number; holdAfter?: number }
  durationSeconds: number
  instruction: string
}

export interface ReflectionContent {
  type: 'reflection'
  prompts: string[]
}

export interface UserProgress {
  completedSessions: string[]
  completedModules: string[]
  currentStreak: number
  longestStreak: number
  lastActivityDate: string | null
  badges: Badge[]
  journalEntries: JournalEntry[]
  quizScores: Record<string, number>
  actionPlans: ActionPlan[]
  activationHistory: ActivationEntry[]
  safetyPlanCompleted: boolean
  onboardingCompleted: boolean
  consentGiven: ConsentRecord
  goals: string[]
}

export interface Badge {
  id: string
  title: string
  description: string
  icon: string
  earnedDate: string
  category: 'skill' | 'milestone' | 'streak' | 'courage'
}

export interface JournalEntry {
  id: string
  sessionId: string
  date: string
  prompts: string[]
  responses: string[]
  isPrivate: boolean
}

export interface ActionPlan {
  id: string
  sessionId: string
  selectedAction: string
  commitDate: string
  completed: boolean
  completedDate?: string
}

export interface ActivationEntry {
  date: string
  level: number
  context?: string
}

export interface ConsentRecord {
  accountCreation: boolean
  journalStorage: boolean
  analytics: boolean
  dateGiven: string
}

export interface CrisisContact {
  country: string
  services: {
    name: string
    phone: string
    description: string
    url?: string
    type: 'general' | 'suicide' | 'dv' | 'youth'
  }[]
}

export type SafetyPlanStep = {
  id: string
  title: string
  description: string
  items: string[]
}
