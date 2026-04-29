import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ZY2557109/',
  assetsInclude: ['**/*.md'],
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  vite: {
    assetsInclude: ['**/*.md']
  }
})
