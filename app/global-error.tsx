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
