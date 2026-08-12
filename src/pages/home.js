import { CURRICULUM, getTopicsForSubject, getAllTopicsForSubject } from '../data/curriculum.js';
import { getTotalStars, getStreakDays, getSubjectProgress } from '../data/progress.js';

export function renderHome(state, navigate) {
  const stars  = getTotalStars();
  const streak = getStreakDays();

  const subjectCards = Object.entries(CURRICULUM).map(([key, subj]) => {
    const allTopics = getAllTopicsForSubject(key);
    const topicIds  = allTopics.map(t => t.id);
    const pct       = getSubjectProgress(topicIds);
    return `
      <div class="subject-card ${key}" data-subject="${key}">
        <div class="icon">${subj.icon}</div>
        <h2>${subj.label}</h2>
        <p>${allTopics.length} topik · 6 tahun & D1</p>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${pct}%"></div>
        </div>
      </div>`;
  }).join('');

  const gradeBtns = [
    { key: 'tahun6', label: '6 Tahun' },
    { key: 'darjah1', label: 'Darjah 1' },
  ].map(g => `
    <button class="grade-btn ${state.grade === g.key ? 'active' : ''}" data-grade="${g.key}">
      ${g.label}
    </button>`).join('');

  return `
    <div class="screen active" id="screen-home">
      <div class="home-header">
        <img src="public/aalaa.jpg" alt="Aalaa'" class="home-photo" />
        <h1>Jom Belajar!</h1>
        <p>Semangat Aalaa'! Kita belajar hari ni 🌟</p>
      </div>

      <div class="stats-bar">
        <div class="stat"><div class="val">⭐ ${stars}</div><div class="lbl">Bintang</div></div>
        <div class="stat"><div class="val">🔥 ${streak}</div><div class="lbl">Hari Berturut</div></div>
        <div class="stat"><div class="val">📚 ${state.grade === 'tahun6' ? '6 Thn' : 'D1'}</div><div class="lbl">Peringkat</div></div>
      </div>

      <div class="grade-selector">${gradeBtns}</div>
      <div class="subject-grid">${subjectCards}</div>
    </div>`;
}
