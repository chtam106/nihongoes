import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson32SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-た / V-ない + ほうが いいです',
      items: [
        {
          prompt: {
            en: 'You should get a little exercise every day.',
            vi: 'Mỗi ngày nên vận động một chút.'
          },
          jp: '毎日 少し 運動した ほうが いいですよ。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '少', reading: 'すこ' },
            { base: '運', reading: 'うん' },
            { base: '動', reading: 'どう' }
          ]
        },
        {
          prompt: {
            en: 'You have a fever, so you had better not push yourself today.',
            vi: 'Anh đang sốt, hôm nay đừng cố quá thì hơn.'
          },
          jp: '熱が ありますから、今日は 無理を しない ほうが いいですよ。',
          ruby: [
            { base: '熱', reading: 'ねつ' },
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '無', reading: 'む' },
            { base: '理', reading: 'り' }
          ]
        },
        {
          prompt: {
            en: 'When you have a fever, you should cool your head.',
            vi: 'Khi bị sốt thì nên chườm lạnh đầu.'
          },
          jp: '熱が ある ときは、頭を 冷やした ほうが いいです。',
          ruby: [
            { base: '熱', reading: 'ねつ' },
            { base: '頭', reading: 'あたま' },
            { base: '冷', reading: 'ひ' }
          ]
        },
        {
          prompt: {
            en: 'It is cold outside, so you should wear a coat.',
            vi: 'Bên ngoài lạnh, nên mặc áo khoác vào.'
          },
          jp: '外は 寒いですから、コートを 着た ほうが いいですよ。',
          ruby: [
            { base: '外', reading: 'そと' },
            { base: '寒', reading: 'さむ' },
            { base: '着', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'Your cough is bad, so you should go to the hospital.',
            vi: 'Ho nặng thế thì nên đi đến bệnh viện.'
          },
          jp: 'せきが ひどいですから、病院へ 行った ほうが いいですよ。',
          ruby: [
            { base: '病', reading: 'びょう' },
            { base: '院', reading: 'いん' },
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
            en: 'The rain will stop tonight, and it will probably be sunny tomorrow.',
            vi: 'Tối nay tạnh mưa, ngày mai có lẽ trời nắng.'
          },
          jp: '今夜 雨が やんで、あしたは 晴れるでしょう。',
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '夜', reading: 'や' },
            { base: '雨', reading: 'あめ' },
            { base: '晴', reading: 'は' }
          ]
        },
        {
          prompt: {
            en: 'It will probably turn cloudy in the afternoon.',
            vi: 'Từ chiều trời có lẽ sẽ nhiều mây.'
          },
          jp: '午後から 曇るでしょう。',
          ruby: [
            { base: '午', reading: 'ご' },
            { base: '後', reading: 'ご' },
            { base: '曇', reading: 'くも' }
          ]
        },
        {
          prompt: {
            en: 'That team is strong, so it will surely win.',
            vi: 'Đội đó mạnh nên chắc chắn sẽ thắng.'
          },
          jp: 'あの チームは 強いですから、きっと 勝つでしょう。',
          ruby: [
            { base: '強', reading: 'つよ' },
            { base: '勝', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'The roads are this crowded, so we will probably be late for the meeting.',
            vi: 'Đường đông thế này chắc sẽ trễ họp mất.'
          },
          jp: '道が こんなに 込んでいますから、会議に 遅れるでしょう。',
          ruby: [
            { base: '道', reading: 'みち' },
            { base: '込', reading: 'こ' },
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '遅', reading: 'おく' }
          ]
        },
        {
          prompt: {
            en: 'You studied hard, so you will surely pass.',
            vi: 'Anh đã học chăm như vậy thì chắc chắn sẽ đỗ.'
          },
          jp: 'よく 勉強しましたから、きっと 合格するでしょう。',
          ruby: [
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' },
            { base: '合', reading: 'ごう' },
            { base: '格', reading: 'かく' }
          ]
        },
        {
          prompt: {
            en: 'You took the medicine, so your fever will probably go down by tomorrow.',
            vi: 'Đã uống thuốc rồi nên đến mai chắc sẽ hạ sốt.'
          },
          jp: '薬を 飲みましたから、熱は あしたには 下がるでしょう。',
          ruby: [
            { base: '薬', reading: 'くすり' },
            { base: '飲', reading: 'の' },
            { base: '熱', reading: 'ねつ' },
            { base: '下', reading: 'さ' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form + かもしれません',
      items: [
        {
          prompt: {
            en: 'It is a long weekend, so the roads might be crowded.',
            vi: 'Đang kỳ nghỉ dài nên đường có thể đông.'
          },
          jp: '連休ですから、道が 込むかもしれません。',
          ruby: [
            { base: '連', reading: 'れん' },
            { base: '休', reading: 'きゅう' },
            { base: '道', reading: 'みち' },
            { base: '込', reading: 'こ' }
          ]
        },
        {
          prompt: { en: 'The roads might be empty at night.', vi: 'Buổi tối đường có lẽ vắng.' },
          jp: '夜は 道が すいているかもしれません。',
          ruby: [
            { base: '夜', reading: 'よる' },
            { base: '道', reading: 'みち' }
          ]
        },
        {
          prompt: {
            en: 'The engine sounds strange. It might be broken.',
            vi: 'Tiếng động cơ lạ quá. Có thể bị hỏng rồi.'
          },
          jp: 'エンジンの 音が 変です。故障かもしれません。',
          ruby: [
            { base: '音', reading: 'おと' },
            { base: '変', reading: 'へん' },
            { base: '故', reading: 'こ' },
            { base: '障', reading: 'しょう' }
          ]
        },
        {
          prompt: {
            en: 'You might burn yourself, so please be careful.',
            vi: 'Có thể bị bỏng đấy, cẩn thận nhé.'
          },
          jp: 'やけどを するかもしれませんから、気を つけて ください。',
          ruby: [{ base: '気', reading: 'き' }]
        },
        {
          prompt: {
            en: 'Your fever is high. It might be the flu.',
            vi: 'Sốt cao quá nhỉ. Có thể là cúm.'
          },
          jp: '熱が 高いですね。インフルエンザかもしれません。',
          ruby: [
            { base: '熱', reading: 'ねつ' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          prompt: {
            en: 'I bought a lottery ticket. I might win.',
            vi: 'Tôi đã mua vé số. Biết đâu lại trúng.'
          },
          jp: '宝くじを 買いました。当たるかもしれません。',
          ruby: [
            { base: '宝', reading: 'たから' },
            { base: '買', reading: 'か' },
            { base: '当', reading: 'あ' }
          ]
        },
        {
          prompt: {
            en: 'If you are under a lot of stress, you might get sick.',
            vi: 'Nếu căng thẳng nhiều thì có thể sinh bệnh.'
          },
          jp: 'ストレスが 多いと、病気に なるかもしれません。',
          ruby: [
            { base: '多', reading: 'おお' },
            { base: '病', reading: 'びょう' },
            { base: '気', reading: 'き' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ます + ましょう',
      items: [
        {
          prompt: {
            en: 'Let us all enter the international match.',
            vi: 'Cả đội cùng tham gia trận đấu quốc tế nhé.'
          },
          jp: 'みんなで 国際試合に 出ましょう。',
          ruby: [
            { base: '国', reading: 'こく' },
            { base: '際', reading: 'さい' },
            { base: '試', reading: 'し' },
            { base: '合', reading: 'あい' },
            { base: '出', reading: 'で' }
          ]
        },
        {
          prompt: {
            en: 'On hot days, let us drink plenty of water.',
            vi: 'Ngày nóng hãy uống đủ nước nhé.'
          },
          jp: '暑い 日は 水を 十分に 飲みましょう。',
          ruby: [
            { base: '暑', reading: 'あつ' },
            { base: '日', reading: 'ひ' },
            { base: '水', reading: 'みず' },
            { base: '十', reading: 'じゅう' },
            { base: '分', reading: 'ぶん' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: {
            en: 'The stars are beautiful tonight. Let us look at them outside.',
            vi: 'Tối nay sao đẹp quá. Mình ra ngoài ngắm nhé.'
          },
          jp: '今夜は 星が きれいですね。外で 見ましょう。',
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '夜', reading: 'や' },
            { base: '星', reading: 'ほし' },
            { base: '外', reading: 'そと' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: { en: 'Let us go home before it gets late.', vi: 'Về trước khi trời muộn nhé.' },
          jp: '遅く なる 前に 帰りましょう。',
          ruby: [
            { base: '遅', reading: 'おそ' },
            { base: '前', reading: 'まえ' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          prompt: {
            en: 'Let us not overdo it and rest well.',
            vi: 'Đừng cố quá, hãy nghỉ ngơi thong thả.'
          },
          jp: '無理を しないで、ゆっくり 休みましょう。',
          ruby: [
            { base: '無', reading: 'む' },
            { base: '理', reading: 'り' },
            { base: '休', reading: 'やす' }
          ]
        }
      ]
    },
    {
      pattern: 'Quantifier + で',
      items: [
        {
          prompt: {
            en: 'Can I get to the station in 20 minutes?',
            vi: 'Đi đến ga trong 20 phút có kịp không?'
          },
          jp: '駅まで 20分で 行けますか。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '分', reading: 'ぷん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'At this shop you can have lunch for 500 yen.',
            vi: 'Ở quán này có thể ăn trưa với 500 yên.'
          },
          jp: 'この 店では 500円で 昼ご飯が 食べられます。',
          ruby: [
            { base: '店', reading: 'みせ' },
            { base: '円', reading: 'えん' },
            { base: '昼', reading: 'ひる' },
            { base: '飯', reading: 'はん' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: {
            en: 'Can we reach the airport in an hour?',
            vi: 'Đến sân bay trong một tiếng có kịp không?'
          },
          jp: '空港まで 1時間で 着きますか。',
          ruby: [
            { base: '空', reading: 'くう' },
            { base: '港', reading: 'こう' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' },
            { base: '着', reading: 'つ' }
          ]
        },
        {
          prompt: {
            en: 'This job will be finished in three days.',
            vi: 'Công việc này ba ngày là xong.'
          },
          jp: 'この 仕事は 3日で 終わります。',
          ruby: [
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '日', reading: 'みっか' },
            { base: '終', reading: 'お' }
          ]
        },
        {
          prompt: {
            en: 'The meeting was over in 30 minutes.',
            vi: 'Cuộc họp kết thúc trong 30 phút.'
          },
          jp: '会議は 30分で 終わりました。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '分', reading: 'ぷん' },
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
            en: 'Has anything interesting happened lately?',
            vi: 'Gần đây có chuyện gì thú vị không?'
          },
          jp: '最近、何か おもしろい ことが ありましたか。',
          ruby: [
            { base: '最', reading: 'さい' },
            { base: '近', reading: 'きん' },
            { base: '何', reading: 'なに' }
          ]
        },
        {
          prompt: {
            en: 'If anything worries you, please tell me.',
            vi: 'Nếu có điều gì lo lắng thì cứ nói nhé.'
          },
          jp: '何か 心配な ことが あったら、言って ください。',
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '心', reading: 'しん' },
            { base: '配', reading: 'ぱい' },
            { base: '言', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'I want to do something fun this weekend.',
            vi: 'Cuối tuần tôi muốn làm điều gì đó vui vui.'
          },
          jp: '週末は 何か 楽しい ことを したいです。',
          ruby: [
            { base: '週', reading: 'しゅう' },
            { base: '末', reading: 'まつ' },
            { base: '何', reading: 'なに' },
            { base: '楽', reading: 'たの' }
          ]
        },
        {
          prompt: {
            en: 'It is cold. I want something warm to drink.',
            vi: 'Lạnh quá. Tôi muốn uống gì đó nóng.'
          },
          jp: '寒いですね。何か 温かい ものが 飲みたいです。',
          ruby: [
            { base: '寒', reading: 'さむ' },
            { base: '何', reading: 'なに' },
            { base: '温', reading: 'あたた' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: {
            en: 'Let us start with something easy first.',
            vi: 'Trước tiên hãy bắt đầu từ việc gì đó đơn giản.'
          },
          jp: 'まず 何か 簡単な ことから 始めましょう。',
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '簡', reading: 'かん' },
            { base: '単', reading: 'たん' },
            { base: '始', reading: 'はじ' }
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
