import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson16SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V1-て、V2-て、V3',
      items: [
        {
          prompt: {
            en: 'I take a shower, eat breakfast, and go to the office.',
            vi: 'Tôi tắm vòi sen, ăn sáng, rồi đi làm.'
          },
          jp: 'シャワーを 浴びて、朝ごはんを 食べて、会社へ 行きます。',
          ruby: [
            { base: '浴', reading: 'あ' },
            { base: '朝', reading: 'あさ' },
            { base: '食', reading: 'た' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'I get on a train, transfer at Umeda, and take bus number 8.',
            vi: 'Tôi lên tàu điện, chuyển tàu ở Umeda, rồi lên xe buýt số 8.'
          },
          jp: '電車に 乗って、梅田で 乗り換えて、8番の バスに 乗ります。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '乗', reading: 'の' },
            { base: '梅', reading: 'うめ' },
            { base: '田', reading: 'だ' },
            { base: '乗', reading: 'の' },
            { base: '換', reading: 'か' },
            { base: '番', reading: 'ばん' },
            { base: '乗', reading: 'の' }
          ]
        },
        {
          prompt: {
            en: 'I enter the bank, withdraw money, and leave.',
            vi: 'Tôi vào ngân hàng, rút tiền, rồi ra.'
          },
          jp: '銀行に 入って、お金を 下ろして、出ます。',
          ruby: [
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '入', reading: 'はい' },
            { base: '金', reading: 'かね' },
            { base: '下', reading: 'お' },
            { base: '出', reading: 'で' }
          ]
        },
        {
          prompt: {
            en: 'I go jogging, take a shower, and drink tea.',
            vi: 'Tôi chạy bộ, tắm vòi sen, rồi uống trà.'
          },
          jp: 'ジョギングを して、シャワーを 浴びて、お茶を 飲みます。',
          ruby: [
            { base: '浴', reading: 'あ' },
            { base: '茶', reading: 'ちゃ' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: {
            en: 'I visit a temple, go to a shrine, and call a friend.',
            vi: 'Tôi tham quan chùa, đến đền, rồi gọi điện cho bạn.'
          },
          jp: 'お寺を 見学して、神社へ 行って、友達に 電話します。',
          ruby: [
            { base: '寺', reading: 'てら' },
            { base: '見', reading: 'けん' },
            { base: '学', reading: 'がく' },
            { base: '神', reading: 'じん' },
            { base: '社', reading: 'じゃ' },
            { base: '行', reading: 'い' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        },
        {
          prompt: {
            en: 'I put in the card, take out money, and start shopping.',
            vi: 'Tôi cho thẻ vào, lấy tiền ra, rồi bắt đầu mua sắm.'
          },
          jp: 'カードを 入れて、お金を 出して、買い物を 始めます。',
          ruby: [
            { base: '入', reading: 'い' },
            { base: '金', reading: 'かね' },
            { base: '出', reading: 'だ' },
            { base: '買', reading: 'か' },
            { base: '物', reading: 'もの' },
            { base: '始', reading: 'はじ' }
          ]
        },
        {
          prompt: {
            en: 'I get off the train, press the button, and enter the university.',
            vi: 'Tôi xuống tàu, bấm nút, rồi vào đại học.'
          },
          jp: '電車を 降りて、ボタンを 押して、大学に 入ります。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '降', reading: 'お' },
            { base: '押', reading: 'お' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '入', reading: 'はい' }
          ]
        }
      ]
    },
    {
      pattern: 'い-adj-くて、い-adj',
      items: [
        {
          prompt: { en: 'This road is long and dark.', vi: 'Con đường này dài và tối.' },
          jp: 'この 道は 長くて、暗いです。',
          ruby: [
            { base: '道', reading: 'みち' },
            { base: '長', reading: 'なが' },
            { base: '暗', reading: 'くら' }
          ]
        },
        {
          prompt: { en: 'He is young and tall.', vi: 'Anh ấy trẻ và cao.' },
          jp: '彼は 若くて、背が 高いです。',
          ruby: [
            { base: '彼', reading: 'かれ' },
            { base: '若', reading: 'わか' },
            { base: '背', reading: 'せ' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          prompt: { en: 'The room is bright and wide.', vi: 'Căn phòng sáng và rộng.' },
          jp: '部屋は 明るくて、広いです。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '明', reading: 'あか' },
            { base: '広', reading: 'ひろ' }
          ]
        },
        {
          prompt: { en: 'This skirt is short and cheap.', vi: 'Váy này ngắn và rẻ.' },
          jp: 'この スカートは 短くて、安いです。',
          ruby: [
            { base: '短', reading: 'みじか' },
            { base: '安', reading: 'やす' }
          ]
        },
        {
          prompt: { en: 'Her hair is long and black.', vi: 'Tóc cô ấy dài và đen.' },
          jp: '彼女の 髪は 長くて、黒いです。',
          ruby: [
            { base: '彼', reading: 'かの' },
            { base: '女', reading: 'じょ' },
            { base: '髪', reading: 'かみ' },
            { base: '長', reading: 'なが' },
            { base: '黒', reading: 'くろ' }
          ]
        }
      ]
    },
    {
      pattern: 'な-adj/N で、～',
      items: [
        {
          prompt: {
            en: 'This shop is convenient and the service is good.',
            vi: 'Cửa hàng này tiện và dịch vụ tốt.'
          },
          jp: 'この 店は 便利で、サービスが いいです。',
          ruby: [
            { base: '店', reading: 'みせ' },
            { base: '便', reading: 'べん' },
            { base: '利', reading: 'り' }
          ]
        },
        {
          prompt: {
            en: 'This place is quiet and there is a lot of greenery.',
            vi: 'Chỗ này yên tĩnh và nhiều cây xanh.'
          },
          jp: 'ここは 静かで、緑が 多いです。',
          ruby: [
            { base: '静', reading: 'しず' },
            { base: '緑', reading: 'みどり' },
            { base: '多', reading: 'おお' }
          ]
        },
        {
          prompt: { en: 'The shrine is famous and beautiful.', vi: 'Ngôi đền nổi tiếng và đẹp.' },
          jp: '神社は 有名で、きれいです。',
          ruby: [
            { base: '神', reading: 'じん' },
            { base: '社', reading: 'じゃ' },
            { base: '有', reading: 'ゆう' },
            { base: '名', reading: 'めい' }
          ]
        },
        {
          prompt: {
            en: 'The temple is quiet and very beautiful.',
            vi: 'Ngôi chùa yên tĩnh và rất đẹp.'
          },
          jp: 'お寺は 静かで、とても きれいです。',
          ruby: [
            { base: '寺', reading: 'てら' },
            { base: '静', reading: 'しず' }
          ]
        },
        {
          prompt: {
            en: 'Yuki is a student and her Japanese is skillful.',
            vi: 'Yuki là học sinh và tiếng Nhật khéo.'
          },
          jp: 'ゆきさんは 学生で、日本語が 上手です。',
          ruby: [
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' }
          ]
        }
      ]
    },
    {
      pattern: 'V1-てから、V2',
      items: [
        {
          prompt: {
            en: 'After I take a shower, I eat breakfast.',
            vi: 'Sau khi tắm vòi sen, tôi ăn sáng.'
          },
          jp: 'シャワーを 浴びてから、朝ごはんを 食べます。',
          ruby: [
            { base: '浴', reading: 'あ' },
            { base: '朝', reading: 'あさ' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: {
            en: 'After I withdraw money, I go shopping.',
            vi: 'Sau khi rút tiền, tôi đi mua sắm.'
          },
          jp: 'お金を 下ろしてから、買い物を します。',
          ruby: [
            { base: '金', reading: 'かね' },
            { base: '下', reading: 'お' },
            { base: '買', reading: 'か' },
            { base: '物', reading: 'もの' }
          ]
        },
        {
          prompt: {
            en: 'After I graduate from university, I will enter a company.',
            vi: 'Sau khi tốt nghiệp đại học, tôi sẽ vào công ty.'
          },
          jp: '大学を 出てから、会社に 入ります。',
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '出', reading: 'で' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '入', reading: 'はい' }
          ]
        },
        {
          prompt: {
            en: 'After I make a phone call, I start work.',
            vi: 'Sau khi gọi điện, tôi bắt đầu làm việc.'
          },
          jp: '電話してから、仕事を 始めます。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '始', reading: 'はじ' }
          ]
        },
        {
          prompt: {
            en: 'After I get off the bus, I visit the shrine.',
            vi: 'Sau khi xuống xe buýt, tôi tham quan đền.'
          },
          jp: 'バスを 降りてから、神社を 見学します。',
          ruby: [
            { base: '降', reading: 'お' },
            { base: '神', reading: 'じん' },
            { base: '社', reading: 'じゃ' },
            { base: '見', reading: 'けん' },
            { base: '学', reading: 'がく' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 は N2 が Adj',
      items: [
        {
          prompt: { en: 'Yuki has long hair.', vi: 'Yuki tóc dài.' },
          jp: 'ゆきさんは 髪が 長いです。',
          ruby: [
            { base: '髪', reading: 'かみ' },
            { base: '長', reading: 'なが' }
          ]
        },
        {
          prompt: { en: 'I have small eyes.', vi: 'Tôi mắt nhỏ.' },
          jp: '私は 目が 小さいです。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '目', reading: 'め' },
            { base: '小', reading: 'ちい' }
          ]
        },
        {
          prompt: { en: 'My older brother is tall.', vi: 'Anh trai tôi cao.' },
          jp: '兄は 背が 高いです。',
          ruby: [
            { base: '兄', reading: 'あに' },
            { base: '背', reading: 'せ' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          prompt: { en: 'This child has big ears.', vi: 'Đứa trẻ này tai to.' },
          jp: 'この 子は 耳が 大きいです。',
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '耳', reading: 'みみ' },
            { base: '大', reading: 'おお' }
          ]
        },
        {
          prompt: { en: 'Tanaka has long legs.', vi: 'Anh Tanaka chân dài.' },
          jp: '田中さんは 足が 長いです。',
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '足', reading: 'あし' },
            { base: '長', reading: 'なが' }
          ]
        },
        {
          prompt: { en: 'I have white teeth.', vi: 'Tôi răng trắng.' },
          jp: '私は 歯が 白いです。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '歯', reading: 'は' },
            { base: '白', reading: 'しろ' }
          ]
        },
        {
          prompt: { en: 'Maria has a round face.', vi: 'Maria mặt tròn.' },
          jp: 'マリアさんは 顔が 丸いです。',
          ruby: [
            { base: '顔', reading: 'かお' },
            { base: '丸', reading: 'まる' }
          ]
        },
        {
          prompt: { en: 'Alex has a big mouth.', vi: 'Alex miệng to.' },
          jp: 'アレックスさんは 口が 大きいです。',
          ruby: [
            { base: '口', reading: 'くち' },
            { base: '大', reading: 'おお' }
          ]
        },
        {
          prompt: { en: 'I have a good head (I am smart).', vi: 'Tôi đầu óc tốt (thông minh).' },
          jp: '私は 頭が いいです。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '頭', reading: 'あたま' }
          ]
        },
        {
          prompt: {
            en: 'My body is fine, but my stomach is big.',
            vi: 'Cơ thể tôi ổn, nhưng bụng to.'
          },
          jp: '体は 元気ですが、おなかが 大きいです。',
          ruby: [
            { base: '体', reading: 'からだ' },
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' },
            { base: '大', reading: 'おお' }
          ]
        }
      ]
    },
    {
      pattern: 'どうやって V',
      items: [
        {
          prompt: { en: 'How do you go to the station?', vi: 'Đến ga bằng cách nào?' },
          jp: '駅へ どうやって 行きますか。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'How do you withdraw money?', vi: 'Rút tiền bằng cách nào?' },
          jp: 'お金を どうやって 下ろしますか。',
          ruby: [
            { base: '金', reading: 'かね' },
            { base: '下', reading: 'お' }
          ]
        },
        {
          prompt: { en: 'How do you go to the temple?', vi: 'Đến chùa bằng cách nào?' },
          jp: 'お寺へ どうやって 行きますか。',
          ruby: [
            { base: '寺', reading: 'てら' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'How do you make a phone call in Japan?',
            vi: 'Ở Nhật gọi điện bằng cách nào?'
          },
          jp: '日本で どうやって 電話しますか。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        },
        {
          prompt: { en: 'How do you get on this train?', vi: 'Lên tàu này bằng cách nào?' },
          jp: 'この 電車に どうやって 乗りますか。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '乗', reading: 'の' }
          ]
        }
      ]
    },
    {
      pattern: 'どの N / どれ',
      items: [
        {
          prompt: { en: 'Which bus do you take?', vi: 'Anh/chị lên xe buýt nào?' },
          jp: 'どの バスに 乗りますか。',
          ruby: [{ base: '乗', reading: 'の' }]
        },
        {
          prompt: { en: 'Which one is your bag?', vi: 'Cái nào là túi của anh/chị?' },
          jp: 'どれが あなたのかばんですか。'
        },
        {
          prompt: { en: 'Which temple will you visit?', vi: 'Anh/chị sẽ tham quan chùa nào?' },
          jp: 'どの お寺を 見学しますか。',
          ruby: [
            { base: '寺', reading: 'てら' },
            { base: '見', reading: 'けん' },
            { base: '学', reading: 'がく' }
          ]
        },
        {
          prompt: { en: 'Which train do you get off?', vi: 'Anh/chị xuống tàu nào?' },
          jp: 'どの 電車を 降りますか。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '降', reading: 'お' }
          ]
        },
        {
          prompt: { en: 'Which coffee is yours?', vi: 'Cà phê nào là của anh/chị?' },
          jp: 'コーヒーは どれですか。'
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'That is amazing!', vi: 'Giỏi quá!/Hay quá!' },
      jp: 'すごい ですね。'
    },
    {
      prompt: {
        en: 'No, I still have a long way to go. (humble reply to praise)',
        vi: 'Không, còn kém lắm. (khiêm tốn khi được khen)'
      },
      jp: 'いいえ、まだまだ です。'
    },
    {
      prompt: { en: 'Are you withdrawing money?', vi: 'Anh/Chị rút tiền phải không?' },
      jp: 'お引き出し ですか。',
      ruby: [
        { base: '引', reading: 'ひ' },
        { base: '出', reading: 'だ' }
      ]
    },
    {
      prompt: { en: 'first (of all)', vi: 'trước hết, đầu tiên' },
      jp: 'まず。'
    },
    {
      prompt: { en: 'next', vi: 'tiếp theo' },
      jp: '次に。',
      ruby: [{ base: '次', reading: 'つぎ' }]
    },
    {
      prompt: { en: 'cash card, ATM card', vi: 'thẻ ATM' },
      jp: 'キャッシュカード'
    },
    {
      prompt: { en: 'PIN (personal identification number)', vi: 'mã PIN' },
      jp: '暗証番号',
      ruby: [
        { base: '暗', reading: 'あん' },
        { base: '証', reading: 'しょう' },
        { base: '番', reading: 'ばん' },
        { base: '号', reading: 'ごう' }
      ]
    },
    {
      prompt: { en: 'amount of money', vi: 'số tiền' },
      jp: '金額',
      ruby: [
        { base: '金', reading: 'きん' },
        { base: '額', reading: 'がく' }
      ]
    },
    {
      prompt: { en: 'confirmation', vi: 'xác nhận' },
      jp: '確認',
      ruby: [
        { base: '確', reading: 'かく' },
        { base: '認', reading: 'にん' }
      ]
    },
    {
      prompt: { en: 'to confirm', vi: 'xác nhận' },
      jp: '確認します。',
      ruby: [
        { base: '確', reading: 'かく' },
        { base: '認', reading: 'にん' }
      ]
    },
    {
      prompt: { en: 'button', vi: 'nút bấm' },
      jp: 'ボタン'
    }
  ]
};
