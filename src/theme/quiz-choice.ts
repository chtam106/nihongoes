import { alpha } from '@mui/material/styles';
import { QUIZ_CHOICE_COLOR } from '@/constants/quiz.ts';

/**
 * Resting look of an outlined quiz answer button (before correct/wrong feedback).
 * Hover is limited to real hover devices: on touch screens the last tap point stays
 * ":hover", so the choice at the same spot on the next question would look selected.
 */
export const quizChoiceSx = {
  color: QUIZ_CHOICE_COLOR,
  borderColor: alpha(QUIZ_CHOICE_COLOR, 0.23),
  '&:hover': {
    borderColor: alpha(QUIZ_CHOICE_COLOR, 0.23),
    bgcolor: 'transparent'
  },
  '@media (hover: hover)': {
    '&:hover': {
      borderColor: QUIZ_CHOICE_COLOR,
      bgcolor: alpha(QUIZ_CHOICE_COLOR, 0.04)
    }
  }
};
