import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson6SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N を V',
      items: [
        {
          prompt: { en: 'I eat a meal.', vi: 'Tôi ăn cơm.' },
          jp: 'ごはんを 食べます。',
          ruby: [{ base: '食', reading: 'た' }]
        },
        {
          prompt: { en: 'I drink water.', vi: 'Tôi uống nước.' },
          jp: '水を 飲みます。',
          ruby: [
            { base: '水', reading: 'みず' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: { en: 'I read a book.', vi: 'Tôi đọc sách.' },
          jp: '本を 読みます。',
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          prompt: { en: 'I write a letter.', vi: 'Tôi viết thư.' },
          jp: '手紙を 書きます。',
          ruby: [
            { base: '手', reading: 'て' },
            { base: '紙', reading: 'がみ' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'I take a photo.', vi: 'Tôi chụp ảnh.' },
          jp: '写真を 撮ります。',
          ruby: [
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '撮', reading: 'と' }
          ]
        },
        {
          prompt: { en: 'I smoke a cigarette.', vi: 'Tôi hút thuốc lá.' },
          jp: 'たばこを 吸います。',
          ruby: [{ base: '吸', reading: 'す' }]
        },
        {
          prompt: { en: 'I eat an egg.', vi: 'Tôi ăn trứng.' },
          jp: '卵を 食べます。',
          ruby: [
            { base: '卵', reading: 'たまご' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'I eat meat.', vi: 'Tôi ăn thịt.' },
          jp: '肉を 食べます。',
          ruby: [
            { base: '肉', reading: 'にく' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'I eat fish.', vi: 'Tôi ăn cá.' },
          jp: '魚を 食べます。',
          ruby: [
            { base: '魚', reading: 'さかな' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'I eat vegetables.', vi: 'Tôi ăn rau.' },
          jp: '野菜を 食べます。',
          ruby: [
            { base: '野', reading: 'や' },
            { base: '菜', reading: 'さい' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'I eat fruit.', vi: 'Tôi ăn hoa quả.' },
          jp: '果物を 食べます。',
          ruby: [
            { base: '果', reading: 'くだ' },
            { base: '物', reading: 'もの' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'I drink tea.', vi: 'Tôi uống trà.' },
          jp: 'お茶を 飲みます。',
          ruby: [
            { base: '茶', reading: 'ちゃ' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: { en: 'I drink milk.', vi: 'Tôi uống sữa.' },
          jp: 'ミルクを 飲みます。',
          ruby: [{ base: '飲', reading: 'の' }]
        },
        {
          prompt: {
            en: 'I drink juice, then I drink alcohol.',
            vi: 'Tôi uống nước hoa quả, rồi uống rượu.'
          },
          jp: 'ジュースを 飲みます。それから お酒を 飲みます。',
          ruby: [
            { base: '飲', reading: 'の' },
            { base: '酒', reading: 'さけ' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: { en: 'I watch a video.', vi: 'Tôi xem video.' },
          jp: 'ビデオを 見ます。',
          ruby: [{ base: '見', reading: 'み' }]
        },
        {
          prompt: { en: 'I listen to the radio.', vi: 'Tôi nghe radio.' },
          jp: 'ラジオを 聞きます。',
          ruby: [{ base: '聞', reading: 'き' }]
        },
        {
          prompt: { en: 'I meet a friend at 10.', vi: 'Tôi gặp bạn lúc 10 giờ.' },
          jp: '10時に 友達に 会います。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '会', reading: 'あ' }
          ]
        }
      ]
    },
    {
      pattern: 'N を します',
      items: [
        {
          prompt: { en: 'I play soccer.', vi: 'Tôi chơi bóng đá.' },
          jp: 'サッカーを します。'
        },
        {
          prompt: { en: 'I play tennis.', vi: 'Tôi chơi quần vợt.' },
          jp: 'テニスを します。'
        },
        {
          prompt: { en: 'I do my homework.', vi: 'Tôi làm bài tập về nhà.' },
          jp: '宿題を します。',
          ruby: [
            { base: '宿', reading: 'しゅく' },
            { base: '題', reading: 'だい' }
          ]
        },
        {
          prompt: { en: 'We go cherry-blossom viewing.', vi: 'Chúng tôi đi ngắm hoa anh đào.' },
          jp: 'お花見を します。',
          ruby: [
            { base: '花', reading: 'はな' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: { en: 'I do a report.', vi: 'Tôi làm báo cáo.' },
          jp: 'レポートを します。'
        }
      ]
    },
    {
      pattern: '何 を しますか',
      patternRuby: [{ base: '何', reading: 'なに' }],
      items: [
        {
          prompt: { en: 'What will you do on Monday?', vi: 'Thứ hai bạn làm gì?' },
          jp: '月曜日 何を しますか。',
          ruby: [
            { base: '月', reading: 'げつ' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '何', reading: 'なに' }
          ]
        },
        {
          prompt: { en: 'What did you do yesterday?', vi: 'Hôm qua bạn đã làm gì?' },
          jp: 'きのう 何を しましたか。',
          ruby: [{ base: '何', reading: 'なに' }]
        },
        {
          prompt: { en: 'I played soccer.', vi: 'Tôi đã chơi bóng đá.' },
          jp: 'サッカーを しました。'
        },
        {
          prompt: { en: 'I do not do anything.', vi: 'Tôi không làm gì cả.' },
          jp: '何も しません。',
          ruby: [{ base: '何', reading: 'なに' }]
        },
        {
          prompt: { en: 'What will you do tomorrow?', vi: 'Ngày mai bạn làm gì?' },
          jp: 'あした 何を しますか。',
          ruby: [{ base: '何', reading: 'なに' }]
        }
      ]
    },
    {
      pattern: 'なん / なに',
      items: [
        {
          prompt: { en: 'What is that?', vi: 'Đó là cái gì?' },
          jp: 'それは 何ですか。',
          ruby: [{ base: '何', reading: 'なん' }]
        },
        {
          prompt: { en: 'What kind of book is it?', vi: 'Đó là sách gì?' },
          jp: '何の 本ですか。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '本', reading: 'ほん' }
          ]
        },
        {
          prompt: { en: 'How do you go to Tokyo?', vi: 'Bạn đi Tokyo bằng gì?' },
          jp: '何で 東京へ 行きますか。',
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'What will you buy?', vi: 'Bạn mua gì?' },
          jp: '何を 買いますか。',
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'What will you eat?', vi: 'Bạn ăn gì?' },
          jp: '何を 食べますか。',
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '食', reading: 'た' }
          ]
        }
      ]
    },
    {
      pattern: 'N で V',
      items: [
        {
          prompt: { en: 'I buy a newspaper at the station.', vi: 'Tôi mua báo ở ga.' },
          jp: '駅で 新聞を 買います。',
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '新', reading: 'しん' },
            { base: '聞', reading: 'ぶん' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'I take photos in the garden.', vi: 'Tôi chụp ảnh ở vườn.' },
          jp: '庭で 写真を 撮ります。',
          ruby: [
            { base: '庭', reading: 'にわ' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '撮', reading: 'と' }
          ]
        },
        {
          prompt: { en: 'I eat lunch at school.', vi: 'Tôi ăn cơm trưa ở trường.' },
          jp: '学校で 昼ごはんを 食べます。',
          ruby: [
            { base: '学', reading: 'がっ' },
            { base: '校', reading: 'こう' },
            { base: '昼', reading: 'ひる' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'I watch videos at home.', vi: 'Tôi xem video ở nhà.' },
          jp: 'うちで ビデオを 見ます。',
          ruby: [{ base: '見', reading: 'み' }]
        },
        {
          prompt: { en: 'I eat breakfast at the shop.', vi: 'Tôi ăn sáng ở cửa hàng.' },
          jp: '店で 朝ごはんを 食べます。',
          ruby: [
            { base: '店', reading: 'みせ' },
            { base: '朝', reading: 'あさ' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'I eat dinner at home.', vi: 'Tôi ăn tối ở nhà.' },
          jp: 'うちで 晩ごはんを 食べます。',
          ruby: [
            { base: '晩', reading: 'ばん' },
            { base: '食', reading: 'た' }
          ]
        }
      ]
    },
    {
      pattern: 'V ませんか',
      items: [
        {
          prompt: {
            en: 'Would you like to go to Kyoto with me?',
            vi: 'Bạn đi Kyoto cùng tôi không?'
          },
          jp: 'いっしょに 京都へ 行きませんか。',
          ruby: [
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'Would you like to have lunch together?', vi: 'Cùng ăn cơm trưa nhé?' },
          jp: 'いっしょに 昼ごはんを 食べませんか。',
          ruby: [
            { base: '昼', reading: 'ひる' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: {
            en: 'Would you like to go cherry-blossom viewing together?',
            vi: 'Cùng đi ngắm hoa anh đào nhé?'
          },
          jp: 'いっしょに お花見を しませんか。',
          ruby: [
            { base: '花', reading: 'はな' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: { en: 'Shall we play tennis together?', vi: 'Cùng chơi quần vợt nhé?' },
          jp: 'いっしょに テニスを しませんか。'
        },
        {
          prompt: { en: 'Sorry, I am afraid I cannot.', vi: 'Xin lỗi, tôi hơi...' },
          jp: 'すみません、ちょっと...'
        }
      ]
    },
    {
      pattern: 'V ましょう',
      items: [
        {
          prompt: { en: 'Let us take a short break.', vi: 'Chúng ta nghỉ một chút nhé.' },
          jp: 'ちょっと 休みましょう。',
          ruby: [{ base: '休', reading: 'やす' }]
        },
        {
          prompt: { en: 'Let us eat together.', vi: 'Chúng ta cùng ăn cơm nhé.' },
          jp: 'いっしょに ごはんを 食べましょう。',
          ruby: [{ base: '食', reading: 'た' }]
        },
        {
          prompt: { en: 'Let us meet at the station at 10.', vi: '10 giờ gặp nhau ở ga nhé.' },
          jp: '10時に 駅で 会いましょう。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '駅', reading: 'えき' },
            { base: '会', reading: 'あ' }
          ]
        },
        {
          prompt: { en: 'Yes, let us do that.', vi: 'Vâng, làm vậy nhé.' },
          jp: 'ええ、しましょう。'
        },
        {
          prompt: { en: 'Let us listen to the radio together.', vi: 'Cùng nghe radio nhé.' },
          jp: 'いっしょに ラジオを 聞きましょう。',
          ruby: [{ base: '聞', reading: 'き' }]
        }
      ]
    },
    {
      pattern: 'N ですか',
      items: [
        {
          prompt: { en: 'You went to Kyoto on Sunday? (echo)', vi: 'Chủ nhật bạn đi Kyoto à?' },
          jp: '日曜日 京都へ 行きましたか。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'You eat bread? (echo)', vi: 'Bạn ăn bánh mì à?' },
          jp: 'パンを 食べますか。',
          ruby: [{ base: '食', reading: 'た' }]
        },
        {
          prompt: { en: 'You drink black tea? (echo)', vi: 'Bạn uống trà đen à?' },
          jp: '紅茶を 飲みますか。',
          ruby: [
            { base: '紅', reading: 'こう' },
            { base: '茶', reading: 'ちゃ' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: { en: 'You always drink milk? (echo)', vi: 'Bạn lúc nào cũng uống sữa à?' },
          jp: 'いつも 牛乳を 飲みますか。',
          ruby: [
            { base: '牛', reading: 'ぎゅう' },
            { base: '乳', reading: 'にゅう' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: { en: 'You sometimes drink beer? (echo)', vi: 'Thỉnh thoảng bạn uống bia à?' },
          jp: '時々 ビールを 飲みますか。',
          ruby: [
            { base: '時', reading: 'とき' },
            { base: '々', reading: 'どき' },
            { base: '飲', reading: 'の' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'Sounds good. / That would be nice.',
        vi: 'Được đấy nhỉ. / Hay quá.'
      },
      jp: 'いいですね。'
    },
    {
      prompt: { en: 'I understand. / All right.', vi: 'Tôi hiểu rồi. / Vâng ạ.' },
      jp: 'わかりました。'
    },
    {
      prompt: {
        en: 'Yes? / What is it? (answering someone who called you)',
        vi: 'Có gì đấy ạ? / Cái gì vậy? (đáp lại khi được gọi)'
      },
      jp: '何ですか。',
      ruby: [{ base: '何', reading: 'なん' }]
    },
    {
      prompt: { en: 'See you tomorrow, then.', vi: 'Thế thì hẹn gặp lại ngày mai.' },
      jp: 'じゃ、また あした。'
    }
  ]
};
