<template>
  <div id="mapOL"></div>
</template>
<script>
import 'ol/ol.css'
import Map from 'ol/Map.js'
import View from 'ol/View.js'
import TileLayer from 'ol/layer/Tile.js'
import OSM from 'ol/source/OSM'

export default {
  name: 'OpenLayers',
  data: function() {
    return {
      map: null
    }
  },
  mounted() {
    this.map = new Map({
      target: 'mapOL',
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    })
  }
}
</script>

<style scoped lang="stylus">
#mapOL
  height 600px
  & /deep/ .ol-layer canvas
    left 0
</style>
