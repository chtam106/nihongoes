import { forwardRef, type ComponentPropsWithoutRef } from 'react';

// Storybook (Vite) alias for `next/link`: renders a plain anchor so linked
// components (e.g. LocaleLink) work without a Next.js runtime.
type NextLinkMockProps = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
  href: string | { pathname?: string };
};

const Link = forwardRef<HTMLAnchorElement, NextLinkMockProps>(function Link(
  { href, children, ...rest },
  ref
) {
  const url = typeof href === 'string' ? href : (href?.pathname ?? '#');

  return (
    <a ref={ref} href={url} {...rest}>
      {children}
    </a>
  );
});

export default Link;
