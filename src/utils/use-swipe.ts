import { useRef, type MouseEvent, type PointerEvent } from 'react';

const SWIPE_MIN_PX = 60;
/** A click this soon after a swipe belongs to the swipe. A touch swipe often fires none. */
const SWIPE_CLICK_MS = 500;

type SwipeHandlers = {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
};

/**
 * Horizontal swipe on touch and pen. Spread the returned props on the element;
 * a swipe swallows the click that follows it, so a card does not also flip.
 * Mouse drags are left alone: they select text.
 */
export function useSwipe({ onSwipeLeft, onSwipeRight }: SwipeHandlers) {
  const start = useRef<{ x: number; y: number } | null>(null);
  const swipedAt = useRef(0);

  return {
    onPointerDown: (event: PointerEvent) => {
      start.current = event.pointerType === 'mouse' ? null : { x: event.clientX, y: event.clientY };
    },
    onPointerUp: (event: PointerEvent) => {
      const from = start.current;
      start.current = null;

      if (!from) {
        return;
      }

      const dx = event.clientX - from.x;
      const dy = event.clientY - from.y;

      if (Math.abs(dx) < SWIPE_MIN_PX || Math.abs(dx) < Math.abs(dy) * 1.5) {
        return;
      }

      swipedAt.current = Date.now();

      if (dx < 0) {
        onSwipeLeft?.();
      } else {
        onSwipeRight?.();
      }
    },
    onClickCapture: (event: MouseEvent) => {
      if (Date.now() - swipedAt.current < SWIPE_CLICK_MS) {
        swipedAt.current = 0;
        event.preventDefault();
        event.stopPropagation();
      }
    },
    // Let the page scroll vertically; horizontal moves are ours.
    style: { touchAction: 'pan-y' as const }
  };
}
