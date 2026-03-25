import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integritetspolicy',
  description: 'Vår integritetspolicy.',
}

export default function IntegritetspolicyPage() {
  return (
    <>
      {/* Green hero banner */}
      <section className="bg-nlr-green py-16 md:py-24 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9]">
            Integritetspolicy
          </h1>
        </div>
      </section>

      <div className="py-16 md:py-24 px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <p className="text-neutral-700 leading-relaxed">
            Potentiella och faktiska kunders integritet är av yttersta vikt för oss på Next Level
            Running (NLR).
          </p>

          <div>
            <h2 className="text-lg font-black italic uppercase tracking-tight mb-2">Ansvarig</h2>
            <p className="text-neutral-700 leading-relaxed">
              Tor Pollanen, Head Coach och Grundare.
              <br />
              Kontakt:{' '}
              <a href="mailto:coach@nextlevelrunning.se" className="underline hover:no-underline">
                coach@nextlevelrunning.se
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-black italic uppercase tracking-tight mb-2">Vilken data samlar vi in?</h2>
            <p className="text-neutral-700 leading-relaxed">
              Namn, kontaktuppgifter (telefonnummer, e-post) samt eventuell ytterligare information som
              du frivilligt delar med oss. Data samlas in via förfrågningar, tjänstebokningar och e-post.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-black italic uppercase tracking-tight mb-2">Varför samlar vi in data?</h2>
            <p className="text-neutral-700 leading-relaxed">Initial kontakt och bedömning av optimala tjänstelösningar.</p>
          </div>

          <div>
            <h2 className="text-lg font-black italic uppercase tracking-tight mb-2">Radering</h2>
            <p className="text-neutral-700 leading-relaxed">
              Data raderas på begäran eller när den inte längre är användbar. Inaktiva kunders data
              raderas efter två år.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-black italic uppercase tracking-tight mb-2">Dina rättigheter</h2>
            <p className="text-neutral-700 leading-relaxed">Du kan begära tillgång till den information du har delat med oss.</p>
          </div>

          <p className="text-xs text-neutral-400 pt-8 border-t border-neutral-200">
            Senast uppdaterad: 2018-08-25
          </p>
        </div>
      </div>
    </>
  )
}
