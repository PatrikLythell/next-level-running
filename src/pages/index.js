import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts'

const IndexPage = () => (
  <Layout>
    <div className="py-16" style={{
      backgroundColor: '#86E09C',
    }}>
      <p className="pt-32 mb-32 text-center">Massive logo</p>
      <h1 className="text-5xl text-center font-sans uppercase font-black italic">Träna som eliten</h1>
      <h2 className="text-2xl text-center font-sans uppercase italic mt-1">Löpcoaching för dig som vill ta din löpning till nästa nivå</h2>
      <p class="text-center font-sans mt-3">Next Level Running erbjuder skräddarsydd, effektiv och målinriktad löpcoaching av tidigare landslagslöparen Tor Pöllänen och en av Europas just nu bästa distanslöpare David Nilsson.</p>
    </div>
    <div>
      <h4>Vårt erbjudande</h4>
      <Offer />
      <Offer />
      <Link to="/contact">Kontakta oss idag för att se vad som passar just dig</Link>
      <div className="flex">
        <BoxLink />
      </div>
    </div>
    <div>
      <h2>Våra Coacher</h2>
      <Coach />
    </div>
    <div>
      <h2>Lås upp proffsens hemligheter</h2>
      <Link to="/">Läs om vår träningsfilosofi - NLR-trappan</Link>
    </div>
  </Layout>
)

const Offer = () => (
  <div>
    <p>Next Level Runner</p><span>1495:-/mån</span>
    <ul>
      <li>
        <strong>Individanpassat träningsprogram</strong> - Integrera proffsens hemligheter i din träning och bli en mer fullfjädrad löpare
      </li>
    </ul>
  </div>
)

const BoxLink = () => (
  <div className="p-16 bg-nlr">
    <p>Springa med företaget?</p>
    <Link to="/">Se vårt erbjudande för företag</Link>
  </div>
)

const Coach = () => (
  <div>
    <p>Tor Pöllänen</p>
    <p>Löpcoach och Fd. Landslagslöpare</p>
  </div>
)

export default IndexPage
