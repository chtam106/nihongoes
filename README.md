# Nihongoes

A free Japanese learning app.

**Live site: [nihongoes.com](https://nihongoes.com)**

Bilingual content (English and Vietnamese), interactive exercises, native audio via the Web Speech API, and per-page pre-rendered content for SEO.

## Learning Tracks

- **Alphabet** - learn and memorize hiragana and katakana with full charts, native audio, and exercises
- **Kanji** - Jōyō kanji by school grade (1-6) plus Kanken levels, with the 214 radicals, meaning quizzes, and writing practice
- **JLPT courses** - structured lessons (currently N5; the shared course engine supports adding more levels)

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

- Vocabulary with kanji, kana, romaji, and meaning
- Grammar points with pattern chips and speakable examples
- Pronunciation via Web Speech API (configurable voice and speed)
- Exercise, listening, and reading quizzes per lesson
- Show/hide translation and phonetics toggles on example sentences

## Tech Stack

- React 19, TypeScript, Next.js (App Router, file-based routing, deployed on a server)
- MUI (Material UI) with Emotion SSR
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

| Script                | Description                                 |
| --------------------- | ------------------------------------------- |
| `pnpm dev`            | Next.js dev server                          |
| `pnpm build`          | Next.js production build                    |
| `pnpm start`          | Serve the production build (`next start`)   |
| `pnpm check`          | Typecheck + lint + stylelint + format check |
| `pnpm typecheck`      | TypeScript check (`tsc --noEmit`)           |
| `pnpm lint`           | ESLint                                      |
| `pnpm lint:fix`       | ESLint with auto-fix                        |
| `pnpm lint:style`     | Stylelint for CSS                           |
| `pnpm format`         | Prettier write                              |
| `pnpm format:check`   | Verify formatting                           |
| `pnpm test`           | Vitest unit tests                           |
| `pnpm test:e2e`       | Playwright e2e tests                        |
| `pnpm storybook`      | Storybook dev server                        |
| `pnpm download:audio` | Download kana audio assets                  |

## Project Structure

```
app/
  layout.tsx           root layout (Emotion SSR, providers, base metadata)
  not-found.tsx        404 page
  sitemap.ts           sitemap generation (native)
  [lang]/              file-based routes for both locales (en, vi)
    page.tsx           home
    alphabet/**        alphabet pages + exercises
    [jlptLevel]/**         course level, lesson, and practice pages
    kanji/**           kanji hub, tracks, lessons, quiz, writing
middleware.ts          keeps English at the root, Vietnamese under /vi
src/
  constants/courses/   course and lesson content (n5)
  constants/kanji/     kanji tracks, lessons, and radicals
  features/            page components rendered by the route files (client)
  components/          shared UI components
  i18n/                translations, locale routing, nav shim, SEO metadata, route helpers
  utils/speech.ts      Japanese Web Speech API helpers
  theme/               MUI theme and surface helpers
```

## Routing & i18n

- File-based routing under `app/[lang]/**`. Each route file is a thin server
  component: `generateStaticParams` (pre-render both locales) + `generateMetadata`
  (per-page SEO) + renders its `src/features` view.
- `middleware.ts` maps clean public URLs onto the internal `[lang]` segment:
  - Default locale (English) at the root: `/`, `/alphabet`, `/n5/lesson-1`, ...
  - Vietnamese under `/vi`: `/vi/alphabet`, `/vi/n5/lesson-1`, ...
  - `/en/...` redirects to the clean root URL.
- Course routes: `/<level>`, `/<level>/<lesson-id>`, `.../vocabulary|grammar|listening|reading|writing`.
- Kanji routes: `/kanji`, `/kanji/<track>`, `/kanji/<track>/<lesson-id>`, `.../quiz|writing`.
- Every route is statically pre-rendered (SSG) at build time; interactive
  quiz/exercise/writing surfaces render client-only (`<ClientOnly>`).

## Deployment (Vercel)

The app runs on a Node server (for `middleware.ts`), so it deploys to Vercel (or
any Node host), not a static host. Vercel auto-detects Next.js: connect the repo
and set the `SENTRY_AUTH_TOKEN` env var for source map upload. The custom domain
is configured in the Vercel dashboard.

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

- Deployment (Vercel): `docs/DEPLOYMENT.md`
- Performance auditing: `docs/LIGHTHOUSE.md`
- Testing guide: `docs/TESTING.md`
