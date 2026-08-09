'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { Box, Button, Collapse, LinearProgress, Paper, Stack, Typography } from '@mui/material';
import {
  getLesson,
  type CourseLevel,
  type Lesson,
  type ReadingPassage,
  type ReadingQuestion
} from '@/constants/courses/index.ts';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { useTranslation } from '@/i18n/use-translation.ts';
import { useUserPreferences } from '@/utils/user-preferences.ts';
import { renderJapaneseText } from '@/utils/japanese-text.tsx';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';
import { ChoiceButton } from '@/features/course/choice-button';
import { LessonNotFound, LessonQuizHeader, ResultScreen } from '@/features/course/shared';

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

type FlatQuestion = ReadingQuestion & { flatId: string; passageId: string };

function flattenQuestions(passages: ReadingPassage[]): FlatQuestion[] {
  return passages.flatMap((passage) =>
    passage.questions.map((question) => ({
      ...question,
      flatId: `${passage.id}-${question.id}`,
      passageId: passage.id
    }))
  );
}

function shuffleQuestions(questions: FlatQuestion[]): FlatQuestion[] {
  return questions.map((question) => ({
    ...question,
    choices: shuffle(question.choices)
  }));
}

type PassageCardProps = {
  passage: ReadingPassage;
};

function PassageCard({ passage }: PassageCardProps) {
  const { locale, t } = useTranslation();
  const [preferences] = useUserPreferences();
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <Paper elevation={0} sx={[elevatedSurfaceSx, { p: { xs: 2.5, md: 3 } }]}>
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}
      >
        <Heading scale="subsection" component="h2">
          {passage.title[locale]}
        </Heading>
        {preferences.showTranslation && (
          <Button
            size="small"
            startIcon={<TranslateOutlinedIcon />}
            onClick={() => setShowTranslation((previous) => !previous)}
            sx={{ flexShrink: 0 }}
          >
            {showTranslation ? t('course.hideTranslation') : t('course.showTranslation')}
          </Button>
        )}
      </Stack>

      <Stack spacing={1.5}>
        {passage.lines.map((line) => (
          <Box key={line.jp}>
            <Typography variant="body1" lang="ja" sx={{ fontWeight: 500 }}>
              {renderJapaneseText(line.jp, line.ruby)}
            </Typography>
            <Collapse in={showTranslation}>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
                {line.meaning[locale]}
              </Typography>
            </Collapse>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}

type ReadingQuizProps = {
  level: CourseLevel;
  lesson: Lesson;
};

function ReadingQuiz({ level, lesson }: ReadingQuizProps) {
  const { locale, t } = useTranslation();
  const passages = lesson.reading!;

  const [questions, setQuestions] = useState(() => shuffleQuestions(flattenQuestions(passages)));
  const [index, setIndex] = useState(0);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [correctPicked, setCorrectPicked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const passageAnchorRef = useRef<HTMLDivElement>(null);
  const previousPassageIdRef = useRef<string | undefined>(undefined);

  const total = questions.length;
  const question = questions[index];
  const isLast = index === total - 1;
  const currentPassage = passages.find((passage) => passage.id === question?.passageId);
  const currentPassageId = question?.passageId;

  useEffect(() => {
    if (finished || !currentPassageId) {
      return;
    }

    if (previousPassageIdRef.current === currentPassageId) {
      return;
    }

    previousPassageIdRef.current = currentPassageId;
    passageAnchorRef.current?.scrollIntoView({ block: 'start' });
  }, [currentPassageId, finished]);

  // Auto-advance shortly after a correct answer; wrong answers let you retry.
  useEffect(() => {
    if (!correctPicked) {
      return;
    }

    const timer = window.setTimeout(() => {
      if (isLast) {
        setFinished(true);
        return;
      }

      setIndex((previous) => previous + 1);
      setWrongIds([]);
      setCorrectPicked(false);
    }, 100);

    return () => window.clearTimeout(timer);
  }, [correctPicked, isLast]);

  // For a wrong choice we only mark that option and let the user choose again.
  const handleSelect = (choiceId: string) => {
    if (correctPicked || wrongIds.includes(choiceId)) {
      return;
    }

    if (choiceId === question.correctId) {
      setCorrectPicked(true);

      if (wrongIds.length === 0) {
        setScore((previous) => previous + 1);
      }
    } else {
      setWrongIds((previous) => [...previous, choiceId]);
    }
  };

  const handleRetry = () => {
    setQuestions(shuffleQuestions(flattenQuestions(passages)));
    setIndex(0);
    setWrongIds([]);
    setCorrectPicked(false);
    setScore(0);
    setFinished(false);
    previousPassageIdRef.current = undefined;
  };

  return (
    <PageContainer>
      <Stack spacing={3}>
        <LessonQuizHeader lesson={lesson} section="reading" />

        {!finished && currentPassage && (
          <Box ref={passageAnchorRef} sx={{ scrollMarginTop: { xs: 72, md: 88 } }}>
            <PassageCard key={currentPassage.id} passage={currentPassage} />
          </Box>
        )}

        {finished && (
          <ResultScreen
            score={score}
            total={total}
            level={level}
            lessonId={lesson.id}
            onRetry={handleRetry}
          />
        )}
        {!finished && (
          <>
            <Box>
              <Stack
                direction="row"
                sx={{ justifyContent: 'space-between', alignItems: 'baseline', mb: 0.5 }}
              >
                <Typography variant="body2" color="text.secondary">
                  {t('course.questionProgress', { current: index + 1, total })}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {score} / {total}
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={total === 0 ? 0 : (index / total) * 100}
                aria-label={t('course.questionProgress', { current: index + 1, total })}
                sx={{ borderRadius: 1, height: 8 }}
              />
            </Box>

            <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2.5, md: 3 } }]}>
              <Typography variant="h6" component="p" sx={{ fontWeight: 600 }}>
                {question.question[locale]}
              </Typography>
            </Paper>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 1.5
              }}
            >
              {question.choices.map((choice) => {
                const isCorrectChoice = choice.id === question.correctId;
                const showCorrect = correctPicked && isCorrectChoice;
                const showWrong = wrongIds.includes(choice.id);
                const locked = correctPicked || showWrong;

                return (
                  <ChoiceButton
                    key={choice.id}
                    onClick={() => handleSelect(choice.id)}
                    dimmed={locked}
                    state={showCorrect ? 'correct' : showWrong ? 'wrong' : 'default'}
                  >
                    {choice.label[locale]}
                  </ChoiceButton>
                );
              })}
            </Box>
          </>
        )}
      </Stack>
    </PageContainer>
  );
}

type ReadingPageProps = {
  level: CourseLevel;
};

function ReadingPage({ level }: ReadingPageProps) {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { locale } = useTranslation();
  const lesson = lessonId ? getLesson(level, lessonId) : undefined;

  if (!lesson || !lesson.reading || lesson.reading.length === 0) {
    return <LessonNotFound level={level} />;
  }

  return <ReadingQuiz key={`${level}:${lesson.id}:${locale}`} level={level} lesson={lesson} />;
}

export default ReadingPage;
