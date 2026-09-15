import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 34 (とおりに, あとで, V-て, V-ないで). */
export const n4Lesson34: Lesson = {
  id: 'lesson-34',
  number: 34,
  title: {
    en: 'Following instructions',
    vi: 'Làm theo hướng dẫn'
  },
  focus: {
    en: 'Follow steps with 〜とおりに, sequence actions with 〜あとで, combine actions with V-て, and choose alternatives with V-ないで.',
    vi: 'Làm theo 〜とおりに, trình tự với 〜あとで, kết hợp hành động với V-て, và chọn phương án với V-ないで.'
  },
  vocab: [
    {
      kana: 'みがきます',
      kanji: '磨きます',
      romaji: 'migakimasu',
      meaning: { en: 'to brush, to polish [歯を～: teeth]', vi: 'đánh [răng], đánh bóng' },
      ruby: [{ base: '磨', reading: 'みが' }]
    },
    {
      kana: 'くみたてます',
      kanji: '組み立てます',
      romaji: 'kumitatemasu',
      meaning: { en: 'to assemble', vi: 'lắp ráp' },
      ruby: [
        { base: '組', reading: 'く' },
        { base: '立', reading: 'た' }
      ]
    },
    {
      kana: 'おります',
      kanji: '折ります',
      romaji: 'orimasu',
      meaning: { en: 'to fold, to break, to snap', vi: 'gập, bẻ' },
      ruby: [{ base: '折', reading: 'お' }]
    },
    {
      kana: 'きがつきます',
      kanji: '気がつきます',
      romaji: 'ki ga tsukimasu',
      meaning: {
        en: 'to notice, to become aware of [忘れ物に～: things left behind]',
        vi: 'để ý, chú ý [忘れ物に～: đồ để quên]'
      },
      ruby: [
        { base: '気', reading: 'き' },
        { base: '付', reading: 'つ' }
      ]
    },
    {
      kana: 'つけます',
      romaji: 'tsukemasu',
      meaning: {
        en: 'to dip in, to add [しょうゆを～: soy sauce]',
        vi: 'chấm, cho vào [しょうゆを～: xì dầu]'
      }
    },
    {
      kana: 'みつかります',
      kanji: '見つかります',
      romaji: 'mitsukarimasu',
      meaning: { en: 'to be found [かぎが～: a key]', vi: 'tìm thấy [かぎが～: chìa khóa]' },
      ruby: [
        { base: '見', reading: 'み' },
        { base: '付', reading: 'つ' }
      ]
    },
    {
      kana: 'しつもんします',
      kanji: '質問します',
      romaji: 'shitsumon shimasu',
      meaning: { en: 'to ask a question', vi: 'hỏi, đặt câu hỏi' },
      ruby: [
        { base: '質', reading: 'しつ' },
        { base: '問', reading: 'もん' }
      ]
    },
    {
      kana: 'さします',
      kanji: '差します',
      romaji: 'sashimasu',
      meaning: { en: 'to put up, to raise [かさを～: an umbrella]', vi: 'che, dựng [かさを～: ô]' },
      ruby: [{ base: '差', reading: 'さ' }]
    },
    {
      kana: 'ほそい',
      kanji: '細い',
      romaji: 'hosoi',
      meaning: { en: 'thin, slim (of small diameter)', vi: 'mảnh, nhỏ (đường kính)' },
      ruby: [{ base: '細', reading: 'ほそ' }]
    },
    {
      kana: 'ふとい',
      kanji: '太い',
      romaji: 'futoi',
      meaning: { en: 'thick (of large diameter)', vi: 'to, dầy (đường kính)' },
      ruby: [{ base: '太', reading: 'ふと' }]
    },
    {
      kana: 'スポーツクラブ',
      romaji: 'supōtsu kurabu',
      meaning: { en: 'sports club', vi: 'câu lạc bộ thể thao' }
    },
    {
      kana: 'かぐ',
      kanji: '家具',
      romaji: 'kagu',
      meaning: { en: 'furniture', vi: 'đồ nội thất' },
      ruby: [
        { base: '家', reading: 'か' },
        { base: '具', reading: 'ぐ' }
      ]
    },
    {
      kana: 'キー',
      romaji: 'kī',
      meaning: { en: 'key', vi: 'chìa khóa' }
    },
    {
      kana: 'シートベルト',
      romaji: 'shīto beruto',
      meaning: { en: 'seat belt', vi: 'dây an toàn' }
    },
    {
      kana: 'おしろ',
      kanji: 'お城',
      romaji: 'o-shiro',
      meaning: { en: 'castle', vi: 'thành' },
      ruby: [{ base: '城', reading: 'しろ' }]
    },
    {
      kana: 'せつめいしょ',
      kanji: '説明書',
      romaji: 'setsumeisho',
      meaning: { en: 'instruction manual', vi: 'sách hướng dẫn' },
      ruby: [
        { base: '説', reading: 'せつ' },
        { base: '明', reading: 'めい' },
        { base: '書', reading: 'しょ' }
      ]
    },
    {
      kana: 'ず',
      kanji: '図',
      romaji: 'zu',
      meaning: { en: 'diagram, figure', vi: 'hình vẽ minh họa' },
      ruby: [{ base: '図', reading: 'ず' }]
    },
    {
      kana: 'せん',
      kanji: '線',
      romaji: 'sen',
      meaning: { en: 'line', vi: 'đường kẻ' },
      ruby: [{ base: '線', reading: 'せん' }]
    },
    {
      kana: 'やじるし',
      kanji: '矢印',
      romaji: 'yajirushi',
      meaning: { en: 'arrow (sign)', vi: 'mũi tên (ký hiệu)' },
      ruby: [
        { base: '矢', reading: 'や' },
        { base: '印', reading: 'じるし' }
      ]
    },
    {
      kana: 'くろ',
      kanji: '黒',
      romaji: 'kuro',
      meaning: { en: 'black (noun)', vi: 'màu đen (danh từ)' },
      ruby: [{ base: '黒', reading: 'くろ' }]
    },
    {
      kana: 'しろ',
      kanji: '白',
      romaji: 'shiro',
      meaning: { en: 'white (noun)', vi: 'màu trắng (danh từ)' },
      ruby: [{ base: '白', reading: 'しろ' }]
    },
    {
      kana: 'あか',
      kanji: '赤',
      romaji: 'aka',
      meaning: { en: 'red (noun)', vi: 'màu đỏ (danh từ)' },
      ruby: [{ base: '赤', reading: 'あか' }]
    },
    {
      kana: 'あお',
      kanji: '青',
      romaji: 'ao',
      meaning: { en: 'blue (noun)', vi: 'màu xanh (danh từ)' },
      ruby: [{ base: '青', reading: 'あお' }]
    },
    {
      kana: 'こん',
      kanji: '紺',
      romaji: 'kon',
      meaning: { en: 'navy blue, dark blue (noun)', vi: 'màu xanh sẫm (danh từ)' },
      ruby: [{ base: '紺', reading: 'こん' }]
    },
    {
      kana: 'きいろ',
      kanji: '黄色',
      romaji: 'kiiro',
      meaning: { en: 'yellow (noun)', vi: 'màu vàng (danh từ)' },
      ruby: [
        { base: '黄', reading: 'き' },
        { base: '色', reading: 'いろ' }
      ]
    },
    {
      kana: 'ちゃいろ',
      kanji: '茶色',
      romaji: 'chairo',
      meaning: { en: 'brown (noun)', vi: 'màu nâu (danh từ)' },
      ruby: [
        { base: '茶', reading: 'ちゃ' },
        { base: '色', reading: 'いろ' }
      ]
    },
    {
      kana: 'しょうゆ',
      romaji: 'shōyu',
      meaning: { en: 'soy sauce', vi: 'xì dầu' }
    },
    {
      kana: 'ソース',
      romaji: 'sōsu',
      meaning: { en: 'sauce, Worcestershire sauce', vi: 'nước sốt' }
    },
    {
      kana: 'おきゃく',
      kanji: 'お客',
      romaji: 'o-kyaku',
      meaning: { en: 'guest, customer [～さん: polite]', vi: 'vị khách [～さん: kính ngữ]' },
      ruby: [{ base: '客', reading: 'きゃく' }]
    },
    {
      kana: '～か ～',
      romaji: '~ ka ~',
      meaning: { en: '~ or ~', vi: '~ hay ~' }
    },
    {
      kana: 'ゆうべ',
      romaji: 'yūbe',
      meaning: { en: 'last night', vi: 'tối qua' }
    },
    {
      kana: 'さっき',
      romaji: 'sakki',
      meaning: { en: 'a short while ago', vi: 'lúc nãy' }
    },
    {
      kana: 'さどう',
      kanji: '茶道',
      romaji: 'sadō',
      meaning: { en: 'tea ceremony', vi: 'trà đạo' },
      ruby: [
        { base: '茶', reading: 'さ' },
        { base: '道', reading: 'どう' }
      ]
    },
    {
      kana: 'おちゃをたてます',
      kanji: 'お茶をたてます',
      romaji: 'o-cha o tatemasu',
      meaning: { en: 'to make tea (in a tea ceremony)', vi: 'đánh trà (trong trà đạo)' },
      ruby: [
        { base: '茶', reading: 'ちゃ' },
        { base: '点', reading: 'た' }
      ]
    },
    {
      kana: 'さきに',
      kanji: '先に',
      romaji: 'saki ni',
      meaning: { en: 'first, beforehand', vi: 'trước, trước tiên' },
      ruby: [{ base: '先', reading: 'さき' }]
    },
    {
      kana: 'のせます',
      kanji: '載せます',
      romaji: 'nosemasu',
      meaning: { en: 'to place on, to put on', vi: 'để lên, đặt lên' },
      ruby: [{ base: '載', reading: 'の' }]
    },
    {
      kana: 'にがい',
      kanji: '苦い',
      romaji: 'nigai',
      meaning: { en: 'bitter', vi: 'đắng' },
      ruby: [{ base: '苦', reading: 'にが' }]
    },
    {
      kana: 'おやこどんぶり',
      kanji: '親子どんぶり',
      romaji: 'oyako donburi',
      meaning: { en: 'chicken and egg rice bowl', vi: 'cơm gà trứng (oyakodon)' },
      ruby: [
        { base: '親', reading: 'おや' },
        { base: '子', reading: 'こ' }
      ]
    },
    {
      kana: 'ざいりょう',
      kanji: '材料',
      romaji: 'zairyō',
      meaning: { en: 'ingredients, materials', vi: 'nguyên liệu' },
      ruby: [
        { base: '材', reading: 'ざい' },
        { base: '料', reading: 'りょう' }
      ]
    },
    {
      kana: '～ぶん',
      kanji: '～分',
      romaji: '~bun',
      meaning: { en: 'portion for ~ (quantity)', vi: 'phần ~ (lượng)' },
      ruby: [{ base: '分', reading: 'ぶん' }]
    },
    {
      kana: '～グラム',
      romaji: '~guramu',
      meaning: { en: '-gram', vi: 'gam' }
    },
    {
      kana: '～こ',
      kanji: '～個',
      romaji: '~ko',
      meaning: { en: 'counter for small objects', vi: 'cái (đếm vật nhỏ)' },
      ruby: [{ base: '個', reading: 'こ' }]
    },
    {
      kana: 'たまねぎ',
      kanji: '玉ねぎ',
      romaji: 'tamanegi',
      meaning: { en: 'onion', vi: 'hành tây' },
      ruby: [{ base: '玉', reading: 'たま' }]
    },
    {
      kana: 'よんぶんのいち',
      kanji: '4分の1',
      romaji: 'yon-bun no ichi',
      meaning: { en: 'one fourth', vi: 'một phần tư' },
      ruby: [
        { base: '分', reading: 'ぶん' },
        { base: '一', reading: 'いち' }
      ]
    },
    {
      kana: 'ちょうみりょう',
      kanji: '調味料',
      romaji: 'chōmiryō',
      meaning: { en: 'seasoning, condiments', vi: 'gia vị' },
      ruby: [
        { base: '調', reading: 'ちょう' },
        { base: '味', reading: 'み' },
        { base: '料', reading: 'りょう' }
      ]
    },
    {
      kana: 'てきとう',
      kanji: '適当',
      romaji: 'tekitō',
      meaning: { en: 'appropriate, suitable', vi: 'thích hợp, vừa phải' },
      ruby: [
        { base: '適', reading: 'てき' },
        { base: '当', reading: 'とう' }
      ]
    },
    {
      kana: 'なべ',
      romaji: 'nabe',
      meaning: { en: 'pot, pan', vi: 'nồi, chảo' }
    },
    {
      kana: 'ひ',
      kanji: '火',
      romaji: 'hi',
      meaning: { en: 'fire, heat', vi: 'lửa' },
      ruby: [{ base: '火', reading: 'ひ' }]
    },
    {
      kana: 'ひにかけます',
      kanji: '火にかけます',
      romaji: 'hi ni kakemasu',
      meaning: { en: 'to put on the stove', vi: 'bắc lên bếp' },
      ruby: [{ base: '火', reading: 'ひ' }]
    },
    {
      kana: 'にます',
      kanji: '煮ます',
      romaji: 'nimasu',
      meaning: { en: 'to boil, to stew, to simmer', vi: 'nấu, luộc, om' },
      ruby: [{ base: '煮', reading: 'に' }]
    },
    {
      kana: 'にえます',
      kanji: '煮えます',
      romaji: 'niemasu',
      meaning: { en: 'to be cooked, to be boiled', vi: 'chín' },
      ruby: [{ base: '煮', reading: 'に' }]
    },
    {
      kana: 'どんぶり',
      romaji: 'donburi',
      meaning: { en: 'large bowl (for rice dishes)', vi: 'bát tô lớn' }
    },
    {
      kana: 'たちます',
      kanji: '経ちます',
      romaji: 'tachimasu',
      meaning: { en: 'to pass [時間が～: time]', vi: 'trôi qua [時間が～: thời gian]' },
      ruby: [{ base: '経', reading: 'た' }]
    }
  ],
  phrases: [
    {
      kana: 'これで いいですか。',
      romaji: 'Kore de ii desu ka.',
      meaning: { en: 'Is this all right?', vi: 'Như thế này có được không?' }
    },
    {
      kana: 'いかが ですか。',
      romaji: 'Ikaga desu ka.',
      meaning: { en: 'How is it? (polite)', vi: 'Như thế nào ạ?' }
    }
  ],
  conversation: [
    {
      id: 'conv-lesson34-tea',
      title: { en: 'Please do as I do', vi: 'Hãy làm theo đúng như tôi làm' },
      speakers: [
        { id: 'klara', name: 'クララ' },
        { id: 'watanabe', name: '渡辺' },
        { id: 'teacher', name: '茶道の先生' }
      ],
      lines: [
        {
          speakerId: 'klara',
          jp: '茶道を 一度 見て みたいんですが……。',
          romaji: 'Sadō o ichido mite mitai n desu ga…….',
          meaning: {
            en: 'I would like to see a tea ceremony once...',
            vi: 'Tôi muốn xem thử trà đạo một lần...'
          },
          ruby: [
            { base: '茶', reading: 'さ' },
            { base: '道', reading: 'どう' },
            { base: '一', reading: 'いち' },
            { base: '度', reading: 'ど' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          speakerId: 'watanabe',
          jp: 'それなら 来週の 土曜日、一緒に 行きませんか。',
          romaji: 'Sorenara raishū no doyōbi, issho ni ikimasen ka.',
          meaning: {
            en: 'In that case, shall we go together next Saturday?',
            vi: 'Thế thì thứ bảy tuần sau chị đi cùng với tôi không?'
          },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '土', reading: 'ど' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '一', reading: 'いっ' },
            { base: '緒', reading: 'しょ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'teacher',
          jp: '渡辺さん、お茶を 点てて ください。クララさん、どうぞ お菓子を。',
          romaji: 'Watanabe-san, o-cha o tatete kudasai. Kurā-san, dōzo o-kashi o.',
          meaning: {
            en: 'Ms. Watanabe, please make the tea. Ms. Klara, please have some sweets.',
            vi: 'Chị Watanabe, chị hãy đánh trà đi. Chị Klara, mời chị dùng bánh.'
          },
          ruby: [
            { base: '渡', reading: 'わた' },
            { base: '辺', reading: 'なべ' },
            { base: '茶', reading: 'ちゃ' },
            { base: '点', reading: 'た' },
            { base: '菓', reading: 'か' },
            { base: '子', reading: 'し' }
          ]
        },
        {
          speakerId: 'klara',
          jp: 'あ、お菓子を 先に いただくんですか。',
          romaji: 'A, o-kashi o saki ni itadaku n desu ka.',
          meaning: { en: 'Oh, do we eat sweets first?', vi: 'Ôi, bánh ăn trước ạ?' },
          ruby: [
            { base: '菓', reading: 'か' },
            { base: '子', reading: 'し' },
            { base: '先', reading: 'さき' }
          ]
        },
        {
          speakerId: 'teacher',
          jp: 'はい。甘い お菓子を 食べた あとで お茶を 飲むと、おいしいんですよ。',
          romaji: 'Hai. Amai o-kashi o tabeta ato de o-cha o nomu to, oishii n desu yo.',
          meaning: {
            en: 'Yes. After eating sweets, drinking tea tastes better.',
            vi: 'Vâng. Sau khi ăn bánh ngọt, uống trà thì mới ngon.'
          },
          ruby: [
            { base: '甘', reading: 'あま' },
            { base: '菓', reading: 'か' },
            { base: '子', reading: 'し' },
            { base: '食', reading: 'た' },
            { base: '茶', reading: 'ちゃ' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          speakerId: 'klara',
          jp: 'そう ですか。',
          romaji: 'Sō desu ka.',
          meaning: { en: 'I see.', vi: 'Thế ạ?' }
        },
        {
          speakerId: 'teacher',
          jp: 'では お茶を どうぞ。まず 右手で 茶碗を 持って、左手に 載せます。それから 茶碗を 2回 回して 飲みます。',
          romaji:
            'De wa o-cha o dōzo. Mazu migite de chawan o motte, hidarite ni nosemasu. Sorekara chawan o ni-kai mawashite nomimasu.',
          meaning: {
            en: 'Now please have tea. First hold the bowl in your right hand and place it on your left. Then turn the bowl twice and drink.',
            vi: 'Bây giờ mời uống trà. Trước hết cầm chén bằng tay phải, rồi đặt lên tay trái. Sau đó xoay chén 2 lần và uống.'
          },
          ruby: [
            { base: '茶', reading: 'ちゃ' },
            { base: '右', reading: 'みぎ' },
            { base: '手', reading: 'て' },
            { base: '茶', reading: 'ちゃ' },
            { base: '碗', reading: 'わん' },
            { base: '持', reading: 'も' },
            { base: '左', reading: 'ひだり' },
            { base: '手', reading: 'て' },
            { base: '載', reading: 'の' },
            { base: '茶', reading: 'ちゃ' },
            { base: '碗', reading: 'わん' },
            { base: '回', reading: 'かい' },
            { base: '回', reading: 'まわ' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          speakerId: 'klara',
          jp: 'はい。',
          romaji: 'Hai.',
          meaning: { en: 'Yes.', vi: 'Vâng.' }
        },
        {
          speakerId: 'teacher',
          jp: 'では、私が やる とおりに、やって ください。',
          romaji: 'De wa, watashi ga yaru toōri ni, yatte kudasai.',
          meaning: {
            en: 'Now please do exactly as I do.',
            vi: 'Nào, hãy làm theo đúng như tôi làm.'
          },
          ruby: [{ base: '私', reading: 'わたし' }]
        },
        {
          speakerId: 'klara',
          jp: 'こう いう ふうで いいですか。',
          romaji: 'Kō iu fū de ii desu ka.',
          meaning: { en: 'Is it all right like this?', vi: 'Thế này có được không ạ?' }
        },
        {
          speakerId: 'teacher',
          jp: 'はい。いかが ですか。',
          romaji: 'Hai. Ikaga desu ka.',
          meaning: { en: 'Yes. How does it taste?', vi: 'Vâng. Chị thấy thế nào?' }
        },
        {
          speakerId: 'klara',
          jp: '少し 苦い ですが、おいしい です。',
          romaji: 'Sukoshi nigai desu ga, oishii desu.',
          meaning: {
            en: 'It is a bit bitter, but delicious.',
            vi: 'Tôi thấy hơi đắng, nhưng ngon.'
          },
          ruby: [
            { base: '少', reading: 'すこ' },
            { base: '苦', reading: 'にが' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N の／V-た とおりに、V',
      highlights: ['とおり', 'に'],
      title: { en: 'Doing as indicated (〜とおりに)', vi: 'Làm theo đúng (〜とおりに)' },
      explanation: {
        en: 'N の or V-た + とおりに means doing V exactly as shown or as N indicates: 説明書のとおりに、組み立てます. とおり is a noun and can combine with この/その/あの.',
        vi: 'N の hoặc V-た + とおりに nghĩa là làm V đúng như N chỉ hoặc như đã làm: 説明書のとおりに、組み立てます. とおり là danh từ, có thể kết hợp với この/その/あの.'
      },
      explanationRuby: [
        { base: '説', reading: 'せつ' },
        { base: '明', reading: 'めい' },
        { base: '書', reading: 'しょ' },
        { base: '組', reading: 'く' },
        { base: '立', reading: 'た' }
      ],
      examples: [
        {
          jp: '線の とおりに、紙を 切って ください。',
          romaji: 'Sen no tōri ni, kami o kitte kudasai.',
          meaning: {
            en: 'Please cut the paper along the line.',
            vi: 'Hãy cắt giấy theo đường kẻ.'
          },
          ruby: [
            { base: '線', reading: 'せん' },
            { base: '紙', reading: 'かみ' },
            { base: '切', reading: 'き' }
          ]
        },
        {
          jp: '私が やった とおりに、やって ください。',
          romaji: 'Watashi ga yatta tōri ni, yatte kudasai.',
          meaning: { en: 'Please do exactly as I did.', vi: 'Hãy làm theo đúng như tôi đã làm.' },
          ruby: [{ base: '私', reading: 'わたし' }]
        },
        {
          jp: '説明書の とおりに、家具を 組み立てました。',
          romaji: 'Setsumeisho no tōri ni, kagu o kumitatemashita.',
          meaning: {
            en: 'I assembled the furniture according to the manual.',
            vi: 'Tôi lắp đồ nội thất theo sách hướng dẫn.'
          },
          ruby: [
            { base: '説', reading: 'せつ' },
            { base: '明', reading: 'めい' },
            { base: '書', reading: 'しょ' },
            { base: '家', reading: 'か' },
            { base: '具', reading: 'ぐ' },
            { base: '組', reading: 'く' },
            { base: '立', reading: 'た' }
          ]
        },
        {
          jp: 'この とおりに、書いて ください。',
          romaji: 'Kono tōri ni, kaite kudasai.',
          meaning: { en: 'Please write exactly like this.', vi: 'Hãy viết đúng như thế này.' },
          ruby: [{ base: '書', reading: 'か' }]
        }
      ]
    },
    {
      pattern: 'N の／V-た あとで、V',
      highlights: ['あと', 'で'],
      title: { en: 'After something (〜あとで)', vi: 'Sau khi (〜あとで)' },
      explanation: {
        en: 'V-た or N の + あとで shows V2 happens after V1 or N. Unlike 〜てから, it only marks order - not that the first action is a necessary preparation.',
        vi: 'V-た hoặc N の + あとで cho biết V2 xảy ra sau V1 hoặc N. Khác 〜てから, chỉ đánh dấu thứ tự - không nhấn mạnh V1 là điều kiện chuẩn bị.'
      },
      examples: [
        {
          jp: '仕事の あとで、飲みに 行きませんか。',
          romaji: 'Shigoto no ato de, nomi ni ikimasen ka.',
          meaning: {
            en: 'Shall we go for a drink after work?',
            vi: 'Sau khi xong việc anh/chị có đi uống với tôi không?'
          },
          ruby: [
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '飲', reading: 'の' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '食事の あとで、歯を 磨きます。',
          romaji: 'Shokuji no ato de, ha o migakimasu.',
          meaning: { en: 'I brush my teeth after meals.', vi: 'Sau khi ăn cơm tôi đánh răng.' },
          ruby: [
            { base: '食', reading: 'しょく' },
            { base: '事', reading: 'じ' },
            { base: '歯', reading: 'は' },
            { base: '磨', reading: 'みが' }
          ]
        },
        {
          jp: '新しい のを 買った あとで、なくした 時計が 見つかりました。',
          romaji: 'Atarashii no o katta ato de, nakushita tokei ga mitsukarimashita.',
          meaning: {
            en: 'After buying a new one, I found the watch I had lost.',
            vi: 'Sau khi mua cái mới thì tôi tìm thấy đồng hồ đã mất.'
          },
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '買', reading: 'か' },
            { base: '時', reading: 'と' },
            { base: '計', reading: 'けい' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          jp: 'しょうゆは 砂糖を 入れた あとで、入れるんですよ。',
          romaji: 'Shōyu wa satō o ireta ato de, ireru n desu yo.',
          meaning: {
            en: 'You add soy sauce after putting in sugar.',
            vi: 'Xì dầu thì cho vào sau khi đã cho đường.'
          },
          ruby: [
            { base: '砂', reading: 'さ' },
            { base: '糖', reading: 'とう' },
            { base: '入', reading: 'い' },
            { base: '入', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て ＋ V',
      highlights: ['て'],
      title: { en: 'Accompanying action (V-て + V)', vi: 'Hành động kèm theo (V-て + V)' },
      explanation: {
        en: 'V1-て V2 shows V2 done with V1 as an accompanying action or state. The subject of both verbs is the same: しょうゆを つけて 食べます.',
        vi: 'V1-て V2 cho biết V2 được thực hiện kèm hành động hoặc trạng thái V1. Chủ thể của cả hai động từ giống nhau: しょうゆを つけて 食べます.'
      },
      explanationRuby: [{ base: '食', reading: 'た' }],
      examples: [
        {
          jp: 'しょうゆを つけて 食べます。',
          romaji: 'Shōyu o tsukete tabemasu.',
          meaning: { en: 'I eat it with soy sauce.', vi: 'Tôi chấm xì dầu rồi ăn.' },
          ruby: [{ base: '食', reading: 'た' }]
        },
        {
          jp: '砂糖を 入れて 飲みます。',
          romaji: 'Satō o irete nomimasu.',
          meaning: { en: 'I drink it with sugar added.', vi: 'Tôi cho đường vào rồi uống.' },
          ruby: [
            { base: '砂', reading: 'さ' },
            { base: '糖', reading: 'とう' },
            { base: '入', reading: 'い' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          jp: 'シートベルトを して 運転します。',
          romaji: 'Shīto beruto o shite unten shimasu.',
          meaning: { en: 'I drive with my seat belt on.', vi: 'Tôi thắt dây an toàn rồi lái xe.' },
          ruby: [
            { base: '運', reading: 'うん' },
            { base: '転', reading: 'てん' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ないで ＋ V',
      highlights: ['ない', 'で'],
      title: { en: 'Without doing (V-ないで + V)', vi: 'Không làm mà (V-ないで + V)' },
      explanation: {
        en: 'V-ないで V2 means doing V2 without V1, or choosing V2 instead of V1 when both cannot happen at once: どこも 行かないで、うちで 休みます.',
        vi: 'V-ないで V2 nghĩa là làm V2 mà không làm V1, hoặc chọn V2 thay V1 khi không thể làm đồng thời: どこも 行かないで、うちで 休みます.'
      },
      explanationRuby: [
        { base: '行', reading: 'い' },
        { base: '休', reading: 'やす' }
      ],
      examples: [
        {
          jp: 'しょうゆを つけないで 食べます。',
          romaji: 'Shōyu o tsukenai de tabemasu.',
          meaning: { en: 'I eat it without soy sauce.', vi: 'Tôi ăn mà không chấm xì dầu.' },
          ruby: [{ base: '食', reading: 'た' }]
        },
        {
          jp: '砂糖を 入れないで 飲みます。',
          romaji: 'Satō o irenai de nomimasu.',
          meaning: { en: 'I drink it without sugar.', vi: 'Tôi uống mà không cho đường.' },
          ruby: [
            { base: '砂', reading: 'さ' },
            { base: '糖', reading: 'とう' },
            { base: '入', reading: 'い' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          jp: '日曜日は どこも 行かないで、うちで ゆっくり 休みます。',
          romaji: 'Nichiyōbi wa doko mo ikanai de, uchi de yukkuri yasumimasu.',
          meaning: {
            en: 'On Sundays I stay home and rest without going anywhere.',
            vi: 'Chủ nhật tôi không đi đâu mà ở nhà nghỉ ngơi.'
          },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '行', reading: 'い' },
            { base: '休', reading: 'やす' }
          ]
        },
        {
          jp: '最近 エレベーターに 乗らないで、階段を 使って います。',
          romaji: 'Saikin erebētā ni noranai de, kaidan o tsukatte imasu.',
          meaning: {
            en: 'Lately I use the stairs without taking the elevator.',
            vi: 'Gần đây tôi không đi thang máy mà đi cầu thang bộ.'
          },
          ruby: [
            { base: '最', reading: 'さい' },
            { base: '近', reading: 'きん' },
            { base: '乗', reading: 'の' },
            { base: '階', reading: 'かい' },
            { base: '段', reading: 'だん' },
            { base: '使', reading: 'つか' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson34-oyakodon',
      title: { en: 'Making oyakodon', vi: 'Nấu oyakodon' },
      lines: [
        {
          jp: '今日は 親子どんぶりを 作ります。材料は 鶏肉 200グラム、玉ねぎ 1個、卵 3個 です。',
          romaji:
            'Kyō wa oyako donburi o tsukurimasu. Zairyō wa toriniku ni-hyaku guramu, tamanegi ikko, tamago san-ko desu.',
          meaning: {
            en: 'Today I will make oyakodon. The ingredients are 200 grams of chicken, one onion, and three eggs.',
            vi: 'Hôm nay tôi nấu oyakodon. Nguyên liệu gồm 200 gam thịt gà, 1 củ hành tây và 3 quả trứng.'
          },
          ruby: [
            { base: '今日', reading: 'きょう' },
            { base: '親', reading: 'おや' },
            { base: '子', reading: 'こ' },
            { base: '作', reading: 'つく' },
            { base: '材', reading: 'ざい' },
            { base: '料', reading: 'りょう' },
            { base: '鶏', reading: 'とり' },
            { base: '肉', reading: 'にく' },
            { base: '玉', reading: 'たま' },
            { base: '個', reading: 'こ' },
            { base: '卵', reading: 'たまご' },
            { base: '個', reading: 'こ' }
          ]
        },
        {
          jp: '鶏肉と 玉ねぎを 適当な 大きさに 切って、なべに 入れます。',
          romaji: 'Toriniku to tamanegi o tekitō na ōkisa ni kitte, nabe ni iremasu.',
          meaning: {
            en: 'Cut the chicken and onion into suitable pieces and put them in a pot.',
            vi: 'Thái gà và hành tây vừa miệng, cho vào nồi.'
          },
          ruby: [
            { base: '鶏', reading: 'とり' },
            { base: '肉', reading: 'にく' },
            { base: '玉', reading: 'たま' },
            { base: '適', reading: 'てき' },
            { base: '当', reading: 'とう' },
            { base: '大', reading: 'おお' },
            { base: '切', reading: 'き' },
            { base: '入', reading: 'い' }
          ]
        },
        {
          jp: '調味料を 入れて 火に かけ、煮えたら 卵を 入れて ください。',
          romaji: 'Chōmiryō o irete hi ni kake, nieta ra tamago o irete kudasai.',
          meaning: {
            en: 'Add seasonings, put it on the heat, and when it boils add the eggs.',
            vi: 'Cho gia vị, bắc lên bếp, khi chín thì cho trứng vào.'
          },
          ruby: [
            { base: '調', reading: 'ちょう' },
            { base: '味', reading: 'み' },
            { base: '料', reading: 'りょう' },
            { base: '入', reading: 'い' },
            { base: '火', reading: 'ひ' },
            { base: '煮', reading: 'に' },
            { base: '卵', reading: 'たまご' },
            { base: '入', reading: 'い' }
          ]
        },
        {
          jp: 'ご飯の 上に 載せて、どんぶりで 食べます。',
          romaji: 'Gohan no ue ni nosete, donburi de tabemasu.',
          meaning: {
            en: 'Place it on rice and eat from a large bowl.',
            vi: 'Để lên cơm và ăn bằng bát tô lớn.'
          },
          ruby: [
            { base: '飯', reading: 'はん' },
            { base: '上', reading: 'うえ' },
            { base: '載', reading: 'の' },
            { base: '食', reading: 'た' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'How much chicken does the recipe use?',
            vi: 'Công thức dùng bao nhiêu gam thịt gà?'
          },
          choices: [
            { id: 'a', label: { en: '200 grams', vi: '200 gam' } },
            { id: 'b', label: { en: '100 grams', vi: '100 gam' } },
            { id: 'c', label: { en: '300 grams', vi: '300 gam' } },
            { id: 'd', label: { en: '400 grams', vi: '400 gam' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'When should you add the eggs?',
            vi: 'Khi nào cho trứng vào?'
          },
          choices: [
            { id: 'a', label: { en: 'After it boils', vi: 'Sau khi chín' } },
            { id: 'b', label: { en: 'Before cooking', vi: 'Trước khi nấu' } },
            { id: 'c', label: { en: 'Before adding seasonings', vi: 'Trước khi cho gia vị' } },
            { id: 'd', label: { en: 'After serving on rice', vi: 'Sau khi để lên cơm' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q3',
          question: {
            en: 'What bowl is used to eat the dish?',
            vi: 'Ăn bằng loại bát nào?'
          },
          choices: [
            { id: 'a', label: { en: 'A large donburi bowl', vi: 'Bát tô lớn (donburi)' } },
            { id: 'b', label: { en: 'A tea bowl', vi: 'Chén trà' } },
            { id: 'c', label: { en: 'A small cup', vi: 'Cốc nhỏ' } },
            { id: 'd', label: { en: 'A frying pan', vi: 'Chảo rán' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Cooking verbs', vi: 'Động từ nấu ăn' },
      includeInQuiz: false,
      items: [
        {
          kana: 'にる',
          kanji: '煮る',
          romaji: 'niru',
          meaning: { en: 'to boil, simmer', vi: 'nấu, om' },
          ruby: [{ base: '煮', reading: 'に' }]
        },
        {
          kana: 'やく',
          kanji: '焼く',
          romaji: 'yaku',
          meaning: { en: 'to grill, bake, fry', vi: 'nướng, rán' },
          ruby: [{ base: '焼', reading: 'や' }]
        },
        {
          kana: 'あげる',
          kanji: '揚げる',
          romaji: 'ageru',
          meaning: { en: 'to deep-fry', vi: 'chiên' },
          ruby: [{ base: '揚', reading: 'あ' }]
        },
        {
          kana: 'いためる',
          kanji: '炒める',
          romaji: 'itameru',
          meaning: { en: 'to stir-fry', vi: 'xào' },
          ruby: [{ base: '炒', reading: 'いた' }]
        },
        {
          kana: 'ゆでる',
          romaji: 'yuderu',
          meaning: { en: 'to boil (vegetables, eggs)', vi: 'luộc' }
        },
        {
          kana: 'むす',
          kanji: '蒸す',
          romaji: 'musu',
          meaning: { en: 'to steam', vi: 'hấp' },
          ruby: [{ base: '蒸', reading: 'む' }]
        },
        {
          kana: 'たく',
          kanji: '炊く',
          romaji: 'taku',
          meaning: { en: 'to cook (rice)', vi: 'nấu cơm' },
          ruby: [{ base: '炊', reading: 'た' }]
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Seasonings', vi: 'Gia vị' },
      includeInQuiz: false,
      items: [
        {
          kana: 'さとう',
          kanji: '砂糖',
          romaji: 'satō',
          meaning: { en: 'sugar', vi: 'đường' },
          ruby: [
            { base: '砂', reading: 'さ' },
            { base: '糖', reading: 'とう' }
          ]
        },
        {
          kana: 'しお',
          kanji: '塩',
          romaji: 'shio',
          meaning: { en: 'salt', vi: 'muối' },
          ruby: [{ base: '塩', reading: 'しお' }]
        },
        {
          kana: 'す',
          kanji: '酢',
          romaji: 'su',
          meaning: { en: 'vinegar', vi: 'giấm' },
          ruby: [{ base: '酢', reading: 'す' }]
        },
        {
          kana: 'みそ',
          romaji: 'miso',
          meaning: { en: 'miso', vi: 'miso (tương Nhật)' }
        },
        {
          kana: 'あぶら',
          kanji: '油',
          romaji: 'abura',
          meaning: { en: 'cooking oil', vi: 'dầu ăn' },
          ruby: [{ base: '油', reading: 'あぶ' }]
        }
      ]
    }
  ]
};
