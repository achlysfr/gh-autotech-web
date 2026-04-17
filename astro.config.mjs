// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ghautotech.com',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      // Excluir páginas legales que no son landing pages de negocio.
      filter: (page) =>
        !page.includes('/cookies') && !page.includes('/privacidad'),
      serialize(item) {
        const now = new Date();
        if (item.url === 'https://ghautotech.com/') {
          return { ...item, priority: 1.0, changefreq: 'weekly', lastmod: now };
        }
        if (['/servicios/', '/sobre-nosotros/'].some((p) => item.url.endsWith(p))) {
          return { ...item, priority: 0.8, changefreq: 'monthly', lastmod: now };
        }
        if (item.url.includes('/horario-contacto/')) {
          return { ...item, priority: 0.7, changefreq: 'monthly', lastmod: now };
        }
        return { ...item, priority: 0.3, changefreq: 'yearly' };
      },
    }),
  ],
});