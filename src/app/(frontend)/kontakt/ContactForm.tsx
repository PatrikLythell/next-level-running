'use client'

import { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p className="text-center text-neutral-600 py-8">
        Tack för ditt meddelande! Vi återkommer så snart vi kan.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
          Namn
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          E-post
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-vertical"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-black text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors disabled:opacity-50"
      >
        {status === 'sending' ? 'Skickar...' : 'Skicka'}
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-sm text-center">
          Något gick fel. Försök igen eller kontakta oss direkt via e-post.
        </p>
      )}
    </form>
  )
}
