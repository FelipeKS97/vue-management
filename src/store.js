import Vue from 'vue'
import Vuex from 'vuex'
import Notifications from 'vue-notification';

import router from './router'
import { post } from 'axios';
import { setAuthToken } from './setToken'

Vue.use(Notifications)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {
      email: '',
      name: '',
    },
    userToken: '',
    users: [],
    isAuthenticated: false

  },
  mutations: {
    login (state, payload) {
      state.isAuthenticated = true,
      state.userToken = payload.token
    }

  },
  actions: {
    login({ commit }, payload) {
      post('/login', payload)
      .then(
        resp => {
        const token =  resp.data.token
        localStorage.setItem('authToken', token)
        setAuthToken(token)
        commit('login', {token})

        router.push('/management')
        
      })
      .catch(
        
      )
    },
    register({ commit }, payload) {
      post('/register', payload)
      .then(
        resp => {
        const token =  resp.data.token
        localStorage.setItem('authToken', token)
        setAuthToken(token)
        commit('login', {token})

        router.push('/management')
        
      })
      .catch(
       
      )
    }

  }
})
