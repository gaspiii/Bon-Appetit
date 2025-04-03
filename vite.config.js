import { defineConfig } from 'vite';

export default defineConfig({
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
