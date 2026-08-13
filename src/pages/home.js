import { CURRICULUM, TADIKA_CURRICULUM, getAllTopicsForSubject } from '../data/curriculum.js';
import { getTotalStars, getStreakDays, getSubjectProgress } from '../data/progress.js';
import { getBalance, syncBalanceFromCloud } from '../data/screentime.js';

export function renderHome(state, navigate) {
  const profile  = state.profile;
  const isTadika = state.curriculum === 'tadika';
  const stars    = getTotalStars();
  const streak   = getStreakDays();
  const balance  = getBalance();

  syncBalanceFromCloud();

  const balColor = balance >= 60 ? '#2ECC71' : balance >= 30 ? '#FF8C42' : '#FF4D6D';
  const balMsg   = balance >= 60 ? 'Banyak tu! 🎉' : balance >= 30 ? 'Okay! 👍' : balance > 0 ? 'Sikit lagi! 💪' : 'Kosong — Belajar dulu!';

  // Avatar — photo if available, emoji otherwise
  const avatar = profile?.photo
    ? `<img src="${profile.photo}" alt="${profile.name}" class="home-photo" />`
    : `<div class="home-avatar-emoji">👧</div>`;

  const greeting = isTadika
    ? `<p>Jom main belajar, <b>${profile?.name || 'Sayang'}</b>! 🌈</p>`
    : `<p>Semangat <b>${profile?.name || 'Aalaa\''}</b>! Kita belajar hari ni 🌟</p>`;

  // Subject grid — different content per curriculum
  const currMap = isTadika ? TADIKA_CURRICULUM : CURRICULUM;
  const subjectCards = Object.entries(currMap).map(([key, subj]) => {
    const allTopics = getAllTopicsForSubject(key, state.curriculum);
    const topicIds  = allTopics.map(t => t.id);
    const pct       = getSubjectProgress(topicIds);
    return `
      <div class="subject-card ${key}" data-subject="${key}">
        <div class="icon">${subj.icon}</div>
        <h2>${subj.label}</h2>
        <p>${allTopics.length} topik</p>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${pct}%"></div>
        </div>
      </div>`;
  }).join('');

  // Grade selector only for main curriculum
  const gradeBtns = isTadika ? '' : `
    <div class="grade-selector">
      ${[{ key:'tahun6', label:'6 Tahun' }, { key:'darjah1', label:'Darjah 1' }].map(g => `
        <button class="grade-btn ${state.grade === g.key ? 'active' : ''}" data-grade="${g.key}">
          ${g.label}
        </button>`).join('')}
    </div>`;

  return `
    <div class="screen active" id="screen-home">
      <div class="home-header">
        ${avatar}
        <h1>Jom Belajar!</h1>
        ${greeting}
        <button id="btn-logout" class="logout-btn">Tukar Profil 🔄</button>
      </div>

      <div class="screentime-widget">
        <div class="st-left">
          <span class="st-icon">📱</span>
          <div>
            <p class="st-label">Masa Bebas Terkumpul</p>
            <p class="st-msg">${balMsg}</p>
          </div>
        </div>
        <div class="st-balance" style="color:${balColor}">${balance} <span>minit</span></div>
      </div>

      <div class="stats-bar">
        <div class="stat"><div class="val">⭐ ${stars}</div><div class="lbl">Bintang</div></div>
        <div class="stat"><div class="val">🔥 ${streak}</div><div class="lbl">Hari Berturut</div></div>
        <div class="stat"><div class="val">${isTadika ? '3️⃣' : (state.grade === 'tahun6' ? '6️⃣' : '1️⃣')}</div><div class="lbl">Peringkat</div></div>
      </div>

      ${gradeBtns}
      <div class="subject-grid">${subjectCards}</div>
    </div>`;
}
