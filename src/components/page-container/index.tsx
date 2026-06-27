import type { ReactNode } from 'react';
import { Container } from '@mui/material';

type PageContainerProps = {
  children: ReactNode;
  /** Reserve extra space at the bottom for a floating element (e.g. the scroll-to-top button). */
  bottomGutter?: boolean;
};

/**
 * Shared page wrapper. Width and padding are centralised here (and in the
 * MuiContainer theme overrides) so individual pages don't redefine layout.
 * The bottom padding matches the top; pass `bottomGutter` on pages that float
 * a control over the bottom edge so content isn't covered.
 */
export function PageContainer({ children, bottomGutter = false }: PageContainerProps) {
  return (
    <Container
      maxWidth={false}
      sx={[
        { width: '100%', maxWidth: 1200, mx: 'auto' },
        bottomGutter &&
          ((theme) => ({
            paddingBottom: {
              xs: `calc(${theme.spacing(4)} + 50px)`,
              md: `calc(${theme.spacing(6)} + 30px)`
            }
          }))
      ]}
    >
      {children}
    </Container>
  );
}
