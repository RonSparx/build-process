import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'
import { resolve } from 'node:path'

export default defineConfig({
  server: {
    host: true,
    port: 3000
  },
  publicDir: 'public',
  resolve: {
    alias: {
      '@fonts': resolve('frontend/fonts'),
      '@modules': resolve('frontend/modules')
    }
  },
  plugins: [
    shopify()
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      external: /^lit/,
    },
  },
})


 