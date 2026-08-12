// Mengaji Iqra — Silibus sebenar Iqra 1-6 (Darul Kitab / KPM)
// Semua soalan jenis 'speak' — tunjuk teks Arab, murid baca kuat guna mic
// Sistem dinamik: setiap sesi = 20 perkataan rawak dari bank

// ─── Helper ────────────────────────────────────────────────────────────────
function buildIqraSession(bank) {
  const shuffled = [...bank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(20, shuffled.length)).map(item => ({
    type: 'speak',
    word: item.w,
    hint: item.h,
    level: item.l || 1,
    lang: 'ar',
  }));
}

// ─── Iqra 1 ─────────────────────────────────────────────────────────────────
// Huruf tunggal dengan baris atas (fathah)
const IQRA1_BANK = [
  { w:'أَ', h:'a', l:1 },   { w:'بَ', h:'ba', l:1 },  { w:'تَ', h:'ta', l:1 },
  { w:'ثَ', h:'tsa', l:1 }, { w:'جَ', h:'ja', l:1 },  { w:'حَ', h:'ha', l:1 },
  { w:'خَ', h:'kha', l:1 }, { w:'دَ', h:'da', l:1 },  { w:'ذَ', h:'dza', l:1 },
  { w:'رَ', h:'ra', l:1 },  { w:'زَ', h:'za', l:1 },  { w:'سَ', h:'sa', l:1 },
  { w:'شَ', h:'sya', l:1 }, { w:'صَ', h:'sho', l:1 }, { w:'ضَ', h:'dho', l:1 },
  { w:'طَ', h:'tho', l:1 }, { w:'ظَ', h:'zho', l:1 }, { w:'عَ', h:"a'", l:1 },
  { w:'غَ', h:'gho', l:1 }, { w:'فَ', h:'fa', l:1 },  { w:'قَ', h:'qa', l:1 },
  { w:'كَ', h:'ka', l:1 },  { w:'لَ', h:'la', l:1 },  { w:'مَ', h:'ma', l:1 },
  { w:'نَ', h:'na', l:1 },  { w:'وَ', h:'wa', l:1 },  { w:'هَ', h:'ha', l:1 },
  { w:'يَ', h:'ya', l:1 },
];

// ─── Iqra 2 ─────────────────────────────────────────────────────────────────
// Huruf dengan ketiga-tiga baris (fathah / kasrah / dammah)
const IQRA2_BANK = [
  { w:'بَ', h:'ba', l:1 }, { w:'بِ', h:'bi', l:1 }, { w:'بُ', h:'bu', l:1 },
  { w:'تَ', h:'ta', l:1 }, { w:'تِ', h:'ti', l:1 }, { w:'تُ', h:'tu', l:1 },
  { w:'ثَ', h:'tsa', l:1 }, { w:'ثِ', h:'tsi', l:1 }, { w:'ثُ', h:'tsu', l:1 },
  { w:'جَ', h:'ja', l:1 }, { w:'جِ', h:'ji', l:1 }, { w:'جُ', h:'ju', l:1 },
  { w:'حَ', h:'ha', l:1 }, { w:'حِ', h:'hi', l:1 }, { w:'حُ', h:'hu', l:1 },
  { w:'خَ', h:'kha', l:1 }, { w:'خِ', h:'khi', l:1 }, { w:'خُ', h:'khu', l:1 },
  { w:'دَ', h:'da', l:1 }, { w:'دِ', h:'di', l:1 }, { w:'دُ', h:'du', l:1 },
  { w:'رَ', h:'ra', l:1 }, { w:'رِ', h:'ri', l:1 }, { w:'رُ', h:'ru', l:1 },
  { w:'سَ', h:'sa', l:1 }, { w:'سِ', h:'si', l:1 }, { w:'سُ', h:'su', l:1 },
  { w:'كَ', h:'ka', l:1 }, { w:'كِ', h:'ki', l:1 }, { w:'كُ', h:'ku', l:1 },
  { w:'لَ', h:'la', l:1 }, { w:'لِ', h:'li', l:1 }, { w:'لُ', h:'lu', l:1 },
  { w:'مَ', h:'ma', l:1 }, { w:'مِ', h:'mi', l:1 }, { w:'مُ', h:'mu', l:1 },
  { w:'نَ', h:'na', l:1 }, { w:'نِ', h:'ni', l:1 }, { w:'نُ', h:'nu', l:1 },
  { w:'فَ', h:'fa', l:1 }, { w:'فِ', h:'fi', l:1 }, { w:'فُ', h:'fu', l:1 },
  { w:'قَ', h:'qa', l:1 }, { w:'قِ', h:'qi', l:1 }, { w:'قُ', h:'qu', l:1 },
  { w:'هَ', h:'ha', l:1 }, { w:'هِ', h:'hi', l:1 }, { w:'هُ', h:'hu', l:1 },
  { w:'يَ', h:'ya', l:1 }, { w:'يِ', h:'yi', l:1 }, { w:'يُ', h:'yu', l:1 },
  { w:'وَ', h:'wa', l:1 }, { w:'وِ', h:'wi', l:1 }, { w:'وُ', h:'wu', l:1 },
];

// ─── Iqra 3 ─────────────────────────────────────────────────────────────────
// Mad (panjang) vs pendek — perkataan sebenar dari Book 3
const IQRA3_BANK = [
  // Latihan suku kata pendek (pg 1)
  { w:'تَتَ', h:'ta-ta', l:2 }, { w:'دَدَ', h:'da-da', l:2 }, { w:'نَنَ', h:'na-na', l:2 },
  { w:'مَرَمَ', h:'ma-ra-ma', l:2 }, { w:'نَبَتَ', h:'na-ba-ta', l:2 },
  { w:'نَجَسَ', h:'na-ja-sa', l:2 }, { w:'نَجِسَ', h:'na-ji-sa', l:2 },
  { w:'بَبَبَ', h:'ba-ba-ba', l:2 }, { w:'بِبِتَ', h:'bi-bi-ta', l:2 },
  { w:'تَتِتَ', h:'ta-ti-ta', l:2 },
  { w:'بَلَدٌ', h:'baladun', l:2 }, { w:'حَسَنٌ', h:'hasanun', l:2 },
  { w:'حَسَنٍ', h:'hasanin', l:2 }, { w:'عَمِلَ', h:'amila', l:2 },
  { w:'شَهِدَ', h:'shahida', l:2 }, { w:'فَهِمَ', h:'fahima', l:2 },
  { w:'لَزِمَ', h:'lazima', l:2 },
  // Mad vs pendek (pg 2)
  { w:'فَعَلَ', h:'fa-ala', l:2 }, { w:'فَاعِلٌ', h:'faa-ilun', l:2 },
  { w:'حَسَدٌ', h:'hasadun', l:2 }, { w:'حَاسِدٌ', h:'haasidun', l:2 },
  { w:'كَتَبَ', h:'kataba', l:2 }, { w:'كَاتِبٌ', h:'kaatibun', l:2 },
  { w:'خَطَبَ', h:'khatoba', l:2 }, { w:'خَاطِبٌ', h:'khaatibun', l:2 },
  { w:'قَرَأَ', h:'qara-a', l:2 }, { w:'قَارِئٌ', h:'qaari-un', l:2 },
  { w:'بَايَنَ', h:'baayano', l:2 }, { w:'مَالَكَ', h:'maalaka', l:2 },
  { w:'عَالَمٌ', h:'aalamun', l:2 }, { w:'شَاهَدَ', h:'shaahada', l:2 },
  { w:'شَاهِدٌ', h:'shaahidun', l:2 }, { w:'صِرَاطٌ', h:'shiroothun', l:2 },
  { w:'جِهَادٌ', h:'jihaadun', l:2 }, { w:'بِلَادٌ', h:'bilaadun', l:2 },
  // Pg 3
  { w:'ثَابِتٌ', h:'tsaabitun', l:2 }, { w:'عَاصِفٌ', h:'aaashifun', l:2 },
  { w:'بَاطِلٌ', h:'baathilun', l:2 }, { w:'قَادِرٌ', h:'qoodirun', l:2 },
  { w:'هَادِى', h:'haadiy', l:2 }, { w:'ظَاهِرٌ', h:'zhaahirun', l:2 },
  { w:'بَاطِنٌ', h:'baathinun', l:2 }, { w:'كِرَامٌ', h:'kiraamun', l:2 },
  { w:'حَافِظٌ', h:'haafizhun', l:2 }, { w:'رَوَاسِى', h:'rawaasiy', l:2 },
  // Mad ya (ii) — pg 6
  { w:'بَصِيرٌ', h:'bashiirun', l:2 }, { w:'قَدِيرٌ', h:'qadiirun', l:2 },
  { w:'سَمِيعٌ', h:'samii-un', l:2 }, { w:'حَكِيمٌ', h:'hakiimun', l:2 },
  { w:'كَبِيرٌ', h:'kabiirun', l:2 }, { w:'نَذِيرٌ', h:'nadziiirun', l:2 },
  { w:'سَامِعٌ', h:'saami-un', l:2 }, { w:'حَاكِمٌ', h:'haakimun', l:2 },
  // Mad waw (uu)
  { w:'يَتُوبُ', h:'yatuubu', l:2 }, { w:'يَقُولُ', h:'yaquulu', l:2 },
  { w:'كَانَ', h:'kaana', l:2 }, { w:'يَكُونُ', h:'yakuunu', l:2 },
  { w:'يُرِيدُونَ', h:'yuriiduuna', l:2 }, { w:'يُقِيمُونَ', h:'yuqiimuuna', l:2 },
  // Pg 8: ha' dhomir
  { w:'هَالَكَ', h:'haalaka', l:2 }, { w:'نَهَرٌ', h:'naharun', l:2 },
  { w:'شَهَدَ', h:'shahada', l:2 }, { w:'هَدَمَ', h:'hadama', l:2 },
  { w:'فِيهِمَا', h:'fiihima', l:2 },
];

// ─── Iqra 4 ─────────────────────────────────────────────────────────────────
// Huruf mati (sukun) + Asmaul Husna
const IQRA4_BANK = [
  // Perkataan dengan pelbagai baris
  { w:'فَعَلَ', h:'fa-ala', l:2 }, { w:'كُتُبٌ', h:'kutubun', l:2 },
  { w:'قَرَأَ', h:'qara-a', l:2 }, { w:'ضَرَبَ', h:'dhoroba', l:2 },
  { w:'حَسُنَ', h:'hasuna', l:2 }, { w:'فَهُوَ', h:'fahuwa', l:2 },
  { w:'يَمُنُ', h:'yamunu', l:2 }, { w:'كَرُمَ', h:'karuma', l:2 },
  { w:'قَرُبَ', h:'qaruba', l:2 }, { w:'رَجُلٌ', h:'rajulun', l:2 },
  { w:'عَظُمَ', h:'adhuma', l:2 }, { w:'كَثُرَ', h:'katsura', l:2 },
  { w:'رُسُلٌ', h:'rusulun', l:2 },
  // Asmaul Husna (pg 15)
  { w:'خَالِقٌ', h:'khooliqun', l:2 }, { w:'بَارِئٌ', h:'baari-un', l:2 },
  { w:'قَابِضٌ', h:'qaabidhlun', l:2 }, { w:'بَاسِطٌ', h:'baasithun', l:2 },
  { w:'حَلِيمٌ', h:'haliimun', l:2 }, { w:'عَظِيمٌ', h:'azhiimun', l:2 },
  { w:'حَفِيظٌ', h:'haafizhun', l:2 }, { w:'جَلِيلٌ', h:'jaliilun', l:2 },
  { w:'رَافِعٌ', h:'raafi-un', l:2 }, { w:'وَاسِعٌ', h:'waasi-un', l:2 },
  { w:'بَاعِثٌ', h:'baa-itsun', l:2 }, { w:'مَاجِدٌ', h:'maajidun', l:2 },
  { w:'رَقِيبٌ', h:'raqiibun', l:2 }, { w:'مَجِيدٌ', h:'majiidun', l:2 },
  { w:'شَهِيدٌ', h:'shahiidun', l:2 }, { w:'وَكِيلٌ', h:'wakiilun', l:2 },
  { w:'مُعِيدٌ', h:'mu-iidun', l:2 }, { w:'مُمِيتٌ', h:'mumiitun', l:2 },
  { w:'مُقِيتٌ', h:'muqiitun', l:2 }, { w:'مُجِيبٌ', h:'mujiibun', l:2 },
];

// ─── Iqra 5 ─────────────────────────────────────────────────────────────────
// Ayat-ayat Quran
const IQRA5_BANK = [
  { w:'تَابَ', h:'taaba', l:2 }, { w:'يَتُوبُ', h:'yatuubu', l:2 },
  { w:'قَالَ', h:'qaala', l:2 }, { w:'يَقُولُ', h:'yaquulu', l:2 },
  { w:'عَادَ', h:'aada', l:2 }, { w:'يَعُودُ', h:'ya-uudu', l:2 },
  { w:'كَانَ', h:'kaana', l:2 }, { w:'يَكُونُ', h:'yakuunu', l:2 },
  { w:'قَالُوا', h:'qaaluu', l:3 },
  { w:'هَاجَرُوا وَجَاهَدُوا', h:'haajaruu wa jaahaduu', l:3 },
  { w:'صَابَرُوا وَرَابَطُوا', h:'shaabaruu wa raabathuu', l:3 },
  { w:'مَعَهُ', h:'ma-ahu', l:2 }, { w:'يَدَهُ', h:'yadahu', l:2 },
  { w:'وَلَدَهُ', h:'waladahu', l:2 }, { w:'يَرَهُ', h:'yarahu', l:2 },
  { w:'يُرِيدُونَ', h:'yuriiduuna', l:3 }, { w:'يُضِيعُونَ', h:'yudhii-uuna', l:3 },
  { w:'يُحِيطُونَ', h:'yuhiithuuna', l:3 }, { w:'يَخَافُونَ', h:'yakhaafuuna', l:3 },
  { w:'يَسُوقُونَ', h:'yasuuquuna', l:3 }, { w:'لِيُوفُونَ', h:'liyuufuuna', l:3 },
  { w:'مَنَازِلُ', h:'manaazilu', l:2 }, { w:'مَشَارِقُ', h:'masyaariqu', l:2 },
  { w:'مَعَايِشُ', h:'ma-aayisyu', l:2 },
];

// ─── Iqra 6 ─────────────────────────────────────────────────────────────────
// Surah-surah pendek lengkap
const IQRA6_BANK = [
  // Al-Fatihah
  { w:'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ', h:'Bismillaahir rahmaanir rahiim', l:4 },
  { w:'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', h:'Alhamdu lillaahi rabbil aalamiin', l:4 },
  { w:'الرَّحْمَنِ الرَّحِيمِ', h:'Ar-rahmaanir rahiim', l:3 },
  { w:'مَالِكِ يَوْمِ الدِّينِ', h:'Maaliki yawmid diin', l:3 },
  { w:'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', h:"Iyyaaka na'budu wa iyyaaka nasta'iin", l:4 },
  { w:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', h:'Ihdinash shiraathal mustaqiim', l:4 },
  { w:'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ', h:'Shiraathal ladziina an-amta alayhim', l:4 },
  { w:'غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', h:'Ghayril maghdhuubi alayhim walad dhooliin', l:4 },
  // Al-Ikhlas
  { w:'قُلْ هُوَ اللهُ أَحَدٌ', h:'Qul huwallahu ahad', l:3 },
  { w:'اللهُ الصَّمَدُ', h:'Allahush shamad', l:2 },
  { w:'لَمْ يَلِدْ وَلَمْ يُولَدْ', h:'Lam yalid walam yuulad', l:3 },
  { w:'وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ', h:'Walam yakullahu kufuwan ahad', l:4 },
  // Al-Asr
  { w:'وَالْعَصْرِ', h:'Wal ashr', l:2 },
  { w:'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ', h:'Innal insaana lafii khusr', l:3 },
  { w:'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ', h:'Illal ladziina aamanuu wa amilush shaalihaat', l:4 },
  { w:'وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ', h:'Wa tawaashau bil haqqi wa tawaashau bish shabr', l:4 },
  // An-Nasr
  { w:'إِذَا جَاءَ نَصْرُ اللهِ وَالْفَتْحُ', h:'Idzaa jaa-a nashrullaahi wal fath', l:4 },
  { w:'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ', h:'Fasabbih bihamdi rabbika wastaghfirh', l:4 },
  // An-Nas
  { w:'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', h:"Qul a'uuzu bi rabbin naas", l:3 },
  { w:'مَلِكِ النَّاسِ', h:'Malikin naas', l:2 },
  { w:'إِلَهِ النَّاسِ', h:'Ilahin naas', l:2 },
  { w:'مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', h:'Min sharril waswaasil khannaas', l:4 },
  { w:'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', h:'Alladzii yuwaswisu fii shuduurin naas', l:4 },
  { w:'مِنَ الْجِنَّةِ وَالنَّاسِ', h:'Minal jinnati wan naas', l:3 },
];

// ─── Subject object ─────────────────────────────────────────────────────────
const IQRA = {
  label: "Mengaji Iqra",
  icon: "🕌",
  color: "#1ABC9C",

  tahun6: [
    {
      id: "iqra-1",
      title: "Iqra 1 — Huruf Fathah",
      icon: "🔤",
      dynamic: true,
      getQuestions: () => buildIqraSession(IQRA1_BANK),
      questions: [],
    },
    {
      id: "iqra-2",
      title: "Iqra 2 — Tiga Baris",
      icon: "✨",
      dynamic: true,
      getQuestions: () => buildIqraSession(IQRA2_BANK),
      questions: [],
    },
    {
      id: "iqra-3",
      title: "Iqra 3 — Mad & Pendek",
      icon: "📏",
      dynamic: true,
      getQuestions: () => buildIqraSession(IQRA3_BANK),
      questions: [],
    },
  ],

  darjah1: [
    {
      id: "iqra-4",
      title: "Iqra 4 — Huruf Mati & Dhomir",
      icon: "📚",
      dynamic: true,
      getQuestions: () => buildIqraSession(IQRA4_BANK),
      questions: [],
    },
    {
      id: "iqra-5",
      title: "Iqra 5 — Ayat-Ayat Quran",
      icon: "🌙",
      dynamic: true,
      getQuestions: () => buildIqraSession(IQRA5_BANK),
      questions: [],
    },
    {
      id: "iqra-6",
      title: "Iqra 6 — Surah Pendek",
      icon: "📖",
      dynamic: true,
      getQuestions: () => buildIqraSession(IQRA6_BANK),
      questions: [],
    },
  ]
};

export { IQRA };
