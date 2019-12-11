import Vue from 'vue'
import VueRouter from 'vue-router'
import Pokedex from '@/components/pages/Pokedex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: Home
  },
  {
    path: '/pokedex',
    name: 'pokedex',
    component: Pokedex
  },
  {
    path: '/typeCheck',
    name: 'typeCheck',
    // component: TypeCheck
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
