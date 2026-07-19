'use client';

import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { Link } from '@/i18n/navigation.tsx';

type NextIntlLinkProps = ComponentPropsWithoutRef<typeof Link>;

export type LocaleLinkProps = Omit<NextIntlLinkProps, 'href'> & {
  /** A locale-agnostic ("logical") path; the active locale prefix is added. */
  to: string;
};

/**
 * Internal link that keeps the user in their language. A thin wrapper over
 * next-intl's `Link` (which prefixes the active locale: en at the root, vi under
 * `/vi`), keeping the `to` prop the app already uses everywhere.
 */
export const LocaleLink = forwardRef<HTMLAnchorElement, LocaleLinkProps>(function LocaleLink(
  { to, ...rest },
  ref
) {
  return <Link ref={ref} href={to} {...rest} />;
});

/** Alias kept for callers that used the old NavLink; active state is handled by
 * the consumer (e.g. MUI's `selected`), so this behaves like `LocaleLink`. */
export const LocaleNavLink = LocaleLink;
