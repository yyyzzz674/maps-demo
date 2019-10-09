<template>
  <div class="home">
    <li>
      <router-link to="openlayers">openlayers</router-link>
    </li>
    <li>
      <router-link to="vuelayers">vuelayers</router-link>
    </li>
    <li>
      <router-link to="amap">高德地图api</router-link>
    </li>
    <li>
      <router-link to="arcgis-api-for-js">ArcGIS API for JS</router-link>
    </li>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {}
}
</script>
<style lang="stylus" scoped>
li
  list-style-type none
</style>
