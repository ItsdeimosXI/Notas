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
// Primevue
import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/lara';
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(custom_axios)  
app.use(PrimeVue, {
  theme: {
      preset: Lara,
      options: {
        prefix: 'p',
        darkModeSelector: 'manual',
        cssLayer: false
    }
}
  
});
//element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
app.mount('#app')
//token
const store = UserAuth()
const token = localStorage.getItem('token') || sessionStorage.getItem('token')
if (token) {
  store.token = token
}
