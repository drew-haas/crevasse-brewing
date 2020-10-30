<template>
  <div class="nav">
    <div class="nav-list">
      <ul>
        <li><router-link to="/our-beers">Our Beers</router-link></li>
        <li><router-link to="/locations">Locations</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>

    <div class="nav-logo">
      <router-link to="/">
        <img src="../assets/img/crevasse-logo.svg" alt="Crevasse Brewing Logo">
      </router-link>
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
      // console.log('on mounted')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  font-family: $sans-serif;
  font-weight: lighter;
  background-color: $off-white;
}

.nav-list {
  ul {
    display: flex;
    list-style-type: none;
    margin: 10px 0 10px 10px;
    padding: 0;
  }

  li {
    margin: 10px 15px;
  }
}

.nav-logo {
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 165px;
    display: block;
  }
}

.nav-icon {
  width: 100px;
  background-color: $gray;
  min-height: 50px;
}

@media screen and (max-width: 767px) {
  .nav-list {
    display: none;
  }
}
</style>
