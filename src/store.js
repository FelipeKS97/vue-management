import Vue from 'vue'
import Vuex from 'vuex'
import Notifications from 'vue-notification';

import router from './router'
import { post, get, put } from 'axios';
import { setAuthToken } from './setToken'

Vue.use(Notifications)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {
      email: '',
    },
    userToken: '',
    users: [],
    isAuthenticated: false,
    isLoading: false

  },
  mutations: {
    
    fetchUsers(state, payload) {
      state.users = payload
    },
    logout(state) {
      state.userData = {...state.userData, email: '' }
    },
    login (state, payload) {
      state.isAuthenticated = true,
      state.userToken = payload.token
      state.userData.email = payload.email
    },
    loading(state) {
      state.isLoading = true
    },
    loaded(state) {
      state.isLoading = false
    }

  },
  actions: {
    logout({commit}) {
      localStorage.removeItem('authToken');
      setAuthToken(false)
      commit('logout')
    },
    login({ commit }, payload) {
      commit('loading')

      post('/login', payload)
      .then(
        resp => {
        const token =  resp.data.token
        localStorage.setItem('authToken', token)
        setAuthToken(token)
        commit('login', {token, email: payload.email})
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
        commit('login', {token, email: payload.email})

        router.push('/management')
        
      })
      .catch(
      )
      .finally(
        commit('loaded')
      )
    },

    fetchUsers({ commit }) {
      get('/users')
      .then(
        resp => {

          commit('fetchUsers', resp.data)
          
        }
      )
      .catch(
      )

    },
    createUser(context, {first_name, avatar }) {
      post('/users', { name: first_name, job: avatar})
      .then(
        () => {
          
          
        }
      )
      .catch(
      )

    },
    editUser(context, {first_name, avatar, id }) {
      put(`/users/${id}`, { name: first_name, job: avatar})
      .then(
        () => {
          
        }
      )
      .catch(
      )

    }
  }
})
