'use client';

import type { ReactNode } from 'react';
import ArrowForwardOutlined from '@mui/icons-material/ArrowForwardOutlined';
import { Box, Card, CardActionArea, Typography } from '@mui/material';
import Link from 'next/link';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { highlightIconSx, highlightSurfaceSx, interactiveSurfaceSx } from '@/theme/surfaces.ts';

type LinkRowProps = {
  /** An MUI icon. */
  icon: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
  /** A locale-agnostic app path (goes through `LocaleLink`). */
  to?: string;
  /** A full URL path used as is (already carries its locale prefix). */
  href?: string;
  onClick?: () => void;
  /** Sakura tonal fill and a round icon badge so the row stands out. */
  highlight?: boolean;
  /** Bold subtitle, e.g. when cards are due. */
  strongSubtitle?: boolean;
};

/**
 * One compact clickable row (icon, title, one line, forward arrow) used for
 * the shortcuts at the top of the home page and on `/flashcards`. The whole
 * row is the link.
 */
export function LinkRow({
  icon,
  title,
  subtitle,
  to,
  href,
  onClick,
  highlight = false,
  strongSubtitle = false
}: LinkRowProps) {
  const linkProps = href ? { component: Link, href } : { component: RouterLink, to: to ?? '/' };

  return (
    <Card
      component="section"
      elevation={0}
      sx={highlight ? highlightSurfaceSx : interactiveSurfaceSx}
    >
      <CardActionArea {...linkProps} onClick={onClick}>
        <Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {highlight && (
            <Box aria-hidden sx={highlightIconSx}>
              {icon}
            </Box>
          )}
          {!highlight && (
            <Box aria-hidden sx={{ display: 'flex', color: 'primary.main' }}>
              {icon}
            </Box>
          )}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              component="h2"
              variant="body1"
              sx={{ fontWeight: 600, color: highlight ? 'primary.main' : undefined }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              color={highlight ? 'text.primary' : 'text.secondary'}
              sx={{ fontWeight: strongSubtitle ? 600 : undefined }}
            >
              {subtitle}
            </Typography>
          </Box>
          <ArrowForwardOutlined color="primary" aria-hidden sx={{ flexShrink: 0 }} />
        </Box>
      </CardActionArea>
    </Card>
  );
}
