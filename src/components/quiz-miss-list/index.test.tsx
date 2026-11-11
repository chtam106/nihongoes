import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import type { ReactElement } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { enMessages } from '@/i18n/messages/en/index.ts';
import { QuizMissList, type QuizMiss } from '@/components/quiz-miss-list';
import { FlashcardDefaultsProvider } from '@/features/flashcards/flashcard-defaults.tsx';
import { SaveCardProvider } from '@/features/flashcards/save-card-gesture.tsx';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn()
  }),
  useParams: () => ({}),
  useSearchParams: () => new URLSearchParams(),
  redirect: vi.fn(),
  permanentRedirect: vi.fn()
}));

function renderWithI18n(ui: ReactElement) {
  return render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      {ui}
    </NextIntlClientProvider>
  );
}

const missedWord: QuizMiss = {
  id: '0',
  prompt: [{ text: '水', japanese: true, ruby: [{ base: '水', reading: 'みず' }] }],
  answer: { text: 'water' }
};

describe('QuizMissList', () => {
  it('lists the missed prompt and the correct answer', () => {
    renderWithI18n(<QuizMissList misses={[missedWord]} />);

    expect(screen.getByRole('heading', { name: 'Missed questions' })).toBeInTheDocument();
    expect(screen.getByText('水')).toBeInTheDocument();
    expect(screen.getByText(/Correct answer:/)).toBeInTheDocument();
    expect(screen.getByText('water')).toBeInTheDocument();
    expect(screen.queryByText(/You chose:/)).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Play pronunciation' })).not.toBeInTheDocument();
  });

  it('puts one save icon before the missed word', () => {
    const missed: QuizMiss = {
      ...missedWord,
      card: { id: '1:0', type: 'vocab' }
    };

    renderWithI18n(
      <FlashcardDefaultsProvider defaults={[]}>
        <SaveCardProvider>
          <QuizMissList misses={[missed]} />
        </SaveCardProvider>
      </FlashcardDefaultsProvider>
    );

    expect(screen.getByRole('heading', { name: 'Missed questions' })).toBeInTheDocument();
    const save = screen.getByRole('button', { name: 'Add to flashcards' });
    const prompt = screen.getByText('水');

    expect(save.compareDocumentPosition(prompt) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(screen.queryByRole('button', { name: 'Add all to flashcards' })).not.toBeInTheDocument();
  });

  it('offers add all only when more than one question was missed', () => {
    const second: QuizMiss = {
      id: '1',
      prompt: [{ text: '火', japanese: true }],
      answer: { text: 'fire' },
      card: { id: '1:1', type: 'vocab' }
    };

    renderWithI18n(
      <FlashcardDefaultsProvider defaults={[]}>
        <SaveCardProvider>
          <QuizMissList misses={[{ ...missedWord, card: { id: '1:0', type: 'vocab' } }, second]} />
        </SaveCardProvider>
      </FlashcardDefaultsProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Add all to flashcards' }));
    expect(screen.getByRole('dialog', { name: 'Save to...' })).toBeInTheDocument();
  });

  it('puts the save icon before the kanji when the prompt is a meaning', () => {
    const missed: QuizMiss = {
      id: '1',
      prompt: [{ text: 'water' }],
      answer: { text: '水', japanese: true },
      card: { id: 'kanji:grade-1:水', type: 'kanji' }
    };

    renderWithI18n(
      <FlashcardDefaultsProvider defaults={[]}>
        <SaveCardProvider>
          <QuizMissList misses={[missed]} />
        </SaveCardProvider>
      </FlashcardDefaultsProvider>
    );

    const save = screen.getByRole('button', { name: 'Add to flashcards' });
    const kanji = screen.getByText('水');
    const label = screen.getByText(/Correct answer:/);

    expect(label.compareDocumentPosition(save) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(save.compareDocumentPosition(kanji) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it('renders nothing when every question was correct on the first try', () => {
    const { container } = renderWithI18n(<QuizMissList misses={[]} />);

    expect(container).toBeEmptyDOMElement();
  });
});
