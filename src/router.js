import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
import Login from './views/Login'
import Management from './views/Management.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    { 
      path: '/management/', component: Management, redirect: '/management/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('./components/Dashboard.vue'),
        },
        /*{
          path: 'profile',
          component: () => import('./views/UserProfile.vue') 
        },
        {
          path: 'users',
          component: () => import('./views/Users.vue')
        },
        {
          path: 'canvas',
          component: () => import('./views/Canvas.vue') 
        },*/

      ]
    }
  ]
})
