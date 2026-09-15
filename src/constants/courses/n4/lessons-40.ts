import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 40 (embedded questions, てみます, ～さ, ～かな). */
export const n4Lesson40: Lesson = {
  id: 'lesson-40',
  number: 40,
  title: {
    en: 'Asking and trying',
    vi: 'Hỏi lồng và thử làm'
  },
  focus: {
    en: 'Embed questions with か/かどうか, try actions with てみます, nominalize adjectives with ～さ, and wonder softly with ～かな.',
    vi: 'Lồng câu hỏi với か/かどうか, thử làm với てみます, danh từ hóa tính từ với ～さ, và tự hỏi nhẹ với ～かな.'
  },
  vocab: [
    {
      kana: 'かぞえます',
      kanji: '数えます',
      romaji: 'kazoemasu',
      meaning: { en: 'to count', vi: 'đếm' },
      ruby: [{ base: '数', reading: 'かぞ' }]
    },
    {
      kana: 'はかります',
      kanji: '測ります、量ります',
      romaji: 'hakarimasu',
      meaning: { en: 'to measure, to weigh', vi: 'đo, cân' },
      ruby: [{ base: '測', reading: 'はか' }]
    },
    {
      kana: 'たしかめます',
      kanji: '確かめます',
      romaji: 'tashikamemasu',
      meaning: { en: 'to confirm, to verify', vi: 'xác nhận' },
      ruby: [{ base: '確', reading: 'たし' }]
    },
    {
      kana: 'あいます',
      kanji: '合います',
      romaji: 'aimasu',
      meaning: { en: 'to fit [サイズが～: size]', vi: 'vừa [cỡ ~]' },
      ruby: [{ base: '合', reading: 'あ' }]
    },
    {
      kana: 'しゅっぱつします',
      kanji: '出発します',
      romaji: 'shuppatsu shimasu',
      meaning: { en: 'to depart', vi: 'xuất phát' },
      ruby: [
        { base: '出', reading: 'しゅっ' },
        { base: '発', reading: 'ぱつ' }
      ]
    },
    {
      kana: 'とうちゃくします',
      kanji: '到着します',
      romaji: 'tōchaku shimasu',
      meaning: { en: 'to arrive', vi: 'đến' },
      ruby: [
        { base: '到', reading: 'とう' },
        { base: '着', reading: 'ちゃく' }
      ]
    },
    {
      kana: 'よいます',
      kanji: '酔います',
      romaji: 'yoimasu',
      meaning: { en: 'to get drunk', vi: 'say rượu' },
      ruby: [{ base: '酔', reading: 'よ' }]
    },
    {
      kana: 'うまくいきます',
      romaji: 'umaku ikimasu',
      meaning: { en: 'to go well, to succeed', vi: 'thuận lợi, suôn sẻ' }
    },
    {
      kana: 'でます',
      kanji: '出ます',
      romaji: 'demasu',
      meaning: { en: 'to appear [問題が～: a problem on a test]', vi: 'có [nội dung câu hỏi thi]' },
      ruby: [{ base: '出', reading: 'で' }]
    },
    {
      kana: 'そうだんします',
      kanji: '相談します',
      romaji: 'sōdan shimasu',
      meaning: { en: 'to consult, to discuss', vi: 'nói chuyện, thảo luận' },
      ruby: [{ base: '相', reading: 'そう' }]
    },
    {
      kana: 'ひつよう',
      kanji: '必要',
      romaji: 'hitsuyō',
      meaning: { en: 'necessary (na-adj)', vi: 'cần thiết (tính từ な)' },
      ruby: [
        { base: '必', reading: 'ひつ' },
        { base: '要', reading: 'よう' }
      ]
    },
    {
      kana: 'てんきよほう',
      kanji: '天気予報',
      romaji: 'tenki yohō',
      meaning: { en: 'weather forecast', vi: 'dự báo thời tiết' },
      ruby: [
        { base: '天', reading: 'てん' },
        { base: '気', reading: 'き' },
        { base: '予', reading: 'よ' },
        { base: '報', reading: 'ほう' }
      ]
    },
    {
      kana: 'ぼうねんかい',
      kanji: '忘年会',
      romaji: 'bōnenkai',
      meaning: { en: 'year-end party', vi: 'tiệc cuối năm, tiệc tất niên' },
      ruby: [
        { base: '忘', reading: 'ぼう' },
        { base: '年', reading: 'ねん' },
        { base: '会', reading: 'かい' }
      ]
    },
    {
      kana: 'しんねんかい',
      kanji: '新年会',
      romaji: 'shinnenkai',
      meaning: { en: 'New Year party', vi: 'tiệc đầu năm' },
      ruby: [
        { base: '新', reading: 'しん' },
        { base: '年', reading: 'ねん' },
        { base: '会', reading: 'かい' }
      ]
    },
    {
      kana: 'にじかい',
      kanji: '二次会',
      romaji: 'nijikai',
      meaning: { en: 'after-party (second round)', vi: 'tăng hai, hiệp hai' },
      ruby: [
        { base: '二', reading: 'に' },
        { base: '次', reading: 'じ' },
        { base: '会', reading: 'かい' }
      ]
    },
    {
      kana: 'はっぴょうかい',
      kanji: '発表会',
      romaji: 'happyōkai',
      meaning: { en: 'presentation event, recital', vi: 'buổi phát biểu' },
      ruby: [
        { base: '発', reading: 'はっ' },
        { base: '表', reading: 'ぴょう' },
        { base: '会', reading: 'かい' }
      ]
    },
    {
      kana: 'たいかい',
      kanji: '大会',
      romaji: 'taikai',
      meaning: { en: 'tournament, convention', vi: 'hội thi, cuộc thi' },
      ruby: [
        { base: '大', reading: 'たい' },
        { base: '会', reading: 'かい' }
      ]
    },
    {
      kana: 'マラソン',
      romaji: 'marason',
      meaning: { en: 'marathon', vi: 'ma-ra-tông' }
    },
    {
      kana: 'コンテスト',
      romaji: 'kontesuto',
      meaning: { en: 'contest', vi: 'cuộc thi' }
    },
    {
      kana: 'おもて',
      kanji: '表',
      romaji: 'omote',
      meaning: { en: 'front, right side', vi: 'mặt phải, mặt trước' },
      ruby: [{ base: '表', reading: 'おもて' }]
    },
    {
      kana: 'うら',
      kanji: '裏',
      romaji: 'ura',
      meaning: { en: 'back, reverse side', vi: 'mặt trái, mặt sau' },
      ruby: [{ base: '裏', reading: 'うら' }]
    },
    {
      kana: 'まちがい',
      romaji: 'machigai',
      meaning: { en: 'mistake, error', vi: 'sai sót' }
    },
    {
      kana: 'きず',
      kanji: '傷',
      romaji: 'kizu',
      meaning: { en: 'injury, scratch', vi: 'vết thương, vết trầy' },
      ruby: [{ base: '傷', reading: 'きず' }]
    },
    {
      kana: 'ズボン',
      romaji: 'zubon',
      meaning: { en: 'trousers, pants', vi: 'quần' }
    },
    {
      kana: 'おとしより',
      kanji: 'お年寄り',
      romaji: 'o-toshiyori',
      meaning: { en: 'elderly person (polite)', vi: 'người già, người cao tuổi' },
      ruby: [
        { base: '年', reading: 'とし' },
        { base: '寄', reading: 'より' }
      ]
    },
    {
      kana: 'ながさ',
      kanji: '長さ',
      romaji: 'nagasa',
      meaning: { en: 'length', vi: 'chiều dài' },
      ruby: [{ base: '長', reading: 'なが' }]
    },
    {
      kana: 'おもさ',
      kanji: '重さ',
      romaji: 'omosa',
      meaning: { en: 'weight', vi: 'trọng lượng' },
      ruby: [{ base: '重', reading: 'おも' }]
    },
    {
      kana: 'たかさ',
      kanji: '高さ',
      romaji: 'takasa',
      meaning: { en: 'height', vi: 'chiều cao' },
      ruby: [
        { base: '高', reading: 'たか' },
        { base: 'さ', reading: 'さ' }
      ]
    },
    {
      kana: 'おおきさ',
      kanji: '大きさ',
      romaji: 'ōkisa',
      meaning: { en: 'size', vi: 'kích thước, độ lớn' },
      ruby: [{ base: '大', reading: 'おお' }]
    },
    {
      kana: '～びん',
      kanji: '～便',
      romaji: '~bin',
      meaning: { en: 'flight (counter for services)', vi: 'chuyến ~' },
      ruby: [{ base: '便', reading: 'びん' }]
    },
    {
      kana: '～こ',
      kanji: '～個',
      romaji: '~ko',
      meaning: { en: 'counter for small items', vi: 'cái, chiếc (đếm vật nhỏ)' },
      ruby: [{ base: '個', reading: 'こ' }]
    },
    {
      kana: '～ほん',
      kanji: '～本',
      romaji: '~hon',
      meaning: {
        en: 'counter for long cylindrical objects',
        vi: 'cái, cây, chiếc (vật dạng dài)'
      },
      ruby: [{ base: '本', reading: 'ほん' }]
    },
    {
      kana: '～はい',
      kanji: '～杯',
      romaji: '~hai',
      meaning: { en: 'counter for cupfuls', vi: 'cốc, ly (đồ uống)' },
      ruby: [{ base: '杯', reading: 'はい' }]
    },
    {
      kana: '～センチ',
      romaji: '~senchi',
      meaning: { en: 'centimeter', vi: 'xăng-ti-mét' }
    },
    {
      kana: '～ミリ',
      romaji: '~miri',
      meaning: { en: 'millimeter', vi: 'mi-li-mét' }
    },
    {
      kana: '～グラム',
      romaji: '~guramu',
      meaning: { en: 'gram', vi: 'gam' }
    },
    {
      kana: '～いじょう',
      kanji: '～以上',
      romaji: '~ijō',
      meaning: { en: 'more than ~, above ~', vi: 'trên ~' },
      ruby: [
        { base: '以', reading: 'い' },
        { base: '上', reading: 'じょう' }
      ]
    },
    {
      kana: '～いか',
      kanji: '～以下',
      romaji: '~ika',
      meaning: { en: 'less than ~, below ~', vi: 'dưới ~' },
      ruby: [
        { base: '以', reading: 'い' },
        { base: '下', reading: 'か' }
      ]
    },
    {
      kana: 'どうでしょうか',
      romaji: 'Dō deshō ka',
      meaning: { en: 'How is it? (polite)', vi: 'Như thế nào ạ?' }
    },
    {
      kana: 'テスト',
      romaji: 'tesuto',
      meaning: { en: 'test, exam', vi: 'bài kiểm tra' }
    },
    {
      kana: 'せいせき',
      kanji: '成績',
      romaji: 'seiseki',
      meaning: { en: 'grades, results', vi: 'thành tích' },
      ruby: [
        { base: '成', reading: 'せい' },
        { base: '績', reading: 'せき' }
      ]
    },
    {
      kana: 'ところで',
      romaji: 'tokorode',
      meaning: { en: 'by the way', vi: 'nhân tiện' }
    },
    {
      kana: 'ようす',
      kanji: '様子',
      romaji: 'yōsu',
      meaning: { en: 'appearance, situation', vi: 'bộ dạng, tình hình' },
      ruby: [
        { base: '様', reading: 'よう' },
        { base: '子', reading: 'す' }
      ]
    }
  ],
  phrases: [
    {
      kana: 'JL107便が 何時に 着くか、調べて ください。',
      kanji: 'JL107便が 何時に 着くか、調べて ください。',
      romaji: 'JL107-bin ga nan-ji ni tsuku ka, shirabete kudasai.',
      meaning: {
        en: 'Please check what time JL107 arrives.',
        vi: 'Anh/chị hãy kiểm tra xem chuyến bay JL107 đến lúc mấy giờ.'
      },
      ruby: [
        { base: '便', reading: 'びん' },
        { base: '何', reading: 'なん' },
        { base: '時', reading: 'じ' },
        { base: '着', reading: 'つ' },
        { base: '調', reading: 'しら' }
      ]
    },
    {
      kana: 'この ズボン、試しに 履いて みて も いいですか。',
      kanji: 'この ズボン、試しに 履いて みて も いいですか。',
      romaji: 'Kono zubon, tameshi ni haite mite mo ii desu ka.',
      meaning: {
        en: 'May I try on these pants?',
        vi: 'Tôi mặc thử cái quần này được không?'
      },
      ruby: [
        { base: '試', reading: 'ため' },
        { base: '履', reading: 'は' }
      ]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson40-hans',
      title: { en: 'How is Hans at school?', vi: 'Hans ở trường thế nào?' },
      speakers: [
        { id: 'klara', name: 'クララ' },
        { id: 'ito', name: '伊藤先生' }
      ],
      lines: [
        {
          speakerId: 'klara',
          jp: '先生、ハンスは 学校で どう ですか。友だちが できるか 心配 なんです。',
          romaji: 'Sensei, Hansu wa gakkō de dō desu ka. Tomodachi ga dekiru ka shinpai nan desu.',
          meaning: {
            en: 'Teacher, how is Hans at school? I worry whether he can make friends.',
            vi: 'Thưa cô, Hans ở trường như thế nào ạ? Tôi lo không biết nó có kết bạn được không.'
          },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '学', reading: 'がっ' },
            { base: '校', reading: 'こう' },
            { base: '友', reading: 'とも' },
            { base: '心', reading: 'しん' },
            { base: '配', reading: 'ぱい' }
          ]
        },
        {
          speakerId: 'ito',
          jp: '心配 しないで ください。クラスで とても 人気 ですよ。',
          romaji: 'Shinpai shinaide kudasai. Kurasu de totemo ninki desu yo.',
          meaning: {
            en: 'Please do not worry. He is very popular in class.',
            vi: 'Đừng lo. Ở lớp em Hans rất được các bạn quý.'
          },
          ruby: [
            { base: '心', reading: 'しん' },
            { base: '配', reading: 'ぱい' },
            { base: '人', reading: 'にん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          speakerId: 'klara',
          jp: 'それなら 安心 です。勉強は どう ですか。',
          romaji: 'Sorenara anshin desu. Benkyō wa dō desu ka.',
          meaning: {
            en: 'That is a relief. How about his studies?',
            vi: 'Thế thì tôi yên tâm rồi. Việc học tập thì sao ạ?'
          },
          ruby: [
            { base: '安', reading: 'あん' },
            { base: '心', reading: 'しん' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          speakerId: 'ito',
          jp: '毎日 テストが あって、成績も いい です。算数が 特に 上手 ですね。',
          romaji: 'Mainichi tesuto ga atte, seiseki mo ii desu. Sansū ga tokuni jōzu desu ne.',
          meaning: {
            en: 'There are tests every day, and his grades are good. He is especially good at math.',
            vi: 'Hàng ngày có bài kiểm tra, kết quả của em cũng tốt. Đặc biệt giỏi toán.'
          },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '成', reading: 'せい' },
            { base: '績', reading: 'せき' },
            { base: '算', reading: 'さん' },
            { base: '数', reading: 'すう' },
            { base: '特', reading: 'とく' },
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' }
          ]
        },
        {
          speakerId: 'klara',
          jp: 'ありがとう ございます。ところで、運動会に 父も 来られますか。',
          romaji: 'Arigatō gozaimasu. Tokorode, undōkai ni chichi mo koraremasu ka.',
          meaning: {
            en: 'Thank you. By the way, can his father also come to sports day?',
            vi: 'Cảm ơn cô. Nhân tiện, bố em có đến được ngày hội thể thao không?'
          },
          ruby: [
            { base: '運', reading: 'うん' },
            { base: '動', reading: 'どう' },
            { base: '会', reading: 'かい' },
            { base: '父', reading: 'ちち' },
            { base: '来', reading: 'く' }
          ]
        },
        {
          speakerId: 'ito',
          jp: 'もちろん です。ぜひ 来て ハンスの 様子を 見て ください。',
          romaji: 'Mochiron desu. Zehi kite Hansu no yōsu o mite kudasai.',
          meaning: {
            en: 'Of course. Please do come and see how Hans is doing.',
            vi: 'Tất nhiên. Xin mời đến xem em Hans thế nào nhé.'
          },
          ruby: [
            { base: '来', reading: 'く' },
            { base: '様', reading: 'よう' },
            { base: '子', reading: 'こ' },
            { base: '見', reading: 'み' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'Question + か / かどうか',
      highlights: ['か'],
      title: { en: 'Embedded questions (か / かどうか)', vi: 'Câu hỏi lồng (か / かどうか)' },
      explanation: {
        en: 'Embed a question inside a sentence with plain form + か: JL107便が 何時に 着くか 調べて ください. For yes/no, use かどうか: 忘年会に 出られるかどうか 教えて ください.',
        vi: 'Lồng câu hỏi bằng thể thường + か: JL107便が 何時に 着くか 調べて ください. Có/không dùng かどうか: 忘年会に 出られるかどうか 教えて ください.'
      },
      explanationRuby: [
        { base: '便', reading: 'びん' },
        { base: '何', reading: 'なん' },
        { base: '時', reading: 'じ' },
        { base: '着', reading: 'つ' },
        { base: '調', reading: 'しら' },
        { base: '忘', reading: 'ぼう' },
        { base: '年', reading: 'ねん' },
        { base: '会', reading: 'かい' },
        { base: '出', reading: 'で' },
        { base: '教', reading: 'きょう' },
        { base: '便', reading: 'びん' },
        { base: '何', reading: 'なん' },
        { base: '時', reading: 'じ' },
        { base: '着', reading: 'つ' },
        { base: '調', reading: 'しら' },
        { base: '忘', reading: 'ぼう' },
        { base: '年', reading: 'ねん' },
        { base: '会', reading: 'かい' },
        { base: '出', reading: 'で' },
        { base: '教', reading: 'きょう' }
      ],
      examples: [
        {
          jp: 'JL107便が 何時に 着くか、調べて ください。',
          romaji: 'JL107-bin ga nan-ji ni tsuku ka, shirabete kudasai.',
          meaning: {
            en: 'Please check what time JL107 arrives.',
            vi: 'Hãy kiểm tra chuyến JL107 đến lúc mấy giờ.'
          },
          ruby: [
            { base: '便', reading: 'びん' },
            { base: '何', reading: 'なん' },
            { base: '時', reading: 'じ' },
            { base: '着', reading: 'つ' },
            { base: '調', reading: 'しら' }
          ]
        },
        {
          jp: '9号台風が 東京に 来るかどうか、まだ わかりません。',
          romaji: 'Kyū-gō taifū ga Tōkyō ni kuru ka dō ka, mada wakarimasen.',
          meaning: {
            en: 'We still do not know whether Typhoon No. 9 will come to Tokyo.',
            vi: 'Chưa biết bão số 9 có đến Tokyo hay không.'
          },
          ruby: [
            { base: '号', reading: 'ごう' },
            { base: '台', reading: 'たい' },
            { base: '風', reading: 'ふう' },
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '来', reading: 'く' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て みます',
      highlights: ['み'],
      title: { en: 'Try doing (てみます)', vi: 'Thử làm (てみます)' },
      explanation: {
        en: 'てみます means to try doing something to see what it is like: この ズボンを 履いて みます, 北海道へ 行って みたい です.',
        vi: 'てみます nghĩa thử làm xem sao: この ズボンを 履いて みます, 北海道へ 行って みたい です.'
      },
      explanationRuby: [
        { base: '履', reading: 'は' },
        { base: '北', reading: 'ほっ' },
        { base: '海', reading: 'かい' },
        { base: '道', reading: 'どう' },
        { base: '行', reading: 'い' },
        { base: '履', reading: 'は' },
        { base: '北', reading: 'ほっ' },
        { base: '海', reading: 'かい' },
        { base: '道', reading: 'どう' },
        { base: '行', reading: 'い' }
      ],
      examples: [
        {
          jp: 'もう 一度 試しに やって みます。',
          romaji: 'Mō ichido tameshi ni yatte mimasu.',
          meaning: {
            en: 'I will try doing it once more.',
            vi: 'Tôi sẽ thử nghiệm lại một lần nữa.'
          },
          ruby: [
            { base: '一', reading: 'いち' },
            { base: '度', reading: 'ど' },
            { base: '試', reading: 'ため' }
          ]
        },
        {
          jp: '長崎へ 行った ことが ありませんが、一度 行って みたい です。',
          romaji: 'Nagasaki e itta koto ga arimasen ga, ichido itte mitai desu.',
          meaning: {
            en: 'I have never been to Nagasaki, but I want to try going once.',
            vi: 'Tôi chưa đi Nagasaki, nhưng nhất định muốn đi thử một lần.'
          },
          ruby: [
            { base: '長', reading: 'なが' },
            { base: '崎', reading: 'さき' },
            { base: '行', reading: 'い' },
            { base: '一', reading: 'いち' },
            { base: '度', reading: 'ど' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'i-adj さ / na-adj さ',
      highlights: ['さ'],
      title: { en: 'Nominalizing with ～さ', vi: 'Danh từ hóa với ～さ' },
      explanation: {
        en: 'Replace い on i-adjectives (or add さ to na-adj stem) to make a noun of degree: 高い→高さ, 大きい→大きさ, 必要→必要さ.',
        vi: 'Bỏ い của tính từ い (hoặc thêm さ với な) để thành danh từ mức độ: 高い→高さ, 大きい→大きさ, 必要→必要さ.'
      },
      explanationRuby: [
        { base: '高', reading: 'たか' },
        { base: '高', reading: 'たか' },
        { base: '大', reading: 'おお' },
        { base: '大', reading: 'おお' },
        { base: '必', reading: 'ひつ' },
        { base: '要', reading: 'よう' },
        { base: '必', reading: 'ひつ' },
        { base: '要', reading: 'よう' },
        { base: '高', reading: 'たか' },
        { base: '高', reading: 'たか' },
        { base: '大', reading: 'おお' },
        { base: '大', reading: 'おお' },
        { base: '必', reading: 'ひつ' },
        { base: '要', reading: 'よう' },
        { base: '必', reading: 'ひつ' },
        { base: '要', reading: 'よう' }
      ],
      examples: [
        {
          jp: '山の 高さは どうやって 測るか、知っていますか。',
          romaji: 'Yama no takasa wa dō yatte hakaru ka, shitte imasu ka.',
          meaning: {
            en: 'Do you know how they measure the height of mountains?',
            vi: 'Anh/chị có biết người ta đo chiều cao núi như thế nào không?'
          },
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '高', reading: 'たか' },
            { base: '測', reading: 'はか' },
            { base: '知', reading: 'し' }
          ]
        },
        {
          jp: '新しい 橋の 長さは 3,911メートル です。',
          romaji: 'Atarashii hashi no nagasa wa san-sen-kyū-hyaku jū-ichi mētoru desu.',
          meaning: {
            en: 'The new bridge is 3,911 meters long.',
            vi: 'Chiều dài cây cầu mới là 3.911 mét.'
          },
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '橋', reading: 'はし' },
            { base: '長', reading: 'なが' }
          ]
        }
      ]
    },
    {
      pattern: '～かな',
      highlights: ['か', 'な'],
      title: { en: 'Soft wondering (～かな)', vi: 'Tự hỏi nhẹ (～かな)' },
      explanation: {
        en: 'かな at the end of a question expresses wondering aloud without demanding an answer: ハンスは 元気かな. Softer than a direct question.',
        vi: 'かな ở cuối câu hỏi thể hiện tự hỏi, không đòi câu trả lời: ハンスは 元気かな. Nhẹ nhàng hơn hỏi trực tiếp.'
      },
      explanationRuby: [
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' },
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' }
      ],
      examples: [
        {
          jp: 'ハンスは 学校で 元気かな。',
          romaji: 'Hansu wa gakkō de genki ka na.',
          meaning: {
            en: 'I wonder if Hans is doing well at school.',
            vi: 'Không biết Hans ở trường có khỏe không nhỉ.'
          },
          ruby: [
            { base: '学', reading: 'がっ' },
            { base: '校', reading: 'こう' },
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson40-measure',
      title: { en: 'Measuring the world', vi: 'Đo lường thế giới' },
      lines: [
        {
          jp: '子どもたちは 教室で 物の 長さや 重さを 測りました。',
          romaji: 'Kodomotachi wa kyōshitsu de mono no nagasa ya omosa o hakarimashita.',
          meaning: {
            en: 'The children measured the length and weight of things in the classroom.',
            vi: 'Các em trong lớp đo chiều dài và trọng lượng đồ vật.'
          },
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '教', reading: 'きょう' },
            { base: '室', reading: 'しつ' },
            { base: '物', reading: 'もの' },
            { base: '長', reading: 'なが' },
            { base: '重', reading: 'おも' },
            { base: '測', reading: 'はか' }
          ]
        },
        {
          jp: '先生は 「この 机の 高さは 何センチか」 と 聞きました。',
          romaji: 'Sensei wa 「Kono tsukue no takasa wa nan-senchi ka」 to kikimashita.',
          meaning: {
            en: 'The teacher asked, "What is the height of this desk in centimeters?"',
            vi: 'Cô hỏi: "Chiều cao cái bàn này là bao nhiêu xăng-ti-mét?"'
          },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '机', reading: 'つくえ' },
            { base: '高', reading: 'たか' },
            { base: '何', reading: 'なん' },
            { base: '聞', reading: 'き' }
          ]
        },
        {
          jp: 'みんな 答えを 確かめて から、発表 しました。',
          romaji: 'Minna kotae o tashikamete kara, happyō shimashita.',
          meaning: {
            en: 'Everyone confirmed their answers before presenting.',
            vi: 'Mọi người xác nhận đáp án rồi mới phát biểu.'
          },
          ruby: [
            { base: '答', reading: 'こた' },
            { base: '確', reading: 'たし' },
            { base: '発', reading: 'はっ' },
            { base: '表', reading: 'ぴょう' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What did the children measure?', vi: 'Các em đo gì?' },
          choices: [
            { id: 'a', label: { en: 'Length and weight', vi: 'Chiều dài và trọng lượng' } },
            { id: 'b', label: { en: 'Weather forecasts', vi: 'Dự báo thời tiết' } },
            { id: 'c', label: { en: 'Flight times only', vi: 'Chỉ giờ bay' } },
            { id: 'd', label: { en: 'Wine at a party', vi: 'Rượu ở tiệc' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What did they do before presenting?',
            vi: 'Trước khi phát biểu họ làm gì?'
          },
          choices: [
            { id: 'a', label: { en: 'Confirmed their answers', vi: 'Xác nhận đáp án' } },
            { id: 'b', label: { en: 'Got drunk', vi: 'Say rượu' } },
            { id: 'c', label: { en: 'Left the hospital', vi: 'Ra viện' } },
            { id: 'd', label: { en: 'Ran a marathon', vi: 'Chạy ma-ra-tông' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Units and shapes', vi: 'Đơn vị và hình' },
      layout: 'stacked-2col',
      rows: [
        {
          jp: 'mm',
          meaning: { en: 'millimeter', vi: 'mi-li-mét' }
        },
        {
          jp: 'cm',
          meaning: { en: 'centimeter', vi: 'xăng-ti-mét' }
        },
        {
          jp: 'm',
          meaning: { en: 'meter', vi: 'mét' }
        },
        {
          jp: 'g',
          meaning: { en: 'gram', vi: 'gam' }
        },
        {
          jp: 'kg',
          meaning: { en: 'kilogram', vi: 'ki-lô-gam' }
        },
        {
          jp: 't',
          meaning: { en: 'ton', vi: 'tấn' }
        },
        {
          jp: '円',
          ruby: [{ base: '円', reading: 'えん' }],
          meaning: { en: 'circle', vi: 'Hình tròn' }
        },
        {
          jp: '三角',
          ruby: [
            { base: '三', reading: 'さん' },
            { base: '角', reading: 'かく' }
          ],
          meaning: { en: 'triangle', vi: 'Hình tam giác' }
        },
        {
          jp: '四角',
          ruby: [
            { base: '四', reading: 'し' },
            { base: '角', reading: 'かく' }
          ],
          meaning: { en: 'square', vi: 'Hình tứ giác' }
        }
      ]
    }
  ]
};
