import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// FIREBASE SETUP-------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyB4x0M8RUuctl0yPZfdCuQfeiaRhwqLbgw",
  authDomain: "aac-note-app-6d553.firebaseapp.com",
  projectId: "aac-note-app-6d553",
  storageBucket: "aac-note-app-6d553.appspot.com",
  messagingSenderId: "816317025413",
  appId: "1:816317025413:web:54a9c886a6ccb483152dec"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

// FIREBASE SETUP ENDED-----------------------