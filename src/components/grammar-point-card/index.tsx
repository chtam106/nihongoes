import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import type { GrammarExample, GrammarPoint } from '@/constants/courses/types.ts';
import { GrammarHighlightedText } from '@/components/grammar-highlighted-text';
import { formatGrammarPatternDisplay, type HighlightTerm } from '@/utils/grammar-highlight.ts';
import { Heading } from '@/components/heading';
import { TranslationLine } from '@/components/translation-line';
import { SpeakableSurface } from '@/components/speakable-surface';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';

type ExampleListProps = {
  examples: GrammarExample[];
  /** Terms to color in each sentence. Omit/empty to render the sentences plainly. */
  highlights?: HighlightTerm[];
  /** Words to protect from highlighting (e.g. は inside はたち). */
  exclude?: string[];
  /** Shift palette colors by this many slots (so a sub-block starts on new colors). */
  colorOffset?: number;
};

/** Speakable list of example sentences, optionally coloring the given highlight terms. */
function ExampleList({ examples, highlights, exclude, colorOffset = 0 }: ExampleListProps) {
  const { locale } = useTranslation();
  const hasHighlights = Boolean(highlights && highlights.length > 0);

  return (
    <Stack spacing={1.5}>
      {examples.map((example) => (
        <SpeakableSurface key={example.jp} text={example.jp} sx={{ p: 1.5 }}>
          {hasHighlights && (
            <GrammarHighlightedText
              text={example.jp}
              highlights={highlights!}
              exclude={exclude}
              colorOffset={colorOffset}
              variant="body1"
              lang="ja"
              sx={{ fontWeight: 500 }}
            />
          )}
          {!hasHighlights && (
            <Typography variant="body1" lang="ja" sx={{ fontWeight: 500 }}>
              {example.jp}
            </Typography>
          )}
          <TranslationLine translation={example.meaning[locale]} />
        </SpeakableSurface>
      ))}
    </Stack>
  );
}

type GrammarPointCardProps = {
  point: GrammarPoint;
  /** 1-based position of this grammar point within the lesson. */
  index: number;
};

/** A grammar point: numbered pattern chip, title, explanation, and speakable examples. */
export function GrammarPointCard({ point, index }: GrammarPointCardProps) {
  const { locale, t } = useTranslation();

  return (
    <Card elevation={0} sx={elevatedSurfaceSx}>
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
          <Box
            aria-hidden
            sx={{
              flexShrink: 0,
              width: 26,
              height: 26,
              borderRadius: '50%',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              fontWeight: 700
            }}
          >
            {index}
          </Box>
          <Box
            sx={[
              elevatedSurfaceSx,
              subtleSurfaceSx,
              {
                display: 'inline-block',
                maxWidth: '100%',
                px: 1.5,
                py: 0.75
              }
            ]}
          >
            <GrammarHighlightedText
              text={formatGrammarPatternDisplay(point.pattern)}
              highlights={point.highlights}
              exclude={point.excludeHighlights}
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
        </Stack>
        <Heading component="h3" gutterBottom>
          {point.title[locale]}
        </Heading>
        <GrammarHighlightedText
          text={point.explanation[locale]}
          highlights={point.highlights}
          exclude={point.excludeHighlights}
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        />

        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          {t('course.examples')}
        </Typography>
        <ExampleList
          examples={point.examples}
          highlights={point.highlights}
          exclude={point.excludeHighlights}
        />

        {point.answers && (
          <Box sx={{ mt: 2 }}>
            <Heading component="h4" scale="subsection" sx={{ mb: 0.75 }}>
              {t('course.answers')}
            </Heading>
            {point.answers.explanation && (
              <GrammarHighlightedText
                text={point.answers.explanation[locale]}
                highlights={point.answers.highlights ?? []}
                exclude={point.answers.excludeHighlights}
                colorOffset={point.highlights.length}
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5 }}
              />
            )}
            <ExampleList
              examples={point.answers.examples}
              highlights={point.answers.highlights}
              exclude={point.answers.excludeHighlights}
              colorOffset={point.highlights.length}
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
