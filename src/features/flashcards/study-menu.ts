import { clipPhrase, type FlashcardCardType } from '@/constants/flashcards/collections.ts';
import type { Locale } from '@/types/i18n.ts';

/** Above the Google Translate selection bubble, which uses the maximum z-index. */
export const STUDY_LAYER_Z_INDEX = 2147483647;

export const STUDY_MENU_EVENT = 'nihongoes-study-menu';

export type StudyMenuCard = {
  id: string;
  type: FlashcardCardType;
};

export type StudyMenuRequest = {
  x: number;
  y: number;
  askText: string;
  card?: StudyMenuCard;
};

export function openStudyMenu(request: StudyMenuRequest) {
  window.dispatchEvent(new CustomEvent<StudyMenuRequest>(STUDY_MENU_EVENT, { detail: request }));
}

const CARD_TYPES = new Set<FlashcardCardType>(['vocab', 'phrase', 'kana', 'radical', 'kanji']);

export function readSaveCard(element: Element | null): {
  element: HTMLElement;
  card: StudyMenuCard;
} | null {
  const host = element?.closest<HTMLElement>('[data-save-card-id]');

  if (!host) {
    return null;
  }

  const id = host.dataset.saveCardId ?? '';
  const type = host.dataset.saveCardType ?? '';

  if (!id || !CARD_TYPES.has(type as FlashcardCardType)) {
    return null;
  }

  return { element: host, card: { id, type: type as FlashcardCardType } };
}

/** Japanese surface for ChatGPT. Prefer an authored string, then the first Japanese node. */
export function cardAskText(element: HTMLElement) {
  const marked = element.dataset.askText;

  if (marked?.trim()) {
    return clipPhrase(marked);
  }

  const japanese = element.querySelector('[lang="ja"]');

  if (japanese?.textContent?.trim()) {
    return clipPhrase(japanese.textContent);
  }

  return clipPhrase(element.innerText);
}

export function chatGptUrl(text: string, locale: Locale) {
  const prompt =
    locale === 'vi'
      ? `Giải thích nghĩa và cách dùng của từ hoặc câu tiếng Nhật này: ${text}\nCho nghĩa, từ loại hoặc cấu trúc, vài ví dụ, và lưu ý khi dùng.`
      : `Explain the meaning and usage of this Japanese word or sentence: ${text}\nInclude the meaning, part of speech or structure, a few examples, and usage notes.`;

  return `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
}
