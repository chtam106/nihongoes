# Optimization Log / Nhật Ký Tối Ưu

- **EN:** A running record of every performance optimization: the root cause, the fix, and why the fix works. Add each new optimization as a new section at the TOP (newest first). Keep before/after numbers and the PR link when available.
- **VI:** Ghi chép lại mọi lần tối ưu hiệu năng: nguyên nhân gốc, cách sửa, và vì sao cách sửa đó hiệu quả. Mỗi tối ưu mới thêm một mục ở TRÊN CÙNG (mới nhất trước). Giữ số liệu trước/sau và link PR nếu có.

Entry template / Mẫu một mục:

```md
## YYYY-MM-DD - <short title> (PR #NNN)

### Cause / Nguyên nhân

### Fix / Cách sửa

### Why it works / Vì sao hiệu quả

### Metrics / Số liệu (before -> after)
```

---

## 2026-07-20 - Preload the primary Latin UI font (PR #169)

### Cause / Nguyên nhân

- **EN:** Lighthouse's critical request chain ended on the basic-latin Noto Sans UI subset (`noto-sans-latin-wght-normal.woff2`, ~35 KiB) at ~655 ms. The `@font-face` lived in a bundled CSS chunk, so the browser only discovered the font URL AFTER the CSS had downloaded and parsed: a deep `HTML -> CSS -> font` chain.
- **VI:** Chuỗi request tới hạn của Lighthouse kết thúc ở subset latin cơ bản của Noto Sans (`noto-sans-latin-wght-normal.woff2`, ~35 KiB) tại ~655 ms. Khai báo `@font-face` nằm trong CSS chunk đã bundle, nên trình duyệt chỉ biết URL font SAU KHI tải và parse xong CSS: một chuỗi sâu `HTML -> CSS -> font`.

### Fix / Cách sửa

- **EN:** Serve that one primary subset from a stable public URL (`public/fonts/noto-sans-latin.woff2`) instead of a hashed bundler asset, then `<link rel="preload" as="font" crossorigin>` it in the document `<head>`. `font-display: swap` stays, and the `latin-ext` / `vietnamese` subsets keep their `unicode-range` so nothing extra is fetched.
- **VI:** Phục vụ subset chính đó từ URL công khai ổn định (`public/fonts/noto-sans-latin.woff2`) thay cho asset bị bundler băm tên, rồi `<link rel="preload" as="font" crossorigin>` nó trong `<head>`. `font-display: swap` giữ nguyên, và 2 subset `latin-ext` / `vietnamese` vẫn giữ `unicode-range` nên không tải dư.

### Why it works / Vì sao hiệu quả

- **EN:** The preload is in the initial HTML, so the font starts downloading in parallel with the CSS (right after HTML, ~180 ms) instead of chained after CSS parse (~420 ms). That flattens the critical chain and lets the real font swap in sooner (less fallback-font flash). A stable public URL is required because a hashed asset URL cannot be hard-coded in a preload link.
- **VI:** Preload nằm trong HTML ban đầu nên font bắt đầu tải song song với CSS (ngay sau HTML, ~180 ms) thay vì xếp hàng sau khi parse CSS (~420 ms). Điều này làm phẳng chuỗi tới hạn và để font thật hiện sớm hơn (bớt nhấp nháy font dự phòng). Cần URL công khai ổn định vì URL asset băm tên không thể hard-code vào link preload.

### Metrics / Số liệu

- **EN:** Critical-path tail was ~655 ms with the font chained after CSS. After: the font is a first-level request (parallel with CSS); exact score needs a Lighthouse run on the deploy.
- **VI:** Đuôi critical-path ~655 ms khi font xếp sau CSS. Sau khi sửa: font là request cấp 1 (song song với CSS); số điểm chính xác cần chạy Lighthouse trên bản deploy.

---

## 2026-07-20 - Keep the kanji dataset server-only (PR #168)

### Cause / Nguyên nhân

- **EN:** The ~2 MB kanji lesson data (`src/constants/kanji/lessons.ts`) was shipped in the client bundle on EVERY page. The global nav drawer (`nav-items.ts`) imported `kanjiTracks`, and the quiz / writing / radicals client views called `getKanjiLesson` / `kanjiTracks` directly, so the whole dataset was pulled into a shared client chunk.
- **VI:** Bộ dữ liệu bài học kanji ~2 MB (`src/constants/kanji/lessons.ts`) bị nạp vào client bundle trên MỌI trang. Drawer điều hướng toàn cục (`nav-items.ts`) import `kanjiTracks`, còn các view client quiz / writing / radicals gọi thẳng `getKanjiLesson` / `kanjiTracks`, nên cả dataset bị kéo vào một client chunk dùng chung.

### Fix / Cách sửa

- **EN:** Split the kanji data by concern:
  - `kanji/track-meta.ts` (light, client-safe): `KANJI_TRACK_META` with slug/name/intro only, NO lessons. The nav drawer maps this.
  - `kanji/tracks.ts` (heavy, server-only): `kanjiTracks`, getters, `KANJI_SITEMAP_PATHS`, `computeRadicalUsage` - imports `lessons.ts`. Only server code imports it.
  - `kanji/index.ts` (light): paths, radicals, `formatKanjiMeaning`, types; no longer imports `lessons.ts`.
  - Quiz/writing server pages fetch the lesson and pass `trackSlug`/`trackName`/`lesson` as props; the radicals server page computes `usage` and passes it. Client views drop `useParams` + the getters.
- **VI:** Tách dữ liệu kanji theo mối quan tâm:
  - `kanji/track-meta.ts` (nhẹ, an toàn cho client): `KANJI_TRACK_META` chỉ có slug/name/intro, KHÔNG kèm lessons. Drawer dùng cái này.
  - `kanji/tracks.ts` (nặng, chỉ server): `kanjiTracks`, getters, `KANJI_SITEMAP_PATHS`, `computeRadicalUsage` - import `lessons.ts`. Chỉ code server import.
  - `kanji/index.ts` (nhẹ): paths, radicals, `formatKanjiMeaning`, types; không còn import `lessons.ts`.
  - Quiz/writing server page lấy lesson và truyền `trackSlug`/`trackName`/`lesson` qua props; radicals server page tính `usage` rồi truyền xuống. View client bỏ `useParams` + getters.

### Why it works / Vì sao hiệu quả

- **EN:** The heavy dataset now only lives in the server bundle (used at build time for `generateStaticParams` and server rendering). Each client page receives just the one lesson it needs through the RSC payload (a few KB), so the full dataset never crosses the server/client boundary into a JS chunk. Verified by grepping the built `static/chunks/*.js`: no kanji readings remain.
- **VI:** Dataset nặng giờ chỉ nằm trong server bundle (dùng lúc build cho `generateStaticParams` và render server). Mỗi trang client chỉ nhận đúng một bài qua RSC payload (vài KB), nên cả dataset không bao giờ vượt ranh giới server/client vào một JS chunk. Đã kiểm chứng bằng grep `static/chunks/*.js` sau build: không còn readings kanji.

### Metrics / Số liệu

- **EN:** Total client JS (all `static/chunks/*.js`): raw 3.30 MB -> 2.32 MB (-1.04 MB, -31%); gzip ~930 KB -> ~695 KB (-235 KB). The single kanji-data chunk (1.16 MB raw / 281 KB gzip), previously loaded on every page, is fully removed.
- **VI:** Tổng JS client (mọi `static/chunks/*.js`): raw 3.30 MB -> 2.32 MB (-1.04 MB, -31%); gzip ~930 KB -> ~695 KB (-235 KB). Chunk dữ liệu kanji (1.16 MB raw / 281 KB gzip) từng nạp trên mọi trang đã bị gỡ hoàn toàn.

---

## 2026-07-19 - Lazy-load Sentry Session Replay (PR #166)

### Cause / Nguyên nhân

- **EN:** Sentry Session Replay (rrweb) was initialized eagerly in `instrumentation-client`, adding ~166 KiB (plus ~14 KiB polyfills) of JavaScript to the critical initial bundle even though replay is not needed for first paint.
- **VI:** Sentry Session Replay (rrweb) được khởi tạo ngay trong `instrumentation-client`, thêm ~166 KiB (cùng ~14 KiB polyfill) JavaScript vào bundle khởi tạo tới hạn dù replay không cần cho lần vẽ đầu.

### Fix / Cách sửa

- **EN:** `Sentry.init` registers only `browserTracingIntegration` up front. Replay is attached later via `Sentry.lazyLoadIntegration('replayIntegration')` inside `requestIdleCallback` (with a `setTimeout` fallback), then `getClient()?.addIntegration(...)`.
- **VI:** `Sentry.init` chỉ đăng ký `browserTracingIntegration` từ đầu. Replay được gắn sau qua `Sentry.lazyLoadIntegration('replayIntegration')` trong `requestIdleCallback` (dự phòng `setTimeout`), rồi `getClient()?.addIntegration(...)`.

### Why it works / Vì sao hiệu quả

- **EN:** The replay chunk is fetched off the critical path, after the browser is idle, so it no longer competes with first paint. Error/session replay still works because the integration is added to the live client once loaded.
- **VI:** Chunk replay được tải ngoài critical path, sau khi trình duyệt rảnh, nên không còn tranh chấp với lần vẽ đầu. Replay lỗi/phiên vẫn hoạt động vì integration được thêm vào client đang chạy sau khi tải xong.

### Metrics / Số liệu

- **EN:** Removes ~166 KiB (+ ~14 KiB polyfills) from the initial critical bundle.
- **VI:** Gỡ ~166 KiB (+ ~14 KiB polyfill) khỏi bundle tới hạn ban đầu.
