import type { Bilingual, RubySegment } from '@/types/course.ts';

export const PARTICLES = [
  'は',
  'が',
  'を',
  'に',
  'で',
  'へ',
  'と',
  'も',
  'の',
  'や',
  'か',
  'から',
  'まで'
] as const;

export type Particle = (typeof PARTICLES)[number];

/** Japanese with its furigana. */
export type RubyText = { text: string; ruby: RubySegment[] };

/** What a particle does in a sentence. Each question teaches one use. */
export type ParticleUse =
  | 'topic'
  | 'gaObject'
  | 'gaExist'
  | 'gaQuestion'
  | 'gaState'
  | 'woObject'
  | 'woLeave'
  | 'niTime'
  | 'niTarget'
  | 'niReceive'
  | 'niPlace'
  | 'niRide'
  | 'niPurpose'
  | 'dePlace'
  | 'deMeans'
  | 'deScope'
  | 'deTotal'
  | 'heDirection'
  | 'toWith'
  | 'toAnd'
  | 'yaList'
  | 'moAlso'
  | 'noOf'
  | 'karaFrom'
  | 'madeUntil'
  | 'kaQuestion'
  | 'gaBut'
  | 'karaBecause';

export type ParticleQuestion = {
  id: string;
  /** Sentence before the blank. */
  before: RubyText;
  answer: Particle;
  /** Sentence after the blank. */
  after: RubyText;
  /** Three wrong choices. None of them may also fit the sentence. */
  distractors: [Particle, Particle, Particle];
  use: ParticleUse;
  meaning: Bilingual;
};

/** Short rule shown after each answer, and in the guide. */
export const PARTICLE_USES: Record<ParticleUse, { particle: Particle; rule: Bilingual }> = {
  topic: {
    particle: 'は',
    rule: {
      vi: 'は đánh dấu chủ đề: điều mà câu đang nói tới.',
      en: 'は marks the topic: what the sentence is about.'
    }
  },
  gaObject: {
    particle: 'が',
    rule: {
      vi: 'すき, きらい, じょうず, わかる, ほしい… dùng が trước đối tượng (không dùng を).',
      en: 'すき, きらい, じょうず, わかる, ほしい… take が for their object (not を).'
    }
  },
  gaExist: {
    particle: 'が',
    rule: {
      vi: 'あります / います: が đứng sau người hoặc vật có ở đó.',
      en: 'With あります / います, が follows the thing or person that is there.'
    }
  },
  gaQuestion: {
    particle: 'が',
    rule: {
      vi: 'Từ để hỏi (だれ, なに, どれ…) làm chủ ngữ thì dùng が, không dùng は.',
      en: 'A question word (だれ, なに, どれ…) as the subject takes が, never は.'
    }
  },
  gaState: {
    particle: 'が',
    rule: {
      vi: 'が chỉ chủ thể của một trạng thái: あたまが いたい (đau đầu).',
      en: 'が marks what is in a state: あたまが いたい (my head hurts).'
    }
  },
  woObject: {
    particle: 'を',
    rule: {
      vi: 'を chỉ đối tượng của hành động: ăn gì, xem gì, viết gì.',
      en: 'を marks the object of an action: what you eat, watch, or write.'
    }
  },
  woLeave: {
    particle: 'を',
    rule: {
      vi: 'を chỉ nơi rời khỏi (でる) hoặc nơi đi qua (わたる).',
      en: 'を marks the place you leave (でる) or go across (わたる).'
    }
  },
  niTime: {
    particle: 'に',
    rule: {
      vi: 'に đi sau thời điểm cụ thể: giờ, thứ, ngày.',
      en: 'に follows a specific time: an hour, a weekday, a date.'
    }
  },
  niTarget: {
    particle: 'に',
    rule: {
      vi: 'に chỉ người nhận: tặng, gửi, gọi điện cho ai.',
      en: 'に marks who receives: give, send, or call someone.'
    }
  },
  niReceive: {
    particle: 'に',
    rule: {
      vi: 'もらう / ならう: người mình nhận từ đó đi với に (hoặc から).',
      en: 'With もらう / ならう, the person you get it from takes に (or から).'
    }
  },
  niPlace: {
    particle: 'に',
    rule: {
      vi: 'に chỉ nơi có người hoặc vật (あります / います) và nơi sống (すんで います).',
      en: 'に marks where something is (あります / います) and where you live (すんで います).'
    }
  },
  niRide: {
    particle: 'に',
    rule: {
      vi: 'のる (lên xe, tàu): phương tiện đi với に.',
      en: 'のる (get on): the vehicle takes に.'
    }
  },
  niPurpose: {
    particle: 'に',
    rule: {
      vi: 'Hành động + に + いく / くる: đi (đến) để làm gì.',
      en: 'An action + に + いく / くる: go (come) to do something.'
    }
  },
  dePlace: {
    particle: 'で',
    rule: {
      vi: 'で chỉ nơi diễn ra hành động.',
      en: 'で marks where an action happens.'
    }
  },
  deMeans: {
    particle: 'で',
    rule: {
      vi: 'で chỉ phương tiện, dụng cụ hoặc ngôn ngữ: bằng gì.',
      en: 'で marks the means, tool, or language: by or with what.'
    }
  },
  deScope: {
    particle: 'で',
    rule: {
      vi: 'で chỉ phạm vi khi so sánh: trong nhóm này, cái nào nhất.',
      en: 'で sets the group being compared: which one is the most in it.'
    }
  },
  deTotal: {
    particle: 'で',
    rule: {
      vi: 'で gộp số lượng: tất cả bao nhiêu (3 quả 300 yên).',
      en: 'で sums up a quantity: how much in total (300 yen for three).'
    }
  },
  heDirection: {
    particle: 'へ',
    rule: {
      vi: 'へ chỉ hướng đi tới với いく, くる, かえる (đọc là “e”).',
      en: 'へ marks where you head with いく, くる, かえる (read “e”).'
    }
  },
  toWith: {
    particle: 'と',
    rule: {
      vi: 'と: cùng với ai.',
      en: 'と: together with someone.'
    }
  },
  toAnd: {
    particle: 'と',
    rule: {
      vi: 'と nối danh từ và kể đủ hết: A và B.',
      en: 'と joins nouns and lists all of them: A and B.'
    }
  },
  yaList: {
    particle: 'や',
    rule: {
      vi: 'や kể vài thứ tiêu biểu, ngụ ý còn thứ khác: A, B, v.v.',
      en: 'や lists a few examples and implies there are more: A, B, and so on.'
    }
  },
  moAlso: {
    particle: 'も',
    rule: {
      vi: 'も: cũng. Đứng thay chỗ は, が hoặc を.',
      en: 'も: also. It takes the place of は, が, or を.'
    }
  },
  noOf: {
    particle: 'の',
    rule: {
      vi: 'の nối hai danh từ: của ai, về cái gì.',
      en: 'の joins two nouns: whose, or about what.'
    }
  },
  karaFrom: {
    particle: 'から',
    rule: {
      vi: 'から: từ (giờ hoặc nơi bắt đầu).',
      en: 'から: from (a starting time or place).'
    }
  },
  madeUntil: {
    particle: 'まで',
    rule: {
      vi: 'まで: đến (giờ hoặc nơi kết thúc).',
      en: 'まで: until, or as far as (an ending time or place).'
    }
  },
  kaQuestion: {
    particle: 'か',
    rule: {
      vi: 'か ở cuối câu biến câu thành câu hỏi.',
      en: 'か at the end of a sentence makes it a question.'
    }
  },
  gaBut: {
    particle: 'が',
    rule: {
      vi: 'が nối hai vế trái ngược nhau: nhưng.',
      en: 'が joins two contrasting clauses: but.'
    }
  },
  karaBecause: {
    particle: 'から',
    rule: {
      vi: 'から sau vế đầu: vì… nên…',
      en: 'から after the first clause: because…, so…'
    }
  }
};

const RUBY_MARK = /(\{[^}]+\}|[㐀-鿿々])\[([^\]]+)\]/gu;

/**
 * Parse `図[と]書[しょ]館[かん]で` into text plus furigana. A kanji followed by
 * `[reading]` gets that reading; `{今日}[きょう]` reads a whole word at once.
 */
export function rubyText(source: string): RubyText {
  const ruby: RubySegment[] = [];
  const text = source.replace(RUBY_MARK, (_match, base: string, reading: string) => {
    const surface = base.startsWith('{') ? base.slice(1, -1) : base;
    ruby.push({ base: surface, reading });

    return surface;
  });

  return { text, ruby };
}

function q(
  id: string,
  before: string,
  answer: Particle,
  after: string,
  distractors: [Particle, Particle, Particle],
  use: ParticleUse,
  vi: string,
  en: string
): ParticleQuestion {
  return {
    id,
    before: rubyText(before),
    answer,
    after: rubyText(after),
    distractors,
    use,
    meaning: { vi, en }
  };
}

/** N5 sentences, one blank each. Distractors leave out any particle that would also be right. */
export const PARTICLE_QUESTIONS: ParticleQuestion[] = [
  q(
    'wa-student',
    '私[わたし]',
    'は',
    ' 学[がく]生[せい]です。',
    ['が', 'を', 'の'],
    'topic',
    'Tôi là sinh viên.',
    'I am a student.'
  ),
  q(
    'wa-hot',
    '{今日}[きょう]',
    'は',
    ' 暑[あつ]いですね。',
    ['を', 'へ', 'と'],
    'topic',
    'Hôm nay nóng nhỉ.',
    "It's hot today, isn't it?"
  ),
  q(
    'wa-this',
    'これ',
    'は',
    ' 私[わたし]の 本[ほん]です。',
    ['を', 'で', 'に'],
    'topic',
    'Đây là sách của tôi.',
    'This is my book.'
  ),
  q(
    'ga-cat',
    '私[わたし]は 猫[ねこ]',
    'が',
    ' 好[す]きです。',
    ['を', 'に', 'で'],
    'gaObject',
    'Tôi thích mèo.',
    'I like cats.'
  ),
  q(
    'ga-japanese',
    '私[わたし]は 日[に]本[ほん]語[ご]',
    'が',
    ' 少[すこ]し わかります。',
    ['を', 'で', 'に'],
    'gaObject',
    'Tôi hiểu một chút tiếng Nhật.',
    'I understand a little Japanese.'
  ),
  q(
    'ga-car',
    '私[わたし]は 新[あたら]しい 車[くるま]',
    'が',
    ' ほしいです。',
    ['を', 'に', 'で'],
    'gaObject',
    'Tôi muốn có một chiếc xe mới.',
    'I want a new car.'
  ),
  q(
    'ga-bank',
    'あそこに 銀[ぎん]行[こう]',
    'が',
    ' あります。',
    ['を', 'で', 'へ'],
    'gaExist',
    'Ở đằng kia có ngân hàng.',
    'There is a bank over there.'
  ),
  q(
    'ga-who',
    '誰[だれ]',
    'が',
    ' 来[き]ましたか。',
    ['は', 'を', 'に'],
    'gaQuestion',
    'Ai đã đến vậy?',
    'Who came?'
  ),
  q(
    'ga-head',
    '頭[あたま]',
    'が',
    ' 痛[いた]いです。',
    ['を', 'で', 'に'],
    'gaState',
    'Tôi bị đau đầu.',
    'I have a headache.'
  ),
  q(
    'wo-bread',
    '毎[まい]朝[あさ] パン',
    'を',
    ' 食[た]べます。',
    ['が', 'に', 'で'],
    'woObject',
    'Sáng nào tôi cũng ăn bánh mì.',
    'I eat bread every morning.'
  ),
  q(
    'wo-letter',
    '友[とも]達[だち]に 手[て]紙[がみ]',
    'を',
    ' 書[か]きます。',
    ['が', 'に', 'で'],
    'woObject',
    'Tôi viết thư cho bạn.',
    'I write a letter to my friend.'
  ),
  q(
    'wo-tv',
    '毎[まい]晩[ばん] テレビ',
    'を',
    ' 見[み]ます。',
    ['が', 'に', 'へ'],
    'woObject',
    'Tối nào tôi cũng xem tivi.',
    'I watch TV every evening.'
  ),
  q(
    'wo-home',
    '7時[じ]に うち',
    'を',
    ' 出[で]ます。',
    ['に', 'へ', 'が'],
    'woLeave',
    'Tôi ra khỏi nhà lúc 7 giờ.',
    'I leave home at 7.'
  ),
  q(
    'wo-bridge',
    'この 橋[はし]',
    'を',
    ' 渡[わた]って ください。',
    ['に', 'で', 'が'],
    'woLeave',
    'Hãy đi qua cây cầu này.',
    'Please cross this bridge.'
  ),
  q(
    'ni-six',
    '毎[まい]朝[あさ] 6時[じ]',
    'に',
    ' 起[お]きます。',
    ['で', 'を', 'が'],
    'niTime',
    'Sáng nào tôi cũng dậy lúc 6 giờ.',
    'I get up at 6 every morning.'
  ),
  q(
    'ni-sunday',
    '日[にち]曜[よう]日[び]',
    'に',
    ' テニスを します。',
    ['で', 'を', 'が'],
    'niTime',
    'Chủ nhật tôi chơi tennis.',
    'I play tennis on Sundays.'
  ),
  q(
    'ni-mother',
    '母[はは]',
    'に',
    ' 花[はな]を あげました。',
    ['を', 'が', 'で'],
    'niTarget',
    'Tôi đã tặng hoa cho mẹ.',
    'I gave my mother flowers.'
  ),
  q(
    'ni-call',
    '友[とも]達[だち]',
    'に',
    ' 電[でん]話[わ]を かけます。',
    ['を', 'が', 'で'],
    'niTarget',
    'Tôi gọi điện cho bạn.',
    'I call my friend.'
  ),
  q(
    'ni-got',
    '友[とも]達[だち]',
    'に',
    ' 本[ほん]を もらいました。',
    ['を', 'が', 'で'],
    'niReceive',
    'Tôi đã nhận được sách từ bạn.',
    'I got a book from my friend.'
  ),
  q(
    'ni-desk',
    '机[つくえ]の 上[うえ]',
    'に',
    ' 本[ほん]が あります。',
    ['で', 'を', 'が'],
    'niPlace',
    'Trên bàn có quyển sách.',
    'There is a book on the desk.'
  ),
  q(
    'ni-tokyo',
    '兄[あに]は 東[とう]京[きょう]',
    'に',
    ' 住[す]んで います。',
    ['で', 'を', 'が'],
    'niPlace',
    'Anh trai tôi sống ở Tokyo.',
    'My older brother lives in Tokyo.'
  ),
  q(
    'ni-train',
    '駅[えき]で 電[でん]車[しゃ]',
    'に',
    ' 乗[の]ります。',
    ['を', 'が', 'で'],
    'niRide',
    'Tôi lên tàu ở nhà ga.',
    'I get on the train at the station.'
  ),
  q(
    'ni-shopping',
    'デパートへ 買[か]い物[もの]',
    'に',
    ' 行[い]きます。',
    ['を', 'で', 'が'],
    'niPurpose',
    'Tôi đến trung tâm thương mại để mua sắm.',
    'I go to the department store to shop.'
  ),
  q(
    'de-library',
    '図[と]書[しょ]館[かん]',
    'で',
    ' 勉[べん]強[きょう]します。',
    ['に', 'を', 'が'],
    'dePlace',
    'Tôi học ở thư viện.',
    'I study at the library.'
  ),
  q(
    'de-restaurant',
    'レストラン',
    'で',
    ' 晩[ばん]ご飯[はん]を 食[た]べます。',
    ['に', 'を', 'へ'],
    'dePlace',
    'Tôi ăn tối ở nhà hàng.',
    'I have dinner at a restaurant.'
  ),
  q(
    'de-bus',
    'バス',
    'で',
    ' 学[がっ]校[こう]へ 行[い]きます。',
    ['に', 'を', 'が'],
    'deMeans',
    'Tôi đi học bằng xe buýt.',
    'I go to school by bus.'
  ),
  q(
    'de-chopsticks',
    '箸[はし]',
    'で',
    ' ご飯[はん]を 食[た]べます。',
    ['に', 'を', 'が'],
    'deMeans',
    'Tôi ăn cơm bằng đũa.',
    'I eat rice with chopsticks.'
  ),
  q(
    'de-japanese',
    '日[に]本[ほん]語[ご]',
    'で',
    ' 話[はな]して ください。',
    ['に', 'が', 'へ'],
    'deMeans',
    'Hãy nói bằng tiếng Nhật.',
    'Please speak in Japanese.'
  ),
  q(
    'de-fruit',
    '{果物}[くだもの]',
    'で',
    ' 何[なに]が 一[いち]番[ばん] 好[す]きですか。',
    ['に', 'を', 'と'],
    'deScope',
    'Trong các loại hoa quả, bạn thích loại nào nhất?',
    'Which fruit do you like best?'
  ),
  q(
    'de-apples',
    'りんごは 3つ',
    'で',
    ' 300円[えん]です。',
    ['に', 'を', 'が'],
    'deTotal',
    'Táo 3 quả 300 yên.',
    'Apples are 300 yen for three.'
  ),
  q(
    'he-kyoto',
    'あした 京[きょう]都[と]',
    'へ',
    ' 行[い]きます。',
    ['を', 'で', 'が'],
    'heDirection',
    'Ngày mai tôi đi Kyoto.',
    "I'm going to Kyoto tomorrow."
  ),
  q(
    'he-home',
    '来[らい]月[げつ] 国[くに]',
    'へ',
    ' 帰[かえ]ります。',
    ['を', 'で', 'が'],
    'heDirection',
    'Tháng sau tôi về nước.',
    "Next month I'm going back to my country."
  ),
  q(
    'to-movie',
    '友[とも]達[だち]',
    'と',
    ' 映[えい]画[が]を 見[み]ます。',
    ['に', 'を', 'が'],
    'toWith',
    'Tôi xem phim với bạn.',
    'I watch a movie with a friend.'
  ),
  q(
    'to-eggs',
    'パン',
    'と',
    ' 卵[たまご]を 買[か]います。',
    ['に', 'で', 'が'],
    'toAnd',
    'Tôi mua bánh mì và trứng.',
    'I buy bread and eggs.'
  ),
  q(
    'ya-desk',
    '机[つくえ]の 上[うえ]に 本[ほん]',
    'や',
    ' ノートが あります。',
    ['を', 'で', 'に'],
    'yaList',
    'Trên bàn có sách, vở, v.v.',
    'There are books, notebooks and so on on the desk.'
  ),
  q(
    'mo-employee',
    'ミラーさんは 会[かい]社[しゃ]員[いん]です。私[わたし]',
    'も',
    ' 会[かい]社[しゃ]員[いん]です。',
    ['を', 'に', 'で'],
    'moAlso',
    'Anh Miller là nhân viên công ty. Tôi cũng là nhân viên công ty.',
    "Mr Miller is a company employee. I'm a company employee too."
  ),
  q(
    'mo-coffee',
    'お茶[ちゃ]を 飲[の]みます。コーヒー',
    'も',
    ' 飲[の]みます。',
    ['に', 'で', 'が'],
    'moAlso',
    'Tôi uống trà. Cà phê tôi cũng uống.',
    'I drink tea. I drink coffee too.'
  ),
  q(
    'no-umbrella',
    'これは 私[わたし]',
    'の',
    ' 傘[かさ]です。',
    ['を', 'に', 'で'],
    'noOf',
    'Đây là ô của tôi.',
    'This is my umbrella.'
  ),
  q(
    'no-book',
    'それは 日[に]本[ほん]語[ご]',
    'の',
    ' 本[ほん]です。',
    ['に', 'で', 'を'],
    'noOf',
    'Đó là sách tiếng Nhật.',
    'That is a Japanese book.'
  ),
  q(
    'kara-bank',
    '銀[ぎん]行[こう]は 9時[じ]',
    'から',
    ' 3時[じ]までです。',
    ['まで', 'に', 'で'],
    'karaFrom',
    'Ngân hàng mở từ 9 giờ đến 3 giờ.',
    'The bank is open from 9 to 3.'
  ),
  q(
    'made-bank',
    '銀[ぎん]行[こう]は 9時[じ]から 3時[じ]',
    'まで',
    'です。',
    ['から', 'に', 'で'],
    'madeUntil',
    'Ngân hàng mở từ 9 giờ đến 3 giờ.',
    'The bank is open from 9 to 3.'
  ),
  q(
    'ka-pen',
    'これは ペンです',
    'か',
    '。',
    ['を', 'に', 'で'],
    'kaQuestion',
    'Đây có phải là bút không?',
    'Is this a pen?'
  ),
  q(
    'ga-but',
    '日[に]本[ほん]語[ご]は 難[むずか]しいです',
    'が',
    '、おもしろいです。',
    ['を', 'で', 'に'],
    'gaBut',
    'Tiếng Nhật khó nhưng thú vị.',
    'Japanese is difficult but interesting.'
  ),
  q(
    'kara-taxi',
    '時[じ]間[かん]が ありません',
    'から',
    '、タクシーで 行[い]きます。',
    ['を', 'に', 'で'],
    'karaBecause',
    'Vì không có thời gian nên tôi đi taxi.',
    "I don't have time, so I'll take a taxi."
  )
];

/** A round goes through every question once. */
export const PARTICLE_ROUND_SIZE = PARTICLE_QUESTIONS.length;

export type ParticleRoundQuestion = ParticleQuestion & { options: Particle[] };

function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[other]] = [copy[other], copy[index]];
  }

  return copy;
}

/** A round in random order, with the four choices of each question shuffled. */
export function createParticleRound(size = PARTICLE_ROUND_SIZE): ParticleRoundQuestion[] {
  return shuffle(PARTICLE_QUESTIONS)
    .slice(0, size)
    .map((question) => ({
      ...question,
      options: shuffle([question.answer, ...question.distractors])
    }));
}
