import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit"; // https://docs.astro.build/en/guides/integrations-guide/lit/
import vue from "@astrojs/vue"; // https://docs.astro.build/en/guides/integrations-guide/vue/
import markdoc from "@astrojs/markdoc"; // https://docs.astro.build/en/guides/integrations-guide/markdoc/
import mdx from "@astrojs/mdx"; // https://docs.astro.build/en/guides/integrations-guide/mdx/
import partytown from "@astrojs/partytown"; // https://docs.astro.build/en/guides/integrations-guide/partytown/
import sitemap from "@astrojs/sitemap"; // https://docs.astro.build/en/guides/integrations-guide/sitemap/

// https://astro.build/config
export default defineConfig({
  site: 'https://isorna.dev',
  integrations: [lit(), vue(), markdoc(), mdx(), partytown(), sitemap()]
});