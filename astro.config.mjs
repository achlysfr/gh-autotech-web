// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dominio base para canonical, OG urls y sitemap
  site: 'https://ghautotech.com',
  vite: {
    plugins: [tailwindcss()]
  }
});