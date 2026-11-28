'use client';

import { useState } from 'react';
import CheckRounded from '@mui/icons-material/CheckRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { FuriganaText } from '@/components/furigana-text';
import { QUIZ_CORRECT_COLOR } from '@/constants/quiz.ts';
import type { SentenceWritingItem } from '@/types/course.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { FONT_FAMILY_JP } from '@/theme/fonts.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { translationToggleSx } from '@/theme/translation-toggle.ts';
import { isSentenceCorrect } from './sentence-answer.ts';

type SentenceWritingPromptProps = {
  item: SentenceWritingItem;
  prompt: string;
  showInput: boolean;
  onGrade: (correct: boolean) => void;
};

type CheckStatus = 'idle' | 'wrong' | 'correct';

/** Light fill on the field after Check, the same tints as quiz choices. */
function fieldTint(status: CheckStatus) {
  if (status === 'idle') {
    return {};
  }

  const main = status === 'correct' ? QUIZ_CORRECT_COLOR : pink[400];

  return {
    '& .MuiOutlinedInput-root': {
      bgcolor: alpha(main, 0.1),
      '& fieldset, &:hover fieldset, &.Mui-focused fieldset': { borderColor: alpha(main, 0.6) }
    }
  };
}

type AnswerLineProps = {
  item: SentenceWritingItem;
};

function AnswerLine({ item }: AnswerLineProps) {
  return (
    <Typography
      lang="ja"
      variant="h6"
      component="p"
      sx={{ fontFamily: FONT_FAMILY_JP, fontWeight: 500 }}
    >
      <FuriganaText text={item.jp} ruby={item.ruby} />
    </Typography>
  );
}

/**
 * One sentence to write.
 * - Writing field on: Check grades the sentence (kanji or kana both count); a
 *   wrong one shows the answer, then Next moves on.
 * - Writing field off: the cross and tick are always there; Show answer is optional.
 */
export function SentenceWritingPrompt({
  item,
  prompt,
  showInput,
  onGrade
}: SentenceWritingPromptProps) {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const [status, setStatus] = useState<CheckStatus>('idle');
  const [revealed, setRevealed] = useState(false);
  const checked = status !== 'idle';

  const handleCheck = () => {
    if (!value.trim() || checked) {
      return;
    }

    setStatus(isSentenceCorrect(value, item.jp, item.ruby) ? 'correct' : 'wrong');
  };

  return (
    <Box sx={[elevatedSurfaceSx, { p: { xs: 2.5, md: 3 } }]}>
      <Stack spacing={2.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="h6" component="p" sx={{ fontWeight: 600 }}>
          {prompt}
        </Typography>

        {showInput && (
          <>
            <TextField
              fullWidth
              multiline
              minRows={2}
              autoFocus
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onKeyDown={(event) => {
                // Enter checks (or moves on once checked); Shift+Enter makes a new line.
                if (event.key !== 'Enter' || event.shiftKey || event.nativeEvent.isComposing) {
                  return;
                }

                event.preventDefault();

                if (checked) {
                  onGrade(status === 'correct');
                  return;
                }

                handleCheck();
              }}
              placeholder={t('course.sentenceWritingPlaceholder')}
              slotProps={{ htmlInput: { lang: 'ja', readOnly: checked } }}
              sx={fieldTint(status)}
            />
            {!checked && (
              <Button
                variant="contained"
                disabled={!value.trim()}
                onClick={handleCheck}
                sx={{ width: '100%', maxWidth: 280 }}
              >
                {t('course.sentenceWritingCheck')}
              </Button>
            )}
            {status === 'wrong' && (
              <Typography variant="body1" sx={{ color: pink[700] }}>
                {t('course.sentenceWritingWrong')}
              </Typography>
            )}
            {checked && <AnswerLine item={item} />}
            {checked && (
              <Button
                variant="contained"
                onClick={() => onGrade(status === 'correct')}
                sx={{ width: '100%', maxWidth: 280 }}
              >
                {t('course.sentenceWritingNext')}
              </Button>
            )}
          </>
        )}

        {!showInput && (
          <>
            <Link
              component="button"
              type="button"
              variant="body1"
              underline="none"
              onClick={() => setRevealed((previous) => !previous)}
              sx={translationToggleSx}
            >
              {revealed ? t('exercise.hideAnswer') : t('exercise.showAnswer')}
            </Link>
            {revealed && <AnswerLine item={item} />}
            {/* Always on: the learner may grade without opening the answer. */}
            <Stack direction="row" spacing={1.5} sx={{ width: '100%', maxWidth: 420 }}>
              <Button
                variant="outlined"
                fullWidth
                aria-label={t('course.sentenceWritingMissed')}
                title={t('course.sentenceWritingMissed')}
                onClick={() => onGrade(false)}
                sx={{
                  color: pink[600],
                  borderColor: alpha(pink[400], 0.6),
                  '&:hover': { borderColor: pink[400], bgcolor: alpha(pink[400], 0.08) }
                }}
              >
                <CloseRounded />
              </Button>
              <Button
                variant="outlined"
                fullWidth
                aria-label={t('course.sentenceWritingGotIt')}
                title={t('course.sentenceWritingGotIt')}
                onClick={() => onGrade(true)}
                sx={{
                  color: '#067a28',
                  borderColor: alpha(QUIZ_CORRECT_COLOR, 0.6),
                  '&:hover': {
                    borderColor: QUIZ_CORRECT_COLOR,
                    bgcolor: alpha(QUIZ_CORRECT_COLOR, 0.08)
                  }
                }}
              >
                <CheckRounded />
              </Button>
            </Stack>
          </>
        )}
      </Stack>
    </Box>
  );
}
