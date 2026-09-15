import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 11 (counters, duration, かかります, だけ). */
export const n5Lesson11: Lesson = {
  id: 'lesson-11',
  number: 11,
  title: {
    en: 'Counting and duration',
    vi: 'Đếm và thời gian'
  },
  focus: {
    en: 'Count things and people, say how long something takes, and use だけ for "only".',
    vi: 'Đếm đồ vật và người, nói mất bao lâu, và dùng だけ nghĩa "chỉ".'
  },
  vocab: [
    {
      kana: 'います',
      romaji: 'imasu',
      meaning: {
        en: 'to be (people); to live (e.g. 日本に います)',
        vi: 'có (người); sống, ở (vd. 日本に います)'
      }
    },
    {
      kana: 'かかります',
      romaji: 'kakarimasu',
      meaning: { en: 'to take (time or money)', vi: 'mất, tốn (thời gian, tiền)' }
    },
    {
      kana: 'やすみます',
      kanji: '休みます',
      romaji: 'yasumimasu',
      meaning: {
        en: 'to take time off (~会社を 休みます)',
        vi: 'nghỉ (~会社を 休みます: nghỉ làm)'
      },
      ruby: [{ base: '休', reading: 'やす' }]
    },
    {
      kana: 'ひとつ',
      kanji: '一つ',
      romaji: 'hitotsu',
      meaning: { en: 'one (general counter)', vi: 'một cái' },
      ruby: [{ base: '一', reading: 'ひと' }]
    },
    {
      kana: 'ふたつ',
      kanji: '二つ',
      romaji: 'futatsu',
      meaning: { en: 'two (general counter)', vi: 'hai cái' },
      ruby: [{ base: '二', reading: 'ふた' }]
    },
    {
      kana: 'みっつ',
      kanji: '三つ',
      romaji: 'mittsu',
      meaning: { en: 'three (general counter)', vi: 'ba cái' },
      ruby: [{ base: '三', reading: 'みっ' }]
    },
    {
      kana: 'よっつ',
      kanji: '四つ',
      romaji: 'yottsu',
      meaning: { en: 'four (general counter)', vi: 'bốn cái' },
      ruby: [{ base: '四', reading: 'よっ' }]
    },
    {
      kana: 'いつつ',
      kanji: '五つ',
      romaji: 'itsutsu',
      meaning: { en: 'five (general counter)', vi: 'năm cái' },
      ruby: [{ base: '五', reading: 'いつ' }]
    },
    {
      kana: 'むっつ',
      kanji: '六つ',
      romaji: 'muttsu',
      meaning: { en: 'six (general counter)', vi: 'sáu cái' },
      ruby: [{ base: '六', reading: 'むっ' }]
    },
    {
      kana: 'ななつ',
      kanji: '七つ',
      romaji: 'nanatsu',
      meaning: { en: 'seven (general counter)', vi: 'bảy cái' },
      ruby: [{ base: '七', reading: 'なな' }]
    },
    {
      kana: 'やっつ',
      kanji: '八つ',
      romaji: 'yattsu',
      meaning: { en: 'eight (general counter)', vi: 'tám cái' },
      ruby: [{ base: '八', reading: 'やっ' }]
    },
    {
      kana: 'ここのつ',
      kanji: '九つ',
      romaji: 'kokonotsu',
      meaning: { en: 'nine (general counter)', vi: 'chín cái' },
      ruby: [{ base: '九', reading: 'ここの' }]
    },
    {
      kana: 'とお',
      kanji: '十',
      romaji: 'tō',
      meaning: { en: 'ten (general counter)', vi: 'mười cái' },
      ruby: [{ base: '十', reading: 'とお' }]
    },
    {
      kana: 'いくつ',
      romaji: 'ikutsu',
      meaning: { en: 'how many (general counter)', vi: 'mấy cái, bao nhiêu cái' }
    },
    {
      kana: 'ひとり',
      kanji: '一人',
      romaji: 'hitori',
      meaning: { en: 'one person', vi: 'một người' },
      ruby: [
        { base: '一', reading: 'ひと' },
        { base: '人', reading: 'り' }
      ]
    },
    {
      kana: 'ふたり',
      kanji: '二人',
      romaji: 'futari',
      meaning: { en: 'two people', vi: 'hai người' },
      ruby: [
        { base: '二', reading: 'ふた' },
        { base: '人', reading: 'り' }
      ]
    },
    {
      kana: '～にん',
      kanji: '～人',
      romaji: '~nin',
      meaning: { en: 'counter for people', vi: 'counters người' },
      ruby: [{ base: '人', reading: 'にん' }]
    },
    {
      kana: '～だい',
      kanji: '～台',
      romaji: '~dai',
      meaning: { en: 'counter for machines, vehicles', vi: 'counter máy móc, xe cộ' },
      ruby: [{ base: '台', reading: 'だい' }]
    },
    {
      kana: '～まい',
      kanji: '～枚',
      romaji: '~mai',
      meaning: { en: 'counter for flat objects', vi: 'counter vật mỏng (giấy, tem...)' },
      ruby: [{ base: '枚', reading: 'まい' }]
    },
    {
      kana: '～かい',
      kanji: '～回',
      romaji: '~kai',
      meaning: { en: 'counter for times, occurrences', vi: 'counter lần' },
      ruby: [{ base: '回', reading: 'かい' }]
    },
    {
      kana: 'りんご',
      romaji: 'ringo',
      meaning: { en: 'apple', vi: 'táo' }
    },
    {
      kana: 'みかん',
      romaji: 'mikan',
      meaning: { en: 'mandarin orange', vi: 'quýt' }
    },
    {
      kana: 'サンドイッチ',
      romaji: 'sandoitchi',
      meaning: { en: 'sandwich', vi: 'bánh sandwich' }
    },
    {
      kana: 'カレー[ライス]',
      romaji: 'karē [raisu]',
      meaning: { en: 'curry [rice]', vi: 'cà ri [cơm]' }
    },
    {
      kana: 'アイスクリーム',
      romaji: 'aisukurīmu',
      meaning: { en: 'ice cream', vi: 'kem' }
    },
    {
      kana: 'きって',
      kanji: '切手',
      romaji: 'kitte',
      meaning: { en: 'postage stamp', vi: 'tem' },
      ruby: [{ base: '切', reading: 'きっ' }]
    },
    {
      kana: 'はがき',
      romaji: 'hagaki',
      meaning: { en: 'postcard', vi: 'bưu thiếp' }
    },
    {
      kana: 'ふうとう',
      kanji: '封筒',
      romaji: 'fūtō',
      meaning: { en: 'envelope', vi: 'phong bì' },
      ruby: [{ base: '封', reading: 'ふう' }]
    },
    {
      kana: 'りょうしん',
      kanji: '両親',
      romaji: 'ryōshin',
      meaning: { en: 'parents', vi: 'bố mẹ' },
      ruby: [{ base: '両', reading: 'りょう' }]
    },
    {
      kana: 'きょうだい',
      kanji: '兄弟',
      romaji: 'kyōdai',
      meaning: { en: 'siblings', vi: 'anh chị em' },
      ruby: [{ base: '兄', reading: 'きょう' }]
    },
    {
      kana: 'あに',
      kanji: '兄',
      romaji: 'ani',
      meaning: { en: 'my older brother', vi: 'anh trai (của tôi)' },
      ruby: [{ base: '兄', reading: 'あに' }]
    },
    {
      kana: 'おにいさん',
      kanji: 'お兄さん',
      romaji: 'onīsan',
      meaning: { en: "someone else's older brother", vi: 'anh trai (của người khác)' },
      ruby: [{ base: '兄', reading: 'にい' }]
    },
    {
      kana: 'あね',
      kanji: '姉',
      romaji: 'ane',
      meaning: { en: 'my older sister', vi: 'chị gái (của tôi)' },
      ruby: [{ base: '姉', reading: 'あね' }]
    },
    {
      kana: 'おねえさん',
      kanji: 'お姉さん',
      romaji: 'onēsan',
      meaning: { en: "someone else's older sister", vi: 'chị gái (của người khác)' },
      ruby: [{ base: '姉', reading: 'ねえ' }]
    },
    {
      kana: 'おとうと',
      kanji: '弟',
      romaji: 'otōto',
      meaning: { en: 'my younger brother', vi: 'em trai (của tôi)' },
      ruby: [{ base: '弟', reading: 'おとうと' }]
    },
    {
      kana: 'おとうとさん',
      kanji: '弟さん',
      romaji: 'otōtosan',
      meaning: { en: "someone else's younger brother", vi: 'em trai (của người khác)' },
      ruby: [{ base: '弟', reading: 'とうと' }]
    },
    {
      kana: 'いもうと',
      kanji: '妹',
      romaji: 'imōto',
      meaning: { en: 'my younger sister', vi: 'em gái (của tôi)' },
      ruby: [{ base: '妹', reading: 'いもうと' }]
    },
    {
      kana: 'いもうとさん',
      kanji: '妹さん',
      romaji: 'imōtosan',
      meaning: { en: "someone else's younger sister", vi: 'em gái (của người khác)' },
      ruby: [{ base: '妹', reading: 'もうと' }]
    },
    {
      kana: 'がいこく',
      kanji: '外国',
      romaji: 'gaikoku',
      meaning: { en: 'foreign country', vi: 'nước ngoài' },
      ruby: [{ base: '外', reading: 'がい' }]
    },
    {
      kana: 'りゅうがくせい',
      kanji: '留学生',
      romaji: 'ryūgakusei',
      meaning: { en: 'international student', vi: 'du học sinh' },
      ruby: [{ base: '留', reading: 'りゅう' }]
    },
    {
      kana: 'クラス',
      romaji: 'kurasu',
      meaning: { en: 'class', vi: 'lớp học' }
    },
    {
      kana: '～じかん',
      kanji: '～時間',
      romaji: '~jikan',
      meaning: { en: 'counter for hours (duration)', vi: 'counter tiếng' },
      ruby: [
        { base: '時', reading: 'じ' },
        { base: '間', reading: 'かん' }
      ]
    },
    {
      kana: '～しゅうかん',
      kanji: '～週間',
      romaji: '~shūkan',
      meaning: { en: 'counter for weeks', vi: 'counter tuần' },
      ruby: [{ base: '週', reading: 'しゅう' }]
    },
    {
      kana: '～かげつ',
      kanji: '～か月',
      romaji: '~kagetsu',
      meaning: { en: 'counter for months', vi: 'counter tháng' },
      ruby: [{ base: '月', reading: 'げつ' }]
    },
    {
      kana: '～ねん',
      kanji: '～年',
      romaji: '~nen',
      meaning: { en: 'counter for years', vi: 'counter năm' },
      ruby: [{ base: '年', reading: 'ねん' }]
    },
    {
      kana: '～ぐらい',
      romaji: '~gurai',
      meaning: { en: 'about ~, approximately', vi: 'khoảng ~' }
    },
    {
      kana: 'どのくらい',
      romaji: 'dono kurai',
      meaning: { en: 'how long; how much', vi: 'bao lâu; bao nhiêu' }
    },
    {
      kana: 'ぜんぶで',
      kanji: '全部で',
      romaji: 'zenbu de',
      meaning: { en: 'in total', vi: 'tổng cộng' },
      ruby: [{ base: '全', reading: 'ぜん' }]
    },
    {
      kana: 'みんな',
      romaji: 'minna',
      meaning: { en: 'everyone; all', vi: 'tất cả, mọi người' }
    },
    {
      kana: '～だけ',
      romaji: '~dake',
      meaning: { en: 'only ~', vi: 'chỉ ~' }
    },
    {
      kana: 'ふなびん',
      kanji: '船便',
      romaji: 'funabin',
      meaning: { en: 'surface mail (by sea)', vi: 'gửi bằng đường biển' },
      ruby: [{ base: '船', reading: 'ふな' }]
    },
    {
      kana: 'こうくうびん',
      kanji: '航空便',
      romaji: 'kōkūbin',
      meaning: { en: 'airmail', vi: 'gửi bằng đường hàng không' },
      ruby: [{ base: '航', reading: 'こう' }]
    }
  ],
  phrases: [
    {
      kana: 'かしこまりました。',
      romaji: 'Kashikomarimashita.',
      meaning: { en: 'Certainly. / Understood (polite).', vi: 'Vâng, tôi đã rõ ạ.' }
    },
    {
      kana: 'いい おてんきですね。',
      kanji: 'いい お天気ですね。',
      romaji: 'Ii o-tenki desu ne.',
      meaning: { en: 'Nice weather, is it not?', vi: 'Trời đẹp nhỉ.' },
      ruby: [{ base: '天', reading: 'てん' }]
    },
    {
      kana: 'おでかけですか。',
      kanji: 'お出かけですか。',
      romaji: 'O-dekake desu ka.',
      meaning: { en: 'Are you going out?', vi: 'Anh/Chị đi ra ngoài đấy à?' },
      ruby: [{ base: '出', reading: 'で' }]
    },
    {
      kana: 'ちょっと ～まで。',
      romaji: 'Chotto ~ made.',
      meaning: { en: 'Just to ~ for a bit.', vi: 'Tôi đi ~ một chút.' }
    },
    {
      kana: 'いってらっしゃい。',
      kanji: '行ってらっしゃい。',
      romaji: 'Itterasshai.',
      meaning: { en: 'See you. / Take care (to someone leaving).', vi: 'Anh/Chị đi nhé.' },
      ruby: [{ base: '行', reading: 'いっ' }]
    },
    {
      kana: 'いってきます。',
      kanji: '行ってきます。',
      romaji: 'Itte kimasu.',
      meaning: { en: 'I am off. / I will be back.', vi: 'Tôi đi đây.' },
      ruby: [{ base: '行', reading: 'いっ' }]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson11-going-out',
      title: { en: 'Going out', vi: 'Ra ngoài' },
      speakers: [
        { id: 'boss', name: '部長' },
        { id: 'wang', name: 'ワン' }
      ],
      lines: [
        {
          speakerId: 'boss',
          jp: 'きょうは いい お天気ですね。',
          romaji: 'Kyō wa ii o-tenki desu ne.',
          meaning: { en: 'Nice weather today, is it not?', vi: 'Hôm nay trời đẹp nhỉ.' },
          ruby: [
            { base: '天', reading: 'てん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          speakerId: 'boss',
          jp: 'お出かけですか。',
          romaji: 'O-dekake desu ka.',
          meaning: { en: 'Are you going out?', vi: 'Anh đi ra ngoài đấy à?' },
          ruby: [{ base: '出', reading: 'で' }]
        },
        {
          speakerId: 'wang',
          jp: 'はい、ちょっと ゆうびんきょくまで。',
          romaji: 'Hai, chotto yūbinkyoku made.',
          meaning: { en: 'Yes, just to the post office.', vi: 'Vâng, tôi ra bưu điện một chút.' },
          ruby: [
            { base: '郵', reading: 'ゆう' },
            { base: '便', reading: 'びん' },
            { base: '局', reading: 'きょく' }
          ]
        },
        {
          speakerId: 'boss',
          jp: 'そうですか。行ってらっしゃい。',
          romaji: 'Sō desu ka. Itterasshai.',
          meaning: { en: 'I see. Take care.', vi: 'Thế à. Anh đi nhé.' },
          ruby: [{ base: '行', reading: 'いっ' }]
        },
        {
          speakerId: 'wang',
          jp: '行ってきます。',
          romaji: 'Itte kimasu.',
          meaning: { en: 'I will be back.', vi: 'Vâng, tôi đi đây.' },
          ruby: [{ base: '行', reading: 'いっ' }]
        }
      ]
    },
    {
      id: 'conv-lesson11-post-office',
      title: { en: 'Sending mail to Australia', vi: 'Gửi thư sang Úc' },
      speakers: [
        { id: 'wang', name: 'ワン' },
        { id: 'clerk', name: '店員' }
      ],
      lines: [
        {
          speakerId: 'wang',
          jp: 'これを オーストラリアに 送りたいんですが。',
          romaji: 'Kore o Ōsutoraria ni okuritain desu ga.',
          meaning: {
            en: 'I would like to send this to Australia.',
            vi: 'Tôi muốn gửi cái này sang Úc.'
          },
          ruby: [{ base: '送', reading: 'おく' }]
        },
        {
          speakerId: 'clerk',
          jp: '船便と 航空便、どちらに なさいますか。',
          romaji: 'Funabin to kōkūbin, dochira ni nasaimasu ka.',
          meaning: {
            en: 'Surface mail or airmail?',
            vi: 'Anh gửi đường biển hay đường hàng không?'
          },
          ruby: [
            { base: '船', reading: 'ふな' },
            { base: '便', reading: 'びん' },
            { base: '航', reading: 'こう' },
            { base: '空', reading: 'くう' },
            { base: '便', reading: 'びん' }
          ]
        },
        {
          speakerId: 'wang',
          jp: '航空便は いくらですか。',
          romaji: 'Kōkūbin wa ikura desu ka.',
          meaning: { en: 'How much is airmail?', vi: 'Gửi đường hàng không mất bao nhiêu?' },
          ruby: [
            { base: '航', reading: 'こう' },
            { base: '空', reading: 'くう' },
            { base: '便', reading: 'びん' }
          ]
        },
        {
          speakerId: 'clerk',
          jp: '7,600円です。船便は 3,450円です。',
          romaji: 'Nana-sen roppyaku en desu. Funabin wa san-zen yon-hyaku gojū en desu.',
          meaning: {
            en: '7,600 yen. Surface mail is 3,450 yen.',
            vi: '7.600 yen. Đường biển là 3.450 yen.'
          },
          ruby: [
            { base: '円', reading: 'えん' },
            { base: '船', reading: 'ふな' },
            { base: '便', reading: 'びん' },
            { base: '円', reading: 'えん' }
          ]
        },
        {
          speakerId: 'wang',
          jp: 'どのくらい かかりますか。',
          romaji: 'Dono kurai kakarimasu ka.',
          meaning: { en: 'How long does it take?', vi: 'Mất khoảng bao lâu?' }
        },
        {
          speakerId: 'clerk',
          jp: '航空便は 7日、船便は 2か月ぐらいです。',
          romaji: 'Kōkūbin wa nana-nichi, funabin wa ni-kagetsu gurai desu.',
          meaning: {
            en: 'Airmail takes 7 days; surface mail about 2 months.',
            vi: 'Đường hàng không mất 7 ngày, đường biển khoảng 2 tháng.'
          },
          ruby: [
            { base: '航', reading: 'こう' },
            { base: '空', reading: 'くう' },
            { base: '便', reading: 'びん' },
            { base: '日', reading: 'にち' },
            { base: '船', reading: 'ふな' },
            { base: '便', reading: 'びん' },
            { base: '月', reading: 'げつ' }
          ]
        },
        {
          speakerId: 'wang',
          jp: 'じゃ、船便で お願いします。',
          romaji: 'Ja, funabin de onegaishimasu.',
          meaning: { en: 'Then by surface mail, please.', vi: 'Vậy cho tôi gửi bằng đường biển.' },
          ruby: [
            { base: '船', reading: 'ふな' },
            { base: '便', reading: 'びん' },
            { base: '願', reading: 'ねが' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson11-family',
      title: { en: 'Brothers and sisters', vi: 'Anh chị em' },
      speakers: [
        { id: 'yuki', name: 'ユキ' },
        { id: 'tom', name: 'トム' }
      ],
      lines: [
        {
          speakerId: 'yuki',
          jp: 'トムさんの 家族は 何人ですか。',
          romaji: 'Tomu-san no kazoku wa nan-nin desu ka.',
          meaning: {
            en: 'How many people are in your family, Tom?',
            vi: 'Gia đình Tom có mấy người?'
          },
          ruby: [
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '何', reading: 'なん' },
            { base: '人', reading: 'にん' }
          ]
        },
        {
          speakerId: 'tom',
          jp: '4人です。父と 母と 姉と 私です。',
          romaji: 'Yon-nin desu. Chichi to haha to ane to watashi desu.',
          meaning: {
            en: 'Four people: my father, mother, older sister and me.',
            vi: '4 người: bố, mẹ, chị gái và tôi.'
          },
          ruby: [
            { base: '人', reading: 'にん' },
            { base: '父', reading: 'ちち' },
            { base: '母', reading: 'はは' },
            { base: '姉', reading: 'あね' },
            { base: '私', reading: 'わたし' }
          ]
        },
        {
          speakerId: 'yuki',
          jp: 'お姉さんは 日本に いますか。',
          romaji: 'Onēsan wa Nihon ni imasu ka.',
          meaning: { en: 'Is your older sister in Japan?', vi: 'Chị gái ở Nhật không?' },
          ruby: [
            { base: '姉', reading: 'ねえ' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' }
          ]
        },
        {
          speakerId: 'tom',
          jp: 'いいえ、アメリカに います。',
          romaji: 'Iie, Amerika ni imasu.',
          meaning: { en: 'No, she is in America.', vi: 'Không, chị ấy ở Mỹ.' }
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'ひとつ … とお / 〜にん / 〜だい / 〜まい / 〜かい',
      patternRuby: [
        { base: '一', reading: 'ひと' },
        { base: '人', reading: 'にん' },
        { base: '台', reading: 'だい' },
        { base: '枚', reading: 'まい' },
        { base: '回', reading: 'かい' }
      ],
      highlights: ['つ', '人', '台', '枚', '回'],
      title: { en: 'Japanese counters', vi: 'Cách đếm tiếng Nhật' },
      explanation: {
        en: 'Use native counters ひとつ through とお for 1-10 general items. For people use ひとり/ふたり/〜にん; for machines 〜だい; flat things 〜まい; times 〜かい. Put number + counter after the noun phrase.',
        vi: 'Dùng ひとつ～とお đếm 1-10 đồ vật. Người: ひとり/ふたり/〜にん; máy xe: 〜だい; vật mỏng: 〜まい; lần: 〜かい. Đặt số + counter sau cụm danh từ.'
      },
      examples: [
        {
          jp: 'りんごを 4つ 買いました。',
          romaji: 'Ringo o yottsu kaimashita.',
          meaning: { en: 'I bought four apples.', vi: 'Tôi đã mua 4 quả táo.' },
          ruby: [{ base: '買', reading: 'か' }]
        },
        {
          jp: '切手を 5枚 と はがきを 2枚 ください。',
          romaji: 'Kitte o go-mai to hagaki o ni-mai kudasai.',
          meaning: {
            en: 'Five stamps and two postcards, please.',
            vi: 'Cho tôi 5 tem và 2 bưu thiếp.'
          },
          ruby: [
            { base: '切', reading: 'きっ' },
            { base: '手', reading: 'て' },
            { base: '枚', reading: 'まい' },
            { base: '枚', reading: 'まい' }
          ]
        },
        {
          jp: '外国人の 学生が 2人 います。',
          romaji: 'Gaikokujin no gakusei ga futari imasu.',
          meaning: { en: 'There are two international students.', vi: 'Có 2 du học sinh.' },
          ruby: [
            { base: '外', reading: 'がい' },
            { base: '国', reading: 'こく' },
            { base: '人', reading: 'じん' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' },
            { base: '人', reading: 'り' }
          ]
        }
      ]
    },
    {
      pattern: 'いくつ / 何 + Counter',
      patternRuby: [{ base: '何', reading: 'なん' }],
      highlights: ['いくつ', '何', 'か'],
      title: { en: 'Asking how many', vi: 'Hỏi số lượng' },
      explanation: {
        en: 'Ask about general items with いくつ. With a specific counter, use なん + counter (e.g. 何人, 何枚, 何時間).',
        vi: 'Hỏi đồ vật chung với いくつ. Với counter cụ thể dùng なん + counter (vd. 何人, 何枚, 何時間).'
      },
      explanationRuby: [
        { base: '何', reading: 'なん' },
        { base: '人', reading: 'にん' },
        { base: '何', reading: 'なん' },
        { base: '枚', reading: 'まい' },
        { base: '何', reading: 'なん' },
        { base: '時', reading: 'じ' },
        { base: '間', reading: 'かん' }
      ],
      examples: [
        {
          jp: 'みかんを いくつ 買いましたか。',
          romaji: 'Mikan o ikutsu kaimashita ka.',
          meaning: { en: 'How many mandarins did you buy?', vi: 'Anh/Chị mua mấy quả quýt?' },
          ruby: [{ base: '買', reading: 'か' }]
        },
        {
          jp: '8つ 買いました。',
          romaji: 'Yattsu kaimashita.',
          meaning: { en: 'I bought eight.', vi: 'Tôi mua 8 quả.' },
          ruby: [{ base: '買', reading: 'か' }]
        },
        {
          jp: 'この 会社に 外国人が 何人 いますか。',
          romaji: 'Kono kaisha ni gaikokujin ga nan-nin imasu ka.',
          meaning: {
            en: 'How many foreign employees are at this company?',
            vi: 'Công ty này có mấy người nước ngoài?'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '外', reading: 'がい' },
            { base: '国', reading: 'こく' },
            { base: '人', reading: 'じん' },
            { base: '何', reading: 'なん' },
            { base: '人', reading: 'にん' }
          ]
        },
        {
          jp: '5人 います。',
          romaji: 'Go-nin imasu.',
          meaning: { en: 'There are five.', vi: 'Có 5 người.' },
          ruby: [{ base: '人', reading: 'にん' }]
        }
      ]
    },
    {
      pattern: 'どのくらい / 〜ぐらい / かかります',
      highlights: ['どのくらい', 'ぐらい', 'かかります'],
      title: { en: 'Duration and cost (どのくらい)', vi: 'Thời gian và chi phí (どのくらい)' },
      explanation: {
        en: 'どのくらい asks how long or how much. 〜ぐらい after a quantity means "about". Use かかります for time or money taken.',
        vi: 'どのくらい hỏi bao lâu hoặc bao nhiêu. 〜ぐらい sau số lượng nghĩa "khoảng". Dùng かかります cho thời gian hoặc tiền mất.'
      },
      examples: [
        {
          jp: 'どのくらい 日本語を 勉強しましたか。',
          romaji: 'Dono kurai nihongo o benkyō shimashita ka.',
          meaning: {
            en: 'How long have you studied Japanese?',
            vi: 'Anh/Chị học tiếng Nhật bao lâu rồi?'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          jp: '3年 勉強しました。',
          romaji: 'San-nen benkyō shimashita.',
          meaning: { en: 'I studied for three years.', vi: 'Tôi học 3 năm.' },
          ruby: [
            { base: '年', reading: 'ねん' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          jp: '大阪から 東京まで どのくらい かかりますか。',
          romaji: 'Ōsaka kara Tōkyō made dono kurai kakarimasu ka.',
          meaning: {
            en: 'How long does it take from Osaka to Tokyo?',
            vi: 'Từ Osaka đến Tokyo mất bao lâu?'
          },
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' }
          ]
        },
        {
          jp: '新幹線で 2時間半 かかります。',
          romaji: 'Shinkansen de ni-jikan han kakarimasu.',
          meaning: {
            en: 'It takes two and a half hours by Shinkansen.',
            vi: 'Mất 2 tiếng rưỡi đi bằng tàu Shinkansen.'
          },
          ruby: [
            { base: '新', reading: 'しん' },
            { base: '幹', reading: 'かん' },
            { base: '線', reading: 'せん' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' },
            { base: '半', reading: 'はん' }
          ]
        },
        {
          jp: '15分ぐらい かかります。',
          romaji: 'Jūgo-fun gurai kakarimasu.',
          meaning: { en: 'It takes about 15 minutes.', vi: 'Mất khoảng 15 phút.' },
          ruby: [{ base: '分', reading: 'ふん' }]
        }
      ]
    },
    {
      pattern: 'Period に Number 回',
      patternRuby: [{ base: '回', reading: 'かい' }],
      highlights: ['に', '回'],
      title: { en: 'Frequency (に ... 回)', vi: 'Tần suất (に ... 回)' },
      explanation: {
        en: 'Say how often with a time period + に + number + 回 + verb, e.g. 1か月に 2回 (twice a month).',
        vi: 'Nói tần suất bằng khoảng thời gian + に + số + 回 + động từ, vd. 1か月に 2回 (tháng 2 lần).'
      },
      explanationRuby: [
        { base: '回', reading: 'かい' },
        { base: '月', reading: 'げつ' },
        { base: '回', reading: 'かい' }
      ],
      examples: [
        {
          jp: '1か月に 2回 映画を 見ます。',
          romaji: 'Ikkagetsu ni ni-kai eiga o mimasu.',
          meaning: { en: 'I watch movies twice a month.', vi: 'Tháng tôi xem phim 2 lần.' },
          ruby: [
            { base: '月', reading: 'げつ' },
            { base: '回', reading: 'かい' },
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          jp: '1週間に 3回 テニスを します。',
          romaji: 'Isshuukan ni san-kai tenisu o shimasu.',
          meaning: { en: 'I play tennis three times a week.', vi: 'Tuần tôi chơi quần vợt 3 lần.' },
          ruby: [
            { base: '週', reading: 'しゅう' },
            { base: '間', reading: 'かん' },
            { base: '回', reading: 'かい' }
          ]
        }
      ]
    },
    {
      pattern: 'N / Quantity だけ',
      highlights: ['だけ'],
      title: { en: 'Only (だけ)', vi: 'Chỉ (だけ)' },
      explanation: {
        en: 'Place だけ after a noun or quantity to mean "only that much" or "nothing else".',
        vi: 'Đặt だけ sau danh từ hoặc số lượng nghĩa "chỉ bấy nhiêu" hoặc "không gì khác".'
      },
      examples: [
        {
          jp: '外国人の 社員が 1人だけ います。',
          romaji: 'Gaikokujin no shain ga hitori dake imasu.',
          meaning: {
            en: 'There is only one foreign employee.',
            vi: 'Chỉ có một nhân viên người nước ngoài.'
          },
          ruby: [
            { base: '外', reading: 'がい' },
            { base: '国', reading: 'こく' },
            { base: '人', reading: 'じん' },
            { base: '社', reading: 'しゃ' },
            { base: '員', reading: 'いん' },
            { base: '人', reading: 'り' }
          ]
        },
        {
          jp: '休みは 日曜日だけ です。',
          romaji: 'Yasumi wa nichiyōbi dake desu.',
          meaning: { en: 'My day off is only Sunday.', vi: 'Ngày nghỉ của tôi chỉ có chủ nhật.' },
          ruby: [
            { base: '休', reading: 'やす' },
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson11-shopping',
      title: { en: 'At the shop', vi: 'Ở cửa hàng' },
      lines: [
        {
          jp: 'マイさんは りんごを 3つ 買いました。',
          romaji: 'Mai-san wa ringo o mittsu kaimashita.',
          meaning: { en: 'Mai bought three apples.', vi: 'Mai mua 3 quả táo.' },
          ruby: [{ base: '買', reading: 'か' }]
        },
        {
          jp: '全部で 450円でした。',
          romaji: 'Zenbu de yon-hyaku gojū en deshita.',
          meaning: { en: 'The total was 450 yen.', vi: 'Tổng cộng 450 yen.' },
          ruby: [
            { base: '全', reading: 'ぜん' },
            { base: '部', reading: 'ぶ' },
            { base: '円', reading: 'えん' }
          ]
        },
        {
          jp: 'カレーも 1つ 買いました。',
          romaji: 'Karē mo hitotsu kaimashita.',
          meaning: { en: 'She also bought one curry.', vi: 'Cô ấy cũng mua 1 phần cà ri.' },
          ruby: [{ base: '買', reading: 'か' }]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'How many apples did Mai buy?', vi: 'Mai mua mấy quả táo?' },
          choices: [
            { id: 'a', label: { en: '3', vi: '3 quả' } },
            { id: 'b', label: { en: '4', vi: '4 quả' } },
            { id: 'c', label: { en: '8', vi: '8 quả' } },
            { id: 'd', label: { en: '1', vi: '1 quả' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What was the total for the apples?', vi: 'Táo tổng cộng bao nhiêu?' },
          choices: [
            { id: 'a', label: { en: '450 yen', vi: '450 yen' } },
            { id: 'b', label: { en: '500 yen', vi: '500 yen' } },
            { id: 'c', label: { en: '7600 yen', vi: '7600 yen' } },
            { id: 'd', label: { en: '3450 yen', vi: '3450 yen' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson11-study',
      title: { en: 'Studying in Japan', vi: 'Học ở Nhật' },
      lines: [
        {
          jp: 'トムさんは 日本に 1年 います。',
          romaji: 'Tomu-san wa Nihon ni ichinen imasu.',
          meaning: { en: 'Tom has been in Japan for one year.', vi: 'Tom ở Nhật 1 năm.' },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '年', reading: 'ねん' }
          ]
        },
        {
          jp: '毎日 2時間 日本語を 勉強します。',
          romaji: 'Mainichi ni-jikan nihongo o benkyō shimasu.',
          meaning: {
            en: 'He studies Japanese two hours every day.',
            vi: 'Anh ấy học tiếng Nhật 2 tiếng mỗi ngày.'
          },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          jp: 'クラスに 留学生が 10人ぐらい います。',
          romaji: 'Kurasu ni ryūgakusei ga jū-nin gurai imasu.',
          meaning: {
            en: 'There are about ten international students in the class.',
            vi: 'Lớp có khoảng 10 du học sinh.'
          },
          ruby: [
            { base: '留', reading: 'りゅう' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' },
            { base: '人', reading: 'にん' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'How long has Tom been in Japan?', vi: 'Tom ở Nhật bao lâu?' },
          choices: [
            { id: 'a', label: { en: '1 year', vi: '1 năm' } },
            { id: 'b', label: { en: '3 years', vi: '3 năm' } },
            { id: 'c', label: { en: '2 months', vi: '2 tháng' } },
            { id: 'd', label: { en: '7 days', vi: '7 ngày' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'How many hours does he study Japanese daily?',
            vi: 'Mỗi ngày học mấy tiếng?'
          },
          choices: [
            { id: 'a', label: { en: '2 hours', vi: '2 tiếng' } },
            { id: 'b', label: { en: '30 minutes', vi: '30 phút' } },
            { id: 'c', label: { en: '5 hours', vi: '5 tiếng' } },
            { id: 'd', label: { en: 'None', vi: 'Không học' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson11-post',
      title: { en: 'Sending a package', vi: 'Gửi bưu phẩm' },
      lines: [
        {
          jp: 'リンさんは 封筒と 手紙を 箱に 入れました。',
          romaji: 'Rin-san wa fūtō to tegami o hako ni iremashita.',
          meaning: {
            en: 'Lin put an envelope and letters in a box.',
            vi: 'Lin bỏ phong bì và thư vào hộp.'
          },
          ruby: [
            { base: '封', reading: 'ふう' },
            { base: '筒', reading: 'とう' },
            { base: '手', reading: 'て' },
            { base: '紙', reading: 'がみ' },
            { base: '箱', reading: 'はこ' },
            { base: '入', reading: 'い' }
          ]
        },
        {
          jp: '船便で 送ります。2か月ぐらい かかります。',
          romaji: 'Funabin de okurimasu. Ni-kagetsu gurai kakarimasu.',
          meaning: {
            en: 'She sends it by surface mail. It takes about two months.',
            vi: 'Cô ấy gửi đường biển. Mất khoảng 2 tháng.'
          },
          ruby: [
            { base: '船', reading: 'ふな' },
            { base: '便', reading: 'びん' },
            { base: '送', reading: 'おく' },
            { base: '月', reading: 'げつ' }
          ]
        },
        {
          jp: '航空便は 高いですが、7日だけ かかります。',
          romaji: 'Kōkūbin wa takai desu ga, nana-nichi dake kakarimasu.',
          meaning: {
            en: 'Airmail is expensive, but takes only seven days.',
            vi: 'Đường hàng không đắt, nhưng chỉ mất 7 ngày.'
          },
          ruby: [
            { base: '航', reading: 'こう' },
            { base: '空', reading: 'くう' },
            { base: '便', reading: 'びん' },
            { base: '高', reading: 'たか' },
            { base: '日', reading: 'にち' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What did Lin put in the box?', vi: 'Lin bỏ gì vào hộp?' },
          choices: [
            { id: 'a', label: { en: 'Letters and an envelope', vi: 'Thư và phong bì' } },
            { id: 'b', label: { en: 'Apples', vi: 'Táo' } },
            { id: 'c', label: { en: 'Stamps only', vi: 'Chỉ tem' } },
            { id: 'd', label: { en: 'A curry', vi: 'Cà ri' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'How long does surface mail take?', vi: 'Đường biển mất bao lâu?' },
          choices: [
            { id: 'a', label: { en: 'About 2 months', vi: 'Khoảng 2 tháng' } },
            { id: 'b', label: { en: '7 days', vi: '7 ngày' } },
            { id: 'c', label: { en: '1 year', vi: '1 năm' } },
            { id: 'd', label: { en: '15 minutes', vi: '15 phút' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'How long does airmail take?', vi: 'Đường hàng không mất bao lâu?' },
          choices: [
            { id: 'a', label: { en: '7 days', vi: '7 ngày' } },
            { id: 'b', label: { en: '2 months', vi: '2 tháng' } },
            { id: 'c', label: { en: '3 years', vi: '3 năm' } },
            { id: 'd', label: { en: 'Only Sunday', vi: 'Chỉ chủ nhật' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Menu items', vi: 'Thực đơn' },
      includeInQuiz: false,
      intro: {
        en: 'Common dishes and drinks from the textbook menu reference.',
        vi: 'Món ăn và đồ uống thường gặp trong bảng tham khảo sách.'
      },
      items: [
        {
          kana: 'ていしょく',
          kanji: '定食',
          romaji: 'teishoku',
          meaning: { en: 'set meal', vi: 'cơm suất' },
          ruby: [{ base: '定', reading: 'てい' }]
        },
        {
          kana: 'てんどん',
          kanji: '天どん',
          romaji: 'tendon',
          meaning: { en: 'tempura rice bowl', vi: 'cơm tôm chiên' },
          ruby: [{ base: '天', reading: 'てん' }]
        },
        {
          kana: 'おやこどん',
          kanji: '親子どん',
          romaji: 'oyakodon',
          meaning: { en: 'chicken and egg rice bowl', vi: 'cơm gà trứng' },
          ruby: [{ base: '親', reading: 'おや' }]
        },
        {
          kana: 'ぎゅうどん',
          kanji: '牛どん',
          romaji: 'gyūdon',
          meaning: { en: 'beef rice bowl', vi: 'cơm thịt bò' },
          ruby: [{ base: '牛', reading: 'ぎゅう' }]
        },
        {
          kana: 'やきにく',
          kanji: '焼き肉',
          romaji: 'yakiniku',
          meaning: { en: 'grilled meat', vi: 'thịt nướng' },
          ruby: [{ base: '焼', reading: 'や' }]
        },
        {
          kana: 'みそしる',
          kanji: 'みそ汁',
          romaji: 'misoshiru',
          meaning: { en: 'miso soup', vi: 'súp miso' },
          ruby: [{ base: '汁', reading: 'しる' }]
        },
        {
          kana: 'おにぎり',
          romaji: 'onigiri',
          meaning: { en: 'rice ball', vi: 'cơm nắm' }
        },
        {
          kana: 'すし',
          kanji: '寿司',
          romaji: 'sushi',
          meaning: { en: 'sushi', vi: 'sushi' },
          ruby: [{ base: '寿', reading: 'す' }]
        },
        {
          kana: 'うどん',
          romaji: 'udon',
          meaning: { en: 'udon noodles', vi: 'mì udon' }
        },
        {
          kana: 'そば',
          romaji: 'soba',
          meaning: { en: 'soba noodles', vi: 'mì soba' }
        },
        {
          kana: 'ラーメン',
          romaji: 'rāmen',
          meaning: { en: 'ramen', vi: 'mì ramen' }
        },
        {
          kana: 'カレーライス',
          romaji: 'karēraisu',
          meaning: { en: 'curry rice', vi: 'cơm cà ri' }
        },
        {
          kana: 'コーヒー',
          romaji: 'kōhī',
          meaning: { en: 'coffee', vi: 'cà phê' }
        },
        {
          kana: 'こうちゃ',
          kanji: '紅茶',
          romaji: 'kōcha',
          meaning: { en: 'black tea', vi: 'trà đen' },
          ruby: [{ base: '紅', reading: 'こう' }]
        },
        {
          kana: 'ジュース',
          romaji: 'jūsu',
          meaning: { en: 'juice', vi: 'nước ép' }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Names in this lesson', vi: 'Tên riêng trong bài' },
      includeInQuiz: false,
      items: [
        {
          kana: 'オーストラリア',
          romaji: 'Ōsutoraria',
          meaning: { en: 'Australia', vi: 'Úc' }
        }
      ]
    }
  ]
};
