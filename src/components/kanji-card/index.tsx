import { Box, Paper, Stack, Typography } from '@mui/material';
import { alpha, type Theme } from '@mui/material/styles';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Heading } from '@/components/heading';
import { SpeakableSurface } from '@/components/speakable-surface';
import { useTranslation } from '@/i18n/use-translation.ts';
import {
  formatKanjiMeaning,
  getRadicalByChar,
  KANJI_RADICALS_PATH,
  type KanjiEntry,
  type KanjiReadingPart
} from '@/constants/kanji/index.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';

/** Full kana reading of an example (also spoken), joined from its parts. */
function exampleReading(parts: KanjiReadingPart[]): string {
  return parts.map((part) => part.reading).join('');
}

/** The example word surface text, joined from its parts. */
function exampleWord(parts: KanjiReadingPart[]): string {
  return parts.map((part) => part.text).join('');
}

/** Turn a kun'yomi with okurigana (ひと.つ) into ひと（つ） for display. */
function formatReading(reading: string): string {
  const [base, okurigana] = reading.split('.');

  if (okurigana) {
    return `${base}（${okurigana}）`;
  }

  return base;
}

type InfoRowProps = {
  label: string;
  value: string;
  /** Render the value with the Japanese language attribute. */
  japanese?: boolean;
  /** Emphasize the value (e.g. the meaning). */
  emphasize?: boolean;
};

function InfoRow({ label, value, japanese, emphasize }: InfoRowProps) {
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'baseline' }}>
      <Typography variant="body2" color="text.secondary" sx={{ flexShrink: 0, minWidth: 88 }}>
        {label}
      </Typography>
      <Typography
        variant="body2"
        lang={japanese ? 'ja' : undefined}
        sx={{ fontWeight: emphasize ? 600 : 400 }}
      >
        {value}
      </Typography>
    </Stack>
  );
}

type KanjiCardProps = {
  entry: KanjiEntry;
  /** 1-based position of this kanji within the lesson. */
  index: number;
};

/**
 * A full study card for a single kanji: big glyph, meaning, component radicals
 * (linked to the radicals page), on/kun readings, optional mnemonic and usage
 * note, and speakable example words.
 */
export function KanjiCard({ entry, index }: KanjiCardProps) {
  const { locale, t } = useTranslation();

  return (
    <Box>
      <Heading component="h2" sx={{ mb: 1 }}>
        {t('kanji.kanjiHeading', { number: index })}
      </Heading>
      <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 } }]}>
        <Paper
          elevation={0}
          sx={[
            elevatedSurfaceSx,
            {
              p: 2,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              alignItems: 'center'
            }
          ]}
        >
          <Typography
            component="span"
            lang="ja"
            sx={{
              flexShrink: 0,
              width: { xs: 64, md: 72 },
              textAlign: 'center',
              fontWeight: 600,
              fontSize: { xs: 56, md: 64 },
              lineHeight: 1
            }}
          >
            {entry.char}
          </Typography>
          <Box sx={{ width: { xs: '100%', sm: 'auto' }, flex: { sm: 1 }, minWidth: 0 }}>
            <Stack spacing={0.5}>
              <InfoRow
                label={t('kanji.meaningLabel')}
                value={locale === 'vi' ? formatKanjiMeaning(entry.meaning.vi) : entry.meaning.en}
                emphasize
              />
              {entry.components.length >= 2 && (
                <Stack direction="row" spacing={1} sx={{ alignItems: 'baseline' }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ flexShrink: 0, minWidth: 88 }}
                  >
                    {t('kanji.radicals')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {entry.components.map((char, componentIndex) => {
                      const radical = getRadicalByChar(char);
                      const key = `${char}-${componentIndex}`;
                      const pillSx = {
                        display: 'inline-flex',
                        alignItems: 'baseline',
                        gap: 0.5,
                        px: 0.75,
                        py: 0.25,
                        borderRadius: 1,
                        bgcolor: (theme: Theme) => alpha(theme.palette.primary.main, 0.12),
                        border: (theme: Theme) =>
                          `1px solid ${alpha(theme.palette.primary.main, 0.24)}`
                      };
                      const inner = (
                        <>
                          <Box component="span" lang="ja" sx={{ fontWeight: 600 }}>
                            {char}
                          </Box>
                          {radical && (
                            <Box component="span" sx={{ color: 'text.secondary' }}>
                              {locale === 'vi'
                                ? formatKanjiMeaning(radical.meaning.vi)
                                : radical.meaning.en}
                            </Box>
                          )}
                        </>
                      );

                      if (!radical) {
                        return (
                          <Box component="span" key={key} sx={pillSx}>
                            {inner}
                          </Box>
                        );
                      }

                      return (
                        <Box
                          key={key}
                          component={RouterLink}
                          to={`${KANJI_RADICALS_PATH}#radical-${radical.number}`}
                          sx={[
                            pillSx,
                            {
                              color: 'text.primary',
                              textDecoration: 'none',
                              '&:hover': {
                                bgcolor: (theme: Theme) => alpha(theme.palette.primary.main, 0.22)
                              }
                            }
                          ]}
                        >
                          {inner}
                        </Box>
                      );
                    })}
                  </Box>
                </Stack>
              )}
              {entry.onyomi.length > 0 && (
                <InfoRow label={t('kanji.onReading')} value={entry.onyomi.join('、')} japanese />
              )}
              {entry.kunyomi.length > 0 && (
                <InfoRow
                  label={t('kanji.kunReading')}
                  value={entry.kunyomi.map(formatReading).join('、')}
                  japanese
                />
              )}
            </Stack>
          </Box>
        </Paper>

        {entry.mnemonic && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="overline" color="text.secondary" sx={{ display: 'block' }}>
              {t('kanji.mnemonic')}
            </Typography>
            <Typography variant="body2">{entry.mnemonic[locale]}</Typography>
          </Box>
        )}

        {entry.note && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="overline" color="text.secondary" sx={{ display: 'block' }}>
              {t('kanji.note')}
            </Typography>
            <Typography variant="body2">{entry.note[locale]}</Typography>
          </Box>
        )}

        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: 'block', mt: 2, mb: 0.5 }}
        >
          {t('kanji.examples')}
        </Typography>
        <Stack spacing={1}>
          {entry.examples.map((example) => (
            <SpeakableSurface
              key={exampleWord(example.parts)}
              text={exampleReading(example.parts)}
              sx={{ p: 1.5 }}
            >
              <Typography variant="body1" component="span" lang="ja" sx={{ fontWeight: 600 }}>
                {exampleWord(example.parts)}
                <Box component="span" sx={{ color: 'text.secondary', fontWeight: 400, ml: 1 }}>
                  {exampleReading(example.parts)}
                </Box>
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.25 }}>
                {example.meaning[locale]}
              </Typography>
            </SpeakableSurface>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}
