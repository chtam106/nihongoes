import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson17SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-ない',
      items: [
        {
          prompt: {
            en: 'I am not going to the office today. (casual)',
            vi: 'Hôm nay tôi không đi làm. (thân mật)'
          },
          jp: '今日は 会社へ 行かない。',
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I do not eat breakfast. (casual)', vi: 'Tôi không ăn sáng. (thân mật)' },
          jp: '朝ごはんは 食べない。',
          ruby: [
            { base: '朝', reading: 'あさ' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: {
            en: 'I am not going anywhere tonight. (casual)',
            vi: 'Tối nay tôi không đi đâu cả. (thân mật)'
          },
          jp: '今晩は どこも 出かけない。',
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '晩', reading: 'ばん' },
            { base: '出', reading: 'で' }
          ]
        },
        {
          prompt: {
            en: 'I am not working overtime this week. (casual)',
            vi: 'Tuần này tôi không làm thêm giờ. (thân mật)'
          },
          jp: '今週は 残業しない。',
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '週', reading: 'しゅう' },
            { base: '残', reading: 'ざん' },
            { base: '業', reading: 'ぎょう' }
          ]
        },
        {
          prompt: {
            en: 'Mr. Tanaka is not coming to the party. (casual)',
            vi: 'Anh Tanaka không đến bữa tiệc. (thân mật)'
          },
          jp: '田中さんは パーティーに 来ない。',
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '来', reading: 'こ' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ないで ください',
      items: [
        {
          prompt: { en: 'Please do not forget the report.', vi: 'Đừng quên báo cáo.' },
          jp: 'レポートを 忘れないで ください。',
          ruby: [{ base: '忘', reading: 'わす' }]
        },
        {
          prompt: { en: 'Please do not lose the key.', vi: 'Đừng làm mất chìa khóa.' },
          jp: 'かぎを 無くさないで ください。',
          ruby: [{ base: '無', reading: 'な' }]
        },
        {
          prompt: { en: 'Please do not worry.', vi: 'Đừng lo lắng.' },
          jp: '心配しないで ください。',
          ruby: [
            { base: '心', reading: 'しん' },
            { base: '配', reading: 'ぱい' }
          ]
        },
        {
          prompt: {
            en: 'Please do not take off your jacket here.',
            vi: 'Ở đây đừng cởi áo khoác.'
          },
          jp: 'ここで 上着を 脱がないで ください。',
          ruby: [
            { base: '上', reading: 'うわ' },
            { base: '着', reading: 'ぎ' },
            { base: '脱', reading: 'ぬ' }
          ]
        },
        {
          prompt: {
            en: 'This is a no-smoking area. Please do not smoke.',
            vi: 'Đây là khu cấm hút thuốc. Đừng hút thuốc.'
          },
          jp: 'ここは 禁煙です。吸わないで ください。',
          ruby: [
            { base: '禁', reading: 'きん' },
            { base: '煙', reading: 'えん' },
            { base: '吸', reading: 'す' }
          ]
        }
      ]
    },
    {
      pattern: 'V-なければ なりません',
      items: [
        {
          prompt: { en: 'I have to submit the report.', vi: 'Tôi phải nộp báo cáo.' },
          jp: 'レポートを 出さなければ なりません。',
          ruby: [{ base: '出', reading: 'だ' }]
        },
        {
          prompt: { en: 'I have to pay the money today.', vi: 'Hôm nay tôi phải trả tiền.' },
          jp: '今日 お金を 払わなければ なりません。',
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '金', reading: 'かね' },
            { base: '払', reading: 'はら' }
          ]
        },
        {
          prompt: { en: 'I have to return this book.', vi: 'Tôi phải trả cuốn sách này.' },
          jp: 'この 本を 返さなければ なりません。',
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '返', reading: 'かえ' }
          ]
        },
        {
          prompt: { en: 'I have to take medicine.', vi: 'Tôi phải uống thuốc.' },
          jp: '薬を 飲まなければ なりません。',
          ruby: [
            { base: '薬', reading: 'くすり' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: {
            en: 'I have to go on a business trip tomorrow.',
            vi: 'Ngày mai tôi phải đi công tác.'
          },
          jp: '明日 出張しなければ なりません。',
          ruby: [
            { base: '明', reading: 'あ' },
            { base: '日', reading: 'した' },
            { base: '出', reading: 'しゅっ' },
            { base: '張', reading: 'ちょう' }
          ]
        }
      ]
    },
    {
      pattern: 'V-なくても いいです',
      items: [
        {
          prompt: {
            en: 'You do not have to take off your underwear.',
            vi: 'Không cần cởi đồ lót.'
          },
          jp: '下着を 脱がなくても いいです。',
          ruby: [
            { base: '下', reading: 'した' },
            { base: '着', reading: 'ぎ' },
            { base: '脱', reading: 'ぬ' }
          ]
        },
        {
          prompt: { en: 'You do not have to bring an umbrella.', vi: 'Không cần mang ô đến.' },
          jp: '傘を 持って来なくても いいです。',
          ruby: [
            { base: '傘', reading: 'かさ' },
            { base: '持', reading: 'も' },
            { base: '来', reading: 'こ' }
          ]
        },
        {
          prompt: {
            en: 'You do not have to work overtime today.',
            vi: 'Hôm nay không cần làm thêm giờ.'
          },
          jp: '今日は 残業しなくても いいです。',
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '残', reading: 'ざん' },
            { base: '業', reading: 'ぎょう' }
          ]
        },
        {
          prompt: { en: 'You do not have to take medicine.', vi: 'Không cần uống thuốc.' },
          jp: '薬を 飲まなくても いいです。',
          ruby: [
            { base: '薬', reading: 'くすり' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: {
            en: 'It is all right. You do not have to worry.',
            vi: 'Không sao. Không cần lo.'
          },
          jp: '大丈夫です。心配しなくても いいです。',
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '丈', reading: 'じょう' },
            { base: '夫', reading: 'ぶ' },
            { base: '心', reading: 'しん' },
            { base: '配', reading: 'ぱい' }
          ]
        }
      ]
    },
    {
      pattern: 'Topic は (を→は)',
      items: [
        {
          prompt: {
            en: 'I will not take this important book.',
            vi: 'Cuốn sách quan trọng này thì tôi không mang đi.'
          },
          jp: 'この 大切な 本は 持っていきません。',
          ruby: [
            { base: '大', reading: 'たい' },
            { base: '切', reading: 'せつ' },
            { base: '本', reading: 'ほん' },
            { base: '持', reading: 'も' }
          ]
        },
        {
          prompt: { en: 'I will not drink that medicine.', vi: 'Thuốc kia thì tôi không uống.' },
          jp: 'その 薬は 飲みません。',
          ruby: [
            { base: '薬', reading: 'くすり' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: { en: 'I already handed in the homework.', vi: 'Bài tập thì tôi nộp rồi.' },
          jp: '宿題は もう 出しました。',
          ruby: [
            { base: '宿', reading: 'しゅく' },
            { base: '題', reading: 'だい' },
            { base: '出', reading: 'だ' }
          ]
        },
        {
          prompt: { en: 'Please leave your luggage here.', vi: 'Hành lý thì hãy để ở đây.' },
          jp: '荷物は ここに 置いて ください。',
          ruby: [
            { base: '荷', reading: 'に' },
            { base: '物', reading: 'もつ' },
            { base: '置', reading: 'お' }
          ]
        },
        {
          prompt: {
            en: 'I do not drink, but I do smoke.',
            vi: 'Rượu thì tôi không uống, nhưng thuốc lá thì có hút.'
          },
          jp: 'お酒は 飲みませんが、たばこは 吸います。',
          ruby: [
            { base: '酒', reading: 'さけ' },
            { base: '飲', reading: 'の' },
            { base: '吸', reading: 'す' }
          ]
        }
      ]
    },
    {
      pattern: 'N までに V',
      items: [
        {
          prompt: {
            en: 'Please submit the report by Friday.',
            vi: 'Hãy nộp báo cáo trước thứ Sáu.'
          },
          jp: '金曜日までに レポートを 出して ください。',
          ruby: [
            { base: '金', reading: 'きん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '出', reading: 'だ' }
          ]
        },
        {
          prompt: { en: 'Please return the book by Monday.', vi: 'Hãy trả sách trước thứ Hai.' },
          jp: '月曜日までに 本を 返して ください。',
          ruby: [
            { base: '月', reading: 'げつ' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '本', reading: 'ほん' },
            { base: '返', reading: 'かえ' }
          ]
        },
        {
          prompt: { en: 'I have to be back by three.', vi: 'Tôi phải về trước 3 giờ.' },
          jp: '3時までに 帰らなければ なりません。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          prompt: {
            en: 'I have to read this book by Saturday.',
            vi: 'Tôi phải đọc xong cuốn sách này trước thứ Bảy.'
          },
          jp: '土曜日までに この 本を 読まなければ なりません。',
          ruby: [
            { base: '土', reading: 'ど' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '本', reading: 'ほん' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          prompt: {
            en: 'Tomorrow I have to be at the office by nine.',
            vi: 'Ngày mai tôi phải đến công ty trước 9 giờ.'
          },
          jp: 'あしたは 9時までに 会社へ 行かなければ なりません。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'What is the matter?', vi: 'Anh/Chị bị sao ạ?' },
      jp: 'どうしましたか。'
    },
    {
      prompt: { en: 'throat', vi: 'họng' },
      jp: 'のど'
    },
    {
      prompt: { en: 'My throat hurts.', vi: 'Tôi bị đau họng.' },
      jp: 'のどが 痛いです。',
      ruby: [{ base: '痛', reading: 'いた' }]
    },
    {
      prompt: { en: 'Take care of yourself.', vi: 'Giữ gìn sức khỏe nhé.' },
      jp: 'お大事に。',
      ruby: [
        { base: '大', reading: 'だい' },
        { base: '事', reading: 'じ' }
      ]
    }
  ]
};
