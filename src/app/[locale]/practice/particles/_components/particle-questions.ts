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
  'まで',
  'までに',
  'より',
  'しか',
  'ので',
  'のに'
] as const;

export const PARTICLE_LEVELS = ['n5', 'n4'] as const;

export type ParticleLevel = (typeof PARTICLE_LEVELS)[number];

/** Which questions a round draws from. */
export type ParticleLevelFilter = ParticleLevel | 'all';

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
  | 'karaBecause'
  | 'yoriThan'
  | 'niBecome'
  | 'toQuote'
  | 'gaIntransitive'
  | 'niPassive'
  | 'niCausative'
  | 'deCause'
  | 'madeniDeadline'
  | 'nodeBecause'
  | 'noniDespite'
  | 'kaEmbedded'
  | 'niPer'
  | 'shikaOnly';

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
  /** JLPT level of this use. */
  level: ParticleLevel;
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
  },
  yoriThan: {
    particle: 'より',
    rule: {
      vi: 'A は B より …: A hơn B.',
      en: 'A は B より …: A is more … than B.'
    }
  },
  niBecome: {
    particle: 'に',
    rule: {
      vi: 'Danh từ + に + なる: trở thành, đến lúc (医者に なる, 春に なる).',
      en: 'A noun + に + なる: become, or turn into (医者に なる, 春に なる).'
    }
  },
  toQuote: {
    particle: 'と',
    rule: {
      vi: 'と + 思う / 言う: dẫn lại điều mình nghĩ hoặc người khác nói.',
      en: 'と + 思う / 言う: quotes what you think or what someone said.'
    }
  },
  gaIntransitive: {
    particle: 'が',
    rule: {
      vi: 'Tự động từ (開く, 閉まる, つく…): vật tự thay đổi đi với が. Tha động từ (開ける…) mới đi với を.',
      en: 'Intransitive verbs (開く, 閉まる, つく…): the thing that changes takes が. Transitive ones (開ける…) take を.'
    }
  },
  niPassive: {
    particle: 'に',
    rule: {
      vi: 'Câu bị động: người gây ra hành động đi với に.',
      en: 'In a passive sentence, whoever does the action takes に.'
    }
  },
  niCausative: {
    particle: 'に',
    rule: {
      vi: 'Câu sai khiến 〜させる (có tân ngữ を): người bị bắt hoặc được cho làm đi với に.',
      en: 'In a causative 〜させる sentence with an object (を), the person made or let to act takes に.'
    }
  },
  deCause: {
    particle: 'で',
    rule: {
      vi: 'で chỉ nguyên nhân: vì ốm, vì gió, vì tai nạn…',
      en: 'で marks a cause: because of a cold, the wind, an accident…'
    }
  },
  madeniDeadline: {
    particle: 'までに',
    rule: {
      vi: 'までに: hạn chót, xong trước lúc đó. まで thì là làm liên tục cho đến lúc đó.',
      en: 'までに: a deadline, done by then. まで means doing it all the way until then.'
    }
  },
  nodeBecause: {
    particle: 'ので',
    rule: {
      vi: 'ので: vì… nên…, nghe nhẹ nhàng, lịch sự hơn から.',
      en: 'ので: because…, so…, softer and more polite than から.'
    }
  },
  noniDespite: {
    particle: 'のに',
    rule: {
      vi: 'のに: vậy mà, kết quả trái với điều mong đợi.',
      en: 'のに: even though; the result is not what you expected.'
    }
  },
  kaEmbedded: {
    particle: 'か',
    rule: {
      vi: '〜か どうか: có… hay không, câu hỏi lồng trong câu.',
      en: '〜か どうか: whether or not, a question inside a sentence.'
    }
  },
  niPer: {
    particle: 'に',
    rule: {
      vi: 'に chỉ tần suất: bao nhiêu lần trong một khoảng thời gian.',
      en: 'に gives a rate: how many times within a period.'
    }
  },
  shikaOnly: {
    particle: 'しか',
    rule: {
      vi: 'しか + thể phủ định: chỉ (ít hơn mong đợi).',
      en: 'しか + a negative verb: only (less than you would like).'
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
  en: string,
  level: ParticleLevel = 'n5'
): ParticleQuestion {
  return {
    id,
    before: rubyText(before),
    answer,
    after: rubyText(after),
    distractors,
    use,
    meaning: { vi, en },
    level
  };
}

/** One blank per sentence. Distractors leave out any particle that would also be right. */
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
  ),
  q(
    'yori-osaka',
    '東[とう]京[きょう]は 大[おお]阪[さか]',
    'より',
    ' 大[おお]きいです。',
    ['から', 'まで', 'で'],
    'yoriThan',
    'Tokyo lớn hơn Osaka.',
    'Tokyo is bigger than Osaka.'
  ),
  q(
    'ni-doctor',
    '将[しょう]来[らい] 医[い]者[しゃ]',
    'に',
    ' なりたいです。',
    ['を', 'が', 'で'],
    'niBecome',
    'Sau này tôi muốn trở thành bác sĩ.',
    'I want to become a doctor one day.',
    'n4'
  ),
  q(
    'ni-spring',
    'もう すぐ 春[はる]',
    'に',
    ' なります。',
    ['を', 'で', 'へ'],
    'niBecome',
    'Sắp sang xuân rồi.',
    'It will soon be spring.',
    'n4'
  ),
  q(
    'to-rain',
    'あしたは 雨[あめ]が 降[ふ]る',
    'と',
    ' 思[おも]います。',
    ['を', 'に', 'が'],
    'toQuote',
    'Tôi nghĩ ngày mai trời sẽ mưa.',
    'I think it will rain tomorrow.',
    'n4'
  ),
  q(
    'to-said',
    '田[た]中[なか]さんは すぐ 来[く]る',
    'と',
    ' 言[い]いました。',
    ['を', 'に', 'で'],
    'toQuote',
    'Anh Tanaka nói là sẽ đến ngay.',
    'Mr Tanaka said he would come right away.',
    'n4'
  ),
  q(
    'ga-door',
    '風[かぜ]で ドア',
    'が',
    ' 開[あ]きました。',
    ['を', 'に', 'で'],
    'gaIntransitive',
    'Cửa mở ra vì gió.',
    'The door blew open in the wind.',
    'n4'
  ),
  q(
    'wo-window',
    '暑[あつ]いですから、窓[まど]',
    'を',
    ' 開[あ]けて ください。',
    ['が', 'に', 'で'],
    'woObject',
    'Nóng quá, hãy mở cửa sổ ra.',
    "It's hot, so please open the window.",
    'n4'
  ),
  q(
    'ni-praised',
    '先[せん]生[せい]',
    'に',
    ' 褒[ほ]められました。',
    ['が', 'を', 'で'],
    'niPassive',
    'Tôi được thầy giáo khen.',
    'I was praised by my teacher.',
    'n4'
  ),
  q(
    'ni-stepped',
    'となりの 人[ひと]',
    'に',
    ' 足[あし]を 踏[ふ]まれました。',
    ['が', 'を', 'で'],
    'niPassive',
    'Tôi bị người bên cạnh giẫm vào chân.',
    'The person next to me stepped on my foot.',
    'n4'
  ),
  q(
    'ni-vegetables',
    '母[はは]は 子[こ]ども',
    'に',
    ' 野[や]菜[さい]を 食[た]べさせます。',
    ['が', 'を', 'で'],
    'niCausative',
    'Mẹ bắt con ăn rau.',
    'The mother makes her child eat vegetables.',
    'n4'
  ),
  q(
    'de-cold',
    '{風邪}[かぜ]',
    'で',
    ' 学[がっ]校[こう]を 休[やす]みました。',
    ['に', 'を', 'が'],
    'deCause',
    'Tôi nghỉ học vì bị cảm.',
    'I stayed home from school with a cold.',
    'n4'
  ),
  q(
    'madeni-report',
    '金[きん]曜[よう]日[び]',
    'までに',
    ' レポートを 出[だ]して ください。',
    ['まで', 'から', 'で'],
    'madeniDeadline',
    'Hãy nộp báo cáo trước thứ Sáu.',
    'Please hand in the report by Friday.',
    'n4'
  ),
  q(
    'made-work',
    '5時[じ]',
    'まで',
    ' 会[かい]社[しゃ]で 働[はたら]きます。',
    ['までに', 'を', 'が'],
    'madeUntil',
    'Tôi làm việc ở công ty đến 5 giờ.',
    'I work at the office until 5.',
    'n4'
  ),
  q(
    'node-rain',
    '雨[あめ]が 降[ふ]って いる',
    'ので',
    '、出[で]かけません。',
    ['のに', 'を', 'で'],
    'nodeBecause',
    'Vì trời đang mưa nên tôi không ra ngoài.',
    "It's raining, so I won't go out.",
    'n4'
  ),
  q(
    'noni-fever',
    '薬[くすり]を 飲[の]んだ',
    'のに',
    '、まだ 熱[ねつ]が あります。',
    ['ので', 'を', 'で'],
    'noniDespite',
    'Đã uống thuốc rồi mà vẫn còn sốt.',
    'I took medicine, but I still have a fever.',
    'n4'
  ),
  q(
    'ka-party',
    'パーティーに 行[い]く',
    'か',
    ' どうか まだ わかりません。',
    ['を', 'に', 'が'],
    'kaEmbedded',
    'Tôi vẫn chưa biết có đi dự tiệc hay không.',
    "I don't know yet whether I'll go to the party.",
    'n4'
  ),
  q(
    'ni-twice',
    '1週[しゅう]間[かん]',
    'に',
    ' 2回[かい] プールへ 行[い]きます。',
    ['で', 'を', 'が'],
    'niPer',
    'Một tuần tôi đi bơi 2 lần.',
    'I go to the pool twice a week.',
    'n4'
  ),
  q(
    'shika-wallet',
    '財[さい]布[ふ]に 100円[えん]',
    'しか',
    ' ありません。',
    ['を', 'で', 'に'],
    'shikaOnly',
    'Trong ví chỉ có 100 yên.',
    'I only have 100 yen in my wallet.',
    'n4'
  )
];

/** Questions a level filter draws from. */
export function particleQuestionsFor(filter: ParticleLevelFilter): ParticleQuestion[] {
  return filter === 'all'
    ? PARTICLE_QUESTIONS
    : PARTICLE_QUESTIONS.filter((question) => question.level === filter);
}

export type ParticleRoundQuestion = ParticleQuestion & { options: Particle[] };

function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[other]] = [copy[other], copy[index]];
  }

  return copy;
}

/**
 * A round goes through every question of the level once, in random order, with
 * the four choices of each question shuffled.
 */
export function createParticleRound(filter: ParticleLevelFilter = 'all'): ParticleRoundQuestion[] {
  return shuffle(particleQuestionsFor(filter)).map((question) => ({
    ...question,
    options: shuffle([question.answer, ...question.distractors])
  }));
}
