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
// Huruf tunggal dengan baris atas (fathah): أَ بَ تَ ثَ جَ حَ خَ دَ ذَ رَ زَ سَ شَ صَ ضَ طَ ظَ عَ غَ فَ قَ كَ لَ مَ نَ وَ هَ يَ
const IQRA1_BANK = [
  { w:'أَ', h:'a', l:1 },
  { w:'بَ', h:'ba', l:1 },
  { w:'تَ', h:'ta', l:1 },
  { w:'ثَ', h:'tha', l:1 },
  { w:'جَ', h:'ja', l:1 },
  { w:'حَ', h:'ha', l:1 },
  { w:'خَ', h:'kha', l:1 },
  { w:'دَ', h:'da', l:1 },
  { w:'ذَ', h:'dza', l:1 },
  { w:'رَ', h:'ra', l:1 },
  { w:'زَ', h:'za', l:1 },
  { w:'سَ', h:'sa', l:1 },
  { w:'شَ', h:'sya', l:1 },
  { w:'صَ', h:'sho', l:1 },
  { w:'ضَ', h:'dho', l:1 },
  { w:'طَ', h:'tho', l:1 },
  { w:'ظَ', h:'zho', l:1 },
  { w:'عَ', h:"a'", l:1 },
  { w:'غَ', h:'gho', l:1 },
  { w:'فَ', h:'fa', l:1 },
  { w:'قَ', h:'qa', l:1 },
  { w:'كَ', h:'ka', l:1 },
  { w:'لَ', h:'la', l:1 },
  { w:'مَ', h:'ma', l:1 },
  { w:'نَ', h:'na', l:1 },
  { w:'وَ', h:'wa', l:1 },
  { w:'هَ', h:'ha', l:1 },
  { w:'يَ', h:'ya', l:1 },
];

// ─── Iqra 2 ─────────────────────────────────────────────────────────────────
// Huruf dengan ketiga-tiga baris (a / i / u) — latihan asas semua harakat
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
// Latihan Mad (panjang) vs pendek — perkataan sebenar dari Book 3
// Pendek = 1 baris, Panjang = ada alif/waw/ya mad
const IQRA3_BANK = [
  // Dari pg 1: short reading
  { w:'تَت', h:'tat', l:2 }, { w:'دَد', h:'dad', l:2 }, { w:'نَن', h:'nan', l:2 },
  { w:'مَرَم', h:'maram', l:2 }, { w:'بَبَب', h:'babab', l:2 }, { w:'بِبِت', h:'bibit', l:2 },
  { w:'تَتِت', h:'tatit', l:2 }, { w:'نَبَت', h:'nabat', l:2 }, { w:'نَجَس', h:'najas', l:2 },
  { w:'نَجِس', h:'najis', l:2 }, { w:'بَلَد', h:'balad', l:2 }, { w:'حَسَن', h:'hasan', l:2 },
  { w:'حَسَنٍ', h:'hasanin', l:2 }, { w:'عَمِل', h:"amil", l:2 }, { w:'شَهِد', h:'shahid', l:2 },
  { w:'فَهِمَ', h:'fahima', l:2 }, { w:'لَزِمَ', h:'lazima', l:2 },
  // Pg 2: Mad vs non-mad contrast
  { w:'فَعَل', h:'fa-ala', l:2 }, { w:'فَاعِل', h:'faa-il', l:2 },
  { w:'حَسَد', h:'hasad', l:2 }, { w:'حَاسِد', h:'haasid', l:2 },
  { w:'كَتَب', h:'katab', l:2 }, { w:'كَاتِب', h:'kaatib', l:2 },
  { w:'خَطَب', h:'khatab', l:2 }, { w:'خَاطِب', h:'khaatib', l:2 },
  { w:'قَرَأ', h:'qara-a', l:2 }, { w:'قَارِئ', h:'qaari', l:2 },
  { w:'بَايَن', h:'baayana', l:2 }, { w:'مَالَك', h:'maalaka', l:2 },
  { w:'عَالَم', h:'aalam', l:2 }, { w:'شَاهَد', h:'shaahad', l:2 },
  { w:'شَاهِد', h:'shaahid', l:2 }, { w:'صِرَاط', h:'shiraath', l:2 },
  { w:'جِهَاد', h:'jihaad', l:2 }, { w:'بِلَاد', h:'bilaad', l:2 },
  // Pg 3: More words
  { w:'ثَابِت', h:'tsaabit', l:2 }, { w:'عَاصِف', h:"aashif", l:2 },
  { w:'بَاطِل', h:'baathil', l:2 }, { w:'قَادِر', h:'qaadir', l:2 },
  { w:'هَادِى', h:'haadi', l:2 }, { w:'ظَاهِر', h:'zhaahir', l:2 },
  { w:'بَاطِن', h:'baathin', l:2 }, { w:'كِرَام', h:'kiraam', l:2 },
  { w:'حَافِظ', h:'haafizh', l:2 }, { w:'رَوَاسِى', h:'rawaasi', l:2 },
  // Pg 5-6: Mad ya (ii) and Mad waw (uu)
  { w:'جَجِيد', h:'jajiid', l:2 }, { w:'نِنِي', h:'ninii', l:2 },
  { w:'لِلِي', h:'lilii', l:2 }, { w:'فِفِي', h:'fifii', l:2 },
  { w:'بَصِير', h:'bashiir', l:2 }, { w:'قَدِير', h:'qadiir', l:2 },
  { w:'سَمِيع', h:'samii', l:2 }, { w:'حَكِيم', h:'hakiim', l:2 },
  { w:'كَبِير', h:'kabiir', l:2 }, { w:'نَذِير', h:'nadziir', l:2 },
  // Mad waw
  { w:'يَتُوب', h:'yatuub', l:2 }, { w:'يَقُول', h:'yaquul', l:2 },
  { w:'كَانَ', h:'kaana', l:2 }, { w:'يَكُون', h:'yakuun', l:2 },
  { w:'يُرِيدُون', h:'yuriiduun', l:2 }, { w:'يُقِيمُون', h:'yuqiimuun', l:2 },
  { w:'سَامِع', h:'saami', l:2 }, { w:'حَاكِم', h:'haakim', l:2 },
  // Pg 8: ha' dhomir
  { w:'هَالَك', h:'haalak', l:2 }, { w:'نَهَر', h:'nahar', l:2 },
  { w:'هَمَر', h:'hamar', l:2 }, { w:'شَهَد', h:'shahad', l:2 },
  { w:'هَدَم', h:'hadam', l:2 }, { w:'فِيهِمَا', h:'fiihima', l:2 },
];

// ─── Iqra 4 ─────────────────────────────────────────────────────────────────
// Huruf mati / sukun — konsonan di hujung suku kata
// dan permulaan Tanwin + ayat-ayat pendek
const IQRA4_BANK = [
  // Dari pg 14: huruf dengan dammah (dhomir)
  { w:'بَ بِ بُ', h:'ba bi bu', l:2 }, { w:'تَ تِ تُ', h:'ta ti tu', l:2 },
  { w:'جَ جِ جُ', h:'ja ji ju', l:2 }, { w:'دَ دِ دُ', h:'da di du', l:2 },
  // Perkataan dengan sukun
  { w:'فَعَل', h:'fa-al', l:2 }, { w:'فِعِل', h:'fi-il', l:2 }, { w:'كُتُب', h:'kutub', l:2 },
  { w:'قَرَأ', h:'qara-a', l:2 }, { w:'ضَرَب', h:'dhorob', l:2 }, { w:'قُرِئ', h:'quri-a', l:2 },
  { w:'حَسُن', h:'hasun', l:2 }, { w:'فَهُو', h:'fahuu', l:2 }, { w:'يَمُن', h:'yamun', l:2 },
  { w:'ضُحَم', h:'dhuham', l:2 }, { w:'كَرُم', h:'karum', l:2 }, { w:'قَرُب', h:'qarub', l:2 },
  { w:'رَجُل', h:'rajul', l:2 }, { w:'عَظَم', h:'azham', l:2 }, { w:'كَثَر', h:'katsur', l:2 },
  { w:'رُسُل', h:'rusul', l:2 },
  // Pg 15: Asmaul Husna (perkataan-perkataan Allah)
  { w:'خَالِق', h:'khaaliq', l:2 }, { w:'بَارِئ', h:'baari', l:2 },
  { w:'قَابِض', h:'qaabidh', l:2 }, { w:'بَاسِط', h:'baasith', l:2 },
  { w:'حَلِيم', h:'haliim', l:2 }, { w:'عَظِيم', h:'azhiim', l:2 },
  { w:'حَفِيظ', h:'hafiizh', l:2 }, { w:'جَلِيل', h:'jaliil', l:2 },
  { w:'رَافِع', h:'raafi', l:2 }, { w:'وَاسِع', h:'waasi', l:2 },
  { w:'بَاعِث', h:'baa-its', l:2 }, { w:'مَاجِد', h:'maajid', l:2 },
  { w:'رَقِيب', h:'raqiib', l:2 }, { w:'مَجِيد', h:'majiid', l:2 },
  { w:'شَهِيد', h:'shahiid', l:2 }, { w:'وَكِيل', h:'wakiil', l:2 },
  { w:'مُعِيد', h:'mu-iid', l:2 }, { w:'مُمِيت', h:'mumiit', l:2 },
  { w:'مُقِيت', h:'muqiit', l:2 }, { w:'مُجِيب', h:'mujiib', l:2 },
];

// ─── Iqra 5 ─────────────────────────────────────────────────────────────────
// Ayat-ayat pendek dari Quran + kalimah penting
const IQRA5_BANK = [
  // Dari pg 17-20: ayat-ayat
  { w:'تَابَ', h:'taaba', l:2 }, { w:'يَتُوبُ', h:'yatuubu', l:2 },
  { w:'قَالَ', h:'qaala', l:2 }, { w:'يَقُولُ', h:'yaquulu', l:2 },
  { w:'عَادَ', h:'aada', l:2 }, { w:'يَعُودُ', h:'ya-uudu', l:2 },
  { w:'كَانَ', h:'kaana', l:2 }, { w:'يَكُونُ', h:'yakuunu', l:2 },
  { w:'قَالُوا', h:'qaaluu', l:3 }, { w:'فَإِذَارَكِبُوا', h:'fa-idzaa rakibuu', l:3 },
  { w:'لَاتَخُونُوا', h:'laa takhuunuu', l:3 },
  { w:'هَاجَرُوا وَجَاهَدُوا', h:'haajaruu wa jaahaduu', l:3 },
  { w:'صَابَرُوا وَرَابَطُوا', h:'shaabaruu wa raabathuu', l:3 },
  // Pg 19: waw dhomir
  { w:'مَعَهُو', h:'ma-ahuu', l:2 }, { w:'يَدَهُو', h:'yadahuu', l:2 },
  { w:'وَلَدَهُو', h:'waladahuu', l:2 }, { w:'يَرَهُو', h:'yarahuu', l:2 },
  { w:'فِيمَاكَانُوا', h:'fiimaa kaanuu', l:3 },
  { w:'مَوَازِنَهُو', h:'mawaazinahu', l:2 },
  // Pg 20-22: ayat-ayat Quran pendek
  { w:'يُرِيدُونَ', h:'yuriiduuna', l:3 }, { w:'يُضِيعُونَ', h:'yudhi-uuna', l:3 },
  { w:'يُحِيطُونَ', h:'yuhiithuuna', l:3 }, { w:'يَخَافُونَ', h:'yakhaafuuna', l:3 },
  { w:'يَسُوقُونَ', h:'yasuuquuna', l:3 }, { w:'لِيُوفُونَ', h:'liyuufuuna', l:3 },
  { w:'مَنَازِل', h:'manaazil', l:2 }, { w:'مَشَارِق', h:'masyaariq', l:2 },
  { w:'مَعَايِش', h:'ma-aayisy', l:2 },
];

// ─── Iqra 6 ─────────────────────────────────────────────────────────────────
// Ayat-ayat Quran penuh dari surah-surah dalam buku + surah pendek
const IQRA6_BANK = [
  // Al-Fatihah
  { w:'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ', h:'Bismillaahir rahmaanir rahiim', l:4 },
  { w:'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', h:'Alhamdu lillaahi rabbil aalamiin', l:4 },
  { w:'الرَّحْمَنِ الرَّحِيمِ', h:'Ar-rahmaanir rahiim', l:3 },
  { w:'مَالِكِ يَوْمِ الدِّينِ', h:'Maaliki yawmid diin', l:3 },
  { w:'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', h:'Iyyaaka na-budu wa iyyaaka nasta-iin', l:4 },
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
  { w:'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللهِ أَفْوَاجًا', h:'Wa ra-aytan naasa yadkhuluuna fii diinillaahi afwaaja', l:4 },
  { w:'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ', h:'Fasabbih bihamdi rabbika wastaghfirh', l:4 },
  // An-Nas
  { w:'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', h:'Qul a-uuzu bi rabbin naas', l:3 },
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
