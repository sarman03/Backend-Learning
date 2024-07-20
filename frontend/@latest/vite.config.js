import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api': 'https://friendly-dollop-9p54q5gq57qfxqw-3000.app.github.dev/'
    }
  },
  plugins: [react()],
})
