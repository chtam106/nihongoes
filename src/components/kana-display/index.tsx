import { Typography } from '@mui/material';
import type { AlphabetCell } from '@/constants/alphabet-charts.ts';
import { YoonGlyph } from '@/components/yoon-glyph';
import { FONT_FAMILY_JP } from '@/theme/fonts.ts';

type KanaDisplayProps = {
  cell: AlphabetCell;
  variant?: 'prompt' | 'option' | 'chart';
};

const kanaFontSx = { fontFamily: FONT_FAMILY_JP, fontWeight: 400 } as const;

export function KanaDisplay({ cell, variant = 'option' }: KanaDisplayProps) {
  if (cell.yoonBase && cell.yoonSuffix) {
    const size = variant === 'prompt' ? 'lg' : variant === 'chart' ? 'responsive' : 'sm';

    return <YoonGlyph base={cell.yoonBase} suffix={cell.yoonSuffix} size={size} />;
  }

  if (variant === 'prompt') {
    return (
      <Typography variant="h2" component="span" sx={{ ...kanaFontSx, lineHeight: 1.1 }}>
        {cell.char}
      </Typography>
    );
  }

  if (variant === 'chart') {
    // Small on mobile, larger on desktop via CSS breakpoints (matches the old
    // h6/h4 sizes) - no useMediaQuery, so no hydration size flash.
    return (
      <Typography
        component="span"
        sx={{ ...kanaFontSx, fontSize: { xs: '1.25rem', md: '2.125rem' }, lineHeight: 1.1 }}
      >
        {cell.char}
      </Typography>
    );
  }

  return (
    <Typography component="span" sx={{ ...kanaFontSx, fontSize: '1.5rem', lineHeight: 1.1 }}>
      {cell.char}
    </Typography>
  );
}
