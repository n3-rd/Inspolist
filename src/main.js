import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './routes'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

