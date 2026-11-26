import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson2SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'これ / それ / あれ は N です',
      items: [
        {
          prompt: { en: 'This is a book.', vi: 'Đây là quyển sách.' },
          jp: 'これは 本です。',
          ruby: [{ base: '本', reading: 'ほん' }]
        },
        {
          prompt: { en: 'That is a dictionary.', vi: 'Đó là từ điển.' },
          jp: 'それは 辞書です。',
          ruby: [
            { base: '辞', reading: 'じ' },
            { base: '書', reading: 'しょ' }
          ]
        },
        {
          prompt: { en: 'That over there is a magazine.', vi: 'Cái kia là tạp chí.' },
          jp: 'あれは 雑誌です。',
          ruby: [
            { base: '雑', reading: 'ざっ' },
            { base: '誌', reading: 'し' }
          ]
        },
        {
          prompt: { en: 'This is a notebook.', vi: 'Đây là vở.' },
          jp: 'これは ノートです。'
        },
        {
          prompt: { en: 'That is a TV.', vi: 'Đó là tivi.' },
          jp: 'それは テレビです。'
        },
        {
          prompt: { en: 'That over there is a car.', vi: 'Cái kia là xe hơi.' },
          jp: 'あれは 車です。',
          ruby: [{ base: '車', reading: 'くるま' }]
        }
      ]
    },
    {
      pattern: 'この / その / あの N',
      items: [
        {
          prompt: { en: 'This newspaper is mine.', vi: 'Tờ báo này là của tôi.' },
          jp: 'この 新聞は 私のです。',
          ruby: [
            { base: '新', reading: 'しん' },
            { base: '聞', reading: 'ぶん' },
            { base: '私', reading: 'わたし' }
          ]
        },
        {
          prompt: { en: "That bag is Alex's.", vi: 'Cái cặp đó là của anh Alex.' },
          jp: 'その かばんは アレックスさんのです。'
        },
        {
          prompt: { en: "That umbrella over there is Maria's.", vi: 'Cái ô kia là của Maria.' },
          jp: 'あの 傘は マリアさんのです。',
          ruby: [{ base: '傘', reading: 'かさ' }]
        },
        {
          prompt: { en: "This pencil is Yuki's.", vi: 'Cây bút chì này là của bé Yuki.' },
          jp: 'この 鉛筆は ゆきちゃんのです。',
          ruby: [
            { base: '鉛', reading: 'えん' },
            { base: '筆', reading: 'ぴつ' }
          ]
        },
        {
          prompt: { en: 'That watch is a souvenir.', vi: 'Chiếc đồng hồ đó là quà.' },
          jp: 'その 時計は お土産です。',
          ruby: [
            { base: '時', reading: 'と' },
            { base: '計', reading: 'けい' },
            { base: '土', reading: 'み' },
            { base: '産', reading: 'やげ' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 の N2',
      items: [
        {
          prompt: { en: 'This is a Japanese dictionary.', vi: 'Đây là từ điển tiếng Nhật.' },
          jp: 'これは 日本語の 辞書です。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '辞', reading: 'じ' },
            { base: '書', reading: 'しょ' }
          ]
        },
        {
          prompt: { en: 'That is an English newspaper.', vi: 'Đó là báo tiếng Anh.' },
          jp: 'それは 英語の 新聞です。',
          ruby: [
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' },
            { base: '新', reading: 'しん' },
            { base: '聞', reading: 'ぶん' }
          ]
        },
        {
          prompt: { en: "This is Alex's business card.", vi: 'Đây là danh thiếp của anh Alex.' },
          jp: 'これは アレックスさんの 名刺です。',
          ruby: [
            { base: '名', reading: 'めい' },
            { base: '刺', reading: 'し' }
          ]
        },
        {
          prompt: { en: 'That over there is a Japanese automobile.', vi: 'Cái kia là ô tô Nhật.' },
          jp: 'あれは 日本の 自動車です。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '自', reading: 'じ' },
            { base: '動', reading: 'どう' },
            { base: '車', reading: 'しゃ' }
          ]
        },
        {
          prompt: { en: "This is Yuki's pocket notebook.", vi: 'Đây là sổ tay của bé Yuki.' },
          jp: 'これは ゆきちゃんの 手帳です。',
          ruby: [
            { base: '手', reading: 'て' },
            { base: '帳', reading: 'ちょう' }
          ]
        }
      ]
    },
    {
      pattern: 'N は 何 ですか',
      patternRuby: [{ base: '何', reading: 'なん' }],
      items: [
        {
          prompt: { en: 'What is this?', vi: 'Cái này là gì?' },
          jp: 'これは 何ですか。',
          ruby: [{ base: '何', reading: 'なん' }]
        },
        {
          prompt: { en: 'What is that key for?', vi: 'Chìa khóa đó là chìa khóa gì?' },
          jp: 'その 鍵は 何の 鍵ですか。',
          ruby: [
            { base: '鍵', reading: 'かぎ' },
            { base: '何', reading: 'なん' },
            { base: '鍵', reading: 'かぎ' }
          ]
        },
        {
          prompt: { en: 'What is that over there?', vi: 'Cái kia là gì?' },
          jp: 'あれは 何ですか。',
          ruby: [{ base: '何', reading: 'なん' }]
        },
        {
          prompt: { en: 'What is this card?', vi: 'Thẻ này là gì?' },
          jp: 'この カードは 何ですか。',
          ruby: [{ base: '何', reading: 'なん' }]
        },
        {
          prompt: {
            en: 'What is that? ...It is a Japanese sweet.',
            vi: 'Đó là cái gì vậy? ...Là bánh kẹo Nhật.'
          },
          jp: 'それは 何ですか。……日本の お菓子です。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '菓', reading: 'か' },
            { base: '子', reading: 'し' }
          ]
        }
      ]
    },
    {
      pattern: 'はい、そうです / いいえ、違います',
      patternRuby: [{ base: '違', reading: 'ちが' }],
      items: [
        {
          prompt: { en: 'Is that a camera?', vi: 'Đó là máy ảnh phải không?' },
          jp: 'それは カメラですか。'
        },
        {
          prompt: {
            en: 'Is this your umbrella? ...Yes, it is.',
            vi: 'Đây là ô của anh à? ...Vâng, đúng vậy.'
          },
          jp: 'これは あなたの 傘ですか。……はい、そうです。',
          ruby: [{ base: '傘', reading: 'かさ' }]
        },
        {
          prompt: { en: 'Is this a radio?', vi: 'Đây là radio phải không?' },
          jp: 'これは ラジオですか。'
        },
        {
          prompt: {
            en: "Is that Mr. Tanaka's bag? ...No, it is not.",
            vi: 'Đó là cặp của anh Tanaka à? ...Không, không phải.'
          },
          jp: 'それは 田中さんの かばんですか。……いいえ、違います。',
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '違', reading: 'ちが' }
          ]
        },
        {
          prompt: {
            en: 'Is that a CD? ...No, it is a tape.',
            vi: 'Đó là đĩa CD à? ...Không phải, là băng cát-xét.'
          },
          jp: 'それは CDですか。……いいえ、違います。テープです。',
          ruby: [{ base: '違', reading: 'ちが' }]
        }
      ]
    },
    {
      pattern: '～か、～か',
      items: [
        {
          prompt: {
            en: 'Is this a ballpoint pen or a mechanical pencil?',
            vi: 'Đây là bút bi hay bút chì bấm?'
          },
          jp: 'これは ボールペンですか、シャープペンシルですか。'
        },
        {
          prompt: {
            en: 'Is that a Japanese book or an English book? ...It is an English book.',
            vi: 'Đó là sách tiếng Nhật hay sách tiếng Anh? ...Sách tiếng Anh.'
          },
          jp: 'それは 日本語の 本ですか、英語の 本ですか。……英語の 本です。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '本', reading: 'ほん' },
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' },
            { base: '本', reading: 'ほん' },
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' },
            { base: '本', reading: 'ほん' }
          ]
        },
        {
          prompt: { en: 'Is that a chair or a desk?', vi: 'Đó là ghế hay bàn?' },
          jp: 'それは 椅子ですか、机ですか。',
          ruby: [
            { base: '椅', reading: 'い' },
            { base: '子', reading: 'す' },
            { base: '机', reading: 'つくえ' }
          ]
        },
        {
          prompt: {
            en: 'Is this "a" or "o"? ...It is "o".',
            vi: 'Đây là chữ "a" hay chữ "o"? ...Chữ "o".'
          },
          jp: 'これは「あ」ですか、「お」ですか。……「お」です。'
        },
        {
          prompt: {
            en: 'Is that over there a tape recorder or a computer?',
            vi: 'Cái kia là máy ghi âm hay máy tính?'
          },
          jp: 'あれは テープレコーダーですか、コンピューターですか。'
        }
      ]
    },
    {
      pattern: 'お～',
      items: [
        {
          prompt: { en: 'This is a souvenir.', vi: 'Đây là quà.' },
          jp: 'これは お土産です。',
          ruby: [
            { base: '土', reading: 'み' },
            { base: '産', reading: 'やげ' }
          ]
        },
        {
          prompt: { en: 'This chocolate is a souvenir.', vi: 'Sô-cô-la này là quà.' },
          jp: 'この チョコレートは お土産です。',
          ruby: [
            { base: '土', reading: 'み' },
            { base: '産', reading: 'やげ' }
          ]
        },
        {
          prompt: {
            en: 'This is Japanese tea. Please have some.',
            vi: 'Đây là trà Nhật. Mời anh.'
          },
          jp: 'これは 日本の お茶です。どうぞ。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '茶', reading: 'ちゃ' }
          ]
        },
        {
          prompt: {
            en: 'These are sweets. Please share them, everyone.',
            vi: 'Đây là bánh kẹo. Mời mọi người cùng ăn.'
          },
          jp: 'これは お菓子です。皆さんで どうぞ。',
          ruby: [
            { base: '菓', reading: 'か' },
            { base: '子', reading: 'し' },
            { base: '皆', reading: 'みな' }
          ]
        },
        {
          prompt: { en: 'Is that a souvenir?', vi: 'Đó là quà phải không?' },
          jp: 'それは お土産ですか。',
          ruby: [
            { base: '土', reading: 'み' },
            { base: '産', reading: 'やげ' }
          ]
        }
      ]
    },
    {
      pattern: 'そうですか',
      items: [
        {
          prompt: {
            en: 'That person is the new teacher. ...Oh, I see.',
            vi: 'Người kia là thầy giáo mới. ...Thế à.'
          },
          jp: 'あの 人は 新しい 先生です。……そうですか。',
          ruby: [
            { base: '人', reading: 'ひと' },
            { base: '新', reading: 'あたら' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: {
            en: 'This bag is mine. ...Oh, I see.',
            vi: 'Cái cặp này là của tôi. ...Thế à.'
          },
          jp: 'この かばんは 私のです。……そうですか。',
          ruby: [{ base: '私', reading: 'わたし' }]
        },
        {
          prompt: {
            en: 'This is a Japanese dictionary. ...I see. That is handy.',
            vi: 'Đây là từ điển tiếng Nhật. ...Thế à. Tiện nhỉ.'
          },
          jp: 'これは 日本語の 辞書です。……そうですか。便利ですね。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '辞', reading: 'じ' },
            { base: '書', reading: 'しょ' },
            { base: '便', reading: 'べん' },
            { base: '利', reading: 'り' }
          ]
        },
        {
          prompt: {
            en: 'Mr. Yamada is a bank employee. ...Oh, I see.',
            vi: 'Anh Yamada là nhân viên ngân hàng. ...Thế à.'
          },
          jp: '山田さんは 銀行員です。……そうですか。',
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '田', reading: 'だ' },
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '員', reading: 'いん' }
          ]
        },
        {
          prompt: {
            en: "This is Alex's key. ...I see. Thank you.",
            vi: 'Đây là chìa khóa của Alex. ...Thế à. Cảm ơn anh.'
          },
          jp: 'これは アレックスさんの 鍵です。……そうですか。ありがとう ございます。',
          ruby: [{ base: '鍵', reading: 'かぎ' }]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'Um, excuse me.', vi: 'À, xin lỗi.' },
      jp: 'あのう、すみません。'
    },
    {
      prompt: { en: 'What is this?', vi: 'Cái này là gì?' },
      jp: 'これは何ですか。',
      ruby: [{ base: '何', reading: 'なん' }]
    },
    {
      prompt: { en: 'I see.', vi: 'Vậy à. / Ra vậy.' },
      jp: 'そうですか。'
    },
    {
      prompt: { en: 'Thank you very much.', vi: 'Cảm ơn rất nhiều.' },
      jp: 'どうも ありがとうございます。'
    },
    {
      prompt: { en: 'Here you are. / Please.', vi: 'Mời bạn. / Xin mời.' },
      jp: 'どうぞ。'
    },
    {
      prompt: { en: 'Huh? (surprised, did not expect it)', vi: 'Hả? (nghe điều không ngờ)' },
      jp: 'えっ。'
    },
    {
      prompt: { en: 'Oh! (just realized something)', vi: 'Ồ! (vừa nhận ra điều gì)' },
      jp: 'あ。'
    },
    {
      prompt: {
        en: 'I look forward to your help from now on.',
        vi: 'Từ nay mong được anh/chị giúp đỡ.'
      },
      jp: 'これから お世話に なります。',
      ruby: [
        { base: '世', reading: 'せ' },
        { base: '話', reading: 'わ' }
      ]
    },
    {
      prompt: {
        en: 'The pleasure is mine. (reply to どうぞよろしく)',
        vi: 'Chính tôi mới phải nói thế. (đáp lại どうぞよろしく)'
      },
      jp: 'こちらこそ どうぞ よろしく おねがいします。'
    }
  ]
};
