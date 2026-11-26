import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson50SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'お/ご 〜 します (kenjougo I)',
      items: [
        {
          prompt: {
            en: "First, I will explain today's schedule.",
            vi: 'Trước hết, tôi sẽ giải thích lịch hôm nay.'
          },
          jp: '初めに、きょうの スケジュールを ご説明します。',
          ruby: [
            { base: '初', reading: 'はじ' },
            { base: '説', reading: 'せつ' },
            { base: '明', reading: 'めい' }
          ]
        },
        {
          prompt: { en: 'Shall I bring you some coffee?', vi: 'Tôi mang cà phê đến cho anh nhé?' },
          jp: 'コーヒーを お持ち しましょうか。',
          ruby: [{ base: '持', reading: 'も' }]
        },
        {
          prompt: {
            en: 'That looks heavy. Let me carry your bag.',
            vi: 'Trông nặng quá. Để tôi xách hành lý giúp.'
          },
          jp: '重そうですね。荷物を お持ち します。',
          ruby: [
            { base: '重', reading: 'おも' },
            { base: '荷', reading: 'に' },
            { base: '物', reading: 'もつ' },
            { base: '持', reading: 'も' }
          ]
        },
        {
          prompt: { en: 'I will show you to the venue.', vi: 'Tôi xin dẫn anh đến hội trường.' },
          jp: '会場まで ご案内します。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '場', reading: 'じょう' },
            { base: '案', reading: 'あん' },
            { base: '内', reading: 'ない' }
          ]
        },
        {
          prompt: {
            en: 'Then I will wait for you at the station ticket gate.',
            vi: 'Vậy tôi sẽ đợi anh ở cửa soát vé nhà ga.'
          },
          jp: 'では、駅の 改札口で お待ち します。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '改', reading: 'かい' },
            { base: '札', reading: 'さつ' },
            { base: '口', reading: 'ぐち' },
            { base: '待', reading: 'ま' }
          ]
        },
        {
          prompt: { en: 'I will call you back later.', vi: 'Lát nữa tôi sẽ gọi lại cho anh.' },
          jp: '後で こちらから お電話します。',
          ruby: [
            { base: '後', reading: 'あと' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        }
      ]
    },
    {
      pattern: 'Special humble verbs',
      items: [
        {
          prompt: {
            en: 'I had the honor of meeting the company president last month.',
            vi: 'Tháng trước tôi đã được gặp giám đốc.'
          },
          jp: '先月 社長に お目に かかりました。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '月', reading: 'げつ' },
            { base: '社', reading: 'しゃ' },
            { base: '長', reading: 'ちょう' },
            { base: '目', reading: 'め' }
          ]
        },
        {
          prompt: {
            en: 'I will visit you tomorrow at three.',
            vi: 'Ngày mai 3 giờ tôi sẽ đến chỗ anh.'
          },
          jp: 'あした 3時に そちらへ 伺います。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '伺', reading: 'うかが' }
          ]
        },
        {
          prompt: {
            en: 'May I take a look at these materials?',
            vi: 'Tôi xem tài liệu này được không ạ?'
          },
          jp: 'この 資料を 拝見しても よろしいですか。',
          ruby: [
            { base: '資', reading: 'し' },
            { base: '料', reading: 'りょう' },
            { base: '拝', reading: 'はい' },
            { base: '見', reading: 'けん' }
          ]
        },
        {
          prompt: { en: 'I know your name well.', vi: 'Tôi biết rõ quý danh của ngài.' },
          jp: 'お名前は よく 存じて います。',
          ruby: [
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' },
            { base: '存', reading: 'ぞん' }
          ]
        },
        {
          prompt: { en: 'Then I will gladly accept.', vi: 'Vậy tôi xin phép không khách sáo nhé.' },
          jp: 'では、遠慮なく いただきます。',
          ruby: [
            { base: '遠', reading: 'えん' },
            { base: '慮', reading: 'りょ' }
          ]
        }
      ]
    },
    {
      pattern: 'Kenjougo II (参る, 申す, いたす, おります)',
      patternRuby: [
        { base: '参', reading: 'まい' },
        { base: '申', reading: 'もう' }
      ],
      items: [
        {
          prompt: {
            en: 'How do you do? My name is Tanaka.',
            vi: 'Rất hân hạnh. Tôi tên là Tanaka.'
          },
          jp: '初めまして。田中と 申します。',
          ruby: [
            { base: '初', reading: 'はじ' },
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '申', reading: 'もう' }
          ]
        },
        {
          prompt: {
            en: 'I am at the reception desk right now.',
            vi: 'Hiện tôi đang ở quầy lễ tân.'
          },
          jp: 'ただ今 受付に おります。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '受', reading: 'うけ' },
            { base: '付', reading: 'つけ' }
          ]
        },
        {
          prompt: { en: 'I am heading to the office now.', vi: 'Bây giờ tôi xin đến công ty.' },
          jp: 'これから 会社へ 参ります。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '参', reading: 'まい' }
          ]
        },
        {
          prompt: {
            en: 'I have wanted to do this job since I was small.',
            vi: 'Từ nhỏ tôi đã muốn làm công việc này.'
          },
          jp: '小さい ころから この 仕事が したいと 思っておりました。',
          ruby: [
            { base: '小', reading: 'ちい' },
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '思', reading: 'おも' }
          ]
        },
        {
          prompt: {
            en: 'I am sincerely grateful to everyone.',
            vi: 'Tôi xin chân thành cảm ơn mọi người.'
          },
          jp: '皆様に 心から 感謝 いたします。',
          ruby: [
            { base: '皆', reading: 'みな' },
            { base: '様', reading: 'さま' },
            { base: '心', reading: 'こころ' },
            { base: '感', reading: 'かん' },
            { base: '謝', reading: 'しゃ' }
          ]
        },
        {
          prompt: {
            en: 'I am very sorry for the trouble I caused.',
            vi: 'Thật xin lỗi vì đã làm phiền.'
          },
          jp: 'ご迷惑を おかけ して、申し訳 ありません。',
          ruby: [
            { base: '迷', reading: 'めい' },
            { base: '惑', reading: 'わく' },
            { base: '申', reading: 'もう' },
            { base: '訳', reading: 'わけ' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'How are you? (honorific)',
        vi: 'Anh chị có khỏe không ạ?'
      },
      jp: 'お元気で いらっしゃいますか。',
      ruby: [
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' }
      ]
    }
  ]
};
