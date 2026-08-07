import { Box, Card, CardContent, Stack } from '@mui/material';
import type { GrammarExample, GrammarPoint } from '@/constants/courses/types.ts';
import { GrammarHighlightedText } from '@/components/grammar-highlighted-text';
import { formatGrammarPatternDisplay, isGrammarTitleRedundant } from '@/utils/grammar-highlight.ts';
import { Heading } from '@/components/heading';
import { TranslationLine } from '@/components/translation-line';
import { SpeakableSurface } from '@/components/speakable-surface';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';

type ExampleListProps = {
  examples: GrammarExample[];
};

/** Speakable list of example sentences, optionally coloring the given highlight terms. */
function ExampleList({ examples }: ExampleListProps) {
  const { locale } = useTranslation();

  return (
    <Stack spacing={2}>
      {examples.map((example) => (
        <Box
          key={example.jp}
          sx={{
            borderLeft: 4,
            borderColor: 'primary.main',
            pl: 2,
            pr: 1.5
          }}
        >
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
        </Box>
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
  const showTitle = !isGrammarTitleRedundant(point.pattern, point.title[locale]);

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
        {showTitle && (
          <Heading component="h3" gutterBottom>
            {point.title[locale]}
          </Heading>
        )}
        <GrammarHighlightedText
          text={point.explanation[locale]}
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
