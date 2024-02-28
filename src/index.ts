import { createApp } from 'vue'
import App from './App.vue'
import plugins from './plugins'

const a = createApp(App).use(plugins)
a.mount('#app')
