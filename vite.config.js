import { defineConfig } from 'vite'

export default defineConfig({
  base: '/rex-visual-production/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
