import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyC6TbStfWv2lE3qvQxf8WMsUJNlhVMpc_Q",
  authDomain:        "brain-refresh-db364.firebaseapp.com",
  projectId:         "brain-refresh-db364",
  storageBucket:     "brain-refresh-db364.appspot.com",
  messagingSenderId: "856031567438",
  appId:             "1:856031567438:web:edukid"
};

const app = initializeApp(firebaseConfig, "edukid");
const db  = getFirestore(app);

// Save one quiz attempt
export async function saveAttempt({ subject, topicId, topicTitle, grade, correct, total, stars }) {
  try {
    await addDoc(collection(db, "edukid_progress"), {
      subject, topicId, topicTitle, grade,
      correct, total,
      percentage: Math.round((correct / total) * 100),
      stars,
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
