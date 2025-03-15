// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: 'Docs',
      description: 'Documentation for DDA1O1',
      favicon: '/r.png',
      logo:{
          src: './public/r.png',
          alt: 'My Logo', // Add an alt attribute for selecting the logo
      },
      head: [
        {
          tag: 'script',
          attrs: { src: '/disableClick.js' }
        }
      ],
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
              label: 'Computer Architecture',
              autogenerate: { directory: 'Computer_Architecture' },
          },
          {
            label: 'Git & GitHub',
            autogenerate: { directory: 'Git_&_GitHub' },
          },
          {
            label: 'DataBase',
            autogenerate: { directory: 'Database' },
          },
          {
            label: 'AWS',
            autogenerate: { directory: 'AWS' },
          },
          {
            label: 'Web',
            items: [
              //   { label: 'HTML', slug: 'web_dev/html' }, 
                { label: 'JavaScript' ,badge: 'Finished', autogenerate: { directory: 'web/Javascript' } },
                { label: 'CSS' , autogenerate: { directory: 'web/CSS' } },
            ]
          },
          {
              label: 'C++',
              autogenerate: { directory: 'C++' },
          },
          {
              label: 'Python',
              autogenerate: { directory: 'python' }
          },
          {
              label: 'Data Science',
              autogenerate: { directory: 'data_science' }
          },
          {
              label: 'DSA',
              autogenerate: { directory: 'DSA' }
          },
          {
              label: 'Thoughts',
              autogenerate: { directory: 'Thoughts' }
          },
      ],
  }), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  })],

  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  vite: {
    resolve: {
      alias: {
        '@/': '/src/'
      }
    }
  }
});