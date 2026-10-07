import { Box, Stack, Typography } from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { alpha } from '@mui/material/styles';
import { routes } from '@/constants/routes.ts';
import { SITE_NAME } from '@/constants/site.ts';

// The brand slogan stays in English regardless of the selected locale.
const SLOGAN = 'Learn Japanese';
// Light sakura pink the wordmark gradient fades into from `primary.main`.
const BRAND_GRADIENT_END = '#F08BAE';

type BrandProps = {
  showTagline?: boolean;
  showLogo?: boolean;
};

export function Brand({ showTagline = false, showLogo = true }: BrandProps) {
  return (
    <Stack
      component={RouterLink}
      to={routes.home}
      direction="row"
      spacing={1.25}
      sx={{
        alignItems: 'center',
        minWidth: 0,
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      {showLogo && (
        <Box
          aria-hidden
          sx={{
            width: 38,
            height: 38,
            borderRadius: 2,
            flexShrink: 0,
            display: 'grid',
            placeItems: 'center',
            color: 'primary.main',
            backgroundColor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.mode === 'light' ? 0.12 : 0.24)
          }}
        >
          <Typography
            component="span"
            lang="ja"
            sx={{ fontSize: 22, fontWeight: 700, lineHeight: 1 }}
          >
            あ
          </Typography>
        </Box>
      )}

      <Box sx={{ minWidth: 0 }}>
        <Typography
          component="span"
          sx={{
            display: 'block',
            fontWeight: 700,
            fontSize: '1.2rem',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            backgroundImage: (theme) =>
              `linear-gradient(90deg, ${theme.palette.primary.main}, ${BRAND_GRADIENT_END})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            // The gradient only paints inside the box; pad it so descenders (g) aren't cut.
            pb: '0.15em',
            mb: '-0.15em'
          }}
        >
          {SITE_NAME}
        </Typography>
        {showTagline && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', lineHeight: 1.2 }}
            noWrap
          >
            {SLOGAN}
          </Typography>
        )}
      </Box>
    </Stack>
  );
}
