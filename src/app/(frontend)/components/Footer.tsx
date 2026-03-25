import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function Footer() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 1 })

  const logoUrl =
    settings.logo && typeof settings.logo === 'object' && settings.logo.url
      ? settings.logo.url
      : null

  return (
    <footer className="bg-nlr-dark text-white py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Site nav */}
          <div>
            <h3 className="text-xs font-black italic uppercase tracking-wider mb-4">
              Next Level Running
            </h3>
            <ul className="space-y-2">
              <li><Link href="/privat" className="text-sm text-neutral-400 hover:text-white transition-colors">Privat</Link></li>
              <li><Link href="/foretag" className="text-sm text-neutral-400 hover:text-white transition-colors">Företag</Link></li>
              <li><Link href="/annan-idrott" className="text-sm text-neutral-400 hover:text-white transition-colors">Annan Idrott</Link></li>
              <li><Link href="/coacher" className="text-sm text-neutral-400 hover:text-white transition-colors">Coacher</Link></li>
              <li><Link href="/nlr-trappan" className="text-sm text-neutral-400 hover:text-white transition-colors">NLR-trappan</Link></li>
              <li><Link href="/kontakt" className="text-sm text-neutral-400 hover:text-white transition-colors">Kontakt</Link></li>
              <li><Link href="/integritetspolicy" className="text-sm text-neutral-400 hover:text-white transition-colors">Vår integritetspolicy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-black italic uppercase tracking-wider mb-4">
              Följ NLR
            </h3>
            <ul className="space-y-2">
              {(settings.socialLinks || []).map((item, i) => (
                <li key={i}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-xs font-black italic uppercase tracking-wider mb-4">
              Partners
            </h3>
            <ul className="space-y-2">
              {(settings.partners || []).map((item, i) => (
                <li key={i}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            {logoUrl ? (
              <img src={logoUrl} alt="Next Level Running" className="h-24 w-auto invert mb-4" />
            ) : (
              <p className="font-black text-3xl tracking-tighter mb-4">NLR</p>
            )}
            {settings.tagline && (
              <p className="text-xs font-black italic uppercase tracking-wider">
                {settings.tagline}
              </p>
            )}
            {settings.email && (
              <a
                href={`mailto:${settings.email}`}
                className="text-sm text-neutral-400 hover:text-white transition-colors mt-3"
              >
                {settings.email}
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
