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
            en: 'This is the kitchen where I cook every day.',
            vi: 'Đây là căn bếp nơi tôi nấu ăn mỗi ngày.'
          },
          jp: 'ここは 私が 毎日 料理を 作る 台所です。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '料', reading: 'りょう' },
            { base: '理', reading: 'り' },
            { base: '作', reading: 'つく' },
            { base: '台', reading: 'だい' },
            { base: '所', reading: 'どころ' }
          ]
        },
        {
          prompt: { en: 'This is a cake my mother made.', vi: 'Đây là cái bánh mẹ tôi làm.' },
          jp: 'これは 母が 作った ケーキです。',
          ruby: [
            { base: '母', reading: 'はは' },
            { base: '作', reading: 'つく' }
          ]
        },
        {
          prompt: {
            en: 'I am looking for an apartment near the station.',
            vi: 'Tôi đang tìm căn hộ gần ga.'
          },
          jp: '駅に 近い アパートを 探しています。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '近', reading: 'ちか' },
            { base: '探', reading: 'さが' }
          ]
        },
        {
          prompt: {
            en: 'The futon I bought yesterday is very light.',
            vi: 'Bộ chăn nệm tôi mua hôm qua rất nhẹ.'
          },
          jp: 'きのう 買った 布団は とても 軽いです。',
          ruby: [
            { base: '買', reading: 'か' },
            { base: '布', reading: 'ふ' },
            { base: '団', reading: 'とん' },
            { base: '軽', reading: 'かる' }
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
            en: 'I made plans to have dinner with Yuki tonight.',
            vi: 'Tôi đã hẹn ăn tối với Yuki tối nay.'
          },
          jp: '今晩 ゆきさんと 食事する 約束を しました。',
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '晩', reading: 'ばん' },
            { base: '食', reading: 'しょく' },
            { base: '事', reading: 'じ' },
            { base: '約', reading: 'やく' },
            { base: '束', reading: 'そく' }
          ]
        },
        {
          prompt: {
            en: 'I have to go to the bank this afternoon.',
            vi: 'Chiều nay tôi có việc phải đi đến ngân hàng.'
          },
          jp: '午後は 銀行へ 行く 用事が あります。',
          ruby: [
            { base: '午', reading: 'ご' },
            { base: '後', reading: 'ご' },
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '行', reading: 'い' },
            { base: '用', reading: 'よう' },
            { base: '事', reading: 'じ' }
          ]
        },
        {
          prompt: {
            en: 'This morning I had no time to eat breakfast.',
            vi: 'Sáng nay tôi không có thời gian ăn sáng.'
          },
          jp: 'けさは 朝ごはんを 食べる 時間が ありませんでした。',
          ruby: [
            { base: '朝', reading: 'あさ' },
            { base: '食', reading: 'た' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' }
          ]
        },
        {
          prompt: {
            en: 'On Saturday I have plans to see a movie with a friend.',
            vi: 'Thứ Bảy tôi có hẹn đi xem phim với bạn.'
          },
          jp: '土曜日は 友達と 映画を 見る 約束が あります。',
          ruby: [
            { base: '土', reading: 'ど' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' },
            { base: '見', reading: 'み' },
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
          prompt: {
            en: 'I put on my new shoes and went out.',
            vi: 'Tôi đi đôi giày mới rồi ra ngoài.'
          },
          jp: '新しい 靴を はいて 出かけました。',
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '靴', reading: 'くつ' },
            { base: '出', reading: 'で' }
          ]
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
