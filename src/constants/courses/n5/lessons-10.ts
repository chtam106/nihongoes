import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 10 (あります/います existence, location に, position の). */
export const n5Lesson10: Lesson = {
  id: 'lesson-10',
  number: 10,
  title: {
    en: 'Things and places',
    vi: 'Sự vật và vị trí'
  },
  focus: {
    en: 'Say what or who exists somewhere with あります/います, and describe where things are with location words.',
    vi: 'Nói cái gì hoặc ai ở đâu bằng あります/います, và mô tả vị trí bằng từ chỉ hướng.'
  },
  vocab: [
    {
      kana: 'あります',
      romaji: 'arimasu',
      meaning: { en: 'to exist, to be (things)', vi: 'có, ở (đồ vật, cây cối)' }
    },
    {
      kana: 'います',
      romaji: 'imasu',
      meaning: { en: 'to exist, to be (people, animals)', vi: 'có, ở (người, động vật)' }
    },
    {
      kana: 'いろいろ [な]',
      romaji: 'iroiro [na]',
      meaning: { en: 'various (na-adj)', vi: 'nhiều loại, đa dạng (tính từ な)' }
    },
    {
      kana: 'おとこの ひと',
      kanji: '男の 人',
      romaji: 'otoko no hito',
      meaning: { en: 'man', vi: 'người đàn ông' },
      ruby: [
        { base: '男', reading: 'おとこ' },
        { base: '人', reading: 'ひと' }
      ]
    },
    {
      kana: 'おんなの ひと',
      kanji: '女の 人',
      romaji: 'onna no hito',
      meaning: { en: 'woman', vi: 'người đàn bà' },
      ruby: [
        { base: '女', reading: 'おんな' },
        { base: '人', reading: 'ひと' }
      ]
    },
    {
      kana: 'おとこの こ',
      kanji: '男の 子',
      romaji: 'otoko no ko',
      meaning: { en: 'boy', vi: 'cậu con trai' },
      ruby: [
        { base: '男', reading: 'おとこ' },
        { base: '子', reading: 'こ' }
      ]
    },
    {
      kana: 'おんなの こ',
      kanji: '女の 子',
      romaji: 'onna no ko',
      meaning: { en: 'girl', vi: 'cô con gái' },
      ruby: [
        { base: '女', reading: 'おんな' },
        { base: '子', reading: 'こ' }
      ]
    },
    {
      kana: 'いぬ',
      kanji: '犬',
      romaji: 'inu',
      meaning: { en: 'dog', vi: 'chó' },
      ruby: [{ base: '犬', reading: 'いぬ' }]
    },
    {
      kana: 'ねこ',
      kanji: '猫',
      romaji: 'neko',
      meaning: { en: 'cat', vi: 'mèo' },
      ruby: [{ base: '猫', reading: 'ねこ' }]
    },
    {
      kana: 'パンダ',
      romaji: 'panda',
      meaning: { en: 'panda', vi: 'gấu trúc' }
    },
    {
      kana: 'ぞう',
      kanji: '象',
      romaji: 'zō',
      meaning: { en: 'elephant', vi: 'voi' },
      ruby: [{ base: '象', reading: 'ぞう' }]
    },
    {
      kana: 'き',
      kanji: '木',
      romaji: 'ki',
      meaning: { en: 'tree, wood', vi: 'cây, gỗ' },
      ruby: [{ base: '木', reading: 'き' }]
    },
    {
      kana: 'もの',
      kanji: '物',
      romaji: 'mono',
      meaning: { en: 'thing', vi: 'vật, đồ vật' },
      ruby: [{ base: '物', reading: 'もの' }]
    },
    {
      kana: 'でんち',
      kanji: '電池',
      romaji: 'denchi',
      meaning: { en: 'battery', vi: 'pin' },
      ruby: [
        { base: '電', reading: 'でん' },
        { base: '池', reading: 'ち' }
      ]
    },
    {
      kana: 'はこ',
      kanji: '箱',
      romaji: 'hako',
      meaning: { en: 'box', vi: 'hộp' },
      ruby: [{ base: '箱', reading: 'はこ' }]
    },
    {
      kana: 'スイッチ',
      romaji: 'suitchi',
      meaning: { en: 'switch', vi: 'công tắc' }
    },
    {
      kana: 'れいぞうこ',
      kanji: '冷蔵庫',
      romaji: 'reizōko',
      meaning: { en: 'refrigerator', vi: 'tủ lạnh' },
      ruby: [
        { base: '冷', reading: 'れい' },
        { base: '蔵', reading: 'ぞう' },
        { base: '庫', reading: 'こ' }
      ]
    },
    {
      kana: 'テーブル',
      romaji: 'tēburu',
      meaning: { en: 'table', vi: 'bàn' }
    },
    {
      kana: 'ベッド',
      romaji: 'beddo',
      meaning: { en: 'bed', vi: 'giường' }
    },
    {
      kana: 'たな',
      kanji: '棚',
      romaji: 'tana',
      meaning: { en: 'shelf', vi: 'giá, kệ' },
      ruby: [{ base: '棚', reading: 'たな' }]
    },
    {
      kana: 'ドア',
      romaji: 'doa',
      meaning: { en: 'door', vi: 'cửa' }
    },
    {
      kana: 'まど',
      kanji: '窓',
      romaji: 'mado',
      meaning: { en: 'window', vi: 'cửa sổ' },
      ruby: [{ base: '窓', reading: 'まど' }]
    },
    {
      kana: 'ポスト',
      romaji: 'posuto',
      meaning: { en: 'mailbox', vi: 'hòm thư' }
    },
    {
      kana: 'ビル',
      romaji: 'biru',
      meaning: { en: 'building', vi: 'tòa nhà' }
    },
    {
      kana: 'ATM',
      romaji: 'ATM',
      meaning: { en: 'ATM', vi: 'máy rút tiền tự động' }
    },
    {
      kana: 'コンビニ',
      romaji: 'konbini',
      meaning: { en: 'convenience store', vi: 'cửa hàng tiện lợi' }
    },
    {
      kana: 'こうえん',
      kanji: '公園',
      romaji: 'kōen',
      meaning: { en: 'park', vi: 'công viên' },
      ruby: [{ base: '公', reading: 'こう' }]
    },
    {
      kana: 'きっさてん',
      kanji: '喫茶店',
      romaji: 'kissaten',
      meaning: { en: 'coffee shop', vi: 'quán cà phê' },
      ruby: [{ base: '喫', reading: 'きっ' }]
    },
    {
      kana: '～や',
      kanji: '～屋',
      romaji: '~ya',
      meaning: { en: '~ shop (suffix)', vi: 'hiệu ~, cửa hàng ~' },
      ruby: [{ base: '屋', reading: 'や' }]
    },
    {
      kana: 'のりば',
      kanji: '乗り場',
      romaji: 'noriba',
      meaning: { en: 'boarding place, stop', vi: 'điểm đón (tắc-xi, tàu...)' },
      ruby: [{ base: '乗', reading: 'の' }]
    },
    {
      kana: 'けん',
      kanji: '県',
      romaji: 'ken',
      meaning: { en: 'prefecture', vi: 'tỉnh' },
      ruby: [{ base: '県', reading: 'けん' }]
    },
    {
      kana: 'うえ',
      kanji: '上',
      romaji: 'ue',
      meaning: { en: 'on, above', vi: 'trên' },
      ruby: [{ base: '上', reading: 'うえ' }]
    },
    {
      kana: 'した',
      kanji: '下',
      romaji: 'shita',
      meaning: { en: 'under, below', vi: 'dưới' },
      ruby: [{ base: '下', reading: 'した' }]
    },
    {
      kana: 'まえ',
      kanji: '前',
      romaji: 'mae',
      meaning: { en: 'front, before', vi: 'trước' },
      ruby: [{ base: '前', reading: 'まえ' }]
    },
    {
      kana: 'うしろ',
      romaji: 'ushiro',
      meaning: { en: 'behind', vi: 'sau' }
    },
    {
      kana: 'みぎ',
      kanji: '右',
      romaji: 'migi',
      meaning: { en: 'right', vi: 'bên phải' },
      ruby: [{ base: '右', reading: 'みぎ' }]
    },
    {
      kana: 'ひだり',
      kanji: '左',
      romaji: 'hidari',
      meaning: { en: 'left', vi: 'bên trái' },
      ruby: [{ base: '左', reading: 'ひだり' }]
    },
    {
      kana: 'なか',
      kanji: '中',
      romaji: 'naka',
      meaning: { en: 'inside', vi: 'trong, giữa' },
      ruby: [{ base: '中', reading: 'なか' }]
    },
    {
      kana: 'そと',
      kanji: '外',
      romaji: 'soto',
      meaning: { en: 'outside', vi: 'ngoài' },
      ruby: [{ base: '外', reading: 'そと' }]
    },
    {
      kana: 'となり',
      kanji: '隣',
      romaji: 'tonari',
      meaning: { en: 'next to', vi: 'bên cạnh' },
      ruby: [{ base: '隣', reading: 'となり' }]
    },
    {
      kana: 'ちかく',
      kanji: '近く',
      romaji: 'chikaku',
      meaning: { en: 'near', vi: 'gần' },
      ruby: [{ base: '近', reading: 'ちか' }]
    },
    {
      kana: 'あいだ',
      kanji: '間',
      romaji: 'aida',
      meaning: { en: 'between', vi: 'ở giữa' },
      ruby: [{ base: '間', reading: 'あい' }]
    },
    {
      kana: '～や ～[など]',
      romaji: '~ya ~[nado]',
      meaning: { en: '~ and ~, [and so on]', vi: '~ và ~, [v.v.]' }
    },
    {
      kana: 'ナンプラー',
      romaji: 'nanpurā',
      meaning: { en: 'fish sauce (nampla)', vi: 'nước mắm' }
    },
    {
      kana: 'コーナー',
      romaji: 'kōnā',
      meaning: { en: 'corner section (in a store)', vi: 'góc, khu vực (trong siêu thị)' }
    }
  ],
  phrases: [
    {
      kana: '[どうも] すみません。',
      romaji: '[Dōmo] sumimasen.',
      meaning: { en: 'Thank you. / Excuse me.', vi: 'Cám ơn. / Xin lỗi.' }
    },
    {
      kana: 'いちばん した',
      kanji: '一番 下',
      romaji: 'Ichiban shita',
      meaning: { en: 'bottommost, on the lowest shelf', vi: 'ở dưới cùng' },
      ruby: [
        { base: '一', reading: 'いち' },
        { base: '番', reading: 'ばん' },
        { base: '下', reading: 'した' }
      ]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson10-store-directions',
      title: { en: 'Finding the supermarket', vi: 'Hỏi đường đến siêu thị' },
      speakers: [
        { id: 'tom', name: 'トム' },
        { id: 'passerby', name: '通行人' }
      ],
      lines: [
        {
          speakerId: 'tom',
          jp: 'すみません。アジアストアは どこですか。',
          romaji: 'Sumimasen. Ajia Sutoa wa doko desu ka.',
          meaning: {
            en: 'Excuse me. Where is Asia Store?',
            vi: 'Xin lỗi. Siêu thị Asia ở đâu ạ?'
          }
        },
        {
          speakerId: 'passerby',
          jp: 'アジアストアですか。あそこに 白い ビルが ありますね。',
          romaji: 'Ajia Sutoa desu ka. Asoko ni shiroi biru ga arimasu ne.',
          meaning: {
            en: 'Asia Store? There is a white building over there, right?',
            vi: 'Siêu thị Asia ấy à? Anh thấy tòa nhà trắng ở đằng kia không?'
          },
          ruby: [{ base: '白', reading: 'しろ' }]
        },
        {
          speakerId: 'passerby',
          jp: 'その ビルの 中に あります。',
          romaji: 'Sono biru no naka ni arimasu.',
          meaning: { en: 'It is inside that building.', vi: 'Ở trong tòa nhà đó.' },
          ruby: [{ base: '中', reading: 'なか' }]
        },
        {
          speakerId: 'tom',
          jp: 'そうですか。どうも すみません。',
          romaji: 'Sō desu ka. Dōmo sumimasen.',
          meaning: { en: 'I see. Thank you very much.', vi: 'Thế ạ. Cám ơn chị.' }
        },
        {
          speakerId: 'passerby',
          jp: 'いいえ。',
          romaji: 'Iie.',
          meaning: { en: 'Not at all.', vi: 'Không có gì.' }
        }
      ]
    },
    {
      id: 'conv-lesson10-nampla',
      title: { en: 'Looking for fish sauce', vi: 'Tìm nước mắm' },
      speakers: [
        { id: 'tom', name: 'トム' },
        { id: 'clerk', name: '店員' }
      ],
      lines: [
        {
          speakerId: 'tom',
          jp: 'すみません。ここに ナンプラーは ありますか。',
          romaji: 'Sumimasen. Koko ni nanpurā wa arimasu ka.',
          meaning: {
            en: 'Excuse me. Is there fish sauce here?',
            vi: 'Chị ơi, ở đây có nước mắm không ạ?'
          }
        },
        {
          speakerId: 'clerk',
          jp: 'はい、あります。あちらに タイの コーナーが あります。',
          romaji: 'Hai, arimasu. Achira ni Tai no kōnā ga arimasu.',
          meaning: {
            en: 'Yes, there is. Over there is a Thai food section.',
            vi: 'Có ạ. Ở đằng kia có góc bán đồ ăn Thái Lan.'
          }
        },
        {
          speakerId: 'clerk',
          jp: 'ナンプラーは 一番 下の 棚に あります。',
          romaji: 'Nanpurā wa ichiban shita no tana ni arimasu.',
          meaning: {
            en: 'Fish sauce is on the bottom shelf.',
            vi: 'Nước mắm ở kệ dưới cùng.'
          },
          ruby: [
            { base: '一', reading: 'いち' },
            { base: '番', reading: 'ばん' },
            { base: '下', reading: 'した' },
            { base: '棚', reading: 'たな' }
          ]
        },
        {
          speakerId: 'tom',
          jp: 'わかりました。ありがとう ございます。',
          romaji: 'Wakarimashita. Arigatō gozaimasu.',
          meaning: { en: 'I understand. Thank you.', vi: 'Tôi biết rồi. Cám ơn chị.' }
        }
      ]
    },
    {
      id: 'conv-lesson10-building',
      title: { en: 'ATM in the building', vi: 'ATM trong tòa nhà' },
      speakers: [
        { id: 'lin', name: 'リン' },
        { id: 'ken', name: 'ケン' }
      ],
      lines: [
        {
          speakerId: 'lin',
          jp: 'この ビルに ATMは ありますか。',
          romaji: 'Kono biru ni ATM wa arimasu ka.',
          meaning: {
            en: 'Is there an ATM in this building?',
            vi: 'Trong tòa nhà này có ATM không?'
          }
        },
        {
          speakerId: 'ken',
          jp: 'はい、2階に あります。',
          romaji: 'Hai, ni-kai ni arimasu.',
          meaning: { en: 'Yes, on the 2nd floor.', vi: 'Có, ở tầng 2.' },
          ruby: [{ base: '階', reading: 'かい' }]
        },
        {
          speakerId: 'lin',
          jp: '事務所は どこですか。',
          romaji: 'Jimusho wa doko desu ka.',
          meaning: { en: 'Where is the office?', vi: 'Văn phòng ở đâu?' },
          ruby: [
            { base: '事', reading: 'じ' },
            { base: '務', reading: 'む' },
            { base: '所', reading: 'しょ' }
          ]
        },
        {
          speakerId: 'ken',
          jp: '3階に あります。木村さんも いますよ。',
          romaji: 'San-kai ni arimasu. Kimura-san mo imasu yo.',
          meaning: {
            en: 'On the 3rd floor. Kimura-san is there too.',
            vi: 'Ở tầng 3. Chị Kimura cũng ở đó nhé.'
          },
          ruby: [
            { base: '階', reading: 'かい' },
            { base: '木', reading: 'き' },
            { base: '村', reading: 'むら' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N が あります / います',
      highlights: ['が', 'あります', 'います'],
      title: { en: 'Existence (あります / います)', vi: 'Sự tồn tại (あります / います)' },
      explanation: {
        en: 'Use あります for things, plants and places. Use います for people and animals. Both mean "there is" or "there are".',
        vi: 'Dùng あります cho đồ vật, cây cối, địa điểm. Dùng います cho người và động vật. Cả hai nghĩa "có" (tồn tại).'
      },
      examples: [
        {
          jp: 'コンビニが あります。',
          romaji: 'Konbini ga arimasu.',
          meaning: { en: 'There is a convenience store.', vi: 'Có cửa hàng tiện lợi.' }
        },
        {
          jp: '公園に 木が あります。',
          romaji: 'Kōen ni ki ga arimasu.',
          meaning: { en: 'There are trees in the park.', vi: 'Trong công viên có cây.' },
          ruby: [
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '木', reading: 'き' }
          ]
        },
        {
          jp: '男の 人が います。',
          romaji: 'Otoko no hito ga imasu.',
          meaning: { en: 'There is a man.', vi: 'Có người đàn ông.' },
          ruby: [
            { base: '男', reading: 'おとこ' },
            { base: '人', reading: 'ひと' }
          ]
        },
        {
          jp: '犬が います。',
          romaji: 'Inu ga imasu.',
          meaning: { en: 'There is a dog.', vi: 'Có con chó.' },
          ruby: [{ base: '犬', reading: 'いぬ' }]
        }
      ]
    },
    {
      pattern: 'Place に N が あります / います',
      highlights: ['に', 'が', 'あります', 'います', '何', 'だれ', 'か'],
      title: { en: 'Something at a place (に)', vi: 'Cái gì ở đâu (に)' },
      explanation: {
        en: 'Add に to mark where something exists. Ask about things with 何が ありますか; ask about people with だれが いますか. Question words take が, not は.',
        vi: 'Thêm に để chỉ nơi có sự vật. Hỏi đồ vật: 何が ありますか; hỏi người: だれが いますか. Từ nghi vấn đi với が, không dùng は.'
      },
      explanationRuby: [
        { base: '何', reading: 'なに' },
        { base: '何', reading: 'なに' }
      ],
      examples: [
        {
          jp: '私の 部屋に 机が あります。',
          romaji: 'Watashi no heya ni tsukue ga arimasu.',
          meaning: { en: 'There is a desk in my room.', vi: 'Trong phòng tôi có bàn.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '机', reading: 'つくえ' }
          ]
        },
        {
          jp: '事務所に ミラーさんが います。',
          romaji: 'Jimusho ni Mirā-san ga imasu.',
          meaning: { en: 'Mr. Miller is in the office.', vi: 'Anh Miller ở văn phòng.' },
          ruby: [
            { base: '事', reading: 'じ' },
            { base: '務', reading: 'む' },
            { base: '所', reading: 'しょ' }
          ]
        },
        {
          jp: '地下に 何が ありますか。',
          romaji: 'Chika ni nani ga arimasu ka.',
          meaning: { en: 'What is in the basement?', vi: 'Ở tầng hầm có cái gì?' },
          dialogueGroup: 'basement',
          ruby: [
            { base: '地', reading: 'ち' },
            { base: '下', reading: 'か' },
            { base: '何', reading: 'なに' }
          ]
        },
        {
          jp: 'レストランが あります。',
          romaji: 'Resutoran ga arimasu.',
          meaning: { en: 'There is a restaurant.', vi: 'Có nhà hàng.' },
          dialogueGroup: 'basement'
        },
        {
          jp: '受付に だれが いますか。',
          romaji: 'Uketsuke ni dare ga imasu ka.',
          meaning: { en: 'Who is at reception?', vi: 'Ở quầy tiếp tân có ai?' },
          dialogueGroup: 'reception',
          ruby: [
            { base: '受', reading: 'う' },
            { base: '付', reading: 'け' }
          ]
        },
        {
          jp: '木村さんが います。',
          romaji: 'Kimura-san ga imasu.',
          meaning: { en: 'Kimura-san is there.', vi: 'Chị Kimura ở đó.' },
          dialogueGroup: 'reception',
          ruby: [
            { base: '木', reading: 'き' },
            { base: '村', reading: 'むら' }
          ]
        }
      ]
    },
    {
      pattern: 'N は Place に あります / います',
      highlights: ['は', 'に', 'あります', 'います', 'どこ', 'か'],
      title: { en: 'Where something is (topic は)', vi: 'Cái đó ở đâu (は làm chủ đề)' },
      explanation: {
        en: 'When the thing or person is already known, mark it with は and state the place with に. Ask where with どこに ありますか / いますか. You can also answer with どこですか from Lesson 3.',
        vi: 'Khi sự vật hoặc người đã rõ, đánh dấu bằng は và nói nơi chốn với に. Hỏi vị trí: どこに ありますか / いますか. Cũng có thể trả lời bằng どこですか (Bài 3).'
      },
      examples: [
        {
          jp: '東京ディズニーランドは 千葉県に あります。',
          romaji: 'Tōkyō Dizunīrando wa Chiba-ken ni arimasu.',
          meaning: {
            en: 'Tokyo Disneyland is in Chiba Prefecture.',
            vi: 'Tokyo Disneyland ở tỉnh Chiba.'
          },
          ruby: [
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '千', reading: 'ち' },
            { base: '葉', reading: 'ば' },
            { base: '県', reading: 'けん' }
          ]
        },
        {
          jp: 'ミラーさんは 事務所に います。',
          romaji: 'Mirā-san wa jimusho ni imasu.',
          meaning: { en: 'Mr. Miller is in the office.', vi: 'Anh Miller ở văn phòng.' },
          ruby: [
            { base: '事', reading: 'じ' },
            { base: '務', reading: 'む' },
            { base: '所', reading: 'しょ' }
          ]
        },
        {
          jp: '東京ディズニーランドは どこに ありますか。',
          romaji: 'Tōkyō Dizunīrando wa doko ni arimasu ka.',
          meaning: { en: 'Where is Tokyo Disneyland?', vi: 'Tokyo Disneyland ở đâu?' },
          dialogueGroup: 'disney',
          ruby: [
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' }
          ]
        },
        {
          jp: '千葉県です。',
          romaji: 'Chiba-ken desu.',
          meaning: { en: 'In Chiba Prefecture.', vi: 'Ở tỉnh Chiba.' },
          dialogueGroup: 'disney',
          ruby: [
            { base: '千', reading: 'ち' },
            { base: '葉', reading: 'ば' },
            { base: '県', reading: 'けん' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 の N2 (position)',
      patternRuby: [
        { base: '上', reading: 'うえ' },
        { base: '下', reading: 'した' },
        { base: '前', reading: 'まえ' },
        { base: '右', reading: 'みぎ' },
        { base: '左', reading: 'ひだり' },
        { base: '中', reading: 'なか' },
        { base: '外', reading: 'そと' },
        { base: '隣', reading: 'となり' },
        { base: '近', reading: 'ちか' },
        { base: '間', reading: 'あい' }
      ],
      highlights: ['の', 'に', 'あります'],
      title: { en: 'Relative position (N1 の N2)', vi: 'Vị trí tương đối (N1 の N2)' },
      explanation: {
        en: 'Use a location noun after の to show position: 机の上 (on the desk), 銀行の隣 (next to the bank). Add に before あります/います. With 近く you can also use で for where an action happened.',
        vi: 'Dùng danh từ vị trí sau の: 机の上 (trên bàn), 銀行の隣 (cạnh ngân hàng). Thêm に trước あります/います. Với 近く có thể dùng で để chỉ nơi hành động xảy ra.'
      },
      explanationRuby: [
        { base: '机', reading: 'つくえ' },
        { base: '上', reading: 'うえ' },
        { base: '銀', reading: 'ぎん' },
        { base: '行', reading: 'こう' },
        { base: '隣', reading: 'となり' },
        { base: '近', reading: 'ちか' }
      ],
      examples: [
        {
          jp: '机の 上に 写真が あります。',
          romaji: 'Tsukue no ue ni shashin ga arimasu.',
          meaning: { en: 'There is a photo on the desk.', vi: 'Trên bàn có ảnh.' },
          ruby: [
            { base: '机', reading: 'つくえ' },
            { base: '上', reading: 'うえ' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' }
          ]
        },
        {
          jp: '郵便局は 銀行の 隣に あります。',
          romaji: 'Yūbinkyoku wa ginkō no tonari ni arimasu.',
          meaning: { en: 'The post office is next to the bank.', vi: 'Bưu điện ở cạnh ngân hàng.' },
          ruby: [
            { base: '郵', reading: 'ゆう' },
            { base: '便', reading: 'びん' },
            { base: '局', reading: 'きょく' },
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '隣', reading: 'となり' }
          ]
        },
        {
          jp: '本屋は 花屋と スーパーの 間に あります。',
          romaji: "Hon'ya wa hanaya to sūpā no aida ni arimasu.",
          meaning: {
            en: 'The bookstore is between the flower shop and the supermarket.',
            vi: 'Hiệu sách ở giữa hiệu hoa và siêu thị.'
          },
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '屋', reading: 'や' },
            { base: '花', reading: 'はな' },
            { base: '屋', reading: 'や' },
            { base: '間', reading: 'あい' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 や N2 [など]',
      highlights: ['や', 'など', 'が', 'あります'],
      title: { en: 'Partial listing (や / など)', vi: 'Liệt kê một phần (や / など)' },
      explanation: {
        en: 'や lists a few examples, not everything (unlike と). Add など after the last item to mean "and things like that".',
        vi: 'や liệt kê vài ví dụ, không phải tất cả (khác と). Thêm など sau mục cuối nghĩa "v.v.".'
      },
      examples: [
        {
          jp: '箱の 中に 手紙や 写真が あります。',
          romaji: 'Hako no naka ni tegami ya shashin ga arimasu.',
          meaning: {
            en: 'There are letters and photos in the box.',
            vi: 'Trong hộp có thư và ảnh.'
          },
          ruby: [
            { base: '箱', reading: 'はこ' },
            { base: '中', reading: 'なか' },
            { base: '手', reading: 'て' },
            { base: '紙', reading: 'がみ' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' }
          ]
        },
        {
          jp: '箱の 中に 手紙や 写真などが あります。',
          romaji: 'Hako no naka ni tegami ya shashin nado ga arimasu.',
          meaning: {
            en: 'There are things like letters and photos in the box.',
            vi: 'Trong hộp có những thứ như thư, ảnh.'
          },
          ruby: [
            { base: '箱', reading: 'はこ' },
            { base: '中', reading: 'なか' },
            { base: '手', reading: 'て' },
            { base: '紙', reading: 'がみ' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' }
          ]
        }
      ]
    },
    {
      pattern: 'N ですか (confirmation)',
      highlights: ['です', 'か'],
      title: { en: 'Confirming what you heard', vi: 'Xác nhận lại điều vừa nghe' },
      explanation: {
        en: 'Repeat the key word from the listener\u0027s question with ですか to confirm before you answer.',
        vi: 'Nhắc lại từ then chốt trong câu hỏi của đối phương kèm ですか để xác nhận trước khi trả lời.'
      },
      examples: [
        {
          jp: 'アジアストアは どこですか。',
          romaji: 'Ajia Sutoa wa doko desu ka.',
          meaning: { en: 'Where is Asia Store?', vi: 'Siêu thị Asia ở đâu?' },
          dialogueGroup: 'confirm-store'
        },
        {
          jp: 'アジアストアですか。あの ビルの 中です。',
          romaji: 'Ajia Sutoa desu ka. Ano biru no naka desu.',
          meaning: {
            en: 'Asia Store? It is in that building.',
            vi: 'Siêu thị Asia ấy à? Ở trong tòa nhà kia.'
          },
          dialogueGroup: 'confirm-store',
          ruby: [{ base: '中', reading: 'なか' }]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson10-park',
      title: { en: 'In the park', vi: 'Trong công viên' },
      lines: [
        {
          jp: '公園に 男の 子と 女の 子が います。',
          romaji: 'Kōen ni otoko no ko to onna no ko ga imasu.',
          meaning: {
            en: 'In the park there are a boy and a girl.',
            vi: 'Trong công viên có cậu bé và cô bé.'
          },
          ruby: [
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '男', reading: 'おとこ' },
            { base: '子', reading: 'こ' },
            { base: '女', reading: 'おんな' },
            { base: '子', reading: 'こ' }
          ]
        },
        {
          jp: '木の 下に 犬が います。猫は いません。',
          romaji: 'Ki no shita ni inu ga imasu. Neko wa imasen.',
          meaning: {
            en: 'Under a tree there is a dog. There is no cat.',
            vi: 'Dưới cây có con chó. Không có mèo.'
          },
          ruby: [
            { base: '木', reading: 'き' },
            { base: '下', reading: 'した' },
            { base: '犬', reading: 'いぬ' },
            { base: '猫', reading: 'ねこ' }
          ]
        },
        {
          jp: 'ベンチの 近くに お年寄りが います。',
          romaji: 'Benchi no chikaku ni otoshiyori ga imasu.',
          meaning: {
            en: 'Near the bench there is an elderly person.',
            vi: 'Gần ghế dài có một cụ già.'
          },
          ruby: [
            { base: '近', reading: 'ちか' },
            { base: '年', reading: 'とし' },
            { base: '寄', reading: 'よ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'Who is in the park?', vi: 'Trong công viên có ai?' },
          choices: [
            { id: 'a', label: { en: 'A boy and a girl', vi: 'Một cậu bé và cô bé' } },
            { id: 'b', label: { en: 'Only a dog', vi: 'Chỉ có chó' } },
            { id: 'c', label: { en: 'A cat and a panda', vi: 'Mèo và gấu trúc' } },
            { id: 'd', label: { en: 'Nobody', vi: 'Không ai' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'Where is the dog?', vi: 'Con chó ở đâu?' },
          choices: [
            { id: 'a', label: { en: 'Under a tree', vi: 'Dưới cây' } },
            { id: 'b', label: { en: 'On the bench', vi: 'Trên ghế dài' } },
            { id: 'c', label: { en: 'Inside a box', vi: 'Trong hộp' } },
            { id: 'd', label: { en: 'Behind the building', vi: 'Sau tòa nhà' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson10-room',
      title: { en: 'My room', vi: 'Phòng của tôi' },
      lines: [
        {
          jp: '私の 部屋に ベッドと 机が あります。',
          romaji: 'Watashi no heya ni beddo to tsukue ga arimasu.',
          meaning: {
            en: 'In my room there are a bed and a desk.',
            vi: 'Trong phòng tôi có giường và bàn.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '机', reading: 'つくえ' }
          ]
        },
        {
          jp: '机の 上に 本や ノートなどが あります。',
          romaji: 'Tsukue no ue ni hon ya nōto nado ga arimasu.',
          meaning: {
            en: 'On the desk there are books, notebooks and so on.',
            vi: 'Trên bàn có sách, vở và v.v.'
          },
          ruby: [
            { base: '机', reading: 'つくえ' },
            { base: '上', reading: 'うえ' },
            { base: '本', reading: 'ほん' }
          ]
        },
        {
          jp: '窓の そとに 木が あります。',
          romaji: 'Mado no soto ni ki ga arimasu.',
          meaning: { en: 'Outside the window there is a tree.', vi: 'Ngoài cửa sổ có cây.' },
          ruby: [
            { base: '窓', reading: 'まど' },
            { base: '木', reading: 'き' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What furniture is in the room?', vi: 'Trong phòng có đồ nội thất gì?' },
          choices: [
            { id: 'a', label: { en: 'A bed and a desk', vi: 'Giường và bàn' } },
            { id: 'b', label: { en: 'A refrigerator', vi: 'Tủ lạnh' } },
            { id: 'c', label: { en: 'Only a shelf', vi: 'Chỉ có kệ' } },
            { id: 'd', label: { en: 'An ATM', vi: 'ATM' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What is on the desk?', vi: 'Trên bàn có gì?' },
          choices: [
            { id: 'a', label: { en: 'Books and notebooks', vi: 'Sách và vở' } },
            { id: 'b', label: { en: 'A dog', vi: 'Con chó' } },
            { id: 'c', label: { en: 'Fish sauce', vi: 'Nước mắm' } },
            { id: 'd', label: { en: 'Nothing', vi: 'Không có gì' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson10-town',
      title: { en: 'Around the station', vi: 'Quanh ga' },
      lines: [
        {
          jp: '駅の 前に コンビニが あります。',
          romaji: 'Eki no mae ni konbini ga arimasu.',
          meaning: {
            en: 'In front of the station there is a convenience store.',
            vi: 'Trước ga có cửa hàng tiện lợi.'
          },
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '前', reading: 'まえ' }
          ]
        },
        {
          jp: '銀行は 郵便局の 隣に あります。',
          romaji: 'Ginkō wa yūbinkyoku no tonari ni arimasu.',
          meaning: { en: 'The bank is next to the post office.', vi: 'Ngân hàng ở cạnh bưu điện.' },
          ruby: [
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '郵', reading: 'ゆう' },
            { base: '便', reading: 'びん' },
            { base: '局', reading: 'きょく' },
            { base: '隣', reading: 'となり' }
          ]
        },
        {
          jp: '公園は 駅の 近くに あります。きのう 子どもが たくさん いました。',
          romaji: 'Kōen wa eki no chikaku ni arimasu. Kinō kodomo ga takusan imashita.',
          meaning: {
            en: 'The park is near the station. Yesterday there were many children.',
            vi: 'Công viên gần ga. Hôm qua có nhiều trẻ em.'
          },
          ruby: [
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '駅', reading: 'えき' },
            { base: '近', reading: 'ちか' },
            { base: '子', reading: 'こ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What is in front of the station?', vi: 'Trước ga có gì?' },
          choices: [
            { id: 'a', label: { en: 'A convenience store', vi: 'Cửa hàng tiện lợi' } },
            { id: 'b', label: { en: 'A post office only', vi: 'Chỉ bưu điện' } },
            { id: 'c', label: { en: 'Tokyo Disneyland', vi: 'Tokyo Disneyland' } },
            { id: 'd', label: { en: 'An elephant', vi: 'Con voi' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'Where is the bank?', vi: 'Ngân hàng ở đâu?' },
          choices: [
            { id: 'a', label: { en: 'Next to the post office', vi: 'Cạnh bưu điện' } },
            { id: 'b', label: { en: 'Inside the park', vi: 'Trong công viên' } },
            { id: 'c', label: { en: 'On the 3rd floor', vi: 'Tầng 3' } },
            { id: 'd', label: { en: 'Behind the school', vi: 'Sau trường' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'Who was at the park yesterday?', vi: 'Hôm qua ở công viên có ai?' },
          choices: [
            { id: 'a', label: { en: 'Many children', vi: 'Nhiều trẻ em' } },
            { id: 'b', label: { en: 'Only cats', vi: 'Chỉ mèo' } },
            { id: 'c', label: { en: 'Nobody', vi: 'Không ai' } },
            { id: 'd', label: { en: 'Mr. Miller', vi: 'Anh Miller' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Inside the house', vi: 'Trong nhà' },
      includeInQuiz: false,
      items: [
        {
          kana: 'げんかん',
          kanji: '玄関',
          romaji: 'genkan',
          meaning: { en: 'entrance', vi: 'cửa ra vào' },
          ruby: [{ base: '玄', reading: 'げん' }]
        },
        {
          kana: 'トイレ',
          romaji: 'toire',
          meaning: { en: 'toilet', vi: 'toilet' }
        },
        {
          kana: 'ふろば',
          kanji: '風呂場',
          romaji: 'furoba',
          meaning: { en: 'bathroom (tub area)', vi: 'phòng tắm' },
          ruby: [{ base: '風', reading: 'ふ' }]
        },
        {
          kana: 'せんめんじょ',
          kanji: '洗面所',
          romaji: 'senmenjo',
          meaning: { en: 'washroom, sink area', vi: 'bồn rửa' },
          ruby: [{ base: '洗', reading: 'せん' }]
        },
        {
          kana: 'だいどころ',
          kanji: '台所',
          romaji: 'daidokoro',
          meaning: { en: 'kitchen', vi: 'bếp' },
          ruby: [{ base: '台', reading: 'だい' }]
        },
        {
          kana: 'しょくどう',
          kanji: '食堂',
          romaji: 'shokudō',
          meaning: { en: 'dining room', vi: 'phòng ăn' },
          ruby: [{ base: '食', reading: 'しょく' }]
        },
        {
          kana: 'いま',
          kanji: '居間',
          romaji: 'ima',
          meaning: { en: 'living room', vi: 'phòng khách' },
          ruby: [{ base: '居', reading: 'い' }]
        },
        {
          kana: 'しんしつ',
          kanji: '寝室',
          romaji: 'shinshitsu',
          meaning: { en: 'bedroom', vi: 'phòng ngủ' },
          ruby: [{ base: '寝', reading: 'しん' }]
        },
        {
          kana: 'ろうか',
          kanji: '廊下',
          romaji: 'rōka',
          meaning: { en: 'hallway', vi: 'hành lang' },
          ruby: [{ base: '廊', reading: 'ろう' }]
        },
        {
          kana: 'ベランダ',
          romaji: 'beranda',
          meaning: { en: 'balcony', vi: 'ban công' }
        }
      ]
    },
    {
      kind: 'steps',
      title: { en: 'Using a Japanese bath', vi: 'Cách dùng phòng tắm Nhật' },
      intro: {
        en: 'In a typical Japanese home the tub is for soaking, not soaping.',
        vi: 'Trong nhà Nhật, bồn tắm để ngâm, không phải để xà phòng trực tiếp.'
      },
      steps: [
        {
          text: {
            en: 'Wash and rinse your body outside the tub first.',
            vi: 'Tắm sạch người bên ngoài bồn trước.'
          }
        },
        {
          text: {
            en: 'Do not use soap or a towel in the tub - soak and relax.',
            vi: 'Không dùng xà phòng hoặc khăn trong bồn - ngâm mình thư giãn.'
          }
        },
        {
          text: {
            en: 'When finished, cover the tub so the next person can reuse the water.',
            vi: 'Ngâm xong đậy nắp bồn để người sau còn dùng.'
          }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Names in this lesson', vi: 'Tên riêng trong bài' },
      includeInQuiz: false,
      items: [
        {
          kana: 'とうきょうディズニーランド',
          kanji: '東京ディズニーランド',
          romaji: 'Tōkyō Dizunīrando',
          meaning: { en: 'Tokyo Disneyland', vi: 'Tokyo Disneyland' },
          ruby: [
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' }
          ]
        },
        {
          kana: 'アジアストア',
          romaji: 'Ajia Sutoa',
          meaning: { en: 'Asia Store (fictional supermarket)', vi: 'Siêu thị Asia (giả định)' }
        },
        {
          kana: 'ちばけん',
          kanji: '千葉県',
          romaji: 'Chiba-ken',
          meaning: { en: 'Chiba Prefecture', vi: 'Tỉnh Chiba' },
          ruby: [
            { base: '千', reading: 'ち' },
            { base: '葉', reading: 'ば' },
            { base: '県', reading: 'けん' }
          ]
        }
      ]
    }
  ]
};
