<template>
  <div class="home">
    <img class="hero-image" src="../assets/img/crevasse.jpg">
    <!-- <HelloWorld msg="Crevasse Brewing"/> -->
    <h1 class="typography-title">Crevasse Brewing</h1>
    <div class="beer-container">
      <BeerThumbnail title="Glacier IPA" description="have a nice glacier in the crevasse"/>
      <BeerThumbnail title="Caetano IPA" description="have a nice glacier in the crevasse"/>
      <BeerThumbnail title="Juneau IPA" description="have a nice glacier in the crevasse"/>
      <BeerThumbnail title="Medli IPA" description="have a nice glacier in the crevasse"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import BeerThumbnail from '@/components/BeerThumbnail.vue'
import gsap from 'gsap'
import { onMounted } from 'vue'

export default {
  name: 'Home',
  components: {
    BeerThumbnail
  },
  setup () {
    onMounted(() => {
      console.log('on mounted')
      gsap.to('.hero-image', {
        duration: 1,
        x: '300px'
      })
    })
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 50px 0;
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
