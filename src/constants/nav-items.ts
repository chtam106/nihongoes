import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined'
import type { ComponentType } from 'react'
import type { SvgIconProps } from '@mui/material'
import { routes } from '@/constants/routes.ts'

export type NavItem = {
  label: string
  path: string
  icon?: ComponentType<SvgIconProps>
  symbol?: string
}

export type NavGroup = {
  label: string
  path: string
  icon?: ComponentType<SvgIconProps>
  children: NavItem[]
}

export const navGroups: NavGroup[] = [
  {
    label: 'Alphabet',
    path: routes.alphabet.index,
    icon: MenuBookOutlinedIcon,
    children: [
      {
        label: 'Hiragana',
        path: routes.alphabet.hiragana,
        symbol: 'あ',
      },
      {
        label: 'Katakana',
        path: routes.alphabet.katakana,
        symbol: 'ア',
      },
      {
        label: 'Exercise',
        path: routes.alphabet.exercise,
        icon: QuizOutlinedIcon,
      },
    ],
  },
]

export function isNavGroupActive(group: NavGroup, pathname: string) {
  if (pathname === group.path) {
    return true
  }

  return group.children.some((child) => child.path === pathname)
}
