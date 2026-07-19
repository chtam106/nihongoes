import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import type { ComponentType } from 'react';
import type { SvgIconProps } from '@mui/material';
import { COURSE_LEVELS, coursePath, lessonPath } from '@/constants/courses/levels.ts';
import { COURSE_SUMMARIES } from '@/constants/courses/summaries.ts';
import type { Bilingual, CourseLevel } from '@/constants/courses/types.ts';
import {
  KANJI_TRACK_META,
  kanjiTrackPath,
  KANJI_BASE_PATH,
  KANJI_RADICALS_PATH
} from '@/constants/kanji/index.ts';
import { routes } from '@/constants/routes.ts';

export type NavItem = {
  labelKey?: 'nav.hiragana' | 'nav.katakana' | 'nav.combined' | 'nav.exercise';
  label?: Bilingual;
  path: string;
  icon?: ComponentType<SvgIconProps>;
  symbol?: string;
};

export type NavGroup = {
  labelKey?: 'nav.home' | 'nav.alphabet';
  label?: Bilingual;
  path: string;
  icon?: ComponentType<SvgIconProps>;
  courseLevel?: CourseLevel;
  children: NavItem[];
};

function formatLessonNavLabel(number: number, title: Bilingual): Bilingual {
  return {
    en: `Lesson ${number}: ${title.en}`,
    vi: `Bài ${number}: ${title.vi}`
  };
}

const courseSummaryByLevel = Object.fromEntries(
  COURSE_SUMMARIES.map((summary) => [summary.level, summary])
) as Record<CourseLevel, (typeof COURSE_SUMMARIES)[number]>;

const kanjiGroup: NavGroup = {
  label: { en: 'Kanji', vi: 'Kanji' },
  path: KANJI_BASE_PATH,
  icon: BrushOutlinedIcon,
  children: [
    {
      label: { en: 'Radicals', vi: 'Bộ thủ' },
      path: KANJI_RADICALS_PATH
    },
    ...KANJI_TRACK_META.map((track) => ({
      label: track.name,
      path: kanjiTrackPath(track.slug)
    }))
  ]
};

const courseGroups: NavGroup[] = COURSE_LEVELS.map((level) => ({
  label: courseSummaryByLevel[level].name,
  path: coursePath(level),
  icon: HistoryEduOutlinedIcon,
  courseLevel: level,
  children: []
}));

const courseLessonLoaders: Record<
  CourseLevel,
  () => Promise<Array<{ id: string; number: number; title: Bilingual }>>
> = {
  n5: () => import('@/constants/courses/n5/index.ts').then(({ n5Course }) => n5Course.lessons)
};

export const navGroups: NavGroup[] = [
  {
    labelKey: 'nav.home',
    path: routes.home,
    icon: HomeOutlinedIcon,
    children: []
  },
  {
    labelKey: 'nav.alphabet',
    path: routes.alphabet.index,
    icon: TranslateOutlinedIcon,
    children: [
      {
        labelKey: 'nav.hiragana',
        path: routes.alphabet.hiragana,
        symbol: 'あ'
      },
      {
        labelKey: 'nav.katakana',
        path: routes.alphabet.katakana,
        symbol: 'ア'
      },
      {
        labelKey: 'nav.combined',
        path: routes.alphabet.combined,
        icon: GridViewOutlinedIcon
      },
      {
        labelKey: 'nav.exercise',
        path: routes.alphabet.exercise.index,
        icon: QuizOutlinedIcon
      }
    ]
  },
  kanjiGroup,
  ...courseGroups
];

export function isNavGroupActive(group: NavGroup, pathname: string) {
  if (pathname === group.path) {
    return true;
  }

  if (group.courseLevel) {
    return pathname.startsWith(`${group.path}/`);
  }

  return group.children.some(
    (child) => child.path === pathname || pathname.startsWith(`${child.path}/`)
  );
}

export async function loadCourseLessonNavItems(level: CourseLevel): Promise<NavItem[]> {
  const lessons = await courseLessonLoaders[level]();

  return lessons.map((lesson) => ({
    label: formatLessonNavLabel(lesson.number, lesson.title),
    path: lessonPath(level, lesson.id)
  }));
}
