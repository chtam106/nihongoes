import type { Lesson } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu I - Lesson 5 (going / coming / dates). */
export const n5Lesson5: Lesson = {
  id: 'lesson-5',
  number: 5,
  title: {
    en: 'Where are you going?',
    vi: 'Bạn đi đâu?'
  },
  focus: {
    en: 'Talk about going and coming, means of transport, companions, and dates.',
    vi: 'Nói về đi/đến/về, phương tiện, người đi cùng và ngày tháng.'
  },
  vocab: [
    {
      kana: 'いきます',
      kanji: '行きます',
      romaji: 'ikimasu',
      meaning: { en: 'to go', vi: 'đi' },
      ruby: [{ base: '行', reading: 'い' }]
    },
    {
      kana: 'きます',
      kanji: '来ます',
      romaji: 'kimasu',
      meaning: { en: 'to come', vi: 'đến' },
      ruby: [{ base: '来', reading: 'き' }]
    },
    {
      kana: 'かえります',
      kanji: '帰ります',
      romaji: 'kaerimasu',
      meaning: { en: 'to return, go home', vi: 'về' },
      ruby: [{ base: '帰', reading: 'かえ' }]
    },
    {
      kana: 'がっこう',
      kanji: '学校',
      romaji: 'gakkō',
      meaning: { en: 'school', vi: 'trường học' },
      ruby: [
        { base: '学', reading: 'がっ' },
        { base: '校', reading: 'こう' }
      ]
    },
    {
      kana: 'スーパー',
      romaji: 'sūpā',
      meaning: { en: 'supermarket', vi: 'siêu thị' }
    },
    {
      kana: 'えき',
      kanji: '駅',
      romaji: 'eki',
      meaning: { en: 'station', vi: 'ga, nhà ga' },
      ruby: [{ base: '駅', reading: 'えき' }]
    },
    {
      kana: 'ひこうき',
      kanji: '飛行機',
      romaji: 'hikōki',
      meaning: { en: 'airplane', vi: 'máy bay' },
      ruby: [
        { base: '飛', reading: 'ひ' },
        { base: '行', reading: 'こう' },
        { base: '機', reading: 'き' }
      ]
    },
    {
      kana: 'ふね',
      kanji: '船',
      romaji: 'fune',
      meaning: { en: 'ship, boat', vi: 'thuyền, tàu thủy' },
      ruby: [{ base: '船', reading: 'ふね' }]
    },
    {
      kana: 'でんしゃ',
      kanji: '電車',
      romaji: 'densha',
      meaning: { en: 'train (electric)', vi: 'tàu điện' },
      ruby: [
        { base: '電', reading: 'でん' },
        { base: '車', reading: 'しゃ' }
      ]
    },
    {
      kana: 'ちかてつ',
      kanji: '地下鉄',
      romaji: 'chikatetsu',
      meaning: { en: 'subway, underground', vi: 'tàu điện ngầm' },
      ruby: [
        { base: '地', reading: 'ち' },
        { base: '下', reading: 'か' },
        { base: '鉄', reading: 'てつ' }
      ]
    },
    {
      kana: 'しんかんせん',
      kanji: '新幹線',
      romaji: 'shinkansen',
      meaning: { en: 'Shinkansen (bullet train)', vi: 'tàu Shinkansen (tàu cao tốc Nhật)' },
      ruby: [
        { base: '新', reading: 'しん' },
        { base: '幹', reading: 'かん' },
        { base: '線', reading: 'せん' }
      ]
    },
    {
      kana: 'バス',
      romaji: 'basu',
      meaning: { en: 'bus', vi: 'xe buýt' }
    },
    {
      kana: 'タクシー',
      romaji: 'takushī',
      meaning: { en: 'taxi', vi: 'tắc-xi' }
    },
    {
      kana: 'じてんしゃ',
      kanji: '自転車',
      romaji: 'jitensha',
      meaning: { en: 'bicycle', vi: 'xe đạp' },
      ruby: [
        { base: '自', reading: 'じ' },
        { base: '転', reading: 'てん' },
        { base: '車', reading: 'しゃ' }
      ]
    },
    {
      kana: 'あるいて',
      kanji: '歩いて',
      romaji: 'aruite',
      meaning: { en: 'on foot, by walking', vi: 'đi bộ' },
      ruby: [{ base: '歩', reading: 'ある' }]
    },
    {
      kana: 'ひと',
      kanji: '人',
      romaji: 'hito',
      meaning: { en: 'person, people', vi: 'người' },
      ruby: [{ base: '人', reading: 'ひと' }]
    },
    {
      kana: 'ともだち',
      kanji: '友達',
      romaji: 'tomodachi',
      meaning: { en: 'friend', vi: 'bạn, bạn bè' },
      ruby: [
        { base: '友', reading: 'とも' },
        { base: '達', reading: 'だち' }
      ]
    },
    {
      kana: 'かれ',
      kanji: '彼',
      romaji: 'kare',
      meaning: { en: 'he, boyfriend', vi: 'anh ấy, bạn trai' },
      ruby: [{ base: '彼', reading: 'かれ' }]
    },
    {
      kana: 'かのじょ',
      kanji: '彼女',
      romaji: 'kanojo',
      meaning: { en: 'she, girlfriend', vi: 'chị ấy, bạn gái' },
      ruby: [
        { base: '彼', reading: 'かの' },
        { base: '女', reading: 'じょ' }
      ]
    },
    {
      kana: 'かぞく',
      kanji: '家族',
      romaji: 'kazoku',
      meaning: { en: 'family', vi: 'gia đình' },
      ruby: [
        { base: '家', reading: 'か' },
        { base: '族', reading: 'ぞく' }
      ]
    },
    {
      kana: 'ひとりで',
      kanji: '一人で',
      romaji: 'hitori de',
      meaning: { en: 'alone, by oneself', vi: 'một mình' },
      ruby: [
        { base: '一', reading: 'ひと' },
        { base: '人', reading: 'り' }
      ]
    },
    {
      kana: 'せんしゅう',
      kanji: '先週',
      romaji: 'senshū',
      meaning: { en: 'last week', vi: 'tuần trước' },
      ruby: [
        { base: '先', reading: 'せん' },
        { base: '週', reading: 'しゅう' }
      ]
    },
    {
      kana: 'こんしゅう',
      kanji: '今週',
      romaji: 'konshū',
      meaning: { en: 'this week', vi: 'tuần này' },
      ruby: [
        { base: '今', reading: 'こん' },
        { base: '週', reading: 'しゅう' }
      ]
    },
    {
      kana: 'らいしゅう',
      kanji: '来週',
      romaji: 'raishū',
      meaning: { en: 'next week', vi: 'tuần sau' },
      ruby: [
        { base: '来', reading: 'らい' },
        { base: '週', reading: 'しゅう' }
      ]
    },
    {
      kana: 'せんげつ',
      kanji: '先月',
      romaji: 'sengetsu',
      meaning: { en: 'last month', vi: 'tháng trước' },
      ruby: [
        { base: '先', reading: 'せん' },
        { base: '月', reading: 'げつ' }
      ]
    },
    {
      kana: 'こんげつ',
      kanji: '今月',
      romaji: 'kongetsu',
      meaning: { en: 'this month', vi: 'tháng này' },
      ruby: [
        { base: '今', reading: 'こん' },
        { base: '月', reading: 'げつ' }
      ]
    },
    {
      kana: 'らいげつ',
      kanji: '来月',
      romaji: 'raigetsu',
      meaning: { en: 'next month', vi: 'tháng sau' },
      ruby: [
        { base: '来', reading: 'らい' },
        { base: '月', reading: 'げつ' }
      ]
    },
    {
      kana: 'きょねん',
      kanji: '去年',
      romaji: 'kyonen',
      meaning: { en: 'last year', vi: 'năm ngoái' },
      ruby: [
        { base: '去', reading: 'きょ' },
        { base: '年', reading: 'ねん' }
      ]
    },
    {
      kana: 'ことし',
      kanji: '今年',
      romaji: 'kotoshi',
      meaning: { en: 'this year', vi: 'năm nay' },
      ruby: [
        { base: '今', reading: 'こ' },
        { base: '年', reading: 'とし' }
      ]
    },
    {
      kana: 'らいねん',
      kanji: '来年',
      romaji: 'rainen',
      meaning: { en: 'next year', vi: 'sang năm' },
      ruby: [
        { base: '来', reading: 'らい' },
        { base: '年', reading: 'ねん' }
      ]
    },
    {
      kana: '〜ねん',
      kanji: '〜年',
      romaji: '~nen',
      speech: 'ねん',
      meaning: { en: '~ year(s)', vi: '~ năm' },
      ruby: [{ base: '年', reading: 'ねん' }]
    },
    {
      kana: 'なんねん',
      kanji: '何年',
      romaji: 'nannen',
      meaning: { en: 'what year, how many years', vi: 'mấy năm, năm bao nhiêu' },
      ruby: [
        { base: '何', reading: 'なん' },
        { base: '年', reading: 'ねん' }
      ]
    },
    {
      kana: '〜がつ',
      kanji: '〜月',
      romaji: '~gatsu',
      speech: 'がつ',
      meaning: { en: '~ month (name of a month)', vi: 'tháng ~' },
      ruby: [{ base: '月', reading: 'がつ' }]
    },
    {
      kana: 'なんがつ',
      kanji: '何月',
      romaji: 'nangatsu',
      meaning: { en: 'what month', vi: 'tháng mấy' },
      ruby: [
        { base: '何', reading: 'なん' },
        { base: '月', reading: 'がつ' }
      ]
    },
    {
      kana: 'ついたち',
      kanji: '一日',
      romaji: 'tsuitachi',
      meaning: { en: 'the 1st of the month', vi: 'ngày mồng 1' },
      ruby: [
        { base: '一', reading: 'つい' },
        { base: '日', reading: 'たち' }
      ]
    },
    {
      kana: 'ふつか',
      kanji: '二日',
      romaji: 'futsuka',
      meaning: { en: 'the 2nd; 2 days', vi: 'ngày mồng 2, 2 ngày' },
      ruby: [
        { base: '二', reading: 'ふつ' },
        { base: '日', reading: 'か' }
      ]
    },
    {
      kana: 'みっか',
      kanji: '三日',
      romaji: 'mikka',
      meaning: { en: 'the 3rd; 3 days', vi: 'ngày mồng 3, 3 ngày' },
      ruby: [
        { base: '三', reading: 'みっ' },
        { base: '日', reading: 'か' }
      ]
    },
    {
      kana: 'よっか',
      kanji: '四日',
      romaji: 'yokka',
      meaning: { en: 'the 4th; 4 days', vi: 'ngày mồng 4, 4 ngày' },
      ruby: [
        { base: '四', reading: 'よっ' },
        { base: '日', reading: 'か' }
      ]
    },
    {
      kana: 'いつか',
      kanji: '五日',
      romaji: 'itsuka',
      meaning: { en: 'the 5th; 5 days', vi: 'ngày mồng 5, 5 ngày' },
      ruby: [
        { base: '五', reading: 'いつ' },
        { base: '日', reading: 'か' }
      ]
    },
    {
      kana: 'むいか',
      kanji: '六日',
      romaji: 'muika',
      meaning: { en: 'the 6th; 6 days', vi: 'ngày mồng 6, 6 ngày' },
      ruby: [
        { base: '六', reading: 'むい' },
        { base: '日', reading: 'か' }
      ]
    },
    {
      kana: 'なのか',
      kanji: '七日',
      romaji: 'nanoka',
      meaning: { en: 'the 7th; 7 days', vi: 'ngày mồng 7, 7 ngày' },
      ruby: [
        { base: '七', reading: 'なの' },
        { base: '日', reading: 'か' }
      ]
    },
    {
      kana: 'ようか',
      kanji: '八日',
      romaji: 'yōka',
      meaning: { en: 'the 8th; 8 days', vi: 'ngày mồng 8, 8 ngày' },
      ruby: [
        { base: '八', reading: 'よう' },
        { base: '日', reading: 'か' }
      ]
    },
    {
      kana: 'ここのか',
      kanji: '九日',
      romaji: 'kokonoka',
      meaning: { en: 'the 9th; 9 days', vi: 'ngày mồng 9, 9 ngày' },
      ruby: [
        { base: '九', reading: 'ここの' },
        { base: '日', reading: 'か' }
      ]
    },
    {
      kana: 'とおか',
      kanji: '十日',
      romaji: 'tōka',
      meaning: { en: 'the 10th; 10 days', vi: 'ngày mồng 10, 10 ngày' },
      ruby: [
        { base: '十', reading: 'とお' },
        { base: '日', reading: 'か' }
      ]
    },
    {
      kana: 'じゅうよっか',
      kanji: '十四日',
      romaji: 'jūyokka',
      meaning: { en: 'the 14th; 14 days', vi: 'ngày 14, 14 ngày' },
      ruby: [
        { base: '十', reading: 'じゅう' },
        { base: '四', reading: 'よっ' },
        { base: '日', reading: 'か' }
      ]
    },
    {
      kana: 'はつか',
      kanji: '二十日',
      romaji: 'hatsuka',
      meaning: { en: 'the 20th; 20 days', vi: 'ngày 20, 20 ngày' },
      ruby: [
        { base: '二', reading: 'は' },
        { base: '十', reading: 'つ' },
        { base: '日', reading: 'か' }
      ]
    },
    {
      kana: 'にじゅうよっか',
      kanji: '二十四日',
      romaji: 'nijūyokka',
      meaning: { en: 'the 24th; 24 days', vi: 'ngày 24, 24 ngày' },
      ruby: [
        { base: '二', reading: 'に' },
        { base: '十', reading: 'じゅう' },
        { base: '四', reading: 'よっ' },
        { base: '日', reading: 'か' }
      ]
    },
    {
      kana: '〜にち',
      kanji: '〜日',
      romaji: '~nichi',
      speech: 'にち',
      meaning: { en: 'the ~th day; ~ days', vi: 'ngày ~, ~ ngày' },
      ruby: [{ base: '日', reading: 'にち' }]
    },
    {
      kana: 'なんにち',
      kanji: '何日',
      romaji: 'nannichi',
      meaning: {
        en: 'what day of the month; how many days',
        vi: 'ngày mấy, ngày bao nhiêu, mấy ngày'
      },
      ruby: [
        { base: '何', reading: 'なん' },
        { base: '日', reading: 'にち' }
      ]
    },
    {
      kana: 'いつ',
      romaji: 'itsu',
      meaning: { en: 'when', vi: 'bao giờ, khi nào' }
    },
    {
      kana: 'たんじょうび',
      kanji: '誕生日',
      romaji: 'tanjōbi',
      meaning: { en: 'birthday', vi: 'sinh nhật' },
      ruby: [
        { base: '誕', reading: 'たん' },
        { base: '生', reading: 'じょう' },
        { base: '日', reading: 'び' }
      ]
    }
  ],
  phrases: [
    {
      kana: 'そうですね。',
      romaji: 'sō desu ne.',
      meaning: {
        en: "That's right. / Yes, that's true. (agreement)",
        vi: 'Ừ, nhỉ. (đồng ý, đồng cảm)'
      }
    },
    {
      kana: 'ありがとうございました。',
      romaji: 'arigatō gozaimashita.',
      meaning: {
        en: 'Thank you very much. (often with どうも)',
        vi: 'Xin cảm ơn anh/chị rất nhiều. (thường kèm どうも)'
      }
    },
    {
      kana: 'どういたしまして。',
      romaji: 'dō itashimashite.',
      meaning: { en: "You're welcome.", vi: 'Không có gì đâu (đừng bận tâm).' }
    },
    {
      kana: '〜ばんせん',
      kanji: '〜番線',
      romaji: '~bansen',
      speech: 'ばんせん',
      meaning: { en: 'platform ~', vi: 'sân ga số ~' },
      ruby: [
        { base: '番', reading: 'ばん' },
        { base: '線', reading: 'せん' }
      ]
    },
    {
      kana: 'つぎの',
      kanji: '次の',
      romaji: 'tsugi no',
      meaning: { en: 'next, the following', vi: 'tiếp theo' },
      ruby: [{ base: '次', reading: 'つぎ' }]
    },
    {
      kana: 'ふつう',
      kanji: '普通',
      romaji: 'futsū',
      meaning: {
        en: 'local train (stops at every station)',
        vi: 'tàu thường (dừng cả ở các ga lẻ)'
      },
      ruby: [
        { base: '普', reading: 'ふ' },
        { base: '通', reading: 'つう' }
      ]
    },
    {
      kana: 'きゅうこう',
      kanji: '急行',
      romaji: 'kyūkō',
      meaning: { en: 'express train', vi: 'tàu tốc hành' },
      ruby: [
        { base: '急', reading: 'きゅう' },
        { base: '行', reading: 'こう' }
      ]
    },
    {
      kana: 'とっきゅう',
      kanji: '特急',
      romaji: 'tokkyū',
      meaning: { en: 'limited express', vi: 'tàu tốc hành đặc biệt' },
      ruby: [
        { base: '特', reading: 'とっ' },
        { base: '急', reading: 'きゅう' }
      ]
    }
  ],
  conversation: [
    {
      id: 'conv-lesson5-weekend-plans',
      title: { en: 'Weekend plans', vi: 'Kế hoạch cuối tuần' },
      speakers: [
        { id: 'mai', name: 'マイ' },
        { id: 'ken', name: 'ケン' }
      ],
      lines: [
        {
          speakerId: 'mai',
          jp: 'ケンさん、日曜日 どこへ 行きますか。',
          romaji: 'Ken-san, nichiyōbi doko e ikimasu ka.',
          meaning: {
            en: 'Ken, where are you going on Sunday?',
            vi: 'Ken, chủ nhật bạn đi đâu?'
          },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'ken',
          jp: '京都へ 行きます。友達と 行きます。',
          romaji: 'Kyōto e ikimasu. Tomodachi to ikimasu.',
          meaning: {
            en: "I'm going to Kyoto. I'm going with a friend.",
            vi: 'Tôi đi Kyoto. Đi với bạn.'
          },
          ruby: [
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '行', reading: 'い' },
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'mai',
          jp: '何で 行きますか。',
          romaji: 'Nan de ikimasu ka.',
          meaning: { en: 'How are you going?', vi: 'Đi bằng gì?' },
          ruby: [
            { base: '何', reading: 'なん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'ken',
          jp: '新幹線で 行きます。',
          romaji: 'Shinkansen de ikimasu.',
          meaning: { en: "I'm going by Shinkansen.", vi: 'Đi bằng Shinkansen.' },
          ruby: [
            { base: '新', reading: 'しん' },
            { base: '幹', reading: 'かん' },
            { base: '線', reading: 'せん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'mai',
          jp: 'いいですね。',
          romaji: 'Ii desu ne.',
          meaning: { en: 'Nice.', vi: 'Hay quá nhỉ.' }
        }
      ]
    },
    {
      id: 'conv-lesson5-birthday',
      title: { en: 'Asking about a birthday', vi: 'Hỏi sinh nhật' },
      speakers: [
        { id: 'yuki', name: 'ユキ' },
        { id: 'alex', name: 'アレックス' }
      ],
      lines: [
        {
          speakerId: 'yuki',
          jp: 'アレックスさん、誕生日は いつですか。',
          romaji: 'Arekkusu-san, tanjōbi wa itsu desu ka.',
          meaning: { en: 'Alex, when is your birthday?', vi: 'Alex, sinh nhật bạn khi nào?' },
          ruby: [
            { base: '誕', reading: 'たん' },
            { base: '生', reading: 'じょう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          speakerId: 'alex',
          jp: '9月1日です。',
          romaji: 'Ku-gatsu tsuitachi desu.',
          meaning: { en: 'September 1st.', vi: 'Ngày mồng 1 tháng 9.' },
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ]
        },
        {
          speakerId: 'yuki',
          jp: 'そうですか。来週ですね。',
          romaji: 'Sō desu ka. Raishū desu ne.',
          meaning: { en: 'I see. That is next week.', vi: 'Thế à. Là tuần sau nhỉ.' },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' }
          ]
        },
        {
          speakerId: 'alex',
          jp: 'あ、そうですね。',
          romaji: 'A, sō desu ne.',
          meaning: { en: 'Oh, that is right.', vi: 'À, ừ nhỉ.' }
        }
      ]
    },
    {
      id: 'conv-lesson5-at-the-station',
      title: { en: 'At the station', vi: 'Ở nhà ga' },
      speakers: [
        { id: 'lin', name: 'リン' },
        { id: 'staff', name: 'えきいん' }
      ],
      lines: [
        {
          speakerId: 'lin',
          jp: 'すみません。大阪城は 何番線ですか。',
          romaji: 'Sumimasen. Ōsakajō wa nan-bansen desu ka.',
          meaning: {
            en: 'Excuse me. Which platform for Osaka Castle?',
            vi: 'Xin lỗi. Osaka Castle là sân ga số mấy?'
          },
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '城', reading: 'じょう' },
            { base: '何', reading: 'なん' },
            { base: '番', reading: 'ばん' },
            { base: '線', reading: 'せん' }
          ]
        },
        {
          speakerId: 'staff',
          jp: '3番線です。',
          romaji: 'San-bansen desu.',
          meaning: { en: 'Platform 3.', vi: 'Sân ga số 3.' },
          ruby: [
            { base: '番', reading: 'ばん' },
            { base: '線', reading: 'せん' }
          ]
        },
        {
          speakerId: 'lin',
          jp: 'この 電車は 大阪城へ 行きますか。',
          romaji: 'Kono densha wa Ōsakajō e ikimasu ka.',
          meaning: {
            en: 'Does this train go to Osaka Castle?',
            vi: 'Tàu này có đi Osaka Castle không?'
          },
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '城', reading: 'じょう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          speakerId: 'staff',
          jp: 'いいえ、行きません。次の「普通」ですよ。',
          romaji: 'Iie, ikimasen. Tsugi no "futsū" desu yo.',
          meaning: {
            en: 'No, it does not. The next local train does.',
            vi: 'Không, không đi. Chuyến tàu thường tiếp theo mới đi cơ.'
          },
          ruby: [
            { base: '行', reading: 'い' },
            { base: '次', reading: 'つぎ' },
            { base: '普', reading: 'ふ' },
            { base: '通', reading: 'つう' }
          ]
        },
        {
          speakerId: 'lin',
          jp: 'そうですか。どうも ありがとう ございました。',
          romaji: 'Sō desu ka. Dōmo arigatō gozaimashita.',
          meaning: { en: 'I see. Thank you very much.', vi: 'Thế à. Cảm ơn rất nhiều.' }
        },
        {
          speakerId: 'staff',
          jp: 'どういたしまして。',
          romaji: 'Dō itashimashite.',
          meaning: { en: "You're welcome.", vi: 'Không có gì.' }
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: 'N へ 行きます / 来ます / 帰ります',
      patternRuby: [
        { base: '行', reading: 'い' },
        { base: '来', reading: 'き' },
        { base: '帰', reading: 'かえ' }
      ],
      highlights: ['へ', ['行きます', '来ます', '帰ります']],
      title: { en: 'Destination with へ', vi: 'Điểm đến với へ' },
      explanation: {
        en: 'With movement verbs, へ marks the direction. It is pronounced "e", not "he". Common verbs: 行きます (go), 来ます (come), 帰ります (return / go home).',
        vi: 'Với động từ di chuyển, へ chỉ hướng đi. Đọc là "e", không phải "he". Các động từ thường gặp: 行きます (đi), 来ます (đến), 帰ります (về).'
      },
      explanationRuby: [
        { base: '行', reading: 'い' },
        { base: '来', reading: 'き' },
        { base: '帰', reading: 'かえ' }
      ],
      examples: [
        {
          jp: '京都へ 行きます。',
          romaji: 'Kyōto e ikimasu.',
          meaning: { en: 'I go to Kyoto.', vi: 'Tôi đi Kyoto.' },
          ruby: [
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '日本へ 来ました。',
          romaji: 'Nihon e kimashita.',
          meaning: { en: 'I came to Japan.', vi: 'Tôi đã đến Nhật Bản.' },
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: 'うちへ 帰ります。',
          romaji: 'Uchi e kaerimasu.',
          meaning: { en: 'I go home.', vi: 'Tôi về nhà.' },
          ruby: [{ base: '帰', reading: 'かえ' }]
        }
      ],
      answers: {
        explanation: {
          en: 'Ask the destination with どこへ. Answer with a place + へ + the movement verb, or use total negation (next point).',
          vi: 'Hỏi điểm đến bằng どこへ. Trả lời bằng địa điểm + へ + động từ di chuyển, hoặc phủ định toàn bộ (mục tiếp).'
        },
        highlights: ['どこ', 'へ', 'か'],
        examples: [
          {
            jp: 'あした どこへ 行きますか。',
            romaji: 'Ashita doko e ikimasu ka.',
            meaning: { en: 'Where are you going tomorrow?', vi: 'Ngày mai bạn đi đâu?' },
            dialogueGroup: 'where-go',
            ruby: [{ base: '行', reading: 'い' }]
          },
          {
            jp: '奈良へ 行きます。',
            romaji: 'Nara e ikimasu.',
            meaning: { en: 'I am going to Nara.', vi: 'Tôi đi Nara.' },
            dialogueGroup: 'where-go',
            ruby: [
              { base: '奈', reading: 'な' },
              { base: '良', reading: 'ら' },
              { base: '行', reading: 'い' }
            ]
          }
        ]
      }
    },
    {
      pattern: 'どこ [へ] も 行きません',
      patternRuby: [{ base: '行', reading: 'い' }],
      highlights: ['どこ', 'へ', 'も', ['行きません', '行きませんでした']],
      title: { en: 'Total negation (どこも)', vi: 'Phủ định toàn bộ (どこも)' },
      explanation: {
        en: 'To negate a question word completely, add も after it (どこも, なにも, だれも) and use the negative verb. へ after どこ is optional: どこへも / どこも.',
        vi: 'Để phủ định hoàn toàn một nghi vấn từ, thêm も sau nó (どこも, なにも, だれも) và dùng động từ phủ định. へ sau どこ có thể lược: どこへも / どこも.'
      },
      examples: [
        {
          jp: 'どこも 行きません。',
          romaji: 'Doko mo ikimasen.',
          meaning: { en: 'I am not going anywhere.', vi: 'Tôi không đi đâu cả.' },
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          jp: '日曜日 どこへも 行きませんでした。',
          romaji: 'Nichiyōbi doko e mo ikimasen deshita.',
          meaning: {
            en: 'I did not go anywhere on Sunday.',
            vi: 'Chủ nhật tôi không đi đâu cả.'
          },
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '何も 食べません。',
          romaji: 'Nani mo tabemasen.',
          meaning: { en: 'I do not eat anything.', vi: 'Tôi không ăn gì cả.' },
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          jp: 'だれも 来ませんでした。',
          romaji: 'Dare mo kimasen deshita.',
          meaning: { en: 'No one came.', vi: 'Không có ai đến cả.' },
          ruby: [{ base: '来', reading: 'き' }]
        }
      ]
    },
    {
      pattern: 'N で 行きます / 来ます / 帰ります',
      patternRuby: [
        { base: '行', reading: 'い' },
        { base: '来', reading: 'き' },
        { base: '帰', reading: 'かえ' }
      ],
      highlights: ['で', ['行きます', '来ます', '帰ります']],
      title: { en: 'Means of transport (で)', vi: 'Phương tiện (で)' },
      explanation: {
        en: 'で after a transport noun marks the means: 電車で 行きます. For walking, use 歩いて without で.',
        vi: 'で sau danh từ phương tiện chỉ cách thức: 電車で 行きます. Đi bộ dùng 歩いて, không thêm で.'
      },
      explanationRuby: [
        { base: '電', reading: 'でん' },
        { base: '車', reading: 'しゃ' },
        { base: '行', reading: 'い' },
        { base: '歩', reading: 'ある' }
      ],
      examples: [
        {
          jp: '電車で 行きます。',
          romaji: 'Densha de ikimasu.',
          meaning: { en: 'I go by train.', vi: 'Tôi đi bằng tàu điện.' },
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: 'タクシーで 来ました。',
          romaji: 'Takushī de kimashita.',
          meaning: { en: 'I came by taxi.', vi: 'Tôi đã đến bằng tắc-xi.' },
          ruby: [{ base: '来', reading: 'き' }]
        },
        {
          jp: '駅から 歩いて 帰りました。',
          romaji: 'Eki kara aruite kaerimashita.',
          meaning: {
            en: 'I walked home from the station.',
            vi: 'Tôi đã đi bộ từ ga về nhà.'
          },
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '歩', reading: 'ある' },
            { base: '帰', reading: 'かえ' }
          ]
        }
      ],
      answers: {
        explanation: {
          en: 'Ask the means with 何で. Answer with transport + で, or 歩いて.',
          vi: 'Hỏi phương tiện bằng 何で. Trả lời bằng phương tiện + で, hoặc 歩いて.'
        },
        explanationRuby: [
          { base: '何', reading: 'なん' },
          { base: '歩', reading: 'ある' }
        ],
        highlights: ['何', 'で', 'か'],
        examples: [
          {
            jp: '何で 東京へ 行きますか。',
            romaji: 'Nan de Tōkyō e ikimasu ka.',
            meaning: { en: 'How are you going to Tokyo?', vi: 'Bạn đi Tokyo bằng gì?' },
            dialogueGroup: 'how-go',
            ruby: [
              { base: '何', reading: 'なん' },
              { base: '東', reading: 'とう' },
              { base: '京', reading: 'きょう' },
              { base: '行', reading: 'い' }
            ]
          },
          {
            jp: '新幹線で 行きます。',
            romaji: 'Shinkansen de ikimasu.',
            meaning: { en: 'I am going by Shinkansen.', vi: 'Tôi đi bằng Shinkansen.' },
            dialogueGroup: 'how-go',
            ruby: [
              { base: '新', reading: 'しん' },
              { base: '幹', reading: 'かん' },
              { base: '線', reading: 'せん' },
              { base: '行', reading: 'い' }
            ]
          }
        ]
      }
    },
    {
      pattern: 'N と V',
      highlights: ['と'],
      title: { en: 'Companion with と', vi: 'Người đi cùng với と' },
      explanation: {
        en: 'と after a person (or animal) marks who you do the action with. To say you act alone, use 一人で - do not use と.',
        vi: 'と sau người (hoặc động vật) chỉ người cùng thực hiện hành động. Nếu làm một mình, dùng 一人で - không dùng と.'
      },
      explanationRuby: [
        { base: '一', reading: 'ひと' },
        { base: '人', reading: 'り' }
      ],
      examples: [
        {
          jp: '家族と 日本へ 来ました。',
          romaji: 'Kazoku to Nihon e kimashita.',
          meaning: {
            en: 'I came to Japan with my family.',
            vi: 'Tôi đã đến Nhật Bản cùng gia đình.'
          },
          ruby: [
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: '一人で 東京へ 行きます。',
          romaji: 'Hitori de Tōkyō e ikimasu.',
          meaning: { en: 'I am going to Tokyo alone.', vi: 'Tôi đi Tokyo một mình.' },
          ruby: [
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' },
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '行', reading: 'い' }
          ]
        }
      ],
      answers: {
        explanation: {
          en: 'Ask the companion with だれと.',
          vi: 'Hỏi người đi cùng bằng だれと.'
        },
        highlights: ['だれ', 'と', 'か'],
        examples: [
          {
            jp: 'だれと 東京へ 行きますか。',
            romaji: 'Dare to Tōkyō e ikimasu ka.',
            meaning: {
              en: 'Who are you going to Tokyo with?',
              vi: 'Bạn đi Tokyo với ai?'
            },
            dialogueGroup: 'who-with',
            ruby: [
              { base: '東', reading: 'とう' },
              { base: '京', reading: 'きょう' },
              { base: '行', reading: 'い' }
            ]
          },
          {
            jp: '山田さんと 行きます。',
            romaji: 'Yamada-san to ikimasu.',
            meaning: { en: 'I am going with Yamada-san.', vi: 'Tôi đi với anh/chị Yamada.' },
            dialogueGroup: 'who-with',
            ruby: [
              { base: '山', reading: 'やま' },
              { base: '田', reading: 'だ' },
              { base: '行', reading: 'い' }
            ]
          }
        ]
      }
    },
    {
      pattern: 'いつ',
      highlights: ['いつ'],
      title: { en: 'Asking when (いつ)', vi: 'Hỏi khi nào (いつ)' },
      explanation: {
        en: 'いつ asks about time in a broad way (alongside 何時, 何曜日, 何月何日). Do not put に after いつ. Specific dates in the answer often take に (3月25日に).',
        vi: 'いつ hỏi thời điểm một cách rộng (cùng với 何時, 何曜日, 何月何日). Không thêm に sau いつ. Ngày cụ thể trong câu trả lời thường có に (3月25日に).'
      },
      explanationRuby: [
        { base: '何', reading: 'なん' },
        { base: '時', reading: 'じ' },
        { base: '何', reading: 'なん' },
        { base: '曜', reading: 'よう' },
        { base: '日', reading: 'び' },
        { base: '何', reading: 'なん' },
        { base: '月', reading: 'がつ' },
        { base: '何', reading: 'なん' },
        { base: '日', reading: 'にち' },
        { base: '月', reading: 'がつ' },
        { base: '日', reading: 'にち' }
      ],
      examples: [
        {
          jp: 'いつ 日本へ 来ましたか。',
          romaji: 'Itsu Nihon e kimashita ka.',
          meaning: { en: 'When did you come to Japan?', vi: 'Bạn đến Nhật bao giờ?' },
          dialogueGroup: 'when-japan',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: '3月25日に 来ました。',
          romaji: 'San-gatsu nijūgo-nichi ni kimashita.',
          meaning: { en: 'I came on March 25th.', vi: 'Tôi đến ngày 25 tháng 3.' },
          dialogueGroup: 'when-japan',
          ruby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: 'いつ 広島へ 行きますか。',
          romaji: 'Itsu Hiroshima e ikimasu ka.',
          meaning: { en: 'When will you go to Hiroshima?', vi: 'Khi nào bạn đi Hiroshima?' },
          dialogueGroup: 'when-hiroshima',
          ruby: [
            { base: '広', reading: 'ひろ' },
            { base: '島', reading: 'しま' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '来週 行きます。',
          romaji: 'Raishū ikimasu.',
          meaning: { en: 'I will go next week.', vi: 'Tuần sau tôi sẽ đi.' },
          dialogueGroup: 'when-hiroshima',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '行', reading: 'い' }
          ]
        }
      ],
      answers: {
        explanation: {
          en: 'For birthdays and calendar dates, answer with month + day (〜月〜日).',
          vi: 'Với sinh nhật và ngày lịch, trả lời bằng tháng + ngày (〜月〜日).'
        },
        explanationRuby: [
          { base: '月', reading: 'がつ' },
          { base: '日', reading: 'にち' }
        ],
        highlights: ['いつ', 'は', 'です', 'か'],
        examples: [
          {
            jp: '誕生日は いつですか。',
            romaji: 'Tanjōbi wa itsu desu ka.',
            meaning: { en: 'When is your birthday?', vi: 'Sinh nhật bạn khi nào?' },
            dialogueGroup: 'birthday-when',
            ruby: [
              { base: '誕', reading: 'たん' },
              { base: '生', reading: 'じょう' },
              { base: '日', reading: 'び' }
            ]
          },
          {
            jp: '6月13日です。',
            romaji: 'Roku-gatsu jūsan-nichi desu.',
            meaning: { en: 'It is June 13th.', vi: 'Ngày 13 tháng 6.' },
            dialogueGroup: 'birthday-when',
            ruby: [
              { base: '月', reading: 'がつ' },
              { base: '日', reading: 'にち' }
            ]
          }
        ]
      }
    },
    {
      pattern: '～ よ',
      highlights: ['よ'],
      title: { en: 'Sentence-ending よ', vi: 'Trợ từ cuối câu よ' },
      explanation: {
        en: "よ at the end of a sentence emphasizes information the listener may not know, or softens the speaker's judgment / advice.",
        vi: 'よ ở cuối câu nhấn mạnh thông tin người nghe có thể chưa biết, hoặc truyền đạt phán đoán / ý kiến của người nói.'
      },
      examples: [
        {
          jp: 'この 電車は 甲子園へ 行きますか。',
          romaji: 'Kono densha wa Kōshien e ikimasu ka.',
          meaning: {
            en: 'Does this train go to Koshien?',
            vi: 'Tàu điện này có đi Koshien không?'
          },
          dialogueGroup: 'train-yo',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '甲', reading: 'こう' },
            { base: '子', reading: 'し' },
            { base: '園', reading: 'えん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: 'いいえ、行きません。次の「普通」ですよ。',
          romaji: 'Iie, ikimasen. Tsugi no "futsū" desu yo.',
          meaning: {
            en: 'No, it does not. The next local train does, you know.',
            vi: 'Không, không đi. Chuyến tàu thường tiếp theo mới đi cơ.'
          },
          dialogueGroup: 'train-yo',
          ruby: [
            { base: '行', reading: 'い' },
            { base: '次', reading: 'つぎ' },
            { base: '普', reading: 'ふ' },
            { base: '通', reading: 'つう' }
          ]
        }
      ]
    },
    {
      pattern: 'そうですね',
      highlights: ['そうですね'],
      title: { en: 'そうですね (agreement)', vi: 'そうですね (đồng ý)' },
      explanation: {
        en: 'そうですね shows agreement or shared feeling with what the other person said. It differs from そうですか (Lesson 2), which marks new information you did not know.',
        vi: 'そうですね thể hiện đồng ý hoặc đồng cảm với điều đối phương nói. Khác với そうですか (Bài 2), vốn đánh dấu thông tin mới mà bạn chưa biết.'
      },
      examples: [
        {
          jp: 'あしたは 日曜日ですね。',
          romaji: 'Ashita wa nichiyōbi desu ne.',
          meaning: { en: "Tomorrow is Sunday, isn't it?", vi: 'Ngày mai là chủ nhật nhỉ?' },
          dialogueGroup: 'sou-desu-ne',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ]
        },
        {
          jp: 'あ、そうですね。',
          romaji: 'A, sō desu ne.',
          meaning: { en: "Oh, that's right.", vi: 'À, ừ nhỉ.' },
          dialogueGroup: 'sou-desu-ne'
        }
      ]
    }
  ],
  reading: [
    {
      id: 'reading-lesson5-trip',
      title: { en: 'A trip to Kyoto', vi: 'Chuyến đi Kyoto' },
      lines: [
        {
          jp: '来週 私は 京都へ 行きます。',
          romaji: 'Raishū watashi wa Kyōto e ikimasu.',
          meaning: { en: 'Next week I am going to Kyoto.', vi: 'Tuần sau tôi đi Kyoto.' },
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '私', reading: 'わたし' },
            { base: '京', reading: 'きょう' },
            { base: '都', reading: 'と' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '友達と 新幹線で 行きます。',
          romaji: 'Tomodachi to shinkansen de ikimasu.',
          meaning: {
            en: 'I will go with a friend by Shinkansen.',
            vi: 'Tôi đi với bạn bằng Shinkansen.'
          },
          ruby: [
            { base: '友', reading: 'とも' },
            { base: '達', reading: 'だち' },
            { base: '新', reading: 'しん' },
            { base: '幹', reading: 'かん' },
            { base: '線', reading: 'せん' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: 'きのうは どこも 行きませんでした。',
          romaji: 'Kinō wa doko mo ikimasen deshita.',
          meaning: {
            en: 'Yesterday I did not go anywhere.',
            vi: 'Hôm qua tôi không đi đâu cả.'
          },
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          jp: 'うちで 勉強しました。',
          romaji: 'Uchi de benkyō shimashita.',
          meaning: { en: 'I studied at home.', vi: 'Tôi học ở nhà.' },
          ruby: [
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'Where is the speaker going next week?',
            vi: 'Tuần sau người nói đi đâu?'
          },
          choices: [
            { id: 'a', label: { en: 'Kyoto', vi: 'Kyoto' } },
            { id: 'b', label: { en: 'Tokyo', vi: 'Tokyo' } },
            { id: 'c', label: { en: 'Osaka', vi: 'Osaka' } },
            { id: 'd', label: { en: 'Home only', vi: 'Chỉ ở nhà' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: { en: 'How will they go?', vi: 'Họ đi bằng gì?' },
          choices: [
            { id: 'a', label: { en: 'By bus', vi: 'Xe buýt' } },
            { id: 'b', label: { en: 'By Shinkansen', vi: 'Shinkansen' } },
            { id: 'c', label: { en: 'By bicycle', vi: 'Xe đạp' } },
            { id: 'd', label: { en: 'On foot', vi: 'Đi bộ' } }
          ],
          correctId: 'b'
        },
        {
          id: 'q3',
          question: { en: 'What did the speaker do yesterday?', vi: 'Hôm qua người nói làm gì?' },
          choices: [
            { id: 'a', label: { en: 'Went to Kyoto', vi: 'Đi Kyoto' } },
            { id: 'b', label: { en: 'Studied at home', vi: 'Học ở nhà' } },
            { id: 'c', label: { en: 'Came by taxi', vi: 'Đến bằng tắc-xi' } },
            { id: 'd', label: { en: 'Met family', vi: 'Gặp gia đình' } }
          ],
          correctId: 'b'
        }
      ]
    },
    {
      id: 'reading-lesson5-birthday',
      title: { en: 'Birthdays', vi: 'Sinh nhật' },
      lines: [
        {
          jp: '私の 誕生日は 5月5日です。',
          romaji: 'Watashi no tanjōbi wa go-gatsu itsuka desu.',
          meaning: {
            en: 'My birthday is May 5th.',
            vi: 'Sinh nhật tôi là ngày mồng 5 tháng 5.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '誕', reading: 'たん' },
            { base: '生', reading: 'じょう' },
            { base: '日', reading: 'び' },
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ]
        },
        {
          jp: '子どもの日です。',
          romaji: 'Kodomo no hi desu.',
          meaning: { en: "It is Children's Day.", vi: 'Đó là Ngày Trẻ em.' },
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '日', reading: 'ひ' }
          ]
        },
        {
          jp: '彼女の 誕生日は 11月3日です。',
          romaji: 'Kanojo no tanjōbi wa jūichi-gatsu mikka desu.',
          meaning: {
            en: 'Her birthday is November 3rd.',
            vi: 'Sinh nhật bạn gái/cô ấy là ngày mồng 3 tháng 11.'
          },
          ruby: [
            { base: '彼', reading: 'かの' },
            { base: '女', reading: 'じょ' },
            { base: '誕', reading: 'たん' },
            { base: '生', reading: 'じょう' },
            { base: '日', reading: 'び' },
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ]
        },
        {
          jp: '文化の日ですよ。',
          romaji: 'Bunka no hi desu yo.',
          meaning: { en: 'It is Culture Day, you know.', vi: 'Đó là Ngày Văn hóa đấy.' },
          ruby: [
            { base: '文', reading: 'ぶん' },
            { base: '化', reading: 'か' },
            { base: '日', reading: 'ひ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: "When is the speaker's birthday?",
            vi: 'Sinh nhật người nói là khi nào?'
          },
          choices: [
            { id: 'a', label: { en: 'May 5th', vi: '5 tháng 5' } },
            { id: 'b', label: { en: 'November 3rd', vi: '3 tháng 11' } },
            { id: 'c', label: { en: 'January 1st', vi: '1 tháng 1' } },
            { id: 'd', label: { en: 'Next week', vi: 'Tuần sau' } }
          ],
          correctId: 'a'
        },
        {
          id: 'q2',
          question: {
            en: 'When is her birthday?',
            vi: 'Sinh nhật của cô ấy / bạn gái là khi nào?'
          },
          choices: [
            { id: 'a', label: { en: 'May 5th', vi: '5 tháng 5' } },
            { id: 'b', label: { en: 'November 3rd', vi: '3 tháng 11' } },
            { id: 'c', label: { en: 'December 23rd', vi: '23 tháng 12' } },
            { id: 'd', label: { en: 'April 29th', vi: '29 tháng 4' } }
          ],
          correctId: 'b'
        }
      ]
    },
    {
      id: 'reading-lesson5-commute',
      title: { en: 'How I go to school', vi: 'Tôi đi học thế nào' },
      lines: [
        {
          jp: '私は 毎朝 学校へ 行きます。',
          romaji: 'Watashi wa maiasa gakkō e ikimasu.',
          meaning: {
            en: 'I go to school every morning.',
            vi: 'Tôi đi học hàng sáng.'
          },
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '毎', reading: 'まい' },
            { base: '朝', reading: 'あさ' },
            { base: '学', reading: 'がっ' },
            { base: '校', reading: 'こう' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '駅から 歩いて 行きます。',
          romaji: 'Eki kara aruite ikimasu.',
          meaning: {
            en: 'I walk from the station.',
            vi: 'Tôi đi bộ từ ga.'
          },
          ruby: [
            { base: '駅', reading: 'えき' },
            { base: '歩', reading: 'ある' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          jp: '彼は 自転車で 来ます。',
          romaji: 'Kare wa jitensha de kimasu.',
          meaning: { en: 'He comes by bicycle.', vi: 'Anh ấy đến bằng xe đạp.' },
          ruby: [
            { base: '彼', reading: 'かれ' },
            { base: '自', reading: 'じ' },
            { base: '転', reading: 'てん' },
            { base: '車', reading: 'しゃ' },
            { base: '来', reading: 'き' }
          ]
        },
        {
          jp: '一人で 帰ります。',
          romaji: 'Hitori de kaerimasu.',
          meaning: { en: 'I go home alone.', vi: 'Tôi về một mình.' },
          ruby: [
            { base: '一', reading: 'ひと' },
            { base: '人', reading: 'り' },
            { base: '帰', reading: 'かえ' }
          ]
        }
      ],
      questions: [
        {
          id: 'q1',
          question: {
            en: 'How does the speaker go from the station?',
            vi: 'Người nói đi từ ga bằng cách nào?'
          },
          choices: [
            { id: 'a', label: { en: 'By bus', vi: 'Xe buýt' } },
            { id: 'b', label: { en: 'On foot', vi: 'Đi bộ' } },
            { id: 'c', label: { en: 'By taxi', vi: 'Tắc-xi' } },
            { id: 'd', label: { en: 'By subway', vi: 'Tàu điện ngầm' } }
          ],
          correctId: 'b'
        },
        {
          id: 'q2',
          question: { en: 'How does he come?', vi: 'Anh ấy đến bằng gì?' },
          choices: [
            { id: 'a', label: { en: 'By bicycle', vi: 'Xe đạp' } },
            { id: 'b', label: { en: 'On foot', vi: 'Đi bộ' } },
            { id: 'c', label: { en: 'By train', vi: 'Tàu điện' } },
            { id: 'd', label: { en: 'Alone by taxi', vi: 'Một mình bằng tắc-xi' } }
          ],
          correctId: 'a'
        }
      ]
    }
  ],
  reference: [
    {
      kind: 'list',
      title: { en: 'National holidays', vi: 'Ngày nghỉ quốc gia' },
      intro: {
        en: "Japan's national holidays. * date shifts by year; ** second Monday; *** third Monday.",
        vi: 'Các ngày nghỉ quốc gia của Nhật. * đổi theo năm; ** thứ hai tuần 2; *** thứ hai tuần 3.'
      },
      introTerm: {
        jp: '祝祭日',
        ruby: [
          { base: '祝', reading: 'しゅく' },
          { base: '祭', reading: 'さい' },
          { base: '日', reading: 'じつ' }
        ]
      },
      layout: 'stacked-2col',
      rows: [
        {
          number: '1月1日',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: '元日',
          ruby: [
            { base: '元', reading: 'がん' },
            { base: '日', reading: 'じつ' }
          ],
          meaning: { en: "New Year's Day", vi: 'Ngày mồng 1 Tết' }
        },
        {
          number: '1月第2月曜日 **',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '第', reading: 'だい' },
            { base: '月', reading: 'げつ' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ],
          jp: '成人の日',
          ruby: [
            { base: '成', reading: 'せい' },
            { base: '人', reading: 'じん' },
            { base: '日', reading: 'ひ' }
          ],
          meaning: { en: 'Coming of Age Day', vi: 'Ngày Trưởng thành, Lễ thành nhân' }
        },
        {
          number: '2月11日',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: '建国記念の日',
          ruby: [
            { base: '建', reading: 'けん' },
            { base: '国', reading: 'こく' },
            { base: '記', reading: 'き' },
            { base: '念', reading: 'ねん' },
            { base: '日', reading: 'ひ' }
          ],
          meaning: {
            en: 'National Foundation Day',
            vi: 'Ngày Quốc khánh (kỷ niệm kiến quốc)'
          }
        },
        {
          number: '3月20日 *',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: '春分の日',
          ruby: [
            { base: '春', reading: 'しゅん' },
            { base: '分', reading: 'ぶん' },
            { base: '日', reading: 'ひ' }
          ],
          meaning: { en: 'Vernal Equinox Day', vi: 'Ngày Xuân phân' }
        },
        {
          number: '4月29日',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: '昭和の日',
          ruby: [
            { base: '昭', reading: 'しょう' },
            { base: '和', reading: 'わ' },
            { base: '日', reading: 'ひ' }
          ],
          meaning: { en: 'Showa Day', vi: 'Ngày Kỷ niệm Thiên hoàng Showa' }
        },
        {
          number: '5月3日',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: '憲法記念日',
          ruby: [
            { base: '憲', reading: 'けん' },
            { base: '法', reading: 'ぽう' },
            { base: '記', reading: 'き' },
            { base: '念', reading: 'ねん' },
            { base: '日', reading: 'び' }
          ],
          meaning: { en: 'Constitution Memorial Day', vi: 'Ngày Kỷ niệm Hiến pháp' }
        },
        {
          number: '5月4日',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: 'みどりの日',
          ruby: [{ base: '日', reading: 'ひ' }],
          meaning: { en: 'Greenery Day', vi: 'Ngày Màu xanh' }
        },
        {
          number: '5月5日',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: '子どもの日',
          ruby: [
            { base: '子', reading: 'こ' },
            { base: '日', reading: 'ひ' }
          ],
          meaning: { en: "Children's Day", vi: 'Ngày Trẻ em' }
        },
        {
          number: '7月第3月曜日 ***',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '第', reading: 'だい' },
            { base: '月', reading: 'げつ' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ],
          jp: '海の日',
          ruby: [
            { base: '海', reading: 'うみ' },
            { base: '日', reading: 'ひ' }
          ],
          meaning: { en: 'Marine Day', vi: 'Ngày Biển' }
        },
        {
          number: '9月第3月曜日 ***',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '第', reading: 'だい' },
            { base: '月', reading: 'げつ' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ],
          jp: '敬老の日',
          ruby: [
            { base: '敬', reading: 'けい' },
            { base: '老', reading: 'ろう' },
            { base: '日', reading: 'ひ' }
          ],
          meaning: { en: 'Respect for the Aged Day', vi: 'Ngày Kính lão' }
        },
        {
          number: '9月23日 *',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: '秋分の日',
          ruby: [
            { base: '秋', reading: 'しゅう' },
            { base: '分', reading: 'ぶん' },
            { base: '日', reading: 'ひ' }
          ],
          meaning: { en: 'Autumnal Equinox Day', vi: 'Ngày Thu phân' }
        },
        {
          number: '10月第2月曜日 **',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '第', reading: 'だい' },
            { base: '月', reading: 'げつ' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' }
          ],
          jp: '体育の日',
          ruby: [
            { base: '体', reading: 'たい' },
            { base: '育', reading: 'いく' },
            { base: '日', reading: 'ひ' }
          ],
          meaning: { en: 'Health and Sports Day', vi: 'Ngày Thể thao' }
        },
        {
          number: '11月3日',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: '文化の日',
          ruby: [
            { base: '文', reading: 'ぶん' },
            { base: '化', reading: 'か' },
            { base: '日', reading: 'ひ' }
          ],
          meaning: { en: 'Culture Day', vi: 'Ngày Văn hóa' }
        },
        {
          number: '11月23日',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: '勤労感謝の日',
          ruby: [
            { base: '勤', reading: 'きん' },
            { base: '労', reading: 'ろう' },
            { base: '感', reading: 'かん' },
            { base: '謝', reading: 'しゃ' },
            { base: '日', reading: 'ひ' }
          ],
          meaning: { en: 'Labor Thanksgiving Day', vi: 'Ngày Cảm tạ lao động' }
        },
        {
          number: '12月23日',
          numberRuby: [
            { base: '月', reading: 'がつ' },
            { base: '日', reading: 'にち' }
          ],
          jp: '天皇誕生日',
          ruby: [
            { base: '天', reading: 'てん' },
            { base: '皇', reading: 'のう' },
            { base: '誕', reading: 'たん' },
            { base: '生', reading: 'じょう' },
            { base: '日', reading: 'び' }
          ],
          meaning: {
            en: "Emperor's Birthday (as in the textbook era)",
            vi: 'Sinh nhật Thiên hoàng (theo thời điểm sách)'
          }
        }
      ],
      notes: [
        {
          en: 'If a national holiday falls on Sunday, the following Monday is a compensatory holiday.',
          vi: 'Nếu ngày nghỉ quốc gia rơi vào chủ nhật thì thứ hai liền sau được nghỉ bù.'
        },
        {
          en: 'The stretch from April 29 to May 5 is called Golden Week (ゴールデンウィーク). Some companies give the whole week off.',
          vi: 'Kỳ nghỉ liền từ 29/4 đến 5/5 gọi là ゴールデンウィーク (Tuần lễ vàng). Một số công ty cho nghỉ cả tuần.'
        }
      ]
    },
    {
      kind: 'vocab',
      title: { en: 'Place names', vi: 'Địa danh' },
      includeInQuiz: false,
      items: [
        {
          kana: 'こうしえん',
          kanji: '甲子園',
          romaji: 'Kōshien',
          meaning: {
            en: 'Koshien (area near Osaka)',
            vi: 'Koshien (khu phố gần Osaka)'
          },
          ruby: [
            { base: '甲', reading: 'こう' },
            { base: '子', reading: 'し' },
            { base: '園', reading: 'えん' }
          ]
        },
        {
          kana: 'おおさかじょう',
          kanji: '大阪城',
          romaji: 'Ōsakajō',
          meaning: { en: 'Osaka Castle', vi: 'Lâu đài Osaka' },
          ruby: [
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '城', reading: 'じょう' }
          ]
        }
      ]
    }
  ]
};
