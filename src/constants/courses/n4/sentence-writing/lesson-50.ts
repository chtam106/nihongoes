import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson50SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'お/ご 〜 します (kenjougo I)',
      items: [
        {
          prompt: {
            en: "First, I will explain today's schedule.",
            vi: 'Trước hết, tôi sẽ giải thích lịch hôm nay.'
          },
          jp: '初めに、きょうの スケジュールを ご説明 します。',
          ruby: [
            { base: '初', reading: 'はじ' },
            { base: '説', reading: 'せつ' },
            { base: '明', reading: 'めい' }
          ]
        },
        {
          prompt: {
            en: 'I will prepare coffee. I will pour it now.',
            vi: 'Tôi sẽ chuẩn bị cà phê. Tôi sẽ pha ngay.'
          },
          jp: 'コーヒーを 用意します。今 いれます。',
          ruby: [
            { base: '用', reading: 'よう' },
            { base: '意', reading: 'い' },
            { base: '今', reading: 'いま' }
          ]
        },
        {
          prompt: {
            en: 'I will carry your bag. Please tell me your email address.',
            vi: 'Tôi sẽ xách túi giúp. Xin cho tôi địa chỉ email.'
          },
          jp: '荷物を お持ち します。メールアドレスを お教え します。',
          ruby: [
            { base: '荷', reading: 'に' },
            { base: '物', reading: 'もつ' },
            { base: '持', reading: 'も' },
            { base: '教', reading: 'おし' }
          ]
        },
        {
          prompt: {
            en: 'I am a tour guide. I will show you around.',
            vi: 'Tôi là hướng dẫn viên. Tôi sẽ dẫn các vị.'
          },
          jp: 'わたくしは ガイドです。ご案内 します。',
          ruby: [
            { base: '案', reading: 'あん' },
            { base: '内', reading: 'ない' }
          ]
        },
        {
          prompt: {
            en: 'I will wait for you the week after next.',
            vi: 'Tôi sẽ đợi vào tuần sau nữa.'
          },
          jp: 'さ来週 お待ち します。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '待', reading: 'ま' }
          ]
        },
        {
          prompt: {
            en: 'I will call you the month after next.',
            vi: 'Tôi sẽ gọi vào tháng sau nữa.'
          },
          jp: 'さ来月 お電話 します。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '月', reading: 'げつ' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        }
      ]
    },
    {
      pattern: 'Special humble verbs',
      items: [
        {
          prompt: {
            en: 'I had the honor of meeting the director.',
            vi: 'Tôi đã được gặp giám đốc.'
          },
          jp: '所長に お目に かかります。お目に かかりました。',
          ruby: [
            { base: '所', reading: 'しょ' },
            { base: '長', reading: 'ちょう' },
            { base: '目', reading: 'め' },
            { base: '目', reading: 'め' }
          ]
        },
        {
          prompt: {
            en: 'I will visit you tomorrow to ask about the prize money.',
            vi: 'Ngày mai tôi sẽ đến hỏi về tiền thưởng.'
          },
          jp: 'あした 賞金の ことを 伺います。',
          ruby: [
            { base: '賞', reading: 'しょう' },
            { base: '金', reading: 'きん' },
            { base: '伺', reading: 'うかが' }
          ]
        },
        {
          prompt: {
            en: 'May I look at this document?',
            vi: 'Cho tôi xem giấy tờ này được không?'
          },
          jp: 'この しりょうを 拝見します。拝見しても よろしいですか。',
          ruby: [
            { base: '拝', reading: 'はい' },
            { base: '見', reading: 'けん' },
            { base: '拝', reading: 'はい' },
            { base: '見', reading: 'けん' }
          ]
        },
        {
          prompt: {
            en: 'I know that name.',
            vi: 'Tôi biết tên đó.'
          },
          jp: 'その 名前は 存じます。',
          ruby: [
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' },
            { base: '存', reading: 'ぞん' }
          ]
        },
        {
          prompt: {
            en: 'I will have this tea. Thank you.',
            vi: 'Tôi xin dùng ấm trà này. Cám ơn.'
          },
          jp: 'この お茶を いただきます。お礼を もうしあげます。',
          ruby: [
            { base: '茶', reading: 'ちゃ' },
            { base: '礼', reading: 'れい' }
          ]
        }
      ]
    },
    {
      pattern: 'Kenjougo II (参る, 申す, いたす, おります)',
      items: [
        {
          prompt: {
            en: 'I am Tanaka. I will go to your office now.',
            vi: 'Tôi là Tanaka. Bây giờ tôi sẽ đến văn phòng ngài.'
          },
          jp: '私は 田中と 申します。今から 参ります。',
          ruby: [
            { base: '私', reading: 'わたくし' },
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '申', reading: 'もう' },
            { base: '今', reading: 'いま' },
            { base: '参', reading: 'まい' }
          ]
        },
        {
          prompt: {
            en: 'I am at the front desk now.',
            vi: 'Bây giờ tôi ở quầy lễ tân.'
          },
          jp: '今 受付に おります。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '受', reading: 'うけ' },
            { base: '付', reading: 'つけ' }
          ]
        },
        {
          prompt: {
            en: 'I will do my best. I get nervous easily.',
            vi: 'Tôi sẽ cố gắng. Tôi dễ hồi hộp.'
          },
          jp: 'がんばります。よく 緊張します。緊張 いたします。',
          ruby: [
            { base: '緊', reading: 'きん' },
            { base: '張', reading: 'ちょう' },
            { base: '緊', reading: 'きん' },
            { base: '張', reading: 'ちょう' }
          ]
        },
        {
          prompt: {
            en: 'Since I was small I wanted to see a giraffe. That dream will come true the year after next.',
            vi: 'Từ nhỏ tôi muốn ngắm hươu cao cổ. Giấc mơ đó sẽ thành hiện thực vào năm sau nữa.'
          },
          jp: '小さい ころから きりんを 見たいと 思っておりました。さ来年 その 夢が 叶います。',
          ruby: [
            { base: '小', reading: 'ちい' },
            { base: '見', reading: 'み' },
            { base: '思', reading: 'おも' },
            { base: '来', reading: 'らい' },
            { base: '年', reading: 'ねん' },
            { base: '夢', reading: 'ゆめ' },
            { base: '叶', reading: 'かな' }
          ]
        },
        {
          prompt: {
            en: 'I thank everyone who supported me from the heart. I will make good use of this chance.',
            vi: 'Tôi cám ơn mọi người đã động viên từ đáy lòng. Tôi sẽ phát huy cơ hội này.'
          },
          jp: '心から 応援します。みなさまに 感謝します。この チャンスを 生かします。感謝 いたします。',
          ruby: [
            { base: '心', reading: 'こころ' },
            { base: '応', reading: 'おう' },
            { base: '援', reading: 'えん' },
            { base: '感', reading: 'かん' },
            { base: '謝', reading: 'しゃ' },
            { base: '生', reading: 'い' },
            { base: '感', reading: 'かん' },
            { base: '謝', reading: 'しゃ' }
          ]
        },
        {
          prompt: {
            en: 'I caused trouble. I am sorry.',
            vi: 'Tôi đã làm phiền. Xin lỗi.'
          },
          jp: '迷惑を かけます。ご迷惑を かけて、もうしわけ ありません。',
          ruby: [
            { base: '迷', reading: 'めい' },
            { base: '惑', reading: 'わく' },
            { base: '迷', reading: 'めい' },
            { base: '惑', reading: 'わく' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'How are you? (honorific)',
        vi: 'Anh chị có khỏe không ạ?'
      },
      jp: 'お元気で いらっしゃいますか。',
      ruby: [
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' }
      ]
    }
  ]
};
