import { DAKUTEN_MARK, HANDAKUTEN_MARK } from '@/constants/kana-terminology.ts';
import { STORAGE_PREFIX } from '@/constants/site.ts';

export type Locale = 'en' | 'vi';

export type TranslationParams = Record<string, string | number>;

const en: TranslationTree = {
  common: {
    playAudio: 'Play pronunciation',
    back: 'Back',
    scrollTop: 'Back to top'
  },
  errorBoundary: {
    title: 'Oops, something went wrong',
    body: 'An unexpected error occurred. Please reload the page to continue.',
    reload: 'Reload page',
    showDetails: 'Show error details',
    hideDetails: 'Hide error details',
    detailsTitle: 'Error details',
    copy: 'Copy',
    copied: 'Copied',
    close: 'Close'
  },
  audio: {
    settings: 'Audio settings',
    voice: 'Voice',
    auto: 'Automatic',
    speed: 'Speed',
    test: 'Test voice',
    noVoices: 'No Japanese voice was found in your browser.'
  },
  seo: {
    home: {
      description:
        'Learn the Japanese alphabet - hiragana and katakana - with full charts, native audio, and plenty of exercises to help you memorize every Japanese character easily.'
    },
    notFound: {
      title: 'Page Not Found (404)',
      description: 'The page you requested could not be found.'
    },
    kanji: {
      title: 'Learn Jōyō Kanji Step by Step',
      description:
        'Learn the Jōyō kanji in bite-sized lessons of 10 characters each, with meanings, on and kun readings, example words, and native audio.'
    },
    alphabet: {
      title: 'Learn the Japanese Alphabet - Hiragana and Katakana',
      description:
        'Learn the Japanese alphabet - hiragana and katakana - with full charts, native audio, and plenty of exercises to help you memorize every Japanese character easily.',
      hiragana: {
        title: 'Hiragana Chart & Practice (ひらがな)',
        description:
          'Learn hiragana with an interactive chart covering seion, tenten, maru, and yoon. Tap any character to hear native audio.'
      },
      katakana: {
        title: 'Katakana Chart & Practice (カタカナ)',
        description:
          'Master katakana with a full interactive chart, native pronunciation, and practice exercises for loanwords and emphasis.'
      },
      combined: {
        title: 'Hiragana + Katakana Combined Chart',
        description:
          'A single gojuon chart that pairs hiragana and katakana in every cell with romaji and native audio - compare both syllabaries side by side.'
      },
      exercise: {
        title: 'Japanese Kana Exercises & Quizzes',
        description:
          'Practice hiragana and katakana with romaji, character, listening, and script-matching quizzes.',
        romaji: {
          title: 'Romaji Quiz - Hiragana & Katakana Practice',
          description:
            'See a kana character and choose the correct romaji. Practice hiragana and katakana reading step by step.'
        },
        character: {
          title: 'Choose the Kana Character Quiz',
          description:
            'See romaji and pick the matching hiragana or katakana character. Build kana recognition with instant feedback.'
        },
        listen: {
          title: 'Listen & Choose Kana Quiz',
          description:
            'Train your ear with native audio and pick the correct hiragana or katakana character.'
        },
        scriptPair: {
          title: 'Hiragana ↔ Katakana Matching Quiz',
          description:
            'Match hiragana and katakana pairs to strengthen both Japanese syllabaries at once.'
        },
        writing: {
          title: 'Kana Writing Practice with Stroke Order Animation',
          description:
            'Pick a basic hiragana or katakana character, practice writing by hand, and follow the stroke order animation guide.'
        },
        sentence: {
          title: 'Kana Sentence Romaji Transcription Practice',
          description:
            'Read full hiragana, katakana, or mixed kana sentences and type their romaji to build fluent reading.'
        }
      }
    }
  },
  language: {
    label: 'Language',
    en: 'English',
    vi: 'Tiếng Việt'
  },
  nav: {
    home: 'Home',
    alphabet: 'Alphabet',
    hiragana: 'Hiragana',
    katakana: 'Katakana',
    combined: 'Combined chart',
    exercise: 'Exercise',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNavigation: 'Main navigation',
    collapse: 'Collapse {{label}}',
    expand: 'Expand {{label}}'
  },
  home: {
    title: 'Learn Japanese with Nihongoes',
    intro:
      'Read and practice kana step by step, then keep going with a structured JLPT N5 course - interactive charts, audio, quizzes, and writing practice.',
    hiraganaDescription: 'Learn the basic syllabary used for native Japanese words.',
    katakanaDescription: 'Learn the script used for loanwords and emphasis.',
    combinedDescription: 'Compare hiragana and katakana side by side in one chart.',
    exerciseDescription: 'Quiz yourself on romaji and characters with audio feedback.',
    alphabetSection: 'Alphabet & practice',
    coursesSection: 'Courses'
  },
  notFound: {
    title: 'Page not found',
    body: "The page you are looking for does not exist or may have been moved. Let's get you back on track.",
    backHome: 'Back to home'
  },
  alphabet: {
    title: 'Alphabet',
    subtitle: 'Choose a writing system to study.',
    intro:
      'Written Japanese combines three scripts. Hiragana and katakana are phonetic syllabaries - each character is exactly one sound - while kanji are meaning-based characters borrowed from Chinese. Learn the two kana sets first: together they cover every sound in the language and are the foundation for everything else.',
    systemsHeading: 'The Japanese writing system',
    systemHiragana:
      'Hiragana (ひらがな) - the rounded syllabary of 46 basic sounds, used for native words, grammar particles, and word endings.',
    systemKatakana:
      'Katakana (カタカナ) - the same sounds in an angular form, used for loanwords, foreign names, and emphasis.',
    systemKanji:
      'Kanji (漢字) - meaning-based characters borrowed from Chinese; you pick these up gradually through the JLPT courses.',
    hiraganaDescription: 'ひらがな - basic Japanese syllabary',
    katakanaDescription: 'カタカナ - used for foreign words and emphasis',
    combinedDescription: 'See hiragana and katakana side by side in one chart',
    exerciseDescription: 'Practice hiragana and katakana',
    hiraganaPageDescription:
      'Hiragana is the foundation of written Japanese. Its 46 basic sounds (seion) spell grammar particles, verb and adjective endings, and native words. Voicing marks (tenten and maru) and the small ゃ/ゅ/ょ of yoon extend the same set to cover every Japanese sound.',
    katakanaPageDescription:
      'Katakana shares the exact same sounds as hiragana but uses sharper, more angular strokes. It is reserved for loanwords, foreign names, onomatopoeia, scientific terms, and words written for emphasis. Learning it alongside hiragana lets you read signs, menus, and product names.',
    combinedPageDescription:
      'Both kana sets share the same sounds, so this chart pairs them in every cell: hiragana on the left, katakana on the right. Use it to compare shapes side by side and reinforce both syllabaries at once.',
    tapHint: 'Tap a character to hear its pronunciation.'
  },
  chart: {
    seion: 'Seion',
    voiced: 'Tenten / Maru ({{dakuten}} / {{handakuten}})',
    voicedDescription:
      'Add the tenten mark ({{dakuten}}) to voice a sound: k→g, s→z, t→d, h→b. The maru mark ({{handakuten}}) turns h→p. e.g. {{base}} ({{baseRomaji}}) + {{dakuten}} = {{voiced}} ({{voicedRomaji}}).',
    yoon: 'Yoon',
    yoonDescription:
      'Combined sounds with small {{small1}}, {{small2}}, {{small3}} - e.g. {{base}} + {{small1}} = {{result}} ({{romaji}}).',
    chouon: 'Long vowels (Chouon)',
    chouonHiragana:
      'A long vowel holds the vowel for two beats. In hiragana, add the matching vowel: あ->ああ, い->いい, う->うう. The え-row usually adds い and the お-row usually adds う (so えい sounds like ē and おう like ō).',
    chouonKatakana:
      'A long vowel holds the vowel for two beats. In katakana, it is written with the long-vowel mark ー, whatever the vowel is.',
    chouonColVowel: 'Vowel',
    chouonColLong: 'Long vowel',
    chouonColExample: 'Example',
    playAudio: 'Play {{char}}, {{romaji}}'
  },
  exercise: {
    title: 'Exercise',
    hubSubtitle: 'Choose an exercise type.',
    romajiDescription: 'See the kana and type its romaji.',
    characterDescription: 'Choose the matching kana from romaji, or the romaji from kana.',
    characterTabChooseKana: 'Choose kana',
    characterTabChooseRomaji: 'Choose romaji',
    listenDescription: 'Listen and choose the matching kana.',
    scriptPairDescription: 'Match hiragana and katakana pairs.',
    writing: 'Writing practice',
    writingDescription:
      'Practice writing kana by hand - browse by row, or write a random character from its romaji.',
    writingRow: 'Row',
    writingCanvasAria: 'Writing canvas',
    writingClear: 'Clear writing',
    writingUndo: 'Undo last stroke',
    writingPreviousRow: 'Previous row',
    writingNextRow: 'Next row',
    writingMode: 'Mode',
    writingModeRow: 'Trace kana',
    writingModeRomaji: 'From romaji',
    writingRomajiPrompt: 'Write this kana',
    writingReveal: 'Show answer',
    writingHideAnswer: 'Hide answer',
    writingNext: 'Next character',
    strokeOrderTitle: 'Stroke order',
    strokeOrderPrevious: 'Previous character',
    strokeOrderNext: 'Next character',
    strokeOrderReplay: 'Tap the character to replay the stroke order.',
    strokeOrderUnavailable: 'Stroke order is not available for this character yet.',
    strokeOrderNote:
      'Tap a character to play its stroke order. Strokes use a handwriting style, so they may not match the printed font shown on screen.',
    sentence: 'Sentence transcription',
    sentenceTitle: 'Read the sentence, type the romaji',
    sentenceDescription: 'Read a kana sentence and type its romaji.',
    sentenceHint1: 'Write long vowels as two vowels in a row (no macron needed).',
    sentenceHint2:
      'Particles are read by their sound (は=wa, へ=e, を=o); typing the literal spelling works too.',
    sentenceHint3: 'You can type with or without spaces between words.',
    sentenceType: 'Sentence type',
    sentenceTypeHiragana: 'Hiragana',
    sentenceTypeKatakana: 'Katakana',
    sentenceTypeMixed: 'Mixed',
    sentenceProgress: 'Sentence {{current}} / {{total}}',
    sentenceScore: 'Correct: {{correct}} / {{total}}',
    sentencePrompt: 'Type the romaji for this sentence',
    sentenceInputPlaceholder: 'Type romaji',
    showAnswer: 'Show answer',
    hideAnswer: 'Hide answer',
    sentenceComplete: 'Exercise complete!',
    sentenceRestart: 'Try again',
    chooseCharacter: 'Recognize kana & romaji',
    listenPickShort: 'Listen & choose',
    script: 'Script',
    scriptAll: 'All',
    scriptKana: 'kana',
    scope: 'Scope',
    rowFrom: 'From row',
    rowTo: 'To row',
    allRows: 'All rows',
    guessRomaji: 'Type the romaji',
    romajiInputPlaceholder: 'Type romaji',
    check: 'Check',
    scriptPair: 'Hiragana ↔ Katakana',
    pairDirection: 'Direction',
    pairHiraToKata: 'あ → ア',
    pairKataToHira: 'ア → あ',
    pairHiraToKataLabel: 'Hiragana to Katakana',
    pairKataToHiraLabel: 'Katakana to Hiragana',
    pairMixed: 'Mixed',
    questionListen: 'Which {{script}} character do you hear?',
    questionScriptPairHiraToKata: 'What is the matching katakana?',
    questionScriptPairKataToHira: 'What is the matching hiragana?',
    replayAudio: 'Replay audio',
    questionRomaji: 'What is the romaji for this {{script}}?',
    questionCharacter: 'What is the {{script}} character?',
    scopeAll: 'All',
    scopeSeion: 'Seion',
    scopeDakuten: 'Tenten',
    scopeHandakuten: 'Maru',
    scopeYoon: 'Yoon',
    scopeLegend:
      'Seion = the 46 basic kana; Tenten ({{dakuten}}) and Maru ({{handakuten}}) = voiced-sound marks; Yoon = small ゃ/ゅ/ょ blends.',
    groupSeionRows: 'Seion rows',
    groupYoonRows: 'Yoon rows',
    rowDefault: 'Row',
    yoonRowDefault: 'Yoon row',
    rowToLast: 'To last row',
    rowLabel: '{{name}} row ({{char}})'
  },
  kanji: {
    overviewTitle: 'Kanji',
    overviewSubtitle: 'Choose a grade to start studying.',
    overviewIntro:
      "Study kanji step by step: pick a grade below and work through it lesson by lesson, with meanings, on'yomi and kun'yomi readings, example words, and writing practice.",
    collectionsHeading: 'Jōyō kanji by grade',
    aboutHeading: 'What is kanji?',
    aboutWhat:
      'Kanji (漢字) are meaning-based characters adapted from Chinese. Each one carries a meaning and one or more readings, and they are written alongside the hiragana and katakana syllabaries.',
    aboutCount:
      'There are tens of thousands of kanji in total, but only about 2,136 Jōyō (everyday-use) kanji are needed to read most modern Japanese - newspapers, books, and signs. Around 1,000 of these are taught in elementary school.',
    aboutJlpt:
      'For the JLPT you need roughly 100 kanji at N5, 300 at N4, 650 at N3, 1,000 at N2, and 2,000+ at N1.',
    tipsHeading: 'How to learn kanji',
    tipsContext:
      'Learn kanji through vocabulary - real words in context - rather than memorizing characters in isolation.',
    tipsRadicals:
      'Break each kanji into its radicals (component parts); it is far easier to remember 休 as "person 亻 + tree 木" than as separate strokes.',
    tipsReview:
      'Practice both directions - recognizing meaning and recalling the kanji - and review regularly so readings stick.',
    lessonsHeading: 'Lessons',
    lessonLabel: 'Lesson {{number}}',
    lessonCount: '{{count}} lessons',
    kanjiCount: '{{count}} kanji',
    detailHint: 'Tap an example word to hear it pronounced.',
    meaningLabel: 'Meaning',
    onReading: "On'yomi",
    kunReading: "Kun'yomi",
    readingsTitle: "On'yomi & Kun'yomi",
    onReadingDesc:
      "On'yomi (音読み) is the reading borrowed from Chinese, usually used in compound words, e.g. 三月 (さんがつ, March).",
    kunReadingDesc:
      "Kun'yomi (訓読み) is the native Japanese reading, used when the kanji stands alone or takes kana endings, e.g. 三つ (みっつ, three items).",
    examples: 'Example words',
    mnemonic: 'Mnemonic',
    note: 'Note',
    kanjiHeading: 'Kanji {{number}}',
    practiceHeading: 'Practice',
    practiceSubtitle: "Test yourself on this lesson's kanji.",
    quizTitle: 'Meaning quiz',
    quizMeaning: 'Kanji -> meaning',
    quizCharacter: 'Meaning -> kanji',
    quizMeaningPrompt: 'What does this kanji mean?',
    quizCharacterPrompt: 'Which kanji has this meaning?',
    writing: 'Write kanji',
    writingKanji: 'Kanji',
    reviewLesson: 'Review lesson',
    radicals: 'Radicals',
    radicalsTitle: 'Kanji radicals (部首)',
    radicalsSubtitle: 'The 214 building blocks used to form kanji.',
    radicalsIntro:
      'Radicals (bushu) are the component parts that make up kanji. Most hint at a meaning - e.g. 氵(water) appears in 海 (sea) and 泳 (swim). Learning them makes kanji easier to break down, remember, and look up. They are grouped below by stroke count.',
    radicalsStrokesGroup: '{{count}} strokes',
    radicalsCount: '{{count}} radicals',
    radicalsLegendHeading: 'How to read a radical card',
    radicalsLegendChar: 'Large character - the radical in its standalone form.',
    radicalsLegendVariant:
      'Smaller character(s) below - variant (combining) forms used inside other kanji, e.g. 人 -> 亻, 水 -> 氵.',
    radicalsLegendMeaning: 'Bold line - the English meaning of the radical.',
    radicalsLegendName: 'Grey line - the Japanese name of the radical (in romaji).',
    notFoundTitle: 'Lesson not found',
    notFoundBody: 'This kanji lesson does not exist. Go back to the kanji overview.'
  },
  course: {
    lessonsHeading: 'Lessons',
    phrasesHeading: 'Useful phrases',
    referenceHeading: 'Reference vocabulary',
    referenceSubtitle:
      'Extra words related to this lesson, also included in the vocabulary practice.',
    lessonLabel: 'Lesson {{number}}',
    focusLabel: 'In this lesson',
    audioHint: 'Tap any vocabulary word or sentence to hear it pronounced.',
    vocabulary: 'Vocabulary',
    grammar: 'Grammar',
    examples: 'Examples',
    answers: 'Answers',
    previousLesson: 'Previous',
    nextLesson: 'Next',
    counts: '{{vocab}} words · {{grammar}} grammar points',
    notFoundTitle: 'Lesson not found',
    notFoundBody: 'This lesson does not exist. Go back to the course overview.',
    practiceHeading: 'Practice',
    exerciseSubtitle:
      "Test yourself on this lesson's vocabulary, grammar, reading, listening, and kanji writing.",
    startExercise: 'Vocabulary',
    startGrammar: 'Grammar',
    grammarClozePrompt: 'Fill in the blank',
    vocabWordToMeaning: 'Word -> meaning',
    vocabMeaningToWord: 'Meaning -> word',
    vocabPromptMeaning: 'What does this word mean?',
    vocabPromptWord: 'Which word means',
    vocabScript: 'Script',
    vocabScriptKana: 'Kana',
    vocabScriptKanji: 'Kanji',
    vocabScriptAll: 'All',
    listening: 'Listening',
    startListening: 'Listening',
    listenPrompt: 'What did you hear?',
    play: 'Play audio',
    replay: 'Replay',
    speechUnsupported: 'Your browser does not support audio playback for this exercise.',
    reading: 'Reading',
    startReading: 'Reading',
    writing: 'Kanji writing',
    startWriting: 'Kanji writing',
    writingToggleGuide: 'Show or hide the tracing guide',
    writingWord: 'Word',
    writingPrevWord: 'Previous',
    writingNextWord: 'Next',
    comprehension: 'Comprehension question',
    showTranslation: 'Show translation',
    hideTranslation: 'Hide translation',
    showPhonetics: 'Show phonetics',
    hidePhonetics: 'Hide phonetics',
    questionProgress: 'Question {{current}} of {{total}}',
    chooseAnswer: 'Choose the correct answer',
    typeAnswer: 'Type the missing word',
    inputPlaceholder: 'Your answer (kana)',
    check: 'Check',
    answerWas: 'Answer: {{answer}}',
    correct: 'Correct',
    incorrect: 'Incorrect',
    next: 'Next',
    seeResults: 'See results',
    resultTitle: 'Practice complete!',
    resultGreat: 'Excellent work! You know this lesson well.',
    resultGood: 'Nice progress - review the misses and try again.',
    resultKeepGoing: 'Keep practicing - revisit the lesson and try again.',
    retry: 'Try again',
    reviewLesson: 'Review lesson'
  }
} satisfies TranslationTree;

type TranslationLeaf = string;
type TranslationNode = { [key: string]: TranslationLeaf | TranslationNode };
export type TranslationTree = TranslationNode;

export const enTranslations: TranslationTree = en;

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_STORAGE_KEY = `${STORAGE_PREFIX}-locale`;

export function getChartSectionLabels(t: (key: string, params?: TranslationParams) => string) {
  return {
    seion: t('chart.seion'),
    voiced: t('chart.voiced', { dakuten: DAKUTEN_MARK, handakuten: HANDAKUTEN_MARK }),
    yoon: t('chart.yoon')
  };
}
