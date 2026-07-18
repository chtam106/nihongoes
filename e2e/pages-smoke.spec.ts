import { expect, test, type APIRequestContext, type Page } from '@playwright/test';

// Smoke test for every page TYPE in the app. For each type it opens ONE rich
// live example (in both locales) and asserts the page rendered healthily - NOT
// the app's error boundary, and with no runtime/server errors. This catches the
// "a code change makes a page throw on load, so the fallback (or a blank page)
// shows instead of content" class of regressions.
//
// Why one example per type: pages of the same type share one component (only the
// data differs), and `next build` already prerenders EVERY page - so this only
// needs a representative per type to catch client hydration/runtime errors, which
// a build cannot see. Locale IS a real render dimension (the rewrite puts English
// under an internal /en path), so every type runs in both en and vi.
//
// Health is checked with several complementary signals (see expectPageHealthy):
//   1. HTTP status < 400          - the document itself loaded
//   2. no uncaught page errors    - hydration/runtime errors (even if recovered)
//   3. no same-origin 5xx         - a failed JS chunk / API / RSC request
//   4. a real page heading shows  - positive proof content rendered (not blank)
//   5. no error boundary          - the fallback (detected by a stable testid)

type Locale = 'en' | 'vi';

function localeUrl(logicalPath: string, locale: Locale): string {
  if (locale === 'en') {
    return logicalPath;
  }

  return logicalPath === '/' ? '/vi' : `/vi${logicalPath}`;
}

/** Navigate to a page and assert it rendered healthily (see signals above). */
async function expectPageHealthy(page: Page, logicalPath: string, locale: Locale) {
  const url = localeUrl(logicalPath, locale);

  // Attach listeners BEFORE navigating so nothing is missed.
  const pageErrors: string[] = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  const serverErrors: string[] = [];
  page.on('response', (response) => {
    if (response.status() >= 500) {
      serverErrors.push(response.url());
    }
  });

  // 1. The document must load without a server/client failure.
  const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
  expect(response, `no response for ${url}`).not.toBeNull();
  expect(response!.status(), `bad status for ${url}`).toBeLessThan(400);

  // Let hydration and lazy chunks settle so late errors/requests are captured.
  await page.waitForLoadState('networkidle').catch(() => undefined);

  // 5. The error boundary fallback must NOT be showing (stable testid, not text).
  await expect(page.getByTestId('error-boundary'), `error boundary on ${url}`).toHaveCount(0);

  // 4. Positive proof: a real, non-empty page heading is visible in <main>.
  const heading = page.locator('main h1').first();
  await expect(heading, `no visible heading on ${url}`).toBeVisible();
  await expect(heading, `empty heading on ${url}`).toHaveText(/\S/);

  // 2. No uncaught runtime errors (this alone catches hydration mismatches).
  expect(pageErrors, `runtime errors on ${url}`).toEqual([]);

  // 3. No same-origin resource failed with a 5xx (e.g. a broken JS chunk).
  const host = new URL(page.url()).host;
  const sameOriginServerErrors = serverErrors.filter((entry) => new URL(entry).host === host);
  expect(sameOriginServerErrors, `5xx resources on ${url}`).toEqual([]);
}

// One rich live example of every page type. `n5/lesson-1` has all of
// vocabulary/grammar/listening/reading/writing, and grade-1/lesson-1 covers the
// kanji lesson/quiz/writing pages. The "covers every sitemap type" test below
// fails if a new route type appears without an example here.
const REPRESENTATIVE_PAGES: { name: string; path: string }[] = [
  { name: 'home', path: '/' },
  // Course (N5)
  { name: 'course overview', path: '/n5' },
  { name: 'lesson detail', path: '/n5/lesson-1' },
  { name: 'lesson vocabulary', path: '/n5/lesson-1/vocabulary' },
  { name: 'lesson grammar', path: '/n5/lesson-1/grammar' },
  { name: 'lesson listening', path: '/n5/lesson-1/listening' },
  { name: 'lesson reading', path: '/n5/lesson-1/reading' },
  { name: 'lesson writing', path: '/n5/lesson-1/writing' },
  // Alphabet
  { name: 'alphabet hub', path: '/alphabet' },
  { name: 'hiragana chart', path: '/alphabet/hiragana' },
  { name: 'katakana chart', path: '/alphabet/katakana' },
  { name: 'combined chart', path: '/alphabet/combined' },
  { name: 'alphabet exercise hub', path: '/alphabet/exercise' },
  { name: 'romaji exercise', path: '/alphabet/exercise/romaji' },
  { name: 'character exercise', path: '/alphabet/exercise/character' },
  { name: 'listen exercise', path: '/alphabet/exercise/listen' },
  { name: 'script-pair exercise', path: '/alphabet/exercise/script-pair' },
  { name: 'writing exercise', path: '/alphabet/exercise/writing' },
  { name: 'sentence exercise', path: '/alphabet/exercise/sentence' },
  // Kanji
  { name: 'kanji hub', path: '/kanji' },
  { name: 'kanji radicals', path: '/kanji/radicals' },
  { name: 'kanji track overview', path: '/kanji/grade-1' },
  { name: 'kanji lesson detail', path: '/kanji/grade-1/lesson-1' },
  { name: 'kanji quiz', path: '/kanji/grade-1/lesson-1/quiz' },
  { name: 'kanji writing', path: '/kanji/grade-1/lesson-1/writing' }
];

/** Collapse a logical path to its route "type" (dynamic segments genericized). */
function routeType(logicalPath: string): string {
  const segments = logicalPath.split('/').filter(Boolean);
  const generic = segments.map((segment) => {
    if (/^lesson-\d+$/.test(segment)) {
      return ':lesson';
    }

    if (/^(n[1-5]|frontend)$/.test(segment)) {
      return ':level';
    }

    if (/^(grade-\d+|kanken-[\w-]+)$/.test(segment)) {
      return ':track';
    }

    return segment;
  });

  return `/${generic.join('/')}`;
}

/** Read every logical path the app advertises from its own sitemap. */
async function sitemapLogicalPaths(request: APIRequestContext): Promise<string[]> {
  const response = await request.get('/sitemap.xml');
  expect(response.ok(), 'sitemap.xml must be served').toBe(true);

  const xml = await response.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]!);
  const logical = locs.map((loc) => {
    const { pathname } = new URL(loc);

    return pathname === '/vi' ? '/' : pathname.replace(/^\/vi(?=\/)/, '');
  });

  return [...new Set(logical)];
}

for (const locale of ['en', 'vi'] as const) {
  test.describe(`pages render content, not the error boundary (${locale})`, () => {
    for (const sample of REPRESENTATIVE_PAGES) {
      test(sample.name, async ({ page }) => {
        await expectPageHealthy(page, sample.path, locale);
      });
    }
  });
}

test.describe('coverage & fallbacks', () => {
  test('every page type in the sitemap has a representative smoke test', async ({ request }) => {
    const covered = new Set(REPRESENTATIVE_PAGES.map((sample) => routeType(sample.path)));
    const advertised = await sitemapLogicalPaths(request);
    const uncovered = [...new Set(advertised.map(routeType))].filter((type) => !covered.has(type));

    expect(uncovered, `sitemap page types with no smoke test: ${uncovered.join(', ')}`).toEqual([]);
  });

  test('unknown routes render the 404 page, not the error boundary', async ({ page }) => {
    const response = await page.goto('/this-route-does-not-exist', {
      waitUntil: 'domcontentloaded'
    });

    expect(response!.status()).toBe(404);
    await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
    await expect(page.getByTestId('error-boundary')).toHaveCount(0);
  });
});
