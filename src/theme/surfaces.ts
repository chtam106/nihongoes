import type { SxProps } from '@mui/material';
import { alpha, type Theme } from '@mui/material/styles';

const SHADOW = '0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)';
const SHADOW_HOVER = '0 6px 16px rgba(0, 0, 0, 0.12)';

/** White surface separated by a soft shadow (Material elevated card). */
export const elevatedSurfaceSx = {
  borderRadius: 2,
  boxShadow: SHADOW
} satisfies SxProps<Theme>;

/** Elevated surface that lifts on hover, for clickable cards. */
export const interactiveSurfaceSx = {
  borderRadius: 2,
  boxShadow: SHADOW,
  transition: 'box-shadow 0.2s ease',
  '&:hover': { boxShadow: SHADOW_HOVER }
} satisfies SxProps<Theme>;

/**
 * Neutral tonal fill for secondary, low-emphasis boxes. A plain object (uses the
 * `grey.100` theme token) so it stays serializable and can be applied from
 * Server Components too - not just client ones.
 */
export const subtleSurfaceSx = {
  borderRadius: 2,
  bgcolor: 'grey.100'
} satisfies SxProps<Theme>;

/** Primary-tinted tonal fill for emphasised call-to-action surfaces. */
export const tonalSurfaceSx = (theme: Theme) => ({
  borderRadius: 2,
  backgroundColor: alpha(theme.palette.primary.main, theme.palette.mode === 'light' ? 0.06 : 0.16)
});

/**
 * Stronger sakura tonal fill for a clickable row that must stand out on a page
 * (home and flashcards daily review, home "Continue" lesson). No border.
 */
export const highlightSurfaceSx = (theme: Theme) => ({
  borderRadius: 2,
  backgroundColor: alpha(theme.palette.primary.main, 0.08),
  transition: 'background-color 0.2s ease',
  '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.14) }
});

/** 40px light sakura circle holding the icon of a `highlightSurfaceSx` row. */
export const highlightIconSx = (theme: Theme) => ({
  width: 40,
  height: 40,
  flexShrink: 0,
  borderRadius: '50%',
  display: 'grid',
  placeItems: 'center',
  color: theme.palette.primary.main,
  backgroundColor: alpha(theme.palette.primary.main, 0.12)
});
