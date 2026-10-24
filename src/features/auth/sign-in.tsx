'use client';

import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';
import { startGoogleSignIn } from '@/features/auth/session.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

type GoogleSignInButtonProps = {
  returnTo?: string;
};

export function GoogleSignInButton({ returnTo }: GoogleSignInButtonProps) {
  const { t } = useTranslation();

  return (
    <Button
      variant="contained"
      startIcon={<GoogleIcon />}
      onClick={() => startGoogleSignIn(returnTo)}
      sx={{ textTransform: 'none' }}
    >
      {t('auth.signInGoogle')}
    </Button>
  );
}
