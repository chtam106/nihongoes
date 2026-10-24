'use client';

import LoginOutlined from '@mui/icons-material/LoginOutlined';
import { Box, IconButton } from '@mui/material';
import { isFlashcardAuthEnabled } from '@/features/auth/api.ts';
import { isFlashcardAuthRoute } from '@/features/auth/flashcard-auth-routes.ts';
import { loginPath } from '@/features/auth/login-path.ts';
import { readAuthSnapshot, refreshSession, signOut, useAuth } from '@/features/auth/session.ts';
import { usePathname, useRouter } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { hoverFillNoneSx } from '@/theme/hover.ts';

const ICON_SLOT_SX = { width: 40, height: 40, flexShrink: 0 };

/** Same glyph: sign-in arrow points right, sign-out mirrored to point left. */
const ARROW_IN_SX = { transform: 'scaleX(1)' };
const ARROW_OUT_SX = { transform: 'scaleX(-1)' };

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
    return <Box aria-hidden sx={ICON_SLOT_SX} />;
  }

  if (signedIn) {
    return (
      <IconButton
        onClick={() => {
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
        <LoginOutlined sx={ARROW_OUT_SX} />
      </IconButton>
    );
  }

  return (
    <IconButton
      onClick={() => {
        void refreshSession().then(() => {
          if (readAuthSnapshot().status === 'authenticated') {
            return;
          }

          router.push(loginPath(pathname));
        });
      }}
      aria-label={t('auth.signInTitle')}
      color="primary"
      sx={hoverFillNoneSx}
    >
      <LoginOutlined sx={ARROW_IN_SX} />
    </IconButton>
  );
}
