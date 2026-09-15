import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 44 (〜すぎます, 〜やすい/にくい, Nを Adj く/に します, Nに します). */
export const n4Lesson44: Lesson = {
  id: 'lesson-44',
  number: 44,
  title: {
    en: 'Too much and easy or hard',
    vi: 'Quá mức và dễ hay khó'
  },
  focus: {
    en: 'Say something is excessive with 〜すぎます, describe ease or difficulty with 〜やすい/にくい, change something with Nを Adj く/に します, and state a choice with Nに します.',
    vi: 'Nói quá mức với 〜すぎます, mô tả dễ/khó với 〜やすい/にくい, thay đổi đối tượng với Nを Adj く/に します, và nói lựa chọn với Nに します.'
  },
  vocab: [
    {
      kana: 'なきます',
      kanji: '泣きます',
      romaji: 'nakimasu',
      meaning: { en: 'to cry', vi: 'khóc' },
      ruby: [{ base: '泣', reading: 'な' }]
    },
    {
      kana: 'わらいます',
      kanji: '笑います',
      romaji: 'waraimasu',
      meaning: { en: 'to laugh', vi: 'cười' },
      ruby: [{ base: '笑', reading: 'わら' }]
    },
    {
      kana: 'ねむります',
      kanji: '眠ります',
      romaji: 'nemurimasu',
      meaning: { en: 'to sleep', vi: 'ngủ' },
      ruby: [{ base: '眠', reading: 'ねむ' }]
    },
    {
      kana: 'かわきます',
      kanji: '乾きます',
      romaji: 'kawakimasu',
      meaning: { en: 'to dry [シャツが～: a shirt]', vi: 'khô [áo sơ-mi ~]' },
      ruby: [{ base: '乾', reading: 'かわ' }]
    },
    {
      kana: 'ぬれます',
      romaji: 'nuremasu',
      meaning: { en: 'to get wet [シャツが～: a shirt]', vi: 'ướt [áo sơ-mi ~]' }
    },
    {
      kana: 'すべります',
      kanji: '滑ります',
      romaji: 'suberimasu',
      meaning: { en: 'to slip', vi: 'trượt' },
      ruby: [{ base: '滑', reading: 'すべ' }]
    },
    {
      kana: 'おきます',
      kanji: '起きます',
      romaji: 'okimasu',
      meaning: { en: 'to happen [事故が～: an accident]', vi: 'xảy ra [tai nạn ~]' },
      ruby: [{ base: '起', reading: 'お' }]
    },
    {
      kana: 'ちょうせつします',
      kanji: '調節します',
      romaji: 'chōsetsu shimasu',
      meaning: { en: 'to adjust', vi: 'điều chỉnh' },
      ruby: [
        { base: '調', reading: 'ちょう' },
        { base: '節', reading: 'せつ' }
      ]
    },
    {
      kana: 'あんぜん[な]',
      kanji: '安全[な]',
      romaji: 'anzen [na]',
      meaning: { en: 'safe (na-adj)', vi: 'an toàn (tính từ な)' },
      ruby: [
        { base: '安', reading: 'あん' },
        { base: '全', reading: 'ぜん' }
      ]
    },
    {
      kana: 'きけん[な]',
      kanji: '危険[な]',
      romaji: 'kiken [na]',
      meaning: { en: 'dangerous (na-adj)', vi: 'nguy hiểm (tính từ な)' },
      ruby: [
        { base: '危', reading: 'き' },
        { base: '険', reading: 'けん' }
      ]
    },
    {
      kana: 'こい',
      kanji: '濃い',
      romaji: 'koi',
      meaning: { en: 'strong, thick, dark', vi: 'đặc, đậm' },
      ruby: [{ base: '濃', reading: 'こ' }]
    },
    {
      kana: 'うすい',
      kanji: '薄い',
      romaji: 'usui',
      meaning: { en: 'thin, weak, pale', vi: 'loãng, nhạt, mỏng' },
      ruby: [{ base: '薄', reading: 'うす' }]
    },
    {
      kana: 'あつい',
      kanji: '厚い',
      romaji: 'atsui',
      meaning: { en: 'thick', vi: 'dày' },
      ruby: [{ base: '厚', reading: 'あつ' }]
    },
    {
      kana: 'ふとい',
      kanji: '太い',
      romaji: 'futoi',
      meaning: { en: 'thick (lines, objects)', vi: 'to, dày (nét, vật)' },
      ruby: [{ base: '太', reading: 'ふと' }]
    },
    {
      kana: 'ほそい',
      kanji: '細い',
      romaji: 'hosoi',
      meaning: { en: 'thin (lines, objects)', vi: 'mảnh, mỏng (nét, vật)' },
      ruby: [{ base: '細', reading: 'ほそ' }]
    },
    {
      kana: 'くうき',
      kanji: '空気',
      romaji: 'kūki',
      meaning: { en: 'air, atmosphere', vi: 'không khí' },
      ruby: [
        { base: '空', reading: 'くう' },
        { base: '気', reading: 'き' }
      ]
    },
    {
      kana: 'なみだ',
      kanji: '涙',
      romaji: 'namida',
      meaning: { en: 'tear', vi: 'nước mắt' },
      ruby: [{ base: '涙', reading: 'なみだ' }]
    },
    {
      kana: 'わしょく',
      kanji: '和食',
      romaji: 'washoku',
      meaning: { en: 'Japanese food', vi: 'món ăn kiểu Nhật' },
      ruby: [
        { base: '和', reading: 'わ' },
        { base: '食', reading: 'しょく' }
      ]
    },
    {
      kana: 'ようしょく',
      kanji: '洋食',
      romaji: 'yōshoku',
      meaning: { en: 'Western food', vi: 'món ăn kiểu Tây' },
      ruby: [
        { base: '洋', reading: 'よう' },
        { base: '食', reading: 'しょく' }
      ]
    },
    {
      kana: 'おかず',
      romaji: 'okazu',
      meaning: { en: 'side dish', vi: 'thức ăn phụ, món ăn kèm cơm' }
    },
    {
      kana: 'りょう',
      kanji: '量',
      romaji: 'ryō',
      meaning: { en: 'amount, quantity', vi: 'lượng' },
      ruby: [{ base: '量', reading: 'りょう' }]
    },
    {
      kana: '～ばい',
      kanji: '～倍',
      romaji: '~bai',
      meaning: { en: '～ times (as much)', vi: 'gấp ~ lần' },
      ruby: [{ base: '倍', reading: 'ばい' }]
    },
    {
      kana: 'シングル',
      romaji: 'shinguru',
      meaning: { en: 'single (hotel room)', vi: 'phòng đơn' }
    },
    {
      kana: 'ツイン',
      romaji: 'tsuin',
      meaning: { en: 'twin (hotel room)', vi: 'phòng đôi' }
    },
    {
      kana: 'せんたくもの',
      kanji: '洗濯物',
      romaji: 'sentakumono',
      meaning: { en: 'laundry', vi: 'áo quần giặt' },
      ruby: [
        { base: '洗', reading: 'せん' },
        { base: '濯', reading: 'たく' },
        { base: '物', reading: 'もの' }
      ]
    },
    {
      kana: 'ＤＶＤ',
      romaji: 'dībīdī',
      meaning: { en: 'DVD', vi: 'DVD' }
    },
    {
      kana: 'いやがります',
      kanji: '嫌がります',
      romaji: 'iyagrimasu',
      meaning: { en: 'to dislike, to show dislike', vi: 'ghét, không thích' },
      ruby: [{ base: '嫌', reading: 'いや' }]
    },
    {
      kana: 'また',
      romaji: 'mata',
      meaning: { en: 'also, again, moreover', vi: 'hơn nữa, lại' }
    },
    {
      kana: 'うまく',
      romaji: 'umaku',
      meaning: { en: 'well, skillfully', vi: 'tốt, giỏi' }
    },
    {
      kana: 'じゅんじょ',
      kanji: '順序',
      romaji: 'junjo',
      meaning: { en: 'order, sequence', vi: 'trình tự' },
      ruby: [
        { base: '順', reading: 'じゅん' },
        { base: '序', reading: 'じょ' }
      ]
    },
    {
      kana: 'あんしん[な]',
      kanji: '安心[な]',
      romaji: 'anshin [na]',
      meaning: { en: 'relieved, at ease (na-adj)', vi: 'yên tâm (tính từ な)' },
      ruby: [
        { base: '安', reading: 'あん' },
        { base: '心', reading: 'しん' }
      ]
    },
    {
      kana: 'ひょうげん',
      kanji: '表現',
      romaji: 'hyōgen',
      meaning: { en: 'expression, way of saying', vi: 'biểu hiện, cách nói' },
      ruby: [
        { base: '表', reading: 'ひょう' },
        { base: '現', reading: 'げん' }
      ]
    },
    {
      kana: 'たとえば',
      kanji: '例えば',
      romaji: 'tatoeba',
      meaning: { en: 'for example', vi: 'ví dụ' },
      ruby: [{ base: '例', reading: 'たと' }]
    },
    {
      kana: 'わかれます',
      kanji: '別れます',
      romaji: 'wakaremasu',
      meaning: { en: 'to part, to separate', vi: 'chia tay' },
      ruby: [{ base: '別', reading: 'わか' }]
    },
    {
      kana: 'これら',
      romaji: 'korera',
      meaning: { en: 'these (words/things)', vi: 'những từ/cái này' }
    },
    {
      kana: 'えんぎが わるい',
      kanji: '縁起が 悪い',
      romaji: 'engi ga warui',
      meaning: { en: 'unlucky, bad omen', vi: 'xui, không may' },
      ruby: [
        { base: '縁', reading: 'えん' },
        { base: '起', reading: 'ぎ' },
        { base: '悪', reading: 'わる' }
      ]
    }
  ],
  phrases: [
    {
      kana: 'どう なさいます か。',
      romaji: 'Dō nasaimasu ka.',
      meaning: { en: 'What would you like to have done?', vi: 'Chị muốn làm gì?' }
    },
    {
      kana: 'カット',
      romaji: 'katto',
      meaning: { en: 'cut (haircut)', vi: 'cắt tóc' }
    },
    {
      kana: 'シャンプー',
      romaji: 'shanpū',
      meaning: { en: 'shampoo (～を します: to wash hair)', vi: 'dầu gội (～を します: gội đầu)' }
    },
    {
      kana: 'どういう ふう に なさいます か。',
      romaji: 'Dō iu fū ni nasaimasu ka.',
      meaning: { en: 'How would you like it done?', vi: 'Chị muốn cắt như thế nào?' }
    },
    {
      kana: 'ショート',
      romaji: 'shōto',
      meaning: { en: 'short (hair)', vi: 'cắt ngắn' }
    },
    {
      kana: '～ みたい に して ください。',
      romaji: '~ mitai ni shite kudasai.',
      meaning: { en: 'Please make it like ~.', vi: 'Anh hãy cắt như ~.' }
    },
    {
      kana: 'これ で よろしい でしょう か。',
      romaji: 'Kore de yoroshii deshō ka.',
      meaning: { en: 'Is this alright?', vi: 'Như thế này được chưa ạ?' }
    },
    {
      kana: '［どうも］ お疲れさまでした。',
      kanji: '［どうも］ お疲れさまでした。',
      romaji: '[Dōmo] otsukaresama deshita.',
      meaning: {
        en: 'Thank you, we are finished. (staff to customer)',
        vi: 'Xong rồi ạ, cám ơn chị. (nhân viên nói với khách hàng)'
      },
      ruby: [{ base: '疲', reading: 'つか' }]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson44-salon',
      title: { en: 'Like in this photo', vi: 'Cắt như trong ảnh này' },
      speakers: [
        { id: 'stylist', name: '美容師' },
        { id: 'lee', name: 'リー' }
      ],
      lines: [
        {
          speakerId: 'stylist',
          jp: 'いらっしゃいませ。今日は どう なさいます か。',
          romaji: 'Irasshaimase. Kyō wa dō nasaimasu ka.',
          meaning: {
            en: 'Welcome. What would you like today?',
            vi: 'Xin chào. Hôm nay chị muốn làm gì ạ?'
          },
          ruby: [
            { base: '今', reading: 'きょう' },
            { base: '日', reading: 'にち' }
          ]
        },
        {
          speakerId: 'lee',
          jp: 'カットを お願い します。',
          romaji: 'Katto o onegai shimasu.',
          meaning: { en: 'A haircut, please.', vi: 'Cho tôi cắt tóc.' },
          ruby: [{ base: '願', reading: 'ねが' }]
        },
        {
          speakerId: 'stylist',
          jp: 'かしこまりました。まず シャンプー から どうぞ。',
          romaji: 'Kashikomarimashita. Mazu shanpū kara dōzo.',
          meaning: {
            en: 'Certainly. Please start with a shampoo.',
            vi: 'Vâng ạ. Trước tiên mời chị gội đầu.'
          }
        },
        {
          speakerId: 'stylist',
          jp: 'どういう ふう に なさいます か。',
          romaji: 'Dō iu fū ni nasaimasu ka.',
          meaning: { en: 'How would you like it cut?', vi: 'Chị muốn cắt như thế nào ạ?' }
        },
        {
          speakerId: 'lee',
          jp: 'ショートが 好き です。この 写真 みたい に して ください。',
          romaji: 'Shōto ga suki desu. Kono shashin mitai ni shite kudasai.',
          meaning: {
            en: 'I like it short. Please make it like in this photo.',
            vi: 'Tôi thích cắt ngắn. Anh hãy cắt như trong tấm ảnh này.'
          },
          ruby: [
            { base: '好', reading: 'す' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' }
          ]
        },
        {
          speakerId: 'stylist',
          jp: 'いい スタイル ですね。',
          romaji: 'Ii sutairu desu ne.',
          meaning: { en: 'That is a nice style.', vi: 'Kiểu tóc đẹp đấy.' }
        },
        {
          speakerId: 'stylist',
          jp: '前の 長さは これ で よろしい でしょう か。',
          romaji: 'Mae no nagasa wa kore de yoroshii deshō ka.',
          meaning: {
            en: 'Is this length for the front alright?',
            vi: 'Độ dài phía trước như thế này được chưa ạ?'
          },
          ruby: [
            { base: '前', reading: 'まえ' },
            { base: '長', reading: 'なが' }
          ]
        },
        {
          speakerId: 'lee',
          jp: 'もう 少し 短く してください。',
          romaji: 'Mō sukoshi mijikaku shite kudasai.',
          meaning: { en: 'Please cut it a little shorter.', vi: 'Cắt ngắn thêm một chút nữa nhé.' },
          ruby: [
            { base: '少', reading: 'すこ' },
            { base: '短', reading: 'みじか' }
          ]
        },
        {
          speakerId: 'stylist',
          jp: 'できました。どうも お疲れさまでした。',
          romaji: 'Dekimashita. Dōmo otsukaresama deshita.',
          meaning: { en: 'It is done. Thank you very much.', vi: 'Xong rồi ạ. Cám ơn chị.' },
          ruby: [{ base: '疲', reading: 'つか' }]
        },
        {
          speakerId: 'lee',
          jp: 'ありがとう ございました。',
          romaji: 'Arigatō gozaimashita.',
          meaning: { en: 'Thank you very much.', vi: 'Cám ơn anh nhiều.' }
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-ます すぎます / Adj すぎます',
      highlights: ['すぎ'],
      title: { en: 'Too much (〜すぎます)', vi: 'Quá mức (〜すぎます)' },
      explanation: {
        en: 'Verb masu-stem + すぎます, i-adj (drop い) + すぎます, or na-adj stem + すぎます shows an action or state has gone beyond what is appropriate. It often describes something undesirable.',
        vi: 'Động từ thể ます + すぎます, tính từ い (bỏ い) + すぎます, hoặc tính từ な (bỏ な) + すぎます cho thấy hành động hoặc trạng thái vượt quá mức thích hợp, thường là điều không mong muốn.'
      },
      explanationRuby: [],
      examples: [
        {
          jp: 'ゆうべ お酒を 飲みすぎました。',
          romaji: 'Yūbe osake o nomisugimashita.',
          meaning: {
            en: 'I drank too much alcohol last night.',
            vi: 'Tối qua tôi uống quá nhiều rượu.'
          },
          ruby: [
            { base: '酒', reading: 'さけ' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          jp: 'この セーターは 大きすぎます。',
          romaji: 'Kono sētā wa ōkisugimasu.',
          meaning: { en: 'This sweater is too big.', vi: 'Cái áo len này rộng quá.' },
          ruby: [{ base: '大', reading: 'おお' }]
        },
        {
          jp: '最近の 車は 操作が 簡単すぎて、運転が おもしろくないです。',
          romaji: 'Saikin no kuruma wa sōsa ga kantansugite, unten ga omoshirokunai desu.',
          meaning: {
            en: 'Recent cars are too simple to operate, so driving is not fun.',
            vi: 'Ô-tô gần đây thao tác đơn giản quá, nên việc lái xe không thú vị.'
          },
          ruby: [
            { base: '最', reading: 'さい' },
            { base: '近', reading: 'きん' },
            { base: '車', reading: 'くるま' },
            { base: '操', reading: 'そう' },
            { base: '作', reading: 'さ' },
            { base: '簡', reading: 'かん' },
            { base: '単', reading: 'たん' },
            { base: '運', reading: 'うん' },
            { base: '転', reading: 'てん' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ます やすい / V-ます にくい',
      highlights: ['やすい'],
      title: { en: 'Easy to ~ (〜やすい)', vi: 'Dễ ~ (〜やすい)' },
      explanation: {
        en: 'Verb masu-stem + やすい means easy to do (volitional verbs) or prone to happen (non-volitional verbs). It conjugates like an i-adjective.',
        vi: 'Động từ thể ます + やすい: với động từ ý chí nghĩa "dễ làm"; với động từ không ý chí nghĩa "dễ xảy ra". Chia như tính từ い.'
      },
      explanationRuby: [],
      examples: [
        {
          jp: 'この パソコンは 使いやすいです。',
          romaji: 'Kono pasokon wa tsukaiyasui desu.',
          meaning: { en: 'This computer is easy to use.', vi: 'Cái máy vi tính này dễ sử dụng.' },
          ruby: [{ base: '使', reading: 'つか' }]
        },
        {
          jp: '白い シャツは 汚れやすいです。',
          romaji: 'Shiroi shatsu wa yogoreyasui desu.',
          meaning: { en: 'White shirts get dirty easily.', vi: 'Áo sơ-mi trắng dễ bẩn.' },
          ruby: [
            { base: '白', reading: 'しろ' },
            { base: '汚', reading: 'よご' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ます にくい',
      highlights: ['にくい'],
      title: { en: 'Hard to ~ (〜にくい)', vi: 'Khó ~ (〜にくい)' },
      explanation: {
        en: 'Verb masu-stem + にくい means hard to do or unlikely to happen. It conjugates like an i-adjective.',
        vi: 'Động từ thể ます + にくい nghĩa khó làm hoặc khó xảy ra. Chia như tính từ い.'
      },
      explanationRuby: [],
      examples: [
        {
          jp: '東京は 住みにくいです。',
          romaji: 'Tōkyō wa suminikui desu.',
          meaning: { en: 'Tokyo is hard to live in.', vi: 'Tokyo khó sống.' },
          ruby: [
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '住', reading: 'す' }
          ]
        },
        {
          jp: '雨の 日は 洗濯物が 乾きにくいです。',
          romaji: 'Ame no hi wa sentakumono ga kawakinikui desu.',
          meaning: {
            en: 'On rainy days laundry is hard to dry.',
            vi: 'Ngày mưa thì quần áo giặt khó khô.'
          },
          ruby: [
            { base: '雨', reading: 'あめ' },
            { base: '日', reading: 'にち' },
            { base: '洗', reading: 'せん' },
            { base: '濯', reading: 'たく' },
            { base: '物', reading: 'もの' },
            { base: '乾', reading: 'かわ' }
          ]
        },
        {
          jp: 'この コップは 割れにくくて、安全ですよ。',
          romaji: 'Kono koppu wa warenikukute, anzen desu yo.',
          meaning: {
            en: 'This cup is hard to break, so it is safe.',
            vi: 'Cái cốc này khó vỡ nên an toàn lắm.'
          },
          ruby: [
            { base: '割', reading: 'わ' },
            { base: '安', reading: 'あん' },
            { base: '全', reading: 'ぜん' }
          ]
        }
      ]
    },
    {
      pattern: 'N を Adj く/に します',
      highlights: ['を', 'く', 'に', 'し'],
      title: {
        en: 'Make something ~ (N を Adj く/に します)',
        vi: 'Làm cho ~ (N を Adj く/に します)'
      },
      explanation: {
        en: 'Unlike 〜く/に なります (the subject changes), N を i-adj く します or N を na-adj に します means you deliberately change something. N を N に します sets an amount.',
        vi: 'Khác với 〜く/に なります (chủ thể tự đổi), N を tính từ い く します hoặc N を tính từ な に します là làm cho đối tượng thay đổi. N を N に します đặt mức lượng.'
      },
      explanationRuby: [],
      examples: [
        {
          jp: '音を 大きく します。',
          romaji: 'Oto o ōkiku shimasu.',
          meaning: { en: 'I will turn the sound up.', vi: 'Tôi chỉnh âm thanh to hơn.' },
          ruby: [
            { base: '音', reading: 'おと' },
            { base: '大', reading: 'おお' }
          ]
        },
        {
          jp: '部屋を きれいに します。',
          romaji: 'Heya o kirei ni shimasu.',
          meaning: { en: 'I will clean the room.', vi: 'Tôi làm sạch phòng.' },
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' }
          ]
        },
        {
          jp: '塩の 量を 半分に しました。',
          romaji: 'Shio no ryō o hanbun ni shimashita.',
          meaning: {
            en: 'I reduced the amount of salt to half.',
            vi: 'Tôi giảm lượng muối xuống còn một nửa.'
          },
          ruby: [
            { base: '塩', reading: 'しお' },
            { base: '量', reading: 'りょう' },
            { base: '半', reading: 'はん' },
            { base: '分', reading: 'ぶん' }
          ]
        }
      ]
    },
    {
      pattern: 'N に します',
      highlights: ['に', 'し'],
      title: { en: 'Decide on ~ (N に します)', vi: 'Chọn/quyết định ~ (N に します)' },
      explanation: {
        en: 'N に します expresses a choice or decision: a room type, a drink, a date, and so on.',
        vi: 'N に します biểu thị sự lựa chọn hoặc quyết định: loại phòng, đồ uống, ngày họp, v.v.'
      },
      explanationRuby: [],
      examples: [
        {
          jp: '部屋は シングルに しますか、ツインに しますか。',
          romaji: 'Heya wa shinguru ni shimasu ka, tsuin ni shimasu ka.',
          meaning: {
            en: 'Will you take a single room or a twin room?',
            vi: 'Anh/chị dùng phòng đơn hay phòng đôi ạ?'
          },
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' }
          ]
        },
        {
          jp: '会議は あしたに します。',
          romaji: 'Kaigi wa ashita ni shimasu.',
          meaning: {
            en: 'I have decided to hold the meeting tomorrow.',
            vi: 'Cuộc họp để ngày mai.'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson44-taboo',
      title: { en: 'Words to avoid at weddings', vi: 'Từ nên tránh trong đám cưới' },
      lines: [
        {
          jp: '日本では 結婚式で 使う 言葉に 順序が あります。',
          romaji: 'Nihon de wa kekkonshiki de tsukau kotoba ni junjo ga arimasu.',
          meaning: {
            en: 'In Japan there is an order to the words used at weddings.',
            vi: 'Ở Nhật có trình tự cho các từ dùng trong lễ cưới.'
          },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '本', reading: 'ほん' },
            { base: '結', reading: 'けっ' },
            { base: '婚', reading: 'こん' },
            { base: '式', reading: 'しき' },
            { base: '使', reading: 'つか' },
            { base: '言', reading: 'こと' },
            { base: '葉', reading: 'ば' },
            { base: '順', reading: 'じゅん' },
            { base: '序', reading: 'じょ' }
          ]
        },
        {
          jp: 'たとえば 「別れる」や 「嫌がる」などは 縁起が 悪いので、人は うまく 言い換えます。',
          romaji:
            'Tatoeba 「wakareru」 ya 「iyagaru」 nado wa engi ga warui node, hito wa umaku iikaemasu.',
          meaning: {
            en: 'For example, words like "to part" or "to dislike" are unlucky, so people rephrase them skillfully.',
            vi: 'Ví dụ 「別れる」 hay 「嫌がる」 xui nên mọi người nói khéo léo.'
          },
          ruby: [
            { base: '別', reading: 'わか' },
            { base: '嫌', reading: 'いや' },
            { base: '縁', reading: 'えん' },
            { base: '起', reading: 'ぎ' },
            { base: '悪', reading: 'わる' },
            { base: '人', reading: 'ひと' },
            { base: '言', reading: 'こと' },
            { base: '換', reading: 'か' }
          ]
        },
        {
          jp: 'また 安心できる 表現を 使うと、みんな 気持ちよく 祝えます。',
          romaji: 'Mata anshin dekiru hyōgen o tsukau to, minna kimochi yoku iwaemasu.',
          meaning: {
            en: 'Also, when you use expressions that put people at ease, everyone can celebrate comfortably.',
            vi: 'Hơn nữa, dùng cách nói khiến mọi người yên tâm thì ai cũng chúc mừng vui vẻ.'
          },
          ruby: [
            { base: '安', reading: 'あん' },
            { base: '心', reading: 'しん' },
            { base: '表', reading: 'ひょう' },
            { base: '現', reading: 'げん' },
            { base: '使', reading: 'つか' },
            { base: '気', reading: 'き' },
            { base: '持', reading: 'も' },
            { base: '祝', reading: 'いわ' }
          ]
        },
        {
          jp: 'これらの 言葉は 日常でも 便利です。',
          romaji: 'Korera no kotoba wa nichijō demo benri desu.',
          meaning: {
            en: 'These words are useful in daily life too.',
            vi: 'Những từ này tiện trong đời sống hàng ngày.'
          },
          ruby: [
            { base: '言', reading: 'こと' },
            { base: '葉', reading: 'ば' },
            { base: '日', reading: 'にち' },
            { base: '常', reading: 'じょう' },
            { base: '便', reading: 'べん' },
            { base: '利', reading: 'り' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'Why do people avoid certain words at weddings?',
            vi: 'Tại sao người ta tránh một số từ trong đám cưới?'
          },
          choices: [
            { id: 'a', label: { en: 'They are unlucky', vi: 'Vì xui, không may' } },
            { id: 'b', label: { en: 'They are too long', vi: 'Vì quá dài' } },
            { id: 'c', label: { en: 'They are foreign words', vi: 'Vì là từ ngoại lai' } },
            { id: 'd', label: { en: 'They are hard to pronounce', vi: 'Vì khó phát âm' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What does the passage say about rephrasing?',
            vi: 'Bài đọc nói gì về việc nói khéo?'
          },
          choices: [
            { id: 'a', label: { en: 'People rephrase skillfully', vi: 'Mọi người nói khéo léo' } },
            {
              id: 'b',
              label: { en: 'People never change words', vi: 'Mọi người không bao giờ đổi từ' }
            },
            {
              id: 'c',
              label: { en: 'Only foreigners rephrase', vi: 'Chỉ người nước ngoài nói khéo' }
            },
            { id: 'd', label: { en: 'Rephrasing is illegal', vi: 'Nói khéo là trái phép' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Beauty salon services', vi: 'Dịch vụ hiệu làm đẹp' },
      introTerm: {
        jp: '美容院・理髪店',
        ruby: [
          { base: '美', reading: 'び' },
          { base: '容', reading: 'よう' },
          { base: '院', reading: 'いん' },
          { base: '理', reading: 'り' },
          { base: '髪', reading: 'はつ' },
          { base: '店', reading: 'てん' }
        ]
      },
      layout: 'stacked',
      rows: [
        { jp: 'カット', meaning: { en: 'haircut', vi: 'cắt tóc' } },
        { jp: 'パーマ', meaning: { en: 'perm', vi: 'uốn tóc' } },
        { jp: 'シャンプー', meaning: { en: 'shampoo', vi: 'gội đầu' } },
        { jp: 'トリートメント', meaning: { en: 'hair treatment', vi: 'dưỡng tóc' } },
        { jp: 'ブロー', meaning: { en: 'blow dry', vi: 'sấy tóc' } },
        { jp: 'カラー', meaning: { en: 'hair color', vi: 'nhuộm màu' } },
        { jp: 'メイク', meaning: { en: 'makeup', vi: 'trang điểm' } }
      ]
    },
    {
      kind: 'list',
      title: { en: 'How to ask for a cut', vi: 'Cách yêu cầu cắt tóc' },
      layout: 'stacked',
      rows: [
        {
          jp: '耳が 見えるくらいに 切って ください',
          ruby: [
            { base: '耳', reading: 'みみ' },
            { base: '見', reading: 'み' },
            { base: '切', reading: 'き' }
          ],
          meaning: { en: 'Please cut it so the ears show', vi: 'Cắt để hở tai' }
        },
        {
          jp: '肩に かかるくらいに 切って ください',
          ruby: [
            { base: '肩', reading: 'かた' },
            { base: '切', reading: 'き' }
          ],
          meaning: { en: 'Please cut it to shoulder length', vi: 'Cắt ngang vai' }
        },
        {
          jp: 'この 写真 みたいに 切って ください',
          ruby: [
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '切', reading: 'き' }
          ],
          meaning: { en: 'Please cut it like in this photo', vi: 'Cắt như trong ảnh này' }
        }
      ]
    }
  ]
};
