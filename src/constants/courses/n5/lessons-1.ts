import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 1 (Introductions (は, です, も, の)). */
export const n5Lesson1: Lesson = {
  id: 'lesson-1',
  number: 1,
  title: {
    en: 'Introductions',
    vi: 'Giới thiệu bản thân'
  },
  focus: {
    en: 'Introduce yourself and others: state nationality, job, and affiliation with は, です, も, and の.',
    vi: 'Giới thiệu bản thân và người khác: nói quốc tịch, nghề nghiệp và nơi trực thuộc với は, です, も và の.'
  },
  vocab: [
    {
      kana: 'わたし',
      kanji: '私',
      romaji: 'watashi',
      ruby: [{ base: '私', reading: 'わたし' }],
      meaning: { en: 'I, me', vi: 'tôi' }
    },
    {
      kana: 'わたしたち',
      kanji: '私たち',
      romaji: 'watashitachi',
      ruby: [{ base: '私', reading: 'わたし' }],
      meaning: { en: 'we, us', vi: 'chúng tôi, chúng ta' }
    },
    { kana: 'あなた', romaji: 'anata', meaning: { en: 'you', vi: 'bạn, anh/chị' } },
    {
      kana: 'あのひと',
      kanji: 'あの人',
      romaji: 'ano hito',
      ruby: [{ base: '人', reading: 'ひと' }],
      meaning: { en: 'that person, he/she', vi: 'người kia, người đó' }
    },
    {
      kana: 'あのかた',
      kanji: 'あの方',
      romaji: 'ano kata',
      ruby: [{ base: '方', reading: 'かた' }],
      meaning: { en: 'that person (polite)', vi: 'vị kia (lịch sự)' }
    },
    {
      kana: 'みなさん',
      kanji: '皆さん',
      romaji: 'minasan',
      ruby: [{ base: '皆', reading: 'みな' }],
      meaning: { en: 'everyone, all of you', vi: 'mọi người, các bạn' }
    },
    {
      kana: '〜さん',
      romaji: 'san',
      speech: 'さん',
      meaning: { en: 'Mr./Ms. (polite suffix)', vi: 'anh/chị/ông/bà (hậu tố lịch sự)' }
    },
    {
      kana: '〜ちゃん',
      romaji: 'chan',
      speech: 'ちゃん',
      meaning: {
        en: '~chan (affectionate suffix, especially for little girls)',
        vi: '~chan (hậu tố thân mật, nhất là với bé gái)'
      }
    },
    {
      kana: '〜くん',
      kanji: '〜君',
      romaji: 'kun',
      speech: 'くん',
      ruby: [{ base: '君', reading: 'くん' }],
      meaning: {
        en: '~kun (familiar suffix, especially for boys)',
        vi: '~kun (hậu tố thân mật, nhất là với bé trai)'
      }
    },
    {
      kana: '〜じん',
      kanji: '〜人',
      romaji: 'jin',
      speech: 'じん',
      ruby: [{ base: '人', reading: 'じん' }],
      meaning: { en: '~ people (nationality suffix)', vi: 'người ~ (hậu tố quốc tịch)' }
    },
    {
      kana: 'せんせい',
      kanji: '先生',
      romaji: 'sensei',
      ruby: [
        { base: '先', reading: 'せん' },
        { base: '生', reading: 'せい' }
      ],
      meaning: { en: 'teacher (also a title)', vi: 'giáo viên (cũng dùng làm kính ngữ)' }
    },
    {
      kana: 'きょうし',
      kanji: '教師',
      romaji: 'kyōshi',
      ruby: [
        { base: '教', reading: 'きょう' },
        { base: '師', reading: 'し' }
      ],
      meaning: { en: 'teacher (occupation)', vi: 'giáo viên (nghề nghiệp)' }
    },
    {
      kana: 'がくせい',
      kanji: '学生',
      romaji: 'gakusei',
      ruby: [
        { base: '学', reading: 'がく' },
        { base: '生', reading: 'せい' }
      ],
      meaning: { en: 'student', vi: 'học sinh, sinh viên' }
    },
    {
      kana: 'かいしゃいん',
      kanji: '会社員',
      romaji: 'kaishain',
      ruby: [
        { base: '会', reading: 'かい' },
        { base: '社', reading: 'しゃ' },
        { base: '員', reading: 'いん' }
      ],
      meaning: { en: 'company employee', vi: 'nhân viên công ty' }
    },
    {
      kana: 'しゃいん',
      kanji: '社員',
      romaji: 'shain',
      ruby: [
        { base: '社', reading: 'しゃ' },
        { base: '員', reading: 'いん' }
      ],
      meaning: { en: 'employee (of ~ company)', vi: 'nhân viên (của công ty ~)' }
    },
    {
      kana: 'ぎんこういん',
      kanji: '銀行員',
      romaji: 'ginkōin',
      ruby: [
        { base: '銀', reading: 'ぎん' },
        { base: '行', reading: 'こう' },
        { base: '員', reading: 'いん' }
      ],
      meaning: { en: 'bank employee', vi: 'nhân viên ngân hàng' }
    },
    {
      kana: 'いしゃ',
      kanji: '医者',
      romaji: 'isha',
      ruby: [
        { base: '医', reading: 'い' },
        { base: '者', reading: 'しゃ' }
      ],
      meaning: { en: 'doctor', vi: 'bác sĩ' }
    },
    {
      kana: 'けんきゅうしゃ',
      kanji: '研究者',
      romaji: 'kenkyūsha',
      ruby: [
        { base: '研', reading: 'けん' },
        { base: '究', reading: 'きゅう' },
        { base: '者', reading: 'しゃ' }
      ],
      meaning: { en: 'researcher', vi: 'nhà nghiên cứu' }
    },
    { kana: 'エンジニア', romaji: 'enjinia', meaning: { en: 'engineer', vi: 'kỹ sư' } },
    {
      kana: 'だいがく',
      kanji: '大学',
      romaji: 'daigaku',
      ruby: [
        { base: '大', reading: 'だい' },
        { base: '学', reading: 'がく' }
      ],
      meaning: { en: 'university', vi: 'trường đại học' }
    },
    {
      kana: 'びょういん',
      kanji: '病院',
      romaji: 'byōin',
      ruby: [
        { base: '病', reading: 'びょう' },
        { base: '院', reading: 'いん' }
      ],
      meaning: { en: 'hospital', vi: 'bệnh viện' }
    },
    { kana: 'だれ', romaji: 'dare', meaning: { en: 'who', vi: 'ai' } },
    {
      kana: 'どなた',
      romaji: 'donata',
      meaning: { en: 'who (polite)', vi: 'vị nào (lịch sự)' }
    },
    {
      kana: '〜さい',
      kanji: '〜歳',
      romaji: 'sai',
      speech: 'さい',
      ruby: [{ base: '歳', reading: 'さい' }],
      meaning: { en: '~ years old', vi: '~ tuổi' }
    },
    {
      kana: 'なんさい',
      kanji: '何歳',
      romaji: 'nansai',
      ruby: [
        { base: '何', reading: 'なん' },
        { base: '歳', reading: 'さい' }
      ],
      meaning: { en: 'how old (plain)', vi: 'mấy tuổi (thường)' }
    },
    {
      kana: 'おいくつ',
      romaji: 'oikutsu',
      meaning: { en: 'how old (polite)', vi: 'bao nhiêu tuổi (lịch sự)' }
    },
    { kana: 'はい', romaji: 'hai', meaning: { en: 'yes', vi: 'vâng, đúng' } },
    { kana: 'いいえ', romaji: 'iie', meaning: { en: 'no', vi: 'không' } }
  ],
  phrases: [
    {
      kana: 'はじめまして。',
      romaji: 'Hajimemashite.',
      meaning: { en: 'How do you do? (first meeting)', vi: 'Rất hân hạnh (lần đầu gặp).' }
    },
    {
      kana: 'どうぞ よろしく おねがいします。',
      romaji: 'Dōzo yoroshiku onegaishimasu.',
      meaning: {
        en: 'Nice to meet you; I look forward to your kindness.',
        vi: 'Rất mong được giúp đỡ.'
      }
    },
    {
      kana: 'おなまえは なんですか。',
      kanji: 'お名前は何ですか。',
      romaji: 'Onamae wa nan desu ka.',
      meaning: { en: 'What is your name?', vi: 'Bạn tên là gì?' },
      ruby: [
        { base: '名', reading: 'な' },
        { base: '前', reading: 'まえ' },
        { base: '何', reading: 'なん' }
      ]
    },
    {
      kana: 'しつれいですが。',
      kanji: '失礼ですが。',
      romaji: 'Shitsurei desu ga.',
      meaning: {
        en: 'Excuse me, but... (polite lead-in)',
        vi: 'Xin lỗi, cho hỏi... (mở đầu lịch sự)'
      },
      ruby: [
        { base: '失', reading: 'しつ' },
        { base: '礼', reading: 'れい' }
      ]
    },
    {
      kana: 'アメリカから きました。',
      romaji: 'Amerika kara kimashita.',
      meaning: { en: 'I came from America.', vi: 'Tôi đến từ Mỹ.' }
    },
    {
      kana: 'こちらは アレックスさんです。',
      romaji: 'Kochira wa Arekkusu-san desu.',
      meaning: { en: 'This is Alex.', vi: 'Đây là anh Alex.' }
    }
  ],
  conversation: [
    {
      id: 'conv-1',
      title: { en: 'First meeting', vi: 'Lần đầu gặp mặt' },
      speakers: [
        {
          id: 'alex',
          name: 'アレックス'
        },
        {
          id: 'yamada',
          name: 'やまだ'
        }
      ],
      lines: [
        {
          speakerId: 'alex',
          jp: 'はじめまして。私は アレックス・リバラです。',
          romaji: 'Hajimemashite. Watashi wa Arekkusu Ribara desu.',
          meaning: {
            en: 'Nice to meet you. I am Alex Rivera.',
            vi: 'Rất vui được gặp. Tôi là Alex Rivera.'
          },
          ruby: [{ base: '私', reading: 'わたし' }]
        },
        {
          speakerId: 'alex',
          jp: 'アメリカから 来ました。',
          romaji: 'Amerika kara kimashita.',
          meaning: { en: 'I came from America.', vi: 'Tôi đến từ Mỹ.' },
          ruby: [{ base: '来', reading: 'き' }]
        },
        {
          speakerId: 'alex',
          jp: 'さくら商事の 会社員です。どうぞ よろしく お願いします。',
          romaji: 'Sakura shōji no kaishain desu. Dōzo yoroshiku onegaishimasu.',
          meaning: {
            en: 'I am an employee at Sakura Trading. Pleased to meet you.',
            vi: 'Tôi là nhân viên công ty Sakura. Rất mong được giúp đỡ.'
          },
          ruby: [
            { base: '商', reading: 'しょう' },
            { base: '事', reading: 'じ' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '員', reading: 'いん' },
            { base: '願', reading: 'ねが' }
          ]
        },
        {
          speakerId: 'yamada',
          jp: 'やまだです。日本語の 先生です。',
          romaji: 'Yamada desu. Nihongo no sensei desu.',
          meaning: {
            en: 'I am Yamada. I am a Japanese teacher.',
            vi: 'Tôi là Yamada. Tôi là giáo viên tiếng Nhật.'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' }
          ]
        }
      ]
    },
    {
      id: 'conv-2',
      title: { en: 'At the office', vi: 'Tại văn phòng' },
      speakers: [
        {
          id: 'alex',
          name: 'アレックス'
        },
        {
          id: 'maria',
          name: 'マリア'
        }
      ],
      lines: [
        {
          speakerId: 'alex',
          jp: '失礼ですが、お名前は 何ですか。',
          romaji: 'Shitsurei desu ga, onamae wa nan desu ka.',
          meaning: {
            en: 'Excuse me, but what is your name?',
            vi: 'Xin lỗi, cho hỏi bạn tên là gì?'
          },
          ruby: [
            { base: '失', reading: 'しつ' },
            { base: '礼', reading: 'れい' },
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          speakerId: 'maria',
          jp: 'マリア・コスタです。ブラジルから 来ました。',
          romaji: 'Maria Kosta desu. Burajiru kara kimashita.',
          meaning: {
            en: 'I am Maria Costa. I came from Brazil.',
            vi: 'Tôi là Maria Costa. Tôi đến từ Brazil.'
          },
          ruby: [{ base: '来', reading: 'き' }]
        },
        {
          speakerId: 'alex',
          jp: 'マリアさんも 会社員ですか。',
          romaji: 'Maria-san mo kaishain desu ka.',
          meaning: {
            en: 'Are you a company employee too, Maria?',
            vi: 'Chị Maria cũng là nhân viên công ty phải không?'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '員', reading: 'いん' }
          ]
        },
        {
          speakerId: 'maria',
          jp: 'はい、さくら商事の 会社員です。',
          romaji: 'Hai, Sakura shōji no kaishain desu.',
          meaning: {
            en: 'Yes, I am an employee at Sakura Trading.',
            vi: 'Vâng, tôi là nhân viên công ty Sakura.'
          },
          ruby: [
            { base: '商', reading: 'しょう' },
            { base: '事', reading: 'じ' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '員', reading: 'いん' }
          ]
        },
        {
          speakerId: 'alex',
          jp: '私も 会社員です。',
          romaji: 'Watashi mo kaishain desu.',
          meaning: {
            en: 'I am a company employee too.',
            vi: 'Tôi cũng là nhân viên công ty.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '員', reading: 'いん' }
          ]
        }
      ]
    },
    {
      id: 'conv-3',
      title: { en: 'Introducing Yuki', vi: 'Giới thiệu Yuki' },
      speakers: [
        {
          id: 'maria',
          name: 'マリア'
        },
        {
          id: 'alex',
          name: 'アレックス'
        },
        {
          id: 'yuki',
          name: 'ゆき'
        }
      ],
      lines: [
        {
          speakerId: 'maria',
          jp: 'こちらは ゆきちゃんです。',
          romaji: 'Kochira wa Yuki-chan desu.',
          meaning: { en: 'This is Yuki.', vi: 'Đây là bé Yuki.' }
        },
        {
          speakerId: 'alex',
          jp: 'ゆきちゃんは 何歳ですか。',
          romaji: 'Yuki-chan wa nansai desu ka.',
          meaning: { en: 'How old is Yuki?', vi: 'Bé Yuki bao nhiêu tuổi?' },
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '歳', reading: 'さい' }
          ]
        },
        {
          speakerId: 'maria',
          jp: '9歳です。',
          romaji: 'Kyū-sai desu.',
          meaning: { en: 'She is nine years old.', vi: 'Bé 9 tuổi.' },
          ruby: [{ base: '歳', reading: 'さい' }]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N1 は N2 です',
      highlights: ['は', 'です'],
      title: {
        en: 'N1 is N2 (statement with です)',
        vi: 'N1 là N2 (câu khẳng định với です)'
      },
      explanation: {
        en: 'は (read "wa") marks the topic; です ends a polite statement and works like "is/am/are".',
        vi: 'は (đọc là "wa") đánh dấu chủ đề; です kết thúc câu lịch sự, tương đương "là".'
      },
      examples: [
        {
          jp: '私は 学生です。',
          romaji: 'Watashi wa gakusei desu.',
          meaning: { en: 'I am a student.', vi: 'Tôi là học sinh.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          jp: 'アレックスさんは 会社員です。',
          romaji: 'Arekkusu-san wa kaishain desu.',
          meaning: {
            en: 'Alex is a company employee.',
            vi: 'Anh Alex là nhân viên công ty.'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '員', reading: 'いん' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 は N2 じゃありません',
      highlights: ['は', 'じゃありません'],
      title: { en: 'N1 is not N2 (negative)', vi: 'N1 không phải là N2 (phủ định)' },
      explanation: {
        en: 'Replace です with じゃありません (or the more formal ではありません) to make it negative.',
        vi: 'Thay です bằng じゃありません (hoặc ではありません trang trọng hơn) để phủ định.'
      },
      examples: [
        {
          jp: '私は 先生じゃありません。',
          romaji: 'Watashi wa sensei ja arimasen.',
          meaning: { en: 'I am not a teacher.', vi: 'Tôi không phải là giáo viên.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          jp: 'アレックスさんは 医者じゃありません。',
          romaji: 'Arekkusu-san wa isha ja arimasen.',
          meaning: { en: 'Alex is not a doctor.', vi: 'Anh Alex không phải là bác sĩ.' },
          ruby: [
            { base: '医', reading: 'い' },
            { base: '者', reading: 'しゃ' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 は N2 ですか',
      highlights: ['は', 'です', 'か'],
      title: {
        en: 'Yes/no question with か',
        vi: 'Câu hỏi có/không với か'
      },
      explanation: {
        en: 'Add か to the end to make a yes/no question. No question mark is needed in Japanese.',
        vi: 'Thêm か vào cuối câu để tạo câu hỏi có/không. Tiếng Nhật không cần dấu chấm hỏi.'
      },
      examples: [
        {
          jp: 'あなたは 学生ですか。',
          romaji: 'Anata wa gakusei desu ka.',
          meaning: { en: 'Are you a student?', vi: 'Bạn là học sinh phải không?' },
          ruby: [
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          jp: 'あの人は 先生ですか。',
          romaji: 'Ano hito wa sensei desu ka.',
          meaning: {
            en: 'Is that person a teacher?',
            vi: 'Người kia là giáo viên phải không?'
          },
          ruby: [
            { base: '人', reading: 'ひと' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' }
          ]
        }
      ],
      answers: {
        highlights: ['です', 'じゃありません', 'そうです', 'ちがいます'],
        explanation: {
          en: 'Answer はい、そうです ("yes, that\'s right") or いいえ、ちがいます ("no, that\'s wrong"); you can also answer with the full sentence - affirmative (はい、～です) or negative (いいえ、～じゃありません).',
          vi: 'Trả lời はい、そうです ("vâng, đúng vậy") hoặc いいえ、ちがいます ("không, không phải"); cũng có thể trả lời bằng cả câu - khẳng định (はい、～です) hoặc phủ định (いいえ、～じゃありません).'
        },
        examples: [
          {
            jp: 'はい、学生です。',
            romaji: 'Hai, gakusei desu.',
            meaning: {
              en: "Yes, I'm a student. (full affirmative)",
              vi: 'Vâng, tôi là học sinh. (khẳng định đầy đủ)'
            },
            ruby: [
              { base: '学', reading: 'がく' },
              { base: '生', reading: 'せい' }
            ]
          },
          {
            jp: 'いいえ、学生じゃありません。',
            romaji: 'Iie, gakusei ja arimasen.',
            meaning: {
              en: "No, I'm not a student. (full negative)",
              vi: 'Không, tôi không phải học sinh. (phủ định đầy đủ)'
            },
            ruby: [
              { base: '学', reading: 'がく' },
              { base: '生', reading: 'せい' }
            ]
          },
          {
            jp: 'はい、そうです。',
            romaji: 'Hai, sō desu.',
            meaning: {
              en: "Yes, that's right. (short affirmative)",
              vi: 'Vâng, đúng vậy. (khẳng định gọn)'
            }
          },
          {
            jp: 'いいえ、違います。',
            romaji: 'Iie, chigaimasu.',
            meaning: {
              en: "No, that's wrong. (short negative)",
              vi: 'Không, không phải. (phủ định gọn)'
            },
            ruby: [{ base: '違', reading: 'ちが' }]
          }
        ]
      }
    },
    {
      pattern: 'N も',
      highlights: ['も'],
      title: { en: 'も (also, too)', vi: 'も (cũng)' },
      explanation: {
        en: 'も replaces は to say the same thing is also true for another topic ("...too").',
        vi: 'も thay cho は để nói điều đó cũng đúng với một chủ đề khác ("... cũng ...").'
      },
      examples: [
        {
          jp: 'アレックスさんも 会社員です。',
          romaji: 'Arekkusu-san mo kaishain desu.',
          meaning: {
            en: 'Alex is a company employee too.',
            vi: 'Anh Alex cũng là nhân viên công ty.'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '員', reading: 'いん' }
          ]
        },
        {
          jp: '私も 学生です。',
          romaji: 'Watashi mo gakusei desu.',
          meaning: { en: 'I am a student too.', vi: 'Tôi cũng là học sinh.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 の N2',
      highlights: ['の'],
      excludeHighlights: ['この', 'その', 'あの', 'どの'],
      title: { en: 'の (affiliation / belonging)', vi: 'の (nơi trực thuộc / thuộc về)' },
      explanation: {
        en: 'の links two nouns; here the first noun (company, school, country) tells which group the second belongs to.',
        vi: 'の nối hai danh từ; ở đây danh từ đầu (công ty, trường, quốc gia) cho biết danh từ sau thuộc nhóm nào.'
      },
      examples: [
        {
          jp: '私は さくら大学の 学生です。',
          romaji: 'Watashi wa Sakura daigaku no gakusei desu.',
          meaning: {
            en: 'I am a student at Sakura University.',
            vi: 'Tôi là sinh viên trường đại học Sakura.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          jp: 'あの人は 日本語の 先生です。',
          romaji: 'Ano hito wa nihongo no sensei desu.',
          meaning: {
            en: 'That person is a Japanese teacher.',
            vi: 'Người kia là giáo viên tiếng Nhật.'
          },
          ruby: [
            { base: '人', reading: 'ひと' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' }
          ]
        }
      ]
    },
    {
      pattern: 'N は だれ ですか',
      highlights: ['は', 'だれ', 'どなた', 'です', 'か'],
      excludeHighlights: ['あの方'],
      title: { en: 'Asking who (だれ / どなた)', vi: 'Hỏi "ai" (だれ / どなた)' },
      explanation: {
        en: 'Ask who someone is with だれ. どなた is the polite version, used with あの方.',
        vi: 'Hỏi ai đó là ai với だれ. どなた là cách nói lịch sự, dùng với あの方.'
      },
      explanationRuby: [{ base: '方', reading: 'かた' }],
      examples: [
        {
          jp: 'あの人は だれですか。',
          romaji: 'Ano hito wa dare desu ka.',
          meaning: { en: 'Who is that person?', vi: 'Người kia là ai?' },
          ruby: [{ base: '人', reading: 'ひと' }]
        },
        {
          jp: 'あの方は どなたですか。',
          romaji: 'Ano kata wa donata desu ka.',
          meaning: { en: 'Who is that person? (polite)', vi: 'Vị kia là ai? (lịch sự)' },
          ruby: [{ base: '方', reading: 'かた' }]
        }
      ],
      answers: {
        highlights: ['は', 'です'],
        explanation: {
          en: 'Answer by naming the person or their role with N1 は N2 です.',
          vi: 'Trả lời bằng cách nêu tên hoặc vai trò của người đó với N1 は N2 です.'
        },
        examples: [
          {
            jp: 'あの人は アレックスさんです。',
            romaji: 'Ano hito wa Arekkusu-san desu.',
            meaning: { en: 'That person is Alex.', vi: 'Người kia là anh Alex.' },
            ruby: [{ base: '人', reading: 'ひと' }]
          },
          {
            jp: 'あの方は やまだ先生です。',
            romaji: 'Ano kata wa Yamada-sensei desu.',
            meaning: { en: 'That person is Professor Yamada.', vi: 'Vị kia là thầy Yamada.' },
            ruby: [
              { base: '方', reading: 'かた' },
              { base: '先', reading: 'せん' },
              { base: '生', reading: 'せい' }
            ]
          }
        ]
      }
    },
    {
      pattern: 'N は 何歳 ですか',
      patternRuby: [
        { base: '何', reading: 'なん' },
        { base: '歳', reading: 'さい' }
      ],
      highlights: ['は', '何', '歳', 'おいくつ', 'です', 'か'],
      title: { en: 'Asking age (何歳 / おいくつ)', vi: 'Hỏi tuổi (何歳 / おいくつ)' },
      titleRuby: [
        { base: '何', reading: 'なん' },
        { base: '歳', reading: 'さい' }
      ],
      explanation: {
        en: 'Ask age with 何歳. おいくつ is the polite version.',
        vi: 'Hỏi tuổi với 何歳. おいくつ là cách nói lịch sự.'
      },
      explanationRuby: [
        { base: '何', reading: 'なん' },
        { base: '歳', reading: 'さい' }
      ],
      examples: [
        {
          jp: 'ゆきちゃんは 何歳ですか。',
          romaji: 'Yuki-chan wa nansai desu ka.',
          meaning: { en: 'How old is Yuki?', vi: 'Bé Yuki bao nhiêu tuổi?' },
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '歳', reading: 'さい' }
          ]
        },
        {
          jp: 'おいくつですか。',
          romaji: 'Oikutsu desu ka.',
          meaning: { en: 'How old are you? (polite)', vi: 'Anh/chị bao nhiêu tuổi? (lịch sự)' }
        }
      ],
      answers: {
        highlights: ['歳', 'です'],
        excludeHighlights: ['はたち'],
        explanation: {
          en: 'Answer with a number + 歳; 20 years old is the special reading はたち.',
          vi: 'Trả lời bằng số + 歳; 20 tuổi đọc đặc biệt là はたち.'
        },
        explanationRuby: [{ base: '歳', reading: 'さい' }],
        examples: [
          {
            jp: '9歳です。',
            romaji: 'Kyū-sai desu.',
            meaning: { en: 'She is nine years old.', vi: 'Bé 9 tuổi.' },
            ruby: [{ base: '歳', reading: 'さい' }]
          },
          {
            jp: 'はたちです。',
            romaji: 'Hatachi desu.',
            meaning: {
              en: "I'm 20 years old. (special reading)",
              vi: 'Tôi 20 tuổi. (cách đọc đặc biệt)'
            }
          }
        ]
      }
    }
  ],
  reading: [
    {
      id: 'reading-1',
      title: { en: 'Nice to meet you', vi: 'Rất vui được gặp' },
      lines: [
        {
          jp: 'はじめまして。私は アレックス・リバラです。',
          romaji: 'Hajimemashite. Watashi wa Arekkusu Ribara desu.',
          meaning: {
            en: 'Nice to meet you. I am Alex Rivera.',
            vi: 'Rất vui được gặp. Tôi là Alex Rivera.'
          },
          ruby: [{ base: '私', reading: 'わたし' }]
        },
        {
          jp: 'アメリカから 来ました。',
          romaji: 'Amerika kara kimashita.',
          meaning: { en: 'I came from America.', vi: 'Tôi đến từ Mỹ.' },
          ruby: [{ base: '来', reading: 'き' }]
        },
        {
          jp: 'さくら商事の 会社員です。どうぞ よろしく お願いします。',
          romaji: 'Sakura shōji no kaishain desu. Dōzo yoroshiku onegaishimasu.',
          meaning: {
            en: 'I am an employee at Sakura Trading. Pleased to meet you.',
            vi: 'Tôi là nhân viên công ty Sakura. Rất mong được giúp đỡ.'
          },
          ruby: [
            { base: '商', reading: 'しょう' },
            { base: '事', reading: 'じ' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '員', reading: 'いん' },
            { base: '願', reading: 'ねが' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'Where did Alex come from?', vi: 'Anh Alex đến từ đâu?' },
          choices: [
            { id: 'a', label: { en: 'America', vi: 'Mỹ' } },
            { id: 'b', label: { en: 'Japan', vi: 'Nhật Bản' } },
            { id: 'c', label: { en: 'China', vi: 'Trung Quốc' } },
            { id: 'd', label: { en: 'Vietnam', vi: 'Việt Nam' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: "What is Alex's job?", vi: 'Anh Alex làm nghề gì?' },
          choices: [
            { id: 'a', label: { en: 'Student', vi: 'Học sinh' } },
            { id: 'b', label: { en: 'Company employee', vi: 'Nhân viên công ty' } },
            { id: 'c', label: { en: 'Teacher', vi: 'Giáo viên' } },
            { id: 'd', label: { en: 'Doctor', vi: 'Bác sĩ' } }
          ],
          correctId: 'b'
        }
      ]
    },
    {
      id: 'reading-2',
      title: { en: 'Colleagues at Sakura', vi: 'Đồng nghiệp ở Sakura' },
      lines: [
        {
          jp: 'マリア・コスタさんは ブラジルから 来ました。',
          romaji: 'Maria Kosta-san wa Burajiru kara kimashita.',
          meaning: {
            en: 'Maria Costa came from Brazil.',
            vi: 'Chị Maria Costa đến từ Brazil.'
          },
          ruby: [{ base: '来', reading: 'き' }]
        },
        {
          jp: 'マリアさんも さくら商事の 会社員です。',
          romaji: 'Maria-san mo Sakura shōji no kaishain desu.',
          meaning: {
            en: 'Maria is also an employee at Sakura Trading.',
            vi: 'Chị Maria cũng là nhân viên công ty Sakura.'
          },
          ruby: [
            { base: '商', reading: 'しょう' },
            { base: '事', reading: 'じ' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '員', reading: 'いん' }
          ]
        },
        {
          jp: '私も 会社員です。',
          romaji: 'Watashi mo kaishain desu.',
          meaning: { en: 'I am a company employee too.', vi: 'Tôi cũng là nhân viên công ty.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '員', reading: 'いん' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'Where is Maria from?', vi: 'Chị Maria đến từ đâu?' },
          choices: [
            { id: 'a', label: { en: 'Brazil', vi: 'Brazil' } },
            { id: 'b', label: { en: 'America', vi: 'Mỹ' } },
            { id: 'c', label: { en: 'Japan', vi: 'Nhật Bản' } },
            { id: 'd', label: { en: 'Vietnam', vi: 'Việt Nam' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'Where do Maria and the speaker work?',
            vi: 'Chị Maria và người nói làm ở đâu?'
          },
          choices: [
            { id: 'a', label: { en: 'Sakura Trading', vi: 'Công ty Sakura' } },
            { id: 'b', label: { en: 'A hospital', vi: 'Bệnh viện' } },
            { id: 'c', label: { en: 'A university', vi: 'Trường đại học' } },
            { id: 'd', label: { en: 'A bank', vi: 'Ngân hàng' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-3',
      title: { en: 'Introducing Yuki', vi: 'Giới thiệu Yuki' },
      lines: [
        {
          jp: 'こちらは ゆきちゃんです。',
          romaji: 'Kochira wa Yuki-chan desu.',
          meaning: { en: 'This is Yuki.', vi: 'Đây là bé Yuki.' }
        },
        {
          jp: 'ゆきちゃんは 9歳です。',
          romaji: 'Yuki-chan wa kyū-sai desu.',
          meaning: { en: 'Yuki is nine years old.', vi: 'Bé Yuki 9 tuổi.' },
          ruby: [{ base: '歳', reading: 'さい' }]
        },
        {
          jp: 'ゆきちゃんは 学生じゃありません。',
          romaji: 'Yuki-chan wa gakusei ja arimasen.',
          meaning: { en: 'Yuki is not a student.', vi: 'Bé Yuki không phải là sinh viên.' },
          ruby: [
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'Who is being introduced?', vi: 'Người được giới thiệu là ai?' },
          choices: [
            { id: 'a', label: { en: 'Yuki', vi: 'Yuki' } },
            { id: 'b', label: { en: 'Maria', vi: 'Maria' } },
            { id: 'c', label: { en: 'Alex', vi: 'Alex' } },
            { id: 'd', label: { en: 'Yamada', vi: 'Yamada' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'How old is Yuki?', vi: 'Bé Yuki bao nhiêu tuổi?' },
          choices: [
            { id: 'a', label: { en: '9 years old', vi: '9 tuổi' } },
            { id: 'b', label: { en: '20 years old', vi: '20 tuổi' } },
            { id: 'c', label: { en: '25 years old', vi: '25 tuổi' } },
            { id: 'd', label: { en: '8 years old', vi: '8 tuổi' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'table',
      title: { en: 'Countries, people & languages', vi: 'Nước, người & ngôn ngữ' },
      intro: {
        en: 'Country names (国), nationalities with 〜人, and languages with 〜語.',
        vi: 'Tên nước (国), quốc tịch với 〜人 và ngôn ngữ với 〜語.'
      },
      columns: {
        country: { en: 'Country (国)', vi: 'Nước (国)' },
        person: { en: 'Person (人)', vi: 'Người (人)' },
        language: { en: 'Language (語)', vi: 'Ngôn ngữ (語)' }
      },
      rows: [
        {
          country: { jp: 'アメリカ', meaning: { en: 'USA', vi: 'Mỹ' } },
          person: {
            jp: 'アメリカ人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'アメリカじん'
          },
          languages: [
            {
              jp: '英語',
              ruby: [
                { base: '英', reading: 'えい' },
                { base: '語', reading: 'ご' }
              ],
              meaning: { en: 'English', vi: 'tiếng Anh' },
              speech: 'えいご'
            }
          ]
        },
        {
          country: { jp: 'イギリス', meaning: { en: 'UK', vi: 'Anh' } },
          person: {
            jp: 'イギリス人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'イギリスじん'
          },
          languages: [
            {
              jp: '英語',
              ruby: [
                { base: '英', reading: 'えい' },
                { base: '語', reading: 'ご' }
              ],
              meaning: { en: 'English', vi: 'tiếng Anh' },
              speech: 'えいご'
            }
          ]
        },
        {
          country: { jp: 'イタリア', meaning: { en: 'Italy', vi: 'Ý' } },
          person: {
            jp: 'イタリア人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'イタリアじん'
          },
          languages: [
            {
              jp: 'イタリア語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'Italian', vi: 'tiếng Ý' },
              speech: 'イタリアご'
            }
          ]
        },
        {
          country: { jp: 'イラン', meaning: { en: 'Iran', vi: 'Iran' } },
          person: {
            jp: 'イラン人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'イランじん'
          },
          languages: [
            {
              jp: 'ペルシア語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'Persian', vi: 'tiếng Ba Tư' },
              speech: 'ペルシアご'
            }
          ]
        },
        {
          country: { jp: 'インド', meaning: { en: 'India', vi: 'Ấn Độ' } },
          person: {
            jp: 'インド人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'インドじん'
          },
          languages: [
            {
              jp: 'ヒンディー語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'Hindi', vi: 'tiếng Hin-đi' },
              speech: 'ヒンディーご'
            }
          ]
        },
        {
          country: { jp: 'インドネシア', meaning: { en: 'Indonesia', vi: 'In-đô-nê-xi-a' } },
          person: {
            jp: 'インドネシア人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'インドネシアじん'
          },
          languages: [
            {
              jp: 'インドネシア語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'Indonesian', vi: 'tiếng In-đô-nê-xi-a' },
              speech: 'インドネシアご'
            }
          ]
        },
        {
          country: { jp: 'エジプト', meaning: { en: 'Egypt', vi: 'Ai Cập' } },
          person: {
            jp: 'エジプト人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'エジプトじん'
          },
          languages: [
            {
              jp: 'アラビア語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'Arabic', vi: 'tiếng Ả-rập' },
              speech: 'アラビアご'
            }
          ]
        },
        {
          country: { jp: 'オーストラリア', meaning: { en: 'Australia', vi: 'Úc' } },
          person: {
            jp: 'オーストラリア人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'オーストラリアじん'
          },
          languages: [
            {
              jp: '英語',
              ruby: [
                { base: '英', reading: 'えい' },
                { base: '語', reading: 'ご' }
              ],
              meaning: { en: 'English', vi: 'tiếng Anh' },
              speech: 'えいご'
            }
          ]
        },
        {
          country: { jp: 'カナダ', meaning: { en: 'Canada', vi: 'Canada' } },
          person: {
            jp: 'カナダ人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'カナダじん'
          },
          languages: [
            {
              jp: '英語',
              ruby: [
                { base: '英', reading: 'えい' },
                { base: '語', reading: 'ご' }
              ],
              meaning: { en: 'English', vi: 'tiếng Anh' },
              speech: 'えいご'
            },
            {
              jp: 'フランス語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'French', vi: 'tiếng Pháp' },
              speech: 'フランスご'
            }
          ]
        },
        {
          country: {
            jp: '韓国',
            ruby: [
              { base: '韓', reading: 'かん' },
              { base: '国', reading: 'こく' }
            ],
            meaning: { en: 'South Korea', vi: 'Hàn Quốc' },
            speech: 'かんこく'
          },
          person: {
            jp: '韓国人',
            ruby: [
              { base: '韓', reading: 'かん' },
              { base: '国', reading: 'こく' },
              { base: '人', reading: 'じん' }
            ],
            speech: 'かんこくじん'
          },
          languages: [
            {
              jp: '韓国語',
              ruby: [
                { base: '韓', reading: 'かん' },
                { base: '国', reading: 'こく' },
                { base: '語', reading: 'ご' }
              ],
              meaning: { en: 'Korean', vi: 'tiếng Hàn Quốc' },
              speech: 'かんこくご'
            }
          ]
        },
        {
          country: { jp: 'サウジアラビア', meaning: { en: 'Saudi Arabia', vi: 'Ả-rập Xê-út' } },
          person: {
            jp: 'サウジアラビア人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'サウジアラビアじん'
          },
          languages: [
            {
              jp: 'アラビア語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'Arabic', vi: 'tiếng Ả-rập' },
              speech: 'アラビアご'
            }
          ]
        },
        {
          country: { jp: 'シンガポール', meaning: { en: 'Singapore', vi: 'Singapore' } },
          person: {
            jp: 'シンガポール人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'シンガポールじん'
          },
          languages: [
            {
              jp: '英語',
              ruby: [
                { base: '英', reading: 'えい' },
                { base: '語', reading: 'ご' }
              ],
              meaning: { en: 'English', vi: 'tiếng Anh' },
              speech: 'えいご'
            }
          ]
        },
        {
          country: { jp: 'スペイン', meaning: { en: 'Spain', vi: 'Tây Ban Nha' } },
          person: {
            jp: 'スペイン人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'スペインじん'
          },
          languages: [
            {
              jp: 'スペイン語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'Spanish', vi: 'tiếng Tây Ban Nha' },
              speech: 'スペインご'
            }
          ]
        },
        {
          country: { jp: 'タイ', meaning: { en: 'Thailand', vi: 'Thái Lan' } },
          person: { jp: 'タイ人', ruby: [{ base: '人', reading: 'じん' }], speech: 'タイじん' },
          languages: [
            {
              jp: 'タイ語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'Thai', vi: 'tiếng Thái' },
              speech: 'タイご'
            }
          ]
        },
        {
          country: {
            jp: '中国',
            ruby: [
              { base: '中', reading: 'ちゅう' },
              { base: '国', reading: 'ごく' }
            ],
            meaning: { en: 'China', vi: 'Trung Quốc' },
            speech: 'ちゅうごく'
          },
          person: {
            jp: '中国人',
            ruby: [
              { base: '中', reading: 'ちゅう' },
              { base: '国', reading: 'ごく' },
              { base: '人', reading: 'じん' }
            ],
            speech: 'ちゅうごくじん'
          },
          languages: [
            {
              jp: '中国語',
              ruby: [
                { base: '中', reading: 'ちゅう' },
                { base: '国', reading: 'ごく' },
                { base: '語', reading: 'ご' }
              ],
              meaning: { en: 'Chinese', vi: 'tiếng Trung Quốc' },
              speech: 'ちゅうごくご'
            }
          ]
        },
        {
          country: { jp: 'ドイツ', meaning: { en: 'Germany', vi: 'Đức' } },
          person: {
            jp: 'ドイツ人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'ドイツじん'
          },
          languages: [
            {
              jp: 'ドイツ語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'German', vi: 'tiếng Đức' },
              speech: 'ドイツご'
            }
          ]
        },
        {
          country: {
            jp: '日本',
            ruby: [
              { base: '日', reading: 'に' },
              { base: '本', reading: 'ほん' }
            ],
            meaning: { en: 'Japan', vi: 'Nhật Bản' },
            speech: 'にほん'
          },
          person: {
            jp: '日本人',
            ruby: [
              { base: '日', reading: 'に' },
              { base: '本', reading: 'ほん' },
              { base: '人', reading: 'じん' }
            ],
            speech: 'にほんじん'
          },
          languages: [
            {
              jp: '日本語',
              ruby: [
                { base: '日', reading: 'に' },
                { base: '本', reading: 'ほん' },
                { base: '語', reading: 'ご' }
              ],
              meaning: { en: 'Japanese', vi: 'tiếng Nhật' },
              speech: 'にほんご'
            }
          ]
        },
        {
          country: { jp: 'フランス', meaning: { en: 'France', vi: 'Pháp' } },
          person: {
            jp: 'フランス人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'フランスじん'
          },
          languages: [
            {
              jp: 'フランス語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'French', vi: 'tiếng Pháp' },
              speech: 'フランスご'
            }
          ]
        },
        {
          country: { jp: 'フィリピン', meaning: { en: 'Philippines', vi: 'Philippine' } },
          person: {
            jp: 'フィリピン人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'フィリピンじん'
          },
          languages: [
            {
              jp: 'フィリピノ語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'Filipino', vi: 'tiếng Philippine' },
              speech: 'フィリピノご'
            }
          ]
        },
        {
          country: { jp: 'ブラジル', meaning: { en: 'Brazil', vi: 'Brazil' } },
          person: {
            jp: 'ブラジル人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'ブラジルじん'
          },
          languages: [
            {
              jp: 'ポルトガル語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'Portuguese', vi: 'tiếng Bồ Đào Nha' },
              speech: 'ポルトガルご'
            }
          ]
        },
        {
          country: { jp: 'ベトナム', meaning: { en: 'Vietnam', vi: 'Việt Nam' } },
          person: {
            jp: 'ベトナム人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'ベトナムじん'
          },
          languages: [
            {
              jp: 'ベトナム語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'Vietnamese', vi: 'tiếng Việt' },
              speech: 'ベトナムご'
            }
          ]
        },
        {
          country: { jp: 'マレーシア', meaning: { en: 'Malaysia', vi: 'Malaysia' } },
          person: {
            jp: 'マレーシア人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'マレーシアじん'
          },
          languages: [
            {
              jp: 'マレーシア語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'Malay', vi: 'tiếng Mã Lai' },
              speech: 'マレーシアご'
            }
          ]
        },
        {
          country: { jp: 'メキシコ', meaning: { en: 'Mexico', vi: 'Mexico' } },
          person: {
            jp: 'メキシコ人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'メキシコじん'
          },
          languages: [
            {
              jp: 'スペイン語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'Spanish', vi: 'tiếng Tây Ban Nha' },
              speech: 'スペインご'
            }
          ]
        },
        {
          country: { jp: 'ロシア', meaning: { en: 'Russia', vi: 'Nga' } },
          person: {
            jp: 'ロシア人',
            ruby: [{ base: '人', reading: 'じん' }],
            speech: 'ロシアじん'
          },
          languages: [
            {
              jp: 'ロシア語',
              ruby: [{ base: '語', reading: 'ご' }],
              meaning: { en: 'Russian', vi: 'tiếng Nga' },
              speech: 'ロシアご'
            }
          ]
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'More occupations', vi: 'Nghề nghiệp khác' },
      items: [
        {
          kana: 'こうむいん',
          kanji: '公務員',
          romaji: 'kōmuin',
          ruby: [
            { base: '公', reading: 'こう' },
            { base: '務', reading: 'む' },
            { base: '員', reading: 'いん' }
          ],
          meaning: { en: 'civil servant', vi: 'công chức' }
        },
        {
          kana: 'べんごし',
          kanji: '弁護士',
          romaji: 'bengoshi',
          ruby: [
            { base: '弁', reading: 'べん' },
            { base: '護', reading: 'ご' },
            { base: '士', reading: 'し' }
          ],
          meaning: { en: 'lawyer', vi: 'luật sư' }
        },
        {
          kana: 'かんごし',
          kanji: '看護師',
          romaji: 'kangoshi',
          ruby: [
            { base: '看', reading: 'かん' },
            { base: '護', reading: 'ご' },
            { base: '師', reading: 'し' }
          ],
          meaning: { en: 'nurse', vi: 'y tá' }
        },
        {
          kana: 'しゅふ',
          kanji: '主婦',
          romaji: 'shufu',
          ruby: [
            { base: '主', reading: 'しゅ' },
            { base: '婦', reading: 'ふ' }
          ],
          meaning: { en: 'homemaker', vi: 'nội trợ' }
        },
        {
          kana: 'けいさつかん',
          kanji: '警察官',
          romaji: 'keisatsukan',
          ruby: [
            { base: '警', reading: 'けい' },
            { base: '察', reading: 'さつ' },
            { base: '官', reading: 'かん' }
          ],
          meaning: { en: 'police officer', vi: 'cảnh sát' }
        }
      ]
    }
  ]
};
