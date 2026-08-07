import { Box, Stack, Typography } from '@mui/material';
import type { ConversationLine, ConversationSpeaker } from '@/constants/courses/index.ts';
import { SpeakableSurface } from '@/components/speakable-surface';
import { renderJapaneseText } from '@/utils/japanese-text.tsx';

export type ConversationTurn = {
  speakerId: string;
  color: string;
  lines: ConversationLine[];
};

/** Groups consecutive lines by speaker into dialogue turns. */
export function groupConversationTurns(
  lines: ConversationLine[],
  speakerById: Map<string, ConversationSpeaker>,
  colorMap: Map<string, string>,
  fallbackColor: string
): ConversationTurn[] {
  const turns: ConversationTurn[] = [];

  for (const line of lines) {
    const speaker = speakerById.get(line.speakerId);

    if (!speaker) {
      continue;
    }

    const last = turns[turns.length - 1];

    if (last && last.speakerId === line.speakerId) {
      last.lines.push(line);
      continue;
    }

    turns.push({
      speakerId: line.speakerId,
      color: colorMap.get(line.speakerId) ?? fallbackColor,
      lines: [line]
    });
  }

  return turns;
}

type ConversationLineRowProps = {
  line: ConversationLine;
  locale: 'en' | 'vi';
  showTranslation: boolean;
};

function ConversationLineRow({ line, locale, showTranslation }: ConversationLineRowProps) {
  return (
    <SpeakableSurface
      text={line.jp}
      sx={{
        boxShadow: 'none',
        bgcolor: 'transparent',
        borderRadius: 1,
        px: 0.5,
        mx: -0.5
      }}
    >
      <Typography variant="body1" lang="ja" sx={{ fontWeight: 500, lineHeight: 1.35 }}>
        {renderJapaneseText(line.jp, line.ruby)}
      </Typography>
      {showTranslation && (
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.35 }}>
          {line.meaning[locale]}
        </Typography>
      )}
    </SpeakableSurface>
  );
}

type ConversationTurnGroupProps = {
  turn: ConversationTurn;
  locale: 'en' | 'vi';
  showTranslation: boolean;
};

/** One speaker turn: consecutive lines with a colored left accent. */
export function ConversationTurnGroup({
  turn,
  locale,
  showTranslation
}: ConversationTurnGroupProps) {
  return (
    <Box
      sx={{
        borderLeft: 4,
        borderColor: turn.color,
        pl: 2,
        pr: 1.5
      }}
    >
      <Stack spacing={0}>
        {turn.lines.map((line, index) => (
          <ConversationLineRow
            key={`${line.jp}-${index}`}
            line={line}
            locale={locale}
            showTranslation={showTranslation}
          />
        ))}
      </Stack>
    </Box>
  );
}
