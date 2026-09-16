import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 3 (Places and shopping (ここ/そこ, prices)). */
export const n5Lesson3: Lesson = {
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
      kana: 'なんかい',
      kanji: '何階',
      romaji: 'nankai',
      ruby: [
        { base: '何', reading: 'なん' },
        { base: '階', reading: 'かい' }
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
      meaning: { en: 'Welcome. (in a shop)', vi: 'Xin chào quý khách. (trong cửa hàng)' }
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
          meaning: { en: 'Welcome.', vi: 'Xin chào quý khách.' }
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
      title: { en: 'Department store floors', vi: 'Sơ đồ tầng cửa hàng bách hóa' },
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
          numberRuby: [{ base: '階', reading: 'がい' }],
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
      title: { en: 'Floor terms', vi: 'Tầng (thuật ngữ)' },
      items: [
        {
          kana: 'おくじょう',
          kanji: '屋上',
          romaji: 'okujō',
          ruby: [
            { base: '屋', reading: 'おく' },
            { base: '上', reading: 'じょう' }
          ],
          meaning: { en: 'rooftop, top floor', vi: 'tầng thượng, sân thượng' }
        },
        {
          kana: 'ちか',
          kanji: '地下',
          romaji: 'chika',
          ruby: [
            { base: '地', reading: 'ち' },
            { base: '下', reading: 'か' }
          ],
          meaning: { en: 'basement, underground level', vi: 'tầng hầm, dưới mặt đất' }
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
};
