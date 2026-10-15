import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson20SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'Plain forms (V / Adj / N だ)',
      items: [
        {
          prompt: { en: 'I need a visa.', vi: 'Tôi cần visa.' },
          jp: 'ビザが 要る。',
          ruby: [{ base: '要', reading: 'い' }]
        },
        {
          prompt: {
            en: 'Tanaka is an office worker.',
            vi: 'Tanaka là nhân viên văn phòng.'
          },
          jp: '田中くんは サラリーマンだ。',
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' }
          ]
        },
        {
          prompt: {
            en: 'I am free today. (male, casual)',
            vi: 'Hôm nay tôi rảnh. (nam, thân mật)'
          },
          jp: '僕は 暇だ。',
          ruby: [
            { base: '僕', reading: 'ぼく' },
            { base: '暇', reading: 'ひま' }
          ]
        },
        {
          prompt: { en: 'You are busy. (casual)', vi: 'Cậu bận đó. (thân mật)' },
          jp: '君は 忙しい。',
          ruby: [
            { base: '君', reading: 'きみ' },
            { base: '忙', reading: 'いそ' }
          ]
        },
        {
          prompt: { en: 'This word is difficult.', vi: 'Từ này khó.' },
          jp: 'この 言葉は 難しい。',
          ruby: [
            { base: '言', reading: 'こと' },
            { base: '葉', reading: 'ば' },
            { base: '難', reading: 'むずか' }
          ]
        },
        {
          prompt: { en: 'Prices are high.', vi: 'Giá cả cao.' },
          jp: '物価は 高い。',
          ruby: [
            { base: '物', reading: 'ぶっ' },
            { base: '価', reading: 'か' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          prompt: { en: 'Yeah, I will look it up.', vi: 'Ừ, tôi sẽ kiểm tra.' },
          jp: 'うん、調べる。',
          ruby: [{ base: '調', reading: 'しら' }]
        },
        {
          prompt: { en: 'No, I will not repair it.', vi: 'Không, tôi sẽ không sửa.' },
          jp: 'ううん、修理しない。',
          ruby: [
            { base: '修', reading: 'しゅう' },
            { base: '理', reading: 'り' }
          ]
        },
        {
          prompt: { en: 'This kimono is pretty.', vi: 'Kimono này đẹp.' },
          jp: 'この 着物は きれいだ。',
          ruby: [
            { base: '着', reading: 'き' },
            { base: '物', reading: 'もの' }
          ]
        },
        {
          prompt: {
            en: 'The beginning of the movie is interesting.',
            vi: 'Phần đầu của phim hay.'
          },
          jp: '映画の 初めは おもしろい。',
          ruby: [
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' },
            { base: '初', reading: 'はじ' }
          ]
        },
        {
          prompt: { en: 'The end is short.', vi: 'Phần cuối ngắn.' },
          jp: '終わりは 短い。',
          ruby: [
            { base: '終', reading: 'お' },
            { base: '短', reading: 'みじか' }
          ]
        }
      ]
    },
    {
      pattern: 'Particle omission',
      items: [
        {
          prompt: {
            en: 'Tanaka, will you call? (casual, particles dropped)',
            vi: 'Tanaka, cậu gọi điện chứ? (thân mật, bỏ trợ từ)'
          },
          jp: '田中くん、電話 する？',
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        },
        {
          prompt: { en: 'Which one will you buy?', vi: 'Cậu mua cái nào?' },
          jp: 'どっち 買う？',
          ruby: [{ base: '買', reading: 'か' }]
        },
        {
          prompt: {
            en: 'Are you coming this way? (casual)',
            vi: 'Cậu đến phía này à? (thân mật)'
          },
          jp: 'こっち 来る？',
          ruby: [{ base: '来', reading: 'く' }]
        },
        {
          prompt: {
            en: 'Will you look over there? (casual, near the listener)',
            vi: 'Cậu nhìn phía đó chứ? (thân mật)'
          },
          jp: 'そっち 見る？',
          ruby: [{ base: '見', reading: 'み' }]
        },
        {
          prompt: {
            en: 'Will you fix that over there? (casual)',
            vi: 'Cậu sửa cái đằng kia chứ? (thân mật)'
          },
          jp: 'あっち 直す？',
          ruby: [{ base: '直', reading: 'なお' }]
        },
        {
          prompt: {
            en: 'Did you all eat together the other day? (casual)',
            vi: 'Hôm nọ các cậu ăn cùng nhau chưa? (thân mật)'
          },
          jp: 'あの間 みんなで 食べた？',
          ruby: [
            { base: '間', reading: 'あいだ' },
            { base: '食', reading: 'た' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form ＋ けど',
      items: [
        {
          prompt: { en: 'I need it, but it is expensive.', vi: 'Tôi cần, nhưng nó đắt.' },
          jp: '要るけど、高い。',
          ruby: [
            { base: '要', reading: 'い' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          prompt: {
            en: 'I will fix it, but I have no time.',
            vi: 'Tôi sẽ sửa, nhưng không có thời gian.'
          },
          jp: '直すけど、時間がない。',
          ruby: [
            { base: '直', reading: 'なお' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' }
          ]
        },
        {
          prompt: {
            en: 'Prices are high, but it is convenient.',
            vi: 'Giá cả cao, nhưng tiện.'
          },
          jp: '物価は 高いけど、便利だ。',
          ruby: [
            { base: '物', reading: 'ぶっ' },
            { base: '価', reading: 'か' },
            { base: '高', reading: 'たか' },
            { base: '便', reading: 'べん' },
            { base: '利', reading: 'り' }
          ]
        },
        {
          prompt: { en: 'I am busy, but I will go.', vi: 'Tôi bận, nhưng vẫn đi.' },
          jp: '忙しいけど、行く。',
          ruby: [
            { base: '忙', reading: 'いそ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'I do not need a visa, but I need a passport.',
            vi: 'Không cần visa, nhưng cần hộ chiếu.'
          },
          jp: 'ビザは 要らないけど、パスポートは 要る。',
          ruby: [
            { base: '要', reading: 'い' },
            { base: '要', reading: 'い' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'Are you going back to your country?', vi: 'Về nước à?' },
      jp: '国へ 帰るの？',
      ruby: [
        { base: '国', reading: 'くに' },
        { base: '帰', reading: 'かえ' }
      ]
    },
    {
      prompt: { en: 'What will you do?', vi: 'Làm sao đây? / Sao?' },
      jp: 'どうするの？'
    },
    {
      prompt: { en: 'What shall I do?', vi: 'Làm gì bây giờ nhỉ?' },
      jp: 'どうしようかな。'
    },
    {
      prompt: { en: 'if you like', vi: 'nếu anh/chị thích thì' },
      jp: 'よかったら'
    },
    {
      prompt: { en: 'various, various things', vi: 'nhiều thứ, đủ thứ' },
      jp: 'いろいろ'
    },
    {
      prompt: { en: 'I am full.', vi: 'No bụng rồi.' },
      jp: 'お腹が いっぱい です。',
      ruby: [{ base: '腹', reading: 'なか' }]
    }
  ]
};
