# Llama Farm website

The single-page marketing site for Llama Farm. It's static [Astro](https://astro.build) output with no client framework. The only script is an optional ~300-byte inline snippet that highlights the visitor's own platform in Downloads. The product shots are HTML/CSS/SVG rebuilds of the app's Compose screens from the Llama repo, never screenshots.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies (then `npx playwright install chromium` once for the scripts below) |
| `npm run dev` | Local dev server |
| `npm run build` | Build the site into `dist/` |
| `npm run images` | Render `public/og.png` from `social.html`, plus `favicon-32.png` and `apple-touch-icon.png`. Run it after a build, then build again. |
| `npm run check:layout` | Load `dist/` at 320, 360, 768, 1024 and 1440px. Fails on horizontal page scroll or any axe violation, and saves screenshots to `.lighthouse/screens/`. |

Re-run `npm run images` whenever the social card, its numbers or Lloyd change.

## Where things live

| Path | Contents |
| --- | --- |
| `src/config.ts` | The domain and every outbound URL, price and release value. Placeholders live here. |
| `src/data/sample.json` | Every number in the product shots and on the social card (the best-case sample day) |
| `src/styles/tokens.css` | Site palette (dark page) and app palette (`LightFarmColors`, shots only) |
| `src/components/shots/` | `ConsoleShot`, `NodeStatusShot`, `TerminalShot`, `ToolValueShot` |
| `src/components/sections/` | The twelve page parts, in page order in `src/pages/index.astro` |
| `src/pages/social.astro` | The 1200×630 share card (noindex, not in the sitemap) |
| `public/lloyd/` | Lloyd's three sprites, generated from `GuideSprites.kt` in the Llama repo. Don't redraw them by hand. |
| `public/badges/` | Official App Store (SVG) and Google Play (PNG) badge artwork |

The Console shot follows the app's own width breakpoints as container queries, so it reflows the way the app does: the header drops the farm tag below 900px, the MCP label below 720px and the product name below 560px. The title row and chart row stack below 900px of content. On phones the console is cropped so it bleeds into the next section.

## Placeholders

Each one is kept verbatim in brackets. Search the repo for `[` to find them. All except `[APP-STORE-ID]` are set in `src/config.ts`.

| Placeholder | Where it shows | Fill with |
| --- | --- | --- |
| `[YOUR DOMAIN]` | Canonical URL, Open Graph and Twitter tags, robots.txt, sitemap, social card (hidden there until filled; rerun `npm run images`) | Production domain (keep the `https://`) |
| `[APP-STORE-ID]` | App Store badge link | Numeric App Store ID |
| `[GOOGLE PLAY URL]` | Google Play badge link | `URLS.googlePlayLive` once the Play listing for `com.stingers.llama` is live |
| `[MAC DMG URL]`, `[WINDOWS MSI URL]`, `[LINUX DEB URL]` | Downloads | Release asset URLs |
| `[VERSION]` | Downloads meta lines | Current desktop release |
| `[MIN MACOS]`, `[MIN WINDOWS]` | Downloads meta lines | Minimum OS versions |
| `[YOUR PRICE]` | Pricing, Team card | Team plan price |
| `[YOUR SECURITY FEATURES]`, `[YOUR SLA]` | Pricing, Enterprise card | Enterprise copy |
| `[DOCS URL]` | Nav, footer | Docs site |
| `[CHANGELOG URL]` | Hero "NEW" pill, Downloads "Release notes", footer | Changelog |
| `[DEMO URL]` | Hero "Watch the 2-minute demo" | Demo video |
| `[METHODOLOGY URL]` | Savings "How we measure" | Methodology page |
| `[SALES URL]` | Teams "Talk to us", Pricing "Contact sales" | Sales contact |
| `[ADMIN GUIDE URL]` | Teams "Read the admin guide" | Central Fleet admin guide |
| `[TRIAL URL]` | Pricing "Start a trial" | Team trial sign-up |
| `[REQUIREMENTS URL]` | Downloads "System requirements" | Requirements page |
| `[MCP TOOLS URL]`, `[STATUS URL]` | Footer, Developers column | MCP tools reference, status page |
| `[ABOUT URL]`, `[PRIVACY URL]`, `[CONTACT URL]` | Footer, Company column | Company pages |

Until `[YOUR DOMAIN]` is filled, Lighthouse SEO scores 85, because the canonical URL and the robots.txt sitemap line aren't valid URLs yet. With a real domain it scores 100.

## Where this differs from the spec

These changes to the build spec were agreed before the build:

- **Terminal markers** use `Hooks.kt`'s exact wording ("The full output, stdout and stderr, is saved at…"), shortened only with `…`.
- **Code lookup line** in the terminal reads `fun <T> retry(…)`, which is valid Kotlin.
- **Terminal caption** says Claude read 3 of the 8,079 lines, which is what the transcript shows.
- **Tool value** has a Gemini CLI card (4 sessions, net 438K), so it matches the console's "3 agents".
- **Net column green** is `#1A865B` instead of the app's `#1F9D6B`. The app's green is 3.45:1 on white, which fails WCAG AA for 13px text. The app itself has the same contrast problem.
- **Raster images:** the favicon PNG fallbacks and the Google Play badge are allowed alongside `og.png`.
- **"Stays on your network"** copy now says Central Fleet overflow happens only when the team turns it on.
- **Minimum width** is 320px throughout.

## Checks

These results are from the last run, using a stand-in domain for the Lighthouse SEO score:

- **Horizontal page scroll:** none at 320, 360, 768, 1024 or 1440px.
- **axe** (WCAG 2.2 AA plus best practice): no violations at 360 or 1440px.
- **Lighthouse mobile:** Performance 99, Accessibility 100, Best Practices 100, SEO 100.
- **Core Web Vitals:** LCP 2.0s and CLS 0, under Lighthouse's simulated slow 4G.
