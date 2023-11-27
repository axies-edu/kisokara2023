import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
  outDir: './static',
  server: {
    port: 3000,
  },
  site: 'https://copyright-edu.axies.jp/',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    relativeLinks(),
    react(),
  ],
});
