'use client';

import { useRef } from 'react';
import LoginOutlined from '@mui/icons-material/LoginOutlined';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import { IconButton } from '@mui/material';
import { isFlashcardAuthEnabled } from '@/features/auth/api.ts';
import { isFlashcardAuthRoute } from '@/features/auth/flashcard-auth-routes.ts';
import { loginPath } from '@/features/auth/login-path.ts';
import { signOut, useAuth } from '@/features/auth/session.ts';
import { usePathname, useRouter } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { hoverFillNoneSx } from '@/theme/hover.ts';

const SIGN_OUT_GUARD_MS = 400;

export function HeaderAuth() {
  const { t } = useTranslation();
  const auth = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const signOutGuardUntil = useRef(0);

  if (!isFlashcardAuthEnabled() || !isFlashcardAuthRoute(pathname)) {
    return null;
  }

  const signedIn = auth.status === 'authenticated';
  const pending = auth.status === 'loading';

  if (signedIn) {
    return (
      <IconButton
        onPointerDown={(event) => {
          event.preventDefault();
          signOutGuardUntil.current = Date.now() + SIGN_OUT_GUARD_MS;
          void signOut().then(() => {
            router.replace('/');
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
      onClick={() => {
        if (Date.now() < signOutGuardUntil.current) {
          return;
        }

        router.push(loginPath(pathname));
      }}
      aria-label={t('auth.signInTitle')}
      color="primary"
      disabled={pending}
      sx={hoverFillNoneSx}
    >
      <LoginOutlined />
    </IconButton>
  );
}
