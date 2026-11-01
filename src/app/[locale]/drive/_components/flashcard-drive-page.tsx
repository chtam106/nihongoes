'use client';

import { Stack } from '@mui/material';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import {
  FlashcardDriveConnect,
  FlashcardDriveProvider
} from '@/features/flashcards/flashcard-drive.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';

export default function FlashcardDrivePage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <FlashcardDriveProvider>
        <Stack spacing={2}>
          <Heading component="h1">{t('flashcards.driveLink')}</Heading>
          <FlashcardDriveConnect />
        </Stack>
      </FlashcardDriveProvider>
    </PageContainer>
  );
}
