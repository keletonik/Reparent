'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ReparentLogo, ReparentWordmark } from '@/components/ui/Icons'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please enter your email and password')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        if (data.needsVerification) {
          sessionStorage.setItem('verify-email', data.email)
          router.push('/verify-email')
          return
        }
        setError(data.error || 'Login failed')
        setLoading(false)
        return
      }

      // Successful login - redirect to dashboard
      router.push('/dashboard')
    } catch {
      setError('Network error. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-warmth-50 flex items-center justify-center p-4">
      <div className="card-elevated max-w-md w-full">
        <div className="p-6 sm:p-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2">
              <ReparentLogo size={36} />
              <ReparentWordmark className="text-xl" />
            </Link>
            <h1 className="mt-4 text-2xl font-serif font-bold text-calm-900">
              Welcome Back
            </h1>
            <p className="mt-2 text-calm-600 text-sm">
              Log in to continue your learning journey
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-safety-50 border border-safety-200 rounded-xl text-safety-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-calm-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError('') }}
                className="input-field"
                placeholder="jane@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-calm-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError('') }}
                className="input-field"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full text-base py-4"
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-calm-500">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-brand-600 hover:text-brand-700 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
