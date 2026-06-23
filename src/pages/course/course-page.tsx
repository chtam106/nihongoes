import { Link as RouterLink } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material'
import { getCourse, lessonPath, type CourseLevel } from '@/constants/courses/index.ts'
import { PageContainer } from '@/components/page-container.tsx'
import { useTranslation } from '@/i18n/use-translation.ts'
import { interactiveSurfaceSx } from '@/theme/surfaces.ts'

function CoursePage({ level }: { level: CourseLevel }) {
  const { locale, t } = useTranslation()
  const course = getCourse(level)

  return (
    <PageContainer>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
            {course.name[locale]}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, mb: 2 }}>
            {course.subtitle[locale]}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 620 }}>
            {course.intro[locale]}
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
            {t('course.lessonsHeading')}
          </Typography>

          <Stack spacing={1.5}>
            {course.lessons.map((lesson) => (
              <Card key={lesson.id} elevation={0} sx={interactiveSurfaceSx}>
                <CardActionArea component={RouterLink} to={lessonPath(level, lesson.id)}>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ alignItems: 'center', justifyContent: 'space-between' }}
                    >
                      <Box sx={{ minWidth: 0 }}>
                        <Chip
                          label={t('course.lessonLabel', { number: lesson.number })}
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{ mb: 1 }}
                        />
                        <Typography variant="h6" component="h3">
                          {lesson.title[locale]}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                          {lesson.focus[locale]}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ mt: 1, display: 'block' }}
                        >
                          {t('course.counts', {
                            vocab: lesson.vocab.length,
                            grammar: lesson.grammar.length,
                          })}
                        </Typography>
                      </Box>
                      <ArrowForwardIcon color="action" />
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Stack>
        </Box>

        {course.lessons.length > 0 ? (
          <Box>
            <Button
              component={RouterLink}
              to={lessonPath(level, course.lessons[0].id)}
              variant="contained"
              size="large"
            >
              {t('course.openLesson')}
            </Button>
          </Box>
        ) : null}
      </Stack>
    </PageContainer>
  )
}

export default CoursePage
