import { Typography } from '@mui/material'
import type { AlphabetCell } from '@/constants/alphabet-charts.ts'
import { YoonGlyph } from '@/components/yoon-glyph.tsx'

type KanaDisplayProps = {
  cell: AlphabetCell
  variant?: 'prompt' | 'option' | 'chart'
  compact?: boolean
}

export function KanaDisplay({ cell, variant = 'option', compact = false }: KanaDisplayProps) {
  if (cell.yoonBase && cell.yoonSuffix) {
    return (
      <YoonGlyph
        base={cell.yoonBase}
        suffix={cell.yoonSuffix}
        compact={variant === 'option' || compact}
        large={variant === 'prompt'}
      />
    )
  }

  if (variant === 'prompt') {
    return (
      <Typography variant="h2" component="span" sx={{ lineHeight: 1.1 }}>
        {cell.char}
      </Typography>
    )
  }

  if (variant === 'chart') {
    return (
      <Typography variant={compact ? 'h6' : 'h4'} component="span" sx={{ lineHeight: 1.1 }}>
        {cell.char}
      </Typography>
    )
  }

  return (
    <Typography component="span" sx={{ fontSize: '1.5rem', lineHeight: 1.1 }}>
      {cell.char}
    </Typography>
  )
}
