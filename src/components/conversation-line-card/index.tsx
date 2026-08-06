import { alpha } from '@mui/material/styles';
import { Typography } from '@mui/material';
import type { ConversationScene } from '@/constants/courses/index.ts';
import { SpeakableSurface } from '@/components/speakable-surface';

type ConversationLineCardProps = {
  line: ConversationScene['lines'][number];
  locale: 'en' | 'vi';
  showTranslation: boolean;
  color: string;
};

export function ConversationLineCard({ line, locale, showTranslation, color }: ConversationLineCardProps) {
  return (
    <SpeakableSurface
      text={line.jp}
      sx={{
        p: 1.5,
        pl: 2,
        borderRadius: 1,
        border: '1px solid',
        borderColor: (theme) => alpha(color, theme.palette.mode === 'light' ? 0.3 : 0.45),
        bgcolor: 'transparent'
      }}
    >
      <Typography variant="body1" lang="ja" sx={{ fontWeight: 500 }}>
        {line.jp}
      </Typography>
      {showTranslation && (
        <Typography variant="body2" sx={{ mt: 0.25 }}>
          {line.meaning[locale]}
        </Typography>
      )}
    </SpeakableSurface>
  );
}
