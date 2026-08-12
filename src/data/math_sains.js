// Matematik & Sains — Tahun 6 (Prasekolah) & Darjah 1

const MATEMATIK = {
  label: "Matematik",
  icon: "🔢",
  color: "#FF8C42",

  tahun6: [
    {
      id: "mat-t6-kira-1-10",
      title: "Mengira 1 – 10",
      icon: "🔢",
      questions: [
        { type:"mcq", q:"🍎🍎🍎 — Ada berapa biji epal?", answer:"3", options:["2","3","4","5"] },
        { type:"mcq", q:"🐟🐟🐟🐟🐟 — Ada berapa ekor ikan?", answer:"5", options:["4","5","6","7"] },
        { type:"mcq", q:"⭐⭐⭐⭐⭐⭐⭐ — Ada berapa bintang?", answer:"7", options:["6","7","8","9"] },
        { type:"mcq", q:"Nombor selepas 4 ialah ___", answer:"5", options:["3","4","5","6"] },
        { type:"mcq", q:"Nombor sebelum 8 ialah ___", answer:"7", options:["6","7","8","9"] },
        { type:"mcq", q:"Yang manakah nombor paling besar?", answer:"9", options:["5","7","6","9"] },
        { type:"mcq", q:"Yang manakah nombor paling kecil?", answer:"1", options:["4","1","3","2"] },
        { type:"match", q:"Padankan nombor dengan kuantiti", pairs:[
          {left:"1", right:"🍎"},
          {left:"2", right:"🍎🍎"},
          {left:"3", right:"🍎🍎🍎"},
          {left:"4", right:"🍎🍎🍎🍎"},
        ]},
        { type:"mcq", q:"2 + 1 = ?", answer:"3", options:["2","3","4","5"] },
        { type:"mcq", q:"4 + 2 = ?", answer:"6", options:["5","6","7","8"] },
        { type:"mcq", q:"5 - 2 = ?", answer:"3", options:["2","3","4","5"] },
        { type:"mcq", q:"6 - 3 = ?", answer:"3", options:["2","3","4","5"] },
      ]
    },
    {
      id: "mat-t6-kira-11-20",
      title: "Mengira 11 – 20",
      icon: "🔟",
      questions: [
        { type:"mcq", q:"Nombor selepas 10 ialah ___", answer:"11", options:["9","10","11","12"] },
        { type:"mcq", q:"Nombor selepas 15 ialah ___", answer:"16", options:["14","15","16","17"] },
        { type:"mcq", q:"10 + 5 = ?", answer:"15", options:["13","14","15","16"] },
        { type:"mcq", q:"10 + 8 = ?", answer:"18", options:["17","18","19","20"] },
        { type:"mcq", q:"Yang manakah lebih besar?", answer:"17", options:["12","17","15","13"] },
        { type:"mcq", q:"Yang manakah lebih kecil?", answer:"11", options:["19","18","17","11"] },
        { type:"mcq", q:"15 - 3 = ?", answer:"12", options:["10","11","12","13"] },
        { type:"mcq", q:"18 - 5 = ?", answer:"13", options:["12","13","14","15"] },
        { type:"match", q:"Padankan nombor dengan perkataan", pairs:[
          {left:"11", right:"sebelas"},
          {left:"12", right:"dua belas"},
          {left:"15", right:"lima belas"},
          {left:"20", right:"dua puluh"},
        ]},
        { type:"mcq", q:"12 + 3 = ?", answer:"15", options:["14","15","16","17"] },
      ]
    },
    {
      id: "mat-t6-bentuk",
      title: "Bentuk 2D & 3D",
      icon: "🔷",
      questions: [
        { type:"mcq", q:"Bentuk yang ada 4 sisi sama panjang ialah ___", answer:"Segi empat sama", options:["Segi empat sama","Segi tiga","Bulatan","Segi empat tepat"] },
        { type:"mcq", q:"Berapa sisi segi tiga?", answer:"3", options:["2","3","4","5"] },
        { type:"mcq", q:"Buah tembikai berbentuk ___", answer:"Bola (sfera)", options:["Kon","Bola (sfera)","Silinder","Kubus"] },
        { type:"mcq", q:"Tin susu berbentuk ___", answer:"Silinder", options:["Sfera","Silinder","Kubus","Kon"] },
        { type:"mcq", q:"Dadu berbentuk ___", answer:"Kubus", options:["Sfera","Silinder","Kubus","Kon"] },
        { type:"match", q:"Padankan benda dengan bentuknya", pairs:[
          {left:"🎾 Bola", right:"Sfera"},
          {left:"🎲 Dadu", right:"Kubus"},
          {left:"🥤 Tin", right:"Silinder"},
          {left:"🍦 Aiskrim kon", right:"Kon"},
        ]},
        { type:"mcq", q:"Sebuah segi empat sama mempunyai ___ sudut.", answer:"4", options:["2","3","4","5"] },
        { type:"mcq", q:"Bulatan mempunyai ___ sisi.", answer:"0", options:["0","1","2","3"] },
      ]
    },
  ],

  darjah1: [
    {
      id: "mat-d1-tambah-20",
      title: "Tambah Dalam 20",
      icon: "➕",
      questions: [
        { type:"mcq", q:"7 + 8 = ?", answer:"15", options:["14","15","16","17"] },
        { type:"mcq", q:"9 + 6 = ?", answer:"15", options:["14","15","16","17"] },
        { type:"mcq", q:"8 + 8 = ?", answer:"16", options:["15","16","17","18"] },
        { type:"mcq", q:"6 + 7 = ?", answer:"13", options:["11","12","13","14"] },
        { type:"mcq", q:"5 + 9 = ?", answer:"14", options:["13","14","15","16"] },
        { type:"mcq", q:"7 + 7 = ?", answer:"14", options:["12","13","14","15"] },
        { type:"mcq", q:"4 + 9 = ?", answer:"13", options:["11","12","13","14"] },
        { type:"mcq", q:"10 + 9 = ?", answer:"19", options:["17","18","19","20"] },
        { type:"mcq", q:"Jika ada 6 epal dan ditambah 7 lagi, jumlah ialah ___", answer:"13", options:["11","12","13","14"] },
        { type:"mcq", q:"Dalam kelas ada 9 murid lelaki dan 8 murid perempuan. Jumlah = ?", answer:"17", options:["15","16","17","18"] },
      ]
    },
    {
      id: "mat-d1-tolak-20",
      title: "Tolak Dalam 20",
      icon: "➖",
      questions: [
        { type:"mcq", q:"15 - 7 = ?", answer:"8", options:["6","7","8","9"] },
        { type:"mcq", q:"16 - 8 = ?", answer:"8", options:["7","8","9","10"] },
        { type:"mcq", q:"18 - 9 = ?", answer:"9", options:["7","8","9","10"] },
        { type:"mcq", q:"14 - 6 = ?", answer:"8", options:["6","7","8","9"] },
        { type:"mcq", q:"20 - 7 = ?", answer:"13", options:["11","12","13","14"] },
        { type:"mcq", q:"13 - 5 = ?", answer:"8", options:["6","7","8","9"] },
        { type:"mcq", q:"17 - 9 = ?", answer:"8", options:["7","8","9","10"] },
        { type:"mcq", q:"Ada 12 biskut. Dimakan 4. Tinggal ___", answer:"8", options:["6","7","8","9"] },
        { type:"mcq", q:"Ada 15 biji gula-gula. Diberi 6. Baki = ?", answer:"9", options:["7","8","9","10"] },
        { type:"mcq", q:"19 - 4 = ?", answer:"15", options:["13","14","15","16"] },
      ]
    },
    {
      id: "mat-d1-nombor-100",
      title: "Nombor hingga 100",
      icon: "💯",
      questions: [
        { type:"mcq", q:"20 + 10 = ?", answer:"30", options:["25","30","35","40"] },
        { type:"mcq", q:"40 + 20 = ?", answer:"60", options:["50","60","70","80"] },
        { type:"mcq", q:"50 + 30 = ?", answer:"80", options:["70","80","90","100"] },
        { type:"mcq", q:"Nombor selepas 49 ialah ___", answer:"50", options:["48","49","50","51"] },
        { type:"mcq", q:"Nombor sebelum 70 ialah ___", answer:"69", options:["68","69","70","71"] },
        { type:"mcq", q:"Yang manakah nombor paling besar?", answer:"87", options:["78","87","75","84"] },
        { type:"mcq", q:"Yang manakah nombor paling kecil?", answer:"32", options:["56","43","32","41"] },
        { type:"match", q:"Padankan nombor dengan perkataan", pairs:[
          {left:"30", right:"tiga puluh"},
          {left:"50", right:"lima puluh"},
          {left:"70", right:"tujuh puluh"},
          {left:"100", right:"seratus"},
        ]},
        { type:"mcq", q:"60 - 20 = ?", answer:"40", options:["30","40","50","60"] },
        { type:"mcq", q:"90 - 40 = ?", answer:"50", options:["40","50","60","70"] },
      ]
    },
    {
      id: "mat-d1-wang",
      title: "Wang Ringgit & Sen",
      icon: "💰",
      questions: [
        { type:"mcq", q:"RM1 = ___ sen", answer:"100 sen", options:["10 sen","50 sen","100 sen","200 sen"] },
        { type:"mcq", q:"50 sen + 50 sen = ?", answer:"RM1", options:["RM2","RM1","50 sen","25 sen"] },
        { type:"mcq", q:"Roti berharga RM1.50. Bayar RM2. Baki = ?", answer:"50 sen", options:["50 sen","RM1","RM1.50","20 sen"] },
        { type:"mcq", q:"Pensil berharga 80 sen. Bayar RM1. Baki = ?", answer:"20 sen", options:["10 sen","20 sen","30 sen","40 sen"] },
        { type:"mcq", q:"2 syiling 50 sen = ?", answer:"RM1", options:["50 sen","RM1","RM1.50","RM2"] },
        { type:"match", q:"Padankan harga dengan wang yang dibayar", pairs:[
          {left:"30 sen", right:"3 syiling 10 sen"},
          {left:"RM1", right:"2 syiling 50 sen"},
          {left:"50 sen", right:"5 syiling 10 sen"},
          {left:"20 sen", right:"2 syiling 10 sen"},
        ]},
        { type:"mcq", q:"Sebuah buku harga RM3. Ada RM5. Baki = ?", answer:"RM2", options:["RM1","RM2","RM3","RM4"] },
        { type:"mcq", q:"Syiling apakah yang nilainya paling tinggi?", answer:"50 sen", options:["1 sen","5 sen","20 sen","50 sen"] },
        { type:"mcq", q:"RM2 + RM3 = ?", answer:"RM5", options:["RM4","RM5","RM6","RM7"] },
        { type:"mcq", q:"Nota RM10 boleh ditukar kepada ___ nota RM5.", answer:"2", options:["1","2","3","4"] },
      ]
    },
    {
      id: "mat-d1-masa",
      title: "Waktu & Masa",
      icon: "🕐",
      questions: [
        { type:"mcq", q:"Berapa minit dalam 1 jam?", answer:"60 minit", options:["30 minit","45 minit","60 minit","100 minit"] },
        { type:"mcq", q:"Berapa jam dalam sehari?", answer:"24 jam", options:["12 jam","20 jam","24 jam","48 jam"] },
        { type:"mcq", q:"Berapa hari dalam seminggu?", answer:"7 hari", options:["5 hari","6 hari","7 hari","8 hari"] },
        { type:"mcq", q:"Hari pertama dalam seminggu ialah ___", answer:"Isnin", options:["Ahad","Isnin","Selasa","Rabu"] },
        { type:"mcq", q:"Hari selepas Rabu ialah ___", answer:"Khamis", options:["Selasa","Rabu","Khamis","Jumaat"] },
        { type:"match", q:"Padankan waktu dengan aktiviti", pairs:[
          {left:"7:00 pagi", right:"Pergi sekolah"},
          {left:"12:00 tengah hari", right:"Makan tengah hari"},
          {left:"6:00 petang", right:"Bermain di taman"},
          {left:"9:00 malam", right:"Tidur"},
        ]},
        { type:"mcq", q:"Sekolah bermula pukul 7:30. Tamat pukul 1:00. Berapa jam di sekolah?", answer:"5 jam 30 minit", options:["5 jam","5 jam 30 minit","6 jam","6 jam 30 minit"] },
        { type:"mcq", q:"Berapa bulan dalam setahun?", answer:"12 bulan", options:["10 bulan","11 bulan","12 bulan","13 bulan"] },
        { type:"mcq", q:"Bulan pertama dalam setahun ialah ___", answer:"Januari", options:["Januari","Februari","Mac","April"] },
        { type:"mcq", q:"Bulan Ramadan biasanya pada bulan ke ___", answer:"9", options:["7","8","9","10"] },
      ]
    },
  ]
};

const SAINS = {
  label: "Sains",
  icon: "🔬",
  color: "#2ECC71",

  tahun6: [
    {
      id: "sains-t6-deria",
      title: "Lima Deria",
      icon: "👀",
      questions: [
        { type:"mcq", q:"Kita menggunakan mata untuk ___", answer:"Melihat", options:["Melihat","Mendengar","Merasa","Menghidu"] },
        { type:"mcq", q:"Kita menggunakan telinga untuk ___", answer:"Mendengar", options:["Melihat","Mendengar","Merasa","Menghidu"] },
        { type:"mcq", q:"Kita menggunakan hidung untuk ___", answer:"Menghidu", options:["Melihat","Mendengar","Menghidu","Menyentuh"] },
        { type:"mcq", q:"Kita menggunakan lidah untuk ___", answer:"Merasa", options:["Melihat","Merasa","Menghidu","Mendengar"] },
        { type:"mcq", q:"Kita menggunakan kulit untuk ___", answer:"Menyentuh", options:["Mendengar","Menyentuh","Melihat","Merasa"] },
        { type:"match", q:"Padankan deria dengan anggota badan", pairs:[
          {left:"Melihat", right:"Mata"},
          {left:"Mendengar", right:"Telinga"},
          {left:"Menghidu", right:"Hidung"},
          {left:"Merasa", right:"Lidah"},
        ]},
        { type:"mcq", q:"Berapa banyak deria yang kita ada?", answer:"5", options:["3","4","5","6"] },
        { type:"mcq", q:"Kita tahu makanan manis dengan menggunakan ___", answer:"Lidah", options:["Mata","Hidung","Lidah","Telinga"] },
        { type:"mcq", q:"Kita tahu benda panas dan sejuk menggunakan ___", answer:"Kulit", options:["Mata","Kulit","Hidung","Lidah"] },
        { type:"mcq", q:"Warna bunga dilihat menggunakan ___", answer:"Mata", options:["Mata","Telinga","Hidung","Kulit"] },
      ]
    },
    {
      id: "sains-t6-hidup",
      title: "Benda Hidup & Tak Hidup",
      icon: "🌱",
      questions: [
        { type:"mcq", q:"Yang manakah benda hidup?", answer:"🌺 Bunga", options:["🪨 Batu","🌺 Bunga","🪑 Kerusi","🔑 Kunci"] },
        { type:"mcq", q:"Yang manakah benda TIDAK hidup?", answer:"🪨 Batu", options:["🐠 Ikan","🌲 Pokok","🪨 Batu","🐝 Lebah"] },
        { type:"mcq", q:"Benda hidup perlu ___ untuk hidup.", answer:"Makanan, air & udara", options:["Elektrik sahaja","Makanan, air & udara","Wang","Batu"] },
        { type:"mcq", q:"Pokok membesar apabila mendapat ___", answer:"Air dan cahaya matahari", options:["Pasir","Air dan cahaya matahari","Batu","Warna"] },
        { type:"match", q:"Padankan dengan hidup atau tidak hidup", pairs:[
          {left:"🐕 Anjing", right:"Hidup"},
          {left:"🌿 Pokok", right:"Hidup"},
          {left:"🚗 Kereta", right:"Tidak hidup"},
          {left:"📚 Buku", right:"Tidak hidup"},
        ]},
        { type:"mcq", q:"Haiwan bergerak sendiri. Benda tidak hidup ___", answer:"Tidak bergerak sendiri", options:["Bergerak sendiri","Tidak bergerak sendiri","Membesar","Bernafas"] },
        { type:"mcq", q:"Tanda benda hidup: ia boleh ___", answer:"Membesar dan membiak", options:["Terbang","Membesar dan membiak","Berubah warna","Tenggelam"] },
        { type:"mcq", q:"Pokok termasuk dalam kumpulan ___", answer:"Tumbuhan", options:["Haiwan","Tumbuhan","Benda tak hidup","Mineral"] },
      ]
    },
  ],

  darjah1: [
    {
      id: "sains-d1-haiwan",
      title: "Haiwan & Habitatnya",
      icon: "🐘",
      questions: [
        { type:"mcq", q:"Ikan tinggal di ___", answer:"Air", options:["Darat","Air","Pokok","Langit"] },
        { type:"mcq", q:"Burung tinggal di ___", answer:"Pokok / Langit", options:["Air","Tanah","Pokok / Langit","Gua"] },
        { type:"mcq", q:"Cacing tinggal di ___", answer:"Tanah", options:["Air","Tanah","Pokok","Langit"] },
        { type:"match", q:"Padankan haiwan dengan habitatnya", pairs:[
          {left:"🐠 Ikan", right:"Air"},
          {left:"🦁 Singa", right:"Padang rumput"},
          {left:"🐻 Beruang", right:"Hutan"},
          {left:"🐪 Unta", right:"Padang pasir"},
        ]},
        { type:"mcq", q:"Haiwan manakah yang hidup di air DAN darat?", answer:"Katak", options:["Ikan","Katak","Burung","Ular"] },
        { type:"mcq", q:"Haiwan manakah yang terbang?", answer:"Burung", options:["Ikan","Ular","Burung","Kura-kura"] },
        { type:"mcq", q:"Harimau adalah haiwan ___", answer:"Buas", options:["Jinak","Buas","Air","Rumah"] },
        { type:"mcq", q:"Kucing dan anjing adalah haiwan ___", answer:"Jinak", options:["Jinak","Buas","Liar","Ganas"] },
        { type:"mcq", q:"Haiwan manakah yang memberi kita susu?", answer:"Lembu", options:["Ayam","Lembu","Ikan","Arnab"] },
        { type:"mcq", q:"Ayam memberi kita ___", answer:"Telur & daging", options:["Susu","Telur & daging","Bulu sahaja","Wool"] },
      ]
    },
    {
      id: "sains-d1-tumbuhan",
      title: "Tumbuhan",
      icon: "🌿",
      questions: [
        { type:"mcq", q:"Bahagian tumbuhan yang berada di dalam tanah ialah ___", answer:"Akar", options:["Akar","Batang","Daun","Bunga"] },
        { type:"mcq", q:"Bahagian tumbuhan yang membuat makanan ialah ___", answer:"Daun", options:["Akar","Batang","Daun","Bunga"] },
        { type:"mcq", q:"Tumbuhan membuat makanan menggunakan ___", answer:"Cahaya matahari", options:["Tanah sahaja","Cahaya matahari","Air sahaja","Baja"] },
        { type:"match", q:"Padankan bahagian pokok dengan fungsinya", pairs:[
          {left:"Akar", right:"Menyerap air"},
          {left:"Batang", right:"Menyokong tumbuhan"},
          {left:"Daun", right:"Membuat makanan"},
          {left:"Bunga", right:"Menarik lebah"},
        ]},
        { type:"mcq", q:"Buah terhasil daripada ___", answer:"Bunga", options:["Daun","Akar","Batang","Bunga"] },
        { type:"mcq", q:"Tumbuhan memerlukan ___ untuk hidup.", answer:"Air, cahaya & tanah", options:["Wang","Air, cahaya & tanah","Batu","Plastik"] },
        { type:"mcq", q:"Pokok yang memberi kita buah mangga ialah ___", answer:"Pokok mangga", options:["Pokok pisang","Pokok mangga","Pokok rambutan","Pokok durian"] },
        { type:"mcq", q:"Daun berwarna hijau kerana mengandungi ___", answer:"Klorofil", options:["Air","Klorofil","Gula","Baja"] },
        { type:"mcq", q:"Biji benih akan menjadi ___", answer:"Tumbuhan baru", options:["Batu","Tanah","Tumbuhan baru","Air"] },
        { type:"mcq", q:"Buah manakah yang ada pada pokok pisang?", answer:"Pisang", options:["Mangga","Pisang","Rambutan","Betik"] },
      ]
    },
    {
      id: "sains-d1-cuaca",
      title: "Cuaca & Alam Sekitar",
      icon: "🌤️",
      questions: [
        { type:"mcq", q:"Bila matahari bersinar terang, cuaca ___", answer:"Cerah", options:["Hujan","Cerah","Ribut","Mendung"] },
        { type:"mcq", q:"Bila awan gelap dan hujan turun, cuaca ___", answer:"Hujan", options:["Cerah","Hujan","Berangin","Sejuk"] },
        { type:"mcq", q:"Kita pakai payung bila ___", answer:"Hujan", options:["Cerah","Berangin","Hujan","Panas"] },
        { type:"mcq", q:"Kita pakai topi bila ___", answer:"Panas & cerah", options:["Hujan","Panas & cerah","Ribut","Malam"] },
        { type:"match", q:"Padankan cuaca dengan simbol", pairs:[
          {left:"☀️", right:"Cerah"},
          {left:"🌧️", right:"Hujan"},
          {left:"🌩️", right:"Ribut petir"},
          {left:"🌬️", right:"Berangin"},
        ]},
        { type:"mcq", q:"Hujan memberi manfaat kepada ___", answer:"Tumbuhan & haiwan", options:["Komputer","Tumbuhan & haiwan","Kereta sahaja","Batu"] },
        { type:"mcq", q:"Bulan manakah biasanya ada musim hujan di Malaysia?", answer:"Oktober - Disember", options:["Januari - Mac","April - Jun","Julai - September","Oktober - Disember"] },
        { type:"mcq", q:"Sumber cahaya semula jadi ialah ___", answer:"Matahari", options:["Lampu","Matahari","Lilin","Obor"] },
        { type:"mcq", q:"Matahari terbit di ___", answer:"Timur", options:["Barat","Timur","Utara","Selatan"] },
        { type:"mcq", q:"Matahari terbenam di ___", answer:"Barat", options:["Timur","Barat","Utara","Selatan"] },
      ]
    },
    {
      id: "sains-d1-tubuh-badan",
      title: "Anggota Badan",
      icon: "🧑",
      questions: [
        { type:"mcq", q:"Berapa banyak tangan yang kita ada?", answer:"2", options:["1","2","3","4"] },
        { type:"mcq", q:"Berapa banyak jari pada satu tangan?", answer:"5", options:["4","5","6","7"] },
        { type:"mcq", q:"Anggota badan manakah yang kita guna untuk berjalan?", answer:"Kaki", options:["Tangan","Kaki","Kepala","Bahu"] },
        { type:"mcq", q:"Anggota badan manakah yang kita guna untuk menulis?", answer:"Tangan", options:["Kaki","Tangan","Kepala","Lutut"] },
        { type:"match", q:"Padankan anggota badan dengan fungsinya", pairs:[
          {left:"Mata", right:"Melihat"},
          {left:"Telinga", right:"Mendengar"},
          {left:"Kaki", right:"Berjalan"},
          {left:"Tangan", right:"Memegang"},
        ]},
        { type:"mcq", q:"Untuk menjaga kesihatan gigi, kita perlu ___", answer:"Gosok gigi 2 kali sehari", options:["Gosok gigi 2 kali sehari","Makan gula banyak","Tidur sahaja","Minum air panas"] },
        { type:"mcq", q:"Untuk menjaga kebersihan, kita perlu ___", answer:"Mandi 2 kali sehari", options:["Mandi seminggu sekali","Mandi 2 kali sehari","Pakai baju kotor","Tidak basuh tangan"] },
        { type:"mcq", q:"Jantung berada di dalam ___", answer:"Dada", options:["Kepala","Dada","Perut","Belakang"] },
        { type:"mcq", q:"Otak berada di dalam ___", answer:"Kepala", options:["Kepala","Dada","Perut","Kaki"] },
        { type:"mcq", q:"Kita bernafas menggunakan ___", answer:"Paru-paru", options:["Jantung","Paru-paru","Perut","Otak"] },
      ]
    },
  ]
};

export { MATEMATIK, SAINS };
