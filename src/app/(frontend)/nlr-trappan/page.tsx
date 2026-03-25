import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NLR-trappan',
  description: 'Vår beprövade metodik: Pulsering, Polarisering och Feedback.',
}

const pillars = [
  {
    title: 'Pulsering',
    motto: 'We fight come fall – We thrive come spring',
    text: 'En slående skillnad mellan elitlöparens och motionärens träningsupplägg är en genomtänkt uppdelning av träningen i olika fokusperioder – s.k. pulsering. Sådan uppdelning har till syfte att i givna perioder utveckla olika delar av löparens färdigheter för att i slutändan säkerställa att löparen är sin absolut bästa version av sig själv vid ett givet tillfälle. Formtoppning blir här en central aspekt av träningsupplägg – alltså att i perioder träna mer och hårdare för att närmare ett aktuellt tävlingstillfälle minska träningsmängden och på så sätt få maximal utväxling på den träning som utförts under tidigare perioder.',
    cta: 'På Next Level Running hjälper vi dig med en ändamålsenlig pulsering av din träning – så att du når just dina mål! Och förresten, känslan av att vara i toppform är fantastisk...',
  },
  {
    title: 'Polarisering',
    motto: 'Make each workout count',
    text: 'Elitlöparens träningsprogram tillkommer inte av en slump – varje pass är ett steg i den trappa som sedermera tar löparen till nästa nivå. Ett polariserat träningsupplägg sätter variation och skadeförebyggande träning i centrum. Ett varierat träningsupplägg stressar nämligen kroppen från olika håll och tvingar kroppen att anpassa sig till sin nya miljö – Tränar du alltför ensidigt kan du dessvärre inte förvänta dig mycket utveckling. Alltför monoton träning är inte endast ineffektiv och tråkig utan ökar också risken för skador!',
    cta: 'Next Level Running tar baserat på dina mål och förutsättningar fram ett träningsupplägg med en väl avvägd blandning av distanslöpning, intervaller, fartlek, tempolöpning, snabbhet, löpteknik, styrketräning och alternativträning – och ger dig på så sätt nya strategier och verktyg att använda i din fortsatta löparkarriär.',
  },
  {
    title: 'Feedback',
    motto: 'We win or we learn – we never lose',
    text: 'Att vara lyhörd och responsiv på hur våra kroppar reagerar på olika typer av träning är något som urskiljer de allra bästa coacherna. Via en kontinuerlig och öppen dialog mellan utövaren och dess coach kan nyckelfaktorer i träningen identifieras och träningsprogrammet justeras på ett fruktsamt sätt. Vidare blir givetvis ett tränat löpcoachöga viktigt vid utveckling av löpteknik och löpstyrka samt mindset och taktik vid hårda intervallpass och faktiska tävlingstillfällen.',
    cta: 'Next Level Running bistår dig med löpande uppföljning, analys och justering av ditt träningsupplägg baserat på vad i din träning som fungerar allra bäst just för dig. Handfasta tips kopplat till löpteknik och löpstyrka är dessutom centrala inslag under de coachledda träningspassen. Hoppa PT:n på gymmet och lås upp proffsens hemligheter!',
  },
]

export default function NlrTrappanPage() {
  return (
    <>
      {/* Green hero banner */}
      <section className="bg-nlr-green py-16 md:py-24 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9]">
            NLR-trappan
          </h1>
          <p className="mt-6 text-sm md:text-base text-neutral-800 max-w-xl mx-auto leading-relaxed">
            Vår beprövade metodik för att ta din löpning till nästa nivå
          </p>
        </div>
      </section>

      {/* Pillars */}
      <div className="py-16 md:py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-16">
            {pillars.map((pillar, i) => (
              <section key={i}>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-400 mb-2">
                  Steg {i + 1}
                </p>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight">
                  {pillar.title}
                </h2>
                <p className="mt-2 italic text-neutral-500">&ldquo;{pillar.motto}&rdquo;</p>
                <p className="mt-6 text-neutral-700 leading-relaxed">{pillar.text}</p>
                <p className="mt-4 text-neutral-900 leading-relaxed">{pillar.cta}</p>

                <hr className="mt-12 border-neutral-200" />
              </section>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/kontakt"
              className="bg-black text-white px-10 py-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-neutral-800 transition-colors inline-block"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
