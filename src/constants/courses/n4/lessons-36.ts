import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 36 (V-dict ように, ようになりました, ように, ～から). */
export const n4Lesson36: Lesson = {
  id: 'lesson-36',
  number: 36,
  title: {
    en: 'Goals and effort',
    vi: 'Mục tiêu và nỗ lực'
  },
  focus: {
    en: 'State purpose with V-dictionary ように, describe change with ようになりました, make gentle requests with ように, and give reasons with na-adj ～から.',
    vi: 'Nói mục đích với V-nguyên dạng ように, mô tả thay đổi với ようになりました, nhờ nhẹ nhàng với ように, và nêu lý do với tính từ な ～から.'
  },
  vocab: [
    {
      kana: 'あいます',
      romaji: 'aimasu',
      meaning: { en: 'to meet with [事故に～: an accident]', vi: 'gặp [tai nạn]' }
    },
    {
      kana: 'ちょきんします',
      kanji: '貯金します',
      romaji: 'chokin shimasu',
      meaning: { en: 'to save money', vi: 'tiết kiệm tiền' },
      ruby: [{ base: '貯', reading: 'ちょ' }]
    },
    {
      kana: 'すぎます',
      kanji: '過ぎます',
      romaji: 'sugimasu',
      meaning: { en: "to pass, to exceed [7時を～: 7 o'clock]", vi: 'quá [7 giờ]' },
      ruby: [{ base: '過', reading: 'す' }]
    },
    {
      kana: 'なれます',
      kanji: '慣れます',
      romaji: 'naremasu',
      meaning: { en: 'to get used to [仕事に～: work]', vi: 'quen với [công việc]' },
      ruby: [{ base: '慣', reading: 'な' }]
    },
    {
      kana: 'くさります',
      kanji: '腐ります',
      romaji: 'kusarimasu',
      meaning: {
        en: 'to rot, to go bad [食べ物が～: food]',
        vi: 'bị hỏng, bị thiu [thức ăn ~]'
      },
      ruby: [{ base: '腐', reading: 'くさ' }]
    },
    {
      kana: 'けんどう',
      kanji: '剣道',
      romaji: 'kendō',
      meaning: { en: 'kendo (Japanese fencing)', vi: 'kiếm đạo' },
      ruby: [
        { base: '剣', reading: 'けん' },
        { base: '道', reading: 'どう' }
      ]
    },
    {
      kana: 'じゅうどう',
      kanji: '柔道',
      romaji: 'jūdō',
      meaning: { en: 'judo', vi: 'judo' },
      ruby: [
        { base: '柔', reading: 'じゅう' },
        { base: '道', reading: 'どう' }
      ]
    },
    {
      kana: 'ラッシュ',
      romaji: 'rasshu',
      meaning: { en: 'rush hour, traffic jam', vi: 'tắc đường' }
    },
    {
      kana: 'うちゅう',
      kanji: '宇宙',
      romaji: 'uchū',
      meaning: { en: 'space, universe', vi: 'vũ trụ' },
      ruby: [
        { base: '宇', reading: 'う' },
        { base: '宙', reading: 'ちゅう' }
      ]
    },
    {
      kana: 'きょく',
      kanji: '曲',
      romaji: 'kyoku',
      meaning: { en: 'piece of music, song', vi: 'ca khúc, bản nhạc' },
      ruby: [{ base: '曲', reading: 'きょく' }]
    },
    {
      kana: 'まいしゅう',
      kanji: '毎週',
      romaji: 'maishū',
      meaning: { en: 'every week', vi: 'hàng tuần' },
      ruby: [
        { base: '毎', reading: 'まい' },
        { base: '週', reading: 'しゅう' }
      ]
    },
    {
      kana: 'まいつき',
      kanji: '毎月',
      romaji: 'maitsuki',
      meaning: { en: 'every month', vi: 'hàng tháng' },
      ruby: [
        { base: '毎', reading: 'まい' },
        { base: '月', reading: 'つき' }
      ]
    },
    {
      kana: 'まいとし',
      kanji: '毎年',
      romaji: 'maitoshi',
      meaning: { en: 'every year', vi: 'hàng năm' },
      ruby: [
        { base: '毎', reading: 'まい' },
        { base: '年', reading: 'とし' }
      ]
    },
    {
      kana: 'このごろ',
      romaji: 'kono goro',
      meaning: { en: 'these days', vi: 'dạo này' }
    },
    {
      kana: 'やっと',
      romaji: 'yatto',
      meaning: { en: 'finally, at last', vi: 'cuối cùng thì cũng' }
    },
    {
      kana: 'かなり',
      romaji: 'kanari',
      meaning: { en: 'fairly, quite', vi: 'khá' }
    },
    {
      kana: 'かならず',
      kanji: '必ず',
      romaji: 'kanarazu',
      meaning: { en: 'without fail, certainly', vi: 'nhất định' },
      ruby: [{ base: '必', reading: 'かなら' }]
    },
    {
      kana: 'ぜったいに',
      kanji: '絶対に',
      romaji: 'zettai ni',
      meaning: { en: 'absolutely, definitely', vi: 'tuyệt đối' },
      ruby: [
        { base: '絶', reading: 'ぜっ' },
        { base: '対', reading: 'たい' }
      ]
    },
    {
      kana: 'じょうずに',
      kanji: '上手に',
      romaji: 'jōzu ni',
      meaning: { en: 'skillfully, well', vi: 'giỏi, khéo' },
      ruby: [
        { base: '上', reading: 'じょう' },
        { base: '手', reading: 'ず' }
      ]
    },
    {
      kana: 'できるだけ',
      romaji: 'dekiru dake',
      meaning: { en: 'as much as possible', vi: 'trong khả năng có thể' }
    },
    {
      kana: 'ほとんど',
      romaji: 'hotondo',
      meaning: {
        en: 'most, almost (affirmative); hardly any (negative)',
        vi: 'hầu hết, phần lớn (khẳng định); gần như hoàn toàn (phủ định)'
      }
    },
    {
      kana: 'おきゃくさま',
      kanji: 'お客様',
      romaji: 'o-kyaku-sama',
      meaning: { en: 'guest, customer (honorific)', vi: 'quý khách' },
      ruby: [
        { base: '客', reading: 'きゃく' },
        { base: '様', reading: 'さま' }
      ]
    },
    {
      kana: 'とくべつ',
      kanji: '特別',
      romaji: 'tokubetsu',
      meaning: { en: 'special (na-adj)', vi: 'đặc biệt (tính từ な)' },
      ruby: [
        { base: '特', reading: 'とく' },
        { base: '別', reading: 'べつ' }
      ]
    },
    {
      kana: 'すいえい',
      kanji: '水泳',
      romaji: 'suiei',
      meaning: { en: 'swimming', vi: 'bơi' },
      ruby: [
        { base: '水', reading: 'すい' },
        { base: '泳', reading: 'えい' }
      ]
    },
    {
      kana: 'ちがいます',
      kanji: '違います',
      romaji: 'chigaimasu',
      meaning: { en: 'to differ, to be different', vi: 'khác nhau' },
      ruby: [{ base: '違', reading: 'ちが' }]
    },
    {
      kana: 'チャレンジします',
      romaji: 'charenji shimasu',
      meaning: { en: 'to challenge oneself, to try', vi: 'thử sức, thử làm' }
    },
    {
      kana: 'きもち',
      kanji: '気持ち',
      romaji: 'kimochi',
      meaning: { en: 'feeling, mood', vi: 'tâm thế, cảm giác' },
      ruby: [
        { base: '気', reading: 'き' },
        { base: '持', reading: 'も' }
      ]
    },
    {
      kana: 'のりもの',
      kanji: '乗り物',
      romaji: 'norimono',
      meaning: { en: 'vehicle, means of transport', vi: 'phương tiện đi lại' },
      ruby: [
        { base: '乗', reading: 'の' },
        { base: '物', reading: 'もの' }
      ]
    },
    {
      kana: 'とおく',
      kanji: '遠く',
      romaji: 'tōku',
      meaning: { en: 'far away, distant place', vi: 'nơi xa' },
      ruby: [{ base: '遠', reading: 'とお' }]
    },
    {
      kana: 'めずらしい',
      kanji: '珍しい',
      romaji: 'mezurashii',
      meaning: { en: 'rare, unusual', vi: 'hiếm' },
      ruby: [{ base: '珍', reading: 'めずら' }]
    },
    {
      kana: 'きしゃ',
      kanji: '汽車',
      romaji: 'kisha',
      meaning: { en: 'steam train', vi: 'tàu lửa chạy bằng hơi nước' },
      ruby: [
        { base: '汽', reading: 'き' },
        { base: '車', reading: 'しゃ' }
      ]
    },
    {
      kana: 'きせん',
      kanji: '汽船',
      romaji: 'kisen',
      meaning: { en: 'steamship', vi: 'tàu thủy chạy bằng hơi nước' },
      ruby: [
        { base: '汽', reading: 'き' },
        { base: '船', reading: 'せん' }
      ]
    },
    {
      kana: 'おおぜい',
      kanji: '大勢',
      romaji: 'ōzei',
      meaning: { en: 'many (people)', vi: 'nhiều (người)' },
      ruby: [
        { base: '大', reading: 'おお' },
        { base: '勢', reading: 'ぜい' }
      ]
    },
    {
      kana: 'はこびます',
      kanji: '運びます',
      romaji: 'hakobimasu',
      meaning: { en: 'to carry, to transport', vi: 'vận chuyển' },
      ruby: [{ base: '運', reading: 'はこ' }]
    },
    {
      kana: 'りようします',
      kanji: '利用します',
      romaji: 'riyō shimasu',
      meaning: { en: 'to use, to utilize', vi: 'sử dụng' },
      ruby: [{ base: '利', reading: 'り' }]
    },
    {
      kana: 'じゆうに',
      kanji: '自由に',
      romaji: 'jiyū ni',
      meaning: { en: 'freely', vi: 'thoải mái, tự do' },
      ruby: [
        { base: '自', reading: 'じ' },
        { base: '由', reading: 'ゆう' }
      ]
    }
  ],
  phrases: [
    {
      kana: 'お客様、今日は 特別な ことを していらっしゃいますか。',
      kanji: 'お客様、今日は 特別な ことを していらっしゃいますか。',
      romaji: 'O-kyaku-sama, kyō wa tokubetsu na koto o shite irasshaimasu ka.',
      meaning: {
        en: 'Guest, are you doing something special today?',
        vi: 'Quý khách hôm nay có làm điều gì đặc biệt không?'
      },
      ruby: [
        { base: '客', reading: 'きゃく' },
        { base: '様', reading: 'さま' },
        { base: '今', reading: 'きょう' },
        { base: '日', reading: 'ひ' },
        { base: '特', reading: 'とく' },
        { base: '別', reading: 'べつ' }
      ]
    },
    {
      kana: '毎日 運動 する ように しています。',
      kanji: '毎日 運動 する ように しています。',
      romaji: 'Mainichi undō suru yō ni shite imasu.',
      meaning: {
        en: 'I make an effort to exercise every day.',
        vi: 'Tôi cố gắng vận động mỗi ngày.'
      },
      ruby: [
        { base: '毎', reading: 'まい' },
        { base: '日', reading: 'にち' },
        { base: '運', reading: 'うん' },
        { base: '動', reading: 'どう' }
      ]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson36-radio',
      title: { en: 'Exercise at eighty', vi: 'Vận động lúc 80 tuổi' },
      speakers: [
        { id: 'host', name: '司会者' },
        { id: 'yone', name: '小川米' }
      ],
      lines: [
        {
          speakerId: 'host',
          jp: '今日の お客様は 小川米 さん、80歳 です。',
          romaji: 'Kyō no o-kyaku-sama wa Ogawa Yone-san, hachijū-sai desu.',
          meaning: {
            en: "Today's guest is Ms. Ogawa Yone, 80 years old.",
            vi: 'Khách mời hôm nay là bà Ogawa Yone, 80 tuổi.'
          },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '日', reading: 'にち' },
            { base: '客', reading: 'きゃく' },
            { base: '様', reading: 'さま' },
            { base: '小', reading: 'お' },
            { base: '川', reading: 'がわ' },
            { base: '米', reading: 'よね' },
            { base: '歳', reading: 'さい' }
          ]
        },
        {
          speakerId: 'yone',
          jp: 'こんにちは。',
          romaji: 'Konnichiwa.',
          meaning: { en: 'Hello.', vi: 'Xin chào quý vị.' }
        },
        {
          speakerId: 'host',
          jp: '毎日 何か 特別な ことを されていますか。',
          romaji: 'Mainichi nanika tokubetsu na koto o sarete imasu ka.',
          meaning: {
            en: 'Do you do anything special every day?',
            vi: 'Ba có làm điều gì đặc biệt mỗi ngày không?'
          },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '何', reading: 'なに' },
            { base: '特', reading: 'とく' },
            { base: '別', reading: 'べつ' }
          ]
        },
        {
          speakerId: 'yone',
          jp: '毎日 運動 する ように しています。水泳や 剣道など です。',
          romaji: 'Mainichi undō suru yō ni shite imasu. Suiei ya kendō nado desu.',
          meaning: {
            en: 'I make an effort to exercise every day - swimming, kendo, and so on.',
            vi: 'Tôi cố gắng vận động mỗi ngày. Bơi, kiếm đạo, v.v.'
          },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '運', reading: 'うん' },
            { base: '動', reading: 'どう' },
            { base: '水', reading: 'すい' },
            { base: '泳', reading: 'およ' },
            { base: '剣', reading: 'けん' },
            { base: '道', reading: 'どう' }
          ]
        },
        {
          speakerId: 'host',
          jp: '最近 500メートル 泳げる ように なりました。',
          romaji: 'Saikin go-hyaku mētoru oyogeru yō ni narimashita.',
          meaning: {
            en: 'Recently you have become able to swim 500 meters.',
            vi: 'Gần đây bà đã có thể bơi xa được 500 mét.'
          },
          ruby: [
            { base: '最', reading: 'さい' },
            { base: '近', reading: 'きん' },
            { base: '泳', reading: 'およ' }
          ]
        },
        {
          speakerId: 'yone',
          jp: 'はい。何でも 食べます。特に 魚が 好きです。',
          romaji: 'Hai. Nan demo tabemasu. Tokuni sakana ga suki desu.',
          meaning: {
            en: 'Yes. I eat everything, especially fish.',
            vi: 'Vâng. Tôi ăn mọi thứ, đặc biệt thích cá.'
          },
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '食', reading: 'た' },
            { base: '特', reading: 'とく' },
            { base: '魚', reading: 'さかな' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          speakerId: 'host',
          jp: '本当に すごい ですね。来年 フランスへ 行く んですか。',
          romaji: 'Hontō ni sugoi desu ne. Rainen Furansu e iku n desu ka.',
          meaning: {
            en: 'That is truly amazing. Are you going to France next year?',
            vi: 'Thật đáng khâm phục. Sang năm bà định đi Pháp à?'
          },
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '当', reading: 'とう' },
            { base: '来', reading: 'らい' },
            { base: '年', reading: 'ねん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'yone',
          jp: 'はい。フランス語が 話せる ように 勉強 しています。「チャレンジ する 気持ち」が 大切 です。',
          romaji:
            'Hai. Furansugo ga hanaseru yō ni benkyō shite imasu. 「Charenji suru kimochi」 ga taisetsu desu.',
          meaning: {
            en: 'Yes. I am studying so I can speak French. A spirit of challenge is important.',
            vi: 'Vâng. Tôi đang học để nói được tiếng Pháp. Tinh thần "cái gì cũng thử làm" rất quan trọng.'
          },
          ruby: [
            { base: '語', reading: 'ご' },
            { base: '話', reading: 'はな' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' },
            { base: '気', reading: 'き' },
            { base: '持', reading: 'も' },
            { base: '大', reading: 'おお' },
            { base: '切', reading: 'せつ' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-dict ように',
      highlights: ['ように'],
      title: {
        en: 'Purpose with ように (V-dictionary)',
        vi: 'Mục đích với ように (V-nguyên dạng)'
      },
      explanation: {
        en: 'V-dictionary + ように shows purpose or goal: 毎日 練習して 泳げる ように しています. Use dictionary form (or ない) before ように; potential and intransitive verbs fit naturally.',
        vi: 'V-nguyên dạng + ように chỉ mục đích: 毎日 練習して 泳げる ように しています. Dùng nguyên dạng (hoặc ない) trước ように; động từ khả năng và tự động rất phù hợp.'
      },
      explanationRuby: [
        { base: '毎', reading: 'まい' },
        { base: '日', reading: 'にち' },
        { base: '練', reading: 'れん' },
        { base: '習', reading: 'しゅう' },
        { base: '泳', reading: 'およ' },
        { base: '毎', reading: 'まい' },
        { base: '日', reading: 'にち' },
        { base: '練', reading: 'れん' },
        { base: '習', reading: 'しゅう' },
        { base: '泳', reading: 'およ' }
      ],
      examples: [
        {
          jp: '毎日 練習して 泳げる ように しています。',
          romaji: 'Mainichi renshū shite oyogeru yō ni shite imasu.',
          meaning: {
            en: 'I practice every day so I can swim well.',
            vi: 'Hàng ngày tôi luyện tập để có thể bơi được.'
          },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '練', reading: 'れん' },
            { base: '習', reading: 'しゅう' },
            { base: '泳', reading: 'およ' }
          ]
        },
        {
          jp: '忘れない ように メモ します。',
          romaji: 'Wasurenai yō ni memo shimasu.',
          meaning: { en: 'I take notes so I will not forget.', vi: 'Tôi ghi chú để không quên.' },
          ruby: [{ base: '忘', reading: 'わす' }]
        }
      ]
    },
    {
      pattern: 'V-dict / ない ようになりました',
      highlights: ['ように', 'なり', 'ました'],
      title: {
        en: 'Change of ability or habit (ようになりました)',
        vi: 'Thay đổi khả năng/thói quen (ようになりました)'
      },
      explanation: {
        en: 'ようになりました marks a change into a new state: やっと 自転車に 乗れる ようになりました. With ない it means something you could not do before is now possible, or a new habit started.',
        vi: 'ようになりました đánh dấu chuyển sang trạng thái mới: やっと 自転車に 乗れる ようになりました. Với ない: từ không làm được sang làm được, hoặc có thói quen mới.'
      },
      explanationRuby: [
        { base: '自', reading: 'じ' },
        { base: '転', reading: 'てん' },
        { base: '車', reading: 'しゃ' },
        { base: '乗', reading: 'の' },
        { base: '自', reading: 'じ' },
        { base: '転', reading: 'てん' },
        { base: '車', reading: 'しゃ' },
        { base: '乗', reading: 'の' }
      ],
      examples: [
        {
          jp: 'やっと 自転車に 乗れる ようになりました。',
          romaji: 'Yatto jitensha ni noreru yō ni narimashita.',
          meaning: {
            en: 'I have finally become able to ride a bicycle.',
            vi: 'Cuối cùng tôi cũng đi được xe đạp.'
          },
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '転', reading: 'てん' },
            { base: '車', reading: 'しゃ' },
            { base: '乗', reading: 'の' }
          ]
        },
        {
          jp: 'ショパンの 曲が 弾ける ようになりましたか。',
          romaji: 'Sho pan no kyoku ga hikeru yō ni narimashita ka.',
          meaning: {
            en: 'Have you become able to play Chopin pieces?',
            vi: 'Anh/chị đã đánh được bản nhạc của Chopin chưa?'
          },
          ruby: [
            { base: '曲', reading: 'きょく' },
            { base: '弾', reading: 'ひ' }
          ]
        },
        {
          jp: '……いいえ、まだ 弾けません。',
          romaji: '……Iie, mada hikemasen.',
          meaning: {
            en: '...No, I still cannot play them.',
            vi: '...Chưa, tôi vẫn chưa đánh được.'
          },
          ruby: [{ base: '弾', reading: 'ひ' }]
        }
      ]
    },
    {
      pattern: 'V-dict / ない ように (request)',
      highlights: ['ように'],
      title: { en: 'Gentle request with ように', vi: 'Nhờ nhẹ nhàng với ように' },
      explanation: {
        en: 'ように asks someone to try to do (or not do) something - softer than てください for commands: 野菜を たくさん 食べる ように してください. Do not use for immediate on-the-spot requests like passing salt.',
        vi: 'ように nhờ cố gắng làm (hoặc không làm) - nhẹ hơn てください: 野菜を たくさん 食べる ように してください. Không dùng khi nhờ ngay tại chỗ như lấy muối.'
      },
      explanationRuby: [
        { base: '野', reading: 'や' },
        { base: '菜', reading: 'さい' },
        { base: '食', reading: 'しょく' },
        { base: '野', reading: 'や' },
        { base: '菜', reading: 'さい' },
        { base: '食', reading: 'しょく' }
      ],
      examples: [
        {
          jp: '遅刻 しない ように してください。',
          romaji: 'Chikoku shinai yō ni shite kudasai.',
          meaning: { en: 'Please try not to be late.', vi: 'Xin đừng đến muộn.' },
          ruby: [
            { base: '遅', reading: 'ち' },
            { base: '刻', reading: 'こく' }
          ]
        },
        {
          jp: 'もっと 野菜を 食べる ように してください。',
          romaji: 'Motto yasai o taberu yō ni shite kudasai.',
          meaning: {
            en: 'Please try to eat more vegetables.',
            vi: 'Anh/chị cố gắng ăn nhiều rau hơn.'
          },
          ruby: [
            { base: '野', reading: 'や' },
            { base: '菜', reading: 'さい' },
            { base: '食', reading: 'しょく' }
          ]
        }
      ]
    },
    {
      pattern: 'na-adj から',
      highlights: ['から'],
      title: { en: 'Reason with na-adj から', vi: 'Lý do với tính từ な から' },
      explanation: {
        en: 'For na-adjectives, な comes before から when giving a reason: 体に いい から、毎日 運動 しています. Compare i-adj から (drop い): おいしい から.',
        vi: 'Với tính từ な, thêm な trước から khi nêu lý do: 体に いい から、毎日 運動 しています. Tính từ い bỏ い: おいしい から.'
      },
      explanationRuby: [
        { base: '体', reading: 'から' },
        { base: '毎', reading: 'まい' },
        { base: '日', reading: 'にち' },
        { base: '運', reading: 'うん' },
        { base: '動', reading: 'どう' },
        { base: '体', reading: 'から' },
        { base: '毎', reading: 'まい' },
        { base: '日', reading: 'にち' },
        { base: '運', reading: 'うん' },
        { base: '動', reading: 'どう' }
      ],
      examples: [
        {
          jp: '体に よくない から、甘い ものを 食べない ように しています。',
          romaji: 'Karada ni yokunai kara, amai mono o tabenai yō ni shite imasu.',
          meaning: {
            en: 'Because it is bad for my health, I try not to eat sweet things.',
            vi: 'Vì có hại cho sức khỏe nên tôi cố không ăn đồ ngọt.'
          },
          ruby: [
            { base: '体', reading: 'から' },
            { base: '甘', reading: 'あま' },
            { base: '食', reading: 'しょく' }
          ]
        },
        {
          jp: '早く お茶が 点てられる ように 練習 したい です。',
          romaji: 'Hayaku o-cha ga taterareru yō ni renshū shitai desu.',
          meaning: {
            en: 'I want to practice so I can make tea quickly.',
            vi: 'Tôi muốn mình sớm rót trà giỏi hơn.'
          },
          ruby: [
            { base: '早', reading: 'はや' },
            { base: '茶', reading: 'ちゃ' },
            { base: '点', reading: 'た' },
            { base: '練', reading: 'れん' },
            { base: '習', reading: 'しゅう' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson36-transport',
      title: { en: 'How people traveled long ago', vi: 'Ngày xưa người ta đi lại thế nào' },
      lines: [
        {
          jp: '昔は 汽車や 汽船が 大勢の 人を 運びました。',
          romaji: 'Mukashi wa kisha ya kisen ga ōzei no hito o hakobimashita.',
          meaning: {
            en: 'Long ago, steam trains and ships carried many people.',
            vi: 'Ngày xưa tàu hỏa và tàu thủy vận chuyển rất đông người.'
          },
          ruby: [
            { base: '昔', reading: 'むかし' },
            { base: '汽', reading: 'き' },
            { base: '車', reading: 'しゃ' },
            { base: '汽', reading: 'き' },
            { base: '船', reading: 'せん' },
            { base: '大', reading: 'おお' },
            { base: '勢', reading: 'ぜい' },
            { base: '人', reading: 'ひと' },
            { base: '運', reading: 'うん' }
          ]
        },
        {
          jp: '今は 新しい 乗り物を 自由に 利用 できます。',
          romaji: 'Ima wa atarashii norimono o jiyū ni riyō dekimasu.',
          meaning: {
            en: 'Now we can use new vehicles freely.',
            vi: 'Bây giờ có thể sử dụng phương tiện mới một cách thoải mái.'
          },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '新', reading: 'あたら' },
            { base: '乗', reading: 'の' },
            { base: '物', reading: 'もの' },
            { base: '自', reading: 'じ' },
            { base: '由', reading: 'ゆう' },
            { base: '利', reading: 'り' },
            { base: '用', reading: 'よう' }
          ]
        },
        {
          jp: '遠くへ 行きたい 人は できるだけ 早く 出発 する ように しています。',
          romaji: 'Tōku e ikitai hito wa dekiru dake hayaku shuppatsu suru yō ni shite imasu.',
          meaning: {
            en: 'People who want to go far try to leave as early as they can.',
            vi: 'Người muốn đi xa cố gắng xuất phát sớm nhất có thể.'
          },
          ruby: [
            { base: '遠', reading: 'とお' },
            { base: '行', reading: 'い' },
            { base: '人', reading: 'ひと' },
            { base: '早', reading: 'はや' },
            { base: '出', reading: 'しゅっ' },
            { base: '発', reading: 'ぱつ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What carried many people long ago?',
            vi: 'Ngày xưa phương tiện nào chở nhiều người?'
          },
          choices: [
            { id: 'a', label: { en: 'Steam trains and ships', vi: 'Tàu hỏa và tàu thủy' } },
            { id: 'b', label: { en: 'Overnight buses only', vi: 'Chỉ xe buýt đêm' } },
            { id: 'c', label: { en: 'Rice cookers', vi: 'Nồi cơm điện' } },
            { id: 'd', label: { en: 'Ski resorts', vi: 'Khu trượt tuyết' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What do people who want to go far try to do?',
            vi: 'Người muốn đi xa cố gắng làm gì?'
          },
          choices: [
            {
              id: 'a',
              label: { en: 'Leave as early as possible', vi: 'Xuất phát sớm nhất có thể' }
            },
            { id: 'b', label: { en: 'Save money every week', vi: 'Tiết kiệm tiền mỗi tuần' } },
            { id: 'c', label: { en: 'Eat rotten food', vi: 'Ăn thức ăn hỏng' } },
            { id: 'd', label: { en: 'Study French', vi: 'Học tiếng Pháp' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Healthy habits', vi: 'Sinh hoạt lành mạnh' },
      introTerm: {
        jp: '健康',
        ruby: [
          { base: '健', reading: 'けん' },
          { base: '康', reading: 'こう' }
        ]
      },
      layout: 'stacked',
      rows: [
        {
          jp: '生活 リズム',
          ruby: [
            { base: '生', reading: 'せい' },
            { base: '活', reading: 'かつ' }
          ],
          meaning: { en: 'Regular daily rhythm', vi: 'Sinh hoạt đúng giờ giấc' }
        },
        {
          jp: '早寝 早起',
          ruby: [
            { base: '早', reading: 'はや' },
            { base: '寝', reading: 'ね' },
            { base: '早', reading: 'はや' },
            { base: '起', reading: 'お' }
          ],
          meaning: { en: 'Early to bed, early to rise', vi: 'Ngủ sớm, dậy sớm' }
        },
        {
          jp: '運動・スポーツ',
          ruby: [
            { base: '運', reading: 'うん' },
            { base: '動', reading: 'どう' }
          ],
          meaning: { en: 'Exercise and sports', vi: 'Vận động / chơi thể thao' }
        },
        {
          jp: 'よく 歩く',
          ruby: [{ base: '歩', reading: 'ある' }],
          meaning: { en: 'Walk a lot', vi: 'Đi bộ nhiều' }
        },
        {
          jp: 'バランスの いい 食事',
          ruby: [
            { base: '食', reading: 'しょく' },
            { base: '事', reading: 'じ' }
          ],
          meaning: { en: 'Balanced meals', vi: 'Ăn đảm bảo cân bằng dinh dưỡng' }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Proper nouns', vi: 'Tên riêng' },
      includeInQuiz: false,
      items: [
        {
          kana: 'ショパン',
          romaji: 'Sho pan',
          meaning: {
            en: 'Chopin (Polish composer, 1810-1849)',
            vi: 'Chopin, nhà soạn nhạc người Ba Lan (1810-1849)'
          }
        }
      ]
    }
  ]
};
