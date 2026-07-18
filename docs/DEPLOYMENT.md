# Deployment

Nihongoes is a Next.js (App Router) app deployed on **Vercel**. It runs on a
Node server (required by `middleware.ts`, which keeps English at the root and
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
