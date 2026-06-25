import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' makes the built asset paths relative, so the site works
// whether it's hosted at a root domain (Netlify) or a sub-path (GitHub Pages).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
