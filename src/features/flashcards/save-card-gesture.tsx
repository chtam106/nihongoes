'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
  type ReactNode
} from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import type { ResolvableFlashcard } from '@/constants/flashcards/catalog.ts';
import type { DefaultCollection, FlashcardCardType } from '@/constants/flashcards/collections.ts';
import { FlashcardDefaultsProvider } from '@/features/flashcards/flashcard-defaults.tsx';
import { SaveToCollectionDialog } from '@/features/flashcards/save-to-collection-dialog.tsx';

const LONG_PRESS_MS = 500;
const LONG_PRESS_MOVE_PX = 10;

type SaveTarget = {
  id: string;
  type: FlashcardCardType;
};

type SaveCardContextValue = {
  openSave: (target: SaveTarget) => void;
};

const SaveCardContext = createContext<SaveCardContextValue | null>(null);

type SaveCardProviderProps = {
  children: ReactNode;
};

export function SaveCardProvider({ children }: SaveCardProviderProps) {
  const [target, setTarget] = useState<SaveTarget | null>(null);
  const openSave = useCallback((next: SaveTarget) => {
    setTarget(next);
  }, []);
  const value = useMemo(() => ({ openSave }), [openSave]);

  return (
    <SaveCardContext.Provider value={value}>
      {children}
      <SaveToCollectionDialog
        open={target !== null}
        cardId={target?.id ?? null}
        cardType={target?.type ?? null}
        onClose={() => setTarget(null)}
      />
    </SaveCardContext.Provider>
  );
}

type SaveCardScopeProps = {
  defaults: readonly DefaultCollection[];
  extraCards?: readonly ResolvableFlashcard[];
  children: ReactNode;
};

/** Defaults provider plus the shared save dialog for right-click and long-press. */
export function SaveCardScope({ defaults, extraCards, children }: SaveCardScopeProps) {
  return (
    <FlashcardDefaultsProvider defaults={defaults} extraCards={extraCards}>
      <SaveCardProvider>{children}</SaveCardProvider>
    </FlashcardDefaultsProvider>
  );
}

function clearTextSelection() {
  window.getSelection()?.removeAllRanges();
}

function useSaveCardGesture(cardId: string, cardType: FlashcardCardType) {
  const context = useContext(SaveCardContext);
  const longPressRef = useRef<number | null>(null);
  const pressOriginRef = useRef<{ x: number; y: number } | null>(null);
  const suppressClickUntilRef = useRef(0);
  const selectBlockerRef = useRef<((event: Event) => void) | null>(null);
  const transientDocCleanupRef = useRef<(() => void) | null>(null);

  const stopTransientDocListeners = useCallback(() => {
    transientDocCleanupRef.current?.();
    transientDocCleanupRef.current = null;
  }, []);

  const stopBlockingSelect = useCallback(() => {
    if (!selectBlockerRef.current) {
      return;
    }

    document.removeEventListener('selectstart', selectBlockerRef.current);
    selectBlockerRef.current = null;
  }, []);

  const clearLongPress = useCallback(() => {
    if (longPressRef.current !== null) {
      window.clearTimeout(longPressRef.current);
      longPressRef.current = null;
    }

    pressOriginRef.current = null;
    stopBlockingSelect();
  }, [stopBlockingSelect]);

  useEffect(() => {
    return () => {
      clearLongPress();
      stopTransientDocListeners();
    };
  }, [clearLongPress, stopTransientDocListeners]);

  const openSave = useCallback(() => {
    if (!context) {
      return;
    }

    suppressClickUntilRef.current = Date.now() + LONG_PRESS_MS;
    stopBlockingSelect();
    clearTextSelection();

    const swallowClick = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      document.removeEventListener('click', swallowClick, true);
      clearTextSelection();
    };

    const blockContextMenu = (event: Event) => {
      event.preventDefault();
    };

    document.addEventListener('click', swallowClick, true);
    document.addEventListener('contextmenu', blockContextMenu, true);

    const removeTransient = () => {
      document.removeEventListener('click', swallowClick, true);
      document.removeEventListener('contextmenu', blockContextMenu, true);
    };

    stopTransientDocListeners();
    transientDocCleanupRef.current = removeTransient;
    window.setTimeout(() => {
      removeTransient();

      if (transientDocCleanupRef.current === removeTransient) {
        transientDocCleanupRef.current = null;
      }
    }, LONG_PRESS_MS);

    context.openSave({ id: cardId, type: cardType });
  }, [cardId, cardType, context, stopBlockingSelect, stopTransientDocListeners]);

  const onContextMenuCapture = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (!context) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      clearLongPress();
      openSave();
    },
    [clearLongPress, context, openSave]
  );

  const onPointerDown = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (!context || event.pointerType === 'mouse') {
        return;
      }

      if (event.target instanceof Element && event.target.closest('button')) {
        return;
      }

      clearLongPress();
      pressOriginRef.current = { x: event.clientX, y: event.clientY };
      const blockSelect = (selectEvent: Event) => {
        selectEvent.preventDefault();
      };
      selectBlockerRef.current = blockSelect;
      document.addEventListener('selectstart', blockSelect);
      longPressRef.current = window.setTimeout(() => {
        longPressRef.current = null;
        pressOriginRef.current = null;
        openSave();
      }, LONG_PRESS_MS);
    },
    [clearLongPress, context, openSave]
  );

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      const origin = pressOriginRef.current;

      if (!origin) {
        return;
      }

      const distance = Math.hypot(event.clientX - origin.x, event.clientY - origin.y);

      if (distance > LONG_PRESS_MOVE_PX) {
        clearLongPress();
      }
    },
    [clearLongPress]
  );

  const onClickCapture = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (!context || Date.now() >= suppressClickUntilRef.current) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
    },
    [context]
  );

  return {
    onContextMenuCapture,
    onPointerDown,
    onPointerMove,
    onPointerUp: clearLongPress,
    onPointerCancel: clearLongPress,
    onClickCapture
  };
}

type SaveableCardProps = {
  cardId: string;
  cardType: FlashcardCardType;
  children: ReactNode;
  sx?: SxProps<Theme>;
};

export function SaveableCard({ cardId, cardType, children, sx }: SaveableCardProps) {
  const gesture = useSaveCardGesture(cardId, cardType);
  const sxOverrides = sx == null ? [] : Array.isArray(sx) ? sx : [sx];

  return (
    <Box
      {...gesture}
      sx={[{ WebkitTouchCallout: 'none', touchAction: 'manipulation' }, ...sxOverrides]}
    >
      {children}
    </Box>
  );
}
