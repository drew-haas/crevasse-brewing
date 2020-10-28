<template>
  <div class="home">
    <img class="hero-image" src="../assets/img/crevasse.jpg">
    <HelloWorld msg="Welcome to Crevasse Brewing"/>
    <div class="beer-container">
      <BeerThumbnail title="Glacier IPA" description="have a nice glacier in the crevasse"/>
      <BeerThumbnail title="Caetano IPA" description="have a nice glacier in the crevasse"/>
      <BeerThumbnail title="Juneau IPA" description="have a nice glacier in the crevasse"/>
      <BeerThumbnail title="Medli IPA" description="have a nice glacier in the crevasse"/>
    </div>
    <h2 class="headline">we da best</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BeerThumbnail from '@/components/BeerThumbnail.vue'
import gsap from 'gsap'
import { onMounted } from 'vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
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

<style lang="scss">
.headline {
  font-size: 100px;
  letter-spacing: 4px;
  margin: 0;
}

.beer-container {
  display: flex;
  justify-content: center;
  max-width: 100%;
}
</style>
