import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson37SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N1 に N2 が V-passive',
      items: [
        {
          prompt: {
            en: 'I was praised by the teacher.',
            vi: 'Tôi được giáo viên khen.'
          },
          jp: '先生に 褒められました。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '褒', reading: 'ほ' }
          ]
        },
        {
          prompt: {
            en: 'I was scolded by my father.',
            vi: 'Tôi bị bố mắng.'
          },
          jp: '父に しかられました。',
          ruby: [{ base: '父', reading: 'ちち' }]
        },
        {
          prompt: {
            en: 'I was invited to a date by a friend.',
            vi: 'Tôi được bạn rủ đi hẹn hò.'
          },
          jp: '友だちに デートに 誘われました。',
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '誘', reading: 'さそ' }
          ]
        },
        {
          prompt: {
            en: "I was invited to a friend's wedding.",
            vi: 'Tôi được mời dự đám cưới của bạn.'
          },
          jp: '友だちの 結婚式に 招待されました。',
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '結', reading: 'けっ' },
            { base: '婚', reading: 'こん' },
            { base: '式', reading: 'しき' },
            { base: '招', reading: 'しょう' },
            { base: '待', reading: 'たい' }
          ]
        },
        {
          prompt: { en: 'My mother asked me to do the shopping.', vi: 'Tôi bị mẹ nhờ đi mua đồ.' },
          jp: '母に 買い物を 頼まれました。',
          ruby: [
            { base: '母', reading: 'はは' },
            { base: '買', reading: 'か' },
            { base: '物', reading: 'もの' },
            { base: '頼', reading: 'たの' }
          ]
        },
        {
          prompt: {
            en: 'I rode my bike on the sidewalk and got warned by a police officer.',
            vi: 'Tôi đạp xe trên vỉa hè và bị cảnh sát nhắc nhở.'
          },
          jp: '自転車で 歩道を 走って、警官に 注意されました。',
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '転', reading: 'てん' },
            { base: '車', reading: 'しゃ' },
            { base: '歩', reading: 'ほ' },
            { base: '道', reading: 'どう' },
            { base: '走', reading: 'はし' },
            { base: '警', reading: 'けい' },
            { base: '官', reading: 'かん' },
            { base: '注', reading: 'ちゅう' },
            { base: '意', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 に N2 を V-passive',
      items: [
        {
          prompt: {
            en: 'A thief stole my bag (on me).',
            vi: 'Kẻ trộm lấy cắp túi của tôi.'
          },
          jp: '泥棒に かばんを 取られました。',
          ruby: [
            { base: '泥', reading: 'どろ' },
            { base: '棒', reading: 'ぼう' },
            { base: '取', reading: 'と' }
          ]
        },
        {
          prompt: {
            en: 'Someone stepped on my foot.',
            vi: 'Ai đó dẫm vào chân tôi.'
          },
          jp: 'だれかに 足を 踏まれました。',
          ruby: [
            { base: '足', reading: 'あし' },
            { base: '踏', reading: 'ふ' }
          ]
        },
        {
          prompt: {
            en: 'My younger brother broke my phone (on me).',
            vi: 'Em trai làm hỏng điện thoại của tôi.'
          },
          jp: '弟に 携帯を 壊されました。',
          ruby: [
            { base: '弟', reading: 'おとうと' },
            { base: '携', reading: 'けい' },
            { base: '帯', reading: 'たい' },
            { base: '壊', reading: 'こわ' }
          ]
        },
        {
          prompt: {
            en: 'A child made my shirt dirty.',
            vi: 'Một trẻ làm bẩn áo tôi.'
          },
          jp: '子どもに シャツを 汚されました。',
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '汚', reading: 'よご' }
          ]
        },
        {
          prompt: {
            en: 'A mouse chewed my bread (on me).',
            vi: 'Chuột ăn mất bánh mì của tôi.'
          },
          jp: '鼠に パンを 食べられました。',
          ruby: [
            { base: '鼠', reading: 'ねずみ' },
            { base: '食', reading: 'た' }
          ]
        }
      ]
    },
    {
      pattern: 'N が V-passive (event)',
      items: [
        {
          prompt: {
            en: 'An international conference will be held in Tokyo next year.',
            vi: 'Năm sau một hội nghị quốc tế sẽ được tổ chức ở Tokyo.'
          },
          jp: '来年 東京で 国際会議が 行われます。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '年', reading: 'ねん' },
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '国', reading: 'こく' },
            { base: '際', reading: 'さい' },
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '行', reading: 'おこな' }
          ]
        },
        {
          prompt: {
            en: 'Rice is exported from this country.',
            vi: 'Gạo được xuất khẩu từ nước này.'
          },
          jp: 'この 国から 米が 輸出されます。',
          ruby: [
            { base: '国', reading: 'くに' },
            { base: '米', reading: 'こめ' },
            { base: '輸', reading: 'ゆ' },
            { base: '出', reading: 'しゅつ' }
          ]
        },
        {
          prompt: {
            en: 'Oil is imported into Japan.',
            vi: 'Dầu mỏ được nhập khẩu vào Nhật.'
          },
          jp: '日本へ 石油が 輸入されます。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '石', reading: 'せき' },
            { base: '油', reading: 'ゆ' },
            { base: '輸', reading: 'ゆ' },
            { base: '入', reading: 'にゅう' }
          ]
        },
        {
          prompt: {
            en: 'This book was translated into what language?',
            vi: 'Cuốn sách này được dịch sang tiếng gì?'
          },
          jp: 'この 本は 何語に 翻訳されましたか。',
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '何', reading: 'なに' },
            { base: '語', reading: 'ご' },
            { base: '翻', reading: 'ほん' },
            { base: '訳', reading: 'やく' }
          ]
        },
        {
          prompt: {
            en: 'Instant noodles were invented in the 20th century.',
            vi: 'Mì ăn liền được phát minh vào thế kỷ 20.'
          },
          jp: 'インスタントラーメンは 20世紀に 発明されました。',
          ruby: [
            { base: '世', reading: 'せい' },
            { base: '紀', reading: 'き' },
            { base: '発', reading: 'はつ' },
            { base: '明', reading: 'めい' }
          ]
        },
        {
          prompt: {
            en: 'A new star has been discovered.',
            vi: 'Một ngôi sao mới đã được phát hiện.'
          },
          jp: '新しい 星が 発見されました。',
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '星', reading: 'ほし' },
            { base: '発', reading: 'はっ' },
            { base: '見', reading: 'けん' }
          ]
        },
        {
          prompt: {
            en: 'Horyuji was built in the 7th century.',
            vi: 'Chùa Horyuji được xây vào thế kỷ 7.'
          },
          jp: '法隆寺は 7世紀に 建てられました。',
          ruby: [
            { base: '法', reading: 'ほう' },
            { base: '隆', reading: 'りゅう' },
            { base: '寺', reading: 'じ' },
            { base: '世', reading: 'せい' },
            { base: '紀', reading: 'き' },
            { base: '建', reading: 'た' }
          ]
        },
        {
          prompt: {
            en: 'A summer festival is held at this temple every year.',
            vi: 'Ở ngôi chùa này năm nào cũng tổ chức lễ hội mùa hè.'
          },
          jp: 'この お寺では 毎年 夏祭りが 開かれます。',
          ruby: [
            { base: '寺', reading: 'てら' },
            { base: '毎', reading: 'まい' },
            { base: '年', reading: 'とし' },
            { base: '夏', reading: 'なつ' },
            { base: '祭', reading: 'まつ' },
            { base: '開', reading: 'ひら' }
          ]
        }
      ]
    },
    {
      pattern: 'N から / N で 作ります',
      patternRuby: [{ base: '作', reading: 'つく' }],
      items: [
        {
          prompt: {
            en: 'Beer is made from barley.',
            vi: 'Bia được làm từ lúa mạch.'
          },
          jp: 'ビールは 麦から 作ります。',
          ruby: [
            { base: '麦', reading: 'むぎ' },
            { base: '作', reading: 'つく' }
          ]
        },
        {
          prompt: {
            en: 'This snack is made from rice.',
            vi: 'Món ăn vặt này làm từ gạo.'
          },
          jp: 'この お菓子は 米から 作ります。',
          ruby: [
            { base: '菓', reading: 'か' },
            { base: '子', reading: 'し' },
            { base: '米', reading: 'こめ' },
            { base: '作', reading: 'つく' }
          ]
        },
        {
          prompt: { en: 'Plastic is made from oil.', vi: 'Nhựa được làm từ dầu mỏ.' },
          jp: 'プラスチックは 石油から 作ります。',
          ruby: [
            { base: '石', reading: 'せき' },
            { base: '油', reading: 'ゆ' },
            { base: '作', reading: 'つく' }
          ]
        },
        {
          prompt: {
            en: 'This ring is made of real gold.',
            vi: 'Chiếc nhẫn này làm bằng vàng thật.'
          },
          jp: 'この 指輪は 本物の 金で 作りました。',
          ruby: [
            { base: '指', reading: 'ゆび' },
            { base: '輪', reading: 'わ' },
            { base: '本', reading: 'ほん' },
            { base: '物', reading: 'もの' },
            { base: '金', reading: 'きん' },
            { base: '作', reading: 'つく' }
          ]
        },
        {
          prompt: {
            en: 'Japanese houses long ago were made of wood and paper.',
            vi: 'Nhà Nhật ngày xưa được làm bằng gỗ và giấy.'
          },
          jp: '昔の 日本の 家は 木と 紙で 作りました。',
          ruby: [
            { base: '昔', reading: 'むかし' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '家', reading: 'いえ' },
            { base: '木', reading: 'き' },
            { base: '紙', reading: 'かみ' },
            { base: '作', reading: 'つく' }
          ]
        }
      ]
    },
    {
      pattern: 'N の 中 / 外 / 上 / 下 / 前 / 後 / 右 / 左',
      patternRuby: [
        { base: '中', reading: 'なか' },
        { base: '外', reading: 'そと' },
        { base: '上', reading: 'うえ' },
        { base: '下', reading: 'した' },
        { base: '前', reading: 'まえ' },
        { base: '後', reading: 'うし' },
        { base: '右', reading: 'みぎ' },
        { base: '左', reading: 'ひだ' }
      ],
      items: [
        {
          prompt: {
            en: 'There is a beautiful pond in front of the temple.',
            vi: 'Có một hồ đẹp trước chùa.'
          },
          jp: 'お寺の 前に 美しい 池が あります。',
          ruby: [
            { base: '寺', reading: 'てら' },
            { base: '前', reading: 'まえ' },
            { base: '美', reading: 'うつく' },
            { base: '池', reading: 'いけ' }
          ]
        },
        {
          prompt: {
            en: 'An explanation of the temple is written on the left of the gate.',
            vi: 'Bên trái cổng có ghi lời giới thiệu về ngôi chùa.'
          },
          jp: '門の 左に お寺の 説明が 書いて あります。',
          ruby: [
            { base: '門', reading: 'もん' },
            { base: '左', reading: 'ひだり' },
            { base: '寺', reading: 'てら' },
            { base: '説', reading: 'せつ' },
            { base: '明', reading: 'めい' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'Please wait outside the hall.',
            vi: 'Hãy đợi bên ngoài hội trường.'
          },
          jp: '会場の 外で 待って ください。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '場', reading: 'じょう' },
            { base: '外', reading: 'そと' },
            { base: '待', reading: 'ま' }
          ]
        },
        {
          prompt: { en: 'The key is on the desk.', vi: 'Chìa khóa ở trên bàn đấy.' },
          jp: '鍵は 机の 上に ありますよ。',
          ruby: [
            { base: '鍵', reading: 'かぎ' },
            { base: '机', reading: 'つくえ' },
            { base: '上', reading: 'うえ' }
          ]
        },
        {
          prompt: {
            en: 'The cat is hiding under the bed.',
            vi: 'Con mèo đang trốn dưới gầm giường.'
          },
          jp: 'ベッドの 下に 猫が 隠れています。',
          ruby: [
            { base: '下', reading: 'した' },
            { base: '猫', reading: 'ねこ' },
            { base: '隠', reading: 'かく' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'It is beautiful, is it not?',
        vi: 'Đẹp quá nhỉ.'
      },
      jp: 'きれいですね。'
    },
    {
      prompt: {
        en: 'Can we go inside?',
        vi: 'Có vào được bên trong không?'
      },
      jp: '中に 入れますか。',
      ruby: [
        { base: '中', reading: 'なか' },
        { base: '入', reading: 'はい' }
      ]
    }
  ]
};
