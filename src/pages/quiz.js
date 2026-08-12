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
      case 'speak':   body.innerHTML = buildSpeak(q);   bindSpeak(q, next);   break;
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

// ─── SPEAK (Baca Kuat — Web Speech API) ─────────────────────────────────────
const LEVEL_LABEL    = { 1:'2 suku kata', 2:'3 suku kata', 3:'4 suku kata', 4:'Baca ayat' };
const LEVEL_LABEL_EN = { 1:'2 syllables', 2:'3 syllables', 3:'4 syllables', 4:'Read sentence' };
const LEVEL_LABEL_AR = { 1:'huruf', 2:'perkataan', 3:'frasa', 4:'ayat' };

function buildSpeak(q) {
  const isAr   = q.lang === 'ar';
  const isEn   = q.lang === 'en';
  const lvlMap = isAr ? LEVEL_LABEL_AR : isEn ? LEVEL_LABEL_EN : LEVEL_LABEL;
  const lvlLbl = lvlMap[q.level] || '';
  const tapLbl = isAr ? 'Ketik mikrofon dan baca kuat-kuat 🕌'
               : isEn ? 'Tap mic and read aloud'
               :        'Ketik mikrofon dan baca kuat-kuat';
  const skipLbl = isEn ? 'Skip' : 'Langkau';
  const wordClass = isAr ? 'speak-word arabic-text' : 'speak-word';
  const hintHtml = isAr && q.hint
    ? `<p class="speak-hint">Rumi: <em>${q.hint}</em></p>` : '';
  return `
    <div class="question-card pop">
      <p class="q-num">${isAr ? '🕌 Mengaji —' : '🎤 Baca Kuat —'} ${lvlLbl}</p>
      <p class="${wordClass}" id="speak-word">${q.word}</p>
      ${hintHtml}
    </div>
    <div class="speak-controls">
      <button class="speak-mic-btn" id="btn-mic">🎤</button>
      <p class="speak-status" id="speak-status">${tapLbl}</p>
    </div>
    <div class="speak-heard-wrap hidden" id="speak-heard-wrap">
      <p class="speak-heard-label">${isEn ? 'You said:' : 'Kamu sebut:'}</p>
      <p class="speak-heard" id="speak-heard"></p>
    </div>
    <button class="btn-secondary" id="btn-speak-skip" style="margin-top:12px">${skipLbl}</button>`;
}

function bindSpeak(q, next) {
  const isAr = q.lang === 'ar';
  const isEn = q.lang === 'en';
  // Arabic speech recognition is unreliable on mobile; accept any attempt as correct
  // so Aalaa' still gets rewarded for trying — teacher can assess live
  const lang = isAr ? 'ar-SA' : isEn ? 'en-US' : 'ms-MY';

  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    document.getElementById('speak-status').textContent =
      isEn ? '⚠️ Browser not supported. Use Chrome.' : '⚠️ Guna Chrome atau Edge.';
    document.getElementById('btn-mic').disabled = true;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = null;
  let listening    = false;

  document.getElementById('btn-mic').addEventListener('click', () => {
    if (listening) return;
    listening   = true;
    recognition = new SpeechRecognition();
    recognition.lang           = lang;
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    const micBtn   = document.getElementById('btn-mic');
    const statusEl = document.getElementById('speak-status');
    micBtn.textContent   = '🔴';
    micBtn.classList.add('listening');
    statusEl.textContent = isEn ? 'Listening...' : 'Mendengar...';

    recognition.start();

    recognition.onresult = (e) => {
      const alternatives = [...Array(e.results[0].length)]
        .map((_, i) => e.results[0].item(i).transcript.toLowerCase().trim());

      let isRight;
      if (isAr) {
        // For Arabic, accept any non-empty speech — mic-based self-assessment
        isRight = alternatives.some(a => a.length > 0);
      } else {
        const target = q.word.toLowerCase().trim();
        const clean  = s => s.replace(/[.,!?]/g,'').trim();
        isRight = alternatives.some(a => clean(a) === clean(target) || similarity(clean(a), clean(target)) >= 0.75);
      }

      document.getElementById('speak-heard-wrap').classList.remove('hidden');
      document.getElementById('speak-heard').textContent = alternatives[0];

      micBtn.textContent = isRight ? '✅' : '❌';
      micBtn.classList.remove('listening');
      showToast(isRight
        ? (isAr ? '✅ Tahniah! Teruskan!' : isEn ? '✅ Well done!' : '✅ Bagus! Sebutan betul!')
        : (isAr ? `❌ Cuba lagi: ${q.hint||q.word}` : isEn ? `❌ Answer: ${q.word}` : `❌ Jawapan: ${q.word}`),
        isRight ? 'correct' : 'wrong');
      setTimeout(() => next(isRight), 1600);
      listening = false;
    };

    recognition.onerror = () => {
      micBtn.textContent = '🎤';
      micBtn.classList.remove('listening');
      statusEl.textContent = isEn ? 'Could not hear. Try again.' : 'Tak dapat dengar. Cuba lagi.';
      listening = false;
    };

    recognition.onend = () => { if (listening) { listening = false; } };
  });

  document.getElementById('btn-speak-skip').addEventListener('click', () => {
    if (recognition) try { recognition.stop(); } catch(_) {}
    next(false);
  });
}

// simple similarity — levenshtein ratio
function similarity(a, b) {
  const m = a.length, n = b.length;
  if (!m || !n) return 0;
  const dp = Array.from({length:m+1}, (_,i) => Array.from({length:n+1}, (_,j) => i||j));
  for (let i=1;i<=m;i++) for (let j=1;j<=n;j++)
    dp[i][j] = a[i-1]===b[j-1] ? dp[i-1][j-1] : 1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return 1 - dp[m][n] / Math.max(m, n);
}
