'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ReparentLogo, ReparentWordmark, CheckIcon, ShieldIcon } from '@/components/ui/Icons'

export default function VerifyEmailPage() {
  const router = useRouter()
  const [code, setCode] = useState('')
  const [email, setEmail] = useState('')
  const [demoCode, setDemoCode] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('verify-email')
    const storedCode = sessionStorage.getItem('verify-code')
    if (storedEmail) setEmail(storedEmail)
    if (storedCode) setDemoCode(storedCode)
  }, [])

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!code || code.length !== 6) {
      setError('Please enter the 6-digit verification code')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Verification failed')
        setLoading(false)
        return
      }

      setSuccess(true)
      sessionStorage.removeItem('verify-email')
      sessionStorage.removeItem('verify-code')

      // Redirect to dashboard after 2 seconds
      setTimeout(() => router.push('/dashboard'), 2000)
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
              Verify Your Email
            </h1>
            {email && (
              <p className="mt-2 text-calm-600 text-sm">
                We sent a verification code to <strong>{email}</strong>
              </p>
            )}
          </div>

          {success ? (
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto">
                <CheckIcon size={32} className="text-brand-600" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-calm-900">Email Verified!</h2>
              <p className="mt-2 text-calm-600 text-sm">
                Redirecting you to the dashboard...
              </p>
            </div>
          ) : (
            <>
              {demoCode && (
                <div className="mb-6 bg-brand-50 border border-brand-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <ShieldIcon size={18} className="text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand-800">Demo Mode</p>
                      <p className="text-sm text-brand-600 mt-1">
                        In production, this code would be sent to your email. For demo purposes, your verification code is:
                      </p>
                      <p className="mt-2 text-2xl font-mono font-bold text-brand-700 tracking-widest">
                        {demoCode}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-safety-50 border border-safety-200 rounded-xl text-safety-700 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleVerify} className="space-y-4">
                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-calm-700 mb-1">
                    Verification Code
                  </label>
                  <input
                    id="code"
                    type="text"
                    value={code}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '').slice(0, 6)
                      setCode(val)
                      setError('')
                    }}
                    className="input-field text-center text-2xl tracking-widest font-mono"
                    placeholder="000000"
                    maxLength={6}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || code.length !== 6}
                  className="btn-primary w-full text-base py-4"
                >
                  {loading ? 'Verifying...' : 'Verify Email'}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-calm-500">
                Didn&apos;t receive the code?{' '}
                <button className="text-brand-600 hover:text-brand-700 font-medium">
                  Resend code
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
