<template>
  <div class="beer-thumbnail-container" :class="containerClass">
    <div class="beer-title">{{title}}</div>
    <div class="beer-description">{{description}}</div>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'BeerThumbnail',
  props: {
    title: String,
    description: String,
    containerClass: String
  },
  setup () {
    onMounted(() => {
      console.log('beer thumbnail mounted')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.beer-thumbnail-container {
  border: 1px solid orange;
  padding: 5px;
  margin: 5px;
}
.glacier {

}
</style>
