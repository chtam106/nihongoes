import { hideOnPrintSx } from '@/theme/print.ts';

/** Show/hide translation text link: matcha green, underlined on hover (mouse devices only). */
export const translationToggleSx = {
  ...hideOnPrintSx,
  color: 'secondary.main',
  lineHeight: 1.66,
  textDecoration: 'none',
  textUnderlineOffset: '3px',
  '&:hover, &:active': { textDecoration: 'none' },
  '@media (hover: hover)': {
    '&:hover': { textDecoration: 'underline' }
  }
};
