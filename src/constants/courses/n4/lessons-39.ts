import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 39 (から/ので, 途中で, feelings). */
export const n4Lesson39: Lesson = {
  id: 'lesson-39',
  number: 39,
  title: {
    en: 'Reasons and feelings',
    vi: 'Lý do và cảm xúc'
  },
  focus: {
    en: 'Give reasons with から and ので, explain delays with 途中で, and describe emotions with ～て form adjectives.',
    vi: 'Nêu lý do với から và ので, giải thích trễ với 途中で, và mô tả cảm xúc bằng tính từ dạng ～て.'
  },
  vocab: [
    {
      kana: 'こたえます',
      kanji: '答えます',
      romaji: 'kotaemasu',
      meaning: { en: 'to answer [質問に～: a question]', vi: 'trả lời [câu hỏi]' },
      ruby: [{ base: '答', reading: 'こた' }]
    },
    {
      kana: 'たおれます',
      kanji: '倒れます',
      romaji: 'taoremasu',
      meaning: { en: 'to fall down [ビルが～: a building]', vi: 'đổ [tòa nhà ~]' },
      ruby: [{ base: '倒', reading: 'たお' }]
    },
    {
      kana: 'とおります',
      kanji: '通ります',
      romaji: 'tōrimasu',
      meaning: { en: 'to pass through [道を～: a road]', vi: 'đi (xuyên) qua [đường]' },
      ruby: [{ base: '通', reading: 'とお' }]
    },
    {
      kana: 'しにます',
      kanji: '死にます',
      romaji: 'shinimasu',
      meaning: { en: 'to die', vi: 'chết' },
      ruby: [{ base: '死', reading: 'し' }]
    },
    {
      kana: 'びっくりします',
      romaji: 'bikkuri shimasu',
      meaning: { en: 'to be surprised, startled', vi: 'giật mình' }
    },
    {
      kana: 'がっかりします',
      romaji: 'gakkari shimasu',
      meaning: { en: 'to be disappointed', vi: 'thất vọng' }
    },
    {
      kana: 'あんしんします',
      kanji: '安心します',
      romaji: 'anshin shimasu',
      meaning: { en: 'to feel relieved', vi: 'yên tâm' },
      ruby: [
        { base: '安', reading: 'あん' },
        { base: '心', reading: 'しん' }
      ]
    },
    {
      kana: 'けんかします',
      romaji: 'kenka shimasu',
      meaning: { en: 'to quarrel', vi: 'cãi nhau' }
    },
    {
      kana: 'りこんします',
      kanji: '離婚します',
      romaji: 'rikon shimasu',
      meaning: { en: 'to divorce', vi: 'ly hôn' },
      ruby: [
        { base: '離', reading: 'り' },
        { base: '婚', reading: 'こん' }
      ]
    },
    {
      kana: 'ふとります',
      kanji: '太ります',
      romaji: 'futorimasu',
      meaning: { en: 'to gain weight', vi: 'béo ra' },
      ruby: [{ base: '太', reading: 'ふと' }]
    },
    {
      kana: 'やせます',
      romaji: 'yasemasu',
      meaning: { en: 'to lose weight', vi: 'gầy đi' }
    },
    {
      kana: 'ふくざつ',
      kanji: '複雑',
      romaji: 'fukuzatsu',
      meaning: { en: 'complicated (na-adj)', vi: 'phức tạp (tính từ な)' },
      ruby: [
        { base: '複', reading: 'ふく' },
        { base: '雑', reading: 'ざつ' }
      ]
    },
    {
      kana: 'じゃま',
      kanji: '邪魔',
      romaji: 'jama',
      meaning: { en: 'in the way (na-adj)', vi: 'vướng, vướng víu (tính từ な)' },
      ruby: [
        { base: '邪', reading: 'じゃ' },
        { base: '魔', reading: 'ま' }
      ]
    },
    {
      kana: 'かたい',
      kanji: '硬い',
      romaji: 'katai',
      meaning: { en: 'hard, stiff', vi: 'cứng' },
      ruby: [{ base: '硬', reading: 'かた' }]
    },
    {
      kana: 'やわらかい',
      kanji: '軟らかい',
      romaji: 'yawarakai',
      meaning: { en: 'soft', vi: 'mềm' },
      ruby: [{ base: '軟', reading: 'やわら' }]
    },
    {
      kana: 'きたない',
      kanji: '汚い',
      romaji: 'kitanai',
      meaning: { en: 'dirty', vi: 'bẩn' },
      ruby: [{ base: '汚', reading: 'きた' }]
    },
    {
      kana: 'うれしい',
      romaji: 'ureshii',
      meaning: { en: 'happy, glad', vi: 'vui, mừng' }
    },
    {
      kana: 'かなしい',
      kanji: '悲しい',
      romaji: 'kanashii',
      meaning: { en: 'sad', vi: 'buồn' },
      ruby: [{ base: '悲', reading: 'かな' }]
    },
    {
      kana: 'はずかしい',
      kanji: '恥ずかしい',
      romaji: 'hazukashii',
      meaning: { en: 'embarrassed, shy', vi: 'xấu hổ, ngượng' },
      ruby: [{ base: '恥', reading: 'はず' }]
    },
    {
      kana: 'しゅしょう',
      kanji: '首相',
      romaji: 'shushō',
      meaning: { en: 'prime minister', vi: 'thủ tướng' },
      ruby: [
        { base: '首', reading: 'しゅ' },
        { base: '相', reading: 'しょう' }
      ]
    },
    {
      kana: 'じしん',
      kanji: '地震',
      romaji: 'jishin',
      meaning: { en: 'earthquake', vi: 'động đất' },
      ruby: [
        { base: '地', reading: 'じ' },
        { base: '震', reading: 'しん' }
      ]
    },
    {
      kana: 'つなみ',
      kanji: '津波',
      romaji: 'tsunami',
      meaning: { en: 'tsunami', vi: 'sóng thần' },
      ruby: [
        { base: '津', reading: 'つ' },
        { base: '波', reading: 'なみ' }
      ]
    },
    {
      kana: 'たいふう',
      kanji: '台風',
      romaji: 'taifū',
      meaning: { en: 'typhoon', vi: 'bão' },
      ruby: [
        { base: '台', reading: 'たい' },
        { base: '風', reading: 'ふう' }
      ]
    },
    {
      kana: 'かみなり',
      kanji: '雷',
      romaji: 'kaminari',
      meaning: { en: 'thunder, lightning', vi: 'sấm' },
      ruby: [{ base: '雷', reading: 'かみな' }]
    },
    {
      kana: 'かじ',
      kanji: '火事',
      romaji: 'kaji',
      meaning: { en: 'fire (disaster)', vi: 'hỏa hoạn' },
      ruby: [
        { base: '火', reading: 'か' },
        { base: '事', reading: 'じ' }
      ]
    },
    {
      kana: 'じこ',
      kanji: '事故',
      romaji: 'jiko',
      meaning: { en: 'accident', vi: 'tai nạn, sự cố' },
      ruby: [
        { base: '事', reading: 'じ' },
        { base: '故', reading: 'こ' }
      ]
    },
    {
      kana: 'ハイキング',
      romaji: 'haikingu',
      meaning: { en: 'hiking', vi: 'dã ngoại' }
    },
    {
      kana: 'おみあい',
      kanji: 'お見合い',
      romaji: 'o-miai',
      meaning: { en: 'formal marriage meeting', vi: 'xem mặt (để kết hôn)' },
      ruby: [
        { base: '見', reading: 'み' },
        { base: '合', reading: 'あ' }
      ]
    },
    {
      kana: 'そうさ',
      kanji: '操作',
      romaji: 'sōsa',
      meaning: { en: 'operation, handling', vi: 'thao tác' },
      ruby: [{ base: '操', reading: 'そう' }]
    },
    {
      kana: 'かいじょう',
      kanji: '会場',
      romaji: 'kaijō',
      meaning: { en: 'venue, hall', vi: 'hội trường' },
      ruby: [
        { base: '会', reading: 'かい' },
        { base: '場', reading: 'じょう' }
      ]
    },
    {
      kana: '～だい',
      kanji: '～代',
      romaji: '~dai',
      meaning: { en: 'fee, charge', vi: 'phí ~, tiền ~' },
      ruby: [{ base: '代', reading: 'だい' }]
    },
    {
      kana: '～や',
      kanji: '～屋',
      romaji: '~ya',
      meaning: { en: '~ shop, ~ seller', vi: 'người bán ~, cửa hàng ~' },
      ruby: [{ base: '屋', reading: 'や' }]
    },
    {
      kana: 'フロント',
      romaji: 'furonto',
      meaning: { en: 'front desk, reception', vi: 'lễ tân' }
    },
    {
      kana: 'とちゅうで',
      kanji: '途中で',
      romaji: 'tochū de',
      meaning: { en: 'on the way, midway', vi: 'trên đường, giữa chừng' },
      ruby: [
        { base: '途', reading: 'と' },
        { base: '中', reading: 'ちゅう' }
      ]
    },
    {
      kana: 'ぶつかります',
      romaji: 'butsukarimasu',
      meaning: { en: 'to collide, to crash into', vi: 'đâm nhau, va chạm' }
    },
    {
      kana: 'おつかれさまでした',
      kanji: 'お疲れさまでした',
      romaji: 'Otsukaresama deshita',
      meaning: {
        en: 'Thank you for your hard work (to colleagues)',
        vi: 'Anh/chị đã vất vả quá'
      },
      ruby: [{ base: '疲', reading: 'つか' }]
    },
    {
      kana: 'うかがいます',
      kanji: '伺います',
      romaji: 'ukagaimasu',
      meaning: { en: 'to visit (humble)', vi: 'Tôi sẽ đến chỗ anh/chị ạ' },
      ruby: [{ base: '伺', reading: 'うかが' }]
    }
  ],
  phrases: [
    {
      kana: '遅刻 して すみません。',
      kanji: '遅刻 して すみません。',
      romaji: 'Chikoku shite sumimasen.',
      meaning: { en: 'Sorry I am late.', vi: 'Xin lỗi tôi đến muộn.' },
      ruby: [
        { base: '遅', reading: 'ち' },
        { base: '刻', reading: 'こく' }
      ]
    },
    {
      kana: 'おつかれさまでした。',
      kanji: 'お疲れさまでした。',
      romaji: 'Otsukaresama deshita.',
      meaning: { en: 'Thank you for your hard work.', vi: 'Anh/chị đã vất vả quá.' },
      ruby: [{ base: '疲', reading: 'つか' }]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson39-late',
      title: { en: 'Sorry for being late', vi: 'Xin lỗi vì đến muộn' },
      speakers: [
        { id: 'miller', name: 'ミラー' },
        { id: 'nakamura', name: '中村部長' }
      ],
      lines: [
        {
          speakerId: 'miller',
          jp: '部長、遅刻 して すみません。',
          romaji: 'Buchō, chikoku shite sumimasen.',
          meaning: {
            en: 'Department head, I am sorry I am late.',
            vi: 'Trưởng phòng, xin lỗi tôi đến muộn.'
          },
          ruby: [
            { base: '部', reading: 'ぶ' },
            { base: '長', reading: 'ちょう' },
            { base: '遅', reading: 'ち' },
            { base: '刻', reading: 'こく' }
          ]
        },
        {
          speakerId: 'nakamura',
          jp: 'ミラーさん、どう しましたか。',
          romaji: 'Mirā-san, dō shimashita ka.',
          meaning: { en: 'Mr. Miller, what happened?', vi: 'Anh Miller, có chuyện gì thế?' }
        },
        {
          speakerId: 'miller',
          jp: '途中で 事故が あって、バスが 遅れた んです。',
          romaji: 'Tochū de jiko ga atte, basu ga okureta n desu.',
          meaning: {
            en: 'There was an accident on the way, so the bus was delayed.',
            vi: 'Trên đường có tai nạn nên xe buýt bị trễ.'
          },
          ruby: [
            { base: '途', reading: 'と' },
            { base: '中', reading: 'ちゅう' },
            { base: '事', reading: 'じ' },
            { base: '故', reading: 'こ' },
            { base: '遅', reading: 'おく' }
          ]
        },
        {
          speakerId: 'nakamura',
          jp: 'バスの 事故 ですか。',
          romaji: 'Basu no jiko desu ka.',
          meaning: { en: 'A bus accident?', vi: 'Tai nạn xe buýt à?' },
          ruby: [
            { base: '事', reading: 'じ' },
            { base: '故', reading: 'こ' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'いいえ。トラックと 車が ぶつかって、道が 通れなく なった んです。',
          romaji: 'Iie. Torakku to kuruma ga butsukatte, michi ga tōrenaku natta n desu.',
          meaning: {
            en: 'No. A truck and a car collided, and the road became blocked.',
            vi: 'Không. Xe tải và xe ô tô đâm nhau nên đường không đi được.'
          },
          ruby: [
            { base: '車', reading: 'くるま' },
            { base: '道', reading: 'みち' },
            { base: '通', reading: 'とお' }
          ]
        },
        {
          speakerId: 'nakamura',
          jp: 'それは 大変 でしたね。連絡が 取れなく て、心配 しましたよ。',
          romaji: 'Sore wa taihen deshita ne. Renraku ga torenakute, shinpai shimashita yo.',
          meaning: {
            en: 'That must have been tough. We could not reach you and were worried.',
            vi: 'Vậy thì vất vả nhỉ. Không liên lạc được nên mọi người lo lắng.'
          },
          ruby: [
            { base: '大', reading: 'たい' },
            { base: '変', reading: 'へん' },
            { base: '連', reading: 'れん' },
            { base: '絡', reading: 'らく' },
            { base: '心', reading: 'しん' },
            { base: '配', reading: 'ぱい' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'すみません。電話が 家に 忘れて しまって……。',
          romaji: 'Sumimasen. Denwa ga ie ni wasurete shimatte…….',
          meaning: {
            en: 'I am sorry. I left my phone at home...',
            vi: 'Xin lỗi. Tôi để quên điện thoại ở nhà...'
          },
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '家', reading: 'いえ' },
            { base: '忘', reading: 'わす' }
          ]
        },
        {
          speakerId: 'nakamura',
          jp: 'わかりました。では 会議を 始めましょう。',
          romaji: 'Wakarimashita. De wa kaigi o hajimemashō.',
          meaning: {
            en: 'I understand. Well, let us start the meeting.',
            vi: 'Được rồi. Thôi, chúng ta bắt đầu cuộc họp thôi.'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '始', reading: 'はじ' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'Sentence から、Sentence',
      highlights: ['から'],
      title: { en: 'Reason with から (plain form)', vi: 'Lý do với から (thể thường)' },
      explanation: {
        en: 'Attach から to a reason clause; the result follows: 道が 込んで いる から、バスが 遅れます. Use plain form before から (i-adj drop い, na-adj + な, nouns + な/の).',
        vi: 'Gắn から vào mệnh đề lý do; kết quả đứng sau: 道が 込んで いる から、バスが 遅れます. Trước から dùng thể thường (tính từ い bỏ い, な + な, danh từ + な/の).'
      },
      explanationRuby: [
        { base: '道', reading: 'みち' },
        { base: '込', reading: 'こ' },
        { base: '遅', reading: 'おく' }
      ],
      examples: [
        {
          jp: 'お知らせを 聞いて、びっくり しました。',
          romaji: 'Oshirase o kiite, bikkuri shimashita.',
          meaning: {
            en: 'I was surprised when I heard the news.',
            vi: 'Tôi ngạc nhiên khi nghe tin.'
          },
          ruby: [
            { base: '知', reading: 'し' },
            { base: '聞', reading: 'き' }
          ]
        },
        {
          jp: '体調が よくない から、病院へ 行きます。',
          romaji: 'Taichō ga yokunai kara, byōin e ikimasu.',
          meaning: {
            en: 'Because I do not feel well, I am going to the hospital.',
            vi: 'Vì trong người không khỏe nên tôi đi bệnh viện.'
          },
          ruby: [
            { base: '体', reading: 'たい' },
            { base: '調', reading: 'ちょう' },
            { base: '病', reading: 'びょう' },
            { base: '院', reading: 'いん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '地震で ビルが 倒れました。',
          romaji: 'Jishin de biru ga taoremashita.',
          meaning: { en: 'A building collapsed in the earthquake.', vi: 'Tòa nhà đổ do động đất.' },
          ruby: [
            { base: '地', reading: 'じ' },
            { base: '震', reading: 'しん' },
            { base: '倒', reading: 'たお' }
          ]
        }
      ]
    },
    {
      pattern: 'Sentence ので、Sentence',
      highlights: ['ので'],
      title: { en: 'Reason with ので (softer)', vi: 'Lý do với ので (nhẹ nhàng hơn)' },
      explanation: {
        en: 'ので states a reason more softly than から - good for excuses and polite explanations: 用事が ある ので、先に 帰ります.',
        vi: 'ので nêu lý do nhẹ nhàng hơn から - phù hợp xin phép, giải thích lịch sự: 用事が ある ので、先に 帰ります.'
      },
      explanationRuby: [
        { base: '用', reading: 'よう' },
        { base: '事', reading: 'じ' },
        { base: '先', reading: 'さき' },
        { base: '帰', reading: 'かえ' }
      ],
      examples: [
        {
          jp: '日本語が わからない ので、英語で 話して もらえますか。',
          romaji: 'Nihongo ga wakarimasen no de, eigo de hanashite moraemasu ka.',
          meaning: {
            en: 'I do not understand Japanese, so could you speak English?',
            vi: 'Vì tôi không hiểu tiếng Nhật, anh/chị nói tiếng Anh được không?'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '分', reading: 'わ' },
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' },
            { base: '話', reading: 'はな' }
          ]
        },
        {
          jp: '用事が ある ので、先に 失礼 します。',
          romaji: 'Yōji ga aru no de, saki ni shitsurei shimasu.',
          meaning: {
            en: 'I have something to do, so excuse me for leaving first.',
            vi: 'Vì có việc bận nên tôi xin phép về trước.'
          },
          ruby: [
            { base: '用', reading: 'よう' },
            { base: '事', reading: 'じ' },
            { base: '先', reading: 'さき' },
            { base: '失', reading: 'しつ' },
            { base: '礼', reading: 'れい' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て / i-adj くて / na-adj で / N で',
      highlights: ['て', 'で'],
      title: { en: 'Emotion and state clauses', vi: 'Mệnh đề cảm xúc và trạng thái' },
      explanation: {
        en: 'Emotion verbs and adjectives link with て/で to show resulting state: うれしくて 泣きました, 複雑で よく わかりません. Not for volition in the second clause.',
        vi: 'Động từ/tính từ cảm xúc nối bằng て/で để chỉ trạng thái kết quả: うれしくて 泣きました, 複雑で よく わかりません. Mệnh đề sau không mang ý chí.'
      },
      explanationRuby: [
        { base: '泣', reading: 'な' },
        { base: '複', reading: 'ふく' },
        { base: '雑', reading: 'ざつ' },
        { base: '分', reading: 'わ' }
      ],
      examples: [
        {
          jp: '紹介された 人は 写真では 魅力的 だった のに、会ったら がっかり しました。',
          romaji:
            'Shōkai sareta hito wa shashin de wa miryokuteki datta noni, attara gakkari shimashita.',
          meaning: {
            en: 'The person I was introduced to looked attractive in photos, but I was disappointed when we met.',
            vi: 'Người được giới thiệu trong ảnh hấp dẫn, nhưng gặp thì thất vọng.'
          },
          ruby: [
            { base: '紹', reading: 'しょう' },
            { base: '介', reading: 'かい' },
            { base: '人', reading: 'ひと' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '会', reading: 'あ' }
          ]
        }
      ]
    },
    {
      pattern: '途中で',
      highlights: ['途中', 'で'],
      title: { en: 'On the way (途中で)', vi: 'Trên đường (途中で)' },
      explanation: {
        en: '途中で marks something happening while going somewhere: 来る 途中で 事故が ありました. Similar to 道で but emphasizes mid-route.',
        vi: '途中で đánh dấu việc xảy ra khi đang đi: 来る 途中で 事故が ありました. Gần nghĩa 道で nhưng nhấn giữa lộ trình.'
      },
      explanationRuby: [
        { base: '途', reading: 'と' },
        { base: '中', reading: 'ちゅう' },
        { base: '来', reading: 'き' },
        { base: '事', reading: 'じ' },
        { base: '故', reading: 'こ' }
      ],
      examples: [
        {
          jp: 'マラソンの 途中で 足が 痛く なりました。',
          romaji: 'Marason no tochū de ashi ga itaku narimashita.',
          meaning: {
            en: 'My legs started hurting midway through the marathon.',
            vi: 'Tôi thấy khó chịu khi đang chạy ma-ra-tông giữa chừng.'
          },
          ruby: [
            { base: '途', reading: 'と' },
            { base: '中', reading: 'ちゅう' },
            { base: '足', reading: 'あし' },
            { base: '痛', reading: 'いた' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson39-feelings',
      title: { en: 'News that moves you', vi: 'Tin tức làm bạn bất ngờ' },
      lines: [
        {
          jp: '首相の 演説を 聞いて、安心 しました。',
          romaji: 'Shushō no enzetsu o kiite, anshin shimashita.',
          meaning: {
            en: "I felt relieved after hearing the prime minister's speech.",
            vi: 'Nghe bài phát biểu của thủ tướng, tôi yên tâm.'
          },
          ruby: [
            { base: '首', reading: 'しゅ' },
            { base: '相', reading: 'しょう' },
            { base: '演', reading: 'えん' },
            { base: '説', reading: 'ぜつ' },
            { base: '聞', reading: 'き' },
            { base: '安', reading: 'あん' },
            { base: '心', reading: 'しん' }
          ]
        },
        {
          jp: 'でも 内容が 複雑で、よく 理解 できませんでした。',
          romaji: 'Demo naiyō ga fukuzatsude, yoku rikai dekimasen deshita.',
          meaning: {
            en: 'But the content was complicated and I could not understand it well.',
            vi: 'Nhưng nội dung phức tạp nên tôi không hiểu lắm.'
          },
          ruby: [
            { base: '内', reading: 'ない' },
            { base: '容', reading: 'よう' },
            { base: '複', reading: 'ふく' },
            { base: '雑', reading: 'ざつ' },
            { base: '理', reading: 'り' },
            { base: '解', reading: 'かい' }
          ]
        },
        {
          jp: '台風の ニュースでは、海岸の 町が 心配 です。',
          romaji: 'Taifū no nyūsu de wa, kaigan no machi ga shinpai desu.',
          meaning: {
            en: 'In typhoon news, I worry about towns on the coast.',
            vi: 'Trong tin bão, tôi lo cho các thị trấn ven biển.'
          },
          ruby: [
            { base: '台', reading: 'たい' },
            { base: '風', reading: 'ふう' },
            { base: '海', reading: 'かい' },
            { base: '岸', reading: 'がん' },
            { base: '町', reading: 'まち' },
            { base: '心', reading: 'しん' },
            { base: '配', reading: 'ぱい' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'How did the speaker feel about the speech at first?',
            vi: 'Người nói ban đầu cảm thấy thế nào về bài phát biểu?'
          },
          choices: [
            { id: 'a', label: { en: 'Relieved', vi: 'Yên tâm' } },
            { id: 'b', label: { en: 'Disappointed', vi: 'Thất vọng' } },
            { id: 'c', label: { en: 'Angry', vi: 'Tức giận' } },
            { id: 'd', label: { en: 'Embarrassed', vi: 'Xấu hổ' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'Why could the speaker not understand well?',
            vi: 'Vì sao người nói không hiểu rõ?'
          },
          choices: [
            { id: 'a', label: { en: 'The content was complicated', vi: 'Nội dung phức tạp' } },
            { id: 'b', label: { en: 'There was no news', vi: 'Không có tin tức' } },
            { id: 'c', label: { en: 'The coast was closed', vi: 'Bờ biển đóng cửa' } },
            { id: 'd', label: { en: 'They went hiking', vi: 'Họ đi dã ngoại' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Feelings (気持ち)', vi: 'Tâm trạng' },
      introTerm: {
        jp: '気持ち',
        ruby: [
          { base: '気', reading: 'き' },
          { base: '持', reading: 'も' }
        ]
      },
      layout: 'stacked',
      rows: [
        {
          jp: 'うれしい',
          meaning: { en: 'happy, glad', vi: 'vui, mừng' }
        },
        {
          jp: '楽しい',
          ruby: [{ base: '楽', reading: 'たの' }],
          meaning: { en: 'fun, enjoyable', vi: 'vui vẻ' }
        },
        {
          jp: '悲しい',
          ruby: [{ base: '悲', reading: 'かな' }],
          meaning: { en: 'sad', vi: 'buồn, đau thương' }
        },
        {
          jp: 'びっくりする',
          meaning: { en: 'to be surprised', vi: 'ngạc nhiên, giật mình' }
        },
        {
          jp: 'がっかりする',
          meaning: { en: 'to be disappointed', vi: 'thất vọng' }
        },
        {
          jp: 'はらはらする',
          meaning: { en: 'to feel anxious watching', vi: 'sợ, run (khi theo dõi)' }
        }
      ]
    }
  ]
};
