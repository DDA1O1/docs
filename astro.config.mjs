// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: 'My Docs',
      logo:{
          src: './public/favicon.svg',
          alt: 'My Logo',  // Add an alt attribute for selecting the logo
      },
      customCss:[
          // Path to your Tailwind base styles:
        './src/tailwind.css',
        ],
      social: {
          github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
          {
              label: 'Guides',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: 'Example Guide', slug: 'guides/example' },
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