import { Box, Typography } from '@mui/material';
import { FONT_FAMILY_JP } from '@/theme/fonts.ts';

/** A fixed size or a responsive `{ breakpoint: value }` map for `sx`. */
type ResponsiveSize = string | Record<string, string>;

/**
 * Glyph sizing:
 * - `sm`: quiz options. `md`: desktop chart. `lg`: quiz prompt.
 * - `responsive`: chart cells - small on mobile, larger on desktop, driven by
 *   CSS breakpoints (no `useMediaQuery`, so no hydration flash).
 */
export type YoonGlyphSize = 'sm' | 'md' | 'lg' | 'responsive';

type YoonGlyphProps = {
  base: string;
  suffix: string;
  size?: YoonGlyphSize;
};

type Metrics = {
  baseFontSize: ResponsiveSize;
  suffixSize: ResponsiveSize;
  suffixMb: ResponsiveSize;
};

const METRICS: Record<YoonGlyphSize, Metrics> = {
  sm: { baseFontSize: '1.25rem', suffixSize: '0.55rem', suffixMb: '0.08em' },
  md: { baseFontSize: '2.125rem', suffixSize: '0.95rem', suffixMb: '0.12em' },
  lg: { baseFontSize: '3.75rem', suffixSize: '1.35rem', suffixMb: '0.18em' },
  responsive: {
    baseFontSize: { xs: '1.25rem', md: '2.125rem' },
    suffixSize: { xs: '0.55rem', md: '0.95rem' },
    suffixMb: { xs: '0.08em', md: '0.12em' }
  }
};

const kanaFontSx = { fontFamily: FONT_FAMILY_JP, fontWeight: 400, lineHeight: 1 } as const;

export function YoonGlyph({ base, suffix, size = 'md' }: YoonGlyphProps) {
  const metrics = METRICS[size];

  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        lineHeight: 1,
        fontFamily: FONT_FAMILY_JP
      }}
    >
      <Typography component="span" sx={{ ...kanaFontSx, fontSize: metrics.baseFontSize }}>
        {base}
      </Typography>
      <Typography
        component="span"
        sx={{
          ...kanaFontSx,
          fontSize: metrics.suffixSize,
          mb: metrics.suffixMb,
          ml: '-0.06em'
        }}
      >
        {suffix}
      </Typography>
    </Box>
  );
}
