import { Typography, type TypographyProps } from '@mui/material';
import type { RubySegment } from '@/types/course.ts';
import { renderLocaleText } from '@/utils/japanese-text.tsx';

type MixedLocaleTextProps = {
  text: string;
  ruby?: RubySegment[];
} & TypographyProps;

/** Bilingual UI copy that may embed Japanese fragments (e.g. "store (デパート)"). */
export function MixedLocaleText({
  text,
  ruby,
  component = 'span',
  ...typographyProps
}: MixedLocaleTextProps) {
  return (
    <Typography component={component} {...typographyProps}>
      {renderLocaleText(text, ruby)}
    </Typography>
  );
}
