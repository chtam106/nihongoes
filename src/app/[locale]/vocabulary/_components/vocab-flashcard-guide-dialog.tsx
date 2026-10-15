'use client';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';

type VocabFlashcardGuideDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function VocabFlashcardGuideDialog({ open, onClose }: VocabFlashcardGuideDialogProps) {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>
        {t('course.vocabIndexFlashcardsGuideTitle')}
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">{t('course.vocabIndexFlashcardsGuideBody')}</Typography>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button variant="contained" onClick={onClose}>
          {t('course.vocabIndexFlashcardsGuideGotIt')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
