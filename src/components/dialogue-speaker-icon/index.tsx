import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import { Box } from '@mui/material';

type SpeakerIconColumnProps = {
  color: string;
  label: string;
};

/** Fixed column; parent row should use alignItems flex-end so the icon lines up with base text. */
export function SpeakerIconColumn({ color, label }: SpeakerIconColumnProps) {
  return (
    <Box
      sx={{
        flexShrink: 0,
        width: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        mb: '0.12em'
      }}
    >
      <RecordVoiceOverOutlinedIcon
        aria-label={label}
        sx={{ color, fontSize: '1.125rem', display: 'block' }}
      />
    </Box>
  );
}

export function SpeakerIconSpacer() {
  return <Box aria-hidden sx={{ flexShrink: 0, width: '1.5rem' }} />;
}
