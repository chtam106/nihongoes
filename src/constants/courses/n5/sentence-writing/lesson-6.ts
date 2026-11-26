import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson6SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'N を V',
      items: [
        {
          prompt: { en: 'I eat bread every morning.', vi: 'Sáng nào tôi cũng ăn bánh mì.' },
          jp: '毎朝 パンを 食べます。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'I drink coffee every morning.', vi: 'Sáng nào tôi cũng uống cà phê.' },
          jp: '毎朝 コーヒーを 飲みます。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: { en: 'Yesterday I took photos in Kyoto.', vi: 'Hôm qua tôi chụp ảnh ở Kyoto.' },
          jp: 'きのう 京都で 写真を 撮りました。',
          ruby: [
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '撮', reading: 'と' }
          ]
        },
        {
          prompt: { en: 'My father does not smoke.', vi: 'Bố tôi không hút thuốc.' },
          jp: '父は たばこを 吸いません。',
          ruby: [
            { base: '父', reading: 'ちち' },
            { base: '吸', reading: 'す' }
          ]
        },
        {
          prompt: { en: 'I drink beer, and then I eat.', vi: 'Tôi uống bia, rồi sau đó ăn cơm.' },
          jp: 'ビールを 飲みます。それから ごはんを 食べます。',
          ruby: [
            { base: '飲', reading: 'の' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: { en: 'I watch videos at home on Sundays.', vi: 'Chủ nhật tôi xem video ở nhà.' },
          jp: '日曜日 うちで ビデオを 見ます。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '見', reading: 'み' }
          ]
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
          prompt: { en: 'I play soccer every Saturday.', vi: 'Thứ Bảy hằng tuần tôi đá bóng.' },
          jp: '毎週 土曜日に サッカーを します。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '週', reading: 'しゅう' },
            { base: '土', reading: 'ど' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          prompt: {
            en: 'I play tennis in the park in the morning.',
            vi: 'Buổi sáng tôi chơi quần vợt ở công viên.'
          },
          jp: '朝 公園で テニスを します。',
          ruby: [
            { base: '朝', reading: 'あさ' },
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' }
          ]
        },
        {
          prompt: { en: 'I will do my homework this evening.', vi: 'Tối nay tôi làm bài tập.' },
          jp: '今晩 宿題を します。',
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '晩', reading: 'ばん' },
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
          prompt: {
            en: 'I went cherry-blossom viewing with friends on Sunday.',
            vi: 'Chủ nhật tôi đi ngắm hoa anh đào với bạn.'
          },
          jp: '日曜日に 友達と お花見を しました。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '花', reading: 'はな' },
            { base: '見', reading: 'み' }
          ]
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
          prompt: {
            en: 'What did you do yesterday? ...I played tennis.',
            vi: 'Hôm qua anh làm gì? ...Tôi chơi quần vợt.'
          },
          jp: 'きのう 何を しましたか。……テニスを しました。',
          ruby: [{ base: '何', reading: 'なに' }]
        },
        {
          prompt: {
            en: 'What are you doing on Sunday? ...Nothing.',
            vi: 'Chủ nhật anh làm gì? ...Không làm gì cả.'
          },
          jp: '日曜日 何を しますか。……何も しません。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '何', reading: 'なに' },
            { base: '何', reading: 'なに' }
          ]
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
          prompt: { en: 'How do you go to Tokyo?', vi: 'Bạn đi đến Tokyo bằng gì?' },
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
            vi: 'Bạn đi đến Kyoto cùng tôi không?'
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
          prompt: {
            en: 'Would you like to go for a drink tonight? ...Sorry, tonight is a bit...',
            vi: 'Tối nay đi uống với tôi không? ...Xin lỗi, tối nay thì hơi...'
          },
          jp: '今晩 いっしょに 飲みませんか。……すみません、今晩は ちょっと...',
          ruby: [
            { base: '今', reading: 'こん' },
            { base: '晩', reading: 'ばん' },
            { base: '飲', reading: 'の' },
            { base: '今', reading: 'こん' },
            { base: '晩', reading: 'ばん' }
          ]
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
          prompt: {
            en: 'Shall we play tennis together? ...Yes, let us.',
            vi: 'Cùng chơi quần vợt không? ...Ừ, chơi đi.'
          },
          jp: 'いっしょに テニスを しませんか。……ええ、しましょう。'
        },
        {
          prompt: {
            en: 'Well then, let us meet again tomorrow.',
            vi: 'Vậy hẹn gặp lại ngày mai nhé.'
          },
          jp: 'じゃ、また あした 会いましょう。',
          ruby: [{ base: '会', reading: 'あ' }]
        }
      ]
    },
    {
      pattern: 'N ですか',
      items: [
        {
          prompt: {
            en: 'I went to Kyoto on Sunday. ...Kyoto? How nice.',
            vi: 'Chủ nhật tôi đã đi đến Kyoto. ...Kyoto à? Thích nhỉ.'
          },
          jp: '日曜日 京都へ 行きました。……京都ですか。いいですね。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '行', reading: 'い' },
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' }
          ]
        },
        {
          prompt: {
            en: 'We are going cherry-blossom viewing tomorrow. ...Cherry-blossom viewing? How nice.',
            vi: 'Mai chúng tôi đi ngắm hoa. ...Ngắm hoa à? Thích nhỉ.'
          },
          jp: 'あした お花見を します。……お花見ですか。いいですね。',
          ruby: [
            { base: '花', reading: 'はな' },
            { base: '見', reading: 'み' },
            { base: '花', reading: 'はな' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: 'I am meeting a friend in Osaka this weekend. ...In Osaka?',
            vi: 'Cuối tuần tôi gặp bạn ở Osaka. ...Ở Osaka à?'
          },
          jp: '週末 大阪で 友達に 会います。……大阪ですか。',
          ruby: [
            { base: '週', reading: 'しゅう' },
            { base: '末', reading: 'まつ' },
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '会', reading: 'あ' },
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' }
          ]
        },
        {
          prompt: {
            en: 'I drink beer every night. ...Beer?',
            vi: 'Tối nào tôi cũng uống bia. ...Bia à?'
          },
          jp: '毎晩 ビールを 飲みます。……ビールですか。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '晩', reading: 'ばん' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          prompt: {
            en: 'I am going to the department store on Sunday. ...The department store? What will you buy?',
            vi: 'Chủ nhật tôi đi trung tâm thương mại. ...Trung tâm thương mại à? Anh mua gì?'
          },
          jp: '日曜日 デパートへ 行きます。……デパートですか。何を 買いますか。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '行', reading: 'い' },
            { base: '何', reading: 'なに' },
            { base: '買', reading: 'か' }
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
