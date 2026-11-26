import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson23SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'Plain form ＋ とき',
      patternRuby: [{ base: '時', reading: 'とき' }],
      items: [
        {
          prompt: {
            en: 'Wear gloves when you touch a hot machine.',
            vi: 'Khi chạm máy nóng hãy đeo găng.'
          },
          jp: '熱い 機械を 触る とき 手袋を します。',
          ruby: [
            { base: '熱', reading: 'あつ' },
            { base: '機', reading: 'き' },
            { base: '械', reading: 'かい' },
            { base: '触', reading: 'さわ' },
            { base: '手', reading: 'て' },
            { base: '袋', reading: 'ぶくろ' }
          ]
        },
        {
          prompt: {
            en: 'When I move house I need an alien registration card.',
            vi: 'Khi chuyển nhà tôi cần thẻ đăng ký người nước ngoài.'
          },
          jp: '引っ越しする とき 外国人登録証が 要ります。',
          ruby: [
            { base: '引', reading: 'ひ' },
            { base: '越', reading: 'こ' },
            { base: '外', reading: 'がい' },
            { base: '国', reading: 'こく' },
            { base: '人', reading: 'じん' },
            { base: '登', reading: 'とう' },
            { base: '録', reading: 'ろく' },
            { base: '証', reading: 'しょう' },
            { base: '要', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'When I go back to my country, I buy souvenirs.',
            vi: 'Khi về nước tôi mua quà.'
          },
          jp: '国へ 帰る とき、お土産を 買います。',
          ruby: [
            { base: '国', reading: 'くに' },
            { base: '帰', reading: 'かえ' },
            { base: '土産', reading: 'みやげ' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'When I do not know the way, I ask at a police box.',
            vi: 'Khi không biết đường, tôi hỏi ở đồn cảnh sát.'
          },
          jp: '道が わからない とき、交番で 聞きます。',
          ruby: [
            { base: '道', reading: 'みち' },
            { base: '交', reading: 'こう' },
            { base: '番', reading: 'ばん' },
            { base: '聞', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'When I was a child, I often played by the river.',
            vi: 'Hồi nhỏ tôi hay chơi ở bờ sông.'
          },
          jp: '子どもの とき、よく 川で 遊びました。',
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '川', reading: 'かわ' },
            { base: '遊', reading: 'あそ' }
          ]
        }
      ]
    },
    {
      pattern: 'V (dictionary form) ＋ と',
      items: [
        {
          prompt: {
            en: 'When you turn the right knob, the sound gets louder.',
            vi: 'Vặn núm bên phải thì tiếng to hơn.'
          },
          jp: '右の つまみを 回す と 音が 大きく なります。',
          ruby: [
            { base: '右', reading: 'みぎ' },
            { base: '回', reading: 'まわ' },
            { base: '音', reading: 'おと' },
            { base: '大', reading: 'おお' }
          ]
        },
        {
          prompt: {
            en: 'If you press this button, your change comes out.',
            vi: 'Bấm nút này thì tiền thừa sẽ ra.'
          },
          jp: 'この ボタンを 押すと、お釣りが 出ます。',
          ruby: [
            { base: '押', reading: 'お' },
            { base: '釣', reading: 'つ' },
            { base: '出', reading: 'で' }
          ]
        },
        {
          prompt: {
            en: 'When spring comes, the cherry blossoms bloom.',
            vi: 'Mùa xuân đến thì hoa anh đào nở.'
          },
          jp: '春に なると、桜が 咲きます。',
          ruby: [
            { base: '春', reading: 'はる' },
            { base: '桜', reading: 'さくら' },
            { base: '咲', reading: 'さ' }
          ]
        },
        {
          prompt: {
            en: 'When you cross the bridge, you see the parking lot.',
            vi: 'Qua cầu thì thấy bãi đỗ xe.'
          },
          jp: '橋を 渡る と 駐車場が 見えます。',
          ruby: [
            { base: '橋', reading: 'はし' },
            { base: '渡', reading: 'わた' },
            { base: '駐', reading: 'ちゅう' },
            { base: '車', reading: 'しゃ' },
            { base: '場', reading: 'じょう' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: 'When you walk this road, you reach the intersection.',
            vi: 'Đi bộ đường này thì đến ngã tư.'
          },
          jp: 'この 道を 歩く と 交差点に 着きます。',
          ruby: [
            { base: '道', reading: 'みち' },
            { base: '歩', reading: 'ある' },
            { base: '交', reading: 'こう' },
            { base: '差', reading: 'さ' },
            { base: '点', reading: 'てん' },
            { base: '着', reading: 'つ' }
          ]
        },
        {
          prompt: {
            en: 'When you turn on the power, the machine moves.',
            vi: 'Bật nguồn thì máy chạy.'
          },
          jp: '電源を 入れる と 機械が 動きます。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '源', reading: 'げん' },
            { base: '入', reading: 'い' },
            { base: '機', reading: 'き' },
            { base: '械', reading: 'かい' },
            { base: '動', reading: 'うご' }
          ]
        }
      ]
    },
    {
      pattern: 'N が Adj／V',
      items: [
        {
          prompt: {
            en: 'When you open the window, the breeze feels nice.',
            vi: 'Mở cửa sổ ra thì gió mát dễ chịu.'
          },
          jp: '窓を 開けると、風が 気持ちいいです。',
          ruby: [
            { base: '窓', reading: 'まど' },
            { base: '開', reading: 'あ' },
            { base: '風', reading: 'かぜ' },
            { base: '気', reading: 'き' },
            { base: '持', reading: 'も' }
          ]
        },
        {
          prompt: { en: 'The traffic light turned green.', vi: 'Đèn tín hiệu chuyển xanh.' },
          jp: '信号が 青に なりました。',
          ruby: [
            { base: '信', reading: 'しん' },
            { base: '号', reading: 'ごう' },
            { base: '青', reading: 'あお' }
          ]
        },
        {
          prompt: {
            en: 'Something is wrong with this machine.',
            vi: 'Cái máy này có vẻ trục trặc.'
          },
          jp: 'この 機械は 調子が おかしいです。',
          ruby: [
            { base: '機', reading: 'き' },
            { base: '械', reading: 'かい' },
            { base: '調', reading: 'ちょう' },
            { base: '子', reading: 'し' }
          ]
        },
        {
          prompt: { en: 'The TV sound is low, is it not?', vi: 'Tiếng ti vi nhỏ nhỉ.' },
          jp: 'テレビの 音が 小さいですね。',
          ruby: [
            { base: '音', reading: 'おと' },
            { base: '小', reading: 'ちい' }
          ]
        },
        {
          prompt: { en: "This shop's cakes are delicious.", vi: 'Tiệm này bánh ngọt ngon.' },
          jp: 'この 店は ケーキが おいしいです。',
          ruby: [{ base: '店', reading: 'みせ' }]
        }
      ]
    },
    {
      pattern: 'N を V (movement)',
      items: [
        {
          prompt: {
            en: 'Walk along the road in front of the station.',
            vi: 'Đi bộ trên đường trước ga.'
          },
          jp: '駅の 前の 道を 歩きます。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '前', reading: 'まえ' },
            { base: '道', reading: 'みち' },
            { base: '歩', reading: 'ある' }
          ]
        },
        {
          prompt: {
            en: 'Cross the new bridge and turn into the parking lot.',
            vi: 'Qua cầu mới rồi rẽ vào bãi đỗ xe.'
          },
          jp: '新しい 橋を 渡って 駐車場へ 曲がります。',
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '橋', reading: 'はし' },
            { base: '渡', reading: 'わた' },
            { base: '駐', reading: 'ちゅう' },
            { base: '車', reading: 'しゃ' },
            { base: '場', reading: 'じょう' },
            { base: '曲', reading: 'ま' }
          ]
        },
        {
          prompt: {
            en: 'Turn right at the second corner.',
            vi: 'Rẽ phải ở góc đường thứ hai.'
          },
          jp: '2つ目の 角を 右に 曲がって ください。',
          ruby: [
            { base: '目', reading: 'め' },
            { base: '角', reading: 'かど' },
            { base: '右', reading: 'みぎ' },
            { base: '曲', reading: 'ま' }
          ]
        },
        {
          prompt: {
            en: 'Cross at the traffic light.',
            vi: 'Băng qua ở đèn tín hiệu.'
          },
          jp: '信号を 渡って ください。',
          ruby: [
            { base: '信', reading: 'しん' },
            { base: '号', reading: 'ごう' },
            { base: '渡', reading: 'わた' }
          ]
        },
        {
          prompt: {
            en: 'I take a walk in the park every morning.',
            vi: 'Sáng nào tôi cũng đi dạo trong công viên.'
          },
          jp: '毎朝 公園を 散歩します。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '散', reading: 'さん' },
            { base: '歩', reading: 'ぽ' }
          ]
        }
      ]
    }
  ],
  phrases: []
};
