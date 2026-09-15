import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 13 (欲しい, 〜たい, purpose に, どこか/何か). */
export const n5Lesson13: Lesson = {
  id: 'lesson-13',
  number: 13,
  title: {
    en: 'Wants and plans',
    vi: 'Muốn và dự định'
  },
  focus: {
    en: 'Say what you want with 欲しい and 〜たい, and explain where you go with 〜に 行きます for a purpose.',
    vi: 'Nói muốn có gì với 欲しい và muốn làm gì với 〜たい; nói đi đâu để làm gì bằng 〜に 行きます.'
  },
  vocab: [
    {
      kana: 'あそびます',
      kanji: '遊びます',
      romaji: 'asobimasu',
      meaning: { en: 'to play', vi: 'chơi' },
      ruby: [{ base: '遊', reading: 'あそ' }]
    },
    {
      kana: 'およぎます',
      kanji: '泳ぎます',
      romaji: 'oyogimasu',
      meaning: { en: 'to swim', vi: 'bơi' },
      ruby: [{ base: '泳', reading: 'およ' }]
    },
    {
      kana: 'むかえます',
      kanji: '迎えます',
      romaji: 'mukaemasu',
      meaning: { en: 'to pick up, to meet (someone arriving)', vi: 'đón' },
      ruby: [{ base: '迎', reading: 'むか' }]
    },
    {
      kana: 'つかれます',
      kanji: '疲れます',
      romaji: 'tsukaremasu',
      meaning: {
        en: 'to get tired (state: つかれました)',
        vi: 'mệt (trạng thái: つかれました)'
      },
      ruby: [{ base: '疲', reading: 'つか' }]
    },
    {
      kana: 'けっこんします',
      kanji: '結婚します',
      romaji: 'kekkon shimasu',
      meaning: { en: 'to get married', vi: 'kết hôn, cưới' },
      ruby: [{ base: '結', reading: 'けっ' }]
    },
    {
      kana: 'かいものします',
      kanji: '買い物します',
      romaji: 'kaimono shimasu',
      meaning: { en: 'to shop', vi: 'mua sắm' },
      ruby: [{ base: '買', reading: 'か' }]
    },
    {
      kana: 'しょくじします',
      kanji: '食事します',
      romaji: 'shokuji shimasu',
      meaning: { en: 'to have a meal', vi: 'ăn cơm, dùng bữa' },
      ruby: [{ base: '食', reading: 'しょく' }]
    },
    {
      kana: 'さんぽします',
      kanji: '散歩します',
      romaji: 'sanpo shimasu',
      meaning: {
        en: 'to take a walk (公園を～: walk in the park)',
        vi: 'đi dạo (公園を～: dạo ở công viên)'
      },
      ruby: [{ base: '散', reading: 'さん' }]
    },
    {
      kana: 'たいへん [な]',
      kanji: '大変 [な]',
      romaji: 'taihen [na]',
      meaning: { en: 'tough, hard (na-adj)', vi: 'vất vả, khó khăn (tính từ な)' },
      ruby: [{ base: '大', reading: 'たい' }]
    },
    {
      kana: 'ほしい',
      kanji: '欲しい',
      romaji: 'hoshii',
      meaning: { en: 'to want (a thing)', vi: 'muốn có' },
      ruby: [{ base: '欲', reading: 'ほ' }]
    },
    {
      kana: 'ひろい',
      kanji: '広い',
      romaji: 'hiroi',
      meaning: { en: 'spacious, wide', vi: 'rộng' },
      ruby: [{ base: '広', reading: 'ひろ' }]
    },
    {
      kana: 'せまい',
      kanji: '狭い',
      romaji: 'semai',
      meaning: { en: 'narrow, cramped', vi: 'chật, hẹp' },
      ruby: [{ base: '狭', reading: 'せま' }]
    },
    {
      kana: 'プール',
      romaji: 'pūru',
      meaning: { en: 'swimming pool', vi: 'bể bơi' }
    },
    {
      kana: 'かわ',
      kanji: '川',
      romaji: 'kawa',
      meaning: { en: 'river', vi: 'sông' },
      ruby: [{ base: '川', reading: 'かわ' }]
    },
    {
      kana: 'びじゅつ',
      kanji: '美術',
      romaji: 'bijutsu',
      meaning: { en: 'fine arts', vi: 'mỹ thuật' },
      ruby: [{ base: '美', reading: 'び' }]
    },
    {
      kana: 'つり',
      kanji: '釣り',
      romaji: 'tsuri',
      meaning: { en: 'fishing (～を します: go fishing)', vi: 'câu cá (～を します: đi câu)' },
      ruby: [{ base: '釣', reading: 'つ' }]
    },
    {
      kana: 'スキー',
      romaji: 'sukī',
      meaning: { en: 'skiing (～を します: go skiing)', vi: 'trượt tuyết (～を します: đi trượt)' }
    },
    {
      kana: 'しゅうまつ',
      kanji: '週末',
      romaji: 'shūmatsu',
      meaning: { en: 'weekend', vi: 'cuối tuần' },
      ruby: [{ base: '週', reading: 'しゅう' }]
    },
    {
      kana: 'おしょうがつ',
      kanji: 'お正月',
      romaji: 'oshōgatsu',
      meaning: { en: 'New Year', vi: 'Tết' },
      ruby: [{ base: '正', reading: 'しょう' }]
    },
    {
      kana: '～ごろ',
      romaji: '~goro',
      meaning: { en: 'around (time)', vi: 'khoảng (thời gian)' }
    },
    {
      kana: 'なにか',
      kanji: '何か',
      romaji: 'nanika',
      meaning: { en: 'something', vi: 'cái gì đó' },
      ruby: [{ base: '何', reading: 'なに' }]
    },
    {
      kana: 'どこか',
      romaji: 'dokoka',
      meaning: { en: 'somewhere', vi: 'đâu đó' }
    }
  ],
  phrases: [
    {
      kana: 'のどが かわきます。',
      kanji: 'のどが 渇きます。',
      romaji: 'Nodo ga kawakimasu.',
      meaning: {
        en: 'I get thirsty. (state: のどが かわきました)',
        vi: 'Khát. (trạng thái: のどが かわきました)'
      },
      ruby: [{ base: '渇', reading: 'かわ' }]
    },
    {
      kana: 'おなかが すきます。',
      romaji: 'Onaka ga sukimasu.',
      meaning: {
        en: 'I get hungry. (state: おなかが すきました)',
        vi: 'Đói. (trạng thái: おなかが すきました)'
      }
    },
    {
      kana: 'そう しましょう。',
      romaji: 'Sō shimashō.',
      meaning: { en: 'Let\u0027s do that.', vi: 'Nhất trí. / Hãy làm vậy đi.' }
    },
    {
      kana: 'ご注文は？',
      kanji: 'ご注文は？',
      romaji: 'Go-chūmon wa?',
      meaning: { en: 'Your order?', vi: 'Anh/Chị dùng món gì ạ?' },
      ruby: [
        { base: '注', reading: 'ちゅう' },
        { base: '文', reading: 'もん' }
      ]
    },
    {
      kana: 'ていしょく',
      kanji: '定食',
      romaji: 'teishoku',
      meaning: { en: 'set meal', vi: 'cơm suất' },
      ruby: [{ base: '定', reading: 'てい' }]
    },
    {
      kana: 'ぎゅうどん',
      kanji: '牛どん',
      romaji: 'gyūdon',
      meaning: { en: 'beef bowl', vi: 'cơm thịt bò (gyudon)' },
      ruby: [{ base: '牛', reading: 'ぎゅう' }]
    },
    {
      kana: 'しょうしょう お待ちください。',
      kanji: '少々 お待ちください。',
      romaji: 'Shōshō omachi kudasai.',
      meaning: { en: 'Please wait a moment.', vi: 'Xin vui lòng đợi một chút.' },
      ruby: [
        { base: '少', reading: 'しょう' },
        { base: '待', reading: 'ま' }
      ]
    },
    {
      kana: '～で ございます。',
      romaji: '~ de gozaimasu.',
      meaning: { en: 'Polite form of です.', vi: 'Cách nói lịch sự của です.' }
    },
    {
      kana: 'べつべつに',
      kanji: '別々に',
      romaji: 'betsubetsu ni',
      meaning: { en: 'separately', vi: 'riêng, riêng ra' },
      ruby: [{ base: '別', reading: 'べつ' }]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson13-lunch',
      title: { en: 'Lunch at Tsuru-ya', vi: 'Ăn trưa ở Tsuru-ya' },
      speakers: [
        { id: 'yamada', name: '山田' },
        { id: 'miller', name: 'ミラー' },
        { id: 'staff', name: '店員' }
      ],
      lines: [
        {
          speakerId: 'yamada',
          jp: 'もう 12時ですね。ランチに 行きませんか。',
          romaji: 'Mō jū-niji desu ne. Ranchi ni ikimasen ka.',
          meaning: {
            en: 'It is already 12. Shall we go for lunch?',
            vi: 'Đã 12 giờ rồi đấy. Anh có đi ăn trưa không?'
          },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'miller',
          jp: '行きましょう。',
          romaji: 'Ikimashō.',
          meaning: { en: 'Let\u0027s go.', vi: 'Có.' },
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          speakerId: 'yamada',
          jp: 'どこへ 行きますか。',
          romaji: 'Doko e ikimasu ka.',
          meaning: { en: 'Where shall we go?', vi: 'Chúng ta đi đâu?' },
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          speakerId: 'miller',
          jp: 'ええと……。きょうは 日本料理が 食べたいです。',
          romaji: 'Eeto... Kyō wa nihon ryōri ga tabetai desu.',
          meaning: {
            en: 'Um... Today I want to eat Japanese food.',
            vi: 'À... Hôm nay tôi muốn ăn món Nhật.'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '料', reading: 'りょう' },
            { base: '理', reading: 'り' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          speakerId: 'yamada',
          jp: 'じゃ、つるや へ 行きましょう。',
          romaji: 'Ja, Tsuruya e ikimashō.',
          meaning: {
            en: 'Then let\u0027s go to Tsuru-ya.',
            vi: 'Thế thì chúng ta đến nhà hàng Tsuru-ya đi.'
          },
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          speakerId: 'staff',
          jp: 'ご注文は？',
          romaji: 'Go-chūmon wa?',
          meaning: { en: 'Your order?', vi: 'Các anh dùng gì ạ?' },
          ruby: [
            { base: '注', reading: 'ちゅう' },
            { base: '文', reading: 'もん' }
          ]
        },
        {
          speakerId: 'miller',
          jp: '天ぷら定食。',
          romaji: 'Tenpura teishoku.',
          meaning: { en: 'Tempura set meal.', vi: 'Tôi ăn cơm suất tempura.' },
          ruby: [
            { base: '天', reading: 'てん' },
            { base: '定', reading: 'てい' },
            { base: '食', reading: 'しょく' }
          ]
        },
        {
          speakerId: 'yamada',
          jp: '牛どん。',
          romaji: 'Gyūdon.',
          meaning: { en: 'Beef bowl.', vi: 'Tôi ăn cơm thịt bò.' },
          ruby: [{ base: '牛', reading: 'ぎゅう' }]
        },
        {
          speakerId: 'staff',
          jp: '天ぷら定食と 牛どん ですね。少々 お待ちください。',
          romaji: 'Tenpura teishoku to gyūdon desu ne. Shōshō omachi kudasai.',
          meaning: {
            en: 'One tempura set and one beef bowl. Please wait a moment.',
            vi: 'Hai anh dùng cơm suất tempura và cơm thịt bò nhỉ? Xin vui lòng đợi một chút.'
          },
          ruby: [
            { base: '天', reading: 'てん' },
            { base: '定', reading: 'てい' },
            { base: '食', reading: 'しょく' },
            { base: '牛', reading: 'ぎゅう' },
            { base: '少', reading: 'しょう' },
            { base: '待', reading: 'ま' }
          ]
        },
        {
          speakerId: 'staff',
          jp: '1,680円 です。',
          romaji: 'Sen roppyaku hachi-jū en desu.',
          meaning: { en: 'That is 1,680 yen.', vi: 'Hết 1.680 yen ạ.' },
          ruby: [{ base: '円', reading: 'えん' }]
        },
        {
          speakerId: 'miller',
          jp: 'すみません、別々に お願いします。',
          romaji: 'Sumimasen, betsubetsu ni onegaishimasu.',
          meaning: {
            en: 'Excuse me, please bill us separately.',
            vi: 'Xin lỗi, nhờ chị tính riêng ra cho ạ.'
          },
          ruby: [
            { base: '別', reading: 'べつ' },
            { base: '願', reading: 'ねが' }
          ]
        },
        {
          speakerId: 'staff',
          jp: 'はい。天ぷら定食は 980円、牛どんは 700円 です。',
          romaji: 'Hai. Tenpura teishoku wa kyū-hyaku hachi-jū en, gyūdon wa nana-hyaku en desu.',
          meaning: {
            en: 'Certainly. The tempura set is 980 yen; the beef bowl is 700 yen.',
            vi: 'Vâng. Cơm suất tempura 980 yen, cơm thịt bò 700 yen.'
          },
          ruby: [
            { base: '天', reading: 'てん' },
            { base: '定', reading: 'てい' },
            { base: '食', reading: 'しょく' },
            { base: '円', reading: 'えん' },
            { base: '牛', reading: 'ぎゅう' },
            { base: '円', reading: 'えん' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson13-weekend',
      title: { en: 'Weekend plans', vi: 'Kế hoạch cuối tuần' },
      speakers: [
        { id: 'yuki', name: 'ユキ' },
        { id: 'tom', name: 'トム' }
      ],
      lines: [
        {
          speakerId: 'yuki',
          jp: '週末 何を しますか。',
          romaji: 'Shūmatsu nani o shimasu ka.',
          meaning: { en: 'What will you do this weekend?', vi: 'Cuối tuần anh sẽ làm gì?' },
          ruby: [
            { base: '週', reading: 'しゅう' },
            { base: '末', reading: 'まつ' },
            { base: '何', reading: 'なに' }
          ]
        },
        {
          speakerId: 'tom',
          jp: '子どもと 神戸へ 船を 見に 行きます。',
          romaji: 'Kodomo to Kōbe e fune o mi ni ikimasu.',
          meaning: {
            en: 'I am going to Kobe with my child to look at boats.',
            vi: 'Tôi đi Kobe với con để ngắm thuyền.'
          },
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '神', reading: 'こう' },
            { base: '戸', reading: 'べ' },
            { base: '船', reading: 'ふね' },
            { base: '見', reading: 'み' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'yuki',
          jp: 'いいですね。私も どこか 行きたいです。',
          romaji: 'Ii desu ne. Watashi mo dokoka ikitai desu.',
          meaning: {
            en: 'That sounds nice. I want to go somewhere too.',
            vi: 'Hay quá. Tôi cũng muốn đi đâu đó.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'tom',
          jp: '一緒に 行きませんか。',
          romaji: 'Issho ni ikimasen ka.',
          meaning: { en: 'Shall we go together?', vi: 'Đi cùng không?' },
          ruby: [
            { base: '一', reading: 'いっ' },
            { base: '緒', reading: 'しょ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'yuki',
          jp: 'ええ、そう しましょう。',
          romaji: 'Ee, sō shimashō.',
          meaning: { en: 'Yes, let\u0027s do that.', vi: 'Ừ, nhất trí.' }
        }
      ]
    },
    {
      id: 'conv-lesson13-thirsty',
      title: { en: 'After a long meeting', vi: 'Sau cuộc họp dài' },
      speakers: [
        { id: 'lin', name: 'リン' },
        { id: 'ken', name: 'ケン' }
      ],
      lines: [
        {
          speakerId: 'lin',
          jp: 'きょうは 何も したくないです。つかれました。',
          romaji: 'Kyō wa nani mo shitakunai desu. Tsukaremashita.',
          meaning: {
            en: 'I do not want to do anything today. I am tired.',
            vi: 'Hôm nay chẳng muốn làm gì cả. Mệt rồi.'
          },
          ruby: [{ base: '何', reading: 'なに' }]
        },
        {
          speakerId: 'ken',
          jp: 'そうですね。会議は 大変でしたね。',
          romaji: 'Sō desu ne. Kaigi wa taihen deshita ne.',
          meaning: {
            en: 'I agree. The meeting was tough, was it not?',
            vi: 'Ừ nhỉ. Cuộc họp vất vả quá nhỉ.'
          },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '大', reading: 'たい' },
            { base: '変', reading: 'へん' }
          ]
        },
        {
          speakerId: 'lin',
          jp: 'のどが かわきました。何か 飲みたいです。',
          romaji: 'Nodo ga kawakimashita. Nanika nomitai desu.',
          meaning: {
            en: 'I am thirsty. I want to drink something.',
            vi: 'Khát rồi. Muốn uống cái gì đó.'
          },
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          speakerId: 'ken',
          jp: 'じゃ、喫茶店へ 行きましょう。',
          romaji: 'Ja, kissaten e ikimashō.',
          meaning: { en: 'Then let\u0027s go to a cafe.', vi: 'Vậy ra quán cà phê đi.' },
          ruby: [
            { base: '喫', reading: 'きっ' },
            { base: '茶', reading: 'さ' },
            { base: '店', reading: 'てん' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N が 欲しい',
      patternRuby: [{ base: '欲', reading: 'ほ' }],
      highlights: ['が', '欲しい'],
      title: { en: 'Want a thing (欲しい)', vi: 'Muốn có (欲しい)' },
      explanation: {
        en: 'Use が with 欲しい to say you want something. It conjugates like an i-adjective. Usually for your own wants or asking the listener - not a third person\u0027s desire.',
        vi: 'Dùng が với 欲しい để nói muốn có gì. Chia như tính từ い. Thường dùng cho bản thân hoặc hỏi người đối thoại - không nói muốn của người thứ ba.'
      },
      explanationRuby: [{ base: '欲', reading: 'ほ' }],
      examples: [
        {
          jp: '私は 友達が 欲しいです。',
          romaji: 'Watashi wa tomodachi ga hoshii desu.',
          meaning: { en: 'I want friends.', vi: 'Tôi muốn có bạn.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '欲', reading: 'ほ' }
          ]
        },
        {
          jp: '今 何が いちばん 欲しいですか。',
          romaji: 'Ima nani ga ichiban hoshii desu ka.',
          meaning: {
            en: 'What do you want most right now?',
            vi: 'Bây giờ anh/chị muốn cái gì nhất?'
          },
          dialogueGroup: 'want',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '何', reading: 'なに' },
            { base: '欲', reading: 'ほ' }
          ]
        },
        {
          jp: '新しい パソコンが 欲しいです。',
          romaji: 'Atarashii pasokon ga hoshii desu.',
          meaning: { en: 'I want a new computer.', vi: 'Tôi muốn có máy tính mới.' },
          dialogueGroup: 'want',
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '欲', reading: 'ほ' }
          ]
        },
        {
          jp: '子どもが 欲しいですか。',
          romaji: 'Kodomo ga hoshii desu ka.',
          meaning: { en: 'Do you want children?', vi: 'Anh/chị muốn có con không?' },
          dialogueGroup: 'child',
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '欲', reading: 'ほ' }
          ]
        },
        {
          jp: 'いいえ、欲しくないです。',
          romaji: 'Iie, hoshikunai desu.',
          meaning: { en: 'No, I do not want to.', vi: 'Không, tôi không muốn.' },
          dialogueGroup: 'child',
          ruby: [{ base: '欲', reading: 'ほ' }]
        }
      ]
    },
    {
      pattern: 'V-stem + たい',
      highlights: ['たい'],
      title: { en: 'Want to do (〜たい)', vi: 'Muốn làm (〜たい)' },
      explanation: {
        en: 'Drop ます and add たい to say you want to do something. The object can take を or が. Conjugates like an i-adjective (食べたくない). For your own wants or asking the listener.',
        vi: 'Bỏ ます, thêm たい để nói muốn làm gì. Tân ngữ có thể dùng を hoặc が. Chia như tính từ い (食べたくない). Dùng cho bản thân hoặc hỏi người đối thoại.'
      },
      explanationRuby: [{ base: '食', reading: 'た' }],
      examples: [
        {
          jp: '沖縄へ 行きたいです。',
          romaji: 'Okinawa e ikitai desu.',
          meaning: { en: 'I want to go to Okinawa.', vi: 'Tôi muốn đi Okinawa.' },
          ruby: [
            { base: '沖', reading: 'おき' },
            { base: '縄', reading: 'なわ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: 'てんぷらを 食べたいです。',
          romaji: 'Tenpura o tabetai desu.',
          meaning: { en: 'I want to eat tempura.', vi: 'Tôi muốn ăn tempura.' },
          ruby: [{ base: '食', reading: 'た' }]
        },
        {
          jp: '神戸で 何を 買いたいですか。',
          romaji: 'Kōbe de nani o kaitai desu ka.',
          meaning: { en: 'What do you want to buy in Kobe?', vi: 'Anh/chị muốn mua gì ở Kobe?' },
          dialogueGroup: 'kobe',
          ruby: [
            { base: '神', reading: 'こう' },
            { base: '戸', reading: 'べ' },
            { base: '何', reading: 'なに' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          jp: '靴を 買いたいです。',
          romaji: 'Kutsu o kaitai desu.',
          meaning: { en: 'I want to buy shoes.', vi: 'Tôi muốn mua giày.' },
          dialogueGroup: 'kobe',
          ruby: [
            { base: '靴', reading: 'くつ' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          jp: 'おなかが 痛いですから、何も 食べたくないです。',
          romaji: 'Onaka ga itai desu kara, nani mo tabetakunai desu.',
          meaning: {
            en: 'My stomach hurts, so I do not want to eat anything.',
            vi: 'Đau bụng nên tôi không muốn ăn gì.'
          },
          ruby: [
            { base: '痛', reading: 'いた' },
            { base: '何', reading: 'なに' },
            { base: '食', reading: 'た' }
          ]
        }
      ]
    },
    {
      pattern: 'Place へ V / N に 行きます',
      patternRuby: [{ base: '行', reading: 'い' }],
      highlights: ['へ', 'に', '行きます', '来ます', '帰ります'],
      title: { en: 'Go for a purpose (〜に)', vi: 'Đi để làm gì (〜に)' },
      explanation: {
        en: 'Use verb stem + に or a noun + に before 行きます/来ます/帰ります to state your purpose. With 〜します nouns (買い物, 食事, 散歩), drop します: 買い物に 行きます.',
        vi: 'Dùng gốc động từ + に hoặc danh từ + に trước 行きます/来ます/帰ります để nói mục đích. Với danh từ 〜します (買い物, 食事, 散歩), bỏ します: 買い物に 行きます.'
      },
      explanationRuby: [
        { base: '行', reading: 'い' },
        { base: '来', reading: 'き' },
        { base: '帰', reading: 'かえ' },
        { base: '買', reading: 'か' },
        { base: '物', reading: 'もの' },
        { base: '食', reading: 'しょく' },
        { base: '事', reading: 'じ' },
        { base: '散', reading: 'さん' },
        { base: '歩', reading: 'ぽ' },
        { base: '買', reading: 'か' },
        { base: '物', reading: 'もの' },
        { base: '行', reading: 'い' }
      ],
      examples: [
        {
          jp: '神戸へ 買い物に 行きます。',
          romaji: 'Kōbe e kaimono ni ikimasu.',
          meaning: { en: 'I go to Kobe to shop.', vi: 'Tôi đi Kobe để mua sắm.' },
          ruby: [
            { base: '神', reading: 'こう' },
            { base: '戸', reading: 'べ' },
            { base: '買', reading: 'か' },
            { base: '物', reading: 'もの' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '日本へ 美術の 勉強に 来ました。',
          romaji: 'Nihon e bijutsu no benkyō ni kimashita.',
          meaning: {
            en: 'I came to Japan to study art.',
            vi: 'Tôi đến Nhật để học mỹ thuật.'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '美', reading: 'び' },
            { base: '術', reading: 'じゅつ' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: 'あした 京都の お祭りに 行きます。',
          romaji: 'Ashita Kyōto no omatsuri ni ikimasu.',
          meaning: {
            en: 'Tomorrow I am going to Kyoto for the festival.',
            vi: 'Ngày mai tôi đi Kyoto xem lễ hội.'
          },
          ruby: [
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '祭', reading: 'まつ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '冬休みに 北海道へ スキーに 行きました。',
          romaji: 'Fuyuyasumi ni Hokkaidō e sukī ni ikimashita.',
          meaning: {
            en: 'During winter break I went to Hokkaido to ski.',
            vi: 'Nghỉ đông tôi đi Hokkaido trượt tuyết.'
          },
          ruby: [
            { base: '冬', reading: 'ふゆ' },
            { base: '休', reading: 'やす' },
            { base: '北', reading: 'ほっ' },
            { base: '海', reading: 'かい' },
            { base: '道', reading: 'どう' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'どこか / 何か',
      patternRuby: [{ base: '何', reading: 'なに' }],
      highlights: ['どこか', '何か'],
      title: { en: 'Somewhere / something (どこか / 何か)', vi: 'Đâu đó / cái gì đó' },
      explanation: {
        en: 'どこか means somewhere; 何か means something. Particles へ and を are often dropped after them.',
        vi: 'どこか nghĩa đâu đó; 何か nghĩa cái gì đó. Trợ từ へ và を thường được lược bỏ sau chúng.'
      },
      explanationRuby: [{ base: '何', reading: 'なに' }],
      examples: [
        {
          jp: '冬休みは どこか 行きましたか。',
          romaji: 'Fuyuyasumi wa dokoka ikimashita ka.',
          meaning: {
            en: 'Did you go anywhere during winter break?',
            vi: 'Nghỉ đông anh/chị có đi đâu không?'
          },
          ruby: [
            { base: '冬', reading: 'ふゆ' },
            { base: '休', reading: 'やす' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: 'はい。北海道へ スキーに 行きました。',
          romaji: 'Hai. Hokkaidō e sukī ni ikimashita.',
          meaning: {
            en: 'Yes. I went skiing in Hokkaido.',
            vi: 'Có. Tôi đi Hokkaido trượt tuyết.'
          },
          ruby: [
            { base: '北', reading: 'ほっ' },
            { base: '海', reading: 'かい' },
            { base: '道', reading: 'どう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: 'のどが かわきましたから、何か 飲みたいです。',
          romaji: 'Nodo ga kawakimashita kara, nanika nomitai desu.',
          meaning: {
            en: 'I am thirsty, so I want to drink something.',
            vi: 'Khát nên tôi muốn uống cái gì đó.'
          },
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '飲', reading: 'の' }
          ]
        }
      ]
    },
    {
      pattern: 'ご～',
      highlights: ['ご'],
      title: { en: 'Polite prefix (ご～)', vi: 'Tiền tố lịch sự (ご～)' },
      explanation: {
        en: 'Attach ご before certain words in polite service settings (ご注文, ご連絡). It shows respect toward the listener or their belongings.',
        vi: 'Gắn ご trước một số từ trong tình huống phục vụ lịch sự (ご注文, ご連絡). Thể hiện kính trọng đối với người nghe hoặc đồ của họ.'
      },
      explanationRuby: [
        { base: '注', reading: 'ちゅう' },
        { base: '文', reading: 'もん' },
        { base: '連', reading: 'れん' },
        { base: '絡', reading: 'らく' }
      ],
      examples: [
        {
          jp: 'ご注文は？',
          romaji: 'Go-chūmon wa?',
          meaning: { en: 'Your order?', vi: 'Anh/Chị dùng món gì ạ?' },
          ruby: [
            { base: '注', reading: 'ちゅう' },
            { base: '文', reading: 'もん' }
          ]
        },
        {
          jp: '少々 お待ちください。',
          romaji: 'Shōshō omachi kudasai.',
          meaning: { en: 'Please wait a moment.', vi: 'Xin vui lòng đợi một chút.' },
          ruby: [
            { base: '少', reading: 'しょう' },
            { base: '待', reading: 'ま' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson13-japan',
      title: { en: 'Why I came to Japan', vi: 'Vì sao đến Nhật' },
      lines: [
        {
          jp: 'トムさんは 日本へ 美術の 勉強に 来ました。',
          romaji: 'Tomu-san wa Nihon e bijutsu no benkyō ni kimashita.',
          meaning: {
            en: 'Tom came to Japan to study art.',
            vi: 'Tom đến Nhật để học mỹ thuật.'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '美', reading: 'び' },
            { base: '術', reading: 'じゅつ' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: '週末は 美術館へ 行きたいです。',
          romaji: 'Shūmatsu wa bijutsukan e ikitai desu.',
          meaning: {
            en: 'On weekends he wants to go to art museums.',
            vi: 'Cuối tuần anh ấy muốn đi bảo tàng mỹ thuật.'
          },
          ruby: [
            { base: '週', reading: 'しゅう' },
            { base: '末', reading: 'まつ' },
            { base: '美', reading: 'び' },
            { base: '術', reading: 'じゅつ' },
            { base: '館', reading: 'かん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '新しい 絵の 本も 欲しいです。',
          romaji: 'Atarashii e no hon mo hoshii desu.',
          meaning: {
            en: 'He also wants a new book about painting.',
            vi: 'Anh ấy cũng muốn có sách vẽ mới.'
          },
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '絵', reading: 'え' },
            { base: '本', reading: 'ほん' },
            { base: '欲', reading: 'ほ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'Why did Tom come to Japan?', vi: 'Tom đến Nhật để làm gì?' },
          choices: [
            { id: 'a', label: { en: 'To study art', vi: 'Học mỹ thuật' } },
            { id: 'b', label: { en: 'To ski', vi: 'Trượt tuyết' } },
            { id: 'c', label: { en: 'To shop', vi: 'Mua sắm' } },
            { id: 'd', label: { en: 'To swim', vi: 'Bơi' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'Where does he want to go on weekends?',
            vi: 'Cuối tuần anh ấy muốn đi đâu?'
          },
          choices: [
            { id: 'a', label: { en: 'Art museums', vi: 'Bảo tàng mỹ thuật' } },
            { id: 'b', label: { en: 'The airport', vi: 'Sân bay' } },
            { id: 'c', label: { en: 'A pool', vi: 'Bể bơi' } },
            { id: 'd', label: { en: 'A river', vi: 'Sông' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'What else does he want?', vi: 'Anh ấy còn muốn gì?' },
          choices: [
            { id: 'a', label: { en: 'A new art book', vi: 'Sách vẽ mới' } },
            { id: 'b', label: { en: 'A car', vi: 'Xe ô tô' } },
            { id: 'c', label: { en: 'Beef bowl', vi: 'Cơm thịt bò' } },
            { id: 'd', label: { en: 'Ski equipment', vi: 'Đồ trượt tuyết' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson13-winter',
      title: { en: 'Winter break trip', vi: 'Chuyến đi nghỉ đông' },
      lines: [
        {
          jp: 'マイさんは 冬休みに どこか 行きましたか。',
          romaji: 'Mai-san wa fuyuyasumi ni dokoka ikimashita ka.',
          meaning: {
            en: 'Did Mai go anywhere during winter break?',
            vi: 'Mai có đi đâu trong nghỉ đông không?'
          },
          ruby: [
            { base: '冬', reading: 'ふゆ' },
            { base: '休', reading: 'やす' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: 'はい。北海道へ スキーに 行きました。',
          romaji: 'Hai. Hokkaidō e sukī ni ikimashita.',
          meaning: {
            en: 'Yes. She went to Hokkaido to ski.',
            vi: 'Có. Cô ấy đi Hokkaido trượt tuyết.'
          },
          ruby: [
            { base: '北', reading: 'ほっ' },
            { base: '海', reading: 'かい' },
            { base: '道', reading: 'どう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: 'とても 楽しかったです。来年も 行きたいです。',
          romaji: 'Totemo tanoshikatta desu. Rainen mo ikitai desu.',
          meaning: {
            en: 'It was very fun. She wants to go again next year too.',
            vi: 'Rất vui. Năm sau cô ấy cũng muốn đi.'
          },
          ruby: [
            { base: '楽', reading: 'たの' },
            { base: '来', reading: 'らい' },
            { base: '年', reading: 'ねん' },
            { base: '行', reading: 'い' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'Did Mai travel during winter break?',
            vi: 'Mai có đi chơi nghỉ đông không?'
          },
          choices: [
            { id: 'a', label: { en: 'Yes', vi: 'Có' } },
            { id: 'b', label: { en: 'No', vi: 'Không' } },
            { id: 'c', label: { en: 'Not said', vi: 'Không nói' } },
            { id: 'd', label: { en: 'She stayed home', vi: 'Ở nhà' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'Where did she go?', vi: 'Cô ấy đi đâu?' },
          choices: [
            { id: 'a', label: { en: 'Hokkaido', vi: 'Hokkaido' } },
            { id: 'b', label: { en: 'Okinawa', vi: 'Okinawa' } },
            { id: 'c', label: { en: 'Kobe', vi: 'Kobe' } },
            { id: 'd', label: { en: 'Kyoto', vi: 'Kyoto' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'What did she do there?', vi: 'Cô ấy làm gì ở đó?' },
          choices: [
            { id: 'a', label: { en: 'Skiing', vi: 'Trượt tuyết' } },
            { id: 'b', label: { en: 'Swimming', vi: 'Bơi' } },
            { id: 'c', label: { en: 'Fishing', vi: 'Câu cá' } },
            { id: 'd', label: { en: 'Shopping only', vi: 'Chỉ mua sắm' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson13-park',
      title: { en: 'A walk in the park', vi: 'Dạo công viên' },
      lines: [
        {
          jp: '日曜日、家族と 公園へ 散歩に 行きました。',
          romaji: 'Nichiyōbi, kazoku to kōen e sanpo ni ikimashita.',
          meaning: {
            en: 'On Sunday I went to the park with my family for a walk.',
            vi: 'Chủ nhật tôi đi công viên với gia đình để dạo.'
          },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '散', reading: 'さん' },
            { base: '歩', reading: 'ぽ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '公園は 広くて、きれいでした。',
          romaji: 'Kōen wa hirokute, kirei deshita.',
          meaning: {
            en: 'The park was spacious and beautiful.',
            vi: 'Công viên rộng và đẹp.'
          },
          ruby: [
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '広', reading: 'ひろ' }
          ]
        },
        {
          jp: '子どもは プールの 近くで 遊びたがりました。',
          romaji: 'Kodomo wa pūru no chikaku de asobitagarimashita.',
          meaning: {
            en: 'The children wanted to play near the pool.',
            vi: 'Các con muốn chơi gần bể bơi.'
          },
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '近', reading: 'ちか' },
            { base: '遊', reading: 'あそ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'When did they go to the park?', vi: 'Họ đi công viên khi nào?' },
          choices: [
            { id: 'a', label: { en: 'Sunday', vi: 'Chủ nhật' } },
            { id: 'b', label: { en: 'Monday', vi: 'Thứ hai' } },
            { id: 'c', label: { en: 'New Year', vi: 'Tết' } },
            { id: 'd', label: { en: 'Weekend evening only', vi: 'Chỉ tối cuối tuần' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'How was the park?', vi: 'Công viên thế nào?' },
          choices: [
            { id: 'a', label: { en: 'Spacious and beautiful', vi: 'Rộng và đẹp' } },
            { id: 'b', label: { en: 'Narrow and dirty', vi: 'Chật và bẩn' } },
            { id: 'c', label: { en: 'Empty', vi: 'Vắng' } },
            { id: 'd', label: { en: 'Closed', vi: 'Đóng cửa' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'What did the children want to do?', vi: 'Các con muốn làm gì?' },
          choices: [
            { id: 'a', label: { en: 'Play near the pool', vi: 'Chơi gần bể bơi' } },
            { id: 'b', label: { en: 'Go skiing', vi: 'Trượt tuyết' } },
            { id: 'c', label: { en: 'Eat beef bowl', vi: 'Ăn cơm thịt bò' } },
            { id: 'd', label: { en: 'Study art', vi: 'Học mỹ thuật' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'In town', vi: 'Trong khu phố' },
      includeInQuiz: false,
      intro: {
        en: 'Public buildings and shops you might visit or ask about.',
        vi: 'Cơ quan công cộng và cửa hàng thường gặp trong khu phố.'
      },
      items: [
        {
          kana: 'はくぶつかん',
          kanji: '博物館',
          romaji: 'hakubutsukan',
          meaning: { en: 'museum', vi: 'bảo tàng' },
          ruby: [{ base: '博', reading: 'はく' }]
        },
        {
          kana: 'びじゅつかん',
          kanji: '美術館',
          romaji: 'bijutsukan',
          meaning: { en: 'art museum', vi: 'bảo tàng mỹ thuật' },
          ruby: [
            { base: '美', reading: 'び' },
            { base: '術', reading: 'じゅつ' }
          ]
        },
        {
          kana: 'としょかん',
          kanji: '図書館',
          romaji: 'toshokan',
          meaning: { en: 'library', vi: 'thư viện' },
          ruby: [{ base: '図', reading: 'と' }]
        },
        {
          kana: 'えいがかん',
          kanji: '映画館',
          romaji: 'eigakan',
          meaning: { en: 'movie theater', vi: 'rạp chiếu phim' },
          ruby: [{ base: '映', reading: 'えい' }]
        },
        {
          kana: 'こうえん',
          kanji: '公園',
          romaji: 'kōen',
          meaning: { en: 'park', vi: 'công viên' },
          ruby: [{ base: '公', reading: 'こう' }]
        },
        {
          kana: 'ゆうえんち',
          kanji: '遊園地',
          romaji: 'yūenchi',
          meaning: { en: 'amusement park', vi: 'công viên giải trí' },
          ruby: [{ base: '遊', reading: 'ゆう' }]
        },
        {
          kana: 'おてら',
          kanji: 'お寺',
          romaji: 'otera',
          meaning: { en: 'Buddhist temple', vi: 'chùa' },
          ruby: [{ base: '寺', reading: 'てら' }]
        },
        {
          kana: 'じんじゃ',
          kanji: '神社',
          romaji: 'jinja',
          meaning: { en: 'Shinto shrine', vi: 'đền thờ đạo Thần' },
          ruby: [{ base: '神', reading: 'じん' }]
        },
        {
          kana: 'だいがく',
          kanji: '大学',
          romaji: 'daigaku',
          meaning: { en: 'university', vi: 'trường đại học' },
          ruby: [{ base: '大', reading: 'だい' }]
        },
        {
          kana: 'けいさつしょ',
          kanji: '警察署',
          romaji: 'keisatsusho',
          meaning: { en: 'police station', vi: 'đồn cảnh sát' },
          ruby: [{ base: '警', reading: 'けい' }]
        },
        {
          kana: 'こうばん',
          kanji: '交番',
          romaji: 'kōban',
          meaning: { en: 'police box', vi: 'bốt cảnh sát' },
          ruby: [{ base: '交', reading: 'こう' }]
        },
        {
          kana: 'コンビニ',
          romaji: 'konbini',
          meaning: { en: 'convenience store', vi: 'cửa hàng tiện lợi' }
        },
        {
          kana: 'スーパー',
          romaji: 'sūpā',
          meaning: { en: 'supermarket', vi: 'siêu thị' }
        },
        {
          kana: 'デパート',
          romaji: 'depāto',
          meaning: { en: 'department store', vi: 'cửa hàng bách hóa' }
        },
        {
          kana: 'きっさてん',
          kanji: '喫茶店',
          romaji: 'kissaten',
          meaning: { en: 'coffee shop, cafe', vi: 'quán giải khát' },
          ruby: [{ base: '喫', reading: 'きっ' }]
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Names in this lesson', vi: 'Tên riêng trong bài' },
      includeInQuiz: false,
      items: [
        {
          kana: 'つるや',
          romaji: 'Tsuruya',
          meaning: { en: 'Tsuru-ya (fictional restaurant)', vi: 'Nhà hàng Tsuru-ya (giả định)' }
        },
        {
          kana: 'アキックス',
          romaji: 'Akikkusu',
          meaning: { en: 'Akix (fictional company)', vi: 'Công ty Akix (giả định)' }
        },
        {
          kana: 'おはようテレビ',
          romaji: 'Ohayō Terebi',
          meaning: {
            en: 'Ohayou TV (fictional TV program)',
            vi: 'Chương trình Ohayou TV (giả định)'
          }
        }
      ]
    }
  ]
};
