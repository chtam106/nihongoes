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
  /** Vietnamese (Han-Viet - meaning) and English meaning. */
  meaning: Bilingual;
};

export const radicals: Radical[] = [
  { number: 1, char: '一', strokes: 1, name: 'ichi', meaning: { en: 'one', vi: 'nhất - một' } },
  {
    number: 2,
    char: '丨',
    strokes: 1,
    name: 'bou',
    meaning: { en: 'line', vi: 'cổn - nét sổ' }
  },
  { number: 3, char: '丶', strokes: 1, name: 'ten', meaning: { en: 'dot', vi: 'chủ - dấu chấm' } },
  {
    number: 4,
    char: '丿',
    strokes: 1,
    name: 'no',
    meaning: { en: 'slash', vi: 'phiệt - nét phẩy' }
  },
  {
    number: 5,
    char: '乙',
    variants: ['乚'],
    strokes: 1,
    name: 'otsu',
    meaning: { en: 'second, fishhook', vi: 'ất - móc câu' }
  },
  {
    number: 6,
    char: '亅',
    strokes: 1,
    name: 'hanebou',
    meaning: { en: 'hook', vi: 'quyết - nét móc' }
  },
  { number: 7, char: '二', strokes: 2, name: 'ni', meaning: { en: 'two', vi: 'nhị - hai' } },
  {
    number: 8,
    char: '亠',
    strokes: 2,
    name: 'nabebuta',
    meaning: { en: 'lid', vi: 'đầu - nắp đậy' }
  },
  {
    number: 9,
    char: '人',
    variants: ['亻'],
    strokes: 2,
    name: 'hito / ninben',
    meaning: { en: 'person', vi: 'nhân - người' }
  },
  {
    number: 10,
    char: '儿',
    strokes: 2,
    name: 'hitoashi',
    meaning: { en: 'legs', vi: 'nhân - chân người' }
  },
  { number: 11, char: '入', strokes: 2, name: 'iru', meaning: { en: 'enter', vi: 'nhập - vào' } },
  { number: 12, char: '八', strokes: 2, name: 'hachi', meaning: { en: 'eight', vi: 'bát - tám' } },
  {
    number: 13,
    char: '冂',
    strokes: 2,
    name: 'keigamae',
    meaning: { en: 'down box', vi: 'quynh - vùng biên' }
  },
  {
    number: 14,
    char: '冖',
    strokes: 2,
    name: 'wakanmuri',
    meaning: { en: 'cover', vi: 'mịch - trùm khăn' }
  },
  {
    number: 15,
    char: '冫',
    strokes: 2,
    name: 'nisui',
    meaning: { en: 'ice', vi: 'băng - nước đá' }
  },
  {
    number: 16,
    char: '几',
    strokes: 2,
    name: 'tsukue',
    meaning: { en: 'table', vi: 'kỷ - cái bàn' }
  },
  {
    number: 17,
    char: '凵',
    strokes: 2,
    name: 'ukebako',
    meaning: { en: 'open box', vi: 'khảm - há miệng' }
  },
  {
    number: 18,
    char: '刀',
    variants: ['刂'],
    strokes: 2,
    name: 'katana / rittou',
    meaning: { en: 'knife', vi: 'đao - con dao' }
  },
  {
    number: 19,
    char: '力',
    strokes: 2,
    name: 'chikara',
    meaning: { en: 'power', vi: 'lực - sức' }
  },
  {
    number: 20,
    char: '勹',
    strokes: 2,
    name: 'tsutsumigamae',
    meaning: { en: 'wrap', vi: 'bao - bao bọc' }
  },
  {
    number: 21,
    char: '匕',
    strokes: 2,
    name: 'saji',
    meaning: { en: 'spoon', vi: 'chuỷ - cái thìa' }
  },
  {
    number: 22,
    char: '匚',
    strokes: 2,
    name: 'hakogamae',
    meaning: { en: 'box', vi: 'phương - cái tủ' }
  },
  {
    number: 23,
    char: '匸',
    strokes: 2,
    name: 'kakushigamae',
    meaning: { en: 'hiding enclosure', vi: 'hệ - che giấu' }
  },
  { number: 24, char: '十', strokes: 2, name: 'juu', meaning: { en: 'ten', vi: 'thập - mười' } },
  {
    number: 25,
    char: '卜',
    strokes: 2,
    name: 'boku',
    meaning: { en: 'divination', vi: 'bốc - bói toán' }
  },
  {
    number: 26,
    char: '卩',
    strokes: 2,
    name: 'fushizukuri',
    meaning: { en: 'seal', vi: 'tiết - con dấu' }
  },
  {
    number: 27,
    char: '厂',
    strokes: 2,
    name: 'gandare',
    meaning: { en: 'cliff', vi: 'hán - sườn núi' }
  },
  {
    number: 28,
    char: '厶',
    strokes: 2,
    name: 'mu',
    meaning: { en: 'private', vi: 'khư - riêng tư' }
  },
  {
    number: 29,
    char: '又',
    strokes: 2,
    name: 'mata',
    meaning: { en: 'again', vi: 'hựu - lại nữa' }
  },
  {
    number: 30,
    char: '口',
    strokes: 3,
    name: 'kuchi',
    meaning: { en: 'mouth', vi: 'khẩu - miệng' }
  },
  {
    number: 31,
    char: '囗',
    strokes: 3,
    name: 'kunigamae',
    meaning: { en: 'enclosure', vi: 'vi - vây quanh' }
  },
  { number: 32, char: '土', strokes: 3, name: 'tsuchi', meaning: { en: 'earth', vi: 'thổ - đất' } },
  {
    number: 33,
    char: '士',
    strokes: 3,
    name: 'samurai',
    meaning: { en: 'scholar', vi: 'sĩ - học trò' }
  },
  { number: 34, char: '夂', strokes: 3, name: 'chi', meaning: { en: 'go', vi: 'truy - đến sau' } },
  {
    number: 35,
    char: '夊',
    strokes: 3,
    name: 'suinyou',
    meaning: { en: 'go slowly', vi: 'tuy - đi chậm' }
  },
  {
    number: 36,
    char: '夕',
    strokes: 3,
    name: 'yuube',
    meaning: { en: 'evening', vi: 'tịch - buổi tối' }
  },
  { number: 37, char: '大', strokes: 3, name: 'dai', meaning: { en: 'big', vi: 'đại - to lớn' } },
  {
    number: 38,
    char: '女',
    strokes: 3,
    name: 'onna',
    meaning: { en: 'woman', vi: 'nữ - con gái' }
  },
  { number: 39, char: '子', strokes: 3, name: 'ko', meaning: { en: 'child', vi: 'tử - con' } },
  {
    number: 40,
    char: '宀',
    strokes: 3,
    name: 'ukanmuri',
    meaning: { en: 'roof', vi: 'miên - mái nhà' }
  },
  { number: 41, char: '寸', strokes: 3, name: 'sun', meaning: { en: 'inch', vi: 'thốn - tấc' } },
  { number: 42, char: '小', strokes: 3, name: 'shou', meaning: { en: 'small', vi: 'tiểu - nhỏ' } },
  {
    number: 43,
    char: '尢',
    strokes: 3,
    name: 'dainomage',
    meaning: { en: 'lame', vi: 'uông - què chân' }
  },
  {
    number: 44,
    char: '尸',
    strokes: 3,
    name: 'shikabane',
    meaning: { en: 'corpse', vi: 'thi - xác chết' }
  },
  {
    number: 45,
    char: '屮',
    strokes: 3,
    name: 'tetsu',
    meaning: { en: 'sprout', vi: 'triệt - mầm cây' }
  },
  {
    number: 46,
    char: '山',
    strokes: 3,
    name: 'yama',
    meaning: { en: 'mountain', vi: 'sơn - núi' }
  },
  {
    number: 47,
    char: '川',
    variants: ['巛'],
    strokes: 3,
    name: 'kawa',
    meaning: { en: 'river', vi: 'xuyên - sông' }
  },
  { number: 48, char: '工', strokes: 3, name: 'takumi', meaning: { en: 'work', vi: 'công - thợ' } },
  {
    number: 49,
    char: '己',
    strokes: 3,
    name: 'onore',
    meaning: { en: 'oneself', vi: 'kỷ - bản thân' }
  },
  {
    number: 50,
    char: '巾',
    strokes: 3,
    name: 'haba',
    meaning: { en: 'cloth', vi: 'cân - khăn' }
  },
  { number: 51, char: '干', strokes: 3, name: 'kan', meaning: { en: 'dry', vi: 'can - khô' } },
  {
    number: 52,
    char: '幺',
    strokes: 3,
    name: 'itogashira',
    meaning: { en: 'short thread', vi: 'yêu - nhỏ bé' }
  },
  {
    number: 53,
    char: '广',
    strokes: 3,
    name: 'madare',
    meaning: { en: 'shelter', vi: 'nghiễm - mái hiên' }
  },
  {
    number: 54,
    char: '廴',
    strokes: 3,
    name: 'ennyou',
    meaning: { en: 'long stride', vi: 'dẫn - bước dài' }
  },
  {
    number: 55,
    char: '廾',
    strokes: 3,
    name: 'nijuuashi',
    meaning: { en: 'two hands', vi: 'củng - chắp tay' }
  },
  {
    number: 56,
    char: '弋',
    strokes: 3,
    name: 'shikigamae',
    meaning: { en: 'shoot', vi: 'dặc - bắn' }
  },
  {
    number: 57,
    char: '弓',
    strokes: 3,
    name: 'yumi',
    meaning: { en: 'bow', vi: 'cung - cây cung' }
  },
  {
    number: 58,
    char: '彐',
    strokes: 3,
    name: 'keigashira',
    meaning: { en: 'snout', vi: 'kệ - mõm lợn' }
  },
  {
    number: 59,
    char: '彡',
    strokes: 3,
    name: 'sanzukuri',
    meaning: { en: 'bristle', vi: 'sam - lông tóc' }
  },
  {
    number: 60,
    char: '彳',
    strokes: 3,
    name: 'gyouninben',
    meaning: { en: 'step', vi: 'xích - bước ngắn' }
  },
  {
    number: 61,
    char: '心',
    variants: ['忄'],
    strokes: 4,
    name: 'kokoro / risshinben',
    meaning: { en: 'heart', vi: 'tâm - trái tim' }
  },
  {
    number: 62,
    char: '戈',
    strokes: 4,
    name: 'hoko',
    meaning: { en: 'halberd', vi: 'qua - cây kích' }
  },
  { number: 63, char: '戸', strokes: 4, name: 'to', meaning: { en: 'door', vi: 'hộ - cửa' } },
  {
    number: 64,
    char: '手',
    variants: ['扌'],
    strokes: 4,
    name: 'te / tehen',
    meaning: { en: 'hand', vi: 'thủ - tay' }
  },
  { number: 65, char: '支', strokes: 4, name: 'shi', meaning: { en: 'branch', vi: 'chi - cành' } },
  {
    number: 66,
    char: '攴',
    variants: ['攵'],
    strokes: 4,
    name: 'bokuzukuri',
    meaning: { en: 'tap', vi: 'phộc - đánh khẽ' }
  },
  {
    number: 67,
    char: '文',
    strokes: 4,
    name: 'bun',
    meaning: { en: 'writing', vi: 'văn - chữ viết' }
  },
  {
    number: 68,
    char: '斗',
    strokes: 4,
    name: 'to',
    meaning: { en: 'dipper', vi: 'đẩu - cái đấu' }
  },
  { number: 69, char: '斤', strokes: 4, name: 'ono', meaning: { en: 'axe', vi: 'cân - cái rìu' } },
  {
    number: 70,
    char: '方',
    strokes: 4,
    name: 'hou',
    meaning: { en: 'square', vi: 'phương - vuông' }
  },
  { number: 71, char: '无', strokes: 4, name: 'nashi', meaning: { en: 'not', vi: 'vô - không' } },
  {
    number: 72,
    char: '日',
    strokes: 4,
    name: 'hi',
    meaning: { en: 'sun, day', vi: 'nhật - mặt trời' }
  },
  {
    number: 73,
    char: '曰',
    strokes: 4,
    name: 'hirabi',
    meaning: { en: 'say', vi: 'viết - nói rằng' }
  },
  {
    number: 74,
    char: '月',
    strokes: 4,
    name: 'tsuki',
    meaning: { en: 'moon', vi: 'nguyệt - mặt trăng' }
  },
  {
    number: 75,
    char: '木',
    strokes: 4,
    name: 'ki',
    meaning: { en: 'tree, wood', vi: 'mộc - cây' }
  },
  {
    number: 76,
    char: '欠',
    strokes: 4,
    name: 'akubi',
    meaning: { en: 'lack, yawn', vi: 'khiếm - thiếu' }
  },
  { number: 77, char: '止', strokes: 4, name: 'tomeru', meaning: { en: 'stop', vi: 'chỉ - dừng' } },
  {
    number: 78,
    char: '歹',
    strokes: 4,
    name: 'gatsuhen',
    meaning: { en: 'death', vi: 'đãi - xương tàn' }
  },
  {
    number: 79,
    char: '殳',
    strokes: 4,
    name: 'rumata',
    meaning: { en: 'weapon', vi: 'thù - binh khí' }
  },
  {
    number: 80,
    char: '毋',
    strokes: 4,
    name: 'nakare',
    meaning: { en: 'do not', vi: 'vô - chớ' }
  },
  {
    number: 81,
    char: '比',
    strokes: 4,
    name: 'kuraberu',
    meaning: { en: 'compare', vi: 'tỷ - so sánh' }
  },
  { number: 82, char: '毛', strokes: 4, name: 'ke', meaning: { en: 'fur', vi: 'mao - lông' } },
  { number: 83, char: '氏', strokes: 4, name: 'uji', meaning: { en: 'clan', vi: 'thị - họ' } },
  {
    number: 84,
    char: '气',
    strokes: 4,
    name: 'kigamae',
    meaning: { en: 'steam', vi: 'khí - hơi' }
  },
  {
    number: 85,
    char: '水',
    variants: ['氵'],
    strokes: 4,
    name: 'mizu / sanzui',
    meaning: { en: 'water', vi: 'thuỷ - nước' }
  },
  {
    number: 86,
    char: '火',
    variants: ['灬'],
    strokes: 4,
    name: 'hi / renga',
    meaning: { en: 'fire', vi: 'hoả - lửa' }
  },
  {
    number: 87,
    char: '爪',
    variants: ['爫'],
    strokes: 4,
    name: 'tsume',
    meaning: { en: 'claw', vi: 'trảo - móng vuốt' }
  },
  {
    number: 88,
    char: '父',
    strokes: 4,
    name: 'chichi',
    meaning: { en: 'father', vi: 'phụ - cha' }
  },
  { number: 89, char: '爻', strokes: 4, name: 'kou', meaning: { en: 'mix', vi: 'hào - hào quẻ' } },
  {
    number: 90,
    char: '爿',
    strokes: 4,
    name: 'shouhen',
    meaning: { en: 'split wood (left)', vi: 'tường - mảnh gỗ' }
  },
  {
    number: 91,
    char: '片',
    strokes: 4,
    name: 'kata',
    meaning: { en: 'slice', vi: 'phiến - mảnh' }
  },
  {
    number: 92,
    char: '牙',
    strokes: 4,
    name: 'kiba',
    meaning: { en: 'fang', vi: 'nha - răng nanh' }
  },
  {
    number: 93,
    char: '牛',
    variants: ['牜'],
    strokes: 4,
    name: 'ushi',
    meaning: { en: 'cow', vi: 'ngưu - trâu bò' }
  },
  {
    number: 94,
    char: '犬',
    variants: ['犭'],
    strokes: 4,
    name: 'inu / kemonohen',
    meaning: { en: 'dog', vi: 'khuyển - chó' }
  },
  {
    number: 95,
    char: '玄',
    strokes: 5,
    name: 'gen',
    meaning: { en: 'profound', vi: 'huyền - sâu kín' }
  },
  {
    number: 96,
    char: '玉',
    variants: ['王'],
    strokes: 5,
    name: 'tama',
    meaning: { en: 'jade', vi: 'ngọc - đá quý' }
  },
  {
    number: 97,
    char: '瓜',
    strokes: 5,
    name: 'uri',
    meaning: { en: 'melon', vi: 'qua - quả dưa' }
  },
  {
    number: 98,
    char: '瓦',
    strokes: 5,
    name: 'kawara',
    meaning: { en: 'tile', vi: 'ngoã - ngói' }
  },
  { number: 99, char: '甘', strokes: 5, name: 'amai', meaning: { en: 'sweet', vi: 'cam - ngọt' } },
  {
    number: 100,
    char: '生',
    strokes: 5,
    name: 'umareru',
    meaning: { en: 'life', vi: 'sinh - sống' }
  },
  {
    number: 101,
    char: '用',
    strokes: 5,
    name: 'mochiiru',
    meaning: { en: 'use', vi: 'dụng - dùng' }
  },
  { number: 102, char: '田', strokes: 5, name: 'ta', meaning: { en: 'field', vi: 'điền - ruộng' } },
  {
    number: 103,
    char: '疋',
    strokes: 5,
    name: 'hiki',
    meaning: { en: 'bolt of cloth', vi: 'thất - tấm vải' }
  },
  {
    number: 104,
    char: '疒',
    strokes: 5,
    name: 'yamaidare',
    meaning: { en: 'sickness', vi: 'nạch - bệnh tật' }
  },
  {
    number: 105,
    char: '癶',
    strokes: 5,
    name: 'hatsugashira',
    meaning: { en: 'dotted tent', vi: 'bát - gạt ngang' }
  },
  {
    number: 106,
    char: '白',
    strokes: 5,
    name: 'shiro',
    meaning: { en: 'white', vi: 'bạch - trắng' }
  },
  { number: 107, char: '皮', strokes: 5, name: 'kawa', meaning: { en: 'skin', vi: 'bì - da' } },
  {
    number: 108,
    char: '皿',
    strokes: 5,
    name: 'sara',
    meaning: { en: 'dish', vi: 'mãnh - bát đĩa' }
  },
  { number: 109, char: '目', strokes: 5, name: 'me', meaning: { en: 'eye', vi: 'mục - mắt' } },
  {
    number: 110,
    char: '矛',
    strokes: 5,
    name: 'hoko',
    meaning: { en: 'spear', vi: 'mâu - cái giáo' }
  },
  {
    number: 111,
    char: '矢',
    strokes: 5,
    name: 'ya',
    meaning: { en: 'arrow', vi: 'thỉ - mũi tên' }
  },
  { number: 112, char: '石', strokes: 5, name: 'ishi', meaning: { en: 'stone', vi: 'thạch - đá' } },
  {
    number: 113,
    char: '示',
    variants: ['礻'],
    strokes: 5,
    name: 'shimesu',
    meaning: { en: 'altar, spirit', vi: 'thị - thần đất' }
  },
  {
    number: 114,
    char: '禸',
    strokes: 5,
    name: 'juu',
    meaning: { en: 'track', vi: 'nhựu - vết chân' }
  },
  {
    number: 115,
    char: '禾',
    strokes: 5,
    name: 'nogihen',
    meaning: { en: 'grain', vi: 'hoà - lúa' }
  },
  { number: 116, char: '穴', strokes: 5, name: 'ana', meaning: { en: 'cave', vi: 'huyệt - hang' } },
  {
    number: 117,
    char: '立',
    strokes: 5,
    name: 'tatsu',
    meaning: { en: 'stand', vi: 'lập - đứng' }
  },
  {
    number: 118,
    char: '竹',
    strokes: 6,
    name: 'take',
    meaning: { en: 'bamboo', vi: 'trúc - tre' }
  },
  { number: 119, char: '米', strokes: 6, name: 'kome', meaning: { en: 'rice', vi: 'mễ - gạo' } },
  {
    number: 120,
    char: '糸',
    variants: ['糹'],
    strokes: 6,
    name: 'ito',
    meaning: { en: 'thread, silk', vi: 'mịch - sợi tơ' }
  },
  {
    number: 121,
    char: '缶',
    strokes: 6,
    name: 'hotogi',
    meaning: { en: 'jar', vi: 'phẫu - vò sành' }
  },
  {
    number: 122,
    char: '网',
    variants: ['罒'],
    strokes: 6,
    name: 'ami',
    meaning: { en: 'net', vi: 'võng - cái lưới' }
  },
  {
    number: 123,
    char: '羊',
    strokes: 6,
    name: 'hitsuji',
    meaning: { en: 'sheep', vi: 'dương - con dê' }
  },
  {
    number: 124,
    char: '羽',
    strokes: 6,
    name: 'hane',
    meaning: { en: 'feather', vi: 'vũ - lông vũ' }
  },
  {
    number: 125,
    char: '老',
    variants: ['耂'],
    strokes: 6,
    name: 'oiru',
    meaning: { en: 'old', vi: 'lão - già' }
  },
  { number: 126, char: '而', strokes: 6, name: 'shikaru', meaning: { en: 'and', vi: 'nhi - mà' } },
  {
    number: 127,
    char: '耒',
    strokes: 6,
    name: 'suki',
    meaning: { en: 'plow', vi: 'lỗi - cái cày' }
  },
  { number: 128, char: '耳', strokes: 6, name: 'mimi', meaning: { en: 'ear', vi: 'nhĩ - tai' } },
  {
    number: 129,
    char: '聿',
    strokes: 6,
    name: 'fudezukuri',
    meaning: { en: 'brush', vi: 'duật - cây bút' }
  },
  {
    number: 130,
    char: '肉',
    variants: ['⺼'],
    strokes: 6,
    name: 'niku / nikuzuki',
    meaning: { en: 'meat, flesh', vi: 'nhục - thịt' }
  },
  {
    number: 131,
    char: '臣',
    strokes: 6,
    name: 'shin',
    meaning: { en: 'minister', vi: 'thần - bề tôi' }
  },
  {
    number: 132,
    char: '自',
    strokes: 6,
    name: 'mizukara',
    meaning: { en: 'self', vi: 'tự - tự mình' }
  },
  {
    number: 133,
    char: '至',
    strokes: 6,
    name: 'itaru',
    meaning: { en: 'arrive', vi: 'chí - đến' }
  },
  {
    number: 134,
    char: '臼',
    strokes: 6,
    name: 'usu',
    meaning: { en: 'mortar', vi: 'cữu - cái cối' }
  },
  {
    number: 135,
    char: '舌',
    strokes: 6,
    name: 'shita',
    meaning: { en: 'tongue', vi: 'thiệt - lưỡi' }
  },
  {
    number: 136,
    char: '舛',
    strokes: 6,
    name: 'maisuashi',
    meaning: { en: 'oppose', vi: 'suyễn - trái nhau' }
  },
  {
    number: 137,
    char: '舟',
    strokes: 6,
    name: 'fune',
    meaning: { en: 'boat', vi: 'chu - thuyền' }
  },
  {
    number: 138,
    char: '艮',
    strokes: 6,
    name: 'ushitora',
    meaning: { en: 'stopping', vi: 'cấn - dừng lại' }
  },
  { number: 139, char: '色', strokes: 6, name: 'iro', meaning: { en: 'color', vi: 'sắc - màu' } },
  {
    number: 140,
    char: '艸',
    variants: ['艹'],
    strokes: 6,
    name: 'kusakanmuri',
    meaning: { en: 'grass', vi: 'thảo - cỏ' }
  },
  {
    number: 141,
    char: '虍',
    strokes: 6,
    name: 'toragashira',
    meaning: { en: 'tiger', vi: 'hô - đầu con hổ' }
  },
  {
    number: 142,
    char: '虫',
    strokes: 6,
    name: 'mushi',
    meaning: { en: 'insect', vi: 'trùng - sâu bọ' }
  },
  { number: 143, char: '血', strokes: 6, name: 'chi', meaning: { en: 'blood', vi: 'huyết - máu' } },
  {
    number: 144,
    char: '行',
    strokes: 6,
    name: 'gyou',
    meaning: { en: 'go, walk', vi: 'hành - đi' }
  },
  {
    number: 145,
    char: '衣',
    variants: ['衤'],
    strokes: 6,
    name: 'koromo',
    meaning: { en: 'clothes', vi: 'y - áo' }
  },
  {
    number: 146,
    char: '襾',
    variants: ['西'],
    strokes: 6,
    name: 'oou',
    meaning: { en: 'cover, west', vi: 'á - che đậy' }
  },
  { number: 147, char: '見', strokes: 7, name: 'miru', meaning: { en: 'see', vi: 'kiến - thấy' } },
  {
    number: 148,
    char: '角',
    strokes: 7,
    name: 'tsuno',
    meaning: { en: 'horn', vi: 'giác - sừng' }
  },
  {
    number: 149,
    char: '言',
    variants: ['訁'],
    strokes: 7,
    name: 'gonben',
    meaning: { en: 'speech', vi: 'ngôn - lời nói' }
  },
  {
    number: 150,
    char: '谷',
    strokes: 7,
    name: 'tani',
    meaning: { en: 'valley', vi: 'cốc - thung lũng' }
  },
  {
    number: 151,
    char: '豆',
    strokes: 7,
    name: 'mame',
    meaning: { en: 'bean', vi: 'đậu - hạt đậu' }
  },
  {
    number: 152,
    char: '豕',
    strokes: 7,
    name: 'inoko',
    meaning: { en: 'pig', vi: 'thỉ - con lợn' }
  },
  {
    number: 153,
    char: '豸',
    strokes: 7,
    name: 'mujinahen',
    meaning: { en: 'clawed animal', vi: 'trĩ - loài thú' }
  },
  {
    number: 154,
    char: '貝',
    strokes: 7,
    name: 'kai',
    meaning: { en: 'shell, money', vi: 'bối - vỏ sò, tiền' }
  },
  { number: 155, char: '赤', strokes: 7, name: 'aka', meaning: { en: 'red', vi: 'xích - đỏ' } },
  {
    number: 156,
    char: '走',
    strokes: 7,
    name: 'hashiru',
    meaning: { en: 'run', vi: 'tẩu - chạy' }
  },
  { number: 157, char: '足', strokes: 7, name: 'ashi', meaning: { en: 'foot', vi: 'túc - chân' } },
  {
    number: 158,
    char: '身',
    strokes: 7,
    name: 'mi',
    meaning: { en: 'body', vi: 'thân - thân thể' }
  },
  {
    number: 159,
    char: '車',
    strokes: 7,
    name: 'kuruma',
    meaning: { en: 'cart, car', vi: 'xa - xe' }
  },
  {
    number: 160,
    char: '辛',
    strokes: 7,
    name: 'karai',
    meaning: { en: 'bitter', vi: 'tân - cay' }
  },
  {
    number: 161,
    char: '辰',
    strokes: 7,
    name: 'shinnotatsu',
    meaning: { en: 'morning', vi: 'thần - buổi sớm' }
  },
  {
    number: 162,
    char: '辵',
    variants: ['辶'],
    strokes: 7,
    name: 'shinnyou',
    meaning: { en: 'movement', vi: 'sước - bước đi' }
  },
  {
    number: 163,
    char: '邑',
    variants: ['阝'],
    strokes: 7,
    name: 'oozato',
    meaning: { en: 'village (right)', vi: 'ấp - làng (phải)' }
  },
  {
    number: 164,
    char: '酉',
    strokes: 7,
    name: 'sake',
    meaning: { en: 'wine, bird', vi: 'dậu - rượu' }
  },
  {
    number: 165,
    char: '釆',
    strokes: 7,
    name: 'nogome',
    meaning: { en: 'distinguish', vi: 'biện - phân biệt' }
  },
  {
    number: 166,
    char: '里',
    strokes: 7,
    name: 'sato',
    meaning: { en: 'village', vi: 'lý - làng, dặm' }
  },
  {
    number: 167,
    char: '金',
    strokes: 8,
    name: 'kane',
    meaning: { en: 'metal, gold', vi: 'kim - kim loại' }
  },
  {
    number: 168,
    char: '長',
    strokes: 8,
    name: 'nagai',
    meaning: { en: 'long', vi: 'trường - dài' }
  },
  {
    number: 169,
    char: '門',
    strokes: 8,
    name: 'mon',
    meaning: { en: 'gate', vi: 'môn - cửa lớn' }
  },
  {
    number: 170,
    char: '阜',
    variants: ['阝'],
    strokes: 8,
    name: 'kozatohen',
    meaning: { en: 'mound (left)', vi: 'phụ - đống đất (trái)' }
  },
  {
    number: 171,
    char: '隶',
    strokes: 8,
    name: 'rei',
    meaning: { en: 'capture', vi: 'đãi - bắt kịp' }
  },
  {
    number: 172,
    char: '隹',
    strokes: 8,
    name: 'furutori',
    meaning: { en: 'short-tailed bird', vi: 'chuy - chim đuôi ngắn' }
  },
  { number: 173, char: '雨', strokes: 8, name: 'ame', meaning: { en: 'rain', vi: 'vũ - mưa' } },
  {
    number: 174,
    char: '青',
    strokes: 8,
    name: 'ao',
    meaning: { en: 'blue, green', vi: 'thanh - xanh' }
  },
  {
    number: 175,
    char: '非',
    strokes: 8,
    name: 'arazu',
    meaning: { en: 'wrong', vi: 'phi - sai, không' }
  },
  { number: 176, char: '面', strokes: 9, name: 'men', meaning: { en: 'face', vi: 'diện - mặt' } },
  {
    number: 177,
    char: '革',
    strokes: 9,
    name: 'kawa',
    meaning: { en: 'leather', vi: 'cách - da thuộc' }
  },
  {
    number: 178,
    char: '韋',
    strokes: 9,
    name: 'namegawa',
    meaning: { en: 'tanned leather', vi: 'vi - da mềm' }
  },
  {
    number: 179,
    char: '韭',
    strokes: 9,
    name: 'nira',
    meaning: { en: 'leek', vi: 'phỉ - rau hẹ' }
  },
  {
    number: 180,
    char: '音',
    strokes: 9,
    name: 'oto',
    meaning: { en: 'sound', vi: 'âm - âm thanh' }
  },
  {
    number: 181,
    char: '頁',
    strokes: 9,
    name: 'ougai',
    meaning: { en: 'head, page', vi: 'hiệt - đầu, trang' }
  },
  { number: 182, char: '風', strokes: 9, name: 'kaze', meaning: { en: 'wind', vi: 'phong - gió' } },
  { number: 183, char: '飛', strokes: 9, name: 'tobu', meaning: { en: 'fly', vi: 'phi - bay' } },
  {
    number: 184,
    char: '食',
    variants: ['飠'],
    strokes: 9,
    name: 'shoku',
    meaning: { en: 'eat, food', vi: 'thực - ăn' }
  },
  {
    number: 185,
    char: '首',
    strokes: 9,
    name: 'kubi',
    meaning: { en: 'neck, head', vi: 'thủ - đầu, cổ' }
  },
  {
    number: 186,
    char: '香',
    strokes: 9,
    name: 'kaori',
    meaning: { en: 'fragrance', vi: 'hương - mùi thơm' }
  },
  { number: 187, char: '馬', strokes: 10, name: 'uma', meaning: { en: 'horse', vi: 'mã - ngựa' } },
  {
    number: 188,
    char: '骨',
    strokes: 10,
    name: 'hone',
    meaning: { en: 'bone', vi: 'cốt - xương' }
  },
  { number: 189, char: '高', strokes: 10, name: 'takai', meaning: { en: 'tall', vi: 'cao - cao' } },
  {
    number: 190,
    char: '髟',
    strokes: 10,
    name: 'kamigashira',
    meaning: { en: 'long hair', vi: 'tiêu - tóc dài' }
  },
  {
    number: 191,
    char: '鬥',
    strokes: 10,
    name: 'tatakaigamae',
    meaning: { en: 'fight', vi: 'đấu - đánh nhau' }
  },
  {
    number: 192,
    char: '鬯',
    strokes: 10,
    name: 'chou',
    meaning: { en: 'sacrificial wine', vi: 'sưởng - rượu tế' }
  },
  {
    number: 193,
    char: '鬲',
    strokes: 10,
    name: 'kanae',
    meaning: { en: 'cauldron', vi: 'cách - cái vạc' }
  },
  {
    number: 194,
    char: '鬼',
    strokes: 10,
    name: 'oni',
    meaning: { en: 'ghost, demon', vi: 'quỷ - ma quỷ' }
  },
  { number: 195, char: '魚', strokes: 11, name: 'uo', meaning: { en: 'fish', vi: 'ngư - cá' } },
  {
    number: 196,
    char: '鳥',
    strokes: 11,
    name: 'tori',
    meaning: { en: 'bird', vi: 'điểu - chim' }
  },
  { number: 197, char: '鹵', strokes: 11, name: 'ro', meaning: { en: 'salt', vi: 'lỗ - đất mặn' } },
  {
    number: 198,
    char: '鹿',
    strokes: 11,
    name: 'shika',
    meaning: { en: 'deer', vi: 'lộc - con hươu' }
  },
  {
    number: 199,
    char: '麥',
    variants: ['麦'],
    strokes: 11,
    name: 'mugi',
    meaning: { en: 'wheat', vi: 'mạch - lúa mì' }
  },
  {
    number: 200,
    char: '麻',
    strokes: 11,
    name: 'asa',
    meaning: { en: 'hemp', vi: 'ma - cây gai' }
  },
  {
    number: 201,
    char: '黃',
    variants: ['黄'],
    strokes: 12,
    name: 'ki',
    meaning: { en: 'yellow', vi: 'hoàng - vàng' }
  },
  {
    number: 202,
    char: '黍',
    strokes: 12,
    name: 'kibi',
    meaning: { en: 'millet', vi: 'thử - lúa nếp' }
  },
  {
    number: 203,
    char: '黑',
    variants: ['黒'],
    strokes: 12,
    name: 'kuro',
    meaning: { en: 'black', vi: 'hắc - đen' }
  },
  {
    number: 204,
    char: '黹',
    strokes: 12,
    name: 'nuu',
    meaning: { en: 'embroidery', vi: 'chỉ - may vá' }
  },
  {
    number: 205,
    char: '黽',
    strokes: 13,
    name: 'kaeru',
    meaning: { en: 'frog', vi: 'mãnh - con ếch' }
  },
  {
    number: 206,
    char: '鼎',
    strokes: 13,
    name: 'kanae',
    meaning: { en: 'tripod', vi: 'đỉnh - cái đỉnh' }
  },
  {
    number: 207,
    char: '鼓',
    strokes: 13,
    name: 'tsuzumi',
    meaning: { en: 'drum', vi: 'cổ - cái trống' }
  },
  {
    number: 208,
    char: '鼠',
    strokes: 13,
    name: 'nezumi',
    meaning: { en: 'rat', vi: 'thử - con chuột' }
  },
  { number: 209, char: '鼻', strokes: 14, name: 'hana', meaning: { en: 'nose', vi: 'tỵ - mũi' } },
  {
    number: 210,
    char: '齊',
    variants: ['斉'],
    strokes: 14,
    name: 'sei',
    meaning: { en: 'even', vi: 'tề - đều nhau' }
  },
  {
    number: 211,
    char: '齒',
    variants: ['歯'],
    strokes: 15,
    name: 'ha',
    meaning: { en: 'tooth', vi: 'xỉ - răng' }
  },
  {
    number: 212,
    char: '龍',
    variants: ['竜'],
    strokes: 16,
    name: 'ryuu',
    meaning: { en: 'dragon', vi: 'long - rồng' }
  },
  {
    number: 213,
    char: '龜',
    variants: ['亀'],
    strokes: 16,
    name: 'kame',
    meaning: { en: 'turtle', vi: 'quy - con rùa' }
  },
  { number: 214, char: '龠', strokes: 17, name: 'yaku', meaning: { en: 'flute', vi: 'dược - sáo' } }
];
