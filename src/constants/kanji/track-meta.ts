import type { Bilingual } from './types.ts';

/**
 * Lightweight metadata for a kanji track (slug + display text) WITHOUT the heavy
 * lesson arrays. Client code (e.g. the nav drawer) imports this so it never pulls
 * the full kanji dataset (`lessons.ts`) into the client bundle. The full track
 * (metadata + lessons) is built server-side in `tracks.ts`.
 */
export type KanjiTrackMeta = {
  slug: string;
  name: Bilingual;
  intro: Bilingual;
};

export const KANJI_TRACK_META: KanjiTrackMeta[] = [
  {
    slug: 'grade-1',
    name: { en: 'Grade 1 kanji', vi: 'Kanji lớp 1' },
    intro: {
      en: 'The 80 kanji taught in first grade in Japan: numbers, nature, the body, and other everyday basics.',
      vi: '80 chữ kanji được dạy ở lớp 1 tại Nhật: con số, thiên nhiên, cơ thể và những điều cơ bản hằng ngày.'
    }
  },
  {
    slug: 'grade-2',
    name: { en: 'Grade 2 kanji', vi: 'Kanji lớp 2' },
    intro: {
      en: 'The 160 kanji taught in second grade in Japan: time, family, directions, verbs, and more.',
      vi: '160 chữ kanji được dạy ở lớp 2 tại Nhật: thời gian, gia đình, phương hướng, động từ và nhiều hơn nữa.'
    }
  },
  {
    slug: 'grade-3',
    name: { en: 'Grade 3 kanji', vi: 'Kanji lớp 3' },
    intro: {
      en: 'The 200 kanji taught in third grade in Japan: feelings, study, society, travel, and more.',
      vi: '200 chữ kanji được dạy ở lớp 3 tại Nhật: cảm xúc, học tập, xã hội, đi lại và nhiều hơn nữa.'
    }
  },
  {
    slug: 'grade-4',
    name: { en: 'Grade 4 kanji', vi: 'Kanji lớp 4' },
    intro: {
      en: 'The 202 kanji taught in fourth grade in Japan: feelings, society, nature, and more abstract ideas.',
      vi: '202 chữ kanji được dạy ở lớp 4 tại Nhật: cảm xúc, xã hội, thiên nhiên và nhiều khái niệm trừu tượng hơn.'
    }
  },
  {
    slug: 'grade-5',
    name: { en: 'Grade 5 kanji', vi: 'Kanji lớp 5' },
    intro: {
      en: 'The 193 kanji taught in fifth grade in Japan: feelings, society, science, and many abstract concepts.',
      vi: '193 chữ kanji được dạy ở lớp 5 tại Nhật: cảm xúc, xã hội, khoa học và nhiều khái niệm trừu tượng.'
    }
  },
  {
    slug: 'grade-6',
    name: { en: 'Grade 6 kanji', vi: 'Kanji lớp 6' },
    intro: {
      en: 'The 191 kanji taught in sixth grade in Japan: the body, character, society, government, and many abstract ideas.',
      vi: '191 chữ kanji được dạy ở lớp 6 tại Nhật: cơ thể, tâm tính, xã hội, chính trị và nhiều khái niệm trừu tượng.'
    }
  },
  {
    slug: 'kanken-4',
    name: { en: 'Kanken level 4 kanji', vi: 'Kanji Kanken 4級' },
    intro: {
      en: 'The first 313 secondary-school jōyō kanji (Kanji Kentei level 4, roughly junior high year 1), learned after the 1026 elementary kanji. Since Japan assigns no fixed grade to these, they follow the widely used Kanken progression: study, society, the body, and abstract ideas, grouped into small themed lessons.',
      vi: '313 chữ jōyō trung học đầu tiên (Kỳ thi năng lực Kanji cấp 4級, tương đương lớp 7), học sau 1026 chữ tiểu học. Vì Nhật không ấn định lớp cố định cho nhóm này, chúng theo lộ trình Kanken thông dụng: học tập, xã hội, cơ thể và các khái niệm trừu tượng, chia thành từng bài nhỏ theo chủ đề.'
    }
  },
  {
    slug: 'kanken-3',
    name: { en: 'Kanken level 3 kanji', vi: 'Kanji Kanken 3級' },
    intro: {
      en: 'The 284 secondary-school jōyō kanji of Kanji Kentei level 3 (roughly junior high graduate level), studied after Kanken level 4. Grouped into small themed lessons with meanings, on and kun readings, and tappable example words.',
      vi: '284 chữ jōyō trung học của Kỳ thi năng lực Kanji cấp 3級 (tương đương tốt nghiệp THCS), học sau Kanken 4級. Chia thành từng bài nhỏ theo chủ đề, kèm nghĩa, âm ON và KUN, và từ ví dụ bấm để nghe.'
    }
  },
  {
    slug: 'kanken-pre-2',
    name: { en: 'Kanken level pre-2 kanji', vi: 'Kanji Kanken 準2級' },
    intro: {
      en: 'The 328 jōyō kanji of Kanji Kentei level pre-2 (roughly high-school level), studied after Kanken level 3. Grouped into small themed lessons with meanings, on and kun readings, and tappable example words.',
      vi: '328 chữ jōyō của Kỳ thi năng lực Kanji cấp 準2級 (tương đương trình độ THPT), học sau Kanken 3級. Chia thành từng bài nhỏ theo chủ đề, kèm nghĩa, âm ON và KUN, và từ ví dụ bấm để nghe.'
    }
  },
  {
    slug: 'kanken-2',
    name: { en: 'Kanken level 2 kanji', vi: 'Kanji Kanken 2級' },
    intro: {
      en: 'The final 185 jōyō kanji of Kanji Kentei level 2 (the full 2136-character jōyō set), studied after Kanken level pre-2. Grouped into small themed lessons with meanings, on and kun readings, and tappable example words.',
      vi: '185 chữ jōyō cuối cùng của Kỳ thi năng lực Kanji cấp 2級 (trọn bộ 2136 chữ jōyō), học sau Kanken 準2級. Chia thành từng bài nhỏ theo chủ đề, kèm nghĩa, âm ON và KUN, và từ ví dụ bấm để nghe.'
    }
  }
];
