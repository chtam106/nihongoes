'use client';

import { type ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import * as Sentry from '@sentry/nextjs';
import AppLayout from '@/components/app-layout';
import { ErrorFallbackContent } from '@/components/error-fallback';
import { LanguageProvider } from '@/i18n/context.tsx';
import { appTheme } from '@/theme/app-theme.ts';

type ProvidersProps = {
  children: ReactNode;
};

/**
 * Client-side app providers (theme, i18n, layout chrome).
 *
 * Error handling is layered on Next's own boundaries: page-content render errors
 * are caught by `app/[lang]/error.tsx` (keeps the chrome), and a crash in the root
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
      <LanguageProvider>
        <AppLayout>
          <Sentry.ErrorBoundary fallback={<ErrorFallbackContent />}>
            {children}
          </Sentry.ErrorBoundary>
        </AppLayout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
