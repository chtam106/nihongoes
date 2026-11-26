import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson38SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-plain の は / が ～',
      items: [
        {
          prompt: {
            en: 'Traveling together with everyone is fun.',
            vi: 'Đi du lịch cùng mọi người thật vui.'
          },
          jp: 'みんなで 旅行する のは 楽しいです。',
          ruby: [
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' },
            { base: '楽', reading: 'たの' }
          ]
        },
        {
          prompt: {
            en: 'Being in the hospital alone is hard.',
            vi: 'Nằm viện một mình thật vất vả.'
          },
          jp: '一人で 入院する のは 大変です。',
          ruby: [
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' },
            { base: '入', reading: 'にゅう' },
            { base: '院', reading: 'いん' },
            { base: '大', reading: 'たい' },
            { base: '変', reading: 'へん' }
          ]
        },
        {
          prompt: {
            en: 'Going to bed early is good for your health.',
            vi: 'Đi ngủ sớm tốt cho sức khỏe.'
          },
          jp: '早く 寝る のは 体に いいです。',
          ruby: [
            { base: '早', reading: 'はや' },
            { base: '寝', reading: 'ね' },
            { base: '体', reading: 'からだ' }
          ]
        },
        {
          prompt: { en: 'Carrying heavy boxes is tiring.', vi: 'Khiêng thùng nặng thật mệt.' },
          jp: '重い 箱を 運ぶ のは 疲れます。',
          ruby: [
            { base: '重', reading: 'おも' },
            { base: '箱', reading: 'はこ' },
            { base: '運', reading: 'はこ' },
            { base: '疲', reading: 'つか' }
          ]
        },
        {
          prompt: { en: 'Turning on this machine is easy.', vi: 'Bật nguồn cái máy này rất dễ.' },
          jp: 'この 機械の 電源を 入れる のは 簡単です。',
          ruby: [
            { base: '機', reading: 'き' },
            { base: '械', reading: 'かい' },
            { base: '電', reading: 'でん' },
            { base: '源', reading: 'げん' },
            { base: '入', reading: 'い' },
            { base: '簡', reading: 'かん' },
            { base: '単', reading: 'たん' }
          ]
        }
      ]
    },
    {
      pattern: 'V-plain の が 好き / 上手 / 下手',
      patternRuby: [
        { base: '好', reading: 'す' },
        { base: '上', reading: 'うえ' },
        { base: '手', reading: 'て' },
        { base: '下', reading: 'へ' },
        { base: '手', reading: 'て' }
      ],
      items: [
        {
          prompt: { en: 'My older sister is good at cooking.', vi: 'Chị tôi nấu ăn giỏi.' },
          jp: '姉は 料理を 作る のが 上手です。',
          ruby: [
            { base: '姉', reading: 'あね' },
            { base: '料', reading: 'りょう' },
            { base: '理', reading: 'り' },
            { base: '作', reading: 'つく' },
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' }
          ]
        },
        {
          prompt: {
            en: 'I like walking along the coast in the morning.',
            vi: 'Tôi thích đi dạo dọc bờ biển vào buổi sáng.'
          },
          jp: '朝 海岸を 歩く のが 好きです。',
          ruby: [
            { base: '朝', reading: 'あさ' },
            { base: '海', reading: 'かい' },
            { base: '岸', reading: 'がん' },
            { base: '歩', reading: 'ある' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'I am bad at keeping my room tidy.', vi: 'Tôi dọn dẹp phòng rất kém.' },
          jp: '私は 部屋を 片づける のが 下手です。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '片', reading: 'かた' },
            { base: '下', reading: 'へ' },
            { base: '手', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'I am still bad at writing kanji.', vi: 'Tôi viết chữ Hán vẫn còn kém.' },
          jp: '漢字を 書く のが まだ 下手です。',
          ruby: [
            { base: '漢', reading: 'かん' },
            { base: '字', reading: 'じ' },
            { base: '書', reading: 'か' },
            { base: '下', reading: 'へ' },
            { base: '手', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'My mother likes growing flowers.', vi: 'Mẹ tôi thích trồng hoa.' },
          jp: '母は 花を 育てる のが 好きです。',
          ruby: [
            { base: '母', reading: 'はは' },
            { base: '花', reading: 'はな' },
            { base: '育', reading: 'そだ' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'My father is good at singing.', vi: 'Bố tôi hát hay.' },
          jp: '父は 歌を 歌う のが 上手です。',
          ruby: [
            { base: '父', reading: 'ちち' },
            { base: '歌', reading: 'うた' },
            { base: '歌', reading: 'うた' },
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' }
          ]
        }
      ]
    },
    {
      pattern: 'V-plain の に なれます / 忘れます',
      patternRuby: [{ base: '忘', reading: 'わす' }],
      items: [
        {
          prompt: {
            en: 'I have already gotten used to getting up early.',
            vi: 'Tôi đã quen với việc dậy sớm rồi.'
          },
          jp: '朝 早く 起きる のに もう 慣れました。',
          ruby: [
            { base: '朝', reading: 'あさ' },
            { base: '早', reading: 'はや' },
            { base: '起', reading: 'お' },
            { base: '慣', reading: 'な' }
          ]
        },
        {
          prompt: { en: 'I forgot to turn off the air conditioner.', vi: 'Tôi quên tắt điều hòa.' },
          jp: 'エアコンの 電源を 切る のを 忘れました。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '源', reading: 'げん' },
            { base: '切', reading: 'き' },
            { base: '忘', reading: 'わす' }
          ]
        },
        {
          prompt: {
            en: 'Please do not forget to stamp your seal on the documents.',
            vi: 'Đừng quên đóng dấu vào giấy tờ nhé.'
          },
          jp: '書類に 判子を 押す のを 忘れないで ください。',
          ruby: [
            { base: '書', reading: 'しょ' },
            { base: '類', reading: 'るい' },
            { base: '判', reading: 'はん' },
            { base: '子', reading: 'こ' },
            { base: '押', reading: 'お' },
            { base: '忘', reading: 'わす' }
          ]
        },
        {
          prompt: {
            en: 'I just cannot get used to riding packed trains.',
            vi: 'Tôi mãi không quen được với việc đi tàu chật kín người.'
          },
          jp: '満員電車に 乗る のに なかなか 慣れません。',
          ruby: [
            { base: '満', reading: 'まん' },
            { base: '員', reading: 'いん' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '乗', reading: 'の' },
            { base: '慣', reading: 'な' }
          ]
        },
        {
          prompt: {
            en: 'I completely forgot to hand in my homework.',
            vi: 'Tôi quên béng việc nộp bài tập.'
          },
          jp: '宿題を 出す のを すっかり 忘れて いました。',
          ruby: [
            { base: '宿', reading: 'しゅく' },
            { base: '題', reading: 'だい' },
            { base: '出', reading: 'だ' },
            { base: '忘', reading: 'わす' }
          ]
        }
      ]
    },
    {
      pattern: '～知っていますか',
      patternRuby: [{ base: '知', reading: 'し' }],
      items: [
        {
          prompt: {
            en: 'Do you know that Mr. Tanaka is getting married next month?',
            vi: 'Anh có biết anh Tanaka tháng sau cưới không?'
          },
          jp: '田中さんが 来月 結婚する のを 知っていますか。',
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '来', reading: 'らい' },
            { base: '月', reading: 'げつ' },
            { base: '結', reading: 'けっ' },
            { base: '婚', reading: 'こん' },
            { base: '知', reading: 'し' }
          ]
        },
        {
          prompt: {
            en: 'Do you know that a new shop opened in front of the station?',
            vi: 'Anh có biết trước ga mới mở một cửa hàng không?'
          },
          jp: '駅前に 新しい 店が できた のを 知っていますか。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '前', reading: 'まえ' },
            { base: '新', reading: 'あたら' },
            { base: '店', reading: 'みせ' },
            { base: '知', reading: 'し' }
          ]
        },
        {
          prompt: {
            en: "Do you know that tomorrow's class is canceled?",
            vi: 'Anh có biết giờ học ngày mai được nghỉ không?'
          },
          jp: 'あしたの 授業が 休みな のを 知っていますか。',
          ruby: [
            { base: '授', reading: 'じゅ' },
            { base: '業', reading: 'ぎょう' },
            { base: '休', reading: 'やす' },
            { base: '知', reading: 'し' }
          ]
        },
        {
          prompt: {
            en: 'Do you know that Ms. Yamada is in the hospital?',
            vi: 'Anh có biết chị Yamada đang nằm viện không?'
          },
          jp: '山田さんが 入院している のを 知っていますか。',
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '田', reading: 'だ' },
            { base: '入', reading: 'にゅう' },
            { base: '院', reading: 'いん' },
            { base: '知', reading: 'し' }
          ]
        },
        {
          prompt: {
            en: 'Do you know that this village has only one elementary school?',
            vi: 'Anh có biết làng này chỉ có một trường tiểu học không?'
          },
          jp: 'この 村に 小学校が 一つしか ない のを 知っていますか。',
          ruby: [
            { base: '村', reading: 'むら' },
            { base: '小', reading: 'しょう' },
            { base: '学', reading: 'がっ' },
            { base: '校', reading: 'こう' },
            { base: '一', reading: 'ひと' },
            { base: '知', reading: 'し' }
          ]
        },
        {
          prompt: {
            en: 'Do you know the manager is being transferred? ...No, I had no idea.',
            vi: 'Anh có biết trưởng phòng sắp chuyển công tác không? ...Không, tôi không biết.'
          },
          jp: '部長が 転勤する のを 知っていますか。……いいえ、知りませんでした。',
          ruby: [
            { base: '部', reading: 'ぶ' },
            { base: '長', reading: 'ちょう' },
            { base: '転', reading: 'てん' },
            { base: '勤', reading: 'きん' },
            { base: '知', reading: 'し' },
            { base: '知', reading: 'し' }
          ]
        }
      ]
    },
    {
      pattern: 'N / V-plain 時',
      patternRuby: [{ base: '時', reading: 'じ' }],
      items: [
        {
          prompt: {
            en: 'When I was in elementary school, I often swam in the river.',
            vi: 'Hồi tiểu học tôi hay bơi ở sông.'
          },
          jp: '小学校の 時、よく 川で 泳ぎました。',
          ruby: [
            { base: '小', reading: 'しょう' },
            { base: '学', reading: 'がっ' },
            { base: '校', reading: 'こう' },
            { base: '時', reading: 'とき' },
            { base: '川', reading: 'かわ' },
            { base: '泳', reading: 'およ' }
          ]
        },
        {
          prompt: {
            en: 'In junior high, I was in the tennis club.',
            vi: 'Hồi cấp hai tôi ở câu lạc bộ quần vợt.'
          },
          jp: '中学校の 時、テニス部に 入って いました。',
          ruby: [
            { base: '中', reading: 'ちゅう' },
            { base: '学', reading: 'がっ' },
            { base: '校', reading: 'こう' },
            { base: '時', reading: 'とき' },
            { base: '部', reading: 'ぶ' },
            { base: '入', reading: 'はい' }
          ]
        },
        {
          prompt: {
            en: 'When you leave before others, you say "Osaki ni shitsurei shimasu".',
            vi: 'Khi về trước người khác thì nói "Osaki ni shitsurei shimasu".'
          },
          jp: '先に 帰る 時は、「お先に 失礼します」と 言います。',
          ruby: [
            { base: '先', reading: 'さき' },
            { base: '帰', reading: 'かえ' },
            { base: '時', reading: 'とき' },
            { base: '先', reading: 'さき' },
            { base: '失', reading: 'しつ' },
            { base: '礼', reading: 'れい' },
            { base: '言', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'When I was a child, I often played in this park.',
            vi: 'Hồi nhỏ tôi hay chơi ở công viên này.'
          },
          jp: '子どもの 時、この 公園で よく 遊びました。',
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '時', reading: 'とき' },
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '遊', reading: 'あそ' }
          ]
        },
        {
          prompt: {
            en: 'The twins look alike. When I first met them, I could not tell who was who.',
            vi: 'Cặp song sinh trông rất giống nhau. Lần đầu gặp, tôi không phân biệt được ai là ai.'
          },
          jp: '双子は よく 似ています。初めて 会った 時、どちらが どちらか わかりませんでした。',
          ruby: [
            { base: '双', reading: 'ふた' },
            { base: '子', reading: 'ご' },
            { base: '似', reading: 'に' },
            { base: '初', reading: 'はじ' },
            { base: '会', reading: 'あ' },
            { base: '時', reading: 'とき' }
          ]
        }
      ]
    },
    {
      pattern: '～のに',
      items: [
        {
          prompt: {
            en: 'The sisters look alike, but their personalities differ.',
            vi: 'Chị em giống nhau nhưng tính cách khác.'
          },
          jp: '姉妹は 似ている のに、性格が 違います。',
          ruby: [
            { base: '姉', reading: 'しま' },
            { base: '妹', reading: 'い' },
            { base: '似', reading: 'に' },
            { base: '性', reading: 'せい' },
            { base: '格', reading: 'かく' },
            { base: '違', reading: 'ちが' }
          ]
        },
        {
          prompt: {
            en: 'She looks quiet, but she is actually strong-willed.',
            vi: 'Trông thì hiền lành vậy mà thật ra rất cứng cỏi.'
          },
          jp: '見た 目は おとなしい のに、実は 気が 強いです。',
          ruby: [
            { base: '見', reading: 'み' },
            { base: '目', reading: 'め' },
            { base: '実', reading: 'じつ' },
            { base: '気', reading: 'き' },
            { base: '強', reading: 'つよ' }
          ]
        },
        {
          prompt: {
            en: 'He promised, but he did not come.',
            vi: 'Đã hứa rồi vậy mà anh ấy không đến.'
          },
          jp: '約束した のに、彼は 来ませんでした。',
          ruby: [
            { base: '約', reading: 'やく' },
            { base: '束', reading: 'そく' },
            { base: '彼', reading: 'かれ' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'They are twins, yet their personalities are completely different.',
            vi: 'Là sinh đôi vậy mà tính cách khác hẳn nhau.'
          },
          jp: '双子なのに、性格が ぜんぜん 違います。',
          ruby: [
            { base: '双', reading: 'ふた' },
            { base: '子', reading: 'ご' },
            { base: '性', reading: 'せい' },
            { base: '格', reading: 'かく' },
            { base: '違', reading: 'ちが' }
          ]
        },
        {
          prompt: {
            en: 'I explained it many times, but nobody is listening.',
            vi: 'Tôi đã giải thích bao nhiêu lần vậy mà chẳng ai nghe.'
          },
          jp: '何度も 説明した のに、だれも 聞いて いません。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '度', reading: 'ど' },
            { base: '説', reading: 'せつ' },
            { base: '明', reading: 'めい' },
            { base: '聞', reading: 'き' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'I like tidying up.',
        vi: 'Tôi thích dọn dẹp.'
      },
      jp: '整理 する のが 好き なんです。',
      ruby: [
        { base: '整', reading: 'せい' },
        { base: '理', reading: 'り' },
        { base: '好', reading: 'す' }
      ]
    },
    {
      prompt: {
        en: 'Excuse me for leaving before you.',
        vi: 'Tôi xin phép về trước.'
      },
      jp: 'お先に 失礼します。',
      ruby: [
        { base: '先', reading: 'さき' },
        { base: '失', reading: 'しつ' },
        { base: '礼', reading: 'れい' }
      ]
    }
  ]
};
