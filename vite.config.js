import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/",  // Ensures the site works on GitHub Pages
  plugins: [react()],
});
