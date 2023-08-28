import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Isorna.dev | Blog',
    description: 'My life in brackets',
    site: 'https://isorna.dev',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-es</language>`,
  });
}