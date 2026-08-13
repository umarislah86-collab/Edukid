import { CURRICULUM, TADIKA_CURRICULUM, getTopicsForSubject } from '../data/curriculum.js';
import { getTopicProgress } from '../data/progress.js';

export function renderTopics(state, navigate) {
  const currMap = state.curriculum === 'tadika' ? TADIKA_CURRICULUM : CURRICULUM;
  const subj    = currMap[state.subject];
  const topics  = getTopicsForSubject(state.subject, state.grade, state.curriculum);

  const topicRows = topics.length
    ? topics.map(topic => {
        const prog = getTopicProgress(topic.id);
        const stars = prog ? '⭐'.repeat(prog.stars) + (prog.stars < 3 ? '☆'.repeat(3 - prog.stars) : '') : '☆☆☆';
        const statusIcon = prog?.stars >= 3 ? '✅' : prog?.stars >= 1 ? '🔄' : '▶️';
        return `
          <div class="topic-item" data-topic="${escAttr(JSON.stringify(topic))}">
            <div class="topic-icon">${topic.icon}</div>
            <div class="topic-info">
              <h3>${topic.title}</h3>
              <p>${topic.questions.length} soalan &nbsp;${stars}</p>
            </div>
            <div class="topic-status">${statusIcon}</div>
          </div>`;
      }).join('')
    : `<div style="text-align:center;padding:40px;color:var(--muted)">
         <div style="font-size:48px">🚧</div>
         <p style="margin-top:12px">Akan datang!</p>
       </div>`;

  const gradeLabel = state.curriculum === 'tadika' ? 'Yah 👧'
                   : state.grade === 'tahun6'      ? '6 Tahun'
                   :                                 'Darjah 1';

  return `
    <div class="screen active" id="screen-topics">
      <button class="back-btn" data-dest="home">←</button>
      <p class="screen-title">${subj.icon} ${subj.label}</p>
      <p class="screen-sub">${gradeLabel} — Pilih topik</p>
      <div class="topic-list">${topicRows}</div>
    </div>`;
}

function escAttr(str) {
  return str.replace(/"/g, '&quot;');
}
