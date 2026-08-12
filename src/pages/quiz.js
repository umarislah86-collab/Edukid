import { saveTopicResult } from '../data/progress.js';
import { calcEarned, addBalance, recordEarned, getBalance } from '../data/screentime.js';

// ─── Entry point ────────────────────────────────────────────────────────────
export function renderQuiz(state, navigate) {
  setTimeout(() => initQuiz(state, navigate), 0);
  return `
    <div class="screen active" id="screen-quiz">
      <div class="quiz-header">
        <button class="back-btn" data-dest="topics">←</button>
        <div class="quiz-progress-track">
          <div class="quiz-progress-fill" id="quiz-progress" style="width:0%"></div>
        </div>
        <span class="quiz-count" id="quiz-count">1 / ${state.topic.questions.length}</span>
      </div>
      <div id="quiz-body"></div>
      <div id="feedback-toast" class="feedback-toast hidden"></div>
    </div>`;
}

// ─── Controller ─────────────────────────────────────────────────────────────
function initQuiz(state, navigate) {
  const questions = shuffle([...state.topic.questions]);
  let current  = 0;
  let correct  = 0;
  const startTime = Date.now();

  function next(wasCorrect) {
    if (wasCorrect) correct++;
    current++;
    if (current < questions.length) renderQuestion();
    else {
      const result        = saveTopicResult(state.topic.id, correct, questions.length, {
        subject:    state.subject,
        topicTitle: state.topic.title,
        grade:      state.grade
      });
      const minutesEarned = calcEarned(result.stars);
      const newBalance    = addBalance(minutesEarned);
      const timeSpentMin  = Math.round((Date.now() - startTime) / 60000);
      recordEarned({
        topicTitle: state.topic.title,
        subject:    state.subject,
        grade:      state.grade,
        stars:      result.stars,
        minutesEarned, newBalance
      });
      navigate('result', {
        result: { correct, total: questions.length, ...result,
                  minutesEarned, newBalance, timeSpentMin }
      });
    }
  }

  function renderQuestion() {
    const q   = questions[current];
    const pct = Math.round((current / questions.length) * 100);
    document.getElementById('quiz-progress').style.width = pct + '%';
    document.getElementById('quiz-count').textContent = `${current + 1} / ${questions.length}`;

    const body = document.getElementById('quiz-body');
    switch (q.type) {
      case 'match':   body.innerHTML = buildMatch(q);   bindMatch(q, next);   break;
      case 'arrange': body.innerHTML = buildArrange(q); bindArrange(q, next); break;
      default:        body.innerHTML = buildMCQ(q);     bindMCQ(q, next);     break;
    }
  }

  renderQuestion();
}

// ─── MCQ ────────────────────────────────────────────────────────────────────
function buildMCQ(q) {
  const opts = shuffle([...q.options]);
  return `
    <div class="question-card pop">
      <p class="q-num">Pilih jawapan yang betul</p>
      ${q.img ? `<div class="q-img">${q.img}</div>` : ''}
      <p class="q-text">${q.q}</p>
    </div>
    <div class="options-grid">
      ${opts.map(o => `<button class="option-btn" data-answer="${o}">${o}</button>`).join('')}
    </div>`;
}

function bindMCQ(q, next) {
  let answered = false;
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      const isRight = btn.dataset.answer === q.answer;
      btn.classList.add(isRight ? 'correct' : 'wrong');
      if (!isRight) {
        btn.classList.add('shake');
        document.querySelectorAll('.option-btn').forEach(b => {
          if (b.dataset.answer === q.answer) b.classList.add('correct');
        });
      }
      document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
      showToast(isRight ? '✅ Betul! Bagus!' : '❌ Jawapan: ' + q.answer, isRight ? 'correct' : 'wrong');
      setTimeout(() => next(isRight), 1400);
    });
  });
}

// ─── MATCH (suai padan — tap left then tap right) ───────────────────────────
// q.pairs = [{left, right}, ...]
function buildMatch(q) {
  const lefts  = shuffle(q.pairs.map(p => p.left));
  const rights = shuffle(q.pairs.map(p => p.right));
  return `
    <div class="question-card pop">
      <p class="q-num">Suai Padan</p>
      <p class="q-text">${q.q}</p>
    </div>
    <div class="match-wrap">
      <div class="match-col" id="match-left">
        ${lefts.map(l => `<button class="match-btn left-btn" data-val="${l}">${l}</button>`).join('')}
      </div>
      <div class="match-col" id="match-right">
        ${rights.map(r => `<button class="match-btn right-btn" data-val="${r}">${r}</button>`).join('')}
      </div>
    </div>
    <p class="match-hint">Ketik kiri, kemudian ketik kanan untuk padan.</p>`;
}

function bindMatch(q, next) {
  const pairMap = {};
  q.pairs.forEach(p => { pairMap[p.left] = p.right; });

  let selectedLeft = null;
  let matched = 0;
  const total = q.pairs.length;

  document.querySelectorAll('.left-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('done')) return;
      document.querySelectorAll('.left-btn').forEach(b => b.classList.remove('selected'));
      selectedLeft = btn.dataset.val;
      btn.classList.add('selected');
    });
  });

  document.querySelectorAll('.right-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!selectedLeft || btn.classList.contains('done')) return;
      const isRight = pairMap[selectedLeft] === btn.dataset.val;

      const leftBtn = [...document.querySelectorAll('.left-btn')]
        .find(b => b.dataset.val === selectedLeft);

      if (isRight) {
        btn.classList.add('correct', 'done');
        leftBtn?.classList.add('correct', 'done');
        matched++;
        if (matched === total) {
          showToast('✅ Cantik! Semua betul!', 'correct');
          setTimeout(() => next(true), 1200);
        }
      } else {
        btn.classList.add('wrong');
        leftBtn?.classList.add('wrong');
        setTimeout(() => {
          btn.classList.remove('wrong');
          leftBtn?.classList.remove('wrong', 'selected');
        }, 600);
      }
      selectedLeft = null;
      document.querySelectorAll('.left-btn').forEach(b => b.classList.remove('selected'));
    });
  });
}

// ─── ARRANGE (susun ayat / huruf) ────────────────────────────────────────────
// q.words = ['pergi','Ali','sekolah','ke']  q.answer = 'Ali pergi ke sekolah'
function buildArrange(q) {
  const words = shuffle([...q.words]);
  return `
    <div class="question-card pop">
      <p class="q-num">Susun perkataan / huruf</p>
      <p class="q-text">${q.q}</p>
    </div>
    <div class="arrange-answer" id="arrange-answer"></div>
    <div class="arrange-pool" id="arrange-pool">
      ${words.map((w,i) => `<button class="arrange-chip" data-word="${w}" data-idx="${i}">${w}</button>`).join('')}
    </div>
    <button class="btn-primary" id="arrange-check" style="margin-top:16px">Semak ✔</button>`;
}

function bindArrange(q, next) {
  const pool   = document.getElementById('arrange-pool');
  const answer = document.getElementById('arrange-answer');

  // tap chip in pool → move to answer
  pool.addEventListener('click', e => {
    const chip = e.target.closest('.arrange-chip');
    if (!chip || chip.classList.contains('used')) return;
    chip.classList.add('used');
    const clone = chip.cloneNode(true);
    clone.classList.remove('used');
    clone.dataset.src = chip.dataset.idx;
    answer.appendChild(clone);
    // tap in answer → send back
    clone.addEventListener('click', () => {
      chip.classList.remove('used');
      clone.remove();
    });
  });

  document.getElementById('arrange-check').addEventListener('click', () => {
    const attempt = [...answer.querySelectorAll('.arrange-chip')]
      .map(c => c.dataset.word).join(' ');
    const isRight = attempt.trim() === q.answer.trim();
    showToast(isRight ? '✅ Betul! Pandai!' : `❌ Jawapan: ${q.answer}`, isRight ? 'correct' : 'wrong');
    setTimeout(() => next(isRight), 1500);
  });
}

// ─── Helpers ────────────────────────────────────────────────────────────────
function showToast(msg, type) {
  const t = document.getElementById('feedback-toast');
  if (!t) return;
  t.textContent = msg;
  t.className = `feedback-toast ${type}`;
  setTimeout(() => t.classList.add('hidden'), 1300);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
