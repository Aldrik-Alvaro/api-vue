/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import axios from 'axios'

// Composables
import { createApp } from 'vue'


// Plugins
import { registerPlugins } from '@/plugins'
axios.defaults.baseURL =  'https://api-spring-production.up.railway.app/'
const app = createApp(App)

registerPlugins(app)

app.mount('#app')


import { createVuetify } from 'vuetify'

export const vuetify = createVuetify({
  theme: { defaultTheme: 'light' },
})