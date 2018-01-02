<template lang="html">
  <section class="full-screen">
    <div class="align six-twelve">
      <h1 class="no-margin">Träna som eliten</h1>
      <h2 class="no-margin">Löpcoaching för dig som vill ta din löpning till nästa nivå</h2>
      <p class="ten-twelve p-margin">Next Level Running erbjuder skräddarsydd, effektiv och målinriktad löpcoaching av tidigare landslagslöparen Tor Pöllänen och en av Europas just nu bästa distanslöpare David Nilsson.</p>
      <!-- <div class="row mb-3 mt-4">
        <div class="half">
          <img src="~assets/david.png" width="150" alt="">
        </div>
        <div class="half">
          <img src="~assets/coach.png" width="150" alt="">
        </div>
      </div> -->
      <BlackButton @click.native="$emit('open')">Boka en kostnadsfri konsultation</BlackButton>      
      <div class="small video-holder-mobile mt3 mb4">
        <div @click="showVideo = true" class="relative">
          <div class="up">
            <img src="~assets/play.svg" alt="">
            <p>Se filmen</p>
          </div>
          <img src="~assets/preview.gif" class="bg-video-small" alt="">
        </div>
      </div>
    </div>
    <div class="three-twelve-offset-one small-hide relative">
      <img src="~assets/runner-hero.png" alt="">
      <div @click="playCloseVid()" class="absolute center">
        <div class="up">
          <img src="~assets/play.svg" alt="">
          <p>Se filmen</p>
        </div>
        <img src="~assets/preview.gif" class="bg-video" width="300" alt="">
      </div>
    </div>
    <div class="hidden-player" v-show="showVideo">
      <small @click="playCloseVid()" class="center">stäng</small>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/tSXwYJK-fMs?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen ref="vid"></iframe>
    </div>
  </section>
</template>

<script>
import BlackButton from '~/components/black-button'

export default {
  components: { BlackButton },
  data() {
    return {
      showVideo: false
    }
  },
  methods: {
    playCloseVid() {
      this.showVideo = !this.showVideo
      if (!this.showVideo) this.$refs.vid.src = "https://www.youtube.com/embed/tSXwYJK-fMs?rel=0&amp;controls=0&amp;showinfo=0"
    }
  }
}
</script>

<style lang="css" scoped>
@custom-media --small (max-width: 45em);
@custom-media --xsmall (max-width: 25em);

.six-twelve {
  lost-column: 6/12;
  @media (--small) {
    lost-column: 12/12;
  }
}
.eight-twelve {
  lost-column: 10/12;
  @media (--small) {
    lost-column: 12/12;
  }
}

.p-margin {
  margin-top: 0.5rem;
}

.no-margin {
  margin: 0;
}

.small {
  display: none;
  @media (--small) {
    display: block;
  }
}

.video-holder-mobile {
  lost-column: 12/12;
  margin-top: 4rem;
  text-align: center;
  color: #fff;
  & p {
    margin: 0;
  }
  &:hover {
    color: #000;
    cursor: pointer;
  }
}

.full-screen {
  min-height: 95vh;
  display: flex;
  align-items: center;
  lost-utility: clearfix;
  @media (--small) {
    padding-top: 10rem;
    display: block;
  }
}

.three-twelve-offset-one {
  lost-column: 3/12;
  lost-offset: 1/12;
  text-align: right;
}

.small-hide {
  @media(--small) {
    display: none;
  }
}

.absolute {
  position: absolute;
  left: 45%;
  top: 40%;
}

.center {
  text-align: center;
  color: #fff;
  text-decoration: underline;
  & p {
    margin: 0;
  }
  &:hover {
    color: #000;
    cursor: pointer;
  }
}

.relative {
  position: relative;
}

.hidden-player {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.5);
  z-index: 4;
  & small {
    text-decoration: underline;
    text-align: center;
    display: block;
    margin-bottom: 1rem;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }

  }
  & iframe {
    width: 80vw;
    height: 40vw;
  }
}

.up {
  position: relative;
  z-index: 2;
}

.bg-video {
  position: absolute;
  top: -25px;
  z-index: 1;
  left: -105px;
  opacity: 1;
}

.bg-video-small {
  position: absolute;
  top: -2.5rem;
  z-index: 1;
  left: 0;
  opacity: 1;
  width: 100%;
}

.mb4 {
  margin-bottom: 4rem;
}

.mt-4 {
  margin-top: 1rem;
}

.half {
  display: inline-block;
  vertical-align: top;
  margin-right: 1rem;
}

.ib {
  display: inline-block;
  margin: 0 0 0 0.5rem;
}
</style>
