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

    <div class="nav-icon">
      <div class="bar bar-1"></div>
      <div class="bar bar-2"></div>
    </div>
  </div>
  <div class="main-menu">
    <div class="grid-container">
      <div class="grid-item grid-item-1 grid-item-contact">
        <h2 class="typography-subtitle">Contact</h2>
        <p><a href="tel:614-000-0000">(614) 000 0000</a></p>
        <p><a href="mailto:info@crevassebrewing.com">info@crevassebrewing.com</a></p>
      </div>
      <div class="grid-item grid-item-2">
        <p>He was a wise man who invented beer.</p>
        <h3>- Plato</h3>
      </div>
      <div class="grid-item grid-item-3 grid-item-list">
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
      document.body.classList.add('disable-scrolling', 'main-menu-open')

      // animate menu
      const tl = gsap.timeline()
      tl.to('.grid-item', {
        duration: 0.8,
        stagger: 0.1,
        ease: 'Expo.easeInOut',
        scaleY: 1
      })

      // update state variable
      this.menuOpen = true
    },
    closeMenu () {
      // enable scrolling
      document.body.classList.remove('disable-scrolling', 'main-menu-open')

      // animate menu
      const tl = gsap.timeline()
      tl.to('.grid-item', {
        duration: 0.8,
        stagger: 0.1,
        ease: 'Expo.easeInOut',
        scaleY: 0
      })

      // update state variable
      this.menuOpen = false
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 11;

  .bar {
    width: 25px;
    height: 2px;
    background: $accent-color;
    transition: .25s;
  }

  .bar-1 {
    margin-bottom: 7px;
  }

  body.main-menu-open & {
    .bar-1 {
      transform: rotate(45deg);
      transition: .25s;
    }
    .bar-2 {
      transform: rotate(-45deg) translate(6px, -6px);
      transition: .25s;
    }
  }
}

.main-menu {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  z-index: 10;

  body.main-menu-open & {
    pointer-events: auto;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 50vw;
    grid-template-rows: 1fr 1fr;
    width: 100%;
    height: 100%;

    @media screen and (max-width: $bp-s) {
      display: block;

      .grid-item-1, .grid-item-2, .grid-item-4, .grid-item-5 {
        display: none;
      }

      .grid-item-list {
        height: 100vh;
      }
    }
  }

  .grid-item {
    transform-origin: 0 0;
    transform: scaleY(0);
    padding: 20px;
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

.grid-item-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: $primary-color;
  color: $off-white;
  text-align: center;

  p {
    font-size: 21px;
  }
}

.grid-item-4 {
  background-color: $turquoise;
}

.grid-item-5 {
  background-color: $gray-dark;
  color: $off-white;
}
</style>
