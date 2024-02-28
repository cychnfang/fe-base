import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue']
        },
        plugins: [
          copy({
            hook: 'writeBundle',
            targets: [
              {
                src: 'manifest.json',
                dest: 'dist'
              },
              {
                src: 'chrome_extension_qrcode.png',
                dest: 'dist'
              }
            ]
          })
        ]
      }
    }
  }
})
