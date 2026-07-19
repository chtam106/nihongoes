import type { TranslationTree } from '@/types/i18n.ts';
import { common } from './common.ts';
import { errorBoundary } from './error-boundary.ts';
import { audio } from './audio.ts';
import { seo } from './seo.ts';
import { language } from './language.ts';
import { nav } from './nav.ts';
import { home } from './home.ts';
import { notFound } from './not-found.ts';
import { alphabet } from './alphabet.ts';
import { chart } from './chart.ts';
import { exercise } from './exercise.ts';
import { kanji } from './kanji.ts';
import { course } from './course.ts';

/** Vietnamese messages, composed from one file per namespace (page/feature). */
export const viMessages = {
  common,
  errorBoundary,
  audio,
  seo,
  language,
  nav,
  home,
  notFound,
  alphabet,
  chart,
  exercise,
  kanji,
  course
} satisfies TranslationTree;
