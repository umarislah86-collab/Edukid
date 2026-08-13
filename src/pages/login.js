const PROFILES = {
  aalaa: { id:'aalaa', name:"Aalaa'", age:6, photo:'public/aalaa.jpg', grade:'darjah1', curriculum:'main' },
  yah:   { id:'yah',  name:'Yah',    age:3, photo:'public/yah.jpg',   grade:'tadika',  curriculum:'tadika' },
  ayah:  { id:'ayah', name:'Ayah',   age:null, photo:null,             grade:'darjah1', curriculum:'parent' },
};

const NAME_MAP = {
  "aalaa'": 'aalaa', "aalaa": 'aalaa', "alaa'": 'aalaa', "alaa": 'aalaa',
  "aalaa' binti abdullah umar": 'aalaa',
  "yah": 'yah', "ya": 'yah', "yah binti abdullah umar": 'yah',
  "ayah": 'ayah', "abah": 'ayah', "baba": 'ayah', "daddy": 'ayah', "papa": 'ayah',
};

export function renderLogin(navigate) {
  const profilePicksHtml = Object.values(PROFILES).map(p => `
    <div class="profile-pick" data-profile="${p.id}">
      ${p.photo
        ? `<img src="${p.photo}" alt="${p.name}" class="profile-pick-img" />`
        : p.id === 'ayah'
          ? `<div class="profile-pick-emoji" style="background:#E8F4FD;border-color:#3498DB;font-size:36px">👨</div>`
          : `<div class="profile-pick-emoji">👧</div>`}
      <p>${p.name}</p>
      ${p.id === 'ayah' ? '<p style="font-size:10px;color:#7B7B9A">Tekan untuk masuk</p>' : ''}
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

  // Profile avatar taps
  document.querySelectorAll('.profile-pick').forEach(pick => {
    pick.addEventListener('click', () => {
      const key = pick.dataset.profile;
      const p   = PROFILES[key];

      // Parent: direct login, no form needed
      if (p.id === 'ayah') {
        sessionStorage.setItem('edukid_profile', JSON.stringify(p));
        navigate('home', { profile: p });
        return;
      }

      // Kids: auto-fill name + age in form
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
