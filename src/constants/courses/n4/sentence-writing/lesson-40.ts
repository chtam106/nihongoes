import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson40SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'Question + か / かどうか',
      items: [
        {
          prompt: {
            en: 'Please check whether the size fits.',
            vi: 'Hãy kiểm tra xem có vừa không.'
          },
          jp: 'サイズが 合うか どうか、確かめて ください。',
          ruby: [
            { base: '合', reading: 'あ' },
            { base: '確', reading: 'たし' }
          ]
        },
        {
          prompt: {
            en: 'Please check what time flight JL107 departs.',
            vi: 'Hãy tra xem chuyến bay JL107 khởi hành lúc mấy giờ.'
          },
          jp: 'JL107便が 何時に 出発するか、調べて ください。',
          ruby: [
            { base: '便', reading: 'びん' },
            { base: '何', reading: 'なん' },
            { base: '時', reading: 'じ' },
            { base: '出', reading: 'しゅっ' },
            { base: '発', reading: 'ぱつ' },
            { base: '調', reading: 'しら' }
          ]
        },
        {
          prompt: {
            en: 'We do not know yet whether the plane will fly because of the snow.',
            vi: 'Vì tuyết nên vẫn chưa biết máy bay có cất cánh được không.'
          },
          jp: '雪で 飛行機が 飛ぶかどうか、まだ わかりません。',
          ruby: [
            { base: '雪', reading: 'ゆき' },
            { base: '飛', reading: 'ひ' },
            { base: '行', reading: 'こう' },
            { base: '機', reading: 'き' },
            { base: '飛', reading: 'と' }
          ]
        },
        {
          prompt: {
            en: 'Please tell me whether you can come to the year-end party.',
            vi: 'Hãy cho biết anh/chị có đến tiệc tất niên được không.'
          },
          jp: '忘年会に 来られるかどうか、教えて ください。',
          ruby: [
            { base: '忘', reading: 'ぼう' },
            { base: '年', reading: 'ねん' },
            { base: '会', reading: 'かい' },
            { base: '来', reading: 'こ' },
            { base: '教', reading: 'おし' }
          ]
        },
        {
          prompt: {
            en: 'I asked the teacher whether this question will be on the test.',
            vi: 'Tôi đã hỏi thầy xem câu này có ra trong bài kiểm tra không.'
          },
          jp: 'この 問題が テストに 出るかどうか、先生に 聞きました。',
          ruby: [
            { base: '問', reading: 'もん' },
            { base: '題', reading: 'だい' },
            { base: '出', reading: 'で' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '聞', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'Please count how many apples there are.',
            vi: 'Hãy đếm xem có bao nhiêu quả táo.'
          },
          jp: 'りんごが 何個 あるか、数えて ください。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '個', reading: 'こ' },
            { base: '数', reading: 'かぞ' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て みます',
      items: [
        {
          prompt: {
            en: 'I will try on these trousers.',
            vi: 'Tôi sẽ mặc thử chiếc quần này.'
          },
          jp: 'この ズボンを 履いて みます。',
          ruby: [{ base: '履', reading: 'は' }]
        },
        {
          prompt: {
            en: 'I will try measuring the length.',
            vi: 'Tôi sẽ thử đo chiều dài.'
          },
          jp: '長さを 測って みます。',
          ruby: [
            { base: '長', reading: 'なが' },
            { base: '測', reading: 'はか' }
          ]
        },
        {
          prompt: {
            en: 'I will try weighing it.',
            vi: 'Tôi sẽ thử cân.'
          },
          jp: '重さを 量って みます。',
          ruby: [
            { base: '重', reading: 'おも' },
            { base: '量', reading: 'はか' }
          ]
        },
        {
          prompt: {
            en: 'I will try consulting the teacher.',
            vi: 'Tôi sẽ thử hỏi ý kiến giáo viên.'
          },
          jp: '先生に 相談して みます。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '相', reading: 'そう' },
            { base: '談', reading: 'だん' }
          ]
        },
        {
          prompt: {
            en: 'I will try running a marathon.',
            vi: 'Tôi sẽ thử chạy marathon.'
          },
          jp: 'マラソンを 走って みます。',
          ruby: [{ base: '走', reading: 'はし' }]
        }
      ]
    },
    {
      pattern: 'i-adj さ / na-adj さ',
      items: [
        {
          prompt: {
            en: 'What is the length of this stick?',
            vi: 'Chiều dài cây gậy này là bao nhiêu?'
          },
          jp: 'この 棒の 長さは 何センチですか。',
          ruby: [
            { base: '棒', reading: 'ぼう' },
            { base: '長', reading: 'なが' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          prompt: { en: 'This package weighs 200 grams.', vi: 'Gói hàng này nặng 200 gam.' },
          jp: 'この 荷物の 重さは 200グラムです。',
          ruby: [
            { base: '荷', reading: 'に' },
            { base: '物', reading: 'もつ' },
            { base: '重', reading: 'おも' }
          ]
        },
        {
          prompt: { en: 'Mount Fuji is 3,776 meters high.', vi: 'Núi Phú Sĩ cao 3776 mét.' },
          jp: '富士山の 高さは 3776メートルです。',
          ruby: [
            { base: '富', reading: 'ふ' },
            { base: '士', reading: 'じ' },
            { base: '山', reading: 'さん' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          prompt: {
            en: 'Please measure the size of this box.',
            vi: 'Hãy đo kích thước cái hộp này.'
          },
          jp: 'この 箱の 大きさを 測って ください。',
          ruby: [
            { base: '箱', reading: 'はこ' },
            { base: '大', reading: 'おお' },
            { base: '測', reading: 'はか' }
          ]
        },
        {
          prompt: {
            en: 'I am still not used to the heat of Japanese summers.',
            vi: 'Tôi vẫn chưa quen với cái nóng mùa hè Nhật Bản.'
          },
          jp: '日本の 夏の 暑さには まだ 慣れません。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '夏', reading: 'なつ' },
            { base: '暑', reading: 'あつ' },
            { base: '慣', reading: 'な' }
          ]
        },
        {
          prompt: {
            en: 'I chose this apartment for the convenience of being near the station.',
            vi: 'Tôi chọn căn hộ này vì sự tiện lợi gần ga.'
          },
          jp: '駅に 近い 便利さで、この アパートを 選びました。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '近', reading: 'ちか' },
            { base: '便', reading: 'べん' },
            { base: '利', reading: 'り' },
            { base: '選', reading: 'えら' }
          ]
        }
      ]
    },
    {
      pattern: '～かな',
      items: [
        {
          prompt: {
            en: 'I wonder if the New Year party will go well.',
            vi: 'Không biết tiệc đầu năm có suôn sẻ không.'
          },
          jp: '新年会は うまくいくかな。',
          ruby: [
            { base: '新', reading: 'しん' },
            { base: '年', reading: 'ねん' },
            { base: '会', reading: 'かい' }
          ]
        },
        {
          prompt: {
            en: 'I wonder if there is an after-party.',
            vi: 'Không biết có tiệc sau không.'
          },
          jp: '二次会が あるかな。',
          ruby: [
            { base: '二', reading: 'に' },
            { base: '次', reading: 'じ' },
            { base: '会', reading: 'かい' }
          ]
        },
        {
          prompt: {
            en: 'I wonder if I can do well at the recital.',
            vi: 'Không biết buổi biểu diễn mình có làm tốt không nhỉ.'
          },
          jp: '発表会、うまく できるかな。',
          ruby: [
            { base: '発', reading: 'はっ' },
            { base: '表', reading: 'ぴょう' },
            { base: '会', reading: 'かい' }
          ]
        },
        {
          prompt: {
            en: 'I wonder if it will be sunny tomorrow.',
            vi: 'Không biết mai trời có nắng không nhỉ.'
          },
          jp: 'あしたは 晴れるかな。',
          ruby: [{ base: '晴', reading: 'は' }]
        },
        {
          prompt: {
            en: 'I wonder if Mr. Tanaka has arrived yet.',
            vi: 'Không biết anh Tanaka đã đến chưa nhỉ.'
          },
          jp: '田中さん、もう 着いたかな。',
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '着', reading: 'つ' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'Please check what time JL107 arrives.',
        vi: 'Hãy kiểm tra xem chuyến bay JL107 đến lúc mấy giờ.'
      },
      jp: 'JL107便が 何時に 着くか、調べて ください。',
      ruby: [
        { base: '便', reading: 'びん' },
        { base: '何', reading: 'なん' },
        { base: '時', reading: 'じ' },
        { base: '着', reading: 'つ' },
        { base: '調', reading: 'しら' }
      ]
    },
    {
      prompt: {
        en: 'May I try on these pants?',
        vi: 'Tôi mặc thử cái quần này được không?'
      },
      jp: 'この ズボン、試しに 履いて みて も いいですか。',
      ruby: [
        { base: '試', reading: 'ため' },
        { base: '履', reading: 'は' }
      ]
    }
  ]
};
