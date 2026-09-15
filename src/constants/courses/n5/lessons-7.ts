import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 7 (tools with で, giving and receiving, もう). */
export const n5Lesson7: Lesson = {
  id: 'lesson-7',
  number: 7,
  title: {
    en: 'Giving and receiving',
    vi: 'Cho và nhận'
  },
  focus: {
    en: 'Say what you do something with, who you give to or receive from, and whether it is done already.',
    vi: 'Nói bạn làm bằng gì, cho ai hoặc nhận từ ai, và việc đó đã xong chưa.'
  },
  vocab: [
    {
      kana: 'きります',
      kanji: '切ります',
      romaji: 'kirimasu',
      meaning: { en: 'to cut', vi: 'cắt' },
      ruby: [{ base: '切', reading: 'き' }]
    },
    {
      kana: 'おくります',
      kanji: '送ります',
      romaji: 'okurimasu',
      meaning: { en: 'to send', vi: 'gửi' },
      ruby: [{ base: '送', reading: 'おく' }]
    },
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
      meaning: { en: 'to lend', vi: 'cho mượn, cho vay' },
      ruby: [{ base: '貸', reading: 'か' }]
    },
    {
      kana: 'かります',
      kanji: '借ります',
      romaji: 'karimasu',
      meaning: { en: 'to borrow', vi: 'mượn, vay' },
      ruby: [{ base: '借', reading: 'か' }]
    },
    {
      kana: 'おしえます',
      kanji: '教えます',
      romaji: 'oshiemasu',
      meaning: { en: 'to teach', vi: 'dạy' },
      ruby: [{ base: '教', reading: 'おし' }]
    },
    {
      kana: 'ならいます',
      kanji: '習います',
      romaji: 'naraimasu',
      meaning: { en: 'to learn', vi: 'học, tập' },
      ruby: [{ base: '習', reading: 'なら' }]
    },
    {
      kana: 'かけます',
      romaji: 'kakemasu',
      meaning: { en: 'to make (a phone call)', vi: 'gọi (điện thoại)' }
    },
    {
      kana: 'て',
      kanji: '手',
      romaji: 'te',
      meaning: { en: 'hand', vi: 'tay' },
      ruby: [{ base: '手', reading: 'て' }]
    },
    {
      kana: 'はし',
      romaji: 'hashi',
      meaning: { en: 'chopsticks', vi: 'đũa' }
    },
    {
      kana: 'スプーン',
      romaji: 'supūn',
      meaning: { en: 'spoon', vi: 'thìa' }
    },
    {
      kana: 'ナイフ',
      romaji: 'naifu',
      meaning: { en: 'knife', vi: 'dao' }
    },
    {
      kana: 'フォーク',
      romaji: 'fōku',
      meaning: { en: 'fork', vi: 'dĩa, nĩa' }
    },
    {
      kana: 'はさみ',
      romaji: 'hasami',
      meaning: { en: 'scissors', vi: 'kéo' }
    },
    {
      kana: 'パソコン',
      romaji: 'pasokon',
      meaning: { en: 'personal computer', vi: 'máy vi tính cá nhân' }
    },
    {
      kana: 'ケータイ',
      romaji: 'kētai',
      meaning: { en: 'mobile phone', vi: 'điện thoại di động' }
    },
    {
      kana: 'メール',
      romaji: 'mēru',
      meaning: { en: 'email', vi: 'thư điện tử, email' }
    },
    {
      kana: 'ねんがじょう',
      kanji: '年賀状',
      romaji: 'nengajō',
      meaning: { en: "New Year's card", vi: 'thiếp mừng năm mới' },
      ruby: [
        { base: '年', reading: 'ねん' },
        { base: '賀', reading: 'が' },
        { base: '状', reading: 'じょう' }
      ]
    },
    {
      kana: 'パンチ',
      romaji: 'panchi',
      meaning: { en: 'hole punch', vi: 'cái đục lỗ' }
    },
    {
      kana: 'ホッチキス',
      romaji: 'hotchikisu',
      meaning: { en: 'stapler', vi: 'cái dập ghim' }
    },
    {
      kana: 'セロテープ',
      romaji: 'serotēpu',
      meaning: { en: 'adhesive tape', vi: 'băng dính' }
    },
    {
      kana: 'けしゴム',
      kanji: '消しゴム',
      romaji: 'keshigomu',
      meaning: { en: 'eraser', vi: 'cái tẩy, cục tẩy' },
      ruby: [{ base: '消', reading: 'け' }]
    },
    {
      kana: 'かみ',
      kanji: '紙',
      romaji: 'kami',
      meaning: { en: 'paper', vi: 'giấy' },
      ruby: [{ base: '紙', reading: 'かみ' }]
    },
    {
      kana: 'はな',
      kanji: '花',
      romaji: 'hana',
      meaning: { en: 'flower', vi: 'hoa' },
      ruby: [{ base: '花', reading: 'はな' }]
    },
    {
      kana: 'シャツ',
      romaji: 'shatsu',
      meaning: { en: 'shirt', vi: 'áo sơ mi' }
    },
    {
      kana: 'プレゼント',
      romaji: 'purezento',
      meaning: { en: 'present, gift', vi: 'quà tặng, tặng phẩm' }
    },
    {
      kana: 'にもつ',
      kanji: '荷物',
      romaji: 'nimotsu',
      meaning: { en: 'luggage, package', vi: 'đồ đạc, hành lý' },
      ruby: [
        { base: '荷', reading: 'に' },
        { base: '物', reading: 'もつ' }
      ]
    },
    {
      kana: 'おかね',
      kanji: 'お金',
      romaji: 'okane',
      meaning: { en: 'money', vi: 'tiền' },
      ruby: [{ base: '金', reading: 'かね' }]
    },
    {
      kana: 'きっぷ',
      kanji: '切符',
      romaji: 'kippu',
      meaning: { en: 'ticket', vi: 'vé' },
      ruby: [
        { base: '切', reading: 'きっ' },
        { base: '符', reading: 'ぷ' }
      ]
    },
    {
      kana: 'クリスマス',
      romaji: 'kurisumasu',
      meaning: { en: 'Christmas', vi: 'Giáng sinh' }
    },
    {
      kana: 'ちち',
      kanji: '父',
      romaji: 'chichi',
      meaning: {
        en: 'my father (talking about your own)',
        vi: 'bố (khi nói về bố mình)'
      },
      ruby: [{ base: '父', reading: 'ちち' }]
    },
    {
      kana: 'はは',
      kanji: '母',
      romaji: 'haha',
      meaning: {
        en: 'my mother (talking about your own)',
        vi: 'mẹ (khi nói về mẹ mình)'
      },
      ruby: [{ base: '母', reading: 'はは' }]
    },
    {
      kana: 'おとうさん',
      kanji: 'お父さん',
      romaji: 'otōsan',
      meaning: {
        en: "father (someone else's, or addressing your own)",
        vi: 'bố (bố người khác, hoặc khi gọi bố mình)'
      },
      ruby: [{ base: '父', reading: 'とう' }]
    },
    {
      kana: 'おかあさん',
      kanji: 'お母さん',
      romaji: 'okāsan',
      meaning: {
        en: "mother (someone else's, or addressing your own)",
        vi: 'mẹ (mẹ người khác, hoặc khi gọi mẹ mình)'
      },
      ruby: [{ base: '母', reading: 'かあ' }]
    },
    {
      kana: 'もう',
      romaji: 'mō',
      meaning: { en: 'already', vi: 'đã, rồi' }
    },
    {
      kana: 'まだ',
      romaji: 'mada',
      meaning: { en: 'not yet, still', vi: 'chưa' }
    },
    {
      kana: 'これから',
      romaji: 'korekara',
      meaning: { en: 'from now on, after this', vi: 'từ bây giờ, sau đây' }
    }
  ],
  phrases: [
    {
      kana: 'すてきですね。',
      romaji: 'suteki desu ne.',
      meaning: { en: 'How lovely. / That is nice.', vi: 'Hay nhỉ. / Đẹp nhỉ.' }
    },
    {
      kana: 'いらっしゃい。',
      romaji: 'irasshai.',
      meaning: {
        en: 'Welcome. (greeting a visitor to your home)',
        vi: 'Hoan nghênh anh/chị đã đến chơi.'
      }
    },
    {
      kana: 'どうぞ おあがり ください。',
      kanji: 'どうぞ お上がり ください。',
      romaji: 'dōzo oagari kudasai.',
      meaning: { en: 'Please come in.', vi: 'Mời anh/chị vào.' },
      ruby: [{ base: '上', reading: 'あ' }]
    },
    {
      kana: 'しつれいします。',
      kanji: '失礼します。',
      romaji: 'shitsurei shimasu.',
      meaning: {
        en: "Excuse me. (said when entering someone else's home)",
        vi: 'Xin phép tôi vào. (khi bước vào nhà người khác)'
      },
      ruby: [
        { base: '失', reading: 'しつ' },
        { base: '礼', reading: 'れい' }
      ]
    },
    {
      kana: 'いかがですか。',
      romaji: 'ikaga desu ka.',
      meaning: { en: 'Would you like some?', vi: 'Anh/Chị dùng ~ nhé?' }
    },
    {
      kana: 'いただきます。',
      romaji: 'itadakimasu.',
      meaning: {
        en: 'Thank you for the food. (said before eating)',
        vi: 'Tôi xin dùng. (nói trước khi ăn)'
      }
    },
    {
      kana: 'ごちそうさまでした。',
      romaji: 'gochisōsama deshita.',
      meaning: {
        en: 'Thank you for the meal. (said after eating)',
        vi: 'Cảm ơn vì bữa ăn ngon. (nói sau khi ăn xong)'
      }
    }
  ],
  conversation: [
    {
      id: 'conv-lesson7-visiting-a-home',
      title: { en: 'Visiting a home', vi: 'Đến thăm nhà' },
      speakers: [
        { id: 'yuki', name: 'ユキ' },
        { id: 'tom', name: 'トム' }
      ],
      lines: [
        {
          speakerId: 'yuki',
          jp: 'いらっしゃい。どうぞ お上がり ください。',
          romaji: 'Irasshai. Dōzo oagari kudasai.',
          meaning: { en: 'Welcome. Please come in.', vi: 'Hoan nghênh. Mời bạn vào.' },
          ruby: [{ base: '上', reading: 'あ' }]
        },
        {
          speakerId: 'tom',
          jp: '失礼します。',
          romaji: 'Shitsurei shimasu.',
          meaning: { en: 'Excuse me.', vi: 'Xin phép.' },
          ruby: [
            { base: '失', reading: 'しつ' },
            { base: '礼', reading: 'れい' }
          ]
        },
        {
          speakerId: 'yuki',
          jp: 'お茶は いかがですか。',
          romaji: 'Ocha wa ikaga desu ka.',
          meaning: { en: 'Would you like some tea?', vi: 'Bạn dùng trà nhé?' },
          ruby: [{ base: '茶', reading: 'ちゃ' }]
        },
        {
          speakerId: 'tom',
          jp: 'ええ、ありがとう ございます。',
          romaji: 'Ee, arigatō gozaimasu.',
          meaning: { en: 'Yes, thank you.', vi: 'Vâng, cảm ơn bạn.' }
        },
        {
          speakerId: 'yuki',
          jp: 'どうぞ。',
          romaji: 'Dōzo.',
          meaning: { en: 'Here you are.', vi: 'Mời bạn.' }
        },
        {
          speakerId: 'tom',
          jp: 'いただきます。',
          romaji: 'Itadakimasu.',
          meaning: { en: 'Thank you for the food.', vi: 'Tôi xin dùng.' }
        }
      ]
    },
    {
      id: 'conv-lesson7-a-present',
      title: { en: 'A present', vi: 'Món quà' },
      speakers: [
        { id: 'mai', name: 'マイ' },
        { id: 'alex', name: 'アレックス' }
      ],
      lines: [
        {
          speakerId: 'mai',
          jp: 'この シャツは すてきですね。',
          romaji: 'Kono shatsu wa suteki desu ne.',
          meaning: { en: 'This shirt is lovely.', vi: 'Cái áo sơ mi này đẹp nhỉ.' }
        },
        {
          speakerId: 'alex',
          jp: '母に もらいました。',
          romaji: 'Haha ni moraimashita.',
          meaning: { en: 'I got it from my mother.', vi: 'Tôi được mẹ tặng.' },
          ruby: [{ base: '母', reading: 'はは' }]
        },
        {
          speakerId: 'mai',
          jp: 'そうですか。いいですね。',
          romaji: 'Sō desu ka. Ii desu ne.',
          meaning: { en: 'I see. How nice.', vi: 'Thế à. Hay quá nhỉ.' }
        },
        {
          speakerId: 'alex',
          jp: 'クリスマスの プレゼントです。',
          romaji: 'Kurisumasu no purezento desu.',
          meaning: { en: 'It is a Christmas present.', vi: 'Đó là quà Giáng sinh.' }
        }
      ]
    },
    {
      id: 'conv-lesson7-sending-a-package',
      title: { en: 'Sending a package', vi: 'Gửi hành lý' },
      speakers: [
        { id: 'lin', name: 'リン' },
        { id: 'ken', name: 'ケン' }
      ],
      lines: [
        {
          speakerId: 'lin',
          jp: 'もう 荷物を 送りましたか。',
          romaji: 'Mō nimotsu o okurimashita ka.',
          meaning: {
            en: 'Have you sent the package already?',
            vi: 'Bạn đã gửi hành lý chưa?'
          },
          ruby: [
            { base: '荷', reading: 'に' },
            { base: '物', reading: 'もつ' },
            { base: '送', reading: 'おく' }
          ]
        },
        {
          speakerId: 'ken',
          jp: 'いいえ、まだです。これから 郵便局へ 行きます。',
          romaji: 'Iie, mada desu. Korekara yūbinkyoku e ikimasu.',
          meaning: {
            en: 'No, not yet. I am going to the post office now.',
            vi: 'Chưa. Bây giờ tôi đi bưu điện.'
          },
          ruby: [
            { base: '郵', reading: 'ゆう' },
            { base: '便', reading: 'びん' },
            { base: '局', reading: 'きょく' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'lin',
          jp: '何で 行きますか。',
          romaji: 'Nan de ikimasu ka.',
          meaning: { en: 'How are you going?', vi: 'Bạn đi bằng gì?' },
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'ken',
          jp: '自転車で 行きます。',
          romaji: 'Jitensha de ikimasu.',
          meaning: { en: 'By bicycle.', vi: 'Tôi đi bằng xe đạp.' },
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '転', reading: 'てん' },
            { base: '車', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N で V',
      highlights: ['で'],
      title: { en: 'Tool or method (で)', vi: 'Công cụ hoặc cách thức (で)' },
      explanation: {
        en: 'で after a tool, an instrument, or a language marks what you use to carry out the action. Lesson 6 used で for the place of an action; this is the means.',
        vi: 'で sau công cụ, dụng cụ hoặc ngôn ngữ cho biết bạn dùng gì để thực hiện hành động. Bài 6 dùng で cho địa điểm; ở đây で chỉ phương tiện, cách thức.'
      },
      examples: [
        {
          jp: 'はしで 食べます。',
          romaji: 'Hashi de tabemasu.',
          meaning: { en: 'I eat with chopsticks.', vi: 'Tôi ăn bằng đũa.' },
          ruby: [{ base: '食', reading: 'た' }]
        },
        {
          jp: '日本語で メールを 書きます。',
          romaji: 'Nihongo de mēru o kakimasu.',
          meaning: { en: 'I write emails in Japanese.', vi: 'Tôi viết email bằng tiếng Nhật.' },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          jp: 'はさみで 紙を 切ります。',
          romaji: 'Hasami de kami o kirimasu.',
          meaning: { en: 'I cut paper with scissors.', vi: 'Tôi cắt giấy bằng kéo.' },
          ruby: [
            { base: '紙', reading: 'かみ' },
            { base: '切', reading: 'き' }
          ]
        },
        {
          jp: 'ケータイで 写真を 撮ります。',
          romaji: 'Kētai de shashin o torimasu.',
          meaning: {
            en: 'I take photos with my phone.',
            vi: 'Tôi chụp ảnh bằng điện thoại.'
          },
          ruby: [
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '撮', reading: 'と' }
          ]
        }
      ],
      answers: {
        explanation: {
          en: 'Ask which tool or method with 何で. Answer with the tool + で.',
          vi: 'Hỏi bằng công cụ hay cách thức nào với 何で. Trả lời bằng công cụ + で.'
        },
        explanationRuby: [{ base: '何', reading: 'なん' }],
        highlights: ['何', 'で', 'か'],
        examples: [
          {
            jp: '何で ごはんを 食べますか。',
            romaji: 'Nan de gohan o tabemasu ka.',
            meaning: { en: 'What do you eat with?', vi: 'Bạn ăn cơm bằng gì?' },
            dialogueGroup: 'with-what',
            ruby: [
              { base: '何', reading: 'なん' },
              { base: '食', reading: 'た' }
            ]
          },
          {
            jp: 'はしで 食べます。',
            romaji: 'Hashi de tabemasu.',
            meaning: { en: 'With chopsticks.', vi: 'Tôi ăn bằng đũa.' },
            dialogueGroup: 'with-what',
            ruby: [{ base: '食', reading: 'た' }]
          }
        ]
      }
    },
    {
      pattern: 'N は 〜語 で 何 ですか',
      patternRuby: [
        { base: '語', reading: 'ご' },
        { base: '何', reading: 'なん' }
      ],
      highlights: ['は', 'で', '何', 'です', 'か'],
      title: { en: 'Asking for a translation', vi: 'Hỏi cách nói ở tiếng khác' },
      explanation: {
        en: 'Ask how a word or a sentence is said in another language. The language name plus で marks the language you want it in.',
        vi: 'Hỏi một từ hay một câu được nói thế nào trong ngôn ngữ khác. Tên ngôn ngữ kèm で cho biết bạn muốn nói bằng tiếng nào.'
      },
      examples: [
        {
          jp: '「ありがとう」は 英語で 何ですか。',
          romaji: '"Arigatō" wa eigo de nan desu ka.',
          meaning: {
            en: 'How do you say "arigatou" in English?',
            vi: '"Arigatou" tiếng Anh nói thế nào?'
          },
          dialogueGroup: 'translate-thanks',
          ruby: [
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          jp: '「Thank you」です。',
          romaji: '"Thank you" desu.',
          meaning: { en: 'It is "thank you".', vi: 'Là "thank you".' },
          dialogueGroup: 'translate-thanks'
        },
        {
          jp: '「Thank you」は 日本語で 何ですか。',
          romaji: '"Thank you" wa nihongo de nan desu ka.',
          meaning: {
            en: 'How do you say "thank you" in Japanese?',
            vi: '"Thank you" tiếng Nhật nói thế nào?'
          },
          dialogueGroup: 'translate-thanks-jp',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          jp: '「ありがとう」です。',
          romaji: '"Arigatō" desu.',
          meaning: { en: 'It is "arigatou".', vi: 'Là "arigatou".' },
          dialogueGroup: 'translate-thanks-jp'
        }
      ]
    },
    {
      pattern: 'N1 に N2 を あげます',
      highlights: ['に', 'を', ['あげます', 'あげました', '貸しました', '教えます']],
      title: { en: 'Giving to someone (に)', vi: 'Cho ai đó (に)' },
      explanation: {
        en: 'Verbs such as あげます, 貸します and 教えます pass something - an object, information, a skill - to another person. Mark that person with に.',
        vi: 'Các động từ như あげます, 貸します, 教えます chuyển một thứ gì đó - đồ vật, thông tin, kỹ năng - tới người khác. Đánh dấu người nhận bằng に.'
      },
      explanationRuby: [
        { base: '貸', reading: 'か' },
        { base: '教', reading: 'おし' }
      ],
      examples: [
        {
          jp: '山田さんに 花を あげました。',
          romaji: 'Yamada-san ni hana o agemashita.',
          meaning: {
            en: 'I gave flowers to Yamada-san.',
            vi: 'Tôi đã tặng hoa cho anh/chị Yamada.'
          },
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '田', reading: 'だ' },
            { base: '花', reading: 'はな' }
          ]
        },
        {
          jp: 'リンさんに 本を 貸しました。',
          romaji: 'Rin-san ni hon o kashimashita.',
          meaning: { en: 'I lent Lin a book.', vi: 'Tôi đã cho Lin mượn sách.' },
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '貸', reading: 'か' }
          ]
        },
        {
          jp: 'ケンさんに 英語を 教えます。',
          romaji: 'Ken-san ni eigo o oshiemasu.',
          meaning: { en: 'I teach Ken English.', vi: 'Tôi dạy tiếng Anh cho Ken.' },
          ruby: [
            { base: '英', reading: 'えい' },
            { base: '語', reading: 'ご' },
            { base: '教', reading: 'おし' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 に / から N2 を もらいます',
      highlights: ['に', 'から', 'を', ['もらいました', '借りました', '習います']],
      title: { en: 'Receiving from someone (に / から)', vi: 'Nhận từ ai đó (に / から)' },
      explanation: {
        en: 'Verbs such as もらいます, 借ります and 習います bring something to you from someone. Mark the source with に or から. When the source is an organization - a company, a school, a bank - use から, not に.',
        vi: 'Các động từ như もらいます, 借ります, 習います nhận một thứ gì đó từ người khác. Đánh dấu nguồn bằng に hoặc から. Khi nguồn là một tổ chức - công ty, trường học, ngân hàng - thì dùng から, không dùng に.'
      },
      explanationRuby: [
        { base: '借', reading: 'か' },
        { base: '習', reading: 'なら' }
      ],
      examples: [
        {
          jp: '山田さんに 花を もらいました。',
          romaji: 'Yamada-san ni hana o moraimashita.',
          meaning: {
            en: 'I received flowers from Yamada-san.',
            vi: 'Tôi đã nhận hoa từ anh/chị Yamada.'
          },
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '田', reading: 'だ' },
            { base: '花', reading: 'はな' }
          ]
        },
        {
          jp: 'リンさんに 本を 借りました。',
          romaji: 'Rin-san ni hon o karimashita.',
          meaning: { en: 'I borrowed a book from Lin.', vi: 'Tôi đã mượn sách của Lin.' },
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '借', reading: 'か' }
          ]
        },
        {
          jp: '先生に 日本語を 習います。',
          romaji: 'Sensei ni nihongo o naraimasu.',
          meaning: {
            en: 'I learn Japanese from my teacher.',
            vi: 'Tôi học tiếng Nhật từ thầy/cô.'
          },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '習', reading: 'なら' }
          ]
        },
        {
          jp: '銀行から お金を 借りました。',
          romaji: 'Ginkō kara okane o karimashita.',
          meaning: {
            en: 'I borrowed money from the bank.',
            vi: 'Tôi đã vay tiền từ ngân hàng.'
          },
          ruby: [
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '金', reading: 'かね' },
            { base: '借', reading: 'か' }
          ]
        }
      ]
    },
    {
      pattern: 'もう V ました',
      highlights: ['もう', 'ました'],
      title: { en: 'Already done (もう)', vi: 'Đã làm rồi (もう)' },
      explanation: {
        en: 'もう means "already" and goes with the past form ました to say an action is finished as of now.',
        vi: 'もう nghĩa là "đã, rồi", đi với dạng quá khứ ました để nói một hành động đã xong ở thời điểm hiện tại.'
      },
      examples: [
        {
          jp: 'もう 荷物を 送りました。',
          romaji: 'Mō nimotsu o okurimashita.',
          meaning: { en: 'I have already sent the package.', vi: 'Tôi đã gửi hành lý rồi.' },
          ruby: [
            { base: '荷', reading: 'に' },
            { base: '物', reading: 'もつ' },
            { base: '送', reading: 'おく' }
          ]
        },
        {
          jp: 'もう 昼ごはんを 食べました。',
          romaji: 'Mō hirugohan o tabemashita.',
          meaning: { en: 'I have already had lunch.', vi: 'Tôi đã ăn cơm trưa rồi.' },
          ruby: [
            { base: '昼', reading: 'ひる' },
            { base: '食', reading: 'た' }
          ]
        }
      ],
      answers: {
        explanation: {
          en: 'Answer a もう〜ましたか question with はい、もう〜ました, or with いいえ、まだです when it is not done. Do not answer with ませんでした - that would mean you never did it at all.',
          vi: 'Trả lời câu hỏi もう〜ましたか bằng はい、もう〜ました, hoặc いいえ、まだです khi chưa xong. Không trả lời bằng ませんでした - câu đó có nghĩa là bạn chưa từng làm việc ấy.'
        },
        highlights: ['もう', 'まだ', 'ました', 'です', 'か'],
        examples: [
          {
            jp: 'もう 切符を 買いましたか。',
            romaji: 'Mō kippu o kaimashita ka.',
            meaning: { en: 'Have you bought the ticket yet?', vi: 'Bạn đã mua vé chưa?' },
            dialogueGroup: 'already-ticket',
            ruby: [
              { base: '切', reading: 'きっ' },
              { base: '符', reading: 'ぷ' },
              { base: '買', reading: 'か' }
            ]
          },
          {
            jp: 'はい、もう 買いました。',
            romaji: 'Hai, mō kaimashita.',
            meaning: { en: 'Yes, I already bought it.', vi: 'Rồi, tôi đã mua rồi.' },
            dialogueGroup: 'already-ticket',
            ruby: [{ base: '買', reading: 'か' }]
          },
          {
            jp: 'いいえ、まだです。',
            romaji: 'Iie, mada desu.',
            meaning: { en: 'No, not yet.', vi: 'Chưa, tôi chưa mua.' }
          }
        ]
      }
    },
    {
      pattern: 'N [は] / N [を]',
      highlights: ['は', 'を', 'です', 'か'],
      title: { en: 'Dropping particles in speech', vi: 'Lược trợ từ khi nói' },
      explanation: {
        en: 'In casual conversation は and を are often left out when the link between the sentences already makes the meaning clear: この スプーン、すてきですね。',
        vi: 'Trong hội thoại thân mật, は và を thường được lược khi quan hệ giữa các câu đã làm rõ ý: この スプーン、すてきですね。'
      },
      examples: [
        {
          jp: 'この スプーンは すてきですね。',
          romaji: 'Kono supūn wa suteki desu ne.',
          meaning: { en: 'This spoon is lovely.', vi: 'Cái thìa này đẹp nhỉ.' }
        },
        {
          jp: 'お茶は いかがですか。',
          romaji: 'Ocha wa ikaga desu ka.',
          meaning: { en: 'Would you like some tea?', vi: 'Bạn dùng trà nhé?' },
          ruby: [{ base: '茶', reading: 'ちゃ' }]
        },
        {
          jp: '年賀状を 書きますか。',
          romaji: 'Nengajō o kakimasu ka.',
          meaning: {
            en: "Are you writing New Year's cards?",
            vi: 'Bạn có viết thiếp mừng năm mới không?'
          },
          ruby: [
            { base: '年', reading: 'ねん' },
            { base: '賀', reading: 'が' },
            { base: '状', reading: 'じょう' },
            { base: '書', reading: 'か' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson7-new-year-cards',
      title: { en: "New Year's cards", vi: 'Thiếp mừng năm mới' },
      lines: [
        {
          jp: '12月に 年賀状を 書きます。',
          romaji: 'Jūni-gatsu ni nengajō o kakimasu.',
          meaning: {
            en: "I write New Year's cards in December.",
            vi: 'Tháng 12 tôi viết thiếp mừng năm mới.'
          },
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '年', reading: 'ねん' },
            { base: '賀', reading: 'が' },
            { base: '状', reading: 'じょう' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          jp: '先生と 友達に 送ります。',
          romaji: 'Sensei to tomodachi ni okurimasu.',
          meaning: {
            en: 'I send them to my teacher and my friends.',
            vi: 'Tôi gửi cho thầy/cô và bạn bè.'
          },
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '送', reading: 'おく' }
          ]
        },
        {
          jp: '母に 紙を もらいました。',
          romaji: 'Haha ni kami o moraimashita.',
          meaning: {
            en: 'I got the paper from my mother.',
            vi: 'Tôi được mẹ cho giấy.'
          },
          ruby: [
            { base: '母', reading: 'はは' },
            { base: '紙', reading: 'かみ' }
          ]
        },
        {
          jp: '私は いつも パソコンで 書きます。',
          romaji: 'Watashi wa itsumo pasokon de kakimasu.',
          meaning: {
            en: 'I always write them on my computer.',
            vi: 'Tôi luôn viết bằng máy vi tính.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '書', reading: 'か' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: "When does the speaker write New Year's cards?",
            vi: 'Người nói viết thiếp mừng năm mới vào lúc nào?'
          },
          choices: [
            { id: 'a', label: { en: 'In December', vi: 'Tháng 12' } },
            { id: 'b', label: { en: 'In January', vi: 'Tháng 1' } },
            { id: 'c', label: { en: 'At Christmas', vi: 'Dịp Giáng sinh' } },
            { id: 'd', label: { en: 'Every Sunday', vi: 'Mỗi chủ nhật' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'Who did the paper come from?', vi: 'Giấy là do ai cho?' },
          choices: [
            { id: 'a', label: { en: 'The teacher', vi: 'Thầy/cô' } },
            { id: 'b', label: { en: 'A friend', vi: 'Một người bạn' } },
            { id: 'c', label: { en: 'The mother', vi: 'Mẹ' } },
            { id: 'd', label: { en: 'The father', vi: 'Bố' } }
          ],
          correctId: 'c'
        },
        {
          id: 'q3',
          question: { en: 'What does the speaker write with?', vi: 'Người nói viết bằng gì?' },
          choices: [
            { id: 'a', label: { en: 'A computer', vi: 'Máy vi tính' } },
            { id: 'b', label: { en: 'A mobile phone', vi: 'Điện thoại di động' } },
            { id: 'c', label: { en: 'A pencil', vi: 'Bút chì' } },
            { id: 'd', label: { en: 'By hand', vi: 'Bằng tay' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson7-lending',
      title: { en: 'Lending and borrowing', vi: 'Cho mượn và đi mượn' },
      lines: [
        {
          jp: 'きのう リンさんに 本を 貸しました。',
          romaji: 'Kinō Rin-san ni hon o kashimashita.',
          meaning: {
            en: 'Yesterday I lent Lin a book.',
            vi: 'Hôm qua tôi đã cho Lin mượn sách.'
          },
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '貸', reading: 'か' }
          ]
        },
        {
          jp: 'リンさんは 私に メールを 送りました。',
          romaji: 'Rin-san wa watashi ni mēru o okurimashita.',
          meaning: { en: 'Lin sent me an email.', vi: 'Lin đã gửi email cho tôi.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '送', reading: 'おく' }
          ]
        },
        {
          jp: '私は 銀行から お金を 借りました。',
          romaji: 'Watashi wa ginkō kara okane o karimashita.',
          meaning: {
            en: 'I borrowed money from the bank.',
            vi: 'Tôi đã vay tiền từ ngân hàng.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '金', reading: 'かね' },
            { base: '借', reading: 'か' }
          ]
        },
        {
          jp: 'これから 切符を 買います。',
          romaji: 'Korekara kippu o kaimasu.',
          meaning: { en: 'I will buy a ticket after this.', vi: 'Sau đây tôi sẽ mua vé.' },
          ruby: [
            { base: '切', reading: 'きっ' },
            { base: '符', reading: 'ぷ' },
            { base: '買', reading: 'か' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What did the speaker lend Lin?', vi: 'Người nói cho Lin mượn gì?' },
          choices: [
            { id: 'a', label: { en: 'A book', vi: 'Sách' } },
            { id: 'b', label: { en: 'Money', vi: 'Tiền' } },
            { id: 'c', label: { en: 'Scissors', vi: 'Kéo' } },
            { id: 'd', label: { en: 'A ticket', vi: 'Vé' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'Where did the money come from?', vi: 'Tiền vay từ đâu?' },
          choices: [
            { id: 'a', label: { en: 'From Lin', vi: 'Từ Lin' } },
            { id: 'b', label: { en: 'From the bank', vi: 'Từ ngân hàng' } },
            { id: 'c', label: { en: 'From the mother', vi: 'Từ mẹ' } },
            { id: 'd', label: { en: 'From the post office', vi: 'Từ bưu điện' } }
          ],
          correctId: 'b'
        }
      ]
    },
    {
      id: 'reading-lesson7-christmas',
      title: { en: 'A Christmas present', vi: 'Quà Giáng sinh' },
      lines: [
        {
          jp: 'クリスマスに 父に プレゼントを あげました。',
          romaji: 'Kurisumasu ni chichi ni purezento o agemashita.',
          meaning: {
            en: 'At Christmas I gave my father a present.',
            vi: 'Dịp Giáng sinh tôi đã tặng quà cho bố.'
          },
          ruby: [{ base: '父', reading: 'ちち' }]
        },
        {
          jp: 'シャツを あげました。',
          romaji: 'Shatsu o agemashita.',
          meaning: { en: 'I gave him a shirt.', vi: 'Tôi đã tặng một cái áo sơ mi.' }
        },
        {
          jp: '母から 花を もらいました。',
          romaji: 'Haha kara hana o moraimashita.',
          meaning: {
            en: 'I received flowers from my mother.',
            vi: 'Tôi đã nhận hoa từ mẹ.'
          },
          ruby: [
            { base: '母', reading: 'はは' },
            { base: '花', reading: 'はな' }
          ]
        },
        {
          jp: 'もう メールを 送りました。',
          romaji: 'Mō mēru o okurimashita.',
          meaning: { en: 'I have already sent an email.', vi: 'Tôi đã gửi email rồi.' },
          ruby: [{ base: '送', reading: 'おく' }]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What did the speaker give their father?', vi: 'Người nói tặng bố gì?' },
          choices: [
            { id: 'a', label: { en: 'Flowers', vi: 'Hoa' } },
            { id: 'b', label: { en: 'A shirt', vi: 'Áo sơ mi' } },
            { id: 'c', label: { en: 'A book', vi: 'Sách' } },
            { id: 'd', label: { en: 'Money', vi: 'Tiền' } }
          ],
          correctId: 'b'
        },
        {
          id: 'q2',
          question: {
            en: 'What did the speaker receive from their mother?',
            vi: 'Người nói nhận gì từ mẹ?'
          },
          choices: [
            { id: 'a', label: { en: 'Flowers', vi: 'Hoa' } },
            { id: 'b', label: { en: 'A shirt', vi: 'Áo sơ mi' } },
            { id: 'c', label: { en: 'Paper', vi: 'Giấy' } },
            { id: 'd', label: { en: 'A present', vi: 'Quà' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'Has the email been sent?', vi: 'Email đã gửi chưa?' },
          choices: [
            { id: 'a', label: { en: 'Yes, already', vi: 'Rồi, đã gửi' } },
            { id: 'b', label: { en: 'Not yet', vi: 'Chưa' } },
            { id: 'c', label: { en: 'It will be sent tomorrow', vi: 'Mai mới gửi' } },
            { id: 'd', label: { en: 'The text does not say', vi: 'Bài không nói' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'My own family', vi: 'Gia đình của tôi' },
      intro: {
        en: 'Humble words, used when you talk about your own relatives to someone else.',
        vi: 'Từ khiêm nhường, dùng khi nói về người thân của mình với người khác.'
      },
      items: [
        {
          kana: 'そふ',
          kanji: '祖父',
          romaji: 'sofu',
          meaning: { en: 'my grandfather', vi: 'ông của tôi' },
          ruby: [
            { base: '祖', reading: 'そ' },
            { base: '父', reading: 'ふ' }
          ]
        },
        {
          kana: 'そぼ',
          kanji: '祖母',
          romaji: 'sobo',
          meaning: { en: 'my grandmother', vi: 'bà của tôi' },
          ruby: [
            { base: '祖', reading: 'そ' },
            { base: '母', reading: 'ぼ' }
          ]
        },
        {
          kana: 'そふぼ',
          kanji: '祖父母',
          romaji: 'sofubo',
          meaning: { en: 'my grandparents', vi: 'ông bà của tôi' },
          ruby: [
            { base: '祖', reading: 'そ' },
            { base: '父', reading: 'ふ' },
            { base: '母', reading: 'ぼ' }
          ]
        },
        {
          kana: 'りょうしん',
          kanji: '両親',
          romaji: 'ryōshin',
          meaning: { en: 'my parents', vi: 'bố mẹ tôi' },
          ruby: [
            { base: '両', reading: 'りょう' },
            { base: '親', reading: 'しん' }
          ]
        },
        {
          kana: 'あに',
          kanji: '兄',
          romaji: 'ani',
          meaning: { en: 'my older brother', vi: 'anh trai tôi' },
          ruby: [{ base: '兄', reading: 'あに' }]
        },
        {
          kana: 'あね',
          kanji: '姉',
          romaji: 'ane',
          meaning: { en: 'my older sister', vi: 'chị gái tôi' },
          ruby: [{ base: '姉', reading: 'あね' }]
        },
        {
          kana: 'おとうと',
          kanji: '弟',
          romaji: 'otōto',
          meaning: { en: 'my younger brother', vi: 'em trai tôi' },
          ruby: [{ base: '弟', reading: 'おとうと' }]
        },
        {
          kana: 'いもうと',
          kanji: '妹',
          romaji: 'imōto',
          meaning: { en: 'my younger sister', vi: 'em gái tôi' },
          ruby: [{ base: '妹', reading: 'いもうと' }]
        },
        {
          kana: 'きょうだい',
          kanji: '兄弟',
          romaji: 'kyōdai',
          meaning: { en: 'my siblings', vi: 'anh chị em tôi' },
          ruby: [
            { base: '兄', reading: 'きょう' },
            { base: '弟', reading: 'だい' }
          ]
        },
        {
          kana: 'おっと',
          kanji: '夫',
          romaji: 'otto',
          meaning: { en: 'my husband', vi: 'chồng tôi' },
          ruby: [{ base: '夫', reading: 'おっと' }]
        },
        {
          kana: 'つま',
          kanji: '妻',
          romaji: 'tsuma',
          meaning: { en: 'my wife', vi: 'vợ tôi' },
          ruby: [{ base: '妻', reading: 'つま' }]
        },
        {
          kana: 'ふうふ',
          kanji: '夫婦',
          romaji: 'fūfu',
          meaning: { en: 'married couple', vi: 'vợ chồng' },
          ruby: [
            { base: '夫', reading: 'ふう' },
            { base: '婦', reading: 'ふ' }
          ]
        },
        {
          kana: 'むすこ',
          kanji: '息子',
          romaji: 'musuko',
          meaning: { en: 'my son', vi: 'con trai tôi' },
          ruby: [
            { base: '息', reading: 'むす' },
            { base: '子', reading: 'こ' }
          ]
        },
        {
          kana: 'むすめ',
          kanji: '娘',
          romaji: 'musume',
          meaning: { en: 'my daughter', vi: 'con gái tôi' },
          ruby: [{ base: '娘', reading: 'むすめ' }]
        },
        {
          kana: 'こども',
          kanji: '子ども',
          romaji: 'kodomo',
          meaning: { en: 'my children', vi: 'con của tôi' },
          ruby: [{ base: '子', reading: 'こ' }]
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: "Someone else's family", vi: 'Gia đình người khác' },
      intro: {
        en: "Polite words for another person's relatives. The prefixes お and ご plus the suffix さん show respect.",
        vi: 'Từ lịch sự dùng cho người thân của người khác. Tiền tố お, ご cùng hậu tố さん thể hiện sự tôn trọng.'
      },
      items: [
        {
          kana: 'おじいさん',
          romaji: 'ojiisan',
          meaning: { en: 'grandfather', vi: 'ông' }
        },
        {
          kana: 'おばあさん',
          romaji: 'obāsan',
          meaning: { en: 'grandmother', vi: 'bà' }
        },
        {
          kana: 'ごりょうしん',
          kanji: 'ご両親',
          romaji: 'goryōshin',
          meaning: { en: 'parents', vi: 'bố mẹ' },
          ruby: [
            { base: '両', reading: 'りょう' },
            { base: '親', reading: 'しん' }
          ]
        },
        {
          kana: 'おにいさん',
          kanji: 'お兄さん',
          romaji: 'oniisan',
          meaning: { en: 'older brother', vi: 'anh trai' },
          ruby: [{ base: '兄', reading: 'にい' }]
        },
        {
          kana: 'おねえさん',
          kanji: 'お姉さん',
          romaji: 'onēsan',
          meaning: { en: 'older sister', vi: 'chị gái' },
          ruby: [{ base: '姉', reading: 'ねえ' }]
        },
        {
          kana: 'おとうとさん',
          kanji: '弟さん',
          romaji: 'otōtosan',
          meaning: { en: 'younger brother', vi: 'em trai' },
          ruby: [{ base: '弟', reading: 'おとうと' }]
        },
        {
          kana: 'いもうとさん',
          kanji: '妹さん',
          romaji: 'imōtosan',
          meaning: { en: 'younger sister', vi: 'em gái' },
          ruby: [{ base: '妹', reading: 'いもうと' }]
        },
        {
          kana: 'ごきょうだい',
          kanji: 'ご兄弟',
          romaji: 'gokyōdai',
          meaning: { en: 'siblings', vi: 'anh chị em' },
          ruby: [
            { base: '兄', reading: 'きょう' },
            { base: '弟', reading: 'だい' }
          ]
        },
        {
          kana: 'ごしゅじん',
          kanji: 'ご主人',
          romaji: 'goshujin',
          meaning: { en: 'husband', vi: 'chồng' },
          ruby: [
            { base: '主', reading: 'しゅ' },
            { base: '人', reading: 'じん' }
          ]
        },
        {
          kana: 'おくさん',
          kanji: '奥さん',
          romaji: 'okusan',
          meaning: { en: 'wife', vi: 'vợ' },
          ruby: [{ base: '奥', reading: 'おく' }]
        },
        {
          kana: 'ごふうふ',
          kanji: 'ご夫婦',
          romaji: 'gofūfu',
          meaning: { en: 'married couple', vi: 'vợ chồng' },
          ruby: [
            { base: '夫', reading: 'ふう' },
            { base: '婦', reading: 'ふ' }
          ]
        },
        {
          kana: 'むすこさん',
          kanji: '息子さん',
          romaji: 'musukosan',
          meaning: { en: 'son', vi: 'con trai' },
          ruby: [
            { base: '息', reading: 'むす' },
            { base: '子', reading: 'こ' }
          ]
        },
        {
          kana: 'むすめさん',
          kanji: '娘さん',
          romaji: 'musumesan',
          meaning: { en: 'daughter', vi: 'con gái' },
          ruby: [{ base: '娘', reading: 'むすめ' }]
        },
        {
          kana: 'おこさん',
          kanji: 'お子さん',
          romaji: 'okosan',
          meaning: { en: 'children', vi: 'con' },
          ruby: [{ base: '子', reading: 'こ' }]
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Names in this lesson', vi: 'Tên riêng trong bài' },
      includeInQuiz: false,
      items: [
        {
          kana: 'スペイン',
          romaji: 'Supein',
          meaning: { en: 'Spain', vi: 'Tây Ban Nha' }
        }
      ]
    }
  ]
};
