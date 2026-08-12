export function renderResult(state, navigate) {
  const { correct, total, stars, bestScore } = state.result;
  const pct     = Math.round((correct / total) * 100);
  const starStr = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);

  const msg = pct === 100 ? 'Sempurna! Pandai sangat! 🎉'
            : pct >= 80   ? 'Bagus sekali! Teruskan! 💪'
            : pct >= 60   ? 'Bagus! Cuba lagi ye! 😊'
            :                'Jangan putus asa! Latih lagi! 🌱';

  const trophy = pct === 100 ? '🏆' : pct >= 80 ? '🥇' : pct >= 60 ? '🥈' : '🎯';

  return `
    <div class="screen active result-screen">
      <div class="trophy pop">${trophy}</div>
      <h2>${msg}</h2>
      <div class="result-stars pop">${starStr}</div>
      <div class="score-big pop">${correct}/${total}</div>
      <div class="score-lbl">Markah terbaik: ${bestScore}%</div>

      <div style="width:100%;margin-top:24px;display:flex;flex-direction:column;gap:10px;">
        <button class="btn-primary" id="btn-retry">🔄 Cuba Lagi</button>
        <button class="btn-secondary" id="btn-next">📚 Topik Lain</button>
        <button class="btn-secondary" id="btn-home">🏠 Halaman Utama</button>
      </div>
    </div>`;
}
