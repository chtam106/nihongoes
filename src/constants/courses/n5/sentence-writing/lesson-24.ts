import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson24SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N1 に N2 を くれます',
      items: [
        {
          prompt: { en: 'My sister gave me sweets.', vi: 'Em gái cho tôi bánh kẹo.' },
          jp: '妹が 私に お菓子を くれました。',
          ruby: [
            { base: '妹', reading: 'いもうと' },
            { base: '私', reading: 'わたし' },
            { base: '菓', reading: 'か' },
            { base: '子', reading: 'し' }
          ]
        },
        {
          prompt: { en: 'Mother gave me a boxed lunch.', vi: 'Mẹ cho tôi cơm hộp.' },
          jp: '母が 私に 弁当を くれました。',
          ruby: [
            { base: '母', reading: 'はは' },
            { base: '私', reading: 'わたし' },
            { base: '弁', reading: 'べん' },
            { base: '当', reading: 'とう' }
          ]
        },
        {
          prompt: { en: 'Grandfather gave me a book.', vi: 'Ông cho tôi một cuốn sách.' },
          jp: 'おじいさんが 私に 本を くれました。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '本', reading: 'ほん' }
          ]
        },
        {
          prompt: { en: 'Grandmother gave me tea.', vi: 'Bà cho tôi trà.' },
          jp: 'おばあさんが 私に お茶を くれました。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '茶', reading: 'ちゃ' }
          ]
        },
        {
          prompt: { en: 'Tanaka gave me everything.', vi: 'Tanaka cho tôi tất cả.' },
          jp: '田中さんが 私に 全部 くれました。',
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '私', reading: 'わたし' },
            { base: '全', reading: 'ぜん' },
            { base: '部', reading: 'ぶ' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て あげます',
      items: [
        {
          prompt: {
            en: 'I showed Yuki around the university.',
            vi: 'Tôi hướng dẫn Yuki tham quan đại học.'
          },
          jp: '私は ゆきさんに 大学を 案内して あげました。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '案', reading: 'あん' },
            { base: '内', reading: 'ない' }
          ]
        },
        {
          prompt: {
            en: 'I will introduce Maria to Alex.',
            vi: 'Tôi sẽ giới thiệu Maria với Alex.'
          },
          jp: '私は アレックスさんに マリアさんを 紹介して あげます。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '紹', reading: 'しょう' },
            { base: '介', reading: 'かい' }
          ]
        },
        {
          prompt: {
            en: 'I will see Yuki off to the station.',
            vi: 'Tôi sẽ tiễn Yuki đến ga.'
          },
          jp: '私は ゆきさんを 駅まで 送って あげます。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '駅', reading: 'えき' },
            { base: '送', reading: 'おく' }
          ]
        },
        {
          prompt: {
            en: 'I will make coffee for Grandpa.',
            vi: 'Tôi sẽ pha cà phê cho ông.'
          },
          jp: '私は おじいちゃんに コーヒーを 入れて あげます。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '入', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'I will take the children along for Mother.',
            vi: 'Tôi sẽ dẫn bọn trẻ đi giúp mẹ.'
          },
          jp: '私は 母に 子供を 連れて 行って あげます。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '母', reading: 'はは' },
            { base: '子', reading: 'こ' },
            { base: '供', reading: 'ども' },
            { base: '連', reading: 'つ' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て もらいます',
      items: [
        {
          prompt: {
            en: 'Tanaka introduced Maria to me.',
            vi: 'Tanaka giới thiệu Maria cho tôi.'
          },
          jp: '私は 田中さんに マリアさんを 紹介して もらいました。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '紹', reading: 'しょう' },
            { base: '介', reading: 'かい' }
          ]
        },
        {
          prompt: {
            en: 'I had the meaning explained to me.',
            vi: 'Tôi được giải thích nghĩa.'
          },
          jp: '私は 先生に 意味を 説明して もらいました。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' },
            { base: '説', reading: 'せつ' },
            { base: '明', reading: 'めい' }
          ]
        },
        {
          prompt: {
            en: 'I had someone prepare everything for me.',
            vi: 'Tôi nhờ người chuẩn bị tất cả.'
          },
          jp: '私は 友達に 全部 準備して もらいました。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '全', reading: 'ぜん' },
            { base: '部', reading: 'ぶ' },
            { base: '準', reading: 'じゅん' },
            { base: '備', reading: 'び' }
          ]
        },
        {
          prompt: {
            en: 'I borrowed a station wagon.',
            vi: 'Tôi mượn xe wagon.'
          },
          jp: '私は 田中さんに ワゴン車を 貸して もらいました。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '車', reading: 'しゃ' },
            { base: '貸', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'I could not do it by myself, so I got help.',
            vi: 'Tôi không làm được một mình nên được giúp.'
          },
          jp: '自分で できませんから、手伝って もらいました。',
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' },
            { base: '手', reading: 'て' },
            { base: '伝', reading: 'つだ' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て くれます',
      items: [
        {
          prompt: { en: 'Grandma buys sweets for us.', vi: 'Bà mua bánh kẹo cho chúng ta.' },
          jp: 'おばあちゃんが お菓子を 買って くれます。',
          ruby: [
            { base: '菓', reading: 'か' },
            { base: '子', reading: 'し' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'Father took the children along for us.',
            vi: 'Bố dẫn bọn trẻ đi giúp chúng tôi.'
          },
          jp: '父が 子供を 連れて 行って くれました。',
          ruby: [
            { base: '父', reading: 'ちち' },
            { base: '子', reading: 'こ' },
            { base: '供', reading: 'ども' },
            { base: '連', reading: 'つ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'Yuki brought a friend along for us.',
            vi: 'Yuki dẫn bạn đến giúp chúng tôi.'
          },
          jp: 'ゆきさんが 友達を 連れて 来て くれました。',
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '連', reading: 'つ' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'Grandpa made coffee for us.',
            vi: 'Ông pha cà phê cho chúng tôi.'
          },
          jp: 'おじいちゃんが コーヒーを 入れて くれました。',
          ruby: [{ base: '入', reading: 'い' }]
        },
        {
          prompt: {
            en: 'Besides that, Sato will explain it for me.',
            vi: 'Ngoài ra, Sato sẽ giải thích giúp tôi.'
          },
          jp: 'ほかに 佐藤さんが 説明して くれます。',
          ruby: [
            { base: '佐', reading: 'さ' },
            { base: '藤', reading: 'とう' },
            { base: '説', reading: 'せつ' },
            { base: '明', reading: 'めい' }
          ]
        }
      ]
    },
    {
      pattern: 'N が ... (new subject)',
      items: [
        {
          prompt: {
            en: 'I go to the library, but my wife brings the children.',
            vi: 'Tôi đi đến thư viện, còn vợ dẫn con đến.'
          },
          jp: '私は 図書館へ 行きますが、妻が 子供を 連れて 来ます。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '図', reading: 'と' },
            { base: '書', reading: 'しょ' },
            { base: '館', reading: 'かん' },
            { base: '行', reading: 'い' },
            { base: '妻', reading: 'つま' },
            { base: '子', reading: 'こ' },
            { base: '供', reading: 'ども' },
            { base: '連', reading: 'つ' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'Mother is busy, but Father will prepare dinner.',
            vi: 'Mẹ bận, còn bố sẽ chuẩn bị bữa tối.'
          },
          jp: '母は 忙しいですが、父が 晩ごはんの 準備を します。',
          ruby: [
            { base: '母', reading: 'はは' },
            { base: '忙', reading: 'いそ' },
            { base: '父', reading: 'ちち' },
            { base: '晩', reading: 'ばん' },
            { base: '準', reading: 'じゅん' },
            { base: '備', reading: 'び' }
          ]
        },
        {
          prompt: {
            en: 'I stay home, but Tanaka sees the guests off.',
            vi: 'Tôi ở nhà, còn Tanaka tiễn khách.'
          },
          jp: '私は うちに いますが、田中さんが お客さんを 送ります。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '客', reading: 'きゃく' },
            { base: '送', reading: 'おく' }
          ]
        },
        {
          prompt: {
            en: 'Yuki is late, but Alex will guide everyone.',
            vi: 'Yuki đến trễ, còn Alex sẽ hướng dẫn mọi người.'
          },
          jp: 'ゆきさんは 遅れますが、アレックスさんが 案内します。',
          ruby: [
            { base: '遅', reading: 'おく' },
            { base: '案', reading: 'あん' },
            { base: '内', reading: 'ない' }
          ]
        },
        {
          prompt: {
            en: 'I cannot drive, but Father will take the station wagon.',
            vi: 'Tôi không lái được, còn bố sẽ đưa xe wagon.'
          },
          jp: '私は 運転できませんが、父が ワゴン車を 運転します。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '運', reading: 'うん' },
            { base: '転', reading: 'てん' },
            { base: '父', reading: 'ちち' },
            { base: '車', reading: 'しゃ' },
            { base: '運', reading: 'うん' },
            { base: '転', reading: 'てん' }
          ]
        }
      ]
    }
  ],
  phrases: []
};
