'use client';

import { useState } from 'react';
import AddOutlined from '@mui/icons-material/AddOutlined';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import EditOutlined from '@mui/icons-material/EditOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Box,
  Button,
  ButtonBase,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { Heading } from '@/components/heading';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { PageContainer } from '@/components/page-container';
import { flashcardCollectionPath } from '@/constants/courses/levels.ts';
import type { ResolvableFlashcard } from '@/constants/flashcards/catalog.ts';
import {
  isDefaultCollectionId,
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
import { coarsePressResetSx } from '@/theme/hover.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';

type CollectionGroupProps = {
  title: string;
  collections: FlashcardCollection[];
  allowRename: boolean;
  defaultOpen?: boolean;
  onRename?: (collection: FlashcardCollection) => void;
  onDelete: (collection: FlashcardCollection) => void;
};

function CollectionGroup({
  title,
  collections,
  allowRename,
  defaultOpen = false,
  onRename,
  onDelete
}: CollectionGroupProps) {
  const { t } = useTranslation();
  const { resolveCards } = useFlashcardDefaults();
  const [open, setOpen] = useState(defaultOpen);
  const cards = (
    <>
      {collections.length === 0 && (
        <Typography variant="body1" color="text.secondary">
          {t('flashcards.empty')}
        </Typography>
      )}
      {collections.length > 0 && (
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
            const count = resolveCards(collection.cards.map((card) => card.id)).length;

            return (
              <Paper
                key={collection.id}
                elevation={0}
                sx={[elevatedSurfaceSx, { display: 'flex', flexDirection: 'column', minWidth: 0 }]}
              >
                <Box
                  component={RouterLink}
                  to={flashcardCollectionPath(collection.id)}
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
                    textDecoration: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    '&:focus': { outline: 'none' },
                    '&:focus-visible': focusVisibleSx(theme)
                  })}
                >
                  <Typography component="span" sx={{ fontWeight: 600, overflowWrap: 'break-word' }}>
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
                  {allowRename && onRename && (
                    <IconButton
                      aria-label={t('flashcards.renameName', { name: collection.name })}
                      onClick={() => onRename(collection)}
                    >
                      <EditOutlined />
                    </IconButton>
                  )}
                  <IconButton
                    aria-label={t('flashcards.deleteName', { name: collection.name })}
                    onClick={() => onDelete(collection)}
                  >
                    <DeleteOutlined />
                  </IconButton>
                </Box>
              </Paper>
            );
          })}
        </Box>
      )}
    </>
  );

  return (
    <Stack spacing={1.5}>
      <Heading component="h2">
        <ButtonBase
          onClick={() => setOpen((previous) => !previous)}
          aria-expanded={open}
          aria-label={
            open ? t('nav.collapse', { label: title }) : t('nav.expand', { label: title })
          }
          sx={(theme) => ({
            '--button-rest-bg': theme.palette.grey[100],
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
            px: 2,
            py: 1.5,
            borderRadius: 2,
            bgcolor: 'grey.100',
            textAlign: 'left',
            color: 'inherit',
            font: 'inherit',
            WebkitTapHighlightColor: 'transparent',
            '&:focus': { outline: 'none' },
            '&:focus-visible': focusVisibleSx(theme),
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover': { color: 'primary.main' }
            },
            ...coarsePressResetSx
          })}
        >
          <Box component="span">
            {title} ({collections.length})
          </Box>
          {open && <ExpandLess color="primary" />}
          {!open && <ExpandMore color="primary" />}
        </ButtonBase>
      </Heading>
      <Collapse in={open} unmountOnExit>
        {cards}
      </Collapse>
    </Stack>
  );
}

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
  const { t } = useTranslation();
  const { collections, create, rename, remove } = useFlashcardCollections();
  const mine = collections.filter((collection) => !isDefaultCollectionId(collection.id));
  const builtin = collections.filter((collection) => isDefaultCollectionId(collection.id));
  const [draft, setDraft] = useState('');
  const [createOpen, setCreateOpen] = useState(false);
  const [renameTarget, setRenameTarget] = useState<FlashcardCollection | null>(null);
  const [renameValue, setRenameValue] = useState('');
  const [renameOpen, setRenameOpen] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<FlashcardCollection | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

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

  return (
    <PageContainer bottomGutter>
      <Stack spacing={3}>
        <Box>
          <Heading component="h1">{t('flashcards.title')}</Heading>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            startIcon={<AddOutlined />}
            onClick={() => setCreateOpen(true)}
            sx={{ textTransform: 'none' }}
          >
            {t('flashcards.newCollection')}
          </Button>
        </Box>

        <CollectionGroup
          title={t('flashcards.myCollections')}
          collections={mine}
          allowRename
          defaultOpen
          onRename={(collection) => {
            setRenameTarget(collection);
            setRenameValue(collection.name);
            setRenameOpen(true);
          }}
          onDelete={(collection) => {
            setPendingDelete(collection);
            setDeleteOpen(true);
          }}
        />
        {builtin.length > 0 && (
          <CollectionGroup
            title={t('flashcards.defaultCollections')}
            collections={builtin}
            allowRename={false}
            onDelete={(collection) => {
              setPendingDelete(collection);
              setDeleteOpen(true);
            }}
          />
        )}
      </Stack>

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
