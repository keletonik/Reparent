'use client'

import { DesktopNav, MobileNav } from '@/components/layout/Navigation'
import { TopBar } from '@/components/layout/TopBar'
import { SafetyBanner } from '@/components/safety/SafetyBanner'
import { CrisisModal } from '@/components/safety/CrisisModal'
import { QuickExit } from '@/components/safety/QuickExit'
import { useHydrated } from '@/lib/useHydration'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const hydrated = useHydrated()

  if (!hydrated) {
    return (
      <div className="min-h-screen bg-warmth-50 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <p className="mt-4 text-calm-500 text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <QuickExit />
      <CrisisModal />
      <div className="flex min-h-screen">
        <DesktopNav />
        <div className="flex-1 flex flex-col min-h-screen">
          <SafetyBanner />
          <TopBar />
          <main id="main-content" className="flex-1 pb-20 md:pb-0">
            {children}
          </main>
        </div>
      </div>
      <MobileNav />
    </>
  )
}
