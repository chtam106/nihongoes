import { getTranslations } from 'next-intl/server';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { Heading } from '@/components/heading';
import { NavCardGrid, type NavCardItem } from '@/components/nav-card';
import { PageContainer } from '@/components/page-container';
import { routes } from '@/constants/routes.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { primePageLocale } from '@/i18n/server.ts';
import { localeParams } from '@/i18n/route-helpers.ts';
import { subtleSurfaceSx } from '@/theme/surfaces.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata('/alphabet');

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  await primePageLocale(params);
  const t = await getTranslations();

  const cards: NavCardItem[] = [
    {
      to: routes.alphabet.hiragana,
      title: t('nav.hiragana'),
      symbol: 'あ',
      description: t('alphabet.hiraganaDescription')
    },
    {
      to: routes.alphabet.katakana,
      title: t('nav.katakana'),
      symbol: 'ア',
      description: t('alphabet.katakanaDescription')
    },
    {
      to: routes.alphabet.combined,
      title: t('nav.combined'),
      iconKey: 'grid',
      description: t('alphabet.combinedDescription')
    },
    {
      to: routes.alphabet.exercise.index,
      title: t('nav.exercise'),
      iconKey: 'quiz',
      description: t('alphabet.exerciseDescription')
    }
  ];

  const writingSystems = [
    t('alphabet.systemHiragana'),
    t('alphabet.systemKatakana'),
    t('alphabet.systemKanji')
  ];

  return (
    <PageContainer>
      <Heading component="h1" gutterBottom>
        {t('alphabet.title')}
      </Heading>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {t('alphabet.intro')}
      </Typography>

      <Paper elevation={0} sx={[subtleSurfaceSx, { p: 2.5, mb: 3 }]}>
        <Heading scale="subsection" component="h2" sx={{ mb: 1.5 }}>
          {t('alphabet.systemsHeading')}
        </Heading>
        <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2.5 }}>
          {writingSystems.map((system) => (
            <Box component="li" key={system}>
              <Typography variant="body2" color="text.secondary">
                {system}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Paper>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {t('alphabet.subtitle')}
      </Typography>

      <NavCardGrid items={cards} />
    </PageContainer>
  );
}
