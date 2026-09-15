import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 23 (とき, と natural result, movement verbs). */
export const n5Lesson23: Lesson = {
  id: 'lesson-23',
  number: 23,
  title: {
    en: 'When and if',
    vi: 'Khi nào và nếu'
  },
  focus: {
    en: 'Describe when something happens with 〜とき, express natural results with と, and use movement verbs with を and が.',
    vi: 'Nói thời điểm với 〜とき, kết quả tất yếu với と, và dùng động từ chuyển động với を và が.'
  },
  vocab: [
    {
      kana: 'ききます',
      kanji: '聞きます',
      romaji: 'kikimasu',
      meaning: {
        en: 'to ask, to inquire (先生に～: ask a teacher)',
        vi: 'hỏi (先生に～: hỏi thầy/cô)'
      },
      ruby: [{ base: '聞', reading: 'き' }]
    },
    {
      kana: 'まわします',
      kanji: '回します',
      romaji: 'mawashimasu',
      meaning: { en: 'to turn (a knob, dial)', vi: 'vặn, quay (núm, nút)' },
      ruby: [{ base: '回', reading: 'まわ' }]
    },
    {
      kana: 'ひきます',
      kanji: '引きます',
      romaji: 'hikimasu',
      meaning: { en: 'to pull', vi: 'kéo' },
      ruby: [{ base: '引', reading: 'ひ' }]
    },
    {
      kana: 'かえます',
      kanji: '変えます',
      romaji: 'kaemasu',
      meaning: { en: 'to change, to alter', vi: 'thay đổi, đổi' },
      ruby: [{ base: '変', reading: 'か' }]
    },
    {
      kana: 'さわります',
      kanji: '触ります',
      romaji: 'sawarimasu',
      meaning: { en: 'to touch', vi: 'chạm, sờ' },
      ruby: [{ base: '触', reading: 'さわ' }]
    },
    {
      kana: 'でます',
      kanji: '出ます',
      romaji: 'demasu',
      meaning: {
        en: 'to come out (お釣りが～: change comes out)',
        vi: 'ra (お釣りが～: tiền thối ra)'
      },
      ruby: [{ base: '出', reading: 'で' }]
    },
    {
      kana: 'うごきます',
      kanji: '動きます',
      romaji: 'ugokimasu',
      meaning: { en: 'to move, to work (machine)', vi: 'chuyển động, chạy (máy)' },
      ruby: [{ base: '動', reading: 'うご' }]
    },
    {
      kana: 'あるきます',
      kanji: '歩きます',
      romaji: 'arukimasu',
      meaning: {
        en: 'to walk (道を～: walk along a road)',
        vi: 'đi bộ (道を～: đi trên đường)'
      },
      ruby: [{ base: '歩', reading: 'ある' }]
    },
    {
      kana: 'わたります',
      kanji: '渡ります',
      romaji: 'watarimasu',
      meaning: {
        en: 'to cross (橋を～: cross a bridge)',
        vi: 'băng qua (橋を～: qua cầu)'
      },
      ruby: [{ base: '渡', reading: 'わた' }]
    },
    {
      kana: 'きをつけます',
      kanji: '気をつけます',
      romaji: 'ki o tsukemasu',
      meaning: { en: 'to be careful', vi: 'cẩn thận, chú ý' },
      ruby: [{ base: '気', reading: 'き' }]
    },
    {
      kana: 'ひっこしします',
      kanji: '引っ越しします',
      romaji: 'hikkoshi shimasu',
      meaning: { en: 'to move (house)', vi: 'chuyển nhà' },
      ruby: [
        { base: '引', reading: 'ひ' },
        { base: '越', reading: 'こ' }
      ]
    },
    {
      kana: 'でんきや',
      kanji: '電気屋',
      romaji: 'denkiya',
      meaning: { en: 'electrical appliance store', vi: 'cửa hàng điện máy' },
      ruby: [
        { base: '電', reading: 'でん' },
        { base: '気', reading: 'き' },
        { base: '屋', reading: 'や' }
      ]
    },
    {
      kana: '～や',
      kanji: '～屋',
      romaji: '~ya',
      meaning: { en: 'shop, store (suffix)', vi: 'cửa hàng (hậu tố)' },
      ruby: [{ base: '屋', reading: 'や' }]
    },
    {
      kana: 'サイズ',
      romaji: 'saizu',
      meaning: { en: 'size', vi: 'cỡ, kích cỡ' }
    },
    {
      kana: 'おと',
      kanji: '音',
      romaji: 'oto',
      meaning: { en: 'sound', vi: 'âm thanh, tiếng' },
      ruby: [{ base: '音', reading: 'おと' }]
    },
    {
      kana: 'きかい',
      kanji: '機械',
      romaji: 'kikai',
      meaning: { en: 'machine', vi: 'máy móc' },
      ruby: [{ base: '機', reading: 'き' }]
    },
    {
      kana: 'つまみ',
      romaji: 'tsumami',
      meaning: { en: 'knob, dial', vi: 'núm vặn, nút quay' }
    },
    {
      kana: 'こしょう',
      kanji: '故障',
      romaji: 'koshō',
      meaning: { en: 'breakdown, malfunction', vi: 'hỏng, sự cố' },
      ruby: [{ base: '故', reading: 'こ' }]
    },
    {
      kana: 'こしょうします',
      kanji: '故障します',
      romaji: 'koshō shimasu',
      meaning: { en: 'to break down, to malfunction', vi: 'bị hỏng, trục trặc' },
      ruby: [{ base: '故', reading: 'こ' }]
    },
    {
      kana: 'みち',
      kanji: '道',
      romaji: 'michi',
      meaning: { en: 'road, way', vi: 'đường, lối đi' },
      ruby: [{ base: '道', reading: 'みち' }]
    },
    {
      kana: 'こうさてん',
      kanji: '交差点',
      romaji: 'kōsaten',
      meaning: { en: 'intersection, crossroads', vi: 'ngã tư, giao lộ' },
      ruby: [
        { base: '交', reading: 'こう' },
        { base: '差', reading: 'さ' },
        { base: '点', reading: 'てん' }
      ]
    },
    {
      kana: 'しんごう',
      kanji: '信号',
      romaji: 'shingō',
      meaning: { en: 'traffic light, signal', vi: 'đèn tín hiệu, đèn giao thông' },
      ruby: [
        { base: '信', reading: 'しん' },
        { base: '号', reading: 'ごう' }
      ]
    },
    {
      kana: 'かど',
      kanji: '角',
      romaji: 'kado',
      meaning: { en: 'corner', vi: 'góc (đường)' },
      ruby: [{ base: '角', reading: 'かど' }]
    },
    {
      kana: 'はし',
      kanji: '橋',
      romaji: 'hashi',
      meaning: { en: 'bridge', vi: 'cầu' },
      ruby: [{ base: '橋', reading: 'はし' }]
    },
    {
      kana: 'ちゅうしゃじょう',
      kanji: '駐車場',
      romaji: 'chūshajō',
      meaning: { en: 'parking lot', vi: 'bãi đỗ xe' },
      ruby: [
        { base: '駐', reading: 'ちゅう' },
        { base: '車', reading: 'しゃ' },
        { base: '場', reading: 'じょう' }
      ]
    },
    {
      kana: '～め',
      kanji: '～目',
      romaji: '~me',
      meaning: { en: 'ordinal suffix (1st, 2nd...)', vi: 'hậu tố thứ tự (thứ nhất, thứ hai...)' },
      ruby: [{ base: '目', reading: 'め' }]
    },
    {
      kana: 'しょうがつ',
      kanji: '正月',
      romaji: 'shōgatsu',
      meaning: { en: 'New Year (January)', vi: 'Tết, năm mới (tháng Giêng)' },
      ruby: [{ base: '正', reading: 'しょう' }]
    },
    {
      kana: 'たてもの',
      kanji: '建物',
      romaji: 'tatemono',
      meaning: { en: 'building', vi: 'tòa nhà, công trình' },
      ruby: [{ base: '建', reading: 'たて' }]
    },
    {
      kana: 'がいこくじんとうろくしょう',
      kanji: '外国人登録証',
      romaji: 'gaikokujin tōroku shō',
      meaning: { en: 'alien registration card', vi: 'thẻ đăng ký người nước ngoài' },
      ruby: [
        { base: '外', reading: 'がい' },
        { base: '国', reading: 'こく' },
        { base: '人', reading: 'じん' },
        { base: '登', reading: 'とう' },
        { base: '録', reading: 'ろく' },
        { base: '証', reading: 'しょう' }
      ]
    }
  ],
  phrases: [],
  conversation: [
    {
      id: 'conv-lesson23-appliance',
      title: { en: 'At the electronics store', vi: 'Ở cửa hàng điện máy' },
      speakers: [
        { id: 'clerk', name: '店員' },
        { id: 'miller', name: 'ミラー' }
      ],
      lines: [
        {
          speakerId: 'miller',
          jp: 'すみません。この 機械が 動きません。故障ですか。',
          romaji: 'Sumimasen. Kono kikai ga ugokimasen. Koshō desu ka.',
          meaning: {
            en: 'Excuse me. This machine does not work. Is it broken?',
            vi: 'Xin lỗi. Cái máy này không chạy. Có bị hỏng không?'
          },
          ruby: [
            { base: '機', reading: 'き' },
            { base: '械', reading: 'かい' },
            { base: '動', reading: 'うご' },
            { base: '故', reading: 'こ' },
            { base: '障', reading: 'しょう' }
          ]
        },
        {
          speakerId: 'clerk',
          jp: 'つまみを 右に 回して ください。音が 出ると 動きますよ。',
          romaji: 'Tsumami o migi ni mawashite kudasai. Oto ga deru to ugokimasu yo.',
          meaning: {
            en: 'Please turn the knob to the right. When a sound comes out, it will work.',
            vi: 'Xin vặn núm sang phải. Khi có tiếng thì máy sẽ chạy.'
          },
          ruby: [
            { base: '右', reading: 'みぎ' },
            { base: '回', reading: 'まわ' },
            { base: '音', reading: 'おと' },
            { base: '出', reading: 'で' },
            { base: '動', reading: 'うご' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'あ、動きました。サイズを 変えたい です。',
          romaji: 'A, ugokimashita. Saizu o kaetai desu.',
          meaning: {
            en: 'Oh, it works. I want to change the size.',
            vi: 'À, chạy rồi. Tôi muốn đổi cỡ.'
          },
          ruby: [
            { base: '動', reading: 'うご' },
            { base: '変', reading: 'か' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson23-directions',
      title: { en: 'Asking for directions', vi: 'Hỏi đường' },
      speakers: [
        { id: 'miller', name: 'ミラー' },
        { id: 'passerby', name: '通行人' }
      ],
      lines: [
        {
          speakerId: 'miller',
          jp: 'すみません。市役所まで 道を 教えて ください。',
          romaji: 'Sumimasen. Shiyakusho made michi o oshiete kudasai.',
          meaning: {
            en: 'Excuse me. Please tell me the way to city hall.',
            vi: 'Xin lỗi. Xin chỉ đường đến ủy ban thành phố.'
          },
          ruby: [
            { base: '市', reading: 'し' },
            { base: '役', reading: 'やく' },
            { base: '所', reading: 'しょ' },
            { base: '道', reading: 'みち' },
            { base: '教', reading: 'おし' }
          ]
        },
        {
          speakerId: 'passerby',
          jp: 'この 道を まっすぐ 歩いて、2つ目の 信号を 右に 曲がって ください。',
          romaji: 'Kono michi o massugu aruite, futatsume no shingō o migi ni magatte kudasai.',
          meaning: {
            en: 'Walk straight on this road, then turn right at the second traffic light.',
            vi: 'Đi thẳng trên đường này, rẽ phải ở đèn tín hiệu thứ hai.'
          },
          ruby: [
            { base: '道', reading: 'みち' },
            { base: '歩', reading: 'ある' },
            { base: '目', reading: 'め' },
            { base: '信', reading: 'しん' },
            { base: '号', reading: 'ごう' },
            { base: '右', reading: 'みぎ' },
            { base: '曲', reading: 'ま' }
          ]
        },
        {
          speakerId: 'miller',
          jp: '交差点を 渡る とき 気を つけます。ありがとう ございました。',
          romaji: 'Kōsaten o wataru toki ki o tsukemasu. Arigatō gozaimashita.',
          meaning: {
            en: 'I will be careful when crossing the intersection. Thank you very much.',
            vi: 'Tôi sẽ cẩn thận khi qua ngã tư. Cảm ơn nhiều.'
          },
          ruby: [
            { base: '交', reading: 'こう' },
            { base: '差', reading: 'さ' },
            { base: '点', reading: 'てん' },
            { base: '渡', reading: 'わた' },
            { base: '気', reading: 'き' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'Plain form ＋ とき',
      patternRuby: [{ base: '時', reading: 'とき' }],
      highlights: ['とき'],
      title: { en: 'When something happens (〜とき)', vi: 'Khi nào (〜とき)' },
      explanation: {
        en: 'Plain form + とき means "when": 日本へ 行く とき パスポートが 要ります. Past events use past plain form: 学生の とき よく 勉強しました.',
        vi: 'Thể thường + とき nghĩa "khi": 日本へ 行く とき パスポートが 要ります. Việc đã qua dùng thể quá khứ thường: 学生の とき よく 勉強しました.'
      },
      explanationRuby: [
        { base: '日', reading: 'に' },
        { base: '本', reading: 'ほん' },
        { base: '行', reading: 'い' },
        { base: '要', reading: 'い' },
        { base: '学', reading: 'がく' },
        { base: '生', reading: 'せい' },
        { base: '勉', reading: 'べん' },
        { base: '強', reading: 'きょう' }
      ],
      examples: [
        {
          jp: '機械を 触る とき 気を つけて ください。',
          romaji: 'Kikai o sawaru toki ki o tsukete kudasai.',
          meaning: {
            en: 'Please be careful when touching the machine.',
            vi: 'Khi chạm máy hãy cẩn thận.'
          },
          ruby: [
            { base: '機', reading: 'き' },
            { base: '械', reading: 'かい' },
            { base: '触', reading: 'さわ' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          jp: '橋を 渡る とき 信号を 見て ください。',
          romaji: 'Hashi o wataru toki shingō o mite kudasai.',
          meaning: {
            en: 'When crossing the bridge, please watch the signal.',
            vi: 'Khi qua cầu hãy nhìn đèn tín hiệu.'
          },
          ruby: [
            { base: '橋', reading: 'はし' },
            { base: '渡', reading: 'わた' },
            { base: '信', reading: 'しん' },
            { base: '号', reading: 'ごう' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          jp: '正月の とき 家族と 一緒に いました。',
          romaji: 'Shōgatsu no toki kazoku to issho ni imashita.',
          meaning: {
            en: 'During New Year I was with my family.',
            vi: 'Dịp Tết tôi ở cùng gia đình.'
          },
          ruby: [
            { base: '正', reading: 'しょう' },
            { base: '月', reading: 'がつ' },
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '一', reading: 'いっ' },
            { base: '緒', reading: 'しょ' }
          ]
        }
      ]
    },
    {
      pattern: 'V (dictionary form) ＋ と',
      highlights: ['と'],
      title: { en: 'Natural result (〜と)', vi: 'Kết quả tất yếu (〜と)' },
      explanation: {
        en: 'Dictionary form + と expresses a natural, automatic result: 右へ 回す と 音が 出ます. It is not a personal choice but what always happens.',
        vi: 'Thể từ điển + と diễn tả kết quả tất yếu: 右へ 回す と 音が 出ます. Không phải ý muốn cá nhân mà là điều luôn xảy ra.'
      },
      explanationRuby: [
        { base: '右', reading: 'みぎ' },
        { base: '回', reading: 'まわ' },
        { base: '音', reading: 'おと' },
        { base: '出', reading: 'で' }
      ],
      examples: [
        {
          jp: 'この つまみを 回す と 機械が 動きます。',
          romaji: 'Kono tsumami o mawasu to kikai ga ugokimasu.',
          meaning: {
            en: 'When you turn this knob, the machine moves.',
            vi: 'Vặn núm này thì máy chạy.'
          },
          ruby: [
            { base: '回', reading: 'まわ' },
            { base: '機', reading: 'き' },
            { base: '械', reading: 'かい' },
            { base: '動', reading: 'うご' }
          ]
        },
        {
          jp: '春になる と 暖かく なります。',
          romaji: 'Haru ni naru to atatakaku narimasu.',
          meaning: {
            en: 'When spring comes, it gets warm.',
            vi: 'Đến mùa xuân thì ấm lên.'
          },
          ruby: [
            { base: '春', reading: 'はる' },
            { base: '暖', reading: 'あたた' }
          ]
        },
        {
          jp: 'お金を 入れる と お釣りが 出ます。',
          romaji: 'Okane o ireru to otsuri ga demasu.',
          meaning: {
            en: 'When you put in money, change comes out.',
            vi: 'Bỏ tiền vào thì tiền thối ra.'
          },
          ruby: [
            { base: '金', reading: 'かね' },
            { base: '入', reading: 'い' },
            { base: '釣', reading: 'つ' },
            { base: '出', reading: 'で' }
          ]
        }
      ]
    },
    {
      pattern: 'N が Adj／V',
      highlights: ['が'],
      title: { en: 'Subject with が (N が 〜)', vi: 'Chủ ngữ với が (N が 〜)' },
      explanation: {
        en: 'が marks the subject when describing a state or action: 機械が 故障します, 音が 大きいです.',
        vi: 'が đánh dấu chủ ngữ khi miêu tả trạng thái hoặc hành động: 機械が 故障します, 音が 大きいです.'
      },
      explanationRuby: [
        { base: '機', reading: 'き' },
        { base: '械', reading: 'かい' },
        { base: '故', reading: 'こ' },
        { base: '障', reading: 'しょう' },
        { base: '音', reading: 'おと' },
        { base: '大', reading: 'おお' }
      ],
      examples: [
        {
          jp: 'この 建物は 古いですが、中は きれいです。',
          romaji: 'Kono tatemono wa furui desu ga, naka wa kirei desu.',
          meaning: {
            en: 'This building is old, but inside it is clean.',
            vi: 'Tòa nhà này cũ nhưng bên trong sạch.'
          },
          ruby: [
            { base: '建', reading: 'たて' },
            { base: '物', reading: 'もの' },
            { base: '古', reading: 'ふる' },
            { base: '中', reading: 'なか' }
          ]
        },
        {
          jp: '信号が 赤に なりました。',
          romaji: 'Shingō ga aka ni narimashita.',
          meaning: { en: 'The traffic light turned red.', vi: 'Đèn tín hiệu chuyển đỏ.' },
          ruby: [
            { base: '信', reading: 'しん' },
            { base: '号', reading: 'ごう' },
            { base: '赤', reading: 'あか' }
          ]
        }
      ]
    },
    {
      pattern: 'N を V (movement)',
      highlights: ['を'],
      title: { en: 'Movement through a place (N を V)', vi: 'Di chuyển qua nơi chốn (N を V)' },
      explanation: {
        en: 'Movement verbs like 歩く, 渡る, 曲がる take を for the path passed: 道を 歩く, 橋を 渡る, 角を 曲がる.',
        vi: 'Động từ chuyển động như 歩く, 渡る, 曲がる dùng を cho lộ trình: 道を 歩く, 橋を 渡る, 角を 曲がる.'
      },
      explanationRuby: [
        { base: '歩', reading: 'ある' },
        { base: '渡', reading: 'わた' },
        { base: '曲', reading: 'ま' },
        { base: '道', reading: 'みち' },
        { base: '歩', reading: 'ある' },
        { base: '橋', reading: 'はし' },
        { base: '渡', reading: 'わた' },
        { base: '角', reading: 'かど' },
        { base: '曲', reading: 'ま' }
      ],
      examples: [
        {
          jp: 'この 道を 歩いて 交差点まで 行きます。',
          romaji: 'Kono michi o aruite kōsaten made ikimasu.',
          meaning: {
            en: 'Walk along this road to the intersection.',
            vi: 'Đi bộ trên đường này đến ngã tư.'
          },
          ruby: [
            { base: '道', reading: 'みち' },
            { base: '歩', reading: 'ある' },
            { base: '交', reading: 'こう' },
            { base: '差', reading: 'さ' },
            { base: '点', reading: 'てん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '橋を 渡って 駐車場に 行きました。',
          romaji: 'Hashi o watatte chūshajō ni ikimashita.',
          meaning: {
            en: 'We crossed the bridge and went to the parking lot.',
            vi: 'Chúng tôi qua cầu rồi đến bãi đỗ xe.'
          },
          ruby: [
            { base: '橋', reading: 'はし' },
            { base: '渡', reading: 'わた' },
            { base: '駐', reading: 'ちゅう' },
            { base: '車', reading: 'しゃ' },
            { base: '場', reading: 'じょう' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson23-moving',
      title: { en: 'Moving house', vi: 'Chuyển nhà' },
      lines: [
        {
          jp: '来月 引っ越しを します。新しい アパートは 駅の 近くです。',
          romaji: 'Raigetsu hikkoshi o shimasu. Atarashii apāto wa eki no chikaku desu.',
          meaning: {
            en: 'I will move next month. The new apartment is near the station.',
            vi: 'Tháng sau tôi chuyển nhà. Căn hộ mới gần ga.'
          },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '月', reading: 'げつ' },
            { base: '引', reading: 'ひ' },
            { base: '越', reading: 'こ' },
            { base: '新', reading: 'あたら' },
            { base: '駅', reading: 'えき' },
            { base: '近', reading: 'ちか' }
          ]
        },
        {
          jp: '引っ越しの とき 外国人登録証の 住所を 変えなければ なりません。',
          romaji: 'Hikkoshi no toki gaikokujin tōroku shō no jūsho o kaenakereba narimasen.',
          meaning: {
            en: 'When moving, I must change the address on my alien registration card.',
            vi: 'Khi chuyển nhà phải đổi địa chỉ trên thẻ đăng ký người nước ngoài.'
          },
          ruby: [
            { base: '引', reading: 'ひ' },
            { base: '越', reading: 'こ' },
            { base: '外', reading: 'がい' },
            { base: '国', reading: 'こく' },
            { base: '人', reading: 'じん' },
            { base: '登', reading: 'とう' },
            { base: '録', reading: 'ろく' },
            { base: '証', reading: 'しょう' },
            { base: '住', reading: 'じゅう' },
            { base: '所', reading: 'しょ' },
            { base: '変', reading: 'か' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'When will the speaker move?', vi: 'Người nói chuyển nhà khi nào?' },
          choices: [
            { id: 'a', label: { en: 'Next month', vi: 'Tháng sau' } },
            { id: 'b', label: { en: 'This week', vi: 'Tuần này' } },
            { id: 'c', label: { en: 'During New Year', vi: 'Dịp Tết' } },
            { id: 'd', label: { en: 'Yesterday', vi: 'Hôm qua' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What must be changed when moving?',
            vi: 'Phải đổi gì khi chuyển nhà?'
          },
          choices: [
            {
              id: 'a',
              label: { en: 'Address on registration card', vi: 'Địa chỉ trên thẻ đăng ký' }
            },
            { id: 'b', label: { en: 'Shoe size', vi: 'Cỡ giày' } },
            { id: 'c', label: { en: 'Traffic light', vi: 'Đèn tín hiệu' } },
            { id: 'd', label: { en: 'Machine knob', vi: 'Núm máy' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson23-walk',
      title: { en: 'Walking to the city office', vi: 'Đi bộ đến ủy ban thành phố' },
      lines: [
        {
          jp: '私は 毎日 道を 歩いて 会社へ 行きます。',
          romaji: 'Watashi wa mainichi michi o aruite kaisha e ikimasu.',
          meaning: {
            en: 'I walk along the road to the office every day.',
            vi: 'Mỗi ngày tôi đi bộ trên đường đến công ty.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '道', reading: 'みち' },
            { base: '歩', reading: 'ある' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '角を 曲がる と 大きな 建物が 見えます。そこが 市役所です。',
          romaji: 'Kado o magaru to ōkina tatemono ga miemasu. Soko ga shiyakusho desu.',
          meaning: {
            en: 'When you turn the corner, you can see a large building. That is city hall.',
            vi: 'Rẽ góc thì thấy tòa nhà lớn. Đó là ủy ban thành phố.'
          },
          ruby: [
            { base: '角', reading: 'かど' },
            { base: '曲', reading: 'ま' },
            { base: '大', reading: 'おお' },
            { base: '建', reading: 'たて' },
            { base: '物', reading: 'もの' },
            { base: '見', reading: 'み' },
            { base: '市', reading: 'し' },
            { base: '役', reading: 'やく' },
            { base: '所', reading: 'しょ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'How does the speaker go to work?', vi: 'Người nói đi làm thế nào?' },
          choices: [
            { id: 'a', label: { en: 'Walk along the road', vi: 'Đi bộ trên đường' } },
            { id: 'b', label: { en: 'By train only', vi: 'Chỉ bằng tàu' } },
            { id: 'c', label: { en: 'By car', vi: 'Bằng ô tô' } },
            { id: 'd', label: { en: 'Not mentioned', vi: 'Không nói' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What can you see after turning the corner?', vi: 'Rẽ góc thì thấy gì?' },
          choices: [
            {
              id: 'a',
              label: { en: 'A large building (city hall)', vi: 'Tòa nhà lớn (ủy ban thành phố)' }
            },
            { id: 'b', label: { en: 'A bridge', vi: 'Cầu' } },
            { id: 'c', label: { en: 'A parking lot', vi: 'Bãi đỗ xe' } },
            { id: 'd', label: { en: 'An electronics store', vi: 'Cửa hàng điện máy' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Traffic and signs', vi: 'Giao thông và biển báo' },
      includeInQuiz: false,
      intro: {
        en: 'Useful words for navigating streets and reading signs.',
        vi: 'Từ hữu ích khi đi đường và đọc biển báo.'
      },
      items: [
        {
          kana: 'とおり',
          kanji: '通り',
          romaji: 'tōri',
          meaning: { en: 'street, avenue', vi: 'đại lộ, phố' },
          ruby: [{ base: '通', reading: 'とお' }]
        },
        {
          kana: 'こうさ',
          kanji: '交差',
          romaji: 'kōsa',
          meaning: { en: 'crossing, intersection', vi: 'giao nhau' },
          ruby: [{ base: '交', reading: 'こう' }]
        },
        {
          kana: 'いち',
          kanji: '位置',
          romaji: 'ichi',
          meaning: { en: 'location, position', vi: 'vị trí' },
          ruby: [{ base: '位', reading: 'い' }]
        },
        {
          kana: 'とまれ',
          kanji: '止まれ',
          romaji: 'tomare',
          meaning: { en: 'Stop (traffic sign)', vi: 'Dừng lại (biển báo)' },
          ruby: [{ base: '止', reading: 'と' }]
        },
        {
          kana: 'しんにゅうきんし',
          kanji: '進入禁止',
          romaji: 'shinnyū kinshi',
          meaning: { en: 'No entry', vi: 'Cấm vào' },
          ruby: [
            { base: '進', reading: 'しん' },
            { base: '入', reading: 'にゅう' },
            { base: '禁', reading: 'きん' },
            { base: '止', reading: 'し' }
          ]
        },
        {
          kana: 'いっこうつうこう',
          kanji: '一方通行',
          romaji: 'ikkō tsūkō',
          meaning: { en: 'One-way traffic', vi: 'Đường một chiều' },
          ruby: [
            { base: '一', reading: 'いっ' },
            { base: '方', reading: 'ぽう' },
            { base: '通', reading: 'つう' },
            { base: '行', reading: 'こう' }
          ]
        },
        {
          kana: 'ちゅうしゃきんし',
          kanji: '駐車禁止',
          romaji: 'chūsha kinshi',
          meaning: { en: 'No parking', vi: 'Cấm đỗ xe' },
          ruby: [
            { base: '駐', reading: 'ちゅう' },
            { base: '車', reading: 'しゃ' },
            { base: '禁', reading: 'きん' },
            { base: '止', reading: 'し' }
          ]
        },
        {
          kana: 'スピード',
          romaji: 'supīdo',
          meaning: { en: 'speed', vi: 'tốc độ' }
        }
      ]
    }
  ]
};
