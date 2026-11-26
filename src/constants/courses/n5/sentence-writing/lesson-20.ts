import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson20SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'Plain forms (V / Adj / N だ)',
      items: [
        {
          prompt: {
            en: 'You are going to America? Do you need a visa? ...Yeah, I do.',
            vi: 'Đi Mỹ à? Có cần visa không? ...Ừ, cần.'
          },
          jp: 'アメリカへ 行くの？ビザが 要る？……うん、要る。',
          ruby: [
            { base: '行', reading: 'い' },
            { base: '要', reading: 'い' },
            { base: '要', reading: 'い' }
          ]
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
            en: 'I am free today, so I am going to see a movie. (casual)',
            vi: 'Hôm nay rảnh nên tôi đi xem phim. (thân mật)'
          },
          jp: '今日は 暇だから、映画を 見に 行く。',
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '暇', reading: 'ひま' },
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' },
            { base: '見', reading: 'み' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'I am really busy this week. (casual)',
            vi: 'Tuần này bận kinh khủng. (thân mật)'
          },
          jp: '今週は すごく 忙しい。',
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '週', reading: 'しゅう' },
            { base: '忙', reading: 'いそが' }
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
          prompt: {
            en: 'Prices are high in Tokyo. (casual)',
            vi: 'Tokyo vật giá đắt đỏ. (thân mật)'
          },
          jp: '東京は 物価が 高い。',
          ruby: [
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '物', reading: 'ぶっ' },
            { base: '価', reading: 'か' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          prompt: {
            en: 'Will you look up this word? ...Yeah, I will.',
            vi: 'Từ này, tra không? ...Ừ, tra.'
          },
          jp: 'この 言葉、調べる？……うん、調べる。',
          ruby: [
            { base: '言', reading: 'こと' },
            { base: '葉', reading: 'ば' },
            { base: '調', reading: 'しら' },
            { base: '調', reading: 'しら' }
          ]
        },
        {
          prompt: {
            en: 'Will you get this watch repaired? ...No. I will buy a new one.',
            vi: 'Cái đồng hồ này, sửa không? ...Không. Mua cái mới.'
          },
          jp: 'この 時計、修理する？……ううん、しない。新しいのを 買う。',
          ruby: [
            { base: '時', reading: 'と' },
            { base: '計', reading: 'けい' },
            { base: '修', reading: 'しゅう' },
            { base: '理', reading: 'り' },
            { base: '新', reading: 'あたら' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'This kimono is pretty.', vi: 'Kimono này đẹp.' },
          jp: 'この 着物は きれいだ。',
          ruby: [
            { base: '着', reading: 'き' },
            { base: '物', reading: 'もの' }
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
          prompt: { en: 'Want some coffee? (casual)', vi: 'Uống cà phê không? (thân mật)' },
          jp: 'コーヒー 飲む？',
          ruby: [{ base: '飲', reading: 'の' }]
        },
        {
          prompt: {
            en: 'What time are you coming tomorrow? (casual)',
            vi: 'Mai mấy giờ đến? (thân mật)'
          },
          jp: 'あした 何時に 来る？',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '時', reading: 'じ' },
            { base: '来', reading: 'く' }
          ]
        },
        {
          prompt: {
            en: 'What did you all eat together the other day? (casual)',
            vi: 'Hôm trước mọi người ăn gì vậy? (thân mật)'
          },
          jp: 'この 間 みんなで 何 食べた？',
          ruby: [
            { base: '間', reading: 'あいだ' },
            { base: '何', reading: 'なに' },
            { base: '食', reading: 'た' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form ＋ けど',
      items: [
        {
          prompt: {
            en: 'I want this book, but it is expensive. (casual)',
            vi: 'Muốn cuốn sách này nhưng đắt quá. (thân mật)'
          },
          jp: 'この 本、ほしいけど、高い。',
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          prompt: {
            en: 'I want to get it repaired, but I have no time. (casual)',
            vi: 'Muốn sửa nhưng không có thời gian. (thân mật)'
          },
          jp: '修理したいけど、時間が ない。',
          ruby: [
            { base: '修', reading: 'しゅう' },
            { base: '理', reading: 'り' },
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
      jp: 'お腹が いっぱいです。',
      ruby: [{ base: '腹', reading: 'なか' }]
    }
  ]
};
