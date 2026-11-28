import { isCourseLevel } from '@/constants/courses/levels.ts';
import { KANJI_TRACK_META } from '@/constants/kanji/track-meta.ts';
import type { TranslateFn } from '@/i18n/language-context.ts';
import type { Locale } from '@/types/i18n.ts';

const LOCALE_PREFIX = /^\/(en|vi)(?=\/|$)/;
const LESSON = /^lesson-(\d+)$/;

/** The path without locale prefix, query or hash: `/vi/n5/lesson-2?x#y` -> `/n5/lesson-2`. */
export function barePath(path: string): string {
  return path.split(/[?#]/)[0].replace(LOCALE_PREFIX, '') || '/';
}

function trackName(slug: string, locale: Locale): string | undefined {
  return KANJI_TRACK_META.find((track) => track.slug === slug)?.name[locale];
}

/** Built-in flashcard collection ids: `default-n5-lesson-3`, `default-grade-1-lesson-2`, ... */
function collectionLabel(id: string, t: TranslateFn, locale: Locale): string | undefined {
  const lesson = /^default-(.+)-lesson-(\d+)$/.exec(id);

  if (lesson) {
    const [, owner, number] = lesson;
    const ownerLabel = isCourseLevel(owner)
      ? `JLPT ${owner.toUpperCase()}`
      : trackName(owner, locale);

    return ownerLabel && `${ownerLabel} - ${t('course.lessonLabel', { number })}`;
  }

  if (id === 'default-hiragana') {
    return t('nav.hiragana');
  }

  if (id === 'default-katakana') {
    return t('nav.katakana');
  }

  const radicals = /^default-radicals-(\d+)-(\d+)$/.exec(id);

  return radicals ? `${t('nav.pages.radicals')} ${radicals[1]}-${radicals[2]}` : undefined;
}

function lessonPracticeLabel(segment: string, t: TranslateFn): string | undefined {
  switch (segment) {
    case 'vocabulary':
      return t('course.vocabularyPractice');
    case 'grammar':
      return t('course.grammarPractice');
    case 'reading':
      return t('course.readingPractice');
    case 'writing':
      return t('course.writingPractice');
    case 'sentences':
      return t('course.sentenceWritingHeading');
    default:
      return undefined;
  }
}

function courseLabels(segments: string[], t: TranslateFn): string[] {
  const [level, page, practice] = segments;
  const labels = [`JLPT ${level.toUpperCase()}`];
  const lesson = page ? LESSON.exec(page) : null;

  if (page === 'intro') {
    labels.push(t('course.introPageTitle'));
  } else if (page === 'reference') {
    labels.push(t('course.referencePageTitle'));
  } else if (lesson) {
    labels.push(t('course.lessonLabel', { number: lesson[1] }));
    const practiceLabel = practice ? lessonPracticeLabel(practice, t) : undefined;

    if (practiceLabel) {
      labels.push(practiceLabel);
    }
  }

  return labels;
}

function kanjiLabels(segments: string[], t: TranslateFn, locale: Locale): string[] {
  const [, track, page, practice] = segments;

  if (!track) {
    return [t('home.kanjiTitle')];
  }

  if (track === 'radicals') {
    return page === 'quiz' ? [t('kanji.radicalsQuizTitle')] : [t('nav.pages.radicals')];
  }

  const name = trackName(track, locale);

  if (!name) {
    return [t('home.kanjiTitle')];
  }

  const labels = [name];
  const lesson = page ? LESSON.exec(page) : null;

  if (lesson) {
    labels.push(t('course.lessonLabel', { number: lesson[1] }));

    if (practice === 'quiz') {
      labels.push(t('kanji.quizTitle'));
    } else if (practice === 'writing') {
      labels.push(t('kanji.writing'));
    }
  }

  return labels;
}

const ALPHABET_PAGE_KEYS: Record<string, string> = {
  hiragana: 'nav.hiragana',
  katakana: 'nav.katakana',
  combined: 'nav.combined',
  exercise: 'nav.exercise'
};

const EXERCISE_KEYS: Record<string, string> = {
  romaji: 'nav.pages.romaji',
  character: 'nav.pages.character',
  'script-pair': 'nav.pages.scriptPair',
  writing: 'nav.pages.writing',
  sentence: 'nav.pages.sentence'
};

function alphabetLabels(segments: string[], t: TranslateFn): string[] {
  const [, page, exercise] = segments;
  const labels = [t('nav.alphabet')];
  const pageKey = page ? ALPHABET_PAGE_KEYS[page] : undefined;

  if (pageKey) {
    labels.push(t(pageKey));
  }

  const exerciseKey = page === 'exercise' && exercise ? EXERCISE_KEYS[exercise] : undefined;

  if (exerciseKey) {
    labels.push(t(exerciseKey));
  }

  return labels;
}

function practiceLabels(segments: string[], t: TranslateFn): string[] {
  const [, kind, form] = segments;

  if (kind === 'particles') {
    return [t('particlePractice.title')];
  }

  if (kind === 'verbs' && form === 'te') {
    return [t('verbPractice.teTitle')];
  }

  if (kind === 'verbs' && form === 'nai') {
    return [t('verbPractice.naiTitle')];
  }

  if (kind === 'verbs' && form === 'dictionary') {
    return [t('verbPractice.dictionaryTitle')];
  }

  return [t('nav.pages.practice')];
}

function flashcardLabels(segments: string[], t: TranslateFn, locale: Locale): string[] {
  const [, page] = segments;

  if (page === 'review') {
    return [t('flashcards.reviewTitle')];
  }

  const collection = page ? collectionLabel(page, t, locale) : undefined;

  return collection ? [t('flashcards.title'), collection] : [t('flashcards.title')];
}

/**
 * A readable title for a saved page, worked out from its URL alone, as a
 * breadcrumb: `/vi/n5/lesson-2/grammar` -> `JLPT N5 / Bài 2 / Luyện ngữ pháp`.
 * Parts it does not recognise are left out.
 */
export function pageTitleFromPath(path: string, t: TranslateFn, locale: Locale): string {
  const segments = barePath(path).split('/').filter(Boolean);
  const [first] = segments;
  let labels: string[];

  if (!first) {
    labels = [t('nav.home')];
  } else if (isCourseLevel(first)) {
    labels = courseLabels(segments, t);
  } else if (first === 'kanji') {
    labels = kanjiLabels(segments, t, locale);
  } else if (first === 'alphabet') {
    labels = alphabetLabels(segments, t);
  } else if (first === 'practice') {
    labels = practiceLabels(segments, t);
  } else if (first === 'flashcards') {
    labels = flashcardLabels(segments, t, locale);
  } else if (first === 'vocabulary') {
    labels = [t('course.vocabIndexHeading')];
  } else if (first === 'sync') {
    labels = [t('nav.pages.sync')];
  } else if (first === 'privacy') {
    labels = [t('nav.pages.privacy')];
  } else {
    labels = [t('nav.home')];
  }

  return labels.join(' / ');
}
