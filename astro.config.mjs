// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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
            label: 'Docker',
            autogenerate: { directory: 'Docker' },
          },
          {
            label: 'Authentication',
            autogenerate: { directory: 'Authentication'}
          },
          {
            label: 'Go Lang',
            autogenerate: { directory: 'Go_Lang' },
          },
          {
            label: 'Web',
            items: [
              //   { label: 'HTML', slug: 'web_dev/html' }, 
                { label: 'JavaScript' ,badge: 'Finished', autogenerate: { directory: 'web/Javascript' } },
                { label: 'CSS' , autogenerate: { directory: 'web/CSS' } },
                { label: 'React' , autogenerate: { directory: 'web/React' } },
                { label: 'React Native' , autogenerate: { directory: 'web/React_Native' } },
                { label: 'Electron_JS' , autogenerate: { directory: 'web/Electron_js' } }
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
			],
		}),
	],
	vite: {
		resolve: {
			alias: {
				'@': '/src'
			}
		}
	}
});
