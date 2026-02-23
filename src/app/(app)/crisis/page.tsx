'use client'

import { useEffect } from 'react'
import { useAppStore } from '@/lib/store'

export default function CrisisPage() {
  const enterCrisisMode = useAppStore((s) => s.enterCrisisMode)

  useEffect(() => {
    enterCrisisMode()
  }, [enterCrisisMode])

  return (
    <div className="page-width py-12 text-center">
      <p className="text-calm-600">Loading crisis resources...</p>
    </div>
  )
}
