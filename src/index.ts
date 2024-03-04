// import { createApp } from '../vue.runtime.esm-browser'
import { createApp } from 'vue'
import App from './App.vue'
import plugins from './plugins'
import './index.scss'

const a = createApp(App).use(plugins)
a.mount('#app')
