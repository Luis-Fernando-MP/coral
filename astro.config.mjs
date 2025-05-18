// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { imageService } from '@unpic/astro/service'

// https://astro.build/config
export default defineConfig({
	site: 'https://coral.vercel.app',
	integrations: [mdx(), sitemap()],
	output: 'server',
	image: {
		service: imageService({
			placeholder: 'blurhash'
		})
	}
})
