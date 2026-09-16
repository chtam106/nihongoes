import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 22 (plain form + N, relative clauses). */
export const n5Lesson22: Lesson = {
  id: 'lesson-22',
  number: 22,
  title: {
    en: 'Describing people and things',
    vi: 'Mô tả người và vật'
  },
  focus: {
    en: 'Modify nouns with plain-form verbs and adjectives, use relative clauses, and talk about time, promises, and errands with dictionary-form verbs.',
    vi: 'Bổ nghĩa danh từ bằng động từ và tính từ thể thường, dùng mệnh đề quan hệ, và nói về thời gian, lời hẹn, việc cần làm với thể từ điển.'
  },
  vocab: [
    {
      kana: 'きます',
      kanji: '着ます',
      romaji: 'kimasu',
      meaning: {
        en: 'to put on, to wear (upper body: シャツを～)',
        vi: 'mặc (phần trên: シャツを～)'
      },
      ruby: [{ base: '着', reading: 'き' }]
    },
    {
      kana: 'はきます',
      romaji: 'hakimasu',
      meaning: {
        en: 'to put on, to wear (lower body: 靴を～)',
        vi: 'mặc, đi (phần dưới: 靴を～)'
      }
    },
    {
      kana: 'かぶります',
      romaji: 'kaburimasu',
      meaning: {
        en: 'to put on, to wear (on the head: 帽子を～)',
        vi: 'đội, đeo (trên đầu: 帽子を～)'
      }
    },
    {
      kana: 'かけます',
      romaji: 'kakemasu',
      meaning: {
        en: 'to put on, to wear (on the face: 眼鏡を～)',
        vi: 'đeo (trên mặt: 眼鏡を～)'
      }
    },
    {
      kana: 'うまれます',
      kanji: '生まれます',
      romaji: 'umaremasu',
      meaning: { en: 'to be born', vi: 'sinh ra, được sinh ra' },
      ruby: [{ base: '生', reading: 'う' }]
    },
    {
      kana: 'コート',
      romaji: 'kōto',
      meaning: { en: 'coat', vi: 'áo khoác' }
    },
    {
      kana: 'スーツ',
      romaji: 'sūtsu',
      meaning: { en: 'suit', vi: 'com lê, bộ vest' }
    },
    {
      kana: 'セーター',
      romaji: 'sētā',
      meaning: { en: 'sweater', vi: 'áo len' }
    },
    {
      kana: 'ぼうし',
      kanji: '帽子',
      romaji: 'bōshi',
      meaning: { en: 'hat, cap', vi: 'mũ, nón' },
      ruby: [{ base: '帽', reading: 'ぼう' }]
    },
    {
      kana: 'めがね',
      kanji: '眼鏡',
      romaji: 'megane',
      meaning: { en: 'glasses, spectacles', vi: 'kính, mắt kính' },
      ruby: [
        { base: '眼', reading: 'め' },
        { base: '鏡', reading: 'がね' }
      ]
    },
    {
      kana: 'よく',
      romaji: 'yoku',
      meaning: { en: 'often', vi: 'thường, hay' }
    },
    {
      kana: 'おめでとうございます',
      romaji: 'Omedetō gozaimasu.',
      meaning: { en: 'Congratulations.', vi: 'Chúc mừng.' }
    },
    {
      kana: 'こちら',
      romaji: 'kochira',
      meaning: {
        en: 'this way; this person (polite, for introductions)',
        vi: 'phía này; người này (lịch sự, giới thiệu)'
      }
    },
    {
      kana: 'やちん',
      kanji: '家賃',
      romaji: 'yachin',
      meaning: { en: 'rent (for housing)', vi: 'tiền thuê nhà' },
      ruby: [
        { base: '家', reading: 'や' },
        { base: '賃', reading: 'ちん' }
      ]
    },
    {
      kana: 'うーん',
      romaji: 'ūn',
      meaning: { en: 'hmm, let me see (thinking aloud)', vi: 'ừm, để xem (suy nghĩ)' }
    },
    {
      kana: 'ダイニングキッチン',
      romaji: 'dainingu kitchin',
      meaning: { en: 'dining kitchen (combined living and kitchen)', vi: 'bếp kết hợp phòng ăn' }
    },
    {
      kana: 'わしつ',
      kanji: '和室',
      romaji: 'washitsu',
      meaning: { en: 'Japanese-style room', vi: 'phòng kiểu Nhật' },
      ruby: [{ base: '和', reading: 'わ' }]
    },
    {
      kana: 'おしいれ',
      kanji: '押入れ',
      romaji: 'oshiire',
      meaning: { en: 'closet (in a Japanese room)', vi: 'tủ đựng đồ (trong phòng Nhật)' },
      ruby: [
        { base: '押', reading: 'お' },
        { base: '入', reading: 'い' }
      ]
    },
    {
      kana: 'ふとん',
      kanji: '布団',
      romaji: 'futon',
      meaning: { en: 'futon, Japanese bedding', vi: 'futon, nệm gấp kiểu Nhật' },
      ruby: [{ base: '布', reading: 'ふ' }]
    },
    {
      kana: 'アパート',
      romaji: 'apāto',
      meaning: { en: 'apartment (wooden or prefab building)', vi: 'căn hộ (nhà gỗ, nhà lắp ghép)' }
    },
    {
      kana: 'パリ',
      romaji: 'Pari',
      meaning: { en: 'Paris', vi: 'Paris' }
    }
  ],
  phrases: [
    {
      kana: 'おめでとうございます。',
      romaji: 'Omedetō gozaimasu.',
      meaning: { en: 'Congratulations.', vi: 'Chúc mừng.' }
    },
    {
      kana: 'うーん、どうしよう。',
      romaji: 'Ūn, dō shiyō.',
      meaning: { en: 'Hmm, what should I do?', vi: 'Ừm, làm sao đây?' }
    }
  ],
  conversation: [
    {
      id: 'conv-lesson22-apartment',
      title: { en: 'Looking at an apartment', vi: 'Xem căn hộ' },
      speakers: [
        { id: 'agent', name: '不動産屋' },
        { id: 'miller', name: 'ミラー' }
      ],
      lines: [
        {
          speakerId: 'agent',
          jp: 'こちらが アパートです。家賃は 6万円です。',
          romaji: 'Kochira ga apāto desu. Yachin wa rokuman-en desu.',
          meaning: {
            en: 'This is the apartment. The rent is 60,000 yen.',
            vi: 'Đây là căn hộ. Tiền thuê là 6 vạn yên.'
          },
          ruby: [
            { base: '家', reading: 'や' },
            { base: '賃', reading: 'ちん' },
            { base: '万', reading: 'まん' },
            { base: '円', reading: 'えん' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'うーん、いいですね。和室は ありますか。',
          romaji: 'Ūn, ii desu ne. Washitsu wa arimasu ka.',
          meaning: {
            en: 'Hmm, nice. Is there a Japanese-style room?',
            vi: 'Ừm, đẹp đấy. Có phòng kiểu Nhật không?'
          },
          ruby: [
            { base: '和', reading: 'わ' },
            { base: '室', reading: 'しつ' }
          ]
        },
        {
          speakerId: 'agent',
          jp: 'はい、6畳の 和室が あります。押入れも 広いです。',
          romaji: 'Hai, rokujō no washitsu ga arimasu. Oshiire mo hiroi desu.',
          meaning: {
            en: 'Yes, there is a six-mat Japanese room. The closet is spacious too.',
            vi: 'Có, có phòng kiểu Nhật 6 tấm. Tủ đựng cũng rộng.'
          },
          ruby: [
            { base: '畳', reading: 'じょう' },
            { base: '和', reading: 'わ' },
            { base: '室', reading: 'しつ' },
            { base: '押', reading: 'お' },
            { base: '入', reading: 'い' },
            { base: '広', reading: 'ひろ' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'ダイニングキッチンは 明るい 部屋ですね。',
          romaji: 'Dainingu kitchin wa akarui heya desu ne.',
          meaning: {
            en: 'The dining kitchen is a bright room, is it not?',
            vi: 'Bếp kết hợp phòng ăn là phòng sáng nhỉ.'
          },
          ruby: [
            { base: '明', reading: 'あか' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson22-birthday',
      title: { en: 'Congratulations', vi: 'Chúc mừng' },
      speakers: [
        { id: 'sato', name: '佐藤' },
        { id: 'kim', name: 'キム' }
      ],
      lines: [
        {
          speakerId: 'sato',
          jp: 'キムさん、お誕生日 おめでとうございます。',
          romaji: 'Kimu-san, otanjōbi omedetō gozaimasu.',
          meaning: {
            en: 'Kim, happy birthday. Congratulations.',
            vi: 'Kim, chúc mừng sinh nhật.'
          },
          ruby: [
            { base: '誕', reading: 'たん' },
            { base: '生', reading: 'じょう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          speakerId: 'kim',
          jp: 'ありがとうございます。私は パリで 生まれました。',
          romaji: 'Arigatō gozaimasu. Watashi wa Pari de umaremashita.',
          meaning: {
            en: 'Thank you. I was born in Paris.',
            vi: 'Cảm ơn. Tôi sinh ra ở Paris.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '生', reading: 'う' }
          ]
        },
        {
          speakerId: 'sato',
          jp: 'パリで 生まれた 人は よく セーターを 着ますね。',
          romaji: 'Pari de umareta hito wa yoku sētā o kimasu ne.',
          meaning: {
            en: 'People born in Paris often wear sweaters, do they not?',
            vi: 'Người sinh ở Paris hay mặc áo len nhỉ.'
          },
          ruby: [
            { base: '生', reading: 'う' },
            { base: '人', reading: 'ひと' },
            { base: '着', reading: 'き' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'Plain form ＋ N',
      highlights: [],
      title: { en: 'Modifying nouns (普通形＋N)', vi: 'Bổ nghĩa danh từ (普通形＋N)' },
      explanation: {
        en: 'Place a verb, i-adjective, or na-adjective in plain form directly before a noun to describe it: 読む 本, 高い ビル, 静かな 町.',
        vi: 'Đặt động từ, tính từ い, hoặc tính từ な ở thể thường ngay trước danh từ để bổ nghĩa: 読む 本, 高い ビル, 静かな 町.'
      },
      explanationRuby: [
        { base: '読', reading: 'よ' },
        { base: '本', reading: 'ほん' },
        { base: '高', reading: 'たか' },
        { base: '静', reading: 'しず' },
        { base: '町', reading: 'まち' }
      ],
      examples: [
        {
          jp: '私が よく 着る コートです。',
          romaji: 'Watashi ga yoku kiru kōto desu.',
          meaning: { en: 'This is the coat I often wear.', vi: 'Đây là áo khoác tôi hay mặc.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '着', reading: 'き' }
          ]
        },
        {
          jp: '眼鏡を かけている 人は ミラーさんです。',
          romaji: 'Megane o kakete iru hito wa Mirā-san desu.',
          meaning: {
            en: 'The person wearing glasses is Mr. Miller.',
            vi: 'Người đang đeo kính là anh Miller.'
          },
          ruby: [
            { base: '眼', reading: 'め' },
            { base: '鏡', reading: 'がね' },
            { base: '人', reading: 'ひと' }
          ]
        },
        {
          jp: '家賃が 高い アパートは 借りません。',
          romaji: 'Yachin ga takai apāto wa karimasen.',
          meaning: {
            en: 'I will not rent an apartment with high rent.',
            vi: 'Tôi không thuê căn hộ tiền thuê cao.'
          },
          ruby: [
            { base: '家', reading: 'や' },
            { base: '賃', reading: 'ちん' },
            { base: '高', reading: 'たか' },
            { base: '借', reading: 'か' }
          ]
        }
      ]
    },
    {
      pattern: 'Relative clause (plain form ＋ N)',
      highlights: [],
      title: { en: 'Relative clauses', vi: 'Mệnh đề quan hệ' },
      explanation: {
        en: 'A clause in plain form before a noun works like "who/which/that" in English: パリで 生まれた 人, 昨日 買った セーター.',
        vi: 'Mệnh đề thể thường đứng trước danh từ tương đương "người/cái mà...": パリで 生まれた 人, 昨日 買った セーター.'
      },
      explanationRuby: [
        { base: '生', reading: 'う' },
        { base: '人', reading: 'ひと' },
        { base: '昨', reading: 'きの' },
        { base: '日', reading: 'う' },
        { base: '買', reading: 'かった' }
      ],
      examples: [
        {
          jp: 'こちらは 私が 住んで いる アパートです。',
          romaji: 'Kochira wa watashi ga sunde iru apāto desu.',
          meaning: {
            en: 'This is the apartment where I live.',
            vi: 'Đây là căn hộ tôi đang ở.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '住', reading: 'す' }
          ]
        },
        {
          jp: '帽子を かぶっている 人は だれですか。',
          romaji: 'Bōshi o kabutte iru hito wa dare desu ka.',
          meaning: { en: 'Who is the person wearing a hat?', vi: 'Người đội mũ là ai?' },
          ruby: [
            { base: '帽', reading: 'ぼう' },
            { base: '子', reading: 'し' },
            { base: '人', reading: 'ひと' }
          ]
        },
        {
          jp: '和室に 布団を 敷いた 部屋を 見せて ください。',
          romaji: 'Washitsu ni futon o shita heya o misete kudasai.',
          meaning: {
            en: 'Please show me the room where futon was laid out in the Japanese room.',
            vi: 'Xin cho xem phòng đã trải futon trong phòng kiểu Nhật.'
          },
          ruby: [
            { base: '和', reading: 'わ' },
            { base: '室', reading: 'しつ' },
            { base: '布', reading: 'ふ' },
            { base: '団', reading: 'とん' },
            { base: '敷', reading: 'し' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '見', reading: 'み' }
          ]
        }
      ]
    },
    {
      pattern: 'V (dictionary form) ＋ 時間／約束／用事',
      patternRuby: [
        { base: '時', reading: 'じ' },
        { base: '間', reading: 'かん' },
        { base: '約', reading: 'やく' },
        { base: '束', reading: 'そく' },
        { base: '用', reading: 'よう' },
        { base: '事', reading: 'じ' }
      ],
      highlights: ['時間', '約束', '用事'],
      title: {
        en: 'Time, promises, and errands (V＋時間/約束/用事)',
        vi: 'Thời gian, lời hẹn, việc cần làm (V＋時間/約束/用事)'
      },
      explanation: {
        en: 'With 時間, 約束, or 用事, use the dictionary form of the verb to say what you will do: 買い物に 行く 時間, 会う 約束, 出張する 用事.',
        vi: 'Với 時間, 約束, hoặc 用事, dùng thể từ điển của động từ để nói việc sẽ làm: 買い物に 行く 時間, 会う 約束, 出張する 用事.'
      },
      explanationRuby: [
        { base: '時', reading: 'じ' },
        { base: '間', reading: 'かん' },
        { base: '約', reading: 'やく' },
        { base: '束', reading: 'そく' },
        { base: '用', reading: 'よう' },
        { base: '事', reading: 'じ' },
        { base: '買', reading: 'か' },
        { base: '物', reading: 'もの' },
        { base: '行', reading: 'い' },
        { base: '時', reading: 'じ' },
        { base: '間', reading: 'かん' },
        { base: '会', reading: 'あ' },
        { base: '約', reading: 'やく' },
        { base: '束', reading: 'そく' },
        { base: '出', reading: 'しゅっ' },
        { base: '張', reading: 'ちょう' },
        { base: '用', reading: 'よう' },
        { base: '事', reading: 'じ' }
      ],
      examples: [
        {
          jp: '明日 スーツを 試着する 時間が あります。',
          romaji: 'Ashita sūtsu o shichaku suru jikan ga arimasu.',
          meaning: {
            en: 'I have time to try on a suit tomorrow.',
            vi: 'Ngày mai tôi có thời gian thử com lê.'
          },
          ruby: [
            { base: '明', reading: 'あ' },
            { base: '日', reading: 'した' },
            { base: '試', reading: 'し' },
            { base: '着', reading: 'ちゃく' },
            { base: '時間', reading: 'じかん' }
          ]
        },
        {
          jp: '友達と 映画を 見る 約束を しました。',
          romaji: 'Tomodachi to eiga o miru yakusoku o shimashita.',
          meaning: {
            en: 'I made a promise to watch a movie with a friend.',
            vi: 'Tôi hẹn với bạn xem phim.'
          },
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' },
            { base: '見', reading: 'み' },
            { base: '約束', reading: 'やくそく' }
          ]
        },
        {
          jp: '来週 引っ越しの 用事が あります。',
          romaji: 'Raishū hikkoshi no yōji ga arimasu.',
          meaning: {
            en: 'I have moving errands next week.',
            vi: 'Tuần sau tôi có việc chuyển nhà.'
          },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '引', reading: 'ひ' },
            { base: '越', reading: 'こ' },
            { base: '用事', reading: 'ようじ' }
          ]
        }
      ]
    },
    {
      pattern: 'N を 着ます／はきます／かぶります／かけます',
      patternRuby: [{ base: '着', reading: 'き' }],
      highlights: ['を', '着ます', 'はきます', 'かぶります', 'かけます'],
      title: {
        en: 'Wearing clothes (N を 着/はく/かぶる/かける)',
        vi: 'Mặc đồ (N を 着/はく/かぶる/かける)'
      },
      explanation: {
        en: 'Use different verbs for wearing items: 着ます (upper body), はきます (lower body/shoes), かぶります (head), かけます (glasses).',
        vi: 'Dùng động từ khác nhau khi mặc đồ: 着ます (phần trên), はきます (phần dưới/giày), かぶります (đầu), かけます (kính).'
      },
      explanationRuby: [{ base: '着', reading: 'き' }],
      examples: [
        {
          jp: '会社へ 行く とき スーツを 着ます。靴も はきます。',
          romaji: 'Kaisha e iku toki sūtsu o kimasu. Kutsu mo hakimasu.',
          meaning: {
            en: 'When I go to the office I wear a suit. I wear shoes too.',
            vi: 'Khi đi công ty tôi mặc com lê. Cũng đi giày.'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '行', reading: 'い' },
            { base: '着', reading: 'き' },
            { base: '靴', reading: 'くつ' }
          ]
        },
        {
          jp: '日曜日は 帽子を かぶって、眼鏡を かけて 散歩します。',
          romaji: 'Nichiyōbi wa bōshi o kabutte, megane o kakete sanpo shimasu.',
          meaning: {
            en: 'On Sundays I take a walk wearing a hat and glasses.',
            vi: 'Chủ nhật tôi đội mũ, đeo kính rồi đi dạo.'
          },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '帽', reading: 'ぼう' },
            { base: '子', reading: 'し' },
            { base: '眼', reading: 'め' },
            { base: '鏡', reading: 'がね' },
            { base: '散', reading: 'さん' },
            { base: '歩', reading: 'ぽ' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson22-clothes',
      title: { en: 'Getting dressed for work', vi: 'Mặc đồ đi làm' },
      lines: [
        {
          jp: 'ミラーさんは 毎朝 6時に 起きます。',
          romaji: 'Mirā-san wa maiasa rokuji ni okimasu.',
          meaning: {
            en: 'Mr. Miller gets up at 6 every morning.',
            vi: 'Anh Miller dậy lúc 6 giờ sáng mỗi ngày.'
          },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '時', reading: 'じ' },
            { base: '起', reading: 'お' }
          ]
        },
        {
          jp: '冬は よく セーターを 着て、コートを 着ます。',
          romaji: 'Fuyu wa yoku sētā o kite, kōto o kimasu.',
          meaning: {
            en: 'In winter he often wears a sweater and a coat.',
            vi: 'Mùa đông anh ấy hay mặc áo len và áo khoác.'
          },
          ruby: [
            { base: '冬', reading: 'ふゆ' },
            { base: '着', reading: 'き' },
            { base: '着', reading: 'き' }
          ]
        },
        {
          jp: '眼鏡を かけない 日も ありますが、仕事の ときは 必ず かけます。',
          romaji: 'Megane o kakenai hi mo arimasu ga, shigoto no toki wa kanarazu kakemasu.',
          meaning: {
            en: 'Some days he does not wear glasses, but at work he always does.',
            vi: 'Có ngày anh ấy không đeo kính, nhưng lúc làm việc thì luôn đeo.'
          },
          ruby: [
            { base: '眼', reading: 'め' },
            { base: '鏡', reading: 'がね' },
            { base: '日', reading: 'ひ' },
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '必', reading: 'かなら' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What time does Mr. Miller get up?', vi: 'Anh Miller dậy lúc mấy giờ?' },
          choices: [
            { id: 'a', label: { en: '6:00', vi: '6 giờ' } },
            { id: 'b', label: { en: '7:00', vi: '7 giờ' } },
            { id: 'c', label: { en: '8:00', vi: '8 giờ' } },
            { id: 'd', label: { en: '9:00', vi: '9 giờ' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What does he often wear in winter?', vi: 'Mùa đông anh ấy hay mặc gì?' },
          choices: [
            { id: 'a', label: { en: 'Sweater and coat', vi: 'Áo len và áo khoác' } },
            { id: 'b', label: { en: 'Hat only', vi: 'Chỉ mũ' } },
            { id: 'c', label: { en: 'Suit only', vi: 'Chỉ com lê' } },
            { id: 'd', label: { en: 'Kimono', vi: 'Kimono' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson22-housing',
      title: { en: 'Choosing a place to live', vi: 'Chọn chỗ ở' },
      lines: [
        {
          jp: '私は 家賃が 安い アパートを 探しています。',
          romaji: 'Watashi wa yachin ga yasui apāto o sagashite imasu.',
          meaning: {
            en: 'I am looking for an apartment with cheap rent.',
            vi: 'Tôi đang tìm căn hộ tiền thuê rẻ.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '家', reading: 'や' },
            { base: '賃', reading: 'ちん' },
            { base: '安', reading: 'やす' },
            { base: '探', reading: 'さが' }
          ]
        },
        {
          jp: '和室が あって 押入れが 大きい 部屋が いいです。',
          romaji: 'Washitsu ga atte oshiire ga ōkii heya ga ii desu.',
          meaning: {
            en: 'I want a room with a Japanese-style room and a large closet.',
            vi: 'Tôi muốn phòng có phòng kiểu Nhật và tủ rộng.'
          },
          ruby: [
            { base: '和', reading: 'わ' },
            { base: '室', reading: 'しつ' },
            { base: '押', reading: 'お' },
            { base: '入', reading: 'い' },
            { base: '大', reading: 'おお' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' }
          ]
        },
        {
          jp: 'ダイニングキッチンは 狭くても かまいません。',
          romaji: 'Dainingu kitchin wa semakute mo kamaimasen.',
          meaning: {
            en: 'The dining kitchen can be small; I do not mind.',
            vi: 'Bếp kết hợp phòng ăn hẹp cũng được.'
          },
          ruby: [{ base: '狭', reading: 'せま' }]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What kind of apartment is the speaker looking for?',
            vi: 'Người nói tìm căn hộ thế nào?'
          },
          choices: [
            { id: 'a', label: { en: 'Cheap rent', vi: 'Tiền thuê rẻ' } },
            { id: 'b', label: { en: 'Near the station only', vi: 'Chỉ gần ga' } },
            { id: 'c', label: { en: 'Very large', vi: 'Rất rộng' } },
            { id: 'd', label: { en: 'In Paris', vi: 'Ở Paris' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What feature does the speaker want?', vi: 'Người nói muốn điểm gì?' },
          choices: [
            { id: 'a', label: { en: 'Japanese room and big closet', vi: 'Phòng Nhật và tủ lớn' } },
            { id: 'b', label: { en: 'Swimming pool', vi: 'Hồ bơi' } },
            { id: 'c', label: { en: 'Garden only', vi: 'Chỉ vườn' } },
            { id: 'd', label: { en: 'No futon', vi: 'Không futon' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Housing terms', vi: 'Từ vựng về nhà ở' },
      includeInQuiz: false,
      intro: {
        en: 'Common words for rooms and fixtures in Japanese homes.',
        vi: 'Từ thường gặp về phòng và đồ dùng trong nhà Nhật.'
      },
      items: [
        {
          kana: 'リビング',
          romaji: 'ribingu',
          meaning: { en: 'living room', vi: 'phòng khách' }
        },
        {
          kana: 'しんしつ',
          kanji: '寝室',
          romaji: 'shinshitsu',
          meaning: { en: 'bedroom', vi: 'phòng ngủ' },
          ruby: [{ base: '寝', reading: 'しん' }]
        },
        {
          kana: 'だいどころ',
          kanji: '台所',
          romaji: 'daidokoro',
          meaning: { en: 'kitchen', vi: 'bếp, nhà bếp' },
          ruby: [{ base: '台', reading: 'だい' }]
        },
        {
          kana: 'ふろ',
          kanji: '風呂',
          romaji: 'furo',
          meaning: { en: 'bath, bathtub', vi: 'bồn tắm, phòng tắm' },
          ruby: [{ base: '風', reading: 'ふ' }]
        },
        {
          kana: 'トイレ',
          romaji: 'toire',
          meaning: { en: 'toilet, restroom', vi: 'nhà vệ sinh' }
        },
        {
          kana: 'げんかん',
          kanji: '玄関',
          romaji: 'genkan',
          meaning: { en: 'entryway, genkan', vi: 'lối vào, sảnh cửa' },
          ruby: [{ base: '玄', reading: 'げん' }]
        },
        {
          kana: 'ベランダ',
          romaji: 'beranda',
          meaning: { en: 'balcony, veranda', vi: 'ban công' }
        },
        {
          kana: 'エアコン',
          romaji: 'eakon',
          meaning: { en: 'air conditioner', vi: 'máy lạnh, điều hòa' }
        }
      ]
    }
  ]
};
