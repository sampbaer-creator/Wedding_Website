// js/firebase.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDmTi3TpcdCPEQuR1X_yEnYjiITu8bv_aQ",
  authDomain: "wedding-rsvp-5664f.firebaseapp.com",
  projectId: "wedding-rsvp-5664f",
  storageBucket: "wedding-rsvp-5664f.firebasestorage.app",
  messagingSenderId: "915301851475",
  appId: "1:915301851475:web:93ef9bf22b761fc8fb41a6"
};

let db = null;
try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (e) {
  console.warn('Firebase not initialized. Check your config and network.', e);
}

export { db };
