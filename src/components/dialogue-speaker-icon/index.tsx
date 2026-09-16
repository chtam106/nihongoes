import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import { Box, type SxProps, type Theme } from '@mui/material';
import {
  DIALOGUE_SPEAKER_ICON_PLAIN_OFFSET_EM,
  DIALOGUE_SPEAKER_ICON_RUBY_OFFSET_EM
} from '@/components/dialogue-line-layout/metrics.ts';

type SpeakerIconColumnProps = {
  color: string;
  label: string;
  hasRuby?: boolean;
};

/** Offset the icon to the main text row, below any ruby or reserved furigana band. */
export function speakerIconMainTextOffsetSx(hasRuby = false): SxProps<Theme> {
  return {
    mt: {
      xs: hasRuby ? DIALOGUE_SPEAKER_ICON_RUBY_OFFSET_EM : DIALOGUE_SPEAKER_ICON_PLAIN_OFFSET_EM,
      md: 0
    },
    mb: { xs: 0, md: '0.12em' }
  };
}

/** Fixed column; on mobile align to the main text row; on desktop sit on the text baseline. */
export function SpeakerIconColumn({ color, label, hasRuby = false }: SpeakerIconColumnProps) {
  return (
    <Box
      sx={{
        flexShrink: 0,
        width: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        ...speakerIconMainTextOffsetSx(hasRuby)
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
