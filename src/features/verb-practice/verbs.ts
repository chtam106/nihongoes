export type VerbMode = 'te' | 'nai';
export type VerbSubgroupId =
  | 'godanUtsuru'
  | 'godanMbn'
  | 'godanKu'
  | 'godanGu'
  | 'godanSu'
  | 'ichidan'
  | 'irregular';

export type PracticeVerb = {
  dictionary: string;
  masu: string;
  te: string;
  nai: string;
  meaning: { en: string; vi: string };
  specialTe?: boolean;
  specialNai?: boolean;
  kanji?: string;
  kanjiReading?: string;
};

const kanjiStem: Record<string, [string, string]> = {
  あう: ['会', 'あ'],
  あらう: ['洗', 'あら'],
  いう: ['言', 'い'],
  おわる: ['終', 'お'],
  あそぶ: ['遊', 'あそ'],
  のむ: ['飲', 'の'],
  よむ: ['読', 'よ'],
  やすむ: ['休', 'やす'],
  すむ: ['住', 'す'],
  あるく: ['歩', 'ある'],
  かく: ['書', 'か'],
  きく: ['聞', 'き'],
  いく: ['行', 'い'],
  はたらく: ['働', 'はたら'],
  いそぐ: ['急', 'いそ'],
  およぐ: ['泳', 'およ'],
  ぬぐ: ['脱', 'ぬ'],
  さわぐ: ['騒', 'さわ'],
  そそぐ: ['注', 'そそ'],
  はなす: ['話', 'はな'],
  かえす: ['返', 'かえ'],
  だす: ['出', 'だ'],
  けす: ['消', 'け'],
  なくす: ['失', 'な'],
  たべる: ['食', 'た'],
  みる: ['見', 'み'],
  おきる: ['起', 'お'],
  ねる: ['寝', 'ね'],
  でる: ['出', 'で'],
  べんきょうする: ['勉強', 'べんきょう'],
  でんわする: ['電話', 'でんわ'],
  かいものする: ['買い物', 'かいもの']
};

/** Attach the authored kanji stem and reading to each curated verb. */
function withKanji(verb: PracticeVerb): PracticeVerb {
  const [kanji, kanjiReading] = kanjiStem[verb.dictionary] ?? [];
  return kanji ? { ...verb, kanji, kanjiReading } : verb;
}

export type VerbPracticeGroup = {
  id: VerbSubgroupId;
  label: { en: string; vi: string };
  verbs: PracticeVerb[];
};

export type VerbChoice = { id: string; label: string };
export type VerbQuestion = {
  verb: PracticeVerb;
  options: VerbChoice[];
  correctId: string;
};

const groups: Omit<VerbPracticeGroup, 'verbs'>[] = [
  {
    id: 'godanUtsuru',
    label: { en: 'Group I · う／つ／る → って', vi: 'Nhóm I · う／つ／る → って' }
  },
  {
    id: 'godanMbn',
    label: { en: 'Group I · む／ぶ／ぬ → んで', vi: 'Nhóm I · む／ぶ／ぬ → んで' }
  },
  { id: 'godanKu', label: { en: 'Group I · く → いて', vi: 'Nhóm I · く → いて' } },
  { id: 'godanGu', label: { en: 'Group I · ぐ → いで', vi: 'Nhóm I · ぐ → いで' } },
  { id: 'godanSu', label: { en: 'Group I · す → して', vi: 'Nhóm I · す → して' } },
  { id: 'ichidan', label: { en: 'Group II · る → て／ない', vi: 'Nhóm II · る → て／ない' } },
  { id: 'irregular', label: { en: 'Group III · する／くる', vi: 'Nhóm III · する／くる' } }
];

/** Curated examples: exactly five verbs in each subgroup, with explicit answer forms. */
const verbsByGroup: Record<VerbSubgroupId, PracticeVerb[]> = {
  godanUtsuru: [
    {
      dictionary: 'あう',
      masu: 'あいます',
      te: 'あって',
      nai: 'あわない',
      meaning: { en: 'meet', vi: 'gặp' }
    },
    {
      dictionary: 'あらう',
      masu: 'あらいます',
      te: 'あらって',
      nai: 'あらわない',
      meaning: { en: 'wash', vi: 'rửa' }
    },
    {
      dictionary: 'いう',
      masu: 'いいます',
      te: 'いって',
      nai: 'いわない',
      meaning: { en: 'say', vi: 'nói' }
    },
    {
      dictionary: 'おわる',
      masu: 'おわります',
      te: 'おわって',
      nai: 'おわらない',
      meaning: { en: 'finish', vi: 'kết thúc' }
    },
    {
      dictionary: 'ある',
      masu: 'あります',
      te: 'あって',
      nai: 'ない',
      meaning: { en: 'exist (things)', vi: 'có, tồn tại (đồ vật)' },
      specialNai: true
    }
  ],
  godanMbn: [
    {
      dictionary: 'あそぶ',
      masu: 'あそびます',
      te: 'あそんで',
      nai: 'あそばない',
      meaning: { en: 'play', vi: 'chơi' }
    },
    {
      dictionary: 'のむ',
      masu: 'のみます',
      te: 'のんで',
      nai: 'のまない',
      meaning: { en: 'drink', vi: 'uống' }
    },
    {
      dictionary: 'よむ',
      masu: 'よみます',
      te: 'よんで',
      nai: 'よまない',
      meaning: { en: 'read', vi: 'đọc' }
    },
    {
      dictionary: 'やすむ',
      masu: 'やすみます',
      te: 'やすんで',
      nai: 'やすまない',
      meaning: { en: 'rest, take a day off', vi: 'nghỉ ngơi, nghỉ học/làm' }
    },
    {
      dictionary: 'すむ',
      masu: 'すみます',
      te: 'すんで',
      nai: 'すまない',
      meaning: { en: 'live, reside', vi: 'sống, cư trú' }
    }
  ],
  godanKu: [
    {
      dictionary: 'あるく',
      masu: 'あるきます',
      te: 'あるいて',
      nai: 'あるかない',
      meaning: { en: 'walk', vi: 'đi bộ' }
    },
    {
      dictionary: 'かく',
      masu: 'かきます',
      te: 'かいて',
      nai: 'かかない',
      meaning: { en: 'write', vi: 'viết' }
    },
    {
      dictionary: 'きく',
      masu: 'ききます',
      te: 'きいて',
      nai: 'きかない',
      meaning: { en: 'listen, ask', vi: 'nghe, hỏi' }
    },
    {
      dictionary: 'いく',
      masu: 'いきます',
      te: 'いって',
      nai: 'いかない',
      meaning: { en: 'go', vi: 'đi' },
      specialTe: true
    },
    {
      dictionary: 'はたらく',
      masu: 'はたらきます',
      te: 'はたらいて',
      nai: 'はたらかない',
      meaning: { en: 'work', vi: 'làm việc' }
    }
  ],
  godanGu: [
    {
      dictionary: 'いそぐ',
      masu: 'いそぎます',
      te: 'いそいで',
      nai: 'いそがない',
      meaning: { en: 'hurry', vi: 'vội, gấp' }
    },
    {
      dictionary: 'およぐ',
      masu: 'およぎます',
      te: 'およいで',
      nai: 'およがない',
      meaning: { en: 'swim', vi: 'bơi' }
    },
    {
      dictionary: 'ぬぐ',
      masu: 'ぬぎます',
      te: 'ぬいで',
      nai: 'ぬがない',
      meaning: { en: 'take off (clothes)', vi: 'cởi (quần áo)' }
    },
    {
      dictionary: 'さわぐ',
      masu: 'さわぎます',
      te: 'さわいで',
      nai: 'さわがない',
      meaning: { en: 'make noise', vi: 'làm ồn' }
    },
    {
      dictionary: 'そそぐ',
      masu: 'そそぎます',
      te: 'そそいで',
      nai: 'そそがない',
      meaning: { en: 'pour', vi: 'rót, đổ' }
    }
  ],
  godanSu: [
    {
      dictionary: 'はなす',
      masu: 'はなします',
      te: 'はなして',
      nai: 'はなさない',
      meaning: { en: 'speak, talk', vi: 'nói, trò chuyện' }
    },
    {
      dictionary: 'かえす',
      masu: 'かえします',
      te: 'かえして',
      nai: 'かえさない',
      meaning: { en: 'return (something)', vi: 'trả lại' }
    },
    {
      dictionary: 'だす',
      masu: 'だします',
      te: 'だして',
      nai: 'ださない',
      meaning: { en: 'take out, submit', vi: 'lấy ra, nộp' }
    },
    {
      dictionary: 'けす',
      masu: 'けします',
      te: 'けして',
      nai: 'けさない',
      meaning: { en: 'turn off, erase', vi: 'tắt, xóa' }
    },
    {
      dictionary: 'なくす',
      masu: 'なくします',
      te: 'なくして',
      nai: 'なくさない',
      meaning: { en: 'lose (something)', vi: 'làm mất' }
    }
  ],
  ichidan: [
    {
      dictionary: 'たべる',
      masu: 'たべます',
      te: 'たべて',
      nai: 'たべない',
      meaning: { en: 'eat', vi: 'ăn' }
    },
    {
      dictionary: 'みる',
      masu: 'みます',
      te: 'みて',
      nai: 'みない',
      meaning: { en: 'see, watch', vi: 'xem, nhìn' }
    },
    {
      dictionary: 'おきる',
      masu: 'おきます',
      te: 'おきて',
      nai: 'おきない',
      meaning: { en: 'get up', vi: 'thức dậy' }
    },
    {
      dictionary: 'ねる',
      masu: 'ねます',
      te: 'ねて',
      nai: 'ねない',
      meaning: { en: 'sleep', vi: 'ngủ' }
    },
    {
      dictionary: 'でる',
      masu: 'でます',
      te: 'でて',
      nai: 'でない',
      meaning: { en: 'leave, go out', vi: 'ra, rời khỏi' }
    }
  ],
  irregular: [
    {
      dictionary: 'する',
      masu: 'します',
      te: 'して',
      nai: 'しない',
      meaning: { en: 'do', vi: 'làm' }
    },
    {
      dictionary: 'くる',
      masu: 'きます',
      te: 'きて',
      nai: 'こない',
      meaning: { en: 'come', vi: 'đến' }
    },
    {
      dictionary: 'べんきょうする',
      masu: 'べんきょうします',
      te: 'べんきょうして',
      nai: 'べんきょうしない',
      meaning: { en: 'study', vi: 'học' }
    },
    {
      dictionary: 'でんわする',
      masu: 'でんわします',
      te: 'でんわして',
      nai: 'でんわしない',
      meaning: { en: 'telephone', vi: 'gọi điện thoại' }
    },
    {
      dictionary: 'かいものする',
      masu: 'かいものします',
      te: 'かいものして',
      nai: 'かいものしない',
      meaning: { en: 'shop', vi: 'mua sắm' }
    }
  ]
};

export function createVerbPracticeGroups(): VerbPracticeGroup[] {
  return groups.map((group) => {
    const verbs = verbsByGroup[group.id];
    if (verbs.length !== 5)
      throw new Error(`Verb subgroup ${group.id} must contain exactly five verbs.`);
    return { ...group, verbs: verbs.map(withKanji) };
  });
}

export function displayVerbForm(verb: PracticeVerb, form: string) {
  if (!verb.kanji || !verb.kanjiReading) return { text: form, ruby: undefined };
  if (verb.dictionary === 'くる') {
    // 来 changes its reading by form: きます／きて, こない, くる.
    if (!/^[きこく]/.test(form)) return { text: form, ruby: undefined };
    return { text: `来${form.slice(1)}`, ruby: [{ base: '来', reading: form[0] }] };
  }
  // The kanji replaces only its own reading, so okurigana stays: たべて → 食べて, おわって → 終わって.
  if (!form.startsWith(verb.kanjiReading)) return { text: form, ruby: undefined };
  return {
    text: `${verb.kanji}${form.slice(verb.kanjiReading.length)}`,
    ruby: [{ base: verb.kanji, reading: verb.kanjiReading }]
  };
}

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

/** Te endings of the five Group 1 patterns, used to build wrong answers. */
const GODAN_TE_ENDINGS = ['って', 'んで', 'いて', 'いで', 'して'];
/** Dictionary ending → あ-row sound used before ない in Group 1. */
const A_ROW: Record<string, string> = {
  う: 'わ',
  く: 'か',
  ぐ: 'が',
  す: 'さ',
  つ: 'た',
  ぬ: 'な',
  ぶ: 'ば',
  む: 'ま',
  る: 'ら'
};

/**
 * Wrong answers a learner plausibly picks. `traps` are the classic mistakes
 * (wrong group, forgetting the exception); `others` apply other Group 1 patterns.
 */
function wrongAnswers(verb: PracticeVerb, mode: VerbMode, subgroup: VerbSubgroupId) {
  const masuStem = verb.masu.slice(0, -2);
  const traps: string[] = [];
  const others: string[] = [];

  if (subgroup === 'irregular') {
    const prefix = verb.dictionary.slice(0, -2);
    const isKuru = verb.dictionary === 'くる';
    if (mode === 'te') {
      traps.push(...(isKuru ? ['くって', 'こて'] : [`${prefix}すって`, `${prefix}しって`]));
      others.push(...(isKuru ? ['くて', 'きって'] : [`${prefix}すて`, `${prefix}さって`]));
    } else {
      traps.push(...(isKuru ? ['きない', 'くない'] : [`${prefix}すない`, `${prefix}さない`]));
      others.push(
        ...(isKuru ? ['くらない', 'きらない'] : [`${prefix}すらない`, `${prefix}しらない`])
      );
    }
    return { traps, others };
  }

  const stem = verb.dictionary.slice(0, -1);
  if (mode === 'te') {
    // Treating a Group 1 verb as Group 2 (かきて), or the reverse (たべって).
    traps.push(subgroup === 'ichidan' ? `${stem}って` : `${masuStem}て`);
    // Applying the regular rule to an exception: 行きます → 行いて.
    if (verb.specialTe) traps.push(`${stem}いて`);
    others.push(...GODAN_TE_ENDINGS.map((ending) => `${stem}${ending}`));
    if (subgroup !== 'ichidan') others.push(`${stem}て`);
  } else {
    traps.push(subgroup === 'ichidan' ? `${stem}らない` : `${masuStem}ない`);
    const last = verb.dictionary.slice(-1);
    // う verbs: い → あ instead of わ (あいます → ああない).
    if (last === 'う') traps.push(`${stem}あない`);
    // Applying the regular rule to an exception: あります → あらない.
    if (verb.specialNai) traps.push(`${stem}${A_ROW[last]}ない`);
    others.push(...['か', 'が', 'さ', 'ま', 'ら', 'わ'].map((sound) => `${stem}${sound}ない`));
    others.push(`${verb.dictionary}ない`);
  }
  return { traps, others };
}

export function createVerbQuestion(
  verb: PracticeVerb,
  mode: VerbMode,
  subgroup: VerbSubgroupId
): VerbQuestion {
  const correct = verb[mode];
  const { traps, others } = wrongAnswers(verb, mode, subgroup);
  const unique = (items: string[]) =>
    items.filter((item, index) => item !== correct && items.indexOf(item) === index);
  // Up to two classic mistakes, then fill with other patterns.
  const picked = shuffle(unique(traps)).slice(0, 2);
  const rest = shuffle(unique(others).filter((item) => !picked.includes(item)));
  const distractors = [...picked, ...rest].slice(0, 3);
  const options = shuffle([correct, ...distractors]).map((label, index) => ({
    id: `choice-${index}`,
    label
  }));
  return {
    verb,
    options,
    correctId: options.find((choice) => choice.label === correct)?.id ?? options[0].id
  };
}

export function createVerbQuizDeck(groups: VerbPracticeGroup[], mode: VerbMode) {
  const items = groups.flatMap((group) => group.verbs.map((verb) => ({ verb, groupId: group.id })));
  return shuffle(items).map(({ verb, groupId }) => createVerbQuestion(verb, mode, groupId));
}
