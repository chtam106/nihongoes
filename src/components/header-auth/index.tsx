'use client';

import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import LoginOutlined from '@mui/icons-material/LoginOutlined';
import { IconButton } from '@mui/material';
import { LocaleLink } from '@/components/locale-link';
import { isFlashcardAuthEnabled } from '@/features/auth/api.ts';
import { loginPath } from '@/features/auth/login-path.ts';
import { signOut, useAuth } from '@/features/auth/session.ts';
import { usePathname } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { hoverFillNoneSx } from '@/theme/hover.ts';

export function HeaderAuth() {
  const { t } = useTranslation();
  const auth = useAuth();
  const pathname = usePathname();

  if (!isFlashcardAuthEnabled()) {
    return null;
  }

  const signedIn = auth.status === 'authenticated';
  const pending = auth.status === 'loading';

  if (signedIn) {
    return (
      <IconButton
        key="signed-in"
        onClick={() => void signOut()}
        aria-label={t('auth.signOut')}
        color="primary"
        sx={hoverFillNoneSx}
      >
        <AccountCircleOutlined />
      </IconButton>
    );
  }

  return (
    <IconButton
      key="signed-out"
      component={LocaleLink}
      to={loginPath(pathname)}
      aria-label={t('auth.signInTitle')}
      color="primary"
      disabled={pending}
      sx={hoverFillNoneSx}
    >
      <LoginOutlined />
    </IconButton>
  );
}
