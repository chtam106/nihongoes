import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 42 (〜ために, 〜のに, quantifier は/も, 〜によって). */
export const n4Lesson42: Lesson = {
  id: 'lesson-42',
  number: 42,
  title: {
    en: 'Purpose and use',
    vi: 'Mục đích và công dụng'
  },
  focus: {
    en: 'State purpose with 〜ために, describe use or suitability with 〜のに, add nuance with quantifier は/も, and mark a passive agent with 〜によって.',
    vi: 'Nói mục đích với 〜ために, mô tả công dụng/phù hợp với 〜のに, nhấn mức lượng với は/も, và chỉ tác nhân bị động với 〜によって.'
  },
  vocab: [
    {
      kana: 'つつみます',
      kanji: '包みます',
      romaji: 'tsutsumimasu',
      meaning: { en: 'to wrap', vi: 'gói' },
      ruby: [{ base: '包', reading: 'つつ' }]
    },
    {
      kana: 'わかします',
      kanji: '沸かします',
      romaji: 'wakashimasu',
      meaning: { en: 'to boil (water)', vi: 'đun sôi' },
      ruby: [{ base: '沸', reading: 'わ' }]
    },
    {
      kana: 'まぜます',
      kanji: '混ぜます',
      romaji: 'mazemasu',
      meaning: { en: 'to mix', vi: 'trộn' },
      ruby: [{ base: '混', reading: 'ま' }]
    },
    {
      kana: 'けいさんします',
      kanji: '計算します',
      romaji: 'keisan shimasu',
      meaning: { en: 'to calculate', vi: 'tính, tính toán' },
      ruby: [
        { base: '計', reading: 'けい' },
        { base: '算', reading: 'さん' }
      ]
    },
    {
      kana: 'ならびます',
      kanji: '並びます',
      romaji: 'narabimasu',
      meaning: { en: 'to line up, to queue', vi: 'xếp hàng' },
      ruby: [{ base: '並', reading: 'なら' }]
    },
    {
      kana: 'じょうぶ[な]',
      kanji: '丈夫[な]',
      romaji: 'jōbu [na]',
      meaning: { en: 'sturdy, durable', vi: 'chắc chắn' },
      ruby: [{ base: '丈', reading: 'じょう' }]
    },
    {
      kana: 'アパート',
      romaji: 'apāto',
      meaning: { en: 'apartment (room)', vi: 'phòng trọ' }
    },
    {
      kana: 'べんごし',
      kanji: '弁護士',
      romaji: 'bengoshi',
      meaning: { en: 'lawyer', vi: 'luật sư' },
      ruby: [
        { base: '弁', reading: 'べん' },
        { base: '護', reading: 'ご' },
        { base: '士', reading: 'し' }
      ]
    },
    {
      kana: 'おんがくか',
      kanji: '音楽家',
      romaji: 'ongakuka',
      meaning: { en: 'musician', vi: 'nhạc sĩ, người hoạt động trong lĩnh vực âm nhạc' },
      ruby: [
        { base: '音', reading: 'おん' },
        { base: '楽', reading: 'がく' },
        { base: '家', reading: 'か' }
      ]
    },
    {
      kana: 'こどもたち',
      kanji: '子どもたち',
      romaji: 'kodomotachi',
      meaning: { en: 'children', vi: 'những đứa trẻ, bọn trẻ' },
      ruby: [{ base: '子', reading: 'こ' }]
    },
    {
      kana: 'しぜん',
      kanji: '自然',
      romaji: 'shizen',
      meaning: { en: 'nature', vi: 'tự nhiên' },
      ruby: [
        { base: '自', reading: 'し' },
        { base: '然', reading: 'ぜん' }
      ]
    },
    {
      kana: 'きょういく',
      kanji: '教育',
      romaji: 'kyōiku',
      meaning: { en: 'education', vi: 'giáo dục' },
      ruby: [
        { base: '教', reading: 'きょう' },
        { base: '育', reading: 'いく' }
      ]
    },
    {
      kana: 'ぶんか',
      kanji: '文化',
      romaji: 'bunka',
      meaning: { en: 'culture', vi: 'văn hóa' },
      ruby: [
        { base: '文', reading: 'ぶん' },
        { base: '化', reading: 'か' }
      ]
    },
    {
      kana: 'しゃかい',
      kanji: '社会',
      romaji: 'shakai',
      meaning: { en: 'society', vi: 'xã hội' },
      ruby: [
        { base: '社', reading: 'しゃ' },
        { base: '会', reading: 'かい' }
      ]
    },
    {
      kana: 'せいじ',
      kanji: '政治',
      romaji: 'seiji',
      meaning: { en: 'politics', vi: 'chính trị' },
      ruby: [
        { base: '政', reading: 'せい' },
        { base: '治', reading: 'じ' }
      ]
    },
    {
      kana: 'ほうりつ',
      kanji: '法律',
      romaji: 'hōritsu',
      meaning: { en: 'law', vi: 'pháp luật' },
      ruby: [
        { base: '法', reading: 'ほう' },
        { base: '律', reading: 'りつ' }
      ]
    },
    {
      kana: 'せんそう',
      kanji: '戦争',
      romaji: 'sensō',
      meaning: { en: 'war', vi: 'chiến tranh' },
      ruby: [
        { base: '戦', reading: 'せん' },
        { base: '争', reading: 'そう' }
      ]
    },
    {
      kana: 'へいわ',
      kanji: '平和',
      romaji: 'heiwa',
      meaning: { en: 'peace', vi: 'hòa bình' },
      ruby: [
        { base: '平', reading: 'へい' },
        { base: '和', reading: 'わ' }
      ]
    },
    {
      kana: 'もくてき',
      kanji: '目的',
      romaji: 'mokuteki',
      meaning: { en: 'purpose, goal', vi: 'mục đích' },
      ruby: [
        { base: '目', reading: 'もく' },
        { base: '的', reading: 'てき' }
      ]
    },
    {
      kana: 'ろんぶん',
      kanji: '論文',
      romaji: 'ronbun',
      meaning: { en: 'thesis, dissertation', vi: 'luận văn' },
      ruby: [
        { base: '論', reading: 'ろん' },
        { base: '文', reading: 'ぶん' }
      ]
    },
    {
      kana: 'たのしみ',
      kanji: '楽しみ',
      romaji: 'tanoshimi',
      meaning: { en: 'pleasure, something to look forward to', vi: 'niềm vui' },
      ruby: [{ base: '楽', reading: 'たの' }]
    },
    {
      kana: 'ミキサー',
      romaji: 'mikisā',
      meaning: { en: 'mixer, blender', vi: 'máy xay' }
    },
    {
      kana: 'やかん',
      romaji: 'yakan',
      meaning: { en: 'kettle', vi: 'ấm đun nước' }
    },
    {
      kana: 'ふた',
      romaji: 'futa',
      meaning: { en: 'lid', vi: 'nắp' }
    },
    {
      kana: 'せんぬき',
      kanji: '栓抜き',
      romaji: 'sennuki',
      meaning: { en: 'bottle opener', vi: 'cái bật nắp chai' },
      ruby: [
        { base: '栓', reading: 'せん' },
        { base: '抜', reading: 'ぬ' }
      ]
    },
    {
      kana: 'かんきり',
      kanji: '缶切り',
      romaji: 'kankiri',
      meaning: { en: 'can opener', vi: 'cái mở nắp hộp' },
      ruby: [
        { base: '缶', reading: 'かん' },
        { base: '切', reading: 'き' }
      ]
    },
    {
      kana: 'かんづめ',
      kanji: '缶詰',
      romaji: 'kandzume',
      meaning: { en: 'canned food', vi: 'đồ hộp, thực phẩm đóng hộp' },
      ruby: [
        { base: '缶', reading: 'かん' },
        { base: '詰', reading: 'づ' }
      ]
    },
    {
      kana: 'のしぶくろ',
      kanji: 'のし袋',
      romaji: 'noshibukuro',
      meaning: { en: 'gift-money envelope', vi: 'phong bì dùng để bỏ tiền mừng' },
      ruby: [{ base: '袋', reading: 'ぶくろ' }]
    },
    {
      kana: 'ふろしき',
      romaji: 'furoshiki',
      meaning: { en: 'furoshiki (wrapping cloth)', vi: 'khăn vuông để gói đồ kiểu Nhật' }
    },
    {
      kana: 'そろばん',
      romaji: 'soroban',
      meaning: { en: 'abacus', vi: 'bàn tính' }
    },
    {
      kana: 'たいおんけい',
      kanji: '体温計',
      romaji: 'taionkei',
      meaning: { en: 'thermometer', vi: 'nhiệt kế' },
      ruby: [
        { base: '体', reading: 'たい' },
        { base: '温', reading: 'おん' },
        { base: '計', reading: 'けい' }
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
      kana: 'ある～',
      romaji: 'aru ~',
      meaning: { en: 'a certain ~', vi: 'một ~ nọ' }
    },
    {
      kana: 'いっしょうけんめい',
      kanji: '一生懸命',
      romaji: 'isshōkenmei',
      meaning: { en: "diligently, with all one's effort", vi: 'chăm chỉ, gắng hết sức' },
      ruby: [
        { base: '一', reading: 'いっ' },
        { base: '生', reading: 'しょう' },
        { base: '懸', reading: 'けん' },
        { base: '命', reading: 'めい' }
      ]
    },
    {
      kana: 'なぜ',
      romaji: 'naze',
      meaning: { en: 'why', vi: 'tại sao' }
    },
    {
      kana: 'どのくらい',
      romaji: 'dono kurai',
      meaning: { en: 'how much, how long', vi: 'bao nhiêu' }
    },
    {
      kana: 'でます',
      kanji: '出ます',
      romaji: 'demasu',
      meaning: { en: 'to be paid out [ボーナスが～: bonus]', vi: 'có [thưởng]' },
      ruby: [{ base: '出', reading: 'で' }]
    },
    {
      kana: 'はんぶん',
      kanji: '半分',
      romaji: 'hanbun',
      meaning: { en: 'half', vi: 'một nửa' },
      ruby: [
        { base: '半', reading: 'はん' },
        { base: '分', reading: 'ぶん' }
      ]
    },
    {
      kana: 'ローン',
      romaji: 'rōn',
      meaning: { en: 'loan', vi: 'khoản vay ngân hàng' }
    },
    {
      kana: 'カップめん',
      romaji: 'kappumen',
      meaning: { en: 'cup noodles', vi: 'mì ly (mì ăn liền để ở trong ly dùng một lần)' }
    },
    {
      kana: 'せかいはつ',
      kanji: '世界初',
      romaji: 'sekai hatsu',
      meaning: { en: "world's first", vi: 'đầu tiên trên thế giới' },
      ruby: [
        { base: '世', reading: 'せ' },
        { base: '界', reading: 'かい' },
        { base: '初', reading: 'はつ' }
      ]
    },
    {
      kana: '～によって',
      romaji: '~ni yotte',
      meaning: { en: 'by ~ (passive agent for creation/invention)', vi: 'bởi ~' }
    },
    {
      kana: 'どんぶり',
      romaji: 'donburi',
      meaning: { en: 'large bowl', vi: 'bát tô lớn' }
    },
    {
      kana: 'めん',
      romaji: 'men',
      meaning: { en: 'noodles', vi: 'mì sợi' }
    },
    {
      kana: 'ひろめます',
      kanji: '広めます',
      romaji: 'hiromemasu',
      meaning: { en: 'to spread, to promote', vi: 'phổ cập, nhân rộng, mở rộng' },
      ruby: [{ base: '広', reading: 'ひろ' }]
    },
    {
      kana: 'しじょうちょうさ',
      kanji: '市場調査',
      romaji: 'shijō chōsa',
      meaning: { en: 'market research', vi: 'điều tra thị trường' },
      ruby: [
        { base: '市', reading: 'し' },
        { base: '場', reading: 'じょう' },
        { base: '調', reading: 'ちょう' },
        { base: '査', reading: 'さ' }
      ]
    },
    {
      kana: 'わります',
      kanji: '割ります',
      romaji: 'warimasu',
      meaning: { en: 'to break, to divide', vi: 'bẻ ra, chia nhỏ ra' },
      ruby: [{ base: '割', reading: 'わ' }]
    },
    {
      kana: 'そそぎます',
      kanji: '注ぎます',
      romaji: 'sosogimasu',
      meaning: { en: 'to pour', vi: 'đổ vào' },
      ruby: [{ base: '注', reading: 'そそ' }]
    }
  ],
  phrases: [],
  conversation: [
    {
      id: 'conv-lesson42-bonus',
      title: { en: 'What will you use the bonus for?', vi: 'Anh sẽ dùng tiền thưởng vào việc gì?' },
      speakers: [
        { id: 'suzuki', name: '鈴木' },
        { id: 'hayashi', name: '林' },
        { id: 'ogawa', name: '小川' }
      ],
      lines: [
        {
          speakerId: 'suzuki',
          jp: '林さん、ボーナスは いつ 出ますか。',
          romaji: 'Hayashi-san, bōnasu wa itsu demasu ka.',
          meaning: {
            en: 'Ms. Hayashi, when do you get your bonus?',
            vi: 'Chị Hayashi ơi, bao giờ thì chị có tiền thưởng?'
          },
          ruby: [
            { base: '林', reading: 'はやし' },
            { base: '出', reading: 'で' }
          ]
        },
        {
          speakerId: 'hayashi',
          jp: '来週です。鈴木さんの 会社は どうですか。',
          romaji: 'Raishū desu. Suzuki-san no kaisha wa dō desu ka.',
          meaning: {
            en: 'Next week. How about your company, Mr. Suzuki?',
            vi: 'Tuần sau. Còn công ty của anh Suzuki thì thế nào?'
          },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '鈴', reading: 'すず' },
            { base: '木', reading: 'き' },
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' }
          ]
        },
        {
          speakerId: 'suzuki',
          jp: '明日です。楽しみですね。',
          romaji: 'Ashita desu. Tanoshimi desu ne.',
          meaning: { en: 'Tomorrow. Looking forward to it.', vi: 'Ngày mai. Mong phết nhỉ.' },
          ruby: [
            { base: '明', reading: 'あ' },
            { base: '日', reading: 'し' },
            { base: '楽', reading: 'たの' }
          ]
        },
        {
          speakerId: 'hayashi',
          jp: 'そうですね。鈴木さんは 何に 使いますか。',
          romaji: 'Sō desu ne. Suzuki-san wa nani ni tsukaimasu ka.',
          meaning: {
            en: 'I see. What will you use it for, Mr. Suzuki?',
            vi: 'Vâng. Thế anh Suzuki sẽ dùng vào việc gì?'
          },
          ruby: [
            { base: '鈴', reading: 'すず' },
            { base: '木', reading: 'き' },
            { base: '何', reading: 'なに' },
            { base: '使', reading: 'つか' }
          ]
        },
        {
          speakerId: 'suzuki',
          jp: 'まず 自転車を 買います。それから 旅行に 行きます……。',
          romaji: 'Mazu jitensha o kaimasu. Sorekara ryokō ni ikimasu…….',
          meaning: {
            en: 'First I will buy a bicycle, then go traveling...',
            vi: 'Trước hết tôi sẽ mua một chiếc xe đạp, sau đó sẽ đi du lịch...'
          },
          ruby: [
            { base: '自', reading: 'じ' },
            { base: '転', reading: 'てん' },
            { base: '車', reading: 'しゃ' },
            { base: '買', reading: 'か' },
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'ogawa',
          jp: '貯金しないんですか。',
          romaji: 'Chokin shinai n desu ka.',
          meaning: { en: "Aren't you saving money?", vi: 'Anh không để dành tiền à?' },
          ruby: [{ base: '貯', reading: 'ちょ' }]
        },
        {
          speakerId: 'suzuki',
          jp: 'あまり 貯金の ことは 考えません。',
          romaji: 'Amari chokin no koto wa kangaemasen.',
          meaning: {
            en: 'I rarely think about saving.',
            vi: 'Tôi ít khi nghĩ tới chuyện để dành.'
          },
          ruby: [
            { base: '貯', reading: 'ちょ' },
            { base: '考', reading: 'かんが' }
          ]
        },
        {
          speakerId: 'hayashi',
          jp: '私は 半分 貯金する つもりです。',
          romaji: 'Watashi wa hanbun chokin suru tsumori desu.',
          meaning: { en: 'I plan to save half.', vi: 'Tôi thì định sẽ để dành một nửa.' },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '半', reading: 'はん' },
            { base: '分', reading: 'ぶん' },
            { base: '貯', reading: 'ちょ' }
          ]
        },
        {
          speakerId: 'suzuki',
          jp: 'えっ、半分も 貯金するんですか。',
          romaji: 'E, hanbun mo chokin suru n desu ka.',
          meaning: {
            en: "Huh? You're saving as much as half?!",
            vi: 'Hả..., chị để dành đến một nửa luôn á?'
          },
          ruby: [
            { base: '半', reading: 'はん' },
            { base: '分', reading: 'ぶん' },
            { base: '貯', reading: 'ちょ' }
          ]
        },
        {
          speakerId: 'hayashi',
          jp: 'はい。いつか イギリスに 留学する ために です。',
          romaji: 'Hai. Itsuka Igirisu ni ryūgaku suru tame ni desu.',
          meaning: {
            en: 'Yes. Because I plan to study abroad in England someday.',
            vi: 'Vâng, vì tôi đang định lúc nào đó sẽ đi du học ở Anh.'
          },
          ruby: [{ base: '留', reading: 'りゅう' }]
        },
        {
          speakerId: 'ogawa',
          jp: '独身は いいですね。全部 自分の ために 使えますね。',
          romaji: 'Dokushin wa ii desu ne. Zenbu jibun no tame ni tsukaemasu ne.',
          meaning: {
            en: 'Single life is nice. You can use all your money for yourself.',
            vi: 'Ồ, người độc thân sướng nhỉ. Có thể dùng tất cả tiền cho bản thân mình.'
          },
          ruby: [
            { base: '独', reading: 'どく' },
            { base: '身', reading: 'しん' },
            { base: '全', reading: 'ぜん' },
            { base: '部', reading: 'ぶ' },
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' },
            { base: '使', reading: 'つか' }
          ]
        },
        {
          speakerId: 'ogawa',
          jp: '私は 住宅ローンを 払って、子どもの 教育費も 貯金しなければ なりません。ほとんど 残りませんよ。',
          romaji:
            'Watashi wa jūtaku rōn o haratte, kodomo no kyōikihi mo chokin shinakereba narimasen. Hotondo nokorimasen yo.',
          meaning: {
            en: "I have to pay the mortgage and save for my children's education, so almost nothing is left.",
            vi: 'Tôi thì phải trả tiền trả góp mua nhà, rồi phải để dành tiền chi phí cho việc học hành của con, hầu như chẳng còn lại tí nào cả.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '住', reading: 'じゅう' },
            { base: '宅', reading: 'たく' },
            { base: '払', reading: 'はら' },
            { base: '子', reading: 'こ' },
            { base: '教', reading: 'きょう' },
            { base: '育', reading: 'いく' },
            { base: '費', reading: 'ひ' },
            { base: '貯', reading: 'ちょ' },
            { base: '残', reading: 'のこ' }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-dict / N の ＋ ために、～',
      highlights: ['ために'],
      title: { en: 'Purpose (〜ために)', vi: 'Mục đích (〜ために)' },
      explanation: {
        en: 'V-dictionary form or N+の + ために expresses purpose: "in order to ~", "for ~". N+のために can also mean "for the benefit of N". Compare with 〜ように (Lesson 36): ために before volitional verbs; ように before non-volitional or potential forms.',
        vi: 'Thể từ điển hoặc N+の + ために biểu thị mục đích: "để ~", "vì ~". N+のために còn có nghĩa "vì lợi ích của N". So với 〜ように (Bài 36): ために đứng trước động từ chủ ý; ように trước động từ phi chủ ý hoặc thể khả năng.'
      },
      explanationRuby: [
        { base: '自', reading: 'じ' },
        { base: '分', reading: 'ぶん' },
        { base: '店', reading: 'みせ' },
        { base: '持', reading: 'も' },
        { base: '貯', reading: 'ちょ' },
        { base: '引', reading: 'ひ' },
        { base: '越', reading: 'こ' },
        { base: '車', reading: 'くる' },
        { base: '借', reading: 'か' },
        { base: '健', reading: 'けん' },
        { base: '康', reading: 'こう' },
        { base: '毎', reading: 'まい' },
        { base: '朝', reading: 'あさ' },
        { base: '走', reading: 'はし' },
        { base: '家', reading: 'か' },
        { base: '族', reading: 'ぞく' },
        { base: '建', reading: 'た' },
        { base: '弁', reading: 'べん' },
        { base: '護', reading: 'ご' },
        { base: '士', reading: 'し' },
        { base: '法', reading: 'ほう' },
        { base: '律', reading: 'りつ' },
        { base: '勉', reading: 'べん' },
        { base: '強', reading: 'きょう' },
        { base: '日', reading: 'に' },
        { base: '本', reading: 'ほん' },
        { base: '語', reading: 'ご' },
        { base: '上', reading: 'じょう' },
        { base: '手', reading: 'ず' },
        { base: '毎', reading: 'まい' },
        { base: '日', reading: 'にち' }
      ],
      examples: [
        {
          jp: '私は 自分の 店を 持つ ために、貯金 しています。',
          romaji: 'Watashi wa jibun no mise o motsu tame ni, chokin shite imasu.',
          meaning: {
            en: 'I am saving money in order to open my own shop.',
            vi: 'Tôi để dành tiền để mở cửa hàng riêng của mình.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '自', reading: 'じ' },
            { base: '分', reading: 'ぶん' },
            { base: '店', reading: 'みせ' },
            { base: '持', reading: 'も' },
            { base: '貯', reading: 'ちょ' }
          ]
        },
        {
          jp: '引っ越しの ために、車を 借ります。',
          romaji: 'Hikkoshi no tame ni, kuruma o karimasu.',
          meaning: { en: 'I will borrow a car to move house.', vi: 'Tôi mượn ô-tô để chuyển nhà.' },
          ruby: [
            { base: '引', reading: 'ひ' },
            { base: '越', reading: 'こ' },
            { base: '車', reading: 'くる' },
            { base: '借', reading: 'か' }
          ]
        },
        {
          jp: '健康の ために、毎朝 走って います。',
          romaji: 'Kenkō no tame ni, maiasa hashitte imasu.',
          meaning: {
            en: 'I run every morning for my health.',
            vi: 'Tôi chạy hàng sáng vì sức khỏe.'
          },
          ruby: [
            { base: '健', reading: 'けん' },
            { base: '康', reading: 'こう' },
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '走', reading: 'はし' }
          ]
        },
        {
          jp: '家族の ために、うちを 建てます。',
          romaji: 'Kazoku no tame ni, uchi o tatemasu.',
          meaning: { en: 'I will build a house for my family.', vi: 'Tôi xây nhà cho gia đình.' },
          ruby: [
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '建', reading: 'た' }
          ]
        },
        {
          jp: '弁護士に なる ために、法律を 勉強 しています。',
          romaji: 'Bengoshi ni naru tame ni, hōritsu o benkyō shite imasu.',
          meaning: {
            en: 'I am studying law to become a lawyer.',
            vi: 'Tôi học luật để trở thành luật sư.'
          },
          ruby: [
            { base: '弁', reading: 'べん' },
            { base: '護', reading: 'ご' },
            { base: '士', reading: 'し' },
            { base: '法', reading: 'ほう' },
            { base: '律', reading: 'りつ' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        }
      ]
    },
    {
      pattern: 'V-dict の / N ＋ に ～',
      highlights: ['に'],
      title: {
        en: 'Use or suitability (〜のに / N に)',
        vi: 'Công dụng hoặc phù hợp (〜のに / N に)'
      },
      explanation: {
        en: 'V-dictionary + の or a noun + に marks what something is used for or suited to. Common predicates: 使います, いいです, 便利です, 役に立ちます, 時間/お金が かかります, 適しています.',
        vi: 'V-thể từ điển + の hoặc danh từ + に chỉ mục đích sử dụng hoặc sự phù hợp. Vị ngữ hay gặp: 使います, いいです, 便利です, 役に立ちます, 時間/お金が かかります, 適しています.'
      },
      explanationRuby: [
        { base: '使', reading: 'つか' },
        { base: '便', reading: 'べん' },
        { base: '利', reading: 'り' },
        { base: '役', reading: 'やく' },
        { base: '立', reading: 'た' },
        { base: '時', reading: 'じ' },
        { base: '間', reading: 'かん' },
        { base: '金', reading: 'かね' },
        { base: '適', reading: 'てき' }
      ],
      examples: [
        {
          jp: 'この はさみは 花を 切るのに 使います。',
          romaji: 'Kono hasami wa hana o kiru no ni tsukaimasu.',
          meaning: {
            en: 'These scissors are used for cutting flowers.',
            vi: 'Cái kéo này dùng để cắt hoa.'
          },
          ruby: [
            { base: '花', reading: 'はな' },
            { base: '切', reading: 'き' },
            { base: '使', reading: 'つか' }
          ]
        },
        {
          jp: 'この かばんは 大きくて、旅行に 便利です。',
          romaji: 'Kono kaban wa ōkikute, ryokō ni benri desu.',
          meaning: {
            en: 'This bag is big and convenient for travel.',
            vi: 'Cái túi này to nên rất tiện cho du lịch.'
          },
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '旅', reading: 'りょ' },
            { base: '行', reading: 'こう' },
            { base: '便', reading: 'べん' },
            { base: '利', reading: 'り' }
          ]
        },
        {
          jp: 'この 靴は 山を 歩くのに 適しています。',
          romaji: 'Kono kutsu wa yama o aruku no ni tekishite imasu.',
          meaning: {
            en: 'These shoes are suitable for walking in the mountains.',
            vi: 'Đôi giày này thích hợp cho đi bộ trên núi.'
          },
          ruby: [
            { base: '靴', reading: 'くつ' },
            { base: '山', reading: 'やま' },
            { base: '歩', reading: 'ある' },
            { base: '適', reading: 'てき' }
          ]
        },
        {
          jp: '電話番号を 調べるのに 時間が かかりました。',
          romaji: 'Denwa bangō o shiraberu no ni jikan ga kakarimashita.',
          meaning: {
            en: 'It took time to look up the phone number.',
            vi: 'Tôi đã mất thời gian để tìm số điện thoại.'
          },
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' },
            { base: '番', reading: 'ばん' },
            { base: '号', reading: 'ごう' },
            { base: '調', reading: 'しら' },
            { base: '時', reading: 'じ' },
            { base: '間', reading: 'かん' }
          ]
        }
      ]
    },
    {
      pattern: 'Quantifier ＋ は / も',
      highlights: ['は', 'も'],
      title: { en: 'Quantifier emphasis (は / も)', vi: 'Nhấn mức lượng (は / も)' },
      explanation: {
        en: 'After a quantifier, は marks a minimum amount the speaker emphasizes; も marks that the speaker feels the amount is large: 半分は 貯金する → at least half; 半分も 貯金する → as much as half (surprise).',
        vi: 'Sau lượng từ, は nhấn mức tối thiểu; も thể hiện người nói cảm thấy số lượng lớn: 半分は 貯金する → ít nhất một nửa; 半分も 貯金する → tới nửa luôn (ngạc nhiên).'
      },
      explanationRuby: [
        { base: '半', reading: 'はん' },
        { base: '分', reading: 'ぶん' },
        { base: '貯', reading: 'ちょ' },
        { base: '半', reading: 'はん' },
        { base: '分', reading: 'ぶん' },
        { base: '貯', reading: 'ちょ' }
      ],
      examples: [
        {
          jp: '私は [ボーナスの] 半分は 貯金する つもりです。',
          romaji: 'Watashi wa [bōnasu no] hanbun wa chokin suru tsumori desu.',
          meaning: {
            en: 'I plan to save at least half of my bonus.',
            vi: 'Tôi định để tiết kiệm ít nhất một nửa số tiền thưởng.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '半', reading: 'はん' },
            { base: '分', reading: 'ぶん' },
            { base: '貯', reading: 'ちょ' }
          ]
        },
        {
          jp: '……えっ、半分も 貯金するんですか。',
          romaji: '……E, hanbun mo chokin suru n desu ka.',
          meaning: {
            en: "...Huh? You're saving as much as half?",
            vi: '...Ôi, anh/chị để tiết kiệm một nửa luôn á?'
          },
          ruby: [
            { base: '半', reading: 'はん' },
            { base: '分', reading: 'ぶん' },
            { base: '貯', reading: 'ちょ' }
          ]
        }
      ]
    },
    {
      pattern: 'N ＋ によって',
      highlights: ['によって'],
      title: {
        en: 'Passive agent for creation (〜によって)',
        vi: 'Tác nhân bị động sáng tạo (〜によって)'
      },
      explanation: {
        en: 'With passive verbs of creation or invention (書きます, 発明します, 発見します, etc.), the agent takes によって instead of に: チキンラーメンは 安藤百福によって 発明されました.',
        vi: 'Với động từ bị động biểu thị sáng tạo/phát minh (書きます, 発明します, 発見します, v.v.), tác nhân dùng によって thay cho に.'
      },
      explanationRuby: [
        { base: '書', reading: 'か' },
        { base: '発', reading: 'はつ' },
        { base: '明', reading: 'めい' },
        { base: '発', reading: 'はっ' },
        { base: '見', reading: 'けん' },
        { base: '安', reading: 'あん' },
        { base: '藤', reading: 'どう' },
        { base: '百', reading: 'もも' },
        { base: '福', reading: 'ふく' },
        { base: '発', reading: 'はつ' },
        { base: '明', reading: 'めい' }
      ],
      examples: [
        {
          jp: 'チキンラーメンは 1958年に 安藤百福によって 発明されました。',
          romaji: 'Chikin rāmen wa 1958-nen ni Andō Momofuku ni yotte hatsumei saremashita.',
          meaning: {
            en: 'Chicken Ramen was invented by Momofuku Ando in 1958.',
            vi: 'Ramen vị gà được Ando Momofuku sáng chế ra vào năm 1958.'
          },
          ruby: [
            { base: '年', reading: 'ねん' },
            { base: '安', reading: 'あん' },
            { base: '藤', reading: 'どう' },
            { base: '百', reading: 'もも' },
            { base: '福', reading: 'ふく' },
            { base: '発', reading: 'はつ' },
            { base: '明', reading: 'めい' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson42-cup-noodles',
      title: { en: "The world's first cup noodles", vi: 'Mì ly đầu tiên trên thế giới' },
      lines: [
        {
          jp: '私は 市場調査の 資料で カップめんの 話を 読みました。',
          romaji: 'Watashi wa shijō chōsa no shiryō de kappumen no hanashi o yomimashita.',
          meaning: {
            en: 'I read about cup noodles in market-research materials.',
            vi: 'Tôi đọc câu chuyện về mì ly trong tài liệu điều tra thị trường.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '市', reading: 'し' },
            { base: '場', reading: 'じょう' },
            { base: '調', reading: 'ちょう' },
            { base: '査', reading: 'さ' },
            { base: '料', reading: 'し' },
            { base: '話', reading: 'はな' },
            { base: '読', reading: 'よ' }
          ]
        },
        {
          jp: '世界初の カップめんは 1958年に 安藤百福によって 発明されました。',
          romaji:
            'Sekai hatsu no kappumen wa 1958-nen ni Andō Momofuku ni yotte hatsumei saremashita.',
          meaning: {
            en: "The world's first cup noodles were invented by Momofuku Ando in 1958.",
            vi: 'Mì ly đầu tiên trên thế giới được Ando Momofuku phát minh năm 1958.'
          },
          ruby: [
            { base: '世', reading: 'せ' },
            { base: '界', reading: 'かい' },
            { base: '初', reading: 'はつ' },
            { base: '年', reading: 'ねん' },
            { base: '安', reading: 'あん' },
            { base: '藤', reading: 'どう' },
            { base: '百', reading: 'もも' },
            { base: '福', reading: 'ふく' },
            { base: '発', reading: 'はつ' },
            { base: '明', reading: 'めい' }
          ]
        },
        {
          jp: '彼は 材料を 混ぜて、どんぶりに 注ぎ、世界に 広めました。',
          romaji: 'Kare wa zairyō o mazete, donburi ni sosogi, sekai ni hiromemashita.',
          meaning: {
            en: 'He mixed the ingredients, poured them into a bowl, and spread the product worldwide.',
            vi: 'Ông trộn nguyên liệu, đổ vào bát tô lớn, rồi phổ biến ra thế giới.'
          },
          ruby: [
            { base: '彼', reading: 'かれ' },
            { base: '材', reading: 'ざい' },
            { base: '料', reading: 'りょう' },
            { base: '混', reading: 'ま' },
            { base: '注', reading: 'そそ' },
            { base: '世', reading: 'せ' },
            { base: '界', reading: 'かい' },
            { base: '広', reading: 'ひろ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: "Who invented the world's first cup noodles?",
            vi: 'Ai phát minh mì ly đầu tiên trên thế giới?'
          },
          choices: [
            { id: 'a', label: { en: 'Momofuku Ando', vi: 'Ando Momofuku' } },
            { id: 'b', label: { en: 'Beethoven', vi: 'Beethoven' } },
            { id: 'c', label: { en: 'A lawyer', vi: 'Một luật sư' } },
            { id: 'd', label: { en: 'An astronaut', vi: 'Nhà du hành vũ trụ' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'When were they invented?',
            vi: 'Phát minh năm nào?'
          },
          choices: [
            { id: 'a', label: { en: '1958', vi: '1958' } },
            { id: 'b', label: { en: '1770', vi: '1770' } },
            { id: 'c', label: { en: '1910', vi: '1910' } },
            { id: 'd', label: { en: '2007', vi: '2007' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'vocab',
      title: { en: 'Office supplies and tools', vi: 'Đồ dùng văn phòng và dụng cụ' },
      includeInQuiz: false,
      items: [
        {
          kana: 'ホッチキス',
          romaji: 'hotchikisu',
          meaning: { en: 'stapler', vi: 'cái bấm ghim' }
        },
        {
          kana: 'クリップ',
          romaji: 'kurippu',
          meaning: { en: 'clip (paper/binder clip)', vi: 'cái kẹp' }
        },
        {
          kana: 'がびょう',
          kanji: '画鋲',
          romaji: 'gabyō',
          meaning: { en: 'thumbtack', vi: 'cái đinh bấm, đinh mũ' },
          ruby: [{ base: '画', reading: 'が' }]
        },
        {
          kana: 'カッター',
          romaji: 'kattā',
          meaning: { en: 'box cutter', vi: 'cái dao rọc' }
        },
        {
          kana: 'はさみ',
          romaji: 'hasami',
          meaning: { en: 'scissors', vi: 'cái kéo' }
        },
        {
          kana: 'セロテープ',
          romaji: 'serotēpu',
          meaning: { en: 'scotch tape', vi: 'băng dính trong suốt' }
        },
        {
          kana: 'のり',
          romaji: 'nori',
          meaning: { en: 'glue', vi: 'hồ dán' }
        },
        {
          kana: 'えんぴつけずり',
          kanji: '鉛筆削り',
          romaji: 'enpitsu kezuri',
          meaning: { en: 'pencil sharpener', vi: 'cái gọt bút chì' },
          ruby: [
            { base: '鉛', reading: 'えん' },
            { base: '筆', reading: 'ひつ' },
            { base: '削', reading: 'けず' }
          ]
        },
        {
          kana: 'ファイル',
          romaji: 'fairu',
          meaning: { en: 'file folder', vi: 'cái kẹp tài liệu (file)' }
        },
        {
          kana: 'けしゴム',
          kanji: '消しゴム',
          romaji: 'keshigomu',
          meaning: { en: 'eraser', vi: 'cái tẩy (bằng cao su)' },
          ruby: [{ base: '消', reading: 'け' }]
        },
        {
          kana: 'パンチ',
          romaji: 'panchi',
          meaning: { en: 'hole punch', vi: 'cái bấm lỗ' }
        },
        {
          kana: 'でんたく',
          kanji: '電卓',
          romaji: 'dentaku',
          meaning: { en: 'calculator', vi: 'máy tính' },
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '卓', reading: 'たく' }
          ]
        },
        {
          kana: 'じょうぎ',
          kanji: '定規',
          romaji: 'jōgi',
          meaning: { en: 'ruler', vi: 'cái thước' },
          ruby: [{ base: '定', reading: 'じょう' }]
        },
        {
          kana: 'のこぎり',
          romaji: 'nokogiri',
          meaning: { en: 'saw', vi: 'cái cưa' }
        },
        {
          kana: 'かなづち',
          kanji: '金づち',
          romaji: 'kanazuchi',
          meaning: { en: 'hammer', vi: 'cái búa (bằng kim loại)' },
          ruby: [{ base: '金', reading: 'かな' }]
        },
        {
          kana: 'ペンチ',
          romaji: 'penchi',
          meaning: { en: 'pliers', vi: 'cái kìm' }
        },
        {
          kana: 'ドライバー',
          romaji: 'doraibā',
          meaning: { en: 'screwdriver', vi: 'cái tua-vít, tuốc-nơ-vít' }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Proper nouns', vi: 'Tên riêng' },
      includeInQuiz: false,
      items: [
        {
          kana: 'こくれん',
          kanji: '国連',
          romaji: 'Kokuren',
          meaning: { en: 'United Nations', vi: 'Liên Hợp Quốc' },
          ruby: [
            { base: '国', reading: 'こく' },
            { base: '連', reading: 'れん' }
          ]
        },
        {
          kana: 'ベートーベン',
          romaji: 'Bētōven',
          meaning: {
            en: 'Beethoven (German composer, 1770-1827)',
            vi: 'Beethoven, nhà soạn nhạc người Đức (1770 - 1827)'
          }
        },
        {
          kana: 'あんどう ももふく',
          kanji: '安藤 百福',
          romaji: 'Andō Momofuku',
          meaning: {
            en: 'Momofuku Ando (Japanese businessman and inventor, 1910-2007)',
            vi: 'Nhà kinh doanh, nhà phát minh người Nhật (1910 - 2007)'
          },
          ruby: [
            { base: '安', reading: 'あん' },
            { base: '藤', reading: 'どう' },
            { base: '百', reading: 'もも' },
            { base: '福', reading: 'ふく' }
          ]
        },
        {
          kana: 'こどもニュース',
          romaji: 'Kodomo Nyūsu',
          meaning: {
            en: "Children's News (fictional news program)",
            vi: 'Bản tin thiếu nhi (chương trình tin tức giả định)'
          }
        }
      ]
    }
  ]
};
