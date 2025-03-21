import type { Metadata } from 'next'
import { Kumbh_Sans, Noto_Sans } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const kumbhSans = Kumbh_Sans({
  variable: '--font-kumbh-sans',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

const ptSans = Noto_Sans({
  variable: '--font-pt-sans',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Roundu',
  description: 'Bring local ideas to life',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable} ${ptSans.variable}`}>
        {children}
      </body>
      <Script
        crossOrigin="anonymous"
        defer
        src="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js"
      />
    </html>
  )
}
