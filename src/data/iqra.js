// Mengaji Iqra — Iqra 1-6 Syllabus
// Iqra 1-3 → tahun6 (peringkat permulaan)
// Iqra 4-6 → darjah1 (peringkat lanjutan)

const IQRA = {
  label: "Mengaji Iqra",
  icon: "🕌",
  color: "#1ABC9C",

  tahun6: [
    // ── Iqra 1: Mengenal Huruf Hijaiyah ─────────────────────────────────────
    {
      id: "iqra-1",
      title: "Iqra 1 — Huruf Hijaiyah",
      icon: "🔤",
      questions: [
        { type:"mcq", q:"Huruf ini ialah: أ", answer:"Alif", options:["Alif","Ba","Ta","Jim"] },
        { type:"mcq", q:"Huruf ini ialah: ب", answer:"Ba", options:["Ba","Ta","Tha","Dal"] },
        { type:"mcq", q:"Huruf ini ialah: ت", answer:"Ta", options:["Ba","Ta","Tha","Sin"] },
        { type:"mcq", q:"Huruf ini ialah: ث", answer:"Tha", options:["Ta","Tha","Jim","Ha"] },
        { type:"mcq", q:"Huruf ini ialah: ج", answer:"Jim", options:["Jim","Ha","Kha","Dal"] },
        { type:"mcq", q:"Huruf ini ialah: ح", answer:"Ha", options:["Jim","Ha","Kha","Sin"] },
        { type:"mcq", q:"Huruf ini ialah: خ", answer:"Kha", options:["Jim","Ha","Kha","Ain"] },
        { type:"mcq", q:"Huruf ini ialah: د", answer:"Dal", options:["Ra","Zai","Dal","Dzal"] },
        { type:"mcq", q:"Huruf ini ialah: ر", answer:"Ra", options:["Ra","Zai","Dal","Dzal"] },
        { type:"mcq", q:"Huruf ini ialah: س", answer:"Sin", options:["Sin","Syin","Sad","Dad"] },
        { type:"mcq", q:"Huruf ini ialah: ل", answer:"Lam", options:["Kaf","Lam","Mim","Nun"] },
        { type:"mcq", q:"Huruf ini ialah: م", answer:"Mim", options:["Mim","Nun","Waw","Ha"] },
        { type:"mcq", q:"Huruf ini ialah: ن", answer:"Nun", options:["Mim","Nun","Waw","Ya"] },
        { type:"mcq", q:"Huruf ini ialah: ي", answer:"Ya", options:["Waw","Ha","Ya","Alif"] },
        { type:"match", q:"Padankan huruf dengan namanya", pairs:[
          {left:"أ", right:"Alif"},
          {left:"ب", right:"Ba"},
          {left:"ت", right:"Ta"},
          {left:"ث", right:"Tha"},
        ]},
        { type:"match", q:"Padankan huruf dengan namanya", pairs:[
          {left:"ج", right:"Jim"},
          {left:"ح", right:"Ha"},
          {left:"خ", right:"Kha"},
          {left:"د", right:"Dal"},
        ]},
        { type:"match", q:"Padankan huruf dengan namanya", pairs:[
          {left:"ل", right:"Lam"},
          {left:"م", right:"Mim"},
          {left:"ن", right:"Nun"},
          {left:"و", right:"Waw"},
        ]},
        { type:"match", q:"Padankan huruf dengan namanya", pairs:[
          {left:"س", right:"Sin"},
          {left:"ش", right:"Syin"},
          {left:"ك", right:"Kaf"},
          {left:"ي", right:"Ya"},
        ]},
      ]
    },

    // ── Iqra 2: Huruf Berbaris Atas (Fathah) ────────────────────────────────
    {
      id: "iqra-2",
      title: "Iqra 2 — Baris Atas (Fathah)",
      icon: "✨",
      questions: [
        { type:"mcq", q:"بَ dibaca ___", answer:"ba", options:["ba","bi","bu","ab"] },
        { type:"mcq", q:"تَ dibaca ___", answer:"ta", options:["ta","ti","tu","at"] },
        { type:"mcq", q:"جَ dibaca ___", answer:"ja", options:["ja","ji","ju","aj"] },
        { type:"mcq", q:"دَ dibaca ___", answer:"da", options:["da","di","du","ad"] },
        { type:"mcq", q:"رَ dibaca ___", answer:"ra", options:["ra","ri","ru","ar"] },
        { type:"mcq", q:"سَ dibaca ___", answer:"sa", options:["sa","si","su","as"] },
        { type:"mcq", q:"كَ dibaca ___", answer:"ka", options:["ka","ki","ku","ak"] },
        { type:"mcq", q:"لَ dibaca ___", answer:"la", options:["la","li","lu","al"] },
        { type:"mcq", q:"مَ dibaca ___", answer:"ma", options:["ma","mi","mu","am"] },
        { type:"mcq", q:"نَ dibaca ___", answer:"na", options:["na","ni","nu","an"] },
        { type:"mcq", q:"Baris di atas huruf (fathah) berbunyi ___", answer:"a", options:["a","i","u","e"] },
        { type:"match", q:"Padankan huruf dengan bacaannya", pairs:[
          {left:"بَ", right:"ba"},
          {left:"تَ", right:"ta"},
          {left:"جَ", right:"ja"},
          {left:"دَ", right:"da"},
        ]},
        { type:"match", q:"Padankan huruf dengan bacaannya", pairs:[
          {left:"رَ", right:"ra"},
          {left:"سَ", right:"sa"},
          {left:"كَ", right:"ka"},
          {left:"لَ", right:"la"},
        ]},
        { type:"match", q:"Padankan huruf dengan bacaannya", pairs:[
          {left:"مَ", right:"ma"},
          {left:"نَ", right:"na"},
          {left:"وَ", right:"wa"},
          {left:"يَ", right:"ya"},
        ]},
        { type:"mcq", q:"هَ dibaca ___", answer:"ha", options:["ha","hi","hu","ah"] },
        { type:"mcq", q:"فَ dibaca ___", answer:"fa", options:["fa","fi","fu","af"] },
        { type:"mcq", q:"قَ dibaca ___", answer:"qa", options:["qa","qi","qu","aq"] },
        { type:"mcq", q:"عَ dibaca ___", answer:"a'", options:["a'","i'","u'","ka"] },
      ]
    },

    // ── Iqra 3: Baris Bawah (Kasrah) & Baris Depan (Dammah) ─────────────────
    {
      id: "iqra-3",
      title: "Iqra 3 — Baris Bawah & Depan",
      icon: "📚",
      questions: [
        // Kasrah (i)
        { type:"mcq", q:"بِ dibaca ___", answer:"bi", options:["ba","bi","bu","ib"] },
        { type:"mcq", q:"تِ dibaca ___", answer:"ti", options:["ta","ti","tu","it"] },
        { type:"mcq", q:"مِ dibaca ___", answer:"mi", options:["ma","mi","mu","im"] },
        { type:"mcq", q:"نِ dibaca ___", answer:"ni", options:["na","ni","nu","in"] },
        { type:"mcq", q:"لِ dibaca ___", answer:"li", options:["la","li","lu","il"] },
        // Dammah (u)
        { type:"mcq", q:"بُ dibaca ___", answer:"bu", options:["ba","bi","bu","ub"] },
        { type:"mcq", q:"تُ dibaca ___", answer:"tu", options:["ta","ti","tu","ut"] },
        { type:"mcq", q:"مُ dibaca ___", answer:"mu", options:["ma","mi","mu","um"] },
        { type:"mcq", q:"نُ dibaca ___", answer:"nu", options:["na","ni","nu","un"] },
        { type:"mcq", q:"لُ dibaca ___", answer:"lu", options:["la","li","lu","ul"] },
        // Mixed baris identification
        { type:"mcq", q:"Baris bawah (kasrah) berbunyi ___", answer:"i", options:["a","i","u","e"] },
        { type:"mcq", q:"Baris depan (dammah) berbunyi ___", answer:"u", options:["a","i","u","e"] },
        { type:"match", q:"Padankan huruf dengan bacaannya", pairs:[
          {left:"بَ", right:"ba"},
          {left:"بِ", right:"bi"},
          {left:"بُ", right:"bu"},
          {left:"تَ", right:"ta"},
        ]},
        { type:"match", q:"Padankan huruf dengan bacaannya", pairs:[
          {left:"مَ", right:"ma"},
          {left:"مِ", right:"mi"},
          {left:"مُ", right:"mu"},
          {left:"نَ", right:"na"},
        ]},
        { type:"match", q:"Padankan huruf dengan bacaannya", pairs:[
          {left:"كَ", right:"ka"},
          {left:"كِ", right:"ki"},
          {left:"كُ", right:"ku"},
          {left:"لَ", right:"la"},
        ]},
        { type:"mcq", q:"رِ dibaca ___", answer:"ri", options:["ra","ri","ru","ir"] },
        { type:"mcq", q:"سُ dibaca ___", answer:"su", options:["sa","si","su","us"] },
        { type:"mcq", q:"فِ dibaca ___", answer:"fi", options:["fa","fi","fu","if"] },
      ]
    },
  ],

  darjah1: [
    // ── Iqra 4: Tanwin & Huruf Mati (Sukun) ─────────────────────────────────
    {
      id: "iqra-4",
      title: "Iqra 4 — Tanwin & Huruf Mati",
      icon: "🌟",
      questions: [
        // Tanwin (double harakat = nasal ending)
        { type:"mcq", q:"بً dibaca ___", answer:"ban", options:["ban","bin","bun","ba"] },
        { type:"mcq", q:"بٍ dibaca ___", answer:"bin", options:["ban","bin","bun","bi"] },
        { type:"mcq", q:"بٌ dibaca ___", answer:"bun", options:["ban","bin","bun","bu"] },
        { type:"mcq", q:"كً dibaca ___", answer:"kan", options:["kan","kin","kun","ka"] },
        { type:"mcq", q:"مٌ dibaca ___", answer:"mun", options:["man","min","mun","mu"] },
        { type:"mcq", q:"Tanwin fathah ( ً ) berbunyi ___", answer:"an", options:["an","in","un","na"] },
        { type:"mcq", q:"Tanwin kasrah ( ٍ ) berbunyi ___", answer:"in", options:["an","in","un","ni"] },
        { type:"mcq", q:"Tanwin dammah ( ٌ ) berbunyi ___", answer:"un", options:["an","in","un","nu"] },
        { type:"match", q:"Padankan tanwin dengan bunyinya", pairs:[
          {left:"بً", right:"ban"},
          {left:"بٍ", right:"bin"},
          {left:"بٌ", right:"bun"},
          {left:"كً", right:"kan"},
        ]},
        // Speak: simple Arabic words
        { type:"speak", word:"كِتَابٌ", level:2, lang:"ar", hint:"kitaabun" },
        { type:"speak", word:"قَلَمٌ", level:2, lang:"ar", hint:"qalamun" },
        { type:"speak", word:"بَيْتٌ", level:2, lang:"ar", hint:"baytun" },
        { type:"speak", word:"مَسْجِدٌ", level:2, lang:"ar", hint:"masjidun" },
        { type:"speak", word:"عِلْمٌ", level:2, lang:"ar", hint:"ilmun" },
        { type:"speak", word:"مُسْلِمٌ", level:2, lang:"ar", hint:"muslimun" },
        { type:"speak", word:"رَحْمَةٌ", level:2, lang:"ar", hint:"rahmatun" },
      ]
    },

    // ── Iqra 5: Huruf Panjang (Mad) ──────────────────────────────────────────
    {
      id: "iqra-5",
      title: "Iqra 5 — Huruf Panjang (Mad)",
      icon: "🎵",
      questions: [
        // Mad alif (aa)
        { type:"mcq", q:"بَا dibaca ___", answer:"baa", options:["baa","bii","buu","ba"] },
        { type:"mcq", q:"كَا dibaca ___", answer:"kaa", options:["kaa","kii","kuu","ka"] },
        // Mad waw (uu)
        { type:"mcq", q:"بُو dibaca ___", answer:"buu", options:["baa","bii","buu","bu"] },
        { type:"mcq", q:"نُو dibaca ___", answer:"nuu", options:["naa","nii","nuu","nu"] },
        // Mad ya (ii)
        { type:"mcq", q:"بِي dibaca ___", answer:"bii", options:["baa","bii","buu","bi"] },
        { type:"mcq", q:"فِي dibaca ___", answer:"fii", options:["faa","fii","fuu","fi"] },
        { type:"match", q:"Padankan huruf mad dengan bunyinya", pairs:[
          {left:"بَا", right:"baa"},
          {left:"بُو", right:"buu"},
          {left:"بِي", right:"bii"},
          {left:"نَا", right:"naa"},
        ]},
        // Speak: zikir & common phrases
        { type:"speak", word:"الله", level:2, lang:"ar", hint:"Allah" },
        { type:"speak", word:"بِسْمِ اللهِ", level:2, lang:"ar", hint:"Bismillaah" },
        { type:"speak", word:"الرَّحْمَنِ", level:3, lang:"ar", hint:"Ar-Rahmaani" },
        { type:"speak", word:"الرَّحِيمِ", level:3, lang:"ar", hint:"Ar-Rahiimi" },
        { type:"speak", word:"سُبْحَانَ اللهِ", level:3, lang:"ar", hint:"Subhaanallah" },
        { type:"speak", word:"الْحَمْدُ لِلَّهِ", level:3, lang:"ar", hint:"Alhamdulillaah" },
        { type:"speak", word:"اللهُ أَكْبَرُ", level:3, lang:"ar", hint:"Allaahu Akbar" },
        { type:"speak", word:"لَا إِلَهَ إِلَّا اللهُ", level:4, lang:"ar", hint:"Laa ilaaha illallaah" },
      ]
    },

    // ── Iqra 6: Surah-Surah Pendek ───────────────────────────────────────────
    {
      id: "iqra-6",
      title: "Iqra 6 — Surah Pendek",
      icon: "📖",
      questions: [
        // Al-Fatihah
        { type:"speak", word:"بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ", level:4, lang:"ar", hint:"Bismillaahir rahmaanir rahiim" },
        { type:"speak", word:"الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", level:4, lang:"ar", hint:"Alhamdu lillaahi rabbil aalamiin" },
        { type:"speak", word:"الرَّحْمَنِ الرَّحِيمِ", level:4, lang:"ar", hint:"Ar-rahmaanir rahiim" },
        { type:"speak", word:"مَالِكِ يَوْمِ الدِّينِ", level:4, lang:"ar", hint:"Maaliki yawmid diin" },
        { type:"speak", word:"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", level:4, lang:"ar", hint:"Iyyaaka na'budu wa iyyaaka nasta'iin" },
        { type:"speak", word:"اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", level:4, lang:"ar", hint:"Ihdinash shiraathal mustaqiim" },
        // Al-Ikhlas
        { type:"speak", word:"قُلْ هُوَ اللهُ أَحَدٌ", level:4, lang:"ar", hint:"Qul huwallahu ahad" },
        { type:"speak", word:"اللهُ الصَّمَدُ", level:3, lang:"ar", hint:"Allahush shamad" },
        { type:"speak", word:"لَمْ يَلِدْ وَلَمْ يُولَدْ", level:4, lang:"ar", hint:"Lam yalid walam yuulad" },
        { type:"speak", word:"وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", level:4, lang:"ar", hint:"Walam yakullahu kufuwan ahad" },
        // Al-Asr
        { type:"speak", word:"وَالْعَصْرِ", level:2, lang:"ar", hint:"Wal 'ashr" },
        { type:"speak", word:"إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ", level:4, lang:"ar", hint:"Innal insaana lafii khusr" },
        // An-Nas
        { type:"speak", word:"قُلْ أَعُوذُ بِرَبِّ النَّاسِ", level:4, lang:"ar", hint:"Qul a'uuzu bi rabbin naas" },
        { type:"speak", word:"مَلِكِ النَّاسِ", level:3, lang:"ar", hint:"Malikin naas" },
        { type:"speak", word:"إِلَهِ النَّاسِ", level:3, lang:"ar", hint:"Ilahin naas" },
        // Knowledge MCQ
        { type:"mcq", q:"'قُلْ هُوَ اللهُ أَحَدٌ' adalah ayat dari surah ___", answer:"Al-Ikhlas", options:["Al-Fatihah","Al-Ikhlas","Al-Asr","An-Nas"] },
        { type:"mcq", q:"Surah Al-Fatihah mempunyai ___ ayat", answer:"7", options:["5","6","7","8"] },
        { type:"mcq", q:"'الله أكبر' bermaksud ___", answer:"Allah Maha Besar", options:["Allah Maha Besar","Allah Maha Baik","Allah Maha Tahu","Allah Maha Kaya"] },
        { type:"mcq", q:"Surah An-Nas bermaksud ___", answer:"Manusia", options:["Waktu Asar","Manusia","Ikhlas","Fajar"] },
      ]
    },
  ]
};

export { IQRA };
