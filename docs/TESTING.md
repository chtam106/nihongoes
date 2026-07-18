# Testing / Kiểm thử

Nihongoes has two layers of automated tests:

- **Unit & component tests** with [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com) (fast, run in `jsdom`).
- **Browser (end-to-end) tests** with [Playwright](https://playwright.dev) (real Chromium against the dev server).

Nihongoes có hai lớp kiểm thử tự động:

- **Unit & component** dùng [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com) (nhanh, chạy trong `jsdom`).
- **Browser (end-to-end)** dùng [Playwright](https://playwright.dev) (Chromium thật chạy với dev server).

> Prerequisite / Yêu cầu: Node 24 (`nvm use 24`) before any command below. / trước mọi lệnh bên dưới.

---

## 1. One-time setup / Cài đặt một lần

The test tooling is already in `devDependencies`, so a normal install is enough. Playwright also needs its browser binary downloaded once.

Bộ công cụ test đã nằm trong `devDependencies`, nên chỉ cần cài như bình thường. Playwright cần tải binary trình duyệt một lần.

```bash
pnpm install
pnpm exec playwright install chromium
```

---

## 2. Unit & component tests / Test unit & component

```bash
pnpm test            # run once / chạy một lần
pnpm test:watch      # watch mode / chế độ theo dõi
pnpm test:coverage   # run with coverage / chạy kèm coverage
```

- Test files live next to the code as `*.test.ts` / `*.test.tsx`.
- Config lives in the `test` block of `vite.config.ts`; global setup is `src/test/setup.ts`.
- Component tests render React with Testing Library; the locale comes from the URL, so wrap UI in `<MemoryRouter initialEntries={['/']}><LanguageProvider>...</LanguageProvider></MemoryRouter>` (use `['/vi']` for Vietnamese) so `useTranslation()` works.

- File test đặt cạnh code dưới dạng `*.test.ts` / `*.test.tsx`.
- Cấu hình nằm trong khối `test` của `vite.config.ts`; setup chung là `src/test/setup.ts`.
- Test component render React bằng Testing Library; locale lấy từ URL, nên bọc UI trong `<MemoryRouter initialEntries={['/']}><LanguageProvider>...</LanguageProvider></MemoryRouter>` (dùng `['/vi']` cho tiếng Việt) để `useTranslation()` hoạt động.

### Coverage / Độ phủ

`pnpm test:coverage` prints a summary table in the terminal and writes a full HTML report to `coverage/unit/`. Open it with:

`pnpm test:coverage` in bảng tóm tắt ở terminal và xuất báo cáo HTML đầy đủ vào `coverage/unit/`. Mở bằng:

```bash
open coverage/unit/index.html
```

> Output layout / Bố cục output: unit coverage lives in `coverage/unit/`, the Playwright report and its artifacts live in `coverage/e2e/` - kept separate so the two suites never share a folder. / coverage unit nằm ở `coverage/unit/`, báo cáo Playwright và artifact nằm ở `coverage/e2e/` - tách riêng nên hai bộ test không bao giờ chung thư mục.

The provider is V8 (`@vitest/coverage-v8`). Source files are included from `src/`; tests, the `src/test/` setup, and `main.tsx` are excluded (see `vite.config.ts`).

Provider là V8 (`@vitest/coverage-v8`). File nguồn được tính từ `src/`; các file test, thư mục setup `src/test/`, và `main.tsx` được loại trừ (xem `vite.config.ts`).

---

## 3. Browser / end-to-end tests / Test browser (end-to-end)

```bash
pnpm test:e2e         # run headless / chạy headless
pnpm test:e2e:ui      # interactive UI mode / chế độ UI tương tác
pnpm test:e2e:report  # open the last HTML report / mở báo cáo HTML gần nhất
```

- Test files live in `e2e/` as `*.spec.ts`.
- Config lives in `playwright.config.ts`. Locally it auto-starts `next dev`; in CI (or with `E2E_PROD=1`) it builds and serves a real production build (`pnpm build && pnpm start`) so tests see prod output and avoid dev's on-demand-compile flakiness.
- Point the tests at an already-running server with `E2E_PORT` (e.g. `E2E_PORT=3000 pnpm test:e2e` reuses a local `next dev`). To run a prod build next to a dev server, use a separate output dir: `NEXT_DIST_DIR=.next-prod pnpm build && NEXT_DIST_DIR=.next-prod pnpm start --port 5174`.
- Only Chromium is configured; add more projects in `playwright.config.ts` if needed.

- File test nằm trong `e2e/` dưới dạng `*.spec.ts`.
- Cấu hình ở `playwright.config.ts`. Ở máy local nó tự khởi động `next dev`; trên CI (hoặc khi đặt `E2E_PROD=1`) nó build và chạy bản production thật (`pnpm build && pnpm start`) để test thấy output prod và tránh lỗi chập chờn do dev biên dịch on-demand.
- Trỏ test vào server đang chạy bằng `E2E_PORT` (vd `E2E_PORT=3000 pnpm test:e2e` dùng lại `next dev` local). Muốn chạy bản prod song song với dev thì build ra thư mục riêng: `NEXT_DIST_DIR=.next-prod pnpm build && NEXT_DIST_DIR=.next-prod pnpm start --port 5174`.
- Chỉ cấu hình Chromium; thêm project khác trong `playwright.config.ts` nếu cần.

---

## 4. What is covered today / Hiện đang phủ những gì

**"Every page works" guarantees / Đảm bảo "mọi trang hoạt động":**

- `pnpm build` (a required CI job) statically prerenders every one of the ~1,400 pages (both locales) via `generateStaticParams` + `dynamicParams=false`, so the build fails if ANY page throws while server-rendering.
- `e2e/pages-smoke.spec.ts` opens one rich live example of every page TYPE in both locales (against a production build) and asserts the page rendered healthily via 5 signals: HTTP < 400, no uncaught page errors (catches hydration mismatches), no same-origin 5xx (catches a broken JS chunk), a real page heading is visible (content, not blank), and the error boundary is NOT shown (detected by a stable `data-testid`). A self-check test fails if any sitemap page type has no smoke test, and a 404 test verifies unknown routes render the NotFound page.

**Đảm bảo "mọi trang hoạt động":**

- `pnpm build` (một job bắt buộc trên CI) prerender tĩnh toàn bộ ~1.400 trang (cả hai ngôn ngữ) qua `generateStaticParams` + `dynamicParams=false`, nên build sẽ hỏng nếu BẤT KỲ trang nào lỗi khi render phía server.
- `e2e/pages-smoke.spec.ts` mở một ví dụ giàu dữ liệu của mỗi LOẠI trang ở cả hai ngôn ngữ (trên bản production) và kiểm tra sức khoẻ trang qua 5 tín hiệu: HTTP < 400, không lỗi JS uncaught (bắt hydration mismatch), không tài nguyên same-origin 5xx (bắt chunk JS hỏng), có heading thật hiện ra (content, không trắng), và error boundary KHÔNG hiện (dò bằng `data-testid` ổn định). Một test self-check sẽ đỏ nếu loại trang nào trong sitemap chưa có smoke, và test 404 kiểm route lạ render trang NotFound.

**Other unit/component tests / Các test unit/component khác:**

- `transliterate.test.ts` - kana to romaji conversion, particle `は` accepting both `ha`/`wa`, sokuon, long vowels.
- `exercise-quiz.test.ts` - the alphabet quiz session logic.
- `course-quiz.test.ts` - answer normalization and lesson quiz generation.
- `exercise-quiz-panel.test.tsx` - the romaji input panel behavior.
- `e2e/homepage.spec.ts` - homepage title/meta branding.
- `e2e/sentence-exercise.spec.ts` - the answer is never auto-revealed; the Show/Hide toggle is the only way to see it.

- `transliterate.test.ts` - chuyển kana sang romaji, trợ từ `は` chấp nhận cả `ha`/`wa`, âm ngắt, trường âm.
- `exercise-quiz.test.ts` - logic phiên quiz bảng chữ cái.
- `course-quiz.test.ts` - chuẩn hóa đáp án và tạo quiz bài học.
- `exercise-quiz-panel.test.tsx` - hành vi panel nhập romaji.
- `e2e/homepage.spec.ts` - tiêu đề/branding meta của trang chủ.
- `e2e/sentence-exercise.spec.ts` - đáp án không bao giờ tự hiện; chỉ nút Show/Hide mới xem được.

---

## 5. Conventions / Quy ước

- Add a unit test next to any new pure helper or hook; add a component test when behavior is observable in the DOM.
- Use Playwright for anything that depends on real CSS/layout (e.g. visibility), since `jsdom` does not apply Emotion/MUI styles.
- Keep new files formatted: `pnpm run check` (typecheck + lint + format) must stay green. Test files follow the same ESLint/Prettier rules as the app.

- Thêm unit test cạnh mỗi helper/hook thuần mới; thêm component test khi hành vi quan sát được trong DOM.
- Dùng Playwright cho những gì phụ thuộc CSS/layout thật (vd: visibility), vì `jsdom` không áp style Emotion/MUI.
- Giữ file mới đúng format: `pnpm run check` (typecheck + lint + format) phải luôn xanh. File test theo cùng quy tắc ESLint/Prettier như app.
