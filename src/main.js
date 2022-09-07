import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import routes from './routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes,
})
const pinia = createPinia()


const app = createApp(App)
app.use(router, pinia)
app.mount('#app')

