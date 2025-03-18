import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "deleted key",
  authDomain: "registration-f248f.firebaseapp.com",
  projectId: "registration-f248f",
  storageBucket: "registration-f248f.firebasestorage.app",
  messagingSenderId: "844721791675",
  appId: "1:844721791675:web:fad58b18b78e1f3a3d7f9e",
  measurementId: "G-5GFW4ZQQPH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
