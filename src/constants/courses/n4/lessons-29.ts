import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - Lesson 29 (V-ています state, V-てしまいました, それ/その/そう). */
export const n4Lesson29: Lesson = {
  id: 'lesson-29',
  number: 29,
  title: {
    en: 'States and things left behind',
    vi: 'Trạng thái và đồ để quên'
  },
  focus: {
    en: 'Describe resulting states with V-ています, express completion or regret with V-てしまいました, refer back with それ/その/そう, and report discovery with ありました.',
    vi: 'Mô tả trạng thái kết quả với V-ています, hoàn thành hoặc tiếc nuối với V-てしまいました, tham chiếu lại với それ/その/そう, và báo tìm thấy với ありました.'
  },
  vocab: [
    {
      kana: 'あきます',
      kanji: '開きます',
      romaji: 'akimasu',
      meaning: { en: 'to open [ドアが～: a door]', vi: 'mở [ドアが～: cửa]' },
      ruby: [{ base: '開', reading: 'あ' }]
    },
    {
      kana: 'しまります',
      kanji: '閉まります',
      romaji: 'shimarimasu',
      meaning: { en: 'to close, to shut [ドアが～: a door]', vi: 'đóng [ドアが～: cửa]' },
      ruby: [{ base: '閉', reading: 'し' }]
    },
    {
      kana: 'つきます',
      romaji: 'tsukimasu',
      meaning: { en: 'to turn on [でんきが～: lights]', vi: 'sáng [でんきが～: đèn]' }
    },
    {
      kana: 'きえます',
      kanji: '消えます',
      romaji: 'kiemasu',
      meaning: { en: 'to go off, to go out [でんきが～: lights]', vi: 'tắt [でんきが～: đèn]' },
      ruby: [{ base: '消', reading: 'き' }]
    },
    {
      kana: 'こわれます',
      kanji: '壊れます',
      romaji: 'kowaremasu',
      meaning: { en: 'to break [いすが～: a chair]', vi: 'hỏng [いすが～: ghế]' },
      ruby: [{ base: '壊', reading: 'こわ' }]
    },
    {
      kana: 'われます',
      kanji: '割れます',
      romaji: 'waremasu',
      meaning: { en: 'to break, to crack [コップが～: a glass]', vi: 'vỡ [コップが～: cốc]' },
      ruby: [{ base: '割', reading: 'わ' }]
    },
    {
      kana: 'おれます',
      kanji: '折れます',
      romaji: 'oremasu',
      meaning: { en: 'to break, to snap [木が～: a tree/branch]', vi: 'gãy [木が～: cây/cành]' },
      ruby: [{ base: '折', reading: 'お' }]
    },
    {
      kana: 'やぶれます',
      kanji: '破れます',
      romaji: 'yaburemasu',
      meaning: { en: 'to tear [かみが～: paper]', vi: 'rách [かみが～: giấy]' },
      ruby: [{ base: '破', reading: 'やぶ' }]
    },
    {
      kana: 'よごれます',
      kanji: '汚れます',
      romaji: 'yogoremasu',
      meaning: { en: 'to get dirty [ふくが～: clothes]', vi: 'bẩn [ふくが～: quần áo]' },
      ruby: [{ base: '汚', reading: 'よご' }]
    },
    {
      kana: 'つきます',
      kanji: '付きます',
      romaji: 'tsukimasu',
      meaning: {
        en: 'to have, to be attached [ポケットが～: a pocket]',
        vi: 'có, dính [ポケットが～: túi]'
      },
      ruby: [{ base: '付', reading: 'つ' }]
    },
    {
      kana: 'はずれます',
      kanji: '外れます',
      romaji: 'hazuremasu',
      meaning: { en: 'to come off [ボタンが～: a button]', vi: 'rơi, bung [ボタンが～: nút]' },
      ruby: [{ base: '外', reading: 'はず' }]
    },
    {
      kana: 'とまります',
      kanji: '止まります',
      romaji: 'tomarimasu',
      meaning: { en: 'to stop [くるまが～: a car]', vi: 'dừng, đỗ [くるまが～: xe]' },
      ruby: [{ base: '止', reading: 'と' }]
    },
    {
      kana: 'まちがえます',
      romaji: 'machigaemasu',
      meaning: { en: 'to make a mistake', vi: 'nhầm, làm sai' }
    },
    {
      kana: 'おとします',
      kanji: '落とします',
      romaji: 'otoshimasu',
      meaning: { en: 'to drop, to lose (something)', vi: 'làm rơi, đánh rơi' },
      ruby: [{ base: '落', reading: 'お' }]
    },
    {
      kana: 'かかります',
      kanji: '掛かります',
      romaji: 'kakarimasu',
      meaning: { en: 'to lock [かぎが～: a key/lock]', vi: 'khóa [かぎが～: khóa]' },
      ruby: [{ base: '掛', reading: 'か' }]
    },
    {
      kana: 'ふきます',
      romaji: 'fukimasu',
      meaning: { en: 'to wipe, to dry', vi: 'lau, chùi' }
    },
    {
      kana: 'とりかえます',
      kanji: '取り替えます',
      romaji: 'torikaemasu',
      meaning: { en: 'to replace, to change', vi: 'thay' },
      ruby: [
        { base: '取', reading: 'と' },
        { base: '替', reading: 'か' }
      ]
    },
    {
      kana: 'かたづけます',
      kanji: '片づけます',
      romaji: 'katazukemasu',
      meaning: { en: 'to tidy up, to put in order', vi: 'dọn dẹp' },
      ruby: [{ base: '片', reading: 'かた' }]
    },
    {
      kana: 'おさら',
      kanji: 'お皿',
      romaji: 'osara',
      meaning: { en: 'plate, dish', vi: 'đĩa' },
      ruby: [{ base: '皿', reading: 'さら' }]
    },
    {
      kana: 'おちゃわん',
      kanji: 'お茶碗',
      romaji: 'ochawan',
      meaning: { en: 'rice bowl', vi: 'bát cơm, chén' },
      ruby: [
        { base: '茶', reading: 'ちゃ' },
        { base: '碗', reading: 'わん' }
      ]
    },
    {
      kana: 'コップ',
      romaji: 'koppu',
      meaning: { en: 'glass, cup', vi: 'cốc, ly' }
    },
    {
      kana: 'ガラス',
      romaji: 'garasu',
      meaning: { en: 'glass (material)', vi: 'thủy tinh, ly' }
    },
    {
      kana: 'ふくろ',
      kanji: '袋',
      romaji: 'fukuro',
      meaning: { en: 'bag', vi: 'túi' },
      ruby: [{ base: '袋', reading: 'ふくろ' }]
    },
    {
      kana: 'しょるい',
      kanji: '書類',
      romaji: 'shorui',
      meaning: { en: 'documents, papers', vi: 'giấy tờ, tài liệu' },
      ruby: [
        { base: '書', reading: 'しょ' },
        { base: '類', reading: 'るい' }
      ]
    },
    {
      kana: 'えだ',
      kanji: '枝',
      romaji: 'eda',
      meaning: { en: 'branch, twig', vi: 'cành cây' },
      ruby: [{ base: '枝', reading: 'えだ' }]
    },
    {
      kana: 'えきいん',
      kanji: '駅員',
      romaji: 'ekiin',
      meaning: { en: 'station staff', vi: 'nhân viên nhà ga' },
      ruby: [
        { base: '駅', reading: 'えき' },
        { base: '員', reading: 'いん' }
      ]
    },
    {
      kana: 'こうばん',
      kanji: '交番',
      romaji: 'kōban',
      meaning: { en: 'police box', vi: 'đồn cảnh sát, bốt cảnh sát' },
      ruby: [
        { base: '交', reading: 'こう' },
        { base: '番', reading: 'ばん' }
      ]
    },
    {
      kana: 'スピーチ',
      romaji: 'supīchi',
      meaning: { en: 'speech (~を します: to give a speech)', vi: 'diễn văn (~を します: đọc ~)' }
    },
    {
      kana: 'へんじ',
      kanji: '返事',
      romaji: 'henji',
      meaning: { en: 'reply (~を します: to reply)', vi: 'trả lời (~を します: trả lời)' },
      ruby: [
        { base: '返', reading: 'へん' },
        { base: '事', reading: 'じ' }
      ]
    },
    {
      kana: 'おさきに どうぞ',
      kanji: 'お先に どうぞ',
      romaji: 'osaki ni dōzo',
      meaning: {
        en: 'Please go ahead (I will stay a bit longer).',
        vi: 'Mời anh/chị cứ về trước.'
      },
      ruby: [{ base: '先', reading: 'さき' }]
    },
    {
      kana: 'いまの でんしゃ',
      kanji: '今の 電車',
      romaji: 'ima no densha',
      meaning: { en: 'the train that just left', vi: '(chuyến) tàu điện vừa chạy' },
      ruby: [
        { base: '今', reading: 'いま' },
        { base: '電', reading: 'でん' },
        { base: '車', reading: 'しゃ' }
      ]
    },
    {
      kana: 'わすれもの',
      kanji: '忘れ物',
      romaji: 'wasuremono',
      meaning: { en: 'something left behind, forgotten item', vi: 'đồ bỏ quên' },
      ruby: [
        { base: '忘', reading: 'わす' },
        { base: '物', reading: 'もの' }
      ]
    },
    {
      kana: 'このくらい',
      romaji: 'kono kurai',
      meaning: { en: 'about this size', vi: 'cỡ tầm này, khoảng chừng này' }
    },
    {
      kana: '～がわ',
      kanji: '～側',
      romaji: '~gawa',
      meaning: { en: 'the ~ side', vi: 'phía ~' },
      ruby: [{ base: '側', reading: 'がわ' }]
    },
    {
      kana: 'ポケット',
      romaji: 'poketto',
      meaning: { en: 'pocket', vi: 'túi' }
    },
    {
      kana: '～へん',
      kanji: '～辺',
      romaji: '~hen',
      meaning: { en: 'around ~, in the area of ~', vi: 'chỗ ~, khu vực ~' },
      ruby: [{ base: '辺', reading: 'へん' }]
    },
    {
      kana: 'おぼえていません',
      kanji: '覚えていません',
      romaji: 'oboete imasen',
      meaning: { en: 'I do not remember.', vi: 'Tôi không nhớ.' },
      ruby: [{ base: '覚', reading: 'おぼ' }]
    },
    {
      kana: 'あみだな',
      kanji: '網棚',
      romaji: 'amidana',
      meaning: { en: 'overhead luggage rack', vi: 'giá để hành lý' },
      ruby: [
        { base: '網', reading: 'あみ' },
        { base: '棚', reading: 'だな' }
      ]
    },
    {
      kana: 'たしか',
      kanji: '確か',
      romaji: 'tashika',
      meaning: { en: 'if I remember correctly, probably', vi: 'chắc là, nếu không nhầm' },
      ruby: [{ base: '確', reading: 'たし' }]
    },
    {
      kana: 'よかった',
      romaji: 'Yokatta',
      meaning: {
        en: 'Thank goodness. (relief)',
        vi: '[Ôi,] tốt quá. (an tâm)'
      }
    },
    {
      kana: 'じしん',
      kanji: '地震',
      romaji: 'jishin',
      meaning: { en: 'earthquake', vi: 'động đất' },
      ruby: [
        { base: '地', reading: 'じ' },
        { base: '震', reading: 'しん' }
      ]
    },
    {
      kana: 'かべ',
      kanji: '壁',
      romaji: 'kabe',
      meaning: { en: 'wall', vi: 'tường' },
      ruby: [{ base: '壁', reading: 'かべ' }]
    },
    {
      kana: 'はり',
      kanji: '針',
      romaji: 'hari',
      meaning: { en: 'hand (of a clock), needle', vi: 'kim đồng hồ' },
      ruby: [{ base: '針', reading: 'はり' }]
    },
    {
      kana: 'さします',
      kanji: '指します',
      romaji: 'sashimasu',
      meaning: { en: 'to point (at)', vi: 'chỉ' },
      ruby: [{ base: '指', reading: 'さ' }]
    },
    {
      kana: 'えきまえ',
      kanji: '駅前',
      romaji: 'ekimae',
      meaning: { en: 'in front of the station', vi: 'trước ga' },
      ruby: [
        { base: '駅', reading: 'えき' },
        { base: '前', reading: 'まえ' }
      ]
    },
    {
      kana: 'たおれます',
      kanji: '倒れます',
      romaji: 'taoremasu',
      meaning: { en: 'to fall over, to collapse', vi: 'đổ, ngã' },
      ruby: [{ base: '倒', reading: 'たお' }]
    },
    {
      kana: 'にし',
      kanji: '西',
      romaji: 'nishi',
      meaning: { en: 'west', vi: 'phía tây' },
      ruby: [{ base: '西', reading: 'にし' }]
    },
    {
      kana: '～のほう',
      kanji: '～の方',
      romaji: '~no hō',
      meaning: { en: 'the ~ side, direction of ~', vi: 'bên ~, phía ~' },
      ruby: [{ base: '方', reading: 'ほう' }]
    },
    {
      kana: 'もえます',
      kanji: '燃えます',
      romaji: 'moemasu',
      meaning: { en: 'to burn', vi: 'cháy' },
      ruby: [{ base: '燃', reading: 'も' }]
    },
    {
      kana: 'レポーター',
      romaji: 'repōtā',
      meaning: { en: 'reporter', vi: 'phóng viên' }
    }
  ],
  phrases: [
    {
      kana: 'おさきに どうぞ。',
      kanji: 'お先に どうぞ。',
      romaji: 'Osaki ni dōzo.',
      meaning: { en: 'Please go ahead.', vi: 'Mời anh/chị cứ về trước.' },
      ruby: [{ base: '先', reading: 'さき' }]
    },
    {
      kana: 'ああ、よかった。',
      romaji: 'Aa, yokatta.',
      meaning: { en: 'Oh, thank goodness.', vi: 'Ôi, may quá.' }
    }
  ],
  conversation: [
    {
      id: 'conv-lesson29-lost-bag',
      title: { en: 'I left something on the train', vi: 'Tôi để quên đồ trên tàu' },
      speakers: [
        { id: 'lee', name: 'リー' },
        { id: 'staff', name: '駅員' }
      ],
      lines: [
        {
          speakerId: 'lee',
          jp: 'すみません。今の 電車に 忘れ物を したんですが……。',
          romaji: 'Sumimasen. Ima no densha ni wasuremono o shita n desu ga…….',
          meaning: {
            en: 'Excuse me. I left something on the train that just departed...',
            vi: 'Xin lỗi. Tôi để quên đồ trên chuyến tàu vừa rồi...'
          },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '忘', reading: 'わす' },
            { base: '物', reading: 'もの' }
          ]
        },
        {
          speakerId: 'staff',
          jp: '何を 忘れましたか。',
          romaji: 'Nani o wasuremashita ka.',
          meaning: { en: 'What did you forget?', vi: 'Anh/chị để quên cái gì?' },
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '忘', reading: 'わす' }
          ]
        },
        {
          speakerId: 'lee',
          jp: '青い かばんです。この くらいの 大きさで、外側に 大きな ポケットが 付いています。',
          romaji:
            'Aoi kaban desu. Kono kurai no ōkisa de, sotogawa ni ōkina poketto ga tsuite imasu.',
          meaning: {
            en: 'A blue bag. About this size, with a big pocket on the outside.',
            vi: 'Cái cặp màu xanh. Cỡ khoảng như thế này, bên ngoài có ngăn túi lớn.'
          },
          ruby: [
            { base: '青', reading: 'あお' },
            { base: '大', reading: 'おお' },
            { base: '外', reading: 'そと' },
            { base: '側', reading: 'がわ' },
            { base: '大', reading: 'おお' },
            { base: '付', reading: 'つ' }
          ]
        },
        {
          speakerId: 'staff',
          jp: 'どこに 置きましたか。',
          romaji: 'Doko ni okimashita ka.',
          meaning: { en: 'Where did you put it?', vi: 'Anh/chị để ở đâu?' },
          ruby: [{ base: '置', reading: 'お' }]
        },
        {
          speakerId: 'lee',
          jp: 'はっきり 覚えていません。でも、網棚の 上に 置いたと 思います。',
          romaji: 'Hakkiri oboete imasen. Demo, amidana no ue ni oita to omoimasu.',
          meaning: {
            en: 'I do not remember clearly. But I think I put it on the overhead rack.',
            vi: 'Tôi không nhớ rõ. Nhưng tôi nghĩ để trên giá hành lý.'
          },
          ruby: [
            { base: '覚', reading: 'おぼ' },
            { base: '網', reading: 'あみ' },
            { base: '棚', reading: 'だな' },
            { base: '上', reading: 'うえ' },
            { base: '置', reading: 'お' },
            { base: '思', reading: 'おも' }
          ]
        },
        {
          speakerId: 'staff',
          jp: '中に 何が 入っていますか。',
          romaji: 'Naka ni nani ga haitte imasu ka.',
          meaning: { en: 'What is inside?', vi: 'Trong có gì?' },
          ruby: [
            { base: '中', reading: 'なか' },
            { base: '何', reading: 'なに' },
            { base: '入', reading: 'はい' }
          ]
        },
        {
          speakerId: 'lee',
          jp: '確か、本と 傘が 入っていたと 思います。',
          romaji: 'Tashika, hon to kasa ga haitte ita to omoimasu.',
          meaning: {
            en: 'If I remember correctly, I think there was a book and an umbrella.',
            vi: 'Nếu không nhầm thì có sách và ô.'
          },
          ruby: [
            { base: '確', reading: 'たし' },
            { base: '本', reading: 'ほん' },
            { base: '傘', reading: 'かさ' },
            { base: '入', reading: 'はい' },
            { base: '思', reading: 'おも' }
          ]
        },
        {
          speakerId: 'staff',
          jp: 'では、調べますから、少々 お待ちください。',
          romaji: 'Dewa, shirabemasu kara, shōshō omachi kudasai.',
          meaning: {
            en: 'Well then, I will check, so please wait a moment.',
            vi: 'Vậy tôi sẽ kiểm tra, anh/chị đợi một chút.'
          },
          ruby: [
            { base: '調', reading: 'しら' },
            { base: '少', reading: 'しょう' },
            { base: '待', reading: 'ま' }
          ]
        },
        {
          speakerId: 'staff',
          jp: 'ありましたよ。',
          romaji: 'Arimashita yo.',
          meaning: { en: 'We found it.', vi: 'Có rồi đấy.' }
        },
        {
          speakerId: 'lee',
          jp: 'ああ、よかった。',
          romaji: 'Aa, yokatta.',
          meaning: { en: 'Oh, thank goodness.', vi: 'Ôi, may quá.' }
        },
        {
          speakerId: 'staff',
          jp: 'かばんは 今 新宿に あります。どう なさいますか。',
          romaji: 'Kaban wa ima Shinjuku ni arimasu. Dō nasaimasu ka.',
          meaning: {
            en: 'The bag is in Shinjuku now. What will you do?',
            vi: 'Cặp bây giờ ở ga Shinjuku. Anh/chị định thế nào?'
          },
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '新', reading: 'しん' },
            { base: '宿', reading: 'じゅく' }
          ]
        },
        {
          speakerId: 'lee',
          jp: 'すぐ 取りに 行きます。',
          romaji: 'Sugu tori ni ikimasu.',
          meaning: { en: 'I will go get it right away.', vi: 'Tôi sẽ đi lấy ngay.' },
          ruby: [
            { base: '取', reading: 'と' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'staff',
          jp: 'では、新宿の 駅務室へ 行って ください。',
          romaji: 'Dewa, Shinjuku no ekimushitsu e itte kudasai.',
          meaning: {
            en: 'Then please go to the Shinjuku station office.',
            vi: 'Vậy anh/chị hãy đến văn phòng ga Shinjuku.'
          },
          ruby: [
            { base: '新', reading: 'しん' },
            { base: '宿', reading: 'じゅく' },
            { base: '駅', reading: 'えき' },
            { base: '務', reading: 'む' },
            { base: '室', reading: 'しつ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'lee',
          jp: 'はい。ありがとう ございます。',
          romaji: 'Hai. Arigatō gozaimasu.',
          meaning: { en: 'Yes. Thank you very much.', vi: 'Vâng. Xin cám ơn anh.' }
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'V-ています (resulting state)',
      highlights: ['て', 'い', 'ます'],
      title: { en: 'Resulting states (V-ています)', vi: 'Trạng thái kết quả (V-ています)' },
      explanation: {
        en: 'For intransitive change-of-state verbs, V-ています describes the current result: 窓が 割れています (the window is broken). Use が for immediate observation; は when the topic is already established: この いすは 壊れています.',
        vi: 'Với động từ tự động biểu thị biến đổi, V-ています mô tả trạng thái hiện tại: 窓が 割れています. Dùng が khi quan sát trực tiếp; は khi chủ đề đã rõ: この いすは 壊れています.'
      },
      explanationRuby: [
        { base: '窓', reading: 'まど' },
        { base: '割', reading: 'わ' },
        { base: '壊', reading: 'こわ' }
      ],
      examples: [
        {
          jp: '窓が 割れています。',
          romaji: 'Mado ga warete imasu.',
          meaning: { en: 'The window is broken.', vi: 'Cửa sổ bị vỡ.' },
          ruby: [
            { base: '窓', reading: 'まど' },
            { base: '割', reading: 'わ' }
          ]
        },
        {
          jp: '電気が ついています。',
          romaji: 'Denki ga tsuite imasu.',
          meaning: { en: 'The light is on.', vi: 'Đèn sáng.' },
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '気', reading: 'き' }
          ]
        },
        {
          jp: '会議室の ドアが 閉まっています。',
          romaji: 'Kaigishitsu no doa ga shimatte imasu.',
          meaning: { en: 'The meeting room door is closed.', vi: 'Cửa phòng họp đóng.' },
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '室', reading: 'しつ' },
            { base: '閉', reading: 'し' }
          ]
        }
      ]
    },
    {
      pattern: 'V-て しまいました / しまいます',
      highlights: ['て', 'しまい'],
      title: {
        en: 'Completion or regret (V-てしまいました)',
        vi: 'Hoàn thành hoặc tiếc nuối (V-てしまいました)'
      },
      explanation: {
        en: 'V-てしまいました can mean finishing completely: みんなで 飲んで しまいました. It can also express regret or something done unintentionally: パスポートを なくして しまいました.',
        vi: 'V-てしまいました có thể nghĩa làm xong hẳn: みんなで 飲んで しまいました. Cũng diễn tả tiếc nuối hoặc việc xảy ra ngoài ý muốn: パスポートを なくして しまいました.'
      },
      explanationRuby: [
        { base: '飲', reading: 'の' },
        { base: '書', reading: 'か' },
        { base: '落', reading: 'お' }
      ],
      examples: [
        {
          jp: '持って 来た ワインは みんなで 飲んで しまいました。',
          romaji: 'Motte kita wain wa minna de nonde shimaimashita.',
          meaning: {
            en: 'We drank all the wine that was brought.',
            vi: 'Mọi người uống hết rượu mang đến.'
          },
          ruby: [
            { base: '持', reading: 'も' },
            { base: '来', reading: 'き' },
            { base: '飲', reading: 'の' }
          ]
        },
        {
          jp: '漢字の 宿題は もう やって しまいました。',
          romaji: 'Kanji no shukudai wa mō yatte shimaimashita.',
          meaning: {
            en: 'I have already finished my kanji homework.',
            vi: 'Bài tập kanji tôi làm xong rồi.'
          },
          ruby: [
            { base: '漢', reading: 'かん' },
            { base: '字', reading: 'じ' },
            { base: '宿', reading: 'しゅく' },
            { base: '題', reading: 'だい' }
          ]
        },
        {
          jp: 'どこかで 財布を 落として しまいました。',
          romaji: 'Dokoka de saifu o otoshite shimaimashita.',
          meaning: { en: 'I dropped my wallet somewhere.', vi: 'Tôi đánh rơi ví ở đâu đó.' },
          ruby: [
            { base: '財', reading: 'さい' },
            { base: '布', reading: 'ふ' },
            { base: '落', reading: 'お' }
          ]
        }
      ]
    },
    {
      pattern: 'N (place) に 行きます / 来ます / 帰ります',
      patternRuby: [
        { base: '行', reading: 'い' },
        { base: '来', reading: 'き' },
        { base: '帰', reading: 'かえ' }
      ],
      highlights: ['に'],
      title: { en: 'Destination with に', vi: 'Đích đến với に' },
      explanation: {
        en: 'に can replace へ to mark a destination with 行きます, 来ます, and 帰ります: 交番に 行かないと.',
        vi: 'に có thể thay へ đánh dấu đích đến với 行きます, 来ます, 帰ります: 交番に 行かないと.'
      },
      explanationRuby: [
        { base: '行', reading: 'い' },
        { base: '来', reading: 'き' },
        { base: '帰', reading: 'かえ' },
        { base: '交', reading: 'こう' },
        { base: '番', reading: 'ばん' },
        { base: '行', reading: 'い' }
      ],
      examples: [
        {
          jp: '財布を 落として しまったんです。……すぐ 交番に 行かないと。',
          romaji: 'Saifu o otoshite shimatta n desu. ……Sugu kōban ni ikanai to.',
          meaning: {
            en: 'I lost my wallet. ...You must go to the police box right away.',
            vi: 'Tôi mất ví rồi. ...Phải đi đồn cảnh sát ngay.'
          },
          ruby: [
            { base: '財', reading: 'さい' },
            { base: '布', reading: 'ふ' },
            { base: '落', reading: 'お' },
            { base: '交', reading: 'こう' },
            { base: '番', reading: 'ばん' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'それ / その / そう',
      highlights: ['それ', 'その', 'そう'],
      title: { en: 'Referring back (それ/その/そう)', vi: 'Tham chiếu lại (それ/その/そう)' },
      explanation: {
        en: 'In conversation, それ refers to what the other person just said; その + noun refers to something just mentioned; そう confirms you will act as suggested: そう します.',
        vi: 'Trong hội thoại, それ chỉ điều vừa nói; その + danh từ chỉ điều vừa nhắc; そう xác nhận sẽ làm theo gợi ý: そう します.'
      },
      examples: [
        {
          jp: '財布を 落として しまったんです。……それは 大変ですね。',
          romaji: 'Saifu o otoshite shimatta n desu. ……Sore wa taihen desu ne.',
          meaning: {
            en: 'I lost my wallet. ...That is terrible.',
            vi: 'Tôi mất ví. ...Thế thì gay nhỉ.'
          },
          ruby: [
            { base: '財', reading: 'さい' },
            { base: '布', reading: 'ふ' },
            { base: '落', reading: 'お' },
            { base: '大', reading: 'たい' },
            { base: '変', reading: 'へん' }
          ]
        },
        {
          jp: 'うちへ 帰って、休んだ ほうが いいですよ。……ええ、そう します。',
          romaji: 'Uchi e kaette, yasunda hō ga ii desu yo. ……Ee, sō shimasu.',
          meaning: {
            en: 'You should go home and rest. ...Yes, I will do that.',
            vi: 'Anh/chị nên về nghỉ. ...Vâng, tôi sẽ làm vậy.'
          },
          ruby: [
            { base: '帰', reading: 'かえ' },
            { base: '休', reading: 'やす' }
          ]
        }
      ]
    },
    {
      pattern: 'ありました',
      highlights: ['あり', 'ました'],
      title: { en: 'Discovery (ありました)', vi: 'Tìm thấy (ありました)' },
      explanation: {
        en: 'ありました can report that the speaker has just found something: [かばんが] ありましたよ.',
        vi: 'ありました báo người nói vừa tìm thấy: [かばんが] ありましたよ.'
      },
      examples: [
        {
          jp: 'かばん、ありましたよ。',
          romaji: 'Kaban, arimashita yo.',
          meaning: { en: 'We found your bag.', vi: 'Tìm thấy cặp rồi đấy.' }
        }
      ]
    },
    {
      pattern: 'どこかで / どこかに',
      highlights: ['どこ', 'か'],
      title: { en: 'Somewhere (どこかで/に)', vi: 'Ở đâu đó (どこかで/に)' },
      explanation: {
        en: 'After どこか, particles を and へ may be dropped, but で and に are kept: どこかで 財布を 落としました, どこかに 電話が ありますか.',
        vi: 'Sau どこか có thể lược を, へ nhưng giữ で, に: どこかで 財布を 落としました, どこかに 電話が ありますか.'
      },
      explanationRuby: [
        { base: '財', reading: 'さい' },
        { base: '布', reading: 'ふ' },
        { base: '落', reading: 'お' },
        { base: '電', reading: 'でん' },
        { base: '話', reading: 'わ' }
      ],
      examples: [
        {
          jp: 'どこかで 財布を 落として しまいました。',
          romaji: 'Dokoka de saifu o otoshite shimaimashita.',
          meaning: { en: 'I dropped my wallet somewhere.', vi: 'Tôi đánh rơi ví ở đâu đó.' },
          ruby: [
            { base: '財', reading: 'さい' },
            { base: '布', reading: 'ふ' },
            { base: '落', reading: 'お' }
          ]
        },
        {
          jp: 'どこかに 電話が ありますか。',
          romaji: 'Dokoka ni denwa ga arimasu ka.',
          meaning: { en: 'Is there a phone somewhere?', vi: 'Có chỗ nào có điện thoại không?' },
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '話', reading: 'わ' }
          ]
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson29-earthquake',
      title: { en: 'After the earthquake', vi: 'Sau cơn động đất' },
      lines: [
        {
          jp: '大きな 地震が ありました。',
          romaji: 'Ōkina jishin ga arimashita.',
          meaning: { en: 'There was a big earthquake.', vi: 'Có trận động đất lớn.' },
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '地', reading: 'じ' },
            { base: '震', reading: 'しん' }
          ]
        },
        {
          jp: '壁の 時計の 針が 止まっていました。',
          romaji: 'Kabe no tokei no hari ga tomatte imashita.',
          meaning: {
            en: 'The clock hand on the wall had stopped.',
            vi: 'Kim đồng hồ trên tường dừng lại.'
          },
          ruby: [
            { base: '壁', reading: 'かべ' },
            { base: '時', reading: 'と' },
            { base: '計', reading: 'けい' },
            { base: '針', reading: 'はり' },
            { base: '止', reading: 'と' }
          ]
        },
        {
          jp: '駅前の 建物が 倒れ、西の 方から 黒い 煙が 上がっていました。',
          romaji: 'Ekimae no tatemono ga taore, nishi no hō kara kuroi kemuri ga agatte imashita.',
          meaning: {
            en: 'A building in front of the station collapsed, and black smoke was rising from the west.',
            vi: 'Nhà trước ga đổ, khói đen bốc lên từ phía tây.'
          },
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '前', reading: 'まえ' },
            { base: '建', reading: 'たて' },
            { base: '物', reading: 'もの' },
            { base: '倒', reading: 'たお' },
            { base: '西', reading: 'にし' },
            { base: '方', reading: 'ほう' },
            { base: '黒', reading: 'くろ' },
            { base: '煙', reading: 'けむり' },
            { base: '上', reading: 'あ' }
          ]
        },
        {
          jp: 'レポーターは カメラを 指して 説明しました。',
          romaji: 'Repōtā wa kamera o sashite setsumei shimashita.',
          meaning: {
            en: 'The reporter pointed at the camera and explained.',
            vi: 'Phóng viên chỉ vào máy quay và giải thích.'
          },
          ruby: [
            { base: '指', reading: 'さ' },
            { base: '説', reading: 'せつ' },
            { base: '明', reading: 'めい' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: { en: 'What happened to the clock?', vi: 'Đồng hồ thế nào?' },
          choices: [
            { id: 'a', label: { en: 'It stopped', vi: 'Dừng lại' } },
            { id: 'b', label: { en: 'It fell off the wall', vi: 'Rơi khỏi tường' } },
            { id: 'c', label: { en: 'It was on fire', vi: 'Bị cháy' } },
            { id: 'd', label: { en: 'It was broken into pieces', vi: 'Vỡ tan' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'What was rising from the west?', vi: 'Phía tây có gì bốc lên?' },
          choices: [
            { id: 'a', label: { en: 'Black smoke', vi: 'Khói đen' } },
            { id: 'b', label: { en: 'White clouds', vi: 'Mây trắng' } },
            { id: 'c', label: { en: 'Rain', vi: 'Mưa' } },
            { id: 'd', label: { en: 'Snow', vi: 'Tuyết' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'States and appearance', vi: 'Trạng thái và vẻ ngoài' },
      introTerm: {
        jp: '状態・様子',
        ruby: [
          { base: '状', reading: 'じょう' },
          { base: '態', reading: 'たい' },
          { base: '様', reading: 'よう' },
          { base: '子', reading: 'す' }
        ]
      },
      layout: 'stacked',
      rows: [
        {
          jp: '太っている',
          ruby: [{ base: '太', reading: 'ふと' }],
          meaning: { en: 'to be overweight', vi: 'béo' }
        },
        {
          jp: 'やせている',
          meaning: { en: 'to be thin', vi: 'gầy' }
        },
        {
          jp: '膨らんでいる',
          ruby: [{ base: '膨', reading: 'ふく' }],
          meaning: { en: 'to be bulging', vi: 'phồng' }
        },
        {
          jp: '穴が 開いている',
          ruby: [
            { base: '穴', reading: 'あな' },
            { base: '開', reading: 'あ' }
          ],
          meaning: { en: 'to have a hole', vi: 'thủng lỗ' }
        },
        {
          jp: '曲がっている',
          ruby: [{ base: '曲', reading: 'ま' }],
          meaning: { en: 'to be bent, curved', vi: 'cong' }
        },
        {
          jp: 'ゆがんでいる',
          meaning: { en: 'to be warped, distorted', vi: 'méo' }
        },
        {
          jp: 'へこんでいる',
          meaning: { en: 'to be dented', vi: 'lõm' }
        },
        {
          jp: 'ねじれている',
          meaning: { en: 'to be twisted', vi: 'xoắn' }
        },
        {
          jp: '欠けている',
          ruby: [{ base: '欠', reading: 'か' }],
          meaning: { en: 'to be chipped', vi: 'sứt' }
        },
        {
          jp: 'ひびが 入っている',
          ruby: [{ base: '入', reading: 'はい' }],
          meaning: { en: 'to be cracked', vi: 'nứt' }
        },
        {
          jp: '腐っている',
          ruby: [{ base: '腐', reading: 'くさ' }],
          meaning: { en: 'to be rotten', vi: 'thiu' }
        },
        {
          jp: '乾いている',
          ruby: [{ base: '乾', reading: 'かわ' }],
          meaning: { en: 'to be dry', vi: 'khô' }
        },
        {
          jp: 'ぬれている',
          meaning: { en: 'to be wet', vi: 'ướt' }
        },
        {
          jp: '凍っている',
          ruby: [{ base: '凍', reading: 'こお' }],
          meaning: { en: 'to be frozen', vi: 'đóng băng' }
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Proper nouns', vi: 'Tên riêng' },
      includeInQuiz: false,
      items: [
        {
          kana: 'げんじものがたり',
          kanji: '源氏物語',
          romaji: 'Genji Monogatari',
          meaning: {
            en: 'The Tale of Genji (Heian novel by Murasaki Shikibu)',
            vi: 'Truyện Genji (tiểu thuyết thời Heian của Murasaki Shikibu)'
          },
          ruby: [
            { base: '源', reading: 'げん' },
            { base: '氏', reading: 'じ' },
            { base: '物', reading: 'もの' },
            { base: '語', reading: 'がたり' }
          ]
        },
        {
          kana: 'しんじゅく',
          kanji: '新宿',
          romaji: 'Shinjuku',
          meaning: { en: 'Shinjuku (Tokyo)', vi: 'Shinjuku (Tokyo)' },
          ruby: [
            { base: '新', reading: 'しん' },
            { base: '宿', reading: 'じゅく' }
          ]
        }
      ]
    }
  ]
};
