// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// const firebaseConfig = {
//   apiKey: AIzaSyC_1GoEOEwdTqXujYPAaKthwAGyzqt1-hM,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };


const firebaseConfig = {
    apiKey: "AIzaSyC_1GoEOEwdTqXujYPAaKthwAGyzqt1-hM",
    authDomain: "game1-4e1b2.firebaseapp.com",
    databaseURL: "https://game1-4e1b2-default-rtdb.firebaseio.com",
    projectId: "game1-4e1b2",
    storageBucket: "game1-4e1b2.firebasestorage.app",
    messagingSenderId: "113743408258",
    appId: "1:113743408258:web:3afae6a3239e18768c589b",
    measurementId: "G-8HSW7B4LVY"
  };


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, onValue };
