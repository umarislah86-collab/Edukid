const PROFILES = {
  aalaa: { id:'aalaa', name:"Aalaa'", age:6, photo:'public/aalaa.jpg', grade:'darjah1', curriculum:'main' },
  yah:   { id:'yah',  name:'Yah',    age:3, photo:'public/yah.jpg',   grade:'tadika',  curriculum:'tadika' },
};

const NAME_MAP = {
  "aalaa'": 'aalaa', "aalaa": 'aalaa', "alaa'": 'aalaa', "alaa": 'aalaa',
  "aalaa' binti abdullah umar": 'aalaa',
  "yah": 'yah', "ya": 'yah', "yah binti abdullah umar": 'yah',
};

export function renderLogin(navigate) {
  const profilePicksHtml = Object.values(PROFILES).map(p => `
    <div class="profile-pick" data-profile="${p.id}">
      ${p.photo
        ? `<img src="${p.photo}" alt="${p.name}" class="profile-pick-img" />`
        : `<div class="profile-pick-emoji">👧</div>`}
      <p>${p.name}</p>
    </div>`).join('');

  return `
    <div class="screen active login-screen">
      <div class="login-profiles">${profilePicksHtml}</div>
      <h1 class="login-title">Jom Belajar! 🌟</h1>
      <p class="login-sub">Siapakah kamu? Eja nama kamu untuk masuk!</p>

      <div class="login-card">
        <div class="login-field">
          <label>Nama kamu:</label>
          <input id="inp-name" type="text" placeholder="contoh: Aalaa' atau Yah"
            autocomplete="off" autocorrect="off" spellcheck="false" />
        </div>
        <div class="login-field">
          <label>Umur kamu:</label>
          <div class="age-row">
            ${["3","4","5","6","7","8"].map(a => `
              <button class="age-btn" data-age="${a}">${a} tahun</button>
            `).join('')}
          </div>
        </div>

        <div id="login-error" class="login-error hidden">
          ❌ Cuba lagi! Nama atau umur tidak tepat.
        </div>

        <button class="btn-primary" id="btn-login" style="margin-top:20px">
          Masuk ▶
        </button>
      </div>
    </div>`;
}

export function bindLogin(navigate) {
  let selectedAge = '';

  // Profile avatar taps — auto-fill name + age
  document.querySelectorAll('.profile-pick').forEach(pick => {
    pick.addEventListener('click', () => {
      const key = pick.dataset.profile;
      const p   = PROFILES[key];
      document.getElementById('inp-name').value = p.name;
      document.querySelectorAll('.age-btn').forEach(b => b.classList.remove('active'));
      const ageBtn = [...document.querySelectorAll('.age-btn')]
        .find(b => b.dataset.age === String(p.age));
      if (ageBtn) { ageBtn.classList.add('active'); selectedAge = String(p.age); }
      document.querySelectorAll('.profile-pick').forEach(x => x.classList.remove('active'));
      pick.classList.add('active');
    });
  });

  document.querySelectorAll('.age-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.age-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedAge = btn.dataset.age;
    });
  });

  document.getElementById('btn-login').addEventListener('click', () => {
    const name    = document.getElementById('inp-name').value.trim().toLowerCase();
    const err     = document.getElementById('login-error');
    const profKey = NAME_MAP[name];
    const profile = profKey ? PROFILES[profKey] : null;

    if (profile && selectedAge === String(profile.age)) {
      err.classList.add('hidden');
      sessionStorage.setItem('edukid_profile', JSON.stringify(profile));
      navigate('home', { profile });
    } else {
      err.classList.remove('hidden');
      document.getElementById('inp-name').classList.add('shake');
      setTimeout(() => document.getElementById('inp-name')?.classList.remove('shake'), 400);
    }
  });

  document.getElementById('inp-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('btn-login').click();
  });
}
