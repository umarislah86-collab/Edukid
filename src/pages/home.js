import { CURRICULUM, TADIKA_CURRICULUM, getAllTopicsForSubject } from '../data/curriculum.js';
import { getTotalStars, getStreakDays, getSubjectProgress } from '../data/progress.js';
import { getBalance, syncBalanceFromCloud } from '../data/screentime.js';

export function renderHome(state, navigate) {
  const profile  = state.profile;
  const isParent = profile?.id === 'ayah';
  const isTadika = state.curriculum === 'tadika';
  const stars    = getTotalStars();
  const streak   = getStreakDays();
  const balance  = getBalance();

  if (!isParent) syncBalanceFromCloud();

  // Avatar
  const avatar = isParent
    ? `<div class="home-avatar-emoji" style="background:#E8F4FD;border-color:#3498DB">👨</div>`
    : profile?.photo
      ? `<img src="${profile.photo}" alt="${profile.name}" class="home-photo" />`
      : `<div class="home-avatar-emoji">👧</div>`;

  const greeting = isParent
    ? `<p>Mode Cuba Ayah 🔍 — tiada rekod disimpan</p>`
    : isTadika
      ? `<p>Jom main belajar, <b>${profile?.name || 'Sayang'}</b>! 🌈</p>`
      : `<p>Semangat <b>${profile?.name || 'Aalaa\''}</b>! Kita belajar hari ni 🌟</p>`;

  // Stats + screentime widget — hidden for parent
  const balColor = balance >= 60 ? '#2ECC71' : balance >= 30 ? '#FF8C42' : '#FF4D6D';
  const balMsg   = balance >= 60 ? 'Banyak tu! 🎉' : balance >= 30 ? 'Okay! 👍' : balance > 0 ? 'Sikit lagi! 💪' : 'Kosong — Belajar dulu!';
  const statsWidget = isParent ? '' : `
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
    </div>`;

  // Grade selector — main curriculum kids only
  const gradeBtns = (isParent || isTadika) ? '' : `
    <div class="grade-selector">
      ${[{ key:'tahun6', label:'6 Tahun' }, { key:'darjah1', label:'Darjah 1' }].map(g => `
        <button class="grade-btn ${state.grade === g.key ? 'active' : ''}" data-grade="${g.key}">
          ${g.label}
        </button>`).join('')}
    </div>`;

  // Subject grid
  let subjectSection = '';
  if (isParent) {
    const mainCards = Object.entries(CURRICULUM).map(([key, subj]) => {
      const allTopics = getAllTopicsForSubject(key, 'main');
      return `
        <div class="subject-card ${key}" data-subject="${key}" data-curriculum="main" data-grade="darjah1">
          <div class="icon">${subj.icon}</div>
          <h2>${subj.label}</h2>
          <p>${allTopics.length} topik</p>
          <div class="progress-bar"><div class="progress-fill" style="width:0%"></div></div>
        </div>`;
    }).join('');
    const tadikaCards = Object.entries(TADIKA_CURRICULUM).map(([key, subj]) => {
      const allTopics = getAllTopicsForSubject(key, 'tadika');
      return `
        <div class="subject-card ${key}" data-subject="${key}" data-curriculum="tadika" data-grade="tadika">
          <div class="icon">${subj.icon}</div>
          <h2>${subj.label}</h2>
          <p>${allTopics.length} topik</p>
          <div class="progress-bar"><div class="progress-fill" style="width:0%"></div></div>
        </div>`;
    }).join('');
    subjectSection = `
      <p class="section-label">Aalaa' 👧 — Darjah 1</p>
      <div class="subject-grid">${mainCards}</div>
      <p class="section-label">Yah 👶 — Tadika</p>
      <div class="subject-grid">${tadikaCards}</div>`;
  } else {
    const currMap = isTadika ? TADIKA_CURRICULUM : CURRICULUM;
    const cards = Object.entries(currMap).map(([key, subj]) => {
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
    subjectSection = `<div class="subject-grid">${cards}</div>`;
  }

  return `
    <div class="screen active" id="screen-home">
      <div class="home-header">
        ${avatar}
        <h1>Jom Belajar!</h1>
        ${greeting}
        <button id="btn-logout" class="logout-btn">Tukar Profil 🔄</button>
      </div>
      ${statsWidget}
      ${gradeBtns}
      ${subjectSection}
    </div>`;
}
