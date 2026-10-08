'use client';

import type { ReactNode } from 'react';
import { Box, Button } from '@mui/material';
import { pink } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { QUIZ_CORRECT_COLOR } from '@/constants/quiz.ts';
import { quizChoiceSx } from '@/theme/quiz-choice.ts';
import { hasTextSelection } from '@/utils/text-selection.ts';

type ChoiceState = 'default' | 'correct' | 'wrong';

type ChoiceButtonProps = {
  children: ReactNode;
  state: ChoiceState;
  dimmed: boolean;
  onClick: () => void;
  lang?: string;
};

/**
 * A quiz answer button. It always uses the `outlined` variant so the border width stays
 * constant across states (correct/wrong only fill the background) - this avoids the layout
 * shift caused by switching between outlined and contained variants.
 * Rendered as a div: a native button does not let a text selection start inside it.
 */
export function ChoiceButton({ children, state, dimmed, onClick, lang }: ChoiceButtonProps) {
  const filled = state === 'correct' || state === 'wrong';

  return (
    <Button
      component="div"
      role="button"
      tabIndex={dimmed ? -1 : 0}
      onClick={(event) => {
        // A drag that highlights the answer text should not also submit it.
        if (hasTextSelection()) {
          event.preventDefault();
          return;
        }

        if (!dimmed) {
          onClick();
        }
      }}
      aria-disabled={dimmed || undefined}
      variant="outlined"
      color="primary"
      fullWidth
      size="large"
      sx={() => {
        const feedbackMain = state === 'correct' ? QUIZ_CORRECT_COLOR : pink[400];
        const feedbackText = state === 'correct' ? '#067a28' : pink[700];

        return {
          justifyContent: 'space-between',
          textAlign: 'left',
          // MUI Button sets user-select: none, which blocks highlighting the answer.
          userSelect: 'text',
          // MUI Button defaults to overflow:hidden (ripple); that clips furigana.
          overflow: 'visible',
          pt: 2,
          pb: 1.5,
          textTransform: 'none',
          fontSize: '1.05rem',
          borderWidth: 1,
          ...(!filled && quizChoiceSx),
          ...(dimmed &&
            !filled && {
              opacity: 0.6,
              cursor: 'default'
            }),
          ...(filled && {
            transition: 'none',
            bgcolor: alpha(feedbackMain, 0.14),
            borderColor: alpha(feedbackMain, 0.45),
            color: feedbackText,
            '&:hover': {
              bgcolor: alpha(feedbackMain, 0.2),
              borderColor: alpha(feedbackMain, 0.62)
            },
            ...(dimmed && {
              opacity: 1,
              cursor: 'default',
              color: feedbackText,
              borderColor: alpha(feedbackMain, 0.45),
              bgcolor: alpha(feedbackMain, 0.14),
              '&:hover': {
                bgcolor: alpha(feedbackMain, 0.14),
                borderColor: alpha(feedbackMain, 0.45)
              }
            })
          })
        };
      }}
    >
      <Box component="span" lang={lang} sx={{ overflow: 'visible', userSelect: 'text' }}>
        {children}
      </Box>
    </Button>
  );
}
