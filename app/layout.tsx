import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Minimical Co. | Design, Branding & Film Studio',
  description: 'Independent creative studio building identities, digital experiences, films and visual systems.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
