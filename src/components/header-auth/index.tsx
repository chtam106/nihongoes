'use client';

import { useEffect, useRef } from 'react';
import LoginOutlined from '@mui/icons-material/LoginOutlined';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import { Box, IconButton } from '@mui/material';
import { isFlashcardAuthEnabled } from '@/features/auth/api.ts';
import { isFlashcardAuthRoute } from '@/features/auth/flashcard-auth-routes.ts';
import { loginPath } from '@/features/auth/login-path.ts';
import { refreshSession, signOut, useAuth } from '@/features/auth/session.ts';
import { usePathname, useRouter } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { hoverFillNoneSx } from '@/theme/hover.ts';

const SIGN_OUT_GUARD_MS = 400;
const ICON_SLOT_SX = { width: 40, height: 40, flexShrink: 0 };

export function HeaderAuth() {
  const { t } = useTranslation();
  const auth = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const signOutGuardUntil = useRef(0);

  useEffect(() => {
    const sync = () => {
      void refreshSession();
    };

    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        sync();
      }
    };

    window.addEventListener('pageshow', sync);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.removeEventListener('pageshow', sync);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  if (!isFlashcardAuthEnabled()) {
    return null;
  }

  const signedIn = auth.status === 'authenticated' && auth.user !== null;
  const pending = auth.status === 'loading';

  if (pending) {
    return <Box aria-hidden sx={ICON_SLOT_SX} />;
  }

  if (signedIn) {
    return (
      <IconButton
        key="signed-in"
        onPointerDown={(event) => {
          event.preventDefault();
          signOutGuardUntil.current = Date.now() + SIGN_OUT_GUARD_MS;
          void signOut().then(() => {
            if (isFlashcardAuthRoute(pathname)) {
              router.replace('/');
            }
          });
        }}
        aria-label={t('auth.signOut')}
        color="primary"
        sx={hoverFillNoneSx}
      >
        <LogoutOutlined />
      </IconButton>
    );
  }

  return (
    <IconButton
      key="signed-out"
      onClick={() => {
        if (Date.now() < signOutGuardUntil.current) {
          return;
        }

        router.push(loginPath(pathname));
      }}
      aria-label={t('auth.signInTitle')}
      color="primary"
      sx={hoverFillNoneSx}
    >
      <LoginOutlined />
    </IconButton>
  );
}
