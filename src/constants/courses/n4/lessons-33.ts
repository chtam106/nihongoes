import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 33 (imperative/prohibitive, 〜という意味, 〜と言っていました, 〜と伝えて). */
export const n4Lesson33: Lesson = {
  id: 'lesson-33',
  number: 33,
  title: {
    en: 'Commands and signs',
    vi: 'Mệnh lệnh và biển báo'
  },
  focus: {
    en: 'Use imperative and prohibitive forms, explain meanings with 〜という意味です, relay messages with 〜と言っていました and 〜と伝えていただけませんか.',
    vi: 'Dùng thể mệnh lệnh và cấm chỉ, giải nghĩa với 〜という意味です, chuyển lời với 〜と言っていました và 〜と伝えていただけませんか.'
  },
  vocab: [
    {
      kana: 'にげます',
      kanji: '逃げます',
      romaji: 'nigemasu',
      meaning: { en: 'to run away, to escape', vi: 'trốn, chạy trốn' },
      ruby: [{ base: '逃', reading: 'に' }]
    },
    {
      kana: 'さわぎます',
      kanji: '騒ぎます',
      romaji: 'sawagimasu',
      meaning: { en: 'to make noise, to clamor', vi: 'làm ồn, ồn ào' },
      ruby: [{ base: '騒', reading: 'さわ' }]
    },
    {
      kana: 'あきらめます',
      romaji: 'akiramemasu',
      meaning: { en: 'to give up', vi: 'bỏ cuộc, từ bỏ' }
    },
    {
      kana: 'なげます',
      kanji: '投げます',
      romaji: 'nagemasu',
      meaning: { en: 'to throw', vi: 'ném' },
      ruby: [{ base: '投', reading: 'な' }]
    },
    {
      kana: 'まもります',
      kanji: '守ります',
      romaji: 'mamorimasu',
      meaning: {
        en: 'to keep (a promise), to observe (rules)',
        vi: 'giữ (lời hứa), tuân thủ (quy tắc)'
      },
      ruby: [{ base: '守', reading: 'まも' }]
    },
    {
      kana: 'はじまります',
      kanji: '始まります',
      romaji: 'hajimarimasu',
      meaning: { en: 'to begin [式が～: a ceremony]', vi: 'bắt đầu [式が～: lễ]' },
      ruby: [{ base: '始', reading: 'はじ' }]
    },
    {
      kana: 'しゅっせきします',
      kanji: '出席します',
      romaji: 'shusseki shimasu',
      meaning: { en: 'to attend [会議に～: a meeting]', vi: 'dự [会議に～: họp]' },
      ruby: [
        { base: '出', reading: 'しゅっ' },
        { base: '席', reading: 'せき' }
      ]
    },
    {
      kana: 'つたえます',
      kanji: '伝えます',
      romaji: 'tsutaemasu',
      meaning: { en: 'to convey, to pass on a message', vi: 'nói lại, truyền đạt' },
      ruby: [{ base: '伝', reading: 'つた' }]
    },
    {
      kana: 'ちゅういします',
      kanji: '注意します',
      romaji: 'chūi shimasu',
      meaning: { en: 'to pay attention [車に～: to cars]', vi: 'chú ý [車に～: xe]' },
      ruby: [
        { base: '注', reading: 'ちゅう' },
        { base: '意', reading: 'い' }
      ]
    },
    {
      kana: 'はずします',
      kanji: '外します',
      romaji: 'hazushimasu',
      meaning: { en: 'to leave (a seat) [席を～: one seat]', vi: 'rời [席を～: ghế]' },
      ruby: [{ base: '外', reading: 'はず' }]
    },
    {
      kana: 'もどります',
      kanji: '戻ります',
      romaji: 'modorimasu',
      meaning: { en: 'to return, to come back', vi: 'trở lại, quay về' },
      ruby: [{ base: '戻', reading: 'もど' }]
    },
    {
      kana: 'あります',
      kanji: 'あります',
      romaji: 'arimasu',
      meaning: { en: 'to be, to exist [電話が～: a phone call]', vi: 'có [電話が～: điện thoại]' }
    },
    {
      kana: 'リサイクルします',
      romaji: 'risaikuru shimasu',
      meaning: { en: 'to recycle', vi: 'tái chế' }
    },
    {
      kana: 'だめ',
      romaji: 'dame',
      meaning: { en: 'no good, not allowed (na-adj)', vi: 'không được (tính từ な)' }
    },
    {
      kana: 'おなじ',
      kanji: '同じ',
      romaji: 'onaji',
      meaning: { en: 'same', vi: 'giống, cùng' },
      ruby: [{ base: '同', reading: 'おな' }]
    },
    {
      kana: 'けいさつ',
      kanji: '警察',
      romaji: 'keisatsu',
      meaning: { en: 'police', vi: 'cảnh sát, sở cảnh sát' },
      ruby: [
        { base: '警', reading: 'けい' },
        { base: '察', reading: 'さつ' }
      ]
    },
    {
      kana: 'せき',
      kanji: '席',
      romaji: 'seki',
      meaning: { en: 'seat', vi: 'ghế, chỗ ngồi' },
      ruby: [{ base: '席', reading: 'せき' }]
    },
    {
      kana: 'マーク',
      romaji: 'māku',
      meaning: { en: 'mark, symbol', vi: 'ký hiệu, biểu tượng' }
    },
    {
      kana: 'ボール',
      romaji: 'bōru',
      meaning: { en: 'ball', vi: 'bóng' }
    },
    {
      kana: 'しめきり',
      kanji: '締め切り',
      romaji: 'shimekiri',
      meaning: { en: 'deadline', vi: 'hạn chót, hạn cuối' },
      ruby: [
        { base: '締', reading: 'しめ' },
        { base: '切', reading: 'き' }
      ]
    },
    {
      kana: 'きそく',
      kanji: '規則',
      romaji: 'kisoku',
      meaning: { en: 'rule, regulation', vi: 'quy tắc' },
      ruby: [
        { base: '規', reading: 'き' },
        { base: '則', reading: 'そく' }
      ]
    },
    {
      kana: 'きけん',
      kanji: '危険',
      romaji: 'kiken',
      meaning: { en: 'danger', vi: 'nguy hiểm' },
      ruby: [
        { base: '危', reading: 'き' },
        { base: '険', reading: 'けん' }
      ]
    },
    {
      kana: 'しようきんし',
      kanji: '使用禁止',
      romaji: 'shiyō kinshi',
      meaning: { en: 'no use, use prohibited', vi: 'cấm sử dụng' },
      ruby: [
        { base: '使', reading: 'し' },
        { base: '用', reading: 'よう' },
        { base: '禁', reading: 'きん' },
        { base: '止', reading: 'し' }
      ]
    },
    {
      kana: 'たちいりきんし',
      kanji: '立入禁止',
      romaji: 'tachiiri kinshi',
      meaning: { en: 'no entry', vi: 'cấm vào' },
      ruby: [
        { base: '立', reading: 'たち' },
        { base: '入', reading: 'いり' },
        { base: '禁', reading: 'きん' },
        { base: '止', reading: 'し' }
      ]
    },
    {
      kana: 'じょこう',
      kanji: '徐行',
      romaji: 'jokō',
      meaning: { en: 'slow down (traffic sign)', vi: 'chạy chậm, đi chậm' },
      ruby: [
        { base: '徐', reading: 'じょ' },
        { base: '行', reading: 'こう' }
      ]
    },
    {
      kana: 'いりぐち',
      kanji: '入口',
      romaji: 'iriguchi',
      meaning: { en: 'entrance', vi: 'lối vào' },
      ruby: [
        { base: '入', reading: 'い' },
        { base: '口', reading: 'ぐち' }
      ]
    },
    {
      kana: 'でぐち',
      kanji: '出口',
      romaji: 'deguchi',
      meaning: { en: 'exit', vi: 'lối ra' },
      ruby: [
        { base: '出', reading: 'で' },
        { base: '口', reading: 'ぐち' }
      ]
    },
    {
      kana: 'ひじょうぐち',
      kanji: '非常口',
      romaji: 'hijōguchi',
      meaning: { en: 'emergency exit', vi: 'cửa thoát hiểm' },
      ruby: [
        { base: '非', reading: 'ひ' },
        { base: '常', reading: 'じょう' },
        { base: '口', reading: 'ぐち' }
      ]
    },
    {
      kana: 'むりょう',
      kanji: '無料',
      romaji: 'muryō',
      meaning: { en: 'free of charge', vi: 'miễn phí' },
      ruby: [
        { base: '無', reading: 'む' },
        { base: '料', reading: 'りょう' }
      ]
    },
    {
      kana: 'わりびき',
      kanji: '割引',
      romaji: 'waribiki',
      meaning: { en: 'discount', vi: 'giảm giá' },
      ruby: [
        { base: '割', reading: 'わり' },
        { base: '引', reading: 'びき' }
      ]
    },
    {
      kana: 'のみほうだい',
      kanji: '飲み放題',
      romaji: 'nomihōdai',
      meaning: { en: 'all-you-can-drink', vi: 'uống thoải mái (trả một giá)' },
      ruby: [
        { base: '飲', reading: 'の' },
        { base: '放', reading: 'ほう' },
        { base: '題', reading: 'だい' }
      ]
    },
    {
      kana: 'しようちゅう',
      kanji: '使用中',
      romaji: 'shiyōchū',
      meaning: { en: 'in use', vi: 'đang sử dụng' },
      ruby: [
        { base: '使', reading: 'し' },
        { base: '用', reading: 'よう' },
        { base: '中', reading: 'ちゅう' }
      ]
    },
    {
      kana: 'ぼしゅうちゅう',
      kanji: '募集中',
      romaji: 'boshūchū',
      meaning: { en: 'now recruiting', vi: 'đang tuyển' },
      ruby: [
        { base: '募', reading: 'ぼ' },
        { base: '集', reading: 'しゅう' },
        { base: '中', reading: 'ちゅう' }
      ]
    },
    {
      kana: '～ちゅう',
      kanji: '～中',
      romaji: '~chū',
      meaning: { en: 'in the process of ~', vi: 'đang ~' },
      ruby: [{ base: '中', reading: 'ちゅう' }]
    },
    {
      kana: 'どういう ～',
      romaji: 'dō iu ~',
      meaning: { en: 'what kind of ~', vi: '~ như thế nào, ~ gì' }
    },
    {
      kana: 'いくら',
      romaji: 'ikura',
      meaning: {
        en: 'how much; no matter how much [～ても]',
        vi: 'bao nhiêu; dù bao nhiêu [～ても]'
      }
    },
    {
      kana: 'もう',
      romaji: 'mō',
      meaning: { en: 'any more (with negative)', vi: 'nữa (đi với phủ định)' }
    },
    {
      kana: 'あと ～',
      romaji: 'ato ~',
      meaning: { en: '~ more, ~ left', vi: 'còn ~' }
    },
    {
      kana: '～ほど',
      romaji: '~hodo',
      meaning: { en: 'about ~, to the extent of ~', vi: 'khoảng ~, tầm ~' }
    },
    {
      kana: 'ちゅうしゃいはん',
      kanji: '駐車違反',
      romaji: 'chūshaihan',
      meaning: { en: 'illegal parking', vi: 'đỗ xe sai quy định' },
      ruby: [
        { base: '駐', reading: 'ちゅう' },
        { base: '車', reading: 'しゃ' },
        { base: '違', reading: 'い' },
        { base: '反', reading: 'はん' }
      ]
    },
    {
      kana: 'ばっきん',
      kanji: '罰金',
      romaji: 'bakkin',
      meaning: { en: 'fine, penalty', vi: 'tiền phạt' },
      ruby: [
        { base: '罰', reading: 'ばっ' },
        { base: '金', reading: 'きん' }
      ]
    },
    {
      kana: 'おきます',
      kanji: '起きます',
      romaji: 'okimasu',
      meaning: { en: 'to occur, to happen', vi: 'xảy ra' },
      ruby: [{ base: '起', reading: 'お' }]
    },
    {
      kana: 'たすけあいます',
      kanji: '助け合います',
      romaji: 'tasukeaimasu',
      meaning: { en: 'to help each other', vi: 'giúp đỡ lẫn nhau' },
      ruby: [
        { base: '助', reading: 'たす' },
        { base: '合', reading: 'あ' }
      ]
    },
    {
      kana: 'もともと',
      romaji: 'motomoto',
      meaning: { en: 'originally, from the start', vi: 'vốn là, nguyên là' }
    },
    {
      kana: 'かなしい',
      kanji: '悲しい',
      romaji: 'kanashii',
      meaning: { en: 'sad', vi: 'buồn' },
      ruby: [{ base: '悲', reading: 'かな' }]
    },
    {
      kana: 'もっと',
      romaji: 'motto',
      meaning: { en: 'more', vi: 'hơn, thêm' }
    },
    {
      kana: 'あいさつ',
      romaji: 'aisatsu',
      meaning: { en: 'greeting (~を します: to greet)', vi: 'chào hỏi (~を します: chào)' }
    },
    {
      kana: 'あいて',
      kanji: '相手',
      romaji: 'aite',
      meaning: { en: 'the other person, partner', vi: 'đối phương' },
      ruby: [
        { base: '相', reading: 'あい' },
        { base: '手', reading: 'て' }
      ]
    },
    {
      kana: 'きもち',
      kanji: '気持ち',
      romaji: 'kimochi',
      meaning: { en: 'feeling, mood', vi: 'tâm trạng, cảm giác' },
      ruby: [
        { base: '気', reading: 'き' },
        { base: '持', reading: 'も' }
      ]
    }
  ],
  phrases: [
    {
      kana: 'もう だめです。走れません。',
      kanji: 'もう だめです。走れません。',
      romaji: 'Mō dame desu. Hashiremasen.',
      meaning: {
        en: 'I cannot go on. I cannot run anymore.',
        vi: 'Không được nữa. Tôi không chạy thêm được.'
      },
      ruby: [{ base: '走', reading: 'はし' }]
    },
    {
      kana: 'がんばれ。',
      kanji: '頑張れ。',
      romaji: 'Ganbare.',
      meaning: { en: 'Hang in there! Do your best!', vi: 'Cố lên!' },
      ruby: [
        { base: '頑', reading: 'がん' },
        { base: '張', reading: 'ば' }
      ]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson33-parking',
      title: { en: 'What does this kanji mean?', vi: 'Chữ Hán này nghĩa là gì?' },
      speakers: [
        { id: 'watt', name: 'ワット' },
        { id: 'staff', name: '大学職員' }
      ],
      lines: [
        {
          speakerId: 'watt',
          jp: 'すみません。車に こんな 紙が 貼って あります。この 漢字は 何と 読むんですか。',
          romaji:
            'Sumimasen. Kuruma ni konna kami ga hatte arimasu. Kono kanji wa nan to yomu n desu ka.',
          meaning: {
            en: 'Excuse me. A paper like this is pasted on my car. How do you read this kanji?',
            vi: 'Xin lỗi. Có tờ giấy dán trên xe. Chữ Hán này đọc thế nào?'
          },
          ruby: [
            { base: '車', reading: 'くるま' },
            { base: '紙', reading: 'かみ' },
            { base: '貼', reading: 'は' },
            { base: '漢', reading: 'かん' },
            { base: '字', reading: 'じ' },
            { base: '何', reading: 'なん' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          speakerId: 'staff',
          jp: '「駐車違反」と 読みます。',
          romaji: '"Chūshaihan" to yomimasu.',
          meaning: { en: 'It is read "chūshaihan."', vi: 'Đọc là "Chusha ihan".' },
          ruby: [
            { base: '駐', reading: 'ちゅう' },
            { base: '車', reading: 'しゃ' },
            { base: '違', reading: 'い' },
            { base: '反', reading: 'はん' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          speakerId: 'watt',
          jp: '駐車違反……、どういう 意味ですか。',
          romaji: 'Chūshaihan……, dō iu imi desu ka.',
          meaning: {
            en: 'Illegal parking... what does it mean?',
            vi: 'Chusha ihan... nghĩa là gì?'
          },
          ruby: [
            { base: '駐', reading: 'ちゅう' },
            { base: '車', reading: 'しゃ' },
            { base: '違', reading: 'い' },
            { base: '反', reading: 'はん' },
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' }
          ]
        },
        {
          speakerId: 'staff',
          jp: '駐車しては いけない 所に 駐車した という 意味です。どこに 止めましたか。',
          romaji:
            'Chūsha shite wa ikenai tokoro ni chūsha shita to iu imi desu. Doko ni tomemashita ka.',
          meaning: {
            en: 'It means you parked where parking is not allowed. Where did you park?',
            vi: 'Nghĩa là anh đỗ xe nơi không được đỗ. Anh đỗ ở đâu?'
          },
          ruby: [
            { base: '駐', reading: 'ちゅう' },
            { base: '車', reading: 'しゃ' },
            { base: '所', reading: 'ところ' },
            { base: '駐', reading: 'ちゅう' },
            { base: '車', reading: 'しゃ' },
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' },
            { base: '止', reading: 'と' }
          ]
        },
        {
          speakerId: 'watt',
          jp: '駅前です。雑誌を 買いに 行く 10分だけ 止めました……。',
          romaji: 'Ekimae desu. Zasshi o kai ni iku juppun dake tomemashita…….',
          meaning: {
            en: 'In front of the station. I stopped for just ten minutes to buy a magazine...',
            vi: 'Trước ga. Tôi đỗ để mua tạp chí, chỉ 10 phút thôi...'
          },
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '前', reading: 'まえ' },
            { base: '雑', reading: 'ざっ' },
            { base: '誌', reading: 'し' },
            { base: '買', reading: 'か' },
            { base: '行', reading: 'い' },
            { base: '分', reading: 'ぷん' },
            { base: '止', reading: 'と' }
          ]
        },
        {
          speakerId: 'staff',
          jp: '駅前は 10分でも だめですよ。',
          romaji: 'Ekimae wa juppun demo dame desu yo.',
          meaning: {
            en: 'Even ten minutes is not allowed in front of the station.',
            vi: 'Trước ga thì dù 10 phút cũng không được.'
          },
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '前', reading: 'まえ' },
            { base: '分', reading: 'ぷん' }
          ]
        },
        {
          speakerId: 'watt',
          jp: 'そうですか。罰金を 払わなければ ならないんですか。',
          romaji: 'Sō desu ka. Bakkin o harawanakereba naranai n desu ka.',
          meaning: { en: 'I see. Do I have to pay a fine?', vi: 'Thế à. Tôi phải nộp phạt à?' },
          ruby: [
            { base: '罰', reading: 'ばっ' },
            { base: '金', reading: 'きん' },
            { base: '払', reading: 'はら' }
          ]
        },
        {
          speakerId: 'staff',
          jp: 'はい、15,000円です。',
          romaji: 'Hai, ichiman go-sen en desu.',
          meaning: { en: 'Yes, it is 15,000 yen.', vi: 'Vâng, 15.000 yên.' },
          ruby: [{ base: '円', reading: 'えん' }]
        },
        {
          speakerId: 'watt',
          jp: 'えっ、15,000円？ 雑誌は 300円 だけ なのに……。',
          romaji: 'E, ichiman go-sen en? Zasshi wa sanbyaku-en dake na noni…….',
          meaning: {
            en: 'What, 15,000 yen? The magazine was only 300 yen...',
            vi: 'Sao? 15.000 yên? Tạp chí chỉ 300 yên mà...'
          },
          ruby: [
            { base: '円', reading: 'えん' },
            { base: '雑', reading: 'ざっ' },
            { base: '誌', reading: 'し' },
            { base: '円', reading: 'えん' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'Imperative / Prohibitive',
      highlights: ['ろ', 'な'],
      title: { en: 'Imperative and prohibitive forms', vi: 'Thể mệnh lệnh và cấm chỉ' },
      explanation: {
        en: 'Group I imperative: change the vowel before ます to /e/ + ろ (書く→書け). Group II: add ろ (食べろ). Group III: しろ, 来い. Prohibitive: dictionary form + な (走るな). Used in emergencies, sports cheering, and signs.',
        vi: 'Nhóm I mệnh lệnh: đổi nguyên âm trước ます thành /e/ + ろ (書く→書け). Nhóm II: thêm ろ (食べろ). Nhóm III: しろ, 来い. Cấm chỉ: nguyên dạng + な (走るな). Dùng trong khẩn cấp, cổ vũ, biển báo.'
      },
      explanationRuby: [
        { base: '書', reading: 'か' },
        { base: '書', reading: 'か' },
        { base: '食', reading: 'た' },
        { base: '来', reading: 'き' },
        { base: '走', reading: 'はし' }
      ],
      examples: [
        {
          jp: '逃げろ！',
          romaji: 'Nigero!',
          meaning: { en: 'Run away!', vi: 'Chạy đi!' },
          ruby: [{ base: '逃', reading: 'に' }]
        },
        {
          jp: 'エレベーターを 使うな。',
          romaji: 'Erebētā o tsukau na.',
          meaning: { en: 'Do not use the elevator.', vi: 'Không dùng thang máy.' },
          ruby: [{ base: '使', reading: 'つか' }]
        },
        {
          jp: '止まれ。',
          romaji: 'Tomare.',
          meaning: { en: 'Stop.', vi: 'Dừng lại.' },
          ruby: [{ base: '止', reading: 'と' }]
        },
        {
          jp: '入るな。',
          romaji: 'Hairu na.',
          meaning: { en: 'Do not enter.', vi: 'Cấm vào.' },
          ruby: [{ base: '入', reading: 'はい' }]
        }
      ]
    },
    {
      pattern: 'V-て なさい',
      highlights: ['なさい'],
      title: { en: 'Soft command (〜なさい)', vi: 'Mệnh lệnh nhẹ (〜なさい)' },
      explanation: {
        en: 'Te-form + なさい is a softer command from parent to child or teacher to student: 勉強しなさい.',
        vi: 'Thể て + なさい là mệnh lệnh nhẹ hơn từ cha mẹ/thầy cô: 勉強しなさい.'
      },
      explanationRuby: [
        { base: '勉', reading: 'べん' },
        { base: '強', reading: 'きょう' }
      ],
      examples: [
        {
          jp: '勉強しなさい。',
          romaji: 'Benkyō shinasai.',
          meaning: { en: 'Study.', vi: 'Học đi.' },
          ruby: [
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        }
      ]
    },
    {
      pattern: 'X は Y と 書いて あります / Y と 読みます',
      patternRuby: [
        { base: '書', reading: 'か' },
        { base: '読', reading: 'よ' }
      ],
      highlights: ['と', '書', '読'],
      title: {
        en: 'How it is written/read (〜と書いてあります)',
        vi: 'Cách viết/đọc (〜と書いてあります)'
      },
      explanation: {
        en: 'Use と with 書いてあります or 読みます to say how something is written or read: あそこに「止まれ」と 書いて あります.',
        vi: 'Dùng と với 書いてあります hoặc 読みます để nói cách viết/đọc: あそこに「止まれ」と 書いて あります.'
      },
      explanationRuby: [
        { base: '書', reading: 'か' },
        { base: '読', reading: 'よ' },
        { base: '止', reading: 'と' },
        { base: '書', reading: 'か' }
      ],
      examples: [
        {
          jp: 'あの 漢字は 何と 読むんですか。',
          romaji: 'Ano kanji wa nan to yomu n desu ka.',
          meaning: { en: 'How do you read that kanji?', vi: 'Chữ Hán kia đọc là gì?' },
          ruby: [
            { base: '漢', reading: 'かん' },
            { base: '字', reading: 'じ' },
            { base: '何', reading: 'なん' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          jp: 'あそこに「止まれ」と 書いて あります。',
          romaji: 'Asoko ni "Tomare" to kaite arimasu.',
          meaning: { en: 'It says "Stop" over there.', vi: 'Ở kia có viết "Tomare".' },
          ruby: [
            { base: '止', reading: 'と' },
            { base: '書', reading: 'か' }
          ]
        }
      ]
    },
    {
      pattern: 'X は Y という 意味です',
      patternRuby: [
        { base: '意', reading: 'い' },
        { base: '味', reading: 'み' }
      ],
      highlights: ['と', 'いう', '意', '味'],
      title: { en: 'Meaning (〜という意味です)', vi: 'Nghĩa (〜という意味です)' },
      explanation: {
        en: 'X は Y という 意味です explains meaning. Ask with どういう: この マークは どういう 意味ですか.',
        vi: 'X は Y という 意味です giải thích nghĩa. Hỏi bằng どういう: この マークは どういう 意味ですか.'
      },
      explanationRuby: [
        { base: '意', reading: 'い' },
        { base: '味', reading: 'み' },
        { base: '意', reading: 'い' },
        { base: '味', reading: 'み' }
      ],
      examples: [
        {
          jp: '「立入禁止」は 入るな という 意味です。',
          romaji: '"Tachiiri kinshi" wa hairu na to iu imi desu.',
          meaning: {
            en: '"No entry" means do not enter.',
            vi: '"Tachiiri kinshi" nghĩa là cấm vào.'
          },
          ruby: [
            { base: '立', reading: 'たち' },
            { base: '入', reading: 'い' },
            { base: '禁', reading: 'きん' },
            { base: '止', reading: 'し' },
            { base: '入', reading: 'はい' },
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' }
          ]
        },
        {
          jp: 'この マークは どういう 意味ですか。……洗濯機で 洗える という 意味です。',
          romaji: 'Kono māku wa dō iu imi desu ka. ……Sentakuki de araeru to iu imi desu.',
          meaning: {
            en: 'What does this mark mean? ...It means it can be washed in a washing machine.',
            vi: 'Ký hiệu này nghĩa là gì? ...Nghĩa là giặt được bằng máy giặt.'
          },
          ruby: [
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' },
            { base: '洗', reading: 'せん' },
            { base: '濯', reading: 'たく' },
            { base: '機', reading: 'き' },
            { base: '洗', reading: 'あ' },
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form + と 言っていました',
      patternRuby: [{ base: '言', reading: 'い' }],
      highlights: ['と', '言'],
      title: {
        en: 'Reported speech (〜と言っていました)',
        vi: 'Truyền l lời (〜と言っていました)'
      },
      explanation: {
        en: 'Plain form + と言っていました relays a third person message: 田中さんは あした 休むと 言っていました.',
        vi: 'Thể thông thường + と言っていました chuyển l lời người thứ ba: 田中さんは あした 休むと 言っていました.'
      },
      explanationRuby: [
        { base: '言', reading: 'い' },
        { base: '田', reading: 'た' },
        { base: '中', reading: 'なか' },
        { base: '休', reading: 'やす' },
        { base: '言', reading: 'い' }
      ],
      examples: [
        {
          jp: 'グプタさんは いま 留守だと 言っていました。30分 ほど したら 戻るそうです。',
          romaji:
            'Guputa-san wa ima rusu da to itte imashita. Sanjuppun hodo shitara modoru sō desu.',
          meaning: {
            en: 'Mr. Gupta said he is out now and will return in about 30 minutes.',
            vi: 'Ông Gupta nói đang vắng, khoảng 30 phút nữa sẽ về.'
          },
          ruby: [
            { base: '留', reading: 'る' },
            { base: '守', reading: 'す' },
            { base: '言', reading: 'い' },
            { base: '分', reading: 'ぷん' },
            { base: '戻', reading: 'もど' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form + と 伝えていただけませんか',
      patternRuby: [{ base: '伝', reading: 'つた' }],
      highlights: ['と', '伝'],
      title: {
        en: 'Could you pass on a message? (〜と伝えていただけませんか)',
        vi: 'Nhờ chuyển l lời (〜と伝えていただけませんか)'
      },
      explanation: {
        en: 'Polite request to relay a message: 渡辺さんに あしたの パーティーは 6時からだと 伝えていただけませんか.',
        vi: 'Nhờ chuyển l lời lịch sự: 渡辺さんに あしたの パーティーは 6時からだと 伝えていただけませんか.'
      },
      explanationRuby: [
        { base: '渡', reading: 'わた' },
        { base: '辺', reading: 'なべ' },
        { base: '時', reading: 'じ' },
        { base: '伝', reading: 'つた' }
      ],
      examples: [
        {
          jp: 'すみませんが、渡辺さんに あしたの パーティーは 6時からだと 伝えていただけませんか。',
          romaji:
            'Sumimasen ga, Watanabe-san ni ashita no pātī wa rokuji kara da to tsutaete itadakemasen ka.',
          meaning: {
            en: 'Excuse me, could you tell Ms. Watanabe that tomorrow party starts at six?',
            vi: 'Xin lỗi, anh/chị nhắn chị Watanabe bữa tiệc ngày mai bắt đầu từ 6 giờ được không?'
          },
          ruby: [
            { base: '渡', reading: 'わた' },
            { base: '辺', reading: 'なべ' },
            { base: '時', reading: 'じ' },
            { base: '伝', reading: 'つた' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson33-earthquake',
      title: { en: 'After the earthquake', vi: 'Sau động đất' },
      lines: [
        {
          jp: '大きな 地震が 起きました。',
          romaji: 'Ōkina jishin ga okimashita.',
          meaning: { en: 'A big earthquake occurred.', vi: 'Có trận động đất lớn.' },
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '地', reading: 'じ' },
            { base: '震', reading: 'しん' },
            { base: '起', reading: 'お' }
          ]
        },
        {
          jp: 'もともと 近所の 人たちは あまり 話しませんでした。',
          romaji: 'Motomoto kinjo no hitotachi wa amari hanashimasen deshita.',
          meaning: {
            en: 'Originally the neighbors did not talk much.',
            vi: 'Vốn dĩ hàng xóm ít nói chuyện.'
          },
          ruby: [
            { base: '近', reading: 'きん' },
            { base: '所', reading: 'じょ' },
            { base: '人', reading: 'ひと' },
            { base: '話', reading: 'はな' }
          ]
        },
        {
          jp: 'でも 地震の あと、みんな 助け合いました。あいさつも もっと 増えました。',
          romaji: 'Demo jishin no ato, minna tasukeaimashita. Aisatsu mo motto fuemashita.',
          meaning: {
            en: 'But after the earthquake everyone helped each other. Greetings increased too.',
            vi: 'Nhưng sau động đất mọi người giúp nhau. Chào hỏi cũng nhiều hơn.'
          },
          ruby: [
            { base: '地', reading: 'じ' },
            { base: '震', reading: 'しん' },
            { base: '助', reading: 'たす' },
            { base: '合', reading: 'あ' },
            { base: '増', reading: 'ふ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What changed after the earthquake?',
            vi: 'Sau động đất có gì thay đổi?'
          },
          choices: [
            {
              id: 'a',
              label: { en: 'Neighbors helped each other more', vi: 'Hàng xóm giúp nhau hơn' }
            },
            { id: 'b', label: { en: 'Everyone moved away', vi: 'Mọi người chuyển đi hết' } },
            { id: 'c', label: { en: 'The town became silent', vi: 'Thị trấn im lặng hơn' } },
            {
              id: 'd',
              label: { en: 'Schools closed forever', vi: 'Trường học đóng cửa vĩnh viễn' }
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
      title: { en: 'Signs and symbols', vi: 'Biển báo và ký hiệu' },
      introTerm: {
        jp: '標識',
        ruby: [
          { base: '標', reading: 'ひょう' },
          { base: '識', reading: 'しき' }
        ]
      },
      layout: 'stacked',
      rows: [
        {
          jp: '営業中',
          ruby: [
            { base: '営', reading: 'えい' },
            { base: '業', reading: 'ぎょう' },
            { base: '中', reading: 'ちゅう' }
          ],
          meaning: { en: 'open for business', vi: 'đang mở cửa' }
        },
        {
          jp: '準備中',
          ruby: [
            { base: '準', reading: 'じゅん' },
            { base: '備', reading: 'び' },
            { base: '中', reading: 'ちゅう' }
          ],
          meaning: { en: 'preparing', vi: 'đang chuẩn bị' }
        },
        {
          jp: '閉店',
          ruby: [
            { base: '閉', reading: 'へい' },
            { base: '店', reading: 'てん' }
          ],
          meaning: { en: 'closed (store)', vi: 'đóng cửa' }
        },
        {
          jp: '非常口',
          ruby: [
            { base: '非', reading: 'ひ' },
            { base: '常', reading: 'じょう' },
            { base: '口', reading: 'ぐち' }
          ],
          meaning: { en: 'emergency exit', vi: 'cửa thoát hiểm' }
        },
        {
          jp: '禁煙席',
          ruby: [
            { base: '禁', reading: 'きん' },
            { base: '煙', reading: 'えん' },
            { base: '席', reading: 'せき' }
          ],
          meaning: { en: 'non-smoking seat', vi: 'ghế cấm hút thuốc' }
        },
        {
          jp: '手洗い',
          ruby: [
            { base: '手', reading: 'て' },
            { base: '洗', reading: 'あら' }
          ],
          meaning: { en: 'hand wash', vi: 'giặt tay' }
        }
      ]
    }
  ]
};
