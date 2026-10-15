import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson33SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'Imperative / Prohibitive',
      items: [
        {
          prompt: { en: 'Run away!', vi: 'Chạy đi!' },
          jp: '逃げろ！危ないから 逃げます。',
          ruby: [
            { base: '逃', reading: 'に' },
            { base: '危', reading: 'あぶ' },
            { base: '逃', reading: 'に' }
          ]
        },
        {
          prompt: { en: 'Do not make noise!', vi: 'Đừng làm ồn!' },
          jp: '騒ぐな！教室で 騒ぎます。',
          ruby: [
            { base: '騒', reading: 'さわ' },
            { base: '教', reading: 'きょう' },
            { base: '室', reading: 'しつ' },
            { base: '騒', reading: 'さわ' }
          ]
        },
        {
          prompt: { en: 'Throw the ball!', vi: 'Ném bóng đi!' },
          jp: 'ボールを 投げろ！ボールを 投げます。',
          ruby: [
            { base: '投', reading: 'な' },
            { base: '投', reading: 'な' }
          ]
        },
        {
          prompt: { en: 'Keep the rules!', vi: 'Giữ quy tắc!' },
          jp: '規則を 守れ！規則を 守ります。',
          ruby: [
            { base: '規', reading: 'き' },
            { base: '則', reading: 'そく' },
            { base: '守', reading: 'まも' },
            { base: '規', reading: 'き' },
            { base: '則', reading: 'そく' },
            { base: '守', reading: 'まも' }
          ]
        },
        {
          prompt: { en: 'Do not give up!', vi: 'Đừng bỏ cuộc!' },
          jp: 'あきらめるな！試合を あきらめます。',
          ruby: [
            { base: '試', reading: 'し' },
            { base: '合', reading: 'あい' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て なさい',
      items: [
        {
          prompt: { en: 'Pay attention to cars.', vi: 'Chú ý xe đi.' },
          jp: '車に 注意しなさい。注意します。',
          ruby: [
            { base: '車', reading: 'くるま' },
            { base: '注', reading: 'ちゅう' },
            { base: '意', reading: 'い' },
            { base: '注', reading: 'ちゅう' },
            { base: '意', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'Come back to your seat.', vi: 'Quay lại chỗ ngồi đi.' },
          jp: '席に 戻りなさい。席を 外します。すぐ 戻ります。',
          ruby: [
            { base: '席', reading: 'せき' },
            { base: '戻', reading: 'もど' },
            { base: '席', reading: 'せき' },
            { base: '外', reading: 'はず' },
            { base: '戻', reading: 'もど' }
          ]
        },
        {
          prompt: { en: 'Attend the meeting.', vi: 'Hãy dự họp.' },
          jp: '会議に 出席しなさい。出席します。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '出', reading: 'しゅっ' },
            { base: '席', reading: 'せき' },
            { base: '出', reading: 'しゅっ' },
            { base: '席', reading: 'せき' }
          ]
        },
        {
          prompt: { en: 'Recycle the bottles.', vi: 'Hãy tái chế chai.' },
          jp: 'ビンを リサイクルしなさい。リサイクルします。'
        },
        {
          prompt: { en: 'Help each other more.', vi: 'Hãy giúp nhau nhiều hơn.' },
          jp: 'もっと 助け合いなさい。助け合います。',
          ruby: [
            { base: '助', reading: 'たす' },
            { base: '合', reading: 'あ' },
            { base: '助', reading: 'たす' },
            { base: '合', reading: 'あ' }
          ]
        }
      ]
    },
    {
      pattern: 'X は Y と 書いて あります / Y と 読みます',
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
          prompt: {
            en: 'The exit sign is read as "deguchi".',
            vi: 'Biển lối ra đọc là "deguchi".'
          },
          jp: '出口は「でぐち」と 読みます。',
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
          prompt: {
            en: 'The emergency exit is written as "hijoguchi".',
            vi: 'Cửa thoát hiểm viết là "hijoguchi".'
          },
          jp: '非常口は「ひじょうぐち」と 書いて あります。',
          ruby: [
            { base: '非', reading: 'ひ' },
            { base: '常', reading: 'じょう' },
            { base: '口', reading: 'ぐち' },
            { base: '書', reading: 'か' }
          ]
        }
      ]
    },
    {
      pattern: 'X は Y という 意味です',
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
            en: 'What kind of meaning does this mark have?',
            vi: 'Ký hiệu này nghĩa thế nào?'
          },
          jp: 'この マークは どういう ～意味ですか。割引 という 意味です。',
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
            en: '"In use" means someone is using it now.',
            vi: '"Dang su dung" nghĩa là đang dùng.'
          },
          jp: '「使用中」は いま 使っている という 意味です。会議～中も 同じです。',
          ruby: [
            { base: '使', reading: 'し' },
            { base: '用', reading: 'よう' },
            { base: '中', reading: 'ちゅう' },
            { base: '使', reading: 'つか' },
            { base: '意', reading: 'い' },
            { base: '味', reading: 'み' },
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '中', reading: 'ちゅう' },
            { base: '同', reading: 'おな' }
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
      items: [
        {
          prompt: {
            en: 'The police said a parking violation occurred.',
            vi: 'Cảnh sát nói đã xảy ra đỗ xe sai.'
          },
          jp: '警察は 駐車違反が 起きたと 言っていました。罰金が あります。',
          ruby: [
            { base: '警', reading: 'けい' },
            { base: '察', reading: 'さつ' },
            { base: '駐', reading: 'ちゅう' },
            { base: '車', reading: 'しゃ' },
            { base: '違', reading: 'い' },
            { base: '反', reading: 'はん' },
            { base: '起', reading: 'お' },
            { base: '言', reading: 'い' },
            { base: '罰', reading: 'ばっ' },
            { base: '金', reading: 'きん' }
          ]
        },
        {
          prompt: {
            en: 'He said the ceremony would begin in about 10 minutes.',
            vi: 'Anh ấy nói lễ bắt đầu khoảng 10 phút nữa.'
          },
          jp: '式が 10分～ほどで 始まると 言っていました。始まります。',
          ruby: [
            { base: '式', reading: 'しき' },
            { base: '分', reading: 'ぷん' },
            { base: '始', reading: 'はじ' },
            { base: '言', reading: 'い' },
            { base: '始', reading: 'はじ' }
          ]
        },
        {
          prompt: {
            en: 'She said the deadline is no good any more.',
            vi: 'Cô ấy nói hạn chót không còn được nữa.'
          },
          jp: '締め切りは もう だめだと 言っていました。',
          ruby: [
            { base: '締', reading: 'し' },
            { base: '切', reading: 'き' },
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
            en: 'She said there are about 20 minutes left.',
            vi: 'Cô ấy nói còn khoảng 20 phút.'
          },
          jp: 'あと～20分だと 言っていました。事故が 起きます。',
          ruby: [
            { base: '分', reading: 'ぷん' },
            { base: '言', reading: 'い' },
            { base: '事', reading: 'じ' },
            { base: '故', reading: 'こ' },
            { base: '起', reading: 'お' }
          ]
        }
      ]
    },
    {
      pattern: 'Plain form + と 伝えていただけませんか',
      items: [
        {
          prompt: {
            en: 'Could you tell Tanaka that I will pass on the greeting?',
            vi: 'Nhờ nói với Tanaka là tôi sẽ chuyển lời chào?'
          },
          jp: '田中さんに あいさつを すると 伝えていただけませんか。',
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '伝', reading: 'つた' }
          ]
        },
        {
          prompt: {
            en: 'Could you tell them the other person feels sad?',
            vi: 'Nhờ nói đối phương cảm thấy buồn?'
          },
          jp: '相手は 悲しい 気持ちだと 伝えていただけませんか。',
          ruby: [
            { base: '相', reading: 'あい' },
            { base: '手', reading: 'て' },
            { base: '悲', reading: 'かな' },
            { base: '気', reading: 'き' },
            { base: '持', reading: 'も' },
            { base: '伝', reading: 'つた' }
          ]
        },
        {
          prompt: {
            en: 'Could you tell them it was originally free?',
            vi: 'Nhờ nói vốn dĩ là miễn phí?'
          },
          jp: 'もともと 無料だと 伝えていただけませんか。伝えます。',
          ruby: [
            { base: '無', reading: 'む' },
            { base: '料', reading: 'りょう' },
            { base: '伝', reading: 'つた' },
            { base: '伝', reading: 'つた' }
          ]
        },
        {
          prompt: {
            en: 'Could you tell them a phone call came?',
            vi: 'Nhờ nói là có điện thoại?'
          },
          jp: '電話が あると 伝えていただけませんか。電話が あります。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '伝', reading: 'つた' },
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        },
        {
          prompt: {
            en: 'Could you tell them it is not allowed?',
            vi: 'Nhờ nói là không được?'
          },
          jp: 'だめだと 伝えていただけませんか。',
          ruby: [{ base: '伝', reading: 'つた' }]
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
