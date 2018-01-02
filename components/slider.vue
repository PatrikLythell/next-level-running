<template>
  <div class="main-carousel">
    <div class="full-width">
      <div class="four-twelve tc">
        <img src="~assets/trappan.svg" alt="">
      </div>
      <div class="eight-twelve">
        <h2 class="mt-0">We fight come fall - We thrive come spring</h2>
        <p class="small">En slående skillnad mellan elitlöparens och motionärens träningsupplägg är en genomtänkt uppdelning av träningen i olika fokusperioder - s.k. pulsering. Sådan uppdelning har till syfte att i givna perioder utveckla olika delar av löparens färdigheter för att i slutändan säkerställa att löparen är sin absolut bästa version av sig själv vid ett givet tillfälle. Formtoppning blir här en central aspekt av träningsupplägget - alltså att i perioder träna mer och hårdare för att närmare ett aktuellt tävlingstillfälle minska träningsmängden och på så sätt få maximal utväxling på den träning som utförts under tidigare perioder.</p>
        <p>Next Level Running hjälper dig med en ändamålsenlig pulsering av din träning - så att du når just dina mål! Och förresten, känslan av att vara i toppform är fantastisk…</p>
      </div>
    </div>
    <div class="full-width">
      <div class="four-twelve tc">
        <img src="~assets/trappan-2.svg" alt="">
      </div>
      <div class="eight-twelve">
        <h2 class="mt-0">Each workout counts</h2>
        <p class="small">Elitlöparens träningsprogram tillkommer inte av en slump - varje pass är ett steg i den trappa som sedermera tar löparen till nästa nivå. Fokus på variation och skadeförebyggande träning blir här ytterst centralt. Ett varierat träningsupplägg stressar nämligen kroppen från olika håll och tvingar kroppen att anpassa sig till sin nya miljö - Tränar du allt för ensidigt kan du dessvärre inte förvänta dig mycket utveckling. Alltför monoton träning är inte endast ineffektiv och tråkig utan ökar också risken för skador!</p>
        <p>Next Level Running tar baserat på dina mål och förutsättningar fram ett träningsupplägg med en väl avvägd blandning av distanspass, intervallpass, snabbhet, löpteknik, löpstyrka och alternativträning - och ger dig på så sätt nya strategier och verktyg att använda i din fortsätta löparkarriär.</p>
      </div>
    </div>
    <div class="full-width">
      <div class="four-twelve tc">
        <img src="~assets/trappan-3.svg" alt="">
      </div>
      <div class="eight-twelve">
        <h2 class="mt-0">We win or we learn - we never lose</h2>
        <p class="small">Att vara lyhörd och responsiv på hur våra kroppar reagerar på olika typer av träning är något som urskiljer de allra bästa coacherna. Via en kontinuerlig och öppen dialog mellan utövaren och dess coach kan nyckelfaktorer i träningen identifieras och träningsprogrammet justeras på ett fruktsamt sätt. Vidare blir givetvis ett tränat löpcoachöga viktigt vid utveckling av löpteknik och löpstyrka samt mindset och taktik vid hårda intervallpass och faktiska tävlingstillfällen.</p>
        <p>Next Level Running bistår dig med löpande uppföljning, analys och justering av ditt träningsupplägg baserat på vad i din träning som fungerar allra bäst just för dig. Handfasta tips kopplat till löpteknik och löpstyrka är dessutom centrala inslag under de coachledda träningspassen. Hoppa PT:n på gymmet och lås upp proffsens hemligheter!</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    if (process.browser) {
      let Flickity = require('flickity')

      let elem = document.querySelector('.main-carousel');
      // element argument can be a selector string
      //   for an individual element
      let flkty = new Flickity( '.main-carousel', {
        // options
      });
    }

  }


}
</script>

<style scoped>
@custom-media --small (max-width: 60em);
@custom-media --xsmall (max-width: 25em);

.small {
  @media (--small) {
    display: none;
  }
}

.main-carousel {
  width: 1400px;
  max-width: 100vw;
  margin: 0 auto;
}

.tc {
  text-align: center;
}

.full-width {
  width: 100%;
  padding: 0 100px;
  display: flex;
  align-items: center;
  @media (--small) {
    padding: 0 10vw;
    display: block
  }
}

.main-carousel {
  margin-top: 2.5rem;
  margin-bottom: 6rem;
}

.four-twelve {
  lost-column: 4/12;
  @media (--small) {
    lost-column: 12/12;
  }
}

img {
  width: 100%;
  max-width: 60vw;
}

.eight-twelve {
  lost-column: 8/12;
  @media (--small) {
    lost-column: 12/12;
  }
}
</style>
