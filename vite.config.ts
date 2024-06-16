import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Server Config Docs: https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
