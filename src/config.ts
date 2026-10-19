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
  version: '[VERSION]',
  minMacos: '[MIN MACOS]',
  minWindows: '[MIN WINDOWS]',
};

export const PRICING = {
  teamPrice: '[YOUR PRICE]',
  securityFeatures: '[YOUR SECURITY FEATURES]',
  sla: '[YOUR SLA]',
};

export const URLS = {
  docs: '[DOCS URL]',
  changelog: '[CHANGELOG URL]',
  demo: '[DEMO URL]',
  methodology: '[METHODOLOGY URL]',
  sales: '[SALES URL]',
  adminGuide: '[ADMIN GUIDE URL]',
  trial: '[TRIAL URL]',
  requirements: '[REQUIREMENTS URL]',
  mcpTools: '[MCP TOOLS URL]',
  status: '[STATUS URL]',
  about: '[ABOUT URL]',
  privacy: '[PRIVACY URL]',
  contact: '[CONTACT URL]',
  macDmg: '[MAC DMG URL]',
  windowsMsi: '[WINDOWS MSI URL]',
  linuxDeb: '[LINUX DEB URL]',
  appStore: 'https://apps.apple.com/app/id[APP-STORE-ID]',
  // The Play listing for com.stingers.llama isn't live yet; swap in the real URL below when it is.
  googlePlay: '[GOOGLE PLAY URL]',
  googlePlayLive: 'https://play.google.com/store/apps/details?id=com.stingers.llama',
};
