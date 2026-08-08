'use client';

import { ErrorFallbackContent } from '@/components/error-fallback';

/**
 * Route-level error boundary for all localized pages. Next renders this in place
 * of the page content when a page (or its descendants) throws while rendering,
 * so the shared app chrome (header, nav, footer) stays mounted. Handler/async
 * errors are NOT caught here - handle those where they occur.
 */
export default function Error() {
  return <ErrorFallbackContent />;
}
