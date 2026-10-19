// Loads the built page at the acceptance widths, fails on horizontal page scroll, runs axe,
// and saves full-page screenshots to .lighthouse/screens/ for a visual check.
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { serveDist } from './serve.mjs';

const widths = [320, 360, 768, 1024, 1440];
const server = await serveDist();
const browser = await chromium.launch();
let failed = false;
await mkdir('.lighthouse/screens', { recursive: true });

try {
  for (const width of widths) {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await context.newPage();
    await page.goto(`${server.url}/`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      const wide = [...document.querySelectorAll('body *')]
        .filter((el) => el.getBoundingClientRect().right > doc.clientWidth + 1)
        .filter((el) => !el.closest('.table-scroll, pre, .terminal .body'))
        .slice(0, 5)
        .map((el) => `${el.tagName.toLowerCase()}.${[...el.classList].join('.')} → ${Math.round(el.getBoundingClientRect().right)}px`);
      return { scroll: doc.scrollWidth - doc.clientWidth, wide };
    });
    const status = overflow.scroll > 0 ? 'FAIL' : 'ok';
    if (overflow.scroll > 0) failed = true;
    console.log(`${width}px: horizontal overflow ${overflow.scroll}px ${status}`);
    if (overflow.wide.length) console.log('  wider than viewport:', overflow.wide.join('; '));
    await page.screenshot({ path: `.lighthouse/screens/${width}.png`, fullPage: true });

    if (width === 360 || width === 1440) {
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']).analyze();
      for (const v of results.violations) {
        failed = true;
        console.log(`  axe ${v.impact} ${v.id}: ${v.help} (${v.nodes.length})`);
        v.nodes.slice(0, 3).forEach((n) => console.log(`    ${n.target.join(' ')}`));
      }
      if (!results.violations.length) console.log(`  axe: no violations at ${width}px`);
    }
    await context.close();
  }
} finally {
  await browser.close();
  server.close();
}
process.exit(failed ? 1 : 0);
