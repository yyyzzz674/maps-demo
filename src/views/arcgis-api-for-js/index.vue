<template>
  <div id="map" class="mapView"></div>
</template>
<script>
import { loadModules } from 'esri-loader'
import { ConvertWKTToGeoJson } from './util/WKTToGeoJson'
import { ConvertGeoJSONToESRI } from './util/GeoJSonToESRI'
export default {
  name: 'ArcgisApiForJs',
  data: function() {
    return {
      view: null,
      data: `MULTIPOLYGON (((40 40, 20 45, 45 30, 40 40)), 
        ((20 35, 10 30, 10 10, 30 5, 45 20, 20 35), (30 20, 20 15, 20 25, 30 20)))`
    }
  },
  mounted() {
    const options = { css: true }
    let geojson = ConvertWKTToGeoJson(this.data)
    let esrirest = ConvertGeoJSONToESRI(geojson)

    // first, we use Dojo's loader to require the map class
    loadModules(['esri/views/MapView', 'esri/Map', 'esri/Graphic'], options)
      .then(([MapView, Map, Graphic]) => {
        // then we load a map from an id
        var webmap = new Map({
          basemap: 'streets'
        })
        // and we show that map in a container w/ id #viewDiv
        this.view = new MapView({
          map: webmap,
          container: 'map'
        })

        console.log('esrirest', esrirest)

        // Create a symbol for rendering the graphic
        var fillSymbol = {
          type: 'simple-fill', // autocasts as new SimpleFillSymbol()
          color: [227, 139, 79, 0.8],
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: [255, 255, 255],
            width: 1
          }
        }
        for (let i = 0; i < esrirest.rings.length; i++) {
          let rings = esrirest.rings[i]
          for (let j = 0; j < rings.length; j++) {
            // Create a polygon geometry
            var polygon = {
              type: 'polygon',
              rings: [
                // [-64.78, 32.3],
                // [-66.07, 18.45],
                // [-80.21, 25.78],
                // [-64.78, 32.3]
                esrirest.rings[i][j]
              ]
            }
            console.log('polygon.rings', polygon.rings)
            // Add the geometry and symbol to a new graphic
            // Create a polygon graphic
            var polygonGraphic = new Graphic({
              geometry: polygon,
              symbol: fillSymbol
            })
            console.log('polygonGraphic', polygonGraphic)
            console.log('view before add ', this.view.graphics)
            // Add the graphics to the view's graphics layer
            this.view.graphics.add(polygonGraphic)
            console.log('view after add ', this.view.graphics)
          }
        }
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
