import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 26 (〜んです, 〜ていただけませんか, 〜たら いいですか). */
export const n4Lesson26: Lesson = {
  id: 'lesson-26',
  number: 26,
  title: {
    en: 'Explaining and asking why',
    vi: 'Giải thích và hỏi lý do'
  },
  focus: {
    en: 'Explain reasons with 〜んです, make polite requests with 〜ていただけませんか, and ask for advice with 〜たら いいですか.',
    vi: 'Giải thích lý do với 〜んです, nhờ vả lịch sự với 〜ていただけませんか, và hỏi lời khuyên với 〜たら いいですか.'
  },
  vocab: [
    {
      kana: 'みます',
      kanji: '見ます',
      romaji: 'mimasu',
      meaning: { en: 'to examine, to see (a doctor)', vi: 'khám, khám bệnh' },
      ruby: [{ base: '見', reading: 'み' }]
    },
    {
      kana: 'さがします',
      kanji: '探します',
      romaji: 'sagashimasu',
      meaning: { en: 'to look for, to search', vi: 'tìm, tìm kiếm' },
      ruby: [{ base: '探', reading: 'さが' }]
    },
    {
      kana: 'おくれます',
      kanji: '遅れます',
      romaji: 'okuremasu',
      meaning: { en: 'to be late [時間に～: for time]', vi: 'chậm, muộn [時間に～: về giờ]' },
      ruby: [{ base: '遅', reading: 'おく' }]
    },
    {
      kana: 'まにあいます',
      kanji: '間に合います',
      romaji: 'maniaimasu',
      meaning: { en: 'to be in time [時間に～: for time]', vi: 'kịp [時間に～: về giờ]' },
      ruby: [
        { base: '間', reading: 'ま' },
        { base: '合', reading: 'あ' }
      ]
    },
    {
      kana: 'やります',
      romaji: 'yarimasu',
      meaning: { en: 'to do', vi: 'làm' }
    },
    {
      kana: 'ひろいます',
      kanji: '拾います',
      romaji: 'hiroimasu',
      meaning: { en: 'to pick up', vi: 'nhặt, lượm' },
      ruby: [{ base: '拾', reading: 'ひろ' }]
    },
    {
      kana: 'れんらくします',
      kanji: '連絡します',
      romaji: 'renraku shimasu',
      meaning: { en: 'to contact, to get in touch', vi: 'liên lạc' },
      ruby: [
        { base: '連', reading: 'れん' },
        { base: '絡', reading: 'らく' }
      ]
    },
    {
      kana: 'きぶんがいい',
      kanji: '気分がいい',
      romaji: 'kibun ga ii',
      meaning: { en: 'to feel fine, to feel well', vi: 'cảm thấy khỏe, thoải mái' },
      ruby: [
        { base: '気', reading: 'き' },
        { base: '分', reading: 'ぶん' }
      ]
    },
    {
      kana: 'きぶんがわるい',
      kanji: '気分が悪い',
      romaji: 'kibun ga warui',
      meaning: { en: 'to feel unwell', vi: 'cảm thấy mệt, không khỏe' },
      ruby: [
        { base: '気', reading: 'き' },
        { base: '分', reading: 'ぶん' },
        { base: '悪', reading: 'わる' }
      ]
    },
    {
      kana: 'うんどうかい',
      kanji: '運動会',
      romaji: 'undōkai',
      meaning: { en: 'sports day, athletic meet', vi: 'hội thi thể thao' },
      ruby: [
        { base: '運', reading: 'うん' },
        { base: '動', reading: 'どう' },
        { base: '会', reading: 'かい' }
      ]
    },
    {
      kana: 'ぼんおどり',
      kanji: '盆踊り',
      romaji: 'bon odori',
      meaning: { en: 'Bon dance (festival dance)', vi: 'múa Bon' },
      ruby: [
        { base: '盆', reading: 'ぼん' },
        { base: '踊', reading: 'おど' }
      ]
    },
    {
      kana: 'フリーマーケット',
      romaji: 'furī māketto',
      meaning: { en: 'flea market', vi: 'chợ đồ cũ, chợ trời' }
    },
    {
      kana: 'ばしょ',
      kanji: '場所',
      romaji: 'basho',
      meaning: { en: 'place, location', vi: 'địa điểm, nơi' },
      ruby: [{ base: '場', reading: 'ば' }]
    },
    {
      kana: 'ボランティア',
      romaji: 'borantia',
      meaning: { en: 'volunteer', vi: 'tình nguyện viên' }
    },
    {
      kana: 'さいふ',
      kanji: '財布',
      romaji: 'saifu',
      meaning: { en: 'wallet, purse', vi: 'ví' },
      ruby: [{ base: '財', reading: 'さい' }]
    },
    {
      kana: 'ごみ',
      romaji: 'gomi',
      meaning: { en: 'trash, garbage', vi: 'rác' }
    },
    {
      kana: 'こっかいぎじどう',
      kanji: '国会議事堂',
      romaji: 'Kokkai Gijidō',
      meaning: { en: 'National Diet Building', vi: 'tòa nhà quốc hội' },
      ruby: [
        { base: '国', reading: 'こっ' },
        { base: '会', reading: 'かい' },
        { base: '議', reading: 'ぎ' },
        { base: '事', reading: 'じ' },
        { base: '堂', reading: 'どう' }
      ]
    },
    {
      kana: 'へいじつ',
      kanji: '平日',
      romaji: 'heijitsu',
      meaning: { en: 'weekday', vi: 'ngày thường' },
      ruby: [
        { base: '平', reading: 'へい' },
        { base: '日', reading: 'じつ' }
      ]
    },
    {
      kana: '～べん',
      kanji: '～弁',
      romaji: '~ben',
      meaning: { en: 'dialect of ~, ~ language', vi: 'phương ngữ ~, tiếng ~' },
      ruby: [{ base: '弁', reading: 'べん' }]
    },
    {
      kana: 'こんど',
      kanji: '今度',
      romaji: 'kondo',
      meaning: { en: 'next time, this time', vi: 'lần tới, lần này' },
      ruby: [
        { base: '今', reading: 'こん' },
        { base: '度', reading: 'ど' }
      ]
    },
    {
      kana: 'ずいぶん',
      romaji: 'zuibun',
      meaning: { en: 'quite, considerably', vi: 'khá, tương đối' }
    },
    {
      kana: 'ちょくせつ',
      kanji: '直接',
      romaji: 'chokusetsu',
      meaning: { en: 'directly', vi: 'trực tiếp' },
      ruby: [
        { base: '直', reading: 'ちょく' },
        { base: '接', reading: 'せつ' }
      ]
    },
    {
      kana: 'いつでも',
      romaji: 'itsudemo',
      meaning: { en: 'anytime, always', vi: 'lúc nào cũng' }
    },
    {
      kana: 'どこでも',
      romaji: 'dokodemo',
      meaning: { en: 'anywhere', vi: 'ở đâu cũng' }
    },
    {
      kana: 'だれでも',
      romaji: 'daredemo',
      meaning: { en: 'anyone', vi: 'ai cũng' }
    },
    {
      kana: 'なんでも',
      kanji: '何でも',
      romaji: 'nandemo',
      meaning: { en: 'anything', vi: 'cái gì cũng' },
      ruby: [{ base: '何', reading: 'なん' }]
    },
    {
      kana: 'こんな～',
      romaji: 'konna ~',
      meaning: { en: 'like this ~', vi: '~ như thế này' }
    },
    {
      kana: 'そんな～',
      romaji: 'sonna ~',
      meaning: { en: 'like that ~ (near the listener)', vi: '~ như thế đó (gần người nghe)' }
    },
    {
      kana: 'あんな～',
      romaji: 'anna ~',
      meaning: {
        en: 'like that ~ (far from both speaker and listener)',
        vi: '~ như thế kia (xa cả người nói và người nghe)'
      }
    },
    {
      kana: 'かたづけます',
      kanji: '片づけます',
      romaji: 'katazukemasu',
      meaning: {
        en: 'to be put in order, to tidy up [荷物が～: belongings]',
        vi: 'dọn dẹp gọn gàng [荷物が～: đồ đạc]'
      },
      ruby: [{ base: '片', reading: 'かた' }]
    },
    {
      kana: 'だします',
      kanji: '出します',
      romaji: 'dashimasu',
      meaning: { en: 'to put out, to take out [ごみを～: trash]', vi: 'đổ, để [ごみを～: rác]' },
      ruby: [{ base: '出', reading: 'だ' }]
    },
    {
      kana: 'もえるごみ',
      kanji: '燃えるごみ',
      romaji: 'moeru gomi',
      meaning: { en: 'burnable trash', vi: 'rác cháy được' },
      ruby: [{ base: '燃', reading: 'も' }]
    },
    {
      kana: 'おきば',
      kanji: '置き場',
      romaji: 'okiba',
      meaning: { en: 'place to put things', vi: 'nơi để' },
      ruby: [
        { base: '置', reading: 'お' },
        { base: '場', reading: 'ば' }
      ]
    },
    {
      kana: 'よこ',
      kanji: '横',
      romaji: 'yoko',
      meaning: { en: 'side, beside', vi: 'bên cạnh' },
      ruby: [{ base: '横', reading: 'よこ' }]
    },
    {
      kana: 'びん',
      kanji: '瓶',
      romaji: 'bin',
      meaning: { en: 'bottle', vi: 'chai' },
      ruby: [{ base: '瓶', reading: 'びん' }]
    },
    {
      kana: 'かん',
      kanji: '缶',
      romaji: 'kan',
      meaning: { en: 'can', vi: 'lon' },
      ruby: [{ base: '缶', reading: 'かん' }]
    },
    {
      kana: 'ガス',
      romaji: 'gasu',
      meaning: { en: 'gas', vi: 'ga' }
    },
    {
      kana: '～がいしゃ',
      kanji: '～会社',
      romaji: '~gaisha',
      meaning: { en: '~ company', vi: 'công ty ~' },
      ruby: [
        { base: '会', reading: 'がい' },
        { base: '社', reading: 'しゃ' }
      ]
    },
    {
      kana: 'うちゅう',
      kanji: '宇宙',
      romaji: 'uchū',
      meaning: { en: 'universe, space', vi: 'vũ trụ' },
      ruby: [{ base: '宇', reading: 'う' }]
    },
    {
      kana: '～さま',
      kanji: '～様',
      romaji: '~sama',
      meaning: { en: 'Mr./Mrs./Ms. ~ (honorific)', vi: 'ông/bà/ngài ~ (kính ngữ)' },
      ruby: [{ base: '様', reading: 'さま' }]
    },
    {
      kana: 'うちゅうせん',
      kanji: '宇宙船',
      romaji: 'uchūsen',
      meaning: { en: 'spaceship', vi: 'tàu vũ trụ' },
      ruby: [
        { base: '宇', reading: 'う' },
        { base: '宙', reading: 'ちゅう' },
        { base: '船', reading: 'せん' }
      ]
    },
    {
      kana: 'こわい',
      kanji: '怖い',
      romaji: 'kowai',
      meaning: { en: 'scary, frightening', vi: 'sợ, đáng sợ' },
      ruby: [{ base: '怖', reading: 'こわ' }]
    },
    {
      kana: 'うちゅうステーション',
      kanji: '宇宙ステーション',
      romaji: 'uchū sutēshon',
      meaning: { en: 'space station', vi: 'trạm vũ trụ' },
      ruby: [
        { base: '宇', reading: 'う' },
        { base: '宙', reading: 'ちゅう' }
      ]
    },
    {
      kana: 'ちがいます',
      kanji: '違います',
      romaji: 'chigaimasu',
      meaning: { en: 'to differ, to be different', vi: 'khác' },
      ruby: [{ base: '違', reading: 'ちが' }]
    },
    {
      kana: 'うちゅうひこうし',
      kanji: '宇宙飛行士',
      romaji: 'uchū hikōshi',
      meaning: { en: 'astronaut', vi: 'nhà du hành vũ trụ' },
      ruby: [
        { base: '宇', reading: 'う' },
        { base: '宙', reading: 'ちゅう' },
        { base: '飛', reading: 'ひ' },
        { base: '行', reading: 'こう' },
        { base: '士', reading: 'し' }
      ]
    }
  ],
  phrases: [
    {
      kana: 'どう したんですか。',
      romaji: 'Dō shitan desu ka.',
      meaning: { en: 'What is the matter?', vi: 'Có chuyện gì vậy?' }
    },
    {
      kana: 'どう したら いいですか。',
      romaji: 'Dō shitara ii desu ka.',
      meaning: { en: 'What should I do?', vi: 'Tôi nên làm gì?' }
    }
  ],
  conversation: [
    {
      id: 'conv-lesson26-trash',
      title: { en: 'Where to put out the trash', vi: 'Đổ rác ở đâu' },
      speakers: [
        { id: 'manager', name: '管理人' },
        { id: 'miller', name: 'ミラー' }
      ],
      lines: [
        {
          speakerId: 'manager',
          jp: 'ミラーさん、引っ越しの 荷物は もう 片づきましたか。',
          romaji: 'Mirā-san, hikkoshi no nimotsu wa mō katazukimashita ka.',
          meaning: {
            en: 'Mr. Miller, have you finished tidying your moving belongings?',
            vi: 'Anh Miller, đồ chuyển nhà dọn xong chưa?'
          },
          ruby: [
            { base: '引', reading: 'ひ' },
            { base: '越', reading: 'こ' },
            { base: '荷', reading: 'に' },
            { base: '物', reading: 'もつ' },
            { base: '片', reading: 'かた' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'はい、だいたい 終わりました。あのう、ごみを 出したいんですが、どこに 出せば いいですか。',
          romaji:
            'Hai, daitai owarimashita. Anō, gomi o dashitai n desu ga, doko ni daseba ii desu ka.',
          meaning: {
            en: 'Yes, mostly done. Um, I want to put out the trash - where should I put it?',
            vi: 'Vâng, phần lớn xong rồi. À, tôi muốn đổ rác - để ở đâu ạ?'
          },
          ruby: [
            { base: '終', reading: 'お' },
            { base: '出', reading: 'だ' },
            { base: '出', reading: 'だ' }
          ]
        },
        {
          speakerId: 'manager',
          jp: '燃えるごみは 月曜日と 木曜日の 朝です。置き場は 駐車場の 横です。',
          romaji:
            'Moeru gomi wa getsuyōbi to mokuyōbi no asa desu. Okiba wa chūshajō no yoko desu.',
          meaning: {
            en: 'Burnable trash goes out Monday and Thursday mornings. The spot is beside the parking lot.',
            vi: 'Rác cháy được thì sáng thứ hai và thứ năm. Chỗ để ở bên cạnh bãi đỗ xe.'
          },
          ruby: [
            { base: '燃', reading: 'も' },
            { base: '月', reading: 'げつ' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '木', reading: 'もく' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '朝', reading: 'あさ' },
            { base: '置', reading: 'お' },
            { base: '場', reading: 'ば' },
            { base: '駐', reading: 'ちゅう' },
            { base: '車', reading: 'しゃ' },
            { base: '場', reading: 'じょう' },
            { base: '横', reading: 'よこ' }
          ]
        },
        {
          speakerId: 'miller',
          jp: '瓶と 缶は 何曜日ですか。',
          romaji: 'Bin to kan wa nan-yōbi desu ka.',
          meaning: { en: 'What day are bottles and cans?', vi: 'Vỏ chai và lon thì thứ mấy ạ?' },
          ruby: [
            { base: '瓶', reading: 'びん' },
            { base: '缶', reading: 'かん' },
            { base: '何', reading: 'なん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          speakerId: 'manager',
          jp: '土曜日です。',
          romaji: 'Doyōbi desu.',
          meaning: { en: 'Saturday.', vi: 'Thứ bảy.' },
          ruby: [
            { base: '土', reading: 'ど' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'わかりました。それから お湯が 出ないんですが……。',
          romaji: 'Wakarimashita. Sorekara o-yu ga denai n desu ga…….',
          meaning: {
            en: 'I understand. Also, hot water is not coming out...',
            vi: 'Tôi hiểu rồi. Thêm nữa là nước nóng không chảy ra...'
          },
          ruby: [
            { base: '湯', reading: 'ゆ' },
            { base: '出', reading: 'で' }
          ]
        },
        {
          speakerId: 'manager',
          jp: 'ガス会社に 連絡すれば、すぐ 来ますよ。',
          romaji: 'Gasu-gaisha ni renraku sureba, sugu kimasu yo.',
          meaning: {
            en: 'If you contact the gas company, they will come right away.',
            vi: 'Liên lạc công ty ga thì họ đến ngay.'
          },
          ruby: [
            { base: '会', reading: 'がい' },
            { base: '社', reading: 'しゃ' },
            { base: '連', reading: 'れん' },
            { base: '絡', reading: 'らく' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'すみません、電話番号を 教えて いただけませんか。',
          romaji: 'Sumimasen, denwa bangō o oshiete itadakemasen ka.',
          meaning: {
            en: 'Excuse me, could you tell me the phone number?',
            vi: 'Xin lỗi, cho tôi xin số điện thoại được không?'
          },
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '番', reading: 'ばん' },
            { base: '号', reading: 'ごう' },
            { base: '教', reading: 'おし' }
          ]
        },
        {
          speakerId: 'manager',
          jp: 'ええ、いいですよ。',
          romaji: 'Ee, ii desu yo.',
          meaning: { en: 'Sure, no problem.', vi: 'Ừ, được rồi.' }
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'Plain form ＋ んです',
      highlights: ['ん', 'です'],
      title: { en: 'Explanatory form (〜んです)', vi: 'Thể giải thích (〜んです)' },
      explanation: {
        en: 'Plain form + んです explains a reason or background. In speech use んです; in writing use のです. Do not use it for simple facts without context (× 私は ミラーなんです).',
        vi: 'Thể thường + んです giải thích lý do hoặc bối cảnh. Nói: んです; viết: のです. Không dùng cho sự thật đơn thuần (× 私は ミラーなんです).'
      },
      explanationRuby: [{ base: '私', reading: 'わたし' }],
      examples: [
        {
          jp: '明日から 旅行に 行くんです。',
          romaji: 'Ashita kara ryokō ni iku n desu.',
          meaning: {
            en: 'From tomorrow I am going on a trip. (explaining my plans)',
            vi: 'Từ ngày mai tôi đi du lịch. (giải thích kế hoạch)'
          },
          ruby: [
            { base: '明', reading: 'あ' },
            { base: '日', reading: 'し' },
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: 'どうして 遅れたんですか。',
          romaji: 'Dōshite okureta n desu ka.',
          meaning: { en: 'Why are you late?', vi: 'Sao anh/chị đến muộn?' },
          ruby: [{ base: '遅', reading: 'おく' }]
        },
        {
          jp: 'バスが 来なかったんです。',
          romaji: 'Basu ga konakatta n desu.',
          meaning: { en: 'Because the bus did not come.', vi: 'Vì xe buýt không đến.' },
          ruby: [{ base: '来', reading: 'こ' }]
        },
        {
          jp: 'ちょっと 気分が 悪いんです。',
          romaji: 'Chotto kibun ga warui n desu.',
          meaning: { en: 'I feel a bit unwell.', vi: 'Tôi hơi mệt.' },
          ruby: [
            { base: '気', reading: 'き' },
            { base: '分', reading: 'ぶん' },
            { base: '悪', reading: 'わる' }
          ]
        },
        {
          jp: 'カラオケは 好きじゃ ないんです。',
          romaji: 'Karaoke wa suki ja nai n desu.',
          meaning: {
            en: 'It is because I do not like karaoke.',
            vi: 'Vì tôi không thích karaoke.'
          },
          ruby: [{ base: '好', reading: 'す' }]
        }
      ]
    },
    {
      pattern: 'Plain form ＋ んですが',
      highlights: ['ん', 'です', 'が'],
      title: { en: 'Softening before a request (〜んですが)', vi: 'Mở đầu nhẹ nhàng (〜んですが)' },
      explanation: {
        en: '〜んですが introduces what you want to say before a request, invitation, or permission question. When the rest is obvious, it may be left unfinished: お湯が 出ないんですが…….',
        vi: '〜んですが mở đầu trước lời nhờ, mời, hoặc xin phép. Khi phía sau đã rõ, có thể bỏ lửng: お湯が 出ないんですが…….'
      },
      explanationRuby: [
        { base: '湯', reading: 'ゆ' },
        { base: '出', reading: 'で' }
      ],
      examples: [
        {
          jp: '頭が 痛いんですが、帰っても いいですか。',
          romaji: 'Atama ga itai n desu ga, kaette mo ii desu ka.',
          meaning: {
            en: 'I have a headache - may I go home?',
            vi: 'Tôi đau đầu - về được không?'
          },
          ruby: [
            { base: '頭', reading: 'あた' },
            { base: '痛', reading: 'いた' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          jp: '来週 友達と スキーに 行くんですが、ミラーさんも いっしょに 行きませんか。',
          romaji: 'Raishū tomodachi to sukī ni iku n desu ga, Mirā-san mo issho ni ikimasen ka.',
          meaning: {
            en: 'I am going skiing with friends next week - would you like to join, Mr. Miller?',
            vi: 'Tuần sau tôi đi trượt tuyết với bạn - anh Miller đi cùng không?'
          },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '行', reading: 'い' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て いただけませんか',
      highlights: ['て', 'いただけません', 'か'],
      title: {
        en: 'Polite request (〜ていただけませんか)',
        vi: 'Nhờ vả lịch sự (〜ていただけませんか)'
      },
      explanation: {
        en: 'V-て いただけませんか is a more polite request than 〜てください: いい 先生を 紹介して いただけませんか.',
        vi: 'V-て いただけませんか lịch sự hơn 〜てください: いい 先生を 紹介して いただけませんか.'
      },
      explanationRuby: [
        { base: '先', reading: 'せん' },
        { base: '生', reading: 'せい' },
        { base: '紹', reading: 'しょう' },
        { base: '介', reading: 'かい' }
      ],
      examples: [
        {
          jp: 'レポートを 見て いただけませんか。',
          romaji: 'Repōto o mite itadakemasen ka.',
          meaning: {
            en: 'Could you please look at my report?',
            vi: 'Nhờ anh/chị xem giúp báo cáo được không?'
          },
          ruby: [{ base: '見', reading: 'み' }]
        },
        {
          jp: 'いい 先生を 紹介して いただけませんか。',
          romaji: 'Ii sensei o shōkai shite itadakemasen ka.',
          meaning: {
            en: 'Could you introduce me to a good teacher?',
            vi: 'Giới thiệu giáo viên tốt được không?'
          },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '紹', reading: 'しょう' },
            { base: '介', reading: 'かい' }
          ]
        }
      ]
    },
    {
      pattern: '疑問詞 ＋ V-たら いいですか',
      patternRuby: [{ base: '疑', reading: 'ぎ' }],
      highlights: ['たら', 'いい', 'です', 'か'],
      title: {
        en: 'Asking for advice (疑問詞 + V-たら いいですか)',
        vi: 'Hỏi lời khuyên (疑問詞 + V-たら いいですか)'
      },
      explanation: {
        en: 'Use a question word + V-たら いいですか when you want advice on what to do: どこで 買ったら いいですか. The answer often uses V-たら いいですよ.',
        vi: 'Dùng từ nghi vấn + V-たら いいですか khi muốn được khuyên nên làm gì: どこで 買ったら いいですか. Câu trả lời thường dùng V-たら いいですよ.'
      },
      explanationRuby: [{ base: '買', reading: 'か' }],
      examples: [
        {
          jp: '国会議事堂を 見学したいんですが、どう したら いいですか。',
          romaji: 'Kokkai Gijidō o kengaku shitai n desu ga, dō shitara ii desu ka.',
          meaning: {
            en: 'I want to tour the Diet Building - what should I do?',
            vi: 'Tôi muốn tham quan tòa quốc hội - phải làm sao?'
          },
          ruby: [
            { base: '国', reading: 'こっ' },
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '事', reading: 'じ' },
            { base: '堂', reading: 'どう' },
            { base: '見', reading: 'けん' },
            { base: '学', reading: 'がく' }
          ]
        },
        {
          jp: '……直接 行ったら いいですよ。平日なら いつでも 見学できます。',
          romaji: '……Chokusetsu ittara ii desu yo. Heijitsu nara itsudemo kengaku dekimasu.',
          meaning: {
            en: '...Just go directly. On weekdays you can tour anytime.',
            vi: '...Cứ đến thẳng đấy. Ngày thường lúc nào cũng tham quan được.'
          },
          ruby: [
            { base: '直', reading: 'ちょく' },
            { base: '接', reading: 'せつ' },
            { base: '行', reading: 'い' },
            { base: '平', reading: 'へい' },
            { base: '日', reading: 'じつ' },
            { base: '見', reading: 'けん' },
            { base: '学', reading: 'がく' }
          ]
        }
      ]
    },
    {
      pattern: 'N は',
      highlights: ['は'],
      title: {
        en: 'Topic marking with が-objects (N は 好き/嫌い/上手/下手)',
        vi: 'Chủ đề hóa tân ngữ が (N は 好き/嫌い/上手/下手)'
      },
      explanation: {
        en: 'A noun that would take が with 好きです, 嫌いです, 上手です, 下手です can become the topic with は: カラオケは 好きじゃ ないんです.',
        vi: 'Danh từ đi với が trong 好きです, 嫌いです, 上手です, 下手です có thể thành chủ đề với は: カラオケは 好きじゃ ないんです.'
      },
      explanationRuby: [
        { base: '好', reading: 'す' },
        { base: '嫌', reading: 'きら' },
        { base: '上', reading: 'じょう' },
        { base: '手', reading: 'ず' },
        { base: '下', reading: 'へ' },
        { base: '手', reading: 'た' },
        { base: '好', reading: 'す' }
      ],
      examples: [
        {
          jp: 'よく カラオケに 行きますか。',
          romaji: 'Yoku karaoke ni ikimasu ka.',
          meaning: { en: 'Do you often go to karaoke?', vi: 'Anh/chị hay đi karaoke không?' },
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          jp: '……いいえ、あまり 行きません。カラオケは 好きじゃ ないんです。',
          romaji: '……Iie, amari ikimasen. Karaoke wa suki ja nai n desu.',
          meaning: {
            en: '...No, not often. I do not like karaoke.',
            vi: '...Không, ít đi. Tôi không thích karaoke.'
          },
          ruby: [
            { base: '行', reading: 'い' },
            { base: '好', reading: 'す' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson26-space',
      title: { en: 'A message from space', vi: 'Thư từ vũ trụ' },
      lines: [
        {
          jp: '私は 宇宙飛行士の 星出様の 話を 聞きました。',
          romaji: 'Watashi wa uchū hikōshi no Hoshide-sama no hanashi o kikimashita.',
          meaning: {
            en: 'I listened to a talk by astronaut Mr. Hoshide.',
            vi: 'Tôi nghe buổi nói chuyện của nhà du hành vũ trụ Hoshide-sama.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '宇', reading: 'う' },
            { base: '宙', reading: 'ちゅう' },
            { base: '飛', reading: 'ひ' },
            { base: '行', reading: 'こう' },
            { base: '士', reading: 'し' },
            { base: '星', reading: 'ほし' },
            { base: '出', reading: 'で' },
            { base: '様', reading: 'さま' },
            { base: '話', reading: 'はな' },
            { base: '聞', reading: 'き' }
          ]
        },
        {
          jp: '宇宙ステーションと 地球は ずいぶん 違います。',
          romaji: 'Uchū sutēshon to chikyū wa zuibun chigaimasu.',
          meaning: {
            en: 'A space station is quite different from Earth.',
            vi: 'Trạm vũ trụ khác Trái Đất khá nhiều.'
          },
          ruby: [
            { base: '宇', reading: 'う' },
            { base: '宙', reading: 'ちゅう' },
            { base: '地', reading: 'ち' },
            { base: '球', reading: 'きゅう' },
            { base: '違', reading: 'ちが' }
          ]
        },
        {
          jp: '最初は 宇宙船に 乗るのが 怖かったんですが、今は 宇宙が 好きです。',
          romaji: 'Saisho wa uchūsen ni noru no ga kowakatta n desu ga, ima wa uchū ga suki desu.',
          meaning: {
            en: 'At first I was scared to ride a spaceship, but now I like space.',
            vi: 'Ban đầu tôi sợ lên tàu vũ trụ, nhưng bây giờ thích vũ trụ.'
          },
          ruby: [
            { base: '最', reading: 'さい' },
            { base: '初', reading: 'しょ' },
            { base: '宇', reading: 'う' },
            { base: '宙', reading: 'ちゅう' },
            { base: '船', reading: 'せん' },
            { base: '乗', reading: 'の' },
            { base: '怖', reading: 'こわ' },
            { base: '今', reading: 'いま' },
            { base: '宇', reading: 'う' },
            { base: '宙', reading: 'ちゅう' },
            { base: '好', reading: 'す' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'Who did the speaker listen to?',
            vi: 'Người nói nghe ai?'
          },
          choices: [
            { id: 'a', label: { en: 'An astronaut', vi: 'Nhà du hành vũ trụ' } },
            { id: 'b', label: { en: 'A gas company worker', vi: 'Nhân viên công ty ga' } },
            { id: 'c', label: { en: 'A building manager', vi: 'Người quản lý tòa nhà' } },
            { id: 'd', label: { en: 'A volunteer', vi: 'Tình nguyện viên' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'How did the speaker feel about riding a spaceship at first?',
            vi: 'Ban đầu người nói cảm thấy thế nào khi lên tàu vũ trụ?'
          },
          choices: [
            { id: 'a', label: { en: 'Scared', vi: 'Sợ' } },
            { id: 'b', label: { en: 'Late', vi: 'Muộn' } },
            { id: 'c', label: { en: 'In time', vi: 'Kịp giờ' } },
            { id: 'd', label: { en: 'Unwell', vi: 'Mệt' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'How to put out trash', vi: 'Cách đổ rác' },
      intro: {
        en: 'In Japan household trash is sorted and collected on set days. Rules vary by area.',
        vi: 'Ở Nhật rác sinh hoạt được phân loại và thu gom theo ngày. Quy định khác nhau theo khu vực.'
      },
      introTerm: {
        jp: 'ごみの出し方',
        ruby: [
          { base: '出', reading: 'だ' },
          { base: '方', reading: 'かた' }
        ]
      },
      layout: 'stacked-2col',
      rows: [
        {
          number: '月・木',
          numberRuby: [
            { base: '月', reading: 'げつ' },
            { base: '木', reading: 'もく' }
          ],
          jp: '燃えるごみ',
          ruby: [{ base: '燃', reading: 'も' }],
          meaning: {
            en: 'Burnable trash (food scraps, paper, etc.)',
            vi: 'Rác cháy được (rác tươi, giấy vụn, v.v.)'
          }
        },
        {
          number: '水',
          numberRuby: [{ base: '水', reading: 'すい' }],
          jp: '燃えないごみ',
          ruby: [{ base: '燃', reading: 'も' }],
          meaning: {
            en: 'Non-burnable trash (glass, ceramics, metal kitchenware)',
            vi: 'Rác không cháy (thủy tinh, đồ sứ, dụng cụ kim loại)'
          }
        },
        {
          number: '第2・第4火',
          numberRuby: [
            { base: '第', reading: 'だい' },
            { base: '第', reading: 'だい' },
            { base: '火', reading: 'か' }
          ],
          jp: '資源ごみ',
          ruby: [
            { base: '資', reading: 'し' },
            { base: '源', reading: 'げん' }
          ],
          meaning: {
            en: 'Recyclables (cans, bottles, PET bottles)',
            vi: 'Rác tái chế (lon, chai, chai nhựa PET)'
          }
        },
        {
          number: '要申込',
          numberRuby: [
            { base: '要', reading: 'よう' },
            { base: '申', reading: 'もう' },
            { base: '込', reading: 'こ' }
          ],
          jp: '粗大ごみ',
          ruby: [
            { base: '粗', reading: 'そ' },
            { base: '大', reading: 'だい' }
          ],
          meaning: {
            en: 'Oversized trash (furniture, bicycles; register in advance)',
            vi: 'Rác cồng kềnh (đồ nội thất, xe đạp; đăng ký trước)'
          }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Proper nouns', vi: 'Tên riêng' },
      includeInQuiz: false,
      items: [
        {
          kana: 'エドヤストア',
          romaji: 'Edo-ya Store',
          meaning: {
            en: 'Edo-ya Store (fictional shop name)',
            vi: 'Cửa hàng Edo-ya (tên giả định)'
          }
        },
        {
          kana: 'ほしで あきひこ',
          kanji: '星出 彰彦',
          romaji: 'Hoshide Akihiko',
          meaning: {
            en: 'Akihiko Hoshide (Japanese astronaut, b. 1968)',
            vi: 'Hoshide Akihiko (nhà du hành vũ trụ Nhật, sinh 1968)'
          },
          ruby: [
            { base: '星', reading: 'ほし' },
            { base: '出', reading: 'で' },
            { base: '彰', reading: 'あき' },
            { base: '彦', reading: 'ひこ' }
          ]
        }
      ]
    }
  ]
};
