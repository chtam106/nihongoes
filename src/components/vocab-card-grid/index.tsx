'use client';

import { Box, Typography } from '@mui/material';
import { SpeakableSurface } from '@/components/speakable-surface';
import { VocabHeadword } from '@/components/vocab-headword';
import type { FlashcardCardType } from '@/constants/flashcards/collections.ts';
import { SaveableCard } from '@/features/flashcards/save-card-gesture.tsx';
import type { Locale } from '@/types/i18n.ts';
import type { VocabItem } from '@/types/course.ts';

type VocabGridCard = {
  id: string;
  type: FlashcardCardType;
  item: VocabItem;
};

type VocabCardGridProps = {
  cards: VocabGridCard[];
  locale: Locale;
};

export function VocabCardGrid({ cards, locale }: VocabCardGridProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 1.5
      }}
    >
      {cards.map((card, index) => (
        <SaveableCard
          key={`vocab-${index}-${card.item.kana}`}
          cardId={card.id}
          cardType={card.type}
        >
          <SpeakableSurface
            text={card.item.speech ?? card.item.kana}
            sx={{ p: 1.5, height: '100%' }}
          >
            <VocabHeadword item={card.item} />
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              {card.item.meaning[locale]}
            </Typography>
          </SpeakableSurface>
        </SaveableCard>
      ))}
    </Box>
  );
}
