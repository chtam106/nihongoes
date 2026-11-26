import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson28SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-ながら V',
      items: [
        {
          prompt: {
            en: 'I take notes while listening to the story.',
            vi: 'Tôi vừa nghe chuyện vừa ghi memo.'
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
            en: 'Your son goes to university while working? That is admirable.',
            vi: 'Con trai anh vừa đi làm vừa học đại học à? Giỏi thật.'
          },
          jp: '息子さんは 働きながら 大学に 通っているんですか。偉いですね。',
          ruby: [
            { base: '息', reading: 'むす' },
            { base: '子', reading: 'こ' },
            { base: '働', reading: 'はたら' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '通', reading: 'かよ' },
            { base: '偉', reading: 'えら' }
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
            en: 'I choose the goods myself while checking the prices.',
            vi: 'Tôi tự chọn hàng trong lúc xem giá.'
          },
          jp: '値段を 見ながら 自分で 品物を 選びます。',
          ruby: [
            { base: '値', reading: 'ね' },
            { base: '段', reading: 'だん' },
            { base: '見', reading: 'み' },
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' },
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
            en: 'I want to become a novelist in the future, so I write fiction every day.',
            vi: 'Tương lai tôi muốn thành tiểu thuyết gia nên ngày nào cũng viết tiểu thuyết.'
          },
          jp: '将来 小説家に なりたいので、毎日 小説を 書いています。',
          ruby: [
            { base: '将', reading: 'しょう' },
            { base: '来', reading: 'らい' },
            { base: '小', reading: 'しょう' },
            { base: '説', reading: 'せつ' },
            { base: '家', reading: 'か' },
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
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
            en: 'I take part in a town event every month.',
            vi: 'Tháng nào tôi cũng tham gia sự kiện của khu phố.'
          },
          jp: '毎月 町の イベントに 参加しています。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '月', reading: 'つき' },
            { base: '町', reading: 'まち' },
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
            en: 'This room has a nice view and is just the right size, so I will take it.',
            vi: 'Phòng này vừa có cảnh đẹp vừa rộng vừa phải, tôi chọn phòng này.'
          },
          jp: 'この 部屋は 景色も きれいだし、広さも ちょうどいいし、ここに 決めます。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '景', reading: 'け' },
            { base: '色', reading: 'しき' },
            { base: '広', reading: 'ひろ' },
            { base: '決', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: "This shop's bread tastes good and is cheap, so it sells well.",
            vi: 'Bánh mì tiệm này vừa ngon vừa rẻ nên bán chạy.'
          },
          jp: 'この 店の パンは 味も いいし、値段も 安いし、よく 売れます。',
          ruby: [
            { base: '店', reading: 'みせ' },
            { base: '味', reading: 'あじ' },
            { base: '値', reading: 'ね' },
            { base: '段', reading: 'だん' },
            { base: '安', reading: 'やす' },
            { base: '売', reading: 'う' }
          ]
        },
        {
          prompt: {
            en: 'That singer sings well and is earnest, so she is popular with students.',
            vi: 'Ca sĩ đó vừa hát hay vừa nghiêm túc nên được sinh viên yêu thích.'
          },
          jp: 'あの 歌手は 歌も 上手だし、まじめだし、学生に 人気が あります。',
          ruby: [
            { base: '歌', reading: 'か' },
            { base: '手', reading: 'しゅ' },
            { base: '歌', reading: 'うた' },
            { base: '上', reading: 'じょう' },
            { base: '手', reading: 'ず' },
            { base: '学', reading: 'がく' },
            { base: '生', reading: 'せい' },
            { base: '人', reading: 'にん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'The salary is high and there is a bonus too, so I want to join this company.',
            vi: 'Lương cao, lại có thưởng nên tôi muốn vào công ty này.'
          },
          jp: '給料も 高いし、ボーナスも あるし、この 会社に 入りたいです。',
          ruby: [
            { base: '給', reading: 'きゅう' },
            { base: '料', reading: 'りょう' },
            { base: '高', reading: 'たか' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '入', reading: 'はい' }
          ]
        },
        {
          prompt: {
            en: 'The gym is free and it is on a Saturday, so why not go together?',
            vi: 'Nhà thi đấu miễn phí, ngày lại là thứ Bảy, mình cùng đi nhé?'
          },
          jp: '体育館は 無料だし、日にちも 土曜日だし、いっしょに 行きませんか。',
          ruby: [
            { base: '体', reading: 'たい' },
            { base: '育', reading: 'いく' },
            { base: '館', reading: 'かん' },
            { base: '無', reading: 'む' },
            { base: '料', reading: 'りょう' },
            { base: '日', reading: 'ひ' },
            { base: '土', reading: 'ど' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '行', reading: 'い' }
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
            en: 'I saw the event notice. So I invited my daughter.',
            vi: 'Tôi thấy thông báo sự kiện. Vì thế tôi đã rủ con gái đi.'
          },
          jp: 'イベントの お知らせを 見ました。それで、娘を 誘いました。',
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
            en: 'I exercise every day. That is why I have become stronger.',
            vi: 'Ngày nào tôi cũng tập thể dục. Vì thế tôi khỏe hơn rồi.'
          },
          jp: '毎日 運動しています。それで、力が 強く なりました。',
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '運', reading: 'うん' },
            { base: '動', reading: 'どう' },
            { base: '力', reading: 'ちから' },
            { base: '強', reading: 'つよ' }
          ]
        },
        {
          prompt: {
            en: 'This washing machine has a nice shape and color. So I bought it.',
            vi: 'Cái máy giặt này kiểu dáng lẫn màu sắc đều đẹp. Vì thế tôi đã mua nó.'
          },
          jp: 'この 洗濯機は 形も 色も きれいです。それで、これを 買いました。',
          ruby: [
            { base: '洗', reading: 'せん' },
            { base: '濯', reading: 'たく' },
            { base: '機', reading: 'き' },
            { base: '形', reading: 'かたち' },
            { base: '色', reading: 'いろ' },
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
