import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import { Box, Button, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useTranslation } from '@/i18n/use-translation.ts';
import AppLayout from '@/components/app-layout';

type ErrorFallbackContentProps = {
  /** When provided, shows a "Try again" button that re-renders in place. */
  onReset?: () => void;
};

/**
 * The error screen body (icon + message + actions) WITHOUT app chrome. Use this
 * where the surrounding `AppLayout` is already present (e.g. Next's route-level
 * `error.tsx`, which renders inside the root layout). Use `ErrorFallback` when the
 * chrome is NOT present (the top-level client error boundary).
 */
export function ErrorFallbackContent({ onReset }: ErrorFallbackContentProps) {
  const { t } = useTranslation();

  return (
    <Box
      data-testid="error-boundary"
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        py: 6,
        px: 2
      }}
    >
      <Stack
        spacing={2.5}
        sx={{
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          maxWidth: 520,
          mx: 'auto'
        }}
      >
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'error.main',
            bgcolor: (theme) => alpha(theme.palette.error.main, 0.12)
          }}
        >
          <SentimentVeryDissatisfiedOutlinedIcon sx={{ fontSize: 38 }} />
        </Box>

        <Box>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 1 }}>
            {t('errorBoundary.title')}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t('errorBoundary.body')}
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={1.5}
          useFlexGap
          sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {onReset && (
            <Button size="large" variant="contained" onClick={onReset}>
              {t('errorBoundary.tryAgain')}
            </Button>
          )}
          <Button
            size="large"
            variant={onReset ? 'outlined' : 'contained'}
            onClick={() => window.location.reload()}
          >
            {t('errorBoundary.reload')}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export function ErrorFallback() {
  return (
    <AppLayout>
      <ErrorFallbackContent />
    </AppLayout>
  );
}
