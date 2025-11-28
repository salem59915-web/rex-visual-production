import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        models: resolve(__dirname, 'models-service.html'),
        model_profile: resolve(__dirname, 'model-profile.html'),
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  }
})
