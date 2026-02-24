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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
