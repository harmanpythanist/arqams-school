import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Ignore editor/IDE metadata folders (e.g. Visual Studio's .vs folder)
      // that can lock files and crash Vite's file watcher on Windows.
      ignored: ['**/.vs/**', '**/.git/**', '**/node_modules/**'],
    },
  },
})
