import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 12 (past tense, より, どちら, いちばん). */
export const n5Lesson12: Lesson = {
  id: 'lesson-12',
  number: 12,
  title: {
    en: 'Past tense and comparisons',
    vi: 'Quá khứ và so sánh'
  },
  focus: {
    en: 'Talk about the past with でした and 〜かったです, compare two things with より and どちら, and pick the best with いちばん.',
    vi: 'Nói quá khứ với でした và 〜かったです, so sánh hai thứ bằng より và どちら, chọn nhất với いちばん.'
  },
  vocab: [
    {
      kana: 'かんたん [な]',
      kanji: '簡単 [な]',
      romaji: 'kantan [na]',
      meaning: { en: 'simple, easy (na-adj)', vi: 'đơn giản, dễ (tính từ な)' },
      ruby: [{ base: '簡', reading: 'かん' }]
    },
    {
      kana: 'ちかい',
      kanji: '近い',
      romaji: 'chikai',
      meaning: { en: 'near, close', vi: 'gần' },
      ruby: [{ base: '近', reading: 'ちか' }]
    },
    {
      kana: 'とおい',
      kanji: '遠い',
      romaji: 'tōi',
      meaning: { en: 'far, distant', vi: 'xa' },
      ruby: [{ base: '遠', reading: 'とお' }]
    },
    {
      kana: 'はやい',
      kanji: '速い、早い',
      romaji: 'hayai',
      meaning: { en: 'fast; early', vi: 'nhanh; sớm' },
      ruby: [
        { base: '速', reading: 'はや' },
        { base: '早', reading: 'はや' }
      ]
    },
    {
      kana: 'おそい',
      kanji: '遅い',
      romaji: 'osoi',
      meaning: { en: 'slow; late', vi: 'chậm; muộn' },
      ruby: [{ base: '遅', reading: 'おそ' }]
    },
    {
      kana: 'おおい [ひとが～]',
      kanji: '多い [人が～]',
      romaji: 'ōi [hito ga ~]',
      meaning: { en: 'many (people)', vi: 'nhiều (người)' },
      ruby: [{ base: '多', reading: 'おお' }]
    },
    {
      kana: 'すくない [ひとが～]',
      kanji: '少ない [人が～]',
      romaji: 'sukunai [hito ga ~]',
      meaning: { en: 'few (people)', vi: 'ít (người)' },
      ruby: [{ base: '少', reading: 'すく' }]
    },
    {
      kana: 'あたたかい',
      kanji: '暖かい、温かい',
      romaji: 'atatakai',
      meaning: { en: 'warm', vi: 'ấm' },
      ruby: [
        { base: '暖', reading: 'あたた' },
        { base: '温', reading: 'あたた' }
      ]
    },
    {
      kana: 'すずしい',
      kanji: '涼しい',
      romaji: 'suzushii',
      meaning: { en: 'cool (weather)', vi: 'mát (thời tiết)' },
      ruby: [{ base: '涼', reading: 'すず' }]
    },
    {
      kana: 'あまい',
      kanji: '甘い',
      romaji: 'amai',
      meaning: { en: 'sweet', vi: 'ngọt' },
      ruby: [{ base: '甘', reading: 'あま' }]
    },
    {
      kana: 'からい',
      kanji: '辛い',
      romaji: 'karai',
      meaning: { en: 'spicy, hot (food)', vi: 'cay' },
      ruby: [{ base: '辛', reading: 'から' }]
    },
    {
      kana: 'おもい',
      kanji: '重い',
      romaji: 'omoi',
      meaning: { en: 'heavy', vi: 'nặng' },
      ruby: [{ base: '重', reading: 'おも' }]
    },
    {
      kana: 'かるい',
      kanji: '軽い',
      romaji: 'karui',
      meaning: { en: 'light (weight)', vi: 'nhẹ' },
      ruby: [{ base: '軽', reading: 'かる' }]
    },
    {
      kana: 'いい [コーヒーが～]',
      romaji: 'ii [kōhī ga ~]',
      meaning: {
        en: 'good (choose or prefer, e.g. coffee)',
        vi: 'tốt, chọn, dùng (vd. cà phê)'
      }
    },
    {
      kana: 'きせつ',
      kanji: '季節',
      romaji: 'kisetsu',
      meaning: { en: 'season', vi: 'mùa' },
      ruby: [{ base: '季', reading: 'き' }]
    },
    {
      kana: 'はる',
      kanji: '春',
      romaji: 'haru',
      meaning: { en: 'spring', vi: 'mùa xuân' },
      ruby: [{ base: '春', reading: 'はる' }]
    },
    {
      kana: 'なつ',
      kanji: '夏',
      romaji: 'natsu',
      meaning: { en: 'summer', vi: 'mùa hè' },
      ruby: [{ base: '夏', reading: 'なつ' }]
    },
    {
      kana: 'あき',
      kanji: '秋',
      romaji: 'aki',
      meaning: { en: 'autumn', vi: 'mùa thu' },
      ruby: [{ base: '秋', reading: 'あき' }]
    },
    {
      kana: 'ふゆ',
      kanji: '冬',
      romaji: 'fuyu',
      meaning: { en: 'winter', vi: 'mùa đông' },
      ruby: [{ base: '冬', reading: 'ふゆ' }]
    },
    {
      kana: 'てんき',
      kanji: '天気',
      romaji: 'tenki',
      meaning: { en: 'weather', vi: 'thời tiết' },
      ruby: [
        { base: '天', reading: 'てん' },
        { base: '気', reading: 'き' }
      ]
    },
    {
      kana: 'あめ',
      kanji: '雨',
      romaji: 'ame',
      meaning: { en: 'rain', vi: 'mưa' },
      ruby: [{ base: '雨', reading: 'あめ' }]
    },
    {
      kana: 'ゆき',
      kanji: '雪',
      romaji: 'yuki',
      meaning: { en: 'snow', vi: 'tuyết' },
      ruby: [{ base: '雪', reading: 'ゆき' }]
    },
    {
      kana: 'くもり',
      kanji: '曇り',
      romaji: 'kumori',
      meaning: { en: 'cloudy', vi: 'có mây, u ám' },
      ruby: [{ base: '曇', reading: 'くも' }]
    },
    {
      kana: 'ホテル',
      romaji: 'hoteru',
      meaning: { en: 'hotel', vi: 'khách sạn' }
    },
    {
      kana: 'くうこう',
      kanji: '空港',
      romaji: 'kūkō',
      meaning: { en: 'airport', vi: 'sân bay' },
      ruby: [
        { base: '空', reading: 'くう' },
        { base: '港', reading: 'こう' }
      ]
    },
    {
      kana: 'うみ',
      kanji: '海',
      romaji: 'umi',
      meaning: { en: 'sea, ocean', vi: 'biển, đại dương' },
      ruby: [{ base: '海', reading: 'うみ' }]
    },
    {
      kana: 'せかい',
      kanji: '世界',
      romaji: 'sekai',
      meaning: { en: 'world', vi: 'thế giới' },
      ruby: [
        { base: '世', reading: 'せ' },
        { base: '界', reading: 'かい' }
      ]
    },
    {
      kana: 'パーティー',
      romaji: 'pātī',
      meaning: { en: 'party (～を します: hold a party)', vi: 'tiệc (～を します: tổ chức tiệc)' }
    },
    {
      kana: 'おまつり',
      kanji: 'お祭り',
      romaji: 'omatsuri',
      meaning: { en: 'festival', vi: 'lễ hội' },
      ruby: [{ base: '祭', reading: 'まつ' }]
    },
    {
      kana: 'すきやき',
      kanji: 'すき焼き',
      romaji: 'sukiyaki',
      meaning: { en: 'sukiyaki (beef hot pot)', vi: 'lẩu thịt bò sukiyaki' },
      ruby: [{ base: '焼', reading: 'や' }]
    },
    {
      kana: 'さしみ',
      kanji: '刺身',
      romaji: 'sashimi',
      meaning: { en: 'sashimi (raw fish)', vi: 'sashimi, gỏi cá sống' },
      ruby: [
        { base: '刺', reading: 'さ' },
        { base: '身', reading: 'し' }
      ]
    },
    {
      kana: 'おすし',
      romaji: 'osushi',
      meaning: { en: 'sushi', vi: 'sushi' }
    },
    {
      kana: 'てんぷら',
      romaji: 'tenpura',
      meaning: { en: 'tempura', vi: 'tempura, tôm rau chiên' }
    },
    {
      kana: 'ぶたにく',
      kanji: '豚肉',
      romaji: 'butaniku',
      meaning: { en: 'pork', vi: 'thịt heo, thịt lợn' },
      ruby: [
        { base: '豚', reading: 'ぶた' },
        { base: '肉', reading: 'にく' }
      ]
    },
    {
      kana: 'とりにく',
      kanji: 'とり肉',
      romaji: 'toriniku',
      meaning: { en: 'chicken (meat)', vi: 'thịt gà' },
      ruby: [{ base: '肉', reading: 'にく' }]
    },
    {
      kana: 'ぎゅうにく',
      kanji: '牛肉',
      romaji: 'gyūniku',
      meaning: { en: 'beef', vi: 'thịt bò' },
      ruby: [
        { base: '牛', reading: 'ぎゅう' },
        { base: '肉', reading: 'にく' }
      ]
    },
    {
      kana: 'レモン',
      romaji: 'remon',
      meaning: { en: 'lemon', vi: 'chanh' }
    },
    {
      kana: 'いけばな',
      kanji: '生け花',
      romaji: 'ikebana',
      meaning: {
        en: 'flower arranging (～を します: do ikebana)',
        vi: 'cắm hoa (～を します: cắm hoa)'
      },
      ruby: [
        { base: '生', reading: 'い' },
        { base: '花', reading: 'け' }
      ]
    },
    {
      kana: 'もみじ',
      kanji: '紅葉',
      romaji: 'momiji',
      meaning: { en: 'red maple leaves', vi: 'lá đỏ, lá phong' },
      ruby: [{ base: '紅', reading: 'もみ' }]
    },
    {
      kana: 'どちら',
      romaji: 'dochira',
      meaning: { en: 'which (of two)', vi: 'cái nào (trong hai)' }
    },
    {
      kana: 'どちらも',
      romaji: 'dochira mo',
      meaning: { en: 'both (of two)', vi: 'cả hai' }
    },
    {
      kana: 'いちばん',
      kanji: '一番',
      romaji: 'ichiban',
      meaning: { en: 'most, best, number one', vi: 'nhất, đầu tiên' },
      ruby: [
        { base: '一', reading: 'いち' },
        { base: '番', reading: 'ばん' }
      ]
    },
    {
      kana: 'ずっと',
      romaji: 'zutto',
      meaning: { en: 'much more, by far', vi: 'hơn hẳn, suốt' }
    },
    {
      kana: 'はじめて',
      kanji: '初めて',
      romaji: 'hajimete',
      meaning: { en: 'for the first time', vi: 'lần đầu tiên' },
      ruby: [{ base: '初', reading: 'はじ' }]
    }
  ],
  phrases: [
    {
      kana: 'ただいま。',
      romaji: 'Tadaima.',
      meaning: {
        en: 'I am home. (said when arriving home)',
        vi: 'Tôi về rồi. (nói khi về nhà)'
      }
    },
    {
      kana: 'おかえりなさい。',
      kanji: 'お帰りなさい。',
      romaji: 'Okaerinasai.',
      meaning: {
        en: 'Welcome back. (to someone returning home)',
        vi: 'Anh/Chị về rồi đấy à. (nói với người vừa về nhà)'
      },
      ruby: [{ base: '帰', reading: 'かえ' }]
    },
    {
      kana: 'わあ、すごい 人ですね。',
      kanji: 'わあ、すごい 人ですね。',
      romaji: 'Wā, sugoi hito desu ne.',
      meaning: { en: 'Wow, what a crowd!', vi: 'Ôi, đông người quá nhỉ!' },
      ruby: [{ base: '人', reading: 'ひと' }]
    },
    {
      kana: 'つかれました。',
      kanji: '疲れました。',
      romaji: 'Tsukaremashita.',
      meaning: { en: 'I am tired.', vi: 'Tôi mệt rồi.' },
      ruby: [{ base: '疲', reading: 'つか' }]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson12-gion',
      title: { en: 'How was the Gion Festival?', vi: 'Lễ hội Gion thế nào?' },
      speakers: [
        { id: 'miller', name: 'ミラー' },
        { id: 'manager', name: '部長' }
      ],
      lines: [
        {
          speakerId: 'miller',
          jp: 'ただいま。',
          romaji: 'Tadaima.',
          meaning: { en: 'I am home.', vi: 'Cháu về rồi đây.' }
        },
        {
          speakerId: 'manager',
          jp: 'おかえりなさい。',
          romaji: 'Okaerinasai.',
          meaning: { en: 'Welcome back.', vi: 'Anh về rồi đấy à.' }
        },
        {
          speakerId: 'miller',
          jp: 'これ、京都の おみやげです。',
          romaji: 'Kore, Kyōto no omiyage desu.',
          meaning: { en: 'This is a souvenir from Kyoto.', vi: 'Đây là quà Kyoto ạ.' },
          ruby: [
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' }
          ]
        },
        {
          speakerId: 'manager',
          jp: 'どうも ありがとう。祇園祭は どうでしたか。',
          romaji: 'Dōmo arigatō. Gion Matsuri wa dō deshita ka.',
          meaning: {
            en: 'Thank you. How was the Gion Festival?',
            vi: 'Cám ơn cháu. Lễ hội Gion thế nào?'
          },
          ruby: [
            { base: '祇', reading: 'ぎ' },
            { base: '園', reading: 'おん' },
            { base: '祭', reading: 'まつ' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'おもしろかったです。とても にぎやかでした。',
          romaji: 'Omoshirokatta desu. Totemo nigiyaka deshita.',
          meaning: {
            en: 'It was interesting. It was very lively.',
            vi: 'Thú vị ạ. Rất náo nhiệt.'
          }
        },
        {
          speakerId: 'manager',
          jp: '祇園祭は 京都の お祭りの 中で いちばん ゆうめいですからね。',
          romaji: 'Gion Matsuri wa Kyōto no omatsuri no naka de ichiban yūmei desu kara ne.',
          meaning: {
            en: 'The Gion Festival is the most famous festival in Kyoto, you know.',
            vi: 'Lễ hội Gion nổi tiếng nhất trong các lễ hội ở Kyoto mà.'
          },
          ruby: [
            { base: '祇', reading: 'ぎ' },
            { base: '園', reading: 'おん' },
            { base: '祭', reading: 'まつ' },
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '祭', reading: 'まつ' },
            { base: '中', reading: 'なか' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'そうですか。写真を たくさん とりました。こちら、どうぞ。',
          romaji: 'Sō desu ka. Shashin o takusan torimashita. Kochira, dōzo.',
          meaning: {
            en: 'Is that so? I took many photos. Here, please look.',
            vi: 'Thế ạ. Cháu chụp rất nhiều ảnh. Đây này bác.'
          },
          ruby: [
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' }
          ]
        },
        {
          speakerId: 'manager',
          jp: 'わあ、すごい 人ですね。',
          romaji: 'Wā, sugoi hito desu ne.',
          meaning: { en: 'Wow, what a crowd!', vi: 'Ôi, đông người quá nhỉ!' },
          ruby: [{ base: '人', reading: 'ひと' }]
        },
        {
          speakerId: 'miller',
          jp: 'ええ。少し つかれました。',
          romaji: 'Ee. Sukoshi tsukaremashita.',
          meaning: { en: 'Yes. I am a little tired.', vi: 'Vâng. Cháu hơi mệt ạ.' },
          ruby: [{ base: '少', reading: 'すこ' }]
        }
      ]
    },
    {
      id: 'conv-lesson12-airport',
      title: { en: 'Bus or train to the airport', vi: 'Xe buýt hay tàu đi sân bay' },
      speakers: [
        { id: 'yuki', name: 'ユキ' },
        { id: 'tom', name: 'トム' }
      ],
      lines: [
        {
          speakerId: 'yuki',
          jp: '空港まで バスと 電車と どちらが はやいですか。',
          romaji: 'Kūkō made basu to densha to dochira ga hayai desu ka.',
          meaning: {
            en: 'To the airport, which is faster, the bus or the train?',
            vi: 'Đến sân bay thì xe buýt và tàu điện, cái nào nhanh hơn?'
          },
          ruby: [
            { base: '空', reading: 'くう' },
            { base: '港', reading: 'こう' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' }
          ]
        },
        {
          speakerId: 'tom',
          jp: '電車の ほうが はやいです。',
          romaji: 'Densha no hō ga hayai desu.',
          meaning: { en: 'The train is faster.', vi: 'Tàu điện nhanh hơn.' },
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' }
          ]
        },
        {
          speakerId: 'yuki',
          jp: 'バスは いくらですか。',
          romaji: 'Basu wa ikura desu ka.',
          meaning: { en: 'How much is the bus?', vi: 'Xe buýt bao nhiêu tiền?' }
        },
        {
          speakerId: 'tom',
          jp: '900円です。電車は 1,200円です。',
          romaji: 'Kyū-hyaku en desu. Densha wa sen ni-hyaku en desu.',
          meaning: {
            en: '900 yen. The train is 1,200 yen.',
            vi: '900 yen. Tàu điện 1.200 yen.'
          },
          ruby: [
            { base: '円', reading: 'えん' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '円', reading: 'えん' }
          ]
        },
        {
          speakerId: 'yuki',
          jp: 'じゃ、電車に します。',
          romaji: 'Ja, densha ni shimasu.',
          meaning: { en: 'Then I will take the train.', vi: 'Vậy tôi đi tàu điện.' },
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson12-food',
      title: { en: 'Favorite Japanese food', vi: 'Món Nhật thích nhất' },
      speakers: [
        { id: 'lin', name: 'リン' },
        { id: 'ken', name: 'ケン' }
      ],
      lines: [
        {
          speakerId: 'lin',
          jp: '日本料理の 中で 何が いちばん おいしいですか。',
          romaji: 'Nihon ryōri no naka de nani ga ichiban oishii desu ka.',
          meaning: {
            en: 'Among Japanese dishes, which is the tastiest?',
            vi: 'Trong các món ăn Nhật, món nào ngon nhất?'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '料', reading: 'りょう' },
            { base: '理', reading: 'り' },
            { base: '中', reading: 'なか' },
            { base: '何', reading: 'なに' }
          ]
        },
        {
          speakerId: 'ken',
          jp: 'てんぷらが いちばん おいしいです。',
          romaji: 'Tenpura ga ichiban oishii desu.',
          meaning: { en: 'Tempura is the best.', vi: 'Tempura ngon nhất.' }
        },
        {
          speakerId: 'lin',
          jp: 'すき焼きと 刺身と どちらが すきですか。',
          romaji: 'Sukiyaki to sashimi to dochira ga suki desu ka.',
          meaning: {
            en: 'Which do you like better, sukiyaki or sashimi?',
            vi: 'Sukiyaki và sashimi, anh thích cái nào hơn?'
          },
          ruby: [
            { base: '焼', reading: 'や' },
            { base: '刺', reading: 'さ' },
            { base: '身', reading: 'し' }
          ]
        },
        {
          speakerId: 'ken',
          jp: 'どちらも 好きです。',
          romaji: 'Dochira mo suki desu.',
          meaning: { en: 'I like both.', vi: 'Tôi thích cả hai.' },
          ruby: [{ base: '好', reading: 'す' }]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N / na-adj でした / じゃありませんでした',
      highlights: ['でした', 'じゃ', 'ありませんでした'],
      title: { en: 'Past tense (nouns and na-adj)', vi: 'Quá khứ (danh từ và tính từ な)' },
      explanation: {
        en: 'For nouns and na-adjectives, past affirmative is でした; past negative is じゃありませんでした (formal: ではありませんでした).',
        vi: 'Danh từ và tính từ な: khẳng định quá khứ là でした; phủ định quá khứ là じゃありませんでした (trang trọng: ではありませんでした).'
      },
      examples: [
        {
          jp: 'きのうは 雨でした。',
          romaji: 'Kinō wa ame deshita.',
          meaning: { en: 'It rained yesterday.', vi: 'Hôm qua trời mưa.' },
          ruby: [{ base: '雨', reading: 'あめ' }]
        },
        {
          jp: 'きのうの 試験は 簡単じゃ ありませんでした。',
          romaji: 'Kinō no shiken wa kantan ja arimasen deshita.',
          meaning: {
            en: 'Yesterday\u0027s exam was not easy.',
            vi: 'Bài thi hôm qua không dễ.'
          },
          ruby: [
            { base: '試', reading: 'し' },
            { base: '験', reading: 'けん' },
            { base: '簡', reading: 'かん' },
            { base: '単', reading: 'たん' }
          ]
        },
        {
          jp: '京都は 静かでしたか。',
          romaji: 'Kyōto wa shizuka deshita ka.',
          meaning: { en: 'Was Kyoto quiet?', vi: 'Kyoto có yên tĩnh không?' },
          dialogueGroup: 'kyoto',
          ruby: [
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '静', reading: 'しず' }
          ]
        },
        {
          jp: 'いいえ、静かじゃ ありませんでした。',
          romaji: 'Iie, shizuka ja arimasen deshita.',
          meaning: { en: 'No, it was not quiet.', vi: 'Không, không yên tĩnh.' },
          dialogueGroup: 'kyoto',
          ruby: [{ base: '静', reading: 'しず' }]
        }
      ]
    },
    {
      pattern: 'i-adj かったです / くなかったです',
      highlights: ['かった', 'です', 'く', 'なかった', 'です'],
      title: { en: 'Past tense (i-adjectives)', vi: 'Quá khứ (tính từ い)' },
      explanation: {
        en: 'Drop い, add かったです for past affirmative (暑い -> 暑かったです). Past negative: くなかったです (暑くなかったです).',
        vi: 'Bỏ い, thêm かったです cho khẳng định quá khứ (暑い -> 暑かったです). Phủ định quá khứ: くなかったです.'
      },
      explanationRuby: [
        { base: '暑', reading: 'あつ' },
        { base: '暑', reading: 'あつ' },
        { base: '暑', reading: 'あつ' }
      ],
      examples: [
        {
          jp: 'きのうは 暑かったです。',
          romaji: 'Kinō wa atsukatta desu.',
          meaning: { en: 'It was hot yesterday.', vi: 'Hôm qua trời nóng.' },
          ruby: [{ base: '暑', reading: 'あつ' }]
        },
        {
          jp: 'きのうの パーティーは あまり 楽しくなかったです。',
          romaji: 'Kinō no pātī wa amari tanoshikunakatta desu.',
          meaning: {
            en: 'Yesterday\u0027s party was not very fun.',
            vi: 'Bữa tiệc hôm qua không vui lắm.'
          },
          ruby: [{ base: '楽', reading: 'たの' }]
        },
        {
          jp: '旅行は 楽しかったですか。',
          romaji: 'Ryokō wa tanoshikatta desu ka.',
          meaning: { en: 'Was the trip fun?', vi: 'Chuyến du lịch có vui không?' },
          dialogueGroup: 'trip',
          ruby: [
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' },
            { base: '楽', reading: 'たの' }
          ]
        },
        {
          jp: 'はい、とても 楽しかったです。天気も よかったです。',
          romaji: 'Hai, totemo tanoshikatta desu. Tenki mo yokatta desu.',
          meaning: {
            en: 'Yes, very fun. The weather was good too.',
            vi: 'Vâng, rất vui. Thời tiết cũng đẹp.'
          },
          dialogueGroup: 'trip',
          ruby: [
            { base: '楽', reading: 'たの' },
            { base: '天', reading: 'てん' },
            { base: '気', reading: 'き' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 は N2 より adj',
      highlights: ['は', 'より'],
      title: { en: 'Comparison with より', vi: 'So sánh với より' },
      explanation: {
        en: 'Use N2 より to compare: N1 は N2 より adjective means N1 is more adjective than N2.',
        vi: 'Dùng N2 より để so sánh: N1 は N2 より tính từ nghĩa N1 hơn N2 về phía tính từ đó.'
      },
      examples: [
        {
          jp: '北海道は 九州より 大きいです。',
          romaji: 'Hokkaidō wa Kyūshū yori ōkii desu.',
          meaning: { en: 'Hokkaido is larger than Kyushu.', vi: 'Hokkaido lớn hơn Kyushu.' },
          ruby: [
            { base: '北', reading: 'ほっ' },
            { base: '海', reading: 'かい' },
            { base: '道', reading: 'どう' },
            { base: '九', reading: 'きゅう' },
            { base: '州', reading: 'しゅう' },
            { base: '大', reading: 'おお' }
          ]
        },
        {
          jp: 'この 車は あの 車より 新しいです。',
          romaji: 'Kono kuruma wa ano kuruma yori atarashii desu.',
          meaning: {
            en: 'This car is newer than that one.',
            vi: 'Chiếc xe này mới hơn chiếc xe kia.'
          },
          ruby: [
            { base: '車', reading: 'くるま' },
            { base: '車', reading: 'くるま' },
            { base: '新', reading: 'あたら' }
          ]
        },
        {
          jp: 'ニューヨークは 大阪より 寒いですか。',
          romaji: 'Nyū Yōku wa Ōsaka yori samui desu ka.',
          meaning: {
            en: 'Is New York colder than Osaka?',
            vi: 'New York có lạnh hơn Osaka không?'
          },
          dialogueGroup: 'cold',
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '寒', reading: 'さむ' }
          ]
        },
        {
          jp: 'はい、ずっと 寒いです。',
          romaji: 'Hai, zutto samui desu.',
          meaning: { en: 'Yes, much colder.', vi: 'Vâng, lạnh hơn nhiều.' },
          dialogueGroup: 'cold',
          ruby: [{ base: '寒', reading: 'さむ' }]
        }
      ]
    },
    {
      pattern: 'N1 と N2 と どちらが / N の ほうが',
      highlights: ['と', 'どちら', 'が', '方', 'が'],
      title: { en: 'Which is more? (どちら)', vi: 'Cái nào hơn? (どちら)' },
      explanation: {
        en: 'Ask which of two is more with N1 と N2 と どちらが adjective ですか. Answer with N の ほうが adjective です.',
        vi: 'Hỏi trong hai cái cái nào hơn: N1 と N2 と どちらが tính từ ですか. Trả lời: N の ほうが tính từ です.'
      },
      examples: [
        {
          jp: '海と 山と どちらが 好きですか。',
          romaji: 'Umi to yama to dochira ga suki desu ka.',
          meaning: {
            en: 'Which do you like better, the sea or the mountains?',
            vi: 'Biển và núi, anh/chị thích nơi nào hơn?'
          },
          ruby: [
            { base: '海', reading: 'うみ' },
            { base: '山', reading: 'やま' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          jp: 'どちらも 好きです。',
          romaji: 'Dochira mo suki desu.',
          meaning: { en: 'I like both.', vi: 'Tôi thích cả hai.' },
          ruby: [{ base: '好', reading: 'す' }]
        },
        {
          jp: 'サッカーと 野球と どちらが おもしろいですか。',
          romaji: 'Sakkā to yakyū to dochira ga omoshiroi desu ka.',
          meaning: {
            en: 'Soccer or baseball - which is more interesting?',
            vi: 'Bóng đá và bóng chày, môn nào thú vị hơn?'
          },
          ruby: [
            { base: '野', reading: 'や' },
            { base: '球', reading: 'きゅう' }
          ]
        },
        {
          jp: 'サッカーの ほうが おもしろいです。',
          romaji: 'Sakkā no hō ga omoshiroi desu.',
          meaning: { en: 'Soccer is more interesting.', vi: 'Bóng đá thú vị hơn.' },
          ruby: [{ base: '方', reading: 'ほう' }]
        }
      ]
    },
    {
      pattern: 'N [の 中] で 何 / どこ / だれ / いつ が いちばん',
      patternRuby: [
        { base: '中', reading: 'なか' },
        { base: '何', reading: 'なに' },
        { base: '一', reading: 'いち' },
        { base: '番', reading: 'ばん' }
      ],
      highlights: ['で', 'が', 'いちばん'],
      title: { en: 'Superlative (いちばん)', vi: 'So sánh nhất (いちばん)' },
      explanation: {
        en: 'Mark the range with で (optional の 中で). Ask with 何/どこ/だれ/いつ + が + いちばん + adjective. Answer: N が いちばん adjective です.',
        vi: 'Đánh dấu phạm vi bằng で (có thể thêm の 中で). Hỏi: 何/どこ/だれ/いつ + が + いちばん + tính từ. Trả lời: N が いちばん tính từ です.'
      },
      explanationRuby: [
        { base: '中', reading: 'なか' },
        { base: '何', reading: 'なに' },
        { base: '一', reading: 'いち' },
        { base: '番', reading: 'ばん' }
      ],
      examples: [
        {
          jp: '1年で いつが いちばん 寒いですか。',
          romaji: 'Ichi-nen de itsu ga ichiban samui desu ka.',
          meaning: {
            en: 'In a year, when is the coldest?',
            vi: 'Trong một năm, thời điểm nào lạnh nhất?'
          },
          ruby: [
            { base: '年', reading: 'ねん' },
            { base: '寒', reading: 'さむ' }
          ]
        },
        {
          jp: '2月が いちばん 寒いです。',
          romaji: 'Ni-gatsu ga ichiban samui desu.',
          meaning: { en: 'February is the coldest.', vi: 'Tháng 2 lạnh nhất.' },
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '寒', reading: 'さむ' }
          ]
        },
        {
          jp: '1年で いつが いちばん 好きですか。',
          romaji: 'Ichi-nen de itsu ga ichiban suki desu ka.',
          meaning: {
            en: 'In a year, which season do you like best?',
            vi: 'Trong một năm, anh/chị thích nhất mùa nào?'
          },
          dialogueGroup: 'season',
          ruby: [
            { base: '年', reading: 'ねん' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          jp: '夏が いちばん 好きです。',
          romaji: 'Natsu ga ichiban suki desu.',
          meaning: { en: 'I like summer best.', vi: 'Tôi thích nhất mùa hè.' },
          dialogueGroup: 'season',
          ruby: [
            { base: '夏', reading: 'なつ' },
            { base: '好', reading: 'す' }
          ]
        }
      ]
    },
    {
      pattern: 'i-adj の',
      highlights: ['の'],
      title: { en: 'Adjective + の (one)', vi: 'Tính từ い + の (cái nào)' },
      explanation: {
        en: 'After an i-adjective, の stands in for a noun just mentioned: 大きいの means "the big one".',
        vi: 'Sau tính từ い, の thay cho danh từ vừa nói: 大きいの nghĩa "cái lớn".'
      },
      explanationRuby: [{ base: '大', reading: 'おお' }],
      examples: [
        {
          jp: 'カリナさんの かばんは どれですか。',
          romaji: 'Karina-san no kaban wa dore desu ka.',
          meaning: {
            en: 'Which bag is Karina\u0027s?',
            vi: 'Cặp của chị Karina là cái nào?'
          }
        },
        {
          jp: 'あの 赤くて、大きいの です。',
          romaji: 'Ano akakute, ōkii no desu.',
          meaning: { en: 'That big red one.', vi: 'Là cái lớn màu đỏ kia.' },
          ruby: [
            { base: '赤', reading: 'あか' },
            { base: '大', reading: 'おお' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson12-weather',
      title: { en: 'Yesterday\u0027s weather', vi: 'Thời tiết hôm qua' },
      lines: [
        {
          jp: 'きのう 京都に 行きました。',
          romaji: 'Kinō Kyōto ni ikimashita.',
          meaning: { en: 'I went to Kyoto yesterday.', vi: 'Hôm qua tôi đi Kyoto.' },
          ruby: [
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '午前は 雨でした。午後は くもりでした。',
          romaji: 'Gozen wa ame deshita. Gogo wa kumori deshita.',
          meaning: {
            en: 'In the morning it rained. In the afternoon it was cloudy.',
            vi: 'Buổi sáng trời mưa. Buổi chiều trời có mây.'
          },
          ruby: [
            { base: '午', reading: 'ご' },
            { base: '前', reading: 'ぜん' },
            { base: '雨', reading: 'あめ' },
            { base: '午', reading: 'ご' },
            { base: '後', reading: 'ご' }
          ]
        },
        {
          jp: '夜は 少し 寒かったです。',
          romaji: 'Yoru wa sukoshi samukatta desu.',
          meaning: { en: 'At night it was a little cold.', vi: 'Buổi tối hơi lạnh.' },
          ruby: [
            { base: '夜', reading: 'よる' },
            { base: '少', reading: 'すこ' },
            { base: '寒', reading: 'さむ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'Where did the speaker go yesterday?', vi: 'Hôm qua người nói đi đâu?' },
          choices: [
            { id: 'a', label: { en: 'Kyoto', vi: 'Kyoto' } },
            { id: 'b', label: { en: 'Osaka', vi: 'Osaka' } },
            { id: 'c', label: { en: 'Tokyo', vi: 'Tokyo' } },
            { id: 'd', label: { en: 'Hong Kong', vi: 'Hồng Kông' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What was the weather in the morning?',
            vi: 'Buổi sáng thời tiết thế nào?'
          },
          choices: [
            { id: 'a', label: { en: 'Rain', vi: 'Mưa' } },
            { id: 'b', label: { en: 'Snow', vi: 'Tuyết' } },
            { id: 'c', label: { en: 'Sunny', vi: 'Nắng' } },
            { id: 'd', label: { en: 'Windy', vi: 'Gió' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'How was the weather at night?', vi: 'Buổi tối thời tiết thế nào?' },
          choices: [
            { id: 'a', label: { en: 'A little cold', vi: 'Hơi lạnh' } },
            { id: 'b', label: { en: 'Very hot', vi: 'Rất nóng' } },
            { id: 'c', label: { en: 'Rainy', vi: 'Mưa' } },
            { id: 'd', label: { en: 'Warm', vi: 'Ấm' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson12-party',
      title: { en: 'The party yesterday', vi: 'Bữa tiệc hôm qua' },
      lines: [
        {
          jp: 'きのう 会社の パーティーに 行きました。',
          romaji: 'Kinō kaisha no pātī ni ikimashita.',
          meaning: {
            en: 'I went to the company party yesterday.',
            vi: 'Hôm qua tôi đi tiệc công ty.'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: 'とても にぎやかでした。人が たくさん いました。',
          romaji: 'Totemo nigiyaka deshita. Hito ga takusan imashita.',
          meaning: {
            en: 'It was very lively. There were many people.',
            vi: 'Rất náo nhiệt. Có rất nhiều người.'
          },
          ruby: [{ base: '人', reading: 'ひと' }]
        },
        {
          jp: '食べ物も おいしかったです。初めて すき焼きを 食べました。',
          romaji: 'Tabemono mo oishikatta desu. Hajimete sukiyaki o tabemashita.',
          meaning: {
            en: 'The food was delicious too. I ate sukiyaki for the first time.',
            vi: 'Đồ ăn cũng ngon. Lần đầu tôi ăn sukiyaki.'
          },
          ruby: [
            { base: '食', reading: 'た' },
            { base: '物', reading: 'べ' },
            { base: '初', reading: 'はじ' },
            { base: '焼', reading: 'や' },
            { base: '食', reading: 'た' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What event did the speaker attend?',
            vi: 'Người nói tham dự sự kiện gì?'
          },
          choices: [
            { id: 'a', label: { en: 'A company party', vi: 'Tiệc công ty' } },
            { id: 'b', label: { en: 'A festival', vi: 'Lễ hội' } },
            { id: 'c', label: { en: 'A wedding', vi: 'Đám cưới' } },
            { id: 'd', label: { en: 'A class', vi: 'Lớp học' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'How was the party?', vi: 'Bữa tiệc thế nào?' },
          choices: [
            { id: 'a', label: { en: 'Very lively', vi: 'Rất náo nhiệt' } },
            { id: 'b', label: { en: 'Very quiet', vi: 'Rất yên tĩnh' } },
            { id: 'c', label: { en: 'Boring', vi: 'Chán' } },
            { id: 'd', label: { en: 'Empty', vi: 'Vắng' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: {
            en: 'What did the speaker try for the first time?',
            vi: 'Người nói thử lần đầu món gì?'
          },
          choices: [
            { id: 'a', label: { en: 'Sukiyaki', vi: 'Sukiyaki' } },
            { id: 'b', label: { en: 'Tempura', vi: 'Tempura' } },
            { id: 'c', label: { en: 'Sushi', vi: 'Sushi' } },
            { id: 'd', label: { en: 'Curry', vi: 'Cà ri' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson12-travel',
      title: { en: 'Comparing cities', vi: 'So sánh các thành phố' },
      lines: [
        {
          jp: 'トムさんは 初めて 日本に 来ました。',
          romaji: 'Tomu-san wa hajimete Nihon ni kimashita.',
          meaning: {
            en: 'Tom came to Japan for the first time.',
            vi: 'Tom đến Nhật lần đầu tiên.'
          },
          ruby: [
            { base: '初', reading: 'はじ' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: '大阪と 京都と どちらが 好きですか。',
          romaji: 'Ōsaka to Kyōto to dochira ga suki desu ka.',
          meaning: {
            en: 'Which do you like better, Osaka or Kyoto?',
            vi: 'Osaka và Kyoto, anh thích thành phố nào hơn?'
          },
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          jp: '京都の ほうが 静かで、好きです。でも 大阪の ほうが 食べ物が おいしいです。',
          romaji:
            'Kyōto no hō ga shizuka de, suki desu. Demo Ōsaka no hō ga tabemono ga oishii desu.',
          meaning: {
            en: 'Kyoto is quieter and I like it. But Osaka has better food.',
            vi: 'Kyoto yên tĩnh hơn, tôi thích. Nhưng Osaka ngon hơn về đồ ăn.'
          },
          ruby: [
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '静', reading: 'しず' },
            { base: '好', reading: 'す' },
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '食', reading: 'た' },
            { base: '物', reading: 'べ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'Is this Tom\u0027s first visit to Japan?',
            vi: 'Đây có phải lần đầu Tom đến Nhật?'
          },
          choices: [
            { id: 'a', label: { en: 'Yes', vi: 'Đúng' } },
            { id: 'b', label: { en: 'No', vi: 'Không' } },
            { id: 'c', label: { en: 'Not said', vi: 'Không nói' } },
            { id: 'd', label: { en: 'He lives there', vi: 'Anh ấy sống ở đó' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'Which city is quieter?', vi: 'Thành phố nào yên tĩnh hơn?' },
          choices: [
            { id: 'a', label: { en: 'Kyoto', vi: 'Kyoto' } },
            { id: 'b', label: { en: 'Osaka', vi: 'Osaka' } },
            { id: 'c', label: { en: 'Tokyo', vi: 'Tokyo' } },
            { id: 'd', label: { en: 'Both', vi: 'Cả hai' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'Which city has better food?', vi: 'Thành phố nào ngon hơn về đồ ăn?' },
          choices: [
            { id: 'a', label: { en: 'Osaka', vi: 'Osaka' } },
            { id: 'b', label: { en: 'Kyoto', vi: 'Kyoto' } },
            { id: 'c', label: { en: 'Neither', vi: 'Không city nào' } },
            { id: 'd', label: { en: 'Same', vi: 'Như nhau' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Festivals and famous places', vi: 'Lễ hội và địa danh' },
      includeInQuiz: false,
      intro: {
        en: 'Major festivals and landmarks across Japan from the textbook map.',
        vi: 'Các lễ hội và địa danh nổi tiếng trên bản đồ sách giáo khoa.'
      },
      items: [
        {
          kana: 'ぎおんまつり',
          kanji: '祇園祭',
          romaji: 'Gion Matsuri',
          meaning: { en: 'Gion Festival (Kyoto)', vi: 'Lễ hội Gion (Kyoto)' },
          ruby: [
            { base: '祇', reading: 'ぎ' },
            { base: '園', reading: 'おん' }
          ]
        },
        {
          kana: 'かんだまつり',
          kanji: '神田祭',
          romaji: 'Kanda Matsuri',
          meaning: { en: 'Kanda Festival (Tokyo)', vi: 'Lễ hội Kanda (Tokyo)' },
          ruby: [
            { base: '神', reading: 'かん' },
            { base: '田', reading: 'だ' }
          ]
        },
        {
          kana: 'てんじんまつり',
          kanji: '天神祭',
          romaji: 'Tenjin Matsuri',
          meaning: { en: 'Tenjin Festival (Osaka)', vi: 'Lễ hội Tenjin (Osaka)' },
          ruby: [
            { base: '天', reading: 'てん' },
            { base: '神', reading: 'じん' }
          ]
        },
        {
          kana: 'ろくおんじ',
          kanji: '鹿苑寺',
          romaji: 'Rokuon-ji',
          meaning: { en: 'Rokuon-ji (Golden Pavilion, Kyoto)', vi: 'Chùa Rokuon (Kinkaku, Kyoto)' },
          ruby: [{ base: '鹿', reading: 'ろく' }]
        },
        {
          kana: 'ふじさん',
          kanji: '富士山',
          romaji: 'Fuji-san',
          meaning: { en: 'Mount Fuji', vi: 'Núi Phú Sĩ' },
          ruby: [
            { base: '富', reading: 'ふ' },
            { base: '士', reading: 'じ' },
            { base: '山', reading: 'さん' }
          ]
        },
        {
          kana: 'とうしょうぐう',
          kanji: '東照宮',
          romaji: 'Tōshō-gū',
          meaning: { en: 'Tōshō-gū Shrine (Nikko)', vi: 'Đền Tōshō-gū (Nikko)' },
          ruby: [
            { base: '東', reading: 'とう' },
            { base: '照', reading: 'しょう' },
            { base: '宮', reading: 'ぐう' }
          ]
        },
        {
          kana: 'こうきょ',
          kanji: '皇居',
          romaji: 'Kōkyo',
          meaning: { en: 'Imperial Palace (Tokyo)', vi: 'Hoàng cung (Tokyo)' },
          ruby: [{ base: '皇', reading: 'こう' }]
        },
        {
          kana: 'とうだいじ',
          kanji: '東大寺',
          romaji: 'Tōdai-ji',
          meaning: { en: 'Tōdai-ji Temple (Nara)', vi: 'Chùa Tōdai-ji (Nara)' },
          ruby: [
            { base: '東', reading: 'とう' },
            { base: '大', reading: 'だい' },
            { base: '寺', reading: 'じ' }
          ]
        },
        {
          kana: 'げんばくドーム',
          kanji: '原爆ドーム',
          romaji: 'Genbaku Dōmu',
          meaning: { en: 'Atomic Bomb Dome (Hiroshima)', vi: 'Nhà dom Genbaku (Hiroshima)' },
          ruby: [{ base: '原', reading: 'げん' }]
        },
        {
          kana: 'ひめじじょう',
          kanji: '姫路城',
          romaji: 'Himeji-jō',
          meaning: { en: 'Himeji Castle', vi: 'Lâu đài Himeji' },
          ruby: [
            { base: '姫', reading: 'ひめ' },
            { base: '路', reading: 'じ' },
            { base: '城', reading: 'じょう' }
          ]
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Names in this lesson', vi: 'Tên riêng trong bài' },
      includeInQuiz: false,
      items: [
        {
          kana: 'ホンコン',
          kanji: '香港',
          romaji: 'Honkon',
          meaning: { en: 'Hong Kong', vi: 'Hồng Kông' },
          ruby: [{ base: '香', reading: 'ホン' }]
        },
        {
          kana: 'シンガポール',
          romaji: 'Shingapōru',
          meaning: { en: 'Singapore', vi: 'Singapore' }
        },
        {
          kana: 'エービーシーストア',
          romaji: 'Ēbī Shī Sutoa',
          meaning: { en: 'ABC Store (fictional supermarket)', vi: 'Siêu thị ABC (giả định)' }
        },
        {
          kana: 'ジャパン',
          romaji: 'Japan',
          meaning: { en: 'Japan Store (fictional supermarket)', vi: 'Siêu thị Japan (giả định)' }
        }
      ]
    }
  ]
};
