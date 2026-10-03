'use client';

import { Box, Typography } from '@mui/material';
import { SpeakableSurface } from '@/components/speakable-surface';
import { VocabHeadword } from '@/components/vocab-headword';
import type { Locale } from '@/types/i18n.ts';
import type { VocabItem } from '@/types/course.ts';

type VocabCardGridProps = {
  items: VocabItem[];
  locale: Locale;
};

export function VocabCardGrid({ items, locale }: VocabCardGridProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 1.5
      }}
    >
      {items.map((item, index) => (
        <SpeakableSurface
          key={`vocab-${index}-${item.kana}`}
          text={item.speech ?? item.kana}
          sx={{ p: 1.5 }}
        >
          <VocabHeadword item={item} />
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {item.meaning[locale]}
          </Typography>
        </SpeakableSurface>
      ))}
    </Box>
  );
}
