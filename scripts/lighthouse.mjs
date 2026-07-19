// One-command Lighthouse check. Audits ONE representative page per route group
// (pages that share a layout + bundle are audited once) and writes an HTML
// report per page plus a summary `index.html` you can open to track scores.
//
// By default it is fully self-contained - it builds a production bundle into a
// throwaway dir and starts a prod server on its own port (so it never touches a
// running `next dev`), audits, then shuts the server down:
//   pnpm lighthouse:mobile         # build + serve + audit (mobile)
//   pnpm lighthouse:desktop        # desktop form factor
//   pnpm lighthouse:mobile --skip-build          # reuse the previous build (faster re-runs)
//   LIGHTHOUSE_URL=http://localhost:3000 pnpm lighthouse:mobile   # audit a running server
//
// Each form factor writes to its own folder so they never overwrite each other:
// `.lighthouse/mobile/` and `.lighthouse/desktop/` (gitignored).

import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const EXTERNAL_URL = process.env.LIGHTHOUSE_URL
  ? process.env.LIGHTHOUSE_URL.replace(/\/+$/, '')
  : null;
const PORT = process.env.LIGHTHOUSE_PORT ?? '3210';
const DIST_DIR = '.next-lighthouse';
const BASE_URL = EXTERNAL_URL ?? `http://localhost:${PORT}`;
const DESKTOP = process.argv.includes('--desktop') || process.env.LIGHTHOUSE_DESKTOP === '1';
const SKIP_BUILD =
  process.argv.includes('--skip-build') || process.env.LIGHTHOUSE_SKIP_BUILD === '1';
const OUT_DIR = path.join('.lighthouse', DESKTOP ? 'desktop' : 'mobile');
const NEXT_BIN = path.join('node_modules', '.bin', 'next');

const CATEGORIES = ['performance', 'accessibility', 'best-practices', 'seo'];

/**
 * One representative path per route group. Similar pages (e.g. every kanji
 * lesson, every alphabet exercise) share the same page component + bundle, so
 * auditing one stands in for the whole group. Add a new group here when a new
 * kind of page is introduced.
 */
const PAGES = [
  { name: 'home', path: '/' },
  { name: 'alphabet-hub', path: '/alphabet' },
  { name: 'alphabet-chart', path: '/alphabet/hiragana' },
  { name: 'alphabet-exercise-hub', path: '/alphabet/exercise' },
  { name: 'alphabet-exercise', path: '/alphabet/exercise/romaji' },
  { name: 'kanji-hub', path: '/kanji' },
  { name: 'kanji-radicals', path: '/kanji/radicals' },
  { name: 'kanji-track', path: '/kanji/grade-1' },
  { name: 'kanji-lesson', path: '/kanji/grade-1/lesson-1' },
  { name: 'kanji-quiz', path: '/kanji/grade-1/lesson-1/quiz' },
  { name: 'kanji-writing', path: '/kanji/grade-1/lesson-1/writing' },
  { name: 'course-level', path: '/n5' },
  { name: 'course-lesson', path: '/n5/lesson-1' },
  { name: 'course-vocabulary', path: '/n5/lesson-1/vocabulary' },
  { name: 'course-grammar', path: '/n5/lesson-1/grammar' },
  { name: 'course-reading', path: '/n5/lesson-1/reading' },
  { name: 'course-listening', path: '/n5/lesson-1/listening' },
  { name: 'course-writing', path: '/n5/lesson-1/writing' }
];

function run(command, args, env) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit', env: { ...process.env, ...env } });
    child.on('error', reject);
    child.on('exit', (code) =>
      code === 0 ? resolve() : reject(new Error(`${command} exited ${code}`))
    );
  });
}

async function reachable(url) {
  try {
    const response = await fetch(url, { redirect: 'manual' });
    return response.status < 500;
  } catch {
    return false;
  }
}

async function waitUntilReachable(url, timeoutMs) {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    if (await reachable(url)) {
      return true;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return false;
}

/** Best-effort kill of whatever is listening on the port (next start forks a child). */
function freePort(port) {
  return new Promise((resolve) => {
    const child = spawn('sh', ['-c', `lsof -ti tcp:${port} | xargs kill -9`], { stdio: 'ignore' });
    child.on('error', () => resolve());
    child.on('exit', () => resolve());
  });
}

function scoreColor(score) {
  if (score >= 90) {
    return '#0cce6b';
  }

  if (score >= 50) {
    return '#ffa400';
  }

  return '#ff4e42';
}

function buildIndexHtml(rows, formFactor, generatedAt) {
  const head = CATEGORIES.map((category) => `<th>${category}</th>`).join('');
  const body = rows
    .map((row) => {
      if (row.skipped) {
        return `<tr><td>${row.name}</td><td><code>${row.path}</code></td><td class="skip" colspan="${CATEGORIES.length + 1}">skipped (${row.skipped})</td></tr>`;
      }

      const cells = CATEGORIES.map((category) => {
        const value = row.scores[category];
        return `<td style="color:${scoreColor(value)};font-weight:600">${value}</td>`;
      }).join('');

      return `<tr><td>${row.name}</td><td><code>${row.path}</code></td>${cells}<td><a href="./${row.file}">report</a></td></tr>`;
    })
    .join('\n');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Lighthouse summary (${formFactor})</title>
<style>
  body { font-family: system-ui, sans-serif; margin: 24px; color: #1a1a1a; }
  h1 { font-size: 1.4rem; margin: 0 0 4px; }
  p.meta { color: #666; margin: 0 0 20px; }
  table { border-collapse: collapse; width: 100%; }
  th, td { text-align: left; padding: 8px 12px; border-bottom: 1px solid #e5e5e5; }
  th { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.04em; color: #666; }
  td code { background: #f4f4f4; padding: 2px 6px; border-radius: 4px; }
  td.skip { color: #999; font-style: italic; }
  tr:hover { background: #fafafa; }
  a { color: #1565c0; }
</style>
</head>
<body>
<h1>Lighthouse summary</h1>
<p class="meta">Form factor: <strong>${formFactor}</strong> &middot; ${BASE_URL} &middot; ${generatedAt}</p>
<table>
<thead><tr><th>Group</th><th>Path</th>${head}<th>Report</th></tr></thead>
<tbody>
${body}
</tbody>
</table>
</body>
</html>
`;
}

async function audit() {
  await mkdir(OUT_DIR, { recursive: true });

  const formFactor = DESKTOP ? 'desktop' : 'mobile';
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu']
  });

  const options = {
    port: chrome.port,
    output: 'html',
    logLevel: 'error',
    onlyCategories: CATEGORIES,
    formFactor,
    screenEmulation: DESKTOP
      ? { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false }
      : { mobile: true, width: 412, height: 823, deviceScaleFactor: 1.75, disabled: false },
    throttling: DESKTOP
      ? { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1 }
      : { rttMs: 150, throughputKbps: 1638.4, cpuSlowdownMultiplier: 4 }
  };

  const rows = [];

  try {
    for (const page of PAGES) {
      const url = `${BASE_URL}${page.path}`;

      if (!(await reachable(url))) {
        console.warn(`- ${page.name} (${page.path}): skipped, not reachable`);
        rows.push({ ...page, skipped: 'not reachable' });
        continue;
      }

      const runner = await lighthouse(url, options);

      if (!runner) {
        rows.push({ ...page, skipped: 'no result' });
        continue;
      }

      const file = `${page.name}.html`;
      await writeFile(path.join(OUT_DIR, file), runner.report);

      const scores = Object.fromEntries(
        CATEGORIES.map((category) => [
          category,
          Math.round((runner.lhr.categories[category]?.score ?? 0) * 100)
        ])
      );

      rows.push({ ...page, file, scores });
      console.log(
        `- ${page.name}: ${CATEGORIES.map((category) => `${category}=${scores[category]}`).join('  ')}`
      );
    }
  } finally {
    await chrome.kill();
  }

  const indexPath = path.join(OUT_DIR, 'index.html');
  await writeFile(indexPath, buildIndexHtml(rows, formFactor, new Date().toISOString()));
  console.log(`\nSummary: ${path.resolve(indexPath)}`);
}

async function main() {
  // An external server was given - just audit it, do not build/serve/teardown.
  if (EXTERNAL_URL) {
    if (!(await reachable(BASE_URL))) {
      console.error(`Cannot reach ${BASE_URL} (from LIGHTHOUSE_URL).`);
      process.exit(1);
    }

    await audit();
    return;
  }

  if (!SKIP_BUILD) {
    console.log(`Building production bundle into ${DIST_DIR} (sampled pages only) ...`);
    // LIGHTHOUSE_SAMPLE trims generateStaticParams to just the audited
    // representative pages (see src/i18n/route-helpers.ts), so this builds ~20
    // pages, not ~1400. It also points canonical/hreflang at the local origin
    // (via src/constants/site.ts + LIGHTHOUSE_PORT) so Lighthouse's SEO canonical
    // audit passes instead of flagging the production canonical on localhost.
    await run(NEXT_BIN, ['build'], {
      NEXT_DIST_DIR: DIST_DIR,
      LIGHTHOUSE_SAMPLE: '1',
      LIGHTHOUSE_PORT: PORT
    });
  }

  console.log(`Starting prod server on port ${PORT} ...`);
  await freePort(PORT);
  const server = spawn(NEXT_BIN, ['start', '--port', PORT], {
    stdio: 'ignore',
    env: { ...process.env, NEXT_DIST_DIR: DIST_DIR }
  });

  try {
    if (!(await waitUntilReachable(BASE_URL, 60000))) {
      throw new Error(`Server did not become reachable at ${BASE_URL} within 60s`);
    }

    await audit();
  } finally {
    server.kill();
    await freePort(PORT);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
