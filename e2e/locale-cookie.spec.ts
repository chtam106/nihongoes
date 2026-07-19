import { expect, test } from '@playwright/test';

// The locale preference cookie (written client-side by LanguageProvider) lets the
// middleware send a returning visitor to their chosen language on the next visit.
const LOCALE_COOKIE = 'nihongoes-locale';

async function setLocaleCookie(
  context: import('@playwright/test').BrowserContext,
  value: string
) {
  await context.addCookies([
    { name: LOCALE_COOKIE, value, domain: 'localhost', path: '/', sameSite: 'Lax' }
  ]);
}

test.describe('locale preference cookie', () => {
  test('redirects a returning Vietnamese visitor from / to /vi', async ({ page, context }) => {
    await setLocaleCookie(context, 'vi');
    await page.goto('/');

    await expect(page).toHaveURL(/\/vi$/);
  });

  test('preserves the path when redirecting (/kanji -> /vi/kanji)', async ({ page, context }) => {
    await setLocaleCookie(context, 'vi');
    await page.goto('/kanji');

    await expect(page).toHaveURL(/\/vi\/kanji$/);
  });

  test('keeps English at the root without a preference cookie', async ({ page }) => {
    const response = await page.goto('/');

    expect(response!.status()).toBeLessThan(400);
    expect(new URL(page.url()).pathname).toBe('/');
  });

  test('does not redirect when the cookie is English', async ({ page, context }) => {
    await setLocaleCookie(context, 'en');
    await page.goto('/kanji');

    expect(new URL(page.url()).pathname).toBe('/kanji');
  });
});
