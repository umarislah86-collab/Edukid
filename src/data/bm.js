// Silibus KPM — Tahun 6 (Prasekolah) & Darjah 1
// question types: mcq | match | arrange

// ─── BAHASA MALAYSIA ────────────────────────────────────────────────────────
const BM = {
  label: "Bahasa Malaysia",
  icon: "📝",
  color: "#6C63FF",

  tahun6: [
    // ── Kenal Huruf ──────────────────────────────────────────────────────────
    {
      id: "bm-t6-huruf-vokal",
      title: "Huruf Vokal",
      icon: "🔤",
      questions: [
        { type:"mcq", q:"Yang manakah huruf vokal?", answer:"A", options:["A","B","C","D"] },
        { type:"mcq", q:"Yang manakah huruf vokal?", answer:"E", options:["E","F","G","H"] },
        { type:"mcq", q:"Yang manakah huruf vokal?", answer:"I", options:["J","K","I","L"] },
        { type:"mcq", q:"Yang manakah huruf vokal?", answer:"O", options:["M","N","O","P"] },
        { type:"mcq", q:"Yang manakah huruf vokal?", answer:"U", options:["R","S","T","U"] },
        { type:"mcq", q:"Berapa banyak huruf vokal dalam Bahasa Malaysia?", answer:"5", options:["3","4","5","6"] },
        { type:"mcq", q:"A, E, I, O, ___ — huruf apakah yang hilang?", answer:"U", options:["B","U","C","D"] },
        { type:"match", q:"Padankan huruf vokal dengan gambar", pairs:[
          {left:"A", right:"🍎 Epal"},
          {left:"E", right:"🐘 Gajah"},
          {left:"I", right:"🐟 Ikan"},
          {left:"O", right:"🦁 Orang utan"},
          {left:"U", right:"🐛 Ulat"},
        ]},
        { type:"mcq", q:"Perkataan 'ibu' mengandungi berapa huruf vokal?", answer:"2", options:["1","2","3","4"] },
        { type:"mcq", q:"Perkataan 'api' bermula dengan huruf vokal ___", answer:"A", options:["A","E","I","O"] },
      ]
    },
    // ── Suku Kata ─────────────────────────────────────────────────────────────
    {
      id: "bm-t6-suku-kata",
      title: "Suku Kata KV",
      icon: "🗣️",
      questions: [
        { type:"mcq", q:"'ba' + 'ba' = ?", answer:"baba", options:["baba","bibi","bubu","bebe"] },
        { type:"mcq", q:"'ma' + 'ma' = ?", answer:"mama", options:["mama","mimi","mumu","meme"] },
        { type:"mcq", q:"'ka' + 'ki' = ?", answer:"kaki", options:["kuku","kaki","koko","keke"] },
        { type:"mcq", q:"'bu' + 'ku' = ?", answer:"buku", options:["buku","biki","boko","baka"] },
        { type:"mcq", q:"'pi' + 'pi' = ?", answer:"pipi", options:["papa","pipi","pupu","pepe"] },
        { type:"mcq", q:"'su' + 'su' = ?", answer:"susu", options:["susu","sisi","seso","sasa"] },
        { type:"mcq", q:"'ta' + 'li' = ?", answer:"tali", options:["tali","tilu","tola","telo"] },
        { type:"mcq", q:"'bo' + 'la' = ?", answer:"bola", options:["bola","bila","bule","bale"] },
        { type:"mcq", q:"'sa' + 'pu' = ?", answer:"sapu", options:["sapu","sipu","sopa","sepa"] },
        { type:"mcq", q:"'ta' + 'hu' = ?", answer:"tahu", options:["tahu","tihu","tohu","tehu"] },
        { type:"arrange", q:"Susun suku kata: 'tu' 'ru' 'na'", words:["tu","ru","na"], answer:"turunan" },
        { type:"mcq", q:"'ke' + 'ta' = ?", answer:"keta", options:["keta","kita","kuto","kate"] },
        { type:"mcq", q:"'ru' + 'ma' + 'h' = ?", answer:"rumah", options:["rumah","ramah","rimah","romah"] },
      ]
    },
    // ── Membaca Perkataan ──────────────────────────────────────────────────────
    {
      id: "bm-t6-baca-perkataan",
      title: "Membaca Perkataan",
      icon: "👁️",
      questions: [
        { type:"mcq", q:"🐱 Gambar ini ialah ___", answer:"kucing", options:["kucing","kancing","kencing","kocong"] },
        { type:"mcq", q:"🐕 Gambar ini ialah ___", answer:"anjing", options:["anjing","anting","anteng","antung"] },
        { type:"mcq", q:"🌳 Gambar ini ialah ___", answer:"pokok", options:["pokok","pakok","pikok","pukok"] },
        { type:"mcq", q:"🏠 Gambar ini ialah ___", answer:"rumah", options:["rumah","ramah","rimah","romah"] },
        { type:"mcq", q:"🍌 Gambar ini ialah ___", answer:"pisang", options:["pisang","pasang","pusang","pesang"] },
        { type:"mcq", q:"✏️ Gambar ini ialah ___", answer:"pensel", options:["pensel","pensal","pinsel","punsel"] },
        { type:"mcq", q:"📚 Gambar ini ialah ___", answer:"buku", options:["buku","boki","bako","biku"] },
        { type:"mcq", q:"🌙 Gambar ini ialah ___", answer:"bulan", options:["bulan","bolan","bilan","belan"] },
        { type:"mcq", q:"☀️ Gambar ini ialah ___", answer:"matahari", options:["matahari","matakaki","mataapi","matabatu"] },
        { type:"mcq", q:"🐠 Gambar ini ialah ___", answer:"ikan", options:["ikan","akan","okan","ukon"] },
        { type:"match", q:"Padankan gambar dengan perkataan", pairs:[
          {left:"🐱", right:"kucing"},
          {left:"🍌", right:"pisang"},
          {left:"📚", right:"buku"},
          {left:"🏠", right:"rumah"},
        ]},
        { type:"match", q:"Padankan gambar dengan perkataan", pairs:[
          {left:"✏️", right:"pensel"},
          {left:"🌙", right:"bulan"},
          {left:"🐠", right:"ikan"},
          {left:"🌳", right:"pokok"},
        ]},
      ]
    },
    // ── Warna & Nombor BM ────────────────────────────────────────────────────
    {
      id: "bm-t6-warna-nombor",
      title: "Warna & Nombor",
      icon: "🌈",
      questions: [
        { type:"match", q:"Padankan warna dengan nama", pairs:[
          {left:"🔴", right:"merah"},
          {left:"🔵", right:"biru"},
          {left:"🟡", right:"kuning"},
          {left:"🟢", right:"hijau"},
        ]},
        { type:"match", q:"Padankan warna dengan nama", pairs:[
          {left:"🟠", right:"oren"},
          {left:"⚫", right:"hitam"},
          {left:"⚪", right:"putih"},
          {left:"🟤", right:"coklat"},
        ]},
        { type:"mcq", q:"Langit berwarna ___", answer:"biru", options:["merah","biru","hijau","kuning"] },
        { type:"mcq", q:"Daun berwarna ___", answer:"hijau", options:["biru","merah","hijau","putih"] },
        { type:"mcq", q:"Nombor 'satu' ialah ___", answer:"1", options:["1","2","3","4"] },
        { type:"mcq", q:"Nombor 'lima' ialah ___", answer:"5", options:["3","4","5","6"] },
        { type:"mcq", q:"Nombor 'sepuluh' ialah ___", answer:"10", options:["8","9","10","11"] },
        { type:"match", q:"Padankan nombor dengan perkataan", pairs:[
          {left:"1", right:"satu"},
          {left:"2", right:"dua"},
          {left:"3", right:"tiga"},
          {left:"4", right:"empat"},
        ]},
        { type:"match", q:"Padankan nombor dengan perkataan", pairs:[
          {left:"5", right:"lima"},
          {left:"6", right:"enam"},
          {left:"7", right:"tujuh"},
          {left:"8", right:"lapan"},
        ]},
      ]
    },
  ],

  darjah1: [
    // ── Membaca Ayat Mudah ───────────────────────────────────────────────────
    {
      id: "bm-d1-ayat-mudah",
      title: "Membaca Ayat Mudah",
      icon: "📖",
      questions: [
        { type:"mcq", q:"'Ali ___ ke sekolah.' — Pilih perkataan yang sesuai.", answer:"pergi", options:["pergi","balik","tidur","makan"] },
        { type:"mcq", q:"'Ibu ___ nasi.' — Pilih perkataan yang sesuai.", answer:"masak", options:["masak","tulis","lari","nyanyi"] },
        { type:"mcq", q:"'Kucing itu ___ ikan.' — Pilih perkataan yang sesuai.", answer:"makan", options:["minum","makan","tidur","lari"] },
        { type:"mcq", q:"'Saya ___ bola di padang.' — Pilih perkataan yang sesuai.", answer:"tendang", options:["tendang","tulis","masak","tidur"] },
        { type:"arrange", q:"Susun ayat ini: Ali sekolah ke pergi", words:["Ali","pergi","ke","sekolah"], answer:"Ali pergi ke sekolah" },
        { type:"arrange", q:"Susun ayat ini: buku saya ini", words:["Ini","buku","saya"], answer:"Ini buku saya" },
        { type:"arrange", q:"Susun ayat ini: cantik bunga itu", words:["Bunga","itu","cantik"], answer:"Bunga itu cantik" },
        { type:"arrange", q:"Susun ayat ini: makan ibu nasi", words:["Ibu","makan","nasi"], answer:"Ibu makan nasi" },
        { type:"arrange", q:"Susun ayat ini: berlari budak itu", words:["Budak","itu","berlari"], answer:"Budak itu berlari" },
        { type:"mcq", q:"'Baju saya berwarna ___.' Pilih perkataan yang sesuai.", answer:"merah", options:["merah","berat","jauh","lambat"] },
        { type:"mcq", q:"Ayat manakah yang betul?", answer:"Ibu memasak nasi.", options:["Ibu nasi memasak.","Memasak ibu nasi.","Ibu memasak nasi.","Nasi ibu memasak."] },
        { type:"mcq", q:"Ayat manakah yang betul?", answer:"Kucing itu comel.", options:["Comel itu kucing.","Kucing comel itu.","Kucing itu comel.","Itu kucing comel."] },
      ]
    },
    // ── Kata Nama ─────────────────────────────────────────────────────────────
    {
      id: "bm-d1-kata-nama",
      title: "Kata Nama",
      icon: "🏷️",
      questions: [
        { type:"mcq", q:"Yang manakah kata nama?", answer:"buku", options:["buku","lari","cantik","cepat"] },
        { type:"mcq", q:"Yang manakah kata nama?", answer:"sekolah", options:["sekolah","berlari","pandai","malas"] },
        { type:"mcq", q:"Yang manakah kata nama?", answer:"kucing", options:["kucing","berlompat","comel","nakal"] },
        { type:"mcq", q:"Yang manakah BUKAN kata nama?", answer:"berlari", options:["rumah","berlari","meja","kerusi"] },
        { type:"mcq", q:"Yang manakah BUKAN kata nama?", answer:"cantik", options:["pokok","bunga","cantik","batu"] },
        { type:"match", q:"Padankan kata nama dengan jenisnya", pairs:[
          {left:"Ali", right:"Nama orang"},
          {left:"Kuala Lumpur", right:"Nama tempat"},
          {left:"kucing", right:"Nama haiwan"},
          {left:"buku", right:"Nama benda"},
        ]},
        { type:"mcq", q:"'Ibu membeli ___ di pasar.' — Kata nama yang sesuai?", answer:"sayur", options:["sayur","laju","makan","tidur"] },
        { type:"mcq", q:"Kata nama khas dimulakan dengan huruf ___", answer:"besar", options:["kecil","besar","tengah","lain"] },
        { type:"mcq", q:"Yang manakah kata nama khas?", answer:"Kuala Lumpur", options:["bandar","Kuala Lumpur","sekolah","pokok"] },
        { type:"mcq", q:"Yang manakah kata nama khas?", answer:"Ahmad", options:["budak","lelaki","Ahmad","kawan"] },
      ]
    },
    // ── Kata Kerja ────────────────────────────────────────────────────────────
    {
      id: "bm-d1-kata-kerja",
      title: "Kata Kerja",
      icon: "🏃",
      questions: [
        { type:"mcq", q:"Yang manakah kata kerja?", answer:"berlari", options:["berlari","buku","cantik","meja"] },
        { type:"mcq", q:"Yang manakah kata kerja?", answer:"makan", options:["makan","rumah","merah","kecil"] },
        { type:"mcq", q:"Yang manakah kata kerja?", answer:"menulis", options:["menulis","pensel","panjang","biru"] },
        { type:"mcq", q:"Yang manakah BUKAN kata kerja?", answer:"buku", options:["berlompat","buku","membaca","menyanyi"] },
        { type:"match", q:"Padankan gambar dengan kata kerja", pairs:[
          {left:"🏃", right:"berlari"},
          {left:"🍽️", right:"makan"},
          {left:"😴", right:"tidur"},
          {left:"✏️", right:"menulis"},
        ]},
        { type:"mcq", q:"'Adik ___ bola di taman.' — Kata kerja yang sesuai?", answer:"menendang", options:["menendang","comel","merah","buku"] },
        { type:"mcq", q:"'Ayah ___ akhbar setiap pagi.'", answer:"membaca", options:["membaca","berlari","tidur","menyanyi"] },
        { type:"mcq", q:"'Kakak ___ lagu dengan merdu.'", answer:"menyanyi", options:["menyanyi","makan","berlari","belajar"] },
        { type:"arrange", q:"Susun ayat: menulis adik buku dalam", words:["Adik","menulis","dalam","buku"], answer:"Adik menulis dalam buku" },
        { type:"mcq", q:"'Murid-murid ___ lagu Negaraku.'", answer:"menyanyikan", options:["menyanyikan","memakankan","berlarian","tidurkan"] },
      ]
    },
    // ── Kata Adjektif ─────────────────────────────────────────────────────────
    {
      id: "bm-d1-adjektif",
      title: "Kata Sifat (Adjektif)",
      icon: "✨",
      questions: [
        { type:"mcq", q:"Yang manakah kata sifat?", answer:"cantik", options:["cantik","berlari","buku","meja"] },
        { type:"mcq", q:"Yang manakah kata sifat?", answer:"besar", options:["besar","makan","sekolah","berlompat"] },
        { type:"mcq", q:"Lawan kata 'besar' ialah ___", answer:"kecil", options:["kecil","panjang","tinggi","lebar"] },
        { type:"mcq", q:"Lawan kata 'panas' ialah ___", answer:"sejuk", options:["sejuk","lembap","kering","basah"] },
        { type:"mcq", q:"Lawan kata 'cepat' ialah ___", answer:"lambat", options:["lambat","jauh","dekat","besar"] },
        { type:"mcq", q:"Lawan kata 'pandai' ialah ___", answer:"bodoh", options:["bodoh","cantik","comel","nakal"] },
        { type:"match", q:"Padankan benda dengan kata sifat yang sesuai", pairs:[
          {left:"🐘 Gajah", right:"besar"},
          {left:"🐜 Semut", right:"kecil"},
          {left:"🌺 Bunga", right:"cantik"},
          {left:"🍯 Madu", right:"manis"},
        ]},
        { type:"mcq", q:"'Budak itu ___ sekali.' — Kata sifat yang sesuai?", answer:"rajin", options:["rajin","berlari","buku","makan"] },
        { type:"mcq", q:"'Air laut berwarna ___.'", answer:"biru", options:["merah","biru","kuning","hitam"] },
        { type:"mcq", q:"'Suara ibu sangat ___.'", answer:"merdu", options:["merdu","berat","laju","keras"] },
      ]
    },
    // ── Membaca Petikan ───────────────────────────────────────────────────────
    {
      id: "bm-d1-petikan",
      title: "Petikan Mudah",
      icon: "📰",
      questions: [
        { type:"mcq", q:"Ali seorang murid yang rajin. Dia suka membaca buku. Siapakah Ali?", answer:"Murid yang rajin", options:["Murid yang rajin","Guru yang baik","Bapa yang sihat","Adik yang nakal"] },
        { type:"mcq", q:"'Ibu membeli pisang dan epal di pasar.' Ibu membeli berapa jenis buah?", answer:"2", options:["1","2","3","4"] },
        { type:"mcq", q:"'Hari ini cuaca cerah. Matahari bersinar terang.' Bagaimana cuaca hari ini?", answer:"Cerah", options:["Hujan","Cerah","Ribut","Mendung"] },
        { type:"mcq", q:"'Kucing itu berbulu putih dan bermata hijau.' Apa warna bulu kucing?", answer:"Putih", options:["Putih","Hitam","Coklat","Kelabu"] },
        { type:"mcq", q:"'Saya bangun pagi pukul 6.' Bilakah saya bangun?", answer:"Pukul 6 pagi", options:["Pukul 6 pagi","Pukul 6 petang","Pukul 12 tengah hari","Pukul 9 malam"] },
        { type:"mcq", q:"'Adik bermain bola di taman.' Di manakah adik bermain?", answer:"Di taman", options:["Di sekolah","Di taman","Di rumah","Di pasar"] },
        { type:"mcq", q:"'Ayah pulang dari kerja. Dia membawa roti.' Siapa yang membawa roti?", answer:"Ayah", options:["Ibu","Adik","Ayah","Abang"] },
        { type:"mcq", q:"'Pokok mangga itu tinggi dan rendang.' Bagaimana pokok mangga itu?", answer:"Tinggi dan rendang", options:["Pendek dan kecil","Tinggi dan rendang","Kecil dan layu","Rendah dan kurus"] },
      ]
    },
  ]
};

export { BM };
