import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 47 (hearsay そうです, 〜ようです, 〜がします). */
export const n4Lesson47: Lesson = {
  id: 'lesson-47',
  number: 47,
  title: {
    en: 'Hearsay and conjecture',
    vi: 'Nghe nói và suy đoán'
  },
  focus: {
    en: 'Report what you heard with plain form + そうです, infer from evidence with 〜ようです, and describe senses with 〜がします.',
    vi: 'Truyền đạt tin nghe được với thể thường + そうです, suy đoán từ dấu hiệu với 〜ようです, và mô tả giác quan với 〜がします.'
  },
  vocab: [
    {
      kana: 'ふきます',
      kanji: '吹きます',
      romaji: 'fukimasu',
      meaning: { en: 'to blow [風が～: wind]', vi: 'thổi [gió ~]' },
      ruby: [{ base: '吹', reading: 'ふ' }]
    },
    {
      kana: 'もえます',
      kanji: '燃えます',
      romaji: 'moemasu',
      meaning: { en: 'to burn [ごみが～: garbage]', vi: 'cháy [rác ~]' },
      ruby: [{ base: '燃', reading: 'も' }]
    },
    {
      kana: 'なくなります',
      kanji: '亡くなります',
      romaji: 'nakunarimasu',
      meaning: {
        en: 'to pass away (euphemism for 死にます)',
        vi: 'qua đời (cách nói tránh của 死にます)'
      },
      ruby: [{ base: '亡', reading: 'な' }]
    },
    {
      kana: 'あつまります',
      kanji: '集まります',
      romaji: 'atsumarimasu',
      meaning: { en: 'to gather [人が～: people]', vi: 'tập trung [người ~]' },
      ruby: [{ base: '集', reading: 'あつ' }]
    },
    {
      kana: 'わかれます',
      kanji: '別れます',
      romaji: 'wakaremasu',
      meaning: { en: 'to part, to separate [人が～: people]', vi: 'chia tay [người ~]' },
      ruby: [{ base: '別', reading: 'わか' }]
    },
    {
      kana: 'します',
      romaji: 'shimasu',
      meaning: {
        en: 'to be sensed [音/声/味/においが～: sound/voice/taste/smell]',
        vi: 'có [tiếng/âm thanh/vị/mùi ~]'
      }
    },
    {
      kana: 'きびしい',
      kanji: '厳しい',
      romaji: 'kibishii',
      meaning: { en: 'strict, severe', vi: 'nghiêm khắc' },
      ruby: [{ base: '厳', reading: 'きび' }]
    },
    {
      kana: 'ひどい',
      romaji: 'hidoi',
      meaning: { en: 'terrible, awful', vi: 'khủng khiếp, tệ' }
    },
    {
      kana: 'こわい',
      kanji: '怖い',
      romaji: 'kowai',
      meaning: { en: 'scary, frightening', vi: 'sợ, đáng sợ' },
      ruby: [{ base: '怖', reading: 'こわ' }]
    },
    {
      kana: 'じっけん',
      kanji: '実験',
      romaji: 'jikken',
      meaning: { en: 'experiment', vi: 'thực nghiệm' },
      ruby: [
        { base: '実', reading: 'じっ' },
        { base: '験', reading: 'けん' }
      ]
    },
    {
      kana: 'データ',
      romaji: 'dēta',
      meaning: { en: 'data', vi: 'dữ liệu' }
    },
    {
      kana: 'じんこう',
      kanji: '人口',
      romaji: 'jinkō',
      meaning: { en: 'population', vi: 'dân số' },
      ruby: [
        { base: '人', reading: 'じん' },
        { base: '口', reading: 'こう' }
      ]
    },
    {
      kana: 'におい',
      romaji: 'nioi',
      meaning: { en: 'smell, odor', vi: 'mùi' }
    },
    {
      kana: 'かがく',
      kanji: '科学',
      romaji: 'kagaku',
      meaning: { en: 'science', vi: 'khoa học' },
      ruby: [
        { base: '科', reading: 'か' },
        { base: '学', reading: 'がく' }
      ]
    },
    {
      kana: 'いがく',
      kanji: '医学',
      romaji: 'igaku',
      meaning: { en: 'medical science', vi: 'y học' },
      ruby: [
        { base: '医', reading: 'い' },
        { base: '学', reading: 'がく' }
      ]
    },
    {
      kana: 'ぶんがく',
      kanji: '文学',
      romaji: 'bungaku',
      meaning: { en: 'literature', vi: 'văn học' },
      ruby: [
        { base: '文', reading: 'ぶん' },
        { base: '学', reading: 'がく' }
      ]
    },
    {
      kana: 'パトカー',
      romaji: 'patokā',
      meaning: { en: 'patrol car', vi: 'xe tuần tra cảnh sát' }
    },
    {
      kana: 'きゅうきゅうしゃ',
      kanji: '救急車',
      romaji: 'kyūkyūsha',
      meaning: { en: 'ambulance', vi: 'xe cấp cứu' },
      ruby: [
        { base: '救', reading: 'きゅう' },
        { base: '急', reading: 'きゅう' },
        { base: '車', reading: 'しゃ' }
      ]
    },
    {
      kana: 'さんせい',
      kanji: '賛成',
      romaji: 'sansei',
      meaning: { en: 'agreement, approval', vi: 'tán thành' },
      ruby: [
        { base: '賛', reading: 'さん' },
        { base: '成', reading: 'せい' }
      ]
    },
    {
      kana: 'はんたい',
      kanji: '反対',
      romaji: 'hantai',
      meaning: { en: 'opposition, objection', vi: 'phản đối' },
      ruby: [
        { base: '反', reading: 'はん' },
        { base: '対', reading: 'たい' }
      ]
    },
    {
      kana: 'だいとうりょう',
      kanji: '大統領',
      romaji: 'daitōryō',
      meaning: { en: 'president (of a country)', vi: 'tổng thống' },
      ruby: [
        { base: '大', reading: 'だい' },
        { base: '統', reading: 'とう' },
        { base: '領', reading: 'りょう' }
      ]
    },
    {
      kana: '～に よると',
      romaji: '~ ni yoru to',
      meaning: {
        en: 'according to ~ (information source)',
        vi: 'theo ~ (nguồn thông tin)'
      }
    },
    {
      kana: 'こんやくします',
      kanji: '婚約します',
      romaji: "kon'yaku shimasu",
      meaning: { en: 'to get engaged', vi: 'đính hôn, ăn hỏi' },
      ruby: [
        { base: '婚', reading: 'こん' },
        { base: '約', reading: 'やく' }
      ]
    },
    {
      kana: 'どうも',
      romaji: 'dōmo',
      meaning: {
        en: 'apparently, it seems (conjecture)',
        vi: 'có vẻ như (khi suy đoán)'
      }
    },
    {
      kana: 'こいびと',
      kanji: '恋人',
      romaji: 'koibito',
      meaning: { en: 'lover, sweetheart', vi: 'người yêu' },
      ruby: [
        { base: '恋', reading: 'こい' },
        { base: '人', reading: 'びと' }
      ]
    },
    {
      kana: 'あいて',
      kanji: '相手',
      romaji: 'aite',
      meaning: { en: 'partner, the other person', vi: 'đối phương, hôn phu/hôn thê' },
      ruby: [
        { base: '相', reading: 'あい' },
        { base: '手', reading: 'て' }
      ]
    },
    {
      kana: 'しりあいます',
      kanji: '知り合います',
      romaji: 'shiriaimasu',
      meaning: { en: 'to get acquainted', vi: 'quen biết' },
      ruby: [
        { base: '知', reading: 'し' },
        { base: '合', reading: 'あ' }
      ]
    },
    {
      kana: 'けしょう',
      kanji: '化粧',
      romaji: 'keshō',
      meaning: {
        en: 'makeup (～を します: to put on makeup)',
        vi: 'trang điểm (～を します: trang điểm)'
      },
      ruby: [
        { base: '化', reading: 'け' },
        { base: '粧', reading: 'しょう' }
      ]
    },
    {
      kana: 'せわを します',
      kanji: '世話を します',
      romaji: 'sewa o shimasu',
      meaning: { en: 'to take care of', vi: 'chăm sóc' },
      ruby: [
        { base: '世', reading: 'せ' },
        { base: '話', reading: 'わ' }
      ]
    },
    {
      kana: 'じょせい',
      kanji: '女性',
      romaji: 'josei',
      meaning: { en: 'woman, female', vi: 'phụ nữ, nữ' },
      ruby: [
        { base: '女', reading: 'じょ' },
        { base: '性', reading: 'せい' }
      ]
    },
    {
      kana: 'だんせい',
      kanji: '男性',
      romaji: 'dansei',
      meaning: { en: 'man, male', vi: 'nam giới, nam' },
      ruby: [
        { base: '男', reading: 'だん' },
        { base: '性', reading: 'せい' }
      ]
    },
    {
      kana: 'ながいき',
      kanji: '長生き',
      romaji: 'nagaiki',
      meaning: { en: 'long life (～します: to live long)', vi: 'sống thọ (～します: sống lâu)' },
      ruby: [
        { base: '長', reading: 'なが' },
        { base: '生', reading: 'い' }
      ]
    },
    {
      kana: 'りゆう',
      kanji: '理由',
      romaji: 'riyuu',
      meaning: { en: 'reason', vi: 'lý do' },
      ruby: [
        { base: '理', reading: 'り' },
        { base: '由', reading: 'ゆう' }
      ]
    },
    {
      kana: 'かんけい',
      kanji: '関係',
      romaji: 'kankei',
      meaning: { en: 'relation, connection', vi: 'quan hệ' },
      ruby: [
        { base: '関', reading: 'かん' },
        { base: '係', reading: 'けい' }
      ]
    }
  ],
  phrases: [
    {
      kana: '～によると',
      romaji: '~ ni yoru to',
      meaning: { en: 'According to ~', vi: 'Theo ~' }
    },
    {
      kana: 'どうも 恋人が できた ようです。',
      kanji: 'どうも 恋人が できた ようです。',
      romaji: 'Dōmo koibito ga dekita yō desu.',
      meaning: {
        en: 'It seems she has gotten a boyfriend.',
        vi: 'Có vẻ như chị ấy mới có người yêu.'
      },
      ruby: [
        { base: '恋', reading: 'こい' },
        { base: '人', reading: 'びと' }
      ]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson47-engagement',
      title: { en: 'I hear she got engaged', vi: 'Nghe nói chị ấy đính hôn' },
      speakers: [
        { id: 'watanabe', name: '渡辺' },
        { id: 'takahashi', name: '高橋' },
        { id: 'hayashi', name: '林' }
      ],
      lines: [
        {
          speakerId: 'watanabe',
          jp: '失礼します。先に 帰ります。',
          romaji: 'Shitsurei shimasu. Saki ni kaerimasu.',
          meaning: { en: 'Excuse me. I am leaving first.', vi: 'Xin phép, tôi về trước.' },
          ruby: [
            { base: '失', reading: 'しつ' },
            { base: '礼', reading: 'れい' },
            { base: '先', reading: 'さき' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          speakerId: 'takahashi',
          jp: 'あ、渡辺さん、ちょっと 待って。私も 帰ります。',
          romaji: 'A, Watanabe-san, chotto matte. Watashi mo kaerimasu.',
          meaning: {
            en: 'Oh, Ms. Watanabe, wait a moment. I am leaving too.',
            vi: 'A, chị Watanabe, đợi một chút. Tôi cũng về luôn.'
          },
          ruby: [
            { base: '渡', reading: 'わた' },
            { base: '辺', reading: 'なべ' },
            { base: '待', reading: 'ま' },
            { base: '私', reading: 'わたし' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          speakerId: 'watanabe',
          jp: 'すみません。急いで いる んです。',
          romaji: 'Sumimasen. Isoide iru n desu.',
          meaning: { en: 'Sorry. I am in a hurry.', vi: 'Xin lỗi, tôi rất vội.' },
          ruby: [{ base: '急', reading: 'いそ' }]
        },
        {
          speakerId: 'takahashi',
          jp: '渡辺さん、最近 早く 帰りますね。どうも 恋人が できた ようです。',
          romaji: 'Watanabe-san, saikin hayaku kaerimasu ne. Dōmo koibito ga dekita yō desu.',
          meaning: {
            en: 'Ms. Watanabe, you have been leaving early lately. It seems you got a boyfriend.',
            vi: 'Chị Watanabe dạo này về sớm nhỉ. Có vẻ như chị ấy mới có người yêu.'
          },
          ruby: [
            { base: '渡', reading: 'わた' },
            { base: '辺', reading: 'なべ' },
            { base: '最', reading: 'さい' },
            { base: '近', reading: 'さい' },
            { base: '早', reading: 'はや' },
            { base: '帰', reading: 'かえ' },
            { base: '恋', reading: 'こい' },
            { base: '人', reading: 'ひと' }
          ]
        },
        {
          speakerId: 'hayashi',
          jp: 'えっ、知らない んですか。最近 婚約した そう ですよ。',
          romaji: "E, shiranai n desu ka. Saikin kon'yaku shita sō desu yo.",
          meaning: {
            en: 'What, you did not know? I hear she got engaged recently.',
            vi: 'Ô, anh không biết à. Gần đây nghe nói chị ấy mới đính hôn đấy.'
          },
          ruby: [
            { base: '知', reading: 'し' },
            { base: '最', reading: 'さい' },
            { base: '近', reading: 'さい' },
            { base: '婚', reading: 'こん' },
            { base: '約', reading: 'やく' }
          ]
        },
        {
          speakerId: 'takahashi',
          jp: '本当 ですか。相手は だれ ですか。',
          romaji: 'Hontō desu ka. Aite wa dare desu ka.',
          meaning: { en: 'Really? Who is her partner?', vi: 'Thế à? Ai là đối phương?' },
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '当', reading: 'とう' },
            { base: '相', reading: 'あい' },
            { base: '手', reading: 'て' }
          ]
        },
        {
          speakerId: 'hayashi',
          jp: 'IMCの 鈴木さん です。ワットさんの 結婚式で 知り合った そう です。',
          romaji: 'IMC no Suzuki-san desu. Watto-san no kekkonshiki de shiriatta sō desu.',
          meaning: {
            en: "Mr. Suzuki from IMC. I hear they met at Mr. Watt's wedding.",
            vi: 'Là anh Suzuki ở công ty IMC. Nghe nói họ quen nhau trong đám cưới anh Watt.'
          },
          ruby: [
            { base: '鈴', reading: 'すず' },
            { base: '木', reading: 'き' },
            { base: '結', reading: 'けっ' },
            { base: '婚', reading: 'こん' },
            { base: '式', reading: 'しき' },
            { base: '知', reading: 'し' },
            { base: '合', reading: 'あ' }
          ]
        },
        {
          speakerId: 'takahashi',
          jp: 'そう ですか。',
          romaji: 'Sō desu ka.',
          meaning: { en: 'I see.', vi: 'Thế à.' }
        },
        {
          speakerId: 'hayashi',
          jp: '高橋さん、あなたは どう ですか。',
          romaji: 'Takahashi-san, anata wa dō desu ka.',
          meaning: {
            en: 'Mr. Takahashi, what about you?',
            vi: 'Anh Takahashi, thế còn anh thì thế nào?'
          },
          ruby: [
            { base: '高', reading: 'たか' },
            { base: '橋', reading: 'はし' }
          ]
        },
        {
          speakerId: 'takahashi',
          jp: '私 ですか。私に とって 仕事が 恋人 です。',
          romaji: 'Watashi desu ka. Watashi ni totte shigoto ga koibito desu.',
          meaning: {
            en: 'Me? For me, work is my lover.',
            vi: 'Tôi ấy à? Đối với tôi thì công việc là người yêu.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '私', reading: 'わたし' },
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '恋', reading: 'こい' },
            { base: '人', reading: 'ひと' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N / Adj / V 普通形 そうです',
      patternRuby: [
        { base: '普', reading: 'ふ' },
        { base: '通', reading: 'つう' },
        { base: '形', reading: 'けい' }
      ],
      highlights: ['そう'],
      title: { en: 'I hear that ~ (hearsay そうです)', vi: 'Nghe nói ~ (そうです truyền tin)' },
      explanation: {
        en: 'Plain form + そうです reports information you heard or read - NOT appearance (that is 〜そうです after masu-stem from Lesson 43). ない → なさそう is different; hearsay keeps ない: 雨が 降らない そうです.',
        vi: 'Thể thường + そうです truyền tin nghe/đọc được - KHÔNG phải vẻ ngoài (đó là 〜そうです sau thể ます ở Bài 43). Hearsay giữ ない: 雨が 降らない そうです.'
      },
      explanationRuby: [
        { base: '雨', reading: 'あめ' },
        { base: '降', reading: 'ふ' }
      ],
      examples: [
        {
          jp: '天気予報によると、あした 寒くなる そう です。',
          romaji: 'Tenki yohō ni yoru to, ashita samuku naru sō desu.',
          meaning: {
            en: 'According to the weather forecast, it will get cold tomorrow.',
            vi: 'Theo dự báo thời tiết thì ngày mai trời trở lạnh.'
          },
          ruby: [
            { base: '天', reading: 'てん' },
            { base: '気', reading: 'き' },
            { base: '予', reading: 'よ' },
            { base: '報', reading: 'ほう' },
            { base: '寒', reading: 'さむ' }
          ]
        },
        {
          jp: '新聞で 読みましたが、1月に スピーチ大会が ある そう です。',
          romaji: 'Shinbun de yomimashita ga, ichigatsu ni supīchi taikai ga aru sō desu.',
          meaning: {
            en: 'I read in the newspaper that there will be a speech contest in January.',
            vi: 'Tôi đọc báo thấy nói tháng 1 sẽ có cuộc thi hùng biện.'
          },
          ruby: [
            { base: '新', reading: 'しん' },
            { base: '聞', reading: 'ぶん' },
            { base: '読', reading: 'よ' },
            { base: '月', reading: 'がつ' },
            { base: '大', reading: 'たい' },
            { base: '会', reading: 'かい' }
          ]
        },
        {
          jp: '渡辺さんは 最近 婚約した そう です。',
          romaji: "Watanabe-san wa saikin kon'yaku shita sō desu.",
          meaning: {
            en: 'I hear Ms. Watanabe got engaged recently.',
            vi: 'Nghe nói gần đây chị Watanabe đính hôn.'
          },
          ruby: [
            { base: '渡', reading: 'わた' },
            { base: '辺', reading: 'なべ' },
            { base: '最', reading: 'さい' },
            { base: '近', reading: 'さい' },
            { base: '婚', reading: 'こん' },
            { base: '約', reading: 'やく' }
          ]
        }
      ]
    },
    {
      pattern: 'N / Adj / V 普通形 ようです',
      patternRuby: [
        { base: '普', reading: 'ふ' },
        { base: '通', reading: 'つう' },
        { base: '形', reading: 'けい' }
      ],
      highlights: ['よう'],
      title: { en: 'It seems ~ (〜ようです)', vi: 'Hình như ~ (〜ようです)' },
      explanation: {
        en: 'Plain form + ようです expresses conjecture based on what you see or sense: 隣の 部屋に 人が いる ようです. It is stronger evidence than hearsay そうです.',
        vi: 'Thể thường + ようです suy đoán dựa trên quan sát/cảm nhận: 隣の 部屋に 人が いる ようです. Bằng chứng mạnh hơn そうです truyền tin.'
      },
      explanationRuby: [
        { base: '隣', reading: 'とな' },
        { base: '部', reading: 'へ' },
        { base: '屋', reading: 'や' },
        { base: '人', reading: 'ひと' },
        { base: '隣', reading: 'とな' },
        { base: '部', reading: 'へ' },
        { base: '屋', reading: 'や' },
        { base: '人', reading: 'ひと' }
      ],
      examples: [
        {
          jp: '隣の 部屋に 人が いる よう です。',
          romaji: 'Tonari no heya ni hito ga iru yō desu.',
          meaning: {
            en: 'It seems there is someone in the next room.',
            vi: 'Hình như ở phòng bên cạnh có ai đó.'
          },
          ruby: [
            { base: '隣', reading: 'とな' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '人', reading: 'ひと' }
          ]
        },
        {
          jp: 'どうも 恋人が できた よう です。',
          romaji: 'Dōmo koibito ga dekita yō desu.',
          meaning: {
            en: 'It seems she has gotten a boyfriend.',
            vi: 'Có vẻ như chị ấy mới có người yêu.'
          },
          ruby: [
            { base: '恋', reading: 'こい' },
            { base: '人', reading: 'ひと' }
          ]
        },
        {
          jp: '人が たくさん 集まっている から、事故が あった よう です。',
          romaji: 'Hito ga takusan atsumatte iru kara, jiko ga atta yō desu.',
          meaning: {
            en: 'Many people are gathered, so it seems there was an accident.',
            vi: 'Đông người tập trung nên hình như có tai nạn.'
          },
          ruby: [
            { base: '人', reading: 'ひと' },
            { base: '集', reading: 'あつ' },
            { base: '事', reading: 'ごと' },
            { base: '故', reading: 'じ' }
          ]
        }
      ]
    },
    {
      pattern: 'N が します',
      highlights: ['が', 'し'],
      title: { en: 'It smells/sounds/tastes ~ (〜がします)', vi: 'Có mùi/tiếng/vị ~ (〜がします)' },
      explanation: {
        en: 'N が します describes a sensory impression: 音/声/味/におい/感じ が します. The noun names what you perceive.',
        vi: 'N が します mô tả cảm giác giác quan: 音/声/味/におい/感じ が します. Danh từ là thứ bạn cảm nhận.'
      },
      explanationRuby: [
        { base: '音', reading: 'おと' },
        { base: '声', reading: 'こえ' },
        { base: '味', reading: 'あじ' },
        { base: '感', reading: 'かん' }
      ],
      examples: [
        {
          jp: '楽しい 音が しますね。',
          romaji: 'Tanoshii oto ga shimasu ne.',
          meaning: { en: 'I hear a fun sound.', vi: 'Tiếng người nghe vui nhộn nhỉ.' },
          ruby: [
            { base: '楽', reading: 'たの' },
            { base: '音', reading: 'おん' }
          ]
        },
        {
          jp: 'いい 花の においが します。',
          romaji: 'Ii hana no nioi ga shimasu.',
          meaning: { en: 'I smell nice flowers.', vi: 'Có mùi hoa thơm.' },
          ruby: [{ base: '花', reading: 'はな' }]
        },
        {
          jp: 'この スープは 少し 辛い 味が します。',
          romaji: 'Kono sūpu wa sukoshi karai aji ga shimasu.',
          meaning: { en: 'This soup tastes a little spicy.', vi: 'Súp này có vị hơi cay.' },
          ruby: [
            { base: '少', reading: 'すこ' },
            { base: '辛', reading: 'から' },
            { base: '味', reading: 'あじ' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson47-longlife',
      title: { en: 'Why women live longer', vi: 'Vì sao phụ nữ sống thọ hơn' },
      lines: [
        {
          jp: 'データによると、女性の 方が 男性より 長生き する そう です。',
          romaji: 'Dēta ni yoru to, josei no hō ga dansei yori nagaiki suru sō desu.',
          meaning: {
            en: 'According to the data, I hear women live longer than men.',
            vi: 'Theo dữ liệu thì nghe nói phụ nữ sống thọ hơn nam giới.'
          },
          ruby: [
            { base: '女', reading: 'じょ' },
            { base: '性', reading: 'せい' },
            { base: '方', reading: 'ほう' },
            { base: '男', reading: 'だん' },
            { base: '性', reading: 'せい' },
            { base: '長', reading: 'なが' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          jp: '理由の 一つは 化粧や 世話を する 習慣 だ そう です。',
          romaji: 'Riyū no hitotsu wa keshō ya sewa o suru shūkan da sō desu.',
          meaning: {
            en: 'One reason, I hear, is the habit of makeup and caring for others.',
            vi: 'Một lý do được nói là thói quen trang điểm và chăm sóc người khác.'
          },
          ruby: [
            { base: '理', reading: 'り' },
            { base: '由', reading: 'ゆう' },
            { base: '一', reading: 'いち' },
            { base: '化', reading: 'け' },
            { base: '粧', reading: 'しょう' },
            { base: '世', reading: 'せ' },
            { base: '話', reading: 'わ' },
            { base: '習', reading: 'しゅう' },
            { base: '慣', reading: 'かん' }
          ]
        },
        {
          jp: '科学や 医学の 研究でも、生活と 健康の 関係が 大切 だ そう です。',
          romaji:
            'Kagaku ya igaku no kenkyū demo, seikatsu to kenkō no kankei ga taisetsu da sō desu.',
          meaning: {
            en: 'Research in science and medicine also says the link between lifestyle and health matters.',
            vi: 'Nghiên cứu khoa học và y học cũng nói quan hệ giữa đời sống và sức khỏe rất quan trọng.'
          },
          ruby: [
            { base: '科', reading: 'か' },
            { base: '学', reading: 'がく' },
            { base: '医', reading: 'い' },
            { base: '学', reading: 'がく' },
            { base: '研', reading: 'けん' },
            { base: '究', reading: 'きゅう' },
            { base: '生', reading: 'せい' },
            { base: '活', reading: 'かつ' },
            { base: '健', reading: 'けん' },
            { base: '康', reading: 'こう' },
            { base: '関', reading: 'かん' },
            { base: '係', reading: 'けい' },
            { base: '大', reading: 'たい' },
            { base: '切', reading: 'せつ' }
          ]
        },
        {
          jp: 'でも これは 一例 です。人それぞれ 違います。',
          romaji: 'Demo kore wa ichirei desu. Hito sorezore chigaimasu.',
          meaning: {
            en: 'But this is just one example. Everyone is different.',
            vi: 'Nhưng đây chỉ là một ví dụ. Mỗi người một khác.'
          },
          ruby: [
            { base: '一', reading: 'いち' },
            { base: '例', reading: 'れい' },
            { base: '人', reading: 'ひと' },
            { base: '違', reading: 'ちが' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What does the data say about lifespan?',
            vi: 'Dữ liệu nói gì về tuổi thọ?'
          },
          choices: [
            {
              id: 'a',
              label: { en: 'Women live longer than men', vi: 'Phụ nữ sống thọ hơn nam giới' }
            },
            {
              id: 'b',
              label: { en: 'Men live longer than women', vi: 'Nam giới sống thọ hơn phụ nữ' }
            },
            { id: 'c', label: { en: 'Everyone lives the same', vi: 'Mọi người sống như nhau' } },
            { id: 'd', label: { en: 'Data is unavailable', vi: 'Không có dữ liệu' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What habit is mentioned as a possible reason?',
            vi: 'Thói quen nào được nêu là một lý do?'
          },
          choices: [
            {
              id: 'a',
              label: { en: 'Makeup and caring for others', vi: 'Trang điểm và chăm sóc người khác' }
            },
            { id: 'b', label: { en: 'Driving patrol cars', vi: 'Lái xe tuần tra' } },
            { id: 'c', label: { en: 'Writing literature only', vi: 'Chỉ viết văn học' } },
            { id: 'd', label: { en: 'Opposing the president', vi: 'Phản đối tổng thống' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Giongo and gitaigo', vi: 'Từ tượng thanh và tượng hình' },
      introTerm: {
        jp: '擬音語・擬態語',
        ruby: [
          { base: '擬', reading: 'ぎ' },
          { base: '音', reading: 'おん' },
          { base: '語', reading: 'ご' },
          { base: '擬', reading: 'ぎ' },
          { base: '態', reading: 'たい' },
          { base: '語', reading: 'ご' }
        ]
      },
      layout: 'stacked',
      rows: [
        {
          jp: 'ザーザー 降る',
          ruby: [{ base: '降', reading: 'ふ' }],
          meaning: { en: 'rain pouring hard', vi: '(mưa) lộp bộp, ào ào' }
        },
        {
          jp: 'ピューピュー 吹く',
          ruby: [{ base: '吹', reading: 'ふ' }],
          meaning: { en: 'wind whistling', vi: '(gió) vù vù' }
        },
        {
          jp: 'ワンワン ほえる',
          meaning: { en: 'dog barking', vi: '(chó) gâu gâu' }
        },
        {
          jp: 'げらげら 笑う',
          ruby: [{ base: '笑', reading: 'わら' }],
          meaning: { en: 'laughing loudly', vi: '(cười) ha hả' }
        },
        {
          jp: 'しくしく 泣く',
          ruby: [{ base: '泣', reading: 'な' }],
          meaning: { en: 'sobbing quietly', vi: '(khóc) thút thít' }
        },
        {
          jp: 'きょろきょろ 見る',
          ruby: [{ base: '見', reading: 'み' }],
          meaning: { en: 'looking around restlessly', vi: '(nhìn) đảo mắt lia lịa' }
        },
        {
          jp: 'ぱくぱく 食べる',
          ruby: [{ base: '食', reading: 'た' }],
          meaning: { en: 'eating eagerly', vi: '(ăn) ngon lành' }
        },
        {
          jp: 'ぐうぐう 寝る',
          ruby: [{ base: '寝', reading: 'ね' }],
          meaning: { en: 'sleeping soundly', vi: '(ngủ) khò khò' }
        },
        {
          jp: 'すらすら 読む',
          ruby: [{ base: '読', reading: 'よ' }],
          meaning: { en: 'reading smoothly', vi: '(đọc) trôi chảy' }
        },
        {
          jp: 'ざらざら している',
          meaning: { en: 'feeling rough', vi: '(cảm giác) ráp, nhám' }
        },
        {
          jp: 'べたべた している',
          meaning: { en: 'feeling sticky', vi: '(cảm giác) dính, bết' }
        },
        {
          jp: 'つるつる している',
          meaning: { en: 'feeling smooth/slippery', vi: '(cảm giác) trơn, nhẵn' }
        }
      ]
    }
  ]
};
