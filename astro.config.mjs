import { defineConfig } from 'astro/config';
import { ContentfulContentSource } from '@stackbit/cms-contentful';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

export default defineConfig({
  integrations: [tailwind(), compress()],
  experimental: {
    viewTransitions: true
  },
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
  ]
});
