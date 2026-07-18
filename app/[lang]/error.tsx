'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import { ErrorFallbackContent } from '@/components/error-fallback';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Route-level error boundary for all localized pages. Next renders this in place
 * of the page content when a page (or its descendants) throws while rendering,
 * so the shared app chrome (header, nav, footer) stays mounted. `reset` re-renders
 * the segment in place ("Try again"). Handler/async errors are NOT caught here -
 * handle those where they occur; Sentry still reports everything.
 */
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return <ErrorFallbackContent onReset={reset} />;
}
