import { Box, Stack, Typography } from '@mui/material';
import { getLocale, getTranslations } from 'next-intl/server';
import { Heading } from '@/components/heading';
import { NavCardGrid, type NavCardItem } from '@/components/nav-card';
import { PageContainer } from '@/components/page-container';
import { COURSE_SUMMARIES } from '@/constants/courses/summaries.ts';
import { coursePath } from '@/constants/courses/levels.ts';
import { routes } from '@/constants/routes.ts';
import type { Locale } from '@/i18n/translations.ts';

/**
 * Home page - a Server Component. It resolves translations on the server via
 * next-intl (`getTranslations`/`getLocale`), so no translation JS ships for this
 * page; the interactive card links (`NavCardGrid`) remain client components.
 */
async function HomePage() {
  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;

  const alphabetCards: NavCardItem[] = [
    {
      to: routes.alphabet.hiragana,
      title: t('nav.hiragana'),
      symbol: 'あ',
      description: t('home.hiraganaDescription')
    },
    {
      to: routes.alphabet.katakana,
      title: t('nav.katakana'),
      symbol: 'ア',
      description: t('home.katakanaDescription')
    },
    {
      to: routes.alphabet.combined,
      title: t('nav.combined'),
      iconKey: 'grid',
      description: t('home.combinedDescription')
    },
    {
      to: routes.alphabet.exercise.index,
      title: t('nav.exercise'),
      iconKey: 'quiz',
      description: t('home.exerciseDescription')
    }
  ];

  const courseCards: NavCardItem[] = COURSE_SUMMARIES.map((course) => ({
    to: coursePath(course.level),
    title: course.name[locale],
    iconKey: 'course',
    description: course.subtitle[locale]
  }));

  return (
    <PageContainer>
      <Stack spacing={4}>
        <Box>
          <Heading component="h1" gutterBottom>
            {t('home.title')}
          </Heading>
          <Typography variant="body1" color="text.secondary">
            {t('home.intro')}
          </Typography>
        </Box>

        <Stack spacing={1.5}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            {t('home.alphabetSection')}
          </Typography>
          <NavCardGrid items={alphabetCards} titleComponent="h3" />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            {t('home.coursesSection')}
          </Typography>
          <NavCardGrid items={courseCards} titleComponent="h3" />
        </Stack>
      </Stack>
    </PageContainer>
  );
}

export default HomePage;
