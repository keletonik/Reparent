export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  mobile: string
  company: string
  passwordHash: string
  salt: string
  verified: boolean
  verificationCode: string
  createdAt: string
  lastLogin: string | null
}

// In-memory user store (persists while serverless function is warm)
// For production, replace with a database (Vercel Postgres, Supabase, etc.)
const users = new Map<string, User>()

// Index by email for quick lookup
const emailIndex = new Map<string, string>()

export function createUser(user: User): void {
  users.set(user.id, user)
  emailIndex.set(user.email.toLowerCase(), user.id)
}

export function getUserById(id: string): User | undefined {
  return users.get(id)
}

export function getUserByEmail(email: string): User | undefined {
  const id = emailIndex.get(email.toLowerCase())
  if (!id) return undefined
  return users.get(id)
}

export function updateUser(id: string, updates: Partial<User>): User | undefined {
  const user = users.get(id)
  if (!user) return undefined
  const updated = { ...user, ...updates }
  users.set(id, updated)
  if (updates.email) {
    emailIndex.delete(user.email.toLowerCase())
    emailIndex.set(updates.email.toLowerCase(), id)
  }
  return updated
}

export function getAllUsers(): User[] {
  return Array.from(users.values())
}

export function getUserCount(): number {
  return users.size
}
