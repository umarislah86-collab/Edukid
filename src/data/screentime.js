// Screen time logic — earn by completing topics, track balance
import { getFirestore, collection, addDoc, getDocs, query,
         orderBy, serverTimestamp, doc, setDoc, getDoc }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getApps, initializeApp, getApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

const firebaseConfig = {
  apiKey:            "AIzaSyC6TbStfWv2lE3qvQxf8WMsUJNlhVMpc_Q",
  authDomain:        "brain-refresh-db364.firebaseapp.com",
  projectId:         "brain-refresh-db364",
  storageBucket:     "brain-refresh-db364.firebasestorage.app",
  messagingSenderId: "179174675906",
  appId:             "1:179174675906:web:0d3bfb01216a1e78e8b25b"
};

function getDb() {
  const app = getApps().find(a => a.name === "edukid") || initializeApp(firebaseConfig, "edukid");
  return getFirestore(app);
}

const LOCAL_KEY = "edukid_screentime";

// ── Earn minutes based on stars ───────────────────────────────────
// 1-2 stars = 5 min, 3 stars = 15 min
export function calcEarned(stars) {
  return stars >= 3 ? 15 : stars >= 1 ? 5 : 0;
}

// ── Local balance (fast, offline-safe) ───────────────────────────
function loadLocal() {
  try { return JSON.parse(localStorage.getItem(LOCAL_KEY)) || { balance: 0 }; }
  catch { return { balance: 0 }; }
}
function saveLocal(data) { localStorage.setItem(LOCAL_KEY, JSON.stringify(data)); }

export function getBalance() { return loadLocal().balance || 0; }

export function addBalance(minutes) {
  const d = loadLocal();
  d.balance = (d.balance || 0) + minutes;
  saveLocal(d);
  return d.balance;
}

export function spendBalance(minutes) {
  const d = loadLocal();
  d.balance = Math.max(0, (d.balance || 0) - minutes);
  saveLocal(d);
  return d.balance;
}

// ── Save to Firestore (for admin tracking) ────────────────────────
export async function recordEarned({ topicTitle, subject, grade, stars, minutesEarned, newBalance, profile }) {
  try {
    const db = getDb();
    await addDoc(collection(db, "edukid_screentime"), {
      type: "earned",
      topicTitle, subject, grade, stars,
      minutesEarned, newBalance,
      profile: profile || 'aalaa',
      timestamp: serverTimestamp()
    });
    // also update the running balance doc
    await setDoc(doc(db, "edukid_meta", "screentime"), {
      balance: newBalance,
      updatedAt: serverTimestamp()
    });
  } catch (e) { console.warn("Firestore screentime save failed:", e); }
}

export async function recordSpent({ minutesSpent, note, newBalance }) {
  try {
    const db = getDb();
    await addDoc(collection(db, "edukid_screentime"), {
      type: "spent",
      minutesSpent, note, newBalance,
      timestamp: serverTimestamp()
    });
    await setDoc(doc(db, "edukid_meta", "screentime"), {
      balance: newBalance,
      updatedAt: serverTimestamp()
    });
  } catch (e) { console.warn("Firestore screentime save failed:", e); }
}

export async function getAllScreentimeRecords() {
  try {
    const db   = getDb();
    const q    = query(collection(db, "edukid_screentime"), orderBy("timestamp", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch { return []; }
}

// ── Sync balance from Firestore on load ──────────────────────────
export async function syncBalanceFromCloud() {
  try {
    const db   = getDb();
    const snap = await getDoc(doc(db, "edukid_meta", "screentime"));
    if (snap.exists()) {
      const cloudBal = snap.data().balance || 0;
      const local    = loadLocal();
      // take higher of local vs cloud (safer)
      local.balance  = Math.max(local.balance || 0, cloudBal);
      saveLocal(local);
      return local.balance;
    }
  } catch { /* offline — use local */ }
  return getBalance();
}
