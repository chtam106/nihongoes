import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import type { GrammarPoint } from '@/constants/courses/types.ts';
import { GrammarHighlightedText } from '@/components/grammar-highlighted-text';
import { formatGrammarPatternDisplay } from '@/utils/grammar-highlight.ts';
import { Heading } from '@/components/heading';
import { TranslationLine } from '@/components/translation-line';
import { SpeakButton } from '@/components/speak-button';
import { SpeakableSurface } from '@/components/speakable-surface';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';

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
              pattern={point.pattern}
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
          pattern={point.pattern}
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        />

        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          {t('course.examples')}
        </Typography>
        <Stack spacing={1.5}>
          {point.examples.map((example) => (
            <SpeakableSurface key={example.jp} text={example.jp} sx={{ p: 1.5 }}>
              <Stack direction="row" spacing={0.5} sx={{ alignItems: 'flex-start' }}>
                <SpeakButton text={example.jp} />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <GrammarHighlightedText
                    text={example.jp}
                    pattern={point.pattern}
                    variant="body1"
                    lang="ja"
                    sx={{ fontWeight: 500 }}
                  />
                  <TranslationLine translation={example.meaning[locale]} />
                </Box>
              </Stack>
            </SpeakableSurface>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
