import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),     svgr({
      svgrOptions: {
        icon: true, // Opcional: para usar el SVG como ícono (tamaño relativo al font-size)
      },
    }),],
})
