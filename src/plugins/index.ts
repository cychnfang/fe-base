import { App, Plugin } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const plugins: Plugin[] = [ElementPlus]

// 统一注册插件入口
export default (app: App) => {
  plugins.forEach((plugin) => app.use(plugin))
}
