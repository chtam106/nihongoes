import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 14 (て形, 〜てください, 〜ています, 〜ましょうか). */
export const n5Lesson14: Lesson = {
  id: 'lesson-14',
  number: 14,
  title: {
    en: 'Requests and directions',
    vi: 'Yêu cầu và chỉ đường'
  },
  focus: {
    en: 'Make polite requests with 〜てください, describe ongoing actions with 〜ています, and offer help with 〜ましょうか.',
    vi: 'Yêu cầu lịch sự với 〜てください, nói hành động đang diễn ra với 〜ています, và đề nghị giúp với 〜ましょうか.'
  },
  vocab: [
    {
      kana: 'つけます',
      kanji: '付けます',
      romaji: 'tsukemasu',
      meaning: { en: 'to turn on', vi: 'bật' },
      ruby: [{ base: '付', reading: 'つ' }]
    },
    {
      kana: 'けします',
      kanji: '消します',
      romaji: 'keshimasu',
      meaning: { en: 'to turn off', vi: 'tắt' },
      ruby: [{ base: '消', reading: 'け' }]
    },
    {
      kana: 'あけます',
      kanji: '開けます',
      romaji: 'akemasu',
      meaning: { en: 'to open', vi: 'mở' },
      ruby: [{ base: '開', reading: 'あ' }]
    },
    {
      kana: 'しめます',
      kanji: '閉めます',
      romaji: 'shimemasu',
      meaning: { en: 'to close (door, window)', vi: 'đóng (cửa, cửa sổ)' },
      ruby: [{ base: '閉', reading: 'し' }]
    },
    {
      kana: 'いそぎます',
      kanji: '急ぎます',
      romaji: 'isogimasu',
      meaning: { en: 'to hurry', vi: 'vội, gấp' },
      ruby: [{ base: '急', reading: 'いそ' }]
    },
    {
      kana: 'まちます',
      kanji: '待ちます',
      romaji: 'machimasu',
      meaning: { en: 'to wait', vi: 'đợi, chờ' },
      ruby: [{ base: '待', reading: 'ま' }]
    },
    {
      kana: 'もちます',
      kanji: '持ちます',
      romaji: 'mochimasu',
      meaning: { en: 'to hold, to carry', vi: 'mang, cầm' },
      ruby: [{ base: '持', reading: 'も' }]
    },
    {
      kana: 'とります',
      kanji: '取ります',
      romaji: 'torimasu',
      meaning: { en: 'to pass, to hand (something)', vi: 'lấy, chuyển' },
      ruby: [{ base: '取', reading: 'と' }]
    },
    {
      kana: 'てつだいます',
      kanji: '手伝います',
      romaji: 'tetsudaimasu',
      meaning: { en: 'to help (with a task)', vi: 'giúp (làm việc gì)' },
      ruby: [{ base: '手', reading: 'て' }]
    },
    {
      kana: 'よびます',
      kanji: '呼びます',
      romaji: 'yobimasu',
      meaning: { en: 'to call (someone)', vi: 'gọi' },
      ruby: [{ base: '呼', reading: 'よ' }]
    },
    {
      kana: 'はなします',
      kanji: '話します',
      romaji: 'hanashimasu',
      meaning: { en: 'to speak, to talk', vi: 'nói, nói chuyện' },
      ruby: [{ base: '話', reading: 'はな' }]
    },
    {
      kana: 'つかいます',
      kanji: '使います',
      romaji: 'tsukaimasu',
      meaning: { en: 'to use', vi: 'dùng, sử dụng' },
      ruby: [{ base: '使', reading: 'つか' }]
    },
    {
      kana: 'とめます',
      kanji: '止めます',
      romaji: 'tomemasu',
      meaning: { en: 'to stop, to park', vi: 'dừng, đỗ' },
      ruby: [{ base: '止', reading: 'と' }]
    },
    {
      kana: 'みせます',
      kanji: '見せます',
      romaji: 'misemasu',
      meaning: { en: 'to show', vi: 'cho xem, trình' },
      ruby: [{ base: '見', reading: 'み' }]
    },
    {
      kana: 'おしえます',
      kanji: '教えます',
      romaji: 'oshiemasu',
      meaning: {
        en: 'to tell, to teach (住所を～: tell an address)',
        vi: 'nói, cho biết (住所を～: nói địa chỉ)'
      },
      ruby: [{ base: '教', reading: 'おし' }]
    },
    {
      kana: 'すわります',
      kanji: '座ります',
      romaji: 'suwarimasu',
      meaning: { en: 'to sit down', vi: 'ngồi' },
      ruby: [{ base: '座', reading: 'すわ' }]
    },
    {
      kana: 'たちます',
      kanji: '立ちます',
      romaji: 'tachimasu',
      meaning: { en: 'to stand up', vi: 'đứng' },
      ruby: [{ base: '立', reading: 'た' }]
    },
    {
      kana: 'はいります',
      kanji: '入ります',
      romaji: 'hairimasu',
      meaning: {
        en: 'to enter (喫茶店に～: enter a cafe)',
        vi: 'vào (喫茶店に～: vào quán giải khát)'
      },
      ruby: [{ base: '入', reading: 'はい' }]
    },
    {
      kana: 'でます',
      kanji: '出ます',
      romaji: 'demasu',
      meaning: {
        en: 'to leave, to exit (喫茶店を～: leave a cafe)',
        vi: 'ra, ra khỏi (喫茶店を～: ra khỏi quán giải khát)'
      },
      ruby: [{ base: '出', reading: 'で' }]
    },
    {
      kana: 'ふります',
      kanji: '降ります',
      romaji: 'furimasu',
      meaning: { en: 'to fall (rain, snow) (雨が～: rain)', vi: 'rơi (mưa, tuyết) (雨が～: mưa)' },
      ruby: [{ base: '降', reading: 'ふ' }]
    },
    {
      kana: 'コピーします',
      romaji: 'kopī shimasu',
      meaning: { en: 'to copy, to photocopy', vi: 'copy, phô-tô' }
    },
    {
      kana: 'でんき',
      kanji: '電気',
      romaji: 'denki',
      meaning: { en: 'electricity, electric light', vi: 'điện, đèn điện' },
      ruby: [{ base: '電', reading: 'でん' }]
    },
    {
      kana: 'エアコン',
      romaji: 'eakon',
      meaning: { en: 'air conditioner', vi: 'máy điều hòa' }
    },
    {
      kana: 'パスポート',
      romaji: 'pasupōto',
      meaning: { en: 'passport', vi: 'hộ chiếu' }
    },
    {
      kana: 'なまえ',
      kanji: '名前',
      romaji: 'namae',
      meaning: { en: 'name', vi: 'tên' },
      ruby: [{ base: '名', reading: 'な' }]
    },
    {
      kana: 'じゅうしょ',
      kanji: '住所',
      romaji: 'jūsho',
      meaning: { en: 'address', vi: 'địa chỉ' },
      ruby: [{ base: '住', reading: 'じゅう' }]
    },
    {
      kana: 'ちず',
      kanji: '地図',
      romaji: 'chizu',
      meaning: { en: 'map', vi: 'bản đồ' },
      ruby: [{ base: '地', reading: 'ち' }]
    },
    {
      kana: 'しお',
      kanji: '塩',
      romaji: 'shio',
      meaning: { en: 'salt', vi: 'muối' },
      ruby: [{ base: '塩', reading: 'しお' }]
    },
    {
      kana: 'さとう',
      kanji: '砂糖',
      romaji: 'satō',
      meaning: { en: 'sugar', vi: 'đường' },
      ruby: [{ base: '砂', reading: 'さ' }]
    },
    {
      kana: 'もんだい',
      kanji: '問題',
      romaji: 'mondai',
      meaning: { en: 'question, problem', vi: 'câu hỏi, vấn đề' },
      ruby: [{ base: '問', reading: 'もん' }]
    },
    {
      kana: 'こたえ',
      kanji: '答え',
      romaji: 'kotae',
      meaning: { en: 'answer', vi: 'câu trả lời' },
      ruby: [{ base: '答', reading: 'こた' }]
    },
    {
      kana: 'よみかた',
      kanji: '読み方',
      romaji: 'yomikata',
      meaning: { en: 'way of reading, how to read', vi: 'cách đọc' },
      ruby: [{ base: '読', reading: 'よ' }]
    },
    {
      kana: '～かた',
      kanji: '～方',
      romaji: '~kata',
      meaning: { en: 'way of ~, how to ~', vi: 'cách ~' },
      ruby: [{ base: '方', reading: 'かた' }]
    },
    {
      kana: 'まっすぐ',
      romaji: 'massugu',
      meaning: { en: 'straight', vi: 'thẳng' }
    },
    {
      kana: 'ゆっくり',
      romaji: 'yukkuri',
      meaning: { en: 'slowly, leisurely', vi: 'chậm, thong thả' }
    },
    {
      kana: 'すぐ',
      romaji: 'sugu',
      meaning: { en: 'immediately, soon', vi: 'ngay, lập tức' }
    },
    {
      kana: 'また',
      romaji: 'mata',
      meaning: { en: 'again', vi: 'lại' }
    },
    {
      kana: 'あとで',
      romaji: 'ato de',
      meaning: { en: 'later', vi: 'sau' }
    },
    {
      kana: 'もう すこし',
      kanji: 'もう 少し',
      romaji: 'mō sukoshi',
      meaning: { en: 'a little more', vi: 'thêm một chút nữa' },
      ruby: [{ base: '少', reading: 'すこ' }]
    },
    {
      kana: 'もう ～',
      romaji: 'mō ~',
      meaning: { en: 'another ~, more ~', vi: 'thêm ~' }
    }
  ],
  phrases: [
    {
      kana: 'さあ',
      romaji: 'saa',
      meaning: { en: 'Come on, well then (encouraging)', vi: 'Thôi, nào (thúc giục, khuyến khích)' }
    },
    {
      kana: 'あれ？',
      romaji: 'are?',
      meaning: {
        en: 'Huh? (surprise at something unexpected)',
        vi: 'Ô? (ngạc nhiên khi thấy điều lạ)'
      }
    },
    {
      kana: 'しんごうを みぎへ まがってください。',
      kanji: '信号を 右へ 曲がってください。',
      romaji: 'Shingō o migi e magatte kudasai.',
      meaning: {
        en: 'Please turn right at the traffic light.',
        vi: 'Anh/Chị hãy rẽ phải ở đèn tín hiệu.'
      },
      ruby: [
        { base: '信', reading: 'しん' },
        { base: '号', reading: 'ごう' },
        { base: '右', reading: 'みぎ' },
        { base: '曲', reading: 'ま' }
      ]
    },
    {
      kana: 'これで おねがいします。',
      kanji: 'これで お願いします。',
      romaji: 'Kore de onegaishimasu.',
      meaning: { en: 'Here is the payment.', vi: 'Gửi anh tiền này.' },
      ruby: [{ base: '願', reading: 'ねが' }]
    },
    {
      kana: 'おつり',
      kanji: 'お釣り',
      romaji: 'otsuri',
      meaning: { en: 'change (money returned)', vi: 'tiền thừa, tiền thối lại' },
      ruby: [{ base: '釣', reading: 'つ' }]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson14-taxi',
      title: { en: 'Taxi to Midoricho', vi: 'Taxi đến Midoricho' },
      speakers: [
        { id: 'karina', name: 'カリナ' },
        { id: 'driver', name: '運転手' }
      ],
      lines: [
        {
          speakerId: 'karina',
          jp: 'すみません。みどり町まで 連れて 行って ください。',
          romaji: 'Sumimasen. Midorichō made tsurete itte kudasai.',
          meaning: {
            en: 'Excuse me. Please take me to Midoricho.',
            vi: 'Xin lỗi. Làm ơn đưa tôi đến Midoricho.'
          },
          ruby: [
            { base: '町', reading: 'ちょう' },
            { base: '連', reading: 'つ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'driver',
          jp: 'はい、わかりました。',
          romaji: 'Hai, wakarimashita.',
          meaning: { en: 'Yes, understood.', vi: 'Vâng, tôi hiểu rồi.' },
          ruby: [{ base: '分', reading: 'わ' }]
        },
        {
          speakerId: 'karina',
          jp: 'すみませんが、あの 信号を 右へ 曲がって ください。',
          romaji: 'Sumimasen ga, ano shingō o migi e magatte kudasai.',
          meaning: {
            en: 'Excuse me, please turn right at that traffic light.',
            vi: 'Xin lỗi, anh hãy rẽ phải ở đèn tín hiệu kia.'
          },
          ruby: [
            { base: '信', reading: 'しん' },
            { base: '号', reading: 'ごう' },
            { base: '右', reading: 'みぎ' },
            { base: '曲', reading: 'ま' }
          ]
        },
        {
          speakerId: 'driver',
          jp: '右ですね。',
          romaji: 'Migi desu ne.',
          meaning: { en: 'Right, correct?', vi: 'Rẽ phải nhỉ?' },
          ruby: [{ base: '右', reading: 'みぎ' }]
        },
        {
          speakerId: 'driver',
          jp: 'まっすぐ 行きますね。',
          romaji: 'Massugu ikimasu ne.',
          meaning: { en: 'I will go straight, correct?', vi: 'Đi thẳng nhỉ?' },
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          speakerId: 'karina',
          jp: 'はい、まっすぐ 行って ください。',
          romaji: 'Hai, massugu itte kudasai.',
          meaning: { en: 'Yes, please keep going straight.', vi: 'Vâng, anh cứ đi thẳng.' },
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          speakerId: 'karina',
          jp: 'あの 花屋の 前で 止めて ください。',
          romaji: 'Ano hanaya no mae de tomete kudasai.',
          meaning: {
            en: 'Please stop in front of that flower shop.',
            vi: 'Anh dừng trước tiệm hoa kia.'
          },
          ruby: [
            { base: '花', reading: 'はな' },
            { base: '屋', reading: 'や' },
            { base: '前', reading: 'まえ' },
            { base: '止', reading: 'と' }
          ]
        },
        {
          speakerId: 'driver',
          jp: 'はい。1,800円 です。',
          romaji: 'Hai. Sen hachi-hyaku en desu.',
          meaning: { en: 'Certainly. That is 1,800 yen.', vi: 'Vâng. Hết 1.800 yen.' },
          ruby: [{ base: '円', reading: 'えん' }]
        },
        {
          speakerId: 'karina',
          jp: 'はい、これで お願いします。',
          romaji: 'Hai, kore de onegaishimasu.',
          meaning: { en: 'Yes, here is the payment.', vi: 'Vâng, gửi anh tiền này.' },
          ruby: [{ base: '願', reading: 'ねが' }]
        },
        {
          speakerId: 'driver',
          jp: 'お釣りは 3,200円 です。ありがとう ございました。',
          romaji: 'Otsuri wa san-zen nihyaku en desu. Arigatō gozaimashita.',
          meaning: {
            en: 'Your change is 3,200 yen. Thank you very much.',
            vi: 'Tiền thối 3.200 yen. Cảm ơn anh/chị.'
          },
          ruby: [
            { base: '釣', reading: 'つ' },
            { base: '円', reading: 'えん' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson14-office',
      title: { en: 'On the phone', vi: 'Đang gọi điện' },
      speakers: [
        { id: 'sato', name: '佐藤' },
        { id: 'colleague', name: '同僚' }
      ],
      lines: [
        {
          speakerId: 'colleague',
          jp: '佐藤さんは 今 どこですか。',
          romaji: 'Satō-san wa ima doko desu ka.',
          meaning: { en: 'Where is Ms. Sato now?', vi: 'Chị Sato bây giờ ở đâu?' },
          ruby: [
            { base: '佐', reading: 'さ' },
            { base: '藤', reading: 'とう' },
            { base: '今', reading: 'いま' }
          ]
        },
        {
          speakerId: 'sato',
          jp: '今 会議室で 松本さんと 話して います。',
          romaji: 'Ima kaigishitsu de Matsumoto-san to hanashite imasu.',
          meaning: {
            en: 'She is talking with Mr. Matsumoto in the meeting room now.',
            vi: 'Chị ấy đang nói chuyện với anh Matsumoto ở phòng họp.'
          },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '室', reading: 'しつ' },
            { base: '松', reading: 'まつ' },
            { base: '本', reading: 'もと' },
            { base: '話', reading: 'はな' }
          ]
        },
        {
          speakerId: 'colleague',
          jp: 'そうですか。じゃ、あとで また 来ます。',
          romaji: 'Sō desu ka. Ja, ato de mata kimasu.',
          meaning: {
            en: 'I see. Then I will come again later.',
            vi: 'Vậy à. Thế tôi quay lại sau.'
          },
          ruby: [{ base: '来', reading: 'き' }]
        }
      ]
    },
    {
      id: 'conv-lesson14-help',
      title: { en: 'At the station', vi: 'Ở nhà ga' },
      speakers: [
        { id: 'lin', name: 'リン' },
        { id: 'ken', name: 'ケン' }
      ],
      lines: [
        {
          speakerId: 'lin',
          jp: '荷物が 重いです。持ちましょうか。',
          romaji: 'Nimotsu ga omoi desu. Mochimashō ka.',
          meaning: {
            en: 'The luggage is heavy. Shall I carry it for you?',
            vi: 'Hành lý nặng quá. Tôi mang giúp anh nhé?'
          },
          ruby: [
            { base: '荷', reading: 'に' },
            { base: '物', reading: 'もつ' },
            { base: '重', reading: 'おも' },
            { base: '持', reading: 'も' }
          ]
        },
        {
          speakerId: 'ken',
          jp: 'すみません。お願いします。',
          romaji: 'Sumimasen. Onegaishimasu.',
          meaning: { en: 'Thank you. Please do.', vi: 'Cảm ơn. Nhờ anh.' },
          ruby: [{ base: '願', reading: 'ねが' }]
        },
        {
          speakerId: 'lin',
          jp: 'タクシーで 帰りますか。',
          romaji: 'Takushī de kaerimasu ka.',
          meaning: { en: 'Will you go home by taxi?', vi: 'Anh về bằng taxi à?' },
          ruby: [{ base: '帰', reading: 'かえ' }]
        },
        {
          speakerId: 'ken',
          jp: 'はい。駅まで 迎えに 来て もらいます。',
          romaji: 'Hai. Eki made mukae ni kite moraimasu.',
          meaning: {
            en: 'Yes. Someone will come to pick me up at the station.',
            vi: 'Vâng. Có người đến đón tôi ở ga.'
          },
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '迎', reading: 'むか' },
            { base: '来', reading: 'き' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-て ください',
      highlights: ['て', 'ください'],
      title: { en: 'Please do (〜てください)', vi: 'Hãy ~ (〜てください)' },
      explanation: {
        en: 'Drop ます and add て, then ください to make a polite request or instruction. Form the て-form by verb group: Group I (書き→書いて, 読み→読んで, 待ち→待って); Group II (食べ→食べて); Group III (き→きて, する→して).',
        vi: 'Bỏ ます, thêm て rồi ください để yêu cầu hoặc chỉ thị lịch sự. Chia thể て theo nhóm: nhóm I (書き→書いて, 読み→読んで, 待ち→待って); nhóm II (食べ→食べて); nhóm III (き→きて, する→して).'
      },
      explanationRuby: [
        { base: '書', reading: 'か' },
        { base: '書', reading: 'か' },
        { base: '読', reading: 'よ' },
        { base: '読', reading: 'よ' },
        { base: '待', reading: 'ま' },
        { base: '待', reading: 'ま' },
        { base: '食', reading: 'た' },
        { base: '食', reading: 'た' },
        { base: '来', reading: 'き' }
      ],
      examples: [
        {
          jp: 'ちょっと 待って ください。',
          romaji: 'Chotto matte kudasai.',
          meaning: { en: 'Please wait a moment.', vi: 'Anh/Chị vui lòng đợi một chút.' },
          ruby: [{ base: '待', reading: 'ま' }]
        },
        {
          jp: 'ボールペンで 名前を 書いて ください。',
          romaji: 'Bōrupen de namae o kaite kudasai.',
          meaning: {
            en: 'Please write your name with a ballpoint pen.',
            vi: 'Anh/Chị hãy viết tên bằng bút bi.'
          },
          ruby: [
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          jp: 'すみませんが、この 漢字の 読み方を 教えて ください。',
          romaji: 'Sumimasen ga, kono kanji no yomikata o oshiete kudasai.',
          meaning: {
            en: 'Excuse me, please tell me how to read this kanji.',
            vi: 'Xin lỗi, hãy chỉ cho tôi cách đọc chữ Hán này.'
          },
          ruby: [
            { base: '漢', reading: 'かん' },
            { base: '字', reading: 'じ' },
            { base: '読', reading: 'よ' },
            { base: '方', reading: 'かた' },
            { base: '教', reading: 'おし' }
          ]
        },
        {
          jp: '暑いですね。窓を 開けましょうか。',
          romaji: 'Atsui desu ne. Mado o akemashō ka.',
          meaning: {
            en: 'It is hot, is it not? Shall I open the window?',
            vi: 'Nóng nhỉ. Tôi mở cửa sổ nhé?'
          },
          dialogueGroup: 'window',
          ruby: [
            { base: '暑', reading: 'あつ' },
            { base: '窓', reading: 'まど' },
            { base: '開', reading: 'あ' }
          ]
        },
        {
          jp: 'ええ、お願いします。',
          romaji: 'Ee, onegaishimasu.',
          meaning: { en: 'Yes, please.', vi: 'Vâng, nhờ anh/chị.' },
          dialogueGroup: 'window',
          ruby: [{ base: '願', reading: 'ねが' }]
        }
      ]
    },
    {
      pattern: 'V-て います',
      highlights: ['て', 'います', 'いません'],
      title: { en: 'Action in progress (〜ています)', vi: 'Đang ~ (〜ています)' },
      explanation: {
        en: 'V-て います shows an action happening now. Negative: 〜ていません. Also used for ongoing natural states (雨が降っています).',
        vi: 'V-て います diễn tả hành động đang xảy ra. Phủ định: 〜ていません. Cũng dùng cho trạng thái tự nhiên đang kéo dài (雨が降っています).'
      },
      explanationRuby: [
        { base: '雨', reading: 'あめ' },
        { base: '降', reading: 'ふ' }
      ],
      examples: [
        {
          jp: 'ミラーさんは 今 電話を かけて います。',
          romaji: 'Mirā-san wa ima denwa o kakete imasu.',
          meaning: { en: 'Mr. Miller is on the phone now.', vi: 'Anh Miller đang gọi điện thoại.' },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        },
        {
          jp: '今 雨が 降っていますか。',
          romaji: 'Ima ame ga futte imasu ka.',
          meaning: { en: 'Is it raining now?', vi: 'Bây giờ trời có mưa không?' },
          dialogueGroup: 'rain',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '雨', reading: 'あめ' },
            { base: '降', reading: 'ふ' }
          ]
        },
        {
          jp: 'はい、降っています。',
          romaji: 'Hai, futte imasu.',
          meaning: { en: 'Yes, it is raining.', vi: 'Có, trời đang mưa.' },
          dialogueGroup: 'rain',
          ruby: [{ base: '降', reading: 'ふ' }]
        },
        {
          jp: 'いいえ、降っていません。',
          romaji: 'Iie, futte imasen.',
          meaning: { en: 'No, it is not raining.', vi: 'Không, trời không mưa.' },
          dialogueGroup: 'rain',
          ruby: [{ base: '降', reading: 'ふ' }]
        }
      ]
    },
    {
      pattern: 'V-ましょうか',
      highlights: ['ましょうか'],
      title: { en: 'Shall I...? (〜ましょうか)', vi: 'Tôi ~ nhé? (〜ましょうか)' },
      explanation: {
        en: 'Use verb stem + ましょうか to offer to do something for the listener. Accept with お願いします; decline with けっこうです or 結構です.',
        vi: 'Dùng gốc động từ + ましょうか để đề nghị làm gì cho người nghe. Đồng ý: お願いします; từ chối: けっこうです hoặc 結構です.'
      },
      explanationRuby: [
        { base: '願', reading: 'ねが' },
        { base: '結', reading: 'けっ' },
        { base: '構', reading: 'こう' }
      ],
      examples: [
        {
          jp: '荷物を 持ちましょうか。',
          romaji: 'Nimotsu o mochimashō ka.',
          meaning: { en: 'Shall I carry your luggage?', vi: 'Tôi mang hành lý giúp anh/chị nhé?' },
          ruby: [
            { base: '荷', reading: 'に' },
            { base: '物', reading: 'もつ' },
            { base: '持', reading: 'も' }
          ]
        },
        {
          jp: 'いいえ、結構です。タクシーで 帰ります。',
          romaji: 'Iie, kekkō desu. Takushī de kaerimasu.',
          meaning: {
            en: 'No thank you. I will go home by taxi.',
            vi: 'Không, tôi tự mang được. Tôi về bằng taxi.'
          },
          ruby: [
            { base: '結', reading: 'けっ' },
            { base: '構', reading: 'こう' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          jp: '駅まで 迎えに 行きましょうか。',
          romaji: 'Eki made mukae ni ikimashō ka.',
          meaning: {
            en: 'Shall I go to pick you up at the station?',
            vi: 'Tôi đến ga đón anh/chị nhé?'
          },
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '迎', reading: 'むか' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'N が V',
      highlights: ['が'],
      title: { en: 'Natural phenomena (N が V)', vi: 'Hiện tượng tự nhiên (N が V)' },
      explanation: {
        en: 'Use が (not は) with natural phenomena or objective facts: 雨が降ります, 風が吹きます. Also for noticing someone is absent: ミラーさんが いませんね.',
        vi: 'Dùng が (không phải は) với hiện tượng tự nhiên hoặc sự việc khách quan: 雨が降ります, 風が吹きます. Cũng dùng khi nhận ra ai đó vắng mặt: ミラーさんが いませんね.'
      },
      explanationRuby: [
        { base: '雨', reading: 'あめ' },
        { base: '降', reading: 'ふ' },
        { base: '風', reading: 'かぜ' },
        { base: '吹', reading: 'ふ' }
      ],
      examples: [
        {
          jp: '雨が 降っています。',
          romaji: 'Ame ga futte imasu.',
          meaning: { en: 'It is raining.', vi: 'Trời đang mưa.' },
          ruby: [
            { base: '雨', reading: 'あめ' },
            { base: '降', reading: 'ふ' }
          ]
        },
        {
          jp: 'ミラーさんが いませんね。',
          romaji: 'Mirā-san ga imasen ne.',
          meaning: { en: 'Mr. Miller is not here, is he?', vi: 'Anh Miller không có ở đây nhỉ!' }
        }
      ]
    },
    {
      pattern: 'すみませんが',
      highlights: ['すみませんが'],
      title: { en: 'Polite opener (すみませんが)', vi: 'Mở đầu lịch sự (すみませんが)' },
      explanation: {
        en: 'Start a request with すみませんが or 失礼ですが to soften the approach. It does not mean "but" here - it simply opens the sentence politely.',
        vi: 'Bắt đầu yêu cầu bằng すみませんが hoặc 失礼ですが để mở lời nhẹ nhàng. Ở đây không mang nghĩa "nhưng" - chỉ mở đầu câu lịch sự.'
      },
      explanationRuby: [
        { base: '失', reading: 'しつ' },
        { base: '礼', reading: 'れい' }
      ],
      examples: [
        {
          jp: 'すみませんが、塩を 取って ください。',
          romaji: 'Sumimasen ga, shio o totte kudasai.',
          meaning: {
            en: 'Excuse me, please pass the salt.',
            vi: 'Xin lỗi, anh/chị lấy giúp tôi muối.'
          },
          ruby: [
            { base: '塩', reading: 'しお' },
            { base: '取', reading: 'と' }
          ]
        },
        {
          jp: '失礼ですが、お名前は？',
          romaji: 'Shitsurei desu ga, o-namae wa?',
          meaning: { en: 'Excuse me, may I ask your name?', vi: 'Xin lỗi, anh/chị tên gì ạ?' },
          ruby: [
            { base: '失', reading: 'しつ' },
            { base: '礼', reading: 'れい' },
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson14-rain',
      title: { en: 'Before the meeting', vi: 'Trước cuộc họp' },
      lines: [
        {
          jp: '今朝 雨が 降っていました。',
          romaji: 'Kesa ame ga futte imashita.',
          meaning: { en: 'It was raining this morning.', vi: 'Sáng nay trời đang mưa.' },
          ruby: [
            { base: '今', reading: 'け' },
            { base: '朝', reading: 'さ' },
            { base: '雨', reading: 'あめ' },
            { base: '降', reading: 'ふ' }
          ]
        },
        {
          jp: '今は もう 降っていません。',
          romaji: 'Ima wa mō futte imasen.',
          meaning: { en: 'It is not raining anymore now.', vi: 'Bây giờ thì không mưa nữa.' },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '降', reading: 'ふ' }
          ]
        },
        {
          jp: '会議室で 資料を コピーして います。',
          romaji: 'Kaigishitsu de shiryō o kopī shite imasu.',
          meaning: {
            en: 'They are photocopying materials in the meeting room.',
            vi: 'Mọi người đang phô-tô tài liệu ở phòng họp.'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '室', reading: 'しつ' },
            { base: '資', reading: 'し' },
            { base: '料', reading: 'りょう' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'Was it raining this morning?', vi: 'Sáng nay có mưa không?' },
          choices: [
            { id: 'a', label: { en: 'Yes', vi: 'Có' } },
            { id: 'b', label: { en: 'No', vi: 'Không' } },
            { id: 'c', label: { en: 'Not said', vi: 'Không nói' } },
            { id: 'd', label: { en: 'It will rain', vi: 'Sẽ mưa' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'Is it raining now?', vi: 'Bây giờ có mưa không?' },
          choices: [
            { id: 'a', label: { en: 'No', vi: 'Không' } },
            { id: 'b', label: { en: 'Yes', vi: 'Có' } },
            { id: 'c', label: { en: 'A little', vi: 'Một chút' } },
            { id: 'd', label: { en: 'Snowing', vi: 'Có tuyết' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: {
            en: 'What are they doing in the meeting room?',
            vi: 'Ở phòng họp họ đang làm gì?'
          },
          choices: [
            { id: 'a', label: { en: 'Photocopying', vi: 'Phô-tô' } },
            { id: 'b', label: { en: 'Eating lunch', vi: 'Ăn trưa' } },
            { id: 'c', label: { en: 'Swimming', vi: 'Bơi' } },
            { id: 'd', label: { en: 'Sleeping', vi: 'Ngủ' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson14-map',
      title: { en: 'Finding an address', vi: 'Tìm địa chỉ' },
      lines: [
        {
          jp: 'すみませんが、地図を 見せて ください。',
          romaji: 'Sumimasen ga, chizu o misete kudasai.',
          meaning: { en: 'Excuse me, please show me the map.', vi: 'Xin lỗi, cho tôi xem bản đồ.' },
          ruby: [
            { base: '地', reading: 'ち' },
            { base: '図', reading: 'ず' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          jp: 'この 住所は どこですか。',
          romaji: 'Kono jūsho wa doko desu ka.',
          meaning: { en: 'Where is this address?', vi: 'Địa chỉ này ở đâu?' },
          ruby: [
            { base: '住', reading: 'じゅう' },
            { base: '所', reading: 'しょ' }
          ]
        },
        {
          jp: 'まっすぐ 行って、2番目の 信号を 左へ 曲がって ください。',
          romaji: 'Massugu itte, ni-banme no shingō o hidari e magatte kudasai.',
          meaning: {
            en: 'Go straight, then turn left at the second traffic light.',
            vi: 'Đi thẳng, rồi rẽ trái ở đèn tín hiệu thứ hai.'
          },
          ruby: [
            { base: '行', reading: 'い' },
            { base: '番', reading: 'ばん' },
            { base: '目', reading: 'め' },
            { base: '信', reading: 'しん' },
            { base: '号', reading: 'ごう' },
            { base: '左', reading: 'ひだり' },
            { base: '曲', reading: 'ま' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What does the person ask to see?', vi: 'Người đó nhờ xem gì?' },
          choices: [
            { id: 'a', label: { en: 'A map', vi: 'Bản đồ' } },
            { id: 'b', label: { en: 'A passport', vi: 'Hộ chiếu' } },
            { id: 'c', label: { en: 'A menu', vi: 'Thực đơn' } },
            { id: 'd', label: { en: 'A ticket', vi: 'Vé' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'Which way to turn at the traffic light?',
            vi: 'Rẽ hướng nào ở đèn tín hiệu?'
          },
          choices: [
            { id: 'a', label: { en: 'Left', vi: 'Trái' } },
            { id: 'b', label: { en: 'Right', vi: 'Phải' } },
            { id: 'c', label: { en: 'Back', vi: 'Quay lại' } },
            { id: 'd', label: { en: 'Stop', vi: 'Dừng' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'At the station', vi: 'Ở nhà ga' },
      includeInQuiz: false,
      intro: {
        en: 'Signs and services you see around a train station.',
        vi: 'Biển báo và dịch vụ quanh nhà ga.'
      },
      items: [
        {
          kana: 'きっぷうりば',
          kanji: '切符売り場',
          romaji: 'kippu uriba',
          meaning: { en: 'ticket counter', vi: 'chỗ bán vé' },
          ruby: [{ base: '切', reading: 'きっ' }]
        },
        {
          kana: 'じどうけんばいき',
          kanji: '自動券売機',
          romaji: 'jidō kenbaiki',
          meaning: { en: 'ticket vending machine', vi: 'máy bán vé tự động' },
          ruby: [{ base: '自', reading: 'じ' }]
        },
        {
          kana: 'せいさんき',
          kanji: '精算機',
          romaji: 'seisanki',
          meaning: { en: 'fare adjustment machine', vi: 'máy thanh toán tiền vé còn thiếu' },
          ruby: [{ base: '精', reading: 'せい' }]
        },
        {
          kana: 'かいさつぐち',
          kanji: '改札口',
          romaji: 'kaisatsuguchi',
          meaning: { en: 'ticket gate', vi: 'cửa soát vé' },
          ruby: [{ base: '改', reading: 'かい' }]
        },
        {
          kana: 'でぐち',
          kanji: '出口',
          romaji: 'deguchi',
          meaning: { en: 'exit', vi: 'cửa ra' },
          ruby: [{ base: '出', reading: 'で' }]
        },
        {
          kana: 'いりぐち',
          kanji: '入口',
          romaji: 'iriguchi',
          meaning: { en: 'entrance', vi: 'cửa vào' },
          ruby: [{ base: '入', reading: 'い' }]
        },
        {
          kana: 'ひがしぐち',
          kanji: '東口',
          romaji: 'higashiguchi',
          meaning: { en: 'east exit', vi: 'cửa Đông' },
          ruby: [{ base: '東', reading: 'ひがし' }]
        },
        {
          kana: 'にしぐち',
          kanji: '西口',
          romaji: 'nishiguchi',
          meaning: { en: 'west exit', vi: 'cửa Tây' },
          ruby: [{ base: '西', reading: 'にし' }]
        },
        {
          kana: 'みなみぐち',
          kanji: '南口',
          romaji: 'minamiguchi',
          meaning: { en: 'south exit', vi: 'cửa Nam' },
          ruby: [{ base: '南', reading: 'みなみ' }]
        },
        {
          kana: 'きたぐち',
          kanji: '北口',
          romaji: 'kitaguchi',
          meaning: { en: 'north exit', vi: 'cửa Bắc' },
          ruby: [{ base: '北', reading: 'きた' }]
        },
        {
          kana: 'ちゅうおうぐち',
          kanji: '中央口',
          romaji: 'chūōguchi',
          meaning: { en: 'central exit', vi: 'cửa Trung tâm' },
          ruby: [{ base: '中', reading: 'ちゅう' }]
        },
        {
          kana: 'ホーム',
          romaji: 'hōmu',
          meaning: { en: 'platform', vi: 'sân ga' }
        },
        {
          kana: 'ばいてん',
          kanji: '売店',
          romaji: 'baiten',
          meaning: { en: 'kiosk, shop', vi: 'quầy bán hàng, ki-ốt' },
          ruby: [{ base: '売', reading: 'ばい' }]
        },
        {
          kana: 'コインロッカー',
          romaji: 'koin rokkā',
          meaning: { en: 'coin locker', vi: 'hòm để đồ cho thuê bằng tiền xu' }
        },
        {
          kana: 'タクシー乗り場',
          kanji: 'タクシー乗り場',
          romaji: 'takushī noriba',
          meaning: { en: 'taxi stand', vi: 'điểm lên xe tắc-xi' },
          ruby: [{ base: '乗', reading: 'の' }]
        },
        {
          kana: 'バスターミナル',
          romaji: 'basu tāminaru',
          meaning: { en: 'bus terminal', vi: 'bến xe buýt' }
        },
        {
          kana: 'バス停',
          kanji: 'バス停',
          romaji: 'basutei',
          meaning: { en: 'bus stop', vi: 'điểm lên xuống xe buýt' },
          ruby: [{ base: '停', reading: 'てい' }]
        },
        {
          kana: 'とっきゅう',
          kanji: '特急',
          romaji: 'tokkyū',
          meaning: { en: 'limited express', vi: 'tốc hành đặc biệt' },
          ruby: [{ base: '特', reading: 'とっ' }]
        },
        {
          kana: 'きゅうこう',
          kanji: '急行',
          romaji: 'kyūkō',
          meaning: { en: 'express train', vi: 'tốc hành' },
          ruby: [{ base: '急', reading: 'きゅう' }]
        },
        {
          kana: 'かいそく',
          kanji: '快速',
          romaji: 'kaisoku',
          meaning: { en: 'rapid (train)', vi: 'nhanh' },
          ruby: [{ base: '快', reading: 'かい' }]
        },
        {
          kana: 'じゅんきゅう',
          kanji: '準急',
          romaji: 'junkyū',
          meaning: { en: 'semi-express', vi: 'bán tốc hành' },
          ruby: [{ base: '準', reading: 'じゅん' }]
        },
        {
          kana: 'ふつう',
          kanji: '普通',
          romaji: 'futsū',
          meaning: { en: 'local (train)', vi: 'tàu thường, địa phương' },
          ruby: [{ base: '普', reading: 'ふ' }]
        },
        {
          kana: 'じこくひょう',
          kanji: '時刻表',
          romaji: 'jikokuhyō',
          meaning: { en: 'timetable', vi: 'bảng giờ chạy tàu' },
          ruby: [{ base: '時', reading: 'じ' }]
        },
        {
          kana: '～はつ',
          kanji: '～発',
          romaji: '~hatsu',
          meaning: { en: 'departing from ~', vi: 'xuất phát từ ~' },
          ruby: [{ base: '発', reading: 'はつ' }]
        },
        {
          kana: '～ちゃく',
          kanji: '～着',
          romaji: '~chaku',
          meaning: { en: 'arriving at ~', vi: 'đến ~' },
          ruby: [{ base: '着', reading: 'ちゃく' }]
        },
        {
          kana: '～いき',
          kanji: '～行き',
          romaji: '~iki',
          meaning: { en: 'bound for ~', vi: 'đi ~' },
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          kana: 'ていきけん',
          kanji: '定期券',
          romaji: 'teikiken',
          meaning: { en: 'commuter pass', vi: 'vé tháng' },
          ruby: [{ base: '定', reading: 'てい' }]
        },
        {
          kana: 'かいすうけん',
          kanji: '回数券',
          romaji: 'kaisūken',
          meaning: { en: 'coupon tickets', vi: 'vé giảm giá khi đi nhiều' },
          ruby: [{ base: '回', reading: 'かい' }]
        },
        {
          kana: 'かたみち',
          kanji: '片道',
          romaji: 'katamichi',
          meaning: { en: 'one way', vi: 'một chiều' },
          ruby: [{ base: '片', reading: 'かた' }]
        },
        {
          kana: 'おうふく',
          kanji: '往復',
          romaji: 'ōfuku',
          meaning: { en: 'round trip', vi: 'hai chiều, đi và về' },
          ruby: [{ base: '往', reading: 'おう' }]
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Names in this lesson', vi: 'Tên riêng trong bài' },
      includeInQuiz: false,
      items: [
        {
          kana: 'みどりちょう',
          kanji: 'みどり町',
          romaji: 'Midorichō',
          meaning: { en: 'Midoricho (fictional town)', vi: 'Midoricho (thành phố giả định)' },
          ruby: [{ base: '町', reading: 'ちょう' }]
        }
      ]
    }
  ]
};
