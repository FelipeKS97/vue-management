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
      path: '/management/', 
      component: Management, 
      redirect: localStorage.getItem("authToken") ?  '/management/dashboard' :  '/',
      children: [
        {
          path: 'dashboard',
          component: () => import('./components/Dashboard.vue'),
        },
        {
          path: 'users',
          component: () => import('./components/Users.vue')
        },
        {
          path: 'profile',
          component: () => import('./components/Profile.vue') 
        },
        /*{
          path: 'canvas',
          component: () => import('./components/Canvas.vue') 
        },*/

      ]
    }
  ]
})
