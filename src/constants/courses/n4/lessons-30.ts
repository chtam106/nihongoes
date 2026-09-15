import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 30 (V-てあります, V-ておきます, まだ, とか, trợ từ+も). */
export const n4Lesson30: Lesson = {
  id: 'lesson-30',
  number: 30,
  title: {
    en: 'Prepared and in place',
    vi: 'Chuẩn bị sẵn và để nguyên'
  },
  focus: {
    en: 'Describe intentional placement with V-てあります, prepare in advance with V-ておきます, keep something ongoing with まだ, list examples with とか, and emphasize with particle + も.',
    vi: 'Mô tả đặt có chủ ý với V-てあります, chuẩn bị trước với V-ておきます, vẫn còn với まだ, liệt kê ví dụ với とか, và nhấn mạnh với trợ từ + も.'
  },
  vocab: [
    {
      kana: 'はります',
      romaji: 'harimasu',
      meaning: { en: 'to paste, to stick', vi: 'dán' }
    },
    {
      kana: 'かけます',
      kanji: '掛けます',
      romaji: 'kakemasu',
      meaning: { en: 'to hang', vi: 'treo' },
      ruby: [{ base: '掛', reading: 'か' }]
    },
    {
      kana: 'かざります',
      kanji: '飾ります',
      romaji: 'kazarimasu',
      meaning: { en: 'to decorate', vi: 'trang trí' },
      ruby: [{ base: '飾', reading: 'かざ' }]
    },
    {
      kana: 'ならべます',
      kanji: '並べます',
      romaji: 'narabemasu',
      meaning: { en: 'to line up, to arrange', vi: 'sắp xếp, xếp hàng' },
      ruby: [{ base: '並', reading: 'なら' }]
    },
    {
      kana: 'うえます',
      kanji: '植えます',
      romaji: 'uemasu',
      meaning: { en: 'to plant', vi: 'trồng' },
      ruby: [{ base: '植', reading: 'う' }]
    },
    {
      kana: 'もどします',
      kanji: '戻します',
      romaji: 'modoshimasu',
      meaning: { en: 'to put back, to return (something)', vi: 'để lại, trả về chỗ cũ' },
      ruby: [{ base: '戻', reading: 'もど' }]
    },
    {
      kana: 'まとめます',
      romaji: 'matomemasu',
      meaning: { en: 'to put together, to pack up', vi: 'thu dọn, gom lại' }
    },
    {
      kana: 'しまいます',
      romaji: 'shimaimasu',
      meaning: { en: 'to put away, to store', vi: 'cất đi' }
    },
    {
      kana: 'きめます',
      kanji: '決めます',
      romaji: 'kimemasu',
      meaning: { en: 'to decide', vi: 'quyết định' },
      ruby: [{ base: '決', reading: 'き' }]
    },
    {
      kana: 'よしゅうします',
      kanji: '予習します',
      romaji: 'yoshū shimasu',
      meaning: { en: 'to prepare for a lesson', vi: 'chuẩn bị bài (trước giờ học)' },
      ruby: [
        { base: '予', reading: 'よ' },
        { base: '習', reading: 'しゅう' }
      ]
    },
    {
      kana: 'ふくしゅうします',
      kanji: '復習します',
      romaji: 'fukushū shimasu',
      meaning: { en: 'to review', vi: 'ôn tập' },
      ruby: [
        { base: '復', reading: 'ふく' },
        { base: '習', reading: 'しゅう' }
      ]
    },
    {
      kana: 'そのままに します',
      romaji: 'sono mama ni shimasu',
      meaning: { en: 'to leave as it is', vi: 'để nguyên như thế' }
    },
    {
      kana: 'じゅぎょう',
      kanji: '授業',
      romaji: 'jugyō',
      meaning: { en: 'class, lesson', vi: 'giờ học, tiết học' },
      ruby: [
        { base: '授', reading: 'じゅ' },
        { base: '業', reading: 'ぎょう' }
      ]
    },
    {
      kana: 'こうぎ',
      kanji: '講義',
      romaji: 'kōgi',
      meaning: { en: 'lecture', vi: 'bài giảng' },
      ruby: [
        { base: '講', reading: 'こう' },
        { base: '義', reading: 'ぎ' }
      ]
    },
    {
      kana: 'ミーティング',
      romaji: 'mītingu',
      meaning: { en: 'meeting', vi: 'cuộc họp' }
    },
    {
      kana: 'よてい',
      kanji: '予定',
      romaji: 'yotei',
      meaning: { en: 'plan, schedule', vi: 'dự định, kế hoạch' },
      ruby: [
        { base: '予', reading: 'よ' },
        { base: '定', reading: 'てい' }
      ]
    },
    {
      kana: 'おしらせ',
      kanji: 'お知らせ',
      romaji: 'oshirase',
      meaning: { en: 'notice, announcement', vi: 'thông báo' },
      ruby: [{ base: '知', reading: 'し' }]
    },
    {
      kana: 'ガイドブック',
      romaji: 'gaido bukku',
      meaning: { en: 'guidebook', vi: 'sách hướng dẫn du lịch' }
    },
    {
      kana: 'カレンダー',
      romaji: 'karendā',
      meaning: { en: 'calendar', vi: 'lịch' }
    },
    {
      kana: 'ポスター',
      romaji: 'posutā',
      meaning: { en: 'poster', vi: 'poster, áp phích' }
    },
    {
      kana: 'よていひょう',
      kanji: '予定表',
      romaji: 'yoteihyō',
      meaning: { en: 'schedule chart', vi: 'lịch làm việc' },
      ruby: [
        { base: '予', reading: 'よ' },
        { base: '定', reading: 'てい' },
        { base: '表', reading: 'ひょう' }
      ]
    },
    {
      kana: 'ごみばこ',
      kanji: 'ごみ箱',
      romaji: 'gomibako',
      meaning: { en: 'trash can', vi: 'thùng rác' },
      ruby: [{ base: '箱', reading: 'ばこ' }]
    },
    {
      kana: 'にんぎょう',
      kanji: '人形',
      romaji: 'ningyō',
      meaning: { en: 'doll', vi: 'búp bê' },
      ruby: [
        { base: '人', reading: 'にん' },
        { base: '形', reading: 'ぎょう' }
      ]
    },
    {
      kana: 'かびん',
      kanji: '花瓶',
      romaji: 'kabin',
      meaning: { en: 'vase', vi: 'bình hoa, lọ hoa' },
      ruby: [
        { base: '花', reading: 'か' },
        { base: '瓶', reading: 'びん' }
      ]
    },
    {
      kana: 'かがみ',
      kanji: '鏡',
      romaji: 'kagami',
      meaning: { en: 'mirror', vi: 'gương' },
      ruby: [{ base: '鏡', reading: 'かがみ' }]
    },
    {
      kana: 'ひきだし',
      kanji: '引き出し',
      romaji: 'hikidashi',
      meaning: { en: 'drawer', vi: 'ngăn kéo' },
      ruby: [
        { base: '引', reading: 'ひ' },
        { base: '出', reading: 'だ' }
      ]
    },
    {
      kana: 'げんかん',
      kanji: '玄関',
      romaji: 'genkan',
      meaning: { en: 'entrance (genkan)', vi: 'lối vào nhà, sảnh' },
      ruby: [
        { base: '玄', reading: 'げん' },
        { base: '関', reading: 'かん' }
      ]
    },
    {
      kana: 'ろうか',
      kanji: '廊下',
      romaji: 'rōka',
      meaning: { en: 'hallway, corridor', vi: 'hành lang' },
      ruby: [
        { base: '廊', reading: 'ろう' },
        { base: '下', reading: 'か' }
      ]
    },
    {
      kana: 'かべ',
      kanji: '壁',
      romaji: 'kabe',
      meaning: { en: 'wall', vi: 'tường' },
      ruby: [{ base: '壁', reading: 'かべ' }]
    },
    {
      kana: 'いけ',
      kanji: '池',
      romaji: 'ike',
      meaning: { en: 'pond', vi: 'ao, hồ' },
      ruby: [{ base: '池', reading: 'いけ' }]
    },
    {
      kana: 'もとの ところ',
      kanji: '元の 所',
      romaji: 'moto no tokoro',
      meaning: { en: 'original place', vi: 'chỗ cũ, vị trí ban đầu' },
      ruby: [
        { base: '元', reading: 'もと' },
        { base: '所', reading: 'ところ' }
      ]
    },
    {
      kana: 'まわり',
      kanji: '周り',
      romaji: 'mawari',
      meaning: { en: 'surroundings, around', vi: 'xung quanh' },
      ruby: [{ base: '周', reading: 'まわ' }]
    },
    {
      kana: 'まんなか',
      kanji: '真ん中',
      romaji: 'mannaka',
      meaning: { en: 'center, middle', vi: 'chính giữa' },
      ruby: [
        { base: '真', reading: 'ま' },
        { base: '中', reading: 'なか' }
      ]
    },
    {
      kana: 'すみ',
      kanji: '隅',
      romaji: 'sumi',
      meaning: { en: 'corner', vi: 'góc' },
      ruby: [{ base: '隅', reading: 'すみ' }]
    },
    {
      kana: 'まだ',
      romaji: 'mada',
      meaning: { en: 'still, not yet', vi: 'vẫn, vẫn còn' }
    },
    {
      kana: 'リュック',
      romaji: 'ryukku',
      meaning: { en: 'backpack', vi: 'ba lô' }
    },
    {
      kana: 'ひじょうぶくろ',
      kanji: '非常袋',
      romaji: 'hijōbukuro',
      meaning: { en: 'emergency kit bag', vi: 'túi khẩn cấp' },
      ruby: [
        { base: '非', reading: 'ひ' },
        { base: '常', reading: 'じょう' },
        { base: '袋', reading: 'ぶくろ' }
      ]
    },
    {
      kana: 'ひじょうじ',
      kanji: '非常時',
      romaji: 'hijōji',
      meaning: { en: 'emergency, time of crisis', vi: 'trường hợp khẩn cấp' },
      ruby: [
        { base: '非', reading: 'ひ' },
        { base: '常', reading: 'じょう' },
        { base: '時', reading: 'じ' }
      ]
    },
    {
      kana: 'せいかつします',
      kanji: '生活します',
      romaji: 'seikatsu shimasu',
      meaning: { en: 'to live, to get by', vi: 'sinh hoạt, sống' },
      ruby: [
        { base: '生', reading: 'せい' },
        { base: '活', reading: 'かつ' }
      ]
    },
    {
      kana: 'かいちゅうでんとう',
      kanji: '懐中電灯',
      romaji: 'kaichū dentō',
      meaning: { en: 'flashlight', vi: 'đèn pin' },
      ruby: [
        { base: '懐', reading: 'かい' },
        { base: '中', reading: 'ちゅう' },
        { base: '電', reading: 'でん' },
        { base: '灯', reading: 'とう' }
      ]
    },
    {
      kana: '～とか',
      romaji: '~toka',
      meaning: {
        en: 'such as ~, and so on (colloquial listing)',
        vi: 'như ~, v.v. (liệt kê khẩu ngữ)'
      }
    },
    {
      kana: 'まるい',
      kanji: '丸い',
      romaji: 'marui',
      meaning: { en: 'round, circular', vi: 'tròn' },
      ruby: [{ base: '丸', reading: 'まる' }]
    },
    {
      kana: 'ある～',
      romaji: 'aru~',
      meaning: { en: 'a certain ~', vi: '~ nọ, một ~ nào đó' }
    },
    {
      kana: 'ゆめを みます',
      kanji: '夢を 見ます',
      romaji: 'yume o mimasu',
      meaning: { en: 'to dream', vi: 'mơ, nằm mơ' },
      ruby: [
        { base: '夢', reading: 'ゆめ' },
        { base: '見', reading: 'み' }
      ]
    },
    {
      kana: 'うれしい',
      romaji: 'ureshii',
      meaning: { en: 'happy, glad', vi: 'vui, mừng' }
    },
    {
      kana: 'いや',
      kanji: '嫌',
      romaji: 'iya',
      meaning: { en: 'disagreeable, unpleasant (na-adj)', vi: 'ghét, không thích (tính từ な)' },
      ruby: [{ base: '嫌', reading: 'いや' }]
    },
    {
      kana: 'すると',
      romaji: 'suruto',
      meaning: { en: 'then, and then', vi: 'khi đó, thế là' }
    },
    {
      kana: 'めが さめます',
      kanji: '目が 覚めます',
      romaji: 'me ga samemasu',
      meaning: { en: 'to wake up', vi: 'thức giấc, tỉnh giấc' },
      ruby: [
        { base: '目', reading: 'め' },
        { base: '覚', reading: 'さ' }
      ]
    }
  ],
  phrases: [
    {
      kana: 'それで わたしも そろえなきゃ。',
      kanji: 'それで 私も 揃えなきゃ。',
      romaji: 'Sore de watashi mo soroena kya.',
      meaning: {
        en: 'In that case I have to prepare one too.',
        vi: 'Thế thì tôi cũng phải chuẩn bị sẵn thôi.'
      },
      ruby: [
        { base: '私', reading: 'わたし' },
        { base: '揃', reading: 'そろ' }
      ]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson30-emergency-bag',
      title: { en: 'I need an emergency bag too', vi: 'Tôi cũng cần túi khẩn cấp' },
      speakers: [
        { id: 'miller', name: 'ミラー' },
        { id: 'suzuki', name: '鈴木' }
      ],
      lines: [
        {
          speakerId: 'miller',
          jp: 'こんにちは。',
          romaji: 'Konnichiwa.',
          meaning: { en: 'Hello.', vi: 'Chào anh.' }
        },
        {
          speakerId: 'suzuki',
          jp: 'あ、いらっしゃい。どうぞ お入りください。',
          romaji: 'A, irasshai. Dōzo ohairi kudasai.',
          meaning: { en: 'Oh, welcome. Please come in.', vi: 'Anh đến đấy à. Mời anh vào nhà.' },
          ruby: [{ base: '入', reading: 'はい' }]
        },
        {
          speakerId: 'miller',
          jp: '大きな リュックですね。山へ 行くんですか。',
          romaji: 'Ōkina ryukku desu ne. Yama e iku n desu ka.',
          meaning: {
            en: 'That is a big backpack. Are you going to the mountains?',
            vi: 'Ba lô to nhỉ. Anh đi lên núi à?'
          },
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '山', reading: 'やま' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'suzuki',
          jp: 'いいえ。これは 非常袋です。',
          romaji: 'Iie. Kore wa hijōbukuro desu.',
          meaning: { en: 'No. This is an emergency bag.', vi: 'Không. Đây là túi khẩn cấp.' },
          ruby: [
            { base: '非', reading: 'ひ' },
            { base: '常', reading: 'じょう' },
            { base: '袋', reading: 'ぶくろ' }
          ]
        },
        {
          speakerId: 'miller',
          jp: '非常袋？何ですか。',
          romaji: 'Hijōbukuro? Nan desu ka.',
          meaning: { en: 'Emergency bag? What is it?', vi: 'Túi khẩn cấp? Là gì?' },
          ruby: [
            { base: '非', reading: 'ひ' },
            { base: '常', reading: 'じょう' },
            { base: '袋', reading: 'ぶくろ' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          speakerId: 'suzuki',
          jp: '非常時に 使う ものを 入れた 袋です。停電や ガスが 止まって も、3日くらい 生活できる ものが 入っています。',
          romaji:
            'Hijōji ni tsukau mono o ireta fukuro desu. Teiden ya gasu ga tomatte mo, mikka kurai seikatsu dekiru mono ga haitte imasu.',
          meaning: {
            en: 'It is a bag with things for emergencies. Even if the power or gas goes out, it has enough to get by for about three days.',
            vi: 'Túi đựng đồ dùng khẩn cấp. Mất điện hoặc ga vẫn sống được khoảng 3 ngày.'
          },
          ruby: [
            { base: '非', reading: 'ひ' },
            { base: '常', reading: 'じょう' },
            { base: '時', reading: 'じ' },
            { base: '使', reading: 'つか' },
            { base: '入', reading: 'い' },
            { base: '袋', reading: 'ふくろ' },
            { base: '停', reading: 'てい' },
            { base: '電', reading: 'でん' },
            { base: '止', reading: 'と' },
            { base: '日', reading: 'か' },
            { base: '生', reading: 'せい' },
            { base: '活', reading: 'かつ' },
            { base: '入', reading: 'はい' }
          ]
        },
        {
          speakerId: 'miller',
          jp: '水と 食べ物ですか。',
          romaji: 'Mizu to tabemono desu ka.',
          meaning: { en: 'Water and food?', vi: 'Nước và thức ăn à?' },
          ruby: [
            { base: '水', reading: 'みず' },
            { base: '食', reading: 'た' },
            { base: '物', reading: 'もの' }
          ]
        },
        {
          speakerId: 'suzuki',
          jp: 'はい。ほかにも いろいろ あります。懐中電灯とか ラジオとか……。',
          romaji: 'Hai. Hoka ni mo iroiro arimasu. Kaichū dentō toka rajio toka…….',
          meaning: {
            en: 'Yes. There are various other things too, like a flashlight and a radio...',
            vi: 'Vâng. Còn nhiều thứ khác. Như đèn pin, đài...'
          },
          ruby: [
            { base: '懐', reading: 'かい' },
            { base: '中', reading: 'ちゅう' },
            { base: '電', reading: 'でん' },
            { base: '灯', reading: 'とう' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'それで わたしも そろえなきゃ。',
          romaji: 'Sore de watashi mo soroena kya.',
          meaning: {
            en: 'In that case I have to prepare one too.',
            vi: 'Thế thì tôi cũng phải chuẩn bị sẵn thôi.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '揃', reading: 'そろ' }
          ]
        },
        {
          speakerId: 'suzuki',
          jp: 'スーパーでも 売っていますよ。',
          romaji: 'Sūpā demo utte imasu yo.',
          meaning: { en: 'They sell them at supermarkets too.', vi: 'Siêu thị cũng bán đấy.' },
          ruby: [{ base: '売', reading: 'う' }]
        },
        {
          speakerId: 'miller',
          jp: 'そうですか。じゃ、買って おきます。',
          romaji: 'Sō desu ka. Ja, katte okimasu.',
          meaning: {
            en: 'I see. Then I will buy one in advance.',
            vi: 'Thế à. Vậy tôi sẽ mua sẵn.'
          },
          ruby: [{ base: '買', reading: 'か' }]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N1 に N2 が V-て あります',
      highlights: ['に', 'が', 'て', 'あり'],
      title: { en: 'Intentional placement (V-てあります)', vi: 'Đặt có chủ ý (V-てあります)' },
      explanation: {
        en: 'V-てあります with transitive verbs shows something was placed on purpose and remains there: 机の 上に メモが 置いて あります. Contrast 窓が 閉まっています (state) vs 窓が 閉めて あります (someone closed it).',
        vi: 'V-てあります với động từ tự động cho thấy ai đó đặt có chủ ý: 机の 上に メモが 置いて あります. So sánh 窓が 閉まっています (trạng thái) với 窓が 閉めて あります (ai đó đóng).'
      },
      explanationRuby: [
        { base: '机', reading: 'つくえ' },
        { base: '上', reading: 'うえ' },
        { base: '置', reading: 'お' },
        { base: '窓', reading: 'まど' },
        { base: '閉', reading: 'し' },
        { base: '窓', reading: 'まど' },
        { base: '閉', reading: 'し' }
      ],
      examples: [
        {
          jp: '机の 上に メモが 置いて あります。',
          romaji: 'Tsukue no ue ni memo ga oite arimasu.',
          meaning: { en: 'A memo has been placed on the desk.', vi: 'Trên bàn có đặt memo.' },
          ruby: [
            { base: '机', reading: 'つくえ' },
            { base: '上', reading: 'うえ' },
            { base: '置', reading: 'お' }
          ]
        },
        {
          jp: 'カレンダーに 今月の 予定が 書いて あります。',
          romaji: 'Karendā ni kongetsu no yotei ga kaite arimasu.',
          meaning: {
            en: 'This month schedule is written on the calendar.',
            vi: 'Lịch tháng này viết trên lịch treo tường.'
          },
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '月', reading: 'げつ' },
            { base: '予', reading: 'よ' },
            { base: '定', reading: 'てい' },
            { base: '書', reading: 'か' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て おきます',
      highlights: ['て', 'お'],
      title: { en: 'Prepare in advance (V-ておきます)', vi: 'Chuẩn bị trước (V-ておきます)' },
      explanation: {
        en: 'V-ておきます means doing something in advance or keeping a state ready: 切符を 買って おきます, はさみを 元の 所に 戻して おいて ください, いすは この ままに して おいて ください. Colloquially contracts to 〜とく/〜どく.',
        vi: 'V-ておきます: làm trước hoặc giữ trạng thái sẵn sàng: 切符を 買って おきます, はさみを 元の 所に 戻して おいて ください, いすは この ままに して おいて ください. Khẩu ngữ rút thành 〜とく/〜どく.'
      },
      explanationRuby: [
        { base: '切', reading: 'きっ' },
        { base: '符', reading: 'ぷ' },
        { base: '買', reading: 'か' },
        { base: '元', reading: 'もと' },
        { base: '所', reading: 'ところ' },
        { base: '戻', reading: 'もど' }
      ],
      examples: [
        {
          jp: '旅行の 前に、切符を 買って おきます。',
          romaji: 'Ryokō no mae ni, kippu o katte okimasu.',
          meaning: {
            en: 'Before the trip I will buy tickets in advance.',
            vi: 'Trước chuyến đi tôi mua vé trước.'
          },
          ruby: [
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' },
            { base: '前', reading: 'まえ' },
            { base: '切', reading: 'きっ' },
            { base: '符', reading: 'ぷ' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          jp: 'はさみを 使ったら、元の 所に 戻して おいて ください。',
          romaji: 'Hasami o tsukattara, moto no tokoro ni modoshite oite kudasai.',
          meaning: {
            en: 'After using the scissors, please put them back where they belong.',
            vi: 'Dùng kéo xong hãy để lại chỗ cũ.'
          },
          ruby: [
            { base: '使', reading: 'つか' },
            { base: '元', reading: 'もと' },
            { base: '所', reading: 'ところ' },
            { base: '戻', reading: 'もど' }
          ]
        }
      ]
    },
    {
      pattern: 'まだ + affirmative',
      highlights: ['まだ'],
      title: { en: 'Still continuing (まだ)', vi: 'Vẫn còn (まだ)' },
      explanation: {
        en: 'まだ before an affirmative verb or 〜ています means the action or state is still continuing: まだ 雨が 降っています, まだ 使っていますから、その ままに して おいて ください.',
        vi: 'まだ trước khẳng định hoặc 〜ています nghĩa hành động/trạng thái vẫn tiếp diễn: まだ 雨が 降っています, まだ 使っていますから、その ままに して おいて ください.'
      },
      explanationRuby: [
        { base: '雨', reading: 'あめ' },
        { base: '降', reading: 'ふ' },
        { base: '使', reading: 'つか' }
      ],
      examples: [
        {
          jp: 'まだ 雨が 降っています。',
          romaji: 'Mada ame ga futte imasu.',
          meaning: { en: 'It is still raining.', vi: 'Trời vẫn còn mưa.' },
          ruby: [
            { base: '雨', reading: 'あめ' },
            { base: '降', reading: 'ふ' }
          ]
        },
        {
          jp: 'まだ 使っていますから、その ままに して おいて ください。',
          romaji: 'Mada tsukatte imasu kara, sono mama ni shite oite kudasai.',
          meaning: {
            en: 'I am still using them, so please leave them as they are.',
            vi: 'Tôi vẫn dùng nên cứ để nguyên.'
          },
          ruby: [{ base: '使', reading: 'つか' }]
        }
      ]
    },
    {
      pattern: 'N とか、N とか',
      highlights: ['と', 'か'],
      title: { en: 'Listing examples (とか)', vi: 'Liệt kê ví dụ (とか)' },
      explanation: {
        en: 'とか lists examples like や but is more colloquial and can follow the last item: テニスとか 水泳とか.',
        vi: 'とか liệt kê ví dụ như や nhưng khẩu ngữ hơn và có thể đứng sau mục cuối: テニスとか 水泳とか.'
      },
      explanationRuby: [
        { base: '水', reading: 'すい' },
        { base: '泳', reading: 'えい' }
      ],
      examples: [
        {
          jp: 'どんな スポーツを して いますか。……テニスとか 水泳とか……。',
          romaji: 'Donna supōtsu o shite imasu ka. ……Tenisu toka suiei toka…….',
          meaning: {
            en: 'What sports do you play? ...Things like tennis and swimming...',
            vi: 'Anh/chị chơi môn gì? ...Ten-nít, bơi lội, v.v...'
          },
          ruby: [
            { base: '水', reading: 'すい' },
            { base: '泳', reading: 'えい' }
          ]
        }
      ]
    },
    {
      pattern: 'Trợ từ + も',
      highlights: ['も'],
      title: { en: 'Particle + も emphasis', vi: 'Trợ từ + も nhấn mạnh' },
      explanation: {
        en: 'When も combines with a noun that already has a particle, が and を drop but others stay: ほかにも, どこ [へ] も 行きません.',
        vi: 'Khi も kết hợp với danh từ đã có trợ từ, が và を lược bỏ; trợ từ khác giữ lại: ほかにも, どこ [へ] も 行きません.'
      },
      explanationRuby: [{ base: '行', reading: 'い' }],
      examples: [
        {
          jp: 'ほかにも いろいろ あります。',
          romaji: 'Hoka ni mo iroiro arimasu.',
          meaning: { en: 'There are various other things too.', vi: 'Ngoài ra còn nhiều thứ khác.' }
        },
        {
          jp: 'どこ [へ] も 行きません。',
          romaji: 'Doko [e] mo ikimasen.',
          meaning: { en: 'I am not going anywhere.', vi: 'Tôi chẳng đi đâu cả.' },
          ruby: [{ base: '行', reading: 'い' }]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson30-dream',
      title: { en: 'A round dream', vi: 'Giấc mơ tròn' },
      lines: [
        {
          jp: 'ある 日、丸い ボールの ような 夢を 見ました。',
          romaji: 'Aru hi, marui bōru no yō na yume o mimashita.',
          meaning: {
            en: 'One day I dreamed of something like a round ball.',
            vi: 'Một ngày nào đó tôi mơ thấy thứ giống quả bóng tròn.'
          },
          ruby: [
            { base: '日', reading: 'ひ' },
            { base: '丸', reading: 'まる' },
            { base: '夢', reading: 'ゆめ' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          jp: 'とても うれしい 夢でした。',
          romaji: 'Totemo ureshii yume deshita.',
          meaning: { en: 'It was a very happy dream.', vi: 'Một giấc mơ rất vui.' },
          ruby: [{ base: '夢', reading: 'ゆめ' }]
        },
        {
          jp: 'すると、目が 覚めて、ちょっと 嫌な 気持ちに なりました。',
          romaji: 'Suruto, me ga samete, chotto iya na kimochi ni narimashita.',
          meaning: {
            en: 'Then I woke up and felt a little unpleasant.',
            vi: 'Thế là tôi tỉnh dậy và hơi khó chịu.'
          },
          ruby: [
            { base: '目', reading: 'め' },
            { base: '覚', reading: 'さ' },
            { base: '嫌', reading: 'いや' },
            { base: '気', reading: 'き' },
            { base: '持', reading: 'も' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What shape was the dream like?', vi: 'Giấc mơ giống hình gì?' },
          choices: [
            { id: 'a', label: { en: 'A round ball', vi: 'Quả bóng tròn' } },
            { id: 'b', label: { en: 'A square box', vi: 'Hộp vuông' } },
            { id: 'c', label: { en: 'A long road', vi: 'Con đường dài' } },
            { id: 'd', label: { en: 'A tall tree', vi: 'Cây cao' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'steps',
      title: { en: 'In case of emergency', vi: 'Trường hợp khẩn cấp' },
      intro: {
        en: 'Basic preparation before an earthquake or other disaster.',
        vi: 'Chuẩn bị cơ bản trước động đất hoặc thiên tai.'
      },
      steps: [
        {
          text: {
            en: 'Secure furniture so it will not fall over.',
            vi: 'Cố định đồ nội thất để không bị đổ.'
          }
        },
        {
          text: {
            en: 'Keep fire extinguishers and store water.',
            vi: 'Chuẩn bị bình cứu hỏa và dự trữ nước.'
          }
        },
        {
          text: {
            en: 'Prepare an emergency bag.',
            vi: 'Chuẩn bị túi khẩn cấp.'
          }
        }
      ]
    }
  ]
};
