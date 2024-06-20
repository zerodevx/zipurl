import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'index.js',
      formats: ['umd'],
      name: 'window',
      fileName: 'index'
    },
    rollupOptions: {
      output: {
        extend: true
      }
    },
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false
      }
    }
  },
  publicDir: false
})
