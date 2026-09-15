import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 35 (V-たら, たらいいですか, N は N, ～ないか). */
export const n4Lesson35: Lesson = {
  id: 'lesson-35',
  number: 35,
  title: {
    en: 'When and if',
    vi: 'Khi thì và nếu thì'
  },
  focus: {
    en: 'Express conditions with V-たら, ask how to do something with question word + V-たら, give topical information with N は N, and ask politely with ～ないか.',
    vi: 'Diễn tả điều kiện với V-たら, hỏi cách làm với từ nghi vấn + V-たら, cung cấp thông tin chủ đề với N は N, và hỏi lịch sự với ～ないか.'
  },
  vocab: [
    {
      kana: 'さきます',
      kanji: '咲きます',
      romaji: 'sakimasu',
      meaning: { en: 'to bloom [花が～: flowers]', vi: 'nở [花が～: hoa]' },
      ruby: [{ base: '咲', reading: 'さ' }]
    },
    {
      kana: 'かわります',
      kanji: '変わります',
      romaji: 'kawarimasu',
      meaning: { en: 'to change [色が～: color]', vi: 'đổi, thay đổi [色が～: màu]' },
      ruby: [{ base: '変', reading: 'か' }]
    },
    {
      kana: 'こまります',
      kanji: '困ります',
      romaji: 'komarimasu',
      meaning: { en: 'to be troubled, to be at a loss', vi: 'khó khăn, lúng túng' },
      ruby: [{ base: '困', reading: 'こま' }]
    },
    {
      kana: 'つけます',
      kanji: '付けます',
      romaji: 'tsukemasu',
      meaning: { en: 'to mark, to put on [丸を～: a circle]', vi: 'đánh [dấu tròn], gắn' },
      ruby: [{ base: '付', reading: 'つ' }]
    },
    {
      kana: 'なおります',
      kanji: '治ります、直ります',
      romaji: 'naorimasu',
      meaning: {
        en: 'to be cured, to be fixed [病気が～ / 故障が～]',
        vi: 'khỏi [bệnh] / được sửa xong [hỏng hóc ~]'
      },
      ruby: [
        { base: '治', reading: 'なお' },
        { base: '直', reading: 'なお' }
      ]
    },
    {
      kana: 'クリックします',
      romaji: 'kurikku shimasu',
      meaning: { en: 'to click (a mouse)', vi: 'click chuột' }
    },
    {
      kana: 'にゅうりょくします',
      kanji: '入力します',
      romaji: 'nyūryoku shimasu',
      meaning: { en: 'to enter, to input', vi: 'nhập vào' },
      ruby: [{ base: '入', reading: 'にゅう' }]
    },
    {
      kana: 'ただしい',
      kanji: '正しい',
      romaji: 'tadashii',
      meaning: { en: 'correct, right', vi: 'đúng' },
      ruby: [{ base: '正', reading: 'ただ' }]
    },
    {
      kana: 'むこう',
      kanji: '向こう',
      romaji: 'mukō',
      meaning: { en: 'over there, the other side', vi: 'đằng ấy, phía đối diện' },
      ruby: [{ base: '向', reading: 'む' }]
    },
    {
      kana: 'しま',
      kanji: '島',
      romaji: 'shima',
      meaning: { en: 'island', vi: 'đảo' },
      ruby: [{ base: '島', reading: 'しま' }]
    },
    {
      kana: 'みなと',
      kanji: '港',
      romaji: 'minato',
      meaning: { en: 'port, harbor', vi: 'cảng' },
      ruby: [{ base: '港', reading: 'みな' }]
    },
    {
      kana: 'きんじょ',
      kanji: '近所',
      romaji: 'kinjo',
      meaning: { en: 'neighborhood', vi: 'hàng xóm, khu phố' },
      ruby: [
        { base: '近', reading: 'きん' },
        { base: '所', reading: 'じょ' }
      ]
    },
    {
      kana: 'おくじょう',
      kanji: '屋上',
      romaji: 'okujō',
      meaning: { en: 'rooftop', vi: 'tầng thượng' },
      ruby: [
        { base: '屋', reading: 'おく' },
        { base: '上', reading: 'じょう' }
      ]
    },
    {
      kana: 'かいがい',
      kanji: '海外',
      romaji: 'kaigai',
      meaning: { en: 'overseas, abroad', vi: 'nước ngoài' },
      ruby: [
        { base: '海', reading: 'かい' },
        { base: '外', reading: 'がい' }
      ]
    },
    {
      kana: 'やまのぼり',
      kanji: '山登り',
      romaji: 'yamanobori',
      meaning: { en: 'mountain climbing', vi: 'leo núi' },
      ruby: [
        { base: '山', reading: 'やま' },
        { base: '登', reading: 'のぼ' }
      ]
    },
    {
      kana: 'れきし',
      kanji: '歴史',
      romaji: 'rekishi',
      meaning: { en: 'history', vi: 'lịch sử' },
      ruby: [
        { base: '歴', reading: 'れき' },
        { base: '史', reading: 'し' }
      ]
    },
    {
      kana: 'きかい',
      kanji: '機会',
      romaji: 'kikai',
      meaning: { en: 'chance, opportunity', vi: 'cơ hội' },
      ruby: [
        { base: '機', reading: 'き' },
        { base: '会', reading: 'かい' }
      ]
    },
    {
      kana: 'きょか',
      kanji: '許可',
      romaji: 'kyoka',
      meaning: { en: 'permission', vi: 'sự cho phép' },
      ruby: [
        { base: '許', reading: 'きょ' },
        { base: '可', reading: 'か' }
      ]
    },
    {
      kana: 'まる',
      kanji: '丸',
      romaji: 'maru',
      meaning: { en: 'circle (mark)', vi: 'dấu tròn' },
      ruby: [{ base: '丸', reading: 'まる' }]
    },
    {
      kana: 'ふりがな',
      romaji: 'furigana',
      meaning: {
        en: 'furigana (kana showing kanji readings)',
        vi: 'furigana (chữ kana biểu thị cách đọc kanji)'
      }
    },
    {
      kana: 'せつび',
      kanji: '設備',
      romaji: 'setsubi',
      meaning: { en: 'equipment, facilities', vi: 'thiết bị' },
      ruby: [
        { base: '設', reading: 'せつ' },
        { base: '備', reading: 'び' }
      ]
    },
    {
      kana: 'レバー',
      romaji: 'rebā',
      meaning: { en: 'lever', vi: 'cần, cần gạt' }
    },
    {
      kana: 'キー',
      romaji: 'kī',
      meaning: { en: 'key (keyboard)', vi: 'phím' }
    },
    {
      kana: 'カーテン',
      romaji: 'kāten',
      meaning: { en: 'curtain', vi: 'rèm cửa' }
    },
    {
      kana: 'ひも',
      romaji: 'himo',
      meaning: { en: 'string, cord', vi: 'sợi dây' }
    },
    {
      kana: 'すいはんき',
      kanji: '炊飯器',
      romaji: 'suihanki',
      meaning: { en: 'rice cooker', vi: 'nồi cơm điện' },
      ruby: [
        { base: '炊', reading: 'すい' },
        { base: '飯', reading: 'はん' },
        { base: '器', reading: 'き' }
      ]
    },
    {
      kana: 'は',
      kanji: '葉',
      romaji: 'ha',
      meaning: { en: 'leaf', vi: 'lá' },
      ruby: [{ base: '葉', reading: 'は' }]
    },
    {
      kana: 'むかし',
      kanji: '昔',
      romaji: 'mukashi',
      meaning: { en: 'old days, long ago', vi: 'ngày xưa' },
      ruby: [{ base: '昔', reading: 'むかし' }]
    },
    {
      kana: 'もっと',
      romaji: 'motto',
      meaning: { en: 'more', vi: 'hơn nữa' }
    },
    {
      kana: 'それなら',
      romaji: 'sorenara',
      meaning: { en: 'in that case, then', vi: 'nếu thế thì, nếu vậy thì' }
    },
    {
      kana: 'やこうバス',
      kanji: '夜行バス',
      romaji: 'yakō basu',
      meaning: { en: 'overnight bus', vi: 'xe buýt đêm' },
      ruby: [
        { base: '夜', reading: 'や' },
        { base: '行', reading: 'こう' }
      ]
    },
    {
      kana: 'さあ',
      romaji: 'sā',
      meaning: {
        en: 'well, now (when unsure how to answer)',
        vi: 'ờ, à (dùng khi không nắm rõ việc gì)'
      }
    },
    {
      kana: 'りょこうしゃ',
      kanji: '旅行社',
      romaji: 'ryokōsha',
      meaning: { en: 'travel agency', vi: 'công ty du lịch' },
      ruby: [
        { base: '旅', reading: 'りょ' },
        { base: '行', reading: 'こう' },
        { base: '社', reading: 'しゃ' }
      ]
    },
    {
      kana: 'くわしい',
      kanji: '詳しい',
      romaji: 'kuwashii',
      meaning: { en: 'detailed, well-informed', vi: 'cụ thể, chi tiết' },
      ruby: [{ base: '詳', reading: 'くわ' }]
    },
    {
      kana: 'スキーじょう',
      kanji: 'スキー場',
      romaji: 'sukī-jō',
      meaning: { en: 'ski resort', vi: 'khu trượt tuyết' },
      ruby: [{ base: '場', reading: 'じょう' }]
    },
    {
      kana: 'まじわります',
      kanji: '交わります',
      romaji: 'majiwarimasu',
      meaning: { en: 'to associate with, to mingle with', vi: 'chơi với, quen với' },
      ruby: [{ base: '交', reading: 'まじ' }]
    },
    {
      kana: 'ことわざ',
      kanji: '諺',
      romaji: 'kotowaza',
      meaning: { en: 'proverb', vi: 'tục ngữ, thành ngữ' },
      ruby: [{ base: '諺', reading: 'ことわ' }]
    },
    {
      kana: 'かんけい',
      kanji: '関係',
      romaji: 'kankei',
      meaning: { en: 'relation, relationship', vi: 'quan hệ' },
      ruby: [
        { base: '関', reading: 'かん' },
        { base: '係', reading: 'けい' }
      ]
    },
    {
      kana: 'なかよくします',
      kanji: '仲よくします',
      romaji: 'nakayoku shimasu',
      meaning: { en: 'to get along (well)', vi: 'chơi thân với, hòa thuận' },
      ruby: [{ base: '仲', reading: 'なか' }]
    },
    {
      kana: 'ひつよう',
      kanji: '必要',
      romaji: 'hitsuyō',
      meaning: { en: 'necessary (na-adj)', vi: 'cần thiết (tính từ な)' },
      ruby: [
        { base: '必', reading: 'ひつ' },
        { base: '要', reading: 'よう' }
      ]
    }
  ],
  phrases: [
    {
      kana: 'いい ところ、知っていますか。',
      kanji: 'いい 所、知っていますか。',
      romaji: 'Ii tokoro, shitte imasu ka.',
      meaning: { en: 'Do you know a good place?', vi: 'Anh/chị biết chỗ nào hay không?' },
      ruby: [
        { base: '所', reading: 'ところ' },
        { base: '知', reading: 'し' }
      ]
    },
    {
      kana: 'それなら、草津か 志賀高原が いいですよ。',
      kanji: 'それなら、草津か 志賀高原が いいですよ。',
      romaji: 'Sorenara, Kusatsu ka Shiga-Kōgen ga ii desu yo.',
      meaning: {
        en: 'In that case, Kusatsu or Shiga-Kogen would be good.',
        vi: 'Nếu thế thì Kusatsu hoặc Shiga-Kogen hay đấy.'
      },
      ruby: [
        { base: '草', reading: 'くさ' },
        { base: '津', reading: 'つ' },
        { base: '志', reading: 'し' },
        { base: '賀', reading: 'が' },
        { base: '高', reading: 'こう' },
        { base: '原', reading: 'げん' }
      ]
    },
    {
      kana: 'これで おわりましょう。',
      romaji: 'Kore de owarimashō.',
      meaning: { en: 'Let us stop here.', vi: 'Chúng ta dừng ở đây nhé.' }
    }
  ],
  conversation: [
    {
      id: 'conv-lesson35-ski',
      title: { en: 'Planning a ski trip', vi: 'Lên kế hoạch đi trượt tuyết' },
      speakers: [
        { id: 'thawaphon', name: 'タワポン' },
        { id: 'suzuki', name: '鈴木' }
      ],
      lines: [
        {
          speakerId: 'thawaphon',
          jp: '鈴木さん、冬休みに スキーに 行きたいんですが、いい 所、知っていますか。',
          romaji: 'Suzuki-san, fuyuyasumi ni sukī ni ikitai n desu ga, ii tokoro, shitte imasu ka.',
          meaning: {
            en: 'Mr. Suzuki, I want to go skiing during winter break. Do you know a good place?',
            vi: 'Anh Suzuki, tôi muốn đi trượt tuyết trong kỳ nghỉ đông. Anh biết chỗ nào hay không?'
          },
          ruby: [
            { base: '鈴', reading: 'すず' },
            { base: '木', reading: 'き' },
            { base: '冬', reading: 'ふゆ' },
            { base: '休', reading: 'やす' },
            { base: '行', reading: 'い' },
            { base: '所', reading: 'じょ' },
            { base: '知', reading: 'ち' }
          ]
        },
        {
          speakerId: 'suzuki',
          jp: '何日くらい 行く つもりですか。',
          romaji: 'Nan-nichi kurai iku tsumori desu ka.',
          meaning: { en: 'About how many days do you plan to go?', vi: 'Anh định đi mấy ngày?' },
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '日', reading: 'にっ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'thawaphon',
          jp: '3日くらい です。',
          romaji: 'Mikka kurai desu.',
          meaning: { en: 'About three days.', vi: 'Khoảng 3 ngày.' },
          ruby: [{ base: '日', reading: 'にっ' }]
        },
        {
          speakerId: 'suzuki',
          jp: 'それなら、草津か 志賀高原が いいですよ。温泉も ありますし。',
          romaji: 'Sorenara, Kusatsu ka Shiga-Kōgen ga ii desu yo. Onsen mo arimasu shi.',
          meaning: {
            en: 'In that case, Kusatsu or Shiga-Kogen would be good. There are hot springs too.',
            vi: 'Nếu thế thì Kusatsu hoặc Shiga-Kogen hay đấy. Ở đó còn có suối nước nóng nữa.'
          },
          ruby: [
            { base: '草', reading: 'くさ' },
            { base: '津', reading: 'つ' },
            { base: '志', reading: 'し' },
            { base: '賀', reading: 'が' },
            { base: '高', reading: 'こう' },
            { base: '原', reading: 'げん' },
            { base: '温', reading: 'おん' },
            { base: '泉', reading: 'せん' }
          ]
        },
        {
          speakerId: 'thawaphon',
          jp: 'どうやって 行けば いいですか。',
          romaji: 'Dō yatte ikeba ii desu ka.',
          meaning: { en: 'How should I get there?', vi: 'Tôi phải đi như thế nào?' },
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          speakerId: 'suzuki',
          jp: 'JRの 電車で 行くか、夜行バスで 行くと 安いですよ。',
          romaji: 'JR no densha de iku ka, yakō basu de iku to yasui desu yo.',
          meaning: {
            en: 'You can go by JR train, or an overnight bus is cheaper.',
            vi: 'Anh có thể đi bằng tàu điện JR, hoặc đi bằng xe buýt đêm thì rẻ hơn.'
          },
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '行', reading: 'い' },
            { base: '夜', reading: 'や' },
            { base: '行', reading: 'こう' },
            { base: '行', reading: 'い' },
            { base: '安', reading: 'やす' }
          ]
        },
        {
          speakerId: 'thawaphon',
          jp: 'どちらが 安いですか。',
          romaji: 'Dochira ga yasui desu ka.',
          meaning: { en: 'Which is cheaper?', vi: 'Đi thế nào rẻ hơn?' },
          ruby: [{ base: '安', reading: 'やす' }]
        },
        {
          speakerId: 'suzuki',
          jp: 'さあ、旅行社に 行けば 詳しい ことが わかりますよ。',
          romaji: 'Sā, ryokōsha ni ikeba kuwashii koto ga wakarimasu yo.',
          meaning: {
            en: 'Well, if you go to a travel agency you can find out the details.',
            vi: 'Ờ, anh đến công ty du lịch thì sẽ biết cụ thể hơn đấy.'
          },
          ruby: [
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' },
            { base: '社', reading: 'しゃ' },
            { base: '行', reading: 'い' },
            { base: '詳', reading: 'くわ' }
          ]
        },
        {
          speakerId: 'thawaphon',
          jp: 'そうですか。ありがとう ございます。',
          romaji: 'Sō desu ka. Arigatō gozaimasu.',
          meaning: { en: 'I see. Thank you very much.', vi: 'Thế à. Cảm ơn anh nhiều.' }
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-たら',
      highlights: ['たら'],
      title: { en: 'Conditional たら', vi: 'Thể điều kiện たら' },
      explanation: {
        en: "V-たら marks a condition for what follows: 春が 来たら 桜が 咲きます. It can also express the speaker's judgment in a situation: 財布が ないなら、カードで 払って ください.",
        vi: 'V-たら đánh dấu điều kiện cho mệnh đề sau: 春が 来たら 桜が 咲きます. Cũng diễn tả phán đoán của người nói: 財布が ないなら、カードで 払って ください.'
      },
      explanationRuby: [
        { base: '春', reading: 'はる' },
        { base: '来', reading: 'き' },
        { base: '桜', reading: 'さく' },
        { base: '咲', reading: 'さ' },
        { base: '財', reading: 'さい' },
        { base: '布', reading: 'ふ' },
        { base: '払', reading: 'はら' }
      ],
      examples: [
        {
          jp: '天気が いい 日に 行ったら、向こうに 島が 見えます。',
          romaji: 'Tenki ga ii hi ni ittara, mukō ni shima ga miemasu.',
          meaning: {
            en: 'If you go on a clear day, you can see islands over there.',
            vi: 'Nếu đi ngày đẹp trời thì nhìn thấy đảo ở phía kia.'
          },
          ruby: [
            { base: '天', reading: 'てん' },
            { base: '気', reading: 'き' },
            { base: '日', reading: 'ひ' },
            { base: '行', reading: 'い' },
            { base: '向', reading: 'む' },
            { base: '島', reading: 'しま' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          jp: 'ボタンを クリックしたら、ドアが 開きます。',
          romaji: 'Botan o kurikku shitara, doa ga akimasu.',
          meaning: {
            en: 'If you click the button, the door opens.',
            vi: 'Nếu bấm nút thì cửa sẽ mở.'
          },
          ruby: [{ base: '開', reading: 'あ' }]
        },
        {
          jp: '北海道へ 行くなら、6月が いいですよ。',
          romaji: 'Hokkaidō e iku nara, roku-gatsu ga ii desu yo.',
          meaning: {
            en: 'If you go to Hokkaido, June is good.',
            vi: 'Nếu đi du lịch Hokkaido thì tháng 6 hay.'
          },
          ruby: [
            { base: '北', reading: 'ほっ' },
            { base: '海', reading: 'かい' },
            { base: '道', reading: 'どう' },
            { base: '行', reading: 'い' },
            { base: '月', reading: 'がつ' }
          ]
        }
      ],
      answers: {
        explanation: {
          en: 'When the condition clause and main clause have different subjects, expressions of will or command are allowed: 田中さんが 来たら、会いに 行きます.',
          vi: 'Khi chủ ngữ hai mệnh đề khác nhau, có thể dùng ý chí hoặc mệnh lệnh: 田中さんが 来たら、会いに 行きます.'
        },
        explanationRuby: [
          { base: '田', reading: 'た' },
          { base: '中', reading: 'なか' },
          { base: '来', reading: 'らい' },
          { base: '会', reading: 'あ' },
          { base: '行', reading: 'い' },
          { base: '田', reading: 'た' },
          { base: '中', reading: 'なか' },
          { base: '来', reading: 'らい' },
          { base: '会', reading: 'あ' },
          { base: '行', reading: 'い' }
        ],
        examples: [
          {
            jp: 'レポートは 明日までに 出さなければ なりませんか。',
            romaji: 'Repōto wa ashita made ni dasanakereba narimasen ka.',
            meaning: {
              en: 'Do I have to submit the report by tomorrow?',
              vi: 'Tôi phải nộp bài báo cáo trước ngày mai à?'
            },
            ruby: [
              { base: '明', reading: 'あ' },
              { base: '日', reading: 'にっ' },
              { base: '出', reading: 'だ' }
            ]
          },
          {
            jp: '……無理なら、来週の 金曜日までに 出してください。',
            romaji: '……Muri nara, raishū no kinyōbi made ni dashite kudasai.',
            meaning: {
              en: '...If you cannot, please submit it by next Friday.',
              vi: '...Nếu không thể thì anh/chị nộp trước thứ Sáu tuần sau.'
            },
            ruby: [
              { base: '無', reading: 'む' },
              { base: '理', reading: 'り' },
              { base: '来', reading: 'らい' },
              { base: '週', reading: 'しゅう' },
              { base: '金', reading: 'きん' },
              { base: '曜', reading: 'よう' },
              { base: '日', reading: 'にっ' },
              { base: '出', reading: 'だ' }
            ]
          }
        ]
      }
    },
    {
      pattern: '疑問詞 + V-たら いいですか',
      patternRuby: [{ base: '疑', reading: 'ぎ' }],
      highlights: ['たら', 'いい', 'です', 'か'],
      title: {
        en: 'How should I...? (question word + たら)',
        vi: 'Phải làm thế nào? (từ nghi vấn + たら)'
      },
      explanation: {
        en: 'Ask how to do something: 本を 借りたいんですが、どうすれば いいですか. Same pattern as ～たら いいですか from Lesson 26, but with a question word.',
        vi: 'Hỏi cách làm việc gì: 本を 借りたいんですが、どうすれば いいですか. Cùng mẫu với ～たら いいですか bài 26, nhưng có từ nghi vấn.'
      },
      explanationRuby: [
        { base: '本', reading: 'ほん' },
        { base: '借', reading: 'か' },
        { base: '本', reading: 'ほん' },
        { base: '借', reading: 'か' }
      ],
      examples: [
        {
          jp: '温泉に 行きたいんですが、どこへ 行ったら いいですか。',
          romaji: 'Onsen ni ikitai n desu ga, doko e ittara ii desu ka.',
          meaning: {
            en: 'I want to go to a hot spring. Where should I go?',
            vi: 'Tôi muốn đi tắm suối nước nóng. Nên đi đâu?'
          },
          ruby: [
            { base: '温', reading: 'おん' },
            { base: '泉', reading: 'せん' },
            { base: '行', reading: 'い' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '……温泉なら、白馬が いいですよ。',
          romaji: '……Onsen nara, Hakuba ga ii desu yo.',
          meaning: {
            en: '...For hot springs, Hakuba is good.',
            vi: '...Nếu là suối nước nóng thì Hakuba được đấy.'
          },
          ruby: [
            { base: '温', reading: 'おん' },
            { base: '泉', reading: 'せん' },
            { base: '白', reading: 'はく' },
            { base: '馬', reading: 'ば' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 は N2 です',
      highlights: ['は'],
      title: { en: 'Topic with は (N は N)', vi: 'Chủ đề với は (N は N)' },
      explanation: {
        en: 'N1 は N2 gives information about a topic already raised: ビールは ドイツの 歴史が 長いです. Compare 温泉は 白馬が いいですよ (about hot springs, Hakuba is good).',
        vi: 'N1 は N2 cung cấp thông tin về chủ đề đã được nêu: ビールは ドイツの 歴史が 長いです. So sánh 温泉は 白馬が いいですよ (về suối nước nóng thì Hakuba hay).'
      },
      explanationRuby: [
        { base: '歴', reading: 'れき' },
        { base: '史', reading: 'し' },
        { base: '長', reading: 'なが' },
        { base: '温', reading: 'おん' },
        { base: '泉', reading: 'せん' },
        { base: '白', reading: 'はく' },
        { base: '馬', reading: 'ば' }
      ],
      examples: [
        {
          jp: '2、3日 旅行に 行きたいんですが、いい 所、知っていませんか。',
          romaji: 'Ni, san-nichi ryokō ni ikitai n desu ga, ii tokoro, shitte imasen ka.',
          meaning: {
            en: 'I want to travel for two or three days. Do you know a good place?',
            vi: 'Tôi muốn đi du lịch hai, ba ngày. Anh/chị biết chỗ nào hay không?'
          },
          ruby: [
            { base: '日', reading: 'にっ' },
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'い' },
            { base: '行', reading: 'い' },
            { base: '所', reading: 'じょ' },
            { base: '知', reading: 'ち' }
          ]
        },
        {
          jp: '……2、3日なら、箱根か 日光が いいと 思います。',
          romaji: '……Ni, san-nichi nara, Hakone ka Nikkō ga ii to omoimasu.',
          meaning: {
            en: '...For two or three days, I think Hakone or Nikko would be good.',
            vi: '...Nếu hai, ba ngày thì tôi nghĩ Hakone hoặc Nikko hay.'
          },
          ruby: [
            { base: '日', reading: 'にっ' },
            { base: '箱', reading: 'はこ' },
            { base: '根', reading: 'ね' },
            { base: '日', reading: 'にっ' },
            { base: '光', reading: 'こう' },
            { base: '思', reading: 'おも' }
          ]
        }
      ]
    },
    {
      pattern: '～ないか',
      highlights: ['ない', 'か'],
      title: { en: 'Negative question (～ないか)', vi: 'Câu hỏi phủ định (～ないか)' },
      explanation: {
        en: 'A negative question invites agreement or lets the listener say no easily: ほかに 意見が ないか. More polite than a plain yes/no question when asking for opinions.',
        vi: 'Câu hỏi phủ định mời ý kiến hoặc để đối phương từ chối dễ hơn: ほかに 意見が ないか. Lịch sự hơn câu hỏi khẳng định khi hỏi ý kiến.'
      },
      explanationRuby: [
        { base: '意', reading: 'い' },
        { base: '見', reading: 'けん' },
        { base: '意', reading: 'い' },
        { base: '見', reading: 'けん' }
      ],
      examples: [
        {
          jp: 'ほかに 意見が ないか。',
          romaji: 'Hoka ni iken ga nai ka.',
          meaning: { en: 'Does anyone else have an opinion?', vi: 'Còn ai có thêm ý kiến không?' },
          ruby: [
            { base: '意', reading: 'い' },
            { base: '見', reading: 'けん' }
          ]
        },
        {
          jp: '……ないなら、ここで やめましょう。',
          romaji: '……Nai nara, koko de yamemashō.',
          meaning: {
            en: '...If not, let us stop here.',
            vi: '...Nếu không có thì chúng ta dừng ở đây.'
          }
        }
      ],
      answers: {
        examples: [
          {
            jp: '……ありません。',
            romaji: '……Arimasen.',
            meaning: { en: '...No, there is not.', vi: '...Không. Không có gì thêm nữa.' }
          }
        ]
      }
    }
  ],
  reading: [
    {
      id: 'reading-lesson35-proverbs',
      title: { en: 'Words that travel with you', vi: 'Những câu đi cùng cuộc sống' },
      lines: [
        {
          jp: '日本には ことわざが たくさん あります。',
          romaji: 'Nihon ni wa kotowaza ga takusan arimasu.',
          meaning: { en: 'Japan has many proverbs.', vi: 'Ở Nhật có rất nhiều tục ngữ.' },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' }
          ]
        },
        {
          jp: '「住めば 都」は、どこに 住んでも 慣れれば その 所が 一番 よく なる、という 意味です。',
          romaji:
            '「Sumeba miyako」 wa, doko ni sunde mo narereba sono tokoro ga ichiban yoku naru, to iu imi desu.',
          meaning: {
            en: '"If you live somewhere, it becomes your capital" means that wherever you live, once you get used to it, that place becomes the best.',
            vi: '"Ở đâu lâu cũng thành kinh đô" nghĩa là bất cứ đâu, cứ sống lâu và quen thì nơi đó trở thành nơi tốt nhất.'
          },
          ruby: [
            { base: '住', reading: 'す' },
            { base: '都', reading: 'みやこ' },
            { base: '住', reading: 'す' },
            { base: '慣', reading: 'な' },
            { base: '所', reading: 'じょ' },
            { base: '一', reading: 'いち' },
            { base: '番', reading: 'ばん' },
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' }
          ]
        },
        {
          jp: '近所の 人と 仲よく すると、生活が 楽に なります。',
          romaji: 'Kinjo no hito to nakayoku suru to, seikatsu ga raku ni narimasu.',
          meaning: {
            en: 'If you get along with neighbors, daily life becomes easier.',
            vi: 'Chơi thân với hàng xóm thì cuộc sống dễ chịu hơn.'
          },
          ruby: [
            { base: '近', reading: 'きん' },
            { base: '所', reading: 'じょ' },
            { base: '人', reading: 'にん' },
            { base: '仲', reading: 'なか' },
            { base: '生', reading: 'せい' },
            { base: '活', reading: 'かつ' },
            { base: '楽', reading: 'らく' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What does the proverb in the passage mean?',
            vi: 'Tục ngữ trong bài nghĩa là gì?'
          },
          choices: [
            {
              id: 'a',
              label: {
                en: 'Once you get used to a place, it feels like the best',
                vi: 'Quen nơi nào thì nơi đó trở nên tốt nhất'
              }
            },
            {
              id: 'b',
              label: {
                en: 'You should always move to a new city',
                vi: 'Nên luôn chuyển thành phố mới'
              }
            },
            {
              id: 'c',
              label: { en: 'Capital cities are always better', vi: 'Thủ đô luôn tốt hơn' }
            },
            {
              id: 'd',
              label: { en: 'Neighbors are not important', vi: 'Hàng xóm không quan trọng' }
            }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'According to the passage, what helps daily life?',
            vi: 'Theo bài, điều gì giúp cuộc sống dễ hơn?'
          },
          choices: [
            {
              id: 'a',
              label: { en: 'Getting along with neighbors', vi: 'Chơi thân với hàng xóm' }
            },
            { id: 'b', label: { en: 'Buying new equipment', vi: 'Mua thiết bị mới' } },
            { id: 'c', label: { en: 'Clicking buttons quickly', vi: 'Bấm nút nhanh' } },
            { id: 'd', label: { en: 'Climbing mountains alone', vi: 'Leo núi một mình' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Japanese proverbs', vi: 'Tục ngữ Nhật' },
      introTerm: {
        jp: 'ことわざ',
        ruby: [{ base: '諺', reading: 'ことわ' }]
      },
      layout: 'stacked',
      rows: [
        {
          jp: '住めば 都',
          ruby: [
            { base: '住', reading: 'す' },
            { base: '都', reading: 'みやこ' }
          ],
          meaning: {
            en: 'Wherever you live long enough, it feels like the best place',
            vi: 'Bất cứ chỗ nào cũng thế, cứ sống lâu và quen thì bạn cảm thấy nơi đó là nơi tốt nhất'
          }
        },
        {
          jp: '三人 寄れば 文殊の 知恵',
          ruby: [
            { base: '三', reading: 'さん' },
            { base: '人', reading: 'にん' },
            { base: '寄', reading: 'よ' },
            { base: '文', reading: 'もん' },
            { base: '殊', reading: 'じゅ' },
            { base: '知', reading: 'ち' },
            { base: '恵', reading: 'え' }
          ],
          meaning: {
            en: 'Three heads are better than one',
            vi: 'Tập trung trí tuệ của nhiều người bao giờ cũng tốt hơn'
          }
        },
        {
          jp: 'ちりも 積もれば 山と なる',
          ruby: [
            { base: '積', reading: 'つ' },
            { base: '山', reading: 'やま' }
          ],
          meaning: {
            en: 'Many small things add up to something big',
            vi: 'Những cái tuy nhỏ nhưng tập hợp lại thì sẽ thành cái lớn'
          }
        },
        {
          jp: '苦あれば 楽あり',
          ruby: [
            { base: '苦', reading: 'く' },
            { base: '楽', reading: 'らく' }
          ],
          meaning: {
            en: 'Life has both hard times and good times',
            vi: 'Cuộc đời có lúc này lúc khác, có lúc vui lúc buồn'
          }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Proper nouns', vi: 'Tên riêng' },
      includeInQuiz: false,
      items: [
        {
          kana: 'はこね',
          kanji: '箱根',
          romaji: 'Hakone',
          meaning: {
            en: 'Hakone (Kanagawa resort area)',
            vi: 'Hakone (khu nghỉ dưỡng, tỉnh Kanagawa)'
          },
          ruby: [
            { base: '箱', reading: 'はこ' },
            { base: '根', reading: 'ね' }
          ]
        },
        {
          kana: 'にっこう',
          kanji: '日光',
          romaji: 'Nikkō',
          meaning: {
            en: 'Nikkō (Tochigi sightseeing area)',
            vi: 'Nikkō (địa điểm tham quan, tỉnh Tochigi)'
          },
          ruby: [
            { base: '日', reading: 'にっ' },
            { base: '光', reading: 'こう' }
          ]
        },
        {
          kana: 'くさつ',
          kanji: '草津',
          romaji: 'Kusatsu',
          meaning: {
            en: 'Kusatsu (Gunma hot-spring resort)',
            vi: 'Kusatsu (khu nghỉ dưỡng, tỉnh Gunma)'
          },
          ruby: [
            { base: '草', reading: 'くさ' },
            { base: '津', reading: 'つ' }
          ]
        },
        {
          kana: 'しがこうげん',
          kanji: '志賀高原',
          romaji: 'Shiga-Kōgen',
          meaning: {
            en: 'Shiga-Kogen (Nagano highland ski area)',
            vi: 'Shiga-Kogen (cao nguyên trong công viên quốc gia, tỉnh Nagano)'
          },
          ruby: [
            { base: '志', reading: 'し' },
            { base: '賀', reading: 'が' },
            { base: '高', reading: 'こう' },
            { base: '原', reading: 'げん' }
          ]
        }
      ]
    }
  ]
};
