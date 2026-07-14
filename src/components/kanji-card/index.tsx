import { Box, Paper, Typography } from '@mui/material';
import { alpha, type Theme } from '@mui/material/styles';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { SpeakableSurface } from '@/components/speakable-surface';
import { useTranslation } from '@/i18n/use-translation.ts';
import {
  formatKanjiMeaning,
  getRadicalByChar,
  KANJI_RADICALS_PATH,
  type KanjiComponent,
  type KanjiEntry,
  type KanjiReadingPart
} from '@/constants/kanji/index.ts';
import { COMPONENT_ROLE_COLORS } from '@/theme/kanji-component-colors.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';

/** The primary sense of a bilingual radical meaning (first "; "-separated clause). */
function radicalPrimaryMeaning(vi: string, en: string, locale: 'en' | 'vi'): string {
  const text = locale === 'vi' ? formatKanjiMeaning(vi) : en;
  return text.split('; ')[0]!;
}

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

type RowLabelProps = {
  children: string;
};

/**
 * A row label cell. All info rows share one CSS grid (see KanjiCard) so the label
 * column auto-sizes to the widest label and every value column lines up.
 */
function RowLabel({ children }: RowLabelProps) {
  return (
    <Typography variant="body2" color="text.secondary">
      {children}
    </Typography>
  );
}

function InfoRow({ label, value, japanese, emphasize }: InfoRowProps) {
  return (
    <>
      <RowLabel>{label}</RowLabel>
      <Typography
        variant="body2"
        lang={japanese ? 'ja' : undefined}
        sx={{ fontWeight: emphasize ? 600 : 400 }}
      >
        {value}
      </Typography>
    </>
  );
}

// Shared soft-shadow pill styling, mirroring the component-radical pills.
const PILL_SHADOW = '0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)';

// Pill styling for a single reading.
const readingPillSx = {
  display: 'inline-flex',
  alignItems: 'baseline',
  px: 0.75,
  py: 0.25,
  borderRadius: 1,
  fontWeight: 600,
  bgcolor: 'background.paper',
  boxShadow: PILL_SHADOW
} as const;

type ReadingRowProps = {
  label: string;
  readings: string[];
};

/** A label followed by each reading rendered as its own tag/pill. */
function ReadingRow({ label, readings }: ReadingRowProps) {
  return (
    <>
      <RowLabel>{label}</RowLabel>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
        {readings.map((reading) => (
          <Box key={reading} component="span" lang="ja" sx={readingPillSx}>
            {reading}
          </Box>
        ))}
      </Box>
    </>
  );
}

type ComponentsRowProps = {
  entry: KanjiEntry;
};

/**
 * The "Components" row: each building block as a chip colored by its role
 * (radical / semantic / phonetic / other). Chips whose char is one of the 214
 * radicals show its meaning and link to the radicals page; others show the char
 * only. Falls back to the legacy `components` list (all treated as radicals).
 */
/**
 * The components to display for a kanji. Prefers the authored `parts`; otherwise
 * falls back to the character's own dictionary radical (for atomic kanji that are
 * themselves a radical, e.g. 木 -> 木), then to the legacy `components` list.
 */
function resolveParts(entry: KanjiEntry): KanjiComponent[] {
  if (entry.parts) {
    return entry.parts;
  }

  if (getRadicalByChar(entry.char)) {
    return [{ char: entry.char, role: 'radical' }];
  }

  return entry.components.map((char) => ({ char, role: 'radical' as const }));
}

/** Display order for component chips: radical first, then semantic, phonetic, other. */
const ROLE_ORDER: Record<KanjiComponent['role'], number> = {
  radical: 0,
  semantic: 1,
  phonetic: 2,
  other: 3
};

function ComponentsRow({ entry }: ComponentsRowProps) {
  const { locale, t } = useTranslation();

  const parts = [...resolveParts(entry)].sort((a, b) => ROLE_ORDER[a.role] - ROLE_ORDER[b.role]);

  if (parts.length < 1) {
    return null;
  }

  return (
    <>
      <RowLabel>{t('kanji.componentsLabel')}</RowLabel>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
        {parts.map((part, partIndex) => {
          const radical = getRadicalByChar(part.char);
          const color = COMPONENT_ROLE_COLORS[part.role];
          const key = `${part.char}-${partIndex}`;
          const chipSx = {
            display: 'inline-flex',
            alignItems: 'baseline',
            gap: 0.5,
            px: 0.75,
            py: 0.25,
            borderRadius: 1,
            bgcolor: (theme: Theme) => alpha(color, theme.palette.mode === 'light' ? 0.12 : 0.24),
            boxShadow: PILL_SHADOW
          };
          const inner = (
            <>
              <Box component="span" lang="ja" sx={{ fontWeight: 600, color }}>
                {part.char}
              </Box>
              {radical && (
                <Box component="span" sx={{ color: 'text.secondary' }}>
                  {radicalPrimaryMeaning(radical.meaning.vi, radical.meaning.en, locale)}
                </Box>
              )}
            </>
          );

          if (!radical) {
            return (
              <Box component="span" key={key} sx={chipSx}>
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
                chipSx,
                {
                  color: 'text.primary',
                  textDecoration: 'none',
                  transition: 'box-shadow 0.2s ease',
                  '&:hover': { boxShadow: '0 4px 10px rgba(0, 0, 0, 0.12)' }
                }
              ]}
            >
              {inner}
            </Box>
          );
        })}
      </Box>
    </>
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
    <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 } }]}>
      <Paper
        elevation={0}
        sx={[
          elevatedSurfaceSx,
          {
            position: 'relative',
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
          aria-label={t('kanji.kanjiHeading', { number: index })}
          sx={{
            position: 'absolute',
            top: 6,
            left: 8,
            zIndex: 1,
            fontSize: 14,
            lineHeight: 1,
            fontWeight: 600,
            color: 'text.secondary'
          }}
        >
          #{index}
        </Typography>
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
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              columnGap: 1,
              rowGap: 0.5,
              alignItems: 'baseline'
            }}
          >
            <InfoRow
              label={t('kanji.meaningLabel')}
              value={locale === 'vi' ? formatKanjiMeaning(entry.meaning.vi) : entry.meaning.en}
              emphasize
            />
            <ComponentsRow entry={entry} />
            {entry.onyomi.length > 0 && (
              <ReadingRow label={t('kanji.onReading')} readings={entry.onyomi} />
            )}
            {entry.kunyomi.length > 0 && (
              <ReadingRow
                label={t('kanji.kunReading')}
                readings={entry.kunyomi.map(formatReading)}
              />
            )}
          </Box>
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
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 1
        }}
      >
        {entry.examples.map((example, exampleIndex) => {
          const isLoneLastOnMobile =
            entry.examples.length % 2 === 1 && exampleIndex === entry.examples.length - 1;

          return (
            <SpeakableSurface
              key={exampleWord(example.parts)}
              text={exampleReading(example.parts)}
              sx={{
                p: 1.5,
                height: '100%',
                gridColumn: isLoneLastOnMobile ? { xs: '1 / -1', md: 'auto' } : undefined
              }}
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
          );
        })}
      </Box>
    </Paper>
  );
}
