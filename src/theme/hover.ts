import { alpha, type Theme } from '@mui/material/styles';

export const HOVER_FILL_ALPHA = 0.08;

export function hoverFill(theme: Theme) {
  return alpha(theme.palette.primary.main, HOVER_FILL_ALPHA);
}

/**
 * Pink hover fill that still applies when the UA reports `(hover: none)`.
 * MUI resets `&:hover` to transparent inside that media query, which also
 * hides hover in some desktop Chromium embeds.
 */
/** Kill circular/pink hover fill (Checkbox, settings gear). */
export const hoverFillNoneSx = {
  '&:hover, &.Mui-selected:hover': {
    backgroundColor: 'transparent',
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
} as const;

export function hoverFillSx(theme: Theme, fillAlpha = HOVER_FILL_ALPHA) {
  const fill = alpha(theme.palette.primary.main, fillAlpha);

  return {
    '&:hover, &.Mui-selected:hover': {
      backgroundColor: fill,
      '@media (hover: none) and (pointer: fine)': {
        backgroundColor: fill
      }
    }
  };
}

/**
 * Touch keeps `:hover` after a tap, which leaves buttons in a darker "active"
 * color. On a coarse pointer, hover and active use the resting fill instead.
 * A filled icon button sets `--button-rest-bg`; otherwise the rest is transparent.
 */
export const coarsePressResetSx = {
  '@media (pointer: coarse)': {
    '&&:hover, &&:active': {
      backgroundColor: 'var(--button-rest-bg, transparent)'
    }
  }
} as const;
