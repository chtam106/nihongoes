import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson13SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N が 欲しい',
      patternRuby: [{ base: '欲', reading: 'ほ' }],
      items: [
        {
          prompt: { en: 'I want a spacious room.', vi: 'Tôi muốn phòng rộng.' },
          jp: '広い 部屋が 欲しいです。',
          ruby: [
            { base: '広', reading: 'ひろ' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '欲', reading: 'ほ' }
          ]
        },
        {
          prompt: { en: 'I do not want a cramped room.', vi: 'Tôi không muốn phòng chật.' },
          jp: '狭い 部屋は 欲しくないです。',
          ruby: [
            { base: '狭', reading: 'せま' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '欲', reading: 'ほ' }
          ]
        },
        {
          prompt: { en: 'I want a book on fine arts.', vi: 'Tôi muốn sách mỹ thuật.' },
          jp: '美術の 本が 欲しいです。',
          ruby: [
            { base: '美', reading: 'び' },
            { base: '術', reading: 'じゅつ' },
            { base: '本', reading: 'ほん' },
            { base: '欲', reading: 'ほ' }
          ]
        },
        {
          prompt: { en: 'What do you want?', vi: 'Bạn muốn gì?' },
          jp: '何が 欲しいですか。',
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '欲', reading: 'ほ' }
          ]
        },
        {
          prompt: { en: 'I want a new camera.', vi: 'Tôi muốn máy ảnh mới.' },
          jp: '新しい カメラが 欲しいです。',
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '欲', reading: 'ほ' }
          ]
        }
      ]
    },
    {
      pattern: 'V-stem + たい',
      items: [
        {
          prompt: { en: 'I want to play.', vi: 'Tôi muốn chơi.' },
          jp: '遊びたいです。',
          ruby: [{ base: '遊', reading: 'あそ' }]
        },
        {
          prompt: { en: 'I want to swim.', vi: 'Tôi muốn bơi.' },
          jp: '泳ぎたいです。',
          ruby: [{ base: '泳', reading: 'およ' }]
        },
        {
          prompt: { en: 'I want to pick up a friend.', vi: 'Tôi muốn đón bạn.' },
          jp: '友達を 迎えたいです。',
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '迎', reading: 'むか' }
          ]
        },
        {
          prompt: { en: 'I want to get married.', vi: 'Tôi muốn kết hôn.' },
          jp: '結婚したいです。',
          ruby: [
            { base: '結', reading: 'けっ' },
            { base: '婚', reading: 'こん' }
          ]
        },
        {
          prompt: { en: 'I want to shop.', vi: 'Tôi muốn mua sắm.' },
          jp: '買い物したいです。',
          ruby: [
            { base: '買', reading: 'か' },
            { base: '物', reading: 'もの' }
          ]
        },
        {
          prompt: { en: 'I want to have a meal.', vi: 'Tôi muốn dùng bữa.' },
          jp: '食事したいです。',
          ruby: [
            { base: '食', reading: 'しょく' },
            { base: '事', reading: 'じ' }
          ]
        },
        {
          prompt: { en: 'I want to take a walk.', vi: 'Tôi muốn đi dạo.' },
          jp: '散歩したいです。',
          ruby: [
            { base: '散', reading: 'さん' },
            { base: '歩', reading: 'ぽ' }
          ]
        },
        {
          prompt: { en: 'Work is tough, so I am tired.', vi: 'Việc vất vả nên tôi mệt.' },
          jp: '仕事は 大変ですから、疲れました。',
          ruby: [
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '大', reading: 'たい' },
            { base: '変', reading: 'へん' },
            { base: '疲', reading: 'つか' }
          ]
        },
        {
          prompt: { en: 'I play in the park.', vi: 'Tôi chơi ở công viên.' },
          jp: '公園で 遊びます。',
          ruby: [
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '遊', reading: 'あそ' }
          ]
        },
        {
          prompt: { en: 'I swim in the pool.', vi: 'Tôi bơi ở bể bơi.' },
          jp: 'プールで 泳ぎます。',
          ruby: [{ base: '泳', reading: 'およ' }]
        },
        {
          prompt: { en: 'I pick up a friend at the station.', vi: 'Tôi đón bạn ở ga.' },
          jp: '駅で 友達を 迎えます。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '迎', reading: 'むか' }
          ]
        },
        {
          prompt: { en: 'I get tired.', vi: 'Tôi mệt.' },
          jp: '疲れます。',
          ruby: [{ base: '疲', reading: 'つか' }]
        },
        {
          prompt: { en: 'I will get married in June.', vi: 'Tôi sẽ cưới vào tháng 6.' },
          jp: '6月に 結婚します。',
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '結', reading: 'けっ' },
            { base: '婚', reading: 'こん' }
          ]
        },
        {
          prompt: { en: 'I shop on Sunday.', vi: 'Chủ nhật tôi mua sắm.' },
          jp: '日曜日に 買い物します。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '買', reading: 'か' },
            { base: '物', reading: 'もの' }
          ]
        },
        {
          prompt: { en: 'I have a meal at a restaurant.', vi: 'Tôi dùng bữa ở nhà hàng.' },
          jp: 'レストランで 食事します。',
          ruby: [
            { base: '食', reading: 'しょく' },
            { base: '事', reading: 'じ' }
          ]
        },
        {
          prompt: { en: 'I take a walk in the park.', vi: 'Tôi đi dạo ở công viên.' },
          jp: '公園を 散歩します。',
          ruby: [
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '散', reading: 'さん' },
            { base: '歩', reading: 'ぽ' }
          ]
        }
      ]
    },
    {
      pattern: 'Place へ V / N に 行きます',
      patternRuby: [{ base: '行', reading: 'い' }],
      items: [
        {
          prompt: { en: 'I go to the pool to swim.', vi: 'Tôi đi đến bể bơi để bơi.' },
          jp: 'プールへ 泳ぎに 行きます。',
          ruby: [
            { base: '泳', reading: 'およ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go to the river to fish.', vi: 'Tôi đi đến sông để câu.' },
          jp: '川へ 釣りに 行きます。',
          ruby: [
            { base: '川', reading: 'かわ' },
            { base: '釣', reading: 'つ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I go skiing on the weekend.', vi: 'Cuối tuần tôi đi trượt tuyết.' },
          jp: '週末 スキーに 行きます。',
          ruby: [
            { base: '週', reading: 'しゅう' },
            { base: '末', reading: 'まつ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'At New Year I go to a shrine.', vi: 'Tết tôi đi đền.' },
          jp: 'お正月に 神社へ 行きます。',
          ruby: [
            { base: '正', reading: 'しょう' },
            { base: '月', reading: 'がつ' },
            { base: '神', reading: 'じん' },
            { base: '社', reading: 'じゃ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: "I go to the park for a walk around 3 o'clock.",
            vi: 'Khoảng 3 giờ tôi đi đến công viên dạo.'
          },
          jp: '3時ごろ 公園へ 散歩に 行きます。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '散', reading: 'さん' },
            { base: '歩', reading: 'ぽ' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'どこか / 何か',
      patternRuby: [{ base: '何', reading: 'なに' }],
      items: [
        {
          prompt: { en: 'Shall we go somewhere?', vi: 'Chúng ta đi đâu đó nhé?' },
          jp: 'どこかへ 行きませんか。',
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          prompt: { en: 'I want to eat something.', vi: 'Tôi muốn ăn gì đó.' },
          jp: '何か 食べたいです。',
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'Do you want to drink something?', vi: 'Bạn muốn uống gì đó không?' },
          jp: '何か 飲みたいですか。',
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: {
            en: 'I will go somewhere this weekend.',
            vi: 'Cuối tuần này tôi sẽ đi đâu đó.'
          },
          jp: '今週の 週末 どこかへ 行きます。',
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '週', reading: 'しゅう' },
            { base: '週', reading: 'しゅう' },
            { base: '末', reading: 'まつ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I want to buy something.', vi: 'Tôi muốn mua gì đó.' },
          jp: '何か 買いたいです。',
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '買', reading: 'か' }
          ]
        }
      ]
    },
    {
      pattern: 'ご～',
      items: [
        {
          prompt: { en: 'Your order?', vi: 'Anh/Chị dùng món gì ạ?' },
          jp: 'ご注文は 何ですか。',
          ruby: [
            { base: '注', reading: 'ちゅう' },
            { base: '文', reading: 'もん' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          prompt: { en: 'How is your family?', vi: 'Gia đình anh/chị thế nào?' },
          jp: 'ご家族は 元気ですか。',
          ruby: [
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'How is your husband?', vi: 'Chồng chị thế nào?' },
          jp: 'ご主人は お元気ですか。',
          ruby: [
            { base: '主', reading: 'しゅ' },
            { base: '人', reading: 'じん' },
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'Please have a meal (polite).', vi: 'Mời dùng cơm ạ.' },
          jp: 'ご飯を どうぞ。',
          ruby: [{ base: '飯', reading: 'はん' }]
        },
        {
          prompt: {
            en: 'How many siblings do you have (polite)?',
            vi: 'Anh chị em nhà mình có mấy người?'
          },
          jp: 'ご兄弟は 何人ですか。',
          ruby: [
            { base: '兄', reading: 'きょう' },
            { base: '弟', reading: 'だい' },
            { base: '何', reading: 'なん' },
            { base: '人', reading: 'にん' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'I get thirsty. (state: のどが かわきました)',
        vi: 'Khát. (trạng thái: のどが かわきました)'
      },
      jp: 'のどが 渇きます。',
      ruby: [{ base: '渇', reading: 'かわ' }]
    },
    {
      prompt: {
        en: 'I get hungry. (state: おなかが すきました)',
        vi: 'Đói. (trạng thái: おなかが すきました)'
      },
      jp: 'おなかが すきます。'
    },
    {
      prompt: { en: "Let's do that.", vi: 'Nhất trí. / Hãy làm vậy đi.' },
      jp: 'そう しましょう。'
    },
    {
      prompt: { en: 'Your order?', vi: 'Anh/Chị dùng món gì ạ?' },
      jp: 'ご注文は？',
      ruby: [
        { base: '注', reading: 'ちゅう' },
        { base: '文', reading: 'もん' }
      ]
    },
    {
      prompt: { en: 'set meal', vi: 'cơm suất' },
      jp: '定食',
      ruby: [
        { base: '定', reading: 'てい' },
        { base: '食', reading: 'しょく' }
      ]
    },
    {
      prompt: { en: 'beef bowl', vi: 'cơm thịt bò (gyudon)' },
      jp: '牛どん',
      ruby: [{ base: '牛', reading: 'ぎゅう' }]
    },
    {
      prompt: { en: 'Please wait a moment.', vi: 'Xin vui lòng đợi một chút.' },
      jp: '少々 お待ちください。',
      ruby: [
        { base: '少', reading: 'しょう' },
        { base: '々', reading: 'しょう' },
        { base: '待', reading: 'ま' }
      ]
    },
    {
      prompt: {
        en: 'Polite form of です. (It is a set meal.)',
        vi: 'Cách nói lịch sự của です. (Đây là cơm suất.)'
      },
      jp: '定食で ございます。',
      ruby: [
        { base: '定', reading: 'てい' },
        { base: '食', reading: 'しょく' }
      ]
    },
    {
      prompt: { en: 'separately', vi: 'riêng, riêng ra' },
      jp: '別々に',
      ruby: [
        { base: '別', reading: 'べつ' },
        { base: '々', reading: 'べつ' }
      ]
    }
  ]
};
