import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 28 (V-ながら, habitual 〜ています, 〜し〜し, それで, とき+particles). */
export const n4Lesson28: Lesson = {
  id: 'lesson-28',
  number: 28,
  title: {
    en: 'Simultaneous actions and listing reasons',
    vi: 'Làm đồng thời và liệt kê lý do'
  },
  focus: {
    en: 'Describe simultaneous actions with V-ながら, habitual routines with 〜ています, list qualities or reasons with 〜し〜し, connect results with それで, and use particles after とき.',
    vi: 'Diễn tả hành động đồng thời với V-ながら, thói quen với 〜ています, liệt kê đặc điểm/lý do với 〜し〜し, nối kết quả với それで, và dùng trợ từ sau とき.'
  },
  vocab: [
    {
      kana: 'うれます',
      kanji: '売れます',
      romaji: 'uremasu',
      meaning: {
        en: 'to sell well [パンが～: bread, etc.]',
        vi: 'bán chạy [パンが～: bánh mì, v.v.]'
      },
      ruby: [{ base: '売', reading: 'う' }]
    },
    {
      kana: 'おどります',
      kanji: '踊ります',
      romaji: 'odorimasu',
      meaning: { en: 'to dance', vi: 'múa' },
      ruby: [{ base: '踊', reading: 'おど' }]
    },
    {
      kana: 'かみます',
      romaji: 'kamimasu',
      meaning: { en: 'to chew, to bite', vi: 'nhai, cắn' }
    },
    {
      kana: 'えらびます',
      kanji: '選びます',
      romaji: 'erabimasu',
      meaning: { en: 'to choose, to select', vi: 'lựa, lựa chọn' },
      ruby: [{ base: '選', reading: 'えら' }]
    },
    {
      kana: 'かよいます',
      kanji: '通います',
      romaji: 'kayoimasu',
      meaning: { en: 'to attend [大学に～: university]', vi: 'đi học [大学に～: đại học]' },
      ruby: [{ base: '通', reading: 'かよ' }]
    },
    {
      kana: 'メモします',
      romaji: 'memo shimasu',
      meaning: { en: 'to take notes, to memo', vi: 'ghi chép, ghi memo' }
    },
    {
      kana: 'まじめ',
      romaji: 'majime',
      meaning: { en: 'serious, earnest (na-adj)', vi: 'nghiêm túc, ngoan (tính từ な)' }
    },
    {
      kana: 'ねっしん',
      kanji: '熱心',
      romaji: 'nesshin',
      meaning: { en: 'enthusiastic (na-adj)', vi: 'nhiệt tình (tính từ な)' },
      ruby: [
        { base: '熱', reading: 'ねっ' },
        { base: '心', reading: 'しん' }
      ]
    },
    {
      kana: 'えらい',
      kanji: '偉い',
      romaji: 'erai',
      meaning: { en: 'great, admirable', vi: 'siêu, giỏi, đáng khâm phục' },
      ruby: [{ base: '偉', reading: 'えら' }]
    },
    {
      kana: 'ちょうどいい',
      romaji: 'chōdo ii',
      meaning: { en: 'just right, perfect fit', vi: 'vừa vặn' }
    },
    {
      kana: 'けしき',
      kanji: '景色',
      romaji: 'keshiki',
      meaning: { en: 'scenery, view', vi: 'phong cảnh' },
      ruby: [
        { base: '景', reading: 'け' },
        { base: '色', reading: 'しき' }
      ]
    },
    {
      kana: 'びよういん',
      kanji: '美容院',
      romaji: 'biyōin',
      meaning: { en: 'beauty salon', vi: 'hiệu làm đẹp' },
      ruby: [
        { base: '美', reading: 'び' },
        { base: '容', reading: 'よう' },
        { base: '院', reading: 'いん' }
      ]
    },
    {
      kana: 'だいどころ',
      kanji: '台所',
      romaji: 'daidokoro',
      meaning: { en: 'kitchen', vi: 'nhà bếp' },
      ruby: [
        { base: '台', reading: 'だい' },
        { base: '所', reading: 'どころ' }
      ]
    },
    {
      kana: 'けいけん',
      kanji: '経験',
      romaji: 'keiken',
      meaning: {
        en: 'experience (~があります: have ~; ~をします: gain ~)',
        vi: 'kinh nghiệm (~があります: có ~; ~をします: có ~)'
      },
      ruby: [
        { base: '経', reading: 'けい' },
        { base: '験', reading: 'けん' }
      ]
    },
    {
      kana: 'ちから',
      kanji: '力',
      romaji: 'chikara',
      meaning: { en: 'strength, power', vi: 'sức mạnh' },
      ruby: [{ base: '力', reading: 'ちから' }]
    },
    {
      kana: 'にんき',
      kanji: '人気',
      romaji: 'ninki',
      meaning: {
        en: 'popularity [学生に～があります: popular with students]',
        vi: 'được yêu thích [学生に～があります: được sinh viên yêu thích]'
      },
      ruby: [
        { base: '人', reading: 'にん' },
        { base: '気', reading: 'き' }
      ]
    },
    {
      kana: 'かたち',
      kanji: '形',
      romaji: 'katachi',
      meaning: { en: 'shape, form', vi: 'hình dạng' },
      ruby: [{ base: '形', reading: 'かたち' }]
    },
    {
      kana: 'いろ',
      kanji: '色',
      romaji: 'iro',
      meaning: { en: 'color', vi: 'màu sắc' },
      ruby: [{ base: '色', reading: 'いろ' }]
    },
    {
      kana: 'あじ',
      kanji: '味',
      romaji: 'aji',
      meaning: { en: 'taste, flavor', vi: 'vị' },
      ruby: [{ base: '味', reading: 'あじ' }]
    },
    {
      kana: 'ガム',
      romaji: 'gamu',
      meaning: { en: 'chewing gum', vi: 'kẹo cao su' }
    },
    {
      kana: 'しなもの',
      kanji: '品物',
      romaji: 'shinamono',
      meaning: { en: 'goods, merchandise', vi: 'hàng hóa' },
      ruby: [
        { base: '品', reading: 'しな' },
        { base: '物', reading: 'もの' }
      ]
    },
    {
      kana: 'ねだん',
      kanji: '値段',
      romaji: 'nedan',
      meaning: { en: 'price', vi: 'giá cả' },
      ruby: [
        { base: '値', reading: 'ね' },
        { base: '段', reading: 'だん' }
      ]
    },
    {
      kana: 'きゅうりょう',
      kanji: '給料',
      romaji: 'kyūryō',
      meaning: { en: 'salary', vi: 'lương' },
      ruby: [
        { base: '給', reading: 'きゅう' },
        { base: '料', reading: 'りょう' }
      ]
    },
    {
      kana: 'ボーナス',
      romaji: 'bōnasu',
      meaning: { en: 'bonus', vi: 'thưởng' }
    },
    {
      kana: 'ゲーム',
      romaji: 'gēmu',
      meaning: { en: 'game', vi: 'trò chơi, game' }
    },
    {
      kana: 'ばんぐみ',
      kanji: '番組',
      romaji: 'bangumi',
      meaning: { en: 'TV/radio program', vi: 'chương trình' },
      ruby: [
        { base: '番', reading: 'ばん' },
        { base: '組', reading: 'ぐみ' }
      ]
    },
    {
      kana: 'ドラマ',
      romaji: 'dorama',
      meaning: { en: 'TV drama', vi: 'phim truyền hình' }
    },
    {
      kana: 'かしゅ',
      kanji: '歌手',
      romaji: 'kashu',
      meaning: { en: 'singer', vi: 'ca sĩ' },
      ruby: [
        { base: '歌', reading: 'か' },
        { base: '手', reading: 'しゅ' }
      ]
    },
    {
      kana: 'しょうせつ',
      kanji: '小説',
      romaji: 'shōsetsu',
      meaning: { en: 'novel', vi: 'tiểu thuyết' },
      ruby: [
        { base: '小', reading: 'しょう' },
        { base: '説', reading: 'せつ' }
      ]
    },
    {
      kana: 'しょうせつか',
      kanji: '小説家',
      romaji: 'shōsetsuka',
      meaning: { en: 'novelist', vi: 'nhà văn, tiểu thuyết gia' },
      ruby: [
        { base: '小', reading: 'しょう' },
        { base: '説', reading: 'せつ' },
        { base: '家', reading: 'か' }
      ]
    },
    {
      kana: '～か',
      kanji: '～家',
      romaji: '~ka',
      meaning: { en: '~ professional (writer, artist, etc.)', vi: 'nhà ~ (nghề nghiệp)' },
      ruby: [{ base: '家', reading: 'か' }]
    },
    {
      kana: '～き',
      kanji: '～機',
      romaji: '~ki',
      meaning: { en: '~ machine', vi: 'máy ~' },
      ruby: [{ base: '機', reading: 'き' }]
    },
    {
      kana: 'むすこ',
      kanji: '息子',
      romaji: 'musuko',
      meaning: { en: "son (one's own)", vi: 'con trai (của mình)' },
      ruby: [
        { base: '息', reading: 'むす' },
        { base: '子', reading: 'こ' }
      ]
    },
    {
      kana: 'むすこさん',
      kanji: '息子さん',
      romaji: 'musuko-san',
      meaning: { en: "son (someone else's)", vi: 'con trai (của người khác)' },
      ruby: [
        { base: '息', reading: 'むす' },
        { base: '子', reading: 'こ' }
      ]
    },
    {
      kana: 'むすめ',
      kanji: '娘',
      romaji: 'musume',
      meaning: { en: "daughter (one's own)", vi: 'con gái (của mình)' },
      ruby: [{ base: '娘', reading: 'むすめ' }]
    },
    {
      kana: 'むすめさん',
      kanji: '娘さん',
      romaji: 'musume-san',
      meaning: { en: "daughter (someone else's)", vi: 'con gái (của người khác)' },
      ruby: [{ base: '娘', reading: 'むすめ' }]
    },
    {
      kana: 'じぶん',
      kanji: '自分',
      romaji: 'jibun',
      meaning: { en: 'oneself', vi: 'bản thân, mình' },
      ruby: [
        { base: '自', reading: 'じ' },
        { base: '分', reading: 'ぶん' }
      ]
    },
    {
      kana: 'しょうらい',
      kanji: '将来',
      romaji: 'shōrai',
      meaning: { en: 'future', vi: 'tương lai' },
      ruby: [
        { base: '将', reading: 'しょう' },
        { base: '来', reading: 'らい' }
      ]
    },
    {
      kana: 'しばらく',
      romaji: 'shibaraku',
      meaning: { en: 'for a while', vi: 'một lúc, một thời gian' }
    },
    {
      kana: 'たいてい',
      romaji: 'taitei',
      meaning: { en: 'usually, generally', vi: 'thường thì, thông thường' }
    },
    {
      kana: 'それに',
      romaji: 'sore ni',
      meaning: { en: 'moreover, besides', vi: 'hơn nữa, thêm nữa' }
    },
    {
      kana: 'それで',
      romaji: 'sore de',
      meaning: { en: 'therefore, so', vi: 'vì thế, thế nên' }
    },
    {
      kana: 'おしらせ',
      kanji: 'お知らせ',
      romaji: 'oshirase',
      meaning: { en: 'notice, announcement', vi: 'thông báo' },
      ruby: [{ base: '知', reading: 'し' }]
    },
    {
      kana: 'さんかします',
      kanji: '参加します',
      romaji: 'sanka shimasu',
      meaning: { en: 'to participate, to take part', vi: 'tham gia' },
      ruby: [
        { base: '参', reading: 'さん' },
        { base: '加', reading: 'か' }
      ]
    },
    {
      kana: 'ひにち',
      kanji: '日にち',
      romaji: 'hinichi',
      meaning: { en: 'date, day (of an event)', vi: 'ngày, thời gian (sự kiện)' },
      ruby: [
        { base: '日', reading: 'ひ' },
        { base: '日', reading: 'にち' }
      ]
    },
    {
      kana: 'ど',
      kanji: '土',
      romaji: 'do',
      meaning: { en: 'Saturday (written day marker)', vi: 'thứ bảy (ký hiệu ngày)' },
      ruby: [{ base: '土', reading: 'ど' }]
    },
    {
      kana: 'たいいくかん',
      kanji: '体育館',
      romaji: 'taiikukan',
      meaning: { en: 'gymnasium', vi: 'nhà thi đấu thể thao' },
      ruby: [
        { base: '体', reading: 'たい' },
        { base: '育', reading: 'いく' },
        { base: '館', reading: 'かん' }
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
      kana: 'さそいます',
      kanji: '誘います',
      romaji: 'sasoimasu',
      meaning: { en: 'to invite, to ask someone along', vi: 'mời, rủ' },
      ruby: [{ base: '誘', reading: 'さそ' }]
    },
    {
      kana: 'イベント',
      romaji: 'ibento',
      meaning: { en: 'event', vi: 'sự kiện' }
    }
  ],
  phrases: [
    {
      kana: 'ちょっと おねがいが あるんですが。',
      kanji: 'ちょっと お願いが あるんですが。',
      romaji: 'Chotto onegai ga aru n desu ga.',
      meaning: {
        en: 'I have a small favor to ask.',
        vi: 'Tôi có chút việc muốn nhờ.'
      },
      ruby: [{ base: '願', reading: 'ねが' }]
    },
    {
      kana: 'じつは',
      kanji: '実は',
      romaji: 'Jitsu wa',
      meaning: { en: 'Actually, to tell the truth', vi: 'Thực ra' },
      ruby: [{ base: '実', reading: 'じつ' }]
    },
    {
      kana: 'うーん',
      romaji: 'Ūn',
      meaning: { en: 'Hmm, well...', vi: 'Ừm...' }
    }
  ],
  conversation: [
    {
      id: 'conv-lesson28-homestay',
      title: {
        en: 'Could you teach me English?',
        vi: 'Anh dạy tiếng Anh giúp em được không?'
      },
      speakers: [
        { id: 'ogawa', name: '小川' },
        { id: 'miller', name: 'ミラー' }
      ],
      lines: [
        {
          speakerId: 'ogawa',
          jp: 'ミラーさん、ちょっと お願いが あるんですが。',
          romaji: 'Mirā-san, chotto onegai ga aru n desu ga.',
          meaning: {
            en: 'Mr. Miller, I have a small favor to ask.',
            vi: 'Anh Miller, em có chút việc muốn nhờ.'
          },
          ruby: [{ base: '願', reading: 'ねが' }]
        },
        {
          speakerId: 'miller',
          jp: 'はい、何ですか。',
          romaji: 'Hai, nan desu ka.',
          meaning: { en: 'Sure, what is it?', vi: 'Vâng, việc gì?' },
          ruby: [{ base: '何', reading: 'なん' }]
        },
        {
          speakerId: 'ogawa',
          jp: '実は、8月に オーストラリアへ ホームステイに 行くんです。',
          romaji: 'Jitsu wa, hachigatsu ni Ōsutoraria e hōmusutei ni iku n desu.',
          meaning: {
            en: 'Actually, I am going on a homestay to Australia in August.',
            vi: 'Thực ra, tháng 8 em đi homestay ở Úc.'
          },
          ruby: [
            { base: '実', reading: 'じつ' },
            { base: '月', reading: 'がつ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'いいですね。',
          romaji: 'Ii desu ne.',
          meaning: { en: 'That sounds great.', vi: 'Hay quá.' }
        },
        {
          speakerId: 'ogawa',
          jp: '今、友達と 英語を 勉強しているんですが、あまり 上達しません。',
          romaji: 'Ima, tomodachi to Eigo o benkyō shite iru n desu ga, amari jōtatsu shimasen.',
          meaning: {
            en: 'I am studying English with a friend now, but I am not improving much.',
            vi: 'Bây giờ em đang học tiếng Anh với bạn, nhưng không tiến bộ lắm.'
          },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' },
            { base: '上', reading: 'じょう' },
            { base: '達', reading: 'たつ' }
          ]
        },
        {
          speakerId: 'ogawa',
          jp: '先生が いないし、英語を 話す 機会も 少ないんです。',
          romaji: 'Sensei ga inai shi, Eigo o hanasu kikai mo sukunai n desu.',
          meaning: {
            en: 'There is no teacher, and I also have few chances to speak English.',
            vi: 'Không có thầy, lại ít cơ hội nói tiếng Anh.'
          },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' },
            { base: '話', reading: 'はな' },
            { base: '機', reading: 'き' },
            { base: '会', reading: 'かい' },
            { base: '少', reading: 'すく' }
          ]
        },
        {
          speakerId: 'ogawa',
          jp: 'ミラーさん、英語の 先生に なって いただけませんか。',
          romaji: 'Mirā-san, Eigo no sensei ni natte itadakemasen ka.',
          meaning: {
            en: 'Mr. Miller, could you be my English teacher?',
            vi: 'Anh Miller, anh làm thầy tiếng Anh giúp em được không?'
          },
          ruby: [
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'うーん、仕事が ちょっと 忙しいんですが……。',
          romaji: 'Ūn, shigoto ga chotto isogashii n desu ga…….',
          meaning: {
            en: 'Hmm, work is a little busy, though...',
            vi: 'Ừm, công việc hơi bận...'
          },
          ruby: [
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '忙', reading: 'いそが' }
          ]
        },
        {
          speakerId: 'ogawa',
          jp: '時間の ある とき、お茶を 飲みながら 勉強しませんか。',
          romaji: 'Jikan no aru toki, ocha o nominagara benkyō shimasen ka.',
          meaning: {
            en: 'When you have time, shall we study while drinking tea?',
            vi: 'Lúc rảnh, mình vừa uống trà vừa học nhé?'
          },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' },
            { base: '茶', reading: 'ちゃ' },
            { base: '飲', reading: 'の' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'すみません。出張が 多いし、日本語の 試験も 近いんです。',
          romaji: 'Sumimasen. Shusshō ga ōi shi, Nihongo no shiken mo chikai n desu.',
          meaning: {
            en: 'I am sorry. I have many business trips, and a Japanese exam is coming up too.',
            vi: 'Xin lỗi. Anh đi công tác nhiều, lại sắp thi tiếng Nhật nữa.'
          },
          ruby: [
            { base: '出', reading: 'しゅっ' },
            { base: '張', reading: 'ちょう' },
            { base: '多', reading: 'おお' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '試', reading: 'し' },
            { base: '験', reading: 'けん' },
            { base: '近', reading: 'ちか' }
          ]
        },
        {
          speakerId: 'ogawa',
          jp: 'そうですか。',
          romaji: 'Sō desu ka.',
          meaning: { en: 'I see.', vi: 'Vậy à.' }
        },
        {
          speakerId: 'miller',
          jp: '申し訳ありません。',
          romaji: 'Mōshiwake arimasen.',
          meaning: { en: 'I am very sorry.', vi: 'Em thành thật xin lỗi.' },
          ruby: [
            { base: '申', reading: 'もう' },
            { base: '訳', reading: 'わけ' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-ながら V',
      highlights: ['ながら'],
      title: { en: 'Doing two things at once (V-ながら)', vi: 'Vừa ... vừa ... (V-ながら)' },
      explanation: {
        en: 'Attach ながら to the ます-stem of V1 to show the same person does V2 while doing V1. V2 is the main action. It can also describe two ongoing states over a longer period: 働きながら 日本語を 勉強しています.',
        vi: 'Gắn ながら vào gốc ます của V1 để cùng một người vừa làm V1 vừa làm V2; V2 là hành động chính. Cũng mô tả hai trạng thái kéo dài: 働きながら 日本語を 勉強しています.'
      },
      explanationRuby: [
        { base: '働', reading: 'はたら' },
        { base: '日', reading: 'に' },
        { base: '本', reading: 'ほん' },
        { base: '語', reading: 'ご' },
        { base: '勉', reading: 'べん' },
        { base: '強', reading: 'きょう' }
      ],
      examples: [
        {
          jp: '音楽を 聞きながら 食事します。',
          romaji: 'Ongaku o kikinagara shokuji shimasu.',
          meaning: { en: 'I eat while listening to music.', vi: 'Tôi vừa ăn vừa nghe nhạc.' },
          ruby: [
            { base: '音', reading: 'おん' },
            { base: '楽', reading: 'がく' },
            { base: '聞', reading: 'き' },
            { base: '食', reading: 'しょく' },
            { base: '事', reading: 'じ' }
          ]
        },
        {
          jp: '運転する とき、眠くなったら ガムを かみます。',
          romaji: 'Unten suru toki, nemukunattara gamu o kamimasu.',
          meaning: {
            en: 'When driving, if I get sleepy I chew gum.',
            vi: 'Khi lái xe mà buồn ngủ thì tôi nhai kẹo cao su.'
          },
          ruby: [
            { base: '運', reading: 'うん' },
            { base: '転', reading: 'てん' },
            { base: '眠', reading: 'ねむ' }
          ]
        },
        {
          jp: '彼は 大学に 通いながら 働いています。',
          romaji: 'Kare wa daigaku ni kayoinagara hataraite imasu.',
          meaning: {
            en: 'He works while attending university.',
            vi: 'Anh ấy vừa đi học đại học vừa đi làm.'
          },
          ruby: [
            { base: '彼', reading: 'かれ' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '通', reading: 'かよ' },
            { base: '働', reading: 'はたら' }
          ]
        }
      ],
      answers: {
        explanation: {
          en: 'When asked whether you do two things at once, you can deny with とき: 勉強する ときは、音楽を 聞きません.',
          vi: 'Khi bị hỏi có vừa làm hai việc không, có thể phủ định với とき: 勉強する ときは、音楽を 聞きません.'
        },
        explanationRuby: [
          { base: '勉', reading: 'べん' },
          { base: '強', reading: 'きょう' },
          { base: '音', reading: 'おん' },
          { base: '楽', reading: 'がく' },
          { base: '聞', reading: 'き' }
        ],
        examples: [
          {
            jp: '音楽を 聞きながら 勉強しますか。',
            romaji: 'Ongaku o kikinagara benkyō shimasu ka.',
            meaning: {
              en: 'Do you study while listening to music?',
              vi: 'Anh/chị vừa nghe nhạc vừa học bài à?'
            },
            ruby: [
              { base: '音', reading: 'おん' },
              { base: '楽', reading: 'がく' },
              { base: '聞', reading: 'き' },
              { base: '勉', reading: 'べん' },
              { base: '強', reading: 'きょう' }
            ]
          },
          {
            jp: '……いいえ。勉強する ときは、音楽を 聞きません。',
            romaji: '……Iie. Benkyō suru toki wa, ongaku o kikimasen.',
            meaning: {
              en: '...No. When I study, I do not listen to music.',
              vi: '...Không. Lúc học bài thì tôi không nghe nhạc.'
            },
            ruby: [
              { base: '勉', reading: 'べん' },
              { base: '強', reading: 'きょう' },
              { base: '音', reading: 'おん' },
              { base: '楽', reading: 'がく' },
              { base: '聞', reading: 'き' }
            ]
          }
        ]
      }
    },
    {
      pattern: 'V-て います (habit)',
      highlights: ['て', 'い', 'ます'],
      title: { en: 'Habitual actions (〜ています)', vi: 'Thói quen (〜ています)' },
      explanation: {
        en: 'V-て います can describe a repeated habitual action: 毎朝 ジョギングを しています. For a past habit use 〜ていました: 子どもの とき、毎晩 8時に 寝ていました.',
        vi: 'V-て います diễn tả hành động lặp lại thành thói quen: 毎朝 ジョギングを しています. Thói quen quá khứ dùng 〜ていました: 子どもの とき、毎晩 8時に 寝ていました.'
      },
      explanationRuby: [
        { base: '毎', reading: 'まい' },
        { base: '朝', reading: 'あさ' },
        { base: '子', reading: 'こ' },
        { base: '毎', reading: 'まい' },
        { base: '晩', reading: 'ばん' },
        { base: '時', reading: 'じ' },
        { base: '寝', reading: 'ね' }
      ],
      examples: [
        {
          jp: '毎朝 ジョギングを しています。',
          romaji: 'Maiasa jogingu o shite imasu.',
          meaning: { en: 'I go jogging every morning.', vi: 'Tôi chạy bộ hàng sáng.' },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' }
          ]
        },
        {
          jp: '休みの 日は たいてい 絵を 描いています。',
          romaji: 'Yasumi no hi wa taitei e o kaite imasu.',
          meaning: {
            en: 'On days off I usually paint pictures.',
            vi: 'Ngày nghỉ thường thì tôi vẽ tranh.'
          },
          ruby: [
            { base: '休', reading: 'やす' },
            { base: '日', reading: 'ひ' },
            { base: '絵', reading: 'え' },
            { base: '描', reading: 'か' }
          ]
        },
        {
          jp: '将来 小説家に なりたいです。それで 今は アルバイトを しながら 小説を 書いています。',
          romaji:
            'Shōrai shōsetsuka ni naritai desu. Sore de ima wa arubaito o shinagara shōsetsu o kaite imasu.',
          meaning: {
            en: 'I want to become a novelist someday. So now I write novels while working part-time.',
            vi: 'Sau này tôi muốn trở thành tiểu thuyết gia. Vì thế bây giờ vừa viết tiểu thuyết vừa đi làm thêm.'
          },
          ruby: [
            { base: '将', reading: 'しょう' },
            { base: '来', reading: 'らい' },
            { base: '小', reading: 'しょう' },
            { base: '説', reading: 'せつ' },
            { base: '家', reading: 'か' },
            { base: '今', reading: 'いま' },
            { base: '小', reading: 'しょう' },
            { base: '説', reading: 'せつ' },
            { base: '書', reading: 'か' }
          ]
        }
      ],
      answers: {
        examples: [
          {
            jp: '休みの 日、何を していますか。',
            romaji: 'Yasumi no hi, nani o shite imasu ka.',
            meaning: {
              en: 'What do you do on your days off?',
              vi: 'Ngày nghỉ anh/chị thường làm gì?'
            },
            ruby: [
              { base: '休', reading: 'やす' },
              { base: '日', reading: 'ひ' },
              { base: '何', reading: 'なに' }
            ]
          },
          {
            jp: '……たいてい ゲームを しています。',
            romaji: '……Taitei gēmu o shite imasu.',
            meaning: { en: '...Usually I play games.', vi: '...Thông thường thì tôi chơi game.' }
          }
        ]
      }
    },
    {
      pattern: 'plain し、plain し、～',
      highlights: ['し'],
      title: {
        en: 'Listing qualities or reasons (〜し〜し)',
        vi: 'Liệt kê đặc điểm/lý do (〜し〜し)'
      },
      explanation: {
        en: 'Plain-form し lists two or more similar points about one subject (attributes) or gives multiple reasons for what follows. With が/を the particle is often dropped and も appears: 値段も 安いし、魚も 新しいし. それに adds emphasis. The conclusion may be omitted or end with から.',
        vi: 'Thể thường + し liệt kê hai hay nhiều điểm giống nhau về một chủ thể (đặc điểm) hoặc nhiều lý do cho ý sau. Với が/を thường bỏ trợ từ và dùng も: 値段も 安いし、魚も 新しいし. それに nhấn mạnh thêm. Kết luận có thể lược bỏ hoặc kết bằng から.'
      },
      explanationRuby: [
        { base: '値', reading: 'ね' },
        { base: '段', reading: 'だん' },
        { base: '安', reading: 'やす' },
        { base: '魚', reading: 'さかな' },
        { base: '新', reading: 'あたら' }
      ],
      examples: [
        {
          jp: '田中さんは まじめだし、中国語も 上手だし、それに 経験も あります。',
          romaji:
            'Tanaka-san wa majime da shi, Chūgokugo mo jōzu da shi, sore ni keiken mo arimasu.',
          meaning: {
            en: 'Mr. Tanaka is serious, good at Chinese, and furthermore has experience.',
            vi: 'Anh Tanaka nghiêm túc, tiếng Trung giỏi, hơn nữa lại có kinh nghiệm.'
          },
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '中', reading: 'ちゅう' },
            { base: '国', reading: 'ごく' },
            { base: '語', reading: 'ご' },
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' },
            { base: '経', reading: 'けい' },
            { base: '験', reading: 'けん' }
          ]
        },
        {
          jp: 'ここは 値段も 安いし、魚も 新しいし、よく 食べに 来ます。',
          romaji: 'Koko wa nedan mo yasui shi, sakana mo atarashii shi, yoku tabe ni kimasu.',
          meaning: {
            en: 'Prices here are cheap and the fish is fresh, so I come here to eat often.',
            vi: 'Ở đây giá rẻ, cá tươi, nên tôi hay đến ăn.'
          },
          ruby: [
            { base: '値', reading: 'ね' },
            { base: '段', reading: 'だん' },
            { base: '安', reading: 'やす' },
            { base: '魚', reading: 'さかな' },
            { base: '新', reading: 'あたら' },
            { base: '食', reading: 'た' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: '富士大学は 有名だし、先生も 偉いし、それに 寮も あります。',
          romaji: 'Fuji Daigaku wa yūmei da shi, sensei mo erai shi, sore ni ryō mo arimasu.',
          meaning: {
            en: 'Fuji University is famous, has great teachers, and furthermore has a dorm.',
            vi: 'Đại học Fuji nổi tiếng, có nhiều giảng viên giỏi, thêm nữa lại có ký túc xá.'
          },
          ruby: [
            { base: '富', reading: 'ふ' },
            { base: '士', reading: 'じ' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '有', reading: 'ゆう' },
            { base: '名', reading: 'めい' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '偉', reading: 'えら' },
            { base: '寮', reading: 'りょう' }
          ]
        }
      ],
      answers: {
        examples: [
          {
            jp: 'どうして この 店へ 来るんですか。',
            romaji: 'Dōshite kono mise e kuru n desu ka.',
            meaning: {
              en: 'Why do you come to this restaurant?',
              vi: 'Tại sao anh/chị đến quán này?'
            },
            ruby: [
              { base: '店', reading: 'みせ' },
              { base: '来', reading: 'く' }
            ]
          },
          {
            jp: '……ここは 値段も 安いし、魚も 新しいし……。',
            romaji: '……Koko wa nedan mo yasui shi, sakana mo atarashii shi…….',
            meaning: {
              en: '...Because prices are cheap and the fish is fresh...',
              vi: '...(Vì) ở đây giá rẻ, cá lại tươi...'
            },
            ruby: [
              { base: '値', reading: 'ね' },
              { base: '段', reading: 'だん' },
              { base: '安', reading: 'やす' },
              { base: '魚', reading: 'さかな' },
              { base: '新', reading: 'あたら' }
            ]
          },
          {
            jp: 'どうして 日本の アニメが 好きなのですか。',
            romaji: 'Dōshite Nihon no anime ga suki na no desu ka.',
            meaning: {
              en: 'Why do you like Japanese anime?',
              vi: 'Tại sao anh/chị thích anime Nhật?'
            },
            ruby: [
              { base: '日', reading: 'に' },
              { base: '本', reading: 'ほん' },
              { base: '好', reading: 'す' }
            ]
          },
          {
            jp: '……話も おもしろいし、音楽も すてきですから。',
            romaji: '……Hanashi mo omoshiroi shi, ongaku mo suteki desu kara.',
            meaning: {
              en: '...Because the stories are interesting and the music is wonderful.',
              vi: '...Vì cốt truyện hấp dẫn, âm nhạc lại hay.'
            },
            ruby: [
              { base: '話', reading: 'はな' },
              { base: '音', reading: 'おん' },
              { base: '楽', reading: 'がく' }
            ]
          }
        ]
      }
    },
    {
      pattern: 'それで',
      highlights: ['それで'],
      title: { en: 'Therefore (それで)', vi: 'Vì thế (それで)' },
      explanation: {
        en: 'それで connects a result to a cause or reason stated before it: 将来 小説家に なりたいです。それで 今は 小説を 書いています.',
        vi: 'それで nối kết quả với nguyên nhân/lý do đã nêu trước: 将来 小説家に なりたいです。それで 今は 小説を 書いています.'
      },
      explanationRuby: [
        { base: '将', reading: 'しょう' },
        { base: '来', reading: 'らい' },
        { base: '小', reading: 'しょう' },
        { base: '説', reading: 'せつ' },
        { base: '家', reading: 'か' },
        { base: '今', reading: 'いま' },
        { base: '小', reading: 'しょう' },
        { base: '説', reading: 'せつ' },
        { base: '書', reading: 'か' }
      ],
      examples: [
        {
          jp: 'ここは コーヒーも おいしいし、食事も できるし……。',
          romaji: 'Koko wa kōhī mo oishii shi, shokuji mo dekiru shi…….',
          meaning: {
            en: 'The coffee here is good, and you can eat meals too...',
            vi: 'Ở đây cà phê ngon, lại có bán cả đồ ăn...'
          },
          ruby: [
            { base: '食', reading: 'しょく' },
            { base: '事', reading: 'じ' }
          ]
        },
        {
          jp: '……それで 人気が あるんですね。',
          romaji: '……Sore de ninki ga aru n desu ne.',
          meaning: {
            en: '...So that is why it is popular.',
            vi: '...Vì thế mà được ưa chuộng nhỉ.'
          },
          ruby: [
            { base: '人', reading: 'にん' },
            { base: '気', reading: 'き' }
          ]
        }
      ]
    },
    {
      pattern: 'V-とき + particle',
      highlights: ['とき'],
      title: { en: 'Particles after とき', vi: 'Trợ từ sau とき' },
      explanation: {
        en: 'とき is a noun, so particles can follow it: 勉強する ときは、音楽を 聞きません (when studying). 疲れた ときや 寂しい とき (when tired or lonely) uses や to list times.',
        vi: 'とき là danh từ nên có thể thêm trợ từ: 勉強する ときは、音楽を 聞きません (khi học). 疲れた ときや 寂しい とき (lúc mệt hoặc buồn) dùng や liệt kê thời điểm.'
      },
      explanationRuby: [
        { base: '勉', reading: 'べん' },
        { base: '強', reading: 'きょう' },
        { base: '音', reading: 'おん' },
        { base: '楽', reading: 'がく' },
        { base: '聞', reading: 'き' },
        { base: '疲', reading: 'つか' },
        { base: '寂', reading: 'さび' }
      ],
      examples: [
        {
          jp: '勉強する ときは、音楽を 聞きません。',
          romaji: 'Benkyō suru toki wa, ongaku o kikimasen.',
          meaning: {
            en: 'When I study, I do not listen to music.',
            vi: 'Khi học bài, tôi không nghe nhạc.'
          },
          ruby: [
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' },
            { base: '音', reading: 'おん' },
            { base: '楽', reading: 'がく' },
            { base: '聞', reading: 'き' }
          ]
        },
        {
          jp: '時間の ある とき、美容院へ 行きます。',
          romaji: 'Jikan no aru toki, biyōin e ikimasu.',
          meaning: {
            en: 'When I have time, I go to the beauty salon.',
            vi: 'Lúc rảnh, tôi đi hiệu làm đẹp.'
          },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' },
            { base: '美', reading: 'び' },
            { base: '容', reading: 'よう' },
            { base: '院', reading: 'いん' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson28-event',
      title: { en: 'Community event notice', vi: 'Thông báo sự kiện cộng đồng' },
      lines: [
        {
          jp: '体育館の 入口に お知らせが ありました。',
          romaji: 'Taiikukan no iriguchi ni oshirase ga arimashita.',
          meaning: {
            en: 'There was a notice at the gym entrance.',
            vi: 'Ở cửa nhà thi đấu có thông báo.'
          },
          ruby: [
            { base: '体', reading: 'たい' },
            { base: '育', reading: 'いく' },
            { base: '館', reading: 'かん' },
            { base: '入', reading: 'い' },
            { base: '口', reading: 'ぐち' },
            { base: '知', reading: 'し' }
          ]
        },
        {
          jp: '日にちは 10月15日（土）です。イベントは 無料です。',
          romaji: 'Hinichi wa jūgatsu jūgonichi (do) desu. Ibento wa muryō desu.',
          meaning: {
            en: 'The date is October 15 (Sat). The event is free.',
            vi: 'Ngày 15 tháng 10 (thứ bảy). Sự kiện miễn phí.'
          },
          ruby: [
            { base: '日', reading: 'ひ' },
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' },
            { base: '土', reading: 'ど' },
            { base: '無', reading: 'む' },
            { base: '料', reading: 'りょう' }
          ]
        },
        {
          jp: '私は 友達を 誘って 参加しました。たいてい 家で ゲームを していますが、今日は 外で 踊りました。',
          romaji:
            'Watashi wa tomodachi o sasotte sanka shimashita. Taitei uchi de gēmu o shite imasu ga, kyō wa soto de odorimashita.',
          meaning: {
            en: 'I invited a friend and took part. I usually play games at home, but today we danced outside.',
            vi: 'Tôi rủ bạn tham gia. Thường ở nhà chơi game, nhưng hôm nay ra ngoài múa.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '誘', reading: 'さそ' },
            { base: '参', reading: 'さん' },
            { base: '加', reading: 'か' },
            { base: '家', reading: 'うち' },
            { base: '今日', reading: 'きょう' },
            { base: '外', reading: 'そと' },
            { base: '踊', reading: 'おど' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'Where was the notice posted?', vi: 'Thông báo dán ở đâu?' },
          choices: [
            { id: 'a', label: { en: 'At the gym entrance', vi: 'Cửa nhà thi đấu' } },
            { id: 'b', label: { en: 'At the beauty salon', vi: 'Hiệu làm đẹp' } },
            { id: 'c', label: { en: 'In the kitchen', vi: 'Nhà bếp' } },
            { id: 'd', label: { en: 'At a real estate office', vi: 'Công ty bất động sản' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'How much does the event cost?', vi: 'Sự kiện có mất phí không?' },
          choices: [
            { id: 'a', label: { en: 'Free', vi: 'Miễn phí' } },
            { id: 'b', label: { en: '1,000 yen', vi: '1.000 yên' } },
            { id: 'c', label: { en: 'Salary bonus', vi: 'Tiền thưởng' } },
            { id: 'd', label: { en: "Two months' rent", vi: 'Tiền thuê hai tháng' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Renting an apartment', vi: 'Thuê nhà' },
      introTerm: {
        jp: 'うちを借りる',
        ruby: [{ base: '借', reading: 'か' }]
      },
      layout: 'stacked',
      rows: [
        {
          number: '①',
          jp: '中央線',
          ruby: [
            { base: '中', reading: 'ちゅう' },
            { base: '央', reading: 'おう' },
            { base: '線', reading: 'せん' }
          ],
          meaning: { en: 'train line (Chūō Line)', vi: 'tuyến tàu (tuyến Chūō)' }
        },
        {
          number: '②',
          jp: '西荻窪駅',
          ruby: [
            { base: '西', reading: 'にし' },
            { base: '荻', reading: 'おぎ' },
            { base: '窪', reading: 'くぼ' },
            { base: '駅', reading: 'えき' }
          ],
          meaning: { en: 'nearest station (Nishi-Ogikubo)', vi: 'ga gần nhất (Nishi-Ogikubo)' }
        },
        {
          number: '③',
          jp: '徒歩5分',
          ruby: [
            { base: '徒', reading: 'と' },
            { base: '歩', reading: 'ほ' },
            { base: '分', reading: 'ふん' }
          ],
          meaning: { en: '5 minutes on foot', vi: 'đi bộ 5 phút' }
        },
        {
          number: '④',
          jp: 'マンション',
          meaning: {
            en: 'concrete apartment building (アパート = wooden low-rise; 一戸建て = detached house)',
            vi: 'chung cư bê tông (アパート = nhà gỗ 1-2 tầng; 一戸建て = nhà riêng)'
          }
        },
        {
          number: '⑤',
          jp: '築3年',
          ruby: [
            { base: '築', reading: 'ちく' },
            { base: '年', reading: 'ねん' }
          ],
          meaning: { en: 'built 3 years ago', vi: 'xây 3 năm trước' }
        },
        {
          number: '⑥',
          jp: '家賃',
          ruby: [
            { base: '家', reading: 'や' },
            { base: '賃', reading: 'ちん' }
          ],
          meaning: { en: 'rent', vi: 'tiền thuê nhà' }
        },
        {
          number: '⑦',
          jp: '敷金',
          ruby: [
            { base: '敷', reading: 'しき' },
            { base: '金', reading: 'きん' }
          ],
          meaning: {
            en: 'security deposit (partially refunded when moving out)',
            vi: 'tiền đặt cọc (trả lại một phần khi chuyển đi)'
          }
        },
        {
          number: '⑧',
          jp: '礼金',
          ruby: [
            { base: '礼', reading: 'れい' },
            { base: '金', reading: 'きん' }
          ],
          meaning: {
            en: 'key money (non-refundable gift to landlord)',
            vi: 'tiền lễ ( không hoàn lại, tặng chủ nhà)'
          }
        },
        {
          number: '⑨',
          jp: '管理費',
          ruby: [
            { base: '管', reading: 'かん' },
            { base: '理', reading: 'り' },
            { base: '費', reading: 'ひ' }
          ],
          meaning: { en: 'management fee', vi: 'phí quản lý' }
        },
        {
          number: '⑩',
          jp: '南向き',
          ruby: [
            { base: '南', reading: 'みなみ' },
            { base: '向', reading: 'む' }
          ],
          meaning: { en: 'south-facing', vi: 'hướng nam' }
        },
        {
          number: '⑪',
          jp: '10階建ての8階',
          ruby: [
            { base: '階', reading: 'かい' },
            { base: '建', reading: 'だ' },
            { base: '階', reading: 'かい' }
          ],
          meaning: { en: '8th floor of a 10-story building', vi: 'tầng 8 tòa nhà 10 tầng' }
        },
        {
          number: '⑫',
          jp: '2LDK',
          meaning: {
            en: '2 bedrooms + living/dining/kitchen',
            vi: '2 phòng ngủ + phòng khách/ăn/bếp'
          }
        },
        {
          number: '⑬',
          jp: '6畳',
          ruby: [{ base: '畳', reading: 'じょう' }],
          meaning: {
            en: '6 tatami mats (~1.62 m² each)',
            vi: '6 chiếu (1 畳 ≈ 1,62 m²)'
          }
        },
        {
          number: '⑭',
          jp: '不動産',
          ruby: [
            { base: '不', reading: 'ふ' },
            { base: '動', reading: 'どう' },
            { base: '産', reading: 'さん' }
          ],
          meaning: { en: 'real estate agency', vi: 'đại lý bất động sản' }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Floor plan terms', vi: 'Thuật ngữ sơ đồ nhà' },
      includeInQuiz: false,
      items: [
        {
          kana: 'げんかん',
          kanji: '玄関',
          romaji: 'genkan',
          meaning: { en: 'entrance (genkan)', vi: 'cửa vào (genkan)' },
          ruby: [
            { base: '玄', reading: 'げん' },
            { base: '関', reading: 'かん' }
          ]
        },
        {
          kana: 'よくしつ',
          kanji: '浴室',
          romaji: 'yokushitsu',
          meaning: { en: 'bathroom (bath room)', vi: 'phòng tắm' },
          ruby: [
            { base: '浴', reading: 'よく' },
            { base: '室', reading: 'しつ' }
          ]
        },
        {
          kana: 'わしつ',
          kanji: '和室',
          romaji: 'washitsu',
          meaning: { en: 'Japanese-style room', vi: 'phòng kiểu Nhật' },
          ruby: [
            { base: '和', reading: 'わ' },
            { base: '室', reading: 'しつ' }
          ]
        },
        {
          kana: 'ようしつ',
          kanji: '洋室',
          romaji: 'yōshitsu',
          meaning: { en: 'Western-style room', vi: 'phòng kiểu Tây' },
          ruby: [
            { base: '洋', reading: 'よう' },
            { base: '室', reading: 'しつ' }
          ]
        },
        {
          kana: 'おしいれ',
          kanji: '押入',
          romaji: 'oshiire',
          meaning: { en: 'closet (tatami room storage)', vi: 'tủ đựng đồ (phòng tatami)' },
          ruby: [
            { base: '押', reading: 'お' },
            { base: '入', reading: 'しい' }
          ]
        }
      ]
    }
  ]
};
