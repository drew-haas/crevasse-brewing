<template>
  <div class="home">
    <section class="section-hero">
      <div class="section-container">
        <h1 class="hero-title typography-title">Crevasse <br>Brewing</h1>
        <p class="hero-copy">I'm baby brunch tousled pok pok, taiyaki listicle leggings edison bulb cornhole taxidermy swag vape lo-fi. Tattooed snackwave paleo, fingerstache cronut enamel pin tacos jean shorts. Austin snackwave flexitarian hoodie cold-pressed tousled affogato thundercats YOLO.</p>
      </div>
    </section>

    <section class="section-beer-list">
      <div class="section-container">
        <h2 class="typography-title">Our Beers</h2>
        <p class="hero-copy">Tattooed snackwave paleo, fingerstache cronut enamel pin tacos jean shorts. Austin snackwave flexitarian hoodie cold-pressed tousled affogato thundercats YOLO.</p>
      </div>
      <div class="beer-container">
        <BeerThumbnail v-for="beer in beers" :key="beer.name" :title="beer.name" :description="beer.description"></BeerThumbnail>
      </div>
    </section>
  </div>
</template>

<script>
import BeerThumbnail from '@/components/BeerThumbnail.vue'
import { onMounted } from 'vue'

export default {
  name: 'Home',
  components: {
    BeerThumbnail
  },
  computed: {
    beers () {
      return this.$store.state.beers
    }
  },
  setup () {
    onMounted(() => {
      // console.log(this.store.state)
    })
  }
}
</script>

<style lang="scss" scoped>
.hero-title {
  color: $accent-color;
}

.beer-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 100%;

  @media screen and (max-width: $bp-m) {
    grid-template-columns: 50% 50%;
  }
}
</style>
