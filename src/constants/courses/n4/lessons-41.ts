import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 41 (あげる/くれる/もらう, ～てあげる/もらう/くれる). */
export const n4Lesson41: Lesson = {
  id: 'lesson-41',
  number: 41,
  title: {
    en: 'Giving and receiving',
    vi: 'Cho và nhận'
  },
  focus: {
    en: 'Express giving and receiving with あげる/くれる/もらう and ～てあげる/もらう/くれる, including honorific ください and humble いただき.',
    vi: 'Diễn tả cho/nhận với あげる/くれる/もらう và ～てあげる/もらう/くれる, gồm kính ngữ ください và khiêm nhường いただき.'
  },
  vocab: [
    {
      kana: 'いただきます',
      romaji: 'itadakimasu',
      meaning: {
        en: 'to receive (humble of もらいます)',
        vi: 'nhận (khiêm nhường của もらいます)'
      }
    },
    {
      kana: 'くださいます',
      romaji: 'kudasaimasu',
      meaning: {
        en: 'to give (honorific of くれます)',
        vi: 'cho (kính ngữ của くれます)'
      }
    },
    {
      kana: 'やります',
      romaji: 'yarimasu',
      meaning: {
        en: 'to give (to younger, animals, plants)',
        vi: 'cho (người dưới, động vật, thực vật)'
      }
    },
    {
      kana: 'あげます',
      kanji: '上げます',
      romaji: 'agemasu',
      meaning: { en: 'to raise, to give (outward)', vi: 'tăng; cho (chiều ra)' },
      ruby: [{ base: '上', reading: 'あ' }]
    },
    {
      kana: 'さげます',
      kanji: '下げます',
      romaji: 'sagemasu',
      meaning: { en: 'to lower, to reduce', vi: 'giảm' },
      ruby: [{ base: '下', reading: 'さ' }]
    },
    {
      kana: 'しんせつにします',
      kanji: '親切にします',
      romaji: 'shinsetsu ni shimasu',
      meaning: { en: 'to be kind (to someone)', vi: 'thân thiện, thân thiết' },
      ruby: [
        { base: '親', reading: 'しん' },
        { base: '切', reading: 'せつ' }
      ]
    },
    {
      kana: 'かわいい',
      romaji: 'kawaii',
      meaning: { en: 'cute', vi: 'dễ thương' }
    },
    {
      kana: 'めずらしい',
      kanji: '珍しい',
      romaji: 'mezurashii',
      meaning: { en: 'rare, unusual', vi: 'hiếm' },
      ruby: [{ base: '珍', reading: 'めずら' }]
    },
    {
      kana: 'おいわい',
      kanji: 'お祝い',
      romaji: 'o-iwai',
      meaning: { en: 'celebration, congratulatory gift', vi: 'chúc mừng, quà mừng' },
      ruby: [{ base: '祝', reading: 'いわ' }]
    },
    {
      kana: 'おとしだま',
      kanji: 'お年玉',
      romaji: 'o-toshidama',
      meaning: { en: 'New Year gift money', vi: 'tiền mừng tuổi' },
      ruby: [
        { base: '年', reading: 'とし' },
        { base: '玉', reading: 'だま' }
      ]
    },
    {
      kana: 'おみまい',
      kanji: 'お見舞い',
      romaji: 'o-mimai',
      meaning: { en: 'get-well visit/gift', vi: 'thăm hỏi, quà thăm hỏi' },
      ruby: [
        { base: '見', reading: 'み' },
        { base: '舞', reading: 'ま' }
      ]
    },
    {
      kana: 'きょうみ',
      kanji: '興味',
      romaji: 'kyōmi',
      meaning: {
        en: 'interest (～があります: to be interested in)',
        vi: 'hứng thú (～があります: có quan tâm đến)'
      },
      ruby: [
        { base: '興', reading: 'きょう' },
        { base: '味', reading: 'み' }
      ]
    },
    {
      kana: 'じょうほう',
      kanji: '情報',
      romaji: 'jōhō',
      meaning: { en: 'information', vi: 'thông tin' },
      ruby: [
        { base: '情', reading: 'じょう' },
        { base: '報', reading: 'ほう' }
      ]
    },
    {
      kana: 'ぶんぽう',
      kanji: '文法',
      romaji: 'bunpō',
      meaning: { en: 'grammar', vi: 'ngữ pháp' },
      ruby: [
        { base: '文', reading: 'ぶん' },
        { base: '法', reading: 'ぽう' }
      ]
    },
    {
      kana: 'はつおん',
      kanji: '発音',
      romaji: 'hatsuon',
      meaning: { en: 'pronunciation', vi: 'phát âm' },
      ruby: [
        { base: '発', reading: 'はつ' },
        { base: '音', reading: 'おん' }
      ]
    },
    {
      kana: 'さる',
      kanji: '猿',
      romaji: 'saru',
      meaning: { en: 'monkey', vi: 'con khỉ' },
      ruby: [{ base: '猿', reading: 'さる' }]
    },
    {
      kana: 'えさ',
      romaji: 'esa',
      meaning: { en: 'feed, pet food', vi: 'thức ăn (cho vật)' }
    },
    {
      kana: 'おもちゃ',
      romaji: 'omocha',
      meaning: { en: 'toy', vi: 'đồ chơi' }
    },
    {
      kana: 'えほん',
      kanji: '絵本',
      romaji: 'ehon',
      meaning: { en: 'picture book', vi: 'sách tranh' },
      ruby: [
        { base: '絵', reading: 'え' },
        { base: '本', reading: 'ほん' }
      ]
    },
    {
      kana: 'えはがき',
      kanji: '絵はがき',
      romaji: 'e-hagaki',
      meaning: { en: 'picture postcard', vi: 'bưu thiếp tranh, bưu thiếp ảnh' },
      ruby: [{ base: '絵', reading: 'え' }]
    },
    {
      kana: 'ドライバー',
      romaji: 'doraibā',
      meaning: { en: 'screwdriver', vi: 'tuốc-nơ-vít' }
    },
    {
      kana: 'ハンカチ',
      romaji: 'hankachi',
      meaning: { en: 'handkerchief', vi: 'khăn tay' }
    },
    {
      kana: 'くつした',
      kanji: '靴下',
      romaji: 'kutsushita',
      meaning: { en: 'socks', vi: 'tất, vớ' },
      ruby: [
        { base: '靴', reading: 'くつ' },
        { base: '下', reading: 'した' }
      ]
    },
    {
      kana: 'てぶくろ',
      kanji: '手袋',
      romaji: 'tebukuro',
      meaning: { en: 'gloves', vi: 'găng tay' },
      ruby: [
        { base: '手', reading: 'て' },
        { base: '袋', reading: 'ぶくろ' }
      ]
    },
    {
      kana: 'ようちえん',
      kanji: '幼稚園',
      romaji: 'yōchien',
      meaning: { en: 'kindergarten', vi: 'trường mầm non' },
      ruby: [
        { base: '幼', reading: 'よう' },
        { base: '稚', reading: 'ち' },
        { base: '園', reading: 'えん' }
      ]
    },
    {
      kana: 'だんぼう',
      kanji: '暖房',
      romaji: 'danbō',
      meaning: { en: 'heating', vi: 'máy sưởi, điều hòa chiều nóng' },
      ruby: [
        { base: '暖', reading: 'だん' },
        { base: '房', reading: 'ぼう' }
      ]
    },
    {
      kana: 'れいぼう',
      kanji: '冷房',
      romaji: 'reibō',
      meaning: { en: 'air conditioning (cooling)', vi: 'máy lạnh, điều hòa chiều lạnh' },
      ruby: [
        { base: '冷', reading: 'れい' },
        { base: '房', reading: 'ぼう' }
      ]
    },
    {
      kana: 'おんど',
      kanji: '温度',
      romaji: 'ondo',
      meaning: { en: 'temperature', vi: 'nhiệt độ' },
      ruby: [
        { base: '温', reading: 'おん' },
        { base: '度', reading: 'ど' }
      ]
    },
    {
      kana: 'ひとこと',
      kanji: '一言',
      romaji: 'hitokoto',
      meaning: { en: 'a few words, a word', vi: 'đôi lời' },
      ruby: [
        { base: '一', reading: 'ひと' },
        { base: '言', reading: 'こと' }
      ]
    },
    {
      kana: '～ずつ',
      romaji: '~zutsu',
      meaning: { en: 'each ~, ~ at a time', vi: 'từng ~' }
    },
    {
      kana: 'ふたり',
      kanji: '二人',
      romaji: 'futari',
      meaning: { en: 'two people, a couple', vi: 'cặp đôi, hai người' },
      ruby: [
        { base: '二', reading: 'ふた' },
        { base: '人', reading: 'り' }
      ]
    },
    {
      kana: 'おたく',
      kanji: 'お宅',
      romaji: 'o-taku',
      meaning: { en: 'your home (honorific)', vi: 'nhà (kính ngữ của うち/いえ)' },
      ruby: [{ base: '宅', reading: 'たく' }]
    },
    {
      kana: 'むかしばなし',
      kanji: '昔話',
      romaji: 'mukashibanashi',
      meaning: { en: 'folk tale', vi: 'truyện cổ tích' },
      ruby: [
        { base: '昔', reading: 'むかし' },
        { base: '話', reading: 'ばなし' }
      ]
    },
    {
      kana: 'たすけます',
      kanji: '助けます',
      romaji: 'tasukemasu',
      meaning: { en: 'to help, to save', vi: 'giúp, giúp đỡ' },
      ruby: [{ base: '助', reading: 'たす' }]
    },
    {
      kana: 'いじめます',
      romaji: 'ijimemasu',
      meaning: { en: 'to bully', vi: 'bắt nạt' }
    },
    {
      kana: 'かめ',
      kanji: '亀',
      romaji: 'kame',
      meaning: { en: 'turtle', vi: 'con rùa' },
      ruby: [{ base: '亀', reading: 'かめ' }]
    },
    {
      kana: 'おひめさま',
      kanji: 'お姫様',
      romaji: 'o-hime-sama',
      meaning: { en: 'princess', vi: 'nàng công chúa' },
      ruby: [
        { base: '姫', reading: 'ひめ' },
        { base: '様', reading: 'さま' }
      ]
    },
    {
      kana: 'くらします',
      kanji: '暮らします',
      romaji: 'kurashimasu',
      meaning: { en: 'to live, to spend life', vi: 'sinh sống' },
      ruby: [{ base: '暮', reading: 'く' }]
    },
    {
      kana: 'りく',
      kanji: '陸',
      romaji: 'riku',
      meaning: { en: 'land, shore', vi: 'đất liền' },
      ruby: [{ base: '陸', reading: 'りく' }]
    },
    {
      kana: 'けむり',
      kanji: '煙',
      romaji: 'kemuri',
      meaning: { en: 'smoke', vi: 'khói' },
      ruby: [{ base: '煙', reading: 'けむ' }]
    },
    {
      kana: 'まっしろ',
      kanji: '真っ白',
      romaji: 'masshiro',
      meaning: { en: 'pure white (na-adj)', vi: 'trắng toát (tính từ な)' },
      ruby: [
        { base: '真', reading: 'ま' },
        { base: '白', reading: 'しろ' }
      ]
    },
    {
      kana: 'なかみ',
      kanji: '中身',
      romaji: 'nakami',
      meaning: { en: 'contents, inside', vi: 'nội dung bên trong' },
      ruby: [
        { base: '中', reading: 'なか' },
        { base: '身', reading: 'み' }
      ]
    }
  ],
  phrases: [
    {
      kana: '結婚 おめでとう ございます。',
      kanji: '結婚 おめでとう ございます。',
      romaji: 'Kekkon omedetō gozaimasu.',
      meaning: { en: 'Congratulations on your marriage.', vi: 'Chúc mừng đám cưới.' },
      ruby: [
        { base: '結', reading: 'けっ' },
        { base: '婚', reading: 'こん' }
      ]
    },
    {
      kana: 'どうぞ お幸せに。',
      kanji: 'どうぞ お幸せに。',
      romaji: 'Dōzo o-shiawase ni.',
      meaning: { en: 'Please be happy together.', vi: 'Chúc hai người hạnh phúc.' },
      ruby: [{ base: '幸', reading: 'しあわ' }]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson41-wedding',
      title: { en: 'Wedding toast', vi: 'Chúc mừng đám cưới' },
      speakers: [
        { id: 'host', name: '司会' },
        { id: 'guests', name: '皆' },
        { id: 'watt', name: 'ワット' },
        { id: 'izumi', name: 'イズミ' }
      ],
      lines: [
        {
          speakerId: 'host',
          jp: 'ワットさん、イズミさん、結婚 おめでとう ございます。では 乾杯！',
          romaji: 'Watto-san, Izumi-san, kekkon omedetō gozaimasu. De wa kanpai!',
          meaning: {
            en: 'Mr. Watt, Ms. Izumi, congratulations on your marriage. A toast!',
            vi: 'Anh Watt, chị Izumi, chúc mừng đám cưới. Nào nâng ly!'
          },
          ruby: [
            { base: '結', reading: 'けっ' },
            { base: '婚', reading: 'こん' },
            { base: '乾', reading: 'かん' },
            { base: '杯', reading: 'ぱい' }
          ]
        },
        {
          speakerId: 'guests',
          jp: '乾杯！',
          romaji: 'Kanpai!',
          meaning: { en: 'Cheers!', vi: 'Nào nâng ly!' },
          ruby: [
            { base: '乾', reading: 'かん' },
            { base: '杯', reading: 'ぱい' }
          ]
        },
        {
          speakerId: 'host',
          jp: '続いて、ゲストの 方から 一言 お願い します。',
          romaji: 'Tsuzuite, gesuto no kata kara hitokoto onegai shimasu.',
          meaning: {
            en: 'Next, we would like a few words from our guests.',
            vi: 'Tiếp theo xin mời các vị khách phát biểu đôi lời chúc mừng.'
          },
          ruby: [
            { base: '続', reading: 'つづ' },
            { base: '方', reading: 'かた' },
            { base: '一', reading: 'ひと' },
            { base: '言', reading: 'こと' },
            { base: '願', reading: 'ねが' }
          ]
        },
        {
          speakerId: 'watt',
          jp: '去年の 夏、ワット先生に 英語を 教えて いただきました。授業は とても 楽しく、実は イズミさんも 同じ クラス だったんです。',
          romaji:
            'Kyonen no natsu, Watto-sensei ni eigo o oshiete itadakimashita. Jugyō wa totemo tanoshiku, jitsu wa Izumi-san mo onaji kurasu datta n desu.',
          meaning: {
            en: 'Last summer Professor Watt taught me English. Class was very fun, and actually Ms. Izumi was in the same class.',
            vi: 'Hè năm ngoái tôi được thầy Watt dạy tiếng Anh. Giờ học rất vui; thực ra chị Izumi cũng cùng lớp.'
          },
          ruby: [
            { base: '去', reading: 'きょ' },
            { base: '年', reading: 'ねん' },
            { base: '夏', reading: 'なつ' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' },
            { base: '教', reading: 'おし' },
            { base: '授', reading: 'じゅ' },
            { base: '業', reading: 'ぎょう' },
            { base: '楽', reading: 'たの' },
            { base: '実', reading: 'じつ' },
            { base: '同', reading: 'おな' }
          ]
        },
        {
          speakerId: 'watt',
          jp: '先生は 整理の 本も くださいました。研究室は いつも きれい ですから、きっと お宅も 素敵 だと 思います。',
          romaji:
            'Sensei wa seiri no hon mo kudasaimashita. Kenkyūshitsu wa itsumo kirei desu kara, kitto o-taku mo suteki da to omoimasu.',
          meaning: {
            en: 'The professor also gave me a book on organizing. His office is always clean, so I am sure your home is wonderful too.',
            vi: 'Thầy còn tặng tôi cuốn sách về sắp xếp. Phòng nghiên cứu lúc nào cũng sạch sẽ, chắc nhà hai người cũng tuyệt lắm.'
          },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '整', reading: 'せい' },
            { base: '理', reading: 'り' },
            { base: '本', reading: 'ほん' },
            { base: '研', reading: 'けん' },
            { base: '究', reading: 'きゅう' },
            { base: '室', reading: 'しつ' },
            { base: '宅', reading: 'たく' },
            { base: '素', reading: 'す' },
            { base: '敵', reading: 'てき' },
            { base: '思', reading: 'おも' }
          ]
        },
        {
          speakerId: 'watt',
          jp: 'どうぞ お幸せに。',
          romaji: 'Dōzo o-shiawase ni.',
          meaning: { en: 'Please be happy.', vi: 'Xin chúc hai người hạnh phúc.' },
          ruby: [{ base: '幸', reading: 'しあわ' }]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N を あげます / N を くれます / N を もらいます',
      highlights: ['を', 'あげ', 'くれ', 'もら'],
      title: { en: 'Giving and receiving things', vi: 'Cho và nhận đồ vật' },
      explanation: {
        en: 'あげる: I/you give to someone else. くれる: someone gives to me/us. もらう: I receive from someone. Honorific: くださいます (they give to me). Humble: いただきます (I receive).',
        vi: 'あげる: tôi/bạn cho người khác. くれる: ai đó cho tôi/chúng ta. もらう: tôi nhận từ ai. Kính ngữ: くださいます. Khiêm nhường: いただきます.'
      },
      examples: [
        {
          jp: '田中さんが 私に 皿を くれました。',
          romaji: 'Tanaka-san ga watashi ni sara o kuremashita.',
          meaning: { en: 'Mr. Tanaka gave me a plate.', vi: 'Anh Tanaka tặng tôi cái đĩa.' },
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '私', reading: 'わたし' },
            { base: '皿', reading: 'さら' }
          ]
        },
        {
          jp: '社長が 私に お土産を くださいました。',
          romaji: 'Shachō ga watashi ni o-miyage o kudasaimashita.',
          meaning: {
            en: 'The company president gave me a souvenir.',
            vi: 'Giám đốc tặng tôi quà.'
          },
          ruby: [
            { base: '社', reading: 'しゃ' },
            { base: '長', reading: 'ちょう' },
            { base: '私', reading: 'わたし' },
            { base: '土', reading: 'み' },
            { base: '産', reading: 'やげ' }
          ]
        },
        {
          jp: '母、サルに お菓子を あげて も いいですか。',
          romaji: 'Haha, saru ni o-kashi o agete mo ii desu ka.',
          meaning: {
            en: 'Mom, may I give candy to the monkey?',
            vi: 'Mẹ ơi, con cho con khỉ kẹo được không?'
          },
          ruby: [
            { base: '母', reading: 'はは' },
            { base: '菓', reading: 'か' },
            { base: '子', reading: 'こ' }
          ]
        }
      ],
      answers: {
        explanation: {
          en: 'Use やります for giving to children, animals, or plants - more neutral than あげます.',
          vi: 'Dùng やります khi cho trẻ em, động vật, thực vật - trung tính hơn あげます.'
        },
        examples: [
          {
            jp: '……だめよ。あれは 「サルに 食べ物を やっては いけません」 よ。',
            romaji: '……Dame yo. Are wa 「Saru ni tabemono o yatte wa ikemasen」 yo.',
            meaning: {
              en: '...No. That sign says "Do not feed the monkeys."',
              vi: '...Không được. Kia có ghi "Không được cho (khi) ăn" đấy.'
            },
            ruby: [
              { base: '食', reading: 'た' },
              { base: '物', reading: 'もの' }
            ]
          }
        ]
      }
    },
    {
      pattern: '～て あげます / ～て もらいます / ～て くれます',
      highlights: ['て', 'あげ', 'もら', 'くれ'],
      title: { en: 'Giving and receiving actions', vi: 'Cho và nhận hành vi' },
      explanation: {
        en: 'て-form + あげる/もらう/くれる for favors: 部長が 報告書を 直して くれました. Direction matches the thing-giving verbs.',
        vi: 'Thể て + あげる/もらう/くれる cho việc giúp: 部長が 報告書を 直して くれました. Hướng giống động từ cho/nhận đồ.'
      },
      explanationRuby: [
        { base: '部', reading: 'ぶ' },
        { base: '長', reading: 'ちょう' },
        { base: '報', reading: 'ほう' },
        { base: '告', reading: 'こく' },
        { base: '書', reading: 'しょ' },
        { base: '直', reading: 'なお' },
        { base: '部', reading: 'ぶ' },
        { base: '長', reading: 'ちょう' },
        { base: '報', reading: 'ほう' },
        { base: '告', reading: 'こく' },
        { base: '書', reading: 'しょ' },
        { base: '直', reading: 'なお' }
      ],
      examples: [
        {
          jp: '課長が 車を 直して くれました。',
          romaji: 'Kachō ga kuruma o naoshite kuremashita.',
          meaning: {
            en: 'The section chief fixed my car for me.',
            vi: 'Trưởng phòng sửa xe cho tôi.'
          },
          ruby: [
            { base: '課', reading: 'か' },
            { base: '長', reading: 'ちょう' },
            { base: '車', reading: 'くるま' },
            { base: '直', reading: 'なお' }
          ]
        },
        {
          jp: '妻が 茶道を 教えて くれました。',
          romaji: 'Tsuma ga sadō o oshiete kuremashita.',
          meaning: { en: 'My wife taught me tea ceremony.', vi: 'Vợ tôi dạy trà đạo cho tôi.' },
          ruby: [
            { base: '妻', reading: 'つま' },
            { base: '茶', reading: 'さ' },
            { base: '道', reading: 'どう' },
            { base: '教', reading: 'おし' }
          ]
        },
        {
          jp: '息子に 紙の 飛行機を 作って あげました。',
          romaji: 'Musuko ni kami no hikōki o tsukutte agemashita.',
          meaning: {
            en: 'I made a paper airplane for my son.',
            vi: 'Tôi làm máy bay giấy cho con trai.'
          },
          ruby: [
            { base: '息', reading: 'むす' },
            { base: '子', reading: 'こ' },
            { base: '紙', reading: 'かみ' },
            { base: '飛', reading: 'ひ' },
            { base: '行', reading: 'い' },
            { base: '機', reading: 'き' },
            { base: '作', reading: 'つく' }
          ]
        }
      ]
    },
    {
      pattern: '～て ください / ～ていただけませんか',
      highlights: ['て', 'ください'],
      title: { en: 'Honorific favors (てください)', vi: 'Nhờ vả kính ngữ (てください)' },
      explanation: {
        en: 'てください is honorific "do for me": 新しい コピー機の 使い方を 教えて ください. Softer request: 教えていただけませんか (Lesson 26).',
        vi: 'てください kính ngữ "làm giúp tôi": 新しい コピー機の 使い方を 教えて ください. Nhẹ hơn: 教えていただけませんか (bài 26).'
      },
      explanationRuby: [
        { base: '新', reading: 'あたら' },
        { base: '機', reading: 'き' },
        { base: '使', reading: 'つか' },
        { base: '方', reading: 'かた' },
        { base: '教', reading: 'おし' },
        { base: '教', reading: 'おし' },
        { base: '新', reading: 'あたら' },
        { base: '機', reading: 'き' },
        { base: '使', reading: 'つか' },
        { base: '方', reading: 'かた' },
        { base: '教', reading: 'おし' },
        { base: '教', reading: 'おし' }
      ],
      examples: [
        {
          jp: '新しい コピー機の 使い方を 教えて ください。',
          romaji: 'Atarashii kopī-ki no tsukaikata o oshiete kudasai.',
          meaning: {
            en: 'Please teach me how to use the new copier.',
            vi: 'Anh/chị chỉ cho tôi cách dùng máy photocopy mới được không?'
          },
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '機', reading: 'き' },
            { base: '使', reading: 'つか' },
            { base: '方', reading: 'かた' },
            { base: '教', reading: 'おし' }
          ]
        }
      ]
    },
    {
      pattern: 'N に V-て あげます (commemorative)',
      highlights: ['に', 'て', 'あげ'],
      title: {
        en: 'Doing something as a gift (に...てあげる)',
        vi: 'Làm quà kỷ niệm (に...てあげる)'
      },
      explanation: {
        en: 'に before てあげる can mark doing something as a gift or memorial: 結婚の お祝いに 皿を あげます, 北海道旅行の お土産に 人形を 買いました.',
        vi: 'に trước てあげる có thể chỉ làm gì như quà/kỷ niệm: 結婚の お祝いに 皿を あげます, 北海道旅行の お土産に 人形を 買いました.'
      },
      explanationRuby: [
        { base: '結', reading: 'けっ' },
        { base: '婚', reading: 'こん' },
        { base: '祝', reading: 'いわ' },
        { base: '皿', reading: 'さら' },
        { base: '北', reading: 'ほっ' },
        { base: '海', reading: 'うみ' },
        { base: '道', reading: 'どう' },
        { base: '旅', reading: 'りょ' },
        { base: '行', reading: 'い' },
        { base: '土', reading: 'み' },
        { base: '産', reading: 'やげ' },
        { base: '人', reading: 'にん' },
        { base: '形', reading: 'ぎょう' },
        { base: '買', reading: 'か' },
        { base: '結', reading: 'けっ' },
        { base: '婚', reading: 'こん' },
        { base: '祝', reading: 'いわ' },
        { base: '皿', reading: 'さら' },
        { base: '北', reading: 'ほっ' },
        { base: '海', reading: 'うみ' },
        { base: '道', reading: 'どう' },
        { base: '旅', reading: 'りょ' },
        { base: '行', reading: 'い' },
        { base: '土', reading: 'み' },
        { base: '産', reading: 'やげ' },
        { base: '人', reading: 'にん' },
        { base: '形', reading: 'ぎょう' },
        { base: '買', reading: 'か' }
      ],
      examples: [
        {
          jp: '田中さんが 結婚の お祝いに この 皿を くださいました。',
          romaji: 'Tanaka-san ga kekkon no o-iwai ni kono sara o kudasaimashita.',
          meaning: {
            en: 'Mr. Tanaka gave us this plate as a wedding gift.',
            vi: 'Anh Tanaka tặng tôi cái đĩa này làm quà cưới.'
          },
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '結', reading: 'けっ' },
            { base: '婚', reading: 'こん' },
            { base: '祝', reading: 'いわ' },
            { base: '皿', reading: 'さら' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson41-urashima',
      title: { en: 'The turtle and the fisherman', vi: 'Chàng trai và con rùa' },
      lines: [
        {
          jp: 'むかし、優しい 男の子が いました。子どもたちに いじめられた 亀を 助けて あげました。',
          romaji:
            'Mukashi, yasashii otoko no ko ga imashita. Kodomotachi ni ijimerareta kame o tasukete agemashita.',
          meaning: {
            en: 'Long ago there was a kind boy. He helped a turtle that children were bullying.',
            vi: 'Ngày xưa có chàng trai hiền lành. Anh giúp con rùa bị bọn trẻ bắt nạt.'
          },
          ruby: [
            { base: '優', reading: 'やさ' },
            { base: '男', reading: 'おとこ' },
            { base: '子', reading: 'こ' },
            { base: '子', reading: 'こ' },
            { base: '亀', reading: 'かめ' },
            { base: '助', reading: 'たす' }
          ]
        },
        {
          jp: '亀は お礼に 男の子を 海の 宮殿へ 連れて 行き、お姫様に 会わせて くれました。',
          romaji:
            'Kame wa o-rei ni otoko no ko o umi no kyūden e tsurete iki, o-hime-sama ni awasete kuremashita.',
          meaning: {
            en: 'The turtle took the boy to a palace under the sea as thanks and let him meet the princess.',
            vi: 'Con rùa đưa chàng tới cung điện dưới biển để cảm ơn và giới thiệu với nàng công chúa.'
          },
          ruby: [
            { base: '亀', reading: 'かめ' },
            { base: '礼', reading: 'れい' },
            { base: '男', reading: 'おとこ' },
            { base: '子', reading: 'こ' },
            { base: '海', reading: 'うみ' },
            { base: '宮', reading: 'きゅう' },
            { base: '殿', reading: 'でん' },
            { base: '連', reading: 'つ' },
            { base: '行', reading: 'い' },
            { base: '姫', reading: 'ひめ' },
            { base: '様', reading: 'さま' },
            { base: '会', reading: 'あ' }
          ]
        },
        {
          jp: '男の子は 楽しく 暮らしましたが、やがて 陸の ことを 思い出し、箱の 中身を 開けて しまいました。',
          romaji:
            'Otoko no ko wa tanoshiku kurashimashita ga, yagate riku no koto o omoidashi, hako no nakami o akete shimaimashita.',
          meaning: {
            en: 'The boy lived happily, but eventually remembered the land, opened the box, and...',
            vi: 'Chàng sống vui vẻ, nhưng rồi nhớ đất liền, mở hộp ra và...'
          },
          ruby: [
            { base: '男', reading: 'おとこ' },
            { base: '子', reading: 'こ' },
            { base: '楽', reading: 'たの' },
            { base: '暮', reading: 'く' },
            { base: '陸', reading: 'りく' },
            { base: '思', reading: 'おも' },
            { base: '出', reading: 'だ' },
            { base: '箱', reading: 'はこ' },
            { base: '中', reading: 'なか' },
            { base: '身', reading: 'み' },
            { base: '開', reading: 'あ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What did the boy do for the turtle?',
            vi: 'Chàng trai giúp con rùa thế nào?'
          },
          choices: [
            { id: 'a', label: { en: 'Saved it from bullying', vi: 'Cứu khỏi bị bắt nạt' } },
            { id: 'b', label: { en: 'Sold it at a shop', vi: 'Bán ở cửa hàng' } },
            { id: 'c', label: { en: 'Measured its weight', vi: 'Cân trọng lượng' } },
            { id: 'd', label: { en: 'Taught it grammar', vi: 'Dạy ngữ pháp' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What did the turtle do in return?', vi: 'Con rùa đáp lại thế nào?' },
          choices: [
            {
              id: 'a',
              label: { en: 'Took him to a sea palace', vi: 'Đưa tới cung điện dưới biển' }
            },
            { id: 'b', label: { en: 'Gave him a screwdriver', vi: 'Tặng tuốc-nơ-vít' } },
            { id: 'c', label: { en: 'Fixed his car', vi: 'Sửa xe cho anh' } },
            { id: 'd', label: { en: 'Sent a weather forecast', vi: 'Gửi dự báo thời tiết' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Useful services', vi: 'Thông tin bổ ích' },
      introTerm: {
        jp: '便利情報',
        ruby: [
          { base: '便', reading: 'べん' },
          { base: '利', reading: 'り' },
          { base: '情', reading: 'じょう' },
          { base: '報', reading: 'ほう' }
        ]
      },
      layout: 'stacked',
      rows: [
        {
          jp: '貸衣装',
          ruby: [
            { base: '貸', reading: 'か' },
            { base: '衣', reading: 'い' },
            { base: '装', reading: 'しょう' }
          ],
          meaning: { en: 'Formal wear rental', vi: 'Trang phục cho thuê' }
        },
        {
          jp: '民宿',
          ruby: [
            { base: '民', reading: 'みん' },
            { base: '宿', reading: 'しゅく' }
          ],
          meaning: { en: 'Family-run inn', vi: 'Nhà nghỉ gia đình' }
        },
        {
          jp: 'レンタルサービス',
          meaning: { en: 'Rental service', vi: 'Dịch vụ cho thuê' }
        },
        {
          jp: '便利屋',
          ruby: [
            { base: '便', reading: 'べん' },
            { base: '利', reading: 'り' },
            { base: '屋', reading: 'や' }
          ],
          meaning: { en: 'Handyman / errand service', vi: 'Dịch vụ giúp việc' }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Proper nouns', vi: 'Tên riêng' },
      includeInQuiz: false,
      items: [
        {
          kana: 'うらしまたろう',
          kanji: '浦島太郎',
          romaji: 'Urashima Tarō',
          meaning: {
            en: 'Urashima Taro (folk tale hero)',
            vi: 'Urashima Taro (nhân vật truyện cổ tích)'
          },
          ruby: [
            { base: '浦', reading: 'うら' },
            { base: '島', reading: 'しま' },
            { base: '太', reading: 'た' },
            { base: '郎', reading: 'ろう' }
          ]
        }
      ]
    }
  ]
};
