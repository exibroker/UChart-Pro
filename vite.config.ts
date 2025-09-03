/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    cssTarget: 'chrome61',
    sourcemap: true,
    rollupOptions: {
      external: ['ucharts'],
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') {
            return 'charts.css'
          }
        },
        globals: {
          ucharts: 'ucharts'
        },
      },
    },
    lib: {
      entry: './src/index.ts',
      name: 'chartspro',
      fileName: (format) => {
        if (format === 'es') {
          return 'charts-pro.js'
        }
        if (format === 'umd') {
          return 'charts-pro.umd.js'
        }
      }
    }
  }
})
