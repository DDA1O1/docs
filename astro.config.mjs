// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: 'Docs',
      logo:{
          src: './src/assets/fg.svg',
          alt: 'My Logo',  // Add an alt attribute for selecting the logo
      },
      customCss:[
          // Path to your Tailwind base styles:
        './src/tailwind.css',
        ],
      social: {
          github: 'https://github.com/DDA1O1',
          twitter: 'https://twitter.com/DDA1O1',
      },
      editLink: {
          baseUrl: 'https://github.com/DDA1O1/docs/tree/main',
      },
      sidebar: [
          {
              label: 'Guides',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: 'overview', slug: 'guides/overview' },
              ],
          },
          {
              label: 'Reference',
              autogenerate: { directory: 'reference' },
          },
      ],
  }), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  })],

  output: 'server',
  adapter: vercel(),
});