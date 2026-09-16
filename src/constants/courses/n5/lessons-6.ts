import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 6 (objects with を, place with で, invitations). */
export const n5Lesson6: Lesson = {
  id: 'lesson-6',
  number: 6,
  title: {
    en: 'Everyday actions',
    vi: 'Hành động hằng ngày'
  },
  focus: {
    en: 'Mark what you act on with を, say where with で, and invite with ませんか / ましょう.',
    vi: 'Dùng を cho tân ngữ, で cho địa điểm, và mời bằng ませんか / ましょう.'
  },
  vocab: [
    {
      kana: 'たべます',
      kanji: '食べます',
      romaji: 'tabemasu',
      meaning: { en: 'to eat', vi: 'ăn' },
      ruby: [{ base: '食', reading: 'た' }]
    },
    {
      kana: 'のみます',
      kanji: '飲みます',
      romaji: 'nomimasu',
      meaning: { en: 'to drink', vi: 'uống' },
      ruby: [{ base: '飲', reading: 'の' }]
    },
    {
      kana: 'すいます',
      kanji: '吸います',
      romaji: 'suimasu',
      meaning: { en: 'to smoke (a cigarette)', vi: 'hút (thuốc lá)' },
      ruby: [{ base: '吸', reading: 'す' }]
    },
    {
      kana: 'みます',
      kanji: '見ます',
      romaji: 'mimasu',
      meaning: { en: 'to look at, to watch', vi: 'nhìn, xem' },
      ruby: [{ base: '見', reading: 'み' }]
    },
    {
      kana: 'ききます',
      kanji: '聞きます',
      romaji: 'kikimasu',
      meaning: { en: 'to listen, to hear', vi: 'nghe' },
      ruby: [{ base: '聞', reading: 'き' }]
    },
    {
      kana: 'よみます',
      kanji: '読みます',
      romaji: 'yomimasu',
      meaning: { en: 'to read', vi: 'đọc' },
      ruby: [{ base: '読', reading: 'よ' }]
    },
    {
      kana: 'かきます',
      kanji: '書きます',
      romaji: 'kakimasu',
      meaning: { en: 'to write, to draw', vi: 'viết, vẽ' },
      ruby: [{ base: '書', reading: 'か' }]
    },
    {
      kana: 'かいます',
      kanji: '買います',
      romaji: 'kaimasu',
      meaning: { en: 'to buy', vi: 'mua' },
      ruby: [{ base: '買', reading: 'か' }]
    },
    {
      kana: 'とります',
      kanji: '撮ります',
      romaji: 'torimasu',
      meaning: { en: 'to take (a photo)', vi: 'chụp (ảnh)' },
      ruby: [{ base: '撮', reading: 'と' }]
    },
    {
      kana: 'します',
      romaji: 'shimasu',
      meaning: { en: 'to do, to play', vi: 'làm, chơi' }
    },
    {
      kana: 'あいます',
      kanji: '会います',
      romaji: 'aimasu',
      meaning: { en: 'to meet (a friend)', vi: 'gặp (bạn)' },
      ruby: [{ base: '会', reading: 'あ' }]
    },
    {
      kana: 'ごはん',
      romaji: 'gohan',
      meaning: { en: 'meal, cooked rice', vi: 'bữa ăn, cơm' }
    },
    {
      kana: 'あさごはん',
      kanji: '朝ごはん',
      romaji: 'asagohan',
      meaning: { en: 'breakfast', vi: 'bữa sáng, cơm sáng' },
      ruby: [{ base: '朝', reading: 'あさ' }]
    },
    {
      kana: 'ひるごはん',
      kanji: '昼ごはん',
      romaji: 'hirugohan',
      meaning: { en: 'lunch', vi: 'bữa trưa, cơm trưa' },
      ruby: [{ base: '昼', reading: 'ひる' }]
    },
    {
      kana: 'ばんごはん',
      kanji: '晩ごはん',
      romaji: 'bangohan',
      meaning: { en: 'dinner', vi: 'bữa tối, cơm tối' },
      ruby: [{ base: '晩', reading: 'ばん' }]
    },
    {
      kana: 'パン',
      romaji: 'pan',
      meaning: { en: 'bread', vi: 'bánh mì' }
    },
    {
      kana: 'たまご',
      kanji: '卵',
      romaji: 'tamago',
      meaning: { en: 'egg', vi: 'trứng' },
      ruby: [{ base: '卵', reading: 'たまご' }]
    },
    {
      kana: 'にく',
      kanji: '肉',
      romaji: 'niku',
      meaning: { en: 'meat', vi: 'thịt' },
      ruby: [{ base: '肉', reading: 'にく' }]
    },
    {
      kana: 'さかな',
      kanji: '魚',
      romaji: 'sakana',
      meaning: { en: 'fish', vi: 'cá' },
      ruby: [{ base: '魚', reading: 'さかな' }]
    },
    {
      kana: 'やさい',
      kanji: '野菜',
      romaji: 'yasai',
      meaning: { en: 'vegetable', vi: 'rau' },
      ruby: [
        { base: '野', reading: 'や' },
        { base: '菜', reading: 'さい' }
      ]
    },
    {
      kana: 'くだもの',
      kanji: '果物',
      romaji: 'kudamono',
      meaning: { en: 'fruit', vi: 'hoa quả, trái cây' },
      ruby: [
        { base: '果', reading: 'くだ' },
        { base: '物', reading: 'もの' }
      ]
    },
    {
      kana: 'みず',
      kanji: '水',
      romaji: 'mizu',
      meaning: { en: 'water', vi: 'nước' },
      ruby: [{ base: '水', reading: 'みず' }]
    },
    {
      kana: 'おちゃ',
      kanji: 'お茶',
      romaji: 'ocha',
      meaning: { en: 'tea, green tea', vi: 'trà, trà xanh' },
      ruby: [{ base: '茶', reading: 'ちゃ' }]
    },
    {
      kana: 'こうちゃ',
      kanji: '紅茶',
      romaji: 'kōcha',
      meaning: { en: 'black tea', vi: 'trà đen' },
      ruby: [
        { base: '紅', reading: 'こう' },
        { base: '茶', reading: 'ちゃ' }
      ]
    },
    {
      kana: 'ぎゅうにゅう',
      kanji: '牛乳',
      romaji: 'gyūnyū',
      meaning: { en: 'milk', vi: 'sữa bò, sữa' },
      ruby: [
        { base: '牛', reading: 'ぎゅう' },
        { base: '乳', reading: 'にゅう' }
      ]
    },
    {
      kana: 'ミルク',
      romaji: 'miruku',
      meaning: { en: 'milk', vi: 'sữa' }
    },
    {
      kana: 'ジュース',
      romaji: 'jūsu',
      meaning: { en: 'juice', vi: 'nước hoa quả' }
    },
    {
      kana: 'ビール',
      romaji: 'bīru',
      meaning: { en: 'beer', vi: 'bia' }
    },
    {
      kana: 'おさけ',
      kanji: 'お酒',
      romaji: 'osake',
      meaning: { en: 'alcohol, sake', vi: 'rượu, rượu gạo Nhật Bản' },
      ruby: [{ base: '酒', reading: 'さけ' }]
    },
    {
      kana: 'たばこ',
      romaji: 'tabako',
      meaning: { en: 'cigarette, tobacco', vi: 'thuốc lá' }
    },
    {
      kana: 'てがみ',
      kanji: '手紙',
      romaji: 'tegami',
      meaning: { en: 'letter', vi: 'thư' },
      ruby: [
        { base: '手', reading: 'て' },
        { base: '紙', reading: 'がみ' }
      ]
    },
    {
      kana: 'レポート',
      romaji: 'repōto',
      meaning: { en: 'report', vi: 'báo cáo' }
    },
    {
      kana: 'しゃしん',
      kanji: '写真',
      romaji: 'shashin',
      meaning: { en: 'photograph', vi: 'ảnh' },
      ruby: [
        { base: '写', reading: 'しゃ' },
        { base: '真', reading: 'しん' }
      ]
    },
    {
      kana: 'ビデオ',
      romaji: 'bideo',
      meaning: { en: 'video, video player', vi: 'băng video, đầu video' }
    },
    {
      kana: 'みせ',
      kanji: '店',
      romaji: 'mise',
      meaning: { en: 'shop, store', vi: 'cửa hàng, tiệm' },
      ruby: [{ base: '店', reading: 'みせ' }]
    },
    {
      kana: 'にわ',
      kanji: '庭',
      romaji: 'niwa',
      meaning: { en: 'garden', vi: 'vườn' },
      ruby: [{ base: '庭', reading: 'にわ' }]
    },
    {
      kana: 'しゅくだい',
      kanji: '宿題',
      romaji: 'shukudai',
      meaning: { en: 'homework', vi: 'bài tập về nhà' },
      ruby: [
        { base: '宿', reading: 'しゅく' },
        { base: '題', reading: 'だい' }
      ]
    },
    {
      kana: 'テニス',
      romaji: 'tenisu',
      meaning: { en: 'tennis', vi: 'quần vợt, ten-nít' }
    },
    {
      kana: 'サッカー',
      romaji: 'sakkā',
      meaning: { en: 'soccer, football', vi: 'bóng đá' }
    },
    {
      kana: 'おはなみ',
      kanji: 'お花見',
      romaji: 'ohanami',
      meaning: { en: 'cherry-blossom viewing', vi: 'ngắm hoa anh đào' },
      ruby: [
        { base: '花', reading: 'はな' },
        { base: '見', reading: 'み' }
      ]
    },
    {
      kana: 'なに',
      kanji: '何',
      romaji: 'nani',
      meaning: { en: 'what', vi: 'cái gì, gì' },
      ruby: [{ base: '何', reading: 'なに' }]
    },
    {
      kana: 'いっしょに',
      romaji: 'issho ni',
      meaning: { en: 'together', vi: 'cùng, cùng nhau' }
    },
    {
      kana: 'ちょっと',
      romaji: 'chotto',
      meaning: { en: 'a little, a moment', vi: 'một chút' }
    },
    {
      kana: 'いつも',
      romaji: 'itsumo',
      meaning: { en: 'always, usually', vi: 'luôn luôn, lúc nào cũng' }
    },
    {
      kana: 'ときどき',
      kanji: '時々',
      romaji: 'tokidoki',
      meaning: { en: 'sometimes', vi: 'thỉnh thoảng' },
      ruby: [
        { base: '時', reading: 'とき' },
        { base: '々', reading: 'どき' }
      ]
    },
    {
      kana: 'それから',
      romaji: 'sorekara',
      meaning: { en: 'after that, and then', vi: 'sau đó, tiếp theo' }
    },
    {
      kana: 'ええ',
      romaji: 'ee',
      meaning: { en: 'yes (informal はい)', vi: 'vâng, được (thân mật hơn はい)' }
    }
  ],
  phrases: [
    {
      kana: 'いいですね。',
      romaji: 'ii desu ne.',
      meaning: {
        en: 'Sounds good. / That would be nice.',
        vi: 'Được đấy nhỉ. / Hay quá.'
      }
    },
    {
      kana: 'わかりました。',
      romaji: 'wakarimashita.',
      meaning: { en: 'I understand. / All right.', vi: 'Tôi hiểu rồi. / Vâng ạ.' }
    },
    {
      kana: 'なんですか。',
      kanji: '何ですか。',
      romaji: 'nan desu ka.',
      meaning: {
        en: 'Yes? / What is it? (answering someone who called you)',
        vi: 'Có gì đấy ạ? / Cái gì vậy? (đáp lại khi được gọi)'
      },
      ruby: [{ base: '何', reading: 'なん' }]
    },
    {
      kana: 'じゃ、また あした。',
      romaji: 'ja, mata ashita.',
      meaning: { en: 'See you tomorrow, then.', vi: 'Thế thì hẹn gặp lại ngày mai.' }
    }
  ],
  conversation: [
    {
      id: 'conv-lesson6-hanami',
      title: { en: 'Inviting to hanami', vi: 'Mời đi ngắm hoa' },
      speakers: [
        { id: 'yuki', name: 'ユキ' },
        { id: 'tom', name: 'トム' }
      ],
      lines: [
        {
          speakerId: 'yuki',
          jp: 'トムさん、あしたは 何を しますか。',
          romaji: 'Tomu-san, ashita wa nani o shimasu ka.',
          meaning: {
            en: 'Tom, what are you doing tomorrow?',
            vi: 'Tom, ngày mai bạn làm gì?'
          },
          ruby: [{ base: '何', reading: 'なに' }]
        },
        {
          speakerId: 'tom',
          jp: '何も しません。',
          romaji: 'Nani mo shimasen.',
          meaning: { en: 'Nothing at all.', vi: 'Tôi không làm gì cả.' },
          ruby: [{ base: '何', reading: 'なに' }]
        },
        {
          speakerId: 'yuki',
          jp: 'じゃ、いっしょに お花見を しませんか。',
          romaji: 'Ja, issho ni ohanami o shimasen ka.',
          meaning: {
            en: 'Then, would you like to go cherry-blossom viewing with me?',
            vi: 'Thế thì cùng đi ngắm hoa anh đào với tôi không?'
          },
          ruby: [
            { base: '花', reading: 'はな' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          speakerId: 'tom',
          jp: 'いいですね。どこで しますか。',
          romaji: 'Ii desu ne. Doko de shimasu ka.',
          meaning: { en: 'Sounds good. Where shall we go?', vi: 'Hay quá nhỉ. Đi ở đâu?' }
        },
        {
          speakerId: 'yuki',
          jp: '大阪城で します。10時に 駅で 会いましょう。',
          romaji: 'Ōsakajō de shimasu. Jū-ji ni eki de aimashō.',
          meaning: {
            en: 'At Osaka Castle. Let us meet at the station at 10.',
            vi: 'Ở Osaka Castle. 10 giờ gặp nhau ở ga nhé.'
          },
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '城', reading: 'じょう' },
            { base: '時', reading: 'じ' },
            { base: '駅', reading: 'えき' },
            { base: '会', reading: 'あ' }
          ]
        },
        {
          speakerId: 'tom',
          jp: 'わかりました。じゃ、また あした。',
          romaji: 'Wakarimashita. Ja, mata ashita.',
          meaning: {
            en: 'Got it. See you tomorrow, then.',
            vi: 'Tôi hiểu rồi. Thế thì hẹn gặp lại ngày mai.'
          }
        }
      ]
    },
    {
      id: 'conv-lesson6-at-the-shop',
      title: { en: 'At the shop', vi: 'Ở cửa hàng' },
      speakers: [
        { id: 'lin', name: 'リン' },
        { id: 'ken', name: 'ケン' }
      ],
      lines: [
        {
          speakerId: 'lin',
          jp: 'この 店で 何を 買いますか。',
          romaji: 'Kono mise de nani o kaimasu ka.',
          meaning: {
            en: 'What are you going to buy at this shop?',
            vi: 'Bạn mua gì ở cửa hàng này?'
          },
          ruby: [
            { base: '店', reading: 'みせ' },
            { base: '何', reading: 'なに' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          speakerId: 'ken',
          jp: '卵と 野菜を 買います。それから パンも 買います。',
          romaji: 'Tamago to yasai o kaimasu. Sorekara pan mo kaimasu.',
          meaning: {
            en: 'Eggs and vegetables. After that, bread too.',
            vi: 'Tôi mua trứng và rau. Sau đó mua cả bánh mì.'
          },
          ruby: [
            { base: '卵', reading: 'たまご' },
            { base: '野', reading: 'や' },
            { base: '菜', reading: 'さい' },
            { base: '買', reading: 'か' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          speakerId: 'lin',
          jp: '私は お茶を 買います。',
          romaji: 'Watashi wa ocha o kaimasu.',
          meaning: { en: 'I will buy tea.', vi: 'Tôi mua trà.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '茶', reading: 'ちゃ' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          speakerId: 'ken',
          jp: 'いっしょに 昼ごはんを 食べませんか。',
          romaji: 'Issho ni hirugohan o tabemasen ka.',
          meaning: {
            en: 'Would you like to have lunch together?',
            vi: 'Cùng ăn cơm trưa với tôi không?'
          },
          ruby: [
            { base: '昼', reading: 'ひる' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          speakerId: 'lin',
          jp: 'ええ、食べましょう。',
          romaji: 'Ee, tabemashō.',
          meaning: { en: 'Yes, let us eat.', vi: 'Vâng, cùng ăn nhé.' },
          ruby: [{ base: '食', reading: 'た' }]
        }
      ]
    },
    {
      id: 'conv-lesson6-weekend-report',
      title: { en: 'Talking about Sunday', vi: 'Kể về chủ nhật' },
      speakers: [
        { id: 'mai', name: 'マイ' },
        { id: 'alex', name: 'アレックス' }
      ],
      lines: [
        {
          speakerId: 'mai',
          jp: '日曜日 何を しましたか。',
          romaji: 'Nichiyōbi nani o shimashita ka.',
          meaning: { en: 'What did you do on Sunday?', vi: 'Chủ nhật bạn đã làm gì?' },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '何', reading: 'なに' }
          ]
        },
        {
          speakerId: 'alex',
          jp: '庭で 写真を 撮りました。',
          romaji: 'Niwa de shashin o torimashita.',
          meaning: { en: 'I took photos in the garden.', vi: 'Tôi đã chụp ảnh ở vườn.' },
          ruby: [
            { base: '庭', reading: 'にわ' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '撮', reading: 'と' }
          ]
        },
        {
          speakerId: 'mai',
          jp: '写真ですか。いいですね。',
          romaji: 'Shashin desu ka. Ii desu ne.',
          meaning: { en: 'Photos? How nice.', vi: 'Ảnh à? Hay quá nhỉ.' },
          ruby: [
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' }
          ]
        },
        {
          speakerId: 'alex',
          jp: '時々 庭で 撮ります。',
          romaji: 'Tokidoki niwa de torimasu.',
          meaning: {
            en: 'I sometimes take photos in the garden.',
            vi: 'Thỉnh thoảng tôi chụp ảnh ở vườn.'
          },
          ruby: [
            { base: '時', reading: 'とき' },
            { base: '々', reading: 'どき' },
            { base: '庭', reading: 'にわ' },
            { base: '撮', reading: 'と' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N を V',
      highlights: ['を'],
      title: { en: 'Object with を', vi: 'Tân ngữ với を' },
      explanation: {
        en: 'を marks the direct object of a transitive verb - the thing the action affects. It is written を but pronounced "o", and the character を is used only for this particle.',
        vi: 'を chỉ tân ngữ trực tiếp của ngoại động từ - đối tượng mà hành động tác động tới. Viết là を nhưng đọc là "o", và chữ を chỉ dùng cho trợ từ này.'
      },
      examples: [
        {
          jp: 'ジュースを 飲みます。',
          romaji: 'Jūsu o nomimasu.',
          meaning: { en: 'I drink juice.', vi: 'Tôi uống nước hoa quả.' },
          ruby: [{ base: '飲', reading: 'の' }]
        },
        {
          jp: 'ごはんを 食べます。',
          romaji: 'Gohan o tabemasu.',
          meaning: { en: 'I eat a meal.', vi: 'Tôi ăn cơm.' },
          ruby: [{ base: '食', reading: 'た' }]
        },
        {
          jp: '本を 読みます。',
          romaji: 'Hon o yomimasu.',
          meaning: { en: 'I read a book.', vi: 'Tôi đọc sách.' },
          ruby: [
            { base: '本', reading: 'ほん' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          jp: '手紙を 書きます。',
          romaji: 'Tegami o kakimasu.',
          meaning: { en: 'I write a letter.', vi: 'Tôi viết thư.' },
          ruby: [
            { base: '手', reading: 'て' },
            { base: '紙', reading: 'がみ' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          jp: '写真を 撮ります。',
          romaji: 'Shashin o torimasu.',
          meaning: { en: 'I take a photo.', vi: 'Tôi chụp ảnh.' },
          ruby: [
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '撮', reading: 'と' }
          ]
        }
      ]
    },
    {
      pattern: 'N を します',
      highlights: ['を', 'します'],
      title: { en: 'Doing an activity (します)', vi: 'Làm một hoạt động (します)' },
      explanation: {
        en: 'します takes a wide range of nouns as its object: sports and games, gatherings and events, and everyday tasks. The sentence then means carrying out whatever the noun names.',
        vi: 'します nhận rất nhiều danh từ làm tân ngữ: môn thể thao và game, các buổi tụ họp và sự kiện, cùng những việc thường ngày. Câu này diễn tả việc thực hiện đúng nội dung của danh từ đó.'
      },
      examples: [
        {
          jp: 'サッカーを します。',
          romaji: 'Sakkā o shimasu.',
          meaning: { en: 'I play soccer.', vi: 'Tôi chơi bóng đá.' }
        },
        {
          jp: 'テニスを します。',
          romaji: 'Tenisu o shimasu.',
          meaning: { en: 'I play tennis.', vi: 'Tôi chơi quần vợt.' }
        },
        {
          jp: '宿題を します。',
          romaji: 'Shukudai o shimasu.',
          meaning: { en: 'I do my homework.', vi: 'Tôi làm bài tập về nhà.' },
          ruby: [
            { base: '宿', reading: 'しゅく' },
            { base: '題', reading: 'だい' }
          ]
        },
        {
          jp: 'お花見を します。',
          romaji: 'Ohanami o shimasu.',
          meaning: {
            en: 'We go cherry-blossom viewing.',
            vi: 'Chúng tôi đi ngắm hoa anh đào.'
          },
          ruby: [
            { base: '花', reading: 'はな' },
            { base: '見', reading: 'み' }
          ]
        }
      ]
    },
    {
      pattern: '何 を しますか',
      patternRuby: [{ base: '何', reading: 'なに' }],
      highlights: ['何', 'を', ['します', 'しました'], 'か'],
      title: { en: 'Asking what someone does', vi: 'Hỏi ai đó làm gì' },
      explanation: {
        en: 'Use 何を to ask what action someone performs. The tense sits on します: しますか for the future or habit, しましたか for the past.',
        vi: 'Dùng 何を để hỏi ai đó làm hành động gì. Thời của câu nằm ở します: しますか cho tương lai hoặc thói quen, しましたか cho quá khứ.'
      },
      explanationRuby: [{ base: '何', reading: 'なに' }],
      examples: [
        {
          jp: '月曜日 何を しますか。',
          romaji: 'Getsuyōbi nani o shimasu ka.',
          meaning: { en: 'What will you do on Monday?', vi: 'Thứ hai bạn làm gì?' },
          ruby: [
            { base: '月', reading: 'げつ' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '何', reading: 'なに' }
          ]
        },
        {
          jp: 'きのう 何を しましたか。',
          romaji: 'Kinō nani o shimashita ka.',
          meaning: { en: 'What did you do yesterday?', vi: 'Hôm qua bạn đã làm gì?' },
          ruby: [{ base: '何', reading: 'なに' }]
        }
      ],
      answers: {
        explanation: {
          en: 'Answer by naming the action, matching the tense of the question. To deny everything, use 何も + a negative verb.',
          vi: 'Trả lời bằng cách nêu hành động, giữ đúng thời của câu hỏi. Muốn phủ định toàn bộ thì dùng 何も + động từ phủ định.'
        },
        explanationRuby: [{ base: '何', reading: 'なに' }],
        highlights: ['を', 'も', ['しました', 'しません']],
        examples: [
          {
            jp: 'きのう 何を しましたか。',
            romaji: 'Kinō nani o shimashita ka.',
            meaning: { en: 'What did you do yesterday?', vi: 'Hôm qua bạn đã làm gì?' },
            dialogueGroup: 'what-did',
            ruby: [{ base: '何', reading: 'なに' }]
          },
          {
            jp: 'サッカーを しました。',
            romaji: 'Sakkā o shimashita.',
            meaning: { en: 'I played soccer.', vi: 'Tôi đã chơi bóng đá.' },
            dialogueGroup: 'what-did'
          },
          {
            jp: '何も しません。',
            romaji: 'Nani mo shimasen.',
            meaning: { en: 'I do not do anything.', vi: 'Tôi không làm gì cả.' },
            ruby: [{ base: '何', reading: 'なに' }]
          }
        ]
      }
    },
    {
      pattern: 'なん / なに',
      highlights: ['何', 'です', 'か', 'の', 'で', 'を'],
      title: { en: 'When to read なん and なに', vi: 'Khi nào đọc なん, khi nào なに' },
      explanation: {
        en: 'なん and なに are the same word. Read it なん before a word starting with a た / だ / な sound, and before a counter. Read it なに elsewhere. なんで asks the means of transport; use なにで when you need to rule out the "why" reading.',
        vi: 'なん và なに là cùng một từ. Đọc なん khi đứng trước từ bắt đầu bằng âm hàng た / だ / な và khi đứng trước lượng từ. Các trường hợp khác đọc なに. なんで hỏi phương tiện; khi cần loại bỏ nghĩa "tại sao" thì dùng なにで.'
      },
      examples: [
        {
          jp: 'それは 何ですか。',
          romaji: 'Sore wa nan desu ka.',
          meaning: { en: 'What is that?', vi: 'Đó là cái gì?' },
          ruby: [{ base: '何', reading: 'なん' }]
        },
        {
          jp: '何の 本ですか。',
          romaji: 'Nan no hon desu ka.',
          meaning: { en: 'What kind of book is it?', vi: 'Đó là sách gì?' },
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '本', reading: 'ほん' }
          ]
        },
        {
          jp: '何で 東京へ 行きますか。',
          romaji: 'Nan de Tōkyō e ikimasu ka.',
          meaning: { en: 'How do you go to Tokyo?', vi: 'Bạn đi Tokyo bằng gì?' },
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '何を 買いますか。',
          romaji: 'Nani o kaimasu ka.',
          meaning: { en: 'What will you buy?', vi: 'Bạn mua gì?' },
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          jp: '何を 食べますか。',
          romaji: 'Nani o tabemasu ka.',
          meaning: { en: 'What will you eat?', vi: 'Bạn ăn gì?' },
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '食', reading: 'た' }
          ]
        }
      ]
    },
    {
      pattern: 'N で V',
      highlights: ['で'],
      title: { en: 'Place of the action (で)', vi: 'Nơi diễn ra hành động (で)' },
      explanation: {
        en: 'で after a place noun marks where the action happens. This is a different use from lesson 5, where で marked the means of transport.',
        vi: 'で sau danh từ chỉ địa điểm cho biết hành động diễn ra ở đâu. Đây là cách dùng khác với bài 5, nơi で chỉ phương tiện di chuyển.'
      },
      examples: [
        {
          jp: '駅で 新聞を 買います。',
          romaji: 'Eki de shinbun o kaimasu.',
          meaning: {
            en: 'I buy a newspaper at the station.',
            vi: 'Tôi mua báo ở ga.'
          },
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '新', reading: 'しん' },
            { base: '聞', reading: 'ぶん' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          jp: '庭で 写真を 撮ります。',
          romaji: 'Niwa de shashin o torimasu.',
          meaning: { en: 'I take photos in the garden.', vi: 'Tôi chụp ảnh ở vườn.' },
          ruby: [
            { base: '庭', reading: 'にわ' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '撮', reading: 'と' }
          ]
        },
        {
          jp: '学校で 昼ごはんを 食べます。',
          romaji: 'Gakkō de hirugohan o tabemasu.',
          meaning: { en: 'I eat lunch at school.', vi: 'Tôi ăn cơm trưa ở trường.' },
          ruby: [
            { base: '学', reading: 'がっ' },
            { base: '校', reading: 'こう' },
            { base: '昼', reading: 'ひる' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          jp: 'うちで ビデオを 見ます。',
          romaji: 'Uchi de bideo o mimasu.',
          meaning: { en: 'I watch videos at home.', vi: 'Tôi xem video ở nhà.' },
          ruby: [{ base: '見', reading: 'み' }]
        }
      ],
      answers: {
        explanation: {
          en: 'Ask the place of an action with どこで. Answer with the place + で.',
          vi: 'Hỏi nơi diễn ra hành động bằng どこで. Trả lời bằng địa điểm + で.'
        },
        highlights: ['どこ', 'で', 'か'],
        examples: [
          {
            jp: 'どこで 写真を 撮りましたか。',
            romaji: 'Doko de shashin o torimashita ka.',
            meaning: { en: 'Where did you take the photos?', vi: 'Bạn đã chụp ảnh ở đâu?' },
            dialogueGroup: 'where-do',
            ruby: [
              { base: '写', reading: 'しゃ' },
              { base: '真', reading: 'しん' },
              { base: '撮', reading: 'と' }
            ]
          },
          {
            jp: '庭で 撮りました。',
            romaji: 'Niwa de torimashita.',
            meaning: { en: 'In the garden.', vi: 'Tôi chụp ở vườn.' },
            dialogueGroup: 'where-do',
            ruby: [
              { base: '庭', reading: 'にわ' },
              { base: '撮', reading: 'と' }
            ]
          }
        ]
      }
    },
    {
      pattern: 'V ませんか',
      highlights: ['ません', 'か'],
      title: { en: 'Inviting with ませんか', vi: 'Mời bằng ませんか' },
      explanation: {
        en: 'A negative question with ませんか invites the listener or suggests doing something. It sounds considerate because the negative form leaves the decision to them.',
        vi: 'Câu hỏi phủ định với ませんか dùng để mời hoặc đề nghị người nghe làm việc gì. Cách nói này nghe lịch sự vì dạng phủ định để người nghe tự quyết định.'
      },
      examples: [
        {
          jp: 'いっしょに 京都へ 行きませんか。',
          romaji: 'Issho ni Kyōto e ikimasen ka.',
          meaning: {
            en: 'Would you like to go to Kyoto with me?',
            vi: 'Bạn đi Kyoto cùng tôi không?'
          },
          ruby: [
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: 'いっしょに 昼ごはんを 食べませんか。',
          romaji: 'Issho ni hirugohan o tabemasen ka.',
          meaning: {
            en: 'Would you like to have lunch together?',
            vi: 'Cùng ăn cơm trưa nhé?'
          },
          ruby: [
            { base: '昼', reading: 'ひる' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          jp: 'いっしょに お花見を しませんか。',
          romaji: 'Issho ni ohanami o shimasen ka.',
          meaning: {
            en: 'Would you like to go cherry-blossom viewing together?',
            vi: 'Cùng đi ngắm hoa anh đào nhé?'
          },
          ruby: [
            { base: '花', reading: 'はな' },
            { base: '見', reading: 'み' }
          ]
        }
      ],
      answers: {
        explanation: {
          en: 'Accept with ええ plus いいですね or the ましょう form. To decline gently, trail off with すみません、ちょっと... instead of saying no outright.',
          vi: 'Nhận lời bằng ええ kèm いいですね hoặc dạng ましょう. Muốn từ chối nhẹ nhàng thì bỏ lửng すみません、ちょっと... thay vì nói không thẳng.'
        },
        highlights: ['ええ', 'ましょう', 'ちょっと'],
        examples: [
          {
            jp: 'いっしょに テニスを しませんか。',
            romaji: 'Issho ni tenisu o shimasen ka.',
            meaning: { en: 'Shall we play tennis together?', vi: 'Cùng chơi quần vợt nhé?' },
            dialogueGroup: 'invite-tennis'
          },
          {
            jp: 'ええ、しましょう。',
            romaji: 'Ee, shimashō.',
            meaning: { en: 'Yes, let us do that.', vi: 'Vâng, chơi nhé.' },
            dialogueGroup: 'invite-tennis'
          },
          {
            jp: 'すみません、ちょっと…',
            romaji: 'Sumimasen, chotto...',
            meaning: {
              en: 'Sorry, I am afraid I cannot. (soft refusal)',
              vi: 'Xin lỗi, tôi hơi... (từ chối nhẹ)'
            }
          }
        ]
      }
    },
    {
      pattern: 'V ましょう',
      highlights: ['ましょう'],
      title: { en: 'Proposing with ましょう', vi: 'Đề xuất bằng ましょう' },
      explanation: {
        en: "ましょう actively proposes doing something together, and is also how you accept an invitation. Compared with ませんか it pushes the plan more, so ませんか shows more respect for the listener's wishes.",
        vi: 'ましょう chủ động đề xuất cùng làm việc gì, và cũng là cách nhận lời mời. So với ませんか thì nó thúc đẩy kế hoạch hơn, nên ませんか tôn trọng ý muốn của người nghe hơn.'
      },
      examples: [
        {
          jp: 'ちょっと 休みましょう。',
          romaji: 'Chotto yasumimashō.',
          meaning: { en: 'Let us take a short break.', vi: 'Chúng ta nghỉ một chút nhé.' },
          ruby: [{ base: '休', reading: 'やす' }]
        },
        {
          jp: 'いっしょに ごはんを 食べましょう。',
          romaji: 'Issho ni gohan o tabemashō.',
          meaning: { en: 'Let us eat together.', vi: 'Chúng ta cùng ăn cơm nhé.' },
          ruby: [{ base: '食', reading: 'た' }]
        },
        {
          jp: '10時に 駅で 会いましょう。',
          romaji: 'Jū-ji ni eki de aimashō.',
          meaning: {
            en: 'Let us meet at the station at 10.',
            vi: '10 giờ gặp nhau ở ga nhé.'
          },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '駅', reading: 'えき' },
            { base: '会', reading: 'あ' }
          ]
        }
      ]
    },
    {
      pattern: 'N ですか',
      highlights: ['です', 'か'],
      title: { en: 'Echoing news with か', vi: 'Nhắc lại thông tin mới với か' },
      explanation: {
        en: 'Sentence-final か also shows that you have just taken in something you did not know. You repeat the new information and add か, the same idea as そうですか in lesson 2.',
        vi: 'か ở cuối câu còn cho thấy người nói vừa tiếp nhận điều mình chưa biết. Bạn nhắc lại thông tin mới rồi thêm か, cùng ý với そうですか ở bài 2.'
      },
      examples: [
        {
          jp: '日曜日 京都へ 行きました。',
          romaji: 'Nichiyōbi Kyōto e ikimashita.',
          meaning: { en: 'I went to Kyoto on Sunday.', vi: 'Chủ nhật tôi đã đi Kyoto.' },
          dialogueGroup: 'echo-kyoto',
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
          jp: '京都ですか。いいですね。',
          romaji: 'Kyōto desu ka. Ii desu ne.',
          meaning: { en: 'Kyoto? How nice.', vi: 'Kyoto à? Hay quá nhỉ.' },
          dialogueGroup: 'echo-kyoto',
          ruby: [
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson6-meals',
      title: { en: 'My meals', vi: 'Bữa ăn của tôi' },
      lines: [
        {
          jp: '私は 毎日 朝ごはんを 食べます。',
          romaji: 'Watashi wa mainichi asagohan o tabemasu.',
          meaning: { en: 'I eat breakfast every day.', vi: 'Hằng ngày tôi ăn bữa sáng.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '朝', reading: 'あさ' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          jp: 'パンと 卵を 食べます。それから 牛乳を 飲みます。',
          romaji: 'Pan to tamago o tabemasu. Sorekara gyūnyū o nomimasu.',
          meaning: {
            en: 'I eat bread and eggs. After that I drink milk.',
            vi: 'Tôi ăn bánh mì và trứng. Sau đó tôi uống sữa.'
          },
          ruby: [
            { base: '卵', reading: 'たまご' },
            { base: '食', reading: 'た' },
            { base: '牛', reading: 'ぎゅう' },
            { base: '乳', reading: 'にゅう' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          jp: '昼ごはんは 会社で 食べます。',
          romaji: 'Hirugohan wa kaisha de tabemasu.',
          meaning: { en: 'I eat lunch at the office.', vi: 'Bữa trưa tôi ăn ở công ty.' },
          ruby: [
            { base: '昼', reading: 'ひる' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          jp: '晩ごはんは うちで 食べます。いつも 魚を 食べます。',
          romaji: 'Bangohan wa uchi de tabemasu. Itsumo sakana o tabemasu.',
          meaning: {
            en: 'I eat dinner at home. I always eat fish.',
            vi: 'Bữa tối tôi ăn ở nhà. Tôi luôn ăn cá.'
          },
          ruby: [
            { base: '晩', reading: 'ばん' },
            { base: '食', reading: 'た' },
            { base: '魚', reading: 'さかな' },
            { base: '食', reading: 'た' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'What does the speaker drink at breakfast?',
            vi: 'Bữa sáng người nói uống gì?'
          },
          choices: [
            { id: 'a', label: { en: 'Milk', vi: 'Sữa' } },
            { id: 'b', label: { en: 'Black tea', vi: 'Trà đen' } },
            { id: 'c', label: { en: 'Juice', vi: 'Nước hoa quả' } },
            { id: 'd', label: { en: 'Water', vi: 'Nước' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'Where does the speaker eat lunch?', vi: 'Người nói ăn trưa ở đâu?' },
          choices: [
            { id: 'a', label: { en: 'At home', vi: 'Ở nhà' } },
            { id: 'b', label: { en: 'At the office', vi: 'Ở công ty' } },
            { id: 'c', label: { en: 'At a shop', vi: 'Ở cửa hàng' } },
            { id: 'd', label: { en: 'At school', vi: 'Ở trường' } }
          ],
          correctId: 'b'
        },
        {
          id: 'q3',
          question: {
            en: 'What does the speaker always eat for dinner?',
            vi: 'Bữa tối luôn ăn gì?'
          },
          choices: [
            { id: 'a', label: { en: 'Meat', vi: 'Thịt' } },
            { id: 'b', label: { en: 'Bread', vi: 'Bánh mì' } },
            { id: 'c', label: { en: 'Fish', vi: 'Cá' } },
            { id: 'd', label: { en: 'Vegetables', vi: 'Rau' } }
          ],
          correctId: 'c'
        }
      ]
    },
    {
      id: 'reading-lesson6-saturday',
      title: { en: 'Saturday', vi: 'Thứ bảy' },
      lines: [
        {
          jp: '土曜日 友達と テニスを しました。',
          romaji: 'Doyōbi tomodachi to tenisu o shimashita.',
          meaning: {
            en: 'On Saturday I played tennis with a friend.',
            vi: 'Thứ bảy tôi đã chơi quần vợt với bạn.'
          },
          ruby: [
            { base: '土', reading: 'ど' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' }
          ]
        },
        {
          jp: 'それから 店で ジュースを 買いました。',
          romaji: 'Sorekara mise de jūsu o kaimashita.',
          meaning: {
            en: 'After that we bought juice at a shop.',
            vi: 'Sau đó chúng tôi mua nước hoa quả ở cửa hàng.'
          },
          ruby: [
            { base: '店', reading: 'みせ' },
            { base: '買', reading: 'か' }
          ]
        },
        {
          jp: 'うちで ビデオを 見ました。',
          romaji: 'Uchi de bideo o mimashita.',
          meaning: { en: 'I watched a video at home.', vi: 'Tôi đã xem video ở nhà.' },
          ruby: [{ base: '見', reading: 'み' }]
        },
        {
          jp: 'きのうは 何も しませんでした。',
          romaji: 'Kinō wa nani mo shimasen deshita.',
          meaning: {
            en: 'Yesterday I did not do anything.',
            vi: 'Hôm qua tôi không làm gì cả.'
          },
          ruby: [{ base: '何', reading: 'なに' }]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'Who did the speaker play tennis with?',
            vi: 'Người nói chơi quần vợt với ai?'
          },
          choices: [
            { id: 'a', label: { en: 'A friend', vi: 'Một người bạn' } },
            { id: 'b', label: { en: 'Family', vi: 'Gia đình' } },
            { id: 'c', label: { en: 'Alone', vi: 'Một mình' } },
            { id: 'd', label: { en: 'A teacher', vi: 'Giáo viên' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What did they buy at the shop?', vi: 'Họ mua gì ở cửa hàng?' },
          choices: [
            { id: 'a', label: { en: 'Bread', vi: 'Bánh mì' } },
            { id: 'b', label: { en: 'Juice', vi: 'Nước hoa quả' } },
            { id: 'c', label: { en: 'A newspaper', vi: 'Báo' } },
            { id: 'd', label: { en: 'Eggs', vi: 'Trứng' } }
          ],
          correctId: 'b'
        },
        {
          id: 'q3',
          question: { en: 'What did the speaker do yesterday?', vi: 'Hôm qua người nói làm gì?' },
          choices: [
            { id: 'a', label: { en: 'Played tennis', vi: 'Chơi quần vợt' } },
            { id: 'b', label: { en: 'Watched a video', vi: 'Xem video' } },
            { id: 'c', label: { en: 'Nothing', vi: 'Không làm gì cả' } },
            { id: 'd', label: { en: 'Went shopping', vi: 'Đi mua sắm' } }
          ],
          correctId: 'c'
        }
      ]
    },
    {
      id: 'reading-lesson6-invitation',
      title: { en: 'An invitation', vi: 'Một lời mời' },
      lines: [
        {
          jp: 'あした いっしょに お花見を しませんか。',
          romaji: 'Ashita issho ni ohanami o shimasen ka.',
          meaning: {
            en: 'Would you like to go cherry-blossom viewing tomorrow?',
            vi: 'Ngày mai cùng đi ngắm hoa anh đào nhé?'
          },
          ruby: [
            { base: '花', reading: 'はな' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          jp: '9時に 駅で 会いましょう。',
          romaji: 'Ku-ji ni eki de aimashō.',
          meaning: {
            en: 'Let us meet at the station at 9.',
            vi: '9 giờ gặp nhau ở ga nhé.'
          },
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '駅', reading: 'えき' },
            { base: '会', reading: 'あ' }
          ]
        },
        {
          jp: '庭で 写真を 撮りましょう。',
          romaji: 'Niwa de shashin o torimashō.',
          meaning: {
            en: 'Let us take photos in the garden.',
            vi: 'Chúng ta chụp ảnh ở vườn nhé.'
          },
          ruby: [
            { base: '庭', reading: 'にわ' },
            { base: '写', reading: 'しゃ' },
            { base: '真', reading: 'しん' },
            { base: '撮', reading: 'と' }
          ]
        },
        {
          jp: '昼ごはんは 店で 食べませんか。',
          romaji: 'Hirugohan wa mise de tabemasen ka.',
          meaning: {
            en: 'Shall we have lunch at a shop?',
            vi: 'Bữa trưa ăn ở cửa hàng nhé?'
          },
          ruby: [
            { base: '昼', reading: 'ひる' },
            { base: '店', reading: 'みせ' },
            { base: '食', reading: 'た' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'Where will they meet?', vi: 'Họ gặp nhau ở đâu?' },
          choices: [
            { id: 'a', label: { en: 'At the station', vi: 'Ở nhà ga' } },
            { id: 'b', label: { en: 'In the garden', vi: 'Ở vườn' } },
            { id: 'c', label: { en: 'At a shop', vi: 'Ở cửa hàng' } },
            { id: 'd', label: { en: 'At home', vi: 'Ở nhà' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What time will they meet?', vi: 'Họ gặp nhau lúc mấy giờ?' },
          choices: [
            { id: 'a', label: { en: "7 o'clock", vi: '7 giờ' } },
            { id: 'b', label: { en: "9 o'clock", vi: '9 giờ' } },
            { id: 'c', label: { en: "10 o'clock", vi: '10 giờ' } },
            { id: 'd', label: { en: "12 o'clock", vi: '12 giờ' } }
          ],
          correctId: 'b'
        },
        {
          id: 'q3',
          question: { en: 'What do they plan to do in the garden?', vi: 'Ở vườn họ định làm gì?' },
          choices: [
            { id: 'a', label: { en: 'Eat lunch', vi: 'Ăn trưa' } },
            { id: 'b', label: { en: 'Take photos', vi: 'Chụp ảnh' } },
            { id: 'c', label: { en: 'Play tennis', vi: 'Chơi quần vợt' } },
            { id: 'd', label: { en: 'Read a book', vi: 'Đọc sách' } }
          ],
          correctId: 'b'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Vegetables', vi: 'Rau củ' },
      items: [
        {
          kana: 'きゅうり',
          romaji: 'kyūri',
          meaning: { en: 'cucumber', vi: 'dưa chuột' }
        },
        {
          kana: 'トマト',
          romaji: 'tomato',
          meaning: { en: 'tomato', vi: 'cà chua' }
        },
        {
          kana: 'なす',
          romaji: 'nasu',
          meaning: { en: 'eggplant', vi: 'cà tím' }
        },
        {
          kana: 'まめ',
          kanji: '豆',
          romaji: 'mame',
          meaning: { en: 'beans', vi: 'đậu' },
          ruby: [{ base: '豆', reading: 'まめ' }]
        },
        {
          kana: 'キャベツ',
          romaji: 'kyabetsu',
          meaning: { en: 'cabbage', vi: 'bắp cải' }
        },
        {
          kana: 'ねぎ',
          romaji: 'negi',
          meaning: { en: 'green onion', vi: 'hành lá' }
        },
        {
          kana: 'はくさい',
          romaji: 'hakusai',
          meaning: { en: 'Chinese cabbage', vi: 'cải thảo' }
        },
        {
          kana: 'ほうれんそう',
          romaji: 'hōrensō',
          meaning: { en: 'spinach', vi: 'rau bina, cải bó xôi' }
        },
        {
          kana: 'レタス',
          romaji: 'retasu',
          meaning: { en: 'lettuce', vi: 'rau diếp' }
        },
        {
          kana: 'じゃがいも',
          romaji: 'jagaimo',
          meaning: { en: 'potato', vi: 'khoai tây' }
        },
        {
          kana: 'だいこん',
          romaji: 'daikon',
          meaning: { en: 'daikon radish', vi: 'củ cải' }
        },
        {
          kana: 'たまねぎ',
          romaji: 'tamanegi',
          meaning: { en: 'onion', vi: 'củ hành' }
        },
        {
          kana: 'にんじん',
          romaji: 'ninjin',
          meaning: { en: 'carrot', vi: 'cà rốt' }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Fruit', vi: 'Hoa quả' },
      items: [
        {
          kana: 'いちご',
          romaji: 'ichigo',
          meaning: { en: 'strawberry', vi: 'dâu tây' }
        },
        {
          kana: 'もも',
          romaji: 'momo',
          meaning: { en: 'peach', vi: 'đào' }
        },
        {
          kana: 'すいか',
          romaji: 'suika',
          meaning: { en: 'watermelon', vi: 'dưa hấu' }
        },
        {
          kana: 'ぶどう',
          romaji: 'budō',
          meaning: { en: 'grapes', vi: 'nho' }
        },
        {
          kana: 'なし',
          romaji: 'nashi',
          meaning: { en: 'pear', vi: 'lê' }
        },
        {
          kana: 'かき',
          romaji: 'kaki',
          meaning: { en: 'persimmon', vi: 'hồng' }
        },
        {
          kana: 'みかん',
          romaji: 'mikan',
          meaning: { en: 'mandarin orange', vi: 'quýt' }
        },
        {
          kana: 'りんご',
          romaji: 'ringo',
          meaning: { en: 'apple', vi: 'táo' }
        },
        {
          kana: 'バナナ',
          romaji: 'banana',
          meaning: { en: 'banana', vi: 'chuối' }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Meat', vi: 'Thịt' },
      items: [
        {
          kana: 'ぎゅうにく',
          kanji: '牛肉',
          romaji: 'gyūniku',
          meaning: { en: 'beef', vi: 'thịt bò' },
          ruby: [
            { base: '牛', reading: 'ぎゅう' },
            { base: '肉', reading: 'にく' }
          ]
        },
        {
          kana: 'とりにく',
          kanji: '鶏肉',
          romaji: 'toriniku',
          meaning: { en: 'chicken', vi: 'thịt gà' },
          ruby: [
            { base: '鶏', reading: 'とり' },
            { base: '肉', reading: 'にく' }
          ]
        },
        {
          kana: 'ぶたにく',
          kanji: '豚肉',
          romaji: 'butaniku',
          meaning: { en: 'pork', vi: 'thịt lợn' },
          ruby: [
            { base: '豚', reading: 'ぶた' },
            { base: '肉', reading: 'にく' }
          ]
        },
        {
          kana: 'ソーセージ',
          romaji: 'sōsēji',
          meaning: { en: 'sausage', vi: 'xúc xích' }
        },
        {
          kana: 'ハム',
          romaji: 'hamu',
          meaning: { en: 'ham', vi: 'giăm bông' }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Fish and seafood', vi: 'Cá và hải sản' },
      items: [
        {
          kana: 'あじ',
          romaji: 'aji',
          meaning: { en: 'horse mackerel', vi: 'cá sòng' }
        },
        {
          kana: 'いわし',
          romaji: 'iwashi',
          meaning: { en: 'sardine', vi: 'cá trích' }
        },
        {
          kana: 'さば',
          romaji: 'saba',
          meaning: { en: 'mackerel', vi: 'cá thu' }
        },
        {
          kana: 'さんま',
          romaji: 'sanma',
          meaning: { en: 'saury', vi: 'cá thu đao' }
        },
        {
          kana: 'さけ',
          romaji: 'sake',
          meaning: { en: 'salmon', vi: 'cá hồi' }
        },
        {
          kana: 'まぐろ',
          romaji: 'maguro',
          meaning: { en: 'tuna', vi: 'cá ngừ' }
        },
        {
          kana: 'たい',
          romaji: 'tai',
          meaning: { en: 'sea bream', vi: 'cá tráp' }
        },
        {
          kana: 'たら',
          romaji: 'tara',
          meaning: { en: 'cod', vi: 'cá tuyết' }
        },
        {
          kana: 'えび',
          romaji: 'ebi',
          meaning: { en: 'shrimp, prawn', vi: 'tôm' }
        },
        {
          kana: 'かに',
          romaji: 'kani',
          meaning: { en: 'crab', vi: 'cua' }
        },
        {
          kana: 'いか',
          romaji: 'ika',
          meaning: { en: 'squid', vi: 'mực' }
        },
        {
          kana: 'たこ',
          romaji: 'tako',
          meaning: { en: 'octopus', vi: 'bạch tuộc' }
        },
        {
          kana: 'かい',
          kanji: '貝',
          romaji: 'kai',
          meaning: { en: 'shellfish', vi: 'sò, ngao' },
          ruby: [{ base: '貝', reading: 'かい' }]
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Rice', vi: 'Gạo' },
      intro: {
        en: 'こめ is uncooked rice; ごはん is rice once it is cooked and served.',
        vi: 'こめ là gạo chưa nấu; ごはん là cơm đã nấu chín.'
      },
      items: [
        {
          kana: 'こめ',
          kanji: '米',
          romaji: 'kome',
          meaning: { en: 'rice (uncooked)', vi: 'gạo' },
          ruby: [{ base: '米', reading: 'こめ' }]
        }
      ],
      notes: [
        {
          en: 'Japan imports over half of its food. Self-sufficiency in 2010 was 59% for grains, 81% for vegetables, 38% for fruit, 56% for meat, and 60% for seafood - but rice alone reached 100%.',
          vi: 'Nhật Bản nhập khẩu hơn một nửa lượng thực phẩm. Tỷ lệ tự cấp năm 2010 là 59% với ngũ cốc, 81% với rau củ, 38% với trái cây, 56% với thịt và 60% với hải sản - riêng gạo đạt 100%.'
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Names in this lesson', vi: 'Tên riêng trong bài' },
      includeInQuiz: false,
      intro: {
        en: 'A country plus the fictional shop names the textbook uses in its examples.',
        vi: 'Một quốc gia cùng các tên cửa hàng giả định mà giáo trình dùng trong ví dụ.'
      },
      items: [
        {
          kana: 'メキシコ',
          romaji: 'Mekishiko',
          meaning: { en: 'Mexico', vi: 'Mexico' }
        },
        {
          kana: 'おおさかデパート',
          kanji: '大阪デパート',
          romaji: 'Ōsaka depāto',
          meaning: { en: 'Osaka Department Store', vi: 'Bách hóa Osaka' },
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' }
          ]
        },
        {
          kana: 'つるや',
          romaji: 'Tsuruya',
          meaning: { en: 'Tsuruya (a restaurant)', vi: 'Tsuruya (một nhà hàng)' }
        },
        {
          kana: 'フランスや',
          kanji: 'フランス屋',
          romaji: 'Furansuya',
          meaning: { en: 'Furansuya (a supermarket)', vi: 'Furansuya (một siêu thị)' },
          ruby: [{ base: '屋', reading: 'や' }]
        },
        {
          kana: 'まいにちや',
          kanji: '毎日屋',
          romaji: 'Mainichiya',
          meaning: { en: 'Mainichiya (a supermarket)', vi: 'Mainichiya (một siêu thị)' },
          ruby: [
            { base: '毎', reading: 'まい' },
            { base: '日', reading: 'にち' },
            { base: '屋', reading: 'や' }
          ]
        }
      ]
    }
  ]
};
