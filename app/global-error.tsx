'use client';

import { useEffect, type CSSProperties } from 'react';
import * as Sentry from '@sentry/nextjs';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

// This boundary replaces the whole document (the root layout crashed), so it
// cannot use MUI/theme/i18n - the providers are gone, and reusing them risks the
// fallback crashing for the same reason. So it is intentionally self-contained
// with plain markup + inline styles that MIRROR the themed ErrorFallbackContent (default
// MUI palette: primary #1976d2, error #d32f2f, text 0.87/0.6 alpha; uppercase
// buttons; Noto Sans with a sans-serif fallback).
const FONT_FAMILY =
  '"Noto Sans Variable", "Noto Sans", "Noto Sans JP Variable", "Noto Sans JP", sans-serif';

const containedButton: CSSProperties = {
  padding: '8px 22px',
  borderRadius: 4,
  border: 'none',
  background: '#1976d2',
  color: '#fff',
  fontFamily: 'inherit',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 1.75,
  letterSpacing: '0.02857em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  boxShadow:
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)'
};

export default function GlobalError({ error }: GlobalErrorProps) {
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
            gap: 20,
            padding: 24,
            textAlign: 'center',
            fontFamily: FONT_FAMILY,
            color: 'rgba(0,0,0,0.87)',
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
              background: 'rgba(211,47,47,0.12)'
            }}
          >
            <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 13.5c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5M7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zm4.17-10C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m4.18-12.24-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06z" />
            </svg>
          </div>

          <div>
            <h1
              style={{
                fontSize: '2.125rem',
                fontWeight: 600,
                lineHeight: 1.235,
                margin: '0 0 8px'
              }}
            >
              Oops, something went wrong
            </h1>
            <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.5, color: 'rgba(0,0,0,0.6)' }}>
              An unexpected error occurred. Please reload the page to continue.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: 12
            }}
          >
            <button type="button" onClick={() => window.location.reload()} style={containedButton}>
              Reload page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
