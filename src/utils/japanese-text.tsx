import { type CSSProperties, type ReactNode } from 'react';
import { formatJapaneseDisplay } from '@/utils/japanese-display.ts';
import type { RubySegment } from '@/types/course.ts';
import type { KanjiReadingPart } from '@/types/kanji.ts';

const kanjiChar = /[\u4e00-\u9fff]/;

/** Blue + orange alternate on consecutive kanji; singles use blue. */
const RUBY_SEGMENT_COLORS = ['#1565c0', '#e65100'] as const;

function rubySegmentRtStyle(toneIndex: number): CSSProperties {
  return {
    color: RUBY_SEGMENT_COLORS[toneIndex % RUBY_SEGMENT_COLORS.length]
  };
}

type RenderJapaneseTextOptions = {
  /** When false, keep furigana plain. Default: blue for singles, two-tone alternation for adjacent runs. */
  colorizeRuby?: boolean;
};

type RubyMatch = {
  position: number;
  segment: RubySegment;
};

function collectRubyMatches(text: string, ruby: RubySegment[]): RubyMatch[] {
  const matches: RubyMatch[] = [];
  let position = 0;
  let rubyIndex = 0;

  while (position < text.length) {
    const segment = ruby[rubyIndex];

    if (segment && text.startsWith(segment.base, position)) {
      matches.push({ position, segment });
      position += segment.base.length;
      rubyIndex += 1;
      continue;
    }

    position += 1;
  }

  return matches;
}

/** Assign tone indices: singles use blue (0); consecutive runs alternate blue/orange. */
function toneIndexByPosition(
  text: string,
  ruby: RubySegment[],
  colorize: boolean
): Map<number, number> {
  const toneByPosition = new Map<number, number>();

  if (!colorize) {
    return toneByPosition;
  }

  const matches = collectRubyMatches(text, ruby);
  let runStart = 0;

  while (runStart < matches.length) {
    let runEnd = runStart + 1;

    while (
      runEnd < matches.length &&
      matches[runEnd].position ===
        matches[runEnd - 1].position + matches[runEnd - 1].segment.base.length
    ) {
      runEnd += 1;
    }

    const run = matches.slice(runStart, runEnd);

    run.forEach((match, toneIndex) => {
      toneByPosition.set(match.position, toneIndex);
    });

    runStart = runEnd;
  }

  return toneByPosition;
}

/** Build jp + ruby segments from a kanji example word's parts (kana runs stay unrubied). */
export function kanjiPartsToRuby(parts: KanjiReadingPart[]): { jp: string; ruby: RubySegment[] } {
  const jp = parts.map((part) => part.text).join('');
  const ruby = parts
    .filter((part) => kanjiChar.test(part.text))
    .map((part) => ({ base: part.text, reading: part.reading }));

  return { jp, ruby };
}

/** Render a kanji example word with furigana derived from its parts. */
export function renderKanjiExampleText(parts: KanjiReadingPart[]): ReactNode {
  const { jp, ruby } = kanjiPartsToRuby(parts);

  return renderJapaneseText(jp, ruby.length ? ruby : undefined);
}

function renderRubySegment(segment: RubySegment, position: number, toneIndex?: number): ReactNode {
  const rtStyle = toneIndex !== undefined ? rubySegmentRtStyle(toneIndex) : undefined;

  return (
    <ruby lang="ja" key={`ruby-${position}-${segment.base}`}>
      {segment.base}
      <rt style={rtStyle}>{segment.reading}</rt>
    </ruby>
  );
}

function japaneseLangSpan(text: string, key?: string): ReactNode {
  return (
    <span lang="ja" key={key}>
      {text}
    </span>
  );
}

/** Render Japanese surface text with optional per-kanji ruby from authored data. */
export function renderJapaneseText(
  jp: string,
  ruby?: RubySegment[],
  options?: RenderJapaneseTextOptions
): ReactNode {
  const text = formatJapaneseDisplay(jp);

  if (!ruby?.length) {
    return japaneseLangSpan(text);
  }

  const colorize = options?.colorizeRuby !== false;
  const toneByPosition = toneIndexByPosition(text, ruby, colorize);
  const rendered: ReactNode[] = [];
  let position = 0;
  let rubyIndex = 0;
  let plainRun = '';

  const flushPlainRun = () => {
    if (plainRun.length === 0) {
      return;
    }

    rendered.push(japaneseLangSpan(plainRun, `plain-${rendered.length}`));
    plainRun = '';
  };

  while (position < text.length) {
    const segment = ruby[rubyIndex];

    if (segment && text.startsWith(segment.base, position)) {
      flushPlainRun();
      rendered.push(renderRubySegment(segment, position, toneByPosition.get(position)));
      position += segment.base.length;
      rubyIndex += 1;
      continue;
    }

    plainRun += text[position];
    position += 1;
  }

  flushPlainRun();

  if (rendered.length === 1) {
    return rendered[0];
  }

  return rendered;
}
