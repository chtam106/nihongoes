'use client';

import type { ReactNode } from 'react';
import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';

type IconBadgeProps = {
  /** An MUI icon; it is sized by the badge. */
  children: ReactNode;
};

/**
 * The round light-sakura badge at the top of the app's small modals (daily
 * review prompt, review list confirmation): a 72px circle with a 36px icon.
 */
export function IconBadge({ children }: IconBadgeProps) {
  return (
    <Box
      aria-hidden
      sx={(theme) => ({
        width: 72,
        height: 72,
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        color: 'primary.main',
        bgcolor: alpha(theme.palette.primary.main, 0.1),
        '& .MuiSvgIcon-root': { fontSize: 36 }
      })}
    >
      {children}
    </Box>
  );
}
