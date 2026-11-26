import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 37 (passive, から/で materials, location particles). */
export const n4Lesson37: Lesson = {
  id: 'lesson-37',
  number: 37,
  title: {
    en: 'Passive voice',
    vi: 'Thể bị động'
  },
  focus: {
    en: 'Use passive for actions received, things done to you, events without a named agent, materials with から/で, and location relations with 中/外/上/下/前/後/右/左.',
    vi: 'Dùng bị động cho hành vi nhận được, việc bị làm, sự kiện không nêu tác nhân, nguyên liệu với から/で, và quan hệ vị trí với 中/外/上/下/前/後/右/左.'
  },
  vocab: [
    {
      kana: 'ほめます',
      partOfSpeech: 'verb',
      kanji: '褒めます',
      romaji: 'homemasu',
      meaning: { en: 'to praise', vi: 'khen' },
      ruby: [{ base: '褒', reading: 'ほ' }]
    },
    {
      kana: 'しかります',
      partOfSpeech: 'verb',
      romaji: 'shikarimasu',
      meaning: { en: 'to scold', vi: 'mắng' }
    },
    {
      kana: 'さそいます',
      partOfSpeech: 'verb',
      kanji: '誘います',
      romaji: 'sasoimasu',
      meaning: { en: 'to invite', vi: 'mời, rủ' },
      ruby: [{ base: '誘', reading: 'さそ' }]
    },
    {
      kana: 'しょうたいします',
      partOfSpeech: 'verb',
      kanji: '招待します',
      romaji: 'shōtai shimasu',
      meaning: { en: 'to invite (formally)', vi: 'mời (trang trọng)' },
      ruby: [
        { base: '招', reading: 'しょう' },
        { base: '待', reading: 'たい' }
      ]
    },
    {
      kana: 'たのみます',
      partOfSpeech: 'verb',
      kanji: '頼みます',
      romaji: 'tanomimasu',
      meaning: { en: 'to ask a favor', vi: 'nhờ' },
      ruby: [{ base: '頼', reading: 'たの' }]
    },
    {
      kana: 'ちゅういします',
      partOfSpeech: 'verb',
      kanji: '注意します',
      romaji: 'chūi shimasu',
      meaning: { en: 'to warn, to caution', vi: 'nhắc nhở' },
      ruby: [
        { base: '注', reading: 'ちゅう' },
        { base: '意', reading: 'い' }
      ]
    },
    {
      kana: 'とります',
      partOfSpeech: 'verb',
      romaji: 'torimasu',
      meaning: { en: 'to steal', vi: 'lấy cắp' }
    },
    {
      kana: 'ふみます',
      partOfSpeech: 'verb',
      kanji: '踏みます',
      romaji: 'fumimasu',
      meaning: { en: 'to step on', vi: 'dẫm' },
      ruby: [{ base: '踏', reading: 'ふ' }]
    },
    {
      kana: 'こわします',
      partOfSpeech: 'verb',
      kanji: '壊します',
      romaji: 'kowashimasu',
      meaning: { en: 'to break, to destroy', vi: 'làm hỏng' },
      ruby: [{ base: '壊', reading: 'こわ' }]
    },
    {
      kana: 'よごします',
      partOfSpeech: 'verb',
      kanji: '汚します',
      romaji: 'yogoshimasu',
      meaning: { en: 'to make dirty', vi: 'làm bẩn' },
      ruby: [{ base: '汚', reading: 'よご' }]
    },
    {
      kana: 'おこないます',
      partOfSpeech: 'verb',
      kanji: '行います',
      romaji: 'okonaimasu',
      meaning: { en: 'to hold, to carry out [event]', vi: 'tổ chức' },
      ruby: [{ base: '行', reading: 'おこな' }]
    },
    {
      kana: 'ゆしゅつします',
      partOfSpeech: 'verb',
      kanji: '輸出します',
      romaji: 'yushutsu shimasu',
      meaning: { en: 'to export', vi: 'xuất khẩu' },
      ruby: [
        { base: '輸', reading: 'ゆ' },
        { base: '出', reading: 'しゅつ' }
      ]
    },
    {
      kana: 'ゆにゅうします',
      partOfSpeech: 'verb',
      kanji: '輸入します',
      romaji: 'yunyu shimasu',
      meaning: { en: 'to import', vi: 'nhập khẩu' },
      ruby: [
        { base: '輸', reading: 'ゆ' },
        { base: '入', reading: 'にゅう' }
      ]
    },
    {
      kana: 'ほんやくします',
      partOfSpeech: 'verb',
      kanji: '翻訳します',
      romaji: 'honyaku shimasu',
      meaning: { en: 'to translate', vi: 'biên dịch' },
      ruby: [
        { base: '翻', reading: 'ほん' },
        { base: '訳', reading: 'やく' }
      ]
    },
    {
      kana: 'はつめいします',
      partOfSpeech: 'verb',
      kanji: '発明します',
      romaji: 'hatsumei shimasu',
      meaning: { en: 'to invent', vi: 'phát minh' },
      ruby: [
        { base: '発', reading: 'はつ' },
        { base: '明', reading: 'めい' }
      ]
    },
    {
      kana: 'はっけんします',
      partOfSpeech: 'verb',
      kanji: '発見します',
      romaji: 'hakken shimasu',
      meaning: { en: 'to discover', vi: 'phát hiện' },
      ruby: [
        { base: '発', reading: 'はっ' },
        { base: '見', reading: 'けん' }
      ]
    },
    {
      kana: 'こめ',
      partOfSpeech: 'noun',
      kanji: '米',
      romaji: 'kome',
      meaning: { en: 'rice (grain)', vi: 'gạo' },
      ruby: [{ base: '米', reading: 'こめ' }]
    },
    {
      kana: 'むぎ',
      partOfSpeech: 'noun',
      kanji: '麦',
      romaji: 'mugi',
      meaning: { en: 'wheat, barley', vi: 'lúa mạch' },
      ruby: [{ base: '麦', reading: 'むぎ' }]
    },
    {
      kana: 'せきゆ',
      partOfSpeech: 'noun',
      kanji: '石油',
      romaji: 'sekiyu',
      meaning: { en: 'petroleum, oil', vi: 'dầu mỏ' },
      ruby: [
        { base: '石', reading: 'せき' },
        { base: '油', reading: 'ゆ' }
      ]
    },
    {
      kana: 'げんりょう',
      partOfSpeech: 'noun',
      kanji: '原料',
      romaji: 'genryō',
      meaning: { en: 'raw materials', vi: 'nguyên liệu' },
      ruby: [
        { base: '原', reading: 'げん' },
        { base: '料', reading: 'りょう' }
      ]
    },
    {
      kana: 'インスタントラーメン',
      partOfSpeech: 'noun',
      romaji: 'insutanto rāmen',
      meaning: { en: 'instant noodles', vi: 'mì ăn liền, mì gói' }
    },
    {
      kana: 'デート',
      partOfSpeech: 'noun',
      meaningPartOfSpeech: { vi: 'verb' },
      romaji: 'dēto',
      meaning: { en: 'date (romantic)', vi: 'hẹn hò' }
    },
    {
      kana: 'どろぼう',
      partOfSpeech: 'noun',
      kanji: '泥棒',
      romaji: 'dorobō',
      meaning: { en: 'thief', vi: 'kẻ trộm' },
      ruby: [
        { base: '泥', reading: 'どろ' },
        { base: '棒', reading: 'ぼう' }
      ]
    },
    {
      kana: 'けいかん',
      partOfSpeech: 'noun',
      kanji: '警官',
      romaji: 'keikan',
      meaning: { en: 'police officer', vi: 'cảnh sát' },
      ruby: [
        { base: '警', reading: 'けい' },
        { base: '官', reading: 'かん' }
      ]
    },
    {
      kana: 'せかいじゅう',
      partOfSpeech: 'noun',
      meaningPartOfSpeech: { en: 'adverb', vi: 'adverb' },
      kanji: '世界中',
      romaji: 'sekaijū',
      meaning: { en: 'all over the world', vi: 'trên toàn thế giới' },
      ruby: [
        { base: '世', reading: 'せ' },
        { base: '界', reading: 'かい' },
        { base: '中', reading: 'じゅう' }
      ]
    },
    {
      kana: '～じゅう',
      partOfSpeech: 'suffix',
      kanji: '～中',
      romaji: '~jū',
      meaning: { en: 'throughout ~', vi: 'toàn ~' },
      ruby: [{ base: '中', reading: 'じゅう' }]
    },
    {
      kana: '～せいき',
      partOfSpeech: 'suffix',
      kanji: '～世紀',
      romaji: '~seiki',
      meaning: { en: 'century', vi: 'thế kỷ ~' },
      ruby: [
        { base: '世', reading: 'せい' },
        { base: '紀', reading: 'き' }
      ]
    },
    {
      kana: 'なにご',
      partOfSpeech: 'noun',
      kanji: '何語',
      romaji: 'nanigo',
      meaning: { en: 'what language', vi: 'tiếng gì' },
      ruby: [
        { base: '何', reading: 'なに' },
        { base: '語', reading: 'ご' }
      ]
    },
    {
      kana: 'だれか',
      partOfSpeech: 'pronoun',
      romaji: 'dareka',
      meaning: { en: 'someone', vi: 'ai đó' }
    },
    {
      kana: 'よかったですね',
      partOfSpeech: 'expression',
      romaji: 'Yokatta desu ne',
      meaning: { en: 'That is great, is it not?', vi: 'Hay quá nhỉ. / Vui quá nhỉ.' }
    },
    {
      kana: 'みなさま',
      partOfSpeech: 'pronoun',
      kanji: '皆様',
      romaji: 'minasama',
      meaning: { en: 'everyone (honorific)', vi: 'quý vị' },
      ruby: [
        { base: '皆', reading: 'みな' },
        { base: '様', reading: 'さま' }
      ]
    },
    {
      kana: 'やけます',
      partOfSpeech: 'verb',
      kanji: '焼けます',
      romaji: 'yakemasu',
      meaning: { en: 'to burn [家が～: a house]', vi: 'cháy [nhà ~]' },
      ruby: [{ base: '焼', reading: 'や' }]
    },
    {
      kana: 'そのご',
      partOfSpeech: 'noun',
      meaningPartOfSpeech: { en: 'adverb', vi: 'adverb' },
      kanji: 'その後',
      romaji: 'sono go',
      meaning: { en: 'after that', vi: 'sau đó' },
      ruby: [{ base: '後', reading: 'ご' }]
    },
    {
      kana: 'せかいいさん',
      partOfSpeech: 'noun',
      kanji: '世界遺産',
      romaji: 'sekai isan',
      meaning: { en: 'World Heritage site', vi: 'di sản thế giới' },
      ruby: [
        { base: '世', reading: 'せ' },
        { base: '界', reading: 'かい' },
        { base: '遺', reading: 'い' },
        { base: '産', reading: 'さん' }
      ]
    },
    {
      kana: 'きんいろ',
      partOfSpeech: 'noun',
      kanji: '金色',
      romaji: 'kin iro',
      meaning: { en: 'golden color', vi: 'màu vàng' },
      ruby: [
        { base: '金', reading: 'きん' },
        { base: '色', reading: 'いろ' }
      ]
    },
    {
      kana: 'ほんもの',
      partOfSpeech: 'noun',
      kanji: '本物',
      romaji: 'honmono',
      meaning: { en: 'the real thing, genuine', vi: 'đồ thật' },
      ruby: [
        { base: '本', reading: 'ほん' },
        { base: '物', reading: 'もの' }
      ]
    },
    {
      kana: 'きん',
      partOfSpeech: 'noun',
      kanji: '金',
      romaji: 'kin',
      meaning: { en: 'gold', vi: 'vàng' },
      ruby: [{ base: '金', reading: 'きん' }]
    },
    {
      kana: 'うつくしい',
      partOfSpeech: 'adjective',
      kanji: '美しい',
      romaji: 'utsukushii',
      meaning: { en: 'beautiful', vi: 'đẹp' },
      ruby: [{ base: '美', reading: 'うつく' }]
    },
    {
      kana: 'ごうか [な]',
      partOfSpeech: 'adjective',
      kanji: '豪華 [な]',
      romaji: 'gōka [na]',
      meaning: { en: 'luxurious', vi: 'sang trọng, hoành tráng' },
      ruby: [
        { base: '豪', reading: 'ごう' },
        { base: '華', reading: 'か' }
      ]
    },
    {
      kana: 'ちょうこく',
      partOfSpeech: 'noun',
      kanji: '彫刻',
      romaji: 'chōkoku',
      meaning: { en: 'sculpture, carving', vi: 'điêu khắc' },
      ruby: [
        { base: '彫', reading: 'ちょう' },
        { base: '刻', reading: 'こく' }
      ]
    },
    {
      kana: 'いいつたえ',
      partOfSpeech: 'noun',
      kanji: '言い伝え',
      romaji: 'iitsutae',
      meaning: { en: 'legend, tradition', vi: 'truyền thuyết' },
      ruby: [
        { base: '言', reading: 'い' },
        { base: '伝', reading: 'つた' }
      ]
    },
    {
      kana: 'ねずみ',
      partOfSpeech: 'noun',
      kanji: '鼠',
      romaji: 'nezumi',
      meaning: { en: 'mouse, rat', vi: 'chuột' },
      ruby: [{ base: '鼠', reading: 'ねずみ' }]
    }
  ],
  phrases: [
    {
      kana: 'きれいですね。',
      partOfSpeech: 'expression',
      kanji: 'きれいですね。',
      romaji: 'Kirei desu ne.',
      meaning: { en: 'It is beautiful, is it not?', vi: 'Đẹp quá nhỉ.' }
    },
    {
      kana: 'なかに はいれますか。',
      partOfSpeech: 'expression',
      kanji: '中に 入れますか。',
      romaji: 'Naka ni hairemasu ka.',
      meaning: { en: 'Can we go inside?', vi: 'Có vào được bên trong không?' },
      ruby: [
        { base: '中', reading: 'なか' },
        { base: '入', reading: 'はい' }
      ]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson37-kinkakuji',
      title: { en: 'Visiting Kinkakuji', vi: 'Tham quan Kinkakuji' },
      speakers: [
        { id: 'guide', name: 'ガイド' },
        { id: 'karina', name: 'カリナ' }
      ],
      lines: [
        {
          speakerId: 'guide',
          jp: '皆様、あちらが 有名な 金閣寺です。',
          romaji: 'Minasama, achira ga yūmei na Kinkaku-ji desu.',
          meaning: {
            en: 'Everyone, that famous temple over there is Kinkakuji.',
            vi: 'Thưa quý vị, kia là ngôi chùa Kinkakuji nổi tiếng.'
          },
          ruby: [
            { base: '皆', reading: 'みな' },
            { base: '様', reading: 'さま' },
            { base: '有', reading: 'ゆう' },
            { base: '名', reading: 'めい' },
            { base: '金', reading: 'きん' },
            { base: '閣', reading: 'かく' },
            { base: '寺', reading: 'じ' }
          ]
        },
        {
          speakerId: 'guide',
          jp: '金閣寺は 14世紀に 建てられました。1950年に 一度 焼けて、再建され、1994年に 世界遺産に なりました。',
          romaji:
            'Kinkaku-ji wa jū-yon seiki ni tateraremashita. Sen-kyū-hyaku go-jū-nen ni ichido yakete, saiken sare, sen-kyū-hyaku kyū-jū-yo-nen ni sekai isan ni narimashita.',
          meaning: {
            en: 'Kinkakuji was built in the 14th century. It burned once in 1950, was rebuilt, and became a World Heritage site in 1994.',
            vi: 'Chùa Kinkakuji được xây dựng vào thế kỷ 14. Năm 1950 cháy một lần, được xây lại, và năm 1994 trở thành di sản thế giới.'
          },
          ruby: [
            { base: '金', reading: 'きん' },
            { base: '閣', reading: 'かく' },
            { base: '寺', reading: 'じ' },
            { base: '世', reading: 'せ' },
            { base: '紀', reading: 'き' },
            { base: '建', reading: 'た' },
            { base: '年', reading: 'ねん' },
            { base: '一', reading: 'いち' },
            { base: '度', reading: 'ど' },
            { base: '焼', reading: 'や' },
            { base: '再', reading: 'さい' },
            { base: '建', reading: 'た' },
            { base: '年', reading: 'ねん' },
            { base: '世', reading: 'せ' },
            { base: '界', reading: 'かい' },
            { base: '遺', reading: 'い' },
            { base: '産', reading: 'さん' }
          ]
        },
        {
          speakerId: 'karina',
          jp: 'きれいですね。あの 金色は 本物の 金ですか。',
          romaji: 'Kirei desu ne. Ano kin iro wa honmono no kin desu ka.',
          meaning: {
            en: 'It is beautiful. Is that gold color real gold?',
            vi: 'Đẹp quá nhỉ. Màu vàng kia có phải vàng thật không?'
          },
          ruby: [
            { base: '金', reading: 'きん' },
            { base: '色', reading: 'いろ' },
            { base: '本', reading: 'ほん' },
            { base: '物', reading: 'もの' },
            { base: '金', reading: 'きん' }
          ]
        },
        {
          speakerId: 'guide',
          jp: 'はい。約 20キロ 使われました。',
          romaji: 'Hai. Yaku nijū kiro tsukawaremashita.',
          meaning: {
            en: 'Yes. About 20 kilograms were used.',
            vi: 'Vâng. Khoảng 20 kg vàng đã được dùng.'
          },
          ruby: [
            { base: '約', reading: 'やく' },
            { base: '使', reading: 'つか' }
          ]
        },
        {
          speakerId: 'karina',
          jp: '中に 入れますか。',
          romaji: 'Naka ni hairemasu ka.',
          meaning: { en: 'Can we go inside?', vi: 'Có vào được bên trong không?' },
          ruby: [
            { base: '中', reading: 'じゅう' },
            { base: '入', reading: 'はい' }
          ]
        },
        {
          speakerId: 'guide',
          jp: '中は 見学できません。池の 周りを 歩いて ご覧 ください。',
          romaji: 'Naka wa kengaku dekimasen. Ike no mawari o aruite goran kudasai.',
          meaning: {
            en: 'You cannot tour inside. Please walk around the pond and look.',
            vi: 'Không vào được bên trong. Chi hãy đi quanh hồ và ngắm xem nhé.'
          },
          ruby: [
            { base: '中', reading: 'じゅう' },
            { base: '見', reading: 'み' },
            { base: '学', reading: 'がく' },
            { base: '池', reading: 'いけ' },
            { base: '周', reading: 'まわ' },
            { base: '歩', reading: 'ある' },
            { base: '覧', reading: 'らん' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N1 に N2 が V-passive',
      highlights: ['に', 'が'],
      title: { en: 'Passive with a person agent (に)', vi: 'Bị động với tác nhân người (に)' },
      explanation: {
        en: 'When someone does something to you, the doer takes に and you are the subject: 先生に 褒められました. Making the passive: Group I: change the sound before ます to the あ row and add れます (い becomes わ): 書きます→書かれます, 言います→言われます. Group II: drop ます and add られます: 褒めます→褒められます. Group III: します→されます, 来ます→来られます (read こられます). The passive verb then conjugates like Group II.',
        vi: 'Khi ai làm gì với bạn, người làm đi với に, còn bạn là chủ ngữ: 先生に 褒められました. Cách chia thể bị động: Nhóm I: đổi âm trước ます sang hàng あ rồi thêm れます (い đổi thành わ): 書きます→書かれます, 言います→言われます. Nhóm II: bỏ ます, thêm られます: 褒めます→褒められます. Nhóm III: します→されます, 来ます→来られます (đọc là こられます). Sau đó động từ bị động chia tiếp như nhóm II.'
      },
      explanationRuby: [
        { base: '先', reading: 'せん' },
        { base: '生', reading: 'せい' },
        { base: '褒', reading: 'ほ' },
        { base: '書', reading: 'か' },
        { base: '書', reading: 'か' },
        { base: '言', reading: 'い' },
        { base: '言', reading: 'い' },
        { base: '褒', reading: 'ほ' },
        { base: '褒', reading: 'ほ' },
        { base: '来', reading: 'き' },
        { base: '来', reading: 'こ' }
      ],
      examples: [
        {
          jp: '母に 買い物を 頼まれました。',
          romaji: 'Haha ni kaimono o tanomaremashita.',
          meaning: { en: 'My mother asked me to shop.', vi: 'Mẹ nhờ tôi mua đồ.' },
          ruby: [
            { base: '母', reading: 'はは' },
            { base: '買', reading: 'か' },
            { base: '物', reading: 'もの' },
            { base: '頼', reading: 'たの' }
          ]
        },
        {
          jp: '部長に 呼ばれました。',
          romaji: 'Buchō ni yobaremashita.',
          meaning: { en: 'The department head called me in.', vi: 'Tôi bị trưởng phòng gọi lên.' },
          ruby: [
            { base: '部', reading: 'ぶ' },
            { base: '長', reading: 'ちょう' },
            { base: '呼', reading: 'よ' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 に N2 を V-passive',
      highlights: ['に', 'を'],
      title: {
        en: 'Passive: something done to your thing',
        vi: 'Bị động: việc bị làm với đồ của mình'
      },
      explanation: {
        en: 'Someone does something to something you own: 弟に パソコンを 壊されました. Often implies annoyance; for a favor use てくれる instead.',
        vi: 'Ai làm gì với đồ bạn sở hữu: 弟に パソコンを 壊されました. Thường mang cảm giác phiền; việc được giúp dùng てくれる.'
      },
      explanationRuby: [
        { base: '弟', reading: 'おとうと' },
        { base: '壊', reading: 'こわ' },
        { base: '弟', reading: 'おとうと' },
        { base: '壊', reading: 'こわ' }
      ],
      examples: [
        {
          jp: '弟に パソコンを 壊されました。',
          romaji: 'Otōto ni pasokon o kowasaremashita.',
          meaning: {
            en: 'My younger brother broke my computer (on me).',
            vi: 'Em trai làm hỏng máy vi tính của tôi.'
          },
          ruby: [
            { base: '弟', reading: 'おとうと' },
            { base: '壊', reading: 'こわ' }
          ]
        },
        {
          jp: '犬に 手を 踏まれました。',
          romaji: 'Inu ni te o fumaremashita.',
          meaning: { en: 'A dog stepped on my hand.', vi: 'Tôi bị chó cẫm vào tay.' },
          ruby: [
            { base: '犬', reading: 'いぬ' },
            { base: '手', reading: 'て' },
            { base: '踏', reading: 'ふ' }
          ]
        }
      ]
    },
    {
      pattern: 'N が V-passive (event)',
      highlights: ['が'],
      title: { en: 'Passive for events (no agent)', vi: 'Bị động sự kiện (không nêu tác nhân)' },
      explanation: {
        en: 'Focus on the event, not who did it: 法隆寺は 607年に 建てられました, 大阪で 展覧会が 開かれます. Natural phenomena and public events fit well.',
        vi: 'Nhấn sự việc, không nêu ai làm: 法隆寺は 607年に 建てられました, 大阪で 展覧会が 開かれます. Hiện tượng tự nhiên và sự kiện công cộng rất phù hợp.'
      },
      explanationRuby: [
        { base: '法', reading: 'ほう' },
        { base: '隆', reading: 'りゅう' },
        { base: '寺', reading: 'じ' },
        { base: '年', reading: 'ねん' },
        { base: '建', reading: 'た' },
        { base: '大', reading: 'だい' },
        { base: '阪', reading: 'さか' },
        { base: '展', reading: 'てん' },
        { base: '覧', reading: 'らん' },
        { base: '会', reading: 'かい' },
        { base: '開', reading: 'ひら' },
        { base: '法', reading: 'ほう' },
        { base: '隆', reading: 'りゅう' },
        { base: '寺', reading: 'じ' },
        { base: '年', reading: 'ねん' },
        { base: '建', reading: 'た' },
        { base: '大', reading: 'だい' },
        { base: '阪', reading: 'さか' },
        { base: '展', reading: 'てん' },
        { base: '覧', reading: 'らん' },
        { base: '会', reading: 'かい' },
        { base: '開', reading: 'ひら' }
      ],
      examples: [
        {
          jp: '新しい 星が 見つかりました。',
          romaji: 'Atarashii hoshi ga mitsukarimashita.',
          meaning: { en: 'A new star was discovered.', vi: 'Một ngôi sao mới được tìm thấy.' },
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '星', reading: 'ほし' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          jp: '世界子ども会議が 広島で 開かれます。',
          romaji: 'Sekai kodomo kaigi ga Hiroshima de hirakaremasu.',
          meaning: {
            en: "The World Children's Conference will be held in Hiroshima.",
            vi: 'Hội nghị trẻ em thế giới sẽ được tổ chức ở Hiroshima.'
          },
          ruby: [
            { base: '世', reading: 'せ' },
            { base: '界', reading: 'かい' },
            { base: '子', reading: 'こ' },
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '広', reading: 'ひろ' },
            { base: '島', reading: 'しま' },
            { base: '開', reading: 'ひら' }
          ]
        }
      ]
    },
    {
      pattern: 'N から / N で 作ります',
      patternRuby: [{ base: '作', reading: 'つく' }],
      highlights: ['から', 'で', '作'],
      title: { en: 'Materials: から and で', vi: 'Nguyên liệu: から và で' },
      explanation: {
        en: 'から marks raw material taken from something: ビールは 麦から 作ります. で marks the material something is made of: この ビールは 麦で 作りました (here is the ingredient).',
        vi: 'から chỉ nguyên liệu lấy từ đâu: ビールは 麦から 作ります. で chỉ chất liệu tạo thành: この ビールは 麦で 作りました (đây là nguyên liệu).'
      },
      explanationRuby: [
        { base: '麦', reading: 'むぎ' },
        { base: '作', reading: 'つく' },
        { base: '麦', reading: 'むぎ' },
        { base: '作', reading: 'つく' },
        { base: '麦', reading: 'むぎ' },
        { base: '作', reading: 'つく' },
        { base: '麦', reading: 'むぎ' },
        { base: '作', reading: 'つく' }
      ],
      examples: [
        {
          jp: 'ビールは 麦から 作ります。',
          romaji: 'Bīru wa mugi kara tsukurimasu.',
          meaning: { en: 'Beer is made from barley.', vi: 'Bia làm từ lúa mạch.' },
          ruby: [
            { base: '麦', reading: 'むぎ' },
            { base: '作', reading: 'つく' }
          ]
        },
        {
          jp: 'この お酒は 米から 作ります。',
          romaji: 'Kono o-sake wa kome kara tsukurimasu.',
          meaning: { en: 'This sake is made from rice.', vi: 'Loại rượu này được làm từ gạo.' },
          ruby: [
            { base: '酒', reading: 'さけ' },
            { base: '米', reading: 'こめ' },
            { base: '作', reading: 'つく' }
          ]
        }
      ]
    },
    {
      pattern: 'N の 中 / 外 / 上 / 下 / 前 / 後 / 右 / 左',
      patternRuby: [
        { base: '中', reading: 'なか' },
        { base: '外', reading: 'そと' },
        { base: '上', reading: 'うえ' },
        { base: '下', reading: 'した' },
        { base: '前', reading: 'まえ' },
        { base: '後', reading: 'うし' },
        { base: '右', reading: 'みぎ' },
        { base: '左', reading: 'ひだ' }
      ],
      highlights: ['中', '外', '上', '下', '前', '後', '右', '左'],
      title: { en: 'Location particles', vi: 'Trợ từ vị trí' },
      explanation: {
        en: 'の links a place noun to a position: 箱の 中, 駅の 前, 机の 上. に marks the destination for entering: 中に 入れますか.',
        vi: 'の nối danh từ địa điểm với vị trí: 箱の 中, 駅の 前, 机の 上. に chỉ hướng vào: 中に 入れますか.'
      },
      explanationRuby: [
        { base: '箱', reading: 'はこ' },
        { base: '中', reading: 'じゅう' },
        { base: '駅', reading: 'えき' },
        { base: '前', reading: 'まえ' },
        { base: '机', reading: 'つくえ' },
        { base: '上', reading: 'うえ' },
        { base: '中', reading: 'じゅう' },
        { base: '入', reading: 'はい' },
        { base: '箱', reading: 'はこ' },
        { base: '中', reading: 'じゅう' },
        { base: '駅', reading: 'えき' },
        { base: '前', reading: 'まえ' },
        { base: '机', reading: 'つくえ' },
        { base: '上', reading: 'うえ' },
        { base: '中', reading: 'じゅう' },
        { base: '入', reading: 'はい' }
      ],
      examples: [
        {
          jp: '箱の 中に 何が 入っていますか。',
          romaji: 'Hako no naka ni nani ga haitte imasu ka.',
          meaning: { en: 'What is inside the box?', vi: 'Trong hộp có gì vậy?' },
          ruby: [
            { base: '箱', reading: 'はこ' },
            { base: '中', reading: 'なか' },
            { base: '何', reading: 'なに' },
            { base: '入', reading: 'はい' }
          ]
        },
        {
          jp: '眼鏡は 机の 上に ありますよ。',
          romaji: 'Megane wa tsukue no ue ni arimasu yo.',
          meaning: { en: 'Your glasses are on the desk.', vi: 'Kính ở trên bàn đấy.' },
          ruby: [
            { base: '眼', reading: 'め' },
            { base: '鏡', reading: 'がね' },
            { base: '机', reading: 'つくえ' },
            { base: '上', reading: 'うえ' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson37-history',
      title: { en: 'Horyuji Temple', vi: 'Chùa Horyuji' },
      titleJp: '法隆寺',
      titleRuby: [
        { base: '法', reading: 'ほう' },
        { base: '隆', reading: 'りゅう' },
        { base: '寺', reading: 'じ' }
      ],
      lines: [
        {
          jp: '法隆寺は 奈良に ある 古い お寺です。',
          romaji: 'Hōryūji wa Nara ni aru furui o-tera desu.',
          meaning: {
            en: 'Horyuji is an old temple in Nara.',
            vi: 'Horyuji là một ngôi chùa cổ ở Nara.'
          },
          ruby: [
            { base: '法', reading: 'ほう' },
            { base: '隆', reading: 'りゅう' },
            { base: '寺', reading: 'じ' },
            { base: '奈', reading: 'な' },
            { base: '良', reading: 'ら' },
            { base: '古', reading: 'ふる' },
            { base: '寺', reading: 'てら' }
          ]
        },
        {
          jp: 'この お寺は 607年に 建てられました。',
          romaji: 'Kono o-tera wa roppyaku nana-nen ni tateraremashita.',
          meaning: {
            en: 'This temple was built in 607.',
            vi: 'Ngôi chùa này được xây vào năm 607.'
          },
          ruby: [
            { base: '寺', reading: 'てら' },
            { base: '年', reading: 'ねん' },
            { base: '建', reading: 'た' }
          ]
        },
        {
          jp: '世界で いちばん 古い 木の 建物だと 言われています。',
          romaji: 'Sekai de ichiban furui ki no tatemono da to iwarete imasu.',
          meaning: {
            en: 'It is said to be the oldest wooden building in the world.',
            vi: 'Người ta nói đây là công trình bằng gỗ cổ nhất thế giới.'
          },
          ruby: [
            { base: '世', reading: 'せ' },
            { base: '界', reading: 'かい' },
            { base: '古', reading: 'ふる' },
            { base: '木', reading: 'き' },
            { base: '建', reading: 'たて' },
            { base: '物', reading: 'もの' },
            { base: '言', reading: 'い' }
          ]
        },
        {
          jp: '1993年に 世界遺産に 選ばれました。',
          romaji: 'Sen kyūhyaku kyūjūsan-nen ni sekai isan ni erabaremashita.',
          meaning: {
            en: 'In 1993 it was chosen as a World Heritage site.',
            vi: 'Năm 1993 chùa được chọn là Di sản Thế giới.'
          },
          ruby: [
            { base: '年', reading: 'ねん' },
            { base: '世', reading: 'せ' },
            { base: '界', reading: 'かい' },
            { base: '遺', reading: 'い' },
            { base: '産', reading: 'さん' },
            { base: '選', reading: 'えら' }
          ]
        },
        {
          jp: '今も 世界中から 大勢の 人が 見に 来ます。',
          romaji: 'Ima mo sekaijū kara ōzei no hito ga mi ni kimasu.',
          meaning: {
            en: 'Even today, crowds of people come from all over the world to see it.',
            vi: 'Ngày nay vẫn có rất nhiều người từ khắp thế giới đến tham quan.'
          },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '世', reading: 'せ' },
            { base: '界', reading: 'かい' },
            { base: '中', reading: 'じゅう' },
            { base: '大', reading: 'おお' },
            { base: '勢', reading: 'ぜい' },
            { base: '人', reading: 'ひと' },
            { base: '見', reading: 'み' },
            { base: '来', reading: 'き' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'When was Horyuji built?', vi: 'Chùa Horyuji được xây khi nào?' },
          jp: '法隆寺は いつ 建てられましたか。',
          ruby: [
            { base: '法', reading: 'ほう' },
            { base: '隆', reading: 'りゅう' },
            { base: '寺', reading: 'じ' },
            { base: '建', reading: 'た' }
          ],
          choices: [
            {
              id: 'a',
              label: { en: 'In 607', vi: 'Năm 607' },
              jp: '607年',
              ruby: [{ base: '年', reading: 'ねん' }]
            },
            {
              id: 'b',
              label: { en: 'In 1993', vi: 'Năm 1993' },
              jp: '1993年',
              ruby: [{ base: '年', reading: 'ねん' }]
            },
            {
              id: 'c',
              label: { en: 'In 1607', vi: 'Năm 1607' },
              jp: '1607年',
              ruby: [{ base: '年', reading: 'ねん' }]
            },
            {
              id: 'd',
              label: { en: 'In 701', vi: 'Năm 701' },
              jp: '701年',
              ruby: [{ base: '年', reading: 'ねん' }]
            }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What was Horyuji chosen as?', vi: 'Chùa Horyuji được chọn làm gì?' },
          jp: '法隆寺は 何に 選ばれましたか。',
          ruby: [
            { base: '法', reading: 'ほう' },
            { base: '隆', reading: 'りゅう' },
            { base: '寺', reading: 'じ' },
            { base: '何', reading: 'なに' },
            { base: '選', reading: 'えら' }
          ],
          choices: [
            {
              id: 'a',
              label: { en: 'A World Heritage site', vi: 'Di sản Thế giới' },
              jp: '世界遺産',
              ruby: [
                { base: '世', reading: 'せ' },
                { base: '界', reading: 'かい' },
                { base: '遺', reading: 'い' },
                { base: '産', reading: 'さん' }
              ]
            },
            {
              id: 'b',
              label: { en: 'The best park in Japan', vi: 'Công viên đẹp nhất Nhật Bản' },
              jp: '日本一の 公園',
              ruby: [
                { base: '日', reading: 'に' },
                { base: '本', reading: 'ほん' },
                { base: '一', reading: 'いち' },
                { base: '公', reading: 'こう' },
                { base: '園', reading: 'えん' }
              ]
            },
            {
              id: 'c',
              label: { en: 'A new museum', vi: 'Một bảo tàng mới' },
              jp: '新しい 博物館',
              ruby: [
                { base: '新', reading: 'あたら' },
                { base: '博', reading: 'はく' },
                { base: '物', reading: 'ぶつ' },
                { base: '館', reading: 'かん' }
              ]
            },
            {
              id: 'd',
              label: { en: 'A national university', vi: 'Một trường đại học quốc lập' },
              jp: '国立大学',
              ruby: [
                { base: '国', reading: 'こく' },
                { base: '立', reading: 'りつ' },
                { base: '大', reading: 'だい' },
                { base: '学', reading: 'がく' }
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
      title: { en: 'Accidents and incidents', vi: 'Tai nạn và vụ án' },
      introTerm: {
        jp: '事故',
        ruby: [
          { base: '事', reading: 'じ' },
          { base: '故', reading: 'こ' }
        ]
      },
      layout: 'stacked',
      rows: [
        {
          jp: 'ぶつかる',
          meaning: { en: 'to collide, to bump', vi: 'đâm, va chạm' }
        },
        {
          jp: 'ひき逃げ',
          ruby: [{ base: '逃', reading: 'に' }],
          meaning: { en: 'hit-and-run', vi: 'đâm người rồi bỏ chạy' }
        },
        {
          jp: '逮捕',
          ruby: [
            { base: '逮', reading: 'たい' },
            { base: '捕', reading: 'ほ' }
          ],
          meaning: { en: 'arrest', vi: 'bắt giữ' }
        },
        {
          jp: 'ハイジャック',
          meaning: { en: 'hijacking', vi: 'cướp máy bay' }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Proper nouns', vi: 'Tên riêng' },
      includeInQuiz: false,
      items: [
        {
          kana: 'きんかくじ',
          partOfSpeech: 'noun',
          kanji: '金閣寺',
          romaji: 'Kinkaku-ji',
          meaning: { en: 'Kinkakuji Temple (Kyoto)', vi: 'Chùa Kinkakuji (Kyoto)' },
          ruby: [
            { base: '金', reading: 'きん' },
            { base: '閣', reading: 'かく' },
            { base: '寺', reading: 'じ' }
          ]
        },
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
          kana: 'とうだいじ',
          partOfSpeech: 'noun',
          kanji: '東大寺',
          romaji: 'Tōdaiji',
          meaning: { en: 'Tōdaiji Temple (Nara)', vi: 'Chùa Todaiji' },
          ruby: [
            { base: '東', reading: 'とう' },
            { base: '大', reading: 'だい' },
            { base: '寺', reading: 'じ' }
          ]
        }
      ]
    }
  ]
};
