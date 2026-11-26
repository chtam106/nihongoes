import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson49SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-られます (sonkeigo)',
      items: [
        {
          prompt: {
            en: 'The professor comes to the talk at seven.',
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
            en: 'How many years has the manager worked at this company?',
            vi: 'Trưởng phòng làm ở công ty này bao nhiêu năm rồi ạ?'
          },
          jp: '部長は 何年 この 会社に 勤められていますか。',
          ruby: [
            { base: '部', reading: 'ぶ' },
            { base: '長', reading: 'ちょう' },
            { base: '何', reading: 'なん' },
            { base: '年', reading: 'ねん' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '勤', reading: 'つと' }
          ]
        },
        {
          prompt: {
            en: 'The president reads the newspaper every morning.',
            vi: 'Giám đốc đọc báo mỗi sáng.'
          },
          jp: '社長は 毎朝 新聞を 読まれます。',
          ruby: [
            { base: '社', reading: 'しゃ' },
            { base: '長', reading: 'ちょう' },
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '新', reading: 'しん' },
            { base: '聞', reading: 'ぶん' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          prompt: { en: 'The professor has already gone home.', vi: 'Thầy đã về rồi ạ.' },
          jp: '先生は もう 帰られました。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          prompt: {
            en: 'The professor spent the summer holidays at an inn in Kyoto.',
            vi: 'Thầy đã nghỉ hè ở một lữ quán tại Kyoto.'
          },
          jp: '先生は 夏休みを 京都の 旅館で 過ごされました。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '夏', reading: 'なつ' },
            { base: '休', reading: 'やす' },
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '旅', reading: 'りょ' },
            { base: '館', reading: 'かん' },
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
          prompt: { en: 'Anyone may enter this room.', vi: 'Ai cũng có thể vào phòng này.' },
          jp: 'どなたでも この 部屋に お入りに なれます。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '入', reading: 'はい' }
          ]
        },
        {
          prompt: {
            en: 'Around what time will the manager be back?',
            vi: 'Trưởng phòng khoảng mấy giờ thì về ạ?'
          },
          jp: '部長は 何時ごろ お戻りに なりますか。',
          ruby: [
            { base: '部', reading: 'ぶ' },
            { base: '長', reading: 'ちょう' },
            { base: '何', reading: 'なん' },
            { base: '時', reading: 'じ' },
            { base: '戻', reading: 'もど' }
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
          prompt: { en: 'What would you like to eat, Professor?', vi: 'Thầy dùng món gì ạ?' },
          jp: '先生は 何を 召し上がりますか。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '何', reading: 'なに' },
            { base: '召', reading: 'め' },
            { base: '上', reading: 'あ' }
          ]
        },
        {
          prompt: {
            en: 'May I have your name? ...My name is Yamanaka.',
            vi: 'Xin hỏi quý danh là gì ạ? ...Tôi tên là Yamanaka.'
          },
          jp: 'お名前は 何と おっしゃいますか。……山中と 申します。',
          ruby: [
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' },
            { base: '何', reading: 'なん' },
            { base: '山', reading: 'やま' },
            { base: '中', reading: 'なか' },
            { base: '申', reading: 'もう' }
          ]
        },
        {
          prompt: {
            en: 'What will you be doing this weekend?',
            vi: 'Cuối tuần ngài định làm gì ạ?'
          },
          jp: '週末は 何を なさいますか。',
          ruby: [
            { base: '週', reading: 'しゅう' },
            { base: '末', reading: 'まつ' },
            { base: '何', reading: 'なに' }
          ]
        },
        {
          prompt: { en: 'Professor, have you seen this news?', vi: 'Thầy đã xem tin này chưa ạ?' },
          jp: '先生は この ニュースを ご覧に なりましたか。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '覧', reading: 'らん' }
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
          prompt: { en: 'Please take a look at these materials.', vi: 'Xin mời xem tài liệu này.' },
          jp: 'こちらの 資料を ご覧 ください。',
          ruby: [
            { base: '資', reading: 'し' },
            { base: '料', reading: 'りょう' },
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
          prompt: { en: 'Is your family well, Professor?', vi: 'Gia đình thầy có khỏe không ạ?' },
          jp: '先生の ご家族は お元気ですか。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'Thank you for taking the time when you are so busy.',
            vi: 'Cảm ơn anh đã dành thời gian dù đang bận.'
          },
          jp: 'お忙しい ところ、ありがとう ございます。',
          ruby: [{ base: '忙', reading: 'いそが' }]
        },
        {
          prompt: { en: 'Congratulations on your wedding.', vi: 'Chúc mừng đám cưới của anh chị.' },
          jp: 'ご結婚 おめでとう ございます。',
          ruby: [
            { base: '結', reading: 'けっ' },
            { base: '婚', reading: 'こん' }
          ]
        },
        {
          prompt: {
            en: 'It has gotten cold, so please take good care of yourself.',
            vi: 'Trời đã lạnh rồi, xin hãy giữ gìn sức khỏe.'
          },
          jp: '寒く なりましたから、どうぞ お体を 大切に して ください。',
          ruby: [
            { base: '寒', reading: 'さむ' },
            { base: '体', reading: 'からだ' },
            { base: '大', reading: 'たい' },
            { base: '切', reading: 'せつ' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'Class 1, Year 1', vi: 'Lớp 1 năm thứ nhất' },
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
