import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 16 (て形 chaining, どうやって, どの/どれ, body parts). */
export const n5Lesson16: Lesson = {
  id: 'lesson-16',
  number: 16,
  title: {
    en: 'How to get there',
    vi: 'Cách đi và sử dụng'
  },
  focus: {
    en: 'Chain actions with the て-form, ask how with どうやって, choose with どの/どれ, and describe parts of the body.',
    vi: 'Nối hành động bằng thể て, hỏi cách làm với どうやって, chọn với どの/どれ, và miêu tả bộ phận cơ thể.'
  },
  vocab: [
    {
      kana: 'のります',
      kanji: '乗ります',
      romaji: 'norimasu',
      meaning: {
        en: 'to ride, to get on (電車に～: get on a train)',
        vi: 'lên (電車に～: lên tàu điện)'
      },
      ruby: [{ base: '乗', reading: 'の' }]
    },
    {
      kana: 'おります',
      kanji: '降ります',
      romaji: 'orimasu',
      meaning: {
        en: 'to get off (電車を～: get off a train)',
        vi: 'xuống (電車を～: xuống tàu điện)'
      },
      ruby: [{ base: '降', reading: 'お' }]
    },
    {
      kana: 'のりかえます',
      kanji: '乗り換えます',
      romaji: 'norikaemasu',
      meaning: { en: 'to transfer (trains, buses)', vi: 'chuyển tàu, chuyển xe' },
      ruby: [
        { base: '乗', reading: 'の' },
        { base: '換', reading: 'か' }
      ]
    },
    {
      kana: 'あびます',
      kanji: '浴びます',
      romaji: 'abimasu',
      meaning: {
        en: 'to take (a shower) (シャワーを～: take a shower)',
        vi: 'tắm (シャワーを～: tắm vòi sen)'
      },
      ruby: [{ base: '浴', reading: 'あ' }]
    },
    {
      kana: 'いれます',
      kanji: '入れます',
      romaji: 'iremasu',
      meaning: { en: 'to put in', vi: 'bỏ vào, cho vào' },
      ruby: [{ base: '入', reading: 'い' }]
    },
    {
      kana: 'だします',
      kanji: '出します',
      romaji: 'dashimasu',
      meaning: { en: 'to take out, to hand over', vi: 'lấy ra, đưa ra' },
      ruby: [{ base: '出', reading: 'だ' }]
    },
    {
      kana: 'おろします',
      kanji: '下ろします',
      romaji: 'oroshimasu',
      meaning: {
        en: 'to withdraw (money) (お金を～: withdraw money)',
        vi: 'rút (お金を～: rút tiền)'
      },
      ruby: [{ base: '下', reading: 'お' }]
    },
    {
      kana: 'はいります',
      kanji: '入ります',
      romaji: 'hairimasu',
      meaning: {
        en: 'to enter (大学に～: enter a university)',
        vi: 'vào (大学に～: vào trường đại học)'
      },
      ruby: [{ base: '入', reading: 'はい' }]
    },
    {
      kana: 'でます',
      kanji: '出ます',
      romaji: 'demasu',
      meaning: {
        en: 'to leave, to graduate from (大学を～: leave/graduate from a university)',
        vi: 'ra, tốt nghiệp (大学を～: ra khỏi/tốt nghiệp đại học)'
      },
      ruby: [{ base: '出', reading: 'で' }]
    },
    {
      kana: 'おします',
      kanji: '押します',
      romaji: 'oshimasu',
      meaning: { en: 'to push, to press (a button)', vi: 'ấn, bấm (nút)' },
      ruby: [{ base: '押', reading: 'お' }]
    },
    {
      kana: 'のみます',
      kanji: '飲みます',
      romaji: 'nomimasu',
      meaning: { en: 'to drink', vi: 'uống' },
      ruby: [{ base: '飲', reading: 'の' }]
    },
    {
      kana: 'はじめます',
      kanji: '始めます',
      romaji: 'hajimemasu',
      meaning: { en: 'to begin, to start', vi: 'bắt đầu' },
      ruby: [{ base: '始', reading: 'はじ' }]
    },
    {
      kana: 'けんがくします',
      kanji: '見学します',
      romaji: 'kengaku shimasu',
      meaning: { en: 'to visit (a place) for observation', vi: 'tham quan, đi xem' },
      ruby: [
        { base: '見', reading: 'けん' },
        { base: '学', reading: 'がく' }
      ]
    },
    {
      kana: 'でんわします',
      kanji: '電話します',
      romaji: 'denwa shimasu',
      meaning: { en: 'to call (on the phone)', vi: 'gọi điện thoại' },
      ruby: [
        { base: '電', reading: 'でん' },
        { base: '話', reading: 'わ' }
      ]
    },
    {
      kana: 'わかい',
      kanji: '若い',
      romaji: 'wakai',
      meaning: { en: 'young', vi: 'trẻ' },
      ruby: [{ base: '若', reading: 'わか' }]
    },
    {
      kana: 'ながい',
      kanji: '長い',
      romaji: 'nagai',
      meaning: { en: 'long', vi: 'dài' },
      ruby: [{ base: '長', reading: 'なが' }]
    },
    {
      kana: 'みじかい',
      kanji: '短い',
      romaji: 'mijikai',
      meaning: { en: 'short', vi: 'ngắn' },
      ruby: [{ base: '短', reading: 'みじか' }]
    },
    {
      kana: 'あかるい',
      kanji: '明るい',
      romaji: 'akarui',
      meaning: { en: 'bright (light, personality)', vi: 'sáng, vui vẻ' },
      ruby: [{ base: '明', reading: 'あか' }]
    },
    {
      kana: 'くらい',
      kanji: '暗い',
      romaji: 'kurai',
      meaning: { en: 'dark', vi: 'tối' },
      ruby: [{ base: '暗', reading: 'く' }]
    },
    {
      kana: 'からだ',
      kanji: '体',
      romaji: 'karada',
      meaning: { en: 'body', vi: 'cơ thể' },
      ruby: [{ base: '体', reading: 'からだ' }]
    },
    {
      kana: 'あたま',
      kanji: '頭',
      romaji: 'atama',
      meaning: { en: 'head', vi: 'đầu' },
      ruby: [{ base: '頭', reading: 'あたま' }]
    },
    {
      kana: 'かみ',
      kanji: '髪',
      romaji: 'kami',
      meaning: { en: 'hair (on the head)', vi: 'tóc' },
      ruby: [{ base: '髪', reading: 'かみ' }]
    },
    {
      kana: 'かお',
      kanji: '顔',
      romaji: 'kao',
      meaning: { en: 'face', vi: 'mặt' },
      ruby: [{ base: '顔', reading: 'かお' }]
    },
    {
      kana: 'め',
      kanji: '目',
      romaji: 'me',
      meaning: { en: 'eye', vi: 'mắt' },
      ruby: [{ base: '目', reading: 'め' }]
    },
    {
      kana: 'みみ',
      kanji: '耳',
      romaji: 'mimi',
      meaning: { en: 'ear', vi: 'tai' },
      ruby: [{ base: '耳', reading: 'みみ' }]
    },
    {
      kana: 'くち',
      kanji: '口',
      romaji: 'kuchi',
      meaning: { en: 'mouth', vi: 'miệng' },
      ruby: [{ base: '口', reading: 'くち' }]
    },
    {
      kana: 'は',
      kanji: '歯',
      romaji: 'ha',
      meaning: { en: 'tooth', vi: 'răng' },
      ruby: [{ base: '歯', reading: 'は' }]
    },
    {
      kana: 'おなか',
      romaji: 'onaka',
      meaning: { en: 'stomach, belly', vi: 'bụng' }
    },
    {
      kana: 'あし',
      kanji: '足',
      romaji: 'ashi',
      meaning: { en: 'leg, foot', vi: 'chân' },
      ruby: [{ base: '足', reading: 'あし' }]
    },
    {
      kana: 'せ',
      kanji: '背',
      romaji: 'se',
      meaning: { en: 'height, stature; back', vi: 'dáng, chiều cao; lưng' },
      ruby: [{ base: '背', reading: 'せ' }]
    },
    {
      kana: 'サービス',
      romaji: 'sābisu',
      meaning: { en: 'service', vi: 'dịch vụ' }
    },
    {
      kana: 'ジョギング',
      romaji: 'jogingu',
      meaning: { en: 'jogging (～を します: go jogging)', vi: 'chạy bộ (～を します: đi chạy bộ)' }
    },
    {
      kana: 'シャワー',
      romaji: 'shawā',
      meaning: { en: 'shower', vi: 'vòi sen, tắm vòi sen' }
    },
    {
      kana: 'みどり',
      kanji: '緑',
      romaji: 'midori',
      meaning: { en: 'green (color)', vi: 'màu xanh lá' },
      ruby: [{ base: '緑', reading: 'みどり' }]
    },
    {
      kana: 'おてら',
      kanji: 'お寺',
      romaji: 'otera',
      meaning: { en: 'Buddhist temple', vi: 'chùa' },
      ruby: [{ base: '寺', reading: 'てら' }]
    },
    {
      kana: 'じんじゃ',
      kanji: '神社',
      romaji: 'jinja',
      meaning: { en: 'Shinto shrine', vi: 'đền thờ đạo Thần' },
      ruby: [{ base: '神', reading: 'じん' }]
    },
    {
      kana: '～ばん',
      kanji: '～番',
      romaji: '~ban',
      meaning: { en: 'number ~ (bus, etc.)', vi: 'số ~ (xe buýt, v.v.)' },
      ruby: [{ base: '番', reading: 'ばん' }]
    },
    {
      kana: 'どうやって',
      romaji: 'dō yatte',
      meaning: { en: 'how (method)', vi: 'bằng cách nào, làm sao' }
    },
    {
      kana: 'どの～',
      romaji: 'dono ~',
      meaning: { en: 'which ~ (before a noun)', vi: 'cái ~ nào (trước danh từ)' }
    },
    {
      kana: 'どれ',
      romaji: 'dore',
      meaning: { en: 'which one (standalone)', vi: 'cái nào (đứng một mình)' }
    }
  ],
  phrases: [
    {
      kana: 'すごい ですね。',
      kanji: 'すごい ですね。',
      romaji: 'Sugoi desu ne.',
      meaning: { en: 'That is amazing!', vi: 'Giỏi quá!/Hay quá!' }
    },
    {
      kana: 'いいえ、まだまだ です。',
      romaji: 'Iie, mada mada desu.',
      meaning: {
        en: 'No, I still have a long way to go. (humble reply to praise)',
        vi: 'Không, còn kém lắm. (khiêm tốn khi được khen)'
      }
    },
    {
      kana: 'お引き出し ですか。',
      kanji: 'お引き出し ですか。',
      romaji: 'O-hikidashi desu ka.',
      meaning: { en: 'Are you withdrawing money?', vi: 'Anh/Chị rút tiền phải không?' },
      ruby: [
        { base: '引', reading: 'ひ' },
        { base: '出', reading: 'だ' }
      ]
    },
    {
      kana: 'まず',
      romaji: 'mazu',
      meaning: { en: 'first (of all)', vi: 'trước hết, đầu tiên' }
    },
    {
      kana: 'つぎに',
      kanji: '次に',
      romaji: 'tsugi ni',
      meaning: { en: 'next', vi: 'tiếp theo' },
      ruby: [{ base: '次', reading: 'つぎ' }]
    },
    {
      kana: 'キャッシュカード',
      romaji: 'kyasshu kādo',
      meaning: { en: 'cash card, ATM card', vi: 'thẻ ATM' }
    },
    {
      kana: 'あんしょうばんごう',
      kanji: '暗証番号',
      romaji: 'anshō bangō',
      meaning: { en: 'PIN (personal identification number)', vi: 'mã PIN' },
      ruby: [
        { base: '暗', reading: 'あん' },
        { base: '証', reading: 'しょう' },
        { base: '番', reading: 'ばん' },
        { base: '号', reading: 'ごう' }
      ]
    },
    {
      kana: 'きんがく',
      kanji: '金額',
      romaji: 'kingaku',
      meaning: { en: 'amount of money', vi: 'số tiền' },
      ruby: [
        { base: '金', reading: 'きん' },
        { base: '額', reading: 'がく' }
      ]
    },
    {
      kana: 'かくにん',
      kanji: '確認',
      romaji: 'kakunin',
      meaning: { en: 'confirmation', vi: 'xác nhận' },
      ruby: [
        { base: '確', reading: 'かく' },
        { base: '認', reading: 'にん' }
      ]
    },
    {
      kana: 'かくにんします',
      kanji: '確認します',
      romaji: 'kakunin shimasu',
      meaning: { en: 'to confirm', vi: 'xác nhận' },
      ruby: [
        { base: '確', reading: 'かく' },
        { base: '認', reading: 'にん' }
      ]
    },
    {
      kana: 'ボタン',
      romaji: 'botan',
      meaning: { en: 'button', vi: 'nút bấm' }
    }
  ],
  conversation: [
    {
      id: 'conv-lesson16-atm',
      title: { en: 'At the ATM', vi: 'Ở máy ATM' },
      speakers: [
        { id: 'miller', name: 'ミラー' },
        { id: 'staff', name: '店員' }
      ],
      lines: [
        {
          speakerId: 'miller',
          jp: 'すみません。使い方を 教えて ください。',
          romaji: 'Sumimasen. Tsukaikata o oshiete kudasai.',
          meaning: {
            en: 'Excuse me. Please show me how to use it.',
            vi: 'Xin lỗi. Làm ơn chỉ cho tôi cách dùng.'
          },
          ruby: [
            { base: '使', reading: 'つか' },
            { base: '方', reading: 'かた' },
            { base: '教', reading: 'おし' }
          ]
        },
        {
          speakerId: 'staff',
          jp: 'お引き出し ですか。',
          romaji: 'O-hikidashi desu ka.',
          meaning: { en: 'Are you withdrawing money?', vi: 'Anh rút tiền phải không?' },
          ruby: [
            { base: '引', reading: 'ひ' },
            { base: '出', reading: 'だ' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'はい、10,000円 下ろしたい です。',
          romaji: 'Hai, ichiman en oroshitai desu.',
          meaning: {
            en: 'Yes, I want to withdraw 10,000 yen.',
            vi: 'Vâng, tôi muốn rút 10.000 yen.'
          },
          ruby: [
            { base: '円', reading: 'えん' },
            { base: '下', reading: 'お' }
          ]
        },
        {
          speakerId: 'staff',
          jp: 'まず、キャッシュカードを 入れて ください。',
          romaji: 'Mazu, kyasshu kādo o irete kudasai.',
          meaning: {
            en: 'First, please insert your cash card.',
            vi: 'Trước hết, anh hãy cho thẻ ATM vào.'
          },
          ruby: [{ base: '入', reading: 'い' }]
        },
        {
          speakerId: 'staff',
          jp: '次に、暗証番号を 入れて、金額を 押してください。',
          romaji: 'Tsugi ni, anshō bangō o irete, kingaku o oshite kudasai.',
          meaning: {
            en: 'Next, enter your PIN and press the amount.',
            vi: 'Tiếp theo, nhập mã PIN rồi bấm số tiền.'
          },
          ruby: [
            { base: '次', reading: 'つぎ' },
            { base: '暗', reading: 'あん' },
            { base: '証', reading: 'しょう' },
            { base: '番', reading: 'ばん' },
            { base: '号', reading: 'ごう' },
            { base: '入', reading: 'い' },
            { base: '金', reading: 'きん' },
            { base: '額', reading: 'がく' },
            { base: '押', reading: 'お' }
          ]
        },
        {
          speakerId: 'staff',
          jp: '最後に「確認」ボタンを 押してください。',
          romaji: 'Saigo ni "kakunin" botan o oshite kudasai.',
          meaning: {
            en: 'Finally, please press the "Confirm" button.',
            vi: 'Cuối cùng, anh hãy bấm nút "Xác nhận".'
          },
          ruby: [
            { base: '最', reading: 'さい' },
            { base: '後', reading: 'ご' },
            { base: '確', reading: 'かく' },
            { base: '認', reading: 'にん' },
            { base: '押', reading: 'お' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'わかりました。ありがとう ございます。',
          romaji: 'Wakarimashita. Arigatō gozaimasu.',
          meaning: {
            en: 'I understand. Thank you very much.',
            vi: 'Tôi hiểu rồi. Cảm ơn anh/chị.'
          },
          ruby: [{ base: '分', reading: 'わ' }]
        }
      ]
    },
    {
      id: 'conv-lesson16-bus',
      title: { en: 'Which bus to take', vi: 'Đi xe buýt nào' },
      speakers: [
        { id: 'lin', name: 'リン' },
        { id: 'passerby', name: '通行人' }
      ],
      lines: [
        {
          speakerId: 'lin',
          jp: 'すみません。大学前まで どうやって 行きますか。',
          romaji: 'Sumimasen. Daigakumae made dō yatte ikimasu ka.',
          meaning: {
            en: 'Excuse me. How do I get to Daigakumae?',
            vi: 'Xin lỗi. Làm sao để đến Daigakumae?'
          },
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '前', reading: 'まえ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'passerby',
          jp: 'JRの 駅まで 歩いて、電車に 乗って ください。',
          romaji: 'JR no eki made aruite, densha ni notte kudasai.',
          meaning: {
            en: 'Walk to the JR station and get on a train.',
            vi: 'Anh đi bộ đến ga JR, rồi lên tàu điện.'
          },
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '歩', reading: 'ある' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '乗', reading: 'の' }
          ]
        },
        {
          speakerId: 'passerby',
          jp: '梅田で 乗り換えて、8番の バスに 乗って ください。',
          romaji: 'Umeda de norikaete, hachi-ban no basu ni notte kudasai.',
          meaning: {
            en: 'Transfer at Umeda, then get on bus number 8.',
            vi: 'Chuyển tàu ở Umeda, rồi lên xe buýt số 8.'
          },
          ruby: [
            { base: '梅', reading: 'うめ' },
            { base: '田', reading: 'だ' },
            { base: '乗', reading: 'の' },
            { base: '換', reading: 'か' },
            { base: '番', reading: 'ばん' },
            { base: '乗', reading: 'の' }
          ]
        },
        {
          speakerId: 'lin',
          jp: '8番ですね。大学前で 降りますか。',
          romaji: 'Hachi-ban desu ne. Daigakumae de orimasu ka.',
          meaning: {
            en: 'Bus number 8, right? Do I get off at Daigakumae?',
            vi: 'Xe số 8 nhỉ. Tôi xuống ở Daigakumae à?'
          },
          ruby: [
            { base: '番', reading: 'ばん' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '前', reading: 'まえ' },
            { base: '降', reading: 'お' }
          ]
        },
        {
          speakerId: 'passerby',
          jp: 'はい。あの 緑の 看板の 前です。',
          romaji: 'Hai. Ano midori no kanban no mae desu.',
          meaning: {
            en: 'Yes. It is in front of that green sign.',
            vi: 'Vâng. Ngay trước biển báo màu xanh lá kia.'
          },
          ruby: [
            { base: '緑', reading: 'みどり' },
            { base: '看', reading: 'かん' },
            { base: '板', reading: 'ばん' },
            { base: '前', reading: 'まえ' }
          ]
        },
        {
          speakerId: 'lin',
          jp: 'どうも ありがとう ございました。',
          romaji: 'Dōmo arigatō gozaimashita.',
          meaning: { en: 'Thank you very much.', vi: 'Cảm ơn anh/chị nhiều.' }
        }
      ]
    },
    {
      id: 'conv-lesson16-praise',
      title: { en: 'After the festival', vi: 'Sau lễ hội' },
      speakers: [
        { id: 'yuki', name: 'ユキ' },
        { id: 'tom', name: 'トム' }
      ],
      lines: [
        {
          speakerId: 'tom',
          jp: '雪祭り、すごい ですね。日本語も 上手 ですね。',
          romaji: 'Yuki Matsuri, sugoi desu ne. Nihongo mo jōzu desu ne.',
          meaning: {
            en: 'The Snow Festival is amazing. Your Japanese is great too.',
            vi: 'Lễ hội tuyết hay quá. Tiếng Nhật của bạn cũng giỏi nhỉ.'
          },
          ruby: [
            { base: '雪', reading: 'ゆき' },
            { base: '祭', reading: 'まつ' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' }
          ]
        },
        {
          speakerId: 'yuki',
          jp: 'いいえ、まだまだ です。',
          romaji: 'Iie, mada mada desu.',
          meaning: {
            en: 'No, I still have a long way to go.',
            vi: 'Không, còn kém lắm.'
          }
        },
        {
          speakerId: 'tom',
          jp: 'ユキさんは 髪が 長くて、目が 明るい ですね。',
          romaji: 'Yuki-san wa kami ga nagakute, me ga akarui desu ne.',
          meaning: {
            en: 'Yuki, your hair is long and your eyes are bright.',
            vi: 'Yuki, tóc bạn dài và mắt sáng nhỉ.'
          },
          ruby: [
            { base: '髪', reading: 'かみ' },
            { base: '長', reading: 'なが' },
            { base: '目', reading: 'め' },
            { base: '明', reading: 'あか' }
          ]
        },
        {
          speakerId: 'yuki',
          jp: 'ありがとう。私も トムさんの 背が 高いと 思います。',
          romaji: 'Arigatō. Watashi mo Tomu-san no se ga takai to omoimasu.',
          meaning: {
            en: 'Thank you. I think you are tall too, Tom.',
            vi: 'Cảm ơn. Tôi cũng thấy Tom cao.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '背', reading: 'せ' },
            { base: '高', reading: 'たか' },
            { base: '思', reading: 'おも' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V1-て、V2-て、V3',
      highlights: ['て'],
      title: { en: 'Action sequence (V-て、V-て、V)', vi: 'Chuỗi hành động (V-て、V-て、V)' },
      explanation: {
        en: 'Link verbs in the order things happen: drop ます, add て, and connect with commas. Only the last verb takes the tense ending (ます, ました, etc.).',
        vi: 'Nối các động từ theo thứ tự xảy ra: bỏ ます, thêm て, nối bằng dấu phẩy. Chỉ động từ cuối mang thì (ます, ました, v.v.).'
      },
      examples: [
        {
          jp: 'シャワーを 浴びて、朝ごはんを 食べて、会社へ 行きます。',
          romaji: 'Shawā o abite, asagohan o tabete, kaisha e ikimasu.',
          meaning: {
            en: 'I take a shower, eat breakfast, and go to the office.',
            vi: 'Tôi tắm vòi sen, ăn sáng, rồi đi công ty.'
          },
          ruby: [
            { base: '浴', reading: 'あ' },
            { base: '朝', reading: 'あさ' },
            { base: '食', reading: 'た' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '電車に 乗って、梅田で 乗り換えて、8番の バスに 乗ります。',
          romaji: 'Densha ni notte, Umeda de norikaete, hachi-ban no basu ni norimasu.',
          meaning: {
            en: 'I get on a train, transfer at Umeda, and take bus number 8.',
            vi: 'Tôi lên tàu điện, chuyển tàu ở Umeda, rồi lên xe buýt số 8.'
          },
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '乗', reading: 'の' },
            { base: '梅', reading: 'うめ' },
            { base: '田', reading: 'だ' },
            { base: '乗', reading: 'の' },
            { base: '換', reading: 'か' },
            { base: '番', reading: 'ばん' },
            { base: '乗', reading: 'の' }
          ]
        },
        {
          jp: 'カードを 入れて、暗証番号を 入れて、金額を 押します。',
          romaji: 'Kādo o irete, anshō bangō o irete, kingaku o oshimasu.',
          meaning: {
            en: 'I insert the card, enter the PIN, and press the amount.',
            vi: 'Tôi cho thẻ vào, nhập mã PIN, rồi bấm số tiền.'
          },
          ruby: [
            { base: '入', reading: 'い' },
            { base: '暗', reading: 'あん' },
            { base: '証', reading: 'しょう' },
            { base: '番', reading: 'ばん' },
            { base: '号', reading: 'ごう' },
            { base: '入', reading: 'い' },
            { base: '金', reading: 'きん' },
            { base: '額', reading: 'がく' },
            { base: '押', reading: 'お' }
          ]
        }
      ]
    },
    {
      pattern: 'い-adj-くて、い-adj',
      highlights: ['くて'],
      title: { en: 'i-adjective chain (〜くて、〜)', vi: 'Nối tính từ い (〜くて、〜)' },
      explanation: {
        en: 'Drop い from an i-adjective and add くて to link adjectives. Only the last adjective carries the ending (です, でした, etc.).',
        vi: 'Bỏ い của tính từ い, thêm くて để nối. Chỉ tính từ cuối mang kết thúc câu (です, でした, v.v.).'
      },
      examples: [
        {
          jp: 'この 部屋は 明るくて、広い です。',
          romaji: 'Kono heya wa akarukute, hiroi desu.',
          meaning: {
            en: 'This room is bright and spacious.',
            vi: 'Căn phòng này sáng và rộng.'
          },
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '明', reading: 'あか' },
            { base: '広', reading: 'ひろ' }
          ]
        },
        {
          jp: '髪が 長くて、目が 大きい です。',
          romaji: 'Kami ga nagakute, me ga ōkii desu.',
          meaning: {
            en: 'Her hair is long and her eyes are big.',
            vi: 'Tóc cô ấy dài và mắt to.'
          },
          ruby: [
            { base: '髪', reading: 'かみ' },
            { base: '長', reading: 'なが' },
            { base: '目', reading: 'め' },
            { base: '大', reading: 'おお' }
          ]
        },
        {
          jp: '道が 暗くて、少し こわい です。',
          romaji: 'Michi ga kurakute, sukoshi kowai desu.',
          meaning: {
            en: 'The road is dark and a little scary.',
            vi: 'Đường tối và hơi đáng sợ.'
          },
          ruby: [
            { base: '道', reading: 'みち' },
            { base: '暗', reading: 'く' },
            { base: '少', reading: 'すこ' }
          ]
        }
      ]
    },
    {
      pattern: 'な-adj/N で、～',
      highlights: ['で'],
      title: {
        en: 'Na-adjective/noun chain (N/な-adj で、～)',
        vi: 'Nối danh từ/tính từ な (N/な-adj で、～)'
      },
      explanation: {
        en: 'Use で after a na-adjective or noun to link qualities or roles. Only the final predicate carries the tense ending.',
        vi: 'Dùng で sau tính từ な hoặc danh từ để nối đặc điểm hoặc vai trò. Chỉ vế cuối mang thì.'
      },
      examples: [
        {
          jp: 'ミラーさんは 会社員で、28歳 です。',
          romaji: 'Mirā-san wa kaishain de, nijū-hassai desu.',
          meaning: {
            en: 'Mr. Miller is a company employee and 28 years old.',
            vi: 'Anh Miller là nhân viên công ty và 28 tuổi.'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '員', reading: 'いん' },
            { base: '歳', reading: 'さい' }
          ]
        },
        {
          jp: 'この 町は 静かで、きれい です。',
          romaji: 'Kono machi wa shizuka de, kirei desu.',
          meaning: {
            en: 'This town is quiet and beautiful.',
            vi: 'Thị trấn này yên tĩnh và đẹp.'
          },
          ruby: [
            { base: '町', reading: 'まち' },
            { base: '静', reading: 'しず' }
          ]
        },
        {
          jp: '私の 友達は 学生で、若い です。',
          romaji: 'Watashi no tomodachi wa gakusei de, wakai desu.',
          meaning: {
            en: 'My friend is a student and young.',
            vi: 'Bạn tôi là sinh viên và còn trẻ.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' },
            { base: '若', reading: 'わか' }
          ]
        }
      ]
    },
    {
      pattern: 'V1-てから、V2',
      highlights: ['て', 'から'],
      title: { en: 'After doing (V-てから、V)', vi: 'Sau khi ~ (V-てから、V)' },
      explanation: {
        en: 'V-てから shows the second action happens after the first is finished. Emphasizes sequence more than a simple て chain.',
        vi: 'V-てから cho biết hành động thứ hai xảy ra sau khi hành động thứ nhất hoàn tất. Nhấn mạnh trình tự hơn chuỗi て đơn thuần.'
      },
      examples: [
        {
          jp: 'シャワーを 浴びてから、ジョギングを します。',
          romaji: 'Shawā o abite kara, jogingu o shimasu.',
          meaning: {
            en: 'After taking a shower, I go jogging.',
            vi: 'Sau khi tắm vòi sen, tôi đi chạy bộ.'
          },
          ruby: [{ base: '浴', reading: 'あ' }]
        },
        {
          jp: '大学を 出てから、この 会社で 働いています。',
          romaji: 'Daigaku o dete kara, kono kaisha de hataraite imasu.',
          meaning: {
            en: 'After graduating from university, I have worked at this company.',
            vi: 'Sau khi tốt nghiệp đại học, tôi làm ở công ty này.'
          },
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '出', reading: 'で' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '働', reading: 'はたら' }
          ]
        },
        {
          jp: 'お寺を 見学してから、神社へ 行きます。',
          romaji: 'Otera o kengaku shite kara, jinja e ikimasu.',
          meaning: {
            en: 'After visiting the temple, I will go to the shrine.',
            vi: 'Sau khi tham quan chùa, tôi sẽ đi đền thờ.'
          },
          ruby: [
            { base: '寺', reading: 'てら' },
            { base: '見', reading: 'けん' },
            { base: '学', reading: 'がく' },
            { base: '神', reading: 'じん' },
            { base: '社', reading: 'じゃ' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 は N2 が Adj',
      highlights: ['は', 'が'],
      title: { en: 'Part of a whole (N1 は N2 が Adj)', vi: 'Bộ phận của thể (N1 は N2 が Adj)' },
      explanation: {
        en: 'Use は for the person or thing as a whole and が for the body part or feature being described: 田中さんは 髪が 長いです.',
        vi: 'Dùng は cho người/vật nói chung và が cho bộ phận hoặc đặc điểm: 田中さんは 髪が 長いです.'
      },
      explanationRuby: [
        { base: '田', reading: 'た' },
        { base: '中', reading: 'なか' },
        { base: '髪', reading: 'かみ' },
        { base: '長', reading: 'なが' }
      ],
      examples: [
        {
          jp: '田中さんは 髪が 長い です。',
          romaji: 'Tanaka-san wa kami ga nagai desu.',
          meaning: {
            en: 'Ms. Tanaka has long hair.',
            vi: 'Chị Tanaka tóc dài.'
          },
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '髪', reading: 'かみ' },
            { base: '長', reading: 'なが' }
          ]
        },
        {
          jp: '私は 背が 高くない です。',
          romaji: 'Watashi wa se ga takakunai desu.',
          meaning: { en: 'I am not tall.', vi: 'Tôi không cao.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '背', reading: 'せ' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          jp: 'この 子は 目が 大きくて、口が 小さい です。',
          romaji: 'Kono ko wa me ga ōkikute, kuchi ga chiisai desu.',
          meaning: {
            en: 'This child has big eyes and a small mouth.',
            vi: 'Đứa trẻ này mắt to và miệng nhỏ.'
          },
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '目', reading: 'め' },
            { base: '大', reading: 'おお' },
            { base: '口', reading: 'くち' },
            { base: '小', reading: 'ちい' }
          ]
        }
      ]
    },
    {
      pattern: 'どうやって V',
      highlights: ['どうやって'],
      title: { en: 'How to do (どうやって V)', vi: 'Làm sao để ~ (どうやって V)' },
      explanation: {
        en: 'どうやって asks about the method or means: どうやって 行きますか (How do you get there?). Answer with transport or steps.',
        vi: 'どうやって hỏi cách thức hoặc phương tiện: どうやって 行きますか (Đi bằng cách nào?). Trả lời bằng phương tiện hoặc các bước.'
      },
      explanationRuby: [{ base: '行', reading: 'い' }],
      examples: [
        {
          jp: '大学前まで どうやって 行きますか。',
          romaji: 'Daigakumae made dō yatte ikimasu ka.',
          meaning: {
            en: 'How do you get to Daigakumae?',
            vi: 'Làm sao để đến Daigakumae?'
          },
          dialogueGroup: 'route',
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '前', reading: 'まえ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '電車に 乗って、バスに 乗り換えます。',
          romaji: 'Densha ni notte, basu ni norikaemasu.',
          meaning: {
            en: 'I take a train and transfer to a bus.',
            vi: 'Tôi lên tàu điện rồi chuyển sang xe buýt.'
          },
          dialogueGroup: 'route',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '乗', reading: 'の' },
            { base: '乗', reading: 'の' },
            { base: '換', reading: 'か' }
          ]
        },
        {
          jp: 'お金を どうやって 下ろしますか。',
          romaji: 'Okane o dō yatte oroshimasu ka.',
          meaning: {
            en: 'How do you withdraw money?',
            vi: 'Rút tiền bằng cách nào?'
          },
          dialogueGroup: 'atm',
          ruby: [
            { base: '金', reading: 'かね' },
            { base: '下', reading: 'お' }
          ]
        },
        {
          jp: 'ATMで 下ろします。',
          romaji: 'ATM de oroshimasu.',
          meaning: { en: 'I withdraw it at an ATM.', vi: 'Tôi rút ở máy ATM.' },
          dialogueGroup: 'atm',
          ruby: [{ base: '下', reading: 'お' }]
        }
      ]
    },
    {
      pattern: 'どの N / どれ',
      highlights: ['どの', 'どれ'],
      title: { en: 'Which one (どの N / どれ)', vi: 'Cái nào (どの N / どれ)' },
      explanation: {
        en: 'どの comes before a noun (どの バス). どれ stands alone when choosing from items not named in the question (どれですか).',
        vi: 'どの đứng trước danh từ (どの バス). どれ đứng một mình khi chọn trong các vật chưa gọi tên (どれですか).'
      },
      examples: [
        {
          jp: 'どの バスに 乗りますか。',
          romaji: 'Dono basu ni norimasu ka.',
          meaning: { en: 'Which bus do you take?', vi: 'Anh/Chị lên xe buýt nào?' },
          dialogueGroup: 'bus',
          ruby: [{ base: '乗', reading: 'の' }]
        },
        {
          jp: '8番の バスに 乗ります。',
          romaji: 'Hachi-ban no basu ni norimasu.',
          meaning: { en: 'I take bus number 8.', vi: 'Tôi lên xe buýt số 8.' },
          dialogueGroup: 'bus',
          ruby: [
            { base: '番', reading: 'ばん' },
            { base: '乗', reading: 'の' }
          ]
        },
        {
          jp: 'どれが あなたの カバン ですか。',
          romaji: 'Dore ga anata no kaban desu ka.',
          meaning: { en: 'Which one is your bag?', vi: 'Cái nào là túi của anh/chị?' },
          dialogueGroup: 'bag'
        },
        {
          jp: 'これです。',
          romaji: 'Kore desu.',
          meaning: { en: 'This one.', vi: 'Cái này.' },
          dialogueGroup: 'bag'
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson16-morning',
      title: { en: 'Morning routine', vi: 'Buổi sáng' },
      lines: [
        {
          jp: '私は 毎朝 6時に 起きます。',
          romaji: 'Watashi wa maiasa roku-ji ni okimasu.',
          meaning: { en: 'I wake up at 6 every morning.', vi: 'Tôi dậy lúc 6 giờ mỗi sáng.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '時', reading: 'じ' },
            { base: '起', reading: 'お' }
          ]
        },
        {
          jp: 'シャワーを 浴びてから、コーヒーを 飲んで、ジョギングを 始めます。',
          romaji: 'Shawā o abite kara, kōhī o nonde, jogingu o hajimemasu.',
          meaning: {
            en: 'After a shower I drink coffee, then start jogging.',
            vi: 'Sau khi tắm vòi sen, tôi uống cà phê rồi bắt đầu chạy bộ.'
          },
          ruby: [
            { base: '浴', reading: 'あ' },
            { base: '飲', reading: 'の' },
            { base: '始', reading: 'はじ' }
          ]
        },
        {
          jp: '8時ごろ 家を 出て、電車に 乗ります。',
          romaji: 'Hachi-ji goro ie o dete, densha ni norimasu.',
          meaning: {
            en: 'Around 8 I leave home and get on a train.',
            vi: 'Khoảng 8 giờ tôi ra khỏi nhà và lên tàu điện.'
          },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '家', reading: 'いえ' },
            { base: '出', reading: 'で' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '乗', reading: 'の' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What time does the person wake up?', vi: 'Người đó dậy lúc mấy giờ?' },
          choices: [
            { id: 'a', label: { en: '6 o\u0027clock', vi: '6 giờ' } },
            { id: 'b', label: { en: '8 o\u0027clock', vi: '8 giờ' } },
            { id: 'c', label: { en: '7 o\u0027clock', vi: '7 giờ' } },
            { id: 'd', label: { en: '9 o\u0027clock', vi: '9 giờ' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What does the person do after showering?',
            vi: 'Sau khi tắm, người đó làm gì trước?'
          },
          choices: [
            { id: 'a', label: { en: 'Drink coffee', vi: 'Uống cà phê' } },
            { id: 'b', label: { en: 'Go to bed', vi: 'Đi ngủ' } },
            { id: 'c', label: { en: 'Take a bus', vi: 'Lên xe buýt' } },
            { id: 'd', label: { en: 'Visit a shrine', vi: 'Đi đền thờ' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'How does the person commute?', vi: 'Người đó đi làm bằng gì?' },
          choices: [
            { id: 'a', label: { en: 'Train', vi: 'Tàu điện' } },
            { id: 'b', label: { en: 'Taxi only', vi: 'Chỉ taxi' } },
            { id: 'c', label: { en: 'On foot all the way', vi: 'Đi bộ suốt' } },
            { id: 'd', label: { en: 'Airplane', vi: 'Máy bay' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson16-trip',
      title: { en: 'Trip to the campus', vi: 'Đi đến khuôn viên' },
      lines: [
        {
          jp: 'リンさんは 大学前へ 行きたい です。',
          romaji: 'Rin-san wa Daigakumae e ikitai desu.',
          meaning: {
            en: 'Lin wants to go to Daigakumae.',
            vi: 'Lin muốn đến Daigakumae.'
          },
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '前', reading: 'まえ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: 'JRの 駅まで 歩いて、電車に 乗ります。',
          romaji: 'JR no eki made aruite, densha ni norimasu.',
          meaning: {
            en: 'She walks to the JR station and gets on a train.',
            vi: 'Cô ấy đi bộ đến ga JR rồi lên tàu điện.'
          },
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '歩', reading: 'ある' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '乗', reading: 'の' }
          ]
        },
        {
          jp: '梅田で 乗り換えて、8番の バスで 大学前に 行きます。',
          romaji: 'Umeda de norikaete, hachi-ban no basu de Daigakumae ni ikimasu.',
          meaning: {
            en: 'She transfers at Umeda and goes to Daigakumae on bus number 8.',
            vi: 'Cô chuyển tàu ở Umeda và đi Daigakumae bằng xe buýt số 8.'
          },
          ruby: [
            { base: '梅', reading: 'うめ' },
            { base: '田', reading: 'だ' },
            { base: '乗', reading: 'の' },
            { base: '換', reading: 'か' },
            { base: '番', reading: 'ばん' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '前', reading: 'まえ' },
            { base: '行', reading: 'い' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'Where does Lin want to go?', vi: 'Lin muốn đi đâu?' },
          choices: [
            { id: 'a', label: { en: 'Daigakumae', vi: 'Daigakumae' } },
            { id: 'b', label: { en: 'Umeda only', vi: 'Chỉ Umeda' } },
            { id: 'c', label: { en: 'A temple', vi: 'Chùa' } },
            { id: 'd', label: { en: 'An ATM', vi: 'Máy ATM' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'Where does she transfer?', vi: 'Cô ấy chuyển tàu ở đâu?' },
          choices: [
            { id: 'a', label: { en: 'Umeda', vi: 'Umeda' } },
            { id: 'b', label: { en: 'Daigakumae', vi: 'Daigakumae' } },
            { id: 'c', label: { en: 'At home', vi: 'Ở nhà' } },
            { id: 'd', label: { en: 'At the bus stop only', vi: 'Chỉ ở bến xe' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'Which bus does she take?', vi: 'Cô ấy lên xe buýt số mấy?' },
          choices: [
            { id: 'a', label: { en: 'Number 8', vi: 'Số 8' } },
            { id: 'b', label: { en: 'Number 3', vi: 'Số 3' } },
            { id: 'c', label: { en: 'Number 10', vi: 'Số 10' } },
            { id: 'd', label: { en: 'Not said', vi: 'Không nói' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson16-health',
      title: { en: 'After jogging', vi: 'Sau khi chạy bộ' },
      lines: [
        {
          jp: 'ケンさんは 体が 丈夫 ですが、今日は 足が 痛い です。',
          romaji: 'Ken-san wa karada ga jōbu desu ga, kyō wa ashi ga itai desu.',
          meaning: {
            en: 'Ken is generally fit, but today his legs hurt.',
            vi: 'Ken thể trạng tốt, nhưng hôm nay chân đau.'
          },
          ruby: [
            { base: '体', reading: 'からだ' },
            { base: '丈', reading: 'じょう' },
            { base: '夫', reading: 'ぶ' },
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '足', reading: 'あし' },
            { base: '痛', reading: 'いた' }
          ]
        },
        {
          jp: 'おなかも すきました。水を 飲んで、少し 休みます。',
          romaji: 'Onaka mo sukimashita. Mizu o nonde, sukoshi yasumimasu.',
          meaning: {
            en: 'He is hungry too. He drinks water and rests a little.',
            vi: 'Bụng cũng đói. Anh uống nước và nghỉ một chút.'
          },
          ruby: [
            { base: '水', reading: 'みず' },
            { base: '飲', reading: 'の' },
            { base: '少', reading: 'すこ' },
            { base: '休', reading: 'やす' }
          ]
        },
        {
          jp: 'それから 友達に 電話して、病院の 場所を 聞きます。',
          romaji: 'Sorekara tomodachi ni denwa shite, byōin no basho o kikimasu.',
          meaning: {
            en: 'Then he calls a friend and asks where the hospital is.',
            vi: 'Sau đó anh gọi điện cho bạn và hỏi bệnh viện ở đâu.'
          },
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '病', reading: 'びょう' },
            { base: '院', reading: 'いん' },
            { base: '場', reading: 'ば' },
            { base: '所', reading: 'しょ' },
            { base: '聞', reading: 'き' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What hurts today?', vi: 'Hôm nay đau ở đâu?' },
          choices: [
            { id: 'a', label: { en: 'Legs', vi: 'Chân' } },
            { id: 'b', label: { en: 'Teeth', vi: 'Răng' } },
            { id: 'c', label: { en: 'Ears', vi: 'Tai' } },
            { id: 'd', label: { en: 'Hair', vi: 'Tóc' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What else does Ken feel?', vi: 'Ken còn cảm thấy gì nữa?' },
          choices: [
            { id: 'a', label: { en: 'Hungry', vi: 'Đói' } },
            { id: 'b', label: { en: 'Sleepy only', vi: 'Chỉ buồn ngủ' } },
            { id: 'c', label: { en: 'Cold', vi: 'Lạnh' } },
            { id: 'd', label: { en: 'Angry', vi: 'Tức giận' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'Who does he call?', vi: 'Anh gọi cho ai?' },
          choices: [
            { id: 'a', label: { en: 'A friend', vi: 'Bạn' } },
            { id: 'b', label: { en: 'A taxi driver', vi: 'Tài xế taxi' } },
            { id: 'c', label: { en: 'A teacher', vi: 'Giáo viên' } },
            { id: 'd', label: { en: 'Nobody', vi: 'Không ai' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'ATM services', vi: 'Dịch vụ ATM' },
      includeInQuiz: false,
      intro: {
        en: 'Common buttons and services on a Japanese ATM screen.',
        vi: 'Các nút và dịch vụ thường gặp trên màn hình ATM Nhật.'
      },
      items: [
        {
          kana: 'おあずけいれ',
          kanji: 'お預け入れ',
          romaji: 'o-azukeire',
          meaning: { en: 'deposit', vi: 'gửi tiền' },
          ruby: [
            { base: '預', reading: 'あず' },
            { base: '入', reading: 'い' }
          ]
        },
        {
          kana: 'おふりこみ',
          kanji: 'お振り込み',
          romaji: 'o-furikomi',
          meaning: { en: 'bank transfer (to another account)', vi: 'chuyển khoản' },
          ruby: [{ base: '振', reading: 'ふ' }]
        },
        {
          kana: 'おふりかえ',
          kanji: 'お振り替え',
          romaji: 'o-furikae',
          meaning: {
            en: 'transfer between your own accounts',
            vi: 'chuyển giữa các tài khoản của mình'
          },
          ruby: [{ base: '振', reading: 'ふ' }]
        },
        {
          kana: 'おひきだし',
          kanji: 'お引き出し',
          romaji: 'o-hikidashi',
          meaning: { en: 'withdrawal', vi: 'rút tiền' },
          ruby: [
            { base: '引', reading: 'ひ' },
            { base: '出', reading: 'だ' }
          ]
        },
        {
          kana: 'つうちょうきにゅう',
          kanji: '通帳記入',
          romaji: 'tsūchō kinyū',
          meaning: { en: 'passbook update (print transactions)', vi: 'in sổ tiết kiệm' },
          ruby: [
            { base: '通', reading: 'つう' },
            { base: '帳', reading: 'ちょう' },
            { base: '記', reading: 'き' },
            { base: '入', reading: 'にゅう' }
          ]
        },
        {
          kana: 'ざんだかしょうかい',
          kanji: '残高照会',
          romaji: 'zandaka shōkai',
          meaning: { en: 'balance inquiry', vi: 'tra cứu số dư' },
          ruby: [
            { base: '残', reading: 'ざん' },
            { base: '高', reading: 'だか' },
            { base: '照', reading: 'しょう' },
            { base: '会', reading: 'かい' }
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
          kana: 'JR',
          romaji: 'JR',
          meaning: {
            en: 'Japan Railways (major rail group)',
            vi: 'Tập đoàn đường sắt Nhật Bản (JR)'
          }
        },
        {
          kana: 'ゆきまつり',
          kanji: '雪祭り',
          romaji: 'Yuki Matsuri',
          meaning: { en: 'Snow Festival (Sapporo)', vi: 'Lễ hội tuyết (Sapporo)' },
          ruby: [
            { base: '雪', reading: 'ゆき' },
            { base: '祭', reading: 'まつ' }
          ]
        },
        {
          kana: 'うめだ',
          kanji: '梅田',
          romaji: 'Umeda',
          meaning: { en: 'Umeda (Osaka district/station area)', vi: 'Umeda (khu vực ga Osaka)' },
          ruby: [
            { base: '梅', reading: 'うめ' },
            { base: '田', reading: 'だ' }
          ]
        },
        {
          kana: 'だいがくまえ',
          kanji: '大学前',
          romaji: 'Daigakumae',
          meaning: {
            en: 'Daigakumae (stop/area in front of a university)',
            vi: 'Daigakumae (trước trường đại học)'
          },
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '前', reading: 'まえ' }
          ]
        }
      ]
    }
  ]
};
