import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/chd104/g3/front/'
    : '/',
  build: {
    outDir: 'front'
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),

    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                    @import "./src/assets/scss/main.scss";
                `,
      }
    },
  },
  // server:{
  //   host:'10.1.18.184'
  // }
})