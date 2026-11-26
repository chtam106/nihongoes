import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 27 (potential verbs, 見える/聞こえる, しか). */
export const n4Lesson27: Lesson = {
  id: 'lesson-27',
  number: 27,
  title: {
    en: 'Can and cannot',
    vi: 'Có thể và không thể'
  },
  focus: {
    en: 'Express ability with potential verbs, natural perception with 見えます/聞こえます, and limits with しか.',
    vi: 'Diễn tả khả năng bằng động từ thể khả năng, cảm nhận tự nhiên với 見えます/聞こえます, và giới hạn với しか.'
  },
  vocab: [
    {
      kana: 'かいます',
      partOfSpeech: 'verb',
      kanji: '飼います',
      romaji: 'kaimasu',
      meaning: { en: 'to keep, to raise (a pet)', vi: 'nuôi (thú cưng)' },
      ruby: [{ base: '飼', reading: 'か' }]
    },
    {
      kana: 'はしります',
      partOfSpeech: 'verb',
      kanji: '走ります',
      romaji: 'hashirimasu',
      meaning: { en: 'to run [道を～: on the road]', vi: 'chạy [道を～: trên đường]' },
      ruby: [{ base: '走', reading: 'はし' }]
    },
    {
      kana: 'みえます',
      partOfSpeech: 'verb',
      kanji: '見えます',
      romaji: 'miemasu',
      meaning: { en: 'to be visible [山が～: mountains]', vi: 'nhìn thấy [山が～: núi]' },
      ruby: [{ base: '見', reading: 'み' }]
    },
    {
      kana: 'きこえます',
      partOfSpeech: 'verb',
      kanji: '聞こえます',
      romaji: 'kikoemasu',
      meaning: { en: 'to be heard [音が～: a sound]', vi: 'nghe thấy [音が～: âm thanh]' },
      ruby: [{ base: '聞', reading: 'き' }]
    },
    {
      kana: 'できます',
      partOfSpeech: 'verb',
      romaji: 'dekimasu',
      meaning: {
        en: 'to be completed, to be built [道が～: a road]',
        vi: 'hoàn thành, được làm [道が～: con đường]'
      }
    },
    {
      kana: 'ひらきます',
      partOfSpeech: 'verb',
      kanji: '開きます',
      romaji: 'hirakimasu',
      meaning: {
        en: 'to open, to hold [教室を～: a class]',
        vi: 'mở, tổ chức [教室を～: lớp học]'
      },
      ruby: [{ base: '開', reading: 'ひら' }]
    },
    {
      kana: 'しんぱい [な]',
      partOfSpeech: 'adjective',
      meaningPartOfSpeech: { vi: 'verb' },
      kanji: '心配 [な]',
      romaji: 'shinpai [na]',
      meaning: { en: 'worried', vi: 'lo lắng' },
      ruby: [
        { base: '心', reading: 'しん' },
        { base: '配', reading: 'ぱい' }
      ]
    },
    {
      kana: 'ペット',
      partOfSpeech: 'noun',
      romaji: 'petto',
      meaning: { en: 'pet', vi: 'thú cưng' }
    },
    {
      kana: 'とり',
      partOfSpeech: 'noun',
      kanji: '鳥',
      romaji: 'tori',
      meaning: { en: 'bird', vi: 'chim' },
      ruby: [{ base: '鳥', reading: 'とり' }]
    },
    {
      kana: 'こえ',
      partOfSpeech: 'noun',
      kanji: '声',
      romaji: 'koe',
      meaning: { en: 'voice', vi: 'tiếng, giọng nói' },
      ruby: [{ base: '声', reading: 'こえ' }]
    },
    {
      kana: 'なみ',
      partOfSpeech: 'noun',
      kanji: '波',
      romaji: 'nami',
      meaning: { en: 'wave', vi: 'sóng' },
      ruby: [{ base: '波', reading: 'なみ' }]
    },
    {
      kana: 'はなび',
      partOfSpeech: 'noun',
      kanji: '花火',
      romaji: 'hanabi',
      meaning: { en: 'fireworks', vi: 'pháo hoa' },
      ruby: [
        { base: '花', reading: 'はな' },
        { base: '火', reading: 'び' }
      ]
    },
    {
      kana: 'どうぐ',
      partOfSpeech: 'noun',
      kanji: '道具',
      romaji: 'dōgu',
      meaning: { en: 'tool', vi: 'dụng cụ' },
      ruby: [
        { base: '道', reading: 'どう' },
        { base: '具', reading: 'ぐ' }
      ]
    },
    {
      kana: 'クリーニング',
      partOfSpeech: 'noun',
      meaningPartOfSpeech: { vi: 'verb' },
      romaji: 'kurīningu',
      meaning: { en: 'dry cleaning', vi: 'giặt là' }
    },
    {
      kana: 'いえ',
      partOfSpeech: 'noun',
      kanji: '家',
      romaji: 'ie',
      meaning: { en: 'house, home', vi: 'nhà' },
      ruby: [{ base: '家', reading: 'いえ' }]
    },
    {
      kana: 'マンション',
      partOfSpeech: 'noun',
      romaji: 'manshon',
      meaning: { en: 'apartment building', vi: 'chung cư' }
    },
    {
      kana: 'キッチン',
      partOfSpeech: 'noun',
      romaji: 'kicchin',
      meaning: { en: 'kitchen', vi: 'bếp' }
    },
    {
      kana: '～きょうしつ',
      partOfSpeech: 'suffix',
      kanji: '～教室',
      romaji: '~kyōshitsu',
      meaning: { en: '~ classroom', vi: 'lớp ~' },
      ruby: [
        { base: '教', reading: 'きょう' },
        { base: '室', reading: 'しつ' }
      ]
    },
    {
      kana: 'パーティールーム',
      partOfSpeech: 'noun',
      romaji: 'pātī rūmu',
      meaning: { en: 'party room', vi: 'phòng tiệc' }
    },
    {
      kana: 'かた',
      partOfSpeech: 'noun',
      kanji: '方',
      romaji: 'kata',
      meaning: { en: 'person (honorific of ひと)', vi: 'vị, ngài (kính ngữ của ひと)' },
      ruby: [{ base: '方', reading: 'かた' }]
    },
    {
      kana: '～ご',
      partOfSpeech: 'suffix',
      kanji: '～後',
      romaji: '~go',
      meaning: { en: 'after ~ (time)', vi: '~ sau (thời gian)' },
      ruby: [{ base: '後', reading: 'ご' }]
    },
    {
      kana: '～しか',
      partOfSpeech: 'particle',
      romaji: '~shika',
      meaning: { en: 'only ~ (with negative)', vi: 'chỉ ~ (đi với phủ định)' }
    },
    {
      kana: 'ほかの',
      partOfSpeech: 'determiner',
      meaningPartOfSpeech: { vi: 'adjective' },
      romaji: 'hoka no',
      meaning: { en: 'other', vi: 'khác' }
    },
    {
      kana: 'はっきり',
      partOfSpeech: 'adverb',
      romaji: 'hakkiri',
      meaning: { en: 'clearly', vi: 'rõ ràng' }
    },
    {
      kana: 'かぐ',
      partOfSpeech: 'noun',
      kanji: '家具',
      romaji: 'kagu',
      meaning: { en: 'furniture', vi: 'đồ nội thất' },
      ruby: [
        { base: '家', reading: 'か' },
        { base: '具', reading: 'ぐ' }
      ]
    },
    {
      kana: 'ほんだな',
      partOfSpeech: 'noun',
      kanji: '本棚',
      romaji: 'hondana',
      meaning: { en: 'bookshelf', vi: 'giá sách' },
      ruby: [
        { base: '本', reading: 'ほん' },
        { base: '棚', reading: 'だな' }
      ]
    },
    {
      kana: 'いつか',
      partOfSpeech: 'adverb',
      romaji: 'itsuka',
      meaning: { en: 'sometime, someday', vi: 'lúc nào đó, một ngày nào đó' }
    },
    {
      kana: 'たてます',
      partOfSpeech: 'verb',
      kanji: '建てます',
      romaji: 'tatemasu',
      meaning: { en: 'to build', vi: 'xây' },
      ruby: [{ base: '建', reading: 'た' }]
    },
    {
      kana: 'すばらしい',
      partOfSpeech: 'adjective',
      romaji: 'subarashii',
      meaning: { en: 'wonderful, splendid', vi: 'tuyệt vời' }
    },
    {
      kana: 'こどもたち',
      partOfSpeech: 'noun',
      kanji: '子どもたち',
      romaji: 'kodomotachi',
      meaning: { en: 'children', vi: 'bọn trẻ, các em' },
      ruby: [{ base: '子', reading: 'こ' }]
    },
    {
      kana: 'だいすき [な]',
      partOfSpeech: 'adjective',
      meaningPartOfSpeech: { en: 'verb', vi: 'verb' },
      kanji: '大好き [な]',
      romaji: 'daisuki [na]',
      meaning: { en: 'love, like very much', vi: 'rất thích' },
      ruby: [
        { base: '大', reading: 'だい' },
        { base: '好', reading: 'す' }
      ]
    },
    {
      kana: 'しゅじんこう',
      partOfSpeech: 'noun',
      kanji: '主人公',
      romaji: 'shujinkō',
      meaning: { en: 'main character', vi: 'nhân vật chính' },
      ruby: [
        { base: '主', reading: 'しゅ' },
        { base: '人', reading: 'じん' },
        { base: '公', reading: 'こう' }
      ]
    },
    {
      kana: 'かたち',
      partOfSpeech: 'noun',
      kanji: '形',
      romaji: 'katachi',
      meaning: { en: 'shape, form', vi: 'hình dạng' },
      ruby: [{ base: '形', reading: 'かたち' }]
    },
    {
      kana: 'ふしぎ [な]',
      partOfSpeech: 'adjective',
      kanji: '不思議 [な]',
      romaji: 'fushigi [na]',
      meaning: { en: 'strange, mysterious', vi: 'kỳ lạ' },
      ruby: [
        { base: '不', reading: 'ふ' },
        { base: '思', reading: 'し' },
        { base: '議', reading: 'ぎ' }
      ]
    },
    {
      kana: 'ポケット',
      partOfSpeech: 'noun',
      romaji: 'poketto',
      meaning: { en: 'pocket', vi: 'túi áo' }
    },
    {
      kana: 'たとえば',
      partOfSpeech: 'adverb',
      meaningPartOfSpeech: { vi: 'noun' },
      kanji: '例えば',
      romaji: 'tatoeba',
      meaning: { en: 'for example', vi: 'ví dụ' },
      ruby: [{ base: '例', reading: 'たと' }]
    },
    {
      kana: 'つけます',
      partOfSpeech: 'verb',
      kanji: '付けます',
      romaji: 'tsukemasu',
      meaning: { en: 'to attach, to put on', vi: 'gắn, đính' },
      ruby: [{ base: '付', reading: 'つ' }]
    },
    {
      kana: 'じゆうに',
      partOfSpeech: 'adverb',
      kanji: '自由に',
      romaji: 'jiyū ni',
      meaning: { en: 'freely', vi: 'tự do, thoải mái' },
      ruby: [
        { base: '自', reading: 'じ' },
        { base: '由', reading: 'ゆう' }
      ]
    },
    {
      kana: 'そら',
      partOfSpeech: 'noun',
      kanji: '空',
      romaji: 'sora',
      meaning: { en: 'sky', vi: 'bầu trời' },
      ruby: [{ base: '空', reading: 'そら' }]
    },
    {
      kana: 'とびます',
      partOfSpeech: 'verb',
      kanji: '飛びます',
      romaji: 'tobimasu',
      meaning: { en: 'to fly', vi: 'bay' },
      ruby: [{ base: '飛', reading: 'と' }]
    },
    {
      kana: 'むかし',
      partOfSpeech: 'noun',
      kanji: '昔',
      romaji: 'mukashi',
      meaning: { en: 'old days, long ago', vi: 'ngày xưa' },
      ruby: [{ base: '昔', reading: 'むかし' }]
    },
    {
      kana: 'じぶん',
      partOfSpeech: 'pronoun',
      kanji: '自分',
      romaji: 'jibun',
      meaning: { en: 'oneself', vi: 'bản thân' },
      ruby: [
        { base: '自', reading: 'じ' },
        { base: '分', reading: 'ぶん' }
      ]
    },
    {
      kana: 'しょうらい',
      partOfSpeech: 'noun',
      kanji: '将来',
      romaji: 'shōrai',
      meaning: { en: 'future', vi: 'tương lai' },
      ruby: [
        { base: '将', reading: 'しょう' },
        { base: '来', reading: 'らい' }
      ]
    }
  ],
  phrases: [
    {
      kana: 'なんでも できますね。',
      partOfSpeech: 'expression',
      kanji: '何でも できますね。',
      romaji: 'Nandemo dekimasu ne.',
      meaning: { en: 'You can do anything.', vi: 'Anh/chị cái gì cũng làm được nhỉ.' },
      ruby: [{ base: '何', reading: 'なん' }]
    },
    {
      kana: 'すばらしい ゆめですね。',
      partOfSpeech: 'expression',
      kanji: 'すばらしい 夢ですね。',
      romaji: 'Subarashii yume desu ne.',
      meaning: { en: 'What a wonderful dream.', vi: 'Một ước mơ tuyệt vời nhỉ.' },
      ruby: [{ base: '夢', reading: 'ゆめ' }]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson27-apartment',
      title: { en: 'You can do anything', vi: 'Cái gì cũng làm được' },
      speakers: [
        { id: 'miller', name: 'ミラー' },
        { id: 'suzuki', name: '鈴木' }
      ],
      lines: [
        {
          speakerId: 'miller',
          jp: '部屋が 明るくて いいですね。',
          romaji: 'Heya ga akarukute ii desu ne.',
          meaning: { en: 'The room is bright and nice.', vi: 'Phòng sáng sủa và đẹp nhỉ.' },
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '明', reading: 'あか' }
          ]
        },
        {
          speakerId: 'suzuki',
          jp: 'はい。天気の いい 日には 海が 見えます。',
          romaji: 'Hai. Tenki no ii hi ni wa umi ga miemasu.',
          meaning: {
            en: 'Yes. On clear days you can see the sea.',
            vi: 'Vâng. Ngày đẹp trời thì nhìn thấy biển.'
          },
          ruby: [
            { base: '天', reading: 'てん' },
            { base: '気', reading: 'き' },
            { base: '日', reading: 'ひ' },
            { base: '海', reading: 'う' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'この テーブル、デザインが おもしろいですね。どこで 買いましたか。',
          romaji: 'Kono tēburu, dezain ga omoshiroi desu ne. Doko de kaimashita ka.',
          meaning: {
            en: 'This table has an interesting design. Where did you buy it?',
            vi: 'Cái bàn này thiết kế hay nhỉ. Anh mua ở đâu?'
          },
          ruby: [{ base: '買', reading: 'か' }]
        },
        {
          speakerId: 'suzuki',
          jp: 'いいえ、自分で 作りました。',
          romaji: 'Iie, jibun de tsukurimashita.',
          meaning: { en: 'No, I made it myself.', vi: 'Không, tôi tự làm.' },
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' },
            { base: '作', reading: 'つく' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'えっ、本当ですか。',
          romaji: 'E, hontō desu ka.',
          meaning: { en: 'Really?', vi: 'Thật à?' },
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '当', reading: 'とう' }
          ]
        },
        {
          speakerId: 'suzuki',
          jp: 'はい。趣味は 家具を 自分で 作る ことです。',
          romaji: 'Hai. Shumi wa kagu o jibun de tsukuru koto desu.',
          meaning: {
            en: 'Yes. My hobby is making furniture myself.',
            vi: 'Vâng. Sở thích của tôi là tự làm đồ nội thất.'
          },
          ruby: [
            { base: '趣', reading: 'しゅ' },
            { base: '味', reading: 'み' },
            { base: '家', reading: 'か' },
            { base: '具', reading: 'ぐ' },
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' },
            { base: '作', reading: 'つく' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'そうですか。あの 本棚も 作りましたか。',
          romaji: 'Sō desu ka. Ano hondana mo tsukurimashita ka.',
          meaning: {
            en: 'I see. Did you make that bookshelf too?',
            vi: 'Vậy à. Giá sách kia cũng anh làm à?'
          },
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '棚', reading: 'だな' },
            { base: '作', reading: 'つく' }
          ]
        },
        {
          speakerId: 'suzuki',
          jp: 'はい。',
          romaji: 'Hai.',
          meaning: { en: 'Yes.', vi: 'Vâng.' }
        },
        {
          speakerId: 'miller',
          jp: 'すごいですね。鈴木さんは 何でも できますね。',
          romaji: 'Sugoi desu ne. Suzuki-san wa nandemo dekimasu ne.',
          meaning: {
            en: 'That is amazing. Mr. Suzuki, you can do anything.',
            vi: 'Giỏi quá. Anh Suzuki cái gì cũng làm được nhỉ.'
          },
          ruby: [
            { base: '鈴', reading: 'すず' },
            { base: '木', reading: 'き' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          speakerId: 'suzuki',
          jp: 'いつか 自分で 家を 建てるのが 夢です。',
          romaji: 'Itsuka jibun de ie o tateru no ga yume desu.',
          meaning: {
            en: 'My dream is to build a house by myself someday.',
            vi: 'Mơ ước của tôi là một ngày nào đó tự xây nhà.'
          },
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' },
            { base: '家', reading: 'いえ' },
            { base: '建', reading: 'た' },
            { base: '夢', reading: 'ゆめ' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'すばらしい 夢ですね。',
          romaji: 'Subarashii yume desu ne.',
          meaning: { en: 'What a wonderful dream.', vi: 'Một ước mơ tuyệt vời nhỉ.' },
          ruby: [{ base: '夢', reading: 'ゆめ' }]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-られる / V-potential',
      highlights: ['られる'],
      title: { en: 'Potential verbs', vi: 'Động từ thể khả năng' },
      explanation: {
        en: 'The potential form means "can do". Group I: change the sound before ます from the い row to the え row: 書きます→書けます, 話します→話せます. Group II: drop ます and add られます: 食べます→食べられます. Group III: 来ます→来られます (read こられます), します→できます. Potential verbs conjugate like Group II. わかります already implies ability, so わかれます is not used.',
        vi: 'Thể khả năng nghĩa "có thể làm". Nhóm I: đổi âm trước ます từ hàng い sang hàng え: 書きます→書けます, 話します→話せます. Nhóm II: bỏ ます, thêm られます: 食べます→食べられます. Nhóm III: 来ます→来られます (đọc là こられます), します→できます. Động từ thể khả năng chia tiếp như nhóm II. わかります đã mang nghĩa khả năng, không dùng わかれます.'
      },
      explanationRuby: [
        { base: '書', reading: 'か' },
        { base: '書', reading: 'か' },
        { base: '話', reading: 'はな' },
        { base: '話', reading: 'はな' },
        { base: '食', reading: 'た' },
        { base: '食', reading: 'た' },
        { base: '来', reading: 'き' },
        { base: '来', reading: 'こ' }
      ],
      examples: [
        {
          jp: '私は 日本語が 話せます。',
          romaji: 'Watashi wa Nihongo ga hanasemasu.',
          meaning: { en: 'I can speak Japanese.', vi: 'Tôi có thể nói tiếng Nhật.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '話', reading: 'はな' }
          ]
        },
        {
          jp: '一人で 病院へ 行けますか。',
          romaji: 'Hitori de byōin e ikemasu ka.',
          meaning: {
            en: 'Can you go to the hospital alone?',
            vi: 'Một mình đi đến bệnh viện được không?'
          },
          ruby: [
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' },
            { base: '病', reading: 'びょう' },
            { base: '院', reading: 'いん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: 'この 銀行で ドルが 換えられます。',
          romaji: 'Kono ginkō de doru ga kaeraremasu.',
          meaning: {
            en: 'You can exchange dollars at this bank.',
            vi: 'Ở ngân hàng này đổi được đô-la.'
          },
          ruby: [
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '換', reading: 'か' }
          ]
        }
      ],
      answers: {
        explanation: {
          en: 'With potential verbs the object marker changes from を to が: 日本語を 話します → 日本語が 話せます.',
          vi: 'Với động từ khả năng, tân ngữ đổi từ を sang が: 日本語を 話します → 日本語が 話せます.'
        },
        explanationRuby: [
          { base: '日', reading: 'に' },
          { base: '本', reading: 'ほん' },
          { base: '語', reading: 'ご' },
          { base: '話', reading: 'はな' },
          { base: '日', reading: 'に' },
          { base: '本', reading: 'ほん' },
          { base: '語', reading: 'ご' },
          { base: '話', reading: 'はな' }
        ],
        examples: [
          {
            jp: '新聞が 読めますか。',
            romaji: 'Shinbun ga yomemasu ka.',
            meaning: { en: 'Can you read newspapers?', vi: 'Anh/chị đọc được báo không?' },
            ruby: [
              { base: '新', reading: 'しん' },
              { base: '聞', reading: 'ぶん' },
              { base: '読', reading: 'よ' }
            ]
          },
          {
            jp: '……いいえ、読めません。',
            romaji: '……Iie, yomemasen.',
            meaning: { en: '...No, I cannot.', vi: '...Không, tôi không đọc được.' },
            ruby: [{ base: '読', reading: 'よ' }]
          }
        ]
      }
    },
    {
      pattern: 'N が 見えます / 聞こえます',
      patternRuby: [
        { base: '見', reading: 'み' },
        { base: '聞', reading: 'き' }
      ],
      highlights: ['が', '見', 'え', '聞', 'こ', 'え'],
      title: {
        en: 'Natural seeing and hearing (見えます/聞こえます)',
        vi: 'Nhìn/nghe thấy tự nhiên (見えます/聞こえます)'
      },
      explanation: {
        en: '見えます and 聞こえます describe what comes into sight or hearing without trying: 新幹線から 富士山が 見えます, ラジオの 音が 聞こえます. For intentional looking/listening use 見られます/聞けます.',
        vi: '見えます và 聞こえます diễn tả cảnh/tiếng tự nhiên vào tầm nhìn/nghe: 新幹線から 富士山が 見えます, ラジオの 音が 聞こえます. Cố ý nhìn/nghe dùng 見られます/聞けます.'
      },
      explanationRuby: [
        { base: '見', reading: 'み' },
        { base: '聞', reading: 'き' },
        { base: '新', reading: 'しん' },
        { base: '幹', reading: 'かん' },
        { base: '線', reading: 'せん' },
        { base: '富', reading: 'ふ' },
        { base: '士', reading: 'じ' },
        { base: '山', reading: 'さん' },
        { base: '見', reading: 'み' },
        { base: '音', reading: 'おと' },
        { base: '聞', reading: 'き' },
        { base: '見', reading: 'み' },
        { base: '聞', reading: 'き' }
      ],
      examples: [
        {
          jp: '山が はっきり 見えます。',
          romaji: 'Yama ga hakkiri miemasu.',
          meaning: { en: 'The mountains are clearly visible.', vi: 'Nhìn thấy núi rất rõ.' },
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          jp: '鳥の 声が 聞こえます。',
          romaji: 'Tori no koe ga kikoemasu.',
          meaning: { en: 'I can hear birds.', vi: 'Nghe thấy tiếng chim.' },
          ruby: [
            { base: '鳥', reading: 'とり' },
            { base: '声', reading: 'こえ' },
            { base: '聞', reading: 'き' }
          ]
        },
        {
          jp: '新宿で 今 黒沢の 映画が 見られます。',
          romaji: 'Shinjuku de ima Kurosawa no eiga ga miraremasu.',
          meaning: {
            en: 'You can watch Kurosawa films in Shinjuku now.',
            vi: 'Ở Shinjuku bây giờ xem được phim Kurosawa.'
          },
          ruby: [
            { base: '新', reading: 'しん' },
            { base: '宿', reading: 'じゅく' },
            { base: '今', reading: 'いま' },
            { base: '黒', reading: 'くろ' },
            { base: '沢', reading: 'さわ' },
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' },
            { base: '見', reading: 'み' }
          ]
        }
      ]
    },
    {
      pattern: 'N が できます',
      highlights: ['が', 'できます'],
      title: { en: 'Completion and creation (できます)', vi: 'Hoàn thành, phát sinh (できます)' },
      explanation: {
        en: 'できます can mean something comes into existence or is completed: 駅の 前に 大きい スーパーが できました, 時計の 修理は いつ できますか.',
        vi: 'できます có thể nghĩa phát sinh hoặc hoàn thành: 駅の 前に 大きい スーパーが できました, 時計の 修理は いつ できますか.'
      },
      explanationRuby: [
        { base: '駅', reading: 'えき' },
        { base: '前', reading: 'まえ' },
        { base: '大', reading: 'おお' },
        { base: '時', reading: 'と' },
        { base: '計', reading: 'けい' },
        { base: '修', reading: 'しゅう' },
        { base: '理', reading: 'り' }
      ],
      examples: [
        {
          jp: '駅の 前に 大きい スーパーが できました。',
          romaji: 'Eki no mae ni ōkii sūpā ga dekimashita.',
          meaning: {
            en: 'A large supermarket was built in front of the station.',
            vi: 'Trước ga có siêu thị lớn được xây lên.'
          },
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '前', reading: 'まえ' },
            { base: '大', reading: 'おお' }
          ]
        },
        {
          jp: '法隆寺は 607年に 建てられました。',
          romaji: 'Hōryūji wa 607-nen ni tateraremashita.',
          meaning: {
            en: 'Hōryūji Temple was built in the year 607.',
            vi: 'Chùa Hōryūji được xây năm 607.'
          },
          ruby: [
            { base: '法', reading: 'ほう' },
            { base: '隆', reading: 'りゅう' },
            { base: '寺', reading: 'じ' },
            { base: '年', reading: 'ねん' },
            { base: '建', reading: 'た' }
          ]
        }
      ]
    },
    {
      pattern: 'N しか V-negative',
      highlights: ['しか'],
      title: { en: 'Only ~ (しか + negative)', vi: 'Chỉ ~ (しか + phủ định)' },
      explanation: {
        en: 'しか after a noun or quantity requires a negative predicate and means "only that, nothing else": ローマ字しか 書けません. With が/を objects the particle is dropped; with other particles しか follows them.',
        vi: 'しか sau danh từ/số lượng đi với vị ngữ phủ định, nghĩa "chỉ có thế": ローマ字しか 書けません. Với が/を thì bỏ trợ từ; trợ từ khác thì しか đứng sau.'
      },
      explanationRuby: [
        { base: '字', reading: 'じ' },
        { base: '書', reading: 'か' }
      ],
      examples: [
        {
          jp: 'ローマ字しか 書けません。',
          romaji: 'Rōmaji shika kakemasen.',
          meaning: { en: 'I can only write romaji.', vi: 'Tôi chỉ viết được chữ La Mã.' },
          ruby: [
            { base: '字', reading: 'じ' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          jp: 'うちの 会社は 夏休みが 1週間しか ありません。',
          romaji: 'Uchi no kaisha wa natsuyasumi ga isshūkan shika arimasen.',
          meaning: {
            en: 'At my company summer vacation is only one week.',
            vi: 'Công ty tôi chỉ được nghỉ hè một tuần.'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '夏', reading: 'なつ' },
            { base: '休', reading: 'やす' },
            { base: '週', reading: 'しゅう' },
            { base: '間', reading: 'かん' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 は ～ N2 は ～',
      highlights: ['は'],
      title: { en: 'Contrastive は', vi: 'は đối lập' },
      explanation: {
        en: 'は can mark contrast between two items: ワインは 飲みますが、ビールは 飲みません, きのうは 山が 見えましたが、きょうは 見えません.',
        vi: 'は đánh dấu đối lập: ワインは 飲みますが、ビールは 飲みません, きのうは 山が 見えましたが、きょうは 見えません.'
      },
      explanationRuby: [
        { base: '飲', reading: 'の' },
        { base: '飲', reading: 'の' },
        { base: '山', reading: 'やま' },
        { base: '見', reading: 'み' },
        { base: '見', reading: 'み' }
      ],
      examples: [
        {
          jp: 'ワインは 飲みますが、ビールは 飲みません。',
          romaji: 'Wain wa nomimasu ga, bīru wa nomimasen.',
          meaning: {
            en: 'I drink wine, but I do not drink beer.',
            vi: 'Rượu vang thì uống, còn bia thì không.'
          },
          ruby: [
            { base: '飲', reading: 'の' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          jp: 'この マンションでは 鳥や 小さな 魚しか 飼えません。',
          romaji: 'Kono manshon de wa tori ya chiisana sakana shika kaemasen.',
          meaning: {
            en: 'In this apartment building you can only keep birds or small fish.',
            vi: 'Ở chung cư này chỉ nuôi được chim hoặc cá nhỏ.'
          },
          ruby: [
            { base: '鳥', reading: 'とり' },
            { base: '小', reading: 'ちい' },
            { base: '魚', reading: 'さかな' },
            { base: '飼', reading: 'か' }
          ]
        }
      ]
    },
    {
      pattern: 'N では / N には',
      highlights: ['は'],
      title: { en: 'Emphasizing particles with は', vi: 'Nhấn mạnh với は sau trợ từ' },
      explanation: {
        en: 'When は emphasizes a noun that already has a particle, は follows that particle: 日本では, 天気の いい 日には. With が/を the original particle is dropped.',
        vi: 'Khi は nhấn mạnh danh từ đã có trợ từ, は đứng sau trợ từ đó: 日本では, 天気の いい 日には. Với が/を thì bỏ trợ từ gốc.'
      },
      explanationRuby: [
        { base: '日', reading: 'に' },
        { base: '本', reading: 'ほん' },
        { base: '天', reading: 'てん' },
        { base: '気', reading: 'き' },
        { base: '日', reading: 'ひ' }
      ],
      examples: [
        {
          jp: '天気の いい 日には 海が 見えるんです。',
          romaji: 'Tenki no ii hi ni wa umi ga mieru n desu.',
          meaning: {
            en: 'On clear days you can see the sea.',
            vi: 'Ngày đẹp trời thì nhìn thấy biển.'
          },
          ruby: [
            { base: '天', reading: 'てん' },
            { base: '気', reading: 'き' },
            { base: '日', reading: 'ひ' },
            { base: '海', reading: 'う' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          jp: 'ここからは 東京スカイツリーが 見えません。',
          romaji: 'Koko kara wa Tōkyō Sukai Tsurī ga miemasen.',
          meaning: {
            en: 'From here you cannot see Tokyo Skytree.',
            vi: 'Từ đây không nhìn thấy Tokyo Skytree.'
          },
          ruby: [
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '見', reading: 'み' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson27-doraemon',
      title: { en: 'Doraemon', vi: 'Doraemon' },
      titleJp: 'ドラえもん',
      lines: [
        {
          jp: '子どもたちは ドラえもんが 大好きです。',
          romaji: 'Kodomotachi wa Doraemon ga daisuki desu.',
          meaning: { en: 'Children love Doraemon.', vi: 'Trẻ em rất thích Doraemon.' },
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '大', reading: 'だい' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          jp: 'ドラえもんは 未来から 来た ネコ型の ロボットです。',
          romaji: 'Doraemon wa mirai kara kita nekogata no robotto desu.',
          meaning: {
            en: 'Doraemon is a cat-shaped robot who came from the future.',
            vi: 'Doraemon là chú mèo máy đến từ tương lai.'
          },
          ruby: [
            { base: '未', reading: 'み' },
            { base: '来', reading: 'らい' },
            { base: '来', reading: 'き' },
            { base: '型', reading: 'がた' }
          ]
        },
        {
          jp: 'ポケットから 不思議な 道具が いろいろ 出せます。',
          romaji: 'Poketto kara fushigi na dōgu ga iroiro dasemasu.',
          meaning: {
            en: 'He can take all kinds of amazing gadgets out of his pocket.',
            vi: 'Cậu ấy có thể lấy ra đủ loại bảo bối kỳ diệu từ túi.'
          },
          ruby: [
            { base: '不', reading: 'ふ' },
            { base: '思', reading: 'し' },
            { base: '議', reading: 'ぎ' },
            { base: '道', reading: 'どう' },
            { base: '具', reading: 'ぐ' },
            { base: '出', reading: 'だ' }
          ]
        },
        {
          jp: '例えば「タケコプター」を 使うと、空を 自由に 飛べます。',
          romaji: 'Tatoeba "takekoputā" o tsukau to, sora o jiyū ni tobemasu.',
          meaning: {
            en: 'For example, with the "Take-copter" you can fly freely in the sky.',
            vi: 'Ví dụ dùng "chong chóng tre" thì có thể bay tự do trên trời.'
          },
          ruby: [
            { base: '例', reading: 'たと' },
            { base: '使', reading: 'つか' },
            { base: '空', reading: 'そら' },
            { base: '自', reading: 'じ' },
            { base: '由', reading: 'ゆう' },
            { base: '飛', reading: 'と' }
          ]
        },
        {
          jp: 'でも、そんな 道具は 漫画の 中にしか ありません。',
          romaji: 'Demo, sonna dōgu wa manga no naka ni shika arimasen.',
          meaning: {
            en: 'But gadgets like that exist only in the manga.',
            vi: 'Nhưng những bảo bối như thế chỉ có trong truyện tranh.'
          },
          ruby: [
            { base: '道', reading: 'どう' },
            { base: '具', reading: 'ぐ' },
            { base: '漫', reading: 'まん' },
            { base: '画', reading: 'が' },
            { base: '中', reading: 'なか' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What can Doraemon take out of his pocket?',
            vi: 'Doraemon có thể lấy gì ra từ túi?'
          },
          jp: 'ドラえもんは ポケットから 何が 出せますか。',
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '出', reading: 'だ' }
          ],
          choices: [
            {
              id: 'a',
              label: { en: 'Amazing gadgets', vi: 'Bảo bối kỳ diệu' },
              jp: '不思議な 道具',
              ruby: [
                { base: '不', reading: 'ふ' },
                { base: '思', reading: 'し' },
                { base: '議', reading: 'ぎ' },
                { base: '道', reading: 'どう' },
                { base: '具', reading: 'ぐ' }
              ]
            },
            {
              id: 'b',
              label: { en: 'Money', vi: 'Tiền' },
              jp: 'お金',
              ruby: [{ base: '金', reading: 'かね' }]
            },
            {
              id: 'c',
              label: { en: 'Real birds', vi: 'Chim thật' },
              jp: '本物の 鳥',
              ruby: [
                { base: '本', reading: 'ほん' },
                { base: '物', reading: 'もの' },
                { base: '鳥', reading: 'とり' }
              ]
            },
            {
              id: 'd',
              label: { en: 'Food', vi: 'Đồ ăn' },
              jp: '食べ物',
              ruby: [
                { base: '食', reading: 'た' },
                { base: '物', reading: 'もの' }
              ]
            }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'Where do gadgets like that exist?',
            vi: 'Những bảo bối như thế có ở đâu?'
          },
          jp: 'そんな 道具は どこに ありますか。',
          ruby: [
            { base: '道', reading: 'どう' },
            { base: '具', reading: 'ぐ' }
          ],
          choices: [
            {
              id: 'a',
              label: { en: 'Only in the manga', vi: 'Chỉ trong truyện tranh' },
              jp: '漫画の 中',
              ruby: [
                { base: '漫', reading: 'まん' },
                { base: '画', reading: 'が' },
                { base: '中', reading: 'なか' }
              ]
            },
            {
              id: 'b',
              label: { en: 'At a department store', vi: 'Ở trung tâm thương mại' },
              jp: 'デパート'
            },
            {
              id: 'c',
              label: { en: 'At school', vi: 'Ở trường học' },
              jp: '学校',
              ruby: [
                { base: '学', reading: 'がっ' },
                { base: '校', reading: 'こう' }
              ]
            },
            {
              id: 'd',
              label: { en: 'At a shop by the station', vi: 'Ở cửa hàng trước ga' },
              jp: '駅前の 店',
              ruby: [
                { base: '駅', reading: 'えき' },
                { base: '前', reading: 'まえ' },
                { base: '店', reading: 'みせ' }
              ]
            }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Shoe and bag repair', vi: 'Sửa giày và túi' },
      introTerm: {
        jp: '靴・鞄修理、合い鍵',
        ruby: [
          { base: '靴', reading: 'くつ' },
          { base: '鞄', reading: 'かばん' },
          { base: '修', reading: 'しゅう' },
          { base: '理', reading: 'り' },
          { base: '合', reading: 'あ' },
          { base: '鍵', reading: 'かぎ' }
        ]
      },
      layout: 'stacked',
      rows: [
        {
          jp: 'ヒール・かかと修理',
          ruby: [
            { base: '修', reading: 'しゅう' },
            { base: '理', reading: 'り' }
          ],
          meaning: { en: 'Heel repair', vi: 'Sửa gót giày' }
        },
        {
          jp: 'つま先修理',
          ruby: [
            { base: '先', reading: 'さき' },
            { base: '修', reading: 'しゅう' },
            { base: '理', reading: 'り' }
          ],
          meaning: { en: 'Toe repair', vi: 'Sửa mũi giày' }
        },
        {
          jp: '中敷き交換',
          ruby: [
            { base: '中', reading: 'なか' },
            { base: '敷', reading: 'じ' },
            { base: '交', reading: 'こう' },
            { base: '換', reading: 'かん' }
          ],
          meaning: { en: 'Insole replacement', vi: 'Thay lót giày' }
        },
        {
          jp: 'クリーニング',
          meaning: { en: 'Bag cleaning', vi: 'Giặt túi' }
        },
        {
          jp: 'ファスナー交換',
          ruby: [
            { base: '交', reading: 'こう' },
            { base: '換', reading: 'かん' }
          ],
          meaning: { en: 'Zipper replacement', vi: 'Thay dây kéo' }
        },
        {
          jp: 'ハンドル・持ち手交換',
          ruby: [
            { base: '持', reading: 'も' },
            { base: '手', reading: 'て' },
            { base: '交', reading: 'こう' },
            { base: '換', reading: 'かん' }
          ],
          meaning: { en: 'Handle replacement', vi: 'Thay quai túi' }
        },
        {
          jp: 'ほつれ・縫い目の修理',
          ruby: [
            { base: '縫', reading: 'ぬ' },
            { base: '目', reading: 'め' },
            { base: '修', reading: 'しゅう' },
            { base: '理', reading: 'り' }
          ],
          meaning: { en: 'Stitch and seam repair', vi: 'Sửa chỉ và đường may' }
        },
        {
          jp: '合い鍵',
          ruby: [
            { base: '合', reading: 'あ' },
            { base: '鍵', reading: 'かぎ' }
          ],
          meaning: { en: 'Spare key', vi: 'Chìa khóa dự phòng' }
        }
      ]
    },
    {
      kind: 'list',
      title: { en: 'Dry cleaner', vi: 'Hiệu giặt là' },
      introTerm: {
        jp: 'クリーニング屋',
        ruby: [{ base: '屋', reading: 'や' }]
      },
      layout: 'stacked',
      rows: [
        {
          jp: 'ドライクリーニング',
          meaning: { en: 'Dry cleaning', vi: 'Giặt khô' }
        },
        {
          jp: '水洗い',
          ruby: [
            { base: '水', reading: 'みず' },
            { base: '洗', reading: 'あら' }
          ],
          meaning: { en: 'Laundry (water wash)', vi: 'Giặt nước' }
        },
        {
          jp: '染み抜き',
          ruby: [
            { base: '染', reading: 'し' },
            { base: '抜', reading: 'ぬ' }
          ],
          meaning: { en: 'Stain removal', vi: 'Tẩy vết bẩn' }
        },
        {
          jp: 'はっ水加工',
          ruby: [
            { base: '水', reading: 'すい' },
            { base: '加', reading: 'か' },
            { base: '工', reading: 'こう' }
          ],
          meaning: { en: 'Water-repellent treatment', vi: 'Xử lý chống thấm nước' }
        },
        {
          jp: 'サイズ直し',
          ruby: [{ base: '直', reading: 'なお' }],
          meaning: { en: 'Alterations (resize)', vi: 'Chỉnh size' }
        },
        {
          jp: '縮む',
          ruby: [{ base: '縮', reading: 'ちぢ' }],
          meaning: { en: 'to shrink', vi: 'co lại' }
        },
        {
          jp: '伸びる',
          ruby: [{ base: '伸', reading: 'の' }],
          meaning: { en: 'to stretch', vi: 'dãn ra' }
        }
      ]
    },
    {
      kind: 'list',
      title: { en: 'Convenience store services', vi: 'Dịch vụ cửa hàng tiện lợi' },
      introTerm: { jp: 'コンビニ' },
      layout: 'stacked',
      rows: [
        {
          jp: '宅配便の受け付け',
          ruby: [
            { base: '宅', reading: 'たく' },
            { base: '配', reading: 'はい' },
            { base: '便', reading: 'びん' },
            { base: '受', reading: 'う' },
            { base: '付', reading: 'つ' }
          ],
          meaning: { en: 'Parcel drop-off and pickup', vi: 'Nhận gửi hàng giao tận nhà' }
        },
        {
          jp: 'ATM',
          meaning: { en: 'ATM (cash withdrawal)', vi: 'Máy rút tiền' }
        },
        {
          jp: '公共料金等の支払い',
          ruby: [
            { base: '公', reading: 'こう' },
            { base: '共', reading: 'きょう' },
            { base: '料', reading: 'りょう' },
            { base: '金', reading: 'きん' },
            { base: '等', reading: 'とう' },
            { base: '支', reading: 'し' },
            { base: '払', reading: 'はら' }
          ],
          meaning: {
            en: 'Utility and public bill payment',
            vi: 'Thanh toán hóa đơn điện nước, dịch vụ công'
          }
        },
        {
          jp: 'コピー、ファクス',
          meaning: { en: 'Copy and fax', vi: 'Photocopy, fax' }
        },
        {
          jp: 'はがき・切手の販売',
          ruby: [
            { base: '切', reading: 'き' },
            { base: '手', reading: 'って' },
            { base: '販', reading: 'はん' },
            { base: '売', reading: 'ばい' }
          ],
          meaning: { en: 'Postcards and stamps', vi: 'Bán bưu thiếp và tem' }
        },
        {
          jp: 'コンサートチケットの販売',
          ruby: [
            { base: '販', reading: 'はん' },
            { base: '売', reading: 'ばい' }
          ],
          meaning: { en: 'Concert ticket sales', vi: 'Bán vé concert' }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Proper nouns', vi: 'Tên riêng' },
      includeInQuiz: false,
      items: [
        {
          kana: 'ほうりゅうじ',
          partOfSpeech: 'noun',
          kanji: '法隆寺',
          romaji: 'Hōryūji',
          meaning: { en: 'Hōryūji Temple (Nara)', vi: 'Chùa Hōryūji (Nara)' },
          ruby: [
            { base: '法', reading: 'ほう' },
            { base: '隆', reading: 'りゅう' },
            { base: '寺', reading: 'じ' }
          ]
        },
        {
          kana: 'ドラえもん',
          partOfSpeech: 'noun',
          romaji: 'Doraemon',
          meaning: {
            en: 'Doraemon (manga character name)',
            vi: 'Doraemon (tên nhân vật truyện tranh)'
          }
        }
      ]
    }
  ]
};
