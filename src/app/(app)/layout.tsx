'use client'

import { DesktopNav, MobileNav } from '@/components/layout/Navigation'
import { TopBar } from '@/components/layout/TopBar'
import { SafetyBanner } from '@/components/safety/SafetyBanner'
import { CrisisModal } from '@/components/safety/CrisisModal'
import { QuickExit } from '@/components/safety/QuickExit'

export default function AppLayout({ children }: { children: React.ReactNode }) {
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
