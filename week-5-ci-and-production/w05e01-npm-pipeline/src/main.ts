import { createApp } from 'vue'
import AppLayout from './app/AppLayout'
import { router } from './routes'

const app = createApp(AppLayout)
app.use(router)
app.mount('#app')
