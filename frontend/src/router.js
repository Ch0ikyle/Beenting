import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/studentLogin',
      name: 'studentLogin',
      component: () => import('./views/studentLogin.vue')
    },
    {
      path: '/Chating',
      name: 'Chating',
      component: () => import('./views/Chating.vue')
    },
    {
      path: '/ChatList',
      name: 'ChatList',
      component: () => import('./views/ChatList.vue')
    }
  ]
})