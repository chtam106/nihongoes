import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing.ts';

// Locale routing handled entirely by next-intl from the shared `routing` config:
// English (default) at the root, Vietnamese under `/vi` (`localePrefix:
// 'as-needed'`), `/en/*` redirected to `/*`, and returning visitors remembered
// via the `NEXT_LOCALE` cookie + Accept-Language detection.
export default createMiddleware(routing);

export const config = {
  // Skip auth API (rewritten to the flashcard backend), Next internals, and
  // static files. `/auth/*` is not a Next page route.
  matcher: ['/((?!api|auth|_next|_vercel|.*\\..*).*)']
};
