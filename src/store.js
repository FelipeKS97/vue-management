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
    isAuthenticated: false,
    isLoading: false

  },
  mutations: {
    login (state, payload) {
      state.isAuthenticated = true,
      state.userToken = payload.token
    },
    loading(state) {
      state.isLoading = true
    },
    loaded(state) {
      state.isLoading = false
    }

  },
  actions: {
    login({ commit }, payload) {
      commit('loading')

      post('/login', payload)
      .then(
        resp => {
        const token =  resp.data.token
        localStorage.setItem('authToken', token)
        setAuthToken(token)
        commit('login', {token})
        commit('loaded')

        router.push('/management')
        
      })
      .catch(
        
      )
      .finally(
        commit('loaded')
      )
    },
    register({ commit }, payload) {
      commit('loading')

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
      .finally(
        commit('loaded')
      )
    }

  }
})
