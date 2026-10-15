import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson9SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N が あります / わかります / 好きです / 嫌いです / 上手です / 下手です',
      patternRuby: [
        { base: '好', reading: 'す' },
        { base: '嫌', reading: 'きら' },
        { base: '上', reading: 'じょう' },
        { base: '手', reading: 'ず' },
        { base: '下', reading: 'へ' },
        { base: '手', reading: 'た' }
      ],
      items: [
        {
          prompt: { en: 'I like Vietnamese food.', vi: 'Tôi thích món Việt.' },
          jp: '私は ベトナム料理が 好きです。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '料', reading: 'りょう' },
            { base: '理', reading: 'り' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'I dislike jazz.', vi: 'Tôi không thích nhạc jazz.' },
          jp: '私は ジャズが 嫌いです。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '嫌', reading: 'きら' }
          ]
        },
        {
          prompt: { en: 'Yuki is good at baseball.', vi: 'Bé Yuki giỏi bóng chày.' },
          jp: 'ゆきちゃんは 野球が 上手です。',
          ruby: [
            { base: '野', reading: 'や' },
            { base: '球', reading: 'きゅう' },
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' }
          ]
        },
        {
          prompt: { en: 'I am poor at dance.', vi: 'Tôi kém khiêu vũ.' },
          jp: '私は ダンスが 下手です。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '下', reading: 'へ' },
            { base: '手', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'I understand Japanese.', vi: 'Tôi hiểu tiếng Nhật.' },
          jp: '私は 日本語が わかります。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' }
          ]
        },
        {
          prompt: { en: 'I have a ticket.', vi: 'Tôi có vé.' },
          jp: '私は チケットが あります。',
          ruby: [{ base: '私', reading: 'わたし' }]
        },
        {
          prompt: { en: 'I like drinks.', vi: 'Tôi thích đồ uống.' },
          jp: '私は 飲み物が 好きです。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '飲', reading: 'の' },
            { base: '物', reading: 'もの' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'Alex likes sports.', vi: 'Anh Alex thích thể thao.' },
          jp: 'アレックスさんは スポーツが 好きです。',
          ruby: [{ base: '好', reading: 'す' }]
        },
        {
          prompt: { en: 'I like travel.', vi: 'Tôi thích du lịch.' },
          jp: '私は 旅行が 好きです。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'Maria likes music.', vi: 'Maria thích âm nhạc.' },
          jp: 'マリアさんは 音楽が 好きです。',
          ruby: [
            { base: '音', reading: 'おん' },
            { base: '楽', reading: 'がく' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'I like songs.', vi: 'Tôi thích bài hát.' },
          jp: '私は 歌が 好きです。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '歌', reading: 'うた' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'I like classical music.', vi: 'Tôi thích nhạc cổ điển.' },
          jp: '私は クラシックが 好きです。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'I like concerts.', vi: 'Tôi thích buổi hòa nhạc.' },
          jp: '私は コンサートが 好きです。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'I like karaoke.', vi: 'Tôi thích karaoke.' },
          jp: '私は カラオケが 好きです。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'I like kabuki.', vi: 'Tôi thích kabuki.' },
          jp: '私は 歌舞伎が 好きです。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '歌', reading: 'か' },
            { base: '舞', reading: 'ぶ' },
            { base: '伎', reading: 'き' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'I am good at painting.', vi: 'Tôi giỏi vẽ.' },
          jp: '私は 絵が 上手です。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '絵', reading: 'え' },
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' }
          ]
        },
        {
          prompt: { en: 'I am poor at characters (writing).', vi: 'Tôi kém viết chữ.' },
          jp: '私は 字が 下手です。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '字', reading: 'じ' },
            { base: '下', reading: 'へ' },
            { base: '手', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'Kanji is difficult, but I like it.', vi: 'Chữ Hán khó nhưng tôi thích.' },
          jp: '漢字は 難しいですが、好きです。',
          ruby: [
            { base: '漢', reading: 'かん' },
            { base: '字', reading: 'じ' },
            { base: '難', reading: 'むずか' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'I understand hiragana.', vi: 'Tôi hiểu hiragana.' },
          jp: 'ひらがなが わかります。'
        },
        {
          prompt: { en: 'I understand katakana.', vi: 'Tôi hiểu katakana.' },
          jp: 'カタカナが わかります。'
        },
        {
          prompt: { en: 'I understand romaji.', vi: 'Tôi hiểu chữ La Mã.' },
          jp: 'ローマ字が わかります。',
          ruby: [{ base: '字', reading: 'じ' }]
        },
        {
          prompt: { en: 'I have small change.', vi: 'Tôi có tiền lẻ.' },
          jp: '細かい お金が あります。',
          ruby: [
            { base: '細', reading: 'こま' },
            { base: '金', reading: 'かね' }
          ]
        },
        {
          prompt: { en: 'I have time.', vi: 'Tôi có thời gian.' },
          jp: '時間が あります。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' }
          ]
        },
        {
          prompt: { en: 'I have an errand.', vi: 'Tôi có việc bận.' },
          jp: '用事が あります。',
          ruby: [
            { base: '用', reading: 'よう' },
            { base: '事', reading: 'じ' }
          ]
        },
        {
          prompt: { en: 'I have an appointment.', vi: 'Tôi có cuộc hẹn.' },
          jp: '約束が あります。',
          ruby: [
            { base: '約', reading: 'やく' },
            { base: '束', reading: 'そく' }
          ]
        },
        {
          prompt: { en: 'I have a part-time job.', vi: 'Tôi có việc làm thêm.' },
          jp: 'アルバイトが あります。'
        },
        {
          prompt: {
            en: "Ms. Suzuki's husband likes golf.",
            vi: 'Chồng cô Suzuki thích golf.'
          },
          jp: 'すずきさんの ご主人は ゴルフが 好きです。',
          ruby: [
            { base: '主', reading: 'しゅ' },
            { base: '人', reading: 'じん' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'My husband likes soccer.', vi: 'Chồng tôi thích bóng đá.' },
          jp: '夫は サッカーが 好きです。',
          ruby: [
            { base: '夫', reading: 'おっと' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: {
            en: "Mr. Yamada's wife is good at cooking.",
            vi: 'Vợ anh Yamada giỏi nấu ăn.'
          },
          jp: 'やまださんの 奥さんは 料理が 上手です。',
          ruby: [
            { base: '奥', reading: 'おく' },
            { base: '料', reading: 'りょう' },
            { base: '理', reading: 'り' },
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' }
          ]
        },
        {
          prompt: { en: 'My wife likes music.', vi: 'Vợ tôi thích âm nhạc.' },
          jp: '妻は 音楽が 好きです。',
          ruby: [
            { base: '妻', reading: 'つま' },
            { base: '音', reading: 'おん' },
            { base: '楽', reading: 'がく' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'The child likes songs.', vi: 'Đứa trẻ thích bài hát.' },
          jp: '子どもは 歌が 好きです。',
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '歌', reading: 'うた' },
            { base: '好', reading: 'す' }
          ]
        }
      ]
    },
    {
      pattern: 'どんな N が 好きですか',
      patternRuby: [{ base: '好', reading: 'す' }],
      items: [
        {
          prompt: { en: 'What kind of music do you like?', vi: 'Bạn thích nhạc loại nào?' },
          jp: 'どんな 音楽が 好きですか。',
          ruby: [
            { base: '音', reading: 'おん' },
            { base: '楽', reading: 'がく' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'What kind of sports do you like?', vi: 'Bạn thích thể thao loại nào?' },
          jp: 'どんな スポーツが 好きですか。',
          ruby: [{ base: '好', reading: 'す' }]
        },
        {
          prompt: { en: 'What kind of food do you like?', vi: 'Bạn thích món ăn loại nào?' },
          jp: 'どんな 料理が 好きですか。',
          ruby: [
            { base: '料', reading: 'りょう' },
            { base: '理', reading: 'り' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'What kind of pictures do you like?', vi: 'Bạn thích tranh loại nào?' },
          jp: 'どんな 絵が 好きですか。',
          ruby: [
            { base: '絵', reading: 'え' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'I like jazz.', vi: 'Tôi thích nhạc jazz.' },
          jp: 'ジャズが 好きです。',
          ruby: [{ base: '好', reading: 'す' }]
        }
      ]
    },
    {
      pattern: 'よく / だいたい / たくさん / 少し / あまり / 全然',
      patternRuby: [
        { base: '少', reading: 'すこ' },
        { base: '全', reading: 'ぜん' },
        { base: '然', reading: 'ぜん' }
      ],
      items: [
        {
          prompt: { en: 'I understand Japanese well.', vi: 'Tôi hiểu tiếng Nhật rõ.' },
          jp: '日本語が よく わかります。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' }
          ]
        },
        {
          prompt: { en: 'I mostly understand kanji.', vi: 'Tôi đại khái hiểu chữ Hán.' },
          jp: '漢字が だいたい わかります。',
          ruby: [
            { base: '漢', reading: 'かん' },
            { base: '字', reading: 'じ' }
          ]
        },
        {
          prompt: { en: 'I have a lot of time.', vi: 'Tôi có nhiều thời gian.' },
          jp: '時間が たくさん あります。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' }
          ]
        },
        {
          prompt: { en: 'I understand a little Japanese.', vi: 'Tôi hiểu tiếng Nhật một chút.' },
          jp: '日本語が 少し わかります。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '少', reading: 'すこ' }
          ]
        },
        {
          prompt: { en: 'I do not like kabuki very much.', vi: 'Tôi không thích kabuki lắm.' },
          jp: '歌舞伎が あまり 好きじゃ ありません。',
          ruby: [
            { base: '歌', reading: 'か' },
            { base: '舞', reading: 'ぶ' },
            { base: '伎', reading: 'き' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: {
            en: 'I do not understand romaji at all.',
            vi: 'Tôi hoàn toàn không hiểu romaji.'
          },
          jp: 'ローマ字が 全然 わかりません。',
          ruby: [
            { base: '字', reading: 'じ' },
            { base: '全', reading: 'ぜん' },
            { base: '然', reading: 'ぜん' }
          ]
        },
        {
          prompt: { en: 'Please come early.', vi: 'Hãy đến sớm.' },
          jp: '早く 来て ください。',
          ruby: [
            { base: '早', reading: 'はや' },
            { base: '来', reading: 'き' }
          ]
        }
      ]
    },
    {
      pattern: '～から、～',
      items: [
        {
          prompt: {
            en: 'I am busy, so I cannot go.',
            vi: 'Tôi bận nên không đi được.'
          },
          jp: '忙しいですから、行きません。',
          ruby: [
            { base: '忙', reading: 'いそが' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'I have an appointment, so I will go home early.',
            vi: 'Tôi có hẹn nên về sớm.'
          },
          jp: '約束が ありますから、早く 帰ります。',
          ruby: [
            { base: '約', reading: 'やく' },
            { base: '束', reading: 'そく' },
            { base: '早', reading: 'はや' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          prompt: {
            en: 'I like music, so I go to concerts.',
            vi: 'Tôi thích nhạc nên đi hòa nhạc.'
          },
          jp: '音楽が 好きですから、コンサートへ 行きます。',
          ruby: [
            { base: '音', reading: 'おん' },
            { base: '楽', reading: 'がく' },
            { base: '好', reading: 'す' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'I have an errand, so I will not drink.',
            vi: 'Tôi có việc nên không uống.'
          },
          jp: '用事が ありますから、飲みません。',
          ruby: [
            { base: '用', reading: 'よう' },
            { base: '事', reading: 'じ' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: {
            en: 'I have a part-time job, so I am busy.',
            vi: 'Tôi có việc làm thêm nên bận.'
          },
          jp: 'アルバイトが ありますから、忙しいです。',
          ruby: [{ base: '忙', reading: 'いそが' }]
        }
      ]
    },
    {
      pattern: 'どうして',
      items: [
        {
          prompt: { en: 'Why do you like Japan?', vi: 'Tại sao bạn thích Nhật?' },
          jp: 'どうして 日本が 好きですか。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'Why will you not go?', vi: 'Tại sao bạn không đi?' },
          jp: 'どうして 行きませんか。',
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          prompt: {
            en: 'Because I have an appointment.',
            vi: 'Vì tôi có cuộc hẹn.'
          },
          jp: '約束が ありますから。',
          ruby: [
            { base: '約', reading: 'やく' },
            { base: '束', reading: 'そく' }
          ]
        },
        {
          prompt: { en: 'Why are you busy?', vi: 'Tại sao bạn bận?' },
          jp: 'どうして 忙しいですか。',
          ruby: [{ base: '忙', reading: 'いそが' }]
        },
        {
          prompt: {
            en: 'Because I have a part-time job.',
            vi: 'Vì tôi có việc làm thêm.'
          },
          jp: 'アルバイトが ありますから。'
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'Please lend it to me.', vi: 'Hãy cho tôi mượn.' },
      jp: '貸してください。',
      ruby: [{ base: '貸', reading: 'か' }]
    },
    {
      prompt: { en: 'Sure. / That is fine.', vi: 'Được chứ. / Được ạ.' },
      jp: 'いいですよ。'
    },
    {
      prompt: {
        en: 'I am sorry, but... / What a pity.',
        vi: 'Tôi xin lỗi, nhưng... / Đáng tiếc là...'
      },
      jp: '残念ですが。',
      ruby: [
        { base: '残', reading: 'ざん' },
        { base: '念', reading: 'ねん' }
      ]
    },
    {
      prompt: { en: 'Oh. / Ah.', vi: 'À. / Ôi.' },
      jp: 'ああ。'
    },
    {
      prompt: { en: 'Would you like to join me?', vi: 'Anh/Chị cùng với tôi không?' },
      jp: 'いっしょに いかがですか。'
    },
    {
      prompt: {
        en: 'Well... (soft way to decline an invitation)',
        vi: 'À thì... (từ chối khéo một lời mời)'
      },
      jp: 'ちょっと……'
    },
    {
      prompt: { en: 'Is it no good? / You cannot?', vi: 'Không được à?' },
      jp: 'だめですか。'
    },
    {
      prompt: {
        en: 'Another time, please. (polite way to decline)',
        vi: 'Hẹn anh/chị lần sau vậy. (cách từ chối khéo)'
      },
      jp: 'また 今度 お願いします。',
      ruby: [
        { base: '今', reading: 'こん' },
        { base: '度', reading: 'ど' },
        { base: '願', reading: 'ねが' }
      ]
    }
  ]
};
