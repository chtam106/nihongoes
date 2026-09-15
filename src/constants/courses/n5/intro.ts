import type { Bilingual } from '@/constants/courses/types.ts';
import type { ReferenceArticle } from '@/constants/courses/n5/reference/types.ts';

export type N5IntroContent = {
  title: Bilingual;
  intro: Bilingual;
  articles: ReferenceArticle[];
};

/** Minna grammar book pp. 21-26 (basics + classroom/greetings; pronunciation detail omitted). */
const n5IntroArticles: ReferenceArticle[] = [
  {
    id: 'guide-basics',
    title: { en: 'How Japanese works', vi: 'Đặc điểm chung của tiếng Nhật' },
    intro: {
      en: 'Core grammar habits that show up in every Minna lesson.',
      vi: 'Những điểm ngữ pháp nền xuất hiện xuyên suốt các bài Minna.'
    },
    paragraphs: [],
    subsections: [
      {
        title: { en: 'Word types and word order', vi: 'Từ loại và trật tự từ' },
        paragraphs: [
          {
            en: 'Japanese has verbs, adjectives, nouns, particles, and other word classes. The verb (or predicate) comes at the end of the sentence. A modifier always comes before the word it modifies.',
            vi: 'Tiếng Nhật có động từ, tính từ, danh từ, trợ từ và các loại từ khác. Vị ngữ (động từ hoặc cụm vị ngữ) đứng cuối câu. Thành phần bổ nghĩa luôn đứng trước từ được bổ nghĩa.'
          }
        ]
      },
      {
        title: { en: 'Predicates and particles', vi: 'Vị ngữ và trợ từ' },
        paragraphs: [
          {
            en: 'The predicate can be a verb, an adjective, or a noun with です. It does not change for person, gender, or number. Particles come after a word (or at the end of the sentence) and show the relationship between parts - topic, subject, object, direction, and so on.',
            vi: 'Vị ngữ có thể là động từ, tính từ hoặc danh từ kèm です. Vị ngữ không chia theo ngôi, giống hay số. Trợ từ đứng sau từ (hoặc cuối câu) để thể hiện quan hệ giữa các thành phần - chủ đề, chủ ngữ, tân ngữ, hướng, v.v.'
          }
        ]
      },
      {
        title: { en: 'Omission', vi: 'Lược bỏ' },
        paragraphs: [
          {
            en: 'When the meaning is clear from context, subjects and objects are often left out.',
            vi: 'Khi nghĩa đã rõ từ ngữ cảnh, chủ ngữ và tân ngữ thường được lược bỏ.'
          }
        ]
      },
      {
        title: { en: 'Writing systems', vi: 'Hệ thống chữ viết' },
        paragraphs: [
          {
            en: 'Japanese uses three scripts: hiragana and katakana (syllabaries) and kanji (characters with meaning). Everyday sentences mix all three. Katakana is used for loanwords and foreign names; hiragana also marks grammar (particles, verb endings). Romaji appears mainly for foreign names on signs and forms.',
            vi: 'Tiếng Nhật dùng ba bảng chữ: hiragana và katakana (âm tiết) cùng kanji (chữ Hán mang nghĩa). Câu thường ngày trộn cả ba. Katakana dùng cho từ mượn và tên nước ngoài; hiragana còn ghi phần ngữ pháp (trợ từ, đuôi động từ). Romaji chủ yếu gặp trên biển báo và tên người nước ngoài.'
          },
          {
            en: 'Vowel length and pitch accent can change meaning. Use the Alphabet section of this site for kana charts and listening practice.',
            vi: 'Độ dài nguyên âm và trọng âm có thể làm đổi nghĩa. Dùng mục Bảng chữ cái trên site để xem bảng kana và luyện nghe.'
          }
        ],
        examples: [
          {
            jp: '田中さんは デパートへ 行きます。',
            romaji: 'Tanaka-san wa depāto e ikimasu.',
            meaning: {
              en: 'Mr. Tanaka goes to the department store.',
              vi: 'Anh Tanaka đi cửa hàng bách hóa.'
            },
            ruby: [
              { base: '田中', reading: 'たなか' },
              { base: '行', reading: 'い' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'guide-classroom',
    title: { en: 'In the classroom', vi: 'Trong lớp học' },
    intro: {
      en: 'Phrases you hear from lesson 1 onward.',
      vi: 'Các câu thường gặp ngay từ bài 1.'
    },
    paragraphs: [],
    examples: [
      {
        jp: 'はじめましょう。',
        romaji: 'Hajimemashō.',
        meaning: { en: "Let's begin.", vi: 'Chúng ta (hay) bắt đầu.' }
      },
      {
        jp: '終わりましょう。',
        romaji: 'Owarimashō.',
        meaning: { en: "Let's stop here.", vi: 'Chúng ta (hay) dừng ở đây.' },
        ruby: [{ base: '終', reading: 'お' }]
      },
      {
        jp: '休みましょう。',
        romaji: 'Yasumimashō.',
        meaning: { en: "Let's take a break.", vi: 'Chúng ta (hay) nghỉ.' },
        ruby: [{ base: '休', reading: 'やす' }]
      },
      {
        jp: '分かりますか。',
        romaji: 'Wakarimasu ka.',
        meaning: { en: 'Do you understand?', vi: 'Anh/chị có hiểu không?' },
        ruby: [{ base: '分', reading: 'わ' }]
      },
      {
        jp: 'はい、分かります。',
        romaji: 'Hai, wakarimasu.',
        meaning: { en: 'Yes, I understand.', vi: 'Vâng, tôi hiểu.' },
        ruby: [{ base: '分', reading: 'わ' }]
      },
      {
        jp: 'いいえ、分かりません。',
        romaji: 'Iie, wakarimasen.',
        meaning: { en: "No, I don't understand.", vi: 'Không, tôi không hiểu.' },
        ruby: [{ base: '分', reading: 'わ' }]
      },
      {
        jp: 'もう一度 お願いします。',
        romaji: 'Mō ichido onegaishimasu.',
        meaning: { en: 'Once more, please.', vi: 'Làm ơn nhắc lại một lần nữa.' },
        ruby: [
          { base: '一度', reading: 'いちど' },
          { base: '願', reading: 'ねが' }
        ]
      },
      {
        jp: 'はい。',
        romaji: 'Hai.',
        meaning: { en: 'Yes. (correct)', vi: 'Vâng. (đúng)' }
      },
      {
        jp: 'いいえ。',
        romaji: 'Iie.',
        meaning: { en: 'No. (incorrect)', vi: 'Không. (sai)' }
      },
      {
        jp: '試験',
        romaji: 'shiken',
        meaning: { en: 'test, exam', vi: 'bài thi' },
        ruby: [
          { base: '試', reading: 'し' },
          { base: '験', reading: 'けん' }
        ]
      },
      {
        jp: '宿題',
        romaji: 'shukudai',
        meaning: { en: 'homework', vi: 'bài tập về nhà' },
        ruby: [
          { base: '宿', reading: 'しゅく' },
          { base: '題', reading: 'だい' }
        ]
      },
      {
        jp: '例、質問、答え',
        romaji: 'rei, shitsumon, kotae',
        meaning: { en: 'example; question; answer', vi: 'ví dụ; câu hỏi; câu trả lời' },
        ruby: [
          { base: '例', reading: 'れい' },
          { base: '質', reading: 'しつ' },
          { base: '問', reading: 'もん' },
          { base: '答', reading: 'こた' }
        ]
      }
    ]
  },
  {
    id: 'guide-greetings',
    title: { en: 'Greetings and daily phrases', vi: 'Chào hỏi và cách nói hàng ngày' },
    paragraphs: [],
    examples: [
      {
        jp: 'おはようございます。',
        romaji: 'Ohayō gozaimasu.',
        meaning: { en: 'Good morning.', vi: 'Chào buổi sáng.' }
      },
      {
        jp: 'こんにちは。',
        romaji: 'Konnichiwa.',
        meaning: { en: 'Hello. (daytime)', vi: 'Xin chào. (ban ngày)' }
      },
      {
        jp: 'こんばんは。',
        romaji: 'Konbanwa.',
        meaning: { en: 'Good evening.', vi: 'Chào buổi tối.' }
      },
      {
        jp: 'おやすみなさい。',
        romaji: 'Oyasuminasai.',
        meaning: { en: 'Good night.', vi: 'Chúc ngủ ngon.' }
      },
      {
        jp: 'さようなら。',
        romaji: 'Sayōnara.',
        meaning: { en: 'Goodbye.', vi: 'Tạm biệt.' }
      },
      {
        jp: 'ありがとうございます。',
        romaji: 'Arigatō gozaimasu.',
        meaning: { en: 'Thank you.', vi: 'Cảm ơn.' }
      },
      {
        jp: 'すみません。',
        romaji: 'Sumimasen.',
        meaning: { en: 'Excuse me. / Sorry.', vi: 'Xin lỗi.' }
      },
      {
        jp: 'お願いします。',
        romaji: 'Onegaishimasu.',
        meaning: { en: 'Please. (request)', vi: 'Làm ơn.' },
        ruby: [{ base: '願', reading: 'ねが' }]
      }
    ]
  }
];

export const n5Intro: N5IntroContent = {
  title: { en: 'Getting started', vi: 'Mở đầu' },
  intro: {
    en: 'Read this before Lesson 1 - basics of Japanese, classroom phrases, and everyday greetings from Minna no Nihongo Shokyu I.',
    vi: 'Đọc trước Bài 1 - đặc điểm tiếng Nhật, câu trong lớp và chào hỏi hàng ngày theo Minna no Nihongo Sơ cấp I.'
  },
  articles: n5IntroArticles
};
