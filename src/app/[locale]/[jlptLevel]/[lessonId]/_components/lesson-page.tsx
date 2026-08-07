'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { ReferenceBlockView } from '@/components/reference-block';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { Box, Button, Link, Paper, Stack, Typography } from '@mui/material';
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
  type VocabItem,
  type ConversationScene,
  type ConversationSpeaker
} from '@/constants/courses/index.ts';
import { ConversationTurnGroup, groupConversationTurns } from '@/components/conversation-line-card';
import { GrammarPointCard } from '@/components/grammar-point-card';
import { Heading } from '@/components/heading';
import { HintText } from '@/components/hint-text';
import { PageContainer } from '@/components/page-container';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import { SpeakableSurface } from '@/components/speakable-surface';
import { useTranslation } from '@/i18n/use-translation.ts';
import { renderJapaneseText } from '@/utils/japanese-text.tsx';
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
    ...(lesson.conversation && lesson.conversation.length > 0
      ? [{ id: 'conversation', label: t('course.conversationHeading') }]
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

      <Stack spacing={2}>
        {lesson.phrases.map((phrase, index) => (
          <Box
            key={`phrase-${index}-${phrase.kana}`}
            sx={{
              borderLeft: 4,
              borderColor: 'primary.main',
              pl: 2,
              pr: 1.5
            }}
          >
            <SpeakableSurface
              text={phrase.speech ?? phrase.kana}
              sx={{
                boxShadow: 'none',
                bgcolor: 'transparent',
                borderRadius: 1,
                px: 0.5,
                mx: -0.5
              }}
            >
              <Typography variant="body1" lang="ja" sx={{ fontWeight: 500 }}>
                {renderJapaneseText(phrase.kanji ?? phrase.kana, phrase.ruby)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {phrase.meaning[locale]}
              </Typography>
            </SpeakableSurface>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

type ConversationSectionProps = {
  lesson: Lesson;
};

const SPEAKER_COLORS = ['#1976d2', '#2e7d32', '#ed6c02', '#9c27b0', '#00838f'] as const;

function buildSpeakerColorMap(speakers: ConversationSpeaker[]): Map<string, string> {
  return new Map(
    speakers.map((speaker, index) => [speaker.id, SPEAKER_COLORS[index % SPEAKER_COLORS.length]])
  );
}

type ConversationSceneBlockProps = {
  scene: ConversationScene;
  locale: 'en' | 'vi';
  colorMap: Map<string, string>;
  showTranslation: boolean;
  onToggleTranslation: () => void;
  t: ReturnType<typeof useTranslation>['t'];
};

function ConversationSceneBlock({
  scene,
  locale,
  colorMap,
  showTranslation,
  onToggleTranslation,
  t
}: ConversationSceneBlockProps) {
  const speakerById = new Map(scene.speakers.map((speaker) => [speaker.id, speaker]));
  const turns = groupConversationTurns(scene.lines, speakerById, colorMap, SPEAKER_COLORS[0]);

  return (
    <Box>
      <Heading scale="subsection" component="h3" sx={{ mb: 1.5 }}>
        {scene.title[locale]}
      </Heading>
      <Link
        component="button"
        type="button"
        variant="body2"
        underline="hover"
        onClick={onToggleTranslation}
        sx={{ lineHeight: 1.66, mb: 1.5, display: 'block' }}
      >
        {showTranslation ? t('course.hideTranslation') : t('course.showTranslation')}
      </Link>
      <Stack spacing={1}>
        {turns.map((turn, index) => (
          <ConversationTurnGroup
            key={`${scene.id}-${turn.speakerId}-${index}`}
            turn={turn}
            locale={locale}
            showTranslation={showTranslation}
          />
        ))}
      </Stack>
    </Box>
  );
}

function ConversationSection({ lesson }: ConversationSectionProps) {
  const { locale, t } = useTranslation();
  const [showTranslationsByScene, setShowTranslationsByScene] = useState<Record<string, boolean>>(
    {}
  );

  if (!lesson.conversation || lesson.conversation.length === 0) {
    return null;
  }

  const toggleSceneTranslation = (sceneId: string) => {
    setShowTranslationsByScene((previous) => ({
      ...previous,
      [sceneId]: !previous[sceneId]
    }));
  };

  return (
    <Box id="conversation" sx={SECTION_ANCHOR_SX}>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
        <ForumOutlinedIcon color="primary" />
        <Heading component="h2">{t('course.conversationHeading')}</Heading>
      </Stack>

      <Stack spacing={3}>
        {lesson.conversation.map((scene) => {
          const colorMap = buildSpeakerColorMap(scene.speakers);

          return (
            <ConversationSceneBlock
              key={scene.id}
              scene={scene}
              locale={locale}
              colorMap={colorMap}
              showTranslation={Boolean(showTranslationsByScene[scene.id])}
              onToggleTranslation={() => toggleSceneTranslation(scene.id)}
              t={t}
            />
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
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 0.5 }}>
        <LibraryBooksOutlinedIcon color="primary" />
        <Heading component="h2">{t('course.referenceHeading')}</Heading>
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
        {t('course.referenceSubtitle')}
      </Typography>

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
    <PageContainer bottomGutter>
      <Stack spacing={4}>
        <Box>
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
        <ConversationSection lesson={lesson} />
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
