'use client';

import { Box, Breadcrumbs, Typography } from '@mui/material';
import { Heading } from '@/components/heading';
import { LocaleLink } from '@/components/locale-link';
import { useTranslation } from '@/i18n/use-translation.ts';
import { focusVisibleSx } from '@/theme/focus.ts';

type PageBreadcrumbItem = {
  label: string;
  to?: string;
};

type PageBreadcrumbProps = {
  items: readonly PageBreadcrumbItem[];
  title: string;
};

type BreadcrumbCrumbProps = {
  label: string;
  to?: string;
};

function BreadcrumbCrumb({ label, to }: BreadcrumbCrumbProps) {
  if (!to) {
    return (
      <Typography variant="body1" component="span">
        {label}
      </Typography>
    );
  }

  return (
    <Typography
      component={LocaleLink}
      to={to}
      variant="body1"
      sx={(theme) => ({
        color: 'primary.main',
        textDecoration: 'none',
        '@media (hover: hover)': {
          '&:hover': { textDecoration: 'underline' }
        },
        '&:focus-visible': focusVisibleSx(theme)
      })}
    >
      {label}
    </Typography>
  );
}

/**
 * A normal-size breadcrumb above the page heading. Items are links; `title` is the h1.
 */
export function PageBreadcrumb({ items, title }: PageBreadcrumbProps) {
  const { t } = useTranslation();

  return (
    <Box>
      <Breadcrumbs aria-label={t('common.breadcrumb')} sx={{ mb: 1 }}>
        {items.map((item, index) => (
          <BreadcrumbCrumb key={`${index}-${item.label}`} label={item.label} to={item.to} />
        ))}
      </Breadcrumbs>
      <Heading component="h1">{title}</Heading>
    </Box>
  );
}
