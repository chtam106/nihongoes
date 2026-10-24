/**
 * Heuristic audit for unnatural Vietnamese in course content (vi: fields).
 * Run: node scripts/audit-vi.mjs
 */
import fs from 'fs';
import path from 'path';

const coursesRoot = path.join(process.cwd(), 'src/constants/courses');

const PLACES =
  'Kyoto|Tokyo|Osaka|Nara|Kobe|Hokkaido|Okinawa|Hiroshima|bưu điện|bệnh viện|siêu thị|nhà ga|ngân hàng|thư viện|bể bơi|sông|công viên|trường|công ty';

/** Place / institution: "đi X" without "đến" (行きます-style). Skip Chuyến đi, đi bằng/bộ/với/học/làm/... */
const DI_DEST = new RegExp(
  `(?<![Cc]huyến )đi (?!(?:đến|bằng|bộ|với|học|làm|công tác|du lịch|dạo|mua|lấy|lái|nghe|karaoke|nước ngoài|ra |thẳng|chậm|qu[aá] |xem |câu |trượt |chạy |ngày |tháng |năm |hai |một |~|…))(?:${PLACES}|ga )`,
  'gi'
);

const RULES = [
  {
    id: 'di-cong-ty',
    re: /đi công ty/gi,
    hint: 'Prefer "đi làm" for 会社へ行きます-style'
  },
  {
    id: 'di-truong',
    re: /đi trường/gi,
    hint: 'Prefer "đi học"'
  },
  { id: 'di-dest', re: DI_DEST, hint: 'Add "đến" after "đi" for destinations' },
  {
    id: 'em-dash',
    re: /—/,
    hint: 'Use ASCII hyphen " - " in non-Japanese copy (project typography rule)'
  }
];

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name.endsWith('.ts')) out.push(p);
  }
  return out;
}

function extractViStrings(text) {
  const hits = [];
  const re = /\bvi:\s*'((?:\\'|[^'])*)'/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    hits.push({ index: m.index, value: m[1].replace(/\\'/g, "'") });
  }
  const reDq = /\bvi:\s*"((?:\\"|[^"])*)"/g;
  while ((m = reDq.exec(text)) !== null) {
    hits.push({ index: m.index, value: m[1].replace(/\\"/g, '"') });
  }
  return hits;
}

function lineOf(text, index) {
  return text.slice(0, index).split('\n').length;
}

const files = walk(coursesRoot);
const findings = [];

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const strings = extractViStrings(text);
  for (const { index, value } of strings) {
    for (const rule of RULES) {
      rule.re.lastIndex = 0;
      if (rule.re.test(value)) {
        findings.push({
          file: path.relative(process.cwd(), file),
          line: lineOf(text, index),
          rule: rule.id,
          hint: rule.hint,
          vi: value
        });
      }
    }
  }
}

findings.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);

if (findings.length === 0) {
  console.log('No heuristic VI issues found.');
  process.exit(0);
}

console.log(`Found ${findings.length} issue(s):\n`);
for (const f of findings) {
  console.log(`${f.file}:${f.line} [${f.rule}] ${f.hint}`);
  console.log(`  ${f.vi}\n`);
}
process.exit(1);
