import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import routes from './routes'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// router that allows manual url navigation
const pinia = createPinia()


const app = createApp(App)
app.use(router, pinia)
app.mount('#app')

