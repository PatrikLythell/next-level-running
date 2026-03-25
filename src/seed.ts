import type { Payload } from 'payload'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

async function downloadAndUploadImage(
  payload: Payload,
  url: string,
  alt: string,
): Promise<number | null> {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      console.warn(`Failed to download ${url}: ${res.status}`)
      return null
    }
    const arrayBuffer = await res.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const ext = url.split('.').pop()?.split('?')[0] || 'png'
    const filename = `${slugify(alt)}.${ext}`

    const media = await payload.create({
      collection: 'media',
      data: { alt },
      file: {
        data: buffer,
        mimetype: ext === 'svg' ? 'image/svg+xml' : `image/${ext}`,
        name: filename,
        size: buffer.length,
      },
    })
    console.log(`  Uploaded: ${filename}`)
    return media.id
  } catch (err) {
    console.warn(`Failed to upload image for ${alt}:`, err)
    return null
  }
}

export async function seed(payload: Payload): Promise<void> {
  console.log('Seeding database...')

  // Create admin user
  await payload.create({
    collection: 'users',
    data: {
      email: 'coach@nextlevelrunning.se',
      password: 'changeme123',
    },
  })

  // ─── Logo ──────────────────────────────────────────────────

  const logoId = await downloadAndUploadImage(
    payload,
    'https://cdn.prod.website-files.com/5d852256e652c563b1e334fe/5d852300811e35c0cfa40061_nlr_black_small.svg',
    'Next Level Running Logo',
  )

  // ─── Coaches ───────────────────────────────────────────────

  const coaches = [
    {
      name: 'Tor Pollanen',
      role: 'Head Coach & Fd. Landslagslöpare',
      bio: 'NLR:s grundare och landslagsmeriterad medeldistanslöpare som 2017 hoppade en karriär inom näringslivet för att ägna sig åt sin passion – löpträning och målförverkligande! Känd för sitt lätta steg och välslipade löpteknik – något som Tor i hög utsträckning lyckas överföra till sina adepter.',
      credentials: [
        'Grundare och Head Coach @ Next Level Running',
        'Head Coach @ Bromma IF Friidrott',
        'MSc Finansiell Analys och Styrning, Handelshögskolan i Stockholm',
      ],
      personalBests: '400m: 47,68 – 800m: 1,48,18',
      merits: 'Finnkampsseger 800m (2007), Semifinalist Junior-VM 800m (2006), Metropolitan Atlantic Association Conference Champion 400m (2008)',
      city: 'STOCKHOLM',
      instagram: 'https://www.instagram.com/nextlevelrunningse/?hl=sv',
      sortOrder: 1,
      photoUrl: 'https://cdn.prod.website-files.com/5d852c676f40d83c0285f974/5dacaf6d31275c516c4743df_Tor.png',
    },
    {
      name: 'Desmond Rogo',
      role: 'Sprint- och Fystränare & Landslagssprinter',
      bio: 'Aktiv landslagssprinter tillika en av landets snabbaste män med flertalet medaljer från svenska mästerskap på 100m och 200m! Vid sidan av sin fortsatta elitsatsning pluggar Desmond tränarprogrammet vid GIH och är en mycket uppskattad sprint- och fystränare för atleter inom andra sporter. Inte minst har Desmond fått fart på många fotbollsspelare och innebandyspelare i Stockholmsområdet.',
      credentials: [
        'Landslagssprinter',
        'GIH, Tränarprogrammet (pågående)',
      ],
      personalBests: '60m: 6.77, 100m: 10.44, 200m: 20.87',
      merits: 'Fem individuella SM-medaljer, Europacup och Finnkamp',
      city: 'STOCKHOLM',
      instagram: 'https://www.instagram.com/desmondrogo/',
      sortOrder: 2,
      photoUrl: 'https://cdn.prod.website-files.com/5d852c676f40d83c0285f974/662f4ff9ef8de0f3846f87d9_Desmond.png',
    },
    {
      name: 'Andreas Almgren',
      role: 'Löpcoach & Landslagslöpare',
      bio: 'En av Sveriges genom tiderna bästa medeldistanslöpare med meriter från EM och VM. Vid sidan av sin fortsatta satsning coachar och inspirerar Andreas flera av våra företagsgrupper.',
      credentials: [
        'Elitsatsande medeldistanslöpare',
      ],
      personalBests: '800m: 1:45,59, 1500m: 3:38.99',
      merits: '4:a Inomhus-EM 800m (2015, Prag)',
      city: 'STOCKHOLM',
      instagram: 'https://www.instagram.com/aaalmgren/?hl=sv',
      sortOrder: 3,
      photoUrl: 'https://cdn.prod.website-files.com/5d852c676f40d83c0285f974/5e2606b41626d443f30e1136_Andreas.png',
    },
    {
      name: 'Kalle Berglund',
      role: 'Löpcoach & Världslöpare',
      bio: 'Till 2020 års coachroster har vi glädjen att addera Sveriges genom tiderna bästa 1500m-löpare! Vid sidan av sin fortsatta OS-satsning coachar och inspirerar Kalle flera av våra företagsgrupper.',
      credentials: [
        'Sveriges genom tiderna bästa 1500m-löpare',
      ],
      personalBests: '1500m: 3:33,70',
      merits: 'Svenskt Rekord 1500m (3:33:70), Silver Inomhus-EM 1500m (2017, Belfast), 9:a VM (2019, Doha)',
      city: 'STOCKHOLM',
      instagram: 'https://www.instagram.com/kalleberglunddd/?hl=sv',
      sortOrder: 4,
      photoUrl: 'https://cdn.prod.website-files.com/5d852c676f40d83c0285f974/5e2606a249acd5c6d1a9c2bb_Kalle.png',
    },
    {
      name: 'Sofia Johnsson',
      role: 'Löpcoach & F.d. Landslagssprinter',
      bio: 'Tidigare sprinter och häcklöpare med många år i landslaget. Mycket uppskattad grupptränare och fantastisk på att instruera teknik under våra friidrottsdagar för företagsgrupper!',
      credentials: [
        'Fd. Landslagslöpare 400 meter häck med meriter från Finnkampen och Lag-EM',
        'MSc Engineering',
      ],
      personalBests: '400 meter häck: 58:50',
      merits: 'Finnkampen och Lag-EM',
      city: 'GÖTEBORG',
      instagram: 'https://www.instagram.com/johnssonsofia/?hl=sv',
      sortOrder: 5,
      photoUrl: 'https://cdn.prod.website-files.com/5d852c676f40d83c0285f974/5e9eefb7cbaded0d845da703_Sofia.png',
    },
    {
      name: 'Elmar Engholm',
      role: 'Löpcoach & Landslagslöpare',
      bio: 'En av Sveriges bästa löpare med meriter från EM, Europacupen och otaliga finnkamper. Multitalang med hög kapacitet på allt från 800m till terränglöpning. Vid sidan av sin fortsatta satsning coachar och inspirerar Elmar flera av våra företagsgrupper.',
      credentials: [
        'Elitsatsande medeldistanslöpare',
      ],
      personalBests: '1500m: 3:39.75, 3000m Hinder: 8.37.44, 5000m: 14:31,72',
      merits: 'EM 2016, 3000m Hinder',
      city: 'STOCKHOLM',
      instagram: 'https://www.instagram.com/elmarengholm/?hl=sv',
      sortOrder: 6,
      photoUrl: 'https://cdn.prod.website-files.com/5d852c676f40d83c0285f974/612cd0719e193a250b8e8b13_elmar.png',
    },
    {
      name: 'Joni Jaako',
      role: 'Löpcoach, Sjukgymnast & Fd. Landslagslöpare',
      bio: 'Med åtta år som landslagslöpare och meriter från VM och EM är Joni en uppskattad Löpcoach i Linköpingområdet. Utbildad sjukgymnast med en förkärlek för löparrelaterad diagnostik, skadeprevention och rehabilitering – stöttar NLR:s coachingstab och medlemmar med just detta!',
      credentials: [
        'Leg. Fysioterapeut, Linköpings Universitet',
        'Åtta år som landslagslöpare',
      ],
      personalBests: '400m: 47,04, 800m: 1,47,01, 1500m: 3.44',
      merits: 'IVM 2006, EM 2010, två SM-guld och finnkampsseger på 800m',
      city: 'LINKÖPING',
      instagram: 'https://www.instagram.com/jonijaako/?hl=sv',
      sortOrder: 7,
      photoUrl: 'https://cdn.prod.website-files.com/5d852c676f40d83c0285f974/5dacc0919bea752b1b266261_Joni.png',
    },
    {
      name: 'Malin Marmbrandt Otterling',
      role: 'Löpcoach och Landslagshoppare',
      bio: 'Längd- och trestegshopperskan med över tio år i landslaget! Vid sidan av sin fortsatta elitsatsning är Malin en mycket uppskattad grupptränare med en svårslagen förmåga till utlärning av löpteknik, löpkoordination och snabbhet.',
      credentials: [
        'BSc Business Administration and Marketing',
        'MSc International Marketing',
        'Över tio år i landslaget',
      ],
      personalBests: 'Längdhopp: 6,61 – Tresteg: 13,34',
      merits: 'EM 2016, 14 SM-medaljer på seniornivå samt finnkamps- och Lag-EM-insatser',
      city: 'STOCKHOLM',
      instagram: 'https://www.instagram.com/manhattan_girl/?hl=sv',
      sortOrder: 8,
      photoUrl: 'https://cdn.prod.website-files.com/5d852c676f40d83c0285f974/5dacaf4719e68696eba380d8_Malin.png',
    },
    {
      name: 'Rafael Askros',
      role: 'Löpcoach & Fd. Landslagslöpare',
      bio: 'Fd. häcklöpare med över tio år i landslaget. Mångårig friidrottstränare och löpcoach samt Förbundskapten för Juniorlandslaget i Friidrott. Mycket uppskattad grupptränare och en hejare på att instruera teknik under våra friidrottsdagar för företagsgrupper!',
      credentials: [
        'Fd. Häcklöpare med 10 år i Landslaget',
        'Förbundskapten Juniorlandslaget i Friidrott',
        'Ekonomutbildning inom Sports Management och Marknadsföring',
        'Mångårig friidrottstränare och löpcoach',
      ],
      personalBests: '110mh: 14:16, 60mh: 7:95',
      merits: '10 SM-medaljer, otaliga Finnkampsinsatser',
      city: 'STOCKHOLM',
      instagram: 'https://www.instagram.com/askros/?hl=sv',
      sortOrder: 9,
      photoUrl: 'https://cdn.prod.website-files.com/5d852c676f40d83c0285f974/5dacc3cf9bea755c2027266c_Rafael.png',
    },
  ]

  console.log('Uploading coach photos...')
  for (const coach of coaches) {
    const { photoUrl, credentials, ...coachData } = coach
    const photoId = photoUrl ? await downloadAndUploadImage(payload, photoUrl, coach.name) : null
    await payload.create({
      collection: 'coaches',
      data: {
        ...coachData,
        credentials: credentials.map((c) => ({ credential: c })),
        ...(photoId ? { photo: photoId } : {}),
      },
    })
  }

  console.log(`Seeded ${coaches.length} coaches`)

  // ─── Services ──────────────────────────────────────────────

  // Privat services
  await payload.create({
    collection: 'services',
    data: {
      name: 'NLR Medlemskap',
      category: 'privat',
      price: '1 595 kr/mån',
      ctaText: 'Bli medlem!',
      ctaLink: '/kontakt',
      sortOrder: 1,
      bulletPoints: [
        {
          title: 'INDIVIDANPASSAT TRÄNINGSPROGRAM',
          text: 'Integrera proffsens hemligheter i din träning och bli en mer fullfjädrad löpare',
        },
        {
          title: 'KONTINUERLIG UPPFÖLJNING',
          text: 'Löpande samtal med din löpcoach för uppföljning, analys och justering av ditt träningsprogram',
        },
      ],
    },
  })

  await payload.create({
    collection: 'services',
    data: {
      name: 'Träningsprogram - 6 Månader',
      category: 'privat',
      price: '2 995 kr',
      ctaText: 'Hör av dig idag!',
      ctaLink: '/kontakt',
      sortOrder: 2,
      bulletPoints: [
        {
          title: 'INDIVIDANPASSAT TRÄNINGSPROGRAM (6 MÅN)',
          text: 'Integrera proffsens hemligheter i din träning och bli en mer fullfjädrad löpare',
        },
      ],
    },
  })

  // Företag services
  await payload.create({
    collection: 'services',
    data: {
      name: 'NLR Gruppträning',
      category: 'foretag',
      ctaText: 'Hör av er så berättar vi mer!',
      ctaLink: '/kontakt',
      sortOrder: 1,
      bulletPoints: [
        { text: 'Koordinations- och rörlighetsuppvärmning för löpare' },
        { text: 'Löpteknik – Genomgång av NLR:s tre byggstenar till det effektiva löpsteget' },
        { text: 'Tekniklopp med personlig feedback i fokus' },
        { text: 'Intervaller anpassade för hela gruppen' },
      ],
    },
  })

  await payload.create({
    collection: 'services',
    data: {
      name: 'NLR Gruppträning – DIGITALT',
      category: 'foretag',
      ctaText: 'Hör av er så berättar vi mer!',
      ctaLink: '/kontakt',
      sortOrder: 2,
      bulletPoints: [
        { text: 'Koordinations- och rörlighetsuppvärmning för löpare' },
        { text: 'Löpteknik – Genomgång av NLR:s tre byggstenar till det effektiva löpsteget' },
        { text: 'Tekniklopp med personlig feedback i fokus' },
        { text: 'Intervaller anpassade för hela gruppen' },
      ],
    },
  })

  await payload.create({
    collection: 'services',
    data: {
      name: 'Träningsprogram & Arbetsplatsutmaning',
      category: 'foretag',
      ctaText: 'Hör av er så berättar vi mer!',
      ctaLink: '/kontakt',
      sortOrder: 3,
      bulletPoints: [],
    },
  })

  await payload.create({
    collection: 'services',
    data: {
      name: 'Föreläsning – Träna Som Eliten',
      category: 'foretag',
      ctaText: 'Hör av er så berättar vi mer!',
      ctaLink: '/kontakt',
      sortOrder: 4,
      bulletPoints: [
        { text: 'En inspirerande och givande föreläsning med en av våra landslagsmeriterade föreläsare Tor Pollanen, Kalle Berglund eller Mattias Claesson' },
        { text: 'Handfasta tips kring hur du hittar kontinuitet och glädje i din träning – oavsett träningsform, tidigare erfarenheter och nivå' },
        { text: 'Handfasta tips kopplat till hur du gör din träning effektiv och målorienterad – träningsupplägg, tävlingsupplägg och tävlingsförberedelser' },
        { text: 'Frågerunda' },
      ],
    },
  })

  await payload.create({
    collection: 'services',
    data: {
      name: 'Teamaktivitet – Mångkamp Friidrott',
      category: 'foretag',
      ctaText: 'Hör av er så berättar vi mer!',
      ctaLink: '/kontakt',
      sortOrder: 5,
      bulletPoints: [],
    },
  })

  // Annan idrott
  await payload.create({
    collection: 'services',
    data: {
      name: 'PT-pass – Friidrottsorienterad Träning',
      category: 'annan-idrott',
      price: '995 kr/pass',
      ctaText: 'Hör av dig idag så berättar vi mer!',
      ctaLink: '/kontakt',
      sortOrder: 1,
      bulletPoints: [
        { text: 'Snabbhet och accelerationsförmåga' },
        { text: 'Explosivitet och spänst' },
        { text: 'Koordination och löpteknik' },
        { text: 'Styrka och stabilitet' },
      ],
    },
  })

  console.log('Seeded services')

  // ─── Pages ─────────────────────────────────────────────────

  await payload.create({
    collection: 'pages',
    data: {
      title: 'Privatperson',
      slug: 'privat',
      subtitle: 'Träna som eliten och ta din löpning till nästa nivå oavsett kunskap eller tidigare erfarenheter',
      meta: {
        metaTitle: 'Privat löpcoaching | Next Level Running',
        metaDescription: 'Skräddarsydd löpcoaching för privatpersoner. Medlemskap från 1595 kr/mån.',
      },
    },
  })

  await payload.create({
    collection: 'pages',
    data: {
      title: 'Företag',
      slug: 'foretag',
      subtitle: 'Ta er friskvård till nästa nivå',
      meta: {
        metaTitle: 'Företag | Next Level Running',
        metaDescription: 'Skräddarsydda löplösningar för företag och organisationer.',
      },
    },
  })

  await payload.create({
    collection: 'pages',
    data: {
      title: 'Individ & lag inom annan idrott',
      slug: 'annan-idrott',
      subtitle: 'Med avstamp i hur elitaktiva friidrottare tränar hjälper vi atleter och lag inom annan idrott att utveckla sin snabbhet, explosivitet och spänst.',
      meta: {
        metaTitle: 'Annan Idrott | Next Level Running',
        metaDescription: 'Friidrottsorienterad träning för atleter och lag inom andra sporter.',
      },
    },
  })

  await payload.create({
    collection: 'pages',
    data: {
      title: 'NLR-trappan',
      slug: 'nlr-trappan',
      subtitle: 'Vår metodik',
      meta: {
        metaTitle: 'NLR-trappan | Next Level Running',
        metaDescription: 'Vår beprövade metodik: Pulsering, Polarisering och Feedback.',
      },
    },
  })

  await payload.create({
    collection: 'pages',
    data: {
      title: 'Kontakt',
      slug: 'kontakt',
      subtitle: 'Vi tar din löpning till nästa nivå',
      meta: {
        metaTitle: 'Kontakt | Next Level Running',
        metaDescription: 'Kontakta oss på coach@nextlevelrunning.se eller 070 185 91 91.',
      },
    },
  })

  await payload.create({
    collection: 'pages',
    data: {
      title: 'Integritetspolicy',
      slug: 'integritetspolicy',
      meta: {
        metaTitle: 'Integritetspolicy | Next Level Running',
        metaDescription: 'Vår integritetspolicy.',
      },
    },
  })

  console.log('Seeded pages')

  // ─── Site Settings ─────────────────────────────────────────

  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      ...(logoId ? { logo: logoId } : {}),
      email: 'coach@nextlevelrunning.se',
      phone: '070 185 91 91',
      tagline: 'VI TAR DIN LÖPNING TILL NÄSTA NIVÅ',
      socialLinks: [
        { platform: 'Facebook', url: 'https://www.facebook.com/NextLevelRunningSE/' },
        { platform: 'Instagram', url: 'https://www.instagram.com/nextlevelrunningse/' },
        { platform: 'YouTube', url: 'https://www.youtube.com/@nextlevelrunning' },
      ],
      partners: [
        { name: 'YMR Track Club', url: 'https://ymrtrackclub.com' },
        { name: 'Ving Resor', url: 'https://www.ving.se' },
      ],
      footerNav: [
        { label: 'Privat', url: '/privat' },
        { label: 'Företag', url: '/foretag' },
        { label: 'Annan Idrott', url: '/annan-idrott' },
        { label: 'Coacher', url: '/coacher' },
        { label: 'NLR-trappan', url: '/nlr-trappan' },
        { label: 'Kontakt', url: '/kontakt' },
        { label: 'Vår integritetspolicy', url: '/integritetspolicy' },
      ],
    },
  })

  console.log('Seeded site settings')
  console.log('Seeding complete!')
}
