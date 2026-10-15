import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson30SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N1 に N2 が V-て あります',
      items: [
        {
          prompt: {
            en: 'A poster has been pasted on the wall.',
            vi: 'Poster đã được dán trên tường.'
          },
          jp: '壁に ポスターが はって あります。ポスターを はります。',
          ruby: [{ base: '壁', reading: 'かべ' }]
        },
        {
          prompt: {
            en: 'A calendar has been hung in the hallway.',
            vi: 'Lịch đã được treo ở hành lang.'
          },
          jp: '廊下に カレンダーが 掛けて あります。カレンダーを 掛けます。',
          ruby: [
            { base: '廊', reading: 'ろう' },
            { base: '下', reading: 'か' },
            { base: '掛', reading: 'か' },
            { base: '掛', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'A doll has been set as decoration at the entrance.',
            vi: 'Búp bê đã được trang trí ở lối vào.'
          },
          jp: '玄関に 人形が 飾って あります。人形を 飾ります。',
          ruby: [
            { base: '玄', reading: 'げん' },
            { base: '関', reading: 'かん' },
            { base: '人', reading: 'にん' },
            { base: '形', reading: 'ぎょう' },
            { base: '飾', reading: 'かざ' },
            { base: '人', reading: 'にん' },
            { base: '形', reading: 'ぎょう' },
            { base: '飾', reading: 'かざ' }
          ]
        },
        {
          prompt: {
            en: 'A vase has been arranged in the center.',
            vi: 'Bình hoa đã được xếp ở chính giữa.'
          },
          jp: '真ん中に 花瓶が 並べて あります。花瓶を 並べます。',
          ruby: [
            { base: '真', reading: 'ま' },
            { base: '中', reading: 'なか' },
            { base: '花', reading: 'か' },
            { base: '瓶', reading: 'びん' },
            { base: '並', reading: 'なら' },
            { base: '花', reading: 'か' },
            { base: '瓶', reading: 'びん' },
            { base: '並', reading: 'なら' }
          ]
        },
        {
          prompt: {
            en: 'Trees have been planted around the pond.',
            vi: 'Cây đã được trồng quanh ao.'
          },
          jp: '池の 周りに 木が 植えて あります。木を 植えます。',
          ruby: [
            { base: '池', reading: 'いけ' },
            { base: '周', reading: 'まわ' },
            { base: '木', reading: 'き' },
            { base: '植', reading: 'う' },
            { base: '木', reading: 'き' },
            { base: '植', reading: 'う' }
          ]
        },
        {
          prompt: {
            en: 'A notice has been put in the corner. A mirror is in the drawer.',
            vi: 'Thông báo đặt ở góc. Gương ở ngăn kéo.'
          },
          jp: '隅に お知らせが 置いて あります。引き出しに 鏡が あります。',
          ruby: [
            { base: '隅', reading: 'すみ' },
            { base: '知', reading: 'し' },
            { base: '置', reading: 'お' },
            { base: '引', reading: 'ひ' },
            { base: '出', reading: 'だ' },
            { base: '鏡', reading: 'かがみ' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て おきます',
      items: [
        {
          prompt: {
            en: 'I will put the backpack back in its original place in advance.',
            vi: 'Tôi sẽ để ba lô lại chỗ cũ trước.'
          },
          jp: 'リュックを 元の 所に 戻して おきます。リュックを 戻します。',
          ruby: [
            { base: '元', reading: 'もと' },
            { base: '所', reading: 'ところ' },
            { base: '戻', reading: 'もど' },
            { base: '戻', reading: 'もど' }
          ]
        },
        {
          prompt: {
            en: 'I will pack the emergency kit bag in advance.',
            vi: 'Tôi sẽ gom túi khẩn cấp trước.'
          },
          jp: '非常袋を まとめて おきます。非常袋を まとめます。',
          ruby: [
            { base: '非', reading: 'ひ' },
            { base: '常', reading: 'じょう' },
            { base: '袋', reading: 'ぶくろ' },
            { base: '非', reading: 'ひ' },
            { base: '常', reading: 'じょう' },
            { base: '袋', reading: 'ぶくろ' }
          ]
        },
        {
          prompt: {
            en: 'I will put the flashlight away in the trash-can area? No - in the bag.',
            vi: 'Tôi sẽ cất đèn pin vào túi.'
          },
          jp: '懐中電灯を しまって おきます。懐中電灯を しまいます。',
          ruby: [
            { base: '懐', reading: 'かい' },
            { base: '中', reading: 'ちゅう' },
            { base: '電', reading: 'でん' },
            { base: '灯', reading: 'とう' },
            { base: '懐', reading: 'かい' },
            { base: '中', reading: 'ちゅう' },
            { base: '電', reading: 'でん' },
            { base: '灯', reading: 'とう' }
          ]
        },
        {
          prompt: {
            en: 'I will decide the class schedule in advance.',
            vi: 'Tôi sẽ quyết định lịch giờ học trước.'
          },
          jp: '授業の 予定を 決めて おきます。予定を 決めます。',
          ruby: [
            { base: '授', reading: 'じゅ' },
            { base: '業', reading: 'ぎょう' },
            { base: '予', reading: 'よ' },
            { base: '定', reading: 'てい' },
            { base: '決', reading: 'き' },
            { base: '予', reading: 'よ' },
            { base: '定', reading: 'てい' },
            { base: '決', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'I will preview and review the lecture in advance.',
            vi: 'Tôi sẽ chuẩn bị bài và ôn tập bài giảng trước.'
          },
          jp: '講義を 予習して おきます。講義を 復習します。予習します。',
          ruby: [
            { base: '講', reading: 'こう' },
            { base: '義', reading: 'ぎ' },
            { base: '予', reading: 'よ' },
            { base: '習', reading: 'しゅう' },
            { base: '講', reading: 'こう' },
            { base: '義', reading: 'ぎ' },
            { base: '復', reading: 'ふく' },
            { base: '習', reading: 'しゅう' },
            { base: '予', reading: 'よ' },
            { base: '習', reading: 'しゅう' }
          ]
        },
        {
          prompt: {
            en: 'Please leave the chairs as they are.',
            vi: 'Hãy để ghế nguyên như thế.'
          },
          jp: 'いすは そのままに して おいて ください。そのままに します。'
        }
      ]
    },
    {
      pattern: 'まだ + affirmative',
      items: [
        {
          prompt: {
            en: 'The meeting is still going on.',
            vi: 'Cuộc họp vẫn còn diễn ra.'
          },
          jp: 'ミーティングは まだ 続いています。',
          ruby: [{ base: '続', reading: 'つづ' }]
        },
        {
          prompt: {
            en: 'I am still using the guidebook.',
            vi: 'Tôi vẫn còn dùng sách hướng dẫn.'
          },
          jp: 'まだ ガイドブックを 使っています。',
          ruby: [{ base: '使', reading: 'つか' }]
        },
        {
          prompt: {
            en: 'The schedule chart is still on the wall.',
            vi: 'Lịch làm việc vẫn còn trên tường.'
          },
          jp: '予定表は まだ 壁に あります。',
          ruby: [
            { base: '予', reading: 'よ' },
            { base: '定', reading: 'てい' },
            { base: '表', reading: 'ひょう' },
            { base: '壁', reading: 'かべ' }
          ]
        },
        {
          prompt: {
            en: 'I still live with this emergency kit.',
            vi: 'Tôi vẫn sống với túi khẩn cấp này.'
          },
          jp: '非常時も まだ 生活します。',
          ruby: [
            { base: '非', reading: 'ひ' },
            { base: '常', reading: 'じょう' },
            { base: '時', reading: 'じ' },
            { base: '生', reading: 'せい' },
            { base: '活', reading: 'かつ' }
          ]
        },
        {
          prompt: {
            en: 'I am still happy. Then I wake up.',
            vi: 'Tôi vẫn còn vui. Rồi tôi thức giấc.'
          },
          jp: 'まだ うれしいです。すると 目が 覚めます。',
          ruby: [
            { base: '目', reading: 'め' },
            { base: '覚', reading: 'さ' }
          ]
        }
      ]
    },
    {
      pattern: 'N とか、N とか',
      items: [
        {
          prompt: {
            en: 'I put in a flashlight and a guidebook, and so on.',
            vi: 'Tôi để đèn pin, sách hướng dẫn, v.v.'
          },
          jp: '懐中電灯～とか ガイドブック～とかを 入れます。',
          ruby: [
            { base: '懐', reading: 'かい' },
            { base: '中', reading: 'ちゅう' },
            { base: '電', reading: 'でん' },
            { base: '灯', reading: 'とう' },
            { base: '入', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'I decorate with dolls and vases, and so on.',
            vi: 'Tôi trang trí bằng búp bê, bình hoa, v.v.'
          },
          jp: '人形とか 花瓶とかを 飾ります。',
          ruby: [
            { base: '人', reading: 'にん' },
            { base: '形', reading: 'ぎょう' },
            { base: '花', reading: 'か' },
            { base: '瓶', reading: 'びん' },
            { base: '飾', reading: 'かざ' }
          ]
        },
        {
          prompt: {
            en: 'I use the trash can and the drawer, and so on.',
            vi: 'Tôi dùng thùng rác, ngăn kéo, v.v.'
          },
          jp: 'ごみ箱とか 引き出しとかを 使います。',
          ruby: [
            { base: '箱', reading: 'ばこ' },
            { base: '引', reading: 'ひ' },
            { base: '出', reading: 'だ' },
            { base: '使', reading: 'つか' }
          ]
        },
        {
          prompt: {
            en: 'One day I dreamed of a round ball.',
            vi: 'Một ngày nào đó tôi mơ thấy quả bóng tròn.'
          },
          jp: 'ある～日、丸い ボールの ような 夢を 見ます。',
          ruby: [
            { base: '日', reading: 'ひ' },
            { base: '丸', reading: 'まる' },
            { base: '夢', reading: 'ゆめ' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: 'I dislike meetings and lectures, and so on.',
            vi: 'Tôi ghét họp và bài giảng, v.v.'
          },
          jp: 'ミーティングとか 講義とかは 嫌です。',
          ruby: [
            { base: '講', reading: 'こう' },
            { base: '義', reading: 'ぎ' },
            { base: '嫌', reading: 'いや' }
          ]
        }
      ]
    },
    {
      pattern: 'Trợ từ + も',
      items: [
        {
          prompt: {
            en: 'There is a trash can at the entrance too.',
            vi: 'Lối vào cũng có thùng rác.'
          },
          jp: '玄関にも ごみ箱が あります。',
          ruby: [
            { base: '玄', reading: 'げん' },
            { base: '関', reading: 'かん' },
            { base: '箱', reading: 'ばこ' }
          ]
        },
        {
          prompt: {
            en: 'You can also put a schedule on the calendar.',
            vi: 'Trên lịch cũng ghi được kế hoạch.'
          },
          jp: 'カレンダーにも 予定が 書けます。',
          ruby: [
            { base: '予', reading: 'よ' },
            { base: '定', reading: 'てい' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'There are also trees around the pond.',
            vi: 'Quanh ao cũng có cây.'
          },
          jp: '池の 周りにも 木が あります。',
          ruby: [
            { base: '池', reading: 'いけ' },
            { base: '周', reading: 'まわ' },
            { base: '木', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'I do not go to the hallway either.',
            vi: 'Tôi cũng không ra hành lang.'
          },
          jp: '廊下へも 行きません。',
          ruby: [
            { base: '廊', reading: 'ろう' },
            { base: '下', reading: 'か' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'In an emergency I use a backpack too.',
            vi: 'Lúc khẩn cấp tôi cũng dùng ba lô.'
          },
          jp: '非常時にも リュックを 使います。',
          ruby: [
            { base: '非', reading: 'ひ' },
            { base: '常', reading: 'じょう' },
            { base: '時', reading: 'じ' },
            { base: '使', reading: 'つか' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'In that case I have to prepare one too.',
        vi: 'Thế thì tôi cũng phải chuẩn bị sẵn thôi.'
      },
      jp: 'それで 私も 揃えなきゃ。',
      ruby: [
        { base: '私', reading: 'わたし' },
        { base: '揃', reading: 'そろ' }
      ]
    }
  ]
};
