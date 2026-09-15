import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 32 (〜ほうがいい, 〜でしょう, 〜かもしれません, 〜ましょう, 量詞+で). */
export const n4Lesson32: Lesson = {
  id: 'lesson-32',
  number: 32,
  title: {
    en: 'Advice and guessing',
    vi: 'Lời khuyên và suy đoán'
  },
  focus: {
    en: 'Give advice with 〜ほうがいいです, guess outcomes with 〜でしょう and 〜かもしれません, offer to act with 〜ましょう, and set limits with quantifier + で.',
    vi: 'Khuyên với 〜ほうがいいです, đoán với 〜でしょう và 〜かもしれません, đề nghị hành động với 〜ましょう, và giới hạn với lượng từ + で.'
  },
  vocab: [
    {
      kana: 'うんどうします',
      kanji: '運動します',
      romaji: 'undō shimasu',
      meaning: { en: 'to exercise', vi: 'vận động, tập thể dục' },
      ruby: [
        { base: '運', reading: 'うん' },
        { base: '動', reading: 'どう' }
      ]
    },
    {
      kana: 'せいこうします',
      kanji: '成功します',
      romaji: 'seikō shimasu',
      meaning: { en: 'to succeed', vi: 'thành công' },
      ruby: [
        { base: '成', reading: 'せい' },
        { base: '功', reading: 'こう' }
      ]
    },
    {
      kana: 'しっぱいします',
      kanji: '失敗します',
      romaji: 'shippai shimasu',
      meaning: { en: 'to fail [試験に～: an exam]', vi: 'thất bại, trượt [試験に～: kỳ thi]' },
      ruby: [
        { base: '失', reading: 'しっ' },
        { base: '敗', reading: 'ぱい' }
      ]
    },
    {
      kana: 'ごうかくします',
      kanji: '合格します',
      romaji: 'gōkaku shimasu',
      meaning: { en: 'to pass [試験に～: an exam]', vi: 'đỗ [試験に～: kỳ thi]' },
      ruby: [
        { base: '合', reading: 'ごう' },
        { base: '格', reading: 'かく' }
      ]
    },
    {
      kana: 'やみます',
      romaji: 'yamimasu',
      meaning: { en: 'to stop [雨が～: rain]', vi: 'tạnh [雨が～: mưa]' }
    },
    {
      kana: 'はれます',
      kanji: '晴れます',
      romaji: 'haremasu',
      meaning: { en: 'to clear up (weather)', vi: 'quang đãng, nắng' },
      ruby: [{ base: '晴', reading: 'は' }]
    },
    {
      kana: 'くもります',
      kanji: '曇ります',
      romaji: 'kumorimasu',
      meaning: { en: 'to become cloudy', vi: 'có mây' },
      ruby: [{ base: '曇', reading: 'くも' }]
    },
    {
      kana: 'つづきます',
      kanji: '続きます',
      romaji: 'tsuzukimasu',
      meaning: { en: 'to continue [熱が～: a fever]', vi: 'kéo dài [熱が～: sốt]' },
      ruby: [{ base: '続', reading: 'つづ' }]
    },
    {
      kana: 'ひきます',
      romaji: 'hikimasu',
      meaning: { en: 'to catch [風邪を～: a cold]', vi: 'bị cảm [風邪を～: cảm]' }
    },
    {
      kana: 'ひやします',
      kanji: '冷やします',
      romaji: 'hiyashimasu',
      meaning: { en: 'to chill, to cool', vi: 'làm mát, làm lạnh' },
      ruby: [{ base: '冷', reading: 'ひ' }]
    },
    {
      kana: 'こみます',
      kanji: '込みます',
      romaji: 'komimasu',
      meaning: { en: 'to be crowded [道が～: a road]', vi: 'đông [道が～: đường]' },
      ruby: [{ base: '込', reading: 'こ' }]
    },
    {
      kana: 'すきます',
      romaji: 'sukimasu',
      meaning: { en: 'to be empty [道が～: a road]', vi: 'vắng [道が～: đường]' }
    },
    {
      kana: 'でます',
      kanji: '出ます',
      romaji: 'demasu',
      meaning: {
        en: 'to attend [試合に～: a match; パーティーに～: a party]',
        vi: 'tham gia [試合に～: trận đấu; パーティーに～: tiệc]'
      },
      ruby: [{ base: '出', reading: 'で' }]
    },
    {
      kana: 'むりをします',
      kanji: '無理をします',
      romaji: 'muri o shimasu',
      meaning: {
        en: 'to overdo it, to push oneself too hard',
        vi: 'gắng sức quá, làm việc quá sức'
      },
      ruby: [
        { base: '無', reading: 'む' },
        { base: '理', reading: 'り' }
      ]
    },
    {
      kana: 'じゅうぶん',
      kanji: '十分',
      romaji: 'jūbun',
      meaning: { en: 'enough (na-adj)', vi: 'đủ (tính từ な)' },
      ruby: [
        { base: '十', reading: 'じゅう' },
        { base: '分', reading: 'ぶん' }
      ]
    },
    {
      kana: 'おかしい',
      romaji: 'okashii',
      meaning: { en: 'strange, odd', vi: '(kỳ) lạ, thú vị' }
    },
    {
      kana: 'うるさい',
      romaji: 'urusai',
      meaning: { en: 'noisy', vi: 'ồn ào' }
    },
    {
      kana: 'せんせい',
      kanji: '先生',
      romaji: 'sensei',
      meaning: { en: 'doctor (medical)', vi: 'bác sĩ' },
      ruby: [
        { base: '先', reading: 'せん' },
        { base: '生', reading: 'せい' }
      ]
    },
    {
      kana: 'やけど',
      romaji: 'yakedo',
      meaning: { en: 'burn (~を します: to get burned)', vi: 'bỏng (~を します: bị ~)' }
    },
    {
      kana: 'けが',
      romaji: 'kega',
      meaning: { en: 'injury (~を します: to get injured)', vi: 'thương tích (~を します: bị ~)' }
    },
    {
      kana: 'せき',
      romaji: 'seki',
      meaning: { en: 'cough (~を します: to cough)', vi: 'ho (~を します: ho)' }
    },
    {
      kana: 'インフルエンザ',
      romaji: 'infuruenza',
      meaning: { en: 'influenza, flu', vi: 'cúm' }
    },
    {
      kana: 'そら',
      kanji: '空',
      romaji: 'sora',
      meaning: { en: 'sky', vi: 'bầu trời' },
      ruby: [{ base: '空', reading: 'そら' }]
    },
    {
      kana: 'たいよう',
      kanji: '太陽',
      romaji: 'taiyō',
      meaning: { en: 'sun', vi: 'mặt trời' },
      ruby: [
        { base: '太', reading: 'たい' },
        { base: '陽', reading: 'よう' }
      ]
    },
    {
      kana: 'ほし',
      kanji: '星',
      romaji: 'hoshi',
      meaning: { en: 'star', vi: 'sao' },
      ruby: [{ base: '星', reading: 'ほし' }]
    },
    {
      kana: 'かぜ',
      kanji: '風',
      romaji: 'kaze',
      meaning: { en: 'wind; cold (illness)', vi: 'gió; cảm (bệnh)' },
      ruby: [{ base: '風', reading: 'かぜ' }]
    },
    {
      kana: 'ひがし',
      kanji: '東',
      romaji: 'higashi',
      meaning: { en: 'east', vi: 'đông' },
      ruby: [{ base: '東', reading: 'ひがし' }]
    },
    {
      kana: 'にし',
      kanji: '西',
      romaji: 'nishi',
      meaning: { en: 'west', vi: 'tây' },
      ruby: [{ base: '西', reading: 'にし' }]
    },
    {
      kana: 'みなみ',
      kanji: '南',
      romaji: 'minami',
      meaning: { en: 'south', vi: 'nam' },
      ruby: [{ base: '南', reading: 'みなみ' }]
    },
    {
      kana: 'きた',
      kanji: '北',
      romaji: 'kita',
      meaning: { en: 'north', vi: 'bắc' },
      ruby: [{ base: '北', reading: 'きた' }]
    },
    {
      kana: 'こくさい～',
      kanji: '国際～',
      romaji: 'kokusai~',
      meaning: { en: 'international ~', vi: '~ quốc tế' },
      ruby: [
        { base: '国', reading: 'こく' },
        { base: '際', reading: 'さい' }
      ]
    },
    {
      kana: 'すいどう',
      kanji: '水道',
      romaji: 'suidō',
      meaning: { en: 'water supply, tap water', vi: 'nước máy' },
      ruby: [
        { base: '水', reading: 'すい' },
        { base: '道', reading: 'どう' }
      ]
    },
    {
      kana: 'エンジン',
      romaji: 'enjin',
      meaning: { en: 'engine', vi: 'động cơ' }
    },
    {
      kana: 'チーム',
      romaji: 'chīmu',
      meaning: { en: 'team', vi: 'đội' }
    },
    {
      kana: 'こんや',
      kanji: '今夜',
      romaji: 'konnya',
      meaning: { en: 'tonight', vi: 'tối nay' },
      ruby: [
        { base: '今', reading: 'こん' },
        { base: '夜', reading: 'や' }
      ]
    },
    {
      kana: 'ゆうがた',
      kanji: '夕方',
      romaji: 'yūgata',
      meaning: { en: 'evening', vi: 'chiều tối' },
      ruby: [
        { base: '夕', reading: 'ゆう' },
        { base: '方', reading: 'がた' }
      ]
    },
    {
      kana: 'まえ',
      romaji: 'mae',
      meaning: { en: 'before, ago', vi: 'trước' }
    },
    {
      kana: 'おそく',
      kanji: '遅く',
      romaji: 'osoku',
      meaning: { en: 'late', vi: 'muộn' },
      ruby: [{ base: '遅', reading: 'おそ' }]
    },
    {
      kana: 'こんなに',
      romaji: 'konna ni',
      meaning: { en: 'this much, like this', vi: 'như thế này' }
    },
    {
      kana: 'そんなに',
      romaji: 'sonna ni',
      meaning: { en: 'that much (near listener)', vi: 'như thế đó' }
    },
    {
      kana: 'あんなに',
      romaji: 'anna ni',
      meaning: { en: 'that much (remote)', vi: 'như thế kia' }
    },
    {
      kana: 'げんき',
      kanji: '元気',
      romaji: 'genki',
      meaning: { en: 'healthy, well', vi: 'khỏe' },
      ruby: [
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' }
      ]
    },
    {
      kana: 'い',
      kanji: '胃',
      romaji: 'i',
      meaning: { en: 'stomach', vi: 'dạ dày' },
      ruby: [{ base: '胃', reading: 'い' }]
    },
    {
      kana: 'ストレス',
      romaji: 'sutoresu',
      meaning: { en: 'stress', vi: 'căng thẳng' }
    },
    {
      kana: 'ほしうらない',
      kanji: '星占い',
      romaji: 'hoshiuranai',
      meaning: { en: 'horoscope, fortune-telling by stars', vi: 'bói sao' },
      ruby: [
        { base: '星', reading: 'ほし' },
        { base: '占', reading: 'うら' }
      ]
    },
    {
      kana: 'おうしざ',
      kanji: '牡牛座',
      romaji: 'Oushiza',
      meaning: { en: 'Taurus (zodiac)', vi: 'cung Kim Ngưu' },
      ruby: [
        { base: '牡', reading: 'おう' },
        { base: '牛', reading: 'し' },
        { base: '座', reading: 'ざ' }
      ]
    },
    {
      kana: 'はたらきすぎ',
      kanji: '働きすぎ',
      romaji: 'hatarakisugi',
      meaning: { en: 'overworking', vi: 'làm việc quá sức' },
      ruby: [{ base: '働', reading: 'はたら' }]
    },
    {
      kana: 'こまります',
      kanji: '困ります',
      romaji: 'komarimasu',
      meaning: { en: 'to be troubled, to have difficulty', vi: 'khó khăn, lúng túng' },
      ruby: [{ base: '困', reading: 'こま' }]
    },
    {
      kana: 'たからくじ',
      kanji: '宝くじ',
      romaji: 'takarakuji',
      meaning: { en: 'lottery', vi: 'vé số, xổ số' },
      ruby: [
        { base: '宝', reading: 'たから' },
        { base: 'く', reading: 'く' },
        { base: 'じ', reading: 'じ' }
      ]
    },
    {
      kana: 'あたります',
      kanji: '当たります',
      romaji: 'atarimasu',
      meaning: { en: 'to win [宝くじが～: the lottery]', vi: 'trúng [宝くじが～: xổ số]' },
      ruby: [{ base: '当', reading: 'あ' }]
    },
    {
      kana: 'けんこう',
      kanji: '健康',
      romaji: 'kenkō',
      meaning: { en: 'health', vi: 'sức khỏe' },
      ruby: [
        { base: '健', reading: 'けん' },
        { base: '康', reading: 'こう' }
      ]
    },
    {
      kana: 'れんあい',
      kanji: '恋愛',
      romaji: 'renai',
      meaning: { en: 'love, romance', vi: 'tình yêu' },
      ruby: [
        { base: '恋', reading: 'れん' },
        { base: '愛', reading: 'あい' }
      ]
    },
    {
      kana: 'こいびと',
      kanji: '恋人',
      romaji: 'koibito',
      meaning: { en: 'boyfriend/girlfriend, lover', vi: 'người yêu' },
      ruby: [
        { base: '恋', reading: 'こい' },
        { base: '人', reading: 'びと' }
      ]
    },
    {
      kana: 'ラッキーアイテム',
      romaji: 'rakkī aitemu',
      meaning: { en: 'lucky charm item', vi: 'vật may mắn (theo bói toán)' }
    },
    {
      kana: 'いし',
      kanji: '石',
      romaji: 'ishi',
      meaning: { en: 'stone', vi: 'hòn đá, viên đá' },
      ruby: [{ base: '石', reading: 'いし' }]
    }
  ],
  phrases: [
    {
      kana: 'それは いけませんね。',
      romaji: 'Sore wa ikemasen ne.',
      meaning: { en: 'That is not good.', vi: 'Thế thì thật không tốt.' }
    }
  ],
  conversation: [
    {
      id: 'conv-lesson32-overwork',
      title: { en: 'Do not overwork yourself', vi: 'Anh đừng làm việc quá sức' },
      speakers: [
        { id: 'ogawa', name: '小川' },
        { id: 'schmidt', name: 'シュミット' }
      ],
      lines: [
        {
          speakerId: 'ogawa',
          jp: 'シュミットさん、元気が ないですね。どう しましたか。',
          romaji: 'Shumitto-san, genki ga nai desu ne. Dō shimashita ka.',
          meaning: {
            en: 'Mr. Schmidt, you do not look well. What happened?',
            vi: 'Anh Schmidt, anh có vẻ không khỏe. Anh bị sao?'
          },
          ruby: [
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          speakerId: 'schmidt',
          jp: 'このごろ 体調が よく ありません。時々 頭が 痛くなったり、胃が 痛くなったり します。',
          romaji:
            'Kono goro taichō ga yoku arimasen. Tokidoki atama ga itaku nattari, i ga itaku nattari shimasu.',
          meaning: {
            en: 'Lately I have not been feeling well. Sometimes my head hurts and my stomach hurts.',
            vi: 'Gần đây sức khỏe không tốt. Thỉnh thoảng đau đầu, đau dạ dày.'
          },
          ruby: [
            { base: '体', reading: 'たい' },
            { base: '調', reading: 'ちょう' },
            { base: '時', reading: 'とき' },
            { base: '頭', reading: 'あたま' },
            { base: '痛', reading: 'いた' },
            { base: '胃', reading: 'い' },
            { base: '痛', reading: 'いた' }
          ]
        },
        {
          speakerId: 'ogawa',
          jp: 'それは いけませんね。仕事が 忙しいんですか。',
          romaji: 'Sore wa ikemasen ne. Shigoto ga isogashii n desu ka.',
          meaning: {
            en: 'That is not good. Is work busy?',
            vi: 'Thế thì không tốt. Công việc bận lắm à?'
          },
          ruby: [
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '忙', reading: 'いそが' }
          ]
        },
        {
          speakerId: 'schmidt',
          jp: 'はい。残業が 多いんです。',
          romaji: 'Hai. Zangyō ga ōi n desu.',
          meaning: { en: 'Yes. I have a lot of overtime.', vi: 'Vâng. Tôi làm thêm giờ nhiều.' },
          ruby: [
            { base: '残', reading: 'ざん' },
            { base: '業', reading: 'ぎょう' },
            { base: '多', reading: 'おお' }
          ]
        },
        {
          speakerId: 'ogawa',
          jp: 'ストレスが 原因かも しれませんね。一度 病院で 先生に 診て もらった ほうが いいですよ。',
          romaji:
            'Sutoresu ga genin kamoshiremasen ne. Ichido byōin de sensei ni mite moratta hō ga ii desu yo.',
          meaning: {
            en: 'Stress might be the cause. You should see a doctor at the hospital once.',
            vi: 'Có lẽ do căng thẳng. Anh nên đi bệnh viện khám một lần.'
          },
          ruby: [
            { base: '原', reading: 'げん' },
            { base: '因', reading: 'いん' },
            { base: '一', reading: 'いち' },
            { base: '度', reading: 'ど' },
            { base: '病', reading: 'びょう' },
            { base: '院', reading: 'いん' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '診', reading: 'み' }
          ]
        },
        {
          speakerId: 'schmidt',
          jp: 'はい、そう します。',
          romaji: 'Hai, sō shimasu.',
          meaning: { en: 'Yes, I will do that.', vi: 'Vâng, chắc phải vậy.' }
        },
        {
          speakerId: 'ogawa',
          jp: '無理を しない ほうが いいですよ。',
          romaji: 'Muri o shinai hō ga ii desu yo.',
          meaning: {
            en: 'You should not overwork yourself.',
            vi: 'Anh không nên làm việc quá sức.'
          },
          ruby: [
            { base: '無', reading: 'む' },
            { base: '理', reading: 'り' }
          ]
        },
        {
          speakerId: 'schmidt',
          jp: '今 担当している 仕事が 終わったら、休みを 取る つもりです。',
          romaji: 'Ima tantō shite iru shigoto ga owattara, yasumi o toru tsumori desu.',
          meaning: {
            en: 'After I finish the work I am in charge of now, I plan to take time off.',
            vi: 'Sau khi xong việc đang phụ trách, tôi định xin nghỉ phép.'
          },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '担', reading: 'たん' },
            { base: '当', reading: 'とう' },
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '終', reading: 'お' },
            { base: '休', reading: 'やす' },
            { base: '取', reading: 'と' }
          ]
        },
        {
          speakerId: 'ogawa',
          jp: 'それが いいですね。',
          romaji: 'Sore ga ii desu ne.',
          meaning: { en: 'That would be good.', vi: 'Như thế thì tốt đấy.' }
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-た / V-ない + ほうが いいです',
      highlights: ['ほう', 'が', 'いい'],
      title: { en: 'Advice (〜ほうがいいです)', vi: 'Lời khuyên (〜ほうがいいです)' },
      explanation: {
        en: 'Ta-form or nai-form + ほうが いいです gives advice or a warning. For lighter suggestions use 〜たら いいです (Lesson 26): 毎日 運動した ほうが いいです, お風呂に 入らない ほうが いいですよ.',
        vi: 'Thể た hoặc ない + ほうが いいです khuyên hoặc cảnh báo. Gợi ý nhẹ hơn dùng 〜たら いいです (Bài 26): 毎日 運動した ほうが いいです, お風呂に 入らない ほうが いいですよ.'
      },
      explanationRuby: [
        { base: '毎', reading: 'まい' },
        { base: '日', reading: 'にち' },
        { base: '運', reading: 'うん' },
        { base: '動', reading: 'どう' },
        { base: '風', reading: 'ふ' },
        { base: '呂', reading: 'ろ' },
        { base: '入', reading: 'はい' }
      ],
      examples: [
        {
          jp: '毎日 運動した ほうが いいです。',
          romaji: 'Mainichi undō shita hō ga ii desu.',
          meaning: { en: 'You should exercise every day.', vi: 'Hàng ngày nên vận động.' },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '運', reading: 'うん' },
            { base: '動', reading: 'どう' }
          ]
        },
        {
          jp: '熱が あるんです。……じゃ、お風呂に 入らない ほうが いいですよ。',
          romaji: 'Netsu ga aru n desu. ……Ja, ofuro ni hairanai hō ga ii desu yo.',
          meaning: {
            en: 'I have a fever. ...Then you should not take a bath.',
            vi: 'Tôi bị sốt. ...Thế thì không nên tắm.'
          },
          ruby: [
            { base: '熱', reading: 'ねつ' },
            { base: '風', reading: 'ふ' },
            { base: '呂', reading: 'ろ' },
            { base: '入', reading: 'はい' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form + でしょう',
      highlights: ['でしょう'],
      title: { en: 'Probable guess (〜でしょう)', vi: 'Suy đoán có lẽ (〜でしょう)' },
      explanation: {
        en: 'Plain form + でしょう expresses a conjecture about the future or an uncertain situation: あしたは 雨が 降るでしょう.',
        vi: 'Thể thông thường + でしょう suy đoán về tương lai hoặc tình huống chưa chắc: あしたは 雨が 降るでしょう.'
      },
      explanationRuby: [
        { base: '雨', reading: 'あめ' },
        { base: '降', reading: 'ふ' },
        { base: '合', reading: 'ごう' },
        { base: '格', reading: 'かく' }
      ],
      examples: [
        {
          jp: 'あしたは 雪が 降るでしょう。',
          romaji: 'Ashita wa yuki ga furu deshō.',
          meaning: { en: 'It will probably snow tomorrow.', vi: 'Ngày mai chắc có tuyết.' },
          ruby: [
            { base: '雪', reading: 'ゆき' },
            { base: '降', reading: 'ふ' }
          ]
        },
        {
          jp: 'タワポンさんは 合格するでしょうか。……きっと 合格するでしょう。',
          romaji: 'Tawapon-san wa gōkaku suru deshō ka. ……Kitto gōkaku suru deshō.',
          meaning: {
            en: 'Will Mr. Thawaphon pass? ...He will surely pass.',
            vi: 'Anh Thawaphon có đỗ không? ...Chắc là đỗ thôi.'
          },
          ruby: [
            { base: '合', reading: 'ごう' },
            { base: '格', reading: 'かく' },
            { base: '合', reading: 'ごう' },
            { base: '格', reading: 'かく' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form + かもしれません',
      highlights: ['か', 'も', 'し', 'れ'],
      title: { en: 'Possibility (〜かもしれません)', vi: 'Khả năng (〜かもしれません)' },
      explanation: {
        en: 'Plain form + かもしれません expresses a possibility, even if unlikely: 約束の 時間に 間に 合わないかも しれません.',
        vi: 'Thể thông thường + かもしれません diễn tả khả năng, dù thấp: 約束の 時間に 間に 合わないかも しれません.'
      },
      explanationRuby: [
        { base: '約', reading: 'やく' },
        { base: '束', reading: 'そく' },
        { base: '時', reading: 'じ' },
        { base: '間', reading: 'かん' },
        { base: '間', reading: 'ま' },
        { base: '合', reading: 'あ' }
      ],
      examples: [
        {
          jp: '約束の 時間に 間に 合わないかも しれません。',
          romaji: 'Yakusoku no jikan ni ma ni awanai kamo shiremasen.',
          meaning: {
            en: 'I might not make it in time for the appointment.',
            vi: 'Có thể tôi không kịp giờ hẹn.'
          },
          ruby: [
            { base: '約', reading: 'やく' },
            { base: '束', reading: 'そく' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' },
            { base: '間', reading: 'ま' },
            { base: '合', reading: 'あ' }
          ]
        },
        {
          jp: 'エンジンの 音が おかしいんですが。……故障かも しれません。ちょっと 調べましょう。',
          romaji:
            'Enjin no oto ga okashii n desu ga. ……Koshō kamo shiremasen. Chotto shirabemashō.',
          meaning: {
            en: 'The engine sounds strange. ...It might be broken. Let me check.',
            vi: 'Tiếng động cơ lạ quá. ...Có thể hỏng rồi. Để tôi xem thử.'
          },
          ruby: [
            { base: '音', reading: 'おと' },
            { base: '故', reading: 'こ' },
            { base: '障', reading: 'しょう' },
            { base: '調', reading: 'しら' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ます + ましょう',
      highlights: ['ましょう'],
      title: { en: 'Let us do (〜ましょう)', vi: 'Hãy làm (〜ましょう)' },
      explanation: {
        en: 'V-ます + ましょう states the speaker will do something (more decisive than 〜ましょうか): ちょっと 調べましょう.',
        vi: 'V-ます + ましょう nói người nói sẽ làm (quyết đoán hơn 〜ましょうか): ちょっと 調べましょう.'
      },
      explanationRuby: [{ base: '調', reading: 'しら' }],
      examples: [
        {
          jp: 'ちょっと 調べましょう。',
          romaji: 'Chotto shirabemashō.',
          meaning: { en: 'Let me check a moment.', vi: 'Để tôi kiểm tra một chút.' },
          ruby: [{ base: '調', reading: 'しら' }]
        }
      ]
    },
    {
      pattern: 'Quantifier + で',
      highlights: ['で'],
      title: { en: 'Within a limit (量詞 + で)', vi: 'Trong giới hạn (lượng từ + で)' },
      explanation: {
        en: 'Quantifier + で marks a time or amount limit: 30分で 行けますか, 3万円で 買えますか.',
        vi: 'Lượng từ + で đánh dấu giới hạn thời gian hoặc số lượng: 30分で 行けますか, 3万円で 買えますか.'
      },
      explanationRuby: [
        { base: '分', reading: 'ぷん' },
        { base: '行', reading: 'い' },
        { base: '万', reading: 'まん' },
        { base: '円', reading: 'えん' },
        { base: '買', reading: 'か' }
      ],
      examples: [
        {
          jp: '駅まで 30分で 行けますか。',
          romaji: 'Eki made sanjuppun de ikemasu ka.',
          meaning: {
            en: 'Can we get to the station in 30 minutes?',
            vi: '30 phút có tới ga được không?'
          },
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '分', reading: 'ぷん' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'なにか + Adj + こと',
      highlights: ['なに', 'か', 'こと'],
      title: { en: 'Something + adjective + こと', vi: 'なにか + tính từ + こと' },
      explanation: {
        en: 'Use 何か + adjective + こと (not 心配な 何か): 何か 心配な ことが ありますか. Similar: 何か ～もの, どこか ～ところ.',
        vi: 'Dùng 何か + tính từ + こと (không nói 心配な 何か): 何か 心配な ことが ありますか. Tương tự: 何か ～もの, どこか ～ところ.'
      },
      explanationRuby: [
        { base: '何', reading: 'なに' },
        { base: '心', reading: 'しん' },
        { base: '配', reading: 'ぱい' },
        { base: '何', reading: 'なに' },
        { base: '何', reading: 'なに' },
        { base: '心', reading: 'しん' },
        { base: '配', reading: 'ぱい' },
        { base: '何', reading: 'なに' },
        { base: '何', reading: 'なに' }
      ],
      examples: [
        {
          jp: '何か 心配な ことが あるんですか。',
          romaji: 'Nanika shinpai na koto ga aru n desu ka.',
          meaning: { en: 'Is something worrying you?', vi: 'Anh/chị có gì lo lắng à?' },
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '心', reading: 'しん' },
            { base: '配', reading: 'ぱい' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson32-horoscope',
      title: { en: 'This week horoscope', vi: 'Bói sao tuần này' },
      lines: [
        {
          jp: '今週の 牡牛座は 働きすぎに 注意です。',
          romaji: 'Konshū no Oushiza wa hatarakisugi ni chūi desu.',
          meaning: {
            en: 'This week Taurus should watch out for overworking.',
            vi: 'Tuần này cung Kim Ngưu cần chú ý làm việc quá sức.'
          },
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '週', reading: 'しゅう' },
            { base: '牡', reading: 'おう' },
            { base: '牛', reading: 'し' },
            { base: '座', reading: 'ざ' },
            { base: '働', reading: 'はたら' },
            { base: '注', reading: 'ちゅう' },
            { base: '意', reading: 'い' }
          ]
        },
        {
          jp: '健康運は 普通ですが、恋愛運は いいかも しれません。ラッキーアイテムは 石です。',
          romaji:
            'Kenkō-un wa futsū desu ga, renai-un wa ii kamo shiremasen. Rakkī aitemu wa ishi desu.',
          meaning: {
            en: 'Health luck is average, but romance luck might be good. The lucky item is a stone.',
            vi: 'Vận sức khỏe bình thường, vận tình yêu có thể tốt. Vật may mắn là hòn đá.'
          },
          ruby: [
            { base: '健', reading: 'けん' },
            { base: '康', reading: 'こう' },
            { base: '運', reading: 'うん' },
            { base: '普', reading: 'ふ' },
            { base: '通', reading: 'つう' },
            { base: '恋', reading: 'れん' },
            { base: '愛', reading: 'あい' },
            { base: '運', reading: 'うん' },
            { base: '石', reading: 'いし' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What should Taurus watch out for?', vi: 'Kim Ngưu cần chú ý gì?' },
          choices: [
            { id: 'a', label: { en: 'Overworking', vi: 'Làm việc quá sức' } },
            { id: 'b', label: { en: 'Buying lottery tickets', vi: 'Mua vé số' } },
            { id: 'c', label: { en: 'Traveling abroad', vi: 'Du lịch nước ngoài' } },
            { id: 'd', label: { en: 'Skipping meals', vi: 'Bỏ bữa' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Weather forecast terms', vi: 'Thuật ngữ dự báo thời tiết' },
      introTerm: {
        jp: '天気予報',
        ruby: [
          { base: '天', reading: 'てん' },
          { base: '気', reading: 'き' },
          { base: '予', reading: 'よ' },
          { base: '報', reading: 'ほう' }
        ]
      },
      layout: 'stacked',
      rows: [
        {
          jp: '晴れ',
          ruby: [{ base: '晴', reading: 'は' }],
          meaning: { en: 'clear, sunny', vi: 'nắng, quang' }
        },
        {
          jp: '曇り',
          ruby: [{ base: '曇', reading: 'くも' }],
          meaning: { en: 'cloudy', vi: 'có mây' }
        },
        {
          jp: '降水確率',
          ruby: [
            { base: '降', reading: 'こう' },
            { base: '水', reading: 'すい' },
            { base: '確', reading: 'かく' },
            { base: '率', reading: 'りつ' }
          ],
          meaning: { en: 'probability of precipitation', vi: 'xác suất mưa' }
        },
        {
          jp: '台風',
          ruby: [
            { base: '台', reading: 'たい' },
            { base: '風', reading: 'ふう' }
          ],
          meaning: { en: 'typhoon', vi: 'bão' }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Proper nouns', vi: 'Tên riêng' },
      includeInQuiz: false,
      items: [
        {
          kana: 'ヨーロッパ',
          romaji: 'Yōroppa',
          meaning: { en: 'Europe', vi: 'châu Âu' }
        }
      ]
    }
  ]
};
