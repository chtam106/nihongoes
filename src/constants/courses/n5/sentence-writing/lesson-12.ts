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
          prompt: { en: 'The party was lively.', vi: 'Bữa tiệc thì náo nhiệt.' },
          jp: 'パーティーは にぎやかでした。'
        },
        {
          prompt: { en: "Yesterday's exam was easy.", vi: 'Bài thi hôm qua dễ.' },
          jp: 'きのうの 試験は 簡単でした。',
          ruby: [
            { base: '試', reading: 'し' },
            { base: '験', reading: 'けん' },
            { base: '簡', reading: 'かん' },
            { base: '単', reading: 'たん' }
          ]
        },
        {
          prompt: { en: 'The hotel was not very quiet.', vi: 'Khách sạn không yên tĩnh lắm.' },
          jp: 'ホテルは あまり 静かじゃ ありませんでした。',
          ruby: [{ base: '静', reading: 'しず' }]
        },
        {
          prompt: {
            en: 'It rained the whole time on the day of the trip.',
            vi: 'Hôm đi du lịch trời mưa suốt.'
          },
          jp: '旅行の 日は ずっと 雨でした。',
          ruby: [
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' },
            { base: '日', reading: 'ひ' },
            { base: '雨', reading: 'あめ' }
          ]
        }
      ]
    },
    {
      pattern: 'i-adj かったです / くなかったです',
      items: [
        {
          prompt: {
            en: 'It was close from the hotel to the station.',
            vi: 'Từ khách sạn ra ga gần.'
          },
          jp: 'ホテルから 駅まで 近かったです。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '近', reading: 'ちか' }
          ]
        },
        {
          prompt: { en: 'The shinkansen was very fast.', vi: 'Tàu Shinkansen rất nhanh.' },
          jp: '新幹線は とても 速かったです。',
          ruby: [
            { base: '新', reading: 'しん' },
            { base: '幹', reading: 'かん' },
            { base: '線', reading: 'せん' },
            { base: '速', reading: 'はや' }
          ]
        },
        {
          prompt: { en: 'This spring was warm.', vi: 'Mùa xuân năm nay ấm áp.' },
          jp: '今年の 春は 暖かかったです。',
          ruby: [
            { base: '今', reading: 'こ' },
            { base: '年', reading: 'とし' },
            { base: '春', reading: 'はる' },
            { base: '暖', reading: 'あたた' }
          ]
        },
        {
          prompt: { en: 'The sukiyaki was a little sweet.', vi: 'Món sukiyaki hơi ngọt.' },
          jp: 'すき焼きは ちょっと 甘かったです。',
          ruby: [
            { base: '焼', reading: 'や' },
            { base: '甘', reading: 'あま' }
          ]
        },
        {
          prompt: {
            en: 'Was the trip fun? ...Yes, it was a lot of fun.',
            vi: 'Chuyến du lịch có vui không? ...Có, rất vui.'
          },
          jp: '旅行は 楽しかったですか。……はい、とても 楽しかったです。',
          ruby: [
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' },
            { base: '楽', reading: 'たの' },
            { base: '楽', reading: 'たの' }
          ]
        },
        {
          prompt: { en: 'My travel bag was heavy.', vi: 'Cái túi du lịch nặng.' },
          jp: '旅行の かばんは 重かったです。',
          ruby: [
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' },
            { base: '重', reading: 'おも' }
          ]
        },
        {
          prompt: { en: 'The test was not very difficult.', vi: 'Bài kiểm tra không khó lắm.' },
          jp: 'テストは あまり 難しくなかったです。',
          ruby: [{ base: '難', reading: 'むずか' }]
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
          prompt: { en: 'Tokyo has more people than Osaka.', vi: 'Tokyo đông người hơn Osaka.' },
          jp: '東京は 大阪より 人が 多いです。',
          ruby: [
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '人', reading: 'ひと' },
            { base: '多', reading: 'おお' }
          ]
        },
        {
          prompt: {
            en: 'This room is much bigger than that one.',
            vi: 'Phòng này rộng hơn phòng kia nhiều.'
          },
          jp: 'この 部屋は あの 部屋より ずっと 広いです。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '広', reading: 'ひろ' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 と N2 と どちらが / N の ほうが',
      items: [
        {
          prompt: {
            en: 'Which is faster, the train or the bus? ...The train is faster.',
            vi: 'Tàu điện và xe buýt cái nào nhanh hơn? ...Tàu điện nhanh hơn.'
          },
          jp: '電車と バスと どちらが 速いですか。……電車の ほうが 速いです。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '速', reading: 'はや' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '速', reading: 'はや' }
          ]
        },
        {
          prompt: {
            en: 'Which do you like better, sushi or tempura? ...I like sushi better.',
            vi: 'Sushi và tempura anh thích món nào hơn? ...Tôi thích sushi hơn.'
          },
          jp: 'おすしと てんぷらと どちらが 好きですか。……おすしの ほうが 好きです。',
          ruby: [
            { base: '好', reading: 'す' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: {
            en: 'Which is better, coffee or tea?',
            vi: 'Cà phê và trà, cái nào hơn?'
          },
          jp: 'コーヒーと お茶と どちらが いいですか。',
          ruby: [{ base: '茶', reading: 'ちゃ' }]
        },
        {
          prompt: {
            en: 'Which is bigger, Tokyo or Osaka? ...Tokyo is bigger.',
            vi: 'Tokyo và Osaka nơi nào lớn hơn? ...Tokyo lớn hơn.'
          },
          jp: '東京と 大阪と どちらが 大きいですか。……東京の ほうが 大きいです。',
          ruby: [
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '大', reading: 'おお' },
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '大', reading: 'おお' }
          ]
        },
        {
          prompt: {
            en: 'Which would you like, beer or wine? ...Either is fine.',
            vi: 'Bia hay rượu vang, anh thích cái nào? ...Cái nào cũng được.'
          },
          jp: 'ビールと ワインと どちらが いいですか。……どちらも いいです。'
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
            en: 'Which season do you like the best in the year?',
            vi: 'Trong năm, bạn thích mùa nào nhất?'
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
          prompt: {
            en: 'Who is the tallest in your family? ...My father is the tallest.',
            vi: 'Trong gia đình ai cao nhất? ...Bố tôi cao nhất.'
          },
          jp: '家族の 中で だれが いちばん 背が 高いですか。……父が いちばん 高いです。',
          ruby: [
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '中', reading: 'なか' },
            { base: '背', reading: 'せ' },
            { base: '高', reading: 'たか' },
            { base: '父', reading: 'ちち' },
            { base: '高', reading: 'たか' }
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
            en: 'Of all Japanese dishes, which do you like best? ...I like tempura best.',
            vi: 'Trong các món Nhật anh thích món nào nhất? ...Tôi thích tempura nhất.'
          },
          jp: '日本料理の 中で 何が いちばん 好きですか。……てんぷらが いちばん 好きです。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '料', reading: 'りょう' },
            { base: '理', reading: 'り' },
            { base: '中', reading: 'なか' },
            { base: '何', reading: 'なに' },
            { base: '好', reading: 'す' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: {
            en: 'When is the hottest time of year? ...August is the hottest.',
            vi: 'Trong năm lúc nào nóng nhất? ...Tháng 8 nóng nhất.'
          },
          jp: '一年で いつが いちばん 暑いですか。……8月が いちばん 暑いです。',
          ruby: [
            { base: '一', reading: 'いち' },
            { base: '年', reading: 'ねん' },
            { base: '暑', reading: 'あつ' },
            { base: '月', reading: 'がつ' },
            { base: '暑', reading: 'あつ' }
          ]
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
          prompt: { en: 'Which bag? ...That big one.', vi: 'Cái cặp nào? ...Cái to kia.' },
          jp: 'どの かばんですか。……あの 大きいのです。',
          ruby: [{ base: '大', reading: 'おお' }]
        },
        {
          prompt: { en: 'The light one, please.', vi: 'Cái nhẹ, làm ơn.' },
          jp: '軽いのを ください。',
          ruby: [{ base: '軽', reading: 'かる' }]
        },
        {
          prompt: { en: 'How much is this red one?', vi: 'Cái màu đỏ này bao nhiêu tiền?' },
          jp: 'この 赤いのは いくらですか。',
          ruby: [{ base: '赤', reading: 'あか' }]
        },
        {
          prompt: { en: 'Do you have a cheaper one?', vi: 'Có cái nào rẻ hơn không?' },
          jp: 'もっと 安いのは ありますか。',
          ruby: [{ base: '安', reading: 'やす' }]
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
