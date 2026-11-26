import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson7SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N で V',
      items: [
        {
          prompt: {
            en: 'Japanese people eat rice with chopsticks.',
            vi: 'Người Nhật ăn cơm bằng đũa.'
          },
          jp: '日本人は はしで ごはんを 食べます。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '人', reading: 'じん' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'I write emails in Japanese.', vi: 'Tôi viết email bằng tiếng Nhật.' },
          jp: '日本語で メールを 書きます。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'I cut paper with scissors.', vi: 'Tôi cắt giấy bằng kéo.' },
          jp: 'はさみで 紙を 切ります。',
          ruby: [
            { base: '紙', reading: 'かみ' },
            { base: '切', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'I take photos with my phone.', vi: 'Tôi chụp ảnh bằng điện thoại.' },
          jp: 'ケータイで 写真を 撮ります。',
          ruby: [
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '撮', reading: 'と' }
          ]
        },
        {
          prompt: { en: 'I cut meat with a knife.', vi: 'Tôi cắt thịt bằng dao.' },
          jp: 'ナイフで 肉を 切ります。',
          ruby: [
            { base: '肉', reading: 'にく' },
            { base: '切', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'I write email on a computer.', vi: 'Tôi viết email bằng máy tính.' },
          jp: 'パソコンで メールを 書きます。',
          ruby: [{ base: '書', reading: 'か' }]
        }
      ]
    },
    {
      pattern: 'N は 〜語 で 何 ですか',
      patternRuby: [
        { base: '語', reading: 'ご' },
        { base: '何', reading: 'なん' }
      ],
      items: [
        {
          prompt: {
            en: 'How do you say "arigatou" in English?',
            vi: '"Arigatou" tiếng Anh nói thế nào?'
          },
          jp: '「ありがとう」は 英語で 何ですか。',
          ruby: [
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          prompt: {
            en: 'How do you say "sayōnara" in English? ..."Goodbye".',
            vi: '"Sayōnara" tiếng Anh nói thế nào? ..."Goodbye".'
          },
          jp: '「さようなら」は 英語で 何ですか。……「Goodbye」です。',
          ruby: [
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          prompt: {
            en: 'What is this called in Japanese? ..."Hasami" (scissors).',
            vi: 'Cái này tiếng Nhật gọi là gì? ..."Hasami" (cái kéo).'
          },
          jp: 'これは 日本語で 何ですか。……「はさみ」です。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          prompt: {
            en: 'How do you say "thank you" in Japanese? ..."Arigatō".',
            vi: '"Thank you" tiếng Nhật nói thế nào? ..."Arigatō".'
          },
          jp: '「Thank you」は 日本語で 何ですか。……「ありがとう」です。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          prompt: {
            en: 'How do you say "hand" in Japanese?',
            vi: '"Hand" tiếng Nhật nói thế nào?'
          },
          jp: '「hand」は 日本語で 何ですか。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '何', reading: 'なん' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 に N2 を あげます',
      items: [
        {
          prompt: {
            en: 'I gave flowers to Yamada-san.',
            vi: 'Tôi đã tặng hoa cho anh/chị Yamada.'
          },
          jp: '山田さんに 花を あげました。',
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '田', reading: 'だ' },
            { base: '花', reading: 'はな' }
          ]
        },
        {
          prompt: { en: 'I lent Lin a book.', vi: 'Tôi đã cho Lin mượn sách.' },
          jp: 'リンさんに 本を 貸しました。',
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '貸', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'I teach Ken English.', vi: 'Tôi dạy tiếng Anh cho Ken.' },
          jp: 'ケンさんに 英語を 教えます。',
          ruby: [
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' },
            { base: '教', reading: 'おし' }
          ]
        },
        {
          prompt: { en: 'I gave my mother a shirt.', vi: 'Tôi đã tặng mẹ một áo sơ mi.' },
          jp: '母に シャツを あげました。',
          ruby: [{ base: '母', reading: 'はは' }]
        },
        {
          prompt: {
            en: 'I gave my father a necktie for his birthday.',
            vi: 'Tôi tặng bố cà vạt nhân dịp sinh nhật.'
          },
          jp: '誕生日に 父に ネクタイを あげました。',
          ruby: [
            { base: '誕', reading: 'たん' },
            { base: '生', reading: 'じょう' },
            { base: '日', reading: 'び' },
            { base: '父', reading: 'ちち' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 に / から N2 を もらいます',
      items: [
        {
          prompt: {
            en: 'I received flowers from Yamada-san.',
            vi: 'Tôi đã nhận hoa từ anh/chị Yamada.'
          },
          jp: '山田さんに 花を もらいました。',
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '田', reading: 'だ' },
            { base: '花', reading: 'はな' }
          ]
        },
        {
          prompt: { en: 'I borrowed a book from Lin.', vi: 'Tôi đã mượn sách của Lin.' },
          jp: 'リンさんに 本を 借りました。',
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '借', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'I learn Japanese from my teacher.', vi: 'Tôi học tiếng Nhật từ thầy/cô.' },
          jp: '先生に 日本語を 習います。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '習', reading: 'なら' }
          ]
        },
        {
          prompt: { en: 'I borrowed money from the bank.', vi: 'Tôi đã vay tiền từ ngân hàng.' },
          jp: '銀行から お金を 借りました。',
          ruby: [
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '金', reading: 'かね' },
            { base: '借', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: "I received a New Year's card from Ken.",
            vi: 'Tôi đã nhận thiếp năm mới từ Ken.'
          },
          jp: 'ケンさんに 年賀状を もらいました。',
          ruby: [
            { base: '年', reading: 'ねん' },
            { base: '賀', reading: 'が' },
            { base: '状', reading: 'じょう' }
          ]
        }
      ]
    },
    {
      pattern: 'もう V ました',
      items: [
        {
          prompt: { en: 'I have already sent the package.', vi: 'Tôi đã gửi hành lý rồi.' },
          jp: 'もう 荷物を 送りました。',
          ruby: [
            { base: '荷', reading: 'に' },
            { base: '物', reading: 'もつ' },
            { base: '送', reading: 'おく' }
          ]
        },
        {
          prompt: { en: 'Have you bought the ticket yet?', vi: 'Bạn đã mua vé chưa?' },
          jp: 'もう 切符を 買いましたか。',
          ruby: [
            { base: '切', reading: 'きっ' },
            { base: '符', reading: 'ぷ' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'Have you eaten dinner yet? ...Yes, I already ate.',
            vi: 'Anh ăn tối chưa? ...Rồi, tôi ăn rồi.'
          },
          jp: 'もう 晩ごはんを 食べましたか。……はい、もう 食べました。',
          ruby: [
            { base: '晩', reading: 'ばん' },
            { base: '食', reading: 'た' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: {
            en: 'Have you done your homework yet? ...No, not yet.',
            vi: 'Làm bài tập chưa? ...Chưa.'
          },
          jp: 'もう 宿題を しましたか。……いいえ、まだです。',
          ruby: [
            { base: '宿', reading: 'しゅく' },
            { base: '題', reading: 'だい' }
          ]
        },
        {
          prompt: {
            en: 'Have you sent the package yet? ...No, I am about to send it.',
            vi: 'Anh gửi hàng chưa? ...Chưa, giờ tôi mới gửi.'
          },
          jp: 'もう 荷物を 送りましたか。……いいえ、これから 送ります。',
          ruby: [
            { base: '荷', reading: 'に' },
            { base: '物', reading: 'もつ' },
            { base: '送', reading: 'おく' },
            { base: '送', reading: 'おく' }
          ]
        },
        {
          prompt: { en: 'I have already made a phone call.', vi: 'Tôi đã gọi điện rồi.' },
          jp: 'もう 電話を かけました。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        }
      ]
    },
    {
      pattern: 'N [は] / N [を]',
      items: [
        {
          prompt: { en: 'This spoon is lovely.', vi: 'Cái thìa này đẹp nhỉ.' },
          jp: 'この スプーン、すてきですね。'
        },
        {
          prompt: { en: 'Would you like some tea?', vi: 'Bạn dùng trà nhé?' },
          jp: 'お茶は いかがですか。',
          ruby: [{ base: '茶', reading: 'ちゃ' }]
        },
        {
          prompt: { en: "This eraser is Ken's.", vi: 'Cục tẩy này là của Ken.' },
          jp: 'この 消しゴム、ケンさんのです。',
          ruby: [{ base: '消', reading: 'け' }]
        },
        {
          prompt: { en: 'This tape is handy.', vi: 'Băng dính này tiện nhỉ.' },
          jp: 'この セロテープ、いいですね。'
        },
        {
          prompt: {
            en: 'How about this Christmas present?',
            vi: 'Món quà Giáng sinh này thì sao?'
          },
          jp: 'この クリスマスの プレゼント、いかがですか。'
        },
        {
          prompt: { en: 'Would you like some coffee?', vi: 'Uống cà phê không?' },
          jp: 'コーヒー、飲みますか。',
          ruby: [{ base: '飲', reading: 'の' }]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'How lovely. / That is nice.', vi: 'Hay nhỉ. / Đẹp nhỉ.' },
      jp: 'すてきですね。'
    },
    {
      prompt: {
        en: 'Welcome. (greeting a visitor to your home)',
        vi: 'Hoan nghênh anh/chị đã đến chơi.'
      },
      jp: 'いらっしゃい。'
    },
    {
      prompt: { en: 'Please come in.', vi: 'Mời anh/chị vào.' },
      jp: 'どうぞ お上がり ください。',
      ruby: [{ base: '上', reading: 'あ' }]
    },
    {
      prompt: {
        en: "Excuse me. (said when entering someone else's home)",
        vi: 'Xin phép tôi vào. (khi bước vào nhà người khác)'
      },
      jp: '失礼します。',
      ruby: [
        { base: '失', reading: 'しつ' },
        { base: '礼', reading: 'れい' }
      ]
    },
    {
      prompt: { en: 'Would you like some?', vi: 'Anh/Chị dùng ~ nhé?' },
      jp: 'いかがですか。'
    },
    {
      prompt: {
        en: 'I will start the meal. (said before eating or drinking)',
        vi: 'Tôi xin dùng. (nói trước khi ăn hoặc uống)'
      },
      jp: 'いただきます。'
    },
    {
      prompt: {
        en: 'Thank you for the meal. (said after eating)',
        vi: 'Cảm ơn vì bữa ăn ngon. (nói sau khi ăn xong)'
      },
      jp: 'ごちそうさまでした。'
    }
  ]
};
