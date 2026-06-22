import { DAKUTEN_MARK, HANDAKUTEN_MARK } from '@/constants/kana-terminology.ts'

export type Locale = 'en' | 'vi'

export type TranslationParams = Record<string, string | number>

const en: TranslationTree = {
  app: {
    title: 'Learn Japanese',
  },
  language: {
    label: 'Language',
    en: 'English',
    vi: 'Tiếng Việt',
  },
  nav: {
    home: 'Home',
    alphabet: 'Alphabet',
    hiragana: 'Hiragana',
    katakana: 'Katakana',
    exercise: 'Exercise',
    openMenu: 'Open menu',
    collapse: 'Collapse {{label}}',
    expand: 'Expand {{label}}',
  },
  home: {
    subtitle: 'Start with the alphabet - hiragana and katakana.',
    intro:
      'This app helps you read and practice kana step by step: browse interactive charts, listen to native pronunciation, and test yourself with exercises.',
    startHiragana: 'Start with Hiragana',
    jumpExercise: 'Jump to Exercise',
    hiraganaDescription: 'Learn the basic syllabary used for native Japanese words.',
    katakanaDescription: 'Learn the script used for loanwords and emphasis.',
    exerciseDescription: 'Quiz yourself on romaji and characters with audio feedback.',
    featuresTitle: 'What you can do here',
    featureCharts:
      'View seion, dakuten ({{dakuten}}), handakuten ({{handakuten}}), and yoon charts for hiragana and katakana.',
    featureAudio: 'Tap any character to hear NHK-style audio pronunciation.',
    featureQuiz:
      'Practice with quizzes - guess romaji or guess the character, by row or scope.',
  },
  alphabet: {
    title: 'Alphabet',
    subtitle: 'Choose a writing system to study.',
    hiraganaDescription: 'ひらがな - basic Japanese syllabary',
    katakanaDescription: 'カタカナ - used for foreign words and emphasis',
    exerciseDescription: 'Practice hiragana and katakana',
    hiraganaPageDescription: 'Learn the hiragana alphabet (ひらがな).',
    katakanaPageDescription: 'Learn the katakana alphabet (カタカナ).',
  },
  chart: {
    seion: 'Seion',
    voiced: 'Dakuten / Handakuten ({{dakuten}} / {{handakuten}})',
    yoon: 'Yoon',
    yoonDescription:
      'Combined sounds with small ゃ, ゅ, ょ - e.g. き + ゃ = きゃ (kya).',
    playAudio: 'Play {{char}}, {{romaji}}',
  },
  exercise: {
    title: 'Exercise',
    subtitle: 'Practice the Japanese alphabet.',
    script: 'Script',
    mode: 'Mode',
    scope: 'Scope',
    row: 'Row',
    rowPlaceholder: 'Optional - pick a specific row',
    guessRomaji: 'Guess romaji',
    guessCharacter: 'Guess {{script}}',
    questionRomaji: 'What is the romaji for this {{script}}?',
    questionCharacter: 'What is the {{script}} character?',
    scopeAll: 'All characters',
    scopeSeion: 'All seion',
    scopeDakuten: 'All dakuten ({{mark}})',
    scopeHandakuten: 'All handakuten ({{mark}})',
    scopeYoon: 'All yoon',
    groupSeionRows: 'Seion rows',
    groupYoonRows: 'Yoon rows',
    rowDefault: 'Row',
    yoonRowDefault: 'Yoon row',
    rowLabel: '{{name}} row ({{char}})',
    voicedRowLabel: '{{name}} row - {{mark}} ({{char}})',
  },
} satisfies TranslationTree

const vi: TranslationTree = {
  app: {
    title: 'Học tiếng Nhật',
  },
  language: {
    label: 'Ngôn ngữ',
    en: 'English',
    vi: 'Tiếng Việt',
  },
  nav: {
    home: 'Trang chủ',
    alphabet: 'Bảng chữ cái',
    hiragana: 'Hiragana',
    katakana: 'Katakana',
    exercise: 'Luyện tập',
    openMenu: 'Mở menu',
    collapse: 'Thu gọn {{label}}',
    expand: 'Mở rộng {{label}}',
  },
  home: {
    subtitle: 'Bắt đầu với bảng chữ cái - hiragana và katakana.',
    intro:
      'Ứng dụng giúp bạn đọc và luyện kana từng bước: xem bảng tương tác, nghe phát âm, và tự kiểm tra qua bài tập.',
    startHiragana: 'Bắt đầu với Hiragana',
    jumpExercise: 'Vào Luyện tập',
    hiraganaDescription: 'Học bảng âm cơ bản dùng cho từ tiếng Nhật thuần.',
    katakanaDescription: 'Học bảng chữ dùng cho từ mượn và nhấn mạnh.',
    exerciseDescription: 'Tự kiểm tra romaji và chữ kana, có phản hồi âm thanh.',
    featuresTitle: 'Bạn có thể làm gì ở đây',
    featureCharts:
      'Xem bảng seion, dakuten ({{dakuten}}), handakuten ({{handakuten}}) và yoon cho hiragana và katakana.',
    featureAudio: 'Chạm vào chữ để nghe phát âm kiểu NHK.',
    featureQuiz:
      'Luyện tập qua câu hỏi - đoán romaji hoặc đoán chữ, theo hàng hoặc phạm vi.',
  },
  alphabet: {
    title: 'Bảng chữ cái',
    subtitle: 'Chọn bảng chữ để học.',
    hiraganaDescription: 'ひらがな - bảng âm tiếng Nhật cơ bản',
    katakanaDescription: 'カタカナ - dùng cho từ ngoại lai và nhấn mạnh',
    exerciseDescription: 'Luyện hiragana và katakana',
    hiraganaPageDescription: 'Học bảng chữ hiragana (ひらがな).',
    katakanaPageDescription: 'Học bảng chữ katakana (カタカナ).',
  },
  chart: {
    seion: 'Seion',
    voiced: 'Dakuten / Handakuten ({{dakuten}} / {{handakuten}})',
    yoon: 'Yoon',
    yoonDescription:
      'Âm ghép với ゃ, ゅ, ょ nhỏ - ví dụ: き + ゃ = きゃ (kya).',
    playAudio: 'Phát {{char}}, {{romaji}}',
  },
  exercise: {
    title: 'Luyện tập',
    subtitle: 'Luyện bảng chữ cái tiếng Nhật.',
    script: 'Bảng chữ',
    mode: 'Chế độ',
    scope: 'Phạm vi',
    row: 'Hàng',
    rowPlaceholder: 'Tùy chọn - chọn một hàng cụ thể',
    guessRomaji: 'Đoán romaji',
    guessCharacter: 'Đoán {{script}}',
    questionRomaji: 'Romaji của {{script}} này là gì?',
    questionCharacter: 'Chữ {{script}} này là gì?',
    scopeAll: 'Tất cả chữ',
    scopeSeion: 'Tất cả seion',
    scopeDakuten: 'Tất cả dakuten ({{mark}})',
    scopeHandakuten: 'Tất cả handakuten ({{mark}})',
    scopeYoon: 'Tất cả yoon',
    groupSeionRows: 'Hàng seion',
    groupYoonRows: 'Hàng yoon',
    rowDefault: 'Hàng',
    yoonRowDefault: 'Hàng yoon',
    rowLabel: 'Hàng {{name}} ({{char}})',
    voicedRowLabel: 'Hàng {{name}} - {{mark}} ({{char}})',
  },
}

type TranslationLeaf = string
type TranslationNode = { [key: string]: TranslationLeaf | TranslationNode }
export type TranslationTree = TranslationNode

export const translations: Record<Locale, TranslationTree> = { en, vi }

export const DEFAULT_LOCALE: Locale = 'en'

export const LOCALE_STORAGE_KEY = 'learn-japanese-locale'

export function getChartSectionLabels(t: (key: string, params?: TranslationParams) => string) {
  return {
    seion: t('chart.seion'),
    voiced: t('chart.voiced', { dakuten: DAKUTEN_MARK, handakuten: HANDAKUTEN_MARK }),
    yoon: t('chart.yoon'),
  }
}
