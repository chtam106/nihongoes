import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 4 (Time and schedules (時, 曜日, daily routines)). */
export const n5Lesson4: Lesson = {
  id: 'lesson-4',
  number: 4,
  title: {
    en: 'What time is it?',
    vi: 'Mấy giờ rồi?'
  },
  focus: {
    en: 'Tell the time, name days of the week, and describe daily activities and schedules.',
    vi: 'Nói giờ, các thứ trong tuần và sinh hoạt hàng ngày.'
  },
  vocab: [
    {
      kana: 'おきます',
      kanji: '起きます',
      romaji: 'okimasu',
      meaning: { en: 'to wake up, get up', vi: 'dậy, thức dậy' },
      ruby: [{ base: '起', reading: 'お' }]
    },
    {
      kana: 'ねます',
      kanji: '寝ます',
      romaji: 'nemasu',
      meaning: { en: 'to sleep, go to bed', vi: 'ngủ, đi ngủ' },
      ruby: [{ base: '寝', reading: 'ね' }]
    },
    {
      kana: 'はたらきます',
      kanji: '働きます',
      romaji: 'hatarakimasu',
      meaning: { en: 'to work', vi: 'làm việc' },
      ruby: [{ base: '働', reading: 'はたら' }]
    },
    {
      kana: 'やすみます',
      kanji: '休みます',
      romaji: 'yasumimasu',
      meaning: { en: 'to rest, take a break', vi: 'nghỉ, nghỉ ngơi' },
      ruby: [{ base: '休', reading: 'やす' }]
    },
    {
      kana: 'べんきょうします',
      kanji: '勉強します',
      romaji: 'benkyō shimasu',
      meaning: { en: 'to study', vi: 'học' },
      ruby: [
        { base: '勉', reading: 'べん' },
        { base: '強', reading: 'きょう' }
      ]
    },
    {
      kana: 'おわります',
      kanji: '終わります',
      romaji: 'owarimasu',
      meaning: { en: 'to finish, end', vi: 'hết, kết thúc, xong' },
      ruby: [{ base: '終', reading: 'お' }]
    },
    {
      kana: 'デパート',
      romaji: 'depāto',
      meaning: { en: 'department store', vi: 'bách hóa' }
    },
    {
      kana: 'ぎんこう',
      kanji: '銀行',
      romaji: 'ginkō',
      meaning: { en: 'bank', vi: 'ngân hàng' },
      ruby: [
        { base: '銀', reading: 'ぎん' },
        { base: '行', reading: 'こう' }
      ]
    },
    {
      kana: 'ゆうびんきょく',
      kanji: '郵便局',
      romaji: 'yūbinkyoku',
      meaning: { en: 'post office', vi: 'bưu điện' },
      ruby: [
        { base: '郵', reading: 'ゆう' },
        { base: '便', reading: 'びん' },
        { base: '局', reading: 'きょく' }
      ]
    },
    {
      kana: 'としょかん',
      kanji: '図書館',
      romaji: 'toshokan',
      meaning: { en: 'library', vi: 'thư viện' },
      ruby: [
        { base: '図', reading: 'と' },
        { base: '書', reading: 'しょ' },
        { base: '館', reading: 'かん' }
      ]
    },
    {
      kana: 'びじゅつかん',
      kanji: '美術館',
      romaji: 'bijutsukan',
      meaning: { en: 'art museum', vi: 'bảo tàng mỹ thuật' },
      ruby: [
        { base: '美', reading: 'び' },
        { base: '術', reading: 'じゅつ' },
        { base: '館', reading: 'かん' }
      ]
    },
    {
      kana: 'いま',
      kanji: '今',
      romaji: 'ima',
      meaning: { en: 'now', vi: 'bây giờ' },
      ruby: [{ base: '今', reading: 'いま' }]
    },
    {
      kana: '〜じ',
      kanji: '〜時',
      romaji: '~ji',
      speech: 'じ',
      meaning: { en: "o'clock (~ hour)", vi: '~ giờ' },
      ruby: [{ base: '時', reading: 'じ' }]
    },
    {
      kana: '〜ふん',
      kanji: '〜分',
      romaji: '~fun (~pun)',
      speech: 'ふん',
      meaning: {
        en: '~ minute(s) (〜ぷん after 5, 7, 9...)',
        vi: '~ phút (〜ぷん sau 5, 7, 9...)'
      },
      ruby: [{ base: '分', reading: 'ふん' }]
    },
    {
      kana: 'はん',
      kanji: '半',
      romaji: 'han',
      meaning: { en: 'half (past the hour)', vi: 'rưỡi, nửa' },
      ruby: [{ base: '半', reading: 'はん' }]
    },
    {
      kana: 'なんじ',
      kanji: '何時',
      romaji: 'nanji',
      meaning: { en: 'what time', vi: 'mấy giờ' },
      ruby: [
        { base: '何', reading: 'なん' },
        { base: '時', reading: 'じ' }
      ]
    },
    {
      kana: 'なんぷん',
      kanji: '何分',
      romaji: 'nanpun',
      meaning: { en: 'how many minutes', vi: 'mấy phút' },
      ruby: [
        { base: '何', reading: 'なん' },
        { base: '分', reading: 'ぷん' }
      ]
    },
    {
      kana: 'ごぜん',
      kanji: '午前',
      romaji: 'gozen',
      meaning: { en: 'a.m., before noon', vi: 'sáng, trước mười hai giờ trưa' },
      ruby: [
        { base: '午', reading: 'ご' },
        { base: '前', reading: 'ぜん' }
      ]
    },
    {
      kana: 'ごご',
      kanji: '午後',
      romaji: 'gogo',
      meaning: { en: 'p.m., after noon', vi: 'chiều, sau mười hai giờ trưa' },
      ruby: [
        { base: '午', reading: 'ご' },
        { base: '後', reading: 'ご' }
      ]
    },
    {
      kana: 'あさ',
      kanji: '朝',
      romaji: 'asa',
      meaning: { en: 'morning', vi: 'buổi sáng, sáng' },
      ruby: [{ base: '朝', reading: 'あさ' }]
    },
    {
      kana: 'ひる',
      kanji: '昼',
      romaji: 'hiru',
      meaning: { en: 'noon, midday', vi: 'buổi trưa, trưa' },
      ruby: [{ base: '昼', reading: 'ひる' }]
    },
    {
      kana: 'ばん',
      kanji: '晩',
      romaji: 'ban',
      meaning: { en: 'evening, night (よる)', vi: 'buổi tối, tối (よる)' },
      ruby: [{ base: '晩', reading: 'ばん' }]
    },
    {
      kana: 'おととい',
      romaji: 'ototoi',
      meaning: { en: 'the day before yesterday', vi: 'hôm kia' }
    },
    {
      kana: 'きのう',
      romaji: 'kinō',
      meaning: { en: 'yesterday', vi: 'hôm qua' }
    },
    {
      kana: 'きょう',
      kanji: '今日',
      romaji: 'kyō',
      meaning: { en: 'today', vi: 'hôm nay' },
      ruby: [
        { base: '今', reading: 'きょ' },
        { base: '日', reading: 'う' }
      ]
    },
    {
      kana: 'あした',
      romaji: 'ashita',
      meaning: { en: 'tomorrow', vi: 'ngày mai' }
    },
    {
      kana: 'あさって',
      romaji: 'asatte',
      meaning: { en: 'the day after tomorrow', vi: 'ngày kia' }
    },
    {
      kana: 'けさ',
      romaji: 'kesa',
      meaning: { en: 'this morning', vi: 'sáng nay' }
    },
    {
      kana: 'こんばん',
      kanji: '今晩',
      romaji: 'konban',
      meaning: { en: 'tonight, this evening', vi: 'tối nay' },
      ruby: [
        { base: '今', reading: 'こん' },
        { base: '晩', reading: 'ばん' }
      ]
    },
    {
      kana: 'やすみ',
      kanji: '休み',
      romaji: 'yasumi',
      meaning: { en: 'rest, day off, vacation', vi: 'nghỉ, nghỉ phép, ngày nghỉ' },
      ruby: [{ base: '休', reading: 'やす' }]
    },
    {
      kana: 'ひるやすみ',
      kanji: '昼休み',
      romaji: 'hiruyasumi',
      meaning: { en: 'lunch break', vi: 'nghỉ trưa' },
      ruby: [
        { base: '昼', reading: 'ひる' },
        { base: '休', reading: 'やす' }
      ]
    },
    {
      kana: 'しけん',
      kanji: '試験',
      romaji: 'shiken',
      meaning: { en: 'exam, test', vi: 'thi, kỳ thi, kiểm tra' },
      ruby: [
        { base: '試', reading: 'し' },
        { base: '験', reading: 'けん' }
      ]
    },
    {
      kana: 'かいぎ',
      kanji: '会議',
      romaji: 'kaigi',
      meaning: {
        en: 'meeting (会議をします: to hold a meeting)',
        vi: 'cuộc họp, hội nghị (会議をします: tổ chức cuộc họp)'
      },
      ruby: [
        { base: '会', reading: 'かい' },
        { base: '議', reading: 'ぎ' }
      ]
    },
    {
      kana: 'えいが',
      kanji: '映画',
      romaji: 'eiga',
      meaning: { en: 'movie, film', vi: 'phim, điện ảnh' },
      ruby: [
        { base: '映', reading: 'えい' },
        { base: '画', reading: 'が' }
      ]
    },
    {
      kana: 'まいあさ',
      kanji: '毎朝',
      romaji: 'maiasa',
      meaning: { en: 'every morning', vi: 'hàng sáng, mỗi sáng' },
      ruby: [
        { base: '毎', reading: 'まい' },
        { base: '朝', reading: 'あさ' }
      ]
    },
    {
      kana: 'まいばん',
      kanji: '毎晩',
      romaji: 'maiban',
      meaning: { en: 'every evening', vi: 'hàng tối, mỗi tối' },
      ruby: [
        { base: '毎', reading: 'まい' },
        { base: '晩', reading: 'ばん' }
      ]
    },
    {
      kana: 'まいにち',
      kanji: '毎日',
      romaji: 'mainichi',
      meaning: { en: 'every day', vi: 'hàng ngày, mỗi ngày' },
      ruby: [
        { base: '毎', reading: 'まい' },
        { base: '日', reading: 'にち' }
      ]
    },
    {
      kana: 'げつようび',
      kanji: '月曜日',
      romaji: 'getsuyōbi',
      meaning: { en: 'Monday', vi: 'thứ hai' },
      ruby: [
        { base: '月', reading: 'げつ' },
        { base: '曜', reading: 'よう' },
        { base: '日', reading: 'び' }
      ]
    },
    {
      kana: 'かようび',
      kanji: '火曜日',
      romaji: 'kayōbi',
      meaning: { en: 'Tuesday', vi: 'thứ ba' },
      ruby: [
        { base: '火', reading: 'か' },
        { base: '曜', reading: 'よう' },
        { base: '日', reading: 'び' }
      ]
    },
    {
      kana: 'すいようび',
      kanji: '水曜日',
      romaji: 'suiyōbi',
      meaning: { en: 'Wednesday', vi: 'thứ tư' },
      ruby: [
        { base: '水', reading: 'すい' },
        { base: '曜', reading: 'よう' },
        { base: '日', reading: 'び' }
      ]
    },
    {
      kana: 'もくようび',
      kanji: '木曜日',
      romaji: 'mokuyōbi',
      meaning: { en: 'Thursday', vi: 'thứ năm' },
      ruby: [
        { base: '木', reading: 'もく' },
        { base: '曜', reading: 'よう' },
        { base: '日', reading: 'び' }
      ]
    },
    {
      kana: 'きんようび',
      kanji: '金曜日',
      romaji: "kin'yōbi",
      meaning: { en: 'Friday', vi: 'thứ sáu' },
      ruby: [
        { base: '金', reading: 'きん' },
        { base: '曜', reading: 'よう' },
        { base: '日', reading: 'び' }
      ]
    },
    {
      kana: 'どようび',
      kanji: '土曜日',
      romaji: 'doyōbi',
      meaning: { en: 'Saturday', vi: 'thứ bảy' },
      ruby: [
        { base: '土', reading: 'ど' },
        { base: '曜', reading: 'よう' },
        { base: '日', reading: 'び' }
      ]
    },
    {
      kana: 'にちようび',
      kanji: '日曜日',
      romaji: 'nichiyōbi',
      meaning: { en: 'Sunday', vi: 'chủ nhật' },
      ruby: [
        { base: '日', reading: 'にち' },
        { base: '曜', reading: 'よう' },
        { base: '日', reading: 'び' }
      ]
    },
    {
      kana: 'なんようび',
      kanji: '何曜日',
      romaji: "nan'yōbi",
      meaning: { en: 'what day of the week', vi: 'thứ mấy' },
      ruby: [
        { base: '何', reading: 'なん' },
        { base: '曜', reading: 'よう' },
        { base: '日', reading: 'び' }
      ]
    },
    {
      kana: '〜から',
      romaji: '~kara',
      speech: 'から',
      meaning: { en: 'from ~', vi: '~ từ' }
    },
    {
      kana: '〜まで',
      romaji: '~made',
      speech: 'まで',
      meaning: { en: 'until ~, to ~', vi: '~ đến' }
    },
    {
      kana: '〜と〜',
      romaji: '~ to ~',
      meaning: { en: '~ and ~ (links nouns)', vi: '~ và ~ (nối danh từ)' }
    }
  ],
  phrases: [
    {
      kana: 'たいへんですね。',
      kanji: '大変ですね。',
      romaji: 'taihen desu ne.',
      meaning: {
        en: "That's tough, isn't it? (sympathy)",
        vi: 'Vất vả quá nhỉ. (thông cảm)'
      },
      ruby: [
        { base: '大', reading: 'たい' },
        { base: '変', reading: 'へん' }
      ]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson4-phone',
      title: { en: 'Asking for a phone number', vi: 'Hỏi số điện thoại' },
      speakers: [
        { id: 'alex', name: 'アレックス' },
        { id: 'yamada', name: 'やまだ' }
      ],
      lines: [
        {
          speakerId: 'alex',
          jp: 'すみません。「あすか」の 電話番号は 何番ですか。',
          romaji: 'Sumimasen. "Asuka" no denwa bangō wa nanban desu ka.',
          meaning: {
            en: 'Excuse me. What is the phone number for "Asuka"?',
            vi: 'Xin lỗi. Số điện thoại của "Asuka" là số mấy?'
          },
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '番', reading: 'ばん' },
            { base: '号', reading: 'ごう' },
            { base: '何', reading: 'なん' },
            { base: '番', reading: 'ばん' }
          ]
        },
        {
          speakerId: 'yamada',
          jp: '「あすか」ですか。5275 の 2725 です。',
          romaji: '"Asuka" desu ka. Gofutahyaku nijūnana no nihyakunijūgo desu.',
          meaning: {
            en: '"Asuka"? It is 5275-2725.',
            vi: '"Asuka" à. Số 5275-2725.'
          }
        },
        {
          speakerId: 'alex',
          jp: 'どうも ありがとう ございます。',
          romaji: 'Dōmo arigatō gozaimasu.',
          meaning: { en: 'Thank you very much.', vi: 'Cảm ơn nhiều.' }
        }
      ]
    },
    {
      id: 'conv-lesson4-shop-hours',
      title: { en: 'Calling the shop', vi: 'Gọi điện cho cửa hàng' },
      speakers: [
        { id: 'clerk', name: '店員' },
        { id: 'alex', name: 'アレックス' }
      ],
      lines: [
        {
          speakerId: 'clerk',
          jp: 'はい、「あすか」です。',
          romaji: 'Hai, "Asuka" desu.',
          meaning: { en: 'Hello, this is "Asuka".', vi: 'Dạ, đây là "Asuka".' }
        },
        {
          speakerId: 'alex',
          jp: 'すみません。そちらは 何時までですか。',
          romaji: 'Sumimasen. Sochira wa nanji made desu ka.',
          meaning: {
            en: 'Excuse me. Until what time are you open?',
            vi: 'Xin lỗi. Bên anh/chị đóng cửa lúc mấy giờ?'
          },
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          speakerId: 'clerk',
          jp: '10時までです。',
          romaji: 'Jū-ji made desu.',
          meaning: { en: 'Until 10.', vi: 'Đến 10 giờ.' },
          ruby: [{ base: '時', reading: 'じ' }]
        },
        {
          speakerId: 'alex',
          jp: '休みは 何曜日ですか。',
          romaji: 'Yasumi wa nan-yōbi desu ka.',
          meaning: { en: 'What day is your day off?', vi: 'Ngày nghỉ là thứ mấy?' },
          ruby: [
            { base: '休', reading: 'やす' },
            { base: '何', reading: 'なん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          speakerId: 'clerk',
          jp: '日曜日です。',
          romaji: 'Nichiyōbi desu.',
          meaning: { en: 'Sunday.', vi: 'Chủ nhật.' },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          speakerId: 'alex',
          jp: 'そうですか。どうも。',
          romaji: 'Sō desu ka. Dōmo.',
          meaning: { en: 'I see. Thanks.', vi: 'Thế à. Cảm ơn.' }
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N 時 N 分 です',
      patternRuby: [
        { base: '時', reading: 'じ' },
        { base: '分', reading: 'ふん' }
      ],
      highlights: ['時', '分', 'です', '何'],
      title: { en: 'Telling the time', vi: 'Nói giờ' },
      explanation: {
        en: 'Add 時 (hours) and 分 (minutes) after numbers. 分 is ~fun after 2, 5, 7, 9 and ~pun after 1, 3, 4, 6, 8, 10 (e.g. 10分 = juppun). Ask the time with 今 何時ですか; ask minutes with 何分.',
        vi: 'Thêm 時 (giờ) và 分 (phút) sau số. 分 đọc ~fun sau 2, 5, 7, 9 và ~pun sau 1, 3, 4, 6, 8, 10 (vd. 10分 = juppun). Hỏi giờ với 今 何時ですか; hỏi phút với 何分.'
      },
      explanationRuby: [
        { base: '時', reading: 'じ' },
        { base: '分', reading: 'ふん' },
        { base: '分', reading: 'ふん' },
        { base: '分', reading: 'ぷん' },
        { base: '今', reading: 'いま' },
        { base: '何', reading: 'なん' },
        { base: '時', reading: 'じ' },
        { base: '何', reading: 'なん' },
        { base: '分', reading: 'ふん' }
      ],
      examples: [
        {
          jp: '今 何時ですか。',
          romaji: 'Ima nan-ji desu ka.',
          meaning: { en: 'What time is it now?', vi: 'Bây giờ là mấy giờ?' },
          dialogueGroup: 'time-now',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '何', reading: 'なん' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          jp: '7時10分です。',
          romaji: 'Shichi-ji juppun desu.',
          meaning: { en: "It's 7:10.", vi: '7 giờ 10 phút.' },
          dialogueGroup: 'time-now',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '分', reading: 'ぷん' }
          ]
        }
      ]
    },
    {
      pattern: 'V ます',
      highlights: ['ます', 'ません', 'ました', 'ませんでした'],
      title: { en: 'Verb ます forms', vi: 'Động từ thể ます' },
      explanation: {
        en: 'The ます form is the polite predicate: ます (present/future), ません (negative), ました (past), ませんでした (past negative). It states habits, general truths, or future actions.',
        vi: 'Thể ます là vị ngữ lịch sự: ます (hiện tại/tương lai), ません (phủ định), ました (quá khứ), ませんでした (quá khứ phủ định). Dùng cho thói quen, sự thật chung hoặc hành động tương lai.'
      },
      examples: [
        {
          jp: '私は 毎日 勉強します。',
          romaji: 'Watashi wa mainichi benkyō shimasu.',
          meaning: { en: 'I study every day.', vi: 'Tôi học hàng ngày.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          jp: '毎朝 6時に 起きます。',
          romaji: 'Maiasa rokuji ni okimasu.',
          meaning: { en: 'I get up at 6 every morning.', vi: 'Mỗi sáng tôi dậy lúc 6 giờ.' },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '時', reading: 'じ' },
            { base: '起', reading: 'お' }
          ]
        },
        {
          jp: 'あした 6時に 起きます。',
          romaji: 'Ashita rokuji ni okimasu.',
          meaning: {
            en: 'Tomorrow I will get up at 6.',
            vi: 'Ngày mai tôi (sẽ) dậy lúc 6 giờ.'
          },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '起', reading: 'お' }
          ]
        },
        {
          jp: 'けさ 6時に 起きました。',
          romaji: 'Kesa rokuji ni okimashita.',
          meaning: {
            en: 'This morning I got up at 6.',
            vi: 'Sáng nay tôi (đã) dậy lúc 6 giờ.'
          },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '起', reading: 'お' }
          ]
        }
      ]
    },
    {
      pattern: 'V ますか',
      highlights: ['ます', 'か', '何', 'に'],
      title: { en: 'Verb questions', vi: 'Câu hỏi với động từ' },
      explanation: {
        en: 'Add か to make a yes/no question; word order stays the same. Put the question word where the answer goes. Repeat the verb in the answer - do not use そうです or ちがいます alone for verb questions.',
        vi: 'Thêm か để hỏi có/không; trật tự câu giữ nguyên. Đặt từ để hỏi vào vị trí phần cần hỏi. Trả lời lặp lại động từ - không dùng một mình そうです hay ちがいます cho câu hỏi động từ.'
      },
      examples: [
        {
          jp: 'きのう 勉強しましたか。',
          romaji: 'Kinō benkyō shimashita ka.',
          meaning: { en: 'Did you study yesterday?', vi: 'Hôm qua anh/chị có học không?' },
          ruby: [
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          jp: '毎朝 何時に 起きますか。',
          romaji: 'Maiasa nan-ji ni okimasu ka.',
          meaning: {
            en: 'What time do you get up every morning?',
            vi: 'Mỗi sáng anh/chị dậy lúc mấy giờ?'
          },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '何', reading: 'なん' },
            { base: '時', reading: 'じ' },
            { base: '起', reading: 'お' }
          ]
        }
      ],
      answers: {
        highlights: ['ました', 'ませんでした', 'に', 'ます'],
        explanation: {
          en: 'Answer はい/いいえ plus the verb form, or give the time with ～に ～ます.',
          vi: 'Trả lời はい/いいえ kèm động từ, hoặc nêu giờ với ～に ～ます.'
        },
        examples: [
          {
            jp: 'はい、勉強しました。',
            romaji: 'Hai, benkyō shimashita.',
            meaning: { en: 'Yes, I studied.', vi: 'Vâng, hôm qua tôi có học.' },
            ruby: [
              { base: '勉', reading: 'べん' },
              { base: '強', reading: 'きょう' }
            ]
          },
          {
            jp: 'いいえ、勉強しませんでした。',
            romaji: 'Iie, benkyō shimasen deshita.',
            meaning: { en: "No, I didn't study.", vi: 'Không, hôm qua tôi không học.' },
            ruby: [
              { base: '勉', reading: 'べん' },
              { base: '強', reading: 'きょう' }
            ]
          },
          {
            jp: '6時に 起きます。',
            romaji: 'Rokuji ni okimasu.',
            meaning: { en: 'I get up at 6.', vi: 'Tôi dậy lúc 6 giờ.' },
            ruby: [
              { base: '時', reading: 'じ' },
              { base: '起', reading: 'お' }
            ]
          }
        ]
      }
    },
    {
      pattern: 'N (time) に V',
      highlights: ['に'],
      title: { en: 'Time + に + verb', vi: 'Thời gian + に + động từ' },
      explanation: {
        en: 'Put に after a time noun for when an action happens (6時半に 起きます). Do NOT use に after きょう, あした, きのう, けさ, こんばん, いま, 毎朝, etc. に is optional after days of the week and あさ/ひる/ばん.',
        vi: 'Thêm に sau danh từ chỉ thời điểm (6時半に 起きます). KHÔNG dùng に sau きょう, あした, きのう, けさ, こんばん, いま, 毎朝, v.v. に có thể lược sau thứ trong tuần và あさ/ひる/ばん.'
      },
      explanationRuby: [
        { base: '時', reading: 'じ' },
        { base: '半', reading: 'はん' },
        { base: '起', reading: 'お' },
        { base: '毎', reading: 'まい' },
        { base: '朝', reading: 'あさ' }
      ],
      examples: [
        {
          jp: '6時半に 起きます。',
          romaji: 'Roku-ji han ni okimasu.',
          meaning: { en: 'I get up at 6:30.', vi: 'Tôi dậy lúc 6 giờ rưỡi.' },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '半', reading: 'はん' },
            { base: '起', reading: 'お' }
          ]
        },
        {
          jp: '日曜日に 休みます。',
          romaji: 'Nichiyōbi ni yasumimasu.',
          meaning: { en: 'I rest on Sundays.', vi: 'Chủ nhật tôi nghỉ.' },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '休', reading: 'やす' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 から N2 まで',
      highlights: ['から', 'まで'],
      title: { en: 'From ~ to ~ (から / まで)', vi: 'Từ ~ đến ~ (から / まで)' },
      explanation: {
        en: 'から marks the start and まで the end of a time or place range. They can be used together or alone. With nouns and です, state opening hours or a time span.',
        vi: 'から đánh dấu điểm bắt đầu, まで điểm kết thúc (thời gian hoặc nơi chốn). Có thể dùng riêng hoặc kết hợp. Với danh từ + です, nêu giờ mở cửa hoặc khoảng thời gian.'
      },
      examples: [
        {
          jp: '9時から 5時まで 勉強します。',
          romaji: 'Ku-ji kara go-ji made benkyō shimasu.',
          meaning: { en: 'I study from 9 to 5.', vi: 'Tôi học từ 9 giờ đến 5 giờ.' },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '時', reading: 'じ' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          jp: '9時から 働きます。',
          romaji: 'Ku-ji kara hatarakimasu.',
          meaning: { en: 'I work starting at 9.', vi: 'Tôi làm việc từ 9 giờ.' },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '働', reading: 'はたら' }
          ]
        },
        {
          jp: '銀行は 9時から 3時までです。',
          romaji: 'Ginkō wa ku-ji kara san-ji made desu.',
          meaning: {
            en: 'The bank is open from 9 to 3.',
            vi: 'Ngân hàng mở cửa từ 9 giờ đến 3 giờ.'
          },
          ruby: [
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '時', reading: 'じ' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          jp: '昼休みは 12時からです。',
          romaji: 'Hiruyasumi wa jūni-ji kara desu.',
          meaning: {
            en: 'The lunch break starts at 12.',
            vi: 'Giờ nghỉ trưa bắt đầu từ 12 giờ.'
          },
          ruby: [
            { base: '昼', reading: 'ひる' },
            { base: '休', reading: 'やす' },
            { base: '時', reading: 'じ' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 と N2',
      highlights: ['と'],
      title: { en: 'と (and, linking nouns)', vi: 'と (và, nối danh từ)' },
      explanation: {
        en: 'と connects two nouns of equal status, like "and" in English.',
        vi: 'と nối hai danh từ ngang hàng, tương đương "và" trong tiếng Việt.'
      },
      examples: [
        {
          jp: '銀行の 休みは 土曜日と 日曜日です。',
          romaji: 'Ginkō no yasumi wa doyōbi to nichiyōbi desu.',
          meaning: {
            en: 'The bank is closed on Saturday and Sunday.',
            vi: 'Ngân hàng đóng cửa vào thứ bảy và chủ nhật.'
          },
          ruby: [
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '休', reading: 'やす' },
            { base: '土', reading: 'ど' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        }
      ]
    },
    {
      pattern: '～ ね',
      highlights: ['ね'],
      title: { en: "Sentence-ending ね (isn't it?)", vi: 'ね (nhỉ / đúng không ạ)' },
      explanation: {
        en: 'ね at the end seeks agreement, sympathy, or confirms what was just said.',
        vi: 'Thêm ね cuối câu để xin đồng ý, thể hiện đồng cảm, hoặc xác nhận lại — giống "nhỉ", "đúng không" trong tiếng Việt.'
      },
      examples: [
        {
          jp: '毎日 10時まで 勉強します。',
          romaji: 'Mainichi jū-ji made benkyō shimasu.',
          meaning: { en: 'I study until 10 every day.', vi: 'Hàng ngày tôi học đến 10 giờ.' },
          dialogueGroup: 'sympathy',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '時', reading: 'じ' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          jp: '大変ですね。',
          romaji: 'Taihen desu ne.',
          meaning: { en: "That's tough, isn't it?", vi: 'Vất vả quá nhỉ.' },
          dialogueGroup: 'sympathy',
          ruby: [
            { base: '大', reading: 'たい' },
            { base: '変', reading: 'へん' }
          ]
        },
        {
          jp: '山田さんの 電話番号は 871 の 6813 です。',
          romaji: 'Yamada-san no denwa bangō wa hachihyaku nanajū no roppesen jūsan desu.',
          meaning: {
            en: "Mr. Yamada's phone number is 871-6813.",
            vi: 'Số điện thoại của anh Yamada là 871-6813.'
          },
          dialogueGroup: 'confirm',
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '田', reading: 'だ' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '番', reading: 'ばん' },
            { base: '号', reading: 'ごう' }
          ]
        },
        {
          jp: '871 の 6813 ですね。',
          romaji: 'Hachihyaku nanajū no roppesen jūsan desu ne.',
          meaning: { en: '871-6813, right?', vi: '871-6813, đúng không ạ.' },
          dialogueGroup: 'confirm'
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-1',
      title: { en: 'Shop hours', vi: 'Giờ mở cửa' },
      lines: [
        {
          jp: '「あすか」は 9時から 10時までです。',
          romaji: '"Asuka" wa ku-ji kara jū-ji made desu.',
          meaning: {
            en: '"Asuka" is open from 9 to 10.',
            vi: 'Cửa hàng "Asuka" mở cửa từ 9 giờ đến 10 giờ.'
          },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          jp: '休みは 日曜日です。',
          romaji: 'Yasumi wa nichiyōbi desu.',
          meaning: { en: 'The day off is Sunday.', vi: 'Ngày nghỉ là chủ nhật.' },
          ruby: [
            { base: '休', reading: 'やす' },
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          jp: '土曜日は 11時までです。',
          romaji: 'Doyōbi wa jūichi-ji made desu.',
          meaning: {
            en: 'On Saturdays it is open until 11.',
            vi: 'Thứ bảy mở cửa đến 11 giờ.'
          },
          ruby: [
            { base: '土', reading: 'ど' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          jp: '電話番号は 5275 の 2725 です。',
          romaji: 'Denwa bangō wa go sen nihyaku nanajū go no nihyaku nijūgo desu.',
          meaning: {
            en: 'The phone number is 5275-2725.',
            vi: 'Số điện thoại là 5275-2725.'
          },
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '番', reading: 'ばん' },
            { base: '号', reading: 'ごう' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'Until what time is the shop open on weekdays?',
            vi: 'Ngày thường cửa hàng mở đến mấy giờ?'
          },
          choices: [
            { id: 'a', label: { en: "10 o'clock", vi: '10 giờ' } },
            { id: 'b', label: { en: "9 o'clock", vi: '9 giờ' } },
            { id: 'c', label: { en: "11 o'clock", vi: '11 giờ' } },
            { id: 'd', label: { en: "8 o'clock", vi: '8 giờ' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What day is the shop closed?', vi: 'Cửa hàng nghỉ ngày nào?' },
          choices: [
            { id: 'a', label: { en: 'Sunday', vi: 'Chủ nhật' } },
            { id: 'b', label: { en: 'Saturday', vi: 'Thứ bảy' } },
            { id: 'c', label: { en: 'Monday', vi: 'Thứ hai' } },
            { id: 'd', label: { en: 'Wednesday', vi: 'Thứ tư' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-2',
      title: { en: 'Daily schedule', vi: 'Sinh hoạt hàng ngày' },
      lines: [
        {
          jp: '私は 毎朝 6時半に 起きます。',
          romaji: 'Watashi wa maiasa roku-ji han ni okimasu.',
          meaning: {
            en: 'I get up at 6:30 every morning.',
            vi: 'Mỗi sáng tôi dậy lúc 6 giờ rưỡi.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '時', reading: 'じ' },
            { base: '半', reading: 'はん' },
            { base: '起', reading: 'お' }
          ]
        },
        {
          jp: '7時から 8時まで 勉強します。',
          romaji: 'Shichi-ji kara hachi-ji made benkyō shimasu.',
          meaning: { en: 'I study from 7 to 8.', vi: 'Tôi học từ 7 giờ đến 8 giờ.' },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '時', reading: 'じ' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          jp: '9時から 5時まで 働きます。',
          romaji: 'Ku-ji kara go-ji made hatarakimasu.',
          meaning: { en: 'I work from 9 to 5.', vi: 'Tôi làm việc từ 9 giờ đến 5 giờ.' },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '時', reading: 'じ' },
            { base: '働', reading: 'はたら' }
          ]
        },
        {
          jp: '昼休みは 12時から 1時までです。',
          romaji: 'Hiruyasumi wa jūni-ji kara ichi-ji made desu.',
          meaning: {
            en: 'Lunch break is from 12 to 1.',
            vi: 'Nghỉ trưa từ 12 giờ đến 1 giờ.'
          },
          ruby: [
            { base: '昼', reading: 'ひる' },
            { base: '休', reading: 'やす' },
            { base: '時', reading: 'じ' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          jp: '毎晩 10時に 寝ます。',
          romaji: 'Maiban jū-ji ni nemasu.',
          meaning: {
            en: 'I go to bed at 10 every evening.',
            vi: 'Mỗi tối tôi đi ngủ lúc 10 giờ.'
          },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '晩', reading: 'ばん' },
            { base: '時', reading: 'じ' },
            { base: '寝', reading: 'ね' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What time does the speaker get up?',
            vi: 'Người nói dậy lúc mấy giờ?'
          },
          choices: [
            { id: 'a', label: { en: '6:30', vi: '6 giờ rưỡi' } },
            { id: 'b', label: { en: '7:00', vi: '7 giờ' } },
            { id: 'c', label: { en: '6:00', vi: '6 giờ' } },
            { id: 'd', label: { en: '8:00', vi: '8 giờ' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'When does the speaker go to bed?',
            vi: 'Người nói đi ngủ lúc mấy giờ?'
          },
          choices: [
            { id: 'a', label: { en: '10 p.m.', vi: '10 giờ tối' } },
            { id: 'b', label: { en: '9 p.m.', vi: '9 giờ tối' } },
            { id: 'c', label: { en: '11 p.m.', vi: '11 giờ tối' } },
            { id: 'd', label: { en: '8 p.m.', vi: '8 giờ tối' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-3',
      title: { en: 'At the library', vi: 'Ở thư viện' },
      lines: [
        {
          jp: '今日 私は 図書館で 勉強します。',
          romaji: 'Kyō watashi wa toshokan de benkyō shimasu.',
          meaning: {
            en: 'Today I study at the library.',
            vi: 'Hôm nay tôi học ở thư viện.'
          },
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '私', reading: 'わたし' },
            { base: '図', reading: 'と' },
            { base: '書', reading: 'しょ' },
            { base: '館', reading: 'かん' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          jp: '図書館は 9時から 6時までです。',
          romaji: 'Toshokan wa ku-ji kara roku-ji made desu.',
          meaning: {
            en: 'The library is open from 9 to 6.',
            vi: 'Thư viện mở cửa từ 9 giờ đến 6 giờ.'
          },
          ruby: [
            { base: '図', reading: 'と' },
            { base: '書', reading: 'しょ' },
            { base: '館', reading: 'かん' },
            { base: '時', reading: 'じ' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          jp: '今 何時ですか。3時10分です。',
          romaji: 'Ima nan-ji desu ka. San-ji juppun desu.',
          meaning: {
            en: 'What time is it now? It is 3:10.',
            vi: 'Bây giờ mấy giờ? 3 giờ 10 phút.'
          },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '何', reading: 'なん' },
            { base: '時', reading: 'じ' },
            { base: '時', reading: 'じ' },
            { base: '分', reading: 'ぷん' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'Where does the speaker study today?',
            vi: 'Hôm nay người nói học ở đâu?'
          },
          choices: [
            { id: 'a', label: { en: 'The library', vi: 'Thư viện' } },
            { id: 'b', label: { en: 'The bank', vi: 'Ngân hàng' } },
            { id: 'c', label: { en: 'The post office', vi: 'Bưu điện' } },
            { id: 'd', label: { en: 'The art museum', vi: 'Bảo tàng mỹ thuật' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What time is it now?', vi: 'Bây giờ mấy giờ?' },
          choices: [
            { id: 'a', label: { en: '3:10', vi: '3 giờ 10 phút' } },
            { id: 'b', label: { en: '9:00', vi: '9 giờ' } },
            { id: 'c', label: { en: '6:00', vi: '6 giờ' } },
            { id: 'd', label: { en: '3:00', vi: '3 giờ' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Telephone & mail', vi: 'Điện thoại & thư tín' },
      items: [
        {
          kana: 'でんわ',
          kanji: '電話',
          romaji: 'denwa',
          meaning: { en: 'telephone', vi: 'điện thoại' },
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        },
        {
          kana: 'てがみ',
          kanji: '手紙',
          romaji: 'tegami',
          meaning: { en: 'letter', vi: 'thư tín' },
          ruby: [
            { base: '手', reading: 'て' },
            { base: '紙', reading: 'がみ' }
          ]
        },
        {
          kana: 'ばんごう',
          kanji: '番号',
          romaji: 'bangō',
          meaning: { en: 'number (sequence)', vi: 'số (thứ tự)' },
          ruby: [
            { base: '番', reading: 'ばん' },
            { base: '号', reading: 'ごう' }
          ]
        },
        {
          kana: 'なんばん',
          kanji: '何番',
          romaji: 'nanban',
          meaning: { en: 'what number', vi: 'số mấy, số bao nhiêu' },
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '番', reading: 'ばん' }
          ]
        },
        {
          kana: 'テレホンカード',
          romaji: 'terehon kādo',
          meaning: { en: 'telephone card', vi: 'thẻ điện thoại' }
        }
      ]
    },
    {
      kind: 'steps',
      title: { en: 'Using a public phone', vi: 'Gọi điện thoại công cộng' },
      steps: [
        {
          text: { en: 'Pick up the receiver.', vi: 'Nhấc ống nghe.' }
        },
        {
          text: {
            en: 'Insert coins or a telephone card.',
            vi: 'Cho tiền xu hoặc thẻ điện thoại vào.'
          }
        },
        {
          text: { en: 'Dial the number.', vi: 'Ấn số.' }
        },
        {
          text: { en: 'Hang up the receiver.', vi: 'Gác ống nghe.' }
        },
        {
          text: {
            en: 'Take back any change or your telephone card.',
            vi: 'Lấy lại tiền thừa (nếu có) hoặc thẻ điện thoại.'
          }
        }
      ],
      notes: [
        {
          en: 'Public phones accept telephone cards or 10-yen and 100-yen coins. A 100-yen coin is not returned as change.',
          vi: 'Máy công cộng dùng thẻ hoặc xu 10 yên và 100 yên. Cho xu 100 yên thì máy không trả lại tiền thừa.'
        },
        {
          en: 'If the phone has a start button, press it after dialing.',
          vi: 'Nếu máy có nút bắt đầu, ấn nút đó sau khi quay số.'
        }
      ]
    },
    {
      kind: 'list',
      title: { en: 'Special phone numbers', vi: 'Số điện thoại đặc biệt' },
      rows: [
        {
          number: '110',
          jp: '警察署',
          ruby: [
            { base: '警', reading: 'けい' },
            { base: '察', reading: 'さつ' },
            { base: '署', reading: 'しょ' }
          ],
          meaning: { en: 'Police', vi: 'Cảnh sát' }
        },
        {
          number: '119',
          jp: '消防署',
          ruby: [
            { base: '消', reading: 'しょう' },
            { base: '防', reading: 'ぼう' },
            { base: '署', reading: 'しょ' }
          ],
          meaning: { en: 'Fire department', vi: 'Cứu hỏa' }
        },
        {
          number: '117',
          jp: '時報',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '報', reading: 'ほう' }
          ],
          meaning: { en: 'Time service', vi: 'Dịch vụ hỏi giờ' }
        },
        {
          number: '177',
          jp: '天気予報',
          ruby: [
            { base: '天', reading: 'てん' },
            { base: '気', reading: 'き' },
            { base: '予', reading: 'よ' },
            { base: '報', reading: 'ほう' }
          ],
          meaning: { en: 'Weather forecast service', vi: 'Dịch vụ dự báo thời tiết' }
        },
        {
          number: '104',
          jp: '電話番号案内',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '番', reading: 'ばん' },
            { base: '号', reading: 'ごう' },
            { base: '案', reading: 'あん' },
            { base: '内', reading: 'ない' }
          ],
          meaning: { en: 'Directory assistance', vi: 'Tra cứu số điện thoại' }
        }
      ]
    },
    {
      kind: 'address',
      title: { en: 'How to write an address', vi: 'Cách viết địa chỉ' },
      intro: {
        en: 'Japanese addresses run large to small. Prefecture, city, and ward are written consecutively without spaces; use line breaks between the postcode, street line, and building line.',
        vi: 'Địa chỉ viết từ rộng đến hẹp. Tỉnh, thành phố, quận viết liền không cách; xuống dòng giữa mã bưu điện, dòng phố, và dòng tòa nhà.'
      },
      sample: {
        jp: '〒658-0063\n兵庫県神戸市中央区三宮1-23\nコウベハイツ405号',
        ruby: [
          { base: '兵', reading: 'ひょう' },
          { base: '庫', reading: 'ご' },
          { base: '県', reading: 'けん' },
          { base: '神', reading: 'こう' },
          { base: '戸', reading: 'べ' },
          { base: '市', reading: 'し' },
          { base: '中', reading: 'ちゅう' },
          { base: '央', reading: 'おう' },
          { base: '区', reading: 'く' },
          { base: '三', reading: 'み' },
          { base: '宮', reading: 'や' },
          { base: '号', reading: 'ごう' }
        ]
      },
      parts: [
        { label: { en: 'Postcode', vi: 'Mã bưu điện' }, text: '〒658-0063' },
        {
          label: { en: 'Prefecture', vi: 'Tỉnh' },
          text: '兵庫県',
          ruby: [
            { base: '兵', reading: 'ひょう' },
            { base: '庫', reading: 'ご' },
            { base: '県', reading: 'けん' }
          ]
        },
        {
          label: { en: 'City', vi: 'Thành phố' },
          text: '神戸市',
          ruby: [
            { base: '神', reading: 'こう' },
            { base: '戸', reading: 'べ' },
            { base: '市', reading: 'し' }
          ]
        },
        {
          label: { en: 'Ward', vi: 'Quận' },
          text: '中央区',
          ruby: [
            { base: '中', reading: 'ちゅう' },
            { base: '央', reading: 'おう' },
            { base: '区', reading: 'く' }
          ]
        },
        {
          label: { en: 'District / block', vi: 'Khu phố' },
          text: '三宮1-23',
          ruby: [
            { base: '三', reading: 'み' },
            { base: '宮', reading: 'や' }
          ]
        },
        { label: { en: 'Building name', vi: 'Tên tòa nhà' }, text: 'コウベハイツ' },
        {
          label: { en: 'Room number', vi: 'Số phòng' },
          text: '405号',
          ruby: [{ base: '号', reading: 'ごう' }]
        }
      ]
    }
  ]
};
