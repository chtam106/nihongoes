'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Stack, Typography } from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { n5Intro } from '@/constants/courses/n5/intro.ts';
import { coursePath, lessonPath } from '@/constants/courses/levels.ts';
import { Heading } from '@/components/heading';
import { HintText } from '@/components/hint-text';
import { PageContainer } from '@/components/page-container';
import { ReferenceArticleView } from '@/features/course/reference/reference-article';
import { useTranslation } from '@/i18n/use-translation.ts';

export function N5IntroPage() {
  const { locale, t } = useTranslation();
  const content = n5Intro;

  return (
    <PageContainer bottomGutter>
      <Stack spacing={4}>
        <Box>
          <Box sx={{ mb: 1.5 }}>
            <Button
              component={RouterLink}
              to={coursePath('n5')}
              startIcon={<ArrowBackIcon />}
              variant="text"
              sx={{ px: 0 }}
            >
              {t('course.referenceBackToCourse')}
            </Button>
          </Box>

          <Heading component="h1">{content.title[locale]}</Heading>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            {content.intro[locale]}
          </Typography>
          <HintText sx={{ mt: 1.5 }}>{t('course.audioHint')}</HintText>
        </Box>

        <Stack spacing={4}>
          {content.articles.map((article) => (
            <ReferenceArticleView key={article.id} article={article} />
          ))}
        </Stack>

        <Box>
          <Button
            component={RouterLink}
            to={lessonPath('n5', 'lesson-1')}
            variant="contained"
            endIcon={<ArrowForwardIcon />}
          >
            {t('course.introStartLesson1')}
          </Button>
        </Box>
      </Stack>
    </PageContainer>
  );
}
