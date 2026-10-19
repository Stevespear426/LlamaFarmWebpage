import { defineConfig } from 'astro/config';

// The production domain lives in src/config.ts (SITE.domain), not here, so it stays one value.
// Every URL in the built pages is relative, so dist/ works opened from disk, at a domain root,
// or under a sub-path such as a GitHub Pages project URL. Pages build as root-level .html files
// (index.html, social.html) so one relative prefix serves them all.
export default defineConfig({
  output: 'static',
  build: {
    format: 'file',
    assetsPrefix: '.',
    inlineStylesheets: 'always',
  },
});
