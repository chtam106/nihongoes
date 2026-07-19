import { type ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { SITE_NAME, SITE_URL } from '@/constants/site.ts';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  icons: {
    icon: [
      { url: '/favicon.ico?v=20260718', sizes: 'any' },
      { url: '/favicon-32.png?v=20260718', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.png?v=20260718', type: 'image/png', sizes: '512x512' }
    ],
    shortcut: '/favicon.ico?v=20260718',
    apple: '/apple-touch-icon.png?v=20260718'
  },
  manifest: '/site.webmanifest'
};

export const viewport: Viewport = {
  themeColor: '#faf7f0'
};

/**
 * Passthrough root layout. The document (`<html>`/`<body>`) + providers live in
 * `app/[lang]/layout.tsx` where the locale is known, so `<html lang>` is correct
 * server-side. This root only carries global metadata.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
