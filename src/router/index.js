import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ComingSoon from '../views/ComingSoon.vue';
import VillainsHome from '../views/VillainsHome.vue';
import SingleEvent from '../views/SingleEvent.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: VillainsHome
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/event',
    name: 'Event',
    component: SingleEvent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
