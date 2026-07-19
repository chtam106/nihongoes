# Lighthouse Guide & Optimization Notes / Hướng Dẫn Lighthouse & Các Tối Ưu

## Scope / Phạm Vi

- **EN:** How to measure Lighthouse consistently in local production mode.
- **VI:** Cách đo Lighthouse nhất quán trên môi trường production local.
- **EN:** What was optimized in this pass.
- **VI:** Các hạng mục đã tối ưu trong đợt này.
- **EN:** Before/after metrics for quick tracking.
- **VI:** Số liệu trước/sau để theo dõi nhanh.

## Quick Start (EN + VI)

Prerequisite: `nvm use 24`.

- **EN:** Run one command per form factor. Each is self-contained: it builds a production bundle into a throwaway `.next-lh`, starts a prod server on its own port (so it never touches a running `next dev`), audits ONE representative page per route group, then shuts the server down.
- **VI:** Chạy một lệnh cho mỗi form factor. Mỗi lệnh tự lo hết: build production vào `.next-lh` tạm, chạy server prod trên cổng riêng (không đụng `next dev`), audit MỘT trang đại diện mỗi nhóm route, rồi tự tắt server.

```bash
pnpm lighthouse:mobile
pnpm lighthouse:desktop
```

- **EN:** Open the summary at `.lighthouse/mobile/index.html` (or `.lighthouse/desktop/index.html`): a color-coded score table with a link to each page's full HTML report. The two form factors write to separate folders so they never overwrite each other.
- **VI:** Mở bảng tổng hợp tại `.lighthouse/mobile/index.html` (hoặc `.lighthouse/desktop/index.html`): bảng điểm màu kèm link tới report HTML đầy đủ của từng trang. Hai form factor ghi vào thư mục riêng nên không đè lên nhau.
- **EN:** Options: `pnpm lighthouse:mobile --skip-build` reuses the previous build (faster re-runs); `LH_URL=http://localhost:3000 pnpm lighthouse:mobile` audits an already-running server instead of building one.
- **VI:** Tùy chọn: `pnpm lighthouse:mobile --skip-build` tái dùng build trước (chạy lại nhanh hơn); `LH_URL=http://localhost:3000 pnpm lighthouse:mobile` audit một server đang chạy sẵn thay vì tự build.

## Full Measurement Flow / Quy Trình Đo Đầy Đủ

- **EN:** The script (`scripts/lighthouse.mjs`) already builds, serves, audits, and tears down in one go, so there is no manual build/start/parse step.
- **VI:** Script (`scripts/lighthouse.mjs`) đã tự build, chạy server, audit và dọn dẹp trong một lượt, nên không cần bước build/start/parse thủ công.
- **EN:** Representative pages (one per route group) live in the `PAGES` list at the top of the script; add an entry when a new kind of page is introduced.
- **VI:** Danh sách trang đại diện (mỗi nhóm route một trang) nằm ở mảng `PAGES` đầu script; thêm một mục khi có loại trang mới.
- **EN:** For stable trends, run each profile 2-3 times and compare; scores vary with machine load.
- **VI:** Để ổn định số liệu, chạy mỗi profile 2-3 lần rồi so; điểm dao động theo tải máy.

## What Was Optimized / Đã Tối Ưu Gì

- **EN:** The notes below are from the earlier Vite optimization pass; some file paths changed after the Next.js migration (e.g. `src/app.tsx`/`src/main.tsx` are gone; routing is file-based under `app/[locale]/**`, views live in `src/features/**`). The techniques (lazy drawer, code-split i18n, deferred JP font) still apply.
- **VI:** Các ghi chú dưới đây từ đợt tối ưu thời Vite; một số đường dẫn đã đổi sau khi migrate Next.js (VD `src/app.tsx`/`src/main.tsx` không còn; routing file-based trong `app/[locale]/**`, view nằm ở `src/features/**`). Các kỹ thuật (drawer lazy, tách i18n, defer font Nhật) vẫn còn áp dụng.

### A) Accessibility + navigation semantics / A11y + cấu trúc navigation

- **EN:** Fixed drawer list semantics so `List` children are proper `li`.
- **VI:** Sửa semantics của drawer để con của `List` là `li` đúng chuẩn.
- **EN:** Split drawer content into lazy chunk `src/components/app-drawer-content.tsx`.
- **VI:** Tách drawer content sang lazy chunk `src/components/app-drawer-content.tsx`.

### B) Reduce initial mobile JS / Giảm JS tải ban đầu trên mobile

- **EN:** Route-level lazy loading in `src/app.tsx`.
- **VI:** Lazy load theo route trong `src/app.tsx`.
- **EN:** On mobile, drawer content loads only when menu is opened.
- **VI:** Trên mobile, drawer content chỉ load khi mở menu.
- **EN:** Course nav no longer imports all lessons at startup.
- **VI:** Course nav không còn import toàn bộ lessons ngay lúc khởi động.
- **EN:** Lessons are loaded per course level on expand (deep-link safe).
- **VI:** Lessons được load theo từng level khi expand (an toàn cho deep-link).

### C) Reduce initial CSS/font cost / Giảm chi phí CSS/font ban đầu

- **EN:** UI font subset moved to `src/theme/noto-sans-ui.css` (latin + latin-ext + vietnamese).
- **VI:** Chuyển subset font UI sang `src/theme/noto-sans-ui.css` (latin + latin-ext + vietnamese).
- **EN:** Japanese font loading is deferred.
- **VI:** Font tiếng Nhật được defer, không chặn first paint.

### D) Split i18n payload / Tách payload i18n

- **EN:** Vietnamese translations moved to `src/i18n/translations-vi.ts` (separate chunk).
- **VI:** Bản dịch tiếng Việt chuyển sang `src/i18n/translations-vi.ts` (chunk riêng).
- **EN:** `src/i18n/context.tsx` lazy-loads `vi` when needed.
- **VI:** `src/i18n/context.tsx` lazy-load `vi` khi cần.
- **EN:** `src/main.tsx` preloads `vi` only when stored locale is `vi`.
- **VI:** `src/main.tsx` chỉ preload `vi` khi locale lưu sẵn là `vi`.

## Measured Results / Kết Quả Đo

- **EN:** Measured on the Next.js production server (`pnpm build && pnpm start`), home page.
- **VI:** Đo trên server production Next.js (`pnpm build && pnpm start`), trang chủ.

### Next.js (current) / Next.js (hiện tại)

| Metric         | Mobile | Desktop |
| -------------- | ------ | ------- |
| Performance    | 85     | 100     |
| Accessibility  | 100    | 100     |
| Best Practices | 100    | 100     |
| SEO            | 100    | 100     |
| FCP            | 1.1s   | 0.3s    |
| LCP            | 4.2s   | 0.8s    |
| TBT            | 120ms  | 0ms     |
| CLS            | 0.015  | 0.001   |

### Vite baseline (historical) / Baseline Vite (lịch sử)

- **EN:** Before the Next.js migration, the Vite SPA reached mobile Performance `69 -> 93` after optimization. Next.js ships more framework/hydration JS, so mobile Performance is a bit lower, but page content and per-page SEO metadata are now server pre-rendered (SSG) instead of client-rendered.
- **VI:** Trước khi migrate, bản Vite SPA đạt mobile Performance `69 -> 93` sau tối ưu. Next.js kèm nhiều JS framework/hydration hơn nên mobile Performance thấp hơn chút, nhưng nội dung trang và SEO metadata giờ được prerender phía server (SSG) thay vì render ở client.

## Mobile performance ceiling (investigation) / Trần hiệu năng mobile (đã khảo sát)

- **EN:** UPDATE (2026-07): the largest homepage chunk (~166KB gzip) was NOT React-DOM + MUI as previously assumed - it was **Sentry Session Replay (rrweb)**, plus ~14KB of legacy polyfills bundled inside it. It was pulled in eagerly by `Sentry.replayIntegration(...)` in `instrumentation-client.ts`, loading on every page for a feature only 10% of sessions record. It is now **lazy-loaded** via `Sentry.lazyLoadIntegration('replayIntegration')` (from the Sentry CDN, attached on `requestIdleCallback`), so it is gone from the initial bundle. Sentry core + tracing (~12KB) still load eagerly, so error reporting is unaffected.
- **VI:** CẬP NHẬT (07/2026): chunk lớn nhất trang chủ (~166KB gzip) KHÔNG phải React-DOM + MUI như từng nghĩ - đó là **Sentry Session Replay (rrweb)**, kèm ~14KB polyfill cũ nằm trong đó. Nó bị `Sentry.replayIntegration(...)` trong `instrumentation-client.ts` kéo vào eager, tải trên mọi trang cho tính năng chỉ 10% phiên được quay. Giờ đã **lazy-load** qua `Sentry.lazyLoadIntegration('replayIntegration')` (từ CDN Sentry, gắn khi `requestIdleCallback`), nên biến mất khỏi initial bundle. Sentry core + tracing (~12KB) vẫn eager nên báo lỗi không bị ảnh hưởng.
- **EN:** After removing Replay, the real remaining framework chunk is ~129KB gzip (React-DOM + MUI) - THAT one is genuinely framework code shared across routes and cannot be tree-shaken. The residual mobile ceiling (main-thread hydration of the client chrome + MUI, TBT/TTI) still applies; only an architecture change (RSC chrome / less MUI) would move it further.
- **VI:** Sau khi bỏ Replay, chunk framework thật sự còn lại ~129KB gzip (React-DOM + MUI) - cái NÀY mới đúng là code framework dùng chung mọi route, không tree-shake được. Trần mobile còn lại (hydrate chrome client + MUI, TBT/TTI) vẫn còn; chỉ đổi kiến trúc (RSC hoá chrome / bớt MUI) mới cải thiện thêm.
- **EN:** Levers considered and rejected (2026-07): (1) not hydrating the desktop drawer on mobile - impossible without reintroducing the `useMediaQuery` flicker the app deliberately avoids (client component + SSG can't know the viewport at SSR); (2) shrinking the 168KB chunk - it is the framework; (3) RSC-ifying pages - a large refactor blocked by the client i18n context + MUI. A font preload gave a small, unreliable FCP win (1.1s -> 0.9s) with no score change, so it was NOT kept. Treat ~83 mobile as the floor for this React+MUI+SSG architecture; only a real architecture change (less MUI / RSC) would move it, which is not worth the ROI today.
- **VI:** Các đòn bẩy đã cân nhắc và loại (07/2026): (1) không hydrate desktop drawer trên mobile - bất khả thi nếu không tái tạo flicker `useMediaQuery` mà app cố tình tránh (client + SSG không biết viewport lúc SSR); (2) thu nhỏ chunk 168KB - đó là framework; (3) RSC hoá trang - refactor lớn, vướng i18n context client + MUI. Font preload cho lợi FCP nhỏ và không ổn định (1.1s -> 0.9s), không đổi điểm, nên KHÔNG giữ. Coi ~83 mobile là sàn của kiến trúc React+MUI+SSG này; chỉ thay đổi kiến trúc thật (bớt MUI / RSC) mới cải thiện, hiện chưa đáng ROI.

## Notes / Ghi Chú

- **EN:** Scores vary by machine load and thermal state.
- **VI:** Điểm có thể dao động theo tải máy và nhiệt độ hệ thống.
- **EN:** Compare runs in the same environment for fair trend tracking.
- **VI:** So sánh trong cùng môi trường để theo dõi xu hướng công bằng.
- **EN:** Latest remaining opportunity is mostly `unused-javascript`.
- **VI:** Cơ hội tối ưu còn lại chủ yếu là `unused-javascript`.
