'use client';

import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography
} from '@mui/material';
import {
  isDefaultCollectionId,
  type FlashcardCard,
  type FlashcardCollection
} from '@/constants/flashcards/collections.ts';
import { STUDY_LAYER_Z_INDEX } from '@/features/flashcards/study-menu.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

type SaveToCollectionDialogViewProps = {
  open: boolean;
  cards: readonly FlashcardCard[];
  collections: readonly FlashcardCollection[];
  onClose: () => void;
  onToggle: (collectionId: string, included: boolean) => void;
  onCreate: (name: string) => void;
  phrase?: string;
  meaning?: string;
  onMeaningChange?: (value: string) => void;
};

export function SaveToCollectionDialogView({
  open,
  cards,
  collections,
  onClose,
  onToggle,
  onCreate,
  phrase,
  meaning,
  onMeaningChange
}: SaveToCollectionDialogViewProps) {
  const { t } = useTranslation();
  const customCollections = collections.filter(
    (collection) => !isDefaultCollectionId(collection.id)
  );
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    if (!open) {
      return;
    }

    const clear = () => window.getSelection()?.removeAllRanges();
    clear();
    const frame = window.requestAnimationFrame(clear);

    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  const handleClose = () => {
    setCreating(false);
    setName('');
    onClose();
  };

  const handleToggle = (collectionId: string, included: boolean) => {
    if (cards.length === 0) {
      return;
    }

    onToggle(collectionId, included);
  };

  const handleCreate = () => {
    if (cards.length === 0 || !name.trim()) {
      return;
    }

    onCreate(name);
    setName('');
    setCreating(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      sx={{ zIndex: STUDY_LAYER_Z_INDEX }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
          fontWeight: 600,
          pr: 1
        }}
      >
        {t('flashcards.saveTo')}
        <IconButton aria-label={t('flashcards.close')} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {phrase && onMeaningChange && (
        <Box sx={{ px: 3, pb: 1 }}>
          <Typography lang="ja" sx={{ fontWeight: 600, mb: 1 }}>
            {phrase}
          </Typography>
          <TextField
            autoFocus
            fullWidth
            size="small"
            label={t('flashcards.meaning')}
            value={meaning ?? ''}
            onChange={(event) => onMeaningChange(event.target.value)}
          />
        </Box>
      )}
      <DialogContent sx={{ px: 0, py: 0, userSelect: 'none' }}>
        {customCollections.length === 0 && (
          <Typography variant="body1" color="text.secondary" sx={{ px: 3, py: 1 }}>
            {t('flashcards.empty')}
          </Typography>
        )}
        {customCollections.map((collection) => {
          const present = cards.filter((card) =>
            collection.cards.some((item) => item.id === card.id)
          ).length;
          const checked = cards.length > 0 && present === cards.length;

          return (
            <Box
              key={collection.id}
              component="label"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                minWidth: 0,
                cursor: 'pointer',
                '&:hover': { bgcolor: 'action.hover' }
              }}
            >
              <Checkbox
                checked={checked}
                indeterminate={present > 0 && !checked}
                onChange={() => handleToggle(collection.id, !checked)}
                sx={{ flexShrink: 0 }}
              />
              <Typography
                component="span"
                sx={{ fontWeight: 600, minWidth: 0, overflowWrap: 'break-word' }}
              >
                {collection.name}
              </Typography>
            </Box>
          );
        })}
      </DialogContent>
      <DialogActions sx={{ px: 2, py: 1.5, justifyContent: 'flex-start' }}>
        {!creating && (
          <Button
            startIcon={<AddIcon />}
            onClick={() => setCreating(true)}
            sx={{ textTransform: 'none' }}
          >
            {t('flashcards.newCollection')}
          </Button>
        )}
        {creating && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 1,
              width: '100%',
              alignItems: { xs: 'stretch', sm: 'center' }
            }}
          >
            <TextField
              autoFocus
              fullWidth
              size="small"
              label={t('flashcards.collectionName')}
              value={name}
              onChange={(event) => setName(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleCreate();
                }
              }}
            />
            <Button
              variant="contained"
              onClick={handleCreate}
              disabled={!name.trim()}
              sx={{ textTransform: 'none', flexShrink: 0 }}
            >
              {t('flashcards.create')}
            </Button>
          </Box>
        )}
      </DialogActions>
    </Dialog>
  );
}
