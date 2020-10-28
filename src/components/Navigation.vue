<template>
  <div class="nav">
    <div class="nav-list">
      <ul>
        <li><router-link to="/about">Our Beers</router-link></li>
        <li><router-link to="/about">Locations</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>

    <div class="nav-logo">
      <router-link to="/">Home</router-link>
    </div>

    <div class="nav-icon"></div>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'Navigation',
  setup () {
    onMounted(() => {
      console.log('on mounted')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  width: 100%;
  // position: fixed;
  display: flex;
  justify-content: space-between;
}

.nav-list, .nav-icon, .nav-logo {
  border: 1px solid blue;
}

.nav-logo, .nav-icon {
  width: 100px;
}

@media screen and (max-width: 767px) {
  .nav-list {
    display: none;
  }
}
</style>
