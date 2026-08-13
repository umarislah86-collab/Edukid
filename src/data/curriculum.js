import { BM }              from './bm.js';
import { MATEMATIK, SAINS } from './math_sains.js';
import { ENGLISH }          from './english.js';
import { IQRA }             from './iqra.js';
import { TADIKA_CURRICULUM } from './tadika.js';

export const CURRICULUM = { bm: BM, matematik: MATEMATIK, sains: SAINS, english: ENGLISH, iqra: IQRA };
export { TADIKA_CURRICULUM };

export function getTopicsForSubject(subject, grade, curriculum = 'main') {
  const map    = curriculum === 'tadika' ? TADIKA_CURRICULUM : CURRICULUM;
  const topics = map[subject]?.[grade] || [];
  return topics.map(t => t.dynamic ? { ...t, questions: t.getQuestions() } : t);
}

export function getAllTopicsForSubject(subject, curriculum = 'main') {
  const map = curriculum === 'tadika' ? TADIKA_CURRICULUM : CURRICULUM;
  const s   = map[subject];
  if (!s) return [];
  if (curriculum === 'tadika') return [...(s.tadika || [])];
  return [...(s.tahun6 || []), ...(s.darjah1 || [])];
}
