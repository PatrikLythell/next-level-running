import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privat',
  description: 'Skräddarsydd löpcoaching för privatpersoner. Medlemskap och träningsprogram.',
}

export default async function PrivatPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs: services } = await payload.find({
    collection: 'services',
    where: { category: { equals: 'privat' } },
    sort: 'sortOrder',
  })
  const page = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'privat' } },
    limit: 1,
  }).then((res) => res.docs[0])

  return (
    <>
      {/* Green hero banner */}
      <section className="bg-nlr-green py-16 md:py-24 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9]">
            Privatperson
          </h1>
          <p className="mt-6 text-sm md:text-base text-neutral-800 max-w-xl mx-auto leading-relaxed">
            {page?.subtitle || 'Träna som eliten och ta din löpning till nästa nivå oavsett kunskap eller tidigare erfarenheter'}
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
                {service.price && (
                  <p className="text-lg font-black italic uppercase tracking-tight mt-2">
                    {service.price}
                  </p>
                )}

                {service.bulletPoints && service.bulletPoints.length > 0 && (
                  <div className="mt-6 space-y-4">
                    {service.bulletPoints.map((bp, i) => (
                      <div key={i}>
                        {bp.title && (
                          <p className="font-bold text-sm uppercase tracking-wider">
                            • {bp.title}
                            {bp.text && <span className="font-normal normal-case tracking-normal"> – {bp.text}</span>}
                          </p>
                        )}
                        {!bp.title && bp.text && (
                          <p className="text-neutral-700 leading-relaxed">{bp.text}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <p className="mt-8">
                  <Link
                    href={service.ctaLink || '/kontakt'}
                    className="font-semibold hover:underline"
                  >
                    {service.ctaText || 'Hör av dig idag!'}
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
