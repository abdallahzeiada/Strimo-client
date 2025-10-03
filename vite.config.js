import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access from any device on the network
    port: 5173, // Default Vite port
  },
  build: {
    // Reduce chunk size for better loading
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      // Ensure proper handling of external dependencies
      external: [],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router'],
          stream: ['stream-chat', 'stream-chat-react', '@stream-io/video-react-sdk']
        }
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router', 'stream-chat', 'stream-chat-react']
  }
})
