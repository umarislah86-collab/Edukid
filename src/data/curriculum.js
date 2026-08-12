import { BM }              from './bm.js';
import { MATEMATIK, SAINS } from './math_sains.js';

export const CURRICULUM = { bm: BM, matematik: MATEMATIK, sains: SAINS };

export function getTopicsForSubject(subject, grade) {
  // grade is 'tahun6' or 'darjah1'
  return CURRICULUM[subject]?.[grade] || [];
}

export function getAllTopicsForSubject(subject) {
  const s = CURRICULUM[subject];
  return [...(s.tahun6 || []), ...(s.darjah1 || [])];
}
