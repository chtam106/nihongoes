import { createTheme } from '@mui/material/styles';
import { FONT_FAMILY_UI } from './fonts.ts';

// The smallest text in the app must never render below body1 (16px), on mobile
// and desktop alike. MUI's default small variants are smaller than 1rem, so we
// floor them all to 1rem here (the single source of truth for font sizing).
const MIN_FONT_SIZE = '1rem';

export const appTheme = createTheme({
  typography: {
    fontFamily: FONT_FAMILY_UI,
    body2: { fontSize: MIN_FONT_SIZE },
    subtitle2: { fontSize: MIN_FONT_SIZE },
    caption: { fontSize: MIN_FONT_SIZE },
    overline: { fontSize: MIN_FONT_SIZE },
    button: { fontSize: MIN_FONT_SIZE }
  },
  components: {
    MuiChip: {
      styleOverrides: {
        // MUI Chips carry their own font size (13px, 12px when small); floor to 1rem
        // and grow the container height proportionally so the label isn't cramped.
        root: { fontSize: MIN_FONT_SIZE, height: 40 },
        sizeSmall: { fontSize: MIN_FONT_SIZE, height: 32 }
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
