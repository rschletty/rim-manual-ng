import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://pneumasolutions.github.io',
  base: '/rim-manual-ng',
  integrations: [mdx()]

})