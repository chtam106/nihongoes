import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 50 (kenjougo I/II, お/ご します, special humble verbs). */
export const n4Lesson50: Lesson = {
  id: 'lesson-50',
  number: 50,
  title: {
    en: 'Humble language',
    vi: 'Kính ngữ khiêm nhường'
  },
  focus: {
    en: 'Lower your own actions with お/ご 〜 します, special humble verbs, and kenjougo II forms such as 参る and 申す.',
    vi: 'Hạ thấp hành động của mình bằng お/ご 〜 します, động từ khiêm nhường đặc biệt, và 謙譲語 II như 参る, 申す.'
  },
  vocab: [
    {
      kana: 'まいります',
      partOfSpeech: 'verb',
      kanji: '参ります',
      romaji: 'mairimasu',
      meaning: {
        en: 'to go, to come (humble of いきます/きます)',
        vi: 'đi, đến (khiêm nhường ngữ của いきます, きます)'
      },
      ruby: [{ base: '参', reading: 'まい' }]
    },
    {
      kana: 'おります',
      partOfSpeech: 'verb',
      romaji: 'orimasu',
      meaning: { en: 'to be, to stay (humble of います)', vi: 'ở (khiêm nhường ngữ của います)' }
    },
    {
      kana: 'いただきます',
      partOfSpeech: 'verb',
      romaji: 'itadakimasu',
      meaning: {
        en: 'to eat, to drink, to receive (humble of たべます/のみます/もらいます)',
        vi: 'ăn, uống, nhận (khiêm nhường ngữ của たべます, のみます, もらいます)'
      }
    },
    {
      kana: 'もうします',
      partOfSpeech: 'verb',
      kanji: '申します',
      romaji: 'mōshimasu',
      meaning: {
        en: 'to say, to be called ~ (humble of いいます)',
        vi: 'nói, tên là ~ (khiêm nhường ngữ của いいます)'
      },
      ruby: [{ base: '申', reading: 'もう' }]
    },
    {
      kana: 'いたします',
      partOfSpeech: 'verb',
      romaji: 'itashimasu',
      meaning: { en: 'to do (humble of します)', vi: 'làm (khiêm nhường ngữ của します)' }
    },
    {
      kana: 'はいけんします',
      partOfSpeech: 'verb',
      kanji: '拝見します',
      romaji: 'haiken shimasu',
      meaning: {
        en: 'to see, to look (humble of みます)',
        vi: 'xem (khiêm nhường ngữ của みます)'
      },
      ruby: [
        { base: '拝', reading: 'はい' },
        { base: '見', reading: 'けん' }
      ]
    },
    {
      kana: 'ぞんじます',
      partOfSpeech: 'verb',
      kanji: '存じます',
      romaji: 'zonjimasu',
      meaning: { en: 'to know (humble of しります)', vi: 'biết (khiêm nhường ngữ của しります)' },
      ruby: [{ base: '存', reading: 'ぞん' }]
    },
    {
      kana: 'うかがいます',
      partOfSpeech: 'verb',
      kanji: '伺います',
      romaji: 'ukagaimasu',
      meaning: {
        en: 'to ask, to visit (humble of ききます/いきます)',
        vi: 'hỏi, đến thăm (khiêm nhường ngữ của ききます, いきます)'
      },
      ruby: [{ base: '伺', reading: 'うかが' }]
    },
    {
      kana: 'おめに かかります',
      partOfSpeech: 'verb',
      kanji: 'お目に かかります',
      romaji: 'o-me ni kakarimasu',
      meaning: { en: 'to meet (humble of あいます)', vi: 'gặp (khiêm nhường ngữ của あいます)' },
      ruby: [{ base: '目', reading: 'め' }]
    },
    {
      kana: 'いれます',
      partOfSpeech: 'verb',
      romaji: 'iremasu',
      meaning: { en: 'to pour [coffee]', vi: 'pha [cà phê]' }
    },
    {
      kana: 'よういします',
      partOfSpeech: 'verb',
      kanji: '用意します',
      romaji: 'yōi shimasu',
      meaning: { en: 'to prepare', vi: 'chuẩn bị sẵn' },
      ruby: [
        { base: '用', reading: 'よう' },
        { base: '意', reading: 'い' }
      ]
    },
    {
      kana: 'わたくし',
      partOfSpeech: 'pronoun',
      kanji: '私',
      romaji: 'watakushi',
      meaning: { en: 'I, me (humble of わたし)', vi: 'tôi (khiêm nhường ngữ của わたし)' },
      ruby: [{ base: '私', reading: 'わたくし' }]
    },
    {
      kana: 'ガイド',
      partOfSpeech: 'noun',
      romaji: 'gaido',
      meaning: { en: 'guide, tour guide', vi: 'hướng dẫn viên du lịch' }
    },
    {
      kana: 'メールアドレス',
      partOfSpeech: 'noun',
      romaji: 'mēru adoresu',
      meaning: { en: 'email address', vi: 'địa chỉ email' }
    },
    {
      kana: 'スケジュール',
      partOfSpeech: 'noun',
      romaji: 'sukejūru',
      meaning: { en: 'schedule', vi: 'lịch làm việc' }
    },
    {
      kana: 'さらいしゅう',
      partOfSpeech: 'noun',
      kanji: 'さ来週',
      romaji: 'saraishū',
      meaning: { en: 'the week after next', vi: 'tuần sau nữa' },
      ruby: [
        { base: '来', reading: 'らい' },
        { base: '週', reading: 'しゅう' }
      ]
    },
    {
      kana: 'さらいげつ',
      partOfSpeech: 'noun',
      kanji: 'さ来月',
      romaji: 'saraigetsu',
      meaning: { en: 'the month after next', vi: 'tháng sau nữa' },
      ruby: [
        { base: '来', reading: 'らい' },
        { base: '月', reading: 'げつ' }
      ]
    },
    {
      kana: 'さらいねん',
      partOfSpeech: 'noun',
      kanji: 'さ来年',
      romaji: 'sarainen',
      meaning: { en: 'the year after next', vi: 'năm sau nữa' },
      ruby: [
        { base: '来', reading: 'らい' },
        { base: '年', reading: 'ねん' }
      ]
    },
    {
      kana: 'はじめに',
      partOfSpeech: 'adverb',
      kanji: '初めに',
      romaji: 'hajime ni',
      meaning: { en: 'first, to begin with', vi: 'trước hết, đầu tiên' },
      ruby: [{ base: '初', reading: 'はじ' }]
    },
    {
      kana: 'きんちょうします',
      partOfSpeech: 'verb',
      meaningPartOfSpeech: { vi: 'adjective' },
      kanji: '緊張します',
      romaji: 'kinchō shimasu',
      meaning: { en: 'to be nervous', vi: 'hồi hộp' },
      ruby: [
        { base: '緊', reading: 'きん' },
        { base: '張', reading: 'ちょう' }
      ]
    },
    {
      kana: 'しょうきん',
      partOfSpeech: 'noun',
      kanji: '賞金',
      romaji: 'shōkin',
      meaning: { en: 'prize money', vi: 'tiền thưởng' },
      ruby: [
        { base: '賞', reading: 'しょう' },
        { base: '金', reading: 'きん' }
      ]
    },
    {
      kana: 'きりん',
      partOfSpeech: 'noun',
      kanji: 'きりん',
      romaji: 'kirinn',
      meaning: { en: 'giraffe', vi: 'hươu cao cổ' }
    },
    {
      kana: 'ころ',
      partOfSpeech: 'noun',
      romaji: 'koro',
      meaning: { en: 'time, when (childhood ~)', vi: 'lúc, thời (nhỏ ~)' }
    },
    {
      kana: 'かないます',
      partOfSpeech: 'verb',
      kanji: '叶います',
      romaji: 'kanaimasu',
      meaning: { en: 'to come true [dream ~]', vi: 'thành hiện thực [mơ ước ~]' },
      ruby: [{ base: '叶', reading: 'かな' }]
    },
    {
      kana: 'おうえんします',
      partOfSpeech: 'verb',
      kanji: '応援します',
      romaji: 'ōen shimasu',
      meaning: { en: 'to support, to cheer on', vi: 'động viên' },
      ruby: [
        { base: '応', reading: 'おう' },
        { base: '援', reading: 'えん' }
      ]
    },
    {
      kana: 'こころから',
      partOfSpeech: 'adverb',
      kanji: '心から',
      romaji: 'kokoro kara',
      meaning: { en: 'from the heart, sincerely', vi: 'từ đáy lòng' },
      ruby: [{ base: '心', reading: 'こころ' }]
    },
    {
      kana: 'かんしゃします',
      partOfSpeech: 'verb',
      kanji: '感謝します',
      romaji: 'kansha shimasu',
      meaning: { en: 'to thank, to express gratitude', vi: 'cám ơn' },
      ruby: [
        { base: '感', reading: 'かん' },
        { base: '謝', reading: 'しゃ' }
      ]
    },
    {
      kana: 'おれい',
      partOfSpeech: 'noun',
      meaningPartOfSpeech: { vi: 'verb' },
      kanji: 'お礼',
      romaji: 'o-rei',
      meaning: { en: 'thanks, gratitude', vi: 'cám ơn, lời cảm ơn' },
      ruby: [{ base: '礼', reading: 'れい' }]
    },
    {
      kana: 'めいわくを かけます',
      partOfSpeech: 'verb',
      kanji: '迷惑を かけます',
      romaji: 'meiwaku o kakemasu',
      meaning: { en: 'to cause trouble', vi: 'làm phiền' },
      ruby: [
        { base: '迷', reading: 'めい' },
        { base: '惑', reading: 'わく' }
      ]
    },
    {
      kana: 'いかします',
      partOfSpeech: 'verb',
      kanji: '生かします',
      romaji: 'ikashimasu',
      meaning: { en: 'to make good use of', vi: 'phát huy' },
      ruby: [{ base: '生', reading: 'い' }]
    }
  ],
  phrases: [
    {
      kana: 'おげんきで いらっしゃいますか。',
      partOfSpeech: 'expression',
      kanji: 'お元気で いらっしゃいますか。',
      romaji: 'O-genki de irasshaimasu ka.',
      meaning: {
        en: 'How are you? (honorific)',
        vi: 'Anh/Chị có khỏe không ạ? (kính ngữ của お元気ですか)'
      },
      ruby: [
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' }
      ]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson50-speech',
      title: { en: 'Thanking supporters', vi: 'Cảm ơn từ đáy lòng' },
      speakers: [
        { id: 'host', name: '司会' },
        { id: 'miller', name: 'ミラー' }
      ],
      lines: [
        {
          speakerId: 'host',
          jp: '優勝 おめでとう ございます。スピーチ、とても よかったです。',
          romaji: 'Yūshō omedetō gozaimasu. Supīchi, totemo yokatta desu.',
          meaning: {
            en: 'Congratulations on winning. Your speech was excellent.',
            vi: 'Xin chúc mừng anh đã giành giải nhất. Bài nói chuyện của anh rất tuyệt vời.'
          },
          ruby: [
            { base: '優', reading: 'ゆう' },
            { base: '勝', reading: 'しょう' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'ありがとう ございます。',
          romaji: 'Arigatō gozaimasu.',
          meaning: { en: 'Thank you.', vi: 'Cám ơn anh.' }
        },
        {
          speakerId: 'host',
          jp: 'その とき、緊張しましたか。',
          romaji: 'Sono toki, kinchō shimashita ka.',
          meaning: { en: 'Were you nervous then?', vi: 'Lúc đó anh có hồi hộp lắm không?' },
          ruby: [
            { base: '緊', reading: 'きん' },
            { base: '張', reading: 'ちょう' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'はい、とても 緊張しました。',
          romaji: 'Hai, totemo kinchō shimashita.',
          meaning: { en: 'Yes, I was very nervous.', vi: 'Có, tôi đã rất hồi hộp.' },
          ruby: [
            { base: '緊', reading: 'きん' },
            { base: '張', reading: 'ちょう' }
          ]
        },
        {
          speakerId: 'host',
          jp: '練習は 大変 でしたか。',
          romaji: 'Renshū wa taihen deshita ka.',
          meaning: { en: 'Was practice difficult?', vi: 'Anh luyện tập có vất vả không?' },
          ruby: [
            { base: '練', reading: 'れん' },
            { base: '習', reading: 'しゅう' },
            { base: '大', reading: 'おお' },
            { base: '変', reading: 'へん' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'はい。仕事が 忙しいので、あまり 時間が ありませんでした。',
          romaji: 'Hai. Shigoto ga isogashii node, amari jikan ga arimasen deshita.',
          meaning: {
            en: 'Yes. Work was busy, so I did not have much time.',
            vi: 'Vâng. Vì công việc bận nên không có mấy thời gian để luyện tập.'
          },
          ruby: [
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '忙', reading: 'いそが' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' }
          ]
        },
        {
          speakerId: 'host',
          jp: '賞金は 何に 使いますか。',
          romaji: 'Shōkin wa nani ni tsukaimasu ka.',
          meaning: {
            en: 'What will you use the prize money for?',
            vi: 'Anh sẽ dùng tiền thưởng vào việc gì?'
          },
          ruby: [
            { base: '賞', reading: 'しょう' },
            { base: '金', reading: 'きん' },
            { base: '何', reading: 'なに' },
            { base: '使', reading: 'つか' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'ええと…… 動物が 好きで、小さい ころから アフリカへ 行きたいと 思っていました。',
          romaji:
            'Eeto.... Dōbutsu ga suki de, chiisai koro kara Afurika e ikitai to omotte imashita.',
          meaning: {
            en: 'Well... I like animals, and since I was small I wanted to go to Africa.',
            vi: 'À... Tôi thích động vật, và từ nhỏ tôi đã mơ ước được đi châu Phi.'
          },
          ruby: [
            { base: '動', reading: 'どう' },
            { base: '物', reading: 'ぶつ' },
            { base: '好', reading: 'す' },
            { base: '小', reading: 'ちい' },
            { base: '行', reading: 'い' },
            { base: '思', reading: 'おも' }
          ]
        },
        {
          speakerId: 'host',
          jp: 'アフリカへ 行かれるんですね。',
          romaji: 'Afurika e ikareru n desu ne.',
          meaning: { en: 'So you will go to Africa.', vi: 'Thế là anh sẽ đi châu Phi à?' },
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          speakerId: 'miller',
          jp: 'はい。自然の 中で きりんや ゾウを 見たいです。',
          romaji: 'Hai. Shizen no naka de kirin ya zō o mitai desu.',
          meaning: {
            en: 'Yes. I want to see giraffes and elephants in nature.',
            vi: 'Vâng. Tôi muốn được ngắm hươu cao cổ và voi trong khung cảnh thiên nhiên ở châu Phi.'
          },
          ruby: [
            { base: '自', reading: 'し' },
            { base: '然', reading: 'ぜん' },
            { base: '中', reading: 'なか' },
            { base: '見', reading: 'けん' }
          ]
        },
        {
          speakerId: 'host',
          jp: '子どもの ころの 夢が 叶いますね。',
          romaji: 'Kodomo no koro no yume ga kanaimasu ne.',
          meaning: {
            en: 'Your childhood dream will come true.',
            vi: 'Ước mơ thời nhỏ của anh sẽ trở thành hiện thực nhỉ.'
          },
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '夢', reading: 'ゆめ' },
            { base: '叶', reading: 'かな' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'はい。とても うれしいです。心から 応援して くださった 皆さんに 感謝 いたします。ありがとう ございました。',
          romaji:
            'Hai. Totemo ureshii desu. Kokoro kara ōen shite kudasatta minasan ni kansha itashimasu. Arigatō gozaimashita.',
          meaning: {
            en: 'Yes. I am very happy. I thank everyone who supported me from the heart. Thank you all.',
            vi: 'Vâng. Tôi rất vui. Từ đáy lòng mình tôi xin cám ơn tất cả mọi người đã động viên tôi. Xin cám ơn mọi người.'
          },
          ruby: [
            { base: '心', reading: 'こころ' },
            { base: '応', reading: 'おう' },
            { base: '援', reading: 'えん' },
            { base: '皆', reading: 'みな' },
            { base: '感', reading: 'かん' },
            { base: '謝', reading: 'しゃ' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'お/ご 〜 します (kenjougo I)',
      highlights: ['お', 'ご', 'し'],
      title: { en: 'Humble verbs (お/ご 〜 します)', vi: 'Khiêm nhường ngữ I (お/ご 〜 します)' },
      explanation: {
        en: 'Kenjougo I (謙譲語 I) lowers your own actions toward the listener: Group I/II お + masu-stem + します; Group III ご + noun + します. Not used with one-syllable stems (みます) or verbs with special humble forms. Some Group III verbs take お (電話します, 約束します).',
        vi: '謙譲語 I hạ thấp hành động của mình với người nghe: nhóm I/II お + thân ます + します; nhóm III ご + danh từ + します. Không dùng với thân một âm tiết (みます) hoặc động từ có dạng khiêm nhường riêng. Một số nhóm III dùng お (電話します, 約束します).'
      },
      explanationRuby: [
        { base: '謙', reading: 'けん' },
        { base: '譲', reading: 'じょう' },
        { base: '語', reading: 'ご' },
        { base: '電', reading: 'でん' },
        { base: '話', reading: 'わ' },
        { base: '約', reading: 'やく' },
        { base: '束', reading: 'そく' }
      ],
      examples: [
        {
          jp: '重そうですね。お持ち しましょうか。',
          romaji: 'Omōsō desu ne. O-mochi shimashō ka.',
          meaning: {
            en: 'That looks heavy. Shall I carry it for you?',
            vi: 'Trông có vẻ nặng quá nhỉ. Để tôi mang giúp anh/chị nhé?'
          },
          ruby: [
            { base: '重', reading: 'おも' },
            { base: '持', reading: 'も' }
          ]
        },
        {
          jp: '江戸東京 博物館へ ご案内します。',
          romaji: 'Edo-Tōkyō Hakubutsukan e go-annai shimasu.',
          meaning: {
            en: 'We will guide you to the Edo-Tokyo Museum.',
            vi: 'Chúng tôi sẽ dẫn các vị đến Bảo tàng Edo-Tokyo.'
          },
          ruby: [
            { base: '江', reading: 'え' },
            { base: '戸', reading: 'ど' },
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '博', reading: 'はく' },
            { base: '物', reading: 'ぶつ' },
            { base: '館', reading: 'かん' },
            { base: '案', reading: 'あん' },
            { base: '内', reading: 'ない' }
          ]
        },
        {
          jp: '初めに、きょうの スケジュールを ご説明します。',
          romaji: 'Hajime ni, kyō no sukejūru o go-setsumei shimasu.',
          meaning: {
            en: 'First, I will explain the schedule for today.',
            vi: 'Trước hết, tôi sẽ giải thích lịch làm việc hôm nay.'
          },
          ruby: [
            { base: '初', reading: 'はじ' },
            { base: '説', reading: 'せつ' },
            { base: '明', reading: 'めい' }
          ]
        }
      ]
    },
    {
      pattern: 'Special humble verbs',
      highlights: ['目', 'かか', '伺', '拝', '存'],
      title: { en: 'Special humble verbs', vi: 'Động từ khiêm nhường đặc biệt' },
      explanation: {
        en: 'Some verbs have dedicated humble forms instead of お/ご 〜 します: あいます→お目にかかります, いきます/きます/ききます→伺います, みます→拝見します, しります→存じます, たべます/のみます/もらいます→いただきます.',
        vi: 'Một số động từ có dạng khiêm nhường riêng: あいます→お目にかかります, いきます/きます/ききます→伺います, みます→拝見します, しります→存じます, たべます/のみます/もらいます→いただきます.'
      },
      explanationRuby: [
        { base: '目', reading: 'め' },
        { base: '伺', reading: 'うかが' },
        { base: '拝', reading: 'はい' },
        { base: '見', reading: 'けん' },
        { base: '存', reading: 'ぞん' },
        { base: '目', reading: 'め' },
        { base: '伺', reading: 'うかが' },
        { base: '拝', reading: 'はい' },
        { base: '見', reading: 'けん' },
        { base: '存', reading: 'ぞん' }
      ],
      examples: [
        {
          jp: '社長の 奥様に お目に かかりました。',
          romaji: 'Shachō no okusama ni o-me ni kakarimashita.',
          meaning: {
            en: 'I had the honor of meeting the wife of the president.',
            vi: 'Tôi đã gặp vợ giám đốc.'
          },
          ruby: [
            { base: '社', reading: 'しゃ' },
            { base: '長', reading: 'ちょう' },
            { base: '奥', reading: 'おく' },
            { base: '様', reading: 'さま' },
            { base: '目', reading: 'め' }
          ]
        },
        {
          jp: 'あした 手伝いに 伺います。',
          romaji: 'Ashita tetsudai ni ukagaimasu.',
          meaning: { en: 'I will come to help tomorrow.', vi: 'Ngày mai tôi sẽ đến giúp ạ.' },
          ruby: [
            { base: '手', reading: 'て' },
            { base: '伝', reading: 'つだ' },
            { base: '伺', reading: 'うかが' }
          ]
        }
      ]
    },
    {
      pattern: 'Kenjougo II (参る, 申す, いたす, おります)',
      patternRuby: [
        { base: '参', reading: 'まい' },
        { base: '申', reading: 'もう' }
      ],
      highlights: ['参', '申', 'いた', 'おり'],
      title: { en: 'Humble verbs II (参る, 申す)', vi: 'Khiêm nhường ngữ II (参る, 申す)' },
      explanation: {
        en: 'Kenjougo II (謙譲語 II) politely describes your own actions to the listener: いきます/きます→参ります, いいます→申します, します→いたします, います→おります. Use these when speaking about yourself to someone you respect.',
        vi: '謙譲語 II mô tả lịch sự hành vi của bản thân với người nghe: いきます/きます→参ります, いいます→申します, します→いたします, います→おります. Dùng khi nói về mình với người cần kính trọng.'
      },
      explanationRuby: [
        { base: '謙', reading: 'けん' },
        { base: '譲', reading: 'じょう' },
        { base: '語', reading: 'ご' },
        { base: '参', reading: 'まい' },
        { base: '申', reading: 'もう' }
      ],
      examples: [
        {
          jp: 'わたくしは ミラーと 申します。',
          romaji: 'Watakushi wa Mirā to mōshimasu.',
          meaning: { en: 'My name is Miller.', vi: 'Tôi tên là Miller.' },
          ruby: [{ base: '申', reading: 'もう' }]
        },
        {
          jp: 'アメリカから 参りました。',
          romaji: 'Amerika kara mairimashita.',
          meaning: { en: 'I came from America.', vi: 'Tôi đến từ Mỹ.' },
          ruby: [{ base: '参', reading: 'まい' }]
        },
        {
          jp: '失礼 いたします。',
          romaji: 'Shitsurei itashimasu.',
          meaning: { en: 'Excuse me. (humble farewell)', vi: 'Xin phép ạ.' },
          ruby: [
            { base: '失', reading: 'しつ' },
            { base: '礼', reading: 'れい' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson50-thanks',
      title: { en: 'A thank-you letter', vi: 'Thư cảm ơn' },
      titleJp: 'お礼の 手紙',
      titleRuby: [
        { base: '礼', reading: 'れい' },
        { base: '手', reading: 'て' },
        { base: '紙', reading: 'がみ' }
      ],
      lines: [
        {
          jp: '皆様、お元気で いらっしゃいますか。',
          romaji: 'Minasama, o-genki de irasshaimasu ka.',
          meaning: {
            en: 'Dear all, I hope you are well.',
            vi: 'Kính gửi mọi người, mọi người vẫn khỏe chứ ạ?'
          },
          ruby: [
            { base: '皆', reading: 'みな' },
            { base: '様', reading: 'さま' },
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          jp: '先月 日本で 研修を した とき、大変 お世話に なりました。',
          romaji: 'Sengetsu Nihon de kenshū o shita toki, taihen o-sewa ni narimashita.',
          meaning: {
            en: 'Thank you so much for looking after me during my training in Japan last month.',
            vi: 'Tháng trước khi thực tập ở Nhật, tôi đã được mọi người giúp đỡ rất nhiều.'
          },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '月', reading: 'げつ' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '研', reading: 'けん' },
            { base: '修', reading: 'しゅう' },
            { base: '大', reading: 'たい' },
            { base: '変', reading: 'へん' },
            { base: '世', reading: 'せ' },
            { base: '話', reading: 'わ' }
          ]
        },
        {
          jp: '工場を ご案内 いただいて、たくさんの ことを 学びました。',
          romaji: 'Kōjō o go-annai itadaite, takusan no koto o manabimashita.',
          meaning: {
            en: 'You kindly showed me around the factory, and I learned a great deal.',
            vi: 'Được mọi người dẫn đi tham quan nhà máy, tôi đã học được rất nhiều điều.'
          },
          ruby: [
            { base: '工', reading: 'こう' },
            { base: '場', reading: 'じょう' },
            { base: '案', reading: 'あん' },
            { base: '内', reading: 'ない' },
            { base: '学', reading: 'まな' }
          ]
        },
        {
          jp: 'さ来週、出張で また 東京へ 参ります。',
          romaji: 'Saraishū, shutchō de mata Tōkyō e mairimasu.',
          meaning: {
            en: 'The week after next I will come to Tokyo again on business.',
            vi: 'Tuần sau nữa tôi sẽ lại đến Tokyo công tác.'
          },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '出', reading: 'しゅっ' },
            { base: '張', reading: 'ちょう' },
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '参', reading: 'まい' }
          ]
        },
        {
          jp: 'その 時、ぜひ ごあいさつに 伺いたいと 思っております。',
          romaji: 'Sono toki, zehi go-aisatsu ni ukagaitai to omotte orimasu.',
          meaning: {
            en: 'I would very much like to visit you then to say hello.',
            vi: 'Khi đó tôi rất mong được đến chào hỏi mọi người.'
          },
          ruby: [
            { base: '時', reading: 'とき' },
            { base: '伺', reading: 'うかが' },
            { base: '思', reading: 'おも' }
          ]
        },
        {
          jp: '心から お礼を 申し上げます。',
          romaji: 'Kokoro kara o-rei o mōshiagemasu.',
          meaning: { en: 'Thank you from the bottom of my heart.', vi: 'Xin chân thành cảm ơn.' },
          ruby: [
            { base: '心', reading: 'こころ' },
            { base: '礼', reading: 'れい' },
            { base: '申', reading: 'もう' },
            { base: '上', reading: 'あ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What did the writer do in Japan last month?',
            vi: 'Tháng trước người viết đã làm gì ở Nhật?'
          },
          jp: 'この 人は 先月 日本で 何を しましたか。',
          ruby: [
            { base: '人', reading: 'ひと' },
            { base: '先', reading: 'せん' },
            { base: '月', reading: 'げつ' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '何', reading: 'なに' }
          ],
          choices: [
            {
              id: 'a',
              label: { en: 'Training', vi: 'Thực tập' },
              jp: '研修',
              ruby: [
                { base: '研', reading: 'けん' },
                { base: '修', reading: 'しゅう' }
              ]
            },
            {
              id: 'b',
              label: { en: 'Sightseeing', vi: 'Du lịch' },
              jp: '旅行',
              ruby: [
                { base: '旅', reading: 'りょ' },
                { base: '行', reading: 'こう' }
              ]
            },
            {
              id: 'c',
              label: { en: 'A wedding', vi: 'Đám cưới' },
              jp: '結婚式',
              ruby: [
                { base: '結', reading: 'けっ' },
                { base: '婚', reading: 'こん' },
                { base: '式', reading: 'しき' }
              ]
            },
            {
              id: 'd',
              label: { en: 'Moving house', vi: 'Chuyển nhà' },
              jp: '引っ越し',
              ruby: [
                { base: '引', reading: 'ひ' },
                { base: '越', reading: 'こ' }
              ]
            }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What will the writer do the week after next?',
            vi: 'Tuần sau nữa người viết sẽ làm gì?'
          },
          jp: 'さ来週 何を する 予定ですか。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '何', reading: 'なに' },
            { base: '予', reading: 'よ' },
            { base: '定', reading: 'てい' }
          ],
          choices: [
            {
              id: 'a',
              label: { en: 'Come to Tokyo on business', vi: 'Đến Tokyo công tác' },
              jp: '出張で 東京へ 行く',
              ruby: [
                { base: '出', reading: 'しゅっ' },
                { base: '張', reading: 'ちょう' },
                { base: '東', reading: 'とう' },
                { base: '京', reading: 'きょう' },
                { base: '行', reading: 'い' }
              ]
            },
            {
              id: 'b',
              label: { en: 'Go back to their country', vi: 'Về nước' },
              jp: '国へ 帰る',
              ruby: [
                { base: '国', reading: 'くに' },
                { base: '帰', reading: 'かえ' }
              ]
            },
            {
              id: 'c',
              label: { en: 'Build a factory', vi: 'Xây nhà máy' },
              jp: '工場を 作る',
              ruby: [
                { base: '工', reading: 'こう' },
                { base: '場', reading: 'じょう' },
                { base: '作', reading: 'つく' }
              ]
            },
            {
              id: 'd',
              label: { en: 'Get married', vi: 'Kết hôn' },
              jp: '結婚する',
              ruby: [
                { base: '結', reading: 'けっ' },
                { base: '婚', reading: 'こん' }
              ]
            }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'steps',
      title: { en: 'Envelope and postcard addresses', vi: 'Cách viết trên phong bì và bưu thiếp' },
      intro: {
        en: '封筒・はがきのあて名 - how to write the addressee on envelopes and postcards.',
        vi: '封筒・はがきのあて名 - cách viết tên và địa chỉ người nhận trên phong bì và bưu thiếp.'
      },
      steps: [
        {
          text: {
            en: 'On the front, write the postcode (in red boxes), address, and recipient name with 様.',
            vi: 'Mặt trước viết mã bưu điện (trong ô đỏ), địa chỉ, và họ tên người nhận kèm 様.'
          }
        },
        {
          text: {
            en: 'On the back, write your own address and name as the sender.',
            vi: 'Mặt sau viết địa chỉ và tên người gửi.'
          }
        },
        {
          text: {
            en: 'On a postcard to your own teacher, write 先生 instead of 様 after the name.',
            vi: 'Trên bưu thiếp gửi thầy cô của mình, dùng 先生 thay cho 様 sau tên.'
          }
        }
      ]
    },
    {
      kind: 'address',
      title: { en: 'Sample recipient address', vi: 'Mẫu địa chỉ người nhận' },
      intro: {
        en: 'Japanese mail is written top to bottom on the front; the postcode goes in the red boxes.',
        vi: 'Thư viết từ trên xuống mặt trước; mã bưu điện ghi trong ô đỏ.'
      },
      sample: {
        jp: '〒530-0001\n大阪府大阪市北区梅田5-7-15\n松本 正 様',
        ruby: [
          { base: '大', reading: 'おお' },
          { base: '阪', reading: 'さか' },
          { base: '府', reading: 'ふ' },
          { base: '大', reading: 'おお' },
          { base: '阪', reading: 'さか' },
          { base: '市', reading: 'し' },
          { base: '北', reading: 'きた' },
          { base: '区', reading: 'く' },
          { base: '梅', reading: 'うめ' },
          { base: '田', reading: 'だ' },
          { base: '松', reading: 'まつ' },
          { base: '本', reading: 'もと' },
          { base: '正', reading: 'ただし' },
          { base: '様', reading: 'さま' }
        ]
      },
      parts: [
        { label: { en: 'Postcode', vi: 'Mã bưu điện' }, text: '〒530-0001' },
        {
          label: { en: 'Prefecture', vi: 'Tỉnh' },
          text: '大阪府',
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '府', reading: 'ふ' }
          ]
        },
        {
          label: { en: 'City', vi: 'Thành phố' },
          text: '大阪市',
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '市', reading: 'し' }
          ]
        },
        {
          label: { en: 'Ward', vi: 'Quận' },
          text: '北区',
          ruby: [
            { base: '北', reading: 'きた' },
            { base: '区', reading: 'く' }
          ]
        },
        {
          label: { en: 'District / block', vi: 'Khu phố' },
          text: '梅田5-7-15',
          ruby: [
            { base: '梅', reading: 'うめ' },
            { base: '田', reading: 'だ' }
          ]
        },
        {
          label: { en: 'Name + 様', vi: 'Họ tên + 様' },
          text: '松本 正 様',
          ruby: [
            { base: '松', reading: 'まつ' },
            { base: '本', reading: 'もと' },
            { base: '正', reading: 'ただし' },
            { base: '様', reading: 'さま' }
          ]
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Proper nouns', vi: 'Tên riêng' },
      includeInQuiz: false,
      items: [
        {
          kana: 'えどとうきょう はくぶつかん',
          partOfSpeech: 'noun',
          kanji: '江戸東京 博物館',
          romaji: 'Edo-Tōkyō Hakubutsukan',
          meaning: { en: 'Edo-Tokyo Museum', vi: 'Bảo tàng Edo Tokyo' },
          ruby: [
            { base: '江', reading: 'え' },
            { base: '戸', reading: 'ど' },
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '博', reading: 'はく' },
            { base: '物', reading: 'ぶつ' },
            { base: '館', reading: 'かん' }
          ]
        },
        {
          kana: 'ミュンヘン',
          partOfSpeech: 'noun',
          romaji: 'Myunhen',
          meaning: { en: 'Munich, Germany', vi: 'München (Đức)' }
        }
      ]
    }
  ]
};
