import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coacher',
  description: 'Möt våra landslagsmeriterade löpcoacher. Ta rygg på Sveriges löparelit.',
}

export default async function CoacherPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs: coaches } = await payload.find({
    collection: 'coaches',
    sort: 'sortOrder',
    limit: 20,
  })

  return (
    <>
      {/* Green hero banner */}
      <section className="bg-nlr-green py-16 md:py-24 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9]">
            Coacher
          </h1>
          <p className="mt-6 text-sm md:text-base text-neutral-800 max-w-xl mx-auto leading-relaxed">
            Ta rygg på Sveriges löparelit. Alla våra coacher är landslagsmeriterade, har en gedigen
            elitbakgrund och har coachat på hög nivå i många år.
          </p>
        </div>
      </section>

      {/* Coach profiles */}
      <div className="py-16 md:py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-20">
            {coaches.map((coach) => (
              <article key={coach.id}>
                <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-12">
                  {/* Circular photo */}
                  <div className="mx-auto md:mx-0 w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden bg-neutral-100 shrink-0">
                    {coach.photo && typeof coach.photo === 'object' && coach.photo.url && (
                      <img
                        src={coach.photo.url}
                        alt={coach.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Info */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight">
                      {coach.name}
                    </h2>
                    {coach.role && (
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-500 mt-1">
                        {coach.role}
                      </p>
                    )}

                    {coach.bio && (
                      <p className="mt-5 text-neutral-700 leading-relaxed">{coach.bio}</p>
                    )}

                    {/* Credentials */}
                    {coach.credentials && coach.credentials.length > 0 && (
                      <ul className="mt-5 space-y-1">
                        {coach.credentials.map((c, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                            <span className="mt-2 w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
                            {c.credential}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      {coach.personalBests && (
                        <div>
                          <p className="font-bold uppercase tracking-wider text-xs text-neutral-400">
                            Personliga rekord
                          </p>
                          <p className="mt-1 text-neutral-600">{coach.personalBests}</p>
                        </div>
                      )}
                      {coach.merits && (
                        <div>
                          <p className="font-bold uppercase tracking-wider text-xs text-neutral-400">
                            Meriter
                          </p>
                          <p className="mt-1 text-neutral-600">{coach.merits}</p>
                        </div>
                      )}
                    </div>

                    <div className="mt-5 flex items-center gap-4 text-sm">
                      {coach.city && (
                        <span className="text-neutral-400 uppercase tracking-wider text-xs font-bold">
                          Ort: {coach.city}
                        </span>
                      )}
                      {coach.instagram && (
                        <a
                          href={coach.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-500 hover:text-black transition-colors text-xs uppercase tracking-wider font-bold"
                        >
                          Instagram →
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <hr className="mt-12 border-neutral-200" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
