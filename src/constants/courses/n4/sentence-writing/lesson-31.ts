import type { LessonSentenceWriting } from '@/types/course.ts';

export const n4Lesson31SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-volitional',
      items: [
        {
          prompt: {
            en: 'I am a bit tired. Let us take a break.',
            vi: 'Hơi mệt rồi nhỉ. Nghỉ giải lao thôi.'
          },
          jp: 'ちょっと 疲れたね。休憩しよう。',
          ruby: [
            { base: '疲', reading: 'つか' },
            { base: '休', reading: 'きゅう' },
            { base: '憩', reading: 'けい' }
          ]
        },
        {
          prompt: {
            en: 'Let us go to the exhibition together on Sunday.',
            vi: 'Chủ nhật mình cùng đi triển lãm nhé.'
          },
          jp: '日曜日、いっしょに 展覧会へ 行こうよ。',
          ruby: [
            { base: '日', reading: 'にち' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '展', reading: 'てん' },
            { base: '覧', reading: 'らん' },
            { base: '会', reading: 'かい' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: {
            en: 'It is late already, so let us head home soon.',
            vi: 'Muộn rồi, mình về thôi.'
          },
          jp: 'もう 遅いから、そろそろ 帰ろう。',
          ruby: [
            { base: '遅', reading: 'おそ' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          prompt: { en: 'I am hungry. Let us eat something.', vi: 'Đói bụng rồi nhỉ. Ăn gì đi.' },
          jp: 'おなかが すいたね。何か 食べよう。',
          ruby: [
            { base: '何', reading: 'なに' },
            { base: '食', reading: 'た' }
          ]
        },
        {
          prompt: {
            en: 'The weather is nice, so let us walk to the park.',
            vi: 'Trời đẹp nên mình đi bộ ra công viên nhé.'
          },
          jp: '天気が いいから、公園まで 歩こう。',
          ruby: [
            { base: '天', reading: 'てん' },
            { base: '気', reading: 'き' },
            { base: '公', reading: 'こう' },
            { base: '園', reading: 'えん' },
            { base: '歩', reading: 'ある' }
          ]
        }
      ]
    },
    {
      pattern: 'V-volitional と 思っています',
      patternRuby: [{ base: '思', reading: 'おも' }],
      items: [
        {
          prompt: {
            en: 'I am planning to take the graduate-school entrance exam.',
            vi: 'Tôi định thi vào cao học.'
          },
          jp: '大学院の 入学試験を 受けようと 思っています。',
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '院', reading: 'いん' },
            { base: '入', reading: 'にゅう' },
            { base: '学', reading: 'がく' },
            { base: '試', reading: 'し' },
            { base: '験', reading: 'けん' },
            { base: '受', reading: 'う' },
            { base: '思', reading: 'おも' }
          ]
        },
        {
          prompt: {
            en: 'I am planning to go to a hot spring with the children over the long holiday.',
            vi: 'Nghỉ liền mạch tôi định đi suối nước nóng với các con.'
          },
          jp: '連休は お子さんと 温泉へ 行こうと 思っています。',
          ruby: [
            { base: '連', reading: 'れん' },
            { base: '休', reading: 'きゅう' },
            { base: '子', reading: 'こ' },
            { base: '温', reading: 'おん' },
            { base: '泉', reading: 'せん' },
            { base: '行', reading: 'い' },
            { base: '思', reading: 'おも' }
          ]
        },
        {
          prompt: {
            en: 'There is talk of a transfer, but I am planning to stay at my current branch.',
            vi: 'Có chuyện chuyển công tác, nhưng tôi định ở lại chi nhánh hiện tại.'
          },
          jp: '転勤の 話が ありますが、今の 支店に 残ろうと 思っています。',
          ruby: [
            { base: '転', reading: 'てん' },
            { base: '勤', reading: 'きん' },
            { base: '話', reading: 'はなし' },
            { base: '今', reading: 'いま' },
            { base: '支', reading: 'し' },
            { base: '店', reading: 'てん' },
            { base: '残', reading: 'のこ' },
            { base: '思', reading: 'おも' }
          ]
        },
        {
          prompt: {
            en: "I am planning to present a new plan at next month's meeting.",
            vi: 'Tôi định trình bày kế hoạch mới trong cuộc họp tháng sau.'
          },
          jp: '来月の 会議で 新しい 計画を 発表しようと 思っています。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '月', reading: 'げつ' },
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '新', reading: 'あたら' },
            { base: '計', reading: 'けい' },
            { base: '画', reading: 'かく' },
            { base: '発', reading: 'はっ' },
            { base: '表', reading: 'ぴょう' },
            { base: '思', reading: 'おも' }
          ]
        },
        {
          prompt: {
            en: 'I am planning to go to the zoo with my kids this weekend.',
            vi: 'Cuối tuần tôi định đưa con đi sở thú.'
          },
          jp: '週末は 子どもと 動物園へ 行こうと 思っています。',
          ruby: [
            { base: '週', reading: 'しゅう' },
            { base: '末', reading: 'まつ' },
            { base: '子', reading: 'こ' },
            { base: '動', reading: 'どう' },
            { base: '物', reading: 'ぶつ' },
            { base: '園', reading: 'えん' },
            { base: '行', reading: 'い' },
            { base: '思', reading: 'おも' }
          ]
        }
      ]
    },
    {
      pattern: 'V-dictionary / V-ない + つもりです',
      items: [
        {
          prompt: {
            en: 'I intend to go back to my home country for the summer holidays.',
            vi: 'Kỳ nghỉ hè tôi định về nước.'
          },
          jp: '夏休みは 国へ 帰る つもりです。',
          ruby: [
            { base: '夏', reading: 'なつ' },
            { base: '休', reading: 'やす' },
            { base: '国', reading: 'くに' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          prompt: {
            en: 'Thinking of my family, I intend not to take a transfer.',
            vi: 'Nghĩ cho gia đình, tôi định không chuyển công tác.'
          },
          jp: '家族の ことを 考えて、転勤しない つもりです。',
          ruby: [
            { base: '家', reading: 'か' },
            { base: '族', reading: 'ぞく' },
            { base: '考', reading: 'かんが' },
            { base: '転', reading: 'てん' },
            { base: '勤', reading: 'きん' }
          ]
        },
        {
          prompt: {
            en: 'I intend to stop smoking starting this year.',
            vi: 'Từ năm nay tôi định không hút thuốc nữa.'
          },
          jp: '今年から たばこを 吸わない つもりです。',
          ruby: [
            { base: '今', reading: 'こ' },
            { base: '年', reading: 'とし' },
            { base: '吸', reading: 'す' }
          ]
        },
        {
          prompt: {
            en: 'After finishing graduate school, I intend to find a job in my home village.',
            vi: 'Học xong cao học, tôi định tìm việc ở làng quê mình.'
          },
          jp: '大学院を 卒業したら、ふるさとの 村で 仕事を 見つける つもりです。',
          ruby: [
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '院', reading: 'いん' },
            { base: '卒', reading: 'そつ' },
            { base: '業', reading: 'ぎょう' },
            { base: '村', reading: 'むら' },
            { base: '仕', reading: 'し' },
            { base: '事', reading: 'ごと' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: 'I intend to keep studying Japanese from now on.',
            vi: 'Tiếng Nhật thì từ giờ tôi định sẽ học mãi.'
          },
          jp: '日本語は これからも ずっと 勉強する つもりです。',
          ruby: [
            { base: '日', reading: 'に' },
            { base: '本', reading: 'ほん' },
            { base: '語', reading: 'ご' },
            { base: '勉', reading: 'べん' },
            { base: '強', reading: 'きょう' }
          ]
        }
      ]
    },
    {
      pattern: 'V-dictionary / N の + 予定です',
      patternRuby: [
        { base: '予', reading: 'よ' },
        { base: '定', reading: 'てい' }
      ],
      items: [
        {
          prompt: { en: 'The wedding is planned for June.', vi: 'Đám cưới dự định vào tháng 6.' },
          jp: '結婚式は 6月の 予定です。',
          ruby: [
            { base: '結', reading: 'けっ' },
            { base: '婚', reading: 'こん' },
            { base: '式', reading: 'しき' },
            { base: '月', reading: 'がつ' },
            { base: '予', reading: 'よ' },
            { base: '定', reading: 'てい' }
          ]
        },
        {
          prompt: {
            en: 'The presentation is scheduled for next Friday.',
            vi: 'Buổi thuyết trình dự kiến vào thứ Sáu tuần sau.'
          },
          jp: '発表は 来週の 金曜日の 予定です。',
          ruby: [
            { base: '発', reading: 'はっ' },
            { base: '表', reading: 'ぴょう' },
            { base: '来', reading: 'らい' },
            { base: '週', reading: 'しゅう' },
            { base: '金', reading: 'きん' },
            { base: '曜', reading: 'よう' },
            { base: '日', reading: 'び' },
            { base: '予', reading: 'よ' },
            { base: '定', reading: 'てい' }
          ]
        },
        {
          prompt: {
            en: 'I am scheduled to go on a business trip to the Osaka branch next month.',
            vi: 'Tháng sau tôi dự định đi công tác ở chi nhánh Osaka.'
          },
          jp: '来月 大阪の 支店へ 出張する 予定です。',
          ruby: [
            { base: '来', reading: 'らい' },
            { base: '月', reading: 'げつ' },
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '支', reading: 'し' },
            { base: '店', reading: 'てん' },
            { base: '出', reading: 'しゅっ' },
            { base: '張', reading: 'ちょう' },
            { base: '予', reading: 'よ' },
            { base: '定', reading: 'てい' }
          ]
        },
        {
          prompt: {
            en: 'On the way back I am scheduled to take the Nozomi 12.',
            vi: 'Chiều về tôi dự định đi chuyến Nozomi số 12.'
          },
          jp: '帰りは のぞみ12号に 乗る 予定です。',
          ruby: [
            { base: '帰', reading: 'かえ' },
            { base: '号', reading: 'ごう' },
            { base: '乗', reading: 'の' },
            { base: '予', reading: 'よ' },
            { base: '定', reading: 'てい' }
          ]
        },
        {
          prompt: {
            en: 'The meeting is scheduled to end at three.',
            vi: 'Cuộc họp dự kiến kết thúc lúc 3 giờ.'
          },
          jp: '会議は 3時に 終わる 予定です。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '議', reading: 'ぎ' },
            { base: '時', reading: 'じ' },
            { base: '終', reading: 'お' },
            { base: '予', reading: 'よ' },
            { base: '定', reading: 'てい' }
          ]
        }
      ]
    },
    {
      pattern: 'まだ V-て いません',
      items: [
        {
          prompt: {
            en: 'I have not written the essay yet.',
            vi: 'Tôi chưa viết bài văn.'
          },
          jp: '作文は まだ 書いて いません。',
          ruby: [
            { base: '作', reading: 'さく' },
            { base: '文', reading: 'ぶん' },
            { base: '書', reading: 'か' }
          ]
        },
        {
          prompt: {
            en: 'I have not found a new apartment yet.',
            vi: 'Tôi vẫn chưa tìm được căn hộ mới.'
          },
          jp: '新しい アパートは まだ 見つけて いません。',
          ruby: [
            { base: '新', reading: 'あたら' },
            { base: '見', reading: 'み' }
          ]
        },
        {
          prompt: {
            en: 'I have not applied yet.',
            vi: 'Tôi chưa đăng ký.'
          },
          jp: 'まだ 申し込んで いません。',
          ruby: [
            { base: '申', reading: 'もう' },
            { base: '込', reading: 'こ' }
          ]
        },
        {
          prompt: {
            en: 'I have not taken time off yet.',
            vi: 'Tôi chưa xin nghỉ.'
          },
          jp: '休みは まだ 取って いません。',
          ruby: [
            { base: '休', reading: 'やす' },
            { base: '取', reading: 'と' }
          ]
        },
        {
          prompt: { en: 'I have not had lunch yet.', vi: 'Tôi vẫn chưa ăn trưa.' },
          jp: '昼ご飯は まだ 食べて いません。',
          ruby: [
            { base: '昼', reading: 'ひる' },
            { base: '飯', reading: 'はん' },
            { base: '食', reading: 'た' }
          ]
        }
      ]
    },
    {
      pattern: 'V-stem as noun',
      items: [
        {
          prompt: {
            en: 'I slept a little on the train home.',
            vi: 'Tôi ngủ một chút trên chuyến tàu về.'
          },
          jp: '帰りの 電車で 少し 寝ました。',
          ruby: [
            { base: '帰', reading: 'かえ' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' },
            { base: '少', reading: 'すこ' },
            { base: '寝', reading: 'ね' }
          ]
        },
        {
          prompt: { en: 'Where do I sign up for the seminar?', vi: 'Đăng ký hội thảo ở đâu ạ?' },
          jp: 'セミナーの 申し込みは どこで しますか。',
          ruby: [
            { base: '申', reading: 'もう' },
            { base: '込', reading: 'こ' }
          ]
        },
        {
          prompt: {
            en: 'We go there by bus and come back by train.',
            vi: 'Lượt đi bằng xe buýt, lượt về bằng tàu điện.'
          },
          jp: '行きは バスで、帰りは 電車です。',
          ruby: [
            { base: '行', reading: 'い' },
            { base: '帰', reading: 'かえ' },
            { base: '電', reading: 'でん' },
            { base: '車', reading: 'しゃ' }
          ]
        },
        {
          prompt: {
            en: 'What do you usually do on your days off?',
            vi: 'Ngày nghỉ anh thường làm gì?'
          },
          jp: '休みの 日は いつも 何を して いますか。',
          ruby: [
            { base: '休', reading: 'やす' },
            { base: '日', reading: 'ひ' },
            { base: '何', reading: 'なに' }
          ]
        },
        {
          prompt: {
            en: 'What time is the shinkansen on the way back?',
            vi: 'Chuyến Shinkansen chiều về lúc mấy giờ?'
          },
          jp: '帰りの 新幹線は 何時ですか。',
          ruby: [
            { base: '帰', reading: 'かえ' },
            { base: '新', reading: 'しん' },
            { base: '幹', reading: 'かん' },
            { base: '線', reading: 'せん' },
            { base: '何', reading: 'なん' },
            { base: '時', reading: 'じ' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: {
        en: 'Shall we rest a bit?',
        vi: 'Nghỉ một chút nhé?'
      },
      jp: 'ちょっと 休まない？',
      ruby: [{ base: '休', reading: 'やす' }]
    }
  ]
};
