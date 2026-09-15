import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 20 (plain/casual forms, けど). */
export const n5Lesson20: Lesson = {
  id: 'lesson-20',
  number: 20,
  title: {
    en: 'Casual speech',
    vi: 'Nói thân mật'
  },
  focus: {
    en: 'Use plain (casual) verb and adjective forms with close friends and family, drop particles when clear, and link with けど.',
    vi: 'Dùng thể thân mật với bạn thân và gia đình, lược trợ từ khi rõ nghĩa, và nối câu với けど.'
  },
  vocab: [
    {
      kana: 'いります',
      kanji: '要ります',
      romaji: 'irimasu',
      meaning: {
        en: 'to need, to require (ビザが～: need a visa)',
        vi: 'cần (ビザが～: cần visa)'
      },
      ruby: [{ base: '要', reading: 'い' }]
    },
    {
      kana: 'しらべます',
      kanji: '調べます',
      romaji: 'shirabemasu',
      meaning: { en: 'to check, to investigate', vi: 'tra, kiểm tra' },
      ruby: [{ base: '調', reading: 'しら' }]
    },
    {
      kana: 'なおします',
      kanji: '直します',
      romaji: 'naoshimasu',
      meaning: { en: 'to repair, to fix', vi: 'sửa, chỉnh' },
      ruby: [{ base: '直', reading: 'なお' }]
    },
    {
      kana: 'しゅうりします',
      kanji: '修理します',
      romaji: 'shūri shimasu',
      meaning: { en: 'to repair', vi: 'sửa chữa' },
      ruby: [{ base: '修', reading: 'しゅう' }]
    },
    {
      kana: 'でんわします',
      kanji: '電話します',
      romaji: 'denwa shimasu',
      meaning: { en: 'to telephone, to call', vi: 'gọi điện' },
      ruby: [
        { base: '電', reading: 'でん' },
        { base: '話', reading: 'わ' }
      ]
    },
    {
      kana: 'ぼく',
      kanji: '僕',
      romaji: 'boku',
      meaning: { en: 'I (informal, used by men)', vi: 'tôi (thân mật, nam giới)' },
      ruby: [{ base: '僕', reading: 'ぼく' }]
    },
    {
      kana: 'きみ',
      kanji: '君',
      romaji: 'kimi',
      meaning: { en: 'you (informal, often used by men)', vi: 'cậu/bạn (thân mật)' },
      ruby: [{ base: '君', reading: 'きみ' }]
    },
    {
      kana: '～くん',
      kanji: '～君',
      romaji: '~kun',
      meaning: { en: 'Mr. (informal suffix for boys/men)', vi: 'anh (hậu tố thân mật cho nam)' },
      ruby: [{ base: '君', reading: 'くん' }]
    },
    {
      kana: 'うん',
      romaji: 'un',
      meaning: { en: 'yes (informal)', vi: 'ừ, vâng (thân mật)' }
    },
    {
      kana: 'ううん',
      romaji: 'ūn',
      meaning: { en: 'no (informal)', vi: 'không (thân mật)' }
    },
    {
      kana: 'サラリーマン',
      romaji: 'sararīman',
      meaning: { en: 'office worker, salaried employee', vi: 'nhân viên văn phòng' }
    },
    {
      kana: 'ことば',
      kanji: '言葉',
      romaji: 'kotoba',
      meaning: { en: 'word, language', vi: 'từ, ngôn ngữ' },
      ruby: [{ base: '言', reading: 'こと' }]
    },
    {
      kana: 'ぶっか',
      kanji: '物価',
      romaji: 'bukka',
      meaning: { en: 'prices, cost of living', vi: 'giá cả, mức giá' },
      ruby: [
        { base: '物', reading: 'ぶつ' },
        { base: '価', reading: 'か' }
      ]
    },
    {
      kana: 'きもの',
      kanji: '着物',
      romaji: 'kimono',
      meaning: { en: 'kimono', vi: 'kimono' },
      ruby: [{ base: '着', reading: 'き' }]
    },
    {
      kana: 'ビザ',
      romaji: 'biza',
      meaning: { en: 'visa', vi: 'visa' }
    },
    {
      kana: 'はじめ',
      kanji: '初め',
      romaji: 'hajime',
      meaning: { en: 'the beginning', vi: 'phần đầu, lúc đầu' },
      ruby: [{ base: '初', reading: 'はじ' }]
    },
    {
      kana: 'おわり',
      kanji: '終わり',
      romaji: 'owari',
      meaning: { en: 'the end', vi: 'kết thúc, phần cuối' },
      ruby: [{ base: '終', reading: 'お' }]
    },
    {
      kana: 'こっち',
      romaji: 'kocchi',
      meaning: { en: 'this way, here (informal)', vi: 'phía này, đằng này (thân mật)' }
    },
    {
      kana: 'そっち',
      romaji: 'socchi',
      meaning: { en: 'that way, there (informal)', vi: 'phía đó, đằng đó (thân mật)' }
    },
    {
      kana: 'あっち',
      romaji: 'acchi',
      meaning: { en: 'that way over there (informal)', vi: 'phía kia, đằng kia (thân mật)' }
    },
    {
      kana: 'どっち',
      romaji: 'docchi',
      meaning: { en: 'which way, which one (informal)', vi: 'phía nào, cái nào (thân mật)' }
    },
    {
      kana: 'あのあいだ',
      kanji: 'あの間',
      romaji: 'ano aida',
      meaning: { en: 'the other day', vi: 'hôm kia, hôm nọ' },
      ruby: [{ base: '間', reading: 'あいだ' }]
    },
    {
      kana: 'みんなで',
      romaji: 'minna de',
      meaning: { en: 'all together', vi: 'cùng nhau, tất cả cùng' }
    },
    {
      kana: '～けど',
      romaji: '~kedo',
      meaning: { en: 'but (informal, = が)', vi: 'nhưng (thân mật, = が)' }
    }
  ],
  phrases: [
    {
      kana: 'くにへ かえるの？',
      kanji: '国へ 帰るの？',
      romaji: 'Kuni e kaeru no?',
      meaning: { en: 'Are you going back to your country?', vi: 'Về nước à?' },
      ruby: [
        { base: '国', reading: 'くに' },
        { base: '帰', reading: 'かえ' }
      ]
    },
    {
      kana: 'どうするの？',
      romaji: 'Dō suru no?',
      meaning: { en: 'What will you do?', vi: 'Làm sao đây? / Sao?' }
    },
    {
      kana: 'どうしようかな。',
      romaji: 'Dō shiyō kana.',
      meaning: { en: 'What shall I do?', vi: 'Làm gì bây giờ nhỉ?' }
    },
    {
      kana: 'よかったら',
      romaji: 'yokattara',
      meaning: { en: 'if you like, if you want', vi: 'nếu anh/chị muốn' }
    },
    {
      kana: 'いろいろ',
      romaji: 'iroiro',
      meaning: { en: 'various, various things', vi: 'nhiều thứ, đủ thứ' }
    },
    {
      kana: 'おなかが いっぱい です。',
      kanji: 'お腹が いっぱい です。',
      romaji: 'Onaka ga ippai desu.',
      meaning: { en: 'I am full.', vi: 'No bụng rồi.' },
      ruby: [{ base: '腹', reading: 'なか' }]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson20-visa',
      title: { en: 'Do you need a visa?', vi: 'Có cần visa không?' },
      speakers: [
        { id: 'tanaka', name: '田中' },
        { id: 'miller', name: 'ミラー' }
      ],
      lines: [
        {
          speakerId: 'tanaka',
          jp: 'ミラーくん、国 帰るの？',
          romaji: 'Mirā-kun, kuni kaeru no?',
          meaning: { en: 'Miller, are you going back home?', vi: 'Miller, về nước à?' },
          ruby: [
            { base: '国', reading: 'くに' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'うん。来月 帰る。',
          romaji: 'Un. Raigetsu kaeru.',
          meaning: { en: 'Yeah. I am going back next month.', vi: 'Ừ. Tháng sau về.' },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '月', reading: 'げつ' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          speakerId: 'tanaka',
          jp: 'ビザ 要る？',
          romaji: 'Biza iru?',
          meaning: { en: 'Do you need a visa?', vi: 'Cần visa không?' },
          ruby: [{ base: '要', reading: 'い' }]
        },
        {
          speakerId: 'miller',
          jp: 'ううん、要らない。パスポート あれば いい。',
          romaji: 'Ūn, iranai. Pasupōto areba ii.',
          meaning: {
            en: 'No, I do not need one. A passport is enough.',
            vi: 'Không, không cần. Có hộ chiếu là được.'
          },
          ruby: [{ base: '要', reading: 'い' }]
        }
      ]
    },
    {
      id: 'conv-lesson20-lunch',
      title: { en: 'A bit spicy but good', vi: 'Hơi cay nhưng ngon' },
      speakers: [
        { id: 'kim', name: 'キム' },
        { id: 'sato', name: '佐藤' }
      ],
      lines: [
        {
          speakerId: 'kim',
          jp: 'この ラーメン、ちょっと 辛いけど、おいしいね。',
          romaji: 'Kono rāmen, chotto karai kedo, oishii ne.',
          meaning: {
            en: 'This ramen is a bit spicy, but it is delicious.',
            vi: 'Mì ramen này hơi cay nhưng ngon nhỉ.'
          },
          ruby: [{ base: '辛', reading: 'から' }]
        },
        {
          speakerId: 'sato',
          jp: 'うん。物価 高いけど、食べ物は おいしいよ。',
          romaji: 'Un. Bukka takai kedo, tabemono wa oishii yo.',
          meaning: {
            en: 'Yeah. Prices are high, but the food is good.',
            vi: 'Ừ. Giá cả cao nhưng đồ ăn ngon.'
          },
          ruby: [
            { base: '物', reading: 'ぶつ' },
            { base: '価', reading: 'か' },
            { base: '高', reading: 'たか' },
            { base: '食', reading: 'た' },
            { base: '物', reading: 'べ' }
          ]
        },
        {
          speakerId: 'kim',
          jp: 'もう お腹 いっぱい。どうしようかな。',
          romaji: 'Mō onaka ippai. Dō shiyō kana.',
          meaning: {
            en: 'I am already full. What shall I do?',
            vi: 'No bụng rồi. Làm sao bây giờ nhỉ.'
          },
          ruby: [{ base: '腹', reading: 'なか' }]
        },
        {
          speakerId: 'sato',
          jp: 'よかったら、デザート 食べない？',
          romaji: 'Yokattara, dezāto tabenai?',
          meaning: { en: 'If you like, want some dessert?', vi: 'Nếu muốn, ăn tráng miệng không?' },
          ruby: [{ base: '食', reading: 'た' }]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'Plain forms (V / Adj / N だ)',
      highlights: ['plain'],
      title: { en: 'Plain (casual) forms', vi: 'Thể thân mật' },
      explanation: {
        en: 'With family and close friends, use plain forms instead of ます/です: 書く/書かない/書いた, 高い, 暇だ. Na-adj and nouns use だ (静かだ, 学生だ).',
        vi: 'Với gia đình và bạn thân, dùng thể thân mật thay ます/です: 書く/書かない/書いた, 高い, 暇だ. Tính từ な và danh từ dùng だ (静かだ, 学生だ).'
      },
      explanationRuby: [
        { base: '書', reading: 'か' },
        { base: '書', reading: 'か' },
        { base: '書', reading: 'か' },
        { base: '高', reading: 'たか' },
        { base: '暇', reading: 'ひま' },
        { base: '静', reading: 'しず' },
        { base: '学生', reading: 'がくせい' }
      ],
      examples: [
        {
          jp: 'ご飯 食べる？',
          romaji: 'Gohan taberu?',
          meaning: { en: 'Want to eat?', vi: 'Ăn cơm không?' },
          ruby: [
            { base: '飯', reading: 'はん' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          jp: 'この りんご おいしいね。',
          romaji: 'Kono ringo oishii ne.',
          meaning: { en: 'This apple is delicious.', vi: 'Táo này ngon nhỉ.' }
        },
        {
          jp: '僕は サラリーマンだ。',
          romaji: 'Boku wa sararīman da.',
          meaning: { en: 'I am an office worker.', vi: 'Tôi là nhân viên văn phòng.' },
          ruby: [{ base: '僕', reading: 'ぼく' }]
        }
      ]
    },
    {
      pattern: 'Particle omission',
      highlights: ['omit'],
      title: { en: 'Dropping particles', vi: 'Lược trợ từ' },
      explanation: {
        en: 'In casual speech, particles like を、に、は may be dropped when the meaning is clear: ご飯 食べる？, 国 帰るの？',
        vi: 'Khi nói thân mật, có thể bỏ を、に、は nếu nghĩa vẫn rõ: ご飯 食べる？, 国 帰るの？'
      },
      explanationRuby: [
        { base: '飯', reading: 'はん' },
        { base: '食', reading: 'た' },
        { base: '国', reading: 'くに' },
        { base: '帰', reading: 'かえ' }
      ],
      examples: [
        {
          jp: 'どっち 行く？',
          romaji: 'Docchi iku?',
          meaning: { en: 'Which way are we going?', vi: 'Đi phía nào?' },
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          jp: 'あの間 電話 した？',
          romaji: 'Ano aida denwa shita?',
          meaning: { en: 'Did you call the other day?', vi: 'Hôm nọ gọi điện chưa?' },
          ruby: [
            { base: '間', reading: 'あいだ' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form ＋ けど',
      highlights: ['けど'],
      title: { en: 'But in casual speech (けど)', vi: 'Nhưng thân mật (けど)' },
      explanation: {
        en: 'けど links two clauses with contrast, like が in polite speech. Attach to plain form: 辛いけど、おいしい.',
        vi: 'けど nối hai vế với nghĩa tương phản, giống が khi nói lịch sự. Gắn với thể thân mật: 辛いけど、おいしい.'
      },
      explanationRuby: [{ base: '辛', reading: 'から' }],
      examples: [
        {
          jp: 'ちょっと 辛いけど、おいしい。',
          romaji: 'Chotto karai kedo, oishii.',
          meaning: {
            en: 'It is a bit spicy, but it is good.',
            vi: 'Hơi cay nhưng ngon.'
          },
          ruby: [{ base: '辛', reading: 'から' }]
        },
        {
          jp: '忙しいけど、楽しい。',
          romaji: 'Isogashii kedo, tanoshii.',
          meaning: { en: 'I am busy, but it is fun.', vi: 'Bận nhưng vui.' },
          ruby: [
            { base: '忙', reading: 'いそ' },
            { base: '楽', reading: 'たの' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson20-casual',
      title: { en: 'Talking with a friend', vi: 'Nói chuyện với bạn' },
      lines: [
        {
          jp: '田中くんは ミラーくんに 「国 帰るの？」 と 聞きました。',
          romaji: 'Tanaka-kun wa Mirā-kun ni "Kuni kaeru no?" to kikimashita.',
          meaning: {
            en: 'Tanaka asked Miller, "Are you going home?"',
            vi: 'Tanaka hỏi Miller: "Về nước à?"'
          },
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '国', reading: 'くに' },
            { base: '帰', reading: 'かえ' },
            { base: '聞', reading: 'き' }
          ]
        },
        {
          jp: 'ミラーさんは 「うん、来月 帰る。ビザ 要らないよ」 と 答えました。',
          romaji: 'Mirā-san wa "Un, raigetsu kaeru. Biza iranai yo" to kotaemashita.',
          meaning: {
            en: 'Miller answered, "Yeah, I go back next month. I do not need a visa."',
            vi: 'Miller trả lời: "Ừ, tháng sau về. Không cần visa đâu."'
          },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '月', reading: 'げつ' },
            { base: '帰', reading: 'かえ' },
            { base: '要', reading: 'い' },
            { base: '答', reading: 'こた' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'When will Miller go home?', vi: 'Miller về khi nào?' },
          choices: [
            { id: 'a', label: { en: 'Next month', vi: 'Tháng sau' } },
            { id: 'b', label: { en: 'This week', vi: 'Tuần này' } },
            { id: 'c', label: { en: 'Next year', vi: 'Năm sau' } },
            { id: 'd', label: { en: 'He is not going', vi: 'Không về' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'Does he need a visa?', vi: 'Anh ấy cần visa không?' },
          choices: [
            { id: 'a', label: { en: 'No', vi: 'Không' } },
            { id: 'b', label: { en: 'Yes', vi: 'Có' } },
            { id: 'c', label: { en: 'Not said', vi: 'Không nói' } },
            { id: 'd', label: { en: 'Maybe', vi: 'Có thể' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Informal pronouns and directions', vi: 'Đại từ và hướng thân mật' },
      includeInQuiz: false,
      items: [
        {
          kana: 'ぼく',
          kanji: '僕',
          romaji: 'boku',
          meaning: { en: 'I (informal, men)', vi: 'tôi (nam, thân mật)' },
          ruby: [{ base: '僕', reading: 'ぼく' }]
        },
        {
          kana: 'きみ',
          kanji: '君',
          romaji: 'kimi',
          meaning: { en: 'you (informal)', vi: 'cậu/bạn (thân mật)' },
          ruby: [{ base: '君', reading: 'きみ' }]
        },
        {
          kana: 'こっち',
          romaji: 'kocchi',
          meaning: { en: 'this way (informal)', vi: 'đằng này' }
        },
        {
          kana: 'そっち',
          romaji: 'socchi',
          meaning: { en: 'that way (informal)', vi: 'đằng đó' }
        },
        {
          kana: 'あっち',
          romaji: 'acchi',
          meaning: { en: 'that way over there (informal)', vi: 'đằng kia' }
        },
        {
          kana: 'どっち',
          romaji: 'docchi',
          meaning: { en: 'which way (informal)', vi: 'đằng nào' }
        }
      ]
    }
  ]
};
