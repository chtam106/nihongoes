import type { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { SEGMENT_BUTTON_CONTROLS_GAP } from '@/features/alphabet/exercise/control-styles.ts';

type ExercisePageLayoutProps = {
  title: string;
  subtitle: string;
  note?: ReactNode;
  controls?: ReactNode;
  children: ReactNode;
};

export function ExercisePageLayout({
  title,
  subtitle,
  note,
  controls,
  children
}: ExercisePageLayoutProps) {
  return (
    <PageContainer>
      <Heading component="h1" gutterBottom>
        {title}
      </Heading>
      <Typography variant="body1" color="text.secondary" sx={{ mb: note ? 1.5 : 3 }}>
        {subtitle}
      </Typography>

      {note && <Box sx={{ mb: 3 }}>{note}</Box>}

      {controls && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(4, minmax(0, 1fr))'
            },
            gap: SEGMENT_BUTTON_CONTROLS_GAP,
            mb: 4
          }}
        >
          {controls}
        </Box>
      )}

      {children}
    </PageContainer>
  );
}
