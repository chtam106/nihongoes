'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Box, Button, Stack, Typography } from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { n5Reference } from '@/constants/courses/n5/reference/index.ts';
import { coursePath } from '@/constants/courses/levels.ts';
import { Heading } from '@/components/heading';
import { HintText } from '@/components/hint-text';
import { PageContainer } from '@/components/page-container';
import { ReferenceArticleView } from '@/features/course/reference/reference-article';
import { ReferenceTableSectionView } from '@/features/course/reference/reference-table';
import { VerbGroupSection } from '@/features/course/reference/verb-tables';
import { useTranslation } from '@/i18n/use-translation.ts';

export function N5ReferencePage() {
  const { locale, t } = useTranslation();
  const content = n5Reference;

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

        <Box id="columns">
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 2 }}>
            <MenuBookOutlinedIcon color="primary" />
            <Heading component="h2">{t('course.referenceColumnsHeading')}</Heading>
          </Stack>
          <Stack spacing={4}>
            {content.columns.map((article) => (
              <ReferenceArticleView key={article.id} article={article} />
            ))}
          </Stack>
        </Box>

        <Box id="appendix">
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 2 }}>
            <LibraryBooksOutlinedIcon color="primary" />
            <Heading component="h2">{t('course.referenceAppendixHeading')}</Heading>
          </Stack>
          <Stack spacing={3}>
            {content.appendix.map((section) => (
              <ReferenceTableSectionView key={section.id} section={section} />
            ))}
          </Stack>
        </Box>

        <Box id="verbs">
          <Heading component="h2" sx={{ mb: 2 }}>
            {t('course.referenceVerbsHeading')}
          </Heading>
          <Stack spacing={4}>
            <VerbGroupSection
              groupId="group-1"
              group="1"
              masu={content.verbs.group1.masu}
              nai={content.verbs.group1.nai}
            />
            <VerbGroupSection
              groupId="group-2"
              group="2"
              masu={content.verbs.group2.masu}
              nai={content.verbs.group2.nai}
            />
            <VerbGroupSection
              groupId="group-3"
              group="3"
              masu={content.verbs.group3.masu}
              nai={content.verbs.group3.nai}
            />
          </Stack>
        </Box>
      </Stack>
    </PageContainer>
  );
}
