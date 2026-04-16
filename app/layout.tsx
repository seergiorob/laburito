import type { Metadata } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['700', '900'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://laburito.com.ar'),
  title: { default: 'Laburito', template: '%s | Laburito' },
  description: 'Marketplace de servicios del hogar confiables en Argentina',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Laburito',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
