import { alpha } from '@mui/material/styles';
import { QUIZ_CHOICE_COLOR } from '@/constants/quiz.ts';

/** Resting look of an outlined quiz answer button (before correct/wrong feedback). */
export const quizChoiceSx = {
  color: QUIZ_CHOICE_COLOR,
  borderColor: alpha(QUIZ_CHOICE_COLOR, 0.23),
  '&:hover': {
    borderColor: QUIZ_CHOICE_COLOR,
    bgcolor: alpha(QUIZ_CHOICE_COLOR, 0.04)
  }
};
