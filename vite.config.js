import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    outDir: "dist",
    assetsDir: "assets",
  },
  server: {
    headers: {
      "Content-Type": "application/javascript",
    },
  },
});
