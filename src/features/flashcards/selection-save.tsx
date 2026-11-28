'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import OpenInNewOutlined from '@mui/icons-material/OpenInNewOutlined';
import { Menu, MenuItem } from '@mui/material';
import {
  clipCard,
  clipPhrase,
  createCollection,
  customCollectionsForSave,
  EMPTY_FLASHCARD_STORE,
  FLASHCARD_COLLECTIONS_KEY,
  flashcardCard,
  replaceCustomCollections,
  sanitizeFlashcardStore,
  setCardsInCollection,
  type FlashcardCard,
  type FlashcardCollection
} from '@/constants/flashcards/collections.ts';
import { SaveToCollectionDialogView } from '@/features/flashcards/save-to-collection-dialog-view.tsx';
import {
  cardAskText,
  chatGptUrl,
  googleTranslateUrl,
  readSaveCard,
  STUDY_LAYER_Z_INDEX,
  STUDY_MENU_EVENT,
  type StudyMenuRequest
} from '@/features/flashcards/study-menu.ts';
import { notifyReviewRemoved } from '@/features/flashcards/review-toast.tsx';
import { useFlashcardReviews } from '@/features/flashcards/use-flashcard-reviews.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { Locale } from '@/types/i18n.ts';
import { isMobileOs } from '@/utils/mobile-os.ts';
import { usePersistentState } from '@/utils/use-persistent-state.ts';

function hasOpenDialog() {
  return [...document.querySelectorAll('[role="dialog"]')].some((element) => {
    const modal = element.closest('.MuiModal-root');

    return !modal || !modal.classList.contains('MuiModal-hidden');
  });
}

function isTypingTarget(target: EventTarget | null) {
  return (
    target instanceof Element &&
    Boolean(target.closest('input, textarea, select, [contenteditable="true"]'))
  );
}

function selectionText(target: EventTarget | null) {
  const selection = window.getSelection();

  if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
    return '';
  }

  const text = clipPhrase(selection.toString());

  if (!text || !(target instanceof Node)) {
    return '';
  }

  const element = target instanceof Element ? target : target.parentElement;

  if (!element) {
    return '';
  }

  try {
    if (!selection.getRangeAt(0).intersectsNode(element)) {
      return '';
    }
  } catch {
    return '';
  }

  return text;
}

function withClipMeaning(collections: FlashcardCollection[], card: FlashcardCard) {
  return collections.reduce(
    (current, collection) =>
      collection.cards.some((item) => item.id === card.id)
        ? setCardsInCollection(current, collection.id, [card], true)
        : current,
    collections
  );
}

/**
 * Study menu rows: roomy, and hover or keyboard focus only turns the label and
 * icon sakura (like the drawer rows), with no background fill. The doubled `&&`
 * outranks the theme's MenuItem hover fill and MUI's focus fill.
 */
const STUDY_MENU_ITEM_SX = {
  minHeight: 48,
  px: 2.5,
  py: 1.25,
  transition: 'color 0.15s ease',
  '&&:hover, &&.Mui-focusVisible, &&.Mui-selected': {
    bgcolor: 'transparent',
    color: 'primary.main',
    '& .MuiSvgIcon-root': { color: 'primary.main' }
  },
  '@media (hover: none)': {
    '&&:hover': { bgcolor: 'transparent' }
  }
} as const;

export function SelectionSave() {
  const { locale, t } = useTranslation();
  const { store: reviews, add: addToReview, remove: removeFromReview } = useFlashcardReviews();
  const [store, setStore] = usePersistentState(
    FLASHCARD_COLLECTIONS_KEY,
    EMPTY_FLASHCARD_STORE,
    sanitizeFlashcardStore
  );
  const [phrase, setPhrase] = useState('');
  const [meaning, setMeaning] = useState('');
  const [savedCard, setSavedCard] = useState<FlashcardCard | null>(null);
  const [menu, setMenu] = useState<StudyMenuRequest | null>(null);
  const requestId = useRef(0);
  const meaningEdited = useRef(false);
  const clip = clipCard(phrase, meaning);
  const dialogCards = savedCard ? [savedCard] : clip ? [clip] : [];
  const collections = customCollectionsForSave(store, locale);
  const dialogOpen = savedCard !== null || phrase.length > 0;

  const apply = (reducer: (current: FlashcardCollection[]) => FlashcardCollection[]) => {
    setStore((previous) => {
      const current = customCollectionsForSave(previous, locale);
      const next = reducer(current);

      if (next === current) {
        return previous;
      }

      return replaceCustomCollections(previous, next);
    });
  };

  const startClipSave = useCallback(
    (text: string) => {
      const id = requestId.current + 1;
      requestId.current = id;
      meaningEdited.current = false;
      setSavedCard(null);
      setPhrase(text);
      setMeaning(text);
      void import('@/constants/flashcards/catalog.ts').then(({ lookupFlashcardMeaning }) => {
        const gloss = lookupFlashcardMeaning(text, locale);

        if (requestId.current !== id || meaningEdited.current || !gloss) {
          return;
        }

        setMeaning(gloss);
        const next = clipCard(text, gloss);

        if (!next) {
          return;
        }

        setStore((previous) => {
          const current = customCollectionsForSave(previous, locale);
          const updated = withClipMeaning(current, next);

          if (updated === current) {
            return previous;
          }

          return replaceCustomCollections(previous, updated);
        });
      });
    },
    [locale, setStore]
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 's' && event.key !== 'S') {
        return;
      }

      if (
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.repeat ||
        event.isComposing ||
        event.defaultPrevented
      ) {
        return;
      }

      if (phrase || savedCard || isTypingTarget(event.target) || hasOpenDialog()) {
        return;
      }

      const text = clipPhrase(window.getSelection()?.toString() ?? '');

      if (!text) {
        return;
      }

      event.preventDefault();
      setMenu(null);
      startClipSave(text);
    };

    const onContextMenu = (event: MouseEvent) => {
      if (isTypingTarget(event.target) || hasOpenDialog()) {
        return;
      }

      const selected = selectionText(event.target);
      const host = readSaveCard(event.target instanceof Element ? event.target : null);

      if (!selected && !host) {
        return;
      }

      event.preventDefault();
      setMenu(
        selected
          ? { x: event.clientX, y: event.clientY, askText: selected, copyText: selected }
          : {
              x: event.clientX,
              y: event.clientY,
              askText: host ? cardAskText(host.element) : '',
              card: host?.card,
              collectionId: host?.collectionId
            }
      );
    };

    const onStudyMenu = (event: Event) => {
      const detail = (event as CustomEvent<StudyMenuRequest>).detail;

      if (!detail) {
        return;
      }

      setMenu(detail);
    };

    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('contextmenu', onContextMenu);
    window.addEventListener(STUDY_MENU_EVENT, onStudyMenu);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('contextmenu', onContextMenu);
      window.removeEventListener(STUDY_MENU_EVENT, onStudyMenu);
    };
  }, [phrase, savedCard, startClipSave]);

  const handleMeaningChange = (value: string) => {
    meaningEdited.current = true;
    setMeaning(value);
    const next = clipCard(phrase, value);

    if (!next) {
      return;
    }

    apply((current) => withClipMeaning(current, next));
  };

  const saveFromMenu = () => {
    const request = menu;
    setMenu(null);

    if (!request) {
      return;
    }

    if (request.card) {
      const card = flashcardCard(request.card.id, request.card.type);

      if (card) {
        setPhrase('');
        setSavedCard(card);
        return;
      }
    }

    if (request.askText) {
      startClipSave(request.askText);
    }
  };

  /** Adds the card to the review list, or takes it off when it is already there. */
  const toggleReviewFromMenu = () => {
    const card = menu?.card;

    setMenu(null);

    if (!card) {
      return;
    }

    if (card.id in reviews.cards) {
      removeFromReview(card.id);
      notifyReviewRemoved(1);
      return;
    }

    addToReview(card.id);
  };

  const removeFromCollection = () => {
    const request = menu;

    setMenu(null);

    if (!request?.card || !request.collectionId) {
      return;
    }

    const { collectionId } = request;
    const cardId = request.card.id;

    // Use the stored card: a phrase saved from selected text needs its text to match.
    apply((current) => {
      const stored = current
        .find((collection) => collection.id === collectionId)
        ?.cards.find((card) => card.id === cardId);

      return stored ? setCardsInCollection(current, collectionId, [stored], false) : current;
    });
  };

  const copySelection = () => {
    const text = menu?.copyText;

    setMenu(null);

    if (!text) {
      return;
    }

    // The Clipboard API needs a secure context; the old command still works on the live selection.
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => document.execCommand('copy'));
      return;
    }

    document.execCommand('copy');
  };

  /** Opens an outside tool for the menu text: a new tab on desktop, this tab on a phone. */
  const openOutside = (buildUrl: (text: string, locale: Locale) => string) => {
    const text = menu?.askText;

    setMenu(null);

    if (!text) {
      return;
    }

    const url = buildUrl(text, locale);

    // A phone handles a new tab badly (and may hand off to the app), so stay in this tab there.
    if (isMobileOs()) {
      window.location.assign(url);
      return;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const activeCard = savedCard ?? clip;
  // Only a real card can join the review list; selected text is not a card yet.
  const menuCard =
    menu?.card && flashcardCard(menu.card.id, menu.card.type) ? menu.card : undefined;
  const menuCardOnList = Boolean(menuCard && menuCard.id in reviews.cards);

  return (
    <>
      {menu && (
        <Menu
          open
          onClose={() => setMenu(null)}
          anchorReference="anchorPosition"
          anchorPosition={{ top: menu.y, left: menu.x }}
          // Opened by a pointer: no row should look hovered until the pointer is on it.
          disableAutoFocusItem
          sx={{ zIndex: STUDY_LAYER_Z_INDEX }}
          // Roomier than MUI's dense default: it is a study tool, tapped as often as clicked.
          slotProps={{
            paper: { sx: { minWidth: 240 } },
            list: { sx: { py: 1 } }
          }}
        >
          {menu.copyText && (
            <MenuItem onClick={copySelection} sx={STUDY_MENU_ITEM_SX}>
              {t('flashcards.contextCopy')}
            </MenuItem>
          )}
          <MenuItem onClick={saveFromMenu} sx={STUDY_MENU_ITEM_SX}>
            {t('flashcards.contextSave')}
          </MenuItem>
          {menu.card && menu.collectionId && (
            <MenuItem onClick={removeFromCollection} sx={STUDY_MENU_ITEM_SX}>
              {t('flashcards.contextRemoveFromCollection')}
            </MenuItem>
          )}
          {menuCard && (
            <MenuItem onClick={toggleReviewFromMenu} sx={STUDY_MENU_ITEM_SX}>
              {menuCardOnList ? t('flashcards.reviewRemove') : t('flashcards.reviewAdd')}
            </MenuItem>
          )}
          <MenuItem
            disabled={!menu.askText}
            onClick={() => openOutside(chatGptUrl)}
            sx={[STUDY_MENU_ITEM_SX, { display: 'flex', alignItems: 'center', gap: 1 }]}
          >
            {t('flashcards.contextChatGpt')}
            <OpenInNewOutlined aria-hidden sx={{ fontSize: '1.25rem', color: 'text.secondary' }} />
          </MenuItem>
          <MenuItem
            disabled={!menu.askText}
            onClick={() => openOutside(googleTranslateUrl)}
            sx={[STUDY_MENU_ITEM_SX, { display: 'flex', alignItems: 'center', gap: 1 }]}
          >
            {t('flashcards.contextGoogleTranslate')}
            <OpenInNewOutlined aria-hidden sx={{ fontSize: '1.25rem', color: 'text.secondary' }} />
          </MenuItem>
        </Menu>
      )}
      <SaveToCollectionDialogView
        open={dialogOpen}
        cards={dialogCards}
        collections={collections}
        phrase={savedCard ? undefined : phrase}
        meaning={savedCard ? undefined : meaning}
        onMeaningChange={savedCard ? undefined : handleMeaningChange}
        onClose={() => {
          requestId.current += 1;
          setPhrase('');
          setSavedCard(null);
        }}
        onToggle={(collectionId, included) => {
          if (!activeCard) {
            return;
          }

          apply((current) => setCardsInCollection(current, collectionId, [activeCard], included));
        }}
        onCreate={(name) => {
          if (!activeCard) {
            return;
          }

          apply((current) =>
            createCollection(current, name, { id: crypto.randomUUID(), cards: [activeCard] })
          );
        }}
      />
    </>
  );
}
