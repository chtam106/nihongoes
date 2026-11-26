import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson19SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-た',
      items: [
        {
          prompt: {
            en: 'I climbed Mt. Fuji last year. (plain)',
            vi: 'Năm ngoái tôi đã leo núi Phú Sĩ. (thể thường)'
          },
          jp: '去年 富士山に 登った。',
          ruby: [
            { base: '去', reading: 'きょ' },
            { base: '年', reading: 'ねん' },
            { base: '富', reading: 'ふ' },
            { base: '士', reading: 'じ' },
            { base: '山', reading: 'さん' },
            { base: '登', reading: 'のぼ' }
          ]
        },
        {
          prompt: {
            en: 'Last night I stayed at a hotel in front of the station. (plain)',
            vi: 'Tối qua tôi ở khách sạn trước ga. (thể thường)'
          },
          jp: 'ゆうべは 駅前の ホテルに 泊まった。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '前', reading: 'まえ' },
            { base: '泊', reading: 'と' }
          ]
        },
        {
          prompt: {
            en: 'I cleaned my room yesterday. (plain)',
            vi: 'Hôm qua tôi đã dọn phòng. (thể thường)'
          },
          jp: 'きのう 部屋を 掃除した。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '掃', reading: 'そう' },
            { base: '除', reading: 'じ' }
          ]
        },
        {
          prompt: {
            en: 'I did the laundry this morning. (plain)',
            vi: 'Sáng nay tôi đã giặt đồ. (thể thường)'
          },
          jp: '今朝 洗濯した。',
          ruby: [
            { base: '今', reading: 'け' },
            { base: '朝', reading: 'さ' },
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
          prompt: {
            en: 'Have you ever been skiing? ...Yes, once.',
            vi: 'Anh đã từng trượt tuyết chưa? ...Rồi, một lần.'
          },
          jp: 'スキーを した ことが ありますか。……はい、一度 あります。',
          ruby: [
            { base: '一', reading: 'いち' },
            { base: '度', reading: 'ど' }
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
            vi: 'Anh/chị đã từng làm trà đạo chưa?'
          },
          jp: 'お茶を した ことが ありますか。',
          ruby: [{ base: '茶', reading: 'ちゃ' }]
        },
        {
          prompt: {
            en: 'Have you ever ridden a horse? ...No, never.',
            vi: 'Anh đã từng cưỡi ngựa chưa? ...Chưa, chưa lần nào.'
          },
          jp: '馬に 乗った ことが ありますか。……いいえ、一度も ありません。',
          ruby: [
            { base: '馬', reading: 'うま' },
            { base: '乗', reading: 'の' },
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
            vi: 'Cuối tuần tôi chơi gôn, làm trà đạo, v.v.'
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
            en: 'During summer vacation I did things like swim in the sea and climb mountains.',
            vi: 'Kỳ nghỉ hè tôi đã đi bơi ở biển, leo núi...'
          },
          jp: '夏休みは 海で 泳いだり、山に 登ったり しました。',
          ruby: [
            { base: '夏', reading: 'なつ' },
            { base: '休', reading: 'やす' },
            { base: '海', reading: 'うみ' },
            { base: '泳', reading: 'およ' },
            { base: '山', reading: 'やま' },
            { base: '登', reading: 'のぼ' }
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
            en: 'On Sundays I do things like read books and listen to music.',
            vi: 'Chủ nhật tôi đọc sách, nghe nhạc...'
          },
          jp: '日曜日は 本を 読んだり、音楽を 聞いたり します。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '本', reading: 'ほん' },
            { base: '読', reading: 'よ' },
            { base: '音', reading: 'おん' },
            { base: '楽', reading: 'がく' },
            { base: '聞', reading: 'き' }
          ]
        }
      ]
    },
    {
      pattern: 'Adj / N に なります',
      items: [
        {
          prompt: { en: 'I ate lunch and got sleepy.', vi: 'Ăn trưa xong tôi buồn ngủ.' },
          jp: '昼ごはんを 食べて、眠く なりました。',
          ruby: [
            { base: '昼', reading: 'ひる' },
            { base: '食', reading: 'た' },
            { base: '眠', reading: 'ねむ' }
          ]
        },
        {
          prompt: {
            en: 'I practiced every day and got stronger.',
            vi: 'Ngày nào cũng luyện tập nên tôi đã mạnh lên.'
          },
          jp: '毎日 練習して、強く なりました。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '練', reading: 'れん' },
            { base: '習', reading: 'しゅう' },
            { base: '強', reading: 'つよ' }
          ]
        },
        {
          prompt: { en: 'My eyesight has gotten worse lately.', vi: 'Dạo này mắt tôi kém đi.' },
          jp: '最近 目が 悪く なりました。',
          ruby: [
            { base: '最', reading: 'さい' },
            { base: '近', reading: 'きん' },
            { base: '目', reading: 'め' },
            { base: '悪', reading: 'わる' }
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
            en: 'I took the medicine and got better.',
            vi: 'Uống thuốc xong tôi đã khỏe lại.'
          },
          jp: '薬を 飲んで、元気に なりました。',
          ruby: [
            { base: '薬', reading: 'くすり' },
            { base: '飲', reading: 'の' },
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
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
