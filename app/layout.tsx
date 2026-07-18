import { type ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { Providers } from '@/components/providers';
import { SITE_NAME, SITE_URL } from '@/constants/site.ts';
import '@/index.css';

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
