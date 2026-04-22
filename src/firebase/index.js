import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS8fn8LxfvOPNS_EdnF2NfznWm71CVAik",
  authDomain: "library-app-2c87c.firebaseapp.com",
  projectId: "library-app-2c87c",
  storageBucket: "library-app-2c87c.firebasestorage.app",
  messagingSenderId: "351761392635",
  appId: "1:351761392635:web:1f12c505cc5bbf039c215e",
  measurementId: "G-93J4KYKC8H",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
