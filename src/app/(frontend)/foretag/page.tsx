import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Företag',
  description: 'Skräddarsydda löplösningar för företag och organisationer.',
}

export default async function ForetagPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs: services } = await payload.find({
    collection: 'services',
    where: { category: { equals: 'foretag' } },
    sort: 'sortOrder',
  })

  return (
    <>
      {/* Green hero banner */}
      <section className="bg-nlr-green py-16 md:py-24 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9]">
            Företag
          </h1>
          <p className="mt-6 text-sm md:text-base text-neutral-800 max-w-xl mx-auto leading-relaxed">
            Skräddarsydda lösningar för företag och organisationer som vill erbjuda sina medarbetare
            rolig och givande löpträning, föreläsningar och arbetsplatsutmaningar.
          </p>
        </div>
      </section>

      {/* Services */}
      <div className="py-16 md:py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.id}>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight">
                  {service.name}
                </h2>

                {service.bulletPoints && service.bulletPoints.length > 0 && (
                  <ul className="mt-6 space-y-2">
                    {service.bulletPoints.map((bp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                        <span className="text-neutral-700 leading-relaxed">{bp.text}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <p className="mt-8">
                  <Link
                    href={service.ctaLink || '/kontakt'}
                    className="font-semibold hover:underline"
                  >
                    {service.ctaText || 'Hör av er så berättar vi mer!'}
                  </Link>
                </p>

                <hr className="mt-12 border-neutral-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
