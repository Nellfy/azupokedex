import Vue from 'vue'
import VueRouter from 'vue-router'
import Pokedex from '@/components/pages/Pokedex'
import TypeChecker from '@/components/pages/TypeChecker'

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
    path: '/typeChecker',
    name: 'typeChecker',
    component: TypeChecker
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
