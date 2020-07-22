<template>
  <div>
    <map-drag class="mapbox"></map-drag>
  </div>
</template>
<script>
import mapDrag from './components/mapDrag'
export default {
  name: 'AMap',
  components: {
    mapDrag
  }
}
</script>
<style lang="stylus" scoped>
.mapbox
  height 400px
  margin-bottom 20px
  float left
</style>
