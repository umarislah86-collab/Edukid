export function renderResult(state, navigate) {
  const { correct, total, stars, bestScore, minutesEarned, newBalance, timeSpentMin } = state.result;
  const pct     = Math.round((correct / total) * 100);
  const starStr = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);

  const msg = pct === 100 ? 'Sempurna! Pandai sangat! 🎉'
            : pct >= 80   ? 'Bagus sekali! Teruskan! 💪'
            : pct >= 60   ? 'Bagus! Cuba lagi ye! 😊'
            :                'Jangan putus asa! Latih lagi! 🌱';

  const trophy = pct === 100 ? '🏆' : pct >= 80 ? '🥇' : pct >= 60 ? '🥈' : '🎯';

  const earnedBlock = minutesEarned > 0
    ? `<div class="earned-banner">
         <div class="earned-icon">📱</div>
         <div>
           <p class="earned-title">Tahniah! Dapat <strong>${minutesEarned} minit</strong> masa bebas!</p>
           <p class="earned-bal">Baki sekarang: <strong>${newBalance} minit</strong> 🎉</p>
         </div>
       </div>`
    : `<div class="earned-banner earned-zero">
         <div class="earned-icon">💪</div>
         <div>
           <p class="earned-title">Cuba lagi untuk dapat masa bebas!</p>
           <p class="earned-bal">Dapat 1 bintang = 15 minit, 3 bintang = 30 minit</p>
         </div>
       </div>`;

  return `
    <div class="screen active result-screen">
      <div class="trophy pop">${trophy}</div>
      <h2>${msg}</h2>
      <div class="result-stars pop">${starStr}</div>
      <div class="score-big pop">${correct}/${total}</div>
      <div class="score-lbl">Markah terbaik: ${bestScore}%
        ${timeSpentMin > 0 ? `&nbsp;·&nbsp; ⏱ ${timeSpentMin} minit belajar` : ''}
      </div>

      ${earnedBlock}

      <div style="width:100%;margin-top:20px;display:flex;flex-direction:column;gap:10px;">
        <button class="btn-primary" id="btn-retry">🔄 Cuba Lagi</button>
        <button class="btn-secondary" id="btn-next">📚 Topik Lain</button>
        <button class="btn-secondary" id="btn-home">🏠 Halaman Utama</button>
      </div>
    </div>`;
}
