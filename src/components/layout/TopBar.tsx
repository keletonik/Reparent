'use client'

import Link from 'next/link'
import { CrisisButton } from '@/components/safety/CrisisButton'
import { ReparentLogo, ReparentWordmark } from '@/components/ui/Icons'

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 bg-white/60 backdrop-blur-md border-b border-calm-100/50">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        <Link href="/" className="flex items-center gap-2 md:hidden">
          <ReparentLogo size={28} />
          <ReparentWordmark className="text-lg" />
        </Link>
        <div className="hidden md:block" />
        <div className="flex items-center gap-3">
          <CrisisButton />
        </div>
      </div>
    </header>
  )
}
