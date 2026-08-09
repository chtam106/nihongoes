import type { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { Heading } from '@/components/heading';
import type { GridRow } from '@/constants/gojuon.ts';
import { interactiveSurfaceSx } from '@/theme/surfaces.ts';

type CellButtonProps = {
  ariaLabel: string;
  onActivate: () => void;
  romaji: string;
  children: ReactNode;
};

/** Interactive chart cell: a tap/keyboard target that plays audio, with romaji below. */
export function CellButton({ ariaLabel, onActivate, romaji, children }: CellButtonProps) {
  return (
    <Box
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onClick={onActivate}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onActivate();
        }
      }}
      sx={[
        interactiveSurfaceSx,
        {
          minHeight: { xs: 52, md: 68 },
          py: { xs: 0.75, md: 1 },
          px: 0.25,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0.25,
          bgcolor: 'background.paper',
          cursor: 'pointer',
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: 2
          }
        }
      ]}
    >
      {children}
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ lineHeight: 1.1, fontSize: { xs: 13, md: 15 } }}
      >
        {romaji}
      </Typography>
    </Box>
  );
}

const HEADER_LABEL_SX = {
  fontWeight: 500,
  color: 'text.secondary',
  fontSize: { xs: '1rem', md: '1.2rem' }
} as const;

type GojuonGridProps<T> = {
  rows: GridRow<T>[];
  headers: string[];
  renderCell: (cell: T) => ReactNode;
  minCellWidth?: number;
  maxCellWidth?: number;
};

export function GojuonGrid<T>({
  rows,
  headers,
  renderCell,
  minCellWidth = 44,
  maxCellWidth = 96
}: GojuonGridProps<T>) {
  const columnCount = headers.length;

  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'auto',
        pt: 0.5,
        pb: 2,
        px: 0.5
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `28px repeat(${columnCount}, minmax(${minCellWidth}px, ${maxCellWidth}px))`,
          gap: 0.5,
          width: 'fit-content',
          maxWidth: '100%'
        }}
      >
        <Box />
        {headers.map((header) => (
          <Typography key={header} align="center" sx={{ ...HEADER_LABEL_SX, pb: 0.5 }}>
            {header}
          </Typography>
        ))}

        {rows.map((row, rowIndex) => (
          <Box key={`${row.label}-${rowIndex}`} sx={{ display: 'contents' }}>
            <Typography
              sx={{
                ...HEADER_LABEL_SX,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {row.label}
            </Typography>
            {row.cells.map((cell, colIndex) => (
              <Box key={`${row.label}-${rowIndex}-${colIndex}`} sx={{ overflow: 'visible' }}>
                {cell && renderCell(cell)}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

type ChartBlockProps = {
  heading: string;
  children: ReactNode;
};

export function ChartBlock({ heading, children }: ChartBlockProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <Heading
        component="h2"
        sx={{ mb: 1.5, fontSize: { xs: '1.125rem', md: '1.25rem' }, fontWeight: 600 }}
      >
        {heading}
      </Heading>
      {children}
    </Box>
  );
}
