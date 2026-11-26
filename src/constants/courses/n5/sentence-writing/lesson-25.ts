import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson25SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-たら',
      items: [
        {
          prompt: {
            en: 'When I arrive at the airport, I will send an email.',
            vi: 'Đến sân bay tôi sẽ gửi email.'
          },
          jp: '空港に 着いたら メールを します。',
          ruby: [
            { base: '空', reading: 'くう' },
            { base: '港', reading: 'こう' },
            { base: '着', reading: 'つ' }
          ]
        },
        {
          prompt: {
            en: 'When I go to the countryside, I will see Grandma.',
            vi: 'Đến quê tôi sẽ gặp bà.'
          },
          jp: '田舎へ 行ったら、おばあちゃんに 会います。',
          ruby: [
            { base: '田', reading: 'いな' },
            { base: '舎', reading: 'か' },
            { base: '行', reading: 'い' },
            { base: '会', reading: 'あ' }
          ]
        },
        {
          prompt: {
            en: 'Please call me when you get to the station.',
            vi: 'Đến ga thì gọi điện cho tôi nhé.'
          },
          jp: '駅に 着いたら、電話して ください。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '着', reading: 'つ' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        },
        {
          prompt: {
            en: 'If I am transferred, I will move to Osaka.',
            vi: 'Nếu bị chuyển công tác, tôi sẽ chuyển đến Osaka.'
          },
          jp: '転勤したら、大阪へ 行きます。',
          ruby: [
            { base: '転', reading: 'てん' },
            { base: '勤', reading: 'きん' },
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'If I had the money, I would like to study abroad.',
            vi: 'Nếu có tiền tôi muốn đi du học.'
          },
          jp: 'お金が あったら、留学したいです。',
          ruby: [
            { base: '金', reading: 'かね' },
            { base: '留', reading: 'りゅう' },
            { base: '学', reading: 'がく' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ても',
      items: [
        {
          prompt: {
            en: 'Even if it rains, the game will be held.',
            vi: 'Dù mưa, trận đấu vẫn diễn ra.'
          },
          jp: '雨が 降っても、試合は あります。',
          ruby: [
            { base: '雨', reading: 'あめ' },
            { base: '降', reading: 'ふ' },
            { base: '試', reading: 'し' },
            { base: '合', reading: 'あい' }
          ]
        },
        {
          prompt: {
            en: 'Even if I grow older, I want to stay healthy.',
            vi: 'Dù già đi, tôi vẫn muốn khỏe mạnh.'
          },
          jp: '年を 取っても、元気で いたいです。',
          ruby: [
            { base: '年', reading: 'とし' },
            { base: '取', reading: 'と' },
            { base: '元', reading: 'げん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'Even if I think, I do not understand.',
            vi: 'Dù suy nghĩ, tôi vẫn không hiểu.'
          },
          jp: '考えても、わかりません。',
          ruby: [{ base: '考', reading: 'かんが' }]
        },
        {
          prompt: {
            en: 'Even though I took medicine, my fever will not go down.',
            vi: 'Uống thuốc rồi mà vẫn không hạ sốt.'
          },
          jp: '薬を 飲んでも、熱が 下がりません。',
          ruby: [
            { base: '薬', reading: 'くすり' },
            { base: '飲', reading: 'の' },
            { base: '熱', reading: 'ねつ' },
            { base: '下', reading: 'さ' }
          ]
        },
        {
          prompt: { en: 'Even if it is cheap, I do not need it.', vi: 'Dù rẻ tôi cũng không cần.' },
          jp: '安くても、要りません。',
          ruby: [
            { base: '安', reading: 'やす' },
            { base: '要', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'もし ～ たら',
      items: [
        {
          prompt: {
            en: 'If I get a chance, I want to work at the embassy.',
            vi: 'Nếu có cơ hội, tôi muốn làm ở đại sứ quán.'
          },
          jp: 'もし チャンスが あったら、大使館で 働きたいです。',
          ruby: [
            { base: '大', reading: 'たい' },
            { base: '使', reading: 'し' },
            { base: '館', reading: 'かん' },
            { base: '働', reading: 'はたら' }
          ]
        },
        {
          prompt: {
            en: 'If it rains, the game will be canceled.',
            vi: 'Nếu trời mưa thì trận đấu sẽ bị hủy.'
          },
          jp: 'もし 雨が 降ったら、試合は 中止です。',
          ruby: [
            { base: '雨', reading: 'あめ' },
            { base: '降', reading: 'ふ' },
            { base: '試', reading: 'し' },
            { base: '合', reading: 'あい' },
            { base: '中', reading: 'ちゅう' },
            { base: '止', reading: 'し' }
          ]
        },
        {
          prompt: {
            en: 'If I had 100 million yen, I would buy a house.',
            vi: 'Nếu có một ức yên, tôi sẽ mua nhà.'
          },
          jp: 'もし 1億円が あったら、家を 買います。',
          ruby: [
            { base: '億', reading: 'おく' },
            { base: '円', reading: 'えん' },
            { base: '家', reading: 'いえ' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'If there is a job transfer, I will tell you.',
            vi: 'Nếu có chuyển công tác, tôi sẽ nói.'
          },
          jp: 'もし 転勤が あったら、知らせます。',
          ruby: [
            { base: '転', reading: 'てん' },
            { base: '勤', reading: 'きん' },
            { base: '知', reading: 'し' }
          ]
        },
        {
          prompt: {
            en: 'If money is not enough, I will wait.',
            vi: 'Nếu tiền không đủ, tôi sẽ đợi.'
          },
          jp: 'もし お金が 足りなかったら、待ちます。',
          ruby: [
            { base: '金', reading: 'かね' },
            { base: '足', reading: 'た' },
            { base: '待', reading: 'ま' }
          ]
        }
      ]
    },
    {
      pattern: 'いくら ～ ても',
      items: [
        {
          prompt: {
            en: 'No matter how long I wait, there is no reply.',
            vi: 'Dù đợi bao lâu cũng không có trả lời.'
          },
          jp: 'いくら 待っても、返事が ありません。',
          ruby: [
            { base: '待', reading: 'ま' },
            { base: '返', reading: 'へん' },
            { base: '事', reading: 'じ' }
          ]
        },
        {
          prompt: {
            en: 'No matter how much I eat, it is not enough.',
            vi: 'Dù ăn bao nhiêu cũng không đủ.'
          },
          jp: 'いくら 食べても 足りません。',
          ruby: [
            { base: '食', reading: 'た' },
            { base: '足', reading: 'た' }
          ]
        },
        {
          prompt: {
            en: 'No matter how much I think, I do not know the meaning.',
            vi: 'Dù nghĩ bao nhiêu cũng không biết nghĩa.'
          },
          jp: 'いくら 考えても 意味が わかりません。',
          ruby: [
            { base: '考', reading: 'かんが' },
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: 'No matter how expensive it is, I want this camera.',
            vi: 'Dù đắt đến đâu tôi cũng muốn cái máy ảnh này.'
          },
          jp: 'いくら 高くても、この カメラが ほしいです。',
          ruby: [{ base: '高', reading: 'たか' }]
        },
        {
          prompt: {
            en: 'No matter how far the countryside is, I will go home.',
            vi: 'Dù quê xa thế nào, tôi cũng về.'
          },
          jp: 'いくら 田舎が 遠くても、帰ります。',
          ruby: [
            { base: '田', reading: 'いな' },
            { base: '舎', reading: 'か' },
            { base: '遠', reading: 'とお' },
            { base: '帰', reading: 'かえ' }
          ]
        }
      ]
    },
    {
      pattern: 'Subordinate clause ＋ が',
      items: [
        {
          prompt: {
            en: 'This town is small, but very quiet.',
            vi: 'Thị trấn này nhỏ nhưng rất yên tĩnh.'
          },
          jp: 'この 町は 小さいですが、とても 静かです。',
          ruby: [
            { base: '町', reading: 'まち' },
            { base: '小', reading: 'ちい' },
            { base: '静', reading: 'しず' }
          ]
        },
        {
          prompt: {
            en: 'The group is small, but everyone is kind.',
            vi: 'Nhóm nhỏ, nhưng mọi người đều tốt bụng.'
          },
          jp: 'グループは 小さいですが、皆が 親切です。',
          ruby: [
            { base: '小', reading: 'ちい' },
            { base: '皆', reading: 'みな' },
            { base: '親', reading: 'しん' },
            { base: '切', reading: 'せつ' }
          ]
        },
        {
          prompt: {
            en: 'I called many times, but nobody answered.',
            vi: 'Tôi đã gọi điện mấy lần nhưng không ai nghe máy.'
          },
          jp: '何度も 電話しましたが、だれも 出ませんでした。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '度', reading: 'ど' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '出', reading: 'で' }
          ]
        },
        {
          prompt: {
            en: 'I arrived at the embassy, but it was closed.',
            vi: 'Tôi đến đại sứ quán, nhưng cửa đã đóng.'
          },
          jp: '大使館に 着きましたが、閉まって いました。',
          ruby: [
            { base: '大', reading: 'たい' },
            { base: '使', reading: 'し' },
            { base: '館', reading: 'かん' },
            { base: '着', reading: 'つ' },
            { base: '閉', reading: 'し' }
          ]
        },
        {
          prompt: {
            en: 'I thought about the meaning, but I still do not know.',
            vi: 'Tôi đã nghĩ về nghĩa, nhưng vẫn chưa biết.'
          },
          jp: '意味を 考えましたが、まだ わかりません。',
          ruby: [
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' },
            { base: '考', reading: 'かんが' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form ＋ こと',
      items: [
        {
          prompt: {
            en: 'Talking in a group is fun.',
            vi: 'Nói chuyện theo nhóm thì vui.'
          },
          jp: 'グループで 話す ことは 楽しいです。',
          ruby: [
            { base: '話', reading: 'はな' },
            { base: '楽', reading: 'たの' }
          ]
        },
        {
          prompt: {
            en: 'Studying abroad is my dream.',
            vi: 'Du học là giấc mơ của tôi.'
          },
          jp: '留学する ことが 夢です。',
          ruby: [
            { base: '留', reading: 'りゅう' },
            { base: '学', reading: 'がく' },
            { base: '夢', reading: 'ゆめ' }
          ]
        },
        {
          prompt: {
            en: 'Writing a diary in Japanese every day is hard.',
            vi: 'Viết nhật ký bằng tiếng Nhật mỗi ngày thật vất vả.'
          },
          jp: '毎日 日本語で 日記を 書く ことは 大変です。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '日', reading: 'にっ' },
            { base: '記', reading: 'き' },
            { base: '書', reading: 'か' },
            { base: '大', reading: 'たい' },
            { base: '変', reading: 'へん' }
          ]
        },
        {
          prompt: { en: 'Making new friends is fun.', vi: 'Kết bạn mới thật vui.' },
          jp: '新しい 友達を 作る ことは 楽しいです。',
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '作', reading: 'つく' },
            { base: '楽', reading: 'たの' }
          ]
        },
        {
          prompt: {
            en: 'Arriving early is important.',
            vi: 'Đến sớm là việc quan trọng.'
          },
          jp: '早く 着く ことは 大切です。',
          ruby: [
            { base: '早', reading: 'はや' },
            { base: '着', reading: 'つ' },
            { base: '大', reading: 'たい' },
            { base: '切', reading: 'せつ' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'Let us have a drink.', vi: 'Uống một ly nhé.' },
      jp: '一杯 飲みましょう。',
      ruby: [
        { base: '一', reading: 'いっ' },
        { base: '杯', reading: 'ぱい' },
        { base: '飲', reading: 'の' }
      ]
    },
    {
      prompt: { en: 'Thank you for all your help.', vi: 'Cảm ơn đã giúp đỡ nhiều.' },
      jp: 'いろいろ お世話になりました。',
      ruby: [
        { base: '世', reading: 'せ' },
        { base: '話', reading: 'わ' }
      ]
    },
    {
      prompt: { en: 'I will do my best.', vi: 'Tôi sẽ cố gắng.' },
      jp: '頑張ります。',
      ruby: [
        { base: '頑', reading: 'がん' },
        { base: '張', reading: 'ば' }
      ]
    },
    {
      prompt: { en: 'Please take care. (farewell)', vi: 'Chúc anh/chị mạnh khỏe. (tạm biệt)' },
      jp: 'どうぞ お元気で。',
      ruby: [
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' }
      ]
    }
  ]
};
