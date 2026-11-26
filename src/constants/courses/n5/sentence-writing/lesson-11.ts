import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson11SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'ひとつ … とお / 〜にん / 〜だい / 〜まい / 〜かい',
      patternRuby: [
        { base: '一', reading: 'ひと' },
        { base: '人', reading: 'にん' },
        { base: '台', reading: 'だい' },
        { base: '枚', reading: 'まい' },
        { base: '回', reading: 'かい' }
      ],
      items: [
        {
          prompt: { en: 'Please give me one apple.', vi: 'Cho tôi một quả táo.' },
          jp: 'りんごを 一つ ください。',
          ruby: [{ base: '一', reading: 'ひと' }]
        },
        {
          prompt: { en: 'I bought two mandarin oranges.', vi: 'Tôi đã mua hai quả quýt.' },
          jp: 'みかんを 二つ 買いました。',
          ruby: [
            { base: '二', reading: 'ふた' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'There are three sandwiches.', vi: 'Có ba cái bánh sandwich.' },
          jp: 'サンドイッチが 三つ あります。',
          ruby: [{ base: '三', reading: 'みっ' }]
        },
        {
          prompt: { en: 'I ate four ice creams.', vi: 'Tôi đã ăn bốn cây kem.' },
          jp: 'アイスクリームを 四つ 食べました。',
          ruby: [
            { base: '四', reading: 'よっ' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'There are three people in the class.', vi: 'Trong lớp có ba người.' },
          jp: 'クラスに 3人 います。',
          ruby: [{ base: '人', reading: 'にん' }]
        },
        {
          prompt: { en: 'There are two computers.', vi: 'Có hai máy tính.' },
          jp: 'パソコンが 2台 あります。',
          ruby: [{ base: '台', reading: 'だい' }]
        },
        {
          prompt: { en: 'Please give me five stamps.', vi: 'Cho tôi năm tem.' },
          jp: '切手を 5枚 ください。',
          ruby: [
            { base: '切', reading: 'きっ' },
            { base: '手', reading: 'て' },
            { base: '枚', reading: 'まい' }
          ]
        },
        {
          prompt: { en: 'I go twice a week.', vi: 'Tôi đi hai lần một tuần.' },
          jp: '一週間に 2回 行きます。',
          ruby: [
            { base: '一', reading: 'いっ' },
            { base: '週', reading: 'しゅう' },
            { base: '間', reading: 'かん' },
            { base: '回', reading: 'かい' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'いくつ / 何 + Counter',
      patternRuby: [{ base: '何', reading: 'なん' }],
      items: [
        {
          prompt: { en: 'How many apples are there?', vi: 'Có mấy quả táo?' },
          jp: 'りんごは いくつ ありますか。'
        },
        {
          prompt: { en: 'How many people are there?', vi: 'Có bao nhiêu người?' },
          jp: '何人 いますか。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '人', reading: 'にん' }
          ]
        },
        {
          prompt: {
            en: 'How many 80-yen stamps are you buying?',
            vi: 'Anh mua mấy con tem 80 yên?'
          },
          jp: '80円の 切手を 何枚 買いますか。',
          ruby: [
            { base: '円', reading: 'えん' },
            { base: '切', reading: 'きっ' },
            { base: '手', reading: 'て' },
            { base: '何', reading: 'なん' },
            { base: '枚', reading: 'まい' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'How many people are in your family? ...Four.',
            vi: 'Gia đình anh có mấy người? ...4 người.'
          },
          jp: 'ご家族は 何人ですか。……4人です。',
          ruby: [
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '何', reading: 'なん' },
            { base: '人', reading: 'にん' },
            { base: '人', reading: 'にん' }
          ]
        },
        {
          prompt: {
            en: 'How many computers are there in the office?',
            vi: 'Văn phòng có mấy cái máy tính?'
          },
          jp: '事務所に パソコンは 何台 ありますか。',
          ruby: [
            { base: '事', reading: 'じ' },
            { base: '務', reading: 'む' },
            { base: '所', reading: 'しょ' },
            { base: '何', reading: 'なん' },
            { base: '台', reading: 'だい' }
          ]
        }
      ]
    },
    {
      pattern: 'どのくらい / 〜ぐらい / かかります',
      items: [
        {
          prompt: {
            en: 'How long does it take to the station? ...About ten minutes on foot.',
            vi: 'Đến ga mất bao lâu? ...Đi bộ khoảng 10 phút.'
          },
          jp: '駅まで どのくらい かかりますか。……歩いて 10分ぐらいです。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '歩', reading: 'ある' },
            { base: '分', reading: 'ぷん' }
          ]
        },
        {
          prompt: {
            en: 'It takes about three hours from Tokyo to Osaka by shinkansen.',
            vi: 'Từ Tokyo đến Osaka đi Shinkansen mất khoảng 3 tiếng.'
          },
          jp: '東京から 大阪まで 新幹線で 3時間ぐらい かかります。',
          ruby: [
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '新', reading: 'しん' },
            { base: '幹', reading: 'かん' },
            { base: '線', reading: 'せん' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' }
          ]
        },
        {
          prompt: {
            en: 'Airmail takes about five days.',
            vi: 'Thư hàng không mất khoảng năm ngày.'
          },
          jp: '航空便は 5日ぐらい かかります。',
          ruby: [
            { base: '航', reading: 'こう' },
            { base: '空', reading: 'くう' },
            { base: '便', reading: 'びん' },
            { base: '日', reading: 'にち' }
          ]
        },
        {
          prompt: {
            en: 'Surface mail takes about one month.',
            vi: 'Thư đường biển mất khoảng một tháng.'
          },
          jp: '船便は 1か月ぐらい かかります。',
          ruby: [
            { base: '船', reading: 'ふな' },
            { base: '便', reading: 'びん' },
            { base: '月', reading: 'げつ' }
          ]
        }
      ]
    },
    {
      pattern: 'Period に Number 回',
      patternRuby: [{ base: '回', reading: 'かい' }],
      items: [
        {
          prompt: { en: 'I take a day off once a week.', vi: 'Tôi nghỉ một lần một tuần.' },
          jp: '一週間に 1回 休みます。',
          ruby: [
            { base: '一', reading: 'いっ' },
            { base: '週', reading: 'しゅう' },
            { base: '間', reading: 'かん' },
            { base: '回', reading: 'かい' },
            { base: '休', reading: 'やす' }
          ]
        },
        {
          prompt: { en: 'I eat curry three times a week.', vi: 'Tôi ăn cà ri ba lần một tuần.' },
          jp: '一週間に 3回 カレーライスを 食べます。',
          ruby: [
            { base: '一', reading: 'いっ' },
            { base: '週', reading: 'しゅう' },
            { base: '間', reading: 'かん' },
            { base: '回', reading: 'かい' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: {
            en: 'I go to a foreign country once a year.',
            vi: 'Tôi đi nước ngoài một lần một năm.'
          },
          jp: '一年に 1回 外国へ 行きます。',
          ruby: [
            { base: '一', reading: 'いち' },
            { base: '年', reading: 'ねん' },
            { base: '回', reading: 'かい' },
            { base: '外', reading: 'がい' },
            { base: '国', reading: 'こく' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I watch a movie twice a month.', vi: 'Một tháng tôi xem phim hai lần.' },
          jp: '一か月に 2回 映画を 見ます。',
          ruby: [
            { base: '一', reading: 'いっ' },
            { base: '月', reading: 'げつ' },
            { base: '回', reading: 'かい' },
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: { en: 'I call my parents once a week.', vi: 'Tôi gọi bố mẹ một lần một tuần.' },
          jp: '一週間に 1回 両親に 電話します。',
          ruby: [
            { base: '一', reading: 'いっ' },
            { base: '週', reading: 'しゅう' },
            { base: '間', reading: 'かん' },
            { base: '回', reading: 'かい' },
            { base: '両', reading: 'りょう' },
            { base: '親', reading: 'しん' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        }
      ]
    },
    {
      pattern: 'N / Quantity だけ',
      items: [
        {
          prompt: { en: 'I have only one younger brother.', vi: 'Tôi chỉ có một em trai.' },
          jp: '弟が 一人 だけ います。',
          ruby: [
            { base: '弟', reading: 'おとうと' },
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' }
          ]
        },
        {
          prompt: {
            en: 'I am the only foreigner in this class.',
            vi: 'Trong lớp này người nước ngoài chỉ có mình tôi.'
          },
          jp: 'この クラスで 外国人は 私だけです。',
          ruby: [
            { base: '外', reading: 'がい' },
            { base: '国', reading: 'こく' },
            { base: '人', reading: 'じん' },
            { base: '私', reading: 'わたし' }
          ]
        },
        {
          prompt: { en: 'My only day off is Sunday.', vi: 'Tôi chỉ được nghỉ mỗi Chủ nhật.' },
          jp: '休みは 日曜日だけです。',
          ruby: [
            { base: '休', reading: 'やす' },
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          prompt: {
            en: 'Alex has only one older brother.',
            vi: 'Anh Alex chỉ có một người anh.'
          },
          jp: 'アレックスさんは お兄さんが 一人 だけ います。',
          ruby: [
            { base: '兄', reading: 'にい' },
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' }
          ]
        },
        {
          prompt: {
            en: 'I understand just a little Japanese.',
            vi: 'Tiếng Nhật thì tôi chỉ hiểu một chút.'
          },
          jp: '日本語は 少しだけ わかります。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '少', reading: 'すこ' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'Certainly. / Understood (polite).', vi: 'Vâng, tôi đã rõ ạ.' },
      jp: 'かしこまりました。'
    },
    {
      prompt: { en: 'Nice weather, is it not?', vi: 'Trời đẹp nhỉ.' },
      jp: 'いい お天気ですね。',
      ruby: [
        { base: '天', reading: 'てん' },
        { base: '気', reading: 'き' }
      ]
    },
    {
      prompt: { en: 'Are you going out?', vi: 'Anh/Chị đi ra ngoài đấy à?' },
      jp: 'お出かけですか。',
      ruby: [{ base: '出', reading: 'で' }]
    },
    {
      prompt: { en: 'Just to the station for a bit.', vi: 'Tôi đi đến ga một chút.' },
      jp: 'ちょっと 駅まで。',
      ruby: [{ base: '駅', reading: 'えき' }]
    },
    {
      prompt: { en: 'See you. / Take care (to someone leaving).', vi: 'Anh/Chị đi nhé.' },
      jp: '行ってらっしゃい。',
      ruby: [{ base: '行', reading: 'い' }]
    },
    {
      prompt: { en: 'I am off. / I will be back.', vi: 'Tôi đi đây.' },
      jp: '行ってきます。',
      ruby: [{ base: '行', reading: 'い' }]
    }
  ]
};
