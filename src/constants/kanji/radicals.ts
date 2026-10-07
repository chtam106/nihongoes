import type { Bilingual } from './types.ts';

/** One of the 214 traditional Kangxi radicals (部首) used to build kanji. */
export type Radical = {
  /** Traditional Kangxi index (data identity / usage keys). Card tags use stroke-order index. */
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
    meaning: { en: 'one, unity, the number one', vi: 'nhất - một, sự thống nhất, số một' }
  },
  {
    number: 2,
    char: '丨',
    strokes: 1,
    name: 'bou',
    kana: 'ぼう',
    meaning: { en: 'vertical line, rod stroke', vi: 'cổn - nét sổ thẳng đứng' }
  },
  {
    number: 3,
    char: '丶',
    strokes: 1,
    name: 'ten',
    kana: 'てん',
    meaning: { en: 'dot, point stroke', vi: 'chủ - dấu chấm, nét chấm' }
  },
  {
    number: 4,
    char: '丿',
    strokes: 1,
    name: 'no',
    kana: 'の',
    meaning: { en: 'slash, left-falling stroke', vi: 'phiệt - nét phẩy, nét xiên trái' }
  },
  {
    number: 5,
    char: '乙',
    variants: ['乚'],
    strokes: 1,
    name: 'otsu',
    kana: 'おつ',
    meaning: {
      en: 'the second heavenly stem, fishhook-like stroke',
      vi: 'ất - can Ất (thiên can thứ hai), nét móc câu'
    }
  },
  {
    number: 6,
    char: '亅',
    strokes: 1,
    name: 'hanebou',
    kana: 'はねぼう',
    meaning: { en: 'hook, hooked vertical stroke', vi: 'quyết - nét móc, nét sổ có móc' }
  },
  {
    number: 7,
    char: '二',
    strokes: 2,
    name: 'ni',
    kana: 'に',
    meaning: { en: 'two, the number two', vi: 'nhị - hai, số hai' }
  },
  {
    number: 8,
    char: '亠',
    strokes: 2,
    name: 'nabebuta',
    kana: 'なべぶた',
    meaning: { en: 'lid, cover, pot lid', vi: 'đầu - nắp đậy, nắp vung' }
  },
  {
    number: 9,
    char: '人',
    variants: ['亻'],
    strokes: 2,
    name: 'hito / ninben',
    kana: 'ひと / にんべん',
    meaning: { en: 'person, human being', vi: 'nhân - người, con người' }
  },
  {
    number: 10,
    char: '儿',
    strokes: 2,
    name: 'hitoashi',
    kana: 'ひとあし',
    meaning: {
      en: 'legs, human legs (often under a character)',
      vi: 'nhân - chân người (thường đặt dưới chữ)'
    }
  },
  {
    number: 11,
    char: '入',
    strokes: 2,
    name: 'iru',
    kana: 'いる',
    meaning: { en: 'enter, go in, put in', vi: 'nhập - vào, đi vào, đưa vào' }
  },
  {
    number: 12,
    char: '八',
    strokes: 2,
    name: 'hachi',
    kana: 'はち',
    meaning: { en: 'eight, to divide, split apart', vi: 'bát - tám, chia tách, tách ra' }
  },
  {
    number: 13,
    char: '冂',
    strokes: 2,
    name: 'keigamae',
    kana: 'けいがまえ',
    meaning: {
      en: 'down box, open enclosure (open at bottom)',
      vi: 'quynh - khung bao mở xuống dưới'
    }
  },
  {
    number: 14,
    char: '冖',
    strokes: 2,
    name: 'wakanmuri',
    kana: 'わかんむり',
    meaning: { en: 'cover, cloth cover, crown', vi: 'mịch - trùm khăn, nắp che' }
  },
  {
    number: 15,
    char: '冫',
    strokes: 2,
    name: 'nisui',
    kana: 'にすい',
    meaning: {
      en: 'ice, ice-cold water, freeze',
      vi: 'băng - nước đá, lạnh giá, đóng băng'
    }
  },
  {
    number: 16,
    char: '几',
    strokes: 2,
    name: 'tsukue',
    kana: 'つくえ',
    meaning: { en: 'table, small stand, stool', vi: 'kỷ - cái bàn, ghế thấp, giá kê' }
  },
  {
    number: 17,
    char: '凵',
    strokes: 2,
    name: 'ukebako',
    kana: 'うけばこ',
    meaning: {
      en: 'open box, receptacle, container (open at top)',
      vi: 'khảm - cái hộp mở miệng, đồ chứa'
    }
  },
  {
    number: 18,
    char: '刀',
    variants: ['刂'],
    strokes: 2,
    name: 'katana / rittou',
    kana: 'かたな / りっとう',
    meaning: { en: 'knife, blade, sword', vi: 'đao - con dao, lưỡi dao, kiếm' }
  },
  {
    number: 19,
    char: '力',
    strokes: 2,
    name: 'chikara',
    kana: 'ちから',
    meaning: { en: 'power, strength, force', vi: 'lực - sức lực, sức mạnh' }
  },
  {
    number: 20,
    char: '勹',
    strokes: 2,
    name: 'tsutsumigamae',
    kana: 'つつみがまえ',
    meaning: { en: 'wrap, envelop, enclose', vi: 'bao - bao bọc, bọc lại' }
  },
  {
    number: 21,
    char: '匕',
    strokes: 2,
    name: 'saji',
    kana: 'さじ',
    meaning: {
      en: 'spoon, ladle, dagger-like tool',
      vi: 'chuỷ - cái thìa, muỗng, dao nhỏ dạng thìa'
    }
  },
  {
    number: 22,
    char: '匚',
    strokes: 2,
    name: 'hakogamae',
    kana: 'はこがまえ',
    meaning: {
      en: 'box, chest, framing enclosure (open on right)',
      vi: 'phương - cái tủ, khung hộp (mở bên phải)'
    }
  },
  {
    number: 23,
    char: '匸',
    strokes: 2,
    name: 'kakushigamae',
    kana: 'かくしがまえ',
    meaning: { en: 'hiding enclosure, conceal', vi: 'hệ - che giấu, khung kín' }
  },
  {
    number: 24,
    char: '十',
    strokes: 2,
    name: 'juu',
    kana: 'じゅう',
    meaning: { en: 'ten, complete set, all', vi: 'thập - mười, đầy đủ, trọn vẹn' }
  },
  {
    number: 25,
    char: '卜',
    strokes: 2,
    name: 'boku',
    kana: 'ぼく',
    meaning: { en: 'divination, fortune-telling, oracle', vi: 'bốc - bói toán, xem quẻ' }
  },
  {
    number: 26,
    char: '卩',
    strokes: 2,
    name: 'fushizukuri',
    kana: 'ふしづくり',
    meaning: { en: 'seal, official stamp, joint, node', vi: 'tiết - con dấu, đốt, khớp' }
  },
  {
    number: 27,
    char: '厂',
    strokes: 2,
    name: 'gandare',
    kana: 'がんだれ',
    meaning: { en: 'cliff, overhanging rock face', vi: 'hán - sườn núi, vách đá che' }
  },
  {
    number: 28,
    char: '厶',
    strokes: 2,
    name: 'mu',
    kana: 'む',
    meaning: { en: 'private, personal, selfish', vi: 'khư - riêng tư, tư nhân, ích kỷ' }
  },
  {
    number: 29,
    char: '又',
    strokes: 2,
    name: 'mata',
    kana: 'また',
    meaning: {
      en: 'again, moreover; hand (when used in other kanji)',
      vi: 'hựu - lại nữa, hơn nữa; bàn tay (khi ghép chữ)'
    }
  },
  {
    number: 30,
    char: '口',
    strokes: 3,
    name: 'kuchi',
    kana: 'くち',
    meaning: { en: 'mouth, opening, speech, say', vi: 'khẩu - miệng, lỗ mở, lời nói' }
  },
  {
    number: 31,
    char: '囗',
    strokes: 3,
    name: 'kunigamae',
    kana: 'くにがまえ',
    meaning: { en: 'enclosure, surrounding border', vi: 'vi - vây quanh, khung bao kín' }
  },
  {
    number: 32,
    char: '土',
    strokes: 3,
    name: 'tsuchi',
    kana: 'つち',
    meaning: { en: 'earth, soil, ground', vi: 'thổ - đất, đất đai, mặt đất' }
  },
  {
    number: 33,
    char: '士',
    strokes: 3,
    name: 'samurai',
    kana: 'さむらい',
    meaning: {
      en: 'scholar, gentleman, samurai, warrior class',
      vi: 'sĩ - kẻ sĩ, quý ông, tầng lớp văn võ'
    }
  },
  {
    number: 34,
    char: '夂',
    strokes: 3,
    name: 'chi',
    kana: 'ち',
    meaning: {
      en: 'to come after, trail behind, winter-like form',
      vi: 'truy - đến sau, theo sau'
    }
  },
  {
    number: 35,
    char: '夊',
    strokes: 3,
    name: 'suinyou',
    kana: 'すいにょう',
    meaning: { en: 'go slowly, drag the feet', vi: 'tuy - đi chậm, lê bước' }
  },
  {
    number: 36,
    char: '夕',
    strokes: 3,
    name: 'yuube',
    kana: 'ゆうべ',
    meaning: { en: 'evening, dusk, nightfall', vi: 'tịch - buổi tối, chạng vạng' }
  },
  {
    number: 37,
    char: '大',
    strokes: 3,
    name: 'dai',
    kana: 'だい',
    meaning: { en: 'big, large, great', vi: 'đại - to lớn, lớn lao' }
  },
  {
    number: 38,
    char: '女',
    strokes: 3,
    name: 'onna',
    kana: 'おんな',
    meaning: { en: 'woman, female, girl', vi: 'nữ - phụ nữ, con gái' }
  },
  {
    number: 39,
    char: '子',
    strokes: 3,
    name: 'ko',
    kana: 'こ',
    meaning: {
      en: 'child, offspring, seed, small thing',
      vi: 'tử - con, đứa trẻ, hạt, vật nhỏ'
    }
  },
  {
    number: 40,
    char: '宀',
    strokes: 3,
    name: 'ukanmuri',
    kana: 'うかんむり',
    meaning: { en: 'roof, house cover, dwelling', vi: 'miên - mái nhà, chỗ ở có mái' }
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
    meaning: { en: 'small, little, minor', vi: 'tiểu - nhỏ, bé, ít' }
  },
  {
    number: 43,
    char: '尢',
    variants: ['尤'],
    strokes: 3,
    name: 'dainomage',
    kana: 'だいのまげ',
    meaning: { en: 'lame, crooked legs, limp', vi: 'uông - què chân, chân khập khiễng' }
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
    meaning: { en: 'sprout, young plant shoot', vi: 'triệt - mầm cây, chồi non' }
  },
  {
    number: 46,
    char: '山',
    strokes: 3,
    name: 'yama',
    kana: 'やま',
    meaning: { en: 'mountain, hill, peak', vi: 'sơn - núi, đồi, đỉnh núi' }
  },
  {
    number: 47,
    char: '川',
    variants: ['巛'],
    strokes: 3,
    name: 'kawa',
    kana: 'かわ',
    meaning: { en: 'river, stream, flowing water', vi: 'xuyên - sông, dòng chảy' }
  },
  {
    number: 48,
    char: '工',
    strokes: 3,
    name: 'takumi',
    kana: 'たくみ',
    meaning: {
      en: 'work, craft, artisan, labor',
      vi: 'công - thợ, nghề thủ công, lao động'
    }
  },
  {
    number: 49,
    char: '己',
    strokes: 3,
    name: 'onore',
    kana: 'おのれ',
    meaning: {
      en: 'oneself, self, snake-like form (original)',
      vi: 'kỷ - bản thân, chính mình'
    }
  },
  {
    number: 50,
    char: '巾',
    strokes: 3,
    name: 'haba',
    kana: 'はば',
    meaning: { en: 'cloth, towel, fabric strip', vi: 'cân - khăn, mảnh vải' }
  },
  {
    number: 51,
    char: '干',
    strokes: 3,
    name: 'kan',
    kana: 'かん',
    meaning: {
      en: 'dry, drought, shield, oppose',
      vi: 'can - khô, hạn, cái khiên, chống lại'
    }
  },
  {
    number: 52,
    char: '幺',
    strokes: 3,
    name: 'itogashira',
    kana: 'いとがしら',
    meaning: {
      en: 'short thread, tiny, immature, young',
      vi: 'yêu - sợi ngắn, nhỏ bé, non trẻ'
    }
  },
  {
    number: 53,
    char: '广',
    strokes: 3,
    name: 'madare',
    kana: 'まだれ',
    meaning: {
      en: 'shelter, sloping roof, house lean-to',
      vi: 'nghiễm - mái hiên, chỗ che nghiêng'
    }
  },
  {
    number: 54,
    char: '廴',
    strokes: 3,
    name: 'ennyou',
    kana: 'えんにょう',
    meaning: { en: 'long stride, stretch out the legs', vi: 'dẫn - bước dài, dang chân' }
  },
  {
    number: 55,
    char: '廾',
    strokes: 3,
    name: 'nijuuashi',
    kana: 'にじゅうあし',
    meaning: {
      en: 'two hands joined, clasp hands',
      vi: 'củng - chắp tay, hai tay đưa lên'
    }
  },
  {
    number: 56,
    char: '弋',
    strokes: 3,
    name: 'shikigamae',
    kana: 'しきがまえ',
    meaning: { en: 'shoot with a bow, stake, peg', vi: 'dặc - bắn cung, cái cọc' }
  },
  {
    number: 57,
    char: '弓',
    strokes: 3,
    name: 'yumi',
    kana: 'ゆみ',
    meaning: { en: 'bow (weapon), arched shape', vi: 'cung - cây cung, hình cong' }
  },
  {
    number: 58,
    char: '彐',
    strokes: 3,
    name: 'keigashira',
    kana: 'けいがしら',
    meaning: { en: 'snout, pig snout, hand-like form', vi: 'kệ - mõm lợn, dạng bàn tay' }
  },
  {
    number: 59,
    char: '彡',
    strokes: 3,
    name: 'sanzukuri',
    kana: 'さんづくり',
    meaning: {
      en: 'bristle, hair ornament, streaks, pattern',
      vi: 'sam - lông tóc, chùm lông, nét vẽ trang trí'
    }
  },
  {
    number: 60,
    char: '彳',
    strokes: 3,
    name: 'gyouninben',
    kana: 'ぎょうにんべん',
    meaning: {
      en: 'step, walk slowly, left half of going',
      vi: 'xích - bước ngắn, đi chậm, nửa trái của bộ hành'
    }
  },
  {
    number: 61,
    char: '心',
    variants: ['忄'],
    strokes: 4,
    name: 'kokoro / risshinben',
    kana: 'こころ / りっしんべん',
    meaning: { en: 'heart, mind, feeling', vi: 'tâm - trái tim, tâm trí, tình cảm' }
  },
  {
    number: 62,
    char: '戈',
    strokes: 4,
    name: 'hoko',
    kana: 'ほこ',
    meaning: {
      en: 'halberd, spear with axe blade',
      vi: 'qua - cây kích, giáo có lưỡi ngang'
    }
  },
  {
    number: 63,
    char: '戸',
    strokes: 4,
    name: 'to',
    kana: 'と',
    meaning: { en: 'door, household entrance', vi: 'hộ - cửa, cửa nhà' }
  },
  {
    number: 64,
    char: '手',
    variants: ['扌'],
    strokes: 4,
    name: 'te / tehen',
    kana: 'て / てへん',
    meaning: { en: 'hand, arm, do by hand', vi: 'thủ - tay, bàn tay, làm bằng tay' }
  },
  {
    number: 65,
    char: '支',
    strokes: 4,
    name: 'shi',
    kana: 'し',
    meaning: { en: 'branch, support, hold up', vi: 'chi - cành cây, chống đỡ, nâng' }
  },
  {
    number: 66,
    char: '攴',
    variants: ['攵'],
    strokes: 4,
    name: 'bokuzukuri',
    kana: 'ぼくづくり',
    meaning: {
      en: 'tap, strike lightly, action by hand',
      vi: 'phộc - đánh khẽ, gõ, hành động bằng tay'
    }
  },
  {
    number: 67,
    char: '文',
    strokes: 4,
    name: 'bun',
    kana: 'ぶん',
    meaning: {
      en: 'writing, literature, culture, pattern',
      vi: 'văn - chữ viết, văn chương, hoa văn'
    }
  },
  {
    number: 68,
    char: '斗',
    strokes: 4,
    name: 'to',
    kana: 'と',
    meaning: {
      en: 'dipper, measuring ladle, Big Dipper',
      vi: 'đẩu - cái đấu đong, chòm sao Bắc Đẩu'
    }
  },
  {
    number: 69,
    char: '斤',
    strokes: 4,
    name: 'ono',
    kana: 'おの',
    meaning: {
      en: 'axe, hatchet, unit of weight (catty)',
      vi: 'cân - cái rìu, cân (đơn vị trọng lượng)'
    }
  },
  {
    number: 70,
    char: '方',
    strokes: 4,
    name: 'hou',
    kana: 'ほう',
    meaning: {
      en: 'square, direction, side, method',
      vi: 'phương - hình vuông, phương hướng, cách thức'
    }
  },
  {
    number: 71,
    char: '无',
    strokes: 4,
    name: 'nashi',
    kana: 'なし',
    meaning: { en: 'not, without, none', vi: 'vô - không, chẳng có' }
  },
  {
    number: 72,
    char: '日',
    strokes: 4,
    name: 'hi',
    kana: 'ひ',
    meaning: { en: 'sun, day, daytime, Japan', vi: 'nhật - mặt trời, ngày, ban ngày' }
  },
  {
    number: 73,
    char: '曰',
    strokes: 4,
    name: 'hirabi',
    kana: 'ひらび',
    meaning: { en: 'say, speak, call, name', vi: 'viết - nói rằng, bảo, gọi tên' }
  },
  {
    number: 74,
    char: '月',
    strokes: 4,
    name: 'tsuki',
    kana: 'つき',
    meaning: {
      en: 'moon, month; flesh/body (when used in other kanji)',
      vi: 'nguyệt - mặt trăng, tháng; thịt, thân thể (khi ghép chữ)'
    }
  },
  {
    number: 75,
    char: '木',
    strokes: 4,
    name: 'ki',
    kana: 'き',
    meaning: { en: 'tree, wood, timber', vi: 'mộc - cây, gỗ' }
  },
  {
    number: 76,
    char: '欠',
    strokes: 4,
    name: 'akubi',
    kana: 'あくび',
    meaning: {
      en: 'lack, deficiency, yawn, open mouth',
      vi: 'khiếm - thiếu, khuyết, há miệng, ngáp'
    }
  },
  {
    number: 77,
    char: '止',
    strokes: 4,
    name: 'tomeru',
    kana: 'とめる',
    meaning: {
      en: 'stop, halt, foot, toe (original sense)',
      vi: 'chỉ - dừng, ngừng, bàn chân (nghĩa gốc)'
    }
  },
  {
    number: 78,
    char: '歹',
    strokes: 4,
    name: 'gatsuhen',
    kana: 'がつへん',
    meaning: {
      en: 'death, remains, bad, decayed bone',
      vi: 'đãi - xương tàn, cái chết, hư hoại'
    }
  },
  {
    number: 79,
    char: '殳',
    strokes: 4,
    name: 'rumata',
    kana: 'るまた',
    meaning: { en: 'weapon, lance, striking pole', vi: 'thù - binh khí, giáo dài để đập' }
  },
  {
    number: 80,
    char: '母',
    variants: ['毋'],
    strokes: 5,
    name: 'haha / nakare',
    kana: 'はは',
    meaning: {
      en: 'mother, do not, must not (variant 毋)',
      vi: 'mẫu - mẹ, chớ, đừng (biến thể 毋)'
    }
  },
  {
    number: 81,
    char: '比',
    strokes: 4,
    name: 'kuraberu',
    kana: 'くらべる',
    meaning: { en: 'compare, contrast, ratio', vi: 'tỷ - so sánh, đối chiếu, tỷ lệ' }
  },
  {
    number: 82,
    char: '毛',
    strokes: 4,
    name: 'ke',
    kana: 'け',
    meaning: { en: 'fur, hair, feather-like down', vi: 'mao - lông, lông thú' }
  },
  {
    number: 83,
    char: '氏',
    strokes: 4,
    name: 'uji',
    kana: 'うじ',
    meaning: { en: 'clan, family name, lineage', vi: 'thị - họ, dòng họ' }
  },
  {
    number: 84,
    char: '气',
    strokes: 4,
    name: 'kigamae',
    kana: 'きがまえ',
    meaning: {
      en: 'steam, vapor, breath, air, spirit',
      vi: 'khí - hơi nước, hơi thở, không khí, khí chất'
    }
  },
  {
    number: 85,
    char: '水',
    variants: ['氵'],
    strokes: 4,
    name: 'mizu / sanzui',
    kana: 'みず / さんずい',
    meaning: { en: 'water, liquid, fluid', vi: 'thuỷ - nước, chất lỏng' }
  },
  {
    number: 86,
    char: '火',
    variants: ['灬'],
    strokes: 4,
    name: 'hi / renga',
    kana: 'ひ / れんが',
    meaning: { en: 'fire, flame, burn', vi: 'hoả - lửa, ngọn lửa, đốt cháy' }
  },
  {
    number: 87,
    char: '爪',
    variants: ['爫'],
    strokes: 4,
    name: 'tsume',
    kana: 'つめ',
    meaning: { en: 'claw, nail, talon', vi: 'trảo - móng vuốt, móng tay' }
  },
  {
    number: 88,
    char: '父',
    strokes: 4,
    name: 'chichi',
    kana: 'ちち',
    meaning: { en: 'father, dad', vi: 'phụ - cha, bố' }
  },
  {
    number: 89,
    char: '爻',
    strokes: 4,
    name: 'kou',
    kana: 'こう',
    meaning: {
      en: 'mix, cross, I Ching hexagram lines',
      vi: 'hào - giao lẫn, nét hào trong Kinh Dịch'
    }
  },
  {
    number: 90,
    char: '爿',
    strokes: 4,
    name: 'shouhen',
    kana: 'しょうへん',
    meaning: {
      en: 'split wood (left half), bed frame piece',
      vi: 'tường - mảnh gỗ chẻ (nửa trái), khung giường'
    }
  },
  {
    number: 91,
    char: '片',
    strokes: 4,
    name: 'kata',
    kana: 'かた',
    meaning: {
      en: 'slice, fragment, one-sided piece',
      vi: 'phiến - mảnh, miếng, một phía'
    }
  },
  {
    number: 92,
    char: '牙',
    strokes: 4,
    name: 'kiba',
    kana: 'きば',
    meaning: { en: 'fang, tusk, ivory tooth', vi: 'nha - răng nanh, ngà' }
  },
  {
    number: 93,
    char: '牛',
    variants: ['牜'],
    strokes: 4,
    name: 'ushi',
    kana: 'うし',
    meaning: { en: 'cow, ox, cattle', vi: 'ngưu - trâu bò, gia súc' }
  },
  {
    number: 94,
    char: '犬',
    variants: ['犭'],
    strokes: 4,
    name: 'inu / kemonohen',
    kana: 'いぬ / けものへん',
    meaning: {
      en: 'dog; beast, animal (when used in other kanji)',
      vi: 'khuyển - chó; thú vật (khi ghép chữ)'
    }
  },
  {
    number: 95,
    char: '玄',
    strokes: 5,
    name: 'gen',
    kana: 'げん',
    meaning: { en: 'profound, mysterious, dark', vi: 'huyền - sâu kín, huyền bí, tối màu' }
  },
  {
    number: 96,
    char: '玉',
    variants: ['王'],
    strokes: 5,
    name: 'tama',
    kana: 'たま',
    meaning: {
      en: 'jade, jewel, precious stone, king (variant form)',
      vi: 'ngọc - ngọc bích, đá quý, vua (dạng biến thể)'
    }
  },
  {
    number: 97,
    char: '瓜',
    strokes: 5,
    name: 'uri',
    kana: 'うり',
    meaning: { en: 'melon, gourd', vi: 'qua - quả dưa, bầu bí' }
  },
  {
    number: 98,
    char: '瓦',
    strokes: 5,
    name: 'kawara',
    kana: 'かわら',
    meaning: { en: 'tile, earthenware roof tile', vi: 'ngoã - ngói, mái đất nung' }
  },
  {
    number: 99,
    char: '甘',
    strokes: 5,
    name: 'amai',
    kana: 'あまい',
    meaning: { en: 'sweet, pleasant taste', vi: 'cam - ngọt, ngon miệng' }
  },
  {
    number: 100,
    char: '生',
    strokes: 5,
    name: 'umareru',
    kana: 'うまれる',
    meaning: {
      en: 'life, birth, live, raw, fresh',
      vi: 'sinh - sống, sinh ra, sống (chưa chín)'
    }
  },
  {
    number: 101,
    char: '用',
    strokes: 5,
    name: 'mochiiru',
    kana: 'もちいる',
    meaning: {
      en: 'use, employ, business, task to do',
      vi: 'dụng - dùng, sử dụng, việc, công việc cần làm'
    }
  },
  {
    number: 102,
    char: '田',
    strokes: 5,
    name: 'ta',
    kana: 'た',
    meaning: { en: 'rice field, cultivated field', vi: 'điền - ruộng, đồng lúa' }
  },
  {
    number: 103,
    char: '疋',
    strokes: 5,
    name: 'hiki',
    kana: 'ひき',
    meaning: { en: 'bolt of cloth, roll of fabric', vi: 'thất - tấm vải, cuộn vải' }
  },
  {
    number: 104,
    char: '疒',
    strokes: 5,
    name: 'yamaidare',
    kana: 'やまいだれ',
    meaning: { en: 'sickness, illness, disease', vi: 'nạch - bệnh tật, ốm đau' }
  },
  {
    number: 105,
    char: '癶',
    strokes: 5,
    name: 'hatsugashira',
    kana: 'はつがしら',
    meaning: {
      en: 'outspread legs, departure, footsteps leaving',
      vi: 'bát - hai chân dang ra, bước đi (rời đi)'
    }
  },
  {
    number: 106,
    char: '白',
    strokes: 5,
    name: 'shiro',
    kana: 'しろ',
    meaning: {
      en: 'white, blank, clear, pure',
      vi: 'bạch - trắng, trống, rõ ràng, trong sạch'
    }
  },
  {
    number: 107,
    char: '皮',
    strokes: 5,
    name: 'kawa',
    kana: 'かわ',
    meaning: { en: 'skin, hide, leather surface', vi: 'bì - da, lớp da ngoài' }
  },
  {
    number: 108,
    char: '皿',
    strokes: 5,
    name: 'sara',
    kana: 'さら',
    meaning: { en: 'dish, plate, shallow bowl', vi: 'mãnh - bát đĩa, đĩa nông' }
  },
  {
    number: 109,
    char: '目',
    strokes: 5,
    name: 'me',
    kana: 'め',
    meaning: { en: 'eye, look, see', vi: 'mục - mắt, nhìn, xem' }
  },
  {
    number: 110,
    char: '矛',
    strokes: 5,
    name: 'hoko',
    kana: 'ほこ',
    meaning: { en: 'spear, lance, pike', vi: 'mâu - cái giáo, thương' }
  },
  {
    number: 111,
    char: '矢',
    strokes: 5,
    name: 'ya',
    kana: 'や',
    meaning: { en: 'arrow, dart', vi: 'thỉ - mũi tên, tên bắn' }
  },
  {
    number: 112,
    char: '石',
    strokes: 5,
    name: 'ishi',
    kana: 'いし',
    meaning: { en: 'stone, rock', vi: 'thạch - đá, tảng đá' }
  },
  {
    number: 113,
    char: '示',
    variants: ['礻'],
    strokes: 5,
    name: 'shimesu',
    kana: 'しめす',
    meaning: {
      en: 'altar, spirit, to show, indicate',
      vi: 'thị - bàn thờ, thần linh, chỉ ra, bày tỏ'
    }
  },
  {
    number: 114,
    char: '禸',
    strokes: 5,
    name: 'juu',
    kana: 'じゅう',
    meaning: { en: 'animal track, footprint', vi: 'nhựu - vết chân thú' }
  },
  {
    number: 115,
    char: '禾',
    strokes: 5,
    name: 'nogihen',
    kana: 'のぎへん',
    meaning: {
      en: 'grain, cereal plant (esp. rice on the stalk)',
      vi: 'hoà - lúa, ngũ cốc (cây lúa)'
    }
  },
  {
    number: 116,
    char: '穴',
    strokes: 5,
    name: 'ana',
    kana: 'あな',
    meaning: { en: 'cave, hole, pit', vi: 'huyệt - hang, lỗ, hố' }
  },
  {
    number: 117,
    char: '立',
    strokes: 5,
    name: 'tatsu',
    kana: 'たつ',
    meaning: { en: 'stand, stand up, establish', vi: 'lập - đứng, đứng lên, dựng nên' }
  },
  {
    number: 118,
    char: '竹',
    strokes: 6,
    name: 'take',
    kana: 'たけ',
    meaning: { en: 'bamboo', vi: 'trúc - tre, cây trúc' }
  },
  {
    number: 119,
    char: '米',
    strokes: 6,
    name: 'kome',
    kana: 'こめ',
    meaning: { en: 'rice (hulled), grain of rice', vi: 'mễ - gạo, hạt gạo' }
  },
  {
    number: 120,
    char: '糸',
    variants: ['糹'],
    strokes: 6,
    name: 'ito',
    kana: 'いと',
    meaning: { en: 'thread, silk, fine string', vi: 'mịch - sợi tơ, chỉ, dây tơ' }
  },
  {
    number: 121,
    char: '缶',
    strokes: 6,
    name: 'hotogi',
    kana: 'ほとぎ',
    meaning: {
      en: 'jar, earthenware vessel, pottery',
      vi: 'phẫu - vò sành, bình đất nung'
    }
  },
  {
    number: 122,
    char: '网',
    variants: ['罒'],
    strokes: 6,
    name: 'ami',
    kana: 'あみ',
    meaning: { en: 'net, mesh, snare', vi: 'võng - cái lưới, mắt lưới' }
  },
  {
    number: 123,
    char: '羊',
    strokes: 6,
    name: 'hitsuji',
    kana: 'ひつじ',
    meaning: { en: 'sheep, ram, goat', vi: 'dương - con cừu, dê' }
  },
  {
    number: 124,
    char: '羽',
    strokes: 6,
    name: 'hane',
    kana: 'はね',
    meaning: { en: 'feather, wing, plume', vi: 'vũ - lông vũ, cánh' }
  },
  {
    number: 125,
    char: '老',
    variants: ['耂'],
    strokes: 6,
    name: 'oiru',
    kana: 'おいる',
    meaning: { en: 'old, aged, elderly', vi: 'lão - già, người cao tuổi' }
  },
  {
    number: 126,
    char: '而',
    strokes: 6,
    name: 'shikaru',
    kana: 'しかる',
    meaning: {
      en: 'and, yet, moreover, whiskers (original)',
      vi: 'nhi - mà, và lại, râu (nghĩa gốc)'
    }
  },
  {
    number: 127,
    char: '耒',
    strokes: 6,
    name: 'suki',
    kana: 'すき',
    meaning: { en: 'plow, plough handle', vi: 'lỗi - cái cày, cán cày' }
  },
  {
    number: 128,
    char: '耳',
    strokes: 6,
    name: 'mimi',
    kana: 'みみ',
    meaning: { en: 'ear, hearing', vi: 'nhĩ - tai, thính giác' }
  },
  {
    number: 129,
    char: '聿',
    strokes: 6,
    name: 'fudezukuri',
    kana: 'ふでづくり',
    meaning: { en: 'writing brush, pen', vi: 'duật - cây bút lông, bút viết' }
  },
  {
    number: 130,
    char: '肉',
    variants: ['⺼'],
    strokes: 6,
    name: 'niku / nikuzuki',
    kana: 'にく / にくづき',
    meaning: { en: 'meat, flesh, body tissue', vi: 'nhục - thịt, thân thịt' }
  },
  {
    number: 131,
    char: '臣',
    strokes: 6,
    name: 'shin',
    kana: 'しん',
    meaning: {
      en: 'minister, retainer, subject (of a ruler)',
      vi: 'thần - bề tôi, bề tôi trung'
    }
  },
  {
    number: 132,
    char: '自',
    strokes: 6,
    name: 'mizukara',
    kana: 'みずから',
    meaning: {
      en: 'self, oneself, nose (original sense)',
      vi: 'tự - tự mình, bản thân, cái mũi (nghĩa gốc)'
    }
  },
  {
    number: 133,
    char: '至',
    strokes: 6,
    name: 'itaru',
    kana: 'いたる',
    meaning: { en: 'arrive, reach, utmost, extreme', vi: 'chí - đến, tới, cực điểm' }
  },
  {
    number: 134,
    char: '臼',
    strokes: 6,
    name: 'usu',
    kana: 'うす',
    meaning: { en: 'mortar, grinding bowl', vi: 'cữu - cái cối giã' }
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
    meaning: {
      en: 'oppose, go against, dancing feet',
      vi: 'suyễn - trái nhau, đối nghịch, chân nhảy múa'
    }
  },
  {
    number: 137,
    char: '舟',
    strokes: 6,
    name: 'fune',
    kana: 'ふね',
    meaning: { en: 'boat, ship, vessel', vi: 'chu - thuyền, tàu' }
  },
  {
    number: 138,
    char: '艮',
    strokes: 6,
    name: 'ushitora',
    kana: 'うしとら',
    meaning: {
      en: 'stopping, stubborn resistance, northeast trigram',
      vi: 'cấn - dừng lại, cứng đầu, quẻ Cấn'
    }
  },
  {
    number: 139,
    char: '色',
    strokes: 6,
    name: 'iro',
    kana: 'いろ',
    meaning: {
      en: 'color, hue, appearance, lust',
      vi: 'sắc - màu sắc, vẻ ngoài, dục vọng'
    }
  },
  {
    number: 140,
    char: '艸',
    variants: ['艹'],
    strokes: 6,
    name: 'kusakanmuri',
    kana: 'くさかんむり',
    meaning: { en: 'grass, herb, plant', vi: 'thảo - cỏ, cây cỏ' }
  },
  {
    number: 141,
    char: '虍',
    strokes: 6,
    name: 'toragashira',
    kana: 'とらがしら',
    meaning: { en: 'tiger (esp. the head of a tiger)', vi: 'hô - đầu con hổ, bộ hổ' }
  },
  {
    number: 142,
    char: '虫',
    strokes: 6,
    name: 'mushi',
    kana: 'むし',
    meaning: { en: 'insect, bug, worm, small creature', vi: 'trùng - sâu bọ, côn trùng' }
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
    meaning: {
      en: 'go, walk, travel, carry out, conduct',
      vi: 'hành - đi, bước đi, thực hiện'
    }
  },
  {
    number: 145,
    char: '衣',
    variants: ['衤'],
    strokes: 6,
    name: 'koromo',
    kana: 'ころも',
    meaning: { en: 'clothes, garment, robe', vi: 'y - áo, quần áo' }
  },
  {
    number: 146,
    char: '襾',
    variants: ['西'],
    strokes: 6,
    name: 'oou',
    kana: 'おおう',
    meaning: {
      en: 'cover, west (homograph form)',
      vi: 'á - che đậy, phương tây (dạng đồng tự)'
    }
  },
  {
    number: 147,
    char: '見',
    strokes: 7,
    name: 'miru',
    kana: 'みる',
    meaning: { en: 'see, look, meet', vi: 'kiến - thấy, nhìn, gặp' }
  },
  {
    number: 148,
    char: '角',
    strokes: 7,
    name: 'tsuno',
    kana: 'つの',
    meaning: { en: 'horn, antler, angle, corner', vi: 'giác - sừng, góc' }
  },
  {
    number: 149,
    char: '言',
    variants: ['訁'],
    strokes: 7,
    name: 'gonben',
    kana: 'ごんべん',
    meaning: { en: 'speech, words, language', vi: 'ngôn - lời nói, ngôn ngữ' }
  },
  {
    number: 150,
    char: '谷',
    strokes: 7,
    name: 'tani',
    kana: 'たに',
    meaning: { en: 'valley, gorge', vi: 'cốc - thung lũng, khe núi' }
  },
  {
    number: 151,
    char: '豆',
    strokes: 7,
    name: 'mame',
    kana: 'まめ',
    meaning: {
      en: 'bean, pea, vessel shaped like a bean',
      vi: 'đậu - hạt đậu, đồ đựng dạng đậu'
    }
  },
  {
    number: 152,
    char: '豕',
    strokes: 7,
    name: 'inoko',
    kana: 'いのこ',
    meaning: { en: 'pig, swine', vi: 'thỉ - con lợn, heo' }
  },
  {
    number: 153,
    char: '豸',
    strokes: 7,
    name: 'mujinahen',
    kana: 'むじなへん',
    meaning: { en: 'clawed animal, beast of prey', vi: 'trĩ - loài thú có vuốt, thú săn' }
  },
  {
    number: 154,
    char: '貝',
    strokes: 7,
    name: 'kai',
    kana: 'かい',
    meaning: {
      en: 'shellfish, shell, money, valuables',
      vi: 'bối - vỏ sò, tiền bạc, của cải'
    }
  },
  {
    number: 155,
    char: '赤',
    strokes: 7,
    name: 'aka',
    kana: 'あか',
    meaning: { en: 'red, scarlet', vi: 'xích - đỏ, đỏ thắm' }
  },
  {
    number: 156,
    char: '走',
    strokes: 7,
    name: 'hashiru',
    kana: 'はしる',
    meaning: { en: 'run, flee, dash', vi: 'tẩu - chạy, chạy trốn' }
  },
  {
    number: 157,
    char: '足',
    variants: ['⻊'],
    strokes: 7,
    name: 'ashi',
    kana: 'あし',
    meaning: { en: 'foot, leg, suffice, be enough', vi: 'túc - chân, đủ' }
  },
  {
    number: 158,
    char: '身',
    strokes: 7,
    name: 'mi',
    kana: 'み',
    meaning: { en: 'body, oneself, person', vi: 'thân - thân thể, bản thân' }
  },
  {
    number: 159,
    char: '車',
    strokes: 7,
    name: 'kuruma',
    kana: 'くるま',
    meaning: { en: 'cart, vehicle, car', vi: 'xa - xe, xe cộ' }
  },
  {
    number: 160,
    char: '辛',
    strokes: 7,
    name: 'karai',
    kana: 'からい',
    meaning: { en: 'bitter, spicy, harsh, hardship', vi: 'tân - cay, đắng, gian khổ' }
  },
  {
    number: 161,
    char: '辰',
    strokes: 7,
    name: 'shinnotatsu',
    kana: 'しんのたつ',
    meaning: {
      en: 'morning, dragon (zodiac), celestial body',
      vi: 'thần - buổi sớm, rồng (địa chi), thiên thể'
    }
  },
  {
    number: 162,
    char: '辵',
    variants: ['辶'],
    strokes: 7,
    name: 'shinnyou',
    kana: 'しんにょう',
    meaning: {
      en: 'movement, walk, road radical',
      vi: 'sước - bước đi, bộ hành (lộ trình)'
    }
  },
  {
    number: 163,
    char: '邑',
    variants: ['阝'],
    strokes: 7,
    name: 'oozato',
    kana: 'おおざと',
    meaning: {
      en: 'village, town, settlement (right-side form)',
      vi: 'ấp - làng, ấp, thị trấn (dạng bên phải)'
    }
  },
  {
    number: 164,
    char: '酉',
    strokes: 7,
    name: 'sake',
    kana: 'さけ',
    meaning: {
      en: 'wine, alcohol, bird (zodiac rooster)',
      vi: 'dậu - rượu, đồ uống có cồn, gà (địa chi)'
    }
  },
  {
    number: 165,
    char: '釆',
    variants: ['采'],
    strokes: 7,
    name: 'nogome',
    kana: 'のごめ',
    meaning: { en: 'distinguish, sort out, pluck', vi: 'biện - phân biệt, chọn lọc, hái' }
  },
  {
    number: 166,
    char: '里',
    strokes: 7,
    name: 'sato',
    kana: 'さと',
    meaning: {
      en: 'village, hometown, Japanese ri (distance unit)',
      vi: 'lý - làng, quê hương, dặm (đơn vị đường)'
    }
  },
  {
    number: 167,
    char: '金',
    strokes: 8,
    name: 'kane',
    kana: 'かね',
    meaning: { en: 'metal, gold, money', vi: 'kim - kim loại, vàng, tiền bạc' }
  },
  {
    number: 168,
    char: '長',
    strokes: 8,
    name: 'nagai',
    kana: 'ながい',
    meaning: {
      en: 'long, lengthy, grow, elder',
      vi: 'trường - dài, trưởng thành, người lớn tuổi'
    }
  },
  {
    number: 169,
    char: '門',
    strokes: 8,
    name: 'mon',
    kana: 'もん',
    meaning: { en: 'gate, door, entrance', vi: 'môn - cửa lớn, cổng' }
  },
  {
    number: 170,
    char: '阜',
    variants: ['阝'],
    strokes: 8,
    name: 'kozatohen',
    kana: 'こざとへん',
    meaning: {
      en: 'mound, hill, dam (left-side form)',
      vi: 'phụ - đống đất, gò, đê (dạng bên trái)'
    }
  },
  {
    number: 171,
    char: '隶',
    strokes: 8,
    name: 'rei',
    kana: 'れい',
    meaning: { en: 'capture, catch up with, slave', vi: 'đãi - bắt kịp, bắt giữ, nô lệ' }
  },
  {
    number: 172,
    char: '隹',
    strokes: 8,
    name: 'furutori',
    kana: 'ふるとり',
    meaning: { en: 'short-tailed bird, old bird', vi: 'chuy - chim đuôi ngắn, chim cổ' }
  },
  {
    number: 173,
    char: '雨',
    strokes: 8,
    name: 'ame',
    kana: 'あめ',
    meaning: { en: 'rain, rainfall, weather from the sky', vi: 'vũ - mưa, mưa rơi' }
  },
  {
    number: 174,
    char: '青',
    strokes: 8,
    name: 'ao',
    kana: 'あお',
    meaning: {
      en: 'blue, green, youth, fresh',
      vi: 'thanh - xanh (lam/lục), tuổi trẻ, tươi'
    }
  },
  {
    number: 175,
    char: '非',
    strokes: 8,
    name: 'arazu',
    kana: 'あらず',
    meaning: { en: 'wrong, not so, fault, un-', vi: 'phi - sai, không phải, phủ định' }
  },
  {
    number: 176,
    char: '面',
    strokes: 9,
    name: 'men',
    kana: 'めん',
    meaning: { en: 'face, surface, aspect', vi: 'diện - mặt, bề mặt, khía cạnh' }
  },
  {
    number: 177,
    char: '革',
    strokes: 9,
    name: 'kawa',
    kana: 'かわ',
    meaning: {
      en: 'leather, hide, reform, renew',
      vi: 'cách - da thuộc, cải cách, đổi mới'
    }
  },
  {
    number: 178,
    char: '韋',
    strokes: 9,
    name: 'namegawa',
    kana: 'なめがわ',
    meaning: { en: 'tanned soft leather', vi: 'vi - da mềm đã thuộc' }
  },
  {
    number: 179,
    char: '韭',
    strokes: 9,
    name: 'nira',
    kana: 'にら',
    meaning: { en: 'leek, Chinese chives', vi: 'phỉ - rau hẹ' }
  },
  {
    number: 180,
    char: '音',
    strokes: 9,
    name: 'oto',
    kana: 'おと',
    meaning: { en: 'sound, noise, tone', vi: 'âm - âm thanh, tiếng' }
  },
  {
    number: 181,
    char: '頁',
    strokes: 9,
    name: 'ougai',
    kana: 'おうがい',
    meaning: { en: 'head, leaf of a book, page', vi: 'hiệt - đầu, trang sách, tờ' }
  },
  {
    number: 182,
    char: '風',
    strokes: 9,
    name: 'kaze',
    kana: 'かぜ',
    meaning: { en: 'wind, breeze, style, manner', vi: 'phong - gió, phong cách' }
  },
  {
    number: 183,
    char: '飛',
    strokes: 9,
    name: 'tobu',
    kana: 'とぶ',
    meaning: { en: 'fly, soar', vi: 'phi - bay, bay lên' }
  },
  {
    number: 184,
    char: '食',
    variants: ['飠'],
    strokes: 9,
    name: 'shoku',
    kana: 'しょく',
    meaning: { en: 'eat, food, meal', vi: 'thực - ăn, thức ăn, bữa ăn' }
  },
  {
    number: 185,
    char: '首',
    strokes: 9,
    name: 'kubi',
    kana: 'くび',
    meaning: { en: 'neck, head, leader, chief', vi: 'thủ - đầu, cổ, thủ lĩnh' }
  },
  {
    number: 186,
    char: '香',
    strokes: 9,
    name: 'kaori',
    kana: 'かおり',
    meaning: { en: 'fragrance, scent, aroma', vi: 'hương - mùi thơm, hương thơm' }
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
    meaning: { en: 'bone, skeleton', vi: 'cốt - xương, bộ xương' }
  },
  {
    number: 189,
    char: '高',
    strokes: 10,
    name: 'takai',
    kana: 'たかい',
    meaning: { en: 'tall, high, expensive, lofty', vi: 'cao - cao, đắt, cao quý' }
  },
  {
    number: 190,
    char: '髟',
    strokes: 10,
    name: 'kamigashira',
    kana: 'かみがしら',
    meaning: { en: 'long hair, hair on the head', vi: 'tiêu - tóc dài, bộ tóc' }
  },
  {
    number: 191,
    char: '鬥',
    strokes: 10,
    name: 'tatakaigamae',
    kana: 'たたかいがまえ',
    meaning: { en: 'fight, battle, struggle', vi: 'đấu - đánh nhau, chiến đấu' }
  },
  {
    number: 192,
    char: '鬯',
    strokes: 10,
    name: 'chou',
    kana: 'ちょう',
    meaning: {
      en: 'sacrificial wine, fragrant ritual liquor',
      vi: 'sưởng - rượu tế, rượu lễ'
    }
  },
  {
    number: 193,
    char: '鬲',
    strokes: 10,
    name: 'kanae',
    kana: 'かなえ',
    meaning: { en: 'cauldron, tripod cooking vessel', vi: 'cách - cái vạc, nồi ba chân' }
  },
  {
    number: 194,
    char: '鬼',
    strokes: 10,
    name: 'oni',
    kana: 'おに',
    meaning: { en: 'ghost, demon, spirit', vi: 'quỷ - ma quỷ, linh hồn dữ' }
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
    meaning: { en: 'salt, saline land, alkali', vi: 'lỗ - đất mặn, muối, kiềm' }
  },
  {
    number: 198,
    char: '鹿',
    strokes: 11,
    name: 'shika',
    kana: 'しか',
    meaning: { en: 'deer', vi: 'lộc - con hươu, nai' }
  },
  {
    number: 199,
    char: '麥',
    variants: ['麦'],
    strokes: 11,
    name: 'mugi',
    kana: 'むぎ',
    meaning: { en: 'wheat, barley, grain crop', vi: 'mạch - lúa mì, lúa mạch' }
  },
  {
    number: 200,
    char: '麻',
    strokes: 11,
    name: 'asa',
    kana: 'あさ',
    meaning: { en: 'hemp, flax, numb', vi: 'ma - cây gai, đay, tê bì' }
  },
  {
    number: 201,
    char: '黃',
    variants: ['黄'],
    strokes: 12,
    name: 'ki',
    kana: 'き',
    meaning: { en: 'yellow', vi: 'hoàng - màu vàng' }
  },
  {
    number: 202,
    char: '黍',
    strokes: 12,
    name: 'kibi',
    kana: 'きび',
    meaning: { en: 'millet, sticky millet', vi: 'thử - cây kê, lúa nếp kê' }
  },
  {
    number: 203,
    char: '黑',
    variants: ['黒'],
    strokes: 12,
    name: 'kuro',
    kana: 'くろ',
    meaning: { en: 'black, dark', vi: 'hắc - đen, tối màu' }
  },
  {
    number: 204,
    char: '黹',
    strokes: 12,
    name: 'nuu',
    kana: 'ぬう',
    meaning: { en: 'embroidery, sewing, needlework', vi: 'chỉ - may vá, thêu' }
  },
  {
    number: 205,
    char: '黽',
    strokes: 13,
    name: 'kaeru',
    kana: 'かえる',
    meaning: {
      en: 'frog, amphibian, strive (classical)',
      vi: 'mãnh - con ếch, gắng sức (nghĩa cổ)'
    }
  },
  {
    number: 206,
    char: '鼎',
    strokes: 13,
    name: 'kanae',
    kana: 'かなえ',
    meaning: { en: 'tripod, ritual bronze vessel', vi: 'đỉnh - cái đỉnh, đồ đồng ba chân' }
  },
  {
    number: 207,
    char: '鼓',
    strokes: 13,
    name: 'tsuzumi',
    kana: 'つづみ',
    meaning: { en: 'drum, percussion instrument', vi: 'cổ - cái trống' }
  },
  {
    number: 208,
    char: '鼠',
    strokes: 13,
    name: 'nezumi',
    kana: 'ねずみ',
    meaning: { en: 'rat, mouse', vi: 'thử - con chuột' }
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
    meaning: {
      en: 'even, uniform, alike, arrange neatly',
      vi: 'tề - đều nhau, ngang hàng, sắp xếp ngay ngắn'
    }
  },
  {
    number: 211,
    char: '齒',
    variants: ['歯'],
    strokes: 15,
    name: 'ha',
    kana: 'は',
    meaning: { en: 'tooth, teeth', vi: 'xỉ - răng' }
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
    meaning: { en: 'turtle, tortoise', vi: 'quy - con rùa' }
  },
  {
    number: 214,
    char: '龠',
    strokes: 17,
    name: 'yaku',
    kana: 'やく',
    meaning: { en: 'flute, panpipes, reed pipe', vi: 'dược - sáo, ống tiêu' }
  }
];

/**
 * Default radicals-page order (sort = Default): by stroke count, then Kangxi number
 * within the same stroke group. Card labels, `#radical-N` anchors, and quiz From/To
 * use 1-based indexes into this list (not `Radical.number`).
 */
export function radicalsInStrokeOrder(items: readonly Radical[] = radicals): Radical[] {
  return [...items].sort((a, b) => a.strokes - b.strokes || a.number - b.number);
}

export type RadicalStrokeGroup = {
  strokes: number;
  items: Radical[];
};

/** Stroke groups in the same order as `radicalsInStrokeOrder` (for the radicals page). */
export function groupRadicalsByStrokes(items: readonly Radical[] = radicals): RadicalStrokeGroup[] {
  const groups: RadicalStrokeGroup[] = [];

  for (const radical of radicalsInStrokeOrder(items)) {
    const last = groups.at(-1);

    if (last && last.strokes === radical.strokes) {
      last.items.push(radical);
    } else {
      groups.push({ strokes: radical.strokes, items: [radical] });
    }
  }

  return groups;
}

const strokeIndexByKangxiNumber = new Map(
  radicalsInStrokeOrder().map((radical, index) => [radical.number, index + 1] as const)
);

/** 1-based display index in default stroke order (card tag, `#radical-N`, quiz range). */
export function getRadicalStrokeIndex(radical: Pick<Radical, 'number'> | number): number {
  const kangxiNumber = typeof radical === 'number' ? radical : radical.number;

  return strokeIndexByKangxiNumber.get(kangxiNumber) ?? 0;
}
