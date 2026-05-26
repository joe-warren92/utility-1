import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://utility1.co.uk',
  output: 'static',
  build: {
    assets: '_astro',
  },
});
