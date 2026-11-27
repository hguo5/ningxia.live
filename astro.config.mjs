import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH are set by the deploy workflow. Until the ningxia.live domain is
// connected, the site is served from https://hguo5.github.io/ningxia.live/.
export default defineConfig({
  site: process.env.SITE_URL || 'https://ningxia.live',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
