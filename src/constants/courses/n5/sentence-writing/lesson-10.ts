import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson10SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N が あります / います',
      items: [
        {
          prompt: {
            en: 'Excuse me, is there a convenience store near here?',
            vi: 'Xin lỗi, gần đây có cửa hàng tiện lợi không?'
          },
          jp: 'すみません、この 近くに コンビニが ありますか。',
          ruby: [{ base: '近', reading: 'ちか' }]
        },
        {
          prompt: { en: 'I have a meeting this afternoon.', vi: 'Chiều nay tôi có cuộc họp.' },
          jp: '今日は 午後 会議が あります。',
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '午', reading: 'ご' },
            { base: '後', reading: 'ご' },
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' }
          ]
        },
        {
          prompt: {
            en: 'Oh, there is a cat. It is cute, is it not?',
            vi: 'Ồ, có con mèo kìa. Dễ thương nhỉ.'
          },
          jp: 'あ、猫が いますよ。かわいいですね。',
          ruby: [{ base: '猫', reading: 'ねこ' }]
        },
        {
          prompt: { en: 'There are pandas at Ueno Zoo.', vi: 'Ở sở thú Ueno có gấu trúc.' },
          jp: '上野動物園には パンダが います。',
          ruby: [
            { base: '上', reading: 'うえ' },
            { base: '野', reading: 'の' },
            { base: '動', reading: 'どう' },
            { base: '物', reading: 'ぶつ' },
            { base: '園', reading: 'えん' }
          ]
        },
        {
          prompt: {
            en: 'There is a man and a woman at the reception desk.',
            vi: 'Ở quầy lễ tân có một người đàn ông và một người phụ nữ.'
          },
          jp: '受付に 男の 人と 女の 人が います。',
          ruby: [
            { base: '受', reading: 'うけ' },
            { base: '付', reading: 'つけ' },
            { base: '男', reading: 'おとこ' },
            { base: '人', reading: 'ひと' },
            { base: '女', reading: 'おんな' },
            { base: '人', reading: 'ひと' }
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
            en: 'Fish sauce, coconut milk and such are in that section over there.',
            vi: 'Nước mắm, nước cốt dừa... ở khu bên kia.'
          },
          jp: 'ナンプラーや ココナッツミルクは あちらの コーナーに あります。'
        },
        {
          prompt: {
            en: 'There is a bank, a post office and such near the station.',
            vi: 'Gần ga có ngân hàng, bưu điện...'
          },
          jp: '駅の 近くに 銀行や 郵便局が あります。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '近', reading: 'ちか' },
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '郵', reading: 'ゆう' },
            { base: '便', reading: 'びん' },
            { base: '局', reading: 'きょく' }
          ]
        }
      ]
    },
    {
      pattern: 'N ですか (confirmation)',
      items: [
        {
          prompt: {
            en: 'Where is Asia Store? ...Asia Store? It is in that building.',
            vi: 'Cửa hàng Asia Store ở đâu ạ? ...Asia Store à? Nó ở trong tòa nhà kia.'
          },
          jp: 'アジアストアは どこですか。……アジアストアですか。あの ビルの 中に あります。',
          ruby: [{ base: '中', reading: 'なか' }]
        },
        {
          prompt: {
            en: 'Where are the batteries? ...Batteries? They are next to the register.',
            vi: 'Pin ở đâu ạ? ...Pin à? Ở cạnh quầy thu ngân.'
          },
          jp: '電池は どこですか。……電池ですか。レジの 隣に あります。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '池', reading: 'ち' },
            { base: '電', reading: 'でん' },
            { base: '池', reading: 'ち' },
            { base: '隣', reading: 'となり' }
          ]
        },
        {
          prompt: {
            en: 'Is Mr. Tanaka here? ...Mr. Tanaka? He is in the meeting room now.',
            vi: 'Có anh Tanaka ở đây không? ...Anh Tanaka à? Giờ anh ấy đang ở phòng họp.'
          },
          jp: '田中さんは いますか。……田中さんですか。今 会議室に います。',
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '今', reading: 'いま' },
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '室', reading: 'しつ' }
          ]
        },
        {
          prompt: {
            en: 'Where is the restroom? ...The restroom? It is on the second floor.',
            vi: 'Nhà vệ sinh ở đâu ạ? ...Nhà vệ sinh à? Ở tầng 2.'
          },
          jp: 'トイレは どこですか。……トイレですか。2階に あります。',
          ruby: [{ base: '階', reading: 'かい' }]
        },
        {
          prompt: {
            en: 'Do you have fish sauce? ...Fish sauce? It is over there.',
            vi: 'Có nước mắm không ạ? ...Nước mắm à? Ở đằng kia.'
          },
          jp: 'ナンプラー、ありますか。……ナンプラーですか。あちらに あります。'
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
