import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson46SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-る/ている/た ところです',
      items: [
        {
          prompt: {
            en: 'Hello, is now a good time? ...Sorry, I am just about to go out.',
            vi: 'A lô, giờ nói chuyện được không? ...Xin lỗi, tôi đang chuẩn bị ra ngoài.'
          },
          jp: 'もしもし、今 いいですか。……すみません、今から 出かける ところです。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '今', reading: 'いま' },
            { base: '出', reading: 'で' }
          ]
        },
        {
          prompt: { en: 'The meeting is just about to start.', vi: 'Cuộc họp sắp bắt đầu.' },
          jp: '今 会議が 始まる ところです。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '始', reading: 'はじ' }
          ]
        },
        {
          prompt: {
            en: 'The bus is just about to leave. Hurry!',
            vi: 'Xe buýt sắp chạy rồi. Nhanh lên!'
          },
          jp: 'バスは 今 出る ところですよ。急いで ください。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '出', reading: 'で' },
            { base: '急', reading: 'いそ' }
          ]
        },
        {
          prompt: { en: 'I am baking bread right now.', vi: 'Bây giờ tôi đang nướng bánh mì.' },
          jp: '今 パンを 焼いている ところです。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '焼', reading: 'や' }
          ]
        },
        {
          prompt: {
            en: 'I am on my way to you right now.',
            vi: 'Tôi đang trên đường tới chỗ anh.'
          },
          jp: '今 そちらへ 向かっている ところです。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '向', reading: 'む' }
          ]
        },
        {
          prompt: { en: 'My older brother has just come home.', vi: 'Anh trai tôi vừa mới về.' },
          jp: '兄は たった今 帰って 来た ところです。',
          ruby: [
            { base: '兄', reading: 'あに' },
            { base: '今', reading: 'いま' },
            { base: '帰', reading: 'かえ' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          prompt: { en: 'I am in the middle of making dinner.', vi: 'Tôi đang nấu bữa tối.' },
          jp: '今 晩ご飯を 作っている ところです。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '晩', reading: 'ばん' },
            { base: '飯', reading: 'はん' },
            { base: '作', reading: 'つく' }
          ]
        }
      ]
    },
    {
      pattern: 'V-た ばかり',
      items: [
        {
          prompt: {
            en: 'I just started university half a year ago.',
            vi: 'Tôi mới vào đại học được nửa năm.'
          },
          jp: '半年前に 大学に 入学した ばかりです。',
          ruby: [
            { base: '半', reading: 'はん' },
            { base: '年', reading: 'とし' },
            { base: '前', reading: 'まえ' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '入', reading: 'にゅう' },
            { base: '学', reading: 'がく' }
          ]
        },
        {
          prompt: {
            en: 'She has just graduated from university.',
            vi: 'Cô ấy vừa tốt nghiệp đại học.'
          },
          jp: '彼女は 大学を 卒業した ばかりです。',
          ruby: [
            { base: '彼', reading: 'かの' },
            { base: '女', reading: 'じょ' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '卒', reading: 'そつ' },
            { base: '業', reading: 'ぎょう' }
          ]
        },
        {
          prompt: {
            en: 'This bread is fresh out of the oven and still warm.',
            vi: 'Bánh mì này vừa nướng xong, vẫn còn ấm.'
          },
          jp: 'この パンは 焼けた ばかりで、まだ 温かいです。',
          ruby: [
            { base: '焼', reading: 'や' },
            { base: '温', reading: 'あたた' }
          ]
        },
        {
          prompt: {
            en: 'I have only just come to Japan, so I do not know anything yet.',
            vi: 'Tôi mới sang Nhật nên chưa biết gì cả.'
          },
          jp: '日本に 来た ばかりなので、まだ 何も わかりません。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '来', reading: 'き' },
            { base: '何', reading: 'なに' }
          ]
        },
        {
          prompt: {
            en: 'I just bought this computer last week, yet it is already broken.',
            vi: 'Cái máy tính này mới mua tuần trước vậy mà đã hỏng.'
          },
          jp: 'この パソコンは 先週 買った ばかりなのに、もう 壊れました。',
          ruby: [
            { base: '先', reading: 'せん' },
            { base: '週', reading: 'しゅう' },
            { base: '買', reading: 'か' },
            { base: '壊', reading: 'こわ' }
          ]
        }
      ]
    },
    {
      pattern: 'N / Adj / V 普通形 はずです',
      patternRuby: [
        { base: '普', reading: 'ふ' },
        { base: '通', reading: 'つう' },
        { base: '形', reading: 'けい' }
      ],
      items: [
        {
          prompt: {
            en: 'Today is Sunday, so the office should be closed.',
            vi: 'Hôm nay là Chủ nhật nên chắc chắn công ty nghỉ.'
          },
          jp: '今日は 日曜日だから、会社は 休みの はずです。',
          ruby: [
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '休', reading: 'やす' }
          ]
        },
        {
          prompt: {
            en: 'Mr. Tanaka is supposed to come today.',
            vi: 'Anh Tanaka chắc chắn hôm nay sẽ đến.'
          },
          jp: '田中さんは 今日 来る はずです。',
          ruby: [
            { base: '田', reading: 'た' },
            { base: '中', reading: 'なか' },
            { base: '今', reading: 'きょ' },
            { base: '日', reading: 'う' },
            { base: '来', reading: 'く' }
          ]
        },
        {
          prompt: { en: 'It should be your turn next.', vi: 'Lượt tiếp theo chắc là của anh đấy.' },
          jp: '次は あなたの 番の はずですよ。',
          ruby: [
            { base: '次', reading: 'つぎ' },
            { base: '番', reading: 'ばん' }
          ]
        },
        {
          prompt: {
            en: 'It is already five, so the person in charge should be here soon.',
            vi: 'Đã 5 giờ rồi nên chắc người phụ trách sắp đến.'
          },
          jp: 'もう 5時ですから、係の 人が 来る はずです。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '係', reading: 'かかり' },
            { base: '人', reading: 'ひと' },
            { base: '来', reading: 'く' }
          ]
        },
        {
          prompt: {
            en: 'I called them a moment ago, so they should be on their way here.',
            vi: 'Tôi vừa gọi điện rồi nên chắc họ đang trên đường tới đây.'
          },
          jp: 'さっき 電話しましたから、こちらへ 向かっている はずです。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '向', reading: 'む' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'I am sorry.', vi: 'Xin lỗi.' },
      jp: '申し訳ありません。',
      ruby: [
        { base: '申', reading: 'もう' },
        { base: '訳', reading: 'わけ' }
      ]
    },
    {
      prompt: { en: 'May I ask who is calling?', vi: 'Xin hỏi ai thế ạ?' },
      jp: 'どちら様でしょうか。',
      ruby: [{ base: '様', reading: 'さま' }]
    },
    {
      prompt: { en: 'Sorry to keep you waiting.', vi: 'Xin lỗi đã bắt anh chị chờ lâu.' },
      jp: 'お待たせしました。',
      ruby: [{ base: '待', reading: 'ま' }]
    },
    {
      prompt: { en: 'Is now a good time?', vi: 'Bây giờ có nói chuyện được không?' },
      jp: '今 いいですか。',
      ruby: [{ base: '今', reading: 'いま' }]
    }
  ]
};
