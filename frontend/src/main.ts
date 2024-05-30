import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//descargadas
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import custom_axios from '@/axios'
import axios from 'axios'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(axios)  
app.mount('#app')
