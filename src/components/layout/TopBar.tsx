'use client'

import Link from 'next/link'
import { CrisisButton } from '@/components/safety/CrisisButton'

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-calm-100">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        <Link href="/" className="flex items-center gap-2 md:hidden">
          <div className="w-7 h-7 bg-brand-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">R</span>
          </div>
          <span className="text-lg font-serif font-bold text-calm-900">Reparent</span>
        </Link>
        <div className="hidden md:block" />
        <div className="flex items-center gap-3">
          <CrisisButton />
        </div>
      </div>
    </header>
  )
}
