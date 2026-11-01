import { getTranslations } from 'next-intl/server';
import { Stack, Typography } from '@mui/material';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { primePageLocale } from '@/i18n/server.ts';
import { localeParams, type PageProps } from '@/i18n/route-helpers.ts';

const SECTIONS = [
  'google',
  'file',
  'use',
  'storage',
  'limited',
  'delete',
  'other',
  'contact'
] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata('/privacy');

export default async function Page({ params }: PageProps) {
  const locale = await primePageLocale(params);
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return (
    <PageContainer>
      <Stack spacing={3} sx={{ maxWidth: 720 }}>
        <Heading component="h1">{t('title')}</Heading>
        <Typography variant="body1" color="text.secondary">
          {t('updated')}
        </Typography>
        <Typography variant="body1">{t('intro')}</Typography>
        {SECTIONS.map((id) => (
          <Stack key={id} spacing={1} component="section">
            <Heading component="h2">{t(`${id}.title`)}</Heading>
            <Typography variant="body1">{t(`${id}.body`)}</Typography>
          </Stack>
        ))}
      </Stack>
    </PageContainer>
  );
}
