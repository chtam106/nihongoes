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
            en: 'Please look up what time the flight departs.',
            vi: 'Hãy xem chuyến bay xuất phát lúc mấy giờ.'
          },
          jp: 'JL107～びんが 何時に 出発するか、調べて ください。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '時', reading: 'じ' },
            { base: '出', reading: 'しゅっ' },
            { base: '発', reading: 'ぱつ' },
            { base: '調', reading: 'しら' }
          ]
        },
        {
          prompt: {
            en: 'I do not know whether the plane will arrive.',
            vi: 'Tôi không biết máy bay có đến hay không.'
          },
          jp: '飛行機が 到着するかどうか、わかりません。',
          ruby: [
            { base: '飛', reading: 'ひ' },
            { base: '行', reading: 'こう' },
            { base: '機', reading: 'き' },
            { base: '到', reading: 'とう' },
            { base: '着', reading: 'ちゃく' }
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
            en: 'I asked whether a math problem will appear on the test.',
            vi: 'Tôi hỏi xem bài kiểm tra có câu toán không.'
          },
          jp: 'テストに 問題が 出るかどうか、聞きました。',
          ruby: [
            { base: '問', reading: 'もん' },
            { base: '題', reading: 'だい' },
            { base: '出', reading: 'で' },
            { base: '聞', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'Please count how many pieces there are.',
            vi: 'Hãy đếm xem có bao nhiêu cái.'
          },
          jp: '何～こ あるか、数えて ください。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '数', reading: 'かぞ' }
          ]
        },
        {
          prompt: {
            en: 'The plane departs at 9. It arrives at 11.',
            vi: 'Máy bay xuất phát lúc 9. Đến lúc 11.'
          },
          jp: '飛行機は 9時に 出発します。11時に 到着します。',
          ruby: [
            { base: '飛', reading: 'ひ' },
            { base: '行', reading: 'こう' },
            { base: '機', reading: 'き' },
            { base: '時', reading: 'じ' },
            { base: '出', reading: 'しゅっ' },
            { base: '発', reading: 'ぱつ' },
            { base: '時', reading: 'じ' },
            { base: '到', reading: 'とう' },
            { base: '着', reading: 'ちゃく' }
          ]
        },
        {
          prompt: {
            en: 'The size fits. I confirm it.',
            vi: 'Cỡ vừa. Tôi xác nhận.'
          },
          jp: 'サイズが 合います。確かめます。',
          ruby: [
            { base: '合', reading: 'あ' },
            { base: '確', reading: 'たし' }
          ]
        },
        {
          prompt: {
            en: 'I count the cups.',
            vi: 'Tôi đếm số ly.'
          },
          jp: 'カップを 数えます。',
          ruby: [{ base: '数', reading: 'かぞ' }]
        },
        {
          prompt: {
            en: 'A problem appears on the test.',
            vi: 'Bài kiểm tra có câu hỏi.'
          },
          jp: 'テストに 問題が 出ます。',
          ruby: [
            { base: '問', reading: 'もん' },
            { base: '題', reading: 'だい' },
            { base: '出', reading: 'で' }
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
        },
        {
          prompt: {
            en: 'I measure the height in centimeters.',
            vi: 'Tôi đo chiều cao bằng xăng-ti-mét.'
          },
          jp: '高さを センチで 測ります。',
          ruby: [
            { base: '高', reading: 'たか' },
            { base: '測', reading: 'はか' }
          ]
        },
        {
          prompt: {
            en: 'I consult a friend about grades.',
            vi: 'Tôi bàn với bạn về thành tích.'
          },
          jp: '成績を 友だちと 相談します。',
          ruby: [
            { base: '成', reading: 'せい' },
            { base: '績', reading: 'せき' },
            { base: '友', reading: 'とも' },
            { base: '相', reading: 'そう' },
            { base: '談', reading: 'だん' }
          ]
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
          jp: 'この 棒の 長さは 何～センチ ですか。',
          ruby: [
            { base: '棒', reading: 'ぼう' },
            { base: '長', reading: 'なが' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          prompt: {
            en: 'The weight is 200 grams.',
            vi: 'Trọng lượng là 200 gam.'
          },
          jp: '重さは 200～グラム です。',
          ruby: [{ base: '重', reading: 'おも' }]
        },
        {
          prompt: {
            en: 'The height is 50 millimeters.',
            vi: 'Chiều cao là 50 mi-li-mét.'
          },
          jp: '高さは 50～ミリ です。',
          ruby: [{ base: '高', reading: 'たか' }]
        },
        {
          prompt: {
            en: 'The size is 3 bottles of juice.',
            vi: 'Kích thước bằng 3 chai nước.'
          },
          jp: '大きさは この 箱と 同じ です。2～ほん あります。',
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '箱', reading: 'はこ' },
            { base: '同', reading: 'おな' }
          ]
        },
        {
          prompt: {
            en: 'Two cupfuls are more than enough.',
            vi: 'Hai ly là hơn đủ.'
          },
          jp: '2～はい は 必要～いじょう です。',
          ruby: [
            { base: '必', reading: 'ひつ' },
            { base: '要', reading: 'よう' }
          ]
        },
        {
          prompt: {
            en: 'This is below 10 grams.',
            vi: 'Cái này dưới 10 gam.'
          },
          jp: 'これは 10グラム～いか です。'
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
            vi: 'Không biết có hiệp hai không.'
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
            en: 'I wonder how the recital will be.',
            vi: 'Không biết buổi phát biểu sẽ thế nào.'
          },
          jp: '発表会は どうでしょうか。',
          ruby: [
            { base: '発', reading: 'はっ' },
            { base: '表', reading: 'ぴょう' },
            { base: '会', reading: 'かい' }
          ]
        },
        {
          prompt: {
            en: 'I wonder if I will get drunk at the tournament.',
            vi: 'Không biết ở hội thi tôi có say không.'
          },
          jp: '大会で 酔うかな。',
          ruby: [
            { base: '大', reading: 'たい' },
            { base: '会', reading: 'かい' },
            { base: '酔', reading: 'よ' }
          ]
        },
        {
          prompt: {
            en: 'By the way, I wonder about the weather forecast.',
            vi: 'Nhân tiện, không biết dự báo thời tiết thế nào.'
          },
          jp: 'ところで、天気予報は どうかな。',
          ruby: [
            { base: '天', reading: 'てん' },
            { base: '気', reading: 'き' },
            { base: '予', reading: 'よ' },
            { base: '報', reading: 'ほう' }
          ]
        },
        {
          prompt: {
            en: 'I wonder if elderly people will enter the contest.',
            vi: 'Không biết người cao tuổi có dự thi không.'
          },
          jp: 'お年寄りは コンテストに 出るかな。',
          ruby: [
            { base: '年', reading: 'とし' },
            { base: '寄', reading: 'よ' },
            { base: '出', reading: 'で' }
          ]
        },
        {
          prompt: {
            en: 'I wonder if there is a scratch on the back.',
            vi: 'Không biết mặt sau có vết xước không.'
          },
          jp: '裏に 傷が あるかな。',
          ruby: [
            { base: '裏', reading: 'うら' },
            { base: '傷', reading: 'きず' }
          ]
        },
        {
          prompt: {
            en: 'I wonder if the front has a mistake.',
            vi: 'Không biết mặt trước có sai sót không.'
          },
          jp: '表に まちがいが あるかな。',
          ruby: [{ base: '表', reading: 'おもて' }]
        },
        {
          prompt: {
            en: 'I wonder about his appearance. It is necessary.',
            vi: 'Không biết bộ dạng anh ấy. Điều đó cần thiết.'
          },
          jp: '様子は どうかな。必要 です。',
          ruby: [
            { base: '様', reading: 'よう' },
            { base: '子', reading: 'す' },
            { base: '必', reading: 'ひつ' },
            { base: '要', reading: 'よう' }
          ]
        },
        {
          prompt: {
            en: 'I get drunk easily. Things go well today.',
            vi: 'Tôi dễ say. Hôm nay mọi thứ suôn sẻ.'
          },
          jp: 'すぐ 酔います。今日は うまくいきます。',
          ruby: [
            { base: '酔', reading: 'よ' },
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' }
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
