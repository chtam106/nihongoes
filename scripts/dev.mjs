#!/usr/bin/env node
/**
 * `pnpm dev`: run `next dev` and open the site in the default browser once the
 * server answers. Set NO_OPEN=1 (or run in CI) to skip the browser. Extra
 * arguments are passed to `next dev` (e.g. `pnpm dev --port 3001`).
 */
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const nextBin = require.resolve('next/dist/bin/next');
const shouldOpen = !process.env.CI && process.env.NO_OPEN !== '1';
const LOCAL_URL = /Local:\s+(https?:\/\/\S+)/;
const POLL_MS = 500;
const POLL_LIMIT_MS = 60_000;

function openBrowser(url) {
  const [command, args] =
    process.platform === 'win32'
      ? ['cmd', ['/c', 'start', '""', url]]
      : process.platform === 'darwin'
        ? ['open', [url]]
        : ['xdg-open', [url]];

  // `start` takes a window title first, hence the empty "" argument. Verbatim
  // arguments keep Node from escaping those quotes.
  spawn(command, args, {
    stdio: 'ignore',
    detached: true,
    windowsVerbatimArguments: process.platform === 'win32'
  }).unref();
}

const child = spawn(process.execPath, [nextBin, 'dev', ...process.argv.slice(2)], {
  stdio: ['inherit', 'pipe', 'inherit'],
  env: process.env
});

let childAlive = true;
let urlSeen = !shouldOpen;

/**
 * Next prints its URL (and "Ready") even when it then quits, e.g. because a dev
 * server already runs in this folder. Open the browser only once the URL
 * actually answers, and never after the server has exited.
 */
async function openWhenServing(url) {
  const deadline = Date.now() + POLL_LIMIT_MS;

  while (childAlive && Date.now() < deadline) {
    try {
      await fetch(url, { method: 'HEAD' });

      if (childAlive) {
        openBrowser(url);
      }

      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, POLL_MS));
    }
  }
}

child.stdout.on('data', (chunk) => {
  process.stdout.write(chunk);

  if (urlSeen) {
    return;
  }

  const match = LOCAL_URL.exec(chunk.toString());

  if (match) {
    urlSeen = true;
    void openWhenServing(match[1]);
  }
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => child.kill(signal));
}

child.on('exit', (code) => {
  childAlive = false;
  process.exit(code ?? 0);
});
