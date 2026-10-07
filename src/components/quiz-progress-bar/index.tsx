'use client';

import { Box } from '@mui/material';
import { QUIZ_CORRECT_COLOR, QUIZ_INCORRECT_COLOR } from '@/constants/quiz.ts';

export type QuizSegmentResult = 'correct' | 'incorrect';

type QuizProgressBarProps = {
  total: number;
  /** Index of the question being answered. A recorded result on that slot wins over the pulse. */
  current: number;
  results: QuizSegmentResult[];
  label: string;
};

const SEGMENT_COLOR = {
  upcoming: 'grey.300',
  current: '#7c4dff',
  correct: QUIZ_CORRECT_COLOR,
  incorrect: QUIZ_INCORRECT_COLOR
} as const;

/** One equal segment per question: green if solved first try, red if missed, purple pulse on the current one. */
export function QuizProgressBar({ total, current, results, label }: QuizProgressBarProps) {
  if (total <= 0) {
    return null;
  }

  return (
    <Box
      role="progressbar"
      aria-label={label}
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={Math.min(current + 1, total)}
      sx={{
        display: 'flex',
        gap: '2px',
        height: 10,
        '@keyframes quizSegmentPulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.35 }
        }
      }}
    >
      {Array.from({ length: total }, (_, index) => {
        const recorded = results[index];
        const status = recorded ?? (index === current ? 'current' : 'upcoming');

        return (
          <Box
            key={index}
            sx={{
              flex: '1 1 0',
              minWidth: 0,
              borderRadius: '2px',
              bgcolor: SEGMENT_COLOR[status],
              ...(status === 'current' && {
                animation: 'quizSegmentPulse 1s ease-in-out infinite',
                '@media (prefers-reduced-motion: reduce)': { animation: 'none' }
              })
            }}
          />
        );
      })}
    </Box>
  );
}
