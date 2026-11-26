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
          prompt: {
            en: 'I want to hang out with friends this weekend.',
            vi: 'Cuối tuần tôi muốn đi chơi với bạn.'
          },
          jp: '週末は 友達と 遊びたいです。',
          ruby: [
            { base: '週', reading: 'しゅう' },
            { base: '末', reading: 'まつ' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '遊', reading: 'あそ' }
          ]
        },
        {
          prompt: {
            en: 'It is hot. I want to swim in the sea.',
            vi: 'Nóng quá nhỉ. Tôi muốn bơi ở biển.'
          },
          jp: '暑いですね。海で 泳ぎたいです。',
          ruby: [
            { base: '暑', reading: 'あつ' },
            { base: '海', reading: 'うみ' },
            { base: '泳', reading: 'およ' }
          ]
        },
        {
          prompt: {
            en: 'I want to go to the airport tomorrow to meet a friend.',
            vi: 'Ngày mai tôi muốn ra sân bay đón bạn.'
          },
          jp: 'あした 空港へ 友達を 迎えに 行きたいです。',
          ruby: [
            { base: '空', reading: 'くう' },
            { base: '港', reading: 'こう' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '迎', reading: 'むか' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'When do you want to get married?', vi: 'Anh muốn kết hôn khi nào?' },
          jp: 'いつ 結婚したいですか。',
          ruby: [
            { base: '結', reading: 'けっ' },
            { base: '婚', reading: 'こん' }
          ]
        },
        {
          prompt: {
            en: 'I want to go shopping in Shinjuku.',
            vi: 'Tôi muốn đi mua sắm ở Shinjuku.'
          },
          jp: '新宿で 買い物したいです。',
          ruby: [
            { base: '新', reading: 'しん' },
            { base: '宿', reading: 'じゅく' },
            { base: '買', reading: 'か' },
            { base: '物', reading: 'もの' }
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
          prompt: { en: 'Where are you from?', vi: 'Anh quê ở đâu ạ?' },
          jp: 'ご出身は どちらですか。',
          ruby: [
            { base: '出', reading: 'しゅっ' },
            { base: '身', reading: 'しん' }
          ]
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
