import { createElement } from 'react';
import { alpha, createTheme } from '@mui/material/styles';
import {
  CheckboxCheckedIcon,
  CheckboxIndeterminateIcon,
  CheckboxUncheckedIcon
} from './checkbox-icons.tsx';
import { FOCUS_OUTLINE_ALPHA, FOCUS_OUTLINE_WIDTH_PX, focusVisibleSx } from './focus.ts';
import { FONT_FAMILY_UI } from './fonts.ts';
import { coarsePressResetSx, hoverFillSx } from './hover.ts';

// The smallest text in the app must never render below body1 (16px), on mobile
// and desktop alike. MUI's default small variants are smaller than 1rem, so we
// floor them all to 1rem here (the single source of truth for font sizing).
const MIN_FONT_SIZE = '1rem';

export const appTheme = createTheme({
  // Sakura pink + matcha green.
  palette: {
    primary: { main: '#D63A6F', light: '#F08BAE' },
    secondary: { main: '#3B9A57' }
  },
  typography: {
    fontFamily: FONT_FAMILY_UI,
    body2: { fontSize: MIN_FONT_SIZE },
    subtitle2: { fontSize: MIN_FONT_SIZE },
    caption: { fontSize: MIN_FONT_SIZE },
    overline: { fontSize: MIN_FONT_SIZE, textTransform: 'none' },
    button: { fontSize: MIN_FONT_SIZE }
  },
  components: {
    // No Material "ripple" on any clickable surface (buttons, toggles, cards,
    // nav items). The dark ripple sweeping across an element on click looks out
    // of place here; hover/selected states already give enough feedback.
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: ({ theme: muiTheme }) => ({
          '&.Mui-focusVisible': focusVisibleSx(muiTheme)
        })
      }
    },
    // MUI only attaches IconButton hover when ripple is on, and even then the
    // default fill is action.hoverOpacity (0.04) - nearly invisible. Restore a
    // readable circular hover independently of ripple.
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme: muiTheme }) => ({
          ...hoverFillSx(muiTheme),
          ...coarsePressResetSx
        })
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme: muiTheme }) => ({
          '@media (pointer: coarse)': {
            '&&.MuiButton-containedPrimary:hover, &&.MuiButton-containedPrimary:active': {
              backgroundColor: muiTheme.palette.primary.main,
              boxShadow: muiTheme.shadows[2]
            },
            '&&.MuiButton-containedSecondary:hover, &&.MuiButton-containedSecondary:active': {
              backgroundColor: muiTheme.palette.secondary.main,
              boxShadow: muiTheme.shadows[2]
            },
            '&&.MuiButton-contained:active': {
              boxShadow: muiTheme.shadows[2]
            }
          }
        })
      }
    },
    MuiChip: {
      styleOverrides: {
        // MUI Chips carry their own font size (13px, 12px when small); floor to 1rem
        // and grow the container height proportionally so the label isn't cramped.
        root: { fontSize: MIN_FONT_SIZE, height: 40 },
        sizeSmall: { fontSize: MIN_FONT_SIZE, height: 32 }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontSize: MIN_FONT_SIZE,
          lineHeight: 1.25,
          padding: '10px 12px',
          textTransform: 'none',
          '@media (pointer: coarse)': {
            '&&:hover:not(.Mui-selected), &&:active:not(.Mui-selected)': {
              backgroundColor: 'transparent'
            }
          }
        },
        sizeSmall: {
          fontSize: MIN_FONT_SIZE,
          padding: '8px 10px'
        },
        sizeLarge: {
          fontSize: MIN_FONT_SIZE,
          padding: '12px 14px'
        }
      }
    },
    MuiCheckbox: {
      defaultProps: {
        icon: createElement(CheckboxUncheckedIcon),
        checkedIcon: createElement(CheckboxCheckedIcon),
        indeterminateIcon: createElement(CheckboxIndeterminateIcon)
      },
      styleOverrides: {
        root: ({ theme: muiTheme }) => ({
          color: muiTheme.palette.primary.main,
          '&.Mui-checked, &.MuiCheckbox-indeterminate': {
            color: muiTheme.palette.primary.main
          },
          '&:hover, &.Mui-checked:hover, &.MuiCheckbox-indeterminate:hover': {
            backgroundColor: 'transparent',
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          },
          '&:active': {
            backgroundColor: 'transparent'
          }
        })
      }
    },
    // Select uses MUI's default grey outline at rest. Focused outlines
    // (inputs including Select, and ButtonBase) are 1px light sakura.
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme: muiTheme }) => ({
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: FOCUS_OUTLINE_WIDTH_PX,
            borderColor: alpha(muiTheme.palette.primary.main, FOCUS_OUTLINE_ALPHA)
          }
        })
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme: muiTheme }) => ({
          ...hoverFillSx(muiTheme),
          '&.Mui-selected, &.Mui-selected:hover, &.Mui-selected.Mui-focusVisible': {
            color: muiTheme.palette.primary.main
          }
        })
      }
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '&:hover': {
            backgroundColor: 'transparent'
          },
          '&:active': {
            backgroundColor: 'transparent'
          },
          '&.Mui-checked:hover': {
            backgroundColor: 'transparent'
          },
          '&.Mui-checked:active': {
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ ownerState, theme: muiTheme }) =>
          ownerState.disableGutters
            ? {}
            : {
                paddingTop: muiTheme.spacing(4),
                paddingBottom: muiTheme.spacing(4),
                paddingLeft: muiTheme.spacing(2),
                paddingRight: muiTheme.spacing(2),
                [muiTheme.breakpoints.up('sm')]: {
                  paddingLeft: muiTheme.spacing(4),
                  paddingRight: muiTheme.spacing(4)
                },
                [muiTheme.breakpoints.up('md')]: {
                  paddingTop: muiTheme.spacing(6),
                  paddingBottom: muiTheme.spacing(6),
                  paddingLeft: muiTheme.spacing(6),
                  paddingRight: muiTheme.spacing(6)
                }
              }
      }
    }
  }
});
