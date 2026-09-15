import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 31 (volitional, 〜と思っています, つもり, 予定, まだ〜ていません). */
export const n4Lesson31: Lesson = {
  id: 'lesson-31',
  number: 31,
  title: {
    en: 'Plans and intentions',
    vi: 'Dự định và ý định'
  },
  focus: {
    en: 'Suggest casually with the volitional form, express ongoing plans with 〜と思っています and つもりです, state schedules with 予定です, and say something is not done yet with まだ〜ていません.',
    vi: 'Gợi ý thân mật bằng thể ý định, bày tỏ kế hoạch với 〜と思っています và つもりです, nói lịch với 予定です, và chưa làm xong với まだ〜ていません.'
  },
  vocab: [
    {
      kana: 'つづけます',
      kanji: '続けます',
      romaji: 'tsuzukemasu',
      meaning: { en: 'to continue', vi: 'tiếp tục' },
      ruby: [{ base: '続', reading: 'つづ' }]
    },
    {
      kana: 'みつけます',
      kanji: '見つけます',
      romaji: 'mitsukemasu',
      meaning: { en: 'to find', vi: 'tìm thấy' },
      ruby: [
        { base: '見', reading: 'み' },
        { base: '付', reading: 'つ' }
      ]
    },
    {
      kana: 'とります',
      kanji: '取ります',
      romaji: 'torimasu',
      meaning: { en: 'to take [休みを～: time off]', vi: 'xin [休みを～: nghỉ]' },
      ruby: [{ base: '取', reading: 'と' }]
    },
    {
      kana: 'うけます',
      kanji: '受けます',
      romaji: 'ukemasu',
      meaning: { en: 'to take [試験を～: an exam]', vi: 'dự [試験を～: thi]' },
      ruby: [{ base: '受', reading: 'う' }]
    },
    {
      kana: 'もうしこみます',
      kanji: '申し込みます',
      romaji: 'mōshikomimasu',
      meaning: { en: 'to apply, to sign up', vi: 'đăng ký' },
      ruby: [
        { base: '申', reading: 'もう' },
        { base: '込', reading: 'こ' }
      ]
    },
    {
      kana: 'きゅうけいします',
      kanji: '休憩します',
      romaji: 'kyūkei shimasu',
      meaning: { en: 'to take a break', vi: 'nghỉ giải lao' },
      ruby: [
        { base: '休', reading: 'きゅう' },
        { base: '憩', reading: 'けい' }
      ]
    },
    {
      kana: 'れんきゅう',
      kanji: '連休',
      romaji: 'renkyū',
      meaning: { en: 'consecutive holidays', vi: 'ngày nghỉ liên tục' },
      ruby: [
        { base: '連', reading: 'れん' },
        { base: '休', reading: 'きゅう' }
      ]
    },
    {
      kana: 'さくぶん',
      kanji: '作文',
      romaji: 'sakubun',
      meaning: { en: 'composition, essay', vi: 'bài tập làm văn' },
      ruby: [
        { base: '作', reading: 'さく' },
        { base: '文', reading: 'ぶん' }
      ]
    },
    {
      kana: 'はっぴょう',
      kanji: '発表',
      romaji: 'happyō',
      meaning: {
        en: 'presentation (~を します: to present)',
        vi: 'phát biểu (~を します: trình bày)'
      },
      ruby: [
        { base: '発', reading: 'はっ' },
        { base: '表', reading: 'ぴょう' }
      ]
    },
    {
      kana: 'てんらんかい',
      kanji: '展覧会',
      romaji: 'tenrankai',
      meaning: { en: 'exhibition', vi: 'triển lãm' },
      ruby: [
        { base: '展', reading: 'てん' },
        { base: '覧', reading: 'らん' },
        { base: '会', reading: 'かい' }
      ]
    },
    {
      kana: 'けっこんしき',
      kanji: '結婚式',
      romaji: 'kekkonshiki',
      meaning: { en: 'wedding ceremony', vi: 'lễ cưới' },
      ruby: [
        { base: '結', reading: 'けっ' },
        { base: '婚', reading: 'こん' },
        { base: '式', reading: 'しき' }
      ]
    },
    {
      kana: 'おそうしき',
      kanji: 'お葬式',
      romaji: 'osōshiki',
      meaning: { en: 'funeral', vi: 'đám tang' },
      ruby: [
        { base: '葬', reading: 'そう' },
        { base: '式', reading: 'しき' }
      ]
    },
    {
      kana: 'しき',
      kanji: '式',
      romaji: 'shiki',
      meaning: { en: 'ceremony', vi: 'lễ' },
      ruby: [{ base: '式', reading: 'しき' }]
    },
    {
      kana: 'ほんしゃ',
      kanji: '本社',
      romaji: 'honsha',
      meaning: { en: 'head office, headquarters', vi: 'trụ sở chính, tổng công ty' },
      ruby: [
        { base: '本', reading: 'ほん' },
        { base: '社', reading: 'しゃ' }
      ]
    },
    {
      kana: 'してん',
      kanji: '支店',
      romaji: 'shiten',
      meaning: { en: 'branch office', vi: 'chi nhánh' },
      ruby: [
        { base: '支', reading: 'し' },
        { base: '店', reading: 'てん' }
      ]
    },
    {
      kana: 'きょうかい',
      kanji: '教会',
      romaji: 'kyōkai',
      meaning: { en: 'church', vi: 'nhà thờ' },
      ruby: [
        { base: '教', reading: 'きょう' },
        { base: '会', reading: 'かい' }
      ]
    },
    {
      kana: 'だいがくいん',
      kanji: '大学院',
      romaji: 'daigakuin',
      meaning: { en: 'graduate school', vi: 'cao học' },
      ruby: [
        { base: '大', reading: 'だい' },
        { base: '学', reading: 'がく' },
        { base: '院', reading: 'いん' }
      ]
    },
    {
      kana: 'どうぶつえん',
      kanji: '動物園',
      romaji: 'dōbutsuen',
      meaning: { en: 'zoo', vi: 'sở thú' },
      ruby: [
        { base: '動', reading: 'どう' },
        { base: '物', reading: 'ぶつ' },
        { base: '園', reading: 'えん' }
      ]
    },
    {
      kana: 'おんせん',
      kanji: '温泉',
      romaji: 'onsen',
      meaning: { en: 'hot spring', vi: 'suối nước nóng' },
      ruby: [
        { base: '温', reading: 'おん' },
        { base: '泉', reading: 'せん' }
      ]
    },
    {
      kana: 'かえり',
      kanji: '帰り',
      romaji: 'kaeri',
      meaning: { en: 'return trip, way home', vi: 'chiều về' },
      ruby: [{ base: '帰', reading: 'かえ' }]
    },
    {
      kana: 'おこさん',
      kanji: 'お子さん',
      romaji: 'okosan',
      meaning: { en: 'child (someone else)', vi: 'con (của người khác)' },
      ruby: [{ base: '子', reading: 'こ' }]
    },
    {
      kana: '～ごう',
      kanji: '～号',
      romaji: '~gō',
      meaning: { en: 'No. ~ (train/service number)', vi: 'số (hiệu) ~' },
      ruby: [{ base: '号', reading: 'ごう' }]
    },
    {
      kana: '～の ほう',
      kanji: '～の方',
      romaji: '~no hō',
      meaning: { en: 'the ~ side, direction', vi: 'phía ~' },
      ruby: [{ base: '方', reading: 'ほう' }]
    },
    {
      kana: 'ずっと',
      romaji: 'zutto',
      meaning: { en: 'the whole time, continuously', vi: 'suốt, liên tục' }
    },
    {
      kana: 'のこります',
      kanji: '残ります',
      romaji: 'nokorimasu',
      meaning: { en: 'to remain, to stay behind', vi: 'ở lại, còn lại' },
      ruby: [{ base: '残', reading: 'のこ' }]
    },
    {
      kana: 'にゅうがくしけん',
      kanji: '入学試験',
      romaji: 'nyūgaku shiken',
      meaning: { en: 'entrance examination', vi: 'kỳ thi đầu vào' },
      ruby: [
        { base: '入', reading: 'にゅう' },
        { base: '学', reading: 'がく' },
        { base: '試', reading: 'し' },
        { base: '験', reading: 'けん' }
      ]
    },
    {
      kana: 'つきに',
      kanji: '月に',
      romaji: 'tsuki ni',
      meaning: { en: 'per month, in a month', vi: '(trong) một tháng' },
      ruby: [{ base: '月', reading: 'つき' }]
    },
    {
      kana: 'むら',
      kanji: '村',
      romaji: 'mura',
      meaning: { en: 'village', vi: 'làng' },
      ruby: [{ base: '村', reading: 'むら' }]
    },
    {
      kana: 'そつぎょうします',
      kanji: '卒業します',
      romaji: 'sotsugyō shimasu',
      meaning: { en: 'to graduate', vi: 'tốt nghiệp' },
      ruby: [
        { base: '卒', reading: 'そつ' },
        { base: '業', reading: 'ぎょう' }
      ]
    },
    {
      kana: 'えいがかん',
      kanji: '映画館',
      romaji: 'eigakan',
      meaning: { en: 'movie theater', vi: 'rạp chiếu phim' },
      ruby: [
        { base: '映', reading: 'えい' },
        { base: '画', reading: 'が' },
        { base: '館', reading: 'かん' }
      ]
    },
    {
      kana: 'とじます',
      kanji: '閉じます',
      romaji: 'tojimasu',
      meaning: { en: 'to close (eyes)', vi: 'nhắm (mắt)' },
      ruby: [{ base: '閉', reading: 'と' }]
    },
    {
      kana: 'とかい',
      kanji: '都会',
      romaji: 'tokai',
      meaning: { en: 'city, urban area', vi: 'thành phố' },
      ruby: [
        { base: '都', reading: 'と' },
        { base: '会', reading: 'かい' }
      ]
    },
    {
      kana: 'じゆうに',
      kanji: '自由に',
      romaji: 'jiyū ni',
      meaning: { en: 'freely', vi: 'thoải mái, tự do' },
      ruby: [
        { base: '自', reading: 'じ' },
        { base: '由', reading: 'ゆう' }
      ]
    }
  ],
  phrases: [
    {
      kana: 'ちょっと 休まない？',
      kanji: 'ちょっと 休まない？',
      romaji: 'Chotto yasumanai?',
      meaning: { en: 'Shall we rest a bit?', vi: 'Nghỉ một chút nhé?' },
      ruby: [{ base: '休', reading: 'やす' }]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson31-transfer',
      title: { en: 'I plan to learn cooking', vi: 'Tôi định học nấu ăn' },
      speakers: [
        { id: 'ogawa', name: '小川' },
        { id: 'miller', name: 'ミラー' }
      ],
      lines: [
        {
          speakerId: 'ogawa',
          jp: '来月から 独身に なります。',
          romaji: 'Raigetsu kara dokushin ni narimasu.',
          meaning: {
            en: 'Starting next month I will be single (living alone).',
            vi: 'Từ tháng sau tôi sẽ thành độc thân.'
          },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '月', reading: 'げつ' },
            { base: '独', reading: 'どく' },
            { base: '身', reading: 'しん' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'どうして ですか。',
          romaji: 'Dōshite desu ka.',
          meaning: { en: 'Why is that?', vi: 'Sao?' }
        },
        {
          speakerId: 'ogawa',
          jp: '実は、大阪の 本社に 転勤するんです。',
          romaji: 'Jitsu wa, Ōsaka no honsha ni tenkin suru n desu.',
          meaning: {
            en: 'Actually, I am being transferred to the head office in Osaka.',
            vi: 'Thực ra tôi chuyển về trụ sở chính ở Osaka.'
          },
          ruby: [
            { base: '実', reading: 'じつ' },
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '本', reading: 'ほん' },
            { base: '社', reading: 'しゃ' },
            { base: '転', reading: 'てん' },
            { base: '勤', reading: 'きん' }
          ]
        },
        {
          speakerId: 'miller',
          jp: '本社ですか。おめでとう ございます。でも、なぜ 独身に？',
          romaji: 'Honsha desu ka. Omedetō gozaimasu. Demo, naze dokushin ni?',
          meaning: {
            en: 'The head office? Congratulations. But why living alone?',
            vi: 'Trụ sở chính à? Xin chúc mừng. Nhưng sao lại độc thân?'
          },
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '社', reading: 'しゃ' },
            { base: '独', reading: 'どく' },
            { base: '身', reading: 'しん' }
          ]
        },
        {
          speakerId: 'ogawa',
          jp: '妻と 子どもは 東京に 残るから です。',
          romaji: 'Tsuma to kodomo wa Tōkyō ni nokoru kara desu.',
          meaning: {
            en: 'Because my wife and children will stay in Tokyo.',
            vi: 'Vì vợ và con tôi ở lại Tokyo.'
          },
          ruby: [
            { base: '妻', reading: 'つま' },
            { base: '子', reading: 'こ' },
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '残', reading: 'のこ' }
          ]
        },
        {
          speakerId: 'miller',
          jp: '奥さんと お子さんは 一緒に 行かないんですか。',
          romaji: 'Okusan to okosan wa issho ni ikanai n desu ka.',
          meaning: {
            en: 'Your wife and children are not going with you?',
            vi: 'Vợ con anh không đi cùng à?'
          },
          ruby: [
            { base: '奥', reading: 'おく' },
            { base: '子', reading: 'こ' },
            { base: '一', reading: 'いっ' },
            { base: '緒', reading: 'しょ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'ogawa',
          jp: 'はい。息子は 来年 大学の 入学試験が あるから 東京に 残りたいと 言っています。妻も 今の 会社を 辞めたく ないそうです。',
          romaji:
            'Hai. Musuko wa rainen daigaku no nyūgaku shiken ga aru kara Tōkyō ni nokoritai to itte imasu. Tsuma mo ima no kaisha o yametakunai sō desu.',
          meaning: {
            en: 'No. My son says he wants to stay in Tokyo because he has a university entrance exam next year. My wife also says she does not want to quit her current company.',
            vi: 'Vâng. Con trai muốn ở Tokyo vì sang năm thi đại học. Vợ cũng không muốn nghỉ công ty hiện tại.'
          },
          ruby: [
            { base: '息', reading: 'むす' },
            { base: '子', reading: 'こ' },
            { base: '来', reading: 'らい' },
            { base: '年', reading: 'ねん' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '入', reading: 'にゅう' },
            { base: '学', reading: 'がく' },
            { base: '試', reading: 'し' },
            { base: '験', reading: 'けん' },
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '残', reading: 'のこ' },
            { base: '言', reading: 'い' },
            { base: '妻', reading: 'つま' },
            { base: '今', reading: 'いま' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '辞', reading: 'や' }
          ]
        },
        {
          speakerId: 'miller',
          jp: '家族が 離れ離れ ですね。',
          romaji: 'Kazoku ga hanarebanare desu ne.',
          meaning: { en: 'Your family will live apart.', vi: 'Gia đình anh sống xa nhau nhỉ.' },
          ruby: [
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '離', reading: 'はな' },
            { base: '離', reading: 'はな' }
          ]
        },
        {
          speakerId: 'ogawa',
          jp: 'はい。でも 1か月に 2、3回、週末に 帰る つもりです。',
          romaji: 'Hai. Demo ikka tsuki ni ni, san kai, shūmatsu ni kaeru tsumori desu.',
          meaning: {
            en: 'Yes. But I plan to go home two or three times a month on weekends.',
            vi: 'Vâng. Nhưng một tháng tôi định về 2, 3 lần cuối tuần.'
          },
          ruby: [
            { base: '月', reading: 'つき' },
            { base: '回', reading: 'かい' },
            { base: '週', reading: 'しゅう' },
            { base: '末', reading: 'まつ' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          speakerId: 'miller',
          jp: '大変ですね。',
          romaji: 'Taihen desu ne.',
          meaning: { en: 'That is tough.', vi: 'Vất vả quá nhỉ.' },
          ruby: [
            { base: '大', reading: 'たい' },
            { base: '変', reading: 'へん' }
          ]
        },
        {
          speakerId: 'ogawa',
          jp: 'でも いい チャンスなので、料理を 習う つもりです。',
          romaji: 'Demo ii chansu na node, ryōri o narau tsumori desu.',
          meaning: {
            en: 'But it is a good chance, so I plan to learn cooking.',
            vi: 'Nhưng đây là cơ hội tốt nên tôi định học nấu ăn.'
          },
          ruby: [
            { base: '料', reading: 'りょう' },
            { base: '理', reading: 'り' },
            { base: '習', reading: 'なら' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'それは いいですね。',
          romaji: 'Sore wa ii desu ne.',
          meaning: { en: 'That is nice.', vi: 'Thế thì hay nhỉ.' }
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-volitional',
      highlights: ['よう', 'おう'],
      title: { en: 'Volitional form', vi: 'Thể ý định' },
      explanation: {
        en: 'Group I: change the vowel before ます to /o/ + う (かきます→かこう). Group II: add よう (たべます→たべよう). Group III: します→しよう, 来ます→こよう.',
        vi: 'Nhóm I: đổi nguyên âm trước ます thành /o/ + う (かきます→かこう). Nhóm II: thêm よう (たべます→たべよう). Nhóm III: します→しよう, 来ます→こよう.'
      },
      explanationRuby: [{ base: '来', reading: 'き' }],
      examples: [
        {
          jp: 'ちょっと 休まない？ ……うん、休もう。',
          romaji: 'Chotto yasumanai? ……Un, yasumō.',
          meaning: {
            en: 'Shall we rest a bit? ...Yeah, let us rest.',
            vi: 'Nghỉ chút nhé? ...Ừ, nghỉ thôi.'
          },
          ruby: [
            { base: '休', reading: 'やす' },
            { base: '休', reading: 'やす' }
          ]
        },
        {
          jp: '手伝おうか。',
          romaji: 'Tetsudao ka.',
          meaning: { en: 'Shall I help?', vi: 'Tôi giúp nhé?' },
          ruby: [
            { base: '手', reading: 'て' },
            { base: '伝', reading: 'つだ' }
          ]
        }
      ]
    },
    {
      pattern: 'V-volitional と 思っています',
      patternRuby: [{ base: '思', reading: 'おも' }],
      highlights: ['と', '思'],
      title: { en: 'Ongoing intention (〜と思っています)', vi: 'Ý định đã có (〜と思っています)' },
      explanation: {
        en: 'Volitional + と思っています expresses a plan formed earlier that continues now: 週末は 海へ 行こうと 思っています. Use と思います for a decision just made.',
        vi: 'Thể ý định + と思っています diễn tả kế hoạch đã hình thành và vẫn giữ: 週末は 海へ 行こうと 思っています. と思います dùng khi vừa quyết định.'
      },
      explanationRuby: [
        { base: '思', reading: 'おも' },
        { base: '週', reading: 'しゅう' },
        { base: '末', reading: 'まつ' },
        { base: '海', reading: 'うみ' },
        { base: '行', reading: 'い' },
        { base: '思', reading: 'おも' },
        { base: '思', reading: 'おも' }
      ],
      examples: [
        {
          jp: '週末は 海へ 行こうと 思っています。',
          romaji: 'Shūmatsu wa umi e ikō to omotte imasu.',
          meaning: {
            en: 'I am planning to go to the sea this weekend.',
            vi: 'Cuối tuần tôi định đi biển.'
          },
          ruby: [
            { base: '週', reading: 'しゅう' },
            { base: '末', reading: 'まつ' },
            { base: '海', reading: 'うみ' },
            { base: '行', reading: 'い' },
            { base: '思', reading: 'おも' }
          ]
        }
      ]
    },
    {
      pattern: 'V-dictionary / V-ない + つもりです',
      highlights: ['つもり'],
      title: { en: 'Firm intention (つもりです)', vi: 'Ý định chắc chắn (つもりです)' },
      explanation: {
        en: 'Dictionary form (or ない) + つもりです states a firm plan: 国へ 帰っても、日本語の 勉強を 続ける つもりです, あしたからは たばこを 吸わない つもりです.',
        vi: 'Thể nguyên dạng (hoặc ない) + つもりです nói ý định rõ ràng: 国へ 帰っても、日本語の 勉強を 続ける つもりです, あしたからは たばこを 吸わない つもりです.'
      },
      explanationRuby: [
        { base: '国', reading: 'くに' },
        { base: '帰', reading: 'かえ' },
        { base: '日', reading: 'に' },
        { base: '本', reading: 'ほん' },
        { base: '語', reading: 'ご' },
        { base: '勉', reading: 'べん' },
        { base: '強', reading: 'きょう' },
        { base: '続', reading: 'つづ' },
        { base: '吸', reading: 'す' }
      ],
      examples: [
        {
          jp: '国へ 帰っても、日本語の 勉強を 続ける つもりです。',
          romaji: 'Kuni e kaette mo, Nihongo no benkyō o tsuzukeru tsumori desu.',
          meaning: {
            en: 'Even after returning home, I plan to continue studying Japanese.',
            vi: 'Về nước tôi vẫn định tiếp tục học tiếng Nhật.'
          },
          ruby: [
            { base: '国', reading: 'くに' },
            { base: '帰', reading: 'かえ' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' },
            { base: '続', reading: 'つづ' }
          ]
        }
      ]
    },
    {
      pattern: 'V-dictionary / N の + 予定です',
      patternRuby: [
        { base: '予', reading: 'よ' },
        { base: '定', reading: 'てい' }
      ],
      highlights: ['予', '定'],
      title: { en: 'Schedule (予定です)', vi: 'Kế hoạch (予定です)' },
      explanation: {
        en: 'Dictionary form or noun + の + 予定です gives a schedule: 7月の 終わりに ドイツへ 出張する 予定です.',
        vi: 'Thể nguyên dạng hoặc danh từ + の + 予定です nói lịch trình: 7月の 終わりに ドイツへ 出張する 予定です.'
      },
      explanationRuby: [
        { base: '予', reading: 'よ' },
        { base: '定', reading: 'てい' },
        { base: '月', reading: 'がつ' },
        { base: '終', reading: 'お' },
        { base: '出', reading: 'しゅっ' },
        { base: '張', reading: 'ちょう' },
        { base: '予', reading: 'よ' },
        { base: '定', reading: 'てい' }
      ],
      examples: [
        {
          jp: '7月の 終わりに ドイツへ 出張する 予定です。',
          romaji: 'Shichigatsu no owari ni Doitsu e shutchō suru yotei desu.',
          meaning: {
            en: 'I am scheduled to go on a business trip to Germany at the end of July.',
            vi: 'Cuối tháng 7 tôi dự định đi công tác Đức.'
          },
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '終', reading: 'お' },
            { base: '出', reading: 'しゅっ' },
            { base: '張', reading: 'ちょう' },
            { base: '予', reading: 'よ' },
            { base: '定', reading: 'てい' }
          ]
        }
      ]
    },
    {
      pattern: 'まだ V-て いません',
      highlights: ['まだ', 'て', 'い', 'ません'],
      title: { en: 'Not yet (まだ〜ていません)', vi: 'Chưa xong (まだ〜ていません)' },
      explanation: {
        en: 'まだ + V-て いません means something has not happened or is not finished yet: レポートは まだ 書いて いません.',
        vi: 'まだ + V-て いません: việc chưa xảy ra hoặc chưa hoàn thành: レポートは まだ 書いて いません.'
      },
      explanationRuby: [{ base: '書', reading: 'か' }],
      examples: [
        {
          jp: 'レポートは もう 書きましたか。……いいえ、まだ 書いて いません。',
          romaji: 'Repōto wa mō kakimashita ka. ……Iie, mada kaite imasen.',
          meaning: {
            en: 'Have you finished the report? ...No, I have not written it yet.',
            vi: 'Anh viết xong báo cáo chưa? ...Chưa, tôi chưa viết xong.'
          },
          ruby: [
            { base: '書', reading: 'か' },
            { base: '書', reading: 'か' }
          ]
        }
      ]
    },
    {
      pattern: 'V-stem as noun',
      highlights: [],
      title: { en: 'Verb stem as noun', vi: 'Gốc ます làm danh từ' },
      explanation: {
        en: 'The ます-stem can function as a noun: 帰り, 休み, 遊び, 答え, 申し込み, 楽しみ.',
        vi: 'Gốc ます có thể làm danh từ: 帰り, 休み, 遊び, 答え, 申し込み, 楽しみ.'
      },
      explanationRuby: [
        { base: '帰', reading: 'かえ' },
        { base: '休', reading: 'やす' },
        { base: '遊', reading: 'あそ' },
        { base: '答', reading: 'こた' },
        { base: '申', reading: 'もう' },
        { base: '込', reading: 'こ' },
        { base: '楽', reading: 'たの' }
      ],
      examples: [
        {
          jp: '帰りの 新幹線は どこから 乗りますか。',
          romaji: 'Kaeri no shinkansen wa doko kara norimasu ka.',
          meaning: {
            en: 'Where do you board the return Shinkansen?',
            vi: 'Anh lên tàu Shinkansen chiều về từ đâu?'
          },
          ruby: [
            { base: '帰', reading: 'かえ' },
            { base: '新', reading: 'しん' },
            { base: '幹', reading: 'かん' },
            { base: '線', reading: 'せん' },
            { base: '乗', reading: 'の' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson31-village',
      title: { en: 'After graduation', vi: 'Sau khi tốt nghiệp' },
      lines: [
        {
          jp: 'ある 村の 青年は 大学を 卒業して、都会の 映画館で 働く つもりでした。',
          romaji:
            'Aru mura no seinen wa daigaku o sotsugyō shite, tokai no eigakan de hataraku tsumori deshita.',
          meaning: {
            en: 'A young man from a village planned to work at a city movie theater after graduating from university.',
            vi: 'Một thanh niên ở làng định làm ở rạp phim thành phố sau khi tốt nghiệp đại học.'
          },
          ruby: [
            { base: '村', reading: 'むら' },
            { base: '青', reading: 'せい' },
            { base: '年', reading: 'ねん' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '卒', reading: 'そつ' },
            { base: '業', reading: 'ぎょう' },
            { base: '都', reading: 'と' },
            { base: '会', reading: 'かい' },
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' },
            { base: '館', reading: 'かん' },
            { base: '働', reading: 'はたら' }
          ]
        },
        {
          jp: 'でも 子どもたちと 自由に 遊べる 仕事を 見つけようと 思っています。',
          romaji: 'Demo kodomotachi to jiyū ni asoberu shigoto o mitsukeyō to omotte imasu.',
          meaning: {
            en: 'But now I am thinking of finding work where I can play freely with children.',
            vi: 'Nhưng bây giờ tôi định tìm việc có thể chơi thoải mái với trẻ em.'
          },
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '自', reading: 'じ' },
            { base: '由', reading: 'ゆう' },
            { base: '遊', reading: 'あそ' },
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '見', reading: 'み' },
            { base: '思', reading: 'おも' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What did he first plan to do?', vi: 'Ban đầu anh ấy định làm gì?' },
          choices: [
            {
              id: 'a',
              label: { en: 'Work at a city movie theater', vi: 'Làm ở rạp phim thành phố' }
            },
            { id: 'b', label: { en: 'Return to the village farm', vi: 'Về làng nông nghiệp' } },
            { id: 'c', label: { en: 'Study at graduate school', vi: 'Học cao học' } },
            { id: 'd', label: { en: 'Travel abroad', vi: 'Du lịch nước ngoài' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Academic majors', vi: 'Chuyên ngành học' },
      introTerm: {
        jp: '専門',
        ruby: [
          { base: '専', reading: 'せん' },
          { base: '門', reading: 'もん' }
        ]
      },
      layout: 'stacked',
      rows: [
        {
          jp: '医学',
          ruby: [
            { base: '医', reading: 'い' },
            { base: '学', reading: 'がく' }
          ],
          meaning: { en: 'medicine', vi: 'y học' }
        },
        {
          jp: '経済学',
          ruby: [
            { base: '経', reading: 'けい' },
            { base: '済', reading: 'ざい' },
            { base: '学', reading: 'がく' }
          ],
          meaning: { en: 'economics', vi: 'kinh tế học' }
        },
        {
          jp: '工学',
          ruby: [
            { base: '工', reading: 'こう' },
            { base: '学', reading: 'がく' }
          ],
          meaning: { en: 'engineering', vi: 'kỹ thuật' }
        },
        {
          jp: '文学',
          ruby: [
            { base: '文', reading: 'ぶん' },
            { base: '学', reading: 'がく' }
          ],
          meaning: { en: 'literature', vi: 'văn học' }
        },
        {
          jp: '心理学',
          ruby: [
            { base: '心', reading: 'しん' },
            { base: '理', reading: 'り' },
            { base: '学', reading: 'がく' }
          ],
          meaning: { en: 'psychology', vi: 'tâm lý học' }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Proper nouns', vi: 'Tên riêng' },
      includeInQuiz: false,
      items: [
        {
          kana: 'バリ',
          romaji: 'Bari',
          meaning: { en: 'Bali (Indonesia)', vi: 'Bali (Indonesia)' }
        },
        {
          kana: 'ピカソ',
          romaji: 'Pikaso',
          meaning: { en: 'Pablo Picasso (1881-1973)', vi: 'Pablo Picasso (1881-1973)' }
        },
        {
          kana: 'のぞみ',
          kanji: 'のぞみ',
          romaji: 'Nozomi',
          meaning: { en: 'Nozomi Shinkansen service', vi: 'Tàu Shinkansen Nozomi' }
        },
        {
          kana: 'しんこうべ',
          kanji: '新神戸',
          romaji: 'Shin-Kōbe',
          meaning: { en: 'Shin-Kōbe Station (Hyogo)', vi: 'Ga Shin-Kōbe (Hyogo)' },
          ruby: [
            { base: '新', reading: 'しん' },
            { base: '神', reading: 'こう' },
            { base: '戸', reading: 'べ' }
          ]
        }
      ]
    }
  ]
};
