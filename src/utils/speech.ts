import {
  useCallback,
  useRef,
  useSyncExternalStore,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent
} from 'react';
import { STORAGE_PREFIX } from '@/constants/site.ts';
import { formatJapaneseDisplay } from '@/utils/japanese-display.ts';
import { stopKanaAudio } from '@/utils/kana-audio.ts';
import { readUserPreferences, useUserPreferences } from '@/utils/user-preferences.ts';

const VOICE_STORAGE_KEY = `${STORAGE_PREFIX}-voice`;
const RATE_STORAGE_KEY = `${STORAGE_PREFIX}-rate`;
const DEFAULT_RATE = 0.9;

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

const subscribeSpeechSupport = () => () => {};

/**
 * Hydration-safe variant of `isSpeechSupported` for use in render. Returns
 * `false` during static pre-rendering and the first client (hydration) render,
 * then the real value on the next render - so speech-dependent UI never causes a
 * server/client HTML mismatch.
 */
export function useSpeechSupported(): boolean {
  return useSyncExternalStore(subscribeSpeechSupport, isSpeechSupported, () => false);
}

/** Browser TTS is available and the user has not disabled it in settings. */
export function useSpeechEnabled(): boolean {
  const supported = useSpeechSupported();
  const [preferences] = useUserPreferences();

  return supported && preferences.allowTts;
}

export function getJapaneseVoices(): SpeechSynthesisVoice[] {
  if (!isSpeechSupported()) {
    return [];
  }

  return window.speechSynthesis
    .getVoices()
    .filter((voice) => voice.lang.toLowerCase().startsWith('ja'))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getPreferredVoiceURI(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.localStorage.getItem(VOICE_STORAGE_KEY);
}

export function setPreferredVoiceURI(voiceURI: string | null): void {
  if (typeof window === 'undefined') {
    return;
  }

  if (voiceURI) {
    window.localStorage.setItem(VOICE_STORAGE_KEY, voiceURI);
  } else {
    window.localStorage.removeItem(VOICE_STORAGE_KEY);
  }
}

export function getSpeechRate(): number {
  if (typeof window === 'undefined') {
    return DEFAULT_RATE;
  }

  const stored = Number(window.localStorage.getItem(RATE_STORAGE_KEY));

  return Number.isFinite(stored) && stored > 0 ? stored : DEFAULT_RATE;
}

export function setSpeechRate(rate: number): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(RATE_STORAGE_KEY, String(rate));
}

export function getDefaultJapaneseVoice(
  voices: SpeechSynthesisVoice[] = getJapaneseVoices()
): SpeechSynthesisVoice | undefined {
  // On macOS the "O-ren" voice sounds the most natural, so prefer it by default.
  const oren = voices.find((voice) => voice.name.toLowerCase().includes('o-ren'));

  return oren ?? voices[0];
}

function resolveVoice(): SpeechSynthesisVoice | undefined {
  const voices = getJapaneseVoices();
  const preferred = getPreferredVoiceURI();

  return (
    (preferred ? voices.find((voice) => voice.voiceURI === preferred) : undefined) ??
    getDefaultJapaneseVoice(voices)
  );
}

export function speakJapanese(text: string, rate = getSpeechRate()): void {
  if (!isSpeechSupported() || !readUserPreferences().allowTts) {
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(formatJapaneseDisplay(text));
  utterance.lang = 'ja-JP';
  utterance.rate = rate;

  const voice = resolveVoice();

  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.speak(utterance);
}

export function subscribeVoices(callback: () => void): () => void {
  if (!isSpeechSupported()) {
    return () => {};
  }

  window.speechSynthesis.addEventListener('voiceschanged', callback);

  return () => {
    window.speechSynthesis.removeEventListener('voiceschanged', callback);
  };
}

export function cancelSpeech(): void {
  stopKanaAudio();

  if (isSpeechSupported()) {
    window.speechSynthesis.cancel();
  }
}

const SPEECH_DRAG_THRESHOLD_PX = 5;

type PointerOrigin = { x: number; y: number };

export function hasActiveTextSelection(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const selection = window.getSelection();

  return Boolean(selection && selection.toString().length > 0);
}

function isSpeechDrag(event: MouseEvent, origin: PointerOrigin | null): boolean {
  if (!origin) {
    return false;
  }

  const dx = event.clientX - origin.x;
  const dy = event.clientY - origin.y;

  return Math.hypot(dx, dy) > SPEECH_DRAG_THRESHOLD_PX;
}

/** Ignore clicks that follow text selection or a drag across the surface. */
export function shouldSpeakOnPointerClick(
  event: MouseEvent,
  origin: PointerOrigin | null
): boolean {
  if (hasActiveTextSelection() || isSpeechDrag(event, origin)) {
    return false;
  }

  return true;
}

/** Wire pointer-down + click so speech skips drag-select gestures. */
export function useSpeechClickHandler(onSpeak: () => void) {
  const originRef = useRef<PointerOrigin | null>(null);

  const onPointerDown = useCallback((event: ReactPointerEvent) => {
    originRef.current = { x: event.clientX, y: event.clientY };
  }, []);

  const onClick = useCallback(
    (event: ReactMouseEvent) => {
      const origin = originRef.current;
      originRef.current = null;

      if (!shouldSpeakOnPointerClick(event.nativeEvent, origin)) {
        return;
      }

      onSpeak();
    },
    [onSpeak]
  );

  return { onPointerDown, onClick };
}
