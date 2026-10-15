import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson17SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-ない',
      items: [
        {
          prompt: { en: 'I do not remember the answer.', vi: 'Tôi không nhớ câu trả lời.' },
          jp: '答えを 覚えません。',
          ruby: [
            { base: '答', reading: 'こた' },
            { base: '覚', reading: 'おぼ' }
          ]
        },
        {
          prompt: {
            en: 'I will not forget my health insurance card.',
            vi: 'Tôi sẽ không quên thẻ bảo hiểm y tế.'
          },
          jp: '健康保険証を 忘れません。',
          ruby: [
            { base: '健', reading: 'けん' },
            { base: '康', reading: 'こう' },
            { base: '保', reading: 'ほ' },
            { base: '険', reading: 'けん' },
            { base: '証', reading: 'しょう' },
            { base: '忘', reading: 'わす' }
          ]
        },
        {
          prompt: { en: 'I will not go out today.', vi: 'Hôm nay tôi không ra ngoài.' },
          jp: '今日は 出かけません。',
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '出', reading: 'で' }
          ]
        },
        {
          prompt: {
            en: 'I will not work overtime this week.',
            vi: 'Tuần này tôi không làm thêm giờ.'
          },
          jp: '今週は 残業しません。',
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '週', reading: 'しゅう' },
            { base: '残', reading: 'ざん' },
            { base: '業', reading: 'ぎょう' }
          ]
        },
        {
          prompt: { en: 'I do not take a bath at night.', vi: 'Tối tôi không tắm bồn.' },
          jp: '夜は お風呂に 入りません。',
          ruby: [
            { base: '夜', reading: 'よる' },
            { base: '風', reading: 'ふ' },
            { base: '呂', reading: 'ろ' },
            { base: '入', reading: 'はい' }
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
          prompt: { en: 'I will not submit this problem.', vi: 'Câu hỏi này thì tôi không nộp.' },
          jp: 'この 問題は 出しません。',
          ruby: [
            { base: '問', reading: 'もん' },
            { base: '題', reading: 'だい' },
            { base: '出', reading: 'だ' }
          ]
        },
        {
          prompt: { en: 'I will not take off the jacket.', vi: 'Áo khoác thì tôi không cởi.' },
          jp: '上着は 脱ぎません。',
          ruby: [
            { base: '上', reading: 'うわ' },
            { base: '着', reading: 'ぎ' },
            { base: '脱', reading: 'ぬ' }
          ]
        },
        {
          prompt: {
            en: 'I will not forget that answer.',
            vi: 'Câu trả lời đó thì tôi không quên.'
          },
          jp: 'その 答えは 忘れません。',
          ruby: [
            { base: '答', reading: 'こた' },
            { base: '忘', reading: 'わす' }
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
          prompt: {
            en: 'Please come to the clinic in two or three days.',
            vi: 'Hãy đến phòng khám trong hai, ba ngày.'
          },
          jp: '2、3日までに 病院へ 来て ください。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '病', reading: 'びょう' },
            { base: '院', reading: 'いん' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'I caught a cold, so I must take medicine by tonight.',
            vi: 'Tôi bị cảm, vì vậy tối nay phải uống thuốc.'
          },
          jp: '風邪を ひきました。ですから、今夜までに 薬を 飲まなければ なりません。',
          ruby: [
            { base: '風', reading: 'か' },
            { base: '邪', reading: 'ぜ' },
            { base: '今', reading: 'こん' },
            { base: '夜', reading: 'や' },
            { base: '薬', reading: 'くすり' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: {
            en: 'I have a fever. I must go to the doctor by tomorrow.',
            vi: 'Tôi bị sốt. Phải đến bác sĩ trước ngày mai.'
          },
          jp: '熱が あります。明日までに 先生の ところへ 行かなければ なりません。',
          ruby: [
            { base: '熱', reading: 'ねつ' },
            { base: '明', reading: 'あ' },
            { base: '日', reading: 'した' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'This illness is dangerous, so please rest for two or three days.',
            vi: 'Bệnh này nguy hiểm, vì vậy hãy nghỉ hai, ba ngày.'
          },
          jp: 'この 病気は 危ないです。ですから、2、3日 休んで ください。',
          ruby: [
            { base: '病', reading: 'びょう' },
            { base: '気', reading: 'き' },
            { base: '危', reading: 'あぶ' },
            { base: '日', reading: 'にち' },
            { base: '休', reading: 'やす' }
          ]
        },
        {
          prompt: {
            en: 'Please rest for two or three hours.',
            vi: 'Hãy nghỉ hai, ba tiếng.'
          },
          jp: '2、3時間 休んで ください。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' },
            { base: '休', reading: 'やす' }
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
      prompt: { en: '~ hurts.', vi: 'Đau ~.' },
      jp: '～が 痛いです。',
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
