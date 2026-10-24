# Deploy flashcard auth (EN)

Flashcard collections sync uses a small Express backend (`nihongoes-backend`) and Google sign-in. The recommended setup is **one public URL** for the site: Vercel serves Next.js and **rewrites** `/auth/*` and `/api/me`, `/api/collections` to Fly.io (or another host).

## What you need from Google Cloud

1. Create a project (or reuse one).
2. **APIs & Services → OAuth consent screen** (External, add your email as test user while in Testing).
3. **Credentials → Create OAuth client → Web application**.
4. Copy **Client ID** and **Client secret** (you will paste these into Fly secrets).
5. **Authorized redirect URIs** (add every environment):
   - Local split ports: `http://localhost:4000/auth/google/callback`
   - Same-origin stg (via Vercel): `https://<your-stg-host>/auth/google/callback`
   - Production when ready: `https://nihongoes.com/auth/google/callback`

## Backend on Fly.io

Repo: [github.com/chtam106/nihongoes-backend](https://github.com/chtam106/nihongoes-backend) (`fly.toml` = staging `nihongoes-backend-stg`, `fly.production.toml` = prod `nihongoes-backend`, region `sin`, volume `nihongoes_data` → `/app/data`).

1. Install [flyctl](https://fly.io/docs/flyctl/install/) and run `fly auth login`.
2. Clone repo, then `fly launch --no-deploy` (confirm app name / region **Singapore (`sin`)**).
3. `fly volumes create nihongoes_data --region sin --size 1`
4. Secrets (staging example):

```bash
fly secrets set \
  BACKEND_ORIGIN=https://stg.nihongoes.com \
  FRONTEND_ORIGIN=https://stg.nihongoes.com \
  GOOGLE_CLIENT_ID=your-id \
  GOOGLE_CLIENT_SECRET=your-secret \
  SESSION_SECRET=your-long-random-string
```

5. `fly deploy` → copy **`https://<app-name>.fly.dev`** for Vercel only (not for Google redirect).

6. Check: `https://<app-name>.fly.dev/health` → `{ "ok": true, "google": true }`.

## Frontend on Vercel (staging)

On the Vercel project (Preview or a dedicated **staging** environment / branch):

| Variable                       | Value                                 |
| ------------------------------ | ------------------------------------- |
| `NEXT_PUBLIC_AUTH_SAME_ORIGIN` | `1`                                   |
| `AUTH_BACKEND_INTERNAL_URL`    | Fly `.fly.dev` URL, no trailing slash |

Redeploy after setting variables (rewrites are applied at build).

Do **not** set `NEXT_PUBLIC_API_URL` in same-origin mode.

**Production** (`release-production` on Vercel):

| Variable                       | Value                                      |
| ------------------------------ | ------------------------------------------ |
| `NEXT_PUBLIC_AUTH_SAME_ORIGIN` | `1`                                        |
| `AUTH_BACKEND_INTERNAL_URL`    | `https://nihongoes-backend.fly.dev`        |

Add Google redirect URI `https://nihongoes.com/auth/google/callback`. Redeploy production after env + merge.

Backend: `fly deploy --config fly.production.toml` in `nihongoes-backend` (app `nihongoes-backend`, secrets use `BACKEND_ORIGIN` / `FRONTEND_ORIGIN` = `https://nihongoes.com`).

Without those Vercel variables, the site keeps localStorage-only flashcards (auth code ships but stays off).

## Staging branch (Vercel Git)

Push **`release-staging`** — Vercel builds via Git integration (same idea as `release-production`, no Actions token). Assign **`stg.nihongoes.com`** to Git branch **`release-staging`** in Vercel Domains. Scope Preview environment variables to that branch when possible.

## Local dev (two terminals)

**Split ports (default):** no frontend env; backend `.env` with Google credentials; `pnpm dev` on `:4000` and `:3000`.

**Same-origin like prod:** in `nihongoes/.env.local`:

```env
NEXT_PUBLIC_AUTH_SAME_ORIGIN=1
AUTH_BACKEND_INTERNAL_URL=http://localhost:4000
```

Backend `BACKEND_ORIGIN=http://localhost:3000`, `FRONTEND_ORIGIN=http://localhost:3000`, Google redirect `http://localhost:3000/auth/google/callback`.

---

# Triển khai auth flashcard (VI)

Đồng bộ bộ sưu tập dùng backend Express (`nihongoes-backend`) và đăng nhập Google. Nên dùng **một URL công khai** cho web: Vercel chạy Next.js và **rewrite** `/auth/*`, `/api/me`, `/api/collections` sang Fly.io.

## Cần lấy trên Google Cloud

1. Tạo project (hoặc dùng project có sẵn).
2. **OAuth consent screen** (External, thêm email bạn làm test user khi còn Testing).
3. **Credentials → OAuth client → Web application**.
4. Copy **Client ID** và **Client secret** (dán vào Fly secrets).
5. **Authorized redirect URIs** (mỗi môi trường một dòng):
   - Local hai cổng: `http://localhost:4000/auth/google/callback`
   - Stg same-origin: `https://<host-stg>/auth/google/callback`
   - Prod (khi sẵn sàng): `https://nihongoes.com/auth/google/callback`

## Backend trên Fly.io

Repo GitHub `nihongoes-backend`: `fly.toml` (stg), `fly.production.toml` (prod), region `sin`, volume SQLite.

1. Cài flyctl → `fly auth login`.
2. `fly launch --no-deploy` (region Singapore).
3. `fly volumes create nihongoes_data --region sin --size 1`
4. `fly secrets set` với `BACKEND_ORIGIN`, `FRONTEND_ORIGIN` = `https://stg.nihongoes.com`, Google ID/secret, `SESSION_SECRET`.
5. `fly deploy` → URL `https://<app>.fly.dev` cho Vercel.

6. Kiểm tra: `https://<app>.fly.dev/health`.

## Frontend Vercel (staging)

| Biến                           | Giá trị            |
| ------------------------------ | ------------------ |
| `NEXT_PUBLIC_AUTH_SAME_ORIGIN` | `1`                |
| `AUTH_BACKEND_INTERNAL_URL`    | URL Fly `.fly.dev` |

Deploy lại sau khi thêm biến.

**Production** (Vercel, branch `release-production`):

| Biến                           | Giá trị                               |
| ------------------------------ | ------------------------------------- |
| `NEXT_PUBLIC_AUTH_SAME_ORIGIN` | `1`                                   |
| `AUTH_BACKEND_INTERNAL_URL`    | `https://nihongoes-backend.fly.dev`   |

Thêm redirect Google `https://nihongoes.com/auth/google/callback`, rồi redeploy production.

Backend: `fly deploy --config fly.production.toml` (app `nihongoes-backend`; secrets `BACKEND_ORIGIN` / `FRONTEND_ORIGIN` = `https://nihongoes.com`).

Chưa set biến trên Vercel → flashcards vẫn chỉ localStorage.

## Nhánh staging (Vercel Git)

Push **`release-staging`** — Vercel tự build (Git integration). Gắn **`stg.nihongoes.com`** với branch **`release-staging`** trong Domains.

## Dev local

Hai cổng: không cần env frontend, backend có `.env` Google.

Giống prod: `.env.local` như mục EN ở trên; Google redirect `http://localhost:3000/auth/google/callback`.
