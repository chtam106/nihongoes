import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 43 (V/Adj そう, V-te kimasu, V-te kuremasen ka). */
export const n4Lesson43: Lesson = {
  id: 'lesson-43',
  number: 43,
  title: {
    en: 'Appearance and going and returning',
    vi: 'Vẻ ngoài và đi rồi về'
  },
  focus: {
    en: 'Describe imminent change or appearance with 〜そうです, say you will go do something and return with V-te 来ます, and make polite requests with V-te くれませんか.',
    vi: 'Mô tả sắp xảy ra hoặc vẻ ngoài với 〜そうです, nói đi làm việc gì rồi về với V-te 来ます, và nhờ vừa phải với V-te くれませんか.'
  },
  vocab: [
    {
      kana: 'ふえます',
      partOfSpeech: 'verb',
      kanji: '増えます',
      romaji: 'fuemasu',
      meaning: { en: 'to increase [輸出が～: exports]', vi: 'tăng [xuất khẩu ~]' },
      ruby: [{ base: '増', reading: 'ふ' }]
    },
    {
      kana: 'へります',
      partOfSpeech: 'verb',
      kanji: '減ります',
      romaji: 'herimasu',
      meaning: { en: 'to decrease [輸出が～: exports]', vi: 'giảm [xuất khẩu ~]' },
      ruby: [{ base: '減', reading: 'へ' }]
    },
    {
      kana: 'あがります',
      partOfSpeech: 'verb',
      kanji: '上がります',
      romaji: 'agarimasu',
      meaning: { en: 'to rise [値段が～: prices]', vi: 'tăng [giá cả ~]' },
      ruby: [{ base: '上', reading: 'あ' }]
    },
    {
      kana: 'さがります',
      partOfSpeech: 'verb',
      kanji: '下がります',
      romaji: 'sagarimasu',
      meaning: { en: 'to fall [値段が～: prices]', vi: 'giảm [giá cả ~]' },
      ruby: [{ base: '下', reading: 'さ' }]
    },
    {
      kana: 'きれます',
      partOfSpeech: 'verb',
      kanji: '切れます',
      romaji: 'kiremasu',
      meaning: { en: 'to snap, to break [ひもが～: a string]', vi: 'bị đứt [sợi dây ~]' },
      ruby: [{ base: '切', reading: 'き' }]
    },
    {
      kana: 'とれます',
      partOfSpeech: 'verb',
      romaji: 'toremasu',
      meaning: { en: 'to come off [ボタンが～: a button]', vi: 'bị tuột [cúc áo ~]' }
    },
    {
      kana: 'おちます',
      partOfSpeech: 'verb',
      kanji: '落ちます',
      romaji: 'ochimasu',
      meaning: { en: 'to fall, to drop [荷物が～: luggage]', vi: 'bị rơi [hành lý ~]' },
      ruby: [{ base: '落', reading: 'お' }]
    },
    {
      kana: 'なくなります',
      partOfSpeech: 'verb',
      romaji: 'nakunarimasu',
      meaning: { en: 'to run out [ガソリンが～: gas]', vi: 'hết [xăng ~]' }
    },
    {
      kana: 'へん [な]',
      partOfSpeech: 'adjective',
      kanji: '変 [な]',
      romaji: 'hen [na]',
      meaning: { en: 'strange', vi: 'lạ' },
      ruby: [{ base: '変', reading: 'へん' }]
    },
    {
      kana: 'しあわせ [な]',
      partOfSpeech: 'adjective',
      kanji: '幸せ [な]',
      romaji: 'shiawase [na]',
      meaning: { en: 'happy', vi: 'hạnh phúc' },
      ruby: [{ base: '幸', reading: 'しあわ' }]
    },
    {
      kana: 'らく [な]',
      partOfSpeech: 'adjective',
      kanji: '楽 [な]',
      romaji: 'raku [na]',
      meaning: { en: 'comfortable, easy', vi: 'nhàn, nhàn nhã' },
      ruby: [{ base: '楽', reading: 'らく' }]
    },
    {
      kana: 'うまい',
      partOfSpeech: 'adjective',
      romaji: 'umai',
      meaning: { en: 'delicious, skillful', vi: 'ngon, giỏi' }
    },
    {
      kana: 'まずい',
      partOfSpeech: 'adjective',
      romaji: 'mazui',
      meaning: { en: 'bad-tasting, awkward', vi: 'dở, tệ' }
    },
    {
      kana: 'つまらない',
      partOfSpeech: 'adjective',
      romaji: 'tsumaranai',
      meaning: { en: 'boring, trivial', vi: 'chán, không hay' }
    },
    {
      kana: 'やさしい',
      partOfSpeech: 'adjective',
      kanji: '優しい',
      romaji: 'yasashii',
      meaning: { en: 'kind, gentle', vi: 'hiền lành, tốt bụng' },
      ruby: [{ base: '優', reading: 'やさ' }]
    },
    {
      kana: 'ガソリン',
      partOfSpeech: 'noun',
      romaji: 'gasorin',
      meaning: { en: 'gasoline', vi: 'xăng' }
    },
    {
      kana: 'ひ',
      partOfSpeech: 'noun',
      kanji: '火',
      romaji: 'hi',
      meaning: { en: 'fire', vi: 'lửa' },
      ruby: [{ base: '火', reading: 'ひ' }]
    },
    {
      kana: 'パンフレット',
      partOfSpeech: 'noun',
      romaji: 'panfuretto',
      meaning: { en: 'pamphlet', vi: 'tờ rơi quảng cáo' }
    },
    {
      kana: 'いまにも',
      partOfSpeech: 'adverb',
      kanji: '今にも',
      romaji: 'ima ni mo',
      meaning: {
        en: 'at any moment (just before something happens)',
        vi: 'bất kỳ lúc nào (ngay trước khi biến đổi xảy ra)'
      },
      ruby: [{ base: '今', reading: 'いま' }]
    },
    {
      kana: 'わあ',
      partOfSpeech: 'interjection',
      romaji: 'waa',
      meaning: { en: 'wow!', vi: 'Ôi!' }
    },
    {
      kana: 'ばら',
      partOfSpeech: 'noun',
      romaji: 'bara',
      meaning: { en: 'rose', vi: 'hoa hồng' }
    },
    {
      kana: 'ドライブ',
      partOfSpeech: 'noun',
      meaningPartOfSpeech: { vi: 'verb' },
      romaji: 'doraibu',
      meaning: { en: 'drive (for pleasure)', vi: 'lái xe ô tô (theo sở thích)' }
    },
    {
      kana: 'りゆう',
      partOfSpeech: 'noun',
      kanji: '理由',
      romaji: 'riyuu',
      meaning: { en: 'reason', vi: 'lý do' },
      ruby: [
        { base: '理', reading: 'り' },
        { base: '由', reading: 'ゆう' }
      ]
    },
    {
      kana: 'あやまります',
      partOfSpeech: 'verb',
      kanji: '謝ります',
      romaji: 'ayamarimasu',
      meaning: { en: 'to apologize', vi: 'xin lỗi' },
      ruby: [{ base: '謝', reading: 'あやま' }]
    },
    {
      kana: 'しりあいます',
      partOfSpeech: 'verb',
      kanji: '知り合います',
      romaji: 'shiriaimasu',
      meaning: { en: 'to get acquainted', vi: 'quen biết' },
      ruby: [
        { base: '知', reading: 'し' },
        { base: '合', reading: 'あ' }
      ]
    }
  ],
  phrases: [
    {
      kana: 'いまにも あめが ふりそうです。',
      partOfSpeech: 'expression',
      kanji: '今にも 雨が 降りそうです。',
      romaji: 'Ima ni mo ame ga furisō desu.',
      meaning: {
        en: 'It looks like it will rain any moment.',
        vi: 'Trời có vẻ sắp mưa đến nơi rồi.'
      },
      ruby: [
        { base: '今', reading: 'いま' },
        { base: '雨', reading: 'あめ' },
        { base: '降', reading: 'ふ' }
      ]
    },
    {
      kana: 'ちょっと きっぷを かって きます。',
      partOfSpeech: 'expression',
      kanji: 'ちょっと 切符を 買って 来ます。',
      romaji: 'Chotto kippu o katte kimasu.',
      meaning: { en: 'I will go buy a ticket and come back.', vi: 'Tôi đi mua vé một chút.' },
      ruby: [
        { base: '切', reading: 'きっ' },
        { base: '符', reading: 'ぷ' },
        { base: '買', reading: 'か' },
        { base: '来', reading: 'き' }
      ]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson43-hans',
      title: { en: 'Every day looks fun', vi: 'Hàng ngày có vẻ vui lắm' },
      speakers: [
        { id: 'hayashi', name: '林' },
        { id: 'schmidt', name: 'シュミット' }
      ],
      lines: [
        {
          speakerId: 'hayashi',
          jp: 'この 写真は だれですか。',
          romaji: 'Kono shashin wa dare desu ka.',
          meaning: { en: 'Who is in this photo?', vi: 'Đây là ảnh của ai thế?' },
          ruby: [
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' }
          ]
        },
        {
          speakerId: 'schmidt',
          jp: 'ハンスです。うちの 子どもです。この 写真は 体育の 大会の ときです。',
          romaji: 'Hansu desu. Uchi no kodomo desu. Kono shashin wa taiiku no taikai no toki desu.',
          meaning: {
            en: 'That is Hans, my child. This photo was taken at a sports meet.',
            vi: 'Là Hans, con trai tôi đấy. Tấm ảnh này chụp trong hội thi thể thao.'
          },
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '体', reading: 'たい' },
            { base: '育', reading: 'いく' },
            { base: '大', reading: 'たい' },
            { base: '会', reading: 'かい' }
          ]
        },
        {
          speakerId: 'hayashi',
          jp: '元気そうですね。',
          romaji: 'Genki sō desu ne.',
          meaning: { en: "He looks healthy, doesn't he?", vi: 'Trông cậu bé khỏe mạnh nhỉ.' },
          ruby: [
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          speakerId: 'schmidt',
          jp: 'ええ。ハンスは 速く 走ります。日本の 小学校にも 慣れて、友達も できて、毎日 楽しそうです。',
          romaji:
            'Ee. Hansu wa hayaku hashirimasu. Nihon no shōgakkō ni mo narete, tomodachi mo dekite, mainichi tanoshisō desu.',
          meaning: {
            en: 'Yes. Hans runs fast. He got used to his Japanese elementary school, made friends, and every day looks fun.',
            vi: 'Vâng. Hans chạy rất nhanh đấy. Cháu đã quen với trường tiểu học của Nhật, đã có bạn, nên hàng ngày có vẻ vui lắm.'
          },
          ruby: [
            { base: '速', reading: 'はや' },
            { base: '走', reading: 'はし' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '小', reading: 'しょう' },
            { base: '学', reading: 'がく' },
            { base: '校', reading: 'こう' },
            { base: '慣', reading: 'な' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'に' },
            { base: '楽', reading: 'たの' }
          ]
        },
        {
          speakerId: 'hayashi',
          jp: 'よかったですね。そして、こちらは 奥さんですね。きれいですね。',
          romaji: 'Yokatta desu ne. Soshite, kochira wa okusan desu ne. Kirei desu ne.',
          meaning: {
            en: 'That is good. And this is your wife, is she not? She is beautiful.',
            vi: 'Tốt quá nhỉ. Còn đây là vợ anh nhỉ? Chị nhà xinh quá.'
          },
          ruby: [{ base: '奥', reading: 'おく' }]
        },
        {
          speakerId: 'schmidt',
          jp: 'ありがとう ございます。妻は いろいろな ことに 興味が あって、一緒に いると 楽しいです。',
          romaji:
            'Arigatō gozaimasu. Tsuma wa iroirona koto ni kyōmi ga atte, issho ni iru to tanoshii desu.',
          meaning: {
            en: 'Thank you. My wife is interested in many things, so being together is fun.',
            vi: 'Cám ơn chị. Vợ tôi thích và quan tâm nhiều thứ, nên khi ở cùng nhau rất là thú vị.'
          },
          ruby: [
            { base: '妻', reading: 'つま' },
            { base: '興', reading: 'きょう' },
            { base: '味', reading: 'み' },
            { base: '一', reading: 'いっ' },
            { base: '緒', reading: 'しょ' },
            { base: '楽', reading: 'たの' }
          ]
        },
        {
          speakerId: 'hayashi',
          jp: 'そうですか。',
          romaji: 'Sō desu ka.',
          meaning: { en: 'I see.', vi: 'Thế à.' }
        },
        {
          speakerId: 'schmidt',
          jp: '特に 歴史が 好きで、時間があると 古い 町を 散歩します。',
          romaji: 'Toku ni rekishi ga suki de, jikan ga aru to furui machi o sanpo shimasu.',
          meaning: {
            en: 'She especially likes history, so when she has time she walks around old towns.',
            vi: 'Đặc biệt là cô ấy rất thích lịch sử, nên cứ có thời gian là cô ấy đi lòng vòng các khu phố cổ.'
          },
          ruby: [
            { base: '特', reading: 'とく' },
            { base: '歴', reading: 'れき' },
            { base: '史', reading: 'し' },
            { base: '好', reading: 'す' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' },
            { base: '古', reading: 'ふる' },
            { base: '町', reading: 'まち' },
            { base: '散', reading: 'さん' },
            { base: '歩', reading: 'ぽ' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-ます そうです / Adj そうです',
      highlights: ['そう'],
      title: { en: 'Looks like (そうです)', vi: 'Có vẻ (~そうです)' },
      explanation: {
        en: 'Verb masu-stem + そうです shows a sign something is about to happen (often with いまにも, もうすぐ). i-adj drops い; na-adj drops な (いい→よさ). It can also describe how someone appears to feel.',
        vi: 'Động từ thể ます + そうです cho thấy sắp xảy ra (thường với いまにも, もうすぐ). Tính từ い bỏ い; な bỏ な (いい→よさ). Cũng mô tả cảm xúc bên ngoài của người khác.'
      },
      explanationRuby: [],
      examples: [
        {
          jp: '今にも 雨が 降りそうです。',
          romaji: 'Ima ni mo ame ga furisō desu.',
          meaning: {
            en: 'It looks like it will rain any moment.',
            vi: 'Trời có vẻ sắp mưa đến nơi rồi.'
          },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '雨', reading: 'あめ' },
            { base: '降', reading: 'ふ' }
          ]
        },
        {
          jp: 'もうすぐ 桜が 咲きそうです。',
          romaji: 'Mōsugu sakura ga sakisō desu.',
          meaning: {
            en: 'The cherry blossoms look about to bloom.',
            vi: 'Hoa anh đào trông có vẻ sắp nở.'
          },
          ruby: [
            { base: '桜', reading: 'さくら' },
            { base: '咲', reading: 'さ' }
          ]
        },
        {
          jp: 'この 料理は 辛そうです。',
          romaji: 'Kono ryōri wa karasō desu.',
          meaning: { en: 'This dish looks spicy.', vi: 'Món ăn này có vẻ cay.' },
          ruby: [
            { base: '料', reading: 'りょう' },
            { base: '理', reading: 'り' },
            { base: '辛', reading: 'から' }
          ]
        }
      ]
    },
    {
      pattern: 'V-te 来ます',
      patternRuby: [{ base: '来', reading: 'き' }],
      highlights: ['来'],
      title: { en: 'Go and come back (V-te 来ます)', vi: 'Đi làm rồi về (V-te 来ます)' },
      explanation: {
        en: 'V-te 来ます means go somewhere, do the action, and return: たばこを 買って 来ます. Use で for the place of action (スーパーで) and から when bringing something from a place (台所から). N へ 行って 来ます omits the action; 出かけて 来ます omits the destination.',
        vi: 'V-te 来ます: đi làm việc rồi quay lại: たばこを 買って 来ます. Dùng で cho nơi làm (スーパーで), から khi mang từ nơi đó (台所から). N へ 行って 来ます bỏ hành động; 出かけて 来ます bỏ đích.'
      },
      explanationRuby: [
        { base: '来', reading: 'き' },
        { base: '買', reading: 'か' },
        { base: '来', reading: 'き' },
        { base: '台', reading: 'だい' },
        { base: '所', reading: 'どころ' },
        { base: '行', reading: 'い' },
        { base: '来', reading: 'き' },
        { base: '出', reading: 'で' },
        { base: '来', reading: 'き' },
        { base: '来', reading: 'き' },
        { base: '買', reading: 'か' },
        { base: '来', reading: 'き' },
        { base: '台', reading: 'だい' },
        { base: '所', reading: 'どころ' },
        { base: '行', reading: 'い' },
        { base: '来', reading: 'き' },
        { base: '出', reading: 'で' },
        { base: '来', reading: 'き' }
      ],
      examples: [
        {
          jp: 'ちょっと たばこを 買って 来ます。',
          romaji: 'Chotto tabako o katte kimasu.',
          meaning: {
            en: 'I will go buy cigarettes and come back.',
            vi: 'Tôi đi mua thuốc lá một chút rồi về.'
          },
          ruby: [
            { base: '買', reading: 'か' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: 'スーパーで 牛乳を 買って 来ます。',
          romaji: 'Sūpā de gyūnyū o katte kimasu.',
          meaning: {
            en: 'I will buy milk at the supermarket and come back.',
            vi: 'Tôi ra siêu thị mua sữa rồi về.'
          },
          ruby: [
            { base: '牛', reading: 'ぎゅう' },
            { base: '乳', reading: 'にゅう' },
            { base: '買', reading: 'か' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: '郵便局へ 行って 来ます。',
          romaji: 'Yūbinkyoku e itte kimasu.',
          meaning: {
            en: 'I am going to the post office (and coming back).',
            vi: 'Tôi đi đến bưu điện (rồi về).'
          },
          ruby: [
            { base: '郵', reading: 'ゆう' },
            { base: '便', reading: 'びん' },
            { base: '局', reading: 'きょく' },
            { base: '行', reading: 'い' },
            { base: '来', reading: 'き' }
          ]
        }
      ]
    },
    {
      pattern: 'V-te くれませんか',
      highlights: ['くれ', 'ません', 'か'],
      title: {
        en: 'Could you ~ for me? (V-te くれませんか)',
        vi: 'Làm ơn ~ giúp? (V-te くれませんか)'
      },
      explanation: {
        en: 'V-te くれませんか is a polite request, more polite than 〜てください but less than 〜ていただけませんか. Use with peers or people below you in status.',
        vi: 'V-te くれませんか là cách nhờ lịch sự, lịch sự hơn 〜てください nhưng kém hơn 〜ていただけませんか. Dùng với đồng nghiệp hoặc cấp dưới.'
      },
      examples: [
        {
          jp: 'お弁当を 買って 来て くれませんか。',
          romaji: 'O-bentō o katte kite kuremasen ka.',
          meaning: {
            en: 'Could you buy a lunch box for me?',
            vi: 'Anh/chị làm ơn mua giúp tôi cơm hộp được không?'
          },
          ruby: [
            { base: '弁', reading: 'べん' },
            { base: '当', reading: 'とう' },
            { base: '買', reading: 'か' },
            { base: '来', reading: 'き' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson43-rose',
      title: { en: 'The roses by the road', vi: 'Những bông hồng bên đường' },
      titleJp: '道の わきの ばら',
      titleRuby: [{ base: '道', reading: 'みち' }],
      lines: [
        {
          jp: '日曜日、友達と ドライブに 行きました。',
          romaji: 'Nichiyōbi, tomodachi to doraibu ni ikimashita.',
          meaning: {
            en: 'On Sunday I went for a drive with a friend.',
            vi: 'Chủ nhật tôi đi lái xe dạo chơi với bạn.'
          },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '途中で、道の わきに 赤い ばらが たくさん 咲いていました。',
          romaji: 'Tochū de, michi no waki ni akai bara ga takusan saite imashita.',
          meaning: {
            en: 'On the way, lots of red roses were blooming by the side of the road.',
            vi: 'Trên đường đi, có rất nhiều hoa hồng đỏ nở bên vệ đường.'
          },
          ruby: [
            { base: '途', reading: 'と' },
            { base: '中', reading: 'ちゅう' },
            { base: '道', reading: 'みち' },
            { base: '赤', reading: 'あか' },
            { base: '咲', reading: 'さ' }
          ]
        },
        {
          jp: '写真を 撮って いると、家から 優しそうな おばあさんが 出て 来ました。',
          romaji: 'Shashin o totte iru to, ie kara yasashisō na obāsan ga dete kimashita.',
          meaning: {
            en: 'While we were taking photos, a kind-looking old woman came out of a house.',
            vi: 'Đang chụp ảnh thì một bà cụ trông hiền hậu từ trong nhà đi ra.'
          },
          ruby: [
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '撮', reading: 'と' },
            { base: '家', reading: 'いえ' },
            { base: '優', reading: 'やさ' },
            { base: '出', reading: 'で' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: '「ちょっと 待って いて ください」と 言って、ばらを 何本か 切って 来て くれました。',
          romaji: '"Chotto matte ite kudasai" to itte, bara o nanbon ka kitte kite kuremashita.',
          meaning: {
            en: 'She said "Wait a moment," then went and cut some roses for us.',
            vi: 'Bà nói "Đợi một chút nhé" rồi đi cắt mấy bông hồng mang ra cho chúng tôi.'
          },
          ruby: [
            { base: '待', reading: 'ま' },
            { base: '言', reading: 'い' },
            { base: '何', reading: 'なん' },
            { base: '本', reading: 'ぼん' },
            { base: '切', reading: 'き' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: '帰りの 車の 中は、ばらの いい においで いっぱいでした。',
          romaji: 'Kaeri no kuruma no naka wa, bara no ii nioi de ippai deshita.',
          meaning: {
            en: 'On the drive home, the car was full of the lovely smell of roses.',
            vi: 'Trên đường về, trong xe ngập mùi hoa hồng thơm.'
          },
          ruby: [
            { base: '帰', reading: 'かえ' },
            { base: '車', reading: 'くるま' },
            { base: '中', reading: 'なか' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'Who came out of the house?', vi: 'Ai từ trong nhà đi ra?' },
          jp: '家から だれが 出て 来ましたか。',
          ruby: [
            { base: '家', reading: 'いえ' },
            { base: '出', reading: 'で' },
            { base: '来', reading: 'き' }
          ],
          choices: [
            {
              id: 'a',
              label: { en: 'A kind-looking old woman', vi: 'Một bà cụ trông hiền hậu' },
              jp: '優しそうな おばあさん',
              ruby: [{ base: '優', reading: 'やさ' }]
            },
            {
              id: 'b',
              label: { en: 'A young man', vi: 'Một người đàn ông trẻ' },
              jp: '若い 男の 人',
              ruby: [
                { base: '若', reading: 'わか' },
                { base: '男', reading: 'おとこ' },
                { base: '人', reading: 'ひと' }
              ]
            },
            {
              id: 'c',
              label: { en: 'A police officer', vi: 'Một cảnh sát' },
              jp: '警官',
              ruby: [
                { base: '警', reading: 'けい' },
                { base: '官', reading: 'かん' }
              ]
            },
            {
              id: 'd',
              label: { en: 'Some children', vi: 'Mấy đứa trẻ' },
              jp: '子どもたち',
              ruby: [{ base: '子', reading: 'こ' }]
            }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What did the old woman do for them?', vi: 'Bà cụ đã làm gì cho họ?' },
          jp: 'おばあさんは 何を して くれましたか。',
          ruby: [{ base: '何', reading: 'なに' }],
          choices: [
            {
              id: 'a',
              label: { en: 'Cut some roses for them', vi: 'Cắt hoa hồng mang ra cho họ' },
              jp: 'ばらを 切って 来て くれた',
              ruby: [
                { base: '切', reading: 'き' },
                { base: '来', reading: 'き' }
              ]
            },
            {
              id: 'b',
              label: { en: 'Showed them the way', vi: 'Chỉ đường cho họ' },
              jp: '道を 教えて くれた',
              ruby: [
                { base: '道', reading: 'みち' },
                { base: '教', reading: 'おし' }
              ]
            },
            {
              id: 'c',
              label: { en: 'Made them tea', vi: 'Pha trà cho họ' },
              jp: 'お茶を 入れて くれた',
              ruby: [
                { base: '茶', reading: 'ちゃ' },
                { base: '入', reading: 'い' }
              ]
            },
            {
              id: 'd',
              label: { en: 'Took their photo', vi: 'Chụp ảnh cho họ' },
              jp: '写真を 撮って くれた',
              ruby: [
                { base: '写', reading: 'しゃ' },
                { base: '真', reading: 'しん' },
                { base: '撮', reading: 'と' }
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
      kind: 'list',
      title: { en: 'Personality and character', vi: 'Tính cách và tính chất' },
      introTerm: {
        jp: '性格・性質',
        ruby: [
          { base: '性', reading: 'せい' },
          { base: '格', reading: 'かく' },
          { base: '性', reading: 'せい' },
          { base: '質', reading: 'しつ' }
        ]
      },
      layout: 'stacked',
      rows: [
        {
          jp: '明るい',
          ruby: [{ base: '明', reading: 'あか' }],
          meaning: { en: 'bright, cheerful', vi: 'sáng, vui tươi' }
        },
        {
          jp: '暗い',
          ruby: [{ base: '暗', reading: 'くら' }],
          meaning: { en: 'gloomy, dark', vi: 'tối, buồn tẻ' }
        },
        {
          jp: '優しい',
          ruby: [{ base: '優', reading: 'やさ' }],
          meaning: { en: 'kind, gentle', vi: 'tốt bụng, hiền lành' }
        },
        {
          jp: 'おとなしい',
          meaning: { en: 'quiet, gentle', vi: 'hiền, trầm' }
        },
        {
          jp: '冷たい',
          ruby: [{ base: '冷', reading: 'つめ' }],
          meaning: { en: 'cold (personality)', vi: 'lạnh' }
        },
        {
          jp: '厳しい',
          ruby: [{ base: '厳', reading: 'きび' }],
          meaning: { en: 'strict, severe', vi: 'nghiêm, nghiêm khắc' }
        },
        {
          jp: '気が長い',
          ruby: [
            { base: '気', reading: 'き' },
            { base: '長', reading: 'なが' }
          ],
          meaning: { en: 'patient', vi: 'kiên nhẫn' }
        },
        {
          jp: '気が短い',
          ruby: [
            { base: '気', reading: 'き' },
            { base: '短', reading: 'みじか' }
          ],
          meaning: { en: 'short-tempered', vi: 'thiếu kiên nhẫn, nóng tính' }
        },
        {
          jp: '活発 [な]',
          ruby: [
            { base: '活', reading: 'かっ' },
            { base: '発', reading: 'はつ' }
          ],
          meaning: { en: 'lively', vi: 'hoạt bát' }
        },
        {
          jp: '誠実 [な]',
          ruby: [
            { base: '誠', reading: 'せい' },
            { base: '実', reading: 'じつ' }
          ],
          meaning: { en: 'sincere', vi: 'thành thật' }
        },
        {
          jp: 'まじめ [な]',
          meaning: { en: 'serious', vi: 'nghiêm túc' }
        },
        {
          jp: '素直 [な]',
          ruby: [
            { base: '素', reading: 'す' },
            { base: '直', reading: 'なお' }
          ],
          meaning: { en: 'obedient, honest', vi: 'dễ bảo, ngoan ngoãn' }
        }
      ]
    }
  ]
};
