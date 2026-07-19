import { expect, test, type BrowserContext } from '@playwright/test';

// next-intl's proxy (formerly middleware) remembers a returning visitor's language via the
// `NEXT_LOCALE` cookie and sends them to it on the next visit.
const LOCALE_COOKIE = 'NEXT_LOCALE';

async function setLocaleCookie(context: BrowserContext, value: string) {
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
