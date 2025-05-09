
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    hmr: {
      clientPort: 443,
      host: 'af7fa590-089d-454d-9636-e538d569e907-00-20ggg32wuiy6f.spock.replit.dev'
    }
  }
})
