import path from 'node:path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// The app is built with Next.js; this config only powers Vitest (and the
// Storybook Vite builder) for unit/component tests.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    // MUI ships some directory-style ESM imports (e.g. react-transition-group)
    // that Vitest's native resolver chokes on; inline them so Vite transforms them.
    server: {
      deps: {
        inline: [/@mui\//, 'react-transition-group']
      }
    },
    // Unit/component tests live next to the code as *.test.ts(x); the Playwright
    // browser tests in e2e/ run with their own runner and must be excluded here.
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: ['node_modules', 'dist', 'out', '.next', 'e2e'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './coverage/unit',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.test.{ts,tsx}', 'src/test/**', 'src/**/*.d.ts', 'src/vite-env.d.ts']
    }
  }
});
