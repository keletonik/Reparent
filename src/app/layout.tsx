import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reparent — Evidence-Based Attachment Healing',
  description: 'A trauma-informed learning program teaching evidence-based skills for healing attachment patterns, building self-compassion, and creating healthier relationships.',
  keywords: ['attachment', 'trauma', 'healing', 'CBT', 'DBT', 'self-compassion', 'relationships'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
