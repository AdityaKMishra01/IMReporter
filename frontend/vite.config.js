// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Accept connections from local network
    port: 5173,       // Optional: you can change it if port is busy
  },
});
