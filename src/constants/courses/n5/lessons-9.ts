import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 9 (好き/嫌い/上手/下手, が object, から, どうして). */
export const n5Lesson9: Lesson = {
  id: 'lesson-9',
  number: 9,
  title: {
    en: 'Likes and skills',
    vi: 'Sở thích và kỹ năng'
  },
  focus: {
    en: 'Say what you like, dislike, or are good at with が, and give reasons with から and どうして.',
    vi: 'Nói thích, ghét hoặc giỏi việc gì với が, và nêu lý do bằng から và どうして.'
  },
  vocab: [
    {
      kana: 'わかります',
      romaji: 'wakarimasu',
      meaning: { en: 'to understand', vi: 'hiểu, nắm được' }
    },
    {
      kana: 'あります',
      romaji: 'arimasu',
      meaning: { en: 'to have (possession)', vi: 'có (sở hữu)' }
    },
    {
      kana: 'すき [な]',
      kanji: '好き [な]',
      romaji: 'suki [na]',
      meaning: { en: 'to like, fond of (na-adj)', vi: 'thích (tính từ な)' },
      ruby: [{ base: '好', reading: 'す' }]
    },
    {
      kana: 'きらい [な]',
      kanji: '嫌い [な]',
      romaji: 'kirai [na]',
      meaning: { en: 'to dislike (na-adj)', vi: 'ghét, không thích (tính từ な)' },
      ruby: [{ base: '嫌', reading: 'きら' }]
    },
    {
      kana: 'じょうず [な]',
      kanji: '上手 [な]',
      romaji: 'jōzu [na]',
      meaning: { en: 'skillful, good at (na-adj)', vi: 'giỏi, khéo (tính từ な)' },
      ruby: [
        { base: '上', reading: 'じょう' },
        { base: '手', reading: 'ず' }
      ]
    },
    {
      kana: 'へた [な]',
      kanji: '下手 [な]',
      romaji: 'heta [na]',
      meaning: { en: 'unskillful, poor at (na-adj)', vi: 'kém, dở (tính từ な)' },
      ruby: [
        { base: '下', reading: 'へ' },
        { base: '手', reading: 'た' }
      ]
    },
    {
      kana: 'のみもの',
      kanji: '飲み物',
      romaji: 'nomimono',
      meaning: { en: 'drink, beverage', vi: 'đồ uống' },
      ruby: [
        { base: '飲', reading: 'の' },
        { base: '物', reading: 'もの' }
      ]
    },
    {
      kana: 'りょうり',
      kanji: '料理',
      romaji: 'ryōri',
      meaning: {
        en: 'dish, cooking (~を します: to cook)',
        vi: 'món ăn, nấu ăn (~を します: nấu ăn)'
      },
      ruby: [
        { base: '料', reading: 'りょう' },
        { base: '理', reading: 'り' }
      ]
    },
    {
      kana: 'スポーツ',
      romaji: 'supōtsu',
      meaning: {
        en: 'sport (~を します: to play sports)',
        vi: 'thể thao (~を します: chơi thể thao)'
      }
    },
    {
      kana: 'やきゅう',
      kanji: '野球',
      romaji: 'yakyū',
      meaning: {
        en: 'baseball (~を します: to play baseball)',
        vi: 'bóng chày (~を します: chơi bóng chày)'
      },
      ruby: [
        { base: '野', reading: 'や' },
        { base: '球', reading: 'きゅう' }
      ]
    },
    {
      kana: 'ダンス',
      romaji: 'dansu',
      meaning: { en: 'dance (~を します: to dance)', vi: 'nhảy, khiêu vũ (~を します: nhảy)' }
    },
    {
      kana: 'りょこう',
      kanji: '旅行',
      romaji: 'ryokō',
      meaning: {
        en: 'travel, trip (~[を] します: to travel)',
        vi: 'du lịch (~[を] します: đi du lịch)'
      },
      ruby: [{ base: '旅', reading: 'りょ' }]
    },
    {
      kana: 'おんがく',
      kanji: '音楽',
      romaji: 'ongaku',
      meaning: { en: 'music', vi: 'âm nhạc' },
      ruby: [
        { base: '音', reading: 'おん' },
        { base: '楽', reading: 'がく' }
      ]
    },
    {
      kana: 'うた',
      kanji: '歌',
      romaji: 'uta',
      meaning: { en: 'song', vi: 'bài hát' },
      ruby: [{ base: '歌', reading: 'うた' }]
    },
    {
      kana: 'クラシック',
      romaji: 'kurashikku',
      meaning: { en: 'classical music', vi: 'nhạc cổ điển' }
    },
    {
      kana: 'ジャズ',
      romaji: 'jazu',
      meaning: { en: 'jazz', vi: 'nhạc jazz' }
    },
    {
      kana: 'コンサート',
      romaji: 'konsāto',
      meaning: { en: 'concert', vi: 'buổi hòa nhạc' }
    },
    {
      kana: 'カラオケ',
      romaji: 'karaoke',
      meaning: { en: 'karaoke', vi: 'karaoke' }
    },
    {
      kana: 'かぶき',
      kanji: '歌舞伎',
      romaji: 'kabuki',
      meaning: { en: 'kabuki (traditional theater)', vi: 'kabuki (kịch truyền thống Nhật)' },
      ruby: [
        { base: '歌', reading: 'か' },
        { base: '舞', reading: 'ぶ' },
        { base: '伎', reading: 'き' }
      ]
    },
    {
      kana: 'え',
      kanji: '絵',
      romaji: 'e',
      meaning: { en: 'picture, painting', vi: 'tranh, hội họa' },
      ruby: [{ base: '絵', reading: 'え' }]
    },
    {
      kana: 'じ',
      kanji: '字',
      romaji: 'ji',
      meaning: { en: 'character (writing)', vi: 'chữ' },
      ruby: [{ base: '字', reading: 'じ' }]
    },
    {
      kana: 'かんじ',
      kanji: '漢字',
      romaji: 'kanji',
      meaning: { en: 'kanji', vi: 'chữ Hán' },
      ruby: [
        { base: '漢', reading: 'かん' },
        { base: '字', reading: 'じ' }
      ]
    },
    {
      kana: 'ひらがな',
      romaji: 'hiragana',
      meaning: { en: 'hiragana', vi: 'chữ Hiragana' }
    },
    {
      kana: 'カタカナ',
      romaji: 'katakana',
      meaning: { en: 'katakana', vi: 'chữ Katakana' }
    },
    {
      kana: 'ローマじ',
      kanji: 'ローマ字',
      romaji: 'rōmaji',
      meaning: { en: 'romaji', vi: 'chữ La Mã' },
      ruby: [{ base: '字', reading: 'じ' }]
    },
    {
      kana: 'こまかい おかね',
      kanji: '細かい お金',
      romaji: 'komakai okane',
      meaning: { en: 'small change, coins', vi: 'tiền lẻ' },
      ruby: [
        { base: '細', reading: 'こま' },
        { base: '金', reading: 'かね' }
      ]
    },
    {
      kana: 'チケット',
      romaji: 'chiketto',
      meaning: { en: 'ticket', vi: 'vé' }
    },
    {
      kana: 'じかん',
      kanji: '時間',
      romaji: 'jikan',
      meaning: { en: 'time', vi: 'thời gian' },
      ruby: [
        { base: '時', reading: 'じ' },
        { base: '間', reading: 'かん' }
      ]
    },
    {
      kana: 'ようじ',
      kanji: '用事',
      romaji: 'yōji',
      meaning: { en: 'errand, business to attend to', vi: 'việc bận, công chuyện' },
      ruby: [{ base: '用', reading: 'よう' }]
    },
    {
      kana: 'やくそく',
      kanji: '約束',
      romaji: 'yakusoku',
      meaning: {
        en: 'promise, appointment (~[を] します: to promise)',
        vi: 'cuộc hẹn, lời hứa (~[を] します: hứa, hẹn)'
      },
      ruby: [{ base: '約', reading: 'やく' }]
    },
    {
      kana: 'アルバイト',
      romaji: 'arubaito',
      meaning: {
        en: 'part-time job (~を します: to work part-time)',
        vi: 'việc làm thêm (~を します: làm thêm)'
      }
    },
    {
      kana: 'ごしゅじん',
      kanji: 'ご主人',
      romaji: 'goshujin',
      meaning: { en: "someone else's husband", vi: 'chồng (nói về chồng người khác)' },
      ruby: [
        { base: '主', reading: 'しゅ' },
        { base: '人', reading: 'じん' }
      ]
    },
    {
      kana: 'おっと',
      kanji: '夫',
      romaji: 'otto',
      meaning: { en: 'my husband (also 主人)', vi: 'chồng của tôi (cũng 主人)' },
      ruby: [{ base: '夫', reading: 'おっと' }]
    },
    {
      kana: 'おくさん',
      kanji: '奥さん',
      romaji: 'okusan',
      meaning: { en: "someone else's wife", vi: 'vợ (nói về vợ người khác)' },
      ruby: [{ base: '奥', reading: 'おく' }]
    },
    {
      kana: 'つま',
      kanji: '妻',
      romaji: 'tsuma',
      meaning: { en: 'my wife (also 家内)', vi: 'vợ của tôi (cũng 家内)' },
      ruby: [{ base: '妻', reading: 'つま' }]
    },
    {
      kana: 'こども',
      kanji: '子ども',
      romaji: 'kodomo',
      meaning: { en: 'child', vi: 'con cái' },
      ruby: [{ base: '子', reading: 'こ' }]
    },
    {
      kana: 'よく',
      romaji: 'yoku',
      meaning: { en: 'well; often (degree)', vi: 'tốt, rõ; thường (mức độ)' }
    },
    {
      kana: 'だいたい',
      romaji: 'daitai',
      meaning: { en: 'mostly, roughly', vi: 'đại khái, đại thể' }
    },
    {
      kana: 'たくさん',
      romaji: 'takusan',
      meaning: { en: 'many, much', vi: 'nhiều' }
    },
    {
      kana: 'すこし',
      kanji: '少し',
      romaji: 'sukoshi',
      meaning: { en: 'a little', vi: 'một chút, ít' },
      ruby: [{ base: '少', reading: 'すこ' }]
    },
    {
      kana: 'ぜんぜん',
      kanji: '全然',
      romaji: 'zenzen',
      meaning: { en: 'not at all (with negative)', vi: 'hoàn toàn không (với phủ định)' },
      ruby: [{ base: '全', reading: 'ぜん' }]
    },
    {
      kana: 'はやく',
      kanji: '早く',
      romaji: 'hayaku',
      meaning: { en: 'early; quickly', vi: 'sớm; nhanh' },
      ruby: [{ base: '早', reading: 'はや' }]
    },
    {
      kana: '～から',
      romaji: '~kara',
      meaning: { en: 'because ~', vi: 'vì ~' }
    },
    {
      kana: 'どうして',
      romaji: 'dōshite',
      meaning: { en: 'why', vi: 'tại sao' }
    }
  ],
  phrases: [
    {
      kana: 'かしてください。',
      kanji: '貸してください。',
      romaji: 'Kashite kudasai.',
      meaning: { en: 'Please lend it to me.', vi: 'Hãy cho tôi mượn.' },
      ruby: [{ base: '貸', reading: 'か' }]
    },
    {
      kana: 'いいですよ。',
      romaji: 'Ii desu yo.',
      meaning: { en: 'Sure. / That is fine.', vi: 'Được chứ. / Được ạ.' }
    },
    {
      kana: 'ざんねんですが。',
      kanji: '残念ですが。',
      romaji: 'Zannen desu ga.',
      meaning: { en: 'I am sorry, but... / What a pity.', vi: 'Tiếc quá, nhưng... / Đáng tiếc.' },
      ruby: [{ base: '残', reading: 'ざん' }]
    },
    {
      kana: 'ああ。',
      romaji: 'Ā.',
      meaning: { en: 'Oh. / Ah.', vi: 'À. / Ôi.' }
    },
    {
      kana: 'いっしょに いかがですか。',
      romaji: 'Issho ni ikaga desu ka.',
      meaning: { en: 'Would you like to join me?', vi: 'Anh/Chị cùng tôi nhé?' }
    },
    {
      kana: 'ちょっと……',
      romaji: 'Chotto...',
      meaning: {
        en: 'Well... (soft way to decline an invitation)',
        vi: 'Hơi... (từ chối khéo một lời mời)'
      }
    },
    {
      kana: 'だめですか。',
      romaji: 'Dame desu ka.',
      meaning: { en: 'Is it no good? / You cannot?', vi: 'Không được à?' }
    },
    {
      kana: 'また こんど おねがいします。',
      kanji: 'また 今度 お願いします。',
      romaji: 'Mata kondo onegaishimasu.',
      meaning: {
        en: 'Please ask me again another time.',
        vi: 'Hẹn anh/chị dịp khác vậy.'
      },
      ruby: [
        { base: '今', reading: 'こん' },
        { base: '度', reading: 'ど' },
        { base: '願', reading: 'ねが' }
      ]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson9-concert',
      title: { en: 'Concert invitation', vi: 'Mời đi hòa nhạc' },
      speakers: [
        { id: 'tom', name: 'トム' },
        { id: 'yuki', name: 'ユキ' }
      ],
      lines: [
        {
          speakerId: 'tom',
          jp: 'もしもし、ユキさん？ トムです。',
          romaji: 'Moshimoshi, Yuki-san? Tomu desu.',
          meaning: { en: 'Hello, Yuki? This is Tom.', vi: 'Alo, Yuki? Tom đây.' }
        },
        {
          speakerId: 'yuki',
          jp: 'あ、トムさん。こんにちは。',
          romaji: 'A, Tomu-san. Konnichiwa.',
          meaning: { en: 'Oh, Tom. Hello.', vi: 'À, Tom. Chào anh.' }
        },
        {
          speakerId: 'tom',
          jp: 'クラシックの コンサートに いっしょに いかがですか。',
          romaji: 'Kurashikku no konsāto ni issho ni ikaga desu ka.',
          meaning: {
            en: 'Would you like to go to a classical concert with me?',
            vi: 'Chị cùng anh đi buổi hòa nhạc cổ điển nhé?'
          }
        },
        {
          speakerId: 'yuki',
          jp: 'いいですね。いつですか。',
          romaji: 'Ii desu ne. Itsu desu ka.',
          meaning: { en: 'That sounds nice. When is it?', vi: 'Hay đấy. Khi nào ạ?' }
        },
        {
          speakerId: 'tom',
          jp: '来週の 金曜日の 夜です。',
          romaji: 'Raishū no kinyōbi no yoru desu.',
          meaning: { en: 'Friday night next week.', vi: 'Tối thứ Sáu tuần sau.' },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '金', reading: 'きん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '夜', reading: 'よる' }
          ]
        },
        {
          speakerId: 'yuki',
          jp: '金曜日は ちょっと……。',
          romaji: 'Kinyōbi wa chotto...',
          meaning: { en: 'Friday is a bit...', vi: 'Thứ Sáu thì hơi...' },
          ruby: [
            { base: '金', reading: 'きん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          speakerId: 'tom',
          jp: 'だめですか。',
          romaji: 'Dame desu ka.',
          meaning: { en: 'You cannot make it?', vi: 'Không được à?' }
        },
        {
          speakerId: 'yuki',
          jp: '残念ですが、約束が ありますから。',
          romaji: 'Zannen desu ga, yakusoku ga arimasu kara.',
          meaning: {
            en: 'I am sorry, but I already have an appointment.',
            vi: 'Tiếc quá, nhưng tôi có hẹn rồi.'
          },
          ruby: [
            { base: '残', reading: 'ざん' },
            { base: '念', reading: 'ねん' },
            { base: '約', reading: 'やく' },
            { base: '束', reading: 'そく' }
          ]
        },
        {
          speakerId: 'tom',
          jp: 'そうですか。',
          romaji: 'Sō desu ka.',
          meaning: { en: 'I see.', vi: 'Thế à.' }
        },
        {
          speakerId: 'yuki',
          jp: 'また 今度 お願いします。',
          romaji: 'Mata kondo onegaishimasu.',
          meaning: { en: 'Please ask me again another time.', vi: 'Hẹn anh dịp khác vậy.' },
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '度', reading: 'ど' },
            { base: '願', reading: 'ねが' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson9-hobbies',
      title: { en: 'Sports and music', vi: 'Thể thao và âm nhạc' },
      speakers: [
        { id: 'ken', name: 'ケン' },
        { id: 'lin', name: 'リン' }
      ],
      lines: [
        {
          speakerId: 'ken',
          jp: 'リンさんは どんな スポーツが 好きですか。',
          romaji: 'Rin-san wa donna supōtsu ga suki desu ka.',
          meaning: { en: 'Lin, what sports do you like?', vi: 'Lin thích môn thể thao nào?' },
          ruby: [{ base: '好', reading: 'す' }]
        },
        {
          speakerId: 'lin',
          jp: 'テニスが 好きです。ケンさんは？',
          romaji: 'Tenisu ga suki desu. Ken-san wa?',
          meaning: { en: 'I like tennis. How about you, Ken?', vi: 'Tôi thích quần vợt. Còn Ken?' },
          ruby: [{ base: '好', reading: 'す' }]
        },
        {
          speakerId: 'ken',
          jp: 'サッカーが 好きです。音楽は どうですか。',
          romaji: 'Sakkā ga suki desu. Ongaku wa dō desu ka.',
          meaning: {
            en: 'I like soccer. How about music?',
            vi: 'Tôi thích bóng đá. Còn âm nhạc thì sao?'
          },
          ruby: [
            { base: '好', reading: 'す' },
            { base: '音', reading: 'おん' },
            { base: '楽', reading: 'がく' }
          ]
        },
        {
          speakerId: 'lin',
          jp: 'ジャズが 好きです。カラオケは あまり 好きじゃ ありません。',
          romaji: 'Jazu ga suki desu. Karaoke wa amari suki ja arimasen.',
          meaning: {
            en: 'I like jazz. I do not like karaoke very much.',
            vi: 'Tôi thích jazz. Karaoke thì không thích lắm.'
          },
          ruby: [
            { base: '好', reading: 'す' },
            { base: '好', reading: 'す' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson9-skills',
      title: { en: 'Drawing and kanji', vi: 'Vẽ và chữ Hán' },
      speakers: [
        { id: 'mai', name: 'マイ' },
        { id: 'alex', name: 'アレックス' }
      ],
      lines: [
        {
          speakerId: 'mai',
          jp: 'アレックスさんは 絵が 上手ですね。',
          romaji: 'Arekkusu-san wa e ga jōzu desu ne.',
          meaning: { en: 'Alex, you are good at drawing.', vi: 'Alex vẽ giỏi nhỉ.' },
          ruby: [
            { base: '絵', reading: 'え' },
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' }
          ]
        },
        {
          speakerId: 'alex',
          jp: 'いいえ、だいたい 下手です。漢字は 少し わかります。',
          romaji: 'Iie, daitai heta desu. Kanji wa sukoshi wakarimasu.',
          meaning: {
            en: 'No, I am mostly poor at it. I understand kanji a little.',
            vi: 'Không, nhìn chung tôi dở lắm. Chữ Hán thì hiểu một chút.'
          },
          ruby: [
            { base: '下', reading: 'へ' },
            { base: '手', reading: 'た' },
            { base: '漢', reading: 'かん' },
            { base: '字', reading: 'じ' },
            { base: '少', reading: 'すこ' }
          ]
        },
        {
          speakerId: 'mai',
          jp: '日本語の 字は 難しいですから、がんばって ください。',
          romaji: 'Nihongo no ji wa muzukashii desu kara, ganbatte kudasai.',
          meaning: {
            en: 'Japanese characters are difficult, so keep at it.',
            vi: 'Chữ tiếng Nhật khó nên cố lên nhé.'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '字', reading: 'じ' },
            { base: '難', reading: 'むずか' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N が あります / わかります / 好きです / 嫌いです / 上手です / 下手です',
      patternRuby: [
        { base: '好', reading: 'す' },
        { base: '嫌', reading: 'きら' },
        { base: '上', reading: 'じょう' },
        { base: '手', reading: 'ず' },
        { base: '下', reading: 'へ' },
        { base: '手', reading: 'た' }
      ],
      highlights: ['が', 'あります', 'わかります', '好き', '嫌い', '上手', '下手', 'です'],
      title: {
        en: 'Object marker が with certain verbs and adjectives',
        vi: 'Trợ từ が với một số động từ và tính từ'
      },
      explanation: {
        en: 'Verbs such as あります (possession) and わかります, and na-adjectives such as 好き, 嫌い, 上手 and 下手, mark their object with が, not を.',
        vi: 'Các động từ như あります (sở hữu), わかります, và tính từ な như 好き, 嫌い, 上手, 下手 đánh dấu tân ngữ bằng が, không dùng を.'
      },
      explanationRuby: [
        { base: '好', reading: 'す' },
        { base: '嫌', reading: 'きら' },
        { base: '上', reading: 'じょう' },
        { base: '手', reading: 'ず' },
        { base: '下', reading: 'へ' },
        { base: '手', reading: 'た' }
      ],
      examples: [
        {
          jp: 'わたしは イタリア料理が 好きです。',
          romaji: 'Watashi wa Itaria ryōri ga suki desu.',
          meaning: { en: 'I like Italian food.', vi: 'Tôi thích món Ý.' },
          ruby: [
            { base: '料', reading: 'りょう' },
            { base: '理', reading: 'り' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          jp: 'わたしは 日本語が わかります。',
          romaji: 'Watashi wa nihongo ga wakarimasu.',
          meaning: { en: 'I understand Japanese.', vi: 'Tôi hiểu tiếng Nhật.' },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' }
          ]
        },
        {
          jp: 'わたしは 車が あります。',
          romaji: 'Watashi wa kuruma ga arimasu.',
          meaning: { en: 'I have a car.', vi: 'Tôi có xe.' },
          ruby: [{ base: '車', reading: 'くるま' }]
        },
        {
          jp: 'カリナさんは 絵が 上手です。',
          romaji: 'Karina-san wa e ga jōzu desu.',
          meaning: { en: 'Karina is good at drawing.', vi: 'Karina vẽ giỏi.' },
          ruby: [
            { base: '絵', reading: 'え' },
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' }
          ]
        },
        {
          jp: 'お酒が 好きですか。',
          romaji: 'Osake ga suki desu ka.',
          meaning: { en: 'Do you like alcohol?', vi: 'Anh/Chị có thích rượu không?' },
          ruby: [
            { base: '酒', reading: 'さけ' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          jp: 'いいえ、好きじゃ ありません。',
          romaji: 'Iie, suki ja arimasen.',
          meaning: { en: 'No, I do not like it.', vi: 'Không, tôi không thích.' },
          ruby: [{ base: '好', reading: 'す' }]
        }
      ]
    },
    {
      pattern: 'どんな N が 好きですか',
      patternRuby: [{ base: '好', reading: 'す' }],
      highlights: ['どんな', 'が', '好き', 'です', 'か'],
      title: { en: 'What kind of ~ do you like?', vi: 'Thích loại ~ nào?' },
      explanation: {
        en: 'Ask with どんな + noun + が 好きですか. Answer by naming a specific item or category.',
        vi: 'Hỏi bằng どんな + danh từ + が 好きですか. Trả lời bằng cách nêu một mục hoặc loại cụ thể.'
      },
      explanationRuby: [{ base: '好', reading: 'す' }],
      examples: [
        {
          jp: 'どんな スポーツが 好きですか。',
          romaji: 'Donna supōtsu ga suki desu ka.',
          meaning: { en: 'What sports do you like?', vi: 'Anh/Chị thích môn thể thao nào?' },
          ruby: [{ base: '好', reading: 'す' }]
        },
        {
          jp: 'サッカーが 好きです。',
          romaji: 'Sakkā ga suki desu.',
          meaning: { en: 'I like soccer.', vi: 'Tôi thích bóng đá.' },
          ruby: [{ base: '好', reading: 'す' }]
        }
      ]
    },
    {
      pattern: 'よく / だいたい / たくさん / 少し / あまり / 全然',
      patternRuby: [
        { base: '少', reading: 'すこ' },
        { base: '全', reading: 'ぜん' },
        { base: '然', reading: 'ぜん' }
      ],
      highlights: ['よく', 'だいたい', 'たくさん', '少し', 'あまり', '全然'],
      title: { en: 'Degree and quantity adverbs', vi: 'Phó từ mức độ và số lượng' },
      explanation: {
        en: 'Place these adverbs before the verb. よく, だいたい and 少し work in affirmative sentences; あまり and 全然 require a negative verb. たくさん pairs with あります; 少し can modify verbs or adjectives.',
        vi: 'Đặt các phó từ này trước động từ. よく, だいたい, 少し dùng trong câu khẳng định; あまり, 全然 đi với động từ phủ định. たくさん đi với あります; 少し có thể bổ nghĩa cho động từ hoặc tính từ.'
      },
      explanationRuby: [
        { base: '少', reading: 'すこ' },
        { base: '全', reading: 'ぜん' },
        { base: '然', reading: 'ぜん' },
        { base: '少', reading: 'すこ' }
      ],
      examples: [
        {
          jp: '英語が よく わかります。',
          romaji: 'Eigo ga yoku wakarimasu.',
          meaning: { en: 'I understand English well.', vi: 'Tôi hiểu tiếng Anh tốt.' },
          ruby: [
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' }
          ]
        },
        {
          jp: '英語が 少し わかります。',
          romaji: 'Eigo ga sukoshi wakarimasu.',
          meaning: { en: 'I understand English a little.', vi: 'Tôi hiểu tiếng Anh một chút.' },
          ruby: [
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' },
            { base: '少', reading: 'すこ' }
          ]
        },
        {
          jp: '英語が あまり わかりません。',
          romaji: 'Eigo ga amari wakarimasen.',
          meaning: {
            en: 'I do not understand English very much.',
            vi: 'Tôi không hiểu tiếng Anh lắm.'
          },
          ruby: [
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' }
          ]
        },
        {
          jp: 'お金が たくさん あります。',
          romaji: 'Okane ga takusan arimasu.',
          meaning: { en: 'I have a lot of money.', vi: 'Tôi có nhiều tiền.' },
          ruby: [{ base: '金', reading: 'かね' }]
        },
        {
          jp: 'お金が 全然 ありません。',
          romaji: 'Okane ga zenzen arimasen.',
          meaning: { en: 'I do not have any money at all.', vi: 'Tôi hoàn toàn không có tiền.' },
          ruby: [
            { base: '金', reading: 'かね' },
            { base: '全', reading: 'ぜん' },
            { base: '然', reading: 'ぜん' }
          ]
        }
      ]
    },
    {
      pattern: '～から、～',
      highlights: ['から'],
      title: { en: 'Reason with から (mid-sentence)', vi: 'Lý do với から (giữa câu)' },
      explanation: {
        en: 'The clause before から states the reason for what follows. You can also put から at the end of a sentence to give a reason alone.',
        vi: 'Mệnh đề trước から là lý do cho phần sau. Cũng có thể đặt から ở cuối câu để chỉ nêu lý do.'
      },
      examples: [
        {
          jp: '時間が ありませんから、新聞を 読みません。',
          romaji: 'Jikan ga arimasen kara, shinbun o yomimasen.',
          meaning: {
            en: 'Because I do not have time, I do not read the newspaper.',
            vi: 'Vì không có thời gian nên tôi không đọc báo.'
          },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' },
            { base: '新', reading: 'しん' },
            { base: '聞', reading: 'ぶん' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          jp: '毎朝 新聞を 読みますか。',
          romaji: 'Maiasa shinbun o yomimasu ka.',
          meaning: {
            en: 'Do you read the newspaper every morning?',
            vi: 'Anh/Chị có đọc báo hàng sáng không?'
          },
          dialogueGroup: 'morning-paper',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '新', reading: 'しん' },
            { base: '聞', reading: 'ぶん' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          jp: 'いいえ、読みません。時間が ありませんから。',
          romaji: 'Iie, yomimasen. Jikan ga arimasen kara.',
          meaning: {
            en: 'No, I do not. Because I do not have time.',
            vi: 'Không, tôi không đọc. Vì tôi không có thời gian.'
          },
          dialogueGroup: 'morning-paper',
          ruby: [
            { base: '読', reading: 'よ' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' }
          ]
        }
      ]
    },
    {
      pattern: 'どうして',
      highlights: ['どうして', 'から'],
      title: { en: 'Asking why (どうして)', vi: 'Hỏi tại sao (どうして)' },
      explanation: {
        en: 'どうして asks for a reason. Answer with a reason clause ending in から. To ask about something just mentioned, use どうしてですか without repeating the statement.',
        vi: 'どうして hỏi lý do. Trả lời bằng mệnh đề lý do kết thúc bằng から. Hỏi về điều vừa nói, dùng どうしてですか mà không nhắc lại câu.'
      },
      examples: [
        {
          jp: 'どうして 朝 新聞を 読みませんか。',
          romaji: 'Dōshite asa shinbun o yomimasen ka.',
          meaning: {
            en: 'Why do you not read the newspaper in the morning?',
            vi: 'Tại sao anh/chị không đọc báo buổi sáng?'
          },
          ruby: [
            { base: '朝', reading: 'あさ' },
            { base: '新', reading: 'しん' },
            { base: '聞', reading: 'ぶん' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          jp: '時間が ありませんから。',
          romaji: 'Jikan ga arimasen kara.',
          meaning: { en: 'Because I do not have time.', vi: 'Vì tôi không có thời gian.' },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' }
          ]
        },
        {
          jp: 'きょうは 早く 帰ります。',
          romaji: 'Kyō wa hayaku kaerimasu.',
          meaning: { en: 'I will go home early today.', vi: 'Hôm nay tôi về sớm.' },
          dialogueGroup: 'leave-early',
          ruby: [
            { base: '早', reading: 'はや' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          jp: 'どうしてですか。',
          romaji: 'Dōshite desu ka.',
          meaning: { en: 'Why is that?', vi: 'Tại sao vậy?' },
          dialogueGroup: 'leave-early'
        },
        {
          jp: '子どもの 誕生日ですから。',
          romaji: 'Kodomo no tanjōbi desu kara.',
          meaning: {
            en: 'Because it is my child\u0027s birthday.',
            vi: 'Vì hôm nay sinh nhật con tôi.'
          },
          dialogueGroup: 'leave-early',
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '誕', reading: 'たん' },
            { base: '生', reading: 'じょう' },
            { base: '日', reading: 'び' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson9-likes',
      title: { en: 'Weekend hobbies', vi: 'Sở thích cuối tuần' },
      lines: [
        {
          jp: 'わたしは 週末 旅行が 好きです。',
          romaji: 'Watashi wa shūmatsu ryokō ga suki desu.',
          meaning: { en: 'I like traveling on weekends.', vi: 'Tôi thích đi du lịch cuối tuần.' },
          ruby: [
            { base: '週', reading: 'しゅう' },
            { base: '末', reading: 'まつ' },
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          jp: '友だちは スポーツが 好きです。野球を よく します。',
          romaji: 'Tomodachi wa supōtsu ga suki desu. Yakyū o yoku shimasu.',
          meaning: {
            en: 'My friend likes sports. He often plays baseball.',
            vi: 'Bạn tôi thích thể thao. Bạn ấy hay chơi bóng chày.'
          },
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '好', reading: 'す' },
            { base: '野', reading: 'や' },
            { base: '球', reading: 'きゅう' }
          ]
        },
        {
          jp: 'わたしは 野球が あまり 好きじゃ ありません。',
          romaji: 'Watashi wa yakyū ga amari suki ja arimasen.',
          meaning: {
            en: 'I do not like baseball very much.',
            vi: 'Tôi không thích bóng chày lắm.'
          },
          ruby: [
            { base: '野', reading: 'や' },
            { base: '球', reading: 'きゅう' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          jp: 'でも 音楽が 好きです。コンサートに 行きます。',
          romaji: 'Demo ongaku ga suki desu. Konsāto ni ikimasu.',
          meaning: {
            en: 'But I like music. I go to concerts.',
            vi: 'Nhưng tôi thích âm nhạc. Tôi đi nghe hòa nhạc.'
          },
          ruby: [
            { base: '音', reading: 'おん' },
            { base: '楽', reading: 'がく' },
            { base: '好', reading: 'す' },
            { base: '行', reading: 'い' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What does the speaker like on weekends?',
            vi: 'Người nói thích gì vào cuối tuần?'
          },
          choices: [
            { id: 'a', label: { en: 'Travel', vi: 'Du lịch' } },
            { id: 'b', label: { en: 'Baseball', vi: 'Bóng chày' } },
            { id: 'c', label: { en: 'Cooking', vi: 'Nấu ăn' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What sport does the friend often play?',
            vi: 'Bạn thường chơi môn thể thao nào?'
          },
          choices: [
            { id: 'a', label: { en: 'Tennis', vi: 'Quần vợt' } },
            { id: 'b', label: { en: 'Baseball', vi: 'Bóng chày' } },
            { id: 'c', label: { en: 'Soccer', vi: 'Bóng đá' } }
          ],
          correctId: 'b'
        },
        {
          id: 'q3',
          question: {
            en: 'What does the speaker do because they like music?',
            vi: 'Người nói làm gì vì thích âm nhạc?'
          },
          choices: [
            { id: 'a', label: { en: 'Goes to concerts', vi: 'Đi nghe hòa nhạc' } },
            { id: 'b', label: { en: 'Sings karaoke', vi: 'Hát karaoke' } },
            { id: 'c', label: { en: 'Dances', vi: 'Nhảy' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson9-language',
      title: { en: 'Learning Japanese', vi: 'Học tiếng Nhật' },
      lines: [
        {
          jp: 'トムさんは 日本語が 少し わかります。',
          romaji: 'Tomu-san wa nihongo ga sukoshi wakarimasu.',
          meaning: {
            en: 'Tom understands Japanese a little.',
            vi: 'Tom hiểu tiếng Nhật một chút.'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '少', reading: 'すこ' }
          ]
        },
        {
          jp: '漢字は だいたい わかりません。',
          romaji: 'Kanji wa daitai wakarimasen.',
          meaning: {
            en: 'He mostly does not understand kanji.',
            vi: 'Chữ Hán thì đại khái không hiểu.'
          },
          ruby: [
            { base: '漢', reading: 'かん' },
            { base: '字', reading: 'じ' }
          ]
        },
        {
          jp: 'でも ひらがなと カタカナは よく わかります。',
          romaji: 'Demo hiragana to katakana wa yoku wakarimasu.',
          meaning: {
            en: 'But he understands hiragana and katakana well.',
            vi: 'Nhưng hiragana và katakana thì hiểu tốt.'
          }
        },
        {
          jp: '毎日 アルバイトの あと、30分 漢字を 勉強します。',
          romaji: 'Mainichi arubaito no ato, sanjuppun kanji o benkyō shimasu.',
          meaning: {
            en: 'Every day after his part-time job, he studies kanji for 30 minutes.',
            vi: 'Mỗi ngày sau ca làm thêm, anh ấy học chữ Hán 30 phút.'
          },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '分', reading: 'ぷん' },
            { base: '漢', reading: 'かん' },
            { base: '字', reading: 'じ' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'How well does Tom understand Japanese overall?',
            vi: 'Tom hiểu tiếng Nhật mức nào?'
          },
          choices: [
            { id: 'a', label: { en: 'A little', vi: 'Một chút' } },
            { id: 'b', label: { en: 'Very well', vi: 'Rất tốt' } },
            { id: 'c', label: { en: 'Not at all', vi: 'Hoàn toàn không' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'Which script does Tom understand well?',
            vi: 'Tom hiểu loại chữ nào tốt?'
          },
          choices: [
            { id: 'a', label: { en: 'Kanji', vi: 'Chữ Hán' } },
            { id: 'b', label: { en: 'Hiragana and katakana', vi: 'Hiragana và katakana' } },
            { id: 'c', label: { en: 'Romaji only', vi: 'Chỉ romaji' } }
          ],
          correctId: 'b'
        }
      ]
    },
    {
      id: 'reading-lesson9-early',
      title: { en: 'Leaving early', vi: 'Về sớm' },
      lines: [
        {
          jp: 'きょう マイさんは 4時に 帰ります。',
          romaji: 'Kyō Mai-san wa yo-ji ni kaerimasu.',
          meaning: { en: 'Mai is going home at 4 today.', vi: 'Hôm nay Mai về lúc 4 giờ.' },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          jp: 'どうして 早く 帰るんですか。',
          romaji: 'Dōshite hayaku kaerun desu ka.',
          meaning: { en: 'Why are you going home early?', vi: 'Sao về sớm vậy?' },
          ruby: [
            { base: '早', reading: 'はや' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          jp: '子どもの 誕生日ですから、ケーキを 買います。',
          romaji: 'Kodomo no tanjōbi desu kara, kēki o kaimasu.',
          meaning: {
            en: 'Because it is my child\u0027s birthday, I am buying a cake.',
            vi: 'Vì sinh nhật con nên tôi mua bánh.'
          },
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '誕', reading: 'たん' },
            { base: '生', reading: 'じょう' },
            { base: '日', reading: 'び' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          jp: 'あ、そうですか。お子さん、おめでとう ございます。',
          romaji: 'A, sō desu ka. Okosan, omedetō gozaimasu.',
          meaning: {
            en: 'Oh, I see. Congratulations to your child.',
            vi: 'À, thế à. Chúc mừng con chị.'
          },
          ruby: [{ base: '子', reading: 'こ' }]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'Why does Mai leave early?',
            vi: 'Mai về sớm vì sao?'
          },
          choices: [
            { id: 'a', label: { en: 'Her child\u0027s birthday', vi: 'Sinh nhật con' } },
            { id: 'b', label: { en: 'She has no time', vi: 'Không có thời gian' } },
            { id: 'c', label: { en: 'She dislikes work', vi: 'Ghét công việc' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What does Mai buy on the way home?',
            vi: 'Mai mua gì trên đường về?'
          },
          choices: [
            { id: 'a', label: { en: 'A ticket', vi: 'Vé' } },
            { id: 'b', label: { en: 'A cake', vi: 'Bánh' } },
            { id: 'c', label: { en: 'A newspaper', vi: 'Báo' } }
          ],
          correctId: 'b'
        },
        {
          id: 'q3',
          question: {
            en: 'What time does Mai go home today?',
            vi: 'Mai về lúc mấy giờ hôm nay?'
          },
          choices: [
            { id: 'a', label: { en: '4 o\u0027clock', vi: '4 giờ' } },
            { id: 'b', label: { en: '6 o\u0027clock', vi: '6 giờ' } },
            { id: 'c', label: { en: '8 o\u0027clock', vi: '8 giờ' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Music genres', vi: 'Thể loại âm nhạc' },
      includeInQuiz: false,
      items: [
        { kana: 'ポップス', romaji: 'poppusu', meaning: { en: 'pop music', vi: 'nhạc pop' } },
        { kana: 'ロック', romaji: 'rokku', meaning: { en: 'rock', vi: 'nhạc rock' } },
        { kana: 'ジャズ', romaji: 'jazu', meaning: { en: 'jazz', vi: 'nhạc jazz' } },
        { kana: 'ラテン', romaji: 'raten', meaning: { en: 'Latin music', vi: 'nhạc Latin' } },
        {
          kana: 'クラシック',
          romaji: 'kurashikku',
          meaning: { en: 'classical', vi: 'nhạc cổ điển' }
        },
        {
          kana: 'みんよう',
          kanji: '民謡',
          romaji: 'minyō',
          meaning: { en: 'folk song', vi: 'dân ca' },
          ruby: [{ base: '民', reading: 'みん' }]
        },
        {
          kana: 'えんか',
          kanji: '演歌',
          romaji: 'enka',
          meaning: { en: 'enka (ballad)', vi: 'enka (dòng nhạc Nhật)' },
          ruby: [{ base: '演', reading: 'えん' }]
        },
        { kana: 'ミュージカル', romaji: 'myūjikaru', meaning: { en: 'musical', vi: 'nhạc kịch' } },
        { kana: 'オペラ', romaji: 'opera', meaning: { en: 'opera', vi: 'opera' } }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Film genres', vi: 'Thể loại phim' },
      includeInQuiz: false,
      items: [
        { kana: 'SF', romaji: 'SF', meaning: { en: 'science fiction', vi: 'khoa học viễn tưởng' } },
        { kana: 'ホラー', romaji: 'horā', meaning: { en: 'horror', vi: 'kinh dị' } },
        { kana: 'アニメ', romaji: 'anime', meaning: { en: 'animation', vi: 'hoạt hình' } },
        {
          kana: 'ドキュメンタリー',
          romaji: 'dokyumentarī',
          meaning: { en: 'documentary', vi: 'tài liệu' }
        },
        {
          kana: 'れんあい',
          kanji: '恋愛',
          romaji: 'renai',
          meaning: { en: 'romance', vi: 'tình cảm' },
          ruby: [{ base: '恋', reading: 'れん' }]
        },
        { kana: 'ミステリー', romaji: 'misuterī', meaning: { en: 'mystery', vi: 'bí ẩn' } },
        {
          kana: 'ぶんげい',
          kanji: '文芸',
          romaji: 'bungē',
          meaning: { en: 'literary drama', vi: 'văn nghệ' },
          ruby: [{ base: '文', reading: 'ぶん' }]
        },
        {
          kana: 'せんそう',
          kanji: '戦争',
          romaji: 'sensō',
          meaning: { en: 'war', vi: 'chiến tranh' },
          ruby: [{ base: '戦', reading: 'せん' }]
        },
        { kana: 'アクション', romaji: 'akushon', meaning: { en: 'action', vi: 'hành động' } },
        {
          kana: 'きげき',
          kanji: '喜劇',
          romaji: 'kigeki',
          meaning: { en: 'comedy', vi: 'hài kịch' },
          ruby: [{ base: '喜', reading: 'き' }]
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Sports', vi: 'Thể thao' },
      includeInQuiz: false,
      items: [
        {
          kana: 'ソフトボール',
          romaji: 'sotobōru',
          meaning: { en: 'softball', vi: 'softball' }
        },
        { kana: 'サッカー', romaji: 'sakkā', meaning: { en: 'soccer', vi: 'bóng đá' } },
        { kana: 'ラグビー', romaji: 'ragubī', meaning: { en: 'rugby', vi: 'bóng bầu dục' } },
        {
          kana: 'バレーボール',
          romaji: 'barēbōru',
          meaning: { en: 'volleyball', vi: 'bóng chuyền' }
        },
        {
          kana: 'バスケットボール',
          romaji: 'basukettobōru',
          meaning: { en: 'basketball', vi: 'bóng rổ' }
        },
        { kana: 'テニス', romaji: 'tenisu', meaning: { en: 'tennis', vi: 'quần vợt' } },
        { kana: 'ボウリング', romaji: 'bōringu', meaning: { en: 'bowling', vi: 'bowling' } },
        { kana: 'スキー', romaji: 'sukī', meaning: { en: 'skiing', vi: 'trượt tuyết' } },
        { kana: 'スケート', romaji: 'sukēto', meaning: { en: 'skating', vi: 'trượt băng' } },
        {
          kana: 'やきゅう',
          kanji: '野球',
          romaji: 'yakyū',
          meaning: { en: 'baseball', vi: 'bóng chày' },
          ruby: [
            { base: '野', reading: 'や' },
            { base: '球', reading: 'きゅう' }
          ]
        },
        {
          kana: 'たっきゅう',
          kanji: '卓球',
          romaji: 'takkyū',
          meaning: { en: 'table tennis', vi: 'bóng bàn' },
          ruby: [
            { base: '卓', reading: 'たっ' },
            { base: '球', reading: 'きゅう' }
          ]
        },
        { kana: 'ピンポン', romaji: 'pinpon', meaning: { en: 'ping-pong', vi: 'bóng bàn' } },
        {
          kana: 'すもう',
          kanji: '相撲',
          romaji: 'sumō',
          meaning: { en: 'sumo', vi: 'sumo' },
          ruby: [{ base: '相', reading: 'す' }]
        },
        {
          kana: 'じゅうどう',
          kanji: '柔道',
          romaji: 'jūdō',
          meaning: { en: 'judo', vi: 'judo' },
          ruby: [{ base: '柔', reading: 'じゅう' }]
        },
        {
          kana: 'けんどう',
          kanji: '剣道',
          romaji: 'kendō',
          meaning: { en: 'kendo', vi: 'kendo' },
          ruby: [{ base: '剣', reading: 'けん' }]
        },
        {
          kana: 'すいえい',
          kanji: '水泳',
          romaji: 'suiei',
          meaning: { en: 'swimming', vi: 'bơi lội' },
          ruby: [
            { base: '水', reading: 'すい' },
            { base: '泳', reading: 'えい' }
          ]
        }
      ]
    }
  ]
};
