import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson14SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-て ください',
      items: [
        {
          prompt: {
            en: 'It is dark. Please turn on the light.',
            vi: 'Tối quá nhỉ. Hãy bật đèn lên.'
          },
          jp: '暗いですね。電気を 付けて ください。',
          ruby: [
            { base: '暗', reading: 'くら' },
            { base: '電', reading: 'でん' },
            { base: '気', reading: 'き' },
            { base: '付', reading: 'つ' }
          ]
        },
        {
          prompt: {
            en: 'It is hot, so please open the window.',
            vi: 'Nóng quá, hãy mở cửa sổ ra.'
          },
          jp: '暑いですから、窓を 開けて ください。',
          ruby: [
            { base: '暑', reading: 'あつ' },
            { base: '窓', reading: 'まど' },
            { base: '開', reading: 'あ' }
          ]
        },
        {
          prompt: { en: 'Please hurry a little.', vi: 'Hãy vội một chút.' },
          jp: 'ちょっと 急いで ください。',
          ruby: [{ base: '急', reading: 'いそ' }]
        },
        {
          prompt: { en: 'Please wait here.', vi: 'Hãy đợi ở đây.' },
          jp: 'ここで 待って ください。',
          ruby: [{ base: '待', reading: 'ま' }]
        },
        {
          prompt: { en: 'Please carry this bag.', vi: 'Hãy mang túi này giúp tôi.' },
          jp: 'この かばんを 持って ください。',
          ruby: [{ base: '持', reading: 'も' }]
        },
        {
          prompt: { en: 'Please help me.', vi: 'Hãy giúp tôi.' },
          jp: '手伝って ください。',
          ruby: [
            { base: '手', reading: 'て' },
            { base: '伝', reading: 'つだ' }
          ]
        },
        {
          prompt: { en: 'Please speak slowly.', vi: 'Hãy nói chậm.' },
          jp: 'ゆっくり 話して ください。',
          ruby: [{ base: '話', reading: 'はな' }]
        },
        {
          prompt: { en: 'Please park the car here.', vi: 'Hãy đỗ xe ở đây.' },
          jp: 'ここに 車を 止めて ください。',
          ruby: [
            { base: '車', reading: 'くるま' },
            { base: '止', reading: 'と' }
          ]
        },
        {
          prompt: { en: 'Please show me your passport.', vi: 'Hãy đưa hộ chiếu cho tôi xem.' },
          jp: 'パスポートを 見せて ください。',
          ruby: [{ base: '見', reading: 'み' }]
        },
        {
          prompt: { en: 'Please write your name.', vi: 'Hãy viết tên.' },
          jp: '名前を 書いて ください。',
          ruby: [
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'Please teach me how to use this computer.',
            vi: 'Hãy chỉ tôi cách dùng máy tính này.'
          },
          jp: 'この パソコンの 使い方を 教えて ください。',
          ruby: [
            { base: '使', reading: 'つか' },
            { base: '方', reading: 'かた' },
            { base: '教', reading: 'おし' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て います',
      items: [
        {
          prompt: { en: 'It is raining now.', vi: 'Bây giờ trời đang mưa.' },
          jp: '今 雨が 降っています。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '雨', reading: 'あめ' },
            { base: '降', reading: 'ふ' }
          ]
        },
        {
          prompt: { en: 'Yuki is using a computer.', vi: 'Yuki đang dùng máy tính.' },
          jp: 'ゆきさんは パソコンを 使っています。',
          ruby: [{ base: '使', reading: 'つか' }]
        },
        {
          prompt: { en: 'Alex is waiting at the station.', vi: 'Alex đang đợi ở nhà ga.' },
          jp: 'アレックスさんは 駅で 待っています。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '待', reading: 'ま' }
          ]
        },
        {
          prompt: { en: 'Maria is talking with a friend.', vi: 'Maria đang nói chuyện với bạn.' },
          jp: 'マリアさんは 友達と 話しています。',
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '話', reading: 'はな' }
          ]
        },
        {
          prompt: { en: 'I am photocopying documents now.', vi: 'Tôi đang phô-tô tài liệu.' },
          jp: '今 資料を コピーしています。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '資', reading: 'し' },
            { base: '料', reading: 'りょう' }
          ]
        },
        {
          prompt: {
            en: 'Tanaka is not sitting. He is standing.',
            vi: 'Anh Tanaka không ngồi. Anh ấy đang đứng.'
          },
          jp: '田中さんは 座っていません。立っています。',
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '座', reading: 'すわ' },
            { base: '立', reading: 'た' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ましょうか',
      items: [
        {
          prompt: { en: 'Shall I carry your bag?', vi: 'Tôi mang túi giúp anh/chị nhé?' },
          jp: 'かばんを 持ちましょうか。',
          ruby: [{ base: '持', reading: 'も' }]
        },
        {
          prompt: { en: 'Shall I turn on the air conditioner?', vi: 'Tôi bật điều hòa nhé?' },
          jp: 'エアコンを 付けましょうか。',
          ruby: [{ base: '付', reading: 'つ' }]
        },
        {
          prompt: { en: 'Shall I help you?', vi: 'Tôi giúp anh/chị nhé?' },
          jp: '手伝いましょうか。',
          ruby: [
            { base: '手', reading: 'て' },
            { base: '伝', reading: 'つだ' }
          ]
        },
        {
          prompt: { en: 'Shall I photocopy this map?', vi: 'Tôi phô-tô bản đồ này nhé?' },
          jp: 'この 地図を コピーしましょうか。',
          ruby: [
            { base: '地', reading: 'ち' },
            { base: '図', reading: 'ず' }
          ]
        },
        {
          prompt: {
            en: 'Shall I tell you the answer later?',
            vi: 'Sau tôi nói câu trả lời nhé?'
          },
          jp: 'あとで 答えを 教えましょうか。',
          ruby: [
            { base: '答', reading: 'こた' },
            { base: '教', reading: 'おし' }
          ]
        }
      ]
    },
    {
      pattern: 'N が V',
      items: [
        {
          prompt: { en: 'It is snowing.', vi: 'Trời đang tuyết.' },
          jp: '雪が 降っています。',
          ruby: [
            { base: '雪', reading: 'ゆき' },
            { base: '降', reading: 'ふ' }
          ]
        },
        {
          prompt: { en: 'Excuse me, there is a bit of a problem.', vi: 'Xin lỗi, có chút vấn đề.' },
          jp: 'すみません、ちょっと 問題が あります。',
          ruby: [
            { base: '問', reading: 'もん' },
            { base: '題', reading: 'だい' }
          ]
        },
        {
          prompt: { en: 'Huh? Yuki is not here.', vi: 'Ơ? Không thấy Yuki đâu nhỉ.' },
          jp: 'あれ？ゆきさんが いませんね。'
        },
        {
          prompt: { en: 'Huh? My wallet is gone.', vi: 'Ơ? Không thấy cái ví đâu.' },
          jp: 'あれ？財布が ありません。',
          ruby: [
            { base: '財', reading: 'さい' },
            { base: '布', reading: 'ふ' }
          ]
        },
        {
          prompt: { en: 'The train is here. Hurry!', vi: 'Tàu đến rồi kìa. Nhanh lên!' },
          jp: '電車が 来ましたよ。急いで ください。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '来', reading: 'き' },
            { base: '急', reading: 'いそ' }
          ]
        }
      ]
    },
    {
      pattern: 'すみませんが',
      items: [
        {
          prompt: {
            en: 'Excuse me, please pass the salt.',
            vi: 'Xin lỗi, hãy chuyển muối giúp tôi.'
          },
          jp: 'すみませんが、塩を 取って ください。',
          ruby: [
            { base: '塩', reading: 'しお' },
            { base: '取', reading: 'と' }
          ]
        },
        {
          prompt: {
            en: 'Excuse me, please show me your passport.',
            vi: 'Xin lỗi, hãy đưa hộ chiếu cho xem.'
          },
          jp: 'すみませんが、パスポートを 見せて ください。',
          ruby: [{ base: '見', reading: 'み' }]
        },
        {
          prompt: {
            en: 'Excuse me, please tell me your name.',
            vi: 'Xin lỗi, hãy cho tôi biết tên.'
          },
          jp: 'すみませんが、名前を 教えて ください。',
          ruby: [
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' },
            { base: '教', reading: 'おし' }
          ]
        },
        {
          prompt: {
            en: 'Excuse me, please wait a little more.',
            vi: 'Xin lỗi, hãy đợi thêm một chút.'
          },
          jp: 'すみませんが、もう 少し 待って ください。',
          ruby: [
            { base: '少', reading: 'すこ' },
            { base: '待', reading: 'ま' }
          ]
        },
        {
          prompt: {
            en: 'Excuse me, please teach me how to write this kanji.',
            vi: 'Xin lỗi, hãy chỉ tôi cách viết chữ Hán này.'
          },
          jp: 'すみませんが、この 漢字の 書き方を 教えて ください。',
          ruby: [
            { base: '漢', reading: 'かん' },
            { base: '字', reading: 'じ' },
            { base: '書', reading: 'か' },
            { base: '方', reading: 'かた' },
            { base: '教', reading: 'おし' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'Come on, well then (encouraging)',
        vi: 'Thôi, nào (thúc giục, khuyến khích)'
      },
      jp: 'さあ。'
    },
    {
      prompt: {
        en: 'Huh? (surprise at something unexpected)',
        vi: 'Ô? (ngạc nhiên khi thấy điều lạ)'
      },
      jp: 'あれ？'
    },
    {
      prompt: {
        en: 'Please turn right at the traffic light.',
        vi: 'Anh/Chị hãy rẽ phải ở đèn tín hiệu.'
      },
      jp: '信号を 右へ 曲がってください。',
      ruby: [
        { base: '信', reading: 'しん' },
        { base: '号', reading: 'ごう' },
        { base: '右', reading: 'みぎ' },
        { base: '曲', reading: 'ま' }
      ]
    },
    {
      prompt: { en: 'Here is the payment.', vi: 'Gửi anh tiền này.' },
      jp: 'これで お願いします。',
      ruby: [{ base: '願', reading: 'ねが' }]
    },
    {
      prompt: { en: 'change (money returned)', vi: 'tiền thừa, tiền thối lại' },
      jp: 'お釣り',
      ruby: [{ base: '釣', reading: 'つ' }]
    }
  ]
};
