import type { ReactNode } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { Box, Button } from '@mui/material'

export type ChoiceState = 'default' | 'correct' | 'wrong'

type ChoiceButtonProps = {
  children: ReactNode
  state: ChoiceState
  dimmed: boolean
  onClick: () => void
  lang?: string
}

/**
 * A quiz answer button. It always uses the `outlined` variant so the border width stays
 * constant across states (correct/wrong only fill the background) — this avoids the layout
 * shift caused by switching between outlined and contained variants.
 */
export function ChoiceButton({ children, state, dimmed, onClick, lang }: ChoiceButtonProps) {
  const filled = state === 'correct' || state === 'wrong'
  const palette = state === 'correct' ? 'success' : 'error'

  return (
    <Button
      onClick={onClick}
      disabled={dimmed}
      variant="outlined"
      color={state === 'correct' ? 'success' : state === 'wrong' ? 'error' : 'primary'}
      fullWidth
      size="large"
      endIcon={
        state === 'correct' ? (
          <CheckCircleOutlineIcon />
        ) : state === 'wrong' ? (
          <HighlightOffIcon />
        ) : undefined
      }
      sx={{
        justifyContent: 'space-between',
        textAlign: 'left',
        py: 1.5,
        textTransform: 'none',
        fontSize: '1.05rem',
        borderWidth: 1,
        '&.Mui-disabled': { opacity: 0.6 },
        ...(filled && {
          bgcolor: `${palette}.main`,
          borderColor: `${palette}.main`,
          color: `${palette}.contrastText`,
          '&:hover': { bgcolor: `${palette}.main`, borderColor: `${palette}.main` },
        }),
      }}
    >
      <Box component="span" lang={lang}>
        {children}
      </Box>
    </Button>
  )
}
