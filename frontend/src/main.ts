import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//descargadas
import 'bootstrap'
import '@popperjs/core/dist/umd/popper.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import axios from 'axios'
import custom_axios from './axios'
import UserAuth from './stores/store'

const app = createApp(App)
app.use(createPinia())
app.use(router, custom_axios)
app.use(axios)  
app.mount('#app')

//token
const store = UserAuth()
const token = localStorage.getItem('token') || sessionStorage.getItem('token')
if (token) {
  store.token = token
}
