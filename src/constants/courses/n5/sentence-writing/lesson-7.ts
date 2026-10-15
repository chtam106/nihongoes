import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson7SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N で V',
      items: [
        {
          prompt: { en: 'I eat with chopsticks.', vi: 'Tôi ăn bằng đũa.' },
          jp: 'はしで 食べます。',
          ruby: [{ base: '食', reading: 'た' }]
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
          prompt: { en: 'I eat with a spoon.', vi: 'Tôi ăn bằng thìa.' },
          jp: 'スプーンで 食べます。',
          ruby: [{ base: '食', reading: 'た' }]
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
          prompt: { en: 'I eat with a fork.', vi: 'Tôi ăn bằng nĩa.' },
          jp: 'フォークで 食べます。',
          ruby: [{ base: '食', reading: 'た' }]
        },
        {
          prompt: { en: 'I write with a personal computer.', vi: 'Tôi viết bằng máy vi tính.' },
          jp: 'パソコンで メールを 書きます。',
          ruby: [{ base: '書', reading: 'か' }]
        },
        {
          prompt: { en: 'I make a hole with a hole punch.', vi: 'Tôi đục lỗ bằng cái đục lỗ.' },
          jp: 'パンチで 紙を 切ります。',
          ruby: [
            { base: '紙', reading: 'かみ' },
            { base: '切', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'I eat with my hands.', vi: 'Tôi ăn bằng tay.' },
          jp: '手で 食べます。',
          ruby: [
            { base: '手', reading: 'て' },
            { base: '食', reading: 'た' }
          ]
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
          prompt: { en: 'It is "thank you".', vi: 'Là "thank you".' },
          jp: '「Thank you」です。'
        },
        {
          prompt: {
            en: 'How do you say "thank you" in Japanese?',
            vi: '"Thank you" tiếng Nhật nói thế nào?'
          },
          jp: '「Thank you」は 日本語で 何ですか。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          prompt: { en: 'It is "arigatou".', vi: 'Là "arigatou".' },
          jp: '「ありがとう」です。'
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
          prompt: { en: 'I give flowers to Yamada-san.', vi: 'Tôi tặng hoa cho anh/chị Yamada.' },
          jp: '山田さんに 花を あげます。',
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '田', reading: 'だ' },
            { base: '花', reading: 'はな' }
          ]
        },
        {
          prompt: { en: 'I lend Lin a book.', vi: 'Tôi cho Lin mượn sách.' },
          jp: 'リンさんに 本を 貸します。',
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '貸', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'I gave my mother a shirt.', vi: 'Tôi đã tặng mẹ một áo sơ mi.' },
          jp: '母に シャツを あげました。',
          ruby: [{ base: '母', reading: 'はは' }]
        },
        {
          prompt: { en: 'I gave my father a present.', vi: 'Tôi đã tặng bố một món quà.' },
          jp: '父に プレゼントを あげました。',
          ruby: [{ base: '父', reading: 'ちち' }]
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
          prompt: {
            en: 'I receive flowers from Yamada-san.',
            vi: 'Tôi nhận hoa từ anh/chị Yamada.'
          },
          jp: '山田さんに 花を もらいます。',
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '田', reading: 'だ' },
            { base: '花', reading: 'はな' }
          ]
        },
        {
          prompt: { en: 'I borrow a book from Lin.', vi: 'Tôi mượn sách của Lin.' },
          jp: 'リンさんに 本を 借ります。',
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '借', reading: 'か' }
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
          prompt: { en: 'Yes, I already bought it.', vi: 'Rồi, tôi đã mua rồi.' },
          jp: 'はい、もう 買いました。',
          ruby: [{ base: '買', reading: 'か' }]
        },
        {
          prompt: { en: 'No, not yet.', vi: 'Chưa, tôi chưa mua.' },
          jp: 'いいえ、まだです。'
        },
        {
          prompt: { en: 'I will send it from now on.', vi: 'Tôi sẽ gửi từ bây giờ.' },
          jp: 'これから 送ります。',
          ruby: [{ base: '送', reading: 'おく' }]
        },
        {
          prompt: { en: 'I have already made a phone call.', vi: 'Tôi đã gọi điện rồi.' },
          jp: 'もう 電話を かけました。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        },
        {
          prompt: { en: 'I make a phone call.', vi: 'Tôi gọi điện.' },
          jp: '電話を かけます。',
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
          prompt: { en: 'This stapler is handy.', vi: 'Cái dập ghim này tiện nhỉ.' },
          jp: 'この ホッチキス、いいですね。'
        },
        {
          prompt: {
            en: 'Would you like this Christmas present?',
            vi: 'Bạn dùng món quà Giáng sinh này nhé?'
          },
          jp: 'この クリスマスの プレゼント、いかがですか。'
        },
        {
          prompt: { en: 'Where is your father?', vi: 'Bố anh/chị ở đâu?' },
          jp: 'お父さん、どこですか。',
          ruby: [{ base: '父', reading: 'とう' }]
        },
        {
          prompt: { en: 'Where is your mother?', vi: 'Mẹ anh/chị ở đâu?' },
          jp: 'お母さん、どこですか。',
          ruby: [{ base: '母', reading: 'かあ' }]
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
