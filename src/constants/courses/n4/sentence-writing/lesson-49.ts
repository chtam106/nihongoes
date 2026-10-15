import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson49SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-られます (sonkeigo)',
      items: [
        {
          prompt: {
            en: 'The professor comes to the lecture at seven.',
            vi: 'Giáo sư đến buổi nói chuyện lúc 7 giờ.'
          },
          jp: '先生は 7時に 講演会へ 来られます。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '時', reading: 'じ' },
            { base: '講', reading: 'こう' },
            { base: '演', reading: 'えん' },
            { base: '会', reading: 'かい' },
            { base: '来', reading: 'こ' }
          ]
        },
        {
          prompt: {
            en: 'The manager works at that company.',
            vi: 'Trưởng phòng làm việc ở công ty đó.'
          },
          jp: '部長は その 会社に 勤めます。勤められます。',
          ruby: [
            { base: '部', reading: 'ぶ' },
            { base: '長', reading: 'ちょう' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '勤', reading: 'つと' },
            { base: '勤', reading: 'つと' }
          ]
        },
        {
          prompt: {
            en: 'The doctor uses this hospital.',
            vi: 'Bác sĩ sử dụng bệnh viện này.'
          },
          jp: '先生は この 病院を 利用します。利用されます。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '病', reading: 'びょう' },
            { base: '院', reading: 'いん' },
            { base: '利', reading: 'り' },
            { base: '用', reading: 'よう' },
            { base: '利', reading: 'り' },
            { base: '用', reading: 'よう' }
          ]
        },
        {
          prompt: {
            en: 'The guest sits on the chair.',
            vi: 'Khách ngồi ghế.'
          },
          jp: 'お客様は いすに 掛けます。掛けられます。',
          ruby: [
            { base: '客', reading: 'きゃく' },
            { base: '様', reading: 'さま' },
            { base: '掛', reading: 'か' },
            { base: '掛', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'The teacher spends the summer at a Japanese inn.',
            vi: 'Thầy giáo nghỉ hè ở nhà khách kiểu Nhật.'
          },
          jp: '先生は 夏を 旅館で 過ごします。過ごされます。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '夏', reading: 'なつ' },
            { base: '旅', reading: 'りょ' },
            { base: '館', reading: 'かん' },
            { base: '過', reading: 'す' },
            { base: '過', reading: 'す' }
          ]
        }
      ]
    },
    {
      pattern: 'お V-ます-stem になります',
      items: [
        {
          prompt: {
            en: 'The president has already gone home.',
            vi: 'Giám đốc đã về nhà rồi.'
          },
          jp: '社長は もう お帰りに なりました。',
          ruby: [
            { base: '社', reading: 'しゃ' },
            { base: '長', reading: 'ちょう' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          prompt: {
            en: 'The professor will wait at the bus stop.',
            vi: 'Giáo sư sẽ đợi ở bến xe buýt.'
          },
          jp: '先生は バス停で お待ちに なります。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '停', reading: 'てい' },
            { base: '待', reading: 'ま' }
          ]
        },
        {
          prompt: {
            en: 'Occasionally the director reads this paper.',
            vi: 'Thỉnh thoảng giám đốc đọc bài này.'
          },
          jp: '所長は たまに この 論文を お読みに なります。',
          ruby: [
            { base: '所', reading: 'しょ' },
            { base: '長', reading: 'ちょう' },
            { base: '論', reading: 'ろん' },
            { base: '文', reading: 'ぶん' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          prompt: {
            en: 'Anyone may enter this room.',
            vi: 'Vị nào cũng có thể vào phòng này.'
          },
          jp: 'どなたでも この へやへ お入りに なれます。',
          ruby: [{ base: '入', reading: 'はい' }]
        },
        {
          prompt: {
            en: 'The guest will sit down now.',
            vi: 'Khách sẽ ngồi xuống bây giờ.'
          },
          jp: 'お客様は 今 お掛けに なります。',
          ruby: [
            { base: '客', reading: 'きゃく' },
            { base: '様', reading: 'さま' },
            { base: '今', reading: 'いま' },
            { base: '掛', reading: 'か' }
          ]
        }
      ]
    },
    {
      pattern: 'Special honorific verbs',
      items: [
        {
          prompt: {
            en: 'Is Professor Ito there?',
            vi: 'Có thầy Ito ở đó không ạ?'
          },
          jp: '伊藤先生は いらっしゃいますか。',
          ruby: [
            { base: '伊', reading: 'い' },
            { base: '藤', reading: 'とう' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: {
            en: 'Please help yourself to this cake.',
            vi: 'Xin mời dùng bánh này.'
          },
          jp: 'この ケーキを 召し上がりますか。どうぞ 召し上がって ください。',
          ruby: [
            { base: '召', reading: 'め' },
            { base: '上', reading: 'あ' },
            { base: '召', reading: 'め' },
            { base: '上', reading: 'あ' }
          ]
        },
        {
          prompt: {
            en: 'What is your name? I am called Yamanaka.',
            vi: 'Tên ngài là gì ạ? Tôi tên là Yamanaka.'
          },
          jp: 'お名前は 何と おっしゃいますか。山中と いいます。',
          ruby: [
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' },
            { base: '何', reading: 'なん' },
            { base: '山', reading: 'やま' },
            { base: '中', reading: 'なか' }
          ]
        },
        {
          prompt: {
            en: 'What will the director do next?',
            vi: 'Giám đốc sẽ làm gì tiếp theo?'
          },
          jp: '所長は つぎに 何を なさいますか。',
          ruby: [
            { base: '所', reading: 'しょ' },
            { base: '長', reading: 'ちょう' },
            { base: '何', reading: 'なに' }
          ]
        },
        {
          prompt: {
            en: 'Please look at this. Do you know iPS cells?',
            vi: 'Xin mời xem cái này. Ngài có biết tế bào iPS không?'
          },
          jp: 'これを ご覧になりますか。iPS 細胞を ご存じです か。',
          ruby: [
            { base: '覧', reading: 'らん' },
            { base: '細', reading: 'さい' },
            { base: '胞', reading: 'ぼう' },
            { base: '存', reading: 'ぞん' }
          ]
        }
      ]
    },
    {
      pattern: 'お/ご 〜 ください',
      items: [
        {
          prompt: {
            en: 'Please come in.',
            vi: 'Xin mời vào.'
          },
          jp: 'どうぞ お入り ください。',
          ruby: [{ base: '入', reading: 'はい' }]
        },
        {
          prompt: {
            en: 'Please wait at the bus stop.',
            vi: 'Xin đợi ở bến xe buýt.'
          },
          jp: 'バス停で お待ち ください。',
          ruby: [
            { base: '停', reading: 'てい' },
            { base: '待', reading: 'ま' }
          ]
        },
        {
          prompt: {
            en: 'Please look at this career history.',
            vi: 'Xin xem lý lịch này.'
          },
          jp: 'この 経歴を ご覧 ください。',
          ruby: [
            { base: '経', reading: 'けい' },
            { base: '歴', reading: 'れき' },
            { base: '覧', reading: 'らん' }
          ]
        },
        {
          prompt: {
            en: 'Please give my regards to your wife.',
            vi: 'Xin gửi lời hỏi thăm đến phu nhân.'
          },
          jp: '奥様に よろしく お伝え ください。',
          ruby: [
            { base: '奥', reading: 'おく' },
            { base: '様', reading: 'さま' },
            { base: '伝', reading: 'つた' }
          ]
        },
        {
          prompt: {
            en: 'Please sit down, everyone.',
            vi: 'Xin mời mọi người ngồi.'
          },
          jp: 'みなさま、どうぞ お掛け ください。',
          ruby: [{ base: '掛', reading: 'か' }]
        }
      ]
    },
    {
      pattern: 'お/ご prefixes',
      items: [
        {
          prompt: {
            en: 'Please give a greeting to the teacher.',
            vi: 'Hãy chào hỏi thầy cô.'
          },
          jp: '先生に ごあいさつを してください。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: {
            en: 'He aims for medical school and then advances.',
            vi: 'Anh ấy hướng đến khoa y rồi học lên.'
          },
          jp: '彼は 医学部を 目指します。そのあと 進みます。',
          ruby: [
            { base: '彼', reading: 'かれ' },
            { base: '医', reading: 'い' },
            { base: '学', reading: 'がく' },
            { base: '部', reading: 'ぶ' },
            { base: '目', reading: 'め' },
            { base: '指', reading: 'ざ' },
            { base: '進', reading: 'すす' }
          ]
        },
        {
          prompt: {
            en: 'He develops iPS cells in mice and in humans.',
            vi: 'Ông ấy phát triển tế bào iPS ở chuột và ở người.'
          },
          jp: 'マウスと ヒトで iPS 細胞を 開発します。',
          ruby: [
            { base: '細', reading: 'さい' },
            { base: '胞', reading: 'ぼう' },
            { base: '開', reading: 'かい' },
            { base: '発', reading: 'はつ' }
          ]
        },
        {
          prompt: {
            en: 'He received a prize at the lecture.',
            vi: 'Ông ấy nhận giải ở buổi nói chuyện.'
          },
          jp: '講演会で 賞を 受賞します。受賞されました。',
          ruby: [
            { base: '講', reading: 'こう' },
            { base: '演', reading: 'えん' },
            { base: '会', reading: 'かい' },
            { base: '賞', reading: 'しょう' },
            { base: '受', reading: 'じゅ' },
            { base: '賞', reading: 'しょう' },
            { base: '受', reading: 'じゅ' },
            { base: '賞', reading: 'しょう' }
          ]
        },
        {
          prompt: {
            en: 'How is your wife? Please take care.',
            vi: 'Phu nhân có khỏe không? Xin bảo trọng.'
          },
          jp: '奥様は お元気 ですか。お体を ご自愛 ください。',
          ruby: [
            { base: '奥', reading: 'おく' },
            { base: '様', reading: 'さま' },
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' },
            { base: '体', reading: 'からだ' },
            { base: '自', reading: 'じ' },
            { base: '愛', reading: 'あい' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'Class 1, Year 1', vi: 'Tổ 1 năm thứ 1' },
      jp: '一年一組',
      ruby: [
        { base: '一', reading: 'いち' },
        { base: '年', reading: 'ねん' },
        { base: '一', reading: 'いっ' },
        { base: '組', reading: 'くみ' }
      ]
    },
    {
      prompt: { en: 'to have a fever', vi: 'Bị sốt' },
      jp: '熱を 出します',
      ruby: [
        { base: '熱', reading: 'ねつ' },
        { base: '出', reading: 'だ' }
      ]
    },
    {
      prompt: { en: 'Please give my regards.', vi: 'Cho tôi gửi lời hỏi thăm.' },
      jp: 'よろしく お伝え ください。',
      ruby: [{ base: '伝', reading: 'つた' }]
    },
    {
      prompt: { en: 'Excuse me for ending the call.', vi: 'Xin phép tôi cúp máy ạ.' },
      jp: '失礼 いたします。',
      ruby: [
        { base: '失', reading: 'しつ' },
        { base: '礼', reading: 'れい' }
      ]
    }
  ]
};
