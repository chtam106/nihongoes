import type { ReactNode } from 'react';
import { Box, Link } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';

type SectionHeaderWithTranslationToggleProps = {
  title: ReactNode;
  showTranslation: boolean;
  onToggle: () => void;
};

/**
 * Title and show/hide translation on one row when space allows; the link wraps
 * to its own left-aligned line when the title is too long.
 */
export function SectionHeaderWithTranslationToggle({
  title,
  showTranslation,
  onToggle
}: SectionHeaderWithTranslationToggleProps) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        width: '100%',
        columnGap: { xs: 1, sm: 2 },
        rowGap: 0.5,
        mb: 1.5
      }}
    >
      <Box sx={{ flex: '0 1 auto', minWidth: 0, maxWidth: '100%' }}>{title}</Box>
      <Link
        component="button"
        type="button"
        variant="body2"
        underline="none"
        onClick={onToggle}
        sx={{
          flex: '0 0 auto',
          flexShrink: 0,
          lineHeight: 1.66,
          whiteSpace: 'nowrap',
          textDecoration: 'none',
          '&:hover': { textDecoration: 'none' },
          '&:active': { textDecoration: 'none' }
        }}
      >
        {showTranslation ? t('course.hideTranslation') : t('course.showTranslation')}
      </Link>
    </Box>
  );
}
