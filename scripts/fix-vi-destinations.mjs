/**
 * Apply safe bulk fixes for unnatural "đi + destination" Vietnamese in course data.
 * Run: node scripts/fix-vi-destinations.mjs
 * Dry run: node scripts/fix-vi-destinations.mjs --dry
 */
import fs from 'fs';
import path from 'path';

const dry = process.argv.includes('--dry');
const coursesRoot = path.join(process.cwd(), 'src/constants/courses');

const PLACES =
  'Kyoto|Tokyo|Osaka|Nara|Kobe|Hokkaido|Okinawa|Hiroshima|Daigakumae|Koshien|München|Nagasaki|Pháp|Disneyland';

function transform(content) {
  let s = content;
  const simple = [
    ['đi công ty', 'đi làm'],
    ['Đi công ty', 'Đi làm'],
    ['đi bưu điện', 'đi đến bưu điện'],
    ['đi bệnh viện', 'đi đến bệnh viện'],
    ['đi thư viện', 'đi đến thư viện'],
    ['đi bể bơi', 'đi đến bể bơi'],
    ['đi sông ', 'đi đến sông '],
    ['đi công viên', 'đi đến công viên'],
    ['đi ga ', 'đi đến ga ']
  ];
  for (const [from, to] of simple) {
    s = s.split(from).join(to);
  }
  // Train/route questions first (before generic "đi Place" -> "đi đến Place")
  s = s.replace(new RegExp(`có đi (${PLACES}|Osaka Castle)`, 'g'), 'có chạy đến $1');
  // Place names (skip "Chuyến đi …")
  s = s.replace(new RegExp(`(?<![Cc]huyến )đi (${PLACES})`, 'g'), 'đi đến $1');
  return s;
}

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name.endsWith('.ts')) out.push(p);
  }
  return out;
}

let changed = 0;
for (const file of walk(coursesRoot)) {
  const before = fs.readFileSync(file, 'utf8');
  const after = transform(before);
  if (after !== before) {
    changed += 1;
    console.log(path.relative(process.cwd(), file));
    if (!dry) fs.writeFileSync(file, after, 'utf8');
  }
}
console.log(dry ? `[dry] Would update ${changed} file(s).` : `Updated ${changed} file(s).`);
