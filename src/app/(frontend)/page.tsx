import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 1 })
  const { docs: coaches } = await payload.find({
    collection: 'coaches',
    sort: 'sortOrder',
    limit: 20,
  })

  const logoUrl =
    settings.logo && typeof settings.logo === 'object' && settings.logo.url
      ? settings.logo.url
      : null

  return (
    <>
      {/* Hero – green background */}
      <section className="bg-nlr-green text-center px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          {logoUrl && (
            <img
              src={logoUrl}
              alt="Next Level Running"
              className="h-24 md:h-32 w-auto mx-auto mb-8"
            />
          )}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9]">
            Träna som eliten
          </h1>
          <p className="mt-4 text-sm md:text-base font-bold italic uppercase tracking-wide">
            Löpcoaching för dig som vill ta din löpning till nästa nivå
          </p>
          <p className="mt-6 text-sm md:text-base text-neutral-800 max-w-2xl mx-auto leading-relaxed">
            Next Level Running erbjuder skräddarsydd, effektiv och målinriktad löpcoaching för
            privatpersoner, företag och föreningar. Ta rygg på någon av våra landslagsmeriterade
            löpcoacher redan idag!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/privat"
              className="bg-black text-white px-10 py-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-neutral-800 transition-colors"
            >
              Kom igång
            </Link>
            <Link
              href="/kontakt"
              className="border-2 border-black px-10 py-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-colors"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>

      {/* Video section */}
      <section className="bg-nlr-green">
        <div className="relative w-full" style={{ paddingBottom: '42%' }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://cdn.prod.website-files.com/5d852256e652c563b1e334fe/5d8524f4739a9931f8df649a_loop-film-transcode.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl md:text-3xl font-black italic uppercase tracking-tight mb-12">
            Våra erbjudanden
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/privat" className="group relative block overflow-hidden bg-nlr-green aspect-[4/3]">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white drop-shadow-lg">
                  Privat
                </span>
              </div>
            </Link>
            <Link href="/foretag" className="group relative block overflow-hidden bg-nlr-green aspect-[4/3]">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white drop-shadow-lg">
                  Företag
                </span>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
            <p className="text-center text-xs font-bold uppercase tracking-[0.1em]">
              Medlemskap – Träningsprogram – Teknikpass
            </p>
            <p className="text-center text-xs font-bold uppercase tracking-[0.1em]">
              Gruppträning – Digitala pass – Föreläsning
            </p>
          </div>
        </div>
      </section>

      {/* Green divider */}
      <div className="h-2 bg-nlr-green" />

      {/* Coaches */}
      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl md:text-3xl font-black italic uppercase tracking-tight mb-16">
            Coacher
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12">
            {coaches.map((coach) => (
              <Link
                key={coach.id}
                href="/coacher"
                className="group text-center"
              >
                <div className="mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-neutral-200 mb-4">
                  {coach.photo && typeof coach.photo === 'object' && coach.photo.url && (
                    <img
                      src={coach.photo.url}
                      alt={coach.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                </div>
                <p className="font-black text-xs uppercase tracking-[0.1em]">{coach.name}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/coacher"
              className="text-sm underline hover:no-underline"
            >
              Möt alla våra coacher
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
