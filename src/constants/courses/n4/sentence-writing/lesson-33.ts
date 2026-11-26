import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson33SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'Imperative / Prohibitive',
      items: [
        {
          prompt: { en: 'Fire! Get out, quick!', vi: 'Cháy rồi! Chạy mau!' },
          jp: '火事だ！早く 逃げろ！',
          ruby: [
            { base: '火', reading: 'か' },
            { base: '事', reading: 'じ' },
            { base: '早', reading: 'はや' },
            { base: '逃', reading: 'に' }
          ]
        },
        {
          prompt: {
            en: 'Do not make noise inside the hospital.',
            vi: 'Không được làm ồn trong bệnh viện.'
          },
          jp: '病院の 中で 騒ぐな。',
          ruby: [
            { base: '病', reading: 'びょう' },
            { base: '院', reading: 'いん' },
            { base: '中', reading: 'なか' },
            { base: '騒', reading: 'さわ' }
          ]
        },
        {
          prompt: { en: 'Come on! Run faster!', vi: 'Cố lên! Chạy nhanh nữa lên!' },
          jp: 'がんばれ！もっと 速く 走れ！',
          ruby: [
            { base: '速', reading: 'はや' },
            { base: '走', reading: 'はし' }
          ]
        },
        {
          prompt: { en: 'Look out! Stop!', vi: 'Nguy hiểm! Dừng lại!' },
          jp: '危ない！止まれ！',
          ruby: [
            { base: '危', reading: 'あぶ' },
            { base: '止', reading: 'と' }
          ]
        },
        {
          prompt: {
            en: 'The game is not over yet. Do not give up!',
            vi: 'Trận đấu vẫn chưa kết thúc. Đừng bỏ cuộc!'
          },
          jp: '試合は まだ 終わって いない。あきらめるな！',
          ruby: [
            { base: '試', reading: 'し' },
            { base: '合', reading: 'あい' },
            { base: '終', reading: 'お' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て なさい',
      items: [
        {
          prompt: {
            en: 'Watch out for cars when you cross the road.',
            vi: 'Khi qua đường phải chú ý xe cộ.'
          },
          jp: '道を 渡る ときは、車に 注意しなさい。',
          ruby: [
            { base: '道', reading: 'みち' },
            { base: '渡', reading: 'わた' },
            { base: '車', reading: 'くるま' },
            { base: '注', reading: 'ちゅう' },
            { base: '意', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'Class is starting. Go back to your seat quickly.',
            vi: 'Sắp vào học rồi. Mau về chỗ ngồi đi.'
          },
          jp: '授業が 始まりますよ。早く 席に 戻りなさい。',
          ruby: [
            { base: '授', reading: 'じゅ' },
            { base: '業', reading: 'ぎょう' },
            { base: '始', reading: 'はじ' },
            { base: '早', reading: 'はや' },
            { base: '席', reading: 'せき' },
            { base: '戻', reading: 'もど' }
          ]
        },
        {
          prompt: {
            en: "It is already ten o'clock. Go to bed now.",
            vi: '10 giờ rồi đấy. Mau đi ngủ đi.'
          },
          jp: 'もう 10時ですよ。早く 寝なさい。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '早', reading: 'はや' },
            { base: '寝', reading: 'ね' }
          ]
        },
        {
          prompt: {
            en: 'Do your homework before you play.',
            vi: 'Làm bài tập trước rồi hãy đi chơi.'
          },
          jp: '遊ぶ 前に 宿題を しなさい。',
          ruby: [
            { base: '遊', reading: 'あそ' },
            { base: '前', reading: 'まえ' },
            { base: '宿', reading: 'しゅく' },
            { base: '題', reading: 'だい' }
          ]
        },
        {
          prompt: {
            en: 'Do not fight. Get along with each other.',
            vi: 'Đừng cãi nhau, hãy chơi hòa thuận với nhau.'
          },
          jp: 'けんかしないで、仲よく しなさい。',
          ruby: [{ base: '仲', reading: 'なか' }]
        }
      ]
    },
    {
      pattern: 'X は Y と 書いて あります / Y と 読みます',
      patternRuby: [
        { base: '書', reading: 'か' },
        { base: '読', reading: 'よ' }
      ],
      items: [
        {
          prompt: {
            en: 'It says "no entry" at the entrance.',
            vi: 'Ở lối vào có viết "cấm vào".'
          },
          jp: '入口に「立入禁止」と 書いて あります。',
          ruby: [
            { base: '入', reading: 'いり' },
            { base: '口', reading: 'ぐち' },
            { base: '立', reading: 'たち' },
            { base: '入', reading: 'いり' },
            { base: '禁', reading: 'きん' },
            { base: '止', reading: 'し' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          prompt: { en: '出口 is read "deguchi".', vi: 'Chữ 出口 đọc là "deguchi".' },
          jp: '「出口」は「でぐち」と 読みます。',
          ruby: [
            { base: '出', reading: 'で' },
            { base: '口', reading: 'ぐち' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          prompt: {
            en: 'It says "use prohibited" on the machine.',
            vi: 'Trên máy có viết "cấm sử dụng".'
          },
          jp: '機械に「使用禁止」と 書いて あります。',
          ruby: [
            { base: '機', reading: 'き' },
            { base: '械', reading: 'かい' },
            { base: '使', reading: 'し' },
            { base: '用', reading: 'よう' },
            { base: '禁', reading: 'きん' },
            { base: '止', reading: 'し' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'It says "slow down" on the road.',
            vi: 'Trên đường có viết "đi chậm".'
          },
          jp: '道に「徐行」と 書いて あります。',
          ruby: [
            { base: '道', reading: 'みち' },
            { base: '徐', reading: 'じょ' },
            { base: '行', reading: 'こう' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          prompt: { en: '非常口 is read "hijōguchi".', vi: 'Chữ 非常口 đọc là "hijōguchi".' },
          jp: '「非常口」は「ひじょうぐち」と 読みます。',
          ruby: [
            { base: '非', reading: 'ひ' },
            { base: '常', reading: 'じょう' },
            { base: '口', reading: 'ぐち' },
            { base: '読', reading: 'よ' }
          ]
        }
      ]
    },
    {
      pattern: 'X は Y という 意味です',
      patternRuby: [
        { base: '意', reading: 'い' },
        { base: '味', reading: 'み' }
      ],
      items: [
        {
          prompt: {
            en: '"Free of charge" means you do not pay.',
            vi: '"Mien phi" nghĩa là không trả tiền.'
          },
          jp: '「無料」は お金が いらない という 意味です。',
          ruby: [
            { base: '無', reading: 'む' },
            { base: '料', reading: 'りょう' },
            { base: '金', reading: 'かね' },
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: 'What does this mark mean? ...It means "discount".',
            vi: 'Ký hiệu này nghĩa là gì? ...Nghĩa là "giảm giá".'
          },
          jp: 'この マークは どういう 意味ですか。……「割引」という 意味です。',
          ruby: [
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' },
            { base: '割', reading: 'わり' },
            { base: '引', reading: 'びき' },
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: '使用中 means someone is using it right now.',
            vi: '"使用中" nghĩa là đang có người sử dụng.'
          },
          jp: '「使用中」は 今 だれかが 使っている という 意味です。',
          ruby: [
            { base: '使', reading: 'し' },
            { base: '用', reading: 'よう' },
            { base: '中', reading: 'ちゅう' },
            { base: '今', reading: 'いま' },
            { base: '使', reading: 'つか' },
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: '"Now recruiting" means they want new people.',
            vi: '"Dang tuyen" nghĩa là đang tìm người.'
          },
          jp: '「募集中」は 人が ほしい という 意味です。',
          ruby: [
            { base: '募', reading: 'ぼ' },
            { base: '集', reading: 'しゅう' },
            { base: '中', reading: 'ちゅう' },
            { base: '人', reading: 'ひと' },
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: '"All you can drink" means you may drink a lot.',
            vi: '"Uong thoai mai" nghĩa là uống nhiều được.'
          },
          jp: '「飲み放題」は いくらでも 飲める という 意味です。',
          ruby: [
            { base: '飲', reading: 'の' },
            { base: '放', reading: 'ほう' },
            { base: '題', reading: 'だい' },
            { base: '飲', reading: 'の' },
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form + と 言っていました',
      patternRuby: [{ base: '言', reading: 'い' }],
      items: [
        {
          prompt: {
            en: 'The police officer said parking is not allowed here.',
            vi: 'Cảnh sát nói ở đây cấm đỗ xe.'
          },
          jp: '警察の 人が、ここは 駐車禁止だと 言っていました。',
          ruby: [
            { base: '警', reading: 'けい' },
            { base: '察', reading: 'さつ' },
            { base: '人', reading: 'ひと' },
            { base: '駐', reading: 'ちゅう' },
            { base: '車', reading: 'しゃ' },
            { base: '禁', reading: 'きん' },
            { base: '止', reading: 'し' },
            { base: '言', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'The staff member said the ceremony would start in about ten minutes.',
            vi: 'Người phụ trách nói buổi lễ khoảng 10 phút nữa sẽ bắt đầu.'
          },
          jp: '係の 人が、式は 10分ほどで 始まると 言っていました。',
          ruby: [
            { base: '係', reading: 'かかり' },
            { base: '人', reading: 'ひと' },
            { base: '式', reading: 'しき' },
            { base: '分', reading: 'ぷん' },
            { base: '始', reading: 'はじ' },
            { base: '言', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'The teacher said the report is due Friday.',
            vi: 'Thầy giáo nói hạn nộp báo cáo là thứ Sáu.'
          },
          jp: '先生が、レポートの 締め切りは 金曜日だと 言っていました。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '生', reading: 'せい' },
            { base: '締', reading: 'し' },
            { base: '切', reading: 'き' },
            { base: '金', reading: 'きん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '言', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'He said it is dangerous, so do not enter.',
            vi: 'Anh ấy nói nguy hiểm nên đừng vào.'
          },
          jp: '危険だから 入るなと 言っていました。',
          ruby: [
            { base: '危', reading: 'き' },
            { base: '険', reading: 'けん' },
            { base: '入', reading: 'はい' },
            { base: '言', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'The train has stopped because of an accident, but they said it would move in 20 minutes.',
            vi: 'Tàu đang dừng vì tai nạn, nhưng họ nói 20 phút nữa sẽ chạy.'
          },
          jp: '事故で 電車が 止まっていますが、あと 20分で 動くと 言っていました。',
          ruby: [
            { base: '事', reading: 'じ' },
            { base: '故', reading: 'こ' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '止', reading: 'と' },
            { base: '分', reading: 'ぷん' },
            { base: '動', reading: 'うご' },
            { base: '言', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form + と 伝えていただけませんか',
      patternRuby: [{ base: '伝', reading: 'つた' }],
      items: [
        {
          prompt: {
            en: 'Could you tell Mr. Tanaka the meeting starts at three?',
            vi: 'Anh nhắn giúp anh Tanaka là cuộc họp bắt đầu từ 3 giờ được không?'
          },
          jp: '田中さんに、会議は 3時からだと 伝えていただけませんか。',
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '時', reading: 'じ' },
            { base: '伝', reading: 'つた' }
          ]
        },
        {
          prompt: {
            en: 'Could you tell the manager I will be a little late today?',
            vi: 'Anh nhắn giúp trưởng phòng là hôm nay tôi đến muộn một chút được không?'
          },
          jp: '部長に、今日は 少し 遅れると 伝えていただけませんか。',
          ruby: [
            { base: '部', reading: 'ぶ' },
            { base: '長', reading: 'ちょう' },
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '少', reading: 'すこ' },
            { base: '遅', reading: 'おく' },
            { base: '伝', reading: 'つた' }
          ]
        },
        {
          prompt: {
            en: 'Could you tell the customers that parking is free?',
            vi: 'Anh báo giúp khách là bãi đỗ xe miễn phí được không?'
          },
          jp: 'お客様に、駐車場は 無料だと 伝えていただけませんか。',
          ruby: [
            { base: '客', reading: 'きゃく' },
            { base: '様', reading: 'さま' },
            { base: '駐', reading: 'ちゅう' },
            { base: '車', reading: 'しゃ' },
            { base: '場', reading: 'じょう' },
            { base: '無', reading: 'む' },
            { base: '料', reading: 'りょう' },
            { base: '伝', reading: 'つた' }
          ]
        },
        {
          prompt: {
            en: 'Could you ask Mr. Yamada to call me back later?',
            vi: 'Anh nhắn giúp anh Yamada lát nữa gọi lại cho tôi được không?'
          },
          jp: '山田さんに、後で 電話を くださいと 伝えていただけませんか。',
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '田', reading: 'だ' },
            { base: '後', reading: 'あと' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '伝', reading: 'つた' }
          ]
        },
        {
          prompt: {
            en: 'Could you tell the children they must not swim in the river?',
            vi: 'Anh dặn giúp bọn trẻ là không được bơi ở sông nhé.'
          },
          jp: '子どもたちに、川で 泳いでは いけないと 伝えていただけませんか。',
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '川', reading: 'かわ' },
            { base: '泳', reading: 'およ' },
            { base: '伝', reading: 'つた' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'I cannot go on. I cannot run anymore.',
        vi: 'Không được nữa. Tôi không chạy thêm được.'
      },
      jp: 'もう だめです。走れません。',
      ruby: [{ base: '走', reading: 'はし' }]
    },
    {
      prompt: { en: 'Hang in there! Do your best!', vi: 'Cố lên!' },
      jp: '頑張れ。',
      ruby: [
        { base: '頑', reading: 'がん' },
        { base: '張', reading: 'ば' }
      ]
    }
  ]
};
