'use client';

import type { MouseEvent } from 'react';
import MenuBookOutlined from '@mui/icons-material/MenuBookOutlined';
import { Box } from '@mui/material';
import { lessonPath } from '@/constants/courses/levels.ts';
import type { CourseLevel } from '@/types/course.ts';
import { Link } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { focusVisibleSx } from '@/theme/focus.ts';
import { FLOATING_RAIL_EDGE_SHADOW } from '@/theme/floating-rail.ts';
import { isMobileOs } from '@/utils/mobile-os.ts';

const TAB_WIDTH = 44;

function openInNewTabOnDesktopOs(event: MouseEvent<HTMLAnchorElement>) {
  if (isMobileOs()) {
    return;
  }

  event.preventDefault();
  window.open(event.currentTarget.href, '_blank', 'noopener,noreferrer');
}

type SentenceWritingLessonLinkProps = {
  level: CourseLevel;
  lessonId: string;
  lessonNumber: number;
};

/** Fixed right-edge tab linking to the main course lesson (always visible while scrolling). */
export function SentenceWritingLessonLink({
  level,
  lessonId,
  lessonNumber
}: SentenceWritingLessonLinkProps) {
  const { t } = useTranslation();
  const label = t('course.sentenceWritingOpenLesson', { number: lessonNumber });

  return (
    <Box
      className="no-print"
      sx={{
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: (theme) => theme.zIndex.fab
      }}
    >
      <Box
        component={Link}
        href={lessonPath(level, lessonId)}
        aria-label={label}
        onClick={openInNewTabOnDesktopOs}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: TAB_WIDTH,
          minHeight: 44,
          py: 1.25,
          bgcolor: 'background.paper',
          color: 'primary.main',
          textDecoration: 'none',
          borderRadius: '10px 0 0 10px',
          boxShadow: FLOATING_RAIL_EDGE_SHADOW,
          WebkitTapHighlightColor: 'transparent',
          ...focusVisibleSx
        }}
      >
        <MenuBookOutlined sx={{ fontSize: 22 }} />
      </Box>
    </Box>
  );
}
