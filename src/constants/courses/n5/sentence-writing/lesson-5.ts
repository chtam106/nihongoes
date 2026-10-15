import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson5SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N へ 行きます / 来ます / 帰ります',
      patternRuby: [
        { base: '行', reading: 'い' },
        { base: '来', reading: 'き' },
        { base: '帰', reading: 'かえ' }
      ],
      items: [
        {
          prompt: { en: 'I go to school.', vi: 'Tôi đi trường.' },
          jp: '学校へ 行きます。',
          ruby: [
            { base: '学', reading: 'がっ' },
            { base: '校', reading: 'こう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go to the supermarket.', vi: 'Tôi đi siêu thị.' },
          jp: 'スーパーへ 行きます。',
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          prompt: { en: 'I go to the station.', vi: 'Tôi đi nhà ga.' },
          jp: '駅へ 行きます。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I came to Japan.', vi: 'Tôi đã đến Nhật Bản.' },
          jp: '日本へ 来ました。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'I go home.', vi: 'Tôi về nhà.' },
          jp: 'うちへ 帰ります。',
          ruby: [{ base: '帰', reading: 'かえ' }]
        }
      ]
    },
    {
      pattern: 'どこ [へ] も 行きません',
      patternRuby: [{ base: '行', reading: 'い' }],
      items: [
        {
          prompt: { en: 'I am not going anywhere.', vi: 'Tôi không đi đâu cả.' },
          jp: 'どこも 行きません。',
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          prompt: { en: 'I did not go anywhere on Sunday.', vi: 'Chủ nhật tôi không đi đâu cả.' },
          jp: '日曜日 どこへも 行きませんでした。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I am not going anywhere alone.', vi: 'Tôi không đi đâu một mình.' },
          jp: '一人で どこも 行きません。',
          ruby: [
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'No one came yesterday.', vi: 'Hôm qua không ai đến cả.' },
          jp: 'きのう だれも 来ませんでした。',
          ruby: [{ base: '来', reading: 'き' }]
        },
        {
          prompt: { en: 'I am not going home anywhere else.', vi: 'Tôi không về đâu cả.' },
          jp: 'どこへも 帰りません。',
          ruby: [{ base: '帰', reading: 'かえ' }]
        }
      ]
    },
    {
      pattern: 'N で 行きます / 来ます / 帰ります',
      patternRuby: [
        { base: '行', reading: 'い' },
        { base: '来', reading: 'き' },
        { base: '帰', reading: 'かえ' }
      ],
      items: [
        {
          prompt: { en: 'I go by train.', vi: 'Tôi đi bằng tàu điện.' },
          jp: '電車で 行きます。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go by subway.', vi: 'Tôi đi bằng tàu điện ngầm.' },
          jp: '地下鉄で 行きます。',
          ruby: [
            { base: '地', reading: 'ち' },
            { base: '下', reading: 'か' },
            { base: '鉄', reading: 'てつ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go by Shinkansen.', vi: 'Tôi đi bằng tàu Shinkansen.' },
          jp: '新幹線で 行きます。',
          ruby: [
            { base: '新', reading: 'しん' },
            { base: '幹', reading: 'かん' },
            { base: '線', reading: 'せん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I come by bus.', vi: 'Tôi đến bằng xe buýt.' },
          jp: 'バスで 来ます。',
          ruby: [{ base: '来', reading: 'き' }]
        },
        {
          prompt: { en: 'I go home by taxi.', vi: 'Tôi về nhà bằng tắc-xi.' },
          jp: 'タクシーで 帰ります。',
          ruby: [{ base: '帰', reading: 'かえ' }]
        },
        {
          prompt: { en: 'I go by bicycle.', vi: 'Tôi đi bằng xe đạp.' },
          jp: '自転車で 行きます。',
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '転', reading: 'てん' },
            { base: '車', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go by airplane.', vi: 'Tôi đi bằng máy bay.' },
          jp: '飛行機で 行きます。',
          ruby: [
            { base: '飛', reading: 'ひ' },
            { base: '行', reading: 'こう' },
            { base: '機', reading: 'き' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I come by ship.', vi: 'Tôi đến bằng tàu thủy.' },
          jp: '船で 来ます。',
          ruby: [
            { base: '船', reading: 'ふね' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'I go on foot.', vi: 'Tôi đi bộ.' },
          jp: '歩いて 行きます。',
          ruby: [
            { base: '歩', reading: 'ある' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'N と V',
      items: [
        {
          prompt: { en: 'I go with a friend.', vi: 'Tôi đi với bạn.' },
          jp: '友達と 行きます。',
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go with him.', vi: 'Tôi đi với anh ấy.' },
          jp: '彼と 行きます。',
          ruby: [
            { base: '彼', reading: 'かれ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I come with her.', vi: 'Tôi đến với chị ấy.' },
          jp: '彼女と 来ます。',
          ruby: [
            { base: '彼', reading: 'かの' },
            { base: '女', reading: 'じょ' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'I go home with my family.', vi: 'Tôi về nhà với gia đình.' },
          jp: '家族と 帰ります。',
          ruby: [
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          prompt: { en: 'I go with that person.', vi: 'Tôi đi với người kia.' },
          jp: 'あの 人と 行きます。',
          ruby: [
            { base: '人', reading: 'ひと' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'いつ',
      items: [
        {
          prompt: { en: 'When is your birthday?', vi: 'Sinh nhật bạn khi nào?' },
          jp: '誕生日は いつですか。',
          ruby: [
            { base: '誕', reading: 'たん' },
            { base: '生', reading: 'じょう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          prompt: {
            en: 'My birthday is January 1st.',
            vi: 'Sinh nhật tôi là ngày mồng 1 tháng 1.'
          },
          jp: '誕生日は 1月一日です。',
          ruby: [
            { base: '誕', reading: 'たん' },
            { base: '生', reading: 'じょう' },
            { base: '日', reading: 'び' },
            { base: '月', reading: 'がつ' },
            { base: '一', reading: 'つい' },
            { base: '日', reading: 'たち' }
          ]
        },
        {
          prompt: {
            en: 'Her birthday is February 2nd.',
            vi: 'Sinh nhật chị ấy là ngày mồng 2 tháng 2.'
          },
          jp: '彼女の 誕生日は 2月二日です。',
          ruby: [
            { base: '彼', reading: 'かの' },
            { base: '女', reading: 'じょ' },
            { base: '誕', reading: 'たん' },
            { base: '生', reading: 'じょう' },
            { base: '日', reading: 'び' },
            { base: '月', reading: 'がつ' },
            { base: '二', reading: 'ふつ' },
            { base: '日', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'His birthday is March 3rd.',
            vi: 'Sinh nhật anh ấy là ngày mồng 3 tháng 3.'
          },
          jp: '彼の 誕生日は 3月三日です。',
          ruby: [
            { base: '彼', reading: 'かれ' },
            { base: '誕', reading: 'たん' },
            { base: '生', reading: 'じょう' },
            { base: '日', reading: 'び' },
            { base: '月', reading: 'がつ' },
            { base: '三', reading: 'みっ' },
            { base: '日', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'My birthday is April 4th.', vi: 'Sinh nhật tôi là ngày mồng 4 tháng 4.' },
          jp: '誕生日は 4月四日です。',
          ruby: [
            { base: '誕', reading: 'たん' },
            { base: '生', reading: 'じょう' },
            { base: '日', reading: 'び' },
            { base: '月', reading: 'がつ' },
            { base: '四', reading: 'よっ' },
            { base: '日', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'The trip is May 5th.', vi: 'Chuyến đi là ngày mồng 5 tháng 5.' },
          jp: '5月五日に 行きます。',
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '五', reading: 'いつ' },
            { base: '日', reading: 'か' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go on June 6th.', vi: 'Tôi đi ngày mồng 6 tháng 6.' },
          jp: '6月六日に 行きます。',
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '六', reading: 'むい' },
            { base: '日', reading: 'か' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go on July 7th.', vi: 'Tôi đi ngày mồng 7 tháng 7.' },
          jp: '7月七日に 行きます。',
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '七', reading: 'なの' },
            { base: '日', reading: 'か' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go on August 8th.', vi: 'Tôi đi ngày mồng 8 tháng 8.' },
          jp: '8月八日に 行きます。',
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '八', reading: 'よう' },
            { base: '日', reading: 'か' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go on September 9th.', vi: 'Tôi đi ngày mồng 9 tháng 9.' },
          jp: '9月九日に 行きます。',
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '九', reading: 'ここの' },
            { base: '日', reading: 'か' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go on October 10th.', vi: 'Tôi đi ngày mồng 10 tháng 10.' },
          jp: '10月十日に 行きます。',
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '十', reading: 'とお' },
            { base: '日', reading: 'か' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go on April 14th.', vi: 'Tôi đi ngày 14 tháng 4.' },
          jp: '4月十四日に 行きます。',
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '十', reading: 'じゅう' },
            { base: '四', reading: 'よっ' },
            { base: '日', reading: 'か' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go on December 20th.', vi: 'Tôi đi ngày 20 tháng 12.' },
          jp: '12月二十日に 行きます。',
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '二', reading: 'は' },
            { base: '十', reading: 'つ' },
            { base: '日', reading: 'か' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go on March 24th.', vi: 'Tôi đi ngày 24 tháng 3.' },
          jp: '3月二十四日に 行きます。',
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '二', reading: 'に' },
            { base: '十', reading: 'じゅう' },
            { base: '四', reading: 'よっ' },
            { base: '日', reading: 'か' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go on the 15th.', vi: 'Tôi đi ngày 15.' },
          jp: '15日に 行きます。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'What day of the month do you go?', vi: 'Bạn đi ngày mấy?' },
          jp: '何日に 行きますか。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '日', reading: 'にち' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'What month do you go?', vi: 'Bạn đi tháng mấy?' },
          jp: '何月に 行きますか。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '月', reading: 'がつ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'What year did you come?', vi: 'Bạn đến năm nào?' },
          jp: '何年に 来ましたか。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '年', reading: 'ねん' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'I came in 2020.', vi: 'Tôi đến năm 2020.' },
          jp: '2020年に 来ました。',
          ruby: [
            { base: '年', reading: 'ねん' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'I went last week.', vi: 'Tuần trước tôi đã đi.' },
          jp: '先週 行きました。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '週', reading: 'しゅう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go this week.', vi: 'Tuần này tôi đi.' },
          jp: '今週 行きます。',
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '週', reading: 'しゅう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go next week.', vi: 'Tuần sau tôi đi.' },
          jp: '来週 行きます。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I went last month.', vi: 'Tháng trước tôi đã đi.' },
          jp: '先月 行きました。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '月', reading: 'げつ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go this month.', vi: 'Tháng này tôi đi.' },
          jp: '今月 行きます。',
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '月', reading: 'げつ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go next month.', vi: 'Tháng sau tôi đi.' },
          jp: '来月 行きます。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '月', reading: 'げつ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I came last year.', vi: 'Năm ngoái tôi đã đến.' },
          jp: '去年 来ました。',
          ruby: [
            { base: '去', reading: 'きょ' },
            { base: '年', reading: 'ねん' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'I go this year.', vi: 'Năm nay tôi đi.' },
          jp: '今年 行きます。',
          ruby: [
            { base: '今', reading: 'こ' },
            { base: '年', reading: 'とし' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go next year.', vi: 'Sang năm tôi đi.' },
          jp: '来年 行きます。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '年', reading: 'ねん' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: '～ よ',
      items: [
        {
          prompt: {
            en: 'I am going to Kyoto tomorrow (I tell you).',
            vi: 'Ngày mai tôi đi Kyoto đấy.'
          },
          jp: 'あした 京都へ 行きますよ。',
          ruby: [
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'This is the station (I tell you).', vi: 'Đây là nhà ga đấy.' },
          jp: 'ここは 駅ですよ。',
          ruby: [{ base: '駅', reading: 'えき' }]
        },
        {
          prompt: { en: 'I will go alone (I tell you).', vi: 'Tôi sẽ đi một mình đấy.' },
          jp: '一人で 行きますよ。',
          ruby: [
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I will go by bus (I tell you).', vi: 'Tôi sẽ đi xe buýt đấy.' },
          jp: 'バスで 行きますよ。',
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          prompt: { en: 'I will go home next week (I tell you).', vi: 'Tuần sau tôi về đấy.' },
          jp: '来週 帰りますよ。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '帰', reading: 'かえ' }
          ]
        }
      ]
    },
    {
      pattern: 'そうですね',
      items: [
        {
          prompt: { en: "That's right.", vi: 'Ừ, nhỉ.' },
          jp: 'そうですね。'
        },
        {
          prompt: { en: "That's right. I will go by train.", vi: 'Ừ nhỉ. Tôi sẽ đi tàu điện.' },
          jp: 'そうですね。電車で 行きます。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: "That's right. I will go next week.", vi: 'Ừ nhỉ. Tuần sau tôi đi.' },
          jp: 'そうですね。来週 行きます。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: "That's right. I will go with a friend.", vi: 'Ừ nhỉ. Tôi đi với bạn.' },
          jp: 'そうですね。友達と 行きます。',
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: "That's right. I will go home.", vi: 'Ừ nhỉ. Tôi về nhà.' },
          jp: 'そうですね。うちへ 帰ります。',
          ruby: [{ base: '帰', reading: 'かえ' }]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: "That's right. / Yes, that's true. (agreement)",
        vi: 'Ừ, nhỉ. (đồng ý, đồng cảm)'
      },
      jp: 'そうですね。'
    },
    {
      prompt: {
        en: 'Thank you very much. (often with どうも)',
        vi: 'Xin cảm ơn anh/chị rất nhiều. (thường kèm どうも)'
      },
      jp: 'ありがとうございました。'
    },
    {
      prompt: { en: "You're welcome.", vi: 'Không có gì đâu (đừng bận tâm).' },
      jp: 'どういたしまして。'
    },
    {
      prompt: { en: 'platform ~', vi: 'sân ga số ~' },
      jp: '〜番線',
      ruby: [
        { base: '番', reading: 'ばん' },
        { base: '線', reading: 'せん' }
      ]
    },
    {
      prompt: { en: 'next, the following', vi: 'tiếp theo' },
      jp: '次の',
      ruby: [{ base: '次', reading: 'つぎ' }]
    },
    {
      prompt: {
        en: 'local train (stops at every station)',
        vi: 'tàu thường (dừng cả ở các ga lẻ)'
      },
      jp: '普通',
      ruby: [
        { base: '普', reading: 'ふ' },
        { base: '通', reading: 'つう' }
      ]
    },
    {
      prompt: { en: 'express train', vi: 'tàu tốc hành' },
      jp: '急行',
      ruby: [
        { base: '急', reading: 'きゅう' },
        { base: '行', reading: 'こう' }
      ]
    },
    {
      prompt: { en: 'limited express', vi: 'tàu tốc hành đặc biệt' },
      jp: '特急',
      ruby: [
        { base: '特', reading: 'とっ' },
        { base: '急', reading: 'きゅう' }
      ]
    }
  ]
};
