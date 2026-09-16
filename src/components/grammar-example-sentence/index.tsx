'use client';

import { Box, Stack } from '@mui/material';
import type { GrammarExample } from '@/types/course.ts';
import { GrammarHighlightedText } from '@/components/grammar-highlighted-text';
import { TranslationLine } from '@/components/translation-line';
import { SpeakableSurface } from '@/components/speakable-surface';
import { useTranslation } from '@/i18n/use-translation.ts';
import { useUserPreferences } from '@/utils/user-preferences.ts';

const SPEAKABLE_EXAMPLE_SX = {
  boxShadow: 'none',
  bgcolor: 'transparent',
  borderRadius: 1,
  px: 0.5,
  mx: -0.5
} as const;

const EXAMPLE_BORDER_SX = {
  borderLeft: 4,
  borderColor: 'text.primary',
  pl: 2,
  pr: 1.5
} as const;

type GrammarExampleSentenceProps = {
  example: GrammarExample;
};

/** Single speakable example sentence with left border and show/hide translation. */
export function GrammarExampleSentence({ example }: GrammarExampleSentenceProps) {
  const { locale } = useTranslation();
  const [preferences] = useUserPreferences();

  return (
    <Box sx={EXAMPLE_BORDER_SX}>
      <SpeakableSurface text={example.jp} sx={SPEAKABLE_EXAMPLE_SX}>
        <GrammarHighlightedText
          text={example.jp}
          ruby={example.ruby}
          variant="body1"
          lang="ja"
          sx={{ fontWeight: 500 }}
        />
        <TranslationLine
          key={String(preferences.showTranslationsByDefault)}
          translation={example.meaning[locale]}
        />
      </SpeakableSurface>
    </Box>
  );
}

type GrammarExampleListProps = {
  examples: GrammarExample[];
};

/** Stacked example sentences using the standard grammar-card presentation. */
export function GrammarExampleList({ examples }: GrammarExampleListProps) {
  return (
    <Stack spacing={2}>
      {examples.map((example, index) => (
        <GrammarExampleSentence key={`${example.jp}-${index}`} example={example} />
      ))}
    </Stack>
  );
}
