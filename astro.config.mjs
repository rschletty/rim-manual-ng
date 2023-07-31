import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  +  site: 'https://pneumasolutions.github.io',
  +  base: '/rim-manual-ng',
      
  
  integrations: [mdx()]
});