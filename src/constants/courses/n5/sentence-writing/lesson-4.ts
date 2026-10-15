import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson4SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N 時 N 分 です',
      patternRuby: [
        { base: '時', reading: 'じ' },
        { base: '分', reading: 'ふん' }
      ],
      items: [
        {
          prompt: { en: "It is 9 o'clock now.", vi: 'Bây giờ là 9 giờ.' },
          jp: '今 9時です。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          prompt: { en: 'It is 10:05 now.', vi: 'Bây giờ là 10 giờ 5 phút.' },
          jp: '今 10時5分です。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '時', reading: 'じ' },
            { base: '分', reading: 'ふん' }
          ]
        },
        {
          prompt: { en: 'It is 7:30 now.', vi: 'Bây giờ là 7 giờ rưỡi.' },
          jp: '今 7時半です。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '時', reading: 'じ' },
            { base: '半', reading: 'はん' }
          ]
        },
        {
          prompt: { en: 'What time is it now?', vi: 'Bây giờ mấy giờ?' },
          jp: '今 何時ですか。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '何', reading: 'なん' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          prompt: { en: 'How many minutes is it now?', vi: 'Bây giờ mấy phút?' },
          jp: '今 何分ですか。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '何', reading: 'なん' },
            { base: '分', reading: 'ぷん' }
          ]
        },
        {
          prompt: { en: 'It is 8 a.m.', vi: 'Là 8 giờ sáng.' },
          jp: '午前 8時です。',
          ruby: [
            { base: '午', reading: 'ご' },
            { base: '前', reading: 'ぜん' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          prompt: { en: 'It is 3 p.m.', vi: 'Là 3 giờ chiều.' },
          jp: '午後 3時です。',
          ruby: [
            { base: '午', reading: 'ご' },
            { base: '後', reading: 'ご' },
            { base: '時', reading: 'じ' }
          ]
        }
      ]
    },
    {
      pattern: 'V ます',
      items: [
        {
          prompt: { en: 'I study every day.', vi: 'Tôi học hàng ngày.' },
          jp: '毎日 勉強します。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          prompt: { en: 'I get up at 6 every morning.', vi: 'Mỗi sáng tôi dậy lúc 6 giờ.' },
          jp: '毎朝 6時に 起きます。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '時', reading: 'じ' },
            { base: '起', reading: 'お' }
          ]
        },
        {
          prompt: { en: 'I go to bed at 11 every evening.', vi: 'Mỗi tối tôi ngủ lúc 11 giờ.' },
          jp: '毎晩 11時に 寝ます。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '晩', reading: 'ばん' },
            { base: '時', reading: 'じ' },
            { base: '寝', reading: 'ね' }
          ]
        },
        {
          prompt: {
            en: 'I did not work the day before yesterday.',
            vi: 'Hôm kia tôi không làm việc.'
          },
          jp: 'おととい 働きませんでした。',
          ruby: [{ base: '働', reading: 'はたら' }]
        },
        {
          prompt: { en: 'I rested yesterday.', vi: 'Hôm qua tôi đã nghỉ.' },
          jp: 'きのう 休みました。',
          ruby: [{ base: '休', reading: 'やす' }]
        }
      ]
    },
    {
      pattern: 'V ますか',
      items: [
        {
          prompt: { en: 'Did you study yesterday?', vi: 'Hôm qua bạn có học không?' },
          jp: 'きのう 勉強しましたか。',
          ruby: [
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          prompt: { en: 'Yes, I studied.', vi: 'Vâng, tôi đã học.' },
          jp: 'はい、勉強しました。',
          ruby: [
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          prompt: { en: 'Will you work tomorrow?', vi: 'Ngày mai bạn có làm việc không?' },
          jp: 'あした 働きますか。',
          ruby: [{ base: '働', reading: 'はたら' }]
        },
        {
          prompt: { en: 'No, I will rest.', vi: 'Không, tôi sẽ nghỉ.' },
          jp: 'いいえ、休みます。',
          ruby: [{ base: '休', reading: 'やす' }]
        },
        {
          prompt: {
            en: 'What time did you get up this morning?',
            vi: 'Sáng nay bạn dậy lúc mấy giờ?'
          },
          jp: 'けさ 何時に 起きましたか。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '時', reading: 'じ' },
            { base: '起', reading: 'お' }
          ]
        }
      ]
    },
    {
      pattern: 'N (time) に V',
      items: [
        {
          prompt: { en: 'I get up at 6:30.', vi: 'Tôi dậy lúc 6 giờ rưỡi.' },
          jp: '6時半に 起きます。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '半', reading: 'はん' },
            { base: '起', reading: 'お' }
          ]
        },
        {
          prompt: { en: 'I work on Monday.', vi: 'Thứ hai tôi làm việc.' },
          jp: '月曜日に 働きます。',
          ruby: [
            { base: '月', reading: 'げつ' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '働', reading: 'はたら' }
          ]
        },
        {
          prompt: {
            en: 'The meeting finishes at 3 today.',
            vi: 'Hôm nay cuộc họp kết thúc lúc 3 giờ.'
          },
          jp: '今日 会議は 3時に 終わります。',
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '時', reading: 'じ' },
            { base: '終', reading: 'お' }
          ]
        },
        {
          prompt: { en: 'I go to bed at 10 tonight.', vi: 'Tối nay tôi ngủ lúc 10 giờ.' },
          jp: '今晩 10時に 寝ます。',
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '晩', reading: 'ばん' },
            { base: '時', reading: 'じ' },
            { base: '寝', reading: 'ね' }
          ]
        },
        {
          prompt: { en: 'The movie ends at 2.', vi: 'Phim kết thúc lúc 2 giờ.' },
          jp: '映画は 2時に 終わります。',
          ruby: [
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' },
            { base: '時', reading: 'じ' },
            { base: '終', reading: 'お' }
          ]
        },
        {
          prompt: { en: 'The exam is at 9 in the morning.', vi: 'Kỳ thi lúc 9 giờ sáng.' },
          jp: '試験は 朝 9時です。',
          ruby: [
            { base: '試', reading: 'し' },
            { base: '験', reading: 'けん' },
            { base: '朝', reading: 'あさ' },
            { base: '時', reading: 'じ' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 から N2 まで',
      items: [
        {
          prompt: { en: 'The bank is open from 9 to 3.', vi: 'Ngân hàng mở từ 9 giờ đến 3 giờ.' },
          jp: '銀行は 9時から 3時までです。',
          ruby: [
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '時', reading: 'じ' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          prompt: {
            en: 'The post office is open from 9 to 5.',
            vi: 'Bưu điện mở từ 9 giờ đến 5 giờ.'
          },
          jp: '郵便局は 9時から 5時までです。',
          ruby: [
            { base: '郵', reading: 'ゆう' },
            { base: '便', reading: 'びん' },
            { base: '局', reading: 'きょく' },
            { base: '時', reading: 'じ' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          prompt: {
            en: 'The department store is open from 10 to 8.',
            vi: 'Bách hóa mở từ 10 giờ đến 8 giờ.'
          },
          jp: 'デパートは 10時から 8時までです。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          prompt: { en: 'The library is open from 9 to 7.', vi: 'Thư viện mở từ 9 giờ đến 7 giờ.' },
          jp: '図書館は 9時から 7時までです。',
          ruby: [
            { base: '図', reading: 'と' },
            { base: '書', reading: 'しょ' },
            { base: '館', reading: 'かん' },
            { base: '時', reading: 'じ' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          prompt: {
            en: 'Lunch break is from 12 to 1.',
            vi: 'Nghỉ trưa từ 12 giờ đến 1 giờ.'
          },
          jp: '昼休みは 12時から 1時までです。',
          ruby: [
            { base: '昼', reading: 'ひる' },
            { base: '休', reading: 'やす' },
            { base: '時', reading: 'じ' },
            { base: '時', reading: 'じ' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 と N2',
      items: [
        {
          prompt: {
            en: 'The bank is closed on Saturday and Sunday.',
            vi: 'Ngân hàng nghỉ thứ bảy và chủ nhật.'
          },
          jp: '銀行の 休みは 土曜日と 日曜日です。',
          ruby: [
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '休', reading: 'やす' },
            { base: '土', reading: 'ど' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          prompt: { en: 'I study on Monday and Thursday.', vi: 'Tôi học vào thứ hai và thứ năm.' },
          jp: '月曜日と 木曜日に 勉強します。',
          ruby: [
            { base: '月', reading: 'げつ' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '木', reading: 'もく' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          prompt: {
            en: 'I work on Tuesday and Friday.',
            vi: 'Tôi làm việc vào thứ ba và thứ sáu.'
          },
          jp: '火曜日と 金曜日に 働きます。',
          ruby: [
            { base: '火', reading: 'か' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '金', reading: 'きん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '働', reading: 'はたら' }
          ]
        },
        {
          prompt: {
            en: 'Wednesday and Sunday are days off.',
            vi: 'Thứ tư và chủ nhật là ngày nghỉ.'
          },
          jp: '水曜日と 日曜日は 休みです。',
          ruby: [
            { base: '水', reading: 'すい' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '休', reading: 'やす' }
          ]
        },
        {
          prompt: {
            en: 'The meeting and the exam are the day after tomorrow.',
            vi: 'Cuộc họp và kỳ thi là ngày kia.'
          },
          jp: '会議と 試験は あさってです。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '試', reading: 'し' },
            { base: '験', reading: 'けん' }
          ]
        }
      ]
    },
    {
      pattern: '～ ね',
      items: [
        {
          prompt: { en: "Today is Monday, isn't it?", vi: 'Hôm nay là thứ hai nhỉ?' },
          jp: '今日は 月曜日ですね。',
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '月', reading: 'げつ' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          prompt: { en: "It is 3 o'clock now, isn't it?", vi: 'Bây giờ là 3 giờ nhỉ?' },
          jp: '今 3時ですね。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          prompt: { en: "Tomorrow is a day off, isn't it?", vi: 'Ngày mai là ngày nghỉ nhỉ?' },
          jp: 'あしたは 休みですね。',
          ruby: [{ base: '休', reading: 'やす' }]
        },
        {
          prompt: { en: "The movie starts from 7, doesn't it?", vi: 'Phim bắt đầu từ 7 giờ nhỉ?' },
          jp: '映画は 7時からですね。',
          ruby: [
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          prompt: { en: 'What day is it today?', vi: 'Hôm nay là thứ mấy?' },
          jp: '今日は 何曜日ですか。',
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '何', reading: 'なん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          prompt: {
            en: "The art museum is closed in the evening, isn't it?",
            vi: 'Bảo tàng mỹ thuật nghỉ buổi tối nhỉ?'
          },
          jp: '美術館は 晩 休みですね。',
          ruby: [
            { base: '美', reading: 'び' },
            { base: '術', reading: 'じゅつ' },
            { base: '館', reading: 'かん' },
            { base: '晩', reading: 'ばん' },
            { base: '休', reading: 'やす' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: "That's tough, isn't it? (sympathy)",
        vi: 'Vất vả quá nhỉ. (thông cảm)'
      },
      jp: '大変ですね。',
      ruby: [
        { base: '大', reading: 'たい' },
        { base: '変', reading: 'へん' }
      ]
    }
  ]
};
