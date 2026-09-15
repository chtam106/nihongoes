import type { ReferenceArticle } from '@/constants/courses/n5/reference/types.ts';

export const n5ReferenceColumns: ReferenceArticle[] = [
  {
    id: 'column-1',
    title: { en: 'Grammar note 1: Topic and subject', vi: 'Chuyên đề 1: Chủ đề và chủ ngữ' },
    intro: {
      en: 'Most Japanese sentences have a topic (marked by は) and sometimes a distinct subject (marked by が).',
      vi: 'Hầu hết câu tiếng Nhật có chủ đề (trợ từ は) và đôi khi có chủ ngữ riêng (trợ từ が).'
    },
    paragraphs: [],
    subsections: [
      {
        title: { en: 'What is a topic?', vi: 'Chủ đề là gì?' },
        paragraphs: [
          {
            en: 'The topic appears at the start of the sentence and shows what the sentence is about. It is marked by は. A sentence with a topic splits into two parts: before は is the topic; after は is the comment.',
            vi: 'Chủ đề thường đứng đầu câu, cho biết câu nói về cái gì, và được đánh dấu bằng trợ từ は. Câu có chủ đề chia làm hai phần: trước は là chủ đề; sau は là phần giải thích.'
          }
        ],
        examples: [
          {
            jp: '東京は 日本の 首都です。',
            romaji: 'Tōkyō wa Nihon no shuto desu.',
            meaning: { en: 'Tokyo is the capital of Japan.', vi: 'Tokyo là thủ đô của Nhật Bản.' },
            ruby: [
              { base: '東京', reading: 'とうきょう' },
              { base: '日本', reading: 'にほん' },
              { base: '首都', reading: 'しゅと' }
            ]
          },
          {
            jp: 'この 部屋は 静かです。',
            romaji: 'Kono heya wa shizuka desu.',
            meaning: { en: 'This room is quiet.', vi: 'Căn phòng này yên tĩnh.' },
            ruby: [
              { base: '部屋', reading: 'へや' },
              { base: '静', reading: 'しず' }
            ]
          },
          {
            jp: 'わたしは 先週 ディズニーランドへ 行きました。',
            romaji: 'Watashi wa senshū Disunīrando e ikimashita.',
            meaning: {
              en: 'Last week I went to Disneyland.',
              vi: 'Tuần trước tôi đã đi Disneyland.'
            },
            ruby: [
              { base: '先週', reading: 'せんしゅう' },
              { base: '行', reading: 'い' }
            ]
          }
        ]
      },
      {
        title: { en: 'What is a subject?', vi: 'Chủ ngữ là gì?' },
        paragraphs: [
          {
            en: 'The subject is the element tied to the predicate (verb, adjective, or noun + です). When it is not also the topic, it is marked by が - for the doer of an action, what exists, natural phenomena, states, or feelings.',
            vi: 'Chủ ngữ là thành phần gắn với vị ngữ (động từ, tính từ hoặc danh từ + です). Khi không trùng với chủ đề, chủ ngữ được đánh dấu bằng が - người/vật thực hiện hành động, sự tồn tại, hiện tượng tự nhiên, trạng thái hoặc cảm xúc.'
          }
        ],
        examples: [
          {
            jp: '太郎が ビールを 飲みました。',
            romaji: 'Tarō ga bīru o nomimashita.',
            meaning: { en: 'Taro drank beer.', vi: 'Taro đã uống bia.' },
            ruby: [
              { base: '太郎', reading: 'たろう' },
              { base: '飲', reading: 'の' }
            ]
          },
          {
            jp: '机の 上に 本が あります。',
            romaji: 'Tsukue no ue ni hon ga arimasu.',
            meaning: { en: 'There is a book on the desk.', vi: 'Trên bàn có quyển sách.' },
            ruby: [
              { base: '机', reading: 'つくえ' },
              { base: '上', reading: 'うえ' },
              { base: '本', reading: 'ほん' }
            ]
          },
          {
            jp: 'きのう 雨が 降りました。',
            romaji: 'Kinō ame ga furimashita.',
            meaning: { en: 'It rained yesterday.', vi: 'Hôm qua trời mưa.' },
            ruby: [
              { base: '雨', reading: 'あめ' },
              { base: '降', reading: 'ふ' }
            ]
          }
        ]
      },
      {
        title: { en: 'How topic and subject relate', vi: 'Mối quan hệ giữa chủ đề và chủ ngữ' },
        paragraphs: [
          {
            en: 'Topic and subject are different ideas but often coincide. In (7)-(8) the topic is also the subject. In (9) the topic (わたし) and the subject of 怖い (犬) differ. In (10) the topic is この本 while Tanaka (が) is the subject. Particle combinations like には and からは also appear with topics.',
            vi: 'Chủ đề và chủ ngữ là hai khái niệm khác nhau nhưng thường trùng nhau. Ở (7)-(8) chủ đề cũng là chủ ngữ. Ở (9) chủ đề (わたし) khác chủ ngữ của 怖い (犬). Ở (10) chủ đề là この本 còn Tanaka (が) là chủ ngữ. Các trợ từ kết hợp như には, からは cũng xuất hiện với chủ đề.'
          }
        ],
        examples: [
          {
            jp: '田中さんは 有名です。',
            romaji: 'Tanaka-san wa yūmei desu.',
            meaning: { en: 'Mr. Tanaka is famous.', vi: 'Anh Tanaka nổi tiếng.' },
            ruby: [
              { base: '田中', reading: 'たなか' },
              { base: '有名', reading: 'ゆうめい' }
            ]
          },
          {
            jp: '佐藤さんは 学生です。',
            romaji: 'Satō-san wa gakusei desu.',
            meaning: { en: 'Ms. Sato is a student.', vi: 'Chị Sato là sinh viên.' },
            ruby: [
              { base: '佐藤', reading: 'さとう' },
              { base: '学生', reading: 'がくせい' }
            ]
          },
          {
            jp: 'わたしは 犬が 怖いです。',
            romaji: 'Watashi wa inu ga kowai desu.',
            meaning: { en: 'I am afraid of dogs.', vi: 'Tôi sợ chó.' },
            ruby: [
              { base: '犬', reading: 'いぬ' },
              { base: '怖', reading: 'こわ' }
            ]
          },
          {
            jp: 'この 本は 田中さんが 書きました。',
            romaji: 'Kono hon wa Tanaka-san ga kakimashita.',
            meaning: {
              en: 'This book was written by Mr. Tanaka.',
              vi: 'Quyển sách này do anh Tanaka viết.'
            },
            ruby: [
              { base: '本', reading: 'ほん' },
              { base: '田中', reading: 'たなか' },
              { base: '書', reading: 'か' }
            ]
          },
          {
            jp: '田中さんには わたしが 連絡します。',
            romaji: 'Tanaka-san ni wa watashi ga renraku shimasu.',
            meaning: { en: 'I will contact Mr. Tanaka.', vi: 'Tôi sẽ liên lạc với anh Tanaka.' },
            ruby: [
              { base: '田中', reading: 'たなか' },
              { base: '連絡', reading: 'れんらく' }
            ]
          }
        ]
      },
      {
        title: {
          en: 'Sentences with and without a topic',
          vi: 'Câu có chủ đề và câu không có chủ đề'
        },
        paragraphs: [
          {
            en: 'With a topic, は usually marks the subject; without a topic, が marks the subject. Topic-less sentences report what you perceive, or open a story objectively.',
            vi: 'Câu có chủ đề thì は thường biểu thị chủ ngữ; câu không có chủ đề thì が biểu thị chủ ngữ. Câu không chủ đề dùng khi nói lại cảm nhận trực tiếp hoặc mở đầu câu chuyện một cách khách quan.'
          }
        ],
        examples: [
          {
            jp: 'あっ、雨が 降っています。',
            romaji: 'A, ame ga futte imasu.',
            meaning: { en: 'Oh, it is raining.', vi: 'Ối, trời đang mưa.' },
            ruby: [
              { base: '雨', reading: 'あめ' },
              { base: '降', reading: 'ふ' }
            ]
          },
          {
            jp: 'きのう 太郎が 来ました。',
            romaji: 'Kinō Tarō ga kimashita.',
            meaning: { en: 'Taro came yesterday.', vi: 'Hôm qua Taro đã đến.' },
            ruby: [
              { base: '太郎', reading: 'たろう' },
              { base: '来', reading: 'き' }
            ]
          },
          {
            jp: '来週 パーティーがあります。',
            romaji: 'Raishū pātī ga arimasu.',
            meaning: { en: 'There is a party next week.', vi: 'Tuần sau có tiệc.' },
            ruby: [{ base: '来週', reading: 'らいしゅう' }]
          }
        ]
      }
    ]
  },
  {
    id: 'column-2',
    title: { en: 'Grammar note 2: Clauses', vi: 'Chuyên đề 2: Mệnh đề' },
    paragraphs: [
      {
        en: 'A clause is a sentence form used as part of another sentence. The embedded part is a subordinate clause; the remainder is the main clause. Subordinate clauses usually come first and clarify the main clause (e.g. a condition). The subject of a subordinate clause is usually marked by が, not は (except in ～が / ～けど clauses).',
        vi: 'Mệnh đề là hình thức của một câu khi trở thành một phần nằm trong câu khác. Phần nhúng gọi là mệnh đề phụ; phần còn lại là mệnh đề chính. Mệnh đề phụ thường đứng trước và làm rõ mệnh đề chính (ví dụ điều kiện). Chủ ngữ của mệnh đề phụ thường được biểu thị bằng が, không phải は (trừ mệnh đề ～が / ～けど).'
      }
    ],
    examples: [
      {
        jp: '田中さんが ここへ 来た とき、山田さんは いませんでした。',
        romaji: 'Tanaka-san ga koko e kita toki, Yamada-san wa imasen deshita.',
        meaning: {
          en: 'When Mr. Tanaka came here, Ms. Yamada was not here.',
          vi: 'Khi anh Tanaka đến đây thì chị Yamada không có mặt.'
        },
        ruby: [
          { base: '田中', reading: 'たなか' },
          { base: '来', reading: 'き' },
          { base: '山田', reading: 'やまだ' }
        ]
      },
      {
        jp: 'あした 雨が 降ったら、わたしは 出かけません。',
        romaji: 'Ashita ame ga futtara, watashi wa dekakemasen.',
        meaning: {
          en: 'If it rains tomorrow, I will not go out.',
          vi: 'Nếu ngày mai trời mưa thì tôi sẽ không đi ra ngoài.'
        },
        ruby: [
          { base: '雨', reading: 'あめ' },
          { base: '降', reading: 'ふ' },
          { base: '出', reading: 'で' }
        ]
      }
    ]
  }
];
