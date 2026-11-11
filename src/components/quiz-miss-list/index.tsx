'use client';

import { useState } from 'react';
import BookmarkAddOutlined from '@mui/icons-material/BookmarkAddOutlined';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { FuriganaText } from '@/components/furigana-text';
import type { FlashcardCard } from '@/constants/flashcards/collections.ts';
import { SaveToCollectionDialog } from '@/features/flashcards/save-to-collection-dialog.tsx';
import { useSaveCardReady } from '@/features/flashcards/save-card-gesture.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { RubySegment } from '@/types/course.ts';

export type QuizMissPart = {
  text: string;
  ruby?: RubySegment[];
  japanese?: boolean;
  /** A cloze gap between the surrounding Japanese parts. */
  blank?: boolean;
};

/** The correct answer shown on the result list. */
export type QuizMissChoice = {
  text: string;
  ruby?: RubySegment[];
  japanese?: boolean;
  /** Gloss in parentheses, such as a choice translation. */
  note?: string;
};

/** One multiple-choice question missed on the first try. */
export type QuizMiss = {
  id: string;
  prompt: QuizMissPart[];
  /** Gloss under the prompt, such as a translation or the cloze meaning. */
  note?: string;
  answer: QuizMissChoice;
  /** Lesson word, kana, kanji, or radical this question studies. */
  card?: FlashcardCard;
};

type QuizMissListProps = {
  misses: QuizMiss[];
};

type MissPartProps = {
  part: QuizMissPart;
};

type ChoiceRunProps = {
  choice: QuizMissChoice;
};

type MissListBodyProps = {
  misses: QuizMiss[];
  onSave?: (card: FlashcardCard) => void;
  onSaveAll?: () => void;
};

type SaveMissButtonProps = {
  card: FlashcardCard;
  onSave: (card: FlashcardCard) => void;
};

function promptIsGlyph(parts: QuizMissPart[]): boolean {
  const [part] = parts;

  return (
    parts.length === 1 &&
    Boolean(part?.japanese) &&
    !part?.blank &&
    [...(part?.text ?? '')].length === 1
  );
}

function MissPart({ part }: MissPartProps) {
  if (part.blank) {
    return (
      <Box
        component="span"
        aria-hidden
        sx={{
          display: 'inline-block',
          minWidth: '2em',
          mx: 0.5,
          borderBottom: '2px solid',
          borderColor: 'text.secondary',
          verticalAlign: 'baseline'
        }}
      />
    );
  }

  if (part.japanese) {
    return (
      <Box component="span" lang="ja">
        <FuriganaText text={part.text} ruby={part.ruby} />
      </Box>
    );
  }

  return part.text;
}

function SaveMissIcon({ card, onSave }: SaveMissButtonProps) {
  const { t } = useTranslation();

  return (
    <IconButton
      size="small"
      color="primary"
      aria-label={t('flashcards.addToFlashcards')}
      onClick={() => onSave(card)}
      sx={{ flexShrink: 0 }}
    >
      <BookmarkAddOutlined />
    </IconButton>
  );
}

function promptIsJapanese(miss: QuizMiss): boolean {
  return miss.prompt.some((part) => part.japanese && part.text && !part.blank);
}

function ChoiceRun({ choice }: ChoiceRunProps) {
  return (
    <Box component="span">
      <Box component="span" lang={choice.japanese ? 'ja' : undefined} sx={{ fontWeight: 600 }}>
        <MissPart part={choice} />
      </Box>
      {choice.note && (
        <Box component="span" sx={{ color: 'text.secondary', fontWeight: 400 }}>
          {` (${choice.note})`}
        </Box>
      )}
    </Box>
  );
}

function savableCards(misses: QuizMiss[]): FlashcardCard[] {
  const seen = new Set<string>();
  const cards: FlashcardCard[] = [];

  for (const miss of misses) {
    if (!miss.card || seen.has(miss.card.id)) {
      continue;
    }

    seen.add(miss.card.id);
    cards.push(miss.card);
  }

  return cards;
}

function MissListBody({ misses, onSave, onSaveAll }: MissListBodyProps) {
  const { t } = useTranslation();

  return (
    <Box sx={{ width: '100%', mt: 1, textAlign: 'left' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          columnGap: 1,
          mb: 1.5,
          flexWrap: { xs: 'wrap', md: 'nowrap' }
        }}
      >
        <Typography component="h3" variant="body1" sx={{ fontWeight: 600, flexShrink: 0 }}>
          {t('course.resultMisses')}
        </Typography>
        {onSaveAll && (
          <Box
            component="span"
            aria-hidden
            sx={{ color: 'text.secondary', flexShrink: 0, display: { xs: 'none', md: 'inline' } }}
          >
            |
          </Box>
        )}
        {onSaveAll && (
          <Button
            onClick={onSaveAll}
            sx={{
              p: 0,
              minWidth: 0,
              minHeight: 0,
              flexBasis: { xs: '100%', md: 'auto' },
              textTransform: 'none',
              fontWeight: 600,
              lineHeight: 'inherit',
              verticalAlign: 'baseline',
              justifyContent: 'flex-start',
              textAlign: 'left',
              whiteSpace: 'normal'
            }}
          >
            {t('flashcards.addAll')}
          </Button>
        )}
      </Box>
      <Stack component="ol" spacing={0} sx={{ m: 0, p: 0, listStyle: 'none' }}>
        {misses.map((miss, missIndex) => {
          const glyph = promptIsGlyph(miss.prompt);
          const canSave = Boolean(miss.card && onSave);
          const iconOnPrompt = canSave && promptIsJapanese(miss);
          const iconOnAnswer = canSave && !iconOnPrompt;

          return (
            <Box
              component="li"
              key={miss.id}
              sx={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                columnGap: 1,
                py: 1.5,
                '&:first-of-type': { pt: 0 },
                '&:last-child': { pb: 0 },
                '&:not(:last-child)': {
                  borderBottom: '1px solid',
                  borderColor: 'divider'
                }
              }}
            >
              <Box component="span" aria-hidden sx={{ lineHeight: 1.5 }}>
                {missIndex + 1}.
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  {iconOnPrompt && miss.card && onSave && (
                    <SaveMissIcon card={miss.card} onSave={onSave} />
                  )}
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      fontSize: glyph ? '2rem' : undefined,
                      lineHeight: glyph ? 1.2 : undefined
                    }}
                  >
                    {miss.prompt.map((part, index) => (
                      <MissPart key={`${miss.id}-prompt-${index}`} part={part} />
                    ))}
                  </Typography>
                </Box>
                {miss.note && (
                  <Typography variant="body1" color="text.secondary">
                    {miss.note}
                  </Typography>
                )}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexWrap: 'wrap' }}>
                  <Typography variant="body1" component="span">
                    <Box component="span" sx={{ color: 'text.secondary' }}>
                      {t('course.resultAnswer')}:{' '}
                    </Box>
                    {!iconOnAnswer && <ChoiceRun choice={miss.answer} />}
                  </Typography>
                  {iconOnAnswer && miss.card && onSave && (
                    <SaveMissIcon card={miss.card} onSave={onSave} />
                  )}
                  {iconOnAnswer && <ChoiceRun choice={miss.answer} />}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}

type SavableMissListProps = {
  misses: QuizMiss[];
};

function SavableMissList({ misses }: SavableMissListProps) {
  const [cards, setCards] = useState<FlashcardCard[] | null>(null);
  const allCards = savableCards(misses);

  return (
    <>
      <MissListBody
        misses={misses}
        onSave={(card) => setCards([card])}
        onSaveAll={misses.length > 1 && allCards.length > 0 ? () => setCards(allCards) : undefined}
      />
      <SaveToCollectionDialog
        open={cards !== null}
        cards={cards ?? []}
        onClose={() => setCards(null)}
      />
    </>
  );
}

/**
 * Lists multiple-choice questions missed on the first try, with the correct
 * answer. Renders nothing on a perfect score. A miss with a flashcard shows one
 * icon before that word. Add all to flashcards shows only when more than one
 * question was missed.
 */
export function QuizMissList({ misses }: QuizMissListProps) {
  const canSave = useSaveCardReady() && misses.some((miss) => miss.card);

  if (misses.length === 0) {
    return null;
  }

  if (canSave) {
    return <SavableMissList misses={misses} />;
  }

  return <MissListBody misses={misses} />;
}
