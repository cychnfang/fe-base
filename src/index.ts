import { createApp } from '../vue.runtime.esm-browser'
import App from './App.vue'
import plugins from './plugins'

const a = createApp(App).use(plugins)
a.mount('#app')
