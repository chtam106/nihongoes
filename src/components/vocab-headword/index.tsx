'use client';

import type { ReactNode } from 'react';
import { Typography, type TypographyProps } from '@mui/material';
import type { VocabItem } from '@/types/course.ts';
import { useUserPreferences } from '@/utils/user-preferences.ts';
import { renderJapaneseText } from '@/utils/japanese-text.tsx';

type VocabHeadwordProps = {
  item: Pick<VocabItem, 'kana' | 'kanji' | 'ruby'>;
  variant?: TypographyProps['variant'];
};

/** Vocab card headword with authored furigana when the word has a kanji form. */
export function VocabHeadword({ item, variant = 'subtitle1' }: VocabHeadwordProps) {
  const [preferences] = useUserPreferences();
  const hasKanji = Boolean(item.kanji && item.kanji !== item.kana);

  let display: ReactNode = item.kana;

  if (hasKanji && item.kanji) {
    if (preferences.showFurigana && item.ruby?.length) {
      display = renderJapaneseText(item.kanji, item.ruby);
    } else {
      display = item.kanji;
    }
  }

  return (
    <Typography
      variant={variant}
      component="div"
      lang="ja"
      sx={{ fontWeight: 600, lineHeight: 1.3 }}
    >
      {display}
    </Typography>
  );
}
