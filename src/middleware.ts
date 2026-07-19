import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing.ts';

// Locale routing handled entirely by next-intl from the shared `routing` config:
// English (default) at the root, Vietnamese under `/vi` (`localePrefix:
// 'as-needed'`), `/en/*` redirected to `/*`, and returning visitors remembered
// via the `NEXT_LOCALE` cookie + Accept-Language detection.
export default createMiddleware(routing);

export const config = {
  // Skip Next internals and any file with an extension (assets, sitemap.xml,
  // robots.txt, etc.); run on all page routes.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
