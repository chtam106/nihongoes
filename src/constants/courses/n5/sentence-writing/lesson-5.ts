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
          prompt: { en: 'I go to school.', vi: 'Tôi đi học.' },
          jp: '学校へ 行きます。',
          ruby: [
            { base: '学', reading: 'がっ' },
            { base: '校', reading: 'こう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'I am going to the supermarket this afternoon.',
            vi: 'Chiều nay tôi đi đến siêu thị.'
          },
          jp: '午後 スーパーへ 行きます。',
          ruby: [
            { base: '午', reading: 'ご' },
            { base: '後', reading: 'ご' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'What time are you going to the station tomorrow?',
            vi: 'Ngày mai mấy giờ anh ra ga?'
          },
          jp: 'あした 何時に 駅へ 行きますか。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '時', reading: 'じ' },
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
          prompt: {
            en: 'I am not going anywhere today. I will rest at home.',
            vi: 'Hôm nay tôi không đi đâu cả. Ở nhà nghỉ ngơi.'
          },
          jp: '今日は どこも 行きません。うちで 休みます。',
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '行', reading: 'い' },
            { base: '休', reading: 'やす' }
          ]
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
          prompt: {
            en: 'I did not go anywhere during the winter break.',
            vi: 'Kỳ nghỉ đông tôi không đi đâu cả.'
          },
          jp: '冬休みは どこへも 行きませんでした。',
          ruby: [
            { base: '冬', reading: 'ふゆ' },
            { base: '休', reading: 'やす' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'No one came yesterday.', vi: 'Hôm qua không ai đến cả.' },
          jp: 'きのう だれも 来ませんでした。',
          ruby: [{ base: '来', reading: 'き' }]
        },
        {
          prompt: {
            en: 'Did you go anywhere on Sunday? ...No, I did not go anywhere.',
            vi: 'Chủ nhật anh có đi đâu không? ...Không, tôi không đi đâu cả.'
          },
          jp: '日曜日 どこか 行きましたか。……いいえ、どこも 行きませんでした。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '行', reading: 'い' },
            { base: '行', reading: 'い' }
          ]
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
          prompt: {
            en: 'I go to the office by train every day.',
            vi: 'Ngày nào tôi cũng đi tàu điện đến công ty.'
          },
          jp: '毎日 電車で 会社へ 行きます。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'I am going to Osaka by shinkansen next week.',
            vi: 'Tuần sau tôi đi đến Osaka bằng tàu Shinkansen.'
          },
          jp: '来週 新幹線で 大阪へ 行きます。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '新', reading: 'しん' },
            { base: '幹', reading: 'かん' },
            { base: '線', reading: 'せん' },
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'Yesterday I came to school by bus.',
            vi: 'Hôm qua tôi đến trường bằng xe buýt.'
          },
          jp: 'きのう バスで 学校へ 来ました。',
          ruby: [
            { base: '学', reading: 'がっ' },
            { base: '校', reading: 'こう' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'I went home by taxi at night.', vi: 'Buổi tối tôi về nhà bằng taxi.' },
          jp: '夜 タクシーで うちへ 帰りました。',
          ruby: [
            { base: '夜', reading: 'よる' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          prompt: { en: 'I walked home from the station.', vi: 'Tôi đi bộ từ ga về nhà.' },
          jp: '駅から 歩いて 帰りました。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '歩', reading: 'ある' },
            { base: '帰', reading: 'かえ' }
          ]
        }
      ]
    },
    {
      pattern: 'N と V',
      items: [
        {
          prompt: {
            en: 'Tomorrow I am going to the art museum with a friend.',
            vi: 'Ngày mai tôi đi bảo tàng mỹ thuật với bạn.'
          },
          jp: 'あした 友達と 美術館へ 行きます。',
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '美', reading: 'び' },
            { base: '術', reading: 'じゅつ' },
            { base: '館', reading: 'かん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'I went to Kyoto with my boyfriend on Sunday.',
            vi: 'Chủ nhật tôi đi đến Kyoto với bạn trai.'
          },
          jp: '日曜日 彼と 京都へ 行きました。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '彼', reading: 'かれ' },
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'Did you come alone? ...No, I came with my family.',
            vi: 'Anh đến một mình à? ...Không, tôi đến cùng gia đình.'
          },
          jp: '一人で 来ましたか。……いいえ、家族と 来ました。',
          ruby: [
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' },
            { base: '来', reading: 'き' },
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'I am going back to my home country with my family for the summer holidays.',
            vi: 'Kỳ nghỉ hè tôi về nước cùng gia đình.'
          },
          jp: '夏休みに 家族と 国へ 帰ります。',
          ruby: [
            { base: '夏', reading: 'なつ' },
            { base: '休', reading: 'やす' },
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '国', reading: 'くに' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          prompt: {
            en: 'Who are you going with? ...I am going alone.',
            vi: 'Anh đi với ai? ...Tôi đi một mình.'
          },
          jp: 'だれと 行きますか。……一人で 行きます。',
          ruby: [
            { base: '行', reading: 'い' },
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'いつ',
      items: [
        {
          prompt: {
            en: 'When is your birthday? ...March 3rd.',
            vi: 'Sinh nhật anh là khi nào? ...Ngày 3 tháng 3.'
          },
          jp: '誕生日は いつですか。……3月3日です。',
          ruby: [
            { base: '誕', reading: 'たん' },
            { base: '生', reading: 'じょう' },
            { base: '日', reading: 'び' },
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'みっか' }
          ]
        },
        {
          prompt: {
            en: 'When did you come to Japan? ...I came last April.',
            vi: 'Anh sang Nhật khi nào? ...Tháng 4 năm ngoái.'
          },
          jp: 'いつ 日本へ 来ましたか。……去年の 4月に 来ました。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '来', reading: 'き' },
            { base: '去', reading: 'きょ' },
            { base: '年', reading: 'ねん' },
            { base: '月', reading: 'がつ' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'When are you going back to your country? ...On the 15th of next month.',
            vi: 'Khi nào anh về nước? ...Ngày 15 tháng sau.'
          },
          jp: 'いつ 国へ 帰りますか。……来月の 15日に 帰ります。',
          ruby: [
            { base: '国', reading: 'くに' },
            { base: '帰', reading: 'かえ' },
            { base: '来', reading: 'らい' },
            { base: '月', reading: 'げつ' },
            { base: '日', reading: 'にち' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          prompt: {
            en: 'When is the test? ...Next Friday.',
            vi: 'Bài kiểm tra là khi nào? ...Thứ Sáu tuần sau.'
          },
          jp: 'テストは いつですか。……来週の 金曜日です。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '金', reading: 'きん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          prompt: {
            en: 'When did you go to Kyoto? ...Last month.',
            vi: 'Anh đi đến Kyoto khi nào? ...Tháng trước.'
          },
          jp: 'いつ 京都へ 行きましたか。……先月 行きました。',
          ruby: [
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '行', reading: 'い' },
            { base: '先', reading: 'せん' },
            { base: '月', reading: 'げつ' },
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
            vi: 'Ngày mai tôi đi đến Kyoto đấy.'
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
          prompt: {
            en: 'Tomorrow is a holiday, is it not? ...Yes, that is right.',
            vi: 'Mai được nghỉ nhỉ. ...Ừ nhỉ.'
          },
          jp: 'あしたは 休みですね。……そうですね。',
          ruby: [{ base: '休', reading: 'やす' }]
        },
        {
          prompt: {
            en: 'It is already five, is it not? ...Yes, it is. Well then, I will go home.',
            vi: '5 giờ rồi nhỉ. ...Ừ nhỉ. Vậy tôi về đây.'
          },
          jp: 'もう 5時ですね。……そうですね。じゃ、帰ります。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          prompt: {
            en: 'This train goes to Kyoto, does it not? ...Yes, it does.',
            vi: 'Tàu này đi đến Kyoto nhỉ. ...Đúng rồi.'
          },
          jp: 'この 電車は 京都へ 行きますね。……そうですね。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'Banks are closed on Sundays, are they not? ...Yes, they are.',
            vi: 'Chủ nhật ngân hàng nghỉ nhỉ. ...Đúng vậy.'
          },
          jp: '日曜日は 銀行が 休みですね。……そうですね。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '休', reading: 'やす' }
          ]
        },
        {
          prompt: {
            en: 'That is Mr. Tanaka, is it not? ...Yes, it is.',
            vi: 'Người kia là anh Tanaka nhỉ. ...Đúng rồi.'
          },
          jp: 'あの 人は 田中さんですね。……そうですね。',
          ruby: [
            { base: '人', reading: 'ひと' },
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' }
          ]
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
