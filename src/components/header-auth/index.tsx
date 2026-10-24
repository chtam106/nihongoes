'use client';

import LoginOutlined from '@mui/icons-material/LoginOutlined';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import { Box, IconButton } from '@mui/material';
import { LocaleLink } from '@/components/locale-link';
import { isFlashcardAuthEnabled } from '@/features/auth/api.ts';
import { loginPath } from '@/features/auth/login-path.ts';
import { signOut, useAuth } from '@/features/auth/session.ts';
import { usePathname } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { hoverFillNoneSx } from '@/theme/hover.ts';

const ICON_SLOT_SX = { width: 40, height: 40, flexShrink: 0 };

export function HeaderAuth() {
  const { t } = useTranslation();
  const auth = useAuth();
  const pathname = usePathname();

  if (!isFlashcardAuthEnabled()) {
    return null;
  }

  if (auth.status === 'loading') {
    return <Box aria-hidden sx={ICON_SLOT_SX} />;
  }

  if (auth.status === 'authenticated') {
    return (
      <IconButton
        onClick={() => void signOut()}
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
      component={LocaleLink}
      to={loginPath(pathname)}
      aria-label={t('auth.signInTitle')}
      color="primary"
      sx={hoverFillNoneSx}
    >
      <LoginOutlined />
    </IconButton>
  );
}
