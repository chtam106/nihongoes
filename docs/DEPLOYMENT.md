# Deployment

Nihongoes is a Next.js (App Router) app deployed on **Vercel**. It runs on a
Node server (required by `proxy.ts`, which keeps English at the root and
Vietnamese under `/vi`); every route is still statically pre-rendered (SSG).

## Production branch

Production is driven by the **`release-production`** branch:

- **Any merge/push into `release-production` triggers a production deploy** to
  the live domain (`nihongoes.com`).
- Other branches do not deploy to production.

## Release flow

1. Develop on a feature branch and open a PR (CI runs typecheck/lint/tests).
2. Merge the PR into the integration branch (`develop` / `master`) as usual.
3. When ready to ship, merge into **`release-production`**.
4. Vercel builds and deploys to production automatically. Watch the deploy in
   the Vercel dashboard (Deployments tab).

## Analytics (Cloudflare Web Analytics)

The site is served from Vercel with DNS pointing straight at Vercel (not proxied
through Cloudflare), so Cloudflare cannot count traffic server-side. A
client-side Cloudflare Web Analytics beacon is embedded instead - it renders
only when `NEXT_PUBLIC_CLOUDFLARE_BEACON_TOKEN` is set:

1. In the Cloudflare dashboard, add a **Web Analytics** site for `nihongoes.com`
   and copy its beacon **token**.
2. In Vercel, set `NEXT_PUBLIC_CLOUDFLARE_BEACON_TOKEN` to that token (all
   environments), then redeploy - the token bakes into the pre-rendered HTML at
   build time.
3. Left unset (e.g. locally) the beacon script is simply not rendered.
