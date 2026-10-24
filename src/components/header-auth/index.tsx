'use client';

import { Box, ButtonBase } from '@mui/material';
import { isFlashcardAuthEnabled } from '@/features/auth/api.ts';
import { isFlashcardAuthRoute } from '@/features/auth/flashcard-auth-routes.ts';
import { loginPath } from '@/features/auth/login-path.ts';
import { readAuthSnapshot, refreshSession, signOut, useAuth } from '@/features/auth/session.ts';
import { usePathname, useRouter } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { focusVisibleSx } from '@/theme/focus.ts';

const headerAuthTextSx = {
  display: 'inline-flex',
  alignItems: 'center',
  p: 0,
  m: 0,
  minWidth: 0,
  minHeight: 0,
  bgcolor: 'transparent',
  color: 'text.secondary',
  fontSize: '0.75rem',
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: 0.4,
  textTransform: 'none' as const,
  '&:hover': {
    bgcolor: 'transparent',
    color: 'primary.main'
  }
};

export function HeaderAuth() {
  const { t } = useTranslation();
  const auth = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  if (!isFlashcardAuthEnabled()) {
    return null;
  }

  const signedIn = auth.status === 'authenticated' && auth.user !== null;
  const pending = auth.status === 'loading';

  if (pending) {
    return <Box aria-hidden sx={{ height: 40, minWidth: '4.5rem', flexShrink: 0 }} />;
  }

  if (signedIn) {
    return (
      <ButtonBase
        onClick={() => {
          void signOut().then(() => {
            if (isFlashcardAuthRoute(pathname)) {
              router.replace('/');
            }
          });
        }}
        aria-label={t('auth.signOut')}
        sx={(theme) => ({
          ...headerAuthTextSx,
          '&.Mui-focusVisible': focusVisibleSx(theme)
        })}
      >
        {t('auth.signOut')}
      </ButtonBase>
    );
  }

  return (
    <ButtonBase
      onClick={() => {
        void refreshSession().then(() => {
          if (readAuthSnapshot().status === 'authenticated') {
            return;
          }

          router.push(loginPath(pathname));
        });
      }}
      aria-label={t('auth.signInTitle')}
      sx={(theme) => ({
        ...headerAuthTextSx,
        '&.Mui-focusVisible': focusVisibleSx(theme)
      })}
    >
      {t('auth.signInTitle')}
    </ButtonBase>
  );
}
