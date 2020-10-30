<template>
  <div class="home">
    <section class="section-hero">
      <div class="section-container">
        <!-- <img class="hero-image" src="../assets/img/crevasse.jpg"> -->
        <h1 class="hero-title typography-title">Crevasse <br>Brewing</h1>
        <p class="hero-copy">I'm baby brunch tousled pok pok, taiyaki listicle leggings edison bulb cornhole taxidermy swag vape lo-fi. Tattooed snackwave paleo, fingerstache cronut enamel pin tacos jean shorts. Austin snackwave flexitarian hoodie cold-pressed tousled affogato thundercats YOLO.</p>
      </div>
    </section>

    <section class="section-beer-list">
      <div class="beer-container">
        <BeerThumbnail title="Glacier IPA" description="have a nice glacier in the crevasse"/>
        <BeerThumbnail title="Caetano IPA" description="have a nice glacier in the crevasse"/>
        <BeerThumbnail title="Juneau IPA" description="have a nice glacier in the crevasse"/>
        <BeerThumbnail title="Medli IPA" description="have a nice glacier in the crevasse"/>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import BeerThumbnail from '@/components/BeerThumbnail.vue'
// import gsap from 'gsap'
import { onMounted } from 'vue'

export default {
  name: 'Home',
  components: {
    BeerThumbnail
  },
  setup () {
    onMounted(() => {
      // gsap.to('.hero-image', {
      //   duration: 1,
      //   x: '300px'
      // })
    })
  }
}
</script>

<style lang="scss" scoped>
.section-hero {
  margin-bottom: 100px;
}

.hero-title {
  color: $accent-color;
}

.beer-container {
  display: flex;
  justify-content: center;
  max-width: 100%;
  border-top: 1px solid $gray-dark;
  border-bottom: 1px solid $gray-dark;
}
</style>
