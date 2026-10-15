import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson35SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-たら',
      items: [
        {
          prompt: {
            en: 'When spring comes, the flowers bloom and the leaves change.',
            vi: 'Khi xuân đến, hoa nở và lá đổi màu.'
          },
          jp: '春が 来たら、花が 咲きます。葉の 色が 変わります。',
          ruby: [
            { base: '春', reading: 'はる' },
            { base: '来', reading: 'き' },
            { base: '花', reading: 'はな' },
            { base: '咲', reading: 'さ' },
            { base: '葉', reading: 'は' },
            { base: '色', reading: 'いろ' },
            { base: '変', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'If you click, you can enter furigana.',
            vi: 'Nếu click thì nhập được furigana.'
          },
          jp: 'クリックしたら、ふりがなを 入力します。',
          ruby: [
            { base: '入', reading: 'にゅう' },
            { base: '力', reading: 'りょく' }
          ]
        },
        {
          prompt: {
            en: 'If it is fixed, pull the lever.',
            vi: 'Nếu sửa xong thì kéo cần.'
          },
          jp: '故障が 直ったら、レバーを 引きます。機械が 治ります。',
          ruby: [
            { base: '故', reading: 'こ' },
            { base: '障', reading: 'しょう' },
            { base: '直', reading: 'なお' },
            { base: '引', reading: 'ひ' },
            { base: '機', reading: 'き' },
            { base: '械', reading: 'かい' },
            { base: '治', reading: 'なお' }
          ]
        },
        {
          prompt: {
            en: 'If you go overseas, you will have a chance to climb mountains.',
            vi: 'Nếu ra nước ngoài sẽ có cơ hội leo núi.'
          },
          jp: '海外へ 行ったら、山登りの 機会が あります。',
          ruby: [
            { base: '海', reading: 'かい' },
            { base: '外', reading: 'がい' },
            { base: '行', reading: 'い' },
            { base: '山', reading: 'やま' },
            { base: '登', reading: 'のぼ' },
            { base: '機', reading: 'き' },
            { base: '会', reading: 'かい' }
          ]
        },
        {
          prompt: {
            en: 'If you mix with people, you get along.',
            vi: 'Nếu chơi với người thì sẽ hòa thuận.'
          },
          jp: '人と 交わったら、仲よくします。よく 交わります。',
          ruby: [
            { base: '人', reading: 'ひと' },
            { base: '交', reading: 'まじ' },
            { base: '仲', reading: 'なか' },
            { base: '交', reading: 'まじ' }
          ]
        },
        {
          prompt: {
            en: 'If you lack permission, you will be troubled.',
            vi: 'Nếu không có phép thì sẽ lúng túng.'
          },
          jp: '許可が なかったら、困ります。',
          ruby: [
            { base: '許', reading: 'きょ' },
            { base: '可', reading: 'か' },
            { base: '困', reading: 'こま' }
          ]
        }
      ]
    },
    {
      pattern: '疑問詞 + V-たら いいですか',
      items: [
        {
          prompt: {
            en: 'Which key should I press to mark a circle?',
            vi: 'Phải bấm phím nào để đánh dấu tròn?'
          },
          jp: '丸を 付けるには、どの キーを 押したら いいですか。正しい キーを 付けます。',
          ruby: [
            { base: '丸', reading: 'まる' },
            { base: '付', reading: 'つ' },
            { base: '押', reading: 'お' },
            { base: '正', reading: 'ただ' },
            { base: '付', reading: 'つ' }
          ]
        },
        {
          prompt: {
            en: 'Where should I go to see the harbor?',
            vi: 'Muốn xem cảng thì nên đi đâu?'
          },
          jp: '港を 見たいんですが、どこへ 行ったら いいですか。向こうの 島です。',
          ruby: [
            { base: '港', reading: 'みなと' },
            { base: '見', reading: 'み' },
            { base: '行', reading: 'い' },
            { base: '向', reading: 'む' },
            { base: '島', reading: 'しま' }
          ]
        },
        {
          prompt: {
            en: 'How should I open the curtain cord?',
            vi: 'Dây rèm phải kéo thế nào?'
          },
          jp: 'カーテンの ひもは どうしたら いいですか。'
        },
        {
          prompt: {
            en: 'When should I use the rice cooker?',
            vi: 'Nồi cơm điện nên dùng khi nào?'
          },
          jp: '炊飯器は いつ 使ったら いいですか。設備が 必要です。',
          ruby: [
            { base: '炊', reading: 'すい' },
            { base: '飯', reading: 'はん' },
            { base: '器', reading: 'き' },
            { base: '使', reading: 'つか' },
            { base: '設', reading: 'せつ' },
            { base: '備', reading: 'び' },
            { base: '必', reading: 'ひつ' },
            { base: '要', reading: 'よう' }
          ]
        },
        {
          prompt: {
            en: 'Who should I ask at the travel agency?',
            vi: 'Ở công ty du lịch nên hỏi ai?'
          },
          jp: '旅行社で だれに 聞いたら いいですか。詳しい 人です。',
          ruby: [
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' },
            { base: '社', reading: 'しゃ' },
            { base: '聞', reading: 'き' },
            { base: '詳', reading: 'くわ' },
            { base: '人', reading: 'ひと' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 は N2 です',
      items: [
        {
          prompt: {
            en: 'As for history, the old days of this neighborhood are long.',
            vi: 'Về lịch sử thì ngày xưa khu phố này dài.'
          },
          jp: '歴史は 近所の 昔が 長いです。',
          ruby: [
            { base: '歴', reading: 'れき' },
            { base: '史', reading: 'し' },
            { base: '近', reading: 'きん' },
            { base: '所', reading: 'じょ' },
            { base: '昔', reading: 'むかし' },
            { base: '長', reading: 'なが' }
          ]
        },
        {
          prompt: {
            en: 'As for the rooftop, the view of the island is good.',
            vi: 'Về tầng thượng thì view đảo đẹp.'
          },
          jp: '屋上は 島の 景色が いいです。',
          ruby: [
            { base: '屋', reading: 'おく' },
            { base: '上', reading: 'じょう' },
            { base: '島', reading: 'しま' },
            { base: '景', reading: 'け' },
            { base: '色', reading: 'しき' }
          ]
        },
        {
          prompt: {
            en: 'As for ski resorts, the overnight bus is convenient.',
            vi: 'Về khu trượt tuyết thì xe đêm tiện.'
          },
          jp: 'スキー場は 夜行バスが 便利です。',
          ruby: [
            { base: '場', reading: 'じょう' },
            { base: '夜', reading: 'や' },
            { base: '行', reading: 'こう' },
            { base: '便', reading: 'べん' },
            { base: '利', reading: 'り' }
          ]
        },
        {
          prompt: {
            en: 'As for proverbs, relationships are important.',
            vi: 'Về tục ngữ thì quan hệ là quan trọng.'
          },
          jp: '諺は 人と人の 関係を 教えます。',
          ruby: [
            { base: '諺', reading: 'ことわざ' },
            { base: '人', reading: 'ひと' },
            { base: '人', reading: 'ひと' },
            { base: '関', reading: 'かん' },
            { base: '係', reading: 'けい' },
            { base: '教', reading: 'おし' }
          ]
        },
        {
          prompt: {
            en: 'Well, as for more details, I am not sure.',
            vi: 'Ờ, còn chi tiết hơn thì tôi không rõ.'
          },
          jp: 'さあ、もっと 詳しい ことは わかりません。それなら 旅行社へ 行きます。',
          ruby: [
            { base: '詳', reading: 'くわ' },
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' },
            { base: '社', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: '～ないか',
      items: [
        {
          prompt: {
            en: 'Is there no other permission needed?',
            vi: 'Không cần phép nào khác sao?'
          },
          jp: 'ほかに 許可は ないか。',
          ruby: [
            { base: '許', reading: 'きょ' },
            { base: '可', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'Do you not know a proverb?',
            vi: 'Không biết tục ngữ nào sao?'
          },
          jp: '諺を 知らないか。',
          ruby: [
            { base: '諺', reading: 'ことわざ' },
            { base: '知', reading: 'し' }
          ]
        },
        {
          prompt: {
            en: 'Is the rice cooker not necessary?',
            vi: 'Không cần nồi cơm điện sao?'
          },
          jp: '炊飯器は 必要じゃ ないか。',
          ruby: [
            { base: '炊', reading: 'すい' },
            { base: '飯', reading: 'はん' },
            { base: '器', reading: 'き' },
            { base: '必', reading: 'ひつ' },
            { base: '要', reading: 'よう' }
          ]
        },
        {
          prompt: {
            en: 'Will the machine not be fixed?',
            vi: 'Máy không sửa được sao?'
          },
          jp: '機械は 直らないか。クリックします。',
          ruby: [
            { base: '機', reading: 'き' },
            { base: '械', reading: 'かい' },
            { base: '直', reading: 'なお' }
          ]
        },
        {
          prompt: {
            en: 'Is there no chance to go abroad?',
            vi: 'Không có cơ hội ra nước ngoài sao?'
          },
          jp: '海外へ 行く 機会は ないか。',
          ruby: [
            { base: '海', reading: 'かい' },
            { base: '外', reading: 'がい' },
            { base: '行', reading: 'い' },
            { base: '機', reading: 'き' },
            { base: '会', reading: 'かい' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'Do you know a good place?',
        vi: 'Anh/chị biết chỗ nào hay không?'
      },
      jp: 'いい 所、知っていますか。',
      ruby: [
        { base: '所', reading: 'ところ' },
        { base: '知', reading: 'し' }
      ]
    },
    {
      prompt: {
        en: 'In that case, Kusatsu or Shiga-Kogen would be good.',
        vi: 'Nếu thế thì Kusatsu hoặc Shiga-Kogen hay đấy.'
      },
      jp: 'それなら、草津か 志賀高原が いいですよ。',
      ruby: [
        { base: '草', reading: 'くさ' },
        { base: '津', reading: 'つ' },
        { base: '志', reading: 'し' },
        { base: '賀', reading: 'が' },
        { base: '高', reading: 'こう' },
        { base: '原', reading: 'げん' }
      ]
    },
    {
      prompt: { en: 'Let us stop here.', vi: 'Chúng ta dừng ở đây nhé.' },
      jp: 'これで おわりましょう。'
    }
  ]
};
