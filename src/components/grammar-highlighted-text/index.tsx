import { Typography, type TypographyProps } from '@mui/material';
import { renderJapaneseText } from '@/utils/japanese-text.tsx';
import type { RubySegment } from '@/types/course.ts';
import { FONT_FAMILY_JP } from '@/theme/fonts.ts';

type GrammarHighlightedTextProps = {
  text: string;
  ruby?: RubySegment[];
} & TypographyProps;

/** Renders grammar text without special highlight styling. */
export function GrammarHighlightedText({
  text,
  ruby,
  sx,
  ...typographyProps
}: GrammarHighlightedTextProps) {
  const displayText = typographyProps.lang === 'ja' ? renderJapaneseText(text, ruby) : text;

  return (
    <Typography
      {...typographyProps}
      sx={[
        typographyProps.lang === 'ja' && { fontFamily: FONT_FAMILY_JP },
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
    >
      {displayText}
    </Typography>
  );
}
