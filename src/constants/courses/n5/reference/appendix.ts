import type {
  ReferenceTableCell,
  ReferenceTableSection
} from '@/constants/courses/n5/reference/types.ts';

const COUNTER_COLS: ReferenceTableSection['columns'] = [
  { en: 'No.', vi: 'Số' },
  { en: 'Reading', vi: 'Cách đọc' }
];

type CounterReadings = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

function counterRows(
  readings: CounterReadings,
  question: string,
  example?: ReferenceTableCell
): ReferenceTableCell[][] {
  const rows: ReferenceTableCell[][] = [];

  if (example) {
    rows.push([{ label: 'ex.' }, example]);
  }

  for (let i = 0; i < 10; i++) {
    rows.push([{ label: String(i + 1) }, { jp: readings[i] }]);
  }

  rows.push([{ labelKey: 'referenceTableHowMany' }, { jp: question }]);

  return rows;
}

function counterSection(
  id: string,
  title: ReferenceTableSection['title'],
  readings: CounterReadings,
  question: string,
  example?: ReferenceTableCell
): ReferenceTableSection {
  return {
    id,
    title,
    columns: COUNTER_COLS,
    rowLabelColumn: true,
    rows: counterRows(readings, question, example)
  };
}

export const n5ReferenceAppendix: ReferenceTableSection[] = [
  {
    id: 'numbers-basic',
    title: { en: 'I. Numbers (0-90)', vi: 'I. Số đếm (0-90)' },
    columns: [
      { en: 'Number', vi: 'Số' },
      { en: 'Reading', vi: 'Cách đọc' }
    ],
    rowLabelColumn: true,
    rows: [
      [{ label: '0' }, { jp: 'ゼロ、れい' }],
      [{ label: '1' }, { jp: 'いち' }],
      [{ label: '2' }, { jp: 'に' }],
      [{ label: '3' }, { jp: 'さん' }],
      [{ label: '4' }, { jp: 'よん、し' }],
      [{ label: '5' }, { jp: 'ご' }],
      [{ label: '6' }, { jp: 'ろく' }],
      [{ label: '7' }, { jp: 'なな、しち' }],
      [{ label: '8' }, { jp: 'はち' }],
      [{ label: '9' }, { jp: 'きゅう、く' }],
      [{ label: '10' }, { jp: 'じゅう' }],
      [{ label: '11' }, { jp: 'じゅういち' }],
      [{ label: '12' }, { jp: 'じゅうに' }],
      [{ label: '20' }, { jp: 'にじゅう' }],
      [{ label: '30' }, { jp: 'さんじゅう' }],
      [{ label: '90' }, { jp: 'きゅうじゅう' }]
    ]
  },
  {
    id: 'numbers-large',
    title: { en: 'Large numbers & fractions', vi: 'Số lớn & phân số' },
    columns: [
      { en: 'Number', vi: 'Số' },
      { en: 'Reading', vi: 'Cách đọc' }
    ],
    rowLabelColumn: true,
    rows: [
      [{ label: '100' }, { jp: 'ひゃく' }],
      [{ label: '300' }, { jp: 'さんびゃく' }],
      [{ label: '600' }, { jp: 'ろっぴゃく' }],
      [{ label: '800' }, { jp: 'はっぴゃく' }],
      [{ label: '1,000' }, { jp: 'せん' }],
      [{ label: '3,000' }, { jp: 'さんぜん' }],
      [{ label: '8,000' }, { jp: 'はっせん' }],
      [{ label: '10,000' }, { jp: 'いちまん' }],
      [{ label: '100,000,000' }, { jp: 'いちおく' }],
      [{ label: '17.5' }, { jp: 'じゅうななてんご' }],
      [{ label: '1/2' }, { jp: 'にぶんの いち' }],
      [{ label: '3/4' }, { jp: 'よんぶんの さん' }]
    ]
  },
  {
    id: 'time-relative',
    title: { en: 'II. Relative time (days)', vi: 'II. Cách nói thời gian (ngày)' },
    columns: [
      { en: 'Day', vi: 'Ngày' },
      { en: 'Morning', vi: 'Sáng' },
      { en: 'Evening', vi: 'Tối' }
    ],
    rows: [
      [
        { jp: 'おととい', meaning: { en: 'day before yesterday', vi: 'hôm kia' } },
        { jp: 'おとといの あさ', meaning: { en: 'morning before yesterday', vi: 'sáng hôm kia' } },
        { jp: 'おとといの ばん', meaning: { en: 'evening before yesterday', vi: 'tối hôm kia' } }
      ],
      [
        { jp: 'きのう', meaning: { en: 'yesterday', vi: 'hôm qua' } },
        { jp: 'きのうの あさ', meaning: { en: 'yesterday morning', vi: 'sáng hôm qua' } },
        { jp: 'きのうの ばん', meaning: { en: 'yesterday evening', vi: 'tối hôm qua' } }
      ],
      [
        { jp: 'きょう', meaning: { en: 'today', vi: 'hôm nay' } },
        { jp: 'けさ', meaning: { en: 'this morning', vi: 'sáng nay' } },
        { jp: 'こんばん', meaning: { en: 'this evening', vi: 'tối nay' } }
      ],
      [
        { jp: 'あした', meaning: { en: 'tomorrow', vi: 'ngày mai' } },
        { jp: 'あしたの あさ', meaning: { en: 'tomorrow morning', vi: 'sáng ngày mai' } },
        { jp: 'あしたの ばん', meaning: { en: 'tomorrow evening', vi: 'tối ngày mai' } }
      ],
      [
        { jp: 'まいにち', meaning: { en: 'every day', vi: 'hàng ngày' } },
        { jp: 'まいあさ', meaning: { en: 'every morning', vi: 'hàng sáng' } },
        { jp: 'まいばん', meaning: { en: 'every evening', vi: 'hàng tối' } }
      ]
    ]
  },
  {
    id: 'time-week-month',
    title: { en: 'Relative time (week / month / year)', vi: 'Thời gian (tuần / tháng / năm)' },
    columns: [
      { en: 'Week', vi: 'Tuần' },
      { en: 'Month', vi: 'Tháng' },
      { en: 'Year', vi: 'Năm' }
    ],
    rows: [
      [
        { jp: 'せんしゅう', meaning: { en: 'week before last', vi: 'tuần trước nữa' } },
        { jp: 'せんげつ', meaning: { en: 'month before last', vi: 'tháng trước nữa' } },
        { jp: 'おととし', meaning: { en: 'year before last', vi: 'năm kia' } }
      ],
      [
        { jp: 'こんしゅう', meaning: { en: 'this week', vi: 'tuần này' } },
        { jp: 'こんげつ', meaning: { en: 'this month', vi: 'tháng này' } },
        { jp: 'ことし', meaning: { en: 'this year', vi: 'năm nay' } }
      ],
      [
        { jp: 'らいしゅう', meaning: { en: 'next week', vi: 'tuần sau' } },
        { jp: 'らいげつ', meaning: { en: 'next month', vi: 'tháng sau' } },
        { jp: 'らいねん', meaning: { en: 'next year', vi: 'năm sau' } }
      ],
      [
        { jp: 'まいしゅう', meaning: { en: 'every week', vi: 'hàng tuần' } },
        { jp: 'まいつき', meaning: { en: 'every month', vi: 'hàng tháng' } },
        { jp: 'まいとし', meaning: { en: 'every year', vi: 'hàng năm' } }
      ]
    ]
  },
  {
    id: 'clock-hours',
    title: { en: 'Telling time - hours', vi: 'Nói giờ - giờ' },
    columns: [
      { en: 'Hour', vi: 'Giờ' },
      { en: 'Reading', vi: 'Cách đọc' }
    ],
    rowLabelColumn: true,
    rows: [
      [{ label: '1' }, { jp: 'いちじ' }],
      [{ label: '4' }, { jp: 'よじ' }],
      [{ label: '7' }, { jp: 'しちじ' }],
      [{ label: '9' }, { jp: 'くじ' }],
      [{ label: '12' }, { jp: 'じゅうにじ' }],
      [{ labelKey: 'referenceTableWhatTime' }, { jp: 'なんじ' }]
    ]
  },
  {
    id: 'clock-minutes',
    title: { en: 'Telling time - minutes', vi: 'Nói giờ - phút' },
    columns: [
      { en: 'Min.', vi: 'Phút' },
      { en: 'Reading', vi: 'Cách đọc' }
    ],
    rowLabelColumn: true,
    rows: [
      [{ label: '1' }, { jp: 'いっぷん' }],
      [{ label: '3' }, { jp: 'さんぷん' }],
      [{ label: '6' }, { jp: 'ろっぷん' }],
      [{ label: '8' }, { jp: 'はっぷん' }],
      [{ label: '10' }, { jp: 'じゅっぷん' }],
      [{ label: '30' }, { jp: 'さんじゅっぷん、はん' }],
      [{ labelKey: 'referenceTableHowManyMinutes' }, { jp: 'なんぷん' }]
    ]
  },
  {
    id: 'weekdays',
    title: { en: 'Days of the week', vi: 'Thứ trong tuần' },
    columns: [
      { en: 'Japanese', vi: 'Tiếng Nhật' },
      { en: 'Meaning', vi: 'Nghĩa' }
    ],
    rows: [
      [{ jp: 'にちようび' }, { meaning: { en: 'Sunday', vi: 'chủ nhật' } }],
      [{ jp: 'げつようび' }, { meaning: { en: 'Monday', vi: 'thứ hai' } }],
      [{ jp: 'かようび' }, { meaning: { en: 'Tuesday', vi: 'thứ ba' } }],
      [{ jp: 'すいようび' }, { meaning: { en: 'Wednesday', vi: 'thứ tư' } }],
      [{ jp: 'もくようび' }, { meaning: { en: 'Thursday', vi: 'thứ năm' } }],
      [{ jp: 'きんようび' }, { meaning: { en: 'Friday', vi: 'thứ sáu' } }],
      [{ jp: 'どようび' }, { meaning: { en: 'Saturday', vi: 'thứ bảy' } }],
      [{ jp: 'なんようび' }, { meaning: { en: 'which day?', vi: 'thứ mấy?' } }]
    ]
  },
  {
    id: 'months',
    title: { en: 'Months', vi: 'Tháng' },
    columns: [
      { en: 'Month', vi: 'Tháng' },
      { en: 'Reading', vi: 'Cách đọc' }
    ],
    rowLabelColumn: true,
    rows: [
      [{ label: '1' }, { jp: 'いちがつ' }],
      [{ label: '4' }, { jp: 'しがつ' }],
      [{ label: '7' }, { jp: 'しちがつ' }],
      [{ label: '9' }, { jp: 'くがつ' }],
      [{ label: '12' }, { jp: 'じゅうにがつ' }],
      [{ labelKey: 'referenceTableWhichMonth' }, { jp: 'なんがつ' }]
    ]
  },
  {
    id: 'duration-hours-minutes',
    title: { en: 'III. Duration - hours and minutes', vi: 'III. Khoảng thời gian - giờ và phút' },
    intro: {
      en: 'Counters for hours and minutes of duration.',
      vi: 'Trợ số từ cho khoảng thời gian theo giờ và phút.'
    },
    columns: [
      { en: 'No.', vi: 'Số' },
      { en: 'Hours (~時間)', vi: 'Giờ (~時間)' },
      { en: 'Minutes (~分)', vi: 'Phút (~分)' }
    ],
    rowLabelColumn: true,
    rows: [
      [{ label: '1' }, { jp: 'いちじかん' }, { jp: 'いっぷん' }],
      [{ label: '2' }, { jp: 'にじかん' }, { jp: 'にふん' }],
      [{ label: '3' }, { jp: 'さんじかん' }, { jp: 'さんぷん' }],
      [{ label: '4' }, { jp: 'よじかん' }, { jp: 'よんぷん' }],
      [{ label: '5' }, { jp: 'ごじかん' }, { jp: 'ごふん' }],
      [{ label: '6' }, { jp: 'ろくじかん' }, { jp: 'ろっぷん' }],
      [{ label: '7' }, { jp: 'ななじかん、しちじかん' }, { jp: 'ななふん' }],
      [{ label: '8' }, { jp: 'はちじかん' }, { jp: 'はっぷん' }],
      [{ label: '9' }, { jp: 'くじかん' }, { jp: 'きゅうふん' }],
      [{ label: '10' }, { jp: 'じゅうじかん' }, { jp: 'じゅっぷん、じっぷん' }],
      [{ labelKey: 'referenceTableHowMany' }, { jp: 'なんじかん' }, { jp: 'なんぷん' }]
    ]
  },
  {
    id: 'duration-days-weeks-months-years',
    title: {
      en: 'Duration - days, weeks, months, and years',
      vi: 'Khoảng thời gian - ngày, tuần, tháng và năm'
    },
    columns: [
      { en: 'No.', vi: 'Số' },
      { en: 'Days (~日)', vi: 'Ngày (~日)' },
      { en: 'Weeks (~週間)', vi: 'Tuần (~週間)' },
      { en: 'Months (~か月)', vi: 'Tháng (~か月)' },
      { en: 'Years (~年)', vi: 'Năm (~年)' }
    ],
    rowLabelColumn: true,
    rows: [
      [
        { label: '1' },
        { jp: 'いちにち' },
        { jp: 'いっしゅうかん' },
        { jp: 'いっかげつ' },
        { jp: 'いちねん' }
      ],
      [
        { label: '2' },
        { jp: 'ふつか' },
        { jp: 'にしゅうかん' },
        { jp: 'にかげつ' },
        { jp: 'にねん' }
      ],
      [
        { label: '3' },
        { jp: 'みっか' },
        { jp: 'さんしゅうかん' },
        { jp: 'さんかげつ' },
        { jp: 'さんねん' }
      ],
      [
        { label: '4' },
        { jp: 'よっか' },
        { jp: 'よんしゅうかん' },
        { jp: 'よんかげつ' },
        { jp: 'よねん' }
      ],
      [
        { label: '5' },
        { jp: 'いつか' },
        { jp: 'ごしゅうかん' },
        { jp: 'ごかげつ' },
        { jp: 'ごねん' }
      ],
      [
        { label: '6' },
        { jp: 'むいか' },
        { jp: 'ろくしゅうかん' },
        { jp: 'ろっかげつ、はんとし' },
        { jp: 'ろくねん' }
      ],
      [
        { label: '7' },
        { jp: 'なのか' },
        { jp: 'ななしゅうかん' },
        { jp: 'ななかげつ' },
        { jp: 'ななねん、しちねん' }
      ],
      [
        { label: '8' },
        { jp: 'ようか' },
        { jp: 'はっしゅうかん' },
        { jp: 'はちかげつ、はっかげつ' },
        { jp: 'はちねん' }
      ],
      [
        { label: '9' },
        { jp: 'ここのか' },
        { jp: 'きゅうしゅうかん' },
        { jp: 'きゅうかげつ' },
        { jp: 'きゅうねん' }
      ],
      [
        { label: '10' },
        { jp: 'とおか' },
        { jp: 'じゅうしゅうかん、じっしゅうかん' },
        { jp: 'じゅうかげつ、じっかげつ' },
        { jp: 'じゅうねん' }
      ],
      [
        { labelKey: 'referenceTableHowMany' },
        { jp: 'なんにち' },
        { jp: 'なんしゅうかん' },
        { jp: 'なんかげつ' },
        { jp: 'なんねん' }
      ]
    ]
  },
  {
    id: 'counters-general',
    title: { en: 'IV. Counters - general objects', vi: 'IV. Trợ số từ - đồ vật chung' },
    columns: COUNTER_COLS,
    rowLabelColumn: true,
    rows: counterRows(
      [
        'ひとつ',
        'ふたつ',
        'みっつ',
        'よっつ',
        'いつつ',
        'むっつ',
        'ななつ',
        'やっつ',
        'ここのつ',
        'とお'
      ],
      'いくつ',
      { jp: 'ひとつ', meaning: { en: 'one (thing)', vi: 'một cái' } }
    )
  },
  counterSection(
    'counters-people',
    { en: 'Counters - people (〜人)', vi: 'Trợ số từ - người (〜人)' },
    [
      'ひとり',
      'ふたり',
      'さんにん',
      'よにん',
      'ごにん',
      'ろくにん',
      'ななにん、しちにん',
      'はちにん',
      'きゅうにん',
      'じゅうにん'
    ],
    'なんにん',
    { jp: '一人', ruby: [{ base: '人', reading: 'にん' }], speech: 'ひとり' }
  ),
  counterSection(
    'counters-ordinal',
    { en: 'Counters - order (〜番)', vi: 'Trợ số từ - thứ tự (〜番)' },
    [
      'いちばん',
      'にばん',
      'さんばん',
      'よんばん',
      'ごばん',
      'ろくばん',
      'ななばん',
      'はちばん',
      'きゅうばん',
      'じゅうばん'
    ],
    'なんばん',
    { jp: '一番', ruby: [{ base: '番', reading: 'ばん' }], speech: 'いちばん' }
  ),
  counterSection(
    'counters-flat',
    { en: 'Counters - flat objects (〜枚)', vi: 'Trợ số từ - vật mỏng (〜枚)' },
    [
      'いちまい',
      'にまい',
      'さんまい',
      'よんまい',
      'ごまい',
      'ろくまい',
      'ななまい',
      'はちまい',
      'きゅうまい',
      'じゅうまい'
    ],
    'なんまい',
    { jp: '一枚', ruby: [{ base: '枚', reading: 'まい' }], speech: 'いちまい' }
  ),
  counterSection(
    'counters-machines',
    { en: 'Counters - machines (〜台)', vi: 'Trợ số từ - máy móc (〜台)' },
    [
      'いちだい',
      'にだい',
      'さんだい',
      'よんだい',
      'ごだい',
      'ろくだい',
      'ななだい',
      'はちだい',
      'きゅうだい',
      'じゅうだい'
    ],
    'なんだい',
    { jp: '一台', ruby: [{ base: '台', reading: 'だい' }], speech: 'いちだい' }
  ),
  counterSection(
    'counters-age',
    { en: 'Counters - age (〜歳)', vi: 'Trợ số từ - tuổi (〜歳)' },
    [
      'いっさい',
      'にさい',
      'さんさい',
      'よんさい',
      'ごさい',
      'ろくさい',
      'ななさい',
      'はっさい',
      'きゅうさい',
      'じゅっさい、じっさい'
    ],
    'なんさい',
    { jp: '一歳', ruby: [{ base: '歳', reading: 'さい' }], speech: 'いっさい' }
  ),
  counterSection(
    'counters-books',
    { en: 'Counters - books (〜冊)', vi: 'Trợ số từ - sách (〜冊)' },
    [
      'いっさつ',
      'にさつ',
      'さんさつ',
      'よんさつ',
      'ごさつ',
      'ろくさつ',
      'ななさつ',
      'はっさつ',
      'きゅうさつ',
      'じゅっさつ、じっさつ'
    ],
    'なんさつ',
    { jp: '一冊', ruby: [{ base: '冊', reading: 'さつ' }], speech: 'いっさつ' }
  ),
  counterSection(
    'counters-clothes',
    { en: 'Counters - clothes (〜着)', vi: 'Trợ số từ - quần áo (〜着)' },
    [
      'いっちゃく',
      'にちゃく',
      'さんちゃく',
      'よんちゃく',
      'ごちゃく',
      'ろくちゃく',
      'ななちゃく',
      'はっちゃく',
      'きゅうちゃく',
      'じゅっちゃく、じっちゃく'
    ],
    'なんちゃく',
    { jp: '一着', ruby: [{ base: '着', reading: 'ちゃく' }], speech: 'いっちゃく' }
  ),
  counterSection(
    'counters-times',
    { en: 'Counters - times (〜回)', vi: 'Trợ số từ - lần (〜回)' },
    [
      'いっかい',
      'にかい',
      'さんかい',
      'よんかい',
      'ごかい',
      'ろっかい',
      'ななかい',
      'はっかい',
      'きゅうかい',
      'じゅっかい、じっかい'
    ],
    'なんかい',
    { jp: '一回', ruby: [{ base: '回', reading: 'かい' }], speech: 'いっかい' }
  ),
  counterSection(
    'counters-small-objects',
    { en: 'Counters - small objects (〜個)', vi: 'Trợ số từ - vật nhỏ (〜個)' },
    [
      'いっこ',
      'にこ',
      'さんこ',
      'よんこ',
      'ごこ',
      'ろっこ',
      'ななこ',
      'はっこ',
      'きゅうこ',
      'じゅっこ、じっこ'
    ],
    'なんこ',
    { jp: '一個', ruby: [{ base: '個', reading: 'こ' }], speech: 'いっこ' }
  ),
  counterSection(
    'counters-footwear',
    { en: 'Counters - footwear (〜足)', vi: 'Trợ số từ - giày, tất (〜足)' },
    [
      'いっそく',
      'にそく',
      'さんぞく',
      'よんそく',
      'ごそく',
      'ろくそく',
      'ななそく',
      'はっそく',
      'きゅうそく',
      'じゅっそく、じっそく'
    ],
    'なんぞく',
    { jp: '一足', ruby: [{ base: '足', reading: 'そく' }], speech: 'いっそく' }
  ),
  counterSection(
    'counters-houses',
    { en: 'Counters - houses (〜軒)', vi: 'Trợ số từ - nhà (〜軒)' },
    [
      'いっけん',
      'にけん',
      'さんげん',
      'よんけん',
      'ごけん',
      'ろっけん',
      'ななけん',
      'はっけん',
      'きゅうけん',
      'じゅっけん、じっけん'
    ],
    'なんげん',
    { jp: '一軒', ruby: [{ base: '軒', reading: 'けん' }], speech: 'いっけん' }
  ),
  counterSection(
    'counters-floors',
    { en: 'Counters - floors (〜階)', vi: 'Trợ số từ - tầng (〜階)' },
    [
      'いっかい',
      'にかい',
      'さんがい',
      'よんかい',
      'ごかい',
      'ろっかい',
      'ななかい',
      'はっかい',
      'きゅうかい',
      'じゅっかい、じっかい'
    ],
    'なんがい',
    { jp: '一階', ruby: [{ base: '階', reading: 'かい' }], speech: 'いっかい' }
  ),
  counterSection(
    'counters-long',
    { en: 'Counters - long objects (〜本)', vi: 'Trợ số từ - vật thon (〜本)' },
    [
      'いっぽん',
      'にほん',
      'さんぼん',
      'よんほん',
      'ごほん',
      'ろっぽん',
      'ななほん',
      'はっぽん',
      'きゅうほん',
      'じゅっぽん、じっぽん'
    ],
    'なんぼん',
    { jp: '一本', ruby: [{ base: '本', reading: 'ぽん' }], speech: 'いっぽん' }
  ),
  counterSection(
    'counters-cups',
    { en: 'Counters - cups (〜杯)', vi: 'Trợ số từ - ly (〜杯)' },
    [
      'いっぱい',
      'にはい',
      'さんばい',
      'よんはい',
      'ごはい',
      'ろっぱい',
      'ななはい',
      'はっぱい',
      'きゅうはい',
      'じゅっぱい、じっぱい'
    ],
    'なんばい',
    { jp: '一杯', ruby: [{ base: '杯', reading: 'はい' }], speech: 'いっぱい' }
  ),
  counterSection(
    'counters-animals',
    { en: 'Counters - small animals (〜匹)', vi: 'Trợ số từ - con vật nhỏ (〜匹)' },
    [
      'いっぴき',
      'にひき',
      'さんびき',
      'よんひき',
      'ごひき',
      'ろっぴき',
      'ななひき',
      'はっぴき',
      'きゅうひき',
      'じゅっぴき、じっぴき'
    ],
    'なんびき',
    { jp: '一匹', ruby: [{ base: '匹', reading: 'ひき' }], speech: 'いっぴき' }
  )
];
