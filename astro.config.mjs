// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://ehj10.github.io',
	base: '/valley-of-ed',
	integrations: [mdx(), sitemap()],
});