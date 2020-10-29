<template>
  <div class="home">
    <img class="hero-image" src="../assets/img/crevasse.jpg">
    <HelloWorld msg="Welcome to Crevasse Brewing"/>
    <h2 class="headline">we da best</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import gsap from 'gsap'
import { onMounted } from 'vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
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
  color: $blue;
}
</style>
