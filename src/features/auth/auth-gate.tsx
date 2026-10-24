'use client';

import { useEffect, type ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';
import { PageContainer } from '@/components/page-container';
import { isFlashcardAuthEnabled } from '@/features/auth/api.ts';
import { loginPath, safeReturnTo } from '@/features/auth/login-path.ts';
import { useAuth } from '@/features/auth/session.ts';
import { getCollectionSnapshot } from '@/features/flashcards/collection-store.ts';
import { useRouter } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';

type AuthGateProps = {
  children: ReactNode;
};

export function FlashcardAuthGate({ children }: AuthGateProps) {
  const { t } = useTranslation();
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isFlashcardAuthEnabled()) {
      return;
    }

    if (auth.status === 'loading') {
      return;
    }

    if (auth.status === 'authenticated') {
      return;
    }

    const href = typeof window !== 'undefined' ? window.location.href : null;
    const returnTo = safeReturnTo(href, '/flashcards');
    let authReason: string | null = null;

    if (href) {
      try {
        authReason = new URL(href).searchParams.get('auth_reason');
      } catch {
        authReason = null;
      }
    }

    router.replace(loginPath(returnTo, authReason));
  }, [auth.status, router]);

  if (!isFlashcardAuthEnabled()) {
    return children;
  }

  if (auth.status === 'loading') {
    return (
      <PageContainer bottomGutter>
        <Typography variant="body1" color="text.secondary">
          {t('auth.loading')}
        </Typography>
      </PageContainer>
    );
  }

  if (auth.status !== 'authenticated') {
    return null;
  }

  const collections = getCollectionSnapshot();

  if (collections.status === 'loading' || collections.userId !== auth.user?.id) {
    return (
      <PageContainer bottomGutter>
        <Typography variant="body1" color="text.secondary">
          {t('auth.loadingCollections')}
        </Typography>
      </PageContainer>
    );
  }

  if (collections.status === 'error') {
    return (
      <PageContainer bottomGutter>
        <Stack spacing={1}>
          <Typography variant="body1" color="text.secondary">
            {t('auth.loadCollectionsError')}
          </Typography>
        </Stack>
      </PageContainer>
    );
  }

  return children;
}
