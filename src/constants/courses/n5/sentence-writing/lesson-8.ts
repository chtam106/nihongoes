import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson8SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N は い-adj / な-adj です',
      items: [
        {
          prompt: { en: 'Alex is handsome.', vi: 'Anh Alex đẹp trai.' },
          jp: 'アレックスさんは ハンサムです。'
        },
        {
          prompt: { en: 'The dorm is quiet.', vi: 'Kí túc xá thì yên tĩnh.' },
          jp: '寮は 静かです。',
          ruby: [
            { base: '寮', reading: 'りょう' },
            { base: '静', reading: 'しず' }
          ]
        },
        {
          prompt: { en: 'This town is lively.', vi: 'Thị trấn này náo nhiệt.' },
          jp: 'この 町は にぎやかです。',
          ruby: [{ base: '町', reading: 'まち' }]
        },
        {
          prompt: { en: 'Ms. Yamada is kind.', vi: 'Cô Yamada tốt bụng.' },
          jp: 'やまださんは 親切です。',
          ruby: [
            { base: '親', reading: 'しん' },
            { base: '切', reading: 'せつ' }
          ]
        },
        {
          prompt: { en: 'Yuki is energetic.', vi: 'Bé Yuki khỏe khoắn.' },
          jp: 'ゆきちゃんは 元気です。',
          ruby: [
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'Today I am free.', vi: 'Hôm nay tôi rảnh.' },
          jp: 'きょうは 暇です。',
          ruby: [{ base: '暇', reading: 'ひま' }]
        },
        {
          prompt: { en: 'This water is cold (to the touch).', vi: 'Nước này lạnh.' },
          jp: 'この 水は 冷たいです。',
          ruby: [
            { base: '水', reading: 'みず' },
            { base: '冷', reading: 'つめ' }
          ]
        },
        {
          prompt: { en: 'This problem is easy.', vi: 'Bài này dễ.' },
          jp: 'この 問題は 易しいです。',
          ruby: [
            { base: '問', reading: 'もん' },
            { base: '題', reading: 'だい' },
            { base: '易', reading: 'やさ' }
          ]
        },
        {
          prompt: { en: 'That bag is cheap.', vi: 'Cái túi kia rẻ.' },
          jp: 'あの かばんは 安いです。',
          ruby: [{ base: '安', reading: 'やす' }]
        },
        {
          prompt: { en: 'This restaurant is famous.', vi: 'Nhà hàng này nổi tiếng.' },
          jp: 'この レストランは 有名です。',
          ruby: [
            { base: '有', reading: 'ゆう' },
            { base: '名', reading: 'めい' }
          ]
        },
        {
          prompt: {
            en: 'The dorm is new. And it is quiet.',
            vi: 'Kí túc xá thì mới. Và yên tĩnh.'
          },
          jp: '寮は 新しいです。そして、静かです。',
          ruby: [
            { base: '寮', reading: 'りょう' },
            { base: '新', reading: 'あたら' },
            { base: '静', reading: 'しず' }
          ]
        }
      ]
    },
    {
      pattern: 'い-adj N / な-adj[な] N',
      items: [
        {
          prompt: { en: 'Kyoto is a beautiful town.', vi: 'Kyoto là một thành phố đẹp.' },
          jp: '京都は きれいな 町です。',
          ruby: [
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '町', reading: 'まち' }
          ]
        },
        {
          prompt: { en: 'That is a lovely bag.', vi: 'Đó là cái túi đẹp.' },
          jp: 'それは すてきな かばんです。'
        },
        {
          prompt: { en: 'That is a big mountain.', vi: 'Đó là ngọn núi lớn.' },
          jp: 'あれは 大きい 山です。',
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '山', reading: 'やま' }
          ]
        },
        {
          prompt: { en: 'This is a small town.', vi: 'Đây là thị trấn nhỏ.' },
          jp: 'ここは 小さい 町です。',
          ruby: [
            { base: '小', reading: 'ちい' },
            { base: '町', reading: 'まち' }
          ]
        },
        {
          prompt: { en: 'That is a black bag.', vi: 'Đó là cái túi đen.' },
          jp: 'それは 黒い かばんです。',
          ruby: [{ base: '黒', reading: 'くろ' }]
        },
        {
          prompt: { en: 'This is a red flower.', vi: 'Đây là bông hoa đỏ.' },
          jp: 'これは 赤い 花です。',
          ruby: [
            { base: '赤', reading: 'あか' },
            { base: '花', reading: 'はな' }
          ]
        }
      ]
    },
    {
      pattern: 'A が、 B',
      items: [
        {
          prompt: {
            en: 'The food is delicious, but expensive.',
            vi: 'Đồ ăn ngon nhưng đắt.'
          },
          jp: '食べ物は おいしいですが、高いです。',
          ruby: [
            { base: '食', reading: 'た' },
            { base: '物', reading: 'もの' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          prompt: {
            en: 'The dorm is old, but convenient.',
            vi: 'Kí túc xá cũ nhưng tiện lợi.'
          },
          jp: '寮は 古いですが、便利です。',
          ruby: [
            { base: '寮', reading: 'りょう' },
            { base: '古', reading: 'ふる' },
            { base: '便', reading: 'べん' },
            { base: '利', reading: 'り' }
          ]
        },
        {
          prompt: {
            en: 'Japanese is difficult, but interesting.',
            vi: 'Tiếng Nhật khó nhưng thú vị.'
          },
          jp: '日本語は 難しいですが、おもしろいです。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '難', reading: 'むずか' }
          ]
        },
        {
          prompt: {
            en: 'The bag is new, but it is not large.',
            vi: 'Cái túi mới nhưng không to.'
          },
          jp: 'かばんは 新しいですが、大きくないです。',
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '大', reading: 'おお' }
          ]
        },
        {
          prompt: {
            en: 'This book is easy, but it is not interesting.',
            vi: 'Quyển sách này dễ nhưng không thú vị.'
          },
          jp: 'この 本は 易しいですが、おもしろくないです。',
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '易', reading: 'やさ' }
          ]
        }
      ]
    },
    {
      pattern: 'とても / あまり',
      items: [
        {
          prompt: { en: 'Today is very hot.', vi: 'Hôm nay rất nóng.' },
          jp: 'きょうは とても 暑いです。',
          ruby: [{ base: '暑', reading: 'あつ' }]
        },
        {
          prompt: { en: 'Winters in Hokkaido are very cold.', vi: 'Mùa đông ở Hokkaido rất lạnh.' },
          jp: '北海道の 冬は とても 寒いです。',
          ruby: [
            { base: '北', reading: 'ほっ' },
            { base: '海', reading: 'かい' },
            { base: '道', reading: 'どう' },
            { base: '冬', reading: 'ふゆ' },
            { base: '寒', reading: 'さむ' }
          ]
        },
        {
          prompt: { en: 'This film is very famous.', vi: 'Bộ phim này rất nổi tiếng.' },
          jp: 'この 映画は とても 有名です。',
          ruby: [
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' },
            { base: '有', reading: 'ゆう' },
            { base: '名', reading: 'めい' }
          ]
        },
        {
          prompt: { en: 'This town is not very lively.', vi: 'Thị trấn này không náo nhiệt lắm.' },
          jp: 'この 町は あまり にぎやかじゃ ありません。',
          ruby: [{ base: '町', reading: 'まち' }]
        },
        {
          prompt: { en: 'This book is not very difficult.', vi: 'Quyển sách này không khó lắm.' },
          jp: 'この 本は あまり 難しくないです。',
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '難', reading: 'むずか' }
          ]
        }
      ]
    },
    {
      pattern: 'N は どう ですか',
      items: [
        {
          prompt: { en: 'How is life in Osaka?', vi: 'Cuộc sống ở Osaka thế nào?' },
          jp: '大阪の 生活は どうですか。',
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '生', reading: 'せい' },
            { base: '活', reading: 'かつ' }
          ]
        },
        {
          prompt: {
            en: 'How do you find Japanese food? ...It is very good.',
            vi: 'Đồ ăn Nhật thấy thế nào? ...Rất ngon.'
          },
          jp: '日本の 食べ物は どうですか。……とても おいしいです。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '食', reading: 'た' },
            { base: '物', reading: 'もの' }
          ]
        },
        {
          prompt: { en: 'How is the restaurant?', vi: 'Nhà hàng thế nào?' },
          jp: 'レストランは どうですか。'
        },
        {
          prompt: {
            en: 'How is work? ...Busy, but fun.',
            vi: 'Công việc thế nào? ...Bận nhưng vui.'
          },
          jp: 'お仕事は どうですか。……忙しいですが、楽しいです。',
          ruby: [
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '忙', reading: 'いそが' },
            { base: '楽', reading: 'たの' }
          ]
        },
        {
          prompt: { en: 'How is the dorm?', vi: 'Kí túc xá thế nào?' },
          jp: '寮は どうですか。',
          ruby: [{ base: '寮', reading: 'りょう' }]
        }
      ]
    },
    {
      pattern: 'N1 は どんな N2 ですか',
      items: [
        {
          prompt: {
            en: 'What kind of town is Nara? ...It is an old town.',
            vi: 'Nara là thành phố như thế nào? ...Là một thành phố cổ.'
          },
          jp: '奈良は どんな 町ですか。……古い 町です。',
          ruby: [
            { base: '奈', reading: 'な' },
            { base: '良', reading: 'ら' },
            { base: '町', reading: 'まち' },
            { base: '古', reading: 'ふる' },
            { base: '町', reading: 'まち' }
          ]
        },
        {
          prompt: { en: 'What kind of mountain is that?', vi: 'Ngọn núi kia như thế nào?' },
          jp: 'あの 山は どんな 山ですか。',
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '山', reading: 'やま' }
          ]
        },
        {
          prompt: { en: 'What kind of food is this?', vi: 'Đồ ăn này như thế nào?' },
          jp: 'これは どんな 食べ物ですか。',
          ruby: [
            { base: '食', reading: 'た' },
            { base: '物', reading: 'もの' }
          ]
        },
        {
          prompt: { en: 'What kind of place is this?', vi: 'Chỗ này là nơi như thế nào?' },
          jp: 'ここは どんな 所ですか。',
          ruby: [{ base: '所', reading: 'ところ' }]
        },
        {
          prompt: {
            en: 'What kind of mountain is Mt. Fuji? ...It is a very tall mountain.',
            vi: 'Núi Phú Sĩ là ngọn núi như thế nào? ...Là ngọn núi rất cao.'
          },
          jp: '富士山は どんな 山ですか。……とても 高い 山です。',
          ruby: [
            { base: '富', reading: 'ふ' },
            { base: '士', reading: 'じ' },
            { base: '山', reading: 'さん' },
            { base: '山', reading: 'やま' },
            { base: '高', reading: 'たか' },
            { base: '山', reading: 'やま' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'How are you?', vi: 'Anh/Chị có khỏe không?' },
      jp: 'お元気ですか。',
      ruby: [
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' }
      ]
    },
    {
      prompt: {
        en: 'Let me see... / Well... (while thinking of an answer)',
        vi: 'Thế à. / Để tôi xem. (khi suy nghĩ câu trả lời)'
      },
      jp: 'そうですね。'
    },
    {
      prompt: {
        en: 'Would you like another cup/glass?',
        vi: 'Anh/Chị dùng thêm một chén/ly nữa nhé?'
      },
      jp: 'もう 一杯 いかがですか。',
      ruby: [
        { base: '一', reading: 'いっ' },
        { base: '杯', reading: 'ぱい' }
      ]
    },
    {
      prompt: { en: 'No thank you, I am fine.', vi: 'Không, đủ rồi ạ.' },
      jp: 'けっこうです。'
    },
    {
      prompt: {
        en: "It is already 9 o'clock, is it not?",
        vi: 'Đã 9 giờ rồi nhỉ.'
      },
      jp: 'もう 9時ですね。',
      ruby: [{ base: '時', reading: 'じ' }]
    },
    {
      prompt: { en: 'I must be going now.', vi: 'Sắp đến lúc tôi phải xin phép rồi.' },
      jp: 'そろそろ 失礼します。',
      ruby: [
        { base: '失', reading: 'しつ' },
        { base: '礼', reading: 'れい' }
      ]
    },
    {
      prompt: {
        en: 'Not at all. / You are welcome. (reply to thanks)',
        vi: 'Không có gì. / Không sao cả.'
      },
      jp: 'いいえ。'
    },
    {
      prompt: { en: 'Please come again.', vi: 'Lần sau anh/chị lại đến chơi nhé.' },
      jp: 'また いらっしゃって ください。'
    }
  ]
};
