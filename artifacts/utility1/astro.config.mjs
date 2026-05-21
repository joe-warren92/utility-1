import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const port = parseInt(process.env.PORT || '4321');

export default defineConfig({
  output: 'static',
  server: {
    port,
    host: '0.0.0.0',
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: 'all',
    },
  },
  build: {
    assets: '_astro',
  },
});
