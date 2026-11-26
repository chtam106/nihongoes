import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson3SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'ここ / そこ / あそこ / こちら / そちら / あちら',
      items: [
        {
          prompt: { en: 'This place is the classroom.', vi: 'Đây là phòng học.' },
          jp: 'ここは 教室です。',
          ruby: [
            { base: '教', reading: 'きょう' },
            { base: '室', reading: 'しつ' }
          ]
        },
        {
          prompt: { en: 'That place is the cafeteria.', vi: 'Đó là nhà ăn.' },
          jp: 'そこは 食堂です。',
          ruby: [
            { base: '食', reading: 'しょく' },
            { base: '堂', reading: 'どう' }
          ]
        },
        {
          prompt: { en: 'Over there is the office.', vi: 'Kia là văn phòng.' },
          jp: 'あそこは 事務所です。',
          ruby: [
            { base: '事', reading: 'じ' },
            { base: '務', reading: 'む' },
            { base: '所', reading: 'しょ' }
          ]
        },
        {
          prompt: { en: 'The elevator is this way.', vi: 'Thang máy ở phía này.' },
          jp: 'エレベーターは こちらです。'
        },
        {
          prompt: { en: 'The escalator is that way.', vi: 'Thang cuốn ở phía đó.' },
          jp: 'エスカレーターは そちらです。'
        },
        {
          prompt: { en: 'The lobby is over that way.', vi: 'Sảnh ở phía kia.' },
          jp: 'ロビーは あちらです。'
        }
      ]
    },
    {
      pattern: 'N は 〜です',
      items: [
        {
          prompt: { en: 'The restroom is over there.', vi: 'Nhà vệ sinh ở đằng kia.' },
          jp: 'お手洗いは あそこです。',
          ruby: [
            { base: '手', reading: 'て' },
            { base: '洗', reading: 'あら' }
          ]
        },
        {
          prompt: { en: 'The telephone is on the second floor.', vi: 'Điện thoại ở tầng hai.' },
          jp: '電話は 2階です。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '階', reading: 'かい' }
          ]
        },
        {
          prompt: {
            en: 'The vending machine is in the basement.',
            vi: 'Máy bán hàng tự động ở tầng hầm.'
          },
          jp: '自動販売機は 地下です。',
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '動', reading: 'どう' },
            { base: '販', reading: 'はん' },
            { base: '売', reading: 'ばい' },
            { base: '機', reading: 'き' },
            { base: '地', reading: 'ち' },
            { base: '下', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'These shoes are 3000 yen.', vi: 'Đôi giày này 3000 yên.' },
          jp: 'この 靴は 3000円です。',
          ruby: [
            { base: '靴', reading: 'くつ' },
            { base: '円', reading: 'えん' }
          ]
        },
        {
          prompt: { en: 'The meeting room is on the third floor.', vi: 'Phòng họp ở tầng ba.' },
          jp: '会議室は 3階です。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '室', reading: 'しつ' },
            { base: '階', reading: 'かい' }
          ]
        },
        {
          prompt: { en: 'The sales floor is on the first floor.', vi: 'Quầy hàng ở tầng một.' },
          jp: '売り場は 1階です。',
          ruby: [
            { base: '売', reading: 'う' },
            { base: '場', reading: 'ば' },
            { base: '階', reading: 'かい' }
          ]
        }
      ]
    },
    {
      pattern: 'N は どこ / どちら ですか',
      items: [
        {
          prompt: { en: 'Where is the toilet?', vi: 'Nhà vệ sinh ở đâu?' },
          jp: 'トイレは どこですか。'
        },
        {
          prompt: { en: 'Where is the reception? (polite)', vi: 'Quầy tiếp tân ở đâu ạ?' },
          jp: '受付は どちらですか。',
          ruby: [
            { base: '受', reading: 'うけ' },
            { base: '付', reading: 'つけ' }
          ]
        },
        {
          prompt: { en: 'Which school do you go to?', vi: 'Bạn học trường nào?' },
          jp: '学校は どこですか。',
          ruby: [
            { base: '学', reading: 'がっ' },
            { base: '校', reading: 'こう' }
          ]
        },
        {
          prompt: { en: 'Which company do you work for?', vi: 'Bạn làm công ty nào?' },
          jp: '会社は どちらですか。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' }
          ]
        },
        {
          prompt: { en: 'Where is your home?', vi: 'Nhà bạn ở đâu?' },
          jp: 'うちは どこですか。'
        },
        {
          prompt: { en: 'Where are the stairs?', vi: 'Cầu thang ở đâu?' },
          jp: '階段は どこですか。',
          ruby: [
            { base: '階', reading: 'かい' },
            { base: '段', reading: 'だん' }
          ]
        },
        {
          prompt: { en: 'What floor is the meeting room on?', vi: 'Phòng họp ở tầng mấy?' },
          jp: '会議室は 何階ですか。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '室', reading: 'しつ' },
            { base: '何', reading: 'なん' },
            { base: '階', reading: 'がい' }
          ]
        }
      ]
    },
    {
      pattern: 'どこ の N です',
      items: [
        {
          prompt: { en: 'Where are these shoes from?', vi: 'Đôi giày này của nước nào?' },
          jp: 'これは どこの 靴ですか。',
          ruby: [{ base: '靴', reading: 'くつ' }]
        },
        {
          prompt: {
            en: 'Where is that watch from? ...It is a Swiss watch.',
            vi: 'Đồng hồ đó của nước nào? ...Đồng hồ Thụy Sĩ.'
          },
          jp: 'その 時計は どこの 時計ですか。……スイスの 時計です。',
          ruby: [
            { base: '時', reading: 'と' },
            { base: '計', reading: 'けい' },
            { base: '時', reading: 'と' },
            { base: '計', reading: 'けい' },
            { base: '時', reading: 'と' },
            { base: '計', reading: 'けい' }
          ]
        },
        {
          prompt: { en: 'Where is this necktie from?', vi: 'Cà vạt này của nước nào?' },
          jp: 'これは どこの ネクタイですか。'
        },
        {
          prompt: {
            en: 'Where is this wine from? ...It is French wine.',
            vi: 'Rượu vang này của nước nào? ...Rượu vang Pháp.'
          },
          jp: 'これは どこの ワインですか。……フランスの ワインです。'
        },
        {
          prompt: {
            en: 'Where is this camera from? ...It is from Japan.',
            vi: 'Cái máy ảnh này của nước nào? ...Của Nhật.'
          },
          jp: 'この カメラは どこのですか。……日本のです。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' }
          ]
        },
        {
          prompt: { en: 'Where is this wine from?', vi: 'Rượu vang này của nước nào?' },
          jp: 'この ワインは どこのですか。'
        }
      ]
    },
    {
      pattern: 'お + N',
      items: [
        {
          prompt: { en: 'What country are you from?', vi: 'Anh/chị là người nước nào?' },
          jp: 'お国は どちらですか。',
          ruby: [{ base: '国', reading: 'くに' }]
        },
        {
          prompt: {
            en: 'What is your job? ...I am an engineer.',
            vi: 'Anh làm nghề gì? ...Tôi là kỹ sư.'
          },
          jp: 'お仕事は 何ですか。……エンジニアです。',
          ruby: [
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '何', reading: 'なん' }
          ]
        },
        {
          prompt: { en: 'Where is the restroom? (polite)', vi: 'Nhà vệ sinh ở đâu ạ?' },
          jp: 'お手洗いは どちらですか。',
          ruby: [
            { base: '手', reading: 'て' },
            { base: '洗', reading: 'あら' }
          ]
        },
        {
          prompt: { en: 'The restroom is this way.', vi: 'Nhà vệ sinh ở phía này.' },
          jp: 'お手洗いは こちらです。',
          ruby: [
            { base: '手', reading: 'て' },
            { base: '洗', reading: 'あら' }
          ]
        },
        {
          prompt: { en: 'Where is your room? (polite)', vi: 'Phòng của anh/chị ở đâu?' },
          jp: 'お部屋は どこですか。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'Welcome. (in a shop)', vi: 'Xin chào quý khách. (trong cửa hàng)' },
      jp: 'いらっしゃいませ。'
    },
    {
      prompt: { en: "I'll take this, please.", vi: 'Cho tôi cái này.' },
      jp: 'これを ください。'
    },
    {
      prompt: { en: 'How much is this?', vi: 'Cái này bao nhiêu tiền?' },
      jp: 'これは いくらですか。'
    },
    {
      prompt: { en: 'Please show me for a moment.', vi: 'Cho tôi xem một chút.' },
      jp: 'ちょっと みせて ください。'
    },
    {
      prompt: { en: 'Please. (making a request)', vi: 'Làm ơn / nhờ bạn.' },
      jp: 'おねがいします。'
    },
    {
      prompt: { en: 'Excuse me. / I am sorry.', vi: 'Xin lỗi. / Làm phiền.' },
      jp: 'すみません。'
    },
    {
      prompt: {
        en: 'Thanks. (short for どうもありがとうございます)',
        vi: 'Cảm ơn. (rút gọn của どうもありがとうございます)'
      },
      jp: 'どうも。'
    },
    {
      prompt: { en: 'Well then. / In that case.', vi: 'Thế thì. / Vậy thì.' },
      jp: 'じゃ。'
    }
  ]
};
