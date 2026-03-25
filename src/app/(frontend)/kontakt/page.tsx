import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontakta oss på coach@nextlevelrunning.se eller 070 185 91 91.',
}

export default async function KontaktPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  return (
    <>
      {/* Green hero banner */}
      <section className="bg-nlr-green py-16 md:py-24 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9]">
            Kontakt
          </h1>
        </div>
      </section>

      {/* Contact info */}
      <div className="py-16 md:py-24 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="space-y-4">
            {settings.email && (
              <p>
                <a
                  href={`mailto:${settings.email}`}
                  className="text-xl md:text-2xl font-bold text-black hover:underline"
                >
                  {settings.email}
                </a>
              </p>
            )}
            {settings.phone && (
              <p>
                <a
                  href={`tel:${settings.phone?.replace(/\s/g, '')}`}
                  className="text-xl md:text-2xl text-neutral-500 hover:text-black transition-colors"
                >
                  {settings.phone}
                </a>
              </p>
            )}
          </div>

          {settings.tagline && (
            <p className="mt-16 text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold">
              {settings.tagline}
            </p>
          )}
        </div>
      </div>
    </>
  )
}
