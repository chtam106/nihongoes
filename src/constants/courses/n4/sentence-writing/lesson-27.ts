import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson27SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-られる / V-potential',
      items: [
        {
          prompt: {
            en: 'This road has a lot of cars, so you cannot run on it.',
            vi: 'Con đường này nhiều xe nên không chạy bộ được.'
          },
          jp: 'この 道は 車が 多くて、走れません。',
          ruby: [
            { base: '道', reading: 'みち' },
            { base: '車', reading: 'くるま' },
            { base: '多', reading: 'おお' },
            { base: '走', reading: 'はし' }
          ]
        },
        {
          prompt: {
            en: 'Can you make furniture yourself?',
            vi: 'Anh có tự làm được đồ nội thất không?'
          },
          jp: '自分で 家具が 作れますか。',
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' },
            { base: '家', reading: 'か' },
            { base: '具', reading: 'ぐ' },
            { base: '作', reading: 'つく' }
          ]
        },
        {
          prompt: {
            en: 'Someday I want to fly freely in the sky. But people cannot fly.',
            vi: 'Một ngày nào đó tôi muốn bay tự do trên bầu trời. Nhưng con người không bay được.'
          },
          jp: 'いつか 空を 自由に 飛びたいです。でも、人は 飛べません。',
          ruby: [
            { base: '空', reading: 'そら' },
            { base: '自', reading: 'じ' },
            { base: '由', reading: 'ゆう' },
            { base: '飛', reading: 'と' },
            { base: '人', reading: 'ひと' },
            { base: '飛', reading: 'と' }
          ]
        },
        {
          prompt: {
            en: 'You can attach a pocket to this bag.',
            vi: 'Có thể gắn thêm túi vào cái cặp này.'
          },
          jp: 'この かばんには ポケットが 付けられます。',
          ruby: [{ base: '付', reading: 'つ' }]
        },
        {
          prompt: {
            en: 'You can hold a cooking class in this room.',
            vi: 'Có thể mở lớp dạy nấu ăn trong phòng này.'
          },
          jp: 'この 部屋で 料理教室が 開けます。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '料', reading: 'りょう' },
            { base: '理', reading: 'り' },
            { base: '教', reading: 'きょう' },
            { base: '室', reading: 'しつ' },
            { base: '開', reading: 'ひら' }
          ]
        }
      ]
    },
    {
      pattern: 'N が 見えます / 聞こえます',
      patternRuby: [
        { base: '見', reading: 'み' },
        { base: '聞', reading: 'き' }
      ],
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
            en: 'A new kitchen will be finished in our home next month.',
            vi: 'Tháng sau nhà tôi sẽ làm xong bếp mới.'
          },
          jp: '来月 うちに 新しい キッチンが できます。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '月', reading: 'げつ' },
            { base: '新', reading: 'あたら' }
          ]
        },
        {
          prompt: {
            en: 'The furniture I ordered will be ready in a week.',
            vi: 'Đồ nội thất tôi đặt sẽ xong sau một tuần.'
          },
          jp: '注文した 家具は 1週間後に できます。',
          ruby: [
            { base: '注', reading: 'ちゅう' },
            { base: '文', reading: 'もん' },
            { base: '家', reading: 'か' },
            { base: '具', reading: 'ぐ' },
            { base: '週', reading: 'しゅう' },
            { base: '間', reading: 'かん' },
            { base: '後', reading: 'ご' }
          ]
        },
        {
          prompt: {
            en: 'The bookshelf my father made is finally finished.',
            vi: 'Cái giá sách bố tôi làm cuối cùng cũng xong.'
          },
          jp: '父が 作った 本棚が やっと できました。',
          ruby: [
            { base: '父', reading: 'ちち' },
            { base: '作', reading: 'つく' },
            { base: '本', reading: 'ほん' },
            { base: '棚', reading: 'だな' }
          ]
        },
        {
          prompt: {
            en: 'We are building a new house now. It will be finished next spring.',
            vi: 'Bây giờ chúng tôi đang xây nhà mới. Mùa xuân năm sau sẽ xong.'
          },
          jp: '今 新しい 家を 建てています。来年の 春に できます。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '新', reading: 'あたら' },
            { base: '家', reading: 'いえ' },
            { base: '建', reading: 'た' },
            { base: '来', reading: 'らい' },
            { base: '年', reading: 'ねん' },
            { base: '春', reading: 'はる' }
          ]
        }
      ]
    },
    {
      pattern: 'N しか V-negative',
      items: [
        {
          prompt: {
            en: 'I want to keep a pet, but in this apartment you can only keep birds.',
            vi: 'Tôi muốn nuôi thú cưng, nhưng chung cư này chỉ được nuôi chim.'
          },
          jp: 'ペットを 飼いたいんですが、この マンションでは 鳥しか 飼えません。',
          ruby: [
            { base: '飼', reading: 'か' },
            { base: '鳥', reading: 'とり' },
            { base: '飼', reading: 'か' }
          ]
        },
        {
          prompt: { en: 'There is only a dry cleaner nearby.', vi: 'Gần đây chỉ có tiệm giặt là.' },
          jp: '近くには クリーニングの 店しか ありません。',
          ruby: [
            { base: '近', reading: 'ちか' },
            { base: '店', reading: 'みせ' }
          ]
        },
        {
          prompt: {
            en: 'I only have this tool right now. Is that all right?',
            vi: 'Bây giờ tôi chỉ có dụng cụ này thôi, có được không?'
          },
          jp: '今 この 道具しか ありませんが、大丈夫ですか。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '道', reading: 'どう' },
            { base: '具', reading: 'ぐ' },
            { base: '大', reading: 'だい' },
            { base: '丈', reading: 'じょう' },
            { base: '夫', reading: 'ぶ' }
          ]
        },
        {
          prompt: {
            en: 'Only that person has the key to this room.',
            vi: 'Chỉ có vị kia giữ chìa khóa phòng này.'
          },
          jp: 'この 部屋の 鍵は あの 方しか 持っていません。',
          ruby: [
            { base: '部', reading: 'へ' },
            { base: '屋', reading: 'や' },
            { base: '鍵', reading: 'かぎ' },
            { base: '方', reading: 'かた' },
            { base: '持', reading: 'も' }
          ]
        },
        {
          prompt: {
            en: 'I only watched the end of this movie.',
            vi: 'Bộ phim này tôi chỉ xem đoạn cuối.'
          },
          jp: 'この 映画は 最後しか 見ませんでした。',
          ruby: [
            { base: '映', reading: 'えい' },
            { base: '画', reading: 'が' },
            { base: '最', reading: 'さい' },
            { base: '後', reading: 'ご' },
            { base: '見', reading: 'み' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 は ～ N2 は ～',
      items: [
        {
          prompt: {
            en: 'I used to worry about the future, but now I do not.',
            vi: 'Trước đây tôi lo về tương lai, nhưng bây giờ thì không.'
          },
          jp: '昔は 将来が 心配でしたが、今は 心配じゃ ありません。',
          ruby: [
            { base: '昔', reading: 'むかし' },
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
            en: 'The scenery is wonderful, but getting there is inconvenient.',
            vi: 'Phong cảnh thì tuyệt đẹp, nhưng giao thông thì bất tiện.'
          },
          jp: '景色は すばらしいですが、交通は 不便です。',
          ruby: [
            { base: '景', reading: 'け' },
            { base: '色', reading: 'しき' },
            { base: '交', reading: 'こう' },
            { base: '通', reading: 'つう' },
            { base: '不', reading: 'ふ' },
            { base: '便', reading: 'べん' }
          ]
        },
        {
          prompt: {
            en: 'I love the main character, but I do not really like the other characters.',
            vi: 'Nhân vật chính thì tôi rất thích, nhưng các nhân vật khác thì không thích lắm.'
          },
          jp: '主人公は 大好きですが、ほかの 人物は あまり 好きじゃ ありません。',
          ruby: [
            { base: '主', reading: 'しゅ' },
            { base: '人', reading: 'じん' },
            { base: '公', reading: 'こう' },
            { base: '大', reading: 'だい' },
            { base: '好', reading: 'す' },
            { base: '人', reading: 'じん' },
            { base: '物', reading: 'ぶつ' },
            { base: '好', reading: 'す' }
          ]
        },
        {
          prompt: {
            en: 'For example, you can keep dogs, but you cannot keep cats.',
            vi: 'Ví dụ, chó thì được nuôi, còn mèo thì không.'
          },
          jp: '例えば、犬は 飼えますが、猫は 飼えません。',
          ruby: [
            { base: '例', reading: 'たと' },
            { base: '犬', reading: 'いぬ' },
            { base: '飼', reading: 'か' },
            { base: '猫', reading: 'ねこ' },
            { base: '飼', reading: 'か' }
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
            en: 'At this dry cleaner, your clothes are ready two days later.',
            vi: 'Ở tiệm giặt là này, quần áo xong sau hai ngày.'
          },
          jp: 'この クリーニング屋では 2日後に 服が できます。',
          ruby: [
            { base: '屋', reading: 'や' },
            { base: '日', reading: 'ふつか' },
            { base: '後', reading: 'ご' },
            { base: '服', reading: 'ふく' }
          ]
        },
        {
          prompt: {
            en: 'For children, fireworks are the most fun.',
            vi: 'Với bọn trẻ thì pháo hoa là vui nhất.'
          },
          jp: '子どもたちには 花火が いちばん 楽しいです。',
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '花', reading: 'はな' },
            { base: '火', reading: 'び' },
            { base: '楽', reading: 'たの' }
          ]
        },
        {
          prompt: {
            en: 'Here you can clearly hear the sound of the waves.',
            vi: 'Ở đây nghe rõ tiếng sóng.'
          },
          jp: 'ここでは 波の 音が はっきり 聞こえます。',
          ruby: [
            { base: '波', reading: 'なみ' },
            { base: '音', reading: 'おと' },
            { base: '聞', reading: 'き' }
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
