import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyC6TbStfWv2lE3qvQxf8WMsUJNlhVMpc_Q",
  authDomain:        "brain-refresh-db364.firebaseapp.com",
  projectId:         "brain-refresh-db364",
  storageBucket:     "brain-refresh-db364.firebasestorage.app",
  messagingSenderId: "179174675906",
  appId:             "1:179174675906:web:0d3bfb01216a1e78e8b25b"
};

const app = getApps().find(a => a.name === "edukid") || initializeApp(firebaseConfig, "edukid");
const db  = getFirestore(app);

// Save one quiz attempt
export async function saveAttempt({ subject, topicId, topicTitle, grade, correct, total, stars, profile }) {
  try {
    await addDoc(collection(db, "edukid_progress"), {
      subject, topicId, topicTitle, grade,
      correct, total,
      percentage: Math.round((correct / total) * 100),
      stars,
      profile: profile || 'aalaa',
      timestamp: serverTimestamp()
    });
  } catch (e) {
    console.warn("Firestore save failed, using localStorage only:", e);
  }
}

// Get all attempts — for admin page
export async function getAllAttempts() {
  try {
    const q    = query(collection(db, "edukid_progress"), orderBy("timestamp", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (e) {
    console.warn("Firestore read failed:", e);
    return [];
  }
}
