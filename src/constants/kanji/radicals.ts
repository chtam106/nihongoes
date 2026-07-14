import type { Bilingual } from './types.ts';

/** One of the 214 traditional Kangxi radicals (部首) used to build kanji. */
export type Radical = {
  /** Traditional Kangxi index number (1-214). */
  number: number;
  /** The radical character in its standalone form. */
  char: string;
  /** Common combining forms (e.g. 人 -> 亻). */
  variants?: string[];
  /** Stroke count of the radical. */
  strokes: number;
  /** Japanese name of the radical, in romaji. */
  name: string;
  /** Japanese name of the radical, in kana (shown on the cards). */
  kana: string;
  /** Vietnamese (Han-Viet - meaning) and English meaning. */
  meaning: Bilingual;
};

export const radicals: Radical[] = [
  {
    number: 1,
    char: '一',
    strokes: 1,
    name: 'ichi',
    kana: 'いち',
    meaning: { en: 'one', vi: 'nhất - một' }
  },
  {
    number: 2,
    char: '丨',
    strokes: 1,
    name: 'bou',
    kana: 'ぼう',
    meaning: { en: 'line', vi: 'cổn - nét sổ' }
  },
  {
    number: 3,
    char: '丶',
    strokes: 1,
    name: 'ten',
    kana: 'てん',
    meaning: { en: 'dot', vi: 'chủ - dấu chấm' }
  },
  {
    number: 4,
    char: '丿',
    strokes: 1,
    name: 'no',
    kana: 'の',
    meaning: { en: 'slash', vi: 'phiệt - nét phẩy' }
  },
  {
    number: 5,
    char: '乙',
    variants: ['乚'],
    strokes: 1,
    name: 'otsu',
    kana: 'おつ',
    meaning: {
      en: 'the 2nd of the ten heavenly stems',
      vi: 'ất - can Ất (thiên can thứ hai)'
    }
  },
  {
    number: 6,
    char: '亅',
    strokes: 1,
    name: 'hanebou',
    kana: 'はねぼう',
    meaning: { en: 'hook', vi: 'quyết - nét móc' }
  },
  {
    number: 7,
    char: '二',
    strokes: 2,
    name: 'ni',
    kana: 'に',
    meaning: { en: 'two', vi: 'nhị - hai' }
  },
  {
    number: 8,
    char: '亠',
    strokes: 2,
    name: 'nabebuta',
    kana: 'なべぶた',
    meaning: { en: 'lid', vi: 'đầu - nắp đậy' }
  },
  {
    number: 9,
    char: '人',
    variants: ['亻'],
    strokes: 2,
    name: 'hito / ninben',
    kana: 'ひと / にんべん',
    meaning: { en: 'person', vi: 'nhân - người' }
  },
  {
    number: 10,
    char: '儿',
    strokes: 2,
    name: 'hitoashi',
    kana: 'ひとあし',
    meaning: { en: 'legs', vi: 'nhân - chân người' }
  },
  {
    number: 11,
    char: '入',
    strokes: 2,
    name: 'iru',
    kana: 'いる',
    meaning: { en: 'enter', vi: 'nhập - vào' }
  },
  {
    number: 12,
    char: '八',
    strokes: 2,
    name: 'hachi',
    kana: 'はち',
    meaning: { en: 'eight', vi: 'bát - tám' }
  },
  {
    number: 13,
    char: '冂',
    strokes: 2,
    name: 'keigamae',
    kana: 'けいがまえ',
    meaning: { en: 'down box, enclosure', vi: 'quynh - khung bao (mở xuống dưới)' }
  },
  {
    number: 14,
    char: '冖',
    strokes: 2,
    name: 'wakanmuri',
    kana: 'わかんむり',
    meaning: { en: 'cover', vi: 'mịch - trùm khăn' }
  },
  {
    number: 15,
    char: '冫',
    strokes: 2,
    name: 'nisui',
    kana: 'にすい',
    meaning: { en: 'ice', vi: 'băng - nước đá' }
  },
  {
    number: 16,
    char: '几',
    strokes: 2,
    name: 'tsukue',
    kana: 'つくえ',
    meaning: { en: 'table', vi: 'kỷ - cái bàn' }
  },
  {
    number: 17,
    char: '凵',
    strokes: 2,
    name: 'ukebako',
    kana: 'うけばこ',
    meaning: { en: 'open box, container', vi: 'khảm - cái hộp mở miệng, đồ chứa' }
  },
  {
    number: 18,
    char: '刀',
    variants: ['刂'],
    strokes: 2,
    name: 'katana / rittou',
    kana: 'かたな / りっとう',
    meaning: { en: 'knife', vi: 'đao - con dao' }
  },
  {
    number: 19,
    char: '力',
    strokes: 2,
    name: 'chikara',
    kana: 'ちから',
    meaning: { en: 'power', vi: 'lực - sức' }
  },
  {
    number: 20,
    char: '勹',
    strokes: 2,
    name: 'tsutsumigamae',
    kana: 'つつみがまえ',
    meaning: { en: 'wrap', vi: 'bao - bao bọc' }
  },
  {
    number: 21,
    char: '匕',
    strokes: 2,
    name: 'saji',
    kana: 'さじ',
    meaning: { en: 'spoon', vi: 'chuỷ - cái thìa' }
  },
  {
    number: 22,
    char: '匚',
    strokes: 2,
    name: 'hakogamae',
    kana: 'はこがまえ',
    meaning: { en: 'box', vi: 'phương - cái tủ' }
  },
  {
    number: 23,
    char: '匸',
    strokes: 2,
    name: 'kakushigamae',
    kana: 'かくしがまえ',
    meaning: { en: 'hiding enclosure', vi: 'hệ - che giấu' }
  },
  {
    number: 24,
    char: '十',
    strokes: 2,
    name: 'juu',
    kana: 'じゅう',
    meaning: { en: 'ten', vi: 'thập - mười' }
  },
  {
    number: 25,
    char: '卜',
    strokes: 2,
    name: 'boku',
    kana: 'ぼく',
    meaning: { en: 'divination', vi: 'bốc - bói toán' }
  },
  {
    number: 26,
    char: '卩',
    strokes: 2,
    name: 'fushizukuri',
    kana: 'ふしづくり',
    meaning: { en: 'seal', vi: 'tiết - con dấu' }
  },
  {
    number: 27,
    char: '厂',
    strokes: 2,
    name: 'gandare',
    kana: 'がんだれ',
    meaning: { en: 'cliff', vi: 'hán - sườn núi' }
  },
  {
    number: 28,
    char: '厶',
    strokes: 2,
    name: 'mu',
    kana: 'む',
    meaning: { en: 'private', vi: 'khư - riêng tư' }
  },
  {
    number: 29,
    char: '又',
    strokes: 2,
    name: 'mata',
    kana: 'また',
    meaning: {
      en: 'again; hand (when used in other kanji)',
      vi: 'hựu - lại nữa; bàn tay (khi ghép chữ)'
    }
  },
  {
    number: 30,
    char: '口',
    strokes: 3,
    name: 'kuchi',
    kana: 'くち',
    meaning: { en: 'mouth', vi: 'khẩu - miệng' }
  },
  {
    number: 31,
    char: '囗',
    strokes: 3,
    name: 'kunigamae',
    kana: 'くにがまえ',
    meaning: { en: 'enclosure', vi: 'vi - vây quanh' }
  },
  {
    number: 32,
    char: '土',
    strokes: 3,
    name: 'tsuchi',
    kana: 'つち',
    meaning: { en: 'earth', vi: 'thổ - đất' }
  },
  {
    number: 33,
    char: '士',
    strokes: 3,
    name: 'samurai',
    kana: 'さむらい',
    meaning: { en: 'scholar, gentleman, samurai', vi: 'sĩ - kẻ sĩ, quý ông (người văn/võ)' }
  },
  {
    number: 34,
    char: '夂',
    strokes: 3,
    name: 'chi',
    kana: 'ち',
    meaning: {
      en: 'to come after, to trail behind',
      vi: 'truy - đến sau, theo sau'
    }
  },
  {
    number: 35,
    char: '夊',
    strokes: 3,
    name: 'suinyou',
    kana: 'すいにょう',
    meaning: { en: 'go slowly', vi: 'tuy - đi chậm' }
  },
  {
    number: 36,
    char: '夕',
    strokes: 3,
    name: 'yuube',
    kana: 'ゆうべ',
    meaning: { en: 'evening', vi: 'tịch - buổi tối' }
  },
  {
    number: 37,
    char: '大',
    strokes: 3,
    name: 'dai',
    kana: 'だい',
    meaning: { en: 'big', vi: 'đại - to lớn' }
  },
  {
    number: 38,
    char: '女',
    strokes: 3,
    name: 'onna',
    kana: 'おんな',
    meaning: { en: 'woman', vi: 'nữ - con gái' }
  },
  {
    number: 39,
    char: '子',
    strokes: 3,
    name: 'ko',
    kana: 'こ',
    meaning: { en: 'child', vi: 'tử - con' }
  },
  {
    number: 40,
    char: '宀',
    strokes: 3,
    name: 'ukanmuri',
    kana: 'うかんむり',
    meaning: { en: 'roof', vi: 'miên - mái nhà' }
  },
  {
    number: 41,
    char: '寸',
    strokes: 3,
    name: 'sun',
    kana: 'すん',
    meaning: {
      en: 'a small unit of length (~3cm, like an inch); hand (when used in other kanji)',
      vi: 'thốn - tấc (đơn vị đo chiều dài ngắn, ~3cm); bàn tay (khi ghép chữ)'
    }
  },
  {
    number: 42,
    char: '小',
    strokes: 3,
    name: 'shou',
    kana: 'しょう',
    meaning: { en: 'small', vi: 'tiểu - nhỏ' }
  },
  {
    number: 43,
    char: '尢',
    variants: ['尤'],
    strokes: 3,
    name: 'dainomage',
    kana: 'だいのまげ',
    meaning: { en: 'lame', vi: 'uông - què chân' }
  },
  {
    number: 44,
    char: '尸',
    strokes: 3,
    name: 'shikabane',
    kana: 'しかばね',
    meaning: {
      en: 'corpse; roof/dwelling (when used in other kanji)',
      vi: 'thi - xác chết; mái, nhà (khi ghép chữ)'
    }
  },
  {
    number: 45,
    char: '屮',
    strokes: 3,
    name: 'tetsu',
    kana: 'てつ',
    meaning: { en: 'sprout', vi: 'triệt - mầm cây' }
  },
  {
    number: 46,
    char: '山',
    strokes: 3,
    name: 'yama',
    kana: 'やま',
    meaning: { en: 'mountain', vi: 'sơn - núi' }
  },
  {
    number: 47,
    char: '川',
    variants: ['巛'],
    strokes: 3,
    name: 'kawa',
    kana: 'かわ',
    meaning: { en: 'river', vi: 'xuyên - sông' }
  },
  {
    number: 48,
    char: '工',
    strokes: 3,
    name: 'takumi',
    kana: 'たくみ',
    meaning: { en: 'work', vi: 'công - thợ' }
  },
  {
    number: 49,
    char: '己',
    strokes: 3,
    name: 'onore',
    kana: 'おのれ',
    meaning: { en: 'oneself', vi: 'kỷ - bản thân' }
  },
  {
    number: 50,
    char: '巾',
    strokes: 3,
    name: 'haba',
    kana: 'はば',
    meaning: { en: 'cloth', vi: 'cân - khăn' }
  },
  {
    number: 51,
    char: '干',
    strokes: 3,
    name: 'kan',
    kana: 'かん',
    meaning: { en: 'dry', vi: 'can - khô' }
  },
  {
    number: 52,
    char: '幺',
    strokes: 3,
    name: 'itogashira',
    kana: 'いとがしら',
    meaning: { en: 'short thread', vi: 'yêu - nhỏ bé' }
  },
  {
    number: 53,
    char: '广',
    strokes: 3,
    name: 'madare',
    kana: 'まだれ',
    meaning: { en: 'shelter', vi: 'nghiễm - mái hiên' }
  },
  {
    number: 54,
    char: '廴',
    strokes: 3,
    name: 'ennyou',
    kana: 'えんにょう',
    meaning: { en: 'long stride', vi: 'dẫn - bước dài' }
  },
  {
    number: 55,
    char: '廾',
    strokes: 3,
    name: 'nijuuashi',
    kana: 'にじゅうあし',
    meaning: { en: 'two hands', vi: 'củng - chắp tay' }
  },
  {
    number: 56,
    char: '弋',
    strokes: 3,
    name: 'shikigamae',
    kana: 'しきがまえ',
    meaning: { en: 'shoot', vi: 'dặc - bắn' }
  },
  {
    number: 57,
    char: '弓',
    strokes: 3,
    name: 'yumi',
    kana: 'ゆみ',
    meaning: { en: 'bow', vi: 'cung - cây cung' }
  },
  {
    number: 58,
    char: '彐',
    strokes: 3,
    name: 'keigashira',
    kana: 'けいがしら',
    meaning: { en: 'snout', vi: 'kệ - mõm lợn' }
  },
  {
    number: 59,
    char: '彡',
    strokes: 3,
    name: 'sanzukuri',
    kana: 'さんづくり',
    meaning: { en: 'bristle', vi: 'sam - lông tóc' }
  },
  {
    number: 60,
    char: '彳',
    strokes: 3,
    name: 'gyouninben',
    kana: 'ぎょうにんべん',
    meaning: { en: 'step', vi: 'xích - bước ngắn' }
  },
  {
    number: 61,
    char: '心',
    variants: ['忄'],
    strokes: 4,
    name: 'kokoro / risshinben',
    kana: 'こころ / りっしんべん',
    meaning: { en: 'heart', vi: 'tâm - trái tim' }
  },
  {
    number: 62,
    char: '戈',
    strokes: 4,
    name: 'hoko',
    kana: 'ほこ',
    meaning: { en: 'halberd', vi: 'qua - cây kích' }
  },
  {
    number: 63,
    char: '戸',
    strokes: 4,
    name: 'to',
    kana: 'と',
    meaning: { en: 'door', vi: 'hộ - cửa' }
  },
  {
    number: 64,
    char: '手',
    variants: ['扌'],
    strokes: 4,
    name: 'te / tehen',
    kana: 'て / てへん',
    meaning: { en: 'hand', vi: 'thủ - tay' }
  },
  {
    number: 65,
    char: '支',
    strokes: 4,
    name: 'shi',
    kana: 'し',
    meaning: { en: 'branch', vi: 'chi - cành' }
  },
  {
    number: 66,
    char: '攴',
    variants: ['攵'],
    strokes: 4,
    name: 'bokuzukuri',
    kana: 'ぼくづくり',
    meaning: { en: 'tap', vi: 'phộc - đánh khẽ' }
  },
  {
    number: 67,
    char: '文',
    strokes: 4,
    name: 'bun',
    kana: 'ぶん',
    meaning: { en: 'writing', vi: 'văn - chữ viết' }
  },
  {
    number: 68,
    char: '斗',
    strokes: 4,
    name: 'to',
    kana: 'と',
    meaning: { en: 'dipper', vi: 'đẩu - cái đấu' }
  },
  {
    number: 69,
    char: '斤',
    strokes: 4,
    name: 'ono',
    kana: 'おの',
    meaning: { en: 'axe', vi: 'cân - cái rìu' }
  },
  {
    number: 70,
    char: '方',
    strokes: 4,
    name: 'hou',
    kana: 'ほう',
    meaning: { en: 'square', vi: 'phương - vuông' }
  },
  {
    number: 71,
    char: '无',
    strokes: 4,
    name: 'nashi',
    kana: 'なし',
    meaning: { en: 'not', vi: 'vô - không' }
  },
  {
    number: 72,
    char: '日',
    strokes: 4,
    name: 'hi',
    kana: 'ひ',
    meaning: { en: 'sun, day', vi: 'nhật - mặt trời' }
  },
  {
    number: 73,
    char: '曰',
    strokes: 4,
    name: 'hirabi',
    kana: 'ひらび',
    meaning: { en: 'say', vi: 'viết - nói rằng' }
  },
  {
    number: 74,
    char: '月',
    strokes: 4,
    name: 'tsuki',
    kana: 'つき',
    meaning: {
      en: 'moon; flesh/body (when used in other kanji)',
      vi: 'nguyệt - mặt trăng; thịt, thân thể (khi ghép chữ)'
    }
  },
  {
    number: 75,
    char: '木',
    strokes: 4,
    name: 'ki',
    kana: 'き',
    meaning: { en: 'tree, wood', vi: 'mộc - cây' }
  },
  {
    number: 76,
    char: '欠',
    strokes: 4,
    name: 'akubi',
    kana: 'あくび',
    meaning: { en: 'lack, yawn', vi: 'khiếm - thiếu; há miệng, ngáp' }
  },
  {
    number: 77,
    char: '止',
    strokes: 4,
    name: 'tomeru',
    kana: 'とめる',
    meaning: { en: 'stop', vi: 'chỉ - dừng' }
  },
  {
    number: 78,
    char: '歹',
    strokes: 4,
    name: 'gatsuhen',
    kana: 'がつへん',
    meaning: { en: 'death', vi: 'đãi - xương tàn' }
  },
  {
    number: 79,
    char: '殳',
    strokes: 4,
    name: 'rumata',
    kana: 'るまた',
    meaning: { en: 'weapon', vi: 'thù - binh khí' }
  },
  {
    number: 80,
    char: '母',
    variants: ['毋'],
    strokes: 5,
    name: 'haha / nakare',
    kana: 'はは',
    meaning: { en: 'mother', vi: 'mẫu - mẹ' }
  },
  {
    number: 81,
    char: '比',
    strokes: 4,
    name: 'kuraberu',
    kana: 'くらべる',
    meaning: { en: 'compare', vi: 'tỷ - so sánh' }
  },
  {
    number: 82,
    char: '毛',
    strokes: 4,
    name: 'ke',
    kana: 'け',
    meaning: { en: 'fur', vi: 'mao - lông' }
  },
  {
    number: 83,
    char: '氏',
    strokes: 4,
    name: 'uji',
    kana: 'うじ',
    meaning: { en: 'clan', vi: 'thị - họ' }
  },
  {
    number: 84,
    char: '气',
    strokes: 4,
    name: 'kigamae',
    kana: 'きがまえ',
    meaning: { en: 'steam', vi: 'khí - hơi' }
  },
  {
    number: 85,
    char: '水',
    variants: ['氵'],
    strokes: 4,
    name: 'mizu / sanzui',
    kana: 'みず / さんずい',
    meaning: { en: 'water', vi: 'thuỷ - nước' }
  },
  {
    number: 86,
    char: '火',
    variants: ['灬'],
    strokes: 4,
    name: 'hi / renga',
    kana: 'ひ / れんが',
    meaning: { en: 'fire', vi: 'hoả - lửa' }
  },
  {
    number: 87,
    char: '爪',
    variants: ['爫'],
    strokes: 4,
    name: 'tsume',
    kana: 'つめ',
    meaning: { en: 'claw', vi: 'trảo - móng vuốt' }
  },
  {
    number: 88,
    char: '父',
    strokes: 4,
    name: 'chichi',
    kana: 'ちち',
    meaning: { en: 'father', vi: 'phụ - cha' }
  },
  {
    number: 89,
    char: '爻',
    strokes: 4,
    name: 'kou',
    kana: 'こう',
    meaning: { en: 'mix', vi: 'hào - hào quẻ' }
  },
  {
    number: 90,
    char: '爿',
    strokes: 4,
    name: 'shouhen',
    kana: 'しょうへん',
    meaning: { en: 'split wood (left)', vi: 'tường - mảnh gỗ' }
  },
  {
    number: 91,
    char: '片',
    strokes: 4,
    name: 'kata',
    kana: 'かた',
    meaning: { en: 'slice', vi: 'phiến - mảnh' }
  },
  {
    number: 92,
    char: '牙',
    strokes: 4,
    name: 'kiba',
    kana: 'きば',
    meaning: { en: 'fang', vi: 'nha - răng nanh' }
  },
  {
    number: 93,
    char: '牛',
    variants: ['牜'],
    strokes: 4,
    name: 'ushi',
    kana: 'うし',
    meaning: { en: 'cow', vi: 'ngưu - trâu bò' }
  },
  {
    number: 94,
    char: '犬',
    variants: ['犭'],
    strokes: 4,
    name: 'inu / kemonohen',
    kana: 'いぬ / けものへん',
    meaning: { en: 'dog', vi: 'khuyển - chó' }
  },
  {
    number: 95,
    char: '玄',
    strokes: 5,
    name: 'gen',
    kana: 'げん',
    meaning: { en: 'profound', vi: 'huyền - sâu kín' }
  },
  {
    number: 96,
    char: '玉',
    variants: ['王'],
    strokes: 5,
    name: 'tama',
    kana: 'たま',
    meaning: { en: 'jade', vi: 'ngọc - đá quý' }
  },
  {
    number: 97,
    char: '瓜',
    strokes: 5,
    name: 'uri',
    kana: 'うり',
    meaning: { en: 'melon', vi: 'qua - quả dưa' }
  },
  {
    number: 98,
    char: '瓦',
    strokes: 5,
    name: 'kawara',
    kana: 'かわら',
    meaning: { en: 'tile', vi: 'ngoã - ngói' }
  },
  {
    number: 99,
    char: '甘',
    strokes: 5,
    name: 'amai',
    kana: 'あまい',
    meaning: { en: 'sweet', vi: 'cam - ngọt' }
  },
  {
    number: 100,
    char: '生',
    strokes: 5,
    name: 'umareru',
    kana: 'うまれる',
    meaning: { en: 'life', vi: 'sinh - sống' }
  },
  {
    number: 101,
    char: '用',
    strokes: 5,
    name: 'mochiiru',
    kana: 'もちいる',
    meaning: { en: 'use', vi: 'dụng - dùng' }
  },
  {
    number: 102,
    char: '田',
    strokes: 5,
    name: 'ta',
    kana: 'た',
    meaning: { en: 'field', vi: 'điền - ruộng' }
  },
  {
    number: 103,
    char: '疋',
    strokes: 5,
    name: 'hiki',
    kana: 'ひき',
    meaning: { en: 'bolt of cloth', vi: 'thất - tấm vải' }
  },
  {
    number: 104,
    char: '疒',
    strokes: 5,
    name: 'yamaidare',
    kana: 'やまいだれ',
    meaning: { en: 'sickness', vi: 'nạch - bệnh tật' }
  },
  {
    number: 105,
    char: '癶',
    strokes: 5,
    name: 'hatsugashira',
    kana: 'はつがしら',
    meaning: { en: 'outspread legs, departure', vi: 'bát - hai chân dang ra (bộ chân bước)' }
  },
  {
    number: 106,
    char: '白',
    strokes: 5,
    name: 'shiro',
    kana: 'しろ',
    meaning: { en: 'white', vi: 'bạch - trắng' }
  },
  {
    number: 107,
    char: '皮',
    strokes: 5,
    name: 'kawa',
    kana: 'かわ',
    meaning: { en: 'skin', vi: 'bì - da' }
  },
  {
    number: 108,
    char: '皿',
    strokes: 5,
    name: 'sara',
    kana: 'さら',
    meaning: { en: 'dish', vi: 'mãnh - bát đĩa' }
  },
  {
    number: 109,
    char: '目',
    strokes: 5,
    name: 'me',
    kana: 'め',
    meaning: { en: 'eye', vi: 'mục - mắt' }
  },
  {
    number: 110,
    char: '矛',
    strokes: 5,
    name: 'hoko',
    kana: 'ほこ',
    meaning: { en: 'spear', vi: 'mâu - cái giáo' }
  },
  {
    number: 111,
    char: '矢',
    strokes: 5,
    name: 'ya',
    kana: 'や',
    meaning: { en: 'arrow', vi: 'thỉ - mũi tên' }
  },
  {
    number: 112,
    char: '石',
    strokes: 5,
    name: 'ishi',
    kana: 'いし',
    meaning: { en: 'stone', vi: 'thạch - đá' }
  },
  {
    number: 113,
    char: '示',
    variants: ['礻'],
    strokes: 5,
    name: 'shimesu',
    kana: 'しめす',
    meaning: { en: 'altar, spirit, to show', vi: 'thị - bàn thờ; thần linh' }
  },
  {
    number: 114,
    char: '禸',
    strokes: 5,
    name: 'juu',
    kana: 'じゅう',
    meaning: { en: 'track', vi: 'nhựu - vết chân' }
  },
  {
    number: 115,
    char: '禾',
    strokes: 5,
    name: 'nogihen',
    kana: 'のぎへん',
    meaning: { en: 'grain', vi: 'hoà - lúa' }
  },
  {
    number: 116,
    char: '穴',
    strokes: 5,
    name: 'ana',
    kana: 'あな',
    meaning: { en: 'cave', vi: 'huyệt - hang' }
  },
  {
    number: 117,
    char: '立',
    strokes: 5,
    name: 'tatsu',
    kana: 'たつ',
    meaning: { en: 'stand', vi: 'lập - đứng' }
  },
  {
    number: 118,
    char: '竹',
    strokes: 6,
    name: 'take',
    kana: 'たけ',
    meaning: { en: 'bamboo', vi: 'trúc - tre' }
  },
  {
    number: 119,
    char: '米',
    strokes: 6,
    name: 'kome',
    kana: 'こめ',
    meaning: { en: 'rice', vi: 'mễ - gạo' }
  },
  {
    number: 120,
    char: '糸',
    variants: ['糹'],
    strokes: 6,
    name: 'ito',
    kana: 'いと',
    meaning: { en: 'thread, silk', vi: 'mịch - sợi tơ' }
  },
  {
    number: 121,
    char: '缶',
    strokes: 6,
    name: 'hotogi',
    kana: 'ほとぎ',
    meaning: { en: 'jar', vi: 'phẫu - vò sành' }
  },
  {
    number: 122,
    char: '网',
    variants: ['罒'],
    strokes: 6,
    name: 'ami',
    kana: 'あみ',
    meaning: { en: 'net', vi: 'võng - cái lưới' }
  },
  {
    number: 123,
    char: '羊',
    strokes: 6,
    name: 'hitsuji',
    kana: 'ひつじ',
    meaning: { en: 'sheep', vi: 'dương - con cừu (dê)' }
  },
  {
    number: 124,
    char: '羽',
    strokes: 6,
    name: 'hane',
    kana: 'はね',
    meaning: { en: 'feather', vi: 'vũ - lông vũ' }
  },
  {
    number: 125,
    char: '老',
    variants: ['耂'],
    strokes: 6,
    name: 'oiru',
    kana: 'おいる',
    meaning: { en: 'old', vi: 'lão - già' }
  },
  {
    number: 126,
    char: '而',
    strokes: 6,
    name: 'shikaru',
    kana: 'しかる',
    meaning: { en: 'and', vi: 'nhi - mà' }
  },
  {
    number: 127,
    char: '耒',
    strokes: 6,
    name: 'suki',
    kana: 'すき',
    meaning: { en: 'plow', vi: 'lỗi - cái cày' }
  },
  {
    number: 128,
    char: '耳',
    strokes: 6,
    name: 'mimi',
    kana: 'みみ',
    meaning: { en: 'ear', vi: 'nhĩ - tai' }
  },
  {
    number: 129,
    char: '聿',
    strokes: 6,
    name: 'fudezukuri',
    kana: 'ふでづくり',
    meaning: { en: 'brush', vi: 'duật - cây bút' }
  },
  {
    number: 130,
    char: '肉',
    variants: ['⺼'],
    strokes: 6,
    name: 'niku / nikuzuki',
    kana: 'にく / にくづき',
    meaning: { en: 'meat, flesh', vi: 'nhục - thịt' }
  },
  {
    number: 131,
    char: '臣',
    strokes: 6,
    name: 'shin',
    kana: 'しん',
    meaning: { en: 'minister', vi: 'thần - bề tôi' }
  },
  {
    number: 132,
    char: '自',
    strokes: 6,
    name: 'mizukara',
    kana: 'みずから',
    meaning: { en: 'self; nose (original sense)', vi: 'tự - tự mình; cái mũi (nghĩa gốc)' }
  },
  {
    number: 133,
    char: '至',
    strokes: 6,
    name: 'itaru',
    kana: 'いたる',
    meaning: { en: 'arrive', vi: 'chí - đến' }
  },
  {
    number: 134,
    char: '臼',
    strokes: 6,
    name: 'usu',
    kana: 'うす',
    meaning: { en: 'mortar', vi: 'cữu - cái cối' }
  },
  {
    number: 135,
    char: '舌',
    strokes: 6,
    name: 'shita',
    kana: 'した',
    meaning: { en: 'tongue', vi: 'thiệt - lưỡi' }
  },
  {
    number: 136,
    char: '舛',
    strokes: 6,
    name: 'maisuashi',
    kana: 'まいすあし',
    meaning: { en: 'oppose', vi: 'suyễn - trái nhau' }
  },
  {
    number: 137,
    char: '舟',
    strokes: 6,
    name: 'fune',
    kana: 'ふね',
    meaning: { en: 'boat', vi: 'chu - thuyền' }
  },
  {
    number: 138,
    char: '艮',
    strokes: 6,
    name: 'ushitora',
    kana: 'うしとら',
    meaning: { en: 'stopping', vi: 'cấn - dừng lại' }
  },
  {
    number: 139,
    char: '色',
    strokes: 6,
    name: 'iro',
    kana: 'いろ',
    meaning: { en: 'color', vi: 'sắc - màu' }
  },
  {
    number: 140,
    char: '艸',
    variants: ['艹'],
    strokes: 6,
    name: 'kusakanmuri',
    kana: 'くさかんむり',
    meaning: { en: 'grass', vi: 'thảo - cỏ' }
  },
  {
    number: 141,
    char: '虍',
    strokes: 6,
    name: 'toragashira',
    kana: 'とらがしら',
    meaning: { en: 'tiger', vi: 'hô - đầu con hổ' }
  },
  {
    number: 142,
    char: '虫',
    strokes: 6,
    name: 'mushi',
    kana: 'むし',
    meaning: { en: 'insect', vi: 'trùng - sâu bọ' }
  },
  {
    number: 143,
    char: '血',
    strokes: 6,
    name: 'chi',
    kana: 'ち',
    meaning: { en: 'blood', vi: 'huyết - máu' }
  },
  {
    number: 144,
    char: '行',
    strokes: 6,
    name: 'gyou',
    kana: 'ぎょう',
    meaning: { en: 'go, walk', vi: 'hành - đi' }
  },
  {
    number: 145,
    char: '衣',
    variants: ['衤'],
    strokes: 6,
    name: 'koromo',
    kana: 'ころも',
    meaning: { en: 'clothes', vi: 'y - áo' }
  },
  {
    number: 146,
    char: '襾',
    variants: ['西'],
    strokes: 6,
    name: 'oou',
    kana: 'おおう',
    meaning: { en: 'cover, west', vi: 'á - che đậy' }
  },
  {
    number: 147,
    char: '見',
    strokes: 7,
    name: 'miru',
    kana: 'みる',
    meaning: { en: 'see', vi: 'kiến - thấy' }
  },
  {
    number: 148,
    char: '角',
    strokes: 7,
    name: 'tsuno',
    kana: 'つの',
    meaning: { en: 'horn', vi: 'giác - sừng' }
  },
  {
    number: 149,
    char: '言',
    variants: ['訁'],
    strokes: 7,
    name: 'gonben',
    kana: 'ごんべん',
    meaning: { en: 'speech', vi: 'ngôn - lời nói' }
  },
  {
    number: 150,
    char: '谷',
    strokes: 7,
    name: 'tani',
    kana: 'たに',
    meaning: { en: 'valley', vi: 'cốc - thung lũng' }
  },
  {
    number: 151,
    char: '豆',
    strokes: 7,
    name: 'mame',
    kana: 'まめ',
    meaning: { en: 'bean', vi: 'đậu - hạt đậu' }
  },
  {
    number: 152,
    char: '豕',
    strokes: 7,
    name: 'inoko',
    kana: 'いのこ',
    meaning: { en: 'pig', vi: 'thỉ - con lợn' }
  },
  {
    number: 153,
    char: '豸',
    strokes: 7,
    name: 'mujinahen',
    kana: 'むじなへん',
    meaning: { en: 'clawed animal', vi: 'trĩ - loài thú' }
  },
  {
    number: 154,
    char: '貝',
    strokes: 7,
    name: 'kai',
    kana: 'かい',
    meaning: { en: 'shell, money', vi: 'bối - vỏ sò, tiền' }
  },
  {
    number: 155,
    char: '赤',
    strokes: 7,
    name: 'aka',
    kana: 'あか',
    meaning: { en: 'red', vi: 'xích - đỏ' }
  },
  {
    number: 156,
    char: '走',
    strokes: 7,
    name: 'hashiru',
    kana: 'はしる',
    meaning: { en: 'run', vi: 'tẩu - chạy' }
  },
  {
    number: 157,
    char: '足',
    strokes: 7,
    name: 'ashi',
    kana: 'あし',
    meaning: { en: 'foot', vi: 'túc - chân' }
  },
  {
    number: 158,
    char: '身',
    strokes: 7,
    name: 'mi',
    kana: 'み',
    meaning: { en: 'body', vi: 'thân - thân thể' }
  },
  {
    number: 159,
    char: '車',
    strokes: 7,
    name: 'kuruma',
    kana: 'くるま',
    meaning: { en: 'cart, car', vi: 'xa - xe' }
  },
  {
    number: 160,
    char: '辛',
    strokes: 7,
    name: 'karai',
    kana: 'からい',
    meaning: { en: 'bitter', vi: 'tân - cay' }
  },
  {
    number: 161,
    char: '辰',
    strokes: 7,
    name: 'shinnotatsu',
    kana: 'しんのたつ',
    meaning: { en: 'morning', vi: 'thần - buổi sớm' }
  },
  {
    number: 162,
    char: '辵',
    variants: ['辶'],
    strokes: 7,
    name: 'shinnyou',
    kana: 'しんにょう',
    meaning: { en: 'movement', vi: 'sước - bước đi' }
  },
  {
    number: 163,
    char: '邑',
    variants: ['阝'],
    strokes: 7,
    name: 'oozato',
    kana: 'おおざと',
    meaning: { en: 'village (right)', vi: 'ấp - làng (phải)' }
  },
  {
    number: 164,
    char: '酉',
    strokes: 7,
    name: 'sake',
    kana: 'さけ',
    meaning: { en: 'wine, bird', vi: 'dậu - rượu' }
  },
  {
    number: 165,
    char: '釆',
    strokes: 7,
    name: 'nogome',
    kana: 'のごめ',
    meaning: { en: 'distinguish', vi: 'biện - phân biệt' }
  },
  {
    number: 166,
    char: '里',
    strokes: 7,
    name: 'sato',
    kana: 'さと',
    meaning: { en: 'village', vi: 'lý - làng, dặm' }
  },
  {
    number: 167,
    char: '金',
    strokes: 8,
    name: 'kane',
    kana: 'かね',
    meaning: { en: 'metal, gold', vi: 'kim - kim loại' }
  },
  {
    number: 168,
    char: '長',
    strokes: 8,
    name: 'nagai',
    kana: 'ながい',
    meaning: { en: 'long', vi: 'trường - dài' }
  },
  {
    number: 169,
    char: '門',
    strokes: 8,
    name: 'mon',
    kana: 'もん',
    meaning: { en: 'gate', vi: 'môn - cửa lớn' }
  },
  {
    number: 170,
    char: '阜',
    variants: ['阝'],
    strokes: 8,
    name: 'kozatohen',
    kana: 'こざとへん',
    meaning: { en: 'mound (left)', vi: 'phụ - đống đất (trái)' }
  },
  {
    number: 171,
    char: '隶',
    strokes: 8,
    name: 'rei',
    kana: 'れい',
    meaning: { en: 'capture', vi: 'đãi - bắt kịp' }
  },
  {
    number: 172,
    char: '隹',
    strokes: 8,
    name: 'furutori',
    kana: 'ふるとり',
    meaning: { en: 'short-tailed bird', vi: 'chuy - chim đuôi ngắn' }
  },
  {
    number: 173,
    char: '雨',
    strokes: 8,
    name: 'ame',
    kana: 'あめ',
    meaning: { en: 'rain', vi: 'vũ - mưa' }
  },
  {
    number: 174,
    char: '青',
    strokes: 8,
    name: 'ao',
    kana: 'あお',
    meaning: { en: 'blue, green', vi: 'thanh - xanh' }
  },
  {
    number: 175,
    char: '非',
    strokes: 8,
    name: 'arazu',
    kana: 'あらず',
    meaning: { en: 'wrong', vi: 'phi - sai, không' }
  },
  {
    number: 176,
    char: '面',
    strokes: 9,
    name: 'men',
    kana: 'めん',
    meaning: { en: 'face', vi: 'diện - mặt' }
  },
  {
    number: 177,
    char: '革',
    strokes: 9,
    name: 'kawa',
    kana: 'かわ',
    meaning: { en: 'leather', vi: 'cách - da thuộc' }
  },
  {
    number: 178,
    char: '韋',
    strokes: 9,
    name: 'namegawa',
    kana: 'なめがわ',
    meaning: { en: 'tanned leather', vi: 'vi - da mềm' }
  },
  {
    number: 179,
    char: '韭',
    strokes: 9,
    name: 'nira',
    kana: 'にら',
    meaning: { en: 'leek', vi: 'phỉ - rau hẹ' }
  },
  {
    number: 180,
    char: '音',
    strokes: 9,
    name: 'oto',
    kana: 'おと',
    meaning: { en: 'sound', vi: 'âm - âm thanh' }
  },
  {
    number: 181,
    char: '頁',
    strokes: 9,
    name: 'ougai',
    kana: 'おうがい',
    meaning: { en: 'head, page', vi: 'hiệt - đầu, trang' }
  },
  {
    number: 182,
    char: '風',
    strokes: 9,
    name: 'kaze',
    kana: 'かぜ',
    meaning: { en: 'wind', vi: 'phong - gió' }
  },
  {
    number: 183,
    char: '飛',
    strokes: 9,
    name: 'tobu',
    kana: 'とぶ',
    meaning: { en: 'fly', vi: 'phi - bay' }
  },
  {
    number: 184,
    char: '食',
    variants: ['飠'],
    strokes: 9,
    name: 'shoku',
    kana: 'しょく',
    meaning: { en: 'eat, food', vi: 'thực - ăn' }
  },
  {
    number: 185,
    char: '首',
    strokes: 9,
    name: 'kubi',
    kana: 'くび',
    meaning: { en: 'neck, head', vi: 'thủ - đầu, cổ' }
  },
  {
    number: 186,
    char: '香',
    strokes: 9,
    name: 'kaori',
    kana: 'かおり',
    meaning: { en: 'fragrance', vi: 'hương - mùi thơm' }
  },
  {
    number: 187,
    char: '馬',
    strokes: 10,
    name: 'uma',
    kana: 'うま',
    meaning: { en: 'horse', vi: 'mã - ngựa' }
  },
  {
    number: 188,
    char: '骨',
    strokes: 10,
    name: 'hone',
    kana: 'ほね',
    meaning: { en: 'bone', vi: 'cốt - xương' }
  },
  {
    number: 189,
    char: '高',
    strokes: 10,
    name: 'takai',
    kana: 'たかい',
    meaning: { en: 'tall', vi: 'cao - cao' }
  },
  {
    number: 190,
    char: '髟',
    strokes: 10,
    name: 'kamigashira',
    kana: 'かみがしら',
    meaning: { en: 'long hair', vi: 'tiêu - tóc dài' }
  },
  {
    number: 191,
    char: '鬥',
    strokes: 10,
    name: 'tatakaigamae',
    kana: 'たたかいがまえ',
    meaning: { en: 'fight', vi: 'đấu - đánh nhau' }
  },
  {
    number: 192,
    char: '鬯',
    strokes: 10,
    name: 'chou',
    kana: 'ちょう',
    meaning: { en: 'sacrificial wine', vi: 'sưởng - rượu tế' }
  },
  {
    number: 193,
    char: '鬲',
    strokes: 10,
    name: 'kanae',
    kana: 'かなえ',
    meaning: { en: 'cauldron', vi: 'cách - cái vạc' }
  },
  {
    number: 194,
    char: '鬼',
    strokes: 10,
    name: 'oni',
    kana: 'おに',
    meaning: { en: 'ghost, demon', vi: 'quỷ - ma quỷ' }
  },
  {
    number: 195,
    char: '魚',
    strokes: 11,
    name: 'uo',
    kana: 'うお',
    meaning: { en: 'fish', vi: 'ngư - cá' }
  },
  {
    number: 196,
    char: '鳥',
    strokes: 11,
    name: 'tori',
    kana: 'とり',
    meaning: { en: 'bird', vi: 'điểu - chim' }
  },
  {
    number: 197,
    char: '鹵',
    strokes: 11,
    name: 'ro',
    kana: 'ろ',
    meaning: { en: 'salt', vi: 'lỗ - đất mặn' }
  },
  {
    number: 198,
    char: '鹿',
    strokes: 11,
    name: 'shika',
    kana: 'しか',
    meaning: { en: 'deer', vi: 'lộc - con hươu' }
  },
  {
    number: 199,
    char: '麥',
    variants: ['麦'],
    strokes: 11,
    name: 'mugi',
    kana: 'むぎ',
    meaning: { en: 'wheat', vi: 'mạch - lúa mì' }
  },
  {
    number: 200,
    char: '麻',
    strokes: 11,
    name: 'asa',
    kana: 'あさ',
    meaning: { en: 'hemp', vi: 'ma - cây gai' }
  },
  {
    number: 201,
    char: '黃',
    variants: ['黄'],
    strokes: 12,
    name: 'ki',
    kana: 'き',
    meaning: { en: 'yellow', vi: 'hoàng - vàng' }
  },
  {
    number: 202,
    char: '黍',
    strokes: 12,
    name: 'kibi',
    kana: 'きび',
    meaning: { en: 'millet', vi: 'thử - cây kê (lúa nếp)' }
  },
  {
    number: 203,
    char: '黑',
    variants: ['黒'],
    strokes: 12,
    name: 'kuro',
    kana: 'くろ',
    meaning: { en: 'black', vi: 'hắc - đen' }
  },
  {
    number: 204,
    char: '黹',
    strokes: 12,
    name: 'nuu',
    kana: 'ぬう',
    meaning: { en: 'embroidery', vi: 'chỉ - may vá' }
  },
  {
    number: 205,
    char: '黽',
    strokes: 13,
    name: 'kaeru',
    kana: 'かえる',
    meaning: { en: 'frog', vi: 'mãnh - con ếch' }
  },
  {
    number: 206,
    char: '鼎',
    strokes: 13,
    name: 'kanae',
    kana: 'かなえ',
    meaning: { en: 'tripod', vi: 'đỉnh - cái đỉnh' }
  },
  {
    number: 207,
    char: '鼓',
    strokes: 13,
    name: 'tsuzumi',
    kana: 'つづみ',
    meaning: { en: 'drum', vi: 'cổ - cái trống' }
  },
  {
    number: 208,
    char: '鼠',
    strokes: 13,
    name: 'nezumi',
    kana: 'ねずみ',
    meaning: { en: 'rat', vi: 'thử - con chuột' }
  },
  {
    number: 209,
    char: '鼻',
    strokes: 14,
    name: 'hana',
    kana: 'はな',
    meaning: { en: 'nose', vi: 'tỵ - mũi' }
  },
  {
    number: 210,
    char: '齊',
    variants: ['斉'],
    strokes: 14,
    name: 'sei',
    kana: 'せい',
    meaning: { en: 'even', vi: 'tề - đều nhau' }
  },
  {
    number: 211,
    char: '齒',
    variants: ['歯'],
    strokes: 15,
    name: 'ha',
    kana: 'は',
    meaning: { en: 'tooth', vi: 'xỉ - răng' }
  },
  {
    number: 212,
    char: '龍',
    variants: ['竜'],
    strokes: 16,
    name: 'ryuu',
    kana: 'りゅう',
    meaning: { en: 'dragon', vi: 'long - rồng' }
  },
  {
    number: 213,
    char: '龜',
    variants: ['亀'],
    strokes: 16,
    name: 'kame',
    kana: 'かめ',
    meaning: { en: 'turtle', vi: 'quy - con rùa' }
  },
  {
    number: 214,
    char: '龠',
    strokes: 17,
    name: 'yaku',
    kana: 'やく',
    meaning: { en: 'flute', vi: 'dược - sáo' }
  }
];
