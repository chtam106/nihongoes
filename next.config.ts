import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  // Allow a separate build output dir (e.g. `NEXT_DIST_DIR=.next-prod`) so a
  // production build can run alongside a `next dev` server without both fighting
  // over the same `.next` folder. Defaults to `.next`.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  // A stray lockfile in the home directory confuses Next's workspace-root
  // inference; pin the root to this project so `app/` resolves correctly.
  turbopack: {
    root: import.meta.dirname
  }
  // Runs on a server (Vercel): routes are still statically pre-rendered
  // (`generateStaticParams`), and `proxy.ts` keeps English at the root while
  // Vietnamese lives under `/vi` - so there is no `output: 'export'`.
};

export default withSentryConfig(withNextIntl(nextConfig), {
  org: 'cht-n3',
  project: 'nihongoes',
  // Auth token read from the SENTRY_AUTH_TOKEN env var (set in CI). Without it,
  // source map upload is skipped and the build still succeeds.
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  // Upload source maps for readable stack traces, then delete them so they are
  // never published to the static host.
  sourcemaps: {
    deleteSourcemapsAfterUpload: true
  },
  // No telemetry sent to Sentry about the build itself.
  telemetry: false
});
