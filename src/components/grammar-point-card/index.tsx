import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import type { GrammarExample, GrammarPoint } from '@/constants/courses/types.ts';
import { GrammarHighlightedText } from '@/components/grammar-highlighted-text';
import { formatGrammarPatternDisplay, isGrammarTitleRedundant } from '@/utils/grammar-highlight.ts';
import { Heading } from '@/components/heading';
import { TranslationLine } from '@/components/translation-line';
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
  const { t } = useTranslation();
  const speakerLabels = [t('course.grammarDialogueSpeakerA'), t('course.grammarDialogueSpeakerB')];

  return (
    <Box
      sx={[
        subtleSurfaceSx,
        {
          borderLeft: 4,
          borderColor: 'primary.main',
          pl: 2,
          pr: 1.5,
          py: 1.5
        }
      ]}
    >
      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 1 }}>
        {t('course.grammarMiniDialogue')}
      </Typography>
      <Stack spacing={1.5} divider={<Box sx={{ borderBottom: 1, borderColor: 'divider' }} />}>
        {examples.map((example, lineIndex) => (
          <Box
            key={`${example.jp}-${lineIndex}`}
            sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start' }}
          >
            <Typography
              component="span"
              aria-hidden
              sx={{
                flexShrink: 0,
                width: '1.25rem',
                fontWeight: 600,
                color: 'text.secondary',
                fontVariantNumeric: 'tabular-nums',
                lineHeight: 1.5
              }}
            >
              {speakerLabels[lineIndex] ?? lineIndex + 1}
            </Typography>
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <ExampleRow example={example} />
            </Box>
          </Box>
        ))}
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
                borderColor: 'primary.main',
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

/** A grammar point: numbered pattern, title, explanation, and speakable examples. */
export function GrammarPointCard({ point, index }: GrammarPointCardProps) {
  const { locale, t } = useTranslation();
  const showTitle = !isGrammarTitleRedundant(point.pattern, point.title[locale]);

  return (
    <Card elevation={0} sx={elevatedSurfaceSx}>
      <CardContent>
        <Box
          sx={[
            elevatedSurfaceSx,
            subtleSurfaceSx,
            {
              display: 'inline-flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              gap: 0.75,
              maxWidth: '100%',
              px: 1.5,
              py: 0.75,
              mb: 1.5
            }
          ]}
        >
          <Typography
            component="span"
            aria-hidden
            sx={{
              fontWeight: 600,
              fontSize: '1.05rem',
              lineHeight: 1.5,
              color: 'text.secondary',
              fontVariantNumeric: 'tabular-nums'
            }}
          >
            {index}.
          </Typography>
          <GrammarHighlightedText
            text={formatGrammarPatternDisplay(point.pattern)}
            ruby={point.patternRuby}
            component="span"
            lang="ja"
            sx={{
              fontWeight: 600,
              fontSize: '1.05rem',
              lineHeight: 1.5,
              color: 'text.primary'
            }}
          />
        </Box>
        {showTitle && (
          <GrammarHighlightedText
            text={point.title[locale]}
            ruby={point.titleRuby}
            component="h3"
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 600, lineHeight: 1.35 }}
          />
        )}
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
            <Heading component="h4" scale="subsection" sx={{ mb: 0.75 }}>
              {t('course.answers')}
            </Heading>
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
