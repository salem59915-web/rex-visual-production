import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        models: resolve(__dirname, 'models-service.html'),
        creators: resolve(__dirname, 'content-creators-service.html'),
        model_profile: resolve(__dirname, 'model-profile.html'),
        creator_profile: resolve(__dirname, 'creator-profile.html'),
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  }
})
