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
  type FlashcardCardType
} from '@/constants/flashcards/collections.ts';
import { useFlashcardCollections } from '@/features/flashcards/use-flashcard-collections.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

type SaveToCollectionDialogProps = {
  open: boolean;
  cardId: string | null;
  cardType: FlashcardCardType | null;
  onClose: () => void;
};

export function SaveToCollectionDialog({
  open,
  cardId,
  cardType,
  onClose
}: SaveToCollectionDialogProps) {
  const { t } = useTranslation();
  const { collections, toggleCard, create } = useFlashcardCollections();
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

  const handleToggle = (collectionId: string) => {
    if (!cardId) {
      return;
    }

    toggleCard(collectionId, cardId, cardType ?? undefined);
  };

  const handleCreate = () => {
    if (!cardId || !name.trim()) {
      return;
    }

    create(name, cardId, cardType ?? undefined);
    setName('');
    setCreating(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
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
      <DialogContent sx={{ px: 0, py: 0, userSelect: 'none' }}>
        {customCollections.length === 0 && (
          <Typography variant="body1" color="text.secondary" sx={{ px: 3, py: 1 }}>
            {t('flashcards.empty')}
          </Typography>
        )}
        {customCollections.map((collection) => {
          const checked = cardId !== null && collection.cards.some((card) => card.id === cardId);

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
                onChange={() => handleToggle(collection.id)}
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
