import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? './' : '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // Keep GitHub uploads tiny: load React from a CDN at runtime.
      external: [
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'react-router',
        'react-router/dom',
        'react-router-dom',
      ],
    },
  },
  server: {
    host: '0.0.0.0',
    port: 43173,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 43173,
    strictPort: true,
  },
})
