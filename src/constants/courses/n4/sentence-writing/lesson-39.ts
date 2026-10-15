import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson39SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'Sentence から、Sentence',
      items: [
        {
          prompt: {
            en: 'I cannot answer, so I am surprised.',
            vi: 'Tôi không trả lời được nên giật mình.'
          },
          jp: '答えられない から、びっくりします。',
          ruby: [{ base: '答', reading: 'こた' }]
        },
        {
          prompt: {
            en: 'The building fell, so I was disappointed.',
            vi: 'Tòa nhà đổ nên tôi thất vọng.'
          },
          jp: 'ビルが 倒れます から、がっかりします。',
          ruby: [{ base: '倒', reading: 'たお' }]
        },
        {
          prompt: {
            en: 'The road is clear, so cars pass through.',
            vi: 'Đường thông nên xe đi qua.'
          },
          jp: '道が 空いて いる から、車が 通ります。',
          ruby: [
            { base: '道', reading: 'みち' },
            { base: '空', reading: 'す' },
            { base: '車', reading: 'くるま' },
            { base: '通', reading: 'とお' }
          ]
        },
        {
          prompt: {
            en: 'There was an earthquake, so I feel relieved now.',
            vi: 'Có động đất, giờ tôi mới yên tâm.'
          },
          jp: '地震が あった から、今は 安心します。',
          ruby: [
            { base: '地', reading: 'じ' },
            { base: '震', reading: 'しん' },
            { base: '今', reading: 'いま' },
            { base: '安', reading: 'あん' },
            { base: '心', reading: 'しん' }
          ]
        },
        {
          prompt: {
            en: 'They quarrel, so they will divorce.',
            vi: 'Họ cãi nhau nên sẽ ly hôn.'
          },
          jp: 'けんかします から、離婚します。',
          ruby: [
            { base: '離', reading: 'り' },
            { base: '婚', reading: 'こん' }
          ]
        },
        {
          prompt: {
            en: 'I eat a lot, so I gain weight.',
            vi: 'Tôi ăn nhiều nên béo ra.'
          },
          jp: 'たくさん 食べる から、太ります。',
          ruby: [
            { base: '食', reading: 'た' },
            { base: '太', reading: 'ふと' }
          ]
        },
        {
          prompt: {
            en: 'I walk every day, so I lose weight.',
            vi: 'Tôi đi bộ mỗi ngày nên gầy đi.'
          },
          jp: '毎日 歩く から、やせます。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '歩', reading: 'ある' }
          ]
        },
        {
          prompt: {
            en: 'Someone died, so I am sad.',
            vi: 'Ai đó mất nên tôi buồn.'
          },
          jp: '人が 死にます から、悲しい です。',
          ruby: [
            { base: '人', reading: 'ひと' },
            { base: '死', reading: 'し' },
            { base: '悲', reading: 'かな' }
          ]
        }
      ]
    },
    {
      pattern: 'Sentence ので、Sentence',
      items: [
        {
          prompt: {
            en: 'The operation is complicated, so I will visit you.',
            vi: 'Thao tác phức tạp nên tôi sẽ đến.'
          },
          jp: '操作が 複雑な ので、伺います。',
          ruby: [
            { base: '操', reading: 'そう' },
            { base: '作', reading: 'さ' },
            { base: '複', reading: 'ふく' },
            { base: '雑', reading: 'ざつ' },
            { base: '伺', reading: 'うかが' }
          ]
        },
        {
          prompt: {
            en: 'There was a tsunami, so the venue is closed.',
            vi: 'Có sóng thần nên hội trường đóng.'
          },
          jp: '津波が あった ので、会場は 休み です。',
          ruby: [
            { base: '津', reading: 'つ' },
            { base: '波', reading: 'なみ' },
            { base: '会', reading: 'かい' },
            { base: '場', reading: 'じょう' },
            { base: '休', reading: 'やす' }
          ]
        },
        {
          prompt: {
            en: 'A typhoon is coming, so hiking is cancelled.',
            vi: 'Bão đến nên chuyến dã ngoại bị hủy.'
          },
          jp: '台風が 来る ので、ハイキングは 中止 です。',
          ruby: [
            { base: '台', reading: 'たい' },
            { base: '風', reading: 'ふう' },
            { base: '来', reading: 'く' },
            { base: '中', reading: 'ちゅう' },
            { base: '止', reading: 'し' }
          ]
        },
        {
          prompt: {
            en: 'There is thunder, so please wait at the front desk.',
            vi: 'Có sấm nên hãy đợi ở lễ tân.'
          },
          jp: '雷が ある ので、フロントで 待って ください。',
          ruby: [
            { base: '雷', reading: 'かみなり' },
            { base: '待', reading: 'ま' }
          ]
        },
        {
          prompt: {
            en: 'There was a fire, so the taxi fare is high.',
            vi: 'Có hỏa hoạn nên tiền taxi cao.'
          },
          jp: '火事が あった ので、タクシー～だいが 高い です。',
          ruby: [
            { base: '火', reading: 'か' },
            { base: '事', reading: 'じ' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          prompt: {
            en: 'There was an accident, so I go to the bread shop.',
            vi: 'Có tai nạn nên tôi đến tiệm bánh.'
          },
          jp: '事故が あった ので、パン～やへ 行きます。',
          ruby: [
            { base: '事', reading: 'じ' },
            { base: '故', reading: 'こ' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て / i-adj くて / na-adj で / N で',
      items: [
        {
          prompt: {
            en: 'I am happy and embarrassed.',
            vi: 'Tôi vui và ngượng.'
          },
          jp: 'うれしくて 恥ずかしい です。',
          ruby: [{ base: '恥', reading: 'は' }]
        },
        {
          prompt: {
            en: 'The bread is hard and dirty.',
            vi: 'Bánh mì cứng và bẩn.'
          },
          jp: 'パンが 硬くて 汚い です。パンは 硬い です。',
          ruby: [
            { base: '硬', reading: 'かた' },
            { base: '汚', reading: 'きたな' },
            { base: '硬', reading: 'かた' }
          ]
        },
        {
          prompt: {
            en: 'This cake is soft and I am glad.',
            vi: 'Bánh này mềm nên tôi vui.'
          },
          jp: 'この ケーキは 軟らかくて うれしい です。ケーキは 軟らかい です。',
          ruby: [
            { base: '軟', reading: 'やわ' },
            { base: '軟', reading: 'やわ' }
          ]
        },
        {
          prompt: {
            en: 'The box is in the way and I cannot walk.',
            vi: 'Cái thùng vướng nên tôi không đi được.'
          },
          jp: '箱が 邪魔で 歩けません。',
          ruby: [
            { base: '箱', reading: 'はこ' },
            { base: '邪', reading: 'じゃ' },
            { base: '魔', reading: 'ま' },
            { base: '歩', reading: 'ある' }
          ]
        },
        {
          prompt: {
            en: 'The map is complicated and I am lost.',
            vi: 'Bản đồ phức tạp nên tôi lạc.'
          },
          jp: '地図が 複雑で 迷います。',
          ruby: [
            { base: '地', reading: 'ち' },
            { base: '図', reading: 'ず' },
            { base: '複', reading: 'ふく' },
            { base: '雑', reading: 'ざつ' },
            { base: '迷', reading: 'まよ' }
          ]
        },
        {
          prompt: {
            en: 'Thank you for your hard work, everyone.',
            vi: 'Mọi người đã vất vả quá.'
          },
          jp: 'お疲れさまでした。',
          ruby: [{ base: '疲', reading: 'つか' }]
        },
        {
          prompt: {
            en: 'The prime minister was busy and could not come.',
            vi: 'Thủ tướng bận nên không đến được.'
          },
          jp: '首相が 忙しくて 来られません。',
          ruby: [
            { base: '首', reading: 'しゅ' },
            { base: '相', reading: 'しょう' },
            { base: '忙', reading: 'いそが' },
            { base: '来', reading: 'こ' }
          ]
        }
      ]
    },
    {
      pattern: '途中で',
      items: [
        {
          prompt: {
            en: 'On the way I crashed into a bicycle.',
            vi: 'Trên đường tôi va vào xe đạp.'
          },
          jp: '来る 途中で 自転車に ぶつかります。',
          ruby: [
            { base: '来', reading: 'く' },
            { base: '途', reading: 'と' },
            { base: '中', reading: 'ちゅう' },
            { base: '自', reading: 'じ' },
            { base: '転', reading: 'てん' },
            { base: '車', reading: 'しゃ' }
          ]
        },
        {
          prompt: {
            en: 'On the way to the marriage meeting it rained.',
            vi: 'Trên đường đi xem mặt thì mưa.'
          },
          jp: 'お見合いの 途中で 雨が 降りました。',
          ruby: [
            { base: '見', reading: 'み' },
            { base: '合', reading: 'あ' },
            { base: '途', reading: 'と' },
            { base: '中', reading: 'ちゅう' },
            { base: '雨', reading: 'あめ' },
            { base: '降', reading: 'ふ' }
          ]
        },
        {
          prompt: {
            en: 'On the way to hiking I got lost.',
            vi: 'Trên đường đi dã ngoại tôi lạc.'
          },
          jp: 'ハイキングの 途中で 道に 迷いました。',
          ruby: [
            { base: '途', reading: 'と' },
            { base: '中', reading: 'ちゅう' },
            { base: '道', reading: 'みち' },
            { base: '迷', reading: 'まよ' }
          ]
        },
        {
          prompt: {
            en: 'On the way there was an accident.',
            vi: 'Trên đường có tai nạn.'
          },
          jp: '行く 途中で 事故が ありました。',
          ruby: [
            { base: '行', reading: 'い' },
            { base: '途', reading: 'と' },
            { base: '中', reading: 'ちゅう' },
            { base: '事', reading: 'じ' },
            { base: '故', reading: 'こ' }
          ]
        },
        {
          prompt: {
            en: 'On the way I answer a call.',
            vi: 'Trên đường tôi trả lời điện thoại.'
          },
          jp: '歩く 途中で 電話に 答えます。',
          ruby: [
            { base: '歩', reading: 'ある' },
            { base: '途', reading: 'と' },
            { base: '中', reading: 'ちゅう' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '答', reading: 'こた' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'Sorry I am late.',
        vi: 'Xin lỗi tôi đến muộn.'
      },
      jp: '遅刻 して すみません。',
      ruby: [
        { base: '遅', reading: 'ち' },
        { base: '刻', reading: 'こく' }
      ]
    },
    {
      prompt: {
        en: 'Thank you for your hard work.',
        vi: 'Anh/chị đã vất vả quá.'
      },
      jp: 'お疲れさまでした。',
      ruby: [{ base: '疲', reading: 'つか' }]
    }
  ]
};
