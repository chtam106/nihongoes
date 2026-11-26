import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson29SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-ています (resulting state)',
      items: [
        {
          prompt: {
            en: 'The door is open. Shall I close it?',
            vi: 'Cửa đang mở đấy. Tôi đóng lại nhé?'
          },
          jp: 'ドアが 開いていますよ。閉めましょうか。',
          ruby: [
            { base: '開', reading: 'あ' },
            { base: '閉', reading: 'し' }
          ]
        },
        {
          prompt: {
            en: 'The bank in front of the station was already closed.',
            vi: 'Ngân hàng trước ga đã đóng cửa rồi.'
          },
          jp: '駅前の 銀行は もう 閉まっていました。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '前', reading: 'まえ' },
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '閉', reading: 'し' }
          ]
        },
        {
          prompt: {
            en: 'The light in the meeting room is on. Is someone still there?',
            vi: 'Đèn phòng họp vẫn sáng nhỉ. Chắc vẫn còn ai đó ở trong?'
          },
          jp: '会議室の 電気が ついていますね。まだ だれか いるんでしょうか。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '室', reading: 'しつ' },
            { base: '電', reading: 'でん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'The light in the next room is off. They must have gone to bed.',
            vi: 'Phòng bên cạnh đã tắt đèn. Chắc đã ngủ rồi.'
          },
          jp: '隣の 部屋は 電気が 消えています。もう 寝たんでしょう。',
          ruby: [
            { base: '隣', reading: 'となり' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '電', reading: 'でん' },
            { base: '気', reading: 'き' },
            { base: '消', reading: 'き' },
            { base: '寝', reading: 'ね' }
          ]
        },
        {
          prompt: {
            en: 'This chair is broken, so please do not sit on it.',
            vi: 'Cái ghế này bị hỏng rồi, đừng ngồi nhé.'
          },
          jp: 'この いすは 壊れていますから、座らないで ください。',
          ruby: [
            { base: '壊', reading: 'こわ' },
            { base: '座', reading: 'すわ' }
          ]
        },
        {
          prompt: {
            en: 'This bag is torn, so please give me a new one.',
            vi: 'Cái túi này bị rách rồi, cho tôi cái mới nhé.'
          },
          jp: 'この 袋は 破れていますから、新しいのを ください。',
          ruby: [
            { base: '袋', reading: 'ふくろ' },
            { base: '破', reading: 'やぶ' },
            { base: '新', reading: 'あたら' }
          ]
        },
        {
          prompt: {
            en: 'A button on your shirt has come off.',
            vi: 'Áo sơ mi của anh bị bung cúc kìa.'
          },
          jp: 'シャツの ボタンが 外れていますよ。',
          ruby: [{ base: '外', reading: 'はず' }]
        }
      ]
    },
    {
      pattern: 'V-て しまいました / しまいます',
      items: [
        {
          prompt: {
            en: 'I dropped the rice bowl and broke it.',
            vi: 'Tôi làm rơi bát cơm, vỡ mất rồi.'
          },
          jp: 'お茶碗を 落として、割って しまいました。',
          ruby: [
            { base: '茶', reading: 'ちゃ' },
            { base: '碗', reading: 'わん' },
            { base: '落', reading: 'お' },
            { base: '割', reading: 'わ' }
          ]
        },
        {
          prompt: {
            en: "I got the company president's name wrong in my speech.",
            vi: 'Trong bài phát biểu tôi lỡ nói nhầm tên giám đốc.'
          },
          jp: 'スピーチで 社長の 名前を まちがえて しまいました。',
          ruby: [
            { base: '社', reading: 'しゃ' },
            { base: '長', reading: 'ちょう' },
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' }
          ]
        },
        {
          prompt: {
            en: 'The documents got stained with coffee. Could you replace them with new ones?',
            vi: 'Giấy tờ bị dính cà phê bẩn mất rồi. Anh đổi cho tôi bản mới được không?'
          },
          jp: 'コーヒーで 書類が 汚れて しまいました。新しいのと 取り替えて いただけませんか。',
          ruby: [
            { base: '書', reading: 'しょ' },
            { base: '類', reading: 'るい' },
            { base: '汚', reading: 'よご' },
            { base: '新', reading: 'あたら' },
            { base: '取', reading: 'と' },
            { base: '替', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'I have already finished wiping the window glass.',
            vi: 'Kính cửa sổ thì tôi đã lau xong rồi.'
          },
          jp: '窓の ガラスは もう ふいて しまいました。',
          ruby: [{ base: '窓', reading: 'まど' }]
        },
        {
          prompt: {
            en: 'I will finish tidying the room before the guests arrive.',
            vi: 'Tôi sẽ dọn xong phòng trước khi khách đến.'
          },
          jp: 'お客さんが 来る 前に、部屋を 片づけて しまいます。',
          ruby: [
            { base: '客', reading: 'きゃく' },
            { base: '来', reading: 'く' },
            { base: '前', reading: 'まえ' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '片', reading: 'かた' }
          ]
        },
        {
          prompt: {
            en: "The bookshelf fell over in last night's earthquake.",
            vi: 'Trận động đất tối qua làm đổ cả giá sách.'
          },
          jp: 'ゆうべの 地震で 本棚が 倒れて しまいました。',
          ruby: [
            { base: '地', reading: 'じ' },
            { base: '震', reading: 'しん' },
            { base: '本', reading: 'ほん' },
            { base: '棚', reading: 'だな' },
            { base: '倒', reading: 'たお' }
          ]
        },
        {
          prompt: {
            en: 'The house next door burned down in a fire.',
            vi: 'Ngôi nhà bên cạnh bị cháy rụi trong vụ hỏa hoạn.'
          },
          jp: '火事で 隣の 家が 燃えて しまいました。',
          ruby: [
            { base: '火', reading: 'か' },
            { base: '事', reading: 'じ' },
            { base: '隣', reading: 'となり' },
            { base: '家', reading: 'いえ' },
            { base: '燃', reading: 'も' }
          ]
        }
      ]
    },
    {
      pattern: 'N (place) に 行きます / 来ます / 帰ります',
      patternRuby: [
        { base: '行', reading: 'い' },
        { base: '来', reading: 'き' },
        { base: '帰', reading: 'かえ' }
      ],
      items: [
        {
          prompt: {
            en: 'If you lose your wallet, go to the police box right away.',
            vi: 'Nếu mất ví thì hãy đến đồn cảnh sát ngay.'
          },
          jp: '財布を なくしたら、すぐ 交番に 行って ください。',
          ruby: [
            { base: '財', reading: 'さい' },
            { base: '布', reading: 'ふ' },
            { base: '交', reading: 'こう' },
            { base: '番', reading: 'ばん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'A station attendant came to the platform right away for me.',
            vi: 'Nhân viên nhà ga đã đến sân ga ngay giúp tôi.'
          },
          jp: '駅員が すぐ ホームに 来て くれました。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '員', reading: 'いん' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'I will go back to the office as soon as the meeting ends.',
            vi: 'Họp xong là tôi về công ty ngay.'
          },
          jp: '会議が 終わったら、すぐ 会社に 帰ります。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '終', reading: 'お' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          prompt: {
            en: 'The reporter went west, toward where the fire was.',
            vi: 'Phóng viên đã đi về phía tây, nơi xảy ra hỏa hoạn.'
          },
          jp: 'レポーターは 火事の あった 西の 方に 行きました。',
          ruby: [
            { base: '火', reading: 'か' },
            { base: '事', reading: 'じ' },
            { base: '西', reading: 'にし' },
            { base: '方', reading: 'ほう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'When you get near the station, please give me a call.',
            vi: 'Khi nào đến gần ga thì gọi điện cho tôi nhé.'
          },
          jp: '駅の 近くに 来たら、電話して ください。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '近', reading: 'ちか' },
            { base: '来', reading: 'き' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        }
      ]
    },
    {
      pattern: 'それ / その / そう',
      items: [
        {
          prompt: {
            en: 'I left something on the train. ...Oh no, that is terrible.',
            vi: 'Tôi để quên đồ trên tàu mất rồi. ...Thế thì gay quá nhỉ.'
          },
          jp: '電車に 忘れ物を して しまいました。……それは 大変ですね。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '忘', reading: 'わす' },
            { base: '物', reading: 'もの' },
            { base: '大', reading: 'たい' },
            { base: '変', reading: 'へん' }
          ]
        },
        {
          prompt: {
            en: 'I left my bag on the train that just left. ...What kind of bag is it?',
            vi: 'Tôi để quên cặp trên chuyến tàu vừa rồi. ...Cái cặp đó trông như thế nào?'
          },
          jp: '今の 電車に かばんを 忘れました。……その かばんは どんな かばんですか。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '忘', reading: 'わす' }
          ]
        },
        {
          prompt: {
            en: 'You should reply. Yes, I will do that.',
            vi: 'Anh/chị nên trả lời. Vâng, tôi sẽ làm vậy.'
          },
          jp: '返事を した ほうが いいですよ。ええ、そう します。',
          ruby: [
            { base: '返', reading: 'へん' },
            { base: '事', reading: 'じ' }
          ]
        },
        {
          prompt: {
            en: 'Please try looking carefully once more. ...Yes, I will do that.',
            vi: 'Anh thử tìm kỹ lại một lần nữa xem. ...Vâng, tôi sẽ làm vậy.'
          },
          jp: 'もう 一度 よく 探して みて ください。……はい、そう します。',
          ruby: [
            { base: '一', reading: 'いち' },
            { base: '度', reading: 'ど' },
            { base: '探', reading: 'さが' }
          ]
        },
        {
          prompt: {
            en: 'What kind of bag is it? ...If I remember right, a black one about this big.',
            vi: 'Cặp như thế nào? ...Hình như là cái cặp đen cỡ chừng này.'
          },
          jp: 'どんな かばんですか。……たしか このくらいの 黒い かばんです。',
          ruby: [{ base: '黒', reading: 'くろ' }]
        }
      ]
    },
    {
      pattern: 'ありました',
      items: [
        {
          prompt: {
            en: 'We found your bag.',
            vi: 'Tìm thấy cặp rồi đấy.'
          },
          jp: 'かばん、ありましたよ。'
        },
        {
          prompt: {
            en: 'The forgotten item was on the overhead rack.',
            vi: 'Đồ quên nằm trên giá hành lý.'
          },
          jp: '忘れ物が 網棚に ありました。',
          ruby: [
            { base: '忘', reading: 'わす' },
            { base: '物', reading: 'もの' },
            { base: '網', reading: 'あみ' },
            { base: '棚', reading: 'だな' }
          ]
        },
        {
          prompt: {
            en: 'Thank goodness. It was on the right side of the luggage rack.',
            vi: 'May quá. Nó ở phía bên phải giá để hành lý.'
          },
          jp: 'よかった。網棚の 右側に ありました。',
          ruby: [
            { base: '網', reading: 'あみ' },
            { base: '棚', reading: 'だな' },
            { base: '右', reading: 'みぎ' },
            { base: '側', reading: 'がわ' }
          ]
        },
        {
          prompt: {
            en: 'I found the documents I lost. They were in my desk drawer.',
            vi: 'Giấy tờ bị mất tìm thấy rồi, nằm trong ngăn kéo bàn.'
          },
          jp: 'なくした 書類、机の 引き出しに ありました。',
          ruby: [
            { base: '書', reading: 'しょ' },
            { base: '類', reading: 'るい' },
            { base: '机', reading: 'つくえ' },
            { base: '引', reading: 'ひ' },
            { base: '出', reading: 'だ' }
          ]
        },
        {
          prompt: {
            en: 'Did you find the glasses? ...Yes, they were on the kitchen shelf.',
            vi: 'Tìm thấy cốc chưa? ...Rồi, nó ở trên kệ bếp.'
          },
          jp: 'コップ、ありましたか。……ええ、台所の 棚に ありました。',
          ruby: [
            { base: '台', reading: 'だい' },
            { base: '所', reading: 'どころ' },
            { base: '棚', reading: 'たな' }
          ]
        }
      ]
    },
    {
      pattern: 'どこかで / どこかに',
      items: [
        {
          prompt: {
            en: 'I dropped my wallet somewhere.',
            vi: 'Tôi đánh rơi ví ở đâu đó.'
          },
          jp: 'どこかで 財布を 落としました。',
          ruby: [
            { base: '財', reading: 'さい' },
            { base: '布', reading: 'ふ' },
            { base: '落', reading: 'お' }
          ]
        },
        {
          prompt: {
            en: 'Is there a police box somewhere?',
            vi: 'Ở đâu đó có đồn cảnh sát không?'
          },
          jp: 'どこかに 交番が ありますか。',
          ruby: [
            { base: '交', reading: 'こう' },
            { base: '番', reading: 'ばん' }
          ]
        },
        {
          prompt: {
            en: 'I left my bag somewhere.',
            vi: 'Tôi để quên túi ở đâu đó.'
          },
          jp: 'どこかに かばんを 忘れました。',
          ruby: [{ base: '忘', reading: 'わす' }]
        },
        {
          prompt: {
            en: 'I have heard this song somewhere before.',
            vi: 'Bài hát này tôi đã nghe ở đâu đó rồi.'
          },
          jp: 'この 歌は どこかで 聞いた ことが あります。',
          ruby: [
            { base: '歌', reading: 'うた' },
            { base: '聞', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'Is there somewhere to sit?', vi: 'Có chỗ nào ngồi được không?' },
          jp: 'どこかに 座る 所は ありませんか。',
          ruby: [
            { base: '座', reading: 'すわ' },
            { base: '所', reading: 'ところ' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'Please go ahead.', vi: 'Mời anh/chị đi trước.' },
      jp: 'お先に どうぞ。',
      ruby: [{ base: '先', reading: 'さき' }]
    },
    {
      prompt: { en: 'Oh, thank goodness.', vi: 'Ôi, may quá.' },
      jp: 'ああ、よかった。'
    }
  ]
};
