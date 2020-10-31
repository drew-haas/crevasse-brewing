<template>
  <div class="our-beers">

    <section class="section-hero">
      <div class="section-container">
        <h1 class="typography-title">Our Beers</h1>
        <p class="hero-copy">Vice marfa bitters, ennui aesthetic tote bag hot chicken fam PBR&B mlkshk distillery freegan glossier. Farm-to-table tbh unicorn jean shorts, fanny pack 3 wolf moon meh lyft kale chips gluten-free.</p>
      </div>
    </section>

    <section class="section-beer-list">
      <div class="beer-container">
        <BeerThumbnail v-for="beer in beers" :key="beer.name" :title="beer.name" :description="beer.description"></BeerThumbnail>
      </div>
    </section>

  </div>
</template>

<script>
import BeerThumbnail from '../components/BeerThumbnail'

export default {
  name: 'Our Beers',
  components: {
    BeerThumbnail
  },
  computed: {
    beers () {
      return this.$store.state.beers
    }
  }
}
</script>

<style lang="scss" scoped>
.beer-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 100%;
  margin-top: 50px;

  @media screen and (max-width: $bp-m) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
