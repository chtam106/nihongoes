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
  'あう': ['会', 'あ'], 'あらう': ['洗', 'あら'], 'いう': ['言', 'い'], 'おわる': ['終', 'お'],
  'あそぶ': ['遊', 'あそ'], 'のむ': ['飲', 'の'], 'よむ': ['読', 'よ'], 'やすむ': ['休', 'やす'], 'すむ': ['住', 'す'],
  'あるく': ['歩', 'ある'], 'かく': ['書', 'か'], 'きく': ['聞', 'き'], 'いく': ['行', 'い'], 'はたらく': ['働', 'はたら'],
  'いそぐ': ['急', 'いそ'], 'およぐ': ['泳', 'およ'], 'ぬぐ': ['脱', 'ぬ'], 'さわぐ': ['騒', 'さわ'], 'そそぐ': ['注', 'そそ'],
  'はなす': ['話', 'はな'], 'かえす': ['返', 'かえ'], 'だす': ['出', 'だ'], 'けす': ['消', 'け'], 'なくす': ['失', 'な'],
  'たべる': ['食', 'た'], 'みる': ['見', 'み'], 'おきる': ['起', 'お'], 'ねる': ['寝', 'ね'], 'でる': ['出', 'で'],
  'べんきょうする': ['勉強', 'べんきょう'], 'でんわする': ['電話', 'でんわ'], 'かいものする': ['買い物', 'かいもの']
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
  { id: 'godanUtsuru', label: { en: 'Group I · う／つ／る → って', vi: 'Nhóm I · う／つ／る → って' } },
  { id: 'godanMbn', label: { en: 'Group I · む／ぶ／ぬ → んで', vi: 'Nhóm I · む／ぶ／ぬ → んで' } },
  { id: 'godanKu', label: { en: 'Group I · く → いて', vi: 'Nhóm I · く → いて' } },
  { id: 'godanGu', label: { en: 'Group I · ぐ → いで', vi: 'Nhóm I · ぐ → いで' } },
  { id: 'godanSu', label: { en: 'Group I · す → して', vi: 'Nhóm I · す → して' } },
  { id: 'ichidan', label: { en: 'Group II · る → て／ない', vi: 'Nhóm II · る → て／ない' } },
  { id: 'irregular', label: { en: 'Group III · する／くる', vi: 'Nhóm III · する／くる' } }
];

/** Curated examples: exactly five verbs in each subgroup, with explicit answer forms. */
const verbsByGroup: Record<VerbSubgroupId, PracticeVerb[]> = {
  godanUtsuru: [
    { dictionary: 'あう', masu: 'あいます', te: 'あって', nai: 'あわない', meaning: { en: 'meet', vi: 'gặp' } },
    { dictionary: 'あらう', masu: 'あらいます', te: 'あらって', nai: 'あらわない', meaning: { en: 'wash', vi: 'rửa' } },
    { dictionary: 'いう', masu: 'いいます', te: 'いって', nai: 'いわない', meaning: { en: 'say', vi: 'nói' } },
    { dictionary: 'おわる', masu: 'おわります', te: 'おわって', nai: 'おわらない', meaning: { en: 'finish', vi: 'kết thúc' } },
    { dictionary: 'ある', masu: 'あります', te: 'あって', nai: 'ない', meaning: { en: 'exist (things)', vi: 'có, tồn tại (đồ vật)' }, specialNai: true }
  ],
  godanMbn: [
    { dictionary: 'あそぶ', masu: 'あそびます', te: 'あそんで', nai: 'あそばない', meaning: { en: 'play', vi: 'chơi' } },
    { dictionary: 'のむ', masu: 'のみます', te: 'のんで', nai: 'のまない', meaning: { en: 'drink', vi: 'uống' } },
    { dictionary: 'よむ', masu: 'よみます', te: 'よんで', nai: 'よまない', meaning: { en: 'read', vi: 'đọc' } },
    { dictionary: 'やすむ', masu: 'やすみます', te: 'やすんで', nai: 'やすまない', meaning: { en: 'rest, take a day off', vi: 'nghỉ ngơi, nghỉ học/làm' } },
    { dictionary: 'すむ', masu: 'すみます', te: 'すんで', nai: 'すまない', meaning: { en: 'live, reside', vi: 'sống, cư trú' } }
  ],
  godanKu: [
    { dictionary: 'あるく', masu: 'あるきます', te: 'あるいて', nai: 'あるかない', meaning: { en: 'walk', vi: 'đi bộ' } },
    { dictionary: 'かく', masu: 'かきます', te: 'かいて', nai: 'かかない', meaning: { en: 'write', vi: 'viết' } },
    { dictionary: 'きく', masu: 'ききます', te: 'きいて', nai: 'きかない', meaning: { en: 'listen, ask', vi: 'nghe, hỏi' } },
    { dictionary: 'いく', masu: 'いきます', te: 'いって', nai: 'いかない', meaning: { en: 'go', vi: 'đi' }, specialTe: true },
    { dictionary: 'はたらく', masu: 'はたらきます', te: 'はたらいて', nai: 'はたらかない', meaning: { en: 'work', vi: 'làm việc' } }
  ],
  godanGu: [
    { dictionary: 'いそぐ', masu: 'いそぎます', te: 'いそいで', nai: 'いそがない', meaning: { en: 'hurry', vi: 'vội, gấp' } },
    { dictionary: 'およぐ', masu: 'およぎます', te: 'およいで', nai: 'およがない', meaning: { en: 'swim', vi: 'bơi' } },
    { dictionary: 'ぬぐ', masu: 'ぬぎます', te: 'ぬいで', nai: 'ぬがない', meaning: { en: 'take off (clothes)', vi: 'cởi (quần áo)' } },
    { dictionary: 'さわぐ', masu: 'さわぎます', te: 'さわいで', nai: 'さわがない', meaning: { en: 'make noise', vi: 'làm ồn' } },
    { dictionary: 'そそぐ', masu: 'そそぎます', te: 'そそいで', nai: 'そそがない', meaning: { en: 'pour', vi: 'rót, đổ' } }
  ],
  godanSu: [
    { dictionary: 'はなす', masu: 'はなします', te: 'はなして', nai: 'はなさない', meaning: { en: 'speak, talk', vi: 'nói, trò chuyện' } },
    { dictionary: 'かえす', masu: 'かえします', te: 'かえして', nai: 'かえさない', meaning: { en: 'return (something)', vi: 'trả lại' } },
    { dictionary: 'だす', masu: 'だします', te: 'だして', nai: 'ださない', meaning: { en: 'take out, submit', vi: 'lấy ra, nộp' } },
    { dictionary: 'けす', masu: 'けします', te: 'けして', nai: 'けさない', meaning: { en: 'turn off, erase', vi: 'tắt, xóa' } },
    { dictionary: 'なくす', masu: 'なくします', te: 'なくして', nai: 'なくさない', meaning: { en: 'lose (something)', vi: 'làm mất' } }
  ],
  ichidan: [
    { dictionary: 'たべる', masu: 'たべます', te: 'たべて', nai: 'たべない', meaning: { en: 'eat', vi: 'ăn' } },
    { dictionary: 'みる', masu: 'みます', te: 'みて', nai: 'みない', meaning: { en: 'see, watch', vi: 'xem, nhìn' } },
    { dictionary: 'おきる', masu: 'おきます', te: 'おきて', nai: 'おきない', meaning: { en: 'get up', vi: 'thức dậy' } },
    { dictionary: 'ねる', masu: 'ねます', te: 'ねて', nai: 'ねない', meaning: { en: 'sleep', vi: 'ngủ' } },
    { dictionary: 'でる', masu: 'でます', te: 'でて', nai: 'でない', meaning: { en: 'leave, go out', vi: 'ra, rời khỏi' } }
  ],
  irregular: [
    { dictionary: 'する', masu: 'します', te: 'して', nai: 'しない', meaning: { en: 'do', vi: 'làm' } },
    { dictionary: 'くる', masu: 'きます', te: 'きて', nai: 'こない', meaning: { en: 'come', vi: 'đến' } },
    { dictionary: 'べんきょうする', masu: 'べんきょうします', te: 'べんきょうして', nai: 'べんきょうしない', meaning: { en: 'study', vi: 'học' } },
    { dictionary: 'でんわする', masu: 'でんわします', te: 'でんわして', nai: 'でんわしない', meaning: { en: 'telephone', vi: 'gọi điện thoại' } },
    { dictionary: 'かいものする', masu: 'かいものします', te: 'かいものして', nai: 'かいものしない', meaning: { en: 'shop', vi: 'mua sắm' } }
  ]
};

export function createVerbPracticeGroups(): VerbPracticeGroup[] {
  return groups.map((group) => {
    const verbs = verbsByGroup[group.id];
    if (verbs.length !== 5) throw new Error(`Verb subgroup ${group.id} must contain exactly five verbs.`);
    return { ...group, verbs: verbs.map(withKanji) };
  });
}

export function displayVerbForm(verb: PracticeVerb, form: string) {
  if (!verb.kanji || !verb.kanjiReading) return { text: form, ruby: undefined };
  if (verb.dictionary === 'くる') {
    const readings: Record<string, string> = { 'きます': 'き', 'きて': 'き', 'こない': 'こ' };
    return { text: form.replace(/^[きこ]/, '来'), ruby: [{ base: '来', reading: readings[form] ?? 'く' }] };
  }
  const root = verb.dictionary.endsWith('する') ? verb.dictionary.slice(0, -2) : verb.dictionary.slice(0, -1);
  if (!form.startsWith(root)) return { text: form, ruby: undefined };
  return {
    text: `${verb.kanji}${form.slice(root.length)}`,
    ruby: [{ base: verb.kanji, reading: verb.kanjiReading }]
  };
}

const TE_PATTERNS: VerbSubgroupId[] = [
  'godanUtsuru', 'godanMbn', 'godanKu', 'godanGu', 'godanSu', 'ichidan', 'irregular'
];
const NAI_ENDINGS: Record<VerbSubgroupId, string> = {
  godanUtsuru: 'らない', godanMbn: 'まない', godanKu: 'かない', godanGu: 'がない',
  godanSu: 'さない', ichidan: 'ない', irregular: 'しない'
};

function teVariant(dictionary: string, subgroup: VerbSubgroupId) {
  if (subgroup === 'irregular') {
    if (dictionary === 'くる' || dictionary.endsWith('てくる')) return `${dictionary.slice(0, -2)}きて`;
    return `${dictionary.slice(0, -2)}して`;
  }
  const stem = dictionary.slice(0, -1);
  const endings: Record<Exclude<VerbSubgroupId, 'irregular'>, string> = {
    godanUtsuru: 'って', godanMbn: 'んで', godanKu: 'いて', godanGu: 'いで',
    godanSu: 'して', ichidan: 'て'
  };
  return `${stem}${endings[subgroup]}`;
}

function naiVariant(dictionary: string, subgroup: VerbSubgroupId) {
  if (subgroup === 'irregular') {
    if (dictionary === 'くる' || dictionary.endsWith('てくる')) return `${dictionary.slice(0, -2)}こない`;
    return `${dictionary.slice(0, -2)}しない`;
  }
  return `${dictionary.slice(0, -1)}${NAI_ENDINGS[subgroup]}`;
}

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

export function createVerbQuestion(verb: PracticeVerb, mode: VerbMode, subgroup: VerbSubgroupId): VerbQuestion {
  const correct = verb[mode];
  const patterns = mode === 'te' ? TE_PATTERNS : groups.map((group) => group.id);
  const distractors = shuffle(patterns.filter((pattern) => pattern !== subgroup)
    .map((pattern) => mode === 'te' ? teVariant(verb.dictionary, pattern) : naiVariant(verb.dictionary, pattern))
    .filter((choice, index, choices) => choice !== correct && choices.indexOf(choice) === index))
    .slice(0, 3);
  const options = shuffle([correct, ...distractors]).map((label, index) => ({ id: `choice-${index}`, label }));
  return { verb, options, correctId: options.find((choice) => choice.label === correct)?.id ?? options[0].id };
}

export function createVerbQuizDeck(groups: VerbPracticeGroup[], mode: VerbMode) {
  const items = groups.flatMap((group) => group.verbs.map((verb) => ({ verb, groupId: group.id })));
  return shuffle(items).map(({ verb, groupId }) => createVerbQuestion(verb, mode, groupId));
}
