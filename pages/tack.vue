<template lang="html">
  <div class="main-wrapper">
    <div class="top-bar">Tack så mycket, vi hör av oss</div>
    <Top @open="showModal = true"></Top>
    <div class="main">
      <Hero @open="showModal = true"></Hero>
      <section class="mb-4">
        <h2 class="center large mb2">Vårt Erbjudande</h2>
        <h1 class="center mt-1 mb3">Next Level Runner: 1195:-/månad</h1>
        <div class="row fill-space">
          <div class="four-twelve black center flex mb2">
            <img src="~assets/individ.svg" alt="">
            <h3 class="uppercase">Individanpassat träningsupplägg</h3>
            <p>Integrera proffsens hemligheter i din träning och bli en mer fullfjädrad löpare.</p>
            <p class="green"><br/>Ingår i medlemskap<br/>(SEK 1195 / månad)</p>
          </div>
          <div class="four-twelve black center flex mb2">
            <img src="~assets/uppfoljning.svg" alt="">
            <h3 class="uppercase">Kontinuerlig uppföljning av din träning</h3>
            <p>Tracka dina framsteg och justera ditt träningsupplägg baserat på vad som fungerar bäst för just dig.</p>
            <p class="green">Ingår i medlemskap<br/>(SEK 1195 / månad)</p>
          </div>
          <div class="four-twelve black center flex mb2">
            <img src="~assets/tillval.svg" alt="">
            <h3 class="uppercase">Personliga <br/>träningstillfällen</h3>
            <p>Slipa på dina färdigheter och lär dig mer via coachledda löpteknik-, löpstyrke- och kvalitétspass.</p>
            <p class="green">Personliga träningstillfällen<br/>(SEK 550 / 75min)</p>
          </div>
        </div>
        <p class="center max-w small">NYHET! Nu kan vi även erbjuda tröskeltest, VO2Maxtest samt screening av rörlighet och löpsteg.</p>
        <BlackButton class="align-center mt-2" @click.native="showModal = true">Boka en kostnadsfri konsultation</BlackButton>
        <p class="center m-1  italic">Vi erbjuder även skräddarsydda <span class="underline">företagslösningar</span>. <br/>Tveka inte att kontakta oss.</p>
      </section>
    </div>
    <Banner>
      <h2 class="center mb-1" slot="headline">Är du elitsatsande inom annan idrott?</h2>
      <p class="center mb-1" slot="content">Next Level Running erbjuder skräddarsydda lösningar för dig som elitsatsar inom annan idrott än just löpning. Med fokus på sprintsnabbhet, löpteknik och explosivitet tar Next Level Running dig eller ditt lag till nästa nivå. Tveka inte att höra av dig.</p>
    </Banner>
    <div class="main mb-4">
      <section class="mt-4">
        <div class="row flex-center">
          <div class="four-twelve mb2">
            <img src="~assets/coach.png" alt="">
          </div>
          <div class="eight-twelve">
            <h1 class="m-0">Tor Pöllänen</h1>
            <h2 class=" mt-1">Löpcoach och Fd. Landslagslöpare</h2>
            <p class="">Tidigare elitaktiv 400m och 800m-löpare som nyligen hoppade analytikerjobbet för att ägna sig åt sin passion – träning och målförverkligande! Löpcoach och rådgivare till ett antal elitlöpare – Där ibland 33.08-löparen (10000m) Robert Höckerstrand (Hälle IF) som de senaste åren gjort stora framsteg under Tors ledning. Hopplös tävlingsmänniska och psykologson med ett stort intresse för drivkrafter och personlig utveckling.</p>
            <ul>
              <li><strong>Ålder:</strong> 30</li>
              <li><strong>Senast:</strong> Business Analyst, Stockholm Live AB</li>
              <li><strong>Tidigare: </strong> Masterexamen Finansiell Analys och Styrning, Handelshögskolan i Stockholm</li>
              <li><strong>Personbästa:</strong> 400m:47,68 – 800m:1,48,18</li>
              <li><strong>Främsta Meriter:</strong> Finnkampssegrare 800m (2007), Semifinalist Junior-VM 800m (2006), Metropolitan Atlantic Association Conference Champion 400m (2008)</li>

            </ul>
          </div>
        </div>
      </section>
    </div>
    <div class="main mb-4">
      <section class="mt-4">
        <h1 class="large mb-0">Lås upp proffsens hemligheter</h1>
        <h2 class="m-0">NLR Trappan – Vår träningsfilosofi</h2>
      </section>
    </div>
    <Slider />
    <section class="mt-5 bottom">
      <div class="w-90">
        <p>Vi har medaljerna – inte diplomen</p>
        <h2 class="center">Bli en del av next level running idag!</h2>

        <BlackButton class="align-center mb-4 white" @click.native="showModal = true">Kontakta oss för en kostnadsfri konsultation</BlackButton>
        <p class="mb-0">coach@nextlevelrunning.se</p>
        <p class="mb-3 mt-0"><a href="tel:+46701859191">070 - 185 91 91</a></p>
        <img class="mb2" src="~assets/NLR_white_small.svg" width="100" alt="">
      </div>
    </section>
    <Modal v-if="showModal" @close="showModal = false"></Modal>
  </div>
</template>

<script>
import Hero from '~/components/hero'
import Top from '~/components/top'
import BlackButton from '~/components/black-button'
import Banner from '~/components/banner'
import Slider from '~/components/slider'

import Modal from '~/components/modal'

export default {
  components: { Hero, Top, BlackButton, Banner, Slider, Modal },
  data() {
    return {
      showModal: false,
    }
  },
}
</script>

<style lang="css" scoped>
@custom-media --small (max-width: 60em);
@custom-media --xsmall (max-width: 25em);

.top-bar {
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 0.33rem;
  z-index: 4;
  position: relative;
}

.main {
  lost-center: 1200px;
  width: 90vw;
}

.row {
  lost-utility: clearfix;
}

.fill-space {
  flex-flow: row;
  display: flex;
  @media (--small) {
    flex-flow: column;
  }
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.center {
  text-align: center;
}

.align-center {
  margin: 0 auto;
  display: block;
}

.mb2 {
  margin-bottom: 1rem;
}

.four-twelve {
  lost-column: 4/12;
  @media (--small) {
    lost-column: 12/12;
  }
}

.six-twelve {
  lost-column: 6/12;
}

.black {
  background-color: #000000;
  color: #fff;
}

.uppercase {
  text-transform: uppercase;
  margin: 0;
}

.green {
  color: #80E298;
  margin-top: 0.5rem;
}

.eight-twelve {
  lost-column: 8/12;
  @media (--small) {
    lost-column: 12/12;
  }
}

.flex {
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 0.5rem 2rem;
}

.flex img {
  margin-bottom: 3rem;
  margin-top: 1rem;
}

.right-align {
  text-align: right;
}

.mb-0 {
  margin-bottom: 0;
}

.mt-2 {
  margin-top: 2rem;
}

.mb-4 {
  margin-bottom: 4rem;
}

.m-1 {
  margin: 0.5rem;
}

.mt-special {
  margin-top: 0.5rem;
}

.mt-4 {
  margin-top: 4rem;
}

.underline {
  font-weight: 700;
}

.max-w {
  width: 100%;
  margin: 1.5rem auto -0.5rem;
  background-color: #fff;
  padding: 0.5rem;
}

.m-0 {
  margin: 0;
}

.mt-1 {
  margin-top: 0.5rem;
}

.flex-center {
  display: flex;
  align-items: center;
  @media (--small) {
    display: block;
  }
}

.mt-5 {
  margin-top: 6rem;
}

.bottom {
  background-color: #000;
  color: #fff;
  padding: 2rem 0 1rem;
  text-align: center;
}

.w-90 {
  max-width: 90vw;
  margin: 0 auto;
}

.mt-0 {
  margin-top: 0;
}

.white {
  background-color: #fff;
  padding: 1.5rem;
}
</style>
