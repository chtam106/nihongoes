import type { ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';
import {
  DialogueLineLayout,
  dialogueJapaneseTypographySx
} from '@/components/dialogue-line-layout';
import { SpeakerIconColumn, SpeakerIconSpacer } from '@/components/dialogue-speaker-icon';
import type { ConversationLine, ConversationSpeaker } from '@/constants/courses/index.ts';
import { SpeakableSurface } from '@/components/speakable-surface';
import { renderJapaneseText } from '@/utils/japanese-text.tsx';

export type ConversationTurn = {
  speakerId: string;
  speakerName: string;
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
      speakerName: speaker.name,
      color: colorMap.get(line.speakerId) ?? fallbackColor,
      lines: [line]
    });
  }

  return turns;
}

const speakableSurfaceSx = {
  boxShadow: 'none',
  bgcolor: 'transparent',
  borderRadius: 1,
  px: 0.5,
  mx: -0.5
} as const;

type ConversationLineRowProps = {
  line: ConversationLine;
  locale: 'en' | 'vi';
  showTranslation: boolean;
  icon: ReactNode;
};

function ConversationLineRow({ line, locale, showTranslation, icon }: ConversationLineRowProps) {
  const hasRuby = Boolean(line.ruby?.length);

  return (
    <DialogueLineLayout
      icon={icon}
      japanese={
        <SpeakableSurface text={line.jp} sx={speakableSurfaceSx}>
          <Typography variant="body1" lang="ja" sx={dialogueJapaneseTypographySx(hasRuby)}>
            {renderJapaneseText(line.jp, line.ruby)}
          </Typography>
        </SpeakableSurface>
      }
      translation={
        showTranslation && (
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.35 }}>
            {line.meaning[locale]}
          </Typography>
        )
      }
    />
  );
}

type ConversationTurnGroupProps = {
  turn: ConversationTurn;
  locale: 'en' | 'vi';
  showTranslation: boolean;
};

/** One speaker turn: consecutive lines with a colored speaker icon. */
export function ConversationTurnGroup({
  turn,
  locale,
  showTranslation
}: ConversationTurnGroupProps) {
  return (
    <Stack spacing={1}>
      {turn.lines.map((line, index) => (
        <ConversationLineRow
          key={`${line.jp}-${index}`}
          line={line}
          locale={locale}
          showTranslation={showTranslation}
          icon={
            index === 0 ? (
              <SpeakerIconColumn color={turn.color} label={turn.speakerName} />
            ) : (
              <SpeakerIconSpacer />
            )
          }
        />
      ))}
    </Stack>
  );
}
