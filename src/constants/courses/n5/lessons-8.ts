import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 8 (i-adjectives, na-adjectives, どう / どんな). */
export const n5Lesson8: Lesson = {
  id: 'lesson-8',
  number: 8,
  title: {
    en: 'Describing things',
    vi: 'Miêu tả sự vật'
  },
  focus: {
    en: 'Describe people and things with い-adjectives and な-adjectives, and ask impressions with どう and どんな.',
    vi: 'Miêu tả người và vật bằng tính từ い và な, hỏi cảm nhận với どう và どんな.'
  },
  vocab: [
    {
      kana: 'ハンサム',
      romaji: 'hansamu',
      meaning: { en: 'handsome (na-adj)', vi: 'đẹp trai (tính từ な)' }
    },
    {
      kana: 'きれい',
      romaji: 'kirei',
      meaning: { en: 'beautiful, clean (na-adj)', vi: 'đẹp, sạch (tính từ な)' }
    },
    {
      kana: 'しずか',
      kanji: '静か',
      romaji: 'shizuka',
      meaning: { en: 'quiet (na-adj)', vi: 'yên tĩnh (tính từ な)' },
      ruby: [{ base: '静', reading: 'しず' }]
    },
    {
      kana: 'にぎやか',
      romaji: 'nigiyaka',
      meaning: { en: 'lively, bustling (na-adj)', vi: 'náo nhiệt (tính từ な)' }
    },
    {
      kana: 'ゆうめい',
      kanji: '有名',
      romaji: 'yūmei',
      meaning: { en: 'famous (na-adj)', vi: 'nổi tiếng (tính từ な)' },
      ruby: [
        { base: '有', reading: 'ゆう' },
        { base: '名', reading: 'めい' }
      ]
    },
    {
      kana: 'しんせつ',
      kanji: '親切',
      romaji: 'shinsetsu',
      meaning: {
        en: 'kind, helpful (na-adj; not used for your own family)',
        vi: 'tốt bụng, thân thiện (tính từ な; không dùng cho người trong gia đình mình)'
      },
      ruby: [
        { base: '親', reading: 'しん' },
        { base: '切', reading: 'せつ' }
      ]
    },
    {
      kana: 'げんき',
      kanji: '元気',
      romaji: 'genki',
      meaning: { en: 'healthy, energetic (na-adj)', vi: 'khỏe, khỏe khoắn (tính từ な)' },
      ruby: [
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' }
      ]
    },
    {
      kana: 'ひま',
      kanji: '暇',
      romaji: 'hima',
      meaning: { en: 'free, not busy (na-adj)', vi: 'rảnh rỗi (tính từ な)' },
      ruby: [{ base: '暇', reading: 'ひま' }]
    },
    {
      kana: 'べんり',
      kanji: '便利',
      romaji: 'benri',
      meaning: { en: 'convenient (na-adj)', vi: 'tiện lợi (tính từ な)' },
      ruby: [
        { base: '便', reading: 'べん' },
        { base: '利', reading: 'り' }
      ]
    },
    {
      kana: 'すてき',
      romaji: 'suteki',
      meaning: { en: 'lovely, nice (na-adj)', vi: 'đẹp, hay (tính từ な)' }
    },
    {
      kana: 'おおきい',
      kanji: '大きい',
      romaji: 'ōkii',
      meaning: { en: 'big, large', vi: 'to, lớn' },
      ruby: [{ base: '大', reading: 'おお' }]
    },
    {
      kana: 'ちいさい',
      kanji: '小さい',
      romaji: 'chiisai',
      meaning: { en: 'small', vi: 'nhỏ, bé' },
      ruby: [{ base: '小', reading: 'ちい' }]
    },
    {
      kana: 'あたらしい',
      kanji: '新しい',
      romaji: 'atarashii',
      meaning: { en: 'new', vi: 'mới' },
      ruby: [{ base: '新', reading: 'あたら' }]
    },
    {
      kana: 'ふるい',
      kanji: '古い',
      romaji: 'furui',
      meaning: {
        en: 'old (not used for a person\u0027s age)',
        vi: 'cũ (không dùng khi nói về tuổi tác của một người)'
      },
      ruby: [{ base: '古', reading: 'ふる' }]
    },
    {
      kana: 'いい',
      kanji: '良い',
      romaji: 'ii',
      meaning: { en: 'good (also read よい)', vi: 'tốt (cũng đọc よい)' },
      ruby: [{ base: '良', reading: 'よ' }]
    },
    {
      kana: 'わるい',
      kanji: '悪い',
      romaji: 'warui',
      meaning: { en: 'bad', vi: 'xấu' },
      ruby: [{ base: '悪', reading: 'わる' }]
    },
    {
      kana: 'あつい',
      kanji: '暑い',
      romaji: 'atsui',
      meaning: { en: 'hot (weather or temperature)', vi: 'nóng (thời tiết hoặc nhiệt độ)' },
      ruby: [{ base: '暑', reading: 'あつ' }]
    },
    {
      kana: 'さむい',
      kanji: '寒い',
      romaji: 'samui',
      meaning: { en: 'cold (weather)', vi: 'lạnh, rét (dùng cho thời tiết)' },
      ruby: [{ base: '寒', reading: 'さむ' }]
    },
    {
      kana: 'つめたい',
      kanji: '冷たい',
      romaji: 'tsumetai',
      meaning: { en: 'cold (to the touch)', vi: 'lạnh, buốt (dùng cho cảm giác)' },
      ruby: [{ base: '冷', reading: 'つめ' }]
    },
    {
      kana: 'むずかしい',
      kanji: '難しい',
      romaji: 'muzukashii',
      meaning: { en: 'difficult', vi: 'khó' },
      ruby: [{ base: '難', reading: 'むずか' }]
    },
    {
      kana: 'やさしい',
      kanji: '易しい',
      romaji: 'yasashii',
      meaning: { en: 'easy', vi: 'dễ' },
      ruby: [{ base: '易', reading: 'やさ' }]
    },
    {
      kana: 'たかい',
      kanji: '高い',
      romaji: 'takai',
      meaning: { en: 'high, expensive', vi: 'cao, đắt' },
      ruby: [{ base: '高', reading: 'たか' }]
    },
    {
      kana: 'やすい',
      kanji: '安い',
      romaji: 'yasui',
      meaning: { en: 'cheap, inexpensive', vi: 'rẻ' },
      ruby: [{ base: '安', reading: 'やす' }]
    },
    {
      kana: 'ひくい',
      kanji: '低い',
      romaji: 'hikui',
      meaning: { en: 'low', vi: 'thấp' },
      ruby: [{ base: '低', reading: 'ひく' }]
    },
    {
      kana: 'おもしろい',
      romaji: 'omoshiroi',
      meaning: { en: 'interesting', vi: 'thú vị, hay' }
    },
    {
      kana: 'おいしい',
      romaji: 'oishii',
      meaning: { en: 'delicious', vi: 'ngon' }
    },
    {
      kana: 'いそがしい',
      kanji: '忙しい',
      romaji: 'isogashii',
      meaning: { en: 'busy', vi: 'bận' },
      ruby: [{ base: '忙', reading: 'いそが' }]
    },
    {
      kana: 'たのしい',
      kanji: '楽しい',
      romaji: 'tanoshii',
      meaning: { en: 'fun, enjoyable', vi: 'vui' },
      ruby: [{ base: '楽', reading: 'たの' }]
    },
    {
      kana: 'しろい',
      kanji: '白い',
      romaji: 'shiroi',
      meaning: { en: 'white', vi: 'trắng' },
      ruby: [{ base: '白', reading: 'しろ' }]
    },
    {
      kana: 'くろい',
      kanji: '黒い',
      romaji: 'kuroi',
      meaning: { en: 'black', vi: 'đen' },
      ruby: [{ base: '黒', reading: 'くろ' }]
    },
    {
      kana: 'あかい',
      kanji: '赤い',
      romaji: 'akai',
      meaning: { en: 'red', vi: 'đỏ' },
      ruby: [{ base: '赤', reading: 'あか' }]
    },
    {
      kana: 'あおい',
      kanji: '青い',
      romaji: 'aoi',
      meaning: { en: 'blue', vi: 'xanh da trời' },
      ruby: [{ base: '青', reading: 'あお' }]
    },
    {
      kana: 'さくら',
      kanji: '桜',
      romaji: 'sakura',
      meaning: { en: 'cherry blossom, cherry tree', vi: 'anh đào (hoa, cây)' },
      ruby: [{ base: '桜', reading: 'さくら' }]
    },
    {
      kana: 'やま',
      kanji: '山',
      romaji: 'yama',
      meaning: { en: 'mountain', vi: 'núi' },
      ruby: [{ base: '山', reading: 'やま' }]
    },
    {
      kana: 'まち',
      kanji: '町',
      romaji: 'machi',
      meaning: { en: 'town, city', vi: 'thị trấn, thị xã, thành phố' },
      ruby: [{ base: '町', reading: 'まち' }]
    },
    {
      kana: 'たべもの',
      kanji: '食べ物',
      romaji: 'tabemono',
      meaning: { en: 'food', vi: 'đồ ăn' },
      ruby: [
        { base: '食', reading: 'た' },
        { base: '物', reading: 'もの' }
      ]
    },
    {
      kana: 'ところ',
      kanji: '所',
      romaji: 'tokoro',
      meaning: { en: 'place', vi: 'nơi, chỗ' },
      ruby: [{ base: '所', reading: 'ところ' }]
    },
    {
      kana: 'りょう',
      kanji: '寮',
      romaji: 'ryō',
      meaning: { en: 'dormitory', vi: 'kí túc xá' },
      ruby: [{ base: '寮', reading: 'りょう' }]
    },
    {
      kana: 'レストラン',
      romaji: 'resutoran',
      meaning: { en: 'restaurant', vi: 'nhà hàng' }
    },
    {
      kana: 'せいかつ',
      kanji: '生活',
      romaji: 'seikatsu',
      meaning: { en: 'life, daily living', vi: 'cuộc sống, sinh hoạt' },
      ruby: [
        { base: '生', reading: 'せい' },
        { base: '活', reading: 'かつ' }
      ]
    },
    {
      kana: 'おしごと',
      kanji: 'お仕事',
      romaji: 'oshigoto',
      meaning: {
        en: 'work, job (～を します: to work)',
        vi: 'việc, công việc (～を します: làm việc)'
      },
      ruby: [
        { base: '仕', reading: 'し' },
        { base: '事', reading: 'ごと' }
      ]
    },
    {
      kana: 'どう',
      romaji: 'dō',
      meaning: { en: 'how', vi: 'thế nào' }
    },
    {
      kana: 'どんな',
      romaji: 'donna',
      meaning: { en: 'what kind of', vi: '~ như thế nào' }
    },
    {
      kana: 'とても',
      romaji: 'totemo',
      meaning: { en: 'very', vi: 'rất, lắm' }
    },
    {
      kana: 'あまり',
      romaji: 'amari',
      meaning: { en: 'not very (with a negative)', vi: 'không ~ lắm (dùng với thể phủ định)' }
    },
    {
      kana: 'そして',
      romaji: 'soshite',
      meaning: { en: 'and, and then', vi: 'và, thêm nữa' }
    }
  ],
  phrases: [
    {
      kana: 'おげんきですか。',
      kanji: 'お元気ですか。',
      romaji: 'o-genki desu ka.',
      meaning: { en: 'How are you?', vi: 'Anh/Chị có khỏe không?' },
      ruby: [
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' }
      ]
    },
    {
      kana: 'そうですね。',
      romaji: 'sō desu ne.',
      meaning: {
        en: 'Let me see... / Well... (while thinking of an answer)',
        vi: 'Thế à. / Để tôi xem. (khi suy nghĩ câu trả lời)'
      }
    },
    {
      kana: 'もう いっぱい いかがですか。',
      kanji: 'もう 一杯 いかがですか。',
      romaji: 'mō ippai ikaga desu ka.',
      meaning: {
        en: 'Would you like another cup/glass?',
        vi: 'Anh/Chị dùng thêm một chén/ly nữa nhé?'
      },
      ruby: [
        { base: '一', reading: 'いっ' },
        { base: '杯', reading: 'ぱい' }
      ]
    },
    {
      kana: 'けっこうです。',
      romaji: 'kekkō desu.',
      meaning: { en: 'No thank you, I am fine.', vi: 'Không, đủ rồi ạ.' }
    },
    {
      kana: 'もう ～ですね。',
      romaji: 'mō ~ desu ne.',
      meaning: {
        en: 'It is already ~, is it not?',
        vi: 'Đã ~ rồi nhỉ. / Đã ~ rồi, đúng không?'
      }
    },
    {
      kana: 'そろそろ しつれいします。',
      kanji: 'そろそろ 失礼します。',
      romaji: 'sorosoro shitsurei shimasu.',
      meaning: {
        en: 'I must be going now.',
        vi: 'Sắp đến lúc tôi phải xin phép rồi. / Đã đến lúc tôi phải về.'
      },
      ruby: [
        { base: '失', reading: 'しつ' },
        { base: '礼', reading: 'れい' }
      ]
    },
    {
      kana: 'いいえ。',
      romaji: 'iie.',
      meaning: {
        en: 'Not at all. / You are welcome. (reply to thanks)',
        vi: 'Không có gì. / Không sao cả.'
      }
    },
    {
      kana: 'また いらっしゃって ください。',
      romaji: 'mata irasshatte kudasai.',
      meaning: { en: 'Please come again.', vi: 'Lần sau anh/chị lại đến chơi nhé.' }
    }
  ],
  conversation: [
    {
      id: 'conv-lesson8-life-in-japan',
      title: { en: 'Life in Japan', vi: 'Cuộc sống ở Nhật' },
      speakers: [
        { id: 'yuki', name: 'ユキ' },
        { id: 'tom', name: 'トム' }
      ],
      lines: [
        {
          speakerId: 'yuki',
          jp: 'トムさん、日本の 生活は どうですか。',
          romaji: 'Tomu-san, Nihon no seikatsu wa dō desu ka.',
          meaning: {
            en: 'Tom, how is life in Japan?',
            vi: 'Tom, cuộc sống ở Nhật thế nào?'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '生', reading: 'せい' },
            { base: '活', reading: 'かつ' }
          ]
        },
        {
          speakerId: 'tom',
          jp: 'とても 楽しいです。',
          romaji: 'Totemo tanoshii desu.',
          meaning: { en: 'It is very fun.', vi: 'Rất vui.' },
          ruby: [{ base: '楽', reading: 'たの' }]
        },
        {
          speakerId: 'yuki',
          jp: 'お仕事は どうですか。',
          romaji: 'O-shigoto wa dō desu ka.',
          meaning: { en: 'How is work?', vi: 'Công việc thế nào?' },
          ruby: [
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' }
          ]
        },
        {
          speakerId: 'tom',
          jp: 'そうですね。忙しいですが、おもしろいです。',
          romaji: 'Sō desu ne. Isogashii desu ga, omoshiroi desu.',
          meaning: {
            en: 'Well... It is busy, but interesting.',
            vi: 'À, vâng. Bận rộn nhưng thú vị.'
          },
          ruby: [{ base: '忙', reading: 'いそが' }]
        }
      ]
    },
    {
      id: 'conv-lesson8-coffee',
      title: { en: 'Offering coffee', vi: 'Mời cà phê' },
      speakers: [
        { id: 'mai', name: 'マイ' },
        { id: 'alex', name: 'アレックス' }
      ],
      lines: [
        {
          speakerId: 'mai',
          jp: 'コーヒー、もう 一杯 いかがですか。',
          romaji: 'Kōhī, mō ippai ikaga desu ka.',
          meaning: {
            en: 'Would you like another cup of coffee?',
            vi: 'Bạn dùng thêm một ly cà phê nữa nhé?'
          },
          ruby: [
            { base: '一', reading: 'いっ' },
            { base: '杯', reading: 'ぱい' }
          ]
        },
        {
          speakerId: 'alex',
          jp: 'いいえ、けっこうです。',
          romaji: 'Iie, kekkō desu.',
          meaning: { en: 'No thank you, I am fine.', vi: 'Không, đủ rồi ạ.' }
        },
        {
          speakerId: 'mai',
          jp: 'そうですか。',
          romaji: 'Sō desu ka.',
          meaning: { en: 'I see.', vi: 'Thế à.' }
        }
      ]
    },
    {
      id: 'conv-lesson8-leaving',
      title: { en: 'Time to leave', vi: 'Đã đến lúc về' },
      speakers: [
        { id: 'lin', name: 'リン' },
        { id: 'ken', name: 'ケン' },
        { id: 'yuki', name: 'ユキ' }
      ],
      lines: [
        {
          speakerId: 'lin',
          jp: 'もう 6時ですね。',
          romaji: 'Mō roku-ji desu ne.',
          meaning: { en: 'It is already 6 o\u0027clock, is it not?', vi: 'Đã 6 giờ rồi nhỉ.' },
          ruby: [{ base: '時', reading: 'じ' }]
        },
        {
          speakerId: 'ken',
          jp: 'そろそろ 失礼します。',
          romaji: 'Sorosoro shitsurei shimasu.',
          meaning: { en: 'I must be going now.', vi: 'Sắp đến lúc tôi phải về.' },
          ruby: [
            { base: '失', reading: 'しつ' },
            { base: '礼', reading: 'れい' }
          ]
        },
        {
          speakerId: 'yuki',
          jp: 'そうですか。',
          romaji: 'Sō desu ka.',
          meaning: { en: 'I see.', vi: 'Thế à.' }
        },
        {
          speakerId: 'lin',
          jp: '今日は ありがとう ございました。',
          romaji: 'Kyō wa arigatō gozaimashita.',
          meaning: { en: 'Thank you for today.', vi: 'Hôm nay cảm ơn anh/chị.' },
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' }
          ]
        },
        {
          speakerId: 'yuki',
          jp: 'いいえ。また いらっしゃって ください。',
          romaji: 'Iie. Mata irasshatte kudasai.',
          meaning: {
            en: 'Not at all. Please come again.',
            vi: 'Không có gì. Lần sau lại đến chơi nhé.'
          }
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N は い-adj / な-adj です',
      highlights: ['は', 'です', 'か', 'じゃ', 'ありません', 'くない'],
      title: { en: 'Adjectives as predicates', vi: 'Tính từ làm vị ngữ' },
      explanation: {
        en: 'い-adjectives keep い before です; na-adjectives drop な before です. Negative: na-adj + じゃ(では) ありません; i-adj changes い to くないです (いい → よくないです). Add か to ask; answer with the adjective itself, not そうです.',
        vi: 'Tính từ い giữ い trước です; tính từ な bỏ な trước です. Phủ định: な + じゃ(では) ありません; い đổi い thành くないです (いい → よくないです). Thêm か để hỏi; trả lời bằng chính tính từ, không dùng そうです.'
      },
      examples: [
        {
          jp: '富士山は 高いです。',
          romaji: 'Fujisan wa takai desu.',
          meaning: { en: 'Mt. Fuji is high.', vi: 'Núi Phú Sĩ cao.' },
          ruby: [
            { base: '富', reading: 'ふ' },
            { base: '士', reading: 'じ' },
            { base: '山', reading: 'さん' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          jp: 'ワット先生は 親切です。',
          romaji: 'Watto-sensei wa shinsetsu desu.',
          meaning: { en: 'Mr. Watt is kind.', vi: 'Thầy Watt tốt bụng.' },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '親', reading: 'しん' },
            { base: '切', reading: 'せつ' }
          ]
        },
        {
          jp: 'あそこは 静かじゃ ありません。',
          romaji: 'Asoko wa shizuka ja arimasen.',
          meaning: { en: 'Over there is not quiet.', vi: 'Chỗ kia không yên tĩnh.' },
          ruby: [{ base: '静', reading: 'しず' }]
        },
        {
          jp: 'この 本は おもしろくないです。',
          romaji: 'Kono hon wa omoshirokunai desu.',
          meaning: { en: 'This book is not interesting.', vi: 'Quyển sách này không hay.' },
          ruby: [{ base: '本', reading: 'ほん' }]
        }
      ],
      answers: {
        explanation: {
          en: 'Ask yes/no about a quality with ～ですか. Answer はい、～です or いいえ、～じゃ ありません / ～くないです.',
          vi: 'Hỏi có/không về một đặc điểm bằng ～ですか. Trả lời はい、～です hoặc いいえ、～じゃ ありません / ～くないです.'
        },
        highlights: ['です', 'か'],
        examples: [
          {
            jp: '大阪は にぎやかですか。',
            romaji: 'Ōsaka wa nigiyaka desu ka.',
            meaning: { en: 'Is Osaka lively?', vi: 'Osaka có náo nhiệt không?' },
            dialogueGroup: 'osaka-lively',
            ruby: [
              { base: '大', reading: 'おお' },
              { base: '阪', reading: 'さか' }
            ]
          },
          {
            jp: 'はい、にぎやかです。',
            romaji: 'Hai, nigiyaka desu.',
            meaning: { en: 'Yes, it is lively.', vi: 'Có, náo nhiệt lắm.' },
            dialogueGroup: 'osaka-lively'
          },
          {
            jp: '奈良公園は 静かですか。',
            romaji: 'Nara-kōen wa shizuka desu ka.',
            meaning: { en: 'Is Nara Park quiet?', vi: 'Công viên Nara có yên tĩnh không?' },
            dialogueGroup: 'nara-quiet',
            ruby: [
              { base: '奈', reading: 'な' },
              { base: '良', reading: 'ら' },
              { base: '公', reading: 'こう' },
              { base: '園', reading: 'えん' },
              { base: '静', reading: 'しず' }
            ]
          },
          {
            jp: 'いいえ、静かじゃ ありません。',
            romaji: 'Iie, shizuka ja arimasen.',
            meaning: { en: 'No, it is not quiet.', vi: 'Không, không yên tĩnh.' },
            dialogueGroup: 'nara-quiet',
            ruby: [{ base: '静', reading: 'しず' }]
          }
        ]
      }
    },
    {
      pattern: 'い-adj N / な-adj[な] N',
      highlights: ['な'],
      title: { en: 'Adjectives before nouns', vi: 'Tính từ đứng trước danh từ' },
      explanation: {
        en: 'Place the adjective directly before the noun. Na-adjectives keep な; i-adjectives keep い with no extra particle.',
        vi: 'Đặt tính từ ngay trước danh từ. Tính từ な giữ な; tính từ い giữ い, không thêm trợ từ.'
      },
      examples: [
        {
          jp: '桜は きれいな 花です。',
          romaji: 'Sakura wa kirei na hana desu.',
          meaning: {
            en: 'Cherry blossoms are beautiful flowers.',
            vi: 'Hoa anh đào là loài hoa đẹp.'
          },
          ruby: [
            { base: '桜', reading: 'さくら' },
            { base: '花', reading: 'はな' }
          ]
        },
        {
          jp: '富士山は 高い 山です。',
          romaji: 'Fujisan wa takai yama desu.',
          meaning: { en: 'Mt. Fuji is a high mountain.', vi: 'Núi Phú Sĩ là núi cao.' },
          ruby: [
            { base: '富', reading: 'ふ' },
            { base: '士', reading: 'じ' },
            { base: '山', reading: 'さん' },
            { base: '高', reading: 'たか' },
            { base: '山', reading: 'やま' }
          ]
        },
        {
          jp: 'ワット先生は 親切な 先生です。',
          romaji: 'Watto-sensei wa shinsetsu na sensei desu.',
          meaning: { en: 'Mr. Watt is a kind teacher.', vi: 'Thầy Watt là thầy giáo tốt bụng.' },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '親', reading: 'しん' },
            { base: '切', reading: 'せつ' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' }
          ]
        }
      ]
    },
    {
      pattern: 'A が、 B',
      highlights: ['が'],
      title: { en: 'Contrast with が', vi: 'Tương phản với が' },
      explanation: {
        en: 'が links two clauses with opposite meanings. With the same subject, a positive first clause often pairs with a negative second, or the reverse.',
        vi: 'が nối hai mệnh đề có nghĩa đối lập. Cùng chủ ngữ thì mệnh đề khẳng định thường đi với mệnh đề phủ định, hoặc ngược lại.'
      },
      examples: [
        {
          jp: '日本の 食べ物は おいしいですが、高いです。',
          romaji: 'Nihon no tabemono wa oishii desu ga, takai desu.',
          meaning: {
            en: 'Japanese food is delicious, but expensive.',
            vi: 'Món ăn Nhật ngon nhưng đắt.'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '食', reading: 'た' },
            { base: '物', reading: 'もの' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          jp: '寮は 古いですが、便利です。',
          romaji: 'Ryō wa furui desu ga, benri desu.',
          meaning: {
            en: 'The dorm is old, but convenient.',
            vi: 'Kí túc xá cũ nhưng tiện lợi.'
          },
          ruby: [
            { base: '寮', reading: 'りょう' },
            { base: '古', reading: 'ふる' },
            { base: '便', reading: 'べん' },
            { base: '利', reading: 'り' }
          ]
        }
      ]
    },
    {
      pattern: 'とても / あまり',
      highlights: ['とても', 'あまり'],
      title: { en: 'Degree: とても and あまり', vi: 'Mức độ: とても và あまり' },
      explanation: {
        en: 'Both come before an adjective. とても means "very" in affirmative sentences. あまり means "not very" and requires a negative predicate.',
        vi: 'Cả hai đứng trước tính từ. とても nghĩa "rất" trong câu khẳng định. あまり nghĩa "không ~ lắm" và phải đi với vị ngữ phủ định.'
      },
      examples: [
        {
          jp: '北京は とても 寒いです。',
          romaji: 'Pekin wa totemo samui desu.',
          meaning: { en: 'Beijing is very cold.', vi: 'Bắc Kinh rất lạnh.' },
          ruby: [
            { base: '北', reading: 'ぺ' },
            { base: '京', reading: 'きん' },
            { base: '寒', reading: 'さむ' }
          ]
        },
        {
          jp: 'これは とても 有名な 映画です。',
          romaji: 'Kore wa totemo yūmei na eiga desu.',
          meaning: {
            en: 'This is a very famous film.',
            vi: 'Đây là bộ phim rất nổi tiếng.'
          },
          ruby: [
            { base: '有', reading: 'ゆう' },
            { base: '名', reading: 'めい' },
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' }
          ]
        },
        {
          jp: '上海は あまり 寒くないです。',
          romaji: 'Shanhai wa amari samukunai desu.',
          meaning: { en: 'Shanghai is not very cold.', vi: 'Thượng Hải không lạnh lắm.' },
          ruby: [
            { base: '上', reading: 'シャン' },
            { base: '海', reading: 'ハイ' },
            { base: '寒', reading: 'さむ' }
          ]
        },
        {
          jp: 'さくら大学は あまり 有名な 大学じゃ ありません。',
          romaji: 'Sakura daigaku wa amari yūmei na daigaku ja arimasen.',
          meaning: {
            en: 'Sakura University is not a very famous university.',
            vi: 'Trường Đại học Sakura không phải trường nổi tiếng lắm.'
          },
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '有', reading: 'ゆう' },
            { base: '名', reading: 'めい' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' }
          ]
        }
      ]
    },
    {
      pattern: 'N は どう ですか',
      highlights: ['どう', 'です', 'か'],
      title: { en: 'Asking how something is (どう)', vi: 'Hỏi thế nào (どう)' },
      explanation: {
        en: 'どう asks for an impression or opinion about something you experienced, a place you visited, or a person you met.',
        vi: 'どう hỏi cảm nhận hoặc ý kiến về điều đã trải nghiệm, nơi đã đến, hoặc người đã gặp.'
      },
      examples: [
        {
          jp: '日本の 生活は どうですか。',
          romaji: 'Nihon no seikatsu wa dō desu ka.',
          meaning: { en: 'How is life in Japan?', vi: 'Cuộc sống ở Nhật thế nào?' },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '生', reading: 'せい' },
            { base: '活', reading: 'かつ' }
          ]
        },
        {
          jp: 'お仕事は どうですか。',
          romaji: 'O-shigoto wa dō desu ka.',
          meaning: { en: 'How is work?', vi: 'Công việc thế nào?' },
          ruby: [
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' }
          ]
        }
      ],
      answers: {
        explanation: {
          en: 'Answer with an adjective or a short sentence. そうですね can buy thinking time before you answer.',
          vi: 'Trả lời bằng tính từ hoặc câu ngắn. そうですね có thể dùng để suy nghĩ trước khi trả lời.'
        },
        highlights: ['そう', 'です', 'ね'],
        examples: [
          {
            jp: 'お仕事は どうですか。',
            romaji: 'O-shigoto wa dō desu ka.',
            meaning: { en: 'How is work?', vi: 'Công việc thế nào?' },
            dialogueGroup: 'work-how',
            ruby: [
              { base: '仕', reading: 'し' },
              { base: '事', reading: 'ごと' }
            ]
          },
          {
            jp: 'そうですね。忙しいですが、おもしろいです。',
            romaji: 'Sō desu ne. Isogashii desu ga, omoshiroi desu.',
            meaning: {
              en: 'Well... Busy, but interesting.',
              vi: 'À, vâng. Bận rộn nhưng thú vị.'
            },
            dialogueGroup: 'work-how',
            ruby: [{ base: '忙', reading: 'いそが' }]
          },
          {
            jp: '……楽しいです。',
            romaji: '......Tanoshii desu.',
            meaning: { en: '...It is fun.', vi: '...Vui ạ.' },
            ruby: [{ base: '楽', reading: 'たの' }]
          }
        ]
      }
    },
    {
      pattern: 'N1 は どんな N2 ですか',
      highlights: ['どんな', 'は', 'です', 'か'],
      title: { en: 'What kind of (どんな)', vi: 'Như thế nào (どんな)' },
      explanation: {
        en: 'どんな asks what kind of person, place, or thing something is. It modifies the noun that follows.',
        vi: 'どんな hỏi người, nơi chốn hoặc vật thể thuộc loại nào. Nó bổ nghĩa cho danh từ đứng sau.'
      },
      examples: [
        {
          jp: '奈良は どんな 町ですか。',
          romaji: 'Nara wa donna machi desu ka.',
          meaning: { en: 'What kind of town is Nara?', vi: 'Nara là thành phố như thế nào?' },
          ruby: [
            { base: '奈', reading: 'な' },
            { base: '良', reading: 'ら' },
            { base: '町', reading: 'まち' }
          ]
        },
        {
          jp: '……古い 町です。',
          romaji: '......Furui machi desu.',
          meaning: { en: '...An old town.', vi: '...Là thành phố cổ.' },
          ruby: [
            { base: '古', reading: 'ふる' },
            { base: '町', reading: 'まち' }
          ]
        },
        {
          jp: 'さくら大学は どんな 大学ですか。',
          romaji: 'Sakura daigaku wa donna daigaku desu ka.',
          meaning: {
            en: 'What kind of university is Sakura University?',
            vi: 'Trường Đại học Sakura là trường như thế nào?'
          },
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson8-sakura',
      title: { en: 'Cherry blossoms', vi: 'Hoa anh đào' },
      lines: [
        {
          jp: '桜は きれいな 花です。',
          romaji: 'Sakura wa kirei na hana desu.',
          meaning: {
            en: 'Cherry blossoms are beautiful flowers.',
            vi: 'Hoa anh đào là loài hoa đẹp.'
          },
          ruby: [
            { base: '桜', reading: 'さくら' },
            { base: '花', reading: 'はな' }
          ]
        },
        {
          jp: '富士山は 高い 山です。',
          romaji: 'Fujisan wa takai yama desu.',
          meaning: { en: 'Mt. Fuji is a high mountain.', vi: 'Núi Phú Sĩ là núi cao.' },
          ruby: [
            { base: '富', reading: 'ふ' },
            { base: '士', reading: 'じ' },
            { base: '山', reading: 'さん' },
            { base: '高', reading: 'たか' },
            { base: '山', reading: 'やま' }
          ]
        },
        {
          jp: '奈良公園は 静かです。',
          romaji: 'Nara-kōen wa shizuka desu.',
          meaning: { en: 'Nara Park is quiet.', vi: 'Công viên Nara yên tĩnh.' },
          ruby: [
            { base: '奈', reading: 'な' },
            { base: '良', reading: 'ら' },
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '静', reading: 'しず' }
          ]
        },
        {
          jp: '金閣寺は とても 有名です。',
          romaji: 'Kinkaku-ji wa totemo yūmei desu.',
          meaning: { en: 'Kinkaku-ji is very famous.', vi: 'Chùa Kinkaku rất nổi tiếng.' },
          ruby: [
            { base: '金', reading: 'きん' },
            { base: '閣', reading: 'かく' },
            { base: '寺', reading: 'じ' },
            { base: '有', reading: 'ゆう' },
            { base: '名', reading: 'めい' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What are cherry blossoms like?', vi: 'Hoa anh đào như thế nào?' },
          choices: [
            { id: 'a', label: { en: 'Beautiful flowers', vi: 'Loài hoa đẹp' } },
            { id: 'b', label: { en: 'High mountains', vi: 'Núi cao' } },
            { id: 'c', label: { en: 'Quiet parks', vi: 'Công viên yên tĩnh' } },
            { id: 'd', label: { en: 'Famous temples only', vi: 'Chỉ có chùa nổi tiếng' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'Which place is very famous?', vi: 'Nơi nào rất nổi tiếng?' },
          choices: [
            { id: 'a', label: { en: 'Nara Park', vi: 'Công viên Nara' } },
            { id: 'b', label: { en: 'Kinkaku-ji', vi: 'Chùa Kinkaku' } },
            { id: 'c', label: { en: 'The dormitory', vi: 'Kí túc xá' } },
            { id: 'd', label: { en: 'Shanghai', vi: 'Thượng Hải' } }
          ],
          correctId: 'b'
        },
        {
          id: 'q3',
          question: { en: 'Is Nara Park lively?', vi: 'Công viên Nara có náo nhiệt không?' },
          choices: [
            { id: 'a', label: { en: 'Yes, very lively', vi: 'Có, rất náo nhiệt' } },
            { id: 'b', label: { en: 'No, it is quiet', vi: 'Không, yên tĩnh' } },
            { id: 'c', label: { en: 'It is expensive', vi: 'Đắt' } },
            { id: 'd', label: { en: 'It is new', vi: 'Mới' } }
          ],
          correctId: 'b'
        }
      ]
    },
    {
      id: 'reading-lesson8-dorm',
      title: { en: 'The dormitory', vi: 'Kí túc xá' },
      lines: [
        {
          jp: '大学の 寮は 古いです。',
          romaji: 'Daigaku no ryō wa furui desu.',
          meaning: { en: 'The university dorm is old.', vi: 'Kí túc xá trường đại học cũ.' },
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '寮', reading: 'りょう' },
            { base: '古', reading: 'ふる' }
          ]
        },
        {
          jp: 'でも 便利です。',
          romaji: 'Demo benri desu.',
          meaning: { en: 'But it is convenient.', vi: 'Nhưng tiện lợi.' },
          ruby: [
            { base: '便', reading: 'べん' },
            { base: '利', reading: 'り' }
          ]
        },
        {
          jp: '部屋は 小さいですが、静かです。',
          romaji: 'Heya wa chiisai desu ga, shizuka desu.',
          meaning: {
            en: 'The room is small, but quiet.',
            vi: 'Phòng nhỏ nhưng yên tĩnh.'
          },
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '小', reading: 'ちい' },
            { base: '静', reading: 'しず' }
          ]
        },
        {
          jp: 'レストランは あまり 高くないです。',
          romaji: 'Resutoran wa amari takakunai desu.',
          meaning: {
            en: 'Restaurants are not very expensive.',
            vi: 'Nhà hàng không đắt lắm.'
          },
          ruby: [{ base: '高', reading: 'たか' }]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'How is the dorm?', vi: 'Kí túc xá thế nào?' },
          choices: [
            { id: 'a', label: { en: 'Old but convenient', vi: 'Cũ nhưng tiện lợi' } },
            { id: 'b', label: { en: 'New and expensive', vi: 'Mới và đắt' } },
            { id: 'c', label: { en: 'Big and lively', vi: 'Rộng và náo nhiệt' } },
            { id: 'd', label: { en: 'Quiet but far', vi: 'Yên tĩnh nhưng xa' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'How is the room?', vi: 'Phòng thế nào?' },
          choices: [
            { id: 'a', label: { en: 'Big and noisy', vi: 'Rộng và ồn' } },
            { id: 'b', label: { en: 'Small but quiet', vi: 'Nhỏ nhưng yên tĩnh' } },
            { id: 'c', label: { en: 'New and clean', vi: 'Mới và sạch' } },
            { id: 'd', label: { en: 'Old and inconvenient', vi: 'Cũ và bất tiện' } }
          ],
          correctId: 'b'
        }
      ]
    },
    {
      id: 'reading-lesson8-food',
      title: { en: 'Japanese food', vi: 'Món ăn Nhật' },
      lines: [
        {
          jp: '日本の 食べ物は おいしいです。',
          romaji: 'Nihon no tabemono wa oishii desu.',
          meaning: { en: 'Japanese food is delicious.', vi: 'Món ăn Nhật ngon.' },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '食', reading: 'た' },
            { base: '物', reading: 'もの' }
          ]
        },
        {
          jp: 'でも 高いです。',
          romaji: 'Demo takai desu.',
          meaning: { en: 'But it is expensive.', vi: 'Nhưng đắt.' },
          ruby: [{ base: '高', reading: 'たか' }]
        },
        {
          jp: '魚は 新しいです。',
          romaji: 'Sakana wa atarashii desu.',
          meaning: { en: 'The fish is fresh.', vi: 'Cá tươi.' },
          ruby: [
            { base: '魚', reading: 'さかな' },
            { base: '新', reading: 'あたら' }
          ]
        },
        {
          jp: '野菜も おいしくないですか。',
          romaji: 'Yasai mo oishikunai desu ka.',
          meaning: {
            en: 'The vegetables are delicious too, are they not?',
            vi: 'Rau cũng ngon phải không?'
          },
          ruby: [
            { base: '野', reading: 'や' },
            { base: '菜', reading: 'さい' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What does the speaker say about Japanese food?',
            vi: 'Người nói nói gì về món ăn Nhật?'
          },
          choices: [
            { id: 'a', label: { en: 'Delicious but expensive', vi: 'Ngon nhưng đắt' } },
            { id: 'b', label: { en: 'Cheap but not tasty', vi: 'Rẻ nhưng không ngon' } },
            { id: 'c', label: { en: 'Always cold', vi: 'Luôn lạnh' } },
            { id: 'd', label: { en: 'Not famous', vi: 'Không nổi tiếng' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'How is the fish?', vi: 'Cá thế nào?' },
          choices: [
            { id: 'a', label: { en: 'Fresh (new)', vi: 'Tươi (mới)' } },
            { id: 'b', label: { en: 'Old', vi: 'Cũ' } },
            { id: 'c', label: { en: 'Expensive only', vi: 'Chỉ đắt' } },
            { id: 'd', label: { en: 'Cold to the touch', vi: 'Lạnh buốt' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'Are the vegetables good too?', vi: 'Rau cũng ngon không?' },
          choices: [
            { id: 'a', label: { en: 'Yes', vi: 'Có' } },
            { id: 'b', label: { en: 'No', vi: 'Không' } },
            { id: 'c', label: { en: 'Not mentioned', vi: 'Không nhắc' } },
            { id: 'd', label: { en: 'They are expensive', vi: 'Rau đắt' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'More colors', vi: 'Thêm màu sắc' },
      intro: {
        en: 'Extra color words from the textbook reference table. Some have noun and adjective forms.',
        vi: 'Thêm từ màu từ bảng tham khảo sách. Một số có cả dạng danh từ và tính từ.'
      },
      items: [
        {
          kana: 'きいろ',
          kanji: '黄色',
          romaji: 'kiiro',
          meaning: { en: 'yellow (noun)', vi: 'vàng (danh từ)' },
          ruby: [
            { base: '黄', reading: 'き' },
            { base: '色', reading: 'いろ' }
          ]
        },
        {
          kana: 'きいろい',
          kanji: '黄色い',
          romaji: 'kiiroi',
          meaning: { en: 'yellow (adj)', vi: 'vàng (tính từ)' },
          ruby: [
            { base: '黄', reading: 'き' },
            { base: '色', reading: 'いろ' }
          ]
        },
        {
          kana: 'ちゃいろ',
          kanji: '茶色',
          romaji: 'chairo',
          meaning: { en: 'brown (noun)', vi: 'nâu (danh từ)' },
          ruby: [
            { base: '茶', reading: 'ちゃ' },
            { base: '色', reading: 'いろ' }
          ]
        },
        {
          kana: 'ちゃいろい',
          kanji: '茶色い',
          romaji: 'chairoi',
          meaning: { en: 'brown (adj)', vi: 'nâu (tính từ)' },
          ruby: [
            { base: '茶', reading: 'ちゃ' },
            { base: '色', reading: 'いろ' }
          ]
        },
        {
          kana: 'ピンク',
          romaji: 'pinku',
          meaning: { en: 'pink', vi: 'hồng' }
        },
        {
          kana: 'オレンジ',
          romaji: 'orenji',
          meaning: { en: 'orange', vi: 'da cam' }
        },
        {
          kana: 'みどり',
          kanji: '緑',
          romaji: 'midori',
          meaning: { en: 'green', vi: 'xanh lá cây' },
          ruby: [{ base: '緑', reading: 'みどり' }]
        },
        {
          kana: 'グレー',
          romaji: 'gurē',
          meaning: { en: 'gray', vi: 'xám' }
        },
        {
          kana: 'むらさき',
          kanji: '紫',
          romaji: 'murasaki',
          meaning: { en: 'purple', vi: 'tím' },
          ruby: [{ base: '紫', reading: 'むらさき' }]
        },
        {
          kana: 'ベージュ',
          romaji: 'bēju',
          meaning: { en: 'beige', vi: 'màu be' }
        },
        {
          kana: 'しろ',
          kanji: '白',
          romaji: 'shiro',
          meaning: { en: 'white (noun)', vi: 'trắng (danh từ)' },
          ruby: [{ base: '白', reading: 'しろ' }]
        },
        {
          kana: 'くろ',
          kanji: '黒',
          romaji: 'kuro',
          meaning: { en: 'black (noun)', vi: 'đen (danh từ)' },
          ruby: [{ base: '黒', reading: 'くろ' }]
        },
        {
          kana: 'あか',
          kanji: '赤',
          romaji: 'aka',
          meaning: { en: 'red (noun)', vi: 'đỏ (danh từ)' },
          ruby: [{ base: '赤', reading: 'あか' }]
        },
        {
          kana: 'あお',
          kanji: '青',
          romaji: 'ao',
          meaning: { en: 'blue (noun)', vi: 'xanh da trời (danh từ)' },
          ruby: [{ base: '青', reading: 'あお' }]
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Tastes', vi: 'Vị' },
      items: [
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
          meaning: { en: 'spicy, hot', vi: 'cay' },
          ruby: [{ base: '辛', reading: 'から' }]
        },
        {
          kana: 'にがい',
          kanji: '苦い',
          romaji: 'nigai',
          meaning: { en: 'bitter', vi: 'đắng' },
          ruby: [{ base: '苦', reading: 'にが' }]
        },
        {
          kana: 'しおからい',
          kanji: '塩辛い',
          romaji: 'shiokarai',
          meaning: { en: 'salty', vi: 'mặn' },
          ruby: [
            { base: '塩', reading: 'しお' },
            { base: '辛', reading: 'から' }
          ]
        },
        {
          kana: 'すっぱい',
          romaji: 'suppai',
          meaning: { en: 'sour', vi: 'chua' }
        },
        {
          kana: 'こい',
          kanji: '濃い',
          romaji: 'koi',
          meaning: { en: 'strong, thick (flavor)', vi: 'đậm' },
          ruby: [{ base: '濃', reading: 'こ' }]
        },
        {
          kana: 'うすい',
          kanji: '薄い',
          romaji: 'usui',
          meaning: { en: 'weak, thin (flavor)', vi: 'nhạt' },
          ruby: [{ base: '薄', reading: 'うす' }]
        }
      ]
    },
    {
      kind: 'list',
      title: { en: 'Four seasons in Japan', vi: 'Bốn mùa ở Nhật' },
      intro: {
        en: 'Japan has four distinct seasons. August is usually the hottest month; January and February the coldest, though averages vary by region.',
        vi: 'Nhật Bản có bốn mùa rõ rệt. Tháng 8 thường nóng nhất; tháng 1 và 2 lạnh nhất, nhưng nhiệt độ trung bình khác nhau theo vùng.'
      },
      layout: 'stacked',
      rows: [
        {
          number: '春',
          numberRuby: [{ base: '春', reading: 'はる' }],
          meaning: { en: 'Spring (Mar-May)', vi: 'Xuân (tháng 3-5)' }
        },
        {
          number: '夏',
          numberRuby: [{ base: '夏', reading: 'なつ' }],
          meaning: { en: 'Summer (Jun-Aug)', vi: 'Hạ (tháng 6-8)' }
        },
        {
          number: '秋',
          numberRuby: [{ base: '秋', reading: 'あき' }],
          meaning: { en: 'Autumn (Sep-Nov)', vi: 'Thu (tháng 9-11)' }
        },
        {
          number: '冬',
          numberRuby: [{ base: '冬', reading: 'ふゆ' }],
          meaning: { en: 'Winter (Dec-Feb)', vi: 'Đông (tháng 12-2)' }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Names in this lesson', vi: 'Tên riêng trong bài' },
      includeInQuiz: false,
      items: [
        {
          kana: 'シャンハイ',
          romaji: 'Shanhai',
          meaning: { en: 'Shanghai', vi: 'Thượng Hải' }
        },
        {
          kana: 'きんかくじ',
          kanji: '金閣寺',
          romaji: 'Kinkaku-ji',
          meaning: { en: 'Kinkaku-ji (Golden Pavilion)', vi: 'Chùa Kinkaku (Chùa Vàng)' },
          ruby: [
            { base: '金', reading: 'きん' },
            { base: '閣', reading: 'かく' },
            { base: '寺', reading: 'じ' }
          ]
        },
        {
          kana: 'ならこうえん',
          kanji: '奈良公園',
          romaji: 'Nara-kōen',
          meaning: { en: 'Nara Park', vi: 'Công viên Nara' },
          ruby: [
            { base: '奈', reading: 'な' },
            { base: '良', reading: 'ら' },
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' }
          ]
        },
        {
          kana: 'ふじさん',
          kanji: '富士山',
          romaji: 'Fujisan',
          meaning: { en: 'Mt. Fuji', vi: 'Núi Phú Sĩ' },
          ruby: [
            { base: '富', reading: 'ふ' },
            { base: '士', reading: 'じ' },
            { base: '山', reading: 'さん' }
          ]
        },
        {
          kana: 'しちにんのさむらい',
          kanji: '七人の侍',
          romaji: 'Shichinin no Samurai',
          meaning: { en: 'Seven Samurai (film title)', vi: '7 chàng võ sĩ Samurai (tên phim)' },
          ruby: [
            { base: '七', reading: 'しち' },
            { base: '人', reading: 'にん' },
            { base: '侍', reading: 'さむらい' }
          ]
        }
      ]
    }
  ]
};
