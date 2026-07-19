import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Box, Card, CardActionArea, CardContent, Chip, Stack, Typography } from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import {
  getCourse,
  coursePath,
  lessonPath,
  type CourseLevel,
  type Lesson
} from '@/constants/courses/index.ts';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { primePageLocale } from '@/i18n/server.ts';
import { courseLevelParams, toLocale } from '@/i18n/route-helpers.ts';
import { interactiveSurfaceSx } from '@/theme/surfaces.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return courseLevelParams();
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; jlptLevel: string }>;
}): Promise<Metadata> {
  const { locale, jlptLevel } = await params;

  return getSeoMetadata(coursePath(jlptLevel as CourseLevel), toLocale(locale));
}

export default async function Page({
  params
}: {
  params: Promise<{ locale: string; jlptLevel: string }>;
}) {
  const locale = await primePageLocale(params);
  const { jlptLevel } = await params;
  const level = jlptLevel as CourseLevel;
  const t = await getTranslations();
  const course = getCourse(level);

  const renderLessonCard = (lesson: Lesson) => (
    <Card key={lesson.id} elevation={0} sx={interactiveSurfaceSx}>
      <CardActionArea
        component={RouterLink}
        to={lessonPath(level, lesson.id)}
        sx={{ userSelect: 'text' }}
      >
        <CardContent>
          <Box sx={{ minWidth: 0 }}>
            <Chip
              label={t('course.lessonLabel', { number: lesson.number })}
              size="small"
              color="primary"
              variant="outlined"
              sx={{ mb: 1 }}
            />
            <Heading component="h3">{lesson.title[locale]}</Heading>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {lesson.focus[locale]}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
              {t('course.counts', { vocab: lesson.vocab.length, grammar: lesson.grammar.length })}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  return (
    <PageContainer bottomGutter>
      <Stack spacing={4}>
        <Box>
          <Heading component="h1" gutterBottom>
            {course.name[locale]}
          </Heading>
          <Typography variant="body1" color="text.secondary">
            {course.intro[locale]}
          </Typography>
        </Box>

        <Box>
          <Heading scale="subsection" component="h2" sx={{ mb: 1.5 }}>
            {t('course.lessonsHeading')}
          </Heading>

          {course.modules && (
            <Stack spacing={3}>
              {course.modules.map((module) => (
                <Box key={`${module.from}-${module.to}`}>
                  <Heading component="h3" sx={{ mb: 1.5 }}>
                    {module.title[locale]}
                  </Heading>
                  <Stack spacing={1.5}>
                    {course.lessons
                      .filter(
                        (lesson) => lesson.number >= module.from && lesson.number <= module.to
                      )
                      .map(renderLessonCard)}
                  </Stack>
                </Box>
              ))}
            </Stack>
          )}

          {!course.modules && <Stack spacing={1.5}>{course.lessons.map(renderLessonCard)}</Stack>}
        </Box>
      </Stack>

      <ScrollToTopButton />
    </PageContainer>
  );
}
