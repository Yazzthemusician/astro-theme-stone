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
      spaceId: process.env.SANITY_PROJECT_ID, // Aquí irá el Project ID de Sanity
      accessToken: process.env.SANITY_API_TOKEN // Aquí el token API de Sanity
    }
  ]
});
