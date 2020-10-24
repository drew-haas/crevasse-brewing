<template>
  <div class="home">
    <img src="../assets/img/crevasse.jpg">
    <HelloWorld msg="Welcome to Crevasse Brewing"/>
    <h2 class="headline">we da best</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
.headline {
  font-size: 100px;
  letter-spacing: 4px;
  margin: 0;
}
</style>
