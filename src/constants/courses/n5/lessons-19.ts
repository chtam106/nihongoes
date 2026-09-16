import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 19 (た形, たことがある, たりたり, なる). */
export const n5Lesson19: Lesson = {
  id: 'lesson-19',
  number: 19,
  title: {
    en: 'Have you ever...?',
    vi: 'Đã từng chưa?'
  },
  focus: {
    en: 'Talk about past experiences with 〜たことがあります, list activities with 〜たり〜たり, and describe change with 〜く/〜に なります.',
    vi: 'Nói kinh nghiệm đã từng với 〜たことがあります, liệt kê hoạt động với 〜たり〜たり, và miêu tả sự thay đổi với 〜く/〜に なります.'
  },
  vocab: [
    {
      kana: 'のぼります',
      kanji: '登ります',
      romaji: 'noborimasu',
      meaning: {
        en: 'to climb, to go up (山に～: climb a mountain)',
        vi: 'leo, lên (山に～: leo núi)'
      },
      ruby: [{ base: '登', reading: 'のぼ' }]
    },
    {
      kana: 'とまります',
      kanji: '泊まります',
      romaji: 'tomarimasu',
      meaning: {
        en: 'to stay (ホテルに～: stay at a hotel)',
        vi: 'trọ, ở lại (ホテルに～: ở khách sạn)'
      },
      ruby: [{ base: '泊', reading: 'と' }]
    },
    {
      kana: 'そうじします',
      kanji: '掃除します',
      romaji: 'sōji shimasu',
      meaning: { en: 'to clean (a room)', vi: 'dọn vệ sinh (căn phòng)' },
      ruby: [{ base: '掃', reading: 'そう' }]
    },
    {
      kana: 'せんたくします',
      kanji: '洗濯します',
      romaji: 'sentaku shimasu',
      meaning: { en: 'to do laundry', vi: 'giặt (áo quần)' },
      ruby: [{ base: '洗', reading: 'せん' }]
    },
    {
      kana: 'なります',
      romaji: 'narimasu',
      meaning: { en: 'to become', vi: 'trở thành, trở nên' }
    },
    {
      kana: 'ねむい',
      kanji: '眠い',
      romaji: 'nemui',
      meaning: { en: 'sleepy', vi: 'buồn ngủ' },
      ruby: [{ base: '眠', reading: 'ねむ' }]
    },
    {
      kana: 'つよい',
      kanji: '強い',
      romaji: 'tsuyoi',
      meaning: { en: 'strong', vi: 'mạnh' },
      ruby: [{ base: '強', reading: 'つよ' }]
    },
    {
      kana: 'よわい',
      kanji: '弱い',
      romaji: 'yowai',
      meaning: { en: 'weak', vi: 'yếu' },
      ruby: [{ base: '弱', reading: 'よわ' }]
    },
    {
      kana: 'れんしゅう',
      kanji: '練習',
      romaji: 'renshū',
      meaning: {
        en: 'practice (～を します: practice)',
        vi: 'sự luyện tập (～を します: luyện tập)'
      },
      ruby: [{ base: '練', reading: 'れん' }]
    },
    {
      kana: 'ゴルフ',
      romaji: 'gorufu',
      meaning: { en: 'golf (～を します: play golf)', vi: 'gôn (～を します: chơi gôn)' }
    },
    {
      kana: 'すもう',
      kanji: '相撲',
      romaji: 'sumō',
      meaning: {
        en: 'sumo wrestling (～を します: do sumo)',
        vi: 'vật Sumo (～を します: đấu vật Sumo)'
      },
      ruby: [
        { base: '相', reading: 'す' },
        { base: '撲', reading: 'もう' }
      ]
    },
    {
      kana: 'おちゃ',
      kanji: 'お茶',
      romaji: 'ocha',
      meaning: { en: 'tea ceremony', vi: 'trà đạo' },
      ruby: [{ base: '茶', reading: 'ちゃ' }]
    },
    {
      kana: 'ひ',
      kanji: '日',
      romaji: 'hi',
      meaning: { en: 'day, date', vi: 'ngày' },
      ruby: [{ base: '日', reading: 'ひ' }]
    },
    {
      kana: 'ちょうし',
      kanji: '調子',
      romaji: 'chōshi',
      meaning: { en: 'condition, state', vi: 'tình trạng, trạng thái' },
      ruby: [{ base: '調', reading: 'ちょう' }]
    },
    {
      kana: 'いちど',
      kanji: '一度',
      romaji: 'ichido',
      meaning: { en: 'once', vi: 'một lần' },
      ruby: [
        { base: '一', reading: 'いち' },
        { base: '度', reading: 'ど' }
      ]
    },
    {
      kana: 'いちども',
      kanji: '一度も',
      romaji: 'ichido mo',
      meaning: {
        en: 'not once, never (with negative)',
        vi: 'chưa lần nào, chưa bao giờ (dùng với phủ định)'
      },
      ruby: [
        { base: '一', reading: 'いち' },
        { base: '度', reading: 'ど' }
      ]
    },
    {
      kana: 'だんだん',
      romaji: 'dan dan',
      meaning: { en: 'gradually', vi: 'dần dần' }
    },
    {
      kana: 'もうすぐ',
      romaji: 'mō sugu',
      meaning: { en: 'soon', vi: 'sắp, sắp sửa' }
    },
    {
      kana: 'おかげさまで',
      romaji: 'o-kage sama de',
      meaning: {
        en: 'thanks to you (express gratitude for help received)',
        vi: 'cám ơn anh/chị, nhờ anh/chị mà ~'
      }
    },
    {
      kana: 'でも',
      romaji: 'demo',
      meaning: { en: 'but', vi: 'nhưng' }
    }
  ],
  phrases: [
    {
      kana: 'かんぱい',
      kanji: '乾杯',
      romaji: 'Kanpai.',
      meaning: { en: 'Cheers!', vi: 'Cạn chén! / Nâng cốc!' },
      ruby: [
        { base: '乾', reading: 'かん' },
        { base: '杯', reading: 'ぱい' }
      ]
    },
    {
      kana: 'ダイエット',
      romaji: 'daietto',
      meaning: {
        en: 'diet (～を します: go on a diet)',
        vi: 'việc ăn kiêng, chế độ giảm cân (～を します: ăn kiêng)'
      }
    },
    {
      kana: 'むり [な]',
      kanji: '無理 [な]',
      romaji: 'muri [na]',
      meaning: { en: 'excessive, impossible', vi: 'không thể, quá sức' },
      ruby: [{ base: '無', reading: 'む' }]
    },
    {
      kana: 'からだに いい',
      kanji: '体に いい',
      romaji: 'Karada ni ii.',
      meaning: { en: "good for one's health", vi: 'tốt cho sức khỏe' },
      ruby: [{ base: '体', reading: 'からだ' }]
    },
    {
      kana: 'そうですね。',
      romaji: 'Sō desu ne.',
      meaning: {
        en: 'Yes, that is right. / I agree.',
        vi: 'Đúng thế ạ. / Vâng, phải.'
      }
    }
  ],
  conversation: [
    {
      id: 'conv-lesson19-diet',
      title: { en: 'Starting a diet tomorrow', vi: 'Bắt đầu ăn kiêng từ ngày mai' },
      speakers: [
        { id: 'group', name: 'みんな' },
        { id: 'matsumoto', name: '松本' },
        { id: 'maria', name: 'マリア' }
      ],
      lines: [
        {
          speakerId: 'group',
          jp: '乾杯！',
          romaji: 'Kanpai!',
          meaning: { en: 'Cheers!', vi: 'Cạn chén!' },
          ruby: [
            { base: '乾', reading: 'かん' },
            { base: '杯', reading: 'ぱい' }
          ]
        },
        {
          speakerId: 'matsumoto',
          jp: 'マリアさん、あまり 食べませんね。',
          romaji: 'Maria-san, amari tabemasen ne.',
          meaning: {
            en: 'Ms. Maria, you are not eating much.',
            vi: 'Chị Maria không ăn mấy nhỉ.'
          },
          ruby: [{ base: '食', reading: 'た' }]
        },
        {
          speakerId: 'maria',
          jp: 'はい。きのうから ダイエットを しています。',
          romaji: 'Hai. Kinō kara daietto o shite imasu.',
          meaning: {
            en: 'Yes. I have been on a diet since yesterday.',
            vi: 'Vâng. Từ hôm qua tôi bắt đầu chế độ ăn kiêng.'
          }
        },
        {
          speakerId: 'matsumoto',
          jp: 'そうですか。私も ダイエットを した ことが あります。',
          romaji: 'Sō desu ka. Watashi mo daietto o shita koto ga arimasu.',
          meaning: {
            en: 'I see. I have also been on a diet before.',
            vi: 'Thế à. Tôi cũng đã từng thực hiện chế độ ăn kiêng.'
          },
          ruby: [{ base: '私', reading: 'わたし' }]
        },
        {
          speakerId: 'maria',
          jp: 'どんな ダイエットでしたか。',
          romaji: 'Donna daietto deshita ka.',
          meaning: { en: 'What kind of diet was it?', vi: 'Chế độ ăn kiêng của chị như thế nào ạ?' }
        },
        {
          speakerId: 'matsumoto',
          jp: '毎日 りんごだけ 食べて、水を たくさん 飲みました。でも 無理な ダイエットは 体に よくないですね。',
          romaji:
            'Mainichi ringo dake tabete, mizu o takusan nomimashita. Demo muri na daietto wa karada ni yokunai desu ne.',
          meaning: {
            en: 'I ate only apples every day and drank lots of water. But an extreme diet is not good for your health, is it?',
            vi: 'Chẳng hạn mỗi ngày chỉ ăn táo, uống nhiều nước. Nhưng chế độ ăn kiêng quá thì không tốt cho cơ thể đâu nhỉ.'
          },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '食', reading: 'た' },
            { base: '水', reading: 'みず' },
            { base: '飲', reading: 'の' },
            { base: '無', reading: 'む' },
            { base: '理', reading: 'り' },
            { base: '体', reading: 'からだ' }
          ]
        },
        {
          speakerId: 'maria',
          jp: 'そうですね。',
          romaji: 'Sō desu ne.',
          meaning: { en: 'That is right.', vi: 'Đúng thế ạ.' }
        },
        {
          speakerId: 'matsumoto',
          jp: 'マリアさん、この ケーキ おいしいですよ。',
          romaji: 'Maria-san, kono kēki oishii desu yo.',
          meaning: { en: 'Ms. Maria, this cake is delicious.', vi: 'Chị Maria, kem này ngon đấy.' }
        },
        {
          speakerId: 'maria',
          jp: 'そうですか。…じゃ、明日から ダイエットを 始めます。',
          romaji: 'Sō desu ka. ... Ja, ashita kara daietto o hajimemasu.',
          meaning: {
            en: 'Is that so? ... Then I will start my diet from tomorrow.',
            vi: 'Thế ạ. ... Thế thì tôi sẽ bắt đầu chế độ ăn kiêng từ ngày mai vậy.'
          },
          ruby: [
            { base: '明', reading: 'あ' },
            { base: '日', reading: 'した' },
            { base: '始', reading: 'はじ' }
          ]
        }
      ]
    },
    {
      id: 'conv-lesson19-sumou',
      title: { en: 'Have you seen sumo?', vi: 'Anh đã xem vật Sumo chưa?' },
      speakers: [
        { id: 'kim', name: 'キム' },
        { id: 'miller', name: 'ミラー' }
      ],
      lines: [
        {
          speakerId: 'kim',
          jp: 'ミラーさんは 相撲を 見た ことが ありますか。',
          romaji: 'Mirā-san wa sumō o mita koto ga arimasu ka.',
          meaning: {
            en: 'Mr. Miller, have you ever seen sumo?',
            vi: 'Anh Miller đã từng xem vật Sumo chưa?'
          },
          ruby: [
            { base: '相', reading: 'す' },
            { base: '撲', reading: 'もう' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'はい、一度 あります。2年前に 友達と 一緒に 行きました。',
          romaji: 'Hai, ichido arimasu. Ni-nen mae ni tomodachi to issho ni ikimashita.',
          meaning: {
            en: 'Yes, once. I went with a friend two years ago.',
            vi: 'Rồi, tôi đã đi một lần. Hai năm trước tôi đi cùng với bạn.'
          },
          ruby: [
            { base: '一', reading: 'いち' },
            { base: '度', reading: 'ど' },
            { base: '年', reading: 'ねん' },
            { base: '前', reading: 'まえ' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '一', reading: 'いっ' },
            { base: '緒', reading: 'しょ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'kim',
          jp: '馬に 乗った ことは ありますか。',
          romaji: 'Uma ni notta koto wa arimasu ka.',
          meaning: { en: 'Have you ever ridden a horse?', vi: 'Anh đã từng cưỡi ngựa chưa?' },
          ruby: [
            { base: '馬', reading: 'うま' },
            { base: '乗', reading: 'の' }
          ]
        },
        {
          speakerId: 'miller',
          jp: 'いいえ、一度も ありません。ぜひ 乗って みたいです。',
          romaji: 'Iie, ichido mo arimasen. Zehi notte mitai desu.',
          meaning: {
            en: 'No, never. I really want to try riding one.',
            vi: 'Chưa, tôi chưa cưỡi ngựa lần nào cả. Tôi rất muốn cưỡi thử.'
          },
          ruby: [
            { base: '一', reading: 'いち' },
            { base: '度', reading: 'ど' },
            { base: '乗', reading: 'の' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-た',
      highlights: ['た'],
      title: { en: 'Past plain form (V-た形)', vi: 'Thể た (quá khứ thân mật)' },
      explanation: {
        en: 'The た-form is the plain past tense. Form it like the て-form but replace て/で with た/だ: 書いて→書いた, のんで→飲んだ, 食べて→食べた, 来て→来た, して→した.',
        vi: 'Thể た là quá khứ thân mật. Làm giống thể て nhưng thay て/で bằng た/だ: 書いて→書いた, のんで→飲んだ, 食べて→食べた, 来て→来た, して→した.'
      },
      explanationRuby: [
        { base: '書', reading: 'か' },
        { base: '書', reading: 'か' },
        { base: '飲', reading: 'の' },
        { base: '食', reading: 'た' },
        { base: '食', reading: 'た' },
        { base: '来', reading: 'き' },
        { base: '来', reading: 'き' }
      ],
      examples: [
        {
          jp: '相撲を 見ました。',
          romaji: 'Sumō o mimashita.',
          meaning: { en: 'I watched sumo. (polite)', vi: 'Tôi đã xem vật Sumo. (lịch sự)' },
          ruby: [
            { base: '相', reading: 'す' },
            { base: '撲', reading: 'もう' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          jp: '相撲を 見た。',
          romaji: 'Sumō o mita.',
          meaning: { en: 'I watched sumo. (plain)', vi: 'Tôi đã xem vật Sumo. (thân mật)' },
          ruby: [
            { base: '相', reading: 'す' },
            { base: '撲', reading: 'もう' },
            { base: '見', reading: 'み' }
          ]
        }
      ]
    },
    {
      pattern: 'V-た ことが あります',
      patternRuby: [{ base: 'こと', reading: 'こと' }],
      highlights: ['た', 'が', 'あります', 'か'],
      title: {
        en: 'Past experience (〜たことがあります)',
        vi: 'Kinh nghiệm đã từng (〜たことがあります)'
      },
      explanation: {
        en: 'V-た ことが あります means you have done something before. Ask with 〜た ことが ありますか. For a specific past event at a known time, use plain past instead (去年 行きました). 一度も + negative = never.',
        vi: 'V-た ことが あります nghĩa là đã từng làm gì. Hỏi: 〜た ことが ありますか. Với sự việc xác định ở thời điểm cụ thể, dùng quá khứ thường (去年 行きました). 一度も + phủ định = chưa bao giờ.'
      },
      explanationRuby: [
        { base: '去年', reading: 'きょ' },
        { base: '行', reading: 'い' },
        { base: '一', reading: 'いち' },
        { base: '度', reading: 'ど' }
      ],
      examples: [
        {
          jp: '北海道へ 行った ことが ありますか。',
          romaji: 'Hokkaidō e itta koto ga arimasu ka.',
          meaning: {
            en: 'Have you ever been to Hokkaido?',
            vi: 'Anh/Chị đã từng đi Hokkaido bao giờ chưa?'
          },
          dialogueGroup: 'hokkaido',
          ruby: [
            { base: '北', reading: 'ほっ' },
            { base: '海', reading: 'かい' },
            { base: '道', reading: 'どう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: 'はい、一度 あります。',
          romaji: 'Hai, ichido arimasu.',
          meaning: { en: 'Yes, once.', vi: 'Rồi, tôi đã đi một lần.' },
          dialogueGroup: 'hokkaido',
          ruby: [
            { base: '一', reading: 'いち' },
            { base: '度', reading: 'ど' }
          ]
        },
        {
          jp: '馬に 乗った ことが ありますか。',
          romaji: 'Uma ni notta koto ga arimasu ka.',
          meaning: { en: 'Have you ever ridden a horse?', vi: 'Anh/Chị đã từng cưỡi ngựa chưa?' },
          dialogueGroup: 'horse',
          ruby: [
            { base: '馬', reading: 'うま' },
            { base: '乗', reading: 'の' }
          ]
        },
        {
          jp: 'いいえ、一度も ありません。',
          romaji: 'Iie, ichido mo arimasen.',
          meaning: { en: 'No, never.', vi: 'Chưa, tôi chưa cưỡi ngựa lần nào cả.' },
          dialogueGroup: 'horse',
          ruby: [
            { base: '一', reading: 'いち' },
            { base: '度', reading: 'ど' }
          ]
        },
        {
          jp: '去年 北海道で 馬に 乗りました。',
          romaji: 'Kyonen Hokkaidō de uma ni norimashita.',
          meaning: {
            en: 'Last year I rode a horse in Hokkaido.',
            vi: 'Năm ngoái tôi cưỡi ngựa ở Hokkaido.'
          },
          ruby: [
            { base: '去', reading: 'きょ' },
            { base: '年', reading: 'ねん' },
            { base: '北', reading: 'ほっ' },
            { base: '海', reading: 'かい' },
            { base: '道', reading: 'どう' },
            { base: '馬', reading: 'うま' },
            { base: '乗', reading: 'の' }
          ]
        }
      ]
    },
    {
      pattern: 'V-たり、V-たり します',
      highlights: ['たり', 'します'],
      title: { en: 'Listing activities (〜たり〜たり)', vi: 'Liệt kê hoạt động (〜たり〜たり)' },
      explanation: {
        en: 'V-たり、V-たり します lists representative actions (not necessarily in order). Contrast with て-form chaining (L16), which shows sequence. Avoid たり for daily routines like waking up or sleeping.',
        vi: 'V-たり、V-たり します liệt kê vài hoạt động tiêu biểu (không nhất thiết theo thứ tự). Khác với nối thể て (L16) chỉ trình tự. Không dùng たり cho thói quen hàng ngày như thức dậy hay ngủ.'
      },
      examples: [
        {
          jp: '休みの 日は テニスを したり、散歩を したり します。',
          romaji: 'Yasumi no hi wa tenisu o shitari, sanpo o shitari shimasu.',
          meaning: {
            en: 'On days off I do things like play tennis and take walks.',
            vi: 'Ngày nghỉ thì tôi chơi quần vợt, đi dạo bộ, v.v.'
          },
          ruby: [
            { base: '休', reading: 'やす' },
            { base: '日', reading: 'ひ' },
            { base: '散', reading: 'さん' },
            { base: '歩', reading: 'ぽ' }
          ]
        },
        {
          jp: '日曜日は テニスを して、映画を 見ました。',
          romaji: 'Nichiyōbi wa tenisu o shite, eiga o mimashita.',
          meaning: {
            en: 'On Sunday I played tennis and then watched a movie.',
            vi: 'Chủ nhật tôi chơi quần vợt rồi xem phim.'
          },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          jp: '冬休みは お寺を 見たり、友達と パーティーを したり しました。',
          romaji: 'Fuyuyasumi wa otera o mitari, tomodachi to pātī o shitari shimashita.',
          meaning: {
            en: 'During winter break I did things like visit temples and have parties with friends.',
            vi: 'Nghỉ đông tôi đi thăm chùa, liên hoan cùng bạn bè, v.v.'
          },
          ruby: [
            { base: '冬', reading: 'ふゆ' },
            { base: '休', reading: 'やす' },
            { base: '寺', reading: 'てら' },
            { base: '見', reading: 'み' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' }
          ]
        }
      ]
    },
    {
      pattern: 'Adj / N に なります',
      highlights: ['に', 'なります'],
      title: { en: 'Becoming (〜く/〜に なります)', vi: 'Trở nên (〜く/〜に なります)' },
      explanation: {
        en: 'なります expresses a change of state. i-adj: drop い, add く (寒い→寒く). na-adj/N: add に (元気→元気に, 25歳→25歳に). Use だんだん for gradual change.',
        vi: 'なります diễn tả sự thay đổi. Tính từ い: bỏ い, thêm く (寒い→寒く). Tính từ な/danh từ: thêm に (元気→元気に, 25歳→25歳に). Dùng だんだん cho thay đổi dần dần.'
      },
      explanationRuby: [
        { base: '寒', reading: 'さむ' },
        { base: '寒', reading: 'さむ' },
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' },
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' },
        { base: '歳', reading: 'さい' },
        { base: '歳', reading: 'さい' }
      ],
      examples: [
        {
          jp: 'だんだん 暖かく なります。',
          romaji: 'Dan dan atatakaku narimasu.',
          meaning: { en: 'It is gradually getting warmer.', vi: 'Trời sẽ ấm dần lên.' },
          ruby: [{ base: '暖', reading: 'あたた' }]
        },
        {
          jp: '調子が よく なりました。おかげさまで。',
          romaji: 'Chōshi ga yoku narimashita. O-kage sama de.',
          meaning: {
            en: 'I have gotten better. Thanks to you.',
            vi: 'Cám ơn, tôi đã khỏe rồi.'
          },
          ruby: [
            { base: '調', reading: 'ちょう' },
            { base: '子', reading: 'し' }
          ]
        },
        {
          jp: '医者に なりたいです。',
          romaji: 'Isha ni naritai desu.',
          meaning: { en: 'I want to become a doctor.', vi: 'Em muốn trở thành bác sĩ.' },
          ruby: [
            { base: '医', reading: 'い' },
            { base: '者', reading: 'しゃ' }
          ]
        },
        {
          jp: '25歳に なります。',
          romaji: 'Nijū-go-sai ni narimasu.',
          meaning: { en: 'I am turning 25.', vi: 'Tôi sang tuổi 25.' },
          ruby: [{ base: '歳', reading: 'さい' }]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson19-weekend',
      title: { en: 'Weekend activities', vi: 'Hoạt động cuối tuần' },
      lines: [
        {
          jp: '佐藤さんは 休みの 日、掃除を したり、洗濯を したり します。',
          romaji: 'Satō-san wa yasumi no hi, sōji o shitari, sentaku o shitari shimasu.',
          meaning: {
            en: 'On days off Ms. Sato does things like cleaning and laundry.',
            vi: 'Ngày nghỉ chị Sato dọn phòng, giặt giũ, v.v.'
          },
          ruby: [
            { base: '佐', reading: 'さ' },
            { base: '藤', reading: 'とう' },
            { base: '休', reading: 'やす' },
            { base: '日', reading: 'ひ' },
            { base: '掃', reading: 'そう' },
            { base: '除', reading: 'じ' },
            { base: '洗', reading: 'せん' },
            { base: '濯', reading: 'たく' }
          ]
        },
        {
          jp: 'ゴルフを した ことが ありますが、相撲は 一度も 見た ことが ありません。',
          romaji: 'Gorufu o shita koto ga arimasu ga, sumō wa ichido mo mita koto ga arimasen.',
          meaning: {
            en: 'She has played golf before, but she has never seen sumo.',
            vi: 'Chị ấy đã chơi gôn nhưng chưa bao giờ xem vật Sumo.'
          },
          ruby: [
            { base: '相', reading: 'す' },
            { base: '撲', reading: 'もう' },
            { base: '一', reading: 'いち' },
            { base: '度', reading: 'ど' },
            { base: '見', reading: 'み' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What does she do on days off?', vi: 'Ngày nghỉ chị ấy làm gì?' },
          choices: [
            { id: 'a', label: { en: 'Cleaning and laundry', vi: 'Dọn phòng và giặt' } },
            { id: 'b', label: { en: 'Only golf', vi: 'Chỉ chơi gôn' } },
            { id: 'c', label: { en: 'Only sumo', vi: 'Chỉ xem Sumo' } },
            { id: 'd', label: { en: 'Nothing', vi: 'Không làm gì' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'Has she seen sumo?', vi: 'Chị ấy đã xem Sumo chưa?' },
          choices: [
            { id: 'a', label: { en: 'Never', vi: 'Chưa bao giờ' } },
            { id: 'b', label: { en: 'Many times', vi: 'Nhiều lần' } },
            { id: 'c', label: { en: 'Once', vi: 'Một lần' } },
            { id: 'd', label: { en: 'Not said', vi: 'Không nói' } }
          ],
          correctId: 'a'
        }
      ]
    },
    {
      id: 'reading-lesson19-change',
      title: { en: 'Getting warmer', vi: 'Trời ấm dần' },
      lines: [
        {
          jp: 'もうすぐ 春です。だんだん 暖かく なります。',
          romaji: 'Mō sugu haru desu. Dan dan atatakaku narimasu.',
          meaning: {
            en: 'Spring is coming soon. It is gradually getting warmer.',
            vi: 'Sắp đến mùa xuân. Trời ấm dần lên.'
          },
          ruby: [
            { base: '春', reading: 'はる' },
            { base: '暖', reading: 'あたた' }
          ]
        },
        {
          jp: 'ミラーさんの 日本語も だんだん 上手に なりましたね。',
          romaji: 'Mirā-san no nihongo mo dan dan jōzu ni narimashita ne.',
          meaning: {
            en: "Mr. Miller's Japanese has gradually improved too, has it not?",
            vi: 'Tiếng Nhật của anh Miller cũng khá lên nhỉ.'
          },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' }
          ]
        },
        {
          jp: 'でも まだ 練習が 必要です。',
          romaji: 'Demo mada renshū ga hitsuyō desu.',
          meaning: {
            en: 'But he still needs practice.',
            vi: 'Nhưng vẫn còn phải cố gắng nhiều.'
          },
          ruby: [
            { base: '練', reading: 'れん' },
            { base: '習', reading: 'しゅう' },
            { base: '必', reading: 'ひつ' },
            { base: '要', reading: 'よう' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What season is coming?', vi: 'Mùa nào sắp đến?' },
          choices: [
            { id: 'a', label: { en: 'Spring', vi: 'Mùa xuân' } },
            { id: 'b', label: { en: 'Winter', vi: 'Mùa đông' } },
            { id: 'c', label: { en: 'Summer', vi: 'Mùa hè' } },
            { id: 'd', label: { en: 'Autumn', vi: 'Mùa thu' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What is happening to the weather?', vi: 'Thời tiết thay đổi thế nào?' },
          choices: [
            { id: 'a', label: { en: 'Getting warmer', vi: 'Ấm dần' } },
            { id: 'b', label: { en: 'Getting colder', vi: 'Lạnh dần' } },
            { id: 'c', label: { en: 'Staying the same', vi: 'Không đổi' } },
            { id: 'd', label: { en: 'Not said', vi: 'Không nói' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: {
        en: 'Traditional culture and entertainment',
        vi: 'Văn hóa truyền thống và giải trí'
      },
      includeInQuiz: false,
      intro: {
        en: 'Classic Japanese arts, sports, and pastimes.',
        vi: 'Nghệ thuật, thể thao và giải trí truyền thống Nhật Bản.'
      },
      items: [
        {
          kana: 'さどう',
          kanji: '茶道',
          romaji: 'sadō',
          meaning: { en: 'tea ceremony', vi: 'trà đạo' },
          ruby: [
            { base: '茶', reading: 'さ' },
            { base: '道', reading: 'どう' }
          ]
        },
        {
          kana: 'かどう',
          kanji: '華道',
          romaji: 'kadō',
          meaning: { en: 'flower arrangement (ikebana)', vi: 'nghệ thuật cắm hoa' },
          ruby: [
            { base: '華', reading: 'か' },
            { base: '道', reading: 'どう' }
          ]
        },
        {
          kana: 'しょどう',
          kanji: '書道',
          romaji: 'shodō',
          meaning: { en: 'calligraphy', vi: 'thư pháp' },
          ruby: [
            { base: '書', reading: 'しょ' },
            { base: '道', reading: 'どう' }
          ]
        },
        {
          kana: 'かぶき',
          kanji: '歌舞伎',
          romaji: 'kabuki',
          meaning: { en: 'kabuki theater', vi: 'kịch Kabuki' },
          ruby: [
            { base: '歌', reading: 'か' },
            { base: '舞', reading: 'ぶ' },
            { base: '伎', reading: 'き' }
          ]
        },
        {
          kana: 'のう',
          kanji: '能',
          romaji: 'nō',
          meaning: { en: 'Noh theater', vi: 'kịch Nō' },
          ruby: [{ base: '能', reading: 'のう' }]
        },
        {
          kana: 'ぶんらく',
          kanji: '文楽',
          romaji: 'bunraku',
          meaning: { en: 'Bunraku puppet theater', vi: 'nghệ thuật Bunraku' },
          ruby: [
            { base: '文', reading: 'ぶん' },
            { base: '楽', reading: 'らく' }
          ]
        },
        {
          kana: 'じゅうどう',
          kanji: '柔道',
          romaji: 'jūdō',
          meaning: { en: 'judo', vi: 'Judo' },
          ruby: [
            { base: '柔', reading: 'じゅう' },
            { base: '道', reading: 'どう' }
          ]
        },
        {
          kana: 'けんどう',
          kanji: '剣道',
          romaji: 'kendō',
          meaning: { en: 'kendo', vi: 'Kiếm đạo' },
          ruby: [
            { base: '剣', reading: 'けん' },
            { base: '道', reading: 'どう' }
          ]
        },
        {
          kana: 'からて',
          kanji: '空手',
          romaji: 'karate',
          meaning: { en: 'karate', vi: 'Karate' },
          ruby: [
            { base: '空', reading: 'から' },
            { base: '手', reading: 'て' }
          ]
        },
        {
          kana: 'いご',
          kanji: '囲碁',
          romaji: 'igo',
          meaning: { en: 'go (board game)', vi: 'cờ vây' },
          ruby: [
            { base: '囲', reading: 'い' },
            { base: '碁', reading: 'ご' }
          ]
        },
        {
          kana: 'しょうぎ',
          kanji: '将棋',
          romaji: 'shōgi',
          meaning: { en: 'shogi (Japanese chess)', vi: 'cờ tướng Nhật' },
          ruby: [
            { base: '将', reading: 'しょう' },
            { base: '棋', reading: 'ぎ' }
          ]
        },
        {
          kana: 'カラオケ',
          romaji: 'karaoke',
          meaning: { en: 'karaoke', vi: 'Karaoke' }
        },
        {
          kana: 'ぼんおどり',
          kanji: '盆踊り',
          romaji: 'bon odori',
          meaning: { en: 'Bon dance festival', vi: 'múa Bon' },
          ruby: [
            { base: '盆', reading: 'ぼん' },
            { base: '踊', reading: 'おど' }
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
          kana: 'とうきょうスカイツリー',
          kanji: '東京スカイツリー',
          romaji: 'Tōkyō Sukai Tsurī',
          meaning: {
            en: 'Tokyo Skytree (observation tower in Tokyo)',
            vi: 'Tokyo Skytree (tháp quan sát ở Tokyo)'
          },
          ruby: [
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' }
          ]
        },
        {
          kana: 'かつしかほくさい',
          kanji: '葛飾北斎',
          romaji: 'Katsushika Hokusai',
          meaning: {
            en: 'Katsushika Hokusai (Edo-period artist, 1760-1849)',
            vi: 'Katsushika Hokusai (họa sĩ thời Edo, 1760-1849)'
          },
          ruby: [
            { base: '葛', reading: 'かつ' },
            { base: '飾', reading: 'しか' },
            { base: '北', reading: 'ほく' },
            { base: '斎', reading: 'さい' }
          ]
        }
      ]
    }
  ]
};
