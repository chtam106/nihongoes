'use client';

import { type ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import * as Sentry from '@sentry/nextjs';
import AppLayout from '@/components/app-layout';
import { ErrorBoundary } from '@/components/error-boundary';
import { LanguageProvider } from '@/i18n/context.tsx';
import { appTheme } from '@/theme/app-theme.ts';

type ProvidersProps = {
  children: ReactNode;
};

/** Client-side app providers (theme, i18n, error boundary, layout chrome). */
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <LanguageProvider>
        <Sentry.ErrorBoundary>
          <ErrorBoundary>
            <AppLayout>{children}</AppLayout>
          </ErrorBoundary>
        </Sentry.ErrorBoundary>
      </LanguageProvider>
    </ThemeProvider>
  );
}
