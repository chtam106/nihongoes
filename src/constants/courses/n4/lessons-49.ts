import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 49 (sonkeigo: passive honorific, おV-になる, special verbs, お/ご). */
export const n4Lesson49: Lesson = {
  id: 'lesson-49',
  number: 49,
  title: {
    en: 'Respectful language',
    vi: 'Kính ngữ tôn trọng'
  },
  focus: {
    en: 'Honor actions of others with passive-form sonkeigo, おV-ます-stem になる, special honorific verbs, and お/ご 〜 ください plus お/ご prefixes.',
    vi: 'Tôn trọng hành động của người khác bằng thể bị động kính ngữ, おV-ます-stem になる, động từ kính ngữ đặc biệt, và お/ご 〜 ください cùng tiền tố お/ご.'
  },
  vocab: [
    {
      kana: 'りようします',
      kanji: '利用します',
      romaji: 'riyō shimasu',
      meaning: { en: 'to use, to utilize', vi: 'sử dụng' },
      ruby: [{ base: '利', reading: 'り' }]
    },
    {
      kana: 'つとめます',
      kanji: '勤めます',
      romaji: 'tsutomemasu',
      meaning: { en: 'to work [at a company]', vi: 'làm việc [ở công ty]' },
      ruby: [{ base: '勤', reading: 'つと' }]
    },
    {
      kana: 'かけます',
      kanji: '掛けます',
      romaji: 'kakemasu',
      meaning: { en: 'to sit [on a chair]', vi: 'ngồi xuống [ghế]' },
      ruby: [{ base: '掛', reading: 'か' }]
    },
    {
      kana: 'すごします',
      kanji: '過ごします',
      romaji: 'sugoshimasu',
      meaning: { en: 'to spend (time)', vi: 'trải qua, sống qua' },
      ruby: [{ base: '過', reading: 'す' }]
    },
    {
      kana: 'いらっしゃいます',
      romaji: 'irasshaimasu',
      meaning: {
        en: 'to be, to go, to come (honorific of います/いきます/きます)',
        vi: 'ở, đi, đến (kính ngữ của います, いきます, きます)'
      }
    },
    {
      kana: 'めしあがります',
      kanji: '召し上がります',
      romaji: 'meshiagarimasu',
      meaning: {
        en: 'to eat, to drink (honorific of たべます/のみます)',
        vi: 'ăn, uống (kính ngữ của たべます, のみます)'
      },
      ruby: [
        { base: '召', reading: 'め' },
        { base: '上', reading: 'あ' }
      ]
    },
    {
      kana: 'おっしゃいます',
      romaji: 'osshaimasu',
      meaning: {
        en: 'to say, to be called ~ (honorific of いいます)',
        vi: 'nói, tên là ~ (kính ngữ của いいます)'
      }
    },
    {
      kana: 'なさいます',
      romaji: 'nasaimasu',
      meaning: { en: 'to do (honorific of します)', vi: 'làm (kính ngữ của します)' }
    },
    {
      kana: 'ごらんになります',
      kanji: 'ご覧になります',
      romaji: 'goran ni narimasu',
      meaning: { en: 'to see, to look (honorific of みます)', vi: 'xem (kính ngữ của みます)' },
      ruby: [{ base: '覧', reading: 'らん' }]
    },
    {
      kana: 'ごぞんじです',
      kanji: 'ご存じです',
      romaji: 'go-zonji desu',
      meaning: {
        en: 'to know (honorific of しっています)',
        vi: 'biết (kính ngữ của しっています)'
      },
      ruby: [{ base: '存', reading: 'ぞん' }]
    },
    {
      kana: 'あいさつ',
      romaji: 'aisatsu',
      meaning: { en: 'greeting (~ を します: to greet)', vi: 'chào hỏi, lời chào mừng' }
    },
    {
      kana: 'りょかん',
      kanji: '旅館',
      romaji: 'ryokan',
      meaning: { en: 'Japanese-style inn', vi: 'nhà khách kiểu Nhật truyền thống' },
      ruby: [{ base: '旅', reading: 'りょ' }]
    },
    {
      kana: 'バスてい',
      kanji: 'バス停',
      romaji: 'basutei',
      meaning: { en: 'bus stop', vi: 'bến xe buýt' },
      ruby: [{ base: '停', reading: 'てい' }]
    },
    {
      kana: 'おくさま',
      kanji: '奥様',
      romaji: 'okusama',
      meaning: {
        en: "someone else's wife (honorific of おくさん)",
        vi: 'vợ của người khác (kính ngữ của おくさん)'
      },
      ruby: [{ base: '奥', reading: 'おく' }]
    },
    {
      kana: '〜さま',
      kanji: '〜様',
      romaji: '~sama',
      meaning: { en: 'Mr./Ms. ~ (honorific of 〜さん)', vi: 'kính ngữ của 〜さん' },
      ruby: [{ base: '様', reading: 'さま' }]
    },
    {
      kana: 'たまに',
      romaji: 'tamani',
      meaning: { en: 'occasionally', vi: 'thi thoảng' }
    },
    {
      kana: 'どなたでも',
      romaji: 'donata demo',
      meaning: { en: 'anyone (honorific of だれでも)', vi: 'vị nào cũng (kính ngữ của だれでも)' }
    },
    {
      kana: '〜といいます',
      romaji: '~ to iimasu',
      meaning: { en: 'is called ~, is named ~', vi: 'tên là ~' }
    },
    {
      kana: 'けいれき',
      kanji: '経歴',
      romaji: 'keireki',
      meaning: { en: 'career history, background', vi: 'lí lịch' },
      ruby: [{ base: '経', reading: 'けい' }]
    },
    {
      kana: 'いがくぶ',
      kanji: '医学部',
      romaji: 'igakubu',
      meaning: { en: 'medical school, faculty of medicine', vi: 'khoa y' },
      ruby: [
        { base: '医', reading: 'い' },
        { base: '学', reading: 'がく' },
        { base: '部', reading: 'ぶ' }
      ]
    },
    {
      kana: 'めざします',
      kanji: '目指します',
      romaji: 'mezashimasu',
      meaning: { en: 'to aim for, to aspire to', vi: 'hướng đến, muốn trở thành' },
      ruby: [{ base: '目', reading: 'め' }]
    },
    {
      kana: 'すすみます',
      kanji: '進みます',
      romaji: 'susumimasu',
      meaning: { en: 'to advance, to proceed [to the next grade]', vi: 'học lên, tiến lên' },
      ruby: [{ base: '進', reading: 'すす' }]
    },
    {
      kana: 'iPS さいぼう',
      kanji: 'iPS 細胞',
      romaji: 'iPS saibō',
      meaning: { en: 'iPS cell', vi: 'tế bào iPS' },
      ruby: [{ base: '細', reading: 'さい' }]
    },
    {
      kana: 'かいはつします',
      kanji: '開発します',
      romaji: 'kaihatsu shimasu',
      meaning: { en: 'to develop', vi: 'phát triển' },
      ruby: [{ base: '開', reading: 'かい' }]
    },
    {
      kana: 'マウス',
      romaji: 'mausu',
      meaning: { en: 'mouse (animal)', vi: 'chuột' }
    },
    {
      kana: 'ヒト',
      romaji: 'hito',
      meaning: { en: 'human (scientific term)', vi: 'người' }
    },
    {
      kana: 'じゅしょうします',
      kanji: '受賞します',
      romaji: 'jushō shimasu',
      meaning: { en: 'to receive a prize or award', vi: 'nhận giải thưởng' },
      ruby: [{ base: '受', reading: 'じゅ' }]
    },
    {
      kana: 'こうえんかい',
      kanji: '講演会',
      romaji: 'kōenkai',
      meaning: { en: 'lecture, public talk', vi: 'buổi nói chuyện' },
      ruby: [
        { base: '講', reading: 'こう' },
        { base: '演', reading: 'えん' },
        { base: '会', reading: 'かい' }
      ]
    }
  ],
  phrases: [
    {
      kana: 'いちねん いっくみ',
      kanji: '一年一組',
      romaji: 'Ichi-nen ik-kumi',
      meaning: { en: 'Class 1, Year 1', vi: 'tổ 1 năm thứ 1' },
      ruby: [
        { base: '一', reading: 'いち' },
        { base: '年', reading: 'ねん' },
        { base: '一', reading: 'いっ' },
        { base: '組', reading: 'く' }
      ]
    },
    {
      kana: 'ねつを だします',
      kanji: '熱を 出します',
      romaji: 'Netsu o dashimasu',
      meaning: { en: 'to have a fever', vi: 'bị sốt' },
      ruby: [
        { base: '熱', reading: 'ねつ' },
        { base: '出', reading: 'だ' }
      ]
    },
    {
      kana: 'よろしく おつたえ ください。',
      kanji: 'よろしく お伝え ください。',
      romaji: 'Yoroshiku otsutae kudasai.',
      meaning: { en: 'Please give my regards.', vi: 'Cho tôi gửi lời hỏi thăm.' },
      ruby: [{ base: '伝', reading: 'つた' }]
    },
    {
      kana: 'しつれい いたします。',
      kanji: '失礼 いたします。',
      romaji: 'Shitsurei itashimasu.',
      meaning: {
        en: 'Excuse me for ending the call. (humble of 失礼します)',
        vi: 'Xin phép thầy tôi cúp máy ạ.'
      },
      ruby: [{ base: '失', reading: 'しつ' }]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson49-school-call',
      title: { en: 'Calling about Hans', vi: 'Gọi trường về Hans' },
      speakers: [
        { id: 'teacher', name: '先生' },
        { id: 'klara', name: 'クララ' }
      ],
      lines: [
        {
          speakerId: 'teacher',
          jp: 'はい、ひまわり 小学校 です。',
          romaji: 'Hai, Himawari shōgakkō desu.',
          meaning: {
            en: 'Hello, Himawari Elementary School.',
            vi: 'Vâng, trường Tiểu học Himawari nghe đây ạ.'
          },
          ruby: [
            { base: '小', reading: 'しょう' },
            { base: '学', reading: 'がく' },
            { base: '校', reading: 'こう' }
          ]
        },
        {
          speakerId: 'klara',
          jp: 'もしもし。5年 2組の ハンス・シュミットの 母です。伊藤 先生 いらっしゃいますか。',
          romaji:
            'Moshimoshi. Go-nen ni-kumi no Hansu Shumitto no haha desu. Itō-sensei irasshaimasu ka.',
          meaning: {
            en: 'Hello. I am the mother of Hans Schmidt in Class 2, Year 5. Is Ms. Ito there?',
            vi: 'Xin chào. Tôi là mẹ của Hans Schmidt ở tổ 2 năm thứ 5, xin hỏi cô Ito có ở đó không ạ?'
          },
          ruby: [
            { base: '年', reading: 'ねん' },
            { base: '組', reading: 'く' },
            { base: '母', reading: 'はは' },
            { base: '伊', reading: 'い' },
            { base: '藤', reading: 'とう' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          speakerId: 'teacher',
          jp: 'まだ 来て いらっしゃいません....',
          romaji: 'Mada kite irasshaimasen....',
          meaning: { en: 'She has not arrived yet...', vi: 'Cô ấy chưa đến ạ...' },
          ruby: [{ base: '来', reading: 'き' }]
        },
        {
          speakerId: 'klara',
          jp: 'それでは 伊藤 先生に お伝え いただけませんか。',
          romaji: 'Sore de wa Itō-sensei ni otsutae itadakemasen ka.',
          meaning: {
            en: 'Then could you please pass a message to Ms. Ito?',
            vi: 'Thế thì nhờ thầy nhắn lại với cô Ito có được không ạ?'
          },
          ruby: [
            { base: '伊', reading: 'い' },
            { base: '藤', reading: 'とう' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '伝', reading: 'つた' }
          ]
        },
        {
          speakerId: 'teacher',
          jp: 'はい。どう なさいましたか。',
          romaji: 'Hai. Dō nasaimashita ka.',
          meaning: { en: 'Yes. What happened?', vi: 'Vâng. Có gì thế ạ?' }
        },
        {
          speakerId: 'klara',
          jp: 'ゆうべ ハンスが 熱を 出しまして、けさも まだ 下がりません。',
          romaji: 'Yūbe Hansu ga netsu o dashimashite, kesa mo mada sagarimasen.',
          meaning: {
            en: 'Hans had a fever last night, and it still has not gone down this morning.',
            vi: 'Tối qua Hans bị sốt, đến sáng nay nhiệt độ vẫn chưa hạ.'
          },
          ruby: [
            { base: '熱', reading: 'ねつ' },
            { base: '出', reading: 'だ' },
            { base: '下', reading: 'さ' }
          ]
        },
        {
          speakerId: 'teacher',
          jp: 'それは 大変 ですね。',
          romaji: 'Sore wa taihen desu ne.',
          meaning: { en: 'That is tough.', vi: 'Thế thì gay nhỉ.' },
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '変', reading: 'へん' }
          ]
        },
        {
          speakerId: 'klara',
          jp: 'きょうは 学校を 休ませますので、よろしく お伝え ください。',
          romaji: 'Kyō wa gakkō o yasumasemasu node, yoroshiku otsutae kudasai.',
          meaning: {
            en: 'I am keeping him home today, so please give my regards to the teacher.',
            vi: 'Vì thế hôm nay tôi cho cháu nghỉ ở nhà, nhờ thầy nhắn lại với cô Ito giúp.'
          },
          ruby: [
            { base: '学', reading: 'がく' },
            { base: '校', reading: 'こう' },
            { base: '休', reading: 'やす' },
            { base: '伝', reading: 'つた' }
          ]
        },
        {
          speakerId: 'teacher',
          jp: 'わかりました。お大事に。',
          romaji: 'Wakarimashita. Odaiji ni.',
          meaning: {
            en: 'Understood. Take care.',
            vi: 'Vâng, được rồi ạ. Mong cháu mau khỏe bệnh.'
          },
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '事', reading: 'じ' }
          ]
        },
        {
          speakerId: 'klara',
          jp: 'ありがとう ございます。失礼 いたします。',
          romaji: 'Arigatō gozaimasu. Shitsurei itashimasu.',
          meaning: { en: 'Thank you. Goodbye.', vi: 'Cám ơn thầy. Chào thầy.' },
          ruby: [
            { base: '失', reading: 'しつ' },
            { base: '礼', reading: 'れい' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-られます (sonkeigo)',
      highlights: ['られ'],
      title: { en: 'Passive as honorific (sonkeigo)', vi: 'Thể bị động làm kính ngữ' },
      explanation: {
        en: 'The passive form can honor the person who performs the action: 中村さんは 7時に 来られます, お酒を やめられたんですか. It conjugates like a Group II verb. This lesson covers sonkeigo; Lesson 50 covers kenjougo.',
        vi: 'Thể bị động có thể kính ngữ hóa người thực hiện hành động: 中村さんは 7時に 来られます, お酒を やめられたんですか. Chia như động từ nhóm II. Bài này học 尊敬語; bài 50 học 謙譲語.'
      },
      explanationRuby: [
        { base: '中', reading: 'なか' },
        { base: '村', reading: 'むら' },
        { base: '時', reading: 'じ' },
        { base: '来', reading: 'き' },
        { base: '酒', reading: 'さけ' },
        { base: '尊', reading: 'そん' },
        { base: '敬', reading: 'けい' },
        { base: '語', reading: 'ご' },
        { base: '謙', reading: 'けん' },
        { base: '譲', reading: 'じょう' },
        { base: '語', reading: 'ご' }
      ],
      examples: [
        {
          jp: '中村さんは 7時に 来られます。',
          romaji: 'Nakamura-san wa shichi-ji ni koraremasu.',
          meaning: { en: 'Mr. Nakamura will come at seven.', vi: 'Anh Nakamura sẽ đến lúc 7 giờ.' },
          ruby: [
            { base: '中', reading: 'なか' },
            { base: '村', reading: 'むら' },
            { base: '時', reading: 'じ' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: '部長の 奥様も ごいっしょに ゴルフに 行かれます。',
          romaji: 'Buchō no okusama mo go-issho ni gorufu ni ikaremasu.',
          meaning: {
            en: 'The department manager and his wife are also going golfing.',
            vi: 'Vợ trưởng phòng cũng đi chơi gôn cùng.'
          },
          ruby: [
            { base: '部', reading: 'ぶ' },
            { base: '長', reading: 'ちょう' },
            { base: '奥', reading: 'おく' },
            { base: '様', reading: 'さま' },
            { base: '行', reading: 'ぎょう' }
          ]
        }
      ]
    },
    {
      pattern: 'お V-ます-stem になります',
      highlights: ['お', 'に', 'なり'],
      title: { en: 'おV-ます-stem になります', vi: 'お V-ます-stem になります' },
      explanation: {
        en: 'お + verb masu-stem + になります is a highly respectful form. Do not use it with one-syllable stems (みます, ねます), Group III verbs, or verbs that already have a special honorific form.',
        vi: 'お + thân ます + になります là cách kính ngữ cao. Không dùng với thân một âm tiết (みます, ねます), động từ nhóm III, hoặc động từ đã có dạng kính ngữ riêng.'
      },
      explanationRuby: [],
      examples: [
        {
          jp: '社長は もう お帰りに なりました。',
          romaji: 'Shachō wa mō o-kaeri ni narimashita.',
          meaning: { en: 'The president has already gone home.', vi: 'Giám đốc đã về nhà rồi.' },
          ruby: [
            { base: '社', reading: 'しゃ' },
            { base: '長', reading: 'ちょう' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          jp: 'どうぞ お入り ください。',
          romaji: 'Dōzo o-hairi kudasai.',
          meaning: { en: 'Please come in.', vi: 'Xin mời vào.' },
          ruby: [{ base: '入', reading: 'はい' }]
        }
      ]
    },
    {
      pattern: 'Special honorific verbs',
      highlights: ['いらっしゃ', '召し上が', 'おっしゃ', 'なさ', 'ご覧', 'ご存じ'],
      title: { en: 'Special honorific verbs', vi: 'Động từ kính ngữ đặc biệt' },
      explanation: {
        en: 'Some verbs have dedicated honorific forms: います/行きます/来ます→いらっしゃいます, たべます/のみます→召し上がります, いいます→おっしゃいます, します→なさいます, みます→ご覧になります, しっています→ご存じです. いらっしゃる conjugates irregularly (いらっしゃいます, not いらっしゃります).',
        vi: 'Một số động từ có dạng kính ngữ riêng: います/行きます/来ます→いらっしゃいます, たべます/のみます→召し上がります, いいます→おっしゃいます, します→なさいます, みます→ご覧になります, しっています→ご存じです. いらっしゃる chia bất quy tắc (いらっしゃいます, không いらっしゃります).'
      },
      explanationRuby: [
        { base: '行', reading: 'ぎょう' },
        { base: '来', reading: 'き' },
        { base: '召', reading: 'め' },
        { base: '上', reading: 'あ' },
        { base: '覧', reading: 'らん' },
        { base: '存', reading: 'ぞん' },
        { base: '行', reading: 'ぎょう' },
        { base: '来', reading: 'き' },
        { base: '召', reading: 'め' },
        { base: '上', reading: 'あ' },
        { base: '覧', reading: 'らん' },
        { base: '存', reading: 'ぞん' }
      ],
      examples: [
        {
          jp: 'ワット先生は 研究室に いらっしゃいます。',
          romaji: 'Watto-sensei wa kenkyūshitsu ni irasshaimasu.',
          meaning: { en: 'Mr. Watt is in the research room.', vi: 'Thầy Watt ở phòng nghiên cứu.' },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '研', reading: 'けん' },
            { base: '究', reading: 'きゅう' },
            { base: '室', reading: 'しつ' }
          ]
        },
        {
          jp: 'どうぞ 召し上がって ください。',
          romaji: 'Dōzo meshiagatte kudasai.',
          meaning: { en: 'Please help yourself.', vi: 'Xin mời anh/chị dùng.' },
          ruby: [
            { base: '召', reading: 'め' },
            { base: '上', reading: 'あ' }
          ]
        },
        {
          jp: 'お名前は 何と おっしゃいますか。',
          romaji: 'O-namae wa nan to osshaimasu ka.',
          meaning: { en: 'What is your name?', vi: 'Anh/Chị tên là gì ạ?' },
          ruby: [
            { base: '名', reading: 'めい' },
            { base: '前', reading: 'まえ' },
            { base: '何', reading: 'なん' }
          ]
        }
      ]
    },
    {
      pattern: 'お/ご 〜 ください',
      highlights: ['ください'],
      title: { en: 'Polite requests (お/ご 〜 ください)', vi: 'Nhờ lịch sự (お/ご 〜 ください)' },
      explanation: {
        en: 'More polite than 〜てください: Group I/II verbs use お + masu-stem + ください; Group III noun+します uses ご + noun + ください. Verbs with special honorific forms use those instead: また いらっしゃって ください.',
        vi: 'Lịch sự hơn 〜てください: nhóm I/II dùng お + thân ます + ください; nhóm III (N+します) dùng ご + N + ください. Động từ kính ngữ đặc biệt dùng dạng riêng: また いらっしゃって ください.'
      },
      explanationRuby: [],
      examples: [
        {
          jp: 'どうぞ お入り ください。',
          romaji: 'Dōzo o-hairi kudasai.',
          meaning: { en: 'Please come in.', vi: 'Xin mời vào.' },
          ruby: [{ base: '入', reading: 'はい' }]
        },
        {
          jp: '忘れ物に ご注意 ください。',
          romaji: 'Wasuremono ni go-chūi kudasai.',
          meaning: { en: 'Please watch your belongings.', vi: 'Xin chú ý không để quên đồ.' },
          ruby: [
            { base: '忘', reading: 'わす' },
            { base: '物', reading: 'もの' },
            { base: '注', reading: 'ちゅう' },
            { base: '意', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'お/ご prefixes',
      highlights: ['お', 'ご'],
      title: { en: 'Honorific お/ご prefixes', vi: 'Tiền tố kính ngữ お/ご' },
      explanation: {
        en: 'Attach お (native words) or ご (Sino-Japanese) to nouns, na-adjectives, and some i-adjectives to show respect: お国, お名前, お元気, お忙しい; ご家族, ご意見, ご自由に.',
        vi: 'Gắn お (từ thuần Nhật) hoặc ご (Hán-Nhật) vào danh từ, tính từ な, một số tính từ い để thể hiện kính trọng: お国, お名前, お元気, お忙しい; ご家族, ご意見, ご自由に.'
      },
      explanationRuby: [
        { base: '国', reading: 'くに' },
        { base: '名', reading: 'めい' },
        { base: '前', reading: 'まえ' },
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' },
        { base: '忙', reading: 'いそが' },
        { base: '家', reading: 'か' },
        { base: '族', reading: 'ぞく' },
        { base: '意', reading: 'い' },
        { base: '見', reading: 'けん' },
        { base: '自', reading: 'じ' },
        { base: '由', reading: 'ゆう' },
        { base: '国', reading: 'くに' },
        { base: '名', reading: 'めい' },
        { base: '前', reading: 'まえ' },
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' },
        { base: '忙', reading: 'いそが' },
        { base: '家', reading: 'か' },
        { base: '族', reading: 'ぞく' },
        { base: '意', reading: 'い' },
        { base: '見', reading: 'けん' },
        { base: '自', reading: 'じ' },
        { base: '由', reading: 'ゆう' }
      ],
      examples: [
        {
          jp: 'お元気 ですか。',
          romaji: 'O-genki desu ka.',
          meaning: { en: 'How are you?', vi: 'Anh/Chị có khỏe không ạ?' },
          ruby: [
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          jp: 'ご家族は どちら ですか。',
          romaji: 'Go-kazoku wa dochira desu ka.',
          meaning: { en: 'Where is your family?', vi: 'Gia đình anh/chị ở đâu ạ?' },
          ruby: [
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson49-yamanaka',
      title: { en: 'A Nobel laureate', vi: 'Giải Nobel y học' },
      lines: [
        {
          jp: '山中 伸弥 さんは 医学部を 目指して 進み、iPS 細胞の 研究で 有名に なりました。',
          romaji:
            'Yamanaka Shinya-san wa igakubu o mezashite susumi, iPS saibō no kenkyū de yūmei ni narimashita.',
          meaning: {
            en: 'Shinya Yamanaka aimed for medical school, advanced in his studies, and became famous for iPS cell research.',
            vi: 'Yamanaka Shinya hướng đến khoa y, học lên, và nổi tiếng nhờ nghiên cứu tế bào iPS.'
          },
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '中', reading: 'なか' },
            { base: '伸', reading: 'しん' },
            { base: '弥', reading: 'や' },
            { base: '医', reading: 'い' },
            { base: '学', reading: 'がく' },
            { base: '部', reading: 'ぶ' },
            { base: '目', reading: 'め' },
            { base: '指', reading: 'め' },
            { base: '進', reading: 'すす' },
            { base: '細', reading: 'さい' },
            { base: '胞', reading: 'ぼう' },
            { base: '研', reading: 'けん' },
            { base: '究', reading: 'きゅう' },
            { base: '有', reading: 'ゆう' },
            { base: '名', reading: 'めい' }
          ]
        },
        {
          jp: '彼は マウスから ヒトの 細胞を 開発し、2012年に ノーベル賞を 受賞しました。',
          romaji:
            'Kare wa mausu kara hito no saibō o kaihatsu shi, ni-sen jūni-nen ni Nōberu-shō o jushō shimashita.',
          meaning: {
            en: 'He developed human cells from mouse cells and received the Nobel Prize in 2012.',
            vi: 'Ông phát triển tế bào người từ tế bào chuột và nhận giải Nobel năm 2012.'
          },
          ruby: [
            { base: '彼', reading: 'かれ' },
            { base: '細', reading: 'さい' },
            { base: '胞', reading: 'ぼう' },
            { base: '開', reading: 'かい' },
            { base: '発', reading: 'はつ' },
            { base: '年', reading: 'ねん' },
            { base: '賞', reading: 'しょう' },
            { base: '受', reading: 'じゅ' },
            { base: '賞', reading: 'しょう' }
          ]
        },
        {
          jp: '経歴を 読むと、たまに 講演会で 話す 機会も あります。',
          romaji: 'Keireki o yomu to, tamani kōenkai de hanasu kikai mo arimasu.',
          meaning: {
            en: 'Reading his background, you see he sometimes speaks at public lectures.',
            vi: 'Đọc lí lịch thì thấy thi thoảng ông cũng nói chuyện ở các buổi diễn thuyết.'
          },
          ruby: [
            { base: '経', reading: 'けい' },
            { base: '歴', reading: 'れき' },
            { base: '読', reading: 'よ' },
            { base: '講', reading: 'こう' },
            { base: '演', reading: 'えん' },
            { base: '会', reading: 'かい' },
            { base: '話', reading: 'はな' },
            { base: '機', reading: 'き' },
            { base: '会', reading: 'かい' }
          ]
        },
        {
          jp: 'どなたでも 利用できる 資料も 用意されています。',
          romaji: 'Donata demo riyō dekiru shiryō mo yōi sarete imasu.',
          meaning: {
            en: 'Materials anyone can use are also prepared.',
            vi: 'Tài liệu mà vị nào cũng có thể sử dụng cũng được chuẩn bị sẵn.'
          },
          ruby: [
            { base: '利', reading: 'り' },
            { base: '用', reading: 'よう' },
            { base: '資', reading: 'し' },
            { base: '料', reading: 'りょう' },
            { base: '用', reading: 'よう' },
            { base: '意', reading: 'い' }
          ]
        },
        {
          jp: '「科学は ヒトの ために ある」といいます。',
          romaji: '「Kagaku wa hito no tame ni aru」 to iimasu.',
          meaning: {
            en: 'He says that science exists for people.',
            vi: 'Ông nói rằng khoa học là vì con người.'
          },
          ruby: [
            { base: '科', reading: 'か' },
            { base: '学', reading: 'がく' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What is Yamanaka famous for?', vi: 'Yamanaka nổi tiếng vì gì?' },
          choices: [
            { id: 'a', label: { en: 'iPS cell research', vi: 'Nghiên cứu tế bào iPS' } },
            { id: 'b', label: { en: 'Running a ryokan', vi: 'Điều hành ryokan' } },
            { id: 'c', label: { en: 'Teaching calligraphy', vi: 'Dạy viết chữ' } },
            { id: 'd', label: { en: 'Bus stop design', vi: 'Thiết kế bến xe buýt' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'When did he receive the Nobel Prize?',
            vi: 'Ông nhận giải Nobel năm nào?'
          },
          choices: [
            { id: 'a', label: { en: '2012', vi: '2012' } },
            { id: 'b', label: { en: '2002', vi: '2002' } },
            { id: 'c', label: { en: '1992', vi: '1992' } },
            { id: 'd', label: { en: '2022', vi: '2022' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Seasonal events in Japan', vi: 'Sự kiện theo mùa ở Nhật' },
      introTerm: {
        jp: '季節の行事',
        ruby: [
          { base: '季', reading: 'き' },
          { base: '節', reading: 'せつ' },
          { base: '行', reading: 'ぎょう' },
          { base: '事', reading: 'じ' }
        ]
      },
      layout: 'stacked',
      rows: [
        {
          number: '1月1日〜3日',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: 'お正月',
          ruby: [
            { base: '正', reading: 'しょう' },
            { base: '月', reading: 'がつ' }
          ],
          meaning: { en: 'New Year', vi: 'Tết' },
          note: {
            en: 'People visit shrines and temples; New Year cards arrive on January 1.',
            vi: 'Mọi người đi chùa hay đền thờ; bưu thiếp chúc mừng năm mới đến vào mồng 1.'
          }
        },
        {
          number: '2月3日ごろ',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: '豆まき',
          ruby: [{ base: '豆', reading: 'まめ' }],
          meaning: { en: 'Bean-throwing festival', vi: 'Tục lệ vãi đậu trừ tà' },
          note: {
            en: 'On the eve of spring, people shout "Demons out, fortune in" and throw beans.',
            vi: 'Tối trước lập xuân, vừa hô "Quỷ ra ngoài, Phúc vào trong" vừa vãi đậu.'
          }
        },
        {
          number: '3月3日',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: 'ひな祭り',
          ruby: [{ base: '祭', reading: 'まつ' }],
          meaning: { en: 'Doll Festival', vi: 'Lễ hội búp-bê' },
          note: {
            en: 'Families with daughters display hina dolls.',
            vi: 'Gia đình có con gái trang trí búp-bê hina.'
          }
        },
        {
          number: '5月5日',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: 'こどもの日',
          ruby: [{ base: '日', reading: 'にち' }],
          meaning: { en: "Children's Day", vi: 'Ngày Trẻ em' },
          note: {
            en: 'Celebrates child growth and health; carp streamers are flown.',
            vi: 'Mừng sự trưởng thành và sức khỏe của trẻ em; treo cờ cá chép.'
          }
        },
        {
          number: '7月7日',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: '七夕',
          ruby: [
            { base: '七', reading: 'しち' },
            { base: '夕', reading: 'たな' }
          ],
          meaning: { en: 'Star Festival (Tanabata)', vi: 'Tanabata' },
          note: {
            en: 'Based on the legend of two stars meeting once a year across the Milky Way.',
            vi: 'Theo truyền thuyết Ngưu Lang - Chức Nữ gặp nhau một năm một lần.'
          }
        },
        {
          number: '8月13日〜15日',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: 'お盆',
          ruby: [{ base: '盆', reading: 'ぼん' }],
          meaning: { en: 'Obon', vi: 'Lễ hội Bon (Lễ Vu lan)' },
          note: {
            en: 'Buddhist custom to welcome ancestral spirits and visit graves.',
            vi: 'Phong tục Phật giáo đón linh hồn tổ tiên và viếng mộ.'
          }
        },
        {
          number: '9月15日ごろ',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: 'お月見',
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '見', reading: 'けん' }
          ],
          meaning: { en: 'Moon viewing', vi: 'Hội ngắm trăng' },
          note: {
            en: 'People enjoy viewing the full autumn moon.',
            vi: 'Mọi người vui ngắm trăng tròn mùa thu.'
          }
        },
        {
          number: '12月31日',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: '大みそか',
          ruby: [{ base: '大', reading: 'おお' }],
          meaning: { en: "New Year's Eve", vi: 'Đêm Giao thừa' },
          note: {
            en: 'Last day of the year; temple bells ring at midnight.',
            vi: 'Ngày cuối năm; chuông chùa nổi lên đúng nửa đêm.'
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
          kana: 'ひまわり しょうがっこう',
          kanji: 'ひまわり 小学校',
          romaji: 'Himawari Shōgakkō',
          meaning: {
            en: 'Himawari Elementary (fictional school)',
            vi: 'Trường tiểu học Himawari (giả định)'
          },
          ruby: [
            { base: '小', reading: 'しょう' },
            { base: '学', reading: 'がく' },
            { base: '校', reading: 'こう' }
          ]
        },
        {
          kana: 'やまなか しんや',
          kanji: '山中 伸弥',
          romaji: 'Yamanaka Shinya',
          meaning: {
            en: 'Shinya Yamanaka (Japanese researcher, b. 1962)',
            vi: 'Yamanaka Shinya (1962 - )'
          },
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '中', reading: 'なか' },
            { base: '伸', reading: 'しん' },
            { base: '弥', reading: 'や' }
          ]
        },
        {
          kana: 'ノーベルしょう',
          kanji: 'ノーベル賞',
          romaji: 'Nōberu-shō',
          meaning: { en: 'Nobel Prize', vi: 'Giải Nobel' },
          ruby: [{ base: '賞', reading: 'しょう' }]
        }
      ]
    }
  ]
};
