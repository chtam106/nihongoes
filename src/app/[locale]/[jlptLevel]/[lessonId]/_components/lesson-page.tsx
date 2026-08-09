'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { ReferenceBlockView } from '@/components/reference-block';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import {
  getCourse,
  getLesson,
  lessonGrammarPath,
  lessonHasKanji,
  lessonHasReading,
  lessonPath,
  lessonReadingPath,
  lessonVocabularyPath,
  lessonWritingPath,
  type CourseLevel,
  type Lesson,
  type ConversationScene,
  type ConversationSpeaker
} from '@/constants/courses/index.ts';
import { DIALOGUE_SPEAKER_COLORS } from '@/constants/dialogue-speaker-colors.ts';
import { ConversationTurnGroup, groupConversationTurns } from '@/components/conversation-line-card';
import { SectionHeaderWithTranslationToggle } from '@/components/section-header-with-translation';
import { GrammarPointCard } from '@/components/grammar-point-card';
import { Heading } from '@/components/heading';
import { HintText } from '@/components/hint-text';
import { LessonSectionNav } from '@/components/lesson-section-nav';
import { PageContainer } from '@/components/page-container';
import { SpeakableSurface } from '@/components/speakable-surface';
import { useTranslation } from '@/i18n/use-translation.ts';
import { useUserPreferences } from '@/utils/user-preferences.ts';
import { VocabHeadword } from '@/components/vocab-headword';
import { elevatedSurfaceSx, subtleSurfaceSx, tonalSurfaceSx } from '@/theme/surfaces.ts';
import { LessonNotFound } from '@/features/course/shared';

// Offset anchored sections below the fixed app bar when scrolled to.
const SECTION_ANCHOR_SX = { scrollMarginTop: { xs: 72, md: 88 } } as const;

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
        {lesson.vocab.map((item, index) => (
          <SpeakableSurface
            key={`vocab-${index}-${item.kana}`}
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

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 1.5
        }}
      >
        {lesson.phrases.map((phrase, index) => (
          <SpeakableSurface
            key={`phrase-${index}-${phrase.kana}`}
            text={phrase.speech ?? phrase.kana}
            sx={{ p: 1.5 }}
          >
            <VocabHeadword item={phrase} />
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              {phrase.meaning[locale]}
            </Typography>
          </SpeakableSurface>
        ))}
      </Box>
    </Box>
  );
}

type ConversationSectionProps = {
  lesson: Lesson;
};

function buildSpeakerColorMap(speakers: ConversationSpeaker[]): Map<string, string> {
  return new Map(
    speakers.map((speaker, index) => [
      speaker.id,
      DIALOGUE_SPEAKER_COLORS[index % DIALOGUE_SPEAKER_COLORS.length]
    ])
  );
}

type ConversationSceneBlockProps = {
  scene: ConversationScene;
  locale: 'en' | 'vi';
  colorMap: Map<string, string>;
  showTranslation: boolean;
  onToggleTranslation: () => void;
};

function ConversationSceneBlock({
  scene,
  locale,
  colorMap,
  showTranslation,
  onToggleTranslation
}: ConversationSceneBlockProps) {
  const [preferences] = useUserPreferences();
  const speakerById = new Map(scene.speakers.map((speaker) => [speaker.id, speaker]));
  const turns = groupConversationTurns(
    scene.lines,
    speakerById,
    colorMap,
    DIALOGUE_SPEAKER_COLORS[0]
  );
  const revealTranslation = showTranslation;

  return (
    <Box>
      {preferences.showTranslation && (
        <SectionHeaderWithTranslationToggle
          showTranslation={showTranslation}
          onToggle={onToggleTranslation}
          title={
            <Heading scale="subsection" component="h3" sx={{ mb: 0 }}>
              {scene.title[locale]}
            </Heading>
          }
        />
      )}
      {!preferences.showTranslation && (
        <Heading scale="subsection" component="h3" sx={{ mb: 1.5 }}>
          {scene.title[locale]}
        </Heading>
      )}
      <Stack spacing={1}>
        {turns.map((turn, index) => (
          <ConversationTurnGroup
            key={`${scene.id}-${turn.speakerId}-${index}`}
            turn={turn}
            locale={locale}
            showTranslation={revealTranslation}
          />
        ))}
      </Stack>
    </Box>
  );
}

function ConversationSection({ lesson }: ConversationSectionProps) {
  const { locale, t } = useTranslation();
  const [preferences] = useUserPreferences();
  const [showTranslationsByScene, setShowTranslationsByScene] = useState<Record<string, boolean>>(
    {}
  );

  if (!lesson.conversation || lesson.conversation.length === 0) {
    return null;
  }

  const toggleSceneTranslation = (sceneId: string) => {
    setShowTranslationsByScene((previous) => {
      const current = previous[sceneId] ?? preferences.showTranslationsByDefault;

      return {
        ...previous,
        [sceneId]: !current
      };
    });
  };

  return (
    <Box id="conversation" sx={SECTION_ANCHOR_SX}>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
        <ForumOutlinedIcon color="primary" />
        <Heading component="h2">{t('course.conversationHeading')}</Heading>
      </Stack>

      <Stack spacing={2} key={String(preferences.showTranslationsByDefault)}>
        {lesson.conversation.map((scene) => {
          const colorMap = buildSpeakerColorMap(scene.speakers);

          return (
            <Paper key={scene.id} elevation={0} sx={[elevatedSurfaceSx, { p: { xs: 2, md: 2.5 } }]}>
              <ConversationSceneBlock
                scene={scene}
                locale={locale}
                colorMap={colorMap}
                showTranslation={
                  showTranslationsByScene[scene.id] ?? preferences.showTranslationsByDefault
                }
                onToggleTranslation={() => toggleSceneTranslation(scene.id)}
              />
            </Paper>
          );
        })}
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
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
        <LibraryBooksOutlinedIcon color="primary" />
        <Heading component="h2">{t('course.referenceHeading')}</Heading>
      </Stack>

      <Stack spacing={3}>
        {lesson.reference.map((block, index) => (
          <ReferenceBlockView
            key={`${block.kind}-${block.title.en}-${index}`}
            block={block}
            locale={locale}
          />
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
    <PageContainer>
      <Stack spacing={4}>
        <Box>
          <Heading component="h1">{lesson.title[locale]}</Heading>

          <Paper elevation={0} sx={[subtleSurfaceSx, { p: 2, mt: 2 }]}>
            <Typography variant="body1">{lesson.focus[locale]}</Typography>
            <HintText sx={{ mt: 1.5 }}>{t('course.audioHint')}</HintText>
          </Paper>
        </Box>

        <VocabularySection lesson={lesson} />
        <PhrasesSection lesson={lesson} />
        <GrammarSection lesson={lesson} />
        <ConversationSection lesson={lesson} />

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

      <LessonSectionNav lesson={lesson} />
    </PageContainer>
  );
}

export default LessonPage;
