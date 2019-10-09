<template>
  <div id="map" class="mapView"></div>
</template>
<script>
import { loadModules } from 'esri-loader'
export default {
  name: 'ArcgisApiForJs',
  data: function() {
    return {
      view: null
    }
  },
  mounted() {
    const options = { css: true }
    // first, we use Dojo's loader to require the map class
    loadModules(['esri/views/MapView', 'esri/Map'], options)
      .then(([MapView, Map]) => {
        // then we load a map from an id
        var webmap = new Map({
          basemap: 'streets'
        })
        // and we show that map in a container w/ id #viewDiv
        this.view = new MapView({
          map: webmap,
          container: 'map'
        })
      })
      .catch(err => {
        // handle any errors
        console.error(err)
      })
  }
}
</script>
<style lang="stylus" scoped>
.mapView
  height 600px
</style>
