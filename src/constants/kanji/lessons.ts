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
        components: ['田', '心'],
        mnemonic: {
          en: 'The brain 田 above the heart 心 working together: to think, to feel.',
          vi: 'Bộ não 田 trên trái tim 心 cùng hoạt động: suy nghĩ, cảm nhận.'
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
  }
]);
