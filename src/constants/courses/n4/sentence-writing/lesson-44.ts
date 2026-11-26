import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson44SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-ます すぎます / Adj すぎます',
      items: [
        {
          prompt: {
            en: 'I drank too much last night, and my head hurts.',
            vi: 'Tối qua uống quá chén nên giờ đau đầu.'
          },
          jp: 'ゆうべ 飲みすぎて、頭が 痛いです。',
          ruby: [
            { base: '飲', reading: 'の' },
            { base: '頭', reading: 'あたま' },
            { base: '痛', reading: 'いた' }
          ]
        },
        {
          prompt: {
            en: 'I laughed so much that my stomach hurt.',
            vi: 'Cười nhiều quá đến đau cả bụng.'
          },
          jp: '笑いすぎて、おなかが 痛く なりました。',
          ruby: [
            { base: '笑', reading: 'わら' },
            { base: '痛', reading: 'いた' }
          ]
        },
        {
          prompt: {
            en: 'I slept too much on the weekend and actually felt more tired.',
            vi: 'Cuối tuần ngủ nhiều quá nên lại thấy mệt hơn.'
          },
          jp: '週末に 寝すぎて、かえって 疲れました。',
          ruby: [
            { base: '週', reading: 'しゅう' },
            { base: '末', reading: 'まつ' },
            { base: '寝', reading: 'ね' },
            { base: '疲', reading: 'つか' }
          ]
        },
        {
          prompt: {
            en: 'This coffee is too strong to drink.',
            vi: 'Cà phê này đặc quá, không uống được.'
          },
          jp: 'この コーヒーは 濃すぎて 飲めません。',
          ruby: [
            { base: '濃', reading: 'こ' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: {
            en: 'This soup is a bit too bland, is it not?',
            vi: 'Món canh này hơi nhạt quá nhỉ.'
          },
          jp: 'この スープは 少し 薄すぎますね。',
          ruby: [
            { base: '少', reading: 'すこ' },
            { base: '薄', reading: 'うす' }
          ]
        },
        {
          prompt: {
            en: 'This book is too thick to fit in my bag.',
            vi: 'Quyển sách này dày quá, không vừa cặp.'
          },
          jp: 'この 本は 厚すぎて、かばんに 入りません。',
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '厚', reading: 'あつ' },
            { base: '入', reading: 'はい' }
          ]
        },
        {
          prompt: {
            en: 'This room is too small to fit a bed.',
            vi: 'Phòng này chật quá, không kê được giường.'
          },
          jp: 'この 部屋は 狭すぎて、ベッドが 置けません。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '狭', reading: 'せま' },
            { base: '置', reading: 'お' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ます やすい / V-ます にくい',
      items: [
        {
          prompt: {
            en: 'This shirt is thin and dries quickly.',
            vi: 'Áo sơ mi này mỏng nên mau khô.'
          },
          jp: 'この シャツは 薄くて 乾きやすいです。',
          ruby: [
            { base: '薄', reading: 'うす' },
            { base: '乾', reading: 'かわ' }
          ]
        },
        {
          prompt: {
            en: 'The floor gets slippery on rainy days, so please be careful.',
            vi: 'Ngày mưa sàn dễ trơn, hãy cẩn thận.'
          },
          jp: '雨の 日は 床が 滑りやすいですから、気を つけて ください。',
          ruby: [
            { base: '雨', reading: 'あめ' },
            { base: '日', reading: 'ひ' },
            { base: '床', reading: 'ゆか' },
            { base: '滑', reading: 'すべ' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'Accidents happen easily at this intersection.',
            vi: 'Ngã tư này dễ xảy ra tai nạn.'
          },
          jp: 'この 交差点は 事故が 起きやすいです。',
          ruby: [
            { base: '交', reading: 'こう' },
            { base: '差', reading: 'さ' },
            { base: '点', reading: 'てん' },
            { base: '事', reading: 'じ' },
            { base: '故', reading: 'こ' },
            { base: '起', reading: 'お' }
          ]
        },
        {
          prompt: {
            en: 'This pen is light and easy to write with.',
            vi: 'Cây bút này nhẹ nên dễ viết.'
          },
          jp: 'この ペンは 軽くて 書きやすいです。',
          ruby: [
            { base: '軽', reading: 'かる' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'This map has large print and is easy to read.',
            vi: 'Tấm bản đồ này chữ to nên dễ xem.'
          },
          jp: 'この 地図は 字が 大きくて 見やすいです。',
          ruby: [
            { base: '地', reading: 'ち' },
            { base: '図', reading: 'ず' },
            { base: '字', reading: 'じ' },
            { base: '大', reading: 'おお' },
            { base: '見', reading: 'み' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ます にくい',
      items: [
        {
          prompt: {
            en: 'This coat does not get wet easily in the rain.',
            vi: 'Chiếc áo khoác này khó bị ướt khi mưa.'
          },
          jp: 'この コートは 雨に ぬれにくいです。',
          ruby: [{ base: '雨', reading: 'あめ' }]
        },
        {
          prompt: { en: 'These scissors are hard to use.', vi: 'Cái kéo này khó dùng.' },
          jp: 'この はさみは 使いにくいです。',
          ruby: [{ base: '使', reading: 'つか' }]
        },
        {
          prompt: { en: 'Japanese names are hard to remember.', vi: 'Tên người Nhật khó nhớ.' },
          jp: '日本人の 名前は 覚えにくいです。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '人', reading: 'じん' },
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' },
            { base: '覚', reading: 'おぼ' }
          ]
        },
        {
          prompt: {
            en: 'This cup is hard to break, so it is safe.',
            vi: 'Cốc này khó vỡ nên an toàn.'
          },
          jp: 'この コップは 割れにくくて、安全です。',
          ruby: [
            { base: '割', reading: 'わ' },
            { base: '安', reading: 'あん' },
            { base: '全', reading: 'ぜん' }
          ]
        },
        {
          prompt: {
            en: 'This road is hard to walk on, so it is dangerous.',
            vi: 'Đường này khó đi nên nguy hiểm.'
          },
          jp: 'この 道は 歩きにくくて、危険です。',
          ruby: [
            { base: '道', reading: 'みち' },
            { base: '歩', reading: 'ある' },
            { base: '危', reading: 'き' },
            { base: '険', reading: 'けん' }
          ]
        }
      ]
    },
    {
      pattern: 'N を Adj く/に します',
      items: [
        {
          prompt: {
            en: 'I made the room comfortable with the air conditioner.',
            vi: 'Tôi bật điều hòa cho phòng dễ chịu.'
          },
          jp: 'エアコンで 部屋を 快適に しました。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '快', reading: 'かい' },
            { base: '適', reading: 'てき' }
          ]
        },
        {
          prompt: {
            en: 'I will double the amount of side dishes.',
            vi: 'Tôi sẽ tăng lượng thức ăn lên gấp đôi.'
          },
          jp: 'おかずの 量を 2倍に します。',
          ruby: [
            { base: '量', reading: 'りょう' },
            { base: '倍', reading: 'ばい' }
          ]
        },
        {
          prompt: {
            en: 'Please make the coffee a little weaker.',
            vi: 'Pha cà phê loãng hơn một chút giúp tôi.'
          },
          jp: 'コーヒーを もう 少し 薄く して ください。',
          ruby: [
            { base: '少', reading: 'すこ' },
            { base: '薄', reading: 'うす' }
          ]
        },
        {
          prompt: { en: 'Please turn the TV down.', vi: 'Hãy vặn nhỏ tiếng ti vi.' },
          jp: 'テレビの 音を 小さく して ください。',
          ruby: [
            { base: '音', reading: 'おと' },
            { base: '小', reading: 'ちい' }
          ]
        },
        {
          prompt: {
            en: 'Our baby is coming, so we made the room safe.',
            vi: 'Sắp có em bé nên chúng tôi đã làm cho căn phòng an toàn.'
          },
          jp: '子どもが 生まれるので、部屋を 安全に しました。',
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '生', reading: 'う' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '安', reading: 'あん' },
            { base: '全', reading: 'ぜん' }
          ]
        }
      ]
    },
    {
      pattern: 'N に します',
      items: [
        {
          prompt: {
            en: 'I will take a single room.',
            vi: 'Tôi chọn phòng đơn.'
          },
          jp: '部屋は シングルに します。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' }
          ]
        },
        {
          prompt: {
            en: 'I will take a twin room.',
            vi: 'Tôi chọn phòng đôi.'
          },
          jp: '部屋は ツインに します。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' }
          ]
        },
        {
          prompt: { en: 'I will have coffee to drink.', vi: 'Đồ uống thì tôi chọn cà phê.' },
          jp: '飲み物は コーヒーに します。',
          ruby: [
            { base: '飲', reading: 'の' },
            { base: '物', reading: 'もの' }
          ]
        },
        {
          prompt: {
            en: 'We will hold the wedding on a lucky day.',
            vi: 'Đám cưới sẽ tổ chức vào ngày tốt.'
          },
          jp: '結婚式は 縁起の いい 日に します。',
          ruby: [
            { base: '結', reading: 'けっ' },
            { base: '婚', reading: 'こん' },
            { base: '式', reading: 'しき' },
            { base: '縁', reading: 'えん' },
            { base: '起', reading: 'ぎ' },
            { base: '日', reading: 'ひ' }
          ]
        },
        {
          prompt: {
            en: 'Then let us make the meeting Friday.',
            vi: 'Vậy thì họp vào thứ Sáu nhé.'
          },
          jp: 'じゃ、会議は 金曜日に しましょう。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '金', reading: 'きん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'What would you like to have done?',
        vi: 'Chị muốn làm gì?'
      },
      jp: 'どう なさいますか。'
    },
    {
      prompt: {
        en: 'A haircut.',
        vi: 'Cắt tóc.'
      },
      jp: 'カットをお願いします。',
      ruby: [{ base: '願', reading: 'ねが' }]
    },
    {
      prompt: {
        en: 'Please shampoo my hair.',
        vi: 'Xin gội đầu giúp.'
      },
      jp: 'シャンプーを お願いします。',
      ruby: [{ base: '願', reading: 'ねが' }]
    },
    {
      prompt: {
        en: 'How would you like it done?',
        vi: 'Chị muốn cắt như thế nào?'
      },
      jp: 'どういう ふうに なさいますか。'
    },
    {
      prompt: {
        en: 'Please make it short.',
        vi: 'Xin cắt ngắn.'
      },
      jp: 'ショートに してください。'
    },
    {
      prompt: {
        en: 'Please make it like this photo.',
        vi: 'Xin cắt như tấm ảnh này.'
      },
      jp: 'この 写真みたいに して ください。',
      ruby: [
        { base: '写', reading: 'しゃ' },
        { base: '真', reading: 'しん' }
      ]
    },
    {
      prompt: {
        en: 'Is this alright?',
        vi: 'Như thế này được chưa ạ?'
      },
      jp: 'これで よろしいでしょうか。'
    },
    {
      prompt: {
        en: 'Thank you, we are finished.',
        vi: 'Xong rồi ạ, cám ơn chị.'
      },
      jp: '［どうも］ お疲れさまでした。',
      ruby: [{ base: '疲', reading: 'つか' }]
    }
  ]
};
