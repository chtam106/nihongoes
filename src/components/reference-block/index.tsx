'use client';

import type { KeyboardEvent, ReactNode } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import type { ReferenceBlock, ReferenceTableJpCell } from '@/constants/courses/index.ts';
import { Heading } from '@/components/heading';
import { HintText } from '@/components/hint-text';
import { SpeakableSurface } from '@/components/speakable-surface';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { Locale } from '@/i18n/translations.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';
import { formatJapaneseDisplay } from '@/utils/japanese-display.ts';
import { renderJapaneseText } from '@/utils/japanese-text.tsx';
import { speakJapanese, useSpeechSupported } from '@/utils/speech.ts';

type VocabHeadwordProps = {
  item: { kana: string; kanji?: string };
};

function VocabHeadword({ item }: VocabHeadwordProps) {
  const display =
    item.kanji && item.kanji !== item.kana ? `${item.kanji}（${item.kana}）` : item.kana;

  return (
    <Typography variant="body1" lang="ja" sx={{ fontWeight: 600 }}>
      {display}
    </Typography>
  );
}

type SpeakableTableTextProps = {
  text: string;
  children: ReactNode;
};

/** Clickable Japanese text for table cells - no card/button chrome. */
function SpeakableTableText({ text, children }: SpeakableTableTextProps) {
  const { t } = useTranslation();
  const canSpeak = useSpeechSupported();
  const spokenText = formatJapaneseDisplay(text);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      speakJapanese(spokenText);
    }
  };

  return (
    <Box
      role={canSpeak ? 'button' : undefined}
      tabIndex={canSpeak ? 0 : undefined}
      aria-label={canSpeak ? t('common.playAudio') : undefined}
      onClick={canSpeak ? () => speakJapanese(spokenText) : undefined}
      onKeyDown={canSpeak ? handleKeyDown : undefined}
      sx={{ cursor: canSpeak ? 'pointer' : undefined }}
    >
      {children}
    </Box>
  );
}

type ReferenceTableCellProps = {
  cell: ReferenceTableJpCell;
  locale: Locale;
  speak?: boolean;
};

function ReferenceTableCell({ cell, locale, speak }: ReferenceTableCellProps) {
  const content = (
    <>
      <Typography variant="body1" lang="ja" sx={{ fontWeight: 600, overflowWrap: 'break-word' }}>
        {renderJapaneseText(cell.jp, cell.ruby)}
      </Typography>
      {cell.meaning && (
        <Typography variant="body2" sx={{ mt: 0.25, overflowWrap: 'break-word' }}>
          {cell.meaning[locale]}
        </Typography>
      )}
    </>
  );

  if (speak) {
    return <SpeakableTableText text={cell.speech ?? cell.jp}>{content}</SpeakableTableText>;
  }

  return content;
}

type ReferenceTableLanguagesProps = {
  cells: ReferenceTableJpCell[];
  locale: Locale;
};

function ReferenceTableLanguages({ cells, locale }: ReferenceTableLanguagesProps) {
  return (
    <Stack spacing={0.75}>
      {cells.map((cell, index) => (
        <SpeakableTableText key={index} text={cell.speech ?? cell.jp}>
          <Typography
            variant="body1"
            lang="ja"
            sx={{ fontWeight: 600, overflowWrap: 'break-word' }}
          >
            {renderJapaneseText(cell.jp, cell.ruby)}
          </Typography>
          {cell.meaning && (
            <Typography variant="body2" sx={{ mt: 0.25, overflowWrap: 'break-word' }}>
              {cell.meaning[locale]}
            </Typography>
          )}
        </SpeakableTableText>
      ))}
    </Stack>
  );
}

type ReferenceBlockViewProps = {
  block: ReferenceBlock;
  locale: Locale;
};

export function ReferenceBlockView({ block, locale }: ReferenceBlockViewProps) {
  return (
    <Box>
      <Heading scale="subsection" component="h3" sx={{ mb: 1.5 }}>
        {block.title[locale]}
      </Heading>

      {block.kind === 'vocab' && (
        <Stack spacing={1.5}>
          {block.intro && (
            <Typography variant="body1" color="text.secondary">
              {block.intro[locale]}
            </Typography>
          )}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 1.5
            }}
          >
            {block.items.map((item, index) => (
              <SpeakableSurface
                key={`ref-vocab-${index}-${item.kana}`}
                text={item.speech ?? item.kana}
                sx={{ p: 1.5 }}
              >
                <VocabHeadword item={item} />
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  {item.meaning[locale]}
                </Typography>
              </SpeakableSurface>
            ))}
          </Box>
          {block.notes?.map((note, index) => (
            <HintText key={index} sx={{ display: 'block' }}>
              {note[locale]}
            </HintText>
          ))}
        </Stack>
      )}

      {block.kind === 'steps' && (
        <Stack spacing={1.5}>
          {block.intro && (
            <Typography variant="body1" color="text.secondary">
              {block.intro[locale]}
            </Typography>
          )}
          <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 } }]}>
            <Stack component="ol" spacing={1.25} sx={{ m: 0, pl: 2.5 }}>
              {block.steps.map((step, index) => (
                <Typography key={index} component="li" variant="body1">
                  {step.text[locale]}
                </Typography>
              ))}
            </Stack>
          </Paper>
          {block.notes?.map((note, index) => (
            <HintText key={index} sx={{ display: 'block' }}>
              {note[locale]}
            </HintText>
          ))}
        </Stack>
      )}

      {block.kind === 'list' && (
        <Stack spacing={1.5}>
          {block.intro && (
            <Typography variant="body1" color="text.secondary">
              {block.intro[locale]}
            </Typography>
          )}
          <Stack spacing={1}>
            {block.rows.map((row, index) => {
              const isPhraseRow = Boolean(row.jp && !row.number);
              const isStackedRow = block.layout === 'stacked' && Boolean(row.number);

              return (
                <Paper key={index} elevation={0} sx={[elevatedSurfaceSx, { p: 1.5 }]}>
                  {isPhraseRow && (
                    <Stack spacing={0.75}>
                      <Typography variant="body1" lang="ja" sx={{ fontWeight: 600 }}>
                        {renderJapaneseText(row.jp!, row.ruby)}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {row.meaning[locale]}
                      </Typography>
                      {row.note && (
                        <Box sx={[subtleSurfaceSx, { px: 1.25, py: 1, mt: 0.25 }]}>
                          <Typography variant="body1" color="text.secondary">
                            {row.note[locale]}
                          </Typography>
                        </Box>
                      )}
                    </Stack>
                  )}

                  {isStackedRow && (
                    <Stack spacing={0.75}>
                      <Typography
                        variant="body1"
                        lang="ja"
                        component="div"
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1.5,
                          alignItems: 'baseline',
                          fontWeight: 600
                        }}
                      >
                        <Box component="span">
                          {renderJapaneseText(row.number!, row.numberRuby)}
                        </Box>
                        {row.jp && (
                          <Box component="span">{renderJapaneseText(row.jp, row.ruby)}</Box>
                        )}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {[row.numberMeaning?.[locale], row.meaning[locale]]
                          .filter(Boolean)
                          .join(': ')}
                      </Typography>
                      {row.note && (
                        <Box sx={[subtleSurfaceSx, { px: 1.25, py: 1, mt: 0.25 }]}>
                          <Typography variant="body1" color="text.secondary">
                            {row.note[locale]}
                          </Typography>
                        </Box>
                      )}
                    </Stack>
                  )}

                  {!isPhraseRow && !isStackedRow && (
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: 'auto 1fr', sm: 'auto auto 1fr' },
                        gap: { xs: 0.5, sm: 1.5 },
                        alignItems: 'baseline'
                      }}
                    >
                      {row.number && (
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}
                        >
                          {row.number}
                        </Typography>
                      )}
                      {row.jp && (
                        <Typography variant="body1" lang="ja" sx={{ fontWeight: 600 }}>
                          {renderJapaneseText(row.jp, row.ruby)}
                        </Typography>
                      )}
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ gridColumn: { xs: '1 / -1', sm: 'auto' } }}
                      >
                        {row.meaning[locale]}
                      </Typography>
                      {row.note && (
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ gridColumn: '1 / -1', mt: 0.5 }}
                        >
                          {row.note[locale]}
                        </Typography>
                      )}
                    </Box>
                  )}
                </Paper>
              );
            })}
          </Stack>
          {block.notes?.map((note, index) => (
            <HintText key={index} sx={{ display: 'block' }}>
              {note[locale]}
            </HintText>
          ))}
        </Stack>
      )}

      {block.kind === 'address' && (
        <Stack spacing={1.5}>
          {block.intro && (
            <Typography variant="body1" color="text.secondary">
              {block.intro[locale]}
            </Typography>
          )}
          <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 } }]}>
            <Typography variant="body1" lang="ja" sx={{ fontWeight: 500, whiteSpace: 'pre-line' }}>
              {renderJapaneseText(block.sample.jp, block.sample.ruby)}
            </Typography>
          </Paper>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'auto 1fr' },
              gap: 1,
              alignItems: 'baseline'
            }}
          >
            {block.parts.map((part, index) => (
              <Box
                key={index}
                sx={{
                  display: 'contents'
                }}
              >
                <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 600 }}>
                  {part.label[locale]}
                </Typography>
                <Typography variant="body1" lang="ja">
                  {renderJapaneseText(part.text, part.ruby)}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      )}

      {block.kind === 'table' && (
        <Stack spacing={1.5}>
          {block.intro && (
            <Typography variant="body1" color="text.secondary">
              {block.intro[locale]}
            </Typography>
          )}

          <Box
            component="table"
            sx={{
              width: '100%',
              borderCollapse: 'collapse',
              tableLayout: 'fixed'
            }}
          >
            <colgroup>
              <Box component="col" sx={{ width: '33.33%' }} />
              <Box component="col" sx={{ width: '33.33%' }} />
              <Box component="col" sx={{ width: '33.34%' }} />
            </colgroup>
            <Box component="thead">
              <Box component="tr" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                {[block.columns.country, block.columns.person, block.columns.language].map(
                  (label, index) => (
                    <Box
                      component="th"
                      key={index}
                      scope="col"
                      sx={{
                        textAlign: 'left',
                        py: 1,
                        pl: index === 0 ? 0 : { xs: 0.75, md: 1.5 },
                        pr: index === 2 ? 0 : { xs: 0.75, md: 1.5 },
                        fontWeight: 600,
                        verticalAlign: 'bottom',
                        overflowWrap: 'break-word'
                      }}
                    >
                      <Typography variant="body1" component="span">
                        {label[locale]}
                      </Typography>
                    </Box>
                  )
                )}
              </Box>
            </Box>
            <Box component="tbody">
              {block.rows.map((row, rowIndex) => (
                <Box component="tr" key={rowIndex} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Box
                    component="td"
                    sx={{
                      py: 1.25,
                      pr: { xs: 0.75, md: 1.5 },
                      verticalAlign: 'top',
                      overflowWrap: 'break-word'
                    }}
                  >
                    <ReferenceTableCell cell={row.country} locale={locale} />
                  </Box>
                  <Box
                    component="td"
                    sx={{
                      py: 1.25,
                      px: { xs: 0.75, md: 1.5 },
                      verticalAlign: 'top',
                      overflowWrap: 'break-word'
                    }}
                  >
                    <ReferenceTableCell cell={row.person} locale={locale} speak />
                  </Box>
                  <Box
                    component="td"
                    sx={{
                      py: 1.25,
                      pl: { xs: 0.75, md: 1.5 },
                      verticalAlign: 'top',
                      overflowWrap: 'break-word'
                    }}
                  >
                    <ReferenceTableLanguages cells={row.languages} locale={locale} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Stack>
      )}
    </Box>
  );
}
