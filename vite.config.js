import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      '5173-iepahzuv66xufp8mbaaes-e42c1185.manus-asia.computer',
      'localhost',
      '127.0.0.1',
      '169.254.0.21'
    ]
  }
})
