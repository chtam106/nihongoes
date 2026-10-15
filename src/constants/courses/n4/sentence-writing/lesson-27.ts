import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson27SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-られる / V-potential',
      items: [
        {
          prompt: {
            en: 'I can keep a pet bird.',
            vi: 'Tôi có thể nuôi chim làm thú cưng.'
          },
          jp: 'ペットの 鳥が 飼えます。うちでは 鳥を 飼います。',
          ruby: [
            { base: '鳥', reading: 'とり' },
            { base: '飼', reading: 'か' },
            { base: '鳥', reading: 'とり' },
            { base: '飼', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'Can you run on this road?',
            vi: 'Bạn chạy trên con đường này được không?'
          },
          jp: 'この 道を 走れますか。毎朝 走ります。',
          ruby: [
            { base: '道', reading: 'みち' },
            { base: '走', reading: 'はし' },
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '走', reading: 'はし' }
          ]
        },
        {
          prompt: {
            en: 'You can fly freely in the sky in that story.',
            vi: 'Trong câu chuyện đó, bay tự do trên trời được.'
          },
          jp: '空を 自由に 飛べます。鳥も 飛びます。',
          ruby: [
            { base: '空', reading: 'そら' },
            { base: '自', reading: 'じ' },
            { base: '由', reading: 'ゆう' },
            { base: '飛', reading: 'と' },
            { base: '鳥', reading: 'とり' },
            { base: '飛', reading: 'と' }
          ]
        },
        {
          prompt: {
            en: 'I can attach a pocket to this bag.',
            vi: 'Tôi có thể gắn túi vào túi xách này.'
          },
          jp: 'この かばんに ポケットが 付けられます。ポケットを 付けます。',
          ruby: [
            { base: '付', reading: 'つ' },
            { base: '付', reading: 'つ' }
          ]
        },
        {
          prompt: {
            en: 'You can hold a cooking class in this room.',
            vi: 'Ở phòng này tổ chức lớp nấu ăn được.'
          },
          jp: 'この 部屋で 料理～教室が 開けます。来月 開きます。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '料', reading: 'りょう' },
            { base: '理', reading: 'り' },
            { base: '教', reading: 'きょう' },
            { base: '室', reading: 'しつ' },
            { base: '開', reading: 'ひら' },
            { base: '来', reading: 'らい' },
            { base: '月', reading: 'げつ' },
            { base: '開', reading: 'ひら' }
          ]
        }
      ]
    },
    {
      pattern: 'N が 見えます / 聞こえます',
      items: [
        {
          prompt: {
            en: 'The waves are clearly visible.',
            vi: 'Nhìn thấy sóng rất rõ.'
          },
          jp: '波が はっきり 見えます。',
          ruby: [
            { base: '波', reading: 'なみ' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: 'I can hear the children voices.',
            vi: 'Nghe thấy giọng bọn trẻ.'
          },
          jp: '子どもたちの 声が 聞こえます。',
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '声', reading: 'こえ' },
            { base: '聞', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'Fireworks can be seen from the apartment.',
            vi: 'Từ chung cư nhìn thấy pháo hoa.'
          },
          jp: 'マンションから 花火が 見えます。',
          ruby: [
            { base: '花', reading: 'はな' },
            { base: '火', reading: 'び' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: 'Birdsong can be heard from the house.',
            vi: 'Từ nhà nghe thấy tiếng chim.'
          },
          jp: '家から 鳥の 声が 聞こえます。',
          ruby: [
            { base: '家', reading: 'いえ' },
            { base: '鳥', reading: 'とり' },
            { base: '声', reading: 'こえ' },
            { base: '聞', reading: 'き' }
          ]
        },
        {
          prompt: {
            en: 'The mysterious shape is visible in the sky.',
            vi: 'Hình dạng kỳ lạ nhìn thấy trên trời.'
          },
          jp: '空に 不思議な 形が 見えます。',
          ruby: [
            { base: '空', reading: 'そら' },
            { base: '不', reading: 'ふ' },
            { base: '思', reading: 'し' },
            { base: '議', reading: 'ぎ' },
            { base: '形', reading: 'かたち' },
            { base: '見', reading: 'み' }
          ]
        }
      ]
    },
    {
      pattern: 'N が できます',
      items: [
        {
          prompt: {
            en: 'A party room was built in this building.',
            vi: 'Tòa nhà này có phòng tiệc được xây.'
          },
          jp: 'この ビルに パーティールームが できました。'
        },
        {
          prompt: {
            en: 'A large kitchen will be completed next month.',
            vi: 'Tháng sau bếp lớn sẽ xong.'
          },
          jp: '来月 大きい キッチンが できます。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '月', reading: 'げつ' },
            { base: '大', reading: 'おお' }
          ]
        },
        {
          prompt: {
            en: 'New furniture was made for the room.',
            vi: 'Đồ nội thất mới được làm cho phòng.'
          },
          jp: '部屋に 新しい 家具が できました。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '新', reading: 'あたら' },
            { base: '家', reading: 'か' },
            { base: '具', reading: 'ぐ' }
          ]
        },
        {
          prompt: {
            en: 'A bookshelf was built by the wall.',
            vi: 'Giá sách được làm ở bên tường.'
          },
          jp: '壁の そばに 本棚が できました。',
          ruby: [
            { base: '壁', reading: 'かべ' },
            { base: '本', reading: 'ほん' },
            { base: '棚', reading: 'だな' }
          ]
        },
        {
          prompt: {
            en: 'They build a new house. It will be completed in two hours.',
            vi: 'Họ xây nhà mới. Hai giờ sau sẽ xong.'
          },
          jp: '新しい 家を 建てます。2時間～後に できます。',
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '家', reading: 'いえ' },
            { base: '建', reading: 'た' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' },
            { base: '後', reading: 'ご' }
          ]
        }
      ]
    },
    {
      pattern: 'N しか V-negative',
      items: [
        {
          prompt: {
            en: 'I can only keep a small pet.',
            vi: 'Tôi chỉ nuôi được thú cưng nhỏ.'
          },
          jp: '小さな ペット～しか 飼えません。',
          ruby: [
            { base: '小', reading: 'ちい' },
            { base: '飼', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'There is only a dry cleaner in this town.',
            vi: 'Ở thị trấn này chỉ có tiệm giặt là.'
          },
          jp: 'この 町には クリーニングしか ありません。',
          ruby: [{ base: '町', reading: 'まち' }]
        },
        {
          prompt: {
            en: 'I have only these tools.',
            vi: 'Tôi chỉ có mấy dụng cụ này.'
          },
          jp: 'この 道具しか ありません。',
          ruby: [
            { base: '道', reading: 'どう' },
            { base: '具', reading: 'ぐ' }
          ]
        },
        {
          prompt: {
            en: 'Only that person (honorific) can open the room.',
            vi: 'Chỉ vị kia mới mở phòng được.'
          },
          jp: 'あの 方しか 部屋を 開けません。',
          ruby: [
            { base: '方', reading: 'かた' },
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '開', reading: 'あ' }
          ]
        },
        {
          prompt: {
            en: 'I love only the main character.',
            vi: 'Tôi chỉ rất thích nhân vật chính.'
          },
          jp: '主人公が 大好きです。ほかの 人は 好きじゃ ありません。',
          ruby: [
            { base: '主', reading: 'しゅ' },
            { base: '人', reading: 'じん' },
            { base: '公', reading: 'こう' },
            { base: '大', reading: 'だい' },
            { base: '好', reading: 'す' },
            { base: '人', reading: 'ひと' },
            { base: '好', reading: 'す' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 は ～ N2 は ～',
      items: [
        {
          prompt: {
            en: 'I am worried about the future, but I am not worried about now.',
            vi: 'Tương lai thì lo, còn bây giờ thì không lo.'
          },
          jp: '将来は 心配ですが、今は 心配じゃ ありません。',
          ruby: [
            { base: '将', reading: 'しょう' },
            { base: '来', reading: 'らい' },
            { base: '心', reading: 'しん' },
            { base: '配', reading: 'ぱい' },
            { base: '今', reading: 'いま' },
            { base: '心', reading: 'しん' },
            { base: '配', reading: 'ぱい' }
          ]
        },
        {
          prompt: {
            en: 'I like birds, but I do not like fish.',
            vi: 'Chim thì thích, còn cá thì không.'
          },
          jp: '鳥は 好きですが、魚は 好きじゃ ありません。',
          ruby: [
            { base: '鳥', reading: 'とり' },
            { base: '好', reading: 'す' },
            { base: '魚', reading: 'さかな' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: {
            en: 'Long ago it was wonderful, but now it is not.',
            vi: 'Ngày xưa thì tuyệt vời, còn bây giờ thì không.'
          },
          jp: '昔は すばらしいでしたが、今は そうじゃ ありません。',
          ruby: [
            { base: '昔', reading: 'むかし' },
            { base: '今', reading: 'いま' }
          ]
        },
        {
          prompt: {
            en: 'I can do it myself, but other people cannot.',
            vi: 'Bản thân thì làm được, người khác thì không.'
          },
          jp: '自分は できますが、ほかの 人は できません。',
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' },
            { base: '人', reading: 'ひと' }
          ]
        },
        {
          prompt: {
            en: 'For example, this is cheap, but that is expensive.',
            vi: 'Ví dụ, cái này rẻ, cái kia đắt.'
          },
          jp: '例えば これは 安いですが、それは 高いです。',
          ruby: [
            { base: '例', reading: 'たと' },
            { base: '安', reading: 'やす' },
            { base: '高', reading: 'たか' }
          ]
        }
      ]
    },
    {
      pattern: 'N では / N には',
      items: [
        {
          prompt: {
            en: 'In this apartment you cannot keep dogs.',
            vi: 'Ở chung cư này không nuôi chó được.'
          },
          jp: 'この マンションでは 犬が 飼えません。',
          ruby: [
            { base: '犬', reading: 'いぬ' },
            { base: '飼', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'On a clear day the sea is visible from here.',
            vi: 'Ngày đẹp trời thì từ đây nhìn thấy biển.'
          },
          jp: '天気の いい 日には 海が 見えます。',
          ruby: [
            { base: '天', reading: 'てん' },
            { base: '気', reading: 'き' },
            { base: '日', reading: 'ひ' },
            { base: '海', reading: 'う' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: 'At this dry cleaner, clothes come back in two days.',
            vi: 'Ở tiệm giặt là này, hai ngày sau đồ về.'
          },
          jp: 'この クリーニングでは 2日～後に 服が できます。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '後', reading: 'ご' },
            { base: '服', reading: 'ふく' }
          ]
        },
        {
          prompt: {
            en: 'Someday I want to live in that house.',
            vi: 'Một ngày nào đó tôi muốn sống ở nhà đó.'
          },
          jp: 'いつか あの 家に 住みたいです。',
          ruby: [
            { base: '家', reading: 'いえ' },
            { base: '住', reading: 'す' }
          ]
        },
        {
          prompt: {
            en: 'As for myself, I do not use that classroom.',
            vi: 'Còn bản thân tôi thì không dùng lớp học đó.'
          },
          jp: '自分では あの 教室を 使いません。',
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' },
            { base: '教', reading: 'きょう' },
            { base: '室', reading: 'しつ' },
            { base: '使', reading: 'つか' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'You can do anything.', vi: 'Anh/chị cái gì cũng làm được nhỉ.' },
      jp: '何でも できますね。',
      ruby: [{ base: '何', reading: 'なん' }]
    },
    {
      prompt: { en: 'What a wonderful dream.', vi: 'Một ước mơ tuyệt vời nhỉ.' },
      jp: 'すばらしい 夢ですね。',
      ruby: [{ base: '夢', reading: 'ゆめ' }]
    }
  ]
};
