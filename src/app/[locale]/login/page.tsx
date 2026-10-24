import { Suspense } from 'react';
import { LOGIN_PATH } from '@/features/auth/login-path.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { localeParams } from '@/i18n/route-helpers.ts';
import LoginPage from './_components/login-page.tsx';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata(LOGIN_PATH);

export default function Page() {
  return (
    <Suspense fallback={null}>
      <LoginPage />
    </Suspense>
  );
}
