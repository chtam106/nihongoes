import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson32SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-た / V-ない + ほうが いいです',
      items: [
        {
          prompt: {
            en: 'You should exercise every day.',
            vi: 'Nên vận động mỗi ngày.'
          },
          jp: '毎日 運動した ほうが いいです。運動します。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '運', reading: 'うん' },
            { base: '動', reading: 'どう' },
            { base: '運', reading: 'うん' },
            { base: '動', reading: 'どう' }
          ]
        },
        {
          prompt: {
            en: 'You should not overdo it.',
            vi: 'Không nên gắng sức quá.'
          },
          jp: '無理を しない ほうが いいです。無理をします。',
          ruby: [
            { base: '無', reading: 'む' },
            { base: '理', reading: 'り' },
            { base: '無', reading: 'む' },
            { base: '理', reading: 'り' }
          ]
        },
        {
          prompt: {
            en: 'You should cool your stomach.',
            vi: 'Nên làm mát dạ dày.'
          },
          jp: '胃を 冷やした ほうが いいです。冷やします。',
          ruby: [
            { base: '胃', reading: 'い' },
            { base: '冷', reading: 'ひ' },
            { base: '冷', reading: 'ひ' }
          ]
        },
        {
          prompt: {
            en: 'You should not catch a cold.',
            vi: 'Không nên để bị cảm.'
          },
          jp: '風邪を ひかない ほうが いいです。風邪を ひきます。',
          ruby: [
            { base: '風', reading: 'か' },
            { base: '邪', reading: 'ぜ' },
            { base: '風', reading: 'か' },
            { base: '邪', reading: 'ぜ' }
          ]
        },
        {
          prompt: {
            en: 'You should see a doctor if you have a cough.',
            vi: 'Nếu ho thì nên gặp bác sĩ.'
          },
          jp: 'せきが あるから、先生に 行った ほうが いいです。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form + でしょう',
      items: [
        {
          prompt: {
            en: 'It will probably clear up tonight.',
            vi: 'Tối nay chắc trời nắng.'
          },
          jp: '今夜は 晴れるでしょう。空に 太陽が 出ます。あしたは 晴れます。',
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '夜', reading: 'や' },
            { base: '晴', reading: 'は' },
            { base: '空', reading: 'そら' },
            { base: '太', reading: 'たい' },
            { base: '陽', reading: 'よう' },
            { base: '出', reading: 'で' },
            { base: '晴', reading: 'は' }
          ]
        },
        {
          prompt: {
            en: 'It will probably become cloudy, then the rain will stop.',
            vi: 'Chắc trời nhiều mây, rồi mưa sẽ tạnh.'
          },
          jp: '曇るでしょう。空が 曇ります。それから 雨が やみます。',
          ruby: [
            { base: '曇', reading: 'くも' },
            { base: '空', reading: 'そら' },
            { base: '曇', reading: 'くも' },
            { base: '雨', reading: 'あめ' }
          ]
        },
        {
          prompt: {
            en: 'The team will probably succeed.',
            vi: 'Đội chắc sẽ thành công.'
          },
          jp: 'チームは 成功するでしょう。成功します。',
          ruby: [
            { base: '成', reading: 'せい' },
            { base: '功', reading: 'こう' },
            { base: '成', reading: 'せい' },
            { base: '功', reading: 'こう' }
          ]
        },
        {
          prompt: {
            en: 'He will probably fail the exam.',
            vi: 'Anh ấy chắc sẽ trượt kỳ thi.'
          },
          jp: '試験に 失敗するでしょう。失敗します。',
          ruby: [
            { base: '試', reading: 'し' },
            { base: '験', reading: 'けん' },
            { base: '失', reading: 'しっ' },
            { base: '敗', reading: 'ぱい' },
            { base: '失', reading: 'しっ' },
            { base: '敗', reading: 'ぱい' }
          ]
        },
        {
          prompt: {
            en: 'She will probably pass.',
            vi: 'Cô ấy chắc sẽ đỗ.'
          },
          jp: '合格するでしょう。合格します。',
          ruby: [
            { base: '合', reading: 'ごう' },
            { base: '格', reading: 'かく' },
            { base: '合', reading: 'ごう' },
            { base: '格', reading: 'かく' }
          ]
        },
        {
          prompt: {
            en: 'The fever will probably continue until evening.',
            vi: 'Sốt chắc còn đến chiều tối.'
          },
          jp: '熱は 夕方まで 続くでしょう。熱が 続きます。',
          ruby: [
            { base: '熱', reading: 'ねつ' },
            { base: '夕', reading: 'ゆう' },
            { base: '方', reading: 'がた' },
            { base: '続', reading: 'つづ' },
            { base: '熱', reading: 'ねつ' },
            { base: '続', reading: 'つづ' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form + かもしれません',
      items: [
        {
          prompt: {
            en: 'The road might be crowded.',
            vi: 'Đường có thể đông.'
          },
          jp: '道が 込むかも しれません。道が 込みます。',
          ruby: [
            { base: '道', reading: 'みち' },
            { base: '込', reading: 'こ' },
            { base: '道', reading: 'みち' },
            { base: '込', reading: 'こ' }
          ]
        },
        {
          prompt: {
            en: 'The road might be empty later.',
            vi: 'Lát nữa đường có thể vắng.'
          },
          jp: '道が すくかも しれません。夜は すきます。',
          ruby: [
            { base: '道', reading: 'みち' },
            { base: '夜', reading: 'よる' }
          ]
        },
        {
          prompt: {
            en: 'The engine might be strange.',
            vi: 'Động cơ có thể bị lạ.'
          },
          jp: 'エンジンの 音が おかしいかも しれません。',
          ruby: [{ base: '音', reading: 'おと' }]
        },
        {
          prompt: {
            en: 'You might get a burn or an injury.',
            vi: 'Có thể bị bỏng hoặc thương.'
          },
          jp: 'やけどや けがを するかも しれません。'
        },
        {
          prompt: {
            en: 'There might be influenza from the west wind.',
            vi: 'Gió tây có thể mang cúm.'
          },
          jp: '西の 風で インフルエンザに なるかも しれません。',
          ruby: [
            { base: '西', reading: 'にし' },
            { base: '風', reading: 'かぜ' }
          ]
        },
        {
          prompt: {
            en: 'The lottery might win.',
            vi: 'Vé số có thể trúng.'
          },
          jp: '宝くじが 当たるかも しれません。宝くじが 当たります。',
          ruby: [
            { base: '宝', reading: 'たから' },
            { base: '当', reading: 'あ' },
            { base: '宝', reading: 'たから' },
            { base: '当', reading: 'あ' }
          ]
        },
        {
          prompt: {
            en: 'Stress might trouble your health.',
            vi: 'Căng thẳng có thể làm sức khỏe khó khăn.'
          },
          jp: 'ストレスで 健康が 困るかも しれません。困ります。',
          ruby: [
            { base: '健', reading: 'けん' },
            { base: '康', reading: 'こう' },
            { base: '困', reading: 'こま' },
            { base: '困', reading: 'こま' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ます + ましょう',
      items: [
        {
          prompt: {
            en: 'Let us attend the international match.',
            vi: 'Hãy tham gia trận quốc tế.'
          },
          jp: '国際～試合に 出ましょう。チームに 出ます。',
          ruby: [
            { base: '国', reading: 'こく' },
            { base: '際', reading: 'さい' },
            { base: '試', reading: 'し' },
            { base: '合', reading: 'あい' },
            { base: '出', reading: 'で' },
            { base: '出', reading: 'で' }
          ]
        },
        {
          prompt: {
            en: 'Let us drink enough tap water.',
            vi: 'Hãy uống đủ nước máy.'
          },
          jp: '十分に 水道を 飲みましょう。',
          ruby: [
            { base: '十', reading: 'じゅう' },
            { base: '分', reading: 'ぶん' },
            { base: '水', reading: 'すい' },
            { base: '道', reading: 'どう' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: {
            en: 'Let us look at the stars in the north.',
            vi: 'Hãy nhìn sao ở phía bắc.'
          },
          jp: '北の 星を 見ましょう。',
          ruby: [
            { base: '北', reading: 'きた' },
            { base: '星', reading: 'ほし' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: 'Let us rest before it gets late.',
            vi: 'Hãy nghỉ trước khi muộn.'
          },
          jp: '遅く ならない まえに 休みましょう。',
          ruby: [
            { base: '遅', reading: 'おそ' },
            { base: '休', reading: 'やす' }
          ]
        },
        {
          prompt: {
            en: 'Let us stay well and avoid overworking.',
            vi: 'Hãy giữ khỏe, đừng làm việc quá sức.'
          },
          jp: '元気で いましょう。働きすぎは だめです。',
          ruby: [
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' },
            { base: '働', reading: 'はたら' }
          ]
        }
      ]
    },
    {
      pattern: 'Quantifier + で',
      items: [
        {
          prompt: {
            en: 'Can we reach the east port in 20 minutes?',
            vi: '20 phút có tới cảng phía đông không?'
          },
          jp: '東まで 20分で 行けますか。',
          ruby: [
            { base: '東', reading: 'ひがし' },
            { base: '分', reading: 'ぷん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'Can I buy a lucky charm with 500 yen?',
            vi: '500 yên có mua được vật may mắn không?'
          },
          jp: '500円で ラッキーアイテムを 買えますか。',
          ruby: [
            { base: '円', reading: 'えん' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'Can you get to the south in one hour?',
            vi: 'Một giờ có tới phía nam không?'
          },
          jp: '南まで 1時間で 着きますか。',
          ruby: [
            { base: '南', reading: 'みなみ' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' },
            { base: '着', reading: 'つ' }
          ]
        },
        {
          prompt: {
            en: 'I recovered with a stone as a lucky item.',
            vi: 'Tôi khỏe lại nhờ viên đá làm vật may.'
          },
          jp: '石の ラッキーアイテムで 元気に なりました。',
          ruby: [
            { base: '石', reading: 'いし' },
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'The horoscope for Taurus finishes in five minutes.',
            vi: 'Bói sao Kim Ngưu xong trong năm phút.'
          },
          jp: '牡牛座の 星占いは 5分で 終わります。',
          ruby: [
            { base: '牡', reading: 'おう' },
            { base: '牛', reading: 'し' },
            { base: '座', reading: 'ざ' },
            { base: '星', reading: 'ほし' },
            { base: '占', reading: 'うらな' },
            { base: '分', reading: 'ふん' },
            { base: '終', reading: 'お' }
          ]
        }
      ]
    },
    {
      pattern: 'なにか + Adj + こと',
      items: [
        {
          prompt: {
            en: 'Is there something noisy bothering you?',
            vi: 'Có chuyện gì ồn ào làm phiền không?'
          },
          jp: '何か うるさい ことが ありますか。',
          ruby: [{ base: '何', reading: 'なに' }]
        },
        {
          prompt: {
            en: 'Is there something strange about romance?',
            vi: 'Tình yêu có gì kỳ lạ không?'
          },
          jp: '恋愛に 何か おかしい ことが ありますか。',
          ruby: [
            { base: '恋', reading: 'れん' },
            { base: '愛', reading: 'あい' },
            { base: '何', reading: 'なに' }
          ]
        },
        {
          prompt: {
            en: 'Is there something worrying about your boyfriend or girlfriend?',
            vi: 'Người yêu có gì lo không?'
          },
          jp: '恋人に 何か 心配な ことが ありますか。',
          ruby: [
            { base: '恋', reading: 'こい' },
            { base: '人', reading: 'びと' },
            { base: '何', reading: 'なに' },
            { base: '心', reading: 'しん' },
            { base: '配', reading: 'ぱい' }
          ]
        },
        {
          prompt: {
            en: 'Do not work this hard. It is too much.',
            vi: 'Đừng làm nhiều thế này. Nhiều quá.'
          },
          jp: 'こんなに 働かないで ください。そんなに 必要じゃ ありません。あんなに 無理をします。',
          ruby: [
            { base: '働', reading: 'はたら' },
            { base: '必', reading: 'ひつ' },
            { base: '要', reading: 'よう' },
            { base: '無', reading: 'む' },
            { base: '理', reading: 'り' }
          ]
        },
        {
          prompt: {
            en: 'Is there something healthy you can do?',
            vi: 'Có việc gì tốt cho sức khỏe không?'
          },
          jp: '何か 元気な ことが できますか。',
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'That is not good.',
        vi: 'Thế thì thật không tốt.'
      },
      jp: 'それは いけませんね。'
    }
  ]
};
