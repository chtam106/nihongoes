'use client';

import type { ComponentType } from 'react';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SpellcheckOutlinedIcon from '@mui/icons-material/SpellcheckOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import type { SvgIconProps } from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Box, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material';
import { interactiveSurfaceSx } from '@/theme/surfaces.ts';

/**
 * Named icon registry. Cards reference an icon by a string key (not a component)
 * so a Server Component page can pass items across the RSC boundary - a
 * component reference is not serializable, a string is.
 */
const NAV_CARD_ICONS = {
  grid: GridViewOutlinedIcon,
  quiz: QuizOutlinedIcon,
  course: HistoryEduOutlinedIcon,
  translate: TranslateOutlinedIcon,
  spellcheck: SpellcheckOutlinedIcon,
  headphones: HeadphonesOutlinedIcon,
  swap: SwapHorizOutlinedIcon,
  draw: DrawOutlinedIcon,
  notes: NotesOutlinedIcon,
  book: MenuBookOutlinedIcon,
  school: SchoolOutlinedIcon
} satisfies Record<string, ComponentType<SvgIconProps>>;

export type NavCardIconKey = keyof typeof NAV_CARD_ICONS;

export type NavCardItem = {
  to: string;
  title: string;
  description: string;
  /** A Japanese glyph shown as the card marker (takes priority over the icon). */
  symbol?: string;
  /** A registered icon key (see `NAV_CARD_ICONS`). */
  iconKey?: NavCardIconKey;
};

type NavCardGridProps = {
  items: NavCardItem[];
  titleComponent?: 'h2' | 'h3';
};

/** Responsive 2-column grid of clickable cards linking to a route. */
export function NavCardGrid({ items, titleComponent = 'h2' }: NavCardGridProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        gap: 2
      }}
    >
      {items.map((item) => {
        const Icon = item.iconKey ? NAV_CARD_ICONS[item.iconKey] : undefined;

        return (
          <Card key={item.to} elevation={0} sx={[interactiveSurfaceSx, { height: '100%' }]}>
            <CardActionArea
              component={RouterLink}
              to={item.to}
              sx={{ height: '100%', alignItems: 'stretch', userSelect: 'text' }}
            >
              <CardContent>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{ display: 'inline-flex', lineHeight: 1, color: 'primary.main' }}
                  >
                    {item.symbol}
                    {item.symbol == null && Icon && <Icon fontSize="inherit" />}
                  </Typography>
                  <Typography variant="h6" component={titleComponent} sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Box>
  );
}
