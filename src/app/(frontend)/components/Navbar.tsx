'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Privat', href: '/privat' },
  { label: 'Företag', href: '/foretag' },
  { label: 'Annan idrott', href: '/annan-idrott' },
  { label: 'Coacher', href: '/coacher' },
  { label: 'NLR-trappan', href: '/nlr-trappan' },
  { label: 'Kontakt', href: '/kontakt' },
]

export function Navbar({ logoUrl }: { logoUrl: string | null }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center">
          {logoUrl ? (
            <img src={logoUrl} alt="Next Level Running" className="h-10 w-auto" />
          ) : (
            <span className="text-xl text-black font-black uppercase tracking-tighter">
              NEXT LEVEL RUNNING
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-600 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meny"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100 px-6 py-6 space-y-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-semibold uppercase tracking-[0.15em] text-neutral-600 hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
