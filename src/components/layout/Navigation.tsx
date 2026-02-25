'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, BookOpenIcon, PenIcon, BarChartIcon, SettingsIcon, ReparentLogo, ReparentWordmark } from '@/components/ui/Icons'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/dashboard', label: 'Home', icon: HomeIcon },
  { href: '/modules', label: 'Modules', icon: BookOpenIcon },
  { href: '/journal', label: 'Journal', icon: PenIcon },
  { href: '/progress', label: 'Progress', icon: BarChartIcon },
  { href: '/settings', label: 'Settings', icon: SettingsIcon },
]

export function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex flex-col w-64 bg-white border-r border-calm-100 min-h-screen" aria-label="Main navigation">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
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
                'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                isActive
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-calm-600 hover:bg-calm-50 hover:text-calm-800'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon size={20} />
              {label}
            </Link>
          )
        })}
      </div>
      <div className="p-4 border-t border-calm-100">
        <Link
          href="/resources"
          className="flex items-center gap-2 px-4 py-2 text-sm text-calm-500 hover:text-calm-700 transition-colors"
        >
          Resources & Support
        </Link>
        <Link
          href="/safety-plan"
          className="flex items-center gap-2 px-4 py-2 text-sm text-calm-500 hover:text-calm-700 transition-colors"
        >
          Safety Plan
        </Link>
      </div>
    </nav>
  )
}

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-calm-100 z-40" aria-label="Mobile navigation">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.slice(0, 4).map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex flex-col items-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-colors min-w-0 relative',
                isActive
                  ? 'text-brand-600'
                  : 'text-calm-400 hover:text-calm-600'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon size={20} />
              <span className="truncate">{label}</span>
              {isActive && (
                <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-500 rounded-full" />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
