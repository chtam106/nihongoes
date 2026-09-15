import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 48 (causative, を/に causee, V-させて いただけませんか). */
export const n4Lesson48: Lesson = {
  id: 'lesson-48',
  number: 48,
  title: {
    en: 'Making someone do and asking permission',
    vi: 'Sai khiến và xin phép'
  },
  focus: {
    en: 'Make or let someone act with V-させる, mark the causee with を or に, and ask permission with V-させて いただけませんか.',
    vi: 'Sai khiến hoặc cho phép với V-させる, đánh dấu đối tượng bị sai khiến bằng を hoặc に, và xin phép với V-させて いただけませんか.'
  },
  vocab: [
    {
      kana: 'おろします',
      kanji: '降ろします、下ろします',
      romaji: 'oroshimasu',
      meaning: { en: 'to take down, to unload', vi: 'hạ xuống, dỡ xuống' },
      ruby: [{ base: '降', reading: 'お' }]
    },
    {
      kana: 'とどけます',
      kanji: '届けます',
      romaji: 'todokemasu',
      meaning: { en: 'to deliver', vi: 'đưa đến, chuyển đến' },
      ruby: [{ base: '届', reading: 'とど' }]
    },
    {
      kana: 'せわを します',
      kanji: '世話を します',
      romaji: 'sewa o shimasu',
      meaning: { en: 'to take care (of someone)', vi: 'chăm sóc' },
      ruby: [{ base: '世', reading: 'せ' }]
    },
    {
      kana: 'ろくおん',
      kanji: '録音',
      romaji: 'rokuon',
      meaning: { en: 'recording', vi: 'ghi âm' },
      ruby: [{ base: '録', reading: 'ろく' }]
    },
    {
      kana: 'ろくおんします',
      kanji: '録音します',
      romaji: 'rokuon shimasu',
      meaning: { en: 'to record (audio)', vi: 'ghi âm' },
      ruby: [{ base: '録', reading: 'ろく' }]
    },
    {
      kana: 'いや',
      kanji: '嫌',
      romaji: 'iya',
      meaning: { en: 'dislike, unpleasant (na-adj)', vi: 'chán, không thích (tính từ な)' },
      ruby: [{ base: '嫌', reading: 'いや' }]
    },
    {
      kana: 'じゅく',
      kanji: '塾',
      romaji: 'juku',
      meaning: { en: 'cram school, tutoring school', vi: 'lò luyện thi, nơi học thêm' },
      ruby: [{ base: '塾', reading: 'じゅく' }]
    },
    {
      kana: 'せいと',
      kanji: '生徒',
      romaji: 'seito',
      meaning: { en: 'student (school pupil)', vi: 'học sinh' },
      ruby: [{ base: '生', reading: 'せい' }]
    },
    {
      kana: 'ファイル',
      romaji: 'fairu',
      meaning: { en: 'file (folder)', vi: 'fai tài liệu, kẹp tài liệu' }
    },
    {
      kana: 'じゆうに',
      kanji: '自由に',
      romaji: 'jiyū ni',
      meaning: { en: 'freely', vi: 'một cách tự do, thoải mái' },
      ruby: [
        { base: '自', reading: 'じ' },
        { base: '由', reading: 'ゆう' }
      ]
    },
    {
      kana: '〜かん',
      kanji: '〜間',
      romaji: '~kan',
      meaning: { en: 'during ~, for ~ (time span)', vi: 'trong khoảng ~' },
      ruby: [{ base: '間', reading: 'かん' }]
    },
    {
      kana: 'えいぎょう',
      kanji: '営業',
      romaji: 'eigyō',
      meaning: { en: 'sales, business operations', vi: 'kinh doanh' },
      ruby: [{ base: '営', reading: 'えい' }]
    },
    {
      kana: 'それまでに',
      romaji: 'sore made ni',
      meaning: { en: 'by then, before that time', vi: 'cho đến lúc đấy, trước thời điểm đó' }
    },
    {
      kana: 'たのしみます',
      kanji: '楽しみます',
      romaji: 'tanoshimasu',
      meaning: { en: 'to enjoy', vi: 'tận hưởng, vui vẻ' },
      ruby: [{ base: '楽', reading: 'たの' }]
    },
    {
      kana: 'おや',
      kanji: '親',
      romaji: 'oya',
      meaning: { en: 'parent', vi: 'bố mẹ' },
      ruby: [{ base: '親', reading: 'おや' }]
    },
    {
      kana: 'しょうがくせい',
      kanji: '小学生',
      romaji: 'shōgakusei',
      meaning: { en: 'elementary school student', vi: 'học sinh tiểu học' },
      ruby: [
        { base: '小', reading: 'しょう' },
        { base: '学', reading: 'がく' },
        { base: '生', reading: 'せい' }
      ]
    },
    {
      kana: 'パーセント',
      romaji: 'pāsento',
      meaning: { en: 'percent', vi: 'phần trăm' }
    },
    {
      kana: 'そのつぎ',
      kanji: 'その次',
      romaji: 'sono tsugi',
      meaning: { en: 'next, after that', vi: 'tiếp theo đó' },
      ruby: [{ base: '次', reading: 'つぎ' }]
    },
    {
      kana: 'しゅうじ',
      kanji: '習字',
      romaji: 'shūji',
      meaning: { en: 'calligraphy practice', vi: 'học viết chữ bằng bút lông' },
      ruby: [
        { base: '習', reading: 'しゅう' },
        { base: '字', reading: 'じ' }
      ]
    },
    {
      kana: 'ふつうの',
      kanji: '普通の',
      romaji: 'futsū no',
      meaning: { en: 'ordinary, usual', vi: 'thông thường, bình thường' },
      ruby: [
        { base: '普', reading: 'ふ' },
        { base: '通', reading: 'つう' }
      ]
    }
  ],
  phrases: [
    {
      kana: 'おいそがしい ですか。',
      kanji: 'お忙しい ですか。',
      romaji: 'O-isogashii desu ka.',
      meaning: {
        en: 'Are you busy? (polite, to a superior)',
        vi: 'Anh/Chị có bận không ạ? (hỏi người trên)'
      },
      ruby: [{ base: '忙', reading: 'いそが' }]
    },
    {
      kana: 'かまいません。',
      romaji: 'Kamaimasen.',
      meaning: { en: 'That is fine. / I do not mind.', vi: 'Không sao.' }
    },
    {
      kana: 'いい ことですね。',
      kanji: 'いい ことですね。',
      romaji: 'Ii koto desu ne.',
      meaning: { en: 'That is nice, is it not?', vi: 'Điều đó hay quá nhỉ!' }
    }
  ],
  conversation: [
    {
      id: 'conv-lesson48-vacation',
      title: { en: 'Asking for time off', vi: 'Xin phép nghỉ phép' },
      speakers: [
        { id: 'miller', name: 'ミラー' },
        { id: 'nakamura', name: '中村' }
      ],
      lines: [
        {
          speakerId: 'miller',
          jp: '部長、今 お忙しい ですか。',
          romaji: 'Buchō, ima o-isogashii desu ka.',
          meaning: {
            en: 'Manager, are you busy now?',
            vi: 'Trưởng phòng, bây giờ anh có bận không ạ?'
          },
          ruby: [
            { base: '部', reading: 'ぶ' },
            { base: '長', reading: 'ちょう' },
            { base: '今', reading: 'いま' },
            { base: '忙', reading: 'いそが' }
          ]
        },
        {
          speakerId: 'nakamura',
          jp: 'いいえ。どうぞ。',
          romaji: 'Iie. Dōzo.',
          meaning: { en: 'No. Please go ahead.', vi: 'Không. Mời cậu.' }
        },
        {
          speakerId: 'miller',
          jp: '実は お願いが あって...',
          romaji: 'Jitsu wa onegai ga atte...',
          meaning: {
            en: 'Actually, I have a favor to ask...',
            vi: 'Thực ra tôi có chuyện muốn xin phép...'
          },
          ruby: [
            { base: '実', reading: 'じつ' },
            { base: '願', reading: 'ねが' }
          ]
        },
        {
          speakerId: 'nakamura',
          jp: '何 ですか。',
          romaji: 'Nan desu ka.',
          meaning: { en: 'What is it?', vi: 'Chuyện gì thế?' },
          ruby: [{ base: '何', reading: 'なに' }]
        },
        {
          speakerId: 'miller',
          jp: '来月の 7日から 10日間 休ませて いただけませんか。',
          romaji: 'Raigetsu no nanoka kara tōkakan yasumase te itadakemasen ka.',
          meaning: {
            en: 'May I have ten days off starting on the 7th of next month?',
            vi: 'Từ ngày mồng 7 tháng sau, cho tôi xin phép nghỉ 10 ngày có được không ạ?'
          },
          ruby: [
            { base: '来', reading: 'こ' },
            { base: '月', reading: 'げつ' },
            { base: '日', reading: 'にち' },
            { base: '日', reading: 'にち' },
            { base: '間', reading: 'かん' },
            { base: '休', reading: 'やす' }
          ]
        },
        {
          speakerId: 'nakamura',
          jp: '10日間 ですか。',
          romaji: 'Tōkakan desu ka.',
          meaning: { en: 'Ten days?', vi: '10 ngày cơ à.' },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '間', reading: 'かん' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'はい。アメリカの 友達が 結婚式を しますので。',
          romaji: 'Hai. Amerika no tomodachi ga kekkonshiki o shimasu node.',
          meaning: {
            en: 'Yes. A friend in America is getting married.',
            vi: 'Vâng. Bạn tôi ở Mỹ sắp lập gia đình.'
          },
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '結', reading: 'けっ' },
            { base: '婚', reading: 'こん' },
            { base: '式', reading: 'しき' }
          ]
        },
        {
          speakerId: 'nakamura',
          jp: 'そう ですか。来月 20日に 営業の 会議が あります。それまでに 帰って 来られますか。',
          romaji:
            'Sō desu ka. Raigetsu hatsuka ni eigyō no kaigi ga arimasu. Sore made ni kaette koraremasu ka.',
          meaning: {
            en: 'I see. There is a sales meeting on the 20th next month. Can you be back by then?',
            vi: 'Thế à. Tháng sau ngày 20 có cuộc họp về kinh doanh, cậu có thể trở lại trước thời điểm đó được chứ?'
          },
          ruby: [
            { base: '来', reading: 'こ' },
            { base: '月', reading: 'げつ' },
            { base: '日', reading: 'にち' },
            { base: '営', reading: 'えい' },
            { base: '業', reading: 'ぎょう' },
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '帰', reading: 'かえ' },
            { base: '来', reading: 'こ' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'はい、大丈夫 です。',
          romaji: 'Hai, daijōbu desu.',
          meaning: { en: 'Yes, that will be fine.', vi: 'Vâng ạ.' },
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '丈', reading: 'じょう' },
            { base: '夫', reading: 'ふ' }
          ]
        },
        {
          speakerId: 'nakamura',
          jp: 'それなら かまいません。楽しい 旅行を。',
          romaji: 'Sore nara kamaimasen. Tanoshii ryokō o.',
          meaning: {
            en: 'Then there is no problem. Have a good trip.',
            vi: 'Thế thì không có vấn đề gì. Chúc cậu có một chuyến đi vui vẻ.'
          },
          ruby: [
            { base: '楽', reading: 'たの' },
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'ありがとう ございます。',
          romaji: 'Arigatō gozaimasu.',
          meaning: { en: 'Thank you very much.', vi: 'Cám ơn trưởng phòng.' }
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-させる',
      highlights: ['させ'],
      title: { en: 'Causative form (V-させる)', vi: 'Thể sai khiến (V-させる)' },
      explanation: {
        en: 'The causative means make or let someone do something. Group I: かきます→かかせます; Group II: たべます→たべさせます; 来ます→こさせます; します→させます. Causative verbs conjugate like Group II. A person of lower status does not use the causative toward a superior - use 〜て いただきます or 〜て もらいます instead.',
        vi: 'Thể sai khiến: bắt hoặc cho ai làm gì. Nhóm I: かきます→かかせます; nhóm II: たべます→たべさせます; 来ます→こさせます; します→させます. Chia như động từ nhóm II. Người cấp dưới không dùng sai khiến với cấp trên - dùng 〜て いただきます hoặc 〜て もらいます.'
      },
      explanationRuby: [
        { base: '来', reading: 'こ' },
        { base: '来', reading: 'こ' }
      ],
      examples: [
        {
          jp: '部長は ミラーさんを アメリカへ 出張させます。',
          romaji: 'Buchō wa Mirā-san o Amerika e shutchō sasemasu.',
          meaning: {
            en: 'The manager is sending Mr. Miller on a business trip to America.',
            vi: 'Trưởng phòng phân công anh Miller đi công tác ở Mỹ.'
          },
          ruby: [
            { base: '部', reading: 'ぶ' },
            { base: '長', reading: 'ちょう' },
            { base: '出', reading: 'しゅっ' },
            { base: '張', reading: 'ちょう' }
          ]
        },
        {
          jp: 'わたしは 娘を 自由に 遊ばせました。',
          romaji: 'Watashi wa musume o jiyū ni asobasemashita.',
          meaning: {
            en: 'I let my daughter play freely.',
            vi: 'Tôi đã để con gái chơi tự do.'
          },
          ruby: [
            { base: '娘', reading: 'むすめ' },
            { base: '自', reading: 'じ' },
            { base: '由', reading: 'ゆう' },
            { base: '遊', reading: 'あそ' }
          ]
        }
      ]
    },
    {
      pattern: 'N を / N に (causee)',
      highlights: ['を', 'に'],
      title: {
        en: 'Causee particles (を / に)',
        vi: 'Trợ từ đối tượng bị sai khiến (を / に)'
      },
      explanation: {
        en: 'With an intransitive base verb, mark the person with を: 子どもを 早く 起きさせます. With a transitive base verb, mark the person with に and the object with を: 娘に 朝ごはんの 準備を 手伝わせます. When movement passes through a place marked by を, the causee takes に: 子どもに 道の 右側を 歩かせます.',
        vi: 'Với động từ nội động, đối tượng bị sai khiến dùng を: 子どもを 早く 起きさせます. Với động từ ngoại động, người dùng に, tân ngữ dùng を: 娘に 朝ごはんの 準備を 手伝わせます. Khi di chuyển qua nơi chấm を, người bị sai khiến dùng に: 子どもに 道の 右側を 歩かせます.'
      },
      explanationRuby: [
        { base: '子', reading: 'こ' },
        { base: '早', reading: 'はや' },
        { base: '起', reading: 'お' },
        { base: '娘', reading: 'むすめ' },
        { base: '朝', reading: 'あさ' },
        { base: '準', reading: 'じゅん' },
        { base: '備', reading: 'び' },
        { base: '手', reading: 'て' },
        { base: '伝', reading: 'つだ' },
        { base: '子', reading: 'こ' },
        { base: '道', reading: 'みち' },
        { base: '右', reading: 'みぎ' },
        { base: '側', reading: 'がわ' },
        { base: '歩', reading: 'ある' },
        { base: '子', reading: 'こ' },
        { base: '早', reading: 'はや' },
        { base: '起', reading: 'お' },
        { base: '娘', reading: 'むすめ' },
        { base: '朝', reading: 'あさ' },
        { base: '準', reading: 'じゅん' },
        { base: '備', reading: 'び' },
        { base: '手', reading: 'て' },
        { base: '伝', reading: 'つだ' },
        { base: '子', reading: 'こ' },
        { base: '道', reading: 'みち' },
        { base: '右', reading: 'みぎ' },
        { base: '側', reading: 'がわ' },
        { base: '歩', reading: 'ある' }
      ],
      examples: [
        {
          jp: '朝は 忙しいので、娘に 朝ごはんの 準備を 手伝わせます。',
          romaji: 'Asa wa isogashii node, musume ni asagohan no junbi o tetsudawasemasu.',
          meaning: {
            en: 'Mornings are busy, so I have my daughter help prepare breakfast.',
            vi: 'Buổi sáng bận nên tôi sai con gái giúp chuẩn bị bữa sáng.'
          },
          ruby: [
            { base: '朝', reading: 'あさ' },
            { base: '忙', reading: 'いそが' },
            { base: '娘', reading: 'むすめ' },
            { base: '朝', reading: 'あさ' },
            { base: '準', reading: 'じゅん' },
            { base: '備', reading: 'び' },
            { base: '手', reading: 'て' },
            { base: '伝', reading: 'つだ' }
          ]
        },
        {
          jp: '先生は 生徒に 自由に 意見を 言わせました。',
          romaji: 'Sensei wa seito ni jiyū ni iken o iwasemashita.',
          meaning: {
            en: 'The teacher let the students speak their opinions freely.',
            vi: 'Thầy giáo cho học sinh tự do phát biểu ý kiến.'
          },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '生', reading: 'せい' },
            { base: '徒', reading: 'と' },
            { base: '自', reading: 'じ' },
            { base: '由', reading: 'ゆう' },
            { base: '意', reading: 'い' },
            { base: '見', reading: 'けん' },
            { base: '言', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'V-させて いただけませんか',
      highlights: ['させ', 'いただけ', 'ません', 'か'],
      title: {
        en: 'May I ~? (V-させて いただけませんか)',
        vi: 'Cho phép tôi ~? (V-させて いただけませんか)'
      },
      explanation: {
        en: 'V-させて いただけませんか asks a superior for permission to do something yourself. Compare Lesson 26 〜て いただけませんか (please do for me) with this pattern (please let me do).',
        vi: 'V-させて いただけませんか xin phép cấp trên cho mình được làm. So với bài 26 〜て いただけませんか (nhờ người khác làm), đây là xin phép cho bản thân được làm.'
      },
      examples: [
        {
          jp: 'すみません。ここに 車を 止めさせて いただけませんか。',
          romaji: 'Sumimasen. Koko ni kuruma o tomesasete itadakemasen ka.',
          meaning: {
            en: 'Excuse me. May I park here for a while?',
            vi: 'Xin lỗi, làm ơn cho tôi để xe ở đây một lát có được không ạ?'
          },
          ruby: [
            { base: '車', reading: 'くるま' },
            { base: '止', reading: 'と' }
          ]
        },
        {
          jp: '友達の 結婚式が あるので、早く 帰らせて いただけませんか。',
          romaji: 'Tomodachi no kekkonshiki ga aru node, hayaku kaerasete itadakemasen ka.',
          meaning: {
            en: 'A friend is getting married, so may I leave early?',
            vi: 'Tôi phải đi dự đám cưới bạn nên cho phép tôi về sớm có được không?'
          },
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '結', reading: 'けっ' },
            { base: '婚', reading: 'こん' },
            { base: '式', reading: 'しき' },
            { base: '早', reading: 'はや' },
            { base: '帰', reading: 'かえ' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson48-parents',
      title: { en: 'What parents let children do', vi: 'Cha mẹ cho con làm gì' },
      lines: [
        {
          jp: 'ある 調査では、親は 小学生に 何を させるか 答えました。',
          romaji: 'Aru chōsa de wa, oya wa shōgakusei ni nani o saseru ka kotaemashita.',
          meaning: {
            en: 'In one survey, parents answered what they let elementary school children do.',
            vi: 'Trong một khảo sát, phụ huynh trả lời họ cho học sinh tiểu học làm những gì.'
          },
          ruby: [
            { base: '調', reading: 'ちょう' },
            { base: '査', reading: 'さ' },
            { base: '親', reading: 'おや' },
            { base: '小', reading: 'しょう' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' },
            { base: '何', reading: 'なに' },
            { base: '答', reading: 'こた' }
          ]
        },
        {
          jp: '40パーセントの 家庭は 週末 習字を させています。',
          romaji: 'Yonjū pāsento no katei wa shūmatsu shūji o sasete imasu.',
          meaning: {
            en: 'Forty percent of families have their children practice calligraphy on weekends.',
            vi: '40 phần trăm gia đình cho con luyện viết chữ vào cuối tuần.'
          },
          ruby: [
            { base: '家', reading: 'か' },
            { base: '庭', reading: 'てい' },
            { base: '週', reading: 'しゅう' },
            { base: '末', reading: 'まつ' },
            { base: '習', reading: 'なら' },
            { base: '字', reading: 'じ' }
          ]
        },
        {
          jp: 'その次に 多いのは 塾です。普通の 学校の あと、ファイルを 持って 通わせる 親も います。',
          romaji:
            'Sono tsugi ni ōi no wa juku desu. Futsū no gakkō no ato, fairu o motte kayowaseru oya mo imasu.',
          meaning: {
            en: 'Next most common is cram school. Some parents have children go after regular school with folders in hand.',
            vi: 'Tiếp theo là học thêm. Có phụ huynh cho con đi lò luyện thi sau giờ học thông thường, mang theo kẹp tài liệu.'
          },
          ruby: [
            { base: '次', reading: 'つぎ' },
            { base: '多', reading: 'おお' },
            { base: '塾', reading: 'じゅく' },
            { base: '普', reading: 'ふ' },
            { base: '通', reading: 'かよ' },
            { base: '学', reading: 'がく' },
            { base: '校', reading: 'こう' },
            { base: '持', reading: 'も' },
            { base: '通', reading: 'かよ' },
            { base: '親', reading: 'おや' }
          ]
        },
        {
          jp: '反対に、自由に 遊ばせる 家庭も 30パーセント ありました。',
          romaji: 'Hantai ni, jiyū ni asobaseru katei mo sanjū pāsento arimashita.',
          meaning: {
            en: 'On the other hand, thirty percent let children play freely.',
            vi: 'Ngược lại, 30 phần trăm để con chơi tự do.'
          },
          ruby: [
            { base: '反', reading: 'はん' },
            { base: '対', reading: 'たい' },
            { base: '自', reading: 'じ' },
            { base: '由', reading: 'ゆう' },
            { base: '遊', reading: 'あそ' },
            { base: '家', reading: 'か' },
            { base: '庭', reading: 'てい' }
          ]
        },
        {
          jp: '「子どもが 嫌がる ことは させない」という 答えも 多かったです。',
          romaji: '「Kodomo ga iya ga ru koto wa sasenai」 to iu kotae mo ōkatta desu.',
          meaning: {
            en: 'Many also answered that they do not make children do things they dislike.',
            vi: 'Nhiều người cũng trả lời rằng không bắt con làm việc con không thích.'
          },
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '嫌', reading: 'いや' },
            { base: '答', reading: 'こた' },
            { base: '多', reading: 'おお' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What do 40 percent of families have children do on weekends?',
            vi: '40 phần trăm gia đình cho con làm gì vào cuối tuần?'
          },
          choices: [
            { id: 'a', label: { en: 'Calligraphy practice', vi: 'Luyện viết chữ' } },
            { id: 'b', label: { en: 'Recording audio', vi: 'Ghi âm' } },
            { id: 'c', label: { en: 'Sales meetings', vi: 'Họp kinh doanh' } },
            { id: 'd', label: { en: 'Delivering files', vi: 'Chuyển tài liệu' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What comes next most often after calligraphy?',
            vi: 'Sau luyện viết chữ, việc phổ biến tiếp theo là gì?'
          },
          choices: [
            { id: 'a', label: { en: 'Cram school', vi: 'Học thêm' } },
            { id: 'b', label: { en: 'Free play only', vi: 'Chỉ chơi tự do' } },
            { id: 'c', label: { en: 'Business trips', vi: 'Công tác' } },
            { id: 'd', label: { en: 'Taking care of parents', vi: 'Chăm sóc bố mẹ' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Raising children', vi: 'Nuôi dạy con' },
      introTerm: {
        jp: 'しつける・鍛える',
        ruby: [{ base: '鍛', reading: 'きた' }]
      },
      intro: {
        en: 'Things parents may have children do or learn.',
        vi: 'Những việc cha mẹ có thể cho con làm hoặc rèn luyện.'
      },
      layout: 'stacked',
      rows: [
        {
          jp: '自然の中で 遊ぶ',
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '然', reading: 'ぜん' },
            { base: '中', reading: 'なか' },
            { base: '遊', reading: 'あそ' }
          ],
          meaning: { en: 'play in nature', vi: 'chơi ở môi trường thiên nhiên' }
        },
        {
          jp: 'スポーツを する',
          meaning: { en: 'play sports', vi: 'chơi thể thao' }
        },
        {
          jp: '一人で 旅行する',
          ruby: [
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' },
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' }
          ],
          meaning: { en: 'travel alone', vi: 'đi du lịch một mình' }
        },
        {
          jp: 'いろいろな 経験を する',
          ruby: [
            { base: '経', reading: 'けい' },
            { base: '験', reading: 'けん' }
          ],
          meaning: { en: 'gain various experiences', vi: 'trải nghiệm nhiều thứ' }
        },
        {
          jp: 'いい 本を たくさん 読む',
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '読', reading: 'よ' }
          ],
          meaning: { en: 'read many good books', vi: 'đọc nhiều sách hay' }
        },
        {
          jp: 'お年寄りの 話を 聞く',
          ruby: [
            { base: '年', reading: 'とし' },
            { base: '寄', reading: 'よ' },
            { base: '話', reading: 'わ' },
            { base: '聞', reading: 'き' }
          ],
          meaning: { en: 'listen to older people', vi: 'nghe chuyện của người già' }
        },
        {
          jp: 'ボランティアに 参加する',
          ruby: [
            { base: '参', reading: 'さん' },
            { base: '加', reading: 'か' }
          ],
          meaning: { en: 'take part in volunteer work', vi: 'tham gia hoạt động tình nguyện' }
        },
        {
          jp: 'うちの 仕事を 手伝う',
          ruby: [
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '手', reading: 'て' },
            { base: '伝', reading: 'つだ' }
          ],
          meaning: { en: 'help with household work', vi: 'giúp việc nhà' }
        },
        {
          jp: '弟や 妹、おじいちゃん、おばあちゃんの 世話を する',
          ruby: [
            { base: '弟', reading: 'おとうと' },
            { base: '妹', reading: 'いもうと' },
            { base: '世', reading: 'せ' },
            { base: '話', reading: 'わ' }
          ],
          meaning: {
            en: 'take care of younger siblings and grandparents',
            vi: 'chăm sóc em, ông, bà'
          }
        },
        {
          jp: '自分が やりたい ことを やる',
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' }
          ],
          meaning: { en: 'do what one wants', vi: 'làm những gì mình thích' }
        },
        {
          jp: '自分の ことは 自分で 決める',
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' },
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' },
            { base: '決', reading: 'き' }
          ],
          meaning: { en: 'decide things for oneself', vi: 'tự lo liệu việc của mình' }
        },
        {
          jp: '自信を 持つ',
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '信', reading: 'しん' },
            { base: '持', reading: 'も' }
          ],
          meaning: { en: 'have confidence', vi: 'tự tin vào mình' }
        },
        {
          jp: '責任を 持つ',
          ruby: [
            { base: '責', reading: 'せき' },
            { base: '任', reading: 'にん' },
            { base: '持', reading: 'も' }
          ],
          meaning: { en: 'take responsibility', vi: 'chịu trách nhiệm' }
        },
        {
          jp: '我慢する',
          ruby: [
            { base: '我', reading: 'が' },
            { base: '慢', reading: 'まん' }
          ],
          meaning: { en: 'be patient, endure', vi: 'chịu đựng' }
        },
        {
          jp: '塾へ 行く',
          ruby: [
            { base: '塾', reading: 'じゅく' },
            { base: '行', reading: 'こう' }
          ],
          meaning: { en: 'go to cram school', vi: 'đi học thêm' }
        },
        {
          jp: 'ピアノや 英語を 習う',
          ruby: [
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' },
            { base: '習', reading: 'なら' }
          ],
          meaning: { en: 'learn piano, English, etc.', vi: 'học đàn piano, tiếng Anh v.v.' }
        }
      ]
    }
  ]
};
