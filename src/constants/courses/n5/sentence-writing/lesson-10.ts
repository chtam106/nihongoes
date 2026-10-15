import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson10SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N が あります / います',
      items: [
        {
          prompt: { en: 'There is a convenience store.', vi: 'Có cửa hàng tiện lợi.' },
          jp: 'コンビニが あります。'
        },
        {
          prompt: { en: 'There is a park.', vi: 'Có công viên.' },
          jp: '公園が あります。',
          ruby: [
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' }
          ]
        },
        {
          prompt: { en: 'There is a dog.', vi: 'Có con chó.' },
          jp: '犬が います。',
          ruby: [{ base: '犬', reading: 'いぬ' }]
        },
        {
          prompt: { en: 'There is a cat.', vi: 'Có con mèo.' },
          jp: '猫が います。',
          ruby: [{ base: '猫', reading: 'ねこ' }]
        },
        {
          prompt: { en: 'There is a panda.', vi: 'Có gấu trúc.' },
          jp: 'パンダが います。'
        },
        {
          prompt: { en: 'There is an elephant.', vi: 'Có con voi.' },
          jp: '象が います。',
          ruby: [{ base: '象', reading: 'ぞう' }]
        },
        {
          prompt: { en: 'There is a man.', vi: 'Có một người đàn ông.' },
          jp: '男の 人が います。',
          ruby: [
            { base: '男', reading: 'おとこ' },
            { base: '人', reading: 'ひと' }
          ]
        },
        {
          prompt: { en: 'There is a woman.', vi: 'Có một người đàn bà.' },
          jp: '女の 人が います。',
          ruby: [
            { base: '女', reading: 'おんな' },
            { base: '人', reading: 'ひと' }
          ]
        },
        {
          prompt: { en: 'There is a boy.', vi: 'Có một cậu bé.' },
          jp: '男の 子が います。',
          ruby: [
            { base: '男', reading: 'おとこ' },
            { base: '子', reading: 'こ' }
          ]
        },
        {
          prompt: { en: 'There is a girl.', vi: 'Có một cô bé.' },
          jp: '女の 子が います。',
          ruby: [
            { base: '女', reading: 'おんな' },
            { base: '子', reading: 'こ' }
          ]
        }
      ]
    },
    {
      pattern: 'Place に N が あります / います',
      items: [
        {
          prompt: { en: 'There are trees in the park.', vi: 'Trong công viên có cây.' },
          jp: '公園に 木が あります。',
          ruby: [
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '木', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'There is a mailbox over there.', vi: 'Đằng kia có hòm thư.' },
          jp: 'あそこに ポストが あります。'
        },
        {
          prompt: { en: 'There is an ATM here.', vi: 'Ở đây có máy ATM.' },
          jp: 'ここに ATMが あります。'
        },
        {
          prompt: {
            en: 'There is a coffee shop in that building.',
            vi: 'Trong tòa nhà kia có quán cà phê.'
          },
          jp: 'あの ビルに 喫茶店が あります。',
          ruby: [
            { base: '喫', reading: 'きっ' },
            { base: '茶', reading: 'さ' },
            { base: '店', reading: 'てん' }
          ]
        },
        {
          prompt: { en: 'There is a cat under the table.', vi: 'Dưới bàn có con mèo.' },
          jp: 'テーブルの 下に 猫が います。',
          ruby: [
            { base: '下', reading: 'した' },
            { base: '猫', reading: 'ねこ' }
          ]
        },
        {
          prompt: {
            en: 'There are various things in the store.',
            vi: 'Trong cửa hàng có nhiều thứ.'
          },
          jp: '店に いろいろな 物が あります。',
          ruby: [
            { base: '店', reading: 'みせ' },
            { base: '物', reading: 'もの' }
          ]
        }
      ]
    },
    {
      pattern: 'N は Place に あります / います',
      items: [
        {
          prompt: { en: 'The refrigerator is in the kitchen.', vi: 'Tủ lạnh ở trong bếp.' },
          jp: '冷蔵庫は 台所に あります。',
          ruby: [
            { base: '冷', reading: 'れい' },
            { base: '蔵', reading: 'ぞう' },
            { base: '庫', reading: 'こ' },
            { base: '台', reading: 'だい' },
            { base: '所', reading: 'どころ' }
          ]
        },
        {
          prompt: { en: 'The bed is in the room.', vi: 'Giường ở trong phòng.' },
          jp: 'ベッドは 部屋に あります。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' }
          ]
        },
        {
          prompt: { en: 'Alex is in the park.', vi: 'Anh Alex ở công viên.' },
          jp: 'アレックスさんは 公園に います。',
          ruby: [
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' }
          ]
        },
        {
          prompt: { en: 'The switch is next to the door.', vi: 'Công tắc ở cạnh cửa.' },
          jp: 'スイッチは ドアの 隣に あります。',
          ruby: [{ base: '隣', reading: 'となり' }]
        },
        {
          prompt: {
            en: 'The taxi stand is in front of the station.',
            vi: 'Điểm đón taxi ở trước ga.'
          },
          jp: 'タクシーの 乗り場は 駅の 前に あります。',
          ruby: [
            { base: '乗', reading: 'の' },
            { base: '場', reading: 'ば' },
            { base: '駅', reading: 'えき' },
            { base: '前', reading: 'まえ' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 の N2 (position)',
      patternRuby: [
        { base: '上', reading: 'うえ' },
        { base: '下', reading: 'した' },
        { base: '前', reading: 'まえ' },
        { base: '右', reading: 'みぎ' },
        { base: '左', reading: 'ひだり' },
        { base: '中', reading: 'なか' },
        { base: '外', reading: 'そと' },
        { base: '隣', reading: 'となり' },
        { base: '近', reading: 'ちか' },
        { base: '間', reading: 'あいだ' }
      ],
      items: [
        {
          prompt: { en: 'The book is on the shelf.', vi: 'Sách ở trên kệ.' },
          jp: '本は 棚の 上に あります。',
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '棚', reading: 'たな' },
            { base: '上', reading: 'うえ' }
          ]
        },
        {
          prompt: { en: 'The box is under the table.', vi: 'Hộp ở dưới bàn.' },
          jp: '箱は テーブルの 下に あります。',
          ruby: [
            { base: '箱', reading: 'はこ' },
            { base: '下', reading: 'した' }
          ]
        },
        {
          prompt: { en: 'The dog is in front of the door.', vi: 'Con chó ở trước cửa.' },
          jp: '犬は ドアの 前に います。',
          ruby: [
            { base: '犬', reading: 'いぬ' },
            { base: '前', reading: 'まえ' }
          ]
        },
        {
          prompt: { en: 'The cat is behind the refrigerator.', vi: 'Con mèo ở sau tủ lạnh.' },
          jp: '猫は 冷蔵庫の うしろに います。',
          ruby: [
            { base: '猫', reading: 'ねこ' },
            { base: '冷', reading: 'れい' },
            { base: '蔵', reading: 'ぞう' },
            { base: '庫', reading: 'こ' }
          ]
        },
        {
          prompt: { en: 'The window is on the right.', vi: 'Cửa sổ ở bên phải.' },
          jp: '窓は 右に あります。',
          ruby: [
            { base: '窓', reading: 'まど' },
            { base: '右', reading: 'みぎ' }
          ]
        },
        {
          prompt: { en: 'The post office is on the left.', vi: 'Bưu điện ở bên trái.' },
          jp: '郵便局は 左に あります。',
          ruby: [
            { base: '郵', reading: 'ゆう' },
            { base: '便', reading: 'びん' },
            { base: '局', reading: 'きょく' },
            { base: '左', reading: 'ひだり' }
          ]
        },
        {
          prompt: {
            en: 'The supermarket is inside the building.',
            vi: 'Siêu thị ở trong tòa nhà.'
          },
          jp: 'スーパーは ビルの 中に あります。',
          ruby: [{ base: '中', reading: 'なか' }]
        },
        {
          prompt: { en: 'The dog is outside.', vi: 'Con chó ở ngoài.' },
          jp: '犬は 外に います。',
          ruby: [
            { base: '犬', reading: 'いぬ' },
            { base: '外', reading: 'そと' }
          ]
        },
        {
          prompt: { en: 'The cafe is next to the park.', vi: 'Quán cà phê ở cạnh công viên.' },
          jp: '喫茶店は 公園の 隣に あります。',
          ruby: [
            { base: '喫', reading: 'きっ' },
            { base: '茶', reading: 'さ' },
            { base: '店', reading: 'てん' },
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '隣', reading: 'となり' }
          ]
        },
        {
          prompt: {
            en: 'The convenience store is near the station.',
            vi: 'Cửa hàng tiện lợi ở gần ga.'
          },
          jp: 'コンビニは 駅の 近くに あります。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '近', reading: 'ちか' }
          ]
        },
        {
          prompt: {
            en: 'The bank is between the post office and the park.',
            vi: 'Ngân hàng ở giữa bưu điện và công viên.'
          },
          jp: '銀行は 郵便局と 公園の 間に あります。',
          ruby: [
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '郵', reading: 'ゆう' },
            { base: '便', reading: 'びん' },
            { base: '局', reading: 'きょく' },
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '間', reading: 'あいだ' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 や N2 [など]',
      items: [
        {
          prompt: {
            en: 'There is a bookstore and a flower shop.',
            vi: 'Có hiệu sách và hiệu hoa.'
          },
          jp: '本屋や 花屋が あります。',
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '屋', reading: 'や' },
            { base: '花', reading: 'はな' },
            { base: '屋', reading: 'や' }
          ]
        },
        {
          prompt: {
            en: 'There are dogs and cats and so on.',
            vi: 'Có chó và mèo v.v.'
          },
          jp: '犬や 猫などが います。',
          ruby: [
            { base: '犬', reading: 'いぬ' },
            { base: '猫', reading: 'ねこ' }
          ]
        },
        {
          prompt: {
            en: 'There is a table, a bed, and so on.',
            vi: 'Có bàn, giường, v.v.'
          },
          jp: 'テーブルや ベッドなどが あります。'
        },
        {
          prompt: {
            en: 'Fish sauce is in the Thai section.',
            vi: 'Nước mắm ở khu Thái.'
          },
          jp: 'ナンプラーは タイの コーナーに あります。'
        },
        {
          prompt: {
            en: 'Nagano Prefecture is in Japan.',
            vi: 'Tỉnh Nagano ở Nhật.'
          },
          jp: '長野県は 日本に あります。',
          ruby: [
            { base: '長', reading: 'なが' },
            { base: '野', reading: 'の' },
            { base: '県', reading: 'けん' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' }
          ]
        }
      ]
    },
    {
      pattern: 'N ですか (confirmation)',
      items: [
        {
          prompt: { en: 'Asia Store?', vi: 'Siêu thị Asia ấy à?' },
          jp: 'アジアストアですか。'
        },
        {
          prompt: { en: 'Is this a battery?', vi: 'Đây là pin phải không?' },
          jp: 'これは 電池ですか。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '池', reading: 'ち' }
          ]
        },
        {
          prompt: { en: 'Is that a mailbox?', vi: 'Kia là hòm thư phải không?' },
          jp: 'それは ポストですか。'
        },
        {
          prompt: {
            en: 'Is this a convenience store?',
            vi: 'Đây là cửa hàng tiện lợi phải không?'
          },
          jp: 'ここは コンビニですか。'
        },
        {
          prompt: { en: 'Is that a park?', vi: 'Kia là công viên phải không?' },
          jp: 'あそこは 公園ですか。',
          ruby: [
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'Thank you. / Excuse me.', vi: 'Cám ơn. / Xin lỗi.' },
      jp: 'どうも すみません。'
    },
    {
      prompt: { en: 'bottommost, on the lowest shelf', vi: 'ở dưới cùng' },
      jp: '一番 下',
      ruby: [
        { base: '一', reading: 'いち' },
        { base: '番', reading: 'ばん' },
        { base: '下', reading: 'した' }
      ]
    }
  ]
};
