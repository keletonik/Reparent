'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, BookOpenIcon, PenIcon, BarChartIcon, SettingsIcon, HeartIcon, ReparentLogo, ReparentWordmark } from '@/components/ui/Icons'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/dashboard', label: 'Home', icon: HomeIcon },
  { href: '/healing', label: 'Healing', icon: HeartIcon },
  { href: '/modules', label: 'Modules', icon: BookOpenIcon },
  { href: '/journal', label: 'Journal', icon: PenIcon },
  { href: '/progress', label: 'Progress', icon: BarChartIcon },
  { href: '/settings', label: 'Settings', icon: SettingsIcon },
]

export function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex flex-col w-64 bg-white/70 backdrop-blur-md border-r border-calm-100/50 min-h-screen" aria-label="Main navigation">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <ReparentLogo size={32} />
          <ReparentWordmark className="text-xl" />
        </Link>
      </div>
      <div className="flex-1 px-3 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-gradient-to-r from-brand-50 to-brand-50/50 text-brand-700 shadow-sm border border-brand-100/50'
                  : 'text-calm-600 hover:bg-calm-50 hover:text-calm-800'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon size={20} className={isActive ? 'text-brand-600' : ''} />
              {label}
            </Link>
          )
        })}
      </div>
      <div className="p-4 border-t border-calm-100/50">
        <Link
          href="/resources"
          className="flex items-center gap-2 px-4 py-2 text-sm text-calm-500 hover:text-brand-600 transition-colors rounded-lg hover:bg-calm-50"
        >
          Resources & Support
        </Link>
        <Link
          href="/safety-plan"
          className="flex items-center gap-2 px-4 py-2 text-sm text-calm-500 hover:text-brand-600 transition-colors rounded-lg hover:bg-calm-50"
        >
          Safety Plan
        </Link>
      </div>
    </nav>
  )
}

export function MobileNav() {
  const pathname = usePathname()
  const mobileItems = navItems.slice(0, 5)

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-calm-100/50 z-40" aria-label="Mobile navigation">
      <div className="flex items-center justify-around px-2 py-2">
        {mobileItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 min-w-0',
                isActive
                  ? 'text-brand-600'
                  : 'text-calm-400 hover:text-calm-600'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className={cn(
                'p-1.5 rounded-lg transition-all duration-200',
                isActive ? 'bg-brand-50' : ''
              )}>
                <Icon size={20} />
              </div>
              <span className="truncate">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
