import Vue from 'vue';
import Vuetify from 'vuetify';
import Notifications from 'vue-notification';
import axios from 'axios';

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Notifications)
Vue.use(Vuetify)
Vue.config.productionTip = false

axios.defaults.baseURL= 'https://reqres.in/api'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
