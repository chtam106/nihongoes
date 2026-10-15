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
          prompt: { en: 'What is that key?', vi: 'Chìa khóa đó là gì?' },
          jp: 'その 鍵は 何ですか。',
          ruby: [
            { base: '鍵', reading: 'かぎ' },
            { base: '何', reading: 'なん' }
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
          prompt: { en: 'This is a telephone card.', vi: 'Đây là thẻ điện thoại.' },
          jp: 'これは テレホンカードです。'
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
          prompt: { en: 'Yes, it is.', vi: 'Vâng, đúng rồi.' },
          jp: 'はい、そうです。'
        },
        {
          prompt: { en: 'Is this a radio?', vi: 'Đây là radio phải không?' },
          jp: 'これは ラジオですか。'
        },
        {
          prompt: { en: 'No, it is not.', vi: 'Không, không phải.' },
          jp: 'いいえ、違います。',
          ruby: [{ base: '違', reading: 'ちが' }]
        },
        {
          prompt: {
            en: 'Is that a CD? No, it is a tape.',
            vi: 'Đó là đĩa CD phải không? Không, là băng.'
          },
          jp: 'それは CDですか。いいえ、違います。テープです。',
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
          prompt: { en: 'It is a ballpoint pen.', vi: 'Là bút bi.' },
          jp: 'ボールペンです。'
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
          prompt: { en: 'It is a desk.', vi: 'Là bàn.' },
          jp: '机です。',
          ruby: [{ base: '机', reading: 'つくえ' }]
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
          prompt: { en: 'That coffee is a souvenir.', vi: 'Cà phê đó là quà.' },
          jp: 'その コーヒーは お土産です。',
          ruby: [
            { base: '土', reading: 'み' },
            { base: '産', reading: 'やげ' }
          ]
        },
        {
          prompt: { en: 'This is a souvenir from Japan.', vi: 'Đây là quà từ Nhật.' },
          jp: 'これは 日本の お土産です。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '土', reading: 'み' },
            { base: '産', reading: 'やげ' }
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
          prompt: { en: 'I see.', vi: 'Vậy à.' },
          jp: 'そうですか。'
        },
        {
          prompt: { en: 'This is my bag. I see.', vi: 'Cái cặp này là của tôi. Vậy à.' },
          jp: 'この かばんは 私のです。そうですか。',
          ruby: [{ base: '私', reading: 'わたし' }]
        },
        {
          prompt: {
            en: 'That is a Japanese dictionary. I see.',
            vi: 'Đó là từ điển tiếng Nhật. Vậy à.'
          },
          jp: 'それは 日本語の 辞書です。そうですか。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '辞', reading: 'じ' },
            { base: '書', reading: 'しょ' }
          ]
        },
        {
          prompt: {
            en: 'That over there is a computer. I see.',
            vi: 'Cái kia là máy tính. Vậy à.'
          },
          jp: 'あれは コンピューターです。そうですか。'
        },
        {
          prompt: { en: "This is Alex's key. I see.", vi: 'Đây là chìa khóa của anh Alex. Vậy à.' },
          jp: 'これは アレックスさんの 鍵です。そうですか。',
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
