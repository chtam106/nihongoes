import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import type { ComponentType } from 'react'
import type { SvgIconProps } from '@mui/material'
import {
  COURSE_LEVELS,
  courses,
  coursePath,
  lessonPath,
  type Bilingual,
} from '@/constants/courses/index.ts'
import { routes } from '@/constants/routes.ts'

export type NavItem = {
  labelKey?: 'nav.hiragana' | 'nav.katakana' | 'nav.exercise'
  label?: Bilingual
  path: string
  icon?: ComponentType<SvgIconProps>
  symbol?: string
}

export type NavGroup = {
  labelKey?: 'nav.home' | 'nav.alphabet'
  label?: Bilingual
  path: string
  icon?: ComponentType<SvgIconProps>
  children: NavItem[]
}

function formatLessonNavLabel(number: number, title: Bilingual): Bilingual {
  return {
    en: `Unit ${number}: ${title.en}`,
    vi: `Bài ${number}: ${title.vi}`,
  }
}

const courseGroups: NavGroup[] = COURSE_LEVELS.map((level) => {
  const course = courses[level]

  return {
    label: course.name,
    path: coursePath(level),
    icon: SchoolOutlinedIcon,
    children: course.lessons.map((lesson) => ({
      label: formatLessonNavLabel(lesson.number, lesson.title),
      path: lessonPath(level, lesson.id),
    })),
  }
})

export const navGroups: NavGroup[] = [
  {
    labelKey: 'nav.home',
    path: routes.home,
    icon: HomeOutlinedIcon,
    children: [],
  },
  {
    labelKey: 'nav.alphabet',
    path: routes.alphabet.index,
    icon: MenuBookOutlinedIcon,
    children: [
      {
        labelKey: 'nav.hiragana',
        path: routes.alphabet.hiragana,
        symbol: 'あ',
      },
      {
        labelKey: 'nav.katakana',
        path: routes.alphabet.katakana,
        symbol: 'ア',
      },
      {
        labelKey: 'nav.exercise',
        path: routes.alphabet.exercise.index,
        icon: QuizOutlinedIcon,
      },
    ],
  },
  ...courseGroups,
]

export function isNavGroupActive(group: NavGroup, pathname: string) {
  if (pathname === group.path) {
    return true
  }

  return group.children.some(
    (child) => child.path === pathname || pathname.startsWith(`${child.path}/`),
  )
}
