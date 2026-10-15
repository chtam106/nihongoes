import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson12SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N / na-adj でした / じゃありませんでした',
      items: [
        {
          prompt: { en: 'Yesterday was a holiday.', vi: 'Hôm qua là ngày nghỉ.' },
          jp: 'きのうは 休みでした。',
          ruby: [{ base: '休', reading: 'やす' }]
        },
        {
          prompt: { en: 'The party was fun.', vi: 'Bữa tiệc vui.' },
          jp: 'パーティーは にぎやかでした。'
        },
        {
          prompt: { en: 'The hotel was simple.', vi: 'Khách sạn đơn giản.' },
          jp: 'ホテルは 簡単でした。',
          ruby: [
            { base: '簡', reading: 'かん' },
            { base: '単', reading: 'たん' }
          ]
        },
        {
          prompt: { en: 'It was not a festival.', vi: 'Không phải lễ hội.' },
          jp: 'お祭りじゃ ありませんでした。',
          ruby: [{ base: '祭', reading: 'まつ' }]
        },
        {
          prompt: { en: 'The weather was rain.', vi: 'Thời tiết là mưa.' },
          jp: '天気は 雨でした。',
          ruby: [
            { base: '天', reading: 'てん' },
            { base: '気', reading: 'き' },
            { base: '雨', reading: 'あめ' }
          ]
        },
        {
          prompt: { en: 'It was cloudy.', vi: 'Trời u ám.' },
          jp: '曇りでした。',
          ruby: [{ base: '曇', reading: 'くも' }]
        },
        {
          prompt: { en: 'It was snow.', vi: 'Là tuyết.' },
          jp: '雪でした。',
          ruby: [{ base: '雪', reading: 'ゆき' }]
        }
      ]
    },
    {
      pattern: 'i-adj かったです / くなかったです',
      items: [
        {
          prompt: { en: 'The station was near.', vi: 'Ga gần.' },
          jp: '駅は 近かったです。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '近', reading: 'ちか' }
          ]
        },
        {
          prompt: { en: 'The airport was far.', vi: 'Sân bay xa.' },
          jp: '空港は 遠かったです。',
          ruby: [
            { base: '空', reading: 'くう' },
            { base: '港', reading: 'こう' },
            { base: '遠', reading: 'とお' }
          ]
        },
        {
          prompt: { en: 'The train was fast.', vi: 'Tàu nhanh.' },
          jp: '電車は 速かったです。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '速', reading: 'はや' }
          ]
        },
        {
          prompt: { en: 'The bus was slow.', vi: 'Xe buýt chậm.' },
          jp: 'バスは 遅かったです。',
          ruby: [{ base: '遅', reading: 'おそ' }]
        },
        {
          prompt: { en: 'Spring was warm.', vi: 'Mùa xuân ấm.' },
          jp: '春は 暖かかったです。',
          ruby: [
            { base: '春', reading: 'はる' },
            { base: '暖', reading: 'あたた' }
          ]
        },
        {
          prompt: { en: 'Autumn was cool.', vi: 'Mùa thu mát.' },
          jp: '秋は 涼しかったです。',
          ruby: [
            { base: '秋', reading: 'あき' },
            { base: '涼', reading: 'すず' }
          ]
        },
        {
          prompt: { en: 'The tea was not hot. It was warm.', vi: 'Trà không nóng. Trà ấm.' },
          jp: 'お茶は 温かかったです。',
          ruby: [
            { base: '茶', reading: 'ちゃ' },
            { base: '温', reading: 'あたた' }
          ]
        },
        {
          prompt: { en: 'Sukiyaki was sweet.', vi: 'Sukiyaki ngọt.' },
          jp: 'すき焼きは 甘かったです。',
          ruby: [
            { base: '焼', reading: 'や' },
            { base: '甘', reading: 'あま' }
          ]
        },
        {
          prompt: { en: 'The ramen was spicy.', vi: 'Ramen cay.' },
          jp: 'ラーメンは 辛かったです。',
          ruby: [{ base: '辛', reading: 'から' }]
        },
        {
          prompt: { en: 'The bag was heavy.', vi: 'Cái túi nặng.' },
          jp: 'かばんは 重かったです。',
          ruby: [{ base: '重', reading: 'おも' }]
        },
        {
          prompt: { en: 'The bag was not heavy. It was light.', vi: 'Cái túi không nặng. Nó nhẹ.' },
          jp: 'かばんは 軽かったです。',
          ruby: [{ base: '軽', reading: 'かる' }]
        },
        {
          prompt: { en: 'I got up early.', vi: 'Tôi dậy sớm.' },
          jp: '早く 起きました。',
          ruby: [
            { base: '早', reading: 'はや' },
            { base: '起', reading: 'お' }
          ]
        },
        {
          prompt: { en: 'The station is near.', vi: 'Ga gần.' },
          jp: '駅は 近いです。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '近', reading: 'ちか' }
          ]
        },
        {
          prompt: { en: 'The airport is far.', vi: 'Sân bay xa.' },
          jp: '空港は 遠いです。',
          ruby: [
            { base: '空', reading: 'くう' },
            { base: '港', reading: 'こう' },
            { base: '遠', reading: 'とお' }
          ]
        },
        {
          prompt: { en: 'This train is fast.', vi: 'Tàu này nhanh.' },
          jp: 'この 電車は 速いです。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '速', reading: 'はや' }
          ]
        },
        {
          prompt: { en: 'This bus is slow.', vi: 'Xe buýt này chậm.' },
          jp: 'この バスは 遅いです。',
          ruby: [{ base: '遅', reading: 'おそ' }]
        },
        {
          prompt: { en: 'Today is warm.', vi: 'Hôm nay ấm.' },
          jp: 'きょうは 暖かいです。',
          ruby: [{ base: '暖', reading: 'あたた' }]
        },
        {
          prompt: { en: 'The wind is cool.', vi: 'Gió mát.' },
          jp: '風は 涼しいです。',
          ruby: [
            { base: '風', reading: 'かぜ' },
            { base: '涼', reading: 'すず' }
          ]
        },
        {
          prompt: { en: 'This bag is heavy.', vi: 'Cái túi này nặng.' },
          jp: 'この かばんは 重いです。',
          ruby: [{ base: '重', reading: 'おも' }]
        }
      ]
    },
    {
      pattern: 'N1 は N2 より adj',
      items: [
        {
          prompt: { en: 'Summer is hotter than spring.', vi: 'Mùa hè nóng hơn mùa xuân.' },
          jp: '夏は 春より 暑いです。',
          ruby: [
            { base: '夏', reading: 'なつ' },
            { base: '春', reading: 'はる' },
            { base: '暑', reading: 'あつ' }
          ]
        },
        {
          prompt: { en: 'Winter is colder than autumn.', vi: 'Mùa đông lạnh hơn mùa thu.' },
          jp: '冬は 秋より 寒いです。',
          ruby: [
            { base: '冬', reading: 'ふゆ' },
            { base: '秋', reading: 'あき' },
            { base: '寒', reading: 'さむ' }
          ]
        },
        {
          prompt: { en: 'Beef is more expensive than pork.', vi: 'Thịt bò đắt hơn thịt heo.' },
          jp: '牛肉は 豚肉より 高いです。',
          ruby: [
            { base: '牛', reading: 'ぎゅう' },
            { base: '肉', reading: 'にく' },
            { base: '豚', reading: 'ぶた' },
            { base: '肉', reading: 'にく' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          prompt: { en: 'Chicken is lighter than beef.', vi: 'Thịt gà nhẹ hơn thịt bò.' },
          jp: 'とり肉は 牛肉より 軽いです。',
          ruby: [
            { base: '肉', reading: 'にく' },
            { base: '牛', reading: 'ぎゅう' },
            { base: '肉', reading: 'にく' },
            { base: '軽', reading: 'かる' }
          ]
        },
        {
          prompt: {
            en: 'The sea is far more beautiful than the hotel.',
            vi: 'Biển đẹp hơn hẳn khách sạn.'
          },
          jp: '海は ホテルより ずっと きれいです。',
          ruby: [{ base: '海', reading: 'うみ' }]
        }
      ]
    },
    {
      pattern: 'N1 と N2 と どちらが / N の ほうが',
      items: [
        {
          prompt: {
            en: 'Which is sweeter, sushi or tempura?',
            vi: 'Sushi và tempura, cái nào ngọt hơn?'
          },
          jp: 'おすしと てんぷらと どちらが 甘いですか。',
          ruby: [{ base: '甘', reading: 'あま' }]
        },
        {
          prompt: { en: 'Sushi is sweeter.', vi: 'Sushi ngọt hơn.' },
          jp: 'おすしの ほうが 甘いです。',
          ruby: [{ base: '甘', reading: 'あま' }]
        },
        {
          prompt: {
            en: 'Which do you prefer, coffee or tea?',
            vi: 'Cà phê và trà, cái nào bạn chọn?'
          },
          jp: 'コーヒーと お茶と どちらが いいですか。',
          ruby: [{ base: '茶', reading: 'ちゃ' }]
        },
        {
          prompt: { en: 'Coffee is fine (I will have coffee).', vi: 'Tôi dùng cà phê.' },
          jp: 'コーヒーの ほうが いいです。'
        },
        {
          prompt: { en: 'Both are delicious.', vi: 'Cả hai đều ngon.' },
          jp: 'どちらも おいしいです。'
        }
      ]
    },
    {
      pattern: 'N [の 中] で 何 / どこ / だれ / いつ が いちばん',
      patternRuby: [
        { base: '中', reading: 'なか' },
        { base: '何', reading: 'なに' },
        { base: '一', reading: 'いち' },
        { base: '番', reading: 'ばん' }
      ],
      items: [
        {
          prompt: {
            en: 'Which season is the best in the year?',
            vi: 'Trong năm, mùa nào thích nhất?'
          },
          jp: '一年の 中で どの 季節が いちばん 好きですか。',
          ruby: [
            { base: '一', reading: 'いち' },
            { base: '年', reading: 'ねん' },
            { base: '中', reading: 'なか' },
            { base: '季', reading: 'き' },
            { base: '節', reading: 'せつ' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'Spring is the best.', vi: 'Mùa xuân thích nhất.' },
          jp: '春が いちばん 好きです。',
          ruby: [
            { base: '春', reading: 'はる' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: {
            en: 'Where is the most crowded in the world?',
            vi: 'Trên thế giới, đâu đông người nhất?'
          },
          jp: '世界の 中で どこが いちばん 人が 多いですか。',
          ruby: [
            { base: '世', reading: 'せ' },
            { base: '界', reading: 'かい' },
            { base: '中', reading: 'なか' },
            { base: '人', reading: 'ひと' },
            { base: '多', reading: 'おお' }
          ]
        },
        {
          prompt: {
            en: 'The maple leaves are the most beautiful in autumn.',
            vi: 'Lá phong đẹp nhất vào mùa thu.'
          },
          jp: '秋の 中で 紅葉が いちばん きれいです。',
          ruby: [
            { base: '秋', reading: 'あき' },
            { base: '中', reading: 'なか' },
            { base: '紅', reading: 'もみ' },
            { base: '葉', reading: 'じ' }
          ]
        },
        {
          prompt: { en: 'There are few people at the airport.', vi: 'Ở sân bay ít người.' },
          jp: '空港は 人が 少ないです。',
          ruby: [
            { base: '空', reading: 'くう' },
            { base: '港', reading: 'こう' },
            { base: '人', reading: 'ひと' },
            { base: '少', reading: 'すく' }
          ]
        },
        {
          prompt: { en: 'I did ikebana for the first time.', vi: 'Tôi cắm hoa lần đầu.' },
          jp: '初めて 生け花を しました。',
          ruby: [
            { base: '初', reading: 'はじ' },
            { base: '生', reading: 'い' },
            { base: '花', reading: 'ばな' }
          ]
        },
        {
          prompt: { en: 'Sashimi is the most delicious.', vi: 'Sashimi ngon nhất.' },
          jp: '刺身が いちばん おいしいです。',
          ruby: [
            { base: '刺', reading: 'さし' },
            { base: '身', reading: 'み' }
          ]
        },
        {
          prompt: { en: 'Lemon is sour, but I like it.', vi: 'Chanh chua nhưng tôi thích.' },
          jp: 'レモンは すっぱいですが、好きです。',
          ruby: [{ base: '好', reading: 'す' }]
        }
      ]
    },
    {
      pattern: 'i-adj の',
      items: [
        {
          prompt: { en: 'Which bag is yours?', vi: 'Túi của bạn là cái nào?' },
          jp: 'どの かばんが あなたのですか。'
        },
        {
          prompt: { en: 'The big one.', vi: 'Cái lớn.' },
          jp: '大きいのです。',
          ruby: [{ base: '大', reading: 'おお' }]
        },
        {
          prompt: { en: 'The light one, please.', vi: 'Cái nhẹ, làm ơn.' },
          jp: '軽いのを ください。',
          ruby: [{ base: '軽', reading: 'かる' }]
        },
        {
          prompt: { en: 'The sweet one is delicious.', vi: 'Cái ngọt ngon.' },
          jp: '甘いのは おいしいです。',
          ruby: [{ base: '甘', reading: 'あま' }]
        },
        {
          prompt: { en: 'The spicy one is this.', vi: 'Cái cay là cái này.' },
          jp: '辛いのは これです。',
          ruby: [{ base: '辛', reading: 'から' }]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'I am home. (said when arriving home)',
        vi: 'Tôi về rồi. (nói khi về nhà)'
      },
      jp: 'ただいま。'
    },
    {
      prompt: {
        en: 'Welcome back. (to someone returning home)',
        vi: 'Anh/Chị về rồi đấy à. (nói với người vừa về nhà)'
      },
      jp: 'お帰りなさい。',
      ruby: [{ base: '帰', reading: 'かえ' }]
    },
    {
      prompt: { en: 'Wow, what a crowd!', vi: 'Ôi, đông người quá nhỉ!' },
      jp: 'わあ、すごい 人ですね。',
      ruby: [{ base: '人', reading: 'ひと' }]
    },
    {
      prompt: { en: 'I am tired.', vi: 'Tôi mệt rồi.' },
      jp: '疲れました。',
      ruby: [{ base: '疲', reading: 'つか' }]
    }
  ]
};
