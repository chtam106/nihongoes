import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 21 (と思います, と言います, でしょう). */
export const n5Lesson21: Lesson = {
  id: 'lesson-21',
  number: 21,
  title: {
    en: 'What do you think?',
    vi: 'Anh nghĩ sao?'
  },
  focus: {
    en: 'Share opinions with 〜と思います, report speech with 〜と言います, and seek agreement with 〜でしょう.',
    vi: 'Nói ý kiến với 〜と思います, trích dẫn lời nói với 〜と言います, và xác nhận với 〜でしょう.'
  },
  vocab: [
    {
      kana: 'おもいます',
      kanji: '思います',
      romaji: 'omoimasu',
      meaning: { en: 'to think', vi: 'nghĩ' },
      ruby: [{ base: '思', reading: 'おも' }]
    },
    {
      kana: 'いいます',
      kanji: '言います',
      romaji: 'iimasu',
      meaning: { en: 'to say', vi: 'nói' },
      ruby: [{ base: '言', reading: 'い' }]
    },
    {
      kana: 'たります',
      kanji: '足ります',
      romaji: 'tarimasu',
      meaning: { en: 'to be enough, to be sufficient', vi: 'đủ' },
      ruby: [{ base: '足', reading: 'た' }]
    },
    {
      kana: 'かちます',
      kanji: '勝ちます',
      romaji: 'kachimasu',
      meaning: { en: 'to win', vi: 'thắng' },
      ruby: [{ base: '勝', reading: 'か' }]
    },
    {
      kana: 'まけます',
      kanji: '負けます',
      romaji: 'makemasu',
      meaning: { en: 'to lose, to be beaten', vi: 'thua' },
      ruby: [{ base: '負', reading: 'ま' }]
    },
    {
      kana: 'あります',
      romaji: 'arimasu',
      meaning: {
        en: 'to be held, to take place (お祭りが～: a festival is held)',
        vi: 'diễn ra (お祭りが～: có lễ hội)'
      }
    },
    {
      kana: 'やくにたちます',
      kanji: '役に立ちます',
      romaji: 'yaku ni tachimasu',
      meaning: { en: 'to be useful', vi: 'có ích' },
      ruby: [
        { base: '役', reading: 'やく' },
        { base: '立', reading: 'た' }
      ]
    },
    {
      kana: 'むだ [な]',
      kanji: '無駄 [な]',
      romaji: 'muda [na]',
      meaning: { en: 'wasteful (na-adj)', vi: 'lãng phí, vô ích (tính từ な)' },
      ruby: [{ base: '無', reading: 'む' }]
    },
    {
      kana: 'ふべん [な]',
      kanji: '不便 [な]',
      romaji: 'fuben [na]',
      meaning: { en: 'inconvenient (na-adj)', vi: 'bất tiện (tính từ な)' },
      ruby: [{ base: '不', reading: 'ふ' }]
    },
    {
      kana: 'おなじ',
      kanji: '同じ',
      romaji: 'onaji',
      meaning: { en: 'the same', vi: 'giống nhau' },
      ruby: [{ base: '同', reading: 'おな' }]
    },
    {
      kana: 'すごい',
      romaji: 'sugoi',
      meaning: { en: 'great, amazing (expresses admiration)', vi: 'tuyệt, ghê (khen ngợi)' }
    },
    {
      kana: 'しゅしょう',
      kanji: '首相',
      romaji: 'shushō',
      meaning: { en: 'prime minister', vi: 'thủ tướng' },
      ruby: [
        { base: '首', reading: 'しゅ' },
        { base: '相', reading: 'しょう' }
      ]
    },
    {
      kana: 'だいとうりょう',
      kanji: '大統領',
      romaji: 'daitōryō',
      meaning: { en: 'president', vi: 'tổng thống' },
      ruby: [
        { base: '大', reading: 'だい' },
        { base: '統', reading: 'とう' },
        { base: '領', reading: 'りょう' }
      ]
    },
    {
      kana: 'せいじ',
      kanji: '政治',
      romaji: 'seiji',
      meaning: { en: 'politics', vi: 'chính trị' },
      ruby: [{ base: '政', reading: 'せい' }]
    },
    {
      kana: 'ニュース',
      romaji: 'nyūsu',
      meaning: { en: 'news', vi: 'tin tức' }
    },
    {
      kana: 'スピーチ',
      romaji: 'supīchi',
      meaning: {
        en: 'speech (～を します: make a speech)',
        vi: 'bài phát biểu (～を します: phát biểu)'
      }
    },
    {
      kana: 'しあい',
      kanji: '試合',
      romaji: 'shiai',
      meaning: { en: 'game, match', vi: 'trận đấu' },
      ruby: [{ base: '試', reading: 'し' }]
    },
    {
      kana: 'アルバイト',
      romaji: 'arubaito',
      meaning: {
        en: 'part-time job (～を します: work part-time)',
        vi: 'việc làm thêm (～を します: làm thêm)'
      }
    },
    {
      kana: 'いけん',
      kanji: '意見',
      romaji: 'iken',
      meaning: { en: 'opinion', vi: 'ý kiến' },
      ruby: [{ base: '意', reading: 'い' }]
    },
    {
      kana: 'はなし',
      kanji: '話',
      romaji: 'hanashi',
      meaning: {
        en: 'talk, story (～を します: tell a story)',
        vi: 'câu chuyện (～を します: kể chuyện)'
      },
      ruby: [{ base: '話', reading: 'はな' }]
    },
    {
      kana: 'ユーモア',
      romaji: 'yūmoa',
      meaning: { en: 'humor', vi: 'hài hước' }
    },
    {
      kana: 'デザイン',
      romaji: 'dezain',
      meaning: { en: 'design', vi: 'thiết kế' }
    },
    {
      kana: 'こうつう',
      kanji: '交通',
      romaji: 'kōtsū',
      meaning: { en: 'transportation, traffic', vi: 'giao thông' },
      ruby: [{ base: '交', reading: 'こう' }]
    },
    {
      kana: 'ラッシュ',
      romaji: 'rasshu',
      meaning: { en: 'rush hour', vi: 'giờ cao điểm' }
    },
    {
      kana: 'さいきん',
      kanji: '最近',
      romaji: 'saikin',
      meaning: { en: 'recently, these days', vi: 'gần đây' },
      ruby: [{ base: '近', reading: 'きん' }]
    },
    {
      kana: 'たぶん',
      romaji: 'tabun',
      meaning: { en: 'probably, perhaps', vi: 'có lẽ, chắc là' }
    },
    {
      kana: 'きっと',
      romaji: 'kitto',
      meaning: { en: 'surely, definitely', vi: 'chắc chắn' }
    },
    {
      kana: 'ほんとうに',
      kanji: '本当に',
      romaji: 'hontō ni',
      meaning: { en: 'really, truly', vi: 'thật sự' },
      ruby: [
        { base: '本', reading: 'ほん' },
        { base: '当', reading: 'とう' }
      ]
    },
    {
      kana: 'そんなに',
      romaji: 'sonna ni',
      meaning: { en: 'not so much (with negatives)', vi: 'không ... lắm (với phủ định)' }
    },
    {
      kana: '～について',
      romaji: '~ni tsuite',
      meaning: { en: 'about ~, concerning ~', vi: 'về ~' }
    }
  ],
  phrases: [
    {
      kana: 'しかたがありません。',
      kanji: '仕方がありません。',
      romaji: 'Shikata ga arimasen.',
      meaning: { en: 'There is no other choice.', vi: 'Không còn cách nào khác.' },
      ruby: [
        { base: '仕', reading: 'しか' },
        { base: '方', reading: 'た' }
      ]
    },
    {
      kana: 'しばらくですね。',
      romaji: 'Shibaraku desu ne.',
      meaning: { en: 'Long time no see.', vi: 'Lâu rồi không gặp nhỉ.' }
    },
    {
      kana: '～でも 飲みませんか。',
      romaji: '~demo nomimasen ka.',
      meaning: { en: 'How about drinking ~ or something?', vi: 'Uống ~ hay gì đó không?' },
      ruby: [{ base: '飲', reading: 'の' }]
    },
    {
      kana: 'みないと。',
      kanji: '見ないと。',
      romaji: 'Minai to.',
      meaning: { en: 'I have to watch it.', vi: 'Phải xem thôi.' },
      ruby: [{ base: '見', reading: 'み' }]
    },
    {
      kana: 'もちろん',
      romaji: 'mochiron',
      meaning: { en: 'of course', vi: 'tất nhiên' }
    }
  ],
  conversation: [
    {
      id: 'conv-lesson21-opinion',
      title: { en: 'Who will win?', vi: 'Ai sẽ thắng?' },
      speakers: [
        { id: 'yamada', name: '山田' },
        { id: 'miller', name: 'ミラー' }
      ],
      lines: [
        {
          speakerId: 'yamada',
          jp: '今日 試合 見に 行くでしょう。',
          romaji: 'Kyō shiai mi ni iku deshō.',
          meaning: {
            en: 'You are going to watch the game today, right?',
            vi: 'Hôm nay anh đi xem trận đấu phải không?'
          },
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '試', reading: 'し' },
            { base: '合', reading: 'あい' },
            { base: '見', reading: 'み' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'ええ、もちろん。見ないと。',
          romaji: 'Ee, mochiron. Minai to.',
          meaning: {
            en: 'Yes, of course. I have to watch it.',
            vi: 'Ừ, tất nhiên. Phải xem thôi.'
          },
          ruby: [{ base: '見', reading: 'み' }]
        },
        {
          speakerId: 'yamada',
          jp: 'どちらが 勝つと 思いますか。',
          romaji: 'Dochira ga katsu to omoimasu ka.',
          meaning: { en: 'Which team do you think will win?', vi: 'Anh nghĩ đội nào thắng?' },
          ruby: [
            { base: '勝', reading: 'か' },
            { base: '思', reading: 'おも' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'たぶん 日本が 勝つと 思います。',
          romaji: 'Tabun Nihon ga katsu to omoimasu.',
          meaning: { en: 'I think Japan will probably win.', vi: 'Tôi nghĩ có lẽ Nhật thắng.' },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '勝', reading: 'か' },
            { base: '思', reading: 'おも' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'Plain form ＋ と思います',
      patternRuby: [{ base: '思', reading: 'おも' }],
      highlights: ['と', '思います'],
      title: { en: 'Expressing opinions (〜と思います)', vi: 'Nói ý kiến (〜と思います)' },
      explanation: {
        en: "Plain form + と思います states your opinion or judgment: 雨が 降ると思います. For others' opinions, use と言います.",
        vi: 'Thể thường + と思います nói ý kiến hoặc đoán: 雨が 降ると思います. Với ý kiến người khác dùng と言います.'
      },
      explanationRuby: [
        { base: '雨', reading: 'あめ' },
        { base: '降', reading: 'ふ' },
        { base: '思', reading: 'おも' },
        { base: '言', reading: 'い' }
      ],
      examples: [
        {
          jp: '明日 雨が 降ると 思います。',
          romaji: 'Ashita ame ga furu to omoimasu.',
          meaning: { en: 'I think it will rain tomorrow.', vi: 'Tôi nghĩ mai trời mưa.' },
          ruby: [
            { base: '明', reading: 'あ' },
            { base: '日', reading: 'した' },
            { base: '雨', reading: 'あめ' },
            { base: '降', reading: 'ふ' },
            { base: '思', reading: 'おも' }
          ]
        },
        {
          jp: 'この デザインは すごいと 思います。',
          romaji: 'Kono dezain wa sugoi to omoimasu.',
          meaning: { en: 'I think this design is amazing.', vi: 'Tôi nghĩ thiết kế này tuyệt.' },
          ruby: [{ base: '思', reading: 'おも' }]
        }
      ]
    },
    {
      pattern: '「引用」／Plain form ＋ と言います',
      patternRuby: [{ base: '言', reading: 'い' }],
      highlights: ['と', '言います'],
      title: { en: 'Reporting speech (〜と言います)', vi: 'Trích dẫn lời nói (〜と言います)' },
      explanation: {
        en: 'Quote directly with 「...」と言います, or use plain form + と言います for indirect speech: 首相は 来月 来ると言いました.',
        vi: 'Trích dẫn trực tiếp: 「...」と言います; gián tiếp: thể thường + と言います, ví dụ 首相は 来月 来ると言いました.'
      },
      explanationRuby: [
        { base: '言', reading: 'い' },
        { base: '言', reading: 'い' },
        { base: '首', reading: 'しゅ' },
        { base: '相', reading: 'しょう' },
        { base: '来', reading: 'らい' },
        { base: '月', reading: 'げつ' },
        { base: '来', reading: 'く' },
        { base: '言', reading: 'い' },
        { base: '言', reading: 'い' }
      ],
      examples: [
        {
          jp: '先生は 「頑張って ください」 と 言いました。',
          romaji: 'Sensei wa "Ganbatte kudasai" to iimashita.',
          meaning: {
            en: 'The teacher said, "Please do your best."',
            vi: 'Thầy nói: "Cố lên nhé."'
          },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '頑', reading: 'がん' },
            { base: '張', reading: 'ば' },
            { base: '言', reading: 'い' }
          ]
        },
        {
          jp: 'ミラーさんは 来週 試合に 行くと 言いました。',
          romaji: 'Mirā-san wa raishū shiai ni iku to iimashita.',
          meaning: {
            en: 'Mr. Miller said he will go to the game next week.',
            vi: 'Anh Miller nói tuần sau đi xem trận đấu.'
          },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '試', reading: 'し' },
            { base: '合', reading: 'あい' },
            { base: '行', reading: 'い' },
            { base: '言', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form ＋ でしょう',
      highlights: ['でしょう'],
      title: { en: 'Seeking agreement (〜でしょう)', vi: 'Xác nhận (〜でしょう)' },
      explanation: {
        en: 'Plain form + でしょう seeks confirmation about something you both know: 日曜日 映画を 見に 行くでしょう.',
        vi: 'Thể thường + でしょう hỏi xác nhận điều hai bên đều biết: 日曜日 映画を 見に 行くでしょう.'
      },
      explanationRuby: [
        { base: '日', reading: 'にち' },
        { base: '曜', reading: 'よう' },
        { base: '日', reading: 'び' },
        { base: '映', reading: 'えい' },
        { base: '画', reading: 'が' },
        { base: '見', reading: 'み' },
        { base: '行', reading: 'い' }
      ],
      examples: [
        {
          jp: '日曜日 映画を 見に 行くでしょう。',
          romaji: 'Nichiyōbi eiga o mi ni iku deshō.',
          meaning: {
            en: 'You are going to watch a movie on Sunday, right?',
            vi: 'Chủ nhật anh đi xem phim phải không?'
          },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' },
            { base: '見', reading: 'み' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 で N2 が あります',
      highlights: ['で', 'が', 'あります'],
      title: {
        en: 'Events at a place (N で 〜が あります)',
        vi: 'Sự kiện ở địa điểm (N で 〜が あります)'
      },
      explanation: {
        en: 'N1 で N2 が あります states that an event takes place at a location: うちで パーティーが あります.',
        vi: 'N1 で N2 が あります nói sự kiện diễn ra ở nơi nào: うちで パーティーが あります.'
      },
      examples: [
        {
          jp: '明日 雪ちゃんの うちで パーティーが あります。',
          romaji: 'Ashita Yuki-chan no uchi de pātī ga arimasu.',
          meaning: {
            en: "There is a party at Yuki's place tomorrow.",
            vi: 'Ngày mai có tiệc ở nhà Yuki.'
          },
          ruby: [
            { base: '明', reading: 'あ' },
            { base: '日', reading: 'した' },
            { base: '雪', reading: 'ゆき' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson21-news',
      title: { en: 'Talking about the news', vi: 'Bàn về tin tức' },
      lines: [
        {
          jp: '最近 ニュースで 政治について 話しました。',
          romaji: 'Saikin nyūsu de seiji ni tsuite hanashimashita.',
          meaning: {
            en: 'Recently we talked about politics on the news.',
            vi: 'Gần đây trên tin tức chúng tôi nói về chính trị.'
          },
          ruby: [
            { base: '最', reading: 'さい' },
            { base: '近', reading: 'きん' },
            { base: '政', reading: 'せい' },
            { base: '治', reading: 'じ' },
            { base: '話', reading: 'はな' }
          ]
        },
        {
          jp: '私は 交通が 不便だと 思います。でも きっと よく なるでしょう。',
          romaji: 'Watashi wa kōtsū ga fuben da to omoimasu. Demo kitto yoku naru deshō.',
          meaning: {
            en: 'I think traffic is inconvenient. But it will surely get better.',
            vi: 'Tôi nghĩ giao thông bất tiện. Nhưng chắc sẽ tốt hơn.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '交', reading: 'こう' },
            { base: '通', reading: 'つう' },
            { base: '不', reading: 'ふ' },
            { base: '便', reading: 'べん' },
            { base: '思', reading: 'おも' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What topic did they discuss?', vi: 'Họ bàn về gì?' },
          choices: [
            { id: 'a', label: { en: 'Politics', vi: 'Chính trị' } },
            { id: 'b', label: { en: 'Sports only', vi: 'Chỉ thể thao' } },
            { id: 'c', label: { en: 'Food', vi: 'Ẩm thực' } },
            { id: 'd', label: { en: 'Fashion', vi: 'Thời trang' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What does the speaker think about traffic?',
            vi: 'Người nói nghĩ gì về giao thông?'
          },
          choices: [
            { id: 'a', label: { en: 'Inconvenient', vi: 'Bất tiện' } },
            { id: 'b', label: { en: 'Perfect', vi: 'Hoàn hảo' } },
            { id: 'c', label: { en: 'Not mentioned', vi: 'Không nhắc' } },
            { id: 'd', label: { en: 'Too cheap', vi: 'Quá rẻ' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Names in this lesson', vi: 'Tên riêng trong bài' },
      includeInQuiz: false,
      items: [
        {
          kana: 'カンガルー',
          romaji: 'kangarū',
          meaning: { en: 'kangaroo', vi: 'kangaroo' }
        },
        {
          kana: 'キャプテンクック',
          romaji: 'Kyaputen Kukku',
          meaning: { en: 'Captain Cook (1728-79)', vi: 'Captain Cook (1728-79)' }
        }
      ]
    }
  ]
};
