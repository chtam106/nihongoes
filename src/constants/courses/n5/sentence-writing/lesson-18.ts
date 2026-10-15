import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson18SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V (dictionary form)',
      items: [
        {
          prompt: {
            en: 'I wash my hands every morning. (plain)',
            vi: 'Mỗi sáng tôi rửa tay. (thân mật)'
          },
          jp: '毎朝 手を 洗う。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '手', reading: 'て' },
            { base: '洗', reading: 'あら' }
          ]
        },
        {
          prompt: {
            en: 'Yuki plays the piano every day. (plain)',
            vi: 'Yuki chơi piano mỗi ngày. (thân mật)'
          },
          jp: 'ゆきさんは 毎日 ピアノを 弾く。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '弾', reading: 'ひ' }
          ]
        },
        {
          prompt: { en: 'Alex sings songs at home. (plain)', vi: 'Alex hát ở nhà. (thân mật)' },
          jp: 'アレックスさんは 家で 歌を 歌う。',
          ruby: [
            { base: '家', reading: 'いえ' },
            { base: '歌', reading: 'うた' },
            { base: '歌', reading: 'うた' }
          ]
        },
        {
          prompt: { en: 'Maria collects stamps. (plain)', vi: 'Maria sưu tầm tem. (thân mật)' },
          jp: 'マリアさんは 切手を 集める。',
          ruby: [
            { base: '切', reading: 'きっ' },
            { base: '手', reading: 'て' },
            { base: '集', reading: 'あつ' }
          ]
        },
        {
          prompt: {
            en: 'I throw away the trash every night. (plain)',
            vi: 'Mỗi tối tôi vứt rác. (thân mật)'
          },
          jp: '毎晩 ごみを 捨てる。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '晩', reading: 'ばん' },
            { base: '捨', reading: 'す' }
          ]
        },
        {
          prompt: {
            en: 'The section chief drives to the office. (plain)',
            vi: 'Tổ trưởng lái xe đến công ty. (thân mật)'
          },
          jp: '課長は 会社まで 運転する。',
          ruby: [
            { base: '課', reading: 'か' },
            { base: '長', reading: 'ちょう' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '運', reading: 'うん' },
            { base: '転', reading: 'てん' }
          ]
        }
      ]
    },
    {
      pattern: 'N / V-こと が できます',
      patternRuby: [{ base: 'こと', reading: 'こと' }],
      items: [
        {
          prompt: { en: 'Can you play the piano?', vi: 'Anh/chị chơi piano được không?' },
          jp: 'ピアノが できますか。'
        },
        {
          prompt: { en: 'Yes, I can play the piano.', vi: 'Có, tôi chơi piano được.' },
          jp: 'はい、ピアノを 弾く ことが できます。',
          ruby: [{ base: '弾', reading: 'ひ' }]
        },
        {
          prompt: { en: 'Can you drive?', vi: 'Anh/chị lái xe được không?' },
          jp: '運転が できますか。',
          ruby: [
            { base: '運', reading: 'うん' },
            { base: '転', reading: 'てん' }
          ]
        },
        {
          prompt: { en: 'I can swim 100 meters.', vi: 'Tôi bơi được 100 mét.' },
          jp: '100メートル 泳ぐ ことが できます。',
          ruby: [{ base: '泳', reading: 'およ' }]
        },
        {
          prompt: { en: 'Can I pay in cash?', vi: 'Tôi trả bằng tiền mặt được không?' },
          jp: '現金で 払う ことが できますか。',
          ruby: [
            { base: '現', reading: 'げん' },
            { base: '金', reading: 'きん' },
            { base: '払', reading: 'はら' }
          ]
        },
        {
          prompt: { en: 'Can I exchange this money here?', vi: 'Ở đây đổi tiền này được không?' },
          jp: 'ここで この お金を 換える ことが できますか。',
          ruby: [
            { base: '金', reading: 'かね' },
            { base: '換', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'I can use the Internet at home.', vi: 'Ở nhà tôi dùng Internet được.' },
          jp: '家で インターネットを 使う ことが できます。',
          ruby: [
            { base: '家', reading: 'いえ' },
            { base: '使', reading: 'つか' }
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
      items: [
        {
          prompt: { en: 'What is your hobby?', vi: 'Sở thích của anh/chị là gì?' },
          jp: '趣味は 何ですか。',
          ruby: [
            { base: '趣', reading: 'しゅ' },
            { base: '味', reading: 'み' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          prompt: { en: 'My hobby is music.', vi: 'Sở thích của tôi là âm nhạc.' },
          jp: '私の 趣味は 音楽です。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '趣', reading: 'しゅ' },
            { base: '味', reading: 'み' },
            { base: '音', reading: 'おん' },
            { base: '楽', reading: 'がく' }
          ]
        },
        {
          prompt: { en: 'My hobby is writing a diary.', vi: 'Sở thích của tôi là viết nhật ký.' },
          jp: '私の 趣味は 日記を 書く ことです。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '趣', reading: 'しゅ' },
            { base: '味', reading: 'み' },
            { base: '日', reading: 'にっ' },
            { base: '記', reading: 'き' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'My hobby is collecting stamps.', vi: 'Sở thích của tôi là sưu tầm tem.' },
          jp: '私の 趣味は 切手を 集める ことです。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '趣', reading: 'しゅ' },
            { base: '味', reading: 'み' },
            { base: '切', reading: 'きっ' },
            { base: '手', reading: 'て' },
            { base: '集', reading: 'あつ' }
          ]
        },
        {
          prompt: {
            en: "The company president's hobby is horses.",
            vi: 'Sở thích của giám đốc là ngựa.'
          },
          jp: '社長の 趣味は 馬です。',
          ruby: [
            { base: '社', reading: 'しゃ' },
            { base: '長', reading: 'ちょう' },
            { base: '趣', reading: 'しゅ' },
            { base: '味', reading: 'み' },
            { base: '馬', reading: 'うま' }
          ]
        },
        {
          prompt: {
            en: "The manager's hobby is looking at animals.",
            vi: 'Sở thích của trưởng phòng là xem động vật.'
          },
          jp: '部長の 趣味は 動物を 見る ことです。',
          ruby: [
            { base: '部', reading: 'ぶ' },
            { base: '長', reading: 'ちょう' },
            { base: '趣', reading: 'しゅ' },
            { base: '味', reading: 'み' },
            { base: '動', reading: 'どう' },
            { base: '物', reading: 'ぶつ' },
            { base: '見', reading: 'み' }
          ]
        }
      ]
    },
    {
      pattern: 'V / N の / time まえに',
      items: [
        {
          prompt: { en: 'Before a meal, I wash my hands.', vi: 'Trước bữa ăn, tôi rửa tay.' },
          jp: '食事の 前に、手を 洗います。',
          ruby: [
            { base: '食', reading: 'しょく' },
            { base: '事', reading: 'じ' },
            { base: '前', reading: 'まえ' },
            { base: '手', reading: 'て' },
            { base: '洗', reading: 'あら' }
          ]
        },
        {
          prompt: {
            en: 'Before I throw away the trash, I look at it.',
            vi: 'Trước khi vứt rác, tôi xem lại.'
          },
          jp: 'ごみを 捨てる 前に、見ます。',
          ruby: [
            { base: '捨', reading: 'す' },
            { base: '前', reading: 'まえ' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: 'Before I reserve a hotel, I use the Internet.',
            vi: 'Trước khi đặt khách sạn, tôi dùng Internet.'
          },
          jp: 'ホテルを 予約する 前に、インターネットを 使います。',
          ruby: [
            { base: '予', reading: 'よ' },
            { base: '約', reading: 'やく' },
            { base: '前', reading: 'まえ' },
            { base: '使', reading: 'つか' }
          ]
        },
        {
          prompt: {
            en: 'Before prayer, I wash my hands.',
            vi: 'Trước khi cầu nguyện, tôi rửa tay.'
          },
          jp: 'お祈りの 前に、手を 洗います。',
          ruby: [
            { base: '祈', reading: 'いの' },
            { base: '前', reading: 'まえ' },
            { base: '手', reading: 'て' },
            { base: '洗', reading: 'あら' }
          ]
        },
        {
          prompt: {
            en: 'Tanaka went out one hour ago.',
            vi: 'Anh Tanaka đã ra ngoài cách đây một tiếng.'
          },
          jp: '田中さんは 1時間 前に 出かけました。',
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
      items: [
        {
          prompt: {
            en: 'In the city it is hard to see horses.',
            vi: 'Ở thành phố khó mà thấy ngựa.'
          },
          jp: '町では なかなか 馬を 見る ことが できません。',
          ruby: [
            { base: '町', reading: 'まち' },
            { base: '馬', reading: 'うま' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: 'I am busy, so I can hardly write in my diary.',
            vi: 'Bận nên khó mà viết nhật ký.'
          },
          jp: '忙しくて、なかなか 日記を 書く ことが できません。',
          ruby: [
            { base: '忙', reading: 'いそが' },
            { base: '日', reading: 'にっ' },
            { base: '記', reading: 'き' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'I can hardly reserve a popular hotel.',
            vi: 'Khó mà đặt được khách sạn nổi tiếng.'
          },
          jp: '人気の ホテルは なかなか 予約することが できません。',
          ruby: [
            { base: '人', reading: 'にん' },
            { base: '気', reading: 'き' },
            { base: '予', reading: 'よ' },
            { base: '約', reading: 'やく' }
          ]
        },
        {
          prompt: {
            en: 'I can hardly throw away old letters.',
            vi: 'Khó mà vứt thư cũ.'
          },
          jp: '古い 手紙は なかなか 捨てることが できません。',
          ruby: [
            { base: '古', reading: 'ふる' },
            { base: '手', reading: 'て' },
            { base: '紙', reading: 'がみ' },
            { base: '捨', reading: 'す' }
          ]
        },
        {
          prompt: {
            en: 'I can hardly play the piano well.',
            vi: 'Khó mà chơi piano giỏi.'
          },
          jp: 'なかなか ピアノを 上手に 弾く ことが できません。',
          ruby: [
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' },
            { base: '弾', reading: 'ひ' }
          ]
        }
      ]
    },
    {
      pattern: 'ぜひ',
      items: [
        {
          prompt: { en: 'I definitely want to ride a horse.', vi: 'Tôi rất muốn cưỡi ngựa.' },
          jp: 'ぜひ 馬に 乗りたいです。',
          ruby: [
            { base: '馬', reading: 'うま' },
            { base: '乗', reading: 'の' }
          ]
        },
        {
          prompt: {
            en: 'Please come to our company by all means.',
            vi: 'Nhất định hãy đến công ty chúng tôi.'
          },
          jp: 'ぜひ 会社へ 来て ください。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'I definitely want to hear the president sing.',
            vi: 'Tôi rất muốn nghe giám đốc hát.'
          },
          jp: 'ぜひ 社長の 歌を 聞きたいです。',
          ruby: [
            { base: '社', reading: 'しゃ' },
            { base: '長', reading: 'ちょう' },
            { base: '歌', reading: 'うた' },
            { base: '聞', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'Please play the piano for us by all means.',
            vi: 'Nhất định hãy chơi piano cho chúng tôi.'
          },
          jp: 'ぜひ ピアノを 弾いて ください。',
          ruby: [{ base: '弾', reading: 'ひ' }]
        },
        {
          prompt: {
            en: 'I definitely want to collect old maps.',
            vi: 'Tôi rất muốn sưu tầm bản đồ cũ.'
          },
          jp: 'ぜひ 古い 地図を 集めたいです。',
          ruby: [
            { base: '古', reading: 'ふる' },
            { base: '地', reading: 'ち' },
            { base: '図', reading: 'ず' },
            { base: '集', reading: 'あつ' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'especially', vi: 'đặc biệt là' },
      jp: '特に',
      ruby: [{ base: '特', reading: 'とく' }]
    },
    {
      prompt: { en: 'Oh, really? (shows surprise)', vi: 'Thế á! (biểu thị sự ngạc nhiên)' },
      jp: 'へえ。'
    },
    {
      prompt: { en: 'That is interesting, is it not?', vi: 'Hay thật nhỉ.' },
      jp: 'それは 面白いですね。',
      ruby: [
        { base: '面', reading: 'おも' },
        { base: '白', reading: 'しろ' }
      ]
    },
    {
      prompt: {
        en: 'not easily, not as expected (with negative)',
        vi: 'khó mà, mãi mà (dùng với thể phủ định)'
      },
      jp: 'なかなか'
    },
    {
      prompt: { en: 'Really?', vi: 'Thật không ạ?' },
      jp: '本当ですか。',
      ruby: [
        { base: '本', reading: 'ほん' },
        { base: '当', reading: 'とう' }
      ]
    },
    {
      prompt: { en: 'by all means, definitely', vi: 'nhất định' },
      jp: 'ぜひ。'
    }
  ]
};
