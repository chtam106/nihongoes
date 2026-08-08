import { n5Lesson5 } from '@/constants/courses/n5/lessons-5.ts';
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
    en: 'A step-by-step JLPT N5 path modeled on Minna no Nihongo Shokyu I.',
    vi: 'Lộ trình JLPT N5 từng bước, bám theo giáo trình Minna no Nihongo Sơ cấp I.'
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
        {
          kana: 'ほん',
          kanji: '本',
          romaji: 'hon',
          ruby: [{ base: '本', reading: 'ほん' }],
          meaning: { en: 'book', vi: 'sách' }
        },
        {
          kana: 'じしょ',
          kanji: '辞書',
          romaji: 'jisho',
          ruby: [
            { base: '辞', reading: 'じ' },
            { base: '書', reading: 'しょ' }
          ],
          meaning: { en: 'dictionary', vi: 'từ điển' }
        },
        {
          kana: 'ざっし',
          kanji: '雑誌',
          romaji: 'zasshi',
          ruby: [
            { base: '雑', reading: 'ざっ' },
            { base: '誌', reading: 'し' }
          ],
          meaning: { en: 'magazine', vi: 'tạp chí' }
        },
        {
          kana: 'しんぶん',
          kanji: '新聞',
          romaji: 'shinbun',
          ruby: [
            { base: '新', reading: 'しん' },
            { base: '聞', reading: 'ぶん' }
          ],
          meaning: { en: 'newspaper', vi: 'báo' }
        },
        { kana: 'ノート', romaji: 'nōto', meaning: { en: 'notebook', vi: 'vở, sổ tay' } },
        {
          kana: 'めいし',
          kanji: '名刺',
          romaji: 'meishi',
          ruby: [
            { base: '名', reading: 'めい' },
            { base: '刺', reading: 'し' }
          ],
          meaning: { en: 'business card', vi: 'danh thiếp' }
        },
        {
          kana: 'てちょう',
          kanji: '手帳',
          romaji: 'techō',
          ruby: [
            { base: '手', reading: 'て' },
            { base: '帳', reading: 'ちょう' }
          ],
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
          ruby: [
            { base: '鉛', reading: 'えん' },
            { base: '筆', reading: 'ぴつ' }
          ],
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
        {
          kana: 'かぎ',
          kanji: '鍵',
          romaji: 'kagi',
          ruby: [{ base: '鍵', reading: 'かぎ' }],
          meaning: { en: 'key', vi: 'chìa khóa' }
        },
        {
          kana: 'とけい',
          kanji: '時計',
          romaji: 'tokei',
          ruby: [
            { base: '時', reading: 'と' },
            { base: '計', reading: 'けい' }
          ],
          meaning: { en: 'watch, clock', vi: 'đồng hồ' }
        },
        {
          kana: 'かさ',
          kanji: '傘',
          romaji: 'kasa',
          ruby: [{ base: '傘', reading: 'かさ' }],
          meaning: { en: 'umbrella', vi: 'ô, dù' }
        },
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
        {
          kana: 'くるま',
          kanji: '車',
          romaji: 'kuruma',
          ruby: [{ base: '車', reading: 'くるま' }],
          meaning: { en: 'car', vi: 'xe hơi' }
        },
        {
          kana: 'じどうしゃ',
          kanji: '自動車',
          romaji: 'jidōsha',
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '動', reading: 'どう' },
            { base: '車', reading: 'しゃ' }
          ],
          meaning: { en: 'automobile', vi: 'xe hơi, ô tô' }
        },
        {
          kana: 'つくえ',
          kanji: '机',
          romaji: 'tsukue',
          ruby: [{ base: '机', reading: 'つくえ' }],
          meaning: { en: 'desk', vi: 'bàn' }
        },
        {
          kana: 'いす',
          kanji: '椅子',
          romaji: 'isu',
          ruby: [
            { base: '椅', reading: 'い' },
            { base: '子', reading: 'す' }
          ],
          meaning: { en: 'chair', vi: 'ghế' }
        },
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
          ruby: [
            { base: '土', reading: 'み' },
            { base: '産', reading: 'やげ' }
          ],
          meaning: { en: 'souvenir, gift', vi: 'quà (đặc sản)' }
        },
        {
          kana: 'にほんご',
          kanji: '日本語',
          romaji: 'nihongo',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' }
          ],
          meaning: { en: 'Japanese (language)', vi: 'tiếng Nhật' }
        },
        {
          kana: 'えいご',
          kanji: '英語',
          romaji: 'eigo',
          ruby: [
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' }
          ],
          meaning: { en: 'English (language)', vi: 'tiếng Anh' }
        },
        {
          kana: 'なん',
          kanji: '何',
          romaji: 'nan',
          ruby: [{ base: '何', reading: 'なん' }],
          meaning: { en: 'what', vi: 'cái gì' }
        },
        { kana: 'そう', romaji: 'sō', meaning: { en: 'so, right', vi: 'đúng, vậy' } },
        {
          kana: 'ちがいます',
          kanji: '違います',
          romaji: 'chigaimasu',
          ruby: [{ base: '違', reading: 'ちが' }],
          meaning: { en: "that's wrong, different", vi: 'không phải, khác' }
        },
        {
          kana: '〜ご',
          kanji: '〜語',
          romaji: 'go',
          speech: 'ご',
          ruby: [{ base: '語', reading: 'ご' }],
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
          meaning: { en: 'What is this?', vi: 'Cái này là gì?' },
          ruby: [{ base: '何', reading: 'なん' }]
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
      conversation: [
        {
          id: 'conv-lesson2-1',
          title: { en: 'What is this?', vi: 'Đây là cái gì?' },
          speakers: [
            { id: 'alex', name: 'アレックス' },
            { id: 'maria', name: 'マリア' }
          ],
          lines: [
            {
              speakerId: 'alex',
              jp: 'すみません。これは 何ですか。',
              romaji: 'Sumimasen. Kore wa nan desu ka.',
              meaning: { en: 'Excuse me. What is this?', vi: 'Xin lỗi. Đây là cái gì?' },
              ruby: [{ base: '何', reading: 'なん' }]
            },
            {
              speakerId: 'maria',
              jp: 'それは 本です。',
              romaji: 'Sore wa hon desu.',
              meaning: { en: 'That is a book.', vi: 'Đó là quyển sách.' },
              ruby: [{ base: '本', reading: 'ほん' }]
            },
            {
              speakerId: 'alex',
              jp: 'あれは 何ですか。',
              romaji: 'Are wa nan desu ka.',
              meaning: { en: 'What is that over there?', vi: 'Cái kia là gì?' },
              ruby: [{ base: '何', reading: 'なん' }]
            },
            {
              speakerId: 'maria',
              jp: 'あれは 傘です。',
              romaji: 'Are wa kasa desu.',
              meaning: { en: 'That over there is an umbrella.', vi: 'Cái kia là cái ô.' },
              ruby: [{ base: '傘', reading: 'かさ' }]
            }
          ]
        },
        {
          id: 'conv-lesson2-2',
          title: { en: 'Whose bag is this?', vi: 'Cái cặp này là của ai?' },
          speakers: [
            { id: 'alex', name: 'アレックス' },
            { id: 'maria', name: 'マリア' }
          ],
          lines: [
            {
              speakerId: 'alex',
              jp: 'この かばんは だれのですか。',
              romaji: 'Kono kaban wa dare no desu ka.',
              meaning: { en: 'Whose bag is this?', vi: 'Cái cặp này là của ai?' }
            },
            {
              speakerId: 'maria',
              jp: 'その かばんは 私のです。',
              romaji: 'Sono kaban wa watashi no desu.',
              meaning: { en: 'That bag is mine.', vi: 'Cái cặp đó là của tôi.' },
              ruby: [{ base: '私', reading: 'わたし' }]
            },
            {
              speakerId: 'alex',
              jp: 'この 本は 何ですか。',
              romaji: 'Kono hon wa nan desu ka.',
              meaning: { en: 'What is this book?', vi: 'Quyển sách này là gì?' },
              ruby: [
                { base: '本', reading: 'ほん' },
                { base: '何', reading: 'なん' }
              ]
            },
            {
              speakerId: 'maria',
              jp: 'それは 日本語の 辞書です。',
              romaji: 'Sore wa nihongo no jisho desu.',
              meaning: { en: 'It is a Japanese dictionary.', vi: 'Đó là từ điển tiếng Nhật.' },
              ruby: [
                { base: '日', reading: 'に' },
                { base: '本', reading: 'ほん' },
                { base: '語', reading: 'ご' },
                { base: '辞', reading: 'じ' },
                { base: '書', reading: 'しょ' }
              ]
            },
            {
              speakerId: 'alex',
              jp: 'そうですか。',
              romaji: 'Sō desu ka.',
              meaning: { en: 'I see.', vi: 'Vậy à.' }
            }
          ]
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
              jp: 'これは 辞書です。',
              romaji: 'Kore wa jisho desu.',
              meaning: { en: 'This is a dictionary.', vi: 'Đây là từ điển.' },
              ruby: [
                { base: '辞', reading: 'じ' },
                { base: '書', reading: 'しょ' }
              ]
            },
            {
              jp: 'それは 本ですか。',
              romaji: 'Sore wa hon desu ka.',
              meaning: { en: 'Is that a book?', vi: 'Cái đó là sách phải không?' },
              ruby: [{ base: '本', reading: 'ほん' }]
            },
            {
              jp: 'あれは 時計です。',
              romaji: 'Are wa tokei desu.',
              meaning: { en: 'That over there is a clock.', vi: 'Cái kia là đồng hồ.' },
              ruby: [
                { base: '時', reading: 'と' },
                { base: '計', reading: 'けい' }
              ]
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
          explanationRuby: [
            { base: '本', reading: 'ほん' },
            { base: '本', reading: 'ほん' }
          ],
          examples: [
            {
              jp: 'この かばんは 私のです。',
              romaji: 'Kono kaban wa watashi no desu.',
              meaning: { en: 'This bag is mine.', vi: 'Cái cặp này là của tôi.' },
              ruby: [{ base: '私', reading: 'わたし' }]
            },
            {
              jp: 'その 時計は 日本のです。',
              romaji: 'Sono tokei wa nihon no desu.',
              meaning: { en: 'That watch is a Japanese one.', vi: 'Cái đồng hồ đó là hàng Nhật.' },
              ruby: [
                { base: '時', reading: 'と' },
                { base: '計', reading: 'けい' },
                { base: '日', reading: 'に' },
                { base: '本', reading: 'ほん' }
              ]
            },
            {
              jp: 'あの 人は だれですか。',
              romaji: 'Ano hito wa dare desu ka.',
              meaning: { en: 'Who is that person over there?', vi: 'Người kia là ai vậy?' },
              ruby: [{ base: '人', reading: 'ひと' }]
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
              jp: 'これは 私の 本です。',
              romaji: 'Kore wa watashi no hon desu.',
              meaning: { en: 'This is my book.', vi: 'Đây là sách của tôi.' },
              ruby: [
                { base: '私', reading: 'わたし' },
                { base: '本', reading: 'ほん' }
              ]
            },
            {
              jp: 'それは 日本語の 雑誌です。',
              romaji: 'Sore wa nihongo no zasshi desu.',
              meaning: { en: 'That is a Japanese magazine.', vi: 'Cái đó là tạp chí tiếng Nhật.' },
              ruby: [
                { base: '日', reading: 'に' },
                { base: '本', reading: 'ほん' },
                { base: '語', reading: 'ご' },
                { base: '雑', reading: 'ざっ' },
                { base: '誌', reading: 'し' }
              ]
            },
            {
              jp: 'あれは だれの 傘ですか。',
              romaji: 'Are wa dare no kasa desu ka.',
              meaning: { en: 'Whose umbrella is that over there?', vi: 'Cái ô kia là của ai?' },
              ruby: [{ base: '傘', reading: 'かさ' }]
            }
          ]
        },
        {
          pattern: 'N は 何 ですか',
          patternRuby: [{ base: '何', reading: 'なん' }],
          highlights: ['は', '何', 'です', 'か'],
          title: { en: 'Asking "what is it?" with 何', vi: 'Hỏi "là cái gì?" với 何' },
          titleRuby: [{ base: '何', reading: 'なん' }],
          explanation: {
            en: '何 (なん) means "what". Put it where the unknown noun would go to ask what something is.',
            vi: '何 (なん) nghĩa là "cái gì". Đặt vào vị trí danh từ chưa biết để hỏi đó là gì.'
          },
          explanationRuby: [{ base: '何', reading: 'なん' }],
          examples: [
            {
              jp: 'これは 何ですか。',
              romaji: 'Kore wa nan desu ka.',
              meaning: { en: 'What is this?', vi: 'Đây là cái gì?' },
              ruby: [{ base: '何', reading: 'なん' }]
            },
            {
              jp: 'あれは 何ですか。',
              romaji: 'Are wa nan desu ka.',
              meaning: { en: 'What is that over there?', vi: 'Cái kia là gì?' },
              ruby: [{ base: '何', reading: 'なん' }]
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
                jp: 'それは 本です。',
                romaji: 'Sore wa hon desu.',
                meaning: { en: 'It is a book.', vi: 'Đó là quyển sách.' },
                ruby: [{ base: '本', reading: 'ほん' }]
              },
              {
                jp: 'これは 鍵です。',
                romaji: 'Kore wa kagi desu.',
                meaning: { en: 'This is a key.', vi: 'Đây là chìa khóa.' },
                ruby: [{ base: '鍵', reading: 'かぎ' }]
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
              jp: 'すみません。それは 何ですか。',
              romaji: 'Sumimasen. Sore wa nan desu ka.',
              meaning: { en: 'Excuse me. What is that?', vi: 'Xin lỗi. Cái đó là gì vậy?' },
              ruby: [{ base: '何', reading: 'なん' }]
            },
            {
              jp: 'これですか。これは 日本語の 辞書です。',
              romaji: 'Kore desu ka. Kore wa nihongo no jisho desu.',
              meaning: {
                en: 'This one? This is a Japanese dictionary.',
                vi: 'Cái này à? Đây là từ điển tiếng Nhật.'
              },
              ruby: [
                { base: '日', reading: 'に' },
                { base: '本', reading: 'ほん' },
                { base: '語', reading: 'ご' },
                { base: '辞', reading: 'じ' },
                { base: '書', reading: 'しょ' }
              ]
            },
            {
              jp: 'その 辞書は あなたのですか。',
              romaji: 'Sono jisho wa anata no desu ka.',
              meaning: {
                en: 'Is that dictionary yours?',
                vi: 'Cuốn từ điển đó là của bạn phải không?'
              },
              ruby: [
                { base: '辞', reading: 'じ' },
                { base: '書', reading: 'しょ' }
              ]
            },
            {
              jp: 'はい、私のです。',
              romaji: 'Hai, watashi no desu.',
              meaning: { en: 'Yes, it is mine.', vi: 'Vâng, của tôi.' },
              ruby: [{ base: '私', reading: 'わたし' }]
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
        },
        {
          id: 'reading-2',
          title: { en: 'Things on the desk', vi: 'Đồ trên bàn' },
          lines: [
            {
              jp: 'これは 本です。',
              romaji: 'Kore wa hon desu.',
              meaning: { en: 'This is a book.', vi: 'Đây là quyển sách.' },
              ruby: [{ base: '本', reading: 'ほん' }]
            },
            {
              jp: 'あれは 傘です。',
              romaji: 'Are wa kasa desu.',
              meaning: { en: 'That over there is an umbrella.', vi: 'Cái kia là cái ô.' },
              ruby: [{ base: '傘', reading: 'かさ' }]
            },
            {
              jp: 'この かばんは だれのですか。',
              romaji: 'Kono kaban wa dare no desu ka.',
              meaning: { en: 'Whose bag is this?', vi: 'Cái cặp này là của ai?' }
            },
            {
              jp: 'その かばんは 私のです。',
              romaji: 'Sono kaban wa watashi no desu.',
              meaning: { en: 'That bag is mine.', vi: 'Cái cặp đó là của tôi.' },
              ruby: [{ base: '私', reading: 'わたし' }]
            }
          ],
          questions: [
            {
              id: 'q1',
              question: { en: 'What is that over there (あれ)?', vi: 'Cái kia (あれ) là gì?' },
              choices: [
                { id: 'a', label: { en: 'An umbrella', vi: 'Cái ô' } },
                { id: 'b', label: { en: 'A book', vi: 'Quyển sách' } },
                { id: 'c', label: { en: 'A bag', vi: 'Cái cặp' } },
                { id: 'd', label: { en: 'A key', vi: 'Chìa khóa' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: { en: 'Whose bag is it?', vi: 'Cái cặp là của ai?' },
              choices: [
                { id: 'a', label: { en: 'The speaker', vi: 'Người nói' } },
                { id: 'b', label: { en: 'Maria', vi: 'Maria' } },
                { id: 'c', label: { en: 'The teacher', vi: 'Giáo viên' } },
                { id: 'd', label: { en: 'Nobody knows', vi: 'Không ai biết' } }
              ],
              correctId: 'a'
            }
          ]
        },
        {
          id: 'reading-3',
          title: { en: 'Is that right?', vi: 'Có đúng không?' },
          lines: [
            {
              jp: 'その 時計は 日本の ですか。',
              romaji: 'Sono tokei wa nihon no desu ka.',
              meaning: {
                en: 'Is that watch Japanese?',
                vi: 'Cái đồng hồ đó là hàng Nhật phải không?'
              },
              ruby: [
                { base: '時', reading: 'と' },
                { base: '計', reading: 'けい' },
                { base: '日', reading: 'に' },
                { base: '本', reading: 'ほん' }
              ]
            },
            {
              jp: 'はい、そうです。',
              romaji: 'Hai, sō desu.',
              meaning: { en: 'Yes, that is right.', vi: 'Vâng, đúng vậy.' }
            },
            {
              jp: 'これは 鍵ですか。',
              romaji: 'Kore wa kagi desu ka.',
              meaning: { en: 'Is this a key?', vi: 'Cái này là chìa khóa phải không?' },
              ruby: [{ base: '鍵', reading: 'かぎ' }]
            },
            {
              jp: 'いいえ、違います。これは 鉛筆です。',
              romaji: 'Iie, chigaimasu. Kore wa enpitsu desu.',
              meaning: {
                en: 'No, it is not. This is a pencil.',
                vi: 'Không, không phải. Đây là bút chì.'
              },
              ruby: [
                { base: '違', reading: 'ちが' },
                { base: '鉛', reading: 'えん' },
                { base: '筆', reading: 'ぴつ' }
              ]
            }
          ],
          questions: [
            {
              id: 'q1',
              question: { en: 'Is the watch Japanese?', vi: 'Đồng hồ có phải hàng Nhật không?' },
              choices: [
                { id: 'a', label: { en: 'Yes', vi: 'Có' } },
                { id: 'b', label: { en: 'No', vi: 'Không' } },
                { id: 'c', label: { en: 'Not mentioned', vi: 'Không nói' } },
                { id: 'd', label: { en: 'It is broken', vi: 'Bị hỏng' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: { en: 'What is this object really?', vi: 'Vật này thực ra là gì?' },
              choices: [
                { id: 'a', label: { en: 'A pencil', vi: 'Bút chì' } },
                { id: 'b', label: { en: 'A key', vi: 'Chìa khóa' } },
                { id: 'c', label: { en: 'A book', vi: 'Quyển sách' } },
                { id: 'd', label: { en: 'A clock', vi: 'Đồng hồ' } }
              ],
              correctId: 'a'
            }
          ]
        }
      ],
      reference: [
        {
          kind: 'vocab',
          title: { en: 'Common Japanese surnames', vi: 'Họ thường gặp' },
          includeInQuiz: false,
          intro: {
            en: 'Surnames (姓): the 20 most common Japanese family names.',
            vi: 'Họ (姓): 20 họ phổ biến nhất ở Nhật Bản.'
          },
          items: [
            {
              kana: 'さとう',
              kanji: '佐藤',
              romaji: 'Satō',
              meaning: { en: 'Satō', vi: 'Satō' },
              ruby: [
                { base: '佐', reading: 'さ' },
                { base: '藤', reading: 'とう' }
              ]
            },
            {
              kana: 'すずき',
              kanji: '鈴木',
              romaji: 'Suzuki',
              meaning: { en: 'Suzuki', vi: 'Suzuki' },
              ruby: [
                { base: '鈴', reading: 'すず' },
                { base: '木', reading: 'き' }
              ]
            },
            {
              kana: 'たかはし',
              kanji: '高橋',
              romaji: 'Takahashi',
              meaning: { en: 'Takahashi', vi: 'Takahashi' },
              ruby: [
                { base: '高', reading: 'たか' },
                { base: '橋', reading: 'はし' }
              ]
            },
            {
              kana: 'たなか',
              kanji: '田中',
              romaji: 'Tanaka',
              meaning: { en: 'Tanaka', vi: 'Tanaka' },
              ruby: [
                { base: '田', reading: 'た' },
                { base: '中', reading: 'なか' }
              ]
            },
            {
              kana: 'わたなべ',
              kanji: '渡辺',
              romaji: 'Watanabe',
              meaning: { en: 'Watanabe', vi: 'Watanabe' },
              ruby: [
                { base: '渡', reading: 'わた' },
                { base: '辺', reading: 'なべ' }
              ]
            },
            {
              kana: 'いとう',
              kanji: '伊藤',
              romaji: 'Itō',
              meaning: { en: 'Itō', vi: 'Itō' },
              ruby: [
                { base: '伊', reading: 'い' },
                { base: '藤', reading: 'とう' }
              ]
            },
            {
              kana: 'やまもと',
              kanji: '山本',
              romaji: 'Yamamoto',
              meaning: { en: 'Yamamoto', vi: 'Yamamoto' },
              ruby: [
                { base: '山', reading: 'やま' },
                { base: '本', reading: 'もと' }
              ]
            },
            {
              kana: 'なかむら',
              kanji: '中村',
              romaji: 'Nakamura',
              meaning: { en: 'Nakamura', vi: 'Nakamura' },
              ruby: [
                { base: '中', reading: 'なか' },
                { base: '村', reading: 'むら' }
              ]
            },
            {
              kana: 'こばやし',
              kanji: '小林',
              romaji: 'Kobayashi',
              meaning: { en: 'Kobayashi', vi: 'Kobayashi' },
              ruby: [
                { base: '小', reading: 'こ' },
                { base: '林', reading: 'ばやし' }
              ]
            },
            {
              kana: 'かとう',
              kanji: '加藤',
              romaji: 'Katō',
              meaning: { en: 'Katō', vi: 'Katō' },
              ruby: [
                { base: '加', reading: 'か' },
                { base: '藤', reading: 'とう' }
              ]
            },
            {
              kana: 'よしだ',
              kanji: '吉田',
              romaji: 'Yoshida',
              meaning: { en: 'Yoshida', vi: 'Yoshida' },
              ruby: [
                { base: '吉', reading: 'よし' },
                { base: '田', reading: 'だ' }
              ]
            },
            {
              kana: 'やまだ',
              kanji: '山田',
              romaji: 'Yamada',
              meaning: { en: 'Yamada', vi: 'Yamada' },
              ruby: [
                { base: '山', reading: 'やま' },
                { base: '田', reading: 'だ' }
              ]
            },
            {
              kana: 'ささき',
              kanji: '佐々木',
              romaji: 'Sasaki',
              meaning: { en: 'Sasaki', vi: 'Sasaki' },
              ruby: [
                { base: '佐', reading: 'さ' },
                { base: '々', reading: 'さ' },
                { base: '木', reading: 'き' }
              ]
            },
            {
              kana: 'さいとう',
              kanji: '斎藤',
              romaji: 'Saitō',
              meaning: { en: 'Saitō', vi: 'Saitō' },
              ruby: [
                { base: '斎', reading: 'さい' },
                { base: '藤', reading: 'とう' }
              ]
            },
            {
              kana: 'やまぐち',
              kanji: '山口',
              romaji: 'Yamaguchi',
              meaning: { en: 'Yamaguchi', vi: 'Yamaguchi' },
              ruby: [
                { base: '山', reading: 'やま' },
                { base: '口', reading: 'ぐち' }
              ]
            },
            {
              kana: 'まつもと',
              kanji: '松本',
              romaji: 'Matsumoto',
              meaning: { en: 'Matsumoto', vi: 'Matsumoto' },
              ruby: [
                { base: '松', reading: 'まつ' },
                { base: '本', reading: 'もと' }
              ]
            },
            {
              kana: 'いのうえ',
              kanji: '井上',
              romaji: 'Inoue',
              meaning: { en: 'Inoue', vi: 'Inoue' },
              ruby: [
                { base: '井', reading: 'い' },
                { base: '上', reading: 'のうえ' }
              ]
            },
            {
              kana: 'きむら',
              kanji: '木村',
              romaji: 'Kimura',
              meaning: { en: 'Kimura', vi: 'Kimura' },
              ruby: [
                { base: '木', reading: 'き' },
                { base: '村', reading: 'むら' }
              ]
            },
            {
              kana: 'はやし',
              kanji: '林',
              romaji: 'Hayashi',
              meaning: { en: 'Hayashi', vi: 'Hayashi' },
              ruby: [{ base: '林', reading: 'はやし' }]
            },
            {
              kana: 'しみず',
              kanji: '清水',
              romaji: 'Shimizu',
              meaning: { en: 'Shimizu', vi: 'Shimizu' },
              ruby: [
                { base: '清', reading: 'し' },
                { base: '水', reading: 'みず' }
              ]
            }
          ],
          notes: [
            {
              en: "Source: excerpt from Keiji Shirooka and Tadashige Murayama's nationwide Japanese surname ranking database (August 2011).",
              vi: 'Nguồn: trích từ cơ sở dữ liệu xếp hạng họ người Nhật toàn quốc của Keiji Shirooka và Tadashige Murayama (tháng 8/2011).'
            }
          ]
        },
        {
          kind: 'list',
          title: { en: 'Greetings in context', vi: 'Chào hỏi' },
          rows: [
            {
              jp: 'はじめまして。',
              meaning: {
                en: 'Nice to meet you. Said when meeting someone for the first time.',
                vi: 'Rất vui được gặp bạn. Dùng khi lần đầu gặp ai đó.'
              },
              note: {
                en: 'In business, people often exchange business cards when meeting for the first time.',
                vi: 'Trong công việc, khi lần đầu gặp nhau người Nhật thường trao đổi danh thiếp.'
              }
            },
            {
              jp: 'どうぞ よろしく お願いします。',
              meaning: {
                en: 'Please treat me well. I look forward to your support.',
                vi: 'Rất mong được giúp đỡ. Xin được giúp đỡ.'
              },
              note: {
                en: 'When moving to a new neighborhood, people greet neighbors and bring a small gift such as towels, soap, or sweets.',
                vi: 'Khi chuyển nhà, người Nhật thường sang chào hàng xóm và mang quà nhỏ như khăn tắm, xà phòng, bánh kẹo, v.v.'
              },
              ruby: [{ base: '願', reading: 'ねが' }]
            }
          ]
        },
        {
          kind: 'vocab',
          title: { en: 'School supplies', vi: 'Đồ dùng học tập' },
          items: [
            {
              kana: 'けしゴム',
              kanji: '消しゴム',
              romaji: 'keshigomu',
              ruby: [{ base: '消', reading: 'け' }],
              meaning: { en: 'eraser', vi: 'cục tẩy' }
            },
            {
              kana: 'じょうぎ',
              kanji: '定規',
              romaji: 'jōgi',
              ruby: [
                { base: '定', reading: 'じょう' },
                { base: '規', reading: 'ぎ' }
              ],
              meaning: { en: 'ruler', vi: 'thước kẻ' }
            },
            { kana: 'はさみ', romaji: 'hasami', meaning: { en: 'scissors', vi: 'cái kéo' } },
            { kana: 'のり', romaji: 'nori', meaning: { en: 'glue', vi: 'keo dán' } },
            {
              kana: 'ふでばこ',
              kanji: '筆箱',
              romaji: 'fudebako',
              ruby: [
                { base: '筆', reading: 'ふで' },
                { base: '箱', reading: 'ばこ' }
              ],
              meaning: { en: 'pencil case', vi: 'hộp bút' }
            },
            { kana: 'カレンダー', romaji: 'karendā', meaning: { en: 'calendar', vi: 'lịch' } }
          ]
        },
        {
          kind: 'vocab',
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
              meaning: { en: 'telephone', vi: 'điện thoại' },
              ruby: [
                { base: '電', reading: 'でん' },
                { base: '話', reading: 'わ' }
              ]
            },
            {
              kana: 'れいぞうこ',
              kanji: '冷蔵庫',
              romaji: 'reizōko',
              ruby: [
                { base: '冷', reading: 'れい' },
                { base: '蔵', reading: 'ぞう' },
                { base: '庫', reading: 'こ' }
              ],
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
          kind: 'vocab',
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
          kind: 'vocab',
          title: { en: 'More everyday objects', vi: 'Đồ vật thường ngày khác' },
          items: [
            {
              kana: 'おかね',
              kanji: 'お金',
              romaji: 'okane',
              ruby: [{ base: '金', reading: 'かね' }],
              meaning: { en: 'money', vi: 'tiền' }
            },
            {
              kana: 'さいふ',
              kanji: '財布',
              romaji: 'saifu',
              ruby: [
                { base: '財', reading: 'さい' },
                { base: '布', reading: 'ふ' }
              ],
              meaning: { en: 'wallet', vi: 'ví' }
            },
            {
              kana: 'めがね',
              kanji: '眼鏡',
              romaji: 'megane',
              ruby: [
                { base: '眼', reading: 'め' },
                { base: '鏡', reading: 'がね' }
              ],
              meaning: { en: 'glasses', vi: 'kính mắt' }
            },
            {
              kana: 'けいたいでんわ',
              kanji: '携帯電話',
              romaji: 'keitai denwa',
              ruby: [
                { base: '携', reading: 'けい' },
                { base: '帯', reading: 'たい' },
                { base: '電', reading: 'でん' },
                { base: '話', reading: 'わ' }
              ],
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
          ruby: [
            { base: '教', reading: 'きょう' },
            { base: '室', reading: 'しつ' }
          ],
          meaning: { en: 'classroom', vi: 'phòng học' }
        },
        {
          kana: 'しょくどう',
          kanji: '食堂',
          romaji: 'shokudō',
          ruby: [
            { base: '食', reading: 'しょく' },
            { base: '堂', reading: 'どう' }
          ],
          meaning: { en: 'cafeteria, dining hall', vi: 'nhà ăn, căng tin' }
        },
        {
          kana: 'じむしょ',
          kanji: '事務所',
          romaji: 'jimusho',
          meaning: { en: 'office', vi: 'văn phòng' },
          ruby: [
            { base: '事', reading: 'じ' },
            { base: '務', reading: 'む' },
            { base: '所', reading: 'しょ' }
          ]
        },
        {
          kana: 'かいぎしつ',
          kanji: '会議室',
          romaji: 'kaigishitsu',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '室', reading: 'しつ' }
          ],
          meaning: { en: 'meeting room', vi: 'phòng họp' }
        },
        {
          kana: 'うけつけ',
          kanji: '受付',
          romaji: 'uketsuke',
          ruby: [
            { base: '受', reading: 'うけ' },
            { base: '付', reading: 'つけ' }
          ],
          meaning: { en: 'reception', vi: 'quầy tiếp tân' }
        },
        { kana: 'ロビー', romaji: 'robī', meaning: { en: 'lobby', vi: 'sảnh' } },
        {
          kana: 'へや',
          kanji: '部屋',
          romaji: 'heya',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' }
          ],
          meaning: { en: 'room', vi: 'phòng' }
        },
        { kana: 'トイレ', romaji: 'toire', meaning: { en: 'toilet', vi: 'nhà vệ sinh' } },
        {
          kana: 'かいだん',
          kanji: '階段',
          romaji: 'kaidan',
          ruby: [
            { base: '階', reading: 'かい' },
            { base: '段', reading: 'だん' }
          ],
          meaning: { en: 'stairs', vi: 'cầu thang' }
        },
        { kana: 'エレベーター', romaji: 'erebētā', meaning: { en: 'elevator', vi: 'thang máy' } },
        {
          kana: 'エスカレーター',
          romaji: 'esukarētā',
          meaning: { en: 'escalator', vi: 'thang cuốn' }
        },
        {
          kana: 'くに',
          kanji: '国',
          romaji: 'kuni',
          ruby: [{ base: '国', reading: 'くに' }],
          meaning: { en: 'country', vi: 'đất nước' }
        },
        {
          kana: 'がっこう',
          kanji: '学校',
          romaji: 'gakkō',
          meaning: { en: 'school', vi: 'trường học' },
          ruby: [
            { base: '学', reading: 'がっ' },
            { base: '校', reading: 'こう' }
          ]
        },
        {
          kana: 'かいしゃ',
          kanji: '会社',
          romaji: 'kaisha',
          meaning: { en: 'company', vi: 'công ty' },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' }
          ]
        },
        { kana: 'うち', romaji: 'uchi', meaning: { en: 'home, house', vi: 'nhà' } },
        {
          kana: 'くつ',
          kanji: '靴',
          romaji: 'kutsu',
          ruby: [{ base: '靴', reading: 'くつ' }],
          meaning: { en: 'shoes', vi: 'giày' }
        },
        { kana: 'ネクタイ', romaji: 'nekutai', meaning: { en: 'necktie', vi: 'cà vạt' } },
        { kana: 'ワイン', romaji: 'wain', meaning: { en: 'wine', vi: 'rượu vang' } },
        {
          kana: 'うりば',
          kanji: '売り場',
          romaji: 'uriba',
          ruby: [
            { base: '売', reading: 'う' },
            { base: '場', reading: 'ば' }
          ],
          meaning: { en: 'sales floor, department', vi: 'quầy hàng, khu bán' }
        },
        {
          kana: 'ちか',
          kanji: '地下',
          romaji: 'chika',
          ruby: [
            { base: '地', reading: 'ち' },
            { base: '下', reading: 'か' }
          ],
          meaning: { en: 'underground level, basement', vi: 'tầng hầm, dưới mặt đất' }
        },
        {
          kana: '〜かい',
          kanji: '〜階',
          romaji: 'kai',
          speech: 'かい',
          ruby: [{ base: '階', reading: 'かい' }],
          meaning: { en: '~th floor (counter)', vi: 'tầng thứ ~' }
        },
        {
          kana: 'なんがい',
          kanji: '何階',
          romaji: 'nangai',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '階', reading: 'がい' }
          ],
          meaning: { en: 'what floor', vi: 'tầng mấy' }
        },
        {
          kana: '〜えん',
          kanji: '〜円',
          romaji: 'en',
          speech: 'えん',
          ruby: [{ base: '円', reading: 'えん' }],
          meaning: { en: '~ yen', vi: '~ yên' }
        },
        { kana: 'いくら', romaji: 'ikura', meaning: { en: 'how much', vi: 'bao nhiêu tiền' } }
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
      conversation: [
        {
          id: 'conv-lesson3-shop',
          title: { en: 'At the shop', vi: 'Ở cửa hàng' },
          speakers: [
            { id: 'clerk', name: '店員' },
            { id: 'customer', name: 'おきゃくさま' }
          ],
          lines: [
            {
              speakerId: 'clerk',
              jp: 'いらっしゃいませ。',
              romaji: 'Irasshaimase.',
              meaning: { en: 'Welcome.', vi: 'Xin mời.' }
            },
            {
              speakerId: 'customer',
              jp: 'これは いくらですか。',
              romaji: 'Kore wa ikura desu ka.',
              meaning: { en: 'How much is this?', vi: 'Cái này bao nhiêu tiền?' }
            },
            {
              speakerId: 'clerk',
              jp: 'それは 3000円です。',
              romaji: 'Sore wa sanzen en desu.',
              meaning: { en: 'That is 3000 yen.', vi: 'Cái đó 3000 yên.' },
              ruby: [{ base: '円', reading: 'えん' }]
            },
            {
              speakerId: 'customer',
              jp: 'ちょっと 見せて ください。',
              romaji: 'Chotto misete kudasai.',
              meaning: { en: 'Please show me it for a moment.', vi: 'Cho tôi xem một chút.' },
              ruby: [{ base: '見', reading: 'み' }]
            },
            {
              speakerId: 'clerk',
              jp: 'はい、どうぞ。',
              romaji: 'Hai, dōzo.',
              meaning: { en: 'Here you are.', vi: 'Đây, mời bạn.' }
            },
            {
              speakerId: 'customer',
              jp: 'これを ください。',
              romaji: 'Kore o kudasai.',
              meaning: { en: "I'll take this, please.", vi: 'Cho tôi cái này.' }
            }
          ]
        },
        {
          id: 'conv-lesson3-direction',
          title: { en: 'Asking for directions', vi: 'Hỏi đường' },
          speakers: [
            { id: 'visitor', name: 'おとこのひと' },
            { id: 'reception', name: 'うけつけ' }
          ],
          lines: [
            {
              speakerId: 'visitor',
              jp: 'すみません。トイレは どこですか。',
              romaji: 'Sumimasen. Toire wa doko desu ka.',
              meaning: { en: 'Excuse me. Where is the toilet?', vi: 'Xin lỗi. Nhà vệ sinh ở đâu?' }
            },
            {
              speakerId: 'reception',
              jp: 'あちらです。',
              romaji: 'Achira desu.',
              meaning: { en: 'It is over there.', vi: 'Ở phía kia.' }
            },
            {
              speakerId: 'visitor',
              jp: '会議室は どちらですか。',
              romaji: 'Kaigishitsu wa dochira desu ka.',
              meaning: { en: 'Where is the meeting room?', vi: 'Phòng họp ở đâu?' },
              ruby: [
                { base: '会', reading: 'かい' },
                { base: '議', reading: 'ぎ' },
                { base: '室', reading: 'しつ' }
              ]
            },
            {
              speakerId: 'reception',
              jp: '会議室は そちらです。',
              romaji: 'Kaigishitsu wa sochira desu.',
              meaning: { en: 'The meeting room is there.', vi: 'Phòng họp ở phía đó.' },
              ruby: [
                { base: '会', reading: 'かい' },
                { base: '議', reading: 'ぎ' },
                { base: '室', reading: 'しつ' }
              ]
            }
          ]
        }
      ],
      grammar: [
        {
          pattern: 'ここ / そこ / あそこ / こちら / そちら / あちら',
          highlights: [['ここ', 'そこ', 'あそこ'], ['こちら', 'そちら', 'あちら'], 'は', 'です'],
          title: {
            en: 'ここ / そこ / あそこ / こちら / そちら / あちら',
            vi: 'ここ / そこ / あそこ / こちら / そちら / あちら'
          },
          explanation: {
            en: 'These words point to a place. ここ is near the speaker, そこ is near the listener, and あそこ is far from both. こちら/そちら/あちら are the polite forms and may also refer to direction.',
            vi: 'Các từ này chỉ địa điểm. ここ gần người nói, そこ gần người nghe, あそこ xa cả hai. こちら/そちら/あちら là dạng lịch sự và cũng dùng để chỉ phương hướng.'
          },
          examples: [
            {
              jp: 'ここは 教室です。',
              romaji: 'Koko wa kyōshitsu desu.',
              meaning: { en: 'This place is the classroom.', vi: 'Đây là phòng học.' },
              ruby: [
                { base: '教', reading: 'きょう' },
                { base: '室', reading: 'しつ' }
              ]
            },
            {
              jp: 'そこは 事務所です。',
              romaji: 'Soko wa jimusho desu.',
              meaning: { en: 'That place is the office.', vi: 'Đó là văn phòng.' },
              ruby: [
                { base: '事', reading: 'じ' },
                { base: '務', reading: 'む' },
                { base: '所', reading: 'しょ' }
              ]
            },
            {
              jp: 'あそこは 食堂です。',
              romaji: 'Asoko wa shokudō desu.',
              meaning: { en: 'Over there is the cafeteria.', vi: 'Kia là nhà ăn.' },
              ruby: [
                { base: '食', reading: 'しょく' },
                { base: '堂', reading: 'どう' }
              ]
            },
            {
              jp: 'エレベーターは こちらです。',
              romaji: 'Erebētā wa kochira desu.',
              meaning: { en: 'The elevator is this way.', vi: 'Thang máy ở phía này.' }
            }
          ]
        },
        {
          pattern: 'N は 〜です',
          highlights: ['は', 'です'],
          title: { en: 'Noun + です for location', vi: 'Danh từ は です (địa điểm)' },
          explanation: {
            en: 'Use a noun plus です to say where something is located. This pattern describes the place of an object or person.',
            vi: 'Dùng danh từ + です để nói nơi chốn của một vật hoặc người. Mẫu này diễn tả vị trí.'
          },
          examples: [
            {
              jp: 'お手洗いは あそこです。',
              romaji: 'Otearai wa asoko desu.',
              meaning: { en: 'The restroom is over there.', vi: 'Nhà vệ sinh ở đằng kia.' },
              ruby: [
                { base: '手', reading: 'て' },
                { base: '洗', reading: 'あら' }
              ]
            },
            {
              jp: '電話は ２階です。',
              romaji: 'Denwa wa nikai desu.',
              meaning: { en: 'The phone is on the second floor.', vi: 'Điện thoại ở tầng hai.' },
              ruby: [
                { base: '電', reading: 'でん' },
                { base: '話', reading: 'わ' },
                { base: '階', reading: 'かい' }
              ]
            },
            {
              jp: '山田さんは 事務所です。',
              romaji: 'Yamada-san wa jimusho desu.',
              meaning: { en: 'Mr. Yamada is in the office.', vi: 'Anh Yamada ở văn phòng.' },
              ruby: [
                { base: '山', reading: 'やま' },
                { base: '田', reading: 'だ' },
                { base: '事', reading: 'じ' },
                { base: '務', reading: 'む' },
                { base: '所', reading: 'しょ' }
              ]
            }
          ]
        },
        {
          pattern: 'N は どこ / どちら ですか',
          highlights: [['どこ', 'どちら'], 'は', 'です', 'か'],
          title: { en: 'どこ / どちら (questions)', vi: 'どこ / どちら (câu hỏi)' },
          explanation: {
            en: 'どこ asks where a place or thing is. どちら is more polite and can ask direction or location. When asking the name of a school, company, or similar organization, use どこ or どちら instead of なん.',
            vi: 'どこ hỏi nơi chốn của vật hoặc địa điểm. どちら lịch sự hơn, hỏi được phương hướng hoặc vị trí. Khi hỏi tên trường, công ty hay tổ chức tương tự, dùng どこ hoặc どちら thay vì なん.'
          },
          examples: [
            {
              jp: 'お手洗いは どこですか。',
              romaji: 'Otearai wa doko desu ka.',
              meaning: { en: 'Where is the restroom?', vi: 'Nhà vệ sinh ở đâu?' },
              ruby: [
                { base: '手', reading: 'て' },
                { base: '洗', reading: 'あら' }
              ]
            },
            {
              jp: 'エレベーターは どちらですか。',
              romaji: 'Erebētā wa dochira desu ka.',
              meaning: { en: 'Which way is the elevator?', vi: 'Thang máy ở chỗ nào vậy?' }
            },
            {
              jp: '学校は どこですか。',
              romaji: 'Gakkō wa doko desu ka.',
              meaning: { en: 'Which school do you go to?', vi: 'Bạn học trường nào?' },
              ruby: [
                { base: '学', reading: 'がっ' },
                { base: '校', reading: 'こう' }
              ]
            },
            {
              jp: '会社は どちらですか。',
              romaji: 'Kaisha wa dochira desu ka.',
              meaning: { en: 'Which company do you work for?', vi: 'Bạn làm công ty nào?' },
              ruby: [
                { base: '会', reading: 'かい' },
                { base: '社', reading: 'しゃ' }
              ]
            }
          ],
          answers: {
            examples: [
              {
                jp: 'あそこです。',
                romaji: 'Asoko desu.',
                meaning: { en: 'Over there.', vi: 'Ở đằng kia.' }
              },
              {
                jp: 'あちらです。',
                romaji: 'Achira desu.',
                meaning: { en: 'Over there (polite).', vi: 'Ở phía kia ạ.' }
              }
            ]
          }
        },
        {
          pattern: 'どこ の N です',
          highlights: ['どこ', 'の', 'です'],
          title: { en: 'Where it is from (どこの)', vi: 'Xuất xứ (どこの)' },
          explanation: {
            en: 'When N1 is a country or company and N2 is a product, の links the maker or origin to the item. どこの asks which country or company it is from.',
            vi: 'Khi N1 là nước hoặc công ty và N2 là sản phẩm, の nối nguồn gốc với đồ vật. どこの hỏi đồ vật đến từ nước hoặc hãng nào.'
          },
          examples: [
            {
              jp: 'これは どこの コンピューターですか。',
              romaji: 'Kore wa doko no konpyūtā desu ka.',
              meaning: {
                en: 'Which country or company is this computer from?',
                vi: 'Máy tính này của nước/hãng nào?'
              }
            },
            {
              jp: 'これは どこの 車ですか。',
              romaji: 'Kore wa doko no kuruma desu ka.',
              meaning: { en: 'Which country is this car from?', vi: 'Xe này của nước nào?' },
              ruby: [{ base: '車', reading: 'くるま' }]
            }
          ],
          answers: {
            examples: [
              {
                jp: '日本の コンピューターです。',
                romaji: 'Nihon no konpyūtā desu.',
                meaning: { en: 'It is a Japanese computer.', vi: 'Là máy tính của Nhật.' },
                ruby: [
                  { base: '日', reading: 'に' },
                  { base: '本', reading: 'ほん' }
                ]
              },
              {
                jp: 'さくら 電気の コンピューターです。',
                romaji: 'Sakura denki no konpyūtā desu.',
                meaning: {
                  en: 'It is a computer from Sakura Electric.',
                  vi: 'Là máy tính của công ty điện Sakura.'
                },
                ruby: [
                  { base: '電', reading: 'でん' },
                  { base: '気', reading: 'き' }
                ]
              },
              {
                jp: '日本の 車です。',
                romaji: 'Nihon no kuruma desu.',
                meaning: { en: 'It is a Japanese car.', vi: 'Là xe của Nhật.' },
                ruby: [
                  { base: '日', reading: 'に' },
                  { base: '本', reading: 'ほん' },
                  { base: '車', reading: 'くるま' }
                ]
              }
            ]
          }
        },
        {
          pattern: 'お + N',
          highlights: ['お', 'どちら', 'です', 'か'],
          title: { en: 'Honorific prefix お', vi: 'Tiền tố lịch sự お' },
          explanation: {
            en: 'Add お before a word related to the listener or a third person to show respect.',
            vi: 'Thêm お trước từ liên quan đến người nghe hoặc người thứ ba để bày tỏ sự kính trọng.'
          },
          examples: [
            {
              jp: 'お国は どちらですか。',
              romaji: 'O-kuni wa dochira desu ka.',
              meaning: { en: 'What country are you from?', vi: 'Anh/Chị là người nước nào?' },
              ruby: [{ base: '国', reading: 'くに' }]
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
              jp: 'すみません、その 靴は いくらですか。',
              romaji: 'Sumimasen, sono kutsu wa ikura desu ka.',
              meaning: {
                en: 'Excuse me, how much are those shoes?',
                vi: 'Xin lỗi, đôi giày đó bao nhiêu tiền?'
              },
              ruby: [{ base: '靴', reading: 'くつ' }]
            },
            {
              jp: 'これですか。8000円です。',
              romaji: 'Kore desu ka. Hassen en desu.',
              meaning: { en: 'These? They are 8000 yen.', vi: 'Đôi này à? 8000 yên.' },
              ruby: [{ base: '円', reading: 'えん' }]
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
        },
        {
          id: 'reading-2',
          title: { en: 'Asking for directions', vi: 'Hỏi đường' },
          lines: [
            {
              jp: 'すみません。トイレは どこですか。',
              romaji: 'Sumimasen. Toire wa doko desu ka.',
              meaning: { en: 'Excuse me. Where is the toilet?', vi: 'Xin lỗi. Nhà vệ sinh ở đâu?' }
            },
            {
              jp: 'あちらです。',
              romaji: 'Achira desu.',
              meaning: { en: 'It is over there.', vi: 'Ở phía kia.' }
            },
            {
              jp: '会議室は どちらですか。',
              romaji: 'Kaigishitsu wa dochira desu ka.',
              meaning: { en: 'Where is the meeting room?', vi: 'Phòng họp ở đâu?' },
              ruby: [
                { base: '会', reading: 'かい' },
                { base: '議', reading: 'ぎ' },
                { base: '室', reading: 'しつ' }
              ]
            },
            {
              jp: '会議室は そちらです。',
              romaji: 'Kaigishitsu wa sochira desu.',
              meaning: { en: 'The meeting room is there.', vi: 'Phòng họp ở phía đó.' },
              ruby: [
                { base: '会', reading: 'かい' },
                { base: '議', reading: 'ぎ' },
                { base: '室', reading: 'しつ' }
              ]
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'What place did the visitor ask about first?',
                vi: 'Người hỏi hỏi địa điểm nào trước?'
              },
              choices: [
                { id: 'a', label: { en: 'The toilet', vi: 'Nhà vệ sinh' } },
                { id: 'b', label: { en: 'The meeting room', vi: 'Phòng họp' } },
                { id: 'c', label: { en: 'The cafeteria', vi: 'Nhà ăn' } },
                { id: 'd', label: { en: 'The elevator', vi: 'Thang máy' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: { en: 'Where is the meeting room?', vi: 'Phòng họp ở đâu?' },
              choices: [
                { id: 'a', label: { en: 'Over there (そちら)', vi: 'Phía đó (そちら)' } },
                { id: 'b', label: { en: 'Over there (あちら)', vi: 'Phía kia (あちら)' } },
                { id: 'c', label: { en: 'Here (ここ)', vi: 'Ở đây (ここ)' } },
                { id: 'd', label: { en: 'On the 2nd floor', vi: 'Tầng 2' } }
              ],
              correctId: 'a'
            }
          ]
        },
        {
          id: 'reading-3',
          title: { en: 'Inside the building', vi: 'Trong tòa nhà' },
          lines: [
            {
              jp: 'ここは 受付です。',
              romaji: 'Koko wa uketsuke desu.',
              meaning: { en: 'This is the reception.', vi: 'Đây là quầy tiếp tân.' },
              ruby: [
                { base: '受', reading: 'う' },
                { base: '付', reading: 'け' }
              ]
            },
            {
              jp: '食堂は あそこです。',
              romaji: 'Shokudō wa asoko desu.',
              meaning: { en: 'The cafeteria is over there.', vi: 'Nhà ăn ở đằng kia.' },
              ruby: [
                { base: '食', reading: 'しょく' },
                { base: '堂', reading: 'どう' }
              ]
            },
            {
              jp: '教室は 2階です。',
              romaji: 'Kyōshitsu wa nikai desu.',
              meaning: { en: 'The classroom is on the 2nd floor.', vi: 'Phòng học ở tầng 2.' },
              ruby: [
                { base: '教', reading: 'きょう' },
                { base: '室', reading: 'しつ' },
                { base: '階', reading: 'かい' }
              ]
            },
            {
              jp: 'エレベーターは こちらです。',
              romaji: 'Erebētā wa kochira desu.',
              meaning: { en: 'The elevator is this way.', vi: 'Thang máy ở phía này.' }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: { en: 'Where is the cafeteria?', vi: 'Nhà ăn ở đâu?' },
              choices: [
                { id: 'a', label: { en: 'Over there (あそこ)', vi: 'Đằng kia (あそこ)' } },
                { id: 'b', label: { en: 'Here (ここ)', vi: 'Ở đây (ここ)' } },
                { id: 'c', label: { en: 'This way (こちら)', vi: 'Phía này (こちら)' } },
                { id: 'd', label: { en: 'On the 2nd floor', vi: 'Tầng 2' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: { en: 'What floor is the classroom on?', vi: 'Phòng học ở tầng mấy?' },
              choices: [
                { id: 'a', label: { en: '2nd floor', vi: 'Tầng 2' } },
                { id: 'b', label: { en: '1st floor', vi: 'Tầng 1' } },
                { id: 'c', label: { en: 'Basement', vi: 'Tầng hầm' } },
                { id: 'd', label: { en: '3rd floor', vi: 'Tầng 3' } }
              ],
              correctId: 'a'
            }
          ]
        }
      ],
      reference: [
        {
          kind: 'list',
          title: { en: 'Department store floors', vi: 'Sơ đồ tầng đepaato' },
          layout: 'stacked',
          intro: {
            en: 'Typical floor layout in a Japanese department store (デパート).',
            vi: 'Bố trí tầng thường gặp trong cửa hàng bách hóa (デパート) ở Nhật.'
          },
          rows: [
            {
              number: '屋上',
              numberMeaning: { en: 'Rooftop', vi: 'Tầng thượng' },
              numberRuby: [
                { base: '屋', reading: 'おく' },
                { base: '上', reading: 'じょう' }
              ],
              jp: '遊園地',
              ruby: [
                { base: '遊', reading: 'ゆう' },
                { base: '園', reading: 'えん' },
                { base: '地', reading: 'ち' }
              ],
              meaning: { en: 'Amusement park', vi: 'Công viên giải trí' }
            },
            {
              number: '8階',
              numberMeaning: { en: '8th floor', vi: 'Tầng 8' },
              numberRuby: [{ base: '階', reading: 'かい' }],
              jp: 'レストラン・催し物会場',
              ruby: [
                { base: '催', reading: 'もよお' },
                { base: '物', reading: 'もの' },
                { base: '会', reading: 'かい' },
                { base: '場', reading: 'じょう' }
              ],
              meaning: {
                en: 'Restaurants, event hall',
                vi: 'Nhà hàng, phòng tổ chức sự kiện'
              }
            },
            {
              number: '7階',
              numberMeaning: { en: '7th floor', vi: 'Tầng 7' },
              numberRuby: [{ base: '階', reading: 'かい' }],
              jp: '時計・眼鏡',
              ruby: [
                { base: '時', reading: 'と' },
                { base: '計', reading: 'けい' },
                { base: '眼', reading: 'め' },
                { base: '鏡', reading: 'がね' }
              ],
              meaning: { en: 'Watches, eyeglasses', vi: 'Đồng hồ, kính mắt' }
            },
            {
              number: '6階',
              numberMeaning: { en: '6th floor', vi: 'Tầng 6' },
              numberRuby: [{ base: '階', reading: 'かい' }],
              jp: 'スポーツ用品・旅行用品',
              ruby: [
                { base: '用', reading: 'よう' },
                { base: '品', reading: 'ひん' },
                { base: '旅', reading: 'りょ' },
                { base: '行', reading: 'こう' },
                { base: '用', reading: 'よう' },
                { base: '品', reading: 'ひん' }
              ],
              meaning: {
                en: 'Sports goods, travel goods',
                vi: 'Dụng cụ thể thao, đồ du lịch'
              }
            },
            {
              number: '5階',
              numberMeaning: { en: '5th floor', vi: 'Tầng 5' },
              numberRuby: [{ base: '階', reading: 'かい' }],
              jp: '子ども服・おもちゃ・本・文房具',
              ruby: [
                { base: '子', reading: 'こ' },
                { base: '服', reading: 'ふく' },
                { base: '本', reading: 'ほん' },
                { base: '文', reading: 'ぶん' },
                { base: '房', reading: 'ぼう' },
                { base: '具', reading: 'ぐ' }
              ],
              meaning: {
                en: "Children's clothes, toys, books, stationery",
                vi: 'Quần áo trẻ em, đồ chơi, sách, văn phòng phẩm'
              }
            },
            {
              number: '4階',
              numberMeaning: { en: '4th floor', vi: 'Tầng 4' },
              numberRuby: [{ base: '階', reading: 'かい' }],
              jp: '家具・食器・電化製品',
              ruby: [
                { base: '家', reading: 'か' },
                { base: '具', reading: 'ぐ' },
                { base: '食', reading: 'しょ' },
                { base: '器', reading: 'き' },
                { base: '電', reading: 'でん' },
                { base: '化', reading: 'か' },
                { base: '製', reading: 'せい' },
                { base: '品', reading: 'ひん' }
              ],
              meaning: {
                en: 'Furniture, tableware, home appliances',
                vi: 'Nội thất, bát đũa, đồ điện gia dụng'
              }
            },
            {
              number: '3階',
              numberMeaning: { en: '3rd floor', vi: 'Tầng 3' },
              numberRuby: [{ base: '階', reading: 'かい' }],
              jp: '紳士服',
              ruby: [
                { base: '紳', reading: 'しん' },
                { base: '士', reading: 'し' },
                { base: '服', reading: 'ふく' }
              ],
              meaning: { en: "Men's clothing", vi: 'Quần áo nam' }
            },
            {
              number: '2階',
              numberMeaning: { en: '2nd floor', vi: 'Tầng 2' },
              numberRuby: [{ base: '階', reading: 'かい' }],
              jp: '婦人服',
              ruby: [
                { base: '婦', reading: 'ふ' },
                { base: '人', reading: 'じん' },
                { base: '服', reading: 'ふく' }
              ],
              meaning: { en: "Women's clothing", vi: 'Quần áo nữ' }
            },
            {
              number: '1階',
              numberMeaning: { en: '1st floor', vi: 'Tầng 1' },
              numberRuby: [{ base: '階', reading: 'かい' }],
              jp: '靴・かばん・アクセサリー・化粧品',
              ruby: [
                { base: '靴', reading: 'くつ' },
                { base: '化', reading: 'け' },
                { base: '粧', reading: 'しょう' },
                { base: '品', reading: 'ひん' }
              ],
              meaning: {
                en: 'Shoes, bags, accessories, cosmetics',
                vi: 'Giày, túi xách, phụ kiện, mỹ phẩm'
              }
            },
            {
              number: '地下1階',
              numberMeaning: { en: 'Basement 1', vi: 'Tầng hầm 1' },
              numberRuby: [
                { base: '地', reading: 'ち' },
                { base: '下', reading: 'か' },
                { base: '階', reading: 'かい' }
              ],
              jp: '食品',
              ruby: [
                { base: '食', reading: 'しょく' },
                { base: '品', reading: 'ひん' }
              ],
              meaning: { en: 'Food', vi: 'Thực phẩm' }
            },
            {
              number: '地下2階',
              numberMeaning: { en: 'Basement 2', vi: 'Tầng hầm 2' },
              numberRuby: [
                { base: '地', reading: 'ち' },
                { base: '下', reading: 'か' },
                { base: '階', reading: 'かい' }
              ],
              jp: '駐車場',
              ruby: [
                { base: '駐', reading: 'ちゅう' },
                { base: '車', reading: 'しゃ' },
                { base: '場', reading: 'じょう' }
              ],
              meaning: { en: 'Parking lot', vi: 'Bãi đỗ xe' }
            }
          ]
        },
        {
          kind: 'vocab',
          title: { en: 'Floors (〜階)', vi: 'Tầng (〜階)' },
          items: [
            {
              kana: 'いっかい',
              kanji: '1階',
              romaji: 'ikkai',
              ruby: [{ base: '階', reading: 'かい' }],
              meaning: { en: '1st floor', vi: 'tầng 1' }
            },
            {
              kana: 'にかい',
              kanji: '2階',
              romaji: 'nikai',
              ruby: [{ base: '階', reading: 'かい' }],
              meaning: { en: '2nd floor', vi: 'tầng 2' }
            },
            {
              kana: 'さんがい',
              kanji: '3階',
              romaji: 'sangai',
              ruby: [{ base: '階', reading: 'がい' }],
              meaning: { en: '3rd floor', vi: 'tầng 3' }
            },
            {
              kana: 'よんかい',
              kanji: '4階',
              romaji: 'yonkai',
              ruby: [{ base: '階', reading: 'かい' }],
              meaning: { en: '4th floor', vi: 'tầng 4' }
            },
            {
              kana: 'ごかい',
              kanji: '5階',
              romaji: 'gokai',
              ruby: [{ base: '階', reading: 'かい' }],
              meaning: { en: '5th floor', vi: 'tầng 5' }
            },
            {
              kana: 'ちか',
              kanji: '地下',
              romaji: 'chika',
              ruby: [
                { base: '地', reading: 'ち' },
                { base: '下', reading: 'か' }
              ],
              meaning: { en: 'basement', vi: 'tầng hầm' }
            }
          ]
        },
        {
          kind: 'vocab',
          title: { en: 'Around town', vi: 'Địa điểm quanh phố' },
          items: [
            {
              kana: 'ぎんこう',
              kanji: '銀行',
              romaji: 'ginkō',
              ruby: [
                { base: '銀', reading: 'ぎん' },
                { base: '行', reading: 'こう' }
              ],
              meaning: { en: 'bank', vi: 'ngân hàng' }
            },
            {
              kana: 'ゆうびんきょく',
              kanji: '郵便局',
              romaji: 'yūbinkyoku',
              ruby: [
                { base: '郵', reading: 'ゆう' },
                { base: '便', reading: 'びん' },
                { base: '局', reading: 'きょく' }
              ],
              meaning: { en: 'post office', vi: 'bưu điện' }
            },
            {
              kana: 'えき',
              kanji: '駅',
              romaji: 'eki',
              ruby: [{ base: '駅', reading: 'えき' }],
              meaning: { en: 'station', vi: 'nhà ga' }
            },
            {
              kana: 'としょかん',
              kanji: '図書館',
              romaji: 'toshokan',
              ruby: [
                { base: '図', reading: 'と' },
                { base: '書', reading: 'しょ' },
                { base: '館', reading: 'かん' }
              ],
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
          kind: 'vocab',
          title: { en: 'Big numbers (for prices)', vi: 'Số lớn (cho giá tiền)' },
          items: [
            {
              kana: 'ひゃく',
              kanji: '百',
              romaji: 'hyaku',
              ruby: [{ base: '百', reading: 'ひゃく' }],
              meaning: { en: '100', vi: '100' }
            },
            {
              kana: 'さんびゃく',
              kanji: '三百',
              romaji: 'sanbyaku',
              ruby: [
                { base: '三', reading: 'さん' },
                { base: '百', reading: 'びゃく' }
              ],
              meaning: { en: '300', vi: '300' }
            },
            {
              kana: 'ろっぴゃく',
              kanji: '六百',
              romaji: 'roppyaku',
              ruby: [
                { base: '六', reading: 'ろっ' },
                { base: '百', reading: 'ぴゃく' }
              ],
              meaning: { en: '600', vi: '600' }
            },
            {
              kana: 'はっぴゃく',
              kanji: '八百',
              romaji: 'happyaku',
              ruby: [
                { base: '八', reading: 'はっ' },
                { base: '百', reading: 'ぴゃく' }
              ],
              meaning: { en: '800', vi: '800' }
            },
            {
              kana: 'せん',
              kanji: '千',
              romaji: 'sen',
              ruby: [{ base: '千', reading: 'せん' }],
              meaning: { en: '1,000', vi: '1.000' }
            },
            {
              kana: 'はっせん',
              kanji: '八千',
              romaji: 'hassen',
              ruby: [
                { base: '八', reading: 'はっ' },
                { base: '千', reading: 'せん' }
              ],
              meaning: { en: '8,000', vi: '8.000' }
            },
            {
              kana: 'まん',
              kanji: '万',
              romaji: 'man',
              ruby: [{ base: '万', reading: 'まん' }],
              meaning: { en: '10,000', vi: '10.000' }
            }
          ]
        }
      ]
    },
    {
      id: 'lesson-4',
      number: 4,
      title: {
        en: 'What time is it?',
        vi: 'Mấy giờ rồi?'
      },
      focus: {
        en: 'Tell the time, name days of the week, and describe daily activities and schedules.',
        vi: 'Nói giờ, các thứ trong tuần và sinh hoạt hàng ngày.'
      },
      vocab: [
        {
          kana: 'おきます',
          kanji: '起きます',
          romaji: 'okimasu',
          meaning: { en: 'to wake up, get up', vi: 'dậy, thức dậy' },
          ruby: [{ base: '起', reading: 'お' }]
        },
        {
          kana: 'ねます',
          kanji: '寝ます',
          romaji: 'nemasu',
          meaning: { en: 'to sleep, go to bed', vi: 'ngủ, đi ngủ' },
          ruby: [{ base: '寝', reading: 'ね' }]
        },
        {
          kana: 'はたらきます',
          kanji: '働きます',
          romaji: 'hatarakimasu',
          meaning: { en: 'to work', vi: 'làm việc' },
          ruby: [{ base: '働', reading: 'はたら' }]
        },
        {
          kana: 'やすみます',
          kanji: '休みます',
          romaji: 'yasumimasu',
          meaning: { en: 'to rest, take a break', vi: 'nghỉ, nghỉ ngơi' },
          ruby: [{ base: '休', reading: 'やす' }]
        },
        {
          kana: 'べんきょうします',
          kanji: '勉強します',
          romaji: 'benkyō shimasu',
          meaning: { en: 'to study', vi: 'học' },
          ruby: [
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          kana: 'おわります',
          kanji: '終わります',
          romaji: 'owarimasu',
          meaning: { en: 'to finish, end', vi: 'hết, kết thúc, xong' },
          ruby: [{ base: '終', reading: 'お' }]
        },
        {
          kana: 'デパート',
          romaji: 'depāto',
          meaning: { en: 'department store', vi: 'bách hóa' }
        },
        {
          kana: 'ぎんこう',
          kanji: '銀行',
          romaji: 'ginkō',
          meaning: { en: 'bank', vi: 'ngân hàng' },
          ruby: [
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' }
          ]
        },
        {
          kana: 'ゆうびんきょく',
          kanji: '郵便局',
          romaji: 'yūbinkyoku',
          meaning: { en: 'post office', vi: 'bưu điện' },
          ruby: [
            { base: '郵', reading: 'ゆう' },
            { base: '便', reading: 'びん' },
            { base: '局', reading: 'きょく' }
          ]
        },
        {
          kana: 'としょかん',
          kanji: '図書館',
          romaji: 'toshokan',
          meaning: { en: 'library', vi: 'thư viện' },
          ruby: [
            { base: '図', reading: 'と' },
            { base: '書', reading: 'しょ' },
            { base: '館', reading: 'かん' }
          ]
        },
        {
          kana: 'びじゅつかん',
          kanji: '美術館',
          romaji: 'bijutsukan',
          meaning: { en: 'art museum', vi: 'bảo tàng mỹ thuật' },
          ruby: [
            { base: '美', reading: 'び' },
            { base: '術', reading: 'じゅつ' },
            { base: '館', reading: 'かん' }
          ]
        },
        {
          kana: 'いま',
          kanji: '今',
          romaji: 'ima',
          meaning: { en: 'now', vi: 'bây giờ' },
          ruby: [{ base: '今', reading: 'いま' }]
        },
        {
          kana: '〜じ',
          kanji: '〜時',
          romaji: '~ji',
          speech: 'じ',
          meaning: { en: "o'clock (~ hour)", vi: '~ giờ' },
          ruby: [{ base: '時', reading: 'じ' }]
        },
        {
          kana: '〜ふん',
          kanji: '〜分',
          romaji: '~fun (~pun)',
          speech: 'ふん',
          meaning: {
            en: '~ minute(s) (〜ぷん after 5, 7, 9...)',
            vi: '~ phút (〜ぷん sau 5, 7, 9...)'
          },
          ruby: [{ base: '分', reading: 'ふん' }]
        },
        {
          kana: 'はん',
          kanji: '半',
          romaji: 'han',
          meaning: { en: 'half (past the hour)', vi: 'rưỡi, nửa' },
          ruby: [{ base: '半', reading: 'はん' }]
        },
        {
          kana: 'なんじ',
          kanji: '何時',
          romaji: 'nanji',
          meaning: { en: 'what time', vi: 'mấy giờ' },
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '時', reading: 'じ' }
          ]
        },
        {
          kana: 'なんぷん',
          kanji: '何分',
          romaji: 'nanpun',
          meaning: { en: 'how many minutes', vi: 'mấy phút' },
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '分', reading: 'ぷん' }
          ]
        },
        {
          kana: 'ごぜん',
          kanji: '午前',
          romaji: 'gozen',
          meaning: { en: 'a.m., before noon', vi: 'sáng, trước mười hai giờ trưa' },
          ruby: [
            { base: '午', reading: 'ご' },
            { base: '前', reading: 'ぜん' }
          ]
        },
        {
          kana: 'ごご',
          kanji: '午後',
          romaji: 'gogo',
          meaning: { en: 'p.m., after noon', vi: 'chiều, sau mười hai giờ trưa' },
          ruby: [
            { base: '午', reading: 'ご' },
            { base: '後', reading: 'ご' }
          ]
        },
        {
          kana: 'あさ',
          kanji: '朝',
          romaji: 'asa',
          meaning: { en: 'morning', vi: 'buổi sáng, sáng' },
          ruby: [{ base: '朝', reading: 'あさ' }]
        },
        {
          kana: 'ひる',
          kanji: '昼',
          romaji: 'hiru',
          meaning: { en: 'noon, midday', vi: 'buổi trưa, trưa' },
          ruby: [{ base: '昼', reading: 'ひる' }]
        },
        {
          kana: 'ばん',
          kanji: '晩',
          romaji: 'ban',
          meaning: { en: 'evening, night (よる)', vi: 'buổi tối, tối (よる)' },
          ruby: [{ base: '晩', reading: 'ばん' }]
        },
        {
          kana: 'おととい',
          romaji: 'ototoi',
          meaning: { en: 'the day before yesterday', vi: 'hôm kia' }
        },
        {
          kana: 'きのう',
          romaji: 'kinō',
          meaning: { en: 'yesterday', vi: 'hôm qua' }
        },
        {
          kana: 'きょう',
          kanji: '今日',
          romaji: 'kyō',
          meaning: { en: 'today', vi: 'hôm nay' },
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' }
          ]
        },
        {
          kana: 'あした',
          romaji: 'ashita',
          meaning: { en: 'tomorrow', vi: 'ngày mai' }
        },
        {
          kana: 'あさって',
          romaji: 'asatte',
          meaning: { en: 'the day after tomorrow', vi: 'ngày kia' }
        },
        {
          kana: 'けさ',
          romaji: 'kesa',
          meaning: { en: 'this morning', vi: 'sáng nay' }
        },
        {
          kana: 'こんばん',
          kanji: '今晩',
          romaji: 'konban',
          meaning: { en: 'tonight, this evening', vi: 'tối nay' },
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '晩', reading: 'ばん' }
          ]
        },
        {
          kana: 'やすみ',
          kanji: '休み',
          romaji: 'yasumi',
          meaning: { en: 'rest, day off, vacation', vi: 'nghỉ, nghỉ phép, ngày nghỉ' },
          ruby: [{ base: '休', reading: 'やす' }]
        },
        {
          kana: 'ひるやすみ',
          kanji: '昼休み',
          romaji: 'hiruyasumi',
          meaning: { en: 'lunch break', vi: 'nghỉ trưa' },
          ruby: [
            { base: '昼', reading: 'ひる' },
            { base: '休', reading: 'やす' }
          ]
        },
        {
          kana: 'しけん',
          kanji: '試験',
          romaji: 'shiken',
          meaning: { en: 'exam, test', vi: 'thi, kỳ thi, kiểm tra' },
          ruby: [
            { base: '試', reading: 'し' },
            { base: '験', reading: 'けん' }
          ]
        },
        {
          kana: 'かいぎ',
          kanji: '会議',
          romaji: 'kaigi',
          meaning: {
            en: 'meeting (会議をします: to hold a meeting)',
            vi: 'cuộc họp, hội nghị (会議をします: tổ chức cuộc họp)'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' }
          ]
        },
        {
          kana: 'えいが',
          kanji: '映画',
          romaji: 'eiga',
          meaning: { en: 'movie, film', vi: 'phim, điện ảnh' },
          ruby: [
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' }
          ]
        },
        {
          kana: 'まいあさ',
          kanji: '毎朝',
          romaji: 'maiasa',
          meaning: { en: 'every morning', vi: 'hàng sáng, mỗi sáng' },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' }
          ]
        },
        {
          kana: 'まいばん',
          kanji: '毎晩',
          romaji: 'maiban',
          meaning: { en: 'every evening', vi: 'hàng tối, mỗi tối' },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '晩', reading: 'ばん' }
          ]
        },
        {
          kana: 'まいにち',
          kanji: '毎日',
          romaji: 'mainichi',
          meaning: { en: 'every day', vi: 'hàng ngày, mỗi ngày' },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' }
          ]
        },
        {
          kana: 'げつようび',
          kanji: '月曜日',
          romaji: 'getsuyōbi',
          meaning: { en: 'Monday', vi: 'thứ hai' },
          ruby: [
            { base: '月', reading: 'げつ' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          kana: 'かようび',
          kanji: '火曜日',
          romaji: 'kayōbi',
          meaning: { en: 'Tuesday', vi: 'thứ ba' },
          ruby: [
            { base: '火', reading: 'か' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          kana: 'すいようび',
          kanji: '水曜日',
          romaji: 'suiyōbi',
          meaning: { en: 'Wednesday', vi: 'thứ tư' },
          ruby: [
            { base: '水', reading: 'すい' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          kana: 'もくようび',
          kanji: '木曜日',
          romaji: 'mokuyōbi',
          meaning: { en: 'Thursday', vi: 'thứ năm' },
          ruby: [
            { base: '木', reading: 'もく' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          kana: 'きんようび',
          kanji: '金曜日',
          romaji: "kin'yōbi",
          meaning: { en: 'Friday', vi: 'thứ sáu' },
          ruby: [
            { base: '金', reading: 'きん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          kana: 'どようび',
          kanji: '土曜日',
          romaji: 'doyōbi',
          meaning: { en: 'Saturday', vi: 'thứ bảy' },
          ruby: [
            { base: '土', reading: 'ど' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          kana: 'にちようび',
          kanji: '日曜日',
          romaji: 'nichiyōbi',
          meaning: { en: 'Sunday', vi: 'chủ nhật' },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          kana: 'なんようび',
          kanji: '何曜日',
          romaji: "nan'yōbi",
          meaning: { en: 'what day of the week', vi: 'thứ mấy' },
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          kana: '〜から',
          romaji: '~kara',
          speech: 'から',
          meaning: { en: 'from ~', vi: '~ từ' }
        },
        {
          kana: '〜まで',
          romaji: '~made',
          speech: 'まで',
          meaning: { en: 'until ~, to ~', vi: '~ đến' }
        },
        {
          kana: '〜と〜',
          romaji: '~ to ~',
          meaning: { en: '~ and ~ (links nouns)', vi: '~ và ~ (nối danh từ)' }
        }
      ],
      phrases: [
        {
          kana: 'たいへんですね。',
          kanji: '大変ですね。',
          romaji: 'taihen desu ne.',
          meaning: {
            en: "That's tough, isn't it? (sympathy)",
            vi: 'Vất vả quá nhỉ. (thông cảm)'
          },
          ruby: [
            { base: '大', reading: 'たい' },
            { base: '変', reading: 'へん' }
          ]
        }
      ],
      conversation: [
        {
          id: 'conv-lesson4-phone',
          title: { en: 'Asking for a phone number', vi: 'Hỏi số điện thoại' },
          speakers: [
            { id: 'alex', name: 'アレックス' },
            { id: 'yamada', name: 'やまだ' }
          ],
          lines: [
            {
              speakerId: 'alex',
              jp: 'すみません。「あすか」の 電話番号は 何番ですか。',
              romaji: 'Sumimasen. "Asuka" no denwa bangō wa nanban desu ka.',
              meaning: {
                en: 'Excuse me. What is the phone number for "Asuka"?',
                vi: 'Xin lỗi. Số điện thoại của "Asuka" là số mấy?'
              },
              ruby: [
                { base: '電', reading: 'でん' },
                { base: '話', reading: 'わ' },
                { base: '番', reading: 'ばん' },
                { base: '号', reading: 'ごう' },
                { base: '何', reading: 'なん' },
                { base: '番', reading: 'ばん' }
              ]
            },
            {
              speakerId: 'yamada',
              jp: '「あすか」ですか。5275 の 2725 です。',
              romaji: '"Asuka" desu ka. Gofutahyaku nijūnana no nihyakunijūgo desu.',
              meaning: {
                en: '"Asuka"? It is 5275-2725.',
                vi: '"Asuka" à. Số 5275-2725.'
              }
            },
            {
              speakerId: 'alex',
              jp: 'どうも ありがとう ございます。',
              romaji: 'Dōmo arigatō gozaimasu.',
              meaning: { en: 'Thank you very much.', vi: 'Cảm ơn nhiều.' }
            }
          ]
        },
        {
          id: 'conv-lesson4-shop-hours',
          title: { en: 'Calling the shop', vi: 'Gọi điện cho cửa hàng' },
          speakers: [
            { id: 'clerk', name: '店員' },
            { id: 'alex', name: 'アレックス' }
          ],
          lines: [
            {
              speakerId: 'clerk',
              jp: 'はい、「あすか」です。',
              romaji: 'Hai, "Asuka" desu.',
              meaning: { en: 'Hello, this is "Asuka".', vi: 'Dạ, đây là "Asuka".' }
            },
            {
              speakerId: 'alex',
              jp: 'すみません。そちらは 何時までですか。',
              romaji: 'Sumimasen. Sochira wa nanji made desu ka.',
              meaning: {
                en: 'Excuse me. Until what time are you open?',
                vi: 'Xin lỗi. Bên anh/chị đóng cửa lúc mấy giờ?'
              },
              ruby: [
                { base: '何', reading: 'なん' },
                { base: '時', reading: 'じ' }
              ]
            },
            {
              speakerId: 'clerk',
              jp: '10時までです。',
              romaji: 'Jū-ji made desu.',
              meaning: { en: 'Until 10.', vi: 'Đến 10 giờ.' },
              ruby: [{ base: '時', reading: 'じ' }]
            },
            {
              speakerId: 'alex',
              jp: '休みは 何曜日ですか。',
              romaji: 'Yasumi wa nan-yōbi desu ka.',
              meaning: { en: 'What day is your day off?', vi: 'Ngày nghỉ là thứ mấy?' },
              ruby: [
                { base: '休', reading: 'やす' },
                { base: '何', reading: 'なん' },
                { base: '曜', reading: 'よう' },
                { base: '日', reading: 'び' }
              ]
            },
            {
              speakerId: 'clerk',
              jp: '日曜日です。',
              romaji: 'Nichiyōbi desu.',
              meaning: { en: 'Sunday.', vi: 'Chủ nhật.' },
              ruby: [
                { base: '日', reading: 'にち' },
                { base: '曜', reading: 'よう' },
                { base: '日', reading: 'び' }
              ]
            },
            {
              speakerId: 'alex',
              jp: 'そうですか。どうも。',
              romaji: 'Sō desu ka. Dōmo.',
              meaning: { en: 'I see. Thanks.', vi: 'Thế à. Cảm ơn.' }
            }
          ]
        }
      ],
      grammar: [
        {
          pattern: 'N 時 N 分 です',
          patternRuby: [
            { base: '時', reading: 'じ' },
            { base: '分', reading: 'ふん' }
          ],
          highlights: ['時', '分', 'です', '何'],
          title: { en: 'Telling the time', vi: 'Nói giờ' },
          explanation: {
            en: 'Add 時 (hours) and 分 (minutes) after numbers. 分 is ~fun after 2, 5, 7, 9 and ~pun after 1, 3, 4, 6, 8, 10 (e.g. 10分 = juppun). Ask the time with 今 何時ですか; ask minutes with 何分.',
            vi: 'Thêm 時 (giờ) và 分 (phút) sau số. 分 đọc ~fun sau 2, 5, 7, 9 và ~pun sau 1, 3, 4, 6, 8, 10 (vd. 10分 = juppun). Hỏi giờ với 今 何時ですか; hỏi phút với 何分.'
          },
          explanationRuby: [
            { base: '時', reading: 'じ' },
            { base: '分', reading: 'ふん' },
            { base: '分', reading: 'ふん' },
            { base: '分', reading: 'ぷん' },
            { base: '今', reading: 'いま' },
            { base: '何', reading: 'なん' },
            { base: '時', reading: 'じ' },
            { base: '何', reading: 'なん' },
            { base: '分', reading: 'ふん' }
          ],
          examples: [
            {
              jp: '今 何時ですか。',
              romaji: 'Ima nan-ji desu ka.',
              meaning: { en: 'What time is it now?', vi: 'Bây giờ là mấy giờ?' },
              dialogueGroup: 'time-now',
              ruby: [
                { base: '今', reading: 'いま' },
                { base: '何', reading: 'なん' },
                { base: '時', reading: 'じ' }
              ]
            },
            {
              jp: '7時10分です。',
              romaji: 'Shichi-ji juppun desu.',
              meaning: { en: "It's 7:10.", vi: '7 giờ 10 phút.' },
              dialogueGroup: 'time-now',
              ruby: [
                { base: '時', reading: 'じ' },
                { base: '分', reading: 'ぷん' }
              ]
            }
          ]
        },
        {
          pattern: 'V ます',
          highlights: ['ます', 'ません', 'ました', 'ませんでした'],
          title: { en: 'Verb ます forms', vi: 'Động từ thể ます' },
          explanation: {
            en: 'The ます form is the polite predicate: ます (present/future), ません (negative), ました (past), ませんでした (past negative). It states habits, general truths, or future actions.',
            vi: 'Thể ます là vị ngữ lịch sự: ます (hiện tại/tương lai), ません (phủ định), ました (quá khứ), ませんでした (quá khứ phủ định). Dùng cho thói quen, sự thật chung hoặc hành động tương lai.'
          },
          examples: [
            {
              jp: '私は 毎日 勉強します。',
              romaji: 'Watashi wa mainichi benkyō shimasu.',
              meaning: { en: 'I study every day.', vi: 'Tôi học hàng ngày.' },
              ruby: [
                { base: '私', reading: 'わたし' },
                { base: '毎', reading: 'まい' },
                { base: '日', reading: 'にち' },
                { base: '勉', reading: 'べん' },
                { base: '強', reading: 'きょう' }
              ]
            },
            {
              jp: '毎朝 6時に 起きます。',
              romaji: 'Maiasa rokuji ni okimasu.',
              meaning: { en: 'I get up at 6 every morning.', vi: 'Mỗi sáng tôi dậy lúc 6 giờ.' },
              ruby: [
                { base: '毎', reading: 'まい' },
                { base: '朝', reading: 'あさ' },
                { base: '時', reading: 'じ' },
                { base: '起', reading: 'お' }
              ]
            },
            {
              jp: 'あした 6時に 起きます。',
              romaji: 'Ashita rokuji ni okimasu.',
              meaning: {
                en: 'Tomorrow I will get up at 6.',
                vi: 'Ngày mai tôi (sẽ) dậy lúc 6 giờ.'
              },
              ruby: [
                { base: '時', reading: 'じ' },
                { base: '起', reading: 'お' }
              ]
            },
            {
              jp: 'けさ 6時に 起きました。',
              romaji: 'Kesa rokuji ni okimashita.',
              meaning: {
                en: 'This morning I got up at 6.',
                vi: 'Sáng nay tôi (đã) dậy lúc 6 giờ.'
              },
              ruby: [
                { base: '時', reading: 'じ' },
                { base: '起', reading: 'お' }
              ]
            }
          ]
        },
        {
          pattern: 'V ますか',
          highlights: ['ます', 'か', '何', 'に'],
          title: { en: 'Verb questions', vi: 'Câu hỏi với động từ' },
          explanation: {
            en: 'Add か to make a yes/no question; word order stays the same. Put the question word where the answer goes. Repeat the verb in the answer - do not use そうです or ちがいます alone for verb questions.',
            vi: 'Thêm か để hỏi có/không; trật tự câu giữ nguyên. Đặt từ để hỏi vào vị trí phần cần hỏi. Trả lời lặp lại động từ - không dùng một mình そうです hay ちがいます cho câu hỏi động từ.'
          },
          examples: [
            {
              jp: 'きのう 勉強しましたか。',
              romaji: 'Kinō benkyō shimashita ka.',
              meaning: { en: 'Did you study yesterday?', vi: 'Hôm qua anh/chị có học không?' },
              ruby: [
                { base: '勉', reading: 'べん' },
                { base: '強', reading: 'きょう' }
              ]
            },
            {
              jp: '毎朝 何時に 起きますか。',
              romaji: 'Maiasa nan-ji ni okimasu ka.',
              meaning: {
                en: 'What time do you get up every morning?',
                vi: 'Mỗi sáng anh/chị dậy lúc mấy giờ?'
              },
              ruby: [
                { base: '毎', reading: 'まい' },
                { base: '朝', reading: 'あさ' },
                { base: '何', reading: 'なん' },
                { base: '時', reading: 'じ' },
                { base: '起', reading: 'お' }
              ]
            }
          ],
          answers: {
            highlights: ['ました', 'ませんでした', 'に', 'ます'],
            explanation: {
              en: 'Answer はい/いいえ plus the verb form, or give the time with ～に ～ます.',
              vi: 'Trả lời はい/いいえ kèm động từ, hoặc nêu giờ với ～に ～ます.'
            },
            examples: [
              {
                jp: 'はい、勉強しました。',
                romaji: 'Hai, benkyō shimashita.',
                meaning: { en: 'Yes, I studied.', vi: 'Vâng, hôm qua tôi có học.' },
                ruby: [
                  { base: '勉', reading: 'べん' },
                  { base: '強', reading: 'きょう' }
                ]
              },
              {
                jp: 'いいえ、勉強しませんでした。',
                romaji: 'Iie, benkyō shimasen deshita.',
                meaning: { en: "No, I didn't study.", vi: 'Không, hôm qua tôi không học.' },
                ruby: [
                  { base: '勉', reading: 'べん' },
                  { base: '強', reading: 'きょう' }
                ]
              },
              {
                jp: '6時に 起きます。',
                romaji: 'Rokuji ni okimasu.',
                meaning: { en: 'I get up at 6.', vi: 'Tôi dậy lúc 6 giờ.' },
                ruby: [
                  { base: '時', reading: 'じ' },
                  { base: '起', reading: 'お' }
                ]
              }
            ]
          }
        },
        {
          pattern: 'N (time) に V',
          highlights: ['に'],
          title: { en: 'Time + に + verb', vi: 'Thời gian + に + động từ' },
          explanation: {
            en: 'Put に after a time noun for when an action happens (6時半に 起きます). Do NOT use に after きょう, あした, きのう, けさ, こんばん, いま, 毎朝, etc. に is optional after days of the week and あさ/ひる/ばん.',
            vi: 'Thêm に sau danh từ chỉ thời điểm (6時半に 起きます). KHÔNG dùng に sau きょう, あした, きのう, けさ, こんばん, いま, 毎朝, v.v. に có thể lược sau thứ trong tuần và あさ/ひる/ばん.'
          },
          explanationRuby: [
            { base: '時', reading: 'じ' },
            { base: '半', reading: 'はん' },
            { base: '起', reading: 'お' },
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' }
          ],
          examples: [
            {
              jp: '6時半に 起きます。',
              romaji: 'Roku-ji han ni okimasu.',
              meaning: { en: 'I get up at 6:30.', vi: 'Tôi dậy lúc 6 giờ rưỡi.' },
              ruby: [
                { base: '時', reading: 'じ' },
                { base: '半', reading: 'はん' },
                { base: '起', reading: 'お' }
              ]
            },
            {
              jp: '日曜日に 休みます。',
              romaji: 'Nichiyōbi ni yasumimasu.',
              meaning: { en: 'I rest on Sundays.', vi: 'Chủ nhật tôi nghỉ.' },
              ruby: [
                { base: '日', reading: 'にち' },
                { base: '曜', reading: 'よう' },
                { base: '日', reading: 'び' },
                { base: '休', reading: 'やす' }
              ]
            }
          ]
        },
        {
          pattern: 'N1 から N2 まで',
          highlights: ['から', 'まで'],
          title: { en: 'From ~ to ~ (から / まで)', vi: 'Từ ~ đến ~ (から / まで)' },
          explanation: {
            en: 'から marks the start and まで the end of a time or place range. They can be used together or alone. With nouns and です, state opening hours or a time span.',
            vi: 'から đánh dấu điểm bắt đầu, まで điểm kết thúc (thời gian hoặc nơi chốn). Có thể dùng riêng hoặc kết hợp. Với danh từ + です, nêu giờ mở cửa hoặc khoảng thời gian.'
          },
          examples: [
            {
              jp: '9時から 5時まで 勉強します。',
              romaji: 'Ku-ji kara go-ji made benkyō shimasu.',
              meaning: { en: 'I study from 9 to 5.', vi: 'Tôi học từ 9 giờ đến 5 giờ.' },
              ruby: [
                { base: '時', reading: 'じ' },
                { base: '時', reading: 'じ' },
                { base: '勉', reading: 'べん' },
                { base: '強', reading: 'きょう' }
              ]
            },
            {
              jp: '9時から 働きます。',
              romaji: 'Ku-ji kara hatarakimasu.',
              meaning: { en: 'I work starting at 9.', vi: 'Tôi làm việc từ 9 giờ.' },
              ruby: [
                { base: '時', reading: 'じ' },
                { base: '働', reading: 'はたら' }
              ]
            },
            {
              jp: '銀行は 9時から 3時までです。',
              romaji: 'Ginkō wa ku-ji kara san-ji made desu.',
              meaning: {
                en: 'The bank is open from 9 to 3.',
                vi: 'Ngân hàng mở cửa từ 9 giờ đến 3 giờ.'
              },
              ruby: [
                { base: '銀', reading: 'ぎん' },
                { base: '行', reading: 'こう' },
                { base: '時', reading: 'じ' },
                { base: '時', reading: 'じ' }
              ]
            },
            {
              jp: '昼休みは 12時からです。',
              romaji: 'Hiruyasumi wa jūni-ji kara desu.',
              meaning: {
                en: 'The lunch break starts at 12.',
                vi: 'Giờ nghỉ trưa bắt đầu từ 12 giờ.'
              },
              ruby: [
                { base: '昼', reading: 'ひる' },
                { base: '休', reading: 'やす' },
                { base: '時', reading: 'じ' }
              ]
            }
          ]
        },
        {
          pattern: 'N1 と N2',
          highlights: ['と'],
          title: { en: 'と (and, linking nouns)', vi: 'と (và, nối danh từ)' },
          explanation: {
            en: 'と connects two nouns of equal status, like "and" in English.',
            vi: 'と nối hai danh từ ngang hàng, tương đương "và" trong tiếng Việt.'
          },
          examples: [
            {
              jp: '銀行の 休みは 土曜日と 日曜日です。',
              romaji: 'Ginkō no yasumi wa doyōbi to nichiyōbi desu.',
              meaning: {
                en: 'The bank is closed on Saturday and Sunday.',
                vi: 'Ngân hàng đóng cửa vào thứ bảy và chủ nhật.'
              },
              ruby: [
                { base: '銀', reading: 'ぎん' },
                { base: '行', reading: 'こう' },
                { base: '休', reading: 'やす' },
                { base: '土', reading: 'ど' },
                { base: '曜', reading: 'よう' },
                { base: '日', reading: 'び' },
                { base: '日', reading: 'にち' },
                { base: '曜', reading: 'よう' },
                { base: '日', reading: 'び' }
              ]
            }
          ]
        },
        {
          pattern: '～ ね',
          highlights: ['ね'],
          title: { en: "Sentence-ending ね (isn't it?)", vi: 'ね (nhỉ / đúng không ạ)' },
          explanation: {
            en: 'ね at the end seeks agreement, sympathy, or confirms what was just said.',
            vi: 'Thêm ね cuối câu để xin đồng ý, thể hiện đồng cảm, hoặc xác nhận lại — giống "nhỉ", "đúng không" trong tiếng Việt.'
          },
          examples: [
            {
              jp: '毎日 10時まで 勉強します。',
              romaji: 'Mainichi jū-ji made benkyō shimasu.',
              meaning: { en: 'I study until 10 every day.', vi: 'Hàng ngày tôi học đến 10 giờ.' },
              dialogueGroup: 'sympathy',
              ruby: [
                { base: '毎', reading: 'まい' },
                { base: '日', reading: 'にち' },
                { base: '時', reading: 'じ' },
                { base: '勉', reading: 'べん' },
                { base: '強', reading: 'きょう' }
              ]
            },
            {
              jp: '大変ですね。',
              romaji: 'Taihen desu ne.',
              meaning: { en: "That's tough, isn't it?", vi: 'Vất vả quá nhỉ.' },
              dialogueGroup: 'sympathy',
              ruby: [
                { base: '大', reading: 'たい' },
                { base: '変', reading: 'へん' }
              ]
            },
            {
              jp: '山田さんの 電話番号は 871 の 6813 です。',
              romaji: 'Yamada-san no denwa bangō wa hachihyaku nanajū no roppesen jūsan desu.',
              meaning: {
                en: "Mr. Yamada's phone number is 871-6813.",
                vi: 'Số điện thoại của anh Yamada là 871-6813.'
              },
              dialogueGroup: 'confirm',
              ruby: [
                { base: '山', reading: 'やま' },
                { base: '田', reading: 'だ' },
                { base: '電', reading: 'でん' },
                { base: '話', reading: 'わ' },
                { base: '番', reading: 'ばん' },
                { base: '号', reading: 'ごう' }
              ]
            },
            {
              jp: '871 の 6813 ですね。',
              romaji: 'Hachihyaku nanajū no roppesen jūsan desu ne.',
              meaning: { en: '871-6813, right?', vi: '871-6813, đúng không ạ.' },
              dialogueGroup: 'confirm'
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'Shop hours', vi: 'Giờ mở cửa' },
          lines: [
            {
              jp: '「あすか」は 9時から 10時までです。',
              romaji: '"Asuka" wa ku-ji kara jū-ji made desu.',
              meaning: {
                en: '"Asuka" is open from 9 to 10.',
                vi: 'Cửa hàng "Asuka" mở cửa từ 9 giờ đến 10 giờ.'
              },
              ruby: [
                { base: '時', reading: 'じ' },
                { base: '時', reading: 'じ' }
              ]
            },
            {
              jp: '休みは 日曜日です。',
              romaji: 'Yasumi wa nichiyōbi desu.',
              meaning: { en: 'The day off is Sunday.', vi: 'Ngày nghỉ là chủ nhật.' },
              ruby: [
                { base: '休', reading: 'やす' },
                { base: '日', reading: 'にち' },
                { base: '曜', reading: 'よう' },
                { base: '日', reading: 'び' }
              ]
            },
            {
              jp: '土曜日は 11時までです。',
              romaji: 'Doyōbi wa jūichi-ji made desu.',
              meaning: {
                en: 'On Saturdays it is open until 11.',
                vi: 'Thứ bảy mở cửa đến 11 giờ.'
              },
              ruby: [
                { base: '土', reading: 'ど' },
                { base: '曜', reading: 'よう' },
                { base: '日', reading: 'び' },
                { base: '時', reading: 'じ' }
              ]
            },
            {
              jp: '電話番号は 5275 の 2725 です。',
              romaji: 'Denwa bangō wa go sen nihyaku nanajū go no nihyaku nijūgo desu.',
              meaning: {
                en: 'The phone number is 5275-2725.',
                vi: 'Số điện thoại là 5275-2725.'
              },
              ruby: [
                { base: '電', reading: 'でん' },
                { base: '話', reading: 'わ' },
                { base: '番', reading: 'ばん' },
                { base: '号', reading: 'ごう' }
              ]
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'Until what time is the shop open on weekdays?',
                vi: 'Ngày thường cửa hàng mở đến mấy giờ?'
              },
              choices: [
                { id: 'a', label: { en: "10 o'clock", vi: '10 giờ' } },
                { id: 'b', label: { en: "9 o'clock", vi: '9 giờ' } },
                { id: 'c', label: { en: "11 o'clock", vi: '11 giờ' } },
                { id: 'd', label: { en: "8 o'clock", vi: '8 giờ' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: { en: 'What day is the shop closed?', vi: 'Cửa hàng nghỉ ngày nào?' },
              choices: [
                { id: 'a', label: { en: 'Sunday', vi: 'Chủ nhật' } },
                { id: 'b', label: { en: 'Saturday', vi: 'Thứ bảy' } },
                { id: 'c', label: { en: 'Monday', vi: 'Thứ hai' } },
                { id: 'd', label: { en: 'Wednesday', vi: 'Thứ tư' } }
              ],
              correctId: 'a'
            }
          ]
        },
        {
          id: 'reading-2',
          title: { en: 'Daily schedule', vi: 'Sinh hoạt hàng ngày' },
          lines: [
            {
              jp: '私は 毎朝 6時半に 起きます。',
              romaji: 'Watashi wa maiasa roku-ji han ni okimasu.',
              meaning: {
                en: 'I get up at 6:30 every morning.',
                vi: 'Mỗi sáng tôi dậy lúc 6 giờ rưỡi.'
              },
              ruby: [
                { base: '私', reading: 'わたし' },
                { base: '毎', reading: 'まい' },
                { base: '朝', reading: 'あさ' },
                { base: '時', reading: 'じ' },
                { base: '半', reading: 'はん' },
                { base: '起', reading: 'お' }
              ]
            },
            {
              jp: '7時から 8時まで 勉強します。',
              romaji: 'Shichi-ji kara hachi-ji made benkyō shimasu.',
              meaning: { en: 'I study from 7 to 8.', vi: 'Tôi học từ 7 giờ đến 8 giờ.' },
              ruby: [
                { base: '時', reading: 'じ' },
                { base: '時', reading: 'じ' },
                { base: '勉', reading: 'べん' },
                { base: '強', reading: 'きょう' }
              ]
            },
            {
              jp: '9時から 5時まで 働きます。',
              romaji: 'Ku-ji kara go-ji made hatarakimasu.',
              meaning: { en: 'I work from 9 to 5.', vi: 'Tôi làm việc từ 9 giờ đến 5 giờ.' },
              ruby: [
                { base: '時', reading: 'じ' },
                { base: '時', reading: 'じ' },
                { base: '働', reading: 'はたら' }
              ]
            },
            {
              jp: '昼休みは 12時から 1時までです。',
              romaji: 'Hiruyasumi wa jūni-ji kara ichi-ji made desu.',
              meaning: {
                en: 'Lunch break is from 12 to 1.',
                vi: 'Nghỉ trưa từ 12 giờ đến 1 giờ.'
              },
              ruby: [
                { base: '昼', reading: 'ひる' },
                { base: '休', reading: 'やす' },
                { base: '時', reading: 'じ' },
                { base: '時', reading: 'じ' }
              ]
            },
            {
              jp: '毎晩 10時に 寝ます。',
              romaji: 'Maiban jū-ji ni nemasu.',
              meaning: {
                en: 'I go to bed at 10 every evening.',
                vi: 'Mỗi tối tôi đi ngủ lúc 10 giờ.'
              },
              ruby: [
                { base: '毎', reading: 'まい' },
                { base: '晩', reading: 'ばん' },
                { base: '時', reading: 'じ' },
                { base: '寝', reading: 'ね' }
              ]
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'What time does the speaker get up?',
                vi: 'Người nói dậy lúc mấy giờ?'
              },
              choices: [
                { id: 'a', label: { en: '6:30', vi: '6 giờ rưỡi' } },
                { id: 'b', label: { en: '7:00', vi: '7 giờ' } },
                { id: 'c', label: { en: '6:00', vi: '6 giờ' } },
                { id: 'd', label: { en: '8:00', vi: '8 giờ' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: {
                en: 'When does the speaker go to bed?',
                vi: 'Người nói đi ngủ lúc mấy giờ?'
              },
              choices: [
                { id: 'a', label: { en: '10 p.m.', vi: '10 giờ tối' } },
                { id: 'b', label: { en: '9 p.m.', vi: '9 giờ tối' } },
                { id: 'c', label: { en: '11 p.m.', vi: '11 giờ tối' } },
                { id: 'd', label: { en: '8 p.m.', vi: '8 giờ tối' } }
              ],
              correctId: 'a'
            }
          ]
        },
        {
          id: 'reading-3',
          title: { en: 'At the library', vi: 'Ở thư viện' },
          lines: [
            {
              jp: '今日 私は 図書館で 勉強します。',
              romaji: 'Kyō watashi wa toshokan de benkyō shimasu.',
              meaning: {
                en: 'Today I study at the library.',
                vi: 'Hôm nay tôi học ở thư viện.'
              },
              ruby: [
                { base: '今', reading: 'きょ' },
                { base: '日', reading: 'う' },
                { base: '私', reading: 'わたし' },
                { base: '図', reading: 'と' },
                { base: '書', reading: 'しょ' },
                { base: '館', reading: 'かん' },
                { base: '勉', reading: 'べん' },
                { base: '強', reading: 'きょう' }
              ]
            },
            {
              jp: '図書館は 9時から 6時までです。',
              romaji: 'Toshokan wa ku-ji kara roku-ji made desu.',
              meaning: {
                en: 'The library is open from 9 to 6.',
                vi: 'Thư viện mở cửa từ 9 giờ đến 6 giờ.'
              },
              ruby: [
                { base: '図', reading: 'と' },
                { base: '書', reading: 'しょ' },
                { base: '館', reading: 'かん' },
                { base: '時', reading: 'じ' },
                { base: '時', reading: 'じ' }
              ]
            },
            {
              jp: '今 何時ですか。3時10分です。',
              romaji: 'Ima nan-ji desu ka. San-ji juppun desu.',
              meaning: {
                en: 'What time is it now? It is 3:10.',
                vi: 'Bây giờ mấy giờ? 3 giờ 10 phút.'
              },
              ruby: [
                { base: '今', reading: 'いま' },
                { base: '何', reading: 'なん' },
                { base: '時', reading: 'じ' },
                { base: '時', reading: 'じ' },
                { base: '分', reading: 'ぷん' }
              ]
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'Where does the speaker study today?',
                vi: 'Hôm nay người nói học ở đâu?'
              },
              choices: [
                { id: 'a', label: { en: 'The library', vi: 'Thư viện' } },
                { id: 'b', label: { en: 'The bank', vi: 'Ngân hàng' } },
                { id: 'c', label: { en: 'The post office', vi: 'Bưu điện' } },
                { id: 'd', label: { en: 'The art museum', vi: 'Bảo tàng mỹ thuật' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: { en: 'What time is it now?', vi: 'Bây giờ mấy giờ?' },
              choices: [
                { id: 'a', label: { en: '3:10', vi: '3 giờ 10 phút' } },
                { id: 'b', label: { en: '9:00', vi: '9 giờ' } },
                { id: 'c', label: { en: '6:00', vi: '6 giờ' } },
                { id: 'd', label: { en: '3:00', vi: '3 giờ' } }
              ],
              correctId: 'a'
            }
          ]
        }
      ],
      reference: [
        {
          kind: 'vocab',
          title: { en: 'Telephone & mail', vi: 'Điện thoại & thư tín' },
          items: [
            {
              kana: 'でんわ',
              kanji: '電話',
              romaji: 'denwa',
              meaning: { en: 'telephone', vi: 'điện thoại' },
              ruby: [
                { base: '電', reading: 'でん' },
                { base: '話', reading: 'わ' }
              ]
            },
            {
              kana: 'てがみ',
              kanji: '手紙',
              romaji: 'tegami',
              meaning: { en: 'letter', vi: 'thư tín' },
              ruby: [
                { base: '手', reading: 'て' },
                { base: '紙', reading: 'がみ' }
              ]
            },
            {
              kana: 'ばんごう',
              kanji: '番号',
              romaji: 'bangō',
              meaning: { en: 'number (sequence)', vi: 'số (thứ tự)' },
              ruby: [
                { base: '番', reading: 'ばん' },
                { base: '号', reading: 'ごう' }
              ]
            },
            {
              kana: 'なんばん',
              kanji: '何番',
              romaji: 'nanban',
              meaning: { en: 'what number', vi: 'số mấy, số bao nhiêu' },
              ruby: [
                { base: '何', reading: 'なん' },
                { base: '番', reading: 'ばん' }
              ]
            },
            {
              kana: 'テレホンカード',
              romaji: 'terehon kādo',
              meaning: { en: 'telephone card', vi: 'thẻ điện thoại' }
            }
          ]
        },
        {
          kind: 'steps',
          title: { en: 'Using a public phone', vi: 'Gọi điện thoại công cộng' },
          steps: [
            {
              text: { en: 'Pick up the receiver.', vi: 'Nhấc ống nghe.' }
            },
            {
              text: {
                en: 'Insert coins or a telephone card.',
                vi: 'Cho tiền xu hoặc thẻ điện thoại vào.'
              }
            },
            {
              text: { en: 'Dial the number.', vi: 'Ấn số.' }
            },
            {
              text: { en: 'Hang up the receiver.', vi: 'Gác ống nghe.' }
            },
            {
              text: {
                en: 'Take back any change or your telephone card.',
                vi: 'Lấy lại tiền thừa (nếu có) hoặc thẻ điện thoại.'
              }
            }
          ],
          notes: [
            {
              en: 'Public phones accept telephone cards or 10-yen and 100-yen coins. A 100-yen coin is not returned as change.',
              vi: 'Máy công cộng dùng thẻ hoặc xu 10 yên và 100 yên. Cho xu 100 yên thì máy không trả lại tiền thừa.'
            },
            {
              en: 'If the phone has a start button, press it after dialing.',
              vi: 'Nếu máy có nút bắt đầu, ấn nút đó sau khi quay số.'
            }
          ]
        },
        {
          kind: 'list',
          title: { en: 'Special phone numbers', vi: 'Số điện thoại đặc biệt' },
          rows: [
            {
              number: '110',
              jp: '警察署',
              ruby: [
                { base: '警', reading: 'けい' },
                { base: '察', reading: 'さつ' },
                { base: '署', reading: 'しょ' }
              ],
              meaning: { en: 'Police', vi: 'Cảnh sát' }
            },
            {
              number: '119',
              jp: '消防署',
              ruby: [
                { base: '消', reading: 'しょう' },
                { base: '防', reading: 'ぼう' },
                { base: '署', reading: 'しょ' }
              ],
              meaning: { en: 'Fire department', vi: 'Cứu hỏa' }
            },
            {
              number: '117',
              jp: '時報',
              ruby: [
                { base: '時', reading: 'じ' },
                { base: '報', reading: 'ほう' }
              ],
              meaning: { en: 'Time service', vi: 'Dịch vụ hỏi giờ' }
            },
            {
              number: '177',
              jp: '天気予報',
              ruby: [
                { base: '天', reading: 'てん' },
                { base: '気', reading: 'き' },
                { base: '予', reading: 'よ' },
                { base: '報', reading: 'ほう' }
              ],
              meaning: { en: 'Weather forecast service', vi: 'Dịch vụ dự báo thời tiết' }
            },
            {
              number: '104',
              jp: '電話番号案内',
              ruby: [
                { base: '電', reading: 'でん' },
                { base: '話', reading: 'わ' },
                { base: '番', reading: 'ばん' },
                { base: '号', reading: 'ごう' },
                { base: '案', reading: 'あん' },
                { base: '内', reading: 'ない' }
              ],
              meaning: { en: 'Directory assistance', vi: 'Tra cứu số điện thoại' }
            }
          ]
        },
        {
          kind: 'address',
          title: { en: 'How to write an address', vi: 'Cách viết địa chỉ' },
          intro: {
            en: 'Japanese addresses run large to small. Prefecture, city, and ward are written consecutively without spaces; use line breaks between the postcode, street line, and building line.',
            vi: 'Địa chỉ viết từ rộng đến hẹp. Tỉnh, thành phố, quận viết liền không cách; xuống dòng giữa mã bưu điện, dòng phố, và dòng tòa nhà.'
          },
          sample: {
            jp: '〒658-0063\n兵庫県神戸市中央区三宮1-23\nコウベハイツ405号',
            ruby: [
              { base: '兵', reading: 'ひょう' },
              { base: '庫', reading: 'ご' },
              { base: '県', reading: 'けん' },
              { base: '神', reading: 'こう' },
              { base: '戸', reading: 'べ' },
              { base: '市', reading: 'し' },
              { base: '中', reading: 'ちゅう' },
              { base: '央', reading: 'おう' },
              { base: '区', reading: 'く' },
              { base: '三', reading: 'み' },
              { base: '宮', reading: 'や' },
              { base: '号', reading: 'ごう' }
            ]
          },
          parts: [
            { label: { en: 'Postcode', vi: 'Mã bưu điện' }, text: '〒658-0063' },
            {
              label: { en: 'Prefecture', vi: 'Tỉnh' },
              text: '兵庫県',
              ruby: [
                { base: '兵', reading: 'ひょう' },
                { base: '庫', reading: 'ご' },
                { base: '県', reading: 'けん' }
              ]
            },
            {
              label: { en: 'City', vi: 'Thành phố' },
              text: '神戸市',
              ruby: [
                { base: '神', reading: 'こう' },
                { base: '戸', reading: 'べ' },
                { base: '市', reading: 'し' }
              ]
            },
            {
              label: { en: 'Ward', vi: 'Quận' },
              text: '中央区',
              ruby: [
                { base: '中', reading: 'ちゅう' },
                { base: '央', reading: 'おう' },
                { base: '区', reading: 'く' }
              ]
            },
            {
              label: { en: 'District / block', vi: 'Khu phố' },
              text: '三宮1-23',
              ruby: [
                { base: '三', reading: 'み' },
                { base: '宮', reading: 'や' }
              ]
            },
            { label: { en: 'Building name', vi: 'Tên tòa nhà' }, text: 'コウベハイツ' },
            {
              label: { en: 'Room number', vi: 'Số phòng' },
              text: '405号',
              ruby: [{ base: '号', reading: 'ごう' }]
            }
          ]
        }
      ]
    },
    n5Lesson5
  ])
};
