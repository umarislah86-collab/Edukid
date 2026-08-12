// Jawapan betul — case-insensitive, trim spaces
const CORRECT_NAME = "aalaa' binti abdullah umar";
const CORRECT_AGE  = "6";

export function renderLogin(navigate) {
  return `
    <div class="screen active login-screen">
      <div class="login-photo-wrap">
        <img src="public/aalaa.jpg" alt="Aalaa'" class="login-photo" />
      </div>
      <h1 class="login-title">Jom Belajar! 🌟</h1>
      <p class="login-sub">Siapakah kamu? Eja nama kamu untuk masuk!</p>

      <div class="login-card">
        <div class="login-field">
          <label>Nama penuh kamu:</label>
          <input id="inp-name" type="text" placeholder="contoh: Aalaa' binti Abdullah Umar"
            autocomplete="off" autocorrect="off" spellcheck="false" />
        </div>
        <div class="login-field">
          <label>Umur kamu:</label>
          <div class="age-row">
            ${["4","5","6","7","8"].map(a => `
              <button class="age-btn" data-age="${a}">${a} tahun</button>
            `).join('')}
          </div>
        </div>

        <div id="login-error" class="login-error hidden">
          ❌ Cuba lagi! Ejaan atau umur tidak tepat.
        </div>

        <button class="btn-primary" id="btn-login" style="margin-top:20px">
          Masuk ▶
        </button>
      </div>
    </div>`;
}

export function bindLogin(navigate) {
  let selectedAge = '';

  document.querySelectorAll('.age-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.age-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedAge = btn.dataset.age;
    });
  });

  document.getElementById('btn-login').addEventListener('click', () => {
    const name = document.getElementById('inp-name').value.trim().toLowerCase();
    const err  = document.getElementById('login-error');

    if (name === CORRECT_NAME && selectedAge === CORRECT_AGE) {
      err.classList.add('hidden');
      navigate('home');
    } else {
      err.classList.remove('hidden');
      document.getElementById('inp-name').classList.add('shake');
      setTimeout(() => document.getElementById('inp-name')?.classList.remove('shake'), 400);
    }
  });

  // Allow Enter key on input
  document.getElementById('inp-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('btn-login').click();
  });
}
