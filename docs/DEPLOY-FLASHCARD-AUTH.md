# Deploy flashcard auth (EN)

Flashcard collections sync uses a small Express backend (`nihongoes-backend`) and Google sign-in. The recommended setup is **one public URL** for the site: Vercel serves Next.js and **rewrites** `/auth/*` and `/api/me`, `/api/collections` to Railway.

## What you need from Google Cloud

1. Create a project (or reuse one).
2. **APIs & Services → OAuth consent screen** (External, add your email as test user while in Testing).
3. **Credentials → Create OAuth client → Web application**.
4. Copy **Client ID** and **Client secret** (you will paste these into Railway).
5. **Authorized redirect URIs** (add every environment):
   - Local split ports: `http://localhost:4000/auth/google/callback`
   - Same-origin stg (via Vercel): `https://<your-stg-host>/auth/google/callback`
   - Production when ready: `https://nihongoes.com/auth/google/callback`

## Backend on Railway

1. Push `nihongoes-backend` to GitHub (new repo is fine).
2. [Railway](https://railway.com) → **New project** → **Deploy from GitHub** → select the repo.
3. **Volume**: mount at `/app/data` (keeps SQLite across deploys).
4. **Variables** (Railway service):

| Variable               | Example (staging)                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| `PORT`                 | `4000` (Railway sets this; optional)                                                          |
| `BACKEND_ORIGIN`       | `https://stg.nihongoes.com` (public URL users and Google see, **not** the `.railway.app` URL) |
| `FRONTEND_ORIGIN`      | `https://stg.nihongoes.com`                                                                   |
| `GOOGLE_CLIENT_ID`     | from Google                                                                                   |
| `GOOGLE_CLIENT_SECRET` | from Google                                                                                   |
| `SESSION_SECRET`       | long random string (e.g. `openssl rand -hex 32`)                                              |
| `DATABASE_PATH`        | `data/nihongoes.sqlite`                                                                       |

5. Deploy → copy the **public Railway URL** (e.g. `https://nihongoes-backend-production.up.railway.app`). This is **only** for Vercel rewrites, not for Google redirect.

6. Check: open `https://<railway-url>/health` → `{ "ok": true, "google": true }`.

## Frontend on Vercel (staging)

On the Vercel project (Preview or a dedicated **staging** environment / branch):

| Variable                       | Value                          |
| ------------------------------ | ------------------------------ |
| `NEXT_PUBLIC_AUTH_SAME_ORIGIN` | `1`                            |
| `AUTH_BACKEND_INTERNAL_URL`    | Railway URL, no trailing slash |

Redeploy after setting variables (rewrites are applied at build).

Do **not** set `NEXT_PUBLIC_API_URL` in same-origin mode.

**Production** (`release-production`): leave auth env unset until you are ready; the site keeps using localStorage-only flashcards.

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

Đồng bộ bộ sưu tập dùng backend Express (`nihongoes-backend`) và đăng nhập Google. Nên dùng **một URL công khai** cho web: Vercel chạy Next.js và **rewrite** `/auth/*`, `/api/me`, `/api/collections` sang Railway.

## Cần lấy trên Google Cloud

1. Tạo project (hoặc dùng project có sẵn).
2. **OAuth consent screen** (External, thêm email bạn làm test user khi còn Testing).
3. **Credentials → OAuth client → Web application**.
4. Copy **Client ID** và **Client secret** (dán vào Railway).
5. **Authorized redirect URIs** (mỗi môi trường một dòng):
   - Local hai cổng: `http://localhost:4000/auth/google/callback`
   - Stg same-origin: `https://<host-stg>/auth/google/callback`
   - Prod (khi sẵn sàng): `https://nihongoes.com/auth/google/callback`

## Backend trên Railway

1. Push `nihongoes-backend` lên GitHub.
2. Railway → **New project** → **Deploy from GitHub**.
3. **Volume** gắn `/app/data` (giữ SQLite khi deploy lại).
4. **Biến môi trường**:

| Biến                   | Ví dụ stg                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------- |
| `BACKEND_ORIGIN`       | `https://stg.nihongoes.com` (URL công khai, **không** dùng `.railway.app` cho Google) |
| `FRONTEND_ORIGIN`      | `https://stg.nihongoes.com`                                                           |
| `GOOGLE_CLIENT_ID`     | từ Google                                                                             |
| `GOOGLE_CLIENT_SECRET` | từ Google                                                                             |
| `SESSION_SECRET`       | chuỗi ngẫu nhiên dài                                                                  |
| `DATABASE_PATH`        | `data/nihongoes.sqlite`                                                               |

5. Copy URL public Railway → chỉ dùng cho Vercel (`AUTH_BACKEND_INTERNAL_URL`).

6. Kiểm tra: `https://<railway-url>/health`.

## Frontend Vercel (staging)

| Biến                           | Giá trị     |
| ------------------------------ | ----------- |
| `NEXT_PUBLIC_AUTH_SAME_ORIGIN` | `1`         |
| `AUTH_BACKEND_INTERNAL_URL`    | URL Railway |

Deploy lại sau khi thêm biến.

Production: chưa set biến auth → flashcards vẫn chỉ localStorage.

## Nhánh staging (Vercel Git)

Push **`release-staging`** — Vercel tự build (Git integration). Gắn **`stg.nihongoes.com`** với branch **`release-staging`** trong Domains.

## Dev local

Hai cổng: không cần env frontend, backend có `.env` Google.

Giống prod: `.env.local` như mục EN ở trên; Google redirect `http://localhost:3000/auth/google/callback`.
