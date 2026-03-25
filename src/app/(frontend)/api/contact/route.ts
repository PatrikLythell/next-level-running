import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = (await request.json()) as {
      name: string
      email: string
      message: string
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Alla fält är obligatoriska.' }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Kontaktformulär <kontakt@nextlevelrunning.se>',
          to: 'coach@nextlevelrunning.se',
          reply_to: email,
          subject: `Kontaktformulär: ${name}`,
          text: `Namn: ${name}\nE-post: ${email}\n\nMeddelande:\n${message}`,
        }),
      })

      if (!res.ok) {
        const err = await res.text()
        console.error('Resend error:', err)
        return NextResponse.json({ error: 'Kunde inte skicka meddelandet.' }, { status: 500 })
      }
    } else {
      // Dev fallback — log to console
      console.log('Contact form submission (no RESEND_API_KEY set):', { name, email, message })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Något gick fel.' }, { status: 500 })
  }
}
