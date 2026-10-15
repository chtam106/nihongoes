import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson29SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-ています (resulting state)',
      items: [
        {
          prompt: {
            en: 'The door is open. The door opens.',
            vi: 'Cửa đang mở. Cửa mở.'
          },
          jp: 'ドアが 開いています。ドアが 開きます。',
          ruby: [
            { base: '開', reading: 'あ' },
            { base: '開', reading: 'あ' }
          ]
        },
        {
          prompt: {
            en: 'The window is closed. The window closes.',
            vi: 'Cửa sổ đang đóng. Cửa sổ đóng.'
          },
          jp: '窓が 閉まっています。窓が 閉まります。',
          ruby: [
            { base: '窓', reading: 'まど' },
            { base: '閉', reading: 'し' },
            { base: '窓', reading: 'まど' },
            { base: '閉', reading: 'し' }
          ]
        },
        {
          prompt: {
            en: 'The light is on. The light turns on.',
            vi: 'Đèn đang sáng. Đèn sáng.'
          },
          jp: '電気が ついています。電気が つきます。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '気', reading: 'き' },
            { base: '電', reading: 'でん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'The light is off. The light goes out.',
            vi: 'Đèn đang tắt. Đèn tắt.'
          },
          jp: '電気が 消えています。電気が 消えます。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '気', reading: 'き' },
            { base: '消', reading: 'き' },
            { base: '電', reading: 'でん' },
            { base: '気', reading: 'き' },
            { base: '消', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'The chair is broken. A pocket is attached to the bag.',
            vi: 'Ghế bị hỏng. Túi xách có túi gắn.'
          },
          jp: 'いすが 壊れています。いすが 壊れます。かばんに ポケットが 付きます。',
          ruby: [
            { base: '壊', reading: 'こわ' },
            { base: '壊', reading: 'こわ' },
            { base: '付', reading: 'つ' }
          ]
        },
        {
          prompt: {
            en: 'The glass is cracked. The branch is snapped. The bag is torn. The plate is dirty.',
            vi: 'Cốc bị vỡ. Cành gãy. Túi rách. Đĩa bẩn.'
          },
          jp: 'コップが 割れています。コップが 割れます。枝が 折れています。枝が 折れます。袋が 破れています。袋が 破れます。お皿が 汚れています。お皿が 汚れます。',
          ruby: [
            { base: '割', reading: 'わ' },
            { base: '割', reading: 'わ' },
            { base: '枝', reading: 'えだ' },
            { base: '折', reading: 'お' },
            { base: '枝', reading: 'えだ' },
            { base: '折', reading: 'お' },
            { base: '袋', reading: 'ふくろ' },
            { base: '破', reading: 'やぶ' },
            { base: '袋', reading: 'ふくろ' },
            { base: '破', reading: 'やぶ' },
            { base: '皿', reading: 'さら' },
            { base: '汚', reading: 'よご' },
            { base: '皿', reading: 'さら' },
            { base: '汚', reading: 'よご' }
          ]
        },
        {
          prompt: {
            en: 'The button has come off. The car has stopped. The lock is locked.',
            vi: 'Nút bị bung. Xe đã dừng. Khóa đang khóa.'
          },
          jp: 'ボタンが 外れています。ボタンが 外れます。車が 止まっています。車が 止まります。かぎが 掛かっています。かぎが 掛かります。',
          ruby: [
            { base: '外', reading: 'はず' },
            { base: '外', reading: 'はず' },
            { base: '車', reading: 'くるま' },
            { base: '止', reading: 'と' },
            { base: '車', reading: 'くるま' },
            { base: '止', reading: 'と' },
            { base: '掛', reading: 'か' },
            { base: '掛', reading: 'か' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て しまいました / しまいます',
      items: [
        {
          prompt: {
            en: 'I dropped the rice bowl, unfortunately.',
            vi: 'Tôi làm rơi bát cơm mất rồi.'
          },
          jp: 'お茶碗を 落として しまいました。お茶碗を 落とします。',
          ruby: [
            { base: '茶', reading: 'ちゃ' },
            { base: '碗', reading: 'わん' },
            { base: '落', reading: 'お' },
            { base: '茶', reading: 'ちゃ' },
            { base: '碗', reading: 'わん' },
            { base: '落', reading: 'お' }
          ]
        },
        {
          prompt: {
            en: 'I made a mistake in the speech, unfortunately.',
            vi: 'Tôi nói nhầm trong bài diễn văn mất rồi.'
          },
          jp: 'スピーチを まちがえて しまいました。よく まちがえます。'
        },
        {
          prompt: {
            en: 'The documents got dirty, unfortunately. I will replace them.',
            vi: 'Giấy tờ bị bẩn mất rồi. Tôi sẽ thay.'
          },
          jp: '書類が 汚れて しまいました。書類を 取り替えます。',
          ruby: [
            { base: '書', reading: 'しょ' },
            { base: '類', reading: 'るい' },
            { base: '汚', reading: 'よご' },
            { base: '書', reading: 'しょ' },
            { base: '類', reading: 'るい' },
            { base: '取', reading: 'と' },
            { base: '替', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'I finished wiping the glass.',
            vi: 'Tôi lau thủy tinh xong rồi.'
          },
          jp: 'ガラスを ふいて しまいました。ガラスを ふきます。'
        },
        {
          prompt: {
            en: 'I already tidied the room.',
            vi: 'Tôi đã dọn phòng xong.'
          },
          jp: '部屋を 片づけて しまいました。部屋を 片づけます。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '片', reading: 'かた' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '片', reading: 'かた' }
          ]
        },
        {
          prompt: {
            en: 'The wall collapsed in the earthquake, unfortunately.',
            vi: 'Tường đổ trong động đất mất rồi.'
          },
          jp: '地震で 壁が 倒れて しまいました。壁が 倒れます。',
          ruby: [
            { base: '地', reading: 'じ' },
            { base: '震', reading: 'しん' },
            { base: '壁', reading: 'かべ' },
            { base: '倒', reading: 'たお' },
            { base: '壁', reading: 'かべ' },
            { base: '倒', reading: 'たお' }
          ]
        },
        {
          prompt: {
            en: 'The house is burning, unfortunately. It burns.',
            vi: 'Nhà đang cháy mất rồi. Nó cháy.'
          },
          jp: '家が 燃えて しまいました。家が 燃えます。',
          ruby: [
            { base: '家', reading: 'いえ' },
            { base: '燃', reading: 'も' },
            { base: '家', reading: 'いえ' },
            { base: '燃', reading: 'も' }
          ]
        }
      ]
    },
    {
      pattern: 'N (place) に 行きます / 来ます / 帰ります',
      items: [
        {
          prompt: {
            en: 'I will go to the police box.',
            vi: 'Tôi sẽ đi đồn cảnh sát.'
          },
          jp: '交番に 行きます。',
          ruby: [
            { base: '交', reading: 'こう' },
            { base: '番', reading: 'ばん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'The station staff came to the platform.',
            vi: 'Nhân viên nhà ga đến sân ga.'
          },
          jp: '駅員が ホームに 来ました。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '員', reading: 'いん' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'I will go back in front of the station.',
            vi: 'Tôi sẽ về trước ga.'
          },
          jp: '駅前に 帰ります。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '前', reading: 'まえ' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          prompt: {
            en: 'The reporter will go to the west side.',
            vi: 'Phóng viên sẽ đi phía tây.'
          },
          jp: 'レポーターは 西～の方に 行きます。',
          ruby: [
            { base: '西', reading: 'にし' },
            { base: '方', reading: 'ほう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'Please go ahead. I will go to that area.',
            vi: 'Mời anh/chị cứ về trước. Tôi sẽ đến khu đó.'
          },
          jp: 'お先に どうぞ。あの～辺に 行きます。',
          ruby: [
            { base: '先', reading: 'さき' },
            { base: '辺', reading: 'へん' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'それ / その / そう',
      items: [
        {
          prompt: {
            en: 'I left something behind. That is terrible.',
            vi: 'Tôi để quên đồ. Thế thì gay nhỉ.'
          },
          jp: '忘れ物を しました。それは 大変ですね。',
          ruby: [
            { base: '忘', reading: 'わす' },
            { base: '物', reading: 'もの' },
            { base: '大', reading: 'たい' },
            { base: '変', reading: 'へん' }
          ]
        },
        {
          prompt: {
            en: 'About that train that just left - I do not remember.',
            vi: 'Chuyến tàu vừa chạy đó - tôi không nhớ.'
          },
          jp: 'その 今の 電車は 覚えていません。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '覚', reading: 'おぼ' }
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
            en: 'The clock hand points to 3. I will do that too.',
            vi: 'Kim đồng hồ chỉ số 3. Tôi cũng làm vậy.'
          },
          jp: '時計の 針が 3を 指します。そう します。',
          ruby: [
            { base: '時', reading: 'と' },
            { base: '計', reading: 'けい' },
            { base: '針', reading: 'はり' },
            { base: '指', reading: 'さ' }
          ]
        },
        {
          prompt: {
            en: 'If I remember correctly, that bag is about this size.',
            vi: 'Nếu không nhầm, túi đó cỡ tầm này.'
          },
          jp: 'たしか その かばんは このくらいです。'
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
            en: 'Thank goodness - it was on the right side.',
            vi: 'May quá - nó ở bên phải.'
          },
          jp: 'よかった。右～側に ありました。',
          ruby: [
            { base: '右', reading: 'みぎ' },
            { base: '側', reading: 'がわ' }
          ]
        },
        {
          prompt: {
            en: 'The reporter found the documents.',
            vi: 'Phóng viên tìm thấy giấy tờ.'
          },
          jp: 'レポーターが 書類を 見つけました。書類が ありました。',
          ruby: [
            { base: '書', reading: 'しょ' },
            { base: '類', reading: 'るい' },
            { base: '見', reading: 'み' },
            { base: '書', reading: 'しょ' },
            { base: '類', reading: 'るい' }
          ]
        },
        {
          prompt: {
            en: 'The glass cup was under the table.',
            vi: 'Cốc thủy tinh ở dưới bàn.'
          },
          jp: 'ガラスの コップが ありました。'
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
            en: 'I heard a speech somewhere.',
            vi: 'Tôi nghe bài diễn văn ở đâu đó.'
          },
          jp: 'どこかで スピーチを 聞きました。',
          ruby: [{ base: '聞', reading: 'き' }]
        },
        {
          prompt: {
            en: 'Please wipe it somewhere clean.',
            vi: 'Hãy lau nó ở chỗ sạch nào đó.'
          },
          jp: 'どこかで ふいて ください。'
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'Please go ahead.', vi: 'Mời anh/chị cứ về trước.' },
      jp: 'お先に どうぞ。',
      ruby: [{ base: '先', reading: 'さき' }]
    },
    {
      prompt: { en: 'Oh, thank goodness.', vi: 'Ôi, may quá.' },
      jp: 'ああ、よかった。'
    }
  ]
};
