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
<style lang="scss" scoped>
.nav {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  font-family: $sans-serif;
  font-weight: lighter;
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

  @media screen and (max-width: $bp-l) {
    display: none;
  }
}

.nav-logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: $bp-l) {
    position: relative;
    left: 0;
    transform: translate(0);
    margin: 20px;
  }

  img {
    width: 185px;
    display: block;

    @media screen and (max-width: $bp-l) {
      width: 165px;
    }
  }
}

.nav-icon {
  width: 50px;
  height: 50px;
  background-color: $off-white;
  cursor: pointer;
}
</style>
