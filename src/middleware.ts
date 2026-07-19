import { NextResponse, type NextRequest } from 'next/server';
import { LOCALE_COOKIE } from '@/constants/site';

// Locale routing: English is the default and lives at the root (no prefix),
// Vietnamese lives under `/vi`. The route tree is a single `app/[lang]/**`, so
// this middleware maps the clean public URLs onto the internal `[lang]` segment:
//   /kanji        -> render app/[lang=en]/kanji   (URL stays /kanji)
//   /vi/kanji     -> app/[lang=vi]/kanji          (unchanged)
//   /en/kanji     -> redirect to /kanji           (avoid duplicate URLs)
// It also remembers a returning visitor's chosen language: if the locale cookie
// is `vi`, an English-served request is redirected to the `/vi` equivalent.
// Kept dependency-free (only a string constant is imported) so the Edge bundle
// stays tiny.
const DEFAULT_LANG = 'en';
const PREFIXED_LANG = 'vi';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Vietnamese already carries its prefix; render as-is.
  if (pathname === `/${PREFIXED_LANG}` || pathname.startsWith(`/${PREFIXED_LANG}/`)) {
    return NextResponse.next();
  }

  // Redirect any explicit English prefix back to the clean root URL.
  if (pathname === `/${DEFAULT_LANG}` || pathname.startsWith(`/${DEFAULT_LANG}/`)) {
    const stripped = pathname.slice(`/${DEFAULT_LANG}`.length) || '/';
    const url = request.nextUrl.clone();
    url.pathname = stripped;

    return NextResponse.redirect(url);
  }

  // English at the root - but honor a returning visitor who chose Vietnamese
  // (cookie set client-side). Bots have no cookie, so they still get the English
  // canonical. A temporary (307) redirect keeps the preference changeable.
  if (request.cookies.get(LOCALE_COOKIE)?.value === PREFIXED_LANG) {
    const url = request.nextUrl.clone();
    url.pathname = `/${PREFIXED_LANG}${pathname === '/' ? '' : pathname}`;

    return NextResponse.redirect(url);
  }

  // Otherwise serve English at the root: rewrite onto the [lang=en] tree.
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LANG}${pathname === '/' ? '' : pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals and any file with an extension (assets, sitemap.xml,
  // robots.txt, etc.); run on all page routes.
  matcher: ['/((?!_next/|.*\\..*).*)']
};
