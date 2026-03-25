# Project: Next Level Running

## MCP Servers

This project has a Payload CMS MCP server configured in `.mcp.json`:

- **URL**: `https://next-level-running.vercel.app/api/mcp`
- **Auth**: Bearer token `e1db8701-3f3f-4fdc-92b3-41c776722819`

## Stack

- **CMS**: Payload CMS v3 (Lexical rich text editor)
- **Frontend**: Next.js
- **Hosting**: Vercel
- **Database**: Vercel Postgres
- **Storage**: Vercel Blob
- **Image processing**: sharp

## Collections

- `users` — Auth-enabled user accounts
- `media` — File uploads (stored in Vercel Blob, with image resizing via sharp)
- `pages` — CMS pages with title, slug, content, SEO meta
- `coaches` — Coach profiles with photo, bio, credentials, merits
- `services` — Service offerings (Privat, Företag, Annan idrott)

## Globals

- `site-settings` — Logo (media upload), email, phone, tagline, social links, partners, footer nav
