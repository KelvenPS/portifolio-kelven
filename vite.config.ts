import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Importante: tem que começar e terminar com barra
  base: '/portifolio-kelven/', 
})