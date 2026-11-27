'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Stack, Typography } from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { n5Intro } from '@/constants/courses/n5/intro.ts';
import { coursePath, lessonPath } from '@/constants/courses/levels.ts';
import { PageBreadcrumb } from '@/components/page-breadcrumb';
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
          <PageBreadcrumb
            title={content.title[locale]}
            items={[{ label: 'JLPT N5', to: coursePath('n5') }]}
          />
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            {content.intro[locale]}
          </Typography>
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
