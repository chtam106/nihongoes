import { withSequentialNumbers, type Course } from '@/constants/courses/types.ts';

export const n5Course: Course = {
  level: 'n5',
  code: 'N5',
  name: { en: 'JLPT N5 Course', vi: 'Khóa học JLPT N5' },
  subtitle: {
    en: 'Build a solid foundation, one lesson at a time.',
    vi: 'Xây nền tảng vững chắc, từng bài một.'
  },
  intro: {
    en: 'A step-by-step JLPT N5 path modeled on Minna no Nihongo Shokyu I. Every lesson pairs the core vocabulary and sentence patterns with supplementary reference words and a short conversation.',
    vi: 'Lộ trình JLPT N5 từng bước, bám theo giáo trình Minna no Nihongo Sơ cấp I. Mỗi bài kết hợp từ vựng cốt lõi và mẫu câu với từ tham khảo mở rộng cùng một đoạn hội thoại ngắn.'
  },
  seoTitle: {
    en: 'JLPT N5 Course - Vocabulary & Grammar',
    vi: 'Khóa học JLPT N5 - Từ vựng & Ngữ pháp'
  },
  seoDescription: {
    en: 'A free, structured JLPT N5 course modeled on Minna no Nihongo. Each lesson teaches essential Japanese vocabulary, sentence patterns, and reference words with example sentences in English and Vietnamese.',
    vi: 'Khóa học JLPT N5 miễn phí, có lộ trình theo Minna no Nihongo. Mỗi bài dạy từ vựng, mẫu câu và từ tham khảo tiếng Nhật cốt lõi kèm câu ví dụ song ngữ Anh - Việt.'
  },
  lessons: withSequentialNumbers([
    {
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
        { kana: 'わたし', kanji: '私', romaji: 'watashi', meaning: { en: 'I, me', vi: 'tôi' } },
        {
          kana: 'わたしたち',
          kanji: '私たち',
          romaji: 'watashitachi',
          meaning: { en: 'we, us', vi: 'chúng tôi, chúng ta' }
        },
        { kana: 'あなた', romaji: 'anata', meaning: { en: 'you', vi: 'bạn, anh/chị' } },
        {
          kana: 'あのひと',
          kanji: 'あの人',
          romaji: 'ano hito',
          meaning: { en: 'that person, he/she', vi: 'người kia, người đó' }
        },
        {
          kana: 'あのかた',
          kanji: 'あの方',
          romaji: 'ano kata',
          meaning: { en: 'that person (polite)', vi: 'vị kia (lịch sự)' }
        },
        {
          kana: 'みなさん',
          kanji: '皆さん',
          romaji: 'minasan',
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
          meaning: { en: '~ people (nationality suffix)', vi: 'người ~ (hậu tố quốc tịch)' }
        },
        {
          kana: 'せんせい',
          kanji: '先生',
          romaji: 'sensei',
          meaning: { en: 'teacher (also a title)', vi: 'giáo viên (cũng dùng làm kính ngữ)' }
        },
        {
          kana: 'きょうし',
          kanji: '教師',
          romaji: 'kyōshi',
          meaning: { en: 'teacher (occupation)', vi: 'giáo viên (nghề nghiệp)' }
        },
        {
          kana: 'がくせい',
          kanji: '学生',
          romaji: 'gakusei',
          meaning: { en: 'student', vi: 'học sinh, sinh viên' }
        },
        {
          kana: 'かいしゃいん',
          kanji: '会社員',
          romaji: 'kaishain',
          meaning: { en: 'company employee', vi: 'nhân viên công ty' }
        },
        {
          kana: 'しゃいん',
          kanji: '社員',
          romaji: 'shain',
          meaning: { en: 'employee (of ~ company)', vi: 'nhân viên (của công ty ~)' }
        },
        {
          kana: 'ぎんこういん',
          kanji: '銀行員',
          romaji: 'ginkōin',
          meaning: { en: 'bank employee', vi: 'nhân viên ngân hàng' }
        },
        {
          kana: 'いしゃ',
          kanji: '医者',
          romaji: 'isha',
          meaning: { en: 'doctor', vi: 'bác sĩ' }
        },
        {
          kana: 'けんきゅうしゃ',
          kanji: '研究者',
          romaji: 'kenkyūsha',
          meaning: { en: 'researcher', vi: 'nhà nghiên cứu' }
        },
        { kana: 'エンジニア', romaji: 'enjinia', meaning: { en: 'engineer', vi: 'kỹ sư' } },
        {
          kana: 'だいがく',
          kanji: '大学',
          romaji: 'daigaku',
          meaning: { en: 'university', vi: 'trường đại học' }
        },
        {
          kana: 'びょういん',
          kanji: '病院',
          romaji: 'byōin',
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
          meaning: { en: '~ years old', vi: '~ tuổi' }
        },
        {
          kana: 'なんさい',
          kanji: '何歳',
          romaji: 'nansai',
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
          meaning: { en: 'What is your name?', vi: 'Bạn tên là gì?' }
        },
        {
          kana: 'しつれいですが。',
          kanji: '失礼ですが。',
          romaji: 'Shitsurei desu ga.',
          meaning: {
            en: 'Excuse me, but... (polite lead-in)',
            vi: 'Xin lỗi, cho hỏi... (mở đầu lịch sự)'
          }
        },
        {
          kana: 'アメリカから きました。',
          romaji: 'Amerika kara kimashita.',
          meaning: { en: 'I came from America.', vi: 'Tôi đến từ Mỹ.' }
        },
        {
          kana: 'こちらは ミラーさんです。',
          romaji: 'Kochira wa Mirā-san desu.',
          meaning: { en: 'This is Mr. Miller.', vi: 'Đây là anh Miller.' }
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
              jp: 'わたしは がくせいです。',
              romaji: 'Watashi wa gakusei desu.',
              meaning: { en: 'I am a student.', vi: 'Tôi là học sinh.' }
            },
            {
              jp: 'ミラーさんは かいしゃいんです。',
              romaji: 'Mirā-san wa kaishain desu.',
              meaning: {
                en: 'Mr. Miller is a company employee.',
                vi: 'Anh Miller là nhân viên công ty.'
              }
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
              jp: 'わたしは せんせいじゃありません。',
              romaji: 'Watashi wa sensei ja arimasen.',
              meaning: { en: 'I am not a teacher.', vi: 'Tôi không phải là giáo viên.' }
            },
            {
              jp: 'ミラーさんは いしゃじゃありません。',
              romaji: 'Mirā-san wa isha ja arimasen.',
              meaning: { en: 'Mr. Miller is not a doctor.', vi: 'Anh Miller không phải là bác sĩ.' }
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
              jp: 'あなたは がくせいですか。',
              romaji: 'Anata wa gakusei desu ka.',
              meaning: { en: 'Are you a student?', vi: 'Bạn là học sinh phải không?' }
            },
            {
              jp: 'あのひとは せんせいですか。',
              romaji: 'Ano hito wa sensei desu ka.',
              meaning: { en: 'Is that person a teacher?', vi: 'Người kia là giáo viên phải không?' }
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
                jp: 'はい、がくせいです。',
                romaji: 'Hai, gakusei desu.',
                meaning: {
                  en: "Yes, I'm a student. (full affirmative)",
                  vi: 'Vâng, tôi là học sinh. (khẳng định đầy đủ)'
                }
              },
              {
                jp: 'いいえ、がくせいじゃありません。',
                romaji: 'Iie, gakusei ja arimasen.',
                meaning: {
                  en: "No, I'm not a student. (full negative)",
                  vi: 'Không, tôi không phải học sinh. (phủ định đầy đủ)'
                }
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
                jp: 'いいえ、ちがいます。',
                romaji: 'Iie, chigaimasu.',
                meaning: {
                  en: "No, that's wrong. (short negative)",
                  vi: 'Không, không phải. (phủ định gọn)'
                }
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
              jp: 'ミラーさんも かいしゃいんです。',
              romaji: 'Mirā-san mo kaishain desu.',
              meaning: {
                en: 'Mr. Miller is a company employee too.',
                vi: 'Anh Miller cũng là nhân viên công ty.'
              }
            },
            {
              jp: 'わたしも がくせいです。',
              romaji: 'Watashi mo gakusei desu.',
              meaning: { en: 'I am a student too.', vi: 'Tôi cũng là học sinh.' }
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
              jp: 'わたしは さくらだいがくの がくせいです。',
              romaji: 'Watashi wa Sakura daigaku no gakusei desu.',
              meaning: {
                en: 'I am a student at Sakura University.',
                vi: 'Tôi là sinh viên trường đại học Sakura.'
              }
            },
            {
              jp: 'あのひとは にほんごの せんせいです。',
              romaji: 'Ano hito wa nihongo no sensei desu.',
              meaning: {
                en: 'That person is a Japanese teacher.',
                vi: 'Người kia là giáo viên tiếng Nhật.'
              }
            }
          ]
        },
        {
          pattern: 'N は だれ ですか',
          highlights: ['は', 'だれ', 'どなた', 'です', 'か'],
          excludeHighlights: ['あのかた'],
          title: { en: 'Asking who (だれ / どなた)', vi: 'Hỏi "ai" (だれ / どなた)' },
          explanation: {
            en: 'Ask who someone is with だれ. どなた is the polite version, used with あの方.',
            vi: 'Hỏi ai đó là ai với だれ. どなた là cách nói lịch sự, dùng với あの方.'
          },
          examples: [
            {
              jp: 'あのひとは だれですか。',
              romaji: 'Ano hito wa dare desu ka.',
              meaning: { en: 'Who is that person?', vi: 'Người kia là ai?' }
            },
            {
              jp: 'あのかたは どなたですか。',
              romaji: 'Ano kata wa donata desu ka.',
              meaning: { en: 'Who is that person? (polite)', vi: 'Vị kia là ai? (lịch sự)' }
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
                jp: 'あのひとは ミラーさんです。',
                romaji: 'Ano hito wa Mirā-san desu.',
                meaning: { en: 'That person is Mr. Miller.', vi: 'Người kia là anh Miller.' }
              },
              {
                jp: 'あのかたは やまだせんせいです。',
                romaji: 'Ano kata wa Yamada-sensei desu.',
                meaning: { en: 'That person is Professor Yamada.', vi: 'Vị kia là thầy Yamada.' }
              }
            ]
          }
        },
        {
          pattern: 'N は なんさい ですか',
          highlights: ['は', 'なんさい', 'おいくつ', 'です', 'か'],
          title: { en: 'Asking age (なんさい / おいくつ)', vi: 'Hỏi tuổi (なんさい / おいくつ)' },
          explanation: {
            en: 'Ask age with なんさい. おいくつ is the polite version.',
            vi: 'Hỏi tuổi với なんさい. おいくつ là cách nói lịch sự.'
          },
          examples: [
            {
              jp: 'テレサちゃんは なんさいですか。',
              romaji: 'Teresa-chan wa nansai desu ka.',
              meaning: { en: 'How old is Teresa?', vi: 'Bé Teresa bao nhiêu tuổi?' }
            },
            {
              jp: 'おいくつですか。',
              romaji: 'Oikutsu desu ka.',
              meaning: { en: 'How old are you? (polite)', vi: 'Anh/chị bao nhiêu tuổi? (lịch sự)' }
            }
          ],
          answers: {
            highlights: ['さい', 'です'],
            explanation: {
              en: 'Answer with a number + さい; 20 years old is the special reading はたち.',
              vi: 'Trả lời bằng số + さい; 20 tuổi đọc đặc biệt là はたち.'
            },
            examples: [
              {
                jp: '9さいです。',
                romaji: 'Kyū-sai desu.',
                meaning: { en: 'She is nine years old.', vi: 'Bé 9 tuổi.' }
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
              jp: 'はじめまして。わたしは マイク・ミラーです。',
              romaji: 'Hajimemashite. Watashi wa Maiku Mirā desu.',
              meaning: {
                en: 'Nice to meet you. I am Mike Miller.',
                vi: 'Rất vui được gặp. Tôi là Mike Miller.'
              }
            },
            {
              jp: 'アメリカから きました。',
              romaji: 'Amerika kara kimashita.',
              meaning: { en: 'I came from America.', vi: 'Tôi đến từ Mỹ.' }
            },
            {
              jp: 'かいしゃいんです。どうぞ よろしく おねがいします。',
              romaji: 'Kaishain desu. Dōzo yoroshiku onegaishimasu.',
              meaning: {
                en: 'I am a company employee. Pleased to meet you.',
                vi: 'Tôi là nhân viên công ty. Rất mong được giúp đỡ.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: { en: 'Where did Mr. Miller come from?', vi: 'Anh Miller đến từ đâu?' },
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
              question: { en: "What is Mr. Miller's job?", vi: 'Anh Miller làm nghề gì?' },
              choices: [
                { id: 'a', label: { en: 'Student', vi: 'Học sinh' } },
                { id: 'b', label: { en: 'Company employee', vi: 'Nhân viên công ty' } },
                { id: 'c', label: { en: 'Teacher', vi: 'Giáo viên' } },
                { id: 'd', label: { en: 'Doctor', vi: 'Bác sĩ' } }
              ],
              correctId: 'b'
            }
          ]
        }
      ],
      reference: [
        {
          title: { en: 'Countries', vi: 'Quốc gia' },
          items: [
            {
              kana: 'にほん',
              kanji: '日本',
              romaji: 'nihon',
              meaning: { en: 'Japan', vi: 'Nhật Bản' }
            },
            { kana: 'アメリカ', romaji: 'amerika', meaning: { en: 'USA', vi: 'Mỹ' } },
            { kana: 'イギリス', romaji: 'igirisu', meaning: { en: 'UK', vi: 'Anh' } },
            {
              kana: 'ちゅうごく',
              kanji: '中国',
              romaji: 'chūgoku',
              meaning: { en: 'China', vi: 'Trung Quốc' }
            },
            {
              kana: 'かんこく',
              kanji: '韓国',
              romaji: 'kankoku',
              meaning: { en: 'South Korea', vi: 'Hàn Quốc' }
            },
            { kana: 'ドイツ', romaji: 'doitsu', meaning: { en: 'Germany', vi: 'Đức' } },
            { kana: 'フランス', romaji: 'furansu', meaning: { en: 'France', vi: 'Pháp' } },
            { kana: 'ブラジル', romaji: 'burajiru', meaning: { en: 'Brazil', vi: 'Brazil' } },
            { kana: 'タイ', romaji: 'tai', meaning: { en: 'Thailand', vi: 'Thái Lan' } },
            { kana: 'ベトナム', romaji: 'betonamu', meaning: { en: 'Vietnam', vi: 'Việt Nam' } }
          ]
        },
        {
          title: { en: 'Languages', vi: 'Ngôn ngữ' },
          items: [
            {
              kana: 'にほんご',
              kanji: '日本語',
              romaji: 'nihongo',
              meaning: { en: 'Japanese', vi: 'tiếng Nhật' }
            },
            {
              kana: 'えいご',
              kanji: '英語',
              romaji: 'eigo',
              meaning: { en: 'English', vi: 'tiếng Anh' }
            },
            {
              kana: 'ちゅうごくご',
              kanji: '中国語',
              romaji: 'chūgokugo',
              meaning: { en: 'Chinese', vi: 'tiếng Trung' }
            },
            {
              kana: 'かんこくご',
              kanji: '韓国語',
              romaji: 'kankokugo',
              meaning: { en: 'Korean', vi: 'tiếng Hàn' }
            },
            {
              kana: 'ベトナムご',
              kanji: 'ベトナム語',
              romaji: 'betonamugo',
              meaning: { en: 'Vietnamese', vi: 'tiếng Việt' }
            }
          ]
        },
        {
          title: { en: 'More occupations', vi: 'Nghề nghiệp khác' },
          items: [
            {
              kana: 'こうむいん',
              kanji: '公務員',
              romaji: 'kōmuin',
              meaning: { en: 'civil servant', vi: 'công chức' }
            },
            {
              kana: 'べんごし',
              kanji: '弁護士',
              romaji: 'bengoshi',
              meaning: { en: 'lawyer', vi: 'luật sư' }
            },
            {
              kana: 'かんごし',
              kanji: '看護師',
              romaji: 'kangoshi',
              meaning: { en: 'nurse', vi: 'y tá' }
            },
            {
              kana: 'しゅふ',
              kanji: '主婦',
              romaji: 'shufu',
              meaning: { en: 'homemaker', vi: 'nội trợ' }
            },
            {
              kana: 'けいさつかん',
              kanji: '警察官',
              romaji: 'keisatsukan',
              meaning: { en: 'police officer', vi: 'cảnh sát' }
            }
          ]
        },
        {
          title: { en: 'Nationalities (〜じん)', vi: 'Quốc tịch (〜じん)' },
          items: [
            {
              kana: 'にほんじん',
              kanji: '日本人',
              romaji: 'nihonjin',
              meaning: { en: 'Japanese person', vi: 'người Nhật' }
            },
            {
              kana: 'アメリカじん',
              kanji: 'アメリカ人',
              romaji: 'amerikajin',
              meaning: { en: 'American', vi: 'người Mỹ' }
            },
            {
              kana: 'ちゅうごくじん',
              kanji: '中国人',
              romaji: 'chūgokujin',
              meaning: { en: 'Chinese person', vi: 'người Trung Quốc' }
            },
            {
              kana: 'かんこくじん',
              kanji: '韓国人',
              romaji: 'kankokujin',
              meaning: { en: 'Korean person', vi: 'người Hàn Quốc' }
            },
            {
              kana: 'ベトナムじん',
              kanji: 'ベトナム人',
              romaji: 'betonamujin',
              meaning: { en: 'Vietnamese person', vi: 'người Việt Nam' }
            }
          ]
        }
      ]
    },
    {
      id: 'lesson-2',
      number: 2,
      title: {
        en: 'Things around you',
        vi: 'Đồ vật xung quanh'
      },
      focus: {
        en: 'Point out and identify objects with これ/それ/あれ, この/その/あの, and の, and answer with そうです / ちがいます.',
        vi: 'Chỉ và gọi tên đồ vật với これ/それ/あれ, この/その/あの và の, rồi trả lời bằng そうです / ちがいます.'
      },
      vocab: [
        {
          kana: 'これ',
          romaji: 'kore',
          meaning: { en: 'this (near me)', vi: 'cái này (gần tôi)' }
        },
        {
          kana: 'それ',
          romaji: 'sore',
          meaning: { en: 'that (near you)', vi: 'cái đó (gần bạn)' }
        },
        {
          kana: 'あれ',
          romaji: 'are',
          meaning: { en: 'that over there', vi: 'cái kia (xa cả hai)' }
        },
        {
          kana: 'この',
          romaji: 'kono',
          meaning: { en: 'this ~ (+ noun)', vi: 'cái ~ này (+ danh từ)' }
        },
        {
          kana: 'その',
          romaji: 'sono',
          meaning: { en: 'that ~ (+ noun)', vi: 'cái ~ đó (+ danh từ)' }
        },
        {
          kana: 'あの',
          romaji: 'ano',
          meaning: { en: 'that ~ over there (+ noun)', vi: 'cái ~ kia (+ danh từ)' }
        },
        { kana: 'ほん', kanji: '本', romaji: 'hon', meaning: { en: 'book', vi: 'sách' } },
        {
          kana: 'じしょ',
          kanji: '辞書',
          romaji: 'jisho',
          meaning: { en: 'dictionary', vi: 'từ điển' }
        },
        {
          kana: 'ざっし',
          kanji: '雑誌',
          romaji: 'zasshi',
          meaning: { en: 'magazine', vi: 'tạp chí' }
        },
        {
          kana: 'しんぶん',
          kanji: '新聞',
          romaji: 'shinbun',
          meaning: { en: 'newspaper', vi: 'báo' }
        },
        { kana: 'ノート', romaji: 'nōto', meaning: { en: 'notebook', vi: 'vở, sổ tay' } },
        {
          kana: 'めいし',
          kanji: '名刺',
          romaji: 'meishi',
          meaning: { en: 'business card', vi: 'danh thiếp' }
        },
        {
          kana: 'てちょう',
          kanji: '手帳',
          romaji: 'techō',
          meaning: { en: 'pocket notebook, planner', vi: 'sổ tay' }
        },
        { kana: 'カード', romaji: 'kādo', meaning: { en: 'card', vi: 'thẻ' } },
        {
          kana: 'テレホンカード',
          romaji: 'terehon kādo',
          meaning: { en: 'telephone card', vi: 'thẻ điện thoại' }
        },
        {
          kana: 'えんぴつ',
          kanji: '鉛筆',
          romaji: 'enpitsu',
          meaning: { en: 'pencil', vi: 'bút chì' }
        },
        {
          kana: 'ボールペン',
          romaji: 'bōrupen',
          meaning: { en: 'ballpoint pen', vi: 'bút bi' }
        },
        {
          kana: 'シャープペンシル',
          romaji: 'shāpupenshiru',
          meaning: { en: 'mechanical pencil', vi: 'bút chì bấm' }
        },
        { kana: 'かぎ', kanji: '鍵', romaji: 'kagi', meaning: { en: 'key', vi: 'chìa khóa' } },
        {
          kana: 'とけい',
          kanji: '時計',
          romaji: 'tokei',
          meaning: { en: 'watch, clock', vi: 'đồng hồ' }
        },
        { kana: 'かさ', kanji: '傘', romaji: 'kasa', meaning: { en: 'umbrella', vi: 'ô, dù' } },
        { kana: 'かばん', romaji: 'kaban', meaning: { en: 'bag', vi: 'cặp, túi xách' } },
        { kana: 'テレビ', romaji: 'terebi', meaning: { en: 'TV', vi: 'tivi' } },
        { kana: 'ラジオ', romaji: 'rajio', meaning: { en: 'radio', vi: 'radio' } },
        { kana: 'カメラ', romaji: 'kamera', meaning: { en: 'camera', vi: 'máy ảnh' } },
        {
          kana: 'テープ',
          romaji: 'tēpu',
          meaning: { en: 'tape (cassette)', vi: 'băng (cát-xét)' }
        },
        {
          kana: 'テープレコーダー',
          romaji: 'tēpu rekōdā',
          meaning: { en: 'tape recorder', vi: 'máy ghi âm' }
        },
        {
          kana: 'コンピューター',
          romaji: 'konpyūtā',
          meaning: { en: 'computer', vi: 'máy tính' }
        },
        { kana: 'くるま', kanji: '車', romaji: 'kuruma', meaning: { en: 'car', vi: 'xe hơi' } },
        {
          kana: 'じどうしゃ',
          kanji: '自動車',
          romaji: 'jidōsha',
          meaning: { en: 'automobile', vi: 'xe hơi, ô tô' }
        },
        { kana: 'つくえ', kanji: '机', romaji: 'tsukue', meaning: { en: 'desk', vi: 'bàn' } },
        { kana: 'いす', kanji: '椅子', romaji: 'isu', meaning: { en: 'chair', vi: 'ghế' } },
        {
          kana: 'チョコレート',
          romaji: 'chokorēto',
          meaning: { en: 'chocolate', vi: 'sô-cô-la' }
        },
        { kana: 'コーヒー', romaji: 'kōhī', meaning: { en: 'coffee', vi: 'cà phê' } },
        {
          kana: 'おみやげ',
          kanji: 'お土産',
          romaji: 'omiyage',
          meaning: { en: 'souvenir, gift', vi: 'quà (đặc sản)' }
        },
        {
          kana: 'にほんご',
          kanji: '日本語',
          romaji: 'nihongo',
          meaning: { en: 'Japanese (language)', vi: 'tiếng Nhật' }
        },
        {
          kana: 'えいご',
          kanji: '英語',
          romaji: 'eigo',
          meaning: { en: 'English (language)', vi: 'tiếng Anh' }
        },
        { kana: 'なん', kanji: '何', romaji: 'nan', meaning: { en: 'what', vi: 'cái gì' } },
        { kana: 'そう', romaji: 'sō', meaning: { en: 'so, right', vi: 'đúng, vậy' } },
        {
          kana: 'ちがいます',
          kanji: '違います',
          romaji: 'chigaimasu',
          meaning: { en: "that's wrong, different", vi: 'không phải, khác' }
        },
        {
          kana: '〜ご',
          kanji: '〜語',
          romaji: 'go',
          speech: 'ご',
          meaning: { en: '~ language (suffix)', vi: 'tiếng ~ (hậu tố)' }
        }
      ],
      phrases: [
        {
          kana: 'あのう、すみません。',
          romaji: 'Anō, sumimasen.',
          meaning: { en: 'Um, excuse me.', vi: 'À, xin lỗi.' }
        },
        {
          kana: 'これは なんですか。',
          kanji: 'これは何ですか。',
          romaji: 'Kore wa nan desu ka.',
          meaning: { en: 'What is this?', vi: 'Cái này là gì?' }
        },
        {
          kana: 'そうですか。',
          romaji: 'Sō desu ka.',
          meaning: { en: 'I see.', vi: 'Vậy à. / Ra vậy.' }
        },
        {
          kana: 'どうも ありがとうございます。',
          romaji: 'Dōmo arigatō gozaimasu.',
          meaning: { en: 'Thank you very much.', vi: 'Cảm ơn rất nhiều.' }
        },
        {
          kana: 'どうぞ。',
          romaji: 'Dōzo.',
          meaning: { en: 'Here you are. / Please.', vi: 'Mời bạn. / Xin mời.' }
        }
      ],
      grammar: [
        {
          pattern: 'これ / それ / あれ は N です',
          highlights: [['これ', 'それ', 'あれ'], 'は', 'です'],
          title: {
            en: 'これ / それ / あれ (this / that / that over there)',
            vi: 'これ / それ / あれ (cái này / cái đó / cái kia)'
          },
          explanation: {
            en: 'これ = near the speaker, それ = near the listener, あれ = far from both. They stand alone as "this/that".',
            vi: 'これ = gần người nói, それ = gần người nghe, あれ = xa cả hai. Chúng đứng độc lập như "cái này/đó/kia".'
          },
          examples: [
            {
              jp: 'これは じしょです。',
              romaji: 'Kore wa jisho desu.',
              meaning: { en: 'This is a dictionary.', vi: 'Đây là từ điển.' }
            },
            {
              jp: 'それは ほんですか。',
              romaji: 'Sore wa hon desu ka.',
              meaning: { en: 'Is that a book?', vi: 'Cái đó là sách phải không?' }
            },
            {
              jp: 'あれは とけいです。',
              romaji: 'Are wa tokei desu.',
              meaning: { en: 'That over there is a clock.', vi: 'Cái kia là đồng hồ.' }
            }
          ]
        },
        {
          pattern: 'この / その / あの N',
          highlights: [['この', 'その', 'あの']],
          title: { en: 'この / その / あの + noun', vi: 'この / その / あの + danh từ' },
          explanation: {
            en: 'Unlike これ/それ/あれ, these always come right before a noun: この本 = "this book". Never say これ本.',
            vi: 'Khác với これ/それ/あれ, nhóm này luôn đứng ngay trước danh từ: この本 = "quyển sách này". Không nói これ本.'
          },
          examples: [
            {
              jp: 'この かばんは わたしのです。',
              romaji: 'Kono kaban wa watashi no desu.',
              meaning: { en: 'This bag is mine.', vi: 'Cái cặp này là của tôi.' }
            },
            {
              jp: 'その とけいは にほんのです。',
              romaji: 'Sono tokei wa nihon no desu.',
              meaning: { en: 'That watch is a Japanese one.', vi: 'Cái đồng hồ đó là hàng Nhật.' }
            },
            {
              jp: 'あの ひとは だれですか。',
              romaji: 'Ano hito wa dare desu ka.',
              meaning: { en: 'Who is that person over there?', vi: 'Người kia là ai vậy?' }
            }
          ]
        },
        {
          pattern: 'N1 の N2',
          highlights: ['の'],
          title: { en: 'の (possession / content)', vi: 'の (sở hữu / nội dung)' },
          explanation: {
            en: 'の links two nouns to show an owner ("my book") or the content/type ("Japanese book").',
            vi: 'の nối hai danh từ để chỉ người sở hữu ("sách của tôi") hoặc nội dung/loại ("sách tiếng Nhật").'
          },
          examples: [
            {
              jp: 'これは わたしの ほんです。',
              romaji: 'Kore wa watashi no hon desu.',
              meaning: { en: 'This is my book.', vi: 'Đây là sách của tôi.' }
            },
            {
              jp: 'それは にほんごの ざっしです。',
              romaji: 'Sore wa nihongo no zasshi desu.',
              meaning: { en: 'That is a Japanese magazine.', vi: 'Cái đó là tạp chí tiếng Nhật.' }
            },
            {
              jp: 'あれは だれの かさですか。',
              romaji: 'Are wa dare no kasa desu ka.',
              meaning: { en: 'Whose umbrella is that over there?', vi: 'Cái ô kia là của ai?' }
            }
          ]
        },
        {
          pattern: 'N は なん ですか',
          highlights: ['は', 'なん', 'です', 'か'],
          title: { en: 'Asking "what is it?" with 何', vi: 'Hỏi "là cái gì?" với 何' },
          explanation: {
            en: '何 (なん) means "what". Put it where the unknown noun would go to ask what something is.',
            vi: '何 (なん) nghĩa là "cái gì". Đặt vào vị trí danh từ chưa biết để hỏi đó là gì.'
          },
          examples: [
            {
              jp: 'これは なんですか。',
              romaji: 'Kore wa nan desu ka.',
              meaning: { en: 'What is this?', vi: 'Đây là cái gì?' }
            },
            {
              jp: 'あれは なんですか。',
              romaji: 'Are wa nan desu ka.',
              meaning: { en: 'What is that over there?', vi: 'Cái kia là gì?' }
            }
          ],
          answers: {
            highlights: ['は', 'です'],
            explanation: {
              en: 'Answer by naming the thing with the affirmative sentence: (これ / それ) は ～です.',
              vi: 'Trả lời bằng cách gọi tên vật đó với câu khẳng định: (これ / それ) は ～です.'
            },
            examples: [
              {
                jp: 'それは ほんです。',
                romaji: 'Sore wa hon desu.',
                meaning: { en: 'It is a book.', vi: 'Đó là quyển sách.' }
              },
              {
                jp: 'これは かぎです。',
                romaji: 'Kore wa kagi desu.',
                meaning: { en: 'This is a key.', vi: 'Đây là chìa khóa.' }
              }
            ]
          }
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'What is that?', vi: 'Cái đó là gì?' },
          lines: [
            {
              jp: 'すみません。それは なんですか。',
              romaji: 'Sumimasen. Sore wa nan desu ka.',
              meaning: { en: 'Excuse me. What is that?', vi: 'Xin lỗi. Cái đó là gì vậy?' }
            },
            {
              jp: 'これですか。これは にほんごの じしょです。',
              romaji: 'Kore desu ka. Kore wa nihongo no jisho desu.',
              meaning: {
                en: 'This one? This is a Japanese dictionary.',
                vi: 'Cái này à? Đây là từ điển tiếng Nhật.'
              }
            },
            {
              jp: 'その じしょは あなたのですか。',
              romaji: 'Sono jisho wa anata no desu ka.',
              meaning: {
                en: 'Is that dictionary yours?',
                vi: 'Cuốn từ điển đó là của bạn phải không?'
              }
            },
            {
              jp: 'はい、わたしのです。',
              romaji: 'Hai, watashi no desu.',
              meaning: { en: 'Yes, it is mine.', vi: 'Vâng, của tôi.' }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: { en: 'What is the object?', vi: 'Đồ vật đó là gì?' },
              choices: [
                { id: 'a', label: { en: 'A Japanese dictionary', vi: 'Từ điển tiếng Nhật' } },
                { id: 'b', label: { en: 'A magazine', vi: 'Tạp chí' } },
                { id: 'c', label: { en: 'A notebook', vi: 'Quyển vở' } },
                { id: 'd', label: { en: 'A newspaper', vi: 'Tờ báo' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: { en: 'Whose is it?', vi: 'Nó là của ai?' },
              choices: [
                { id: 'a', label: { en: "The listener's", vi: 'Của người nghe' } },
                { id: 'b', label: { en: 'The speaker who owns it', vi: 'Của người trả lời' } },
                { id: 'c', label: { en: 'Nobody knows', vi: 'Không ai biết' } },
                { id: 'd', label: { en: "The teacher's", vi: 'Của giáo viên' } }
              ],
              correctId: 'b'
            }
          ]
        }
      ],
      reference: [
        {
          title: { en: 'School supplies', vi: 'Đồ dùng học tập' },
          items: [
            {
              kana: 'けしゴム',
              kanji: '消しゴム',
              romaji: 'keshigomu',
              meaning: { en: 'eraser', vi: 'cục tẩy' }
            },
            {
              kana: 'じょうぎ',
              kanji: '定規',
              romaji: 'jōgi',
              meaning: { en: 'ruler', vi: 'thước kẻ' }
            },
            { kana: 'はさみ', romaji: 'hasami', meaning: { en: 'scissors', vi: 'cái kéo' } },
            { kana: 'のり', romaji: 'nori', meaning: { en: 'glue', vi: 'keo dán' } },
            {
              kana: 'ふでばこ',
              kanji: '筆箱',
              romaji: 'fudebako',
              meaning: { en: 'pencil case', vi: 'hộp bút' }
            },
            { kana: 'カレンダー', romaji: 'karendā', meaning: { en: 'calendar', vi: 'lịch' } }
          ]
        },
        {
          title: { en: 'Electronics', vi: 'Đồ điện tử' },
          items: [
            { kana: 'パソコン', romaji: 'pasokon', meaning: { en: 'PC', vi: 'máy tính' } },
            {
              kana: 'スマートフォン',
              romaji: 'sumātofon',
              meaning: { en: 'smartphone', vi: 'điện thoại thông minh' }
            },
            {
              kana: 'でんわ',
              kanji: '電話',
              romaji: 'denwa',
              meaning: { en: 'telephone', vi: 'điện thoại' }
            },
            {
              kana: 'れいぞうこ',
              kanji: '冷蔵庫',
              romaji: 'reizōko',
              meaning: { en: 'refrigerator', vi: 'tủ lạnh' }
            },
            {
              kana: 'エアコン',
              romaji: 'eakon',
              meaning: { en: 'air conditioner', vi: 'máy lạnh' }
            }
          ]
        },
        {
          title: { en: 'Question words', vi: 'Từ để hỏi' },
          items: [
            { kana: 'どれ', romaji: 'dore', meaning: { en: 'which one', vi: 'cái nào' } },
            {
              kana: 'どの',
              romaji: 'dono',
              meaning: { en: 'which ~ (+ noun)', vi: 'cái ~ nào (+ danh từ)' }
            },
            {
              kana: 'そうですか',
              romaji: 'sō desu ka',
              meaning: { en: 'I see / is that so', vi: 'thế à / vậy sao' }
            }
          ]
        },
        {
          title: { en: 'More everyday objects', vi: 'Đồ vật thường ngày khác' },
          items: [
            {
              kana: 'おかね',
              kanji: 'お金',
              romaji: 'okane',
              meaning: { en: 'money', vi: 'tiền' }
            },
            { kana: 'さいふ', kanji: '財布', romaji: 'saifu', meaning: { en: 'wallet', vi: 'ví' } },
            {
              kana: 'めがね',
              kanji: '眼鏡',
              romaji: 'megane',
              meaning: { en: 'glasses', vi: 'kính mắt' }
            },
            {
              kana: 'けいたいでんわ',
              kanji: '携帯電話',
              romaji: 'keitai denwa',
              meaning: { en: 'mobile phone', vi: 'điện thoại di động' }
            },
            {
              kana: 'ハンカチ',
              romaji: 'hankachi',
              meaning: { en: 'handkerchief', vi: 'khăn tay' }
            }
          ]
        }
      ]
    },
    {
      id: 'lesson-3',
      number: 3,
      title: {
        en: 'Places & shopping',
        vi: 'Nơi chốn & mua sắm'
      },
      focus: {
        en: 'Point out places with ここ/そこ/あそこ, ask where things are, and talk about prices.',
        vi: 'Chỉ nơi chốn với ここ/そこ/あそこ, hỏi vật ở đâu và nói về giá cả.'
      },
      vocab: [
        { kana: 'ここ', romaji: 'koko', meaning: { en: 'here', vi: 'ở đây' } },
        { kana: 'そこ', romaji: 'soko', meaning: { en: 'there', vi: 'ở đó' } },
        { kana: 'あそこ', romaji: 'asoko', meaning: { en: 'over there', vi: 'ở kia' } },
        {
          kana: 'こちら',
          romaji: 'kochira',
          meaning: { en: 'this way, here (polite)', vi: 'phía này, ở đây (lịch sự)' }
        },
        {
          kana: 'そちら',
          romaji: 'sochira',
          meaning: { en: 'that way, there (polite)', vi: 'phía đó (lịch sự)' }
        },
        {
          kana: 'あちら',
          romaji: 'achira',
          meaning: { en: 'that way over there (polite)', vi: 'phía kia (lịch sự)' }
        },
        { kana: 'どこ', romaji: 'doko', meaning: { en: 'where', vi: 'ở đâu' } },
        {
          kana: 'どちら',
          romaji: 'dochira',
          meaning: { en: 'where, which (polite)', vi: 'phía nào (lịch sự)' }
        },
        {
          kana: 'きょうしつ',
          kanji: '教室',
          romaji: 'kyōshitsu',
          meaning: { en: 'classroom', vi: 'phòng học' }
        },
        {
          kana: 'しょくどう',
          kanji: '食堂',
          romaji: 'shokudō',
          meaning: { en: 'cafeteria, dining hall', vi: 'nhà ăn, căng tin' }
        },
        {
          kana: 'じむしょ',
          kanji: '事務所',
          romaji: 'jimusho',
          meaning: { en: 'office', vi: 'văn phòng' }
        },
        {
          kana: 'かいぎしつ',
          kanji: '会議室',
          romaji: 'kaigishitsu',
          meaning: { en: 'meeting room', vi: 'phòng họp' }
        },
        {
          kana: 'うけつけ',
          kanji: '受付',
          romaji: 'uketsuke',
          meaning: { en: 'reception', vi: 'quầy tiếp tân' }
        },
        { kana: 'ロビー', romaji: 'robī', meaning: { en: 'lobby', vi: 'sảnh' } },
        { kana: 'へや', kanji: '部屋', romaji: 'heya', meaning: { en: 'room', vi: 'phòng' } },
        { kana: 'トイレ', romaji: 'toire', meaning: { en: 'toilet', vi: 'nhà vệ sinh' } },
        {
          kana: 'かいだん',
          kanji: '階段',
          romaji: 'kaidan',
          meaning: { en: 'stairs', vi: 'cầu thang' }
        },
        { kana: 'エレベーター', romaji: 'erebētā', meaning: { en: 'elevator', vi: 'thang máy' } },
        {
          kana: 'エスカレーター',
          romaji: 'esukarētā',
          meaning: { en: 'escalator', vi: 'thang cuốn' }
        },
        { kana: 'くに', kanji: '国', romaji: 'kuni', meaning: { en: 'country', vi: 'đất nước' } },
        {
          kana: 'かいしゃ',
          kanji: '会社',
          romaji: 'kaisha',
          meaning: { en: 'company', vi: 'công ty' }
        },
        { kana: 'うち', romaji: 'uchi', meaning: { en: 'home, house', vi: 'nhà' } },
        { kana: 'くつ', kanji: '靴', romaji: 'kutsu', meaning: { en: 'shoes', vi: 'giày' } },
        { kana: 'ネクタイ', romaji: 'nekutai', meaning: { en: 'necktie', vi: 'cà vạt' } },
        {
          kana: 'うりば',
          kanji: '売り場',
          romaji: 'uriba',
          meaning: { en: 'sales floor, department', vi: 'quầy hàng, khu bán' }
        },
        {
          kana: '〜えん',
          kanji: '〜円',
          romaji: 'en',
          speech: 'えん',
          meaning: { en: '~ yen', vi: '~ yên' }
        },
        { kana: 'いくら', romaji: 'ikura', meaning: { en: 'how much', vi: 'bao nhiêu tiền' } },
        {
          kana: '〜かい',
          kanji: '〜階',
          romaji: 'kai',
          speech: 'かい',
          meaning: { en: '~th floor (counter)', vi: 'tầng ~ (lượng từ)' }
        }
      ],
      phrases: [
        {
          kana: 'いらっしゃいませ。',
          romaji: 'Irasshaimase.',
          meaning: { en: 'Welcome. (in a shop)', vi: 'Xin mời. (trong cửa hàng)' }
        },
        {
          kana: 'これを ください。',
          romaji: 'Kore o kudasai.',
          meaning: { en: "I'll take this, please.", vi: 'Cho tôi cái này.' }
        },
        {
          kana: 'これは いくらですか。',
          romaji: 'Kore wa ikura desu ka.',
          meaning: { en: 'How much is this?', vi: 'Cái này bao nhiêu tiền?' }
        },
        {
          kana: 'ちょっと みせて ください。',
          romaji: 'Chotto misete kudasai.',
          meaning: { en: 'Please show me for a moment.', vi: 'Cho tôi xem một chút.' }
        },
        {
          kana: 'おねがいします。',
          romaji: 'Onegaishimasu.',
          meaning: { en: 'Please. (making a request)', vi: 'Làm ơn / nhờ bạn.' }
        }
      ],
      grammar: [
        {
          pattern: 'ここ / そこ / あそこ は N です',
          highlights: [['ここ', 'そこ', 'あそこ'], 'は', 'です'],
          title: {
            en: 'ここ / そこ / あそこ (here / there / over there)',
            vi: 'ここ / そこ / あそこ (ở đây / ở đó / ở kia)'
          },
          explanation: {
            en: 'These name a place: ここ near the speaker, そこ near the listener, あそこ far from both.',
            vi: 'Nhóm này chỉ nơi chốn: ここ gần người nói, そこ gần người nghe, あそこ xa cả hai.'
          },
          examples: [
            {
              jp: 'ここは きょうしつです。',
              romaji: 'Koko wa kyōshitsu desu.',
              meaning: { en: 'This place is the classroom.', vi: 'Đây là phòng học.' }
            },
            {
              jp: 'そこは じむしょです。',
              romaji: 'Soko wa jimusho desu.',
              meaning: { en: 'That place is the office.', vi: 'Đó là văn phòng.' }
            },
            {
              jp: 'あそこは しょくどうです。',
              romaji: 'Asoko wa shokudō desu.',
              meaning: { en: 'Over there is the cafeteria.', vi: 'Kia là nhà ăn.' }
            }
          ]
        },
        {
          pattern: 'N は どこ ですか',
          highlights: ['は', 'どこ', 'です', 'か'],
          title: { en: 'Asking where (どこ)', vi: 'Hỏi ở đâu (どこ)' },
          explanation: {
            en: 'どこ means "where". Use it to ask the location of a place or thing.',
            vi: 'どこ nghĩa là "ở đâu". Dùng để hỏi vị trí của nơi chốn hoặc đồ vật.'
          },
          examples: [
            {
              jp: 'トイレは どこですか。',
              romaji: 'Toire wa doko desu ka.',
              meaning: { en: 'Where is the toilet?', vi: 'Nhà vệ sinh ở đâu?' }
            },
            {
              jp: 'うけつけは どこですか。',
              romaji: 'Uketsuke wa doko desu ka.',
              meaning: { en: 'Where is the reception?', vi: 'Quầy tiếp tân ở đâu?' }
            }
          ]
        },
        {
          pattern: 'こちら / そちら / あちら',
          highlights: [['こちら', 'そちら', 'あちら']],
          title: {
            en: 'こちら / そちら / あちら (polite direction)',
            vi: 'こちら / そちら / あちら (hướng, lịch sự)'
          },
          explanation: {
            en: 'The polite version of ここ/そこ/あそこ; also used to point out a direction.',
            vi: 'Dạng lịch sự của ここ/そこ/あそこ; cũng dùng để chỉ hướng.'
          },
          examples: [
            {
              jp: 'エレベーターは こちらです。',
              romaji: 'Erebētā wa kochira desu.',
              meaning: { en: 'The elevator is this way.', vi: 'Thang máy ở phía này.' }
            },
            {
              jp: 'かいぎしつは あちらです。',
              romaji: 'Kaigishitsu wa achira desu.',
              meaning: { en: 'The meeting room is that way.', vi: 'Phòng họp ở phía kia.' }
            }
          ]
        },
        {
          pattern: 'どこ の N です',
          highlights: ['どこ', 'の', 'です'],
          title: { en: 'Where it is from (どこの)', vi: 'Xuất xứ (どこの)' },
          explanation: {
            en: 'どこの asks which country or maker something is from; answer with 国/company + の.',
            vi: 'どこの hỏi đồ vật đến từ nước nào / hãng nào; trả lời bằng tên nước/hãng + の.'
          },
          examples: [
            {
              jp: 'これは どこの くるまですか。',
              romaji: 'Kore wa doko no kuruma desu ka.',
              meaning: { en: 'Which country is this car from?', vi: 'Xe này của nước nào?' }
            },
            {
              jp: 'にほんの くるまです。',
              romaji: 'Nihon no kuruma desu.',
              meaning: { en: 'It is a Japanese car.', vi: 'Là xe của Nhật.' }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'At the shop', vi: 'Ở cửa hàng' },
          lines: [
            {
              jp: 'すみません、その くつは いくらですか。',
              romaji: 'Sumimasen, sono kutsu wa ikura desu ka.',
              meaning: {
                en: 'Excuse me, how much are those shoes?',
                vi: 'Xin lỗi, đôi giày đó bao nhiêu tiền?'
              }
            },
            {
              jp: 'これですか。8000えんです。',
              romaji: 'Kore desu ka. Hassen en desu.',
              meaning: { en: 'These? They are 8000 yen.', vi: 'Đôi này à? 8000 yên.' }
            },
            {
              jp: 'じゃ、これを ください。',
              romaji: 'Ja, kore o kudasai.',
              meaning: { en: "Then I'll take them, please.", vi: 'Vậy cho tôi đôi này.' }
            },
            {
              jp: 'ありがとうございます。',
              romaji: 'Arigatō gozaimasu.',
              meaning: { en: 'Thank you.', vi: 'Cảm ơn quý khách.' }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: { en: 'How much are the shoes?', vi: 'Đôi giày bao nhiêu tiền?' },
              choices: [
                { id: 'a', label: { en: '8000 yen', vi: '8000 yên' } },
                { id: 'b', label: { en: '5000 yen', vi: '5000 yên' } },
                { id: 'c', label: { en: '3000 yen', vi: '3000 yên' } },
                { id: 'd', label: { en: '1000 yen', vi: '1000 yên' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: { en: 'What does the customer decide?', vi: 'Khách quyết định thế nào?' },
              choices: [
                { id: 'a', label: { en: 'To buy them', vi: 'Mua đôi giày' } },
                { id: 'b', label: { en: 'Not to buy', vi: 'Không mua' } },
                { id: 'c', label: { en: 'To come back later', vi: 'Quay lại sau' } },
                { id: 'd', label: { en: 'To ask the price again', vi: 'Hỏi lại giá' } }
              ],
              correctId: 'a'
            }
          ]
        }
      ],
      reference: [
        {
          title: { en: 'Floors (〜階)', vi: 'Tầng (〜階)' },
          items: [
            {
              kana: 'いっかい',
              kanji: '1階',
              romaji: 'ikkai',
              meaning: { en: '1st floor', vi: 'tầng 1' }
            },
            {
              kana: 'にかい',
              kanji: '2階',
              romaji: 'nikai',
              meaning: { en: '2nd floor', vi: 'tầng 2' }
            },
            {
              kana: 'さんがい',
              kanji: '3階',
              romaji: 'sangai',
              meaning: { en: '3rd floor', vi: 'tầng 3' }
            },
            {
              kana: 'よんかい',
              kanji: '4階',
              romaji: 'yonkai',
              meaning: { en: '4th floor', vi: 'tầng 4' }
            },
            {
              kana: 'ごかい',
              kanji: '5階',
              romaji: 'gokai',
              meaning: { en: '5th floor', vi: 'tầng 5' }
            },
            {
              kana: 'ちか',
              kanji: '地下',
              romaji: 'chika',
              meaning: { en: 'basement', vi: 'tầng hầm' }
            }
          ]
        },
        {
          title: { en: 'Around town', vi: 'Địa điểm quanh phố' },
          items: [
            {
              kana: 'ぎんこう',
              kanji: '銀行',
              romaji: 'ginkō',
              meaning: { en: 'bank', vi: 'ngân hàng' }
            },
            {
              kana: 'ゆうびんきょく',
              kanji: '郵便局',
              romaji: 'yūbinkyoku',
              meaning: { en: 'post office', vi: 'bưu điện' }
            },
            { kana: 'えき', kanji: '駅', romaji: 'eki', meaning: { en: 'station', vi: 'nhà ga' } },
            {
              kana: 'としょかん',
              kanji: '図書館',
              romaji: 'toshokan',
              meaning: { en: 'library', vi: 'thư viện' }
            },
            {
              kana: 'デパート',
              romaji: 'depāto',
              meaning: { en: 'department store', vi: 'trung tâm thương mại' }
            },
            { kana: 'スーパー', romaji: 'sūpā', meaning: { en: 'supermarket', vi: 'siêu thị' } }
          ]
        },
        {
          title: { en: 'Big numbers (for prices)', vi: 'Số lớn (cho giá tiền)' },
          items: [
            { kana: 'ひゃく', kanji: '百', romaji: 'hyaku', meaning: { en: '100', vi: '100' } },
            {
              kana: 'さんびゃく',
              kanji: '三百',
              romaji: 'sanbyaku',
              meaning: { en: '300', vi: '300' }
            },
            {
              kana: 'ろっぴゃく',
              kanji: '六百',
              romaji: 'roppyaku',
              meaning: { en: '600', vi: '600' }
            },
            {
              kana: 'はっぴゃく',
              kanji: '八百',
              romaji: 'happyaku',
              meaning: { en: '800', vi: '800' }
            },
            { kana: 'せん', kanji: '千', romaji: 'sen', meaning: { en: '1,000', vi: '1.000' } },
            {
              kana: 'はっせん',
              kanji: '八千',
              romaji: 'hassen',
              meaning: { en: '8,000', vi: '8.000' }
            },
            { kana: 'まん', kanji: '万', romaji: 'man', meaning: { en: '10,000', vi: '10.000' } }
          ]
        }
      ]
    }
  ])
};
