'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif', padding: '2rem', textAlign: 'center' }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Something went wrong</h1>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>An unexpected error occurred. Please try again.</p>
            <button
              onClick={() => reset()}
              style={{ padding: '0.625rem 1.5rem', backgroundColor: '#7c3aed', color: '#fff', border: 'none', borderRadius: '0.75rem', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500 }}
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
