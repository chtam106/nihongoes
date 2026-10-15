import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson22SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'Plain form ＋ N',
      items: [
        {
          prompt: {
            en: 'This is a coat I often wear in winter.',
            vi: 'Đây là áo khoác tôi hay mặc mùa đông.'
          },
          jp: 'これは 冬に よく 着る コートです。',
          ruby: [
            { base: '冬', reading: 'ふゆ' },
            { base: '着', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'This is an apartment with high rent.',
            vi: 'Đây là căn hộ tiền thuê cao.'
          },
          jp: 'これは 家賃が 高い アパートです。',
          ruby: [
            { base: '家', reading: 'や' },
            { base: '賃', reading: 'ちん' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          prompt: {
            en: 'This is a bright dining kitchen.',
            vi: 'Đây là bếp kết hợp phòng ăn sáng sủa.'
          },
          jp: 'これは 明るい ダイニングキッチンです。',
          ruby: [{ base: '明', reading: 'あか' }]
        },
        {
          prompt: {
            en: 'This is a spacious Japanese-style room.',
            vi: 'Đây là phòng kiểu Nhật rộng.'
          },
          jp: 'これは 広い 和室です。',
          ruby: [
            { base: '広', reading: 'ひろ' },
            { base: '和', reading: 'わ' },
            { base: '室', reading: 'しつ' }
          ]
        },
        {
          prompt: { en: 'This is a large closet.', vi: 'Đây là tủ đựng đồ lớn.' },
          jp: 'これは 大きい 押入れです。',
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '押', reading: 'おし' },
            { base: '入', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'This is a new futon.', vi: 'Đây là futon mới.' },
          jp: 'これは 新しい 布団です。',
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '布', reading: 'ふ' },
            { base: '団', reading: 'とん' }
          ]
        }
      ]
    },
    {
      pattern: 'Relative clause (plain form ＋ N)',
      items: [
        {
          prompt: {
            en: 'The person wearing black glasses is Alex.',
            vi: 'Người đang đeo kính đen là Alex.'
          },
          jp: '黒い 眼鏡を かけている 人は アレックスさんです。',
          ruby: [
            { base: '黒', reading: 'くろ' },
            { base: '眼', reading: 'め' },
            { base: '鏡', reading: 'がね' },
            { base: '人', reading: 'ひと' }
          ]
        },
        {
          prompt: {
            en: 'The person wearing a hat is Yuki.',
            vi: 'Người đội mũ là Yuki.'
          },
          jp: '帽子を かぶっている 人は ゆきさんです。',
          ruby: [
            { base: '帽', reading: 'ぼう' },
            { base: '子', reading: 'し' },
            { base: '人', reading: 'ひと' }
          ]
        },
        {
          prompt: {
            en: 'This is the apartment a friend is renting.',
            vi: 'Đây là căn hộ bạn đang thuê.'
          },
          jp: 'こちらは 友達が 借りて いる アパートです。',
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '借', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'The person born in Paris is Maria.',
            vi: 'Người sinh ở Paris là Maria.'
          },
          jp: 'パリで 生まれた 人は マリアさんです。',
          ruby: [
            { base: '生', reading: 'う' },
            { base: '人', reading: 'ひと' }
          ]
        },
        {
          prompt: {
            en: 'This is the card that says "Congratulations."',
            vi: 'Đây là tấm thiệp viết "Chúc mừng."'
          },
          jp: 'これは 「おめでとうございます」と 書いた カードです。',
          ruby: [{ base: '書', reading: 'か' }]
        },
        {
          prompt: {
            en: 'The person who said "hmm" is Tanaka.',
            vi: 'Người nói "ừm" là Tanaka.'
          },
          jp: '「うーん」と 言った 人は 田中さんです。',
          ruby: [
            { base: '言', reading: 'い' },
            { base: '人', reading: 'ひと' },
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' }
          ]
        }
      ]
    },
    {
      pattern: 'V (dictionary form) ＋ 時間／約束／用事',
      patternRuby: [
        { base: '時', reading: 'じ' },
        { base: '間', reading: 'かん' },
        { base: '約', reading: 'やく' },
        { base: '束', reading: 'そく' },
        { base: '用', reading: 'よう' },
        { base: '事', reading: 'じ' }
      ],
      items: [
        {
          prompt: {
            en: 'I have time to buy a suit this afternoon.',
            vi: 'Chiều nay tôi có thời gian mua com lê.'
          },
          jp: '午後 スーツを 買う 時間が あります。',
          ruby: [
            { base: '午', reading: 'ご' },
            { base: '後', reading: 'ご' },
            { base: '買', reading: 'か' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' }
          ]
        },
        {
          prompt: {
            en: 'I made a promise to buy a sweater with a friend.',
            vi: 'Tôi hẹn với bạn đi mua áo len.'
          },
          jp: '友達と セーターを 買う 約束を しました。',
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '買', reading: 'か' },
            { base: '約', reading: 'やく' },
            { base: '束', reading: 'そく' }
          ]
        },
        {
          prompt: {
            en: 'I have an errand to look at an apartment next week.',
            vi: 'Tuần sau tôi có việc đi xem căn hộ.'
          },
          jp: '来週 アパートを 見る 用事が あります。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '見', reading: 'み' },
            { base: '用', reading: 'よう' },
            { base: '事', reading: 'じ' }
          ]
        },
        {
          prompt: {
            en: 'I have time to put on a coat this morning.',
            vi: 'Sáng nay tôi có thời gian mặc áo khoác.'
          },
          jp: 'けさ コートを 着る 時間が あります。',
          ruby: [
            { base: '着', reading: 'き' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' }
          ]
        },
        {
          prompt: {
            en: 'I made a promise to meet in Paris.',
            vi: 'Tôi hẹn gặp ở Paris.'
          },
          jp: 'パリで 会う 約束を しました。',
          ruby: [
            { base: '会', reading: 'あ' },
            { base: '約', reading: 'やく' },
            { base: '束', reading: 'そく' }
          ]
        }
      ]
    },
    {
      pattern: 'N を 着ます／はきます／かぶります／かけます',
      patternRuby: [{ base: '着', reading: 'き' }],
      items: [
        {
          prompt: {
            en: 'At a party I wear a suit.',
            vi: 'Ở tiệc tôi mặc com lê.'
          },
          jp: 'パーティーの とき スーツを 着ます。',
          ruby: [{ base: '着', reading: 'き' }]
        },
        {
          prompt: { en: 'I wear shoes too.', vi: 'Tôi cũng đi giày.' },
          jp: '靴も はきます。',
          ruby: [{ base: '靴', reading: 'くつ' }]
        },
        {
          prompt: { en: 'On Sunday I wear a hat.', vi: 'Chủ nhật tôi đội mũ.' },
          jp: '日曜日は 帽子を かぶります。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '帽', reading: 'ぼう' },
            { base: '子', reading: 'し' }
          ]
        },
        {
          prompt: { en: 'I wear glasses every day.', vi: 'Tôi đeo kính mỗi ngày.' },
          jp: '毎日 眼鏡を かけます。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '眼', reading: 'め' },
            { base: '鏡', reading: 'がね' }
          ]
        },
        {
          prompt: { en: 'In winter I wear a sweater.', vi: 'Mùa đông tôi mặc áo len.' },
          jp: '冬は セーターを 着ます。',
          ruby: [
            { base: '冬', reading: 'ふゆ' },
            { base: '着', reading: 'き' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'Congratulations.', vi: 'Chúc mừng.' },
      jp: 'おめでとうございます。'
    },
    {
      prompt: { en: 'Hmm, what should I do?', vi: 'Ừm, làm sao đây?' },
      jp: 'うーん、どうしよう。'
    }
  ]
};
