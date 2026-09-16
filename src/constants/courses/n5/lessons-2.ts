import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 2 (Things around you (これ/その/あの, の)). */
export const n5Lesson2: Lesson = {
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
};
