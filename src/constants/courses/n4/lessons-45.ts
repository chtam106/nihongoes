import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 45 (〜場合は, 〜のに). */
export const n4Lesson45: Lesson = {
  id: 'lesson-45',
  number: 45,
  title: {
    en: 'In case and although',
    vi: 'Trong trường hợp và mặc dù'
  },
  focus: {
    en: 'Give instructions for a situation with 〜場合は and express contrast between expectation and result with 〜のに.',
    vi: 'Hướng dẫn trong tình huống với 〜場合は và nêu sự tương phản giữa kỳ vọng và kết quả với 〜のに.'
  },
  vocab: [
    {
      kana: 'しんじます',
      kanji: '信じます',
      romaji: 'shinjimasu',
      meaning: { en: 'to believe', vi: 'tin' },
      ruby: [{ base: '信', reading: 'しん' }]
    },
    {
      kana: 'キャンセルします',
      romaji: 'kyanseru shimasu',
      meaning: { en: 'to cancel', vi: 'hủy' }
    },
    {
      kana: 'しらせます',
      kanji: '知らせます',
      romaji: 'shirasemasu',
      meaning: { en: 'to notify, to inform', vi: 'thông báo' },
      ruby: [{ base: '知', reading: 'し' }]
    },
    {
      kana: 'ほしょうしょ',
      kanji: '保証書',
      romaji: 'hoshōsho',
      meaning: { en: 'warranty card', vi: 'phiếu bảo hành' },
      ruby: [
        { base: '保', reading: 'ほ' },
        { base: '証', reading: 'しょう' },
        { base: '書', reading: 'しょ' }
      ]
    },
    {
      kana: 'りょうしゅうしょ',
      kanji: '領収書',
      romaji: 'ryōshūsho',
      meaning: { en: 'receipt', vi: 'hóa đơn, biên lai' },
      ruby: [
        { base: '領', reading: 'りょう' },
        { base: '収', reading: 'しゅう' },
        { base: '書', reading: 'しょ' }
      ]
    },
    {
      kana: 'キャンプ',
      romaji: 'kyanpu',
      meaning: { en: 'camp, camping', vi: 'cắm trại' }
    },
    {
      kana: 'ちゅうし',
      kanji: '中止',
      romaji: 'chūshi',
      meaning: { en: 'cancellation', vi: 'hủy bỏ' },
      ruby: [
        { base: '中', reading: 'ちゅう' },
        { base: '止', reading: 'し' }
      ]
    },
    {
      kana: 'てん',
      kanji: '点',
      romaji: 'ten',
      meaning: { en: 'point, score', vi: 'điểm, điểm số' },
      ruby: [{ base: '点', reading: 'てん' }]
    },
    {
      kana: 'うめ',
      kanji: '梅',
      romaji: 'ume',
      meaning: { en: 'plum, plum blossom', vi: 'hoa mơ, mơ' },
      ruby: [{ base: '梅', reading: 'うめ' }]
    },
    {
      kana: '110ばん',
      kanji: '110番',
      romaji: '110-ban',
      meaning: { en: '110 (police emergency number)', vi: '110 (số báo cảnh sát khẩn cấp)' },
      ruby: [{ base: '番', reading: 'ばん' }]
    },
    {
      kana: '119ばん',
      kanji: '119番',
      romaji: '119-ban',
      meaning: { en: '119 (fire/ambulance emergency number)', vi: '119 (số báo cháy khẩn cấp)' },
      ruby: [{ base: '番', reading: 'ばん' }]
    },
    {
      kana: 'きゅうに',
      kanji: '急に',
      romaji: 'kyū ni',
      meaning: { en: 'suddenly', vi: 'đột nhiên' },
      ruby: [{ base: '急', reading: 'きゅう' }]
    },
    {
      kana: 'むりに',
      kanji: '無理に',
      romaji: 'muri ni',
      meaning: { en: 'unreasonably, by force', vi: 'cố, gắng (làm không hợp lý)' },
      ruby: [{ base: '無', reading: 'む' }]
    },
    {
      kana: 'たのしみに しています',
      kanji: '楽しみに しています',
      romaji: 'tanoshimi ni shite imasu',
      meaning: { en: 'I am looking forward to it', vi: 'tôi rất mong chờ' },
      ruby: [{ base: '楽', reading: 'たの' }]
    },
    {
      kana: 'いじょうです。',
      kanji: '以上です。',
      romaji: 'ijō desu.',
      meaning: { en: 'That is all.', vi: 'Xin hết.' },
      ruby: [
        { base: '以', reading: 'い' },
        { base: '上', reading: 'じょう' }
      ]
    },
    {
      kana: 'かかりいん',
      kanji: '係員',
      romaji: 'kakariin',
      meaning: { en: 'staff member, person in charge', vi: 'người phụ trách' },
      ruby: [
        { base: '係', reading: 'かか' },
        { base: '員', reading: 'いん' }
      ]
    },
    {
      kana: 'コース',
      romaji: 'kōsu',
      meaning: { en: 'course (marathon route)', vi: 'đường chạy ma-ra-tông' }
    },
    {
      kana: 'スタート',
      romaji: 'sutāto',
      meaning: { en: 'start', vi: 'xuất phát' }
    },
    {
      kana: 'いちい',
      kanji: '一位',
      romaji: 'ichii',
      meaning: { en: 'first place', vi: 'thứ nhất' },
      ruby: [
        { base: '一', reading: 'いち' },
        { base: '位', reading: 'い' }
      ]
    },
    {
      kana: 'ゆうしょうします',
      kanji: '優勝します',
      romaji: 'yūshō shimasu',
      meaning: { en: 'to win (a championship)', vi: 'chiến thắng, vô địch' },
      ruby: [
        { base: '優', reading: 'ゆう' },
        { base: '勝', reading: 'しょう' }
      ]
    },
    {
      kana: 'なやみ',
      kanji: '悩み',
      romaji: 'nayami',
      meaning: { en: 'worry, trouble', vi: 'điều bận tâm, điều khổ tâm' },
      ruby: [{ base: '悩', reading: 'なや' }]
    },
    {
      kana: 'めざまし[どけい]',
      kanji: '目覚まし[時計]',
      romaji: 'mezamashi [dokei]',
      meaning: { en: 'alarm clock', vi: 'đồng hồ báo thức' },
      ruby: [
        { base: '目', reading: 'め' },
        { base: '覚', reading: 'ざ' },
        { base: '時', reading: 'ど' },
        { base: '計', reading: 'けい' }
      ]
    },
    {
      kana: 'めが さめます',
      kanji: '目が 覚めます',
      romaji: 'me ga samemasu',
      meaning: { en: 'to wake up', vi: 'tỉnh giấc, thức giấc' },
      ruby: [
        { base: '目', reading: 'め' },
        { base: '覚', reading: 'さ' }
      ]
    },
    {
      kana: 'だいがくせい',
      kanji: '大学生',
      romaji: 'daigakusei',
      meaning: { en: 'university student', vi: 'sinh viên đại học' },
      ruby: [
        { base: '大', reading: 'だい' },
        { base: '学', reading: 'がく' },
        { base: '生', reading: 'せい' }
      ]
    },
    {
      kana: 'かいとう',
      kanji: '回答',
      romaji: 'kaitō',
      meaning: { en: 'answer, reply (～します: to answer)', vi: 'câu trả lời (～します: trả lời)' },
      ruby: [
        { base: '回', reading: 'かい' },
        { base: '答', reading: 'とう' }
      ]
    },
    {
      kana: 'なります',
      kanji: '鳴ります',
      romaji: 'narimasu',
      meaning: { en: 'to ring, to sound [目覚ましが～: an alarm]', vi: 'reng, kêu [báo thức ~]' },
      ruby: [{ base: '鳴', reading: 'な' }]
    },
    {
      kana: 'セットします',
      romaji: 'setto shimasu',
      meaning: { en: 'to set (an alarm, timer)', vi: 'đặt (giờ báo thức)' }
    },
    {
      kana: 'それでも',
      romaji: 'soredemo',
      meaning: { en: 'nevertheless, even so', vi: 'kể cả như thế, mặc dù vậy' }
    }
  ],
  phrases: [
    {
      kana: '以上です。',
      kanji: '以上です。',
      romaji: 'Ijō desu.',
      meaning: { en: 'That is all.', vi: 'Xin hết.' },
      ruby: [
        { base: '以', reading: 'い' },
        { base: '上', reading: 'じょう' }
      ]
    },
    {
      kana: '楽しみに しています。',
      kanji: '楽しみに しています。',
      romaji: 'Tanoshimi ni shite imasu.',
      meaning: { en: 'I am looking forward to it.', vi: 'Tôi rất mong chờ.' },
      ruby: [{ base: '楽', reading: 'たの' }]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson45-marathon',
      title: { en: 'I practiced a lot, but...', vi: 'Tôi đã luyện tập nhiều, thế mà...' },
      speakers: [
        { id: 'staff', name: '係員' },
        { id: 'p1', name: '参加者１' },
        { id: 'p2', name: '参加者２' },
        { id: 'suzuki', name: '鈴木' },
        { id: 'miller', name: 'ミラー' }
      ],
      lines: [
        {
          speakerId: 'staff',
          jp: '皆さん、今日の マラソンは 健康の ための 大会です。無理に 走らないで ください。体調が 悪い 場合は 係員に 知らせて ください。',
          romaji:
            'Minasan, kyō no marason wa kenkō no tame no taikai desu. Muri ni hashiranaide kudasai. Taichō ga warui baai wa kakariin ni shirasete kudasai.',
          meaning: {
            en: "Everyone, today's marathon is for health. Please do not push too hard. If you feel unwell, please notify a staff member.",
            vi: 'Mọi người, ma-ra-tông hôm nay vì sức khỏe. Đừng cố quá sức. Nếu thấy người khó chịu thì hãy nói với người phụ trách nhé.'
          },
          ruby: [
            { base: '皆', reading: 'みな' },
            { base: '今', reading: 'きょう' },
            { base: '日', reading: 'にち' },
            { base: '健', reading: 'けん' },
            { base: '康', reading: 'こう' },
            { base: '大', reading: 'だい' },
            { base: '会', reading: 'かい' },
            { base: '無', reading: 'む' },
            { base: '理', reading: 'り' },
            { base: '走', reading: 'はし' },
            { base: '体', reading: 'たい' },
            { base: '調', reading: 'ちょう' },
            { base: '悪', reading: 'わる' },
            { base: '場', reading: 'ばあい' },
            { base: '合', reading: 'ばあい' },
            { base: '係', reading: 'かか' },
            { base: '員', reading: 'いん' },
            { base: '知', reading: 'し' }
          ]
        },
        {
          speakerId: 'p1',
          jp: 'すみません。コースを 間違えた 場合は どう しますか。',
          romaji: 'Sumimasen. Kōsu o machigaeta baai wa dō shimasu ka.',
          meaning: {
            en: 'Excuse me. What should I do if I take the wrong course?',
            vi: 'Xin lỗi, trường hợp nhầm đường chạy thì phải làm thế nào?'
          },
          ruby: [
            { base: '間', reading: 'ま' },
            { base: '違', reading: 'ちが' },
            { base: '場', reading: 'ばあい' },
            { base: '合', reading: 'ばあい' }
          ]
        },
        {
          speakerId: 'staff',
          jp: 'その 場合は 間違えた 所へ 戻って、また 走って ください。',
          romaji: 'Sono baai wa machigaeta tokoro e modotte, mata hashitte kudasai.',
          meaning: {
            en: 'In that case, please go back to where you went wrong and continue running.',
            vi: 'Trường hợp đó thì hãy quay lại chỗ nhầm và tiếp tục chạy.'
          },
          ruby: [
            { base: '場', reading: 'ばあい' },
            { base: '合', reading: 'ばあい' },
            { base: '間', reading: 'ま' },
            { base: '違', reading: 'ちが' },
            { base: '所', reading: 'ところ' },
            { base: '戻', reading: 'もど' },
            { base: '走', reading: 'はし' }
          ]
        },
        {
          speakerId: 'p2',
          jp: '途中で やめたい 場合は どう しますか。',
          romaji: 'Tochū de yametai baai wa dō shimasu ka.',
          meaning: {
            en: 'What if I want to quit halfway?',
            vi: 'Nếu muốn bỏ cuộc giữa chừng thì sao?'
          },
          ruby: [
            { base: '途', reading: 'と' },
            { base: '中', reading: 'なか' },
            { base: '場', reading: 'ばあい' },
            { base: '合', reading: 'ばあい' }
          ]
        },
        {
          speakerId: 'staff',
          jp: 'その 場合は 近くの 係員に 名前を 言って 帰って ください。それでは スタート です。',
          romaji:
            'Sono baai wa chikaku no kakariin ni namae o itte kaette kudasai. Soredewa sutāto desu.',
          meaning: {
            en: 'In that case, please tell your name to a nearby staff member and go home. Now, start.',
            vi: 'Trường hợp đó thì hãy nói tên với người phụ trách gần nhất rồi về. Bây giờ xuất phát.'
          },
          ruby: [
            { base: '場', reading: 'ばあい' },
            { base: '合', reading: 'ばあい' },
            { base: '近', reading: 'ちか' },
            { base: '係', reading: 'かか' },
            { base: '員', reading: 'いん' },
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' },
            { base: '言', reading: 'い' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          speakerId: 'suzuki',
          jp: 'ミラーさん、マラソンは どう でしたか。',
          romaji: 'Mirā-san, marason wa dō deshita ka.',
          meaning: {
            en: 'Mr. Miller, how was the marathon?',
            vi: 'Anh Miller, ma-ra-tông thế nào?'
          }
        },
        {
          speakerId: 'miller',
          jp: '2位 でした。',
          romaji: 'Ni-i deshita.',
          meaning: { en: 'I came in second.', vi: 'Tôi xếp thứ 2.' },
          ruby: [{ base: '位', reading: 'い' }]
        },
        {
          speakerId: 'suzuki',
          jp: '2位 ですか。すごい ですね。',
          romaji: 'Ni-i desu ka. Sugoi desu ne.',
          meaning: { en: 'Second place? That is amazing.', vi: 'Thứ 2 ấy à? Anh giỏi quá nhỉ.' },
          ruby: [{ base: '位', reading: 'い' }]
        },
        {
          speakerId: 'miller',
          jp: 'いいえ。たくさん 練習した のに、1位に なれませんでした。',
          romaji: 'Iie. Takusan renshū shita noni, ichi-i ni naremasen deshita.',
          meaning: {
            en: 'No. I practiced a lot, yet I could not come in first.',
            vi: 'Không đâu. Tôi đã luyện tập nhiều, thế mà không thể về nhất.'
          },
          ruby: [
            { base: '練', reading: 'れん' },
            { base: '習', reading: 'しゅう' },
            { base: '位', reading: 'い' }
          ]
        },
        {
          speakerId: 'suzuki',
          jp: '来年 また あります よ。',
          romaji: 'Rainen mata arimasu yo.',
          meaning: { en: 'There will be another one next year.', vi: 'Sang năm lại có nữa mà.' },
          ruby: [
            { base: '来', reading: 'き' },
            { base: '年', reading: 'ねん' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N / V-た / Adj 普通形 場合は',
      patternRuby: [
        { base: '普', reading: 'ふ' },
        { base: '通', reading: 'つう' },
        { base: '形', reading: 'けい' },
        { base: '場', reading: 'ば' },
        { base: '合', reading: 'あい' }
      ],
      highlights: ['場合', 'は'],
      title: { en: 'In case ~ (〜場合は)', vi: 'Trong trường hợp ~ (〜場合は)' },
      explanation: {
        en: 'N 普通形 場合(は), V-た 場合(は), or Adj 普通形 場合(は) gives instructions or advice for a specific situation. は is often omitted.',
        vi: 'N 普通形 場合(は), V-た 場合(は), hoặc Adj 普通形 場合(は) nêu hướng dẫn hoặc lời khuyên trong tình huống cụ thể. は thường có thể lược bỏ.'
      },
      explanationRuby: [
        { base: '普', reading: 'ふ' },
        { base: '通', reading: 'つう' },
        { base: '形', reading: 'けい' },
        { base: '場', reading: 'ば' },
        { base: '合', reading: 'あい' },
        { base: '場', reading: 'ば' },
        { base: '合', reading: 'あい' },
        { base: '普', reading: 'ふ' },
        { base: '通', reading: 'つう' },
        { base: '形', reading: 'けい' },
        { base: '場', reading: 'ば' },
        { base: '合', reading: 'あい' }
      ],
      examples: [
        {
          jp: '地震で 電車が 動かない 場合は、無理に 帰らないで 会社に います。',
          romaji: 'Jishin de densha ga ugokanai baai wa, muri ni kaeranaide kaisha ni imasu.',
          meaning: {
            en: 'If the trains are not running because of an earthquake, stay at the company instead of forcing your way home.',
            vi: 'Trường hợp tàu điện không hoạt động do động đất thì đừng cố về nhà mà hãy ở lại công ty.'
          },
          ruby: [
            { base: '地', reading: 'じしん' },
            { base: '震', reading: 'じしん' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '動', reading: 'うご' },
            { base: '場', reading: 'ばあい' },
            { base: '合', reading: 'ばあい' },
            { base: '無', reading: 'む' },
            { base: '理', reading: 'り' },
            { base: '帰', reading: 'かえ' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' }
          ]
        },
        {
          jp: 'この パソコンは 保証書が あります。故障した 場合は この 番号に 電話して ください。',
          romaji:
            'Kono pasokon wa hoshōsho ga arimasu. Koshō shita baai wa kono bangō ni denwa shite kudasai.',
          meaning: {
            en: 'This computer has a warranty. If it breaks down, please call this number.',
            vi: 'Máy vi tính này có phiếu bảo hành. Trường hợp hỏng thì hãy gọi số này.'
          },
          ruby: [
            { base: '保', reading: 'ほ' },
            { base: '証', reading: 'しょう' },
            { base: '書', reading: 'しょ' },
            { base: '故', reading: 'こしょう' },
            { base: '障', reading: 'こしょう' },
            { base: '場', reading: 'ばあい' },
            { base: '合', reading: 'ばあい' },
            { base: '番', reading: 'ばん' },
            { base: '号', reading: 'ごう' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        },
        {
          jp: '火事や 地震の 場合は エレベーターを 使わないで ください。',
          romaji: 'Kaji ya jishin no baai wa erebētā o tsukawanaide kudasai.',
          meaning: {
            en: 'In case of fire or earthquake, do not use the elevator.',
            vi: 'Trường hợp hỏa hoạn hoặc động đất thì tuyệt đối không dùng thang máy.'
          },
          ruby: [
            { base: '火', reading: 'か' },
            { base: '事', reading: 'じ' },
            { base: '地', reading: 'じしん' },
            { base: '震', reading: 'じしん' },
            { base: '場', reading: 'ばあい' },
            { base: '合', reading: 'ばあい' },
            { base: '使', reading: 'つか' }
          ]
        }
      ]
    },
    {
      pattern: 'V-た / Adj 普通形 のに',
      patternRuby: [
        { base: '普', reading: 'ふ' },
        { base: '通', reading: 'つう' },
        { base: '形', reading: 'けい' }
      ],
      highlights: ['の', 'に'],
      title: { en: 'Although ~ (〜のに)', vi: 'Mặc dù ~ (〜のに)' },
      explanation: {
        en: 'V-た のに or Adj 普通形 のに shows a result that goes against what was expected. It often carries disappointment or surprise.',
        vi: 'V-た のに hoặc Adj 普通形 のに cho kết quả trái với kỳ vọng, thường kèm tiếc nuối hoặc ngạc nhiên.'
      },
      explanationRuby: [
        { base: '普', reading: 'ふ' },
        { base: '通', reading: 'つう' },
        { base: '形', reading: 'けい' }
      ],
      examples: [
        {
          jp: '約束した のに、来ませんでした。',
          romaji: 'Yakusoku shita noni, kimasen deshita.',
          meaning: {
            en: 'I had made a promise, yet she did not come.',
            vi: 'Tôi đã hẹn với cô ấy, thế mà cô ấy không đến.'
          },
          ruby: [
            { base: '約', reading: 'やく' },
            { base: '束', reading: 'そく' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: 'よく 練習した のに、途中で 忘れました。',
          romaji: 'Yoku renshū shita noni, tochū de wasuremashita.',
          meaning: {
            en: 'I practiced well, yet I forgot halfway through.',
            vi: 'Tôi đã luyện tập kỹ, thế mà đến giữa chừng lại quên mất.'
          },
          ruby: [
            { base: '練', reading: 'れん' },
            { base: '習', reading: 'しゅう' },
            { base: '途', reading: 'と' },
            { base: '中', reading: 'なか' },
            { base: '忘', reading: 'わす' }
          ]
        },
        {
          jp: '冬な のに、桜が 咲いています。あれは 桜じゃ なくて、梅 ですよ。',
          romaji: 'Fuyu na noni, sakura ga saite imasu. Are wa sakura ja nakute, ume desu yo.',
          meaning: {
            en: 'Even though it is winter, cherry blossoms are blooming. Those are not cherry blossoms - they are plum blossoms.',
            vi: 'Mùa đông mà hoa anh đào vẫn nở nhỉ. Đấy không phải anh đào mà là hoa mơ đấy.'
          },
          ruby: [
            { base: '冬', reading: 'ふゆ' },
            { base: '桜', reading: 'さくら' },
            { base: '咲', reading: 'さ' },
            { base: '桜', reading: 'さくら' },
            { base: '梅', reading: 'うめ' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson45-alarm',
      title: { en: 'The alarm that would not stop', vi: 'Báo thức không chịu tắt' },
      lines: [
        {
          jp: '大学生の 田中さんは 目覚ましの 悩みが あります。',
          romaji: 'Daigakusei no Tanaka-san wa mezamashi no nayami ga arimasu.',
          meaning: {
            en: 'University student Tanaka has a problem with his alarm clock.',
            vi: 'Sinh viên Tanaka có một nỗi lo về đồng hồ báo thức.'
          },
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' },
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '目', reading: 'め' },
            { base: '覚', reading: 'さ' },
            { base: '悩', reading: 'なや' }
          ]
        },
        {
          jp: '6時に セットした のに、目が 覚めません。',
          romaji: 'Roku-ji ni setto shita noni, me ga samemasen.',
          meaning: {
            en: 'He set it for six, yet he does not wake up.',
            vi: 'Anh ấy đặt 6 giờ, thế mà không thức dậy.'
          },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '目', reading: 'め' },
            { base: '覚', reading: 'さ' }
          ]
        },
        {
          jp: 'ベルは 鳴っている のに、また 5分 寝て しまいます。',
          romaji: 'Beru wa natte iru noni, mata go-fun nete shimaimasu.',
          meaning: {
            en: 'The alarm is ringing, yet he sleeps another five minutes.',
            vi: 'Chuông reng mãi, thế mà anh ấy lại ngủ thêm 5 phút.'
          },
          ruby: [
            { base: '鳴', reading: 'な' },
            { base: '分', reading: 'ふん' },
            { base: '寝', reading: 'ね' }
          ]
        },
        {
          jp: 'それでも 急に 起きると 授業に 遅れます。',
          romaji: 'Soredemo kyū ni okiru to jugyō ni okuremasu.',
          meaning: {
            en: 'Even so, when he gets up suddenly he is late for class.',
            vi: 'Mặc dù vậy, cứ dậy vội là lại trễ tiết học.'
          },
          ruby: [
            { base: '急', reading: 'きゅう' },
            { base: '起', reading: 'お' },
            { base: '授', reading: 'じゅ' },
            { base: '業', reading: 'ぎょう' },
            { base: '遅', reading: 'おく' }
          ]
        },
        {
          jp: '友達の 回答は 簡単でした。「早く 寝なさい。」',
          romaji: 'Tomodachi no kaitō wa kantan deshita. 「Hayaku nenasai.」',
          meaning: {
            en: 'His friend\'s answer was simple: "Go to bed early."',
            vi: 'Câu trả lời của bạn rất đơn giản: "Ngủ sớm đi."'
          },
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '回', reading: 'かい' },
            { base: '答', reading: 'とう' },
            { base: '簡', reading: 'かん' },
            { base: '単', reading: 'たん' },
            { base: '早', reading: 'はや' },
            { base: '寝', reading: 'ね' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: "What is Tanaka's problem?", vi: 'Vấn đề của Tanaka là gì?' },
          choices: [
            {
              id: 'a',
              label: { en: 'He cannot wake up on time', vi: 'Anh ấy không dậy đúng giờ' }
            },
            { id: 'b', label: { en: 'He lost his receipt', vi: 'Anh ấy mất hóa đơn' } },
            { id: 'c', label: { en: 'He canceled a camp', vi: 'Anh ấy hủy cắm trại' } },
            { id: 'd', label: { en: 'He won a marathon', vi: 'Anh ấy thắng ma-ra-tông' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What advice did his friend give?', vi: 'Bạn anh ấy khuyên gì?' },
          choices: [
            { id: 'a', label: { en: 'Go to bed early', vi: 'Ngủ sớm' } },
            { id: 'b', label: { en: 'Buy a new warranty', vi: 'Mua bảo hành mới' } },
            { id: 'c', label: { en: 'Call 110', vi: 'Gọi 110' } },
            { id: 'd', label: { en: 'Run every morning', vi: 'Chạy mỗi sáng' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Hospital departments', vi: 'Các khoa bệnh viện' },
      introTerm: {
        jp: '病院',
        ruby: [
          { base: '病', reading: 'びょう' },
          { base: '院', reading: 'いん' }
        ]
      },
      layout: 'stacked',
      rows: [
        {
          jp: '内科',
          ruby: [
            { base: '内', reading: 'ない' },
            { base: '科', reading: 'か' }
          ],
          meaning: { en: 'internal medicine', vi: 'khoa nội' }
        },
        {
          jp: '外科',
          ruby: [
            { base: '外', reading: 'げ' },
            { base: '科', reading: 'か' }
          ],
          meaning: { en: 'surgery', vi: 'khoa ngoại' }
        },
        {
          jp: '小児科',
          ruby: [
            { base: '小', reading: 'しょう' },
            { base: '児', reading: 'に' },
            { base: '科', reading: 'か' }
          ],
          meaning: { en: 'pediatrics', vi: 'khoa nhi' }
        },
        {
          jp: '眼科',
          ruby: [
            { base: '眼', reading: 'がん' },
            { base: '科', reading: 'か' }
          ],
          meaning: { en: 'ophthalmology', vi: 'khoa mắt' }
        },
        {
          jp: '耳鼻咽喉科',
          ruby: [
            { base: '耳', reading: 'じ' },
            { base: '鼻', reading: 'び' },
            { base: '咽', reading: 'いん' },
            { base: '喉', reading: 'こう' },
            { base: '科', reading: 'か' }
          ],
          meaning: { en: 'ENT', vi: 'khoa tai mũi họng' }
        },
        {
          jp: '皮膚科',
          ruby: [
            { base: '皮', reading: 'ひ' },
            { base: '膚', reading: 'ふ' },
            { base: '科', reading: 'か' }
          ],
          meaning: { en: 'dermatology', vi: 'khoa da liễu' }
        },
        {
          jp: '整形外科',
          ruby: [
            { base: '整', reading: 'せい' },
            { base: '形', reading: 'けい' },
            { base: '外', reading: 'げ' },
            { base: '科', reading: 'か' }
          ],
          meaning: { en: 'orthopedics', vi: 'khoa chấn thương chỉnh hình' }
        },
        {
          jp: '産婦人科',
          ruby: [
            { base: '産', reading: 'さん' },
            { base: '婦', reading: 'ふ' },
            { base: '人', reading: 'じん' },
            { base: '科', reading: 'か' }
          ],
          meaning: { en: 'obstetrics and gynecology', vi: 'khoa sản' }
        },
        {
          jp: '歯科',
          ruby: [
            { base: '歯', reading: 'し' },
            { base: '科', reading: 'か' }
          ],
          meaning: { en: 'dentistry', vi: 'khoa nha' }
        },
        {
          jp: '受付',
          ruby: [
            { base: '受', reading: 'う' },
            { base: '付', reading: 'つけ' }
          ],
          meaning: { en: 'reception', vi: 'lễ tân' }
        },
        {
          jp: '薬局',
          ruby: [
            { base: '薬', reading: 'やっ' },
            { base: '局', reading: 'きょく' }
          ],
          meaning: { en: 'pharmacy', vi: 'quầy thuốc' }
        }
      ]
    }
  ]
};
