import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import {
  Box,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'
import { playKanaAudio } from '@/utils/kana-audio.ts'
import { KanaDisplay } from '@/components/kana-display.tsx'

export type AlphabetCell = {
  char: string
  romaji: string
  yoonBase?: string
  yoonSuffix?: string
}

export type AlphabetChartRow = {
  seion: (AlphabetCell | null)[]
  dakuten?: (AlphabetCell | null)[]
  handakuten?: (AlphabetCell | null)[]
}

type VoicedCell = {
  dakuten: AlphabetCell | null
  handakuten: AlphabetCell | null
}

type DisplayRow = {
  seion: (AlphabetCell | null)[]
  voiced: VoicedCell[]
  tall: boolean
}

function toDisplayRows(rows: AlphabetChartRow[]): DisplayRow[] {
  return rows.map((row) => ({
    seion: row.seion,
    voiced: row.seion.map((_, index) => ({
      dakuten: row.dakuten?.[index] ?? null,
      handakuten: row.handakuten?.[index] ?? null,
    })),
    tall: Boolean(row.handakuten),
  }))
}

const CELL_SIZE = 90

function getRowHeight(tall: boolean) {
  return tall ? CELL_SIZE * 2 : CELL_SIZE
}

function getCellSx(tall: boolean, isLastRow: boolean, isLastCol: boolean) {
  const height = getRowHeight(tall)

  return {
    width: '20%',
    height,
    minHeight: height,
    p: 1,
    verticalAlign: 'middle' as const,
    boxSizing: 'border-box' as const,
    borderTop: 0,
    borderLeft: 0,
    borderRight: isLastCol ? 0 : '1px solid',
    borderBottom: isLastRow ? 0 : '1px solid',
    borderColor: 'divider',
  }
}

function ChartCell({ cell, compact = false }: { cell: AlphabetCell; compact?: boolean }) {
  return (
    <>
      <KanaDisplay cell={cell} variant="chart" compact={compact} />
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: 'block', lineHeight: 1.1, fontSize: compact ? '0.65rem' : undefined }}
      >
        {cell.romaji}
      </Typography>
    </>
  )
}

function PlayableChartCell({ cell, compact = false }: { cell: AlphabetCell; compact?: boolean }) {
  const handlePlay = () => playKanaAudio(cell.romaji, cell.char)

  return (
    <Box
      className="playable-cell"
      onClick={handlePlay}
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1,
        cursor: 'pointer',
        '&:hover .speaker-button': { opacity: 1 },
        '&:focus-within .speaker-button': { opacity: 1 },
      }}
    >
      <ChartCell cell={cell} compact={compact} />
      <IconButton
        className="speaker-button"
        size="small"
        aria-label={`Play ${cell.char}, ${cell.romaji}`}
        onClick={(event) => {
          event.stopPropagation()
          handlePlay()
        }}
        sx={{
          position: 'absolute',
          right: 0,
          bottom: 4,
          opacity: 0,
          transition: 'opacity 0.15s',
          '&:focus-visible': {
            opacity: 1,
          },
        }}
      >
        <VolumeUpIcon sx={{ fontSize: compact ? 16 : 20 }} />
      </IconButton>
    </Box>
  )
}

function VoicedChartCell({ cell, tall }: { cell: VoicedCell; tall: boolean }) {
  const compact = Boolean(cell.dakuten && cell.handakuten)
  const innerHeight = getRowHeight(tall) - 16

  return (
    <Box
      sx={{
        height: innerHeight,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: tall ? 0.5 : compact ? 0.25 : 0,
        width: '100%',
      }}
    >
      {cell.dakuten && (
        <Box sx={{ flex: 1, width: '100%', minHeight: 0 }}>
          <PlayableChartCell cell={cell.dakuten} compact={compact} />
        </Box>
      )}
      {cell.handakuten && (
        <Box sx={{ flex: 1, width: '100%', minHeight: 0 }}>
          <PlayableChartCell cell={cell.handakuten} compact={compact} />
        </Box>
      )}
    </Box>
  )
}

function BaseChartCell({ cell, tall }: { cell: AlphabetCell | null; tall: boolean }) {
  return (
    <Box
      sx={{
        height: getRowHeight(tall) - 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      {cell && <PlayableChartCell cell={cell} />}
    </Box>
  )
}

function AlphabetChartTable({
  rows,
  variant,
}: {
  rows: DisplayRow[]
  variant: 'seion' | 'voiced'
}) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        width: '100%',
        boxSizing: 'border-box',
        boxShadow: 'none',
        overflowX: 'auto',
        overflowY: 'hidden',
      }}
    >
      <Table
        sx={{
          tableLayout: 'fixed',
          width: '100%',
          borderCollapse: 'collapse',
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={`${variant}-${rowIndex}`} sx={{ height: getRowHeight(row.tall) }}>
              {(variant === 'seion' ? row.seion : row.voiced).map((cell, colIndex) => (
                <TableCell
                  key={`${variant}-${rowIndex}-${colIndex}`}
                  align="center"
                  sx={getCellSx(
                    row.tall,
                    rowIndex === rows.length - 1,
                    colIndex === row.seion.length - 1,
                  )}
                >
                  {variant === 'seion' ? (
                    <BaseChartCell cell={cell as AlphabetCell | null} tall={row.tall} />
                  ) : (
                    <VoicedChartCell cell={cell as VoicedCell} tall={row.tall} />
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

type AlphabetChartPageProps = {
  title: string
  description: string
  chartRows: AlphabetChartRow[]
  yoonChartRows: AlphabetChartRow[]
}

function ChartSection({ chartRows }: { chartRows: AlphabetChartRow[] }) {
  const displayRows = toDisplayRows(chartRows)

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'flex-start',
        width: '100%',
      }}
    >
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, height: 20 }}>
          Seion (清音)
        </Typography>
        <AlphabetChartTable rows={displayRows} variant="seion" />
      </Box>

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, height: 20 }}>
          Dakuten / Handakuten (゛ / ゜)
        </Typography>
        <AlphabetChartTable rows={displayRows} variant="voiced" />
      </Box>
    </Box>
  )
}

export function AlphabetChartPage({
  title,
  description,
  chartRows,
  yoonChartRows,
}: AlphabetChartPageProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {description}
      </Typography>

      <ChartSection chartRows={chartRows} />

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Yoon (拗音)
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Combined sounds with small ゃ, ゅ, ょ — e.g. き + ゃ = きゃ (kya).
        </Typography>
        <ChartSection chartRows={yoonChartRows} />
      </Box>
    </Container>
  )
}
