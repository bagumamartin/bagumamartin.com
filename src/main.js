import { createApp } from 'vue'

import VueMeta from 'vue-meta'

import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import axios from 'axios'

axios.defaults.baseURL = 'https://apigcohs.cybfyafrica.com'

library.add(fas)

createApp(App)
  .use(store)
  .use(router, axios, VueMeta)
  .component('fai', FontAwesomeIcon)
  .mount('#app')

Vue.config.productionTip = false
