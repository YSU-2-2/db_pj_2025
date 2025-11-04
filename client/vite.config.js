import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: '/src/pages',
    },
  },
  server: {
    port: 5173,
    // CSP 관련 설정 (개발 환경용)
    headers: {
      'Content-Security-Policy': "default-src 'self' 'unsafe-inline' 'unsafe-eval'; script-src 'self' 'unsafe-inline' 'unsafe-eval';"
    }
  }
})