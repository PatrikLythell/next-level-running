<template lang="html">
  <button><slot></slot></button>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
button {
  background-color: #000;
  border: none;
  color: #fff;
  padding: 0.75rem 1rem;
  font-weight: 600;
  text-decoration: underline;
  font-family: 'realtimerounded-regular', monospace;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: rgba(0,0,0,.75)
  }
}

.white {
  background-color: #fff;
  color: #000;
}
</style>
