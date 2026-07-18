'use client';

import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import NextLink from 'next/link';
import { withLocale } from '@/i18n/locale-routing.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

type NextLinkProps = ComponentPropsWithoutRef<typeof NextLink>;

export type LocaleLinkProps = Omit<NextLinkProps, 'href'> & {
  /** A locale-agnostic ("logical") path; the active locale prefix is added. */
  to: string;
};

/**
 * Drop-in replacement for the old react-router `Link`/`NavLink` that prefixes a
 * string `to` with the active locale, so internal navigation keeps the user in
 * their language (en stays at the root, vi is served under `/vi`). Backed by
 * `next/link`.
 */
export const LocaleLink = forwardRef<HTMLAnchorElement, LocaleLinkProps>(function LocaleLink(
  { to, ...rest },
  ref
) {
  const { locale } = useTranslation();

  return <NextLink ref={ref} href={withLocale(to, locale)} {...rest} />;
});

/** Alias kept for callers that used the old NavLink; active state is handled by
 * the consumer (e.g. MUI's `selected`), so this behaves like `LocaleLink`. */
export const LocaleNavLink = LocaleLink;
