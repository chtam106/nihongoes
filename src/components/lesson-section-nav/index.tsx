'use client';

import { useEffect, useMemo, useState } from 'react';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import { Box, ClickAwayListener, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import type { Lesson } from '@/constants/courses/index.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import {
  FLOATING_RAIL_EDGE_OPEN_SHADOW,
  FLOATING_RAIL_EDGE_SHADOW
} from '@/theme/floating-rail.ts';

type LessonSectionNavItem = {
  id: string;
  label: string;
};

type LessonSectionNavProps = {
  lesson: Lesson;
};

const TAB_WIDTH = 36;
const TAB_ICON_SIZE = 22;
const TAB_CLOSED_PY = 0.75;
const TAB_RADIUS = '10px 0 0 10px';
const TAB_CLOSED_RADIUS = '4px 0 0 4px';
const MENU_PADDING_Y = 1;
const MENU_PADDING_X = 1.5;

function resolveScrollOffset() {
  return window.matchMedia('(min-width:900px)').matches ? 88 : 72;
}

function resolveActiveSectionId(items: LessonSectionNavItem[]) {
  if (items.length === 0) {
    return null;
  }

  const scrollLine = window.scrollY + resolveScrollOffset() + 12;
  let active = items[0].id;

  for (const item of items) {
    const element = document.getElementById(item.id);
    if (element && element.offsetTop <= scrollLine) {
      active = item.id;
    }
  }

  return active;
}

type SectionMenuProps = {
  items: LessonSectionNavItem[];
  activeId: string | null;
  onSelect: (id: string) => void;
};

function SectionMenu({ items, activeId, onSelect }: SectionMenuProps) {
  return (
    <Stack
      component="nav"
      spacing={0}
      role="menu"
      sx={{
        py: MENU_PADDING_Y,
        px: MENU_PADDING_X,
        width: 'max-content'
      }}
    >
      {items.map((item, itemIndex) => {
        const isActive = item.id === activeId;

        return (
          <Typography
            key={item.id}
            component="button"
            type="button"
            role="menuitem"
            aria-current={isActive ? 'location' : undefined}
            onClick={() => onSelect(item.id)}
            sx={{
              display: 'block',
              px: 1.75,
              py: 0.75,
              border: 'none',
              borderRadius: 0,
              bgcolor: 'transparent',
              color: isActive ? 'primary.main' : 'text.primary',
              font: 'inherit',
              fontSize: '1rem',
              fontWeight: isActive ? 600 : 500,
              lineHeight: 1.4,
              textAlign: 'left',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              WebkitTapHighlightColor: 'transparent',
              transition: 'color 0.15s ease',
              ...(itemIndex > 0 && {
                borderTop: (theme) =>
                  `1px solid ${alpha(
                    theme.palette.text.primary,
                    theme.palette.mode === 'light' ? 0.08 : 0.16
                  )}`
              }),
              '@media (hover: hover)': {
                '&:hover': { color: 'primary.main' }
              }
            }}
          >
            {item.label}
          </Typography>
        );
      })}
    </Stack>
  );
}

/** Fixed right-edge tab that opens an attached section jump menu for long lesson pages. */
export function LessonSectionNav({ lesson }: LessonSectionNavProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const items = useMemo((): LessonSectionNavItem[] => {
    return [
      { id: 'vocab', label: t('course.vocabulary') },
      ...(lesson.phrases && lesson.phrases.length > 0
        ? [{ id: 'phrases', label: t('course.phrasesHeading') }]
        : []),
      ...(lesson.grammar.length > 0 ? [{ id: 'grammar', label: t('course.grammar') }] : []),
      ...(lesson.conversation && lesson.conversation.length > 0
        ? [{ id: 'conversation', label: t('course.conversationHeading') }]
        : []),
      { id: 'practice', label: t('course.practiceHeading') },
      ...(lesson.reference && lesson.reference.length > 0
        ? [{ id: 'reference', label: t('course.referenceHeading') }]
        : [])
    ];
  }, [lesson, t]);

  const [activeId, setActiveId] = useState<string | null>(() => items[0]?.id ?? null);

  useEffect(() => {
    const updateActiveSection = () => {
      setActiveId(resolveActiveSectionId(items));
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [items]);

  const closeMenu = () => {
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpen((previous) => !previous);
  };

  const scrollToSection = (id: string) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMenu();
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: (theme) => theme.zIndex.fab
      }}
    >
      <ClickAwayListener onClickAway={closeMenu}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: open ? 'minmax(0, max-content)' : `0px ${TAB_WIDTH}px`,
            alignItems: 'start',
            maxWidth: 'calc(100vw - 16px)',
            ...(open && {
              borderRadius: TAB_RADIUS,
              overflow: 'hidden',
              bgcolor: 'background.paper',
              boxShadow: FLOATING_RAIL_EDGE_OPEN_SHADOW
            })
          }}
        >
          <Box
            sx={{
              overflow: 'hidden',
              minWidth: 0,
              maxHeight: open ? 'none' : 0,
              opacity: open ? 1 : 0,
              pointerEvents: open ? 'auto' : 'none'
            }}
          >
            <SectionMenu items={items} activeId={activeId} onSelect={scrollToSection} />
          </Box>

          <Box
            component="button"
            type="button"
            aria-label={t('course.sectionNav')}
            aria-expanded={open}
            aria-haspopup="menu"
            onClick={toggleMenu}
            sx={{
              width: TAB_WIDTH,
              alignSelf: 'start',
              px: 0,
              py: TAB_CLOSED_PY,
              border: 'none',
              borderRadius: TAB_CLOSED_RADIUS,
              bgcolor: 'background.paper',
              color: 'text.primary',
              cursor: 'pointer',
              display: open ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: FLOATING_RAIL_EDGE_SHADOW,
              WebkitTapHighlightColor: 'transparent',
              outline: 'none',
              transition: 'color 0.2s ease',
              '@media (hover: hover)': {
                '&:hover': {
                  color: 'primary.main'
                }
              }
            }}
          >
            <SubjectOutlinedIcon sx={{ fontSize: TAB_ICON_SIZE }} />
          </Box>
        </Box>
      </ClickAwayListener>
    </Box>
  );
}
