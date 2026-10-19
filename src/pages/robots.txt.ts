import { SITE } from '../config';

export function GET() {
  return new Response(`User-agent: *\nAllow: /\nDisallow: /social.html\n\nSitemap: ${SITE.domain}/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
