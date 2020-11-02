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
  <div class="main-menu">
    <div class="grid-container">
      <div class="grid-item grid-item-contact">
        <h2>Contact</h2>
      </div>
      <div class="grid-item">2</div>
      <div class="grid-item grid-item-list">
        <ul>
          <li class="typography-link">Home</li>
          <li class="typography-link">About</li>
          <li class="typography-link">Locations</li>
          <li class="typography-link">Beers</li>
          <li class="typography-link">More Information</li>
        </ul>
      </div>
      <div class="grid-item grid-item-4">4</div>
      <div class="grid-item grid-item-5">5</div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Navigation',
  data () {
    return {
      menuOpen: false
    }
  },
  mounted () {
    this.mainMenu = document.querySelector('.main-menu')
    this.navIcon = document.querySelector('.nav-icon')

    // Toggle Menu Opening
    this.navIcon.addEventListener('click', () => {
      if (this.menuOpen) {
        this.closeMenu()
      } else {
        this.openMenu()
      }
    })
  },
  methods: {
    openMenu () {
      // disable scrolling
      document.body.classList.add('disable-scrolling')
      this.mainMenu.classList.add('menu-open')

      // animate menu
      gsap.to('.main-menu', {
        duration: 1,
        ease: 'Expo.easeInOut',
        x: 0
      })

      // update state variable
      this.menuOpen = true

      console.log('open menu')
    },
    closeMenu () {
      // enable scrolling
      document.body.classList.remove('disable-scrolling')
      this.mainMenu.classList.remove('menu-open')

      // animate menu
      gsap.to('.main-menu', {
        duration: 1,
        ease: 'Expo.easeInOut',
        x: '100%'
      })

      // update state variable
      this.menuOpen = false

      console.log('close menu')
    }
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
  background-color: $accent-color;
  cursor: pointer;
  z-index: 11;
}

.main-menu {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  transform: translateX(100%);
  background-color: $primary-color;

  &.menu-open {
    pointer-events: auto;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 50vw;
    grid-template-rows: 1fr 1fr;
    width: 100%;
    height: 100%;
  }
}

.grid-item-list {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $off-white;
  grid-row-end: last-line;
  grid-row-start: 1;
  grid-column-start: 3;

  li {
    font-size: 30px;

    &:not(:last-of-type) {
      margin-bottom: 30px;
    }
  }
}

.grid-item-contact {
  background-color: $blue-light;
}

.grid-item-4 {
  background-color: $turquoise;
}

.grid-item-5 {
  background-color: $gray-dark;
  color: $off-white;
}
</style>
