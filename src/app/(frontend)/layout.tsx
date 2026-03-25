import React from 'react'
import { Barlow } from 'next/font/google'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import './styles.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Next Level Running – Löpcoaching i världsklass',
    template: '%s | Next Level Running',
  },
  description: 'Skräddarsydd löpcoaching för privatpersoner, företag och föreningar. Ta din löpning till nästa nivå med landslagsmeriterade löpcoacher.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 1 })
  const logoUrl =
    settings.logo && typeof settings.logo === 'object' && settings.logo.url
      ? settings.logo.url
      : null

  return (
    <html lang="sv" className={barlow.variable}>
      <body className="font-sans bg-white text-neutral-900 antialiased">
        <Navbar logoUrl={logoUrl} />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
