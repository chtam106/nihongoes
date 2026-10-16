'use client';

import { useState } from 'react';
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
import { useFlashcardCollections } from '@/features/flashcards/use-flashcard-collections.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

type SaveToCollectionDialogProps = {
  open: boolean;
  cardId: string | null;
  onClose: () => void;
};

export function SaveToCollectionDialog({ open, cardId, onClose }: SaveToCollectionDialogProps) {
  const { t } = useTranslation();
  const { collections, toggleCard, create } = useFlashcardCollections();
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState('');

  const handleClose = () => {
    setCreating(false);
    setName('');
    onClose();
  };

  const handleToggle = (collectionId: string) => {
    if (!cardId) {
      return;
    }

    toggleCard(collectionId, cardId);
  };

  const handleCreate = () => {
    if (!cardId || !name.trim()) {
      return;
    }

    create(name, cardId);
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
      <DialogContent sx={{ px: 0, py: 0 }}>
        {collections.length === 0 && (
          <Typography variant="body1" color="text.secondary" sx={{ px: 3, py: 1 }}>
            {t('flashcards.empty')}
          </Typography>
        )}
        {collections.map((collection) => {
          const checked = cardId !== null && collection.cardIds.includes(cardId);

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
                cursor: 'pointer',
                '&:hover': { bgcolor: 'action.hover' }
              }}
            >
              <Checkbox checked={checked} onChange={() => handleToggle(collection.id)} />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 1,
                  minWidth: 0,
                  flex: 1
                }}
              >
                <Typography component="span" sx={{ fontWeight: 600 }} noWrap>
                  {collection.name}
                </Typography>
                <Typography component="span" color="text.secondary" sx={{ flexShrink: 0 }}>
                  {t('flashcards.count', { count: collection.cardIds.length })}
                </Typography>
              </Box>
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
