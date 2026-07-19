'use client';

import { type ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import * as Sentry from '@sentry/nextjs';
import AppLayout from '@/components/app-layout';
import { ErrorFallbackContent } from '@/components/error-fallback';
import { appTheme } from '@/theme/app-theme.ts';

type ProvidersProps = {
  children: ReactNode;
};

/**
 * Client-side app providers (theme + layout chrome). The i18n provider
 * (`NextIntlClientProvider`) is set up server-side in `app/[locale]/layout.tsx`
 * above this, so these providers only own the MUI theme and chrome.
 *
 * Error handling is layered on Next's own boundaries: page-content render errors
 * are caught by `app/[locale]/error.tsx` (keeps the chrome), and a crash in the root
 * layout / these providers is caught by `app/global-error.tsx`. `Sentry.ErrorBoundary`
 * here is the net for render errors in the app CHROME (`AppLayout`): it reports to
 * Sentry and shows a chrome-less fallback (so it never re-renders the crashed
 * chrome). Without a `fallback` it would render `null` (a blank page), so one is
 * always provided.
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <AppLayout>
        <Sentry.ErrorBoundary fallback={<ErrorFallbackContent />}>{children}</Sentry.ErrorBoundary>
      </AppLayout>
    </ThemeProvider>
  );
}
