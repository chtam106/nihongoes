export const SITE_NAME = 'Nihongoes';
export const SITE_TAGLINE = 'Learn Japanese with CHT';
export const SITE_URL = 'https://nihongoes.com';

/**
 * Prefix for all localStorage keys. Kept as its own constant (not derived from
 * SITE_NAME) so renaming the display brand never silently wipes saved data.
 */
export const STORAGE_PREFIX = 'nihongoes';

/**
 * Cookie that remembers the visitor's chosen locale so the SERVER (proxy)
 * can honor it on the next visit (localStorage is client-only, unreachable in
 * the proxy). Same name as the localStorage key. Refreshed on every visit, so
 * its 1-year lifetime is a rolling window (only lost after a full year away).
 */
export const LOCALE_COOKIE = `${STORAGE_PREFIX}-locale`;
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year (in seconds)
