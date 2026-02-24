'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ReparentLogo, ReparentWordmark, ShieldIcon } from '@/components/ui/Icons'

export default function SignupPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    mobile: '',
    company: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      setError('Please fill in all required fields')
      return
    }

    if (form.password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          mobile: form.mobile,
          company: form.company,
          password: form.password,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Signup failed')
        setLoading(false)
        return
      }

      // Store verification info for the verify page
      sessionStorage.setItem('verify-email', form.email)
      sessionStorage.setItem('verify-code', data.verificationCode)

      router.push('/verify-email')
    } catch {
      setError('Network error. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-warmth-50 flex items-center justify-center p-4">
      <div className="card-elevated max-w-lg w-full">
        <div className="p-6 sm:p-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2">
              <ReparentLogo size={36} />
              <ReparentWordmark className="text-xl" />
            </Link>
            <h1 className="mt-4 text-2xl font-serif font-bold text-calm-900">
              Create Your Account
            </h1>
            <p className="mt-2 text-calm-600 text-sm">
              Join Reparent and begin your healing journey
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-safety-50 border border-safety-200 rounded-xl text-safety-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-calm-700 mb-1">
                  First Name <span className="text-safety-500">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  className="input-field"
                  placeholder="Jane"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-calm-700 mb-1">
                  Last Name <span className="text-safety-500">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={(e) => updateField('lastName', e.target.value)}
                  className="input-field"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-calm-700 mb-1">
                Email Address <span className="text-safety-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="input-field"
                placeholder="jane@example.com"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-calm-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="input-field"
                  placeholder="+61 2 1234 5678"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-calm-700 mb-1">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => updateField('mobile', e.target.value)}
                  className="input-field"
                  placeholder="+61 400 123 456"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-calm-700 mb-1">
                Company / Organisation
              </label>
              <input
                id="company"
                type="text"
                value={form.company}
                onChange={(e) => updateField('company', e.target.value)}
                className="input-field"
                placeholder="Your organisation (optional)"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-calm-700 mb-1">
                Password <span className="text-safety-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                value={form.password}
                onChange={(e) => updateField('password', e.target.value)}
                className="input-field"
                placeholder="Min. 8 characters"
                required
                minLength={8}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-calm-700 mb-1">
                Confirm Password <span className="text-safety-500">*</span>
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={(e) => updateField('confirmPassword', e.target.value)}
                className="input-field"
                placeholder="Re-enter your password"
                required
              />
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <ShieldIcon size={18} className="text-brand-600 shrink-0 mt-0.5" />
                <p className="text-sm text-brand-700">
                  Your password is securely hashed and never stored in plain text.
                  Your data is protected with industry-standard encryption.
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full text-base py-4"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-calm-500">
            Already have an account?{' '}
            <Link href="/login" className="text-brand-600 hover:text-brand-700 font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
