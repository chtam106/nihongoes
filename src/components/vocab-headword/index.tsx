import type { ReactNode } from 'react';
import { Typography, type TypographyProps } from '@mui/material';
import type { VocabItem } from '@/types/course.ts';
import { renderJapaneseText } from '@/utils/japanese-text.tsx';

type VocabHeadwordProps = {
  item: Pick<VocabItem, 'kana' | 'kanji' | 'ruby'>;
  variant?: TypographyProps['variant'];
};

/** Vocab card headword with authored furigana when the word has a kanji form. */
export function VocabHeadword({ item, variant = 'subtitle1' }: VocabHeadwordProps) {
  const hasKanji = Boolean(item.kanji && item.kanji !== item.kana);

  let display: ReactNode = item.kana;

  if (hasKanji && item.kanji) {
    display = item.ruby?.length
      ? renderJapaneseText(item.kanji, item.ruby)
      : `${item.kanji}（${item.kana}）`;
  }

  return (
    <Typography
      variant={variant}
      component="div"
      lang="ja"
      sx={{
        fontWeight: 600,
        lineHeight: 1.3,
        '& ruby rt': { fontSize: '0.7em' }
      }}
    >
      {display}
    </Typography>
  );
}
