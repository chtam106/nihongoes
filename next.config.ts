import type { NextConfig } from 'next';
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

export default withNextIntl(nextConfig);
