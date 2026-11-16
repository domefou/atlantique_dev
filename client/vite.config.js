import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://atlantiquedev.fr',
      dynamicRoutes: [
        '/contact',
        '/estimation',
        '/mentions-legales',
        '/politique-confidentialite'
      ]
    })
  ]
})