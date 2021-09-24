import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

import DashboardSenior from '../views/auth/senior/Dashboard.vue'
import BalanceSenior from '../views/auth/senior/Balance.vue'
import JuniorsSenior from '../views/auth/senior/Juniors.vue'
import ProfileSenior from '../views/auth/senior/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:idCampaign/catalog/:name/:idCatalog/',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/:idCampaign/catalog/:name/:idCatalog/:key',
    name: 'CatalogShare',
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/product/:id/:key',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/importadores/:idCampaign',
    name: 'Importadores',
    component: () => import('../views/Importadores.vue')
  },
  {
    path: '/campaign-extra/:idCampaign',
    name: 'CampaignExtra',
    component: () => import('../views/CampaignExtra.vue')
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('../views/Faq.vue')
  },
  {
    path: '/dashboard-senior',
    name: 'DashboardSenior',
    component: DashboardSenior,
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard-senior/balance',
    name: 'BalanceSenior',
    component: BalanceSenior,
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard-senior/juniors',
    name: 'JuniorsSenior',
    component: JuniorsSenior,
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard-senior/profile',
    name: 'ProfileSenior',
    component: ProfileSenior,
    meta: { requiresAuth: true }
  },
  {
    path: '/cart-mobile',
    name: 'CartMobile',
    component: () => import('../views/CartMobile.vue'),
    meta: { onlyPhone: true }
  },
  {
    path: '/login-mobile',
    name: 'LogintMobile',
    component: () => import('../views/LoginMobile.vue'),
    meta: { onlyPhone: true }
  },
  {
    path: '/congratulation',
    name: 'Congratulation',
    component: () => import('../views/CongratulationMobile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next()
    } else { next('/') }
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.onlyPhone)) {
    if (store.getters.getIsMobile) {
      next()
    } else { next('/') }
  } else {
    next()
  }
})
export default router
