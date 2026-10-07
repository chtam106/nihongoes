'use client';

import type { ReactNode } from 'react';
import type { RubySegment } from '@/types/course.ts';
import { useUserPreferences } from '@/utils/user-preferences.ts';
import { renderJapaneseText } from '@/utils/japanese-text.tsx';

type FuriganaTextProps = {
  text: string;
  ruby?: RubySegment[];
};

/** Japanese surface with authored furigana when the user has furigana turned on. */
export function FuriganaText({ text, ruby }: FuriganaTextProps): ReactNode {
  const [preferences] = useUserPreferences();

  if (preferences.showFurigana && ruby?.length) {
    return renderJapaneseText(text, ruby);
  }

  return text;
}
