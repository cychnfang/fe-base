import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [tsconfigPaths(), vue()],
  test: {
    cache: {
      dir: 'cache/.vitest'
    },
    // 启用类似 jest 的全局测试 API
    globals: true,
    // 这需要你安装 happy-dom 作为对等依赖（peer dependency）
    environment: 'happy-dom'
  }
})
