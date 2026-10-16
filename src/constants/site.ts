export const SITE_NAME = 'Nihongoes';
export const SITE_TAGLINE = 'Learn Japanese with CHT';

/**
 * Canonical origin for absolute URLs (canonical tags, hreflang, OpenGraph,
 * sitemap). A local Lighthouse audit build (`LIGHTHOUSE_SAMPLE=1`, set by
 * `scripts/lighthouse.mjs`) points it at the local server origin instead, so
 * the canonical matches the audited URL - otherwise it would reference
 * production while the audit runs on localhost, which Lighthouse flags and
 * drops the SEO score. Normal builds use the production origin.
 */
export const SITE_URL =
  process.env.LIGHTHOUSE_SAMPLE === '1'
    ? `http://localhost:${process.env.LIGHTHOUSE_PORT ?? '3210'}`
    : 'https://nihongoes.com';

/**
 * Brand token for persisted names. Kept as its own constant (not derived from
 * SITE_NAME) so renaming the display brand never silently wipes saved data.
 * localStorage keys go through `storageKey` (UPPER_SNAKE_CASE). This value
 * stays lowercase so the locale cookie name does not change.
 */
export const STORAGE_PREFIX = 'nihongoes';

/** localStorage key: `NIHONGOES_` plus an UPPER_SNAKE_CASE name. */
export function storageKey(name: string): string {
  return `${STORAGE_PREFIX.toUpperCase()}_${name}`;
}

/**
 * Cookie that remembers the visitor's chosen locale so the SERVER (proxy)
 * can honor it on the next visit (localStorage is client-only, unreachable in
 * the proxy). Same name as the localStorage key. Refreshed on every visit, so
 * its 1-year lifetime is a rolling window (only lost after a full year away).
 */
export const LOCALE_COOKIE = `${STORAGE_PREFIX}-locale`;
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year (in seconds)
