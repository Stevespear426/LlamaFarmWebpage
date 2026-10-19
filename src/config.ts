// Every URL and launch value the page links to lives here. Values in [BRACKETS] are
// placeholders kept verbatim until launch; the README lists each one.

export const SITE = {
  // Production origin, no trailing slash. Used for the canonical URL, Open Graph, the sitemap and the social card.
  domain: 'https://[YOUR DOMAIN]',
  name: 'Llama Farm',
  title: 'Llama Farm — extra compute for your AI coding agents',
  description:
    'Turn the Macs, PCs and phones you already own into a local cluster that does the cheap work for Claude Code, Codex and Gemini CLI.',
};

export const RELEASE = {
  version: COMING_SOON, // [VERSION]
  minMacos: COMING_SOON, // [MIN MACOS]
  minWindows: COMING_SOON, // [MIN WINDOWS]
};

export const PRICING = {
  teamPrice: COMING_SOON, // [YOUR PRICE]
  securityFeatures: COMING_SOON, // [YOUR SECURITY FEATURES]
  sla: COMING_SOON, // [YOUR SLA]
};

// Links whose destination doesn't exist yet point here. The placeholder each one replaces is noted beside it.
const COMING_SOON = 'coming-soon.html';

export const URLS = {
  docs: COMING_SOON, // [DOCS URL]
  changelog: COMING_SOON, // [CHANGELOG URL]
  demo: COMING_SOON, // [DEMO URL]
  methodology: COMING_SOON, // [METHODOLOGY URL]
  sales: COMING_SOON, // [SALES URL]
  adminGuide: COMING_SOON, // [ADMIN GUIDE URL]
  trial: COMING_SOON, // [TRIAL URL]
  requirements: COMING_SOON, // [REQUIREMENTS URL]
  mcpTools: COMING_SOON, // [MCP TOOLS URL]
  status: COMING_SOON, // [STATUS URL]
  about: COMING_SOON, // [ABOUT URL]
  privacy: COMING_SOON, // [PRIVACY URL]
  contact: COMING_SOON, // [CONTACT URL]
  macDmg: COMING_SOON, // [MAC DMG URL]
  windowsMsi: COMING_SOON, // [WINDOWS MSI URL]
  linuxDeb: COMING_SOON, // [LINUX DEB URL]
  appStore: COMING_SOON, // https://apps.apple.com/app/id[APP-STORE-ID]
  // The Play listing for com.stingers.llama isn't live yet; swap in googlePlayLive when it is.
  googlePlay: COMING_SOON, // [GOOGLE PLAY URL]
  googlePlayLive: 'https://play.google.com/store/apps/details?id=com.stingers.llama',
};
