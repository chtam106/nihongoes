'use client';

import { useParams } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material';
import {
  coursePath,
  getCourse,
  getLesson,
  lessonGrammarPath,
  lessonHasKanji,
  lessonHasReading,
  lessonListeningPath,
  lessonPath,
  lessonReadingPath,
  lessonVocabularyPath,
  lessonWritingPath,
  type CourseLevel,
  type Lesson,
  type VocabItem
} from '@/constants/courses/index.ts';
import { GrammarPointCard } from '@/components/grammar-point-card';
import { Heading } from '@/components/heading';
import { HintText } from '@/components/hint-text';
import { PageContainer } from '@/components/page-container';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import { SpeakableSurface } from '@/components/speakable-surface';
import { useTranslation } from '@/i18n/use-translation.ts';
import { subtleSurfaceSx, tonalSurfaceSx } from '@/theme/surfaces.ts';
import { LessonNotFound } from '@/features/course/shared';

// Offset anchored sections below the fixed app bar when scrolled to.
const SECTION_ANCHOR_SX = { scrollMarginTop: { xs: 72, md: 88 } } as const;

type VocabHeadwordProps = {
  item: VocabItem;
};

/**
 * A vocab card's headword. When the word has a kanji form, it is shown inline as
 * `漢字（かな）` (kanji first, then the kana reading); a kana-only word is shown
 * plainly.
 */
function VocabHeadword({ item }: VocabHeadwordProps) {
  const hasKanji = Boolean(item.kanji && item.kanji !== item.kana);

  return (
    <Typography
      variant="subtitle1"
      component="div"
      lang="ja"
      sx={{ fontWeight: 600, lineHeight: 1.3 }}
    >
      {hasKanji ? `${item.kanji}（${item.kana}）` : item.kana}
    </Typography>
  );
}

type SectionNavProps = {
  lesson: Lesson;
};

function SectionNav({ lesson }: SectionNavProps) {
  const { t } = useTranslation();

  const items = [
    { id: 'vocab', label: t('course.vocabulary') },
    ...(lesson.phrases && lesson.phrases.length > 0
      ? [{ id: 'phrases', label: t('course.phrasesHeading') }]
      : []),
    ...(lesson.grammar.length > 0 ? [{ id: 'grammar', label: t('course.grammar') }] : []),
    { id: 'practice', label: t('course.practiceHeading') },
    ...(lesson.reference && lesson.reference.length > 0
      ? [{ id: 'reference', label: t('course.referenceHeading') }]
      : [])
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
      {items.map((item) => (
        <Button
          key={item.id}
          variant="outlined"
          size="medium"
          color="primary"
          endIcon={<KeyboardArrowDownIcon />}
          onClick={() => scrollToSection(item.id)}
          sx={{ textTransform: 'none', fontSize: (theme) => theme.typography.body1.fontSize }}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  );
}

type VocabularySectionProps = {
  lesson: Lesson;
};

function VocabularySection({ lesson }: VocabularySectionProps) {
  const { locale, t } = useTranslation();

  return (
    <Box id="vocab" sx={SECTION_ANCHOR_SX}>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
        <MenuBookOutlinedIcon color="primary" />
        <Heading component="h2">{t('course.vocabulary')}</Heading>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 1.5
        }}
      >
        {lesson.vocab.map((item) => (
          <SpeakableSurface
            key={`${item.kana}-${item.romaji}`}
            text={item.speech ?? item.kana}
            sx={{ p: 1.5 }}
          >
            <VocabHeadword item={item} />
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              {item.meaning[locale]}
            </Typography>
          </SpeakableSurface>
        ))}
      </Box>
    </Box>
  );
}

type PhrasesSectionProps = {
  lesson: Lesson;
};

function PhrasesSection({ lesson }: PhrasesSectionProps) {
  const { locale, t } = useTranslation();

  if (!lesson.phrases || lesson.phrases.length === 0) {
    return null;
  }

  return (
    <Box id="phrases" sx={SECTION_ANCHOR_SX}>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
        <ChatOutlinedIcon color="primary" />
        <Heading component="h2">{t('course.phrasesHeading')}</Heading>
      </Stack>

      <Stack spacing={1.5}>
        {lesson.phrases.map((phrase) => (
          <SpeakableSurface
            key={`${phrase.kana}-${phrase.romaji}`}
            text={phrase.speech ?? phrase.kana}
            sx={{ p: 1.5 }}
          >
            <Typography variant="body1" lang="ja" sx={{ fontWeight: 500 }}>
              {phrase.kanji ?? phrase.kana}
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.25 }}>
              {phrase.meaning[locale]}
            </Typography>
          </SpeakableSurface>
        ))}
      </Stack>
    </Box>
  );
}

type ReferenceSectionProps = {
  lesson: Lesson;
};

function ReferenceSection({ lesson }: ReferenceSectionProps) {
  const { locale, t } = useTranslation();

  if (!lesson.reference || lesson.reference.length === 0) {
    return null;
  }

  return (
    <Box id="reference" sx={SECTION_ANCHOR_SX}>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 0.5 }}>
        <LibraryBooksOutlinedIcon color="primary" />
        <Heading component="h2">{t('course.referenceHeading')}</Heading>
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
        {t('course.referenceSubtitle')}
      </Typography>

      <Stack spacing={3}>
        {lesson.reference.map((group) => (
          <Box key={group.title.en}>
            <Heading scale="subsection" component="h3" sx={{ mb: 1.5 }}>
              {group.title[locale]}
            </Heading>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 1.5
              }}
            >
              {group.items.map((item) => (
                <SpeakableSurface
                  key={`${item.kana}-${item.romaji}`}
                  text={item.speech ?? item.kana}
                  sx={{ p: 1.5 }}
                >
                  <VocabHeadword item={item} />
                  <Typography variant="body2" sx={{ mt: 0.5 }}>
                    {item.meaning[locale]}
                  </Typography>
                </SpeakableSurface>
              ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

type GrammarSectionProps = {
  lesson: Lesson;
};

function GrammarSection({ lesson }: GrammarSectionProps) {
  const { t } = useTranslation();

  if (lesson.grammar.length === 0) {
    return null;
  }

  return (
    <Box id="grammar" sx={SECTION_ANCHOR_SX}>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
        <TranslateOutlinedIcon color="primary" />
        <Heading component="h2">{t('course.grammar')}</Heading>
      </Stack>

      <Stack spacing={2}>
        {lesson.grammar.map((point, index) => (
          <GrammarPointCard key={point.pattern} point={point} index={index + 1} />
        ))}
      </Stack>
    </Box>
  );
}

type PracticePanelProps = {
  level: CourseLevel;
  lesson: Lesson;
};

function PracticePanel({ level, lesson }: PracticePanelProps) {
  const { t } = useTranslation();
  const hasReading = lessonHasReading(lesson);
  const hasKanji = lessonHasKanji(lesson);
  const hasGrammar = lesson.grammar.length > 0;

  const actions = [
    {
      key: 'exercise',
      to: lessonVocabularyPath(level, lesson.id),
      icon: <FitnessCenterOutlinedIcon />,
      label: t('course.startExercise')
    },
    ...(hasGrammar
      ? [
          {
            key: 'grammar',
            to: lessonGrammarPath(level, lesson.id),
            icon: <TranslateOutlinedIcon />,
            label: t('course.startGrammar')
          }
        ]
      : []),
    ...(hasReading
      ? [
          {
            key: 'reading',
            to: lessonReadingPath(level, lesson.id),
            icon: <ImportContactsOutlinedIcon />,
            label: t('course.startReading')
          }
        ]
      : []),
    {
      key: 'listening',
      to: lessonListeningPath(level, lesson.id),
      icon: <HeadphonesOutlinedIcon />,
      label: t('course.startListening')
    },
    ...(hasKanji
      ? [
          {
            key: 'writing',
            to: lessonWritingPath(level, lesson.id),
            icon: <BorderColorOutlinedIcon />,
            label: t('course.startWriting')
          }
        ]
      : [])
  ];

  return (
    <Paper
      id="practice"
      elevation={0}
      sx={[tonalSurfaceSx, SECTION_ANCHOR_SX, { p: { xs: 2.5, md: 3 } }]}
    >
      <Box sx={{ mb: 2 }}>
        <Heading scale="subsection" component="h2">
          {t('course.practiceHeading')}
        </Heading>
        <Typography variant="body2" color="text.secondary">
          {t('course.exerciseSubtitle')}
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

type LessonPageProps = {
  level: CourseLevel;
};

function LessonPage({ level }: LessonPageProps) {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { locale, t } = useTranslation();

  const lesson = lessonId ? getLesson(level, lessonId) : undefined;

  if (!lesson) {
    return <LessonNotFound level={level} />;
  }

  const course = getCourse(level);
  const lessons = course.lessons;
  const index = lessons.findIndex((item) => item.id === lesson.id);
  const previous = index > 0 ? lessons[index - 1] : undefined;
  const next = index < lessons.length - 1 ? lessons[index + 1] : undefined;

  return (
    <PageContainer bottomGutter>
      <Stack spacing={4}>
        <Box>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ mb: 1, flexWrap: 'wrap', alignItems: 'center' }}
          >
            <Chip
              label={course.code}
              color="secondary"
              variant="outlined"
              component={RouterLink}
              to={coursePath(level)}
              clickable
            />
            <Chip
              label={t('course.lessonLabel', { number: lesson.number })}
              color="primary"
              variant="outlined"
            />
          </Stack>
          <Heading component="h1">{lesson.title[locale]}</Heading>

          <Paper elevation={0} sx={[subtleSurfaceSx, { p: 2, mt: 2 }]}>
            <Typography variant="overline" color="text.secondary">
              {t('course.focusLabel')}
            </Typography>
            <Typography variant="body1">{lesson.focus[locale]}</Typography>
          </Paper>

          <HintText sx={{ mt: 1.5 }}>{t('course.audioHint')}</HintText>
        </Box>

        <SectionNav lesson={lesson} />

        <VocabularySection lesson={lesson} />
        <PhrasesSection lesson={lesson} />
        <GrammarSection lesson={lesson} />

        <PracticePanel level={level} lesson={lesson} />

        <ReferenceSection lesson={lesson} />

        <Stack direction="row" spacing={1.5} sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            {previous && (
              <Button
                component={RouterLink}
                to={lessonPath(level, previous.id)}
                startIcon={<ArrowBackIcon />}
                variant="text"
                sx={{ px: 0 }}
              >
                {t('course.previousLesson')}
              </Button>
            )}
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {next && (
              <Button
                component={RouterLink}
                to={lessonPath(level, next.id)}
                endIcon={<ArrowForwardIcon />}
                variant="text"
                sx={{ px: 0 }}
              >
                {t('course.nextLesson')}
              </Button>
            )}
          </Box>
        </Stack>
      </Stack>

      <ScrollToTopButton />
    </PageContainer>
  );
}

export default LessonPage;
