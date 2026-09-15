import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 38 (の nominalization, 知っていますか, 時, ～のに). */
export const n4Lesson38: Lesson = {
  id: 'lesson-38',
  number: 38,
  title: {
    en: 'Nominalizing with の',
    vi: 'Danh từ hóa với の'
  },
  focus: {
    en: 'Turn actions into topics with の, ask whether someone knows with 知っていますか, state when with 時, and express contrast with ～のに.',
    vi: 'Biến hành động thành chủ đề với の, hỏi biết hay không với 知っていますか, nói thời điểm với 時, và đối lập với ～のに.'
  },
  vocab: [
    {
      kana: 'さんかします',
      kanji: '参加します',
      romaji: 'sanka shimasu',
      meaning: { en: 'to participate [旅行に～: in a trip]', vi: 'tham gia [~ đi du lịch]' },
      ruby: [
        { base: '参', reading: 'さん' },
        { base: '加', reading: 'か' }
      ]
    },
    {
      kana: 'そだてます',
      kanji: '育てます',
      romaji: 'sodatemasu',
      meaning: { en: 'to raise, to bring up', vi: 'chăm sóc, nuôi dưỡng' },
      ruby: [{ base: '育', reading: 'そだ' }]
    },
    {
      kana: 'はこびます',
      kanji: '運びます',
      romaji: 'hakobimasu',
      meaning: { en: 'to carry, to transport', vi: 'vận chuyển' },
      ruby: [{ base: '運', reading: 'はこ' }]
    },
    {
      kana: 'にゅういんします',
      kanji: '入院します',
      romaji: 'nyūin shimasu',
      meaning: { en: 'to be hospitalized', vi: 'nhập viện' },
      ruby: [
        { base: '入', reading: 'にゅう' },
        { base: '院', reading: 'いん' }
      ]
    },
    {
      kana: 'たいいんします',
      kanji: '退院します',
      romaji: 'taiin shimasu',
      meaning: { en: 'to leave the hospital', vi: 'ra viện' },
      ruby: [
        { base: '退', reading: 'たい' },
        { base: '院', reading: 'いん' }
      ]
    },
    {
      kana: 'いれます',
      kanji: '入れます',
      romaji: 'iremasu',
      meaning: { en: 'to turn on [電源を～: power]', vi: 'bật [điện nguồn]' },
      ruby: [{ base: '入', reading: 'い' }]
    },
    {
      kana: 'きります',
      kanji: '切ります',
      romaji: 'kirimasu',
      meaning: { en: 'to turn off [電源を～: power]', vi: 'tắt [điện nguồn]' },
      ruby: [{ base: '切', reading: 'き' }]
    },
    {
      kana: 'かけます',
      kanji: '掛けます',
      romaji: 'kakemasu',
      meaning: { en: 'to lock [かぎを～: a key]', vi: 'khóa [ổ khóa]' },
      ruby: [{ base: '掛', reading: 'か' }]
    },
    {
      kana: 'つきます',
      romaji: 'tsukimasu',
      meaning: { en: 'to lie [うそを～: a lie]', vi: 'nói dối' }
    },
    {
      kana: 'きもちがいい',
      kanji: '気持ちがいい',
      romaji: 'kimochi ga ii',
      meaning: { en: 'to feel good, pleasant', vi: 'tâm trạng sảng khoái, tốt' },
      ruby: [
        { base: '気', reading: 'き' },
        { base: '持', reading: 'も' }
      ]
    },
    {
      kana: 'きもちがわるい',
      kanji: '気持ちが悪い',
      romaji: 'kimochi ga warui',
      meaning: { en: 'to feel bad, unpleasant', vi: 'tâm trạng không tốt' },
      ruby: [
        { base: '気', reading: 'き' },
        { base: '持', reading: 'も' },
        { base: '悪', reading: 'わる' }
      ]
    },
    {
      kana: 'おおきな',
      kanji: '大きな',
      romaji: 'ōkina',
      meaning: { en: 'big, large (attributive)', vi: '~ lớn, ~ to' },
      ruby: [{ base: '大', reading: 'おお' }]
    },
    {
      kana: 'ちいさな',
      kanji: '小さな',
      romaji: 'chiisana',
      meaning: { en: 'small, little (attributive)', vi: '~ bé, ~ nhỏ' },
      ruby: [{ base: '小', reading: 'ちい' }]
    },
    {
      kana: 'あかちゃん',
      kanji: '赤ちゃん',
      romaji: 'akachan',
      meaning: { en: 'baby', vi: 'em bé' },
      ruby: [{ base: '赤', reading: 'あか' }]
    },
    {
      kana: 'しょうがっこう',
      kanji: '小学校',
      romaji: 'shōgakkō',
      meaning: { en: 'elementary school', vi: 'trường tiểu học' },
      ruby: [
        { base: '小', reading: 'しょう' },
        { base: '学', reading: 'がっ' },
        { base: '校', reading: 'こう' }
      ]
    },
    {
      kana: 'ちゅうがっこう',
      kanji: '中学校',
      romaji: 'chūgakkō',
      meaning: { en: 'junior high school', vi: 'trường trung học cơ sở' },
      ruby: [
        { base: '中', reading: 'ちゅう' },
        { base: '学', reading: 'がっ' },
        { base: '校', reading: 'こう' }
      ]
    },
    {
      kana: 'えきまえ',
      kanji: '駅前',
      romaji: 'ekimae',
      meaning: { en: 'in front of the station', vi: 'trước ga' },
      ruby: [
        { base: '駅', reading: 'えき' },
        { base: '前', reading: 'まえ' }
      ]
    },
    {
      kana: 'かいがん',
      kanji: '海岸',
      romaji: 'kaigan',
      meaning: { en: 'coast, seashore', vi: 'bờ biển' },
      ruby: [
        { base: '海', reading: 'かい' },
        { base: '岸', reading: 'がん' }
      ]
    },
    {
      kana: 'こうじょう',
      kanji: '工場',
      romaji: 'kōjō',
      meaning: { en: 'factory', vi: 'nhà máy' },
      ruby: [
        { base: '工', reading: 'こう' },
        { base: '場', reading: 'じょう' }
      ]
    },
    {
      kana: 'むら',
      kanji: '村',
      romaji: 'mura',
      meaning: { en: 'village', vi: 'làng' },
      ruby: [{ base: '村', reading: 'むら' }]
    },
    {
      kana: 'かな',
      romaji: 'kana',
      meaning: { en: 'kana script', vi: 'chữ kana' }
    },
    {
      kana: 'ゆびわ',
      kanji: '指輪',
      romaji: 'yubiwa',
      meaning: { en: 'ring (jewelry)', vi: 'nhẫn' },
      ruby: [
        { base: '指', reading: 'ゆび' },
        { base: '輪', reading: 'わ' }
      ]
    },
    {
      kana: 'でんげん',
      kanji: '電源',
      romaji: 'dengen',
      meaning: { en: 'power source, power switch', vi: 'điện nguồn' },
      ruby: [
        { base: '電', reading: 'でん' },
        { base: '源', reading: 'げん' }
      ]
    },
    {
      kana: 'しゅうかん',
      kanji: '習慣',
      romaji: 'shūkan',
      meaning: { en: 'habit, custom', vi: 'thói quen, tập quán' },
      ruby: [
        { base: '習', reading: 'しゅう' },
        { base: '慣', reading: 'かん' }
      ]
    },
    {
      kana: 'けんこう',
      kanji: '健康',
      romaji: 'kenkō',
      meaning: { en: 'health', vi: 'sức khỏe' },
      ruby: [
        { base: '健', reading: 'けん' },
        { base: '康', reading: 'こう' }
      ]
    },
    {
      kana: '～せい',
      kanji: '～製',
      romaji: '~sei',
      meaning: { en: 'made in ~', vi: 'hàng ~' },
      ruby: [{ base: '製', reading: 'せい' }]
    },
    {
      kana: 'おととし',
      romaji: 'ototoshi',
      meaning: { en: 'the year before last', vi: 'năm kia' }
    },
    {
      kana: 'いけない',
      romaji: 'ikenai',
      meaning: {
        en: 'Oh no (when making a mistake)',
        vi: '[A,] không được rồi (khi làm nhầm)'
      }
    },
    {
      kana: 'おさきに',
      kanji: 'お先に',
      romaji: 'osaki ni',
      meaning: { en: 'before you (I am leaving first)', vi: 'Tôi (xin phép) về trước' },
      ruby: [{ base: '先', reading: 'さき' }]
    },
    {
      kana: 'かいらん',
      kanji: '回覧',
      romaji: 'kairan',
      meaning: { en: 'office circular, notice sheet', vi: 'tài liệu thông báo' },
      ruby: [
        { base: '回', reading: 'かい' },
        { base: '覧', reading: 'らん' }
      ]
    },
    {
      kana: 'けんきゅうしつ',
      kanji: '研究室',
      romaji: 'kenkyūshitsu',
      meaning: { en: "research office, professor's office", vi: 'phòng nghiên cứu' },
      ruby: [
        { base: '研', reading: 'けん' },
        { base: '究', reading: 'きゅう' },
        { base: '室', reading: 'しつ' }
      ]
    },
    {
      kana: 'きちんと',
      romaji: 'kichinto',
      meaning: { en: 'neatly, properly', vi: 'ngay ngắn' }
    },
    {
      kana: 'せいりします',
      kanji: '整理します',
      romaji: 'seiri shimasu',
      meaning: { en: 'to organize, to tidy up', vi: 'sắp xếp' },
      ruby: [{ base: '整', reading: 'せい' }]
    },
    {
      kana: 'ほうほう',
      kanji: '方法',
      romaji: 'hōhō',
      meaning: { en: 'method, way', vi: 'phương pháp' },
      ruby: [
        { base: '方', reading: 'ほう' },
        { base: '法', reading: 'ほう' }
      ]
    },
    {
      kana: '～という',
      romaji: '~to iu',
      meaning: { en: 'called ~, named ~', vi: 'có tên gọi là ~' }
    },
    {
      kana: 'はんこ',
      kanji: '判子',
      romaji: 'hanko',
      meaning: { en: 'personal seal, stamp', vi: 'con dấu' },
      ruby: [{ base: '判', reading: 'はん' }]
    },
    {
      kana: 'おします',
      kanji: '押します',
      romaji: 'oshimasu',
      meaning: { en: 'to press, to stamp [判子を～]', vi: 'đóng [dấu]' },
      ruby: [{ base: '押', reading: 'お' }]
    },
    {
      kana: 'ふたご',
      kanji: '双子',
      romaji: 'futago',
      meaning: { en: 'twins', vi: 'sinh đôi' },
      ruby: [{ base: '双', reading: 'ふた' }]
    },
    {
      kana: 'しまい',
      kanji: '姉妹',
      romaji: 'shimai',
      meaning: { en: 'sisters', vi: 'chị em' },
      ruby: [{ base: '姉', reading: 'しま' }]
    },
    {
      kana: 'にています',
      kanji: '似ています',
      romaji: 'nite imasu',
      meaning: { en: 'to resemble, to look like', vi: 'giống' },
      ruby: [{ base: '似', reading: 'に' }]
    },
    {
      kana: 'せいかく',
      kanji: '性格',
      romaji: 'seikaku',
      meaning: { en: 'personality, character', vi: 'tính cách' },
      ruby: [
        { base: '性', reading: 'せい' },
        { base: '格', reading: 'かく' }
      ]
    },
    {
      kana: 'おとなしい',
      romaji: 'otonashii',
      meaning: { en: 'quiet, gentle', vi: 'ngoan ngoãn' }
    },
    {
      kana: 'やさしい',
      kanji: '優しい',
      romaji: 'yasashii',
      meaning: { en: 'kind, gentle', vi: 'hiền lành' },
      ruby: [{ base: '優', reading: 'やさ' }]
    },
    {
      kana: 'じかんがたちます',
      kanji: '時間がたちます',
      romaji: 'jikan ga tachimasu',
      meaning: { en: 'time passes', vi: 'thời gian trôi' },
      ruby: [
        { base: '時', reading: 'じ' },
        { base: '間', reading: 'かん' },
        { base: '立', reading: 'た' }
      ]
    },
    {
      kana: 'きがつよい',
      kanji: '気が強い',
      romaji: 'ki ga tsuyoi',
      meaning: { en: 'strong-willed', vi: 'tính cách mạnh mẽ' },
      ruby: [
        { base: '気', reading: 'き' },
        { base: '強', reading: 'つよ' }
      ]
    },
    {
      kana: 'けんかします',
      romaji: 'kenka shimasu',
      meaning: { en: 'to quarrel', vi: 'cãi nhau' }
    },
    {
      kana: 'ふしぎ',
      kanji: '不思議',
      romaji: 'fushigi',
      meaning: { en: 'strange, mysterious (na-adj)', vi: 'kỳ lạ (tính từ な)' },
      ruby: [
        { base: '不', reading: 'ふ' },
        { base: '思', reading: 'し' },
        { base: '議', reading: 'ぎ' }
      ]
    },
    {
      kana: 'ねんれい',
      kanji: '年齢',
      romaji: 'nenrei',
      meaning: { en: 'age', vi: 'tuổi tác' },
      ruby: [
        { base: '年', reading: 'ねん' },
        { base: '齢', reading: 'れい' }
      ]
    },
    {
      kana: 'しかた',
      kanji: '仕方',
      romaji: 'shikata',
      meaning: { en: 'way of doing, method', vi: 'cách làm' },
      ruby: [
        { base: '仕', reading: 'し' },
        { base: '方', reading: 'かた' }
      ]
    }
  ],
  phrases: [
    {
      kana: '整理 する のが 好き なんです。',
      kanji: '整理 する のが 好き なんです。',
      romaji: 'Seiri suru no ga suki nan desu.',
      meaning: { en: 'I like tidying up.', vi: 'Tôi thích dọn dẹp.' },
      ruby: [
        { base: '整', reading: 'せい' },
        { base: '理', reading: 'り' },
        { base: '好', reading: 'す' }
      ]
    },
    {
      kana: 'お先に 失礼します。',
      kanji: 'お先に 失礼します。',
      romaji: 'Osaki ni shitsurei shimasu.',
      meaning: { en: 'Excuse me for leaving before you.', vi: 'Tôi xin phép về trước.' },
      ruby: [
        { base: '先', reading: 'さき' },
        { base: '失', reading: 'しつ' },
        { base: '礼', reading: 'れい' }
      ]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson38-watt',
      title: { en: 'A tidy professor', vi: 'Giáo sư gọn gàng' },
      speakers: [
        { id: 'staff', name: '大学職員' },
        { id: 'watt', name: 'ワット' }
      ],
      lines: [
        {
          speakerId: 'staff',
          jp: 'ワット先生、こちら 回覧 です。',
          romaji: 'Watto-sensei, kochira kairan desu.',
          meaning: {
            en: 'Professor Watt, here is the office circular.',
            vi: 'Thầy Watt, đây là tập thông báo.'
          },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '回', reading: 'かい' },
            { base: '覧', reading: 'らん' }
          ]
        },
        {
          speakerId: 'watt',
          jp: 'あ、どうも。判子を 押す のを 手伝って ください。',
          romaji: 'A, dōmo. Hanko o osu no o tetsudatte kudasai.',
          meaning: {
            en: 'Oh, thank you. Please help me stamp my seal.',
            vi: 'Ờ, cảm ơn chị. Chi giúp tôi đóng dấu nhé.'
          },
          ruby: [
            { base: '判', reading: 'はん' },
            { base: '子', reading: 'こ' },
            { base: '押', reading: 'お' },
            { base: '手', reading: 'て' },
            { base: '伝', reading: 'つだ' }
          ]
        },
        {
          speakerId: 'staff',
          jp: '研究室は いつも きれい ですね。整理 する のが お上手 ですね。',
          romaji: 'Kenkyūshitsu wa itsumo kirei desu ne. Seiri suru no ga o-jōzu desu ne.',
          meaning: {
            en: 'Your office is always neat. You are good at organizing.',
            vi: 'Phòng nghiên cứu lúc nào cũng ngăn nắp. Thầy khéo sắp xếp nhỉ.'
          },
          ruby: [
            { base: '研', reading: 'けん' },
            { base: '究', reading: 'きゅう' },
            { base: '室', reading: 'しつ' },
            { base: '整', reading: 'せい' },
            { base: '理', reading: 'り' },
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' }
          ]
        },
        {
          speakerId: 'watt',
          jp: '整理 する のが 好き なんです。本も きちんと 並べて います。',
          romaji: 'Seiri suru no ga suki nan desu. Hon mo kichinto narabete imasu.',
          meaning: {
            en: 'I like tidying up. I line up the books neatly too.',
            vi: 'Tôi thích dọn dẹp. Sách cũng được xếp ngay ngắn.'
          },
          ruby: [
            { base: '整', reading: 'せい' },
            { base: '理', reading: 'り' },
            { base: '好', reading: 'す' },
            { base: '本', reading: 'ほん' },
            { base: '並', reading: 'なら' }
          ]
        },
        {
          speakerId: 'staff',
          jp: '「上手な 整理の 方法」という 本を 書いた そう ですね。',
          romaji: '「Jōzu na seiri no hōhō」 to iu hon o kaita sō desu ne.',
          meaning: {
            en: 'I heard you wrote a book called "Skillful Organizing Methods."',
            vi: 'Nghe nói thầy đã viết cuốn "Phương pháp sắp xếp khéo léo".'
          },
          ruby: [
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' },
            { base: '整', reading: 'せい' },
            { base: '理', reading: 'り' },
            { base: '方', reading: 'ほう' },
            { base: '法', reading: 'ほう' },
            { base: '本', reading: 'ほん' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          speakerId: 'watt',
          jp: 'ええ。よかったら 一冊 差し上げますよ。',
          romaji: 'Ee. Yokokattara issatsu sashiagemasu yo.',
          meaning: {
            en: 'Yes. If you like, I will give you a copy.',
            vi: 'Vâng. Nếu chị thích tôi tặng chị một quyển nhé.'
          },
          ruby: [{ base: '冊', reading: 'さつ' }]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-plain の は / が ～',
      highlights: ['の'],
      title: { en: 'Nominalizing verbs with の', vi: 'Danh từ hóa động từ với の' },
      explanation: {
        en: 'Plain form + の turns an action into a noun phrase: 絵を 描く のは 楽しい. More specific than a bare verb as topic: 絵を 描くの vs 絵を 描く.',
        vi: 'Nguyên dạng + の biến hành động thành cụm danh từ: 絵を 描く のは 楽しい. Cụ thể hơn khi làm chủ đề so với chỉ dùng động từ.'
      },
      explanationRuby: [
        { base: '絵', reading: 'え' },
        { base: '描', reading: 'か' },
        { base: '楽', reading: 'たの' }
      ],
      examples: [
        {
          jp: '星を 見る のが 好き です。',
          romaji: 'Hoshi o miru no ga suki desu.',
          meaning: { en: 'I like looking at stars.', vi: 'Tôi thích ngắm sao.' },
          ruby: [
            { base: '星', reading: 'ほし' },
            { base: '見', reading: 'み' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          jp: '財布を 持つ のを 忘れました。',
          romaji: 'Saifu o motsu no o wasuremashita.',
          meaning: { en: 'I forgot to bring my wallet.', vi: 'Tôi quên mang ví.' },
          ruby: [
            { base: '財', reading: 'さい' },
            { base: '布', reading: 'ふ' },
            { base: '持', reading: 'も' },
            { base: '忘', reading: 'わす' }
          ]
        }
      ]
    },
    {
      pattern: 'V-plain の が 好き / 上手 / 下手',
      highlights: ['の', 'が'],
      title: { en: 'の with skill/like adjectives', vi: 'の với tính từ thích/giỏi/dở' },
      explanation: {
        en: 'Use の when the adjective describes an activity: 花を 育てる のが 上手, 歌を 歌う のが 下手. Adjectives include 好き, 嫌い, 上手, 下手, 得意, 苦手.',
        vi: 'Dùng の khi tính từ mô tả hoạt động: 花を 育てる のが 上手, 歌を 歌う のが 下手. Gồm 好き, 嫌い, 上手, 下手, 得意, 苦手.'
      },
      explanationRuby: [
        { base: '花', reading: 'はな' },
        { base: '育', reading: 'そだ' },
        { base: '上', reading: 'じょう' },
        { base: '手', reading: 'ず' },
        { base: '歌', reading: 'うた' },
        { base: '歌', reading: 'うた' },
        { base: '下', reading: 'へ' },
        { base: '手', reading: 'た' }
      ],
      examples: [
        {
          jp: '東京の 人は 歩く のが 速い です。',
          romaji: 'Tōkyō no hito wa aruku no ga hayai desu.',
          meaning: { en: 'People in Tokyo walk fast.', vi: 'Người Tokyo đi bộ nhanh.' },
          ruby: [
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '人', reading: 'ひと' },
            { base: '歩', reading: 'ある' },
            { base: '速', reading: 'はや' }
          ]
        },
        {
          jp: '私たちは 花を 育てる のが 得意 です。',
          romaji: 'Watashitachi wa hana o sodateru no ga tokui desu.',
          meaning: { en: 'We are good at growing flowers.', vi: 'Chúng tôi rất giỏi trồng hoa.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '花', reading: 'はな' },
            { base: '育', reading: 'そだ' },
            { base: '得', reading: 'とく' },
            { base: '意', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'V-plain の に なれます / 忘れます',
      highlights: ['の', 'に'],
      title: {
        en: 'Habit with の (なれます, 忘れます)',
        vi: 'Thói quen với の (なれます, 忘れます)'
      },
      explanation: {
        en: 'For habitual actions, の appears before なれます or 忘れました: 牛乳を 買う のに なりました, 車の 窓を 閉める のを 忘れました.',
        vi: 'Với thói quen, の đứng trước なれます hoặc 忘れました: 牛乳を 買う のに なりました, 車の 窓を 閉める のを 忘れました.'
      },
      explanationRuby: [
        { base: '牛', reading: 'ぎゅう' },
        { base: '乳', reading: 'にゅう' },
        { base: '買', reading: 'か' },
        { base: '車', reading: 'くるま' },
        { base: '窓', reading: 'まど' },
        { base: '閉', reading: 'し' },
        { base: '忘', reading: 'わす' }
      ],
      examples: [
        {
          jp: '車の 窓を 閉める のを 忘れました。',
          romaji: 'Kuruma no mado o shimeru no o wasuremashita.',
          meaning: { en: 'I forgot to close the car window.', vi: 'Tôi quên đóng cửa sổ ô tô.' },
          ruby: [
            { base: '車', reading: 'くるま' },
            { base: '窓', reading: 'まど' },
            { base: '閉', reading: 'し' },
            { base: '忘', reading: 'わす' }
          ]
        }
      ]
    },
    {
      pattern: '～知っていますか',
      highlights: ['知', 'て', 'い', 'ます', 'か'],
      title: { en: 'Do you know...? (知っていますか)', vi: 'Anh/chị có biết...? (知っていますか)' },
      explanation: {
        en: '知っていますか asks if the listener already knows a fact. 知っていませんか invites new information the listener may not know yet. Answers: 知っています / 知りません.',
        vi: '知っていますか hỏi người nghe đã biết sự thật chưa. 知っていませんか mời thông tin mới. Trả lời: 知っています / 知りません.'
      },
      explanationRuby: [
        { base: '知', reading: 'し' },
        { base: '知', reading: 'し' },
        { base: '知', reading: 'し' },
        { base: '知', reading: 'し' }
      ],
      examples: [
        {
          jp: '宮崎さんが 赤ちゃんを 生んだ ことを 知っていますか。',
          romaji: 'Miyazaki-san ga akachan o unda koto o shitte imasu ka.',
          meaning: {
            en: 'Do you know that Ms. Miyazaki had a baby?',
            vi: 'Anh/chị có biết chị Miyazaki đã sinh em bé không?'
          },
          ruby: [
            { base: '宮', reading: 'みや' },
            { base: '崎', reading: 'ざき' },
            { base: '赤', reading: 'あか' },
            { base: '生', reading: 'う' },
            { base: '知', reading: 'し' }
          ]
        },
        {
          jp: '……いいえ、知りません。いつ ですか。',
          romaji: '……Iie, shirimasen. Itsu desu ka.',
          meaning: {
            en: '...No, I did not know. When was it?',
            vi: '...Không, tôi không biết. Bao giờ cơ?'
          },
          ruby: [{ base: '知', reading: 'し' }]
        }
      ]
    },
    {
      pattern: 'N / V-plain 時',
      highlights: ['時'],
      title: { en: 'When (時)', vi: 'Khi (時)' },
      explanation: {
        en: '時 marks when something happens: 日本に 来た 時, 小学校の 時. It can clarify or correct what was said: 生まれた のは チェンマイ です (not where you assumed).',
        vi: '時 chỉ thời điểm: 日本に 来た 時, 小学校の 時. Có thể làm rõ hoặc sửa thông tin: 生まれた のは チェンマイ です.'
      },
      explanationRuby: [
        { base: '日', reading: 'に' },
        { base: '本', reading: 'ほん' },
        { base: '来', reading: 'き' },
        { base: '時', reading: 'とき' },
        { base: '小', reading: 'しょう' },
        { base: '学', reading: 'がっ' },
        { base: '校', reading: 'こう' },
        { base: '時', reading: 'とき' },
        { base: '生', reading: 'う' }
      ],
      examples: [
        {
          jp: '初めて 恋人に 会った 時は 小学校の 音楽の 時間 です。',
          romaji: 'Hajimete koibito ni atta toki wa shōgakkō no ongaku no jikan desu.',
          meaning: {
            en: 'The first time I met the person I loved was during music class in elementary school.',
            vi: 'Lần đầu gặp người mình yêu là ở giờ âm nhạc tiểu học.'
          },
          ruby: [
            { base: '初', reading: 'はじ' },
            { base: '会', reading: 'あ' },
            { base: '時', reading: 'とき' },
            { base: '小', reading: 'しょう' },
            { base: '学', reading: 'がっ' },
            { base: '校', reading: 'こう' },
            { base: '音', reading: 'おん' },
            { base: '楽', reading: 'がく' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' }
          ]
        }
      ]
    },
    {
      pattern: '～のに',
      highlights: ['の', 'に'],
      title: { en: 'Contrast with のに', vi: 'Đối lập với のに' },
      explanation: {
        en: 'のに shows unexpected result: 3日しか 書かなかった のに、続ける のは 難しい. Often used when effort and outcome do not match.',
        vi: 'のに thể hiện kết quả trái mong đợi: 3日しか 書かなかった のに、続ける のは 難しい. Thường dùng khi nỗ lực và kết quả không khớp.'
      },
      explanationRuby: [
        { base: '日', reading: 'にち' },
        { base: '書', reading: 'か' },
        { base: '続', reading: 'つづ' },
        { base: '難', reading: 'むずか' }
      ],
      examples: [
        {
          jp: '日記を 書き始めた のに、3日で やめました。',
          romaji: 'Nikki o kakihajimeta noni, mikka de yamemashita.',
          meaning: {
            en: 'I started a diary, but I quit after only three days.',
            vi: 'Tôi bắt đầu viết nhật ký, nhưng chỉ ba ngày là bỏ.'
          },
          ruby: [
            { base: '日', reading: 'にっ' },
            { base: '記', reading: 'き' },
            { base: '書', reading: 'か' },
            { base: '始', reading: 'はじ' },
            { base: '日', reading: 'か' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson38-twins',
      title: { en: 'Two sisters, two temperaments', vi: 'Hai chị em, hai tính cách' },
      lines: [
        {
          jp: '姉妹は 顔が 似ていますが、性格は 違います。',
          romaji: 'Shimai wa kao ga nite imasu ga, seikaku wa chigaimasu.',
          meaning: {
            en: 'The sisters look alike, but their personalities differ.',
            vi: 'Hai chị em giống mặt nhưng tính cách khác nhau.'
          },
          ruby: [
            { base: '姉', reading: 'しま' },
            { base: '妹', reading: 'い' },
            { base: '似', reading: 'に' },
            { base: '性', reading: 'せい' },
            { base: '格', reading: 'かく' },
            { base: '違', reading: 'ちが' }
          ]
        },
        {
          jp: '姉は おとなしくて 優しい 人 です。妹は 気が 強くて、よく けんか します。',
          romaji:
            'Ane wa otonashikute yasashii hito desu. Imōto wa ki ga tsuyokute, yoku kenka shimasu.',
          meaning: {
            en: 'The older sister is quiet and kind. The younger sister is strong-willed and often quarrels.',
            vi: 'Chị thì ngoan và hiền. Em thì mạnh mẽ và hay cãi nhau.'
          },
          ruby: [
            { base: '姉', reading: 'あね' },
            { base: '優', reading: 'やさ' },
            { base: '人', reading: 'ひと' },
            { base: '妹', reading: 'いもうと' },
            { base: '気', reading: 'き' },
            { base: '強', reading: 'つよ' }
          ]
        },
        {
          jp: 'でも 年齢が 経つ と、お互いを 世話 する のが 当たり前に なりました。',
          romaji: 'Demo nenrei ga tatsu to, o-tagai o sewa suru no ga atarimae ni narimashita.',
          meaning: {
            en: 'But as they grew older, taking care of each other became natural.',
            vi: 'Nhưng theo tuổi tác, chăm sóc nhau đã trở thành điều hiển nhiên.'
          },
          ruby: [
            { base: '年', reading: 'ねん' },
            { base: '齢', reading: 'れい' },
            { base: '経', reading: 'た' },
            { base: '互', reading: 'たが' },
            { base: '世', reading: 'せ' },
            { base: '話', reading: 'わ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What is true about the sisters?', vi: 'Điều nào đúng về hai chị em?' },
          choices: [
            {
              id: 'a',
              label: {
                en: 'They look alike but differ in personality',
                vi: 'Giống mặt nhưng khác tính cách'
              }
            },
            { id: 'b', label: { en: 'Both are strong-willed', vi: 'Cả hai đều mạnh mẽ' } },
            { id: 'c', label: { en: 'They never quarrel', vi: 'Họ không bao giờ cãi nhau' } },
            { id: 'd', label: { en: 'They work in a factory', vi: 'Họ làm ở nhà máy' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What became natural as they grew older?',
            vi: 'Điều gì trở nên hiển nhiên khi lớn lên?'
          },
          choices: [
            { id: 'a', label: { en: 'Taking care of each other', vi: 'Chăm sóc nhau' } },
            { id: 'b', label: { en: 'Locking the office', vi: 'Khóa phòng làm việc' } },
            { id: 'c', label: { en: 'Turning off power', vi: 'Tắt điện nguồn' } },
            { id: 'd', label: { en: 'Lying often', vi: 'Hay nói dối' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Position words', vi: 'Vị trí' },
      introTerm: {
        jp: '位置',
        ruby: [{ base: '位', reading: 'い' }]
      },
      layout: 'stacked',
      rows: [
        {
          jp: '上から2段目',
          ruby: [
            { base: '上', reading: 'うえ' },
            { base: '段', reading: 'だん' },
            { base: '目', reading: 'め' }
          ],
          meaning: { en: '2nd shelf from the top', vi: 'Ngăn thứ 2 từ trên xuống' }
        },
        {
          jp: '奥',
          ruby: [{ base: '奥', reading: 'おく' }],
          meaning: { en: 'back, inner part', vi: 'Phía trong, trong cùng' }
        },
        {
          jp: '手前',
          ruby: [
            { base: '手', reading: 'て' },
            { base: '前', reading: 'まえ' }
          ],
          meaning: { en: 'this side, near side', vi: 'Phía trước' }
        },
        {
          jp: '真ん中',
          ruby: [
            { base: '真', reading: 'ま' },
            { base: '中', reading: 'なか' }
          ],
          meaning: { en: 'center, middle', vi: 'Giữa' }
        },
        {
          jp: '周り',
          ruby: [{ base: '周', reading: 'まわ' }],
          meaning: { en: 'around', vi: 'Xung quanh' }
        }
      ]
    }
  ]
};
