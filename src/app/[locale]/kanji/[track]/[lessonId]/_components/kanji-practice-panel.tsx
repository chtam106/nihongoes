'use client';

import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import { Box, Button, Paper, Typography } from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Heading } from '@/components/heading';
import { useTranslation } from '@/i18n/use-translation.ts';
import { kanjiQuizPath, kanjiWritingPath, type KanjiLesson } from '@/constants/kanji/index.ts';
import { tonalSurfaceSx } from '@/theme/surfaces.ts';

type KanjiPracticePanelProps = {
  trackSlug: string;
  lesson: KanjiLesson;
};

/**
 * Practice call-to-action panel for a kanji lesson (links to quiz + writing).
 * A client component because it uses the `tonalSurfaceSx` theme-callback style,
 * which cannot cross the Server Component boundary.
 */
export function KanjiPracticePanel({ trackSlug, lesson }: KanjiPracticePanelProps) {
  const { t } = useTranslation();

  const actions = [
    {
      key: 'quiz',
      to: kanjiQuizPath(trackSlug, lesson.id),
      icon: <QuizOutlinedIcon />,
      label: t('kanji.quizTitle')
    },
    {
      key: 'writing',
      to: kanjiWritingPath(trackSlug, lesson.id),
      icon: <BorderColorOutlinedIcon />,
      label: t('kanji.writing')
    }
  ];

  return (
    <Paper elevation={0} sx={[tonalSurfaceSx, { p: { xs: 2.5, md: 3 } }]}>
      <Box sx={{ mb: 2 }}>
        <Heading scale="subsection" component="h2">
          {t('kanji.practiceHeading')}
        </Heading>
        <Typography variant="body2" color="text.secondary">
          {t('kanji.practiceSubtitle')}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
        {actions.map((action) => (
          <Button
            key={action.key}
            component={RouterLink}
            to={action.to}
            variant="outlined"
            startIcon={action.icon}
          >
            {action.label}
          </Button>
        ))}
      </Box>
    </Paper>
  );
}
