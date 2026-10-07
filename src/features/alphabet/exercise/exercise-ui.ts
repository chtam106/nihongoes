import { pink } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { QUIZ_CORRECT_COLOR } from '@/constants/quiz.ts';

function feedbackColors(state: 'correct' | 'wrong') {
  const isCorrect = state === 'correct';

  return {
    main: isCorrect ? QUIZ_CORRECT_COLOR : pink[400],
    text: isCorrect ? '#067a28' : pink[700]
  };
}

export function resultBorderSx(state: 'correct' | 'wrong') {
  const { main, text } = feedbackColors(state);

  return {
    transition: 'none',
    borderWidth: 1,
    bgcolor: alpha(main, 0.14),
    borderColor: alpha(main, 0.45),
    color: text,
    '&:hover': {
      bgcolor: alpha(main, 0.2),
      borderColor: alpha(main, 0.62)
    },
    '&.Mui-disabled': {
      borderWidth: 1,
      bgcolor: alpha(main, 0.14),
      borderColor: alpha(main, 0.45),
      color: text,
      opacity: 1
    }
  };
}

/** Soft correct/wrong fill for a typed answer: light green or light pink. */
export function quizInputFeedbackSx(state: 'correct' | 'wrong') {
  const { main, text } = feedbackColors(state);
  const background = alpha(main, 0.14);
  const border = alpha(main, 0.45);

  return {
    '& .MuiOutlinedInput-root': { bgcolor: background },
    '& .MuiOutlinedInput-input': { color: text, WebkitTextFillColor: text },
    '& .MuiOutlinedInput-notchedOutline': { borderColor: border },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: border
    },
    '& .MuiOutlinedInput-root.Mui-error': { bgcolor: background },
    '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: border
    },
    '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-input': {
      color: text,
      WebkitTextFillColor: text
    }
  };
}
