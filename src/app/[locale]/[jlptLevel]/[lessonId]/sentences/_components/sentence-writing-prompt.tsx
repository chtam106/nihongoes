'use client';

import { useState } from 'react';
import { Box, Link, Stack, TextField, Typography } from '@mui/material';
import { FuriganaText } from '@/components/furigana-text';
import type { SentenceWritingItem } from '@/types/course.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { FONT_FAMILY_JP } from '@/theme/fonts.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { translationToggleSx } from '@/theme/translation-toggle.ts';

type SentenceWritingPromptProps = {
  item: SentenceWritingItem;
  index: number;
  prompt: string;
  showInput: boolean;
};

export function SentenceWritingPrompt({
  item,
  index,
  prompt,
  showInput
}: SentenceWritingPromptProps) {
  const { t } = useTranslation();
  const [shown, setShown] = useState(false);

  return (
    <Box sx={[elevatedSurfaceSx, { p: 2 }]}>
      <Stack spacing={1.5}>
        <Typography variant="body1">
          {index}. {prompt}
        </Typography>
        {showInput && (
          <TextField
            fullWidth
            multiline
            minRows={2}
            placeholder={t('course.sentenceWritingPlaceholder')}
            slotProps={{ htmlInput: { lang: 'ja' } }}
          />
        )}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Link
            component="button"
            type="button"
            variant="body1"
            underline="none"
            onClick={() => setShown((previous) => !previous)}
            sx={translationToggleSx}
          >
            {shown ? t('exercise.hideAnswer') : t('exercise.showAnswer')}
          </Link>
          {shown && (
            <Typography
              lang="ja"
              variant="body1"
              sx={{ fontFamily: FONT_FAMILY_JP, fontWeight: 500, mt: 0.5 }}
            >
              <FuriganaText text={item.jp} ruby={item.ruby} />
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  );
}
