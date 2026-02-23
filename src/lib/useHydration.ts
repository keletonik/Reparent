'use client'

import { useState, useEffect } from 'react'

/**
 * Returns true only after the Zustand store has hydrated from localStorage.
 * Use this to prevent hydration mismatches between SSR and client.
 */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return hydrated
}
