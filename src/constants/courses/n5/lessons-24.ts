import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 24 (giving/receiving: あげる, もらう, くれる). */
export const n5Lesson24: Lesson = {
  id: 'lesson-24',
  number: 24,
  title: {
    en: 'Giving and receiving favors',
    vi: 'Cho, nhận và giúp đỡ'
  },
  focus: {
    en: 'Express giving and receiving with 〜てあげます, 〜てもらいます, and 〜てくれます, and use が for a new subject in a sentence.',
    vi: 'Diễn tả cho/nhận với 〜てあげます, 〜てもらいます, 〜てくれます, và dùng が cho chủ ngữ mới trong câu.'
  },
  vocab: [
    {
      kana: 'くれます',
      romaji: 'kuremasu',
      meaning: {
        en: 'to give (to me/us; someone of equal or lower status gives)',
        vi: 'cho (tôi/chúng tôi; người ngang hoặc dưới cho)'
      }
    },
    {
      kana: 'つれていきます',
      kanji: '連れて行きます',
      romaji: 'tsurete ikimasu',
      meaning: {
        en: 'to take (a person) along, to bring someone',
        vi: 'dẫn đi, đưa (người) đi cùng'
      },
      ruby: [
        { base: '連', reading: 'つ' },
        { base: '行', reading: 'い' }
      ]
    },
    {
      kana: 'つれてきます',
      kanji: '連れて来ます',
      romaji: 'tsurete kimasu',
      meaning: { en: 'to bring (a person) along', vi: 'dẫn đến, đưa (người) đến' },
      ruby: [
        { base: '連', reading: 'つ' },
        { base: '来', reading: 'き' }
      ]
    },
    {
      kana: 'おくります',
      kanji: '送ります',
      romaji: 'okurimasu',
      meaning: {
        en: 'to see off, to escort (人を～: see someone off)',
        vi: 'tiễn, đưa (人を～: tiễn ai)'
      },
      ruby: [{ base: '送', reading: 'おく' }]
    },
    {
      kana: 'しょうかいします',
      kanji: '紹介します',
      romaji: 'shōkai shimasu',
      meaning: { en: 'to introduce', vi: 'giới thiệu' },
      ruby: [{ base: '紹', reading: 'しょう' }]
    },
    {
      kana: 'あんないします',
      kanji: '案内します',
      romaji: 'annai shimasu',
      meaning: { en: 'to show around, to guide', vi: 'hướng dẫn, dẫn đi tham quan' },
      ruby: [{ base: '案', reading: 'あん' }]
    },
    {
      kana: 'せつめいします',
      kanji: '説明します',
      romaji: 'setsumei shimasu',
      meaning: { en: 'to explain', vi: 'giải thích' },
      ruby: [{ base: '説', reading: 'せつ' }]
    },
    {
      kana: 'コーヒーをいれます',
      romaji: 'Kōhī o iremasu',
      meaning: { en: 'to make coffee', vi: 'pha cà phê' }
    },
    {
      kana: 'おじいさん',
      romaji: 'ojīsan',
      meaning: { en: 'grandfather; old man (polite)', vi: 'ông (lịch sự)' }
    },
    {
      kana: 'おじいちゃん',
      romaji: 'ojīchan',
      meaning: { en: 'grandpa (informal)', vi: 'ông (thân mật)' }
    },
    {
      kana: 'おばあさん',
      romaji: 'obāsan',
      meaning: { en: 'grandmother; old woman (polite)', vi: 'bà (lịch sự)' }
    },
    {
      kana: 'おばあちゃん',
      romaji: 'obāchan',
      meaning: { en: 'grandma (informal)', vi: 'bà (thân mật)' }
    },
    {
      kana: 'じゅんび',
      kanji: '準備',
      romaji: 'junbi',
      meaning: { en: 'preparation', vi: 'sự chuẩn bị' },
      ruby: [{ base: '準', reading: 'じゅん' }]
    },
    {
      kana: 'じゅんびします',
      kanji: '準備します',
      romaji: 'junbi shimasu',
      meaning: { en: 'to prepare', vi: 'chuẩn bị' },
      ruby: [{ base: '準', reading: 'じゅん' }]
    },
    {
      kana: 'いみ',
      kanji: '意味',
      romaji: 'imi',
      meaning: { en: 'meaning', vi: 'nghĩa' },
      ruby: [{ base: '意', reading: 'い' }]
    },
    {
      kana: 'おかし',
      kanji: 'お菓子',
      romaji: 'okashi',
      meaning: { en: 'sweets, snacks', vi: 'bánh kẹo, đồ ngọt' },
      ruby: [{ base: '菓', reading: 'か' }]
    },
    {
      kana: 'ぜんぶ',
      kanji: '全部',
      romaji: 'zenbu',
      meaning: { en: 'all, everything', vi: 'tất cả, toàn bộ' },
      ruby: [{ base: '全', reading: 'ぜん' }]
    },
    {
      kana: 'じぶんで',
      kanji: '自分で',
      romaji: 'jibun de',
      meaning: { en: "by oneself, on one's own", vi: 'tự mình, tự làm' },
      ruby: [{ base: '自', reading: 'じ' }]
    },
    {
      kana: 'ほかに',
      romaji: 'hoka ni',
      meaning: { en: 'besides, in addition', vi: 'ngoài ra, thêm nữa' }
    },
    {
      kana: 'ワゴンしゃ',
      kanji: 'ワゴン車',
      romaji: 'wagon sha',
      meaning: { en: 'station wagon, estate car', vi: 'xe wagon' },
      ruby: [{ base: '車', reading: 'しゃ' }]
    },
    {
      kana: 'べんとう',
      kanji: '弁当',
      romaji: 'bentō',
      meaning: { en: 'boxed lunch', vi: 'cơm hộp' },
      ruby: [{ base: '弁', reading: 'べん' }]
    }
  ],
  phrases: [],
  conversation: [
    {
      id: 'conv-lesson24-grandparents',
      title: { en: 'Visiting grandparents', vi: 'Thăm ông bà' },
      speakers: [
        { id: 'mother', name: '母' },
        { id: 'child', name: '子供' }
      ],
      lines: [
        {
          speakerId: 'mother',
          jp: '日曜日 おじいちゃんと おばあちゃんの うちへ 行きましょう。',
          romaji: 'Nichiyōbi ojīchan to obāchan no uchi e ikimashō.',
          meaning: {
            en: "Let us go to grandpa and grandma's house on Sunday.",
            vi: 'Chủ nhật chúng ta đi nhà ông bà nhé.'
          },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'child',
          jp: 'おばあちゃんが お菓子を くれますか。',
          romaji: 'Obāchan ga okashi o kuremasu ka.',
          meaning: { en: 'Will grandma give us sweets?', vi: 'Bà có cho bánh kẹo không?' },
          ruby: [
            { base: '菓', reading: 'か' },
            { base: '子', reading: 'し' }
          ]
        },
        {
          speakerId: 'mother',
          jp: 'ええ。おじいちゃんが コーヒーを 入れて くれますよ。',
          romaji: 'Ee. Ojīchan ga kōhī o irete kuremasu yo.',
          meaning: {
            en: 'Yes. Grandpa will make coffee for us.',
            vi: 'Ừ. Ông sẽ pha cà phê cho chúng ta.'
          },
          ruby: [{ base: '入', reading: 'い' }]
        }
      ]
    },
    {
      id: 'conv-lesson24-help',
      title: { en: 'Helping a friend', vi: 'Giúp bạn' },
      speakers: [
        { id: 'miller', name: 'ミラー' },
        { id: 'sato', name: '佐藤' }
      ],
      lines: [
        {
          speakerId: 'miller',
          jp: '引っ越しの 準備、手伝いましょうか。',
          romaji: 'Hikkoshi no junbi, tetsudaimashō ka.',
          meaning: {
            en: 'Shall I help you prepare for the move?',
            vi: 'Tôi giúp chuẩn bị chuyển nhà nhé?'
          },
          ruby: [
            { base: '引', reading: 'ひ' },
            { base: '越', reading: 'こ' },
            { base: '準', reading: 'じゅん' },
            { base: '備', reading: 'び' },
            { base: '手', reading: 'て' },
            { base: '伝', reading: 'つだ' }
          ]
        },
        {
          speakerId: 'sato',
          jp: 'ありがとう。ワゴン車を 貸して もらえませんか。',
          romaji: 'Arigatō. Wagon sha o kashite moraemasen ka.',
          meaning: {
            en: 'Thank you. Could I borrow your station wagon?',
            vi: 'Cảm ơn. Tôi mượn xe wagon được không?'
          },
          ruby: [
            { base: '車', reading: 'しゃ' },
            { base: '貸', reading: 'か' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'いいですよ。私が 駅まで 送ります。',
          romaji: 'Ii desu yo. Watashi ga eki made okurimasu.',
          meaning: {
            en: 'Sure. I will see you off to the station.',
            vi: 'Được. Tôi tiễn bạn đến ga.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '駅', reading: 'えき' },
            { base: '送', reading: 'おく' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N1 に N2 を くれます',
      highlights: ['に', 'を', 'くれます'],
      title: {
        en: 'Someone gives me (N に N を くれます)',
        vi: 'Ai đó cho tôi (N に N を くれます)'
      },
      explanation: {
        en: 'くれます means someone gives something to me or us: 母が 私に お菓子を くれました. The giver is marked with が, the recipient with に.',
        vi: 'くれます nghĩa ai đó cho tôi/chúng tôi: 母が 私に お菓子を くれました. Người cho dùng が, người nhận dùng に.'
      },
      explanationRuby: [
        { base: '母', reading: 'はは' },
        { base: '私', reading: 'わたし' },
        { base: '菓', reading: 'か' },
        { base: '子', reading: 'し' }
      ],
      examples: [
        {
          jp: 'おじいちゃんが 私に 意味を 説明して くれました。',
          romaji: 'Ojīchan ga watashi ni imi o setsumei shite kuremashita.',
          meaning: {
            en: 'Grandpa explained the meaning to me.',
            vi: 'Ông giải thích nghĩa cho tôi.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' },
            { base: '説', reading: 'せつ' },
            { base: '明', reading: 'めい' }
          ]
        },
        {
          jp: '友達が 弁当を くれました。',
          romaji: 'Tomodachi ga bentō o kuremashita.',
          meaning: { en: 'A friend gave me a boxed lunch.', vi: 'Bạn cho tôi cơm hộp.' },
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '弁', reading: 'べん' },
            { base: '当', reading: 'とう' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て あげます',
      highlights: ['て', 'あげます'],
      title: {
        en: 'Doing a favor for someone (V-て あげます)',
        vi: 'Làm ơn cho ai (V-て あげます)'
      },
      explanation: {
        en: 'V-て あげます means you do something for someone else: 私は 妹に 本を 読んで あげました.',
        vi: 'V-て あげます nghĩa bạn làm việc gì cho người khác: 私は 妹に 本を 読んで あげました.'
      },
      explanationRuby: [
        { base: '私', reading: 'わたし' },
        { base: '妹', reading: 'いもうと' },
        { base: '本', reading: 'ほん' },
        { base: '読', reading: 'よ' }
      ],
      examples: [
        {
          jp: '私は 友達に 町を 案内して あげました。',
          romaji: 'Watashi wa tomodachi ni machi o annaishite agemashita.',
          meaning: {
            en: 'I showed my friend around town.',
            vi: 'Tôi hướng dẫn bạn tham quan thị trấn.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '町', reading: 'まち' },
            { base: '案', reading: 'あん' },
            { base: '内', reading: 'ない' }
          ]
        },
        {
          jp: '母の 弁当を 自分で 作って あげましょう。',
          romaji: 'Haha no bentō o jibun de tsukutte agemashō.',
          meaning: {
            en: 'Let us make a boxed lunch for Mother by ourselves.',
            vi: 'Chúng ta tự làm cơm hộp cho mẹ nhé.'
          },
          ruby: [
            { base: '母', reading: 'はは' },
            { base: '弁', reading: 'べん' },
            { base: '当', reading: 'とう' },
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' },
            { base: '作', reading: 'つく' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て もらいます',
      highlights: ['て', 'もらいます'],
      title: { en: 'Receiving a favor (V-て もらいます)', vi: 'Nhận ơn (V-て もらいます)' },
      explanation: {
        en: 'V-て もらいます means you receive a favor from someone: 私は 先生に 日本語を 教えて もらいました.',
        vi: 'V-て もらいます nghĩa bạn nhận sự giúp đỡ từ ai: 私は 先生に 日本語を 教えて もらいました.'
      },
      explanationRuby: [
        { base: '私', reading: 'わたし' },
        { base: '先', reading: 'せん' },
        { base: '生', reading: 'せい' },
        { base: '日', reading: 'に' },
        { base: '本', reading: 'ほん' },
        { base: '語', reading: 'ご' },
        { base: '教', reading: 'おし' }
      ],
      examples: [
        {
          jp: '私は 佐藤さんに 新しい 人を 紹介して もらいました。',
          romaji: 'Watashi wa Satō-san ni atarashii hito o shōkai shite moraimashita.',
          meaning: {
            en: 'Mr. Sato introduced a new person to me.',
            vi: 'Anh Sato giới thiệu người mới cho tôi.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '佐', reading: 'さ' },
            { base: '藤', reading: 'とう' },
            { base: '新', reading: 'あたら' },
            { base: '人', reading: 'ひと' },
            { base: '紹', reading: 'しょう' },
            { base: '介', reading: 'かい' }
          ]
        },
        {
          jp: '全部 自分で できません。手伝って もらいました。',
          romaji: 'Zenbu jibun de dekimasen. Tetsudatte moraimashita.',
          meaning: {
            en: 'I could not do everything alone. I got help.',
            vi: 'Tôi không làm hết một mình. Tôi nhờ giúp.'
          },
          ruby: [
            { base: '全', reading: 'ぜん' },
            { base: '部', reading: 'ぶ' },
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' },
            { base: '手', reading: 'て' },
            { base: '伝', reading: 'つだ' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て くれます',
      highlights: ['て', 'くれます'],
      title: {
        en: 'Someone does a favor for me (V-て くれます)',
        vi: 'Ai đó giúp tôi (V-て くれます)'
      },
      explanation: {
        en: 'V-て くれます means someone does something for me or us: 兄が 私に 本を 貸して くれました.',
        vi: 'V-て くれます nghĩa ai đó làm việc gì cho tôi: 兄が 私に 本を 貸して くれました.'
      },
      explanationRuby: [
        { base: '兄', reading: 'あに' },
        { base: '私', reading: 'わたし' },
        { base: '本', reading: 'ほん' },
        { base: '貸', reading: 'か' }
      ],
      examples: [
        {
          jp: 'おばあちゃんが お菓子を 作って くれます。',
          romaji: 'Obāchan ga okashi o tsukutte kuremasu.',
          meaning: { en: 'Grandma makes sweets for us.', vi: 'Bà làm bánh kẹo cho chúng ta.' },
          ruby: [
            { base: '菓', reading: 'か' },
            { base: '子', reading: 'し' },
            { base: '作', reading: 'つく' }
          ]
        },
        {
          jp: 'ミラーさんが 子供を 連れて 行って くれました。',
          romaji: 'Mirā-san ga kodomo o tsurete itte kuremashita.',
          meaning: {
            en: 'Mr. Miller took the children along for us.',
            vi: 'Anh Miller dẫn bọn trẻ đi giúp chúng tôi.'
          },
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '供', reading: 'ども' },
            { base: '連', reading: 'つ' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'N が ... (new subject)',
      highlights: ['が'],
      title: { en: 'New subject with が', vi: 'Chủ ngữ mới với が' },
      explanation: {
        en: 'When a new person becomes the subject in a sentence, mark them with が: 母は 出かけましたが、父が 家に います.',
        vi: 'Khi có chủ ngữ mới trong câu, đánh dấu bằng が: 母は 出かけましたが、父が 家に います.'
      },
      explanationRuby: [
        { base: '母', reading: 'はは' },
        { base: '出', reading: 'で' },
        { base: '父', reading: 'ちち' },
        { base: '家', reading: 'いえ' }
      ],
      examples: [
        {
          jp: '私は 会社へ 行きますが、妻が 子供を 連れて 来ます。',
          romaji: 'Watashi wa kaisha e ikimasu ga, tsuma ga kodomo o tsurete kimasu.',
          meaning: {
            en: 'I go to the office, but my wife brings the children.',
            vi: 'Tôi đi công ty, còn vợ dẫn con đến.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '行', reading: 'い' },
            { base: '妻', reading: 'つま' },
            { base: '子', reading: 'こ' },
            { base: '供', reading: 'ども' },
            { base: '連', reading: 'つ' },
            { base: '来', reading: 'き' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson24-picnic',
      title: { en: 'A picnic with friends', vi: 'Dã ngoại với bạn' },
      lines: [
        {
          jp: '日曜日 友達と 公園へ 行きました。',
          romaji: 'Nichiyōbi tomodachi to kōen e ikimashita.',
          meaning: {
            en: 'On Sunday I went to the park with friends.',
            vi: 'Chủ nhật tôi đi công viên với bạn.'
          },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '佐藤さんが 弁当を 作って くれました。ほかに お菓子も ありました。',
          romaji: 'Satō-san ga bentō o tsukutte kuremashita. Hoka ni okashi mo arimashita.',
          meaning: {
            en: 'Mr. Sato made boxed lunches for us. There were sweets too.',
            vi: 'Anh Sato làm cơm hộp cho chúng tôi. Còn có thêm bánh kẹo.'
          },
          ruby: [
            { base: '佐', reading: 'さ' },
            { base: '藤', reading: 'とう' },
            { base: '弁', reading: 'べん' },
            { base: '当', reading: 'とう' },
            { base: '作', reading: 'つく' },
            { base: '菓', reading: 'か' },
            { base: '子', reading: 'し' }
          ]
        },
        {
          jp: '私は 全部 食べられませんでしたが、みんな 手伝って くれました。',
          romaji: 'Watashi wa zenbu taberaremasen deshita ga, minna tetsudatte kuremashita.',
          meaning: {
            en: 'I could not eat everything, but everyone helped me.',
            vi: 'Tôi không ăn hết, nhưng mọi người giúp tôi.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '全', reading: 'ぜん' },
            { base: '部', reading: 'ぶ' },
            { base: '食', reading: 'た' },
            { base: '手', reading: 'て' },
            { base: '伝', reading: 'つだ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'Where did they go?', vi: 'Họ đi đâu?' },
          choices: [
            { id: 'a', label: { en: 'The park', vi: 'Công viên' } },
            { id: 'b', label: { en: 'The station', vi: 'Ga' } },
            { id: 'c', label: { en: 'City hall', vi: 'Ủy ban thành phố' } },
            { id: 'd', label: { en: "Grandma's house", vi: 'Nhà bà' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What did Mr. Sato do?', vi: 'Anh Sato làm gì?' },
          choices: [
            { id: 'a', label: { en: 'Made boxed lunches', vi: 'Làm cơm hộp' } },
            { id: 'b', label: { en: 'Fixed a machine', vi: 'Sửa máy' } },
            { id: 'c', label: { en: 'Moved house', vi: 'Chuyển nhà' } },
            { id: 'd', label: { en: 'Explained grammar', vi: 'Giải thích ngữ pháp' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Family terms', vi: 'Từ gọi thành viên gia đình' },
      includeInQuiz: false,
      intro: {
        en: 'Common words for family members in Japanese.',
        vi: 'Từ thường gọi thành viên trong gia đình.'
      },
      items: [
        {
          kana: 'ちち',
          kanji: '父',
          romaji: 'chichi',
          meaning: { en: 'my father (humble)', vi: 'bố tôi (khiêm nhường)' },
          ruby: [{ base: '父', reading: 'ちち' }]
        },
        {
          kana: 'はは',
          kanji: '母',
          romaji: 'haha',
          meaning: { en: 'my mother (humble)', vi: 'mẹ tôi (khiêm nhường)' },
          ruby: [{ base: '母', reading: 'はは' }]
        },
        {
          kana: 'おとうさん',
          kanji: 'お父さん',
          romaji: 'otōsan',
          meaning: { en: 'father (polite)', vi: 'bố (lịch sự)' },
          ruby: [{ base: '父', reading: 'とう' }]
        },
        {
          kana: 'おかあさん',
          kanji: 'お母さん',
          romaji: 'okāsan',
          meaning: { en: 'mother (polite)', vi: 'mẹ (lịch sự)' },
          ruby: [{ base: '母', reading: 'かあ' }]
        },
        {
          kana: 'あに',
          kanji: '兄',
          romaji: 'ani',
          meaning: { en: 'older brother (humble)', vi: 'anh trai (khiêm nhường)' },
          ruby: [{ base: '兄', reading: 'あに' }]
        },
        {
          kana: 'あね',
          kanji: '姉',
          romaji: 'ane',
          meaning: { en: 'older sister (humble)', vi: 'chị gái (khiêm nhường)' },
          ruby: [{ base: '姉', reading: 'あね' }]
        },
        {
          kana: 'おとうと',
          kanji: '弟',
          romaji: 'otōto',
          meaning: { en: 'younger brother', vi: 'em trai' },
          ruby: [{ base: '弟', reading: 'おとうと' }]
        },
        {
          kana: 'いもうと',
          kanji: '妹',
          romaji: 'imōto',
          meaning: { en: 'younger sister', vi: 'em gái' },
          ruby: [{ base: '妹', reading: 'いもうと' }]
        },
        {
          kana: 'こども',
          kanji: '子供',
          romaji: 'kodomo',
          meaning: { en: 'child, children', vi: 'con, trẻ em' },
          ruby: [{ base: '子', reading: 'こ' }]
        }
      ]
    }
  ]
};
