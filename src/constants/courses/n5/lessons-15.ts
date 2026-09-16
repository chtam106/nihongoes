import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 15 (ご家族はお元気ですか - permission, prohibition, 〜ています states). */
export const n5Lesson15: Lesson = {
  id: 'lesson-15',
  number: 15,
  title: {
    en: 'How is your family?',
    vi: 'Gia đình anh thế nào?'
  },
  focus: {
    en: 'Ask permission with 〜ても いいですか, express prohibition with 〜ては いけません, and describe states and occupations with 〜ています.',
    vi: 'Xin phép với 〜ても いいですか, nói cấm với 〜ては いけません, và miêu tả trạng thái và nghề nghiệp với 〜ています.'
  },
  vocab: [
    {
      kana: 'おきます',
      kanji: '置きます',
      romaji: 'okimasu',
      meaning: { en: 'to put, to place', vi: 'đặt, để' },
      ruby: [{ base: '置', reading: 'お' }]
    },
    {
      kana: 'つくります',
      kanji: '作ります',
      romaji: 'tsukurimasu',
      meaning: { en: 'to make', vi: 'làm, chế tạo' },
      ruby: [{ base: '作', reading: 'つく' }]
    },
    {
      kana: 'うります',
      kanji: '売ります',
      romaji: 'urimasu',
      meaning: { en: 'to sell', vi: 'bán' },
      ruby: [{ base: '売', reading: 'う' }]
    },
    {
      kana: 'しります',
      kanji: '知ります',
      romaji: 'shirimasu',
      meaning: {
        en: 'to get to know (state: 知っています / 知りません)',
        vi: 'biết (trạng thái: 知っています / 知りません)'
      },
      ruby: [{ base: '知', reading: 'し' }]
    },
    {
      kana: 'すみます',
      kanji: '住みます',
      romaji: 'sumimasu',
      meaning: { en: 'to live, to reside', vi: 'sống, cư trú' },
      ruby: [{ base: '住', reading: 'す' }]
    },
    {
      kana: 'けんきゅうします',
      kanji: '研究します',
      romaji: 'kenkyū shimasu',
      meaning: { en: 'to research', vi: 'nghiên cứu' },
      ruby: [
        { base: '研', reading: 'けん' },
        { base: '究', reading: 'きゅう' }
      ]
    },
    {
      kana: 'おもいだします',
      kanji: '思い出します',
      romaji: 'omoidashimasu',
      meaning: { en: 'to remember, to recall', vi: 'nhớ ra' },
      ruby: [
        { base: '思', reading: 'おも' },
        { base: '出', reading: 'だ' }
      ]
    },
    {
      kana: 'いらっしゃいます',
      romaji: 'irasshaimasu',
      meaning: {
        en: 'honorific for います / 行きます / 来ます (to be, to go, to come)',
        vi: 'kính ngữ của います / 行きます / 来ます (ở, đi, đến)'
      }
    },
    {
      kana: 'しりょう',
      kanji: '資料',
      romaji: 'shiryō',
      meaning: { en: 'materials, documents', vi: 'tài liệu' },
      ruby: [
        { base: '資', reading: 'し' },
        { base: '料', reading: 'りょう' }
      ]
    },
    {
      kana: 'カタログ',
      romaji: 'katarogu',
      meaning: { en: 'catalog', vi: 'ca-ta-lô' }
    },
    {
      kana: 'じこくひょう',
      kanji: '時刻表',
      romaji: 'jikokuhyō',
      meaning: { en: 'timetable', vi: 'bảng giờ chạy tàu' },
      ruby: [
        { base: '時', reading: 'じ' },
        { base: '刻', reading: 'こく' },
        { base: '表', reading: 'ひょう' }
      ]
    },
    {
      kana: 'ふく',
      kanji: '服',
      romaji: 'fuku',
      meaning: { en: 'clothes', vi: 'quần áo' },
      ruby: [{ base: '服', reading: 'ふく' }]
    },
    {
      kana: 'せいひん',
      kanji: '製品',
      romaji: 'seihin',
      meaning: { en: 'product, manufactured goods', vi: 'sản phẩm' },
      ruby: [
        { base: '製', reading: 'せい' },
        { base: '品', reading: 'ひん' }
      ]
    },
    {
      kana: 'ソフト',
      romaji: 'sofuto',
      meaning: { en: 'software', vi: 'phần mềm' }
    },
    {
      kana: 'でんしじしょ',
      kanji: '電子辞書',
      romaji: 'denshi jisho',
      meaning: { en: 'electronic dictionary', vi: 'từ điển điện tử' },
      ruby: [
        { base: '電', reading: 'でん' },
        { base: '子', reading: 'し' },
        { base: '辞', reading: 'じ' },
        { base: '書', reading: 'しょ' }
      ]
    },
    {
      kana: 'けいざい',
      kanji: '経済',
      romaji: 'keizai',
      meaning: { en: 'economy', vi: 'kinh tế' },
      ruby: [
        { base: '経', reading: 'けい' },
        { base: '済', reading: 'ざい' }
      ]
    },
    {
      kana: 'しやくしょ',
      kanji: '市役所',
      romaji: 'shiyakusho',
      meaning: { en: 'city hall', vi: 'ủy ban thành phố' },
      ruby: [
        { base: '市', reading: 'し' },
        { base: '役', reading: 'やく' },
        { base: '所', reading: 'しょ' }
      ]
    },
    {
      kana: 'こうこう',
      kanji: '高校',
      romaji: 'kōkō',
      meaning: { en: 'high school', vi: 'trường trung học phổ thông' },
      ruby: [
        { base: '高', reading: 'こう' },
        { base: '校', reading: 'こう' }
      ]
    },
    {
      kana: 'はいしゃ',
      kanji: '歯医者',
      romaji: 'haisha',
      meaning: { en: 'dentist', vi: 'nha sĩ' },
      ruby: [
        { base: '歯', reading: 'は' },
        { base: '医', reading: 'い' },
        { base: '者', reading: 'しゃ' }
      ]
    },
    {
      kana: 'とこや',
      kanji: '床屋',
      romaji: 'tokoya',
      meaning: { en: 'barber', vi: 'thợ cắt tóc nam' },
      ruby: [
        { base: '床', reading: 'とこ' },
        { base: '屋', reading: 'や' }
      ]
    },
    {
      kana: 'プレイガイド',
      romaji: 'pureigaido',
      meaning: {
        en: 'ticket agency (concerts, sports)',
        vi: 'đại lý bán vé (ca nhạc, thể thao)'
      }
    },
    {
      kana: 'どくしん',
      kanji: '独身',
      romaji: 'dokushin',
      meaning: { en: 'single, unmarried', vi: 'độc thân' },
      ruby: [
        { base: '独', reading: 'どく' },
        { base: '身', reading: 'しん' }
      ]
    },
    {
      kana: 'せんもん',
      kanji: '専門',
      romaji: 'senmon',
      meaning: { en: 'specialty, field of expertise', vi: 'chuyên môn, chuyên ngành' },
      ruby: [
        { base: '専', reading: 'せん' },
        { base: '門', reading: 'もん' }
      ]
    }
  ],
  phrases: [
    {
      kana: 'ごかぞくは おげんきですか。',
      kanji: 'ご家族は お元気ですか。',
      romaji: 'Go-kazoku wa o-genki desu ka.',
      meaning: { en: 'How is your family?', vi: 'Gia đình anh/chị thế nào?' },
      ruby: [
        { base: '家', reading: 'か' },
        { base: '族', reading: 'ぞく' },
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' }
      ]
    },
    {
      kana: 'みなさん',
      kanji: '皆さん',
      romaji: 'minasan',
      meaning: { en: 'everyone, all of you', vi: 'mọi người, các anh/chị' },
      ruby: [{ base: '皆', reading: 'みな' }]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson15-family',
      title: { en: 'After the movie', vi: 'Sau buổi xem phim' },
      speakers: [
        { id: 'miller', name: 'ミラー' },
        { id: 'yamada', name: '山田' }
      ],
      lines: [
        {
          speakerId: 'miller',
          jp: '山田さん、ご家族は お元気ですか。',
          romaji: 'Yamada-san, go-kazoku wa o-genki desu ka.',
          meaning: {
            en: 'Mr. Yamada, how is your family?',
            vi: 'Anh Yamada, gia đình anh thế nào?'
          },
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '田', reading: 'だ' },
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          speakerId: 'yamada',
          jp: 'ええ、元気です。ありがとう ございます。ミラーさんは？',
          romaji: 'Ee, genki desu. Arigatō gozaimasu. Mirā-san wa?',
          meaning: {
            en: 'Yes, they are fine. Thank you. And you, Mr. Miller?',
            vi: 'Vâng, khỏe cả. Cảm ơn anh. Còn anh Miller?'
          },
          ruby: [
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          speakerId: 'miller',
          jp: '私の 兄と 妹も 元気です。',
          romaji: 'Watashi no ani to imōto mo genki desu.',
          meaning: {
            en: 'My older brother and younger sister are fine too.',
            vi: 'Anh trai và em gái tôi cũng khỏe.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '兄', reading: 'あに' },
            { base: '妹', reading: 'いもうと' },
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          speakerId: 'yamada',
          jp: 'そうですか。さっきの 映画は どうでしたか。',
          romaji: 'Sō desu ka. Sakki no eiga wa dō deshita ka.',
          meaning: {
            en: 'I see. How was the movie just now?',
            vi: 'Vậy à. Phim vừa rồi thế nào?'
          },
          ruby: [
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'とても 面白かったです。皆さんも 楽しそうでしたね。',
          romaji: 'Totemo omoshirokatta desu. Minasan mo tanoshisō deshita ne.',
          meaning: {
            en: 'It was very interesting. Everyone looked like they enjoyed it too.',
            vi: 'Rất hay. Mọi người cũng trông vui lắm nhỉ.'
          },
          ruby: [
            { base: '面', reading: 'おも' },
            { base: '白', reading: 'しろ' },
            { base: '皆', reading: 'みな' },
            { base: '楽', reading: 'たの' }
          ]
        },
        {
          speakerId: 'yamada',
          jp: 'ええ。来週 また 行きましょう。',
          romaji: 'Ee. Raishū mata ikimashō.',
          meaning: { en: 'Yes. Let\u0027s go again next week.', vi: 'Ừ. Tuần sau đi nữa nhé.' },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson15-catalog',
      title: { en: 'At the product booth', vi: 'Ở quầy sản phẩm' },
      speakers: [
        { id: 'lee', name: 'イー' },
        { id: 'sato', name: '佐藤' }
      ],
      lines: [
        {
          speakerId: 'lee',
          jp: 'すみません。この カタログを 見ても いいですか。',
          romaji: 'Sumimasen. Kono katarogu o mite mo ii desu ka.',
          meaning: {
            en: 'Excuse me. May I look at this catalog?',
            vi: 'Xin lỗi. Tôi xem ca-ta-lô này được không?'
          },
          ruby: [{ base: '見', reading: 'み' }]
        },
        {
          speakerId: 'sato',
          jp: 'はい、どうぞ。',
          romaji: 'Hai, dōzo.',
          meaning: { en: 'Yes, go ahead.', vi: 'Vâng, mời anh.' }
        },
        {
          speakerId: 'lee',
          jp: 'この 製品の 資料も 見ても いいですか。',
          romaji: 'Kono seihin no shiryō mo mite mo ii desu ka.',
          meaning: {
            en: 'May I look at the materials for this product too?',
            vi: 'Tôi xem tài liệu của sản phẩm này nữa được không?'
          },
          ruby: [
            { base: '製', reading: 'せい' },
            { base: '品', reading: 'ひん' },
            { base: '資', reading: 'し' },
            { base: '料', reading: 'りょう' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          speakerId: 'sato',
          jp: 'ええ、見ても いいですよ。こちらに 置いて あります。',
          romaji: 'Ee, mite mo ii desu yo. Kochira ni oite arimasu.',
          meaning: {
            en: 'Yes, you may. They are placed here.',
            vi: 'Ừ, xem cũng được. Tài liệu để ở đây.'
          },
          ruby: [
            { base: '見', reading: 'み' },
            { base: '置', reading: 'お' }
          ]
        },
        {
          speakerId: 'lee',
          jp: 'ありがとう ございます。ソフトの 専門は 何ですか。',
          romaji: 'Arigatō gozaimasu. Sofuto no senmon wa nan desu ka.',
          meaning: {
            en: 'Thank you. What is your software specialty?',
            vi: 'Cảm ơn. Chuyên môn phần mềm của công ty là gì?'
          },
          ruby: [
            { base: '専', reading: 'せん' },
            { base: '門', reading: 'もん' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          speakerId: 'sato',
          jp: '経済の 資料を 作る ソフトです。',
          romaji: 'Keizai no shiryō o tsukuru sofuto desu.',
          meaning: {
            en: 'It is software for making economic materials.',
            vi: 'Là phần mềm làm tài liệu kinh tế.'
          },
          ruby: [
            { base: '経', reading: 'けい' },
            { base: '済', reading: 'ざい' },
            { base: '資', reading: 'し' },
            { base: '料', reading: 'りょう' },
            { base: '作', reading: 'つく' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson15-smoking',
      title: { en: 'No smoking here', vi: 'Cấm hút thuốc' },
      speakers: [
        { id: 'lin', name: 'リン' },
        { id: 'staff', name: '店員' }
      ],
      lines: [
        {
          speakerId: 'lin',
          jp: 'すみません。ここで タバコを 吸っても いいですか。',
          romaji: 'Sumimasen. Koko de tabako o sutte mo ii desu ka.',
          meaning: {
            en: 'Excuse me. May I smoke here?',
            vi: 'Xin lỗi. Tôi hút thuốc ở đây được không?'
          },
          ruby: [{ base: '吸', reading: 'す' }]
        },
        {
          speakerId: 'staff',
          jp: 'いいえ、ここで 吸っては いけません。',
          romaji: 'Iie, koko de sutte wa ikemasen.',
          meaning: {
            en: 'No, you must not smoke here.',
            vi: 'Không, ở đây không được hút thuốc.'
          },
          ruby: [{ base: '吸', reading: 'す' }]
        },
        {
          speakerId: 'staff',
          jp: '喫煙所は あちらです。',
          romaji: 'Kitsuensho wa achira desu.',
          meaning: {
            en: 'The smoking area is over there.',
            vi: 'Khu hút thuốc ở phía kia.'
          },
          ruby: [
            { base: '喫', reading: 'きつ' },
            { base: '煙', reading: 'えん' },
            { base: '所', reading: 'しょ' }
          ]
        },
        {
          speakerId: 'lin',
          jp: 'わかりました。すみません。',
          romaji: 'Wakarimashita. Sumimasen.',
          meaning: { en: 'Understood. Sorry.', vi: 'Tôi hiểu rồi. Xin lỗi.' },
          ruby: [{ base: '分', reading: 'わ' }]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-ても いいですか / V-ても いいです',
      highlights: ['ても', 'いい', 'です', 'か'],
      title: { en: 'Asking permission (〜ても いいですか)', vi: 'Xin phép (〜ても いいですか)' },
      explanation: {
        en: 'V-ても いいですか asks whether you may do something. The answer is はい、いいです or ええ、いいですよ. V-ても いいです (without か) gives permission.',
        vi: 'V-ても いいですか hỏi có được làm gì không. Trả lời: はい、いいです hoặc ええ、いいですよ. V-ても いいです (không có か) cho phép.'
      },
      examples: [
        {
          jp: 'この カタログを 見ても いいですか。',
          romaji: 'Kono katarogu o mite mo ii desu ka.',
          meaning: { en: 'May I look at this catalog?', vi: 'Tôi xem ca-ta-lô này được không?' },
          dialogueGroup: 'catalog',
          ruby: [{ base: '見', reading: 'み' }]
        },
        {
          jp: 'はい、見ても いいですよ。',
          romaji: 'Hai, mite mo ii desu yo.',
          meaning: { en: 'Yes, you may.', vi: 'Vâng, xem cũng được.' },
          dialogueGroup: 'catalog',
          ruby: [{ base: '見', reading: 'み' }]
        },
        {
          jp: 'ここで 写真を 撮っても いいですか。',
          romaji: 'Koko de shashin o totte mo ii desu ka.',
          meaning: { en: 'May I take photos here?', vi: 'Tôi chụp ảnh ở đây được không?' },
          ruby: [
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '撮', reading: 'と' }
          ]
        },
        {
          jp: 'ええ、撮っても いいです。',
          romaji: 'Ee, totte mo ii desu.',
          meaning: { en: 'Yes, you may take photos.', vi: 'Ừ, chụp cũng được.' },
          ruby: [{ base: '撮', reading: 'と' }]
        }
      ]
    },
    {
      pattern: 'V-ては いけません',
      highlights: ['ては', 'いけません'],
      title: { en: 'Prohibition (〜ては いけません)', vi: 'Cấm (〜ては いけません)' },
      explanation: {
        en: 'V-ては いけません states that something is not allowed. Often seen on signs (e.g. 吸っては いけません). Spoken short form: だめです.',
        vi: 'V-ては いけません nói không được phép làm gì. Thường thấy trên biển báo (ví dụ 吸っては いけません). Nói ngắn: だめです.'
      },
      explanationRuby: [{ base: '吸', reading: 'す' }],
      examples: [
        {
          jp: 'ここで タバコを 吸っては いけません。',
          romaji: 'Koko de tabako o sutte wa ikemasen.',
          meaning: { en: 'You must not smoke here.', vi: 'Ở đây không được hút thuốc.' },
          ruby: [{ base: '吸', reading: 'す' }]
        },
        {
          jp: '図書館で 食べては いけません。',
          romaji: 'Toshokan de tabete wa ikemasen.',
          meaning: { en: 'You must not eat in the library.', vi: 'Trong thư viện không được ăn.' },
          ruby: [
            { base: '図', reading: 'と' },
            { base: '書', reading: 'しょ' },
            { base: '館', reading: 'かん' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          jp: 'この 部屋に 入っては いけません。',
          romaji: 'Kono heya ni haitte wa ikemasen.',
          meaning: { en: 'You must not enter this room.', vi: 'Không được vào phòng này.' },
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '入', reading: 'はい' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ています (state)',
      highlights: ['て', 'います', 'いません'],
      title: { en: 'Resultant state (〜ています)', vi: 'Trạng thái kết quả (〜ています)' },
      explanation: {
        en: 'V-ています can describe a continuing state that resulted from a past action: 知っています (I know), 住んでいます (I live), 持っています (I have). Negative of 知る is 知りません, not 知っていません.',
        vi: 'V-ています có thể miêu tả trạng thái kéo dài do hành động trước đó: 知っています (tôi biết), 住んでいます (tôi sống), 持っています (tôi có). Phủ định của 知る là 知りません, không phải 知っていません.'
      },
      explanationRuby: [
        { base: '知', reading: 'し' },
        { base: '住', reading: 'す' },
        { base: '持', reading: 'も' },
        { base: '知', reading: 'し' },
        { base: '知', reading: 'し' },
        { base: '知', reading: 'し' }
      ],
      examples: [
        {
          jp: '私は その 人を 知っています。',
          romaji: 'Watashi wa sono hito o shitte imasu.',
          meaning: { en: 'I know that person.', vi: 'Tôi biết người đó.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '人', reading: 'ひと' },
            { base: '知', reading: 'し' }
          ]
        },
        {
          jp: 'すみません、知りません。',
          romaji: 'Sumimasen, shirimasen.',
          meaning: { en: 'Sorry, I do not know.', vi: 'Xin lỗi, tôi không biết.' },
          ruby: [{ base: '知', reading: 'し' }]
        },
        {
          jp: '今 大阪に 住んでいます。',
          romaji: 'Ima Ōsaka ni sunde imasu.',
          meaning: { en: 'I live in Osaka now.', vi: 'Bây giờ tôi sống ở Osaka.' },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '住', reading: 'す' }
          ]
        },
        {
          jp: '電子辞書を 持っていますか。',
          romaji: 'Denshi jisho o motte imasu ka.',
          meaning: {
            en: 'Do you have an electronic dictionary?',
            vi: 'Anh/chị có từ điển điện tử không?'
          },
          dialogueGroup: 'dict',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '子', reading: 'し' },
            { base: '辞', reading: 'じ' },
            { base: '書', reading: 'しょ' },
            { base: '持', reading: 'も' }
          ]
        },
        {
          jp: 'はい、持っています。',
          romaji: 'Hai, motte imasu.',
          meaning: { en: 'Yes, I have one.', vi: 'Có, tôi có.' },
          dialogueGroup: 'dict',
          ruby: [{ base: '持', reading: 'も' }]
        }
      ]
    },
    {
      pattern: 'V-ています (occupation)',
      highlights: ['て', 'います'],
      title: { en: 'Occupation (〜ています)', vi: 'Nghề nghiệp (〜ています)' },
      explanation: {
        en: 'V-ています also describes what someone does for work: 作っています (makes), 働いています (works). Often used with a workplace: 工場で 作っています.',
        vi: 'V-ています cũng nói nghề nghiệp: 作っています (làm/chế tạo), 働いています (làm việc). Thường kèm nơi làm việc: 工場で 作っています.'
      },
      explanationRuby: [
        { base: '作', reading: 'つく' },
        { base: '働', reading: 'はたら' },
        { base: '工', reading: 'こう' },
        { base: '場', reading: 'じょう' },
        { base: '作', reading: 'つく' }
      ],
      examples: [
        {
          jp: '父は 工場で 服を 作っています。',
          romaji: 'Chichi wa kōjō de fuku o tsukutte imasu.',
          meaning: {
            en: 'My father makes clothes at a factory.',
            vi: 'Bố tôi làm quần áo ở nhà máy.'
          },
          ruby: [
            { base: '父', reading: 'ちち' },
            { base: '工', reading: 'こう' },
            { base: '場', reading: 'じょう' },
            { base: '服', reading: 'ふく' },
            { base: '作', reading: 'つく' }
          ]
        },
        {
          jp: '兄は 銀行で 働いています。',
          romaji: 'Ani wa ginkō de hataraitte imasu.',
          meaning: { en: 'My older brother works at a bank.', vi: 'Anh trai tôi làm ở ngân hàng.' },
          ruby: [
            { base: '兄', reading: 'あに' },
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '働', reading: 'はたら' }
          ]
        },
        {
          jp: '佐藤さんは 大学で 経済を 研究しています。',
          romaji: 'Satō-san wa daigaku de keizai o kenkyū shite imasu.',
          meaning: {
            en: 'Ms. Sato researches economics at the university.',
            vi: 'Chị Sato nghiên cứu kinh tế ở trường đại học.'
          },
          ruby: [
            { base: '佐', reading: 'さ' },
            { base: '藤', reading: 'とう' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '経', reading: 'けい' },
            { base: '済', reading: 'ざい' },
            { base: '研', reading: 'けん' },
            { base: '究', reading: 'きゅう' }
          ]
        }
      ]
    },
    {
      pattern: 'N に V',
      highlights: ['に'],
      title: { en: 'Enter or sit (N に V)', vi: 'Vào hoặc ngồi (N に V)' },
      explanation: {
        en: 'Use に with verbs of entering or sitting to mark the destination: 喫茶店に 入ります (enter a cafe), いすに 座ります (sit on a chair).',
        vi: 'Dùng に với động từ vào hoặc ngồi để chỉ đích đến: 喫茶店に 入ります (vào quán giải khát), いすに 座ります (ngồi trên ghế).'
      },
      explanationRuby: [
        { base: '喫', reading: 'きっ' },
        { base: '茶', reading: 'さ' },
        { base: '店', reading: 'てん' },
        { base: '入', reading: 'はい' },
        { base: '座', reading: 'すわ' }
      ],
      examples: [
        {
          jp: '喫茶店に 入ります。',
          romaji: 'Kissaten ni hairimasu.',
          meaning: { en: 'I enter the cafe.', vi: 'Tôi vào quán giải khát.' },
          ruby: [
            { base: '喫', reading: 'きっ' },
            { base: '茶', reading: 'さ' },
            { base: '店', reading: 'てん' },
            { base: '入', reading: 'はい' }
          ]
        },
        {
          jp: 'ここに 座ります。',
          romaji: 'Koko ni suwarimasu.',
          meaning: { en: 'I sit here.', vi: 'Tôi ngồi ở đây.' },
          ruby: [{ base: '座', reading: 'すわ' }]
        },
        {
          jp: '会議室に 入って ください。',
          romaji: 'Kaigishitsu ni haite kudasai.',
          meaning: { en: 'Please enter the meeting room.', vi: 'Anh/chị hãy vào phòng họp.' },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '室', reading: 'しつ' },
            { base: '入', reading: 'はい' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 に N2 を V',
      highlights: ['に', 'を'],
      title: { en: 'Place on/in (N1 に N2 を V)', vi: 'Đặt vào/lên (N1 に N2 を V)' },
      explanation: {
        en: 'N1 に N2 を V marks where something is placed or written: ここに 車を 止めて (park the car here), この 紙に 住所を 書いて (write the address on this paper).',
        vi: 'N1 に N2 を V chỉ nơi đặt hoặc viết: ここに 車を 止めて (đỗ xe ở đây), この 紙に 住所を 書いて (viết địa chỉ lên giấy này).'
      },
      explanationRuby: [
        { base: '車', reading: 'くるま' },
        { base: '止', reading: 'と' },
        { base: '紙', reading: 'かみ' },
        { base: '住', reading: 'じゅう' },
        { base: '所', reading: 'しょ' },
        { base: '書', reading: 'か' }
      ],
      examples: [
        {
          jp: 'ここに 車を 止めて ください。',
          romaji: 'Koko ni kuruma o tomete kudasai.',
          meaning: { en: 'Please park the car here.', vi: 'Anh/chị hãy đỗ xe ở đây.' },
          ruby: [
            { base: '車', reading: 'くるま' },
            { base: '止', reading: 'と' }
          ]
        },
        {
          jp: 'この 紙に 名前と 住所を 書いて ください。',
          romaji: 'Kono kami ni namae to jūsho o kaite kudasai.',
          meaning: {
            en: 'Please write your name and address on this paper.',
            vi: 'Anh/chị hãy viết tên và địa chỉ lên giấy này.'
          },
          ruby: [
            { base: '紙', reading: 'かみ' },
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' },
            { base: '住', reading: 'じゅう' },
            { base: '所', reading: 'しょ' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          jp: '机の 上に 資料を 置いて ください。',
          romaji: 'Tsukue no ue ni shiryō o oite kudasai.',
          meaning: {
            en: 'Please place the materials on the desk.',
            vi: 'Anh/chị hãy đặt tài liệu lên bàn.'
          },
          ruby: [
            { base: '机', reading: 'つくえ' },
            { base: '上', reading: 'うえ' },
            { base: '資', reading: 'し' },
            { base: '料', reading: 'りょう' },
            { base: '置', reading: 'お' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson15-researcher',
      title: { en: 'Where Ms. Lee lives and works', vi: 'Nơi ở và công việc của chị Lee' },
      lines: [
        {
          jp: 'イーさんは 今 横浜に 住んでいます。',
          romaji: 'Ī-san wa ima Yokohama ni sunde imasu.',
          meaning: {
            en: 'Ms. Lee lives in Yokohama now.',
            vi: 'Chị Lee bây giờ sống ở Yokohama.'
          },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '横', reading: 'よこ' },
            { base: '浜', reading: 'はま' },
            { base: '住', reading: 'す' }
          ]
        },
        {
          jp: '大学で 経済を 研究しています。',
          romaji: 'Daigaku de keizai o kenkyū shite imasu.',
          meaning: {
            en: 'She researches economics at the university.',
            vi: 'Cô ấy nghiên cứu kinh tế ở trường đại học.'
          },
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '経', reading: 'けい' },
            { base: '済', reading: 'ざい' },
            { base: '研', reading: 'けん' },
            { base: '究', reading: 'きゅう' }
          ]
        },
        {
          jp: '独身で、家族は 中国に います。',
          romaji: 'Dokushin de, kazoku wa Chūgoku ni imasu.',
          meaning: {
            en: 'She is single; her family is in China.',
            vi: 'Cô ấy độc thân; gia đình ở Trung Quốc.'
          },
          ruby: [
            { base: '独', reading: 'どく' },
            { base: '身', reading: 'しん' },
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '中', reading: 'ちゅう' },
            { base: '国', reading: 'ごく' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'Where does Ms. Lee live now?', vi: 'Chị Lee bây giờ sống ở đâu?' },
          choices: [
            { id: 'a', label: { en: 'Yokohama', vi: 'Yokohama' } },
            { id: 'b', label: { en: 'Osaka', vi: 'Osaka' } },
            { id: 'c', label: { en: 'China', vi: 'Trung Quốc' } },
            { id: 'd', label: { en: 'Tokyo', vi: 'Tokyo' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What does she research?', vi: 'Cô ấy nghiên cứu gì?' },
          choices: [
            { id: 'a', label: { en: 'Economics', vi: 'Kinh tế' } },
            { id: 'b', label: { en: 'Software', vi: 'Phần mềm' } },
            { id: 'c', label: { en: 'Medicine', vi: 'Y khoa' } },
            { id: 'd', label: { en: 'Art', vi: 'Mỹ thuật' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'Where is her family?', vi: 'Gia đình cô ấy ở đâu?' },
          choices: [
            { id: 'a', label: { en: 'China', vi: 'Trung Quốc' } },
            { id: 'b', label: { en: 'Yokohama', vi: 'Yokohama' } },
            { id: 'c', label: { en: 'At the university', vi: 'Ở trường đại học' } },
            { id: 'd', label: { en: 'Not said', vi: 'Không nói' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson15-office-rules',
      title: { en: 'Office rules', vi: 'Quy định văn phòng' },
      lines: [
        {
          jp: '会議室で 食べては いけません。',
          romaji: 'Kaigishitsu de tabete wa ikemasen.',
          meaning: {
            en: 'You must not eat in the meeting room.',
            vi: 'Không được ăn trong phòng họp.'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '室', reading: 'しつ' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          jp: '資料を コピーしても いいですか。',
          romaji: 'Shiryō o kopī shite mo ii desu ka.',
          meaning: { en: 'May I photocopy the materials?', vi: 'Tôi phô-tô tài liệu được không?' },
          ruby: [
            { base: '資', reading: 'し' },
            { base: '料', reading: 'りょう' }
          ]
        },
        {
          jp: 'はい、コピーしても いいです。机の 上に 置いて ください。',
          romaji: 'Hai, kopī shite mo ii desu. Tsukue no ue ni oite kudasai.',
          meaning: {
            en: 'Yes, you may copy them. Please place them on the desk.',
            vi: 'Vâng, phô-tô cũng được. Hãy đặt tài liệu lên bàn.'
          },
          ruby: [
            { base: '机', reading: 'つくえ' },
            { base: '上', reading: 'うえ' },
            { base: '置', reading: 'お' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What is not allowed in the meeting room?',
            vi: 'Trong phòng họp không được làm gì?'
          },
          choices: [
            { id: 'a', label: { en: 'Eating', vi: 'Ăn' } },
            { id: 'b', label: { en: 'Copying', vi: 'Phô-tô' } },
            { id: 'c', label: { en: 'Talking', vi: 'Nói chuyện' } },
            { id: 'd', label: { en: 'Sitting', vi: 'Ngồi' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'May the person copy the materials?',
            vi: 'Người đó có được phô-tô tài liệu không?'
          },
          choices: [
            { id: 'a', label: { en: 'Yes', vi: 'Có' } },
            { id: 'b', label: { en: 'No', vi: 'Không' } },
            { id: 'c', label: { en: 'Only outside', vi: 'Chỉ ở ngoài' } },
            { id: 'd', label: { en: 'Not said', vi: 'Không nói' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: {
            en: 'Where should the materials be placed?',
            vi: 'Tài liệu nên đặt ở đâu?'
          },
          choices: [
            { id: 'a', label: { en: 'On the desk', vi: 'Lên bàn' } },
            { id: 'b', label: { en: 'On the floor', vi: 'Xuống sàn' } },
            { id: 'c', label: { en: 'In the meeting room', vi: 'Trong phòng họp' } },
            { id: 'd', label: { en: 'Outside', vi: 'Bên ngoài' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson15-factory',
      title: { en: 'At the factory', vi: 'Ở nhà máy' },
      lines: [
        {
          jp: 'この 工場では 服と 製品を 作っています。',
          romaji: 'Kono kōjō de wa fuku to seihin o tsukutte imasu.',
          meaning: {
            en: 'At this factory they make clothes and products.',
            vi: 'Ở nhà máy này họ làm quần áo và sản phẩm.'
          },
          ruby: [
            { base: '工', reading: 'こう' },
            { base: '場', reading: 'じょう' },
            { base: '服', reading: 'ふく' },
            { base: '製', reading: 'せい' },
            { base: '品', reading: 'ひん' },
            { base: '作', reading: 'つく' }
          ]
        },
        {
          jp: 'カタログは ここに 置いて あります。',
          romaji: 'Katarogu wa koko ni oite arimasu.',
          meaning: {
            en: 'The catalogs are placed here.',
            vi: 'Ca-ta-lô đặt ở đây.'
          },
          ruby: [{ base: '置', reading: 'お' }]
        },
        {
          jp: '見ても いいですが、売る 部屋に 入っては いけません。',
          romaji: 'Mite mo ii desu ga, uru heya ni haitte wa ikemasen.',
          meaning: {
            en: 'You may look, but you must not enter the sales room.',
            vi: 'Xem thì được, nhưng không được vào phòng bán hàng.'
          },
          ruby: [
            { base: '見', reading: 'み' },
            { base: '売', reading: 'う' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '入', reading: 'はい' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What does the factory make?', vi: 'Nhà máy làm gì?' },
          choices: [
            { id: 'a', label: { en: 'Clothes and products', vi: 'Quần áo và sản phẩm' } },
            { id: 'b', label: { en: 'Software only', vi: 'Chỉ phần mềm' } },
            { id: 'c', label: { en: 'Food', vi: 'Thức ăn' } },
            { id: 'd', label: { en: 'Cars', vi: 'Xe ô tô' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'Where are the catalogs?', vi: 'Ca-ta-lô ở đâu?' },
          choices: [
            { id: 'a', label: { en: 'Here (where indicated)', vi: 'Ở đây' } },
            { id: 'b', label: { en: 'In the sales room', vi: 'Trong phòng bán' } },
            { id: 'c', label: { en: 'At city hall', vi: 'Ở ủy ban thành phố' } },
            { id: 'd', label: { en: 'Not said', vi: 'Không nói' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: {
            en: 'What must visitors not do?',
            vi: 'Khách không được làm gì?'
          },
          choices: [
            { id: 'a', label: { en: 'Enter the sales room', vi: 'Vào phòng bán hàng' } },
            { id: 'b', label: { en: 'Look at catalogs', vi: 'Xem ca-ta-lô' } },
            { id: 'c', label: { en: 'Work at the factory', vi: 'Làm việc ở nhà máy' } },
            { id: 'd', label: { en: 'Buy products', vi: 'Mua sản phẩm' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Occupations', vi: 'Nghề nghiệp' },
      includeInQuiz: false,
      intro: {
        en: 'Common job titles grouped for reference.',
        vi: 'Tên nghề thường gặp, nhóm tham khảo.'
      },
      items: [
        {
          kana: 'かいしゃいん',
          kanji: '会社員',
          romaji: 'kaishain',
          meaning: { en: 'company employee', vi: 'nhân viên công ty' },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '員', reading: 'いん' }
          ]
        },
        {
          kana: 'こうむいん',
          kanji: '公務員',
          romaji: 'kōmuin',
          meaning: { en: 'public servant, government worker', vi: 'công chức' },
          ruby: [
            { base: '公', reading: 'こう' },
            { base: '務', reading: 'む' },
            { base: '員', reading: 'いん' }
          ]
        },
        {
          kana: 'えきいん',
          kanji: '駅員',
          romaji: 'ekiin',
          meaning: { en: 'station staff', vi: 'nhân viên nhà ga' },
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '員', reading: 'いん' }
          ]
        },
        {
          kana: 'ぎんこういん',
          kanji: '銀行員',
          romaji: 'ginkōin',
          meaning: { en: 'bank clerk', vi: 'nhân viên ngân hàng' },
          ruby: [
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '員', reading: 'いん' }
          ]
        },
        {
          kana: 'ゆうびんきょくいん',
          kanji: '郵便局員',
          romaji: 'yūbinkyokuin',
          meaning: { en: 'post office worker', vi: 'nhân viên bưu điện' },
          ruby: [
            { base: '郵', reading: 'ゆう' },
            { base: '便', reading: 'びん' },
            { base: '局', reading: 'きょく' },
            { base: '員', reading: 'いん' }
          ]
        },
        {
          kana: 'てんいん',
          kanji: '店員',
          romaji: 'tenin',
          meaning: { en: 'shop clerk', vi: 'nhân viên cửa hàng' },
          ruby: [
            { base: '店', reading: 'てん' },
            { base: '員', reading: 'いん' }
          ]
        },
        {
          kana: 'ちょうりし',
          kanji: '調理師',
          romaji: 'chōrishi',
          meaning: { en: 'chef, cook (licensed)', vi: 'đầu bếp (có chứng chỉ)' },
          ruby: [
            { base: '調', reading: 'ちょう' },
            { base: '理', reading: 'り' },
            { base: '師', reading: 'し' }
          ]
        },
        {
          kana: 'りようし',
          kanji: '理容師',
          romaji: 'riyōshi',
          meaning: { en: 'barber (licensed)', vi: 'thợ cắt tóc nam (có chứng chỉ)' },
          ruby: [
            { base: '理', reading: 'り' },
            { base: '容', reading: 'よう' },
            { base: '師', reading: 'し' }
          ]
        },
        {
          kana: 'びようし',
          kanji: '美容師',
          romaji: 'biyōshi',
          meaning: {
            en: 'hairdresser, beautician (licensed)',
            vi: 'thợ làm tóc/nail (có chứng chỉ)'
          },
          ruby: [
            { base: '美', reading: 'び' },
            { base: '容', reading: 'よう' },
            { base: '師', reading: 'し' }
          ]
        },
        {
          kana: 'きょうし',
          kanji: '教師',
          romaji: 'kyōshi',
          meaning: { en: 'teacher (school)', vi: 'giáo viên (trường học)' },
          ruby: [
            { base: '教', reading: 'きょう' },
            { base: '師', reading: 'し' }
          ]
        },
        {
          kana: 'べんごし',
          kanji: '弁護士',
          romaji: 'bengoshi',
          meaning: { en: 'lawyer', vi: 'luật sư' },
          ruby: [
            { base: '弁', reading: 'べん' },
            { base: '護', reading: 'ご' },
            { base: '士', reading: 'し' }
          ]
        },
        {
          kana: 'けんきゅうしゃ',
          kanji: '研究者',
          romaji: 'kenkyūsha',
          meaning: { en: 'researcher', vi: 'nhà nghiên cứu' },
          ruby: [
            { base: '研', reading: 'けん' },
            { base: '究', reading: 'きゅう' },
            { base: '者', reading: 'しゃ' }
          ]
        },
        {
          kana: 'いしゃ',
          kanji: '医者',
          romaji: 'isha',
          meaning: { en: 'doctor, physician', vi: 'bác sĩ' },
          ruby: [
            { base: '医', reading: 'い' },
            { base: '者', reading: 'しゃ' }
          ]
        },
        {
          kana: 'かんごし',
          kanji: '看護師',
          romaji: 'kangoshi',
          meaning: { en: 'nurse (licensed)', vi: 'y tá (có chứng chỉ)' },
          ruby: [
            { base: '看', reading: 'かん' },
            { base: '護', reading: 'ご' },
            { base: '師', reading: 'し' }
          ]
        },
        {
          kana: 'うんてんしゅ',
          kanji: '運転手',
          romaji: 'untenshu',
          meaning: { en: 'driver', vi: 'tài xế' },
          ruby: [
            { base: '運', reading: 'うん' },
            { base: '転', reading: 'てん' },
            { base: '手', reading: 'しゅ' }
          ]
        },
        {
          kana: 'けいさつかん',
          kanji: '警察官',
          romaji: 'keisatsukan',
          meaning: { en: 'police officer', vi: 'cảnh sát' },
          ruby: [
            { base: '警', reading: 'けい' },
            { base: '察', reading: 'さつ' },
            { base: '官', reading: 'かん' }
          ]
        },
        {
          kana: 'がいこうかん',
          kanji: '外交官',
          romaji: 'gaikōkan',
          meaning: { en: 'diplomat', vi: 'nhà ngoại giao' },
          ruby: [
            { base: '外', reading: 'がい' },
            { base: '交', reading: 'こう' },
            { base: '官', reading: 'かん' }
          ]
        },
        {
          kana: 'せいじか',
          kanji: '政治家',
          romaji: 'seijika',
          meaning: { en: 'politician', vi: 'chính trị gia' },
          ruby: [
            { base: '政', reading: 'せい' },
            { base: '治', reading: 'じ' },
            { base: '家', reading: 'か' }
          ]
        },
        {
          kana: 'がか',
          kanji: '画家',
          romaji: 'gaka',
          meaning: { en: 'painter, artist', vi: 'họa sĩ' },
          ruby: [
            { base: '画', reading: 'が' },
            { base: '家', reading: 'か' }
          ]
        },
        {
          kana: 'さっか',
          kanji: '作家',
          romaji: 'sakka',
          meaning: { en: 'writer, author', vi: 'nhà văn' },
          ruby: [
            { base: '作', reading: 'さっ' },
            { base: '家', reading: 'か' }
          ]
        },
        {
          kana: 'おんがくか',
          kanji: '音楽家',
          romaji: 'ongakuka',
          meaning: { en: 'musician', vi: 'nhạc sĩ' },
          ruby: [
            { base: '音', reading: 'おん' },
            { base: '楽', reading: 'がく' },
            { base: '家', reading: 'か' }
          ]
        },
        {
          kana: 'けんちくか',
          kanji: '建築家',
          romaji: 'kenchikuka',
          meaning: { en: 'architect', vi: 'kiến trúc sư' },
          ruby: [
            { base: '建', reading: 'けん' },
            { base: '築', reading: 'ちく' },
            { base: '家', reading: 'か' }
          ]
        },
        {
          kana: 'エンジニア',
          romaji: 'enjinia',
          meaning: { en: 'engineer', vi: 'kỹ sư' }
        },
        {
          kana: 'デザイナー',
          romaji: 'dezainā',
          meaning: { en: 'designer', vi: 'nhà thiết kế' }
        },
        {
          kana: 'ジャーナリスト',
          romaji: 'jānarisuto',
          meaning: { en: 'journalist', vi: 'nhà báo' }
        },
        {
          kana: 'かしゅ',
          kanji: '歌手',
          romaji: 'kashu',
          meaning: { en: 'singer', vi: 'ca sĩ' },
          ruby: [
            { base: '歌', reading: 'か' },
            { base: '手', reading: 'しゅ' }
          ]
        },
        {
          kana: 'はいゆう',
          kanji: '俳優',
          romaji: 'haiyū',
          meaning: { en: 'actor', vi: 'diễn viên' },
          ruby: [
            { base: '俳', reading: 'はい' },
            { base: '優', reading: 'ゆう' }
          ]
        },
        {
          kana: 'スポーツせんしゅ',
          kanji: 'スポーツ選手',
          romaji: 'supōtsu senshu',
          meaning: { en: 'athlete', vi: 'vận động viên' },
          ruby: [
            { base: '選', reading: 'せん' },
            { base: '手', reading: 'しゅ' }
          ]
        }
      ]
    }
  ]
};
