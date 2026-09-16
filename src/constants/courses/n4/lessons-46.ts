import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 46 (V ところです, V-た ばかり, はずです). */
export const n4Lesson46: Lesson = {
  id: 'lesson-46',
  number: 46,
  title: {
    en: 'About to, just finished, and ought to be',
    vi: 'Sắp làm, vừa xong và chắc là'
  },
  focus: {
    en: 'Say something is about to happen, in progress, or just finished with V ところです, that it just happened with V-た ばかり, and that something is expected with はずです.',
    vi: 'Nói sắp xảy ra, đang diễn ra hoặc vừa xong với V ところです, vừa mới với V-た ばかり, và chắc là với はずです.'
  },
  vocab: [
    {
      kana: 'わたします',
      kanji: '渡します',
      romaji: 'watashimasu',
      meaning: { en: 'to hand over', vi: 'đưa, trao' },
      ruby: [{ base: '渡', reading: 'わた' }]
    },
    {
      kana: 'かえって きます',
      kanji: '帰って 来ます',
      romaji: 'kaette kimasu',
      meaning: { en: 'to come back, to return', vi: 'trở về' },
      ruby: [
        { base: '帰', reading: 'かえ' },
        { base: '来', reading: 'き' }
      ]
    },
    {
      kana: 'でます',
      kanji: '出ます',
      romaji: 'demasu',
      meaning: {
        en: 'to leave, to depart [バスが～: a bus]',
        vi: 'xuất phát, rời bến [xe buýt ~]'
      },
      ruby: [{ base: '出', reading: 'で' }]
    },
    {
      kana: 'とどきます',
      kanji: '届きます',
      romaji: 'todokimasu',
      meaning: { en: 'to be delivered [荷物が～: a package]', vi: 'đến, được giao [hành lý ~]' },
      ruby: [{ base: '届', reading: 'とど' }]
    },
    {
      kana: 'にゅうがくします',
      kanji: '入学します',
      romaji: 'nyūgaku shimasu',
      meaning: { en: 'to enter [大学に～: a university]', vi: 'nhập học [đại học ~]' },
      ruby: [
        { base: '入', reading: 'にゅう' },
        { base: '学', reading: 'がく' }
      ]
    },
    {
      kana: 'そつぎょうします',
      kanji: '卒業します',
      romaji: 'sotsugyō shimasu',
      meaning: { en: 'to graduate [大学を～: from a university]', vi: 'tốt nghiệp [đại học ~]' },
      ruby: [
        { base: '卒', reading: 'そつ' },
        { base: '業', reading: 'ぎょう' }
      ]
    },
    {
      kana: 'やきます',
      kanji: '焼きます',
      romaji: 'yakimasu',
      meaning: { en: 'to bake, to grill, to roast', vi: 'nướng' },
      ruby: [{ base: '焼', reading: 'や' }]
    },
    {
      kana: 'やけます',
      kanji: '焼けます',
      romaji: 'yakemasu',
      meaning: {
        en: 'to be baked/burned [パンが～/肉が～: bread/meat]',
        vi: 'nướng chín, cháy [bánh mì ~ / thịt ~]'
      },
      ruby: [{ base: '焼', reading: 'や' }]
    },
    {
      kana: 'るす',
      kanji: '留守',
      romaji: 'rusu',
      meaning: { en: 'absence from home', vi: 'vắng nhà, đi vắng' },
      ruby: [
        { base: '留', reading: 'る' },
        { base: '守', reading: 'す' }
      ]
    },
    {
      kana: 'たくはいびん',
      kanji: '宅配便',
      romaji: 'takhaibin',
      meaning: { en: 'home delivery service', vi: 'dịch vụ chuyển phát tận nhà' },
      ruby: [
        { base: '宅', reading: 'たく' },
        { base: '配', reading: 'はい' },
        { base: '便', reading: 'びん' }
      ]
    },
    {
      kana: 'げんいん',
      kanji: '原因',
      romaji: 'genin',
      meaning: { en: 'cause, reason', vi: 'nguyên nhân' },
      ruby: [
        { base: '原', reading: 'げん' },
        { base: '因', reading: 'いん' }
      ]
    },
    {
      kana: 'こちら',
      romaji: 'kochira',
      meaning: { en: 'this way, here, I (polite)', vi: 'phía tôi, đây, tôi (kính ngữ)' }
    },
    {
      kana: '～の ところ',
      kanji: '～の 所',
      romaji: '~ no tokoro',
      meaning: { en: 'around ~, near ~', vi: 'chỗ ~, gần ~' },
      ruby: [{ base: '所', reading: 'ところ' }]
    },
    {
      kana: 'はんとし',
      kanji: '半年',
      romaji: 'hantoshi',
      meaning: { en: 'half a year', vi: 'nửa năm' },
      ruby: [
        { base: '半', reading: 'はん' },
        { base: '年', reading: 'とし' }
      ]
    },
    {
      kana: 'ちょうど',
      romaji: 'chōdo',
      meaning: { en: 'exactly, just', vi: 'vừa đúng, đúng' }
    },
    {
      kana: 'たったいま',
      kanji: 'たった今',
      romaji: 'tattaima',
      meaning: {
        en: 'just now (with past tense for something just completed)',
        vi: 'vừa mới (dùng với thể quá khứ, biểu thị vừa hoàn thành)'
      },
      ruby: [{ base: '今', reading: 'いま' }]
    },
    {
      kana: 'いま いいですか。',
      kanji: '今 いいですか。',
      romaji: 'Ima ii desu ka.',
      meaning: { en: 'Is now a good time?', vi: 'Bây giờ có nói chuyện được không?' },
      ruby: [{ base: '今', reading: 'いま' }]
    },
    {
      kana: 'ガスサービスセンター',
      romaji: 'gasu sābisu sentā',
      meaning: { en: 'gas service center', vi: 'trung tâm dịch vụ ga' }
    },
    {
      kana: 'ガスレンジ',
      romaji: 'gasu renji',
      meaning: { en: 'gas stove', vi: 'bếp ga' }
    },
    {
      kana: 'ぐあい',
      kanji: '具合',
      romaji: 'guai',
      meaning: { en: 'condition, state', vi: 'tình trạng, trạng thái' },
      ruby: [{ base: '具', reading: 'ぐ' }]
    },
    {
      kana: 'むかいます',
      kanji: '向かいます',
      romaji: 'mukaimasu',
      meaning: { en: 'to head for, to go toward', vi: 'đi đến đấy, hướng tới' },
      ruby: [{ base: '向', reading: 'む' }]
    },
    {
      kana: 'ついて います',
      romaji: 'tsuite imasu',
      meaning: { en: 'to be attached, to be on', vi: 'có, đang bật' }
    },
    {
      kana: 'ゆか',
      kanji: '床',
      romaji: 'yuka',
      meaning: { en: 'floor', vi: 'sàn' },
      ruby: [{ base: '床', reading: 'ゆか' }]
    },
    {
      kana: 'ころびます',
      kanji: '転びます',
      romaji: 'korobimasu',
      meaning: { en: 'to fall down', vi: 'ngã' },
      ruby: [{ base: '転', reading: 'ころ' }]
    },
    {
      kana: 'ベル',
      romaji: 'beru',
      meaning: { en: 'doorbell', vi: 'chuông cửa' }
    },
    {
      kana: 'なります',
      kanji: '鳴ります',
      romaji: 'narimasu',
      meaning: { en: 'to ring, to sound', vi: 'reng, kêu' },
      ruby: [{ base: '鳴', reading: 'な' }]
    },
    {
      kana: 'あわてて',
      kanji: '慌てて',
      romaji: 'awatete',
      meaning: { en: 'hurriedly, in a panic', vi: 'vội vàng, hoảng hốt' },
      ruby: [{ base: '慌', reading: 'あわ' }]
    },
    {
      kana: 'じゅんばんに',
      kanji: '順番に',
      romaji: 'junban ni',
      meaning: { en: 'in order', vi: 'theo thứ tự' },
      ruby: [
        { base: '順', reading: 'じゅん' },
        { base: '番', reading: 'ばん' }
      ]
    },
    {
      kana: 'できごと',
      kanji: '出来事',
      romaji: 'dekigoto',
      meaning: { en: 'event, incident', vi: 'sự việc' },
      ruby: [
        { base: '出', reading: 'でき' },
        { base: '来', reading: 'き' },
        { base: '事', reading: 'ごと' }
      ]
    }
  ],
  phrases: [
    {
      kana: '申し訳ありません。',
      kanji: '申し訳ありません。',
      romaji: 'Mōshiwake arimasen.',
      meaning: { en: 'I am sorry.', vi: 'Xin lỗi.' },
      ruby: [
        { base: '申', reading: 'もう' },
        { base: '訳', reading: 'わけ' }
      ]
    },
    {
      kana: 'どちら様でしょうか。',
      kanji: 'どちら様でしょうか。',
      romaji: 'Dochira-sama deshō ka.',
      meaning: { en: 'May I ask who is calling?', vi: 'Ai đấy ạ?' },
      ruby: [{ base: '様', reading: 'さま' }]
    },
    {
      kana: 'お待たせしました。',
      romaji: 'Omatase shimashita.',
      meaning: { en: 'Sorry to keep you waiting.', vi: 'Xin lỗi đã bắt anh/chị chờ lâu.' }
    },
    {
      kana: '今 いいですか。',
      kanji: '今 いいですか。',
      romaji: 'Ima ii desu ka.',
      meaning: { en: 'Is now a good time?', vi: 'Bây giờ có nói chuyện được không?' },
      ruby: [{ base: '今', reading: 'いま' }]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson46-gas',
      title: { en: 'They fixed it last week, but...', vi: 'Tuần trước mới sửa, vậy mà...' },
      speakers: [
        { id: 'staff', name: '係員' },
        { id: 'thawaphon', name: 'タワポン' }
      ],
      lines: [
        {
          speakerId: 'staff',
          jp: 'ガスサービスセンター です。',
          romaji: 'Gasu sābisu sentā desu.',
          meaning: { en: 'Gas service center.', vi: 'Trung tâm dịch vụ ga nghe đây ạ.' }
        },
        {
          speakerId: 'thawaphon',
          jp: 'すみません。うちの ガスレンジの 具合が 悪い んですが...',
          romaji: 'Sumimasen. Uchi no gasu renji no guai ga warui n desu ga...',
          meaning: {
            en: 'Excuse me. Our gas stove is not working properly...',
            vi: 'Xin lỗi, cái bếp ga nhà tôi bị trục trặc...'
          },
          ruby: [
            { base: '具', reading: 'ぐ' },
            { base: '合', reading: 'あい' },
            { base: '悪', reading: 'わる' }
          ]
        },
        {
          speakerId: 'staff',
          jp: 'どんな 具合 ですか。',
          romaji: 'Donna guai desu ka.',
          meaning: { en: 'What seems to be wrong?', vi: 'Cụ thể như thế nào ạ?' },
          ruby: [
            { base: '具', reading: 'ぐ' },
            { base: '合', reading: 'あい' }
          ]
        },
        {
          speakerId: 'thawaphon',
          jp: '先週 修理して もらった ばかり なのに、火が つきません。危ない ので、すぐ 来て ください。',
          romaji:
            'Senshū shūri shite moratta bakari na noni, hi ga tsukimasen. Abunai node, sugu kite kudasai.',
          meaning: {
            en: 'We just had it repaired last week, yet the flame will not light. It is dangerous, so please come right away.',
            vi: 'Tuần trước mới nhờ sửa thế mà lửa không lên. Nguy hiểm nên nhờ các anh đến ngay.'
          },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '週', reading: 'しゅう' },
            { base: '修', reading: 'しゅう' },
            { base: '理', reading: 'り' },
            { base: '火', reading: 'ひ' },
            { base: '危', reading: 'あぶ' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          speakerId: 'staff',
          jp: 'かしこまりました。5時ごろ 向かいます。お名前と 住所を 教えて ください。',
          romaji: 'Kashikomarimashita. Go-ji goro mukaimasu. Onamae to jūsho o oshiete kudasai.',
          meaning: {
            en: 'Certainly. We will head over around five. Please tell me your name and address.',
            vi: 'Vâng ạ. Khoảng 5 giờ chúng tôi sẽ đến. Xin cho biết tên và địa chỉ.'
          },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '向', reading: 'む' },
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' },
            { base: '住', reading: 'じゅう' },
            { base: '所', reading: 'しょ' },
            { base: '教', reading: 'おし' }
          ]
        },
        {
          speakerId: 'thawaphon',
          jp: 'もしもし。5時に 来る はず だった んですが、まだ 来ません。',
          romaji: 'Moshimoshi. Go-ji ni kuru hazu datta n desu ga, mada kimasen.',
          meaning: {
            en: 'Hello. They were supposed to come at five, but they still have not arrived.',
            vi: 'A-lô, theo hẹn thì khoảng 5 giờ chắc chắn sẽ đến, thế mà vẫn chưa đến ạ?'
          },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '来', reading: 'き' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          speakerId: 'staff',
          jp: '申し訳ありません。お名前を 教えて ください。',
          romaji: 'Mōshiwake arimasen. Onamae o oshiete kudasai.',
          meaning: {
            en: 'I am sorry. Please tell me your name.',
            vi: 'Xin lỗi. Anh cho tôi xin tên.'
          },
          ruby: [
            { base: '申', reading: 'もう' },
            { base: '訳', reading: 'わけ' },
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' },
            { base: '教', reading: 'おし' }
          ]
        },
        {
          speakerId: 'thawaphon',
          jp: 'タワポン です。',
          romaji: 'Tawapon desu.',
          meaning: { en: 'This is Thawaphon.', vi: 'Tôi là Thawaphon.' }
        },
        {
          speakerId: 'staff',
          jp: 'お待たせしました。今 向かっている ところ です。あと 10分 お待ち ください。',
          romaji: 'Omatase shimashita. Ima mukatte iru tokoro desu. Ato juppun omachi kudasai.',
          meaning: {
            en: 'Sorry for the wait. We are on our way now. Please wait another ten minutes.',
            vi: 'Xin lỗi vì để anh chờ. Bây giờ nhân viên đang trên đường đến. Xin đợi thêm 10 phút nữa.'
          },
          ruby: [
            { base: '待', reading: 'ま' },
            { base: '今', reading: 'いま' },
            { base: '向', reading: 'む' },
            { base: '分', reading: 'ぷん' },
            { base: '待', reading: 'ま' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-る/ている/た ところです',
      highlights: ['ところ'],
      title: {
        en: 'About to / in progress / just done (V ところです)',
        vi: 'Sắp / đang / vừa xong (V ところです)'
      },
      explanation: {
        en: 'V-る ところです = about to do; V-ている ところです = in the middle of doing; V-た ところです = just finished. ところ literally means "point/ stage".',
        vi: 'V-る ところです = sắp làm; V-ている ところです = đang làm dở; V-た ところです = vừa làm xong. ところ nghĩa là "giai đoạn/lúc".'
      },
      explanationRuby: [],
      examples: [
        {
          jp: '会議は これから 始める ところ です。',
          romaji: 'Kaigi wa korekara hajimeru tokoro desu.',
          meaning: {
            en: 'The meeting is about to start now.',
            vi: 'Cuộc họp sắp bắt đầu bây giờ.'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '始', reading: 'はじ' }
          ]
        },
        {
          jp: '今 電車に 乗っている ところ です。',
          romaji: 'Ima densha ni notte iru tokoro desu.',
          meaning: {
            en: 'I am getting on the train right now.',
            vi: 'Bây giờ tôi đang chuẩn bị lên tàu.'
          },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '乗', reading: 'の' }
          ]
        },
        {
          jp: '原因を 調べている ところ です。',
          romaji: "Gen'in o shirabete iru tokoro desu.",
          meaning: { en: 'I am checking the cause now.', vi: 'Bây giờ tôi đang xem nguyên nhân.' },
          ruby: [
            { base: '原', reading: 'げん' },
            { base: '因', reading: 'いん' },
            { base: '調', reading: 'しら' }
          ]
        },
        {
          jp: 'たった今 帰った ところ です。',
          romaji: 'Tattaima kaetta tokoro desu.',
          meaning: { en: 'I just got back.', vi: 'Tôi vừa mới về xong.' },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '帰', reading: 'かえ' }
          ]
        }
      ]
    },
    {
      pattern: 'V-た ばかり',
      highlights: ['ばかり'],
      title: { en: 'Just did (V-た ばかり)', vi: 'Vừa mới làm (V-た ばかり)' },
      explanation: {
        en: 'V-た ばかり shows something happened a short time ago and the state still feels fresh: 3月に 卒業した ばかり, 先週 買った ばかり.',
        vi: 'V-た ばかり cho thấy việc vừa mới xảy ra và trạng thái còn mới: 3月に 卒業した ばかり, 先週 買った ばかり.'
      },
      explanationRuby: [
        { base: '月', reading: 'げつ' },
        { base: '卒', reading: 'そつ' },
        { base: '業', reading: 'ぎょう' },
        { base: '先', reading: 'せん' },
        { base: '週', reading: 'しゅう' },
        { base: '買', reading: 'か' },
        { base: '月', reading: 'げつ' },
        { base: '卒', reading: 'そつ' },
        { base: '業', reading: 'ぎょう' },
        { base: '先', reading: 'せん' },
        { base: '週', reading: 'しゅう' },
        { base: '買', reading: 'か' }
      ],
      examples: [
        {
          jp: '3月に 大学を 卒業した ばかり です。',
          romaji: 'Sangatsu ni daigaku o sotsugyō shita bakari desu.',
          meaning: {
            en: 'I just graduated from university in March.',
            vi: 'Anh ấy mới tốt nghiệp đại học vào tháng 3.'
          },
          ruby: [
            { base: '月', reading: 'げつ' },
            { base: '大', reading: 'たい' },
            { base: '学', reading: 'がく' },
            { base: '卒', reading: 'そつ' },
            { base: '業', reading: 'ぎょう' }
          ]
        },
        {
          jp: '先月 会社に 入った ばかり なので、まだ よく わかりません。',
          romaji: 'Sengetsu kaisha ni haitta bakari na node, mada yoku wakarimasen.',
          meaning: {
            en: 'I just joined the company last month, so I still do not understand everything.',
            vi: 'Tôi mới vào công ty tháng trước nên vẫn chưa nắm được hết.'
          },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '月', reading: 'げつ' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '入', reading: 'はい' }
          ]
        },
        {
          jp: '先週 買った ばかり なのに、もう 壊れました。',
          romaji: 'Senshū katta bakari na noni, mō kowaremashita.',
          meaning: {
            en: 'I just bought it last week, yet it already broke.',
            vi: 'Tôi mới mua tuần trước, thế mà đã hỏng rồi.'
          },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '週', reading: 'しゅう' },
            { base: '買', reading: 'か' },
            { base: '壊', reading: 'こわ' }
          ]
        }
      ]
    },
    {
      pattern: 'N / Adj / V 普通形 はずです',
      patternRuby: [
        { base: '普', reading: 'ふ' },
        { base: '通', reading: 'つう' },
        { base: '形', reading: 'けい' }
      ],
      highlights: ['はず'],
      title: { en: 'Should be, expected to (はずです)', vi: 'Chắc là, lẽ ra (はずです)' },
      explanation: {
        en: 'Plain form + はずです expresses a logical expectation based on evidence: 会議室に いる はずです. Negative: はずがありません / はずが ない.',
        vi: 'Thể thường + はずです diễn tả kỳ vọng hợp lý dựa trên bằng chứng: 会議室に いる はずです. Phủ định: はずがありません / はずが ない.'
      },
      explanationRuby: [
        { base: '会', reading: 'かい' },
        { base: '議', reading: 'ぎ' },
        { base: '室', reading: 'しつ' },
        { base: '会', reading: 'かい' },
        { base: '議', reading: 'ぎ' },
        { base: '室', reading: 'しつ' }
      ],
      examples: [
        {
          jp: 'ミラーさんは 会議室に いる はず です。',
          romaji: 'Mirā-san wa kaigishitsu ni iru hazu desu.',
          meaning: {
            en: 'Mr. Miller should be in the meeting room.',
            vi: 'Anh Miller chắc chắn là có ở phòng họp.'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '室', reading: 'しつ' }
          ]
        },
        {
          jp: 'さっき 駅から 電話が あった から、もうすぐ 着く はず です。',
          romaji: 'Sakki eki kara denwa ga atta kara, mōsugu tsuku hazu desu.',
          meaning: {
            en: 'He called from the station earlier, so he should arrive soon.',
            vi: 'Lúc nãy anh ấy gọi từ ga, nên chắc chắn sẽ đến ngay bây giờ.'
          },
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '着', reading: 'つ' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson46-bell',
      title: { en: 'When the doorbell rang', vi: 'Khi chuông cửa reng' },
      lines: [
        {
          jp: '留守の とき、宅配便が 届く 出来事が よく あります。',
          romaji: 'Rusu no toki, takhaibin ga todoku dekigoto ga yoku arimasu.',
          meaning: {
            en: 'When you are out, deliveries often become a problem.',
            vi: 'Khi vắng nhà, việc hàng giao đến là chuyện thường.'
          },
          ruby: [
            { base: '留', reading: 'る' },
            { base: '守', reading: 'す' },
            { base: '宅', reading: 'たく' },
            { base: '配', reading: 'はい' },
            { base: '便', reading: 'びん' },
            { base: '届', reading: 'とど' },
            { base: '出', reading: 'で' },
            { base: '来', reading: 'き' },
            { base: '事', reading: 'こと' }
          ]
        },
        {
          jp: 'ある 日、ベルが 鳴りました。床が つるつる ついている ので、慌てて 走ると 転びました。',
          romaji:
            'Aru hi, beru ga narimashita. Yuka ga tsurutsuru tsuite iru node, awatete hashiru to korobimashita.',
          meaning: {
            en: 'One day the doorbell rang. The floor was slippery, so when I ran in a panic I fell.',
            vi: 'Một ngày nọ chuông reng. Sàn trơn nên chạy vội thì ngã.'
          },
          ruby: [
            { base: '日', reading: 'ひ' },
            { base: '鳴', reading: 'な' },
            { base: '床', reading: 'ゆか' },
            { base: '慌', reading: 'あわ' },
            { base: '走', reading: 'はし' },
            { base: '転', reading: 'ころ' }
          ]
        },
        {
          jp: '順番に やる ことが 大切 だと 思いました。',
          romaji: 'Junban ni yaru koto ga taisetsu da to omoimashita.',
          meaning: {
            en: 'I realized it is important to do things in order.',
            vi: 'Tôi nghĩ làm việc theo thứ tự mới quan trọng.'
          },
          ruby: [
            { base: '順', reading: 'じゅん' },
            { base: '番', reading: 'ばん' },
            { base: '大', reading: 'たい' },
            { base: '切', reading: 'せつ' },
            { base: '思', reading: 'おも' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'Why did the speaker fall?', vi: 'Tại sao người nói bị ngã?' },
          choices: [
            { id: 'a', label: { en: 'The floor was slippery', vi: 'Sàn trơn' } },
            { id: 'b', label: { en: 'The bus left early', vi: 'Xe buýt rời sớm' } },
            { id: 'c', label: { en: 'The bread burned', vi: 'Bánh mì cháy' } },
            { id: 'd', label: { en: 'The gas stove broke', vi: 'Bếp ga hỏng' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What lesson did the speaker learn?',
            vi: 'Người nói rút ra bài học gì?'
          },
          choices: [
            { id: 'a', label: { en: 'Do things in order', vi: 'Làm việc theo thứ tự' } },
            { id: 'b', label: { en: 'Never use delivery', vi: 'Không bao giờ giao hàng' } },
            { id: 'c', label: { en: 'Always run faster', vi: 'Luôn chạy nhanh hơn' } },
            { id: 'd', label: { en: 'Ignore the doorbell', vi: 'Bỏ qua chuông cửa' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'Katakana word origins (English)', vi: 'Nguồn gốc từ katakana (tiếng Anh)' },
      intro: {
        en: 'Many loanwords came from European languages. Here are common English-origin examples by category.',
        vi: 'Nhiều từ katakana đến từ các ngôn ngữ châu Âu. Dưới đây là ví dụ tiếng Anh theo chủ đề.'
      },
      layout: 'stacked',
      rows: [
        { jp: 'ジャム', meaning: { en: 'jam', vi: 'mứt' } },
        { jp: 'クッキー', meaning: { en: 'cookie', vi: 'bánh quy' } },
        { jp: 'スカート', meaning: { en: 'skirt', vi: 'váy' } },
        { jp: 'スーツ', meaning: { en: 'suit', vi: 'com-lê' } },
        { jp: 'ストレス', meaning: { en: 'stress', vi: 'căng thẳng' } },
        { jp: 'スケジュール', meaning: { en: 'schedule', vi: 'lịch làm việc' } },
        { jp: 'トラブル', meaning: { en: 'trouble', vi: 'rắc rối' } }
      ]
    },
    {
      kind: 'list',
      title: {
        en: 'Katakana word origins (other languages)',
        vi: 'Nguồn gốc từ katakana (ngôn ngữ khác)'
      },
      layout: 'stacked',
      rows: [
        {
          jp: 'ビール',
          meaning: { en: 'beer (Dutch)', vi: 'bia (tiếng Hà Lan)' }
        },
        {
          jp: 'コーヒー',
          meaning: { en: 'coffee (Dutch)', vi: 'cà-phê (tiếng Hà Lan)' }
        },
        {
          jp: 'パン',
          meaning: { en: 'bread (Portuguese)', vi: 'bánh mì (tiếng Bồ Đào Nha)' }
        },
        {
          jp: 'レントゲン',
          meaning: { en: 'X-ray (German)', vi: 'X-quang (tiếng Đức)' }
        },
        {
          jp: 'ズボン',
          meaning: { en: 'trousers (French)', vi: 'quần dài (tiếng Pháp)' }
        },
        {
          jp: 'パスタ',
          meaning: { en: 'pasta (Italian)', vi: 'mì pasta (tiếng Ý)' }
        }
      ]
    }
  ]
};
