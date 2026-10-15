import { alpha, type Theme } from '@mui/material/styles';

export const FOCUS_OUTLINE_WIDTH_PX = 1;
export const FOCUS_OUTLINE_ALPHA = 0.4;

export function focusOutlineColor(theme: Theme): string {
  return alpha(theme.palette.primary.main, FOCUS_OUTLINE_ALPHA);
}

/** 1px light-sakura ring for keyboard / MUI `focusVisible`. */
export function focusVisibleSx(theme: Theme) {
  return {
    outline: `${FOCUS_OUTLINE_WIDTH_PX}px solid ${focusOutlineColor(theme)}`,
    outlineOffset: 2
  };
}
