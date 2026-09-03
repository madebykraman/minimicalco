import type { Metadata, Viewport } from 'next'
import './globals.css'
import './project-rail.css'
import './inner-pages.css'
import './minimical-home.css'
import './case-study.css'
import './inner-shell.css'
import './feedback-fixes.css'
import './final-fixes.css'

export const metadata: Metadata = {
  title: 'The Minimical & Co. | Design & Branding Studio',
  description: 'The Minimical & Co. is an independent design and branding studio from Patna, India.',
  metadataBase: new URL('https://minimical.online'),
  icons: { icon: '/logo.svg', apple: '/logo.svg' },
  openGraph: { title: 'The Minimical & Co. | Design & Branding Studio', description: 'Design, branding, digital, motion, photography and film by The Minimical & Co.', url: 'https://minimical.online', siteName: 'The Minimical & Co.', type: 'website' },
  robots: { index: true, follow: true },
}
export const viewport: Viewport = { themeColor: '#4C2B81', width: 'device-width', initialScale: 1 }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }
