<template>
  <div class="banner">
    <div class="main">
      <slot name="headline"></slot>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.banner {
  background-color: #000;
  width: 100%;
  color: #fff;
  padding: 2rem;
  margin: 2rem 0;
}
.main {
  lost-center: 1024px;
}

.mb-1 {
  margin-bottom: 0.5rem;
}

.mt-1 {
  margin-top: 0.5rem;
}

.center {
  text-align: center;
}
</style>
