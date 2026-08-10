import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { renderLocaleText } from '@/utils/japanese-text.tsx';

type HintTextProps = {
  children: string;
  sx?: SxProps<Theme>;
};

export function HintText({ children, sx }: HintTextProps) {
  const sxOverrides = Array.isArray(sx) ? sx : [sx];

  return (
    <Typography
      variant="body2"
      sx={[
        {
          color: 'error.main',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 0.5
        },
        ...sxOverrides
      ]}
    >
      <Box
        component="span"
        aria-hidden="true"
        sx={{ flexShrink: 0, lineHeight: 1, transform: 'translateY(0.4em)' }}
      >
        *
      </Box>
      <Box component="span" sx={{ minWidth: 0 }}>
        {renderLocaleText(children)}
      </Box>
    </Typography>
  );
}
