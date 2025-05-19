import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import { imageService } from '@unpic/astro/service'

export default defineConfig({
	site: 'https://coral.vercel.app',
	integrations: [mdx(), sitemap()],
	output: 'server',
	adapter: vercel(),
	image: {
		service: imageService({
			placeholder: 'blurhash'
		})
	}
})
