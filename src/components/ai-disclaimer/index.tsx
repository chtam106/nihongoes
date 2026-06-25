import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Stack, Typography } from '@mui/material';
import { alpha, type SxProps, type Theme } from '@mui/material/styles';

type AiDisclaimerProps = {
  text: string;
  sx?: SxProps<Theme>;
};

/** A warning callout noting that the content is AI-generated and may have mistakes. */
export function AiDisclaimer({ text, sx }: AiDisclaimerProps) {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={[
        {
          p: 1.5,
          borderRadius: 2,
          border: 1,
          borderColor: 'warning.main',
          bgcolor: (theme) => alpha(theme.palette.warning.main, 0.12),
          color: 'warning.dark',
          alignItems: 'flex-start'
        },
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
    >
      <InfoOutlinedIcon fontSize="small" sx={{ mt: '2px', flexShrink: 0 }} />
      <Typography variant="body2" sx={{ fontWeight: 500, color: 'inherit' }}>
        {text}
      </Typography>
    </Stack>
  );
}

export default AiDisclaimer;
