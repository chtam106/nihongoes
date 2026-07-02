import { Typography, type TypographyProps } from '@mui/material';
import { useTheme, type Theme } from '@mui/material/styles';
import {
  GRAMMAR_HIGHLIGHT_PALETTE,
  splitHighlightedText,
  type HighlightTerm
} from '@/utils/grammar-highlight.ts';
import { formatJapaneseDisplay } from '@/utils/japanese-display.ts';
import { FONT_FAMILY_JP } from '@/theme/fonts.ts';

type GrammarHighlightedTextProps = {
  text: string;
  /** Terms to color, in palette order. A nested array = alternatives sharing one color. */
  highlights: HighlightTerm[];
  /** Words to protect from highlighting (e.g. は inside はたち). */
  exclude?: string[];
  /** Shift palette colors by this many slots (so a sub-block starts on new colors). */
  colorOffset?: number;
} & TypographyProps;

function resolvePaletteColor(theme: Theme, index: number) {
  const key = GRAMMAR_HIGHLIGHT_PALETTE[index % GRAMMAR_HIGHLIGHT_PALETTE.length];

  // Raw color value (e.g. a hex like #1565c0) is used as-is.
  if (!key.includes('.')) {
    return key;
  }

  const [palette, shade] = key.split('.') as [keyof Theme['palette'], string];
  const value = theme.palette[palette];

  if (value && typeof value === 'object' && shade in value) {
    return value[shade as keyof typeof value] as string;
  }

  return theme.palette.primary.main;
}

/** Renders text with each grammar-pattern fixed part in its own color. */
export function GrammarHighlightedText({
  text,
  highlights,
  exclude,
  colorOffset = 0,
  sx,
  ...typographyProps
}: GrammarHighlightedTextProps) {
  const theme = useTheme();
  const displayText = typographyProps.lang === 'ja' ? formatJapaneseDisplay(text) : text;
  const segments = splitHighlightedText(displayText, highlights, exclude);

  return (
    <Typography
      {...typographyProps}
      sx={[
        typographyProps.lang === 'ja' && { fontFamily: FONT_FAMILY_JP },
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
    >
      {segments.map((segment, index) =>
        segment.termIndex !== null ? (
          <Typography
            key={`${segment.text}-${index}`}
            component="span"
            sx={{
              color: resolvePaletteColor(theme, segment.termIndex + colorOffset),
              fontWeight: 700,
              fontFamily: 'inherit',
              fontSize: 'inherit',
              lineHeight: 'inherit'
            }}
          >
            {segment.text}
          </Typography>
        ) : (
          <span key={`${segment.text}-${index}`}>{segment.text}</span>
        )
      )}
    </Typography>
  );
}
