'use client';

import { useEffect, useSyncExternalStore, type ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';
import { PageContainer } from '@/components/page-container';
import { isFlashcardAuthEnabled } from '@/features/auth/api.ts';
import { isFlashcardAuthRoute } from '@/features/auth/flashcard-auth-routes.ts';
import { loginPath, safeReturnTo } from '@/features/auth/login-path.ts';
import { useAuth } from '@/features/auth/session.ts';
import {
  getCollectionSnapshot,
  getServerCollectionSnapshot,
  subscribeCollections
} from '@/features/flashcards/collection-store.ts';
import { usePathname, useRouter } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';

type AuthGateProps = {
  children: ReactNode;
};

export function FlashcardAuthGate({ children }: AuthGateProps) {
  const { t } = useTranslation();
  const auth = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const collections = useSyncExternalStore(
    subscribeCollections,
    getCollectionSnapshot,
    getServerCollectionSnapshot
  );

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

    if (!isFlashcardAuthRoute(pathname)) {
      return;
    }

    const href = typeof window !== 'undefined' ? window.location.href : null;
    const returnTo = safeReturnTo(href, '/flashcards');
    let authReason: string | null = auth.authFailureReason;

    if (href) {
      try {
        authReason = new URL(href).searchParams.get('auth_reason') ?? authReason;
      } catch {
        authReason = auth.authFailureReason;
      }
    }

    router.replace(loginPath(returnTo, authReason));
  }, [auth.authFailureReason, auth.status, pathname, router]);

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
