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
      kanji: '飼います',
      romaji: 'kaimasu',
      meaning: { en: 'to keep, to raise (a pet)', vi: 'nuôi (thú cưng)' },
      ruby: [{ base: '飼', reading: 'か' }]
    },
    {
      kana: 'はしります',
      kanji: '走ります',
      romaji: 'hashirimasu',
      meaning: { en: 'to run [道を～: on the road]', vi: 'chạy [道を～: trên đường]' },
      ruby: [{ base: '走', reading: 'はし' }]
    },
    {
      kana: 'みえます',
      kanji: '見えます',
      romaji: 'miemasu',
      meaning: { en: 'to be visible [山が～: mountains]', vi: 'nhìn thấy [山が～: núi]' },
      ruby: [{ base: '見', reading: 'み' }]
    },
    {
      kana: 'きこえます',
      kanji: '聞こえます',
      romaji: 'kikoemasu',
      meaning: { en: 'to be heard [音が～: a sound]', vi: 'nghe thấy [音が～: âm thanh]' },
      ruby: [{ base: '聞', reading: 'き' }]
    },
    {
      kana: 'できます',
      romaji: 'dekimasu',
      meaning: {
        en: 'to be completed, to be built [道が～: a road]',
        vi: 'hoàn thành, được làm [道が～: con đường]'
      }
    },
    {
      kana: 'ひらきます',
      kanji: '開きます',
      romaji: 'hirakimasu',
      meaning: {
        en: 'to open, to hold [教室を～: a class]',
        vi: 'mở, tổ chức [教室を～: lớp học]'
      },
      ruby: [{ base: '開', reading: 'ひら' }]
    },
    {
      kana: 'しんぱい',
      kanji: '心配',
      romaji: 'shinpai',
      meaning: { en: 'worried (na-adj)', vi: 'lo lắng (tính từ な)' },
      ruby: [{ base: '心', reading: 'しん' }]
    },
    {
      kana: 'ペット',
      romaji: 'petto',
      meaning: { en: 'pet', vi: 'thú cưng' }
    },
    {
      kana: 'とり',
      kanji: '鳥',
      romaji: 'tori',
      meaning: { en: 'bird', vi: 'chim' },
      ruby: [{ base: '鳥', reading: 'とり' }]
    },
    {
      kana: 'こえ',
      kanji: '声',
      romaji: 'koe',
      meaning: { en: 'voice', vi: 'tiếng, giọng nói' },
      ruby: [{ base: '声', reading: 'こえ' }]
    },
    {
      kana: 'なみ',
      kanji: '波',
      romaji: 'nami',
      meaning: { en: 'wave', vi: 'sóng' },
      ruby: [{ base: '波', reading: 'なみ' }]
    },
    {
      kana: 'はなび',
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
      kanji: '道具',
      romaji: 'dōgu',
      meaning: { en: 'tool', vi: 'dụng cụ' },
      ruby: [{ base: '道', reading: 'どう' }]
    },
    {
      kana: 'クリーニング',
      romaji: 'kurīningu',
      meaning: { en: 'dry cleaning', vi: 'giặt là' }
    },
    {
      kana: 'いえ',
      kanji: '家',
      romaji: 'ie',
      meaning: { en: 'house, home', vi: 'nhà' },
      ruby: [{ base: '家', reading: 'いえ' }]
    },
    {
      kana: 'マンション',
      romaji: 'manshon',
      meaning: { en: 'apartment building', vi: 'chung cư' }
    },
    {
      kana: 'キッチン',
      romaji: 'kicchin',
      meaning: { en: 'kitchen', vi: 'bếp' }
    },
    {
      kana: '～きょうしつ',
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
      romaji: 'pātī rūmu',
      meaning: { en: 'party room', vi: 'phòng tiệc' }
    },
    {
      kana: 'かた',
      kanji: '方',
      romaji: 'kata',
      meaning: { en: 'person (honorific of ひと)', vi: 'vị, ngài (kính ngữ của ひと)' },
      ruby: [{ base: '方', reading: 'かた' }]
    },
    {
      kana: '～ご',
      kanji: '～後',
      romaji: '~go',
      meaning: { en: 'after ~ (time)', vi: '~ sau (thời gian)' },
      ruby: [{ base: '後', reading: 'ご' }]
    },
    {
      kana: '～しか',
      romaji: '~shika',
      meaning: { en: 'only ~ (with negative)', vi: 'chỉ ~ (đi với phủ định)' }
    },
    {
      kana: 'ほかの',
      romaji: 'hoka no',
      meaning: { en: 'other', vi: 'khác' }
    },
    {
      kana: 'はっきり',
      romaji: 'hakkiri',
      meaning: { en: 'clearly', vi: 'rõ ràng' }
    },
    {
      kana: 'かぐ',
      kanji: '家具',
      romaji: 'kagu',
      meaning: { en: 'furniture', vi: 'đồ nội thất' },
      ruby: [{ base: '家', reading: 'か' }]
    },
    {
      kana: 'ほんだな',
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
      romaji: 'itsuka',
      meaning: { en: 'sometime, someday', vi: 'lúc nào đó, một ngày nào đó' }
    },
    {
      kana: 'たてます',
      kanji: '建てます',
      romaji: 'tatemasu',
      meaning: { en: 'to build', vi: 'xây' },
      ruby: [{ base: '建', reading: 'た' }]
    },
    {
      kana: 'すばらしい',
      romaji: 'subarashii',
      meaning: { en: 'wonderful, splendid', vi: 'tuyệt vời' }
    },
    {
      kana: 'こどもたち',
      kanji: '子どもたち',
      romaji: 'kodomotachi',
      meaning: { en: 'children', vi: 'bọn trẻ, các em' },
      ruby: [{ base: '子', reading: 'こ' }]
    },
    {
      kana: 'だいすき',
      kanji: '大好き',
      romaji: 'daisuki',
      meaning: { en: 'love, like very much (na-adj)', vi: 'rất thích (tính từ な)' },
      ruby: [
        { base: '大', reading: 'だい' },
        { base: '好', reading: 'す' }
      ]
    },
    {
      kana: 'しゅじんこう',
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
      kanji: '形',
      romaji: 'katachi',
      meaning: { en: 'shape, form', vi: 'hình dạng' },
      ruby: [{ base: '形', reading: 'かたち' }]
    },
    {
      kana: 'ふしぎ',
      kanji: '不思議',
      romaji: 'fushigi',
      meaning: { en: 'strange, mysterious (na-adj)', vi: 'kỳ lạ (tính từ な)' },
      ruby: [
        { base: '不', reading: 'ふ' },
        { base: '思', reading: 'し' },
        { base: '議', reading: 'ぎ' }
      ]
    },
    {
      kana: 'ポケット',
      romaji: 'poketto',
      meaning: { en: 'pocket', vi: 'túi áo' }
    },
    {
      kana: 'たとえば',
      kanji: '例えば',
      romaji: 'tatoeba',
      meaning: { en: 'for example', vi: 'ví dụ' },
      ruby: [{ base: '例', reading: 'たと' }]
    },
    {
      kana: 'つけます',
      kanji: '付けます',
      romaji: 'tsukemasu',
      meaning: { en: 'to attach, to put on', vi: 'gắn, đính' },
      ruby: [{ base: '付', reading: 'つ' }]
    },
    {
      kana: 'じゆうに',
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
      kanji: '空',
      romaji: 'sora',
      meaning: { en: 'sky', vi: 'bầu trời' },
      ruby: [{ base: '空', reading: 'そら' }]
    },
    {
      kana: 'とびます',
      kanji: '飛びます',
      romaji: 'tobimasu',
      meaning: { en: 'to fly', vi: 'bay' },
      ruby: [{ base: '飛', reading: 'と' }]
    },
    {
      kana: 'むかし',
      kanji: '昔',
      romaji: 'mukashi',
      meaning: { en: 'old days, long ago', vi: 'ngày xưa' },
      ruby: [{ base: '昔', reading: 'むかし' }]
    },
    {
      kana: 'じぶん',
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
      kanji: '何でも できますね。',
      romaji: 'Nandemo dekimasu ne.',
      meaning: { en: 'You can do anything.', vi: 'Anh/chị cái gì cũng làm được nhỉ.' },
      ruby: [{ base: '何', reading: 'なん' }]
    },
    {
      kana: 'すばらしい ゆめですね。',
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
        en: 'Potential form means "can do": Group I かきます→かけます, Group II たべます→たべられます, 来ます→こられます, します→できます. They conjugate like Group II verbs. わかります already implies ability, so わかれます is not used.',
        vi: 'Thể khả năng nghĩa "có thể làm": nhóm I かきます→かけます, nhóm II たべます→たべられます, 来ます→こられます, します→できます. Chia như động từ nhóm II. わかります đã mang nghĩa khả năng, không dùng わかれます.'
      },
      explanationRuby: [
        { base: '来', reading: 'き' },
        { base: '来', reading: 'こ' },
        { base: '分', reading: 'わ' },
        { base: '分', reading: 'わ' }
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
            vi: 'Một mình đi bệnh viện được không?'
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
      title: { en: 'A pocket full of dreams', vi: 'Chiếc túi đầy ước mơ' },
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
          jp: '主人公は 不思議な 形を した ロボットです。',
          romaji: 'Shujinkō wa fushigi na katachi o shita robotto desu.',
          meaning: {
            en: 'The main character is a robot with a strange shape.',
            vi: 'Nhân vật chính là robot có hình dạng kỳ lạ.'
          },
          ruby: [
            { base: '主', reading: 'しゅ' },
            { base: '人', reading: 'じん' },
            { base: '公', reading: 'こう' },
            { base: '不', reading: 'ふ' },
            { base: '思', reading: 'し' },
            { base: '議', reading: 'ぎ' },
            { base: '形', reading: 'かたち' }
          ]
        },
        {
          jp: '例えば、ポケットから 自由に 空を 飛べます。',
          romaji: 'Tatoeba, poketto kara jiyū ni sora o tobemasu.',
          meaning: {
            en: 'For example, from his pocket he can fly freely in the sky.',
            vi: 'Ví dụ, từ túi có thể bay tự do trên trời.'
          },
          ruby: [
            { base: '例', reading: 'たと' },
            { base: '自', reading: 'じ' },
            { base: '由', reading: 'ゆう' },
            { base: '空', reading: 'そら' },
            { base: '飛', reading: 'と' }
          ]
        },
        {
          jp: '昔の 子どもは 将来 自分で 道具を 作れる 人に なりたいと 思います。',
          romaji:
            'Mukashi no kodomo wa shōrai jibun de dōgu o tsukureru hito ni naritai to omoimasu.',
          meaning: {
            en: 'Children long ago wanted to become people who could make tools themselves in the future.',
            vi: 'Ngày xưa trẻ em muốn trở thành người tự làm dụng cụ trong tương lai.'
          },
          ruby: [
            { base: '昔', reading: 'むかし' },
            { base: '子', reading: 'こ' },
            { base: '将', reading: 'しょう' },
            { base: '来', reading: 'らい' },
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' },
            { base: '道', reading: 'どう' },
            { base: '具', reading: 'ぐ' },
            { base: '作', reading: 'つく' },
            { base: '人', reading: 'ひと' },
            { base: '思', reading: 'おも' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What do children love?', vi: 'Trẻ em thích gì?' },
          choices: [
            { id: 'a', label: { en: 'Doraemon', vi: 'Doraemon' } },
            { id: 'b', label: { en: 'Fireworks', vi: 'Pháo hoa' } },
            { id: 'c', label: { en: 'Dry cleaning', vi: 'Giặt là' } },
            { id: 'd', label: { en: 'A party room', vi: 'Phòng tiệc' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What can the main character do from his pocket?',
            vi: 'Nhân vật chính làm gì được từ túi?'
          },
          choices: [
            { id: 'a', label: { en: 'Fly in the sky', vi: 'Bay trên trời' } },
            { id: 'b', label: { en: 'Run on the road', vi: 'Chạy trên đường' } },
            { id: 'c', label: { en: 'Hear waves', vi: 'Nghe sóng' } },
            { id: 'd', label: { en: 'Open a classroom', vi: 'Mở lớp học' } }
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
