# Nihongoes

A free Japanese learning app.

**Live site: [nihongoes.com](https://nihongoes.com)**

Bilingual content (English and Vietnamese), interactive exercises, recorded kana audio plus Web Speech API playback, and per-page pre-rendered content for SEO.

## Learning Tracks

- **Alphabet** - hiragana and katakana charts, recorded audio, and exercises
- **Kanji** - Jōyō kanji by school grade (1-6), then Kanken levels 4, 3, pre-2, and 2, plus the 214 radicals, meaning quizzes, and writing practice
- **JLPT courses** - N5 (Minna no Nihongo I, lessons 1-25) and N4 (Minna no Nihongo II, lessons 26-50)

## Alphabet Exercises

| Exercise               | Description                                                                 |
| ---------------------- | --------------------------------------------------------------------------- |
| Romaji quiz            | See a kana character, choose the correct romaji                             |
| Character quiz         | See romaji, pick the matching hiragana/katakana                             |
| Listening quiz         | Hear native audio, pick the correct character                               |
| Script-pair quiz       | Match hiragana and katakana equivalents                                     |
| Writing practice       | Trace kana by row or write from a romaji prompt, with animated stroke-order |
| Sentence transcription | Read a kana sentence, type its romaji                                       |

## Course Features

- Vocabulary with furigana, kana, romaji, and a bilingual meaning
- Grammar points with highlighted patterns and speakable examples
- Per lesson: vocabulary quiz (match and multiple choice), grammar quiz, reading, and kanji writing
- A vocabulary index per level, with printable duplex flashcards
- N5 getting-started and reference pages (verb tables and appendix)
- Show/hide translation and phonetics on example sentences
- Alphabet audio is recorded; other Japanese text uses the Web Speech API (voice and speed are configurable)

## Tech Stack

- React 19, TypeScript, Next.js 16 (App Router, file-based routing, next-intl)
- MUI 9 with Emotion SSR
- Sentry (error monitoring, production only)
- Vitest + Testing Library (unit), Playwright (e2e), Storybook

## Requirements

- Node.js 24 (`.nvmrc` pinned)
- `pnpm` (see `packageManager` in `package.json`)

```bash
nvm use 24
```

## Local Setup

```bash
pnpm install
pnpm dev
```

Open at `http://localhost:3000`.

## Available Scripts

| Script                    | Description                                 |
| ------------------------- | ------------------------------------------- |
| `pnpm dev`                | Next.js dev server                          |
| `pnpm build`              | Next.js production build                    |
| `pnpm start`              | Serve the production build (`next start`)   |
| `pnpm analyze`            | Next.js bundle analysis                     |
| `pnpm check`              | Typecheck + lint + stylelint + format check |
| `pnpm typecheck`          | TypeScript check (`tsc --noEmit`)           |
| `pnpm lint` / `lint:fix`  | ESLint                                      |
| `pnpm lint:style`         | Stylelint for CSS                           |
| `pnpm format`             | Prettier write                              |
| `pnpm format:check`       | Verify formatting                           |
| `pnpm test`               | Vitest unit tests                           |
| `pnpm test:coverage`      | Vitest with coverage                        |
| `pnpm test:e2e`           | Playwright e2e tests                        |
| `pnpm lighthouse:mobile`  | Lighthouse mobile audit                     |
| `pnpm lighthouse:desktop` | Lighthouse desktop audit                    |
| `pnpm storybook`          | Storybook dev server                        |
| `pnpm download:audio`     | Download kana audio assets                  |

## Project Structure

```
src/app/
  layout.tsx             passthrough root (global metadata)
  not-found.tsx          404 page
  sitemap.ts             sitemap
  [locale]/              routes for en (root) and vi (/vi)
    layout.tsx           html, next-intl, MUI cache, app chrome
    alphabet/**          charts and exercises
    [jlptLevel]/**       course, lesson, vocab index, intro, reference
    kanji/**             hub, tracks, lessons, quiz, writing, radicals
src/proxy.ts             next-intl middleware: English at /, Vietnamese under /vi
src/constants/courses/   n5 and n4 lesson content
src/constants/kanji/     tracks, lessons, radicals
src/features/            alphabet exercises, course quiz UI, N5 intro and reference
src/components/          shared UI
src/i18n/                next-intl routing, messages, SEO
```

## Routing & i18n

- File-based routing under `src/app/[locale]/**`. Each route file is a server
  component: `generateStaticParams` (both locales) + `generateMetadata`, with
  the view inlined or in a colocated `_components/` folder. Shared clusters
  stay in `src/features/`.
- `src/proxy.ts` (next-intl) maps public URLs onto the `[locale]` segment:
  - English at the root: `/`, `/alphabet`, `/n5/lesson-1`, `/n4/lesson-26`, ...
  - Vietnamese under `/vi`: `/vi/alphabet`, `/vi/n5/lesson-1`, ...
  - `/en/...` redirects to the unprefixed URL.
- Course routes: `/<level>`, `/<level>/vocabulary`, `/<level>/<lesson-id>`,
  and `.../vocabulary|grammar|reading|writing`. N5 also has `/n5/intro` and
  `/n5/reference`.
- Kanji routes: `/kanji`, `/kanji/radicals`, `/kanji/<track>`,
  `/kanji/<track>/<lesson-id>`, and `.../quiz|writing`.
- Every route is statically pre-rendered. Interactive quiz, exercise, and
  writing views are client components.

## Deployment (Vercel)

Nihongoes is a Next.js (App Router) app deployed on Vercel. It runs on a Node
server (required by `proxy.ts`, which keeps English at the root and Vietnamese
under `/vi`); every route is still statically pre-rendered (SSG). Vercel
auto-detects Next.js: connect the repo and set the `SENTRY_AUTH_TOKEN` env var
for source map upload. The custom domain is configured in the Vercel dashboard.

### CI/CD

Pull requests run GitHub Actions (`.github/workflows/ci.yml`). A job runs only
when matching files changed: typecheck, ESLint, Stylelint (CSS), unit tests,
and Playwright e2e against a production build. The full `pnpm build` runs only
on pull requests into `release-production`, because it pre-renders every page.
`Tests pass` is the branch-protection check; a skipped job still counts as
success.

Shipping is a merge into `release-production`. That push is what Vercel deploys
to `nihongoes.com`. Other branches are not production.

### Production branch

Production is driven by the `release-production` branch:

- Any merge or push into `release-production` triggers a production deploy to
  the live domain (`nihongoes.com`).
- Other branches do not deploy to production.

### Release flow

1. Develop on a feature branch and open a PR (CI runs typecheck, lint, and tests).
2. Merge the PR into the integration branch (`develop` / `master`) as usual.
3. When ready to ship, merge into `release-production`.
4. Vercel builds and deploys to production automatically. Watch the deploy in
   the Vercel dashboard (Deployments tab).

## Error Monitoring (Sentry)

Sentry runs in production builds only (guarded by `process.env.NODE_ENV`). It is
initialized client-side in `instrumentation-client.ts` and is not active during
`pnpm dev`.

Source maps are uploaded by `@sentry/nextjs` (`withSentryConfig` in
`next.config.ts`) so stack traces in Sentry map back to the original source, then
deleted so they are not served publicly. To enable the upload, set the
`SENTRY_AUTH_TOKEN` env var on the build (e.g. in the Vercel project settings).
Without the token the build still succeeds - it just skips the upload.

Required token permissions: **Project - Admin**, **Release - Admin**,
**Organization - Read**.

## Further Docs

- Performance auditing: `docs/LIGHTHOUSE.md`
- Optimization log: `docs/OPTIMIZATION.md`
- Testing guide: `docs/TESTING.md`
