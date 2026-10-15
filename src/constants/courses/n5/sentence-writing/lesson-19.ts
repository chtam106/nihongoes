import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson19SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-た',
      items: [
        {
          prompt: { en: 'I climbed a mountain. (plain)', vi: 'Tôi đã leo núi. (thân mật)' },
          jp: '山に 登った。',
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '登', reading: 'のぼ' }
          ]
        },
        {
          prompt: { en: 'I stayed at a hotel. (plain)', vi: 'Tôi đã ở khách sạn. (thân mật)' },
          jp: 'ホテルに 泊まった。',
          ruby: [{ base: '泊', reading: 'と' }]
        },
        {
          prompt: { en: 'I cleaned the room. (plain)', vi: 'Tôi đã dọn phòng. (thân mật)' },
          jp: '部屋を 掃除した。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '掃', reading: 'そう' },
            { base: '除', reading: 'じ' }
          ]
        },
        {
          prompt: { en: 'I did the laundry. (plain)', vi: 'Tôi đã giặt quần áo. (thân mật)' },
          jp: '洗濯した。',
          ruby: [
            { base: '洗', reading: 'せん' },
            { base: '濯', reading: 'たく' }
          ]
        },
        {
          prompt: {
            en: 'I played golf yesterday. (plain)',
            vi: 'Hôm qua tôi chơi gôn. (thân mật)'
          },
          jp: 'きのう ゴルフを した。'
        }
      ]
    },
    {
      pattern: 'V-た ことが あります',
      patternRuby: [{ base: 'こと', reading: 'こと' }],
      items: [
        {
          prompt: {
            en: 'Have you ever climbed Mt. Fuji?',
            vi: 'Anh/chị đã từng leo núi Phú Sĩ chưa?'
          },
          jp: '富士山に 登った ことが ありますか。',
          ruby: [
            { base: '富', reading: 'ふ' },
            { base: '士', reading: 'じ' },
            { base: '山', reading: 'さん' },
            { base: '登', reading: 'のぼ' }
          ]
        },
        {
          prompt: { en: 'Yes, I have climbed it once.', vi: 'Rồi, tôi đã leo một lần.' },
          jp: 'はい、一度 登った ことが あります。',
          ruby: [
            { base: '一', reading: 'いち' },
            { base: '度', reading: 'ど' },
            { base: '登', reading: 'のぼ' }
          ]
        },
        {
          prompt: {
            en: 'Have you ever stayed at a hotel in Kyoto?',
            vi: 'Anh/chị đã từng ở khách sạn ở Kyoto chưa?'
          },
          jp: '京都の ホテルに 泊まった ことが ありますか。',
          ruby: [
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '泊', reading: 'と' }
          ]
        },
        {
          prompt: { en: 'Have you ever watched sumo?', vi: 'Anh/chị đã từng xem vật Sumo chưa?' },
          jp: '相撲を 見た ことが ありますか。',
          ruby: [
            { base: '相', reading: 'す' },
            { base: '撲', reading: 'もう' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: 'Have you ever done tea ceremony?',
            vi: 'Anh/chị đã từng học trà đạo chưa?'
          },
          jp: 'お茶を した ことが ありますか。',
          ruby: [{ base: '茶', reading: 'ちゃ' }]
        },
        {
          prompt: { en: 'No, I have never played golf.', vi: 'Chưa, tôi chưa chơi gôn lần nào.' },
          jp: 'いいえ、一度も ゴルフをした ことが ありません。',
          ruby: [
            { base: '一', reading: 'いち' },
            { base: '度', reading: 'ど' }
          ]
        }
      ]
    },
    {
      pattern: 'V-たり、V-たり します',
      items: [
        {
          prompt: {
            en: 'On days off I do things like clean and do laundry.',
            vi: 'Ngày nghỉ thì tôi dọn nhà, giặt quần áo, v.v.'
          },
          jp: '休みの 日は 掃除を したり、洗濯を したり します。',
          ruby: [
            { base: '休', reading: 'やす' },
            { base: '日', reading: 'ひ' },
            { base: '掃', reading: 'そう' },
            { base: '除', reading: 'じ' },
            { base: '洗', reading: 'せん' },
            { base: '濯', reading: 'たく' }
          ]
        },
        {
          prompt: {
            en: 'On the weekend I do things like play golf and do tea ceremony.',
            vi: 'Cuối tuần tôi chơi gôn, học trà đạo, v.v.'
          },
          jp: '週末は ゴルフを したり、お茶を したり します。',
          ruby: [
            { base: '週', reading: 'しゅう' },
            { base: '末', reading: 'まつ' },
            { base: '茶', reading: 'ちゃ' }
          ]
        },
        {
          prompt: {
            en: 'In winter I do things like climb mountains and stay at hotels.',
            vi: 'Mùa đông tôi leo núi, ở khách sạn, v.v.'
          },
          jp: '冬は 山に 登ったり、ホテルに 泊まったり します。',
          ruby: [
            { base: '冬', reading: 'ふゆ' },
            { base: '山', reading: 'やま' },
            { base: '登', reading: 'のぼ' },
            { base: '泊', reading: 'と' }
          ]
        },
        {
          prompt: {
            en: 'Yesterday I did things like watch sumo and practice Japanese.',
            vi: 'Hôm qua tôi xem vật Sumo, luyện tiếng Nhật, v.v.'
          },
          jp: 'きのう 相撲を 見たり、日本語の 練習を したり しました。',
          ruby: [
            { base: '相', reading: 'す' },
            { base: '撲', reading: 'もう' },
            { base: '見', reading: 'み' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '練', reading: 'れん' },
            { base: '習', reading: 'しゅう' }
          ]
        },
        {
          prompt: {
            en: 'Thanks to you, on my day off I did things like clean and rest.',
            vi: 'Nhờ anh/chị, ngày nghỉ tôi dọn nhà, nghỉ ngơi, v.v.'
          },
          jp: 'おかげさまで、休みの 日は 掃除を したり、休んだり しました。',
          ruby: [
            { base: '休', reading: 'やす' },
            { base: '日', reading: 'ひ' },
            { base: '掃', reading: 'そう' },
            { base: '除', reading: 'じ' },
            { base: '休', reading: 'やす' }
          ]
        }
      ]
    },
    {
      pattern: 'Adj / N に なります',
      items: [
        {
          prompt: { en: 'I become sleepy at night.', vi: 'Tối tôi trở nên buồn ngủ.' },
          jp: '夜は 眠く なります。',
          ruby: [
            { base: '夜', reading: 'よる' },
            { base: '眠', reading: 'ねむ' }
          ]
        },
        {
          prompt: {
            en: 'If I practice, I will become strong.',
            vi: 'Nếu luyện tập, tôi sẽ mạnh lên.'
          },
          jp: '練習を すると、強く なります。',
          ruby: [
            { base: '練', reading: 'れん' },
            { base: '習', reading: 'しゅう' },
            { base: '強', reading: 'つよ' }
          ]
        },
        {
          prompt: { en: 'My body is becoming weak.', vi: 'Cơ thể tôi đang yếu đi.' },
          jp: '体が 弱く なります。',
          ruby: [
            { base: '体', reading: 'からだ' },
            { base: '弱', reading: 'よわ' }
          ]
        },
        {
          prompt: { en: 'It will soon become summer.', vi: 'Sắp đến mùa hè.' },
          jp: 'もうすぐ 夏に なります。',
          ruby: [{ base: '夏', reading: 'なつ' }]
        },
        {
          prompt: {
            en: 'My condition is gradually getting better.',
            vi: 'Tình trạng của tôi dần tốt lên.'
          },
          jp: '調子が だんだん よく なります。',
          ruby: [
            { base: '調', reading: 'ちょう' },
            { base: '子', reading: 'し' }
          ]
        },
        {
          prompt: {
            en: 'Thanks to you I became well. But I am still sleepy.',
            vi: 'Nhờ anh/chị tôi đã khỏe. Nhưng tôi vẫn buồn ngủ.'
          },
          jp: 'おかげさまで 元気に なりました。でも、まだ 眠いです。',
          ruby: [
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' },
            { base: '眠', reading: 'ねむ' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'Cheers!', vi: 'Cạn chén! / Nâng cốc!' },
      jp: '乾杯',
      ruby: [
        { base: '乾', reading: 'かん' },
        { base: '杯', reading: 'ぱい' }
      ]
    },
    {
      prompt: {
        en: 'diet (go on a diet)',
        vi: 'việc ăn kiêng, chế độ giảm cân'
      },
      jp: 'ダイエット'
    },
    {
      prompt: { en: 'excessive, impossible', vi: 'không thể, quá sức' },
      jp: '無理です。',
      ruby: [
        { base: '無', reading: 'む' },
        { base: '理', reading: 'り' }
      ]
    },
    {
      prompt: { en: "good for one's health", vi: 'tốt cho sức khỏe' },
      jp: '体に いい',
      ruby: [{ base: '体', reading: 'からだ' }]
    },
    {
      prompt: { en: 'Yes, that is right. / I agree.', vi: 'Đúng thế ạ. / Vâng, phải.' },
      jp: 'そうですね。'
    }
  ]
};
