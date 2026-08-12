import { renderHome }   from './pages/home.js';
import { renderTopics } from './pages/topics.js';
import { renderQuiz }   from './pages/quiz.js';
import { renderResult } from './pages/result.js';

const state = {
  screen:  'home',
  subject: null,
  grade:   'tahun6',   // 'tahun6' | 'darjah1'
  topic:   null,
  result:  null,
};

function navigate(screen, extra = {}) {
  Object.assign(state, { screen, ...extra });
  render();
}

function render() {
  const app = document.getElementById('app');
  switch (state.screen) {
    case 'home':   app.innerHTML = renderHome(state, navigate);   break;
    case 'topics': app.innerHTML = renderTopics(state, navigate); break;
    case 'quiz':   app.innerHTML = renderQuiz(state, navigate);   break;
    case 'result': app.innerHTML = renderResult(state, navigate); break;
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
      navigate('topics', { subject: card.dataset.subject });
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
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
});
