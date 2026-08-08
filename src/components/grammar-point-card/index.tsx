import { useState } from 'react';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import type { GrammarExample, GrammarPoint } from '@/constants/courses/types.ts';
import { DIALOGUE_SPEAKER_COLORS } from '@/constants/dialogue-speaker-colors.ts';
import {
  DialogueLineLayout,
  dialogueJapaneseTypographySx
} from '@/components/dialogue-line-layout';
import { GrammarHighlightedText } from '@/components/grammar-highlighted-text';
import { SpeakerIconColumn } from '@/components/dialogue-speaker-icon';
import { formatGrammarPatternDisplay, isGrammarTitleRedundant } from '@/utils/grammar-highlight.ts';
import { TranslationLine } from '@/components/translation-line';
import { SectionHeaderWithTranslationToggle } from '@/components/section-header-with-translation';
import { SpeakableSurface } from '@/components/speakable-surface';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';

type ExampleRowProps = {
  example: GrammarExample;
};

function ExampleRow({ example }: ExampleRowProps) {
  const { locale } = useTranslation();

  return (
    <SpeakableSurface
      text={example.jp}
      sx={{
        boxShadow: 'none',
        bgcolor: 'transparent',
        borderRadius: 1,
        px: 0.5,
        mx: -0.5
      }}
    >
      <GrammarHighlightedText
        text={example.jp}
        ruby={example.ruby}
        variant="body1"
        lang="ja"
        sx={{ fontWeight: 500 }}
      />
      <TranslationLine translation={example.meaning[locale]} />
    </SpeakableSurface>
  );
}

type ExampleSegment =
  | { kind: 'single'; example: GrammarExample }
  | { kind: 'dialogue'; examples: GrammarExample[] };

function groupExamples(examples: GrammarExample[]): ExampleSegment[] {
  const segments: ExampleSegment[] = [];
  let index = 0;

  while (index < examples.length) {
    const example = examples[index];
    const groupId = example.dialogueGroup;

    if (!groupId) {
      segments.push({ kind: 'single', example });
      index += 1;
      continue;
    }

    const batch: GrammarExample[] = [];

    while (index < examples.length && examples[index].dialogueGroup === groupId) {
      batch.push(examples[index]);
      index += 1;
    }

    segments.push({ kind: 'dialogue', examples: batch });
  }

  return segments;
}

type DialogueExampleGroupProps = {
  examples: GrammarExample[];
};

function DialogueExampleGroup({ examples }: DialogueExampleGroupProps) {
  const { t, locale } = useTranslation();
  const [showTranslation, setShowTranslation] = useState(false);
  const speakerLabels = [t('course.grammarDialogueSpeakerA'), t('course.grammarDialogueSpeakerB')];

  return (
    <Box sx={[subtleSurfaceSx, { px: 1.5, py: 1.5 }]}>
      <SectionHeaderWithTranslationToggle
        showTranslation={showTranslation}
        onToggle={() => setShowTranslation((previous) => !previous)}
        title={
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
            {t('course.grammarMiniDialogue')}
          </Typography>
        }
      />
      <Stack spacing={1.5}>
        {examples.map((example, lineIndex) => {
          const speakerIndex = lineIndex % speakerLabels.length;
          const label = speakerLabels[speakerIndex] ?? String(lineIndex + 1);
          const hasRuby = Boolean(example.ruby?.length);

          return (
            <DialogueLineLayout
              key={`${example.jp}-${lineIndex}`}
              icon={
                <SpeakerIconColumn color={DIALOGUE_SPEAKER_COLORS[speakerIndex]} label={label} />
              }
              japanese={
                <SpeakableSurface
                  text={example.jp}
                  sx={{
                    boxShadow: 'none',
                    bgcolor: 'transparent',
                    borderRadius: 1,
                    px: 0.5,
                    mx: -0.5
                  }}
                >
                  <GrammarHighlightedText
                    text={example.jp}
                    ruby={example.ruby}
                    variant="body1"
                    lang="ja"
                    sx={dialogueJapaneseTypographySx(hasRuby)}
                  />
                </SpeakableSurface>
              }
              translation={
                showTranslation && (
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.35 }}>
                    {example.meaning[locale]}
                  </Typography>
                )
              }
            />
          );
        })}
      </Stack>
    </Box>
  );
}

type ExampleListProps = {
  examples: GrammarExample[];
};

/** Speakable list of example sentences, optionally grouped as mini-dialogues. */
function ExampleList({ examples }: ExampleListProps) {
  const segments = groupExamples(examples);

  return (
    <Stack spacing={2}>
      {segments.map((segment, index) => {
        if (segment.kind === 'single') {
          return (
            <Box
              key={segment.example.jp}
              sx={{
                borderLeft: 4,
                borderColor: 'text.primary',
                pl: 2,
                pr: 1.5
              }}
            >
              <ExampleRow example={segment.example} />
            </Box>
          );
        }

        return (
          <DialogueExampleGroup
            key={`${segment.examples[0]?.dialogueGroup ?? 'dialogue'}-${index}`}
            examples={segment.examples}
          />
        );
      })}
    </Stack>
  );
}

type GrammarPointCardProps = {
  point: GrammarPoint;
  /** 1-based position of this grammar point within the lesson. */
  index: number;
};

const GRAMMAR_SUBLABEL_SX = {
  m: 0,
  fontSize: '1.125rem',
  fontWeight: 500,
  lineHeight: 1.4
} as const;

/** A grammar point: numbered pattern, title, explanation, and speakable examples. */
export function GrammarPointCard({ point, index }: GrammarPointCardProps) {
  const { locale, t } = useTranslation();
  const showTitle = !isGrammarTitleRedundant(point.pattern, point.title[locale]);

  return (
    <Card elevation={0} sx={elevatedSurfaceSx}>
      <CardContent>
        <Box sx={{ mb: 1.5 }}>
          <Box
            component="h3"
            sx={[
              (theme) => ({
                ...theme.typography.h5,
                fontWeight: 600,
                lineHeight: 1.3
              }),
              {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'baseline',
                gap: 0.5,
                maxWidth: '100%',
                mb: showTitle ? 0.25 : 0,
                m: 0
              }
            ]}
          >
            <Box
              component="span"
              aria-hidden
              sx={{
                flex: '0 0 auto',
                font: 'inherit',
                letterSpacing: 'inherit',
                color: 'text.secondary',
                fontVariantNumeric: 'tabular-nums'
              }}
            >
              {index}.
            </Box>
            <Box
              component="span"
              sx={{ flex: '1 1 0', minWidth: 0, font: 'inherit', letterSpacing: 'inherit' }}
            >
              <GrammarHighlightedText
                text={formatGrammarPatternDisplay(point.pattern)}
                ruby={point.patternRuby}
                component="span"
                variant="inherit"
                lang="ja"
                sx={{
                  font: 'inherit',
                  letterSpacing: 'inherit',
                  m: 0,
                  color: 'text.primary',
                  overflowWrap: 'anywhere'
                }}
              />
            </Box>
          </Box>
          {showTitle && (
            <GrammarHighlightedText
              text={point.title[locale]}
              ruby={point.titleRuby}
              component="p"
              variant="body2"
              color="text.secondary"
              sx={GRAMMAR_SUBLABEL_SX}
            />
          )}
        </Box>
        <GrammarHighlightedText
          text={point.explanation[locale]}
          ruby={point.explanationRuby}
          variant="body2"
          color="text.secondary"
          sx={{ mb: point.examples.length > 0 ? 1.5 : 0 }}
        />

        <ExampleList examples={point.examples} />

        {point.answers && (
          <Box sx={{ mt: 2 }}>
            <Typography
              component="h4"
              variant="body2"
              color="text.secondary"
              sx={[GRAMMAR_SUBLABEL_SX, { mb: 0.75 }]}
            >
              {t('course.answers')}
            </Typography>
            {point.answers.explanation && (
              <GrammarHighlightedText
                text={point.answers.explanation[locale]}
                ruby={point.answers.explanationRuby}
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5 }}
              />
            )}
            <ExampleList examples={point.answers.examples} />
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
