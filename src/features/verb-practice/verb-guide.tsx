'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Box, Collapse, Paper, Stack, Typography } from '@mui/material';
import { Heading } from '@/components/heading';
import { subtleSurfaceSx } from '@/theme/surfaces.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { VerbMode } from './verbs.ts';

/** Group 1 て-form endings: [ending before ます, replacement, example]. */
const GROUP1_TE_ROWS: [string, string, string][] = [
  ['〜います・〜ちます・〜ります', '〜って', 'かいます → かって'],
  ['〜みます・〜びます・〜にます', '〜んで', 'のみます → のんで'],
  ['〜きます', '〜いて', 'かきます → かいて'],
  ['〜ぎます', '〜いで', 'およぎます → およいで'],
  ['〜します', '〜して', 'はなします → はなして']
];

/** Group 1 ない-form sound shift: い-row sound before ます → あ-row sound. */
const GROUP1_NAI_SHIFTS: [string, string][] = [
  ['い', 'わ'],
  ['き', 'か'],
  ['ぎ', 'が'],
  ['し', 'さ'],
  ['ち', 'た'],
  ['に', 'な'],
  ['び', 'ば'],
  ['み', 'ま'],
  ['り', 'ら']
];

/** Group 1 dictionary-form sound shift: い-row sound before ます → う-row sound. */
const GROUP1_DICTIONARY_SHIFTS: [string, string][] = [
  ['い', 'う'],
  ['き', 'く'],
  ['ぎ', 'ぐ'],
  ['し', 'す'],
  ['ち', 'つ'],
  ['に', 'ぬ'],
  ['び', 'ぶ'],
  ['み', 'む'],
  ['り', 'る']
];

type GuideMode = Exclude<VerbMode, 'te'>;

const GROUP1_EXAMPLES: Record<GuideMode, string[]> = {
  nai: [
    'かきます → かか + ない → かかない',
    'のみます → のま + ない → のまない',
    'あいます → あわ + ない → あわない'
  ],
  dictionary: ['かきます → かく', 'のみます → のむ', 'あいます → あう', 'まちます → まつ']
};

const GROUP2_EXAMPLES: Record<VerbMode, string[]> = {
  te: ['食べます → 食べて', '見ます → 見て'],
  nai: ['食べます → 食べない', '見ます → 見ない'],
  dictionary: ['食べます → 食べる', '見ます → 見る']
};

const GROUP3_EXAMPLES: Record<VerbMode, string[]> = {
  te: ['します → して', '来ます（きます） → 来て（きて）', '勉強します → 勉強して'],
  nai: ['します → しない', '来ます（きます） → 来ない（こない）', '勉強します → 勉強しない'],
  dictionary: ['します → する', '来ます（きます） → 来る（くる）', '勉強します → 勉強する']
};

/** Capitalized mode used in i18n keys (guideGroup2TeRule, guideGroup2DictionaryRule, ...). */
const KEY_SUFFIX: Record<VerbMode, string> = { te: 'Te', nai: 'Nai', dictionary: 'Dictionary' };

const rowSx = { px: 1.25, py: 0.75, borderRadius: 1.5, bgcolor: 'action.hover' } as const;

function JaLine({ children }: { children: ReactNode }) {
  return (
    <Typography lang="ja" variant="body2" sx={{ fontWeight: 600 }}>
      {children}
    </Typography>
  );
}

function Note({ children }: { children: ReactNode }) {
  return (
    <Typography variant="body2" color="text.secondary">
      {children}
    </Typography>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }} component="p">
      {children}
    </Typography>
  );
}

function GroupSection({
  title,
  identify,
  children
}: {
  title: string;
  identify: string;
  children: ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <Stack spacing={1}>
      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      <Label>{t('verbPractice.guideIdentifyLabel')}</Label>
      <Note>{identify}</Note>
      <Label>{t('verbPractice.guideChangeLabel')}</Label>
      {children}
    </Stack>
  );
}

/** URL hash that opens the guide, so lessons can link straight to it. */
export const VERB_GUIDE_HASH = 'guide';

/** Collapsible "how to conjugate" guide shown above the verb quiz. */
export function VerbGuide({ mode }: { mode: VerbMode }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash !== `#${VERB_GUIDE_HASH}`) return;
    // Open after hydration so server and client render the same closed state first.
    const frame = requestAnimationFrame(() => {
      setOpen(true);
      rootRef.current?.scrollIntoView({ block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  const suffix = KEY_SUFFIX[mode];

  return (
    <Paper
      ref={rootRef}
      id={VERB_GUIDE_HASH}
      elevation={0}
      sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 }, scrollMarginTop: 80 }]}
    >
      <Box
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls="verb-guide-content"
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setOpen((value) => !value);
          }
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
          cursor: 'pointer'
        }}
      >
        <Heading scale="subsection" component="h2">
          {t(`verbPractice.guide${suffix}Title`)}
        </Heading>
        <ExpandMoreOutlinedIcon
          sx={{
            color: 'text.secondary',
            transition: 'transform 0.2s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        />
      </Box>
      <Collapse in={open}>
        <Stack id="verb-guide-content" spacing={2.5} sx={{ mt: 2 }}>
          <GroupSection
            title={t('verbPractice.guideGroup1Title')}
            identify={t('verbPractice.guideGroup1Identify')}
          >
            {mode === 'te' && (
              <Stack spacing={0.75}>
                <Note>{t('verbPractice.guideGroup1TeRule')}</Note>
                {GROUP1_TE_ROWS.map(([ending, result, example]) => (
                  <Box
                    key={ending}
                    sx={{
                      ...rowSx,
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr auto', sm: '1.3fr auto 1.2fr' },
                      alignItems: 'center',
                      gap: { xs: 0.5, sm: 1.5 }
                    }}
                  >
                    <JaLine>{ending}</JaLine>
                    <Typography
                      lang="ja"
                      variant="body2"
                      sx={{ fontWeight: 700, color: 'primary.main' }}
                    >
                      → {result}
                    </Typography>
                    <Typography
                      lang="ja"
                      variant="body2"
                      color="text.secondary"
                      sx={{ gridColumn: { xs: '1 / -1', sm: 'auto' } }}
                    >
                      {example}
                    </Typography>
                  </Box>
                ))}
                <Note>{t('verbPractice.guideGroup1TeException')}</Note>
              </Stack>
            )}
            {mode !== 'te' && (
              <Stack spacing={0.75}>
                <Note>{t(`verbPractice.guideGroup1${suffix}Rule`)}</Note>
                <Box
                  sx={{ ...rowSx, display: 'flex', flexWrap: 'wrap', columnGap: 2, rowGap: 0.5 }}
                >
                  {(mode === 'nai' ? GROUP1_NAI_SHIFTS : GROUP1_DICTIONARY_SHIFTS).map(
                    ([from, to]) => (
                      <Typography key={from} lang="ja" variant="body2" sx={{ fontWeight: 600 }}>
                        {from} →{' '}
                        <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                          {to}
                        </Box>
                      </Typography>
                    )
                  )}
                </Box>
                <Box sx={rowSx}>
                  {GROUP1_EXAMPLES[mode].map((line) => (
                    <JaLine key={line}>{line}</JaLine>
                  ))}
                </Box>
                {mode === 'nai' && (
                  <>
                    <Note>{t('verbPractice.guideGroup1NaiNote')}</Note>
                    <Note>{t('verbPractice.guideGroup1NaiException')}</Note>
                  </>
                )}
              </Stack>
            )}
          </GroupSection>

          <GroupSection
            title={t('verbPractice.guideGroup2Title')}
            identify={t('verbPractice.guideGroup2Identify')}
          >
            <Note>{t(`verbPractice.guideGroup2${suffix}Rule`)}</Note>
            <Box sx={rowSx}>
              {GROUP2_EXAMPLES[mode].map((line) => (
                <JaLine key={line}>{line}</JaLine>
              ))}
            </Box>
          </GroupSection>

          <GroupSection
            title={t('verbPractice.guideGroup3Title')}
            identify={t('verbPractice.guideGroup3Identify')}
          >
            <Note>{t(`verbPractice.guideGroup3${suffix}Rule`)}</Note>
            <Box sx={rowSx}>
              {GROUP3_EXAMPLES[mode].map((line) => (
                <JaLine key={line}>{line}</JaLine>
              ))}
            </Box>
          </GroupSection>
        </Stack>
      </Collapse>
    </Paper>
  );
}
