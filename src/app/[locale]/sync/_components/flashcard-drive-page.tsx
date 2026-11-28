'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Stack } from '@mui/material';
import { Heading } from '@/components/heading';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { PageContainer } from '@/components/page-container';
import { routes } from '@/constants/routes.ts';
import {
  FlashcardDriveConnect,
  FlashcardDriveProvider
} from '@/features/flashcards/flashcard-drive.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';

export default function FlashcardDrivePage() {
  const { t } = useTranslation();

  return (
    <PageContainer bottomGutter>
      <FlashcardDriveProvider>
        <Stack spacing={3}>
          <Heading component="h1">{t('flashcards.driveLink')}</Heading>
          <Stack spacing={3}>
            <FlashcardDriveConnect />
            <Button
              component={RouterLink}
              to={routes.flashcards}
              endIcon={<ArrowForwardIcon />}
              variant="text"
              sx={{ alignSelf: 'center' }}
            >
              {t('flashcards.title')}
            </Button>
          </Stack>
        </Stack>
      </FlashcardDriveProvider>
    </PageContainer>
  );
}
