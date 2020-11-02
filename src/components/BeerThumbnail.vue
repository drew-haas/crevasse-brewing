<template>
  <div class="beer-thumbnail-container">
    <div class="beer-image"></div>
    <div class="beer-title typography-subtitle">{{title}}</div>
    <p class="typography-body-reduced beer-description">{{description}}</p>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'BeerThumbnail',
  props: {
    title: String,
    description: String
  },
  setup () {
    onMounted(() => {
      // console.log('beer thumbnail mounted')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.beer-thumbnail-container {
  text-align: center;
  padding: 5px;
  margin: 20px 10px;
}

.beer-image {
  width: 200px;
  height: 300px;
  background-color: $off-white;
  margin: 0 auto 23px;

  @media screen and (max-width: $bp-m) {
    width: 100%;
    height: 20vh;
  }
}

.beer-description {
  margin-top: 7px;
}
</style>
