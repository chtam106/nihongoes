import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson34SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N の／V-た とおりに、V',
      items: [
        {
          prompt: {
            en: 'Assemble the furniture according to the manual.',
            vi: 'Lắp đồ nội thất theo sách hướng dẫn.'
          },
          jp: '説明書の とおりに、家具を 組み立てます。',
          ruby: [
            { base: '説', reading: 'せつ' },
            { base: '明', reading: 'めい' },
            { base: '書', reading: 'しょ' },
            { base: '家', reading: 'か' },
            { base: '具', reading: 'ぐ' },
            { base: '組', reading: 'く' },
            { base: '立', reading: 'た' }
          ]
        },
        {
          prompt: {
            en: 'Fold the paper along the line.',
            vi: 'Gập giấy theo đường kẻ.'
          },
          jp: '線の とおりに、紙を 折ります。',
          ruby: [
            { base: '線', reading: 'せん' },
            { base: '紙', reading: 'かみ' },
            { base: '折', reading: 'お' }
          ]
        },
        {
          prompt: {
            en: 'Follow the arrow on the diagram.',
            vi: 'Làm theo mũi tên trên hình.'
          },
          jp: '図の 矢印の とおりに、進みます。',
          ruby: [
            { base: '図', reading: 'ず' },
            { base: '矢', reading: 'や' },
            { base: '印', reading: 'じるし' },
            { base: '進', reading: 'すす' }
          ]
        },
        {
          prompt: {
            en: 'I brush my teeth the way the dentist taught me.',
            vi: 'Tôi đánh răng đúng như nha sĩ đã chỉ.'
          },
          jp: '歯医者さんに 習った とおりに、歯を 磨いています。',
          ruby: [
            { base: '歯', reading: 'は' },
            { base: '医', reading: 'い' },
            { base: '者', reading: 'しゃ' },
            { base: '習', reading: 'なら' },
            { base: '歯', reading: 'は' },
            { base: '磨', reading: 'みが' }
          ]
        },
        {
          prompt: {
            en: 'Please try doing it exactly the way I did.',
            vi: 'Anh thử làm đúng như tôi vừa làm xem.'
          },
          jp: '私が やった とおりに、やって みて ください。',
          ruby: [{ base: '私', reading: 'わたし' }]
        }
      ]
    },
    {
      pattern: 'N の／V-た あとで、V',
      items: [
        {
          prompt: {
            en: 'Would you like to go for a drink after work?',
            vi: 'Sau giờ làm đi uống cùng nhau không?'
          },
          jp: '仕事の あとで、いっしょに 飲みに 行きませんか。',
          ruby: [
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '飲', reading: 'の' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I take a walk after dinner.', vi: 'Ăn tối xong tôi đi dạo.' },
          jp: '晩ご飯を 食べた あとで、散歩します。',
          ruby: [
            { base: '晩', reading: 'ばん' },
            { base: '飯', reading: 'はん' },
            { base: '食', reading: 'た' },
            { base: '散', reading: 'さん' },
            { base: '歩', reading: 'ぽ' }
          ]
        },
        {
          prompt: {
            en: 'After the movie, we ate at a restaurant.',
            vi: 'Xem phim xong chúng tôi ăn ở nhà hàng.'
          },
          jp: '映画を 見た あとで、レストランで 食事しました。',
          ruby: [
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' },
            { base: '見', reading: 'み' },
            { base: '食', reading: 'しょく' },
            { base: '事', reading: 'じ' }
          ]
        },
        {
          prompt: {
            en: 'After cutting the vegetables, put them in the pot.',
            vi: 'Cắt rau xong thì cho vào nồi.'
          },
          jp: '野菜を 切った あとで、なべに 入れます。',
          ruby: [
            { base: '野', reading: 'や' },
            { base: '菜', reading: 'さい' },
            { base: '切', reading: 'き' },
            { base: '入', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'Please ask questions after you hear the explanation.',
            vi: 'Nghe giải thích xong rồi hãy đặt câu hỏi.'
          },
          jp: '説明を 聞いた あとで、質問して ください。',
          ruby: [
            { base: '説', reading: 'せつ' },
            { base: '明', reading: 'めい' },
            { base: '聞', reading: 'き' },
            { base: '質', reading: 'しつ' },
            { base: '問', reading: 'もん' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て ＋ V',
      items: [
        {
          prompt: {
            en: 'Please eat it dipped in soy sauce or sauce.',
            vi: 'Hãy chấm xì dầu hoặc nước sốt rồi ăn.'
          },
          jp: 'しょうゆか ソースを つけて 食べて ください。',
          ruby: [{ base: '食', reading: 'た' }]
        },
        {
          prompt: {
            en: 'I drive with the seat belt on.',
            vi: 'Tôi thắt dây an toàn rồi lái.'
          },
          jp: 'シートベルトを して 運転します。',
          ruby: [
            { base: '運', reading: 'うん' },
            { base: '転', reading: 'てん' }
          ]
        },
        {
          prompt: {
            en: 'I put an egg on top of the rice and eat it.',
            vi: 'Tôi đặt trứng lên trên cơm rồi ăn.'
          },
          jp: 'ご飯の 上に 卵を 載せて 食べます。',
          ruby: [
            { base: '飯', reading: 'はん' },
            { base: '上', reading: 'うえ' },
            { base: '卵', reading: 'たまご' },
            { base: '載', reading: 'の' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: {
            en: 'I add seasoning first and simmer.',
            vi: 'Tôi cho gia vị trước rồi om.'
          },
          jp: '先に 調味料を 入れて 煮ます。',
          ruby: [
            { base: '先', reading: 'さき' },
            { base: '調', reading: 'ちょう' },
            { base: '味', reading: 'み' },
            { base: '料', reading: 'りょう' },
            { base: '入', reading: 'い' },
            { base: '煮', reading: 'に' }
          ]
        },
        {
          prompt: {
            en: 'Cut the onion and put it in the pot.',
            vi: 'Cắt hành tây rồi cho vào nồi.'
          },
          jp: '玉ねぎを 切って、なべに 入れます。',
          ruby: [
            { base: '玉', reading: 'たま' },
            { base: '切', reading: 'き' },
            { base: '入', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ないで ＋ V',
      items: [
        {
          prompt: {
            en: 'Please eat this sushi without soy sauce.',
            vi: 'Món sushi này hãy ăn mà không chấm xì dầu.'
          },
          jp: 'この すしは しょうゆを つけないで 食べて ください。',
          ruby: [{ base: '食', reading: 'た' }]
        },
        {
          prompt: { en: 'I went out without an umbrella.', vi: 'Tôi lỡ ra ngoài mà không mang ô.' },
          jp: '傘を 持たないで 出かけて しまいました。',
          ruby: [
            { base: '傘', reading: 'かさ' },
            { base: '持', reading: 'も' },
            { base: '出', reading: 'で' }
          ]
        },
        {
          prompt: {
            en: 'Try reading this sentence without a dictionary.',
            vi: 'Thử đọc câu này mà không dùng từ điển xem.'
          },
          jp: '辞書を 使わないで、この 文を 読んで みて ください。',
          ruby: [
            { base: '辞', reading: 'じ' },
            { base: '書', reading: 'しょ' },
            { base: '使', reading: 'つか' },
            { base: '文', reading: 'ぶん' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          prompt: {
            en: 'Do not throw away the vegetable peels; use them for soup.',
            vi: 'Vỏ rau đừng vứt đi, dùng để nấu canh.'
          },
          jp: '野菜の 皮は 捨てないで、スープに 使います。',
          ruby: [
            { base: '野', reading: 'や' },
            { base: '菜', reading: 'さい' },
            { base: '皮', reading: 'かわ' },
            { base: '捨', reading: 'す' },
            { base: '使', reading: 'つか' }
          ]
        },
        {
          prompt: {
            en: 'I went to work without eating breakfast.',
            vi: 'Tôi đi làm mà không ăn sáng.'
          },
          jp: '朝ご飯を 食べないで 会社へ 行きました。',
          ruby: [
            { base: '朝', reading: 'あさ' },
            { base: '飯', reading: 'はん' },
            { base: '食', reading: 'た' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'Is this all right?', vi: 'Như thế này có được không?' },
      jp: 'これで いいですか。'
    },
    {
      prompt: { en: 'How is it? (polite)', vi: 'Như thế nào ạ?' },
      jp: 'いかがですか。'
    }
  ]
};
