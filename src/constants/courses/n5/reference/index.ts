import { n5ReferenceAppendix } from '@/constants/courses/n5/reference/appendix.ts';
import { n5ReferenceColumns } from '@/constants/courses/n5/reference/columns.ts';
import type { N5ReferenceContent } from '@/constants/courses/n5/reference/types.ts';
import {
  n5VerbGroup1Masu,
  n5VerbGroup1Nai,
  n5VerbGroup2Masu,
  n5VerbGroup2Nai,
  n5VerbGroup3Masu,
  n5VerbGroup3Nai
} from '@/constants/courses/n5/reference/verbs-data.ts';

export const n5Reference: N5ReferenceContent = {
  title: { en: 'Reference information', vi: 'Thông tin tham khảo' },
  intro: {
    en: 'Back-matter charts and grammar notes from Minna no Nihongo Shokyu I.',
    vi: 'Bảng tra và ghi chú ngữ pháp cuối sách Minna no Nihongo Sơ cấp I.'
  },
  columns: n5ReferenceColumns,
  appendix: n5ReferenceAppendix,
  verbs: {
    group1: { masu: n5VerbGroup1Masu, nai: n5VerbGroup1Nai },
    group2: { masu: n5VerbGroup2Masu, nai: n5VerbGroup2Nai },
    group3: { masu: n5VerbGroup3Masu, nai: n5VerbGroup3Nai }
  }
};

export type { N5ReferenceContent } from '@/constants/courses/n5/reference/types.ts';
