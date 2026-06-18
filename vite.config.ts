import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Se estiver em modo de produção (deploy), usa o nome do repo. Se não, usa a raiz.
  base: mode === 'production' ? '/nome-do-seu-repositorio/' : '/',
}))