'use client';

import { useState, type MouseEvent } from 'react';
import AddOutlined from '@mui/icons-material/AddOutlined';
import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import EditOutlined from '@mui/icons-material/EditOutlined';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { VocabFlashcards } from '@/components/vocab-flashcards';
import type { ResolvableFlashcard } from '@/constants/flashcards/catalog.ts';
import {
  FLASHCARD_COLLECTIONS_FRONT_KEY,
  type DefaultCollection,
  type FlashcardCollection
} from '@/constants/flashcards/collections.ts';
import {
  FlashcardDefaultsProvider,
  useFlashcardDefaults
} from '@/features/flashcards/flashcard-defaults.tsx';
import { useFlashcardCollections } from '@/features/flashcards/use-flashcard-collections.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { focusVisibleSx } from '@/theme/focus.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { usePersistentState } from '@/utils/use-persistent-state.ts';
import {
  sanitizeFlashcardFront,
  type FlashcardFront
} from '@/app/[locale]/vocabulary/_components/vocab-index-preferences.ts';

const FRONT_FALLBACK: FlashcardFront = 'ja';

type FlashcardsPageProps = {
  defaults: readonly DefaultCollection[];
  extraCards: readonly ResolvableFlashcard[];
};

export function FlashcardsPage({ defaults, extraCards }: FlashcardsPageProps) {
  return (
    <FlashcardDefaultsProvider defaults={defaults} extraCards={extraCards}>
      <FlashcardsView />
    </FlashcardDefaultsProvider>
  );
}

function FlashcardsView() {
  const { locale, t } = useTranslation();
  const { collections, create, rename, remove } = useFlashcardCollections();
  const { resolveCards } = useFlashcardDefaults();
  const [front, setFront] = usePersistentState(
    FLASHCARD_COLLECTIONS_FRONT_KEY,
    FRONT_FALLBACK,
    sanitizeFlashcardFront
  );
  const [activeId, setActiveId] = useState<string | null>(null);
  const [draft, setDraft] = useState('');
  const [createOpen, setCreateOpen] = useState(false);
  const [renameTarget, setRenameTarget] = useState<FlashcardCollection | null>(null);
  const [renameValue, setRenameValue] = useState('');
  const [renameOpen, setRenameOpen] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<FlashcardCollection | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const active = activeId
    ? (collections.find((collection) => collection.id === activeId) ?? null)
    : null;
  const activeCards = active ? resolveCards(active.cardIds) : [];

  const handleCreate = () => {
    if (!draft.trim()) {
      return;
    }

    create(draft);
    setCreateOpen(false);
  };

  const handleRename = () => {
    if (!renameTarget || !renameValue.trim()) {
      return;
    }

    rename(renameTarget.id, renameValue);
    setRenameOpen(false);
  };

  const handleDelete = () => {
    if (!pendingDelete) {
      return;
    }

    remove(pendingDelete.id);
    setDeleteOpen(false);
  };

  const handleFrontChange = (_event: MouseEvent<HTMLElement>, value: FlashcardFront | null) => {
    if (value) {
      setFront(value);
    }
  };

  return (
    <PageContainer bottomGutter>
      {active && (
        <Stack spacing={2}>
          <Box>
            <Button
              startIcon={<ArrowBackOutlined />}
              onClick={() => setActiveId(null)}
              sx={{ textTransform: 'none' }}
            >
              {t('common.back')}
            </Button>
          </Box>
          <Heading component="h1">{active.name}</Heading>
          <ToggleButtonGroup
            exclusive
            color="primary"
            size="small"
            value={front}
            onChange={handleFrontChange}
            aria-label={t('course.vocabIndexFlashcardsFront')}
          >
            <ToggleButton value="ja">{t('course.vocabIndexFlashcardsFrontWord')}</ToggleButton>
            <ToggleButton value="meaning">
              {t('course.vocabIndexFlashcardsFrontMeaning')}
            </ToggleButton>
          </ToggleButtonGroup>
          {activeCards.length === 0 && (
            <Typography variant="body1" color="text.secondary">
              {t('flashcards.studyEmpty')}
            </Typography>
          )}
          {activeCards.length > 0 && (
            <VocabFlashcards key={active.id} cards={activeCards} locale={locale} front={front} />
          )}
        </Stack>
      )}

      {!active && (
        <Stack spacing={3}>
          <Box>
            <Heading component="h1">{t('flashcards.title')}</Heading>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              {t('flashcards.intro')}
            </Typography>
          </Box>

          <Box>
            <Button
              variant="contained"
              startIcon={<AddOutlined />}
              onClick={() => setCreateOpen(true)}
              sx={{ textTransform: 'none' }}
            >
              {t('flashcards.newCollection')}
            </Button>
          </Box>

          {collections.length === 0 && (
            <Typography variant="body1" color="text.secondary">
              {t('flashcards.empty')}
            </Typography>
          )}

          <Box
            sx={{
              display: 'grid',
              width: '100%',
              minWidth: 0,
              gridTemplateColumns: {
                xs: 'minmax(0, 1fr)',
                md: 'repeat(2, minmax(0, 1fr))',
                lg: 'repeat(3, minmax(0, 1fr))'
              },
              gap: 1.5
            }}
          >
            {collections.map((collection) => {
              const count = resolveCards(collection.cardIds).length;

              return (
                <Paper
                  key={collection.id}
                  elevation={0}
                  sx={[
                    elevatedSurfaceSx,
                    { display: 'flex', flexDirection: 'column', minWidth: 0 }
                  ]}
                >
                  <Box
                    component="button"
                    type="button"
                    onClick={() => setActiveId(collection.id)}
                    sx={(theme) => ({
                      width: '100%',
                      minWidth: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: 0.25,
                      pt: 1.5,
                      pb: 0.5,
                      px: 2,
                      border: 0,
                      bgcolor: 'transparent',
                      color: 'inherit',
                      font: 'inherit',
                      textAlign: 'left',
                      cursor: 'pointer',
                      WebkitTapHighlightColor: 'transparent',
                      '&:focus': { outline: 'none' },
                      '&:focus-visible': focusVisibleSx(theme)
                    })}
                  >
                    <Typography
                      component="span"
                      sx={{ fontWeight: 600, overflowWrap: 'break-word' }}
                    >
                      {collection.name}
                    </Typography>
                    <Typography component="span" color="text.secondary">
                      {t('flashcards.count', { count })}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      px: 1,
                      pb: 0.5
                    }}
                  >
                    <IconButton
                      aria-label={t('flashcards.renameName', { name: collection.name })}
                      onClick={() => {
                        setRenameTarget(collection);
                        setRenameValue(collection.name);
                        setRenameOpen(true);
                      }}
                    >
                      <EditOutlined />
                    </IconButton>
                    <IconButton
                      aria-label={t('flashcards.deleteName', { name: collection.name })}
                      onClick={() => {
                        setPendingDelete(collection);
                        setDeleteOpen(true);
                      }}
                    >
                      <DeleteOutlined />
                    </IconButton>
                  </Box>
                </Paper>
              );
            })}
          </Box>
        </Stack>
      )}

      <Dialog
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        slotProps={{
          transition: {
            onExited: () => setDraft('')
          }
        }}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 600 }}>{t('flashcards.newCollection')}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            size="small"
            label={t('flashcards.collectionName')}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                handleCreate();
              }
            }}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setCreateOpen(false)} sx={{ textTransform: 'none' }}>
            {t('flashcards.cancel')}
          </Button>
          <Button
            variant="contained"
            onClick={handleCreate}
            disabled={!draft.trim()}
            sx={{ textTransform: 'none' }}
          >
            {t('flashcards.create')}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={renameOpen}
        onClose={() => setRenameOpen(false)}
        slotProps={{
          transition: {
            onExited: () => {
              setRenameTarget(null);
              setRenameValue('');
            }
          }
        }}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 600 }}>{t('flashcards.renameTitle')}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            size="small"
            label={t('flashcards.collectionName')}
            value={renameValue}
            onChange={(event) => setRenameValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                handleRename();
              }
            }}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setRenameOpen(false)} sx={{ textTransform: 'none' }}>
            {t('flashcards.cancel')}
          </Button>
          <Button
            variant="contained"
            onClick={handleRename}
            disabled={!renameValue.trim()}
            sx={{ textTransform: 'none' }}
          >
            {t('flashcards.save')}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        slotProps={{
          transition: {
            onExited: () => setPendingDelete(null)
          }
        }}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 600 }}>{t('flashcards.deleteTitle')}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            {t('flashcards.deleteBody', { name: pendingDelete?.name ?? '' })}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setDeleteOpen(false)} sx={{ textTransform: 'none' }}>
            {t('flashcards.cancel')}
          </Button>
          <Button variant="contained" onClick={handleDelete} sx={{ textTransform: 'none' }}>
            {t('flashcards.delete')}
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
}

export default FlashcardsPage;
