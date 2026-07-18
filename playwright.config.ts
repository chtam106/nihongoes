import { defineConfig, devices } from '@playwright/test';

// Defaults to 5173, but can be pointed at an already-running server (e.g.
// `E2E_PORT=3000 pnpm test:e2e` reuses a local `next dev`).
const PORT = Number(process.env.E2E_PORT) || 5173;
const BASE_URL = `http://localhost:${PORT}`;

// In CI (and when E2E_PROD=1) run against a real production build + server. This
// mirrors prod, catches build/prerender errors, and avoids dev's on-demand
// compile flakiness. Locally it defaults to the fast dev server.
const USE_PROD_SERVER = process.env.E2E_PROD === '1' || Boolean(process.env.CI);
const SERVER_COMMAND = USE_PROD_SERVER
  ? `pnpm build && pnpm start --port ${PORT}`
  : `pnpm dev --port ${PORT}`;

// Browser (end-to-end) tests. Run with `pnpm test:e2e` (see docs/TESTING.md).
// The unit/component tests use Vitest and live next to the source as *.test.ts(x).
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'coverage/e2e' }]],
  // Per-test artifacts (traces, screenshots) live under the e2e folder too.
  outputDir: 'coverage/e2e/test-results',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],
  webServer: {
    command: SERVER_COMMAND,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    // A production build can take a couple of minutes; give it room in CI.
    timeout: USE_PROD_SERVER ? 300_000 : 120_000
  }
});
