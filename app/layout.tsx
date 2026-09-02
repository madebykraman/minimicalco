import type { Metadata } from 'next'
import './globals.css'
import './asset-overrides.css'

export const metadata: Metadata = {
  title: 'The Minimical Co. | Independent Creative Studio',
  description: 'Minimical is an independent creative practice from Patna, India working across brand, digital, motion, photography and film.',
  metadataBase: new URL('https://minimical.online'),
  openGraph: { title: 'The Minimical Co. | Independent Creative Studio', description: 'Brand, digital, motion, photography and film by Minimical.', url: 'https://minimical.online', siteName: 'The Minimical Co.', type: 'website' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
