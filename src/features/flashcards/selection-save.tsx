'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
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
  readSaveCard,
  STUDY_LAYER_Z_INDEX,
  STUDY_MENU_EVENT,
  type StudyMenuRequest
} from '@/features/flashcards/study-menu.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
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

export function SelectionSave() {
  const { locale, t } = useTranslation();
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
          ? { x: event.clientX, y: event.clientY, askText: selected }
          : {
              x: event.clientX,
              y: event.clientY,
              askText: host ? cardAskText(host.element) : '',
              card: host?.card
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

  const askChatGpt = () => {
    const text = menu?.askText;

    setMenu(null);

    if (!text) {
      return;
    }

    window.open(chatGptUrl(text, locale), '_blank', 'noopener,noreferrer');
  };

  const activeCard = savedCard ?? clip;

  return (
    <>
      {menu && (
        <Menu
          open
          onClose={() => setMenu(null)}
          anchorReference="anchorPosition"
          anchorPosition={{ top: menu.y, left: menu.x }}
          sx={{ zIndex: STUDY_LAYER_Z_INDEX }}
        >
          <MenuItem onClick={saveFromMenu}>{t('flashcards.contextSave')}</MenuItem>
          <MenuItem disabled={!menu.askText} onClick={askChatGpt}>
            {t('flashcards.contextChatGpt')}
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
