'use client'

import Link from 'next/link'

export default function ModulesError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-serif font-bold text-calm-900">Something went wrong</h1>
        <p className="mt-2 text-calm-600 text-sm">
          We had trouble loading this module. You can try again or go back to the modules list.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => reset()} className="btn-primary">
            Try Again
          </button>
          <Link href="/modules" className="btn-secondary">
            Back to Modules
          </Link>
        </div>
      </div>
    </div>
  )
}
