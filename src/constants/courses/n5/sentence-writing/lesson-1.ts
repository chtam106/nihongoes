import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson1SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N1 は N2 です',
      items: [
        {
          prompt: { en: 'I am a student.', vi: 'Tôi là học sinh.' },
          jp: '私は 学生です。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: { en: 'Alex is a company employee.', vi: 'Anh Alex là nhân viên công ty.' },
          jp: 'アレックスさんは 会社員です。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '員', reading: 'いん' }
          ]
        },
        {
          prompt: { en: 'I am an engineer.', vi: 'Tôi là kỹ sư.' },
          jp: '私は エンジニアです。',
          ruby: [{ base: '私', reading: 'わたし' }]
        },
        {
          prompt: { en: 'Everyone is a student.', vi: 'Mọi người đều là học sinh.' },
          jp: '皆さんは 学生です。',
          ruby: [
            { base: '皆', reading: 'みな' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: { en: 'Maria is a researcher.', vi: 'Maria là nhà nghiên cứu.' },
          jp: 'マリアさんは 研究者です。',
          ruby: [
            { base: '研', reading: 'けん' },
            { base: '究', reading: 'きゅう' },
            { base: '者', reading: 'しゃ' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 は N2 じゃありません',
      items: [
        {
          prompt: {
            en: 'I am not a teacher (occupation).',
            vi: 'Tôi không phải là giáo viên (nghề).'
          },
          jp: '私は 教師じゃありません。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '教', reading: 'きょう' },
            { base: '師', reading: 'し' }
          ]
        },
        {
          prompt: { en: 'I am not a doctor.', vi: 'Tôi không phải là bác sĩ.' },
          jp: '私は 医者じゃありません。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '医', reading: 'い' },
            { base: '者', reading: 'しゃ' }
          ]
        },
        {
          prompt: {
            en: 'That person is not a researcher.',
            vi: 'Người kia không phải là nhà nghiên cứu.'
          },
          jp: 'あの人は 研究者じゃありません。',
          ruby: [
            { base: '人', reading: 'ひと' },
            { base: '研', reading: 'けん' },
            { base: '究', reading: 'きゅう' },
            { base: '者', reading: 'しゃ' }
          ]
        },
        {
          prompt: { en: 'I am not a bank employee.', vi: 'Tôi không phải là nhân viên ngân hàng.' },
          jp: '私は 銀行員じゃありません。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '員', reading: 'いん' }
          ]
        },
        {
          prompt: { en: 'Alex is not a teacher.', vi: 'Anh Alex không phải là giáo viên.' },
          jp: 'アレックスさんは 先生じゃありません。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 は N2 ですか',
      items: [
        {
          prompt: { en: 'Are you a student?', vi: 'Bạn là học sinh phải không?' },
          jp: 'あなたは 学生ですか。',
          ruby: [
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: { en: 'Yes, I am a student.', vi: 'Vâng, tôi là học sinh.' },
          jp: 'はい、学生です。',
          ruby: [
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: { en: 'No, I am not a student.', vi: 'Không, tôi không phải học sinh.' },
          jp: 'いいえ、学生じゃありません。',
          ruby: [
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: { en: 'Is that person a teacher?', vi: 'Người kia là giáo viên phải không?' },
          jp: 'あの人は 先生ですか。',
          ruby: [
            { base: '人', reading: 'ひと' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: {
            en: 'Is Alex a bank employee?',
            vi: 'Anh Alex là nhân viên ngân hàng phải không?'
          },
          jp: 'アレックスさんは 銀行員ですか。',
          ruby: [
            { base: '銀', reading: 'ぎん' },
            { base: '行', reading: 'こう' },
            { base: '員', reading: 'いん' }
          ]
        }
      ]
    },
    {
      pattern: 'N も',
      items: [
        {
          prompt: { en: 'I am a student too.', vi: 'Tôi cũng là học sinh.' },
          jp: '私も 学生です。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: { en: 'We are students too.', vi: 'Chúng tôi cũng là học sinh.' },
          jp: '私たちも 学生です。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: { en: 'Alex is an engineer too.', vi: 'Anh Alex cũng là kỹ sư.' },
          jp: 'アレックスさんも エンジニアです。'
        },
        {
          prompt: { en: 'Yuki is a student too.', vi: 'Bé Yuki cũng là học sinh.' },
          jp: 'ゆきちゃんも 学生です。',
          ruby: [
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: {
            en: 'That person is a company employee too.',
            vi: 'Người kia cũng là nhân viên công ty.'
          },
          jp: 'あの人も 会社員です。',
          ruby: [
            { base: '人', reading: 'ひと' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '員', reading: 'いん' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 の N2',
      items: [
        {
          prompt: {
            en: 'I am a student at Sakura University.',
            vi: 'Tôi là sinh viên trường đại học Sakura.'
          },
          jp: '私は さくら大学の 学生です。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: {
            en: 'That person is a doctor at the hospital.',
            vi: 'Người kia là bác sĩ ở bệnh viện.'
          },
          jp: 'あの人は 病院の 医者です。',
          ruby: [
            { base: '人', reading: 'ひと' },
            { base: '病', reading: 'びょう' },
            { base: '院', reading: 'いん' },
            { base: '医', reading: 'い' },
            { base: '者', reading: 'しゃ' }
          ]
        },
        {
          prompt: { en: 'I am American.', vi: 'Tôi là người Mỹ.' },
          jp: '私は アメリカ人です。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '人', reading: 'じん' }
          ]
        },
        {
          prompt: { en: 'Yamada is an IMC employee.', vi: 'Anh Yamada là nhân viên IMC.' },
          jp: 'やまださんは IMCの 社員です。',
          ruby: [
            { base: '社', reading: 'しゃ' },
            { base: '員', reading: 'いん' }
          ]
        },
        {
          prompt: {
            en: 'That person is a university teacher (occupation).',
            vi: 'Người kia là giáo viên đại học (nghề).'
          },
          jp: 'あの人は 大学の 教師です。',
          ruby: [
            { base: '人', reading: 'ひと' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '教', reading: 'きょう' },
            { base: '師', reading: 'し' }
          ]
        }
      ]
    },
    {
      pattern: 'N は だれ ですか',
      items: [
        {
          prompt: { en: 'Who is that person?', vi: 'Người kia là ai?' },
          jp: 'あの人は だれですか。',
          ruby: [{ base: '人', reading: 'ひと' }]
        },
        {
          prompt: { en: 'Who is that person? (polite)', vi: 'Vị kia là ai? (lịch sự)' },
          jp: 'あの方は どなたですか。',
          ruby: [{ base: '方', reading: 'かた' }]
        },
        {
          prompt: { en: 'That person is Alex.', vi: 'Người kia là anh Alex.' },
          jp: 'あの人は アレックスさんです。',
          ruby: [{ base: '人', reading: 'ひと' }]
        },
        {
          prompt: { en: 'That person is Professor Yamada.', vi: 'Vị kia là thầy Yamada.' },
          jp: 'あの方は やまだ先生です。',
          ruby: [
            { base: '方', reading: 'かた' },
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: { en: 'Who is everyone?', vi: 'Mọi người là ai?' },
          jp: '皆さんは だれですか。',
          ruby: [{ base: '皆', reading: 'みな' }]
        }
      ]
    },
    {
      pattern: 'N は 何歳 ですか',
      patternRuby: [
        { base: '何', reading: 'なん' },
        { base: '歳', reading: 'さい' }
      ],
      items: [
        {
          prompt: { en: 'How old is Yuki?', vi: 'Bé Yuki bao nhiêu tuổi?' },
          jp: 'ゆきちゃんは 何歳ですか。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '歳', reading: 'さい' }
          ]
        },
        {
          prompt: { en: 'How old are you? (polite)', vi: 'Anh/chị bao nhiêu tuổi? (lịch sự)' },
          jp: 'おいくつですか。'
        },
        {
          prompt: { en: 'She is nine years old.', vi: 'Bé 9 tuổi.' },
          jp: '9歳です。',
          ruby: [{ base: '歳', reading: 'さい' }]
        },
        {
          prompt: { en: "I'm 20 years old.", vi: 'Tôi 20 tuổi.' },
          jp: 'はたちです。'
        },
        {
          prompt: {
            en: 'How old is that person? (plain)',
            vi: 'Người kia bao nhiêu tuổi? (thường)'
          },
          jp: 'あの人は 何歳ですか。',
          ruby: [
            { base: '人', reading: 'ひと' },
            { base: '何', reading: 'なん' },
            { base: '歳', reading: 'さい' }
          ]
        }
      ]
    },
    {
      pattern: '〜さん',
      items: [
        {
          prompt: { en: 'That person is Alex.', vi: 'Người kia là anh Alex.' },
          jp: 'あの人は アレックスさんです。',
          ruby: [{ base: '人', reading: 'ひと' }]
        },
        {
          prompt: {
            en: 'I am Alex. (no さん on yourself)',
            vi: 'Tôi là Alex. (không dùng さん với mình)'
          },
          jp: '私は アレックスです。',
          ruby: [{ base: '私', reading: 'わたし' }]
        },
        {
          prompt: { en: 'Yuki is a student.', vi: 'Bé Yuki là học sinh.' },
          jp: 'ゆきちゃんは 学生です。',
          ruby: [
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: { en: 'Taro is a student.', vi: 'Taro là học sinh.' },
          jp: 'たろう君は 学生です。',
          ruby: [
            { base: '君', reading: 'くん' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' }
          ]
        },
        {
          prompt: { en: 'Ms. Yamada is a teacher.', vi: 'Cô Yamada là giáo viên.' },
          jp: 'やまださんは 先生です。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'How do you do? (first meeting)', vi: 'Rất hân hạnh (lần đầu gặp).' },
      jp: 'はじめまして。'
    },
    {
      prompt: {
        en: 'Nice to meet you; I look forward to your kindness.',
        vi: 'Rất mong được giúp đỡ.'
      },
      jp: 'どうぞ よろしくお願いします。',
      ruby: [{ base: '願', reading: 'ねが' }]
    },
    {
      prompt: { en: 'What is your name?', vi: 'Bạn tên là gì?' },
      jp: 'お名前は何ですか。',
      ruby: [
        { base: '名', reading: 'な' },
        { base: '前', reading: 'まえ' },
        { base: '何', reading: 'なん' }
      ]
    },
    {
      prompt: {
        en: 'Excuse me, but... (polite lead-in)',
        vi: 'Xin lỗi, cho hỏi... (mở đầu lịch sự)'
      },
      jp: '失礼ですが。',
      ruby: [
        { base: '失', reading: 'しつ' },
        { base: '礼', reading: 'れい' }
      ]
    },
    {
      prompt: { en: 'I came from America.', vi: 'Tôi đến từ Mỹ.' },
      jp: 'アメリカから きました。'
    },
    {
      prompt: { en: 'This is Alex.', vi: 'Đây là anh Alex.' },
      jp: 'こちらは アレックスさんです。'
    }
  ]
};
