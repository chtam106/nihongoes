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
        en: 'Introductions - "A is B"',
        vi: 'Giới thiệu bản thân - "A là B"'
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
            en: '~chan (affectionate suffix, esp. for little girls)',
            vi: '~chan (hậu tố thân mật, nhất là với bé gái)'
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
          title: { en: 'Yes/no question with か', vi: 'Câu hỏi có/không với か' },
          explanation: {
            en: 'Add か to the end to make a question. No question mark is needed in Japanese.',
            vi: 'Thêm か vào cuối câu để tạo câu hỏi. Tiếng Nhật không cần dấu chấm hỏi.'
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
          ]
        },
        {
          pattern: 'N も',
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
        en: 'これ / それ / あれ - Things around you',
        vi: 'これ / それ / あれ - Đồ vật xung quanh'
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
          pattern: 'N は なんですか',
          title: { en: 'Asking "what is it?" with 何', vi: 'Hỏi "là cái gì?" với 何' },
          explanation: {
            en: '何 (なん) means "what". Put it where the unknown noun would go to ask what something is; answer with "...です".',
            vi: '何 (なん) nghĩa là "cái gì". Đặt vào vị trí danh từ chưa biết để hỏi đó là gì; trả lời bằng "...です".'
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
          ]
        },
        {
          pattern: 'はい 、 そうです / いいえ 、 ちがいます',
          title: {
            en: 'Answering: はい, そうです / いいえ, ちがいます',
            vi: 'Trả lời: はい, そうです / いいえ, ちがいます'
          },
          explanation: {
            en: 'For "Is it ~?" questions, answer はい、そうです ("yes, that\'s right") or いいえ、ちがいます ("no, that\'s wrong").',
            vi: 'Với câu hỏi "Có phải ~?", trả lời はい、そうです ("vâng, đúng vậy") hoặc いいえ、ちがいます ("không, không phải").'
          },
          examples: [
            {
              jp: 'はい、そうです。',
              romaji: 'Hai, sō desu.',
              meaning: { en: "Yes, that's right.", vi: 'Vâng, đúng vậy.' }
            },
            {
              jp: 'いいえ、ちがいます。',
              romaji: 'Iie, chigaimasu.',
              meaning: { en: "No, that's wrong.", vi: 'Không, không phải.' }
            }
          ]
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
    },
    {
      id: 'lesson-4',
      number: 4,
      title: {
        en: 'Time & daily schedule',
        vi: 'Thời gian & lịch sinh hoạt'
      },
      focus: {
        en: 'Tell the time, use the polite verb forms (ます/ました), and give a range with から...まで.',
        vi: 'Nói giờ, dùng thể lịch sự của động từ (ます/ました) và nêu khoảng với から...まで.'
      },
      vocab: [
        {
          kana: 'おきます',
          kanji: '起きます',
          romaji: 'okimasu',
          meaning: { en: 'to get up', vi: 'thức dậy' }
        },
        {
          kana: 'ねます',
          kanji: '寝ます',
          romaji: 'nemasu',
          meaning: { en: 'to sleep, go to bed', vi: 'ngủ, đi ngủ' }
        },
        {
          kana: 'はたらきます',
          kanji: '働きます',
          romaji: 'hatarakimasu',
          meaning: { en: 'to work', vi: 'làm việc' }
        },
        {
          kana: 'やすみます',
          kanji: '休みます',
          romaji: 'yasumimasu',
          meaning: { en: 'to rest, take a day off', vi: 'nghỉ ngơi, nghỉ làm' }
        },
        {
          kana: 'べんきょうします',
          kanji: '勉強します',
          romaji: 'benkyō shimasu',
          meaning: { en: 'to study', vi: 'học tập' }
        },
        {
          kana: 'おわります',
          kanji: '終わります',
          romaji: 'owarimasu',
          meaning: { en: 'to end, finish', vi: 'kết thúc' }
        },
        {
          kana: 'はじまります',
          kanji: '始まります',
          romaji: 'hajimarimasu',
          meaning: { en: 'to begin, start', vi: 'bắt đầu' }
        },
        { kana: 'いま', kanji: '今', romaji: 'ima', meaning: { en: 'now', vi: 'bây giờ' } },
        {
          kana: '〜じ',
          kanji: '〜時',
          romaji: 'ji',
          speech: 'じ',
          meaning: { en: "~ o'clock", vi: '~ giờ' }
        },
        {
          kana: '〜ふん',
          kanji: '〜分',
          romaji: 'fun',
          speech: 'ふん',
          meaning: { en: '~ minute(s)', vi: '~ phút' }
        },
        { kana: 'はん', kanji: '半', romaji: 'han', meaning: { en: 'half (past)', vi: 'rưỡi' } },
        {
          kana: 'なんじ',
          kanji: '何時',
          romaji: 'nanji',
          meaning: { en: 'what time', vi: 'mấy giờ' }
        },
        {
          kana: 'ごぜん',
          kanji: '午前',
          romaji: 'gozen',
          meaning: { en: 'a.m., morning', vi: 'buổi sáng (AM)' }
        },
        {
          kana: 'ごご',
          kanji: '午後',
          romaji: 'gogo',
          meaning: { en: 'p.m., afternoon', vi: 'buổi chiều (PM)' }
        },
        { kana: 'あさ', kanji: '朝', romaji: 'asa', meaning: { en: 'morning', vi: 'buổi sáng' } },
        {
          kana: 'ひる',
          kanji: '昼',
          romaji: 'hiru',
          meaning: { en: 'noon, daytime', vi: 'buổi trưa' }
        },
        {
          kana: 'ばん',
          kanji: '晩',
          romaji: 'ban',
          meaning: { en: 'evening, night', vi: 'buổi tối' }
        },
        {
          kana: 'けさ',
          kanji: '今朝',
          romaji: 'kesa',
          meaning: { en: 'this morning', vi: 'sáng nay' }
        },
        {
          kana: 'こんばん',
          kanji: '今晩',
          romaji: 'konban',
          meaning: { en: 'tonight', vi: 'tối nay' }
        },
        {
          kana: 'あした',
          kanji: '明日',
          romaji: 'ashita',
          meaning: { en: 'tomorrow', vi: 'ngày mai' }
        },
        {
          kana: 'きのう',
          kanji: '昨日',
          romaji: 'kinō',
          meaning: { en: 'yesterday', vi: 'hôm qua' }
        },
        { kana: 'きょう', kanji: '今日', romaji: 'kyō', meaning: { en: 'today', vi: 'hôm nay' } },
        {
          kana: 'まいあさ',
          kanji: '毎朝',
          romaji: 'maiasa',
          meaning: { en: 'every morning', vi: 'mỗi sáng' }
        },
        {
          kana: 'まいばん',
          kanji: '毎晩',
          romaji: 'maiban',
          meaning: { en: 'every night', vi: 'mỗi tối' }
        },
        {
          kana: 'まいにち',
          kanji: '毎日',
          romaji: 'mainichi',
          meaning: { en: 'every day', vi: 'mỗi ngày' }
        },
        {
          kana: 'やすみ',
          kanji: '休み',
          romaji: 'yasumi',
          meaning: { en: 'holiday, day off', vi: 'ngày nghỉ' }
        },
        {
          kana: 'なんぷん',
          kanji: '何分',
          romaji: 'nanpun',
          meaning: { en: 'what minute', vi: 'phút mấy' }
        },
        {
          kana: 'ひるやすみ',
          kanji: '昼休み',
          romaji: 'hiruyasumi',
          meaning: { en: 'lunch break', vi: 'giờ nghỉ trưa' }
        },
        {
          kana: 'しごと',
          kanji: '仕事',
          romaji: 'shigoto',
          meaning: { en: 'work, job', vi: 'công việc' }
        }
      ],
      phrases: [
        {
          kana: 'いま なんじですか。',
          romaji: 'Ima nanji desu ka.',
          meaning: { en: 'What time is it now?', vi: 'Bây giờ là mấy giờ?' }
        },
        {
          kana: 'おつかれさまでした。',
          romaji: 'Otsukaresama deshita.',
          meaning: { en: 'Thank you for your hard work.', vi: 'Bạn đã vất vả rồi.' }
        },
        {
          kana: 'そうですね。',
          romaji: 'Sō desu ne.',
          meaning: { en: "Let me see. / That's right.", vi: 'Để xem nào. / Đúng nhỉ.' }
        },
        {
          kana: 'ありがとうございました。',
          romaji: 'Arigatō gozaimashita.',
          meaning: { en: 'Thank you. (for what you did)', vi: 'Cảm ơn (về việc đã làm).' }
        },
        {
          kana: 'おやすみなさい。',
          romaji: 'Oyasuminasai.',
          meaning: { en: 'Good night.', vi: 'Chúc ngủ ngon.' }
        }
      ],
      grammar: [
        {
          pattern: 'V ます / V ません',
          title: { en: 'Polite present: ます / ません', vi: 'Hiện tại lịch sự: ます / ません' },
          explanation: {
            en: 'ます ends a polite verb (do / will do); ません makes it negative (do not / will not).',
            vi: 'ます kết thúc động từ lịch sự (làm / sẽ làm); ません là phủ định (không làm).'
          },
          examples: [
            {
              jp: 'まいあさ 6じに おきます。',
              romaji: 'Maiasa roku-ji ni okimasu.',
              meaning: { en: 'I get up at 6 every morning.', vi: 'Mỗi sáng tôi dậy lúc 6 giờ.' }
            },
            {
              jp: 'にちようびは はたらきません。',
              romaji: 'Nichiyōbi wa hatarakimasen.',
              meaning: { en: "I don't work on Sundays.", vi: 'Chủ nhật tôi không làm việc.' }
            }
          ]
        },
        {
          pattern: 'V ました / V ませんでした',
          title: {
            en: 'Polite past: ました / ませんでした',
            vi: 'Quá khứ lịch sự: ました / ませんでした'
          },
          explanation: {
            en: 'ました is the polite past (did); ませんでした is its negative (did not).',
            vi: 'ました là quá khứ lịch sự (đã làm); ませんでした là phủ định (đã không làm).'
          },
          examples: [
            {
              jp: 'きのう べんきょうしました。',
              romaji: 'Kinō benkyō shimashita.',
              meaning: { en: 'I studied yesterday.', vi: 'Hôm qua tôi đã học.' }
            },
            {
              jp: 'けさ ごはんを たべませんでした。',
              romaji: 'Kesa gohan o tabemasen deshita.',
              meaning: { en: "I didn't eat this morning.", vi: 'Sáng nay tôi đã không ăn.' }
            }
          ]
        },
        {
          pattern: 'じかん に V',
          title: { en: 'に with clock time', vi: 'に với giờ cụ thể' },
          explanation: {
            en: 'When a verb happens at a specific clock time, mark that time with に.',
            vi: 'Khi hành động xảy ra vào một giờ cụ thể, đánh dấu giờ đó bằng に.'
          },
          examples: [
            {
              jp: '11じに ねます。',
              romaji: 'Jūichi-ji ni nemasu.',
              meaning: { en: 'I go to bed at 11.', vi: 'Tôi đi ngủ lúc 11 giờ.' }
            },
            {
              jp: '9じに しごとが はじまります。',
              romaji: 'Ku-ji ni shigoto ga hajimarimasu.',
              meaning: { en: 'Work starts at 9.', vi: 'Công việc bắt đầu lúc 9 giờ.' }
            }
          ]
        },
        {
          pattern: 'N1 から N2 まで',
          title: { en: 'from から / until まで', vi: 'từ から / đến まで' },
          explanation: {
            en: 'から marks the start and まで the end of a span of time (or place).',
            vi: 'から đánh dấu điểm bắt đầu, まで điểm kết thúc của một khoảng thời gian (hoặc nơi chốn).'
          },
          examples: [
            {
              jp: 'しごとは 9じから 6じまでです。',
              romaji: 'Shigoto wa ku-ji kara roku-ji made desu.',
              meaning: { en: 'Work is from 9 to 6.', vi: 'Công việc từ 9 giờ đến 6 giờ.' }
            },
            {
              jp: 'ぎんこうは 9じから 3じまでです。',
              romaji: 'Ginkō wa ku-ji kara san-ji made desu.',
              meaning: {
                en: 'The bank is open from 9 to 3.',
                vi: 'Ngân hàng mở từ 9 giờ đến 3 giờ.'
              }
            }
          ]
        },
        {
          pattern: 'いま なんじ ですか',
          title: { en: 'Asking the time (なんじ)', vi: 'Hỏi giờ (なんじ)' },
          explanation: {
            en: 'なんじ (何時) means "what time". Answer with the hour, adding はん for half past.',
            vi: 'なんじ (何時) nghĩa là "mấy giờ". Trả lời bằng số giờ, thêm はん nếu là rưỡi.'
          },
          examples: [
            {
              jp: 'いま なんじですか。',
              romaji: 'Ima nanji desu ka.',
              meaning: { en: 'What time is it now?', vi: 'Bây giờ mấy giờ?' }
            },
            {
              jp: 'テストは なんじですか。',
              romaji: 'Tesuto wa nanji desu ka.',
              meaning: { en: 'What time is the test?', vi: 'Bài kiểm tra lúc mấy giờ?' }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'My day', vi: 'Một ngày của tôi' },
          lines: [
            {
              jp: 'まいあさ 6じに おきます。',
              romaji: 'Maiasa roku-ji ni okimasu.',
              meaning: { en: 'I get up at 6 every morning.', vi: 'Mỗi sáng tôi dậy lúc 6 giờ.' }
            },
            {
              jp: 'しごとは 9じから 5じまでです。',
              romaji: 'Shigoto wa ku-ji kara go-ji made desu.',
              meaning: { en: 'Work is from 9 to 5.', vi: 'Công việc từ 9 giờ đến 5 giờ.' }
            },
            {
              jp: 'ばんは べんきょうします。そして、11じに ねます。',
              romaji: 'Ban wa benkyō shimasu. Soshite, jūichi-ji ni nemasu.',
              meaning: {
                en: 'In the evening I study. Then I go to bed at 11.',
                vi: 'Buổi tối tôi học. Rồi 11 giờ đi ngủ.'
              }
            },
            {
              jp: 'きのうは やすみでした。',
              romaji: 'Kinō wa yasumi deshita.',
              meaning: { en: 'Yesterday was a day off.', vi: 'Hôm qua là ngày nghỉ.' }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: {
                en: 'What time does the writer get up?',
                vi: 'Người viết dậy lúc mấy giờ?'
              },
              choices: [
                { id: 'a', label: { en: '6', vi: '6 giờ' } },
                { id: 'b', label: { en: '7', vi: '7 giờ' } },
                { id: 'c', label: { en: '9', vi: '9 giờ' } },
                { id: 'd', label: { en: '11', vi: '11 giờ' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: {
                en: 'What does the writer do in the evening?',
                vi: 'Buổi tối người viết làm gì?'
              },
              choices: [
                { id: 'a', label: { en: 'Studies', vi: 'Học bài' } },
                { id: 'b', label: { en: 'Works', vi: 'Làm việc' } },
                { id: 'c', label: { en: 'Goes out', vi: 'Đi chơi' } },
                { id: 'd', label: { en: 'Rests all day', vi: 'Nghỉ cả ngày' } }
              ],
              correctId: 'a'
            }
          ]
        }
      ],
      reference: [
        {
          title: { en: 'Days of the week', vi: 'Các ngày trong tuần' },
          items: [
            {
              kana: 'げつようび',
              kanji: '月曜日',
              romaji: 'getsuyōbi',
              meaning: { en: 'Monday', vi: 'thứ Hai' }
            },
            {
              kana: 'かようび',
              kanji: '火曜日',
              romaji: 'kayōbi',
              meaning: { en: 'Tuesday', vi: 'thứ Ba' }
            },
            {
              kana: 'すいようび',
              kanji: '水曜日',
              romaji: 'suiyōbi',
              meaning: { en: 'Wednesday', vi: 'thứ Tư' }
            },
            {
              kana: 'もくようび',
              kanji: '木曜日',
              romaji: 'mokuyōbi',
              meaning: { en: 'Thursday', vi: 'thứ Năm' }
            },
            {
              kana: 'きんようび',
              kanji: '金曜日',
              romaji: 'kinyōbi',
              meaning: { en: 'Friday', vi: 'thứ Sáu' }
            },
            {
              kana: 'どようび',
              kanji: '土曜日',
              romaji: 'doyōbi',
              meaning: { en: 'Saturday', vi: 'thứ Bảy' }
            },
            {
              kana: 'にちようび',
              kanji: '日曜日',
              romaji: 'nichiyōbi',
              meaning: { en: 'Sunday', vi: 'Chủ nhật' }
            }
          ]
        },
        {
          title: { en: 'Telling time (〜時 / 〜分)', vi: 'Cách đọc giờ (〜時 / 〜分)' },
          items: [
            {
              kana: 'よじ',
              kanji: '4時',
              romaji: 'yoji',
              meaning: { en: '4 o\u2019clock', vi: '4 giờ' }
            },
            {
              kana: 'しちじ',
              kanji: '7時',
              romaji: 'shichiji',
              meaning: { en: '7 o\u2019clock', vi: '7 giờ' }
            },
            {
              kana: 'くじ',
              kanji: '9時',
              romaji: 'kuji',
              meaning: { en: '9 o\u2019clock', vi: '9 giờ' }
            },
            {
              kana: 'いっぷん',
              kanji: '1分',
              romaji: 'ippun',
              meaning: { en: '1 minute', vi: '1 phút' }
            },
            {
              kana: 'さんぷん',
              kanji: '3分',
              romaji: 'sanpun',
              meaning: { en: '3 minutes', vi: '3 phút' }
            },
            {
              kana: 'じゅっぷん',
              kanji: '10分',
              romaji: 'juppun',
              meaning: { en: '10 minutes', vi: '10 phút' }
            }
          ]
        }
      ]
    },
    {
      id: 'lesson-5',
      number: 5,
      title: {
        en: 'Going places & transport',
        vi: 'Đi lại & phương tiện'
      },
      focus: {
        en: 'Say where you go with へ, how you get there with で, and who you go with using と.',
        vi: 'Nói nơi đến với へ, phương tiện với で, và đi cùng ai với と.'
      },
      vocab: [
        {
          kana: 'いきます',
          kanji: '行きます',
          romaji: 'ikimasu',
          meaning: { en: 'to go', vi: 'đi' }
        },
        {
          kana: 'きます',
          kanji: '来ます',
          romaji: 'kimasu',
          meaning: { en: 'to come', vi: 'đến' }
        },
        {
          kana: 'かえります',
          kanji: '帰ります',
          romaji: 'kaerimasu',
          meaning: { en: 'to return, go home', vi: 'về, trở về' }
        },
        {
          kana: 'がっこう',
          kanji: '学校',
          romaji: 'gakkō',
          meaning: { en: 'school', vi: 'trường học' }
        },
        { kana: 'えき', kanji: '駅', romaji: 'eki', meaning: { en: 'station', vi: 'nhà ga' } },
        {
          kana: 'でんしゃ',
          kanji: '電車',
          romaji: 'densha',
          meaning: { en: 'train', vi: 'tàu điện' }
        },
        {
          kana: 'ちかてつ',
          kanji: '地下鉄',
          romaji: 'chikatetsu',
          meaning: { en: 'subway', vi: 'tàu điện ngầm' }
        },
        {
          kana: 'しんかんせん',
          kanji: '新幹線',
          romaji: 'shinkansen',
          meaning: { en: 'bullet train', vi: 'tàu siêu tốc Shinkansen' }
        },
        {
          kana: 'ひこうき',
          kanji: '飛行機',
          romaji: 'hikōki',
          meaning: { en: 'airplane', vi: 'máy bay' }
        },
        {
          kana: 'ふね',
          kanji: '船',
          romaji: 'fune',
          meaning: { en: 'ship, boat', vi: 'tàu thủy' }
        },
        { kana: 'バス', romaji: 'basu', meaning: { en: 'bus', vi: 'xe buýt' } },
        { kana: 'タクシー', romaji: 'takushī', meaning: { en: 'taxi', vi: 'taxi' } },
        {
          kana: 'じてんしゃ',
          kanji: '自転車',
          romaji: 'jitensha',
          meaning: { en: 'bicycle', vi: 'xe đạp' }
        },
        {
          kana: 'あるいて',
          kanji: '歩いて',
          romaji: 'aruite',
          meaning: { en: 'on foot', vi: 'đi bộ' }
        },
        {
          kana: 'ともだち',
          kanji: '友達',
          romaji: 'tomodachi',
          meaning: { en: 'friend', vi: 'bạn bè' }
        },
        {
          kana: 'かぞく',
          kanji: '家族',
          romaji: 'kazoku',
          meaning: { en: 'family', vi: 'gia đình' }
        },
        {
          kana: 'ひとりで',
          kanji: '一人で',
          romaji: 'hitori de',
          meaning: { en: 'alone, by oneself', vi: 'một mình' }
        },
        {
          kana: 'せんしゅう',
          kanji: '先週',
          romaji: 'senshū',
          meaning: { en: 'last week', vi: 'tuần trước' }
        },
        {
          kana: 'らいしゅう',
          kanji: '来週',
          romaji: 'raishū',
          meaning: { en: 'next week', vi: 'tuần sau' }
        },
        {
          kana: 'せんげつ',
          kanji: '先月',
          romaji: 'sengetsu',
          meaning: { en: 'last month', vi: 'tháng trước' }
        },
        {
          kana: 'らいげつ',
          kanji: '来月',
          romaji: 'raigetsu',
          meaning: { en: 'next month', vi: 'tháng sau' }
        },
        {
          kana: 'きょねん',
          kanji: '去年',
          romaji: 'kyonen',
          meaning: { en: 'last year', vi: 'năm ngoái' }
        },
        {
          kana: 'ことし',
          kanji: '今年',
          romaji: 'kotoshi',
          meaning: { en: 'this year', vi: 'năm nay' }
        },
        {
          kana: 'らいねん',
          kanji: '来年',
          romaji: 'rainen',
          meaning: { en: 'next year', vi: 'năm sau' }
        },
        {
          kana: 'たんじょうび',
          kanji: '誕生日',
          romaji: 'tanjōbi',
          meaning: { en: 'birthday', vi: 'sinh nhật' }
        },
        { kana: 'いつ', romaji: 'itsu', meaning: { en: 'when', vi: 'khi nào' } },
        {
          kana: '〜がつ',
          kanji: '〜月',
          romaji: 'gatsu',
          speech: 'がつ',
          meaning: { en: '~ (month of the year)', vi: 'tháng ~' }
        },
        {
          kana: '〜にち',
          kanji: '〜日',
          romaji: 'nichi',
          speech: 'にち',
          meaning: { en: '~ (day of the month)', vi: 'ngày ~' }
        },
        {
          kana: 'なんにち',
          kanji: '何日',
          romaji: 'nannichi',
          meaning: { en: 'what day of the month', vi: 'ngày mấy' }
        }
      ],
      phrases: [
        {
          kana: 'いってきます。',
          romaji: 'Ittekimasu.',
          meaning: { en: "I'm off. (leaving home)", vi: 'Tôi đi đây.' }
        },
        {
          kana: 'いってらっしゃい。',
          romaji: 'Itterasshai.',
          meaning: { en: 'Take care. (see you)', vi: 'Đi cẩn thận nhé.' }
        },
        {
          kana: 'ただいま。',
          romaji: 'Tadaima.',
          meaning: { en: "I'm home.", vi: 'Tôi về rồi.' }
        },
        {
          kana: 'おかえりなさい。',
          romaji: 'Okaerinasai.',
          meaning: { en: 'Welcome back.', vi: 'Mừng bạn về.' }
        },
        {
          kana: 'きを つけて。',
          romaji: 'Ki o tsukete.',
          meaning: { en: 'Take care. (be careful)', vi: 'Giữ gìn nhé.' }
        }
      ],
      grammar: [
        {
          pattern: 'N へ いきます / きます / かえります',
          title: {
            en: 'へ with go / come / return',
            vi: 'へ với đi / đến / về'
          },
          explanation: {
            en: 'へ (read "e") marks the destination of movement with いきます, きます, or かえります.',
            vi: 'へ (đọc là "e") đánh dấu điểm đến của di chuyển với いきます, きます hoặc かえります.'
          },
          examples: [
            {
              jp: 'がっこうへ いきます。',
              romaji: 'Gakkō e ikimasu.',
              meaning: { en: 'I go to school.', vi: 'Tôi đi đến trường.' }
            },
            {
              jp: 'にほんへ きました。',
              romaji: 'Nihon e kimashita.',
              meaning: { en: 'I came to Japan.', vi: 'Tôi đã đến Nhật.' }
            },
            {
              jp: 'うちへ かえります。',
              romaji: 'Uchi e kaerimasu.',
              meaning: { en: 'I return home.', vi: 'Tôi về nhà.' }
            }
          ]
        },
        {
          pattern: 'のりもの で いきます',
          title: { en: 'で for means of transport', vi: 'で chỉ phương tiện' },
          explanation: {
            en: 'で marks the vehicle you travel by. For "on foot" use あるいて (no で).',
            vi: 'で đánh dấu phương tiện di chuyển. "Đi bộ" thì dùng あるいて (không kèm で).'
          },
          examples: [
            {
              jp: 'でんしゃで がっこうへ いきます。',
              romaji: 'Densha de gakkō e ikimasu.',
              meaning: { en: 'I go to school by train.', vi: 'Tôi đi học bằng tàu điện.' }
            },
            {
              jp: 'タクシーで えきへ いきます。',
              romaji: 'Takushī de eki e ikimasu.',
              meaning: { en: 'I go to the station by taxi.', vi: 'Tôi đến ga bằng taxi.' }
            }
          ]
        },
        {
          pattern: 'N と いきます',
          title: { en: 'と for a companion', vi: 'と chỉ người đi cùng' },
          explanation: {
            en: 'と marks the person you do something with ("together with"). ひとりで means alone.',
            vi: 'と đánh dấu người cùng làm ("cùng với"). ひとりで nghĩa là một mình.'
          },
          examples: [
            {
              jp: 'ともだちと きょうとへ いきます。',
              romaji: 'Tomodachi to Kyōto e ikimasu.',
              meaning: { en: 'I go to Kyoto with a friend.', vi: 'Tôi đi Kyoto với bạn.' }
            },
            {
              jp: 'かぞくと スーパーへ いきます。',
              romaji: 'Kazoku to sūpā e ikimasu.',
              meaning: {
                en: 'I go to the supermarket with my family.',
                vi: 'Tôi đi siêu thị với gia đình.'
              }
            }
          ]
        },
        {
          pattern: 'N は いつ ですか',
          title: { en: 'Asking when (いつ)', vi: 'Hỏi khi nào (いつ)' },
          explanation: {
            en: 'いつ means "when". Unlike clock times, いつ does not take に.',
            vi: 'いつ nghĩa là "khi nào". Khác với giờ cụ thể, いつ không đi với に.'
          },
          examples: [
            {
              jp: 'たんじょうびは いつですか。',
              romaji: 'Tanjōbi wa itsu desu ka.',
              meaning: { en: 'When is your birthday?', vi: 'Sinh nhật bạn khi nào?' }
            },
            {
              jp: 'らいしゅうの どようびです。',
              romaji: 'Raishū no doyōbi desu.',
              meaning: { en: 'It is next Saturday.', vi: 'Là thứ Bảy tuần sau.' }
            }
          ]
        },
        {
          pattern: 'N に いきます',
          title: { en: 'に with a day / date', vi: 'に với ngày / thứ' },
          explanation: {
            en: 'Mark a specific day or date of an action with に (e.g. days of the week, dates).',
            vi: 'Đánh dấu ngày/thứ cụ thể của hành động bằng に (thứ trong tuần, ngày tháng).'
          },
          examples: [
            {
              jp: 'にちようびに いきます。',
              romaji: 'Nichiyōbi ni ikimasu.',
              meaning: { en: 'I go on Sunday.', vi: 'Tôi đi vào Chủ nhật.' }
            },
            {
              jp: 'たんじょうびに かえります。',
              romaji: 'Tanjōbi ni kaerimasu.',
              meaning: { en: 'I return on my birthday.', vi: 'Tôi về vào ngày sinh nhật.' }
            }
          ]
        },
        {
          pattern: 'どこ も いきません',
          title: { en: 'Nowhere (どこも + negative)', vi: 'Không đi đâu (どこも + phủ định)' },
          explanation: {
            en: 'A question word + も + a negative verb means "not ... anywhere/anything" (どこも, なにも).',
            vi: 'Từ để hỏi + も + động từ phủ định nghĩa là "không ... đâu/gì cả" (どこも, なにも).'
          },
          examples: [
            {
              jp: 'どこも いきません。',
              romaji: 'Doko mo ikimasen.',
              meaning: { en: "I don't go anywhere.", vi: 'Tôi không đi đâu cả.' }
            },
            {
              jp: 'きょうは どこも いきません。',
              romaji: 'Kyō wa doko mo ikimasen.',
              meaning: { en: "I'm not going anywhere today.", vi: 'Hôm nay tôi không đi đâu.' }
            }
          ]
        },
        {
          pattern: 'ひとりで V',
          title: { en: 'Alone (ひとりで)', vi: 'Một mình (ひとりで)' },
          explanation: {
            en: 'ひとりで means "alone / by oneself", the opposite of doing something with someone (と).',
            vi: 'ひとりで nghĩa là "một mình", trái với việc làm cùng ai đó (と).'
          },
          examples: [
            {
              jp: 'ひとりで がっこうへ いきます。',
              romaji: 'Hitori de gakkō e ikimasu.',
              meaning: { en: 'I go to school alone.', vi: 'Tôi đi học một mình.' }
            },
            {
              jp: 'ひとりで うちへ かえります。',
              romaji: 'Hitori de uchi e kaerimasu.',
              meaning: { en: 'I return home alone.', vi: 'Tôi về nhà một mình.' }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'A trip next week', vi: 'Chuyến đi tuần sau' },
          lines: [
            {
              jp: 'らいしゅう かぞくと おおさかへ いきます。',
              romaji: 'Raishū kazoku to Ōsaka e ikimasu.',
              meaning: {
                en: 'Next week I will go to Osaka with my family.',
                vi: 'Tuần sau tôi sẽ đi Osaka với gia đình.'
              }
            },
            {
              jp: 'しんかんせんで いきます。',
              romaji: 'Shinkansen de ikimasu.',
              meaning: {
                en: 'We will go by bullet train.',
                vi: 'Chúng tôi đi bằng tàu Shinkansen.'
              }
            },
            {
              jp: 'どようびに いって、にちようびに かえります。',
              romaji: 'Doyōbi ni itte, nichiyōbi ni kaerimasu.',
              meaning: {
                en: 'We go on Saturday and return on Sunday.',
                vi: 'Đi vào thứ Bảy và về vào Chủ nhật.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: { en: 'Who does the writer go with?', vi: 'Người viết đi cùng ai?' },
              choices: [
                { id: 'a', label: { en: 'Family', vi: 'Gia đình' } },
                { id: 'b', label: { en: 'A friend', vi: 'Một người bạn' } },
                { id: 'c', label: { en: 'Alone', vi: 'Một mình' } },
                { id: 'd', label: { en: 'A teacher', vi: 'Giáo viên' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: { en: 'How do they travel?', vi: 'Họ đi bằng gì?' },
              choices: [
                { id: 'a', label: { en: 'Bullet train', vi: 'Tàu Shinkansen' } },
                { id: 'b', label: { en: 'Airplane', vi: 'Máy bay' } },
                { id: 'c', label: { en: 'Bus', vi: 'Xe buýt' } },
                { id: 'd', label: { en: 'Car', vi: 'Ô tô' } }
              ],
              correctId: 'a'
            }
          ]
        }
      ],
      reference: [
        {
          title: { en: 'Months (〜月)', vi: 'Các tháng (〜月)' },
          items: [
            {
              kana: 'いちがつ',
              kanji: '1月',
              romaji: 'ichigatsu',
              meaning: { en: 'January', vi: 'tháng 1' }
            },
            {
              kana: 'にがつ',
              kanji: '2月',
              romaji: 'nigatsu',
              meaning: { en: 'February', vi: 'tháng 2' }
            },
            {
              kana: 'さんがつ',
              kanji: '3月',
              romaji: 'sangatsu',
              meaning: { en: 'March', vi: 'tháng 3' }
            },
            {
              kana: 'しがつ',
              kanji: '4月',
              romaji: 'shigatsu',
              meaning: { en: 'April', vi: 'tháng 4' }
            },
            {
              kana: 'ごがつ',
              kanji: '5月',
              romaji: 'gogatsu',
              meaning: { en: 'May', vi: 'tháng 5' }
            },
            {
              kana: 'ろくがつ',
              kanji: '6月',
              romaji: 'rokugatsu',
              meaning: { en: 'June', vi: 'tháng 6' }
            },
            {
              kana: 'しちがつ',
              kanji: '7月',
              romaji: 'shichigatsu',
              meaning: { en: 'July', vi: 'tháng 7' }
            },
            {
              kana: 'はちがつ',
              kanji: '8月',
              romaji: 'hachigatsu',
              meaning: { en: 'August', vi: 'tháng 8' }
            },
            {
              kana: 'くがつ',
              kanji: '9月',
              romaji: 'kugatsu',
              meaning: { en: 'September', vi: 'tháng 9' }
            },
            {
              kana: 'じゅうがつ',
              kanji: '10月',
              romaji: 'jūgatsu',
              meaning: { en: 'October', vi: 'tháng 10' }
            },
            {
              kana: 'じゅういちがつ',
              kanji: '11月',
              romaji: 'jūichigatsu',
              meaning: { en: 'November', vi: 'tháng 11' }
            },
            {
              kana: 'じゅうにがつ',
              kanji: '12月',
              romaji: 'jūnigatsu',
              meaning: { en: 'December', vi: 'tháng 12' }
            }
          ]
        },
        {
          title: { en: 'Days of the month (〜日)', vi: 'Ngày trong tháng (〜日)' },
          items: [
            {
              kana: 'ついたち',
              kanji: '1日',
              romaji: 'tsuitachi',
              meaning: { en: '1st', vi: 'mùng 1' }
            },
            {
              kana: 'ふつか',
              kanji: '2日',
              romaji: 'futsuka',
              meaning: { en: '2nd', vi: 'mùng 2' }
            },
            { kana: 'みっか', kanji: '3日', romaji: 'mikka', meaning: { en: '3rd', vi: 'mùng 3' } },
            { kana: 'よっか', kanji: '4日', romaji: 'yokka', meaning: { en: '4th', vi: 'mùng 4' } },
            {
              kana: 'いつか',
              kanji: '5日',
              romaji: 'itsuka',
              meaning: { en: '5th', vi: 'mùng 5' }
            },
            { kana: 'むいか', kanji: '6日', romaji: 'muika', meaning: { en: '6th', vi: 'mùng 6' } },
            {
              kana: 'なのか',
              kanji: '7日',
              romaji: 'nanoka',
              meaning: { en: '7th', vi: 'mùng 7' }
            },
            { kana: 'ようか', kanji: '8日', romaji: 'yōka', meaning: { en: '8th', vi: 'mùng 8' } },
            {
              kana: 'ここのか',
              kanji: '9日',
              romaji: 'kokonoka',
              meaning: { en: '9th', vi: 'mùng 9' }
            },
            {
              kana: 'とおか',
              kanji: '10日',
              romaji: 'tōka',
              meaning: { en: '10th', vi: 'mùng 10' }
            },
            {
              kana: 'はつか',
              kanji: '20日',
              romaji: 'hatsuka',
              meaning: { en: '20th', vi: 'ngày 20' }
            }
          ]
        }
      ]
    },
    {
      id: 'lesson-6',
      number: 6,
      title: {
        en: 'Verbs & objects (を)',
        vi: 'Động từ & tân ngữ (を)'
      },
      focus: {
        en: 'Say what you do to an object with を, where you do it with で, and make invitations with ませんか / ましょう.',
        vi: 'Nói làm gì với tân ngữ bằng を, nơi làm bằng で, và rủ rê bằng ませんか / ましょう.'
      },
      vocab: [
        {
          kana: 'たべます',
          kanji: '食べます',
          romaji: 'tabemasu',
          meaning: { en: 'to eat', vi: 'ăn' }
        },
        {
          kana: 'のみます',
          kanji: '飲みます',
          romaji: 'nomimasu',
          meaning: { en: 'to drink', vi: 'uống' }
        },
        {
          kana: 'みます',
          kanji: '見ます',
          romaji: 'mimasu',
          meaning: { en: 'to see, watch', vi: 'xem, nhìn' }
        },
        {
          kana: 'ききます',
          kanji: '聞きます',
          romaji: 'kikimasu',
          meaning: { en: 'to listen, hear', vi: 'nghe' }
        },
        {
          kana: 'よみます',
          kanji: '読みます',
          romaji: 'yomimasu',
          meaning: { en: 'to read', vi: 'đọc' }
        },
        {
          kana: 'かきます',
          kanji: '書きます',
          romaji: 'kakimasu',
          meaning: { en: 'to write', vi: 'viết' }
        },
        {
          kana: 'かいます',
          kanji: '買います',
          romaji: 'kaimasu',
          meaning: { en: 'to buy', vi: 'mua' }
        },
        {
          kana: 'とります',
          kanji: '撮ります',
          romaji: 'torimasu',
          meaning: { en: 'to take (a photo)', vi: 'chụp (ảnh)' }
        },
        { kana: 'します', romaji: 'shimasu', meaning: { en: 'to do', vi: 'làm' } },
        {
          kana: 'あいます',
          kanji: '会います',
          romaji: 'aimasu',
          meaning: { en: 'to meet', vi: 'gặp' }
        },
        {
          kana: 'ごはん',
          kanji: 'ご飯',
          romaji: 'gohan',
          meaning: { en: 'rice, meal', vi: 'cơm, bữa ăn' }
        },
        {
          kana: 'あさごはん',
          kanji: '朝ご飯',
          romaji: 'asagohan',
          meaning: { en: 'breakfast', vi: 'bữa sáng' }
        },
        {
          kana: 'ひるごはん',
          kanji: '昼ご飯',
          romaji: 'hirugohan',
          meaning: { en: 'lunch', vi: 'bữa trưa' }
        },
        {
          kana: 'ばんごはん',
          kanji: '晩ご飯',
          romaji: 'bangohan',
          meaning: { en: 'dinner', vi: 'bữa tối' }
        },
        { kana: 'パン', romaji: 'pan', meaning: { en: 'bread', vi: 'bánh mì' } },
        { kana: 'たまご', kanji: '卵', romaji: 'tamago', meaning: { en: 'egg', vi: 'trứng' } },
        { kana: 'にく', kanji: '肉', romaji: 'niku', meaning: { en: 'meat', vi: 'thịt' } },
        { kana: 'さかな', kanji: '魚', romaji: 'sakana', meaning: { en: 'fish', vi: 'cá' } },
        {
          kana: 'やさい',
          kanji: '野菜',
          romaji: 'yasai',
          meaning: { en: 'vegetable', vi: 'rau' }
        },
        { kana: 'みず', kanji: '水', romaji: 'mizu', meaning: { en: 'water', vi: 'nước' } },
        { kana: 'おちゃ', kanji: 'お茶', romaji: 'ocha', meaning: { en: 'tea', vi: 'trà' } },
        { kana: 'ジュース', romaji: 'jūsu', meaning: { en: 'juice', vi: 'nước ép' } },
        { kana: 'ビール', romaji: 'bīru', meaning: { en: 'beer', vi: 'bia' } },
        {
          kana: 'えいが',
          kanji: '映画',
          romaji: 'eiga',
          meaning: { en: 'movie', vi: 'phim' }
        },
        {
          kana: 'てがみ',
          kanji: '手紙',
          romaji: 'tegami',
          meaning: { en: 'letter', vi: 'thư' }
        },
        {
          kana: 'しゃしん',
          kanji: '写真',
          romaji: 'shashin',
          meaning: { en: 'photo', vi: 'ảnh' }
        },
        { kana: 'みせ', kanji: '店', romaji: 'mise', meaning: { en: 'shop', vi: 'cửa hàng' } },
        { kana: 'レストラン', romaji: 'resutoran', meaning: { en: 'restaurant', vi: 'nhà hàng' } },
        {
          kana: 'しゅくだい',
          kanji: '宿題',
          romaji: 'shukudai',
          meaning: { en: 'homework', vi: 'bài tập về nhà' }
        },
        { kana: 'テニス', romaji: 'tenisu', meaning: { en: 'tennis', vi: 'quần vợt' } },
        { kana: 'サッカー', romaji: 'sakkā', meaning: { en: 'soccer', vi: 'bóng đá' } },
        { kana: 'なに', kanji: '何', romaji: 'nani', meaning: { en: 'what', vi: 'cái gì' } },
        {
          kana: 'いっしょに',
          kanji: '一緒に',
          romaji: 'issho ni',
          meaning: { en: 'together', vi: 'cùng nhau' }
        },
        { kana: 'ちょっと', romaji: 'chotto', meaning: { en: 'a little, a bit', vi: 'một chút' } },
        { kana: 'いつも', romaji: 'itsumo', meaning: { en: 'always', vi: 'luôn luôn' } },
        {
          kana: 'ときどき',
          kanji: '時々',
          romaji: 'tokidoki',
          meaning: { en: 'sometimes', vi: 'thỉnh thoảng' }
        }
      ],
      phrases: [
        { kana: 'ええ。', romaji: 'Ē.', meaning: { en: 'Yeah.', vi: 'Ừ / Vâng.' } },
        {
          kana: 'いいですね。',
          romaji: 'Ii desu ne.',
          meaning: { en: 'That sounds good.', vi: 'Nghe hay đấy.' }
        },
        {
          kana: 'わかりました。',
          romaji: 'Wakarimashita.',
          meaning: { en: 'I understand. / Got it.', vi: 'Tôi hiểu rồi.' }
        },
        {
          kana: 'ざんねんですが。',
          romaji: 'Zannen desu ga.',
          meaning: { en: 'Unfortunately... (declining)', vi: 'Tiếc là... (từ chối)' }
        },
        {
          kana: 'また こんど。',
          romaji: 'Mata kondo.',
          meaning: { en: 'Some other time.', vi: 'Để dịp khác.' }
        }
      ],
      grammar: [
        {
          pattern: 'N を V',
          title: { en: 'を marks the object', vi: 'を đánh dấu tân ngữ' },
          explanation: {
            en: 'を (read "o") marks the direct object - the thing the action is done to.',
            vi: 'を (đọc là "o") đánh dấu tân ngữ trực tiếp - vật bị tác động bởi hành động.'
          },
          examples: [
            {
              jp: 'ごはんを たべます。',
              romaji: 'Gohan o tabemasu.',
              meaning: { en: 'I eat a meal.', vi: 'Tôi ăn cơm.' }
            },
            {
              jp: 'コーヒーを のみます。',
              romaji: 'Kōhī o nomimasu.',
              meaning: { en: 'I drink coffee.', vi: 'Tôi uống cà phê.' }
            }
          ]
        },
        {
          pattern: 'ばしょ で V',
          title: {
            en: 'で marks where an action happens',
            vi: 'で đánh dấu nơi diễn ra hành động'
          },
          explanation: {
            en: 'で marks the place where an action is performed (different from に for existence).',
            vi: 'で đánh dấu nơi thực hiện hành động (khác với に chỉ sự tồn tại).'
          },
          examples: [
            {
              jp: 'レストランで ひるごはんを たべます。',
              romaji: 'Resutoran de hirugohan o tabemasu.',
              meaning: { en: 'I eat lunch at a restaurant.', vi: 'Tôi ăn trưa ở nhà hàng.' }
            },
            {
              jp: 'としょかんで ほんを よみます。',
              romaji: 'Toshokan de hon o yomimasu.',
              meaning: { en: 'I read books at the library.', vi: 'Tôi đọc sách ở thư viện.' }
            }
          ]
        },
        {
          pattern: 'いっしょに V ませんか',
          title: { en: 'Inviting with ませんか', vi: 'Rủ rê với ませんか' },
          explanation: {
            en: 'V ませんか ("won\u2019t you ~?") is a polite invitation, often with いっしょに (together).',
            vi: 'V ませんか ("... không?") là lời mời lịch sự, thường đi với いっしょに (cùng nhau).'
          },
          examples: [
            {
              jp: 'いっしょに ひるごはんを たべませんか。',
              romaji: 'Issho ni hirugohan o tabemasen ka.',
              meaning: {
                en: "Won't you have lunch together?",
                vi: 'Cùng ăn trưa không?'
              }
            },
            {
              jp: 'いっしょに えいがを みませんか。',
              romaji: 'Issho ni eiga o mimasen ka.',
              meaning: { en: "Won't you watch a movie together?", vi: 'Cùng xem phim không?' }
            }
          ]
        },
        {
          pattern: 'V ましょう',
          title: { en: "Let's ~ (ましょう)", vi: 'Hãy cùng ~ (ましょう)' },
          explanation: {
            en: 'V ましょう means "let\u2019s ~", suggesting doing something together.',
            vi: 'V ましょう nghĩa là "hãy cùng ~", đề nghị cùng làm việc gì đó.'
          },
          examples: [
            {
              jp: 'いっしょに いきましょう。',
              romaji: 'Issho ni ikimashō.',
              meaning: { en: "Let's go together.", vi: 'Cùng đi nào.' }
            },
            {
              jp: 'ちょっと やすみましょう。',
              romaji: 'Chotto yasumimashō.',
              meaning: { en: "Let's take a short break.", vi: 'Nghỉ một chút nào.' }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'Lunch invitation', vi: 'Lời mời ăn trưa' },
          lines: [
            {
              jp: 'いっしょに ひるごはんを たべませんか。',
              romaji: 'Issho ni hirugohan o tabemasen ka.',
              meaning: { en: "Won't you have lunch with me?", vi: 'Cùng ăn trưa nhé?' }
            },
            {
              jp: 'ええ、いいですね。',
              romaji: 'Ē, ii desu ne.',
              meaning: { en: 'Yeah, sounds good.', vi: 'Ừ, nghe hay đấy.' }
            },
            {
              jp: 'レストランで たべましょう。',
              romaji: 'Resutoran de tabemashō.',
              meaning: { en: "Let's eat at a restaurant.", vi: 'Ăn ở nhà hàng nhé.' }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: { en: 'What are they invited to do?', vi: 'Họ được rủ làm gì?' },
              choices: [
                { id: 'a', label: { en: 'Have lunch', vi: 'Ăn trưa' } },
                { id: 'b', label: { en: 'Watch a movie', vi: 'Xem phim' } },
                { id: 'c', label: { en: 'Study', vi: 'Học bài' } },
                { id: 'd', label: { en: 'Play tennis', vi: 'Chơi tennis' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: { en: 'Where will they eat?', vi: 'Họ sẽ ăn ở đâu?' },
              choices: [
                { id: 'a', label: { en: 'At a restaurant', vi: 'Ở nhà hàng' } },
                { id: 'b', label: { en: 'At home', vi: 'Ở nhà' } },
                { id: 'c', label: { en: 'At school', vi: 'Ở trường' } },
                { id: 'd', label: { en: 'At the library', vi: 'Ở thư viện' } }
              ],
              correctId: 'a'
            }
          ]
        }
      ],
      reference: [
        {
          title: { en: 'More food', vi: 'Món ăn khác' },
          items: [
            { kana: 'すし', kanji: '寿司', romaji: 'sushi', meaning: { en: 'sushi', vi: 'sushi' } },
            {
              kana: 'てんぷら',
              kanji: '天ぷら',
              romaji: 'tenpura',
              meaning: { en: 'tempura', vi: 'tempura' }
            },
            { kana: 'ラーメン', romaji: 'rāmen', meaning: { en: 'ramen', vi: 'mì ramen' } },
            { kana: 'カレー', romaji: 'karē', meaning: { en: 'curry', vi: 'cà ri' } },
            { kana: 'サラダ', romaji: 'sarada', meaning: { en: 'salad', vi: 'salad' } },
            { kana: 'ケーキ', romaji: 'kēki', meaning: { en: 'cake', vi: 'bánh ngọt' } }
          ]
        },
        {
          title: { en: 'More drinks', vi: 'Đồ uống khác' },
          items: [
            {
              kana: 'こうちゃ',
              kanji: '紅茶',
              romaji: 'kōcha',
              meaning: { en: 'black tea', vi: 'hồng trà' }
            },
            {
              kana: 'ぎゅうにゅう',
              kanji: '牛乳',
              romaji: 'gyūnyū',
              meaning: { en: 'milk', vi: 'sữa bò' }
            },
            { kana: 'ワイン', romaji: 'wain', meaning: { en: 'wine', vi: 'rượu vang' } },
            { kana: 'コーラ', romaji: 'kōra', meaning: { en: 'cola', vi: 'cô-ca' } }
          ]
        }
      ]
    },
    {
      id: 'lesson-7',
      number: 7,
      title: {
        en: 'Giving & receiving',
        vi: 'Cho & nhận'
      },
      focus: {
        en: 'Use で for tools and language, give and receive with あげます / もらいます, and say "already" with もう.',
        vi: 'Dùng で cho công cụ và ngôn ngữ, cho/nhận với あげます / もらいます, và nói "đã ... rồi" với もう.'
      },
      vocab: [
        {
          kana: 'あげます',
          romaji: 'agemasu',
          meaning: { en: 'to give', vi: 'cho, tặng' }
        },
        {
          kana: 'もらいます',
          romaji: 'moraimasu',
          meaning: { en: 'to receive', vi: 'nhận' }
        },
        {
          kana: 'かします',
          kanji: '貸します',
          romaji: 'kashimasu',
          meaning: { en: 'to lend', vi: 'cho mượn' }
        },
        {
          kana: 'かります',
          kanji: '借ります',
          romaji: 'karimasu',
          meaning: { en: 'to borrow', vi: 'mượn' }
        },
        {
          kana: 'おしえます',
          kanji: '教えます',
          romaji: 'oshiemasu',
          meaning: { en: 'to teach, tell', vi: 'dạy, chỉ' }
        },
        {
          kana: 'ならいます',
          kanji: '習います',
          romaji: 'naraimasu',
          meaning: { en: 'to learn', vi: 'học' }
        },
        {
          kana: 'かけます',
          romaji: 'kakemasu',
          meaning: { en: 'to make (a phone call)', vi: 'gọi (điện thoại)' }
        },
        { kana: 'はし', kanji: '箸', romaji: 'hashi', meaning: { en: 'chopsticks', vi: 'đũa' } },
        { kana: 'スプーン', romaji: 'supūn', meaning: { en: 'spoon', vi: 'thìa' } },
        { kana: 'フォーク', romaji: 'fōku', meaning: { en: 'fork', vi: 'nĩa' } },
        { kana: 'ナイフ', romaji: 'naifu', meaning: { en: 'knife', vi: 'dao' } },
        {
          kana: 'プレゼント',
          romaji: 'purezento',
          meaning: { en: 'present, gift', vi: 'quà tặng' }
        },
        {
          kana: 'にもつ',
          kanji: '荷物',
          romaji: 'nimotsu',
          meaning: { en: 'luggage, package', vi: 'hành lý, kiện hàng' }
        },
        {
          kana: 'きっぷ',
          kanji: '切符',
          romaji: 'kippu',
          meaning: { en: 'ticket', vi: 'vé' }
        },
        { kana: 'はな', kanji: '花', romaji: 'hana', meaning: { en: 'flower', vi: 'hoa' } },
        {
          kana: 'ちち',
          kanji: '父',
          romaji: 'chichi',
          meaning: { en: 'my father', vi: 'bố (của tôi)' }
        },
        {
          kana: 'はは',
          kanji: '母',
          romaji: 'haha',
          meaning: { en: 'my mother', vi: 'mẹ (của tôi)' }
        },
        {
          kana: 'あに',
          kanji: '兄',
          romaji: 'ani',
          meaning: { en: 'my older brother', vi: 'anh trai (của tôi)' }
        },
        {
          kana: 'あね',
          kanji: '姉',
          romaji: 'ane',
          meaning: { en: 'my older sister', vi: 'chị gái (của tôi)' }
        },
        {
          kana: 'おとうと',
          kanji: '弟',
          romaji: 'otōto',
          meaning: { en: 'my younger brother', vi: 'em trai (của tôi)' }
        },
        {
          kana: 'いもうと',
          kanji: '妹',
          romaji: 'imōto',
          meaning: { en: 'my younger sister', vi: 'em gái (của tôi)' }
        },
        { kana: 'もう', romaji: 'mō', meaning: { en: 'already', vi: 'đã ... rồi' } },
        { kana: 'まだ', romaji: 'mada', meaning: { en: 'not yet, still', vi: 'chưa, vẫn' } }
      ],
      phrases: [
        {
          kana: 'いらっしゃい。',
          romaji: 'Irasshai.',
          meaning: { en: 'Welcome! (to a guest)', vi: 'Mời vào! (đón khách)' }
        },
        {
          kana: 'しつれいします。',
          romaji: 'Shitsurei shimasu.',
          meaning: { en: 'Excuse me. (entering)', vi: 'Tôi xin phép. (khi vào)' }
        },
        {
          kana: 'コーヒーは いかがですか。',
          romaji: 'Kōhī wa ikaga desu ka.',
          meaning: { en: 'How about some coffee?', vi: 'Bạn dùng cà phê nhé?' }
        },
        {
          kana: 'いただきます。',
          romaji: 'Itadakimasu.',
          meaning: { en: '(said before eating)', vi: '(nói trước khi ăn)' }
        },
        {
          kana: 'ごちそうさまでした。',
          romaji: 'Gochisōsama deshita.',
          meaning: { en: '(said after eating)', vi: '(nói sau khi ăn)' }
        }
      ],
      grammar: [
        {
          pattern: 'N で V',
          title: { en: 'で for tool / language', vi: 'で chỉ công cụ / ngôn ngữ' },
          explanation: {
            en: 'で marks the tool, means, or language used to do something.',
            vi: 'で đánh dấu công cụ, phương tiện hoặc ngôn ngữ dùng để làm việc gì.'
          },
          examples: [
            {
              jp: 'はしで たべます。',
              romaji: 'Hashi de tabemasu.',
              meaning: { en: 'I eat with chopsticks.', vi: 'Tôi ăn bằng đũa.' }
            },
            {
              jp: 'にほんごで てがみを かきます。',
              romaji: 'Nihongo de tegami o kakimasu.',
              meaning: { en: 'I write a letter in Japanese.', vi: 'Tôi viết thư bằng tiếng Nhật.' }
            }
          ]
        },
        {
          pattern: 'N1 に N2 を あげます',
          title: { en: 'Giving with に...あげます', vi: 'Cho với に...あげます' },
          explanation: {
            en: 'に marks the receiver; あげます means "give" (from me/us to someone).',
            vi: 'に đánh dấu người nhận; あげます nghĩa là "cho" (từ tôi/chúng tôi tới ai đó).'
          },
          examples: [
            {
              jp: 'ともだちに プレゼントを あげます。',
              romaji: 'Tomodachi ni purezento o agemasu.',
              meaning: { en: 'I give my friend a present.', vi: 'Tôi tặng quà cho bạn.' }
            },
            {
              jp: 'いもうとに はなを あげました。',
              romaji: 'Imōto ni hana o agemashita.',
              meaning: { en: 'I gave my sister flowers.', vi: 'Tôi đã tặng hoa cho em gái.' }
            }
          ]
        },
        {
          pattern: 'N1 に N2 を もらいます',
          title: { en: 'Receiving with に...もらいます', vi: 'Nhận với に...もらいます' },
          explanation: {
            en: 'に marks the giver; もらいます means "receive" (someone gives to me/us).',
            vi: 'に đánh dấu người cho; もらいます nghĩa là "nhận" (ai đó cho tôi/chúng tôi).'
          },
          examples: [
            {
              jp: 'ともだちに はなを もらいました。',
              romaji: 'Tomodachi ni hana o moraimashita.',
              meaning: { en: 'I received flowers from a friend.', vi: 'Tôi được bạn tặng hoa.' }
            },
            {
              jp: 'ちちに きっぷを もらいました。',
              romaji: 'Chichi ni kippu o moraimashita.',
              meaning: { en: 'I got a ticket from my father.', vi: 'Tôi được bố cho vé.' }
            }
          ]
        },
        {
          pattern: 'もう V ました',
          title: { en: 'Already done (もう...ました)', vi: 'Đã ... rồi (もう...ました)' },
          explanation: {
            en: 'もう + past ました means the action is already completed. The negative reply is まだです.',
            vi: 'もう + quá khứ ました nghĩa là việc đã xong. Câu phủ định là まだです (chưa).'
          },
          examples: [
            {
              jp: 'もう ひるごはんを たべました。',
              romaji: 'Mō hirugohan o tabemashita.',
              meaning: { en: 'I have already eaten lunch.', vi: 'Tôi đã ăn trưa rồi.' }
            },
            {
              jp: 'もう しゅくだいを しました。',
              romaji: 'Mō shukudai o shimashita.',
              meaning: { en: 'I have already done my homework.', vi: 'Tôi đã làm bài tập rồi.' }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'A present', vi: 'Món quà' },
          lines: [
            {
              jp: 'たんじょうびに ともだちに プレゼントを もらいました。',
              romaji: 'Tanjōbi ni tomodachi ni purezento o moraimashita.',
              meaning: {
                en: 'On my birthday I received a present from a friend.',
                vi: 'Vào sinh nhật, tôi được bạn tặng quà.'
              }
            },
            {
              jp: 'とても きれいな はなでした。',
              romaji: 'Totemo kirei na hana deshita.',
              meaning: { en: 'It was a very pretty flower.', vi: 'Đó là bó hoa rất đẹp.' }
            },
            {
              jp: 'わたしも いもうとに プレゼントを あげました。',
              romaji: 'Watashi mo imōto ni purezento o agemashita.',
              meaning: {
                en: 'I also gave my sister a present.',
                vi: 'Tôi cũng tặng quà cho em gái.'
              }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: { en: 'What did the writer receive?', vi: 'Người viết nhận được gì?' },
              choices: [
                { id: 'a', label: { en: 'Flowers', vi: 'Hoa' } },
                { id: 'b', label: { en: 'A ticket', vi: 'Vé' } },
                { id: 'c', label: { en: 'A book', vi: 'Sách' } },
                { id: 'd', label: { en: 'Chopsticks', vi: 'Đũa' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: {
                en: 'Who did the writer give a present to?',
                vi: 'Người viết tặng quà cho ai?'
              },
              choices: [
                { id: 'a', label: { en: 'Younger sister', vi: 'Em gái' } },
                { id: 'b', label: { en: 'Friend', vi: 'Bạn' } },
                { id: 'c', label: { en: 'Father', vi: 'Bố' } },
                { id: 'd', label: { en: 'Teacher', vi: 'Giáo viên' } }
              ],
              correctId: 'a'
            }
          ]
        }
      ],
      reference: [
        {
          title: { en: "Family (others', polite)", vi: 'Gia đình (của người khác, lịch sự)' },
          items: [
            {
              kana: 'おとうさん',
              kanji: 'お父さん',
              romaji: 'otōsan',
              meaning: { en: 'father (polite)', vi: 'bố (của người khác)' }
            },
            {
              kana: 'おかあさん',
              kanji: 'お母さん',
              romaji: 'okāsan',
              meaning: { en: 'mother (polite)', vi: 'mẹ (của người khác)' }
            },
            {
              kana: 'おにいさん',
              kanji: 'お兄さん',
              romaji: 'onīsan',
              meaning: { en: 'older brother (polite)', vi: 'anh trai (của người khác)' }
            },
            {
              kana: 'おねえさん',
              kanji: 'お姉さん',
              romaji: 'onēsan',
              meaning: { en: 'older sister (polite)', vi: 'chị gái (của người khác)' }
            }
          ]
        }
      ]
    },
    {
      id: 'lesson-8',
      number: 8,
      title: {
        en: 'Adjectives',
        vi: 'Tính từ'
      },
      focus: {
        en: 'Describe things with い- and な-adjectives, use them before nouns, and ask impressions with どうですか.',
        vi: 'Miêu tả bằng tính từ đuôi い và đuôi な, đặt trước danh từ, và hỏi cảm nhận với どうですか.'
      },
      vocab: [
        {
          kana: 'おおきい',
          kanji: '大きい',
          romaji: 'ōkii',
          meaning: { en: 'big', vi: 'to, lớn' }
        },
        {
          kana: 'ちいさい',
          kanji: '小さい',
          romaji: 'chiisai',
          meaning: { en: 'small', vi: 'nhỏ' }
        },
        {
          kana: 'あたらしい',
          kanji: '新しい',
          romaji: 'atarashii',
          meaning: { en: 'new', vi: 'mới' }
        },
        {
          kana: 'ふるい',
          kanji: '古い',
          romaji: 'furui',
          meaning: { en: 'old (thing)', vi: 'cũ' }
        },
        { kana: 'いい', romaji: 'ii', meaning: { en: 'good', vi: 'tốt' } },
        {
          kana: 'たかい',
          kanji: '高い',
          romaji: 'takai',
          meaning: { en: 'expensive, tall', vi: 'đắt, cao' }
        },
        {
          kana: 'やすい',
          kanji: '安い',
          romaji: 'yasui',
          meaning: { en: 'cheap', vi: 'rẻ' }
        },
        {
          kana: 'おもしろい',
          kanji: '面白い',
          romaji: 'omoshiroi',
          meaning: { en: 'interesting, fun', vi: 'thú vị' }
        },
        {
          kana: 'むずかしい',
          kanji: '難しい',
          romaji: 'muzukashii',
          meaning: { en: 'difficult', vi: 'khó' }
        },
        {
          kana: 'やさしい',
          romaji: 'yasashii',
          meaning: { en: 'easy, kind', vi: 'dễ, hiền' }
        },
        {
          kana: 'あつい',
          kanji: '暑い',
          romaji: 'atsui',
          meaning: { en: 'hot (weather)', vi: 'nóng' }
        },
        {
          kana: 'さむい',
          kanji: '寒い',
          romaji: 'samui',
          meaning: { en: 'cold (weather)', vi: 'lạnh' }
        },
        {
          kana: 'おいしい',
          romaji: 'oishii',
          meaning: { en: 'delicious', vi: 'ngon' }
        },
        {
          kana: 'いそがしい',
          kanji: '忙しい',
          romaji: 'isogashii',
          meaning: { en: 'busy', vi: 'bận' }
        },
        {
          kana: 'たのしい',
          kanji: '楽しい',
          romaji: 'tanoshii',
          meaning: { en: 'enjoyable, fun', vi: 'vui' }
        },
        {
          kana: 'きれい',
          romaji: 'kirei',
          meaning: { en: 'pretty, clean (na-adj)', vi: 'đẹp, sạch (tính từ đuôi na)' }
        },
        {
          kana: 'しずか',
          kanji: '静か',
          romaji: 'shizuka',
          meaning: { en: 'quiet (na-adj)', vi: 'yên tĩnh (đuôi na)' }
        },
        {
          kana: 'にぎやか',
          romaji: 'nigiyaka',
          meaning: { en: 'lively (na-adj)', vi: 'náo nhiệt (đuôi na)' }
        },
        {
          kana: 'ゆうめい',
          kanji: '有名',
          romaji: 'yūmei',
          meaning: { en: 'famous (na-adj)', vi: 'nổi tiếng (đuôi na)' }
        },
        {
          kana: 'しんせつ',
          kanji: '親切',
          romaji: 'shinsetsu',
          meaning: { en: 'kind (na-adj)', vi: 'tử tế (đuôi na)' }
        },
        {
          kana: 'げんき',
          kanji: '元気',
          romaji: 'genki',
          meaning: { en: 'well, energetic (na-adj)', vi: 'khỏe, tràn đầy năng lượng (đuôi na)' }
        },
        {
          kana: 'ひま',
          kanji: '暇',
          romaji: 'hima',
          meaning: { en: 'free (time) (na-adj)', vi: 'rảnh (đuôi na)' }
        },
        {
          kana: 'べんり',
          kanji: '便利',
          romaji: 'benri',
          meaning: { en: 'convenient (na-adj)', vi: 'tiện lợi (đuôi na)' }
        },
        {
          kana: 'たべもの',
          kanji: '食べ物',
          romaji: 'tabemono',
          meaning: { en: 'food', vi: 'đồ ăn' }
        },
        {
          kana: 'ところ',
          kanji: '所',
          romaji: 'tokoro',
          meaning: { en: 'place', vi: 'nơi' }
        },
        { kana: 'まち', kanji: '町', romaji: 'machi', meaning: { en: 'town', vi: 'thị trấn' } },
        {
          kana: 'せいかつ',
          kanji: '生活',
          romaji: 'seikatsu',
          meaning: { en: 'life, living', vi: 'cuộc sống' }
        },
        { kana: 'とても', romaji: 'totemo', meaning: { en: 'very', vi: 'rất' } },
        {
          kana: 'あまり',
          romaji: 'amari',
          meaning: { en: 'not very (+ negative)', vi: 'không ... lắm (+ phủ định)' }
        },
        { kana: 'どう', romaji: 'dō', meaning: { en: 'how', vi: 'như thế nào' } }
      ],
      phrases: [
        {
          kana: 'どうですか。',
          romaji: 'Dō desu ka.',
          meaning: { en: 'How is it?', vi: 'Thấy thế nào?' }
        },
        {
          kana: 'とても いいですね。',
          romaji: 'Totemo ii desu ne.',
          meaning: { en: "That's really nice.", vi: 'Tốt thật đấy.' }
        },
        {
          kana: 'たいへんですね。',
          romaji: 'Taihen desu ne.',
          meaning: { en: "That's tough.", vi: 'Vất vả nhỉ.' }
        },
        {
          kana: 'そうですね。',
          romaji: 'Sō desu ne.',
          meaning: { en: "Let me see. / That's right.", vi: 'Để xem nào. / Đúng nhỉ.' }
        },
        {
          kana: 'おかげさまで。',
          romaji: 'Okagesama de.',
          meaning: { en: 'Thanks to you (I\u2019m well).', vi: 'Nhờ bạn (tôi vẫn khỏe).' }
        }
      ],
      grammar: [
        {
          pattern: 'N は い-adjective です',
          title: { en: 'い-adjective predicate', vi: 'Vị ngữ tính từ đuôi い' },
          explanation: {
            en: 'An い-adjective goes straight before です: おもしろいです. Do not add な.',
            vi: 'Tính từ đuôi い đứng ngay trước です: おもしろいです. Không thêm な.'
          },
          examples: [
            {
              jp: 'にほんごは おもしろいです。',
              romaji: 'Nihongo wa omoshiroi desu.',
              meaning: { en: 'Japanese is interesting.', vi: 'Tiếng Nhật thú vị.' }
            },
            {
              jp: 'この かばんは たかいです。',
              romaji: 'Kono kaban wa takai desu.',
              meaning: { en: 'This bag is expensive.', vi: 'Cái cặp này đắt.' }
            }
          ]
        },
        {
          pattern: 'N は な-adjective です',
          title: { en: 'な-adjective predicate', vi: 'Vị ngữ tính từ đuôi な' },
          explanation: {
            en: 'A な-adjective also comes before です (the な is dropped here): しずかです.',
            vi: 'Tính từ đuôi な cũng đứng trước です (bỏ な ở đây): しずかです.'
          },
          examples: [
            {
              jp: 'この まちは しずかです。',
              romaji: 'Kono machi wa shizuka desu.',
              meaning: { en: 'This town is quiet.', vi: 'Thị trấn này yên tĩnh.' }
            },
            {
              jp: 'この みせは ゆうめいです。',
              romaji: 'Kono mise wa yūmei desu.',
              meaning: { en: 'This shop is famous.', vi: 'Cửa hàng này nổi tiếng.' }
            }
          ]
        },
        {
          pattern: 'な-adjective な N',
          title: { en: 'な-adjective before a noun', vi: 'Tính từ đuôi な trước danh từ' },
          explanation: {
            en: 'When a な-adjective describes a noun, put な between them: きれいな はな. い-adjectives attach directly: おおきい かばん.',
            vi: 'Khi tính từ đuôi な bổ nghĩa cho danh từ, thêm な ở giữa: きれいな はな. Tính từ đuôi い gắn trực tiếp: おおきい かばん.'
          },
          examples: [
            {
              jp: 'きれいな はなですね。',
              romaji: 'Kirei na hana desu ne.',
              meaning: { en: 'What a pretty flower.', vi: 'Bông hoa đẹp nhỉ.' }
            },
            {
              jp: 'しんせつな ひとです。',
              romaji: 'Shinsetsu na hito desu.',
              meaning: { en: 'He/she is a kind person.', vi: 'Là người tử tế.' }
            }
          ]
        },
        {
          pattern: 'N は どう ですか',
          title: { en: 'Asking an impression (どう)', vi: 'Hỏi cảm nhận (どう)' },
          explanation: {
            en: 'どうですか asks "how is it?". Answer with とても (very) or あまり + negative (not very).',
            vi: 'どうですか hỏi "thấy thế nào?". Trả lời với とても (rất) hoặc あまり + phủ định (không ... lắm).'
          },
          examples: [
            {
              jp: 'にほんの せいかつは どうですか。',
              romaji: 'Nihon no seikatsu wa dō desu ka.',
              meaning: { en: 'How is life in Japan?', vi: 'Cuộc sống ở Nhật thế nào?' }
            },
            {
              jp: 'とても たのしいです。',
              romaji: 'Totemo tanoshii desu.',
              meaning: { en: 'It is very enjoyable.', vi: 'Rất vui.' }
            }
          ]
        },
        {
          pattern: 'N は い-adjective くないです',
          title: {
            en: 'い-adjective negative (くないです)',
            vi: 'Phủ định tính từ đuôi い (くないです)'
          },
          explanation: {
            en: 'Drop the final い and add くないです: たかい -> たかくないです.',
            vi: 'Bỏ い cuối rồi thêm くないです: たかい -> たかくないです.'
          },
          examples: [
            {
              jp: 'この かばんは たかくないです。',
              romaji: 'Kono kaban wa takakunai desu.',
              meaning: { en: 'This bag is not expensive.', vi: 'Cái cặp này không đắt.' }
            },
            {
              jp: 'きょうは あつくないです。',
              romaji: 'Kyō wa atsukunai desu.',
              meaning: { en: 'It is not hot today.', vi: 'Hôm nay không nóng.' }
            }
          ]
        },
        {
          pattern: 'N は な-adjective じゃありません',
          title: {
            en: 'な-adjective negative (じゃありません)',
            vi: 'Phủ định tính từ đuôi な (じゃありません)'
          },
          explanation: {
            en: 'A な-adjective becomes negative with じゃありません (or ではありません).',
            vi: 'Tính từ đuôi な phủ định bằng じゃありません (hoặc ではありません).'
          },
          examples: [
            {
              jp: 'この へやは しずかじゃありません。',
              romaji: 'Kono heya wa shizuka ja arimasen.',
              meaning: { en: 'This room is not quiet.', vi: 'Phòng này không yên tĩnh.' }
            },
            {
              jp: 'この みせは ゆうめいじゃありません。',
              romaji: 'Kono mise wa yūmei ja arimasen.',
              meaning: { en: 'This shop is not famous.', vi: 'Cửa hàng này không nổi tiếng.' }
            }
          ]
        },
        {
          pattern: 'N は どんな N ですか',
          title: { en: 'What kind of ~? (どんな)', vi: 'Loại ~ nào? (どんな)' },
          explanation: {
            en: 'どんな + noun asks "what kind of ~?". Answer with an adjective describing the noun.',
            vi: 'どんな + danh từ hỏi "~ như thế nào / loại nào?". Trả lời bằng tính từ bổ nghĩa cho danh từ.'
          },
          examples: [
            {
              jp: 'にほんは どんな くにですか。',
              romaji: 'Nihon wa donna kuni desu ka.',
              meaning: {
                en: 'What kind of country is Japan?',
                vi: 'Nhật Bản là đất nước như thế nào?'
              }
            },
            {
              jp: 'とても きれいな くにです。',
              romaji: 'Totemo kirei na kuni desu.',
              meaning: { en: 'It is a very beautiful country.', vi: 'Là đất nước rất đẹp.' }
            }
          ]
        }
      ],
      reading: [
        {
          id: 'reading-1',
          title: { en: 'My town', vi: 'Thị trấn của tôi' },
          lines: [
            {
              jp: 'わたしの まちは ちいさいです。',
              romaji: 'Watashi no machi wa chiisai desu.',
              meaning: { en: 'My town is small.', vi: 'Thị trấn của tôi nhỏ.' }
            },
            {
              jp: 'でも、とても しずかで きれいです。',
              romaji: 'Demo, totemo shizuka de kirei desu.',
              meaning: { en: 'But it is very quiet and pretty.', vi: 'Nhưng rất yên tĩnh và đẹp.' }
            },
            {
              jp: 'たべものも おいしいです。',
              romaji: 'Tabemono mo oishii desu.',
              meaning: { en: 'The food is delicious too.', vi: 'Đồ ăn cũng ngon.' }
            }
          ],
          questions: [
            {
              id: 'q1',
              question: { en: 'What is the town like?', vi: 'Thị trấn như thế nào?' },
              choices: [
                {
                  id: 'a',
                  label: { en: 'Small but quiet and pretty', vi: 'Nhỏ nhưng yên tĩnh và đẹp' }
                },
                { id: 'b', label: { en: 'Big and lively', vi: 'Lớn và náo nhiệt' } },
                { id: 'c', label: { en: 'Old and noisy', vi: 'Cũ và ồn ào' } },
                { id: 'd', label: { en: 'Famous and expensive', vi: 'Nổi tiếng và đắt đỏ' } }
              ],
              correctId: 'a'
            },
            {
              id: 'q2',
              question: { en: 'How is the food?', vi: 'Đồ ăn thế nào?' },
              choices: [
                { id: 'a', label: { en: 'Delicious', vi: 'Ngon' } },
                { id: 'b', label: { en: 'Expensive', vi: 'Đắt' } },
                { id: 'c', label: { en: 'Not very good', vi: 'Không ngon lắm' } },
                { id: 'd', label: { en: 'Spicy', vi: 'Cay' } }
              ],
              correctId: 'a'
            }
          ]
        }
      ],
      reference: [
        {
          title: { en: 'Colors', vi: 'Màu sắc' },
          items: [
            { kana: 'あかい', kanji: '赤い', romaji: 'akai', meaning: { en: 'red', vi: 'đỏ' } },
            {
              kana: 'あおい',
              kanji: '青い',
              romaji: 'aoi',
              meaning: { en: 'blue', vi: 'xanh dương' }
            },
            {
              kana: 'しろい',
              kanji: '白い',
              romaji: 'shiroi',
              meaning: { en: 'white', vi: 'trắng' }
            },
            { kana: 'くろい', kanji: '黒い', romaji: 'kuroi', meaning: { en: 'black', vi: 'đen' } },
            {
              kana: 'きいろい',
              kanji: '黄色い',
              romaji: 'kiiroi',
              meaning: { en: 'yellow', vi: 'vàng' }
            },
            {
              kana: 'みどり',
              kanji: '緑',
              romaji: 'midori',
              meaning: { en: 'green', vi: 'xanh lá' }
            }
          ]
        },
        {
          title: { en: 'More adjectives', vi: 'Tính từ khác' },
          items: [
            { kana: 'ながい', kanji: '長い', romaji: 'nagai', meaning: { en: 'long', vi: 'dài' } },
            {
              kana: 'みじかい',
              kanji: '短い',
              romaji: 'mijikai',
              meaning: { en: 'short', vi: 'ngắn' }
            },
            {
              kana: 'あかるい',
              kanji: '明るい',
              romaji: 'akarui',
              meaning: { en: 'bright', vi: 'sáng' }
            },
            {
              kana: 'くらい',
              kanji: '暗い',
              romaji: 'kurai',
              meaning: { en: 'dark', vi: 'tối' }
            },
            {
              kana: 'かんたん',
              kanji: '簡単',
              romaji: 'kantan',
              meaning: { en: 'simple (na-adj)', vi: 'đơn giản (đuôi na)' }
            }
          ]
        }
      ]
    }
  ])
};
