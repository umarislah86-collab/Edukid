import { saveAttempt } from './firestore.js';

const KEY = "edukid_progress";

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
  catch { return {}; }
}
function save(data) { localStorage.setItem(KEY, JSON.stringify(data)); }

export function getProgress()          { return load(); }
export function getTopicProgress(id)   { return load()[id] || null; }

export function saveTopicResult(topicId, correct, total, meta = {}) {
  const data = load();
  const prev = data[topicId] || { attempts: 0, bestScore: 0, stars: 0 };
  const pct  = Math.round((correct / total) * 100);
  const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : pct >= 40 ? 1 : 0;

  data[topicId] = {
    attempts:   prev.attempts + 1,
    bestScore:  Math.max(prev.bestScore, pct),
    stars:      Math.max(prev.stars, stars),
    lastPlayed: Date.now()
  };
  save(data);

  // also push to Firestore (fire-and-forget)
  saveAttempt({
    subject:    meta.subject    || '',
    topicId,
    topicTitle: meta.topicTitle || topicId,
    grade:      meta.grade      || '',
    correct, total, stars
  });

  return data[topicId];
}

export function getTotalStars() {
  return Object.values(load()).reduce((s, t) => s + (t.stars || 0), 0);
}

export function getSubjectProgress(topicIds) {
  const data = load();
  const done = topicIds.filter(id => (data[id]?.stars || 0) >= 1).length;
  return Math.round((done / topicIds.length) * 100);
}

export function getStreakDays() {
  const dates = Object.values(load())
    .map(t => t.lastPlayed).filter(Boolean)
    .map(ts => new Date(ts).toDateString());
  return new Set(dates).size;
}
