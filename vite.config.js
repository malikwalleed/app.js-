import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "walleed-app",
  plugins: [react()],
  base: "/app.js-/"
})