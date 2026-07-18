'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Last-resort boundary for errors thrown in the ROOT layout itself (which the
 * route-level `error.tsx` cannot catch, since it lives inside that layout). It
 * replaces the whole document, so it must render its own `<html>`/`<body>` and
 * cannot use the MUI theme or i18n context (the providers are gone here) - hence
 * plain markup and English-only copy. Only active in production.
 */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <div
          data-testid="error-boundary"
          style={{
            minHeight: '100svh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            padding: 24,
            textAlign: 'center',
            fontFamily: 'system-ui, sans-serif',
            color: '#08060d',
            background: '#fff'
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#d32f2f',
              background: 'rgba(211, 47, 47, 0.12)'
            }}
          >
            <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 13.5c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5M7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zm4.17-10C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m4.18-12.24-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06z" />
            </svg>
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 600, margin: 0 }}>Oops, something went wrong</h1>
          <p style={{ margin: 0, color: '#6b6375' }}>
            An unexpected error occurred. Please reload the page to continue.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                padding: '10px 20px',
                borderRadius: 8,
                border: 'none',
                background: '#aa3bff',
                color: '#fff',
                fontSize: 16,
                cursor: 'pointer'
              }}
            >
              Try again
            </button>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                padding: '10px 20px',
                borderRadius: 8,
                border: '1px solid #e5e4e7',
                background: 'transparent',
                color: '#08060d',
                fontSize: 16,
                cursor: 'pointer'
              }}
            >
              Reload page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
