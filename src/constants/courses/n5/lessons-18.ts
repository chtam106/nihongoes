import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 18 (dictionary form, できる, hobbies, まえに). */
export const n5Lesson18: Lesson = {
  id: 'lesson-18',
  number: 18,
  title: {
    en: 'Hobbies and skills',
    vi: 'Sở thích và kỹ năng'
  },
  focus: {
    en: 'Use the dictionary form, express ability with 〜ことができます, talk about hobbies, and say "before" with 〜まえに.',
    vi: 'Dùng thể nguyên dạng, nói khả năng với 〜ことができます, nói về sở thích, và dùng 〜まえに cho "trước khi".'
  },
  vocab: [
    {
      kana: 'できます',
      romaji: 'dekimasu',
      meaning: { en: 'can do, to be able to', vi: 'có thể, làm được' }
    },
    {
      kana: 'あらいます',
      kanji: '洗います',
      romaji: 'araimasu',
      meaning: { en: 'to wash', vi: 'rửa' },
      ruby: [{ base: '洗', reading: 'あら' }]
    },
    {
      kana: 'ひきます',
      kanji: '弾きます',
      romaji: 'hikimasu',
      meaning: {
        en: 'to play (a stringed instrument or piano)',
        vi: 'chơi (nhạc cụ, piano, v.v.)'
      },
      ruby: [{ base: '弾', reading: 'ひ' }]
    },
    {
      kana: 'うたいます',
      kanji: '歌います',
      romaji: 'utaimasu',
      meaning: { en: 'to sing', vi: 'hát' },
      ruby: [{ base: '歌', reading: 'うた' }]
    },
    {
      kana: 'あつめます',
      kanji: '集めます',
      romaji: 'atsumemasu',
      meaning: { en: 'to collect, to gather', vi: 'sưu tầm, thu thập' },
      ruby: [{ base: '集', reading: 'あつ' }]
    },
    {
      kana: 'すてます',
      kanji: '捨てます',
      romaji: 'sutemasu',
      meaning: { en: 'to throw away, to discard', vi: 'vứt, bỏ đi' },
      ruby: [{ base: '捨', reading: 'す' }]
    },
    {
      kana: 'かえます',
      kanji: '換えます',
      romaji: 'kaemasu',
      meaning: { en: 'to exchange, to change', vi: 'đổi, trao đổi' },
      ruby: [{ base: '換', reading: 'か' }]
    },
    {
      kana: 'うんてんします',
      kanji: '運転します',
      romaji: 'unten shimasu',
      meaning: { en: 'to drive', vi: 'lái (xe)' },
      ruby: [
        { base: '運', reading: 'うん' },
        { base: '転', reading: 'てん' }
      ]
    },
    {
      kana: 'よやくします',
      kanji: '予約します',
      romaji: 'yoyaku shimasu',
      meaning: { en: 'to reserve, to book', vi: 'đặt chỗ, đặt trước' },
      ruby: [
        { base: '予', reading: 'よ' },
        { base: '約', reading: 'やく' }
      ]
    },
    {
      kana: 'ピアノ',
      romaji: 'piano',
      meaning: { en: 'piano', vi: 'đàn piano' }
    },
    {
      kana: '～メートル',
      romaji: '~mētoru',
      meaning: { en: 'meter (unit of length)', vi: 'mét (đơn vị đo)' }
    },
    {
      kana: 'げんきん',
      kanji: '現金',
      romaji: 'genkin',
      meaning: { en: 'cash', vi: 'tiền mặt' },
      ruby: [
        { base: '現', reading: 'げん' },
        { base: '金', reading: 'きん' }
      ]
    },
    {
      kana: 'しゅみ',
      kanji: '趣味',
      romaji: 'shumi',
      meaning: { en: 'hobby', vi: 'sở thích, thú vui' },
      ruby: [
        { base: '趣', reading: 'しゅ' },
        { base: '味', reading: 'み' }
      ]
    },
    {
      kana: 'にっき',
      kanji: '日記',
      romaji: 'nikki',
      meaning: { en: 'diary', vi: 'nhật ký' },
      ruby: [
        { base: '日', reading: 'にっ' },
        { base: '記', reading: 'き' }
      ]
    },
    {
      kana: 'おいのり',
      kanji: 'お祈り',
      romaji: 'o-inori',
      meaning: {
        en: 'prayer (お祈りを します: to pray)',
        vi: 'việc cầu nguyện (お祈りを します: cầu nguyện)'
      },
      ruby: [{ base: '祈', reading: 'いの' }]
    },
    {
      kana: 'かちょう',
      kanji: '課長',
      romaji: 'kachō',
      meaning: { en: 'section chief', vi: 'tổ trưởng' },
      ruby: [
        { base: '課', reading: 'か' },
        { base: '長', reading: 'ちょう' }
      ]
    },
    {
      kana: 'ぶちょう',
      kanji: '部長',
      romaji: 'buchō',
      meaning: { en: 'department manager', vi: 'trưởng phòng' },
      ruby: [
        { base: '部', reading: 'ぶ' },
        { base: '長', reading: 'ちょう' }
      ]
    },
    {
      kana: 'しゃちょう',
      kanji: '社長',
      romaji: 'shachō',
      meaning: { en: 'company president', vi: 'giám đốc công ty' },
      ruby: [
        { base: '社', reading: 'しゃ' },
        { base: '長', reading: 'ちょう' }
      ]
    },
    {
      kana: 'どうぶつ',
      kanji: '動物',
      romaji: 'dōbutsu',
      meaning: { en: 'animal', vi: 'động vật' },
      ruby: [
        { base: '動', reading: 'どう' },
        { base: '物', reading: 'ぶつ' }
      ]
    },
    {
      kana: 'うま',
      kanji: '馬',
      romaji: 'uma',
      meaning: { en: 'horse', vi: 'ngựa' },
      ruby: [{ base: '馬', reading: 'うま' }]
    },
    {
      kana: 'インターネット',
      romaji: 'intānetto',
      meaning: { en: 'Internet', vi: 'In-tơ-nét, Internet' }
    }
  ],
  phrases: [
    {
      kana: 'とくに',
      kanji: '特に',
      romaji: 'Toku ni.',
      meaning: { en: 'especially', vi: 'đặc biệt là' },
      ruby: [{ base: '特', reading: 'とく' }]
    },
    {
      kana: 'へえ',
      romaji: 'Hē.',
      meaning: {
        en: 'Oh, really? (shows surprise)',
        vi: 'Thế á! (biểu thị sự ngạc nhiên)'
      }
    },
    {
      kana: 'それは おもしろいですね。',
      kanji: 'それは 面白いですね。',
      romaji: 'Sore wa omoshiroi desu ne.',
      meaning: { en: 'That is interesting, is it not?', vi: 'Hay thật nhỉ.' },
      ruby: [
        { base: '面', reading: 'おも' },
        { base: '白', reading: 'しろ' }
      ]
    },
    {
      kana: 'なかなか',
      romaji: 'naka naka',
      meaning: {
        en: 'not easily, not as expected (with negative)',
        vi: 'khó mà, mãi mà (dùng với thể phủ định)'
      }
    },
    {
      kana: 'ほんとうですか。',
      kanji: '本当ですか。',
      romaji: 'Hontō desu ka.',
      meaning: { en: 'Really?', vi: 'Thật không ạ?' },
      ruby: [
        { base: '本', reading: 'ほん' },
        { base: '当', reading: 'とう' }
      ]
    },
    {
      kana: 'ぜひ',
      romaji: 'Zehi.',
      meaning: { en: 'by all means, definitely', vi: 'nhất định' }
    }
  ],
  conversation: [
    {
      id: 'conv-lesson18-hobby',
      title: { en: 'What is your hobby?', vi: 'Sở thích của anh là gì?' },
      speakers: [
        { id: 'yamada', name: '山田' },
        { id: 'santos', name: 'サントス' }
      ],
      lines: [
        {
          speakerId: 'yamada',
          jp: 'サントスさんの 趣味は 何ですか。',
          romaji: 'Santosu-san no shumi wa nan desu ka.',
          meaning: {
            en: 'Mr. Santos, what is your hobby?',
            vi: 'Anh Santos, sở thích của anh là gì?'
          },
          ruby: [
            { base: '趣', reading: 'しゅ' },
            { base: '味', reading: 'み' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          speakerId: 'santos',
          jp: '写真を 撮る ことです。',
          romaji: 'Shashin o toru koto desu.',
          meaning: { en: 'Taking photos.', vi: 'Là chụp ảnh.' },
          ruby: [
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '撮', reading: 'と' }
          ]
        },
        {
          speakerId: 'yamada',
          jp: 'どんな 写真を 撮りますか。',
          romaji: 'Donna shashin o torimasu ka.',
          meaning: { en: 'What kind of photos do you take?', vi: 'Anh chụp ảnh gì?' },
          ruby: [
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '撮', reading: 'と' }
          ]
        },
        {
          speakerId: 'santos',
          jp: '動物の 写真です。特に 馬が 好きです。',
          romaji: 'Dōbutsu no shashin desu. Toku ni uma ga suki desu.',
          meaning: {
            en: 'Photos of animals. I especially like horses.',
            vi: 'Ảnh động vật. Đặc biệt tôi rất thích ngựa.'
          },
          ruby: [
            { base: '動', reading: 'どう' },
            { base: '物', reading: 'ぶつ' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '特', reading: 'とく' },
            { base: '馬', reading: 'うま' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          speakerId: 'yamada',
          jp: 'へえ、それは 面白いですね。日本に 来てから 馬の 写真を 撮りましたか。',
          romaji:
            'Hē, sore wa omoshiroi desu ne. Nihon ni kite kara uma no shashin o torimashita ka.',
          meaning: {
            en: 'Oh, that is interesting. Since you came to Japan, have you taken photos of horses?',
            vi: 'Thế à. Thú vị nhỉ. Từ khi anh đến Nhật, anh đã chụp ảnh ngựa chưa?'
          },
          ruby: [
            { base: '面', reading: 'おも' },
            { base: '白', reading: 'しろ' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '来', reading: 'き' },
            { base: '馬', reading: 'うま' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '撮', reading: 'と' }
          ]
        },
        {
          speakerId: 'santos',
          jp: 'いいえ、まだ です。日本では なかなか 馬を 見る ことが できません。',
          romaji: 'Iie, mada desu. Nihon de wa naka naka uma o miru koto ga dekimasen.',
          meaning: {
            en: 'No, not yet. In Japan it is hard to find chances to see horses.',
            vi: 'Chưa ạ. Ở Nhật khó mà có cơ hội để xem ngựa.'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '馬', reading: 'うま' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          speakerId: 'yamada',
          jp: '北海道には 馬が たくさん いますよ。',
          romaji: 'Hokkaidō ni wa uma ga takusan imasu yo.',
          meaning: {
            en: 'There are many horses in Hokkaido.',
            vi: 'Ở Hokkaido có rất nhiều ngựa đấy.'
          },
          ruby: [
            { base: '北', reading: 'ほっ' },
            { base: '海', reading: 'かい' },
            { base: '道', reading: 'どう' },
            { base: '馬', reading: 'うま' }
          ]
        },
        {
          speakerId: 'santos',
          jp: '本当ですか。じゃ、夏休みに ぜひ 行きたいです。',
          romaji: 'Hontō desu ka. Ja, natsuyasumi ni zehi ikitai desu.',
          meaning: {
            en: 'Really? Then I definitely want to go during summer vacation.',
            vi: 'Thật không ạ? Thế thì nghỉ hè nhất định tôi phải đi.'
          },
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '当', reading: 'とう' },
            { base: '夏', reading: 'なつ' },
            { base: '休', reading: 'やす' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson18-ability',
      title: { en: 'Can you drive?', vi: 'Anh biết lái xe không?' },
      speakers: [
        { id: 'lin', name: 'リン' },
        { id: 'miller', name: 'ミラー' }
      ],
      lines: [
        {
          speakerId: 'lin',
          jp: 'ミラーさんは 運転が できますか。',
          romaji: 'Mirā-san wa unten ga dekimasu ka.',
          meaning: { en: 'Mr. Miller, can you drive?', vi: 'Anh Miller biết lái xe không?' },
          ruby: [
            { base: '運', reading: 'うん' },
            { base: '転', reading: 'てん' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'はい、できます。でも 日本では まだ 運転した ことが ありません。',
          romaji: 'Hai, dekimasu. Demo Nihon de wa mada unten shita koto ga arimasen.',
          meaning: {
            en: 'Yes, I can. But I have never driven in Japan yet.',
            vi: 'Có, tôi biết lái. Nhưng ở Nhật tôi chưa từng lái xe.'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '運', reading: 'うん' },
            { base: '転', reading: 'てん' }
          ]
        },
        {
          speakerId: 'lin',
          jp: '日本に 来る 前に 免許を 取りましたか。',
          romaji: 'Nihon ni kuru mae ni menkyo o torimashita ka.',
          meaning: {
            en: 'Did you get a license before coming to Japan?',
            vi: 'Trước khi đến Nhật anh đã lấy bằng lái chưa?'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '来', reading: 'く' },
            { base: '前', reading: 'まえ' },
            { base: '免', reading: 'めん' },
            { base: '許', reading: 'きょ' },
            { base: '取', reading: 'と' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'いいえ、国で 取りました。日本の 免許に 換えたいです。',
          romaji: 'Iie, kuni de torimashita. Nihon no menkyo ni kaetai desu.',
          meaning: {
            en: 'No, I got it in my country. I want to exchange it for a Japanese license.',
            vi: 'Không, tôi lấy ở nước tôi. Tôi muốn đổi sang bằng Nhật.'
          },
          ruby: [
            { base: '国', reading: 'くに' },
            { base: '取', reading: 'と' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '免', reading: 'めん' },
            { base: '許', reading: 'きょ' },
            { base: '換', reading: 'か' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson18-diary',
      title: { en: 'Before bed', vi: 'Trước khi đi ngủ' },
      speakers: [
        { id: 'kim', name: 'キム' },
        { id: 'sato', name: '佐藤' }
      ],
      lines: [
        {
          speakerId: 'kim',
          jp: '佐藤さんの 趣味は 何ですか。',
          romaji: 'Satō-san no shumi wa nan desu ka.',
          meaning: { en: 'Ms. Sato, what is your hobby?', vi: 'Chị Sato, sở thích chị là gì?' },
          ruby: [
            { base: '佐', reading: 'さ' },
            { base: '藤', reading: 'とう' },
            { base: '趣', reading: 'しゅ' },
            { base: '味', reading: 'み' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          speakerId: 'sato',
          jp: '音楽を 聞く ことです。ピアノも 少し 弾く ことが できます。',
          romaji: 'Ongaku o kiku koto desu. Piano mo sukoshi hiku koto ga dekimasu.',
          meaning: {
            en: 'Listening to music. I can also play the piano a little.',
            vi: 'Nghe nhạc. Tôi cũng chơi piano được một chút.'
          },
          ruby: [
            { base: '音', reading: 'おん' },
            { base: '楽', reading: 'がく' },
            { base: '聞', reading: 'き' },
            { base: '少', reading: 'すこ' },
            { base: '弾', reading: 'ひ' }
          ]
        },
        {
          speakerId: 'kim',
          jp: 'すごいですね。寝る 前に 何を しますか。',
          romaji: 'Sugoi desu ne. Neru mae ni nani o shimasu ka.',
          meaning: {
            en: 'That is amazing. What do you do before going to bed?',
            vi: 'Giỏi thật. Trước khi ngủ chị làm gì?'
          },
          ruby: [
            { base: '寝', reading: 'ね' },
            { base: '前', reading: 'まえ' },
            { base: '何', reading: 'なに' }
          ]
        },
        {
          speakerId: 'sato',
          jp: '日記を 書きます。今日の ことを 書いて から 寝ます。',
          romaji: 'Nikki o kakimasu. Kyō no koto o kaite kara nemasu.',
          meaning: {
            en: 'I write in my diary. I go to sleep after writing about today.',
            vi: 'Tôi viết nhật ký. Viết xong việc hôm nay rồi mới ngủ.'
          },
          ruby: [
            { base: '日', reading: 'にっ' },
            { base: '記', reading: 'き' },
            { base: '書', reading: 'か' },
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '書', reading: 'か' },
            { base: '寝', reading: 'ね' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V (dictionary form)',
      highlights: ['dictionary form'],
      title: { en: 'Dictionary form (plain form)', vi: 'Thể nguyên dạng' },
      explanation: {
        en: 'The dictionary form is the plain non-past form of a verb. Group I: change the last い-row sound before ます to the う-row (書きます→書く, 読みます→読む). Group II: drop ます and add る (食べます→食べる). Group III: します→する, 来ます→来る.',
        vi: 'Thể nguyên dạng là dạng thân mật không quá khứ của động từ. Nhóm I: đổi âm hàng い trước ます sang hàng う (書きます→書く, 読みます→読む). Nhóm II: bỏ ます, thêm る (食べます→食べる). Nhóm III: します→する, 来ます→来る.'
      },
      explanationRuby: [
        { base: '書', reading: 'か' },
        { base: '書', reading: 'か' },
        { base: '読', reading: 'よ' },
        { base: '読', reading: 'よ' },
        { base: '食', reading: 'た' },
        { base: '食', reading: 'た' },
        { base: '来', reading: 'き' },
        { base: '来', reading: 'き' }
      ],
      examples: [
        {
          jp: '私は 毎朝 新聞を 読みます。',
          romaji: 'Watashi wa maiasa shinbun o yomimasu.',
          meaning: { en: 'I read the newspaper every morning.', vi: 'Mỗi sáng tôi đọc báo.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '新', reading: 'しん' },
            { base: '聞', reading: 'ぶん' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          jp: '毎朝 新聞を 読む。',
          romaji: 'Maiasa shinbun o yomu.',
          meaning: {
            en: 'Read the newspaper every morning. (plain)',
            vi: 'Mỗi sáng đọc báo. (thân mật)'
          },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '新', reading: 'しん' },
            { base: '聞', reading: 'ぶん' },
            { base: '読', reading: 'よ' }
          ]
        }
      ]
    },
    {
      pattern: 'N / V-こと が できます',
      patternRuby: [{ base: 'こと', reading: 'こと' }],
      highlights: ['が', 'できます', 'か'],
      title: {
        en: 'Expressing ability (〜ことができます)',
        vi: 'Nói khả năng (〜ことができます)'
      },
      explanation: {
        en: 'N が できます expresses ability with a noun of action or skill (運転, 日本語, ピアノ). For verbs, use dictionary form + こと: 漢字を 読むことができます. The particle が marks what you can do.',
        vi: 'N が できます diễn tả khả năng với danh từ hành động hoặc kỹ năng (運転, 日本語, ピアノ). Với động từ: thể nguyên dạng + こと, ví dụ 漢字を 読むことができます. Trợ từ が đánh dấu việc có thể làm.'
      },
      explanationRuby: [
        { base: '運', reading: 'うん' },
        { base: '転', reading: 'てん' },
        { base: '日', reading: 'に' },
        { base: '本', reading: 'ほん' },
        { base: '語', reading: 'ご' },
        { base: '漢', reading: 'かん' },
        { base: '字', reading: 'じ' },
        { base: '読', reading: 'よ' }
      ],
      examples: [
        {
          jp: 'ミラーさんは 漢字を 読む ことが できます。',
          romaji: 'Mirā-san wa kanji o yomu koto ga dekimasu.',
          meaning: { en: 'Mr. Miller can read kanji.', vi: 'Anh Miller có thể đọc chữ Hán.' },
          ruby: [
            { base: '漢', reading: 'かん' },
            { base: '字', reading: 'じ' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          jp: '運転が できますか。',
          romaji: 'Unten ga dekimasu ka.',
          meaning: { en: 'Can you drive?', vi: 'Anh/Chị biết lái xe không?' },
          dialogueGroup: 'drive',
          ruby: [
            { base: '運', reading: 'うん' },
            { base: '転', reading: 'てん' }
          ]
        },
        {
          jp: 'はい、できます。',
          romaji: 'Hai, dekimasu.',
          meaning: { en: 'Yes, I can.', vi: 'Có, tôi biết lái.' },
          dialogueGroup: 'drive'
        },
        {
          jp: 'カードで 払う ことが できますか。',
          romaji: 'Kādo de harau koto ga dekimasu ka.',
          meaning: { en: 'Can I pay by card?', vi: 'Tôi có thể trả bằng thẻ được không?' },
          dialogueGroup: 'pay',
          ruby: [{ base: '払', reading: 'はら' }]
        },
        {
          jp: 'すみません。現金で 払って ください。',
          romaji: 'Sumimasen. Genkin de haratte kudasai.',
          meaning: {
            en: 'Sorry. Please pay in cash.',
            vi: 'Xin lỗi, xin anh/chị hãy trả bằng tiền mặt.'
          },
          dialogueGroup: 'pay',
          ruby: [
            { base: '現', reading: 'げん' },
            { base: '金', reading: 'きん' },
            { base: '払', reading: 'はら' }
          ]
        },
        {
          jp: '雪が たくさん 降りましたから、ことしは スキーが できます。',
          romaji: 'Yuki ga takusan furimashita kara, kotoshi wa sukī ga dekimasu.',
          meaning: {
            en: 'It snowed a lot, so we can ski this year.',
            vi: 'Vì tuyết rơi nhiều nên năm nay có thể trượt tuyết.'
          },
          ruby: [
            { base: '雪', reading: 'ゆき' },
            { base: '降', reading: 'ふ' }
          ]
        }
      ]
    },
    {
      pattern: '私の 趣味は N / V-こと です',
      patternRuby: [
        { base: '私', reading: 'わたし' },
        { base: '趣', reading: 'しゅ' },
        { base: '味', reading: 'み' }
      ],
      highlights: ['私', '趣味', 'は', 'です', 'か'],
      title: { en: 'Talking about hobbies', vi: 'Nói về sở thích' },
      explanation: {
        en: '私の 趣味は N です states a hobby with a noun (音楽). Use dictionary form + こと for a specific activity: 音楽を 聞く ことです (listening to music).',
        vi: '私の 趣味は N です nói sở thích bằng danh từ (音楽). Dùng thể nguyên dạng + こと để nói cụ thể hơn: 音楽を 聞く ことです (nghe nhạc).'
      },
      explanationRuby: [
        { base: '私', reading: 'わたし' },
        { base: '趣', reading: 'しゅ' },
        { base: '味', reading: 'み' },
        { base: '音', reading: 'おん' },
        { base: '楽', reading: 'がく' },
        { base: '音', reading: 'おん' },
        { base: '楽', reading: 'がく' },
        { base: '聞', reading: 'き' }
      ],
      examples: [
        {
          jp: '私の 趣味は 音楽です。',
          romaji: 'Watashi no shumi wa ongaku desu.',
          meaning: { en: 'My hobby is music.', vi: 'Sở thích của tôi là âm nhạc.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '趣', reading: 'しゅ' },
            { base: '味', reading: 'み' },
            { base: '音', reading: 'おん' },
            { base: '楽', reading: 'がく' }
          ]
        },
        {
          jp: '私の 趣味は 音楽を 聞く ことです。',
          romaji: 'Watashi no shumi wa ongaku o kiku koto desu.',
          meaning: { en: 'My hobby is listening to music.', vi: 'Sở thích của tôi là nghe nhạc.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '趣', reading: 'しゅ' },
            { base: '味', reading: 'み' },
            { base: '音', reading: 'おん' },
            { base: '楽', reading: 'がく' },
            { base: '聞', reading: 'き' }
          ]
        },
        {
          jp: '趣味は 何ですか。',
          romaji: 'Shumi wa nan desu ka.',
          meaning: { en: 'What is your hobby?', vi: 'Sở thích của anh/chị là gì?' },
          dialogueGroup: 'hobby',
          ruby: [
            { base: '趣', reading: 'しゅ' },
            { base: '味', reading: 'み' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          jp: '古い 時計を 集める ことです。',
          romaji: 'Furui tokei o atsumeru koto desu.',
          meaning: { en: 'Collecting old watches.', vi: 'Là sưu tầm đồng hồ cũ.' },
          dialogueGroup: 'hobby',
          ruby: [
            { base: '古', reading: 'ふる' },
            { base: '時', reading: 'と' },
            { base: '計', reading: 'けい' },
            { base: '集', reading: 'あつ' }
          ]
        }
      ]
    },
    {
      pattern: 'V / N の / time まえに',
      highlights: ['まえに'],
      title: { en: 'Before doing something (〜まえに)', vi: 'Trước khi (〜まえに)' },
      explanation: {
        en: 'Use dictionary form + まえに before a verb (寝る まえに). With action nouns add の (食事の まえに). With time quantities, no の (1時間 まえに). The verb after まえに can be any tense.',
        vi: 'Dùng thể nguyên dạng + まえに trước động từ (寝る まえに). Với danh từ hành động thêm の (食事の まえに). Với lượng thời gian không dùng の (1時間 まえに). Động từ sau まえに có thể ở bất kỳ thì nào.'
      },
      explanationRuby: [
        { base: '寝', reading: 'ね' },
        { base: '食', reading: 'しょく' },
        { base: '事', reading: 'じ' },
        { base: '時間', reading: 'じかん' }
      ],
      examples: [
        {
          jp: '日本に 来る 前に、日本語を 勉強しました。',
          romaji: 'Nihon ni kuru mae ni, nihongo o benkyō shimashita.',
          meaning: {
            en: 'Before coming to Japan, I studied Japanese.',
            vi: 'Trước khi đến Nhật tôi đã học tiếng Nhật.'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '来', reading: 'く' },
            { base: '前', reading: 'まえ' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        },
        {
          jp: '寝る 前に、本を 読みます。',
          romaji: 'Neru mae ni, hon o yomimasu.',
          meaning: {
            en: 'Before going to bed, I read a book.',
            vi: 'Trước khi đi ngủ, tôi đọc sách.'
          },
          ruby: [
            { base: '寝', reading: 'ね' },
            { base: '前', reading: 'まえ' },
            { base: '本', reading: 'ほん' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          jp: '食事の 前に、手を 洗います。',
          romaji: 'Shokuji no mae ni, te o araimasu.',
          meaning: { en: 'Before a meal, I wash my hands.', vi: 'Trước bữa ăn, tôi rửa tay.' },
          ruby: [
            { base: '食', reading: 'しょく' },
            { base: '事', reading: 'じ' },
            { base: '前', reading: 'まえ' },
            { base: '手', reading: 'て' },
            { base: '洗', reading: 'あら' }
          ]
        },
        {
          jp: '田中さんは 1時間 前に 出かけました。',
          romaji: 'Tanaka-san wa ichijikan mae ni dekakemashita.',
          meaning: {
            en: 'Mr. Tanaka went out one hour ago.',
            vi: 'Anh Tanaka đã đi ra ngoài cách đây 1 tiếng.'
          },
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' },
            { base: '前', reading: 'まえ' },
            { base: '出', reading: 'で' }
          ]
        }
      ]
    },
    {
      pattern: 'なかなか + negative',
      highlights: ['なかなか'],
      title: { en: 'Not easily (なかなか)', vi: 'Khó mà (なかなか)' },
      explanation: {
        en: 'なかなか with a negative verb means something does not happen easily or as expected. Often used with 〜では to set the place or situation.',
        vi: 'なかなか kèm động từ phủ định nghĩa việc khó xảy ra hoặc không như mong đợi. Thường dùng với 〜では để nói địa điểm hoặc hoàn cảnh.'
      },
      examples: [
        {
          jp: '日本では なかなか 馬を 見る ことが できません。',
          romaji: 'Nihon de wa naka naka uma o miru koto ga dekimasen.',
          meaning: {
            en: 'In Japan it is hard to find chances to see horses.',
            vi: 'Ở Nhật khó mà có cơ hội để thấy ngựa.'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '馬', reading: 'うま' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          jp: '忙しくて、なかなか 映画を 見に 行けません。',
          romaji: 'Isogashikute, naka naka eiga o mi ni ikemasen.',
          meaning: {
            en: 'I am busy, so I can hardly go to see movies.',
            vi: 'Bận nên khó mà đi xem phim.'
          },
          ruby: [
            { base: '忙', reading: 'いそ' },
            { base: '映画', reading: 'えいが' },
            { base: '見', reading: 'み' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'ぜひ',
      highlights: ['ぜひ'],
      title: { en: 'By all means (ぜひ)', vi: 'Nhất định (ぜひ)' },
      explanation: {
        en: 'ぜひ adds strong emphasis when expressing a wish (〜たい) or making a request (〜てください).',
        vi: 'ぜひ nhấn mạnh khi nói mong muốn (〜たい) hoặc đề nghị (〜てください).'
      },
      examples: [
        {
          jp: 'ぜひ 北海道へ 行きたいです。',
          romaji: 'Zehi Hokkaidō e ikitai desu.',
          meaning: { en: 'I definitely want to go to Hokkaido.', vi: 'Tôi rất muốn đi Hokkaido.' },
          ruby: [
            { base: '北', reading: 'ほっ' },
            { base: '海', reading: 'かい' },
            { base: '道', reading: 'どう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: 'ぜひ 遊びに 来て ください。',
          romaji: 'Zehi asobi ni kite kudasai.',
          meaning: {
            en: 'Please do come and visit.',
            vi: 'Nhất định anh/chị phải đến chơi nhé.'
          },
          ruby: [
            { base: '遊', reading: 'あそ' },
            { base: '来', reading: 'き' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson18-hobby',
      title: { en: 'Weekend hobbies', vi: 'Sở thích cuối tuần' },
      lines: [
        {
          jp: 'サントスさんの 趣味は 写真です。動物の 写真を よく 撮ります。',
          romaji: 'Santosu-san no shumi wa shashin desu. Dōbutsu no shashin o yoku torimasu.',
          meaning: {
            en: "Mr. Santos's hobby is photography. He often takes photos of animals.",
            vi: 'Sở thích của anh Santos là chụp ảnh. Anh ấy hay chụp ảnh động vật.'
          },
          ruby: [
            { base: '趣', reading: 'しゅ' },
            { base: '味', reading: 'み' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '動', reading: 'どう' },
            { base: '物', reading: 'ぶつ' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '撮', reading: 'と' }
          ]
        },
        {
          jp: '特に 馬が 好きです。でも 日本では なかなか 馬を 見る ことが できません。',
          romaji:
            'Toku ni uma ga suki desu. Demo Nihon de wa naka naka uma o miru koto ga dekimasen.',
          meaning: {
            en: 'He especially likes horses. But in Japan he can hardly see horses.',
            vi: 'Anh ấy đặc biệt thích ngựa. Nhưng ở Nhật khó mà thấy ngựa.'
          },
          ruby: [
            { base: '特', reading: 'とく' },
            { base: '馬', reading: 'うま' },
            { base: '好', reading: 'す' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '馬', reading: 'うま' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          jp: '夏休みに ぜひ 北海道へ 行きたいと 思っています。',
          romaji: 'Natsuyasumi ni zehi Hokkaidō e ikitai to omotte imasu.',
          meaning: {
            en: 'He definitely wants to go to Hokkaido during summer vacation.',
            vi: 'Anh ấy nhất định muốn đi Hokkaido vào kỳ nghỉ hè.'
          },
          ruby: [
            { base: '夏', reading: 'なつ' },
            { base: '休', reading: 'やす' },
            { base: '北', reading: 'ほっ' },
            { base: '海', reading: 'かい' },
            { base: '道', reading: 'どう' },
            { base: '行', reading: 'い' },
            { base: '思', reading: 'おも' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: "What is Mr. Santos's hobby?", vi: 'Sở thích của anh Santos là gì?' },
          choices: [
            { id: 'a', label: { en: 'Photography', vi: 'Chụp ảnh' } },
            { id: 'b', label: { en: 'Driving', vi: 'Lái xe' } },
            { id: 'c', label: { en: 'Singing', vi: 'Hát' } },
            { id: 'd', label: { en: 'Collecting coins', vi: 'Sưu tầm tiền xu' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'What animal does he especially like?',
            vi: 'Anh ấy đặc biệt thích con gì?'
          },
          choices: [
            { id: 'a', label: { en: 'Horses', vi: 'Ngựa' } },
            { id: 'b', label: { en: 'Cats', vi: 'Mèo' } },
            { id: 'c', label: { en: 'Birds', vi: 'Chim' } },
            { id: 'd', label: { en: 'Fish', vi: 'Cá' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'Where does he want to go?', vi: 'Anh ấy muốn đi đâu?' },
          choices: [
            { id: 'a', label: { en: 'Hokkaido', vi: 'Hokkaido' } },
            { id: 'b', label: { en: 'Osaka', vi: 'Osaka' } },
            { id: 'c', label: { en: 'Kyoto', vi: 'Kyoto' } },
            { id: 'd', label: { en: 'Akihabara', vi: 'Akihabara' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson18-diary',
      title: { en: 'Before bed', vi: 'Trước khi ngủ' },
      lines: [
        {
          jp: '佐藤さんは 寝る 前に 日記を 書きます。',
          romaji: 'Satō-san wa neru mae ni nikki o kakimasu.',
          meaning: {
            en: 'Ms. Sato writes in her diary before going to bed.',
            vi: 'Chị Sato viết nhật ký trước khi đi ngủ.'
          },
          ruby: [
            { base: '佐', reading: 'さ' },
            { base: '藤', reading: 'とう' },
            { base: '寝', reading: 'ね' },
            { base: '前', reading: 'まえ' },
            { base: '日', reading: 'にっ' },
            { base: '記', reading: 'き' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          jp: '今日 何を したか、明日 何を するかを 書きます。',
          romaji: 'Kyō nani o shita ka, ashita nani o suru ka o kakimasu.',
          meaning: {
            en: 'She writes what she did today and what she will do tomorrow.',
            vi: 'Chị ấy viết hôm nay đã làm gì và ngày mai sẽ làm gì.'
          },
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '何', reading: 'なに' },
            { base: '明', reading: 'あ' },
            { base: '日', reading: 'し' },
            { base: '何', reading: 'なに' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          jp: '食事の 前には 必ず 手を 洗います。',
          romaji: 'Shokuji no mae ni wa kanarazu te o araimasu.',
          meaning: {
            en: 'Before meals she always washes her hands.',
            vi: 'Trước bữa ăn chị ấy luôn rửa tay.'
          },
          ruby: [
            { base: '食', reading: 'しょく' },
            { base: '事', reading: 'じ' },
            { base: '前', reading: 'まえ' },
            { base: '必', reading: 'かなら' },
            { base: '手', reading: 'て' },
            { base: '洗', reading: 'あら' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'When does Ms. Sato write her diary?',
            vi: 'Chị Sato viết nhật ký khi nào?'
          },
          choices: [
            { id: 'a', label: { en: 'Before bed', vi: 'Trước khi ngủ' } },
            { id: 'b', label: { en: 'After breakfast', vi: 'Sau bữa sáng' } },
            { id: 'c', label: { en: 'At lunch', vi: 'Lúc trưa' } },
            { id: 'd', label: { en: 'On the train', vi: 'Trên tàu' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What does she write about?', vi: 'Chị ấy viết về gì?' },
          choices: [
            {
              id: 'a',
              label: { en: 'Today and tomorrow', vi: 'Hôm nay và ngày mai' }
            },
            { id: 'b', label: { en: 'Only weather', vi: 'Chỉ thời tiết' } },
            { id: 'c', label: { en: 'Only work', vi: 'Chỉ công việc' } },
            { id: 'd', label: { en: 'Recipes', vi: 'Công thức nấu ăn' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'What does she do before meals?', vi: 'Trước bữa ăn chị ấy làm gì?' },
          choices: [
            { id: 'a', label: { en: 'Washes her hands', vi: 'Rửa tay' } },
            { id: 'b', label: { en: 'Takes a bath', vi: 'Tắm bồn' } },
            { id: 'c', label: { en: 'Calls a friend', vi: 'Gọi bạn' } },
            { id: 'd', label: { en: 'Drives a car', vi: 'Lái xe' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson18-internet',
      title: { en: 'Booking online', vi: 'Đặt chỗ trên mạng' },
      lines: [
        {
          jp: 'ミラーさんは インターネットで ホテルを 予約する ことが できます。',
          romaji: 'Mirā-san wa intānetto de hoteru o yoyaku suru koto ga dekimasu.',
          meaning: {
            en: 'Mr. Miller can book a hotel on the Internet.',
            vi: 'Anh Miller có thể đặt khách sạn trên mạng.'
          },
          ruby: [
            { base: '予', reading: 'よ' },
            { base: '約', reading: 'やく' }
          ]
        },
        {
          jp: 'でも 現金で 払う しか ありません。カードでは 払えません。',
          romaji: 'Demo genkin de harau shika arimasen. Kādo de wa haraemasen.',
          meaning: {
            en: 'But he can only pay in cash. He cannot pay by card.',
            vi: 'Nhưng anh ấy chỉ trả được bằng tiền mặt. Không trả bằng thẻ được.'
          },
          ruby: [
            { base: '現', reading: 'げん' },
            { base: '金', reading: 'きん' },
            { base: '払', reading: 'はら' },
            { base: '払', reading: 'はら' }
          ]
        },
        {
          jp: '出発の 1週間 前に 予約しました。',
          romaji: 'Shuppatsu no isshūkan mae ni yoyaku shimashita.',
          meaning: {
            en: 'He booked one week before departure.',
            vi: 'Anh ấy đặt trước một tuần so với ngày đi.'
          },
          ruby: [
            { base: '出', reading: 'しゅっ' },
            { base: '発', reading: 'ぱつ' },
            { base: '週', reading: 'しゅう' },
            { base: '間', reading: 'かん' },
            { base: '前', reading: 'まえ' },
            { base: '予', reading: 'よ' },
            { base: '約', reading: 'やく' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What can Mr. Miller do online?', vi: 'Anh Miller làm gì trên mạng?' },
          choices: [
            { id: 'a', label: { en: 'Book a hotel', vi: 'Đặt khách sạn' } },
            { id: 'b', label: { en: 'Drive a car', vi: 'Lái xe' } },
            { id: 'c', label: { en: 'Sing songs', vi: 'Hát' } },
            { id: 'd', label: { en: 'Wash clothes', vi: 'Giặt quần áo' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'How can he pay?', vi: 'Anh ấy trả tiền thế nào?' },
          choices: [
            { id: 'a', label: { en: 'Cash only', vi: 'Chỉ tiền mặt' } },
            { id: 'b', label: { en: 'Card only', vi: 'Chỉ thẻ' } },
            { id: 'c', label: { en: 'Either way', vi: 'Cả hai đều được' } },
            { id: 'd', label: { en: 'Not said', vi: 'Không nói' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: { en: 'When did he book?', vi: 'Anh ấy đặt khi nào?' },
          choices: [
            { id: 'a', label: { en: 'One week before departure', vi: 'Một tuần trước khi đi' } },
            { id: 'b', label: { en: 'On the day of departure', vi: 'Ngày đi' } },
            { id: 'c', label: { en: 'One month after', vi: 'Một tháng sau' } },
            { id: 'd', label: { en: 'He did not book', vi: 'Không đặt' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Movement verbs', vi: 'Động tác chuyển động' },
      includeInQuiz: false,
      intro: {
        en: 'Common action verbs for describing physical movement.',
        vi: 'Động từ hành động thường gặp khi miêu tả chuyển động cơ thể.'
      },
      items: [
        {
          kana: 'とぶ',
          kanji: '飛ぶ',
          romaji: 'tobu',
          meaning: { en: 'to fly', vi: 'bay' },
          ruby: [{ base: '飛', reading: 'と' }]
        },
        {
          kana: 'とぶ',
          kanji: '跳ぶ',
          romaji: 'tobu',
          meaning: { en: 'to jump', vi: 'nhảy' },
          ruby: [{ base: '跳', reading: 'と' }]
        },
        {
          kana: 'のぼる',
          kanji: '登る',
          romaji: 'noboru',
          meaning: { en: 'to climb', vi: 'leo' },
          ruby: [{ base: '登', reading: 'のぼ' }]
        },
        {
          kana: 'はしる',
          kanji: '走る',
          romaji: 'hashiru',
          meaning: { en: 'to run', vi: 'chạy' },
          ruby: [{ base: '走', reading: 'はし' }]
        },
        {
          kana: 'およぐ',
          kanji: '泳ぐ',
          romaji: 'oyogu',
          meaning: { en: 'to swim', vi: 'bơi' },
          ruby: [{ base: '泳', reading: 'およ' }]
        },
        {
          kana: 'もぐる',
          romaji: 'moguru',
          meaning: { en: 'to dive, to go underwater', vi: 'lặn' }
        },
        {
          kana: 'とびこむ',
          kanji: '飛び込む',
          romaji: 'tobikomu',
          meaning: { en: 'to jump into', vi: 'nhảy xuống' },
          ruby: [
            { base: '飛', reading: 'と' },
            { base: '込', reading: 'こ' }
          ]
        },
        {
          kana: 'さかだちする',
          kanji: '逆立ちする',
          romaji: 'sakadachi suru',
          meaning: { en: 'to do a handstand', vi: 'lộn ngược, trồng cây chuối' },
          ruby: [{ base: '逆', reading: 'さか' }]
        },
        {
          kana: 'はう',
          romaji: 'hau',
          meaning: { en: 'to crawl', vi: 'bò' }
        },
        {
          kana: 'ける',
          romaji: 'keru',
          meaning: { en: 'to kick', vi: 'đá' }
        },
        {
          kana: 'ふる',
          kanji: '振る',
          romaji: 'furu',
          meaning: { en: 'to wave, to shake', vi: 'vẫy' },
          ruby: [{ base: '振', reading: 'ふ' }]
        },
        {
          kana: 'もちあげる',
          kanji: '持ち上げる',
          romaji: 'mochiageru',
          meaning: { en: 'to lift up', vi: 'nâng, nhấc' },
          ruby: [
            { base: '持', reading: 'も' },
            { base: '上', reading: 'あ' }
          ]
        },
        {
          kana: 'なげる',
          kanji: '投げる',
          romaji: 'nageru',
          meaning: { en: 'to throw', vi: 'ném' },
          ruby: [{ base: '投', reading: 'な' }]
        },
        {
          kana: 'たたく',
          romaji: 'tataku',
          meaning: { en: 'to hit, to strike', vi: 'đấm, đập, vỗ' }
        },
        {
          kana: 'ひく',
          kanji: '引く',
          romaji: 'hiku',
          meaning: { en: 'to pull', vi: 'kéo' },
          ruby: [{ base: '引', reading: 'ひ' }]
        },
        {
          kana: 'おす',
          kanji: '押す',
          romaji: 'osu',
          meaning: { en: 'to push', vi: 'đẩy' },
          ruby: [{ base: '押', reading: 'お' }]
        },
        {
          kana: 'まげる',
          kanji: '曲げる',
          romaji: 'mageru',
          meaning: { en: 'to bend', vi: 'uốn, gập' },
          ruby: [{ base: '曲', reading: 'ま' }]
        },
        {
          kana: 'のばす',
          kanji: '伸ばす',
          romaji: 'nobasu',
          meaning: { en: 'to stretch, to straighten', vi: 'duỗi thẳng, kéo dài' },
          ruby: [{ base: '伸', reading: 'の' }]
        },
        {
          kana: 'ころぶ',
          kanji: '転ぶ',
          romaji: 'korobu',
          meaning: { en: 'to fall down, to trip', vi: 'ngã' },
          ruby: [{ base: '転', reading: 'ころ' }]
        },
        {
          kana: 'ふりむく',
          kanji: '振り向く',
          romaji: 'furimuku',
          meaning: { en: 'to look back, to turn around', vi: 'ngoảnh lại' },
          ruby: [
            { base: '振', reading: 'ふ' },
            { base: '向', reading: 'む' }
          ]
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Names in this lesson', vi: 'Tên riêng trong bài' },
      includeInQuiz: false,
      items: [
        {
          kana: 'ふるさと',
          kanji: '故郷',
          romaji: 'Furusato',
          meaning: {
            en: 'Furusato (song title meaning "hometown")',
            vi: 'Furusato (tên bài hát nghĩa là "quê nhà")'
          },
          ruby: [
            { base: '故', reading: 'ふる' },
            { base: '郷', reading: 'さと' }
          ]
        },
        {
          kana: 'ビートルズ',
          romaji: 'Bītoruzu',
          meaning: { en: 'the Beatles (British band)', vi: 'Beatles (ban nhạc Anh)' }
        },
        {
          kana: 'あきはばら',
          kanji: '秋葉原',
          romaji: 'Akihabara',
          meaning: { en: 'Akihabara (district in Tokyo)', vi: 'Akihabara (quận ở Tokyo)' },
          ruby: [
            { base: '秋', reading: 'あき' },
            { base: '葉', reading: 'は' },
            { base: '原', reading: 'ばら' }
          ]
        }
      ]
    }
  ]
};
