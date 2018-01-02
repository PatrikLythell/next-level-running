<template lang="html">
  <header>
    <img @click="toTop" src="~assets/NLR_black_small.svg" height="50" alt="">
    <nav>
      <a href="https://www.facebook.com/NextLevelRunningSE/" target="_blank" class="mr"><img src="~assets/facebook.svg" height="50" alt=""></a>
      <a href="https://www.instagram.com/nextlevelrunningse/" target="_blank" class="mr"><img src="~assets/instagram.svg" height="50" alt=""></a>
      <BlackButton @click.native="$emit('open')"><span class="not-small">Bli Medlem</span></BlackButton>
    </nav>
  </header>
</template>

<script>
import BlackButton from '~/components/black-button'

export default {
  components: { BlackButton },
  methods: {
    toTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="css" scoped>
@custom-media --small (max-width: 1200px);

  .mr {
    margin-right: 0.5rem;
    border-radius: 5px;
    overflow: hidden;
  }

  header {
    max-width: 1600px;
    margin: 0 auto;
    padding: 1rem;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 3;
    @media (--small) {
      background-color: #fff
    }
  }

  nav {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }

  img {
    display: block;
    &:hover {
      cursor: pointer;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 1.5rem;
  }

</style>
