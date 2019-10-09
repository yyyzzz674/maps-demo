import Vue from 'vue'

import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'

import App from './App.vue'
import router from './router'

import store from './store'

Vue.config.productionTip = false

Vue.use(VueLayers, {
  // global data projection, see https://vuelayers.github.io/#/quickstart?id=global-data-projection
  // dataProjection: 'EPSG:4326',
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
