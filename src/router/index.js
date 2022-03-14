import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog/Catalog.vue'
import CatalogTypes from '../views/Catalog/CatalogTypes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/catalog/types',
      name: 'CatalogTypes',
      component: CatalogTypes
    }
  ]
})

export default router
