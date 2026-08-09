'use client';

import { memo, type ReactNode } from 'react';
import { Box, LinearProgress, Paper, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import type { Lesson } from '@/constants/courses/index.ts';
import type { Locale } from '@/i18n/translations.ts';
import { renderJapaneseText } from '@/utils/japanese-text.tsx';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { useVocabMatch } from './use-vocab-quiz.ts';
import {
  VOCAB_MATCH_BATCH_FADE_MS,
  VOCAB_MATCH_PAIR_PALETTE,
  VOCAB_MATCH_SELECTED_BORDER_COLOR,
  type VocabMatchPair,
  type VocabScript
} from './vocab-quiz.ts';

type VocabMatchPanelProps = {
  lesson: Lesson;
  locale: Locale;
  script: VocabScript;
  includeReference: boolean;
};

type MatchChipState = 'default' | 'selected' | 'matched';

type MatchChipProps = {
  children: ReactNode;
  state: MatchChipState;
  matchColorIndex?: number;
  ja?: boolean;
  locked?: boolean;
  onClick?: () => void;
};

function matchChipSx(state: MatchChipState, interactive: boolean, matchColorIndex?: number) {
  return (theme: { palette: { text: { primary: string } } }) => {
    const matchedMain =
      matchColorIndex !== undefined
        ? VOCAB_MATCH_PAIR_PALETTE[matchColorIndex % VOCAB_MATCH_PAIR_PALETTE.length]
        : VOCAB_MATCH_PAIR_PALETTE[0];

    return {
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'flex-start',
      px: 1.5,
      py: 1.25,
      minHeight: 44,
      borderRadius: 1,
      border: '1px solid',
      borderColor:
        state === 'matched'
          ? alpha(matchedMain, 0.55)
          : state === 'selected'
            ? VOCAB_MATCH_SELECTED_BORDER_COLOR
            : alpha(theme.palette.text.primary, 0.12),
      bgcolor: state === 'matched' ? alpha(matchedMain, 0.16) : 'background.paper',
      color: state === 'matched' ? matchedMain : 'text.primary',
      fontSize: '1rem',
      fontWeight: state === 'matched' ? 600 : 500,
      lineHeight: 1.35,
      textAlign: 'left' as const,
      cursor: interactive ? 'pointer' : 'default',
      WebkitTapHighlightColor: 'transparent',
      boxShadow: 'none'
    };
  };
}

function MatchChip({
  children,
  state,
  matchColorIndex,
  ja,
  locked = false,
  onClick
}: MatchChipProps) {
  return (
    <Paper
      elevation={0}
      component="button"
      type="button"
      onClick={locked ? undefined : onClick}
      aria-disabled={locked || undefined}
      lang={ja ? 'ja' : undefined}
      sx={[
        matchChipSx(state, !locked, matchColorIndex),
        locked && {
          pointerEvents: 'none'
        }
      ]}
    >
      {children}
    </Paper>
  );
}

type MatchWordCellProps = {
  pair: VocabMatchPair;
  state: MatchChipState;
  matchColorIndex?: number;
  locked?: boolean;
  onSelect: () => void;
};

const MatchWordCell = memo(function MatchWordCell({
  pair,
  state,
  matchColorIndex,
  locked,
  onSelect
}: MatchWordCellProps) {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <MatchChip
        state={state}
        matchColorIndex={matchColorIndex}
        ja
        locked={locked}
        onClick={onSelect}
      >
        {renderJapaneseText(pair.surface, pair.ruby)}
      </MatchChip>
    </Box>
  );
});

type MatchMeaningCellProps = {
  pair: VocabMatchPair;
  state: MatchChipState;
  matchColorIndex?: number;
  locked?: boolean;
  onSelect: () => void;
};

const MatchMeaningCell = memo(function MatchMeaningCell({
  pair,
  state,
  matchColorIndex,
  locked,
  onSelect
}: MatchMeaningCellProps) {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <MatchChip state={state} matchColorIndex={matchColorIndex} locked={locked} onClick={onSelect}>
        <Typography component="span">{pair.meaning}</Typography>
      </MatchChip>
    </Box>
  );
});

function VocabMatchPanel({ lesson, locale, script, includeReference }: VocabMatchPanelProps) {
  const { t } = useTranslation();
  const {
    activePairs,
    meaningOrder,
    batchKey,
    batchVisible,
    totalMatched,
    totalPairs,
    matchedPairColors,
    selectedWordId,
    selectedMeaningId,
    selectWord,
    selectMeaning
  } = useVocabMatch({ lesson, locale, script, includeReference });

  const progressValue = totalPairs > 0 ? (totalMatched / totalPairs) * 100 : 0;

  const resolveWordState = (pairId: string): MatchChipState => {
    if (matchedPairColors.has(pairId)) {
      return 'matched';
    }

    if (selectedWordId === pairId) {
      return 'selected';
    }

    return 'default';
  };

  const resolveMeaningState = (pairId: string): MatchChipState => {
    if (matchedPairColors.has(pairId)) {
      return 'matched';
    }

    if (selectedMeaningId === pairId) {
      return 'selected';
    }

    return 'default';
  };

  return (
    <Stack spacing={2.5}>
      <Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: 'space-between', alignItems: 'baseline', mb: 1 }}
        >
          <Typography variant="body1" color="text.secondary">
            {t('course.vocabMatchInstruction')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
            {t('course.vocabMatchProgress', {
              matched: totalMatched,
              total: totalPairs
            })}
          </Typography>
        </Stack>
        <LinearProgress
          variant="determinate"
          value={progressValue}
          aria-label={t('course.vocabMatchProgress', {
            matched: totalMatched,
            total: totalPairs
          })}
        />
      </Box>

      <Paper elevation={0} sx={[elevatedSurfaceSx, { p: { xs: 2, md: 2.5 } }]}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: { xs: 1.25, md: 3 },
            mb: 1.5
          }}
        >
          <Typography variant="overline" color="text.secondary">
            {t('course.vocabMatchWords')}
          </Typography>
          <Typography variant="overline" color="text.secondary">
            {t('course.vocabMatchMeanings')}
          </Typography>
        </Box>

        <Stack
          key={batchKey}
          spacing={1.25}
          sx={{
            opacity: batchVisible ? 1 : 0,
            transition: `opacity ${VOCAB_MATCH_BATCH_FADE_MS}ms ease`,
            pointerEvents: batchVisible ? 'auto' : 'none'
          }}
        >
          {activePairs.map((wordPair, rowIndex) => {
            const meaningPair = meaningOrder[rowIndex];

            if (!meaningPair) {
              return null;
            }

            const wordLocked = matchedPairColors.has(wordPair.id);
            const meaningLocked = matchedPairColors.has(meaningPair.id);
            const wordColorIndex = matchedPairColors.get(wordPair.id);
            const meaningColorIndex = matchedPairColors.get(meaningPair.id);

            return (
              <Box
                key={`vocab-match-row-${rowIndex}`}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: { xs: 1.25, md: 3 },
                  alignItems: 'stretch'
                }}
              >
                <MatchWordCell
                  pair={wordPair}
                  state={resolveWordState(wordPair.id)}
                  matchColorIndex={wordColorIndex}
                  locked={wordLocked}
                  onSelect={() => selectWord(wordPair.id)}
                />
                <MatchMeaningCell
                  pair={meaningPair}
                  state={resolveMeaningState(meaningPair.id)}
                  matchColorIndex={meaningColorIndex}
                  locked={meaningLocked}
                  onSelect={() => selectMeaning(meaningPair.id)}
                />
              </Box>
            );
          })}
        </Stack>
      </Paper>
    </Stack>
  );
}

export default VocabMatchPanel;
