import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 17 (ない形, obligations, health). */
export const n5Lesson17: Lesson = {
  id: 'lesson-17',
  number: 17,
  title: {
    en: 'At the doctor',
    vi: 'Đi khám bác sĩ'
  },
  focus: {
    en: 'Describe symptoms, use the nai-form for negatives and obligations, and set deadlines with 〜までに.',
    vi: 'Mô tả triệu chứng, dùng thể ない cho phủ định và bắt buộc, và nêu hạn với 〜までに.'
  },
  vocab: [
    {
      kana: 'おぼえます',
      kanji: '覚えます',
      romaji: 'oboemasu',
      meaning: { en: 'to remember', vi: 'nhớ' },
      ruby: [{ base: '覚', reading: 'おぼ' }]
    },
    {
      kana: 'わすれます',
      kanji: '忘れます',
      romaji: 'wasuremasu',
      meaning: { en: 'to forget', vi: 'quên' },
      ruby: [{ base: '忘', reading: 'わす' }]
    },
    {
      kana: 'なくします',
      kanji: '無くします',
      romaji: 'nakushimasu',
      meaning: { en: 'to lose (something)', vi: 'làm mất' },
      ruby: [{ base: '無', reading: 'な' }]
    },
    {
      kana: 'だします',
      kanji: '出します',
      romaji: 'dashimasu',
      meaning: {
        en: 'to hand in, to submit (レポートを～: submit a report)',
        vi: 'nộp (レポートを～: nộp báo cáo)'
      },
      ruby: [{ base: '出', reading: 'だ' }]
    },
    {
      kana: 'はらいます',
      kanji: '払います',
      romaji: 'haraimasu',
      meaning: { en: 'to pay', vi: 'trả tiền, thanh toán' },
      ruby: [{ base: '払', reading: 'はら' }]
    },
    {
      kana: 'かえします',
      kanji: '返します',
      romaji: 'kaeshimasu',
      meaning: { en: 'to return (something)', vi: 'trả lại' },
      ruby: [{ base: '返', reading: 'かえ' }]
    },
    {
      kana: 'でかけます',
      kanji: '出かけます',
      romaji: 'dekakemasu',
      meaning: { en: 'to go out', vi: 'ra ngoài, đi ra' },
      ruby: [{ base: '出', reading: 'で' }]
    },
    {
      kana: 'ぬぎます',
      kanji: '脱ぎます',
      romaji: 'nugimasu',
      meaning: { en: 'to take off (clothes)', vi: 'cởi (quần áo)' },
      ruby: [{ base: '脱', reading: 'ぬ' }]
    },
    {
      kana: 'もっていきます',
      kanji: '持っていきます',
      romaji: 'motte ikimasu',
      meaning: { en: 'to take (something along)', vi: 'mang theo, mang đi' },
      ruby: [
        { base: '持', reading: 'も' },
        { base: '行', reading: 'い' }
      ]
    },
    {
      kana: 'もってきます',
      kanji: '持って来ます',
      romaji: 'motte kimasu',
      meaning: { en: 'to bring (something)', vi: 'mang đến, mang theo đến' },
      ruby: [
        { base: '持', reading: 'も' },
        { base: '来', reading: 'き' }
      ]
    },
    {
      kana: 'しんぱいします',
      kanji: '心配します',
      romaji: 'shinpai shimasu',
      meaning: { en: 'to worry', vi: 'lo lắng' },
      ruby: [
        { base: '心', reading: 'しん' },
        { base: '配', reading: 'ぱい' }
      ]
    },
    {
      kana: 'ざんぎょうします',
      kanji: '残業します',
      romaji: 'zangyō shimasu',
      meaning: { en: 'to work overtime', vi: 'làm thêm giờ' },
      ruby: [
        { base: '残', reading: 'ざん' },
        { base: '業', reading: 'ぎょう' }
      ]
    },
    {
      kana: 'しゅっちょうします',
      kanji: '出張します',
      romaji: 'shutchō shimasu',
      meaning: { en: 'to go on a business trip', vi: 'đi công tác' },
      ruby: [
        { base: '出', reading: 'しゅっ' },
        { base: '張', reading: 'ちょう' }
      ]
    },
    {
      kana: 'のみます',
      kanji: '飲みます',
      romaji: 'nomimasu',
      meaning: {
        en: 'to take (medicine) (薬を～: take medicine)',
        vi: 'uống (thuốc) (薬を～: uống thuốc)'
      },
      ruby: [{ base: '飲', reading: 'の' }]
    },
    {
      kana: 'はいります',
      kanji: '入ります',
      romaji: 'hairimasu',
      meaning: {
        en: 'to enter, to go into (お風呂に～: take a bath)',
        vi: 'vào (お風呂に～: tắm bồn)'
      },
      ruby: [{ base: '入', reading: 'はい' }]
    },
    {
      kana: 'たいせつ [な]',
      kanji: '大切 [な]',
      romaji: 'taisetsu [na]',
      meaning: { en: 'important, precious (na-adj)', vi: 'quan trọng (tính từ な)' },
      ruby: [
        { base: '大', reading: 'たい' },
        { base: '切', reading: 'せつ' }
      ]
    },
    {
      kana: 'だいじょうぶ [な]',
      kanji: '大丈夫 [な]',
      romaji: 'daijōbu [na]',
      meaning: { en: 'all right, fine (na-adj)', vi: 'ổn, không sao (tính từ な)' },
      ruby: [
        { base: '大', reading: 'だい' },
        { base: '丈', reading: 'じょう' },
        { base: '夫', reading: 'ぶ' }
      ]
    },
    {
      kana: 'あぶない',
      kanji: '危ない',
      romaji: 'abunai',
      meaning: { en: 'dangerous', vi: 'nguy hiểm' },
      ruby: [{ base: '危', reading: 'あぶ' }]
    },
    {
      kana: 'もんだい',
      kanji: '問題',
      romaji: 'mondai',
      meaning: { en: 'problem, question', vi: 'vấn đề, câu hỏi' },
      ruby: [{ base: '問', reading: 'もん' }]
    },
    {
      kana: 'こたえ',
      kanji: '答え',
      romaji: 'kotae',
      meaning: { en: 'answer', vi: 'câu trả lời' },
      ruby: [{ base: '答', reading: 'こた' }]
    },
    {
      kana: 'きんえん',
      kanji: '禁煙',
      romaji: "kin'en",
      meaning: { en: 'no smoking', vi: 'cấm hút thuốc' },
      ruby: [
        { base: '禁', reading: 'きん' },
        { base: '煙', reading: 'えん' }
      ]
    },
    {
      kana: 'けんこうほけんしょう',
      kanji: '健康保険証',
      romaji: 'kenkō hoken shō',
      meaning: { en: 'health insurance card', vi: 'thẻ bảo hiểm y tế' },
      ruby: [
        { base: '健', reading: 'けん' },
        { base: '康', reading: 'こう' },
        { base: '保', reading: 'ほ' },
        { base: '険', reading: 'けん' },
        { base: '証', reading: 'しょう' }
      ]
    },
    {
      kana: 'かぜ',
      kanji: '風邪',
      romaji: 'kaze',
      meaning: { en: 'cold (illness)', vi: 'cảm, cảm cúm' },
      ruby: [{ base: '風', reading: 'かぜ' }]
    },
    {
      kana: 'ねつ',
      kanji: '熱',
      romaji: 'netsu',
      meaning: { en: 'fever, heat', vi: 'sốt, nhiệt' },
      ruby: [{ base: '熱', reading: 'ねつ' }]
    },
    {
      kana: 'びょうき',
      kanji: '病気',
      romaji: 'byōki',
      meaning: { en: 'illness, sickness', vi: 'bệnh, ốm' },
      ruby: [
        { base: '病', reading: 'びょう' },
        { base: '気', reading: 'き' }
      ]
    },
    {
      kana: 'くすり',
      kanji: '薬',
      romaji: 'kusuri',
      meaning: { en: 'medicine', vi: 'thuốc' },
      ruby: [{ base: '薬', reading: 'くす' }]
    },
    {
      kana: 'おふろ',
      kanji: 'お風呂',
      romaji: 'ofuro',
      meaning: { en: 'bath', vi: 'bồn tắm, tắm' },
      ruby: [{ base: '風', reading: 'ふ' }]
    },
    {
      kana: 'うわぎ',
      kanji: '上着',
      romaji: 'uwagi',
      meaning: { en: 'jacket, outerwear', vi: 'áo khoác, áo ngoài' },
      ruby: [
        { base: '上', reading: 'うわ' },
        { base: '着', reading: 'ぎ' }
      ]
    },
    {
      kana: 'したぎ',
      kanji: '下着',
      romaji: 'shitagi',
      meaning: { en: 'underwear', vi: 'đồ lót' },
      ruby: [
        { base: '下', reading: 'した' },
        { base: '着', reading: 'ぎ' }
      ]
    },
    {
      kana: 'せんせい',
      kanji: '先生',
      romaji: 'sensei',
      meaning: { en: 'doctor (at a clinic)', vi: 'bác sĩ' },
      ruby: [
        { base: '先', reading: 'せん' },
        { base: '生', reading: 'せい' }
      ]
    },
    {
      kana: '2、3にち',
      kanji: '2、3日',
      romaji: 'ni, san-nichi',
      meaning: { en: 'two or three days', vi: 'hai, ba ngày' },
      ruby: [{ base: '日', reading: 'にち' }]
    },
    {
      kana: '2、3～',
      romaji: 'ni, san ~',
      meaning: { en: 'two or three ~', vi: 'hai, ba ~' }
    },
    {
      kana: '～までに',
      romaji: '~made ni',
      meaning: { en: 'by (deadline)', vi: 'trước, trước khi (hạn)' }
    },
    {
      kana: 'ですから',
      romaji: 'desu kara',
      meaning: { en: 'so, therefore', vi: 'vì vậy, cho nên' }
    }
  ],
  phrases: [
    {
      kana: 'どうしましたか。',
      romaji: 'Dō shimashita ka.',
      meaning: { en: 'What is the matter?', vi: 'Anh/Chị bị sao ạ?' }
    },
    {
      kana: 'のど',
      romaji: 'nodo',
      meaning: { en: 'throat', vi: 'họng' }
    },
    {
      kana: '～が いたいです。',
      kanji: '～が 痛いです。',
      romaji: '~ ga itai desu.',
      meaning: { en: '~ hurts.', vi: 'Đau ~.' },
      ruby: [{ base: '痛', reading: 'いた' }]
    },
    {
      kana: 'おだいじに。',
      kanji: 'お大事に。',
      romaji: 'O-daiji ni.',
      meaning: { en: 'Take care of yourself.', vi: 'Giữ gìn sức khỏe nhé.' },
      ruby: [
        { base: '大', reading: 'だい' },
        { base: '事', reading: 'じ' }
      ]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson17-doctor',
      title: { en: 'At the clinic', vi: 'Ở phòng khám' },
      speakers: [
        { id: 'nurse', name: '看護師' },
        { id: 'miller', name: 'ミラー' },
        { id: 'doctor', name: '先生' }
      ],
      lines: [
        {
          speakerId: 'nurse',
          jp: 'どうしましたか。',
          romaji: 'Dō shimashita ka.',
          meaning: { en: 'What is the matter?', vi: 'Anh bị sao ạ?' }
        },
        {
          speakerId: 'miller',
          jp: 'のどが 痛いです。熱も あります。',
          romaji: 'Nodo ga itai desu. Netsu mo arimasu.',
          meaning: {
            en: 'My throat hurts. I also have a fever.',
            vi: 'Tôi đau họng. Tôi cũng bị sốt.'
          },
          ruby: [
            { base: '痛', reading: 'いた' },
            { base: '熱', reading: 'ねつ' }
          ]
        },
        {
          speakerId: 'nurse',
          jp: '健康保険証を 見せて ください。',
          romaji: 'Kenkō hoken shō o misete kudasai.',
          meaning: {
            en: 'Please show me your health insurance card.',
            vi: 'Anh cho xem thẻ bảo hiểm y tế.'
          },
          ruby: [
            { base: '健', reading: 'けん' },
            { base: '康', reading: 'こう' },
            { base: '保', reading: 'ほ' },
            { base: '険', reading: 'けん' },
            { base: '証', reading: 'しょう' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'はい、どうぞ。',
          romaji: 'Hai, dōzo.',
          meaning: { en: 'Yes, here you are.', vi: 'Vâng, mời xem.' }
        },
        {
          speakerId: 'doctor',
          jp: '風邪ですね。薬を 飲んで、2、3日 休んで ください。',
          romaji: 'Kaze desu ne. Kusuri o nonde, ni, san-nichi yasunde kudasai.',
          meaning: {
            en: 'It is a cold. Please take medicine and rest for two or three days.',
            vi: 'Anh bị cảm. Anh uống thuốc và nghỉ hai, ba ngày nhé.'
          },
          ruby: [
            { base: '風', reading: 'か' },
            { base: '邪', reading: 'ぜ' },
            { base: '薬', reading: 'くす' },
            { base: '飲', reading: 'の' },
            { base: '日', reading: 'にち' },
            { base: '休', reading: 'やす' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'お風呂に 入っても いいですか。',
          romaji: 'Ofuro ni haitte mo ii desu ka.',
          meaning: { en: 'May I take a bath?', vi: 'Tôi tắm bồn được không?' },
          ruby: [
            { base: '風', reading: 'ふ' },
            { base: '呂', reading: 'ろ' },
            { base: '入', reading: 'はい' }
          ]
        },
        {
          speakerId: 'doctor',
          jp: 'いいえ、今日は 入らないで ください。お大事に。',
          romaji: 'Iie, kyō wa hairanai de kudasai. O-daiji ni.',
          meaning: {
            en: 'No, please do not take a bath today. Take care.',
            vi: 'Không, hôm nay đừng tắm bồn. Giữ gìn sức khỏe nhé.'
          },
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '入', reading: 'はい' },
            { base: '大', reading: 'だい' },
            { base: '事', reading: 'じ' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson17-office',
      title: { en: 'Rules at work', vi: 'Quy định ở công ty' },
      speakers: [
        { id: 'boss', name: '課長' },
        { id: 'miller', name: 'ミラー' }
      ],
      lines: [
        {
          speakerId: 'boss',
          jp: 'レポートは 金曜日までに 出さなければ なりません。',
          romaji: "Repōto wa kin'yōbi made ni dasanakereba narimasen.",
          meaning: {
            en: 'You must submit the report by Friday.',
            vi: 'Báo cáo phải nộp trước thứ Sáu.'
          },
          ruby: [
            { base: '金', reading: 'きん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '出', reading: 'だ' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'はい、わかりました。',
          romaji: 'Hai, wakarimashita.',
          meaning: { en: 'Yes, understood.', vi: 'Vâng, tôi hiểu rồi.' },
          ruby: [{ base: '分', reading: 'わ' }]
        },
        {
          speakerId: 'boss',
          jp: 'ここは 禁煙です。タバコを 吸わないで ください。',
          romaji: "Koko wa kin'en desu. Tabako o suwanai de kudasai.",
          meaning: {
            en: 'Smoking is not allowed here. Please do not smoke.',
            vi: 'Ở đây cấm hút thuốc. Anh đừng hút thuốc.'
          },
          ruby: [
            { base: '禁', reading: 'きん' },
            { base: '煙', reading: 'えん' },
            { base: '吸', reading: 'す' }
          ]
        },
        {
          speakerId: 'boss',
          jp: 'きょうは 残業しなくても いいです。早く 帰って ください。',
          romaji: 'Kyō wa zangyō shinakute mo ii desu. Hayaku kaette kudasai.',
          meaning: {
            en: 'You do not have to work overtime today. Please go home early.',
            vi: 'Hôm nay anh không cần làm thêm giờ. Anh về sớm đi.'
          },
          ruby: [
            { base: '残', reading: 'ざん' },
            { base: '業', reading: 'ぎょう' },
            { base: '早', reading: 'はや' },
            { base: '帰', reading: 'かえ' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson17-worry',
      title: { en: 'Do not worry', vi: 'Đừng lo' },
      speakers: [
        { id: 'yamada', name: '山田' },
        { id: 'lin', name: 'リン' }
      ],
      lines: [
        {
          speakerId: 'lin',
          jp: 'ミラーさんは 病気です。心配です。',
          romaji: 'Mirā-san wa byōki desu. Shinpai desu.',
          meaning: {
            en: 'Mr. Miller is sick. I am worried.',
            vi: 'Anh Miller bị ốm. Tôi lo lắm.'
          },
          ruby: [
            { base: '病', reading: 'びょう' },
            { base: '気', reading: 'き' },
            { base: '心', reading: 'しん' },
            { base: '配', reading: 'ぱい' }
          ]
        },
        {
          speakerId: 'yamada',
          jp: '心配しないで ください。2、3日 休めば 大丈夫です。',
          romaji: 'Shinpai shinaide kudasai. Ni, san-nichi yasumeba daijōbu desu.',
          meaning: {
            en: 'Please do not worry. If he rests two or three days, he will be fine.',
            vi: 'Đừng lo. Anh ấy nghỉ hai, ba ngày là ổn thôi.'
          },
          ruby: [
            { base: '心', reading: 'しん' },
            { base: '配', reading: 'ぱい' },
            { base: '日', reading: 'にち' },
            { base: '休', reading: 'やす' },
            { base: '大', reading: 'だい' },
            { base: '丈', reading: 'じょう' },
            { base: '夫', reading: 'ぶ' }
          ]
        },
        {
          speakerId: 'lin',
          jp: 'そうですか。じゃ、私は 薬を 持って 行きます。',
          romaji: 'Sō desu ka. Ja, watashi wa kusuri o motte ikimasu.',
          meaning: {
            en: 'I see. Then I will take medicine to him.',
            vi: 'Vậy à. Thế tôi mang thuốc đến cho anh ấy.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '薬', reading: 'くす' },
            { base: '持', reading: 'も' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-ない',
      highlights: ['ない'],
      title: { en: 'Negative form (V-ない形)', vi: 'Thể phủ định (V-ない形)' },
      explanation: {
        en: 'Drop ます and add ない to make the plain negative. Group I: 書き→書かない, 読み→読まない, 待ち→待たない; Group II: 食べ→食べない; Group III: する→しない, 来る→来ない. Add です for polite speech.',
        vi: 'Bỏ ます, thêm ない để phủ định thân mật. Nhóm I: 書き→書かない, 読み→読まない, 待ち→待たない; nhóm II: 食べ→食べない; nhóm III: する→しない, 来る→来ない. Thêm です để nói lịch sự.'
      },
      explanationRuby: [
        { base: '書', reading: 'か' },
        { base: '書', reading: 'か' },
        { base: '読', reading: 'よ' },
        { base: '読', reading: 'よ' },
        { base: '待', reading: 'ま' },
        { base: '待', reading: 'た' },
        { base: '食', reading: 'た' },
        { base: '食', reading: 'た' },
        { base: '来', reading: 'き' },
        { base: '来', reading: 'き' }
      ],
      examples: [
        {
          jp: '私は 今日 会社へ 行きません。',
          romaji: 'Watashi wa kyō kaisha e ikimasen.',
          meaning: {
            en: 'I am not going to the office today.',
            vi: 'Hôm nay tôi không đi công ty.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '風邪を ひきましたから、出かけません。',
          romaji: 'Kaze o hikimashita kara, dekakemasen.',
          meaning: {
            en: 'I caught a cold, so I am not going out.',
            vi: 'Tôi bị cảm nên không ra ngoài.'
          },
          ruby: [
            { base: '風', reading: 'か' },
            { base: '邪', reading: 'ぜ' },
            { base: '出', reading: 'で' }
          ]
        },
        {
          jp: '薬は 飲みませんか。',
          romaji: 'Kusuri wa nomimasen ka.',
          meaning: { en: 'Do you not take medicine?', vi: 'Anh/chị không uống thuốc à?' },
          dialogueGroup: 'medicine',
          ruby: [
            { base: '薬', reading: 'くす' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          jp: 'いいえ、飲みます。',
          romaji: 'Iie, nomimasu.',
          meaning: { en: 'No, I do take it.', vi: 'Không, tôi uống.' },
          dialogueGroup: 'medicine',
          ruby: [{ base: '飲', reading: 'の' }]
        }
      ]
    },
    {
      pattern: 'V-ないで ください',
      highlights: ['ない', 'で', 'ください'],
      title: { en: 'Please do not (V-ないでください)', vi: 'Xin đừng ~ (V-ないでください)' },
      explanation: {
        en: 'Use V-ないで ください to ask someone not to do something politely.',
        vi: 'Dùng V-ないで ください để nhờ ai đó đừng làm gì một cách lịch sự.'
      },
      examples: [
        {
          jp: 'ここで タバコを 吸わないで ください。',
          romaji: 'Koko de tabako o suwanai de kudasai.',
          meaning: { en: 'Please do not smoke here.', vi: 'Xin đừng hút thuốc ở đây.' },
          ruby: [{ base: '吸', reading: 'す' }]
        },
        {
          jp: '心配しないで ください。',
          romaji: 'Shinpai shinaide kudasai.',
          meaning: { en: 'Please do not worry.', vi: 'Xin đừng lo.' },
          ruby: [
            { base: '心', reading: 'しん' },
            { base: '配', reading: 'ぱい' }
          ]
        },
        {
          jp: '今日は お風呂に 入らないで ください。',
          romaji: 'Kyō wa ofuro ni hairanai de kudasai.',
          meaning: { en: 'Please do not take a bath today.', vi: 'Hôm nay xin đừng tắm bồn.' },
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '風', reading: 'ふ' },
            { base: '呂', reading: 'ろ' },
            { base: '入', reading: 'はい' }
          ]
        }
      ]
    },
    {
      pattern: 'V-なければ なりません',
      highlights: ['なければ', 'なりません'],
      title: { en: 'Must (V-なければなりません)', vi: 'Phải ~ (V-なければなりません)' },
      explanation: {
        en: 'V-なければ なりません expresses obligation: you must do something. Casual short form: V-なきゃ.',
        vi: 'V-なければ なりません diễn tả bắt buộc: phải làm gì. Dạng rút gọn thân mật: V-なきゃ.'
      },
      examples: [
        {
          jp: 'レポートは 金曜日までに 出さなければ なりません。',
          romaji: "Repōto wa kin'yōbi made ni dasanakereba narimasen.",
          meaning: {
            en: 'You must submit the report by Friday.',
            vi: 'Báo cáo phải nộp trước thứ Sáu.'
          },
          ruby: [
            { base: '金', reading: 'きん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '出', reading: 'だ' }
          ]
        },
        {
          jp: '病気ですから、薬を 飲まなければ なりません。',
          romaji: 'Byōki desu kara, kusuri o nomanakereba narimasen.',
          meaning: {
            en: 'You are sick, so you must take medicine.',
            vi: 'Bị bệnh nên phải uống thuốc.'
          },
          ruby: [
            { base: '病', reading: 'びょう' },
            { base: '気', reading: 'き' },
            { base: '薬', reading: 'くす' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          jp: '健康保険証を 持って 来なければ なりませんか。',
          romaji: 'Kenkō hoken shō o motte konakereba narimasen ka.',
          meaning: {
            en: 'Must I bring my health insurance card?',
            vi: 'Tôi có phải mang thẻ bảo hiểm y tế không?'
          },
          dialogueGroup: 'card',
          ruby: [
            { base: '健', reading: 'けん' },
            { base: '康', reading: 'こう' },
            { base: '保', reading: 'ほ' },
            { base: '険', reading: 'けん' },
            { base: '証', reading: 'しょう' },
            { base: '持', reading: 'も' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: 'はい、持って 来て ください。',
          romaji: 'Hai, motte kite kudasai.',
          meaning: { en: 'Yes, please bring it.', vi: 'Vâng, anh/chị mang theo nhé.' },
          dialogueGroup: 'card',
          ruby: [
            { base: '持', reading: 'も' },
            { base: '来', reading: 'き' }
          ]
        }
      ]
    },
    {
      pattern: 'V-なくても いいです',
      highlights: ['なくても', 'いいです'],
      title: { en: 'Do not have to (V-なくてもいいです)', vi: 'Không cần ~ (V-なくてもいいです)' },
      explanation: {
        en: 'V-なくても いいです means there is no obligation - you do not have to do something.',
        vi: 'V-なくても いいです nghĩa không bắt buộc - không cần phải làm gì.'
      },
      examples: [
        {
          jp: 'きょうは 残業しなくても いいです。',
          romaji: 'Kyō wa zangyō shinakute mo ii desu.',
          meaning: {
            en: 'You do not have to work overtime today.',
            vi: 'Hôm nay anh/chị không cần làm thêm giờ.'
          },
          ruby: [
            { base: '残', reading: 'ざん' },
            { base: '業', reading: 'ぎょう' }
          ]
        },
        {
          jp: '問題の 答えは 覚えなくても いいです。',
          romaji: 'Mondai no kotae wa oboenakute mo ii desu.',
          meaning: {
            en: 'You do not have to memorize the answers to the questions.',
            vi: 'Không cần nhớ câu trả lời của các câu hỏi.'
          },
          ruby: [
            { base: '問', reading: 'もん' },
            { base: '題', reading: 'だい' },
            { base: '答', reading: 'こた' },
            { base: '覚', reading: 'おぼ' }
          ]
        },
        {
          jp: '明日 出張しなくても いいですか。',
          romaji: 'Ashita shutchō shinakute mo ii desu ka.',
          meaning: {
            en: 'Do I not have to go on a business trip tomorrow?',
            vi: 'Ngày mai tôi không cần đi công tác phải không?'
          },
          dialogueGroup: 'trip',
          ruby: [
            { base: '明', reading: 'あ' },
            { base: '日', reading: 'した' },
            { base: '出', reading: 'しゅっ' },
            { base: '張', reading: 'ちょう' }
          ]
        },
        {
          jp: 'はい、大丈夫です。',
          romaji: 'Hai, daijōbu desu.',
          meaning: { en: 'Yes, that is fine.', vi: 'Vâng, không sao.' },
          dialogueGroup: 'trip',
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '丈', reading: 'じょう' },
            { base: '夫', reading: 'ぶ' }
          ]
        }
      ]
    },
    {
      pattern: 'Topic は (を→は)',
      highlights: ['は'],
      title: { en: 'Topic fronting (を→は)', vi: 'Đưa chủ đề lên (を→は)' },
      explanation: {
        en: 'Replace を with は to front the object as the topic - often for contrast or emphasis. 昼ごはんは うちで 食べます (As for lunch, I eat at home).',
        vi: 'Thay を bằng は để đưa tân ngữ lên làm chủ đề - thường để tương phản hoặc nhấn mạnh. 昼ごはんは うちで 食べます (Còn bữa trưa thì tôi ăn ở nhà).'
      },
      explanationRuby: [
        { base: '昼', reading: 'ひる' },
        { base: '食', reading: 'た' }
      ],
      examples: [
        {
          jp: '私は 毎日 コーヒーを 飲みます。お茶は 飲みません。',
          romaji: 'Watashi wa mainichi kōhī o nomimasu. Ocha wa nomimasen.',
          meaning: {
            en: 'I drink coffee every day. As for tea, I do not drink it.',
            vi: 'Tôi uống cà phê mỗi ngày. Còn trà thì không uống.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '飲', reading: 'の' },
            { base: '茶', reading: 'ちゃ' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          jp: '薬は もう 飲みました。水は まだ 飲んで いません。',
          romaji: 'Kusuri wa mō nomimashita. Mizu wa mada nonde imasen.',
          meaning: {
            en: 'I already took the medicine. As for water, I have not drunk any yet.',
            vi: 'Thuốc thì tôi uống rồi. Còn nước thì chưa uống.'
          },
          ruby: [
            { base: '薬', reading: 'くす' },
            { base: '飲', reading: 'の' },
            { base: '水', reading: 'みず' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          jp: '上着は 脱いで ください。下着は そのままで いいです。',
          romaji: 'Uwagi wa nuide kudasai. Shitagi wa sono mama de ii desu.',
          meaning: {
            en: 'Please take off your jacket. Your underwear can stay as is.',
            vi: 'Anh/chị cởi áo khoác. Đồ lót cứ để nguyên.'
          },
          ruby: [
            { base: '上', reading: 'うわ' },
            { base: '着', reading: 'ぎ' },
            { base: '脱', reading: 'ぬ' },
            { base: '下', reading: 'した' },
            { base: '着', reading: 'ぎ' }
          ]
        }
      ]
    },
    {
      pattern: 'N までに V',
      highlights: ['までに'],
      title: { en: 'By a deadline (N までに V)', vi: 'Trước hạn (N までに V)' },
      explanation: {
        en: 'N までに V states that something must be done by a time or date. までに marks the deadline; まで alone marks an endpoint in time.',
        vi: 'N までに V nói việc phải hoàn thành trước một thời điểm hoặc ngày. までに đánh dấu hạn; まで một mình chỉ điểm kết thúc.'
      },
      explanationRuby: [{ base: 'まで', reading: 'まで' }],
      examples: [
        {
          jp: 'レポートは 来週の 月曜日までに 出してください。',
          romaji: 'Repōto wa raishū no getsuyōbi made ni dashite kudasai.',
          meaning: {
            en: 'Please submit the report by next Monday.',
            vi: 'Xin nộp báo cáo trước thứ Hai tuần sau.'
          },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '月', reading: 'げつ' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '出', reading: 'だ' }
          ]
        },
        {
          jp: '薬は 食事の 前に 飲んで ください。3日までに 飲み切って ください。',
          romaji: 'Kusuri wa shokuji no mae ni nonde kudasai. Mikka made ni nomikitte kudasai.',
          meaning: {
            en: 'Take the medicine before meals. Please finish it within three days.',
            vi: 'Uống thuốc trước bữa ăn. Uống hết trong ba ngày nhé.'
          },
          ruby: [
            { base: '薬', reading: 'くす' },
            { base: '食', reading: 'しょく' },
            { base: '事', reading: 'じ' },
            { base: '前', reading: 'まえ' },
            { base: '飲', reading: 'の' },
            { base: '日', reading: 'か' },
            { base: '飲', reading: 'の' },
            { base: '切', reading: 'き' }
          ]
        },
        {
          jp: '病院の 代金は いつ 払わなければ なりませんか。',
          romaji: 'Byōin no daikin wa itsu harawanakereba narimasen ka.',
          meaning: {
            en: 'By when must I pay the hospital bill?',
            vi: 'Tôi phải trả tiền viện phí trước khi nào?'
          },
          dialogueGroup: 'pay',
          ruby: [
            { base: '病', reading: 'びょう' },
            { base: '院', reading: 'いん' },
            { base: '代', reading: 'だい' },
            { base: '金', reading: 'きん' },
            { base: '払', reading: 'はら' }
          ]
        },
        {
          jp: '今日中に 払って ください。',
          romaji: 'Kyō-jū ni haratte kudasai.',
          meaning: { en: 'Please pay by the end of today.', vi: 'Xin trả trong hôm nay.' },
          dialogueGroup: 'pay',
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '中', reading: 'じゅ' },
            { base: '払', reading: 'はら' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson17-sick',
      title: { en: 'Calling in sick', vi: 'Báo nghỉ vì ốm' },
      lines: [
        {
          jp: 'ミラーさんは きのう 熱が ありました。',
          romaji: 'Mirā-san wa kinō netsu ga arimashita.',
          meaning: {
            en: 'Mr. Miller had a fever yesterday.',
            vi: 'Hôm qua anh Miller bị sốt.'
          },
          ruby: [{ base: '熱', reading: 'ねつ' }]
        },
        {
          jp: 'のども 痛かったですから、会社へ 行きませんでした。',
          romaji: 'Nodo mo itakatta desu kara, kaisha e ikimasen deshita.',
          meaning: {
            en: 'His throat hurt too, so he did not go to the office.',
            vi: 'Họng cũng đau nên anh ấy không đi công ty.'
          },
          ruby: [
            { base: '痛', reading: 'いた' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '課長に 電話を しました。「きょうは 休みます。レポートは 金曜日までに 出します」',
          romaji:
            'Kachō ni denwa o shimashita. "Kyō wa yasumimasu. Repōto wa kin\'yōbi made ni dashimasu."',
          meaning: {
            en: 'He called his section chief: "I am taking today off. I will submit the report by Friday."',
            vi: 'Anh ấy gọi trưởng phòng: "Hôm nay tôi nghỉ. Báo cáo tôi nộp trước thứ Sáu."'
          },
          ruby: [
            { base: '課', reading: 'か' },
            { base: '長', reading: 'ちょう' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '休', reading: 'やす' },
            { base: '金', reading: 'きん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '出', reading: 'だ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What was wrong with Mr. Miller?', vi: 'Anh Miller bị sao?' },
          choices: [
            { id: 'a', label: { en: 'Fever and sore throat', vi: 'Sốt và đau họng' } },
            { id: 'b', label: { en: 'Broken leg', vi: 'Gãy chân' } },
            { id: 'c', label: { en: 'Lost wallet', vi: 'Mất ví' } },
            { id: 'd', label: { en: 'Business trip', vi: 'Đi công tác' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'Did he go to the office?', vi: 'Anh ấy có đi công ty không?' },
          choices: [
            { id: 'a', label: { en: 'No', vi: 'Không' } },
            { id: 'b', label: { en: 'Yes', vi: 'Có' } },
            { id: 'c', label: { en: 'Only in the afternoon', vi: 'Chỉ buổi chiều' } },
            { id: 'd', label: { en: 'Not said', vi: 'Không nói' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: {
            en: 'When will he submit the report?',
            vi: 'Anh ấy nộp báo cáo khi nào?'
          },
          choices: [
            { id: 'a', label: { en: 'By Friday', vi: 'Trước thứ Sáu' } },
            { id: 'b', label: { en: 'Today', vi: 'Hôm nay' } },
            { id: 'c', label: { en: 'Next month', vi: 'Tháng sau' } },
            { id: 'd', label: { en: 'He will not submit it', vi: 'Không nộp' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson17-clinic',
      title: { en: 'After the checkup', vi: 'Sau khi khám' },
      lines: [
        {
          jp: '先生は 「風邪です。大事に してください」 と 言いました。',
          romaji: 'Sensei wa "Kaze desu. Daiji ni shite kudasai." to iimashita.',
          meaning: {
            en: 'The doctor said, "It is a cold. Please take care of yourself."',
            vi: 'Bác sĩ nói: "Anh bị cảm. Anh giữ gìn sức khỏe nhé."'
          },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '風', reading: 'か' },
            { base: '邪', reading: 'ぜ' },
            { base: '大', reading: 'だい' },
            { base: '事', reading: 'じ' },
            { base: '言', reading: 'い' }
          ]
        },
        {
          jp: '薬は 1日 3回、食後に 飲みます。お風呂は 2、3日 入りません。',
          romaji:
            'Kusuri wa ichinichi san-kai, shokugo ni nomimasu. Ofuro wa ni, san-nichi hairimasen.',
          meaning: {
            en: 'Take medicine three times a day after meals. Do not bathe for two or three days.',
            vi: 'Uống thuốc ngày ba lần sau bữa ăn. Hai, ba ngày không tắm bồn.'
          },
          ruby: [
            { base: '薬', reading: 'くす' },
            { base: '日', reading: 'にち' },
            { base: '回', reading: 'かい' },
            { base: '食', reading: 'しょく' },
            { base: '後', reading: 'ご' },
            { base: '飲', reading: 'の' },
            { base: '風', reading: 'ふ' },
            { base: '呂', reading: 'ろ' },
            { base: '日', reading: 'にち' },
            { base: '入', reading: 'はい' }
          ]
        },
        {
          jp: '代金は 3,200円 です。今日中に 払わなければ なりません。',
          romaji: 'Daikin wa san-zen nihyaku en desu. Kyō-jū ni harawanakereba narimasen.',
          meaning: {
            en: 'The bill is 3,200 yen. It must be paid by the end of today.',
            vi: 'Tiền viện phí 3.200 yen. Phải trả trong hôm nay.'
          },
          ruby: [
            { base: '代', reading: 'だい' },
            { base: '金', reading: 'きん' },
            { base: '円', reading: 'えん' },
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '中', reading: 'じゅ' },
            { base: '払', reading: 'はら' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What illness did the doctor say it was?', vi: 'Bác sĩ nói bệnh gì?' },
          choices: [
            { id: 'a', label: { en: 'A cold', vi: 'Cảm' } },
            { id: 'b', label: { en: 'The flu', vi: 'Cúm' } },
            { id: 'c', label: { en: 'Food poisoning', vi: 'Ngộ độc thức ăn' } },
            { id: 'd', label: { en: 'A broken bone', vi: 'Gãy xương' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'When should he take the medicine?', vi: 'Uống thuốc khi nào?' },
          choices: [
            {
              id: 'a',
              label: { en: 'After meals, three times a day', vi: 'Sau bữa ăn, ngày ba lần' }
            },
            { id: 'b', label: { en: 'Before breakfast only', vi: 'Chỉ trước sáng' } },
            { id: 'c', label: { en: 'At bedtime only', vi: 'Chỉ trước khi ngủ' } },
            { id: 'd', label: { en: 'He should not take it', vi: 'Không uống' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'When must he pay?', vi: 'Phải trả tiền khi nào?' },
          choices: [
            { id: 'a', label: { en: 'By the end of today', vi: 'Trong hôm nay' } },
            { id: 'b', label: { en: 'Next week', vi: 'Tuần sau' } },
            { id: 'c', label: { en: 'In three days', vi: 'Sau ba ngày' } },
            { id: 'd', label: { en: 'No payment needed', vi: 'Không cần trả' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson17-rules',
      title: { en: 'Hospital rules', vi: 'Quy định bệnh viện' },
      lines: [
        {
          jp: 'この 病院は 禁煙です。廊下で タバコを 吸わないで ください。',
          romaji: "Kono byōin wa kin'en desu. Rōka de tabako o suwanai de kudasai.",
          meaning: {
            en: 'This hospital is non-smoking. Please do not smoke in the hallway.',
            vi: 'Bệnh viện này cấm hút thuốc. Xin đừng hút thuốc ở hành lang.'
          },
          ruby: [
            { base: '病', reading: 'びょう' },
            { base: '院', reading: 'いん' },
            { base: '禁', reading: 'きん' },
            { base: '煙', reading: 'えん' },
            { base: '廊', reading: 'ろう' },
            { base: '下', reading: 'か' },
            { base: '吸', reading: 'す' }
          ]
        },
        {
          jp: '健康保険証を 忘れた 人は 全額 払わなければ なりません。',
          romaji: 'Kenkō hoken shō o wasureta hito wa zengaku harawanakereba narimasen.',
          meaning: {
            en: 'People who forgot their health insurance card must pay the full amount.',
            vi: 'Người quên thẻ bảo hiểm y tế phải trả toàn bộ.'
          },
          ruby: [
            { base: '健', reading: 'けん' },
            { base: '康', reading: 'こう' },
            { base: '保', reading: 'ほ' },
            { base: '険', reading: 'けん' },
            { base: '証', reading: 'しょう' },
            { base: '忘', reading: 'わす' },
            { base: '人', reading: 'ひと' },
            { base: '全', reading: 'ぜん' },
            { base: '額', reading: 'がく' },
            { base: '払', reading: 'はら' }
          ]
        },
        {
          jp: '危ないですから、走らないで ください。',
          romaji: 'Abunai desu kara, hashiranai de kudasai.',
          meaning: {
            en: 'It is dangerous, so please do not run.',
            vi: 'Nguy hiểm nên xin đừng chạy.'
          },
          ruby: [
            { base: '危', reading: 'あぶ' },
            { base: '走', reading: 'はし' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'Is smoking allowed in the hospital?',
            vi: 'Bệnh viện có cho hút thuốc không?'
          },
          choices: [
            { id: 'a', label: { en: 'No', vi: 'Không' } },
            { id: 'b', label: { en: 'Yes, anywhere', vi: 'Có, mọi nơi' } },
            { id: 'c', label: { en: 'Only outside', vi: 'Chỉ ngoài trời' } },
            { id: 'd', label: { en: 'Not said', vi: 'Không nói' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What happens if you forget your insurance card?',
            vi: 'Quên thẻ bảo hiểm thì sao?'
          },
          choices: [
            { id: 'a', label: { en: 'Pay the full amount', vi: 'Trả toàn bộ' } },
            { id: 'b', label: { en: 'Free treatment', vi: 'Miễn phí' } },
            { id: 'c', label: { en: 'Cannot enter', vi: 'Không vào được' } },
            { id: 'd', label: { en: 'No problem', vi: 'Không sao' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'Why should you not run?', vi: 'Vì sao không nên chạy?' },
          choices: [
            { id: 'a', label: { en: 'It is dangerous', vi: 'Nguy hiểm' } },
            { id: 'b', label: { en: 'It is too cold', vi: 'Quá lạnh' } },
            { id: 'c', label: { en: 'Doctors forbid exercise', vi: 'Bác sĩ cấm vận động' } },
            { id: 'd', label: { en: 'The floor is wet only', vi: 'Chỉ vì sàn ướt' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Body and illness', vi: 'Cơ thể và bệnh tật' },
      includeInQuiz: false,
      intro: {
        en: 'Common symptoms and illnesses for describing how you feel.',
        vi: 'Triệu chứng và bệnh thường gặp khi mô tả tình trạng sức khỏe.'
      },
      items: [
        {
          kana: 'あたまが いたい',
          kanji: '頭が 痛い',
          romaji: 'atama ga itai',
          meaning: { en: 'headache', vi: 'đau đầu' },
          ruby: [
            { base: '頭', reading: 'あたま' },
            { base: '痛', reading: 'いた' }
          ]
        },
        {
          kana: 'おなかが いたい',
          kanji: 'おなかが 痛い',
          romaji: 'onaka ga itai',
          meaning: { en: 'stomachache', vi: 'đau bụng' },
          ruby: [{ base: '痛', reading: 'いた' }]
        },
        {
          kana: 'はが いたい',
          kanji: '歯が 痛い',
          romaji: 'ha ga itai',
          meaning: { en: 'toothache', vi: 'đau răng' },
          ruby: [
            { base: '歯', reading: 'は' },
            { base: '痛', reading: 'いた' }
          ]
        },
        {
          kana: 'のどが いたい',
          kanji: 'のどが 痛い',
          romaji: 'nodo ga itai',
          meaning: { en: 'sore throat', vi: 'đau họng' },
          ruby: [{ base: '痛', reading: 'いた' }]
        },
        {
          kana: 'ねつが ある',
          kanji: '熱が ある',
          romaji: 'netsu ga aru',
          meaning: { en: 'to have a fever', vi: 'bị sốt' },
          ruby: [{ base: '熱', reading: 'ねつ' }]
        },
        {
          kana: 'せき',
          kanji: '咳',
          romaji: 'seki',
          meaning: { en: 'cough', vi: 'ho' },
          ruby: [{ base: '咳', reading: 'せき' }]
        },
        {
          kana: 'はなみず',
          kanji: '鼻水',
          romaji: 'hanamizu',
          meaning: { en: 'runny nose', vi: 'sổ mũi' },
          ruby: [
            { base: '鼻', reading: 'はな' },
            { base: '水', reading: 'みず' }
          ]
        },
        {
          kana: 'かぜ',
          kanji: '風邪',
          romaji: 'kaze',
          meaning: { en: 'cold (illness)', vi: 'cảm' },
          ruby: [{ base: '風', reading: 'かぜ' }]
        },
        {
          kana: 'インフルエンザ',
          romaji: 'infuruenza',
          meaning: { en: 'influenza, flu', vi: 'cúm' }
        },
        {
          kana: 'はなはなびょう',
          kanji: '花粉症',
          romaji: 'kafun-shō',
          meaning: { en: 'hay fever, pollen allergy', vi: 'dị ứng phấn hoa' },
          ruby: [
            { base: '花', reading: 'か' },
            { base: '粉', reading: 'ふん' },
            { base: '症', reading: 'しょう' }
          ]
        },
        {
          kana: 'せなかが いたい',
          kanji: '背中が 痛い',
          romaji: 'senaka ga itai',
          meaning: { en: 'backache', vi: 'đau lưng' },
          ruby: [
            { base: '背', reading: 'せ' },
            { base: '中', reading: 'なか' },
            { base: '痛', reading: 'いた' }
          ]
        },
        {
          kana: 'めが いたい',
          kanji: '目が 痛い',
          romaji: 'me ga itai',
          meaning: { en: 'eye pain', vi: 'đau mắt' },
          ruby: [
            { base: '目', reading: 'め' },
            { base: '痛', reading: 'いた' }
          ]
        },
        {
          kana: 'みみが いたい',
          kanji: '耳が 痛い',
          romaji: 'mimi ga itai',
          meaning: { en: 'earache', vi: 'đau tai' },
          ruby: [
            { base: '耳', reading: 'みみ' },
            { base: '痛', reading: 'いた' }
          ]
        },
        {
          kana: 'くすり',
          kanji: '薬',
          romaji: 'kusuri',
          meaning: { en: 'medicine', vi: 'thuốc' },
          ruby: [{ base: '薬', reading: 'くす' }]
        }
      ]
    }
  ]
};
