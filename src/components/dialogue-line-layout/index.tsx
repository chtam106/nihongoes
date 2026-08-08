import type { ReactNode } from 'react';
import { Box, type SxProps, type Theme } from '@mui/material';
import { SpeakerIconSpacer } from '@/components/dialogue-speaker-icon';
import { DIALOGUE_FURIGANA_BAND_EM } from '@/components/dialogue-line-layout/metrics.ts';

export {
  DIALOGUE_FURIGANA_BAND_EM,
  DIALOGUE_RUBY_BAND_EM
} from '@/components/dialogue-line-layout/metrics.ts';

type DialogueLineLayoutProps = {
  icon: ReactNode;
  japanese: ReactNode;
  translation?: ReactNode;
};

/** Typography sx for dialogue Japanese: reserve furigana band when ruby is absent. */
export function dialogueJapaneseTypographySx(hasRuby: boolean): SxProps<Theme> {
  return {
    fontWeight: 500,
    lineHeight: 1.35,
    ...(!hasRuby && { pt: DIALOGUE_FURIGANA_BAND_EM })
  };
}

/** Icon column + Japanese on one row; optional translation indented below. */
export function DialogueLineLayout({ icon, japanese, translation }: DialogueLineLayoutProps) {
  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 1, alignItems: { xs: 'flex-start', md: 'flex-end' } }}>
        {icon}
        <Box sx={{ minWidth: 0, flex: 1 }}>{japanese}</Box>
      </Box>
      {translation && (
        <Box sx={{ display: 'flex', gap: 1, mt: 0.25 }}>
          <SpeakerIconSpacer />
          <Box sx={{ minWidth: 0, flex: 1 }}>{translation}</Box>
        </Box>
      )}
    </Box>
  );
}
