'use client'

import { useAppStore } from '@/lib/store'
import { PhoneIcon } from '@/components/ui/Icons'

export function CrisisButton() {
  const enterCrisisMode = useAppStore((s) => s.enterCrisisMode)

  return (
    <button
      onClick={enterCrisisMode}
      className="btn-safety gap-2 text-sm"
      aria-label="Access crisis support resources"
    >
      <PhoneIcon size={16} />
      <span className="hidden sm:inline">Need Help Now</span>
    </button>
  )
}
