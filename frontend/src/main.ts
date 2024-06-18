import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// Bootstrap y Popper
import 'bootstrap'
import '@popperjs/core/dist/umd/popper.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
// FontAwesome
import '@fortawesome/fontawesome-free/css/all.min.css'
// Axios y custom_axios
import axios from 'axios'
import custom_axios from './axios'
import UserAuth from './stores/store'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(custom_axios)  
app.use(vuetify)
app.mount('#app')
//token
const store = UserAuth()
const token = localStorage.getItem('token') || sessionStorage.getItem('token')
if (token) {
  store.token = token
}
