import { BM }              from './bm.js';
import { MATEMATIK, SAINS } from './math_sains.js';
import { ENGLISH }          from './english.js';

export const CURRICULUM = { bm: BM, matematik: MATEMATIK, sains: SAINS, english: ENGLISH };

export function getTopicsForSubject(subject, grade) {
  const topics = CURRICULUM[subject]?.[grade] || [];
  // resolve dynamic topics (speak/reading) on the fly
  return topics.map(t => t.dynamic ? { ...t, questions: t.getQuestions() } : t);
}

export function getAllTopicsForSubject(subject) {
  const s = CURRICULUM[subject];
  return [...(s.tahun6 || []), ...(s.darjah1 || [])];
}
