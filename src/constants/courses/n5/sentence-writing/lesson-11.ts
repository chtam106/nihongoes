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
          prompt: { en: 'Please give me five apples.', vi: 'Cho tôi năm quả táo.' },
          jp: 'りんごを 五つ ください。',
          ruby: [{ base: '五', reading: 'いつ' }]
        },
        {
          prompt: { en: 'I bought six mandarin oranges.', vi: 'Tôi đã mua sáu quả quýt.' },
          jp: 'みかんを 六つ 買いました。',
          ruby: [
            { base: '六', reading: 'むっ' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'There are seven sandwiches.', vi: 'Có bảy cái bánh sandwich.' },
          jp: 'サンドイッチが 七つ あります。',
          ruby: [{ base: '七', reading: 'なな' }]
        },
        {
          prompt: { en: 'I want eight ice creams.', vi: 'Tôi muốn tám cây kem.' },
          jp: 'アイスクリームを 八つ ください。',
          ruby: [{ base: '八', reading: 'やっ' }]
        },
        {
          prompt: { en: 'Please give me nine apples.', vi: 'Cho tôi chín quả táo.' },
          jp: 'りんごを 九つ ください。',
          ruby: [{ base: '九', reading: 'ここの' }]
        },
        {
          prompt: { en: 'I bought ten mandarin oranges.', vi: 'Tôi đã mua mười quả quýt.' },
          jp: 'みかんを 十 買いました。',
          ruby: [
            { base: '十', reading: 'とお' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'There is one person.', vi: 'Có một người.' },
          jp: '一人 います。',
          ruby: [
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' }
          ]
        },
        {
          prompt: { en: 'There are two people.', vi: 'Có hai người.' },
          jp: '二人 います。',
          ruby: [
            { base: '二', reading: 'ふた' },
            { base: '人', reading: 'り' }
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
          prompt: { en: 'How many stamps?', vi: 'Bao nhiêu tem?' },
          jp: '切手は 何枚ですか。',
          ruby: [
            { base: '切', reading: 'きっ' },
            { base: '手', reading: 'て' },
            { base: '何', reading: 'なん' },
            { base: '枚', reading: 'まい' }
          ]
        },
        {
          prompt: { en: 'How many postcards?', vi: 'Bao nhiêu bưu thiếp?' },
          jp: 'はがきは 何枚ですか。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '枚', reading: 'まい' }
          ]
        },
        {
          prompt: { en: 'How many envelopes?', vi: 'Bao nhiêu phong bì?' },
          jp: '封筒は 何枚ですか。',
          ruby: [
            { base: '封', reading: 'ふう' },
            { base: '筒', reading: 'とう' },
            { base: '何', reading: 'なん' },
            { base: '枚', reading: 'まい' }
          ]
        }
      ]
    },
    {
      pattern: 'どのくらい / 〜ぐらい / かかります',
      items: [
        {
          prompt: { en: 'How long does it take?', vi: 'Mất bao lâu?' },
          jp: 'どのくらい かかりますか。'
        },
        {
          prompt: { en: 'It takes about two hours.', vi: 'Mất khoảng hai tiếng.' },
          jp: '2時間ぐらい かかります。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' }
          ]
        },
        {
          prompt: { en: 'It takes about three weeks.', vi: 'Mất khoảng ba tuần.' },
          jp: '3週間ぐらい かかります。',
          ruby: [
            { base: '週', reading: 'しゅう' },
            { base: '間', reading: 'かん' }
          ]
        },
        {
          prompt: { en: 'It takes about two months.', vi: 'Mất khoảng hai tháng.' },
          jp: '2か月ぐらい かかります。',
          ruby: [{ base: '月', reading: 'げつ' }]
        },
        {
          prompt: { en: 'It takes about one year.', vi: 'Mất khoảng một năm.' },
          jp: '1年ぐらい かかります。',
          ruby: [{ base: '年', reading: 'ねん' }]
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
          prompt: {
            en: 'The international students meet twice a month.',
            vi: 'Du học sinh gặp hai lần một tháng.'
          },
          jp: '留学生は 一か月に 2回 会います。',
          ruby: [
            { base: '留', reading: 'りゅう' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' },
            { base: '一', reading: 'いっ' },
            { base: '月', reading: 'げつ' },
            { base: '回', reading: 'かい' },
            { base: '会', reading: 'あ' }
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
          prompt: { en: 'I have only one younger sister.', vi: 'Tôi chỉ có một em gái.' },
          jp: '妹が 一人 だけ います。',
          ruby: [
            { base: '妹', reading: 'いもうと' },
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' }
          ]
        },
        {
          prompt: { en: 'I have only one older brother.', vi: 'Tôi chỉ có một anh trai.' },
          jp: '兄が 一人 だけ います。',
          ruby: [
            { base: '兄', reading: 'あに' },
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' }
          ]
        },
        {
          prompt: { en: 'I have only one older sister.', vi: 'Tôi chỉ có một chị gái.' },
          jp: '姉が 一人 だけ います。',
          ruby: [
            { base: '姉', reading: 'あね' },
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' }
          ]
        },
        {
          prompt: { en: 'Everyone is in Japan.', vi: 'Mọi người đều ở Nhật.' },
          jp: 'みんな 日本に います。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' }
          ]
        },
        {
          prompt: { en: 'It is 800 yen in total.', vi: 'Tổng cộng 800 yên.' },
          jp: '全部で 800円です。',
          ruby: [
            { base: '全', reading: 'ぜん' },
            { base: '部', reading: 'ぶ' },
            { base: '円', reading: 'えん' }
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
            en: 'Maria has only one older sister.',
            vi: 'Maria chỉ có một người chị.'
          },
          jp: 'マリアさんは お姉さんが 一人 だけ います。',
          ruby: [
            { base: '姉', reading: 'ねえ' },
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' }
          ]
        },
        {
          prompt: {
            en: 'Yuki has only one younger brother.',
            vi: 'Bé Yuki chỉ có một em trai.'
          },
          jp: 'ゆきちゃんは 弟さんが 一人 だけ います。',
          ruby: [
            { base: '弟', reading: 'おとうと' },
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' }
          ]
        },
        {
          prompt: {
            en: 'Yamada has only one younger sister.',
            vi: 'Anh Yamada chỉ có một em gái.'
          },
          jp: 'やまださんは 妹さんが 一人 だけ います。',
          ruby: [
            { base: '妹', reading: 'いもうと' },
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' }
          ]
        },
        {
          prompt: { en: 'I have three siblings.', vi: 'Tôi có ba anh chị em.' },
          jp: '兄弟が 3人 います。',
          ruby: [
            { base: '兄', reading: 'きょう' },
            { base: '弟', reading: 'だい' },
            { base: '人', reading: 'にん' }
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
      prompt: { en: 'Just to the station for a bit.', vi: 'Tôi đi ga một chút.' },
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
