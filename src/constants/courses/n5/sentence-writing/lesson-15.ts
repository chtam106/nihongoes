import type { LessonSentenceWriting } from '@/types/course.ts';

export const n5Lesson15SentenceWriting: LessonSentenceWriting = {
  grammar: [
    {
      pattern: 'V-ても いいですか / V-ても いいです',
      items: [
        {
          prompt: { en: 'May I look at this catalog?', vi: 'Tôi xem ca-ta-lô này được không?' },
          jp: 'この カタログを 見ても いいですか。',
          ruby: [{ base: '見', reading: 'み' }]
        },
        {
          prompt: {
            en: 'May I put the materials here?',
            vi: 'Tôi để tài liệu ở đây được không?'
          },
          jp: 'ここに 資料を 置いても いいですか。',
          ruby: [
            { base: '資', reading: 'し' },
            { base: '料', reading: 'りょう' },
            { base: '置', reading: 'お' }
          ]
        },
        {
          prompt: {
            en: 'May I use this electronic dictionary?',
            vi: 'Tôi dùng kim từ điển này được không?'
          },
          jp: 'この 電子辞書を 使っても いいですか。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '子', reading: 'し' },
            { base: '辞', reading: 'じ' },
            { base: '書', reading: 'しょ' },
            { base: '使', reading: 'つか' }
          ]
        },
        {
          prompt: { en: 'Yes, you may look at it.', vi: 'Vâng, xem cũng được.' },
          jp: 'はい、見ても いいですよ。',
          ruby: [{ base: '見', reading: 'み' }]
        },
        {
          prompt: {
            en: 'May I take this timetable home?',
            vi: 'Tôi mang bảng giờ này về được không?'
          },
          jp: 'この 時刻表を 持って 帰っても いいですか。',
          ruby: [
            { base: '時', reading: 'じ' },
            { base: '刻', reading: 'こく' },
            { base: '表', reading: 'ひょう' },
            { base: '持', reading: 'も' },
            { base: '帰', reading: 'かえ' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ては いけません',
      items: [
        {
          prompt: {
            en: 'You must not take the materials home.',
            vi: 'Không được mang tài liệu về.'
          },
          jp: '資料を 持って 帰っては いけません。',
          ruby: [
            { base: '資', reading: 'し' },
            { base: '料', reading: 'りょう' },
            { base: '持', reading: 'も' },
            { base: '帰', reading: 'かえ' }
          ]
        },
        {
          prompt: {
            en: 'You must not copy this software.',
            vi: 'Không được sao chép phần mềm này.'
          },
          jp: 'この ソフトを コピーしては いけません。'
        },
        {
          prompt: {
            en: 'You must not sell these clothes here.',
            vi: 'Ở đây không được bán quần áo này.'
          },
          jp: 'ここで この 服を 売っては いけません。',
          ruby: [
            { base: '服', reading: 'ふく' },
            { base: '売', reading: 'う' }
          ]
        },
        {
          prompt: {
            en: 'You must not put bags on this desk.',
            vi: 'Không được để túi lên bàn này.'
          },
          jp: 'この 机に かばんを 置いては いけません。',
          ruby: [
            { base: '机', reading: 'つくえ' },
            { base: '置', reading: 'お' }
          ]
        },
        {
          prompt: {
            en: 'You must not enter the city hall now.',
            vi: 'Bây giờ không được vào tòa thị chính.'
          },
          jp: '今 市役所に 入っては いけません。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '市', reading: 'し' },
            { base: '役', reading: 'やく' },
            { base: '所', reading: 'しょ' },
            { base: '入', reading: 'はい' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ています (state)',
      items: [
        {
          prompt: { en: 'I know that person.', vi: 'Tôi biết người đó.' },
          jp: '私は その 人を 知っています。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '人', reading: 'ひと' },
            { base: '知', reading: 'し' }
          ]
        },
        {
          prompt: { en: 'Sorry, I do not know.', vi: 'Xin lỗi, tôi không biết.' },
          jp: 'すみません、知りません。',
          ruby: [{ base: '知', reading: 'し' }]
        },
        {
          prompt: { en: 'I live in Osaka now.', vi: 'Bây giờ tôi sống ở Osaka.' },
          jp: '今 大阪に 住んでいます。',
          ruby: [
            { base: '今', reading: 'いま' },
            { base: '大', reading: 'おお' },
            { base: '阪', reading: 'さか' },
            { base: '住', reading: 'す' }
          ]
        },
        {
          prompt: {
            en: 'I cannot recall the name.',
            vi: 'Tôi không nhớ ra tên.'
          },
          jp: '名前を 思い出していません。',
          ruby: [
            { base: '名', reading: 'な' },
            { base: '前', reading: 'まえ' },
            { base: '思', reading: 'おも' },
            { base: '出', reading: 'だ' }
          ]
        },
        {
          prompt: {
            en: 'Ms. Yamada is at city hall (honorific).',
            vi: 'Cô Yamada đang ở tòa thị chính (kính ngữ).'
          },
          jp: '山田さんは 市役所に いらっしゃいます。',
          ruby: [
            { base: '山', reading: 'やま' },
            { base: '田', reading: 'だ' },
            { base: '市', reading: 'し' },
            { base: '役', reading: 'やく' },
            { base: '所', reading: 'しょ' }
          ]
        },
        {
          prompt: { en: 'My older brother is still single.', vi: 'Anh trai tôi vẫn độc thân.' },
          jp: '兄は まだ 独身です。東京に 住んでいます。',
          ruby: [
            { base: '兄', reading: 'あに' },
            { base: '独', reading: 'どく' },
            { base: '身', reading: 'しん' },
            { base: '東', reading: 'とう' },
            { base: '京', reading: 'きょう' },
            { base: '住', reading: 'す' }
          ]
        }
      ]
    },
    {
      pattern: 'V-ています (occupation)',
      items: [
        {
          prompt: {
            en: 'My father makes clothes at a factory.',
            vi: 'Bố tôi làm quần áo ở nhà máy.'
          },
          jp: '父は 工場で 服を 作っています。',
          ruby: [
            { base: '父', reading: 'ちち' },
            { base: '工', reading: 'こう' },
            { base: '場', reading: 'じょう' },
            { base: '服', reading: 'ふく' },
            { base: '作', reading: 'つく' }
          ]
        },
        {
          prompt: {
            en: 'My older sister sells products at a shop.',
            vi: 'Chị tôi bán sản phẩm ở cửa hàng.'
          },
          jp: '姉は 店で 製品を 売っています。',
          ruby: [
            { base: '姉', reading: 'あね' },
            { base: '店', reading: 'みせ' },
            { base: '製', reading: 'せい' },
            { base: '品', reading: 'ひん' },
            { base: '売', reading: 'う' }
          ]
        },
        {
          prompt: {
            en: 'Sato researches economics at the university.',
            vi: 'Chị Sato nghiên cứu kinh tế ở trường đại học.'
          },
          jp: '佐藤さんは 大学で 経済を 研究しています。',
          ruby: [
            { base: '佐', reading: 'さ' },
            { base: '藤', reading: 'とう' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '経', reading: 'けい' },
            { base: '済', reading: 'ざい' },
            { base: '研', reading: 'けん' },
            { base: '究', reading: 'きゅう' }
          ]
        },
        {
          prompt: {
            en: 'Yuki makes software at a company.',
            vi: 'Yuki làm phần mềm ở công ty.'
          },
          jp: 'ゆきさんは 会社で ソフトを 作っています。',
          ruby: [
            { base: '会', reading: 'かい' },
            { base: '社', reading: 'しゃ' },
            { base: '作', reading: 'つく' }
          ]
        },
        {
          prompt: {
            en: 'My specialty is economics. I research it at university.',
            vi: 'Chuyên ngành của tôi là kinh tế. Tôi nghiên cứu ở đại học.'
          },
          jp: '私の 専門は 経済です。大学で 研究しています。',
          ruby: [
            { base: '私', reading: 'わたし' },
            { base: '専', reading: 'せん' },
            { base: '門', reading: 'もん' },
            { base: '経', reading: 'けい' },
            { base: '済', reading: 'ざい' },
            { base: '大', reading: 'だい' },
            { base: '学', reading: 'がく' },
            { base: '研', reading: 'けん' },
            { base: '究', reading: 'きゅう' }
          ]
        }
      ]
    },
    {
      pattern: 'N に V',
      items: [
        {
          prompt: { en: 'I will enter the city hall.', vi: 'Tôi sẽ vào tòa thị chính.' },
          jp: '市役所に 入ります。',
          ruby: [
            { base: '市', reading: 'し' },
            { base: '役', reading: 'やく' },
            { base: '所', reading: 'しょ' },
            { base: '入', reading: 'はい' }
          ]
        },
        {
          prompt: { en: 'I will go to the dentist.', vi: 'Tôi sẽ đến nha sĩ.' },
          jp: '歯医者に 行きます。',
          ruby: [
            { base: '歯', reading: 'は' },
            { base: '医', reading: 'い' },
            { base: '者', reading: 'しゃ' },
            { base: '行', reading: 'い' }
          ]
        },
        {
          prompt: { en: 'I will enter the barber shop.', vi: 'Tôi sẽ vào tiệm cắt tóc nam.' },
          jp: '床屋に 入ります。',
          ruby: [
            { base: '床', reading: 'とこ' },
            { base: '屋', reading: 'や' },
            { base: '入', reading: 'はい' }
          ]
        },
        {
          prompt: { en: 'I will go to the ticket agency.', vi: 'Tôi sẽ đến đại lý bán vé.' },
          jp: 'プレイガイドに 行きます。',
          ruby: [{ base: '行', reading: 'い' }]
        },
        {
          prompt: {
            en: 'My younger sister goes to high school.',
            vi: 'Em gái tôi học trung học phổ thông.'
          },
          jp: '妹は 高校に 行っています。',
          ruby: [
            { base: '妹', reading: 'いもうと' },
            { base: '高', reading: 'こう' },
            { base: '校', reading: 'こう' },
            { base: '行', reading: 'い' }
          ]
        }
      ]
    },
    {
      pattern: 'N1 に N2 を V',
      items: [
        {
          prompt: { en: 'I put the materials on the desk.', vi: 'Tôi để tài liệu lên bàn.' },
          jp: '机に 資料を 置きます。',
          ruby: [
            { base: '机', reading: 'つくえ' },
            { base: '資', reading: 'し' },
            { base: '料', reading: 'りょう' },
            { base: '置', reading: 'お' }
          ]
        },
        {
          prompt: {
            en: 'I put the electronic dictionary in my bag.',
            vi: 'Tôi để kim từ điển vào túi.'
          },
          jp: 'かばんに 電子辞書を 置きます。',
          ruby: [
            { base: '電', reading: 'でん' },
            { base: '子', reading: 'し' },
            { base: '辞', reading: 'じ' },
            { base: '書', reading: 'しょ' },
            { base: '置', reading: 'お' }
          ]
        },
        {
          prompt: { en: 'Please put the catalog on the table.', vi: 'Hãy để ca-ta-lô lên bàn.' },
          jp: 'テーブルに カタログを 置いて ください。',
          ruby: [{ base: '置', reading: 'お' }]
        },
        {
          prompt: { en: 'I put the clothes in the box.', vi: 'Tôi để quần áo vào hộp.' },
          jp: '箱に 服を 置きます。',
          ruby: [
            { base: '箱', reading: 'はこ' },
            { base: '服', reading: 'ふく' },
            { base: '置', reading: 'お' }
          ]
        },
        {
          prompt: {
            en: 'Please put the timetable on this desk.',
            vi: 'Hãy để bảng giờ lên bàn này.'
          },
          jp: 'この 机に 時刻表を 置いて ください。',
          ruby: [
            { base: '机', reading: 'つくえ' },
            { base: '時', reading: 'じ' },
            { base: '刻', reading: 'こく' },
            { base: '表', reading: 'ひょう' },
            { base: '置', reading: 'お' }
          ]
        }
      ]
    }
  ],
  phrases: [
    {
      prompt: { en: 'How is your family?', vi: 'Gia đình anh/chị thế nào?' },
      jp: 'ご家族は お元気ですか。',
      ruby: [
        { base: '家', reading: 'か' },
        { base: '族', reading: 'ぞく' },
        { base: '元', reading: 'げん' },
        { base: '気', reading: 'き' }
      ]
    },
    {
      prompt: { en: 'everyone, all of you', vi: 'mọi người, các anh/chị' },
      jp: '皆さん',
      ruby: [{ base: '皆', reading: 'みな' }]
    }
  ]
};
