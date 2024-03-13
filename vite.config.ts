import { defineConfig, createServer } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from 'vite-plugin-commonjs'
import basicSsl from '@vitejs/plugin-basic-ssl'
import Inspect from 'vite-plugin-inspect'
import myPlugin from './svg'

export default defineConfig({
  mode: 'developement',
  plugins: [
    Inspect(),
    myPlugin({
      dir: 'src/assets/svg'
    }),
    commonjs(),
    vue(),
    basicSsl({
      name: 'test',
      domains: ['*.mihoyo.com']
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components'
    },
    extensions: ['.ts', '.vue', '.js']
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
