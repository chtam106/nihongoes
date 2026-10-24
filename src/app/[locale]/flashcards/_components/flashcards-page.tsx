'use client';

import { useEffect, useMemo, useRef, useState, type SyntheticEvent } from 'react';
import { useSearchParams } from 'next/navigation';
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
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
import { Heading } from '@/components/heading';
import { HintText } from '@/components/hint-text';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { PageContainer } from '@/components/page-container';
import { flashcardCollectionPath } from '@/constants/courses/levels.ts';
import type { ResolvableFlashcard } from '@/constants/flashcards/catalog.ts';
import {
  isDefaultCollectionId,
  type DefaultCollection,
  type FlashcardCollection
} from '@/constants/flashcards/collections.ts';
import { groupDefaultCollections } from '@/constants/flashcards/default-collection-groups.ts';
import {
  FlashcardDefaultsProvider,
  useFlashcardDefaults
} from '@/features/flashcards/flashcard-defaults.tsx';
import { useFlashcardCollections } from '@/features/flashcards/use-flashcard-collections.ts';
import { useRouter } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import {
  flashcardsListPath,
  parseFlashcardsListTabParam,
  FLASHCARDS_LIST_TAB_QUERY,
  type FlashcardsListTab
} from './flashcards-list-tab.ts';
import { focusVisibleSx } from '@/theme/focus.ts';
import { coarsePressResetSx } from '@/theme/hover.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';

type CollectionsGridProps = {
  collections: FlashcardCollection[];
  allowRename: boolean;
  allowDelete: boolean;
  onRename?: (collection: FlashcardCollection) => void;
  onDelete?: (collection: FlashcardCollection) => void;
};

function CollectionsGrid({
  collections,
  allowRename,
  allowDelete,
  onRename,
  onDelete
}: CollectionsGridProps) {
  const { t } = useTranslation();
  const { resolveCards } = useFlashcardDefaults();

  if (collections.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary">
        {t('flashcards.empty')}
      </Typography>
    );
  }

  return (
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
                pb: allowRename || allowDelete ? 0.5 : 1.5,
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
            {(allowRename || allowDelete) && (
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
                {allowDelete && onDelete && (
                  <IconButton
                    aria-label={t('flashcards.deleteName', { name: collection.name })}
                    onClick={() => onDelete(collection)}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </Box>
            )}
          </Paper>
        );
      })}
    </Box>
  );
}

type CollectionGroupProps = {
  title: string;
  collections: FlashcardCollection[];
  defaultOpen?: boolean;
};

function CollectionGroup({ title, collections, defaultOpen = false }: CollectionGroupProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Stack spacing={1.5}>
      <Heading component="h2" scale="subsection">
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
        <CollectionsGrid collections={collections} allowRename={false} allowDelete={false} />
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
  const { t, locale } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlSyncedRef = useRef(false);
  const { collections, create, rename, remove } = useFlashcardCollections();
  const mine = collections.filter((collection) => !isDefaultCollectionId(collection.id));
  const builtin = collections.filter((collection) => isDefaultCollectionId(collection.id));
  const defaultGroups = useMemo(() => groupDefaultCollections(builtin, locale), [builtin, locale]);
  const tabParam = searchParams.get(FLASHCARDS_LIST_TAB_QUERY);
  const tabFromUrl = parseFlashcardsListTabParam(tabParam);
  const listTab = tabFromUrl ?? 'mine';

  useEffect(() => {
    if (urlSyncedRef.current) {
      return;
    }

    urlSyncedRef.current = true;

    if (tabParam === null || tabFromUrl === null) {
      router.replace(flashcardsListPath(listTab), { scroll: false });
    }
  }, [listTab, router, tabFromUrl, tabParam]);

  const handleListTabChange = (_event: SyntheticEvent, value: FlashcardsListTab) => {
    router.replace(flashcardsListPath(value), { scroll: false });
  };
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

  const openRename = (collection: FlashcardCollection) => {
    setRenameTarget(collection);
    setRenameValue(collection.name);
    setRenameOpen(true);
  };

  const openDelete = (collection: FlashcardCollection) => {
    setPendingDelete(collection);
    setDeleteOpen(true);
  };

  return (
    <PageContainer bottomGutter>
      <Stack spacing={3}>
        <Box>
          <Heading component="h1">{t('flashcards.title')}</Heading>
          <Stack spacing={0.5} sx={{ mt: 1.5 }}>
            <HintText>{t('flashcards.flipHint')}</HintText>
            <HintText>{t('flashcards.saveHint')}</HintText>
          </Stack>
        </Box>

        <Box>
          <Tabs
            value={listTab}
            onChange={handleListTabChange}
            variant="fullWidth"
            sx={{
              mb: 2,
              '& .MuiTab-root': { textTransform: 'none', fontSize: '1rem', fontWeight: 600 }
            }}
          >
            <Tab value="mine" label={t('flashcards.myCollections')} />
            <Tab value="default" label={t('flashcards.defaultCollections')} />
          </Tabs>

          {listTab === 'mine' && (
            <Stack spacing={2} role="tabpanel" aria-label={t('flashcards.myCollections')}>
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
              <CollectionsGrid
                collections={mine}
                allowRename
                allowDelete
                onRename={openRename}
                onDelete={openDelete}
              />
            </Stack>
          )}

          {listTab === 'default' && (
            <Stack spacing={2.5} role="tabpanel" aria-label={t('flashcards.defaultCollections')}>
              {defaultGroups.map((group) => (
                <CollectionGroup
                  key={group.key}
                  title={group.title}
                  collections={group.collections}
                />
              ))}
            </Stack>
          )}
        </Box>
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
