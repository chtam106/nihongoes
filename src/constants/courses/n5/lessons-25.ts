import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 25 (たら, ても, もし, いくら). */
export const n5Lesson25: Lesson = {
  id: 'lesson-25',
  number: 25,
  title: {
    en: 'If and even if',
    vi: 'Nếu và dù'
  },
  focus: {
    en: 'Express conditions with 〜たら, concessions with 〜ても, and emphasize hypotheticals with もし and いくら.',
    vi: 'Diễn tả điều kiện với 〜たら, nhượng bộ với 〜ても, và nhấn mạnh giả định với もし và いくら.'
  },
  vocab: [
    {
      kana: 'かんがえます',
      kanji: '考えます',
      romaji: 'kangaemasu',
      meaning: { en: 'to think, to consider', vi: 'nghĩ, suy nghĩ' },
      ruby: [{ base: '考', reading: 'かんが' }]
    },
    {
      kana: 'つきます',
      kanji: '着きます',
      romaji: 'tsukimasu',
      meaning: {
        en: 'to arrive (駅に～: arrive at a station)',
        vi: 'đến (駅に～: đến ga)'
      },
      ruby: [{ base: '着', reading: 'つ' }]
    },
    {
      kana: 'りゅうがくします',
      kanji: '留学します',
      romaji: 'ryūgaku shimasu',
      meaning: { en: 'to study abroad', vi: 'du học' },
      ruby: [{ base: '留', reading: 'りゅう' }]
    },
    {
      kana: 'としをとります',
      kanji: '年を取ります',
      romaji: 'toshi o torimasu',
      meaning: { en: 'to grow old, to age', vi: 'già đi, lớn tuổi' },
      ruby: [
        { base: '年', reading: 'とし' },
        { base: '取', reading: 'と' }
      ]
    },
    {
      kana: 'いなか',
      kanji: '田舎',
      romaji: 'inaka',
      meaning: { en: 'countryside, hometown', vi: 'nông thôn, quê' },
      ruby: [{ base: '田', reading: 'いな' }]
    },
    {
      kana: 'たいしかん',
      kanji: '大使館',
      romaji: 'taishikan',
      meaning: { en: 'embassy', vi: 'đại sứ quán' },
      ruby: [
        { base: '大', reading: 'たい' },
        { base: '使', reading: 'し' },
        { base: '館', reading: 'かん' }
      ]
    },
    {
      kana: 'グループ',
      romaji: 'gurūpu',
      meaning: { en: 'group', vi: 'nhóm' }
    },
    {
      kana: 'チャンス',
      romaji: 'chansu',
      meaning: { en: 'chance, opportunity', vi: 'cơ hội' }
    },
    {
      kana: 'おく',
      kanji: '億',
      romaji: 'oku',
      meaning: { en: '100 million', vi: '100 triệu (một ức)' },
      ruby: [{ base: '億', reading: 'おく' }]
    },
    {
      kana: 'もし～たら',
      romaji: 'moshi ~tara',
      meaning: { en: 'if (emphasizing a hypothetical)', vi: 'nếu (nhấn mạnh giả định)' }
    },
    {
      kana: 'いくら～でも',
      romaji: 'ikura ~demo',
      meaning: { en: 'however much, no matter how', vi: 'dù bao nhiêu, dù thế nào' }
    },
    {
      kana: 'てんきん',
      kanji: '転勤',
      romaji: 'tenkin',
      meaning: { en: 'job transfer (to another office)', vi: 'chuyển công tác' },
      ruby: [{ base: '転', reading: 'てん' }]
    },
    {
      kana: 'てんきんします',
      kanji: '転勤します',
      romaji: 'tenkin shimasu',
      meaning: { en: 'to be transferred (to another office)', vi: 'bị chuyển công tác' },
      ruby: [{ base: '転', reading: 'てん' }]
    },
    {
      kana: 'こと',
      kanji: '事',
      romaji: 'koto',
      meaning: {
        en: 'thing, matter (abstract; nominalizer in grammar)',
        vi: 'việc, chuyện (trừu tượng; hóa danh từ trong ngữ pháp)'
      },
      ruby: [{ base: '事', reading: 'こと' }]
    }
  ],
  phrases: [
    {
      kana: 'いっぱい 飲みましょう。',
      kanji: '一杯 飲みましょう。',
      romaji: 'Ippai nomimashō.',
      meaning: { en: 'Let us have a drink.', vi: 'Uống một ly nhé.' },
      ruby: [
        { base: '一', reading: 'いっ' },
        { base: '杯', reading: 'ぱい' },
        { base: '飲', reading: 'の' }
      ]
    },
    {
      kana: 'いろいろ おせわに なりました。',
      kanji: 'いろいろ お世話になりました。',
      romaji: 'Iroiro osewa ni narimashita.',
      meaning: {
        en: 'Thank you for all your help.',
        vi: 'Cảm ơn đã giúp đỡ nhiều.'
      },
      ruby: [{ base: '世', reading: 'せ' }]
    },
    {
      kana: 'がんばります。',
      kanji: '頑張ります。',
      romaji: 'Ganbarimasu.',
      meaning: { en: 'I will do my best.', vi: 'Tôi sẽ cố gắng.' },
      ruby: [{ base: '頑', reading: 'がん' }]
    },
    {
      kana: 'どうぞ おげんきで。',
      kanji: 'どうぞ お元気で。',
      romaji: 'Dōzo o-genki de.',
      meaning: { en: 'Please take care. (farewell)', vi: 'Chúc anh/chị mạnh khỏe. (tạm biệt)' },
      ruby: [{ base: '元', reading: 'げん' }]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson25-transfer',
      title: { en: 'Job transfer', vi: 'Chuyển công tác' },
      speakers: [
        { id: 'miller', name: 'ミラー' },
        { id: 'yamada', name: '山田' }
      ],
      lines: [
        {
          speakerId: 'miller',
          jp: '来月 大阪へ 転勤します。',
          romaji: 'Raigetsu Ōsaka e tenkin shimasu.',
          meaning: {
            en: 'I am being transferred to Osaka next month.',
            vi: 'Tháng sau tôi chuyển công tác sang Osaka.'
          },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '月', reading: 'げつ' },
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '転', reading: 'てん' },
            { base: '勤', reading: 'きん' }
          ]
        },
        {
          speakerId: 'yamada',
          jp: 'そうですか。もし 時間が あれば、送別会を しましょう。',
          romaji: 'Sō desu ka. Moshi jikan ga areba, sōbetsukai o shimashō.',
          meaning: {
            en: 'I see. If there is time, let us have a farewell party.',
            vi: 'Vậy à. Nếu có thời gian, tổ chức tiệc chia tay nhé.'
          },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' },
            { base: '送', reading: 'そう' },
            { base: '別', reading: 'べつ' },
            { base: '会', reading: 'かい' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'ありがとうございます。着いたら 連絡します。',
          romaji: 'Arigatō gozaimasu. Tsuitara renraku shimasu.',
          meaning: {
            en: 'Thank you. I will contact you when I arrive.',
            vi: 'Cảm ơn. Đến nơi tôi sẽ liên lạc.'
          },
          ruby: [
            { base: '着', reading: 'つ' },
            { base: '連', reading: 'れん' },
            { base: '絡', reading: 'らく' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson25-farewell',
      title: { en: 'Saying goodbye', vi: 'Chia tay' },
      speakers: [
        { id: 'sato', name: '佐藤' },
        { id: 'kim', name: 'キム' }
      ],
      lines: [
        {
          speakerId: 'sato',
          jp: 'いろいろ お世話に なりました。どうぞ お元気で。',
          romaji: 'Iroiro osewa ni narimashita. Dōzo o-genki de.',
          meaning: {
            en: 'Thank you for everything. Please take care.',
            vi: 'Cảm ơn đã giúp đỡ nhiều. Chúc bạn mạnh khỏe.'
          },
          ruby: [
            { base: '世', reading: 'せ' },
            { base: '話', reading: 'わ' },
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          speakerId: 'kim',
          jp: 'こちらこそ。日本へ 帰っても 日本語を 忘れないで ください。',
          romaji: 'Kochira koso. Nihon e kaette mo Nihongo o wasurenaide kudasai.',
          meaning: {
            en: 'Likewise. Even after returning to your country, please do not forget Japanese.',
            vi: 'Tôi cũng vậy. Dù về nước cũng đừng quên tiếng Nhật nhé.'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '帰', reading: 'かえ' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '忘', reading: 'わす' }
          ]
        },
        {
          speakerId: 'sato',
          jp: 'もちろん。一杯 飲みましょう。',
          romaji: 'Mochiron. Ippai nomimashō.',
          meaning: { en: 'Of course. Let us have a drink.', vi: 'Tất nhiên. Uống một ly nhé.' },
          ruby: [
            { base: '一', reading: 'いっ' },
            { base: '杯', reading: 'ぱい' },
            { base: '飲', reading: 'の' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-たら',
      highlights: ['たら'],
      title: { en: 'If / when (V-たら)', vi: 'Nếu / khi (V-たら)' },
      explanation: {
        en: 'V-たら means "if" or "when" something happens: 駅に 着いたら 電話を ください. It can express a condition or a sequence of events.',
        vi: 'V-たら nghĩa "nếu" hoặc "khi" việc xảy ra: 駅に 着いたら 電話を ください. Có thể diễn điều kiện hoặc trình tự sự việc.'
      },
      explanationRuby: [
        { base: '駅', reading: 'えき' },
        { base: '着', reading: 'つ' },
        { base: '電', reading: 'でん' },
        { base: '話', reading: 'わ' }
      ],
      examples: [
        {
          jp: 'もし チャンスが あったら、留学したい です。',
          romaji: 'Moshi chansu ga attara, ryūgaku shitai desu.',
          meaning: {
            en: 'If I get a chance, I want to study abroad.',
            vi: 'Nếu có cơ hội, tôi muốn du học.'
          },
          ruby: [
            { base: '留', reading: 'りゅう' },
            { base: '学', reading: 'がく' }
          ]
        },
        {
          jp: '田舎に 帰ったら、おじいちゃんに 会います。',
          romaji: 'Inaka ni kaettara, ojīchan ni aimasu.',
          meaning: {
            en: 'When I return to the countryside, I will see Grandpa.',
            vi: 'Về quê tôi sẽ gặp ông.'
          },
          ruby: [
            { base: '田', reading: 'いな' },
            { base: '舎', reading: 'か' },
            { base: '帰', reading: 'かえ' },
            { base: '会', reading: 'あ' }
          ]
        },
        {
          jp: '考えたら、答えが わかります。',
          romaji: 'Kangaetara, kotae ga wakarimasu.',
          meaning: {
            en: 'If you think about it, you will understand the answer.',
            vi: 'Nếu suy nghĩ thì sẽ hiểu câu trả lời.'
          },
          ruby: [
            { base: '考', reading: 'かんが' },
            { base: '答', reading: 'こた' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ても',
      highlights: ['ても'],
      title: { en: 'Even if (V-ても)', vi: 'Dù / dù cho (V-ても)' },
      explanation: {
        en: 'V-ても expresses concession: the result holds even under that condition: いくら 考えても わかりません.',
        vi: 'V-ても diễn tả nhượng bộ: kết quả vẫn đúng dù có điều kiện đó: いくら 考えても わかりません.'
      },
      explanationRuby: [{ base: '考', reading: 'かんが' }],
      examples: [
        {
          jp: 'いくら 練習しても、まだ 上手じゃ ありません。',
          romaji: 'Ikura renshū shite mo, mada jōzu ja arimasen.',
          meaning: {
            en: 'No matter how much I practice, I am still not good at it.',
            vi: 'Dù luyện bao nhiêu, tôi vẫn chưa giỏi.'
          },
          ruby: [
            { base: '練', reading: 'れん' },
            { base: '習', reading: 'しゅう' },
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' }
          ]
        },
        {
          jp: '雨が 降っても、試合は あります。',
          romaji: 'Ame ga futte mo, shiai wa arimasu.',
          meaning: {
            en: 'Even if it rains, the game will be held.',
            vi: 'Dù mưa, trận đấu vẫn diễn ra.'
          },
          ruby: [
            { base: '雨', reading: 'あめ' },
            { base: '降', reading: 'ふ' },
            { base: '試', reading: 'し' },
            { base: '合', reading: 'あい' }
          ]
        }
      ]
    },
    {
      pattern: 'もし ～ たら',
      highlights: ['もし', 'たら'],
      title: {
        en: 'Emphasizing a hypothetical (もし〜たら)',
        vi: 'Nhấn mạnh giả định (もし〜たら)'
      },
      explanation: {
        en: 'もし before 〜たら emphasizes a hypothetical condition: もし 1億円 あったら、何を しますか.',
        vi: 'もし đứng trước 〜たら nhấn mạnh giả định: もし 1億円 あったら、何を しますか.'
      },
      explanationRuby: [
        { base: '億', reading: 'おく' },
        { base: '円', reading: 'えん' },
        { base: '何', reading: 'なに' }
      ],
      examples: [
        {
          jp: 'もし 大使館で 働いたら、いい こと ですね。',
          romaji: 'Moshi taishikan de hataraitara, ii koto desu ne.',
          meaning: {
            en: 'If you worked at the embassy, that would be nice.',
            vi: 'Nếu làm ở đại sứ quán thì hay nhỉ.'
          },
          ruby: [
            { base: '大', reading: 'たい' },
            { base: '使', reading: 'し' },
            { base: '館', reading: 'かん' },
            { base: '働', reading: 'はたら' }
          ]
        }
      ]
    },
    {
      pattern: 'いくら ～ ても',
      highlights: ['いくら', 'ても'],
      title: { en: 'No matter how much (いくら〜ても)', vi: 'Dù bao nhiêu (いくら〜ても)' },
      explanation: {
        en: 'いくら 〜ても means "no matter how much" or "however many times": いくら 食べても 足りません.',
        vi: 'いくら 〜ても nghĩa "dù bao nhiêu" hoặc "dù bao nhiêu lần": いくら 食べても 足りません.'
      },
      explanationRuby: [
        { base: '食', reading: 'た' },
        { base: '足', reading: 'た' }
      ],
      examples: [
        {
          jp: 'いくら 年を 取っても、元気で いたい です。',
          romaji: 'Ikura toshi o totte mo, genki de itai desu.',
          meaning: {
            en: 'No matter how old I get, I want to stay healthy.',
            vi: 'Dù già đi thế nào, tôi vẫn muốn khỏe mạnh.'
          },
          ruby: [
            { base: '年', reading: 'とし' },
            { base: '取', reading: 'と' },
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        }
      ]
    },
    {
      pattern: 'Subordinate clause ＋ が',
      highlights: ['が'],
      title: { en: 'が in subordinate clauses', vi: 'が trong mệnh đề phụ' },
      explanation: {
        en: 'In subordinate clauses, が can mark the subject when it differs from the main clause topic: 転勤する ことが 決まりましたが、家族が 心配しています.',
        vi: 'Trong mệnh đề phụ, が đánh dấu chủ ngữ khác với chủ đề câu chính: 転勤する ことが 決まりましたが、家族が 心配しています.'
      },
      explanationRuby: [
        { base: '転', reading: 'てん' },
        { base: '勤', reading: 'きん' },
        { base: '決', reading: 'き' },
        { base: '家', reading: 'か' },
        { base: '族', reading: 'ぞく' },
        { base: '心', reading: 'しん' },
        { base: '配', reading: 'ぱい' }
      ],
      examples: [
        {
          jp: '留学する ことを 考えていますが、お金が 足りません。',
          romaji: 'Ryūgaku suru koto o kangaete imasu ga, okane ga tarimasen.',
          meaning: {
            en: 'I am thinking about studying abroad, but I do not have enough money.',
            vi: 'Tôi đang nghĩ đến du học, nhưng tiền không đủ.'
          },
          ruby: [
            { base: '留', reading: 'りゅう' },
            { base: '学', reading: 'がく' },
            { base: '考', reading: 'かんが' },
            { base: '金', reading: 'かね' },
            { base: '足', reading: 'た' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form ＋ こと',
      highlights: ['こと'],
      title: { en: 'Nominalizer (〜こと)', vi: 'Hóa danh từ (〜こと)' },
      explanation: {
        en: 'Plain form + こと turns a verb phrase into a noun: 日本語を 話す こと, 転勤する こと.',
        vi: 'Thể thường + こと biến cụm động từ thành danh từ: 日本語を 話す こと, 転勤する こと.'
      },
      explanationRuby: [
        { base: '日', reading: 'に' },
        { base: '本', reading: 'ほん' },
        { base: '語', reading: 'ご' },
        { base: '話', reading: 'はな' },
        { base: '転', reading: 'てん' },
        { base: '勤', reading: 'きん' }
      ],
      examples: [
        {
          jp: 'グループで 働く ことは 大変ですが、チャンスも 多い です。',
          romaji: 'Gurūpu de hataraku koto wa taihen desu ga, chansu mo ōi desu.',
          meaning: {
            en: 'Working in a group is hard, but there are many chances too.',
            vi: 'Làm việc theo nhóm vất vả, nhưng cũng có nhiều cơ hội.'
          },
          ruby: [
            { base: '働', reading: 'はたら' },
            { base: '大', reading: 'たい' },
            { base: '変', reading: 'へん' },
            { base: '多', reading: 'おお' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson25-dream',
      title: { en: 'Thinking about the future', vi: 'Nghĩ về tương lai' },
      lines: [
        {
          jp: '私は よく 将来の ことを 考えます。',
          romaji: 'Watashi wa yoku shōrai no koto o kangaemasu.',
          meaning: {
            en: 'I often think about the future.',
            vi: 'Tôi hay nghĩ về tương lai.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '将', reading: 'しょう' },
            { base: '来', reading: 'らい' },
            { base: '考', reading: 'かんが' }
          ]
        },
        {
          jp: 'もし 1億円 あったら、田舎に 大きな 家を 建てたい です。',
          romaji: 'Moshi ichi-oku-en attara, inaka ni ōkina ie o tatetai desu.',
          meaning: {
            en: 'If I had 100 million yen, I would like to build a big house in the countryside.',
            vi: 'Nếu có 1 ức yên, tôi muốn xây nhà lớn ở quê.'
          },
          ruby: [
            { base: '億', reading: 'おく' },
            { base: '円', reading: 'えん' },
            { base: '田', reading: 'いな' },
            { base: '舎', reading: 'か' },
            { base: '大', reading: 'おお' },
            { base: '家', reading: 'いえ' },
            { base: '建', reading: 'た' }
          ]
        },
        {
          jp: 'でも いくら 考えても、今は 留学の お金が 足りません。',
          romaji: 'Demo ikura kangaete mo, ima wa ryūgaku no okane ga tarimasen.',
          meaning: {
            en: 'But no matter how much I think, right now I do not have enough money to study abroad.',
            vi: 'Nhưng dù nghĩ thế nào, bây giờ tiền du học vẫn không đủ.'
          },
          ruby: [
            { base: '考', reading: 'かんが' },
            { base: '今', reading: 'いま' },
            { base: '留', reading: 'りゅう' },
            { base: '学', reading: 'がく' },
            { base: '金', reading: 'かね' },
            { base: '足', reading: 'た' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What does the speaker often think about?',
            vi: 'Người nói hay nghĩ về gì?'
          },
          choices: [
            { id: 'a', label: { en: 'The future', vi: 'Tương lai' } },
            { id: 'b', label: { en: 'Traffic lights', vi: 'Đèn tín hiệu' } },
            { id: 'c', label: { en: 'Coffee', vi: 'Cà phê' } },
            { id: 'd', label: { en: 'Parking lots', vi: 'Bãi đỗ xe' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What is the problem now?', vi: 'Vấn đề hiện tại là gì?' },
          choices: [
            {
              id: 'a',
              label: { en: 'Not enough money for study abroad', vi: 'Không đủ tiền du học' }
            },
            { id: 'b', label: { en: 'The machine is broken', vi: 'Máy hỏng' } },
            { id: 'c', label: { en: 'Lost passport', vi: 'Mất hộ chiếu' } },
            { id: 'd', label: { en: 'No group', vi: 'Không có nhóm' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Farewell expressions', vi: 'Cụm từ chia tay' },
      includeInQuiz: false,
      intro: {
        en: 'Common phrases when parting or seeing someone off.',
        vi: 'Cụm từ thường dùng khi chia tay hoặc tiễn ai.'
      },
      items: [
        {
          kana: 'さようなら',
          romaji: 'sayōnara',
          meaning: { en: 'goodbye', vi: 'tạm biệt' }
        },
        {
          kana: 'また あいましょう',
          kanji: 'また 会いましょう',
          romaji: 'Mata aimashō',
          meaning: { en: 'Let us meet again.', vi: 'Hẹn gặp lại.' },
          ruby: [{ base: '会', reading: 'あ' }]
        },
        {
          kana: 'おだいじに',
          kanji: 'お大事に',
          romaji: 'Odaiji ni',
          meaning: { en: 'Take care (when someone is ill)', vi: 'Giữ gìn sức khỏe (khi ai ốm)' },
          ruby: [{ base: '大', reading: 'だい' }]
        },
        {
          kana: 'おつかれさまでした',
          kanji: 'お疲れ様でした',
          romaji: 'Otsukaresama deshita',
          meaning: { en: 'Thank you for your hard work.', vi: 'Cảm ơn vì đã vất vả.' },
          ruby: [{ base: '疲', reading: 'つか' }]
        },
        {
          kana: 'いってらっしゃい',
          romaji: 'Itterasshai',
          meaning: {
            en: 'Have a good trip. (said to someone leaving)',
            vi: 'Đi cẩn thận nhé. (nói với người đi)'
          }
        },
        {
          kana: 'いってきます',
          romaji: 'Itte kimasu',
          meaning: { en: 'I am off. (said when leaving home)', vi: 'Tôi đi đây. (khi rời nhà)' }
        },
        {
          kana: 'ただいま',
          romaji: 'Tadaima',
          meaning: { en: 'I am home.', vi: 'Tôi về rồi.' }
        },
        {
          kana: 'おかえりなさい',
          romaji: 'Okaerinasai',
          meaning: { en: 'Welcome home.', vi: 'Chào mừng về nhà.' }
        }
      ]
    }
  ]
};
