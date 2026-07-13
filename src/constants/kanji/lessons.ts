import { withSequentialNumbers, type KanjiLesson } from './types.ts';

/**
 * Grade 1 Jōyō kanji (80 characters), learned 10 per lesson. Lesson 1 covers
 * the numbers 一 through 十. Author each lesson by hand; keep 10 kanji per lesson
 * and add new lessons in order.
 */
export const grade1Lessons: KanjiLesson[] = withSequentialNumbers([
  {
    title: {
      en: 'Numbers 1-10',
      vi: 'Số đếm 1-10'
    },
    kanji: [
      {
        char: '一',
        meaning: { en: 'one', vi: 'nhất - một' },
        onyomi: ['イチ', 'イツ'],
        kunyomi: ['ひと', 'ひと.つ'],
        components: ['一'],
        mnemonic: {
          en: 'Just a single horizontal stroke, drawn once to stand for the number one.',
          vi: 'Chỉ một vạch ngang duy nhất, tượng trưng cho số một.'
        },
        examples: [
          {
            parts: [
              { text: '一', reading: 'ひと' },
              { text: 'つ', reading: 'つ' }
            ],
            meaning: {
              en: 'one item (counter for objects)',
              vi: 'một cái (lượng từ đếm đồ vật)'
            }
          },
          {
            parts: [
              { text: '一', reading: 'いち' },
              { text: '月', reading: 'がつ' }
            ],
            meaning: { en: 'January', vi: 'tháng Một' }
          },
          {
            parts: [{ text: '一人', reading: 'ひとり' }],
            meaning: { en: 'one person', vi: 'một người' }
          }
        ]
      },
      {
        char: '二',
        meaning: { en: 'two', vi: 'nhị - hai' },
        onyomi: ['ニ'],
        kunyomi: ['ふた', 'ふた.つ'],
        components: ['一', '一'],
        mnemonic: {
          en: 'Two horizontal strokes stacked up, one for each unit of two.',
          vi: 'Hai vạch ngang xếp chồng lên nhau, mỗi vạch là một đơn vị của số hai.'
        },
        examples: [
          {
            parts: [
              { text: '二', reading: 'ふた' },
              { text: 'つ', reading: 'つ' }
            ],
            meaning: {
              en: 'two items (counter for objects)',
              vi: 'hai cái (lượng từ đếm đồ vật)'
            }
          },
          {
            parts: [
              { text: '二', reading: 'に' },
              { text: '月', reading: 'がつ' }
            ],
            meaning: { en: 'February', vi: 'tháng Hai' }
          },
          {
            parts: [{ text: '二人', reading: 'ふたり' }],
            meaning: { en: 'two people', vi: 'hai người' }
          }
        ]
      },
      {
        char: '三',
        meaning: { en: 'three', vi: 'tam - ba' },
        onyomi: ['サン'],
        kunyomi: ['み', 'み.つ', 'みっ.つ'],
        components: ['一', '一', '一'],
        mnemonic: {
          en: 'Three horizontal strokes stacked up, counting out the number three.',
          vi: 'Ba vạch ngang xếp chồng lên nhau, đếm thành số ba.'
        },
        examples: [
          {
            parts: [
              { text: '三', reading: 'みっ' },
              { text: 'つ', reading: 'つ' }
            ],
            meaning: {
              en: 'three items (counter for objects)',
              vi: 'ba cái (lượng từ đếm đồ vật)'
            }
          },
          {
            parts: [
              { text: '三', reading: 'さん' },
              { text: '月', reading: 'がつ' }
            ],
            meaning: { en: 'March', vi: 'tháng Ba' }
          },
          {
            parts: [
              { text: '三', reading: 'さん' },
              { text: '人', reading: 'にん' }
            ],
            meaning: { en: 'three people', vi: 'ba người' }
          }
        ]
      },
      {
        char: '四',
        meaning: { en: 'four', vi: 'tứ - bốn' },
        onyomi: ['シ'],
        kunyomi: ['よ', 'よ.つ', 'よっ.つ', 'よん'],
        components: ['囗', '儿'],
        note: {
          en: 'When counting, 四 is usually read よん, not し (which sounds like 死 "death") - but fixed words keep し, e.g. 四月 (しがつ).',
          vi: 'Khi đếm, 四 thường đọc よん chứ không đọc し (nghe giống 死 "chết") - nhưng từ cố định vẫn dùng し, vd 四月 (しがつ).'
        },
        examples: [
          {
            parts: [
              { text: '四', reading: 'よっ' },
              { text: 'つ', reading: 'つ' }
            ],
            meaning: {
              en: 'four items (counter for objects)',
              vi: 'bốn cái (lượng từ đếm đồ vật)'
            }
          },
          {
            parts: [
              { text: '四', reading: 'し' },
              { text: '月', reading: 'がつ' }
            ],
            meaning: { en: 'April', vi: 'tháng Tư' }
          },
          {
            parts: [
              { text: '四', reading: 'よ' },
              { text: '人', reading: 'にん' }
            ],
            meaning: { en: 'four people', vi: 'bốn người' }
          }
        ]
      },
      {
        char: '五',
        meaning: { en: 'five', vi: 'ngũ - năm' },
        onyomi: ['ゴ'],
        kunyomi: ['いつ', 'いつ.つ'],
        components: ['一', '一'],
        examples: [
          {
            parts: [
              { text: '五', reading: 'いつ' },
              { text: 'つ', reading: 'つ' }
            ],
            meaning: {
              en: 'five items (counter for objects)',
              vi: 'năm cái (lượng từ đếm đồ vật)'
            }
          },
          {
            parts: [
              { text: '五', reading: 'ご' },
              { text: '月', reading: 'がつ' }
            ],
            meaning: { en: 'May', vi: 'tháng Năm' }
          },
          {
            parts: [
              { text: '五', reading: 'ご' },
              { text: '人', reading: 'にん' }
            ],
            meaning: { en: 'five people', vi: 'năm người' }
          }
        ]
      },
      {
        char: '六',
        meaning: { en: 'six', vi: 'lục - sáu' },
        onyomi: ['ロク'],
        kunyomi: ['む', 'む.つ', 'むっ.つ', 'むい'],
        components: ['亠', '八'],
        examples: [
          {
            parts: [
              { text: '六', reading: 'むっ' },
              { text: 'つ', reading: 'つ' }
            ],
            meaning: {
              en: 'six items (counter for objects)',
              vi: 'sáu cái (lượng từ đếm đồ vật)'
            }
          },
          {
            parts: [
              { text: '六', reading: 'ろく' },
              { text: '月', reading: 'がつ' }
            ],
            meaning: { en: 'June', vi: 'tháng Sáu' }
          }
        ]
      },
      {
        char: '七',
        meaning: { en: 'seven', vi: 'thất - bảy' },
        onyomi: ['シチ'],
        kunyomi: ['なな', 'なな.つ', 'なの'],
        components: ['一', '乚'],
        note: {
          en: "Often read なな when counting to avoid confusion with 一 (いち), though the on'yomi is しち (七月 = しちがつ).",
          vi: 'Khi đếm thường đọc なな cho khỏi nhầm với 一 (いち), dù âm ON là しち (七月 = しちがつ).'
        },
        examples: [
          {
            parts: [
              { text: '七', reading: 'なな' },
              { text: 'つ', reading: 'つ' }
            ],
            meaning: {
              en: 'seven items (counter for objects)',
              vi: 'bảy cái (lượng từ đếm đồ vật)'
            }
          },
          {
            parts: [
              { text: '七', reading: 'しち' },
              { text: '月', reading: 'がつ' }
            ],
            meaning: { en: 'July', vi: 'tháng Bảy' }
          }
        ]
      },
      {
        char: '八',
        meaning: { en: 'eight', vi: 'bát - tám' },
        onyomi: ['ハチ'],
        kunyomi: ['や', 'や.つ', 'やっ.つ', 'よう'],
        components: ['八'],
        examples: [
          {
            parts: [
              { text: '八', reading: 'やっ' },
              { text: 'つ', reading: 'つ' }
            ],
            meaning: {
              en: 'eight items (counter for objects)',
              vi: 'tám cái (lượng từ đếm đồ vật)'
            }
          },
          {
            parts: [
              { text: '八', reading: 'はち' },
              { text: '月', reading: 'がつ' }
            ],
            meaning: { en: 'August', vi: 'tháng Tám' }
          }
        ]
      },
      {
        char: '九',
        meaning: { en: 'nine', vi: 'cửu - chín' },
        onyomi: ['キュウ', 'ク'],
        kunyomi: ['ここの', 'ここの.つ'],
        components: ['丿', '乚'],
        note: {
          en: 'Read きゅう or く; the month uses く (九月 = くがつ).',
          vi: 'Đọc きゅう hoặc く; tên tháng dùng く (九月 = くがつ).'
        },
        examples: [
          {
            parts: [
              { text: '九', reading: 'ここの' },
              { text: 'つ', reading: 'つ' }
            ],
            meaning: {
              en: 'nine items (counter for objects)',
              vi: 'chín cái (lượng từ đếm đồ vật)'
            }
          },
          {
            parts: [
              { text: '九', reading: 'く' },
              { text: '月', reading: 'がつ' }
            ],
            meaning: { en: 'September', vi: 'tháng Chín' }
          }
        ]
      },
      {
        char: '十',
        meaning: { en: 'ten', vi: 'thập - mười' },
        onyomi: ['ジュウ', 'ジッ'],
        kunyomi: ['とお', 'と'],
        components: ['一', '丨'],
        mnemonic: {
          en: 'A horizontal 一 crossed by a vertical 丨 makes a plus sign, the shape used for ten.',
          vi: 'Vạch ngang 一 cắt nét sổ dọc 丨 tạo thành hình dấu cộng, chính là số mười.'
        },
        examples: [
          {
            parts: [{ text: '十', reading: 'じゅう' }],
            meaning: { en: 'ten', vi: 'mười' }
          },
          {
            parts: [
              { text: '十', reading: 'じゅう' },
              { text: '月', reading: 'がつ' }
            ],
            meaning: { en: 'October', vi: 'tháng Mười' }
          },
          {
            parts: [{ text: '二十歳', reading: 'はたち' }],
            meaning: { en: 'twenty years old', vi: '20 tuổi' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Nature & people',
      vi: 'Thiên nhiên & con người'
    },
    kanji: [
      {
        char: '人',
        meaning: { en: 'person', vi: 'nhân - người' },
        onyomi: ['ジン', 'ニン'],
        kunyomi: ['ひと'],
        components: ['人'],
        mnemonic: {
          en: 'A simple figure standing on two legs pictures a person.',
          vi: 'Hình người đơn giản đứng trên hai chân, chính là con người.'
        },
        examples: [
          {
            parts: [{ text: '人', reading: 'ひと' }],
            meaning: { en: 'person', vi: 'người' }
          },
          {
            parts: [{ text: '大人', reading: 'おとな' }],
            meaning: { en: 'adult', vi: 'người lớn' }
          },
          {
            parts: [
              { text: '三', reading: 'さん' },
              { text: '人', reading: 'にん' }
            ],
            meaning: { en: 'three people', vi: 'ba người' }
          }
        ]
      },
      {
        char: '大',
        meaning: { en: 'big', vi: 'đại - to, lớn' },
        onyomi: ['ダイ', 'タイ'],
        kunyomi: ['おお', 'おお.きい'],
        components: ['大'],
        mnemonic: {
          en: 'A person 人 stretching both arms out as wide as they can looks big.',
          vi: 'Người 人 dang rộng hai tay hết cỡ trông thật to lớn.'
        },
        examples: [
          {
            parts: [
              { text: '大', reading: 'おお' },
              { text: 'きい', reading: 'きい' }
            ],
            meaning: { en: 'big, large', vi: 'to, lớn' }
          },
          {
            parts: [{ text: '大人', reading: 'おとな' }],
            meaning: { en: 'adult', vi: 'người lớn' }
          },
          {
            parts: [
              { text: '大', reading: 'だい' },
              { text: '学', reading: 'がく' }
            ],
            meaning: { en: 'university', vi: 'trường đại học' }
          }
        ]
      },
      {
        char: '小',
        meaning: { en: 'small, little', vi: 'tiểu - nhỏ, bé' },
        onyomi: ['ショウ'],
        kunyomi: ['ちい.さい', 'こ', 'お'],
        components: ['小'],
        mnemonic: {
          en: 'A center line flanked by two tiny specks: something small.',
          vi: 'Một nét ở giữa với hai chấm nhỏ xíu hai bên: thứ gì đó nhỏ bé.'
        },
        examples: [
          {
            parts: [
              { text: '小', reading: 'ちい' },
              { text: 'さい', reading: 'さい' }
            ],
            meaning: { en: 'small, little', vi: 'nhỏ, bé' }
          },
          {
            parts: [
              { text: '小', reading: 'お' },
              { text: '川', reading: 'がわ' }
            ],
            meaning: { en: 'stream', vi: 'dòng suối nhỏ' }
          }
        ]
      },
      {
        char: '山',
        meaning: { en: 'mountain', vi: 'sơn - núi' },
        onyomi: ['サン'],
        kunyomi: ['やま'],
        components: ['山'],
        mnemonic: {
          en: 'Three peaks rising up side by side form a mountain.',
          vi: 'Ba đỉnh nhô lên cạnh nhau tạo thành ngọn núi.'
        },
        examples: [
          {
            parts: [{ text: '山', reading: 'やま' }],
            meaning: { en: 'mountain', vi: 'núi' }
          },
          {
            parts: [
              { text: '火', reading: 'か' },
              { text: '山', reading: 'ざん' }
            ],
            meaning: { en: 'volcano', vi: 'núi lửa' }
          },
          {
            parts: [
              { text: '富', reading: 'ふ' },
              { text: '士', reading: 'じ' },
              { text: '山', reading: 'さん' }
            ],
            meaning: { en: 'Mt. Fuji', vi: 'núi Phú Sĩ' }
          }
        ]
      },
      {
        char: '川',
        meaning: { en: 'river', vi: 'xuyên - sông' },
        onyomi: ['セン'],
        kunyomi: ['かわ'],
        components: ['川'],
        mnemonic: {
          en: 'Three lines of water flowing downstream make a river.',
          vi: 'Ba dòng nước chảy xuôi tạo thành con sông.'
        },
        examples: [
          {
            parts: [{ text: '川', reading: 'かわ' }],
            meaning: { en: 'river', vi: 'sông' }
          },
          {
            parts: [
              { text: '小', reading: 'お' },
              { text: '川', reading: 'がわ' }
            ],
            meaning: { en: 'stream', vi: 'dòng suối nhỏ' }
          }
        ]
      },
      {
        char: '木',
        meaning: { en: 'tree, wood', vi: 'mộc - cây, gỗ' },
        onyomi: ['モク', 'ボク'],
        kunyomi: ['き', 'こ'],
        components: ['木'],
        mnemonic: {
          en: 'A trunk with branches spreading up and roots reaching down: a tree.',
          vi: 'Thân cây với cành vươn lên và rễ tỏa xuống: một cái cây.'
        },
        examples: [
          {
            parts: [{ text: '木', reading: 'き' }],
            meaning: { en: 'tree', vi: 'cây' }
          },
          {
            parts: [
              { text: '大', reading: 'たい' },
              { text: '木', reading: 'ぼく' }
            ],
            meaning: { en: 'large tree', vi: 'cây to' }
          },
          {
            parts: [
              { text: '木', reading: 'もく' },
              { text: '曜', reading: 'よう' },
              { text: '日', reading: 'び' }
            ],
            meaning: { en: 'Thursday', vi: 'thứ Năm' }
          }
        ]
      },
      {
        char: '火',
        meaning: { en: 'fire', vi: 'hỏa - lửa' },
        onyomi: ['カ'],
        kunyomi: ['ひ', 'ほ'],
        components: ['火'],
        mnemonic: {
          en: 'Flames leaping up with a spark flying off each side.',
          vi: 'Ngọn lửa bốc lên với tia lửa bắn ra hai bên.'
        },
        examples: [
          {
            parts: [{ text: '火', reading: 'ひ' }],
            meaning: { en: 'fire', vi: 'lửa' }
          },
          {
            parts: [
              { text: '花', reading: 'はな' },
              { text: '火', reading: 'び' }
            ],
            meaning: { en: 'fireworks', vi: 'pháo hoa' }
          },
          {
            parts: [
              { text: '火', reading: 'か' },
              { text: '山', reading: 'ざん' }
            ],
            meaning: { en: 'volcano', vi: 'núi lửa' }
          }
        ]
      },
      {
        char: '水',
        meaning: { en: 'water', vi: 'thủy - nước' },
        onyomi: ['スイ'],
        kunyomi: ['みず'],
        components: ['水'],
        mnemonic: {
          en: 'Streams trickling out from a central current picture flowing water.',
          vi: 'Những dòng nước tỏa ra từ mạch giữa, vẽ nên dòng nước.'
        },
        examples: [
          {
            parts: [{ text: '水', reading: 'みず' }],
            meaning: { en: 'water', vi: 'nước' }
          },
          {
            parts: [
              { text: '水', reading: 'すい' },
              { text: '曜', reading: 'よう' },
              { text: '日', reading: 'び' }
            ],
            meaning: { en: 'Wednesday', vi: 'thứ Tư' }
          }
        ]
      },
      {
        char: '日',
        meaning: { en: 'sun, day', vi: 'nhật - mặt trời, ngày' },
        onyomi: ['ニチ', 'ジツ'],
        kunyomi: ['ひ', 'か'],
        components: ['日'],
        mnemonic: {
          en: 'A drawing of the sun: a round frame with a mark inside.',
          vi: 'Hình vẽ mặt trời: cái khung tròn có vạch bên trong.'
        },
        examples: [
          {
            parts: [
              { text: '日', reading: 'に' },
              { text: '本', reading: 'ほん' }
            ],
            meaning: { en: 'Japan', vi: 'Nhật Bản' }
          },
          {
            parts: [
              { text: '日', reading: 'にち' },
              { text: '曜', reading: 'よう' },
              { text: '日', reading: 'び' }
            ],
            meaning: { en: 'Sunday', vi: 'Chủ Nhật' }
          },
          {
            parts: [
              { text: '毎', reading: 'まい' },
              { text: '日', reading: 'にち' }
            ],
            meaning: { en: 'every day', vi: 'mỗi ngày' }
          }
        ]
      },
      {
        char: '月',
        meaning: { en: 'moon, month', vi: 'nguyệt - mặt trăng, tháng' },
        onyomi: ['ゲツ', 'ガツ'],
        kunyomi: ['つき'],
        components: ['月'],
        mnemonic: {
          en: 'The shape of a crescent moon, which also gives us the word for month.',
          vi: 'Hình vầng trăng lưỡi liềm, cũng dùng để chỉ tháng.'
        },
        examples: [
          {
            parts: [{ text: '月', reading: 'つき' }],
            meaning: { en: 'moon', vi: 'mặt trăng' }
          },
          {
            parts: [
              { text: '月', reading: 'げつ' },
              { text: '曜', reading: 'よう' },
              { text: '日', reading: 'び' }
            ],
            meaning: { en: 'Monday', vi: 'thứ Hai' }
          },
          {
            parts: [
              { text: '一', reading: 'いち' },
              { text: '月', reading: 'がつ' }
            ],
            meaning: { en: 'January', vi: 'tháng Một' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Body & people',
      vi: 'Cơ thể & con người'
    },
    kanji: [
      {
        char: '目',
        meaning: { en: 'eye', vi: 'mục - mắt' },
        onyomi: ['モク', 'ボク'],
        kunyomi: ['め', 'ま'],
        components: ['目'],
        mnemonic: {
          en: 'An eye drawn standing on end, pupil and all.',
          vi: 'Con mắt được vẽ dựng đứng lên, có cả con ngươi.'
        },
        examples: [
          {
            parts: [{ text: '目', reading: 'め' }],
            meaning: { en: 'eye', vi: 'mắt' }
          },
          {
            parts: [
              { text: '一', reading: 'ひと' },
              { text: '目', reading: 'め' }
            ],
            meaning: { en: 'a glance', vi: 'một cái liếc nhìn' }
          },
          {
            parts: [
              { text: '目', reading: 'め' },
              { text: '玉', reading: 'だま' }
            ],
            meaning: { en: 'eyeball', vi: 'nhãn cầu' }
          }
        ]
      },
      {
        char: '口',
        meaning: { en: 'mouth', vi: 'khẩu - miệng' },
        onyomi: ['コウ', 'ク'],
        kunyomi: ['くち'],
        components: ['口'],
        mnemonic: {
          en: 'A simple square drawn to look like a wide open mouth.',
          vi: 'Hình vuông đơn giản vẽ như cái miệng đang há to.'
        },
        examples: [
          {
            parts: [{ text: '口', reading: 'くち' }],
            meaning: { en: 'mouth', vi: 'miệng' }
          },
          {
            parts: [
              { text: '人', reading: 'じん' },
              { text: '口', reading: 'こう' }
            ],
            meaning: { en: 'population', vi: 'dân số' }
          },
          {
            parts: [
              { text: '入', reading: 'いり' },
              { text: '口', reading: 'ぐち' }
            ],
            meaning: { en: 'entrance', vi: 'lối vào' }
          }
        ]
      },
      {
        char: '耳',
        meaning: { en: 'ear', vi: 'nhĩ - tai' },
        onyomi: ['ジ'],
        kunyomi: ['みみ'],
        components: ['耳'],
        mnemonic: {
          en: 'A drawing of an ear, shaped just like the real thing.',
          vi: 'Hình vẽ cái tai, đúng như tai thật.'
        },
        examples: [
          {
            parts: [{ text: '耳', reading: 'みみ' }],
            meaning: { en: 'ear', vi: 'tai' }
          },
          {
            parts: [
              { text: '耳', reading: 'みみ' },
              { text: 'たぶ', reading: 'たぶ' }
            ],
            meaning: { en: 'earlobe', vi: 'dái tai' }
          }
        ]
      },
      {
        char: '手',
        meaning: { en: 'hand', vi: 'thủ - tay' },
        onyomi: ['シュ'],
        kunyomi: ['て', 'た'],
        components: ['手'],
        mnemonic: {
          en: 'A hand with its fingers and wrist spread out.',
          vi: 'Bàn tay với các ngón và cổ tay xòe ra.'
        },
        examples: [
          {
            parts: [{ text: '手', reading: 'て' }],
            meaning: { en: 'hand', vi: 'tay' }
          },
          {
            parts: [{ text: '上手', reading: 'じょうず' }],
            meaning: { en: 'skillful, good at', vi: 'giỏi, khéo' }
          },
          {
            parts: [
              { text: '手', reading: 'て' },
              { text: '紙', reading: 'がみ' }
            ],
            meaning: { en: 'letter', vi: 'lá thư' }
          }
        ]
      },
      {
        char: '足',
        meaning: { en: 'foot, leg; be enough', vi: 'túc - chân; đủ' },
        onyomi: ['ソク'],
        kunyomi: ['あし', 'た.りる', 'た.す'],
        components: ['足'],
        mnemonic: {
          en: 'A knee (口) sitting on top of a foot below: the whole leg.',
          vi: 'Đầu gối (口) nằm trên bàn chân phía dưới: cả cái chân.'
        },
        examples: [
          {
            parts: [{ text: '足', reading: 'あし' }],
            meaning: { en: 'foot, leg', vi: 'chân' }
          },
          {
            parts: [
              { text: '足', reading: 'た' },
              { text: 'りる', reading: 'りる' }
            ],
            meaning: { en: 'to be enough', vi: 'đủ' }
          },
          {
            parts: [
              { text: '一', reading: 'いっ' },
              { text: '足', reading: 'そく' }
            ],
            meaning: { en: 'a pair (of footwear)', vi: 'một đôi (giày dép)' }
          }
        ]
      },
      {
        char: '力',
        meaning: { en: 'power, strength', vi: 'lực - sức mạnh' },
        onyomi: ['リキ', 'リョク'],
        kunyomi: ['ちから'],
        components: ['力'],
        mnemonic: {
          en: 'A flexed arm bulging with muscle shows raw power.',
          vi: 'Cánh tay gồng lên cuồn cuộn cơ bắp, thể hiện sức mạnh.'
        },
        examples: [
          {
            parts: [{ text: '力', reading: 'ちから' }],
            meaning: { en: 'power, strength', vi: 'sức mạnh' }
          },
          {
            parts: [
              { text: '水', reading: 'すい' },
              { text: '力', reading: 'りょく' }
            ],
            meaning: { en: 'water power', vi: 'thủy lực' }
          },
          {
            parts: [
              { text: '力', reading: 'りき' },
              { text: '士', reading: 'し' }
            ],
            meaning: { en: 'sumo wrestler', vi: 'võ sĩ sumo' }
          }
        ]
      },
      {
        char: '男',
        meaning: { en: 'man, male', vi: 'nam - đàn ông, nam giới' },
        onyomi: ['ダン', 'ナン'],
        kunyomi: ['おとこ'],
        components: ['田', '力'],
        mnemonic: {
          en: 'The one who brings power 力 to work the rice field 田 is the man.',
          vi: 'Người mang sức mạnh 力 ra làm ruộng đồng 田 chính là đàn ông.'
        },
        examples: [
          {
            parts: [{ text: '男', reading: 'おとこ' }],
            meaning: { en: 'man', vi: 'đàn ông' }
          },
          {
            parts: [
              { text: '男', reading: 'だん' },
              { text: '子', reading: 'し' }
            ],
            meaning: { en: 'boy, male', vi: 'nam, con trai' }
          },
          {
            parts: [
              { text: '男', reading: 'おとこ' },
              { text: 'の', reading: 'の' },
              { text: '子', reading: 'こ' }
            ],
            meaning: { en: 'boy', vi: 'con trai' }
          }
        ]
      },
      {
        char: '女',
        meaning: { en: 'woman, female', vi: 'nữ - phụ nữ' },
        onyomi: ['ジョ', 'ニョ'],
        kunyomi: ['おんな', 'め'],
        components: ['女'],
        mnemonic: {
          en: 'A figure of a woman kneeling gracefully.',
          vi: 'Hình người phụ nữ đang quỳ duyên dáng.'
        },
        examples: [
          {
            parts: [{ text: '女', reading: 'おんな' }],
            meaning: { en: 'woman', vi: 'phụ nữ' }
          },
          {
            parts: [
              { text: '女', reading: 'じょ' },
              { text: '子', reading: 'し' }
            ],
            meaning: { en: 'girl, female', vi: 'nữ, con gái' }
          },
          {
            parts: [
              { text: '女', reading: 'おんな' },
              { text: 'の', reading: 'の' },
              { text: '子', reading: 'こ' }
            ],
            meaning: { en: 'girl', vi: 'con gái' }
          }
        ]
      },
      {
        char: '子',
        meaning: { en: 'child', vi: 'tử - con, trẻ con' },
        onyomi: ['シ', 'ス'],
        kunyomi: ['こ'],
        components: ['子'],
        mnemonic: {
          en: 'A baby swaddled up with its little arms reaching out.',
          vi: 'Em bé được quấn tã, giơ hai cánh tay nhỏ ra.'
        },
        examples: [
          {
            parts: [{ text: '子', reading: 'こ' }],
            meaning: { en: 'child', vi: 'con, đứa trẻ' }
          },
          {
            parts: [
              { text: '子', reading: 'こ' },
              { text: 'ども', reading: 'ども' }
            ],
            meaning: { en: 'child', vi: 'đứa trẻ' }
          },
          {
            parts: [
              { text: '男', reading: 'だん' },
              { text: '子', reading: 'し' }
            ],
            meaning: { en: 'boy', vi: 'nam, con trai' }
          }
        ]
      },
      {
        char: '名',
        meaning: { en: 'name; fame, reputation', vi: 'danh - tên, tên gọi; danh tiếng' },
        onyomi: ['メイ', 'ミョウ'],
        kunyomi: ['な'],
        components: ['夕', '口'],
        mnemonic: {
          en: 'In the dark evening 夕 you call out with your mouth 口 to say who you are: your name.',
          vi: 'Trời tối 夕 phải cất miệng 口 gọi to để cho biết mình là ai: đó là cái tên.'
        },
        examples: [
          {
            parts: [
              { text: '名', reading: 'な' },
              { text: '前', reading: 'まえ' }
            ],
            meaning: { en: 'name', vi: 'tên' }
          },
          {
            parts: [
              { text: '有', reading: 'ゆう' },
              { text: '名', reading: 'めい' }
            ],
            meaning: { en: 'famous', vi: 'nổi tiếng' }
          },
          {
            parts: [
              { text: '名', reading: 'みょう' },
              { text: '字', reading: 'じ' }
            ],
            meaning: { en: 'surname', vi: 'họ' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Position & ground',
      vi: 'Vị trí & mặt đất'
    },
    kanji: [
      {
        char: '上',
        meaning: { en: 'up, above', vi: 'thượng - trên, lên' },
        onyomi: ['ジョウ'],
        kunyomi: ['うえ', 'あ.げる', 'あ.がる', 'のぼ.る'],
        components: ['一'],
        mnemonic: {
          en: 'A small mark placed above the base line 一, pointing upward.',
          vi: 'Một dấu đặt phía trên vạch nền 一, chỉ hướng lên trên.'
        },
        examples: [
          {
            parts: [{ text: '上', reading: 'うえ' }],
            meaning: { en: 'above, on top', vi: 'phía trên' }
          },
          {
            parts: [{ text: '上手', reading: 'じょうず' }],
            meaning: { en: 'skillful, good at', vi: 'giỏi, khéo' }
          },
          {
            parts: [
              { text: '川', reading: 'かわ' },
              { text: '上', reading: 'かみ' }
            ],
            meaning: { en: 'upstream', vi: 'thượng nguồn' }
          }
        ]
      },
      {
        char: '下',
        meaning: { en: 'down, below', vi: 'hạ - dưới, xuống' },
        onyomi: ['カ', 'ゲ'],
        kunyomi: ['した', 'さ.げる', 'さ.がる', 'くだ.る', 'お.りる'],
        components: ['一'],
        mnemonic: {
          en: 'A small mark placed below the base line 一, pointing downward.',
          vi: 'Một dấu đặt phía dưới vạch nền 一, chỉ hướng xuống dưới.'
        },
        examples: [
          {
            parts: [{ text: '下', reading: 'した' }],
            meaning: { en: 'below, under', vi: 'phía dưới' }
          },
          {
            parts: [
              { text: '地', reading: 'ち' },
              { text: '下', reading: 'か' }
            ],
            meaning: { en: 'underground', vi: 'dưới lòng đất' }
          },
          {
            parts: [
              { text: '下', reading: 'げ' },
              { text: '山', reading: 'ざん' }
            ],
            meaning: { en: 'descending a mountain', vi: 'xuống núi' }
          }
        ]
      },
      {
        char: '中',
        meaning: { en: 'middle, inside', vi: 'trung - giữa, trong' },
        onyomi: ['チュウ'],
        kunyomi: ['なか'],
        components: ['口', '丨'],
        mnemonic: {
          en: 'A vertical line 丨 pierces right through the middle of a box 口.',
          vi: 'Nét dọc 丨 xuyên thẳng qua giữa cái khung 口.'
        },
        examples: [
          {
            parts: [{ text: '中', reading: 'なか' }],
            meaning: { en: 'inside, middle', vi: 'bên trong, ở giữa' }
          },
          {
            parts: [
              { text: '中', reading: 'ちゅう' },
              { text: '国', reading: 'ごく' }
            ],
            meaning: { en: 'China', vi: 'Trung Quốc' }
          },
          {
            parts: [
              { text: '中', reading: 'ちゅう' },
              { text: '学', reading: 'がく' }
            ],
            meaning: { en: 'middle school', vi: 'trường cấp hai' }
          }
        ]
      },
      {
        char: '左',
        meaning: { en: 'left', vi: 'tả - trái' },
        onyomi: ['サ'],
        kunyomi: ['ひだり'],
        components: ['工'],
        mnemonic: {
          en: 'A hand busy working with a tool 工 on the left side.',
          vi: 'Bàn tay đang làm việc với dụng cụ 工 ở bên trái.'
        },
        examples: [
          {
            parts: [{ text: '左', reading: 'ひだり' }],
            meaning: { en: 'left', vi: 'bên trái' }
          },
          {
            parts: [
              { text: '左', reading: 'ひだり' },
              { text: '手', reading: 'て' }
            ],
            meaning: { en: 'left hand', vi: 'tay trái' }
          }
        ]
      },
      {
        char: '右',
        meaning: { en: 'right', vi: 'hữu - phải' },
        onyomi: ['ウ', 'ユウ'],
        kunyomi: ['みぎ'],
        components: ['口'],
        mnemonic: {
          en: 'A hand raised to the mouth 口: the hand you eat with is the right one.',
          vi: 'Bàn tay đưa lên miệng 口: tay dùng để ăn chính là tay phải.'
        },
        examples: [
          {
            parts: [{ text: '右', reading: 'みぎ' }],
            meaning: { en: 'right', vi: 'bên phải' }
          },
          {
            parts: [
              { text: '右', reading: 'みぎ' },
              { text: '手', reading: 'て' }
            ],
            meaning: { en: 'right hand', vi: 'tay phải' }
          },
          {
            parts: [
              { text: '左', reading: 'さ' },
              { text: '右', reading: 'ゆう' }
            ],
            meaning: { en: 'left and right', vi: 'trái phải' }
          }
        ]
      },
      {
        char: '天',
        meaning: { en: 'sky, heaven', vi: 'thiên - bầu trời' },
        onyomi: ['テン'],
        kunyomi: ['あま', 'あめ'],
        components: ['一', '大'],
        mnemonic: {
          en: 'A line 一 drawn above a big person 大 marks the sky over their head.',
          vi: 'Vạch 一 vẽ trên đầu người lớn 大, đánh dấu bầu trời phía trên.'
        },
        examples: [
          {
            parts: [{ text: '天', reading: 'てん' }],
            meaning: { en: 'heaven, sky', vi: 'bầu trời' }
          },
          {
            parts: [
              { text: '天', reading: 'てん' },
              { text: '気', reading: 'き' }
            ],
            meaning: { en: 'weather', vi: 'thời tiết' }
          }
        ]
      },
      {
        char: '空',
        meaning: { en: 'sky; empty', vi: 'không - bầu trời; trống' },
        onyomi: ['クウ'],
        kunyomi: ['そら', 'あ.く', 'から', 'あ.ける'],
        components: ['穴', '工'],
        mnemonic: {
          en: 'Peering out through a hole 穴 you see nothing but the empty sky.',
          vi: 'Nhìn qua cái lỗ 穴 chỉ thấy bầu trời trống không.'
        },
        examples: [
          {
            parts: [{ text: '空', reading: 'そら' }],
            meaning: { en: 'sky', vi: 'bầu trời' }
          },
          {
            parts: [
              { text: '空', reading: 'くう' },
              { text: '気', reading: 'き' }
            ],
            meaning: { en: 'air', vi: 'không khí' }
          },
          {
            parts: [
              { text: '青', reading: 'あお' },
              { text: '空', reading: 'ぞら' }
            ],
            meaning: { en: 'blue sky', vi: 'bầu trời xanh' }
          }
        ]
      },
      {
        char: '田',
        meaning: { en: 'rice field', vi: 'điền - ruộng' },
        onyomi: ['デン'],
        kunyomi: ['た'],
        components: ['田'],
        mnemonic: {
          en: 'A field neatly divided into plots, like a grid.',
          vi: 'Thửa ruộng chia gọn thành từng ô như một cái lưới.'
        },
        examples: [
          {
            parts: [{ text: '田', reading: 'た' }],
            meaning: { en: 'rice field', vi: 'ruộng' }
          },
          {
            parts: [
              { text: '田', reading: 'た' },
              { text: 'んぼ', reading: 'んぼ' }
            ],
            meaning: { en: 'rice paddy', vi: 'ruộng lúa' }
          },
          {
            parts: [
              { text: '水', reading: 'すい' },
              { text: '田', reading: 'でん' }
            ],
            meaning: { en: 'paddy field', vi: 'ruộng nước' }
          }
        ]
      },
      {
        char: '土',
        meaning: { en: 'earth, soil', vi: 'thổ - đất' },
        onyomi: ['ド', 'ト'],
        kunyomi: ['つち'],
        components: ['土'],
        mnemonic: {
          en: 'A mound of earth rising up from the ground.',
          vi: 'Một ụ đất nhô lên khỏi mặt đất.'
        },
        examples: [
          {
            parts: [{ text: '土', reading: 'つち' }],
            meaning: { en: 'soil, earth', vi: 'đất' }
          },
          {
            parts: [
              { text: '土', reading: 'ど' },
              { text: '曜', reading: 'よう' },
              { text: '日', reading: 'び' }
            ],
            meaning: { en: 'Saturday', vi: 'thứ Bảy' }
          },
          {
            parts: [
              { text: '土', reading: 'と' },
              { text: '地', reading: 'ち' }
            ],
            meaning: { en: 'land', vi: 'đất đai' }
          }
        ]
      },
      {
        char: '石',
        meaning: { en: 'stone', vi: 'thạch - đá' },
        onyomi: ['セキ', 'シャク', 'コク'],
        kunyomi: ['いし'],
        components: ['厂', '口'],
        mnemonic: {
          en: 'A rock 口 lying at the foot of a cliff 厂.',
          vi: 'Hòn đá 口 nằm dưới chân vách núi 厂.'
        },
        examples: [
          {
            parts: [{ text: '石', reading: 'いし' }],
            meaning: { en: 'stone', vi: 'đá' }
          },
          {
            parts: [
              { text: '石', reading: 'せき' },
              { text: '油', reading: 'ゆ' }
            ],
            meaning: { en: 'oil, petroleum', vi: 'dầu mỏ' }
          },
          {
            parts: [
              { text: '宝', reading: 'ほう' },
              { text: '石', reading: 'せき' }
            ],
            meaning: { en: 'jewel', vi: 'đá quý' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'School & study',
      vi: 'Trường học & học tập'
    },
    kanji: [
      {
        char: '学',
        meaning: { en: 'study, learning', vi: 'học - học tập' },
        onyomi: ['ガク'],
        kunyomi: ['まな.ぶ'],
        components: ['冖', '子'],
        mnemonic: {
          en: 'A child 子 sitting under a roof 冖 to study.',
          vi: 'Đứa trẻ 子 ngồi dưới mái 冖 để học hành.'
        },
        examples: [
          {
            parts: [
              { text: '学', reading: 'まな' },
              { text: 'ぶ', reading: 'ぶ' }
            ],
            meaning: { en: 'to learn, to study', vi: 'học' }
          },
          {
            parts: [
              { text: '学', reading: 'がっ' },
              { text: '校', reading: 'こう' }
            ],
            meaning: { en: 'school', vi: 'trường học' }
          },
          {
            parts: [
              { text: '学', reading: 'がく' },
              { text: '生', reading: 'せい' }
            ],
            meaning: { en: 'student', vi: 'học sinh, sinh viên' }
          }
        ]
      },
      {
        char: '校',
        meaning: { en: 'school', vi: 'hiệu - trường học' },
        onyomi: ['コウ'],
        kunyomi: [],
        components: ['木'],
        mnemonic: {
          en: 'A place full of trees 木 where students gather and mingle 交.',
          vi: 'Nơi có nhiều cây 木, học sinh tụ họp giao lưu 交.'
        },
        examples: [
          {
            parts: [
              { text: '学', reading: 'がっ' },
              { text: '校', reading: 'こう' }
            ],
            meaning: { en: 'school', vi: 'trường học' }
          },
          {
            parts: [
              { text: '校', reading: 'こう' },
              { text: '長', reading: 'ちょう' }
            ],
            meaning: { en: 'principal', vi: 'hiệu trưởng' }
          },
          {
            parts: [
              { text: '高', reading: 'こう' },
              { text: '校', reading: 'こう' }
            ],
            meaning: { en: 'high school', vi: 'trường cấp ba' }
          }
        ]
      },
      {
        char: '先',
        meaning: { en: 'before, ahead', vi: 'tiên - trước, phía trước' },
        onyomi: ['セン'],
        kunyomi: ['さき'],
        components: ['儿'],
        mnemonic: {
          en: 'A person on legs 儿 striding out ahead of everyone else.',
          vi: 'Người trên đôi chân 儿 sải bước vượt lên phía trước.'
        },
        examples: [
          {
            parts: [
              { text: '先', reading: 'せん' },
              { text: '生', reading: 'せい' }
            ],
            meaning: { en: 'teacher', vi: 'giáo viên' }
          },
          {
            parts: [
              { text: '先', reading: 'せん' },
              { text: '月', reading: 'げつ' }
            ],
            meaning: { en: 'last month', vi: 'tháng trước' }
          },
          {
            parts: [{ text: '先', reading: 'さき' }],
            meaning: { en: 'ahead, previous', vi: 'phía trước, trước' }
          }
        ]
      },
      {
        char: '生',
        meaning: { en: 'life, be born', vi: 'sinh - sống, sinh' },
        onyomi: ['セイ', 'ショウ'],
        kunyomi: ['い.きる', 'う.まれる', 'なま'],
        components: ['生'],
        mnemonic: {
          en: 'A young plant sprouting up out of the ground 一.',
          vi: 'Một cây non nhú lên khỏi mặt đất 一.'
        },
        examples: [
          {
            parts: [
              { text: '学', reading: 'がく' },
              { text: '生', reading: 'せい' }
            ],
            meaning: { en: 'student', vi: 'học sinh, sinh viên' }
          },
          {
            parts: [
              { text: '先', reading: 'せん' },
              { text: '生', reading: 'せい' }
            ],
            meaning: { en: 'teacher', vi: 'giáo viên' }
          },
          {
            parts: [
              { text: '生', reading: 'う' },
              { text: 'まれる', reading: 'まれる' }
            ],
            meaning: { en: 'to be born', vi: 'được sinh ra' }
          },
          {
            parts: [
              { text: '生', reading: 'い' },
              { text: 'きる', reading: 'きる' }
            ],
            meaning: { en: 'to live', vi: 'sống' }
          },
          {
            parts: [{ text: '生', reading: 'なま' }],
            meaning: { en: 'raw, uncooked', vi: 'sống, tươi (chưa nấu)' }
          }
        ]
      },
      {
        char: '年',
        meaning: { en: 'year', vi: 'niên - năm' },
        onyomi: ['ネン'],
        kunyomi: ['とし'],
        components: ['干'],
        mnemonic: {
          en: 'The rice harvest comes around once with each full turn of the seasons.',
          vi: 'Cứ mỗi vòng thời tiết trôi qua lại có một mùa lúa chín.'
        },
        examples: [
          {
            parts: [{ text: '年', reading: 'とし' }],
            meaning: { en: 'year, age', vi: 'năm, tuổi' }
          },
          {
            parts: [
              { text: '一', reading: 'いち' },
              { text: '年', reading: 'ねん' }
            ],
            meaning: { en: 'one year', vi: 'một năm' }
          },
          {
            parts: [{ text: '今年', reading: 'ことし' }],
            meaning: { en: 'this year', vi: 'năm nay' }
          }
        ]
      },
      {
        char: '文',
        meaning: { en: 'writing, sentence', vi: 'văn - chữ viết' },
        onyomi: ['ブン', 'モン'],
        kunyomi: ['ふみ'],
        components: ['文'],
        mnemonic: {
          en: 'A figure marked with a crossed pattern, like woven strokes of writing.',
          vi: 'Hình người có hoa văn đan chéo, như những nét chữ viết.'
        },
        examples: [
          {
            parts: [
              { text: '文', reading: 'も' },
              { text: '字', reading: 'じ' }
            ],
            meaning: { en: 'character, letter', vi: 'ký tự, chữ' }
          },
          {
            parts: [
              { text: '作', reading: 'さく' },
              { text: '文', reading: 'ぶん' }
            ],
            meaning: { en: 'composition, essay', vi: 'bài văn' }
          },
          {
            parts: [{ text: '文', reading: 'ぶん' }],
            meaning: { en: 'sentence', vi: 'câu văn' }
          }
        ]
      },
      {
        char: '字',
        meaning: { en: 'character, letter', vi: 'tự - chữ, ký tự' },
        onyomi: ['ジ'],
        kunyomi: ['あざ'],
        components: ['宀', '子'],
        mnemonic: {
          en: 'A child 子 sitting under a roof 宀 practicing how to write characters.',
          vi: 'Đứa trẻ 子 ngồi dưới mái nhà 宀 tập viết chữ.'
        },
        examples: [
          {
            parts: [{ text: '字', reading: 'じ' }],
            meaning: { en: 'character, letter', vi: 'chữ, ký tự' }
          },
          {
            parts: [
              { text: '漢', reading: 'かん' },
              { text: '字', reading: 'じ' }
            ],
            meaning: { en: 'kanji', vi: 'chữ Hán (kanji)' }
          },
          {
            parts: [
              { text: '文', reading: 'も' },
              { text: '字', reading: 'じ' }
            ],
            meaning: { en: 'character, letter', vi: 'ký tự, chữ' }
          }
        ]
      },
      {
        char: '本',
        meaning: { en: 'book; origin; main', vi: 'bản - sách; gốc' },
        onyomi: ['ホン'],
        kunyomi: ['もと'],
        components: ['木', '一'],
        mnemonic: {
          en: 'A tree 木 with a mark 一 right at its root points to the origin, and to a book.',
          vi: 'Cái cây 木 có vạch 一 ngay gốc rễ, chỉ về cội nguồn, và cũng là sách.'
        },
        examples: [
          {
            parts: [{ text: '本', reading: 'ほん' }],
            meaning: { en: 'book', vi: 'sách' }
          },
          {
            parts: [
              { text: '日', reading: 'に' },
              { text: '本', reading: 'ほん' }
            ],
            meaning: { en: 'Japan', vi: 'Nhật Bản' }
          },
          {
            parts: [
              { text: '一', reading: 'いっ' },
              { text: '本', reading: 'ぽん' }
            ],
            meaning: { en: 'one (long object)', vi: 'một (vật dài)' }
          }
        ]
      },
      {
        char: '見',
        meaning: { en: 'to see', vi: 'kiến - nhìn, thấy' },
        onyomi: ['ケン'],
        kunyomi: ['み.る', 'み.える', 'み.せる'],
        components: ['目', '儿'],
        mnemonic: {
          en: 'An eye 目 up on a pair of legs 儿 walks around looking at things.',
          vi: 'Con mắt 目 trên đôi chân 儿 đi khắp nơi ngắm nhìn.'
        },
        examples: [
          {
            parts: [
              { text: '見', reading: 'み' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to see, to watch', vi: 'nhìn, xem' }
          },
          {
            parts: [
              { text: '見', reading: 'けん' },
              { text: '学', reading: 'がく' }
            ],
            meaning: { en: 'field trip, study visit', vi: 'tham quan học tập' }
          },
          {
            parts: [
              { text: '花', reading: 'はな' },
              { text: '見', reading: 'み' }
            ],
            meaning: { en: 'flower viewing', vi: 'ngắm hoa' }
          }
        ]
      },
      {
        char: '気',
        meaning: { en: 'spirit, energy, air', vi: 'khí - tinh thần, không khí' },
        onyomi: ['キ', 'ケ'],
        kunyomi: [],
        components: ['气'],
        mnemonic: {
          en: 'Vapor 气 rising into the air, carrying energy and spirit with it.',
          vi: 'Hơi 气 bốc lên không trung, mang theo năng lượng và tinh thần.'
        },
        examples: [
          {
            parts: [
              { text: '元', reading: 'げん' },
              { text: '気', reading: 'き' }
            ],
            meaning: { en: 'healthy, energetic', vi: 'khỏe mạnh, tràn năng lượng' }
          },
          {
            parts: [
              { text: '天', reading: 'てん' },
              { text: '気', reading: 'き' }
            ],
            meaning: { en: 'weather', vi: 'thời tiết' }
          },
          {
            parts: [
              { text: '空', reading: 'くう' },
              { text: '気', reading: 'き' }
            ],
            meaning: { en: 'air', vi: 'không khí' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Nature & living things',
      vi: 'Thiên nhiên & sinh vật'
    },
    kanji: [
      {
        char: '花',
        meaning: { en: 'flower', vi: 'hoa - bông hoa' },
        onyomi: ['カ'],
        kunyomi: ['はな'],
        components: ['艹', '亻', '匕'],
        mnemonic: {
          en: 'The grass radical 艹 sits atop a plant that bursts into bloom.',
          vi: 'Bộ thảo 艹 nằm trên loài cây bung nở thành hoa.'
        },
        examples: [
          {
            parts: [{ text: '花', reading: 'はな' }],
            meaning: { en: 'flower', vi: 'hoa' }
          },
          {
            parts: [
              { text: '花', reading: 'はな' },
              { text: '火', reading: 'び' }
            ],
            meaning: { en: 'fireworks', vi: 'pháo hoa' }
          },
          {
            parts: [
              { text: '花', reading: 'はな' },
              { text: '見', reading: 'み' }
            ],
            meaning: { en: 'flower viewing', vi: 'ngắm hoa' }
          }
        ]
      },
      {
        char: '草',
        meaning: { en: 'grass', vi: 'thảo - cỏ' },
        onyomi: ['ソウ'],
        kunyomi: ['くさ'],
        components: ['艹', '日', '十'],
        mnemonic: {
          en: 'The grass radical 艹 over a plant that sprouts early 早 in the fields.',
          vi: 'Bộ thảo 艹 trên loài cây mọc sớm 早 ngoài đồng.'
        },
        examples: [
          {
            parts: [{ text: '草', reading: 'くさ' }],
            meaning: { en: 'grass', vi: 'cỏ' }
          },
          {
            parts: [
              { text: '草', reading: 'くさ' },
              { text: '木', reading: 'き' }
            ],
            meaning: { en: 'plants, vegetation', vi: 'cây cỏ' }
          },
          {
            parts: [
              { text: '雑', reading: 'ざっ' },
              { text: '草', reading: 'そう' }
            ],
            meaning: { en: 'weed', vi: 'cỏ dại' }
          }
        ]
      },
      {
        char: '竹',
        meaning: { en: 'bamboo', vi: 'trúc - tre' },
        onyomi: ['チク'],
        kunyomi: ['たけ'],
        components: ['竹'],
        mnemonic: {
          en: 'Two bamboo stalks standing with their leaves drooping down.',
          vi: 'Hai thân tre đứng thẳng, lá rủ xuống.'
        },
        examples: [
          {
            parts: [{ text: '竹', reading: 'たけ' }],
            meaning: { en: 'bamboo', vi: 'tre' }
          },
          {
            parts: [
              { text: '竹', reading: 'ちく' },
              { text: '林', reading: 'りん' }
            ],
            meaning: { en: 'bamboo grove', vi: 'rừng tre' }
          },
          {
            parts: [
              { text: '竹', reading: 'たけ' },
              { text: '馬', reading: 'うま' }
            ],
            meaning: { en: 'stilts', vi: 'cà kheo' }
          }
        ]
      },
      {
        char: '林',
        meaning: { en: 'woods, grove', vi: 'lâm - rừng nhỏ' },
        onyomi: ['リン'],
        kunyomi: ['はやし'],
        components: ['木', '木'],
        mnemonic: {
          en: 'Two trees 木 standing side by side make a small wood.',
          vi: 'Hai cây 木 đứng cạnh nhau tạo thành khu rừng nhỏ.'
        },
        examples: [
          {
            parts: [{ text: '林', reading: 'はやし' }],
            meaning: { en: 'woods, grove', vi: 'rừng nhỏ' }
          },
          {
            parts: [
              { text: '竹', reading: 'ちく' },
              { text: '林', reading: 'りん' }
            ],
            meaning: { en: 'bamboo grove', vi: 'rừng tre' }
          },
          {
            parts: [
              { text: '山', reading: 'さん' },
              { text: '林', reading: 'りん' }
            ],
            meaning: { en: 'mountain forest', vi: 'rừng núi' }
          }
        ]
      },
      {
        char: '森',
        meaning: { en: 'forest', vi: 'sâm - rừng' },
        onyomi: ['シン'],
        kunyomi: ['もり'],
        components: ['木', '木', '木'],
        mnemonic: {
          en: 'Three trees 木 crowded together make a deep forest.',
          vi: 'Ba cây 木 chụm lại tạo thành rừng rậm.'
        },
        examples: [
          {
            parts: [{ text: '森', reading: 'もり' }],
            meaning: { en: 'forest', vi: 'rừng' }
          },
          {
            parts: [
              { text: '森', reading: 'しん' },
              { text: '林', reading: 'りん' }
            ],
            meaning: { en: 'forest, woodland', vi: 'rừng rậm' }
          }
        ]
      },
      {
        char: '犬',
        meaning: { en: 'dog', vi: 'khuyển - chó' },
        onyomi: ['ケン'],
        kunyomi: ['いぬ'],
        components: ['大', '丶'],
        mnemonic: {
          en: 'A big animal 大 with one extra spot 丶 for its ear is a dog.',
          vi: 'Con vật to 大 có thêm một chấm 丶 làm cái tai, đó là con chó.'
        },
        examples: [
          {
            parts: [{ text: '犬', reading: 'いぬ' }],
            meaning: { en: 'dog', vi: 'chó' }
          },
          {
            parts: [
              { text: '子', reading: 'こ' },
              { text: '犬', reading: 'いぬ' }
            ],
            meaning: { en: 'puppy', vi: 'chó con' }
          },
          {
            parts: [
              { text: '番', reading: 'ばん' },
              { text: '犬', reading: 'けん' }
            ],
            meaning: { en: 'watchdog', vi: 'chó giữ nhà' }
          }
        ]
      },
      {
        char: '虫',
        meaning: { en: 'insect, bug', vi: 'trùng - côn trùng' },
        onyomi: ['チュウ'],
        kunyomi: ['むし'],
        components: ['虫'],
        mnemonic: {
          en: 'A drawing of a wriggling bug or snake.',
          vi: 'Hình vẽ con sâu hay con rắn đang ngoằn ngoèo.'
        },
        examples: [
          {
            parts: [{ text: '虫', reading: 'むし' }],
            meaning: { en: 'insect, bug', vi: 'côn trùng' }
          },
          {
            parts: [
              { text: '昆', reading: 'こん' },
              { text: '虫', reading: 'ちゅう' }
            ],
            meaning: { en: 'insect', vi: 'côn trùng' }
          },
          {
            parts: [
              { text: '毛', reading: 'け' },
              { text: '虫', reading: 'むし' }
            ],
            meaning: { en: 'caterpillar', vi: 'sâu róm' }
          }
        ]
      },
      {
        char: '貝',
        meaning: { en: 'shellfish, shell', vi: 'bối - vỏ sò, con sò' },
        onyomi: [],
        kunyomi: ['かい'],
        components: ['貝'],
        mnemonic: {
          en: 'A drawing of a cowrie shell, which people once used as money.',
          vi: 'Hình con ốc/vỏ sò, thứ người xưa từng dùng làm tiền.'
        },
        examples: [
          {
            parts: [{ text: '貝', reading: 'かい' }],
            meaning: { en: 'shellfish', vi: 'con sò' }
          },
          {
            parts: [
              { text: '貝', reading: 'かい' },
              { text: '殻', reading: 'がら' }
            ],
            meaning: { en: 'seashell', vi: 'vỏ sò' }
          }
        ]
      },
      {
        char: '玉',
        meaning: { en: 'ball, jewel', vi: 'ngọc - viên bi, ngọc' },
        onyomi: ['ギョク'],
        kunyomi: ['たま'],
        components: ['玉'],
        mnemonic: {
          en: 'A string of jade beads, with one extra dot added for sparkle.',
          vi: 'Xâu ngọc bích, thêm một chấm cho lấp lánh.'
        },
        examples: [
          {
            parts: [{ text: '玉', reading: 'たま' }],
            meaning: { en: 'ball, jewel', vi: 'viên bi, ngọc' }
          },
          {
            parts: [
              { text: '目', reading: 'め' },
              { text: '玉', reading: 'だま' }
            ],
            meaning: { en: 'eyeball', vi: 'nhãn cầu' }
          },
          {
            parts: [
              { text: '水', reading: 'みず' },
              { text: '玉', reading: 'たま' }
            ],
            meaning: { en: 'water drop, polka dot', vi: 'giọt nước, chấm bi' }
          }
        ]
      },
      {
        char: '金',
        meaning: { en: 'gold, metal, money', vi: 'kim - vàng, kim loại, tiền' },
        onyomi: ['キン', 'コン'],
        kunyomi: ['かね', 'かな'],
        components: ['金'],
        mnemonic: {
          en: 'Nuggets of metal buried in the earth beneath a roof.',
          vi: 'Những cục kim loại vùi trong lòng đất dưới mái nhà.'
        },
        examples: [
          {
            parts: [{ text: '金', reading: 'きん' }],
            meaning: { en: 'gold', vi: 'vàng' }
          },
          {
            parts: [
              { text: 'お', reading: 'お' },
              { text: '金', reading: 'かね' }
            ],
            meaning: { en: 'money', vi: 'tiền' }
          },
          {
            parts: [
              { text: '金', reading: 'きん' },
              { text: '曜', reading: 'よう' },
              { text: '日', reading: 'び' }
            ],
            meaning: { en: 'Friday', vi: 'thứ Sáu' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Colors & counting',
      vi: 'Màu sắc & con số'
    },
    kanji: [
      {
        char: '雨',
        meaning: { en: 'rain', vi: 'vũ - mưa' },
        onyomi: ['ウ'],
        kunyomi: ['あめ', 'あま'],
        components: ['雨'],
        mnemonic: {
          en: 'Raindrops falling one by one from a cloud.',
          vi: 'Những giọt mưa rơi lã chã từ đám mây.'
        },
        examples: [
          {
            parts: [{ text: '雨', reading: 'あめ' }],
            meaning: { en: 'rain', vi: 'mưa' }
          },
          {
            parts: [
              { text: '大', reading: 'おお' },
              { text: '雨', reading: 'あめ' }
            ],
            meaning: { en: 'heavy rain', vi: 'mưa to' }
          },
          {
            parts: [
              { text: '雨', reading: 'う' },
              { text: '天', reading: 'てん' }
            ],
            meaning: { en: 'rainy weather', vi: 'trời mưa' }
          }
        ]
      },
      {
        char: '青',
        meaning: { en: 'blue, green', vi: 'thanh - xanh' },
        onyomi: ['セイ', 'ショウ'],
        kunyomi: ['あお', 'あお.い'],
        components: ['青'],
        mnemonic: {
          en: 'The fresh color of new shoots and a clear sky.',
          vi: 'Màu tươi non của mầm cây và bầu trời quang đãng.'
        },
        examples: [
          {
            parts: [{ text: '青', reading: 'あお' }],
            meaning: { en: 'blue', vi: 'màu xanh' }
          },
          {
            parts: [
              { text: '青', reading: 'あお' },
              { text: '空', reading: 'ぞら' }
            ],
            meaning: { en: 'blue sky', vi: 'bầu trời xanh' }
          },
          {
            parts: [
              { text: '青', reading: 'せい' },
              { text: '年', reading: 'ねん' }
            ],
            meaning: { en: 'youth, young man', vi: 'thanh niên' }
          }
        ]
      },
      {
        char: '赤',
        meaning: { en: 'red', vi: 'xích - đỏ' },
        onyomi: ['セキ', 'シャク'],
        kunyomi: ['あか', 'あか.い'],
        components: ['赤'],
        mnemonic: {
          en: 'A big fire glowing red over the earth.',
          vi: 'Ngọn lửa lớn cháy đỏ rực trên mặt đất.'
        },
        examples: [
          {
            parts: [{ text: '赤', reading: 'あか' }],
            meaning: { en: 'red', vi: 'màu đỏ' }
          },
          {
            parts: [
              { text: '赤', reading: 'あか' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'red (adjective)', vi: 'màu đỏ (tính từ)' }
          },
          {
            parts: [
              { text: '赤', reading: 'あか' },
              { text: 'ちゃん', reading: 'ちゃん' }
            ],
            meaning: { en: 'baby', vi: 'em bé' }
          }
        ]
      },
      {
        char: '白',
        meaning: { en: 'white', vi: 'bạch - trắng' },
        onyomi: ['ハク', 'ビャク'],
        kunyomi: ['しろ', 'しろ.い', 'しら'],
        components: ['白'],
        mnemonic: {
          en: 'A single ray of sunlight, bright and pale.',
          vi: 'Một tia nắng, sáng và nhàn nhạt.'
        },
        examples: [
          {
            parts: [{ text: '白', reading: 'しろ' }],
            meaning: { en: 'white', vi: 'màu trắng' }
          },
          {
            parts: [
              { text: '白', reading: 'しろ' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'white (adjective)', vi: 'màu trắng (tính từ)' }
          },
          {
            parts: [
              { text: '面', reading: 'おも' },
              { text: '白', reading: 'しろ' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'interesting, funny', vi: 'thú vị, hay' }
          }
        ]
      },
      {
        char: '千',
        meaning: { en: 'thousand', vi: 'thiên - nghìn' },
        onyomi: ['セン'],
        kunyomi: ['ち'],
        components: ['丿', '十'],
        examples: [
          {
            parts: [{ text: '千', reading: 'せん' }],
            meaning: { en: 'thousand', vi: 'nghìn' }
          },
          {
            parts: [
              { text: '三', reading: 'さん' },
              { text: '千', reading: 'ぜん' }
            ],
            meaning: { en: 'three thousand', vi: 'ba nghìn' }
          },
          {
            parts: [
              { text: '千', reading: 'せん' },
              { text: '円', reading: 'えん' }
            ],
            meaning: { en: '1000 yen', vi: '1000 yên' }
          }
        ]
      },
      {
        char: '百',
        meaning: { en: 'hundred', vi: 'bách - trăm' },
        onyomi: ['ヒャク'],
        kunyomi: [],
        components: ['一', '白'],
        examples: [
          {
            parts: [{ text: '百', reading: 'ひゃく' }],
            meaning: { en: 'hundred', vi: 'trăm' }
          },
          {
            parts: [
              { text: '三', reading: 'さん' },
              { text: '百', reading: 'びゃく' }
            ],
            meaning: { en: 'three hundred', vi: 'ba trăm' }
          },
          {
            parts: [
              { text: '百', reading: 'ひゃく' },
              { text: '円', reading: 'えん' }
            ],
            meaning: { en: '100 yen', vi: '100 yên' }
          }
        ]
      },
      {
        char: '円',
        meaning: { en: 'yen; circle, round', vi: 'viên - đồng yên; tròn' },
        onyomi: ['エン'],
        kunyomi: ['まる.い'],
        components: ['冂'],
        mnemonic: {
          en: 'Something enclosed and rounded off 冂, like a coin.',
          vi: 'Vật được bao lại và bo tròn 冂, như một đồng xu.'
        },
        examples: [
          {
            parts: [{ text: '円', reading: 'えん' }],
            meaning: { en: 'yen', vi: 'đồng yên' }
          },
          {
            parts: [
              { text: '千', reading: 'せん' },
              { text: '円', reading: 'えん' }
            ],
            meaning: { en: '1000 yen', vi: '1000 yên' }
          },
          {
            parts: [
              { text: '百', reading: 'ひゃく' },
              { text: '円', reading: 'えん' }
            ],
            meaning: { en: '100 yen', vi: '100 yên' }
          }
        ]
      },
      {
        char: '王',
        meaning: { en: 'king', vi: 'vương - vua' },
        onyomi: ['オウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Three lines (heaven, man and earth) joined by a single vertical ruler.',
          vi: 'Ba vạch (trời, người, đất) nối lại bởi một người cai trị dọc giữa.'
        },
        examples: [
          {
            parts: [{ text: '王', reading: 'おう' }],
            meaning: { en: 'king', vi: 'vua' }
          },
          {
            parts: [
              { text: '王', reading: 'おう' },
              { text: '子', reading: 'じ' }
            ],
            meaning: { en: 'prince', vi: 'hoàng tử' }
          },
          {
            parts: [
              { text: '女', reading: 'じょ' },
              { text: '王', reading: 'おう' }
            ],
            meaning: { en: 'queen', vi: 'nữ hoàng' }
          }
        ]
      },
      {
        char: '音',
        meaning: { en: 'sound', vi: 'âm - âm thanh' },
        onyomi: ['オン', 'イン'],
        kunyomi: ['おと', 'ね'],
        components: ['立', '日'],
        examples: [
          {
            parts: [{ text: '音', reading: 'おと' }],
            meaning: { en: 'sound', vi: 'âm thanh' }
          },
          {
            parts: [
              { text: '音', reading: 'おん' },
              { text: '楽', reading: 'がく' }
            ],
            meaning: { en: 'music', vi: 'âm nhạc' }
          },
          {
            parts: [
              { text: '足', reading: 'あし' },
              { text: '音', reading: 'おと' }
            ],
            meaning: { en: 'footsteps', vi: 'tiếng bước chân' }
          }
        ]
      },
      {
        char: '立',
        meaning: { en: 'to stand; to set up, establish', vi: 'lập - đứng; dựng lên, thành lập' },
        onyomi: ['リツ', 'リュウ'],
        kunyomi: ['た.つ', 'た.てる'],
        components: ['立'],
        mnemonic: {
          en: 'A person standing firmly with both feet on the ground.',
          vi: 'Người đứng vững, hai chân trên mặt đất.'
        },
        examples: [
          {
            parts: [
              { text: '立', reading: 'た' },
              { text: 'つ', reading: 'つ' }
            ],
            meaning: { en: 'to stand', vi: 'đứng' }
          },
          {
            parts: [
              { text: '国', reading: 'こく' },
              { text: '立', reading: 'りつ' }
            ],
            meaning: { en: 'national (state-run)', vi: 'quốc lập' }
          },
          {
            parts: [
              { text: '起', reading: 'き' },
              { text: '立', reading: 'りつ' }
            ],
            meaning: { en: 'standing up', vi: 'đứng dậy' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Daily life',
      vi: 'Đời sống hằng ngày'
    },
    kanji: [
      {
        char: '休',
        meaning: { en: 'rest', vi: 'hưu - nghỉ ngơi' },
        onyomi: ['キュウ'],
        kunyomi: ['やす.む', 'やす.まる'],
        components: ['亻', '木'],
        mnemonic: {
          en: 'A person 亻 leaning against a tree 木 to take a break.',
          vi: 'Người 亻 tựa vào gốc cây 木 để nghỉ chân.'
        },
        examples: [
          {
            parts: [
              { text: '休', reading: 'やす' },
              { text: 'む', reading: 'む' }
            ],
            meaning: { en: 'to rest', vi: 'nghỉ ngơi' }
          },
          {
            parts: [
              { text: '休', reading: 'きゅう' },
              { text: '日', reading: 'じつ' }
            ],
            meaning: { en: 'holiday, day off', vi: 'ngày nghỉ' }
          },
          {
            parts: [
              { text: '夏', reading: 'なつ' },
              { text: '休', reading: 'やす' },
              { text: 'み', reading: 'み' }
            ],
            meaning: { en: 'summer vacation', vi: 'nghỉ hè' }
          }
        ]
      },
      {
        char: '糸',
        meaning: { en: 'thread', vi: 'ti - sợi chỉ, tơ' },
        onyomi: ['シ'],
        kunyomi: ['いと'],
        components: [],
        mnemonic: {
          en: 'A bundle of fine threads twisted together.',
          vi: 'Một bó sợi mảnh xoắn lại với nhau.'
        },
        examples: [
          {
            parts: [{ text: '糸', reading: 'いと' }],
            meaning: { en: 'thread', vi: 'sợi chỉ' }
          },
          {
            parts: [
              { text: '毛', reading: 'け' },
              { text: '糸', reading: 'いと' }
            ],
            meaning: { en: 'wool, yarn', vi: 'len, sợi len' }
          }
        ]
      },
      {
        char: '車',
        meaning: { en: 'car, vehicle, wheel', vi: 'xa - xe' },
        onyomi: ['シャ'],
        kunyomi: ['くるま'],
        components: [],
        mnemonic: {
          en: 'A cart drawn as if seen from directly above.',
          vi: 'Chiếc xe vẽ như nhìn thẳng từ trên xuống.'
        },
        examples: [
          {
            parts: [{ text: '車', reading: 'くるま' }],
            meaning: { en: 'car', vi: 'xe' }
          },
          {
            parts: [
              { text: '電', reading: 'でん' },
              { text: '車', reading: 'しゃ' }
            ],
            meaning: { en: 'train', vi: 'tàu điện' }
          },
          {
            parts: [
              { text: '自', reading: 'じ' },
              { text: '転', reading: 'てん' },
              { text: '車', reading: 'しゃ' }
            ],
            meaning: { en: 'bicycle', vi: 'xe đạp' }
          }
        ]
      },
      {
        char: '出',
        meaning: { en: 'go out, exit', vi: 'xuất - ra, đi ra' },
        onyomi: ['シュツ'],
        kunyomi: ['で.る', 'だ.す'],
        components: [],
        mnemonic: {
          en: 'Sprouts pushing up and breaking out of the ground.',
          vi: 'Mầm cây đâm lên, trồi ra khỏi mặt đất.'
        },
        examples: [
          {
            parts: [
              { text: '出', reading: 'で' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to go out, to leave', vi: 'đi ra, rời khỏi' }
          },
          {
            parts: [
              { text: '出', reading: 'で' },
              { text: '口', reading: 'ぐち' }
            ],
            meaning: { en: 'exit', vi: 'lối ra' }
          },
          {
            parts: [
              { text: '出', reading: 'だ' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to take out, to send', vi: 'lấy ra, gửi' }
          },
          {
            parts: [
              { text: '外', reading: 'がい' },
              { text: '出', reading: 'しゅつ' }
            ],
            meaning: { en: 'going out, outing', vi: 'ra ngoài, đi ra ngoài' }
          }
        ]
      },
      {
        char: '正',
        meaning: { en: 'correct, right', vi: 'chính - đúng, ngay thẳng' },
        onyomi: ['セイ', 'ショウ'],
        kunyomi: ['ただ.しい', 'まさ'],
        components: ['一', '止'],
        mnemonic: {
          en: 'You stop 止 exactly at the one 一 correct line.',
          vi: 'Ta dừng 止 đúng ngay vạch 一 chuẩn.'
        },
        examples: [
          {
            parts: [
              { text: '正', reading: 'ただ' },
              { text: 'しい', reading: 'しい' }
            ],
            meaning: { en: 'correct, right', vi: 'đúng, chính xác' }
          },
          {
            parts: [
              { text: '正', reading: 'しょう' },
              { text: '月', reading: 'がつ' }
            ],
            meaning: { en: 'New Year', vi: 'Tết, năm mới' }
          },
          {
            parts: [
              { text: '正', reading: 'しょう' },
              { text: '午', reading: 'ご' }
            ],
            meaning: { en: 'noon', vi: 'giữa trưa' }
          }
        ]
      },
      {
        char: '夕',
        meaning: { en: 'evening', vi: 'tịch - buổi tối, chiều tối' },
        onyomi: ['セキ'],
        kunyomi: ['ゆう'],
        components: [],
        mnemonic: {
          en: 'A thin crescent moon appearing at dusk.',
          vi: 'Vầng trăng lưỡi liềm mảnh ló ra lúc chạng vạng.'
        },
        examples: [
          {
            parts: [
              { text: '夕', reading: 'ゆう' },
              { text: '方', reading: 'がた' }
            ],
            meaning: { en: 'evening', vi: 'buổi chiều tối' }
          },
          {
            parts: [
              { text: '夕', reading: 'ゆう' },
              { text: '食', reading: 'しょく' }
            ],
            meaning: { en: 'dinner', vi: 'bữa tối' }
          },
          {
            parts: [{ text: '七夕', reading: 'たなばた' }],
            meaning: { en: 'Tanabata (star festival)', vi: 'lễ Thất Tịch' }
          }
        ]
      },
      {
        char: '早',
        meaning: { en: 'early, fast', vi: 'tảo - sớm, nhanh' },
        onyomi: ['ソウ', 'サッ'],
        kunyomi: ['はや.い'],
        components: ['日', '十'],
        mnemonic: {
          en: 'The sun 日 is already up above the ten 十, nice and early.',
          vi: 'Mặt trời 日 đã lên trên chữ mười 十, còn sớm tinh mơ.'
        },
        examples: [
          {
            parts: [
              { text: '早', reading: 'はや' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'early, fast', vi: 'sớm, nhanh' }
          },
          {
            parts: [
              { text: '早', reading: 'はや' },
              { text: '口', reading: 'くち' }
            ],
            meaning: { en: 'fast talking', vi: 'nói nhanh' }
          },
          {
            parts: [
              { text: '早', reading: 'そう' },
              { text: '朝', reading: 'ちょう' }
            ],
            meaning: { en: 'early morning', vi: 'sáng sớm' }
          }
        ]
      },
      {
        char: '村',
        meaning: { en: 'village', vi: 'thôn - làng' },
        onyomi: ['ソン'],
        kunyomi: ['むら'],
        components: ['木', '寸'],
        mnemonic: {
          en: 'Trees 木 measured out 寸 and shared into plots make a village.',
          vi: 'Cây cối 木 được đo 寸 chia thành từng khu, tạo nên ngôi làng.'
        },
        examples: [
          {
            parts: [{ text: '村', reading: 'むら' }],
            meaning: { en: 'village', vi: 'làng' }
          },
          {
            parts: [
              { text: '村', reading: 'むら' },
              { text: '人', reading: 'びと' }
            ],
            meaning: { en: 'villager', vi: 'dân làng' }
          },
          {
            parts: [
              { text: '山', reading: 'さん' },
              { text: '村', reading: 'そん' }
            ],
            meaning: { en: 'mountain village', vi: 'làng miền núi' }
          }
        ]
      },
      {
        char: '町',
        meaning: { en: 'town', vi: 'đinh - phố, thị trấn' },
        onyomi: ['チョウ'],
        kunyomi: ['まち'],
        components: [],
        mnemonic: {
          en: 'A field 田 laid out in neat blocks 丁 becomes a town.',
          vi: 'Ruộng đất 田 chia thành từng khu vuông vắn 丁, thành khu phố.'
        },
        examples: [
          {
            parts: [{ text: '町', reading: 'まち' }],
            meaning: { en: 'town', vi: 'phố, thị trấn' }
          },
          {
            parts: [
              { text: '下', reading: 'した' },
              { text: '町', reading: 'まち' }
            ],
            meaning: { en: 'downtown', vi: 'khu phố cũ, phố dưới' }
          },
          {
            parts: [
              { text: '町', reading: 'ちょう' },
              { text: '長', reading: 'ちょう' }
            ],
            meaning: { en: 'town mayor', vi: 'trưởng thị trấn' }
          }
        ]
      },
      {
        char: '入',
        meaning: { en: 'to enter, go in; to put in', vi: 'nhập - vào, đi vào; cho vào' },
        onyomi: ['ニュウ'],
        kunyomi: ['い.る', 'はい.る', 'い.れる'],
        components: [],
        mnemonic: {
          en: 'A figure bending down to step in through a narrow opening.',
          vi: 'Hình người cúi mình bước vào qua khe cửa hẹp.'
        },
        examples: [
          {
            parts: [
              { text: '入', reading: 'はい' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to enter', vi: 'đi vào' }
          },
          {
            parts: [
              { text: '入', reading: 'いり' },
              { text: '口', reading: 'ぐち' }
            ],
            meaning: { en: 'entrance', vi: 'lối vào' }
          },
          {
            parts: [
              { text: '入', reading: 'にゅう' },
              { text: '学', reading: 'がく' }
            ],
            meaning: { en: 'entering school', vi: 'nhập học' }
          },
          {
            parts: [
              { text: '入', reading: 'い' },
              { text: 'れる', reading: 'れる' }
            ],
            meaning: { en: 'to put in, to insert', vi: 'cho vào, bỏ vào' }
          }
        ]
      }
    ]
  }
]);

/**
 * Grade 2 Jōyō kanji (160 characters), learned 10 per lesson. Author each lesson
 * by hand; keep 10 kanji per lesson and add new lessons in order.
 */
export const grade2Lessons: KanjiLesson[] = withSequentialNumbers([
  {
    title: {
      en: 'Time & seasons',
      vi: 'Thời gian & mùa'
    },
    kanji: [
      {
        char: '今',
        meaning: { en: 'now', vi: 'kim - bây giờ' },
        onyomi: ['コン', 'キン'],
        kunyomi: ['いま'],
        components: [],
        examples: [
          {
            parts: [{ text: '今', reading: 'いま' }],
            meaning: { en: 'now', vi: 'bây giờ' }
          },
          {
            parts: [{ text: '今日', reading: 'きょう' }],
            meaning: { en: 'today', vi: 'hôm nay' }
          },
          {
            parts: [
              { text: '今', reading: 'こん' },
              { text: '月', reading: 'げつ' }
            ],
            meaning: { en: 'this month', vi: 'tháng này' }
          }
        ]
      },
      {
        char: '時',
        meaning: { en: 'time, hour', vi: 'thời - thời gian, giờ' },
        onyomi: ['ジ'],
        kunyomi: ['とき'],
        components: ['日', '土', '寸'],
        mnemonic: {
          en: 'The sun 日 moving past a temple 寺 marks the passing time.',
          vi: 'Mặt trời 日 dịch chuyển bên ngôi chùa 寺, đánh dấu thời gian trôi.'
        },
        examples: [
          {
            parts: [{ text: '時', reading: 'とき' }],
            meaning: { en: 'time', vi: 'thời gian, lúc' }
          },
          {
            parts: [
              { text: '時', reading: 'じ' },
              { text: '間', reading: 'かん' }
            ],
            meaning: { en: 'time, hour', vi: 'thời gian, tiếng' }
          },
          {
            parts: [
              { text: '何', reading: 'なん' },
              { text: '時', reading: 'じ' }
            ],
            meaning: { en: 'what time', vi: 'mấy giờ' }
          }
        ]
      },
      {
        char: '朝',
        meaning: { en: 'morning', vi: 'triêu - buổi sáng' },
        onyomi: ['チョウ'],
        kunyomi: ['あさ'],
        components: ['日', '月'],
        mnemonic: {
          en: 'The sun 日 rising while the moon 月 still lingers in the sky.',
          vi: 'Mặt trời 日 mọc lên khi trăng 月 còn nấn ná trên trời.'
        },
        examples: [
          {
            parts: [{ text: '朝', reading: 'あさ' }],
            meaning: { en: 'morning', vi: 'buổi sáng' }
          },
          {
            parts: [
              { text: '朝', reading: 'ちょう' },
              { text: '食', reading: 'しょく' }
            ],
            meaning: { en: 'breakfast', vi: 'bữa sáng' }
          },
          {
            parts: [
              { text: '毎', reading: 'まい' },
              { text: '朝', reading: 'あさ' }
            ],
            meaning: { en: 'every morning', vi: 'mỗi sáng' }
          }
        ]
      },
      {
        char: '昼',
        meaning: { en: 'noon, daytime', vi: 'trú - buổi trưa, ban ngày' },
        onyomi: ['チュウ'],
        kunyomi: ['ひる'],
        components: [],
        mnemonic: {
          en: 'The sun 日 sitting at its highest point in the middle of the day.',
          vi: 'Mặt trời 日 lên cao nhất vào giữa ngày.'
        },
        examples: [
          {
            parts: [{ text: '昼', reading: 'ひる' }],
            meaning: { en: 'noon, daytime', vi: 'buổi trưa' }
          },
          {
            parts: [
              { text: '昼', reading: 'ちゅう' },
              { text: '食', reading: 'しょく' }
            ],
            meaning: { en: 'lunch', vi: 'bữa trưa' }
          },
          {
            parts: [
              { text: '昼', reading: 'ひる' },
              { text: '間', reading: 'ま' }
            ],
            meaning: { en: 'daytime', vi: 'ban ngày' }
          }
        ]
      },
      {
        char: '夜',
        meaning: { en: 'night', vi: 'dạ - ban đêm' },
        onyomi: ['ヤ'],
        kunyomi: ['よる', 'よ'],
        components: [],
        mnemonic: {
          en: 'When evening 夕 falls, people settle in under a roof for the night.',
          vi: 'Khi chiều tối 夕 buông, người ta về nghỉ dưới mái nhà cho qua đêm.'
        },
        examples: [
          {
            parts: [{ text: '夜', reading: 'よる' }],
            meaning: { en: 'night', vi: 'ban đêm' }
          },
          {
            parts: [
              { text: '今', reading: 'こん' },
              { text: '夜', reading: 'や' }
            ],
            meaning: { en: 'tonight', vi: 'tối nay' }
          },
          {
            parts: [
              { text: '夜', reading: 'よ' },
              { text: '中', reading: 'なか' }
            ],
            meaning: { en: 'midnight, late night', vi: 'nửa đêm' }
          }
        ]
      },
      {
        char: '週',
        meaning: { en: 'week', vi: 'chu - tuần' },
        onyomi: ['シュウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Going around 辶 one full circuit 周 of days.',
          vi: 'Đi hết 辶 trọn một vòng 周 các ngày.'
        },
        examples: [
          {
            parts: [
              { text: '今', reading: 'こん' },
              { text: '週', reading: 'しゅう' }
            ],
            meaning: { en: 'this week', vi: 'tuần này' }
          },
          {
            parts: [
              { text: '週', reading: 'しゅう' },
              { text: '末', reading: 'まつ' }
            ],
            meaning: { en: 'weekend', vi: 'cuối tuần' }
          },
          {
            parts: [
              { text: '毎', reading: 'まい' },
              { text: '週', reading: 'しゅう' }
            ],
            meaning: { en: 'every week', vi: 'mỗi tuần' }
          }
        ]
      },
      {
        char: '春',
        meaning: { en: 'spring', vi: 'xuân - mùa xuân' },
        onyomi: ['シュン'],
        kunyomi: ['はる'],
        components: [],
        mnemonic: {
          en: 'The sun 日 warms the ground and sprouts start pushing up.',
          vi: 'Mặt trời 日 sưởi ấm mặt đất, mầm cây bắt đầu vươn lên.'
        },
        examples: [
          {
            parts: [{ text: '春', reading: 'はる' }],
            meaning: { en: 'spring', vi: 'mùa xuân' }
          },
          {
            parts: [
              { text: '春', reading: 'しゅん' },
              { text: '分', reading: 'ぶん' }
            ],
            meaning: { en: 'spring equinox', vi: 'xuân phân' }
          },
          {
            parts: [
              { text: '立', reading: 'りっ' },
              { text: '春', reading: 'しゅん' }
            ],
            meaning: { en: 'start of spring', vi: 'lập xuân' }
          }
        ]
      },
      {
        char: '夏',
        meaning: { en: 'summer', vi: 'hạ - mùa hè' },
        onyomi: ['カ', 'ゲ'],
        kunyomi: ['なつ'],
        components: [],
        mnemonic: {
          en: 'Dragging your legs 夂 and walking slowly in the summer heat.',
          vi: 'Lê chân 夂 bước chậm chạp trong cái nóng oi ả.'
        },
        examples: [
          {
            parts: [{ text: '夏', reading: 'なつ' }],
            meaning: { en: 'summer', vi: 'mùa hè' }
          },
          {
            parts: [
              { text: '夏', reading: 'なつ' },
              { text: '休', reading: 'やす' },
              { text: 'み', reading: 'み' }
            ],
            meaning: { en: 'summer vacation', vi: 'nghỉ hè' }
          },
          {
            parts: [
              { text: '真', reading: 'ま' },
              { text: '夏', reading: 'なつ' }
            ],
            meaning: { en: 'midsummer', vi: 'giữa hè' }
          }
        ]
      },
      {
        char: '秋',
        meaning: { en: 'autumn, fall', vi: 'thu - mùa thu' },
        onyomi: ['シュウ'],
        kunyomi: ['あき'],
        components: ['禾', '火'],
        mnemonic: {
          en: 'Grain 禾 ripening red as fire 火 at harvest time.',
          vi: 'Lúa 禾 chín đỏ như lửa 火 vào mùa gặt.'
        },
        examples: [
          {
            parts: [{ text: '秋', reading: 'あき' }],
            meaning: { en: 'autumn, fall', vi: 'mùa thu' }
          },
          {
            parts: [
              { text: '秋', reading: 'しゅう' },
              { text: '分', reading: 'ぶん' }
            ],
            meaning: { en: 'autumn equinox', vi: 'thu phân' }
          },
          {
            parts: [
              { text: '立', reading: 'りっ' },
              { text: '秋', reading: 'しゅう' }
            ],
            meaning: { en: 'start of autumn', vi: 'lập thu' }
          }
        ]
      },
      {
        char: '冬',
        meaning: { en: 'winter', vi: 'đông - mùa đông' },
        onyomi: ['トウ'],
        kunyomi: ['ふゆ'],
        components: ['夂', '冫'],
        mnemonic: {
          en: 'Trailing legs 夂 dragging over two marks of ice 冫.',
          vi: 'Đôi chân lê bước 夂 trên hai vệt băng giá 冫.'
        },
        examples: [
          {
            parts: [{ text: '冬', reading: 'ふゆ' }],
            meaning: { en: 'winter', vi: 'mùa đông' }
          },
          {
            parts: [
              { text: '冬', reading: 'ふゆ' },
              { text: '休', reading: 'やす' },
              { text: 'み', reading: 'み' }
            ],
            meaning: { en: 'winter vacation', vi: 'nghỉ đông' }
          },
          {
            parts: [
              { text: '立', reading: 'りっ' },
              { text: '冬', reading: 'とう' }
            ],
            meaning: { en: 'start of winter', vi: 'lập đông' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Family',
      vi: 'Gia đình'
    },
    kanji: [
      {
        char: '父',
        meaning: { en: 'father', vi: 'phụ - cha, bố' },
        onyomi: ['フ'],
        kunyomi: ['ちち'],
        components: [],
        mnemonic: {
          en: 'A hand gripping a stick: the household authority.',
          vi: 'Bàn tay nắm cây roi: người có quyền trong nhà.'
        },
        examples: [
          {
            parts: [{ text: '父', reading: 'ちち' }],
            meaning: { en: 'father (my)', vi: 'bố (của tôi)' }
          },
          {
            parts: [
              { text: 'お', reading: 'お' },
              { text: '父', reading: 'とう' },
              { text: 'さん', reading: 'さん' }
            ],
            meaning: { en: 'father (polite)', vi: 'bố (lịch sự)' }
          },
          {
            parts: [
              { text: '父', reading: 'ふ' },
              { text: '母', reading: 'ぼ' }
            ],
            meaning: { en: 'parents', vi: 'cha mẹ' }
          }
        ]
      },
      {
        char: '母',
        meaning: { en: 'mother', vi: 'mẫu - mẹ' },
        onyomi: ['ボ'],
        kunyomi: ['はは'],
        components: [],
        mnemonic: {
          en: 'A figure of a mother, with two dots for the breasts that nurse a child.',
          vi: 'Hình người mẹ, hai chấm là bầu sữa nuôi con.'
        },
        examples: [
          {
            parts: [{ text: '母', reading: 'はは' }],
            meaning: { en: 'mother (my)', vi: 'mẹ (của tôi)' }
          },
          {
            parts: [
              { text: 'お', reading: 'お' },
              { text: '母', reading: 'かあ' },
              { text: 'さん', reading: 'さん' }
            ],
            meaning: { en: 'mother (polite)', vi: 'mẹ (lịch sự)' }
          },
          {
            parts: [
              { text: '父', reading: 'ふ' },
              { text: '母', reading: 'ぼ' }
            ],
            meaning: { en: 'parents', vi: 'cha mẹ' }
          }
        ]
      },
      {
        char: '兄',
        meaning: { en: 'older brother', vi: 'huynh - anh trai' },
        onyomi: ['ケイ', 'キョウ'],
        kunyomi: ['あに'],
        components: ['口', '儿'],
        mnemonic: {
          en: 'A person on legs 儿 with a big mouth 口, the one who bosses the others around.',
          vi: 'Người trên đôi chân 儿 với cái miệng 口 to, hay sai bảo em út.'
        },
        examples: [
          {
            parts: [{ text: '兄', reading: 'あに' }],
            meaning: { en: 'older brother (my)', vi: 'anh trai (của tôi)' }
          },
          {
            parts: [
              { text: 'お', reading: 'お' },
              { text: '兄', reading: 'にい' },
              { text: 'さん', reading: 'さん' }
            ],
            meaning: { en: 'older brother (polite)', vi: 'anh trai (lịch sự)' }
          },
          {
            parts: [
              { text: '兄', reading: 'きょう' },
              { text: '弟', reading: 'だい' }
            ],
            meaning: { en: 'siblings, brothers', vi: 'anh em' }
          }
        ]
      },
      {
        char: '弟',
        meaning: { en: 'younger brother', vi: 'đệ - em trai' },
        onyomi: ['ダイ', 'テイ'],
        kunyomi: ['おとうと'],
        components: [],
        mnemonic: {
          en: 'The little one wrapped and bound up below the elder sibling.',
          vi: 'Đứa nhỏ được quấn buộc ở dưới, xếp sau người anh.'
        },
        examples: [
          {
            parts: [{ text: '弟', reading: 'おとうと' }],
            meaning: { en: 'younger brother (my)', vi: 'em trai (của tôi)' }
          },
          {
            parts: [
              { text: '兄', reading: 'きょう' },
              { text: '弟', reading: 'だい' }
            ],
            meaning: { en: 'siblings, brothers', vi: 'anh em' }
          },
          {
            parts: [
              { text: '弟', reading: 'で' },
              { text: '子', reading: 'し' }
            ],
            meaning: { en: 'pupil, disciple', vi: 'đệ tử, học trò' }
          }
        ]
      },
      {
        char: '姉',
        meaning: { en: 'older sister', vi: 'tỷ - chị gái' },
        onyomi: ['シ'],
        kunyomi: ['あね'],
        components: [],
        mnemonic: {
          en: 'The woman 女 of the household who runs the errands at the market 市.',
          vi: 'Người phụ nữ 女 trong nhà lo việc chợ búa 市.'
        },
        examples: [
          {
            parts: [{ text: '姉', reading: 'あね' }],
            meaning: { en: 'older sister (my)', vi: 'chị gái (của tôi)' }
          },
          {
            parts: [
              { text: 'お', reading: 'お' },
              { text: '姉', reading: 'ねえ' },
              { text: 'さん', reading: 'さん' }
            ],
            meaning: { en: 'older sister (polite)', vi: 'chị gái (lịch sự)' }
          },
          {
            parts: [
              { text: '姉', reading: 'し' },
              { text: '妹', reading: 'まい' }
            ],
            meaning: { en: 'sisters', vi: 'chị em gái' }
          }
        ]
      },
      {
        char: '妹',
        meaning: { en: 'younger sister', vi: 'muội - em gái' },
        onyomi: ['マイ'],
        kunyomi: ['いもうと'],
        components: [],
        mnemonic: {
          en: 'The girl 女 who has not yet 未 grown up.',
          vi: 'Người con gái 女 vẫn chưa 未 trưởng thành.'
        },
        examples: [
          {
            parts: [{ text: '妹', reading: 'いもうと' }],
            meaning: { en: 'younger sister (my)', vi: 'em gái (của tôi)' }
          },
          {
            parts: [
              { text: '姉', reading: 'し' },
              { text: '妹', reading: 'まい' }
            ],
            meaning: { en: 'sisters', vi: 'chị em gái' }
          },
          {
            parts: [
              { text: '妹', reading: 'いもうと' },
              { text: 'さん', reading: 'さん' }
            ],
            meaning: { en: "(someone's) younger sister", vi: 'em gái (của ai đó)' }
          }
        ]
      },
      {
        char: '友',
        meaning: { en: 'friend', vi: 'hữu - bạn' },
        onyomi: ['ユウ'],
        kunyomi: ['とも'],
        components: [],
        mnemonic: {
          en: 'Two hands 又 reaching out to help each other.',
          vi: 'Hai bàn tay 又 chìa ra giúp đỡ nhau.'
        },
        examples: [
          {
            parts: [{ text: '友', reading: 'とも' }],
            meaning: { en: 'friend', vi: 'bạn' }
          },
          {
            parts: [
              { text: '友', reading: 'とも' },
              { text: 'だち', reading: 'だち' }
            ],
            meaning: { en: 'friend', vi: 'bạn bè' }
          },
          {
            parts: [
              { text: '親', reading: 'しん' },
              { text: '友', reading: 'ゆう' }
            ],
            meaning: { en: 'best friend', vi: 'bạn thân' }
          }
        ]
      },
      {
        char: '親',
        meaning: { en: 'parent; intimate', vi: 'thân - cha mẹ; thân thiết' },
        onyomi: ['シン'],
        kunyomi: ['おや', 'した.しい'],
        components: ['立', '木', '見'],
        mnemonic: {
          en: 'You stand 立 by a tree 木 and watch 見 over your child.',
          vi: 'Bạn đứng 立 bên gốc cây 木 dõi nhìn 見 trông con.'
        },
        examples: [
          {
            parts: [{ text: '親', reading: 'おや' }],
            meaning: { en: 'parent', vi: 'cha mẹ' }
          },
          {
            parts: [
              { text: '両', reading: 'りょう' },
              { text: '親', reading: 'しん' }
            ],
            meaning: { en: 'both parents', vi: 'bố mẹ' }
          },
          {
            parts: [
              { text: '親', reading: 'しん' },
              { text: '切', reading: 'せつ' }
            ],
            meaning: { en: 'kind, kindness', vi: 'tử tế' }
          }
        ]
      },
      {
        char: '自',
        meaning: { en: 'self', vi: 'tự - tự mình' },
        onyomi: ['ジ', 'シ'],
        kunyomi: ['みずか.ら'],
        components: [],
        mnemonic: {
          en: 'A finger pointing back at your own nose: meaning yourself.',
          vi: 'Ngón tay chỉ vào mũi mình: ý là bản thân.'
        },
        examples: [
          {
            parts: [
              { text: '自', reading: 'じ' },
              { text: '分', reading: 'ぶん' }
            ],
            meaning: { en: 'oneself', vi: 'bản thân' }
          },
          {
            parts: [
              { text: '自', reading: 'じ' },
              { text: '転', reading: 'てん' },
              { text: '車', reading: 'しゃ' }
            ],
            meaning: { en: 'bicycle', vi: 'xe đạp' }
          },
          {
            parts: [
              { text: '自', reading: 'じ' },
              { text: '由', reading: 'ゆう' }
            ],
            meaning: { en: 'freedom', vi: 'tự do' }
          }
        ]
      },
      {
        char: '家',
        meaning: { en: 'house, home, family', vi: 'gia - nhà, gia đình' },
        onyomi: ['カ', 'ケ'],
        kunyomi: ['いえ', 'や'],
        components: ['宀', '豕'],
        mnemonic: {
          en: 'Long ago a home 宀 usually kept a pig 豕 inside, so this kanji came to mean house and family.',
          vi: 'Ngày xưa trong nhà 宀 thường nuôi con heo 豕, nên chữ này mang nghĩa nhà, gia đình.'
        },
        examples: [
          {
            parts: [{ text: '家', reading: 'いえ' }],
            meaning: { en: 'house, home', vi: 'nhà' }
          },
          {
            parts: [
              { text: '家', reading: 'か' },
              { text: '族', reading: 'ぞく' }
            ],
            meaning: { en: 'family', vi: 'gia đình' }
          },
          {
            parts: [
              { text: '家', reading: 'か' },
              { text: '庭', reading: 'てい' }
            ],
            meaning: { en: 'household', vi: 'gia đình, nếp nhà' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Directions & position',
      vi: 'Phương hướng & vị trí'
    },
    kanji: [
      {
        char: '東',
        meaning: { en: 'east', vi: 'đông - hướng đông' },
        onyomi: ['トウ'],
        kunyomi: ['ひがし'],
        components: ['木', '日'],
        mnemonic: {
          en: 'The sun 日 rising up behind a tree 木.',
          vi: 'Mặt trời 日 nhô lên sau lùm cây 木.'
        },
        examples: [
          {
            parts: [{ text: '東', reading: 'ひがし' }],
            meaning: { en: 'east', vi: 'hướng đông' }
          },
          {
            parts: [
              { text: '東', reading: 'とう' },
              { text: '京', reading: 'きょう' }
            ],
            meaning: { en: 'Tokyo', vi: 'Tokyo' }
          },
          {
            parts: [
              { text: '東', reading: 'とう' },
              { text: '西', reading: 'ざい' }
            ],
            meaning: { en: 'east and west', vi: 'đông tây' }
          }
        ]
      },
      {
        char: '西',
        meaning: { en: 'west', vi: 'tây - hướng tây' },
        onyomi: ['セイ', 'サイ'],
        kunyomi: ['にし'],
        components: [],
        mnemonic: {
          en: 'A bird settling into its nest just as the sun sets in the west.',
          vi: 'Con chim về tổ đúng lúc mặt trời lặn ở phía tây.'
        },
        examples: [
          {
            parts: [{ text: '西', reading: 'にし' }],
            meaning: { en: 'west', vi: 'hướng tây' }
          },
          {
            parts: [
              { text: '西', reading: 'にし' },
              { text: '日', reading: 'び' }
            ],
            meaning: { en: 'afternoon sun', vi: 'nắng chiều' }
          },
          {
            parts: [
              { text: '北', reading: 'ほく' },
              { text: '西', reading: 'せい' }
            ],
            meaning: { en: 'northwest', vi: 'tây bắc' }
          }
        ]
      },
      {
        char: '南',
        meaning: { en: 'south', vi: 'nam - hướng nam' },
        onyomi: ['ナン'],
        kunyomi: ['みなみ'],
        components: [],
        mnemonic: {
          en: 'Plants thrive on the warm side that faces south.',
          vi: 'Cây cối tốt tươi ở phía ấm áp hướng về nam.'
        },
        examples: [
          {
            parts: [{ text: '南', reading: 'みなみ' }],
            meaning: { en: 'south', vi: 'hướng nam' }
          },
          {
            parts: [
              { text: '南', reading: 'なん' },
              { text: '北', reading: 'ぼく' }
            ],
            meaning: { en: 'north and south', vi: 'nam bắc' }
          },
          {
            parts: [
              { text: '東', reading: 'とう' },
              { text: '南', reading: 'なん' }
            ],
            meaning: { en: 'southeast', vi: 'đông nam' }
          }
        ]
      },
      {
        char: '北',
        meaning: { en: 'north', vi: 'bắc - hướng bắc' },
        onyomi: ['ホク'],
        kunyomi: ['きた'],
        components: [],
        mnemonic: {
          en: 'Two people sitting back to back, turning away from the cold.',
          vi: 'Hai người ngồi quay lưng nhau, tránh cái lạnh phương bắc.'
        },
        examples: [
          {
            parts: [{ text: '北', reading: 'きた' }],
            meaning: { en: 'north', vi: 'hướng bắc' }
          },
          {
            parts: [
              { text: '北', reading: 'ほっ' },
              { text: '海', reading: 'かい' },
              { text: '道', reading: 'どう' }
            ],
            meaning: { en: 'Hokkaido', vi: 'Hokkaido' }
          },
          {
            parts: [
              { text: '南', reading: 'なん' },
              { text: '北', reading: 'ぼく' }
            ],
            meaning: { en: 'north and south', vi: 'nam bắc' }
          }
        ]
      },
      {
        char: '前',
        meaning: { en: 'front, before', vi: 'tiền - phía trước; trước' },
        onyomi: ['ゼン'],
        kunyomi: ['まえ'],
        components: [],
        examples: [
          {
            parts: [{ text: '前', reading: 'まえ' }],
            meaning: { en: 'front, before', vi: 'phía trước, trước' }
          },
          {
            parts: [
              { text: '名', reading: 'な' },
              { text: '前', reading: 'まえ' }
            ],
            meaning: { en: 'name', vi: 'tên' }
          },
          {
            parts: [
              { text: '午', reading: 'ご' },
              { text: '前', reading: 'ぜん' }
            ],
            meaning: { en: 'morning, a.m.', vi: 'buổi sáng' }
          }
        ]
      },
      {
        char: '後',
        meaning: { en: 'behind, after', vi: 'hậu - phía sau; sau' },
        onyomi: ['ゴ', 'コウ'],
        kunyomi: ['うし.ろ', 'あと', 'のち'],
        components: ['彳', '幺', '夂'],
        mnemonic: {
          en: 'Stepping 彳 on short 幺 dragging legs 夂, you keep falling behind.',
          vi: 'Bước 彳 với đôi chân nhỏ 幺 lê phía sau 夂 nên cứ tụt lại.'
        },
        examples: [
          {
            parts: [
              { text: '後', reading: 'うし' },
              { text: 'ろ', reading: 'ろ' }
            ],
            meaning: { en: 'behind, back', vi: 'phía sau' }
          },
          {
            parts: [
              { text: '午', reading: 'ご' },
              { text: '後', reading: 'ご' }
            ],
            meaning: { en: 'afternoon, p.m.', vi: 'buổi chiều' }
          },
          {
            parts: [
              { text: '後', reading: 'あと' },
              { text: 'で', reading: 'で' }
            ],
            meaning: { en: 'later', vi: 'lát nữa, sau' }
          },
          {
            parts: [
              { text: '後', reading: 'こう' },
              { text: '半', reading: 'はん' }
            ],
            meaning: { en: 'second half, latter half', vi: 'nửa sau, hiệp hai' }
          },
          {
            parts: [
              { text: '後', reading: 'のち' },
              { text: 'ほ', reading: 'ほ' },
              { text: 'ど', reading: 'ど' }
            ],
            meaning: { en: 'later, afterwards (polite)', vi: 'lát nữa, sau đó (lịch sự)' }
          }
        ]
      },
      {
        char: '内',
        meaning: { en: 'inside', vi: 'nội - bên trong' },
        onyomi: ['ナイ'],
        kunyomi: ['うち'],
        components: ['冂', '人'],
        mnemonic: {
          en: 'A person 人 tucked within an enclosure 冂.',
          vi: 'Người 人 nép bên trong khung bao 冂.'
        },
        examples: [
          {
            parts: [{ text: '内', reading: 'うち' }],
            meaning: { en: 'inside', vi: 'bên trong' }
          },
          {
            parts: [
              { text: '内', reading: 'ない' },
              { text: '外', reading: 'がい' }
            ],
            meaning: { en: 'inside and outside', vi: 'trong ngoài' }
          },
          {
            parts: [
              { text: '家', reading: 'か' },
              { text: '内', reading: 'ない' }
            ],
            meaning: { en: "one's wife", vi: 'vợ (của mình)' }
          }
        ]
      },
      {
        char: '外',
        meaning: { en: 'outside', vi: 'ngoại - bên ngoài' },
        onyomi: ['ガイ', 'ゲ'],
        kunyomi: ['そと', 'ほか', 'はず.す'],
        components: ['夕', '卜'],
        mnemonic: {
          en: 'Fortune-telling 卜 was done at evening 夕, out in the open.',
          vi: 'Việc bói toán 卜 làm lúc chiều tối 夕, ở ngoài trời.'
        },
        examples: [
          {
            parts: [{ text: '外', reading: 'そと' }],
            meaning: { en: 'outside', vi: 'bên ngoài' }
          },
          {
            parts: [
              { text: '外', reading: 'がい' },
              { text: '国', reading: 'こく' }
            ],
            meaning: { en: 'foreign country', vi: 'nước ngoài' }
          },
          {
            parts: [
              { text: '海', reading: 'かい' },
              { text: '外', reading: 'がい' }
            ],
            meaning: { en: 'overseas, abroad', vi: 'hải ngoại, nước ngoài' }
          }
        ]
      },
      {
        char: '遠',
        meaning: { en: 'far, distant', vi: 'viễn - xa, xa xôi' },
        onyomi: ['エン'],
        kunyomi: ['とお.い'],
        components: [],
        mnemonic: {
          en: 'A journey 辶 that stretches on over a great distance.',
          vi: 'Chặng đường 辶 kéo dài đằng đẵng.'
        },
        examples: [
          {
            parts: [
              { text: '遠', reading: 'とお' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'far, distant', vi: 'xa' }
          },
          {
            parts: [
              { text: '遠', reading: 'えん' },
              { text: '足', reading: 'そく' }
            ],
            meaning: { en: 'excursion, field trip', vi: 'dã ngoại' }
          },
          {
            parts: [
              { text: '永', reading: 'えい' },
              { text: '遠', reading: 'えん' }
            ],
            meaning: { en: 'eternity', vi: 'vĩnh viễn' }
          }
        ]
      },
      {
        char: '近',
        meaning: { en: 'near, close', vi: 'cận - gần' },
        onyomi: ['キン'],
        kunyomi: ['ちか.い'],
        components: ['辶', '斤'],
        mnemonic: {
          en: 'Just a short walk 辶 away, only an axe 斤 throw off.',
          vi: 'Chỉ vài bước 辶, gần trong tầm ném rìu 斤.'
        },
        examples: [
          {
            parts: [
              { text: '近', reading: 'ちか' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'near, close', vi: 'gần' }
          },
          {
            parts: [
              { text: '近', reading: 'きん' },
              { text: '所', reading: 'じょ' }
            ],
            meaning: { en: 'neighborhood', vi: 'hàng xóm, khu lân cận' }
          },
          {
            parts: [
              { text: '最', reading: 'さい' },
              { text: '近', reading: 'きん' }
            ],
            meaning: { en: 'recently', vi: 'gần đây' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Common verbs',
      vi: 'Động từ thường gặp'
    },
    kanji: [
      {
        char: '言',
        meaning: { en: 'say, word', vi: 'ngôn - nói, lời' },
        onyomi: ['ゲン', 'ゴン'],
        kunyomi: ['い.う', 'こと'],
        components: [],
        mnemonic: {
          en: 'Words coming out of a mouth 口, line after line.',
          vi: 'Lời nói phát ra từ miệng 口, từng hàng từng hàng.'
        },
        examples: [
          {
            parts: [
              { text: '言', reading: 'い' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to say', vi: 'nói' }
          },
          {
            parts: [
              { text: '言', reading: 'こと' },
              { text: '葉', reading: 'ば' }
            ],
            meaning: { en: 'word, language', vi: 'từ ngữ, ngôn ngữ' }
          },
          {
            parts: [
              { text: '方', reading: 'ほう' },
              { text: '言', reading: 'げん' }
            ],
            meaning: { en: 'dialect', vi: 'phương ngữ' }
          }
        ]
      },
      {
        char: '話',
        meaning: { en: 'talk, story', vi: 'thoại - nói chuyện; câu chuyện' },
        onyomi: ['ワ'],
        kunyomi: ['はな.す', 'はなし'],
        components: ['言', '舌'],
        mnemonic: {
          en: 'Working your speech 言 and your tongue 舌 to have a chat.',
          vi: 'Dùng lời nói 言 và cái lưỡi 舌 để trò chuyện.'
        },
        examples: [
          {
            parts: [
              { text: '話', reading: 'はな' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to speak, to talk', vi: 'nói chuyện' }
          },
          {
            parts: [{ text: '話', reading: 'はなし' }],
            meaning: { en: 'story, talk', vi: 'câu chuyện' }
          },
          {
            parts: [
              { text: '電', reading: 'でん' },
              { text: '話', reading: 'わ' }
            ],
            meaning: { en: 'telephone', vi: 'điện thoại' }
          }
        ]
      },
      {
        char: '聞',
        meaning: { en: 'hear, ask', vi: 'văn - nghe; hỏi' },
        onyomi: ['ブン', 'モン'],
        kunyomi: ['き.く', 'き.こえる'],
        components: ['門', '耳'],
        mnemonic: {
          en: 'An ear 耳 pressed up against the gate 門 to listen in.',
          vi: 'Cái tai 耳 áp vào cánh cổng 門 để nghe ngóng.'
        },
        examples: [
          {
            parts: [
              { text: '聞', reading: 'き' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to listen, to ask', vi: 'nghe, hỏi' }
          },
          {
            parts: [
              { text: '新', reading: 'しん' },
              { text: '聞', reading: 'ぶん' }
            ],
            meaning: { en: 'newspaper', vi: 'báo' }
          },
          {
            parts: [
              { text: '聞', reading: 'き' },
              { text: 'こえる', reading: 'こえる' }
            ],
            meaning: { en: 'to be audible', vi: 'nghe được' }
          }
        ]
      },
      {
        char: '読',
        meaning: { en: 'to read', vi: 'độc - đọc, đọc sách' },
        onyomi: ['ドク', 'トク'],
        kunyomi: ['よ.む'],
        components: [],
        mnemonic: {
          en: 'Using your speech 言 to sell 売 the words out loud.',
          vi: 'Dùng lời nói 言 để rao bán 売 con chữ thành tiếng.'
        },
        examples: [
          {
            parts: [
              { text: '読', reading: 'よ' },
              { text: 'む', reading: 'む' }
            ],
            meaning: { en: 'to read', vi: 'đọc' }
          },
          {
            parts: [
              { text: '読', reading: 'どく' },
              { text: '書', reading: 'しょ' }
            ],
            meaning: { en: 'reading', vi: 'việc đọc sách' }
          },
          {
            parts: [
              { text: '音', reading: 'おん' },
              { text: '読', reading: 'どく' }
            ],
            meaning: { en: 'reading aloud', vi: 'đọc thành tiếng' }
          }
        ]
      },
      {
        char: '書',
        meaning: { en: 'write; book', vi: 'thư - viết; sách' },
        onyomi: ['ショ'],
        kunyomi: ['か.く'],
        components: ['聿', '日'],
        mnemonic: {
          en: 'A hand grips a brush 聿 to write on paper.',
          vi: 'Bàn tay cầm bút lông 聿 viết lên giấy.'
        },
        examples: [
          {
            parts: [
              { text: '書', reading: 'か' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to write', vi: 'viết' }
          },
          {
            parts: [
              { text: '読', reading: 'どく' },
              { text: '書', reading: 'しょ' }
            ],
            meaning: { en: 'reading', vi: 'việc đọc sách' }
          },
          {
            parts: [
              { text: '辞', reading: 'じ' },
              { text: '書', reading: 'しょ' }
            ],
            meaning: { en: 'dictionary', vi: 'từ điển' }
          }
        ]
      },
      {
        char: '買',
        meaning: { en: 'to buy, purchase', vi: 'mãi - mua, mua sắm' },
        onyomi: ['バイ'],
        kunyomi: ['か.う'],
        components: ['罒', '貝'],
        mnemonic: {
          en: 'Casting a net 罒 to scoop up shells and money 貝.',
          vi: 'Chụp lưới 罒 vơ lấy vỏ sò và tiền 貝.'
        },
        examples: [
          {
            parts: [
              { text: '買', reading: 'か' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to buy', vi: 'mua' }
          },
          {
            parts: [
              { text: '買', reading: 'か' },
              { text: 'い', reading: 'い' },
              { text: '物', reading: 'もの' }
            ],
            meaning: { en: 'shopping', vi: 'mua sắm' }
          },
          {
            parts: [
              { text: '売', reading: 'ばい' },
              { text: '買', reading: 'ばい' }
            ],
            meaning: { en: 'buying and selling', vi: 'mua bán' }
          }
        ]
      },
      {
        char: '売',
        meaning: { en: 'to sell', vi: 'mại - bán, bán ra' },
        onyomi: ['バイ'],
        kunyomi: ['う.る'],
        components: [],
        mnemonic: {
          en: 'Setting goods out on display for people to take away.',
          vi: 'Bày hàng ra cho người ta mua và mang đi.'
        },
        examples: [
          {
            parts: [
              { text: '売', reading: 'う' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to sell', vi: 'bán' }
          },
          {
            parts: [
              { text: '売', reading: 'ばい' },
              { text: '店', reading: 'てん' }
            ],
            meaning: { en: 'shop, stand', vi: 'quầy bán hàng' }
          },
          {
            parts: [
              { text: '売', reading: 'ばい' },
              { text: '買', reading: 'ばい' }
            ],
            meaning: { en: 'buying and selling', vi: 'mua bán' }
          }
        ]
      },
      {
        char: '行',
        meaning: { en: 'go; line', vi: 'hành - đi; hàng' },
        onyomi: ['コウ', 'ギョウ'],
        kunyomi: ['い.く', 'おこな.う'],
        components: [],
        mnemonic: {
          en: 'A crossroads where people head off in every direction.',
          vi: 'Ngã tư nơi người ta rẽ đi khắp ngả.'
        },
        examples: [
          {
            parts: [
              { text: '行', reading: 'い' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to go', vi: 'đi' }
          },
          {
            parts: [
              { text: '銀', reading: 'ぎん' },
              { text: '行', reading: 'こう' }
            ],
            meaning: { en: 'bank', vi: 'ngân hàng' }
          },
          {
            parts: [
              { text: '旅', reading: 'りょ' },
              { text: '行', reading: 'こう' }
            ],
            meaning: { en: 'travel, trip', vi: 'du lịch' }
          }
        ]
      },
      {
        char: '来',
        meaning: { en: 'come', vi: 'lai - đến, tới' },
        onyomi: ['ライ'],
        kunyomi: ['く.る', 'きた.る'],
        components: [],
        mnemonic: {
          en: 'Ripe grain that draws people in to gather.',
          vi: 'Lúa chín thu hút người ta kéo đến.'
        },
        examples: [
          {
            parts: [
              { text: '来', reading: 'く' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to come', vi: 'đến' }
          },
          {
            parts: [
              { text: '来', reading: 'らい' },
              { text: '年', reading: 'ねん' }
            ],
            meaning: { en: 'next year', vi: 'năm sau' }
          },
          {
            parts: [
              { text: '来', reading: 'らい' },
              { text: '週', reading: 'しゅう' }
            ],
            meaning: { en: 'next week', vi: 'tuần sau' }
          }
        ]
      },
      {
        char: '帰',
        meaning: { en: 'return, go home', vi: 'quy - trở về' },
        onyomi: ['キ'],
        kunyomi: ['かえ.る'],
        components: [],
        mnemonic: {
          en: 'Coming back home to tidy up and settle in.',
          vi: 'Trở về nhà dọn dẹp và an cư.'
        },
        examples: [
          {
            parts: [
              { text: '帰', reading: 'かえ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to return, to go home', vi: 'trở về' }
          },
          {
            parts: [
              { text: '帰', reading: 'き' },
              { text: '国', reading: 'こく' }
            ],
            meaning: { en: 'returning to your country', vi: 'về nước' }
          },
          {
            parts: [
              { text: '日', reading: 'ひ' },
              { text: '帰', reading: 'がえ' },
              { text: 'り', reading: 'り' }
            ],
            meaning: { en: 'day trip', vi: 'đi về trong ngày' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Body & health',
      vi: 'Cơ thể & sức khỏe'
    },
    kanji: [
      {
        char: '心',
        meaning: { en: 'heart, mind', vi: 'tâm - trái tim, tấm lòng' },
        onyomi: ['シン'],
        kunyomi: ['こころ'],
        components: [],
        mnemonic: {
          en: 'A drawing of a heart, chambers and all.',
          vi: 'Hình vẽ trái tim, đủ cả các ngăn bên trong.'
        },
        examples: [
          {
            parts: [{ text: '心', reading: 'こころ' }],
            meaning: { en: 'heart, mind', vi: 'trái tim, tấm lòng' }
          },
          {
            parts: [
              { text: '安', reading: 'あん' },
              { text: '心', reading: 'しん' }
            ],
            meaning: { en: 'relief, peace of mind', vi: 'yên tâm' }
          },
          {
            parts: [
              { text: '中', reading: 'ちゅう' },
              { text: '心', reading: 'しん' }
            ],
            meaning: { en: 'center, core', vi: 'trung tâm' }
          }
        ]
      },
      {
        char: '体',
        meaning: { en: 'body', vi: 'thể - cơ thể, thân thể' },
        onyomi: ['タイ', 'テイ'],
        kunyomi: ['からだ'],
        components: ['亻', '木', '一'],
        mnemonic: {
          en: 'A person 亻 plus their main trunk 本 makes up the body.',
          vi: 'Người 亻 cùng phần thân gốc 本 hợp thành cơ thể.'
        },
        examples: [
          {
            parts: [{ text: '体', reading: 'からだ' }],
            meaning: { en: 'body', vi: 'cơ thể' }
          },
          {
            parts: [
              { text: '体', reading: 'たい' },
              { text: '力', reading: 'りょく' }
            ],
            meaning: { en: 'physical strength', vi: 'thể lực' }
          },
          {
            parts: [
              { text: '身', reading: 'しん' },
              { text: '体', reading: 'たい' }
            ],
            meaning: { en: 'body', vi: 'thân thể' }
          }
        ]
      },
      {
        char: '頭',
        meaning: { en: 'head', vi: 'đầu - cái đầu' },
        onyomi: ['トウ', 'ズ'],
        kunyomi: ['あたま'],
        components: ['豆', '頁'],
        mnemonic: {
          en: 'A round bean 豆 shape sitting atop the head 頁.',
          vi: 'Hình hạt đậu 豆 tròn nằm trên phần đầu 頁.'
        },
        note: {
          en: 'Read あたま for the physical head; in compounds it becomes とう (先頭) or ず (頭痛).',
          vi: 'Đọc あたま khi chỉ cái đầu; trong từ ghép thành とう (先頭) hoặc ず (頭痛).'
        },
        examples: [
          {
            parts: [{ text: '頭', reading: 'あたま' }],
            meaning: { en: 'head', vi: 'cái đầu' }
          },
          {
            parts: [
              { text: '先', reading: 'せん' },
              { text: '頭', reading: 'とう' }
            ],
            meaning: { en: 'the lead, front', vi: 'dẫn đầu' }
          },
          {
            parts: [
              { text: '頭', reading: 'ず' },
              { text: '痛', reading: 'つう' }
            ],
            meaning: { en: 'headache', vi: 'đau đầu' }
          }
        ]
      },
      {
        char: '顔',
        meaning: { en: 'face', vi: 'nhan - khuôn mặt' },
        onyomi: ['ガン'],
        kunyomi: ['かお'],
        components: [],
        mnemonic: {
          en: 'The most expressive page 頁 of a whole person.',
          vi: 'Trang 頁 biểu cảm nhất của con người.'
        },
        examples: [
          {
            parts: [{ text: '顔', reading: 'かお' }],
            meaning: { en: 'face', vi: 'khuôn mặt' }
          },
          {
            parts: [
              { text: '顔', reading: 'かお' },
              { text: '色', reading: 'いろ' }
            ],
            meaning: { en: 'complexion', vi: 'sắc mặt' }
          },
          {
            parts: [
              { text: '笑', reading: 'え' },
              { text: '顔', reading: 'がお' }
            ],
            meaning: { en: 'smiling face', vi: 'nụ cười' }
          }
        ]
      },
      {
        char: '首',
        meaning: { en: 'neck; head', vi: 'thủ - cái cổ; đầu' },
        onyomi: ['シュ'],
        kunyomi: ['くび'],
        components: [],
        mnemonic: {
          en: 'A head with hair perched on top of the neck.',
          vi: 'Cái đầu có tóc đặt trên cái cổ.'
        },
        examples: [
          {
            parts: [{ text: '首', reading: 'くび' }],
            meaning: { en: 'neck', vi: 'cổ' }
          },
          {
            parts: [
              { text: '首', reading: 'しゅ' },
              { text: '都', reading: 'と' }
            ],
            meaning: { en: 'capital city', vi: 'thủ đô' }
          },
          {
            parts: [
              { text: '手', reading: 'て' },
              { text: '首', reading: 'くび' }
            ],
            meaning: { en: 'wrist', vi: 'cổ tay' }
          }
        ]
      },
      {
        char: '毛',
        meaning: { en: 'hair, fur', vi: 'mao - lông, tóc' },
        onyomi: ['モウ'],
        kunyomi: ['け'],
        components: [],
        mnemonic: {
          en: 'A single strand of hair curling at its tip.',
          vi: 'Một sợi lông xoăn ở đầu ngọn.'
        },
        examples: [
          {
            parts: [{ text: '毛', reading: 'け' }],
            meaning: { en: 'hair, fur', vi: 'lông, tóc' }
          },
          {
            parts: [
              { text: '毛', reading: 'け' },
              { text: '糸', reading: 'いと' }
            ],
            meaning: { en: 'wool, yarn', vi: 'len' }
          },
          {
            parts: [
              { text: '毛', reading: 'け' },
              { text: '虫', reading: 'むし' }
            ],
            meaning: { en: 'caterpillar', vi: 'sâu róm' }
          }
        ]
      },
      {
        char: '声',
        meaning: { en: 'voice', vi: 'thanh - giọng, tiếng' },
        onyomi: ['セイ', 'ショウ'],
        kunyomi: ['こえ'],
        components: [],
        examples: [
          {
            parts: [{ text: '声', reading: 'こえ' }],
            meaning: { en: 'voice', vi: 'giọng nói' }
          },
          {
            parts: [
              { text: '大', reading: 'おお' },
              { text: '声', reading: 'ごえ' }
            ],
            meaning: { en: 'loud voice', vi: 'giọng lớn' }
          },
          {
            parts: [
              { text: '音', reading: 'おん' },
              { text: '声', reading: 'せい' }
            ],
            meaning: { en: 'voice, audio', vi: 'âm thanh, giọng' }
          }
        ]
      },
      {
        char: '元',
        meaning: { en: 'origin; health', vi: 'nguyên - gốc, nguồn; khỏe' },
        onyomi: ['ゲン', 'ガン'],
        kunyomi: ['もと'],
        components: ['二', '儿'],
        examples: [
          {
            parts: [
              { text: '元', reading: 'げん' },
              { text: '気', reading: 'き' }
            ],
            meaning: { en: 'healthy, energetic', vi: 'khỏe mạnh' }
          },
          {
            parts: [{ text: '元', reading: 'もと' }],
            meaning: { en: 'origin, source', vi: 'gốc, nguồn' }
          },
          {
            parts: [
              { text: '地', reading: 'じ' },
              { text: '元', reading: 'もと' }
            ],
            meaning: { en: 'local area', vi: 'địa phương' }
          }
        ]
      },
      {
        char: '太',
        meaning: { en: 'thick, fat, big', vi: 'thái - to, mập; đậm' },
        onyomi: ['タイ', 'タ'],
        kunyomi: ['ふと.い'],
        components: ['大', '丶'],
        mnemonic: {
          en: 'A big 大 person with one extra dot 丶 of bulk added on.',
          vi: 'Người to 大 thêm một chấm 丶 bề dày nữa.'
        },
        examples: [
          {
            parts: [
              { text: '太', reading: 'ふと' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'thick, fat', vi: 'to, mập, đậm' }
          },
          {
            parts: [
              { text: '太', reading: 'たい' },
              { text: '陽', reading: 'よう' }
            ],
            meaning: { en: 'the sun', vi: 'mặt trời' }
          },
          {
            parts: [
              { text: '丸', reading: 'まる' },
              { text: '太', reading: 'た' }
            ],
            meaning: { en: 'log', vi: 'khúc gỗ tròn' }
          }
        ]
      },
      {
        char: '強',
        meaning: { en: 'strong, powerful', vi: 'cường - mạnh, mạnh mẽ' },
        onyomi: ['キョウ', 'ゴウ'],
        kunyomi: ['つよ.い'],
        components: ['弓', '虫'],
        mnemonic: {
          en: 'A bow 弓 and a tough little beetle 虫: taut and hardy.',
          vi: 'Cây cung 弓 và con bọ 虫: căng và cứng cáp.'
        },
        examples: [
          {
            parts: [
              { text: '強', reading: 'つよ' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'strong', vi: 'mạnh' }
          },
          {
            parts: [
              { text: '勉', reading: 'べん' },
              { text: '強', reading: 'きょう' }
            ],
            meaning: { en: 'study', vi: 'học tập' }
          },
          {
            parts: [
              { text: '強', reading: 'きょう' },
              { text: '力', reading: 'りょく' }
            ],
            meaning: { en: 'powerful', vi: 'mạnh mẽ, cường lực' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Numbers & quantity',
      vi: 'Số lượng & đo đếm'
    },
    kanji: [
      {
        char: '万',
        meaning: { en: 'ten thousand', vi: 'vạn - vạn (10.000)' },
        onyomi: ['マン', 'バン'],
        kunyomi: [],
        components: [],
        examples: [
          {
            parts: [{ text: '万', reading: 'まん' }],
            meaning: { en: 'ten thousand', vi: 'vạn' }
          },
          {
            parts: [
              { text: '一', reading: 'いち' },
              { text: '万', reading: 'まん' }
            ],
            meaning: { en: 'ten thousand (10,000)', vi: 'mười nghìn' }
          },
          {
            parts: [
              { text: '万', reading: 'まん' },
              { text: '一', reading: 'いち' }
            ],
            meaning: { en: 'by any chance, just in case', vi: 'nhỡ đâu, vạn nhất' }
          }
        ]
      },
      {
        char: '半',
        meaning: { en: 'half', vi: 'bán - một nửa' },
        onyomi: ['ハン'],
        kunyomi: ['なか.ば'],
        components: [],
        mnemonic: {
          en: 'A vertical line slicing something evenly into two.',
          vi: 'Một nét dọc cắt vật thành hai phần bằng nhau.'
        },
        examples: [
          {
            parts: [
              { text: '半', reading: 'はん' },
              { text: '分', reading: 'ぶん' }
            ],
            meaning: { en: 'half', vi: 'một nửa' }
          },
          {
            parts: [
              { text: '半', reading: 'はん' },
              { text: '年', reading: 'とし' }
            ],
            meaning: { en: 'half a year', vi: 'nửa năm' }
          },
          {
            parts: [
              { text: '前', reading: 'ぜん' },
              { text: '半', reading: 'はん' }
            ],
            meaning: { en: 'first half', vi: 'nửa đầu' }
          }
        ]
      },
      {
        char: '分',
        meaning: { en: 'part, minute, understand', vi: 'phân - chia; phút; hiểu' },
        onyomi: ['ブン', 'フン', 'ブ'],
        kunyomi: ['わ.ける', 'わ.かる'],
        components: ['八', '刀'],
        mnemonic: {
          en: 'A knife 刀 slicing 八 something apart into portions.',
          vi: 'Con dao 刀 chia tách 八 vật ra thành từng phần.'
        },
        note: {
          en: 'Many readings: ぶん (part/portion), ふん (minute), ぶ (rate/percent).',
          vi: 'Nhiều cách đọc: ぶん (phần), ふん (phút), ぶ (tỷ lệ/phần trăm).'
        },
        examples: [
          {
            parts: [
              { text: '分', reading: 'わ' },
              { text: 'ける', reading: 'ける' }
            ],
            meaning: { en: 'to divide, to share', vi: 'chia, phân chia' }
          },
          {
            parts: [
              { text: '半', reading: 'はん' },
              { text: '分', reading: 'ぶん' }
            ],
            meaning: { en: 'half', vi: 'một nửa' }
          },
          {
            parts: [
              { text: '五', reading: 'ご' },
              { text: '分', reading: 'ふん' }
            ],
            meaning: { en: 'five minutes', vi: 'năm phút' }
          }
        ]
      },
      {
        char: '数',
        meaning: { en: 'number, count', vi: 'số - con số; đếm' },
        onyomi: ['スウ', 'ス'],
        kunyomi: ['かず', 'かぞ.える'],
        components: [],
        examples: [
          {
            parts: [{ text: '数', reading: 'かず' }],
            meaning: { en: 'number, count', vi: 'con số' }
          },
          {
            parts: [
              { text: '数', reading: 'すう' },
              { text: '学', reading: 'がく' }
            ],
            meaning: { en: 'mathematics', vi: 'toán học' }
          },
          {
            parts: [
              { text: '人', reading: 'にん' },
              { text: '数', reading: 'ずう' }
            ],
            meaning: { en: 'number of people', vi: 'số người' }
          }
        ]
      },
      {
        char: '才',
        meaning: { en: 'talent; age', vi: 'tài - tài năng; tuổi' },
        onyomi: ['サイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A sprout just breaking through the surface: raw, natural talent.',
          vi: 'Mầm cây vừa nhú lên: tài năng bẩm sinh thô sơ.'
        },
        note: {
          en: 'Commonly written for age in place of 歳 (informal), e.g. 五才 = five years old.',
          vi: 'Thường dùng viết tuổi thay cho 歳 (thân mật), vd 五才 = 5 tuổi.'
        },
        examples: [
          {
            parts: [
              { text: '天', reading: 'てん' },
              { text: '才', reading: 'さい' }
            ],
            meaning: { en: 'genius', vi: 'thiên tài' }
          },
          {
            parts: [
              { text: '才', reading: 'さい' },
              { text: '能', reading: 'のう' }
            ],
            meaning: { en: 'talent, ability', vi: 'tài năng' }
          },
          {
            parts: [
              { text: '五', reading: 'ご' },
              { text: '才', reading: 'さい' }
            ],
            meaning: { en: 'five years old', vi: '5 tuổi' }
          }
        ]
      },
      {
        char: '回',
        meaning: { en: 'times, turn, rotate', vi: 'hồi - lần; xoay' },
        onyomi: ['カイ', 'エ'],
        kunyomi: ['まわ.る', 'まわ.す'],
        components: ['囗', '口'],
        mnemonic: {
          en: 'A small box 口 spinning around inside a larger one 囗.',
          vi: 'Cái khung nhỏ 口 xoay tròn bên trong khung lớn 囗.'
        },
        examples: [
          {
            parts: [
              { text: '回', reading: 'まわ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to turn, to spin', vi: 'xoay, quay' }
          },
          {
            parts: [
              { text: '一', reading: 'いっ' },
              { text: '回', reading: 'かい' }
            ],
            meaning: { en: 'once, one time', vi: 'một lần' }
          },
          {
            parts: [
              { text: '今', reading: 'こん' },
              { text: '回', reading: 'かい' }
            ],
            meaning: { en: 'this time', vi: 'lần này' }
          }
        ]
      },
      {
        char: '番',
        meaning: { en: 'number, turn, guard', vi: 'phiên - số thứ tự; phiên gác' },
        onyomi: ['バン'],
        kunyomi: [],
        components: ['釆', '田'],
        mnemonic: {
          en: 'Sorting 釆 the plots of a field 田 into a set order.',
          vi: 'Phân loại 釆 các thửa ruộng 田 theo thứ tự.'
        },
        examples: [
          {
            parts: [
              { text: '番', reading: 'ばん' },
              { text: '号', reading: 'ごう' }
            ],
            meaning: { en: 'number (ID)', vi: 'số hiệu' }
          },
          {
            parts: [
              { text: '一', reading: 'いち' },
              { text: '番', reading: 'ばん' }
            ],
            meaning: { en: 'number one, most', vi: 'số một, nhất' }
          },
          {
            parts: [
              { text: '交', reading: 'こう' },
              { text: '番', reading: 'ばん' }
            ],
            meaning: { en: 'police box', vi: 'chốt cảnh sát' }
          }
        ]
      },
      {
        char: '何',
        meaning: { en: 'what', vi: 'hà - cái gì, gì' },
        onyomi: ['カ'],
        kunyomi: ['なに', 'なん'],
        components: [],
        mnemonic: {
          en: 'A person 亻 tilting their head to ask what is going on.',
          vi: 'Người 亻 nghiêng đầu hỏi có chuyện gì.'
        },
        examples: [
          {
            parts: [{ text: '何', reading: 'なに' }],
            meaning: { en: 'what', vi: 'cái gì' }
          },
          {
            parts: [
              { text: '何', reading: 'なん' },
              { text: '時', reading: 'じ' }
            ],
            meaning: { en: 'what time', vi: 'mấy giờ' }
          },
          {
            parts: [
              { text: '何', reading: 'なん' },
              { text: '人', reading: 'にん' }
            ],
            meaning: { en: 'how many people', vi: 'mấy người' }
          }
        ]
      },
      {
        char: '毎',
        meaning: { en: 'every', vi: 'mỗi - mỗi, hằng' },
        onyomi: ['マイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A mother 母 giving birth over and over, happening every single time.',
          vi: 'Người mẹ 母 sinh nở hết lần này đến lần khác, lần nào cũng vậy.'
        },
        examples: [
          {
            parts: [
              { text: '毎', reading: 'まい' },
              { text: '日', reading: 'にち' }
            ],
            meaning: { en: 'every day', vi: 'mỗi ngày' }
          },
          {
            parts: [
              { text: '毎', reading: 'まい' },
              { text: '年', reading: 'とし' }
            ],
            meaning: { en: 'every year', vi: 'mỗi năm' }
          },
          {
            parts: [
              { text: '毎', reading: 'まい' },
              { text: '週', reading: 'しゅう' }
            ],
            meaning: { en: 'every week', vi: 'mỗi tuần' }
          }
        ]
      },
      {
        char: '同',
        meaning: { en: 'same, identical', vi: 'đồng - giống nhau, cùng' },
        onyomi: ['ドウ'],
        kunyomi: ['おな.じ'],
        components: ['冂', '一', '口'],
        mnemonic: {
          en: 'One 一 mouth 口 speaking under the same roof 冂: everyone in agreement.',
          vi: 'Một 一 cái miệng 口 nói dưới cùng mái 冂: tất cả đồng lòng.'
        },
        examples: [
          {
            parts: [
              { text: '同', reading: 'おな' },
              { text: 'じ', reading: 'じ' }
            ],
            meaning: { en: 'same', vi: 'giống nhau' }
          },
          {
            parts: [
              { text: '同', reading: 'どう' },
              { text: '時', reading: 'じ' }
            ],
            meaning: { en: 'simultaneous', vi: 'đồng thời' }
          },
          {
            parts: [
              { text: '一', reading: 'いち' },
              { text: '同', reading: 'どう' }
            ],
            meaning: { en: 'everyone, all', vi: 'tất cả mọi người' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Learning & thinking',
      vi: 'Học tập & tư duy'
    },
    kanji: [
      {
        char: '教',
        meaning: { en: 'to teach, instruct', vi: 'giáo - dạy, giảng dạy' },
        onyomi: ['キョウ'],
        kunyomi: ['おし.える', 'おそ.わる'],
        components: ['子', '攵'],
        mnemonic: {
          en: 'Guiding a child 子 along with a firm tap 攵 is how you teach.',
          vi: 'Dìu dắt đứa trẻ 子 kèm những cái nhắc nhở 攵 chính là dạy học.'
        },
        examples: [
          {
            parts: [
              { text: '教', reading: 'おし' },
              { text: 'える', reading: 'える' }
            ],
            meaning: { en: 'to teach', vi: 'dạy' }
          },
          {
            parts: [
              { text: '教', reading: 'きょう' },
              { text: '室', reading: 'しつ' }
            ],
            meaning: { en: 'classroom', vi: 'phòng học' }
          },
          {
            parts: [
              { text: '教', reading: 'きょう' },
              { text: '科', reading: 'か' },
              { text: '書', reading: 'しょ' }
            ],
            meaning: { en: 'textbook', vi: 'sách giáo khoa' }
          }
        ]
      },
      {
        char: '科',
        meaning: { en: 'subject, department', vi: 'khoa - môn học, khoa' },
        onyomi: ['カ'],
        kunyomi: [],
        components: ['禾', '斗'],
        mnemonic: {
          en: 'Measuring out grain 禾 with a dipper 斗, sorting it into categories.',
          vi: 'Đong lúa 禾 bằng cái đấu 斗, phân ra thành từng loại.'
        },
        examples: [
          {
            parts: [
              { text: '科', reading: 'か' },
              { text: '学', reading: 'がく' }
            ],
            meaning: { en: 'science', vi: 'khoa học' }
          },
          {
            parts: [
              { text: '教', reading: 'きょう' },
              { text: '科', reading: 'か' }
            ],
            meaning: { en: 'subject (school)', vi: 'môn học' }
          },
          {
            parts: [
              { text: '内', reading: 'ない' },
              { text: '科', reading: 'か' }
            ],
            meaning: { en: 'internal medicine', vi: 'nội khoa' }
          }
        ]
      },
      {
        char: '算',
        meaning: { en: 'calculate', vi: 'toán - tính toán' },
        onyomi: ['サン'],
        kunyomi: [],
        components: ['竹', '目', '廾'],
        mnemonic: {
          en: 'Counting on bamboo 竹 rods, eyes 目 fixed and both hands 廾 busy: doing sums.',
          vi: 'Đếm trên que tre 竹, mắt 目 chăm chú, hai tay 廾 bận rộn: đang tính toán.'
        },
        examples: [
          {
            parts: [
              { text: '算', reading: 'さん' },
              { text: '数', reading: 'すう' }
            ],
            meaning: { en: 'arithmetic', vi: 'số học' }
          },
          {
            parts: [
              { text: '計', reading: 'けい' },
              { text: '算', reading: 'さん' }
            ],
            meaning: { en: 'calculation', vi: 'phép tính' }
          },
          {
            parts: [
              { text: '暗', reading: 'あん' },
              { text: '算', reading: 'ざん' }
            ],
            meaning: { en: 'mental arithmetic', vi: 'tính nhẩm' }
          }
        ]
      },
      {
        char: '図',
        meaning: { en: 'diagram, plan', vi: 'đồ - sơ đồ, bản vẽ' },
        onyomi: ['ズ', 'ト'],
        kunyomi: ['はか.る'],
        components: [],
        examples: [
          {
            parts: [
              { text: '地', reading: 'ち' },
              { text: '図', reading: 'ず' }
            ],
            meaning: { en: 'map', vi: 'bản đồ' }
          },
          {
            parts: [
              { text: '図', reading: 'と' },
              { text: '書', reading: 'しょ' },
              { text: '館', reading: 'かん' }
            ],
            meaning: { en: 'library', vi: 'thư viện' }
          },
          {
            parts: [
              { text: '図', reading: 'ず' },
              { text: '工', reading: 'こう' }
            ],
            meaning: { en: 'arts and crafts', vi: 'mỹ thuật thủ công' }
          }
        ]
      },
      {
        char: '理',
        meaning: { en: 'reason, logic; manage', vi: 'lý - lẽ, lý; quản lý' },
        onyomi: ['リ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Polishing a gem to follow its natural grain, finding the reason within.',
          vi: 'Mài viên ngọc theo đường vân tự nhiên, tìm ra cái lý bên trong.'
        },
        examples: [
          {
            parts: [
              { text: '理', reading: 'り' },
              { text: '由', reading: 'ゆう' }
            ],
            meaning: { en: 'reason', vi: 'lý do' }
          },
          {
            parts: [
              { text: '料', reading: 'りょう' },
              { text: '理', reading: 'り' }
            ],
            meaning: { en: 'cooking, cuisine', vi: 'món ăn, nấu ăn' }
          },
          {
            parts: [
              { text: '無', reading: 'む' },
              { text: '理', reading: 'り' }
            ],
            meaning: { en: 'impossible, unreasonable', vi: 'vô lý, không thể' }
          }
        ]
      },
      {
        char: '考',
        meaning: { en: 'to think, consider', vi: 'khảo - suy nghĩ, cân nhắc' },
        onyomi: ['コウ'],
        kunyomi: ['かんが.える'],
        components: [],
        mnemonic: {
          en: 'An elder 耂 bent over, mulling something over carefully.',
          vi: 'Người già 耂 cúi mình, ngẫm nghĩ điều gì đó thật kỹ.'
        },
        examples: [
          {
            parts: [
              { text: '考', reading: 'かんが' },
              { text: 'える', reading: 'える' }
            ],
            meaning: { en: 'to think, to consider', vi: 'suy nghĩ' }
          },
          {
            parts: [
              { text: '参', reading: 'さん' },
              { text: '考', reading: 'こう' }
            ],
            meaning: { en: 'reference', vi: 'tham khảo' }
          },
          {
            parts: [
              { text: '思', reading: 'し' },
              { text: '考', reading: 'こう' }
            ],
            meaning: { en: 'thought, thinking', vi: 'tư duy' }
          }
        ]
      },
      {
        char: '知',
        meaning: { en: 'to know, be aware of', vi: 'tri - biết, hiểu biết' },
        onyomi: ['チ'],
        kunyomi: ['し.る'],
        components: ['矢', '口'],
        mnemonic: {
          en: 'Words from your mouth 口 as straight and sure as an arrow 矢: you know it.',
          vi: 'Lời từ miệng 口 thẳng và chắc như mũi tên 矢: bạn biết rõ điều đó.'
        },
        examples: [
          {
            parts: [
              { text: '知', reading: 'し' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to know', vi: 'biết' }
          },
          {
            parts: [
              { text: '知', reading: 'ち' },
              { text: '人', reading: 'じん' }
            ],
            meaning: { en: 'acquaintance', vi: 'người quen' }
          },
          {
            parts: [
              { text: '知', reading: 'ち' },
              { text: '識', reading: 'しき' }
            ],
            meaning: { en: 'knowledge', vi: 'kiến thức' }
          }
        ]
      },
      {
        char: '作',
        meaning: { en: 'make, create', vi: 'tác - làm, tạo' },
        onyomi: ['サク', 'サ'],
        kunyomi: ['つく.る'],
        components: [],
        mnemonic: {
          en: 'A person 亻 crafting something with their own hands.',
          vi: 'Người 亻 dùng chính đôi tay tạo ra thứ gì đó.'
        },
        examples: [
          {
            parts: [
              { text: '作', reading: 'つく' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to make, to create', vi: 'làm, tạo ra' }
          },
          {
            parts: [
              { text: '作', reading: 'さく' },
              { text: '文', reading: 'ぶん' }
            ],
            meaning: { en: 'composition, essay', vi: 'bài văn' }
          },
          {
            parts: [
              { text: '工', reading: 'こう' },
              { text: '作', reading: 'さく' }
            ],
            meaning: { en: 'handicraft', vi: 'thủ công' }
          }
        ]
      },
      {
        char: '工',
        meaning: { en: 'craft, construction', vi: 'công - thợ, chế tạo' },
        onyomi: ['コウ', 'ク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A craftsman tool or ruler, standing upright.',
          vi: 'Cây thước hay dụng cụ của người thợ, dựng đứng.'
        },
        examples: [
          {
            parts: [
              { text: '工', reading: 'こう' },
              { text: '場', reading: 'じょう' }
            ],
            meaning: { en: 'factory', vi: 'nhà máy' }
          },
          {
            parts: [
              { text: '工', reading: 'こう' },
              { text: '事', reading: 'じ' }
            ],
            meaning: { en: 'construction work', vi: 'công trình, thi công' }
          },
          {
            parts: [
              { text: '大', reading: 'だい' },
              { text: '工', reading: 'く' }
            ],
            meaning: { en: 'carpenter', vi: 'thợ mộc' }
          }
        ]
      },
      {
        char: '用',
        meaning: {
          en: 'to use, make use of; a task or business to attend to',
          vi: 'dụng - dùng, sử dụng; việc, công việc cần làm'
        },
        onyomi: ['ヨウ'],
        kunyomi: ['もち.いる'],
        components: [],
        examples: [
          {
            parts: [
              { text: '用', reading: 'よう' },
              { text: '事', reading: 'じ' }
            ],
            meaning: { en: 'errand, business', vi: 'việc bận' }
          },
          {
            parts: [
              { text: '使', reading: 'し' },
              { text: '用', reading: 'よう' }
            ],
            meaning: { en: 'use', vi: 'sử dụng' }
          },
          {
            parts: [
              { text: '用', reading: 'よう' },
              { text: '意', reading: 'い' }
            ],
            meaning: { en: 'preparation', vi: 'sự chuẩn bị' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Places & buildings',
      vi: 'Nơi chốn & công trình'
    },
    kanji: [
      {
        char: '店',
        meaning: { en: 'shop, store', vi: 'điếm - cửa hàng' },
        onyomi: ['テン'],
        kunyomi: ['みせ'],
        components: ['广', '卜', '口'],
        mnemonic: {
          en: 'A building under a wide roof 广 where goods are set out and sold.',
          vi: 'Toà nhà dưới mái rộng 广 nơi bày ra bán hàng hoá.'
        },
        examples: [
          {
            parts: [{ text: '店', reading: 'みせ' }],
            meaning: { en: 'shop, store', vi: 'cửa hàng' }
          },
          {
            parts: [
              { text: '書', reading: 'しょ' },
              { text: '店', reading: 'てん' }
            ],
            meaning: { en: 'bookstore', vi: 'hiệu sách' }
          },
          {
            parts: [
              { text: '店', reading: 'てん' },
              { text: '員', reading: 'いん' }
            ],
            meaning: { en: 'shop clerk', vi: 'nhân viên bán hàng' }
          }
        ]
      },
      {
        char: '室',
        meaning: { en: 'room', vi: 'thất - căn phòng' },
        onyomi: ['シツ'],
        kunyomi: ['むろ'],
        components: ['宀', '至'],
        mnemonic: {
          en: 'A place under a roof 宀 that you finally arrive 至 at: a room.',
          vi: 'Nơi dưới mái nhà 宀 mà bạn bước tới 至: một căn phòng.'
        },
        examples: [
          {
            parts: [
              { text: '教', reading: 'きょう' },
              { text: '室', reading: 'しつ' }
            ],
            meaning: { en: 'classroom', vi: 'phòng học' }
          },
          {
            parts: [
              { text: '室', reading: 'しつ' },
              { text: '内', reading: 'ない' }
            ],
            meaning: { en: 'indoors', vi: 'trong phòng' }
          },
          {
            parts: [
              { text: '和', reading: 'わ' },
              { text: '室', reading: 'しつ' }
            ],
            meaning: { en: 'Japanese-style room', vi: 'phòng kiểu Nhật' }
          }
        ]
      },
      {
        char: '場',
        meaning: { en: 'place, spot', vi: 'trường - nơi chốn, chỗ' },
        onyomi: ['ジョウ'],
        kunyomi: ['ば'],
        components: ['土', '日'],
        mnemonic: {
          en: 'A patch of earth 土 out in the sun 日: an open place or spot.',
          vi: 'Một mảnh đất 土 ngoài nắng 日: một nơi chốn, khoảng trống.'
        },
        examples: [
          {
            parts: [
              { text: '場', reading: 'ば' },
              { text: '所', reading: 'しょ' }
            ],
            meaning: { en: 'place, location', vi: 'nơi chốn, địa điểm' }
          },
          {
            parts: [
              { text: '会', reading: 'かい' },
              { text: '場', reading: 'じょう' }
            ],
            meaning: { en: 'venue', vi: 'hội trường, địa điểm' }
          },
          {
            parts: [
              { text: '工', reading: 'こう' },
              { text: '場', reading: 'じょう' }
            ],
            meaning: { en: 'factory', vi: 'nhà máy' }
          }
        ]
      },
      {
        char: '社',
        meaning: { en: 'company; shrine', vi: 'xã - công ty; đền' },
        onyomi: ['シャ'],
        kunyomi: ['やしろ'],
        components: ['礻', '土'],
        mnemonic: {
          en: 'An altar 礻 to the god of the earth 土: a shrine, and later a company.',
          vi: 'Bàn thờ 礻 thần đất 土: ngôi đền, về sau là công ty.'
        },
        examples: [
          {
            parts: [
              { text: '会', reading: 'かい' },
              { text: '社', reading: 'しゃ' }
            ],
            meaning: { en: 'company', vi: 'công ty' }
          },
          {
            parts: [
              { text: '神', reading: 'じん' },
              { text: '社', reading: 'じゃ' }
            ],
            meaning: { en: 'shrine', vi: 'đền thờ' }
          },
          {
            parts: [
              { text: '社', reading: 'しゃ' },
              { text: '会', reading: 'かい' }
            ],
            meaning: { en: 'society', vi: 'xã hội' }
          }
        ]
      },
      {
        char: '会',
        meaning: { en: 'meeting; to meet', vi: 'hội - gặp gỡ; hội họp' },
        onyomi: ['カイ', 'エ'],
        kunyomi: ['あ.う'],
        components: [],
        mnemonic: {
          en: 'People gathering together under one roof to meet.',
          vi: 'Mọi người tụ lại dưới một mái để gặp gỡ.'
        },
        examples: [
          {
            parts: [
              { text: '会', reading: 'あ' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to meet', vi: 'gặp' }
          },
          {
            parts: [
              { text: '会', reading: 'かい' },
              { text: '話', reading: 'わ' }
            ],
            meaning: { en: 'conversation', vi: 'hội thoại' }
          },
          {
            parts: [
              { text: '大', reading: 'たい' },
              { text: '会', reading: 'かい' }
            ],
            meaning: { en: 'tournament, convention', vi: 'đại hội' }
          }
        ]
      },
      {
        char: '市',
        meaning: { en: 'city; market', vi: 'thị - thành phố; chợ' },
        onyomi: ['シ'],
        kunyomi: ['いち'],
        components: ['亠', '巾'],
        mnemonic: {
          en: 'A cloth 巾 banner hung up 亠 where a market and city gather.',
          vi: 'Tấm vải 巾 treo lên 亠 nơi họp chợ và thành phố.'
        },
        examples: [
          {
            parts: [
              { text: '市', reading: 'いち' },
              { text: '場', reading: 'ば' }
            ],
            meaning: { en: 'market', vi: 'chợ' }
          },
          {
            parts: [
              { text: '都', reading: 'と' },
              { text: '市', reading: 'し' }
            ],
            meaning: { en: 'city', vi: 'đô thị' }
          },
          {
            parts: [
              { text: '市', reading: 'し' },
              { text: '長', reading: 'ちょう' }
            ],
            meaning: { en: 'mayor', vi: 'thị trưởng' }
          }
        ]
      },
      {
        char: '京',
        meaning: { en: 'capital', vi: 'kinh - kinh đô' },
        onyomi: ['キョウ', 'ケイ'],
        kunyomi: [],
        components: ['亠', '口', '小'],
        mnemonic: {
          en: 'A tall gatehouse rising above the streets: the capital.',
          vi: 'Toà cổng cao sừng sững giữa phố phường: kinh đô.'
        },
        examples: [
          {
            parts: [
              { text: '東', reading: 'とう' },
              { text: '京', reading: 'きょう' }
            ],
            meaning: { en: 'Tokyo', vi: 'Tokyo' }
          },
          {
            parts: [
              { text: '京', reading: 'きょう' },
              { text: '都', reading: 'と' }
            ],
            meaning: { en: 'Kyoto', vi: 'Kyoto' }
          },
          {
            parts: [
              { text: '上', reading: 'じょう' },
              { text: '京', reading: 'きょう' }
            ],
            meaning: { en: 'going to the capital', vi: 'lên kinh đô' }
          }
        ]
      },
      {
        char: '国',
        meaning: { en: 'country', vi: 'quốc - đất nước' },
        onyomi: ['コク'],
        kunyomi: ['くに'],
        components: ['囗', '玉'],
        mnemonic: {
          en: 'A jewel 玉 (the ruler) enclosed by a border 囗: a country.',
          vi: 'Viên ngọc 玉 (nhà vua) trong vòng biên giới 囗: một đất nước.'
        },
        examples: [
          {
            parts: [{ text: '国', reading: 'くに' }],
            meaning: { en: 'country', vi: 'đất nước' }
          },
          {
            parts: [
              { text: '外', reading: 'がい' },
              { text: '国', reading: 'こく' }
            ],
            meaning: { en: 'foreign country', vi: 'nước ngoài' }
          },
          {
            parts: [
              { text: '中', reading: 'ちゅう' },
              { text: '国', reading: 'ごく' }
            ],
            meaning: { en: 'China', vi: 'Trung Quốc' }
          }
        ]
      },
      {
        char: '園',
        meaning: { en: 'garden, park', vi: 'viên - vườn, công viên' },
        onyomi: ['エン'],
        kunyomi: ['その'],
        components: [],
        examples: [
          {
            parts: [
              { text: '公', reading: 'こう' },
              { text: '園', reading: 'えん' }
            ],
            meaning: { en: 'park', vi: 'công viên' }
          },
          {
            parts: [
              { text: '動', reading: 'どう' },
              { text: '物', reading: 'ぶつ' },
              { text: '園', reading: 'えん' }
            ],
            meaning: { en: 'zoo', vi: 'sở thú' }
          },
          {
            parts: [
              { text: '学', reading: 'がく' },
              { text: '園', reading: 'えん' }
            ],
            meaning: { en: 'academy, campus', vi: 'học viện' }
          }
        ]
      },
      {
        char: '道',
        meaning: { en: 'road, way', vi: 'đạo - con đường; đạo' },
        onyomi: ['ドウ', 'トウ'],
        kunyomi: ['みち'],
        components: ['辶', '首'],
        mnemonic: {
          en: 'Moving forward 辶 in the direction your head 首 faces: the road, the way.',
          vi: 'Bước đi 辶 theo hướng cái đầu 首 hướng tới: con đường, đạo.'
        },
        examples: [
          {
            parts: [{ text: '道', reading: 'みち' }],
            meaning: { en: 'road, path', vi: 'con đường' }
          },
          {
            parts: [
              { text: '道', reading: 'どう' },
              { text: '路', reading: 'ろ' }
            ],
            meaning: { en: 'road, roadway', vi: 'đường sá' }
          },
          {
            parts: [
              { text: '書', reading: 'しょ' },
              { text: '道', reading: 'どう' }
            ],
            meaning: { en: 'calligraphy', vi: 'thư pháp' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Movement & food',
      vi: 'Di chuyển & thức ăn'
    },
    kanji: [
      {
        char: '走',
        meaning: { en: 'to run', vi: 'tẩu - chạy, chạy bộ' },
        onyomi: ['ソウ'],
        kunyomi: ['はし.る'],
        components: [],
        mnemonic: {
          en: 'A person leaning forward, legs pumping hard to run.',
          vi: 'Người đổ về phía trước, chân sải mạnh để chạy.'
        },
        examples: [
          {
            parts: [
              { text: '走', reading: 'はし' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to run', vi: 'chạy' }
          },
          {
            parts: [
              { text: '競', reading: 'きょう' },
              { text: '走', reading: 'そう' }
            ],
            meaning: { en: 'a race', vi: 'cuộc đua chạy' }
          },
          {
            parts: [
              { text: '走', reading: 'そう' },
              { text: '者', reading: 'しゃ' }
            ],
            meaning: { en: 'runner', vi: 'người chạy, vận động viên chạy' }
          }
        ]
      },
      {
        char: '歩',
        meaning: { en: 'to walk', vi: 'bộ - đi bộ, bước đi' },
        onyomi: ['ホ', 'ブ'],
        kunyomi: ['ある.く', 'あゆ.む'],
        components: [],
        mnemonic: {
          en: 'One foot 止 after another, taking steps: walking.',
          vi: 'Đặt chân 止 nối chân, từng bước một: đi bộ.'
        },
        examples: [
          {
            parts: [
              { text: '歩', reading: 'ある' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to walk', vi: 'đi bộ' }
          },
          {
            parts: [
              { text: '散', reading: 'さん' },
              { text: '歩', reading: 'ぽ' }
            ],
            meaning: { en: 'a walk, a stroll', vi: 'đi dạo' }
          },
          {
            parts: [
              { text: '歩', reading: 'ほ' },
              { text: '道', reading: 'どう' }
            ],
            meaning: { en: 'sidewalk', vi: 'vỉa hè' }
          }
        ]
      },
      {
        char: '止',
        meaning: { en: 'to stop', vi: 'chỉ - dừng, ngừng lại' },
        onyomi: ['シ'],
        kunyomi: ['と.まる', 'と.める'],
        components: [],
        mnemonic: {
          en: 'A footprint that has come to rest in one place: to stop.',
          vi: 'Dấu chân dừng hẳn lại một chỗ: dừng, ngừng.'
        },
        examples: [
          {
            parts: [
              { text: '止', reading: 'と' },
              { text: 'まる', reading: 'まる' }
            ],
            meaning: { en: 'to stop, to halt', vi: 'dừng lại' }
          },
          {
            parts: [
              { text: '中', reading: 'ちゅう' },
              { text: '止', reading: 'し' }
            ],
            meaning: { en: 'cancellation, suspension', vi: 'đình chỉ, huỷ bỏ' }
          },
          {
            parts: [
              { text: '禁', reading: 'きん' },
              { text: '止', reading: 'し' }
            ],
            meaning: { en: 'prohibition', vi: 'cấm' }
          }
        ]
      },
      {
        char: '通',
        meaning: { en: 'pass through; commute', vi: 'thông - đi qua, thông suốt; đi lại' },
        onyomi: ['ツウ', 'ツ'],
        kunyomi: ['とお.る', 'かよ.う'],
        components: [],
        mnemonic: {
          en: 'Moving 辶 straight through with nothing in the way: passing through.',
          vi: 'Di chuyển 辶 xuyên suốt không gì cản: đi qua, thông suốt.'
        },
        examples: [
          {
            parts: [
              { text: '通', reading: 'とお' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to pass, to go through', vi: 'đi qua' }
          },
          {
            parts: [
              { text: '通', reading: 'かよ' },
              { text: 'う', reading: 'う' }
            ],
            meaning: {
              en: 'to commute, to attend regularly',
              vi: 'đi lại thường xuyên (đi học, đi làm)'
            }
          },
          {
            parts: [
              { text: '交', reading: 'こう' },
              { text: '通', reading: 'つう' }
            ],
            meaning: { en: 'traffic', vi: 'giao thông' }
          }
        ]
      },
      {
        char: '引',
        meaning: { en: 'to pull; lead', vi: 'dẫn - kéo, lôi; dẫn dắt' },
        onyomi: ['イン'],
        kunyomi: ['ひ.く'],
        components: ['弓', '丨'],
        mnemonic: {
          en: 'Drawing back the string of a bow 弓 along a line 丨: to pull.',
          vi: 'Kéo dây cung 弓 dọc theo một đường 丨: kéo, lôi.'
        },
        examples: [
          {
            parts: [
              { text: '引', reading: 'ひ' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to pull, to draw', vi: 'kéo, rút' }
          },
          {
            parts: [
              { text: '引', reading: 'いん' },
              { text: '力', reading: 'りょく' }
            ],
            meaning: { en: 'gravity, attraction', vi: 'lực hút, lực hấp dẫn' }
          },
          {
            parts: [
              { text: '字', reading: 'じ' },
              { text: '引', reading: 'びき' }
            ],
            meaning: { en: 'dictionary', vi: 'từ điển' }
          }
        ]
      },
      {
        char: '食',
        meaning: { en: 'to eat; food', vi: 'thực - ăn; thức ăn' },
        onyomi: ['ショク', 'ジキ'],
        kunyomi: ['た.べる', 'く.う'],
        components: [],
        mnemonic: {
          en: 'Gathering under a roof around a bowl of rice to eat.',
          vi: 'Quây quần dưới mái nhà quanh bát cơm để ăn.'
        },
        examples: [
          {
            parts: [
              { text: '食', reading: 'た' },
              { text: 'べる', reading: 'べる' }
            ],
            meaning: { en: 'to eat', vi: 'ăn' }
          },
          {
            parts: [
              { text: '食', reading: 'しょく' },
              { text: '事', reading: 'じ' }
            ],
            meaning: { en: 'meal', vi: 'bữa ăn' }
          },
          {
            parts: [
              { text: '朝', reading: 'ちょう' },
              { text: '食', reading: 'しょく' }
            ],
            meaning: { en: 'breakfast', vi: 'bữa sáng' }
          }
        ]
      },
      {
        char: '米',
        meaning: { en: 'rice; America (abbrev.)', vi: 'mễ - gạo; (viết tắt) nước Mỹ' },
        onyomi: ['ベイ', 'マイ'],
        kunyomi: ['こめ'],
        components: [],
        mnemonic: {
          en: 'Grains scattering off a rice stalk in every direction.',
          vi: 'Những hạt gạo văng ra khắp phía từ bông lúa.'
        },
        note: {
          en: 'Also abbreviates America (アメリカ), e.g. 米国 = the USA.',
          vi: 'Còn là chữ viết tắt của nước Mỹ (アメリカ), vd 米国 = Hoa Kỳ.'
        },
        examples: [
          {
            parts: [{ text: '米', reading: 'こめ' }],
            meaning: { en: 'rice (uncooked)', vi: 'gạo' }
          },
          {
            parts: [
              { text: '新', reading: 'しん' },
              { text: '米', reading: 'まい' }
            ],
            meaning: { en: 'new rice; a novice', vi: 'gạo mới; người mới vào nghề' }
          },
          {
            parts: [
              { text: '米', reading: 'べい' },
              { text: '国', reading: 'こく' }
            ],
            meaning: { en: 'the United States', vi: 'nước Mỹ' }
          }
        ]
      },
      {
        char: '肉',
        meaning: { en: 'meat, flesh', vi: 'nhục - thịt' },
        onyomi: ['ニク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A slab of meat with its marbled grain drawn inside.',
          vi: 'Một miếng thịt với thớ vân vẽ bên trong.'
        },
        examples: [
          {
            parts: [{ text: '肉', reading: 'にく' }],
            meaning: { en: 'meat', vi: 'thịt' }
          },
          {
            parts: [
              { text: '牛', reading: 'ぎゅう' },
              { text: '肉', reading: 'にく' }
            ],
            meaning: { en: 'beef', vi: 'thịt bò' }
          },
          {
            parts: [
              { text: '肉', reading: 'にく' },
              { text: '体', reading: 'たい' }
            ],
            meaning: { en: 'the physical body', vi: 'thể xác' }
          }
        ]
      },
      {
        char: '茶',
        meaning: { en: 'tea', vi: 'trà - trà, chè' },
        onyomi: ['チャ', 'サ'],
        kunyomi: [],
        components: ['艹', '木'],
        mnemonic: {
          en: 'A leafy plant 艹 grown on a bush 木, brewed as tea.',
          vi: 'Loài cây lá 艹 mọc trên cây bụi 木, pha thành trà.'
        },
        examples: [
          {
            parts: [
              { text: 'お', reading: 'お' },
              { text: '茶', reading: 'ちゃ' }
            ],
            meaning: { en: 'tea', vi: 'trà' }
          },
          {
            parts: [
              { text: '茶', reading: 'ちゃ' },
              { text: '色', reading: 'いろ' }
            ],
            meaning: { en: 'brown (color)', vi: 'màu nâu' }
          },
          {
            parts: [
              { text: '紅', reading: 'こう' },
              { text: '茶', reading: 'ちゃ' }
            ],
            meaning: { en: 'black tea', vi: 'hồng trà' }
          }
        ]
      },
      {
        char: '麦',
        meaning: { en: 'wheat, barley', vi: 'mạch - lúa mì, lúa mạch' },
        onyomi: ['バク'],
        kunyomi: ['むぎ'],
        components: [],
        mnemonic: {
          en: 'A stalk of grain with spreading roots, harvested as wheat.',
          vi: 'Một cây ngũ cốc có rễ tỏa ra, thu hoạch làm lúa mì.'
        },
        examples: [
          {
            parts: [{ text: '麦', reading: 'むぎ' }],
            meaning: { en: 'wheat, barley', vi: 'lúa mì, lúa mạch' }
          },
          {
            parts: [
              { text: '小', reading: 'こ' },
              { text: '麦', reading: 'むぎ' }
            ],
            meaning: { en: 'wheat', vi: 'lúa mì' }
          },
          {
            parts: [
              { text: '麦', reading: 'むぎ' },
              { text: '茶', reading: 'ちゃ' }
            ],
            meaning: { en: 'barley tea', vi: 'trà lúa mạch' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Weather & landscape',
      vi: 'Thời tiết & phong cảnh'
    },
    kanji: [
      {
        char: '雪',
        meaning: { en: 'snow', vi: 'tuyết - tuyết' },
        onyomi: ['セツ'],
        kunyomi: ['ゆき'],
        components: [],
        mnemonic: {
          en: 'Rain 雨 turned cold and white, falling as snow.',
          vi: 'Mưa 雨 hoá lạnh và trắng, rơi xuống thành tuyết.'
        },
        examples: [
          {
            parts: [{ text: '雪', reading: 'ゆき' }],
            meaning: { en: 'snow', vi: 'tuyết' }
          },
          {
            parts: [
              { text: '大', reading: 'おお' },
              { text: '雪', reading: 'ゆき' }
            ],
            meaning: { en: 'heavy snow', vi: 'tuyết lớn' }
          },
          {
            parts: [
              { text: '雪', reading: 'ゆき' },
              { text: '国', reading: 'ぐに' }
            ],
            meaning: { en: 'snow country', vi: 'xứ tuyết' }
          }
        ]
      },
      {
        char: '雲',
        meaning: { en: 'cloud', vi: 'vân - mây, đám mây' },
        onyomi: ['ウン'],
        kunyomi: ['くも'],
        components: [],
        mnemonic: {
          en: 'Rain 雨 gathering up above into billowing clouds.',
          vi: 'Mưa 雨 tụ lại phía trên thành những đám mây cuồn cuộn.'
        },
        examples: [
          {
            parts: [{ text: '雲', reading: 'くも' }],
            meaning: { en: 'cloud', vi: 'mây' }
          },
          {
            parts: [
              { text: '雨', reading: 'あま' },
              { text: '雲', reading: 'ぐも' }
            ],
            meaning: { en: 'rain cloud', vi: 'mây mưa' }
          },
          {
            parts: [
              { text: '星', reading: 'せい' },
              { text: '雲', reading: 'うん' }
            ],
            meaning: { en: 'nebula', vi: 'tinh vân' }
          }
        ]
      },
      {
        char: '風',
        meaning: { en: 'wind; style', vi: 'phong - gió; phong cách' },
        onyomi: ['フウ', 'フ'],
        kunyomi: ['かぜ', 'かざ'],
        components: ['几', '虫'],
        mnemonic: {
          en: 'Wind sweeping a little bug 虫 along inside its gust 几.',
          vi: 'Cơn gió cuốn con bọ 虫 đi trong luồng 几.'
        },
        examples: [
          {
            parts: [{ text: '風', reading: 'かぜ' }],
            meaning: { en: 'wind', vi: 'gió' }
          },
          {
            parts: [
              { text: '台', reading: 'たい' },
              { text: '風', reading: 'ふう' }
            ],
            meaning: { en: 'typhoon', vi: 'bão' }
          },
          {
            parts: [
              { text: '和', reading: 'わ' },
              { text: '風', reading: 'ふう' }
            ],
            meaning: { en: 'Japanese style', vi: 'phong cách Nhật' }
          }
        ]
      },
      {
        char: '電',
        meaning: { en: 'electricity', vi: 'điện - điện; sấm sét' },
        onyomi: ['デン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Rain 雨 with lightning flashing beneath it: electricity.',
          vi: 'Mưa 雨 kèm tia chớp loé bên dưới: điện, sấm sét.'
        },
        examples: [
          {
            parts: [
              { text: '電', reading: 'でん' },
              { text: '気', reading: 'き' }
            ],
            meaning: { en: 'electricity, electric light', vi: 'điện, đèn điện' }
          },
          {
            parts: [
              { text: '電', reading: 'でん' },
              { text: '話', reading: 'わ' }
            ],
            meaning: { en: 'telephone', vi: 'điện thoại' }
          },
          {
            parts: [
              { text: '電', reading: 'でん' },
              { text: '車', reading: 'しゃ' }
            ],
            meaning: { en: 'train', vi: 'tàu điện' }
          }
        ]
      },
      {
        char: '星',
        meaning: { en: 'star', vi: 'tinh - ngôi sao' },
        onyomi: ['セイ', 'ショウ'],
        kunyomi: ['ほし'],
        components: ['日', '生'],
        mnemonic: {
          en: 'A tiny sun 日 born 生 up in the night sky: a star.',
          vi: 'Một mặt trời 日 tí hon sinh ra 生 trên trời đêm: ngôi sao.'
        },
        examples: [
          {
            parts: [{ text: '星', reading: 'ほし' }],
            meaning: { en: 'star', vi: 'ngôi sao' }
          },
          {
            parts: [
              { text: '火', reading: 'か' },
              { text: '星', reading: 'せい' }
            ],
            meaning: { en: 'Mars', vi: 'sao Hoả' }
          },
          {
            parts: [
              { text: '星', reading: 'ほし' },
              { text: '空', reading: 'ぞら' }
            ],
            meaning: { en: 'starry sky', vi: 'bầu trời sao' }
          }
        ]
      },
      {
        char: '晴',
        meaning: { en: 'clear up, fine weather', vi: 'tình - trời quang, nắng ráo' },
        onyomi: ['セイ'],
        kunyomi: ['は.れる'],
        components: ['日', '青'],
        mnemonic: {
          en: 'The sun 日 shining in a blue 青 sky: clear, fine weather.',
          vi: 'Mặt trời 日 chiếu trên nền trời xanh 青: trời quang, nắng đẹp.'
        },
        examples: [
          {
            parts: [
              { text: '晴', reading: 'は' },
              { text: 'れる', reading: 'れる' }
            ],
            meaning: { en: 'to clear up (weather)', vi: 'trời hửng, quang tạnh' }
          },
          {
            parts: [
              { text: '晴', reading: 'せい' },
              { text: '天', reading: 'てん' }
            ],
            meaning: { en: 'clear sky', vi: 'trời quang' }
          },
          {
            parts: [
              { text: '秋', reading: 'あき' },
              { text: '晴', reading: 'ば' },
              { text: 'れ', reading: 'れ' }
            ],
            meaning: { en: 'clear autumn day', vi: 'ngày thu quang đãng' }
          }
        ]
      },
      {
        char: '光',
        meaning: { en: 'light; to shine', vi: 'quang - ánh sáng; toả sáng' },
        onyomi: ['コウ'],
        kunyomi: ['ひか.る', 'ひかり'],
        components: [],
        mnemonic: {
          en: 'Rays streaming out above a person 儿: shining light.',
          vi: 'Những tia sáng toả ra phía trên một người 儿: ánh sáng lấp lánh.'
        },
        examples: [
          {
            parts: [
              { text: '光', reading: 'ひか' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to shine, to glitter', vi: 'toả sáng, lấp lánh' }
          },
          {
            parts: [{ text: '光', reading: 'ひかり' }],
            meaning: { en: 'light', vi: 'ánh sáng' }
          },
          {
            parts: [
              { text: '日', reading: 'にっ' },
              { text: '光', reading: 'こう' }
            ],
            meaning: { en: 'sunlight', vi: 'ánh nắng' }
          }
        ]
      },
      {
        char: '海',
        meaning: { en: 'sea, ocean', vi: 'hải - biển' },
        onyomi: ['カイ'],
        kunyomi: ['うみ'],
        components: [],
        mnemonic: {
          en: 'The water 氵 that stretches on and on everywhere: the sea.',
          vi: 'Dòng nước 氵 trải dài mênh mông khắp nơi: biển cả.'
        },
        examples: [
          {
            parts: [{ text: '海', reading: 'うみ' }],
            meaning: { en: 'sea', vi: 'biển' }
          },
          {
            parts: [
              { text: '海', reading: 'かい' },
              { text: '外', reading: 'がい' }
            ],
            meaning: { en: 'overseas, abroad', vi: 'hải ngoại, nước ngoài' }
          },
          {
            parts: [
              { text: '日', reading: 'に' },
              { text: '本', reading: 'ほん' },
              { text: '海', reading: 'かい' }
            ],
            meaning: { en: 'Sea of Japan', vi: 'biển Nhật Bản' }
          }
        ]
      },
      {
        char: '池',
        meaning: { en: 'pond', vi: 'trì - cái ao' },
        onyomi: ['チ'],
        kunyomi: ['いけ'],
        components: [],
        mnemonic: {
          en: 'A small body of water 氵 held in one spot: a pond.',
          vi: 'Một vũng nước 氵 đọng lại một chỗ: cái ao.'
        },
        examples: [
          {
            parts: [{ text: '池', reading: 'いけ' }],
            meaning: { en: 'pond', vi: 'ao' }
          },
          {
            parts: [
              { text: '電', reading: 'でん' },
              { text: '池', reading: 'ち' }
            ],
            meaning: { en: 'battery', vi: 'pin' }
          },
          {
            parts: [
              { text: '古', reading: 'ふる' },
              { text: '池', reading: 'いけ' }
            ],
            meaning: { en: 'old pond', vi: 'ao cũ' }
          }
        ]
      },
      {
        char: '谷',
        meaning: { en: 'valley', vi: 'cốc - thung lũng, hẻm núi' },
        onyomi: ['コク'],
        kunyomi: ['たに'],
        components: [],
        mnemonic: {
          en: 'A gap opening between mountain slopes with a mouth 口 at the bottom: a valley.',
          vi: 'Khe mở giữa hai sườn núi, đáy có cái miệng 口: thung lũng.'
        },
        examples: [
          {
            parts: [{ text: '谷', reading: 'たに' }],
            meaning: { en: 'valley', vi: 'thung lũng' }
          },
          {
            parts: [
              { text: '谷', reading: 'たに' },
              { text: '川', reading: 'がわ' }
            ],
            meaning: { en: 'mountain stream', vi: 'suối trong thung lũng' }
          },
          {
            parts: [
              { text: '谷', reading: 'たに' },
              { text: '間', reading: 'ま' }
            ],
            meaning: { en: 'ravine, gorge', vi: 'khe núi' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Animals & countryside',
      vi: 'Động vật & thôn dã'
    },
    kanji: [
      {
        char: '鳥',
        meaning: { en: 'bird', vi: 'điểu - con chim' },
        onyomi: ['チョウ'],
        kunyomi: ['とり'],
        components: [],
        mnemonic: {
          en: 'A picture of a long-tailed bird perched, with its eye and feathers.',
          vi: 'Hình con chim đuôi dài đang đậu, có cả mắt và lông.'
        },
        examples: [
          {
            parts: [{ text: '鳥', reading: 'とり' }],
            meaning: { en: 'bird', vi: 'con chim' }
          },
          {
            parts: [
              { text: '小', reading: 'こ' },
              { text: '鳥', reading: 'とり' }
            ],
            meaning: { en: 'small bird', vi: 'chim nhỏ' }
          },
          {
            parts: [
              { text: '白', reading: 'はく' },
              { text: '鳥', reading: 'ちょう' }
            ],
            meaning: { en: 'swan', vi: 'thiên nga' }
          }
        ]
      },
      {
        char: '魚',
        meaning: { en: 'fish', vi: 'ngư - con cá' },
        onyomi: ['ギョ'],
        kunyomi: ['さかな', 'うお'],
        components: [],
        mnemonic: {
          en: 'A picture of a fish: head on top, scaly body, fins below.',
          vi: 'Hình con cá: đầu ở trên, thân đầy vảy, vây bên dưới.'
        },
        examples: [
          {
            parts: [{ text: '魚', reading: 'さかな' }],
            meaning: { en: 'fish', vi: 'con cá' }
          },
          {
            parts: [
              { text: '金', reading: 'きん' },
              { text: '魚', reading: 'ぎょ' }
            ],
            meaning: { en: 'goldfish', vi: 'cá vàng' }
          },
          {
            parts: [
              { text: '川', reading: 'かわ' },
              { text: '魚', reading: 'うお' }
            ],
            meaning: { en: 'river fish', vi: 'cá sông' }
          }
        ]
      },
      {
        char: '馬',
        meaning: { en: 'horse', vi: 'mã - con ngựa' },
        onyomi: ['バ'],
        kunyomi: ['うま', 'ま'],
        components: [],
        mnemonic: {
          en: 'A picture of a horse: flowing mane, body, and galloping legs.',
          vi: 'Hình con ngựa: bờm bay, thân và bốn chân đang phi.'
        },
        examples: [
          {
            parts: [{ text: '馬', reading: 'うま' }],
            meaning: { en: 'horse', vi: 'con ngựa' }
          },
          {
            parts: [
              { text: '馬', reading: 'ば' },
              { text: '車', reading: 'しゃ' }
            ],
            meaning: { en: 'horse carriage', vi: 'xe ngựa' }
          },
          {
            parts: [
              { text: '竹', reading: 'たけ' },
              { text: '馬', reading: 'うま' }
            ],
            meaning: { en: 'stilts', vi: 'cà kheo' }
          }
        ]
      },
      {
        char: '牛',
        meaning: { en: 'cow, cattle', vi: 'ngưu - con bò, trâu' },
        onyomi: ['ギュウ'],
        kunyomi: ['うし'],
        components: [],
        mnemonic: {
          en: 'A cow seen head-on, its two horns sticking up.',
          vi: 'Con bò nhìn từ phía trước, hai cái sừng chĩa lên.'
        },
        examples: [
          {
            parts: [{ text: '牛', reading: 'うし' }],
            meaning: { en: 'cow', vi: 'con bò' }
          },
          {
            parts: [
              { text: '牛', reading: 'ぎゅう' },
              { text: '肉', reading: 'にく' }
            ],
            meaning: { en: 'beef', vi: 'thịt bò' }
          },
          {
            parts: [
              { text: '牛', reading: 'ぎゅう' },
              { text: '乳', reading: 'にゅう' }
            ],
            meaning: { en: 'milk', vi: 'sữa bò' }
          }
        ]
      },
      {
        char: '羽',
        meaning: { en: 'feather, wing', vi: 'vũ - lông vũ; cánh' },
        onyomi: ['ウ'],
        kunyomi: ['は', 'はね'],
        components: [],
        mnemonic: {
          en: 'A pair of feathered wings drawn side by side.',
          vi: 'Đôi cánh lông vẽ cạnh nhau.'
        },
        note: {
          en: 'Also the counter for birds and rabbits (一羽, 二羽).',
          vi: 'Còn là lượng từ đếm chim và thỏ (一羽, 二羽).'
        },
        examples: [
          {
            parts: [{ text: '羽', reading: 'はね' }],
            meaning: { en: 'feather, wing', vi: 'lông, cánh' }
          },
          {
            parts: [
              { text: '羽', reading: 'う' },
              { text: '毛', reading: 'もう' }
            ],
            meaning: { en: 'feathers, down', vi: 'lông vũ, lông tơ' }
          },
          {
            parts: [
              { text: '一', reading: 'いち' },
              { text: '羽', reading: 'わ' }
            ],
            meaning: { en: 'one bird', vi: 'một con chim' }
          }
        ]
      },
      {
        char: '角',
        meaning: { en: 'horn; corner, angle', vi: 'giác - sừng; góc, góc cạnh' },
        onyomi: ['カク'],
        kunyomi: ['つの', 'かど'],
        components: [],
        mnemonic: {
          en: 'The shape of an animal horn, also used for a corner or angle.',
          vi: 'Hình cái sừng thú, cũng dùng cho góc, góc cạnh.'
        },
        examples: [
          {
            parts: [{ text: '角', reading: 'つの' }],
            meaning: { en: 'horn (of an animal)', vi: 'sừng' }
          },
          {
            parts: [
              { text: '三', reading: 'さん' },
              { text: '角', reading: 'かく' }
            ],
            meaning: { en: 'triangle', vi: 'tam giác' }
          },
          {
            parts: [
              { text: '四', reading: 'し' },
              { text: '角', reading: 'かく' }
            ],
            meaning: { en: 'square, quadrangle', vi: 'hình vuông' }
          }
        ]
      },
      {
        char: '鳴',
        meaning: { en: 'chirp, cry; to sound', vi: 'minh - kêu, hót; vang lên' },
        onyomi: ['メイ'],
        kunyomi: ['な.く', 'な.る'],
        components: ['口', '鳥'],
        mnemonic: {
          en: 'A bird 鳥 opening its mouth 口 to sing out.',
          vi: 'Con chim 鳥 mở miệng 口 cất tiếng hót.'
        },
        examples: [
          {
            parts: [
              { text: '鳴', reading: 'な' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to chirp, to cry (animal)', vi: 'kêu, hót (con vật)' }
          },
          {
            parts: [
              { text: '鳴', reading: 'な' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to sound, to ring', vi: 'kêu vang, reo lên' }
          },
          {
            parts: [
              { text: '鳴', reading: 'な' },
              { text: 'き', reading: 'き' },
              { text: '声', reading: 'ごえ' }
            ],
            meaning: { en: 'animal cry', vi: 'tiếng kêu của con vật' }
          }
        ]
      },
      {
        char: '野',
        meaning: { en: 'field, plain; the wild', vi: 'dã - cánh đồng, đồng hoang' },
        onyomi: ['ヤ'],
        kunyomi: ['の'],
        components: [],
        mnemonic: {
          en: 'The open land 里 stretching out beyond the village: a field, the wild.',
          vi: 'Vùng đất 里 trải rộng ngoài làng: cánh đồng, đồng hoang.'
        },
        examples: [
          {
            parts: [
              { text: '野', reading: 'や' },
              { text: '球', reading: 'きゅう' }
            ],
            meaning: { en: 'baseball', vi: 'bóng chày' }
          },
          {
            parts: [
              { text: '野', reading: 'の' },
              { text: '原', reading: 'はら' }
            ],
            meaning: { en: 'field, plain', vi: 'cánh đồng' }
          },
          {
            parts: [
              { text: '野', reading: 'や' },
              { text: '菜', reading: 'さい' }
            ],
            meaning: { en: 'vegetables', vi: 'rau củ' }
          }
        ]
      },
      {
        char: '里',
        meaning: { en: 'village; ri (old distance unit)', vi: 'lý - làng quê; dặm (ri)' },
        onyomi: ['リ'],
        kunyomi: ['さと'],
        components: ['田', '土'],
        mnemonic: {
          en: 'Rice fields 田 on the earth 土 where a country village sits.',
          vi: 'Ruộng đồng 田 trên đất 土, nơi có ngôi làng quê.'
        },
        examples: [
          {
            parts: [{ text: '里', reading: 'さと' }],
            meaning: { en: 'hometown, village', vi: 'quê, làng quê' }
          },
          {
            parts: [
              { text: '山', reading: 'やま' },
              { text: '里', reading: 'ざと' }
            ],
            meaning: { en: 'mountain village', vi: 'làng miền núi' }
          },
          {
            parts: [
              { text: '一', reading: 'いち' },
              { text: '里', reading: 'り' }
            ],
            meaning: { en: 'one ri (~3.9 km)', vi: 'một dặm (ri)' }
          }
        ]
      },
      {
        char: '岩',
        meaning: { en: 'rock, boulder', vi: 'nham - tảng đá, đá lớn' },
        onyomi: ['ガン'],
        kunyomi: ['いわ'],
        components: ['山', '石'],
        mnemonic: {
          en: 'A stone 石 as big as part of a mountain 山: a boulder, a crag.',
          vi: 'Hòn đá 石 to như một phần núi 山: tảng đá lớn.'
        },
        examples: [
          {
            parts: [{ text: '岩', reading: 'いわ' }],
            meaning: { en: 'rock, boulder', vi: 'tảng đá' }
          },
          {
            parts: [
              { text: '岩', reading: 'がん' },
              { text: '石', reading: 'せき' }
            ],
            meaning: { en: 'rock, stone', vi: 'nham thạch, đá' }
          },
          {
            parts: [
              { text: '大', reading: 'おお' },
              { text: '岩', reading: 'いわ' }
            ],
            meaning: { en: 'big rock', vi: 'tảng đá lớn' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Describing & opposites',
      vi: 'Miêu tả & tính chất'
    },
    kanji: [
      {
        char: '高',
        meaning: { en: 'tall, high; expensive', vi: 'cao - cao; đắt' },
        onyomi: ['コウ'],
        kunyomi: ['たか.い', 'たか'],
        components: [],
        mnemonic: {
          en: 'A picture of a tall tower or gate building, storey upon storey: high, tall.',
          vi: 'Hình một tòa tháp hay cổng cao nhiều tầng chồng lên nhau: cao.'
        },
        examples: [
          {
            parts: [
              { text: '高', reading: 'たか' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'tall, high; expensive', vi: 'cao; đắt' }
          },
          {
            parts: [
              { text: '高', reading: 'こう' },
              { text: '校', reading: 'こう' }
            ],
            meaning: { en: 'high school', vi: 'trường cấp ba' }
          },
          {
            parts: [
              { text: '高', reading: 'こう' },
              { text: '音', reading: 'おん' }
            ],
            meaning: { en: 'high pitch, treble', vi: 'âm cao' }
          }
        ]
      },
      {
        char: '多',
        meaning: { en: 'many, much', vi: 'đa - nhiều' },
        onyomi: ['タ'],
        kunyomi: ['おお.い'],
        components: ['夕', '夕'],
        mnemonic: {
          en: 'One evening 夕 stacked on another evening 夕: evening after evening adds up to many.',
          vi: 'Một buổi tối 夕 chồng lên một buổi tối 夕 khác: hết tối này đến tối kia, thành nhiều.'
        },
        examples: [
          {
            parts: [
              { text: '多', reading: 'おお' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'many, numerous', vi: 'nhiều' }
          },
          {
            parts: [
              { text: '多', reading: 'た' },
              { text: '分', reading: 'ぶん' }
            ],
            meaning: { en: 'probably, perhaps', vi: 'có lẽ' }
          },
          {
            parts: [
              { text: '多', reading: 'た' },
              { text: '数', reading: 'すう' }
            ],
            meaning: { en: 'large number, majority', vi: 'số đông, đa số' }
          }
        ]
      },
      {
        char: '少',
        meaning: { en: 'few, little', vi: 'thiểu - ít; một chút' },
        onyomi: ['ショウ'],
        kunyomi: ['すく.ない', 'すこ.し'],
        components: [],
        mnemonic: {
          en: 'Something small 小 with one more sliver cut off: even fewer, just a little.',
          vi: 'Cái gì đó nhỏ 小 lại bị cắt thêm một chút: càng ít, chỉ một tí.'
        },
        examples: [
          {
            parts: [
              { text: '少', reading: 'すく' },
              { text: 'な', reading: 'な' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'few, scarce', vi: 'ít' }
          },
          {
            parts: [
              { text: '少', reading: 'すこ' },
              { text: 'し', reading: 'し' }
            ],
            meaning: { en: 'a little, a bit', vi: 'một chút' }
          },
          {
            parts: [
              { text: '少', reading: 'しょう' },
              { text: '年', reading: 'ねん' }
            ],
            meaning: { en: 'boy, youth', vi: 'thiếu niên' }
          }
        ]
      },
      {
        char: '弱',
        meaning: { en: 'weak, frail', vi: 'nhược - yếu' },
        onyomi: ['ジャク'],
        kunyomi: ['よわ.い'],
        components: ['弓', '弓'],
        mnemonic: {
          en: 'Two bows 弓 whose strings have gone limp and feathery: weak, frail.',
          vi: 'Hai cây cung 弓 dây đã chùng, rũ như lông: yếu ớt.'
        },
        examples: [
          {
            parts: [
              { text: '弱', reading: 'よわ' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'weak', vi: 'yếu' }
          },
          {
            parts: [
              { text: '弱', reading: 'よわ' },
              { text: '火', reading: 'び' }
            ],
            meaning: { en: 'low flame, low heat', vi: 'lửa nhỏ, lửa liu riu' }
          },
          {
            parts: [
              { text: '強', reading: 'きょう' },
              { text: '弱', reading: 'じゃく' }
            ],
            meaning: { en: 'strength, dynamics', vi: 'mạnh yếu, cường độ' }
          }
        ]
      },
      {
        char: '明',
        meaning: { en: 'bright, clear', vi: 'minh - sáng, sáng sủa; rõ ràng' },
        onyomi: ['メイ', 'ミョウ'],
        kunyomi: ['あか.るい', 'あ.ける'],
        components: ['日', '月'],
        mnemonic: {
          en: 'The sun 日 and the moon 月 together, the two brightest things: bright, clear.',
          vi: 'Mặt trời 日 và mặt trăng 月 cùng nhau, hai thứ sáng nhất: sáng, rõ ràng.'
        },
        examples: [
          {
            parts: [
              { text: '明', reading: 'あか' },
              { text: 'る', reading: 'る' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'bright, cheerful', vi: 'sáng, sáng sủa' }
          },
          {
            parts: [
              { text: '明', reading: 'あ' },
              { text: 'け', reading: 'け' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to dawn, to end (a period)', vi: 'hửng sáng, kết thúc' }
          },
          {
            parts: [
              { text: '明', reading: 'めい' },
              { text: '白', reading: 'はく' }
            ],
            meaning: { en: 'obvious, clear', vi: 'rõ ràng, minh bạch' }
          }
        ]
      },
      {
        char: '古',
        meaning: { en: 'old, ancient', vi: 'cổ - cũ, xưa' },
        onyomi: ['コ'],
        kunyomi: ['ふる.い'],
        components: ['十', '口'],
        mnemonic: {
          en: 'Words passed through ten 十 mouths 口 over the generations: old, ancient.',
          vi: 'Lời truyền qua mười 十 cái miệng 口 bao đời: cũ, xưa.'
        },
        examples: [
          {
            parts: [
              { text: '古', reading: 'ふる' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'old (not new)', vi: 'cũ, xưa' }
          },
          {
            parts: [
              { text: '中', reading: 'ちゅう' },
              { text: '古', reading: 'こ' }
            ],
            meaning: { en: 'used, secondhand', vi: 'đã qua sử dụng' }
          },
          {
            parts: [
              { text: '古', reading: 'ふる' },
              { text: '本', reading: 'ほん' }
            ],
            meaning: { en: 'old book, used book', vi: 'sách cũ' }
          }
        ]
      },
      {
        char: '新',
        meaning: { en: 'new', vi: 'tân - mới' },
        onyomi: ['シン'],
        kunyomi: ['あたら.しい', 'あら.た'],
        components: ['立', '木', '斤'],
        mnemonic: {
          en: 'Standing 立 by a tree 木 with an axe 斤 to cut fresh wood: new.',
          vi: 'Đứng 立 bên cây 木 cầm rìu 斤 chặt gỗ tươi: mới.'
        },
        examples: [
          {
            parts: [
              { text: '新', reading: 'あたら' },
              { text: 'し', reading: 'し' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'new', vi: 'mới' }
          },
          {
            parts: [
              { text: '新', reading: 'しん' },
              { text: '聞', reading: 'ぶん' }
            ],
            meaning: { en: 'newspaper', vi: 'báo' }
          },
          {
            parts: [
              { text: '新', reading: 'しん' },
              { text: '年', reading: 'ねん' }
            ],
            meaning: { en: 'new year', vi: 'năm mới' }
          }
        ]
      },
      {
        char: '長',
        meaning: { en: 'long; chief, head', vi: 'trường/trưởng - dài; người đứng đầu' },
        onyomi: ['チョウ'],
        kunyomi: ['なが.い'],
        components: [],
        mnemonic: {
          en: 'A picture of long flowing hair on an elder: long, and the senior who leads.',
          vi: 'Hình mái tóc dài của bậc trưởng lão: dài, và người đứng đầu.'
        },
        examples: [
          {
            parts: [
              { text: '長', reading: 'なが' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'long', vi: 'dài' }
          },
          {
            parts: [
              { text: '校', reading: 'こう' },
              { text: '長', reading: 'ちょう' }
            ],
            meaning: { en: 'school principal', vi: 'hiệu trưởng' }
          },
          {
            parts: [
              { text: '社', reading: 'しゃ' },
              { text: '長', reading: 'ちょう' }
            ],
            meaning: { en: 'company president', vi: 'giám đốc công ty' }
          }
        ]
      },
      {
        char: '広',
        meaning: { en: 'wide, spacious', vi: 'quảng - rộng, rộng rãi' },
        onyomi: ['コウ'],
        kunyomi: ['ひろ.い'],
        components: [],
        mnemonic: {
          en: 'A wide roof 广 sheltering a broad, open space: wide, spacious.',
          vi: 'Mái nhà 广 rộng che một khoảng đất thênh thang: rộng rãi.'
        },
        examples: [
          {
            parts: [
              { text: '広', reading: 'ひろ' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'wide, spacious', vi: 'rộng' }
          },
          {
            parts: [
              { text: '広', reading: 'ひろ' },
              { text: '場', reading: 'ば' }
            ],
            meaning: { en: 'plaza, open square', vi: 'quảng trường' }
          },
          {
            parts: [
              { text: '広', reading: 'こう' },
              { text: '大', reading: 'だい' }
            ],
            meaning: { en: 'vast, huge', vi: 'rộng lớn, bao la' }
          }
        ]
      },
      {
        char: '細',
        meaning: { en: 'thin, fine; detailed', vi: 'tế - nhỏ, mảnh; chi tiết' },
        onyomi: ['サイ'],
        kunyomi: ['ほそ.い', 'こま.かい'],
        components: ['糸', '田'],
        mnemonic: {
          en: 'A thread 糸 as fine as the lines dividing a field 田: thin, fine, detailed.',
          vi: 'Sợi chỉ 糸 mảnh như những đường chia ô ruộng 田: nhỏ, mảnh, chi tiết.'
        },
        examples: [
          {
            parts: [
              { text: '細', reading: 'ほそ' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'thin, slender', vi: 'nhỏ, mảnh' }
          },
          {
            parts: [
              { text: '細', reading: 'こま' },
              { text: 'か', reading: 'か' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'fine, detailed', vi: 'nhỏ nhặt, chi tiết' }
          },
          {
            parts: [
              { text: '細', reading: 'ほそ' },
              { text: '長', reading: 'なが' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'long and thin', vi: 'dài và mảnh' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Study & expression',
      vi: 'Học tập & diễn đạt'
    },
    kanji: [
      {
        char: '語',
        meaning: { en: 'language; word', vi: 'ngữ - ngôn ngữ; lời, từ' },
        onyomi: ['ゴ'],
        kunyomi: ['かた.る'],
        components: ['言', '口'],
        mnemonic: {
          en: 'Speech 言 shaped by the mouth 口 into words: language.',
          vi: 'Lời nói 言 được cái miệng 口 tạo thành từ ngữ: ngôn ngữ.'
        },
        examples: [
          {
            parts: [
              { text: '日', reading: 'に' },
              { text: '本', reading: 'ほん' },
              { text: '語', reading: 'ご' }
            ],
            meaning: { en: 'Japanese language', vi: 'tiếng Nhật' }
          },
          {
            parts: [
              { text: '英', reading: 'えい' },
              { text: '語', reading: 'ご' }
            ],
            meaning: { en: 'English language', vi: 'tiếng Anh' }
          },
          {
            parts: [
              { text: '語', reading: 'かた' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to tell, to relate', vi: 'kể, thuật lại' }
          }
        ]
      },
      {
        char: '記',
        meaning: { en: 'to record, to write down', vi: 'ký - ghi chép, ghi lại' },
        onyomi: ['キ'],
        kunyomi: ['しる.す'],
        components: ['言', '己'],
        mnemonic: {
          en: 'Putting your own 己 words 言 down on paper: to record, to note.',
          vi: 'Ghi lại lời nói 言 của chính mình 己 lên giấy: ghi chép.'
        },
        examples: [
          {
            parts: [
              { text: '日', reading: 'にっ' },
              { text: '記', reading: 'き' }
            ],
            meaning: { en: 'diary', vi: 'nhật ký' }
          },
          {
            parts: [
              { text: '記', reading: 'き' },
              { text: '入', reading: 'にゅう' }
            ],
            meaning: { en: 'filling in, entry', vi: 'điền vào, ghi vào' }
          },
          {
            parts: [
              { text: '記', reading: 'き' },
              { text: '者', reading: 'しゃ' }
            ],
            meaning: { en: 'reporter, journalist', vi: 'phóng viên' }
          }
        ]
      },
      {
        char: '計',
        meaning: { en: 'to measure, to count; plan', vi: 'kế - đo, tính; kế hoạch' },
        onyomi: ['ケイ'],
        kunyomi: ['はか.る'],
        components: ['言', '十'],
        mnemonic: {
          en: 'Speaking 言 the numbers up to ten 十 as you count: to measure, to plan.',
          vi: 'Đọc 言 các con số đến mười 十 khi đếm: đo, tính, lên kế hoạch.'
        },
        examples: [
          {
            parts: [
              { text: '時', reading: 'と' },
              { text: '計', reading: 'けい' }
            ],
            meaning: { en: 'clock, watch', vi: 'đồng hồ' }
          },
          {
            parts: [
              { text: '計', reading: 'けい' },
              { text: '算', reading: 'さん' }
            ],
            meaning: { en: 'calculation', vi: 'phép tính, tính toán' }
          },
          {
            parts: [
              { text: '計', reading: 'はか' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to measure, to time', vi: 'đo, đong, tính' }
          }
        ]
      },
      {
        char: '画',
        meaning: { en: 'picture, drawing; stroke', vi: 'họa/hoạch - tranh vẽ; nét (chữ)' },
        onyomi: ['ガ', 'カク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A hand drawing a boundary around a field 田: a picture, and a brush stroke.',
          vi: 'Bàn tay vẽ đường viền quanh thửa ruộng 田: bức tranh, và nét vẽ.'
        },
        examples: [
          {
            parts: [
              { text: '映', reading: 'えい' },
              { text: '画', reading: 'が' }
            ],
            meaning: { en: 'movie, film', vi: 'phim' }
          },
          {
            parts: [
              { text: '画', reading: 'が' },
              { text: '家', reading: 'か' }
            ],
            meaning: { en: 'painter, artist', vi: 'họa sĩ' }
          },
          {
            parts: [
              { text: '図', reading: 'ず' },
              { text: '画', reading: 'が' }
            ],
            meaning: { en: 'drawing (school subject)', vi: 'môn hội họa' }
          }
        ]
      },
      {
        char: '形',
        meaning: { en: 'shape, form', vi: 'hình - hình dạng, hình thức' },
        onyomi: ['ケイ', 'ギョウ'],
        kunyomi: ['かた', 'かたち'],
        components: [],
        mnemonic: {
          en: 'A frame with decorative strokes 彡 added: the shape, the form of a thing.',
          vi: 'Một cái khung thêm vài nét trang trí 彡: hình dạng, hình thức của vật.'
        },
        examples: [
          {
            parts: [{ text: '形', reading: 'かたち' }],
            meaning: { en: 'shape, form', vi: 'hình dạng' }
          },
          {
            parts: [
              { text: '人', reading: 'にん' },
              { text: '形', reading: 'ぎょう' }
            ],
            meaning: { en: 'doll', vi: 'búp bê' }
          },
          {
            parts: [
              { text: '三', reading: 'さん' },
              { text: '角', reading: 'かっ' },
              { text: '形', reading: 'けい' }
            ],
            meaning: { en: 'triangle', vi: 'hình tam giác' }
          }
        ]
      },
      {
        char: '点',
        meaning: { en: 'point, dot; score', vi: 'điểm - chấm, điểm; điểm số' },
        onyomi: ['テン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Small dots like sparks marking spots: a point, a dot, a score.',
          vi: 'Những chấm nhỏ như tia lửa đánh dấu vị trí: điểm, chấm, điểm số.'
        },
        examples: [
          {
            parts: [{ text: '点', reading: 'てん' }],
            meaning: { en: 'point, dot', vi: 'điểm, chấm' }
          },
          {
            parts: [
              { text: '百', reading: 'ひゃく' },
              { text: '点', reading: 'てん' }
            ],
            meaning: { en: 'full marks, 100 points', vi: 'điểm mười, 100 điểm' }
          },
          {
            parts: [
              { text: '点', reading: 'てん' },
              { text: '数', reading: 'すう' }
            ],
            meaning: { en: 'score, marks', vi: 'điểm số' }
          }
        ]
      },
      {
        char: '直',
        meaning: { en: 'straight; direct; to fix', vi: 'trực - thẳng; trực tiếp; sửa lại' },
        onyomi: ['チョク', 'ジキ'],
        kunyomi: ['なお.す', 'なお.る'],
        components: ['十', '目'],
        mnemonic: {
          en: 'Ten 十 eyes 目 looking straight to check a thing is honest and correct: straight, to fix.',
          vi: 'Mười 十 con mắt 目 nhìn thẳng kiểm tra cho ngay ngắn: thẳng, sửa lại.'
        },
        examples: [
          {
            parts: [
              { text: '直', reading: 'なお' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to fix, to correct', vi: 'sửa, chỉnh lại' }
          },
          {
            parts: [
              { text: '直', reading: 'なお' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to be fixed, to recover', vi: 'được sửa, khỏi bệnh' }
          },
          {
            parts: [
              { text: '正', reading: 'しょう' },
              { text: '直', reading: 'じき' }
            ],
            meaning: { en: 'honest, upright', vi: 'thật thà, ngay thẳng' }
          },
          {
            parts: [
              { text: '直', reading: 'ちょく' },
              { text: '接', reading: 'せつ' }
            ],
            meaning: { en: 'direct, firsthand', vi: 'trực tiếp' }
          }
        ]
      },
      {
        char: '答',
        meaning: { en: 'answer, reply', vi: 'đáp - trả lời; câu trả lời' },
        onyomi: ['トウ'],
        kunyomi: ['こた.える', 'こた.え'],
        components: ['竹', '口'],
        mnemonic: {
          en: 'Words from the mouth 口 written on a bamboo 竹 slip to reply: an answer.',
          vi: 'Lời từ miệng 口 chép lên thẻ tre 竹 để hồi đáp: câu trả lời.'
        },
        examples: [
          {
            parts: [
              { text: '答', reading: 'こた' },
              { text: 'え', reading: 'え' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to answer', vi: 'trả lời' }
          },
          {
            parts: [
              { text: '答', reading: 'こた' },
              { text: 'え', reading: 'え' }
            ],
            meaning: { en: 'an answer', vi: 'câu trả lời' }
          },
          {
            parts: [
              { text: '回', reading: 'かい' },
              { text: '答', reading: 'とう' }
            ],
            meaning: { en: 'reply, response', vi: 'sự trả lời, hồi đáp' }
          }
        ]
      },
      {
        char: '思',
        meaning: { en: 'to think, to feel', vi: 'tư - nghĩ, suy nghĩ' },
        onyomi: ['シ'],
        kunyomi: ['おも.う'],
        components: [],
        mnemonic: {
          en: 'The head (drawn like 田) working together with the heart 心 below: to think, to feel.',
          vi: 'Cái đầu (viết như 田) cùng hoạt động với trái tim 心 bên dưới: suy nghĩ, cảm nhận.'
        },
        examples: [
          {
            parts: [
              { text: '思', reading: 'おも' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to think, to feel', vi: 'nghĩ, cho rằng' }
          },
          {
            parts: [
              { text: '思', reading: 'し' },
              { text: '考', reading: 'こう' }
            ],
            meaning: { en: 'thought, thinking', vi: 'tư duy, suy nghĩ' }
          },
          {
            parts: [
              { text: '思', reading: 'おも' },
              { text: 'い', reading: 'い' },
              { text: '出', reading: 'で' }
            ],
            meaning: { en: 'memory, recollection', vi: 'kỷ niệm, hồi ức' }
          }
        ]
      },
      {
        char: '紙',
        meaning: { en: 'paper', vi: 'chỉ - giấy' },
        onyomi: ['シ'],
        kunyomi: ['かみ'],
        components: ['糸', '氏'],
        mnemonic: {
          en: 'Threads 糸 of plant fiber pressed by a clan 氏 into flat sheets: paper.',
          vi: 'Những sợi 糸 xơ thực vật được ép thành tấm phẳng: giấy.'
        },
        examples: [
          {
            parts: [{ text: '紙', reading: 'かみ' }],
            meaning: { en: 'paper', vi: 'giấy' }
          },
          {
            parts: [
              { text: '手', reading: 'て' },
              { text: '紙', reading: 'がみ' }
            ],
            meaning: { en: 'letter', vi: 'lá thư' }
          },
          {
            parts: [
              { text: '新', reading: 'しん' },
              { text: '聞', reading: 'ぶん' },
              { text: '紙', reading: 'し' }
            ],
            meaning: { en: 'newspaper (the paper)', vi: 'tờ báo' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Places, directions & time',
      vi: 'Nơi chốn, hướng & thời gian'
    },
    kanji: [
      {
        char: '門',
        meaning: { en: 'gate', vi: 'môn - cổng, cửa lớn' },
        onyomi: ['モン'],
        kunyomi: ['かど'],
        components: [],
        mnemonic: {
          en: 'A picture of a pair of swinging double doors: a gate.',
          vi: 'Hình đôi cánh cửa lớn mở ra hai bên: cái cổng.'
        },
        examples: [
          {
            parts: [{ text: '門', reading: 'もん' }],
            meaning: { en: 'gate', vi: 'cổng' }
          },
          {
            parts: [
              { text: '校', reading: 'こう' },
              { text: '門', reading: 'もん' }
            ],
            meaning: { en: 'school gate', vi: 'cổng trường' }
          },
          {
            parts: [
              { text: '入', reading: 'にゅう' },
              { text: '門', reading: 'もん' }
            ],
            meaning: { en: 'introduction, primer', vi: 'nhập môn' }
          }
        ]
      },
      {
        char: '戸',
        meaning: { en: 'door; household', vi: 'hộ - cửa (một cánh); hộ gia đình' },
        onyomi: ['コ'],
        kunyomi: ['と'],
        components: [],
        mnemonic: {
          en: 'A picture of a single-panel door on its hinge: a door, a household.',
          vi: 'Hình một cánh cửa đơn gắn bản lề: cánh cửa, hộ gia đình.'
        },
        examples: [
          {
            parts: [{ text: '戸', reading: 'と' }],
            meaning: { en: 'door', vi: 'cửa' }
          },
          {
            parts: [
              { text: '戸', reading: 'と' },
              { text: '口', reading: 'ぐち' }
            ],
            meaning: { en: 'doorway, entrance', vi: 'lối ra vào' }
          },
          {
            parts: [
              { text: '雨', reading: 'あま' },
              { text: '戸', reading: 'ど' }
            ],
            meaning: { en: 'storm shutter', vi: 'cửa chắn mưa bão' }
          }
        ]
      },
      {
        char: '台',
        meaning: { en: 'stand, platform', vi: 'đài - bệ, bục; (đếm máy móc, xe)' },
        onyomi: ['ダイ', 'タイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A raised platform you stand a thing on: a stand, a base.',
          vi: 'Cái bệ nâng lên để đặt vật lên trên: bục, bệ.'
        },
        note: {
          en: 'Also the counter for machines and vehicles (一台, 二台).',
          vi: 'Còn là lượng từ đếm máy móc và xe cộ (一台, 二台).'
        },
        examples: [
          {
            parts: [{ text: '台', reading: 'だい' }],
            meaning: { en: 'stand, platform', vi: 'bệ, bục' }
          },
          {
            parts: [
              { text: '一', reading: 'いち' },
              { text: '台', reading: 'だい' }
            ],
            meaning: { en: 'one machine/vehicle', vi: 'một cái máy/xe' }
          },
          {
            parts: [
              { text: '台', reading: 'だい' },
              { text: '所', reading: 'どころ' }
            ],
            meaning: { en: 'kitchen', vi: 'nhà bếp' }
          }
        ]
      },
      {
        char: '地',
        meaning: { en: 'ground, land; place', vi: 'địa - đất, mặt đất; nơi chốn' },
        onyomi: ['チ', 'ジ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'The earth 土 spreading out underfoot: the ground, the land.',
          vi: 'Đất 土 trải ra dưới chân: mặt đất, vùng đất.'
        },
        examples: [
          {
            parts: [
              { text: '地', reading: 'ち' },
              { text: '図', reading: 'ず' }
            ],
            meaning: { en: 'map', vi: 'bản đồ' }
          },
          {
            parts: [
              { text: '土', reading: 'と' },
              { text: '地', reading: 'ち' }
            ],
            meaning: { en: 'land, plot', vi: 'đất đai' }
          },
          {
            parts: [
              { text: '地', reading: 'ち' },
              { text: '下', reading: 'か' }
            ],
            meaning: { en: 'underground', vi: 'dưới lòng đất' }
          }
        ]
      },
      {
        char: '原',
        meaning: { en: 'plain, field; origin', vi: 'nguyên - cánh đồng, đồng bằng; nguồn gốc' },
        onyomi: ['ゲン'],
        kunyomi: ['はら'],
        components: [],
        mnemonic: {
          en: 'A spring flowing out from under a cliff 厂 onto the open plain: a field, an origin.',
          vi: 'Dòng suối chảy ra từ dưới vách đá 厂 trên cánh đồng rộng: đồng bằng, nguồn gốc.'
        },
        examples: [
          {
            parts: [{ text: '原', reading: 'はら' }],
            meaning: { en: 'field, plain', vi: 'cánh đồng' }
          },
          {
            parts: [
              { text: '高', reading: 'こう' },
              { text: '原', reading: 'げん' }
            ],
            meaning: { en: 'plateau, highland', vi: 'cao nguyên' }
          },
          {
            parts: [
              { text: '野', reading: 'の' },
              { text: '原', reading: 'はら' }
            ],
            meaning: { en: 'field, plain', vi: 'cánh đồng, đồng cỏ' }
          }
        ]
      },
      {
        char: '方',
        meaning: { en: 'direction; way; person (polite)', vi: 'phương - hướng; cách; vị (người)' },
        onyomi: ['ホウ'],
        kunyomi: ['かた'],
        components: [],
        mnemonic: {
          en: 'A plow turning to one side, pointing a way: a direction, a method, and a polite word for a person.',
          vi: 'Cái cày rẽ về một bên, chỉ hướng đi: phương hướng, cách thức, và cách gọi lịch sự "vị".'
        },
        examples: [
          {
            parts: [{ text: '方', reading: 'かた' }],
            meaning: { en: 'way; person (polite)', vi: 'cách; vị (người)' }
          },
          {
            parts: [
              { text: '方', reading: 'ほう' },
              { text: '角', reading: 'がく' }
            ],
            meaning: { en: 'direction, bearing', vi: 'phương hướng' }
          },
          {
            parts: [
              { text: '夕', reading: 'ゆう' },
              { text: '方', reading: 'がた' }
            ],
            meaning: { en: 'evening', vi: 'buổi chiều tối' }
          }
        ]
      },
      {
        char: '公',
        meaning: { en: 'public, official', vi: 'công - công cộng; chung' },
        onyomi: ['コウ'],
        kunyomi: ['おおやけ'],
        components: ['八', '厶'],
        mnemonic: {
          en: 'Dividing 八 what is private 厶 so all may share: public, official.',
          vi: 'Chia 八 cái riêng tư 厶 ra để mọi người cùng hưởng: công cộng, chung.'
        },
        examples: [
          {
            parts: [
              { text: '公', reading: 'こう' },
              { text: '園', reading: 'えん' }
            ],
            meaning: { en: 'park', vi: 'công viên' }
          },
          {
            parts: [
              { text: '公', reading: 'こう' },
              { text: '立', reading: 'りつ' }
            ],
            meaning: { en: 'public (institution)', vi: 'công lập' }
          },
          {
            parts: [
              { text: '公', reading: 'こう' },
              { text: '開', reading: 'かい' }
            ],
            meaning: { en: 'open to the public', vi: 'công khai' }
          }
        ]
      },
      {
        char: '合',
        meaning: { en: 'to fit, to match; to join', vi: 'hợp - hợp, khớp; kết hợp' },
        onyomi: ['ゴウ', 'ガッ'],
        kunyomi: ['あ.う', 'あ.わせる'],
        components: [],
        mnemonic: {
          en: 'A lid coming down snugly onto the mouth 口 of a jar: to fit, to match, to join.',
          vi: 'Cái nắp đậy khít xuống miệng 口 của cái hũ: khớp, vừa, kết hợp.'
        },
        examples: [
          {
            parts: [
              { text: '合', reading: 'あ' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to fit, to match', vi: 'hợp, khớp, vừa' }
          },
          {
            parts: [
              { text: '合', reading: 'あい' },
              { text: '図', reading: 'ず' }
            ],
            meaning: { en: 'signal, sign', vi: 'tín hiệu, ra hiệu' }
          },
          {
            parts: [
              { text: '合', reading: 'ごう' },
              { text: '計', reading: 'けい' }
            ],
            meaning: { en: 'total, sum', vi: 'tổng cộng' }
          }
        ]
      },
      {
        char: '交',
        meaning: {
          en: 'to cross, to mix; to exchange',
          vi: 'giao - giao nhau, trộn lẫn; giao lưu'
        },
        onyomi: ['コウ'],
        kunyomi: ['まじ.わる', 'ま.ぜる'],
        components: [],
        mnemonic: {
          en: 'A person with their legs crossed over each other: to cross, to mix, to exchange.',
          vi: 'Người bắt chéo hai chân lên nhau: giao nhau, trộn lẫn, giao lưu.'
        },
        examples: [
          {
            parts: [
              { text: '交', reading: 'こう' },
              { text: '通', reading: 'つう' }
            ],
            meaning: { en: 'traffic', vi: 'giao thông' }
          },
          {
            parts: [
              { text: '交', reading: 'こう' },
              { text: '番', reading: 'ばん' }
            ],
            meaning: { en: 'police box', vi: 'bốt cảnh sát' }
          },
          {
            parts: [
              { text: '交', reading: 'まじ' },
              { text: 'わ', reading: 'わ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to cross, to intersect', vi: 'giao nhau, cắt nhau' }
          }
        ]
      },
      {
        char: '曜',
        meaning: { en: 'day of the week', vi: 'diệu - thứ (trong tuần)' },
        onyomi: ['ヨウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'The sun 日 marking each shining day that names a day of the week.',
          vi: 'Mặt trời 日 đánh dấu mỗi ngày rực rỡ, đặt tên cho các thứ trong tuần.'
        },
        examples: [
          {
            parts: [
              { text: '月', reading: 'げつ' },
              { text: '曜', reading: 'よう' },
              { text: '日', reading: 'び' }
            ],
            meaning: { en: 'Monday', vi: 'thứ Hai' }
          },
          {
            parts: [
              { text: '日', reading: 'にち' },
              { text: '曜', reading: 'よう' },
              { text: '日', reading: 'び' }
            ],
            meaning: { en: 'Sunday', vi: 'Chủ nhật' }
          },
          {
            parts: [
              { text: '何', reading: 'なん' },
              { text: '曜', reading: 'よう' },
              { text: '日', reading: 'び' }
            ],
            meaning: { en: 'what day of the week', vi: 'thứ mấy' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Arts, colors & objects',
      vi: 'Nghệ thuật, màu sắc & đồ vật'
    },
    kanji: [
      {
        char: '歌',
        meaning: { en: 'song; to sing', vi: 'ca - bài hát; hát' },
        onyomi: ['カ'],
        kunyomi: ['うた', 'うた.う'],
        components: [],
        mnemonic: {
          en: 'A wide-open mouth 欠 singing verse after verse: a song, to sing.',
          vi: 'Cái miệng mở to 欠 hát hết câu này đến câu khác: bài hát, ca hát.'
        },
        examples: [
          {
            parts: [{ text: '歌', reading: 'うた' }],
            meaning: { en: 'song', vi: 'bài hát' }
          },
          {
            parts: [
              { text: '歌', reading: 'うた' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to sing', vi: 'hát' }
          },
          {
            parts: [
              { text: '校', reading: 'こう' },
              { text: '歌', reading: 'か' }
            ],
            meaning: { en: 'school song', vi: 'bài ca của trường' }
          }
        ]
      },
      {
        char: '楽',
        meaning: { en: 'fun, comfort; music', vi: 'lạc/nhạc - vui, thoải mái; âm nhạc' },
        onyomi: ['ガク', 'ラク'],
        kunyomi: ['たの.しい'],
        components: [],
        mnemonic: {
          en: 'A tree 木 hung with bells and drums to play: music, and the fun and ease it brings.',
          vi: 'Cái cây 木 treo chuông trống để chơi: âm nhạc, và niềm vui, sự thoải mái nó mang lại.'
        },
        examples: [
          {
            parts: [
              { text: '音', reading: 'おん' },
              { text: '楽', reading: 'がく' }
            ],
            meaning: { en: 'music', vi: 'âm nhạc' }
          },
          {
            parts: [
              { text: '楽', reading: 'たの' },
              { text: 'し', reading: 'し' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'fun, enjoyable', vi: 'vui, thú vị' }
          },
          {
            parts: [
              { text: '楽', reading: 'らく' },
              { text: '園', reading: 'えん' }
            ],
            meaning: { en: 'paradise', vi: 'lạc viên, thiên đường' }
          }
        ]
      },
      {
        char: '活',
        meaning: { en: 'lively, active; life', vi: 'hoạt - sống động, hoạt động' },
        onyomi: ['カツ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Water 氵 on the tongue 舌 keeps a body lively and alive: active, living.',
          vi: 'Nước 氵 trên cái lưỡi 舌 giữ cho cơ thể sống động: hoạt động, sống.'
        },
        examples: [
          {
            parts: [
              { text: '生', reading: 'せい' },
              { text: '活', reading: 'かつ' }
            ],
            meaning: { en: 'daily life, living', vi: 'sinh hoạt, đời sống' }
          },
          {
            parts: [
              { text: '活', reading: 'かつ' },
              { text: '動', reading: 'どう' }
            ],
            meaning: { en: 'activity, action', vi: 'hoạt động' }
          },
          {
            parts: [
              { text: '活', reading: 'かっ' },
              { text: '力', reading: 'りょく' }
            ],
            meaning: { en: 'energy, vitality', vi: 'sức sống, sinh lực' }
          }
        ]
      },
      {
        char: '色',
        meaning: { en: 'color, hue', vi: 'sắc - màu sắc' },
        onyomi: ['ショク', 'シキ'],
        kunyomi: ['いろ'],
        components: [],
        mnemonic: {
          en: 'The rising flush of color on skin and on all things: color, hue.',
          vi: 'Sắc màu ửng lên trên da và trên vạn vật: màu sắc.'
        },
        examples: [
          {
            parts: [{ text: '色', reading: 'いろ' }],
            meaning: { en: 'color', vi: 'màu' }
          },
          {
            parts: [
              { text: '黄', reading: 'き' },
              { text: '色', reading: 'いろ' }
            ],
            meaning: { en: 'yellow', vi: 'màu vàng' }
          },
          {
            parts: [
              { text: '水', reading: 'みず' },
              { text: '色', reading: 'いろ' }
            ],
            meaning: { en: 'light blue', vi: 'màu xanh nước' }
          }
        ]
      },
      {
        char: '黄',
        meaning: { en: 'yellow', vi: 'hoàng - màu vàng' },
        onyomi: ['コウ', 'オウ'],
        kunyomi: ['き', 'こ'],
        components: [],
        mnemonic: {
          en: 'A picture of a fire arrow whose burning tip glows yellow: the color yellow.',
          vi: 'Hình mũi tên lửa với đầu cháy rực sắc vàng: màu vàng.'
        },
        examples: [
          {
            parts: [{ text: '黄', reading: 'き' }],
            meaning: { en: 'yellow', vi: 'màu vàng' }
          },
          {
            parts: [
              { text: '黄', reading: 'き' },
              { text: '色', reading: 'いろ' }
            ],
            meaning: { en: 'yellow', vi: 'màu vàng' }
          },
          {
            parts: [
              { text: '黄', reading: 'おう' },
              { text: '金', reading: 'ごん' }
            ],
            meaning: { en: 'gold', vi: 'hoàng kim, vàng' }
          }
        ]
      },
      {
        char: '黒',
        meaning: { en: 'black', vi: 'hắc - màu đen' },
        onyomi: ['コク'],
        kunyomi: ['くろ', 'くろ.い'],
        components: [],
        mnemonic: {
          en: 'Soot from a fire 灬 rising up and blackening everything above it: the color black.',
          vi: 'Bồ hóng từ ngọn lửa 灬 bốc lên làm đen mọi thứ phía trên: màu đen.'
        },
        examples: [
          {
            parts: [{ text: '黒', reading: 'くろ' }],
            meaning: { en: 'black', vi: 'màu đen' }
          },
          {
            parts: [
              { text: '黒', reading: 'くろ' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'black (adjective)', vi: 'đen' }
          },
          {
            parts: [
              { text: '黒', reading: 'こく' },
              { text: '板', reading: 'ばん' }
            ],
            meaning: { en: 'blackboard', vi: 'bảng đen' }
          }
        ]
      },
      {
        char: '丸',
        meaning: { en: 'round, circle; pill', vi: 'hoàn - tròn; viên (thuốc)' },
        onyomi: ['ガン'],
        kunyomi: ['まる', 'まる.い'],
        components: [],
        mnemonic: {
          en: 'A person curling their body into a rounded ball: round, a circle.',
          vi: 'Một người co mình cuộn tròn lại: tròn, hình tròn.'
        },
        examples: [
          {
            parts: [{ text: '丸', reading: 'まる' }],
            meaning: { en: 'circle, round', vi: 'hình tròn' }
          },
          {
            parts: [
              { text: '丸', reading: 'まる' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'round', vi: 'tròn' }
          },
          {
            parts: [
              { text: '丸', reading: 'まる' },
              { text: '太', reading: 'た' }
            ],
            meaning: { en: 'log', vi: 'khúc gỗ tròn' }
          }
        ]
      },
      {
        char: '刀',
        meaning: { en: 'sword, blade', vi: 'đao - dao, kiếm' },
        onyomi: ['トウ'],
        kunyomi: ['かたな'],
        components: [],
        mnemonic: {
          en: 'A picture of a single-edged blade with its handle: a sword, a knife.',
          vi: 'Hình một lưỡi dao một cạnh có cán: thanh đao, con dao.'
        },
        examples: [
          {
            parts: [{ text: '刀', reading: 'かたな' }],
            meaning: { en: 'sword', vi: 'thanh kiếm' }
          },
          {
            parts: [
              { text: '日', reading: 'に' },
              { text: '本', reading: 'ほん' },
              { text: '刀', reading: 'とう' }
            ],
            meaning: { en: 'Japanese sword', vi: 'kiếm Nhật' }
          },
          {
            parts: [
              { text: '小', reading: 'こ' },
              { text: '刀', reading: 'がたな' }
            ],
            meaning: { en: 'small knife', vi: 'con dao nhỏ' }
          }
        ]
      },
      {
        char: '弓',
        meaning: { en: 'bow (for archery)', vi: 'cung - cái cung (bắn tên)' },
        onyomi: ['キュウ'],
        kunyomi: ['ゆみ'],
        components: [],
        mnemonic: {
          en: 'A picture of an archery bow, curved and strung: a bow.',
          vi: 'Hình cây cung bắn tên, cong và đã căng dây: cái cung.'
        },
        examples: [
          {
            parts: [{ text: '弓', reading: 'ゆみ' }],
            meaning: { en: 'bow', vi: 'cây cung' }
          },
          {
            parts: [
              { text: '弓', reading: 'きゅう' },
              { text: '道', reading: 'どう' }
            ],
            meaning: { en: 'Japanese archery', vi: 'cung đạo, bắn cung' }
          },
          {
            parts: [
              { text: '弓', reading: 'ゆみ' },
              { text: '矢', reading: 'や' }
            ],
            meaning: { en: 'bow and arrow', vi: 'cung tên' }
          }
        ]
      },
      {
        char: '矢',
        meaning: { en: 'arrow', vi: 'thỉ - mũi tên' },
        onyomi: ['シ'],
        kunyomi: ['や'],
        components: [],
        mnemonic: {
          en: 'A picture of an arrow with its head and feathered tail: an arrow.',
          vi: 'Hình mũi tên có đầu nhọn và đuôi lông: mũi tên.'
        },
        examples: [
          {
            parts: [{ text: '矢', reading: 'や' }],
            meaning: { en: 'arrow', vi: 'mũi tên' }
          },
          {
            parts: [
              { text: '弓', reading: 'ゆみ' },
              { text: '矢', reading: 'や' }
            ],
            meaning: { en: 'bow and arrow', vi: 'cung tên' }
          },
          {
            parts: [
              { text: '矢', reading: 'や' },
              { text: '印', reading: 'じるし' }
            ],
            meaning: { en: 'arrow mark, arrow sign', vi: 'dấu mũi tên' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Time, travel & making things',
      vi: 'Thời gian, đi lại & tạo tác'
    },
    kanji: [
      {
        char: '間',
        meaning: {
          en: 'interval, space; between',
          vi: 'gian - khoảng cách, khoảng giữa; thời gian'
        },
        onyomi: ['カン', 'ケン'],
        kunyomi: ['あいだ', 'ま'],
        components: ['門', '日'],
        mnemonic: {
          en: 'Sunlight 日 shining through the gap in a gate 門: the space or interval between.',
          vi: 'Ánh nắng 日 lọt qua khe cổng 門: khoảng trống, khoảng giữa.'
        },
        examples: [
          {
            parts: [
              { text: '時', reading: 'じ' },
              { text: '間', reading: 'かん' }
            ],
            meaning: { en: 'time, hour', vi: 'thời gian, giờ' }
          },
          {
            parts: [
              { text: '人', reading: 'にん' },
              { text: '間', reading: 'げん' }
            ],
            meaning: { en: 'human being', vi: 'con người' }
          },
          {
            parts: [{ text: '間', reading: 'あいだ' }],
            meaning: { en: 'space between, interval', vi: 'khoảng giữa' }
          }
        ]
      },
      {
        char: '汽',
        meaning: { en: 'steam, vapor', vi: 'khí - hơi nước' },
        onyomi: ['キ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Water 氵 turning into rising vapor 气 as it boils: steam.',
          vi: 'Nước 氵 sôi bốc thành hơi 气 bay lên: hơi nước.'
        },
        examples: [
          {
            parts: [
              { text: '汽', reading: 'き' },
              { text: '車', reading: 'しゃ' }
            ],
            meaning: { en: 'steam train', vi: 'tàu hơi nước' }
          },
          {
            parts: [
              { text: '汽', reading: 'き' },
              { text: '船', reading: 'せん' }
            ],
            meaning: { en: 'steamship', vi: 'tàu thủy hơi nước' }
          },
          {
            parts: [
              { text: '汽', reading: 'き' },
              { text: '笛', reading: 'てき' }
            ],
            meaning: { en: 'steam whistle', vi: 'còi hơi' }
          }
        ]
      },
      {
        char: '午',
        meaning: { en: 'noon, midday', vi: 'ngọ - giữa trưa' },
        onyomi: ['ゴ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'The sun at its highest, the marker splitting the day in half: noon.',
          vi: 'Mặt trời lên cao nhất, cái mốc chia đôi ngày: giữa trưa.'
        },
        examples: [
          {
            parts: [
              { text: '午', reading: 'ご' },
              { text: '前', reading: 'ぜん' }
            ],
            meaning: { en: 'morning, a.m.', vi: 'buổi sáng, trước trưa' }
          },
          {
            parts: [
              { text: '午', reading: 'ご' },
              { text: '後', reading: 'ご' }
            ],
            meaning: { en: 'afternoon, p.m.', vi: 'buổi chiều, sau trưa' }
          },
          {
            parts: [
              { text: '正', reading: 'しょう' },
              { text: '午', reading: 'ご' }
            ],
            meaning: { en: 'noon exactly', vi: 'chính ngọ, đúng trưa' }
          }
        ]
      },
      {
        char: '寺',
        meaning: { en: 'temple', vi: 'tự - ngôi chùa' },
        onyomi: ['ジ'],
        kunyomi: ['てら'],
        components: ['土', '寸'],
        mnemonic: {
          en: 'A place on the earth 土 tended by careful hands 寸: a temple.',
          vi: 'Nơi trên mặt đất 土 được bàn tay 寸 chăm sóc kỹ lưỡng: ngôi chùa.'
        },
        examples: [
          {
            parts: [{ text: '寺', reading: 'てら' }],
            meaning: { en: 'temple', vi: 'chùa' }
          },
          {
            parts: [
              { text: '山', reading: 'やま' },
              { text: '寺', reading: 'でら' }
            ],
            meaning: { en: 'mountain temple', vi: 'chùa trên núi' }
          },
          {
            parts: [
              { text: '寺', reading: 'じ' },
              { text: '院', reading: 'いん' }
            ],
            meaning: { en: 'temple (Buddhist)', vi: 'tự viện, chùa' }
          }
        ]
      },
      {
        char: '切',
        meaning: { en: 'to cut; earnest, important', vi: 'thiết - cắt; tha thiết, quan trọng' },
        onyomi: ['セツ', 'サイ'],
        kunyomi: ['き.る', 'き.れる'],
        components: [],
        mnemonic: {
          en: 'Bringing a blade 刀 down to slice through something: to cut, and by extension, to be earnest.',
          vi: 'Hạ lưỡi dao 刀 xuống cắt đứt vật gì đó: cắt, và nghĩa rộng là tha thiết.'
        },
        examples: [
          {
            parts: [
              { text: '切', reading: 'き' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to cut', vi: 'cắt' }
          },
          {
            parts: [
              { text: '大', reading: 'たい' },
              { text: '切', reading: 'せつ' }
            ],
            meaning: { en: 'important, precious', vi: 'quan trọng, quý giá' }
          },
          {
            parts: [
              { text: '切', reading: 'きっ' },
              { text: '手', reading: 'て' }
            ],
            meaning: { en: 'postage stamp', vi: 'con tem' }
          }
        ]
      },
      {
        char: '船',
        meaning: { en: 'ship, boat', vi: 'thuyền - tàu, thuyền' },
        onyomi: ['セン'],
        kunyomi: ['ふね', 'ふな'],
        components: [],
        mnemonic: {
          en: 'A boat 舟 big enough to carry many people across the water: a ship.',
          vi: 'Chiếc thuyền 舟 đủ lớn chở nhiều người qua nước: con tàu.'
        },
        examples: [
          {
            parts: [{ text: '船', reading: 'ふね' }],
            meaning: { en: 'ship, boat', vi: 'con thuyền, tàu' }
          },
          {
            parts: [
              { text: '船', reading: 'せん' },
              { text: '長', reading: 'ちょう' }
            ],
            meaning: { en: 'ship captain', vi: 'thuyền trưởng' }
          },
          {
            parts: [
              { text: '汽', reading: 'き' },
              { text: '船', reading: 'せん' }
            ],
            meaning: { en: 'steamship', vi: 'tàu thủy hơi nước' }
          }
        ]
      },
      {
        char: '線',
        meaning: { en: 'line, wire; route', vi: 'tuyến - đường kẻ, dây; tuyến' },
        onyomi: ['セン'],
        kunyomi: [],
        components: ['糸', '白', '水'],
        mnemonic: {
          en: 'A thread 糸 drawn out as long and thin as a spring of water 泉: a line, a wire.',
          vi: 'Sợi chỉ 糸 kéo dài mảnh như dòng suối 泉: đường kẻ, sợi dây, tuyến.'
        },
        examples: [
          {
            parts: [
              { text: '電', reading: 'でん' },
              { text: '線', reading: 'せん' }
            ],
            meaning: { en: 'electric wire', vi: 'dây điện' }
          },
          {
            parts: [
              { text: '線', reading: 'せん' },
              { text: '路', reading: 'ろ' }
            ],
            meaning: { en: 'railway track', vi: 'đường ray' }
          },
          {
            parts: [
              { text: '直', reading: 'ちょく' },
              { text: '線', reading: 'せん' }
            ],
            meaning: { en: 'straight line', vi: 'đường thẳng' }
          }
        ]
      },
      {
        char: '組',
        meaning: { en: 'to assemble; group, class', vi: 'tổ - kết thành nhóm; tổ, nhóm, lớp' },
        onyomi: ['ソ'],
        kunyomi: ['く.む', 'くみ'],
        components: [],
        mnemonic: {
          en: 'Threads 糸 twisted and bound together into one cord: to assemble, a group or class.',
          vi: 'Những sợi chỉ 糸 xoắn bện lại thành một: kết nhóm, tổ, nhóm, lớp.'
        },
        examples: [
          {
            parts: [{ text: '組', reading: 'くみ' }],
            meaning: { en: 'group, class', vi: 'tổ, nhóm, lớp' }
          },
          {
            parts: [
              { text: '番', reading: 'ばん' },
              { text: '組', reading: 'ぐみ' }
            ],
            meaning: { en: 'TV/radio program', vi: 'chương trình (TV, radio)' }
          },
          {
            parts: [
              { text: '組', reading: 'く' },
              { text: 'む', reading: 'む' }
            ],
            meaning: { en: 'to assemble, to put together', vi: 'lắp ráp, kết lại' }
          }
        ]
      },
      {
        char: '当',
        meaning: {
          en: 'to hit; right, suitable; this',
          vi: 'đương/đáng - trúng, đúng; thích đáng'
        },
        onyomi: ['トウ'],
        kunyomi: ['あ.たる', 'あ.てる'],
        components: [],
        mnemonic: {
          en: 'A small mark landing exactly on its target: to hit, to be right, to be suitable.',
          vi: 'Một dấu nhỏ rơi trúng đúng đích: trúng, đúng, thích đáng.'
        },
        examples: [
          {
            parts: [
              { text: '当', reading: 'あ' },
              { text: 'た', reading: 'た' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to hit, to be correct', vi: 'trúng, đúng' }
          },
          {
            parts: [
              { text: '本', reading: 'ほん' },
              { text: '当', reading: 'とう' }
            ],
            meaning: { en: 'truth, really', vi: 'thật, thật sự' }
          },
          {
            parts: [
              { text: '当', reading: 'とう' },
              { text: '番', reading: 'ばん' }
            ],
            meaning: { en: 'person on duty', vi: 'người trực (phiên)' }
          }
        ]
      },
      {
        char: '絵',
        meaning: { en: 'picture, drawing, painting', vi: 'hội/họa - bức tranh, tranh vẽ' },
        onyomi: ['カイ', 'エ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Colored threads 糸 brought together 会 to embroider a picture: a drawing, a painting.',
          vi: 'Những sợi chỉ 糸 màu tụ lại 会 thêu nên bức tranh: tranh vẽ.'
        },
        examples: [
          {
            parts: [{ text: '絵', reading: 'え' }],
            meaning: { en: 'picture, drawing', vi: 'bức tranh' }
          },
          {
            parts: [
              { text: '絵', reading: 'え' },
              { text: '本', reading: 'ほん' }
            ],
            meaning: { en: 'picture book', vi: 'sách tranh' }
          },
          {
            parts: [
              { text: '絵', reading: 'かい' },
              { text: '画', reading: 'が' }
            ],
            meaning: { en: 'painting, picture', vi: 'hội họa, tranh' }
          }
        ]
      }
    ]
  }
]);

/**
 * Grade 3 Jōyō kanji (200 characters), learned 10 per lesson. Author each lesson
 * by hand; keep 10 kanji per lesson and add new lessons in order.
 */
export const grade3Lessons: KanjiLesson[] = withSequentialNumbers([
  {
    title: {
      en: 'Feelings & the mind',
      vi: 'Cảm xúc & tâm trí'
    },
    kanji: [
      {
        char: '悪',
        meaning: { en: 'bad, evil', vi: 'ác - xấu, tệ; ác' },
        onyomi: ['アク', 'オ'],
        kunyomi: ['わる.い'],
        components: [],
        mnemonic: {
          en: 'A twisted, ugly feeling weighing down on the heart 心: bad, evil.',
          vi: 'Một cảm giác méo mó, xấu xa đè nặng lên trái tim 心: xấu, ác.'
        },
        examples: [
          {
            parts: [
              { text: '悪', reading: 'わる' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'bad', vi: 'xấu, tệ' }
          },
          {
            parts: [
              { text: '悪', reading: 'あく' },
              { text: '人', reading: 'にん' }
            ],
            meaning: { en: 'bad person, villain', vi: 'kẻ xấu, kẻ ác' }
          },
          {
            parts: [
              { text: '悪', reading: 'わる' },
              { text: '気', reading: 'ぎ' }
            ],
            meaning: { en: 'ill will, malice', vi: 'ác ý' }
          }
        ]
      },
      {
        char: '安',
        meaning: { en: 'peaceful, safe; cheap', vi: 'an - yên ổn, an toàn; rẻ' },
        onyomi: ['アン'],
        kunyomi: ['やす.い'],
        components: ['宀', '女'],
        mnemonic: {
          en: 'A woman 女 settled safely under a roof 宀: peaceful, secure, and by extension cheap (worry-free).',
          vi: 'Người phụ nữ 女 an vị dưới mái nhà 宀: yên ổn, an toàn, và nghĩa rộng là rẻ (không phải lo lắng).'
        },
        examples: [
          {
            parts: [
              { text: '安', reading: 'やす' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'cheap, inexpensive', vi: 'rẻ' }
          },
          {
            parts: [
              { text: '安', reading: 'あん' },
              { text: '心', reading: 'しん' }
            ],
            meaning: { en: 'relief, peace of mind', vi: 'an tâm, yên lòng' }
          },
          {
            parts: [
              { text: '安', reading: 'あん' },
              { text: '全', reading: 'ぜん' }
            ],
            meaning: { en: 'safety', vi: 'an toàn' }
          }
        ]
      },
      {
        char: '暗',
        meaning: { en: 'dark, gloomy', vi: 'ám - tối, u tối' },
        onyomi: ['アン'],
        kunyomi: ['くら.い'],
        components: ['日', '音'],
        mnemonic: {
          en: 'When the sun 日 sets and only sound 音 remains: it is dark.',
          vi: 'Khi mặt trời 日 lặn, chỉ còn lại âm thanh 音: trời tối.'
        },
        examples: [
          {
            parts: [
              { text: '暗', reading: 'くら' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'dark', vi: 'tối' }
          },
          {
            parts: [
              { text: '暗', reading: 'あん' },
              { text: '記', reading: 'き' }
            ],
            meaning: { en: 'memorization (by heart)', vi: 'học thuộc lòng' }
          },
          {
            parts: [
              { text: '明', reading: 'めい' },
              { text: '暗', reading: 'あん' }
            ],
            meaning: { en: 'light and dark', vi: 'sáng và tối' }
          }
        ]
      },
      {
        char: '幸',
        meaning: { en: 'happiness, good fortune', vi: 'hạnh - hạnh phúc, may mắn' },
        onyomi: ['コウ'],
        kunyomi: ['しあわ.せ', 'さいわ.い'],
        components: [],
        mnemonic: {
          en: 'A charm once worn to ward off punishment, now a sign of good luck: happiness, fortune.',
          vi: 'Một lá bùa xưa đeo để tránh hình phạt, nay thành dấu hiệu điều lành: hạnh phúc, may mắn.'
        },
        examples: [
          {
            parts: [
              { text: '幸', reading: 'しあわ' },
              { text: 'せ', reading: 'せ' }
            ],
            meaning: { en: 'happiness', vi: 'hạnh phúc' }
          },
          {
            parts: [
              { text: '幸', reading: 'こう' },
              { text: '福', reading: 'ふく' }
            ],
            meaning: { en: 'happiness, well-being', vi: 'hạnh phúc' }
          },
          {
            parts: [
              { text: '幸', reading: 'こう' },
              { text: '運', reading: 'うん' }
            ],
            meaning: { en: 'good luck', vi: 'may mắn' }
          }
        ]
      },
      {
        char: '悲',
        meaning: { en: 'sad, sorrowful', vi: 'bi - buồn, bi thương' },
        onyomi: ['ヒ'],
        kunyomi: ['かな.しい'],
        components: ['非', '心'],
        mnemonic: {
          en: 'When things turn out not 非 as the heart 心 had wished: sadness, grief.',
          vi: 'Khi mọi việc hóa ra không 非 như lòng 心 mong muốn: nỗi buồn, bi thương.'
        },
        examples: [
          {
            parts: [
              { text: '悲', reading: 'かな' },
              { text: 'し', reading: 'し' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'sad', vi: 'buồn' }
          },
          {
            parts: [
              { text: '悲', reading: 'ひ' },
              { text: '鳴', reading: 'めい' }
            ],
            meaning: { en: 'scream, shriek', vi: 'tiếng thét, kêu la' }
          },
          {
            parts: [
              { text: '悲', reading: 'かな' },
              { text: 'し', reading: 'し' },
              { text: 'む', reading: 'む' }
            ],
            meaning: { en: 'to grieve, to feel sad', vi: 'đau buồn, thương xót' }
          }
        ]
      },
      {
        char: '意',
        meaning: { en: 'mind, intention; meaning', vi: 'ý - ý nghĩ, ý định; ý nghĩa' },
        onyomi: ['イ'],
        kunyomi: [],
        components: ['音', '心'],
        mnemonic: {
          en: 'The sound 音 that rises up from the heart 心: what you mean, your intention.',
          vi: 'Âm thanh 音 vang lên từ trái tim 心: điều bạn muốn nói, ý định.'
        },
        examples: [
          {
            parts: [
              { text: '意', reading: 'い' },
              { text: '見', reading: 'けん' }
            ],
            meaning: { en: 'opinion', vi: 'ý kiến' }
          },
          {
            parts: [
              { text: '用', reading: 'よう' },
              { text: '意', reading: 'い' }
            ],
            meaning: { en: 'preparation', vi: 'sự chuẩn bị' }
          },
          {
            parts: [
              { text: '意', reading: 'い' },
              { text: '味', reading: 'み' }
            ],
            meaning: { en: 'meaning', vi: 'ý nghĩa' }
          }
        ]
      },
      {
        char: '感',
        meaning: { en: 'to feel; feeling, emotion', vi: 'cảm - cảm giác, cảm nhận' },
        onyomi: ['カン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Something striking all through the heart 心: a feeling, an emotion.',
          vi: 'Điều gì đó chạm khắp trái tim 心: cảm giác, cảm xúc.'
        },
        examples: [
          {
            parts: [
              { text: '感', reading: 'かん' },
              { text: 'じ', reading: 'じ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to feel', vi: 'cảm thấy' }
          },
          {
            parts: [
              { text: '感', reading: 'かん' },
              { text: '動', reading: 'どう' }
            ],
            meaning: { en: 'being moved, deep emotion', vi: 'cảm động' }
          },
          {
            parts: [
              { text: '感', reading: 'かん' },
              { text: '心', reading: 'しん' }
            ],
            meaning: { en: 'admiration', vi: 'khâm phục, thán phục' }
          }
        ]
      },
      {
        char: '想',
        meaning: { en: 'thought, idea; to imagine', vi: 'tưởng - suy nghĩ, ý tưởng; tưởng tượng' },
        onyomi: ['ソウ', 'ソ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Holding the appearance 相 of things in the heart 心: to picture, to imagine, a thought.',
          vi: 'Giữ hình ảnh 相 của sự vật trong lòng 心: hình dung, tưởng tượng, ý tưởng.'
        },
        examples: [
          {
            parts: [
              { text: '感', reading: 'かん' },
              { text: '想', reading: 'そう' }
            ],
            meaning: { en: 'impression, thoughts', vi: 'cảm tưởng' }
          },
          {
            parts: [
              { text: '予', reading: 'よ' },
              { text: '想', reading: 'そう' }
            ],
            meaning: { en: 'prediction, expectation', vi: 'dự đoán' }
          },
          {
            parts: [
              { text: '理', reading: 'り' },
              { text: '想', reading: 'そう' }
            ],
            meaning: { en: 'ideal', vi: 'lý tưởng' }
          }
        ]
      },
      {
        char: '相',
        meaning: {
          en: 'mutual; appearance; minister',
          vi: 'tương/tướng - lẫn nhau; vẻ ngoài; tể tướng'
        },
        onyomi: ['ソウ', 'ショウ'],
        kunyomi: ['あい'],
        components: ['木', '目'],
        mnemonic: {
          en: 'An eye 目 examining a tree 木 up close, the two facing each other: mutual, and the look of a thing.',
          vi: 'Con mắt 目 nhìn kỹ cái cây 木, hai bên đối diện nhau: lẫn nhau, và vẻ ngoài của vật.'
        },
        examples: [
          {
            parts: [
              { text: '相', reading: 'そう' },
              { text: '談', reading: 'だん' }
            ],
            meaning: { en: 'consultation', vi: 'sự bàn bạc, tư vấn' }
          },
          {
            parts: [
              { text: '相', reading: 'あい' },
              { text: '手', reading: 'て' }
            ],
            meaning: { en: 'partner, the other party', vi: 'đối phương, người kia' }
          },
          {
            parts: [
              { text: '首', reading: 'しゅ' },
              { text: '相', reading: 'しょう' }
            ],
            meaning: { en: 'prime minister', vi: 'thủ tướng' }
          }
        ]
      },
      {
        char: '息',
        meaning: { en: 'breath; son', vi: 'tức - hơi thở; con trai' },
        onyomi: ['ソク'],
        kunyomi: ['いき'],
        components: ['自', '心'],
        mnemonic: {
          en: 'Breath moving from the nose 自 down to the heart 心: a breath.',
          vi: 'Hơi thở đi từ mũi 自 xuống tới tim 心: hơi thở.'
        },
        examples: [
          {
            parts: [{ text: '息', reading: 'いき' }],
            meaning: { en: 'breath', vi: 'hơi thở' }
          },
          {
            parts: [
              { text: '休', reading: 'きゅう' },
              { text: '息', reading: 'そく' }
            ],
            meaning: { en: 'rest, breather', vi: 'nghỉ ngơi' }
          },
          {
            parts: [
              { text: '息', reading: 'むす' },
              { text: '子', reading: 'こ' }
            ],
            meaning: { en: 'son', vi: 'con trai' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Health & the body',
      vi: 'Sức khỏe & cơ thể'
    },
    kanji: [
      {
        char: '医',
        meaning: { en: 'medicine; doctor', vi: 'y - y học, thầy thuốc' },
        onyomi: ['イ'],
        kunyomi: [],
        components: ['匚', '矢'],
        mnemonic: {
          en: 'An arrow 矢 wound treated inside a box-like case 匚 of tools: medicine, healing, a doctor.',
          vi: 'Vết thương do mũi tên 矢 được chữa trong hộp đồ nghề 匚: y học, thầy thuốc.'
        },
        examples: [
          {
            parts: [
              { text: '医', reading: 'い' },
              { text: '者', reading: 'しゃ' }
            ],
            meaning: { en: 'doctor', vi: 'bác sĩ' }
          },
          {
            parts: [
              { text: '医', reading: 'い' },
              { text: '学', reading: 'がく' }
            ],
            meaning: { en: 'medical science', vi: 'y học' }
          },
          {
            parts: [
              { text: '歯', reading: 'は' },
              { text: '医', reading: 'い' },
              { text: '者', reading: 'しゃ' }
            ],
            meaning: { en: 'dentist', vi: 'nha sĩ' }
          }
        ]
      },
      {
        char: '病',
        meaning: { en: 'illness, disease', vi: 'bệnh - bệnh tật, ốm' },
        onyomi: ['ビョウ'],
        kunyomi: ['や.む', 'やまい'],
        components: [],
        mnemonic: {
          en: 'A person lying on a sickbed under the sickness roof 疒: illness, disease.',
          vi: 'Người nằm trên giường bệnh dưới mái bệnh 疒: bệnh tật, ốm đau.'
        },
        examples: [
          {
            parts: [
              { text: '病', reading: 'びょう' },
              { text: '気', reading: 'き' }
            ],
            meaning: { en: 'illness, sickness', vi: 'bệnh, ốm' }
          },
          {
            parts: [
              { text: '病', reading: 'びょう' },
              { text: '院', reading: 'いん' }
            ],
            meaning: { en: 'hospital', vi: 'bệnh viện' }
          },
          {
            parts: [
              { text: '病', reading: 'びょう' },
              { text: '人', reading: 'にん' }
            ],
            meaning: { en: 'sick person, patient', vi: 'người bệnh' }
          }
        ]
      },
      {
        char: '死',
        meaning: { en: 'death; to die', vi: 'tử - chết, cái chết' },
        onyomi: ['シ'],
        kunyomi: ['し.ぬ'],
        components: [],
        mnemonic: {
          en: 'A person kneeling beside bare bones 歹: death, to die.',
          vi: 'Một người quỳ bên bộ xương trơ 歹: cái chết, chết.'
        },
        examples: [
          {
            parts: [
              { text: '死', reading: 'し' },
              { text: 'ぬ', reading: 'ぬ' }
            ],
            meaning: { en: 'to die', vi: 'chết' }
          },
          {
            parts: [
              { text: '死', reading: 'し' },
              { text: '者', reading: 'しゃ' }
            ],
            meaning: { en: 'the dead, casualties', vi: 'người chết' }
          },
          {
            parts: [
              { text: '病', reading: 'びょう' },
              { text: '死', reading: 'し' }
            ],
            meaning: { en: 'death from illness', vi: 'chết vì bệnh' }
          }
        ]
      },
      {
        char: '血',
        meaning: { en: 'blood', vi: 'huyết - máu' },
        onyomi: ['ケツ'],
        kunyomi: ['ち'],
        components: [],
        mnemonic: {
          en: 'A drop marked above a dish 皿 to show blood collected in it: blood.',
          vi: 'Một giọt đánh dấu phía trên cái đĩa 皿 để chỉ máu hứng trong đó: máu.'
        },
        examples: [
          {
            parts: [{ text: '血', reading: 'ち' }],
            meaning: { en: 'blood', vi: 'máu' }
          },
          {
            parts: [
              { text: '出', reading: 'しゅっ' },
              { text: '血', reading: 'けつ' }
            ],
            meaning: { en: 'bleeding', vi: 'chảy máu, xuất huyết' }
          },
          {
            parts: [
              { text: '血', reading: 'けっ' },
              { text: '色', reading: 'しょく' }
            ],
            meaning: { en: 'complexion', vi: 'sắc mặt, thần sắc' }
          }
        ]
      },
      {
        char: '薬',
        meaning: { en: 'medicine, drug', vi: 'dược - thuốc' },
        onyomi: ['ヤク'],
        kunyomi: ['くすり'],
        components: [],
        mnemonic: {
          en: 'The healing herbs 艹 that bring comfort and ease 楽 to the sick: medicine.',
          vi: 'Những loại cây cỏ 艹 mang lại sự dễ chịu 楽 cho người bệnh: thuốc.'
        },
        examples: [
          {
            parts: [{ text: '薬', reading: 'くすり' }],
            meaning: { en: 'medicine', vi: 'thuốc' }
          },
          {
            parts: [
              { text: '薬', reading: 'やく' },
              { text: '品', reading: 'ひん' }
            ],
            meaning: { en: 'chemicals, drugs', vi: 'dược phẩm, hóa chất' }
          },
          {
            parts: [
              { text: '目', reading: 'め' },
              { text: '薬', reading: 'ぐすり' }
            ],
            meaning: { en: 'eye drops', vi: 'thuốc nhỏ mắt' }
          }
        ]
      },
      {
        char: '鼻',
        meaning: { en: 'nose', vi: 'tị - cái mũi' },
        onyomi: ['ビ'],
        kunyomi: ['はな'],
        components: [],
        mnemonic: {
          en: 'The nose 自 (originally a drawing of a nose) shown in full with the nostrils below: the nose.',
          vi: 'Cái mũi 自 (vốn là hình vẽ cái mũi) vẽ đầy đủ với lỗ mũi bên dưới: cái mũi.'
        },
        examples: [
          {
            parts: [{ text: '鼻', reading: 'はな' }],
            meaning: { en: 'nose', vi: 'mũi' }
          },
          {
            parts: [
              { text: '鼻', reading: 'はな' },
              { text: '水', reading: 'みず' }
            ],
            meaning: { en: 'runny nose, snot', vi: 'nước mũi' }
          },
          {
            parts: [
              { text: '鼻', reading: 'はな' },
              { text: '血', reading: 'ぢ' }
            ],
            meaning: { en: 'nosebleed', vi: 'chảy máu cam' }
          }
        ]
      },
      {
        char: '歯',
        meaning: { en: 'tooth', vi: 'xỉ - răng' },
        onyomi: ['シ'],
        kunyomi: ['は'],
        components: [],
        mnemonic: {
          en: 'Teeth set in the mouth that bite down and stop 止 the food: a tooth.',
          vi: 'Hàm răng trong miệng cắn xuống chặn 止 thức ăn lại: cái răng.'
        },
        examples: [
          {
            parts: [{ text: '歯', reading: 'は' }],
            meaning: { en: 'tooth', vi: 'răng' }
          },
          {
            parts: [
              { text: '歯', reading: 'は' },
              { text: '医', reading: 'い' },
              { text: '者', reading: 'しゃ' }
            ],
            meaning: { en: 'dentist', vi: 'nha sĩ' }
          },
          {
            parts: [
              { text: '虫', reading: 'むし' },
              { text: '歯', reading: 'ば' }
            ],
            meaning: { en: 'cavity, tooth decay', vi: 'sâu răng' }
          }
        ]
      },
      {
        char: '指',
        meaning: { en: 'finger; to point', vi: 'chỉ - ngón tay; chỉ, trỏ' },
        onyomi: ['シ'],
        kunyomi: ['ゆび', 'さ.す'],
        components: [],
        mnemonic: {
          en: 'The part of the hand 扌 you use to point at what you want: a finger, to point.',
          vi: 'Phần của bàn tay 扌 dùng để trỏ vào thứ mình muốn: ngón tay, chỉ trỏ.'
        },
        examples: [
          {
            parts: [{ text: '指', reading: 'ゆび' }],
            meaning: { en: 'finger', vi: 'ngón tay' }
          },
          {
            parts: [
              { text: '指', reading: 'さ' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to point at', vi: 'chỉ, trỏ' }
          },
          {
            parts: [
              { text: '指', reading: 'し' },
              { text: '名', reading: 'めい' }
            ],
            meaning: { en: 'nomination, naming', vi: 'chỉ định, nêu tên' }
          }
        ]
      },
      {
        char: '皮',
        meaning: { en: 'skin, hide; peel', vi: 'bì - da; vỏ' },
        onyomi: ['ヒ'],
        kunyomi: ['かわ'],
        components: [],
        mnemonic: {
          en: 'A hand peeling the hide off an animal: skin, hide, leather, or the peel of a fruit.',
          vi: 'Một bàn tay lột da con thú: da, da thú, hoặc vỏ trái cây.'
        },
        examples: [
          {
            parts: [{ text: '皮', reading: 'かわ' }],
            meaning: { en: 'skin, peel', vi: 'da, vỏ' }
          },
          {
            parts: [
              { text: '毛', reading: 'け' },
              { text: '皮', reading: 'がわ' }
            ],
            meaning: { en: 'fur, pelt', vi: 'da lông thú' }
          },
          {
            parts: [
              { text: '皮', reading: 'ひ' },
              { text: '肉', reading: 'にく' }
            ],
            meaning: { en: 'irony, sarcasm', vi: 'mỉa mai, châm biếm' }
          }
        ]
      },
      {
        char: '身',
        meaning: { en: 'body; oneself', vi: 'thân - thân thể; bản thân' },
        onyomi: ['シン'],
        kunyomi: ['み'],
        components: [],
        mnemonic: {
          en: 'A picture of a person with a rounded belly, the whole body: body, oneself.',
          vi: 'Hình một người với cái bụng tròn, cả cơ thể: thân thể, bản thân.'
        },
        examples: [
          {
            parts: [{ text: '身', reading: 'み' }],
            meaning: { en: 'body, oneself', vi: 'thân, mình' }
          },
          {
            parts: [
              { text: '中', reading: 'なか' },
              { text: '身', reading: 'み' }
            ],
            meaning: { en: 'contents, inside', vi: 'phần bên trong, ruột' }
          },
          {
            parts: [
              { text: '身', reading: 'しん' },
              { text: '長', reading: 'ちょう' }
            ],
            meaning: { en: 'height (of a person)', vi: 'chiều cao' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Study & school',
      vi: 'Học tập & trường lớp'
    },
    kanji: [
      {
        char: '勉',
        meaning: { en: 'effort, diligence', vi: 'miễn - cố gắng, chăm chỉ' },
        onyomi: ['ベン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Putting in strength 力 to push yourself past every excuse: to make an effort, to study hard.',
          vi: 'Dồn sức 力 để vượt qua mọi cái cớ lười biếng: cố gắng, chăm chỉ học.'
        },
        examples: [
          {
            parts: [
              { text: '勉', reading: 'べん' },
              { text: '強', reading: 'きょう' }
            ],
            meaning: { en: 'study', vi: 'học tập' }
          },
          {
            parts: [
              { text: '勉', reading: 'べん' },
              { text: '学', reading: 'がく' }
            ],
            meaning: { en: 'study, learning', vi: 'sự học, học hành' }
          }
        ]
      },
      {
        char: '習',
        meaning: { en: 'to learn, to practice', vi: 'tập - học, luyện tập' },
        onyomi: ['シュウ'],
        kunyomi: ['なら.う'],
        components: ['羽', '白'],
        mnemonic: {
          en: 'A young bird flapping its wings 羽 over and over in the white 白 daylight to learn to fly: to learn, to practice.',
          vi: 'Chim non vỗ đôi cánh 羽 hết lần này đến lần khác giữa ban ngày 白 để tập bay: học, luyện tập.'
        },
        examples: [
          {
            parts: [
              { text: '習', reading: 'なら' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to learn (from someone)', vi: 'học (từ ai đó)' }
          },
          {
            parts: [
              { text: '学', reading: 'がく' },
              { text: '習', reading: 'しゅう' }
            ],
            meaning: { en: 'study, learning', vi: 'học tập' }
          },
          {
            parts: [
              { text: '練', reading: 'れん' },
              { text: '習', reading: 'しゅう' }
            ],
            meaning: { en: 'practice, drill', vi: 'luyện tập' }
          }
        ]
      },
      {
        char: '究',
        meaning: { en: 'to research, to investigate', vi: 'cứu - nghiên cứu, tìm tòi' },
        onyomi: ['キュウ'],
        kunyomi: ['きわ.める'],
        components: [],
        mnemonic: {
          en: 'Digging all the way to the end of a cave 穴 to get to the bottom of things: to research, to investigate.',
          vi: 'Đào tới tận cùng cái hang 穴 để truy đến ngọn ngành: nghiên cứu, tìm tòi.'
        },
        examples: [
          {
            parts: [
              { text: '研', reading: 'けん' },
              { text: '究', reading: 'きゅう' }
            ],
            meaning: { en: 'research', vi: 'nghiên cứu' }
          },
          {
            parts: [
              { text: '究', reading: 'きわ' },
              { text: 'め', reading: 'め' },
              { text: 'る', reading: 'る' }
            ],
            meaning: {
              en: 'to master, to look into thoroughly',
              vi: 'thấu suốt, tìm hiểu tận cùng'
            }
          }
        ]
      },
      {
        char: '研',
        meaning: { en: 'to polish, to grind; research', vi: 'nghiên - mài; nghiên cứu' },
        onyomi: ['ケン'],
        kunyomi: ['と.ぐ'],
        components: [],
        mnemonic: {
          en: 'Grinding something smooth against a stone 石 over and over: to polish, and by extension to research deeply.',
          vi: 'Mài một vật cho nhẵn trên hòn đá 石 lặp đi lặp lại: mài, và nghĩa rộng là nghiên cứu sâu.'
        },
        examples: [
          {
            parts: [
              { text: '研', reading: 'けん' },
              { text: '究', reading: 'きゅう' }
            ],
            meaning: { en: 'research', vi: 'nghiên cứu' }
          },
          {
            parts: [
              { text: '研', reading: 'と' },
              { text: 'ぐ', reading: 'ぐ' }
            ],
            meaning: { en: 'to sharpen, to grind', vi: 'mài (dao, gạo)' }
          },
          {
            parts: [
              { text: '研', reading: 'けん' },
              { text: '修', reading: 'しゅう' }
            ],
            meaning: { en: 'training, workshop', vi: 'tập huấn, đào tạo' }
          }
        ]
      },
      {
        char: '級',
        meaning: { en: 'rank, grade; class', vi: 'cấp - cấp bậc; lớp học' },
        onyomi: ['キュウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Threads 糸 tied at set levels along a rope: a rank, a grade, a class.',
          vi: 'Những sợi chỉ 糸 buộc theo từng nấc dọc sợi dây: cấp bậc, hạng, lớp học.'
        },
        examples: [
          {
            parts: [
              { text: '学', reading: 'がっ' },
              { text: '級', reading: 'きゅう' }
            ],
            meaning: { en: 'class (in school)', vi: 'lớp học' }
          },
          {
            parts: [
              { text: '上', reading: 'じょう' },
              { text: '級', reading: 'きゅう' }
            ],
            meaning: { en: 'advanced level', vi: 'cấp cao, nâng cao' }
          },
          {
            parts: [
              { text: '高', reading: 'こう' },
              { text: '級', reading: 'きゅう' }
            ],
            meaning: { en: 'high-class, high-grade', vi: 'cao cấp' }
          }
        ]
      },
      {
        char: '題',
        meaning: { en: 'topic, title; problem', vi: 'đề - đề tài, đề mục; bài toán' },
        onyomi: ['ダイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'The heading at the head 頁 of a text that sets its subject: a topic, a title, a problem to solve.',
          vi: 'Dòng tiêu đề ở đầu 頁 bài viết nêu chủ đề: đề tài, đề mục, bài toán.'
        },
        examples: [
          {
            parts: [
              { text: '問', reading: 'もん' },
              { text: '題', reading: 'だい' }
            ],
            meaning: { en: 'problem, question', vi: 'vấn đề, bài toán' }
          },
          {
            parts: [
              { text: '話', reading: 'わ' },
              { text: '題', reading: 'だい' }
            ],
            meaning: { en: 'topic of conversation', vi: 'chủ đề, đề tài' }
          },
          {
            parts: [
              { text: '宿', reading: 'しゅく' },
              { text: '題', reading: 'だい' }
            ],
            meaning: { en: 'homework', vi: 'bài tập về nhà' }
          }
        ]
      },
      {
        char: '問',
        meaning: { en: 'to ask; question', vi: 'vấn - hỏi; câu hỏi' },
        onyomi: ['モン'],
        kunyomi: ['と.う', 'と.い'],
        components: ['門', '口'],
        mnemonic: {
          en: 'A mouth 口 at the gate 門 calling out to ask something: to ask, a question.',
          vi: 'Cái miệng 口 ở cổng 門 gọi vào để hỏi: hỏi, câu hỏi.'
        },
        examples: [
          {
            parts: [
              { text: '問', reading: 'もん' },
              { text: '題', reading: 'だい' }
            ],
            meaning: { en: 'problem, question', vi: 'vấn đề, bài toán' }
          },
          {
            parts: [
              { text: '質', reading: 'しつ' },
              { text: '問', reading: 'もん' }
            ],
            meaning: { en: 'question, query', vi: 'câu hỏi' }
          },
          {
            parts: [
              { text: '問', reading: 'と' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to ask, to inquire', vi: 'hỏi, chất vấn' }
          }
        ]
      },
      {
        char: '章',
        meaning: { en: 'chapter; badge, emblem', vi: 'chương - chương (sách); huy hiệu' },
        onyomi: ['ショウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A complete unit of music or writing marked off from start to finish: a chapter, and a badge or emblem.',
          vi: 'Một đoạn nhạc hay bài viết trọn vẹn từ đầu đến cuối: chương, và huy hiệu, phù hiệu.'
        },
        examples: [
          {
            parts: [
              { text: '文', reading: 'ぶん' },
              { text: '章', reading: 'しょう' }
            ],
            meaning: { en: 'sentence, writing', vi: 'câu văn, đoạn văn' }
          },
          {
            parts: [{ text: '章', reading: 'しょう' }],
            meaning: { en: 'chapter', vi: 'chương' }
          },
          {
            parts: [
              { text: '楽', reading: 'がく' },
              { text: '章', reading: 'しょう' }
            ],
            meaning: { en: 'movement (of music)', vi: 'chương nhạc' }
          }
        ]
      },
      {
        char: '詩',
        meaning: { en: 'poem, poetry', vi: 'thi - thơ, thi ca' },
        onyomi: ['シ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Words 言 crafted with the calm care of a temple 寺: a poem, poetry.',
          vi: 'Lời nói 言 được trau chuốt với sự tĩnh tại như ngôi chùa 寺: bài thơ, thi ca.'
        },
        examples: [
          {
            parts: [{ text: '詩', reading: 'し' }],
            meaning: { en: 'poem', vi: 'bài thơ' }
          },
          {
            parts: [
              { text: '詩', reading: 'し' },
              { text: '人', reading: 'じん' }
            ],
            meaning: { en: 'poet', vi: 'nhà thơ' }
          },
          {
            parts: [
              { text: '詩', reading: 'し' },
              { text: '集', reading: 'しゅう' }
            ],
            meaning: { en: 'poetry collection', vi: 'tập thơ' }
          }
        ]
      },
      {
        char: '業',
        meaning: {
          en: 'work, trade, business; studies',
          vi: 'nghiệp - việc làm, nghề nghiệp; học nghiệp'
        },
        onyomi: ['ギョウ', 'ゴウ'],
        kunyomi: ['わざ'],
        components: [],
        mnemonic: {
          en: 'A rack heavy with tools and instruments ready for the day: work, a trade, business, and studies.',
          vi: 'Cái giá đầy dụng cụ, nhạc cụ sẵn sàng cho một ngày: công việc, nghề nghiệp, học nghiệp.'
        },
        examples: [
          {
            parts: [
              { text: '授', reading: 'じゅ' },
              { text: '業', reading: 'ぎょう' }
            ],
            meaning: { en: 'class, lesson', vi: 'tiết học, buổi học' }
          },
          {
            parts: [
              { text: '工', reading: 'こう' },
              { text: '業', reading: 'ぎょう' }
            ],
            meaning: { en: 'industry', vi: 'công nghiệp' }
          },
          {
            parts: [
              { text: '農', reading: 'のう' },
              { text: '業', reading: 'ぎょう' }
            ],
            meaning: { en: 'agriculture', vi: 'nông nghiệp' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Movement & travel',
      vi: 'Di chuyển & du lịch'
    },
    kanji: [
      {
        char: '運',
        meaning: { en: 'to carry, to transport; luck', vi: 'vận - vận chuyển, chở; vận may' },
        onyomi: ['ウン'],
        kunyomi: ['はこ.ぶ'],
        components: [],
        mnemonic: {
          en: 'An army 軍 on the move 辶, hauling its supplies along: to carry, to transport, and the fortune that movement brings.',
          vi: 'Một đạo quân 軍 di chuyển 辶, chở theo quân nhu: vận chuyển, và vận may mà sự chuyển vần mang lại.'
        },
        examples: [
          {
            parts: [
              { text: '運', reading: 'はこ' },
              { text: 'ぶ', reading: 'ぶ' }
            ],
            meaning: { en: 'to carry, to transport', vi: 'vận chuyển, chở' }
          },
          {
            parts: [
              { text: '運', reading: 'うん' },
              { text: '動', reading: 'どう' }
            ],
            meaning: { en: 'exercise, sports', vi: 'vận động, thể thao' }
          },
          {
            parts: [
              { text: '運', reading: 'うん' },
              { text: '転', reading: 'てん' }
            ],
            meaning: { en: 'driving (a vehicle)', vi: 'lái xe' }
          }
        ]
      },
      {
        char: '動',
        meaning: { en: 'to move', vi: 'động - chuyển động, cử động' },
        onyomi: ['ドウ'],
        kunyomi: ['うご.く'],
        components: [],
        mnemonic: {
          en: 'It takes real strength 力 to shift something heavy 重: to move.',
          vi: 'Phải có sức 力 thật sự mới dịch được vật nặng 重: chuyển động, cử động.'
        },
        examples: [
          {
            parts: [
              { text: '動', reading: 'うご' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to move', vi: 'chuyển động, cử động' }
          },
          {
            parts: [
              { text: '運', reading: 'うん' },
              { text: '動', reading: 'どう' }
            ],
            meaning: { en: 'exercise, sports', vi: 'vận động, thể thao' }
          },
          {
            parts: [
              { text: '動', reading: 'どう' },
              { text: '物', reading: 'ぶつ' }
            ],
            meaning: { en: 'animal', vi: 'động vật' }
          }
        ]
      },
      {
        char: '転',
        meaning: { en: 'to turn, to roll; to tumble', vi: 'chuyển - quay, lăn; ngã' },
        onyomi: ['テン'],
        kunyomi: ['ころ.ぶ', 'ころ.がる'],
        components: [],
        mnemonic: {
          en: 'The wheels of a cart 車 rolling round and round: to turn, to roll, to tumble.',
          vi: 'Bánh xe 車 lăn tròn vòng vòng: quay, lăn, ngã.'
        },
        examples: [
          {
            parts: [
              { text: '転', reading: 'ころ' },
              { text: 'ぶ', reading: 'ぶ' }
            ],
            meaning: { en: 'to fall over, to tumble', vi: 'ngã, vấp ngã' }
          },
          {
            parts: [
              { text: '運', reading: 'うん' },
              { text: '転', reading: 'てん' }
            ],
            meaning: { en: 'driving (a vehicle)', vi: 'lái xe' }
          },
          {
            parts: [
              { text: '自', reading: 'じ' },
              { text: '転', reading: 'てん' },
              { text: '車', reading: 'しゃ' }
            ],
            meaning: { en: 'bicycle', vi: 'xe đạp' }
          }
        ]
      },
      {
        char: '進',
        meaning: { en: 'to advance, to progress', vi: 'tiến - tiến lên, tiến bộ' },
        onyomi: ['シン'],
        kunyomi: ['すす.む'],
        components: [],
        mnemonic: {
          en: 'A bird 隹 can only fly forward as it moves 辶: to advance, to move forward, to progress.',
          vi: 'Con chim 隹 khi bay 辶 chỉ tiến về phía trước: tiến lên, tiến bộ.'
        },
        examples: [
          {
            parts: [
              { text: '進', reading: 'すす' },
              { text: 'む', reading: 'む' }
            ],
            meaning: { en: 'to advance, to move forward', vi: 'tiến lên' }
          },
          {
            parts: [
              { text: '前', reading: 'ぜん' },
              { text: '進', reading: 'しん' }
            ],
            meaning: { en: 'advance, forward movement', vi: 'tiến về phía trước' }
          },
          {
            parts: [
              { text: '進', reading: 'しん' },
              { text: '学', reading: 'がく' }
            ],
            meaning: { en: 'going on to higher education', vi: 'học lên (cấp trên)' }
          }
        ]
      },
      {
        char: '追',
        meaning: { en: 'to chase, to pursue', vi: 'truy - đuổi theo, truy đuổi' },
        onyomi: ['ツイ'],
        kunyomi: ['お.う'],
        components: [],
        mnemonic: {
          en: 'Setting off in motion 辶 after someone ahead of you: to chase, to pursue.',
          vi: 'Lên đường di chuyển 辶 theo sau người phía trước: đuổi theo, truy đuổi.'
        },
        examples: [
          {
            parts: [
              { text: '追', reading: 'お' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to chase, to pursue', vi: 'đuổi theo' }
          },
          {
            parts: [
              { text: '追', reading: 'つい' },
              { text: '加', reading: 'か' }
            ],
            meaning: { en: 'addition, appending', vi: 'bổ sung, thêm vào' }
          },
          {
            parts: [
              { text: '追', reading: 'お' },
              { text: 'い', reading: 'い' },
              { text: '出', reading: 'だ' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to drive out, to expel', vi: 'đuổi ra, tống ra' }
          }
        ]
      },
      {
        char: '送',
        meaning: { en: 'to send; to see off', vi: 'tống - gửi, đưa tiễn' },
        onyomi: ['ソウ'],
        kunyomi: ['おく.る'],
        components: [],
        mnemonic: {
          en: 'Setting something in motion 辶 to carry it off to another place: to send, to see off.',
          vi: 'Cho vật gì đó lên đường 辶 để đưa tới nơi khác: gửi, đưa tiễn.'
        },
        examples: [
          {
            parts: [
              { text: '送', reading: 'おく' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to send; to see off', vi: 'gửi; tiễn' }
          },
          {
            parts: [
              { text: '放', reading: 'ほう' },
              { text: '送', reading: 'そう' }
            ],
            meaning: { en: 'broadcast', vi: 'phát sóng' }
          },
          {
            parts: [
              { text: '見', reading: 'み' },
              { text: '送', reading: 'おく' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to see (someone) off', vi: 'tiễn đưa' }
          }
        ]
      },
      {
        char: '返',
        meaning: { en: 'to return, to give back', vi: 'phản - trả lại, hoàn lại' },
        onyomi: ['ヘン'],
        kunyomi: ['かえ.す', 'かえ.る'],
        components: [],
        mnemonic: {
          en: 'Turning back 反 the way you came, in motion 辶: to return something, to give back.',
          vi: 'Quay ngược 反 lại con đường cũ 辶: trả lại, hoàn lại.'
        },
        examples: [
          {
            parts: [
              { text: '返', reading: 'かえ' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to give back, to return', vi: 'trả lại' }
          },
          {
            parts: [
              { text: '返', reading: 'へん' },
              { text: '事', reading: 'じ' }
            ],
            meaning: { en: 'reply, answer', vi: 'sự trả lời, hồi âm' }
          },
          {
            parts: [
              { text: '返', reading: 'へん' },
              { text: '答', reading: 'とう' }
            ],
            meaning: { en: 'reply, response', vi: 'sự đáp lại' }
          }
        ]
      },
      {
        char: '遊',
        meaning: { en: 'to play, to enjoy oneself', vi: 'du - chơi, vui chơi; đi dạo' },
        onyomi: ['ユウ'],
        kunyomi: ['あそ.ぶ'],
        components: [],
        mnemonic: {
          en: 'Wandering about on the move 辶 with no set task, just for fun: to play, to enjoy oneself.',
          vi: 'Lang thang đây đó 辶 chẳng có việc gì, chỉ để vui: chơi, vui chơi, đi dạo.'
        },
        examples: [
          {
            parts: [
              { text: '遊', reading: 'あそ' },
              { text: 'ぶ', reading: 'ぶ' }
            ],
            meaning: { en: 'to play', vi: 'chơi, vui chơi' }
          },
          {
            parts: [
              { text: '遊', reading: 'ゆう' },
              { text: '園', reading: 'えん' },
              { text: '地', reading: 'ち' }
            ],
            meaning: { en: 'amusement park', vi: 'công viên giải trí' }
          },
          {
            parts: [
              { text: '遊', reading: 'あそ' },
              { text: 'び', reading: 'び' }
            ],
            meaning: { en: 'play, game', vi: 'trò chơi, cuộc chơi' }
          }
        ]
      },
      {
        char: '泳',
        meaning: { en: 'to swim', vi: 'vịnh - bơi, bơi lội' },
        onyomi: ['エイ'],
        kunyomi: ['およ.ぐ'],
        components: [],
        mnemonic: {
          en: 'Moving your body through the water 氵 to stay afloat: to swim.',
          vi: 'Đưa cơ thể lướt qua nước 氵 để nổi: bơi, bơi lội.'
        },
        examples: [
          {
            parts: [
              { text: '泳', reading: 'およ' },
              { text: 'ぐ', reading: 'ぐ' }
            ],
            meaning: { en: 'to swim', vi: 'bơi' }
          },
          {
            parts: [
              { text: '水', reading: 'すい' },
              { text: '泳', reading: 'えい' }
            ],
            meaning: { en: 'swimming', vi: 'bơi lội' }
          },
          {
            parts: [
              { text: '平', reading: 'ひら' },
              { text: '泳', reading: 'およ' },
              { text: 'ぎ', reading: 'ぎ' }
            ],
            meaning: { en: 'breaststroke', vi: 'bơi ếch' }
          }
        ]
      },
      {
        char: '旅',
        meaning: { en: 'travel, journey', vi: 'lữ - đi du lịch, hành trình' },
        onyomi: ['リョ'],
        kunyomi: ['たび'],
        components: [],
        mnemonic: {
          en: 'People following a banner, setting off together on a long journey: travel, a trip.',
          vi: 'Đoàn người theo lá cờ, cùng lên đường một hành trình dài: đi du lịch, chuyến đi.'
        },
        examples: [
          {
            parts: [{ text: '旅', reading: 'たび' }],
            meaning: { en: 'trip, journey', vi: 'chuyến đi' }
          },
          {
            parts: [
              { text: '旅', reading: 'りょ' },
              { text: '行', reading: 'こう' }
            ],
            meaning: { en: 'travel, trip', vi: 'du lịch' }
          },
          {
            parts: [
              { text: '旅', reading: 'りょ' },
              { text: '館', reading: 'かん' }
            ],
            meaning: { en: 'Japanese inn', vi: 'nhà trọ kiểu Nhật' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Water & nature',
      vi: 'Nước & thiên nhiên'
    },
    kanji: [
      {
        char: '温',
        meaning: { en: 'warm; temperature', vi: 'ôn - ấm, ấm áp; nhiệt độ' },
        onyomi: ['オン'],
        kunyomi: ['あたた.かい'],
        components: [],
        mnemonic: {
          en: 'Warm water 氵 held in a dish 皿 under the sun 日: warm, and temperature.',
          vi: 'Nước ấm 氵 đựng trong đĩa 皿 dưới nắng 日: ấm áp, và nhiệt độ.'
        },
        examples: [
          {
            parts: [
              { text: '温', reading: 'あたた' },
              { text: 'か', reading: 'か' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'warm', vi: 'ấm áp' }
          },
          {
            parts: [
              { text: '気', reading: 'き' },
              { text: '温', reading: 'おん' }
            ],
            meaning: { en: 'air temperature', vi: 'nhiệt độ không khí' }
          },
          {
            parts: [
              { text: '温', reading: 'おん' },
              { text: '泉', reading: 'せん' }
            ],
            meaning: { en: 'hot spring', vi: 'suối nước nóng' }
          }
        ]
      },
      {
        char: '湯',
        meaning: { en: 'hot water', vi: 'thang - nước nóng' },
        onyomi: ['トウ'],
        kunyomi: ['ゆ'],
        components: [],
        mnemonic: {
          en: 'Water 氵 heated under the rising sun until it steams: hot water.',
          vi: 'Nước 氵 được đun dưới mặt trời cho tới khi bốc hơi: nước nóng.'
        },
        examples: [
          {
            parts: [{ text: '湯', reading: 'ゆ' }],
            meaning: { en: 'hot water', vi: 'nước nóng' }
          },
          {
            parts: [
              { text: '湯', reading: 'ゆ' },
              { text: '気', reading: 'げ' }
            ],
            meaning: { en: 'steam, vapor', vi: 'hơi nước nóng' }
          },
          {
            parts: [
              { text: '銭', reading: 'せん' },
              { text: '湯', reading: 'とう' }
            ],
            meaning: { en: 'public bath', vi: 'nhà tắm công cộng' }
          }
        ]
      },
      {
        char: '波',
        meaning: { en: 'wave', vi: 'ba - sóng' },
        onyomi: ['ハ'],
        kunyomi: ['なみ'],
        components: [],
        mnemonic: {
          en: 'The skin 皮 of the water 氵 rising and rippling: a wave.',
          vi: 'Lớp da 皮 của mặt nước 氵 dâng lên gợn sóng: con sóng.'
        },
        examples: [
          {
            parts: [{ text: '波', reading: 'なみ' }],
            meaning: { en: 'wave', vi: 'sóng' }
          },
          {
            parts: [
              { text: '電', reading: 'でん' },
              { text: '波', reading: 'ぱ' }
            ],
            meaning: { en: 'radio wave', vi: 'sóng điện từ' }
          },
          {
            parts: [
              { text: '大', reading: 'おお' },
              { text: '波', reading: 'なみ' }
            ],
            meaning: { en: 'big wave', vi: 'sóng lớn' }
          }
        ]
      },
      {
        char: '氷',
        meaning: { en: 'ice', vi: 'băng - nước đá, băng' },
        onyomi: ['ヒョウ'],
        kunyomi: ['こおり', 'ひ'],
        components: [],
        mnemonic: {
          en: 'Water 水 with an extra mark to show it has frozen solid: ice.',
          vi: 'Nước 水 thêm một dấu để chỉ nó đã đông cứng: nước đá, băng.'
        },
        examples: [
          {
            parts: [{ text: '氷', reading: 'こおり' }],
            meaning: { en: 'ice', vi: 'nước đá' }
          },
          {
            parts: [
              { text: '氷', reading: 'こおり' },
              { text: '水', reading: 'みず' }
            ],
            meaning: { en: 'ice water', vi: 'nước đá' }
          },
          {
            parts: [
              { text: '氷', reading: 'ひょう' },
              { text: '山', reading: 'ざん' }
            ],
            meaning: { en: 'iceberg', vi: 'núi băng' }
          }
        ]
      },
      {
        char: '湖',
        meaning: { en: 'lake', vi: 'hồ - cái hồ' },
        onyomi: ['コ'],
        kunyomi: ['みずうみ'],
        components: [],
        mnemonic: {
          en: 'A great, calm body of water 氵 resting inland: a lake.',
          vi: 'Một vùng nước 氵 lớn, tĩnh lặng nằm trong đất liền: cái hồ.'
        },
        examples: [
          {
            parts: [{ text: '湖', reading: 'みずうみ' }],
            meaning: { en: 'lake', vi: 'hồ' }
          },
          {
            parts: [
              { text: '湖', reading: 'こ' },
              { text: '水', reading: 'すい' }
            ],
            meaning: { en: 'lake water', vi: 'nước hồ' }
          },
          {
            parts: [
              { text: '湖', reading: 'こ' },
              { text: '岸', reading: 'がん' }
            ],
            meaning: { en: 'lakeshore', vi: 'bờ hồ' }
          }
        ]
      },
      {
        char: '港',
        meaning: { en: 'harbor, port', vi: 'cảng - bến cảng' },
        onyomi: ['コウ'],
        kunyomi: ['みなと'],
        components: [],
        mnemonic: {
          en: 'A sheltered inlet of water 氵 where boats gather: a harbor, a port.',
          vi: 'Một vũng nước 氵 kín gió nơi thuyền bè tụ lại: bến cảng.'
        },
        examples: [
          {
            parts: [{ text: '港', reading: 'みなと' }],
            meaning: { en: 'harbor, port', vi: 'bến cảng' }
          },
          {
            parts: [
              { text: '空', reading: 'くう' },
              { text: '港', reading: 'こう' }
            ],
            meaning: { en: 'airport', vi: 'sân bay' }
          },
          {
            parts: [
              { text: '港', reading: 'みなと' },
              { text: '町', reading: 'まち' }
            ],
            meaning: { en: 'port town', vi: 'thị trấn cảng' }
          }
        ]
      },
      {
        char: '島',
        meaning: { en: 'island', vi: 'đảo - hòn đảo' },
        onyomi: ['トウ'],
        kunyomi: ['しま'],
        components: [],
        mnemonic: {
          en: 'A mountain 山 in the sea where birds 鳥 land to rest: an island.',
          vi: 'Một ngọn núi 山 giữa biển nơi chim 鳥 đáp xuống nghỉ: hòn đảo.'
        },
        examples: [
          {
            parts: [{ text: '島', reading: 'しま' }],
            meaning: { en: 'island', vi: 'hòn đảo' }
          },
          {
            parts: [
              { text: '半', reading: 'はん' },
              { text: '島', reading: 'とう' }
            ],
            meaning: { en: 'peninsula', vi: 'bán đảo' }
          },
          {
            parts: [
              { text: '島', reading: 'しま' },
              { text: '国', reading: 'ぐに' }
            ],
            meaning: { en: 'island nation', vi: 'đảo quốc' }
          }
        ]
      },
      {
        char: '岸',
        meaning: { en: 'shore, coast, bank', vi: 'ngạn - bờ (sông, biển)' },
        onyomi: ['ガン'],
        kunyomi: ['きし'],
        components: ['山', '厂'],
        mnemonic: {
          en: 'Where the mountain 山 meets a cliff 厂 dropping down to the water: the shore, the bank.',
          vi: 'Nơi núi 山 gặp vách đá 厂 đổ xuống mặt nước: bờ sông, bờ biển.'
        },
        examples: [
          {
            parts: [{ text: '岸', reading: 'きし' }],
            meaning: { en: 'shore, bank', vi: 'bờ' }
          },
          {
            parts: [
              { text: '海', reading: 'かい' },
              { text: '岸', reading: 'がん' }
            ],
            meaning: { en: 'coast, seashore', vi: 'bờ biển' }
          },
          {
            parts: [
              { text: '川', reading: 'かわ' },
              { text: '岸', reading: 'ぎし' }
            ],
            meaning: { en: 'riverbank', vi: 'bờ sông' }
          }
        ]
      },
      {
        char: '炭',
        meaning: { en: 'charcoal, coal', vi: 'thán - than, than củi' },
        onyomi: ['タン'],
        kunyomi: ['すみ'],
        components: ['山', '火'],
        mnemonic: {
          en: 'What is left when fire 火 burns wood from the mountain 山 down to black lumps: charcoal, coal.',
          vi: 'Thứ còn lại khi lửa 火 đốt gỗ trên núi 山 thành những cục đen: than, than củi.'
        },
        examples: [
          {
            parts: [{ text: '炭', reading: 'すみ' }],
            meaning: { en: 'charcoal', vi: 'than củi' }
          },
          {
            parts: [
              { text: '石', reading: 'せき' },
              { text: '炭', reading: 'たん' }
            ],
            meaning: { en: 'coal', vi: 'than đá' }
          },
          {
            parts: [
              { text: '炭', reading: 'すみ' },
              { text: '火', reading: 'び' }
            ],
            meaning: { en: 'charcoal fire', vi: 'lửa than' }
          }
        ]
      },
      {
        char: '油',
        meaning: { en: 'oil', vi: 'du - dầu' },
        onyomi: ['ユ'],
        kunyomi: ['あぶら'],
        components: [],
        mnemonic: {
          en: 'A liquid 氵 that seeps up out of the ground: oil.',
          vi: 'Một chất lỏng 氵 rỉ ra từ dưới đất: dầu.'
        },
        examples: [
          {
            parts: [{ text: '油', reading: 'あぶら' }],
            meaning: { en: 'oil', vi: 'dầu' }
          },
          {
            parts: [
              { text: '石', reading: 'せき' },
              { text: '油', reading: 'ゆ' }
            ],
            meaning: { en: 'petroleum', vi: 'dầu mỏ' }
          },
          {
            parts: [
              { text: '油', reading: 'あぶら' },
              { text: '絵', reading: 'え' }
            ],
            meaning: { en: 'oil painting', vi: 'tranh sơn dầu' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Food, drink & goods',
      vi: 'Đồ ăn, thức uống & vật dụng'
    },
    kanji: [
      {
        char: '飲',
        meaning: { en: 'to drink', vi: 'ẩm - uống' },
        onyomi: ['イン'],
        kunyomi: ['の.む'],
        components: ['食', '欠'],
        mnemonic: {
          en: 'Opening the mouth wide 欠 to take in food and drink 食: to drink.',
          vi: 'Há miệng thật to 欠 để đưa đồ ăn thức uống 食 vào: uống.'
        },
        examples: [
          {
            parts: [
              { text: '飲', reading: 'の' },
              { text: 'む', reading: 'む' }
            ],
            meaning: { en: 'to drink', vi: 'uống' }
          },
          {
            parts: [
              { text: '飲', reading: 'いん' },
              { text: '食', reading: 'しょく' }
            ],
            meaning: { en: 'food and drink', vi: 'ăn uống' }
          },
          {
            parts: [
              { text: '飲', reading: 'の' },
              { text: 'み', reading: 'み' },
              { text: '物', reading: 'もの' }
            ],
            meaning: { en: 'beverage, drink', vi: 'đồ uống' }
          }
        ]
      },
      {
        char: '酒',
        meaning: { en: 'sake, alcohol', vi: 'tửu - rượu' },
        onyomi: ['シュ'],
        kunyomi: ['さけ', 'さか'],
        components: [],
        mnemonic: {
          en: 'Liquid 氵 fermented in a wine jar 酉: sake, alcohol.',
          vi: 'Chất lỏng 氵 ủ lên men trong vò rượu 酉: rượu.'
        },
        examples: [
          {
            parts: [{ text: '酒', reading: 'さけ' }],
            meaning: { en: 'sake, alcohol', vi: 'rượu' }
          },
          {
            parts: [
              { text: '日', reading: 'に' },
              { text: '本', reading: 'ほん' },
              { text: '酒', reading: 'しゅ' }
            ],
            meaning: { en: 'Japanese sake', vi: 'rượu sake Nhật' }
          },
          {
            parts: [
              { text: '酒', reading: 'さか' },
              { text: '屋', reading: 'や' }
            ],
            meaning: { en: 'liquor store; pub', vi: 'quán rượu, tiệm rượu' }
          }
        ]
      },
      {
        char: '味',
        meaning: { en: 'taste, flavor', vi: 'vị - vị, hương vị' },
        onyomi: ['ミ'],
        kunyomi: ['あじ', 'あじ.わう'],
        components: [],
        mnemonic: {
          en: 'What the mouth 口 senses from food: taste, flavor.',
          vi: 'Điều cái miệng 口 cảm nhận được từ thức ăn: vị, hương vị.'
        },
        examples: [
          {
            parts: [{ text: '味', reading: 'あじ' }],
            meaning: { en: 'taste, flavor', vi: 'vị, hương vị' }
          },
          {
            parts: [
              { text: '意', reading: 'い' },
              { text: '味', reading: 'み' }
            ],
            meaning: { en: 'meaning', vi: 'ý nghĩa' }
          },
          {
            parts: [
              { text: '趣', reading: 'しゅ' },
              { text: '味', reading: 'み' }
            ],
            meaning: { en: 'hobby, taste', vi: 'sở thích' }
          }
        ]
      },
      {
        char: '品',
        meaning: { en: 'goods, article; quality', vi: 'phẩm - hàng hóa, món đồ; phẩm chất' },
        onyomi: ['ヒン'],
        kunyomi: ['しな'],
        components: ['口', '口', '口'],
        mnemonic: {
          en: 'Boxes stacked up like three mouths 口 in a pile: goods, articles, and their quality.',
          vi: 'Những cái hộp xếp chồng như ba cái miệng 口 chất đống: hàng hóa, món đồ, và phẩm chất.'
        },
        examples: [
          {
            parts: [{ text: '品', reading: 'しな' }],
            meaning: { en: 'goods, article', vi: 'hàng hóa, món đồ' }
          },
          {
            parts: [
              { text: '作', reading: 'さく' },
              { text: '品', reading: 'ひん' }
            ],
            meaning: { en: 'work, piece', vi: 'tác phẩm' }
          },
          {
            parts: [
              { text: '食', reading: 'しょく' },
              { text: '品', reading: 'ひん' }
            ],
            meaning: { en: 'foodstuff, groceries', vi: 'thực phẩm' }
          }
        ]
      },
      {
        char: '具',
        meaning: {
          en: 'tool, equipment; ingredients',
          vi: 'cụ - dụng cụ; nguyên liệu (món ăn)'
        },
        onyomi: ['グ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Holding up a tool in both hands, ready to use: an implement, equipment, and the ingredients in a dish.',
          vi: 'Nâng một dụng cụ bằng cả hai tay, sẵn sàng dùng: dụng cụ, đồ nghề, và nguyên liệu trong món ăn.'
        },
        examples: [
          {
            parts: [
              { text: '道', reading: 'どう' },
              { text: '具', reading: 'ぐ' }
            ],
            meaning: { en: 'tool, implement', vi: 'dụng cụ, đồ nghề' }
          },
          {
            parts: [
              { text: '家', reading: 'か' },
              { text: '具', reading: 'ぐ' }
            ],
            meaning: { en: 'furniture', vi: 'đồ nội thất' }
          },
          {
            parts: [
              { text: '文', reading: 'ぶん' },
              { text: '具', reading: 'ぐ' }
            ],
            meaning: { en: 'stationery', vi: 'văn phòng phẩm' }
          }
        ]
      },
      {
        char: '荷',
        meaning: { en: 'luggage, cargo; burden', vi: 'hà - hành lý, hàng hóa; gánh nặng' },
        onyomi: ['カ'],
        kunyomi: ['に'],
        components: [],
        mnemonic: {
          en: 'A load of plants 艹 that a person 何 carries on their shoulders: luggage, cargo, a burden.',
          vi: 'Một bó cây cỏ 艹 mà người 何 gánh trên vai: hành lý, hàng hóa, gánh nặng.'
        },
        examples: [
          {
            parts: [
              { text: '荷', reading: 'に' },
              { text: '物', reading: 'もつ' }
            ],
            meaning: { en: 'luggage, baggage', vi: 'hành lý' }
          },
          {
            parts: [{ text: '荷', reading: 'に' }],
            meaning: { en: 'load, cargo', vi: 'hàng, gánh' }
          },
          {
            parts: [
              { text: '出', reading: 'しゅっ' },
              { text: '荷', reading: 'か' }
            ],
            meaning: { en: 'shipping, dispatch', vi: 'xuất hàng' }
          }
        ]
      },
      {
        char: '箱',
        meaning: { en: 'box, case', vi: 'sương - cái hộp, thùng' },
        onyomi: [],
        kunyomi: ['はこ'],
        components: [],
        mnemonic: {
          en: 'A container woven from bamboo 竹 to store things in: a box.',
          vi: 'Một cái đồ đựng đan từ tre 竹 để cất đồ: cái hộp, cái thùng.'
        },
        examples: [
          {
            parts: [{ text: '箱', reading: 'はこ' }],
            meaning: { en: 'box', vi: 'cái hộp' }
          },
          {
            parts: [
              { text: '本', reading: 'ほん' },
              { text: '箱', reading: 'ばこ' }
            ],
            meaning: { en: 'bookcase', vi: 'tủ sách, hộp sách' }
          },
          {
            parts: [
              { text: '空', reading: 'あ' },
              { text: 'き', reading: 'き' },
              { text: '箱', reading: 'ばこ' }
            ],
            meaning: { en: 'empty box', vi: 'hộp rỗng' }
          }
        ]
      },
      {
        char: '皿',
        meaning: { en: 'plate, dish', vi: 'mãnh - cái đĩa' },
        onyomi: [],
        kunyomi: ['さら'],
        components: [],
        mnemonic: {
          en: 'A picture of a shallow dish or bowl standing on its base: a plate, a dish.',
          vi: 'Hình một cái đĩa nông đứng trên đế: cái đĩa.'
        },
        examples: [
          {
            parts: [{ text: '皿', reading: 'さら' }],
            meaning: { en: 'plate, dish', vi: 'cái đĩa' }
          },
          {
            parts: [
              { text: '小', reading: 'こ' },
              { text: '皿', reading: 'ざら' }
            ],
            meaning: { en: 'small plate', vi: 'đĩa nhỏ' }
          },
          {
            parts: [
              { text: '灰', reading: 'はい' },
              { text: '皿', reading: 'ざら' }
            ],
            meaning: { en: 'ashtray', vi: 'gạt tàn' }
          }
        ]
      },
      {
        char: '服',
        meaning: {
          en: 'clothes; to obey; dose',
          vi: 'phục - quần áo; phục tùng; liều (thuốc)'
        },
        onyomi: ['フク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'What you put on the body 月 to cover it: clothes.',
          vi: 'Thứ khoác lên cơ thể 月 để che: quần áo.'
        },
        examples: [
          {
            parts: [{ text: '服', reading: 'ふく' }],
            meaning: { en: 'clothes', vi: 'quần áo' }
          },
          {
            parts: [
              { text: '洋', reading: 'よう' },
              { text: '服', reading: 'ふく' }
            ],
            meaning: { en: 'Western clothes', vi: 'quần áo kiểu Tây' }
          },
          {
            parts: [
              { text: '制', reading: 'せい' },
              { text: '服', reading: 'ふく' }
            ],
            meaning: { en: 'uniform', vi: 'đồng phục' }
          }
        ]
      },
      {
        char: '福',
        meaning: { en: 'good fortune, blessing', vi: 'phúc - phúc, may mắn, điều lành' },
        onyomi: ['フク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Praying at an altar 礻 for a jar 畐 full to the brim: good fortune, blessing.',
          vi: 'Cầu nguyện trước bàn thờ 礻 cho một vò 畐 đầy ắp: phúc, may mắn, điều lành.'
        },
        examples: [
          {
            parts: [
              { text: '幸', reading: 'こう' },
              { text: '福', reading: 'ふく' }
            ],
            meaning: { en: 'happiness, well-being', vi: 'hạnh phúc' }
          },
          {
            parts: [
              { text: '大', reading: 'だい' },
              { text: '福', reading: 'ふく' }
            ],
            meaning: { en: 'daifuku (mochi sweet)', vi: 'bánh daifuku' }
          },
          {
            parts: [
              { text: '福', reading: 'ふく' },
              { text: '引', reading: 'びき' }
            ],
            meaning: { en: 'lottery, raffle', vi: 'rút thăm trúng thưởng' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'People & society',
      vi: 'Con người & xã hội'
    },
    kanji: [
      {
        char: '仕',
        meaning: { en: 'to serve; to do (work)', vi: 'sĩ - phục vụ, làm việc' },
        onyomi: ['シ', 'ジ'],
        kunyomi: ['つか.える'],
        components: [],
        mnemonic: {
          en: 'A person 亻 serving a lord like a retainer 士: to serve, to do work.',
          vi: 'Một người 亻 phục vụ chủ như kẻ sĩ 士: phục vụ, làm việc.'
        },
        examples: [
          {
            parts: [
              { text: '仕', reading: 'し' },
              { text: '事', reading: 'ごと' }
            ],
            meaning: { en: 'work, job', vi: 'công việc' }
          },
          {
            parts: [
              { text: '仕', reading: 'し' },
              { text: '方', reading: 'かた' }
            ],
            meaning: { en: 'way, method', vi: 'cách làm' }
          },
          {
            parts: [
              { text: '仕', reading: 'つか' },
              { text: 'え', reading: 'え' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to serve (a master)', vi: 'phục vụ, hầu hạ' }
          }
        ]
      },
      {
        char: '事',
        meaning: { en: 'matter, thing, affair', vi: 'sự - việc, sự việc' },
        onyomi: ['ジ'],
        kunyomi: ['こと'],
        components: [],
        mnemonic: {
          en: 'A hand holding a brush to record an official matter: a thing, an affair.',
          vi: 'Một bàn tay cầm bút ghi lại công việc chính sự: việc, sự việc.'
        },
        examples: [
          {
            parts: [
              { text: '仕', reading: 'し' },
              { text: '事', reading: 'ごと' }
            ],
            meaning: { en: 'work, job', vi: 'công việc' }
          },
          {
            parts: [
              { text: '事', reading: 'じ' },
              { text: '故', reading: 'こ' }
            ],
            meaning: { en: 'accident', vi: 'tai nạn, sự cố' }
          },
          {
            parts: [
              { text: '用', reading: 'よう' },
              { text: '事', reading: 'じ' }
            ],
            meaning: { en: 'errand, business', vi: 'việc cần làm' }
          }
        ]
      },
      {
        char: '使',
        meaning: { en: 'to use; messenger', vi: 'sử - dùng, sử dụng; sứ giả' },
        onyomi: ['シ'],
        kunyomi: ['つか.う'],
        components: [],
        mnemonic: {
          en: 'A person 亻 sent to carry out an order and be put to use: to use, and an envoy, a messenger.',
          vi: 'Một người 亻 được sai đi thực hiện mệnh lệnh, được sử dụng: dùng, và sứ giả.'
        },
        examples: [
          {
            parts: [
              { text: '使', reading: 'つか' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to use', vi: 'dùng, sử dụng' }
          },
          {
            parts: [
              { text: '大', reading: 'たい' },
              { text: '使', reading: 'し' }
            ],
            meaning: { en: 'ambassador', vi: 'đại sứ' }
          },
          {
            parts: [
              { text: '使', reading: 'し' },
              { text: '用', reading: 'よう' }
            ],
            meaning: { en: 'use, usage', vi: 'sự sử dụng' }
          }
        ]
      },
      {
        char: '係',
        meaning: { en: 'connection; person in charge', vi: 'hệ - liên quan; người phụ trách' },
        onyomi: ['ケイ'],
        kunyomi: ['かかり', 'かか.る'],
        components: [],
        mnemonic: {
          en: 'A person 亻 tied by a thread 系 to a duty: the one in charge, a connection.',
          vi: 'Một người 亻 bị buộc bởi sợi dây 系 vào một nhiệm vụ: người phụ trách, mối liên quan.'
        },
        examples: [
          {
            parts: [{ text: '係', reading: 'かかり' }],
            meaning: { en: 'person in charge', vi: 'người phụ trách' }
          },
          {
            parts: [
              { text: '関', reading: 'かん' },
              { text: '係', reading: 'けい' }
            ],
            meaning: { en: 'relation, connection', vi: 'quan hệ, liên quan' }
          },
          {
            parts: [
              { text: '係', reading: 'かかり' },
              { text: '員', reading: 'いん' }
            ],
            meaning: { en: 'attendant, staff', vi: 'nhân viên phụ trách' }
          }
        ]
      },
      {
        char: '役',
        meaning: { en: 'role, post; service', vi: 'dịch - vai trò, chức vụ; phục dịch' },
        onyomi: ['ヤク', 'エキ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A person going out on the road 彳 to carry out an assigned duty: a role, a post, service.',
          vi: 'Một người ra đường 彳 để làm nhiệm vụ được giao: vai trò, chức vụ, phục dịch.'
        },
        examples: [
          {
            parts: [{ text: '役', reading: 'やく' }],
            meaning: { en: 'role, part', vi: 'vai trò' }
          },
          {
            parts: [
              { text: '役', reading: 'やく' },
              { text: '所', reading: 'しょ' }
            ],
            meaning: { en: 'government office', vi: 'cơ quan hành chính' }
          },
          {
            parts: [
              { text: '役', reading: 'やく' },
              { text: '者', reading: 'しゃ' }
            ],
            meaning: { en: 'actor', vi: 'diễn viên' }
          }
        ]
      },
      {
        char: '員',
        meaning: { en: 'member, staff, personnel', vi: 'viên - thành viên, nhân viên' },
        onyomi: ['イン'],
        kunyomi: [],
        components: ['口', '貝'],
        mnemonic: {
          en: 'A mouth 口 counted over a shell of money 貝: one head, one member of a group, a staff member.',
          vi: 'Một cái miệng 口 tính trên đồng tiền vỏ sò 貝: một người, một thành viên, nhân viên.'
        },
        examples: [
          {
            parts: [
              { text: '会', reading: 'かい' },
              { text: '員', reading: 'いん' }
            ],
            meaning: { en: 'member', vi: 'hội viên, thành viên' }
          },
          {
            parts: [
              { text: '店', reading: 'てん' },
              { text: '員', reading: 'いん' }
            ],
            meaning: { en: 'shop clerk', vi: 'nhân viên cửa hàng' }
          },
          {
            parts: [
              { text: '社', reading: 'しゃ' },
              { text: '員', reading: 'いん' }
            ],
            meaning: { en: 'company employee', vi: 'nhân viên công ty' }
          }
        ]
      },
      {
        char: '客',
        meaning: { en: 'guest, customer', vi: 'khách - khách, khách mời' },
        onyomi: ['キャク', 'カク'],
        kunyomi: [],
        components: ['宀', '口'],
        mnemonic: {
          en: 'Someone who comes to your house 宀 and is welcomed with words 口: a guest, a customer.',
          vi: 'Người đến nhà 宀 bạn và được chào đón bằng lời 口: khách, khách mời.'
        },
        examples: [
          {
            parts: [{ text: '客', reading: 'きゃく' }],
            meaning: { en: 'guest, customer', vi: 'khách' }
          },
          {
            parts: [
              { text: '客', reading: 'きゃく' },
              { text: '間', reading: 'ま' }
            ],
            meaning: { en: 'guest room, parlor', vi: 'phòng khách' }
          },
          {
            parts: [
              { text: '乗', reading: 'じょう' },
              { text: '客', reading: 'きゃく' }
            ],
            meaning: { en: 'passenger', vi: 'hành khách' }
          }
        ]
      },
      {
        char: '君',
        meaning: { en: 'you (familiar); lord', vi: 'quân - anh, cậu (bạn); vua, chúa' },
        onyomi: ['クン'],
        kunyomi: ['きみ'],
        components: [],
        mnemonic: {
          en: 'A ruling hand above and a mouth 口 giving orders below: a lord, and the familiar "you" (-kun).',
          vi: 'Bàn tay cai trị bên trên và cái miệng 口 ra lệnh bên dưới: vua chúa, và cách gọi thân mật "cậu" (-kun).'
        },
        examples: [
          {
            parts: [{ text: '君', reading: 'きみ' }],
            meaning: { en: 'you (familiar)', vi: 'cậu, bạn' }
          },
          {
            parts: [
              { text: '君', reading: 'くん' },
              { text: '主', reading: 'しゅ' }
            ],
            meaning: { en: 'monarch, ruler', vi: 'quân chủ, vua' }
          },
          {
            parts: [
              { text: '主', reading: 'しゅ' },
              { text: '君', reading: 'くん' }
            ],
            meaning: { en: 'lord, master', vi: 'chủ tướng, chủ nhân' }
          }
        ]
      },
      {
        char: '主',
        meaning: { en: 'main; master, owner', vi: 'chủ - chính, chủ yếu; chủ nhân' },
        onyomi: ['シュ'],
        kunyomi: ['ぬし', 'おも'],
        components: [],
        mnemonic: {
          en: 'A steady flame standing on its lampstand, the central light of a home: main, master, owner.',
          vi: 'Ngọn lửa vững trên chân đèn, nguồn sáng trung tâm của ngôi nhà: chính, chủ yếu, chủ nhân.'
        },
        examples: [
          {
            parts: [{ text: '主', reading: 'ぬし' }],
            meaning: { en: 'owner, master', vi: 'chủ nhân' }
          },
          {
            parts: [
              { text: '主', reading: 'しゅ' },
              { text: '人', reading: 'じん' }
            ],
            meaning: { en: 'master; husband', vi: 'chủ nhà; chồng' }
          },
          {
            parts: [
              { text: '主', reading: 'しゅ' },
              { text: '語', reading: 'ご' }
            ],
            meaning: { en: 'subject (grammar)', vi: 'chủ ngữ' }
          }
        ]
      },
      {
        char: '者',
        meaning: { en: 'person, the one who', vi: 'giả - người, kẻ (làm gì đó)' },
        onyomi: ['シャ'],
        kunyomi: ['もの'],
        components: [],
        mnemonic: {
          en: 'A general word pointing at a person defined by what they do: a person, the one who.',
          vi: 'Từ chung chỉ một người được xác định bởi việc họ làm: người, kẻ (làm gì đó).'
        },
        examples: [
          {
            parts: [{ text: '者', reading: 'もの' }],
            meaning: { en: 'person', vi: 'người, kẻ' }
          },
          {
            parts: [
              { text: '医', reading: 'い' },
              { text: '者', reading: 'しゃ' }
            ],
            meaning: { en: 'doctor', vi: 'bác sĩ' }
          },
          {
            parts: [
              { text: '学', reading: 'がく' },
              { text: '者', reading: 'しゃ' }
            ],
            meaning: { en: 'scholar', vi: 'học giả' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Places & districts',
      vi: 'Nơi chốn & khu vực'
    },
    kanji: [
      {
        char: '屋',
        meaning: { en: 'roof; shop, store', vi: 'ốc - mái nhà; cửa hàng, tiệm' },
        onyomi: ['オク'],
        kunyomi: ['や'],
        components: ['尸', '至'],
        mnemonic: {
          en: 'A covering 尸 you arrive 至 under to be sheltered: a roof, and by extension a shop or store.',
          vi: 'Tấm che 尸 mà người ta đi đến 至 để trú: mái nhà, và nghĩa rộng là cửa hàng, tiệm.'
        },
        examples: [
          {
            parts: [
              { text: '屋', reading: 'や' },
              { text: '根', reading: 'ね' }
            ],
            meaning: { en: 'roof', vi: 'mái nhà' }
          },
          {
            parts: [
              { text: '本', reading: 'ほん' },
              { text: '屋', reading: 'や' }
            ],
            meaning: { en: 'bookstore', vi: 'hiệu sách' }
          },
          {
            parts: [
              { text: '部', reading: 'へ' },
              { text: '屋', reading: 'や' }
            ],
            meaning: { en: 'room', vi: 'căn phòng' }
          }
        ]
      },
      {
        char: '局',
        meaning: { en: 'bureau, office; station', vi: 'cục - cục, sở; đài (phát thanh...)' },
        onyomi: ['キョク'],
        kunyomi: [],
        components: ['尸', '口'],
        mnemonic: {
          en: 'A section of an office under one roof 尸 where orders 口 are handled: a bureau, an office, a station.',
          vi: 'Một bộ phận dưới một mái 尸 nơi xử lý mệnh lệnh 口: cục, sở, đài.'
        },
        examples: [
          {
            parts: [
              { text: '薬', reading: 'やっ' },
              { text: '局', reading: 'きょく' }
            ],
            meaning: { en: 'pharmacy', vi: 'hiệu thuốc' }
          },
          {
            parts: [
              { text: '結', reading: 'けっ' },
              { text: '局', reading: 'きょく' }
            ],
            meaning: { en: 'after all, in the end', vi: 'rốt cuộc, cuối cùng' }
          },
          {
            parts: [
              { text: '局', reading: 'きょく' },
              { text: '長', reading: 'ちょう' }
            ],
            meaning: { en: 'bureau chief', vi: 'cục trưởng' }
          }
        ]
      },
      {
        char: '宮',
        meaning: { en: 'palace; shrine', vi: 'cung - cung điện; đền thờ' },
        onyomi: ['キュウ', 'グウ'],
        kunyomi: ['みや'],
        components: ['宀', '口', '口'],
        mnemonic: {
          en: 'A grand building under a roof 宀 with room after room 口 口: a palace, a shrine.',
          vi: 'Một tòa nhà lớn dưới mái 宀 với hết phòng này 口 đến phòng khác 口: cung điện, đền thờ.'
        },
        examples: [
          {
            parts: [{ text: '宮', reading: 'みや' }],
            meaning: { en: 'shrine, palace', vi: 'cung, đền' }
          },
          {
            parts: [
              { text: '王', reading: 'おう' },
              { text: '宮', reading: 'きゅう' }
            ],
            meaning: { en: 'royal palace', vi: 'cung điện hoàng gia' }
          },
          {
            parts: [
              { text: '神', reading: 'じん' },
              { text: '宮', reading: 'ぐう' }
            ],
            meaning: { en: 'Shinto shrine', vi: 'thần cung, đền thờ' }
          }
        ]
      },
      {
        char: '館',
        meaning: { en: 'hall, large building', vi: 'quán - tòa nhà lớn, quán' },
        onyomi: ['カン'],
        kunyomi: ['やかた'],
        components: [],
        mnemonic: {
          en: 'A large building where officials 官 gather and are fed 食: a hall, a large public building.',
          vi: 'Tòa nhà lớn nơi các quan 官 tụ họp và được cho ăn 食: đại sảnh, tòa nhà công cộng lớn.'
        },
        examples: [
          {
            parts: [
              { text: '図', reading: 'と' },
              { text: '書', reading: 'しょ' },
              { text: '館', reading: 'かん' }
            ],
            meaning: { en: 'library', vi: 'thư viện' }
          },
          {
            parts: [
              { text: '旅', reading: 'りょ' },
              { text: '館', reading: 'かん' }
            ],
            meaning: { en: 'Japanese inn', vi: 'nhà trọ kiểu Nhật' }
          },
          {
            parts: [
              { text: '会', reading: 'かい' },
              { text: '館', reading: 'かん' }
            ],
            meaning: { en: 'hall, assembly building', vi: 'hội quán, nhà văn hóa' }
          }
        ]
      },
      {
        char: '庫',
        meaning: { en: 'warehouse, storehouse', vi: 'khố - kho, nhà kho' },
        onyomi: ['コ', 'ク'],
        kunyomi: [],
        components: ['广', '車'],
        mnemonic: {
          en: 'A building 广 where carts 車 and goods are stored away: a warehouse, a storehouse.',
          vi: 'Một tòa nhà 广 nơi cất xe cộ 車 và hàng hóa: kho, nhà kho.'
        },
        examples: [
          {
            parts: [
              { text: '車', reading: 'しゃ' },
              { text: '庫', reading: 'こ' }
            ],
            meaning: { en: 'garage', vi: 'nhà để xe' }
          },
          {
            parts: [
              { text: '金', reading: 'きん' },
              { text: '庫', reading: 'こ' }
            ],
            meaning: { en: 'safe, vault', vi: 'két sắt' }
          },
          {
            parts: [
              { text: '書', reading: 'しょ' },
              { text: '庫', reading: 'こ' }
            ],
            meaning: { en: 'book storage, stacks', vi: 'kho sách' }
          }
        ]
      },
      {
        char: '庭',
        meaning: { en: 'garden, yard', vi: 'đình - sân, vườn' },
        onyomi: ['テイ'],
        kunyomi: ['にわ'],
        components: [],
        mnemonic: {
          en: 'The open ground within the grounds of a building 广: a garden, a yard.',
          vi: 'Khoảng đất trống trong khuôn viên tòa nhà 广: sân, vườn.'
        },
        examples: [
          {
            parts: [{ text: '庭', reading: 'にわ' }],
            meaning: { en: 'garden, yard', vi: 'sân vườn' }
          },
          {
            parts: [
              { text: '家', reading: 'か' },
              { text: '庭', reading: 'てい' }
            ],
            meaning: { en: 'household, home', vi: 'gia đình, gia đạo' }
          },
          {
            parts: [
              { text: '校', reading: 'こう' },
              { text: '庭', reading: 'てい' }
            ],
            meaning: { en: 'schoolyard', vi: 'sân trường' }
          }
        ]
      },
      {
        char: '都',
        meaning: { en: 'capital, metropolis', vi: 'đô - thủ đô, đô thị' },
        onyomi: ['ト', 'ツ'],
        kunyomi: ['みやこ'],
        components: [],
        mnemonic: {
          en: 'The city district 阝 where many people 者 gather: a capital, a big city.',
          vi: 'Khu phố 阝 nơi nhiều người 者 tụ về: thủ đô, đô thị lớn.'
        },
        examples: [
          {
            parts: [{ text: '都', reading: 'みやこ' }],
            meaning: { en: 'capital city', vi: 'kinh đô' }
          },
          {
            parts: [
              { text: '東', reading: 'とう' },
              { text: '京', reading: 'きょう' },
              { text: '都', reading: 'と' }
            ],
            meaning: { en: 'Tokyo Metropolis', vi: 'đô Tokyo' }
          },
          {
            parts: [
              { text: '都', reading: 'つ' },
              { text: '合', reading: 'ごう' }
            ],
            meaning: { en: 'convenience, circumstances', vi: 'sự thuận tiện, hoàn cảnh' }
          }
        ]
      },
      {
        char: '区',
        meaning: { en: 'ward, district; section', vi: 'khu - khu vực; quận' },
        onyomi: ['ク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A boundary box 匚 drawn around one part of a city: a ward, a district, a section.',
          vi: 'Một cái khung 匚 vẽ quanh một phần thành phố: khu vực, quận.'
        },
        examples: [
          {
            parts: [{ text: '区', reading: 'く' }],
            meaning: { en: 'ward, district', vi: 'quận, khu' }
          },
          {
            parts: [
              { text: '地', reading: 'ち' },
              { text: '区', reading: 'く' }
            ],
            meaning: { en: 'district, area', vi: 'khu vực, địa hạt' }
          },
          {
            parts: [
              { text: '区', reading: 'く' },
              { text: '分', reading: 'ぶん' }
            ],
            meaning: { en: 'division, classification', vi: 'phân chia, phân loại' }
          }
        ]
      },
      {
        char: '界',
        meaning: { en: 'boundary; world, realm', vi: 'giới - ranh giới; thế giới, giới' },
        onyomi: ['カイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'The lines dividing fields 田 mark where one area ends: a boundary, and by extension a world or realm.',
          vi: 'Những đường chia ruộng 田 đánh dấu nơi một vùng kết thúc: ranh giới, và nghĩa rộng là thế giới, giới.'
        },
        examples: [
          {
            parts: [
              { text: '世', reading: 'せ' },
              { text: '界', reading: 'かい' }
            ],
            meaning: { en: 'the world', vi: 'thế giới' }
          },
          {
            parts: [
              { text: '業', reading: 'ぎょう' },
              { text: '界', reading: 'かい' }
            ],
            meaning: { en: 'industry, business world', vi: 'giới, ngành' }
          },
          {
            parts: [
              { text: '外', reading: 'がい' },
              { text: '界', reading: 'かい' }
            ],
            meaning: { en: 'the outside world', vi: 'thế giới bên ngoài' }
          }
        ]
      },
      {
        char: '州',
        meaning: { en: 'state, province; sandbar', vi: 'châu - châu, bang; bãi giữa sông' },
        onyomi: ['シュウ'],
        kunyomi: ['す'],
        components: [],
        mnemonic: {
          en: 'Little islets dotted along a flowing river, later a large region: a state, a province.',
          vi: 'Những cồn bãi rải rác dọc dòng sông chảy, sau chỉ vùng lớn: châu, bang.'
        },
        examples: [
          {
            parts: [{ text: '州', reading: 'しゅう' }],
            meaning: { en: 'state, province', vi: 'bang, châu' }
          },
          {
            parts: [
              { text: '本', reading: 'ほん' },
              { text: '州', reading: 'しゅう' }
            ],
            meaning: { en: 'Honshu (main island)', vi: 'đảo Honshu' }
          },
          {
            parts: [
              { text: '九', reading: 'きゅう' },
              { text: '州', reading: 'しゅう' }
            ],
            meaning: { en: 'Kyushu', vi: 'đảo Kyushu' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Action verbs',
      vi: 'Động từ hành động'
    },
    kanji: [
      {
        char: '打',
        meaning: { en: 'to hit, to strike', vi: 'đả - đánh, đập' },
        onyomi: ['ダ'],
        kunyomi: ['う.つ'],
        components: [],
        mnemonic: {
          en: 'The hand 扌 driving a nail 丁 with a blow: to hit, to strike.',
          vi: 'Bàn tay 扌 đóng cây đinh 丁 bằng một cú: đánh, đập.'
        },
        examples: [
          {
            parts: [
              { text: '打', reading: 'う' },
              { text: 'つ', reading: 'つ' }
            ],
            meaning: { en: 'to hit, to strike', vi: 'đánh, đập' }
          },
          {
            parts: [
              { text: '打', reading: 'だ' },
              { text: '者', reading: 'しゃ' }
            ],
            meaning: { en: 'batter (baseball)', vi: 'cầu thủ đánh bóng' }
          },
          {
            parts: [
              { text: '安', reading: 'あん' },
              { text: '打', reading: 'だ' }
            ],
            meaning: { en: 'base hit (baseball)', vi: 'cú đánh trúng' }
          }
        ]
      },
      {
        char: '投',
        meaning: { en: 'to throw', vi: 'đầu - ném, quăng' },
        onyomi: ['トウ'],
        kunyomi: ['な.げる'],
        components: [],
        mnemonic: {
          en: 'The hand 扌 winding up and hurling something forward: to throw.',
          vi: 'Bàn tay 扌 lấy đà và quăng vật về phía trước: ném, quăng.'
        },
        examples: [
          {
            parts: [
              { text: '投', reading: 'な' },
              { text: 'げ', reading: 'げ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to throw', vi: 'ném, quăng' }
          },
          {
            parts: [
              { text: '投', reading: 'とう' },
              { text: '手', reading: 'しゅ' }
            ],
            meaning: { en: 'pitcher (baseball)', vi: 'cầu thủ ném bóng' }
          },
          {
            parts: [
              { text: '投', reading: 'とう' },
              { text: '票', reading: 'ひょう' }
            ],
            meaning: { en: 'voting, ballot', vi: 'bỏ phiếu' }
          }
        ]
      },
      {
        char: '持',
        meaning: { en: 'to hold, to have', vi: 'trì - cầm, giữ; có' },
        onyomi: ['ジ'],
        kunyomi: ['も.つ'],
        components: [],
        mnemonic: {
          en: 'The hand 扌 keeping firm hold of something the way a temple 寺 keeps its treasures: to hold, to have.',
          vi: 'Bàn tay 扌 giữ chặt vật gì đó như ngôi chùa 寺 giữ bảo vật: cầm, giữ, có.'
        },
        examples: [
          {
            parts: [
              { text: '持', reading: 'も' },
              { text: 'つ', reading: 'つ' }
            ],
            meaning: { en: 'to hold, to have', vi: 'cầm, có' }
          },
          {
            parts: [
              { text: '気', reading: 'き' },
              { text: '持', reading: 'も' },
              { text: 'ち', reading: 'ち' }
            ],
            meaning: { en: 'feeling, mood', vi: 'tâm trạng, cảm giác' }
          },
          {
            parts: [
              { text: '所', reading: 'しょ' },
              { text: '持', reading: 'じ' }
            ],
            meaning: { en: 'possession, carrying', vi: 'sự sở hữu, mang theo' }
          }
        ]
      },
      {
        char: '取',
        meaning: { en: 'to take, to grab', vi: 'thủ - lấy, cầm lấy' },
        onyomi: ['シュ'],
        kunyomi: ['と.る'],
        components: ['耳', '又'],
        mnemonic: {
          en: 'A hand 又 grabbing an ear 耳 to seize it: to take, to grab.',
          vi: 'Một bàn tay 又 tóm lấy cái tai 耳: lấy, cầm lấy.'
        },
        examples: [
          {
            parts: [
              { text: '取', reading: 'と' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to take, to grab', vi: 'lấy, cầm' }
          },
          {
            parts: [
              { text: '取', reading: 'と' },
              { text: 'り', reading: 'り' },
              { text: '出', reading: 'だ' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to take out', vi: 'lấy ra' }
          },
          {
            parts: [
              { text: '書', reading: 'か' },
              { text: 'き', reading: 'き' },
              { text: '取', reading: 'と' },
              { text: 'り', reading: 'り' }
            ],
            meaning: { en: 'dictation', vi: 'chép chính tả' }
          }
        ]
      },
      {
        char: '受',
        meaning: { en: 'to receive, to accept', vi: 'thụ - nhận, tiếp nhận' },
        onyomi: ['ジュ'],
        kunyomi: ['う.ける'],
        components: [],
        mnemonic: {
          en: 'One hand above passing something down to another hand 又 below: to receive, to accept.',
          vi: 'Một bàn tay bên trên trao vật xuống cho bàn tay 又 bên dưới: nhận, tiếp nhận.'
        },
        examples: [
          {
            parts: [
              { text: '受', reading: 'う' },
              { text: 'け', reading: 'け' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to receive, to take (a test)', vi: 'nhận; dự (thi)' }
          },
          {
            parts: [
              { text: '受', reading: 'じゅ' },
              { text: '験', reading: 'けん' }
            ],
            meaning: { en: 'taking an entrance exam', vi: 'dự thi (tuyển sinh)' }
          },
          {
            parts: [
              { text: '受', reading: 'うけ' },
              { text: '付', reading: 'つけ' }
            ],
            meaning: { en: 'reception, front desk', vi: 'quầy tiếp tân' }
          }
        ]
      },
      {
        char: '拾',
        meaning: { en: 'to pick up, to gather', vi: 'thập - nhặt, lượm' },
        onyomi: ['シュウ', 'ジュウ'],
        kunyomi: ['ひろ.う'],
        components: [],
        mnemonic: {
          en: 'The hand 扌 bringing together 合 things off the ground: to pick up, to gather.',
          vi: 'Bàn tay 扌 gom nhặt 合 những thứ dưới đất: nhặt, lượm.'
        },
        examples: [
          {
            parts: [
              { text: '拾', reading: 'ひろ' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to pick up', vi: 'nhặt, lượm' }
          },
          {
            parts: [
              { text: '拾', reading: 'ひろ' },
              { text: 'い', reading: 'い' },
              { text: '物', reading: 'もの' }
            ],
            meaning: { en: 'a found item', vi: 'đồ nhặt được' }
          }
        ]
      },
      {
        char: '消',
        meaning: { en: 'to disappear; to erase, to put out', vi: 'tiêu - biến mất; xóa, tắt' },
        onyomi: ['ショウ'],
        kunyomi: ['き.える', 'け.す'],
        components: [],
        mnemonic: {
          en: 'Water 氵 poured over something to make it fade and vanish: to disappear, to erase, to put out.',
          vi: 'Nước 氵 dội lên khiến vật gì đó mờ dần và biến mất: biến mất, xóa, dập tắt.'
        },
        examples: [
          {
            parts: [
              { text: '消', reading: 'け' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to erase, to turn off', vi: 'xóa, tắt' }
          },
          {
            parts: [
              { text: '消', reading: 'き' },
              { text: 'え', reading: 'え' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to disappear, to go out', vi: 'biến mất, tắt' }
          },
          {
            parts: [
              { text: '消', reading: 'しょう' },
              { text: '火', reading: 'か' }
            ],
            meaning: { en: 'fire extinguishing', vi: 'chữa cháy, dập lửa' }
          }
        ]
      },
      {
        char: '助',
        meaning: { en: 'to help, to rescue', vi: 'trợ - giúp đỡ, cứu' },
        onyomi: ['ジョ'],
        kunyomi: ['たす.ける', 'たす.かる'],
        components: [],
        mnemonic: {
          en: 'Adding your strength 力 to someone else in need: to help, to rescue.',
          vi: 'Góp thêm sức 力 cho người đang cần: giúp đỡ, cứu.'
        },
        examples: [
          {
            parts: [
              { text: '助', reading: 'たす' },
              { text: 'け', reading: 'け' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to help, to save', vi: 'giúp, cứu' }
          },
          {
            parts: [
              { text: '助', reading: 'じょ' },
              { text: '手', reading: 'しゅ' }
            ],
            meaning: { en: 'assistant', vi: 'trợ lý' }
          },
          {
            parts: [
              { text: '助', reading: 'じょ' },
              { text: '言', reading: 'げん' }
            ],
            meaning: { en: 'advice', vi: 'lời khuyên' }
          }
        ]
      },
      {
        char: '決',
        meaning: { en: 'to decide, to settle', vi: 'quyết - quyết định' },
        onyomi: ['ケツ'],
        kunyomi: ['き.める', 'き.まる'],
        components: [],
        mnemonic: {
          en: 'Water 氵 breaking through a dam once and for all, no turning back: to decide, to settle.',
          vi: 'Nước 氵 phá vỡ con đập dứt khoát, không quay lại: quyết định, dứt khoát.'
        },
        examples: [
          {
            parts: [
              { text: '決', reading: 'き' },
              { text: 'め', reading: 'め' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to decide', vi: 'quyết định' }
          },
          {
            parts: [
              { text: '決', reading: 'けっ' },
              { text: '心', reading: 'しん' }
            ],
            meaning: { en: 'determination, resolve', vi: 'quyết tâm' }
          },
          {
            parts: [
              { text: '決', reading: 'けっ' },
              { text: '定', reading: 'てい' }
            ],
            meaning: { en: 'decision', vi: 'sự quyết định' }
          }
        ]
      },
      {
        char: '起',
        meaning: { en: 'to get up, to wake; to occur', vi: 'khởi - dậy, thức dậy; xảy ra' },
        onyomi: ['キ'],
        kunyomi: ['お.きる', 'お.こる'],
        components: ['走', '己'],
        mnemonic: {
          en: 'Someone rising up to run 走 as their own self 己 springs into action: to get up, to wake, to occur.',
          vi: 'Người bật dậy chạy 走 khi chính mình 己 bắt đầu hành động: dậy, thức dậy, xảy ra.'
        },
        examples: [
          {
            parts: [
              { text: '起', reading: 'お' },
              { text: 'き', reading: 'き' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to get up, to wake up', vi: 'thức dậy' }
          },
          {
            parts: [
              { text: '起', reading: 'き' },
              { text: '立', reading: 'りつ' }
            ],
            meaning: { en: 'standing up', vi: 'đứng dậy' }
          },
          {
            parts: [
              { text: '早', reading: 'はや' },
              { text: '起', reading: 'お' },
              { text: 'き', reading: 'き' }
            ],
            meaning: { en: 'early rising', vi: 'dậy sớm' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Time, speed & measure',
      vi: 'Thời gian, tốc độ & mức độ'
    },
    kanji: [
      {
        char: '寒',
        meaning: { en: 'cold', vi: 'hàn - lạnh, rét' },
        onyomi: ['カン'],
        kunyomi: ['さむ.い'],
        components: [],
        mnemonic: {
          en: 'Huddling under a roof 宀 packed with straw against the ice 冫 below: cold.',
          vi: 'Co ro dưới mái nhà 宀 chất đầy rơm, phía dưới là băng 冫: lạnh, rét.'
        },
        examples: [
          {
            parts: [
              { text: '寒', reading: 'さむ' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'cold', vi: 'lạnh' }
          },
          {
            parts: [
              { text: '寒', reading: 'さむ' },
              { text: '気', reading: 'け' }
            ],
            meaning: { en: 'chill, the shivers', vi: 'cảm giác ớn lạnh' }
          },
          {
            parts: [
              { text: '寒', reading: 'さむ' },
              { text: '空', reading: 'ぞら' }
            ],
            meaning: { en: 'cold winter sky', vi: 'bầu trời giá lạnh' }
          }
        ]
      },
      {
        char: '暑',
        meaning: { en: 'hot (weather)', vi: 'thử - nóng (thời tiết)' },
        onyomi: ['ショ'],
        kunyomi: ['あつ.い'],
        components: [],
        mnemonic: {
          en: 'The sun 日 beating down on a person 者 until the day is sweltering: hot weather.',
          vi: 'Mặt trời 日 dội xuống người 者 khiến trời oi bức: nóng (thời tiết).'
        },
        examples: [
          {
            parts: [
              { text: '暑', reading: 'あつ' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'hot (weather)', vi: 'nóng' }
          },
          {
            parts: [
              { text: '暑', reading: 'あつ' },
              { text: 'さ', reading: 'さ' }
            ],
            meaning: { en: 'the heat', vi: 'cái nóng' }
          },
          {
            parts: [
              { text: '暑', reading: 'しょ' },
              { text: '中', reading: 'ちゅう' }
            ],
            meaning: { en: 'midsummer, dog days', vi: 'giữa hè oi bức' }
          }
        ]
      },
      {
        char: '昔',
        meaning: { en: 'long ago, former times', vi: 'tích - ngày xưa, thời xưa' },
        onyomi: ['セキ', 'シャク'],
        kunyomi: ['むかし'],
        components: [],
        mnemonic: {
          en: 'Many days 日 piled up and stacked away in the past: long ago, former times.',
          vi: 'Nhiều ngày 日 chồng chất và cất lại trong quá khứ: ngày xưa, thời xưa.'
        },
        examples: [
          {
            parts: [{ text: '昔', reading: 'むかし' }],
            meaning: { en: 'long ago, the old days', vi: 'ngày xưa' }
          },
          {
            parts: [
              { text: '昔', reading: 'むかし' },
              { text: '話', reading: 'ばなし' }
            ],
            meaning: { en: 'old tale, folk story', vi: 'chuyện cổ tích' }
          },
          {
            parts: [
              { text: '大', reading: 'おお' },
              { text: '昔', reading: 'むかし' }
            ],
            meaning: { en: 'ancient times', vi: 'thời thượng cổ' }
          }
        ]
      },
      {
        char: '期',
        meaning: { en: 'period, term', vi: 'kỳ - kỳ hạn, thời kỳ' },
        onyomi: ['キ', 'ゴ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Counting off the cycles of the moon 月 to mark a fixed span: a period, a term.',
          vi: 'Đếm các chu kỳ của mặt trăng 月 để định một khoảng cố định: kỳ hạn, thời kỳ.'
        },
        examples: [
          {
            parts: [
              { text: '期', reading: 'き' },
              { text: '間', reading: 'かん' }
            ],
            meaning: { en: 'period, duration', vi: 'khoảng thời gian' }
          },
          {
            parts: [
              { text: '学', reading: 'がっ' },
              { text: '期', reading: 'き' }
            ],
            meaning: { en: 'school term, semester', vi: 'học kỳ' }
          },
          {
            parts: [
              { text: '時', reading: 'じ' },
              { text: '期', reading: 'き' }
            ],
            meaning: { en: 'time, season, phase', vi: 'thời kỳ, thời điểm' }
          }
        ]
      },
      {
        char: '急',
        meaning: { en: 'hurry; sudden, urgent', vi: 'cấp - vội, gấp; đột ngột' },
        onyomi: ['キュウ'],
        kunyomi: ['いそ.ぐ'],
        components: [],
        mnemonic: {
          en: 'A hand clutching at the heart 心 in a rush: to hurry, sudden, urgent.',
          vi: 'Một bàn tay nắm lấy trái tim 心 trong vội vã: vội, gấp, đột ngột.'
        },
        examples: [
          {
            parts: [
              { text: '急', reading: 'いそ' },
              { text: 'ぐ', reading: 'ぐ' }
            ],
            meaning: { en: 'to hurry', vi: 'vội, gấp' }
          },
          {
            parts: [
              { text: '急', reading: 'きゅう' },
              { text: '行', reading: 'こう' }
            ],
            meaning: { en: 'express (train)', vi: 'tàu tốc hành' }
          },
          {
            parts: [
              { text: '急', reading: 'きゅう' },
              { text: '病', reading: 'びょう' }
            ],
            meaning: { en: 'sudden illness', vi: 'bệnh đột ngột' }
          }
        ]
      },
      {
        char: '速',
        meaning: { en: 'fast, quick; speed', vi: 'tốc - nhanh, tốc độ' },
        onyomi: ['ソク'],
        kunyomi: ['はや.い'],
        components: [],
        mnemonic: {
          en: 'Bundling everything up 束 to move 辶 without delay: fast, quick, speed.',
          vi: 'Bó gọn mọi thứ 束 để di chuyển 辶 không chậm trễ: nhanh, tốc độ.'
        },
        examples: [
          {
            parts: [
              { text: '速', reading: 'はや' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'fast, quick', vi: 'nhanh' }
          },
          {
            parts: [
              { text: '速', reading: 'そく' },
              { text: '度', reading: 'ど' }
            ],
            meaning: { en: 'speed, velocity', vi: 'tốc độ' }
          },
          {
            parts: [
              { text: '高', reading: 'こう' },
              { text: '速', reading: 'そく' }
            ],
            meaning: { en: 'high speed', vi: 'cao tốc' }
          }
        ]
      },
      {
        char: '度',
        meaning: { en: 'degree; a time; extent', vi: 'độ - độ; lần; mức độ' },
        onyomi: ['ド', 'ト'],
        kunyomi: ['たび'],
        components: [],
        mnemonic: {
          en: 'A measure taken by hand under a shelter 广 to mark off degrees: a degree, a time (occurrence), an extent.',
          vi: 'Một phép đo bằng tay dưới mái 广 để chia độ: độ, lần, mức độ.'
        },
        examples: [
          {
            parts: [{ text: '度', reading: 'たび' }],
            meaning: { en: 'each time, occasion', vi: 'mỗi lần' }
          },
          {
            parts: [
              { text: '一', reading: 'いち' },
              { text: '度', reading: 'ど' }
            ],
            meaning: { en: 'once, one time', vi: 'một lần' }
          },
          {
            parts: [
              { text: '温', reading: 'おん' },
              { text: '度', reading: 'ど' }
            ],
            meaning: { en: 'temperature', vi: 'nhiệt độ' }
          }
        ]
      },
      {
        char: '秒',
        meaning: { en: 'second (of time)', vi: 'miểu - giây (thời gian)' },
        onyomi: ['ビョウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'The tiniest 少 sliver of a grain stalk 禾, the smallest common slice of time: a second.',
          vi: 'Mẩu 少 nhỏ xíu của bông lúa 禾, lát thời gian nhỏ nhất thường dùng: giây.'
        },
        examples: [
          {
            parts: [{ text: '秒', reading: 'びょう' }],
            meaning: { en: 'second (of time)', vi: 'giây' }
          },
          {
            parts: [
              { text: '一', reading: 'いち' },
              { text: '秒', reading: 'びょう' }
            ],
            meaning: { en: 'one second', vi: 'một giây' }
          },
          {
            parts: [
              { text: '秒', reading: 'びょう' },
              { text: '読', reading: 'よ' },
              { text: 'み', reading: 'み' }
            ],
            meaning: { en: 'countdown', vi: 'đếm ngược' }
          }
        ]
      },
      {
        char: '短',
        meaning: { en: 'short; shortcoming', vi: 'đoản - ngắn; thiếu sót' },
        onyomi: ['タン'],
        kunyomi: ['みじか.い'],
        components: ['矢', '豆'],
        mnemonic: {
          en: 'Measuring with a short arrow 矢 against a stubby bean 豆 to show smallness: short.',
          vi: 'Đo bằng mũi tên 矢 ngắn với hạt đậu 豆 lùn để chỉ sự nhỏ: ngắn.'
        },
        examples: [
          {
            parts: [
              { text: '短', reading: 'みじか' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'short', vi: 'ngắn' }
          },
          {
            parts: [
              { text: '短', reading: 'たん' },
              { text: '気', reading: 'き' }
            ],
            meaning: { en: 'short temper, impatience', vi: 'nóng tính' }
          },
          {
            parts: [
              { text: '長', reading: 'ちょう' },
              { text: '短', reading: 'たん' }
            ],
            meaning: { en: 'length; strengths & weaknesses', vi: 'dài ngắn; ưu và nhược' }
          }
        ]
      },
      {
        char: '倍',
        meaning: { en: 'double, times, -fold', vi: 'bội - gấp, gấp bội; lần' },
        onyomi: ['バイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A person 亻 taking a quantity and folding it over on itself: double, times, -fold.',
          vi: 'Một người 亻 lấy một lượng rồi nhân nó lên: gấp, gấp bội, lần.'
        },
        examples: [
          {
            parts: [{ text: '倍', reading: 'ばい' }],
            meaning: { en: 'double, twice', vi: 'gấp đôi' }
          },
          {
            parts: [
              { text: '二', reading: 'に' },
              { text: '倍', reading: 'ばい' }
            ],
            meaning: { en: 'twofold, double', vi: 'gấp hai' }
          },
          {
            parts: [
              { text: '何', reading: 'なん' },
              { text: '倍', reading: 'ばい' }
            ],
            meaning: { en: 'how many times', vi: 'gấp mấy lần' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Plants & farming',
      vi: 'Cây cối & trồng trọt'
    },
    kanji: [
      {
        char: '育',
        meaning: { en: 'to raise, to grow up', vi: 'dục - nuôi dưỡng, lớn lên' },
        onyomi: ['イク'],
        kunyomi: ['そだ.てる', 'そだ.つ'],
        components: [],
        mnemonic: {
          en: 'A newborn child entering the world, then fed with flesh 月 to grow: to raise, to grow up.',
          vi: 'Một đứa trẻ mới chào đời, rồi được nuôi bằng thịt da 月 để lớn: nuôi dưỡng, lớn lên.'
        },
        examples: [
          {
            parts: [
              { text: '育', reading: 'そだ' },
              { text: 'て', reading: 'て' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to raise, to bring up', vi: 'nuôi dưỡng' }
          },
          {
            parts: [
              { text: '教', reading: 'きょう' },
              { text: '育', reading: 'いく' }
            ],
            meaning: { en: 'education', vi: 'giáo dục' }
          },
          {
            parts: [
              { text: '体', reading: 'たい' },
              { text: '育', reading: 'いく' }
            ],
            meaning: { en: 'physical education', vi: 'thể dục' }
          }
        ]
      },
      {
        char: '植',
        meaning: { en: 'to plant', vi: 'thực - trồng (cây)' },
        onyomi: ['ショク'],
        kunyomi: ['う.える'],
        components: [],
        mnemonic: {
          en: 'Setting a tree 木 straight 直 upright into the ground: to plant.',
          vi: 'Đặt cái cây 木 thẳng 直 xuống đất: trồng cây.'
        },
        examples: [
          {
            parts: [
              { text: '植', reading: 'う' },
              { text: 'え', reading: 'え' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to plant', vi: 'trồng' }
          },
          {
            parts: [
              { text: '植', reading: 'しょく' },
              { text: '物', reading: 'ぶつ' }
            ],
            meaning: { en: 'plant, vegetation', vi: 'thực vật' }
          },
          {
            parts: [
              { text: '田', reading: 'た' },
              { text: '植', reading: 'う' },
              { text: 'え', reading: 'え' }
            ],
            meaning: { en: 'rice planting', vi: 'cấy lúa' }
          }
        ]
      },
      {
        char: '根',
        meaning: { en: 'root; root cause', vi: 'căn - rễ; căn nguyên, gốc' },
        onyomi: ['コン'],
        kunyomi: ['ね'],
        components: [],
        mnemonic: {
          en: 'The part of a tree 木 that stays fixed in the ground: a root, and the root cause of things.',
          vi: 'Phần của cây 木 bám cố định dưới đất: cái rễ, và gốc rễ, căn nguyên.'
        },
        examples: [
          {
            parts: [{ text: '根', reading: 'ね' }],
            meaning: { en: 'root', vi: 'rễ' }
          },
          {
            parts: [
              { text: '大', reading: 'だい' },
              { text: '根', reading: 'こん' }
            ],
            meaning: { en: 'daikon radish', vi: 'củ cải trắng' }
          },
          {
            parts: [
              { text: '屋', reading: 'や' },
              { text: '根', reading: 'ね' }
            ],
            meaning: { en: 'roof', vi: 'mái nhà' }
          }
        ]
      },
      {
        char: '葉',
        meaning: { en: 'leaf', vi: 'diệp - lá (cây)' },
        onyomi: ['ヨウ'],
        kunyomi: ['は'],
        components: [],
        mnemonic: {
          en: 'The flat green growth 艹 spreading from the branches of a tree 木: a leaf.',
          vi: 'Phần xanh dẹt 艹 mọc ra từ cành cây 木: chiếc lá.'
        },
        examples: [
          {
            parts: [{ text: '葉', reading: 'は' }],
            meaning: { en: 'leaf', vi: 'lá' }
          },
          {
            parts: [
              { text: '落', reading: 'お' },
              { text: 'ち', reading: 'ち' },
              { text: '葉', reading: 'ば' }
            ],
            meaning: { en: 'fallen leaves', vi: 'lá rụng' }
          },
          {
            parts: [
              { text: '言', reading: 'こと' },
              { text: '葉', reading: 'ば' }
            ],
            meaning: { en: 'word, language', vi: 'lời nói, ngôn từ' }
          }
        ]
      },
      {
        char: '実',
        meaning: { en: 'fruit, nut; truth, real', vi: 'thực - quả, hạt; sự thật, thực' },
        onyomi: ['ジツ'],
        kunyomi: ['み', 'みの.る'],
        components: [],
        mnemonic: {
          en: 'A house 宀 filled with the ripe fruit of the harvest: fruit, and by extension truth and substance.',
          vi: 'Ngôi nhà 宀 đầy hoa trái của vụ mùa: quả, và nghĩa rộng là sự thật, thực chất.'
        },
        examples: [
          {
            parts: [{ text: '実', reading: 'み' }],
            meaning: { en: 'fruit, nut', vi: 'quả, hạt' }
          },
          {
            parts: [
              { text: '実', reading: 'じつ' },
              { text: '力', reading: 'りょく' }
            ],
            meaning: { en: 'real ability', vi: 'thực lực' }
          },
          {
            parts: [
              { text: '事', reading: 'じ' },
              { text: '実', reading: 'じつ' }
            ],
            meaning: { en: 'fact', vi: 'sự thật, sự việc' }
          }
        ]
      },
      {
        char: '落',
        meaning: { en: 'to fall, to drop', vi: 'lạc - rơi, rớt; rụng' },
        onyomi: ['ラク'],
        kunyomi: ['お.ちる', 'お.とす'],
        components: [],
        mnemonic: {
          en: 'Leaves 艹 and water 氵 dropping down to the ground: to fall, to drop.',
          vi: 'Lá 艹 và nước 氵 rơi xuống đất: rơi, rớt, rụng.'
        },
        examples: [
          {
            parts: [
              { text: '落', reading: 'お' },
              { text: 'ち', reading: 'ち' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to fall, to drop', vi: 'rơi, rớt' }
          },
          {
            parts: [
              { text: '落', reading: 'お' },
              { text: 'と', reading: 'と' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to drop, to let fall', vi: 'làm rơi, đánh rớt' }
          },
          {
            parts: [
              { text: '落', reading: 'お' },
              { text: 'ち', reading: 'ち' },
              { text: '葉', reading: 'ば' }
            ],
            meaning: { en: 'fallen leaves', vi: 'lá rụng' }
          }
        ]
      },
      {
        char: '緑',
        meaning: { en: 'green', vi: 'lục - màu xanh lá' },
        onyomi: ['リョク', 'ロク'],
        kunyomi: ['みどり'],
        components: [],
        mnemonic: {
          en: 'The color of threads 糸 dyed from fresh leaves and grass: green.',
          vi: 'Màu của sợi chỉ 糸 nhuộm từ lá cỏ tươi: màu xanh lá.'
        },
        examples: [
          {
            parts: [{ text: '緑', reading: 'みどり' }],
            meaning: { en: 'green', vi: 'màu xanh lá' }
          },
          {
            parts: [
              { text: '緑', reading: 'みどり' },
              { text: '色', reading: 'いろ' }
            ],
            meaning: { en: 'green (color)', vi: 'màu xanh lục' }
          },
          {
            parts: [
              { text: '新', reading: 'しん' },
              { text: '緑', reading: 'りょく' }
            ],
            meaning: { en: 'fresh spring greenery', vi: 'màu xanh non đầu mùa' }
          }
        ]
      },
      {
        char: '畑',
        meaning: { en: 'field (dry crops)', vi: 'điền - ruộng khô, nương rẫy' },
        onyomi: [],
        kunyomi: ['はた', 'はたけ'],
        components: ['火', '田'],
        mnemonic: {
          en: 'A field 田 cleared by fire 火 for dry-crop farming: a cultivated field, as opposed to a wet rice paddy.',
          vi: 'Cánh đồng 田 được đốt 火 dọn để trồng cạn: ruộng khô, nương rẫy (khác ruộng nước).'
        },
        note: {
          en: "A kokuji (kanji made in Japan), so it has no on'yomi.",
          vi: 'Là kokuji (chữ do người Nhật tạo) nên không có âm ON.'
        },
        examples: [
          {
            parts: [{ text: '畑', reading: 'はたけ' }],
            meaning: { en: 'field, cultivated plot', vi: 'ruộng, nương' }
          },
          {
            parts: [
              { text: '田', reading: 'た' },
              { text: '畑', reading: 'はた' }
            ],
            meaning: { en: 'fields (paddies and dry fields)', vi: 'ruộng nương, đồng áng' }
          },
          {
            parts: [
              { text: '花', reading: 'はな' },
              { text: '畑', reading: 'ばたけ' }
            ],
            meaning: { en: 'flower field', vi: 'vườn hoa, cánh đồng hoa' }
          }
        ]
      },
      {
        char: '農',
        meaning: { en: 'agriculture, farming', vi: 'nông - nông nghiệp, làm ruộng' },
        onyomi: ['ノウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Working the fields from dawn with tools in hand, season after season: farming, agriculture.',
          vi: 'Cày cấy đồng ruộng từ sáng sớm với nông cụ trong tay, hết mùa này đến mùa khác: nông nghiệp, làm ruộng.'
        },
        examples: [
          {
            parts: [
              { text: '農', reading: 'のう' },
              { text: '業', reading: 'ぎょう' }
            ],
            meaning: { en: 'agriculture', vi: 'nông nghiệp' }
          },
          {
            parts: [
              { text: '農', reading: 'のう' },
              { text: '家', reading: 'か' }
            ],
            meaning: { en: 'farmer, farmhouse', vi: 'nhà nông, nông hộ' }
          },
          {
            parts: [
              { text: '農', reading: 'のう' },
              { text: '民', reading: 'みん' }
            ],
            meaning: { en: 'farmer, peasant', vi: 'nông dân' }
          }
        ]
      },
      {
        char: '苦',
        meaning: {
          en: 'bitter; suffering, hardship',
          vi: 'khổ - đắng; khổ sở, vất vả'
        },
        onyomi: ['ク'],
        kunyomi: ['くる.しい', 'にが.い'],
        components: [],
        mnemonic: {
          en: 'An old 古 herb 艹 that has turned bitter: bitter, and the bitterness of suffering and hardship.',
          vi: 'Một loại cây cỏ 艹 để lâu 古 hóa đắng: đắng, và sự cay đắng của khổ sở, vất vả.'
        },
        examples: [
          {
            parts: [
              { text: '苦', reading: 'にが' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'bitter (taste)', vi: 'đắng' }
          },
          {
            parts: [
              { text: '苦', reading: 'くる' },
              { text: 'し', reading: 'し' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'painful, hard to bear', vi: 'khổ sở, đau đớn' }
          },
          {
            parts: [
              { text: '苦', reading: 'く' },
              { text: '労', reading: 'ろう' }
            ],
            meaning: { en: 'hardship, toil', vi: 'vất vả, gian khổ' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Buildings & structures',
      vi: 'Công trình & kiến trúc'
    },
    kanji: [
      {
        char: '開',
        meaning: { en: 'to open', vi: 'khai - mở' },
        onyomi: ['カイ'],
        kunyomi: ['ひら.く', 'あ.ける'],
        components: [],
        mnemonic: {
          en: 'Two hands lifting the bar off a gate 門 to swing it open: to open.',
          vi: 'Hai bàn tay nhấc thanh chắn khỏi cổng 門 để mở ra: mở.'
        },
        examples: [
          {
            parts: [
              { text: '開', reading: 'ひら' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to open (up), to bloom', vi: 'mở ra, nở' }
          },
          {
            parts: [
              { text: '開', reading: 'あ' },
              { text: 'け', reading: 'け' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to open (something)', vi: 'mở (cái gì đó)' }
          },
          {
            parts: [
              { text: '開', reading: 'かい' },
              { text: '店', reading: 'てん' }
            ],
            meaning: { en: 'opening a shop', vi: 'khai trương, mở cửa hàng' }
          }
        ]
      },
      {
        char: '階',
        meaning: { en: 'floor, story; rank', vi: 'giai - tầng (lầu); bậc' },
        onyomi: ['カイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Steps cut into a hillside 阝 rising level by level: a floor, a story, a rank.',
          vi: 'Những bậc cắt vào sườn đồi 阝 lên từng cấp: tầng lầu, bậc.'
        },
        examples: [
          {
            parts: [
              { text: '階', reading: 'かい' },
              { text: '段', reading: 'だん' }
            ],
            meaning: { en: 'stairs, steps', vi: 'cầu thang' }
          },
          {
            parts: [
              { text: '一', reading: 'いっ' },
              { text: '階', reading: 'かい' }
            ],
            meaning: { en: 'first floor, ground floor', vi: 'tầng một' }
          },
          {
            parts: [
              { text: '二', reading: 'に' },
              { text: '階', reading: 'かい' }
            ],
            meaning: { en: 'second floor', vi: 'tầng hai' }
          }
        ]
      },
      {
        char: '院',
        meaning: { en: 'institution (hospital, temple, academy)', vi: 'viện - viện, cơ sở' },
        onyomi: ['イン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A walled compound on the hillside 阝 enclosing a large institution: a hospital, temple, or academy.',
          vi: 'Một khu tường bao trên sườn đồi 阝 chứa cơ sở lớn: bệnh viện, chùa, học viện.'
        },
        examples: [
          {
            parts: [
              { text: '病', reading: 'びょう' },
              { text: '院', reading: 'いん' }
            ],
            meaning: { en: 'hospital', vi: 'bệnh viện' }
          },
          {
            parts: [
              { text: '入', reading: 'にゅう' },
              { text: '院', reading: 'いん' }
            ],
            meaning: { en: 'hospitalization', vi: 'nhập viện' }
          },
          {
            parts: [
              { text: '大', reading: 'だい' },
              { text: '学', reading: 'がく' },
              { text: '院', reading: 'いん' }
            ],
            meaning: { en: 'graduate school', vi: 'cao học, viện sau đại học' }
          }
        ]
      },
      {
        char: '駅',
        meaning: { en: 'station', vi: 'dịch - nhà ga, trạm' },
        onyomi: ['エキ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Once a relay post where horses 馬 were changed, now a train station.',
          vi: 'Vốn là trạm đổi ngựa 馬, nay là nhà ga xe lửa.'
        },
        examples: [
          {
            parts: [{ text: '駅', reading: 'えき' }],
            meaning: { en: 'station', vi: 'nhà ga' }
          },
          {
            parts: [
              { text: '駅', reading: 'えき' },
              { text: '前', reading: 'まえ' }
            ],
            meaning: { en: 'in front of the station', vi: 'trước nhà ga' }
          },
          {
            parts: [
              { text: '駅', reading: 'えき' },
              { text: '員', reading: 'いん' }
            ],
            meaning: { en: 'station staff', vi: 'nhân viên nhà ga' }
          }
        ]
      },
      {
        char: '央',
        meaning: { en: 'center, middle', vi: 'ương - trung tâm, chính giữa' },
        onyomi: ['オウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A person standing right in the middle of a frame, dead center: the center, the middle.',
          vi: 'Một người đứng ngay giữa khung, chính giữa: trung tâm, chính giữa.'
        },
        examples: [
          {
            parts: [
              { text: '中', reading: 'ちゅう' },
              { text: '央', reading: 'おう' }
            ],
            meaning: { en: 'center, middle', vi: 'trung ương, trung tâm' }
          },
          {
            parts: [
              { text: '中', reading: 'ちゅう' },
              { text: '央', reading: 'おう' },
              { text: '線', reading: 'せん' }
            ],
            meaning: { en: 'the Chuo Line', vi: 'tuyến Chuo' }
          }
        ]
      },
      {
        char: '横',
        meaning: { en: 'side, horizontal; beside', vi: 'hoành - ngang; bên cạnh' },
        onyomi: ['オウ'],
        kunyomi: ['よこ'],
        components: ['木', '黄'],
        mnemonic: {
          en: 'A yellow 黄 beam of wood 木 laid down flat across: horizontal, sideways, beside.',
          vi: 'Một thanh gỗ 木 màu vàng 黄 đặt nằm ngang: ngang, bên cạnh.'
        },
        examples: [
          {
            parts: [{ text: '横', reading: 'よこ' }],
            meaning: { en: 'side, beside', vi: 'bên cạnh, chiều ngang' }
          },
          {
            parts: [
              { text: '横', reading: 'よこ' },
              { text: '顔', reading: 'がお' }
            ],
            meaning: { en: 'profile (of a face)', vi: 'khuôn mặt nghiêng' }
          },
          {
            parts: [
              { text: '横', reading: 'よこ' },
              { text: '書', reading: 'が' },
              { text: 'き', reading: 'き' }
            ],
            meaning: { en: 'horizontal writing', vi: 'viết ngang' }
          }
        ]
      },
      {
        char: '柱',
        meaning: { en: 'pillar, post, column', vi: 'trụ - cột, trụ' },
        onyomi: ['チュウ'],
        kunyomi: ['はしら'],
        components: [],
        mnemonic: {
          en: 'The main 主 piece of wood 木 that holds up a building: a pillar, a post.',
          vi: 'Thanh gỗ 木 chính 主 chống đỡ cả tòa nhà: cây cột, cây trụ.'
        },
        examples: [
          {
            parts: [{ text: '柱', reading: 'はしら' }],
            meaning: { en: 'pillar, post', vi: 'cây cột' }
          },
          {
            parts: [
              { text: '電', reading: 'でん' },
              { text: '柱', reading: 'ちゅう' }
            ],
            meaning: { en: 'utility pole', vi: 'cột điện' }
          },
          {
            parts: [
              { text: '門', reading: 'もん' },
              { text: '柱', reading: 'ちゅう' }
            ],
            meaning: { en: 'gatepost', vi: 'trụ cổng' }
          }
        ]
      },
      {
        char: '板',
        meaning: { en: 'board, plank', vi: 'bản - tấm ván, tấm bảng' },
        onyomi: ['ハン', 'バン'],
        kunyomi: ['いた'],
        components: [],
        mnemonic: {
          en: 'A flat slab of wood 木 sawn and turned over 反: a board, a plank.',
          vi: 'Một tấm gỗ 木 phẳng được xẻ và lật 反: tấm ván, tấm bảng.'
        },
        examples: [
          {
            parts: [{ text: '板', reading: 'いた' }],
            meaning: { en: 'board, plank', vi: 'tấm ván' }
          },
          {
            parts: [
              { text: '黒', reading: 'こく' },
              { text: '板', reading: 'ばん' }
            ],
            meaning: { en: 'blackboard', vi: 'bảng đen' }
          },
          {
            parts: [
              { text: '板', reading: 'いた' },
              { text: '前', reading: 'まえ' }
            ],
            meaning: { en: 'sushi chef', vi: 'đầu bếp (món Nhật)' }
          }
        ]
      },
      {
        char: '坂',
        meaning: { en: 'slope, hill', vi: 'phản - con dốc' },
        onyomi: ['ハン'],
        kunyomi: ['さか'],
        components: [],
        mnemonic: {
          en: 'A stretch of ground 土 that tilts and turns back 反 on itself as it climbs: a slope.',
          vi: 'Một đoạn đất 土 nghiêng dốc, đổ ngược 反 khi đi lên: con dốc.'
        },
        examples: [
          {
            parts: [{ text: '坂', reading: 'さか' }],
            meaning: { en: 'slope, hill', vi: 'con dốc' }
          },
          {
            parts: [
              { text: '上', reading: 'のぼ' },
              { text: 'り', reading: 'り' },
              { text: '坂', reading: 'ざか' }
            ],
            meaning: { en: 'uphill slope', vi: 'dốc lên' }
          },
          {
            parts: [
              { text: '下', reading: 'くだ' },
              { text: 'り', reading: 'り' },
              { text: '坂', reading: 'ざか' }
            ],
            meaning: { en: 'downhill slope', vi: 'dốc xuống' }
          }
        ]
      },
      {
        char: '橋',
        meaning: { en: 'bridge', vi: 'kiều - cây cầu' },
        onyomi: ['キョウ'],
        kunyomi: ['はし'],
        components: [],
        mnemonic: {
          en: 'A tall structure of wood 木 arching high across a river: a bridge.',
          vi: 'Một công trình gỗ 木 cao vòng qua sông: cây cầu.'
        },
        examples: [
          {
            parts: [{ text: '橋', reading: 'はし' }],
            meaning: { en: 'bridge', vi: 'cây cầu' }
          },
          {
            parts: [
              { text: '歩', reading: 'ほ' },
              { text: '道', reading: 'どう' },
              { text: '橋', reading: 'きょう' }
            ],
            meaning: { en: 'pedestrian bridge', vi: 'cầu vượt cho người đi bộ' }
          },
          {
            parts: [
              { text: '鉄', reading: 'てっ' },
              { text: '橋', reading: 'きょう' }
            ],
            meaning: { en: 'iron/railway bridge', vi: 'cầu sắt' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Everyday verbs',
      vi: 'Động từ đời thường'
    },
    kanji: [
      {
        char: '始',
        meaning: { en: 'to begin, to start', vi: 'thủy - bắt đầu, khởi đầu' },
        onyomi: ['シ'],
        kunyomi: ['はじ.める', 'はじ.まる'],
        components: [],
        mnemonic: {
          en: 'A woman 女 giving birth, the very beginning of a life: to begin, to start.',
          vi: 'Người phụ nữ 女 sinh con, khởi đầu của một cuộc đời: bắt đầu, khởi đầu.'
        },
        examples: [
          {
            parts: [
              { text: '始', reading: 'はじ' },
              { text: 'め', reading: 'め' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to begin, to start', vi: 'bắt đầu' }
          },
          {
            parts: [
              { text: '開', reading: 'かい' },
              { text: '始', reading: 'し' }
            ],
            meaning: { en: 'start, commencement', vi: 'sự bắt đầu, khai mạc' }
          },
          {
            parts: [
              { text: '始', reading: 'し' },
              { text: '発', reading: 'はつ' }
            ],
            meaning: { en: 'first train/bus of the day', vi: 'chuyến đầu tiên' }
          }
        ]
      },
      {
        char: '終',
        meaning: { en: 'to end, to finish', vi: 'chung - kết thúc, cuối cùng' },
        onyomi: ['シュウ'],
        kunyomi: ['お.わる', 'お.える'],
        components: [],
        mnemonic: {
          en: 'The last knot tied at the very end of a thread 糸, like winter 冬 closing the year: to finish, the end.',
          vi: 'Nút thắt cuối cùng ở đuôi sợi chỉ 糸, như mùa đông 冬 khép lại năm: kết thúc, cuối cùng.'
        },
        examples: [
          {
            parts: [
              { text: '終', reading: 'お' },
              { text: 'わ', reading: 'わ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to end, to finish', vi: 'kết thúc' }
          },
          {
            parts: [
              { text: '終', reading: 'しゅう' },
              { text: '点', reading: 'てん' }
            ],
            meaning: { en: 'terminal, last stop', vi: 'ga cuối, điểm cuối' }
          },
          {
            parts: [
              { text: '終', reading: 'しゅう' },
              { text: '電', reading: 'でん' }
            ],
            meaning: { en: 'last train', vi: 'chuyến tàu cuối' }
          }
        ]
      },
      {
        char: '集',
        meaning: { en: 'to gather, to collect', vi: 'tập - tụ họp, thu thập' },
        onyomi: ['シュウ'],
        kunyomi: ['あつ.める', 'あつ.まる'],
        components: ['隹', '木'],
        mnemonic: {
          en: 'Birds 隹 flocking together onto a tree 木: to gather, to collect.',
          vi: 'Đàn chim 隹 tụ lại trên cây 木: tụ họp, thu thập.'
        },
        examples: [
          {
            parts: [
              { text: '集', reading: 'あつ' },
              { text: 'め', reading: 'め' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to collect, to gather', vi: 'thu thập, tập hợp' }
          },
          {
            parts: [
              { text: '集', reading: 'しゅう' },
              { text: '合', reading: 'ごう' }
            ],
            meaning: { en: 'gathering, meeting up', vi: 'tập hợp, tập trung' }
          },
          {
            parts: [
              { text: '集', reading: 'しゅう' },
              { text: '中', reading: 'ちゅう' }
            ],
            meaning: { en: 'concentration', vi: 'sự tập trung' }
          }
        ]
      },
      {
        char: '住',
        meaning: { en: 'to live, to reside', vi: 'trú - sống, cư trú' },
        onyomi: ['ジュウ'],
        kunyomi: ['す.む'],
        components: [],
        mnemonic: {
          en: 'A person 亻 who is the master 主 of a fixed place: to live, to reside.',
          vi: 'Một người 亻 làm chủ 主 một nơi cố định: sống, cư trú.'
        },
        examples: [
          {
            parts: [
              { text: '住', reading: 'す' },
              { text: 'む', reading: 'む' }
            ],
            meaning: { en: 'to live, to reside', vi: 'sống, ở' }
          },
          {
            parts: [
              { text: '住', reading: 'じゅう' },
              { text: '所', reading: 'しょ' }
            ],
            meaning: { en: 'address', vi: 'địa chỉ' }
          },
          {
            parts: [
              { text: '住', reading: 'じゅう' },
              { text: '民', reading: 'みん' }
            ],
            meaning: { en: 'resident', vi: 'cư dân' }
          }
        ]
      },
      {
        char: '守',
        meaning: { en: 'to protect, to guard', vi: 'thủ - bảo vệ, giữ gìn' },
        onyomi: ['シュ', 'ス'],
        kunyomi: ['まも.る'],
        components: ['宀', '寸'],
        mnemonic: {
          en: 'A hand 寸 keeping watch under the roof 宀 of a home: to protect, to guard.',
          vi: 'Bàn tay 寸 canh giữ dưới mái nhà 宀: bảo vệ, giữ gìn.'
        },
        examples: [
          {
            parts: [
              { text: '守', reading: 'まも' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to protect, to keep (a promise)', vi: 'bảo vệ, giữ (lời)' }
          },
          {
            parts: [
              { text: '留', reading: 'る' },
              { text: '守', reading: 'す' }
            ],
            meaning: { en: 'absence (from home)', vi: 'sự vắng nhà' }
          },
          {
            parts: [
              { text: '見', reading: 'み' },
              { text: '守', reading: 'まも' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to watch over', vi: 'trông chừng, dõi theo' }
          }
        ]
      },
      {
        char: '待',
        meaning: { en: 'to wait', vi: 'đãi - chờ, đợi' },
        onyomi: ['タイ'],
        kunyomi: ['ま.つ'],
        components: [],
        mnemonic: {
          en: 'Standing on the road 彳 as still as a temple 寺, biding time: to wait.',
          vi: 'Đứng bên đường 彳 tĩnh lặng như ngôi chùa 寺, chờ thời gian trôi: chờ, đợi.'
        },
        examples: [
          {
            parts: [
              { text: '待', reading: 'ま' },
              { text: 'つ', reading: 'つ' }
            ],
            meaning: { en: 'to wait', vi: 'chờ, đợi' }
          },
          {
            parts: [
              { text: '期', reading: 'き' },
              { text: '待', reading: 'たい' }
            ],
            meaning: { en: 'expectation, hope', vi: 'kỳ vọng, mong đợi' }
          },
          {
            parts: [
              { text: '待', reading: 'まち' },
              { text: '合', reading: 'あい' },
              { text: '室', reading: 'しつ' }
            ],
            meaning: { en: 'waiting room', vi: 'phòng chờ' }
          }
        ]
      },
      {
        char: '定',
        meaning: { en: 'to fix, to set, to decide', vi: 'định - định, quy định; cố định' },
        onyomi: ['テイ', 'ジョウ'],
        kunyomi: ['さだ.める'],
        components: [],
        mnemonic: {
          en: 'Settling something firmly in place under a roof 宀: to fix, to set, to decide.',
          vi: 'Ổn định vật gì đó cố định dưới mái nhà 宀: định, quy định, cố định.'
        },
        examples: [
          {
            parts: [
              { text: '定', reading: 'さだ' },
              { text: 'め', reading: 'め' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to establish, to lay down', vi: 'quy định, định ra' }
          },
          {
            parts: [
              { text: '決', reading: 'けっ' },
              { text: '定', reading: 'てい' }
            ],
            meaning: { en: 'decision', vi: 'sự quyết định' }
          },
          {
            parts: [
              { text: '定', reading: 'てい' },
              { text: '食', reading: 'しょく' }
            ],
            meaning: { en: 'set meal', vi: 'suất ăn cố định' }
          }
        ]
      },
      {
        char: '着',
        meaning: { en: 'to wear; to arrive; to attach', vi: 'trước - mặc; đến nơi; dính' },
        onyomi: ['チャク'],
        kunyomi: ['き.る', 'つ.く'],
        components: [],
        mnemonic: {
          en: 'Pulling clothing down over yourself and settling in on arrival: to wear, to arrive, to attach.',
          vi: 'Kéo áo quần lên người và yên vị khi đến nơi: mặc, đến nơi, dính vào.'
        },
        examples: [
          {
            parts: [
              { text: '着', reading: 'き' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to wear, to put on', vi: 'mặc' }
          },
          {
            parts: [
              { text: '着', reading: 'つ' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to arrive', vi: 'đến nơi' }
          },
          {
            parts: [
              { text: '到', reading: 'とう' },
              { text: '着', reading: 'ちゃく' }
            ],
            meaning: { en: 'arrival', vi: 'sự đến nơi' }
          }
        ]
      },
      {
        char: '放',
        meaning: { en: 'to release, to let go; to broadcast', vi: 'phóng - thả, buông; phát' },
        onyomi: ['ホウ'],
        kunyomi: ['はな.す', 'はな.つ'],
        components: [],
        mnemonic: {
          en: 'A hand striking to send something off in a direction 方 and let it loose: to release, to let go, to broadcast.',
          vi: 'Một bàn tay đánh cho vật bay theo hướng 方 và buông ra: thả, buông, phát (sóng).'
        },
        examples: [
          {
            parts: [
              { text: '放', reading: 'はな' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to let go, to set free', vi: 'thả, buông' }
          },
          {
            parts: [
              { text: '放', reading: 'ほう' },
              { text: '送', reading: 'そう' }
            ],
            meaning: { en: 'broadcast', vi: 'phát sóng' }
          },
          {
            parts: [
              { text: '開', reading: 'かい' },
              { text: '放', reading: 'ほう' }
            ],
            meaning: { en: 'opening up, throwing open', vi: 'mở rộng, cởi mở' }
          }
        ]
      },
      {
        char: '注',
        meaning: { en: 'to pour; to pay attention', vi: 'chú - rót, đổ; chú ý' },
        onyomi: ['チュウ'],
        kunyomi: ['そそ.ぐ'],
        components: [],
        mnemonic: {
          en: 'Pouring water 氵 in a steady stream onto one main 主 spot: to pour, and to focus attention on.',
          vi: 'Rót nước 氵 thành dòng vào một điểm chính 主: rót, đổ, và chú ý vào.'
        },
        examples: [
          {
            parts: [
              { text: '注', reading: 'そそ' },
              { text: 'ぐ', reading: 'ぐ' }
            ],
            meaning: { en: 'to pour', vi: 'rót, đổ' }
          },
          {
            parts: [
              { text: '注', reading: 'ちゅう' },
              { text: '意', reading: 'い' }
            ],
            meaning: { en: 'caution, attention', vi: 'chú ý, cẩn thận' }
          },
          {
            parts: [
              { text: '注', reading: 'ちゅう' },
              { text: '文', reading: 'もん' }
            ],
            meaning: { en: 'order (in a shop)', vi: 'gọi món, đặt hàng' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Spirit & society',
      vi: 'Tâm linh & xã hội'
    },
    kanji: [
      {
        char: '神',
        meaning: { en: 'god, spirit; mind', vi: 'thần - thần, thần linh; tinh thần' },
        onyomi: ['シン', 'ジン'],
        kunyomi: ['かみ'],
        components: [],
        mnemonic: {
          en: 'At the altar 礻 people call on the lightning-spirit 申 above: a god, a spirit.',
          vi: 'Trước bàn thờ 礻 người ta khấn vị thần sấm sét 申 trên cao: thần, thần linh.'
        },
        examples: [
          {
            parts: [{ text: '神', reading: 'かみ' }],
            meaning: { en: 'god, deity', vi: 'thần, vị thần' }
          },
          {
            parts: [
              { text: '神', reading: 'じん' },
              { text: '社', reading: 'じゃ' }
            ],
            meaning: { en: 'Shinto shrine', vi: 'đền thờ Thần đạo' }
          },
          {
            parts: [
              { text: '神', reading: 'かみ' },
              { text: '様', reading: 'さま' }
            ],
            meaning: { en: 'god (honorific)', vi: 'thần linh, ông trời' }
          }
        ]
      },
      {
        char: '真',
        meaning: { en: 'true, real; pure', vi: 'chân - thật, chân thật; ngay' },
        onyomi: ['シン'],
        kunyomi: ['ま'],
        components: [],
        mnemonic: {
          en: 'A tool held straight and true to test what is genuine: true, real, pure.',
          vi: 'Một dụng cụ giữ thẳng và chuẩn để kiểm chứng cái thật: thật, chân thật, ngay.'
        },
        examples: [
          {
            parts: [
              { text: '真', reading: 'ま' },
              { text: 'ん', reading: 'ん' },
              { text: '中', reading: 'なか' }
            ],
            meaning: { en: 'dead center, right in the middle', vi: 'chính giữa' }
          },
          {
            parts: [
              { text: '写', reading: 'しゃ' },
              { text: '真', reading: 'しん' }
            ],
            meaning: { en: 'photograph', vi: 'bức ảnh' }
          },
          {
            parts: [
              { text: '真', reading: 'しん' },
              { text: '実', reading: 'じつ' }
            ],
            meaning: { en: 'truth, reality', vi: 'sự thật, chân thật' }
          }
        ]
      },
      {
        char: '深',
        meaning: { en: 'deep', vi: 'thâm - sâu; đậm' },
        onyomi: ['シン'],
        kunyomi: ['ふか.い'],
        components: [],
        mnemonic: {
          en: 'Water 氵 that goes far down into a cave, hard to reach the bottom: deep.',
          vi: 'Nước 氵 ăn sâu xuống hang, khó chạm đáy: sâu, thâm sâu.'
        },
        examples: [
          {
            parts: [
              { text: '深', reading: 'ふか' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'deep', vi: 'sâu' }
          },
          {
            parts: [
              { text: '深', reading: 'しん' },
              { text: '夜', reading: 'や' }
            ],
            meaning: { en: 'late at night, midnight', vi: 'đêm khuya' }
          },
          {
            parts: [
              { text: '水', reading: 'すい' },
              { text: '深', reading: 'しん' }
            ],
            meaning: { en: 'water depth', vi: 'độ sâu của nước' }
          }
        ]
      },
      {
        char: '申',
        meaning: { en: 'to say, to state (humble)', vi: 'thân - thưa, nói (khiêm nhường)' },
        onyomi: ['シン'],
        kunyomi: ['もう.す'],
        components: [],
        mnemonic: {
          en: 'A bolt of lightning splitting the sky, once used to speak to the gods: to say, to state humbly.',
          vi: 'Tia sét xẻ dọc bầu trời, xưa dùng để thưa với thần: thưa, nói (khiêm nhường).'
        },
        examples: [
          {
            parts: [
              { text: '申', reading: 'もう' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to say (humble)', vi: 'thưa, nói (khiêm tốn)' }
          },
          {
            parts: [
              { text: '申', reading: 'もう' },
              { text: 'し', reading: 'し' },
              { text: '込', reading: 'こ' },
              { text: 'む', reading: 'む' }
            ],
            meaning: { en: 'to apply, to sign up', vi: 'đăng ký, xin' }
          },
          {
            parts: [
              { text: '申', reading: 'もう' },
              { text: 'し', reading: 'し' },
              { text: '出', reading: 'で' }
            ],
            meaning: { en: 'offer, proposal', vi: 'lời đề nghị' }
          }
        ]
      },
      {
        char: '祭',
        meaning: { en: 'festival; to worship', vi: 'tế - lễ hội; cúng tế' },
        onyomi: ['サイ'],
        kunyomi: ['まつ.り', 'まつ.る'],
        components: [],
        mnemonic: {
          en: 'A hand 又 placing meat 月 on the altar 示 as an offering: a festival, to worship.',
          vi: 'Bàn tay 又 đặt miếng thịt 月 lên bàn thờ 示 để cúng: lễ hội, cúng tế.'
        },
        examples: [
          {
            parts: [
              { text: '祭', reading: 'まつ' },
              { text: 'り', reading: 'り' }
            ],
            meaning: { en: 'festival', vi: 'lễ hội' }
          },
          {
            parts: [
              { text: '祭', reading: 'さい' },
              { text: '日', reading: 'じつ' }
            ],
            meaning: { en: 'national holiday, feast day', vi: 'ngày lễ' }
          },
          {
            parts: [
              { text: '文', reading: 'ぶん' },
              { text: '化', reading: 'か' },
              { text: '祭', reading: 'さい' }
            ],
            meaning: { en: 'cultural festival', vi: 'lễ hội văn hóa' }
          }
        ]
      },
      {
        char: '礼',
        meaning: { en: 'courtesy, manners; thanks, a bow', vi: 'lễ - lễ nghi, lễ phép; cảm tạ' },
        onyomi: ['レイ', 'ライ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Bowing respectfully before the altar 礻: courtesy, manners, a bow of thanks.',
          vi: 'Cúi mình kính cẩn trước bàn thờ 礻: lễ nghi, lễ phép, cảm tạ.'
        },
        examples: [
          {
            parts: [{ text: '礼', reading: 'れい' }],
            meaning: { en: 'bow; thanks; courtesy', vi: 'sự cúi chào; lời cảm tạ' }
          },
          {
            parts: [
              { text: '失', reading: 'しつ' },
              { text: '礼', reading: 'れい' }
            ],
            meaning: { en: 'rudeness; excuse me', vi: 'thất lễ; xin lỗi' }
          },
          {
            parts: [
              { text: 'お', reading: 'お' },
              { text: '礼', reading: 'れい' }
            ],
            meaning: { en: 'thanks, token of gratitude', vi: 'lời cảm ơn, chút tạ ơn' }
          }
        ]
      },
      {
        char: '世',
        meaning: { en: 'generation; world; age', vi: 'thế - đời, thế giới; thế hệ' },
        onyomi: ['セイ', 'セ'],
        kunyomi: ['よ'],
        components: [],
        mnemonic: {
          en: 'Three tens joined together, about a lifetime or one generation: a generation, the world, an age.',
          vi: 'Ba số mười nối lại, chừng một đời người hay một thế hệ: thế hệ, đời, thế giới.'
        },
        examples: [
          {
            parts: [
              { text: '世', reading: 'せ' },
              { text: '界', reading: 'かい' }
            ],
            meaning: { en: 'the world', vi: 'thế giới' }
          },
          {
            parts: [
              { text: '世', reading: 'せ' },
              { text: '話', reading: 'わ' }
            ],
            meaning: { en: 'care, looking after', vi: 'sự chăm sóc, giúp đỡ' }
          },
          {
            parts: [
              { text: '一', reading: 'いっ' },
              { text: '世', reading: 'せい' }
            ],
            meaning: { en: 'first generation', vi: 'thế hệ thứ nhất' }
          },
          {
            parts: [
              { text: '世', reading: 'よ' },
              { text: 'の', reading: 'の' },
              { text: '中', reading: 'なか' }
            ],
            meaning: { en: 'society, the world', vi: 'thế gian, cuộc đời' }
          }
        ]
      },
      {
        char: '全',
        meaning: { en: 'all, whole; complete', vi: 'toàn - toàn bộ, tất cả; hoàn toàn' },
        onyomi: ['ゼン'],
        kunyomi: ['すべ.て', 'まった.く'],
        components: [],
        mnemonic: {
          en: 'A perfect gem kept whole and flawless under cover: all, whole, complete.',
          vi: 'Một viên ngọc hoàn hảo giữ nguyên vẹn, không tì vết dưới lớp che: toàn bộ, tất cả, hoàn toàn.'
        },
        examples: [
          {
            parts: [
              { text: '全', reading: 'ぜん' },
              { text: '部', reading: 'ぶ' }
            ],
            meaning: { en: 'all, the whole', vi: 'toàn bộ, tất cả' }
          },
          {
            parts: [
              { text: '安', reading: 'あん' },
              { text: '全', reading: 'ぜん' }
            ],
            meaning: { en: 'safety', vi: 'an toàn' }
          },
          {
            parts: [
              { text: '全', reading: 'ぜん' },
              { text: '国', reading: 'こく' }
            ],
            meaning: { en: 'the whole country', vi: 'toàn quốc' }
          },
          {
            parts: [
              { text: '全', reading: 'すべ' },
              { text: 'て', reading: 'て' }
            ],
            meaning: { en: 'all, everything', vi: 'tất cả, toàn bộ' }
          }
        ]
      },
      {
        char: '族',
        meaning: { en: 'tribe, clan, family', vi: 'tộc - dòng họ, bộ tộc' },
        onyomi: ['ゾク'],
        kunyomi: [],
        components: ['方', '矢'],
        mnemonic: {
          en: 'Arrows 矢 gathered under one banner 方: a clan, a tribe, a family.',
          vi: 'Những mũi tên 矢 tụ dưới một lá cờ 方: dòng họ, bộ tộc, gia tộc.'
        },
        examples: [
          {
            parts: [
              { text: '家', reading: 'か' },
              { text: '族', reading: 'ぞく' }
            ],
            meaning: { en: 'family', vi: 'gia đình' }
          },
          {
            parts: [
              { text: '民', reading: 'みん' },
              { text: '族', reading: 'ぞく' }
            ],
            meaning: { en: 'ethnic group, people', vi: 'dân tộc' }
          },
          {
            parts: [
              { text: '水', reading: 'すい' },
              { text: '族', reading: 'ぞく' },
              { text: '館', reading: 'かん' }
            ],
            meaning: { en: 'aquarium', vi: 'thủy cung' }
          }
        ]
      },
      {
        char: '他',
        meaning: { en: 'other, another', vi: 'tha - khác, cái khác' },
        onyomi: ['タ'],
        kunyomi: ['ほか'],
        components: [],
        mnemonic: {
          en: 'A person 亻 who is someone else, not this one: other, another.',
          vi: 'Một người 亻 khác, không phải người này: khác, cái khác.'
        },
        examples: [
          {
            parts: [{ text: '他', reading: 'ほか' }],
            meaning: { en: 'other, the rest', vi: 'cái khác, phần còn lại' }
          },
          {
            parts: [
              { text: '他', reading: 'た' },
              { text: '人', reading: 'にん' }
            ],
            meaning: { en: 'other people, stranger', vi: 'người khác, người dưng' }
          },
          {
            parts: [
              { text: '他', reading: 'た' },
              { text: '国', reading: 'こく' }
            ],
            meaning: { en: 'foreign country', vi: 'nước khác, nước ngoài' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Documents, order & money',
      vi: 'Giấy tờ, thứ tự & tiền bạc'
    },
    kanji: [
      {
        char: '談',
        meaning: { en: 'to talk, to discuss', vi: 'đàm - trò chuyện, bàn luận' },
        onyomi: ['ダン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Words 言 exchanged warmly around a fire 炎: to talk, to discuss.',
          vi: 'Lời nói 言 trao đổi ấm áp bên ngọn lửa 炎: trò chuyện, bàn luận.'
        },
        examples: [
          {
            parts: [
              { text: '相', reading: 'そう' },
              { text: '談', reading: 'だん' }
            ],
            meaning: { en: 'consultation', vi: 'bàn bạc, tư vấn' }
          },
          {
            parts: [
              { text: '会', reading: 'かい' },
              { text: '談', reading: 'だん' }
            ],
            meaning: { en: 'talks, conference', vi: 'hội đàm' }
          },
          {
            parts: [
              { text: '面', reading: 'めん' },
              { text: '談', reading: 'だん' }
            ],
            meaning: { en: 'interview, face-to-face talk', vi: 'phỏng vấn, nói chuyện trực tiếp' }
          }
        ]
      },
      {
        char: '調',
        meaning: {
          en: 'to investigate; to tune; tone',
          vi: 'điều - điều tra; điều chỉnh; giai điệu'
        },
        onyomi: ['チョウ'],
        kunyomi: ['しら.べる', 'ととの.える'],
        components: [],
        mnemonic: {
          en: 'Using words 言 to go all around 周 a matter and set it right: to investigate, to tune, a tone.',
          vi: 'Dùng lời 言 xem xét khắp 周 một việc và chỉnh cho đúng: điều tra, điều chỉnh, giai điệu.'
        },
        examples: [
          {
            parts: [
              { text: '調', reading: 'しら' },
              { text: 'べ', reading: 'べ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to investigate, to look up', vi: 'điều tra, tra cứu' }
          },
          {
            parts: [
              { text: '調', reading: 'ちょう' },
              { text: '子', reading: 'し' }
            ],
            meaning: { en: 'condition, tune, tempo', vi: 'tình trạng, nhịp điệu' }
          },
          {
            parts: [
              { text: '体', reading: 'たい' },
              { text: '調', reading: 'ちょう' }
            ],
            meaning: { en: 'physical condition', vi: 'thể trạng' }
          }
        ]
      },
      {
        char: '帳',
        meaning: { en: 'notebook, register; curtain', vi: 'trướng - sổ tay, sổ sách; màn' },
        onyomi: ['チョウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A long 長 sheet of cloth 巾 bound to write on: a notebook, a register, and a hanging curtain.',
          vi: 'Một tấm vải 巾 dài 長 đóng lại để ghi chép: sổ tay, sổ sách, và tấm màn.'
        },
        examples: [
          {
            parts: [
              { text: '手', reading: 'て' },
              { text: '帳', reading: 'ちょう' }
            ],
            meaning: { en: 'notebook, planner', vi: 'sổ tay' }
          },
          {
            parts: [
              { text: '通', reading: 'つう' },
              { text: '帳', reading: 'ちょう' }
            ],
            meaning: { en: 'bankbook, passbook', vi: 'sổ ngân hàng' }
          },
          {
            parts: [
              { text: '帳', reading: 'ちょう' },
              { text: '面', reading: 'めん' }
            ],
            meaning: { en: 'notebook, account book', vi: 'quyển sổ, sổ sách' }
          }
        ]
      },
      {
        char: '式',
        meaning: { en: 'ceremony; style; formula', vi: 'thức - nghi thức; kiểu; công thức' },
        onyomi: ['シキ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A fixed way of doing work 工 by rule: a ceremony, a style, a formula.',
          vi: 'Một cách làm việc 工 cố định theo khuôn phép: nghi thức, kiểu, công thức.'
        },
        examples: [
          {
            parts: [{ text: '式', reading: 'しき' }],
            meaning: { en: 'ceremony', vi: 'nghi thức, lễ' }
          },
          {
            parts: [
              { text: '入', reading: 'にゅう' },
              { text: '学', reading: 'がく' },
              { text: '式', reading: 'しき' }
            ],
            meaning: { en: 'entrance ceremony', vi: 'lễ nhập học' }
          },
          {
            parts: [
              { text: '数', reading: 'すう' },
              { text: '式', reading: 'しき' }
            ],
            meaning: { en: 'mathematical formula', vi: 'công thức toán' }
          }
        ]
      },
      {
        char: '号',
        meaning: { en: 'number, issue; title', vi: 'hiệu - số, số hiệu; danh hiệu' },
        onyomi: ['ゴウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A mouth 口 calling out a number or a name aloud: a number, an issue, a title.',
          vi: 'Cái miệng 口 xướng to một con số hay cái tên: số hiệu, số (báo), danh hiệu.'
        },
        examples: [
          {
            parts: [
              { text: '番', reading: 'ばん' },
              { text: '号', reading: 'ごう' }
            ],
            meaning: { en: 'number (in a series)', vi: 'số (thứ tự)' }
          },
          {
            parts: [
              { text: '記', reading: 'き' },
              { text: '号', reading: 'ごう' }
            ],
            meaning: { en: 'symbol, sign', vi: 'ký hiệu' }
          },
          {
            parts: [
              { text: '信', reading: 'しん' },
              { text: '号', reading: 'ごう' }
            ],
            meaning: { en: 'traffic signal, signal', vi: 'đèn tín hiệu' }
          }
        ]
      },
      {
        char: '第',
        meaning: { en: 'ordinal prefix (No.); order', vi: 'đệ - thứ (số thứ tự)' },
        onyomi: ['ダイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Bamboo 竹 slips numbered in order and bound together: the marker for ordinal numbers (No. 1, No. 2).',
          vi: 'Những thẻ tre 竹 đánh số theo thứ tự và bó lại: dấu chỉ số thứ tự (thứ nhất, thứ hai).'
        },
        examples: [
          {
            parts: [
              { text: '第', reading: 'だい' },
              { text: '一', reading: 'いち' }
            ],
            meaning: { en: 'the first, No. 1', vi: 'thứ nhất' }
          },
          {
            parts: [
              { text: '第', reading: 'だい' },
              { text: '二', reading: 'に' }
            ],
            meaning: { en: 'the second, No. 2', vi: 'thứ hai' }
          },
          {
            parts: [
              { text: '第', reading: 'だい' },
              { text: '三', reading: 'さん' }
            ],
            meaning: { en: 'the third, No. 3', vi: 'thứ ba' }
          }
        ]
      },
      {
        char: '丁',
        meaning: {
          en: 'city block; counter (tofu, etc.)',
          vi: 'đinh - khu phố; (đếm đậu phụ...)'
        },
        onyomi: ['チョウ', 'テイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'The shape of a single nail; used as a city block, and a counter for things like blocks of tofu.',
          vi: 'Hình một cây đinh; dùng làm đơn vị khu phố, và lượng từ đếm (miếng đậu phụ...).'
        },
        examples: [
          {
            parts: [
              { text: '丁', reading: 'ちょう' },
              { text: '目', reading: 'め' }
            ],
            meaning: { en: 'city block number', vi: 'số khu phố (chome)' }
          },
          {
            parts: [
              { text: '一', reading: 'いっ' },
              { text: '丁', reading: 'ちょう' }
            ],
            meaning: { en: 'one block; one serving', vi: 'một khối; một phần' }
          },
          {
            parts: [
              { text: '丁', reading: 'ちょう' },
              { text: '度', reading: 'ど' }
            ],
            meaning: { en: 'exactly, just right', vi: 'vừa đúng, vừa vặn' }
          }
        ]
      },
      {
        char: '両',
        meaning: {
          en: 'both, pair; (train car); old coin',
          vi: 'lưỡng - cả hai; (toa xe); lạng (tiền xưa)'
        },
        onyomi: ['リョウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A balance scale with two equal pans: both, a pair, and an old unit of money and train cars.',
          vi: 'Một cái cân với hai đĩa cân bằng: cả hai, một cặp, và đơn vị tiền xưa, toa tàu.'
        },
        examples: [
          {
            parts: [
              { text: '両', reading: 'りょう' },
              { text: '方', reading: 'ほう' }
            ],
            meaning: { en: 'both, both sides', vi: 'cả hai bên' }
          },
          {
            parts: [
              { text: '両', reading: 'りょう' },
              { text: '手', reading: 'て' }
            ],
            meaning: { en: 'both hands', vi: 'hai tay' }
          },
          {
            parts: [
              { text: '両', reading: 'りょう' },
              { text: '親', reading: 'しん' }
            ],
            meaning: { en: 'parents', vi: 'cha mẹ' }
          }
        ]
      },
      {
        char: '銀',
        meaning: { en: 'silver', vi: 'ngân - bạc; ngân hàng' },
        onyomi: ['ギン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'The metal 金 that shines white like the moon: silver.',
          vi: 'Kim loại 金 sáng trắng như ánh trăng: bạc.'
        },
        examples: [
          {
            parts: [{ text: '銀', reading: 'ぎん' }],
            meaning: { en: 'silver', vi: 'bạc' }
          },
          {
            parts: [
              { text: '銀', reading: 'ぎん' },
              { text: '行', reading: 'こう' }
            ],
            meaning: { en: 'bank', vi: 'ngân hàng' }
          },
          {
            parts: [
              { text: '水', reading: 'すい' },
              { text: '銀', reading: 'ぎん' }
            ],
            meaning: { en: 'mercury', vi: 'thủy ngân' }
          }
        ]
      },
      {
        char: '配',
        meaning: { en: 'to distribute, to hand out; to arrange', vi: 'phối - phân phát; sắp đặt' },
        onyomi: ['ハイ'],
        kunyomi: ['くば.る'],
        components: ['酉', '己'],
        mnemonic: {
          en: 'A person 己 kneeling by the wine jars 酉 to portion them out to guests: to distribute, to hand out, to arrange.',
          vi: 'Một người 己 quỳ bên các vò rượu 酉 chia cho khách: phân phát, chia, sắp đặt.'
        },
        examples: [
          {
            parts: [
              { text: '配', reading: 'くば' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to distribute, to hand out', vi: 'phân phát, chia' }
          },
          {
            parts: [
              { text: '心', reading: 'しん' },
              { text: '配', reading: 'ぱい' }
            ],
            meaning: { en: 'worry, anxiety', vi: 'lo lắng' }
          },
          {
            parts: [
              { text: '配', reading: 'はい' },
              { text: '達', reading: 'たつ' }
            ],
            meaning: { en: 'delivery', vi: 'giao hàng' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Ocean, sun & shape',
      vi: 'Biển, mặt trời & hình dạng'
    },
    kanji: [
      {
        char: '羊',
        meaning: { en: 'sheep', vi: 'dương - con cừu' },
        onyomi: ['ヨウ'],
        kunyomi: ['ひつじ'],
        components: [],
        mnemonic: {
          en: 'A picture of a sheep seen from the front, its two curved horns on top: a sheep.',
          vi: 'Hình con cừu nhìn từ trước, hai cái sừng cong ở trên: con cừu.'
        },
        examples: [
          {
            parts: [{ text: '羊', reading: 'ひつじ' }],
            meaning: { en: 'sheep', vi: 'con cừu' }
          },
          {
            parts: [
              { text: '羊', reading: 'よう' },
              { text: '毛', reading: 'もう' }
            ],
            meaning: { en: 'wool', vi: 'lông cừu' }
          },
          {
            parts: [
              { text: '子', reading: 'こ' },
              { text: '羊', reading: 'ひつじ' }
            ],
            meaning: { en: 'lamb', vi: 'cừu con' }
          }
        ]
      },
      {
        char: '洋',
        meaning: { en: 'ocean; Western', vi: 'dương - đại dương; phương Tây' },
        onyomi: ['ヨウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A vast body of water 氵 as broad as a spreading flock of sheep 羊: the ocean, and the West beyond it.',
          vi: 'Vùng nước 氵 rộng mênh mông như đàn cừu 羊 trải ra: đại dương, và phương Tây bên kia.'
        },
        examples: [
          {
            parts: [
              { text: '洋', reading: 'よう' },
              { text: '服', reading: 'ふく' }
            ],
            meaning: { en: 'Western clothes', vi: 'quần áo kiểu Tây' }
          },
          {
            parts: [
              { text: '太', reading: 'たい' },
              { text: '平', reading: 'へい' },
              { text: '洋', reading: 'よう' }
            ],
            meaning: { en: 'the Pacific Ocean', vi: 'Thái Bình Dương' }
          },
          {
            parts: [
              { text: '西', reading: 'せい' },
              { text: '洋', reading: 'よう' }
            ],
            meaning: { en: 'the West, the Occident', vi: 'phương Tây' }
          }
        ]
      },
      {
        char: '陽',
        meaning: { en: 'sun; yang, brightness', vi: 'dương - mặt trời; dương, sáng' },
        onyomi: ['ヨウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'The sunny side of the hill 阝 where sunlight 日 pours down: the sun, the yang, brightness.',
          vi: 'Sườn đồi 阝 đón nắng, nơi ánh mặt trời 日 rọi xuống: mặt trời, dương, sáng.'
        },
        examples: [
          {
            parts: [
              { text: '太', reading: 'たい' },
              { text: '陽', reading: 'よう' }
            ],
            meaning: { en: 'the sun', vi: 'mặt trời' }
          },
          {
            parts: [
              { text: '陽', reading: 'よう' },
              { text: '気', reading: 'き' }
            ],
            meaning: { en: 'cheerful, lively', vi: 'vui vẻ, hoạt bát' }
          },
          {
            parts: [
              { text: '陽', reading: 'よう' },
              { text: '光', reading: 'こう' }
            ],
            meaning: { en: 'sunlight', vi: 'ánh nắng' }
          }
        ]
      },
      {
        char: '様',
        meaning: {
          en: 'manner, appearance; Mr./Ms. (polite)',
          vi: 'dạng - dáng vẻ, kiểu; ngài, vị (kính)'
        },
        onyomi: ['ヨウ'],
        kunyomi: ['さま'],
        components: ['木', '羊'],
        mnemonic: {
          en: 'The graceful form of a tree 木 and a sheep 羊, a pleasing appearance: a manner, a way, and the polite title "-sama".',
          vi: 'Dáng vẻ đẹp của cái cây 木 và con cừu 羊, hình dáng dễ nhìn: dáng vẻ, kiểu cách, và hậu tố kính "-sama".'
        },
        examples: [
          {
            parts: [
              { text: '様', reading: 'よう' },
              { text: '子', reading: 'す' }
            ],
            meaning: { en: 'state, appearance', vi: 'tình hình, dáng vẻ' }
          },
          {
            parts: [
              { text: '神', reading: 'かみ' },
              { text: '様', reading: 'さま' }
            ],
            meaning: { en: 'god (honorific)', vi: 'thần linh' }
          },
          {
            parts: [
              { text: '王', reading: 'おう' },
              { text: '様', reading: 'さま' }
            ],
            meaning: { en: 'king', vi: 'đức vua' }
          }
        ]
      },
      {
        char: '流',
        meaning: { en: 'to flow; a current', vi: 'lưu - chảy, trôi; dòng' },
        onyomi: ['リュウ'],
        kunyomi: ['なが.れる', 'なが.す'],
        components: [],
        mnemonic: {
          en: 'Water 氵 running and streaming ever downward: to flow, to drift, a current.',
          vi: 'Nước 氵 chảy tuôn không ngừng xuống thấp: chảy, trôi, dòng.'
        },
        examples: [
          {
            parts: [
              { text: '流', reading: 'なが' },
              { text: 'れ', reading: 'れ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to flow', vi: 'chảy, trôi' }
          },
          {
            parts: [
              { text: '流', reading: 'りゅう' },
              { text: '行', reading: 'こう' }
            ],
            meaning: { en: 'fashion, trend', vi: 'xu hướng, thịnh hành' }
          },
          {
            parts: [
              { text: '電', reading: 'でん' },
              { text: '流', reading: 'りゅう' }
            ],
            meaning: { en: 'electric current', vi: 'dòng điện' }
          }
        ]
      },
      {
        char: '平',
        meaning: { en: 'flat, level; peaceful', vi: 'bình - bằng phẳng; bình yên' },
        onyomi: ['ヘイ', 'ビョウ'],
        kunyomi: ['たい.ら', 'ひら'],
        components: [],
        mnemonic: {
          en: 'A water surface settling perfectly level and calm: flat, even, peaceful.',
          vi: 'Mặt nước lắng xuống thật phẳng và yên: bằng phẳng, cân bằng, bình yên.'
        },
        examples: [
          {
            parts: [
              { text: '平', reading: 'たい' },
              { text: 'ら', reading: 'ら' }
            ],
            meaning: { en: 'flat, level', vi: 'bằng phẳng' }
          },
          {
            parts: [
              { text: '平', reading: 'へい' },
              { text: '和', reading: 'わ' }
            ],
            meaning: { en: 'peace', vi: 'hòa bình' }
          },
          {
            parts: [
              { text: '平', reading: 'へい' },
              { text: '日', reading: 'じつ' }
            ],
            meaning: { en: 'weekday', vi: 'ngày thường' }
          }
        ]
      },
      {
        char: '表',
        meaning: {
          en: 'surface; to express; chart',
          vi: 'biểu - bề mặt; biểu thị; bảng biểu'
        },
        onyomi: ['ヒョウ'],
        kunyomi: ['おもて', 'あらわ.す'],
        components: [],
        mnemonic: {
          en: 'The outer coat worn on the surface, what shows on the outside: the surface, to express, a chart.',
          vi: 'Lớp áo khoác ngoài, cái lộ ra bên ngoài: bề mặt, biểu thị, bảng biểu.'
        },
        examples: [
          {
            parts: [{ text: '表', reading: 'おもて' }],
            meaning: { en: 'surface, front side', vi: 'mặt ngoài, mặt trước' }
          },
          {
            parts: [
              { text: '発', reading: 'はっ' },
              { text: '表', reading: 'ぴょう' }
            ],
            meaning: { en: 'announcement, presentation', vi: 'công bố, phát biểu' }
          },
          {
            parts: [
              { text: '表', reading: 'ひょう' },
              { text: '現', reading: 'げん' }
            ],
            meaning: { en: 'expression', vi: 'biểu hiện, diễn đạt' }
          }
        ]
      },
      {
        char: '反',
        meaning: { en: 'anti, opposite; to oppose', vi: 'phản - ngược lại; phản đối; lật' },
        onyomi: ['ハン', 'タン'],
        kunyomi: ['そ.る', 'そ.らす'],
        components: ['厂', '又'],
        mnemonic: {
          en: 'A hand 又 pushing back against a cliff 厂, turning the opposite way: anti, opposite, to oppose.',
          vi: 'Bàn tay 又 đẩy ngược vào vách đá 厂, quay theo hướng đối lập: ngược lại, phản đối, lật.'
        },
        examples: [
          {
            parts: [
              { text: '反', reading: 'はん' },
              { text: '対', reading: 'たい' }
            ],
            meaning: { en: 'opposition, opposite', vi: 'phản đối, đối lập' }
          },
          {
            parts: [
              { text: '反', reading: 'はん' },
              { text: '発', reading: 'ぱつ' }
            ],
            meaning: { en: 'repulsion, backlash', vi: 'phản kháng, phản ứng lại' }
          },
          {
            parts: [
              { text: '反', reading: 'はん' },
              { text: '応', reading: 'のう' }
            ],
            meaning: { en: 'reaction, response', vi: 'phản ứng' }
          }
        ]
      },
      {
        char: '発',
        meaning: {
          en: 'to depart; to emit; to happen',
          vi: 'phát - phát ra; khởi hành; xảy ra'
        },
        onyomi: ['ハツ', 'ホツ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Two feet setting out as something shoots forth from a bow: to depart, to emit, to launch.',
          vi: 'Đôi chân bước ra khi vật gì bắn đi từ cây cung: phát ra, khởi hành, phóng đi.'
        },
        examples: [
          {
            parts: [
              { text: '発', reading: 'はっ' },
              { text: '表', reading: 'ぴょう' }
            ],
            meaning: { en: 'announcement, presentation', vi: 'công bố, phát biểu' }
          },
          {
            parts: [
              { text: '出', reading: 'しゅっ' },
              { text: '発', reading: 'ぱつ' }
            ],
            meaning: { en: 'departure', vi: 'sự khởi hành' }
          },
          {
            parts: [
              { text: '発', reading: 'はっ' },
              { text: '見', reading: 'けん' }
            ],
            meaning: { en: 'discovery', vi: 'phát hiện' }
          }
        ]
      },
      {
        char: '球',
        meaning: { en: 'ball, sphere', vi: 'cầu - quả bóng, khối cầu' },
        onyomi: ['キュウ'],
        kunyomi: ['たま'],
        components: [],
        mnemonic: {
          en: 'A perfectly round gem 玉 polished into a sphere: a ball, a globe.',
          vi: 'Một viên ngọc 玉 mài tròn thành khối cầu: quả bóng, khối cầu.'
        },
        examples: [
          {
            parts: [
              { text: '野', reading: 'や' },
              { text: '球', reading: 'きゅう' }
            ],
            meaning: { en: 'baseball', vi: 'bóng chày' }
          },
          {
            parts: [
              { text: '地', reading: 'ち' },
              { text: '球', reading: 'きゅう' }
            ],
            meaning: { en: 'the Earth, the globe', vi: 'Trái Đất' }
          },
          {
            parts: [
              { text: '電', reading: 'でん' },
              { text: '球', reading: 'きゅう' }
            ],
            meaning: { en: 'light bulb', vi: 'bóng đèn' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Writing, arts & practice',
      vi: 'Chữ viết, nghệ thuật & luyện tập'
    },
    kanji: [
      {
        char: '筆',
        meaning: { en: 'writing brush', vi: 'bút - cây bút, bút lông' },
        onyomi: ['ヒツ'],
        kunyomi: ['ふで'],
        components: [],
        mnemonic: {
          en: 'A hand holding a bamboo 竹 stalk tipped with hair to write: a writing brush.',
          vi: 'Bàn tay cầm thân tre 竹 gắn túm lông để viết: cây bút lông.'
        },
        examples: [
          {
            parts: [{ text: '筆', reading: 'ふで' }],
            meaning: { en: 'writing brush', vi: 'bút lông' }
          },
          {
            parts: [
              { text: '筆', reading: 'ひっ' },
              { text: '記', reading: 'き' }
            ],
            meaning: { en: 'note-taking, writing', vi: 'ghi chép' }
          },
          {
            parts: [
              { text: '鉛', reading: 'えん' },
              { text: '筆', reading: 'ぴつ' }
            ],
            meaning: { en: 'pencil', vi: 'bút chì' }
          }
        ]
      },
      {
        char: '漢',
        meaning: {
          en: 'Han China; kanji; fellow, man',
          vi: 'hán - nhà Hán, chữ Hán; đàn ông'
        },
        onyomi: ['カン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A great river 氵 civilization, the Han of China: Chinese, the Han, and by extension a fellow.',
          vi: 'Nền văn minh bên dòng sông lớn 氵, nhà Hán của Trung Hoa: thuộc Hán, chữ Hán, và nghĩa rộng là gã đàn ông.'
        },
        examples: [
          {
            parts: [
              { text: '漢', reading: 'かん' },
              { text: '字', reading: 'じ' }
            ],
            meaning: { en: 'kanji, Chinese character', vi: 'chữ Hán, chữ kanji' }
          },
          {
            parts: [
              { text: '漢', reading: 'かん' },
              { text: '文', reading: 'ぶん' }
            ],
            meaning: { en: 'classical Chinese writing', vi: 'Hán văn' }
          },
          {
            parts: [
              { text: '漢', reading: 'かん' },
              { text: '方', reading: 'ぽう' }
            ],
            meaning: { en: 'Chinese herbal medicine', vi: 'thuốc Bắc, Đông y' }
          }
        ]
      },
      {
        char: '写',
        meaning: { en: 'to copy; to photograph', vi: 'tả - sao chép; chụp (ảnh)' },
        onyomi: ['シャ'],
        kunyomi: ['うつ.す', 'うつ.る'],
        components: [],
        mnemonic: {
          en: 'Laying a cover over a page and tracing what shows through: to copy, to reproduce, to photograph.',
          vi: 'Phủ tấm che lên trang giấy và đồ theo nét hiện qua: sao chép, sao lại, chụp ảnh.'
        },
        examples: [
          {
            parts: [
              { text: '写', reading: 'うつ' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to copy, to transcribe', vi: 'sao chép, chép lại' }
          },
          {
            parts: [
              { text: '写', reading: 'しゃ' },
              { text: '真', reading: 'しん' }
            ],
            meaning: { en: 'photograph', vi: 'bức ảnh' }
          },
          {
            parts: [
              { text: '書', reading: 'か' },
              { text: 'き', reading: 'き' },
              { text: '写', reading: 'うつ' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to copy out (by hand)', vi: 'chép lại (bằng tay)' }
          }
        ]
      },
      {
        char: '童',
        meaning: { en: 'child, youngster', vi: 'đồng - trẻ em, nhi đồng' },
        onyomi: ['ドウ'],
        kunyomi: ['わらべ'],
        components: [],
        mnemonic: {
          en: 'A youngster standing 立 in the village 里, still just a child: a child, a youngster.',
          vi: 'Một đứa nhỏ đứng 立 trong làng 里, hãy còn là trẻ con: trẻ em, nhi đồng.'
        },
        examples: [
          {
            parts: [
              { text: '童', reading: 'どう' },
              { text: '話', reading: 'わ' }
            ],
            meaning: { en: 'fairy tale', vi: 'truyện cổ tích' }
          },
          {
            parts: [
              { text: '童', reading: 'どう' },
              { text: '心', reading: 'しん' }
            ],
            meaning: { en: 'childlike heart', vi: 'tâm hồn trẻ thơ' }
          },
          {
            parts: [
              { text: '学', reading: 'がく' },
              { text: '童', reading: 'どう' }
            ],
            meaning: { en: 'schoolchild', vi: 'học sinh tiểu học' }
          }
        ]
      },
      {
        char: '笛',
        meaning: { en: 'flute, whistle', vi: 'địch - cái sáo; còi' },
        onyomi: ['テキ'],
        kunyomi: ['ふえ'],
        components: [],
        mnemonic: {
          en: 'A bamboo 竹 tube you blow through to make sound come out 由: a flute, a whistle.',
          vi: 'Một ống tre 竹 thổi vào cho âm thanh phát ra 由: cây sáo, cái còi.'
        },
        examples: [
          {
            parts: [{ text: '笛', reading: 'ふえ' }],
            meaning: { en: 'flute, whistle', vi: 'cây sáo, còi' }
          },
          {
            parts: [
              { text: '口', reading: 'くち' },
              { text: '笛', reading: 'ぶえ' }
            ],
            meaning: { en: 'whistling (with the mouth)', vi: 'huýt sáo' }
          },
          {
            parts: [
              { text: '汽', reading: 'き' },
              { text: '笛', reading: 'てき' }
            ],
            meaning: { en: 'steam whistle', vi: 'còi hơi' }
          }
        ]
      },
      {
        char: '美',
        meaning: { en: 'beautiful', vi: 'mỹ - đẹp, xinh đẹp' },
        onyomi: ['ビ'],
        kunyomi: ['うつく.しい'],
        components: ['羊', '大'],
        mnemonic: {
          en: 'A big 大 fat sheep 羊, prized and fine to look at: beautiful.',
          vi: 'Một con cừu 羊 to 大 béo tốt, quý và đẹp mắt: đẹp, xinh đẹp.'
        },
        examples: [
          {
            parts: [
              { text: '美', reading: 'うつく' },
              { text: 'し', reading: 'し' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'beautiful', vi: 'đẹp, xinh đẹp' }
          },
          {
            parts: [
              { text: '美', reading: 'び' },
              { text: '人', reading: 'じん' }
            ],
            meaning: { en: 'a beauty, beautiful woman', vi: 'người đẹp, mỹ nhân' }
          },
          {
            parts: [
              { text: '美', reading: 'び' },
              { text: '術', reading: 'じゅつ' }
            ],
            meaning: { en: 'fine art', vi: 'mỹ thuật' }
          }
        ]
      },
      {
        char: '練',
        meaning: { en: 'to train, to practice; to knead', vi: 'luyện - luyện tập, rèn' },
        onyomi: ['レン'],
        kunyomi: ['ね.る'],
        components: [],
        mnemonic: {
          en: 'Working raw threads 糸 over and over to refine them: to train, to practice, to knead smooth.',
          vi: 'Nhồi luyện sợi thô 糸 hết lần này lần khác cho tinh: luyện tập, rèn.'
        },
        examples: [
          {
            parts: [
              { text: '練', reading: 'れん' },
              { text: '習', reading: 'しゅう' }
            ],
            meaning: { en: 'practice, drill', vi: 'luyện tập' }
          },
          {
            parts: [
              { text: '訓', reading: 'くん' },
              { text: '練', reading: 'れん' }
            ],
            meaning: { en: 'training', vi: 'huấn luyện' }
          },
          {
            parts: [
              { text: '練', reading: 'ね' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to knead, to refine', vi: 'nhào, luyện' }
          }
        ]
      },
      {
        char: '列',
        meaning: { en: 'row, line, rank', vi: 'liệt - hàng, dãy' },
        onyomi: ['レツ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Things cut apart cleanly and set out one after another: a row, a line, a rank.',
          vi: 'Những vật được cắt tách gọn và đặt nối nhau: hàng, dãy.'
        },
        examples: [
          {
            parts: [{ text: '列', reading: 'れつ' }],
            meaning: { en: 'row, line', vi: 'hàng, dãy' }
          },
          {
            parts: [
              { text: '行', reading: 'ぎょう' },
              { text: '列', reading: 'れつ' }
            ],
            meaning: { en: 'queue, procession', vi: 'hàng dài, đoàn diễu' }
          },
          {
            parts: [
              { text: '列', reading: 'れっ' },
              { text: '車', reading: 'しゃ' }
            ],
            meaning: { en: 'train', vi: 'đoàn tàu' }
          }
        ]
      },
      {
        char: '等',
        meaning: { en: 'equal; grade, class; etc.', vi: 'đẳng - ngang bằng; hạng; vân vân' },
        onyomi: ['トウ'],
        kunyomi: ['ひと.しい', 'など'],
        components: [],
        mnemonic: {
          en: 'Bamboo 竹 slips at a temple 寺 all cut to the same length: equal, a grade, and "etcetera".',
          vi: 'Những thẻ tre 竹 ở chùa 寺 cắt bằng nhau: ngang bằng, hạng, và "vân vân".'
        },
        examples: [
          {
            parts: [
              { text: '等', reading: 'ひと' },
              { text: 'し', reading: 'し' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'equal, identical', vi: 'ngang bằng' }
          },
          {
            parts: [
              { text: '平', reading: 'びょう' },
              { text: '等', reading: 'どう' }
            ],
            meaning: { en: 'equality', vi: 'bình đẳng' }
          },
          {
            parts: [
              { text: '一', reading: 'いっ' },
              { text: '等', reading: 'とう' }
            ],
            meaning: { en: 'first class, first prize', vi: 'hạng nhất' }
          }
        ]
      },
      {
        char: '由',
        meaning: { en: 'reason, cause; via, from', vi: 'do - lý do; từ, bởi' },
        onyomi: ['ユ', 'ユウ', 'ユイ'],
        kunyomi: ['よし'],
        components: [],
        mnemonic: {
          en: 'A gourd with something coming out from within, the source: a reason, a cause, "by way of".',
          vi: 'Một quả bầu có thứ gì đó thoát ra từ bên trong, cội nguồn: lý do, nguyên do, "bởi, từ".'
        },
        examples: [
          {
            parts: [
              { text: '理', reading: 'り' },
              { text: '由', reading: 'ゆう' }
            ],
            meaning: { en: 'reason', vi: 'lý do' }
          },
          {
            parts: [
              { text: '自', reading: 'じ' },
              { text: '由', reading: 'ゆう' }
            ],
            meaning: { en: 'freedom', vi: 'tự do' }
          },
          {
            parts: [
              { text: '経', reading: 'けい' },
              { text: '由', reading: 'ゆ' }
            ],
            meaning: { en: 'via, by way of', vi: 'đi qua, trung chuyển' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Business & change',
      vi: 'Buôn bán & thay đổi'
    },
    kanji: [
      {
        char: '商',
        meaning: { en: 'commerce, trade; merchant', vi: 'thương - buôn bán, thương mại' },
        onyomi: ['ショウ'],
        kunyomi: ['あきな.う'],
        components: [],
        mnemonic: {
          en: 'Standing at a stall calling out with the mouth 口 to sell goods: commerce, trade, a merchant.',
          vi: 'Đứng ở quầy, dùng miệng 口 rao bán hàng: buôn bán, thương mại.'
        },
        examples: [
          {
            parts: [
              { text: '商', reading: 'しょう' },
              { text: '人', reading: 'にん' }
            ],
            meaning: { en: 'merchant, trader', vi: 'thương nhân' }
          },
          {
            parts: [
              { text: '商', reading: 'しょう' },
              { text: '店', reading: 'てん' }
            ],
            meaning: { en: 'store, shop', vi: 'cửa hàng' }
          },
          {
            parts: [
              { text: '商', reading: 'しょう' },
              { text: '業', reading: 'ぎょう' }
            ],
            meaning: { en: 'commerce, business', vi: 'thương nghiệp' }
          }
        ]
      },
      {
        char: '委',
        meaning: { en: 'to entrust; committee', vi: 'ủy - giao phó, ủy thác' },
        onyomi: ['イ'],
        kunyomi: [],
        components: ['禾', '女'],
        mnemonic: {
          en: 'A woman 女 bending under grain 禾, entrusted with the harvest: to entrust, to commit.',
          vi: 'Người phụ nữ 女 khom mình dưới bông lúa 禾, được giao lo vụ mùa: giao phó, ủy thác.'
        },
        examples: [
          {
            parts: [
              { text: '委', reading: 'い' },
              { text: '員', reading: 'いん' }
            ],
            meaning: { en: 'committee member', vi: 'ủy viên' }
          },
          {
            parts: [
              { text: '委', reading: 'い' },
              { text: '員', reading: 'いん' },
              { text: '会', reading: 'かい' }
            ],
            meaning: { en: 'committee', vi: 'ủy ban' }
          },
          {
            parts: [
              { text: '委', reading: 'い' },
              { text: '員', reading: 'いん' },
              { text: '長', reading: 'ちょう' }
            ],
            meaning: { en: 'committee chairperson', vi: 'chủ tịch ủy ban' }
          }
        ]
      },
      {
        char: '化',
        meaning: { en: 'to change, to transform', vi: 'hóa - biến hóa, thay đổi' },
        onyomi: ['カ', 'ケ'],
        kunyomi: ['ば.ける'],
        components: [],
        mnemonic: {
          en: 'A person 亻 upright turning into a person 匕 fallen over, one form becoming another: to change, to transform.',
          vi: 'Một người 亻 đứng biến thành người 匕 ngã xuống, hình này hóa thành hình kia: biến hóa, thay đổi.'
        },
        examples: [
          {
            parts: [
              { text: '化', reading: 'ば' },
              { text: 'け', reading: 'け' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to transform, to take on a form', vi: 'biến hình, hóa thành' }
          },
          {
            parts: [
              { text: '文', reading: 'ぶん' },
              { text: '化', reading: 'か' }
            ],
            meaning: { en: 'culture', vi: 'văn hóa' }
          },
          {
            parts: [
              { text: '化', reading: 'か' },
              { text: '学', reading: 'がく' }
            ],
            meaning: { en: 'chemistry', vi: 'hóa học' }
          }
        ]
      },
      {
        char: '代',
        meaning: {
          en: 'to substitute; generation; fee',
          vi: 'đại - thay thế; thời, đời; tiền phí'
        },
        onyomi: ['ダイ', 'タイ'],
        kunyomi: ['か.わる', 'よ', 'しろ'],
        components: [],
        mnemonic: {
          en: 'One person 亻 stepping in to take the place of another: to substitute, a generation, and a charge or fee.',
          vi: 'Một người 亻 bước vào thay chỗ người khác: thay thế, thời đại, và khoản tiền phí.'
        },
        examples: [
          {
            parts: [
              { text: '代', reading: 'か' },
              { text: 'わ', reading: 'わ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to substitute, to replace', vi: 'thay thế' }
          },
          {
            parts: [
              { text: '時', reading: 'じ' },
              { text: '代', reading: 'だい' }
            ],
            meaning: { en: 'era, period, age', vi: 'thời đại' }
          },
          {
            parts: [
              { text: '電', reading: 'でん' },
              { text: '気', reading: 'き' },
              { text: '代', reading: 'だい' }
            ],
            meaning: { en: 'electricity bill', vi: 'tiền điện' }
          }
        ]
      },
      {
        char: '対',
        meaning: { en: 'opposite; versus; to face', vi: 'đối - đối diện; đối lập; cặp' },
        onyomi: ['タイ', 'ツイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A hand 寸 held out to face another head-on: opposite, versus, a pair, to face.',
          vi: 'Bàn tay 寸 đưa ra đối mặt trực diện: đối diện, đối lập, cặp.'
        },
        examples: [
          {
            parts: [
              { text: '反', reading: 'はん' },
              { text: '対', reading: 'たい' }
            ],
            meaning: { en: 'opposition, opposite', vi: 'phản đối, đối lập' }
          },
          {
            parts: [
              { text: '対', reading: 'たい' },
              { text: 'す', reading: 'す' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to face, to deal with', vi: 'đối diện, đối với' }
          },
          {
            parts: [
              { text: '一', reading: 'いっ' },
              { text: '対', reading: 'つい' }
            ],
            meaning: { en: 'a pair', vi: 'một cặp, một đôi' }
          }
        ]
      },
      {
        char: '負',
        meaning: { en: 'to lose; to bear; to owe', vi: 'phụ - thua; gánh vác; âm (số)' },
        onyomi: ['フ'],
        kunyomi: ['ま.ける', 'お.う'],
        components: [],
        mnemonic: {
          en: 'A person bending under a load of money 貝 they owe: to bear a burden, to owe, and to lose a contest.',
          vi: 'Một người khom lưng dưới gánh nợ tiền 貝: gánh vác, mắc nợ, và thua cuộc.'
        },
        examples: [
          {
            parts: [
              { text: '負', reading: 'ま' },
              { text: 'け', reading: 'け' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to lose, to be defeated', vi: 'thua' }
          },
          {
            parts: [
              { text: '負', reading: 'お' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to bear, to carry (on the back)', vi: 'gánh, cõng' }
          },
          {
            parts: [
              { text: '勝', reading: 'しょう' },
              { text: '負', reading: 'ぶ' }
            ],
            meaning: { en: 'match, contest', vi: 'trận đấu, thắng thua' }
          }
        ]
      },
      {
        char: '部',
        meaning: { en: 'part, section, department', vi: 'bộ - bộ phận; ban; câu lạc bộ' },
        onyomi: ['ブ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'One district 阝 marked off from a city, one part of the whole: a part, a section, a department.',
          vi: 'Một khu 阝 tách ra từ thành phố, một phần của tổng thể: bộ phận, ban, phòng.'
        },
        examples: [
          {
            parts: [
              { text: '部', reading: 'ぶ' },
              { text: '分', reading: 'ぶん' }
            ],
            meaning: { en: 'part, portion', vi: 'bộ phận, phần' }
          },
          {
            parts: [
              { text: '全', reading: 'ぜん' },
              { text: '部', reading: 'ぶ' }
            ],
            meaning: { en: 'all, the whole', vi: 'toàn bộ' }
          },
          {
            parts: [
              { text: '部', reading: 'へ' },
              { text: '屋', reading: 'や' }
            ],
            meaning: { en: 'room', vi: 'căn phòng' }
          }
        ]
      },
      {
        char: '勝',
        meaning: { en: 'to win, to excel', vi: 'thắng - thắng, chiến thắng; hơn' },
        onyomi: ['ショウ'],
        kunyomi: ['か.つ', 'まさ.る'],
        components: [],
        mnemonic: {
          en: 'Pouring out all your strength 力 to come out on top: to win, to excel.',
          vi: 'Dồn hết sức 力 để vươn lên đứng đầu: thắng, chiến thắng, hơn hẳn.'
        },
        examples: [
          {
            parts: [
              { text: '勝', reading: 'か' },
              { text: 'つ', reading: 'つ' }
            ],
            meaning: { en: 'to win', vi: 'thắng' }
          },
          {
            parts: [
              { text: '勝', reading: 'しょう' },
              { text: '負', reading: 'ぶ' }
            ],
            meaning: { en: 'match, victory or defeat', vi: 'trận đấu, thắng thua' }
          },
          {
            parts: [
              { text: '決', reading: 'けっ' },
              { text: '勝', reading: 'しょう' }
            ],
            meaning: { en: 'final (match)', vi: 'trận chung kết' }
          }
        ]
      },
      {
        char: '乗',
        meaning: { en: 'to ride, to board; to multiply', vi: 'thừa - đi (xe), lên (xe); nhân' },
        onyomi: ['ジョウ'],
        kunyomi: ['の.る', 'の.せる'],
        components: [],
        mnemonic: {
          en: 'A person climbing up onto a tree or cart to ride: to ride, to board, and to multiply.',
          vi: 'Một người trèo lên cây hay lên xe để đi: đi xe, lên xe, và phép nhân.'
        },
        examples: [
          {
            parts: [
              { text: '乗', reading: 'の' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to ride, to get on', vi: 'đi (xe), lên (xe)' }
          },
          {
            parts: [
              { text: '乗', reading: 'じょう' },
              { text: '車', reading: 'しゃ' }
            ],
            meaning: { en: 'boarding (a vehicle)', vi: 'lên xe' }
          },
          {
            parts: [
              { text: '乗', reading: 'じょう' },
              { text: '客', reading: 'きゃく' }
            ],
            meaning: { en: 'passenger', vi: 'hành khách' }
          }
        ]
      },
      {
        char: '有',
        meaning: { en: 'to exist, to have', vi: 'hữu - có, tồn tại' },
        onyomi: ['ユウ', 'ウ'],
        kunyomi: ['あ.る'],
        components: [],
        mnemonic: {
          en: 'A hand holding a piece of meat 月, having something in your grasp: to have, to exist.',
          vi: 'Một bàn tay giữ miếng thịt 月, có thứ gì trong tay: có, tồn tại.'
        },
        examples: [
          {
            parts: [
              { text: '有', reading: 'ゆう' },
              { text: '名', reading: 'めい' }
            ],
            meaning: { en: 'famous', vi: 'nổi tiếng' }
          },
          {
            parts: [
              { text: '有', reading: 'ゆう' },
              { text: '料', reading: 'りょう' }
            ],
            meaning: { en: 'paid, fee-charging', vi: 'có thu phí' }
          },
          {
            parts: [
              { text: '所', reading: 'しょ' },
              { text: '有', reading: 'ゆう' }
            ],
            meaning: { en: 'ownership, possession', vi: 'sở hữu' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Daily life & concepts',
      vi: 'Đời sống & khái niệm'
    },
    kanji: [
      {
        char: '去',
        meaning: { en: 'to leave, to go away; past', vi: 'khứ - rời đi; đã qua' },
        onyomi: ['キョ', 'コ'],
        kunyomi: ['さ.る'],
        components: [],
        mnemonic: {
          en: 'Walking away from a spot of earth 土, leaving it behind: to leave, to go away, the past.',
          vi: 'Bước khỏi một mảnh đất 土, bỏ lại phía sau: rời đi, ra đi, đã qua.'
        },
        examples: [
          {
            parts: [
              { text: '去', reading: 'さ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to leave, to go away', vi: 'rời đi' }
          },
          {
            parts: [
              { text: '去', reading: 'きょ' },
              { text: '年', reading: 'ねん' }
            ],
            meaning: { en: 'last year', vi: 'năm ngoái' }
          },
          {
            parts: [
              { text: '死', reading: 'し' },
              { text: '去', reading: 'きょ' }
            ],
            meaning: { en: 'death, passing away', vi: 'sự qua đời' }
          }
        ]
      },
      {
        char: '曲',
        meaning: { en: 'to bend; crooked; melody', vi: 'khúc - cong, uốn; bản nhạc' },
        onyomi: ['キョク'],
        kunyomi: ['ま.がる', 'ま.げる'],
        components: [],
        mnemonic: {
          en: 'The shape of something bent into curves; also a winding tune: to bend, crooked, a melody.',
          vi: 'Hình vật bị uốn cong; cũng là giai điệu uốn lượn: cong, uốn, bản nhạc.'
        },
        examples: [
          {
            parts: [
              { text: '曲', reading: 'ま' },
              { text: 'が', reading: 'が' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to bend, to turn', vi: 'cong, rẽ' }
          },
          {
            parts: [
              { text: '曲', reading: 'きょく' },
              { text: '線', reading: 'せん' }
            ],
            meaning: { en: 'curve, curved line', vi: 'đường cong' }
          },
          {
            parts: [
              { text: '名', reading: 'めい' },
              { text: '曲', reading: 'きょく' }
            ],
            meaning: { en: 'famous piece of music', vi: 'danh khúc, bản nhạc nổi tiếng' }
          }
        ]
      },
      {
        char: '向',
        meaning: { en: 'to face, toward', vi: 'hướng - hướng về, quay về' },
        onyomi: ['コウ'],
        kunyomi: ['む.く', 'む.かう', 'む.こう'],
        components: [],
        mnemonic: {
          en: 'A window with a mouth 口 below, a house turned to face one direction: to face, toward.',
          vi: 'Một ô cửa sổ với cái miệng 口 bên dưới, ngôi nhà quay về một hướng: hướng về, quay về.'
        },
        examples: [
          {
            parts: [
              { text: '向', reading: 'む' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to face, to turn toward', vi: 'quay về, hướng về' }
          },
          {
            parts: [
              { text: '方', reading: 'ほう' },
              { text: '向', reading: 'こう' }
            ],
            meaning: { en: 'direction', vi: 'phương hướng' }
          },
          {
            parts: [
              { text: '向', reading: 'む' },
              { text: 'こ', reading: 'こ' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'over there, the other side', vi: 'phía bên kia' }
          }
        ]
      },
      {
        char: '次',
        meaning: { en: 'next, following; order', vi: 'thứ - tiếp theo; thứ tự' },
        onyomi: ['ジ', 'シ'],
        kunyomi: ['つ.ぐ', 'つぎ'],
        components: [],
        mnemonic: {
          en: 'A yawn 欠 breathed out one after another in sequence: next, the following, order.',
          vi: 'Một cái ngáp 欠 thở ra hết cái này đến cái kia theo trình tự: tiếp theo, thứ tự.'
        },
        examples: [
          {
            parts: [{ text: '次', reading: 'つぎ' }],
            meaning: { en: 'next', vi: 'tiếp theo' }
          },
          {
            parts: [
              { text: '次', reading: 'じ' },
              { text: '回', reading: 'かい' }
            ],
            meaning: { en: 'next time', vi: 'lần sau' }
          },
          {
            parts: [
              { text: '目', reading: 'もく' },
              { text: '次', reading: 'じ' }
            ],
            meaning: { en: 'table of contents', vi: 'mục lục' }
          }
        ]
      },
      {
        char: '重',
        meaning: {
          en: 'heavy; to pile up; important',
          vi: 'trọng - nặng; chồng lên; quan trọng'
        },
        onyomi: ['ジュウ', 'チョウ'],
        kunyomi: ['おも.い', 'かさ.ねる', 'え'],
        components: [],
        mnemonic: {
          en: 'A heavy bundle weighing a person down, layers stacked up: heavy, to pile up, and important.',
          vi: 'Một bó nặng đè trĩu người, các lớp chồng lên nhau: nặng, chồng lên, và quan trọng.'
        },
        examples: [
          {
            parts: [
              { text: '重', reading: 'おも' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'heavy', vi: 'nặng' }
          },
          {
            parts: [
              { text: '体', reading: 'たい' },
              { text: '重', reading: 'じゅう' }
            ],
            meaning: { en: 'body weight', vi: 'cân nặng' }
          },
          {
            parts: [
              { text: '重', reading: 'かさ' },
              { text: 'ね', reading: 'ね' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to pile up, to stack', vi: 'chồng lên, xếp lớp' }
          }
        ]
      },
      {
        char: '宿',
        meaning: { en: 'lodging, inn; to stay over', vi: 'túc - chỗ trọ, quán trọ; ở lại' },
        onyomi: ['シュク'],
        kunyomi: ['やど', 'やど.る'],
        components: [],
        mnemonic: {
          en: 'People 亻 resting for the night under a roof 宀: lodging, an inn, to stay over.',
          vi: 'Người 亻 nghỉ qua đêm dưới mái nhà 宀: chỗ trọ, quán trọ, ở lại.'
        },
        examples: [
          {
            parts: [{ text: '宿', reading: 'やど' }],
            meaning: { en: 'lodging, inn', vi: 'chỗ trọ' }
          },
          {
            parts: [
              { text: '宿', reading: 'しゅく' },
              { text: '題', reading: 'だい' }
            ],
            meaning: { en: 'homework', vi: 'bài tập về nhà' }
          },
          {
            parts: [
              { text: '下', reading: 'げ' },
              { text: '宿', reading: 'しゅく' }
            ],
            meaning: { en: 'boarding house, lodgings', vi: 'nhà trọ' }
          }
        ]
      },
      {
        char: '所',
        meaning: { en: 'place, spot', vi: 'sở - nơi chốn, chỗ' },
        onyomi: ['ショ'],
        kunyomi: ['ところ'],
        components: ['戸', '斤'],
        mnemonic: {
          en: 'The spot by the door 戸 where the axe 斤 is kept, a fixed place: a place, a spot.',
          vi: 'Chỗ cạnh cửa 戸 nơi cất cái rìu 斤, một vị trí cố định: nơi chốn, chỗ.'
        },
        examples: [
          {
            parts: [{ text: '所', reading: 'ところ' }],
            meaning: { en: 'place, spot', vi: 'nơi, chỗ' }
          },
          {
            parts: [
              { text: '住', reading: 'じゅう' },
              { text: '所', reading: 'しょ' }
            ],
            meaning: { en: 'address', vi: 'địa chỉ' }
          },
          {
            parts: [
              { text: '場', reading: 'ば' },
              { text: '所', reading: 'しょ' }
            ],
            meaning: { en: 'location, place', vi: 'địa điểm' }
          }
        ]
      },
      {
        char: '命',
        meaning: { en: 'life; command', vi: 'mệnh - sinh mệnh; mệnh lệnh' },
        onyomi: ['メイ', 'ミョウ'],
        kunyomi: ['いのち'],
        components: [],
        mnemonic: {
          en: 'An order given aloud with the mouth 口 that one must obey as if life depended on it: life, a command.',
          vi: 'Một mệnh lệnh hô bằng miệng 口 mà người ta phải theo như thể tính mạng phụ thuộc vào đó: sinh mệnh, mệnh lệnh.'
        },
        examples: [
          {
            parts: [{ text: '命', reading: 'いのち' }],
            meaning: { en: 'life', vi: 'sinh mệnh, mạng sống' }
          },
          {
            parts: [
              { text: '生', reading: 'せい' },
              { text: '命', reading: 'めい' }
            ],
            meaning: { en: 'life (biological)', vi: 'sinh mệnh, sự sống' }
          },
          {
            parts: [
              { text: '命', reading: 'めい' },
              { text: '令', reading: 'れい' }
            ],
            meaning: { en: 'order, command', vi: 'mệnh lệnh' }
          }
        ]
      },
      {
        char: '面',
        meaning: { en: 'face; surface; mask', vi: 'diện - mặt; bề mặt; mặt nạ' },
        onyomi: ['メン'],
        kunyomi: ['おも', 'つら'],
        components: [],
        mnemonic: {
          en: 'The outline of a face with an eye inside, the front of the head: a face, a surface, a mask.',
          vi: 'Đường viền khuôn mặt với con mắt bên trong, mặt trước của đầu: mặt, bề mặt, mặt nạ.'
        },
        examples: [
          {
            parts: [{ text: '面', reading: 'めん' }],
            meaning: { en: 'face, surface, aspect', vi: 'mặt, bề mặt, phương diện' }
          },
          {
            parts: [
              { text: '面', reading: 'おも' },
              { text: '白', reading: 'しろ' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'interesting, funny', vi: 'thú vị, buồn cười' }
          },
          {
            parts: [
              { text: '場', reading: 'ば' },
              { text: '面', reading: 'めん' }
            ],
            meaning: { en: 'scene, situation', vi: 'cảnh, tình huống' }
          }
        ]
      },
      {
        char: '和',
        meaning: {
          en: 'harmony, peace; Japanese',
          vi: 'hòa - hòa hợp, êm ấm; Nhật Bản'
        },
        onyomi: ['ワ', 'オ'],
        kunyomi: ['やわ.らぐ', 'なご.む'],
        components: ['禾', '口'],
        mnemonic: {
          en: 'Grain 禾 shared into every mouth 口 so all are fed and at peace: harmony, and things Japanese.',
          vi: 'Lúa gạo 禾 chia vào mọi cái miệng 口 để ai cũng no và yên: hòa hợp, êm ấm, và thuộc về Nhật.'
        },
        examples: [
          {
            parts: [
              { text: '平', reading: 'へい' },
              { text: '和', reading: 'わ' }
            ],
            meaning: { en: 'peace', vi: 'hòa bình' }
          },
          {
            parts: [
              { text: '和', reading: 'わ' },
              { text: '食', reading: 'しょく' }
            ],
            meaning: { en: 'Japanese cuisine', vi: 'món ăn Nhật' }
          },
          {
            parts: [
              { text: '昭', reading: 'しょう' },
              { text: '和', reading: 'わ' }
            ],
            meaning: { en: 'the Showa era', vi: 'thời Showa' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Regions, metal & more',
      vi: 'Vùng miền, kim loại & khác'
    },
    kanji: [
      {
        char: '軽',
        meaning: { en: 'light (not heavy)', vi: 'khinh - nhẹ; nhẹ nhàng' },
        onyomi: ['ケイ'],
        kunyomi: ['かる.い'],
        components: [],
        mnemonic: {
          en: 'A cart 車 built small and light so it rolls easily: light, not heavy.',
          vi: 'Một chiếc xe 車 làm nhỏ và nhẹ để lăn dễ: nhẹ, nhẹ nhàng.'
        },
        examples: [
          {
            parts: [
              { text: '軽', reading: 'かる' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'light, not heavy', vi: 'nhẹ' }
          },
          {
            parts: [
              { text: '手', reading: 'て' },
              { text: '軽', reading: 'がる' }
            ],
            meaning: { en: 'easy, handy', vi: 'dễ dàng, tiện lợi' }
          },
          {
            parts: [
              { text: '軽', reading: 'けい' },
              { text: '食', reading: 'しょく' }
            ],
            meaning: { en: 'light meal, snack', vi: 'bữa ăn nhẹ' }
          }
        ]
      },
      {
        char: '県',
        meaning: { en: 'prefecture', vi: 'huyện - tỉnh (đơn vị hành chính)' },
        onyomi: ['ケン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A large administrative region under the central government: a prefecture.',
          vi: 'Một vùng hành chính lớn trực thuộc chính quyền trung ương: tỉnh (ken).'
        },
        examples: [
          {
            parts: [{ text: '県', reading: 'けん' }],
            meaning: { en: 'prefecture', vi: 'tỉnh' }
          },
          {
            parts: [
              { text: '県', reading: 'けん' },
              { text: '立', reading: 'りつ' }
            ],
            meaning: { en: 'prefectural (run by the prefecture)', vi: 'thuộc tỉnh, tỉnh lập' }
          },
          {
            parts: [
              { text: '県', reading: 'けん' },
              { text: '道', reading: 'どう' }
            ],
            meaning: { en: 'prefectural road', vi: 'tỉnh lộ' }
          }
        ]
      },
      {
        char: '昭',
        meaning: { en: 'shining, bright', vi: 'chiêu - sáng, rạng rỡ' },
        onyomi: ['ショウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'The sun 日 calling forth its light to make things bright and clear: shining, bright.',
          vi: 'Mặt trời 日 gọi ánh sáng lên làm mọi thứ rạng rỡ: sáng, rực rỡ.'
        },
        note: {
          en: 'In modern Japanese it appears almost only in 昭和 (the Shōwa era, 1926-1989).',
          vi: 'Trong tiếng Nhật hiện đại hầu như chỉ xuất hiện trong 昭和 (thời Shōwa, 1926-1989).'
        },
        examples: [
          {
            parts: [
              { text: '昭', reading: 'しょう' },
              { text: '和', reading: 'わ' }
            ],
            meaning: { en: 'the Showa era', vi: 'thời Showa' }
          },
          {
            parts: [
              { text: '昭', reading: 'しょう' },
              { text: '和', reading: 'わ' },
              { text: '時', reading: 'じ' },
              { text: '代', reading: 'だい' }
            ],
            meaning: { en: 'the Showa period', vi: 'thời đại Showa' }
          }
        ]
      },
      {
        char: '整',
        meaning: { en: 'to arrange, to put in order', vi: 'chỉnh - sắp xếp, chỉnh đốn' },
        onyomi: ['セイ'],
        kunyomi: ['ととの.える', 'ととの.う'],
        components: [],
        mnemonic: {
          en: 'Straightening a bundle out until everything is correct 正 and neat: to arrange, to put in order.',
          vi: 'Chỉnh một bó cho tới khi mọi thứ ngay ngắn 正 và gọn gàng: sắp xếp, chỉnh đốn.'
        },
        examples: [
          {
            parts: [
              { text: '整', reading: 'ととの' },
              { text: 'え', reading: 'え' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to arrange, to get in order', vi: 'sắp xếp, chỉnh cho gọn' }
          },
          {
            parts: [
              { text: '整', reading: 'せい' },
              { text: '理', reading: 'り' }
            ],
            meaning: { en: 'sorting out, tidying', vi: 'sắp xếp, chỉnh lý' }
          },
          {
            parts: [
              { text: '調', reading: 'ちょう' },
              { text: '整', reading: 'せい' }
            ],
            meaning: { en: 'adjustment, regulation', vi: 'điều chỉnh' }
          }
        ]
      },
      {
        char: '鉄',
        meaning: { en: 'iron', vi: 'thiết - sắt' },
        onyomi: ['テツ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A common, hard metal 金 dug from the earth: iron.',
          vi: 'Một kim loại 金 cứng, phổ biến đào từ đất: sắt.'
        },
        examples: [
          {
            parts: [{ text: '鉄', reading: 'てつ' }],
            meaning: { en: 'iron', vi: 'sắt' }
          },
          {
            parts: [
              { text: '地', reading: 'ち' },
              { text: '下', reading: 'か' },
              { text: '鉄', reading: 'てつ' }
            ],
            meaning: { en: 'subway, metro', vi: 'tàu điện ngầm' }
          },
          {
            parts: [
              { text: '鉄', reading: 'てつ' },
              { text: '道', reading: 'どう' }
            ],
            meaning: { en: 'railway', vi: 'đường sắt' }
          }
        ]
      },
      {
        char: '登',
        meaning: { en: 'to climb, to ascend', vi: 'đăng - trèo, leo lên' },
        onyomi: ['トウ', 'ト'],
        kunyomi: ['のぼ.る'],
        components: [],
        mnemonic: {
          en: 'Two feet stepping up rung by rung onto a raised stand 豆: to climb, to ascend.',
          vi: 'Đôi chân bước lên từng nấc trên cái bệ cao 豆: trèo, leo lên.'
        },
        examples: [
          {
            parts: [
              { text: '登', reading: 'のぼ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to climb', vi: 'trèo, leo' }
          },
          {
            parts: [
              { text: '登', reading: 'と' },
              { text: '山', reading: 'ざん' }
            ],
            meaning: { en: 'mountain climbing', vi: 'leo núi' }
          },
          {
            parts: [
              { text: '登', reading: 'とう' },
              { text: '校', reading: 'こう' }
            ],
            meaning: { en: 'going to school', vi: 'đến trường' }
          }
        ]
      },
      {
        char: '物',
        meaning: { en: 'thing, object', vi: 'vật - vật, đồ vật' },
        onyomi: ['ブツ', 'モツ'],
        kunyomi: ['もの'],
        components: [],
        mnemonic: {
          en: 'Livestock like a cow 牛 counted among your goods: a thing, an object.',
          vi: 'Gia súc như con bò 牛 được tính vào của cải: vật, đồ vật.'
        },
        examples: [
          {
            parts: [{ text: '物', reading: 'もの' }],
            meaning: { en: 'thing, object', vi: 'đồ vật, vật' }
          },
          {
            parts: [
              { text: '動', reading: 'どう' },
              { text: '物', reading: 'ぶつ' }
            ],
            meaning: { en: 'animal', vi: 'động vật' }
          },
          {
            parts: [
              { text: '買', reading: 'か' },
              { text: 'い', reading: 'い' },
              { text: '物', reading: 'もの' }
            ],
            meaning: { en: 'shopping', vi: 'mua sắm' }
          }
        ]
      },
      {
        char: '予',
        meaning: { en: 'beforehand, in advance', vi: 'dự - trước, sẵn' },
        onyomi: ['ヨ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Setting things up ahead of time before they are needed: beforehand, in advance.',
          vi: 'Chuẩn bị mọi thứ từ trước khi cần: trước, sẵn.'
        },
        examples: [
          {
            parts: [
              { text: '予', reading: 'よ' },
              { text: '定', reading: 'てい' }
            ],
            meaning: { en: 'plan, schedule', vi: 'dự định, lịch trình' }
          },
          {
            parts: [
              { text: '予', reading: 'よ' },
              { text: '習', reading: 'しゅう' }
            ],
            meaning: { en: 'preparation (before a lesson)', vi: 'chuẩn bị bài trước' }
          },
          {
            parts: [
              { text: '予', reading: 'よ' },
              { text: '約', reading: 'やく' }
            ],
            meaning: { en: 'reservation, booking', vi: 'đặt trước' }
          }
        ]
      },
      {
        char: '路',
        meaning: { en: 'road, path', vi: 'lộ - đường, con đường' },
        onyomi: ['ロ'],
        kunyomi: ['じ'],
        components: [],
        mnemonic: {
          en: 'Where the feet 足 travel each 各 day: a road, a path.',
          vi: 'Nơi đôi chân 足 đi lại mỗi ngày: con đường, lối đi.'
        },
        examples: [
          {
            parts: [
              { text: '道', reading: 'どう' },
              { text: '路', reading: 'ろ' }
            ],
            meaning: { en: 'road, roadway', vi: 'đường sá' }
          },
          {
            parts: [
              { text: '線', reading: 'せん' },
              { text: '路', reading: 'ろ' }
            ],
            meaning: { en: 'railway track', vi: 'đường ray' }
          },
          {
            parts: [
              { text: '通', reading: 'つう' },
              { text: '路', reading: 'ろ' }
            ],
            meaning: { en: 'passage, aisle', vi: 'lối đi, hành lang' }
          }
        ]
      },
      {
        char: '豆',
        meaning: { en: 'bean', vi: 'đậu - hạt đậu' },
        onyomi: ['トウ', 'ズ'],
        kunyomi: ['まめ'],
        components: [],
        mnemonic: {
          en: 'A picture of a tall-stemmed dish once used for offerings, later meaning bean: a bean.',
          vi: 'Hình một cái đĩa có chân cao xưa dùng để cúng, sau mang nghĩa hạt đậu: hạt đậu.'
        },
        examples: [
          {
            parts: [{ text: '豆', reading: 'まめ' }],
            meaning: { en: 'bean', vi: 'hạt đậu' }
          },
          {
            parts: [
              { text: '大', reading: 'だい' },
              { text: '豆', reading: 'ず' }
            ],
            meaning: { en: 'soybean', vi: 'đậu nành' }
          },
          {
            parts: [
              { text: '豆', reading: 'とう' },
              { text: '腐', reading: 'ふ' }
            ],
            meaning: { en: 'tofu', vi: 'đậu phụ' }
          }
        ]
      }
    ]
  }
]);

/**
 * Grade 4 Jōyō kanji (202 characters), learned 10 per lesson. Author each lesson
 * by hand; keep 10 kanji per lesson and add new lessons in order.
 */
export const grade4Lessons: KanjiLesson[] = withSequentialNumbers([
  {
    title: {
      en: 'Feelings & wishes',
      vi: 'Cảm xúc & mong ước'
    },
    kanji: [
      {
        char: '愛',
        meaning: { en: 'love, affection', vi: 'ái - yêu, tình yêu' },
        onyomi: ['アイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A hand holding the heart 心 close and not letting go: love, affection.',
          vi: 'Một bàn tay ôm giữ trái tim 心 không rời: yêu thương, tình yêu.'
        },
        examples: [
          {
            parts: [{ text: '愛', reading: 'あい' }],
            meaning: { en: 'love', vi: 'tình yêu' }
          },
          {
            parts: [
              { text: '愛', reading: 'あい' },
              { text: '情', reading: 'じょう' }
            ],
            meaning: { en: 'affection, love', vi: 'tình cảm, tình thương' }
          },
          {
            parts: [
              { text: '愛', reading: 'あい' },
              { text: '犬', reading: 'けん' }
            ],
            meaning: { en: 'pet dog, beloved dog', vi: 'chú chó cưng' }
          }
        ]
      },
      {
        char: '好',
        meaning: { en: 'to like; good', vi: 'hảo - thích; tốt' },
        onyomi: ['コウ'],
        kunyomi: ['この.む', 'す.く'],
        components: ['女', '子'],
        mnemonic: {
          en: 'A mother 女 cradling her child 子, the picture of fondness: to like, good.',
          vi: 'Người mẹ 女 ôm ấp đứa con 子, hình ảnh của sự yêu quý: thích, tốt.'
        },
        examples: [
          {
            parts: [
              { text: '好', reading: 'す' },
              { text: 'き', reading: 'き' }
            ],
            meaning: { en: 'liked, favorite', vi: 'thích' }
          },
          {
            parts: [
              { text: '好', reading: 'こう' },
              { text: '物', reading: 'ぶつ' }
            ],
            meaning: { en: 'favorite food', vi: 'món khoái khẩu' }
          },
          {
            parts: [
              { text: '友', reading: 'ゆう' },
              { text: '好', reading: 'こう' }
            ],
            meaning: { en: 'friendship, amity', vi: 'hữu hảo, thân thiện' }
          }
        ]
      },
      {
        char: '喜',
        meaning: { en: 'to rejoice, joy', vi: 'hỷ - vui mừng, hân hoan' },
        onyomi: ['キ'],
        kunyomi: ['よろこ.ぶ'],
        components: [],
        mnemonic: {
          en: 'A drum beating and a mouth 口 open in delight: to rejoice, joy.',
          vi: 'Tiếng trống vang lên và cái miệng 口 mở ra hân hoan: vui mừng, hân hoan.'
        },
        examples: [
          {
            parts: [
              { text: '喜', reading: 'よろこ' },
              { text: 'ぶ', reading: 'ぶ' }
            ],
            meaning: { en: 'to be glad, to rejoice', vi: 'vui mừng' }
          },
          {
            parts: [
              { text: '大', reading: 'おお' },
              { text: '喜', reading: 'よろこ' },
              { text: 'び', reading: 'び' }
            ],
            meaning: { en: 'great joy', vi: 'mừng rỡ, vui sướng' }
          },
          {
            parts: [
              { text: '悲', reading: 'ひ' },
              { text: '喜', reading: 'き' }
            ],
            meaning: { en: 'joy and sorrow', vi: 'buồn vui, bi hỉ' }
          }
        ]
      },
      {
        char: '泣',
        meaning: { en: 'to cry, to weep', vi: 'khấp - khóc' },
        onyomi: ['キュウ'],
        kunyomi: ['な.く'],
        components: [],
        mnemonic: {
          en: 'Standing 立 with water 氵 streaming from the eyes: to cry, to weep.',
          vi: 'Đứng 立 với nước 氵 tuôn ra từ mắt: khóc.'
        },
        examples: [
          {
            parts: [
              { text: '泣', reading: 'な' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to cry, to weep', vi: 'khóc' }
          },
          {
            parts: [
              { text: '泣', reading: 'な' },
              { text: 'き', reading: 'き' },
              { text: '声', reading: 'ごえ' }
            ],
            meaning: { en: 'crying voice', vi: 'tiếng khóc' }
          },
          {
            parts: [
              { text: '号', reading: 'ごう' },
              { text: '泣', reading: 'きゅう' }
            ],
            meaning: { en: 'wailing, bawling', vi: 'khóc òa, gào khóc' }
          }
        ]
      },
      {
        char: '笑',
        meaning: { en: 'to laugh, to smile', vi: 'tiếu - cười' },
        onyomi: ['ショウ'],
        kunyomi: ['わら.う', 'え.む'],
        components: [],
        mnemonic: {
          en: 'Bamboo 竹 leaves swaying as if bent over laughing: to laugh, to smile.',
          vi: 'Lá tre 竹 lay động như đang cười ngặt nghẽo: cười, mỉm cười.'
        },
        examples: [
          {
            parts: [
              { text: '笑', reading: 'わら' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to laugh', vi: 'cười' }
          },
          {
            parts: [
              { text: '笑', reading: 'え' },
              { text: '顔', reading: 'がお' }
            ],
            meaning: { en: 'smiling face', vi: 'khuôn mặt tươi cười' }
          },
          {
            parts: [
              { text: '大', reading: 'おお' },
              { text: '笑', reading: 'わら' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'big laugh', vi: 'cười lớn' }
          }
        ]
      },
      {
        char: '望',
        meaning: { en: 'to hope, to wish; to gaze afar', vi: 'vọng - hy vọng, mong mỏi; ngắm xa' },
        onyomi: ['ボウ', 'モウ'],
        kunyomi: ['のぞ.む'],
        components: [],
        mnemonic: {
          en: 'Gazing up at the moon 月 far away and longing for it: to hope, to wish, to gaze into the distance.',
          vi: 'Ngước nhìn mặt trăng 月 xa xăm và khao khát: hy vọng, mong mỏi, ngắm xa.'
        },
        examples: [
          {
            parts: [
              { text: '望', reading: 'のぞ' },
              { text: 'む', reading: 'む' }
            ],
            meaning: { en: 'to hope for, to wish', vi: 'mong, hy vọng' }
          },
          {
            parts: [
              { text: '希', reading: 'き' },
              { text: '望', reading: 'ぼう' }
            ],
            meaning: { en: 'hope', vi: 'hy vọng' }
          },
          {
            parts: [
              { text: '失', reading: 'しつ' },
              { text: '望', reading: 'ぼう' }
            ],
            meaning: { en: 'disappointment', vi: 'thất vọng' }
          }
        ]
      },
      {
        char: '願',
        meaning: { en: 'to wish, to pray, to request', vi: 'nguyện - cầu nguyện, ước nguyện' },
        onyomi: ['ガン'],
        kunyomi: ['ねが.う'],
        components: [],
        mnemonic: {
          en: 'Bowing the head 頁 to make an earnest request: to wish, to pray, to request.',
          vi: 'Cúi đầu 頁 để khẩn cầu tha thiết: cầu nguyện, ước nguyện.'
        },
        examples: [
          {
            parts: [
              { text: '願', reading: 'ねが' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to wish, to request', vi: 'cầu, mong' }
          },
          {
            parts: [
              { text: '願', reading: 'ねが' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'a wish, a request', vi: 'điều ước, lời thỉnh cầu' }
          },
          {
            parts: [
              { text: 'お', reading: 'お' },
              { text: '願', reading: 'ねが' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'please, a request', vi: 'xin, làm ơn' }
          }
        ]
      },
      {
        char: '希',
        meaning: { en: 'hope; rare, scarce', vi: 'hy - hy vọng; hiếm' },
        onyomi: ['キ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A loosely woven cloth 巾 with rare, hoped-for threads: hope, and rare, scarce.',
          vi: 'Tấm vải 巾 dệt thưa với những sợi hiếm hoi được mong đợi: hy vọng, và hiếm.'
        },
        examples: [
          {
            parts: [
              { text: '希', reading: 'き' },
              { text: '望', reading: 'ぼう' }
            ],
            meaning: { en: 'hope', vi: 'hy vọng' }
          },
          {
            parts: [
              { text: '希', reading: 'き' },
              { text: '少', reading: 'しょう' }
            ],
            meaning: { en: 'rare, scarce', vi: 'hiếm, quý hiếm' }
          }
        ]
      },
      {
        char: '求',
        meaning: { en: 'to seek, to demand', vi: 'cầu - tìm kiếm, yêu cầu' },
        onyomi: ['キュウ'],
        kunyomi: ['もと.める'],
        components: [],
        mnemonic: {
          en: 'Reaching out to grasp and pull in what you want: to seek, to demand, to request.',
          vi: 'Vươn ra nắm lấy và kéo về thứ mình muốn: tìm kiếm, yêu cầu.'
        },
        examples: [
          {
            parts: [
              { text: '求', reading: 'もと' },
              { text: 'め', reading: 'め' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to seek, to request', vi: 'tìm, yêu cầu' }
          },
          {
            parts: [
              { text: '要', reading: 'よう' },
              { text: '求', reading: 'きゅう' }
            ],
            meaning: { en: 'demand, request', vi: 'yêu cầu, đòi hỏi' }
          },
          {
            parts: [
              { text: '求', reading: 'きゅう' },
              { text: '人', reading: 'じん' }
            ],
            meaning: { en: 'job offer, help wanted', vi: 'tuyển người, tìm người' }
          }
        ]
      },
      {
        char: '念',
        meaning: { en: 'thought, wish; attention', vi: 'niệm - ý nghĩ; tâm niệm' },
        onyomi: ['ネン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Holding something in the heart 心 right now 今, keeping it in mind: a thought, a wish, attention.',
          vi: 'Giữ điều gì đó trong tim 心 ngay lúc này 今, khắc ghi trong lòng: ý nghĩ, tâm niệm.'
        },
        examples: [
          {
            parts: [
              { text: '記', reading: 'き' },
              { text: '念', reading: 'ねん' }
            ],
            meaning: { en: 'commemoration, memento', vi: 'kỷ niệm' }
          },
          {
            parts: [
              { text: '残', reading: 'ざん' },
              { text: '念', reading: 'ねん' }
            ],
            meaning: { en: 'regret, too bad', vi: 'tiếc, đáng tiếc' }
          },
          {
            parts: [
              { text: '信', reading: 'しん' },
              { text: '念', reading: 'ねん' }
            ],
            meaning: { en: 'belief, conviction', vi: 'niềm tin, tín niệm' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Food & plants',
      vi: 'Đồ ăn & cây trái'
    },
    kanji: [
      {
        char: '果',
        meaning: { en: 'fruit; result', vi: 'quả - trái cây; kết quả' },
        onyomi: ['カ'],
        kunyomi: ['は.たす', 'は.てる'],
        components: ['田', '木'],
        mnemonic: {
          en: 'A round fruit 田 sitting on top of a tree 木: fruit, and the result that ripens.',
          vi: 'Một quả tròn 田 nằm trên cây 木: trái cây, và kết quả chín muồi.'
        },
        examples: [
          {
            parts: [
              { text: '果', reading: 'くだ' },
              { text: '物', reading: 'もの' }
            ],
            meaning: { en: 'fruit', vi: 'trái cây' }
          },
          {
            parts: [
              { text: '結', reading: 'けっ' },
              { text: '果', reading: 'か' }
            ],
            meaning: { en: 'result, outcome', vi: 'kết quả' }
          },
          {
            parts: [
              { text: '果', reading: 'は' },
              { text: 'た', reading: 'た' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to accomplish, to carry out', vi: 'hoàn thành, thực hiện' }
          }
        ]
      },
      {
        char: '芽',
        meaning: { en: 'bud, sprout', vi: 'nha - mầm, chồi' },
        onyomi: ['ガ'],
        kunyomi: ['め'],
        components: [],
        mnemonic: {
          en: 'A new shoot 艹 pushing up sharp like a fang 牙 through the soil: a bud, a sprout.',
          vi: 'Một mầm cây 艹 nhú lên nhọn như cái răng nanh 牙 xuyên qua đất: mầm, chồi.'
        },
        examples: [
          {
            parts: [{ text: '芽', reading: 'め' }],
            meaning: { en: 'sprout, bud', vi: 'mầm, chồi' }
          },
          {
            parts: [
              { text: '新', reading: 'しん' },
              { text: '芽', reading: 'め' }
            ],
            meaning: { en: 'new bud, fresh shoot', vi: 'mầm non' }
          },
          {
            parts: [
              { text: '発', reading: 'はつ' },
              { text: '芽', reading: 'が' }
            ],
            meaning: { en: 'germination, sprouting', vi: 'sự nảy mầm' }
          }
        ]
      },
      {
        char: '菜',
        meaning: { en: 'vegetable, greens', vi: 'thái - rau, rau xanh' },
        onyomi: ['サイ'],
        kunyomi: ['な'],
        components: [],
        mnemonic: {
          en: 'Leafy plants 艹 you pick by hand to eat: vegetables, greens.',
          vi: 'Những cây lá 艹 hái bằng tay để ăn: rau, rau xanh.'
        },
        examples: [
          {
            parts: [
              { text: '野', reading: 'や' },
              { text: '菜', reading: 'さい' }
            ],
            meaning: { en: 'vegetables', vi: 'rau củ' }
          },
          {
            parts: [{ text: '菜', reading: 'な' }],
            meaning: { en: 'greens, rape plant', vi: 'rau, cải' }
          },
          {
            parts: [
              { text: '白', reading: 'はく' },
              { text: '菜', reading: 'さい' }
            ],
            meaning: { en: 'Chinese cabbage', vi: 'cải thảo' }
          }
        ]
      },
      {
        char: '梅',
        meaning: { en: 'plum (ume)', vi: 'mai - cây mơ, quả mơ' },
        onyomi: ['バイ'],
        kunyomi: ['うめ'],
        components: [],
        mnemonic: {
          en: 'A tree 木 that blooms early every year and bears sour fruit: the plum (ume).',
          vi: 'Cái cây 木 năm nào cũng nở sớm và cho quả chua: cây mơ (ume).'
        },
        examples: [
          {
            parts: [{ text: '梅', reading: 'うめ' }],
            meaning: { en: 'plum, ume', vi: 'quả mơ' }
          },
          {
            parts: [{ text: '梅雨', reading: 'つゆ' }],
            meaning: { en: 'the rainy season', vi: 'mùa mưa (tsuyu)' }
          },
          {
            parts: [
              { text: '梅', reading: 'うめ' },
              { text: '酒', reading: 'しゅ' }
            ],
            meaning: { en: 'plum wine', vi: 'rượu mơ' }
          }
        ]
      },
      {
        char: '種',
        meaning: { en: 'seed; kind, type', vi: 'chủng - hạt giống; loại, chủng loại' },
        onyomi: ['シュ'],
        kunyomi: ['たね'],
        components: [],
        mnemonic: {
          en: 'The heaviest 重, best grains of a crop 禾 saved to plant: a seed, and a kind or type.',
          vi: 'Những hạt 禾 nặng 重 nhất, tốt nhất của vụ mùa giữ lại để gieo: hạt giống, và loại, chủng loại.'
        },
        examples: [
          {
            parts: [{ text: '種', reading: 'たね' }],
            meaning: { en: 'seed', vi: 'hạt giống' }
          },
          {
            parts: [
              { text: '種', reading: 'しゅ' },
              { text: '類', reading: 'るい' }
            ],
            meaning: { en: 'kind, type, variety', vi: 'chủng loại, loại' }
          },
          {
            parts: [
              { text: '品', reading: 'ひん' },
              { text: '種', reading: 'しゅ' }
            ],
            meaning: { en: 'variety, breed', vi: 'giống (cây, vật)' }
          }
        ]
      },
      {
        char: '飯',
        meaning: { en: 'cooked rice; meal', vi: 'phạn - cơm; bữa ăn' },
        onyomi: ['ハン'],
        kunyomi: ['めし'],
        components: [],
        mnemonic: {
          en: 'The food 食 you come back 反 to every day, cooked rice: a meal.',
          vi: 'Món ăn 食 mà ngày nào cũng quay lại 反 dùng, cơm chín: bữa cơm.'
        },
        examples: [
          {
            parts: [
              { text: 'ご', reading: 'ご' },
              { text: '飯', reading: 'はん' }
            ],
            meaning: { en: 'cooked rice, meal', vi: 'cơm' }
          },
          {
            parts: [{ text: '飯', reading: 'めし' }],
            meaning: { en: 'meal, food (casual)', vi: 'cơm, bữa ăn' }
          },
          {
            parts: [
              { text: '夕', reading: 'ゆう' },
              { text: '飯', reading: 'はん' }
            ],
            meaning: { en: 'dinner, evening meal', vi: 'cơm tối' }
          }
        ]
      },
      {
        char: '塩',
        meaning: { en: 'salt', vi: 'diêm - muối' },
        onyomi: ['エン'],
        kunyomi: ['しお'],
        components: [],
        mnemonic: {
          en: 'White grains gathered from earth 土 and seawater in a dish: salt.',
          vi: 'Những hạt trắng lấy từ đất 土 và nước biển đựng trong đĩa: muối.'
        },
        examples: [
          {
            parts: [{ text: '塩', reading: 'しお' }],
            meaning: { en: 'salt', vi: 'muối' }
          },
          {
            parts: [
              { text: '塩', reading: 'しお' },
              { text: '水', reading: 'みず' }
            ],
            meaning: { en: 'salt water', vi: 'nước muối' }
          },
          {
            parts: [
              { text: '食', reading: 'しょく' },
              { text: '塩', reading: 'えん' }
            ],
            meaning: { en: 'table salt', vi: 'muối ăn' }
          }
        ]
      },
      {
        char: '料',
        meaning: { en: 'materials, ingredients; fee', vi: 'liệu - nguyên liệu; phí, tiền' },
        onyomi: ['リョウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Measuring out rice 米 with a scoop 斗 as materials and their cost: ingredients, materials, a fee.',
          vi: 'Đong gạo 米 bằng cái đấu 斗 làm nguyên liệu và tính giá: nguyên liệu, vật liệu, phí.'
        },
        examples: [
          {
            parts: [
              { text: '料', reading: 'りょう' },
              { text: '理', reading: 'り' }
            ],
            meaning: { en: 'cooking, a dish', vi: 'món ăn, nấu ăn' }
          },
          {
            parts: [
              { text: '料', reading: 'りょう' },
              { text: '金', reading: 'きん' }
            ],
            meaning: { en: 'fee, charge', vi: 'phí, cước' }
          },
          {
            parts: [
              { text: '材', reading: 'ざい' },
              { text: '料', reading: 'りょう' }
            ],
            meaning: { en: 'materials, ingredients', vi: 'nguyên liệu, vật liệu' }
          }
        ]
      },
      {
        char: '養',
        meaning: { en: 'to nourish, to raise, to support', vi: 'dưỡng - nuôi dưỡng, bồi dưỡng' },
        onyomi: ['ヨウ'],
        kunyomi: ['やしな.う'],
        components: ['羊', '食'],
        mnemonic: {
          en: 'Feeding sheep 羊 good food 食 to raise them well: to nourish, to raise, to support.',
          vi: 'Cho cừu 羊 ăn no đủ 食 để nuôi lớn: nuôi dưỡng, bồi dưỡng.'
        },
        examples: [
          {
            parts: [
              { text: '養', reading: 'やしな' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to support, to raise', vi: 'nuôi dưỡng, chu cấp' }
          },
          {
            parts: [
              { text: '栄', reading: 'えい' },
              { text: '養', reading: 'よう' }
            ],
            meaning: { en: 'nutrition', vi: 'dinh dưỡng' }
          },
          {
            parts: [
              { text: '休', reading: 'きゅう' },
              { text: '養', reading: 'よう' }
            ],
            meaning: { en: 'rest, recuperation', vi: 'nghỉ dưỡng' }
          }
        ]
      },
      {
        char: '焼',
        meaning: { en: 'to burn, to bake, to grill', vi: 'thiêu - đốt, nướng' },
        onyomi: ['ショウ'],
        kunyomi: ['や.く', 'や.ける'],
        components: [],
        mnemonic: {
          en: 'Putting something over fire 火 until it chars or cooks: to burn, to bake, to grill.',
          vi: 'Đặt thứ gì đó lên lửa 火 cho cháy hoặc chín: đốt, nướng.'
        },
        examples: [
          {
            parts: [
              { text: '焼', reading: 'や' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to burn, to grill, to bake', vi: 'đốt, nướng' }
          },
          {
            parts: [
              { text: '焼', reading: 'や' },
              { text: 'き', reading: 'き' },
              { text: '魚', reading: 'ざかな' }
            ],
            meaning: { en: 'grilled fish', vi: 'cá nướng' }
          },
          {
            parts: [
              { text: '夕', reading: 'ゆう' },
              { text: '焼', reading: 'や' },
              { text: 'け', reading: 'け' }
            ],
            meaning: { en: 'sunset glow', vi: 'ráng chiều' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Study & knowledge',
      vi: 'Học tập & tri thức'
    },
    kanji: [
      {
        char: '英',
        meaning: {
          en: 'England, English; excellent',
          vi: 'anh - nước Anh; xuất sắc, tinh anh'
        },
        onyomi: ['エイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A flower 艹 blooming at the very center 央, the finest of its kind: excellent, and England/English.',
          vi: 'Một bông hoa 艹 nở ngay chính giữa 央, tinh túy nhất: xuất sắc, và nước Anh, tiếng Anh.'
        },
        examples: [
          {
            parts: [
              { text: '英', reading: 'えい' },
              { text: '語', reading: 'ご' }
            ],
            meaning: { en: 'English language', vi: 'tiếng Anh' }
          },
          {
            parts: [
              { text: '英', reading: 'えい' },
              { text: '国', reading: 'こく' }
            ],
            meaning: { en: 'England, Britain', vi: 'nước Anh' }
          },
          {
            parts: [
              { text: '英', reading: 'えい' },
              { text: '会', reading: 'かい' },
              { text: '話', reading: 'わ' }
            ],
            meaning: { en: 'English conversation', vi: 'hội thoại tiếng Anh' }
          }
        ]
      },
      {
        char: '課',
        meaning: {
          en: 'lesson; section; to assign',
          vi: 'khóa - bài (học); ban, khoa; giao việc'
        },
        onyomi: ['カ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Words 言 that test the results 果 of study, divided into sections: a lesson, a department, to assign.',
          vi: 'Những lời 言 kiểm tra kết quả 果 học tập, chia thành phần: bài học, ban/khoa, giao việc.'
        },
        examples: [
          {
            parts: [
              { text: '課', reading: 'か' },
              { text: '題', reading: 'だい' }
            ],
            meaning: { en: 'assignment, task', vi: 'bài tập, nhiệm vụ' }
          },
          {
            parts: [
              { text: '一', reading: 'いっ' },
              { text: '課', reading: 'か' }
            ],
            meaning: { en: 'lesson one', vi: 'bài một' }
          },
          {
            parts: [
              { text: '課', reading: 'か' },
              { text: '長', reading: 'ちょう' }
            ],
            meaning: { en: 'section chief', vi: 'trưởng phòng, khoa trưởng' }
          }
        ]
      },
      {
        char: '訓',
        meaning: { en: 'instruction; kun reading', vi: 'huấn - dạy bảo; âm KUN' },
        onyomi: ['クン'],
        kunyomi: [],
        components: ['言', '川'],
        mnemonic: {
          en: 'Words 言 that flow like a river 川 to guide and teach: instruction, and the native kun reading.',
          vi: 'Những lời 言 chảy như dòng sông 川 để dẫn dắt, dạy bảo: dạy bảo, và âm KUN.'
        },
        examples: [
          {
            parts: [
              { text: '訓', reading: 'くん' },
              { text: '練', reading: 'れん' }
            ],
            meaning: { en: 'training', vi: 'huấn luyện' }
          },
          {
            parts: [
              { text: '教', reading: 'きょう' },
              { text: '訓', reading: 'くん' }
            ],
            meaning: { en: 'lesson, moral', vi: 'bài học, giáo huấn' }
          },
          {
            parts: [
              { text: '音', reading: 'おん' },
              { text: '訓', reading: 'くん' }
            ],
            meaning: { en: 'on and kun readings', vi: 'âm ON và âm KUN' }
          }
        ]
      },
      {
        char: '試',
        meaning: { en: 'to try, to test', vi: 'thí - thử; thi, kiểm tra' },
        onyomi: ['シ'],
        kunyomi: ['こころ.みる', 'ため.す'],
        components: [],
        mnemonic: {
          en: 'Putting something to the test with set words 言 in a fixed form 式: to try, to test.',
          vi: 'Đem thử bằng những lời 言 theo khuôn thức 式 định sẵn: thử, kiểm tra, thi.'
        },
        examples: [
          {
            parts: [
              { text: '試', reading: 'し' },
              { text: '験', reading: 'けん' }
            ],
            meaning: { en: 'examination, test', vi: 'kỳ thi, bài kiểm tra' }
          },
          {
            parts: [
              { text: '試', reading: 'し' },
              { text: '合', reading: 'あい' }
            ],
            meaning: { en: 'match, game', vi: 'trận đấu' }
          },
          {
            parts: [
              { text: '試', reading: 'ため' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to try out', vi: 'thử' }
          }
        ]
      },
      {
        char: '験',
        meaning: { en: 'test, verification; effect', vi: 'nghiệm - thử nghiệm, kiểm chứng' },
        onyomi: ['ケン', 'ゲン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Testing a horse 馬 to verify how good it is: a test, verification, an effect.',
          vi: 'Thử con ngựa 馬 để kiểm chứng nó tốt ra sao: thử nghiệm, kiểm chứng.'
        },
        examples: [
          {
            parts: [
              { text: '試', reading: 'し' },
              { text: '験', reading: 'けん' }
            ],
            meaning: { en: 'examination, test', vi: 'kỳ thi' }
          },
          {
            parts: [
              { text: '実', reading: 'じっ' },
              { text: '験', reading: 'けん' }
            ],
            meaning: { en: 'experiment', vi: 'thí nghiệm' }
          },
          {
            parts: [
              { text: '経', reading: 'けい' },
              { text: '験', reading: 'けん' }
            ],
            meaning: { en: 'experience', vi: 'kinh nghiệm' }
          }
        ]
      },
      {
        char: '覚',
        meaning: {
          en: 'to memorize; to wake; to sense',
          vi: 'giác - nhớ; tỉnh giấc; cảm giác'
        },
        onyomi: ['カク'],
        kunyomi: ['おぼ.える', 'さ.める'],
        components: [],
        mnemonic: {
          en: 'Opening the eyes 見 to take something in and keep it: to memorize, to wake up, to sense.',
          vi: 'Mở mắt 見 để tiếp nhận và ghi nhớ: nhớ, tỉnh giấc, cảm giác.'
        },
        examples: [
          {
            parts: [
              { text: '覚', reading: 'おぼ' },
              { text: 'え', reading: 'え' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to memorize, to remember', vi: 'ghi nhớ, thuộc' }
          },
          {
            parts: [
              { text: '目', reading: 'め' },
              { text: '覚', reading: 'ざ' },
              { text: 'ま', reading: 'ま' },
              { text: 'し', reading: 'し' }
            ],
            meaning: { en: 'alarm (clock)', vi: 'đồng hồ báo thức' }
          },
          {
            parts: [
              { text: '感', reading: 'かん' },
              { text: '覚', reading: 'かく' }
            ],
            meaning: { en: 'sense, sensation', vi: 'cảm giác' }
          }
        ]
      },
      {
        char: '説',
        meaning: { en: 'to explain; a theory', vi: 'thuyết - giải thích; học thuyết' },
        onyomi: ['セツ', 'ゼイ'],
        kunyomi: ['と.く'],
        components: [],
        mnemonic: {
          en: 'Using words 言 to open up an idea and make it clear: to explain, a theory.',
          vi: 'Dùng lời 言 để mở ra một ý và làm rõ: giải thích, học thuyết.'
        },
        examples: [
          {
            parts: [
              { text: '説', reading: 'せつ' },
              { text: '明', reading: 'めい' }
            ],
            meaning: { en: 'explanation', vi: 'sự giải thích' }
          },
          {
            parts: [
              { text: '小', reading: 'しょう' },
              { text: '説', reading: 'せつ' }
            ],
            meaning: { en: 'novel', vi: 'tiểu thuyết' }
          },
          {
            parts: [
              { text: '説', reading: 'と' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to explain, to preach', vi: 'giảng giải, thuyết' }
          }
        ]
      },
      {
        char: '例',
        meaning: { en: 'example; precedent', vi: 'lệ - ví dụ; lệ thường' },
        onyomi: ['レイ'],
        kunyomi: ['たと.える'],
        components: [],
        mnemonic: {
          en: 'A person 亻 lined up 列 as one instance among many: an example, a precedent.',
          vi: 'Một người 亻 xếp hàng 列 như một trường hợp trong nhiều cái: ví dụ, lệ thường.'
        },
        examples: [
          {
            parts: [{ text: '例', reading: 'れい' }],
            meaning: { en: 'example, instance', vi: 'ví dụ' }
          },
          {
            parts: [
              { text: '例', reading: 'たと' },
              { text: 'え', reading: 'え' },
              { text: 'ば', reading: 'ば' }
            ],
            meaning: { en: 'for example', vi: 'ví dụ như' }
          },
          {
            parts: [
              { text: '例', reading: 'れい' },
              { text: '文', reading: 'ぶん' }
            ],
            meaning: { en: 'example sentence', vi: 'câu ví dụ' }
          }
        ]
      },
      {
        char: '典',
        meaning: {
          en: 'code, canon; ceremony',
          vi: 'điển - sách chuẩn, điển tịch; điển lễ'
        },
        onyomi: ['テン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'An important book held up on a stand for reference: a canon, a code, a ceremony.',
          vi: 'Một cuốn sách quan trọng được nâng trên giá để tra cứu: sách chuẩn, điển tịch, điển lễ.'
        },
        examples: [
          {
            parts: [
              { text: '辞', reading: 'じ' },
              { text: '典', reading: 'てん' }
            ],
            meaning: { en: 'dictionary', vi: 'từ điển' }
          },
          {
            parts: [
              { text: '古', reading: 'こ' },
              { text: '典', reading: 'てん' }
            ],
            meaning: { en: 'the classics', vi: 'văn học cổ điển' }
          },
          {
            parts: [
              { text: '事', reading: 'じ' },
              { text: '典', reading: 'てん' }
            ],
            meaning: { en: 'encyclopedia', vi: 'từ điển bách khoa' }
          }
        ]
      },
      {
        char: '完',
        meaning: { en: 'complete, finished, whole', vi: 'hoàn - hoàn thành, trọn vẹn' },
        onyomi: ['カン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A house 宀 built to its very origin 元, every part in place: complete, finished, whole.',
          vi: 'Ngôi nhà 宀 xây trọn tới gốc 元, mọi phần đủ cả: hoàn thành, trọn vẹn.'
        },
        examples: [
          {
            parts: [
              { text: '完', reading: 'かん' },
              { text: '成', reading: 'せい' }
            ],
            meaning: { en: 'completion', vi: 'sự hoàn thành' }
          },
          {
            parts: [
              { text: '完', reading: 'かん' },
              { text: '全', reading: 'ぜん' }
            ],
            meaning: { en: 'perfect, complete', vi: 'hoàn toàn, hoàn hảo' }
          },
          {
            parts: [
              { text: '完', reading: 'かん' },
              { text: '了', reading: 'りょう' }
            ],
            meaning: { en: 'completion, conclusion', vi: 'hoàn tất' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Nation & society',
      vi: 'Quốc gia & xã hội'
    },
    kanji: [
      {
        char: '民',
        meaning: { en: 'people, populace', vi: 'dân - người dân, dân chúng' },
        onyomi: ['ミン'],
        kunyomi: ['たみ'],
        components: [],
        mnemonic: {
          en: 'A picture standing for the common people ruled over: the people, the populace.',
          vi: 'Hình tượng chỉ tầng lớp dân thường được cai trị: người dân, dân chúng.'
        },
        examples: [
          {
            parts: [
              { text: '国', reading: 'こく' },
              { text: '民', reading: 'みん' }
            ],
            meaning: { en: 'citizen, nation', vi: 'quốc dân, công dân' }
          },
          {
            parts: [
              { text: '市', reading: 'し' },
              { text: '民', reading: 'みん' }
            ],
            meaning: { en: 'citizen (of a city)', vi: 'thị dân, cư dân' }
          },
          {
            parts: [
              { text: '農', reading: 'のう' },
              { text: '民', reading: 'みん' }
            ],
            meaning: { en: 'farmer, peasant', vi: 'nông dân' }
          }
        ]
      },
      {
        char: '官',
        meaning: { en: 'government official; public office', vi: 'quan - quan chức; cơ quan' },
        onyomi: ['カン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Someone housed under the roof 宀 of the government to serve: an official, a public office.',
          vi: 'Người làm việc dưới mái 宀 nhà nước: quan chức, cơ quan công.'
        },
        examples: [
          {
            parts: [
              { text: '警', reading: 'けい' },
              { text: '官', reading: 'かん' }
            ],
            meaning: { en: 'police officer', vi: 'cảnh sát' }
          },
          {
            parts: [
              { text: '教', reading: 'きょう' },
              { text: '官', reading: 'かん' }
            ],
            meaning: { en: 'instructor, teaching officer', vi: 'giáo quan, huấn luyện viên' }
          },
          {
            parts: [
              { text: '長', reading: 'ちょう' },
              { text: '官', reading: 'かん' }
            ],
            meaning: { en: 'director, chief', vi: 'trưởng quan, chánh văn phòng' }
          }
        ]
      },
      {
        char: '軍',
        meaning: { en: 'army, military', vi: 'quân - quân đội' },
        onyomi: ['グン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'War chariots 車 gathered under one command: an army, the military.',
          vi: 'Những cỗ chiến xa 車 tập hợp dưới một quyền chỉ huy: quân đội.'
        },
        examples: [
          {
            parts: [{ text: '軍', reading: 'ぐん' }],
            meaning: { en: 'army, military', vi: 'quân đội' }
          },
          {
            parts: [
              { text: '軍', reading: 'ぐん' },
              { text: '人', reading: 'じん' }
            ],
            meaning: { en: 'soldier, serviceman', vi: 'quân nhân' }
          },
          {
            parts: [
              { text: '空', reading: 'くう' },
              { text: '軍', reading: 'ぐん' }
            ],
            meaning: { en: 'air force', vi: 'không quân' }
          }
        ]
      },
      {
        char: '兵',
        meaning: { en: 'soldier', vi: 'binh - lính, binh sĩ' },
        onyomi: ['ヘイ', 'ヒョウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Two hands holding up a weapon like an axe, ready for battle: a soldier.',
          vi: 'Hai bàn tay nâng vũ khí như cái rìu, sẵn sàng chiến đấu: người lính, binh sĩ.'
        },
        examples: [
          {
            parts: [{ text: '兵', reading: 'へい' }],
            meaning: { en: 'soldier', vi: 'người lính' }
          },
          {
            parts: [
              { text: '兵', reading: 'へい' },
              { text: '隊', reading: 'たい' }
            ],
            meaning: { en: 'soldier, troops', vi: 'binh lính, quân đội' }
          },
          {
            parts: [
              { text: '兵', reading: 'へい' },
              { text: '器', reading: 'き' }
            ],
            meaning: { en: 'weapon, arms', vi: 'vũ khí' }
          }
        ]
      },
      {
        char: '士',
        meaning: {
          en: 'samurai; gentleman; expert',
          vi: 'sĩ - kẻ sĩ; quý ông; chuyên gia'
        },
        onyomi: ['シ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'One 一 who has mastered much down to ten 十, a learned or martial man: a samurai, a gentleman, an expert.',
          vi: 'Người thông tỏ từ một 一 đến mười 十, kẻ sĩ văn hay võ: kẻ sĩ, quý ông, chuyên gia.'
        },
        examples: [
          {
            parts: [
              { text: '博', reading: 'はか' },
              { text: '士', reading: 'せ' }
            ],
            meaning: { en: 'doctorate; learned person', vi: 'tiến sĩ, bậc thông thái' }
          },
          {
            parts: [
              { text: '武', reading: 'ぶ' },
              { text: '士', reading: 'し' }
            ],
            meaning: { en: 'samurai, warrior', vi: 'võ sĩ, samurai' }
          },
          {
            parts: [
              { text: '力', reading: 'りき' },
              { text: '士', reading: 'し' }
            ],
            meaning: { en: 'sumo wrestler', vi: 'võ sĩ sumo' }
          }
        ]
      },
      {
        char: '司',
        meaning: { en: 'to administer, to manage', vi: 'ty - cai quản, phụ trách' },
        onyomi: ['シ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A mouth 口 giving out orders from an office, one who directs: to administer, to manage.',
          vi: 'Một cái miệng 口 ra lệnh từ công đường, người điều hành: cai quản, phụ trách.'
        },
        examples: [
          {
            parts: [
              { text: '司', reading: 'し' },
              { text: '会', reading: 'かい' }
            ],
            meaning: { en: 'chairing, master of ceremonies', vi: 'người dẫn chương trình' }
          },
          {
            parts: [
              { text: '上', reading: 'じょう' },
              { text: '司', reading: 'し' }
            ],
            meaning: { en: 'superior, boss', vi: 'cấp trên, sếp' }
          },
          {
            parts: [
              { text: '行', reading: 'ぎょう' },
              { text: '司', reading: 'じ' }
            ],
            meaning: { en: 'sumo referee', vi: 'trọng tài sumo' }
          }
        ]
      },
      {
        char: '臣',
        meaning: { en: 'retainer, subject, minister', vi: 'thần - bề tôi, quan thần' },
        onyomi: ['シン', 'ジン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A picture of the wide, downcast eye of a servant bowing before a lord: a retainer, a subject, a minister.',
          vi: 'Hình con mắt mở to cúi xuống của kẻ hầu trước chủ: bề tôi, quần thần, quan.'
        },
        examples: [
          {
            parts: [
              { text: '大', reading: 'だい' },
              { text: '臣', reading: 'じん' }
            ],
            meaning: { en: 'cabinet minister', vi: 'bộ trưởng, đại thần' }
          },
          {
            parts: [
              { text: '家', reading: 'か' },
              { text: '臣', reading: 'しん' }
            ],
            meaning: { en: 'vassal, retainer', vi: 'gia thần, bề tôi' }
          },
          {
            parts: [
              { text: '臣', reading: 'しん' },
              { text: '下', reading: 'か' }
            ],
            meaning: { en: 'subject, retainer', vi: 'thần dân, bề tôi' }
          }
        ]
      },
      {
        char: '議',
        meaning: { en: 'to deliberate, to discuss', vi: 'nghị - bàn bạc, nghị luận' },
        onyomi: ['ギ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Weighing matters with careful, just words 言: to deliberate, to discuss.',
          vi: 'Cân nhắc mọi việc bằng lời lẽ 言 đúng mực: bàn bạc, nghị luận.'
        },
        examples: [
          {
            parts: [
              { text: '会', reading: 'かい' },
              { text: '議', reading: 'ぎ' }
            ],
            meaning: { en: 'meeting, conference', vi: 'cuộc họp, hội nghị' }
          },
          {
            parts: [
              { text: '議', reading: 'ぎ' },
              { text: '論', reading: 'ろん' }
            ],
            meaning: { en: 'debate, argument', vi: 'tranh luận, nghị luận' }
          },
          {
            parts: [
              { text: '議', reading: 'ぎ' },
              { text: '会', reading: 'かい' }
            ],
            meaning: { en: 'assembly, parliament', vi: 'nghị viện, quốc hội' }
          }
        ]
      },
      {
        char: '郡',
        meaning: { en: 'county, rural district', vi: 'quận - huyện (hành chính)' },
        onyomi: ['グン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A district 阝 governed by a lord 君: a county, a rural district.',
          vi: 'Một vùng 阝 do một vị chúa 君 cai quản: quận, huyện nông thôn.'
        },
        examples: [
          {
            parts: [{ text: '郡', reading: 'ぐん' }],
            meaning: { en: 'county, district', vi: 'quận, huyện' }
          },
          {
            parts: [
              { text: '郡', reading: 'ぐん' },
              { text: '部', reading: 'ぶ' }
            ],
            meaning: { en: 'rural districts', vi: 'vùng nông thôn' }
          }
        ]
      },
      {
        char: '産',
        meaning: {
          en: 'to produce; to give birth; products',
          vi: 'sản - sản xuất; sinh đẻ; sản vật'
        },
        onyomi: ['サン'],
        kunyomi: ['う.む', 'う.まれる'],
        components: [],
        mnemonic: {
          en: 'Bringing new life 生 into being: to give birth, to produce, and the products made.',
          vi: 'Đưa sự sống 生 mới ra đời: sinh đẻ, sản xuất, và sản vật làm ra.'
        },
        examples: [
          {
            parts: [
              { text: '産', reading: 'う' },
              { text: 'む', reading: 'む' }
            ],
            meaning: { en: 'to give birth, to produce', vi: 'sinh, đẻ' }
          },
          {
            parts: [
              { text: '生', reading: 'せい' },
              { text: '産', reading: 'さん' }
            ],
            meaning: { en: 'production', vi: 'sản xuất' }
          },
          {
            parts: [
              { text: '名', reading: 'めい' },
              { text: '産', reading: 'さん' }
            ],
            meaning: { en: 'local specialty', vi: 'đặc sản' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Heat, water & calm',
      vi: 'Nóng lạnh, nước & tĩnh lặng'
    },
    kanji: [
      {
        char: '熱',
        meaning: { en: 'heat; fever; passion', vi: 'nhiệt - nóng; sốt; nhiệt huyết' },
        onyomi: ['ネツ'],
        kunyomi: ['あつ.い'],
        components: [],
        mnemonic: {
          en: 'Fire 灬 burning below to raise the temperature: heat, fever, passion.',
          vi: 'Ngọn lửa 灬 cháy bên dưới làm tăng nhiệt: nhiệt, cơn sốt, nhiệt huyết.'
        },
        examples: [
          {
            parts: [{ text: '熱', reading: 'ねつ' }],
            meaning: { en: 'heat, fever', vi: 'nhiệt, cơn sốt' }
          },
          {
            parts: [
              { text: '熱', reading: 'あつ' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'hot (to the touch)', vi: 'nóng (chạm vào)' }
          },
          {
            parts: [
              { text: '熱', reading: 'ねっ' },
              { text: '心', reading: 'しん' }
            ],
            meaning: { en: 'enthusiasm, zeal', vi: 'nhiệt tình, hăng hái' }
          }
        ]
      },
      {
        char: '冷',
        meaning: {
          en: 'cold; to cool',
          vi: 'lãnh - lạnh; nguội; làm lạnh'
        },
        onyomi: ['レイ'],
        kunyomi: ['つめ.たい', 'ひ.える', 'さ.める'],
        components: [],
        mnemonic: {
          en: 'The ice 冫 that chills something down at command 令: cold, to cool.',
          vi: 'Băng 冫 làm cho vật lạnh đi theo lệnh 令: lạnh, nguội, làm lạnh.'
        },
        examples: [
          {
            parts: [
              { text: '冷', reading: 'つめ' },
              { text: 'た', reading: 'た' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'cold (to the touch)', vi: 'lạnh (chạm vào)' }
          },
          {
            parts: [
              { text: '冷', reading: 'ひ' },
              { text: 'え', reading: 'え' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to cool down, to get cold', vi: 'nguội đi, lạnh đi' }
          },
          {
            parts: [
              { text: '冷', reading: 'れい' },
              { text: '水', reading: 'すい' }
            ],
            meaning: { en: 'cold water', vi: 'nước lạnh' }
          }
        ]
      },
      {
        char: '灯',
        meaning: { en: 'lamp, light', vi: 'đăng - đèn, ánh đèn' },
        onyomi: ['トウ'],
        kunyomi: ['ひ'],
        components: [],
        mnemonic: {
          en: 'A steady flame 火 nailed 丁 in place to give light: a lamp, a light.',
          vi: 'Một ngọn lửa 火 đóng cố định 丁 để chiếu sáng: cái đèn, ánh đèn.'
        },
        examples: [
          {
            parts: [
              { text: '電', reading: 'でん' },
              { text: '灯', reading: 'とう' }
            ],
            meaning: { en: 'electric light', vi: 'đèn điện' }
          },
          {
            parts: [{ text: '灯', reading: 'ひ' }],
            meaning: { en: 'light, lamplight', vi: 'ánh đèn' }
          },
          {
            parts: [
              { text: '灯', reading: 'とう' },
              { text: '油', reading: 'ゆ' }
            ],
            meaning: { en: 'kerosene, lamp oil', vi: 'dầu hỏa' }
          }
        ]
      },
      {
        char: '満',
        meaning: { en: 'full; to fill', vi: 'mãn - đầy, tràn đầy' },
        onyomi: ['マン'],
        kunyomi: ['み.ちる', 'み.たす'],
        components: [],
        mnemonic: {
          en: 'Water 氵 rising until the vessel is filled to the brim: full, to fill.',
          vi: 'Nước 氵 dâng đến khi đầy tràn miệng: đầy, tràn đầy.'
        },
        examples: [
          {
            parts: [
              { text: '満', reading: 'み' },
              { text: 'ち', reading: 'ち' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to become full', vi: 'đầy lên, tràn' }
          },
          {
            parts: [
              { text: '満', reading: 'まん' },
              { text: '足', reading: 'ぞく' }
            ],
            meaning: { en: 'satisfaction', vi: 'sự hài lòng, thỏa mãn' }
          },
          {
            parts: [
              { text: '満', reading: 'まん' },
              { text: '員', reading: 'いん' }
            ],
            meaning: { en: 'full (no vacancy)', vi: 'đầy chỗ, kín người' }
          }
        ]
      },
      {
        char: '浅',
        meaning: { en: 'shallow', vi: 'thiển - cạn, nông' },
        onyomi: ['セン'],
        kunyomi: ['あさ.い'],
        components: [],
        mnemonic: {
          en: 'Water 氵 with only a thin, small amount, not deep: shallow.',
          vi: 'Nước 氵 chỉ có một lớp mỏng, không sâu: cạn, nông.'
        },
        examples: [
          {
            parts: [
              { text: '浅', reading: 'あさ' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'shallow', vi: 'cạn, nông' }
          },
          {
            parts: [
              { text: '遠', reading: 'とお' },
              { text: '浅', reading: 'あさ' }
            ],
            meaning: { en: 'shoal, shallows', vi: 'bãi nông (thoải ra xa)' }
          },
          {
            parts: [
              { text: '浅', reading: 'あさ' },
              { text: '草', reading: 'くさ' }
            ],
            meaning: { en: 'Asakusa (place in Tokyo)', vi: 'Asakusa (địa danh)' }
          }
        ]
      },
      {
        char: '浴',
        meaning: { en: 'to bathe', vi: 'dục - tắm' },
        onyomi: ['ヨク'],
        kunyomi: ['あ.びる'],
        components: [],
        mnemonic: {
          en: 'Pouring water 氵 over yourself at a valley 谷 spring: to bathe.',
          vi: 'Dội nước 氵 lên người ở suối trong thung lũng 谷: tắm.'
        },
        examples: [
          {
            parts: [
              { text: '浴', reading: 'あ' },
              { text: 'び', reading: 'び' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to bathe in, to be showered with', vi: 'tắm, dội (lên người)' }
          },
          {
            parts: [
              { text: '入', reading: 'にゅう' },
              { text: '浴', reading: 'よく' }
            ],
            meaning: { en: 'taking a bath', vi: 'sự tắm' }
          },
          {
            parts: [
              { text: '海', reading: 'かい' },
              { text: '水', reading: 'すい' },
              { text: '浴', reading: 'よく' }
            ],
            meaning: { en: 'sea bathing', vi: 'tắm biển' }
          }
        ]
      },
      {
        char: '清',
        meaning: { en: 'clear, pure, clean', vi: 'thanh - trong, thanh khiết' },
        onyomi: ['セイ', 'ショウ'],
        kunyomi: ['きよ.い'],
        components: [],
        mnemonic: {
          en: 'Water 氵 as clear and fresh as the color blue-green 青: clear, pure, clean.',
          vi: 'Nước 氵 trong và tươi như màu xanh 青: trong, thanh khiết, sạch.'
        },
        examples: [
          {
            parts: [
              { text: '清', reading: 'きよ' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'pure, clear', vi: 'trong sạch, thanh khiết' }
          },
          {
            parts: [
              { text: '清', reading: 'し' },
              { text: '水', reading: 'みず' }
            ],
            meaning: { en: 'spring water', vi: 'nước suối trong' }
          },
          {
            parts: [
              { text: '清', reading: 'せい' },
              { text: '書', reading: 'しょ' }
            ],
            meaning: { en: 'a fair (clean) copy', vi: 'bản chép sạch' }
          }
        ]
      },
      {
        char: '静',
        meaning: { en: 'quiet, calm, still', vi: 'tĩnh - yên tĩnh, tĩnh lặng' },
        onyomi: ['セイ', 'ジョウ'],
        kunyomi: ['しず.か', 'しず.まる'],
        components: [],
        mnemonic: {
          en: 'The stillness of blue-green 青 nature with all struggle 争 laid to rest: quiet, calm.',
          vi: 'Sự tĩnh lặng của thiên nhiên xanh 青 khi mọi tranh đấu 争 lắng xuống: yên tĩnh, tĩnh lặng.'
        },
        examples: [
          {
            parts: [
              { text: '静', reading: 'しず' },
              { text: 'か', reading: 'か' }
            ],
            meaning: { en: 'quiet, calm', vi: 'yên tĩnh' }
          },
          {
            parts: [
              { text: '安', reading: 'あん' },
              { text: '静', reading: 'せい' }
            ],
            meaning: { en: 'rest, repose (medical)', vi: 'sự nghỉ ngơi tĩnh dưỡng' }
          },
          {
            parts: [
              { text: '平', reading: 'へい' },
              { text: '静', reading: 'せい' }
            ],
            meaning: { en: 'calm, composure', vi: 'bình tĩnh' }
          }
        ]
      },
      {
        char: '陸',
        meaning: { en: 'land, dry land', vi: 'lục - đất liền, lục địa' },
        onyomi: ['リク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'The raised, dry ground of hills 阝 above the water: land, dry land.',
          vi: 'Vùng đất cao, khô của đồi 阝 nhô trên mặt nước: đất liền, lục địa.'
        },
        examples: [
          {
            parts: [{ text: '陸', reading: 'りく' }],
            meaning: { en: 'land', vi: 'đất liền' }
          },
          {
            parts: [
              { text: '大', reading: 'たい' },
              { text: '陸', reading: 'りく' }
            ],
            meaning: { en: 'continent', vi: 'lục địa, đại lục' }
          },
          {
            parts: [
              { text: '着', reading: 'ちゃく' },
              { text: '陸', reading: 'りく' }
            ],
            meaning: { en: 'landing (of a plane)', vi: 'hạ cánh' }
          }
        ]
      },
      {
        char: '康',
        meaning: { en: 'health, well-being, peace', vi: 'khang - khỏe mạnh, an khang' },
        onyomi: ['コウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Life under a sturdy roof 广 with plenty and ease: health, well-being, peace.',
          vi: 'Cuộc sống dưới mái nhà 广 vững chãi, sung túc và thảnh thơi: khỏe mạnh, an khang.'
        },
        examples: [
          {
            parts: [
              { text: '健', reading: 'けん' },
              { text: '康', reading: 'こう' }
            ],
            meaning: { en: 'health', vi: 'sức khỏe' }
          },
          {
            parts: [
              { text: '小', reading: 'しょう' },
              { text: '康', reading: 'こう' }
            ],
            meaning: { en: 'lull, brief recovery', vi: 'sự tạm ổn, thuyên giảm' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Work & effort',
      vi: 'Lao động & nỗ lực'
    },
    kanji: [
      {
        char: '努',
        meaning: { en: 'to endeavor, to strive', vi: 'nỗ - cố gắng, nỗ lực' },
        onyomi: ['ド'],
        kunyomi: ['つと.める'],
        components: [],
        mnemonic: {
          en: 'Putting your back and strength 力 into a task like a laborer: to endeavor, to strive.',
          vi: 'Dồn sức 力 vào công việc như người lao động: cố gắng, nỗ lực.'
        },
        examples: [
          {
            parts: [
              { text: '努', reading: 'ど' },
              { text: '力', reading: 'りょく' }
            ],
            meaning: { en: 'effort, endeavor', vi: 'sự nỗ lực' }
          },
          {
            parts: [
              { text: '努', reading: 'つと' },
              { text: 'め', reading: 'め' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to strive, to make an effort', vi: 'cố gắng, nỗ lực' }
          }
        ]
      },
      {
        char: '労',
        meaning: {
          en: 'labor, toil; effort',
          vi: 'lao - lao động; vất vả; công lao'
        },
        onyomi: ['ロウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Working hard by lamplight with all your strength 力: labor, toil, and the effort spent.',
          vi: 'Làm lụng dưới ánh đèn bằng hết sức 力: lao động, vất vả, công sức.'
        },
        examples: [
          {
            parts: [
              { text: '労', reading: 'ろう' },
              { text: '働', reading: 'どう' }
            ],
            meaning: { en: 'labor, work', vi: 'lao động' }
          },
          {
            parts: [
              { text: '苦', reading: 'く' },
              { text: '労', reading: 'ろう' }
            ],
            meaning: { en: 'hardship, toil', vi: 'vất vả, gian khổ' }
          },
          {
            parts: [
              { text: '労', reading: 'ろう' },
              { text: '力', reading: 'りょく' }
            ],
            meaning: { en: 'labor, effort', vi: 'sức lao động' }
          }
        ]
      },
      {
        char: '功',
        meaning: { en: 'achievement, merit', vi: 'công - công lao, thành tích' },
        onyomi: ['コウ', 'ク'],
        kunyomi: [],
        components: ['工', '力'],
        mnemonic: {
          en: 'Skilled work 工 plus real strength 力 that produces results: achievement, merit.',
          vi: 'Kỹ năng 工 cộng với sức lực 力 tạo ra thành quả: công lao, thành tích.'
        },
        examples: [
          {
            parts: [
              { text: '成', reading: 'せい' },
              { text: '功', reading: 'こう' }
            ],
            meaning: { en: 'success', vi: 'thành công' }
          },
          {
            parts: [
              { text: '年', reading: 'ねん' },
              { text: '功', reading: 'こう' }
            ],
            meaning: { en: 'seniority, long experience', vi: 'thâm niên' }
          },
          {
            parts: [
              { text: '功', reading: 'こう' },
              { text: '労', reading: 'ろう' }
            ],
            meaning: { en: 'meritorious service', vi: 'công lao' }
          }
        ]
      },
      {
        char: '働',
        meaning: { en: 'to work, to labor', vi: 'động - làm việc, lao động' },
        onyomi: ['ドウ'],
        kunyomi: ['はたら.く'],
        components: [],
        mnemonic: {
          en: 'A person 亻 in motion 動, putting in a day of work: to work, to labor.',
          vi: 'Một người 亻 vận động 動, bỏ ra một ngày công: làm việc, lao động.'
        },
        note: {
          en: "A kokuji (kanji made in Japan); unusually it also has an on'yomi ドウ.",
          vi: 'Là kokuji (chữ do người Nhật tạo); hiếm gặp là nó vẫn có âm ON ドウ.'
        },
        examples: [
          {
            parts: [
              { text: '働', reading: 'はたら' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to work', vi: 'làm việc' }
          },
          {
            parts: [
              { text: '労', reading: 'ろう' },
              { text: '働', reading: 'どう' }
            ],
            meaning: { en: 'labor, work', vi: 'lao động' }
          },
          {
            parts: [
              { text: '共', reading: 'とも' },
              { text: '働', reading: 'ばたら' },
              { text: 'き', reading: 'き' }
            ],
            meaning: { en: 'dual-income (both spouses work)', vi: 'cả hai vợ chồng đi làm' }
          }
        ]
      },
      {
        char: '積',
        meaning: {
          en: 'to pile up, to accumulate; area',
          vi: 'tích - chất đống, tích lũy; diện tích'
        },
        onyomi: ['セキ'],
        kunyomi: ['つ.む', 'つ.もる'],
        components: [],
        mnemonic: {
          en: 'Stacking sheaves of grain 禾 higher and higher: to pile up, to accumulate.',
          vi: 'Chất những bó lúa 禾 ngày một cao: chất đống, tích lũy.'
        },
        examples: [
          {
            parts: [
              { text: '積', reading: 'つ' },
              { text: 'む', reading: 'む' }
            ],
            meaning: { en: 'to pile up, to load', vi: 'chất, xếp lên' }
          },
          {
            parts: [
              { text: '面', reading: 'めん' },
              { text: '積', reading: 'せき' }
            ],
            meaning: { en: 'area', vi: 'diện tích' }
          },
          {
            parts: [
              { text: '体', reading: 'たい' },
              { text: '積', reading: 'せき' }
            ],
            meaning: { en: 'volume', vi: 'thể tích' }
          }
        ]
      },
      {
        char: '得',
        meaning: {
          en: 'to gain, to acquire; profit',
          vi: 'đắc - được, thu được; có lợi'
        },
        onyomi: ['トク'],
        kunyomi: ['え.る', 'う.る'],
        components: [],
        mnemonic: {
          en: 'Going out on the road 彳 and coming back having gained something: to gain, to profit, to acquire.',
          vi: 'Ra đường 彳 rồi trở về với thứ thu được: được, thu được, có lợi.'
        },
        examples: [
          {
            parts: [
              { text: '得', reading: 'え' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to gain, to obtain', vi: 'thu được, đạt được' }
          },
          {
            parts: [
              { text: '得', reading: 'とく' },
              { text: '意', reading: 'い' }
            ],
            meaning: { en: "one's strong point; proud", vi: 'sở trường; đắc ý' }
          },
          {
            parts: [
              { text: '所', reading: 'しょ' },
              { text: '得', reading: 'とく' }
            ],
            meaning: { en: 'income, earnings', vi: 'thu nhập' }
          }
        ]
      },
      {
        char: '特',
        meaning: { en: 'special, particular', vi: 'đặc - đặc biệt, riêng biệt' },
        onyomi: ['トク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A prize bull 牛 set apart at the temple 寺 as something special: special, particular.',
          vi: 'Một con bò 牛 quý được dành riêng ở chùa 寺 như thứ đặc biệt: đặc biệt, riêng biệt.'
        },
        examples: [
          {
            parts: [
              { text: '特', reading: 'とく' },
              { text: 'に', reading: 'に' }
            ],
            meaning: { en: 'especially, particularly', vi: 'đặc biệt là' }
          },
          {
            parts: [
              { text: '特', reading: 'とく' },
              { text: '別', reading: 'べつ' }
            ],
            meaning: { en: 'special', vi: 'đặc biệt' }
          },
          {
            parts: [
              { text: '特', reading: 'とっ' },
              { text: '急', reading: 'きゅう' }
            ],
            meaning: { en: 'limited express (train)', vi: 'tàu tốc hành đặc biệt' }
          }
        ]
      },
      {
        char: '単',
        meaning: { en: 'single, simple', vi: 'đơn - đơn, đơn giản; đơn lẻ' },
        onyomi: ['タン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'One thing on its own, nothing added: single, simple.',
          vi: 'Một thứ đứng riêng, không thêm gì: đơn, đơn giản, đơn lẻ.'
        },
        examples: [
          {
            parts: [
              { text: '単', reading: 'たん' },
              { text: '語', reading: 'ご' }
            ],
            meaning: { en: 'word, vocabulary item', vi: 'từ vựng' }
          },
          {
            parts: [
              { text: '単', reading: 'たん' },
              { text: '位', reading: 'い' }
            ],
            meaning: { en: 'unit; credit (school)', vi: 'đơn vị; tín chỉ' }
          },
          {
            parts: [
              { text: '単', reading: 'たん' },
              { text: '数', reading: 'すう' }
            ],
            meaning: { en: 'singular (grammar)', vi: 'số ít' }
          }
        ]
      },
      {
        char: '加',
        meaning: { en: 'to add, to increase', vi: 'gia - thêm vào, tăng' },
        onyomi: ['カ'],
        kunyomi: ['くわ.える', 'くわ.わる'],
        components: ['力', '口'],
        mnemonic: {
          en: 'Putting strength 力 behind your words 口 to pile more on: to add, to increase.',
          vi: 'Dồn sức 力 vào lời nói 口 để chất thêm: thêm vào, tăng.'
        },
        examples: [
          {
            parts: [
              { text: '加', reading: 'くわ' },
              { text: 'え', reading: 'え' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to add', vi: 'thêm vào' }
          },
          {
            parts: [
              { text: '参', reading: 'さん' },
              { text: '加', reading: 'か' }
            ],
            meaning: { en: 'participation', vi: 'tham gia' }
          },
          {
            parts: [
              { text: '加', reading: 'か' },
              { text: '入', reading: 'にゅう' }
            ],
            meaning: { en: 'joining, enrollment', vi: 'gia nhập' }
          }
        ]
      },
      {
        char: '案',
        meaning: {
          en: 'plan, idea, proposal',
          vi: 'án - phương án, ý tưởng; đề án'
        },
        onyomi: ['アン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Sitting peacefully 安 at a wooden 木 desk to think things through: a plan, an idea, a proposal.',
          vi: 'Ngồi yên 安 bên bàn gỗ 木 nghĩ cho thấu: phương án, ý tưởng, đề án.'
        },
        examples: [
          {
            parts: [{ text: '案', reading: 'あん' }],
            meaning: { en: 'idea, plan', vi: 'ý tưởng, phương án' }
          },
          {
            parts: [
              { text: '案', reading: 'あん' },
              { text: '内', reading: 'ない' }
            ],
            meaning: { en: 'guidance, information', vi: 'sự hướng dẫn, chỉ dẫn' }
          },
          {
            parts: [
              { text: '名', reading: 'めい' },
              { text: '案', reading: 'あん' }
            ],
            meaning: { en: 'good idea', vi: 'ý hay, diệu kế' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Position, marks & things',
      vi: 'Vị trí, dấu hiệu & đồ vật'
    },
    kanji: [
      {
        char: '位',
        meaning: { en: 'rank, position; unit', vi: 'vị - vị trí, ngôi thứ; đơn vị' },
        onyomi: ['イ'],
        kunyomi: ['くらい'],
        components: [],
        mnemonic: {
          en: 'A person 亻 standing 立 in their assigned spot: a rank, a position, a place.',
          vi: 'Một người 亻 đứng 立 đúng chỗ được xếp: vị trí, ngôi thứ.'
        },
        examples: [
          {
            parts: [{ text: '位', reading: 'くらい' }],
            meaning: { en: 'rank, grade', vi: 'ngôi thứ, cấp bậc' }
          },
          {
            parts: [
              { text: '一', reading: 'いち' },
              { text: '位', reading: 'い' }
            ],
            meaning: { en: 'first place', vi: 'hạng nhất' }
          },
          {
            parts: [
              { text: '地', reading: 'ち' },
              { text: '位', reading: 'い' }
            ],
            meaning: { en: 'status, standing', vi: 'địa vị' }
          }
        ]
      },
      {
        char: '低',
        meaning: { en: 'low', vi: 'đê - thấp' },
        onyomi: ['テイ'],
        kunyomi: ['ひく.い'],
        components: [],
        mnemonic: {
          en: 'A person 亻 crouching down close to the ground: low.',
          vi: 'Một người 亻 khom xuống sát mặt đất: thấp.'
        },
        examples: [
          {
            parts: [
              { text: '低', reading: 'ひく' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'low', vi: 'thấp' }
          },
          {
            parts: [
              { text: '低', reading: 'てい' },
              { text: '音', reading: 'おん' }
            ],
            meaning: { en: 'low pitch, bass', vi: 'âm trầm' }
          },
          {
            parts: [
              { text: '低', reading: 'てい' },
              { text: '下', reading: 'か' }
            ],
            meaning: { en: 'decline, drop', vi: 'sự sụt giảm' }
          }
        ]
      },
      {
        char: '底',
        meaning: { en: 'bottom', vi: 'để - đáy' },
        onyomi: ['テイ'],
        kunyomi: ['そこ'],
        components: [],
        mnemonic: {
          en: 'The lowest floor under a building 广, where everything rests: the bottom.',
          vi: 'Tầng thấp nhất dưới tòa nhà 广, nơi mọi thứ nằm lên: đáy.'
        },
        examples: [
          {
            parts: [{ text: '底', reading: 'そこ' }],
            meaning: { en: 'bottom', vi: 'đáy' }
          },
          {
            parts: [
              { text: '海', reading: 'かい' },
              { text: '底', reading: 'てい' }
            ],
            meaning: { en: 'seabed, ocean floor', vi: 'đáy biển' }
          },
          {
            parts: [
              { text: '川', reading: 'かわ' },
              { text: '底', reading: 'ぞこ' }
            ],
            meaning: { en: 'riverbed', vi: 'đáy sông' }
          }
        ]
      },
      {
        char: '停',
        meaning: { en: 'to stop, to halt', vi: 'đình - dừng, ngừng lại' },
        onyomi: ['テイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A person 亻 pausing at a roadside pavilion to stop and rest: to stop, to halt.',
          vi: 'Một người 亻 dừng ở cái đình bên đường để nghỉ: dừng, ngừng lại.'
        },
        examples: [
          {
            parts: [
              { text: '停', reading: 'てい' },
              { text: '止', reading: 'し' }
            ],
            meaning: { en: 'a stop, a halt', vi: 'sự dừng lại' }
          },
          {
            parts: [
              { text: '停', reading: 'てい' },
              { text: '電', reading: 'でん' }
            ],
            meaning: { en: 'power outage', vi: 'mất điện' }
          },
          {
            parts: [
              { text: '停', reading: 'てい' },
              { text: '車', reading: 'しゃ' }
            ],
            meaning: { en: 'stopping (a vehicle)', vi: 'dừng xe' }
          }
        ]
      },
      {
        char: '側',
        meaning: { en: 'side, next to', vi: 'trắc - phía, bên' },
        onyomi: ['ソク'],
        kunyomi: ['がわ', 'かわ'],
        components: [],
        mnemonic: {
          en: 'A person 亻 standing off to one side by the rules: a side, next to.',
          vi: 'Một người 亻 đứng lệch sang một bên: phía, bên cạnh.'
        },
        examples: [
          {
            parts: [{ text: '側', reading: 'がわ' }],
            meaning: { en: 'side', vi: 'phía, bên' }
          },
          {
            parts: [
              { text: '右', reading: 'みぎ' },
              { text: '側', reading: 'がわ' }
            ],
            meaning: { en: 'right side', vi: 'bên phải' }
          },
          {
            parts: [
              { text: '両', reading: 'りょう' },
              { text: '側', reading: 'がわ' }
            ],
            meaning: { en: 'both sides', vi: 'cả hai bên' }
          }
        ]
      },
      {
        char: '各',
        meaning: { en: 'each, every', vi: 'các - mỗi, các' },
        onyomi: ['カク'],
        kunyomi: ['おのおの'],
        components: [],
        mnemonic: {
          en: 'A foot arriving at each doorway 口 in turn: each, every.',
          vi: 'Bàn chân lần lượt đến từng cửa 口: mỗi, các.'
        },
        examples: [
          {
            parts: [{ text: '各', reading: 'かく' }],
            meaning: { en: 'each, every', vi: 'mỗi, các' }
          },
          {
            parts: [
              { text: '各', reading: 'かく' },
              { text: '自', reading: 'じ' }
            ],
            meaning: { en: 'each person, individually', vi: 'mỗi người, riêng từng người' }
          },
          {
            parts: [
              { text: '各', reading: 'かっ' },
              { text: '国', reading: 'こく' }
            ],
            meaning: { en: 'each country', vi: 'các nước' }
          }
        ]
      },
      {
        char: '印',
        meaning: { en: 'seal, stamp; mark', vi: 'ấn - con dấu; dấu hiệu' },
        onyomi: ['イン'],
        kunyomi: ['しるし'],
        components: [],
        mnemonic: {
          en: 'A hand pressing a seal down onto a document: a seal, a stamp, a mark.',
          vi: 'Một bàn tay ấn con dấu xuống văn bản: con dấu, dấu ấn, dấu hiệu.'
        },
        examples: [
          {
            parts: [{ text: '印', reading: 'しるし' }],
            meaning: { en: 'mark, sign', vi: 'dấu, ký hiệu' }
          },
          {
            parts: [
              { text: '目', reading: 'め' },
              { text: '印', reading: 'じるし' }
            ],
            meaning: { en: 'landmark, sign', vi: 'dấu mốc, mốc nhận biết' }
          },
          {
            parts: [
              { text: '印', reading: 'いん' },
              { text: '刷', reading: 'さつ' }
            ],
            meaning: { en: 'printing', vi: 'in ấn' }
          }
        ]
      },
      {
        char: '標',
        meaning: { en: 'mark, sign; target', vi: 'tiêu - dấu hiệu, mốc; tiêu chuẩn' },
        onyomi: ['ヒョウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A wooden 木 post put up as a marker or signpost: a mark, a sign, a target.',
          vi: 'Một cọc gỗ 木 dựng lên làm mốc hay biển chỉ: dấu hiệu, cột mốc, mục tiêu.'
        },
        examples: [
          {
            parts: [
              { text: '目', reading: 'もく' },
              { text: '標', reading: 'ひょう' }
            ],
            meaning: { en: 'goal, target', vi: 'mục tiêu' }
          },
          {
            parts: [
              { text: '標', reading: 'ひょう' },
              { text: '識', reading: 'しき' }
            ],
            meaning: { en: 'a sign, a marker', vi: 'biển báo' }
          },
          {
            parts: [
              { text: '標', reading: 'ひょう' },
              { text: '準', reading: 'じゅん' }
            ],
            meaning: { en: 'standard, norm', vi: 'tiêu chuẩn' }
          }
        ]
      },
      {
        char: '的',
        meaning: {
          en: 'target; -ic, -al (suffix)',
          vi: 'đích - mục tiêu; tính chất (-tính)'
        },
        onyomi: ['テキ'],
        kunyomi: ['まと'],
        components: [],
        mnemonic: {
          en: 'A white 白 bullseye you aim at: a target, and the suffix that makes adjectives.',
          vi: 'Cái hồng tâm trắng 白 để nhắm bắn: mục tiêu, cái đích, và hậu tố tạo tính từ (-tính).'
        },
        examples: [
          {
            parts: [
              { text: '目', reading: 'もく' },
              { text: '的', reading: 'てき' }
            ],
            meaning: { en: 'purpose, aim', vi: 'mục đích' }
          },
          {
            parts: [{ text: '的', reading: 'まと' }],
            meaning: { en: 'target, mark', vi: 'cái đích, bia' }
          },
          {
            parts: [
              { text: '目', reading: 'もく' },
              { text: '的', reading: 'てき' },
              { text: '地', reading: 'ち' }
            ],
            meaning: { en: 'destination', vi: 'điểm đến' }
          }
        ]
      },
      {
        char: '束',
        meaning: { en: 'bundle; to bind; promise', vi: 'thúc - bó; ràng buộc' },
        onyomi: ['ソク'],
        kunyomi: ['たば'],
        components: [],
        mnemonic: {
          en: 'Firewood 木 tied together in the middle into a bundle: a bundle, to bind, and a promise (a binding word).',
          vi: 'Củi gỗ 木 bó lại ở giữa thành một bó: bó, ràng buộc, và lời hứa (lời ràng buộc).'
        },
        examples: [
          {
            parts: [{ text: '束', reading: 'たば' }],
            meaning: { en: 'bundle', vi: 'bó' }
          },
          {
            parts: [
              { text: '約', reading: 'やく' },
              { text: '束', reading: 'そく' }
            ],
            meaning: { en: 'promise', vi: 'lời hứa' }
          },
          {
            parts: [
              { text: '花', reading: 'はな' },
              { text: '束', reading: 'たば' }
            ],
            meaning: { en: 'bouquet', vi: 'bó hoa' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Change, divide & continue',
      vi: 'Thay đổi, chia tách & tiếp nối'
    },
    kanji: [
      {
        char: '選',
        meaning: { en: 'to choose, to select', vi: 'tuyển - chọn, tuyển chọn' },
        onyomi: ['セン'],
        kunyomi: ['えら.ぶ'],
        components: [],
        mnemonic: {
          en: 'Going 辶 among many and picking out the ones you want: to choose, to select.',
          vi: 'Đi 辶 giữa nhiều thứ và lựa ra cái mình muốn: chọn, tuyển chọn.'
        },
        examples: [
          {
            parts: [
              { text: '選', reading: 'えら' },
              { text: 'ぶ', reading: 'ぶ' }
            ],
            meaning: { en: 'to choose', vi: 'chọn' }
          },
          {
            parts: [
              { text: '選', reading: 'せん' },
              { text: '手', reading: 'しゅ' }
            ],
            meaning: { en: 'athlete, player', vi: 'tuyển thủ, vận động viên' }
          },
          {
            parts: [
              { text: '選', reading: 'せん' },
              { text: '挙', reading: 'きょ' }
            ],
            meaning: { en: 'election', vi: 'bầu cử' }
          }
        ]
      },
      {
        char: '挙',
        meaning: {
          en: 'to raise, to cite; to hold (an event)',
          vi: 'cử - giơ lên; nêu ra; tổ chức'
        },
        onyomi: ['キョ'],
        kunyomi: ['あ.げる'],
        components: [],
        mnemonic: {
          en: 'Raising both hands 手 up high to put something forward: to raise, to cite, to hold an event.',
          vi: 'Giơ đôi tay 手 lên cao để đưa ra: giơ lên, nêu ra, tổ chức.'
        },
        examples: [
          {
            parts: [
              { text: '挙', reading: 'あ' },
              { text: 'げ', reading: 'げ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to raise, to cite', vi: 'giơ lên, nêu ra' }
          },
          {
            parts: [
              { text: '選', reading: 'せん' },
              { text: '挙', reading: 'きょ' }
            ],
            meaning: { en: 'election', vi: 'bầu cử' }
          },
          {
            parts: [
              { text: '挙', reading: 'きょ' },
              { text: '手', reading: 'しゅ' }
            ],
            meaning: { en: "raising one's hand", vi: 'giơ tay' }
          }
        ]
      },
      {
        char: '差',
        meaning: { en: 'difference; to hold out', vi: 'sai - sự khác biệt; chìa ra' },
        onyomi: ['サ'],
        kunyomi: ['さ.す'],
        components: [],
        mnemonic: {
          en: 'A hand held out unevenly, one side off from the other: a difference, a gap, to hold out.',
          vi: 'Bàn tay chìa ra lệch, bên này khác bên kia: sự khác biệt, chênh lệch, chìa ra.'
        },
        examples: [
          {
            parts: [{ text: '差', reading: 'さ' }],
            meaning: { en: 'difference, gap', vi: 'sự chênh lệch' }
          },
          {
            parts: [
              { text: '差', reading: 'さ' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to hold up (an umbrella), to insert', vi: 'che (ô), cắm' }
          },
          {
            parts: [
              { text: '時', reading: 'じ' },
              { text: '差', reading: 'さ' }
            ],
            meaning: { en: 'time difference', vi: 'chênh lệch múi giờ' }
          }
        ]
      },
      {
        char: '折',
        meaning: { en: 'to fold, to break, to bend', vi: 'chiết - gấp; bẻ gãy' },
        onyomi: ['セツ'],
        kunyomi: ['お.る', 'お.れる'],
        components: [],
        mnemonic: {
          en: 'A hand 扌 taking an axe 斤 to snap a branch in two: to fold, to break, to bend.',
          vi: 'Bàn tay 扌 cầm rìu 斤 bẻ gãy cành làm đôi: gấp, bẻ gãy, uốn.'
        },
        examples: [
          {
            parts: [
              { text: '折', reading: 'お' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to fold, to break', vi: 'gấp, bẻ gãy' }
          },
          {
            parts: [
              { text: '折', reading: 'お' },
              { text: 'れ', reading: 'れ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to snap, to break', vi: 'bị gãy' }
          },
          {
            parts: [
              { text: '折', reading: 'お' },
              { text: 'り', reading: 'り' },
              { text: '紙', reading: 'がみ' }
            ],
            meaning: { en: 'origami (paper folding)', vi: 'origami, gấp giấy' }
          }
        ]
      },
      {
        char: '節',
        meaning: {
          en: 'node, joint; season; moderation',
          vi: 'tiết - đốt; mùa, dịp; tiết chế'
        },
        onyomi: ['セツ', 'セチ'],
        kunyomi: ['ふし'],
        components: [],
        mnemonic: {
          en: 'The joints 竹 that divide a bamboo stalk into sections: a node, a joint, a season, moderation.',
          vi: 'Những đốt 竹 chia thân tre thành khúc: đốt, mấu, mùa/dịp, tiết chế.'
        },
        examples: [
          {
            parts: [
              { text: '季', reading: 'き' },
              { text: '節', reading: 'せつ' }
            ],
            meaning: { en: 'season', vi: 'mùa' }
          },
          {
            parts: [
              { text: '節', reading: 'せつ' },
              { text: '約', reading: 'やく' }
            ],
            meaning: { en: 'thrift, saving', vi: 'tiết kiệm' }
          },
          {
            parts: [
              { text: '音', reading: 'おん' },
              { text: '節', reading: 'せつ' }
            ],
            meaning: { en: 'syllable', vi: 'âm tiết' }
          }
        ]
      },
      {
        char: '副',
        meaning: { en: 'secondary, deputy, vice-', vi: 'phó - phụ, phó (thứ hai)' },
        onyomi: ['フク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A copy cut off from the main one to serve alongside it: secondary, deputy, vice-.',
          vi: 'Một bản sao cắt ra từ bản chính để đi kèm: phụ, phó, thứ yếu.'
        },
        examples: [
          {
            parts: [
              { text: '副', reading: 'ふく' },
              { text: '業', reading: 'ぎょう' }
            ],
            meaning: { en: 'side job', vi: 'nghề tay trái' }
          },
          {
            parts: [
              { text: '副', reading: 'ふく' },
              { text: '食', reading: 'しょく' }
            ],
            meaning: { en: 'side dish', vi: 'món ăn kèm' }
          },
          {
            parts: [
              { text: '副', reading: 'ふく' },
              { text: '題', reading: 'だい' }
            ],
            meaning: { en: 'subtitle', vi: 'tiêu đề phụ' }
          }
        ]
      },
      {
        char: '別',
        meaning: { en: 'separate, different; to part', vi: 'biệt - riêng, khác; chia tay' },
        onyomi: ['ベツ'],
        kunyomi: ['わか.れる'],
        components: [],
        mnemonic: {
          en: 'A knife 刂 cutting things apart into separate pieces: separate, different, to part.',
          vi: 'Con dao 刂 cắt mọi thứ ra thành phần riêng: riêng, khác, chia tay.'
        },
        examples: [
          {
            parts: [{ text: '別', reading: 'べつ' }],
            meaning: { en: 'separate, another', vi: 'riêng, khác' }
          },
          {
            parts: [
              { text: '別', reading: 'わか' },
              { text: 'れ', reading: 'れ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to part, to separate', vi: 'chia tay, chia lìa' }
          },
          {
            parts: [
              { text: '特', reading: 'とく' },
              { text: '別', reading: 'べつ' }
            ],
            meaning: { en: 'special', vi: 'đặc biệt' }
          }
        ]
      },
      {
        char: '変',
        meaning: { en: 'to change; strange', vi: 'biến - thay đổi; kỳ lạ' },
        onyomi: ['ヘン'],
        kunyomi: ['か.わる', 'か.える'],
        components: [],
        mnemonic: {
          en: 'Something turning into a different form than before: to change, and strange, odd.',
          vi: 'Thứ gì đó hóa thành hình dạng khác trước: thay đổi, và kỳ lạ.'
        },
        examples: [
          {
            parts: [
              { text: '変', reading: 'か' },
              { text: 'わ', reading: 'わ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to change', vi: 'thay đổi' }
          },
          {
            parts: [
              { text: '大', reading: 'たい' },
              { text: '変', reading: 'へん' }
            ],
            meaning: { en: 'very; terrible, tough', vi: 'rất; vất vả, khủng khiếp' }
          },
          {
            parts: [
              { text: '変', reading: 'へん' },
              { text: '化', reading: 'か' }
            ],
            meaning: { en: 'change, transformation', vi: 'sự biến đổi' }
          }
        ]
      },
      {
        char: '続',
        meaning: { en: 'to continue, to keep on', vi: 'tục - tiếp tục, nối tiếp' },
        onyomi: ['ゾク'],
        kunyomi: ['つづ.く', 'つづ.ける'],
        components: [],
        mnemonic: {
          en: 'Threads 糸 joined end to end without a break: to continue, to keep on.',
          vi: 'Những sợi chỉ 糸 nối đầu này qua đầu kia không đứt: tiếp tục, nối tiếp.'
        },
        examples: [
          {
            parts: [
              { text: '続', reading: 'つづ' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to continue (intransitive)', vi: 'tiếp tục (diễn ra)' }
          },
          {
            parts: [
              { text: '続', reading: 'つづ' },
              { text: 'け', reading: 'け' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to continue (transitive)', vi: 'tiếp tục làm' }
          },
          {
            parts: [
              { text: '連', reading: 'れん' },
              { text: '続', reading: 'ぞく' }
            ],
            meaning: { en: 'continuation, series', vi: 'liên tục, liên tiếp' }
          }
        ]
      },
      {
        char: '争',
        meaning: {
          en: 'to contend, to compete, to dispute',
          vi: 'tranh - tranh giành, tranh chấp'
        },
        onyomi: ['ソウ'],
        kunyomi: ['あらそ.う'],
        components: [],
        mnemonic: {
          en: 'Two hands pulling at the same thing from opposite ends: to contend, to compete, to dispute.',
          vi: 'Hai bàn tay giằng cùng một vật từ hai đầu: tranh giành, tranh chấp.'
        },
        examples: [
          {
            parts: [
              { text: '争', reading: 'あらそ' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to compete, to dispute', vi: 'tranh giành, cãi nhau' }
          },
          {
            parts: [
              { text: '戦', reading: 'せん' },
              { text: '争', reading: 'そう' }
            ],
            meaning: { en: 'war', vi: 'chiến tranh' }
          },
          {
            parts: [
              { text: '競', reading: 'きょう' },
              { text: '争', reading: 'そう' }
            ],
            meaning: { en: 'competition', vi: 'sự cạnh tranh' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Money, benefit & goods',
      vi: 'Tiền bạc, lợi ích & đồ vật'
    },
    kanji: [
      {
        char: '貨',
        meaning: { en: 'goods, currency, freight', vi: 'hóa - hàng hóa; tiền tệ' },
        onyomi: ['カ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Things that change 化 hands for money 貝: goods, currency, freight.',
          vi: 'Những thứ đổi 化 lấy tiền 貝: hàng hóa, tiền tệ, hàng vận chuyển.'
        },
        examples: [
          {
            parts: [
              { text: '貨', reading: 'か' },
              { text: '物', reading: 'もつ' }
            ],
            meaning: { en: 'freight, cargo', vi: 'hàng hóa (vận chuyển)' }
          },
          {
            parts: [
              { text: '通', reading: 'つう' },
              { text: '貨', reading: 'か' }
            ],
            meaning: { en: 'currency', vi: 'tiền tệ' }
          },
          {
            parts: [
              { text: '金', reading: 'きん' },
              { text: '貨', reading: 'か' }
            ],
            meaning: { en: 'gold coin', vi: 'tiền vàng' }
          }
        ]
      },
      {
        char: '億',
        meaning: { en: 'hundred million', vi: 'ức - trăm triệu (10^8)' },
        onyomi: ['オク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A number so huge a person 亻 can barely imagine 意 it: a hundred million.',
          vi: 'Một con số lớn đến mức người 亻 khó tưởng tượng 意 nổi: trăm triệu.'
        },
        examples: [
          {
            parts: [{ text: '億', reading: 'おく' }],
            meaning: { en: 'hundred million', vi: 'trăm triệu' }
          },
          {
            parts: [
              { text: '一', reading: 'いち' },
              { text: '億', reading: 'おく' }
            ],
            meaning: { en: 'one hundred million', vi: 'một trăm triệu' }
          },
          {
            parts: [
              { text: '数', reading: 'すう' },
              { text: '億', reading: 'おく' }
            ],
            meaning: { en: 'several hundred million', vi: 'vài trăm triệu' }
          }
        ]
      },
      {
        char: '兆',
        meaning: { en: 'trillion; omen, sign', vi: 'triệu - nghìn tỷ (10^12); điềm báo' },
        onyomi: ['チョウ'],
        kunyomi: ['きざ.し'],
        components: [],
        mnemonic: {
          en: 'The cracks that appeared on a heated tortoise shell, read as omens; also a huge number: a trillion, a sign.',
          vi: 'Những vết nứt hiện trên mai rùa nung để bói điềm; cũng là con số khổng lồ: nghìn tỷ, điềm báo.'
        },
        examples: [
          {
            parts: [{ text: '兆', reading: 'ちょう' }],
            meaning: { en: 'trillion', vi: 'nghìn tỷ' }
          },
          {
            parts: [
              { text: '一', reading: 'いっ' },
              { text: '兆', reading: 'ちょう' }
            ],
            meaning: { en: 'one trillion', vi: 'một nghìn tỷ' }
          },
          {
            parts: [
              { text: '前', reading: 'ぜん' },
              { text: '兆', reading: 'ちょう' }
            ],
            meaning: { en: 'omen, sign, indication', vi: 'điềm báo, dấu hiệu' }
          }
        ]
      },
      {
        char: '貯',
        meaning: { en: 'to save, to store up', vi: 'trữ - tích trữ, để dành' },
        onyomi: ['チョ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Putting money 貝 away in a safe box to keep: to save, to store up.',
          vi: 'Cất tiền 貝 vào hòm để giữ: tích trữ, để dành.'
        },
        examples: [
          {
            parts: [
              { text: '貯', reading: 'ちょ' },
              { text: '金', reading: 'きん' }
            ],
            meaning: { en: 'savings', vi: 'tiền tiết kiệm' }
          },
          {
            parts: [
              { text: '貯', reading: 'ちょ' },
              { text: '水', reading: 'すい' },
              { text: '池', reading: 'ち' }
            ],
            meaning: { en: 'reservoir', vi: 'hồ chứa nước' }
          }
        ]
      },
      {
        char: '費',
        meaning: { en: 'expense, cost; to spend', vi: 'phí - chi phí, tiêu tốn' },
        onyomi: ['ヒ'],
        kunyomi: ['つい.やす'],
        components: [],
        mnemonic: {
          en: 'Money 貝 flying out as it gets spent: expense, cost, to use up.',
          vi: 'Tiền 貝 bay ra khi tiêu xài: chi phí, tiêu tốn.'
        },
        examples: [
          {
            parts: [
              { text: '費', reading: 'ひ' },
              { text: '用', reading: 'よう' }
            ],
            meaning: { en: 'cost, expense', vi: 'chi phí' }
          },
          {
            parts: [
              { text: '会', reading: 'かい' },
              { text: '費', reading: 'ひ' }
            ],
            meaning: { en: 'membership fee', vi: 'hội phí' }
          },
          {
            parts: [
              { text: '消', reading: 'しょう' },
              { text: '費', reading: 'ひ' }
            ],
            meaning: { en: 'consumption', vi: 'tiêu dùng, tiêu thụ' }
          }
        ]
      },
      {
        char: '給',
        meaning: { en: 'to supply, to give; salary', vi: 'cấp - cấp phát; lương' },
        onyomi: ['キュウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Handing out threads 糸 to bring things together 合 and provide: to supply, to give, salary.',
          vi: 'Phát sợi chỉ 糸 để gom lại 合 và cung cấp: cấp phát, cung cấp, lương.'
        },
        examples: [
          {
            parts: [
              { text: '給', reading: 'きゅう' },
              { text: '料', reading: 'りょう' }
            ],
            meaning: { en: 'salary, pay', vi: 'lương' }
          },
          {
            parts: [
              { text: '給', reading: 'きゅう' },
              { text: '食', reading: 'しょく' }
            ],
            meaning: { en: 'school lunch (provided meal)', vi: 'bữa ăn ở trường' }
          },
          {
            parts: [
              { text: '時', reading: 'じ' },
              { text: '給', reading: 'きゅう' }
            ],
            meaning: { en: 'hourly wage', vi: 'lương theo giờ' }
          }
        ]
      },
      {
        char: '利',
        meaning: { en: 'profit, advantage; sharp', vi: 'lợi - lợi ích; sắc bén' },
        onyomi: ['リ'],
        kunyomi: ['き.く'],
        components: [],
        mnemonic: {
          en: 'A sharp blade 刂 cutting grain 禾 efficiently for gain: profit, advantage, sharp.',
          vi: 'Lưỡi dao 刂 sắc cắt lúa 禾 hiệu quả để thu lợi: lợi ích, sắc bén.'
        },
        examples: [
          {
            parts: [
              { text: '利', reading: 'り' },
              { text: '用', reading: 'よう' }
            ],
            meaning: { en: 'use, utilization', vi: 'sử dụng, tận dụng' }
          },
          {
            parts: [
              { text: '便', reading: 'べん' },
              { text: '利', reading: 'り' }
            ],
            meaning: { en: 'convenient', vi: 'tiện lợi' }
          },
          {
            parts: [
              { text: '有', reading: 'ゆう' },
              { text: '利', reading: 'り' }
            ],
            meaning: { en: 'advantageous, favorable', vi: 'có lợi, thuận lợi' }
          }
        ]
      },
      {
        char: '便',
        meaning: {
          en: 'convenience; mail; flight',
          vi: 'tiện - tiện lợi; thư từ; chuyến (bay)'
        },
        onyomi: ['ベン', 'ビン'],
        kunyomi: ['たよ.り'],
        components: [],
        mnemonic: {
          en: 'A person 亻 arranging things to be handy and smooth: convenience, and mail or a flight that carries word.',
          vi: 'Một người 亻 sắp đặt mọi thứ cho thuận tiện: tiện lợi, và thư từ hoặc chuyến (bay) đưa tin.'
        },
        examples: [
          {
            parts: [
              { text: '便', reading: 'べん' },
              { text: '利', reading: 'り' }
            ],
            meaning: { en: 'convenient', vi: 'tiện lợi' }
          },
          {
            parts: [
              { text: '郵', reading: 'ゆう' },
              { text: '便', reading: 'びん' }
            ],
            meaning: { en: 'mail, post', vi: 'bưu điện, thư tín' }
          },
          {
            parts: [
              { text: '便', reading: 'べん' },
              { text: '所', reading: 'じょ' }
            ],
            meaning: { en: 'toilet, lavatory', vi: 'nhà vệ sinh' }
          }
        ]
      },
      {
        char: '良',
        meaning: { en: 'good, fine', vi: 'lương - tốt, tốt đẹp' },
        onyomi: ['リョウ'],
        kunyomi: ['よ.い', 'い.い'],
        components: [],
        mnemonic: {
          en: 'Grains sifted to keep only the fine ones: good, fine, of quality.',
          vi: 'Hạt gạo sàng lọc chỉ giữ hạt ngon: tốt, tốt đẹp, có chất lượng.'
        },
        examples: [
          {
            parts: [
              { text: '良', reading: 'よ' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'good', vi: 'tốt' }
          },
          {
            parts: [
              { text: '良', reading: 'りょう' },
              { text: '心', reading: 'しん' }
            ],
            meaning: { en: 'conscience', vi: 'lương tâm' }
          },
          {
            parts: [
              { text: '改', reading: 'かい' },
              { text: '良', reading: 'りょう' }
            ],
            meaning: { en: 'improvement', vi: 'cải tiến' }
          }
        ]
      },
      {
        char: '器',
        meaning: { en: 'vessel, container; instrument', vi: 'khí - đồ đựng, dụng cụ' },
        onyomi: ['キ'],
        kunyomi: ['うつわ'],
        components: [],
        mnemonic: {
          en: 'Several open mouths 口 like bowls set around, holding things: a container, an instrument.',
          vi: 'Mấy cái miệng 口 mở như những cái bát đặt quanh, đựng đồ: đồ đựng, dụng cụ.'
        },
        examples: [
          {
            parts: [
              { text: '食', reading: 'しょっ' },
              { text: '器', reading: 'き' }
            ],
            meaning: { en: 'tableware, dishes', vi: 'bát đĩa, đồ dùng ăn' }
          },
          {
            parts: [
              { text: '楽', reading: 'がっ' },
              { text: '器', reading: 'き' }
            ],
            meaning: { en: 'musical instrument', vi: 'nhạc cụ' }
          },
          {
            parts: [{ text: '器', reading: 'うつわ' }],
            meaning: { en: 'vessel, bowl', vi: 'cái bát, đồ đựng' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'People & relations',
      vi: 'Con người & quan hệ'
    },
    kanji: [
      {
        char: '氏',
        meaning: { en: 'clan, surname; Mr.', vi: 'thị - họ; ông (kính)' },
        onyomi: ['シ'],
        kunyomi: ['うじ'],
        components: [],
        mnemonic: {
          en: 'A picture of a root standing for a family line: a clan, a surname, and the polite "Mr."',
          vi: 'Hình cái rễ cây tượng trưng cho dòng họ: họ tộc, họ, và cách gọi lịch sự "ông".'
        },
        examples: [
          {
            parts: [
              { text: '氏', reading: 'し' },
              { text: '名', reading: 'めい' }
            ],
            meaning: { en: 'full name', vi: 'họ tên' }
          },
          {
            parts: [{ text: '氏', reading: 'うじ' }],
            meaning: { en: 'clan, family', vi: 'họ tộc' }
          },
          {
            parts: [
              { text: '彼', reading: 'かれ' },
              { text: '氏', reading: 'し' }
            ],
            meaning: { en: 'boyfriend', vi: 'bạn trai' }
          }
        ]
      },
      {
        char: '児',
        meaning: { en: 'child, infant', vi: 'nhi - trẻ nhỏ, hài nhi' },
        onyomi: ['ジ', 'ニ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A little one with a soft, open head, a small child: an infant, a child.',
          vi: 'Một đứa bé đầu còn mềm, trẻ nhỏ: hài nhi, trẻ em.'
        },
        examples: [
          {
            parts: [
              { text: '児', reading: 'じ' },
              { text: '童', reading: 'どう' }
            ],
            meaning: { en: 'children, pupils', vi: 'nhi đồng, trẻ em' }
          },
          {
            parts: [
              { text: '育', reading: 'いく' },
              { text: '児', reading: 'じ' }
            ],
            meaning: { en: 'childcare', vi: 'nuôi dạy trẻ' }
          },
          {
            parts: [
              { text: '小', reading: 'しょう' },
              { text: '児', reading: 'に' },
              { text: '科', reading: 'か' }
            ],
            meaning: { en: 'pediatrics', vi: 'khoa nhi' }
          }
        ]
      },
      {
        char: '孫',
        meaning: { en: 'grandchild', vi: 'tôn - cháu (nội, ngoại)' },
        onyomi: ['ソン'],
        kunyomi: ['まご'],
        components: [],
        mnemonic: {
          en: 'A child 子 connected by a thread 系 down the family line: a grandchild.',
          vi: 'Đứa con 子 nối tiếp bằng sợi dây 系 dòng dõi: đứa cháu.'
        },
        examples: [
          {
            parts: [{ text: '孫', reading: 'まご' }],
            meaning: { en: 'grandchild', vi: 'cháu' }
          },
          {
            parts: [
              { text: '子', reading: 'し' },
              { text: '孫', reading: 'そん' }
            ],
            meaning: { en: 'descendants', vi: 'con cháu, hậu duệ' }
          },
          {
            parts: [
              { text: '初', reading: 'はつ' },
              { text: '孫', reading: 'まご' }
            ],
            meaning: { en: 'first grandchild', vi: 'cháu đầu' }
          }
        ]
      },
      {
        char: '夫',
        meaning: { en: 'husband; man', vi: 'phu - chồng; người đàn ông' },
        onyomi: ['フ', 'フウ'],
        kunyomi: ['おっと'],
        components: [],
        mnemonic: {
          en: 'A grown man 大 with a pin in his topknot, a full adult: a husband, a man.',
          vi: 'Một người đàn ông trưởng thành 大 cài trâm búi tóc: người chồng, đàn ông.'
        },
        examples: [
          {
            parts: [{ text: '夫', reading: 'おっと' }],
            meaning: { en: 'husband', vi: 'chồng' }
          },
          {
            parts: [
              { text: '夫', reading: 'ふう' },
              { text: '婦', reading: 'ふ' }
            ],
            meaning: { en: 'married couple', vi: 'vợ chồng' }
          },
          {
            parts: [
              { text: '工', reading: 'く' },
              { text: '夫', reading: 'ふう' }
            ],
            meaning: { en: 'ingenuity, device', vi: 'sự sáng tạo, cách xoay xở' }
          }
        ]
      },
      {
        char: '仲',
        meaning: { en: 'relationship; go-between', vi: 'trọng - quan hệ; trung gian' },
        onyomi: ['チュウ'],
        kunyomi: ['なか'],
        components: [],
        mnemonic: {
          en: 'A person 亻 standing in the middle 中 between others: the relationship between people, a go-between.',
          vi: 'Một người 亻 đứng ở giữa 中 những người khác: mối quan hệ, người trung gian.'
        },
        examples: [
          {
            parts: [{ text: '仲', reading: 'なか' }],
            meaning: { en: 'relationship, terms', vi: 'quan hệ, tình cảm' }
          },
          {
            parts: [
              { text: '仲', reading: 'なか' },
              { text: '間', reading: 'ま' }
            ],
            meaning: { en: 'companion, comrade', vi: 'bạn bè, đồng đội' }
          },
          {
            parts: [
              { text: '仲', reading: 'なか' },
              { text: '直', reading: 'なお' },
              { text: 'り', reading: 'り' }
            ],
            meaning: { en: 'reconciliation, making up', vi: 'làm lành' }
          }
        ]
      },
      {
        char: '老',
        meaning: { en: 'old, aged; to grow old', vi: 'lão - già, cao tuổi' },
        onyomi: ['ロウ'],
        kunyomi: ['お.いる', 'ふ.ける'],
        components: [],
        mnemonic: {
          en: 'A bent old person leaning on a cane: old, aged, to grow old.',
          vi: 'Một người già còng lưng chống gậy: già, cao tuổi.'
        },
        examples: [
          {
            parts: [
              { text: '老', reading: 'ろう' },
              { text: '人', reading: 'じん' }
            ],
            meaning: { en: 'elderly person', vi: 'người già' }
          },
          {
            parts: [
              { text: '老', reading: 'ろう' },
              { text: '後', reading: 'ご' }
            ],
            meaning: { en: "one's old age", vi: 'tuổi già, lúc về già' }
          },
          {
            parts: [
              { text: '老', reading: 'お' },
              { text: 'い', reading: 'い' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to grow old', vi: 'già đi' }
          }
        ]
      },
      {
        char: '徒',
        meaning: {
          en: 'follower, pupil; on foot',
          vi: 'đồ - học trò, người theo; đi bộ'
        },
        onyomi: ['ト'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'People traveling the road 彳 on foot together as followers: a follower, a pupil, on foot.',
          vi: 'Những người đi trên đường 彳 bằng chân, theo cùng: môn đồ, học trò, đi bộ.'
        },
        examples: [
          {
            parts: [
              { text: '生', reading: 'せい' },
              { text: '徒', reading: 'と' }
            ],
            meaning: { en: 'student, pupil', vi: 'học sinh' }
          },
          {
            parts: [
              { text: '徒', reading: 'と' },
              { text: '歩', reading: 'ほ' }
            ],
            meaning: { en: 'on foot, walking', vi: 'đi bộ' }
          },
          {
            parts: [
              { text: '信', reading: 'しん' },
              { text: '徒', reading: 'と' }
            ],
            meaning: { en: 'believer, follower', vi: 'tín đồ' }
          }
        ]
      },
      {
        char: '借',
        meaning: { en: 'to borrow', vi: 'tá - mượn, vay' },
        onyomi: ['シャク'],
        kunyomi: ['か.りる'],
        components: [],
        mnemonic: {
          en: 'A person 亻 asking to use something from the old days 昔 for a while: to borrow.',
          vi: 'Một người 亻 xin dùng nhờ thứ gì đó 昔 một thời gian: mượn, vay.'
        },
        examples: [
          {
            parts: [
              { text: '借', reading: 'か' },
              { text: 'り', reading: 'り' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to borrow', vi: 'mượn, vay' }
          },
          {
            parts: [
              { text: '借', reading: 'しゃっ' },
              { text: '金', reading: 'きん' }
            ],
            meaning: { en: 'debt, loan', vi: 'nợ, khoản vay' }
          },
          {
            parts: [
              { text: '借', reading: 'しゃく' },
              { text: '家', reading: 'や' }
            ],
            meaning: { en: 'rented house', vi: 'nhà thuê' }
          }
        ]
      },
      {
        char: '信',
        meaning: { en: 'trust, belief; message', vi: 'tín - tin tưởng; tin tức' },
        onyomi: ['シン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A person 亻 who stands by their word 言: trust, belief, and a message sent.',
          vi: 'Một người 亻 giữ đúng lời nói 言: tin tưởng, niềm tin, và tin nhắn gửi đi.'
        },
        examples: [
          {
            parts: [
              { text: '信', reading: 'しん' },
              { text: 'じ', reading: 'じ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to believe', vi: 'tin, tin tưởng' }
          },
          {
            parts: [
              { text: '自', reading: 'じ' },
              { text: '信', reading: 'しん' }
            ],
            meaning: { en: 'self-confidence', vi: 'sự tự tin' }
          },
          {
            parts: [
              { text: '通', reading: 'つう' },
              { text: '信', reading: 'しん' }
            ],
            meaning: { en: 'communication', vi: 'thông tin liên lạc' }
          }
        ]
      },
      {
        char: '共',
        meaning: { en: 'together, joint, in common', vi: 'cộng - cùng, chung' },
        onyomi: ['キョウ'],
        kunyomi: ['とも'],
        components: [],
        mnemonic: {
          en: 'Two hands lifting something up together: together, joint, in common.',
          vi: 'Hai bàn tay cùng nâng một vật lên: cùng nhau, chung.'
        },
        examples: [
          {
            parts: [{ text: '共', reading: 'とも' }],
            meaning: { en: 'together, both', vi: 'cùng, cả hai' }
          },
          {
            parts: [
              { text: '共', reading: 'きょう' },
              { text: '通', reading: 'つう' }
            ],
            meaning: { en: 'common, shared', vi: 'chung, chung nhau' }
          },
          {
            parts: [
              { text: '共', reading: 'きょう' },
              { text: '同', reading: 'どう' }
            ],
            meaning: { en: 'cooperation, joint', vi: 'cộng đồng, chung sức' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Building, forming & machines',
      vi: 'Xây dựng, tạo hình & máy móc'
    },
    kanji: [
      {
        char: '建',
        meaning: { en: 'to build, to erect', vi: 'kiến - xây dựng' },
        onyomi: ['ケン', 'コン'],
        kunyomi: ['た.てる', 'た.つ'],
        components: [],
        mnemonic: {
          en: 'Drawing up plans with a brush 聿 and setting a structure upright: to build, to erect.',
          vi: 'Vẽ bản thiết kế bằng bút 聿 rồi dựng công trình lên: xây dựng.'
        },
        examples: [
          {
            parts: [
              { text: '建', reading: 'た' },
              { text: 'て', reading: 'て' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to build', vi: 'xây' }
          },
          {
            parts: [
              { text: '建', reading: 'たて' },
              { text: '物', reading: 'もの' }
            ],
            meaning: { en: 'building', vi: 'tòa nhà' }
          },
          {
            parts: [
              { text: '建', reading: 'けん' },
              { text: '設', reading: 'せつ' }
            ],
            meaning: { en: 'construction', vi: 'xây dựng, kiến thiết' }
          }
        ]
      },
      {
        char: '健',
        meaning: { en: 'healthy, robust', vi: 'kiện - khỏe mạnh, cường tráng' },
        onyomi: ['ケン'],
        kunyomi: ['すこ.やか'],
        components: [],
        mnemonic: {
          en: 'A person 亻 built 建 strong and sturdy: healthy, robust.',
          vi: 'Một người 亻 được dựng 建 vững chắc: khỏe mạnh, cường tráng.'
        },
        examples: [
          {
            parts: [
              { text: '健', reading: 'けん' },
              { text: '康', reading: 'こう' }
            ],
            meaning: { en: 'health', vi: 'sức khỏe' }
          },
          {
            parts: [
              { text: '保', reading: 'ほ' },
              { text: '健', reading: 'けん' }
            ],
            meaning: { en: 'health, hygiene', vi: 'y tế, vệ sinh sức khỏe' }
          },
          {
            parts: [
              { text: '健', reading: 'すこ' },
              { text: 'や', reading: 'や' },
              { text: 'か', reading: 'か' }
            ],
            meaning: { en: 'healthy, sound', vi: 'khỏe mạnh' }
          }
        ]
      },
      {
        char: '結',
        meaning: { en: 'to tie, to bind; to conclude', vi: 'kết - buộc, thắt; kết thúc' },
        onyomi: ['ケツ'],
        kunyomi: ['むす.ぶ', 'ゆ.う'],
        components: [],
        mnemonic: {
          en: 'Tying threads 糸 into a lucky 吉 knot to finish: to tie, to bind, to conclude.',
          vi: 'Buộc sợi chỉ 糸 thành nút cát tường 吉 để hoàn tất: buộc, thắt, kết thúc.'
        },
        examples: [
          {
            parts: [
              { text: '結', reading: 'むす' },
              { text: 'ぶ', reading: 'ぶ' }
            ],
            meaning: { en: 'to tie, to bind', vi: 'buộc, kết' }
          },
          {
            parts: [
              { text: '結', reading: 'けっ' },
              { text: '果', reading: 'か' }
            ],
            meaning: { en: 'result', vi: 'kết quả' }
          },
          {
            parts: [
              { text: '結', reading: 'けっ' },
              { text: '局', reading: 'きょく' }
            ],
            meaning: { en: 'after all, in the end', vi: 'rốt cuộc' }
          }
        ]
      },
      {
        char: '固',
        meaning: { en: 'hard, solid, firm', vi: 'cố - cứng, chắc; kiên cố' },
        onyomi: ['コ'],
        kunyomi: ['かた.い', 'かた.める'],
        components: [],
        mnemonic: {
          en: 'Something old 古 sealed tight inside a box 囗 until it sets firm: hard, solid, firm.',
          vi: 'Thứ để lâu 古 bịt kín trong hộp 囗 tới khi đông cứng: cứng, chắc, kiên cố.'
        },
        examples: [
          {
            parts: [
              { text: '固', reading: 'かた' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'hard, firm', vi: 'cứng, chắc' }
          },
          {
            parts: [
              { text: '固', reading: 'こ' },
              { text: '定', reading: 'てい' }
            ],
            meaning: { en: 'fixing, fixation', vi: 'cố định' }
          },
          {
            parts: [
              { text: '固', reading: 'こ' },
              { text: '体', reading: 'たい' }
            ],
            meaning: { en: 'solid (state)', vi: 'chất rắn' }
          }
        ]
      },
      {
        char: '成',
        meaning: { en: 'to become, to achieve, to form', vi: 'thành - trở thành; hoàn thành' },
        onyomi: ['セイ', 'ジョウ'],
        kunyomi: ['な.る', 'な.す'],
        components: [],
        mnemonic: {
          en: 'A halberd raised over completed work, a task carried through: to become, to achieve, to form.',
          vi: 'Ngọn kích giơ trên công việc đã xong, một nhiệm vụ hoàn tất: trở thành, hoàn thành.'
        },
        examples: [
          {
            parts: [
              { text: '成', reading: 'な' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to become, to consist of', vi: 'trở thành, tạo thành' }
          },
          {
            parts: [
              { text: '成', reading: 'せい' },
              { text: '功', reading: 'こう' }
            ],
            meaning: { en: 'success', vi: 'thành công' }
          },
          {
            parts: [
              { text: '完', reading: 'かん' },
              { text: '成', reading: 'せい' }
            ],
            meaning: { en: 'completion', vi: 'sự hoàn thành' }
          }
        ]
      },
      {
        char: '材',
        meaning: { en: 'timber; material', vi: 'tài - gỗ; nguyên vật liệu' },
        onyomi: ['ザイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Wood 木 with the talent 才 to be shaped into things: timber, material, stuff.',
          vi: 'Gỗ 木 có tiềm năng 才 để tạo thành vật: gỗ, nguyên vật liệu.'
        },
        examples: [
          {
            parts: [
              { text: '材', reading: 'ざい' },
              { text: '料', reading: 'りょう' }
            ],
            meaning: { en: 'materials, ingredients', vi: 'nguyên liệu' }
          },
          {
            parts: [
              { text: '木', reading: 'もく' },
              { text: '材', reading: 'ざい' }
            ],
            meaning: { en: 'lumber, timber', vi: 'gỗ (xây dựng)' }
          },
          {
            parts: [
              { text: '教', reading: 'きょう' },
              { text: '材', reading: 'ざい' }
            ],
            meaning: { en: 'teaching materials', vi: 'giáo cụ, tài liệu học' }
          }
        ]
      },
      {
        char: '械',
        meaning: { en: 'machine, device', vi: 'giới - máy móc, khí cụ' },
        onyomi: ['カイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A wooden 木 contraption of gears and levers: a machine, a device.',
          vi: 'Một bộ khung gỗ 木 đầy bánh răng, đòn bẩy: máy móc, khí cụ.'
        },
        examples: [
          {
            parts: [
              { text: '機', reading: 'き' },
              { text: '械', reading: 'かい' }
            ],
            meaning: { en: 'machine, machinery', vi: 'máy móc' }
          },
          {
            parts: [
              { text: '器', reading: 'き' },
              { text: '械', reading: 'かい' }
            ],
            meaning: { en: 'apparatus, instrument', vi: 'khí cụ, dụng cụ' }
          }
        ]
      },
      {
        char: '機',
        meaning: {
          en: 'machine; opportunity; loom',
          vi: 'cơ - máy móc; cơ hội; khung cửi'
        },
        onyomi: ['キ'],
        kunyomi: ['はた'],
        components: [],
        mnemonic: {
          en: 'A wooden 木 loom, later any machine, and the right moment to use it: a machine, an opportunity.',
          vi: 'Một khung cửi gỗ 木, sau là máy móc nói chung, và thời cơ để dùng: máy móc, cơ hội.'
        },
        examples: [
          {
            parts: [
              { text: '機', reading: 'き' },
              { text: '械', reading: 'かい' }
            ],
            meaning: { en: 'machine, machinery', vi: 'máy móc' }
          },
          {
            parts: [
              { text: '飛', reading: 'ひ' },
              { text: '行', reading: 'こう' },
              { text: '機', reading: 'き' }
            ],
            meaning: { en: 'airplane', vi: 'máy bay' }
          },
          {
            parts: [
              { text: '機', reading: 'き' },
              { text: '会', reading: 'かい' }
            ],
            meaning: { en: 'opportunity, chance', vi: 'cơ hội' }
          }
        ]
      },
      {
        char: '管',
        meaning: { en: 'pipe, tube; to manage', vi: 'quản - ống; quản lý' },
        onyomi: ['カン'],
        kunyomi: ['くだ'],
        components: [],
        mnemonic: {
          en: 'A hollow bamboo 竹 tube overseen by an official 官: a pipe, a tube, and to manage.',
          vi: 'Ống tre 竹 rỗng được quan 官 trông coi: cái ống, và quản lý.'
        },
        examples: [
          {
            parts: [{ text: '管', reading: 'くだ' }],
            meaning: { en: 'pipe, tube', vi: 'cái ống' }
          },
          {
            parts: [
              { text: '血', reading: 'けっ' },
              { text: '管', reading: 'かん' }
            ],
            meaning: { en: 'blood vessel', vi: 'mạch máu' }
          },
          {
            parts: [
              { text: '管', reading: 'かん' },
              { text: '理', reading: 'り' }
            ],
            meaning: { en: 'management, control', vi: 'quản lý' }
          }
        ]
      },
      {
        char: '型',
        meaning: { en: 'mold; type, model', vi: 'hình - khuôn; loại, kiểu' },
        onyomi: ['ケイ'],
        kunyomi: ['かた'],
        components: [],
        mnemonic: {
          en: 'A shape pressed from earth 土 as a mold to cast copies: a mold, a type, a model.',
          vi: 'Một khuôn nặn từ đất 土 để đúc ra bản sao: khuôn, loại, kiểu.'
        },
        examples: [
          {
            parts: [{ text: '型', reading: 'かた' }],
            meaning: { en: 'mold, type', vi: 'khuôn, kiểu' }
          },
          {
            parts: [
              { text: '大', reading: 'おお' },
              { text: '型', reading: 'がた' }
            ],
            meaning: { en: 'large-size', vi: 'cỡ lớn' }
          },
          {
            parts: [
              { text: '新', reading: 'しん' },
              { text: '型', reading: 'がた' }
            ],
            meaning: { en: 'new model, new type', vi: 'kiểu mới, mẫu mới' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Light, observation & arts',
      vi: 'Ánh sáng, quan sát & tài nghệ'
    },
    kanji: [
      {
        char: '照',
        meaning: { en: 'to shine, to illuminate', vi: 'chiếu - chiếu sáng, rọi' },
        onyomi: ['ショウ'],
        kunyomi: ['て.る', 'て.らす'],
        components: [],
        mnemonic: {
          en: 'The bright sun 昭 with fire 灬 beneath, casting light on everything: to shine, to illuminate.',
          vi: 'Mặt trời rạng 昭 với lửa 灬 bên dưới, rọi sáng mọi thứ: chiếu sáng, rọi.'
        },
        examples: [
          {
            parts: [
              { text: '照', reading: 'て' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to shine', vi: 'chiếu, rọi' }
          },
          {
            parts: [
              { text: '日', reading: 'ひ' },
              { text: '照', reading: 'で' },
              { text: 'り', reading: 'り' }
            ],
            meaning: { en: 'drought, dry spell', vi: 'nắng hạn' }
          },
          {
            parts: [
              { text: '照', reading: 'しょう' },
              { text: '明', reading: 'めい' }
            ],
            meaning: { en: 'lighting, illumination', vi: 'chiếu sáng, đèn' }
          }
        ]
      },
      {
        char: '景',
        meaning: { en: 'scenery, view', vi: 'cảnh - phong cảnh, cảnh sắc' },
        onyomi: ['ケイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'The sunlight 日 falling over the capital 京 rooftops, a fine view: scenery, a scene.',
          vi: 'Ánh nắng 日 phủ lên mái phố kinh đô 京, một cảnh đẹp: phong cảnh, cảnh sắc.'
        },
        examples: [
          {
            parts: [
              { text: '景', reading: 'け' },
              { text: '色', reading: 'しき' }
            ],
            meaning: { en: 'scenery, landscape', vi: 'phong cảnh' }
          },
          {
            parts: [
              { text: '風', reading: 'ふう' },
              { text: '景', reading: 'けい' }
            ],
            meaning: { en: 'landscape, scene', vi: 'phong cảnh, cảnh vật' }
          },
          {
            parts: [
              { text: '夜', reading: 'や' },
              { text: '景', reading: 'けい' }
            ],
            meaning: { en: 'night view', vi: 'cảnh đêm' }
          }
        ]
      },
      {
        char: '観',
        meaning: { en: 'to view, to observe; outlook', vi: 'quan - quan sát, ngắm; quan điểm' },
        onyomi: ['カン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Watching closely with the eyes 見 to take a good look: to view, to observe.',
          vi: 'Nhìn kỹ bằng mắt 見 để quan sát cho rõ: quan sát, ngắm, quan điểm.'
        },
        examples: [
          {
            parts: [
              { text: '観', reading: 'かん' },
              { text: '光', reading: 'こう' }
            ],
            meaning: { en: 'sightseeing, tourism', vi: 'tham quan, du lịch' }
          },
          {
            parts: [
              { text: '観', reading: 'かん' },
              { text: '察', reading: 'さつ' }
            ],
            meaning: { en: 'observation', vi: 'quan sát' }
          },
          {
            parts: [
              { text: '観', reading: 'かん' },
              { text: '客', reading: 'きゃく' }
            ],
            meaning: { en: 'audience, spectators', vi: 'khán giả' }
          }
        ]
      },
      {
        char: '鏡',
        meaning: { en: 'mirror', vi: 'kính - cái gương' },
        onyomi: ['キョウ'],
        kunyomi: ['かがみ'],
        components: [],
        mnemonic: {
          en: 'A polished sheet of metal 金 that reflects your face: a mirror.',
          vi: 'Một tấm kim loại 金 mài bóng phản chiếu khuôn mặt: cái gương.'
        },
        examples: [
          {
            parts: [{ text: '鏡', reading: 'かがみ' }],
            meaning: { en: 'mirror', vi: 'cái gương' }
          },
          {
            parts: [
              { text: '手', reading: 'て' },
              { text: '鏡', reading: 'かがみ' }
            ],
            meaning: { en: 'hand mirror', vi: 'gương cầm tay' }
          },
          {
            parts: [
              { text: '望', reading: 'ぼう' },
              { text: '遠', reading: 'えん' },
              { text: '鏡', reading: 'きょう' }
            ],
            meaning: { en: 'telescope', vi: 'kính viễn vọng' }
          }
        ]
      },
      {
        char: '省',
        meaning: {
          en: 'to reflect; to omit; ministry',
          vi: 'tỉnh/sảnh - xem lại mình; lược bỏ; bộ (chính phủ)'
        },
        onyomi: ['セイ', 'ショウ'],
        kunyomi: ['かえり.みる', 'はぶ.く'],
        components: [],
        mnemonic: {
          en: 'Looking with the eye 目 at the small 少 details to reflect, and to trim away: to reflect, to omit, a ministry.',
          vi: 'Dùng mắt 目 soi những chi tiết nhỏ 少 để tự xét, và để cắt bớt: tự xét, lược bỏ, bộ (chính phủ).'
        },
        examples: [
          {
            parts: [
              { text: '反', reading: 'はん' },
              { text: '省', reading: 'せい' }
            ],
            meaning: { en: 'self-reflection', vi: 'sự tự kiểm điểm' }
          },
          {
            parts: [
              { text: '省', reading: 'しょう' },
              { text: '略', reading: 'りゃく' }
            ],
            meaning: { en: 'omission, abbreviation', vi: 'sự lược bỏ, viết tắt' }
          },
          {
            parts: [
              { text: '省', reading: 'はぶ' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to omit, to cut out', vi: 'lược bỏ, bỏ bớt' }
          }
        ]
      },
      {
        char: '察',
        meaning: { en: 'to perceive, to guess, to inspect', vi: 'sát - xét đoán, quan sát kỹ' },
        onyomi: ['サツ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Studying things under a roof 宀 as carefully as a festival ritual 祭 to figure them out: to perceive, to guess, to inspect.',
          vi: 'Xem xét mọi thứ dưới mái nhà 宀 kỹ như một nghi lễ 祭 để hiểu ra: xét đoán, quan sát kỹ.'
        },
        examples: [
          {
            parts: [
              { text: '観', reading: 'かん' },
              { text: '察', reading: 'さつ' }
            ],
            meaning: { en: 'observation', vi: 'quan sát' }
          },
          {
            parts: [
              { text: '警', reading: 'けい' },
              { text: '察', reading: 'さつ' }
            ],
            meaning: { en: 'police', vi: 'cảnh sát' }
          },
          {
            parts: [
              { text: '察', reading: 'さっ' },
              { text: 'す', reading: 'す' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to perceive, to sense', vi: 'đoán ra, thấu hiểu' }
          }
        ]
      },
      {
        char: '極',
        meaning: {
          en: 'extreme, utmost; pole',
          vi: 'cực - cực điểm; cực (địa cực)'
        },
        onyomi: ['キョク', 'ゴク'],
        kunyomi: ['きわ.める'],
        components: [],
        mnemonic: {
          en: 'A wooden 木 ridgepole at the very top, the highest point: extreme, the utmost, a pole.',
          vi: 'Cây xà gỗ 木 ở đỉnh cao nhất, điểm tột cùng: cực điểm, cực (địa cực).'
        },
        examples: [
          {
            parts: [
              { text: '北', reading: 'ほっ' },
              { text: '極', reading: 'きょく' }
            ],
            meaning: { en: 'the North Pole', vi: 'Bắc Cực' }
          },
          {
            parts: [
              { text: '南', reading: 'なん' },
              { text: '極', reading: 'きょく' }
            ],
            meaning: { en: 'the South Pole', vi: 'Nam Cực' }
          },
          {
            parts: [
              { text: '極', reading: 'きわ' },
              { text: 'め', reading: 'め' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to master, to carry to the extreme', vi: 'đạt tới tột cùng' }
          }
        ]
      },
      {
        char: '径',
        meaning: { en: 'path; diameter', vi: 'kính - đường nhỏ; đường kính' },
        onyomi: ['ケイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A narrow side road 彳 cutting straight across, later the straight line across a circle: a path, a diameter.',
          vi: 'Một lối nhỏ 彳 cắt thẳng qua, sau là đường thẳng qua vòng tròn: đường mòn, đường kính.'
        },
        examples: [
          {
            parts: [
              { text: '直', reading: 'ちょっ' },
              { text: '径', reading: 'けい' }
            ],
            meaning: { en: 'diameter', vi: 'đường kính' }
          },
          {
            parts: [
              { text: '半', reading: 'はん' },
              { text: '径', reading: 'けい' }
            ],
            meaning: { en: 'radius', vi: 'bán kính' }
          },
          {
            parts: [
              { text: '口', reading: 'こう' },
              { text: '径', reading: 'けい' }
            ],
            meaning: { en: 'caliber, bore', vi: 'đường kính trong, cỡ nòng' }
          }
        ]
      },
      {
        char: '芸',
        meaning: { en: 'art, craft, skill', vi: 'nghệ - nghệ thuật, tài nghệ' },
        onyomi: ['ゲイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A cultivated plant 艹 grown with skill, later any refined skill: art, craft, performance.',
          vi: 'Một cây cỏ 艹 trồng khéo léo, sau là kỹ năng tinh xảo: nghệ thuật, tài nghệ.'
        },
        examples: [
          {
            parts: [{ text: '芸', reading: 'げい' }],
            meaning: { en: 'art, performance, trick', vi: 'tài nghệ, trò diễn' }
          },
          {
            parts: [
              { text: '芸', reading: 'げい' },
              { text: '術', reading: 'じゅつ' }
            ],
            meaning: { en: 'art, the arts', vi: 'nghệ thuật' }
          },
          {
            parts: [
              { text: '芸', reading: 'げい' },
              { text: '能', reading: 'のう' }
            ],
            meaning: { en: 'entertainment, performing arts', vi: 'nghệ thuật biểu diễn, giải trí' }
          }
        ]
      },
      {
        char: '治',
        meaning: {
          en: 'to govern; to cure, to heal',
          vi: 'trị - cai trị; chữa bệnh'
        },
        onyomi: ['ジ', 'チ'],
        kunyomi: ['おさ.める', 'なお.る'],
        components: [],
        mnemonic: {
          en: 'Controlling the flow of water 氵 to keep it in order: to govern, and to cure, to heal.',
          vi: 'Điều khiển dòng nước 氵 cho vào nề nếp: cai trị, và chữa bệnh, chữa lành.'
        },
        examples: [
          {
            parts: [
              { text: '治', reading: 'なお' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to be cured, to heal', vi: 'khỏi bệnh, lành' }
          },
          {
            parts: [
              { text: '政', reading: 'せい' },
              { text: '治', reading: 'じ' }
            ],
            meaning: { en: 'politics', vi: 'chính trị' }
          },
          {
            parts: [
              { text: '治', reading: 'なお' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to cure, to heal', vi: 'chữa trị' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Conveying, records & order',
      vi: 'Truyền đạt, ghi chép & thứ tự'
    },
    kanji: [
      {
        char: '伝',
        meaning: {
          en: 'to transmit, to convey; legend',
          vi: 'truyền - truyền đạt, truyền lại'
        },
        onyomi: ['デン'],
        kunyomi: ['つた.える', 'つた.わる'],
        components: [],
        mnemonic: {
          en: 'A person 亻 passing word along from one to the next: to transmit, to convey, a legend handed down.',
          vi: 'Một người 亻 chuyền lời từ người này sang người kia: truyền đạt, truyền lại, truyền thuyết.'
        },
        examples: [
          {
            parts: [
              { text: '伝', reading: 'つた' },
              { text: 'え', reading: 'え' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to convey, to tell', vi: 'truyền đạt, báo' }
          },
          {
            parts: [
              { text: '手', reading: 'て' },
              { text: '伝', reading: 'つだ' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to help', vi: 'giúp đỡ' }
          },
          {
            parts: [
              { text: '伝', reading: 'でん' },
              { text: '言', reading: 'ごん' }
            ],
            meaning: { en: 'a message', vi: 'lời nhắn' }
          }
        ]
      },
      {
        char: '録',
        meaning: { en: 'to record', vi: 'lục - ghi chép, ghi lại' },
        onyomi: ['ロク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Carving words into metal 金 to keep them permanently: to record.',
          vi: 'Khắc chữ vào kim loại 金 để lưu giữ mãi: ghi chép, ghi lại.'
        },
        examples: [
          {
            parts: [
              { text: '記', reading: 'き' },
              { text: '録', reading: 'ろく' }
            ],
            meaning: { en: 'a record', vi: 'ghi chép, kỷ lục' }
          },
          {
            parts: [
              { text: '録', reading: 'ろく' },
              { text: '音', reading: 'おん' }
            ],
            meaning: { en: 'sound recording', vi: 'ghi âm' }
          },
          {
            parts: [
              { text: '登', reading: 'とう' },
              { text: '録', reading: 'ろく' }
            ],
            meaning: { en: 'registration', vi: 'đăng ký' }
          }
        ]
      },
      {
        char: '唱',
        meaning: {
          en: 'to chant, to sing out; to advocate',
          vi: 'xướng - hô, xướng lên; chủ trương'
        },
        onyomi: ['ショウ'],
        kunyomi: ['とな.える'],
        components: [],
        mnemonic: {
          en: 'A mouth 口 calling out clearly and repeatedly: to chant, to sing out, to advocate.',
          vi: 'Cái miệng 口 hô lên rõ ràng, lặp lại: xướng lên, hô, chủ trương.'
        },
        examples: [
          {
            parts: [
              { text: '合', reading: 'がっ' },
              { text: '唱', reading: 'しょう' }
            ],
            meaning: { en: 'chorus, choir', vi: 'hợp xướng' }
          },
          {
            parts: [
              { text: '唱', reading: 'とな' },
              { text: 'え', reading: 'え' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to chant, to advocate', vi: 'xướng, chủ trương' }
          },
          {
            parts: [
              { text: '唱', reading: 'しょう' },
              { text: '歌', reading: 'か' }
            ],
            meaning: { en: 'singing (school song)', vi: 'xướng ca, hát' }
          }
        ]
      },
      {
        char: '告',
        meaning: { en: 'to tell, to announce', vi: 'cáo - báo, thông báo' },
        onyomi: ['コク'],
        kunyomi: ['つ.げる'],
        components: [],
        mnemonic: {
          en: 'Speaking out with the mouth 口 to let others know: to tell, to announce.',
          vi: 'Nói ra bằng miệng 口 để người khác biết: báo, thông báo.'
        },
        examples: [
          {
            parts: [
              { text: '報', reading: 'ほう' },
              { text: '告', reading: 'こく' }
            ],
            meaning: { en: 'report', vi: 'báo cáo' }
          },
          {
            parts: [
              { text: '広', reading: 'こう' },
              { text: '告', reading: 'こく' }
            ],
            meaning: { en: 'advertisement', vi: 'quảng cáo' }
          },
          {
            parts: [
              { text: '告', reading: 'つ' },
              { text: 'げ', reading: 'げ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to tell, to inform', vi: 'báo, mách' }
          }
        ]
      },
      {
        char: '令',
        meaning: { en: 'command, order, decree', vi: 'lệnh - mệnh lệnh; ra lệnh' },
        onyomi: ['レイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A figure kneeling to receive an order from above: a command, an order, a decree.',
          vi: 'Một người quỳ nhận lệnh từ bên trên: mệnh lệnh, hiệu lệnh.'
        },
        examples: [
          {
            parts: [
              { text: '命', reading: 'めい' },
              { text: '令', reading: 'れい' }
            ],
            meaning: { en: 'order, command', vi: 'mệnh lệnh' }
          },
          {
            parts: [
              { text: '号', reading: 'ごう' },
              { text: '令', reading: 'れい' }
            ],
            meaning: { en: 'command, call (to a group)', vi: 'khẩu lệnh, hô lệnh' }
          },
          {
            parts: [
              { text: '指', reading: 'し' },
              { text: '令', reading: 'れい' }
            ],
            meaning: { en: 'directive, instruction', vi: 'chỉ thị, chỉ lệnh' }
          }
        ]
      },
      {
        char: '票',
        meaning: { en: 'ballot, vote; slip', vi: 'phiếu - lá phiếu; phiếu, vé' },
        onyomi: ['ヒョウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A slip of paper used to cast a vote or serve as a ticket: a ballot, a slip.',
          vi: 'Một mảnh giấy dùng để bỏ phiếu hay làm vé: lá phiếu, phiếu.'
        },
        examples: [
          {
            parts: [
              { text: '投', reading: 'とう' },
              { text: '票', reading: 'ひょう' }
            ],
            meaning: { en: 'voting', vi: 'bỏ phiếu' }
          },
          {
            parts: [
              { text: '開', reading: 'かい' },
              { text: '票', reading: 'ひょう' }
            ],
            meaning: { en: 'counting votes', vi: 'kiểm phiếu' }
          },
          {
            parts: [
              { text: '伝', reading: 'でん' },
              { text: '票', reading: 'ぴょう' }
            ],
            meaning: { en: 'slip, voucher', vi: 'phiếu (ghi), hóa đơn' }
          }
        ]
      },
      {
        char: '順',
        meaning: { en: 'order, sequence; obedient', vi: 'thuận - thứ tự; thuận theo' },
        onyomi: ['ジュン'],
        kunyomi: [],
        components: ['川', '頁'],
        mnemonic: {
          en: 'Heads 頁 flowing along in line like a river 川: order, sequence, and going along obediently.',
          vi: 'Những cái đầu 頁 xuôi theo hàng như dòng sông 川: thứ tự, trình tự, và thuận theo.'
        },
        examples: [
          {
            parts: [
              { text: '順', reading: 'じゅん' },
              { text: '番', reading: 'ばん' }
            ],
            meaning: { en: 'turn, order', vi: 'lượt, thứ tự' }
          },
          {
            parts: [
              { text: '順', reading: 'じゅん' },
              { text: '序', reading: 'じょ' }
            ],
            meaning: { en: 'order, sequence', vi: 'trình tự' }
          },
          {
            parts: [
              { text: '手', reading: 'て' },
              { text: '順', reading: 'じゅん' }
            ],
            meaning: { en: 'procedure, steps', vi: 'trình tự các bước' }
          }
        ]
      },
      {
        char: '初',
        meaning: { en: 'first, beginning', vi: 'sơ - đầu tiên, lần đầu' },
        onyomi: ['ショ'],
        kunyomi: ['はじ.め', 'はつ', 'そ.める'],
        components: [],
        mnemonic: {
          en: 'Taking a knife 刀 to cloth 衤 for the very first cut of a garment: the first, the beginning.',
          vi: 'Cầm dao 刀 cắt vải 衤 nhát đầu tiên may áo: đầu tiên, lần đầu.'
        },
        examples: [
          {
            parts: [
              { text: '初', reading: 'はじ' },
              { text: 'め', reading: 'め' },
              { text: 'て', reading: 'て' }
            ],
            meaning: { en: 'for the first time', vi: 'lần đầu tiên' }
          },
          {
            parts: [
              { text: '最', reading: 'さい' },
              { text: '初', reading: 'しょ' }
            ],
            meaning: { en: 'the very first, the beginning', vi: 'đầu tiên, ban đầu' }
          },
          {
            parts: [
              { text: '初', reading: 'しょ' },
              { text: '日', reading: 'にち' }
            ],
            meaning: { en: 'opening day, first day', vi: 'ngày đầu' }
          }
        ]
      },
      {
        char: '周',
        meaning: { en: 'circumference, lap, around', vi: 'chu - chu vi; vòng quanh' },
        onyomi: ['シュウ'],
        kunyomi: ['まわ.り'],
        components: [],
        mnemonic: {
          en: 'Going all the way around the edge and back to the mouth 口 of the start: circumference, a lap, around.',
          vi: 'Đi hết một vòng quanh mép rồi về lại chỗ bắt đầu 口: chu vi, vòng, xung quanh.'
        },
        examples: [
          {
            parts: [
              { text: '周', reading: 'まわ' },
              { text: 'り', reading: 'り' }
            ],
            meaning: { en: 'surroundings, circumference', vi: 'xung quanh' }
          },
          {
            parts: [
              { text: '一', reading: 'いっ' },
              { text: '周', reading: 'しゅう' }
            ],
            meaning: { en: 'one lap, one round', vi: 'một vòng' }
          },
          {
            parts: [
              { text: '周', reading: 'しゅう' },
              { text: '辺', reading: 'へん' }
            ],
            meaning: { en: 'surroundings, vicinity', vi: 'vùng lân cận' }
          }
        ]
      },
      {
        char: '史',
        meaning: { en: 'history, chronicle', vi: 'sử - lịch sử' },
        onyomi: ['シ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A hand holding a record-tablet, the keeper of events: history, a chronicle.',
          vi: 'Một bàn tay cầm thẻ ghi chép, người giữ sự kiện: lịch sử, sử sách.'
        },
        examples: [
          {
            parts: [
              { text: '歴', reading: 'れき' },
              { text: '史', reading: 'し' }
            ],
            meaning: { en: 'history', vi: 'lịch sử' }
          },
          {
            parts: [
              { text: '世', reading: 'せ' },
              { text: '界', reading: 'かい' },
              { text: '史', reading: 'し' }
            ],
            meaning: { en: 'world history', vi: 'lịch sử thế giới' }
          },
          {
            parts: [
              { text: '日', reading: 'に' },
              { text: '本', reading: 'ほん' },
              { text: '史', reading: 'し' }
            ],
            meaning: { en: 'Japanese history', vi: 'lịch sử Nhật Bản' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Groups, places & scattering',
      vi: 'Đội nhóm, nơi chốn & phân tán'
    },
    kanji: [
      {
        char: '隊',
        meaning: { en: 'squad, corps, party', vi: 'đội - đội, đoàn' },
        onyomi: ['タイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A band of people marching down the hillside 阝 in formation: a squad, a corps, a party.',
          vi: 'Một toán người xuống sườn đồi 阝 theo đội hình: đội, đoàn, tiểu đội.'
        },
        examples: [
          {
            parts: [
              { text: '兵', reading: 'へい' },
              { text: '隊', reading: 'たい' }
            ],
            meaning: { en: 'soldier, troops', vi: 'binh lính, quân đội' }
          },
          {
            parts: [
              { text: '隊', reading: 'たい' },
              { text: '長', reading: 'ちょう' }
            ],
            meaning: { en: 'squad leader, captain', vi: 'đội trưởng' }
          },
          {
            parts: [
              { text: '楽', reading: 'がく' },
              { text: '隊', reading: 'たい' }
            ],
            meaning: { en: 'band (musicians)', vi: 'ban nhạc, đội nhạc' }
          }
        ]
      },
      {
        char: '達',
        meaning: { en: 'to reach, to attain; (plural)', vi: 'đạt - đạt tới; (số nhiều)' },
        onyomi: ['タツ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Moving along 辶 until you arrive at your goal: to reach, to attain, and the plural marker for people.',
          vi: 'Di chuyển 辶 cho tới khi đến đích: đạt tới, và hậu tố số nhiều cho người.'
        },
        examples: [
          {
            parts: [
              { text: '友', reading: 'とも' },
              { text: '達', reading: 'だち' }
            ],
            meaning: { en: 'friend', vi: 'bạn bè' }
          },
          {
            parts: [
              { text: '配', reading: 'はい' },
              { text: '達', reading: 'たつ' }
            ],
            meaning: { en: 'delivery', vi: 'giao hàng' }
          },
          {
            parts: [
              { text: '達', reading: 'たっ' },
              { text: 'す', reading: 'す' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to reach, to attain', vi: 'đạt tới' }
          }
        ]
      },
      {
        char: '帯',
        meaning: { en: 'belt, sash; zone; to wear', vi: 'đới - dây lưng; vùng, đới' },
        onyomi: ['タイ'],
        kunyomi: ['お.びる', 'おび'],
        components: [],
        mnemonic: {
          en: 'A long strip of cloth 巾 tied around the waist: a belt, a sash, and a zone or band.',
          vi: 'Một dải vải 巾 dài quấn quanh eo: dây lưng, đai, và vùng, đới.'
        },
        examples: [
          {
            parts: [{ text: '帯', reading: 'おび' }],
            meaning: { en: 'obi, sash', vi: 'dây thắt lưng (obi)' }
          },
          {
            parts: [
              { text: '熱', reading: 'ねっ' },
              { text: '帯', reading: 'たい' }
            ],
            meaning: { en: 'the tropics', vi: 'vùng nhiệt đới' }
          },
          {
            parts: [
              { text: '一', reading: 'いっ' },
              { text: '帯', reading: 'たい' }
            ],
            meaning: { en: 'whole area, entire region', vi: 'cả một vùng' }
          }
        ]
      },
      {
        char: '卒',
        meaning: {
          en: 'to finish, to graduate; private soldier',
          vi: 'tốt - tốt nghiệp; lính'
        },
        onyomi: ['ソツ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A worker in a plain uniform finishing their term of duty: to finish, to graduate, and a common soldier.',
          vi: 'Một người mặc đồng phục giản dị hoàn tất kỳ hạn: tốt nghiệp, hoàn thành, và người lính.'
        },
        examples: [
          {
            parts: [
              { text: '卒', reading: 'そつ' },
              { text: '業', reading: 'ぎょう' }
            ],
            meaning: { en: 'graduation', vi: 'tốt nghiệp' }
          },
          {
            parts: [
              { text: '兵', reading: 'へい' },
              { text: '卒', reading: 'そつ' }
            ],
            meaning: { en: 'private soldier', vi: 'binh nhì' }
          },
          {
            parts: [
              { text: '卒', reading: 'そつ' },
              { text: '業', reading: 'ぎょう' },
              { text: '式', reading: 'しき' }
            ],
            meaning: { en: 'graduation ceremony', vi: 'lễ tốt nghiệp' }
          }
        ]
      },
      {
        char: '参',
        meaning: {
          en: 'to participate; to go/come (humble)',
          vi: 'tham - tham gia; đến (khiêm nhường)'
        },
        onyomi: ['サン'],
        kunyomi: ['まい.る'],
        components: [],
        mnemonic: {
          en: 'Bowing your head with hair streaming to join in respectfully: to participate, and to go or come humbly.',
          vi: 'Cúi đầu tóc rủ xuống để cùng tham dự một cách kính cẩn: tham gia, và đi/đến (khiêm nhường).'
        },
        examples: [
          {
            parts: [
              { text: '参', reading: 'さん' },
              { text: '加', reading: 'か' }
            ],
            meaning: { en: 'participation', vi: 'tham gia' }
          },
          {
            parts: [
              { text: '参', reading: 'さん' },
              { text: '考', reading: 'こう' }
            ],
            meaning: { en: 'reference', vi: 'tham khảo' }
          },
          {
            parts: [
              { text: '参', reading: 'まい' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to go, to come (humble)', vi: 'đi, đến (khiêm tốn)' }
          }
        ]
      },
      {
        char: '散',
        meaning: { en: 'to scatter, to disperse', vi: 'tán - phân tán, rải rác' },
        onyomi: ['サン'],
        kunyomi: ['ち.る', 'ち.らす'],
        components: [],
        mnemonic: {
          en: 'A hand striking things apart so they fly off in all directions: to scatter, to disperse.',
          vi: 'Một bàn tay đập cho mọi thứ văng ra khắp nơi: phân tán, rải rác.'
        },
        examples: [
          {
            parts: [
              { text: '散', reading: 'ち' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to scatter, to fall (petals)', vi: 'rơi rụng, tản ra' }
          },
          {
            parts: [
              { text: '散', reading: 'さん' },
              { text: '歩', reading: 'ぽ' }
            ],
            meaning: { en: 'a walk, a stroll', vi: 'đi dạo' }
          },
          {
            parts: [
              { text: '分', reading: 'ぶん' },
              { text: '散', reading: 'さん' }
            ],
            meaning: { en: 'dispersion, scattering', vi: 'sự phân tán' }
          }
        ]
      },
      {
        char: '置',
        meaning: { en: 'to place, to put, to leave', vi: 'trí - đặt, để' },
        onyomi: ['チ'],
        kunyomi: ['お.く'],
        components: [],
        mnemonic: {
          en: 'Setting a net down straight 直 in a fixed spot: to place, to put, to leave.',
          vi: 'Đặt cái lưới xuống ngay ngắn 直 tại một chỗ: đặt, để.'
        },
        examples: [
          {
            parts: [
              { text: '置', reading: 'お' },
              { text: 'く', reading: 'く' }
            ],
            meaning: { en: 'to put, to place', vi: 'đặt, để' }
          },
          {
            parts: [
              { text: '位', reading: 'い' },
              { text: '置', reading: 'ち' }
            ],
            meaning: { en: 'position, location', vi: 'vị trí' }
          },
          {
            parts: [
              { text: '物', reading: 'もの' },
              { text: '置', reading: 'おき' }
            ],
            meaning: { en: 'storeroom, shed', vi: 'nhà kho, chỗ để đồ' }
          }
        ]
      },
      {
        char: '残',
        meaning: { en: 'to remain, leftover; cruel', vi: 'tàn - còn lại; tàn nhẫn' },
        onyomi: ['ザン'],
        kunyomi: ['のこ.る', 'のこ.す'],
        components: [],
        mnemonic: {
          en: 'Bare bones 歹 left behind after the flesh is gone, what remains: to remain, leftover, and cruel.',
          vi: 'Bộ xương trơ 歹 còn lại sau khi thịt đã hết, cái sót lại: còn lại, và tàn nhẫn.'
        },
        examples: [
          {
            parts: [
              { text: '残', reading: 'のこ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to remain, to be left', vi: 'còn lại' }
          },
          {
            parts: [
              { text: '残', reading: 'ざん' },
              { text: '念', reading: 'ねん' }
            ],
            meaning: { en: 'regret, too bad', vi: 'tiếc, đáng tiếc' }
          },
          {
            parts: [
              { text: '残', reading: 'ざん' },
              { text: '業', reading: 'ぎょう' }
            ],
            meaning: { en: 'overtime work', vi: 'làm thêm giờ' }
          }
        ]
      },
      {
        char: '席',
        meaning: { en: 'seat', vi: 'tịch - chỗ ngồi' },
        onyomi: ['セキ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A cloth 巾 mat laid out under a roof 广 for someone to sit on: a seat.',
          vi: 'Một tấm vải 巾 trải dưới mái nhà 广 để ngồi: chỗ ngồi.'
        },
        examples: [
          {
            parts: [{ text: '席', reading: 'せき' }],
            meaning: { en: 'seat', vi: 'chỗ ngồi' }
          },
          {
            parts: [
              { text: '出', reading: 'しゅっ' },
              { text: '席', reading: 'せき' }
            ],
            meaning: { en: 'attendance', vi: 'sự có mặt, dự' }
          },
          {
            parts: [
              { text: '座', reading: 'ざ' },
              { text: '席', reading: 'せき' }
            ],
            meaning: { en: 'seat (in a vehicle/hall)', vi: 'chỗ ngồi, ghế' }
          }
        ]
      },
      {
        char: '巣',
        meaning: { en: 'nest', vi: 'sào - cái tổ' },
        onyomi: ['ソウ'],
        kunyomi: ['す'],
        components: [],
        mnemonic: {
          en: 'Birds gathered in a nest built up in a tree 木: a nest.',
          vi: 'Đàn chim tụ trong cái tổ dựng trên cây 木: cái tổ.'
        },
        examples: [
          {
            parts: [{ text: '巣', reading: 'す' }],
            meaning: { en: 'nest', vi: 'cái tổ' }
          },
          {
            parts: [
              { text: '巣', reading: 'す' },
              { text: '箱', reading: 'ばこ' }
            ],
            meaning: { en: 'nest box, birdhouse', vi: 'hộp làm tổ chim' }
          },
          {
            parts: [
              { text: '古', reading: 'ふる' },
              { text: '巣', reading: 'す' }
            ],
            meaning: { en: 'old haunt, former home', vi: 'chốn cũ' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Body, clothing & change',
      vi: 'Cơ thể, y phục & thay đổi'
    },
    kanji: [
      {
        char: '衣',
        meaning: { en: 'clothing, garment', vi: 'y - áo, y phục' },
        onyomi: ['イ'],
        kunyomi: ['ころも'],
        components: [],
        mnemonic: {
          en: 'A picture of a robe with collar and sleeves draped down: clothing, a garment.',
          vi: 'Hình một chiếc áo choàng có cổ và tay áo rủ xuống: áo, y phục.'
        },
        examples: [
          {
            parts: [
              { text: '衣', reading: 'い' },
              { text: '服', reading: 'ふく' }
            ],
            meaning: { en: 'clothes, clothing', vi: 'quần áo, y phục' }
          },
          {
            parts: [
              { text: '衣', reading: 'い' },
              { text: '類', reading: 'るい' }
            ],
            meaning: { en: 'clothing, garments', vi: 'đồ mặc, quần áo' }
          },
          {
            parts: [{ text: '衣', reading: 'ころも' }],
            meaning: { en: 'robe, garment', vi: 'áo, y phục' }
          }
        ]
      },
      {
        char: '胃',
        meaning: { en: 'stomach', vi: 'vị - dạ dày' },
        onyomi: ['イ'],
        kunyomi: [],
        components: ['田', '月'],
        mnemonic: {
          en: 'A pouch (drawn like a field 田) that is part of the body 月: the stomach.',
          vi: 'Một cái túi (vẽ như thửa ruộng 田) thuộc về cơ thể 月: dạ dày.'
        },
        examples: [
          {
            parts: [{ text: '胃', reading: 'い' }],
            meaning: { en: 'stomach', vi: 'dạ dày' }
          },
          {
            parts: [
              { text: '胃', reading: 'い' },
              { text: '腸', reading: 'ちょう' }
            ],
            meaning: { en: 'stomach and intestines', vi: 'dạ dày và ruột' }
          },
          {
            parts: [
              { text: '胃', reading: 'い' },
              { text: '薬', reading: 'ぐすり' }
            ],
            meaning: { en: 'stomach medicine', vi: 'thuốc dạ dày' }
          }
        ]
      },
      {
        char: '腸',
        meaning: { en: 'intestine', vi: 'tràng - ruột' },
        onyomi: ['チョウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'The long, winding organ of the body 月 that digests food: the intestines.',
          vi: 'Cơ quan dài quanh co của cơ thể 月 tiêu hóa thức ăn: ruột.'
        },
        examples: [
          {
            parts: [{ text: '腸', reading: 'ちょう' }],
            meaning: { en: 'intestine, gut', vi: 'ruột' }
          },
          {
            parts: [
              { text: '胃', reading: 'い' },
              { text: '腸', reading: 'ちょう' }
            ],
            meaning: { en: 'stomach and intestines', vi: 'dạ dày và ruột' }
          },
          {
            parts: [
              { text: '大', reading: 'だい' },
              { text: '腸', reading: 'ちょう' }
            ],
            meaning: { en: 'large intestine', vi: 'ruột già' }
          }
        ]
      },
      {
        char: '脈',
        meaning: { en: 'pulse, vein', vi: 'mạch - mạch máu; mạch (núi)' },
        onyomi: ['ミャク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'The branching streams of blood running through the body 月: a pulse, a vein, a vein of rock.',
          vi: 'Những dòng máu phân nhánh chảy khắp cơ thể 月: mạch đập, mạch máu, mạch núi.'
        },
        examples: [
          {
            parts: [{ text: '脈', reading: 'みゃく' }],
            meaning: { en: 'pulse', vi: 'mạch đập' }
          },
          {
            parts: [
              { text: '山', reading: 'さん' },
              { text: '脈', reading: 'みゃく' }
            ],
            meaning: { en: 'mountain range', vi: 'dãy núi' }
          },
          {
            parts: [
              { text: '文', reading: 'ぶん' },
              { text: '脈', reading: 'みゃく' }
            ],
            meaning: { en: 'context', vi: 'ngữ cảnh, mạch văn' }
          }
        ]
      },
      {
        char: '毒',
        meaning: { en: 'poison', vi: 'độc - chất độc' },
        onyomi: ['ドク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A harmful plant growing wild that will hurt anyone who eats it: poison.',
          vi: 'Một loại cây độc mọc hoang gây hại cho ai ăn phải: chất độc.'
        },
        examples: [
          {
            parts: [{ text: '毒', reading: 'どく' }],
            meaning: { en: 'poison', vi: 'chất độc' }
          },
          {
            parts: [
              { text: '消', reading: 'しょう' },
              { text: '毒', reading: 'どく' }
            ],
            meaning: { en: 'disinfection', vi: 'khử trùng' }
          },
          {
            parts: [
              { text: '中', reading: 'ちゅう' },
              { text: '毒', reading: 'どく' }
            ],
            meaning: { en: 'poisoning; addiction', vi: 'trúng độc; nghiện' }
          }
        ]
      },
      {
        char: '必',
        meaning: { en: 'certain, without fail; necessary', vi: 'tất - tất yếu, chắc chắn' },
        onyomi: ['ヒツ'],
        kunyomi: ['かなら.ず'],
        components: [],
        mnemonic: {
          en: 'A firm line drawn through the heart 心, a fixed resolve: certain, without fail, necessary.',
          vi: 'Một nét vạch dứt khoát xuyên qua trái tim 心, ý chí kiên định: tất yếu, chắc chắn, nhất định.'
        },
        examples: [
          {
            parts: [
              { text: '必', reading: 'かなら' },
              { text: 'ず', reading: 'ず' }
            ],
            meaning: { en: 'without fail, certainly', vi: 'nhất định, chắc chắn' }
          },
          {
            parts: [
              { text: '必', reading: 'ひつ' },
              { text: '要', reading: 'よう' }
            ],
            meaning: { en: 'necessary, needed', vi: 'cần thiết' }
          },
          {
            parts: [
              { text: '必', reading: 'ひっ' },
              { text: '死', reading: 'し' }
            ],
            meaning: { en: 'desperate, frantic', vi: 'liều mạng, hết sức' }
          }
        ]
      },
      {
        char: '害',
        meaning: { en: 'harm, damage, injury', vi: 'hại - tác hại, gây hại' },
        onyomi: ['ガイ'],
        kunyomi: [],
        components: ['宀', '口'],
        mnemonic: {
          en: 'Harsh words 口 spoken under a roof 宀 that cut and hurt: harm, damage, injury.',
          vi: 'Lời cay nghiệt 口 nói ra dưới mái nhà 宀 làm tổn thương: tác hại, gây hại.'
        },
        examples: [
          {
            parts: [{ text: '害', reading: 'がい' }],
            meaning: { en: 'harm, damage', vi: 'tác hại' }
          },
          {
            parts: [
              { text: '公', reading: 'こう' },
              { text: '害', reading: 'がい' }
            ],
            meaning: { en: 'pollution', vi: 'ô nhiễm (công hại)' }
          },
          {
            parts: [
              { text: '害', reading: 'がい' },
              { text: '虫', reading: 'ちゅう' }
            ],
            meaning: { en: 'harmful insect, pest', vi: 'sâu bọ gây hại' }
          }
        ]
      },
      {
        char: '栄',
        meaning: {
          en: 'to flourish; glory, prosperity',
          vi: 'vinh - hưng thịnh; vinh quang'
        },
        onyomi: ['エイ'],
        kunyomi: ['さか.える', 'は.える'],
        components: [],
        mnemonic: {
          en: 'A tree 木 crowned with blossoming lights, thriving in full bloom: to flourish, glory, prosperity.',
          vi: 'Một cái cây 木 rực rỡ hoa lá, sum suê nở rộ: hưng thịnh, vinh quang.'
        },
        examples: [
          {
            parts: [
              { text: '栄', reading: 'えい' },
              { text: '養', reading: 'よう' }
            ],
            meaning: { en: 'nutrition', vi: 'dinh dưỡng' }
          },
          {
            parts: [
              { text: '栄', reading: 'さか' },
              { text: 'え', reading: 'え' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to flourish, to prosper', vi: 'hưng thịnh, phồn vinh' }
          },
          {
            parts: [
              { text: '光', reading: 'こう' },
              { text: '栄', reading: 'えい' }
            ],
            meaning: { en: 'honor, glory', vi: 'vinh dự, vinh quang' }
          }
        ]
      },
      {
        char: '改',
        meaning: { en: 'to reform, to revise, to change', vi: 'cải - sửa đổi, cải cách' },
        onyomi: ['カイ'],
        kunyomi: ['あらた.める'],
        components: [],
        mnemonic: {
          en: 'Striking oneself 己 into shape to correct old ways: to reform, to revise, to change.',
          vi: 'Tự chấn chỉnh bản thân 己 để sửa nếp cũ: sửa đổi, cải cách.'
        },
        examples: [
          {
            parts: [
              { text: '改', reading: 'あらた' },
              { text: 'め', reading: 'め' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to revise, to reform', vi: 'sửa đổi, chỉnh lại' }
          },
          {
            parts: [
              { text: '改', reading: 'かい' },
              { text: '札', reading: 'さつ' }
            ],
            meaning: { en: 'ticket gate', vi: 'cửa soát vé' }
          },
          {
            parts: [
              { text: '改', reading: 'かい' },
              { text: '正', reading: 'せい' }
            ],
            meaning: { en: 'revision, amendment', vi: 'sửa đổi, cải chính' }
          }
        ]
      },
      {
        char: '囲',
        meaning: { en: 'to surround, to enclose', vi: 'vi - bao quanh, vây quanh' },
        onyomi: ['イ'],
        kunyomi: ['かこ.む'],
        components: [],
        mnemonic: {
          en: 'A boundary 囗 drawn all the way around something: to surround, to enclose.',
          vi: 'Một đường viền 囗 khép kín quanh vật gì đó: bao quanh, vây quanh.'
        },
        examples: [
          {
            parts: [
              { text: '囲', reading: 'かこ' },
              { text: 'む', reading: 'む' }
            ],
            meaning: { en: 'to surround', vi: 'vây quanh' }
          },
          {
            parts: [
              { text: '周', reading: 'しゅう' },
              { text: '囲', reading: 'い' }
            ],
            meaning: { en: 'surroundings', vi: 'xung quanh, chu vi' }
          },
          {
            parts: [
              { text: '囲', reading: 'い' },
              { text: '碁', reading: 'ご' }
            ],
            meaning: { en: 'the game of Go', vi: 'cờ vây' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Negation, amount & sorting',
      vi: 'Phủ định, số lượng & phân loại'
    },
    kanji: [
      {
        char: '不',
        meaning: { en: 'not, un- (negative prefix)', vi: 'bất - không, chẳng (phủ định)' },
        onyomi: ['フ', 'ブ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A firm bar blocking the way, saying no: not, un-, a negative prefix.',
          vi: 'Một thanh chắn ngang chặn lối, nói không: không, chẳng, tiền tố phủ định.'
        },
        examples: [
          {
            parts: [
              { text: '不', reading: 'ふ' },
              { text: '安', reading: 'あん' }
            ],
            meaning: { en: 'anxiety, unease', vi: 'bất an, lo lắng' }
          },
          {
            parts: [
              { text: '不', reading: 'ふ' },
              { text: '便', reading: 'べん' }
            ],
            meaning: { en: 'inconvenient', vi: 'bất tiện' }
          },
          {
            parts: [
              { text: '不', reading: 'ふ' },
              { text: '足', reading: 'そく' }
            ],
            meaning: { en: 'shortage, insufficiency', vi: 'thiếu hụt' }
          }
        ]
      },
      {
        char: '未',
        meaning: { en: 'not yet, un-', vi: 'vị - chưa (phủ định)' },
        onyomi: ['ミ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A tree 木 whose top branches have not yet grown out: not yet, still to come.',
          vi: 'Một cái cây 木 mà cành ngọn chưa mọc ra: chưa, vẫn còn đợi.'
        },
        examples: [
          {
            parts: [
              { text: '未', reading: 'み' },
              { text: '来', reading: 'らい' }
            ],
            meaning: { en: 'the future', vi: 'tương lai' }
          },
          {
            parts: [
              { text: '未', reading: 'み' },
              { text: '定', reading: 'てい' }
            ],
            meaning: { en: 'undecided, not fixed', vi: 'chưa quyết định' }
          },
          {
            parts: [
              { text: '未', reading: 'み' },
              { text: '満', reading: 'まん' }
            ],
            meaning: { en: 'less than, under', vi: 'chưa đủ, dưới (mức)' }
          }
        ]
      },
      {
        char: '末',
        meaning: { en: 'end, tip', vi: 'mạt - cuối; ngọn' },
        onyomi: ['マツ', 'バツ'],
        kunyomi: ['すえ'],
        components: [],
        mnemonic: {
          en: 'A tree 木 with a stroke marking the very tips of its branches: the end, the tip.',
          vi: 'Một cái cây 木 có nét đánh dấu tận đầu ngọn cành: cuối, ngọn.'
        },
        examples: [
          {
            parts: [
              { text: '週', reading: 'しゅう' },
              { text: '末', reading: 'まつ' }
            ],
            meaning: { en: 'weekend', vi: 'cuối tuần' }
          },
          {
            parts: [
              { text: '年', reading: 'ねん' },
              { text: '末', reading: 'まつ' }
            ],
            meaning: { en: 'year-end', vi: 'cuối năm' }
          },
          {
            parts: [{ text: '末', reading: 'すえ' }],
            meaning: { en: 'the end, the tip', vi: 'cuối, ngọn' }
          }
        ]
      },
      {
        char: '無',
        meaning: { en: 'nothing, without, un-', vi: 'vô - không, không có' },
        onyomi: ['ム', 'ブ'],
        kunyomi: ['な.い'],
        components: [],
        mnemonic: {
          en: 'A place once full, now burned down to nothing: nothing, without, un-.',
          vi: 'Một nơi từng đầy ắp, nay cháy rụi còn lại con số không: không, không có.'
        },
        examples: [
          {
            parts: [
              { text: '無', reading: 'む' },
              { text: '理', reading: 'り' }
            ],
            meaning: { en: 'unreasonable, impossible', vi: 'vô lý, quá sức' }
          },
          {
            parts: [
              { text: '無', reading: 'む' },
              { text: '料', reading: 'りょう' }
            ],
            meaning: { en: 'free of charge', vi: 'miễn phí' }
          },
          {
            parts: [
              { text: '無', reading: 'ぶ' },
              { text: '事', reading: 'じ' }
            ],
            meaning: { en: 'safe and sound', vi: 'bình an vô sự' }
          }
        ]
      },
      {
        char: '付',
        meaning: { en: 'to attach; to hand over', vi: 'phó - gắn vào; giao cho' },
        onyomi: ['フ'],
        kunyomi: ['つ.ける', 'つ.く'],
        components: [],
        mnemonic: {
          en: 'A person 亻 handing something over with their hand 寸, attaching it: to attach, to hand over.',
          vi: 'Một người 亻 trao thứ gì đó bằng tay 寸, gắn vào: gắn, đính; giao cho.'
        },
        examples: [
          {
            parts: [
              { text: '付', reading: 'つ' },
              { text: 'け', reading: 'け' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to attach, to turn on', vi: 'gắn, bật' }
          },
          {
            parts: [
              { text: '受', reading: 'うけ' },
              { text: '付', reading: 'つけ' }
            ],
            meaning: { en: 'reception, front desk', vi: 'quầy tiếp tân' }
          },
          {
            parts: [
              { text: '日', reading: 'ひ' },
              { text: '付', reading: 'づけ' }
            ],
            meaning: { en: 'date', vi: 'ngày tháng' }
          }
        ]
      },
      {
        char: '府',
        meaning: {
          en: 'office; urban prefecture (fu)',
          vi: 'phủ - phủ, cơ quan; phủ (hành chính)'
        },
        onyomi: ['フ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A building 广 where documents are filed 付 and government is run: an office, a prefecture (fu).',
          vi: 'Một tòa nhà 广 nơi lưu hồ sơ 付 và điều hành chính sự: phủ, cơ quan, phủ (hành chính).'
        },
        examples: [
          {
            parts: [
              { text: '政', reading: 'せい' },
              { text: '府', reading: 'ふ' }
            ],
            meaning: { en: 'government', vi: 'chính phủ' }
          },
          {
            parts: [{ text: '府', reading: 'ふ' }],
            meaning: { en: 'urban prefecture', vi: 'phủ (đơn vị hành chính)' }
          },
          {
            parts: [
              { text: '首', reading: 'しゅ' },
              { text: '府', reading: 'ふ' }
            ],
            meaning: { en: 'capital city', vi: 'thủ phủ' }
          }
        ]
      },
      {
        char: '粉',
        meaning: { en: 'powder, flour', vi: 'phấn - bột, phấn' },
        onyomi: ['フン'],
        kunyomi: ['こ', 'こな'],
        components: [],
        mnemonic: {
          en: 'Rice 米 divided 分 down to fine grains: powder, flour.',
          vi: 'Gạo 米 chia nhỏ 分 tới hạt li ti: bột, phấn.'
        },
        examples: [
          {
            parts: [{ text: '粉', reading: 'こな' }],
            meaning: { en: 'powder, flour', vi: 'bột' }
          },
          {
            parts: [
              { text: '小', reading: 'こ' },
              { text: '麦', reading: 'むぎ' },
              { text: '粉', reading: 'こ' }
            ],
            meaning: { en: 'wheat flour', vi: 'bột mì' }
          },
          {
            parts: [
              { text: '花', reading: 'か' },
              { text: '粉', reading: 'ふん' }
            ],
            meaning: { en: 'pollen', vi: 'phấn hoa' }
          }
        ]
      },
      {
        char: '量',
        meaning: { en: 'quantity, amount; to measure', vi: 'lượng - số lượng; đo lường' },
        onyomi: ['リョウ'],
        kunyomi: ['はか.る'],
        components: [],
        mnemonic: {
          en: 'Weighing a load in the marketplace to find how much: quantity, amount, to measure.',
          vi: 'Cân đong một lô hàng ngoài chợ để biết bao nhiêu: số lượng, đo lường.'
        },
        examples: [
          {
            parts: [{ text: '量', reading: 'りょう' }],
            meaning: { en: 'quantity, amount', vi: 'số lượng' }
          },
          {
            parts: [
              { text: '数', reading: 'すう' },
              { text: '量', reading: 'りょう' }
            ],
            meaning: { en: 'quantity', vi: 'số lượng' }
          },
          {
            parts: [
              { text: '重', reading: 'じゅう' },
              { text: '量', reading: 'りょう' }
            ],
            meaning: { en: 'weight', vi: 'trọng lượng' }
          }
        ]
      },
      {
        char: '輪',
        meaning: { en: 'wheel, ring, loop', vi: 'luân - bánh xe; vòng' },
        onyomi: ['リン'],
        kunyomi: ['わ'],
        components: [],
        mnemonic: {
          en: 'The round wheel of a cart 車 turning in a circle: a wheel, a ring, a loop.',
          vi: 'Bánh xe tròn của chiếc xe 車 quay thành vòng: bánh xe, vòng.'
        },
        examples: [
          {
            parts: [{ text: '輪', reading: 'わ' }],
            meaning: { en: 'ring, loop', vi: 'vòng' }
          },
          {
            parts: [
              { text: '車', reading: 'しゃ' },
              { text: '輪', reading: 'りん' }
            ],
            meaning: { en: 'wheel', vi: 'bánh xe' }
          },
          {
            parts: [
              { text: '指', reading: 'ゆび' },
              { text: '輪', reading: 'わ' }
            ],
            meaning: { en: 'finger ring', vi: 'chiếc nhẫn' }
          }
        ]
      },
      {
        char: '類',
        meaning: { en: 'kind, type, category', vi: 'loại - loại, chủng loại' },
        onyomi: ['ルイ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Sorting heads 頁 of grain into like piles by kind: a kind, a type, a category.',
          vi: 'Phân loại các đầu 頁 hạt theo từng nhóm giống nhau: loại, chủng loại.'
        },
        examples: [
          {
            parts: [
              { text: '種', reading: 'しゅ' },
              { text: '類', reading: 'るい' }
            ],
            meaning: { en: 'kind, type', vi: 'chủng loại' }
          },
          {
            parts: [
              { text: '人', reading: 'じん' },
              { text: '類', reading: 'るい' }
            ],
            meaning: { en: 'humankind', vi: 'nhân loại' }
          },
          {
            parts: [
              { text: '書', reading: 'しょ' },
              { text: '類', reading: 'るい' }
            ],
            meaning: { en: 'documents, paperwork', vi: 'giấy tờ, tài liệu' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Battle, loss & necessity',
      vi: 'Chiến đấu, mất mát & cần thiết'
    },
    kanji: [
      {
        char: '戦',
        meaning: { en: 'war, battle; to fight', vi: 'chiến - chiến tranh; chiến đấu' },
        onyomi: ['セン'],
        kunyomi: ['たたか.う', 'いくさ'],
        components: [],
        mnemonic: {
          en: 'Taking up a halberd 戈 to clash in battle: war, a fight, to fight.',
          vi: 'Cầm ngọn qua 戈 lao vào giao tranh: chiến tranh, trận đánh, chiến đấu.'
        },
        examples: [
          {
            parts: [
              { text: '戦', reading: 'せん' },
              { text: '争', reading: 'そう' }
            ],
            meaning: { en: 'war', vi: 'chiến tranh' }
          },
          {
            parts: [
              { text: '戦', reading: 'たたか' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to fight, to battle', vi: 'chiến đấu' }
          },
          {
            parts: [
              { text: '作', reading: 'さく' },
              { text: '戦', reading: 'せん' }
            ],
            meaning: { en: 'strategy, tactics', vi: 'chiến thuật, tác chiến' }
          }
        ]
      },
      {
        char: '敗',
        meaning: { en: 'defeat, failure; to lose', vi: 'bại - thất bại, thua' },
        onyomi: ['ハイ'],
        kunyomi: ['やぶ.れる'],
        components: [],
        mnemonic: {
          en: 'Money 貝 struck and broken apart, everything lost: defeat, failure.',
          vi: 'Tiền của 貝 bị đập vỡ tan, mất sạch: thất bại, thua.'
        },
        examples: [
          {
            parts: [
              { text: '失', reading: 'しっ' },
              { text: '敗', reading: 'ぱい' }
            ],
            meaning: { en: 'failure, mistake', vi: 'thất bại, sai sót' }
          },
          {
            parts: [
              { text: '敗', reading: 'やぶ' },
              { text: 'れ', reading: 'れ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to be defeated', vi: 'bị thua' }
          },
          {
            parts: [
              { text: '勝', reading: 'しょう' },
              { text: '敗', reading: 'はい' }
            ],
            meaning: { en: 'victory or defeat', vi: 'thắng bại' }
          }
        ]
      },
      {
        char: '勇',
        meaning: { en: 'courage, bravery', vi: 'dũng - dũng cảm, can đảm' },
        onyomi: ['ユウ'],
        kunyomi: ['いさ.む'],
        components: [],
        mnemonic: {
          en: 'Summoning up all your strength 力 to face danger: courage, bravery.',
          vi: 'Dồn hết sức mạnh 力 để đối mặt nguy hiểm: dũng cảm, can đảm.'
        },
        examples: [
          {
            parts: [
              { text: '勇', reading: 'ゆう' },
              { text: '気', reading: 'き' }
            ],
            meaning: { en: 'courage', vi: 'dũng khí' }
          },
          {
            parts: [
              { text: '勇', reading: 'ゆう' },
              { text: '者', reading: 'しゃ' }
            ],
            meaning: { en: 'brave person, hero', vi: 'dũng sĩ, anh hùng' }
          },
          {
            parts: [
              { text: '勇', reading: 'いさ' },
              { text: 'む', reading: 'む' }
            ],
            meaning: { en: 'to be spirited, to cheer up', vi: 'hăng hái' }
          }
        ]
      },
      {
        char: '殺',
        meaning: { en: 'to kill', vi: 'sát - giết' },
        onyomi: ['サツ', 'サイ'],
        kunyomi: ['ころ.す'],
        components: [],
        mnemonic: {
          en: 'Striking a blow with a weapon to take a life: to kill.',
          vi: 'Giáng một đòn bằng vũ khí để lấy mạng: giết.'
        },
        examples: [
          {
            parts: [
              { text: '殺', reading: 'ころ' },
              { text: 'す', reading: 'す' }
            ],
            meaning: { en: 'to kill', vi: 'giết' }
          },
          {
            parts: [
              { text: '殺', reading: 'さつ' },
              { text: '人', reading: 'じん' }
            ],
            meaning: { en: 'murder', vi: 'giết người' }
          },
          {
            parts: [
              { text: '自', reading: 'じ' },
              { text: '殺', reading: 'さつ' }
            ],
            meaning: { en: 'suicide', vi: 'tự sát' }
          }
        ]
      },
      {
        char: '欠',
        meaning: { en: 'to lack, to be absent; a gap', vi: 'khiếm - thiếu; vắng' },
        onyomi: ['ケツ'],
        kunyomi: ['か.ける', 'か.く'],
        components: [],
        mnemonic: {
          en: 'A person leaning back with mouth open, missing something: to lack, to be absent, a gap.',
          vi: 'Một người ngả ra há miệng, thiếu mất cái gì đó: thiếu, vắng, khuyết.'
        },
        examples: [
          {
            parts: [
              { text: '欠', reading: 'か' },
              { text: 'け', reading: 'け' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to be lacking, to be chipped', vi: 'thiếu, sứt' }
          },
          {
            parts: [
              { text: '欠', reading: 'けっ' },
              { text: '席', reading: 'せき' }
            ],
            meaning: { en: 'absence (from a seat)', vi: 'vắng mặt' }
          },
          {
            parts: [
              { text: '欠', reading: 'けっ' },
              { text: '点', reading: 'てん' }
            ],
            meaning: { en: 'fault, flaw, weak point', vi: 'khuyết điểm' }
          }
        ]
      },
      {
        char: '失',
        meaning: { en: 'to lose, to miss', vi: 'thất - mất, đánh mất' },
        onyomi: ['シツ'],
        kunyomi: ['うしな.う'],
        components: [],
        mnemonic: {
          en: 'Something slipping out of the hand and dropping away: to lose, to miss.',
          vi: 'Thứ gì đó tuột khỏi tay rơi mất: mất, đánh mất.'
        },
        examples: [
          {
            parts: [
              { text: '失', reading: 'うしな' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to lose', vi: 'mất, đánh mất' }
          },
          {
            parts: [
              { text: '失', reading: 'しっ' },
              { text: '敗', reading: 'ぱい' }
            ],
            meaning: { en: 'failure', vi: 'thất bại' }
          },
          {
            parts: [
              { text: '失', reading: 'しつ' },
              { text: '礼', reading: 'れい' }
            ],
            meaning: { en: 'rudeness; excuse me', vi: 'thất lễ; xin lỗi' }
          }
        ]
      },
      {
        char: '要',
        meaning: {
          en: 'need, essential; main point',
          vi: 'yếu - cần thiết; điểm mấu chốt'
        },
        onyomi: ['ヨウ'],
        kunyomi: ['い.る', 'かなめ'],
        components: [],
        mnemonic: {
          en: 'What is central and indispensable, held at the waist: need, essential, the main point.',
          vi: 'Cái cốt lõi không thể thiếu, giữ ngay eo: cần thiết, điểm mấu chốt.'
        },
        examples: [
          {
            parts: [
              { text: '必', reading: 'ひつ' },
              { text: '要', reading: 'よう' }
            ],
            meaning: { en: 'necessary', vi: 'cần thiết' }
          },
          {
            parts: [
              { text: '重', reading: 'じゅう' },
              { text: '要', reading: 'よう' }
            ],
            meaning: { en: 'important', vi: 'quan trọng' }
          },
          {
            parts: [
              { text: '要', reading: 'い' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to need, to require', vi: 'cần' }
          }
        ]
      },
      {
        char: '約',
        meaning: {
          en: 'promise; approximately; to reduce',
          vi: 'ước - hứa hẹn; khoảng, chừng'
        },
        onyomi: ['ヤク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Binding a thread 糸 into a small tight knot to pledge and to shorten: a promise, approximately.',
          vi: 'Buộc sợi chỉ 糸 thành nút nhỏ để giao ước và rút gọn: lời hứa, khoảng chừng.'
        },
        examples: [
          {
            parts: [
              { text: '約', reading: 'やく' },
              { text: '束', reading: 'そく' }
            ],
            meaning: { en: 'promise', vi: 'lời hứa' }
          },
          {
            parts: [
              { text: '予', reading: 'よ' },
              { text: '約', reading: 'やく' }
            ],
            meaning: { en: 'reservation, booking', vi: 'đặt trước' }
          },
          {
            parts: [{ text: '約', reading: 'やく' }],
            meaning: { en: 'approximately, about', vi: 'khoảng, chừng' }
          }
        ]
      },
      {
        char: '法',
        meaning: { en: 'law, method, rule', vi: 'pháp - luật pháp; phương pháp' },
        onyomi: ['ホウ', 'ハッ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Water 氵 that always flows the level, proper way 去: a law, a method, a rule.',
          vi: 'Nước 氵 luôn chảy theo cách đúng mực, thuận lẽ 去: luật pháp, phương pháp.'
        },
        examples: [
          {
            parts: [
              { text: '方', reading: 'ほう' },
              { text: '法', reading: 'ほう' }
            ],
            meaning: { en: 'method, way', vi: 'phương pháp, cách' }
          },
          {
            parts: [
              { text: '法', reading: 'ほう' },
              { text: '律', reading: 'りつ' }
            ],
            meaning: { en: 'law', vi: 'pháp luật' }
          },
          {
            parts: [
              { text: '文', reading: 'ぶん' },
              { text: '法', reading: 'ぽう' }
            ],
            meaning: { en: 'grammar', vi: 'ngữ pháp' }
          }
        ]
      },
      {
        char: '候',
        meaning: {
          en: 'weather, season; to wait; sign',
          vi: 'hậu - thời tiết, khí hậu; chờ'
        },
        onyomi: ['コウ'],
        kunyomi: ['そうろう'],
        components: [],
        mnemonic: {
          en: 'A person 亻 watching for the changing signs of the seasons: the weather, the season, to wait for.',
          vi: 'Một người 亻 dõi theo dấu hiệu thay đổi của mùa: thời tiết, mùa, chờ đợi.'
        },
        examples: [
          {
            parts: [
              { text: '天', reading: 'てん' },
              { text: '候', reading: 'こう' }
            ],
            meaning: { en: 'weather', vi: 'thời tiết' }
          },
          {
            parts: [
              { text: '気', reading: 'き' },
              { text: '候', reading: 'こう' }
            ],
            meaning: { en: 'climate', vi: 'khí hậu' }
          },
          {
            parts: [
              { text: '候', reading: 'こう' },
              { text: '補', reading: 'ほ' }
            ],
            meaning: { en: 'candidate', vi: 'ứng cử viên' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Travel, town & connection',
      vi: 'Đi lại, phố xá & liên kết'
    },
    kanji: [
      {
        char: '航',
        meaning: { en: 'to navigate, to sail, to fly', vi: 'hàng - đi (thuyền, máy bay)' },
        onyomi: ['コウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Taking a boat 舟 out across the water on a voyage: to navigate, to sail, to fly.',
          vi: 'Đưa con thuyền 舟 ra khơi trên hành trình: đi thuyền, đi biển, bay.'
        },
        examples: [
          {
            parts: [
              { text: '航', reading: 'こう' },
              { text: '空', reading: 'くう' }
            ],
            meaning: { en: 'aviation', vi: 'hàng không' }
          },
          {
            parts: [
              { text: '欠', reading: 'けっ' },
              { text: '航', reading: 'こう' }
            ],
            meaning: { en: 'cancelled flight/sailing', vi: 'hủy chuyến (bay, tàu)' }
          },
          {
            parts: [
              { text: '出', reading: 'しゅっ' },
              { text: '航', reading: 'こう' }
            ],
            meaning: { en: 'setting sail, departure', vi: 'khởi hành (tàu)' }
          }
        ]
      },
      {
        char: '飛',
        meaning: { en: 'to fly, to leap', vi: 'phi - bay; nhảy vọt' },
        onyomi: ['ヒ'],
        kunyomi: ['と.ぶ', 'と.ばす'],
        components: [],
        mnemonic: {
          en: 'A bird spreading its wings to leap up into the air: to fly, to leap, to skip.',
          vi: 'Một con chim xòe cánh vút lên không: bay, nhảy vọt.'
        },
        examples: [
          {
            parts: [
              { text: '飛', reading: 'と' },
              { text: 'ぶ', reading: 'ぶ' }
            ],
            meaning: { en: 'to fly, to jump', vi: 'bay, nhảy' }
          },
          {
            parts: [
              { text: '飛', reading: 'ひ' },
              { text: '行', reading: 'こう' },
              { text: '機', reading: 'き' }
            ],
            meaning: { en: 'airplane', vi: 'máy bay' }
          },
          {
            parts: [
              { text: '飛', reading: 'ひ' },
              { text: '行', reading: 'こう' }
            ],
            meaning: { en: 'flight, flying', vi: 'chuyến bay' }
          }
        ]
      },
      {
        char: '連',
        meaning: {
          en: 'to link, to take along; consecutive',
          vi: 'liên - liên kết; dẫn theo; liên tục'
        },
        onyomi: ['レン'],
        kunyomi: ['つ.れる', 'つら.なる'],
        components: [],
        mnemonic: {
          en: 'Carts 車 moving 辶 in a row, one linked to the next: to link, to take along, consecutive.',
          vi: 'Những chiếc xe 車 di chuyển 辶 nối đuôi nhau: liên kết, dẫn theo, liên tục.'
        },
        examples: [
          {
            parts: [
              { text: '連', reading: 'つ' },
              { text: 'れ', reading: 'れ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to take (someone) along', vi: 'dẫn theo, đưa theo' }
          },
          {
            parts: [
              { text: '連', reading: 'れん' },
              { text: '続', reading: 'ぞく' }
            ],
            meaning: { en: 'continuation, series', vi: 'liên tục' }
          },
          {
            parts: [
              { text: '連', reading: 'れん' },
              { text: '休', reading: 'きゅう' }
            ],
            meaning: { en: 'consecutive holidays', vi: 'kỳ nghỉ dài (liên tiếp)' }
          }
        ]
      },
      {
        char: '辺',
        meaning: { en: 'vicinity, area; side', vi: 'biên - vùng lân cận; cạnh (hình học)' },
        onyomi: ['ヘン'],
        kunyomi: ['あた.り', 'べ'],
        components: [],
        mnemonic: {
          en: 'The area you can reach by moving 辶 a short way around: the vicinity, the area nearby, a side.',
          vi: 'Vùng có thể tới bằng cách đi 辶 loanh quanh gần đó: vùng lân cận, xung quanh, cạnh.'
        },
        examples: [
          {
            parts: [
              { text: '辺', reading: 'あた' },
              { text: 'り', reading: 'り' }
            ],
            meaning: { en: 'vicinity, area', vi: 'vùng lân cận, quanh đây' }
          },
          {
            parts: [
              { text: '周', reading: 'しゅう' },
              { text: '辺', reading: 'へん' }
            ],
            meaning: { en: 'surroundings, vicinity', vi: 'vùng lân cận' }
          },
          {
            parts: [
              { text: '海', reading: 'うみ' },
              { text: '辺', reading: 'べ' }
            ],
            meaning: { en: 'seaside, beach', vi: 'bờ biển' }
          }
        ]
      },
      {
        char: '街',
        meaning: { en: 'town, street', vi: 'nhai - phố xá, đường phố' },
        onyomi: ['ガイ', 'カイ'],
        kunyomi: ['まち'],
        components: [],
        mnemonic: {
          en: 'A place of crossings 行 lined with shops and houses: a town, a street.',
          vi: 'Nơi có những giao lộ 行 hai bên là nhà cửa, cửa hàng: phố xá, đường phố.'
        },
        examples: [
          {
            parts: [{ text: '街', reading: 'まち' }],
            meaning: { en: 'town, downtown', vi: 'phố, khu phố' }
          },
          {
            parts: [
              { text: '商', reading: 'しょう' },
              { text: '店', reading: 'てん' },
              { text: '街', reading: 'がい' }
            ],
            meaning: { en: 'shopping street', vi: 'khu phố buôn bán' }
          },
          {
            parts: [
              { text: '街', reading: 'かい' },
              { text: '道', reading: 'どう' }
            ],
            meaning: { en: 'highway, main road', vi: 'đường cái, quốc lộ' }
          }
        ]
      },
      {
        char: '以',
        meaning: { en: 'by means of; from; than', vi: 'dĩ - bằng, lấy; từ' },
        onyomi: ['イ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A person using a tool to do something, marking "by means of, from, than".',
          vi: 'Một người dùng công cụ để làm việc gì đó, chỉ "bằng, lấy, từ".'
        },
        examples: [
          {
            parts: [
              { text: '以', reading: 'い' },
              { text: '上', reading: 'じょう' }
            ],
            meaning: { en: 'or more; the above', vi: 'trở lên; nói trên' }
          },
          {
            parts: [
              { text: '以', reading: 'い' },
              { text: '下', reading: 'か' }
            ],
            meaning: { en: 'or less; the following', vi: 'trở xuống; sau đây' }
          },
          {
            parts: [
              { text: '以', reading: 'い' },
              { text: '前', reading: 'ぜん' }
            ],
            meaning: { en: 'before, formerly', vi: 'trước đây' }
          }
        ]
      },
      {
        char: '関',
        meaning: { en: 'barrier, gate; connection', vi: 'quan - cửa ải; liên quan' },
        onyomi: ['カン'],
        kunyomi: ['せき', 'かか.わる'],
        components: [],
        mnemonic: {
          en: 'A checkpoint gate 門 controlling who passes: a barrier, and by extension a connection or relation.',
          vi: 'Một cổng chốt 門 kiểm soát ai qua lại: cửa ải, và nghĩa rộng là liên quan, quan hệ.'
        },
        examples: [
          {
            parts: [
              { text: '関', reading: 'かん' },
              { text: '係', reading: 'けい' }
            ],
            meaning: { en: 'relation, connection', vi: 'quan hệ' }
          },
          {
            parts: [
              { text: '関', reading: 'かん' },
              { text: '心', reading: 'しん' }
            ],
            meaning: { en: 'interest, concern', vi: 'sự quan tâm' }
          },
          {
            parts: [
              { text: '関', reading: 'かか' },
              { text: 'わ', reading: 'わ' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to be related, to be involved', vi: 'liên quan, dính líu' }
          }
        ]
      },
      {
        char: '漁',
        meaning: { en: 'fishing', vi: 'ngư - đánh bắt cá' },
        onyomi: ['ギョ', 'リョウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Going out on the water 氵 to catch fish 魚: fishing.',
          vi: 'Ra vùng nước 氵 để bắt cá 魚: đánh bắt cá.'
        },
        examples: [
          {
            parts: [
              { text: '漁', reading: 'ぎょ' },
              { text: '業', reading: 'ぎょう' }
            ],
            meaning: { en: 'fishing industry', vi: 'ngư nghiệp' }
          },
          {
            parts: [
              { text: '漁', reading: 'ぎょ' },
              { text: '船', reading: 'せん' }
            ],
            meaning: { en: 'fishing boat', vi: 'tàu cá' }
          },
          {
            parts: [
              { text: '漁', reading: 'ぎょ' },
              { text: '港', reading: 'こう' }
            ],
            meaning: { en: 'fishing port', vi: 'cảng cá' }
          }
        ]
      },
      {
        char: '牧',
        meaning: { en: 'to herd; pasture', vi: 'mục - chăn thả; đồng cỏ' },
        onyomi: ['ボク'],
        kunyomi: ['まき'],
        components: [],
        mnemonic: {
          en: 'Driving cattle 牛 out to graze with a stick: to herd, a pasture.',
          vi: 'Lùa đàn bò 牛 ra gặm cỏ bằng cây gậy: chăn thả, đồng cỏ.'
        },
        examples: [
          {
            parts: [
              { text: '牧', reading: 'ぼく' },
              { text: '場', reading: 'じょう' }
            ],
            meaning: { en: 'ranch, pasture', vi: 'trang trại, đồng cỏ' }
          },
          {
            parts: [
              { text: '牧', reading: 'ぼく' },
              { text: '草', reading: 'そう' }
            ],
            meaning: { en: 'pasture grass, hay', vi: 'cỏ chăn nuôi' }
          },
          {
            parts: [
              { text: '遊', reading: 'ゆう' },
              { text: '牧', reading: 'ぼく' }
            ],
            meaning: { en: 'nomadism', vi: 'du mục' }
          }
        ]
      },
      {
        char: '包',
        meaning: { en: 'to wrap, to wrap up', vi: 'bao - bao bọc, gói' },
        onyomi: ['ホウ'],
        kunyomi: ['つつ.む'],
        components: [],
        mnemonic: {
          en: 'Arms curled all the way around something to enclose it: to wrap, to wrap up.',
          vi: 'Vòng tay bao trọn quanh vật gì đó: bao bọc, gói lại.'
        },
        examples: [
          {
            parts: [
              { text: '包', reading: 'つつ' },
              { text: 'む', reading: 'む' }
            ],
            meaning: { en: 'to wrap', vi: 'gói, bọc' }
          },
          {
            parts: [
              { text: '包', reading: 'ほう' },
              { text: '丁', reading: 'ちょう' }
            ],
            meaning: { en: 'kitchen knife', vi: 'dao làm bếp' }
          },
          {
            parts: [
              { text: '小', reading: 'こ' },
              { text: '包', reading: 'づつみ' }
            ],
            meaning: { en: 'parcel, package', vi: 'bưu kiện nhỏ' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Time, contest & documents',
      vi: 'Thời gian, thi đua & giấy tờ'
    },
    kanji: [
      {
        char: '季',
        meaning: { en: 'season', vi: 'quý - mùa' },
        onyomi: ['キ'],
        kunyomi: [],
        components: ['禾', '子'],
        mnemonic: {
          en: 'A young grain plant 禾 with its child 子 seeds ripening each part of the year: a season.',
          vi: 'Cây lúa 禾 với hạt con 子 chín theo từng phần trong năm: mùa.'
        },
        examples: [
          {
            parts: [
              { text: '季', reading: 'き' },
              { text: '節', reading: 'せつ' }
            ],
            meaning: { en: 'season', vi: 'mùa' }
          },
          {
            parts: [
              { text: '四', reading: 'し' },
              { text: '季', reading: 'き' }
            ],
            meaning: { en: 'the four seasons', vi: 'bốn mùa' }
          },
          {
            parts: [
              { text: '雨', reading: 'う' },
              { text: '季', reading: 'き' }
            ],
            meaning: { en: 'the rainy season', vi: 'mùa mưa' }
          }
        ]
      },
      {
        char: '紀',
        meaning: {
          en: 'chronicle; era; discipline',
          vi: 'kỷ - kỷ nguyên; ghi chép; kỷ luật'
        },
        onyomi: ['キ'],
        kunyomi: [],
        components: ['糸', '己'],
        mnemonic: {
          en: 'Threads 糸 of oneself 己 wound in order to keep a record of the age: a chronicle, an era, discipline.',
          vi: 'Sợi chỉ 糸 của bản thân 己 quấn theo trật tự để ghi lại thời đại: ký sự, kỷ nguyên, kỷ luật.'
        },
        examples: [
          {
            parts: [
              { text: '世', reading: 'せい' },
              { text: '紀', reading: 'き' }
            ],
            meaning: { en: 'century', vi: 'thế kỷ' }
          },
          {
            parts: [
              { text: '紀', reading: 'き' },
              { text: '元', reading: 'げん' }
            ],
            meaning: { en: 'era, epoch (of an era count)', vi: 'kỷ nguyên' }
          },
          {
            parts: [
              { text: '風', reading: 'ふう' },
              { text: '紀', reading: 'き' }
            ],
            meaning: { en: 'discipline, public order', vi: 'kỷ cương, nề nếp' }
          }
        ]
      },
      {
        char: '最',
        meaning: { en: 'most, the -est', vi: 'tối - nhất, cực (nhất)' },
        onyomi: ['サイ'],
        kunyomi: ['もっと.も'],
        components: [],
        mnemonic: {
          en: 'Reaching up to seize the very top thing, the extreme: most, the -est.',
          vi: 'Với lên nắm lấy thứ đứng đầu nhất, cực điểm: nhất, hơn cả.'
        },
        examples: [
          {
            parts: [
              { text: '最', reading: 'もっと' },
              { text: 'も', reading: 'も' }
            ],
            meaning: { en: 'most, the most', vi: 'nhất, hơn cả' }
          },
          {
            parts: [
              { text: '最', reading: 'さい' },
              { text: '高', reading: 'こう' }
            ],
            meaning: { en: 'highest, best', vi: 'cao nhất, tuyệt nhất' }
          },
          {
            parts: [
              { text: '最', reading: 'さい' },
              { text: '近', reading: 'きん' }
            ],
            meaning: { en: 'recently, lately', vi: 'gần đây' }
          }
        ]
      },
      {
        char: '昨',
        meaning: { en: 'yesterday; the previous', vi: 'tạc - hôm qua; trước (ngày/năm qua)' },
        onyomi: ['サク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'The day 日 just gone by: yesterday, the previous day or year.',
          vi: 'Ngày 日 vừa trôi qua: hôm qua, ngày/năm trước.'
        },
        examples: [
          {
            parts: [{ text: '昨日', reading: 'きのう' }],
            meaning: { en: 'yesterday', vi: 'hôm qua' }
          },
          {
            parts: [
              { text: '昨', reading: 'さく' },
              { text: '年', reading: 'ねん' }
            ],
            meaning: { en: 'last year', vi: 'năm ngoái' }
          },
          {
            parts: [
              { text: '昨', reading: 'さく' },
              { text: '夜', reading: 'や' }
            ],
            meaning: { en: 'last night', vi: 'đêm qua' }
          }
        ]
      },
      {
        char: '協',
        meaning: { en: 'to cooperate', vi: 'hiệp - hợp tác, hiệp lực' },
        onyomi: ['キョウ'],
        kunyomi: [],
        components: ['十', '力'],
        mnemonic: {
          en: 'Many strengths 力 joined under one 十 to work as one: to cooperate.',
          vi: 'Nhiều sức mạnh 力 gộp dưới một 十 để làm chung: hợp tác, hiệp lực.'
        },
        examples: [
          {
            parts: [
              { text: '協', reading: 'きょう' },
              { text: '力', reading: 'りょく' }
            ],
            meaning: { en: 'cooperation', vi: 'sự hợp tác' }
          },
          {
            parts: [
              { text: '協', reading: 'きょう' },
              { text: '会', reading: 'かい' }
            ],
            meaning: { en: 'association, society', vi: 'hiệp hội' }
          },
          {
            parts: [
              { text: '協', reading: 'きょう' },
              { text: '同', reading: 'どう' }
            ],
            meaning: { en: 'cooperation, collaboration', vi: 'hợp tác, hiệp đồng' }
          }
        ]
      },
      {
        char: '競',
        meaning: { en: 'to compete, to vie', vi: 'cạnh - tranh đua, thi đấu' },
        onyomi: ['キョウ', 'ケイ'],
        kunyomi: ['きそ.う', 'せ.る'],
        components: [],
        mnemonic: {
          en: 'Two people side by side racing to outdo each other: to compete, to vie.',
          vi: 'Hai người kề nhau đua để hơn nhau: tranh đua, thi đấu.'
        },
        examples: [
          {
            parts: [
              { text: '競', reading: 'きょう' },
              { text: '争', reading: 'そう' }
            ],
            meaning: { en: 'competition', vi: 'cạnh tranh' }
          },
          {
            parts: [
              { text: '競', reading: 'きょう' },
              { text: '技', reading: 'ぎ' }
            ],
            meaning: { en: 'competition, event (sports)', vi: 'thi đấu, môn thi' }
          },
          {
            parts: [
              { text: '競', reading: 'きそ' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to compete', vi: 'tranh đua' }
          }
        ]
      },
      {
        char: '祝',
        meaning: { en: 'to celebrate, to congratulate', vi: 'chúc - chúc mừng; ăn mừng' },
        onyomi: ['シュク'],
        kunyomi: ['いわ.う'],
        components: [],
        mnemonic: {
          en: 'Kneeling at the altar 礻 to offer words of blessing: to celebrate, to congratulate.',
          vi: 'Quỳ trước bàn thờ 礻 dâng lời chúc phúc: chúc mừng, ăn mừng.'
        },
        examples: [
          {
            parts: [
              { text: '祝', reading: 'いわ' },
              { text: 'う', reading: 'う' }
            ],
            meaning: { en: 'to celebrate', vi: 'chúc mừng, ăn mừng' }
          },
          {
            parts: [
              { text: '祝', reading: 'しゅく' },
              { text: '日', reading: 'じつ' }
            ],
            meaning: { en: 'national holiday', vi: 'ngày lễ' }
          },
          {
            parts: [
              { text: 'お', reading: 'お' },
              { text: '祝', reading: 'いわ' },
              { text: 'い', reading: 'い' }
            ],
            meaning: { en: 'a celebration, congratulations', vi: 'lời/lễ chúc mừng' }
          }
        ]
      },
      {
        char: '辞',
        meaning: {
          en: 'word; to resign; to decline',
          vi: 'từ - từ ngữ; từ chối; từ chức'
        },
        onyomi: ['ジ'],
        kunyomi: ['や.める'],
        components: [],
        mnemonic: {
          en: "Choosing careful words to take one's leave: words, and to resign, to decline.",
          vi: 'Chọn lời lẽ cẩn thận để cáo lui: từ ngữ, và từ chức, từ chối.'
        },
        examples: [
          {
            parts: [
              { text: '辞', reading: 'じ' },
              { text: '書', reading: 'しょ' }
            ],
            meaning: { en: 'dictionary', vi: 'từ điển' }
          },
          {
            parts: [
              { text: '辞', reading: 'や' },
              { text: 'め', reading: 'め' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to resign, to quit', vi: 'từ chức, nghỉ (việc)' }
          },
          {
            parts: [
              { text: '辞', reading: 'じ' },
              { text: '典', reading: 'てん' }
            ],
            meaning: { en: 'dictionary', vi: 'từ điển' }
          }
        ]
      },
      {
        char: '札',
        meaning: { en: 'tag, label; paper money', vi: 'trát - thẻ, phiếu; tờ tiền' },
        onyomi: ['サツ'],
        kunyomi: ['ふだ'],
        components: [],
        mnemonic: {
          en: 'A small wooden 木 tag hung to label something, later a paper note: a tag, a bill.',
          vi: 'Một tấm thẻ gỗ 木 nhỏ treo để ghi nhãn, sau là tờ giấy bạc: thẻ, phiếu, tờ tiền.'
        },
        examples: [
          {
            parts: [{ text: '札', reading: 'ふだ' }],
            meaning: { en: 'tag, label, card', vi: 'thẻ, phiếu' }
          },
          {
            parts: [
              { text: '千', reading: 'せん' },
              { text: '円', reading: 'えん' },
              { text: '札', reading: 'さつ' }
            ],
            meaning: { en: '1000-yen bill', vi: 'tờ 1000 yên' }
          },
          {
            parts: [
              { text: '改', reading: 'かい' },
              { text: '札', reading: 'さつ' }
            ],
            meaning: { en: 'ticket gate', vi: 'cửa soát vé' }
          }
        ]
      },
      {
        char: '刷',
        meaning: { en: 'to print', vi: 'loát - in ấn' },
        onyomi: ['サツ'],
        kunyomi: ['す.る'],
        components: [],
        mnemonic: {
          en: 'Pressing an inked block and cutting off 刂 clean copies: to print.',
          vi: 'Ép bản mực rồi cắt 刂 ra những bản in sạch: in ấn.'
        },
        examples: [
          {
            parts: [
              { text: '印', reading: 'いん' },
              { text: '刷', reading: 'さつ' }
            ],
            meaning: { en: 'printing', vi: 'in ấn' }
          },
          {
            parts: [
              { text: '刷', reading: 'す' },
              { text: 'る', reading: 'る' }
            ],
            meaning: { en: 'to print', vi: 'in' }
          }
        ]
      },
      {
        char: '旗',
        meaning: { en: 'flag, banner', vi: 'kỳ - lá cờ' },
        onyomi: ['キ'],
        kunyomi: ['はた'],
        components: [],
        mnemonic: {
          en: 'A banner on a pole (from 方) flapping in the wind: a flag.',
          vi: 'Một lá cờ trên cột (từ 方) phấp phới trong gió: lá cờ.'
        },
        examples: [
          {
            parts: [{ text: '旗', reading: 'はた' }],
            meaning: { en: 'flag', vi: 'lá cờ' }
          },
          {
            parts: [
              { text: '国', reading: 'こっ' },
              { text: '旗', reading: 'き' }
            ],
            meaning: { en: 'national flag', vi: 'quốc kỳ' }
          },
          {
            parts: [
              { text: '白', reading: 'しろ' },
              { text: '旗', reading: 'はた' }
            ],
            meaning: { en: 'white flag', vi: 'cờ trắng' }
          }
        ]
      }
    ]
  },
  {
    title: {
      en: 'Trees, buildings & history',
      vi: 'Cây cối, công trình & lịch sử'
    },
    kanji: [
      {
        char: '松',
        meaning: { en: 'pine tree', vi: 'tùng - cây thông' },
        onyomi: ['ショウ'],
        kunyomi: ['まつ'],
        components: [],
        mnemonic: {
          en: 'A tree 木 that everyone 公 knows stays green all year: the pine.',
          vi: 'Cái cây 木 ai ai 公 cũng biết, quanh năm xanh: cây thông.'
        },
        examples: [
          {
            parts: [{ text: '松', reading: 'まつ' }],
            meaning: { en: 'pine tree', vi: 'cây thông' }
          },
          {
            parts: [
              { text: '松', reading: 'まつ' },
              { text: '林', reading: 'ばやし' }
            ],
            meaning: { en: 'pine forest', vi: 'rừng thông' }
          },
          {
            parts: [
              { text: '門', reading: 'かど' },
              { text: '松', reading: 'まつ' }
            ],
            meaning: { en: 'New Year pine decoration', vi: 'cây thông trang trí Tết' }
          }
        ]
      },
      {
        char: '象',
        meaning: {
          en: 'elephant; shape, phenomenon',
          vi: 'tượng - con voi; hiện tượng, hình tượng'
        },
        onyomi: ['ショウ', 'ゾウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A picture of an elephant with its long trunk and body: an elephant, and by extension a shape or phenomenon.',
          vi: 'Hình con voi với cái vòi dài và thân: con voi, và nghĩa rộng là hình tượng, hiện tượng.'
        },
        examples: [
          {
            parts: [{ text: '象', reading: 'ぞう' }],
            meaning: { en: 'elephant', vi: 'con voi' }
          },
          {
            parts: [
              { text: '気', reading: 'き' },
              { text: '象', reading: 'しょう' }
            ],
            meaning: { en: 'weather, meteorology', vi: 'khí tượng' }
          },
          {
            parts: [
              { text: '対', reading: 'たい' },
              { text: '象', reading: 'しょう' }
            ],
            meaning: { en: 'target, object', vi: 'đối tượng' }
          }
        ]
      },
      {
        char: '賞',
        meaning: { en: 'prize, award', vi: 'thưởng - giải thưởng; khen thưởng' },
        onyomi: ['ショウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Money 貝 given out to honor an achievement: a prize, an award.',
          vi: 'Tiền 貝 trao ra để tôn vinh thành tích: giải thưởng, khen thưởng.'
        },
        examples: [
          {
            parts: [{ text: '賞', reading: 'しょう' }],
            meaning: { en: 'prize, award', vi: 'giải thưởng' }
          },
          {
            parts: [
              { text: '賞', reading: 'しょう' },
              { text: '金', reading: 'きん' }
            ],
            meaning: { en: 'prize money', vi: 'tiền thưởng' }
          },
          {
            parts: [
              { text: '賞', reading: 'しょう' },
              { text: '品', reading: 'ひん' }
            ],
            meaning: { en: 'prize, award item', vi: 'phần thưởng' }
          }
        ]
      },
      {
        char: '然',
        meaning: { en: 'state, -like, so', vi: 'nhiên - trạng thái; như vậy' },
        onyomi: ['ゼン', 'ネン'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A suffix meaning "in that state, just so", often paired with other kanji: -like, natural, so.',
          vi: 'Một hậu tố nghĩa "ở trạng thái ấy, như vậy", thường đi kèm chữ khác: như thế, trạng thái, tự nhiên.'
        },
        examples: [
          {
            parts: [
              { text: '自', reading: 'し' },
              { text: '然', reading: 'ぜん' }
            ],
            meaning: { en: 'nature', vi: 'tự nhiên, thiên nhiên' }
          },
          {
            parts: [
              { text: '全', reading: 'ぜん' },
              { text: '然', reading: 'ぜん' }
            ],
            meaning: { en: '(not) at all', vi: '(không)... chút nào' }
          },
          {
            parts: [
              { text: '天', reading: 'てん' },
              { text: '然', reading: 'ねん' }
            ],
            meaning: { en: 'natural, native', vi: 'tự nhiên (thiên nhiên)' }
          }
        ]
      },
      {
        char: '倉',
        meaning: { en: 'warehouse, storehouse', vi: 'thương - kho, nhà kho' },
        onyomi: ['ソウ'],
        kunyomi: ['くら'],
        components: [],
        mnemonic: {
          en: 'A building with a door for storing grain safely: a warehouse, a storehouse.',
          vi: 'Một tòa nhà có cửa để cất trữ lương thực an toàn: kho, nhà kho.'
        },
        examples: [
          {
            parts: [{ text: '倉', reading: 'くら' }],
            meaning: { en: 'storehouse, warehouse', vi: 'kho' }
          },
          {
            parts: [
              { text: '倉', reading: 'そう' },
              { text: '庫', reading: 'こ' }
            ],
            meaning: { en: 'warehouse', vi: 'nhà kho' }
          },
          {
            parts: [
              { text: '米', reading: 'こめ' },
              { text: '倉', reading: 'ぐら' }
            ],
            meaning: { en: 'rice granary', vi: 'kho thóc' }
          }
        ]
      },
      {
        char: '堂',
        meaning: { en: 'hall', vi: 'đường - đại sảnh, gian nhà lớn' },
        onyomi: ['ドウ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'A grand building raised high on an earthen 土 base: a hall.',
          vi: 'Một tòa nhà lớn dựng cao trên nền đất 土: đại sảnh, gian nhà lớn.'
        },
        examples: [
          {
            parts: [
              { text: '食', reading: 'しょく' },
              { text: '堂', reading: 'どう' }
            ],
            meaning: { en: 'dining hall, cafeteria', vi: 'nhà ăn, căng tin' }
          },
          {
            parts: [
              { text: '本', reading: 'ほん' },
              { text: '堂', reading: 'どう' }
            ],
            meaning: { en: 'main hall (of a temple)', vi: 'chính điện' }
          },
          {
            parts: [
              { text: '議', reading: 'ぎ' },
              { text: '事', reading: 'じ' },
              { text: '堂', reading: 'どう' }
            ],
            meaning: {
              en: 'assembly hall, parliament building',
              vi: 'nghị trường, tòa nhà quốc hội'
            }
          }
        ]
      },
      {
        char: '博',
        meaning: { en: 'broad, extensive; doctorate', vi: 'bác - rộng, uyên bác' },
        onyomi: ['ハク', 'バク'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Knowledge spread wide in all ten 十 directions: broad, extensive, learned.',
          vi: 'Kiến thức trải rộng khắp mười 十 phương: rộng khắp, uyên bác.'
        },
        examples: [
          {
            parts: [
              { text: '博', reading: 'はく' },
              { text: '物', reading: 'ぶつ' },
              { text: '館', reading: 'かん' }
            ],
            meaning: { en: 'museum', vi: 'bảo tàng' }
          },
          {
            parts: [
              { text: '博', reading: 'はか' },
              { text: '士', reading: 'せ' }
            ],
            meaning: { en: 'doctorate; learned person', vi: 'tiến sĩ, bậc thông thái' }
          },
          {
            parts: [
              { text: '博', reading: 'はく' },
              { text: '学', reading: 'がく' }
            ],
            meaning: { en: 'erudition, wide learning', vi: 'học rộng, uyên bác' }
          }
        ]
      },
      {
        char: '歴',
        meaning: {
          en: 'history, career; to pass through',
          vi: 'lịch - lịch sử; trải qua'
        },
        onyomi: ['レキ'],
        kunyomi: [],
        components: [],
        mnemonic: {
          en: 'Steps 止 that pass one by one through the years: personal history, a career, passing through.',
          vi: 'Những bước chân 止 lần lượt đi qua năm tháng: lý lịch, quá trình, trải qua.'
        },
        examples: [
          {
            parts: [
              { text: '歴', reading: 'れき' },
              { text: '史', reading: 'し' }
            ],
            meaning: { en: 'history', vi: 'lịch sử' }
          },
          {
            parts: [
              { text: '学', reading: 'がく' },
              { text: '歴', reading: 'れき' }
            ],
            meaning: { en: 'academic background', vi: 'học vấn, quá trình học' }
          },
          {
            parts: [
              { text: '歴', reading: 'れき' },
              { text: '代', reading: 'だい' }
            ],
            meaning: { en: 'successive generations', vi: 'các đời, lịch đại' }
          }
        ]
      },
      {
        char: '群',
        meaning: { en: 'group, flock, crowd', vi: 'quần - bầy, đàn, nhóm' },
        onyomi: ['グン'],
        kunyomi: ['む.れ', 'むら'],
        components: [],
        mnemonic: {
          en: 'A ruler 君 leading a whole flock of sheep 羊 gathered together: a group, a flock, a crowd.',
          vi: 'Một vị chúa 君 dẫn cả đàn cừu 羊 tụ lại: bầy, đàn, nhóm.'
        },
        examples: [
          {
            parts: [
              { text: '群', reading: 'む' },
              { text: 'れ', reading: 'れ' }
            ],
            meaning: { en: 'flock, herd, crowd', vi: 'bầy, đàn' }
          },
          {
            parts: [
              { text: '大', reading: 'たい' },
              { text: '群', reading: 'ぐん' }
            ],
            meaning: { en: 'large swarm, big crowd', vi: 'bầy lớn, đám đông' }
          },
          {
            parts: [
              { text: '魚', reading: 'ぎょ' },
              { text: '群', reading: 'ぐん' }
            ],
            meaning: { en: 'school of fish', vi: 'đàn cá' }
          }
        ]
      },
      {
        char: '井',
        meaning: { en: 'well', vi: 'tỉnh - cái giếng' },
        onyomi: ['セイ', 'ショウ'],
        kunyomi: ['い'],
        components: [],
        mnemonic: {
          en: 'A picture of the wooden frame around the mouth of a well: a well.',
          vi: 'Hình khung gỗ quanh miệng giếng: cái giếng.'
        },
        examples: [
          {
            parts: [
              { text: '井', reading: 'い' },
              { text: '戸', reading: 'ど' }
            ],
            meaning: { en: 'a well', vi: 'cái giếng' }
          },
          {
            parts: [
              { text: '天', reading: 'てん' },
              { text: '井', reading: 'じょう' }
            ],
            meaning: { en: 'ceiling', vi: 'trần nhà' }
          },
          {
            parts: [
              { text: '福', reading: 'ふく' },
              { text: '井', reading: 'い' }
            ],
            meaning: { en: 'Fukui (prefecture)', vi: 'Fukui (tỉnh)' }
          }
        ]
      },
      {
        char: '城',
        meaning: { en: 'castle', vi: 'thành - thành, thành lũy' },
        onyomi: ['ジョウ'],
        kunyomi: ['しろ'],
        components: [],
        mnemonic: {
          en: 'A great wall of earth 土 built up 成 to defend a stronghold: a castle.',
          vi: 'Một bức tường đất 土 lớn dựng nên 成 để phòng thủ: thành, thành lũy.'
        },
        examples: [
          {
            parts: [{ text: '城', reading: 'しろ' }],
            meaning: { en: 'castle', vi: 'tòa thành' }
          },
          {
            parts: [
              { text: '城', reading: 'じょう' },
              { text: '下', reading: 'か' },
              { text: '町', reading: 'まち' }
            ],
            meaning: { en: 'castle town', vi: 'thị trấn quanh thành' }
          },
          {
            parts: [
              { text: 'お', reading: 'お' },
              { text: '城', reading: 'しろ' }
            ],
            meaning: { en: 'castle (polite)', vi: 'tòa thành' }
          }
        ]
      }
    ]
  }
]);
