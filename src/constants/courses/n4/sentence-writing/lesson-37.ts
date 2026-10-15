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
            en: 'Everyone was formally invited by the company.',
            vi: 'Quý vị được công ty mời trang trọng.'
          },
          jp: '皆様は 会社に 招待されました。',
          ruby: [
            { base: '皆', reading: 'みな' },
            { base: '様', reading: 'さま' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '招', reading: 'しょう' },
            { base: '待', reading: 'たい' }
          ]
        },
        {
          prompt: {
            en: 'I was asked a favor by my mother.',
            vi: 'Tôi được mẹ nhờ một việc.'
          },
          jp: '母に 頼まれました。',
          ruby: [
            { base: '母', reading: 'はは' },
            { base: '頼', reading: 'たの' }
          ]
        },
        {
          prompt: {
            en: 'I was warned by a police officer.',
            vi: 'Tôi bị cảnh sát nhắc nhở.'
          },
          jp: '警官に 注意されました。',
          ruby: [
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
            en: 'A meeting will be held all over the world.',
            vi: 'Một cuộc họp sẽ được tổ chức trên toàn thế giới.'
          },
          jp: '世界中と 世界～じゅうで 会議が 行われます。',
          ruby: [
            { base: '世', reading: 'せ' },
            { base: '界', reading: 'かい' },
            { base: '中', reading: 'じゅう' },
            { base: '世', reading: 'せ' },
            { base: '界', reading: 'かい' },
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
          jp: 'インスタントラーメンは 20～せいきに 発明されました。',
          ruby: [
            { base: '発', reading: 'はつ' },
            { base: '明', reading: 'めい' }
          ]
        },
        {
          prompt: {
            en: 'A new World Heritage site was discovered.',
            vi: 'Một di sản thế giới mới được phát hiện.'
          },
          jp: '新しい 世界遺産が 発見されました。',
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '世', reading: 'せ' },
            { base: '界', reading: 'かい' },
            { base: '遺', reading: 'い' },
            { base: '産', reading: 'さん' },
            { base: '発', reading: 'はっ' },
            { base: '見', reading: 'けん' }
          ]
        },
        {
          prompt: {
            en: 'The house was burned after that.',
            vi: 'Ngôi nhà đã cháy sau đó.'
          },
          jp: 'その後 家が 焼けました。',
          ruby: [
            { base: '後', reading: 'ご' },
            { base: '家', reading: 'いえ' },
            { base: '焼', reading: 'や' }
          ]
        },
        {
          prompt: {
            en: 'That was great, was it not? A golden sculpture was shown.',
            vi: 'Hay quá nhỉ. Một tác phẩm điêu khắc màu vàng được trưng bày.'
          },
          jp: 'よかったですね。金色の 彫刻が 見られました。',
          ruby: [
            { base: '金', reading: 'きん' },
            { base: '色', reading: 'いろ' },
            { base: '彫', reading: 'ちょう' },
            { base: '刻', reading: 'こく' },
            { base: '見', reading: 'み' }
          ]
        }
      ]
    },
    {
      pattern: 'N から / N で 作ります',
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
          prompt: {
            en: 'Plastic is made from oil as a raw material.',
            vi: 'Nhựa được làm từ dầu mỏ làm nguyên liệu.'
          },
          jp: 'プラスチックは 石油の 原料から 作ります。',
          ruby: [
            { base: '石', reading: 'せき' },
            { base: '油', reading: 'ゆ' },
            { base: '原', reading: 'げん' },
            { base: '料', reading: 'りょう' },
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
            en: 'The luxurious hall was made of gold.',
            vi: 'Hội trường hoành tráng được làm bằng vàng.'
          },
          jp: '豪華な 建物は 金で 作りました。',
          ruby: [
            { base: '豪', reading: 'ごう' },
            { base: '華', reading: 'か' },
            { base: '建', reading: 'たて' },
            { base: '物', reading: 'もの' },
            { base: '金', reading: 'きん' },
            { base: '作', reading: 'つく' }
          ]
        }
      ]
    },
    {
      pattern: 'N の 中 / 外 / 上 / 下 / 前 / 後 / 右 / 左',
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
            en: 'A legend is written on the left of the gate.',
            vi: 'Truyền thuyết được viết bên trái cổng.'
          },
          jp: '門の 左に 言い伝えが 書いて あります。',
          ruby: [
            { base: '門', reading: 'もん' },
            { base: '左', reading: 'ひだり' },
            { base: '言', reading: 'い' },
            { base: '伝', reading: 'つた' },
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
          prompt: {
            en: 'The sculpture is on the right of the box.',
            vi: 'Tác phẩm điêu khắc ở bên phải hộp.'
          },
          jp: '箱の 右に 彫刻が あります。',
          ruby: [
            { base: '箱', reading: 'はこ' },
            { base: '右', reading: 'みぎ' },
            { base: '彫', reading: 'ちょう' },
            { base: '刻', reading: 'こく' }
          ]
        },
        {
          prompt: {
            en: 'There is a mouse under the desk.',
            vi: 'Có một con chuột dưới bàn.'
          },
          jp: '机の 下に 鼠が います。',
          ruby: [
            { base: '机', reading: 'つくえ' },
            { base: '下', reading: 'した' },
            { base: '鼠', reading: 'ねずみ' }
          ]
        },
        {
          prompt: {
            en: 'The teacher praises students. Father scolds them.',
            vi: 'Giáo viên khen học sinh. Bố mắng họ.'
          },
          jp: '先生は 学生を 褒めます。父は しかります。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' },
            { base: '褒', reading: 'ほ' },
            { base: '父', reading: 'ちち' }
          ]
        },
        {
          prompt: {
            en: 'A friend invites me. The company formally invites everyone.',
            vi: 'Bạn rủ tôi. Công ty mời mọi người một cách trang trọng.'
          },
          jp: '友だちは 誘います。会社は 皆様を 招待します。',
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '誘', reading: 'さそ' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '皆', reading: 'みな' },
            { base: '様', reading: 'さま' },
            { base: '招', reading: 'しょう' },
            { base: '待', reading: 'たい' }
          ]
        },
        {
          prompt: {
            en: 'Mother asks a favor. The officer warns me.',
            vi: 'Mẹ nhờ tôi. Cảnh sát nhắc nhở.'
          },
          jp: '母は 頼みます。警官は 注意します。',
          ruby: [
            { base: '母', reading: 'はは' },
            { base: '頼', reading: 'たの' },
            { base: '警', reading: 'けい' },
            { base: '官', reading: 'かん' },
            { base: '注', reading: 'ちゅう' },
            { base: '意', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'A thief steals bags. A dog steps on feet.',
            vi: 'Kẻ trộm lấy cắp túi. Chó dẫm chân.'
          },
          jp: '泥棒は かばんを とります。犬は 足を 踏みます。',
          ruby: [
            { base: '泥', reading: 'どろ' },
            { base: '棒', reading: 'ぼう' },
            { base: '犬', reading: 'いぬ' },
            { base: '足', reading: 'あし' },
            { base: '踏', reading: 'ふ' }
          ]
        },
        {
          prompt: {
            en: 'Children break toys and make shirts dirty.',
            vi: 'Trẻ con làm hỏng đồ chơi và làm bẩn áo.'
          },
          jp: '子どもは おもちゃを 壊します。シャツを 汚します。',
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '壊', reading: 'こわ' },
            { base: '汚', reading: 'よご' }
          ]
        },
        {
          prompt: {
            en: 'The city holds a meeting. The firm exports rice and imports oil.',
            vi: 'Thành phố tổ chức họp. Công ty xuất gạo và nhập dầu.'
          },
          jp: '市は 会議を 行います。会社は 米を 輸出します。石油を 輸入します。',
          ruby: [
            { base: '市', reading: 'し' },
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '行', reading: 'おこな' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '米', reading: 'こめ' },
            { base: '輸', reading: 'ゆ' },
            { base: '出', reading: 'しゅつ' },
            { base: '石', reading: 'せき' },
            { base: '油', reading: 'ゆ' },
            { base: '輸', reading: 'ゆ' },
            { base: '入', reading: 'にゅう' }
          ]
        },
        {
          prompt: {
            en: 'She translates books. He invents tools and discovers stars.',
            vi: 'Cô ấy dịch sách. Anh ấy phát minh dụng cụ và phát hiện sao.'
          },
          jp: '彼女は 本を 翻訳します。彼は 道具を 発明します。星を 発見します。',
          ruby: [
            { base: '彼', reading: 'かの' },
            { base: '女', reading: 'じょ' },
            { base: '本', reading: 'ほん' },
            { base: '翻', reading: 'ほん' },
            { base: '訳', reading: 'やく' },
            { base: '彼', reading: 'かれ' },
            { base: '道', reading: 'どう' },
            { base: '具', reading: 'ぐ' },
            { base: '発', reading: 'はつ' },
            { base: '明', reading: 'めい' },
            { base: '星', reading: 'ほし' },
            { base: '発', reading: 'はっ' },
            { base: '見', reading: 'けん' }
          ]
        },
        {
          prompt: {
            en: 'Old houses burn easily.',
            vi: 'Nhà cũ dễ cháy.'
          },
          jp: '古い 家は すぐ 焼けます。',
          ruby: [
            { base: '古', reading: 'ふる' },
            { base: '家', reading: 'いえ' },
            { base: '焼', reading: 'や' }
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
