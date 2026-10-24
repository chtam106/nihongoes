'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Stack, Typography } from '@mui/material';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { FLASHCARDS_PATH } from '@/constants/courses/levels.ts';
import { GoogleSignInButton } from '@/features/auth/sign-in.tsx';
import { RETURN_TO_QUERY, safeReturnTo } from '@/features/auth/login-path.ts';
import { useAuth } from '@/features/auth/session.ts';
import { useRouter } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';

export function LoginPage() {
  const { t } = useTranslation();
  const auth = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = safeReturnTo(searchParams.get(RETURN_TO_QUERY), FLASHCARDS_PATH);

  useEffect(() => {
    if (auth.status === 'authenticated') {
      router.replace(returnTo);
    }
  }, [auth.status, returnTo, router]);

  return (
    <PageContainer bottomGutter>
      <Stack spacing={2}>
        <Heading component="h1">{t('auth.signInTitle')}</Heading>
        <Typography variant="body1" color="text.secondary">
          {t('auth.signInBody')}
        </Typography>
        {auth.notice === 'failed' && (
          <Typography variant="body1" color="text.secondary">
            {t('auth.signInFailed')}
          </Typography>
        )}
        {auth.status === 'error' && (
          <Typography variant="body1" color="text.secondary">
            {t('auth.signInUnavailable')}
          </Typography>
        )}
        {auth.status !== 'loading' && auth.status !== 'authenticated' && (
          <GoogleSignInButton returnTo={returnTo} />
        )}
      </Stack>
    </PageContainer>
  );
}

export default LoginPage;
