<template>
  <form class="form" name="konsultation" action="tack" data-netlify="true">
    <label for="type">Kategori:</label>
    <select required name="type" v-model="type">
      <option selected value="privatperson">Privatperson</option>
      <option value="företag">Företag</option>
      <option value="elitsatsande">Elitsatsande inom annan idrott</option>
    </select>

    <div v-if="type === 'företag'">
      <label for="name">Organisation:</label>
      <input type="text"  name="organisation" value="" placeholder="Fyll i organisation eller företagsnamn">
    </div>

    <label for="name">Namn:</label>
    <input type="text" required name="name" value="" placeholder="Fyll i namn">

    <label for="email">Email:</label>
    <input type="email" required name="email" value="" placeholder="Fyll i email">

    <label for="number">Telefon:</label>
    <input type="number" required name="phone" value="" placeholder="Fyll i telefonnummer">

    <label for="comment">Något vi borde veta?</label>
    <textarea name="comment" placeholder=""></textarea>

    <div class="mb4">
      <Button id="sub-it" type="submit" class="border-white">Skicka in</Button>
    </div>
  </form>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
