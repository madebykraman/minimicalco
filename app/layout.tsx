import type { Metadata } from 'next'
import './globals.css'
import './project-rail.css'
import './inner-pages.css'

export const metadata: Metadata = {
  title: 'The Minimical & Co. | Design & Branding Studio',
  description: 'The Minimical & Co. is an independent design and branding studio from Patna, India.',
  metadataBase: new URL('https://minimical.online'),
  icons: { icon: '/logo.svg', apple: '/logo.svg' },
  themeColor: '#4C2B81',
  openGraph: { title: 'The Minimical & Co. | Design & Branding Studio', description: 'Design, branding, digital, motion, photography and film by The Minimical & Co.', url: 'https://minimical.online', siteName: 'The Minimical & Co.', type: 'website' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }
