import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

export default defineConfig({
  integrations: [tailwind(), compress()],
  experimental: {
    viewTransitions: true
  },
  contentSources: [
    {
      // Configuración de Sanity
      spaceId: process.env.SANITY_PROJECT_ID,
      accessToken: process.env.SANITY_API_TOKEN
    }
  ]
});
