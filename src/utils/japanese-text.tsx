import { Fragment, type ReactNode } from 'react';
import { formatJapaneseDisplay } from '@/utils/japanese-display.ts';
import type { RubySegment } from '@/types/course.ts';

function renderRubySegment(segment: RubySegment, position: number): ReactNode {
  return (
    <ruby key={`ruby-${position}-${segment.base}`}>
      {segment.base}
      <rt>{segment.reading}</rt>
    </ruby>
  );
}

/** Render Japanese surface text with optional per-kanji ruby from authored data. */
export function renderJapaneseText(jp: string, ruby?: RubySegment[]): ReactNode {
  const text = formatJapaneseDisplay(jp);

  if (!ruby?.length) {
    return text;
  }

  const rendered: ReactNode[] = [];
  let position = 0;
  let rubyIndex = 0;

  while (position < text.length) {
    const segment = ruby[rubyIndex];

    if (segment && text.startsWith(segment.base, position)) {
      rendered.push(renderRubySegment(segment, position));
      position += segment.base.length;
      rubyIndex += 1;
      continue;
    }

    rendered.push(<Fragment key={`char-${position}`}>{text[position]}</Fragment>);
    position += 1;
  }

  if (rendered.length === 1) {
    return rendered[0];
  }

  return rendered;
}
