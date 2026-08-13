// Belajar sambil main — Yah (3 tahun)
// Semua MCQ 2 pilihan sahaja, mudah untuk budak kecil

const WARNA = {
  label: 'Warna-Warni', icon: '🎨', color: '#FF6B9D',
  tadika: [{
    id: 'warna', title: 'Warna-Warni 🎨', icon: '🎨',
    questions: [
      { type:'mcq', q:'Apa warna ini? 🔴', answer:'Merah', options:['Merah','Biru'] },
      { type:'mcq', q:'Apa warna ini? 🔵', answer:'Biru', options:['Merah','Biru'] },
      { type:'mcq', q:'Apa warna ini? 🟡', answer:'Kuning', options:['Kuning','Hijau'] },
      { type:'mcq', q:'Apa warna ini? 🟢', answer:'Hijau', options:['Kuning','Hijau'] },
      { type:'mcq', q:'Apa warna ini? 🟠', answer:'Oren', options:['Oren','Ungu'] },
      { type:'mcq', q:'Apa warna ini? 🟣', answer:'Ungu', options:['Oren','Ungu'] },
      { type:'mcq', q:'Apa warna ini? ⚫', answer:'Hitam', options:['Hitam','Putih'] },
      { type:'mcq', q:'Apa warna ini? ⚪', answer:'Putih', options:['Hitam','Putih'] },
      { type:'mcq', q:'Langit berwarna apa? 🌤️', answer:'Biru', options:['Biru','Merah'] },
      { type:'mcq', q:'Rumput berwarna apa? 🌿', answer:'Hijau', options:['Hijau','Kuning'] },
    ]
  }]
};

const BENTUK = {
  label: 'Bentuk-Bentuk', icon: '⭕', color: '#9B59B6',
  tadika: [{
    id: 'bentuk', title: 'Bentuk-Bentuk ⭕', icon: '⭕',
    questions: [
      { type:'mcq', q:'Apa bentuk ini? ⭕', answer:'Bulat', options:['Bulat','Segi Empat'] },
      { type:'mcq', q:'Apa bentuk ini? 🟥', answer:'Segi Empat', options:['Bulat','Segi Empat'] },
      { type:'mcq', q:'Apa bentuk ini? 🔺', answer:'Segi Tiga', options:['Segi Tiga','Bintang'] },
      { type:'mcq', q:'Apa bentuk ini? ⭐', answer:'Bintang', options:['Segi Tiga','Bintang'] },
      { type:'mcq', q:'Apa bentuk ini? ♥️', answer:'Hati', options:['Hati','Bulat'] },
      { type:'mcq', q:'Matahari berbentuk apa? ☀️', answer:'Bulat', options:['Bulat','Segi Tiga'] },
      { type:'mcq', q:'Buku berbentuk apa? 📗', answer:'Segi Empat', options:['Segi Empat','Bulat'] },
      { type:'mcq', q:'Bola berbentuk apa? ⚽', answer:'Bulat', options:['Bulat','Segi Empat'] },
      { type:'mcq', q:'Pizza berbentuk apa? 🍕', answer:'Segi Tiga', options:['Segi Tiga','Segi Empat'] },
      { type:'mcq', q:'Jam berbentuk apa? 🕐', answer:'Bulat', options:['Bulat','Bintang'] },
    ]
  }]
};

const NOMBOR = {
  label: 'Nombor 1-5', icon: '🔢', color: '#3498DB',
  tadika: [{
    id: 'nombor', title: 'Nombor 1-5 🔢', icon: '🔢',
    questions: [
      { type:'mcq', q:'Ada berapa? 🍎', answer:'1', options:['1','2'] },
      { type:'mcq', q:'Ada berapa? 🌟🌟', answer:'2', options:['2','3'] },
      { type:'mcq', q:'Ada berapa? 🐱🐱🐱', answer:'3', options:['2','3'] },
      { type:'mcq', q:'Ada berapa? 🍌🍌🍌🍌', answer:'4', options:['4','5'] },
      { type:'mcq', q:'Ada berapa? ⭐⭐⭐⭐⭐', answer:'5', options:['4','5'] },
      { type:'mcq', q:'Ada berapa? 🦋🦋', answer:'2', options:['1','2'] },
      { type:'mcq', q:'Ada berapa? 🌈🌈🌈', answer:'3', options:['3','4'] },
      { type:'mcq', q:'Ada berapa? 🎈🎈🎈🎈', answer:'4', options:['3','4'] },
      { type:'mcq', q:'Ada berapa? 🍭', answer:'1', options:['1','3'] },
      { type:'mcq', q:'Ada berapa? 🐸🐸🐸🐸🐸', answer:'5', options:['4','5'] },
    ]
  }]
};

const HAIWAN = {
  label: 'Haiwan Comel', icon: '🐾', color: '#27AE60',
  tadika: [{
    id: 'haiwan', title: 'Haiwan Comel 🐾', icon: '🐾',
    questions: [
      { type:'mcq', q:'Haiwan apa ini? 🐶', answer:'Anjing', options:['Anjing','Kucing'] },
      { type:'mcq', q:'Haiwan apa ini? 🐱', answer:'Kucing', options:['Anjing','Kucing'] },
      { type:'mcq', q:'Haiwan apa ini? 🐘', answer:'Gajah', options:['Gajah','Singa'] },
      { type:'mcq', q:'Haiwan apa ini? 🦁', answer:'Singa', options:['Gajah','Singa'] },
      { type:'mcq', q:'Haiwan apa ini? 🐸', answer:'Katak', options:['Katak','Ikan'] },
      { type:'mcq', q:'Haiwan apa ini? 🐟', answer:'Ikan', options:['Katak','Ikan'] },
      { type:'mcq', q:'Haiwan apa ini? 🐮', answer:'Lembu', options:['Lembu','Ayam'] },
      { type:'mcq', q:'Haiwan apa ini? 🐔', answer:'Ayam', options:['Lembu','Ayam'] },
      { type:'mcq', q:'Haiwan apa ini? 🐰', answer:'Arnab', options:['Arnab','Itik'] },
      { type:'mcq', q:'Haiwan apa ini? 🦆', answer:'Itik', options:['Arnab','Itik'] },
    ]
  }]
};

const BUAH = {
  label: 'Buah-buahan', icon: '🍎', color: '#E74C3C',
  tadika: [{
    id: 'buah', title: 'Buah-buahan 🍎', icon: '🍎',
    questions: [
      { type:'mcq', q:'Buah apa ini? 🍎', answer:'Epal', options:['Epal','Pisang'] },
      { type:'mcq', q:'Buah apa ini? 🍌', answer:'Pisang', options:['Epal','Pisang'] },
      { type:'mcq', q:'Buah apa ini? 🍊', answer:'Oren', options:['Oren','Anggur'] },
      { type:'mcq', q:'Buah apa ini? 🍇', answer:'Anggur', options:['Oren','Anggur'] },
      { type:'mcq', q:'Buah apa ini? 🍓', answer:'Strawberi', options:['Strawberi','Tembikai'] },
      { type:'mcq', q:'Buah apa ini? 🍉', answer:'Tembikai', options:['Strawberi','Tembikai'] },
      { type:'mcq', q:'Buah apa ini? 🥭', answer:'Mangga', options:['Mangga','Nanas'] },
      { type:'mcq', q:'Buah apa ini? 🍍', answer:'Nanas', options:['Mangga','Nanas'] },
      { type:'mcq', q:'Buah apa ini? 🍋', answer:'Limau', options:['Limau','Betik'] },
      { type:'mcq', q:'Buah apa ini? 🍈', answer:'Betik', options:['Limau','Betik'] },
    ]
  }]
};

export const TADIKA_CURRICULUM = { warna: WARNA, bentuk: BENTUK, nombor: NOMBOR, haiwan: HAIWAN, buah: BUAH };
