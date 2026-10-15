import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson28SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-ながら V',
      items: [
        {
          prompt: {
            en: 'I take notes while listening to the lecture.',
            vi: 'Tôi vừa nghe bài vừa ghi memo.'
          },
          jp: '話を 聞きながら メモします。',
          ruby: [
            { base: '話', reading: 'はなし' },
            { base: '聞', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'I chew gum while watching a drama.',
            vi: 'Tôi vừa xem phim truyền hình vừa nhai kẹo cao su.'
          },
          jp: 'ドラマを 見ながら ガムを かみます。',
          ruby: [{ base: '見', reading: 'み' }]
        },
        {
          prompt: {
            en: 'My son attends university while working.',
            vi: 'Con trai tôi vừa đi học đại học vừa đi làm.'
          },
          jp: '息子は 大学に 通いながら 働きます。大学に 通います。',
          ruby: [
            { base: '息', reading: 'むす' },
            { base: '子', reading: 'こ' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '通', reading: 'かよ' },
            { base: '働', reading: 'はたら' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '通', reading: 'かよ' }
          ]
        },
        {
          prompt: {
            en: 'I dance while singing.',
            vi: 'Tôi vừa hát vừa múa.'
          },
          jp: '歌いながら 踊ります。',
          ruby: [
            { base: '歌', reading: 'うた' },
            { base: '踊', reading: 'おど' }
          ]
        },
        {
          prompt: {
            en: 'I choose goods while looking at the price.',
            vi: 'Tôi vừa xem giá vừa chọn hàng.'
          },
          jp: '値段を 見ながら 品物を 選びます。',
          ruby: [
            { base: '値', reading: 'ね' },
            { base: '段', reading: 'だん' },
            { base: '見', reading: 'み' },
            { base: '品', reading: 'しな' },
            { base: '物', reading: 'もの' },
            { base: '選', reading: 'えら' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て います (habit)',
      items: [
        {
          prompt: {
            en: 'On days off I usually play games.',
            vi: 'Ngày nghỉ thường thì tôi chơi game.'
          },
          jp: '休みの 日は たいてい ゲームを しています。',
          ruby: [
            { base: '休', reading: 'やす' },
            { base: '日', reading: 'ひ' }
          ]
        },
        {
          prompt: {
            en: 'Every week I go to the beauty salon.',
            vi: 'Mỗi tuần tôi đi hiệu làm đẹp.'
          },
          jp: '毎週 美容院へ 行っています。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '週', reading: 'しゅう' },
            { base: '美', reading: 'び' },
            { base: '容', reading: 'よう' },
            { base: '院', reading: 'いん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'In the future I want to become a novelist, so I write novels.',
            vi: 'Tương lai tôi muốn làm nhà văn, nên tôi viết tiểu thuyết.'
          },
          jp: '将来 小説家に なりたいです。写真～家にも なれます。今 小説を 書いています。',
          ruby: [
            { base: '将', reading: 'しょう' },
            { base: '来', reading: 'らい' },
            { base: '小', reading: 'しょう' },
            { base: '説', reading: 'せつ' },
            { base: '家', reading: 'か' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '家', reading: 'か' },
            { base: '今', reading: 'いま' },
            { base: '小', reading: 'しょう' },
            { base: '説', reading: 'せつ' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'Their daughter (someone else) is studying cooking in the kitchen.',
            vi: 'Con gái nhà họ đang học nấu ở nhà bếp.'
          },
          jp: '娘さんは 台所で 料理を 習っています。',
          ruby: [
            { base: '娘', reading: 'むすめ' },
            { base: '台', reading: 'だい' },
            { base: '所', reading: 'どころ' },
            { base: '料', reading: 'りょう' },
            { base: '理', reading: 'り' },
            { base: '習', reading: 'なら' }
          ]
        },
        {
          prompt: {
            en: 'I take part in events every month.',
            vi: 'Mỗi tháng tôi tham gia sự kiện.'
          },
          jp: '毎月 イベントに 参加しています。イベントに 参加します。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '月', reading: 'げつ' },
            { base: '参', reading: 'さん' },
            { base: '加', reading: 'か' },
            { base: '参', reading: 'さん' },
            { base: '加', reading: 'か' }
          ]
        }
      ]
    },
    {
      pattern: 'plain し、plain し、～',
      items: [
        {
          prompt: {
            en: 'He is serious and enthusiastic, and he also has experience.',
            vi: 'Anh ấy nghiêm túc, nhiệt tình, hơn nữa lại có kinh nghiệm.'
          },
          jp: '彼は まじめだし、熱心だし、それに 経験も あります。',
          ruby: [
            { base: '彼', reading: 'かれ' },
            { base: '熱', reading: 'ねっ' },
            { base: '心', reading: 'しん' },
            { base: '経', reading: 'けい' },
            { base: '験', reading: 'けん' }
          ]
        },
        {
          prompt: {
            en: 'The scenery is pretty and the color is just right.',
            vi: 'Phong cảnh đẹp, màu sắc lại vừa vặn.'
          },
          jp: '景色も きれいだし、色も ちょうどいいし。',
          ruby: [
            { base: '景', reading: 'け' },
            { base: '色', reading: 'しき' },
            { base: '色', reading: 'いろ' }
          ]
        },
        {
          prompt: {
            en: 'The taste is good and the price is cheap, so bread sells well.',
            vi: 'Vị ngon, giá rẻ, nên bánh mì bán chạy.'
          },
          jp: '味も いいし、値段も 安いし、パンが 売れます。',
          ruby: [
            { base: '味', reading: 'あじ' },
            { base: '値', reading: 'ね' },
            { base: '段', reading: 'だん' },
            { base: '安', reading: 'やす' },
            { base: '売', reading: 'う' }
          ]
        },
        {
          prompt: {
            en: 'The singer is popular and admirable.',
            vi: 'Ca sĩ được yêu thích và đáng khâm phục.'
          },
          jp: 'あの 歌手は 人気も あるし、偉いし。',
          ruby: [
            { base: '歌', reading: 'か' },
            { base: '手', reading: 'しゅ' },
            { base: '人', reading: 'にん' },
            { base: '気', reading: 'き' },
            { base: '偉', reading: 'えら' }
          ]
        },
        {
          prompt: {
            en: 'The salary is high and there is a bonus too.',
            vi: 'Lương cao, lại có thưởng nữa.'
          },
          jp: '給料も 高いし、ボーナスも あるし。',
          ruby: [
            { base: '給', reading: 'きゅう' },
            { base: '料', reading: 'りょう' },
            { base: '高', reading: 'たか' }
          ]
        },
        {
          prompt: {
            en: 'The gym is free and the date is Saturday.',
            vi: 'Nhà thi đấu miễn phí, ngày là thứ bảy.'
          },
          jp: '体育館は 無料だし、日にちは 土だし。',
          ruby: [
            { base: '体', reading: 'たい' },
            { base: '育', reading: 'いく' },
            { base: '館', reading: 'かん' },
            { base: '無', reading: 'む' },
            { base: '料', reading: 'りょう' },
            { base: '日', reading: 'ひ' },
            { base: '土', reading: 'ど' }
          ]
        }
      ]
    },
    {
      pattern: 'それで',
      items: [
        {
          prompt: {
            en: 'The program is interesting. So it is popular.',
            vi: 'Chương trình hay. Vì thế được ưa chuộng.'
          },
          jp: '番組が おもしろいです。それで 人気が あります。',
          ruby: [
            { base: '番', reading: 'ばん' },
            { base: '組', reading: 'ぐみ' },
            { base: '人', reading: 'にん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'I saw the notice. So I will invite my own daughter.',
            vi: 'Tôi xem thông báo. Vì thế tôi sẽ rủ con gái mình.'
          },
          jp: 'お知らせを 見ました。それで 娘を 誘います。',
          ruby: [
            { base: '知', reading: 'し' },
            { base: '見', reading: 'み' },
            { base: '娘', reading: 'むすめ' },
            { base: '誘', reading: 'さそ' }
          ]
        },
        {
          prompt: {
            en: 'Their son (someone else) is busy. So he cannot come for a while.',
            vi: 'Con trai nhà họ bận. Vì thế một thời gian không đến được.'
          },
          jp: '息子さんは 忙しいです。それで しばらく 来られません。',
          ruby: [
            { base: '息', reading: 'むす' },
            { base: '子', reading: 'こ' },
            { base: '忙', reading: 'いそ' },
            { base: '来', reading: 'こ' }
          ]
        },
        {
          prompt: {
            en: 'I want strength. So I do it myself.',
            vi: 'Tôi muốn sức mạnh. Vì thế tôi tự làm.'
          },
          jp: '力が ほしいです。それで 自分で やります。',
          ruby: [
            { base: '力', reading: 'ちから' },
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' }
          ]
        },
        {
          prompt: {
            en: 'The shape is just right. So I will buy this washing machine.',
            vi: 'Hình dạng vừa vặn. Vì thế tôi mua máy giặt này.'
          },
          jp: '形が ちょうどいいです。それで この 洗濯～機を 買います。',
          ruby: [
            { base: '形', reading: 'かたち' },
            { base: '洗', reading: 'せん' },
            { base: '濯', reading: 'たく' },
            { base: '機', reading: 'き' },
            { base: '買', reading: 'か' }
          ]
        }
      ]
    },
    {
      pattern: 'V-とき + particle',
      items: [
        {
          prompt: {
            en: 'When I study, I do not watch TV programs.',
            vi: 'Khi học, tôi không xem chương trình.'
          },
          jp: '勉強する ときは、番組を 見ません。',
          ruby: [
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' },
            { base: '番', reading: 'ばん' },
            { base: '組', reading: 'ぐみ' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: 'When I have time, I go to the beauty salon.',
            vi: 'Lúc rảnh, tôi đi hiệu làm đẹp.'
          },
          jp: '時間の ある とき、美容院へ 行きます。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' },
            { base: '美', reading: 'び' },
            { base: '容', reading: 'よう' },
            { base: '院', reading: 'いん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'When I am tired, I chew gum.',
            vi: 'Lúc mệt, tôi nhai kẹo cao su.'
          },
          jp: '疲れた とき、ガムを かみます。',
          ruby: [{ base: '疲', reading: 'つか' }]
        },
        {
          prompt: {
            en: 'When I cook, I use the kitchen.',
            vi: 'Khi nấu ăn, tôi dùng nhà bếp.'
          },
          jp: '料理する ときは 台所を 使います。',
          ruby: [
            { base: '料', reading: 'りょう' },
            { base: '理', reading: 'り' },
            { base: '台', reading: 'だい' },
            { base: '所', reading: 'どころ' },
            { base: '使', reading: 'つか' }
          ]
        },
        {
          prompt: {
            en: 'When there is an event, I invite friends.',
            vi: 'Khi có sự kiện, tôi rủ bạn.'
          },
          jp: 'イベントが ある とき、友達を 誘います。',
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '誘', reading: 'さそ' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'I have a small favor to ask.',
        vi: 'Tôi có chút việc muốn nhờ.'
      },
      jp: 'ちょっと お願いが あるんですが。',
      ruby: [{ base: '願', reading: 'ねが' }]
    },
    {
      prompt: { en: 'Actually, to tell the truth', vi: 'Thực ra' },
      jp: '実は',
      ruby: [{ base: '実', reading: 'じつ' }]
    },
    {
      prompt: { en: 'Hmm, well...', vi: 'Ừm...' },
      jp: 'うーん'
    }
  ]
};
