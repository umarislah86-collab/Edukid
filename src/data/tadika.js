// Tadika games untuk Yah (3 tahun) — visual + emoji sahaja
// Tiada teks dalam pilihan jawapan — semua emoji/gambar
// Soalan dibaca kuat automatik via TTS (speechSynthesis)

// Helper: shorthand untuk buat soalan
const q = (display, readText, answer, options) => ({
  type: 'mcq', q: display, readText, answer, options, emoji: true, autoRead: true,
});

// ─── 1. Kira-Kira ────────────────────────────────────────────────────────────
// Kira emoji dalam soalan, pilih nombor yang betul
const KIRA = {
  label: 'Kira-Kira', icon: '🔢', color: '#3498DB',
  tadika: [{
    id: 'kira', title: 'Kira-Kira 🔢', icon: '🔢',
    questions: [
      q('🍎',                'Ada berapa epal?',         '1️⃣', ['1️⃣','2️⃣','3️⃣','4️⃣']),
      q('🍌🍌',              'Ada berapa pisang?',        '2️⃣', ['1️⃣','2️⃣','3️⃣','4️⃣']),
      q('🌟🌟🌟',            'Ada berapa bintang?',       '3️⃣', ['1️⃣','2️⃣','3️⃣','4️⃣']),
      q('🐱🐱🐱🐱',          'Ada berapa kucing?',        '4️⃣', ['2️⃣','3️⃣','4️⃣','5️⃣']),
      q('🎈🎈🎈🎈🎈',        'Ada berapa belon?',         '5️⃣', ['2️⃣','3️⃣','4️⃣','5️⃣']),
      q('🦋🦋',              'Ada berapa rama-rama?',     '2️⃣', ['1️⃣','2️⃣','3️⃣','4️⃣']),
      q('🍭🍭🍭',            'Ada berapa lolipop?',       '3️⃣', ['2️⃣','3️⃣','4️⃣','5️⃣']),
      q('⭐⭐⭐⭐',           'Ada berapa bintang?',       '4️⃣', ['2️⃣','3️⃣','4️⃣','5️⃣']),
      q('🐸',                'Ada berapa katak?',         '1️⃣', ['1️⃣','2️⃣','3️⃣','4️⃣']),
      q('🍰🍰🍰🍰🍰',        'Ada berapa kek?',           '5️⃣', ['3️⃣','4️⃣','5️⃣','2️⃣']),
    ]
  }]
};

// ─── 2. Teka Warna ───────────────────────────────────────────────────────────
// Tunjuk objek berwarna, pilih bulatan warna yang betul
const WARNA = {
  label: 'Teka Warna', icon: '🌈', color: '#FF6B9D',
  tadika: [{
    id: 'warna', title: 'Teka Warna 🌈', icon: '🌈',
    questions: [
      q('🍎', 'Apa warna epal?',         '🔴', ['🔴','🟡','🔵','🟢']),
      q('🌊', 'Apa warna laut?',          '🔵', ['🔴','🟡','🔵','🟢']),
      q('🌿', 'Apa warna daun?',          '🟢', ['🔴','🟡','🔵','🟢']),
      q('⭐', 'Apa warna bintang?',       '🟡', ['🔴','🟡','🔵','🟢']),
      q('🍊', 'Apa warna buah oren?',     '🟠', ['🔴','🟠','🟢','🔵']),
      q('🍇', 'Apa warna anggur?',        '🟣', ['🔴','🟡','🟣','🔵']),
      q('☁️', 'Apa warna awan?',          '⚪', ['⚫','⚪','🔴','🔵']),
      q('🍌', 'Apa warna pisang?',        '🟡', ['🔴','🟡','🔵','🟢']),
      q('🍓', 'Apa warna strawberi?',     '🔴', ['🔴','🟡','🔵','🟢']),
      q('🥦', 'Apa warna brokoli?',       '🟢', ['🔴','🟡','🔵','🟢']),
    ]
  }]
};

// ─── 3. Haiwan & Bunyi ───────────────────────────────────────────────────────
// Dengar bunyi atau baca clue, pilih haiwan yang betul (semua pilihan gambar emoji)
const HAIWAN = {
  label: 'Haiwan & Bunyi', icon: '🐾', color: '#27AE60',
  tadika: [{
    id: 'haiwan', title: 'Haiwan & Bunyi 🐾', icon: '🐾',
    questions: [
      q('Moo! 🔊',        'Haiwan apa bunyi moo?',              '🐮', ['🐮','🐔','🐸','🐶']),
      q('Kok-kok! 🔊',    'Haiwan apa bunyi kok kok?',          '🐔', ['🐮','🐔','🐸','🐶']),
      q('Woof! 🔊',       'Haiwan apa bunyi woof?',             '🐶', ['🐮','🐔','🐸','🐶']),
      q('Ribbit! 🔊',     'Haiwan apa duduk dalam kolam?',      '🐸', ['🐮','🐔','🐸','🐶']),
      q('Meow! 🔊',       'Haiwan apa bunyi meow?',             '🐱', ['🐱','🐮','🐸','🐰']),
      q('Roar! 🔊',       'Haiwan apa raja hutan?',             '🦁', ['🐮','🦁','🐸','🐶']),
      q('Baa! 🔊',        'Haiwan apa bunyi baa baa?',          '🐑', ['🐑','🐮','🦁','🐸']),
      q('Quack! 🔊',      'Haiwan apa bunyi quack?',            '🦆', ['🦆','🐔','🐸','🐱']),
      q('Splash! 🌊',     'Haiwan apa berenang dalam laut?',    '🐟', ['🐸','🐟','🐶','🦋']),
      q('Trumpet! 🎺',    'Haiwan paling besar ini!',           '🐘', ['🐱','🐶','🐸','🐘']),
    ]
  }]
};

// ─── 4. Cari Pasangan ────────────────────────────────────────────────────────
// Soalan tunjuk satu emoji, pilih yang SAMA dari 4 pilihan (matching/recognition)
const PADANAN = {
  label: 'Cari Pasangan', icon: '🔍', color: '#9B59B6',
  tadika: [{
    id: 'padanan', title: 'Cari Pasangan 🔍', icon: '🔍',
    questions: [
      q('🐱', 'Mana yang sama dengan kucing ini?',    '🐱', ['🐶','🐱','🐸','🐮']),
      q('🍎', 'Mana yang sama dengan epal ini?',      '🍎', ['🍌','🍎','🍊','🍇']),
      q('🔴', 'Mana bulatan yang sama?',              '🔴', ['🔵','🟡','🔴','🟢']),
      q('⭐', 'Mana yang sama dengan bintang ini?',   '⭐', ['☀️','⭐','🌙','🌟']),
      q('🦁', 'Mana yang sama dengan singa ini?',     '🦁', ['🐯','🦁','🐮','🐘']),
      q('🏠', 'Mana yang sama dengan rumah ini?',     '🏠', ['🌳','🏠','⛰️','🌊']),
      q('🚗', 'Mana yang sama dengan kereta ini?',    '🚗', ['✈️','🚗','🚢','🚂']),
      q('🌈', 'Mana yang sama dengan pelangi ini?',   '🌈', ['☁️','🌈','⛅','🌤️']),
      q('🍌', 'Mana yang sama dengan pisang ini?',    '🍌', ['🍎','🍊','🍌','🍇']),
      q('🐘', 'Mana yang sama dengan gajah ini?',     '🐘', ['🦁','🐸','🐶','🐘']),
    ]
  }]
};

// ─── 5. Kenderaan ────────────────────────────────────────────────────────────
// Kenderaan — toddlers SUKA vehicles! Pick the right vehicle from clues.
const KENDERAAN = {
  label: 'Kenderaan', icon: '🚗', color: '#E74C3C',
  tadika: [{
    id: 'kenderaan', title: 'Kenderaan 🚗', icon: '🚗',
    questions: [
      q('Terbang di langit! ✈️❓',     'Apa yang terbang di langit?',         '✈️', ['✈️','🚗','🚢','🚂']),
      q('Berlayar di laut! 🌊❓',      'Apa yang berlayar di laut?',           '🚢', ['✈️','🚗','🚢','🚂']),
      q('Jalan di landasan! 🛤️❓',    'Apa yang jalan atas landasan?',        '🚂', ['✈️','🚗','🚢','🚂']),
      q('Jalan di jalan raya! 🛣️❓',  'Apa yang jalan di jalan raya?',        '🚗', ['✈️','🚗','🚢','🚂']),
      q('Doktor naik apa? 🏥❓',       'Kenderaan kecemasan doktor apa?',      '🚑', ['🚑','🚒','🚓','🚁']),
      q('Bomba naik apa? 🔥❓',        'Kenderaan bomba apa?',                 '🚒', ['🚑','🚒','🚓','🚁']),
      q('Polis naik apa? 👮❓',        'Kenderaan polis apa?',                 '🚓', ['🚑','🚒','🚓','🚁']),
      q('Baling-baling terbang! ❓',   'Helikopter mana satu?',               '🚁', ['🚑','🚒','🚓','🚁']),
      q('Basikal ada berapa roda? ❓', 'Basikal ada berapa roda?',            '2️⃣', ['1️⃣','2️⃣','3️⃣','4️⃣']),
      q('Kereta ada berapa roda? ❓',  'Kereta ada berapa roda?',             '4️⃣', ['1️⃣','2️⃣','3️⃣','4️⃣']),
    ]
  }]
};

export const TADIKA_CURRICULUM = { kira: KIRA, warna: WARNA, haiwan: HAIWAN, padanan: PADANAN, kenderaan: KENDERAAN };
