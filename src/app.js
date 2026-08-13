import { renderHome }   from './pages/home.js';
import { renderTopics } from './pages/topics.js';
import { renderQuiz }   from './pages/quiz.js';
import { renderResult } from './pages/result.js';
import { renderLogin, bindLogin }  from './pages/login.js';

const state = {
  screen:     'login',
  subject:    null,
  grade:      'tahun6',
  curriculum: 'main',
  profile:    null,
  topic:      null,
  result:     null,
};

// Restore session if already logged in
const saved = sessionStorage.getItem('edukid_profile');
if (saved) {
  try {
    const p = JSON.parse(saved);
    state.profile    = p;
    state.grade      = p.grade;
    state.curriculum = p.curriculum;
    state.screen     = 'home';
  } catch(_) {}
}

function navigate(screen, extra = {}) {
  Object.assign(state, { screen, ...extra });
  // keep grade/curriculum in sync if profile changes
  if (extra.profile) {
    state.grade      = extra.profile.grade;
    state.curriculum = extra.profile.curriculum;
  }
  // Restore parent curriculum when returning to home
  if (screen === 'home' && state.profile?.id === 'ayah') {
    state.curriculum = 'parent';
  }
  render();
}

function render() {
  const app = document.getElementById('app');
  switch (state.screen) {
    case 'login':  app.innerHTML = renderLogin(navigate); bindLogin(navigate); break;
    case 'home':   app.innerHTML = renderHome(state, navigate);    break;
    case 'topics': app.innerHTML = renderTopics(state, navigate);  break;
    case 'quiz':   app.innerHTML = renderQuiz(state, navigate);    break;
    case 'result': app.innerHTML = renderResult(state, navigate);  break;
  }
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('.grade-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.grade = btn.dataset.grade;
      render();
    });
  });
  document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => {
      const curriculum = card.dataset.curriculum || state.curriculum;
      const grade      = card.dataset.grade      || state.grade;
      navigate('topics', { subject: card.dataset.subject, curriculum, grade });
    });
  });
  document.querySelectorAll('.topic-item').forEach(item => {
    item.addEventListener('click', () => {
      const topic = JSON.parse(item.dataset.topic);
      navigate('quiz', { topic });
    });
  });
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const dest = btn.dataset.dest || 'home';
      navigate(dest, dest === 'home' ? {} : { subject: state.subject });
    });
  });
  // Logout
  const logoutBtn = document.getElementById('btn-logout');
  if (logoutBtn) logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('edukid_profile');
    state.profile = null; state.grade = 'tahun6'; state.curriculum = 'main';
    navigate('login');
  });

  const retryBtn = document.getElementById('btn-retry');
  const homeBtn  = document.getElementById('btn-home');
  const nextBtn  = document.getElementById('btn-next');
  if (retryBtn) retryBtn.addEventListener('click', () => navigate('quiz', { topic: state.topic }));
  if (homeBtn)  homeBtn.addEventListener('click',  () => navigate('home'));
  if (nextBtn)  nextBtn.addEventListener('click',  () => navigate('topics', { subject: state.subject }));
}

document.addEventListener('DOMContentLoaded', () => {
  render();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/Edukid/sw.js').catch(() => {});
  }
});
