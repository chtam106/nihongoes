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
  /** Sino-Vietnamese reading (Hán-Việt), e.g. `khuyển`. */
  hanViet: string;
  /** Plain meanings only - NO `hán-việt - ` prefix in vi. */
  meaning: Bilingual;
  /** Extra sense when used as a building block in other kanji (optional). */
  componentMeaning?: Bilingual;
};

/**
 * Display the radical's primary meaning. Vietnamese: `[HanViet] nghĩa`
 * (capitalized Hán-Việt only). English: plain `meaning.en`.
 */
export function formatRadicalMeaning(radical: Radical, locale: 'en' | 'vi'): string {
  if (locale === 'en') {
    return radical.meaning.en;
  }

  const capitalized = radical.hanViet.charAt(0).toUpperCase() + radical.hanViet.slice(1);

  return `[${capitalized}] ${radical.meaning.vi}`;
}

/** Component-sense gloss when the radical is used as a building block, if any. */
export function formatRadicalComponentMeaning(
  radical: Radical,
  locale: 'en' | 'vi'
): string | undefined {
  return radical.componentMeaning?.[locale];
}

export const radicals: Radical[] = [
  {
    number: 1,
    char: '一',
    strokes: 1,
    name: 'ichi',
    kana: 'いち',
    hanViet: 'nhất',
    meaning: { en: 'one, unity, the number one', vi: 'một, sự thống nhất, số một' }
  },
  {
    number: 2,
    char: '丨',
    strokes: 1,
    name: 'bou',
    kana: 'ぼう',
    hanViet: 'cổn',
    meaning: { en: 'vertical line, rod stroke', vi: 'nét sổ thẳng đứng' }
  },
  {
    number: 3,
    char: '丶',
    strokes: 1,
    name: 'ten',
    kana: 'てん',
    hanViet: 'chủ',
    meaning: { en: 'dot, point stroke', vi: 'dấu chấm, nét chấm' }
  },
  {
    number: 4,
    char: '丿',
    strokes: 1,
    name: 'no',
    kana: 'の',
    hanViet: 'phiệt',
    meaning: { en: 'slash, left-falling stroke', vi: 'nét phẩy, nét xiên trái' }
  },
  {
    number: 5,
    char: '乙',
    variants: ['乚'],
    strokes: 1,
    name: 'otsu',
    kana: 'おつ',
    hanViet: 'ất',
    meaning: {
      en: 'the second heavenly stem, fishhook-like stroke',
      vi: 'can Ất (thiên can thứ hai), nét móc câu'
    }
  },
  {
    number: 6,
    char: '亅',
    strokes: 1,
    name: 'hanebou',
    kana: 'はねぼう',
    hanViet: 'quyết',
    meaning: { en: 'hook, hooked vertical stroke', vi: 'nét móc, nét sổ có móc' }
  },
  {
    number: 7,
    char: '二',
    strokes: 2,
    name: 'ni',
    kana: 'に',
    hanViet: 'nhị',
    meaning: { en: 'two, the number two', vi: 'hai, số hai' }
  },
  {
    number: 8,
    char: '亠',
    strokes: 2,
    name: 'nabebuta',
    kana: 'なべぶた',
    hanViet: 'đầu',
    meaning: { en: 'lid, cover, pot lid', vi: 'nắp đậy, nắp vung' }
  },
  {
    number: 9,
    char: '人',
    variants: ['亻'],
    strokes: 2,
    name: 'hito / ninben',
    kana: 'ひと / にんべん',
    hanViet: 'nhân',
    meaning: { en: 'person, human being', vi: 'người, con người' }
  },
  {
    number: 10,
    char: '儿',
    strokes: 2,
    name: 'hitoashi',
    kana: 'ひとあし',
    hanViet: 'nhân',
    meaning: {
      en: 'legs, human legs (often under a character)',
      vi: 'chân người (thường đặt dưới chữ)'
    }
  },
  {
    number: 11,
    char: '入',
    strokes: 2,
    name: 'iru',
    kana: 'いる',
    hanViet: 'nhập',
    meaning: { en: 'enter, go in, put in', vi: 'vào, đi vào, đưa vào' }
  },
  {
    number: 12,
    char: '八',
    strokes: 2,
    name: 'hachi',
    kana: 'はち',
    hanViet: 'bát',
    meaning: { en: 'eight, to divide, split apart', vi: 'tám, chia tách, tách ra' }
  },
  {
    number: 13,
    char: '冂',
    strokes: 2,
    name: 'keigamae',
    kana: 'けいがまえ',
    hanViet: 'quynh',
    meaning: { en: 'down box, open enclosure (open at bottom)', vi: 'khung bao mở xuống dưới' }
  },
  {
    number: 14,
    char: '冖',
    strokes: 2,
    name: 'wakanmuri',
    kana: 'わかんむり',
    hanViet: 'mịch',
    meaning: { en: 'cover, cloth cover, crown', vi: 'trùm khăn, nắp che' }
  },
  {
    number: 15,
    char: '冫',
    strokes: 2,
    name: 'nisui',
    kana: 'にすい',
    hanViet: 'băng',
    meaning: { en: 'ice, ice-cold water, freeze', vi: 'nước đá, lạnh giá, đóng băng' }
  },
  {
    number: 16,
    char: '几',
    strokes: 2,
    name: 'tsukue',
    kana: 'つくえ',
    hanViet: 'kỷ',
    meaning: { en: 'table, small stand, stool', vi: 'cái bàn, ghế thấp, giá kê' }
  },
  {
    number: 17,
    char: '凵',
    strokes: 2,
    name: 'ukebako',
    kana: 'うけばこ',
    hanViet: 'khảm',
    meaning: {
      en: 'open box, receptacle, container (open at top)',
      vi: 'cái hộp mở miệng, đồ chứa'
    }
  },
  {
    number: 18,
    char: '刀',
    variants: ['刂'],
    strokes: 2,
    name: 'katana / rittou',
    kana: 'かたな / りっとう',
    hanViet: 'đao',
    meaning: { en: 'knife, blade, sword', vi: 'con dao, lưỡi dao, kiếm' }
  },
  {
    number: 19,
    char: '力',
    strokes: 2,
    name: 'chikara',
    kana: 'ちから',
    hanViet: 'lực',
    meaning: { en: 'power, strength, force', vi: 'sức lực, sức mạnh' }
  },
  {
    number: 20,
    char: '勹',
    strokes: 2,
    name: 'tsutsumigamae',
    kana: 'つつみがまえ',
    hanViet: 'bao',
    meaning: { en: 'wrap, envelop, enclose', vi: 'bao bọc, bọc lại' }
  },
  {
    number: 21,
    char: '匕',
    strokes: 2,
    name: 'saji',
    kana: 'さじ',
    hanViet: 'chuỷ',
    meaning: { en: 'spoon, ladle, dagger-like tool', vi: 'cái thìa, muỗng, dao nhỏ dạng thìa' }
  },
  {
    number: 22,
    char: '匚',
    strokes: 2,
    name: 'hakogamae',
    kana: 'はこがまえ',
    hanViet: 'phương',
    meaning: {
      en: 'box, chest, framing enclosure (open on right)',
      vi: 'cái tủ, khung hộp (mở bên phải)'
    }
  },
  {
    number: 23,
    char: '匸',
    strokes: 2,
    name: 'kakushigamae',
    kana: 'かくしがまえ',
    hanViet: 'hệ',
    meaning: { en: 'hiding enclosure, conceal', vi: 'che giấu, khung kín' }
  },
  {
    number: 24,
    char: '十',
    strokes: 2,
    name: 'juu',
    kana: 'じゅう',
    hanViet: 'thập',
    meaning: { en: 'ten, complete set, all', vi: 'mười, đầy đủ, trọn vẹn' }
  },
  {
    number: 25,
    char: '卜',
    strokes: 2,
    name: 'boku',
    kana: 'ぼく',
    hanViet: 'bốc',
    meaning: { en: 'divination, fortune-telling, oracle', vi: 'bói toán, xem quẻ' }
  },
  {
    number: 26,
    char: '卩',
    strokes: 2,
    name: 'fushizukuri',
    kana: 'ふしづくり',
    hanViet: 'tiết',
    meaning: { en: 'seal, official stamp, joint, node', vi: 'con dấu, đốt, khớp' }
  },
  {
    number: 27,
    char: '厂',
    strokes: 2,
    name: 'gandare',
    kana: 'がんだれ',
    hanViet: 'hán',
    meaning: { en: 'cliff, overhanging rock face', vi: 'sườn núi, vách đá che' }
  },
  {
    number: 28,
    char: '厶',
    strokes: 2,
    name: 'mu',
    kana: 'む',
    hanViet: 'khư',
    meaning: { en: 'private, personal, selfish', vi: 'riêng tư, tư nhân, ích kỷ' }
  },
  {
    number: 29,
    char: '又',
    strokes: 2,
    name: 'mata',
    kana: 'また',
    hanViet: 'hựu',
    meaning: { en: 'again, moreover', vi: 'lại nữa, hơn nữa' },
    componentMeaning: { en: 'hand', vi: 'bàn tay' }
  },
  {
    number: 30,
    char: '口',
    strokes: 3,
    name: 'kuchi',
    kana: 'くち',
    hanViet: 'khẩu',
    meaning: { en: 'mouth, opening, speech, say', vi: 'miệng, lỗ mở, lời nói' }
  },
  {
    number: 31,
    char: '囗',
    strokes: 3,
    name: 'kunigamae',
    kana: 'くにがまえ',
    hanViet: 'vi',
    meaning: { en: 'enclosure, surrounding border', vi: 'vây quanh, khung bao kín' }
  },
  {
    number: 32,
    char: '土',
    strokes: 3,
    name: 'tsuchi',
    kana: 'つち',
    hanViet: 'thổ',
    meaning: { en: 'earth, soil, ground', vi: 'đất, đất đai, mặt đất' }
  },
  {
    number: 33,
    char: '士',
    strokes: 3,
    name: 'samurai',
    kana: 'さむらい',
    hanViet: 'sĩ',
    meaning: {
      en: 'scholar, gentleman, samurai, warrior class',
      vi: 'kẻ sĩ, quý ông, tầng lớp văn võ'
    }
  },
  {
    number: 34,
    char: '夂',
    strokes: 3,
    name: 'chi',
    kana: 'ち',
    hanViet: 'truy',
    meaning: { en: 'to come after, trail behind, winter-like form', vi: 'đến sau, theo sau' }
  },
  {
    number: 35,
    char: '夊',
    strokes: 3,
    name: 'suinyou',
    kana: 'すいにょう',
    hanViet: 'tuy',
    meaning: { en: 'go slowly, drag the feet', vi: 'đi chậm, lê bước' }
  },
  {
    number: 36,
    char: '夕',
    strokes: 3,
    name: 'yuube',
    kana: 'ゆうべ',
    hanViet: 'tịch',
    meaning: { en: 'evening, dusk, nightfall', vi: 'buổi tối, chạng vạng' }
  },
  {
    number: 37,
    char: '大',
    strokes: 3,
    name: 'dai',
    kana: 'だい',
    hanViet: 'đại',
    meaning: { en: 'big, large, great', vi: 'to lớn, lớn lao' }
  },
  {
    number: 38,
    char: '女',
    strokes: 3,
    name: 'onna',
    kana: 'おんな',
    hanViet: 'nữ',
    meaning: { en: 'woman, female, girl', vi: 'phụ nữ, con gái' }
  },
  {
    number: 39,
    char: '子',
    strokes: 3,
    name: 'ko',
    kana: 'こ',
    hanViet: 'tử',
    meaning: { en: 'child, offspring, seed, small thing', vi: 'con, đứa trẻ, hạt, vật nhỏ' }
  },
  {
    number: 40,
    char: '宀',
    strokes: 3,
    name: 'ukanmuri',
    kana: 'うかんむり',
    hanViet: 'miên',
    meaning: { en: 'roof, house cover, dwelling', vi: 'mái nhà, chỗ ở có mái' }
  },
  {
    number: 41,
    char: '寸',
    strokes: 3,
    name: 'sun',
    kana: 'すん',
    hanViet: 'thốn',
    meaning: {
      en: 'a small unit of length (~3cm, like an inch)',
      vi: 'tấc (đơn vị đo chiều dài ngắn, ~3cm)'
    },
    componentMeaning: { en: 'hand', vi: 'bàn tay' }
  },
  {
    number: 42,
    char: '小',
    strokes: 3,
    name: 'shou',
    kana: 'しょう',
    hanViet: 'tiểu',
    meaning: { en: 'small, little, minor', vi: 'nhỏ, bé, ít' }
  },
  {
    number: 43,
    char: '尢',
    variants: ['尤'],
    strokes: 3,
    name: 'dainomage',
    kana: 'だいのまげ',
    hanViet: 'uông',
    meaning: { en: 'lame, crooked legs, limp', vi: 'què chân, chân khập khiễng' }
  },
  {
    number: 44,
    char: '尸',
    strokes: 3,
    name: 'shikabane',
    kana: 'しかばね',
    hanViet: 'thi',
    meaning: { en: 'corpse', vi: 'xác chết' },
    componentMeaning: { en: 'roof/dwelling', vi: 'mái, nhà' }
  },
  {
    number: 45,
    char: '屮',
    strokes: 3,
    name: 'tetsu',
    kana: 'てつ',
    hanViet: 'triệt',
    meaning: { en: 'sprout, young plant shoot', vi: 'mầm cây, chồi non' }
  },
  {
    number: 46,
    char: '山',
    strokes: 3,
    name: 'yama',
    kana: 'やま',
    hanViet: 'sơn',
    meaning: { en: 'mountain, hill, peak', vi: 'núi, đồi, đỉnh núi' }
  },
  {
    number: 47,
    char: '川',
    variants: ['巛'],
    strokes: 3,
    name: 'kawa',
    kana: 'かわ',
    hanViet: 'xuyên',
    meaning: { en: 'river, stream, flowing water', vi: 'sông, dòng chảy' }
  },
  {
    number: 48,
    char: '工',
    strokes: 3,
    name: 'takumi',
    kana: 'たくみ',
    hanViet: 'công',
    meaning: { en: 'work, craft, artisan, labor', vi: 'thợ, nghề thủ công, lao động' }
  },
  {
    number: 49,
    char: '己',
    strokes: 3,
    name: 'onore',
    kana: 'おのれ',
    hanViet: 'kỷ',
    meaning: { en: 'oneself, self, snake-like form (original)', vi: 'bản thân, chính mình' }
  },
  {
    number: 50,
    char: '巾',
    strokes: 3,
    name: 'haba',
    kana: 'はば',
    hanViet: 'cân',
    meaning: { en: 'cloth, towel, fabric strip', vi: 'khăn, mảnh vải' }
  },
  {
    number: 51,
    char: '干',
    strokes: 3,
    name: 'kan',
    kana: 'かん',
    hanViet: 'can',
    meaning: { en: 'dry, drought, shield, oppose', vi: 'khô, hạn, cái khiên, chống lại' }
  },
  {
    number: 52,
    char: '幺',
    strokes: 3,
    name: 'itogashira',
    kana: 'いとがしら',
    hanViet: 'yêu',
    meaning: { en: 'short thread, tiny, immature, young', vi: 'sợi ngắn, nhỏ bé, non trẻ' }
  },
  {
    number: 53,
    char: '广',
    strokes: 3,
    name: 'madare',
    kana: 'まだれ',
    hanViet: 'nghiễm',
    meaning: { en: 'shelter, sloping roof, house lean-to', vi: 'mái hiên, chỗ che nghiêng' }
  },
  {
    number: 54,
    char: '廴',
    strokes: 3,
    name: 'ennyou',
    kana: 'えんにょう',
    hanViet: 'dẫn',
    meaning: { en: 'long stride, stretch out the legs', vi: 'bước dài, dang chân' }
  },
  {
    number: 55,
    char: '廾',
    strokes: 3,
    name: 'nijuuashi',
    kana: 'にじゅうあし',
    hanViet: 'củng',
    meaning: { en: 'two hands joined, clasp hands', vi: 'chắp tay, hai tay đưa lên' }
  },
  {
    number: 56,
    char: '弋',
    strokes: 3,
    name: 'shikigamae',
    kana: 'しきがまえ',
    hanViet: 'dặc',
    meaning: { en: 'shoot with a bow, stake, peg', vi: 'bắn cung, cái cọc' }
  },
  {
    number: 57,
    char: '弓',
    strokes: 3,
    name: 'yumi',
    kana: 'ゆみ',
    hanViet: 'cung',
    meaning: { en: 'bow (weapon), arched shape', vi: 'cây cung, hình cong' }
  },
  {
    number: 58,
    char: '彐',
    strokes: 3,
    name: 'keigashira',
    kana: 'けいがしら',
    hanViet: 'kệ',
    meaning: { en: 'snout, pig snout, hand-like form', vi: 'mõm lợn, dạng bàn tay' }
  },
  {
    number: 59,
    char: '彡',
    strokes: 3,
    name: 'sanzukuri',
    kana: 'さんづくり',
    hanViet: 'sam',
    meaning: {
      en: 'bristle, hair ornament, streaks, pattern',
      vi: 'lông tóc, chùm lông, nét vẽ trang trí'
    }
  },
  {
    number: 60,
    char: '彳',
    strokes: 3,
    name: 'gyouninben',
    kana: 'ぎょうにんべん',
    hanViet: 'xích',
    meaning: {
      en: 'step, walk slowly, left half of going',
      vi: 'bước ngắn, đi chậm, nửa trái của bộ hành'
    }
  },
  {
    number: 61,
    char: '心',
    variants: ['忄'],
    strokes: 4,
    name: 'kokoro / risshinben',
    kana: 'こころ / りっしんべん',
    hanViet: 'tâm',
    meaning: { en: 'heart, mind, feeling', vi: 'trái tim, tâm trí, tình cảm' }
  },
  {
    number: 62,
    char: '戈',
    strokes: 4,
    name: 'hoko',
    kana: 'ほこ',
    hanViet: 'qua',
    meaning: { en: 'halberd, spear with axe blade', vi: 'cây kích, giáo có lưỡi ngang' }
  },
  {
    number: 63,
    char: '戸',
    strokes: 4,
    name: 'to',
    kana: 'と',
    hanViet: 'hộ',
    meaning: { en: 'door, household entrance', vi: 'cửa, cửa nhà' }
  },
  {
    number: 64,
    char: '手',
    variants: ['扌'],
    strokes: 4,
    name: 'te / tehen',
    kana: 'て / てへん',
    hanViet: 'thủ',
    meaning: { en: 'hand, arm, do by hand', vi: 'tay, bàn tay, làm bằng tay' }
  },
  {
    number: 65,
    char: '支',
    strokes: 4,
    name: 'shi',
    kana: 'し',
    hanViet: 'chi',
    meaning: { en: 'branch, support, hold up', vi: 'cành cây, chống đỡ, nâng' }
  },
  {
    number: 66,
    char: '攴',
    variants: ['攵'],
    strokes: 4,
    name: 'bokuzukuri',
    kana: 'ぼくづくり',
    hanViet: 'phộc',
    meaning: { en: 'tap, strike lightly, action by hand', vi: 'đánh khẽ, gõ, hành động bằng tay' }
  },
  {
    number: 67,
    char: '文',
    strokes: 4,
    name: 'bun',
    kana: 'ぶん',
    hanViet: 'văn',
    meaning: { en: 'writing, literature, culture, pattern', vi: 'chữ viết, văn chương, hoa văn' }
  },
  {
    number: 68,
    char: '斗',
    strokes: 4,
    name: 'to',
    kana: 'と',
    hanViet: 'đẩu',
    meaning: { en: 'dipper, measuring ladle, Big Dipper', vi: 'cái đấu đong, chòm sao Bắc Đẩu' }
  },
  {
    number: 69,
    char: '斤',
    strokes: 4,
    name: 'ono',
    kana: 'おの',
    hanViet: 'cân',
    meaning: { en: 'axe, hatchet, unit of weight (catty)', vi: 'cái rìu, cân (đơn vị trọng lượng)' }
  },
  {
    number: 70,
    char: '方',
    strokes: 4,
    name: 'hou',
    kana: 'ほう',
    hanViet: 'phương',
    meaning: { en: 'square, direction, side, method', vi: 'hình vuông, phương hướng, cách thức' }
  },
  {
    number: 71,
    char: '无',
    strokes: 4,
    name: 'nashi',
    kana: 'なし',
    hanViet: 'vô',
    meaning: { en: 'not, without, none', vi: 'không, chẳng có' }
  },
  {
    number: 72,
    char: '日',
    strokes: 4,
    name: 'hi',
    kana: 'ひ',
    hanViet: 'nhật',
    meaning: { en: 'sun, day, daytime, Japan', vi: 'mặt trời, ngày, ban ngày' }
  },
  {
    number: 73,
    char: '曰',
    strokes: 4,
    name: 'hirabi',
    kana: 'ひらび',
    hanViet: 'viết',
    meaning: { en: 'say, speak, call, name', vi: 'nói rằng, bảo, gọi tên' }
  },
  {
    number: 74,
    char: '月',
    strokes: 4,
    name: 'tsuki',
    kana: 'つき',
    hanViet: 'nguyệt',
    meaning: { en: 'moon, month', vi: 'mặt trăng, tháng' },
    componentMeaning: { en: 'flesh/body', vi: 'thịt, thân thể' }
  },
  {
    number: 75,
    char: '木',
    strokes: 4,
    name: 'ki',
    kana: 'き',
    hanViet: 'mộc',
    meaning: { en: 'tree, wood, timber', vi: 'cây, gỗ' }
  },
  {
    number: 76,
    char: '欠',
    strokes: 4,
    name: 'akubi',
    kana: 'あくび',
    hanViet: 'khiếm',
    meaning: { en: 'lack, deficiency, yawn, open mouth', vi: 'thiếu, khuyết, há miệng, ngáp' }
  },
  {
    number: 77,
    char: '止',
    strokes: 4,
    name: 'tomeru',
    kana: 'とめる',
    hanViet: 'chỉ',
    meaning: {
      en: 'stop, halt, foot, toe (original sense)',
      vi: 'dừng, ngừng, bàn chân (nghĩa gốc)'
    }
  },
  {
    number: 78,
    char: '歹',
    strokes: 4,
    name: 'gatsuhen',
    kana: 'がつへん',
    hanViet: 'đãi',
    meaning: { en: 'death, remains, bad, decayed bone', vi: 'xương tàn, cái chết, hư hoại' }
  },
  {
    number: 79,
    char: '殳',
    strokes: 4,
    name: 'rumata',
    kana: 'るまた',
    hanViet: 'thù',
    meaning: { en: 'weapon, lance, striking pole', vi: 'binh khí, giáo dài để đập' }
  },
  {
    number: 80,
    char: '母',
    variants: ['毋'],
    strokes: 5,
    name: 'haha / nakare',
    kana: 'はは',
    hanViet: 'mẫu',
    meaning: { en: 'mother, do not, must not (variant 毋)', vi: 'mẹ, chớ, đừng (biến thể 毋)' }
  },
  {
    number: 81,
    char: '比',
    strokes: 4,
    name: 'kuraberu',
    kana: 'くらべる',
    hanViet: 'tỷ',
    meaning: { en: 'compare, contrast, ratio', vi: 'so sánh, đối chiếu, tỷ lệ' }
  },
  {
    number: 82,
    char: '毛',
    strokes: 4,
    name: 'ke',
    kana: 'け',
    hanViet: 'mao',
    meaning: { en: 'fur, hair, feather-like down', vi: 'lông, lông thú' }
  },
  {
    number: 83,
    char: '氏',
    strokes: 4,
    name: 'uji',
    kana: 'うじ',
    hanViet: 'thị',
    meaning: { en: 'clan, family name, lineage', vi: 'họ, dòng họ' }
  },
  {
    number: 84,
    char: '气',
    strokes: 4,
    name: 'kigamae',
    kana: 'きがまえ',
    hanViet: 'khí',
    meaning: {
      en: 'steam, vapor, breath, air, spirit',
      vi: 'hơi nước, hơi thở, không khí, khí chất'
    }
  },
  {
    number: 85,
    char: '水',
    variants: ['氵'],
    strokes: 4,
    name: 'mizu / sanzui',
    kana: 'みず / さんずい',
    hanViet: 'thuỷ',
    meaning: { en: 'water, liquid, fluid', vi: 'nước, chất lỏng' }
  },
  {
    number: 86,
    char: '火',
    variants: ['灬'],
    strokes: 4,
    name: 'hi / renga',
    kana: 'ひ / れんが',
    hanViet: 'hoả',
    meaning: { en: 'fire, flame, burn', vi: 'lửa, ngọn lửa, đốt cháy' }
  },
  {
    number: 87,
    char: '爪',
    variants: ['爫'],
    strokes: 4,
    name: 'tsume',
    kana: 'つめ',
    hanViet: 'trảo',
    meaning: { en: 'claw, nail, talon', vi: 'móng vuốt, móng tay' }
  },
  {
    number: 88,
    char: '父',
    strokes: 4,
    name: 'chichi',
    kana: 'ちち',
    hanViet: 'phụ',
    meaning: { en: 'father, dad', vi: 'cha, bố' }
  },
  {
    number: 89,
    char: '爻',
    strokes: 4,
    name: 'kou',
    kana: 'こう',
    hanViet: 'hào',
    meaning: { en: 'mix, cross, I Ching hexagram lines', vi: 'giao lẫn, nét hào trong Kinh Dịch' }
  },
  {
    number: 90,
    char: '爿',
    strokes: 4,
    name: 'shouhen',
    kana: 'しょうへん',
    hanViet: 'tường',
    meaning: {
      en: 'split wood (left half), bed frame piece',
      vi: 'mảnh gỗ chẻ (nửa trái), khung giường'
    }
  },
  {
    number: 91,
    char: '片',
    strokes: 4,
    name: 'kata',
    kana: 'かた',
    hanViet: 'phiến',
    meaning: { en: 'slice, fragment, one-sided piece', vi: 'mảnh, miếng, một phía' }
  },
  {
    number: 92,
    char: '牙',
    strokes: 4,
    name: 'kiba',
    kana: 'きば',
    hanViet: 'nha',
    meaning: { en: 'fang, tusk, ivory tooth', vi: 'răng nanh, ngà' }
  },
  {
    number: 93,
    char: '牛',
    variants: ['牜'],
    strokes: 4,
    name: 'ushi',
    kana: 'うし',
    hanViet: 'ngưu',
    meaning: { en: 'cow, ox, cattle', vi: 'trâu bò, gia súc' }
  },
  {
    number: 94,
    char: '犬',
    variants: ['犭'],
    strokes: 4,
    name: 'inu / kemonohen',
    kana: 'いぬ / けものへん',
    hanViet: 'khuyển',
    meaning: { en: 'dog', vi: 'chó' },
    componentMeaning: { en: 'beast, animal', vi: 'thú vật' }
  },
  {
    number: 95,
    char: '玄',
    strokes: 5,
    name: 'gen',
    kana: 'げん',
    hanViet: 'huyền',
    meaning: { en: 'profound, mysterious, dark', vi: 'sâu kín, huyền bí, tối màu' }
  },
  {
    number: 96,
    char: '玉',
    variants: ['王'],
    strokes: 5,
    name: 'tama',
    kana: 'たま',
    hanViet: 'ngọc',
    meaning: {
      en: 'jade, jewel, precious stone, king (variant form)',
      vi: 'ngọc bích, đá quý, vua (dạng biến thể)'
    }
  },
  {
    number: 97,
    char: '瓜',
    strokes: 5,
    name: 'uri',
    kana: 'うり',
    hanViet: 'qua',
    meaning: { en: 'melon, gourd', vi: 'quả dưa, bầu bí' }
  },
  {
    number: 98,
    char: '瓦',
    strokes: 5,
    name: 'kawara',
    kana: 'かわら',
    hanViet: 'ngoã',
    meaning: { en: 'tile, earthenware roof tile', vi: 'ngói, mái đất nung' }
  },
  {
    number: 99,
    char: '甘',
    strokes: 5,
    name: 'amai',
    kana: 'あまい',
    hanViet: 'cam',
    meaning: { en: 'sweet, pleasant taste', vi: 'ngọt, ngon miệng' }
  },
  {
    number: 100,
    char: '生',
    strokes: 5,
    name: 'umareru',
    kana: 'うまれる',
    hanViet: 'sinh',
    meaning: { en: 'life, birth, live, raw, fresh', vi: 'sống, sinh ra, sống (chưa chín)' }
  },
  {
    number: 101,
    char: '用',
    strokes: 5,
    name: 'mochiiru',
    kana: 'もちいる',
    hanViet: 'dụng',
    meaning: {
      en: 'use, employ, business, task to do',
      vi: 'dùng, sử dụng, việc, công việc cần làm'
    }
  },
  {
    number: 102,
    char: '田',
    strokes: 5,
    name: 'ta',
    kana: 'た',
    hanViet: 'điền',
    meaning: { en: 'rice field, cultivated field', vi: 'ruộng, đồng lúa' }
  },
  {
    number: 103,
    char: '疋',
    strokes: 5,
    name: 'hiki',
    kana: 'ひき',
    hanViet: 'thất',
    meaning: { en: 'bolt of cloth, roll of fabric', vi: 'tấm vải, cuộn vải' }
  },
  {
    number: 104,
    char: '疒',
    strokes: 5,
    name: 'yamaidare',
    kana: 'やまいだれ',
    hanViet: 'nạch',
    meaning: { en: 'sickness, illness, disease', vi: 'bệnh tật, ốm đau' }
  },
  {
    number: 105,
    char: '癶',
    strokes: 5,
    name: 'hatsugashira',
    kana: 'はつがしら',
    hanViet: 'bát',
    meaning: {
      en: 'outspread legs, departure, footsteps leaving',
      vi: 'hai chân dang ra, bước đi (rời đi)'
    }
  },
  {
    number: 106,
    char: '白',
    strokes: 5,
    name: 'shiro',
    kana: 'しろ',
    hanViet: 'bạch',
    meaning: { en: 'white, blank, clear, pure', vi: 'trắng, trống, rõ ràng, trong sạch' }
  },
  {
    number: 107,
    char: '皮',
    strokes: 5,
    name: 'kawa',
    kana: 'かわ',
    hanViet: 'bì',
    meaning: { en: 'skin, hide, leather surface', vi: 'da, lớp da ngoài' }
  },
  {
    number: 108,
    char: '皿',
    strokes: 5,
    name: 'sara',
    kana: 'さら',
    hanViet: 'mãnh',
    meaning: { en: 'dish, plate, shallow bowl', vi: 'bát đĩa, đĩa nông' }
  },
  {
    number: 109,
    char: '目',
    strokes: 5,
    name: 'me',
    kana: 'め',
    hanViet: 'mục',
    meaning: { en: 'eye, look, see', vi: 'mắt, nhìn, xem' }
  },
  {
    number: 110,
    char: '矛',
    strokes: 5,
    name: 'hoko',
    kana: 'ほこ',
    hanViet: 'mâu',
    meaning: { en: 'spear, lance, pike', vi: 'cái giáo, thương' }
  },
  {
    number: 111,
    char: '矢',
    strokes: 5,
    name: 'ya',
    kana: 'や',
    hanViet: 'thỉ',
    meaning: { en: 'arrow, dart', vi: 'mũi tên, tên bắn' }
  },
  {
    number: 112,
    char: '石',
    strokes: 5,
    name: 'ishi',
    kana: 'いし',
    hanViet: 'thạch',
    meaning: { en: 'stone, rock', vi: 'đá, tảng đá' }
  },
  {
    number: 113,
    char: '示',
    variants: ['礻'],
    strokes: 5,
    name: 'shimesu',
    kana: 'しめす',
    hanViet: 'thị',
    meaning: { en: 'altar, spirit, to show, indicate', vi: 'bàn thờ, thần linh, chỉ ra, bày tỏ' }
  },
  {
    number: 114,
    char: '禸',
    strokes: 5,
    name: 'juu',
    kana: 'じゅう',
    hanViet: 'nhựu',
    meaning: { en: 'animal track, footprint', vi: 'vết chân thú' }
  },
  {
    number: 115,
    char: '禾',
    strokes: 5,
    name: 'nogihen',
    kana: 'のぎへん',
    hanViet: 'hoà',
    meaning: { en: 'grain, cereal plant (esp. rice on the stalk)', vi: 'lúa, ngũ cốc (cây lúa)' }
  },
  {
    number: 116,
    char: '穴',
    strokes: 5,
    name: 'ana',
    kana: 'あな',
    hanViet: 'huyệt',
    meaning: { en: 'cave, hole, pit', vi: 'hang, lỗ, hố' }
  },
  {
    number: 117,
    char: '立',
    strokes: 5,
    name: 'tatsu',
    kana: 'たつ',
    hanViet: 'lập',
    meaning: { en: 'stand, stand up, establish', vi: 'đứng, đứng lên, dựng nên' }
  },
  {
    number: 118,
    char: '竹',
    strokes: 6,
    name: 'take',
    kana: 'たけ',
    hanViet: 'trúc',
    meaning: { en: 'bamboo', vi: 'tre, cây trúc' }
  },
  {
    number: 119,
    char: '米',
    strokes: 6,
    name: 'kome',
    kana: 'こめ',
    hanViet: 'mễ',
    meaning: { en: 'rice (hulled), grain of rice', vi: 'gạo, hạt gạo' }
  },
  {
    number: 120,
    char: '糸',
    variants: ['糹'],
    strokes: 6,
    name: 'ito',
    kana: 'いと',
    hanViet: 'mịch',
    meaning: { en: 'thread, silk, fine string', vi: 'sợi tơ, chỉ, dây tơ' }
  },
  {
    number: 121,
    char: '缶',
    strokes: 6,
    name: 'hotogi',
    kana: 'ほとぎ',
    hanViet: 'phẫu',
    meaning: { en: 'jar, earthenware vessel, pottery', vi: 'vò sành, bình đất nung' }
  },
  {
    number: 122,
    char: '网',
    variants: ['罒'],
    strokes: 6,
    name: 'ami',
    kana: 'あみ',
    hanViet: 'võng',
    meaning: { en: 'net, mesh, snare', vi: 'cái lưới, mắt lưới' }
  },
  {
    number: 123,
    char: '羊',
    strokes: 6,
    name: 'hitsuji',
    kana: 'ひつじ',
    hanViet: 'dương',
    meaning: { en: 'sheep, ram, goat', vi: 'con cừu, dê' }
  },
  {
    number: 124,
    char: '羽',
    strokes: 6,
    name: 'hane',
    kana: 'はね',
    hanViet: 'vũ',
    meaning: { en: 'feather, wing, plume', vi: 'lông vũ, cánh' }
  },
  {
    number: 125,
    char: '老',
    variants: ['耂'],
    strokes: 6,
    name: 'oiru',
    kana: 'おいる',
    hanViet: 'lão',
    meaning: { en: 'old, aged, elderly', vi: 'già, người cao tuổi' }
  },
  {
    number: 126,
    char: '而',
    strokes: 6,
    name: 'shikaru',
    kana: 'しかる',
    hanViet: 'nhi',
    meaning: { en: 'and, yet, moreover, whiskers (original)', vi: 'mà, và lại, râu (nghĩa gốc)' }
  },
  {
    number: 127,
    char: '耒',
    strokes: 6,
    name: 'suki',
    kana: 'すき',
    hanViet: 'lỗi',
    meaning: { en: 'plow, plough handle', vi: 'cái cày, cán cày' }
  },
  {
    number: 128,
    char: '耳',
    strokes: 6,
    name: 'mimi',
    kana: 'みみ',
    hanViet: 'nhĩ',
    meaning: { en: 'ear, hearing', vi: 'tai, thính giác' }
  },
  {
    number: 129,
    char: '聿',
    strokes: 6,
    name: 'fudezukuri',
    kana: 'ふでづくり',
    hanViet: 'duật',
    meaning: { en: 'writing brush, pen', vi: 'cây bút lông, bút viết' }
  },
  {
    number: 130,
    char: '肉',
    variants: ['⺼'],
    strokes: 6,
    name: 'niku / nikuzuki',
    kana: 'にく / にくづき',
    hanViet: 'nhục',
    meaning: { en: 'meat, flesh, body tissue', vi: 'thịt, thân thịt' }
  },
  {
    number: 131,
    char: '臣',
    strokes: 6,
    name: 'shin',
    kana: 'しん',
    hanViet: 'thần',
    meaning: { en: 'minister, retainer, subject (of a ruler)', vi: 'bề tôi, bề tôi trung' }
  },
  {
    number: 132,
    char: '自',
    strokes: 6,
    name: 'mizukara',
    kana: 'みずから',
    hanViet: 'tự',
    meaning: {
      en: 'self, oneself, nose (original sense)',
      vi: 'tự mình, bản thân, cái mũi (nghĩa gốc)'
    }
  },
  {
    number: 133,
    char: '至',
    strokes: 6,
    name: 'itaru',
    kana: 'いたる',
    hanViet: 'chí',
    meaning: { en: 'arrive, reach, utmost, extreme', vi: 'đến, tới, cực điểm' }
  },
  {
    number: 134,
    char: '臼',
    strokes: 6,
    name: 'usu',
    kana: 'うす',
    hanViet: 'cữu',
    meaning: { en: 'mortar, grinding bowl', vi: 'cái cối giã' }
  },
  {
    number: 135,
    char: '舌',
    strokes: 6,
    name: 'shita',
    kana: 'した',
    hanViet: 'thiệt',
    meaning: { en: 'tongue', vi: 'lưỡi' }
  },
  {
    number: 136,
    char: '舛',
    strokes: 6,
    name: 'maisuashi',
    kana: 'まいすあし',
    hanViet: 'suyễn',
    meaning: { en: 'oppose, go against, dancing feet', vi: 'trái nhau, đối nghịch, chân nhảy múa' }
  },
  {
    number: 137,
    char: '舟',
    strokes: 6,
    name: 'fune',
    kana: 'ふね',
    hanViet: 'chu',
    meaning: { en: 'boat, ship, vessel', vi: 'thuyền, tàu' }
  },
  {
    number: 138,
    char: '艮',
    strokes: 6,
    name: 'ushitora',
    kana: 'うしとら',
    hanViet: 'cấn',
    meaning: {
      en: 'stopping, stubborn resistance, northeast trigram',
      vi: 'dừng lại, cứng đầu, quẻ Cấn'
    }
  },
  {
    number: 139,
    char: '色',
    strokes: 6,
    name: 'iro',
    kana: 'いろ',
    hanViet: 'sắc',
    meaning: { en: 'color, hue, appearance, lust', vi: 'màu sắc, vẻ ngoài, dục vọng' }
  },
  {
    number: 140,
    char: '艸',
    variants: ['艹'],
    strokes: 6,
    name: 'kusakanmuri',
    kana: 'くさかんむり',
    hanViet: 'thảo',
    meaning: { en: 'grass, herb, plant', vi: 'cỏ, cây cỏ' }
  },
  {
    number: 141,
    char: '虍',
    strokes: 6,
    name: 'toragashira',
    kana: 'とらがしら',
    hanViet: 'hô',
    meaning: { en: 'tiger (esp. the head of a tiger)', vi: 'đầu con hổ, bộ hổ' }
  },
  {
    number: 142,
    char: '虫',
    strokes: 6,
    name: 'mushi',
    kana: 'むし',
    hanViet: 'trùng',
    meaning: { en: 'insect, bug, worm, small creature', vi: 'sâu bọ, côn trùng' }
  },
  {
    number: 143,
    char: '血',
    strokes: 6,
    name: 'chi',
    kana: 'ち',
    hanViet: 'huyết',
    meaning: { en: 'blood', vi: 'máu' }
  },
  {
    number: 144,
    char: '行',
    strokes: 6,
    name: 'gyou',
    kana: 'ぎょう',
    hanViet: 'hành',
    meaning: { en: 'go, walk, travel, carry out, conduct', vi: 'đi, bước đi, thực hiện' }
  },
  {
    number: 145,
    char: '衣',
    variants: ['衤'],
    strokes: 6,
    name: 'koromo',
    kana: 'ころも',
    hanViet: 'y',
    meaning: { en: 'clothes, garment, robe', vi: 'áo, quần áo' }
  },
  {
    number: 146,
    char: '襾',
    variants: ['西'],
    strokes: 6,
    name: 'oou',
    kana: 'おおう',
    hanViet: 'á',
    meaning: { en: 'cover, west (homograph form)', vi: 'che đậy, phương tây (dạng đồng tự)' }
  },
  {
    number: 147,
    char: '見',
    strokes: 7,
    name: 'miru',
    kana: 'みる',
    hanViet: 'kiến',
    meaning: { en: 'see, look, meet', vi: 'thấy, nhìn, gặp' }
  },
  {
    number: 148,
    char: '角',
    strokes: 7,
    name: 'tsuno',
    kana: 'つの',
    hanViet: 'giác',
    meaning: { en: 'horn, antler, angle, corner', vi: 'sừng, góc' }
  },
  {
    number: 149,
    char: '言',
    variants: ['訁'],
    strokes: 7,
    name: 'gonben',
    kana: 'ごんべん',
    hanViet: 'ngôn',
    meaning: { en: 'speech, words, language', vi: 'lời nói, ngôn ngữ' }
  },
  {
    number: 150,
    char: '谷',
    strokes: 7,
    name: 'tani',
    kana: 'たに',
    hanViet: 'cốc',
    meaning: { en: 'valley, gorge', vi: 'thung lũng, khe núi' }
  },
  {
    number: 151,
    char: '豆',
    strokes: 7,
    name: 'mame',
    kana: 'まめ',
    hanViet: 'đậu',
    meaning: { en: 'bean, pea, vessel shaped like a bean', vi: 'hạt đậu, đồ đựng dạng đậu' }
  },
  {
    number: 152,
    char: '豕',
    strokes: 7,
    name: 'inoko',
    kana: 'いのこ',
    hanViet: 'thỉ',
    meaning: { en: 'pig, swine', vi: 'con lợn, heo' }
  },
  {
    number: 153,
    char: '豸',
    strokes: 7,
    name: 'mujinahen',
    kana: 'むじなへん',
    hanViet: 'trĩ',
    meaning: { en: 'clawed animal, beast of prey', vi: 'loài thú có vuốt, thú săn' }
  },
  {
    number: 154,
    char: '貝',
    strokes: 7,
    name: 'kai',
    kana: 'かい',
    hanViet: 'bối',
    meaning: { en: 'shellfish, shell, money, valuables', vi: 'vỏ sò, tiền bạc, của cải' }
  },
  {
    number: 155,
    char: '赤',
    strokes: 7,
    name: 'aka',
    kana: 'あか',
    hanViet: 'xích',
    meaning: { en: 'red, scarlet', vi: 'đỏ, đỏ thắm' }
  },
  {
    number: 156,
    char: '走',
    strokes: 7,
    name: 'hashiru',
    kana: 'はしる',
    hanViet: 'tẩu',
    meaning: { en: 'run, flee, dash', vi: 'chạy, chạy trốn' }
  },
  {
    number: 157,
    char: '足',
    variants: ['⻊'],
    strokes: 7,
    name: 'ashi',
    kana: 'あし',
    hanViet: 'túc',
    meaning: { en: 'foot, leg, suffice, be enough', vi: 'chân, đủ' }
  },
  {
    number: 158,
    char: '身',
    strokes: 7,
    name: 'mi',
    kana: 'み',
    hanViet: 'thân',
    meaning: { en: 'body, oneself, person', vi: 'thân thể, bản thân' }
  },
  {
    number: 159,
    char: '車',
    strokes: 7,
    name: 'kuruma',
    kana: 'くるま',
    hanViet: 'xa',
    meaning: { en: 'cart, vehicle, car', vi: 'xe, xe cộ' }
  },
  {
    number: 160,
    char: '辛',
    strokes: 7,
    name: 'karai',
    kana: 'からい',
    hanViet: 'tân',
    meaning: { en: 'bitter, spicy, harsh, hardship', vi: 'cay, đắng, gian khổ' }
  },
  {
    number: 161,
    char: '辰',
    strokes: 7,
    name: 'shinnotatsu',
    kana: 'しんのたつ',
    hanViet: 'thần',
    meaning: {
      en: 'morning, dragon (zodiac), celestial body',
      vi: 'buổi sớm, rồng (địa chi), thiên thể'
    }
  },
  {
    number: 162,
    char: '辵',
    variants: ['辶'],
    strokes: 7,
    name: 'shinnyou',
    kana: 'しんにょう',
    hanViet: 'sước',
    meaning: { en: 'movement, walk, road radical', vi: 'bước đi, bộ hành (lộ trình)' }
  },
  {
    number: 163,
    char: '邑',
    variants: ['阝'],
    strokes: 7,
    name: 'oozato',
    kana: 'おおざと',
    hanViet: 'ấp',
    meaning: {
      en: 'village, town, settlement (right-side form)',
      vi: 'làng, ấp, thị trấn (dạng bên phải)'
    }
  },
  {
    number: 164,
    char: '酉',
    strokes: 7,
    name: 'sake',
    kana: 'さけ',
    hanViet: 'dậu',
    meaning: {
      en: 'wine, alcohol, bird (zodiac rooster)',
      vi: 'rượu, đồ uống có cồn, gà (địa chi)'
    }
  },
  {
    number: 165,
    char: '釆',
    variants: ['采'],
    strokes: 7,
    name: 'nogome',
    kana: 'のごめ',
    hanViet: 'biện',
    meaning: { en: 'distinguish, sort out, pluck', vi: 'phân biệt, chọn lọc, hái' }
  },
  {
    number: 166,
    char: '里',
    strokes: 7,
    name: 'sato',
    kana: 'さと',
    hanViet: 'lý',
    meaning: {
      en: 'village, hometown, Japanese ri (distance unit)',
      vi: 'làng, quê hương, dặm (đơn vị đường)'
    }
  },
  {
    number: 167,
    char: '金',
    strokes: 8,
    name: 'kane',
    kana: 'かね',
    hanViet: 'kim',
    meaning: { en: 'metal, gold, money', vi: 'kim loại, vàng, tiền bạc' }
  },
  {
    number: 168,
    char: '長',
    strokes: 8,
    name: 'nagai',
    kana: 'ながい',
    hanViet: 'trường',
    meaning: { en: 'long, lengthy, grow, elder', vi: 'dài, trưởng thành, người lớn tuổi' }
  },
  {
    number: 169,
    char: '門',
    strokes: 8,
    name: 'mon',
    kana: 'もん',
    hanViet: 'môn',
    meaning: { en: 'gate, door, entrance', vi: 'cửa lớn, cổng' }
  },
  {
    number: 170,
    char: '阜',
    variants: ['阝'],
    strokes: 8,
    name: 'kozatohen',
    kana: 'こざとへん',
    hanViet: 'phụ',
    meaning: { en: 'mound, hill, dam (left-side form)', vi: 'đống đất, gò, đê (dạng bên trái)' }
  },
  {
    number: 171,
    char: '隶',
    strokes: 8,
    name: 'rei',
    kana: 'れい',
    hanViet: 'đãi',
    meaning: { en: 'capture, catch up with, slave', vi: 'bắt kịp, bắt giữ, nô lệ' }
  },
  {
    number: 172,
    char: '隹',
    strokes: 8,
    name: 'furutori',
    kana: 'ふるとり',
    hanViet: 'chuy',
    meaning: { en: 'short-tailed bird, old bird', vi: 'chim đuôi ngắn, chim cổ' }
  },
  {
    number: 173,
    char: '雨',
    strokes: 8,
    name: 'ame',
    kana: 'あめ',
    hanViet: 'vũ',
    meaning: { en: 'rain, rainfall, weather from the sky', vi: 'mưa, mưa rơi' }
  },
  {
    number: 174,
    char: '青',
    strokes: 8,
    name: 'ao',
    kana: 'あお',
    hanViet: 'thanh',
    meaning: { en: 'blue, green, youth, fresh', vi: 'xanh (lam/lục), tuổi trẻ, tươi' }
  },
  {
    number: 175,
    char: '非',
    strokes: 8,
    name: 'arazu',
    kana: 'あらず',
    hanViet: 'phi',
    meaning: { en: 'wrong, not so, fault, un-', vi: 'sai, không phải, phủ định' }
  },
  {
    number: 176,
    char: '面',
    strokes: 9,
    name: 'men',
    kana: 'めん',
    hanViet: 'diện',
    meaning: { en: 'face, surface, aspect', vi: 'mặt, bề mặt, khía cạnh' }
  },
  {
    number: 177,
    char: '革',
    strokes: 9,
    name: 'kawa',
    kana: 'かわ',
    hanViet: 'cách',
    meaning: { en: 'leather, hide, reform, renew', vi: 'da thuộc, cải cách, đổi mới' }
  },
  {
    number: 178,
    char: '韋',
    strokes: 9,
    name: 'namegawa',
    kana: 'なめがわ',
    hanViet: 'vi',
    meaning: { en: 'tanned soft leather', vi: 'da mềm đã thuộc' }
  },
  {
    number: 179,
    char: '韭',
    strokes: 9,
    name: 'nira',
    kana: 'にら',
    hanViet: 'phỉ',
    meaning: { en: 'leek, Chinese chives', vi: 'rau hẹ' }
  },
  {
    number: 180,
    char: '音',
    strokes: 9,
    name: 'oto',
    kana: 'おと',
    hanViet: 'âm',
    meaning: { en: 'sound, noise, tone', vi: 'âm thanh, tiếng' }
  },
  {
    number: 181,
    char: '頁',
    strokes: 9,
    name: 'ougai',
    kana: 'おうがい',
    hanViet: 'hiệt',
    meaning: { en: 'head, leaf of a book, page', vi: 'đầu, trang sách, tờ' }
  },
  {
    number: 182,
    char: '風',
    strokes: 9,
    name: 'kaze',
    kana: 'かぜ',
    hanViet: 'phong',
    meaning: { en: 'wind, breeze, style, manner', vi: 'gió, phong cách' }
  },
  {
    number: 183,
    char: '飛',
    strokes: 9,
    name: 'tobu',
    kana: 'とぶ',
    hanViet: 'phi',
    meaning: { en: 'fly, soar', vi: 'bay, bay lên' }
  },
  {
    number: 184,
    char: '食',
    variants: ['飠'],
    strokes: 9,
    name: 'shoku',
    kana: 'しょく',
    hanViet: 'thực',
    meaning: { en: 'eat, food, meal', vi: 'ăn, thức ăn, bữa ăn' }
  },
  {
    number: 185,
    char: '首',
    strokes: 9,
    name: 'kubi',
    kana: 'くび',
    hanViet: 'thủ',
    meaning: { en: 'neck, head, leader, chief', vi: 'đầu, cổ, thủ lĩnh' }
  },
  {
    number: 186,
    char: '香',
    strokes: 9,
    name: 'kaori',
    kana: 'かおり',
    hanViet: 'hương',
    meaning: { en: 'fragrance, scent, aroma', vi: 'mùi thơm, hương thơm' }
  },
  {
    number: 187,
    char: '馬',
    strokes: 10,
    name: 'uma',
    kana: 'うま',
    hanViet: 'mã',
    meaning: { en: 'horse', vi: 'ngựa' }
  },
  {
    number: 188,
    char: '骨',
    strokes: 10,
    name: 'hone',
    kana: 'ほね',
    hanViet: 'cốt',
    meaning: { en: 'bone, skeleton', vi: 'xương, bộ xương' }
  },
  {
    number: 189,
    char: '高',
    strokes: 10,
    name: 'takai',
    kana: 'たかい',
    hanViet: 'cao',
    meaning: { en: 'tall, high, expensive, lofty', vi: 'cao, đắt, cao quý' }
  },
  {
    number: 190,
    char: '髟',
    strokes: 10,
    name: 'kamigashira',
    kana: 'かみがしら',
    hanViet: 'tiêu',
    meaning: { en: 'long hair, hair on the head', vi: 'tóc dài, bộ tóc' }
  },
  {
    number: 191,
    char: '鬥',
    strokes: 10,
    name: 'tatakaigamae',
    kana: 'たたかいがまえ',
    hanViet: 'đấu',
    meaning: { en: 'fight, battle, struggle', vi: 'đánh nhau, chiến đấu' }
  },
  {
    number: 192,
    char: '鬯',
    strokes: 10,
    name: 'chou',
    kana: 'ちょう',
    hanViet: 'sưởng',
    meaning: { en: 'sacrificial wine, fragrant ritual liquor', vi: 'rượu tế, rượu lễ' }
  },
  {
    number: 193,
    char: '鬲',
    strokes: 10,
    name: 'kanae',
    kana: 'かなえ',
    hanViet: 'cách',
    meaning: { en: 'cauldron, tripod cooking vessel', vi: 'cái vạc, nồi ba chân' }
  },
  {
    number: 194,
    char: '鬼',
    strokes: 10,
    name: 'oni',
    kana: 'おに',
    hanViet: 'quỷ',
    meaning: { en: 'ghost, demon, spirit', vi: 'ma quỷ, linh hồn dữ' }
  },
  {
    number: 195,
    char: '魚',
    strokes: 11,
    name: 'uo',
    kana: 'うお',
    hanViet: 'ngư',
    meaning: { en: 'fish', vi: 'cá' }
  },
  {
    number: 196,
    char: '鳥',
    strokes: 11,
    name: 'tori',
    kana: 'とり',
    hanViet: 'điểu',
    meaning: { en: 'bird', vi: 'chim' }
  },
  {
    number: 197,
    char: '鹵',
    strokes: 11,
    name: 'ro',
    kana: 'ろ',
    hanViet: 'lỗ',
    meaning: { en: 'salt, saline land, alkali', vi: 'đất mặn, muối, kiềm' }
  },
  {
    number: 198,
    char: '鹿',
    strokes: 11,
    name: 'shika',
    kana: 'しか',
    hanViet: 'lộc',
    meaning: { en: 'deer', vi: 'con hươu, nai' }
  },
  {
    number: 199,
    char: '麥',
    variants: ['麦'],
    strokes: 11,
    name: 'mugi',
    kana: 'むぎ',
    hanViet: 'mạch',
    meaning: { en: 'wheat, barley, grain crop', vi: 'lúa mì, lúa mạch' }
  },
  {
    number: 200,
    char: '麻',
    strokes: 11,
    name: 'asa',
    kana: 'あさ',
    hanViet: 'ma',
    meaning: { en: 'hemp, flax, numb', vi: 'cây gai, đay, tê bì' }
  },
  {
    number: 201,
    char: '黃',
    variants: ['黄'],
    strokes: 12,
    name: 'ki',
    kana: 'き',
    hanViet: 'hoàng',
    meaning: { en: 'yellow', vi: 'màu vàng' }
  },
  {
    number: 202,
    char: '黍',
    strokes: 12,
    name: 'kibi',
    kana: 'きび',
    hanViet: 'thử',
    meaning: { en: 'millet, sticky millet', vi: 'cây kê, lúa nếp kê' }
  },
  {
    number: 203,
    char: '黑',
    variants: ['黒'],
    strokes: 12,
    name: 'kuro',
    kana: 'くろ',
    hanViet: 'hắc',
    meaning: { en: 'black, dark', vi: 'đen, tối màu' }
  },
  {
    number: 204,
    char: '黹',
    strokes: 12,
    name: 'nuu',
    kana: 'ぬう',
    hanViet: 'chỉ',
    meaning: { en: 'embroidery, sewing, needlework', vi: 'may vá, thêu' }
  },
  {
    number: 205,
    char: '黽',
    strokes: 13,
    name: 'kaeru',
    kana: 'かえる',
    hanViet: 'mãnh',
    meaning: { en: 'frog, amphibian, strive (classical)', vi: 'con ếch, gắng sức (nghĩa cổ)' }
  },
  {
    number: 206,
    char: '鼎',
    strokes: 13,
    name: 'kanae',
    kana: 'かなえ',
    hanViet: 'đỉnh',
    meaning: { en: 'tripod, ritual bronze vessel', vi: 'cái đỉnh, đồ đồng ba chân' }
  },
  {
    number: 207,
    char: '鼓',
    strokes: 13,
    name: 'tsuzumi',
    kana: 'つづみ',
    hanViet: 'cổ',
    meaning: { en: 'drum, percussion instrument', vi: 'cái trống' }
  },
  {
    number: 208,
    char: '鼠',
    strokes: 13,
    name: 'nezumi',
    kana: 'ねずみ',
    hanViet: 'thử',
    meaning: { en: 'rat, mouse', vi: 'con chuột' }
  },
  {
    number: 209,
    char: '鼻',
    strokes: 14,
    name: 'hana',
    kana: 'はな',
    hanViet: 'tỵ',
    meaning: { en: 'nose', vi: 'mũi' }
  },
  {
    number: 210,
    char: '齊',
    variants: ['斉'],
    strokes: 14,
    name: 'sei',
    kana: 'せい',
    hanViet: 'tề',
    meaning: {
      en: 'even, uniform, alike, arrange neatly',
      vi: 'đều nhau, ngang hàng, sắp xếp ngay ngắn'
    }
  },
  {
    number: 211,
    char: '齒',
    variants: ['歯'],
    strokes: 15,
    name: 'ha',
    kana: 'は',
    hanViet: 'xỉ',
    meaning: { en: 'tooth, teeth', vi: 'răng' }
  },
  {
    number: 212,
    char: '龍',
    variants: ['竜'],
    strokes: 16,
    name: 'ryuu',
    kana: 'りゅう',
    hanViet: 'long',
    meaning: { en: 'dragon', vi: 'rồng' }
  },
  {
    number: 213,
    char: '龜',
    variants: ['亀'],
    strokes: 16,
    name: 'kame',
    kana: 'かめ',
    hanViet: 'quy',
    meaning: { en: 'turtle, tortoise', vi: 'con rùa' }
  },
  {
    number: 214,
    char: '龠',
    strokes: 17,
    name: 'yaku',
    kana: 'やく',
    hanViet: 'dược',
    meaning: { en: 'flute, panpipes, reed pipe', vi: 'sáo, ống tiêu' }
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
