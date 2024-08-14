import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // to expose to the network
  }
  // resolve: {
  //   alias: {
  //     'react-google-charts': 'react-google-charts',
  //   },
  // },
  // optimizeDeps: {
  //   include: ['react-google-charts'],
  // },
  // build: {
  //   rollupOptions: {
  //     external: ['react-google-charts'],
  //   },
  // },
});
