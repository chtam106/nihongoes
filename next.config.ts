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
  },
  // When Vercel sets AUTH_BACKEND_INTERNAL_URL at build time, enable same-origin
  // auth in the client bundle without a separate NEXT_PUBLIC_AUTH_SAME_ORIGIN.
  env: {
    NEXT_PUBLIC_AUTH_SAME_ORIGIN:
      process.env.NEXT_PUBLIC_AUTH_SAME_ORIGIN === '1' ||
      Boolean(process.env.AUTH_BACKEND_INTERNAL_URL?.trim())
        ? '1'
        : ''
  },
  async rewrites() {
    const backend = process.env.AUTH_BACKEND_INTERNAL_URL?.replace(/\/$/, '');

    if (!backend) {
      return [];
    }

    return [
      { source: '/auth/:path*', destination: `${backend}/auth/:path*` },
      { source: '/api/me', destination: `${backend}/api/me` },
      { source: '/api/collections', destination: `${backend}/api/collections` }
    ];
  },
  async redirects() {
    return [
      {
        source: '/:level(n5|n4)/vocabulary',
        destination: '/vocabulary',
        permanent: true
      },
      {
        source: '/vi/:level(n5|n4)/vocabulary',
        destination: '/vi/vocabulary',
        permanent: true
      },
      {
        source: '/:level(n5|n4)/sentences',
        destination: '/sentences',
        permanent: true
      },
      {
        source: '/vi/:level(n5|n4)/sentences',
        destination: '/vi/sentences',
        permanent: true
      }
    ];
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
