import { getTranslations } from 'next-intl/server';
import { Typography } from '@mui/material';
import { Heading } from '@/components/heading';
import { NavCardGrid, type NavCardItem } from '@/components/nav-card';
import { PageContainer } from '@/components/page-container';
import { routes } from '@/constants/routes.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { primePageLocale } from '@/i18n/server.ts';
import { localeParams, type PageProps } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata('/alphabet/exercise');

export default async function Page({ params }: PageProps) {
  await primePageLocale(params);
  const t = await getTranslations();

  const cards: NavCardItem[] = [
    {
      to: routes.alphabet.exercise.romaji,
      title: t('exercise.guessRomaji'),
      description: t('exercise.romajiDescription'),
      iconKey: 'translate'
    },
    {
      to: routes.alphabet.exercise.character,
      title: t('exercise.chooseCharacter'),
      description: t('exercise.characterDescription'),
      iconKey: 'spellcheck'
    },
    {
      to: routes.alphabet.exercise.listen,
      title: t('exercise.listenPickShort'),
      description: t('exercise.listenDescription'),
      iconKey: 'headphones'
    },
    {
      to: routes.alphabet.exercise.scriptPair,
      title: t('exercise.scriptPair'),
      description: t('exercise.scriptPairDescription'),
      iconKey: 'swap'
    },
    {
      to: routes.alphabet.exercise.writing,
      title: t('exercise.writing'),
      description: t('exercise.writingDescription'),
      iconKey: 'draw'
    },
    {
      to: routes.alphabet.exercise.sentence,
      title: t('exercise.sentence'),
      description: t('exercise.sentenceDescription'),
      iconKey: 'notes'
    }
  ];

  return (
    <PageContainer>
      <Heading component="h1" gutterBottom>
        {t('exercise.title')}
      </Heading>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t('exercise.hubSubtitle')}
      </Typography>

      <NavCardGrid items={cards} />
    </PageContainer>
  );
}
