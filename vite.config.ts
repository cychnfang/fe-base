import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  mode: 'developement',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components'
    },
    extensions: ['.ts', '.vue']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue']
        }
      }
    }
  }
})
