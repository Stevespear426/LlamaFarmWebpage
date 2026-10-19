// Renders public/og.png from the /social card and the favicon PNG fallbacks from Lloyd's hello sprite.
// Run after `npm run build`, then build again so dist/ picks the images up.
import { chromium } from 'playwright';
import { serveDist } from './serve.mjs';

const server = await serveDist();
const browser = await chromium.launch();

try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto(`${server.url}/social.html`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: 'public/og.png', clip: { x: 0, y: 0, width: 1200, height: 630 } });

  // Whole multiples of 32 keep the sprite's pixels crisp; 180 isn't one, so it sits on 160 with a margin.
  for (const [file, size, sprite, bg] of [
    ['public/favicon-32.png', 32, 32, 'transparent'],
    ['public/apple-touch-icon.png', 180, 160, '#0B1D19'],
  ]) {
    const icon = await browser.newPage({ viewport: { width: size, height: size } });
    await icon.setContent(
      `<body style="margin:0;display:grid;place-items:center;width:${size}px;height:${size}px;background:${bg}">` +
        `<img src="${server.url}/lloyd/lloyd-hello.svg" width="${sprite}" height="${sprite}" style="image-rendering:pixelated"></body>`,
    );
    await icon.waitForLoadState('networkidle');
    await icon.screenshot({ path: file, omitBackground: bg === 'transparent' });
  }
  console.log('Wrote public/og.png, public/favicon-32.png, public/apple-touch-icon.png');
} finally {
  await browser.close();
  server.close();
}
