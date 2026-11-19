'use client';

import { useEffect, useMemo, useState } from 'react';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { Backdrop, Box, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import {
  lessonGrammarPath,
  lessonPath,
  lessonReadingPath,
  lessonSentencesPath,
  lessonVocabularyPath,
  lessonWritingPath,
  lessonHasKanji,
  lessonHasReading,
  type CourseLevel,
  type Lesson
} from '@/constants/courses/index.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import {
  FLOATING_RAIL_EDGE_OPEN_SHADOW,
  FLOATING_RAIL_EDGE_SHADOW
} from '@/theme/floating-rail.ts';
import { useIsClient } from '@/utils/use-is-client.ts';
import { useUserPreferences } from '@/utils/user-preferences.ts';

export type LessonPracticeSection = 'vocabulary' | 'grammar' | 'sentences' | 'reading' | 'writing';

type LessonPracticeNavProps = {
  level: CourseLevel;
  lesson: Lesson;
  section: LessonPracticeSection;
};

type LessonPracticeNavItem = {
  id: 'lesson' | LessonPracticeSection;
  label: string;
  to: string;
};

const TAB_WIDTH = 44;
const TAB_RADIUS = '10px 0 0 10px';
const TAB_CLOSED_RADIUS = '4px 0 0 4px';
const TAB_RAIL_BUTTON_SX = {
  width: TAB_WIDTH,
  px: 0,
  border: 'none',
  bgcolor: 'transparent',
  color: 'primary.main',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  WebkitTapHighlightColor: 'transparent',
  outline: 'none',
  '&:focus': { color: 'primary.main' },
  '&:active': { color: 'primary.main' }
} as const;

export function LessonPracticeNav({ level, lesson, section }: LessonPracticeNavProps) {
  const { t } = useTranslation();
  const isClient = useIsClient();
  const [preferences] = useUserPreferences();
  const [open, setOpen] = useState(false);
  const items = useMemo((): LessonPracticeNavItem[] => {
    return [
      { id: 'lesson', label: t('course.reviewLesson'), to: lessonPath(level, lesson.id) },
      {
        id: 'vocabulary',
        label: t('course.vocabularyPractice'),
        to: lessonVocabularyPath(level, lesson.id)
      },
      ...(lesson.grammar.length > 0
        ? [
            {
              id: 'grammar' as const,
              label: t('course.grammarPractice'),
              to: lessonGrammarPath(level, lesson.id)
            }
          ]
        : []),
      {
        id: 'sentences',
        label: t('course.sentenceWritingHeading'),
        to: lessonSentencesPath(level, lesson.id)
      },
      ...(lessonHasReading(lesson)
        ? [
            {
              id: 'reading' as const,
              label: t('course.readingPractice'),
              to: lessonReadingPath(level, lesson.id)
            }
          ]
        : []),
      ...(lessonHasKanji(lesson)
        ? [
            {
              id: 'writing' as const,
              label: t('course.writingPractice'),
              to: lessonWritingPath(level, lesson.id)
            }
          ]
        : [])
    ];
  }, [level, lesson, t]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleScroll = () => setOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true });

    return () => {
      window.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, [open]);

  if (!isClient || !preferences.showSectionNav) {
    return null;
  }

  const closeMenu = () => setOpen(false);

  return (
    <Box className="no-print">
      <Backdrop
        open={open}
        onClick={closeMenu}
        invisible
        sx={{ zIndex: (theme) => theme.zIndex.fab - 1 }}
      />

      <Box
        sx={{
          position: 'fixed',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: (theme) => theme.zIndex.fab
        }}
      >
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
          <Stack
            component="nav"
            role="menu"
            spacing={0}
            sx={{
              py: 1,
              px: 1.5,
              width: 'max-content',
              overflow: 'hidden',
              minWidth: 0,
              maxHeight: open ? 'none' : 0,
              opacity: open ? 1 : 0,
              pointerEvents: open ? 'auto' : 'none'
            }}
          >
            {items.map((item, index) => {
              const isActive = item.id === section;

              return (
                <Typography
                  key={item.id}
                  component={RouterLink}
                  to={item.to}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                  onClick={closeMenu}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                    py: 1,
                    minHeight: 44,
                    borderRadius: 0,
                    color: isActive ? 'primary.main' : 'text.primary',
                    fontSize: '1rem',
                    fontWeight: isActive ? 600 : 500,
                    lineHeight: 1.4,
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    WebkitTapHighlightColor: 'transparent',
                    transition: 'color 0.15s ease',
                    ...(index > 0 && {
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

          <Stack
            spacing={0}
            sx={{
              alignSelf: 'start',
              width: TAB_WIDTH,
              display: open ? 'none' : 'flex',
              borderRadius: TAB_CLOSED_RADIUS,
              bgcolor: 'background.paper',
              boxShadow: FLOATING_RAIL_EDGE_SHADOW,
              overflow: 'hidden'
            }}
          >
            <Box
              component="button"
              type="button"
              aria-label={t('course.sectionNav')}
              aria-expanded={open}
              aria-haspopup="menu"
              onClick={() => setOpen((previous) => !previous)}
              sx={[
                TAB_RAIL_BUTTON_SX,
                {
                  minHeight: 44,
                  py: 0.875
                }
              ]}
            >
              <FormatListBulletedOutlinedIcon sx={{ fontSize: 22 }} />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
