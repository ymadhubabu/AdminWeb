import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // Change output directory
    minify: 'esbuild',  // Use esbuild for minification
    sourcemap: false,  // Disable sourcemaps in production
  },
});
