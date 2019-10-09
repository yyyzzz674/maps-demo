import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/openlayers',
      component: () => import('./views/openlayers')
    },
    {
      path: '/amap',
      component: () => import('./views/amap')
    },
    {
      path: '/vuelayers',
      component: () => import('./views/vuelayers')
    },
    {
      path: '/arcgis-api-for-js',
      component: () => import('./views/arcgis-api-for-js')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
